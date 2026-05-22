import type { Metadata, Viewport } from 'next'
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
  title: 'TrylleKenneth - Professionel Tryllekunstner i København | Magisk Underholdning til Events',
  description: 'Tryllekunstner i København med magisk underholdning til firmaarrangementer, børnefødselsdage og events i hele Danmark. Over 15 års erfaring med professionel underholdning til alle arrangementer.',
  generator: 'v0.app',
  applicationName: 'TrylleKenneth',
  referrer: 'strict-origin-when-cross-origin',
  keywords: ['tryllekunstner', 'magiker', 'København', 'underholdning', 'event', 'firmaevent', 'bryllup', 'nærmagi', 'magisk underholdning', 'børnetrylleri'],
  authors: [{ name: 'Kenneth', url: 'https://tryllekenneth.dk' }],
  creator: 'Kenneth - Tryllekunstner',
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
    title: 'TrylleKenneth - Tryllekunstner i København | Magisk Underholdning til Events',
    description: 'Professionel underholdning til firmaarrangementer, børnefødselsdage og corporate events i København og Danmark',
    type: 'website',
    locale: 'da_DK',
    alternateLocale: ['en_US'],
    siteName: 'TrylleKenneth',
    url: 'https://tryllekenneth.dk',
    images: [
      {
        url: 'https://tryllekenneth.dk/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'TrylleKenneth - Professionel tryllekunstner og magiker i København',
        type: 'image/png',
      },
      {
        url: 'https://tryllekenneth.dk/og-image-800x420.png',
        width: 800,
        height: 420,
        alt: 'TrylleKenneth - Magisk underholdning til events',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrylleKenneth - Professionel Tryllekunstner i København',
    description: 'Magisk underholdning til firmaarrangementer, bryllup og events',
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
      ]
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
    <html lang="da" className="bg-background">
      <head>
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
