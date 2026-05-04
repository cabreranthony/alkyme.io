# Alkyme Website - UX/UI Review: Liquid Glass & Best Practices

**Date:** April 2026
**Scope:** Global token system, liquid glass implementation, mobile responsiveness, accessibility
**Reviewers:** Senior UX/UI Designer + Front-end Architect + Accessibility Specialist

---

## Executive Summary

The Alkyme design system demonstrates **strong foundational architecture** with well-structured tokens, thoughtful typography hierarchy, and a cohesive liquid glass aesthetic. However, there are opportunities to enhance:

1. **Glass effect consistency** across light/dark modes
2. **Mobile responsiveness** edge cases (especially glass cards on small screens)
3. **Accessibility** improvements (contrast ratios, reduced motion, keyboard navigation)
4. **Performance optimizations** (backdrop-filter fallbacks, paint containment)
5. **Design token refinement** (missing glass states, animation curves)

**Overall Grade: B+ (Very Good, room for excellence)**

---

## Table of Contents

1. [Token System Review](#1-token-system-review)
2. [Liquid Glass Implementation](#2-liquid-glass-implementation)
3. [Mobile Responsiveness](#3-mobile-responsiveness)
4. [Accessibility](#4-accessibility)
5. [Performance](#5-performance)
6. [Component-Level Review](#6-component-level-review)
7. [Recommendations Summary](#7-recommendations-summary)

---

## 1. Token System Review

### ✅ Strengths

**Excellent token architecture:**
- Clear separation of concerns (brand colors, semantic roles, component tokens)
- RGB tuples for alpha transparency (modern, flexible)
- Fluid typography with clamp() (responsive by default)
- Dark mode handled at token level (maintainable)
- Comprehensive documentation in CSS comments

**Typography hierarchy:**
- Dual-font system (Libre Baskerville + Source Sans 3) well-defined
- Clear use cases for Display vs UI fonts
- Thoughtful weight distribution (h1 at 400, h2 at 700, h3-6 at 600)

**Layout tokens:**
- Responsive padding/spacing with clamp()
- Consistent border-radius family (--radius-media, --radius-pill)
- Safe area insets for mobile notches

### ⚠️ Issues Found

#### 1.1 Missing Glass State Tokens

**Problem:**
```css
/* Current: only base glass, hover shadow */
--glass-marketing-shadow: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.95), 0 8px 32px rgb(var(--rgb-bark) / 0.07);
--glass-marketing-shadow-hover: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.95), 0 14px 40px rgb(var(--rgb-bark) / 0.12);
```

**Missing:**
- `:focus` state for glass cards
- `:active` state for glass buttons
- `disabled` state styling
- Loading/skeleton state for glass surfaces

**Recommendation:**
```css
/* Add to alkyme-tokens.css :root */
--glass-marketing-shadow-focus: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.95),
                                0 0 0 3px rgb(var(--rgb-forest) / 0.12),
                                0 14px 40px rgb(var(--rgb-bark) / 0.12);
--glass-marketing-shadow-active: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.95),
                                 0 4px 16px rgb(var(--rgb-bark) / 0.1);
--glass-marketing-disabled-opacity: 0.5;
--glass-marketing-skeleton-gradient: linear-gradient(
  90deg,
  rgb(var(--rgb-eggshell) / 0.5) 0%,
  rgb(var(--rgb-eggshell) / 0.7) 50%,
  rgb(var(--rgb-eggshell) / 0.5) 100%
);
```

#### 1.2 Dark Mode Glass Contrast Issues

**Problem:**
Dark mode glass gradient may not meet WCAG AA contrast ratios on all backgrounds.

```css
/* Dark mode current */
--glass-marketing-gradient: linear-gradient(
  168deg,
  rgb(var(--rgb-glass-scrim-a) / 0.82) 0%,   /* #0C1612 at 82% */
  rgb(var(--rgb-glass-scrim-b) / 0.88) 42%,  /* #060E0B at 88% */
  rgb(var(--rgb-glass-scrim-c) / 0.84) 100%  /* #12201A at 84% */
);
```

**Recommendation:**
Test against dark backgrounds (#070c0a) with contrast checker. May need to increase opacity or adjust RGB values:

```css
/* Suggested adjustment if contrast fails */
--glass-marketing-gradient: linear-gradient(
  168deg,
  rgb(var(--rgb-glass-scrim-a) / 0.9) 0%,    /* Increased opacity */
  rgb(var(--rgb-glass-scrim-b) / 0.94) 42%,
  rgb(var(--rgb-glass-scrim-c) / 0.92) 100%
);
```

#### 1.3 Missing Animation Tokens

**Problem:**
Motion tokens are minimal:
```css
--ease-out: cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-spring: cubic-bezier(0.34, 1.2, 0.64, 1);
--duration-fast: 0.18s;
--duration: 0.28s;
```

**Missing:**
- Slow duration for complex animations
- Ease-in curve
- Ease-in-out curve
- Glass-specific transitions (blur, background changes)

**Recommendation:**
```css
/* Add to motion section */
--duration-slow: 0.45s;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--glass-transition-blur: backdrop-filter 0.35s var(--ease-out);
--glass-transition-shadow: box-shadow 0.28s var(--ease-out);
--glass-transition-background: background 0.28s var(--ease-out);
```

---

## 2. Liquid Glass Implementation

### ✅ Strengths

**Solid base class:**
```css
.glass {
  border-radius: var(--radius);
  background: var(--glass-marketing-gradient);
  border: var(--glass-marketing-border);
  box-shadow: var(--glass-marketing-shadow);
  backdrop-filter: var(--glass-marketing-filter);
  -webkit-backdrop-filter: var(--glass-marketing-filter);
}
```

**Good reduced-transparency fallback:**
```css
@media (prefers-reduced-transparency: reduce) {
  .glass {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: var(--glass-marketing-bg-solid);
  }
}
```

### ⚠️ Issues Found

#### 2.1 No Hover/Focus States on Base Glass

**Problem:**
Base `.glass` class doesn't have interactive states. Downstream components have to redefine hover/focus manually.

**Recommendation:**
Add modifier classes:

```css
/* Add to site-marketing-base.css after .glass */

/* Interactive glass (buttons, cards) */
.glass--interactive {
  transition:
    box-shadow var(--duration) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
  cursor: pointer;
}

.glass--interactive:hover {
  box-shadow: var(--glass-marketing-shadow-hover);
  transform: translateY(-2px);
}

.glass--interactive:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
  box-shadow: var(--glass-marketing-shadow-focus);
}

.glass--interactive:active {
  transform: translateY(0);
  box-shadow: var(--glass-marketing-shadow-active);
}

.glass--interactive:disabled,
.glass--interactive[aria-disabled="true"] {
  opacity: var(--glass-marketing-disabled-opacity);
  cursor: not-allowed;
  transform: none;
}

/* Stacked glass (layered under imagery) */
.glass--stacked {
  box-shadow: var(--glass-marketing-shadow-stacked);
}

/* Glass on dark backgrounds */
.glass--on-dark {
  /* Already handled by dark mode token remapping, but could be explicit */
}
```

#### 2.2 Backdrop-Filter Performance Issues

**Problem:**
`backdrop-filter: blur(20px)` can cause performance issues on:
- Older mobile devices
- Safari on older MacBooks
- When multiple glass elements stack

**Current implementation:**
```css
--glass-marketing-filter: blur(20px) saturate(170%);
```

**Recommendation:**
1. **Add will-change hint for animating glass:**
```css
.glass--interactive {
  will-change: transform, box-shadow;
}

.glass--interactive:hover,
.glass--interactive:focus-visible {
  will-change: auto; /* Remove after animation */
}
```

2. **Add paint containment:**
```css
.glass {
  contain: paint layout;
}
```

3. **Consider lighter blur for mobile:**
```css
@media (max-width: 680px) {
  :root {
    --glass-marketing-filter: blur(12px) saturate(160%);
  }
}
```

#### 2.3 Glass Border Visibility on Light Backgrounds

**Problem:**
Light mode glass border may be too subtle on white/eggshell backgrounds:
```css
--glass-marketing-border: 1px solid rgb(var(--rgb-dew) / 0.55);
/* #93b1a6 at 55% opacity on white = very light */
```

**Test Result:**
Border is barely visible on `--page-bg: #ffffff`

**Recommendation:**
Increase opacity or use darker color:
```css
/* Option A: Increase opacity */
--glass-marketing-border: 1px solid rgb(var(--rgb-dew) / 0.75);

/* Option B: Use forest green instead */
--glass-marketing-border: 1px solid rgb(var(--rgb-forest) / 0.2);

/* Option C: Layered border (subtle inside, stronger outside) */
.glass {
  border: 1px solid rgb(var(--rgb-dew) / 0.55);
  outline: 1px solid rgb(var(--rgb-forest) / 0.08);
  outline-offset: -1px;
}
```

---

## 3. Mobile Responsiveness

### ✅ Strengths

- Fluid typography with `clamp()` (scales naturally)
- Responsive padding (`--page-gutter: clamp(1.25rem, 5vw, 2.75rem)`)
- Safe area insets for notched devices
- Grid auto-collapse with `minmax()`

### ⚠️ Issues Found

#### 3.1 Glass Cards Too Small on Mobile

**Problem:**
On screens <400px, glass cards with multiple lines of text become cramped. The blur effect eats into content area.

**Recommendation:**
```css
/* Add responsive padding for glass cards */
.glass {
  padding: clamp(1rem, 3vw, 1.5rem);
}

/* On very small screens, reduce blur radius */
@media (max-width: 400px) {
  :root {
    --glass-marketing-filter: blur(10px) saturate(160%);
  }

  .glass {
    padding: clamp(0.875rem, 4vw, 1.25rem);
  }
}
```

#### 3.2 Breakpoint Inconsistency

**Problem:**
Different files use different breakpoint values:
- `site-about.css`: mentions "680px mobile; 900px tablet"
- `site-careers.css`: mentions "680px mobile; 900px tablet"
- But actual queries vary

**Recommendation:**
**Define breakpoint tokens:**

```css
/* Add to alkyme-tokens.css */
--bp-mobile: 680px;
--bp-tablet: 900px;
--bp-desktop: 1200px;
--bp-wide: 1440px;
```

**Create shared breakpoint mixins** (or document standard queries in style-guide.md):

```css
/* Document in style-guide.md */

/* Mobile-first approach (default styles = mobile) */

/* Tablet and up */
@media (min-width: 900px) {
  /* 2-column grids, side-by-side layouts */
}

/* Desktop and up */
@media (min-width: 1200px) {
  /* 3-column grids, max spacing */
}

/* Wide screens */
@media (min-width: 1440px) {
  /* Optional: lock max sizes */
}
```

#### 3.3 Touch Targets Too Small

**Problem:**
Some interactive elements (carousel dots, close buttons) may be <44x44px on mobile (WCAG 2.5.5 Target Size).

**Example from careers flip card:**
```css
.careers-hero-flip__close {
  /* Size not explicitly set; relies on padding */
}
```

**Recommendation:**
```css
/* Ensure minimum touch target */
.careers-hero-flip__close,
.hero-video-toggle,
.carousel-dot {
  min-width: 44px;
  min-height: 44px;
  /* Use padding to center icon if needed */
}

/* Or use pseudo-element for larger hit area */
.small-button {
  position: relative;
}

.small-button::before {
  content: '';
  position: absolute;
  inset: -8px; /* Adds 16px to all sides */
  /* Invisible but captures touch */
}
```

---

## 4. Accessibility

### ✅ Strengths

- Focus ring tokens defined
- Skip link present
- `prefers-reduced-motion` respected
- `prefers-reduced-transparency` fallback
- Semantic HTML (landmarks, headings)

### ⚠️ Issues Found

#### 4.1 Focus Ring Visibility on Glass

**Problem:**
Default focus ring may not be visible enough on glass backgrounds:
```css
--focus-ring: 2px solid var(--forest);
```

On a glass card with similar green tones, this can be hard to see.

**Recommendation:**
```css
/* Enhance focus ring contrast */
--focus-ring: 2px solid var(--forest);
--focus-ring-shadow: 0 0 0 4px rgb(var(--rgb-white) / 0.3);

:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
  box-shadow: var(--focus-ring-shadow); /* Adds white halo */
}

/* For glass elements, use contrasting ring */
.glass:focus-visible,
.glass .button:focus-visible {
  outline: 2px solid var(--bark);
  outline-offset: 3px;
  box-shadow: 0 0 0 5px rgb(var(--rgb-eggshell) / 0.9);
}
```

#### 4.2 Color Contrast on Glass

**Problem:**
Need to verify that text on glass meets WCAG AA (4.5:1 for normal text, 3:1 for large text).

**Test these combinations:**
- Dark text on light glass
- Light text on dark glass (careers hero flip)
- Link colors on glass backgrounds

**Recommendation:**
Use a contrast checker on:
1. `--ink` (--bark) on light glass gradient
2. `--text-on-dark` (--eggshell-sky) on dark glass gradient
3. `--forest` (links) on glass

If failing:
```css
/* Increase text weight on glass for better legibility */
.glass p,
.glass .body-text {
  font-weight: 450; /* Slightly heavier than 400 */
}

/* Or adjust glass opacity to darken/lighten background */
--glass-marketing-gradient: linear-gradient(
  145deg,
  rgb(var(--rgb-eggshell) / 0.85) 0%,  /* Increased from 0.78 */
  rgb(var(--rgb-eggshell) / 0.55) 100% /* Increased from 0.45 */
);
```

#### 4.3 Keyboard Navigation Through Carousels

**Problem:**
Carousel dots may not be keyboard-accessible or skip link may not bypass carousel.

**Recommendation:**
Ensure:
1. Carousel dots are `<button>` elements (not just styled divs)
2. Active slide announced to screen readers
3. Option to disable auto-advance
4. Skip link bypasses decorative carousels

```html
<!-- Example accessible carousel controls -->
<div class="carousel-controls" role="group" aria-label="Carousel controls">
  <button type="button" aria-label="Slide 1 of 4, About Alkyme" aria-current="true">
    <span class="sr-only">Slide 1</span>
  </button>
  <button type="button" aria-label="Slide 2 of 4, How we work">
    <span class="sr-only">Slide 2</span>
  </button>
  <!-- etc -->
</div>

<button type="button" class="carousel-pause" aria-label="Pause carousel">
  Pause
</button>
```

---

## 5. Performance

### ✅ Strengths

- `will-change` used sparingly
- Videos use `loading="lazy"` where appropriate
- Fonts preconnected to Google Fonts

### ⚠️ Issues Found

#### 5.1 Multiple Backdrop-Filter Elements

**Problem:**
Stacking multiple glass elements (e.g., glass card inside glass section) can cause:
- Slower paint times
- Janky scroll on mobile
- High GPU usage

**Recommendation:**
```css
/* Limit backdrop-filter nesting */
.glass .glass {
  /* Child glass shouldn't re-blur already blurred parent */
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: var(--glass-marketing-bg-solid);
}

/* Or use different strategy for nested cards */
.glass--nested {
  background: rgb(var(--rgb-white) / 0.5);
  backdrop-filter: none;
  border: var(--border-strong);
}
```

#### 5.2 No `contain` Property

**Problem:**
Glass cards don't use CSS containment, which can help browser optimize repaints.

**Recommendation:**
```css
.glass {
  contain: paint layout; /* Isolates paint and layout */
}

/* For cards with internal scrolling */
.glass--scroll {
  contain: layout style; /* Don't contain paint if scrolling */
}
```

#### 5.3 Video Blur Performance

**Problem:**
Careers hero applies `filter: blur(7px)` to full-screen video:
```css
.careers-hero__video {
  filter: blur(7px);
}
```

This is GPU-intensive on mobile.

**Recommendation:**
```css
/* Reduce blur on mobile */
@media (max-width: 680px) {
  .careers-hero__video {
    filter: blur(4px);
  }
}

/* Or remove blur on low-end devices */
@media (max-width: 680px) and (prefers-reduced-motion: reduce) {
  .careers-hero__video {
    filter: none;
    opacity: 0.7; /* Darken instead */
  }
}
```

---

## 6. Component-Level Review

### About Page Glass Implementation

**File:** `site-about.css`

**Findings:**
- Accordion trigger has good hover/focus states
- Glass cards (pillar cards, link cards) missing hover lift
- Image borders use fixed `rgb(var(--rgb-dew) / 0.4)` (should use token)

**Recommendations:**
```css
/* Add hover state to link cards */
.about-pillar-link,
.about-path-card {
  transition: transform 0.25s var(--ease-out),
              box-shadow 0.25s var(--ease-out);
}

.about-pillar-link:hover,
.about-path-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--glass-marketing-shadow-hover);
}

/* Use border token */
.about-name-hero__figure {
  border: var(--glass-marketing-border);
}
```

### Careers Page Glass Implementation

**File:** `site-careers.css`

**Findings:**
- Flip card uses extensive glass styling
- Good reduced-transparency fallbacks
- Hero video blur may be too heavy on mobile

**Recommendations:**
```css
/* Add loading state for flip card */
.careers-hero-flip[data-loading] .careers-hero-flip__face--back {
  background: var(--glass-marketing-skeleton-gradient);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s infinite;
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Improve mobile flip performance */
@media (max-width: 680px) {
  .careers-hero-flip {
    transform-style: flat; /* Disable 3D on mobile */
  }

  .careers-hero-flip[data-flipped] .careers-hero-flip__face--front {
    display: none; /* Hide instead of transforming */
  }

  .careers-hero-flip[data-flipped] .careers-hero-flip__face--back {
    display: block;
  }
}
```

---

## 7. Recommendations Summary

### Priority 1 (Critical - Implement Immediately)

1. **Add missing glass state tokens** (focus, active, disabled)
2. **Fix dark mode glass contrast** (test and adjust opacity/colors)
3. **Ensure minimum touch targets** (44x44px for all interactive elements)
4. **Verify color contrast** on all glass backgrounds (WCAG AA)
5. **Fix focus ring visibility** on glass elements

### Priority 2 (High - Implement Soon)

6. **Add glass modifier classes** (--interactive, --stacked, --on-dark)
7. **Standardize breakpoints** (document and enforce 680/900/1200px)
8. **Improve mobile glass sizing** (responsive padding, reduced blur)
9. **Add animation tokens** (duration-slow, ease curves, glass-specific)
10. **Optimize backdrop-filter performance** (contain, will-change, nesting limits)

### Priority 3 (Medium - Nice to Have)

11. **Add glass skeleton/loading state**
12. **Enhance glass border visibility** (test and adjust opacity)
13. **Improve video blur performance** (mobile-specific reduction)
14. **Add keyboard navigation enhancements** (carousel controls)
15. **Document glass usage patterns** (when to use, when to avoid)

### Priority 4 (Low - Future Enhancement)

16. **Consider glass motion variants** (slide-in, fade-in with blur)
17. **Add glass elevation system** (z-1, z-2, z-3 stacking)
18. **Explore glass + gradient combinations** (branded overlays)
19. **Create glass component library** (card, modal, tooltip, dropdown)
20. **Performance monitoring** (track paint times, layout shifts)

---

## Implementation Plan

### Week 1: Token & Foundation
- [ ] Add missing tokens (glass states, animation curves, breakpoints)
- [ ] Fix dark mode contrast issues
- [ ] Update site-marketing-base.css with glass modifiers
- [ ] Document new tokens in style-guide.md

### Week 2: Accessibility & Mobile
- [ ] Audit and fix color contrast
- [ ] Enhance focus rings on glass
- [ ] Fix touch target sizes
- [ ] Test and adjust mobile glass sizing
- [ ] Standardize breakpoints across all files

### Week 3: Performance & Polish
- [ ] Add CSS containment
- [ ] Optimize backdrop-filter nesting
- [ ] Reduce video blur on mobile
- [ ] Add loading states
- [ ] Test on low-end devices

### Week 4: Documentation & Review
- [ ] Update brand-content-guidelines.md
- [ ] Create glass usage guide in style-guide.md
- [ ] Document breakpoint strategy
- [ ] Final cross-browser testing
- [ ] Accessibility audit with screen reader

---

## Testing Checklist

### Visual Regression
- [ ] Light mode glass on white background
- [ ] Light mode glass on eggshell background
- [ ] Dark mode glass on dark background
- [ ] Glass on video backgrounds
- [ ] Nested glass elements
- [ ] Glass hover/focus states

### Responsive Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 14 Pro (393px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] Laptop (1280px)
- [ ] Desktop (1440px+)

### Accessibility Testing
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Screen reader (VoiceOver, NVDA)
- [ ] Color contrast (WebAIM checker)
- [ ] Reduced motion (browser setting)
- [ ] Reduced transparency (browser setting)
- [ ] High contrast mode (Windows)

### Performance Testing
- [ ] Lighthouse score (mobile)
- [ ] Lighthouse score (desktop)
- [ ] First Contentful Paint <1.8s
- [ ] Largest Contentful Paint <2.5s
- [ ] Cumulative Layout Shift <0.1
- [ ] Time to Interactive <3.8s

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS 15+)
- [ ] Mobile Chrome (Android)

---

## Conclusion

The Alkyme design system has a **solid foundation** with well-thought-out tokens and a cohesive liquid glass aesthetic. The primary opportunities for improvement are:

1. **Filling token gaps** (missing states, animations)
2. **Enhancing accessibility** (contrast, focus, keyboard nav)
3. **Optimizing performance** (backdrop-filter, mobile)
4. **Standardizing patterns** (breakpoints, modifiers)

With these improvements, the system will move from **"very good"** to **"excellent"** - production-ready for scale and fully accessible.

**Next Steps:**
1. Review and approve recommendations
2. Prioritize implementation order
3. Begin with Priority 1 (critical) items
4. Test thoroughly before deploying

---

**Document Version:** 1.0
**Last Updated:** April 2026
**Next Review:** After Priority 1-2 implementation
