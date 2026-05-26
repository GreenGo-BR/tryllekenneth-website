'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, Sparkles, Globe, ChevronRight } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const locale = useLocale();

  return (
    <>
      {/* Subtle gradient transition separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
      
      <footer className="relative bg-gradient-to-b from-slate-50 to-slate-100/80 overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_slate-400_1px,_transparent_0)] bg-[length:24px_24px] pointer-events-none" />
        
        {/* Premium top accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          {/* Main footer content - 3 columns, top-aligned */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN - Branding & External Links (spans 5 cols) */}
            <div className="md:col-span-5 flex flex-col">
              {/* Logo - first element, no extra wrapper spacing */}
              <Link href={`/${locale}`} className="group mb-5 block">
                <Image
                  src="/tryllekenneth-logo.png"
                  alt="TrylleKenneth - Professional Magical Entertainment"
                  width={576}
                  height={173}
                  className="w-[180px] sm:w-[220px] lg:w-[260px] h-auto transition-all duration-300 group-hover:opacity-90"
                  priority
                />
              </Link>
              
              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed font-light max-w-xs mb-6">
                {locale === 'da' 
                  ? 'Professionel magisk underholdning til uforglemmelige begivenheder i Danmark og verden over.'
                  : 'Premium magical entertainment for unforgettable events in Denmark and worldwide.'}
              </p>
              
              {/* External Links - Clean card buttons */}
              <div className="flex flex-col gap-2.5">
                {/* Eventzonen */}
                <a
                  href="https://eventzonen.dk/tryllekenneth"
                  target="_blank"
                  rel="nofollow external noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-sm w-fit"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded bg-gradient-to-br from-sky-500 to-blue-600 shadow-sm flex-shrink-0">
                    <Globe size={11} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">
                    {locale === 'da' ? 'Medlem af Eventzonen.dk' : 'Featured on Eventzonen.dk'}
                  </span>
                  <ExternalLink size={11} className="text-slate-400 group-hover:text-sky-500 transition-colors duration-300 flex-shrink-0" />
                </a>
                
                {/* Google Reviews */}
                <a
                  href="https://share.google/SEEaf7Xt4rjzsQV97"
                  target="_blank"
                  rel="nofollow external noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-sm w-fit"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded bg-white border border-slate-200 shadow-sm flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-3 h-3">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">
                    {locale === 'da' ? 'Se anmeldelser på Google' : 'See Reviews on Google'}
                  </span>
                  <ExternalLink size={11} className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                </a>
                
                {/* Partner Section */}
                <div className="flex flex-col gap-1.5 pt-2">
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    {locale === 'da' ? 'Besøg også vores partner' : 'Also visit our partner'}
                  </span>
                  <a
                    href="https://trylle.dk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-sm w-fit"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded bg-gradient-to-br from-amber-400 to-amber-500 shadow-sm flex-shrink-0">
                      <Sparkles size={11} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">
                      Hokus Pokus
                    </span>
                    <ExternalLink size={11} className="text-slate-400 group-hover:text-amber-500 transition-colors duration-300 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN - Information Links (spans 3 cols) */}
            <div className="md:col-span-3 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider">{t('information')}</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent max-w-12" />
              </div>
              <nav className="flex flex-col gap-2.5">
                {[
                  { href: `/${locale}`, label: tNav('home') },
                  { href: `/${locale}/services/${locale === 'da' ? 'boernetrylleri' : 'childrens'}`, label: tNav('performances') },
                  { href: `/${locale}/gallery`, label: tNav('gallery') },
                  { href: `/${locale}/faq`, label: tNav('faq') },
                  { href: `/${locale}/contact`, label: t('contact') },
                  { href: `/${locale}/terms-and-conditions`, label: t('termsAndConditions') },
                  { href: `/${locale}/privacy-policy`, label: t('privacyPolicy') },
                ].map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="group flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors duration-300"
                  >
                    <ChevronRight size={12} className="text-slate-300 group-hover:text-amber-500 transition-colors duration-300" />
                    <span className="text-sm font-light">{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* RIGHT COLUMN - Contact Details (spans 4 cols) */}
            <div className="md:col-span-4 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider">{t('contact')}</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400/60 to-transparent max-w-12" />
              </div>
              <div className="flex flex-col gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/4540852728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:translate-x-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/50 group-hover:bg-amber-100 group-hover:border-amber-300/50 transition-all duration-300">
                    <Phone size={16} className="text-amber-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">WhatsApp</span>
                    <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">+45 40 85 27 28</span>
                  </div>
                </a>
                
                {/* Email */}
                <a
                  href="mailto:kenneth@tryllekenneth.dk"
                  className="group flex items-center gap-3 hover:translate-x-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/50 group-hover:bg-amber-100 group-hover:border-amber-300/50 transition-all duration-300">
                    <Mail size={16} className="text-amber-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">{locale === 'da' ? 'E-mail' : 'Email'}</span>
                    <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">kenneth@tryllekenneth.dk</span>
                  </div>
                </a>
                
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/50">
                    <MapPin size={16} className="text-amber-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">{locale === 'da' ? 'Tilgængelighed' : 'Service'}</span>
                    <span className="text-sm text-slate-700 font-medium">{t('basedIn')}</span>
                    <span className="text-xs text-slate-500 font-light">{t('availableWorldwide')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-slate-500 font-light">© 2026 TrylleKenneth. All rights reserved.</p>
            <a
              href="https://www.eslmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-all duration-300"
              title="ESL Marketing - Premium Digital Solutions"
            >
              <span className="text-xs text-slate-500 font-light group-hover:text-slate-700 transition-colors duration-300">
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
