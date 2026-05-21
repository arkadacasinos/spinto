# SPINTO Casino - Премиум казино платформа

Профессиональный веб-сайт казино, созданный с Next.js 16 и оптимизированный для всех устройств.

## Основные возможности

✅ Полная SEO оптимизация с 17 ключевыми словами
✅ Адаптивный дизайн (мобильный 2 колонки, планшет 3 колонки, десктоп 6 колонок)
✅ OpenGraph и Twitter Card разметка
✅ Структурированные данные (JSON-LD Schema.org)
✅ Верификационные теги для поисковых систем
✅ Сгенерированный robots.txt и sitemap.xml
✅ 42 красивых AI-генерированных изображения
✅ Нейоновый дизайн с профессиональными цветами
✅ 1000+ слов SEO оптимизированного контента

## Конфигурация URL

### Локальная разработка

По умолчанию используется `http://localhost:3000`. Просто запустите:

```bash
pnpm dev
```

### Для деплоя на Vercel

1. Откройте Vercel Dashboard → Your Project → Settings → Environment Variables

2. Добавьте переменную:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

3. Redeploy проект - URL автоматически обновится везде (мета-теги, og-image, структурированные данные, robots.txt, sitemap.xml и т.д.)

### Для других хостингов

Обновите переменную в `.env.production`:

```
NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
```

## Структура проекта

```
/app
  ├── layout.tsx          # Root layout с полными мета-тегами
  ├── page.tsx            # Главная страница
  └── globals.css         # Глобальные стили и переменные

/components
  ├── header.tsx          # Заголовок
  ├── sidebar.tsx         # Боковая панель (десктоп)
  ├── navigation-bar.tsx  # Навигация (мобильная)
  ├── game-card.tsx       # Карточка игры
  ├── game-section.tsx    # Секция с сеткой игр
  ├── seo-content.tsx     # SEO контент (1000+ слов)
  └── footer.tsx          # Подвал

/lib
  ├── games.ts            # Данные об играх
  ├── seo.ts              # SEO конфигурация
  └── utils.ts            # Утилиты

/public
  ├── favicon/
  │   └── favicon.jpg     # Иконка сайта
  ├── games/              # 42 изображения для игр
  ├── hero-banner.jpg     # Баннер героя
  ├── og-image.jpg        # OpenGraph изображение
  ├── robots.txt          # Робот инструкции
  └── sitemap.xml         # Карта сайта
```

## SEO оптимизация

### Включены ключевые слова (17 ключей):
- spinto casino
- spinto casino официальный сайт
- spinto зеркало
- spinto официальный сайт
- spinto casino зеркало
- спинто казино
- spinto официальный
- spinto casino официальный
- спинто казино регистрация
- спинто казино вход
- спинто казино зеркало
- спинто казино играть
- спинто казино онлайн
- спинто казино официальный
- спинто казино официальный сайт
- spinto казино официальный сайт
- spinto казино

### Мета-теги:
- `<title>` с основным ключевым словом
- `<meta name="description">` с описанием и ключевыми словами
- `<meta name="keywords">` со всеми 17 ключевыми словами
- `<meta property="og:*">` для социальных сетей
- `<meta name="twitter:*">` для Twitter
- `<link rel="canonical">` для избежания дублирования
- `<link rel="alternate" hrefLang>` для мультиязычности

### Верификация:
- Google Search Console: `<meta name="google-site-verification">`
- Yandex Webmaster: `<meta name="yandex-verification">`
- Bing Webmaster: `<meta name="msvalidate.01">`

### Структурированные данные:
- Schema.org Casino разметка в JSON-LD формате
- Включает информацию о компании, контакты, потенциальные действия

## Развертывание

### На Vercel (рекомендуется)

```bash
# 1. Убедитесь что проект на GitHub
git push origin main

# 2. Импортируйте в Vercel
# Vercel автоматически обнаружит Next.js и выполнит build

# 3. Добавьте Environment Variable:
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# 4. Redeploy
```

### На других платформах

```bash
# Build
pnpm build

# Start
pnpm start
```

## Обновление верификационных кодов

В `app/layout.tsx` найдите:

```tsx
<meta name="google-site-verification" content="your-google-verification-code" />
<meta name="yandex-verification" content="your-yandex-verification-code" />
<meta name="msvalidate.01" content="your-bing-verification-code" />
```

Замените на реальные коды из Google Search Console, Yandex Webmaster и Bing Webmaster Tools.

## Технологии

- **Next.js 16** - React фреймворк с SSR
- **Turbopack** - Быстрый bundler
- **Tailwind CSS** - Утилит-первый CSS фреймворк
- **TypeScript** - Типизированный JavaScript
- **shadcn/ui** - UI компоненты
- **Lucide Icons** - Иконки

## Performance

- Оптимизированные изображения (JPEG, 512x512px)
- CSS Grid вместо горизонтального скролла
- Кэширование статических ресурсов
- Минифицированный JavaScript и CSS
- Preload критических ресурсов

## Мобильная адаптация

- **< 600px**: 2 колонки + горизонтальная навигация
- **600-1024px**: 3 колонки + горизонтальная навигация
- **> 1024px**: 6 колонок + боковая панель

## Лицензия

© 2024 SPINTO Casino. Все права защищены.

## Контакты

- Email: support@spintocasino.com
- Phone: +7 (800) 123-45-67
- Website: https://spintocasino.com
