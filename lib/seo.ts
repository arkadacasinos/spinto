export const siteConfig = {
  name: 'Спинто Казино (Spinto Casino) Официальный Сайт: Вход, Регистрация и Зеркало',
  description: 'Официальный сайт Spinto Casino онлайн. Пройдите быструю регистрацию и выполните вход в Спинто Казино. Играйте в лицензионные слоты и получайте бонусы!',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  keywords: [
    'spinto casino',
    'spinto casino официальный сайт',
    'spinto зеркало',
    'spinto официальный сайт',
    'spinto casino зеркало',
    'спинто казино',
    'spinto официальный',
    'spinto casino официальный',
    'спинто казино регистрация',
    'спинто казино вход',
    'спинто казино зеркало',
    'спинто казино играть',
    'спинто казино онлайн',
    'спинто казино официальный',
    'спинто казино официальный сайт',
    'spinto казино официальный сайт',
    'spinto казино',
  ],
  og: {
    image: '/og-image.jpg',
    type: 'website',
  },
  social: {
    twitter: '@SpintoCasino',
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Casino',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon/favicon.jpg`,
  sameAs: [
    'https://www.facebook.com/SpintoCasino',
    'https://www.instagram.com/SpintoCasino',
    'https://twitter.com/SpintoCasino',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'support@spintocasino.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RU',
  },
  potentialAction: {
    '@type': 'PlayAction',
    target: `${siteConfig.url}/games`,
  },
};
