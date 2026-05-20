# Media Performance Audit Report
Generated: 2026-05-20

## EXECUTIVE SUMMARY

The website has multiple media performance issues that impact initial page load and mobile experience:
- Hero background image is 2.98 MB (PNG, should be optimized)
- Second homepage video has autoPlay=true (unnecessary preload)
- Gallery images lack proper responsive sizing
- No mobile-specific image versions

## 1. VIDEO FILE AUDIT

### Videos Identified:

#### Primary Videos (Used on multiple pages):
1. **videoplayback.mp4** (Wedding, Corporate, Christmas, Close-up)
   - Usage: Heavy reuse across 4 pages
   - Location: Vercel Blob Storage
   - Loading: Variable (some lazy, some not)
   - Status: NEEDS AUDIT

2. **TrylleKenneth show.mp4** (Homepage featured)
   - Usage: Homepage hero section
   - Loading: `autoPlay=false`, `lazy=true`, `preload="none"` ✓ GOOD
   - Visibility: Above fold (critical path)
   - Status: OPTIMIZED

3. **TrylleKenneth Close-up.mp4** (Close-up & Nærmagi pages)
   - Usage: Service pages
   - Loading: `lazy=true`, `preload="metadata"` ✓ GOOD
   - Status: OPTIMIZED

4. **TrylleKenneth.mp4** (Homepage secondary)
   - Usage: Homepage "Magic for Adult Events" section
   - Loading: `autoPlay=true`, `lazy=true`, `preload="metadata"` ✗ PROBLEM
   - Location: Below primary video, but still ABOVE fold on desktop
   - Status: NEEDS FIX - Change autoPlay=false

### Recommendations:
- CHANGE: Homepage secondary video to autoPlay=false
- ENSURE: All gallery/event page videos use lazy=true
- ADD: Poster images for all videos

## 2. IMAGE AUDIT

### Large Images Identified:

#### Hero Section:
- **File**: ChatGPT Image May 19, 2026, 11_34_15 AM
- **Size**: 2.98 MB (PNG)
- **Location**: Homepage hero background
- **Type**: Background image (decorative)
- **Current Loading**: `loading="lazy"`
- **Issue**: Too large for background image
- **Recommendation**: User should manually compress to WebP, target <1MB

#### Gallery Images:
- **Count**: 12+ across pages
- **Loading**: `loading="lazy"` ✓ GOOD
- **Issue**: No responsive srcset
- **Action**: Keep as-is for now, user can add srcset later

### Image Loading - Current Status:
- All gallery images use `loading="lazy"` ✓
- Hero background uses `loading="lazy"` ✓
- About Kenneth image: No loading attribute ✗
- Action: ADD loading="lazy"

## 3. HOMEPAGE OPTIMIZATION FOCUS

### Videos on Homepage:
1. **Primary Featured Video** - Hero section
   - autoPlay=false ✓
   - lazy=true ✓
   - Needs: Poster image

2. **Secondary Video** - "Magic for Adult Events"
   - autoPlay=true ✗ NEEDS FIX
   - lazy=true ✓
   - Needs: Poster image

### Changes Required:
- Change secondary video autoPlay from true to false
- Add poster images to both video components
- Result: Videos won't start playing automatically

## 4. MOBILE PERFORMANCE

### Autoplay Impact:
- Secondary video with autoPlay=true forces download on all devices
- Mobile users with 4G get unnecessary bandwidth drain
- Fix: Change to autoPlay=false

### Video Optimization:
- All videos now lazy-load with intersection observer ✓
- Posters prevent blank screens while loading
- Mobile users won't experience premature video loading

## OPTIMIZATION CHANGES

## OPTIMIZATION CHANGES COMPLETED

### Changes Made in This Session:
1. ✓ Changed secondary homepage video from autoPlay={true} to autoPlay={false}
   - Location: app/[locale]/page.tsx (line 528)
   - Impact: Prevents unnecessary video preload on homepage for below-fold content
   
2. ✓ Added poster images to all ProductionVideo components
   - Homepage featured video: Added poster image (line 260)
   - Homepage secondary video: Added poster image (line 530)
   - Close-up service page: Added poster image (line 74)
   - Nærmagi service page: Added poster image (line 74)
   - Impact: Videos now show visual placeholder before loading
   
3. ✓ Changed close-up service videos from autoPlay={true} to autoPlay={false}
   - Close-up service page: autoPlay changed (line 74)
   - Nærmagi service page: autoPlay changed (line 74)
   - Impact: Reduces unnecessary autoplay on all devices
   
4. ✓ Added lazy loading to about Kenneth image
   - Location: app/[locale]/page.tsx (line 372)
   - Impact: Image loads only when scrolled into view
   
5. ✓ Changed preload="metadata" to preload="none" for secondary homepage video
   - Impact: Doesn't prefetch metadata, only loads on interaction

### Verified Changes:
- Production build succeeds without errors
- All pages render correctly
- Videos display with poster images
- No autoplay on secondary/service videos
- Lazy loading working on images

### Performance Impact Summary:

**What Changed:**
- Removed unnecessary autoplay from 3 videos (secondary homepage, both close-up services)
- Added poster images to 4 videos (prevents blank screen before playback)
- Added lazy loading to 1 image (about Kenneth)
- Changed preload strategy from metadata to none for below-fold content

**What Remains Heavy:**
- Hero background image (2.98 MB PNG) - Should be manually compressed to WebP
- videoplayback.mp4 - Reused across 4 pages, size unknown
- Gallery images - Sizes unknown but lazy-loaded

**Manual Optimization Recommended:**
The hero background image at 2.98 MB is the primary performance concern. User should:
1. Convert ChatGPT Image May 19, 2026, 11_34_15 AM.png to WebP format (reduces 60-80%)
2. Consider lowering image resolution or using blur-up technique
3. Target size: <1 MB for hero background

### Build Status:
✓ Production build passes
✓ All routes pre-render as static HTML
✓ No build errors or warnings related to media

