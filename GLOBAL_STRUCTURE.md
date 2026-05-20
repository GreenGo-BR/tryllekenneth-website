# TrylleKenneth Website - Global Structure System

## Overview
This document defines the strict global structure system for the entire TrylleKenneth website to avoid design inconsistencies and language confusion.

## Language Rules

### Absolute Rule:
- `/da` = 100% Danish only
- `/en` = 100% English only
- **NEVER** mix languages within a single page
- Both versions must have **identical layout and structure**
- Only **text** changes between languages, not layout or design

### Translation File Structure
- `/messages/da.json` - Contains ALL Danish text
- `/messages/en.json` - Contains ALL English text
- Structure matches exactly between both files
- All UI text comes from translation files (never hardcoded)

## Section Order (FIXED for Both Languages)

All pages follow this exact order:
1. **Header** (sticky, transparent, with language switcher)
2. **Hero** - Large colorful section with main message and CTAs
3. **Services** - 4 service cards (must always be these 4)
4. **About Kenneth** - Professional introduction with features
5. **Gallery** - Photo showcase and customer reviews (on home page or separate page)
6. **FAQ** - Frequently asked questions
7. **CTA Banner** - Call-to-action section
8. **Footer** - Contact info and links

## Services (MUST ALWAYS BE THESE 4)

These services appear on every page in this exact order:
1. **Børnetrylleri / Children's Magic**
2. **Stand-up Trylleri / Stand-up Magic**
3. **Nærmagi / Close-up Magic**
4. **Julemand / Santa Claus**

## Design System

### Colors (Primary Palette)
- **Primary**: Purple (for main CTAs and highlights)
- **Accent**: Red (for secondary highlights)
- **Secondary**: Yellow (for call-outs and backgrounds)
- **Background**: White and soft gradients only
- **Never use**: Black sections, dark luxury styling, or overly complex gradients

### Typography
- **Maximum 2 font families** (currently using Geist Sans and Geist Mono)
- **Heading Font**: Geist Sans (all weights)
- **Body Font**: Geist Sans
- **Line Height**: 1.4-1.6 for body text
- **Minimum Font Size**: 14px for all text

### Borders & Radius
- **Button Radius**: `rounded-2xl`
- **Card Radius**: `rounded-2xl`
- **All Elements**: Use consistent `rounded-2xl` or `rounded-xl`

### Spacing System
- **Section Padding**: `py-20 px-4 sm:px-6 lg:px-8` (consistent on all sections)
- **Gap Between Cards**: `gap-6`
- **Large Gap**: `gap-12`
- **Container Max Width**: `max-w-7xl mx-auto`
- **Vertical Spacing**: Minimal, avoid unnecessary extra space

### Button Styles (Global)
Every button site-wide uses one of these styles:
1. **Primary Button**: Gradient (primary → accent) with hover opacity
2. **Secondary Button**: Yellow border with secondary background on hover
3. **Outline Button**: Border-only style with hover effects

All buttons:
- Size: `h-14 px-8` (large, consistent)
- Font: `text-base font-semibold`
- Hover: Smooth `opacity-90` or background transitions

### Card Styles (Global)
All cards follow this pattern:
- **Radius**: `rounded-2xl`
- **Border**: `border-2` with color-specific opacity (e.g., `border-primary/20`)
- **Background**: `bg-gradient-to-br from-[color]/5 to-transparent`
- **Hover**: `hover:border-[color]/50 hover:shadow-lg` with color-specific shadow
- **Transition**: `transition-all` for smooth effects

### Icons
- **Size**: Consistent `size-24` or `size-20`
- **Style**: Lucide React icons only
- **Color**: Match section color scheme
- **Placement**: Inside colored circular backgrounds

## Layout Rules

### Mobile-First Approach
- Design mobile layout first
- Use responsive prefixes: `md:` for tablets, `lg:` for desktop
- Grid/Flex stacking: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

### Section Width
- All sections use: `max-w-7xl mx-auto`
- Never make full-width sections
- Consistent padding across all sections

### Hover Animations (Global)
- Smooth transitions: `transition-all duration-300`
- Scale effect: `hover:scale-105` (optional, for cards)
- Opacity: `hover:opacity-90` (for buttons)
- No jarring effects or excessive animations

## Component Patterns

### Hero Section
✓ Background gradient (soft colors only)
✓ Centered content with text-balance
✓ Animated elements (stars, floating effects)
✓ Multiple CTA buttons (never single button)
✓ Hero title uses: `text-6xl lg:text-7xl font-bold` with gradient text

### Service Cards
✓ Icon in circular colored background
✓ Title + description
✓ "Read more" or "Learn more" link
✓ Colored border matching theme
✓ Hover effect on entire card

### Feature List
✓ Icon + text pairs (e.g., CheckCircle + feature)
✓ Vertical layout (flex column)
✓ Consistent spacing between items

### CTA Banner
✓ Colorful gradient background
✓ Large title + subtitle
✓ Primary button + secondary button
✓ Centered layout

### Footer
✓ Four-column grid (Services, Info, Contact, Branding)
✓ All content is translatable
✓ Always includes: "Made by ESL Marketing — https://www.eslmarketing.com/"
✓ Contact info always visible

## Code Organization

### File Structure
```
/app/[locale]/
  /page.tsx          # Home page (Hero, Services, About, CTA, Footer)
  /gallery/page.tsx  # Gallery + Reviews section
  /faq/page.tsx      # FAQ page
  /contact/page.tsx  # Contact form page
  /services/
    /childrens/page.tsx
    /standup/page.tsx
    /closeup/page.tsx
    /santa/page.tsx

/components/
  Header.tsx         # Sticky header with language switcher
  Footer.tsx         # Global footer
  MagicalEffects.tsx # Animation effects (optional)

/messages/
  da.json           # Danish translations
  en.json           # English translations

/lib/
  design-system.ts  # Design system constants
```

### Component Guidelines
- **Reusable components** for recurring patterns
- **No duplicate sections** across pages
- **Clean, modular code**
- **Translation-first**: All text comes from i18n system
- **Locale-aware links**: Use `/${locale}/path` pattern

## Image & Media Placeholders

All image sections should have:
- Gradient colored background with brand colors
- Icon placeholder (e.g., Star, Camera)
- Text: "[Image type]" and "To be added"
- Prepared for future image/video replacement

Example:
```tsx
<div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 aspect-square flex items-center justify-center">
  <div className="text-center">
    <Star className="w-16 h-16 text-primary/40 mx-auto mb-4" />
    <p className="text-muted-foreground text-sm">Photo of Kenneth</p>
  </div>
</div>
```

## Performance & Loading

- Optimize for fast loading
- No unnecessary animations that slow down page
- Use proper image optimization when images are added
- Lazy load gallery images
- Minimize bundle size by using only required icons

## Quality Checklist

Before any deployment:
- [ ] Both `/en` and `/da` versions look identical in layout
- [ ] All text on `/da` is 100% Danish (no English)
- [ ] All text on `/en` is 100% English (no Danish)
- [ ] All buttons use global button styles
- [ ] All cards use global card styles
- [ ] All spacing follows `py-20 px-4 sm:px-6 lg:px-8` pattern
- [ ] All sections follow the fixed order
- [ ] No hardcoded text (all from translation files)
- [ ] All internal links use `/${locale}/path` pattern
- [ ] Mobile responsive (test on 375px, 768px, 1440px)
- [ ] Hover effects smooth and consistent
- [ ] Footer shows on every page

## Future Enhancement

When updating/modifying pages:
1. **Modify existing sections** instead of recreating
2. **Keep code modular** and reusable
3. **Update both languages** simultaneously
4. **Follow design system** without exceptions
5. **Test both language versions** before deployment
