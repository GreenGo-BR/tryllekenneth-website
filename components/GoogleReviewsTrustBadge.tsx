'use client';

import { useLocale } from 'next-intl';
import { Star, ExternalLink } from 'lucide-react';

interface GoogleReviewsTrustBadgeProps {
  variant?: 'minimal' | 'compact' | 'expanded';
  className?: string;
  showRating?: boolean;
}

export function GoogleReviewsTrustBadge({ 
  variant = 'minimal',
  className = '',
  showRating = false
}: GoogleReviewsTrustBadgeProps) {
  const locale = useLocale();

  const badges = {
    minimal: {
      da: 'Se anmeldelser på Google',
      en: 'See Reviews on Google'
    },
    compact: {
      da: 'Læs vores Google-anmeldelser',
      en: 'Read our Google Reviews'
    },
    expanded: {
      da: 'Tilgængelig på Google Reviews - Se hvad vores kunder siger',
      en: 'Available on Google Reviews - See what our customers say'
    }
  };

  const rating = {
    da: '4.9 / 5 stjerner',
    en: '4.9 / 5 stars'
  };

  const text = badges[variant][locale as 'da' | 'en'];
  const ratingText = rating[locale as 'da' | 'en'];

  return (
    <a
      href="https://share.google/SEEaf7Xt4rjzsQV97"
      target="_blank"
      rel="nofollow external noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50/80 hover:bg-slate-100 border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-sm ${className}`}
      title={locale === 'da' ? 'Se anmeldelser på Google' : 'See Reviews on Google'}
      aria-label={locale === 'da' ? `${text} - åbnes i nyt vindue` : `${text} - opens in new window`}
    >
      {/* Google branded icon - official G colors */}
      <div className="flex items-center justify-center w-5 h-5 rounded bg-white border border-slate-200 shadow-sm">
        <svg viewBox="0 0 24 24" className="w-3 h-3">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
      <div className="flex items-center gap-1.5">
        {showRating && (
          <>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-500 font-light">{ratingText}</span>
          </>
        )}
        <span className="text-xs text-slate-600 font-medium group-hover:text-slate-800 transition-colors duration-300">
          {text}
        </span>
      </div>
      <ExternalLink 
        size={11} 
        className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0"
      />
    </a>
  );
}
