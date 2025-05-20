---
sidebar_position: 1
title: Технологический стек
description: Список технологий, инструментов и библиотек, используемых в проекте
---

# Технологический стек

## Frontend
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/) - стейт менеджер
- [TanStack Query](https://tanstack.com/query/latest) (React Query) - управления серверными данными
- [React Hook Form](https://react-hook-form.com/) - работа с формами
- [React Number Format](https://s-yadav.github.io/react-number-format/) - форматирование в полях
- [Zod](https://zod.dev/) – проверка данных и валидация форм
- [Dinero.js](https://v2.dinerojs.com/docs) - денежные расчеты и преобразования
- [ShadCN/ui](https://ui.shadcn.com/) – UI-кит и стилизация
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/en-US/) – диаграммы и графики
- [Vite](https://vite.dev/) - сборщик

## Backend
- [Node.js](https://nodejs.org/en)
- [NestJS](https://nestjs.com/) + [Fastify](https://fastify.dev/)
- [PostgreSQL](https://www.postgresql.org/) - база данных
- [Prisma ORM](https://www.prisma.io/) – работа с PostgreSQL, хранение пользователей и сессий
- [Redis](https://redis.io/) - кеширование
- [BullMQ](https://docs.bullmq.io/) – фоновые задачи
- [Zod](https://zod.dev/) – проверка данных
- [Dinero.js](https://v2.dinerojs.com/docs) - денежные расчеты и преобразования
- [Swagger](https://swagger.io/) – документация API

## Auth & Security
- [@nestjs/passport](https://docs.nestjs.com/recipes/passport) — интеграция стратегий с Nest (local / jwt / OAuth)
- [Passport.js](https://www.passportjs.org/):
    - [LocalStrategy](https://www.passportjs.org/packages/passport-local/) — логин по email и паролю
    - [JWTStrategy](https://www.passportjs.org/packages/passport-jwt/) — защита эндпоинтов
    - ? [YandexStrategy](https://www.passportjs.org/packages/passport-yandex/) — OAuth 2.0 через Яндекс
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) — хеширование паролей
- [@fastify/cookie](https://github.com/fastify/fastify-cookie) — работа с куками (для refreshToken)

## API & Интеграции
- [TenderGuru](https://www.tenderguru.ru/api) – получение данных о торгах со всех площадок (стоит 20к в год)
- платежи - [ЮKassa](https://yookassa.ru/) - сервис для онлайн-платежей
- S3-хранилище [Yandex Object Storage](https://yandex.cloud/ru/services/storage) – загрузка и хранение документов

## DevOps & CI/CD
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://github.com/features/actions) – автоматизация CI/CD
- Sentry – мониторинг ошибок

## Дополнительно
- [Metabase](https://www.metabase.com/) / [Prometheus](https://prometheus.io/) + [Grafana](https://grafana.com/) – аналитика