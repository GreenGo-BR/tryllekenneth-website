'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tServices = useTranslations('services');
  const locale = useLocale();

  return (
    <footer className="relative mt-16 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden luxury-footer-glow">
      {/* Subtle cinematic texture overlay with enhanced depth */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-red-900/10 via-transparent to-amber-900/10 pointer-events-none" />
      
      {/* Premium top accent line with signature glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      
      {/* Subtle glow layer for premium depth */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-amber-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* LEFT COLUMN - Branding */}
          <div className="flex flex-col gap-6">
            <Link href={`/${locale}`} className="w-fit group">
              <Image
                src="/tryllekenneth-logo.png"
                alt="TrylleKenneth - Professional Magical Entertainment"
                width={576}
                height={173}
                className="h-24 w-auto transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              {locale === 'da' 
                ? 'Professionel magisk underholdning til uforglemmelige begivenheder på tværs af Danmark.'
                : 'Professional magical entertainment for unforgettable events across Denmark.'}
            </p>
            {/* Social hints (optional - minimal placement) */}
            <div className="flex gap-4 pt-2">
              <a href="tel:+4540852728" className="text-gray-400 hover:text-amber-400 transition-colors duration-300" title="Call">
                <Phone size={18} />
              </a>
              <a href="mailto:kenneth@tryllekenneth.dk" className="text-gray-400 hover:text-amber-400 transition-colors duration-300" title="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* CENTER COLUMN - Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{t('information')}</h4>
            <nav className="flex flex-col gap-3">
              <Link href={`/${locale}`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-400/100 transition-colors duration-300">→</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light text-sm">{tNav('home')}</span>
              </Link>
              <Link href={`/${locale}/services/childrens`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-400/100 transition-colors duration-300">→</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light text-sm">{tNav('performances')}</span>
              </Link>
              <Link href={`/${locale}/gallery`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-400/100 transition-colors duration-300">→</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light text-sm">{tNav('gallery')}</span>
              </Link>
              <Link href={`/${locale}/faq`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-400/100 transition-colors duration-300">→</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light text-sm">{tNav('faq')}</span>
              </Link>
              <Link href={`/${locale}/contact`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-400/100 transition-colors duration-300">→</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light text-sm">{t('contact')}</span>
              </Link>
            </nav>
          </div>

          {/* RIGHT COLUMN - Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{t('contact')}</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+4540852728"
                className="group flex items-start gap-3 hover:pl-1 transition-all duration-300"
              >
                <Phone size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400 font-light">{locale === 'da' ? 'Telefon' : 'Phone'}</span>
                  <span className="text-gray-200 font-light group-hover:text-white transition-colors duration-300">40 85 27 28</span>
                </div>
              </a>
              <a
                href="mailto:kenneth@tryllekenneth.dk"
                className="group flex items-start gap-3 hover:pl-1 transition-all duration-300"
              >
                <Mail size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400 font-light">{locale === 'da' ? 'Email' : 'Email'}</span>
                  <span className="text-gray-200 font-light group-hover:text-white transition-colors duration-300">kenneth@tryllekenneth.dk</span>
                </div>
              </a>
              <div className="group flex items-start gap-3 pt-2">
                <MapPin size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400 font-light">{locale === 'da' ? 'Område' : 'Service Area'}</span>
                  <span className="text-gray-200 font-light">Denmark</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Divider - Luxury signature accent */}
        <div className="premium-divider-accent my-8" />

        {/* Bottom bar - Premium footer credit */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
          <p className="text-xs text-gray-400 font-light">© 2026 TrylleKenneth. {t('rights')}</p>
          <a
            href="https://www.eslmarketing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:opacity-70 transition-opacity duration-300"
            title="ESL Marketing"
          >
            <span className="text-xs text-gray-500 font-light group-hover:text-gray-300 transition-colors duration-300">
              {locale === 'da' ? 'Designet af ' : 'Designed by '}<span className="text-amber-400">ESL Marketing</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
