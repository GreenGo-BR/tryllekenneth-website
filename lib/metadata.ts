import { Metadata } from 'next';

export function generateLocaleMetadata(locale: 'en' | 'da'): Metadata {
  const isEnglish = locale === 'en';
  const siteDomain = 'https://tryllekenneth.dk';
  
  const metadata: Record<'en' | 'da', {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'TrylleKenneth | Professional Magician in Copenhagen',
      description: 'Premium magic entertainment for corporate events, weddings and private celebrations across Denmark.',
    },
    da: {
      title: 'TrylleKenneth | Professionel Tryllekunstner i København',
      description: 'Eksklusiv tryllekunst til firmaevents, bryllupper, julefrokoster og private arrangementer i hele Danmark.',
    },
  };

  const currentMetadata = metadata[locale];
  
  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    openGraph: {
      title: currentMetadata.title,
      description: currentMetadata.description,
      type: 'website',
      url: `${siteDomain}/${locale}`,
      locale: locale === 'da' ? 'da_DK' : 'en_US',
      alternateLocale: locale === 'da' ? ['en_US'] : ['da_DK'],
      siteName: 'TrylleKenneth',
      images: [
        {
          url: '/og-image-1200x630.png',
          width: 1200,
          height: 630,
          alt: currentMetadata.title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMetadata.title,
      description: currentMetadata.description,
      images: ['/og-image-1200x630.png'],
    },
    alternates: {
      canonical: `${siteDomain}/${locale}`,
      languages: {
        'en': `${siteDomain}/en`,
        'da': `${siteDomain}/da`,
        'x-default': `${siteDomain}/en`,
      },
    },
  };
}

export function generatePageMetadata(
  locale: 'en' | 'da',
  path: string = ''
): Metadata {
  const isEnglish = locale === 'en';
  const siteDomain = 'https://tryllekenneth.dk';
  const fullUrl = `${siteDomain}/${locale}${path}`;
  
  return {
    alternates: {
      canonical: fullUrl,
      languages: {
        'en': `${siteDomain}/en${path}`,
        'da': `${siteDomain}/da${path}`,
        'x-default': `${siteDomain}/en${path}`,
      },
    },
  };
}
