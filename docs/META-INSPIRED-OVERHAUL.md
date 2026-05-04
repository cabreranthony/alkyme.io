# Meta-Inspired UX/UI Overhaul Specification
**Alkymē Marketing Site — Production-Grade Design System Enhancement**

Date: 2026-04-12
Status: Implementation Ready
Approach: Meta Careers + AI.Meta.com design patterns adapted to Alkymē brand

---

## Executive Summary

Transform Alkymē's marketing site with Meta-level sophistication while preserving brand identity (forest green, eggshell, bark, dew, moss). Focus on **subtle glassmorphism**, **layered depth system**, **sophisticated micro-animations**, and **enterprise-grade token architecture**.

**Core Principles (Meta-inspired):**
- Restrained glass usage (overlays, panels, not everything)
- Multi-tier elevation system (6 shadow levels)
- Layered transparency instead of solid surfaces
- Intentional spacing rhythm (modular 4px/8px system)
- Sophisticated easing curves for motion
- Accessibility-first (WCAG 2.1 AA maintained)

---

## Part 1: Enhanced Token System

### 1.1 Shadow Elevation System (Meta Pattern)

Add 6-tier shadow system to `alkyme-tokens.css`:

```css
/* Shadow system: subtle → dramatic elevation */
--shadow-1: 0 1px 2px rgb(var(--rgb-bark) / 0.04);
--shadow-2: 0 2px 4px rgb(var(--rgb-bark) / 0.08);
--shadow-3: 0 4px 8px rgb(var(--rgb-bark) / 0.10);
--shadow-4: 0 8px 16px rgb(var(--rgb-bark) / 0.12);
--shadow-5: 0 12px 28px rgb(var(--rgb-bark) / 0.15);
--shadow-6: 0 16px 48px rgb(var(--rgb-bark) / 0.20);

/* Card elevations */
--card-shadow-rest: var(--shadow-2);
--card-shadow-hover: var(--shadow-5);
--card-shadow-elevated: var(--shadow-6);

/* Dark mode adjustments */
html[data-theme="dark"] {
  --shadow-1: 0 1px 2px rgb(var(--rgb-black) / 0.12);
  --shadow-2: 0 2px 4px rgb(var(--rgb-black) / 0.16);
  --shadow-3: 0 4px 8px rgb(var(--rgb-black) / 0.20);
  --shadow-4: 0 8px 16px rgb(var(--rgb-black) / 0.24);
  --shadow-5: 0 12px 28px rgb(var(--rgb-black) / 0.28);
  --shadow-6: 0 16px 48px rgb(var(--rgb-black) / 0.35);
}
```

### 1.2 Overlay System (Meta Pattern)

```css
/* Narrative overlays for readability over images */
--overlay-dark: rgba(var(--rgb-bark), 0.4);
--overlay-dark-gradient: linear-gradient(
  180deg,
  rgba(var(--rgb-bark), 0) 0%,
  rgba(var(--rgb-bark), 0.6) 100%
);
--overlay-light: rgba(var(--rgb-eggshell), 0.4);
--overlay-light-gradient: linear-gradient(
  180deg,
  rgba(var(--rgb-eggshell), 0) 0%,
  rgba(var(--rgb-eggshell), 0.9) 100%
);

/* Interactive overlays */
--hover-overlay: rgba(var(--rgb-forest), 0.05);
--press-overlay: rgba(var(--rgb-forest), 0.10);
--focus-overlay: rgba(var(--rgb-dew), 0.12);
```

### 1.3 Enhanced Glass System

```css
/* Glass tiers: subtle → prominent */
--glass-bg-subtle: rgba(var(--rgb-white), 0.70);
--glass-bg-medium: rgba(var(--rgb-white), 0.80);
--glass-bg-strong: rgba(var(--rgb-white), 0.90);

--glass-blur-subtle: blur(12px) saturate(140%);
--glass-blur-medium: blur(20px) saturate(160%);
--glass-blur-strong: blur(32px) saturate(180%);

--glass-border-subtle: 1px solid rgba(var(--rgb-dew), 0.10);
--glass-border-medium: 1px solid rgba(var(--rgb-dew), 0.16);
--glass-border-strong: 1px solid rgba(var(--rgb-dew), 0.24);

/* Dark mode glass */
html[data-theme="dark"] {
  --glass-bg-subtle: rgba(var(--rgb-bark), 0.75);
  --glass-bg-medium: rgba(var(--rgb-bark), 0.85);
  --glass-bg-strong: rgba(var(--rgb-bark), 0.92);
}
```

### 1.4 Animation Timing System (Meta Easing)

```css
/* Duration tiers */
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-medium: 350ms;
--duration-slow: 500ms;
--duration-extra-slow: 800ms;

/* Easing curves (Meta-inspired) */
--ease-soft: cubic-bezier(0.08, 0.52, 0.52, 1);
--ease-strong: cubic-bezier(0.12, 0.8, 0.32, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);

/* Context-specific */
--transition-card: transform var(--duration-medium) var(--ease-soft),
                    box-shadow var(--duration-medium) var(--ease-soft),
                    opacity var(--duration-fast) var(--ease-soft);
--transition-glass: background var(--duration-medium) var(--ease-soft),
                    backdrop-filter var(--duration-medium) var(--ease-soft),
                    border-color var(--duration-fast) var(--ease-soft);
```

### 1.5 Spacing System (Modular 4px base)

```css
/* Spacing scale */
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */

/* Component-specific rhythm */
--card-padding-compact: var(--space-md) var(--space-lg);
--card-padding-comfortable: var(--space-lg) var(--space-xl);
--section-spacing: clamp(var(--space-3xl), 8vw, 6rem);
```

---

## Part 2: Refined Glass System

### 2.1 Glass Component Classes (in `site-marketing-base.css`)

**Replace existing `.glass` system with Meta-inspired approach:**

```css
/* Base glass surface */
.glass {
  position: relative;
  background: var(--glass-bg-medium);
  backdrop-filter: var(--glass-blur-medium);
  -webkit-backdrop-filter: var(--glass-blur-medium);
  border: var(--glass-border-medium);
  border-radius: var(--radius-media-lg);
  box-shadow: var(--card-shadow-rest),
              0 0 0 1px rgba(var(--rgb-dew), 0.06) inset;
  transition: var(--transition-glass);
}

/* Subtle variant (for layered cards, secondary panels) */
.glass--subtle {
  background: var(--glass-bg-subtle);
  backdrop-filter: var(--glass-blur-subtle);
  -webkit-backdrop-filter: var(--glass-blur-subtle);
  border: var(--glass-border-subtle);
  box-shadow: var(--shadow-1);
}

/* Strong variant (for primary CTAs, hero panels) */
.glass--strong {
  background: var(--glass-bg-strong);
  backdrop-filter: var(--glass-blur-strong);
  -webkit-backdrop-filter: var(--glass-blur-strong);
  border: var(--glass-border-strong);
  box-shadow: var(--card-shadow-elevated);
}

/* Interactive glass (clickable cards) */
.glass--interactive {
  cursor: pointer;
  transition: var(--transition-card);
}

.glass--interactive:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-shadow-hover),
              0 0 0 1px rgba(var(--rgb-dew), 0.12) inset;
  background: rgba(var(--rgb-white), 0.85);
}

.glass--interactive:active {
  transform: translateY(-1px);
  box-shadow: var(--card-shadow-rest);
  transition-duration: var(--duration-fast);
}

.glass--interactive:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 3px;
  transform: translateY(-3px);
}

/* Stacked glass (for layered overlays) */
.glass--stacked {
  box-shadow: var(--shadow-3),
              0 0 0 1px rgba(var(--rgb-white), 0.20) inset;
  z-index: 1;
}

/* Accessibility: reduce transparency */
@media (prefers-reduced-transparency: reduce) {
  .glass,
  .glass--subtle,
  .glass--strong {
    background: var(--white);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  html[data-theme="dark"] .glass,
  html[data-theme="dark"] .glass--subtle,
  html[data-theme="dark"] .glass--strong {
    background: rgb(var(--rgb-bark) / 0.95);
  }
}
```

### 2.2 When to Use Glass vs. Solid

**Use Glass (.glass variants):**
- Topbar/navbar (already implemented)
- Floating panels over imagery (AI data practices card, CTA cards)
- Modal dialogs and overlays
- Secondary navigation elements
- Tooltips and popovers

**Keep Solid (no glass):**
- Primary content cards (principles-card, studio-box remain opaque)
- Text-heavy sections
- Footer
- Form inputs
- High-density data tables

---

## Part 3: Enhanced Card System

### 3.1 Refined Solid Cards (site-home.css)

**Update `.principles-card` with Meta elevation:**

```css
.principles-card {
  margin: 0;
  padding: var(--card-padding-comfortable);
  background: var(--white);
  border: 1px solid rgba(var(--rgb-dew), 0.12);
  border-radius: var(--radius-media-lg);
  box-shadow: var(--card-shadow-rest);
  transition: var(--transition-card);
  contain: paint layout;
}

.principles-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
  border-color: rgba(var(--rgb-forest), 0.20);
}

.principles-card:active {
  transform: translateY(-2px);
  box-shadow: var(--card-shadow-rest);
  transition-duration: var(--duration-fast);
}

.principles-card--featured {
  background: linear-gradient(
    135deg,
    var(--white) 0%,
    rgba(var(--rgb-dew), 0.04) 100%
  );
  border-color: rgba(var(--rgb-forest), 0.14);
  box-shadow: var(--shadow-3);
}

.principles-card--featured:hover {
  box-shadow: var(--shadow-6);
  border-color: rgba(var(--rgb-forest), 0.28);
}

/* Dark mode */
html[data-theme="dark"] .principles-card {
  background: rgba(var(--rgb-white), 0.06);
  border-color: rgba(var(--rgb-dew), 0.14);
  box-shadow: var(--shadow-2);
}

html[data-theme="dark"] .principles-card:hover {
  background: rgba(var(--rgb-white), 0.08);
  box-shadow: var(--shadow-5);
}
```

### 3.2 Enhanced Studio Boxes (site-home.css)

**Add layered overlay system to `.studio-box`:**

```css
.studio-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(48vw, 420px);
  border-radius: var(--radius-media-lg);
  overflow: hidden;
  box-shadow: var(--card-shadow-rest);
  transition: var(--transition-card);
  contain: paint layout;
}

.studio-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--overlay-dark-gradient);
  z-index: 1;
  transition: opacity var(--duration-medium) var(--ease-soft);
}

.studio-box:hover::before {
  opacity: 0.85;
}

.studio-box:hover {
  transform: translateY(-4px) scale(1.005);
  box-shadow: var(--card-shadow-hover);
}

.studio-box__inner {
  position: relative;
  z-index: 2;
  padding: var(--card-padding-comfortable);
  color: var(--eggshell-sky);
}

/* Remove old .studio-box__scrim (now handled by ::before) */
```

---

## Part 4: Hero Section Enhancements

### 4.1 Layered Hero Overlay System

**Update hero overlays in `site-home.css`:**

```css
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

/* Additional grain texture for Meta-style depth */
.hero-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.5;
  mix-blend-mode: overlay;
  pointer-events: none;
}

html[data-theme="dark"] .hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(var(--rgb-black), 0) 0%,
    rgba(var(--rgb-black), 0.4) 40%,
    rgba(var(--rgb-black), 0.8) 100%
  );
}
```

### 4.2 Glass Hero Panel (for careers/AI pages)

**Add optional glass panel variant for hero content:**

```css
.hero-panel--glass {
  background: var(--glass-bg-strong);
  backdrop-filter: var(--glass-blur-strong);
  -webkit-backdrop-filter: var(--glass-blur-strong);
  border: var(--glass-border-strong);
  border-radius: var(--radius-media-lg);
  box-shadow: var(--shadow-6);
  padding: var(--card-padding-comfortable);
  max-width: 42rem;
}
```

---

## Part 5: Sophisticated Micro-Animations

### 5.1 Button Enhancements (site-chrome.css)

```css
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  font-family: var(--type-ui-family);
  font-size: var(--type-button-size);
  font-weight: var(--type-button-weight);
  line-height: 1.2;
  padding: 12px 24px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  transition: var(--transition-card);
}

/* Ripple effect on click */
.button::before {
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
}

.button:active::before {
  transform: scale(2);
  opacity: 1;
  transition-duration: 0s;
}

.button-primary {
  background: linear-gradient(
    135deg,
    var(--button-primary-bg) 0%,
    var(--forest) 100%
  );
  color: var(--button-primary-fg);
  border-color: var(--button-primary-border-color);
  box-shadow: var(--shadow-2),
              0 0 0 1px rgba(var(--rgb-white), 0.10) inset;
}

.button-primary:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: var(--shadow-5),
              0 0 0 1px rgba(var(--rgb-white), 0.16) inset;
  filter: brightness(1.08);
}

.button-primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: var(--shadow-1);
  filter: brightness(1.0);
  transition-duration: var(--duration-fast);
}

.button-secondary {
  background: var(--white);
  color: var(--forest);
  border: 1px solid rgba(var(--rgb-forest), 0.24);
  box-shadow: var(--shadow-1);
}

.button-secondary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--forest);
  opacity: 0;
  transition: opacity var(--duration-medium) var(--ease-soft);
  z-index: -1;
}

.button-secondary:hover {
  color: var(--eggshell-sky);
  border-color: var(--forest);
  transform: translateY(-2px);
  box-shadow: var(--shadow-4);
}

.button-secondary:hover::after {
  opacity: 1;
}

.button-secondary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-1);
}
```

### 5.2 Link Micro-Animations

```css
/* Enhanced nav links */
.topbar .nav a {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.6rem 1rem;
  border-radius: var(--radius);
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  overflow: hidden;
  transition: var(--transition-card);
}

.topbar .nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--forest);
  transform: translateX(-50%);
  transition: width var(--duration-medium) var(--ease-expo-out);
}

.topbar .nav a:hover::before {
  width: calc(100% - 2rem);
}

.topbar .nav a:hover {
  background-color: var(--hover-overlay);
  color: var(--text);
  transform: translateY(-1px);
}

.topbar .nav a[aria-current="page"] {
  font-weight: 700;
  color: var(--text);
}

.topbar .nav a[aria-current="page"]::before {
  width: calc(100% - 2rem);
  background: var(--accent-on-canvas);
}
```

---

## Part 6: Typography & Spacing Refinements

### 6.1 Enhanced Type Scale

**Add to `alkyme-tokens.css`:**

```css
/* Type scale (modular 1.25 ratio) */
--type-scale-xs: 0.8rem;      /* 12.8px */
--type-scale-sm: 0.875rem;    /* 14px */
--type-scale-base: 1rem;      /* 16px */
--type-scale-md: 1.125rem;    /* 18px */
--type-scale-lg: 1.25rem;     /* 20px */
--type-scale-xl: 1.5rem;      /* 24px */
--type-scale-2xl: 1.875rem;   /* 30px */
--type-scale-3xl: 2.25rem;    /* 36px */
--type-scale-4xl: 3rem;       /* 48px */
--type-scale-5xl: 3.75rem;    /* 60px */

/* Line heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Letter spacing */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### 6.2 Improved Heading Hierarchy

**Add to `site-marketing-base.css`:**

```css
h1, .h1 {
  font-family: var(--font-display);
  font-size: clamp(var(--type-scale-3xl), 6vw, var(--type-scale-5xl));
  font-weight: 600;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin: 0 0 var(--space-lg);
}

h2, .h2 {
  font-family: var(--font-display);
  font-size: clamp(var(--type-scale-2xl), 4.5vw, var(--type-scale-4xl));
  font-weight: 600;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin: 0 0 var(--space-md);
}

h3, .h3 {
  font-family: var(--font-display);
  font-size: clamp(var(--type-scale-xl), 3vw, var(--type-scale-2xl));
  font-weight: 600;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  margin: 0 0 var(--space-md);
}

.eyebrow {
  font-family: var(--font-ui);
  font-size: var(--type-scale-xs);
  font-weight: 700;
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--accent-on-canvas);
  margin: 0 0 var(--space-sm);
  opacity: 0.92;
}

.section-head {
  margin-bottom: var(--space-2xl);
}

.section-head--center {
  text-align: center;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}
```

---

## Part 7: Implementation Priority

### Phase 1: Foundation (Tokens & Base System) — 3-4 hours
1. Add enhanced tokens to `alkyme-tokens.css` (shadows, overlays, animation)
2. Update glass system in `site-marketing-base.css`
3. Implement new button animations in `site-chrome.css`
4. Add typography enhancements

### Phase 2: Card & Surface Refinements — 2-3 hours
5. Update `.principles-card` with elevation system
6. Enhance `.studio-box` with layered overlays
7. Refine `.hero-bridge-card` with micro-animations
8. Update footer social icon hover states

### Phase 3: Hero & Layout Enhancements — 2-3 hours
9. Add layered hero overlay system (all hero sections)
10. Implement optional glass hero panels
11. Add grain texture overlay for depth
12. Refine spacing rhythm across all sections

### Phase 4: Interactive Enhancements — 2-3 hours
13. Add nav link underline animations
14. Implement button ripple effects
15. Enhance form input focus states
16. Add carousel card hover animations

### Phase 5: Testing & Polish — 1-2 hours
17. Test reduced motion/transparency modes
18. Verify WCAG 2.1 AA compliance
19. Cross-browser testing (Safari, Firefox, Chrome)
20. Performance audit (Core Web Vitals)

**Total estimated time: 10-15 hours**

---

## Part 8: Brand Color Preservation Strategy

### Where to Keep Alkymē Colors Strict:
- **Primary CTA backgrounds**: Forest green gradient
- **Accent elements**: Dew (teal accent) for highlights
- **Text colors**: Bark (dark brown) for body, Eggshell for light text
- **Focus rings**: Forest green outline
- **Footer**: Keep current color scheme

### Where Glass Can Deviate (Meta-inspired neutrality):
- **Glass surfaces**: White/neutral with subtle green tint allowed
- **Overlays**: Neutral dark/light overlays (not forced green)
- **Shadows**: Neutral bark-based shadows (current approach is good)
- **Borders**: Dew-based borders work well (maintain current)

### Strategic Gradient Opportunities:
```css
/* Subtle green tint for glass surfaces */
.glass--brand-tint {
  background: linear-gradient(
    135deg,
    rgba(var(--rgb-white), 0.82) 0%,
    rgba(var(--rgb-dew), 0.08) 100%
  );
}

/* Hero gradient overlay with brand warmth */
.hero-overlay--warm {
  background: linear-gradient(
    180deg,
    rgba(var(--rgb-bark), 0) 0%,
    rgba(var(--rgb-moss), 0.15) 40%,
    rgba(var(--rgb-bark), 0.75) 100%
  );
}
```

---

## Part 9: Accessibility Compliance

### Maintain WCAG 2.1 AA:
- Minimum 4.5:1 contrast for text (already implemented)
- 44x44px touch targets (already implemented)
- Glass surfaces maintain readability in reduced transparency mode
- Focus indicators 2px solid forest with 2px offset
- Keyboard navigation fully supported
- ARIA labels for all interactive elements

### Enhanced Preferences Support:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .glass,
  .glass--subtle,
  .glass--strong {
    background: var(--white);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

@media (prefers-contrast: high) {
  .glass {
    border-width: 2px;
    border-color: var(--forest);
  }

  .button {
    outline: 2px solid currentColor;
    outline-offset: -2px;
  }
}
```

---

## Part 10: Performance Considerations

### Optimization Strategies:
1. **CSS containment**: `contain: paint layout` on cards
2. **Will-change**: Only on interactive elements during transition
3. **Backdrop-filter fallbacks**: Solid backgrounds for unsupported browsers
4. **GPU acceleration**: `transform: translateZ(0)` for smooth animations
5. **Lazy animations**: Intersection Observer for reveal animations

### Meta-Inspired Code Quality:
- Token-first architecture (no hardcoded values)
- Minimal specificity (BEM-style classes)
- Logical property names for i18n support
- CSS custom properties for runtime theme switching
- Progressive enhancement approach

---

## Summary

This overhaul brings **Meta-level sophistication** to Alkymē's site while maintaining brand identity:

✅ **Subtle glass usage** (not overdone)
✅ **6-tier shadow elevation** system
✅ **Layered transparency** instead of solid surfaces
✅ **Sophisticated easing curves** for micro-animations
✅ **Modular spacing rhythm** (4px/8px base)
✅ **Enhanced accessibility** support
✅ **Brand colors preserved** in key areas
✅ **Production-grade token architecture**

Ready to implement phase-by-phase. Each phase is tested independently before moving forward.
