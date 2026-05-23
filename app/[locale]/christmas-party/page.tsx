'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ChristmasPartyPage() {
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    // Redirect to julefrokost page as it contains the Christmas party content
    window.location.href = `/${locale}/julefrokost`;
  }, [locale]);

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{locale === 'da' ? 'Omdirigerer...' : 'Redirecting...'}</h1>
          <p className="text-slate-600 mb-8">
            {locale === 'da' 
              ? 'Du bliver omdirigeret til julefrkosten siden...' 
              : 'You are being redirected to the Christmas party page...'}
          </p>
          <Link href={`/${locale}/julefrokost`}>
            <Button className="btn-primary">
              {locale === 'da' ? 'Klik her hvis du ikke bliver omdirigeret' : 'Click here if you are not redirected'}
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
