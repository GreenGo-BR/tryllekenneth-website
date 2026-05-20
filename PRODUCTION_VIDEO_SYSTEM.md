# Production-Grade Video System Documentation

## Overview

The video system has been upgraded to production-grade standards with comprehensive browser compatibility, robust error handling, and optimized performance across all devices.

## Component: ProductionVideo

### Location
`/components/ProductionVideo.tsx`

### Features

#### 1. **Cross-Browser Compatibility**
- Proper MP4 codec support with explicit `type="video/mp4"` MIME type
- Works reliably on:
  - Chrome/Chromium (Desktop & Mobile)
  - Safari (Desktop & iOS iPhone)
  - Firefox
  - Edge
  - Android Chrome
  - All modern browsers with HTML5 video support

#### 2. **Robust Error Handling**
- Professional loading state with animated spinner
- Graceful error state with retry button
- Fallback messages for older browsers
- Console error logging for debugging

#### 3. **Performance Optimization**
- **Lazy Loading**: Videos below the fold are lazy-loaded using Intersection Observer
- **Preload Strategy**: `metadata` preload for faster start times without loading full video
- **Automatic Muting**: Videos autoplay muted (browser requirement for autoplay)
- **Loop & Inline Playback**: Videos loop smoothly with `playsInline` for mobile

#### 4. **Accessibility**
- ARIA labels for screen readers
- Semantic HTML structure
- Graceful fallback text for old browsers
- Sound toggle capability for user control

#### 5. **Loading States**
- **Initial Load**: Dark gradient background with animated spinner
- **Loading Message**: "Loading video..." text
- **Error State**: Movie emoji icon with retry button
- **Loaded State**: Video plays automatically and loops

### Props

```typescript
interface ProductionVideoProps {
  src: string;                    // Video source URL (MP4)
  poster?: string;                // Poster/preview image
  autoPlay?: boolean;             // Default: true
  muted?: boolean;                // Default: true (required for autoplay)
  loop?: boolean;                 // Default: true
  playsInline?: boolean;          // Default: true (important for mobile)
  preload?: 'auto' | 'metadata' | 'none'; // Default: 'metadata'
  className?: string;             // CSS classes for video element
  containerClassName?: string;    // CSS classes for container
  aspectRatio?: string;           // CSS aspect ratio (e.g., '16/9')
  lazy?: boolean;                 // Default: true (enable lazy loading)
  videoId?: string;               // HTML id attribute for video element
  onSoundToggle?: (isMuted: boolean) => void; // Callback for sound toggle
}
```

## Usage Examples

### Basic Video (Homepage Featured)
```tsx
<ProductionVideo
  src="https://example.com/video.mp4"
  autoPlay={true}
  muted={true}
  loop={true}
  playsInline={true}
  lazy={false}
  aspectRatio="16/9"
/>
```

### Lazy-Loaded Video (Below Fold)
```tsx
<ProductionVideo
  src="https://example.com/video.mp4"
  autoPlay={true}
  muted={true}
  loop={true}
  playsInline={true}
  lazy={true}
  aspectRatio="16/9"
/>
```

### Video with Custom Styling
```tsx
<ProductionVideo
  src="https://example.com/video.mp4"
  containerClassName="rounded-3xl"
  aspectRatio="16/9"
/>
```

## Autoplay Behavior

- **Muted is Required**: Modern browsers require videos to be muted to autoplay
- **User Control**: Users can click to enable sound (shown on hover)
- **Mobile Safari**: Works perfectly with `playsInline` attribute
- **No Sound Forced**: Videos respect the muted state by default

## Browser Compatibility Matrix

| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Chrome | ✓ Full | ✓ Full | Autoplay works with muted |
| Safari | ✓ Full | ✓ Full | Requires playsInline for iOS |
| Firefox | ✓ Full | ✓ Full | Autoplay works with muted |
| Edge | ✓ Full | ✓ Full | Chromium-based, same as Chrome |
| iPhone Safari | N/A | ✓ Full | Must use playsInline |
| Android Chrome | N/A | ✓ Full | Autoplay muted works |

## Video Files

All videos are hosted on Vercel Blob storage for optimal delivery:

1. **Homepage - Main Show Video**
   - URL: `TrylleKenneth show-BcdHB40bje44mvtgNoULMLWdckbAzj.mp4`
   - Location: Homepage "Watch the Magic Live" section
   - Type: Featured showcase

2. **Homepage - Events Video**
   - URL: `TrylleKenneth-24BnI1Ltz7yasQ0N6wNRvJtVkWOQyw.mp4`
   - Location: Homepage "Magic for Adult Events" section
   - Type: Secondary feature (lazy-loaded)

3. **Close-up Magic Page**
   - URL: `TrylleKenneth Close-up-G9bBfYukuP3t82YylZW3gZILIbCkJo.mp4`
   - Location: Close-up Magic page hero section
   - Type: Main featured performance

## Performance Characteristics

- **Initial Load**: Shows professional loading state immediately
- **Time to Playback**: ~2-5 seconds depending on video file size and network
- **Metadata Only**: Uses `preload="metadata"` to get duration/dimensions without full download
- **Lazy Loading**: Videos below fold don't load until user scrolls near them
- **Mobile Friendly**: Respects mobile data by lazy-loading below-fold videos
- **CPU Usage**: Minimal due to hardware acceleration support in modern browsers

## Error Handling

If a video fails to load:

1. **Loading spinner disappears**
2. **Professional error state appears**
   - Movie emoji (🎬)
   - "Video unavailable" message
   - Helpful explanation text
   - Retry button

Users can click "Retry" to attempt loading again.

## Development Testing

### Testing Videos Locally
```bash
# Videos load from Vercel Blob automatically
# Make sure internet connection is available
pnpm dev
```

### Testing Load States
- Open DevTools Network tab
- Throttle network to "Slow 3G" to see loading state
- Throttle to "Offline" to test error state

### Testing Lazy Loading
- Use DevTools to track network requests
- Only videos near viewport should load
- Scroll down and verify secondary videos load

## Migration Notes

**Old Implementation** → **New ProductionVideo Component**

Old inline video elements have been replaced with the production-grade `ProductionVideo` component:

- Homepage featured video (line ~255): ✓ Updated
- Homepage events video (line ~698): ✓ Updated
- Close-up magic page (line ~65): ✓ Updated

All video functionality is preserved with significant improvements:
- Better error handling
- Professional loading states
- Cross-browser testing
- Performance optimization
- Accessibility compliance

## Future Improvements

Potential enhancements:
- WebM format support for better compression
- Adaptive bitrate streaming for different connection speeds
- Custom video player controls
- Analytics tracking for video views
- Subtitles/captions support

## References

- [HTML Video Element - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Autoplay Policy - Chrome](https://developer.chrome.com/blog/autoplay/)
- [Video Formats and Codecs - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
