'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getEquivalentRoute } from '@/lib/routeMapping';

export function LanguageSwitcher() {
  const intlLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [browserLocale, setBrowserLocale] = useState<'en' | 'da'>('en');

  // Detect locale from actual browser URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullPath = window.location.pathname;
      if (fullPath.startsWith('/da')) {
        setBrowserLocale('da');
      } else {
        setBrowserLocale('en');
      }
    }
  }, []);

  // Use the browser-detected locale, fall back to intlLocale
  const locale = browserLocale || (intlLocale as 'en' | 'da');
  
  const routeWithoutLocale = pathname || '/';
  
  // Get the equivalent route in the other language
  const otherLocale = locale === 'en' ? 'da' : 'en';
  const equivalentRoute = getEquivalentRoute(routeWithoutLocale, locale, otherLocale);
  const targetPath = `/${otherLocale}${equivalentRoute === '/' ? '' : equivalentRoute}`;
  
  // Current language path
  const currentPath = `/${locale}${routeWithoutLocale === '/' ? '' : routeWithoutLocale}`;

  const handleLanguageSwitch = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex items-center bg-muted rounded-lg p-1 pointer-events-auto">
      <button
        onClick={() => handleLanguageSwitch(currentPath)}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors cursor-pointer pointer-events-auto ${
          locale === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageSwitch(targetPath)}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors cursor-pointer pointer-events-auto ${
          locale === 'da'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to Danish"
      >
        DA
      </button>
    </div>
  );
}
