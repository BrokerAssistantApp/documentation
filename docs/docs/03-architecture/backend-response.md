---
sidebar_position: 3
---

# Формат ответов от API

## Общий формат ответа

Каждый ответ содержит:
- **`success`** – флаг успешности запроса
- **`message`** – краткое описание результата запроса
- **`data`** – основное содержимое ответа
- **`error`** – объект ошибки
- **`meta`** – дополнительная информация (например, пагинация)

### Пример успешного ответа:

```json
{
  "success": true,
  "message": "Лот успешно создан",
  "data": {
    "id": "uuid",
    "name": "Лот 1",
    "status": "purchased"
  },
  "error": null,
  "meta": null
}
```

### Пример ошибки:

```json
{
  "success": false,
  "message": "Ошибка валидации",
  "data": null,
  "error": {
    "code": 400,
    "message": "Некорректные данные",
    "details": [
      {
        "field": "email",
        "message": "Некорректный email"
      },
      {
        "field": "password",
        "message": "Пароль должен содержать не менее 8 символов"
      }
    ]
  },
  "meta": null
}
```

---

## 📌 Использование message и details

### 1. message (главное описание)
- Всегда присутствует в **любых** ответах.
- В успешных ответах сообщает, что произошло (`Лот успешно создан`).
- В ошибках содержит **главное сообщение о проблеме** (`Ошибка валидации`, `Доступ запрещён`).

### 2. error.message (детализация ошибки)
- Даёт **более точное описание**, например: `Некорректные данные`.
- Может быть полезна для **логов и диагностики**.

### 3. error.details (список ошибок)
- Используется **при валидации и сложных ошибках**.
- Содержит **список объектов** `{ field, message }`, где:
    - `field` — имя поля, в котором ошибка.
    - `message` — описание ошибки для конкретного поля.

---

## Принципы обработки ошибок

| Код                         | Описание                  |
|-----------------------------|---------------------------|
| `200 OK`                    | Успешный запрос           |
| `201 Created`               | Успешное создание ресурса |
| `400 Bad Request`           | Ошибка валидации          |
| `401 Unauthorized`          | Ошибка аутентификации     |
| `403 Forbidden`             | Ошибка прав доступа       |
| `404 Not Found`             | Объект не найден          |
| `500 Internal Server Error` | Ошибка сервера            |

---

## Итоговая структура API-ответов

| Поле      | Тип                       | Описание                                        |
|-----------|---------------------------|-------------------------------------------------|
| `success` | `boolean`                 | Флаг успешности запроса                         |
| `message` | `string`                  | Краткое описание результата запроса             |
| `data`    | `object \| array \| null` | Основные данные ответа                          |
| `error`   | `object \| null`          | Объект ошибки                                   |
| `meta`    | `object \| null`          | Дополнительная информация (например, пагинация) |

---

## Примеры ответов для разных методов API

### 1. Аутентификация

#### ✅ Успешный вход

```json
{
  "success": true,
  "message": "Успешный вход",
  "data": {
    "token": "jwt-токен",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "name": "Имя пользователя",
      "is_broker": true
    }
  },
  "error": null,
  "meta": null
}
```

#### ❌ Ошибка авторизации

```json
{
  "success": false,
  "message": "Ошибка авторизации",
  "data": null,
  "error": {
    "code": 401,
    "message": "Неверный email или пароль"
  },
  "meta": null
}
```

### 2. Пользователи

#### ✅ Получение профиля

```json
{
  "success": true,
  "message": "Данные профиля успешно получены",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "Имя пользователя",
    "is_broker": true,
    "created_at": "2024-03-24T12:00:00Z"
  },
  "error": null,
  "meta": null
}
```

#### ✅ Обновление профиля

```json
{
  "success": true,
  "message": "Профиль успешно обновлён",
  "data": {
    "id": "uuid",
    "name": "Новое имя"
  },
  "error": null,
  "meta": null
}
```

#### ❌ Ошибка валидации

```json
{
  "success": false,
  "message": "Ошибка валидации",
  "data": null,
  "error": {
    "code": 400,
    "message": "Некорректные данные",
    "details": [
      {
        "field": "name",
        "message": "Имя должно быть не менее 2 символов"
      }
    ]
  },
  "meta": null
}
```

### 3. Лоты

#### ✅ Получение списка лотов

```json
{
  "success": true,
  "message": "Список лотов успешно получен",
  "data": [
    {
      "id": "uuid",
      "name": "Лот 1",
      "status": "purchased",
      "purchase_price": 150000.00,
      "sale_price": 200000.00,
      "created_at": "2024-03-23T12:00:00Z"
    },
    {
      "id": "uuid2",
      "name": "Лот 2",
      "status": "listed_for_sale",
      "purchase_price": 250000.00,
      "sale_price": 300000.00,
      "created_at": "2024-03-24T12:00:00Z"
    }
  ],
  "error": null,
  "meta": {
    "page": 1,
    "total_pages": 10,
    "total_items": 100
  }
}
```

#### ❌ Лот не найден

```json
{
  "success": false,
  "message": "Ошибка",
  "data": null,
  "error": {
    "code": 404,
    "message": "Лот не найден"
  },
  "meta": null
}
```

### 4. Транзакции

#### ✅ Получение транзакций

```json
{
  "success": true,
  "message": "Список транзакций успешно получен",
  "data": [
    {
      "id": "uuid",
      "lot_id": "uuid",
      "user_id": "uuid",
      "type": "investment",
      "amount": 50000.00,
      "created_at": "2024-03-24T12:00:00Z"
    }
  ],
  "error": null,
  "meta": {
    "page": 1,
    "total_pages": 5,
    "total_items": 50
  }
}
```

#### ❌ Ошибка доступа

```json
{
  "success": false,
  "message": "Доступ запрещён",
  "data": null,
  "error": {
    "code": 403,
    "message": "У вас нет доступа к этой транзакции"
  },
  "meta": null
}
```

---

## Как это использовать в коде?
```ts
function createResponse(success: boolean, message: string, data: any = null, error: any = null, meta: any = null) {
  return { success, message, data, error, meta };
}

// ✅ Успешный ответ
res.status(201).json(createResponse(true, "Лот успешно создан", { id: "uuid", name: "Лот 1" }));

// ❌ Ошибка валидации
res.status(400).json(createResponse(false, "Ошибка валидации", null, {
  code: 400,
  message: "Некорректные данные",
  details: [
    { field: "email", message: "Некорректный email" },
    { field: "password", message: "Пароль должен содержать не менее 8 символов" }
  ]
}));
```

