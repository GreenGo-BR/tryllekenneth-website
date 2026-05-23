# ROUTING STRUCTURE - LOCKED BASELINE

**Status**: FROZEN - NO URL/ROUTING CHANGES
**Date**: 2026-05-23
**Version**: Stable v1.0

## Locked URL Structure

### English Service URLs (FROZEN)
```
/en/services/closeup
/en/services/childrens
/en/corporate-events
/en/weddings
/en/christmas-party
```

### Danish Service URLs (FROZEN)
```
/da/services/naermagi
/da/services/boernetrylleri
/da/firmaarrangementer
/da/bryllupper
/da/julefrokost
```

## Routing Restrictions

### PROHIBITED Changes
- ❌ Creating new English slugs (e.g., close-up-magic, childrens-magic)
- ❌ Adding redirect experiments to middleware
- ❌ Modifying middleware routing (except critical bug fixes)
- ❌ Renaming service page folders
- ❌ Replacing or moving working service pages
- ❌ Changing URL paths or prefixes
- ❌ Creating slug aliases or alternate routes

### ALLOWED Changes
- ✓ Text content updates
- ✓ Image replacements
- ✓ Design polish and styling
- ✓ SEO metadata and schema.org improvements
- ✓ Performance optimizations
- ✓ Language translation updates
- ✓ UI/UX enhancements
- ✓ Component refactoring (without URL changes)
- ✓ Accessibility improvements

## Middleware Configuration (LOCKED)

### Current Behavior
- Language prefix: ALWAYS (`/en/` or `/da/`)
- Default locale: Danish (`da`)
- Locales supported: English (`en`), Danish (`da`)
- Geo-detection: Enabled
- Language cookie: Supported
- No URL rewrites or redirects for service pages

## Service Page Files (LOCKED)

### English Pages
| Route | File | Status |
|-------|------|--------|
| /en/services/closeup | app/[locale]/services/closeup/page.tsx | ✓ STABLE |
| /en/services/childrens | app/[locale]/services/childrens/page.tsx | ✓ STABLE |
| /en/corporate-events | app/[locale]/corporate-events/page.tsx | ✓ STABLE |
| /en/weddings | app/[locale]/weddings/page.tsx | ✓ STABLE |
| /en/christmas-party | app/[locale]/christmas-party/page.tsx | ✓ STABLE |

### Danish Pages
| Route | File | Status |
|-------|------|--------|
| /da/services/naermagi | app/[locale]/services/naermagi/page.tsx | ✓ STABLE |
| /da/services/boernetrylleri | app/[locale]/services/boernetrylleri/page.tsx | ✓ STABLE |
| /da/firmaarrangementer | app/[locale]/firmaarrangementer/page.tsx | ✓ STABLE |
| /da/bryllupper | app/[locale]/bryllupper/page.tsx | ✓ STABLE |
| /da/julefrokost | app/[locale]/julefrokost/page.tsx | ✓ STABLE |

## Critical Files - DO NOT MODIFY
- `middleware.ts` - Language routing (freeze except critical bugs)
- Service page folder structure
- Route segments and naming

## Testing Checklist

Before any deployment, verify:
- [ ] All 5 English URLs return 200 OK
- [ ] All 5 Danish URLs return 200 OK
- [ ] Language switcher works (DA/EN buttons)
- [ ] Geo-detection functions properly
- [ ] No redirect loops
- [ ] Build completes without errors
- [ ] No TypeScript warnings

## Approved Testing URLs

```bash
# English Service Pages
http://localhost:3000/en/services/closeup
http://localhost:3000/en/services/childrens
http://localhost:3000/en/corporate-events
http://localhost:3000/en/weddings
http://localhost:3000/en/christmas-party

# Danish Service Pages
http://localhost:3000/da/services/naermagi
http://localhost:3000/da/services/boernetrylleri
http://localhost:3000/da/firmaarrangementer
http://localhost:3000/da/bryllupper
http://localhost:3000/da/julefrokost
```

## Future Development Guidelines

1. **Text Changes**: Update content directly in page files
2. **Image Changes**: Replace image files, keep paths
3. **Design Updates**: Modify component styling, keep structure
4. **SEO Updates**: Modify metadata and schema.org, keep URLs
5. **Performance**: Optimize components and assets, keep routing

## Request Process for URL Changes

If URL changes are absolutely necessary:
1. Create a formal change request document
2. List business justification
3. Detail redirect strategy (301 redirects)
4. Include SEO impact analysis
5. Plan for analytics tracking
6. Get stakeholder approval
7. Test redirects thoroughly
8. Monitor for 30 days post-deployment

## Commitment

This routing structure is now the stable baseline. All development must work within these constraints. Future versions should maintain backward compatibility with these URLs.

**ROUTING FROZEN** as of 2026-05-23
**Next Review**: Before any major version release
