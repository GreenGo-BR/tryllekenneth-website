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

// Page-specific metadata configurations with enhanced local SEO
export const pageMetadataConfig = {
  homepage: {
    da: {
      title: 'Tryllekunstner i København | Professionel Magisk Underholdning til Events',
      description: 'Professionel tryllekunstner Kenneth i København - magisk underholdning til firmaarrangementer, bryllup og børnefødselsdage. Over 15 års erfaring. Ring: +45 40 85 27 28',
      keywords: ['tryllekunstner København', 'magiker Danmark', 'magisk underholdning', 'event underholdning', 'firmaarrangement København', 'bryllups underholtning', 'børne eventunderhaltning', 'nærmagi København'],
    },
    en: {
      title: 'Magician Copenhagen | Professional Magic Entertainment for Events',
      description: 'Professional magician Kenneth in Copenhagen - magic entertainment for corporate events, weddings and children\'s parties. 15+ years experience. Call: +45 40 85 27 28',
      keywords: ['magician Copenhagen', 'magician Denmark', 'magic entertainment', 'corporate event magician', 'wedding magician', 'children entertainment', 'close-up magic', 'event entertainment Copenhagen'],
    },
  },
  services: {
    closeup: {
      da: {
        title: 'Nærmagi til Events | Elegant Close-up Magic i København - TrylleKenneth',
        description: 'Professionel nærmagi til firmaarrangementer, bryllup og events i København. Intimt trylleri på tæt hold. Bordmagi og personlige magiske øjeblikke. Kontakt Kenneth.',
        keywords: ['nærmagi København', 'close-up magic', 'bordmagi', 'trylleri på tæt hold', 'elegant magic', 'personlig magisk oplevelse', 'intimate magic entertainment'],
      },
      en: {
        title: 'Close-Up Magic for Events | Professional Intimate Magic in Copenhagen',
        description: 'Professional close-up magic for corporate events, weddings and celebrations in Copenhagen. Personal magical moments with sleight of hand performances. Contact Kenneth.',
        keywords: ['close-up magic Copenhagen', 'intimate magic', 'table magic', 'sleight of hand', 'magic performances', 'personal magic entertainment', 'close-up magician Denmark'],
      },
    },
    children: {
      da: {
        title: 'Børnetrylleri | Interaktiv Magisk Underholdning til Børnefødselsdage København',
        description: 'Professionel børnetrylleri og interaktiv magisk underholtning til børnefødselsdage, skoler og familiebegivenheder i København og Danmark. Glæde til børnene garanteret!',
        keywords: ['børnetrylleri København', 'børne magik', 'fødselsdags underhaltning', 'børne event', 'interaktiv magic', 'børneprogrammer', 'family entertainment Copenhagen', 'barn magician'],
      },
      en: {
        title: 'Children\'s Magic | Interactive Magic Entertainment for Birthday Parties Copenhagen',
        description: 'Professional children\'s magic and interactive magic entertainment for birthday parties, schools and family events in Copenhagen and Denmark. Fun guaranteed for kids!',
        keywords: ['children magic Copenhagen', 'birthday magician', 'kids entertainment', 'family magic', 'interactive magic show', 'children\'s party entertainment', 'magic for kids Denmark'],
      },
    },
  },
  events: {
    weddings: {
      da: {
        title: 'Bryllups Underhaltning | Elegant Magisk Underholtning til Bryllup København',
        description: 'Professionel magisk underholtning til bryllup i København - nærmagi ved bordene eller elegante shows. Skaber uforglemmelige minder på bryllupsdagen. Kontakt Kenneth.',
        keywords: ['bryllups underhaltning', 'bryllup magician', 'bryllupsmagi', 'elegant bryllup entertainment', 'reception underhaltning', 'bryllup København', 'magiker til bryllup'],
      },
      en: {
        title: 'Wedding Entertainment | Elegant Magic for Weddings in Copenhagen',
        description: 'Professional magic entertainment for weddings in Copenhagen - close-up magic or elegant performances. Create unforgettable memories on your wedding day.',
        keywords: ['wedding magician', 'wedding entertainment', 'magic for weddings', 'reception magic', 'wedding performances', 'Copenhagen wedding magician', 'elegant magic entertainment'],
      },
    },
    corporate: {
      da: {
        title: 'Firmaarrangement Underhaltning | Professionel Magic til Corporate Events København',
        description: 'Magisk underholtning til firmaarrangementer, konferencer og teambuilding i København. Højenergisk show eller intime nærmagi - tilpasset dit arrangement. Ring Kenneth.',
        keywords: ['firmaarrangement', 'corporate event underhaltning', 'teambuilding magic', 'conference entertainment', 'firmafest', 'event magiker', 'business event Copenhagen', 'team building activities'],
      },
      en: {
        title: 'Corporate Event Entertainment | Professional Magic for Business Events',
        description: 'Magic entertainment for corporate events, conferences and team building in Copenhagen. High-energy shows or intimate close-up magic tailored to your event.',
        keywords: ['corporate event entertainment', 'business event magician', 'team building', 'conference entertainment', 'corporate party', 'professional magic services', 'business event Copenhagen'],
      },
    },
    christmas: {
      da: {
        title: 'Julefrokost Underhaltning | Magisk Jul til Firmajulefrokost København',
        description: 'Festlig juleunderhaltning til firmajulefrokosten i København - magisk jul som skaber glæde blandt medarbejderne. Nærmagi, stand-up show eller julemand.',
        keywords: ['julefrokost underhaltning', 'firmajulefrokost', 'juleunderhaltning', 'christmas party Copenhagen', 'jule magiker', 'holiday entertainment', 'festive magic', 'julemagi'],
      },
      en: {
        title: 'Christmas Party Entertainment | Holiday Magic for Company Events',
        description: 'Festive Christmas entertainment for your company party in Copenhagen - magic that creates joy and memorable moments for your team.',
        keywords: ['Christmas party entertainment', 'holiday magic', 'company Christmas party', 'festive entertainment', 'Christmas magician', 'holiday party Copenhagen', 'seasonal entertainment'],
      },
    },
  },
  other: {
    gallery: {
      da: {
        title: 'Galleri | Magisk Underhaltning i Aktion - Kenneth Tryllekunstner',
        description: 'Se Kenneth i aktion på forskellige events, fester og underholtninger. Billeder af nærmagi, børnetrylleri og stand-up performances til firmaarrangementer og bryllup.',
        keywords: ['galleri', 'event billeder', 'magic gallery', 'performance photos', 'trylleri billeder', 'underhaltnings gallery'],
      },
      en: {
        title: 'Gallery | Magic Entertainment in Action - Kenneth Magician',
        description: 'See Kenneth in action at various events, parties and performances. Photos of close-up magic, children\'s entertainment and stand-up performances.',
        keywords: ['gallery', 'performance photos', 'magic gallery', 'event photos', 'entertainment gallery', 'magic show images'],
      },
    },
    contact: {
      da: {
        title: 'Kontakt | Book Tryllekunstner Kenneth til Dit Event',
        description: 'Kontakt tryllekunstner Kenneth direkte. Ring +45 40 85 27 28 eller send henvendelse via kontaktform. Professionel magisk underholtning til alle typer arrangementer.',
        keywords: ['kontakt', 'book magician', 'kontakt information', 'phone number', 'booking magician', 'contact form'],
      },
      en: {
        title: 'Contact | Book Magician Kenneth for Your Event',
        description: 'Contact magician Kenneth directly. Call +45 40 85 27 28 or send inquiry through contact form. Professional magic entertainment for all types of events.',
        keywords: ['contact', 'booking', 'contact information', 'phone number', 'inquire magician', 'book event entertainment'],
      },
    },
    faq: {
      da: {
        title: 'Ofte Stillede Spørgsmål | Tryllekunstner Kenneth FAQ',
        description: 'Svar på hyppigt stillede spørgsmål om booking af magiker Kenneth, priser, varighed og muligheder for magisk underholtning til dit arrangement.',
        keywords: ['FAQ', 'ofte stillede spørgsmål', 'booking spørgsmål', 'magiker info', 'priser', 'hvor meget koster'],
      },
      en: {
        title: 'Frequently Asked Questions | Magician Kenneth FAQ',
        description: 'Answers to frequently asked questions about booking magician Kenneth, pricing, duration and magic entertainment options for your event.',
        keywords: ['FAQ', 'frequently asked questions', 'booking questions', 'magician information', 'pricing', 'event details'],
      },
    },
  },
}

