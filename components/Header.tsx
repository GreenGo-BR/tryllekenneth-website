'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-float">
              ✨ TrylleKenneth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href={`/${locale}`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('home')}
            </Link>
            <Link href={`/${locale}/services/childrens`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('childrensMagic')}
            </Link>
            <Link href={`/${locale}/services/standup`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('standUpMagic')}
            </Link>
            <Link href={`/${locale}/services/closeup`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('closeUpMagic')}
            </Link>
            <Link href={`/${locale}/services/santa`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('santa')}
            </Link>
            <Link href={`/${locale}/bryllupper`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('weddings')}
            </Link>
            <Link href={`/${locale}/firmaarrangementer`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors text-accent font-semibold">
              {t('corporateEvents')}
            </Link>
            <Link href={`/${locale}/gallery`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('gallery')}
            </Link>
            <Link href={`/${locale}/faq`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('faq')}
            </Link>
            <Link href={`/${locale}/contact`} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('contact')}
            </Link>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-2">
            <Link href={`/${locale}`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('home')}
            </Link>
            <Link href={`/${locale}/services/childrens`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('childrensMagic')}
            </Link>
            <Link href={`/${locale}/services/standup`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('standUpMagic')}
            </Link>
            <Link href={`/${locale}/services/closeup`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('closeUpMagic')}
            </Link>
            <Link href={`/${locale}/services/santa`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('santa')}
            </Link>
            <Link href={`/${locale}/bryllupper`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('weddings')}
            </Link>
            <Link href={`/${locale}/firmaarrangementer`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors text-accent font-semibold">
              {t('corporateEvents')}
            </Link>
            <Link href={`/${locale}/gallery`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('gallery')}
            </Link>
            <Link href={`/${locale}/faq`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('faq')}
            </Link>
            <Link href={`/${locale}/contact`} className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              {t('contact')}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
