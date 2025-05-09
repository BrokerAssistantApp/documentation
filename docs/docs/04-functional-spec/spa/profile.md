---
sidebar_position: 2
title: Профиль пользователя
description: Просмотр и редактирование профиля пользователя
---

# Экран профиль пользователя

## 🎯 Цель

Дать возможность брокерам и участникам лотов просмотреть/изменить информацию о себе

---

## 🔗 URL

- Страница доступна по `/dashboard/profile`

---

## 🛠️ Функциональность

### 💻 Frontend

- Загрузка профиля на странице `/dashboard/profile`
- Отображение:
    - Имя, email, дата регистрации
    - Аватар (инициалы)
- Возможность изменить имя
    - Отправка `PATCH /users/me` с новым именем
    - Обновление UI при успехе

### 🔙 Backend

- `GET /users/me` — получить текущего пользователя
- `PATCH /users/me` — обновить имя пользователя

### 📦 Работа с БД

- `GET /users/me`
    - Получает `userId` из accessToken
    - Ищет пользователя в таблице `users` по `id`
    - Возвращает имя, email и дату регистрации
- `PATCH /users/me`
    - Получает `userId` из accessToken
    - Обновляет имя пользователя в таблице `users`