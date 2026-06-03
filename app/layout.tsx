import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Viewport configuration for mobile SEO
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  title: 'TrylleKenneth - Professional Magician in Copenhagen | Magical Entertainment for Events',
  description: 'Magician in Copenhagen offering premium magical entertainment for corporate events, children\'s birthday parties and celebrations in Denmark and worldwide. Over 15 years of professional entertainment experience.',
  generator: 'v0.app',
  applicationName: 'TrylleKenneth',
  referrer: 'strict-origin-when-cross-origin',
  keywords: ['magician', 'magic', 'Copenhagen', 'entertainment', 'event', 'corporate event', 'wedding', 'close-up magic', 'magical entertainment', 'children magic'],
  authors: [{ name: 'Kenneth', url: 'https://tryllekenneth.dk' }],
  creator: 'Kenneth - Magician',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
    ],
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://tryllekenneth.dk'),
  openGraph: {
    title: 'TrylleKenneth - Professional Magician in Copenhagen | Magical Entertainment',
    description: 'Professional magical entertainment for corporate events, children\'s birthday parties and celebrations in Copenhagen and throughout Denmark',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['da_DK'],
    siteName: 'TrylleKenneth',
    url: 'https://tryllekenneth.dk',
    images: [
      {
        url: 'https://tryllekenneth.dk/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'TrylleKenneth - Professional magician and entertainer in Copenhagen',
        type: 'image/png',
      },
      {
        url: 'https://tryllekenneth.dk/og-image-800x420.png',
        width: 800,
        height: 420,
        alt: 'TrylleKenneth - Magical entertainment for events',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrylleKenneth - Professional Magician in Copenhagen',
    description: 'Magical entertainment for corporate events, weddings and celebrations',
    images: ['https://tryllekenneth.dk/og-image-1200x630.png'],
    creator: '@tryllekenneth',
    site: '@tryllekenneth',
  },
  alternates: {
    canonical: 'https://tryllekenneth.dk',
    languages: {
      'da-DK': 'https://tryllekenneth.dk/da',
      'en-US': 'https://tryllekenneth.dk/en',
    },
  },
}

// Structured Data for AI Search Optimization
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://tryllekenneth.dk/#person',
      'name': 'Kenneth Sørensen',
      'givenName': 'Kenneth',
      'familyName': 'Sørensen',
      'url': 'https://tryllekenneth.dk',
      'email': 'kenneth@tryllekenneth.dk',
      'telephone': '+4540852728',
      'image': 'https://tryllekenneth.dk/kenneth.jpg',
      'jobTitle': 'Professionel Tryllekunstner',
      'description': 'Professionel tryllekunstner og magiker i København med over 15 års erfaring inden for magisk underholdning og entertainment',
      'areaServed': 'DK',
      'knowsAbout': ['Magisk underholdning', 'Nærmagi', 'Børnetrylleri', 'Standup Magic', 'Event Entertainment'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://tryllekenneth.dk/#organization'
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://tryllekenneth.dk/#business',
      'name': 'TrylleKenneth',
      'alternateName': ['TrylleKenneth', 'Kenneth Magiker', 'Kenneth Tryllekunstner'],
      'image': 'https://tryllekenneth.dk/tryllekenneth-logo.png',
      'description': 'Professionel magisk underholdning til firmaarrangementer, bryllup, børnefødselsdage og events i København og hele Danmark',
      'url': 'https://tryllekenneth.dk',
      'email': 'kenneth@tryllekenneth.dk',
      'telephone': '+4540852728',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'DK',
        'addressLocality': 'København'
      },
      'areaServed': ['DK'],
      'priceRange': '$$',
      'serviceType': ['Magisk Underholdning', 'Nærmagi', 'Børnetrylleri', 'Bryllupsunderholdning', 'Firmaarrangement'],
      'foundingDate': '2008',
      'sameAs': [
        'https://www.facebook.com/tryllekenneth',
        'https://www.instagram.com/tryllekenneth'
      ],
      'review': {
        '@type': 'Review',
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '4.9',
          'bestRating': '5',
          'worstRating': '1'
        },
        'author': {
          '@type': 'Person',
          'name': 'Verified Customers'
        }
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '50',
        'bestRating': '5',
        'worstRating': '1'
      }
    },
    {
      '@type': 'EntertainmentBusiness',
      '@id': 'https://tryllekenneth.dk/#entertainment',
      'name': 'TrylleKenneth - Magisk Underholdning',
      'businessType': 'Entertainment Service',
      'url': 'https://tryllekenneth.dk',
      'description': 'Magisk underholdning og event entertainment i Danmark',
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Børnetrylleri',
          'description': 'Interaktiv magisk underholdning til børnefødselsdage og familiebegivenheder'
        },
        {
          '@type': 'Offer',
          'name': 'Bryllupsunderholdning',
          'description': 'Elegant magisk underholdning til bryllup og receptioner'
        },
        {
          '@type': 'Offer',
          'name': 'Firmaarrangement',
          'description': 'Professionel magisk underholdning til corporate events og teambuilding'
        },
        {
          '@type': 'Offer',
          'name': 'Nærmagi',
          'description': 'Intimt og fascinerende trylleri på tæt hold'
        }
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://tryllekenneth.dk/#organization',
      'name': 'TrylleKenneth',
      'url': 'https://tryllekenneth.dk',
      'email': 'kenneth@tryllekenneth.dk',
      'telephone': '+4540852728',
      'foundingDate': '2008',
      'founder': {
        '@type': 'Person',
        'name': 'Kenneth Sørensen'
      },
      'areaServed': 'DK',
      'sameAs': [
        'https://www.facebook.com/tryllekenneth',
        'https://www.instagram.com/tryllekenneth'
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y8PHB8NJJ8"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y8PHB8NJJ8');
            `,
          }}
        />
        {/* Structured Data for AI Search Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
