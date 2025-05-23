---
sidebar_position: 2
title: Словарь терминов
description: Ключевые термины и определения, используемые в платформе
---

# 📔 Словарь терминов и определений

## 👥 Пользовательские роли

- **Брокер-флиппер** — брокер, работающий с 1–3 лотами в квартал, ориентирован на быстрый учёт и закрытие сделок без подписки.
- **Профессиональный брокер** — брокер, ведущий 5–30 лотов в месяц, нуждается в автоматизации, аналитике, управлении командой и e-sign.
- **Инвестор** — человек, вложивший средства в конкретный лот, получает доступ к кабинету, документам и уведомлениям.
- **Школа / Эксперт** — организация или преподаватель, использующие платформу для практического обучения, управления учениками и брендированной среды.

---

## 💳 Тарифные планы

> ⚠️ До релиза версии v1.0 все функции доступны в рамках `Broker Lite`. Подписки будут актуализированы на основе фидбэка MVP.

### 🧑‍💼 Брокеры

- **Trial 30d** — бесплатный доступ на 30 дней, включает функции Lite, но с водяным знаком на PDF.
- **Broker Lite** — 349 ₽ / лот, без подписки, ≤ 2 активных лота.
- **Broker Base** *(после v1.0)* — подписка на базовый функционал: импорт, документы, отчёты.
- **Broker Plus** *(после v1.0)* — всё из Base + e-sign, AI, API.
- **Corporate** *(после v1.0)* — всё из Plus + командный доступ, Academy, приоритетная поддержка.

### 👥 Инвесторы

- **Investor Free** — просмотр, уведомления, PDF-превью без подписей и экспорта.
- **Investor Lite** — разовый доступ к лоту (просмотр, PDF, e-sign).
- **Investor Pro** — подписка с кабинетом, алертами, выгрузками, статистикой.

### 🎓 Academy

- **Academy** — тариф для школ и экспертов: доступ учеников к продукту, брендирование, отчёты, API, заморозка потоков.

---

## 🔄 Лоты

- **Активный лот** — лот в одном из рабочих статусов:
  - `purchased`: выигран на торгах;
  - `listed_for_sale`: выставлен на продажу;
  - `hold`: приостановлен по техническим причинам.

- **Неактивный лот** — не учитывается в лимит:
  - `sold`: продан;
  - `closed`: завершён и архивирован.

- **Сделка** — отношения между брокером, инвестором и платформой по конкретному лоту, включая доли, расходы и документы.
- **Участник сделки** — инвестор или партнёр, вложивший средства и получающий долю от прибыли.
- **Доля участника** — процент от расходов и/или прибыли, закреплённый за участником.

---

## 📄 Документы и процессы

- **PDF-превью** — предварительный отчёт по лоту, доступный в статусе черновика, содержит водяной знак.
- **Финальный PDF** — отчёт по завершённому лоту, подписывается брокером и инвестором.
- **e-sign** — электронная подпись документов (УЭП / УКЭП), появляется в v1.0 и далее.
- **Success-fee** — комиссия брокера от прибыли, рассчитывается автоматически.
- **Split payout** — автоматическое распределение прибыли между участниками пропорционально долям.

---

## 📊 Интерфейсы и аналитика

- **Investor View** — кабинет инвестора с доступом к вложениям, документам, уведомлениям.
- **Investor Dashboard** — аналитика по инвестициям: ROI, IRR, диаграммы.
- **Broker Dashboard** — аналитика брокера: эффективность, сделки, отчёты.
- **AI-анализ** — автоматический расчёт ликвидности, стратегии, генерация описания, инсайты по лоту.
- **AI-ассистент** — чат и подсказки, связанные с анализом и стратегией продажи.

---

## 🔐 Доступ, UX и API

- **Онбординг** — пошаговое обучение по функциональности (туториалы, хинты).
- **Заморозка аккаунта** — временное отключение активности и платежей без потери данных (до 3 месяцев).
- **Грейс-период** — 30 дней после окончания заморозки до архивирования.
- **Архив аккаунта** — сохранение состояния и данных неактивного пользователя.
- **Фиче-флаг** — системный переключатель, активирующий или ограничивающий функциональность по тарифу.
- **Водяной знак** — отметка на PDF в Trial / Free-доступе.

---

## 🧩 API и интеграции

- **API v1** — выгрузки, интеграции с CRM, доступ к лотам и участникам.
- **API v2** — публичный REST-интерфейс с поддержкой webhooks и ролей.
- **Webhook** — автоматическое уведомление по событию (изменение лота, завершение сделки и т.п.).
