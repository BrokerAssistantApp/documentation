---
sidebar_position: 3
title: Мои лоты
description: Просмотр списка лотов, фильтрация по статусу, переход к карточке лота 
---

# Мои лоты

## 🎯 Цель

Предоставить брокеру список всех созданных им лотов, возможность фильтрации, перехода к карточке конкретного лота, а
также добавления нового.

---

## 🔗 URL

- Страница доступна по `/dashboard/lots`

---

## 🧑‍💼 Функциональность (брокер)

### 💻 Frontend

- При заходе на `/dashboard/lots`:
    - Делает `GET /lots` → получает список лотов
    - Показывает их карточками
        - Название (`name`)
        - Тип сотрудничества (`dealType`)
        - Статус (`status`)
        - Цена покупки (`purchasePrice`)
        - Ожидаемая цена продажи (`salePrice`)
        - Комиссия брокера (`brokerCommission`)
        - Налог брокера (`brokerTaxPercent`)
        - Дата покупки (`purchaseDate`)
    - Над карточками должны быть табы для фильтрации по полю `status`
        - Фильтрация выполняется на фронте, т.к лотов у каждого пользователя мало
    - Пустое состояние списка лотов:
        - Выводить сообщение с ошибкой от бека
        - Кнопка «Создать лот»
- Кнопка «Создать лот»:
    - Ведёт на  [`/dashboard/lots/new`](new-lot.md)
- Клик по карточке:
    - Ведёт на [`/dashboard/lots/{lotId}`](lotId.md)

### 🔙 Backend

- `GET /lots`
    - Возвращает все лоты, где текущий пользователь — брокер (по `broker_id`)

### 📦 Работа с БД

- `GET /lots`
    - Достаёт `userId` из токена
    - Ищет все лоты, где `broker_id = userId` — то есть те, которые созданы текущим брокером

---

## 👤 Функциональность (участник)

### 💻 Frontend

- При заходе на `/dashboard/lots`:
    - Делает `GET /lots` → получает список лотов
    - Показывает их карточками
        - Название (`name`)
        - Статус (`status`)
        - Цена покупки (`purchasePrice`)
        - Ожидаемая цена продажи (`salePrice`)
        - Комиссия брокера (`brokerCommission`)
        - Налог брокера (`brokerTaxPercent`)
        - Дата покупки (`purchaseDate`)
    - Над карточками должны быть табы для фильтрации по полю `status`
        - Фильтрация выполняется на фронте, т.к лотов у каждого пользователя мало
    - Пустое состояние списка лотов:
        - Выводить сообщение с ошибкой от бека
- Клик по карточке:
    - Ведёт на [`/dashboard/lots/{lotId}`](lotId.md)

### 🔙 Backend

- `GET /lots`
    - Возвращает список лотов, где пользователь есть в `lot_members`

### 📦 Работа с БД

- `GET /lots`
    - Достаёт `userId` из токена
    - Ищет записи в таблице `lot_members`, где:
        - либо `member_id = userId`
        - либо `referrer_member_id = userId`
    - Из этих записей достаёт `lot_id`
    - По ним получает лоты из таблицы `lots`