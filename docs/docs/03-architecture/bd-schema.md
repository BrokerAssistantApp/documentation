---
sidebar_position: 2
title: Структура базы данных
description: Схема таблиц и их взаимосвязей в базе данных проекта
---

# Структура базы данных

## Связи таблиц
```mermaid
erDiagram
    direction LR

    %% --- Пользователи и сессии ---
    users ||--o{ sessions : "сессии пользователей"
    users ||--o{ broker_members : "брокер ↔ участник"
    users ||--o{ lots : "брокер создаёт лоты"
    users ||--o{ lot_members : "участвует в лотах"
    users ||--o{ lot_transactions : "транзакции участника"
    users ||--o{ user_plans : "тарифы пользователя"
    users ||--o{ payments : "оплаты пользователя"
    users ||--o{ subscriptions : "подписки пользователя"

    %% --- Участие / Рефералы ---
    lot_members }o--|| users : "партнёр → инвестор (referrer_member)"

    %% --- Лоты и связанные сущности ---
    lots ||--o{ lot_status_history : "история статусов"
    lots ||--o{ lot_sale_price_history : "история изменения цены"
    lots ||--o{ lot_members : "участники лота"
    lots ||--o{ lot_transactions : "транзакции по лоту"
    lots ||--o{ lot_investments : "инвестиции"
    lots ||--o{ lot_expenses : "расходы"
    lots ||--|| lot_financials : "финансовые итоги"
    lots ||--o{ payments : "оплаты по лоту"

    %% --- Финансовые связи ---
    lot_transactions ||--|| lot_investments : "транзакции инвестиций"
    lot_transactions ||--|| lot_expenses : "транзакции расходов"
    user_plans ||--|| payments : "активация тарифа"
    plans ||--o{ user_plans : "тариф в use"
    plans ||--o{ payments : "оплачивается"
    plans ||--o{ subscriptions : "в подписке"
```

## users
```mermaid
erDiagram
    users {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        VARCHAR yandex_id UK "DEFAULT NULL, (20)"
        TEXT email UK "NOT NULL, CHECK (email <= 320)"
        TEXT password_hash
        TEXT auth_method "CHECK (auth_method IN ('password', 'yandex'))"
        TEXT name "NOT NULL, CHECK (name <= 255)"
        BOOLEAN is_broker "DEFAULT true, NOT NULL"
        BOOLEAN is_verified "DEFAULT false, NOT NULL"
        TIMESTAMPTZ updated_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```

## sessions
```mermaid
erDiagram
    sessions {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID user_id FK "REFERENCES users(id) ON DELETE CASCADE"
        TEXT refresh_token UK "NOT NULL"
        TEXT user_agent "NOT NULL"
        TEXT ip_address "NOT NULL"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```

## plans
```mermaid
erDiagram
    plans {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        TEXT code UK "CHECK ('broker_trial', 'broker_lite', 'broker_base', 'broker_plus', 'broker_pro', 'investor_free', 'investor_lite', 'investor_pro', 'academy')"
        TEXT name "NOT NULL, CHECK (name <= 255)"
        TEXT role "CHECK ('broker', 'investor', 'academy')"
        NUMERIC price "DEFAULT 0, (18,2)"
        TEXT price_period "CHECK ('per_lot', 'monthly', 'yearly')"
        JSONB features "DEFAULT '{}'::jsonb"
    }
```
> **Примечание**: В таблице `plans` предусмотрены ключевые ограничения:  
> `code` — UNIQUE, используется как стабильный идентификатор тарифа;  
> `role`, `price_period` — CHECK-ограничения для валидации допустимых значений.

## user_plans
```mermaid
erDiagram
    user_plans {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID user_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"
        UUID plan_id FK "REFERENCES plans(id)"
        UUID payment_id FK "REFERENCES payments(id)"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
        TIMESTAMPTZ expires_at "DEFAULT NULL"
        BOOLEAN is_active "DEFAULT true, INDEX WITH user_id WHERE true"
    }
```
> **Примечание**: В таблице `user_plans` установлены индексы для оптимизации доступа к активному тарифу пользователя:  
> `user_id` — для получения всех тарифов пользователя;  
> `INDEX (user_id, is_active) WHERE is_active` = `true` — для быстрого получения текущего активного тарифа.  
> Также присутствует внешний ключ `payment_id` — для привязки к оплате.

## payments
```mermaid
erDiagram
    payments {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID user_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"
        UUID plan_id FK "REFERENCES plans(id)"
        UUID lot_id FK "REFERENCES lots(id) ON DELETE SET NULL, INDEX"
        NUMERIC amount "CHECK (amount >= 0), (18,2)"
        TEXT payment_type "CHECK ('per_lot', 'subscription')"
        TEXT status "CHECK ('pending', 'paid', 'failed', 'canceled'), INDEX"
        TEXT yookassa_payment_id UK
        TIMESTAMPTZ paid_at "DEFAULT NULL"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```
> **Примечание**: В таблице `payments` установлены индексы для ускорения выборок и обработки оплат:  
> `user_id` — для фильтрации всех оплат пользователя;  
> `status` — для отслеживания состояния транзакций (например, при вебхуке);  
> `lot_id` — индекс по `lot_id` с условием `WHERE lot_id IS NOT NULL` используется только для оплат по лоту;  
> `yookassa_payment_id` — UNIQUE, используется для сопоставления входящих уведомлений от платёжной системы.

## subscriptions
```mermaid
erDiagram
    subscriptions {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID user_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"
        UUID plan_id FK "REFERENCES plans(id)"
        TIMESTAMPTZ next_payment_at "NOT NULL, INDEX"
        TEXT status "CHECK ('active', 'canceled', 'paused'), INDEX"
        TEXT payment_method_id
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```
> **Примечание**: В таблице `subscriptions` предусмотрены индексы для поддержки периодических автосписаний и состояния подписок:  
> `user_id` — для быстрого получения подписки пользователя;  
> `status` — для фильтрации активных / приостановленных / отменённых подписок;  
> `next_payment_at` — индекс используется воркером / cron-задачей для поиска подписок, требующих списания.

## broker_members
```mermaid
erDiagram
    broker_members {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID broker_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"
        UUID member_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"
        TEXT name "NOT NULL, CHECK (name <= 255)"
        TIMESTAMPTZ deleted_at "DEFAULT NULL, INDEX"
    }
```
> **Примечание**: В таблице `broker_members` установлены индексы для оптимизации выборок:  
> `broker_id`, `member_id` и `deleted_at` — для ускорения фильтрации по брокеру, участнику и учёта мягкого удаления.  
> `UNIQUE (broker_id, member_id)` — для исключения повторного добавления одного и того же участника к брокеру.

## lots
```mermaid
erDiagram
    lots {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID broker_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"
        TEXT deal_type "DEFAULT 'syndicated', CHECK (deal_type IN ('self_funded', 'syndicated', 'agency'))"
        TEXT share_input_mode "DEFAULT 'percent', CHECK (share_input_mode IN ('percent', 'currency'))"
        TEXT name "NOT NULL, CHECK (name <= 255)"
        TEXT trade_number "CHECK (trade_number <= 100)"
        TEXT etp_url "CHECK: должен начинаться с https:// и быть валидным URL"
        TEXT status "DEFAULT 'purchased', CHECK (status IN ('purchased', 'renovation', 'hold', 'listed_for_sale', 'sold', 'hold', 'closed')), INDEX"
        NUMERIC purchase_price "DEFAULT 0, CHECK (purchase_price >= 0), (18,2)"
        NUMERIC sale_price "DEFAULT 0, CHECK (sale_price >= 0), (18,2)"
        NUMERIC broker_commission "DEFAULT 0, CHECK (broker_commission >= 0), (18,2)"
        NUMERIC broker_commission_percent "DEFAULT 0, CHECK (broker_commission_percent >= 0 AND broker_commission_percent <= 100), (6,4)"
        NUMERIC broker_tax_percent "DEFAULT 0, CHECK (broker_tax_percent >= 0 AND broker_tax_percent <= 100), (6,4)"
        DATE purchase_date "NOT NULL"
        DATE sale_date "DEFAULT NULL"
        BOOLEAN auto_share_by_investment "DEFAULT true, NOT NULL"
        TIMESTAMPTZ updated_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```
> **Примечание**: В таблице `lots` установлены индексы для оптимизации выборок:  
> `broker_id` — для получения списка лотов конкретного брокера  
> `status` — для фильтрации лотов по текущему статусу (например, при отображении активных или завершённых лотов)

## lot_sale_price_history
```mermaid
erDiagram
    lot_sale_price_history {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID lot_id FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"
        TEXT reason "CHECK (char_length(reason) <= 255)"
        NUMERIC old_price "DEFAULT 0, CHECK (old_price >= 0), (18,2)"
        NUMERIC new_price "DEFAULT 0, CHECK (new_price >= 0), (18,2)"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```
> **Примечание**: В таблице `lot_sale_price_history` установлены индексы для оптимизации выборок:  
> `lot_id` — для ускорения выборки.

## lot_status_history
```mermaid
erDiagram
    lot_status_history {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID lot_id FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"
        TEXT status "CHECK (status IN ('purchased', 'renovation', 'hold', 'listed_for_sale', 'sold', 'closed'))"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```
> **Примечание**: В таблице `lot_status_history` установлены индексы для оптимизации выборок:  
> `lot_id` — для ускорения выборки.

## lot_members
```mermaid
erDiagram
    lot_members {
        UUID lot_id PK, FK "REFERENCES lots(id) ON DELETE CASCADE"
        UUID member_id PK, FK "REFERENCES users(id) ON DELETE SET NULL, INDEX"
        UUID referrer_member_id FK "REFERENCES users(id) ON DELETE SET NULL, INDEX"
        TEXT referral_fee_payer "CHECK (referral_fee_payer IN ('member', 'broker'))"
        NUMERIC share_percent "DEFAULT 0, CHECK (share_percent >= 0 AND share_percent <= 100), (6,4)"
        NUMERIC share_amount "DEFAULT 0, CHECK (share_amount >= 0), (18,2)"
        NUMERIC referral_fee_percent "DEFAULT 0, CHECK (referral_fee_percent >= 0 AND referral_fee_percent <= 100), (6,4)"
        NUMERIC referral_fee_amount "DEFAULT 0, CHECK (referral_fee_amount >= 0), (18,2)"
    }
```
> **Примечание**: В таблице `lot_members` применяется составной первичный ключ и индексы:  
> `member_id` и `referrer_member_id` — для оптимизации выборки участников и их рефералов.  
> `PRIMARY KEY (lot_id, member_id)` — исключает добавление одного и того же участника в один лот более одного раза.

## lot_investments
```mermaid
erDiagram
    lot_investments {
        UUID lot_id FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"
        UUID transaction_id PK, FK "REFERENCES lot_transactions(id) ON DELETE CASCADE"
        BOOLEAN include_in_share "DEFAULT true, NOT NULL"
    }
```
> **Примечание**: В таблице `lot_investments` установлены индексы для оптимизации выборок:  
> `lot_id` — для ускорения выборки.

## lot_expenses
```mermaid
erDiagram
    lot_expenses {
        UUID lot_id FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"
        UUID transaction_id PK, FK "REFERENCES lot_transactions(id) ON DELETE CASCADE"
        UUID reimbursement_member_id "REFERENCES lot_members(member_id) ON DELETE CASCADE"
        TEXT description "NOT NULL"
    }
```
> **Примечание**: В таблице `lot_expenses` установлены индексы для оптимизации выборок:  
> `lot_id` — для ускорения выборки.

## lot_transactions
```mermaid
erDiagram
    lot_transactions {
        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"
        UUID lot_id FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"
        UUID user_id FK "REFERENCES users(id) ON DELETE SET NULL, INDEX"
        TEXT type "CHECK (type IN ('investment', 'payout', 'broker_commission', 'broker_tax', 'referral_fee', 'expense'))"
        NUMERIC amount "DEFAULT 0, CHECK (amount >= 0), (18,2)"
        TIMESTAMPTZ updated_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```
> **Примечание**: В таблице `lot_transactions` установлены индексы для оптимизации выборок:  
> `lot_id` — для ускорения выборки.

## lot_financials
```mermaid
erDiagram
    lot_financials {
        UUID lot_id PK, FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"
        NUMERIC purchase_price "DEFAULT 0, CHECK (purchase_price >= 0), (18,2)"
        NUMERIC total_expenses_in_cost "DEFAULT 0, CHECK (total_expenses_in_cost >= 0), (18,2)"
        NUMERIC total_cost "DEFAULT 0, CHECK (total_cost >= 0), (18,2)"
        NUMERIC sale_price "DEFAULT 0, CHECK (sale_price >= 0), (18,2)"
        NUMERIC gross_profit "DEFAULT 0, CHECK (gross_profit >= 0), (18,2)"
        NUMERIC broker_commission "DEFAULT 0, CHECK (broker_commission >= 0), (18,2)"
        NUMERIC broker_tax "DEFAULT 0, CHECK (broker_tax >= 0), (18,2)"
        NUMERIC total_referral_fees "DEFAULT 0, CHECK (total_referral_fees >= 0), (18,2)"
        NUMERIC net_profit "DEFAULT 0, CHECK (net_profit >= 0), (18,2)"
        NUMERIC total_investments "DEFAULT 0, CHECK (total_investments >= 0), (18,2)"
        NUMERIC total_investments_excluded "DEFAULT 0, CHECK (total_investments_excluded >= 0), (18,2)"
        NUMERIC total_payouts "DEFAULT 0, CHECK (total_payouts >= 0), (18,2)"
        NUMERIC net_payouts "DEFAULT 0, CHECK (net_payouts >= 0), (18,2)"
        NUMERIC payouts_minus_investments "DEFAULT 0, CHECK (payouts_minus_investments >= 0), (18,2)"
        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL"
    }
```
> **Примечание**: В таблице `lot_transactions` установлены индексы для оптимизации выборок:  
> `lot_id` — для ускорения выборки.