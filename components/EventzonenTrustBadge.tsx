'use client';

import { useLocale } from 'next-intl';
import { ExternalLink, Globe } from 'lucide-react';

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
      href="https://eventzonen.dk/tryllekenneth"
      target="_blank"
      rel="nofollow external noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50/80 hover:bg-slate-100 border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-sm ${className}`}
      title={locale === 'da' ? 'Besøg profilen på Eventzonen' : 'Visit profile on Eventzonen'}
      aria-label={locale === 'da' ? `${text} - åbnes i nyt vindue` : `${text} - opens in new window`}
    >
      {/* Eventzonen branded icon - premium blue/event style */}
      <div className="flex items-center justify-center w-5 h-5 rounded bg-gradient-to-br from-sky-500 to-blue-600 shadow-sm">
        <Globe size={12} className="text-white" strokeWidth={2.5} />
      </div>
      <span className="text-xs text-slate-600 font-medium group-hover:text-slate-800 transition-colors duration-300">
        {text}
      </span>
      <ExternalLink 
        size={11} 
        className="text-slate-400 group-hover:text-sky-500 transition-colors duration-300 flex-shrink-0"
      />
    </a>
  );
}
