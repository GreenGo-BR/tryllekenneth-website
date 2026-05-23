/**
 * Route Mapping System
 * Maps English routes to their Danish equivalents and vice versa
 * Used by language switcher to preserve user context when changing languages
 */

type RouteMapping = {
  en: string;
  da: string;
};

// Define all equivalent routes across languages
const routeMappings: RouteMapping[] = [
  // Home
  { en: '/', da: '/' },
  
  // Services
  { en: '/services/close-up-magic', da: '/services/naermagi' },
  { en: '/services/childrens-magic', da: '/services/boernetrylleri' },
  { en: '/services/standup', da: '/services/standup' },
  { en: '/services/santa', da: '/services/julemand' },
  
  // Events
  { en: '/weddings', da: '/bryllupper' },
  { en: '/corporate-events', da: '/firmaarrangementer' },
  { en: '/christmas-party', da: '/julefrokost' },
  
  // Other pages
  { en: '/gallery', da: '/galleri' },
  { en: '/faq', da: '/faq' },
  { en: '/contact', da: '/kontakt' },
];

/**
 * Get the equivalent route in a different language
 * @param currentRoute - The current route path (without locale prefix)
 * @param fromLocale - Current language ('en' or 'da')
 * @param toLocale - Target language ('en' or 'da')
 * @returns The equivalent route in the target language, or the home route if not found
 */
export function getEquivalentRoute(
  currentRoute: string,
  fromLocale: 'en' | 'da',
  toLocale: 'en' | 'da'
): string {
  // If same locale, return the current route
  if (fromLocale === toLocale) {
    return currentRoute;
  }

  // Normalize route (remove trailing slashes except for root)
  const normalizedRoute = currentRoute === '/' ? '/' : currentRoute.replace(/\/$/, '');

  // Find the mapping
  const mapping = routeMappings.find((m) => {
    if (fromLocale === 'en' && m.en === normalizedRoute) return true;
    if (fromLocale === 'da' && m.da === normalizedRoute) return true;
    return false;
  });

  if (!mapping) {
    // No mapping found, return home route
    return '/';
  }

  // Return the equivalent route in the target language
  return toLocale === 'en' ? mapping.en : mapping.da;
}

/**
 * Get all available routes for a language
 * @param locale - Language ('en' or 'da')
 * @returns Array of all routes in the specified language
 */
export function getRoutesForLocale(locale: 'en' | 'da'): string[] {
  return routeMappings.map((m) => (locale === 'en' ? m.en : m.da));
}

/**
 * Check if a route exists for a specific language
 * @param route - The route path
 * @param locale - Language ('en' or 'da')
 * @returns True if the route exists in the specified language
 */
export function isValidRoute(route: string, locale: 'en' | 'da'): boolean {
  const normalizedRoute = route === '/' ? '/' : route.replace(/\/$/, '');
  return getRoutesForLocale(locale).some(
    (r) => (r === '/' ? '/' : r.replace(/\/$/, '')) === normalizedRoute
  );
}

