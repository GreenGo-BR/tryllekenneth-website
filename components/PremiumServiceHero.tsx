'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PremiumServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  phoneText: string;
  phoneNumber: string;
  imageSrc: string;
  imageAlt: string;
  locale: string;
  badgeText?: string;
  accentColors: {
    primary: string;      // e.g., 'from-purple-600 to-indigo-600'
    secondary: string;    // e.g., 'via-purple-400'
    tertiary: string;     // e.g., 'to-indigo-400'
    light: string;        // e.g., 'purple-50'
    border: string;       // e.g., 'purple-200'
    text: string;         // e.g., 'purple-600'
    glow: string;         // e.g., 'via-purple-400'
    particle1: string;    // e.g., 'purple-200/8'
    particle2: string;    // e.g., 'indigo-200/6'
    particle3: string;    // e.g., 'indigo-200/5'
  };
  children?: ReactNode;
}

export function PremiumServiceHero({
  title,
  subtitle,
  description,
  buttonText,
  phoneText,
  phoneNumber,
  imageSrc,
  imageAlt,
  locale,
  badgeText,
  accentColors,
  children,
}: PremiumServiceHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Premium gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accentColors.primary}/5 via-white to-white z-0`}></div>
      
      {/* Floating premium particles */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className={`absolute -top-1/2 -right-1/4 w-96 h-96 bg-${accentColors.particle1} rounded-full blur-3xl animate-float-slow`}></div>
        <div className={`absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-${accentColors.particle2} rounded-full blur-3xl animate-float-slow`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-1/3 right-1/3 w-72 h-72 bg-${accentColors.particle3} rounded-full blur-3xl animate-drift-right`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h1 className={`text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r ${accentColors.primary} bg-clip-text text-transparent`}>
              {title}
            </h1>
            <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
              {subtitle}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className={`bg-gradient-to-r ${accentColors.primary} hover:opacity-90 text-white text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all`}>
                  {buttonText}
                </Button>
              </Link>
              <a href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className={`border-2 border-${accentColors.text} text-${accentColors.text} hover:bg-${accentColors.light} text-base font-semibold h-14 px-8 transition-all`}
                >
                  {phoneText}
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Cinematic Image */}
          <div className="relative group hidden lg:block">
            {/* Outer glow - premium colors */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${accentColors.primary} rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20`}></div>
            
            {/* Image container */}
            <div className={`relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-${accentColors.border}/30 group-hover:border-${accentColors.border}/60`}>
              
              {/* Cinematic overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
              
              {/* Floating sparkles */}
              <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
              <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
              <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

              {/* Image */}
              <img 
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />

              {/* Magical glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  boxShadow: `inset 0 0 60px rgba(${accentColors.secondary}, 0.15), inset 0 0 100px rgba(${accentColors.secondary}, 0.08)`
                }}
              ></div>
            </div>

            {/* Premium badge below image */}
            {badgeText && (
              <div className={`mt-6 flex items-center justify-center gap-2 text-${accentColors.text} font-semibold`}>
                <div className={`w-2 h-2 bg-gradient-to-r ${accentColors.primary} rounded-full animate-pulse`}></div>
                <p className="text-sm">{badgeText}</p>
                <div className={`w-2 h-2 bg-gradient-to-r ${accentColors.primary} rounded-full animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Image - Shown on smaller screens */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden absolute w-full top-0 left-0 right-0 mt-96">
        <div className="relative group">
          <div className={`absolute -inset-1 bg-gradient-to-r ${accentColors.primary} rounded-3xl opacity-75 blur-2xl -z-20`}></div>
          <div className={`relative overflow-hidden rounded-3xl shadow-2xl border border-${accentColors.border}/30`}>
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {children}
    </section>
  );
}
