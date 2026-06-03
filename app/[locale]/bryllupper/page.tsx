import type { Metadata } from 'next';
import { pageMetadataConfig } from '@/lib/page-metadata';
import { WeddingClient } from './wedding-client';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'da' | 'en' }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const weddings = pageMetadataConfig.events.weddings;
  const localizedMetadata = weddings[locale];
  const baseUrl = 'https://tryllekenneth.dk';
  
  // /da/bryllupper or /en/bryllupper -> use correct canonical based on locale
  const canonicalUrl = locale === 'da' 
    ? `${baseUrl}/da/bryllupper`
    : `${baseUrl}/en/weddings`;
  
  const alternateUrl = locale === 'da'
    ? `${baseUrl}/en/weddings`
    : `${baseUrl}/da/bryllupper`;

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

export default function WeddingPage() {
  return <WeddingClient />;
}
