'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getEquivalentRoute } from '@/lib/routeMapping';

export function LanguageSwitcher() {
  const intlLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [browserLocale, setBrowserLocale] = useState<'en' | 'da'>('da');

  // Detect locale from actual browser URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullPath = window.location.pathname;
      if (fullPath.startsWith('/en')) {
        setBrowserLocale('en');
      } else {
        setBrowserLocale('da');
      }
    }
  }, []);

  // Use the browser-detected locale, fall back to intlLocale
  const locale = browserLocale || (intlLocale as 'en' | 'da');
  
  // pathname from usePathname() is already without locale prefix
  const currentRoute = pathname || '/';
  
  // Get the equivalent route in the other language
  const otherLocale = locale === 'da' ? 'en' : 'da';
  const equivalentRoute = getEquivalentRoute(currentRoute, locale, otherLocale);
  
  // Construct paths with explicit locale prefixes
  const daPath = `/da${currentRoute === '/' ? '' : getEquivalentRoute(currentRoute, locale, 'da')}`;
  const enPath = `/en${currentRoute === '/' ? '' : getEquivalentRoute(currentRoute, locale, 'en')}`;

  const handleLanguageSwitch = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex items-center bg-muted rounded-lg p-1 pointer-events-auto">
      <button
        onClick={() => handleLanguageSwitch(daPath)}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors cursor-pointer pointer-events-auto ${
          locale === 'da'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to Danish"
      >
        DA
      </button>
      <button
        onClick={() => handleLanguageSwitch(enPath)}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors cursor-pointer pointer-events-auto ${
          locale === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
