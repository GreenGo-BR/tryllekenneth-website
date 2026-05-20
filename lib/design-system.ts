/**
 * TrylleKenneth Global Design System
 * 
 * STRICT RULES:
 * - /da = 100% Danish only
 * - /en = 100% English only
 * - Never mix languages
 * - Identical layout structure across both languages
 * - Only text changes between versions
 */

// Color Palette
export const colors = {
  primary: 'primary', // Purple
  accent: 'accent', // Red
  secondary: 'secondary', // Yellow
  background: 'background', // White & soft gradients
  foreground: 'foreground', // Dark text
  card: 'card', // White cards
  muted: 'muted-foreground',
  borders: {
    light: 'border/30',
    medium: 'border/50',
    dark: 'border',
  },
} as const;

// Typography Scale
export const typography = {
  h1: 'text-6xl lg:text-7xl font-bold',
  h2: 'text-4xl font-bold',
  h3: 'text-xl font-bold',
  body: 'text-base',
  small: 'text-sm',
  leading: 'leading-relaxed',
} as const;

// Border Radius
export const radius = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
} as const;

// Spacing System
export const spacing = {
  section: 'py-20 px-4 sm:px-6 lg:px-8',
  container: 'max-w-7xl mx-auto',
  gap: 'gap-6',
  gapLarge: 'gap-12',
} as const;

// Button Styles
export const buttonStyles = {
  primary:
    'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-base font-semibold h-14 px-8',
  secondary:
    'text-base font-semibold h-14 px-8 border-2 border-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground',
  outline: 'text-base font-semibold h-14 px-8 border-2',
} as const;

// Card Styles
export const cardStyles = {
  base: 'rounded-2xl overflow-hidden border-2 transition-all duration-300',
  hoverEffect:
    'hover:shadow-lg hover:scale-105 cursor-pointer',
  gradient:
    'bg-gradient-to-br from-transparent to-transparent',
} as const;

// Section Structure
export const sections = [
  'Hero',
  'Services',
  'About Kenneth',
  'Gallery',
  'Reviews',
  'FAQ',
  'CTA Banner',
  'Footer',
] as const;

// Service Types (Must be same across both languages)
export const services = [
  'Børnetrylleri / Children\'s Magic',
  'Stand-up Trylleri / Stand-up Magic',
  'Nærmagi / Close-up Magic',
  'Julemand / Santa Claus',
] as const;

// Layout Rules
export const layoutRules = {
  // Mobile-first: Use responsive prefixes
  // md: for tablets and above
  // lg: for desktops and above
  breakpoints: {
    mobile: 'default',
    tablet: 'md:',
    desktop: 'lg:',
  },
  // All sections should follow: container > row/grid > content
  // All sections should use consistent padding/margins
  // Avoid oversized sections
  // Keep vertical spacing minimal and consistent
} as const;

// Component Patterns
export const patterns = {
  // Hero sections always have: background gradient, centered content, animated elements, CTAs
  // Service cards always have: icon, title, description, link
  // All buttons should use consistent hover states
  // All icons should be same size (24px or 20px)
  // All borders should use primary/accent/secondary with opacity
  // All spacing should use multiples of 4px
} as const;
