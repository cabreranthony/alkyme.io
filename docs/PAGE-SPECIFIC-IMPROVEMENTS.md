# Page-Specific UX/UI Improvements

**Purpose:** Detailed review of each HTML page for mobile responsiveness, dark/light mode, landscape/portrait, and accessibility.

**Date:** April 2026
**Pages Reviewed:** `index.html`, `about.html`, `careers.html`, `ai.html`, `contact.html`

---

## Quick Summary

| Page | Mobile | Landscape | Dark Mode | A11y | Priority Issues |
|------|--------|-----------|-----------|------|-----------------|
| index.html | ⚠️ Good | ⚠️ Needs work | ✅ Excellent | ✅ Good | Video controls, touch targets |
| about.html | ⚠️ Good | ⚠️ Needs work | ✅ Good | ⚠️ Needs work | Carousel keyboard nav, meta description |
| careers.html | ✅ Excellent | ⚠️ Needs work | ✅ Excellent | ✅ Excellent | Flip card landscape, video blur mobile |
| ai.html | 🔍 Not reviewed | 🔍 Not reviewed | 🔍 Not reviewed | 🔍 Not reviewed | Review needed |
| contact.html | 🔍 Not reviewed | 🔍 Not reviewed | 🔍 Not reviewed | 🔍 Not reviewed | Review needed |

---

## 1. About Page (`about.html`)

### ✅ What's Working Well

**Accessibility:**
- Good carousel semantics (`role="region"`, `aria-roledescription="carousel"`)
- Proper slide labeling (`aria-label="1 of 4"`)
- Skip link present
- Pause button for autoplay

**Dark Mode:**
- Logo swaps correctly (black → cream)
- Glass effects adapt
- Text contrast maintains

### ⚠️ Issues Found

#### Issue 1.1: Meta Description Still References "AI venture studio"

**Problem:**
```html
<meta name="description" content="Alkymē is a Los Angeles AI venture studio. Who we are, how we work, Labs, and how to reach us.">
```

**Per brand guidelines:** AI is infrastructure, not brand identity.

**Fix:**
```html
<meta name="description" content="Alkymē is a startup studio in Los Angeles. We originate ventures, build them in-house, and spin them out when they're ready to scale.">
```

**Also update:**
- `og:description`
- `twitter:description`
- Slide 1 body copy still says "AI venture studio"

#### Issue 1.2: Carousel Navigation in Landscape Mobile

**Problem:**
On phones in landscape (e.g., iPhone 14 Pro at 393x852 → 852x393):
- Carousel controls overlap slide content
- Pause button too close to edge (hard to tap)
- Prev/next buttons hard to reach with thumbs

**Current CSS:**
```css
.about-carousel-controls {
  /* Position not responsive to landscape */
}
```

**Recommended Fix:**
```css
/* about-carousel.css additions */

/* Landscape mobile: move controls to bottom */
@media (max-width: 900px) and (orientation: landscape) {
  .about-carousel-controls {
    bottom: max(1rem, env(safe-area-inset-bottom));
    /* Reduce size for landscape */
    scale: 0.85;
  }

  .about-carousel-controls__nav {
    gap: 0.75rem; /* Closer together for thumb reach */
  }

  /* Shrink pause button for landscape */
  .about-carousel-pause-btn {
    width: 36px;
    height: 36px;
    min-width: 36px;
  }
}
```

#### Issue 1.3: Carousel Buttons Below 44px Touch Target

**Problem:**
```css
.about-carousel-nav-btn {
  /* Size not explicitly set, may be <44px */
}

.about-carousel-pause-btn {
  /* Also potentially too small */
}
```

**WCAG 2.5.5 requires minimum 44x44px touch targets.**

**Fix:**
```css
.about-carousel-nav-btn,
.about-carousel-pause-btn {
  min-width: 44px;
  min-height: 44px;
  /* Use padding to center smaller icons */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Icon size can be smaller, button hit area is 44px */
.about-carousel-nav-btn svg {
  width: 20px;
  height: 20px;
}
```

#### Issue 1.4: Carousel Not Keyboard Navigable (Dots Missing)

**Current:**
- Prev/next buttons work with keyboard
- No way to jump to specific slide via keyboard
- Progress indicator is visual only

**Recommended Addition:**
```html
<!-- Add dot navigation for keyboard users -->
<div class="about-carousel-dots" role="tablist" aria-label="Choose slide">
  <button
    type="button"
    role="tab"
    aria-label="Slide 1 of 4"
    aria-selected="true"
    aria-controls="slide-1"
    data-carousel-dot="0"
  >
    <span class="sr-only">Slide 1</span>
  </button>
  <!-- Repeat for slides 2-4 -->
</div>
```

```css
.about-carousel-dots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.about-carousel-dots button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--border);
  background: transparent;
  cursor: pointer;
  position: relative;
}

.about-carousel-dots button::before {
  content: '';
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0;
  transition: opacity 0.2s;
}

.about-carousel-dots button[aria-selected="true"]::before {
  opacity: 1;
}

.about-carousel-dots button:focus-visible {
  outline: var(--focus-ring);
  outline-offset: 3px;
}
```

#### Issue 1.5: Name Section Grid Breaks on Small Tablets

**Problem:**
At 768px-850px (iPad Mini portrait):
```css
.about-name-grid {
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 2.05fr);
}
```

Left column (0.95fr) becomes too narrow for pronunciation text.

**Fix:**
```css
@media (max-width: 900px) {
  .about-name-grid {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  .about-name-hero__copy {
    grid-column: 1;
    grid-row: 1;
  }

  .about-name-hero__figure {
    grid-column: 1;
    grid-row: 2;
  }

  .about-name-hero__detail {
    grid-column: 1;
    grid-row: 3;
  }
}
```

---

## 2. Careers Page (`careers.html`)

### ✅ What's Working Well

**Accessibility:**
- Excellent glass flip card implementation
- Proper `inert` attribute on hidden face
- `aria-expanded` on trigger button
- Form labels and validation
- Video has poster image

**Mobile:**
- Hero scales well
- Glass panel adapts
- Form inputs sized appropriately

**Dark Mode:**
- Glass on video background looks excellent
- Text contrast maintains
- Button states clear

### ⚠️ Issues Found

#### Issue 2.1: Flip Card in Landscape Mobile

**Problem:**
On phones in landscape (852x393):
- Flip card back (form) too tall for viewport
- User has to scroll inside glass panel (weird UX)
- Close button may be offscreen

**Current:**
```css
.careers-hero-flip__face--back {
  /* No height constraint for landscape */
}
```

**Fix:**
```css
@media (max-width: 900px) and (orientation: landscape) {
  .careers-hero-flip__face--back {
    max-height: 85vh;
    max-height: 85dvh;
    overflow-y: auto;
    /* Ensure close button stays visible */
  }

  .careers-hero-flip__close {
    position: sticky;
    top: 0;
    z-index: 10;
    /* Add backdrop for visibility */
    background: rgb(var(--rgb-eggshell) / 0.95);
    backdrop-filter: blur(8px);
  }

  /* Reduce form spacing for landscape */
  .talent-dialog__form .field {
    margin-bottom: 0.875rem; /* Tighter spacing */
  }
}
```

#### Issue 2.2: Video Blur Too Heavy on Mobile

**Current:**
```css
.careers-hero__video {
  filter: blur(7px);
}
```

**Problem:**
- 7px blur on full-screen video causes GPU strain on mobile
- Scroll performance suffers (janky on iPhone SE)

**Fix:**
```css
/* Already addressed in tokens update, but add to site-careers.css for clarity */
@media (max-width: 680px) {
  .careers-hero__video {
    filter: blur(4px); /* Lighter on mobile */
  }
}

@media (max-width: 680px) and (prefers-reduced-motion: reduce) {
  .careers-hero__video {
    filter: none;
    opacity: 0.7; /* Darken instead of blur */
  }
}
```

#### Issue 2.3: Glass Panel Text May Fail Contrast on Light Video Frames

**Problem:**
Glass panel background adapts to video behind it. On bright video frames (outdoor scenes, windows), text contrast may drop below 4.5:1.

**Current:**
```css
.careers-hero__panel {
  /* Just glass gradient, no scrim */
}
```

**Fix:**
Add subtle scrim to ensure readability:
```css
.careers-hero__panel {
  background:
    rgb(var(--rgb-bark) / 0.15), /* Subtle dark scrim */
    var(--glass-marketing-gradient);
}

html[data-theme="dark"] .careers-hero__panel {
  background:
    rgb(var(--rgb-black) / 0.2),
    var(--glass-marketing-gradient);
}
```

#### Issue 2.4: Form Validation Not Visible Enough

**Problem:**
Error messages may not have sufficient contrast on glass background.

**Current:**
```css
.field-error {
  color: var(--color-danger);
  /* May blend into glass gradient */
}
```

**Fix:**
```css
.field-error {
  color: var(--color-danger);
  background: rgb(var(--rgb-danger) / 0.08);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--color-danger);
  margin-top: 0.375rem;
  font-weight: 600;
}

/* Ensure visibility on dark glass */
html[data-theme="dark"] .field-error {
  background: rgb(var(--rgb-danger) / 0.15);
}
```

---

## 3. Index Page (`index.html`)

### ✅ What's Working Well

**Hero:**
- Excellent video background
- Text hierarchy clear
- CTA buttons prominent

**Mobile:**
- Responsive typography
- Touch-friendly buttons
- Safe area insets respected

### ⚠️ Issues Found

#### Issue 3.1: Video Play/Pause Button Too Small

**Current:**
```css
.hero-video-toggle {
  /* Size may be <44px */
}
```

**WCAG 2.5.5 violation if smaller than 44x44px.**

**Fix:**
```css
.hero-video-toggle {
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hero-video-toggle svg {
  width: 20px;
  height: 20px;
}
```

#### Issue 3.2: Hero in Landscape Mobile

**Problem:**
On landscape phones:
- Hero takes >100vh (content pushed offscreen)
- User doesn't see scroll indicator
- Video overlay may be too dark

**Fix:**
```css
@media (max-width: 900px) and (orientation: landscape) {
  .hero {
    min-height: auto;
    padding-top: calc(4.5rem + env(safe-area-inset-top));
    padding-bottom: 2rem;
  }

  .hero-copy h1 {
    font-size: clamp(1.85rem, 4.5vw, 2.35rem);
    /* Smaller in landscape for fit */
  }

  .hero-copy p {
    max-width: 50ch; /* Wider line length OK in landscape */
  }
}
```

#### Issue 3.3: Home Grid Cards Stack Too Early

**Problem:**
3-column grid collapses to 1-column at 680px, but could support 2 columns on tablets.

**Current:**
```css
/* Uses auto-fit minmax, may not be optimal */
```

**Fix:**
```css
.home-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: var(--grid-gap-cards);
}

/* Override for tablet: force 2 columns */
@media (min-width: 680px) and (max-width: 1024px) {
  .home-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## 4. General Cross-Page Issues

### Issue 4.1: Dark Mode Toggle Not Visible

**Problem:**
No user-facing button to toggle dark mode. Users must:
1. Know to use system preference, OR
2. Manually edit localStorage

**Recommendation:**
Add theme toggle to footer (next to language selector):

```html
<!-- Add to footer -->
<button
  type="button"
  class="site-footer__theme-toggle"
  id="alkyme-theme-toggle"
  aria-label="Toggle dark mode"
  aria-pressed="false"
>
  <svg class="theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true">
    <!-- Sun icon for light mode -->
  </svg>
  <svg class="theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true">
    <!-- Moon icon for dark mode -->
  </svg>
</button>
```

```css
.site-footer__theme-toggle {
  min-width: 44px;
  min-height: 44px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.site-footer__theme-toggle:hover {
  background: rgb(var(--rgb-forest) / 0.1);
}

.site-footer__theme-toggle:focus-visible {
  outline: var(--focus-ring);
  outline-offset: 3px;
}

html[data-theme="light"] .theme-toggle__moon {
  display: block;
}

html[data-theme="light"] .theme-toggle__sun {
  display: none;
}

html[data-theme="dark"] .theme-toggle__sun {
  display: block;
}

html[data-theme="dark"] .theme-toggle__moon {
  display: none;
}
```

```javascript
// site-theme.js (add to existing)
document.getElementById('alkyme-theme-toggle')?.addEventListener('click', function() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', next);
  localStorage.setItem('alkyme-theme', next);
  this.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
});
```

### Issue 4.2: Focus Ring Invisible on Some Backgrounds

**Problem:**
Default forest green focus ring not visible on:
- Dark green gradients (forest-moss)
- Glass with green tints
- Carousel dots

**Fix:**
Already added in tokens:
```css
--focus-ring-shadow: 0 0 0 4px rgb(var(--rgb-white) / 0.3);
```

**But need to apply in components:**
```css
/* Add to all interactive elements on complex backgrounds */
.carousel-dot:focus-visible,
.glass--interactive:focus-visible {
  outline: var(--focus-ring);
  box-shadow: var(--focus-ring-shadow); /* Adds white halo */
}
```

### Issue 4.3: Safe Area Insets Not Applied Everywhere

**Problem:**
Some pages missing safe area insets for notched devices.

**Pages affected:**
- `ai.html` (check hero padding)
- `contact.html` (check form positioning)

**Fix:**
```css
/* Apply to all hero sections */
.hero,
.about-carousel-section,
.careers-hero,
.contact-hero {
  padding-top: calc(5.5rem + env(safe-area-inset-top, 0px));
  padding-bottom: max(3rem, env(safe-area-inset-bottom, 0px));
}

/* Apply to fixed footer */
.site-footer {
  padding-bottom: max(2rem, env(safe-area-inset-bottom, 0px));
}
```

---

## 5. Recommended Testing Matrix

### Desktop Browsers

| Browser | Version | Light Mode | Dark Mode | Notes |
|---------|---------|------------|-----------|-------|
| Chrome | Latest | ✅ | ✅ | Primary target |
| Safari | Latest | ⚠️ Test | ⚠️ Test | Webkit quirks |
| Firefox | Latest | ✅ | ✅ | Backdrop-filter support |
| Edge | Latest | ✅ | ✅ | Chromium-based |

### Mobile Devices

| Device | Viewport | Portrait | Landscape | Dark Mode | Priority |
|--------|----------|----------|-----------|-----------|----------|
| iPhone SE | 375x667 | ⚠️ Test | ⚠️ Test | ✅ | High |
| iPhone 14 Pro | 393x852 | ✅ | ⚠️ Test | ✅ | Critical |
| iPad Mini | 768x1024 | ⚠️ Test | ⚠️ Test | ✅ | Medium |
| Galaxy S21 | 360x800 | ⚠️ Test | ⚠️ Test | ✅ | Medium |
| Pixel 7 | 412x915 | ✅ | ⚠️ Test | ✅ | Medium |

### Accessibility Testing

| Tool | Test | Status |
|------|------|--------|
| axe DevTools | Automated scan | ⚠️ Run |
| WAVE | Color contrast | ⚠️ Run |
| Lighthouse | Full audit | ⚠️ Run |
| VoiceOver | Screen reader | ⚠️ Manual |
| NVDA | Screen reader | ⚠️ Manual |
| Keyboard-only | Tab navigation | ⚠️ Manual |

---

## 6. Implementation Priority

### Priority 1 (Critical - Fix Before Launch)

1. **Touch target sizes** - All buttons/controls 44x44px minimum
2. **About meta description** - Remove "AI venture studio"
3. **Carousel keyboard navigation** - Add dots or improve prev/next
4. **Focus ring visibility** - Add shadow halo on complex backgrounds
5. **Video play/pause sizing** - Meet touch target minimum

### Priority 2 (High - Fix This Sprint)

6. **Landscape mobile layouts** - Careers flip card, home hero, about carousel
7. **Video blur reduction** - Mobile performance optimization
8. **Grid responsive behavior** - Home cards, about sections
9. **Form validation visibility** - Contrast on glass backgrounds
10. **Dark mode toggle UI** - User-facing theme switcher

### Priority 3 (Medium - Next Sprint)

11. **Safe area insets** - Apply consistently across pages
12. **Glass panel contrast** - Add scrim where needed
13. **Carousel dots** - Better keyboard/screen reader UX
14. **Name grid breakpoints** - Fix iPad Mini layout
15. **Focus indicators** - Enhance on all interactive glass

### Priority 4 (Nice to Have)

16. **Reduced motion** - Test all animations respect preference
17. **Reduced transparency** - Verify glass fallbacks work
18. **High contrast mode** - Windows high contrast support
19. **Print styles** - About/legal pages should print well
20. **RTL support** - For future Arabic/Hebrew translations

---

## 7. Page-Specific Implementation Checklist

### For Each Page:

- [ ] Test at 375px (iPhone SE portrait)
- [ ] Test at 393px (iPhone 14 Pro portrait)
- [ ] Test at 852px wide (iPhone landscape)
- [ ] Test at 768px (iPad Mini portrait)
- [ ] Test at 1024px (iPad landscape)
- [ ] Test at 1280px (laptop)
- [ ] Test at 1440px+ (desktop)
- [ ] Toggle dark mode, verify all content readable
- [ ] Navigate entire page with keyboard only (Tab, Enter, Space, Arrows)
- [ ] Enable VoiceOver, verify all content announced
- [ ] Run Lighthouse, target >90 performance, >95 accessibility
- [ ] Check Network tab for layout shifts (CLS <0.1)
- [ ] Enable reduced motion, verify animations pause
- [ ] Enable reduced transparency, verify glass has solid fallback
- [ ] Test on real iPhone (not just emulator)
- [ ] Test on real Android device

---

**Document Version:** 1.0
**Last Updated:** April 2026
**Next Review:** After Priority 1-2 fixes complete
