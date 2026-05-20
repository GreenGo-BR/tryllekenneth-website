// Structured Data (JSON-LD) utilities for SEO rich results

export interface StructuredDataProps {
  locale: string;
}

const baseUrl = 'https://tryllekenneth.dk';

export const PersonSchema = (locale: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${baseUrl}#person`,
  name: 'Kenneth - Tryllekunstner',
  givenName: 'Kenneth',
  jobTitle: 'Professionel Tryllekunstner',
  description: locale === 'da' 
    ? 'Professionel tryllekunstner i København med over 15 års erfaring inden for magisk underholdning til firmaarrangementer, børnefødselsdage og events i Danmark'
    : 'Professional magician in Copenhagen with over 15 years of experience in magic entertainment for corporate events, children\'s parties and events in Denmark',
  sameAs: [
    `${baseUrl}/da`,
    `${baseUrl}/en`,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+45-40-85-27-28',
    contactType: locale === 'da' ? 'Kundeservice' : 'Customer Service',
    email: 'kenneth@tryllekenneth.dk',
    areaServed: locale === 'da' ? 'DK' : 'Denmark',
    availableLanguage: locale === 'da' ? 'da' : 'en',
  },
  workLocation: {
    '@type': 'Place',
    name: locale === 'da' ? 'København og hele Danmark' : 'Copenhagen and all of Denmark',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'København',
      addressCountry: 'DK',
    },
  },
  url: `${baseUrl}/${locale}`,
});

export const LocalBusinessSchema = (locale: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${baseUrl}#localbusiness`,
  name: 'TrylleKenneth - Tryllekunstner i København',
  image: `${baseUrl}/og-image.jpg`,
  description: locale === 'da'
    ? 'Professionel tryllekunstner i København der specialiserer sig i magisk underholdning til firmaarrangementer, børnefødselsdage, familieevents og alle typer arrangementer i Danmark'
    : 'Professional magician in Copenhagen specializing in magic entertainment for corporate events, children\'s parties, family events and all types of arrangements in Denmark',
  telephone: '+45-40-85-27-28',
  email: 'kenneth@tryllekenneth.dk',
  url: `${baseUrl}/${locale}`,
  areaServed: {
    '@type': 'City',
    name: locale === 'da' ? 'København' : 'Copenhagen',
  },
  serviceArea: {
    '@type': 'Country',
    name: locale === 'da' ? 'Danmark' : 'Denmark',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'København',
    addressCountry: 'DK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+45-40-85-27-28',
    contactType: locale === 'da' ? 'Kundestøtte' : 'Customer Support',
  },
});

export const PerformerSchema = (locale: string) => ({
  '@context': 'https://schema.org',
  '@type': 'PerformingGroup',
  '@id': `${baseUrl}#performer`,
  name: 'TrylleKenneth - Magisk Underholdning',
  description: locale === 'da'
    ? 'Professionel tryllekunstner Kenneth udfører magisk underholdning til firmaarrangementer, børnefødselsdage, events og arrangementer i hele Danmark'
    : 'Professional magician Kenneth performs magic entertainment for corporate events, children\'s parties, events and arrangements throughout Denmark',
  performanceArea: {
    '@type': 'City',
    name: locale === 'da' ? 'København' : 'Copenhagen',
  },
  member: {
    '@type': 'Person',
    name: 'Kenneth',
    jobTitle: locale === 'da' ? 'Professionel Tryllekunstner' : 'Professional Magician',
  },
  url: `${baseUrl}/${locale}`,
});

export const OrganizationSchema = (locale: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}#organization`,
  name: 'TrylleKenneth',
  url: `${baseUrl}/${locale}`,
  logo: `${baseUrl}/logo.svg`,
  description: locale === 'da'
    ? 'TrylleKenneth tilbyder magisk underholdning til alle typer arrangementer i Danmark'
    : 'TrylleKenneth offers magic entertainment for all types of arrangements in Denmark',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+45-40-85-27-28',
    contactType: locale === 'da' ? 'Kundestøtte' : 'Customer Support',
  },
  sameAs: [
    `${baseUrl}/da`,
    `${baseUrl}/en`,
  ],
});

export const WebsiteSchema = (locale: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}#website`,
  url: `${baseUrl}/${locale}`,
  name: 'TrylleKenneth',
  description: locale === 'da'
    ? 'Professionel tryllekunstner i København - magisk underholdning til events'
    : 'Professional magician in Copenhagen - magic entertainment for events',
  inLanguage: locale === 'da' ? 'da-DK' : 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/${locale}?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const FAQSchema = (locale: string) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${baseUrl}/${locale}/faq#faq`,
  mainEntity: locale === 'da' ? [
    {
      '@type': 'Question',
      name: 'Hvordan booker jeg tryllekunstner Kenneth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du kan kontakte Kenneth gennem kontaktformularen på dette website, ring til 40 85 27 28, eller send en e-mail til kenneth@tryllekenneth.dk. Kenneth optræder ved firmaarrangementer, børnefødselsdage og alle typer events i København og hele Danmark.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvor meget varsel skal I bruge til firmaarrangementer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ideelt set 2-3 ugers varsel for firmaarrangementer og events, men vi prøver at imødekomme booking i sidste øjeblik når det er muligt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvad er priserne for underholdning til events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Priserne for underholdning til events og firmaarrangementer afhænger af opvisningstypen, varighed og lokation. Kontakt Kenneth for et tilpasset tilbud til dit arrangement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvor længe varer opvisningerne til events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Opvisninger til firmaarrangementer og events varer typisk 30-60 minutter, men kan tilpasses dine behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Rejser I uden for København og Danmark?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Kenneth optræder over hele Danmark ved firmaarrangementer, events og arrangementer, og er glad for at diskutere rejseplaner.',
      },
    },
  ] : [
    {
      '@type': 'Question',
      name: 'How do I book magician Kenneth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Kenneth through the contact form on this website, call 40 85 27 28, or email kenneth@tryllekenneth.dk. Kenneth performs at corporate events, children\'s parties and all types of events in Copenhagen and throughout Denmark.',
      },
    },
  ],
});

export const VideoObjectSchema = (locale: string, videoUrl: string, thumbnailUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: locale === 'da' ? 'Magisk Underholdning - Kenneth' : 'Magic Entertainment - Kenneth',
  description: locale === 'da'
    ? 'Professionel magisk underholdning til firmaarrangementer, børnefødselsdage og events'
    : 'Professional magic entertainment for corporate events, children\'s parties and events',
  thumbnailUrl: thumbnailUrl,
  uploadDate: new Date().toISOString().split('T')[0],
  contentUrl: videoUrl,
  duration: 'PT2M',
});

export const BreadcrumbSchema = (locale: string, items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const ServiceSchema = (locale: string, service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  url: service.url,
  image: service.image,
  provider: {
    '@type': 'Person',
    name: 'Kenneth',
    url: `${baseUrl}/${locale}`,
  },
  areaServed: {
    '@type': 'Country',
    name: locale === 'da' ? 'Danmark' : 'Denmark',
  },
  serviceType: locale === 'da' ? 'Magisk Underholdning' : 'Magic Entertainment',
});

// Event schema for performances and shows
export const EventSchema = (locale: string, event: {
  name: string;
  description: string;
  startDate?: string;
  location?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.name,
  description: event.description,
  performer: {
    '@type': 'Person',
    name: 'Kenneth',
  },
  organizer: {
    '@type': 'Organization',
    name: 'TrylleKenneth',
    url: `${baseUrl}/${locale}`,
  },
  eventAttendanceMode: 'OfflineEventAttendanceMode',
  eventStatus: 'EventScheduled',
  startDate: event.startDate || new Date().toISOString(),
  location: event.location ? {
    '@type': 'Place',
    name: event.location,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DK',
    },
  } : undefined,
});

// Aggregate rating schema for testimonials/reviews
export const AggregateRatingSchema = (locale: string, ratingValue: number = 4.9, reviewCount: number = 50) => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue: ratingValue,
  ratingCount: reviewCount,
  bestRating: 5,
  worstRating: 1,
});

