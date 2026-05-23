'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ChildrensMagicPage() {
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    // Redirect to boernetrylleri page as it contains the children's magic content
    window.location.href = `/${locale}/services/boernetrylleri`;
  }, [locale]);

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{locale === 'da' ? 'Omdirigerer...' : 'Redirecting...'}</h1>
          <p className="text-slate-600 mb-8">
            {locale === 'da' 
              ? 'Du bliver omdirigeret til børnetrylleri siden...' 
              : 'You are being redirected to the children\'s magic page...'}
          </p>
          <Link href={`/${locale}/services/boernetrylleri`}>
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
