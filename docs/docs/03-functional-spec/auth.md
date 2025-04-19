---
sidebar_position: 4
---

# Вход и регистрация

## 🎯 Цель

Дать пользователям возможность войти в систему или зарегистрироваться по логину/паролю

---

## 🔗 URL

- Страница входа доступна по `/auth/login`
- Страница регистрации доступна по `/auth/signup`

---

## 🛠️ Функциональность

### 💻 Frontend

- Страница входа `/auth/login`
    - Поля: email, пароль
    - Кнопка «Войти»
    - Показывает ошибки авторизации (400)
    - Редиректит на [`/dashboard/lots`](my-lots.md) при успехе
- Страница регистрации `/auth/signup`
    - Поля: имя, email, пароль, повтор пароля
    - Кнопка «Зарегистрироваться»
    - Валидация пароля (минимум 8 символов, совпадение пароля и подтверждения)
    - Показывает ошибки валидации (400)
    - Редиректит на `/auth/login` при успехе
- Обработка потери сессии ([см. общие требования](./general.md)):
    - При истекшем accessToken → автоматический `POST /auth/refresh`
    - При истекшем refreshToken → редирект на `/auth/login`

### 🔙 Backend

- `POST /auth/login`: вход по email/паролю
- `POST /auth/signup`: регистрация нового брокера
- `POST /auth/refresh`: обновление accessToken по refreshToken (из httpOnly cookie)
- `GET /auth/status`: проверка, авторизован ли пользователь (accessToken валиден)

### 📦 Работа с БД

- `POST /auth/signup`
    - Создаёт запись в таблице `users`
    - Устанавливает `is_broker = true`
    - Проверяет уникальность `email`
- `POST /auth/login`
    - Ищет пользователя в `users` по `email`
    - Сверяет `password_hash`
    - Создаёт сессию в `sessions` (и записывает `refresh_token`)
- `POST /auth/refresh`
    - Проверяет `refresh_token` в таблице `sessions`
    - Обновляет accessToken
- `GET /auth/status`
    - Проверяет accessToken (без обращения к БД)