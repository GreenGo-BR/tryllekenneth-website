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
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors duration-300 group ${className}`}
      title={locale === 'da' ? 'Se anmeldelser på Google' : 'See Reviews on Google'}
      aria-label={locale === 'da' ? `${text} - åbnes i nyt vindue` : `${text} - opens in new window`}
    >
      <div className="flex items-center gap-1">
        {showRating && (
          <>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-xs text-slate-600 font-light ml-1">{ratingText}</span>
          </>
        )}
      </div>
      <span className="text-xs sm:text-sm text-slate-700 font-light group-hover:text-slate-900 transition-colors">
        {text}
      </span>
      <ExternalLink 
        size={14} 
        className="text-slate-500 group-hover:text-blue-500 transition-colors flex-shrink-0"
      />
    </a>
  );
}
