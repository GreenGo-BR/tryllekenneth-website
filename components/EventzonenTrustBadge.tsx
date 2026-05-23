'use client';

import { useLocale } from 'next-intl';
import { ExternalLink } from 'lucide-react';

interface EventzonenTrustBadgeProps {
  variant?: 'minimal' | 'compact' | 'expanded';
  className?: string;
}

export function EventzonenTrustBadge({ 
  variant = 'minimal', 
  className = '' 
}: EventzonenTrustBadgeProps) {
  const locale = useLocale();
  
  const badges = {
    minimal: {
      da: 'Medlem af Eventzonen.dk',
      en: 'Featured on Eventzonen.dk'
    },
    compact: {
      da: 'Tilgængelig gennem Eventzonen.dk',
      en: 'Available on Eventzonen.dk'
    },
    expanded: {
      da: 'Tilgængelig gennem Danmarks førende underholdningsplatform',
      en: 'Available through Denmark\'s leading entertainment platform'
    }
  };

  const text = badges[variant][locale as 'da' | 'en'];

  return (
    <a
      href="https://www.eventzonen.dk/kenneth-tryllekenneth"
      target="_blank"
      rel="nofollow sponsored external"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors duration-300 group ${className}`}
      title={locale === 'da' ? 'Besøg profilen på Eventzonen' : 'Visit profile on Eventzonen'}
      aria-label={locale === 'da' ? `${text} - åbnes i nyt vindue` : `${text} - opens in new window`}
    >
      <span className="text-xs sm:text-sm text-slate-700 font-light group-hover:text-slate-900 transition-colors">
        {text}
      </span>
      <ExternalLink 
        size={14} 
        className="text-slate-500 group-hover:text-amber-500 transition-colors flex-shrink-0"
      />
    </a>
  );
}
