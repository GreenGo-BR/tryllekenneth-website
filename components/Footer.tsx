'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tServices = useTranslations('services');
  const locale = useLocale();

  return (
    <footer className="mt-20 border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="flex flex-col gap-3">
            <Link href={`/${locale}`} className="shrink-0 w-fit">
              <Image
                src="/tryllekenneth-logo.png"
                alt="TrylleKenneth - Magisk Underholdning til Dig"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">{t('copyright')}</p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground mb-2">{t('services')}</h4>
            <Link href={`/${locale}/services/childrens`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {tServices('childrensMagic.title')}
            </Link>
            <Link href={`/${locale}/services/standup`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {tServices('standUpMagic.title')}
            </Link>
            <Link href={`/${locale}/services/closeup`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {tServices('closeUpMagic.title')}
            </Link>
            <Link href={`/${locale}/services/santa`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {tServices('santa.title')}
            </Link>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground mb-2">{t('information')}</h4>
            <Link href={`/${locale}/gallery`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {tNav('gallery')}
            </Link>
            <Link href={`/${locale}/faq`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {tNav('faq')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t('contact')}
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground mb-2">{t('contact')}</h4>
            <a
              href="tel:+4540852728"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">{t('phone')}</span>
            </a>
            <a
              href="mailto:kenneth@tryllekenneth.dk"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">{t('email')}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">{t('rights')}</p>
          <a
            href="https://www.eslmarketing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            title="ESL Marketing"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tXWPj1rRuWWkzxoo1EZAkGSXReNYqD.png"
              alt="ESL Marketing"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
