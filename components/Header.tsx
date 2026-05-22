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
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-slate-950/98 via-slate-950/96 to-slate-950/94 backdrop-blur-md border-b border-amber-500/10 shadow-lg shadow-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Premium header with increased vertical spacing */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Large with overflow managed by negative margin */}
          <Link href={`/${locale}`} className="shrink-0 flex items-center -my-2 hover:opacity-90 transition-opacity duration-300">
            <Image
              src="/tryllekenneth-logo.png"
              alt="TrylleKenneth - Magisk Underholdning til Dig"
              width={720}
              height={216}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Premium Navigation - Desktop only, with increased spacing */}
          <div className="hidden lg:flex flex-1 justify-center px-12">
            <PremiumNav />
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4 shrink-0">
            <LanguageSwitcher />

            {/* Mobile Menu Button - Premium styling */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-amber-500/10 transition-all duration-300 text-gray-200 hover:text-amber-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Premium styling */}
        {isOpen && (
          <div className="lg:hidden border-t border-amber-500/10 py-6 space-y-2 bg-gradient-to-b from-slate-900/50 to-transparent">
            <PremiumNav isMobile={true} />
          </div>
        )}
      </div>
    </header>
  );
}
