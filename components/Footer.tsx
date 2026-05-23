'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { EventzonenTrustBadge } from './EventzonenTrustBadge';
import { GoogleReviewsTrustBadge } from './GoogleReviewsTrustBadge';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tServices = useTranslations('services');
  const locale = useLocale();

  return (
    <>
      {/* Subtle gradient transition separator */}
      <div className="h-1 bg-gradient-to-b from-slate-200/30 via-slate-300/20 to-transparent"></div>
      
      <footer className="relative bg-gradient-to-b from-slate-50 via-slate-100 to-slate-150 overflow-hidden shadow-inner shadow-slate-300/10">
      {/* Subtle cinematic texture overlay with enhanced depth */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-slate-400/10 via-transparent to-amber-400/10 pointer-events-none" />
      
      {/* Premium top accent line with signature glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      
      {/* Subtle glow layer for premium depth */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-amber-200/5 via-transparent to-transparent pointer-events-none" />

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
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              {locale === 'da' 
                ? 'Professionel magisk underholdning til uforglemmelige begivenheder på tværs af Danmark.'
                : 'Professional magical entertainment for unforgettable events across Denmark.'}
            </p>
            
            {/* Eventzonen Trust Badge - Premium placement */}
            <div className="pt-2">
              <EventzonenTrustBadge variant="minimal" />
            </div>
            
            {/* Google Reviews Trust Badge */}
            <div className="pt-2">
              <GoogleReviewsTrustBadge variant="minimal" />
            </div>
            {/* Social hints (optional - minimal placement) */}
            <div className="flex gap-4 pt-2">
              <a href="tel:+4540852728" className="text-slate-400 hover:text-amber-500 transition-colors duration-300" title="Call">
                <Phone size={18} />
              </a>
              <a href="mailto:kenneth@tryllekenneth.dk" className="text-slate-400 hover:text-amber-500 transition-colors duration-300" title="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* CENTER COLUMN - Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">{t('information')}</h4>
            <nav className="flex flex-col gap-3">
              <Link href={`/${locale}`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-500/100 transition-colors duration-300">→</span>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 font-light text-sm">{tNav('home')}</span>
              </Link>
              <Link href={`/${locale}/services/childrens`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-500/100 transition-colors duration-300">→</span>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 font-light text-sm">{tNav('performances')}</span>
              </Link>
              <Link href={`/${locale}/gallery`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-500/100 transition-colors duration-300">→</span>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 font-light text-sm">{tNav('gallery')}</span>
              </Link>
              <Link href={`/${locale}/faq`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-500/100 transition-colors duration-300">→</span>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 font-light text-sm">{tNav('faq')}</span>
              </Link>
              <Link href={`/${locale}/contact`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-500/100 transition-colors duration-300">→</span>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 font-light text-sm">{t('contact')}</span>
              </Link>
              <Link href={`/${locale}/terms-and-conditions`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-500/100 transition-colors duration-300">→</span>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 font-light text-sm">{t('termsAndConditions')}</span>
              </Link>
              <Link href={`/${locale}/privacy-policy`} className="group flex items-start gap-2">
                <span className="text-amber-400/0 group-hover:text-amber-500/100 transition-colors duration-300">→</span>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 font-light text-sm">{t('privacyPolicy')}</span>
              </Link>
            </nav>
          </div>

          {/* RIGHT COLUMN - Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">{t('contact')}</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+4540852728"
                className="group flex items-start gap-3 hover:pl-1 transition-all duration-300"
              >
                <Phone size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-0">
                  <span className="text-slate-700 font-light group-hover:text-slate-900 transition-colors duration-300">
                    <span className="text-xs text-slate-500">{locale === 'da' ? 'Telefon: ' : 'Phone: '}</span><span>40 85 27 28</span>
                  </span>
                </div>
              </a>
              <a
                href="mailto:kenneth@tryllekenneth.dk"
                className="group flex items-start gap-3 hover:pl-1 transition-all duration-300"
              >
                <Mail size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-0">
                  <span className="text-slate-700 font-light group-hover:text-slate-900 transition-colors duration-300">
                    <span className="text-xs text-slate-500">{locale === 'da' ? 'E-mail: ' : 'Email: '}</span><span>kenneth@tryllekenneth.dk</span>
                  </span>
                </div>
              </a>
              <div className="group flex items-start gap-3 pt-2">
                <MapPin size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-0">
                  <span className="text-slate-700 font-light">
                    <span className="text-xs text-slate-500">{locale === 'da' ? 'Tilgængelighed: ' : 'Service: '}</span><span>{t('basedIn')} • {t('availableWorldwide')}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Divider - Luxury signature accent */}
        <div className="premium-divider-accent my-8" />

        {/* Bottom bar - Premium footer credit */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
          <p className="text-xs text-slate-500 font-light">© 2026 TrylleKenneth. All rights reserved.</p>
          <a
            href="https://www.eslmarketing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 transition-all duration-300"
            title="ESL Marketing - Premium Digital Solutions"
          >
            <span className="text-xs text-slate-600 font-light group-hover:text-slate-800 transition-colors duration-300">
              {locale === 'da' ? 'Designet af' : 'Designed by'}
            </span>
            <span className="text-xs font-semibold text-amber-600 group-hover:text-amber-700 transition-colors duration-300 group-hover:underline underline-offset-2 decoration-amber-300/50 group-hover:decoration-amber-400">
              ESL Marketing
            </span>
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}
