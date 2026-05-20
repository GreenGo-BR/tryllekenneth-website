import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TrylleKenneth - Professionel Tryllekunstner i København | Magisk Underholdning til Events',
  description: 'Tryllekunstner i København med magisk underholdning til firmaarrangementer, børnefødselsdage og events i hele Danmark. Over 15 års erfaring med professionel underholdning til alle arrangementer.',
  generator: 'v0.app',
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
  openGraph: {
    title: 'TrylleKenneth - Tryllekunstner i København | Magisk Underholdning til Events',
    description: 'Professionel underholdning til firmaarrangementer, børnefødselsdage og corporate events i København og Danmark',
    type: 'website',
    locale: 'da_DK',
    alternateLocale: ['en_US'],
    siteName: 'TrylleKenneth',
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
