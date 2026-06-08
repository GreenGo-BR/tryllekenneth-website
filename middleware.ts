import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
  locales: ['en', 'da'],
  defaultLocale: 'da',
  localePrefix: 'always',
});

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // SEO Redirects - Handle old URLs indexed in Google
  // Capture both ASCII and special character versions (ø = %C3%B8)
  if (pathname === '/børnetrylleri' || pathname === '/boernetrylleri' || 
      pathname === '/b%C3%B8rnetrylleri' || pathname === '%2Fb%C3%B8rnetrylleri') {
    return NextResponse.redirect(new URL('/da/services/boernetrylleri', request.url), {
      status: 301, // Permanent redirect for SEO
    });
  }

  // Additional SEO redirects for old indexed URLs
  if (pathname === '/da/stand-up-trylleri' || pathname === '/stand-up-trylleri') {
    return NextResponse.redirect(new URL('/da/services/standup', request.url), {
      status: 301, // Permanent redirect for SEO
    });
  }

  if (pathname === '/blank' || pathname === '/da/blank') {
    return NextResponse.redirect(new URL('/da/services/boernetrylleri', request.url), {
      status: 301, // Permanent redirect for SEO
    });
  }
  
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

