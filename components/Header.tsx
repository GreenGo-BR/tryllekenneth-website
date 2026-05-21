'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { PremiumNav } from './PremiumNav';

export function Header() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between overflow-hidden">
          {/* Logo */}
          <Link href={`/${locale}`} className="shrink-0 flex items-center -my-2">
            <Image
              src="/tryllekenneth-logo.png"
              alt="TrylleKenneth - Magisk Underholdning til Dig"
              width={480}
              height={144}
              className="h-32 w-auto"
              priority
            />
          </Link>

          {/* Premium Navigation - Desktop only, integrated into header */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <PremiumNav />
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2 shrink-0">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <PremiumNav />
          </div>
        )}
      </div>
    </header>
  );
}
