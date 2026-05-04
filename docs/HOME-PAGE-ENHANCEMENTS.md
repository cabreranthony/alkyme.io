# Home Page (index.html) Meta-Level Enhancements
**Priority Implementation Plan**

Date: 2026-04-12
Based on: Comprehensive UX/UI Audit
Current Quality: 6.8/10 → Target: 9.8/10

---

## Implementation Strategy

**Phase 1: Foundation** (Immediate - highest ROI)
- CSS refinements using new tokens
- No HTML structure changes
- Focus on visual polish and micro-interactions
- Est. time: 3-4 hours

**Phase 2: Interactive Enhancements** (Next)
- Add missing states (loading, skeleton, focus)
- Enhance existing interactions
- Minimal HTML changes
- Est. time: 2-3 hours

**Phase 3: Advanced Polish** (Final)
- Ambient animations
- Progressive disclosure
- Performance optimization
- Est. time: 2-3 hours

---

## Phase 1: CSS Foundation Enhancements

### 1.1 Hero Section Refinements

**File**: `site-home.css`
**Lines**: Approximately 1-200 (hero styles)

```css
/* Enhanced hero with better overlay system */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(var(--rgb-bark), 0) 0%,
    rgba(var(--rgb-bark), 0.3) 40%,
    rgba(var(--rgb-bark), 0.7) 100%
  );
  z-index: 1;
  pointer-events: none;
}

/* Add subtle grain texture for Meta-style depth */
.hero-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.5;
  mix-blend-mode: overlay;
  pointer-events: none;
}

/* Hero video toggle enhancement */
.hero-video-toggle {
  position: absolute;
  bottom: var(--space-xl);
  right: var(--space-xl);
  z-index: 3;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--rgb-white), 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(var(--rgb-white), 0.2);
  border-radius: 50%;
  color: var(--eggshell-sky);
  cursor: pointer;
  transition: var(--transition-card);
}

.hero-video-toggle:hover {
  transform: scale(1.1);
  background: rgba(var(--rgb-white), 0.25);
  box-shadow: var(--shadow-4);
}

.hero-video-toggle:active {
  transform: scale(0.95);
}

.hero-video-toggle.is-paused {
  animation: pulse-attention 2s ease-in-out infinite;
}

@keyframes pulse-attention {
  0%, 100% { box-shadow: 0 0 0 0 rgba(var(--rgb-eggshell), 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(var(--rgb-eggshell), 0); }
}

/* Hero content z-index fix */
.hero-bottom {
  position: relative;
  z-index: 2;
  padding: var(--space-2xl);
}

.hero-copy {
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--space-xl);
}
```

### 1.2 Hero Bridge Cards Enhancement

```css
/* Enhanced bridge cards with glass effect */
.hero-bridge-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid rgba(var(--rgb-dew), 0.12);
  border-radius: var(--radius-media-lg);
  overflow: hidden;
  box-shadow: var(--card-shadow-rest);
  transition: var(--transition-card);
  contain: paint layout;
}

.hero-bridge-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--card-shadow-hover);
  border-color: rgba(var(--rgb-forest), 0.18);
}

.hero-bridge-card:active {
  transform: translateY(-3px);
  transition-duration: var(--duration-fast);
}

.hero-bridge-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.hero-bridge-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-soft);
}

.hero-bridge-card:hover .hero-bridge-card__media img {
  transform: scale(1.05);
}

.hero-bridge-card__content {
  padding: var(--card-padding-comfortable);
}

.hero-bridge-card__eyebrow {
  font-family: var(--font-ui);
  font-size: var(--type-eyebrow-size);
  font-weight: var(--type-eyebrow-weight);
  letter-spacing: var(--type-eyebrow-track);
  text-transform: uppercase;
  color: var(--accent-on-canvas);
  margin: 0 0 var(--space-sm);
  opacity: 0.92;
}

.hero-bridge-card__title {
  font-family: var(--font-ui);
  font-size: var(--type-h3-size-fluid);
  font-weight: var(--type-heading-ui-weight);
  letter-spacing: var(--type-heading-ui-track);
  line-height: var(--type-h-ui-line);
  color: var(--text);
  margin: 0 0 var(--space-sm);
}

.hero-bridge-card__text {
  font-size: var(--type-body-size);
  line-height: var(--type-body-line);
  color: var(--muted);
  margin: 0;
}
```

### 1.3 Carousel Enhancement

```css
/* Studio carousel with better spacing and interactions */
.studio-carousel {
  position: relative;
  margin-top: var(--section-spacing);
}

.about-carousel-viewport {
  overflow: hidden;
  border-radius: var(--radius-media-lg);
}

.studio-carousel-card {
  padding: var(--card-padding-comfortable);
  background: var(--white);
  border: 1px solid rgba(var(--rgb-dew), 0.10);
  border-radius: var(--radius-media);
  box-shadow: var(--card-shadow-rest);
  transition: var(--transition-card);
}

.studio-carousel-card:hover {
  box-shadow: var(--shadow-3);
  border-color: rgba(var(--rgb-forest), 0.14);
}

/* Carousel controls */
.about-carousel-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.about-carousel-prev,
.about-carousel-next {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--rgb-forest), 0.08);
  border: 1px solid rgba(var(--rgb-forest), 0.12);
  color: var(--forest);
  cursor: pointer;
  transition: var(--transition-card);
}

.about-carousel-prev:hover,
.about-carousel-next:hover {
  background: var(--forest);
  color: var(--eggshell-sky);
  transform: scale(1.05);
}

.about-carousel-prev:active,
.about-carousel-next:active {
  transform: scale(0.95);
}

.about-carousel-prev:disabled,
.about-carousel-next:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
}

/* Enhanced dots */
.about-carousel-dots {
  display: flex;
  gap: var(--space-xs);
  align-items: center;
}

.about-carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(var(--rgb-forest), 0.2);
  border: none;
  cursor: pointer;
  transition: all var(--duration-medium) var(--ease-strong);
  position: relative;
}

.about-carousel-dot.is-active {
  width: 32px;
  border-radius: 4px;
  background: var(--forest);
}

.about-carousel-dot:hover:not(.is-active) {
  background: rgba(var(--rgb-forest), 0.4);
  transform: scale(1.2);
}

.about-carousel-dot:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 2px;
}
```

### 1.4 Newsletter Band Polish

```css
/* Enhanced newsletter form */
.newsletter-band {
  position: relative;
  padding: var(--section-spacing) 0;
  background: var(--surface-newsletter);
  overflow: hidden;
}

/* Animated blob background */
.newsletter-band__blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
  filter: blur(60px);
  animation: blob-float 20s ease-in-out infinite;
}

.newsletter-band__blob--a {
  animation-delay: 0s;
}

.newsletter-band__blob--b {
  animation-delay: 5s;
}

.newsletter-band__blob--c {
  animation-delay: 10s;
}

.newsletter-band__blob--d {
  animation-delay: 15s;
}

@keyframes blob-float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -20px) scale(1.05);
  }
  50% {
    transform: translate(-10px, 10px) scale(0.95);
  }
  75% {
    transform: translate(10px, 20px) scale(1.02);
  }
}

/* Form field enhancements */
.newsletter-band__field {
  position: relative;
  margin-bottom: var(--space-lg);
}

.newsletter-band__label {
  display: block;
  font-family: var(--font-ui);
  font-size: var(--type-caption-size);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space-xs);
  letter-spacing: 0.02em;
}

.newsletter-band__input,
.newsletter-band__select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: var(--font-ui);
  font-size: var(--type-body-size);
  color: var(--text);
  background: var(--white);
  border: 1px solid rgba(var(--rgb-forest), 0.18);
  border-radius: var(--radius);
  transition: border-color var(--duration-fast) var(--ease-soft),
              box-shadow var(--duration-fast) var(--ease-soft),
              background var(--duration-fast) var(--ease-soft);
}

.newsletter-band__input:hover,
.newsletter-band__select:hover {
  border-color: rgba(var(--rgb-forest), 0.28);
  background: rgba(var(--rgb-dew), 0.02);
}

.newsletter-band__input:focus,
.newsletter-band__select:focus {
  outline: none;
  border-color: var(--forest);
  box-shadow: 0 0 0 4px rgba(var(--rgb-forest), 0.08);
  background: var(--white);
}

.newsletter-band__input[aria-invalid="true"],
.newsletter-band__select[aria-invalid="true"] {
  border-color: var(--color-danger);
  box-shadow: 0 0 0 4px rgba(var(--rgb-danger), 0.08);
}

.newsletter-band__error {
  display: block;
  font-size: var(--type-caption-size);
  color: var(--color-danger);
  margin-top: var(--space-xs);
  font-weight: 500;
}

/* Submit button enhancement */
.newsletter-band__submit {
  width: 100%;
  min-height: 48px;
  margin-top: var(--space-lg);
}

.newsletter-band__submit:disabled {
  cursor: wait;
  opacity: 0.7;
}

.newsletter-band__submit.is-loading::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(var(--rgb-white), 0.3) 50%,
    transparent 100%
  );
  animation: button-loading 1.5s infinite;
}

@keyframes button-loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

---

## Phase 2: Interactive Enhancements (HTML + CSS)

### 2.1 Add Eyebrows to Bridge Cards

**HTML changes needed** in `index.html` lines 109-148:

```html
<!-- Before each h3, add: -->
<p class="hero-bridge-card__eyebrow">Phase 1</p>
<h3 class="hero-bridge-card__title">Originate</h3>

<!-- Repeat for "Phase 2" (Build) and "Phase 3" (Launch) -->
```

### 2.2 Skeleton Loading States

**Add to `site-marketing-base.css`:**

```css
/* Skeleton loading component */
.skeleton {
  display: block;
  background: linear-gradient(
    90deg,
    rgba(var(--rgb-dew), 0.08) 0%,
    rgba(var(--rgb-dew), 0.14) 50%,
    rgba(var(--rgb-dew), 0.08) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s infinite;
  border-radius: var(--radius);
}

.skeleton--header {
  height: 2.5rem;
  width: 60%;
  margin-bottom: var(--space-md);
}

.skeleton--text {
  height: 1rem;
  width: 100%;
  margin-bottom: var(--space-sm);
}

.skeleton--text:last-child {
  width: 80%;
}

.skeleton--image {
  aspect-ratio: 16 / 10;
  width: 100%;
}

.skeleton--card {
  padding: var(--card-padding-comfortable);
  border: 1px solid rgba(var(--rgb-dew), 0.12);
  border-radius: var(--radius-media-lg);
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
    background: rgba(var(--rgb-dew), 0.10);
  }
}
```

### 2.3 Enhanced Focus States

**Add to `site-marketing-base.css`:**

```css
/* Global focus enhancement */
*:focus {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Button focus */
button:focus-visible,
.button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--white),
              0 0 0 5px var(--forest),
              var(--card-shadow-hover);
}

/* Input focus (already enhanced in Phase 1) */

/* Link focus */
a:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Glass element focus */
.glass *:focus-visible {
  outline: var(--focus-ring-on-glass);
  outline-offset: var(--focus-offset);
  box-shadow: var(--focus-ring-on-glass-shadow);
}
```

---

## Phase 3: Advanced Polish

### 3.1 Stagger Reveal Animation

**Update in index.html** script section (lines 935-959):

```javascript
(function () {
  var els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;

  var opts = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1
  };

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !entry.target.classList.contains("is-visible")) {
        entry.target.classList.add("is-visible");

        // Stagger child animations
        var children = entry.target.children;
        Array.from(children).forEach(function(child, index) {
          if (child.classList.contains('hero-bridge-card') ||
              child.classList.contains('principles-card') ||
              child.classList.contains('studio-box')) {
            child.style.transitionDelay = (index * 80) + 'ms';
          }
        });
      }
    });
  }, opts);

  els.forEach(function (el) { io.observe(el); });
})();
```

**Add CSS for stagger:**

```css
.reveal > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-medium) var(--ease-soft),
              transform var(--duration-medium) var(--ease-strong);
}

.reveal.is-visible > * {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal > * {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### 3.2 Ripple Effect Utility

**Add to `site-marketing-base.css`:**

```css
/* Ripple effect utility */
.has-ripple {
  position: relative;
  overflow: hidden;
}

.has-ripple::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(var(--rgb-white), 0.3) 0%,
    transparent 70%
  );
  opacity: 0;
  transform: scale(0);
  transition: transform var(--duration-slow) var(--ease-expo-out),
              opacity var(--duration-fast) ease;
  pointer-events: none;
}

.has-ripple:active::after {
  transform: scale(2.5);
  opacity: 1;
  transition-duration: 0s;
}

@media (prefers-reduced-motion: reduce) {
  .has-ripple::after {
    display: none;
  }
}
```

---

## Summary of Changes

**CSS Files to Modify:**
1. `site-home.css` - Hero, bridge cards, carousel, newsletter
2. `site-marketing-base.css` - Skeleton, focus states, ripple utility

**HTML Files to Modify:**
1. `index.html` - Add eyebrows to bridge cards, enhance reveal script

**JavaScript Enhancements:**
- Stagger animation for reveals
- Better reduced motion support
- Enhanced form loading states

**Tokens Already Available** (from Phase 1):
- Shadow system (`--shadow-1` through `--shadow-6`)
- Spacing tokens (`--space-*`)
- Motion tokens (`--duration-*`, `--ease-*`)
- Glass tokens (`--glass-*`)
- Card tokens (`--card-*`)

---

## Testing Checklist

- [ ] All animations respect `prefers-reduced-motion`
- [ ] Focus states visible on all interactive elements
- [ ] Touch targets minimum 44x44px
- [ ] WCAG 2.1 AA contrast maintained
- [ ] Skeleton states show before content loads
- [ ] Hover states work on desktop
- [ ] Touch states work on mobile
- [ ] Keyboard navigation fully functional
- [ ] Screen reader announces state changes
- [ ] Performance: no jank, smooth 60fps animations

---

## Next: About Page & Other Pages

After completing home page enhancements:
1. Apply same patterns to about.html
2. Enhance careers.html
3. Polish contact.html
4. Upgrade terms.html and privacy.html typography

Each page will receive similar Meta-level sophistication while maintaining brand consistency.
