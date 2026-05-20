import { Metadata } from 'next'

interface PageMetadataParams {
  title: string
  description: string
  path: string
  locale: string
  ogImage?: string
  keywords?: string[]
  author?: string
}

export function generatePageMetadata(params: PageMetadataParams): Metadata {
  const baseUrl = 'https://tryllekenneth.dk'
  const canonicalUrl = `${baseUrl}/${params.locale}${params.path}`
  const alternateUrl = params.locale === 'da' 
    ? `${baseUrl}/en${params.path}`
    : `${baseUrl}/da${params.path}`

  return {
    title: params.title,
    description: params.description,
    keywords: params.keywords || [],
    authors: params.author ? [{ name: params.author }] : undefined,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'da-DK': params.locale === 'en' ? alternateUrl : canonicalUrl,
        'en-US': params.locale === 'da' ? alternateUrl : canonicalUrl,
      },
    },
    openGraph: {
      title: params.title,
      description: params.description,
      type: 'website',
      url: canonicalUrl,
      locale: params.locale === 'da' ? 'da_DK' : 'en_US',
      alternateLocale: params.locale === 'da' ? ['en_US'] : ['da_DK'],
      siteName: 'TrylleKenneth',
      images: params.ogImage ? [
        {
          url: params.ogImage,
          width: 1200,
          height: 630,
          alt: params.title,
          type: 'image/png',
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title,
      description: params.description,
      images: params.ogImage ? [params.ogImage] : undefined,
    },
  }
}

// Page-specific metadata configurations
export const pageMetadataConfig = {
  homepage: {
    da: {
      title: 'TrylleKenneth - Professionel Tryllekunstner i København | Magisk Underholdning til Events',
      description: 'Magisk underholdning til firmaarrangementer, bryllup og events i København. Over 15 års erfaring med professionel tryllekunstner Kenneth.',
      keywords: ['tryllekunstner', 'magiker', 'København', 'underholdning', 'event', 'bryllup', 'firmaarrangement'],
    },
    en: {
      title: 'TrylleKenneth - Professional Magician in Copenhagen | Magic Entertainment for Events',
      description: 'Professional magic entertainment for corporate events, weddings, and celebrations in Copenhagen. Over 15 years of experience as a magician and entertainer.',
      keywords: ['magician', 'Copenhagen', 'magic', 'entertainment', 'corporate events', 'wedding entertainment'],
    },
  },
  services: {
    naermagi: {
      da: {
        title: 'Elegant Nærmagi til Alle Arrangementer | Professionel Tryllekunstner i København',
        description: 'Intime magiske øjeblikke med professionel nærmagi. Perfekt til firmaarrangementer, bryllup og events i hele Danmark.',
        keywords: ['nærmagi', 'close-up magic', 'trylleri', 'bordmagi', 'firmaunderholdning'],
      },
      en: {
        title: 'Close-Up Magic for All Occasions | Professional Magician Copenhagen',
        description: 'Intimate magic moments with close-up magic performances. Perfect for corporate events, weddings and celebrations.',
        keywords: ['close-up magic', 'sleight of hand', 'intimate magic', 'table magic'],
      },
    },
    standup: {
      da: {
        title: 'Energisk Stand-up Trylleri | Magisk Show til Events og Firmaarrangementer',
        description: 'Højenergisk magisk show med publikumsinteraktion. Perfekt til at løfte stemningen på firmaarrangementer, bryllup og fester.',
        keywords: ['stand-up magic', 'sceneshow', 'trylleri', 'underholdning', 'magisk show'],
      },
      en: {
        title: 'High-Energy Stand-Up Magic Show | Interactive Magic Performance',
        description: 'High-energy magic show with audience interaction. Perfect for corporate events and celebrations that need entertainment.',
        keywords: ['stand-up magic', 'stage magic', 'interactive magic', 'magic show'],
      },
    },
  },
  events: {
    bryllup: {
      da: {
        title: 'Magisk Underholdning til Bryllup | Elegante Nærmagi og Shows i København',
        description: 'Professionel underholtning til brylluppet - nærmagi ved bordene eller elegante shows. Skaber uforglemmelige minder for brudeparret og gæsterne.',
        keywords: ['bryllup', 'brylluppet', 'bryllups underholdning', 'trylleri til bryllup', 'magisk bryllup'],
      },
      en: {
        title: 'Magic Entertainment for Weddings | Memorable Performances in Copenhagen',
        description: 'Professional entertainment for your wedding - intimate close-up magic or elegant performances that create unforgettable memories.',
        keywords: ['wedding entertainment', 'wedding magician', 'wedding magic', 'ceremony entertainment'],
      },
    },
    firma: {
      da: {
        title: 'Professionel Underholdning til Firmaarrangementer | Kenneth Tryllekunstner København',
        description: 'Magisk underholtning til virksomhedsevent, konferencer og teambuilding. Højenergisk show eller intime nærmagi - tilpasset dit arrangement.',
        keywords: ['firmaarrangement', 'firmafest', 'corporate event', 'teambuilding', 'firmaunderholdning', 'event underholtning'],
      },
      en: {
        title: 'Professional Entertainment for Corporate Events | Magic Shows Copenhagen',
        description: 'Magic entertainment for business events, conferences and team building. High-energy shows or intimate close-up magic tailored to your event.',
        keywords: ['corporate event', 'corporate entertainment', 'business event', 'team building'],
      },
    },
    jule: {
      da: {
        title: 'Juleunderhaltning til Firmajulefrokost | Magisk Jul i København',
        description: 'Festlig juleunderholtning til firmajulefrokosten - magisk jul som skaber glæde blandt medarbejderne. Nærmagi, stands-up show eller julemand.',
        keywords: ['julefrokost', 'juleunderhaltning', 'firmajulefrokost', 'julemagi', 'juleevents'],
      },
      en: {
        title: 'Christmas Entertainment for Company Parties | Holiday Magic Shows',
        description: 'Festive Christmas entertainment for your company party - magic that creates joy and memorable moments for your team.',
        keywords: ['Christmas entertainment', 'holiday magic', 'company Christmas party', 'festive entertainment'],
      },
    },
  },
}
