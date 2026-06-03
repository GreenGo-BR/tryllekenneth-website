import type { Metadata } from 'next';
import { pageMetadataConfig } from '@/lib/page-metadata';
import { StandUpMagicClient } from './standup-client';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'da' | 'en' }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const standup = pageMetadataConfig.services.standup;
  const localizedMetadata = standup[locale];
  const baseUrl = 'https://tryllekenneth.dk';
  const path = '/services/standup';
  const canonicalUrl = `${baseUrl}/${locale}${path}`;
  const alternateUrl = locale === 'da' 
    ? `${baseUrl}/en${path}`
    : `${baseUrl}/da${path}`;

  return {
    title: localizedMetadata.title,
    description: localizedMetadata.description,
    keywords: localizedMetadata.keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'da-DK': locale === 'en' ? alternateUrl : canonicalUrl,
        'en-US': locale === 'da' ? alternateUrl : canonicalUrl,
      },
    },
    openGraph: {
      title: localizedMetadata.title,
      description: localizedMetadata.description,
      type: 'website',
      url: canonicalUrl,
      locale: locale === 'da' ? 'da_DK' : 'en_US',
      alternateLocale: locale === 'da' ? ['en_US'] : ['da_DK'],
      siteName: 'TrylleKenneth',
      images: [
        {
          url: '/og-image-1200x630.png',
          width: 1200,
          height: 630,
          alt: localizedMetadata.title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: localizedMetadata.title,
      description: localizedMetadata.description,
      images: ['/og-image-1200x630.png'],
    },
  };
}

export default function StandUpMagicPage() {
  return <StandUpMagicClient />;
}
