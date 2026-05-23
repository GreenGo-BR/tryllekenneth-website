import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
  locales: ['en', 'da'],
  defaultLocale: 'da',
  localePrefix: 'always',
});

// Old Danish slugs used in English locale - map to new English URLs
const englishRedirectMap: Record<string, string> = {
  '/en/firmaarrangementer': '/en/corporate-events',
  '/en/bryllupper': '/en/weddings',
  '/en/julefrokost': '/en/christmas-party',
  '/en/services/naermagi': '/en/services/close-up-magic',
  '/en/services/boernetrylleri': '/en/services/childrens-magic',
  '/en/services/closeup': '/en/services/close-up-magic',
  '/en/services/childrens': '/en/services/childrens-magic',
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check for old English route redirects (301 permanent redirect for SEO)
  if (englishRedirectMap[pathname]) {
    return NextResponse.redirect(new URL(englishRedirectMap[pathname], request.url), {
      status: 301,
    });
  }
  
  // If user is already on /da or /en, use the standard intl middleware
  if (pathname.startsWith('/da') || pathname.startsWith('/en')) {
    return intlMiddleware(request);
  }
  
  // If user is on "/" (root), check for language preference and country
  if (pathname === '/') {
    // Check for saved language preference in cookie
    const languagePreference = request.cookies.get('NEXT_INTL_LOCALE')?.value;
    
    if (languagePreference === 'en' || languagePreference === 'da') {
      // User has manually selected a language, respect it
      return NextResponse.redirect(new URL(`/${languagePreference}`, request.url));
    }
    
    // Get country from Vercel geo headers - try multiple sources
    let country = request.geo?.country;
    
    // Fallback to x-vercel-ip-country header if geo is not available (dev mode)
    if (!country) {
      country = request.headers.get('x-vercel-ip-country') || 'US';
    }
    
    // If visitor is from Denmark, redirect to /da
    if (country === 'DK') {
      const response = NextResponse.redirect(new URL('/da', request.url));
      return response;
    }
    
    // Default to English for all other countries
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  // For all other paths, use the standard intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

