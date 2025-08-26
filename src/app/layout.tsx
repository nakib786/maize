import type { Metadata, Viewport } from 'next'
import './globals.css'
import { generateStructuredData } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: {
    default: 'Maize Developments - Professional Construction Services in British Columbia',
    template: '%s | Maize Developments'
  },
  description: 'Professional construction services in British Columbia specializing in new builds, renovations, rezoning, and subdivisions. From blueprints to keys, we build dreams one project at a time.',
  keywords: [
    'construction company',
    'new build construction',
    'home renovation',
    'property rezoning',
    'land subdivision',
    'custom homes',
    'construction services',
    'British Columbia',
    'BC construction',
    'residential construction',
    'commercial construction',
    'construction contractor',
    'building contractor',
    'home builder',
    'construction management',
    'project management',
    'construction planning',
    'building permits',
    'construction consultation',
    'construction design'
  ],
  authors: [{ name: 'Maize Developments' }],
  creator: 'Maize Developments',
  publisher: 'Maize Developments',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://maizedevelopments.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://maizedevelopments.com',
    siteName: 'Maize Developments',
    title: 'Maize Developments - Professional Construction Services in British Columbia',
    description: 'Professional construction services in British Columbia specializing in new builds, renovations, rezoning, and subdivisions. From blueprints to keys, we build dreams one project at a time.',
    images: [
      {
        url: '/images/maize.png',
        width: 1200,
        height: 630,
        alt: 'Maize Developments - Professional Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maize Developments - Professional Construction Services in British Columbia',
    description: 'Professional construction services in British Columbia specializing in new builds, renovations, rezoning, and subdivisions.',
    images: ['/images/maize.png'],
    creator: '@maizedevelopments',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.svg' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO and AI Crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.localBusiness)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.breadcrumb)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.faq)
          }}
        />
        
        {/* Additional meta tags for AI crawlers */}
        <meta name="ai-crawler-friendly" content="true" />
        <meta name="content-type" content="construction-services" />
        <meta name="business-type" content="construction-company" />
        <meta name="service-area" content="British Columbia, Canada" />
        <meta name="services" content="new-build,renovation,rezoning,subdivision" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
