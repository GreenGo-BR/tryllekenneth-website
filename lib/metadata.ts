import { Metadata } from 'next';

export function generateLocaleMetadata(locale: 'en' | 'da'): Metadata {
  const isEnglish = locale === 'en';
  const siteDomain = 'https://tryllekenneth.dk';
  
  return {
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
