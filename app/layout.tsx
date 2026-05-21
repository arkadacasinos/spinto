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
        <meta name="yandex-verification" content="your-yandex-verification-code" />
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
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
