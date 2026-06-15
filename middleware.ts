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

  // SEO redirect for old magician/tryllekunstner URL
  if (pathname === '/tryllekunstner') {
    return NextResponse.redirect(new URL('/da/services/naermagi', request.url), {
      status: 301, // Permanent redirect for SEO
    });
  }

  // Legacy Christmas URLs - Santa/Julemand redirects
  // Map all variations to current pages
  const christmasRedirects: Record<string, string> = {
    // DA: Santa/Julemand variants - all redirect to the current page at /da/services/santa
    '/da/julemand': '/da/services/santa',
    '/da/services/julemand': '/da/services/santa',
    '/da/santa': '/da/services/santa',
    '/da/services/santa-show': '/da/services/santa',
    '/da/santa-show': '/da/services/santa',
    '/da/services/christmas-show': '/da/services/santa',
    '/da/christmas-show': '/da/services/santa',
    '/da/services/christmas-entertainment': '/da/services/santa',
    '/da/christmas-entertainment': '/da/services/santa',
    
    // EN: Santa/Julemand variants
    '/en/julemand': '/en/services/santa',
    '/en/services/julemand': '/en/services/santa',
    '/en/santa': '/en/services/santa',
    '/en/services/santa-show': '/en/services/santa',
    '/en/santa-show': '/en/services/santa',
    '/en/services/christmas-show': '/en/services/santa',
    '/en/christmas-show': '/en/services/santa',
    '/en/services/christmas-entertainment': '/en/services/santa',
    '/en/christmas-entertainment': '/en/services/santa',
    
    // Root level (no locale prefix) - default to DA
    '/julemand': '/da/services/santa',
    '/santa': '/da/services/santa',
    '/juleshow': '/da/julefrokost',
    '/juletraesfest': '/da/julefrokost',
    
    // DA: Christmas Party variants
    '/da/juleshow': '/da/julefrokost',
    '/da/juletraesfest': '/da/julefrokost',
    
    // EN: Christmas Party variants
    '/en/juleshow': '/en/christmas-party',
    '/en/juletraesfest': '/en/christmas-party',
  };

  // Service URL redirects - Old/wrong service slugs to correct current routes
  const serviceRedirects: Record<string, string> = {
    // DA: Children's Magic - old/wrong slugs
    '/da/services/childrens': '/da/services/boernetrylleri',
    '/da/mere-trylleri': '/da/services/boernetrylleri',
    '/da/services/mere-trylleri': '/da/services/boernetrylleri',
    
    // EN: Children's Magic - old/wrong slugs  
    '/en/services/boernetrylleri': '/en/services/childrens',
    '/en/mere-trylleri': '/en/services/childrens',
    '/en/services/mere-trylleri': '/en/services/childrens',
    
    // DA: Birthday Parties - old/wrong slugs
    '/da/services/birthday-parties': '/da/services/boernefoedselsdag',
    
    // EN: Birthday Parties - old/wrong slugs
    '/en/services/boernefoedselsdag': '/en/services/birthday-parties',
    
    // DA: Close-up Magic - old/wrong slugs
    '/da/services/closeup': '/da/services/naermagi',
    '/da/close-up-magi': '/da/services/naermagi',
    '/da/services/close-up-magi': '/da/services/naermagi',
    
    // EN: Close-up Magic - old/wrong slugs
    '/en/services/naermagi': '/en/services/closeup',
    '/en/close-up-magi': '/en/services/closeup',
    '/en/services/close-up-magi': '/en/services/closeup',
  };

  // Check if current path matches any Christmas redirect
  if (christmasRedirects[pathname]) {
    return NextResponse.redirect(new URL(christmasRedirects[pathname], request.url), {
      status: 301, // Permanent redirect for SEO
    });
  }

  // Check if current path matches any service redirect
  if (serviceRedirects[pathname]) {
    return NextResponse.redirect(new URL(serviceRedirects[pathname], request.url), {
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

