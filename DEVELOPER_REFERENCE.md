# Quick Developer Reference - TrylleKenneth Website

## Key Rules (Must Follow)

### Language Separation
```
/da ← 100% Danish only
/en ← 100% English only
```

### Never Do This
- ❌ Mix English text in Danish pages
- ❌ Hardcode text (use `t('key')` instead)
- ❌ Create new button styles (use existing ones)
- ❌ Add custom spacing (use `py-20 px-4 sm:px-6 lg:px-8`)
- ❌ Redesign cards (use existing card pattern)
- ❌ Skip translations (always update both da.json and en.json)
- ❌ Break section order (Hero → Services → About → Gallery → FAQ → CTA → Footer)

### Always Do This
- ✓ Update translations when adding text
- ✓ Use `/${locale}/path` for internal links
- ✓ Test both `/da` and `/en` versions
- ✓ Use `t('namespace.key')` for all text
- ✓ Follow global button/card styles
- ✓ Keep layout identical between languages
- ✓ Use responsive prefixes: `md:` and `lg:`

## Quick Edits Checklist

### Adding New Text
1. Add to `/messages/da.json` (Danish)
2. Add to `/messages/en.json` (English)
3. Use in component: `const t = useTranslations(); t('key')`

### Adding New Button
```tsx
<Link href={`/${locale}/path`}>
  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-base font-semibold h-14 px-8">
    {t('button.text')}
  </Button>
</Link>
```

### Adding New Card
```tsx
<Card className="group rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
  <div className="p-6">
    {/* Content here */}
  </div>
</Card>
```

### Adding New Section
```tsx
<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
    {t('section.title')}
  </h2>
  {/* Content */}
</section>
```

## Color Quick Reference

| Name | Tailwind Class | Usage |
|------|---|---|
| Primary | `primary` | Main CTA buttons, highlights |
| Accent | `accent` | Secondary highlights |
| Secondary | `secondary` | Call-outs, backgrounds |
| Background | `background` | Page background |
| Foreground | `foreground` | Text color |

## Spacing Quick Reference

| Use Case | Classes |
|---|---|
| Section | `py-20 px-4 sm:px-6 lg:px-8` |
| Container | `max-w-7xl mx-auto` |
| Gap (cards) | `gap-6` |
| Gap (large) | `gap-12` |
| Button | `h-14 px-8` |

## File Locations

```
Translation Keys       → /messages/da.json, /messages/en.json
Design Constants       → /lib/design-system.ts
Global Structure       → /GLOBAL_STRUCTURE.md (THIS FILE)
Home Page             → /app/[locale]/page.tsx
Header/Footer         → /components/Header.tsx, /components/Footer.tsx
```

## Common Tasks

### Update a Service Card
1. Edit `/app/[locale]/page.tsx` - Services section
2. No translation changes needed (services are fixed)

### Change Button Text
1. Edit `/messages/da.json` - Update Danish button text
2. Edit `/messages/en.json` - Update English button text
3. Use in component: `{t('cta.button')}`

### Add New Page
1. Create `/app/[locale]/newpage/page.tsx`
2. Add translations to both JSON files
3. Add link in Header or Footer with: `/{locale}/newpage`

### Fix Language Issue
1. Check `/messages/da.json` - Is there Danish text with English mixed in?
2. Check `/messages/en.json` - Is there English text with Danish mixed in?
3. Check component - Is text hardcoded instead of using `t()`?

## Testing Before Deployment

```bash
# Build
pnpm build

# Check for errors
pnpm build 2>&1 | grep error

# Test locally
pnpm dev

# Visit both versions
http://localhost:3000/en
http://localhost:3000/da
```

## Section Template

Every page section follows this pattern:

```tsx
{/* [Section Name] Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
    {t('section.title')}
  </h2>
  <p className="text-center text-muted-foreground mb-12 text-lg">
    {t('section.subtitle')}
  </p>
  
  {/* Content grid/cards here */}
</section>
```

## Service Order (NEVER CHANGE)

These 4 services always appear in this exact order:
1. Børnetrylleri / Children's Magic
2. Stand-up Trylleri / Stand-up Magic
3. Nærmagi / Close-up Magic
4. Julemand / Santa Claus

## Page Structure (NEVER CHANGE)

Every page has:
1. Header (sticky, transparent)
2. Hero section
3. Services section
4. About Kenneth section (or other content)
5. Gallery/Reviews/FAQ (as appropriate)
6. CTA Banner
7. Footer

## Translation Namespace Structure

```json
{
  "navigation": { /* Header links */ },
  "hero": { /* Hero section */ },
  "about": { /* About Kenneth */ },
  "services": { /* Service cards */ },
  "footer": { /* Footer */ },
  "contact": { /* Contact form */ },
  "gallery": { /* Gallery page */ },
  "faq": { /* FAQ page */ }
}
```

## Link Examples

```tsx
// Home page link
<Link href={`/${locale}`}>Home</Link>

// Service page link
<Link href={`/${locale}/services/childrens`}>Children's Magic</Link>

// Internal page link
<Link href={`/${locale}/gallery`}>Gallery</Link>

// Phone link (no locale needed)
<a href="tel:+4540852728">Call Kenneth</a>

// Email link (no locale needed)
<a href="mailto:kenneth@tryllekenneth.dk">Email</a>
```

## Critical: Language Switcher

The header shows language options:
- English version `/en` → shows "DA" button to switch to `/da`
- Danish version `/da` → shows "EN" button to switch to `/en`

Both should show the same layout with different text.

---

**Last Updated**: May 18, 2026
**Maintained By**: Development Team
**Status**: Active - Follow these rules for all future changes
