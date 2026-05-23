import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { StructuredData, MultipleStructuredData } from '@/components/structured-data';
import {
  PersonSchema,
  LocalBusinessSchema,
  PerformerSchema,
  OrganizationSchema,
  WebsiteSchema,
  FAQSchema,
} from '@/lib/structured-data';
import { generateLocaleMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

const locales = ['en', 'da'];

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    return {};
  }

  return generateLocaleMetadata(locale as 'en' | 'da');
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  // Pass locale explicitly to getMessages
  const messages = await getMessages({ locale });

  // Generate structured data schemas for this locale
  const schemas = [
    PersonSchema(locale),
    LocalBusinessSchema(locale),
    PerformerSchema(locale),
    OrganizationSchema(locale),
    WebsiteSchema(locale),
    FAQSchema(locale),
  ];

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <MultipleStructuredData schemas={schemas} />
      {children}
    </NextIntlClientProvider>
  );
}

