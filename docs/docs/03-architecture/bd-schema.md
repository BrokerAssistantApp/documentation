---
sidebar_position: 2
---

# Структура базы данных

## Связи таблиц
```mermaid
erDiagram
    direction LR

    %% --- Пользователи ---
    users ||--o{ sessions : "пользовательские сессии"
    users ||--o{ broker_members : "брокер ↔ участник"
    users ||--o{ lots : "брокер создаёт лоты"
    users ||--o{ lot_members : "участвует в лотах"
    users ||--o{ lot_transactions : "участник инициирует транзакции"

    %% --- Участие / Рефералы ---
    lot_members }o--|| users : "партнёр → инвестор (referrer_member)"

    %% --- Лоты ---
    lots ||--o{ lot_status_history : "история статусов"
    lots ||--o{ lot_sale_price_history : "история изменения цены"
    lots ||--o{ lot_members : "участники лота"
    lots ||--o{ lot_transactions : "транзакции по лоту"
    lots ||--o{ lot_investments : "инвестиции"
    lots ||--o{ lot_expenses : "расходы"
    lots ||--|| lot_financials : "финансовые итоги"

    %% --- Транзакции и финансы ---
    lot_transactions ||--|| lot_investments : "транзакции инвестиций"
    lot_transactions ||--|| lot_expenses : "транзакции расходов"
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