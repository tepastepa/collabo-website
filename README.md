# Collabo Team

Простой сайт-визитка на Next.js. Весь текст находится в одном файле — **`content.js`**.

## Как редактировать
Откройте `content.js` и поменяйте текст. Это всё, что нужно для изменения контента.

- Цвета и шрифт — в `app/globals.css` (блок `@theme`).
- Разметка секций — в `app/page.jsx`.
- Юридические страницы — `app/privacy/page.jsx`, `app/terms/page.jsx`.

## Запуск локально
```bash
npm install
npm run dev      # http://localhost:3000
```

## Сборка
```bash
npm run build
npm start
```

## Деплой на Vercel
1. Залейте репозиторий на GitHub.
2. На vercel.com → New Project → выберите репозиторий.
3. Vercel сам определит Next.js. Нажмите **Deploy**.
