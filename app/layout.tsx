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
  keywords: ['tryllekunstner', 'magiker', 'København', 'underholdning', 'event', 'firmaevent', 'bryllup', 'nærmagi'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
