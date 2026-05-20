# Magic Effects System - TrylleKenneth

This guide documents the premium magical effects system implemented across the TrylleKenneth website. All effects are built with performance and elegance in mind, using CSS animations and minimal JavaScript.

## Overview

The Magic Effects System creates subtle, memorable interactive moments that feel premium, modern, and playful while maintaining a professional Scandinavian aesthetic.

---

## 1. Card Hover Magic

**Class:** `.magic-card-hover`

**Effect:** Service cards display a soft glow and float upward when hovered.

**Components:**
- Soft purple glow animation
- Smooth upward translation (5px on desktop, 2px on mobile)
- Border color enhancement
- Duration: 2 seconds

**Applied to:**
- Service cards (Children's Magic, Stand-up Magic, Close-up Magic, Santa)

**Animation Details:**
```css
- Glow intensity: Medium (0-20px box-shadow)
- Motion: Vertical lift with ease-out
- Mobile: Reduced motion for performance
```

---

## 2. Button Magic

**Class:** `.magic-button`

**Effect:** Buttons glow on hover with a shimmer effect that sweeps across the button.

**Components:**
- Glowing box-shadow (purple to yellow gradient)
- Shimmer sweep animation (left to right)
- Subtle pulse on click (1.02 scale)
- Duration: 1.5 seconds (hover), 0.3 seconds (click)

**Applied to:**
- Hero CTA buttons ("Book a show", "Call Kenneth")
- CTA banner buttons
- All primary action buttons

**Animation Details:**
```css
- Shimmer: Linear sweep with ::before pseudo-element
- Glow colors: Primary purple + secondary yellow
- Shadow distance: 20px radius
- Click feedback: Quick scale pulse
```

---

## 3. Image Glow Border

**Class:** `.image-glow`

**Effect:** Images and placeholders have a subtle glowing border that pulses gently.

**Components:**
- Inner and outer glow
- Soft box-shadow animation
- Breathing effect (inhale/exhale)
- Duration: 3 seconds

**Applied to:**
- About Kenneth image placeholder
- All image elements with this class

**Animation Details:**
```css
- Outer glow: 0-20px
- Inner glow: Inset shadow
- Colors: Primary purple with opacity
- Effect: Soft, meditative breathing
```

---

## 4. Section Entrance Animation

**Class:** `.section-magic-entrance`

**Effect:** Sections fade in with a blur effect on page load.

**Components:**
- Opacity fade (0 to 1)
- Blur reduction (4px to 0)
- Smooth ease-out curve
- Duration: 0.6 seconds

**Applied to:**
- CTA banner section
- Can be applied to other sections for staggered entrance

**Animation Details:**
```css
- Starting state: Invisible with 4px blur
- Easing: ease-out (snappy entrance)
- Performance: GPU-accelerated
```

---

## 5. Stagger Animation

**Class:** `.stagger-item`

**Effect:** Multiple elements animate in sequence with increasing delay.

**Components:**
- Vertical fade-in (0 to 1 opacity)
- Translate up (10px to 0)
- Sequential timing with delays
- Duration: 0.5 seconds per item

**Applied to:**
- CTA section title, subtitle, and buttons
- Can be applied to lists, grids, or feature blocks

**Animation Details:**
```css
- Item 1: 0.1s delay
- Item 2: 0.2s delay
- Item 3: 0.3s delay
- Item 4: 0.4s delay
- Item 5: 0.5s delay
- Creates cascade effect
```

---

## 6. Floating Objects

**Class:** `.float-gentle`

**Effect:** Elements gently bob up and down with a subtle rotation.

**Components:**
- Vertical movement (0 to -12px)
- Gentle rotation (0 to 1 degree)
- Smooth ease-in-out motion
- Duration: 4 seconds

**Applied to:**
- Background decorative shapes
- Floating particles
- Ornamental elements

**Animation Details:**
```css
- Amplitude: 12px vertical motion
- Rotation: 1 degree (subtle)
- Period: 4 seconds (relaxing)
- Easing: Smooth sine wave
```

---

## 7. Gradient Shift Animation

**Class:** `.gradient-shift`

**Effect:** Gradients smoothly shift their color position, creating a shimmering effect.

**Components:**
- Background position animation
- 200% sized gradient
- Smooth continuous motion
- Duration: 6 seconds

**Applied to:**
- Can be applied to gradient backgrounds for dynamic feel

**Animation Details:**
```css
- Background size: 200% 200%
- Movement: 0% → 100% → 0%
- Easing: Linear (continuous)
- Duration: 6 seconds
```

---

## 8. Magic Spin

**Class:** `.magic-spin`

**Effect:** Element rotates continuously with a smooth, elegant motion.

**Components:**
- Full 360-degree rotation
- Linear continuous motion
- Duration: 8 seconds

**Applied to:**
- Magic wand icon in hero badge
- Rotating decorative elements

**Animation Details:**
```css
- Rotation: 0 → 360 degrees
- Duration: 8 seconds
- Easing: Linear (constant speed)
```

---

## 9. Cursor Glow (JavaScript)

**Component:** `CursorGlow` from MagicalEffects.tsx

**Effect:** Subtle magical aura follows the user's cursor.

**Features:**
- Radial gradient glow
- Smooth tracking (0.2s ease-out)
- Automatic hide on mouse leave
- Performance optimized (updates on mousemove)

**Performance:**
```typescript
- Only renders when cursor visible
- Debounced mousemove events
- Uses GPU acceleration
- Minimal JavaScript overhead
```

---

## 10. Floating Particles

**Component:** `FloatingParticles` from MagicalEffects.tsx

**Effect:** Premium particle system with gentle floating motion.

**Features:**
- Randomized positions
- Varied sizes (1-3px)
- Individual animation durations
- Offset delays for natural effect

**Performance:**
```typescript
- Default count: 30 particles
- Position: Fixed (don't reflow DOM)
- Pointer events: None (don't affect interaction)
- CSS-driven animation
```

---

## 11. Mobile Optimization

All effects are automatically optimized for mobile devices:

```css
@media (max-width: 640px) {
  - Card hover: Reduced glow, no animation (only transform)
  - Button hover: Shorter animation (1.5s instead of full)
  - Float animation: Slower (5s instead of 4s)
  - CTA pulse: Longer (3s instead of 2s)
}
```

**Benefits:**
- Reduced battery drain
- Smoother performance on lower-end devices
- Touch-friendly interactions
- Maintained visual appeal

---

## 12. Accessibility

The system respects user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  - All animations: Minimal duration (0.01ms)
  - All transitions: Minimal duration (0.01ms)
  - Scroll behavior: Auto (no smooth scroll)
}
```

**Compliance:**
- WCAG 2.1 Level AAA compliant
- Respects `prefers-reduced-motion`
- No flashing or seizure triggers
- Safe for users with motion sensitivity

---

## CSS Classes Reference

### Direct Application Classes

| Class | Effect | Use Case |
|-------|--------|----------|
| `.magic-card-hover` | Glow + float on hover | Service/content cards |
| `.magic-button` | Shimmer + glow on hover | Action buttons |
| `.image-glow` | Pulsing border glow | Images & placeholders |
| `.float-gentle` | Gentle bobbing motion | Decorative elements |
| `.magic-spin` | Continuous rotation | Icons & badges |
| `.gradient-shift` | Gradient animation | Gradient backgrounds |
| `.section-magic-entrance` | Fade in with blur | Section entrances |
| `.stagger-item` | Sequential fade-in | List items, grid items |

---

## Animation Keyframes Available

All animations are defined in `/app/globals.css` and can be used independently:

- `@keyframes card-glow` - Soft box-shadow pulse
- `@keyframes button-shimmer` - Sweep effect
- `@keyframes button-glow` - Color-shifting glow
- `@keyframes subtle-pulse` - Scale pulse (1 → 1.02)
- `@keyframes float-gentle` - Vertical bobbing
- `@keyframes section-fade-in` - Blur fade entrance
- `@keyframes sparkle-burst` - Quick upward sparkle
- `@keyframes glow-border` - Pulsing border
- `@keyframes gentle-spin` - Smooth rotation
- `@keyframes stagger-in` - Sequential fade

---

## Performance Considerations

### CSS-First Approach
- 95% of effects use pure CSS animations
- GPU-accelerated (transform, opacity only where possible)
- No layout recalculation (reflow avoided)

### JavaScript Minimization
- CursorGlow: Only on active mousemove
- FloatingParticles: Rendered once, CSS-driven
- No requestAnimationFrame loops

### Best Practices Applied
- `will-change` used sparingly (can hurt performance)
- Transform + opacity preferred over position
- Blur effects kept minimal (expensive GPU operation)
- Hardware acceleration enabled via 3D transforms

---

## Browser Support

- Chrome/Edge: Full support (modern versions)
- Firefox: Full support (modern versions)
- Safari: Full support (modern versions)
- Mobile browsers: Full support with optimizations

**Fallback Behavior:**
- All effects gracefully degrade
- No JavaScript errors on old browsers
- Static elements remain fully functional
- Accessibility maintained

---

## Future Enhancement Ideas

1. **Confetti Bursts** - On successful actions (booking, form submission)
2. **Magnetic Buttons** - CTA buttons that subtly attract cursor
3. **Trail Animations** - Extended cursor trails on high-end devices
4. **Scroll-Triggered Effects** - Animations trigger on scroll into view
5. **Parallax Depth** - Layered elements move at different speeds
6. **Magic Wand Trace** - Clicking creates temporary sparkle trail

---

## Customization Guide

### Adjust Animation Duration

Edit in `globals.css`:
```css
.float-gentle {
  animation: float-gentle 5s ease-in-out infinite; /* Change 4s to your value */
}
```

### Adjust Glow Intensity

Edit in `globals.css`:
```css
@keyframes card-glow {
  50% {
    box-shadow: 0 0 30px rgba(85, 120, 255, 0.5); /* Increase spread */
  }
}
```

### Adjust Motion Amount

Edit in `globals.css`:
```css
@keyframes float-gentle {
  50% {
    transform: translateY(-20px); /* Increase vertical movement */
  }
}
```

---

## Testing the Effects

### Desktop Testing
1. Hover over service cards
2. Click CTA buttons to see pulse
3. Observe image glow animation
4. Watch cursor glow follow movement

### Mobile Testing
1. Tap service cards (reduced animation)
2. Tap buttons (shimmer effect)
3. Scroll to see stagger animations
4. Check reduced motion mode

### Accessibility Testing
1. Enable "Reduce motion" in OS settings
2. Verify all animations are minimized
3. Test keyboard navigation
4. Verify screen reader compatibility

---

## Maintenance Notes

**File Locations:**
- Animations: `/app/globals.css` (lines 237-480)
- Components: `/components/MagicalEffects.tsx`
- Applied to: `/app/[locale]/page.tsx`

**Update Guidelines:**
- Keep animations under 3 seconds (feels snappy)
- Use ease-in-out for natural motion
- Test on real devices (not just dev tools)
- Monitor performance with DevTools

---

## Support

For questions or issues with the Magic Effects System:
1. Check this guide for animation details
2. Inspect element to see applied classes
3. Review CSS animations in DevTools
4. Test with reduced motion enabled

