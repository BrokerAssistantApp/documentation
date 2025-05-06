---
sidebar_position: 4
title: Новый лот
description: Создание нового лота
---

# Экран создания нового лота

## 🎯 Цель

Позволить брокеру создать новый лот, указав основные параметры лота

---

## 🔗 URL

- Страница доступна по `/dashboard/lots/new`

---

## 🛠️ Функциональность

### 💻 Frontend

- Форма создания лота:
    - Название (`name`)
    - Тип сотрудничества (`dealType`)
        - Варианты:
            - С привлечением инвесторов (выбрано по умолчанию) (`syndicated`)
            - Собственные средства (`self_funded`)
            - Агентская сделка (`agency`)
    - Формат ввода долей (`shareInputMode`)
        - Варианты:
            - В процентах (выбрано по умолчанию) (`percent`)
            - В рублях (`currency`)
    - Цена покупки (`purchasePrice`)
    - Ожидаемая цена продажи (`salePrice`)
    - Комиссия брокера:
        - Если `dealType = 'syndicated'`:
            - Передаем только `brokerCommissionPercent`, `brokerCommission` рассчитывается автоматически на беке
        - Если `dealType = 'self_funded'`:
            - Не передаем `brokerCommissionPercent` и `brokerCommission`, и не отображаем поле ввода комиссии брокера
        - Если `dealType = 'agency'`:
            - Можем выбрать в выпадающем списке (`brokerCommissionPercent` или `brokerCommission`)  
              При передаче `brokerCommission` поле `brokerCommissionPercent` игнорируется беком и рассчитывается
              автоматически  
              При передаче `brokerCommissionPercent` поле `brokerCommission` игнорируется беком и рассчитывается
              автоматически
    - Налог брокера (`brokerTaxPercent`)
    - Дата покупки (`purchaseDate`)
    - Рассчитать доли по инвестициям (`autoShareByInvestment`)
      > Сделать иконку вопросика с тултипом:  
      Если включено, система автоматически рассчитает доли участников пропорционально их инвестициям. Значения можно
      отредактировать вручную.
- Кнопка «Создать лот»:
    - Отправляет `POST /lots`
    - Редирект на [`/dashboard/lots/{id}`](lotId.md) при успехе

### 🔙 Backend

- `POST /lots`
    - Создаёт новый лот с данными:
        - `dealType`
        - `status` - при создании лота устанавливается в `purchased`
        - `name`
        - `purchasePrice`
        - `salePrice`
        - Комиссия брокера:
            - Если `dealType = 'syndicated'`:
                - Передаем только `brokerCommissionPercent`, `brokerCommission` рассчитывается автоматически на беке
            - Если `dealType = 'self_funded'`:
                - Не передаем `brokerCommissionPercent` и `brokerCommission`, и не отображаем поле ввода комиссии
                  брокера
            - Если `dealType = 'agency'`:
                - Можем выбрать в выпадающем списке (`brokerCommissionPercent` или `brokerCommission`)  
                  При передаче `brokerCommission` поле `brokerCommissionPercent` игнорируется беком и рассчитывается
                  автоматически  
                  При передаче `brokerCommissionPercent` поле `brokerCommission` игнорируется беком и рассчитывается
                  автоматически
        - `brokerTaxPercent`
        - `purchaseDate`
        - `shareInputMode`
        - `autoShareByInvestment`
    - Проставляет `broker_id` по токену
    - Возвращает данные по лоту:
        - `id`
        - `dealType`
        - `status`
        - `name`
        - `purchasePrice`
        - `salePrice`
        - `brokerCommission`
        - `brokerCommissionPercent`
        - `brokerTaxPercent`
        - `purchaseDate`
        - `saleDate`
        - `shareInputMode`
        - `autoShareByInvestment`
        - `hasStatusHistory` - при успехе `POST /lots` устанавливается в `false` (рассчитывается беком, не хранится в
          БД)
        - `hasSalePriceHistory` - при успехе `POST /lots` устанавливается в `false` (рассчитывается беком, не хранится в
          БД)
        - `createdAt`
        - `updatedAt`

### 📦 Работа с БД

- `POST /lots`:
    - Добавляет запись в таблицу `lots` с `broker_id = userId`
    - Сохраняет все основные поля лота