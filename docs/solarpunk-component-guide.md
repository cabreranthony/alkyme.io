# Solarpunk Component Guide

## Overview

This guide documents the new Solarpunk warm aesthetic components added to the Alkyme design system. These components enable warm, atmospheric, Apple-inspired experiences using terracotta, amber, gold, sage, and wheat color accents.

---

## Component Summary

### New Components Added:
1. **Warm Glass Modifiers** (3 variants)
2. **Product Showcase Component** (Apple-inspired)
3. **Atmospheric Section Backgrounds** (3 variants)
4. **Card Warm Accents** (2 variants)
5. **Button Variants** (3 new CTA styles)
6. **Badge Components** (4 variants)
7. **Feature Grid** (with warm accent support)

**Total Lines Added:** 540 lines
**Before:** 1,306 lines
**After:** 1,846 lines

---

## 1. Warm Glass Modifiers

Apply warm glass effects to any element for atmospheric depth.

### Classes:
- `.glass--warm-amber`
- `.glass--warm-sage`
- `.glass--warm-terracotta`

### Usage:
```html
<!-- Warm amber glass card -->
<div class="card glass--warm-amber">
  <h3>Epoch² AI Platform</h3>
  <p>Build intelligent automation workflows with warm aesthetic.</p>
</div>

<!-- Sage glass header -->
<div class="section-header glass--warm-sage">
  <h2>Sustainable AI Solutions</h2>
</div>

<!-- Terracotta glass banner -->
<div class="cta-section glass--warm-terracotta">
  <h2>Join the Movement</h2>
</div>
```

### Features:
- Automatic backdrop-filter with blur
- Subtle borders for definition
- Full dark mode support
- Responsive across all devices

---

## 2. Product Showcase Component

Apple-inspired product showcase for highlighting Epoch² and Sevā AI products.

### Structure:
```html
<section class="product-showcase">
  <div class="product-showcase__background"></div>
  <div class="container">
    <div class="product-showcase__grid">
      <!-- Content -->
      <div class="product-showcase__content">
        <div class="product-showcase__eyebrow">Epoch² Platform</div>
        <h2 class="product-showcase__title">Build AI That Understands Context</h2>
        <p class="product-showcase__description">
          Transform your workflows with intelligent automation powered by
          context-aware AI agents.
        </p>

        <!-- Stats Grid -->
        <ul class="product-showcase__stats">
          <li class="product-showcase__stat">
            <span class="product-showcase__stat-value">10x</span>
            <span class="product-showcase__stat-label">Faster Deployment</span>
          </li>
          <li class="product-showcase__stat">
            <span class="product-showcase__stat-value">99.9%</span>
            <span class="product-showcase__stat-label">Uptime SLA</span>
          </li>
          <li class="product-showcase__stat">
            <span class="product-showcase__stat-value">24/7</span>
            <span class="product-showcase__stat-label">AI Monitoring</span>
          </li>
        </ul>

        <div class="product-showcase__actions">
          <a href="/epoch2" class="btn btn--terracotta">Explore Epoch²</a>
          <a href="/docs" class="btn btn--secondary">Read Docs</a>
        </div>
      </div>

      <!-- Media -->
      <div class="product-showcase__media">
        <img src="/assets/images/epoch2-dashboard.jpg" alt="Epoch² Dashboard">
      </div>
    </div>
  </div>
</section>
```

### Modifiers:
```html
<!-- Reverse layout (image on left) -->
<section class="product-showcase product-showcase--reverse">
  <!-- Same structure -->
</section>
```

### Features:
- **1.2fr / 1fr grid** for asymmetric visual balance
- Warm atmospheric gradient background
- Terracotta accent colors for stats
- Fully responsive (stacks on mobile)
- Reverse modifier for alternating layouts
- Apple-quality shadows and spacing

---

## 3. Atmospheric Section Backgrounds

Create warm, gradient backgrounds for sections.

### Classes:
- `.section--atmosphere-warm` - Radial amber glow
- `.section--atmosphere-sunrise` - Gold to terracotta gradient
- `.section--atmosphere-earth` - Wheat to white fade

### Usage:
```html
<!-- Warm glow for hero sections -->
<section class="section section--atmosphere-warm">
  <div class="container">
    <h1>Welcome to Alkymē</h1>
    <p>Building the future of sustainable AI.</p>
  </div>
</section>

<!-- Sunrise gradient for impact sections -->
<section class="section section--atmosphere-sunrise">
  <div class="container">
    <h2>Our Impact</h2>
    <!-- Content -->
  </div>
</section>

<!-- Earth-sky for environmental messaging -->
<section class="section section--atmosphere-earth">
  <div class="container">
    <h2>Sustainable Technology</h2>
    <!-- Content -->
  </div>
</section>
```

### Features:
- Subtle, non-intrusive gradients
- Automatic dark mode adjustments
- Isolation context for proper stacking
- Works with all section modifiers

---

## 4. Card Warm Accents

Add warm color accents to cards for visual hierarchy.

### Classes:
- `.card--warm-accent` - Terracotta border and shadow
- `.card--sage-accent` - Sage green border and shadow

### Usage:
```html
<!-- Terracotta accent for Epoch² cards -->
<div class="card card--warm-accent">
  <h3>AI Agent Builder</h3>
  <p>Create custom AI workflows in minutes.</p>
</div>

<!-- Sage accent for sustainability features -->
<div class="card card--sage-accent">
  <h3>Carbon-Neutral Infrastructure</h3>
  <p>Powered by 100% renewable energy.</p>
</div>
```

### Features:
- Warm border colors on hover
- Ambient colored shadows
- Smooth transitions
- Enhanced hover states
- Dark mode compatible

---

## 5. Button Variants

New warm-colored CTA buttons for product differentiation.

### Classes:
- `.btn--terracotta` - Primary warm CTA
- `.btn--amber` - Secondary warm CTA
- `.btn--sage` - Sustainable/eco CTA

### Usage:
```html
<!-- Terracotta for Epoch² CTAs -->
<a href="/epoch2" class="btn btn--terracotta">Try Epoch²</a>

<!-- Amber for general warm CTAs -->
<a href="/ventures" class="btn btn--amber">Explore Ventures</a>

<!-- Sage for sustainability CTAs -->
<a href="/impact" class="btn btn--sage">Our Impact</a>

<!-- Mix with existing buttons -->
<div class="hero__actions">
  <a href="/signup" class="btn btn--terracotta btn--lg">Get Started</a>
  <a href="/learn" class="btn btn--secondary">Learn More</a>
</div>
```

### Features:
- Full hover/active/focus states
- Consistent with existing button system
- Accessible focus rings with matching colors
- Apple-quality micro-interactions
- Dark mode optimized

---

## 6. Badge Components

Small status/category indicators with Solarpunk colors.

### Classes:
- `.badge` - Base badge
- `.badge--terracotta` - Warm product badge
- `.badge--amber` - Premium badge
- `.badge--sage` - Eco/sustainable badge
- `.badge--gold` - Featured badge

### Usage:
```html
<!-- Product badges -->
<span class="badge badge--terracotta">Epoch²</span>
<span class="badge badge--amber">Premium</span>
<span class="badge badge--sage">Carbon Neutral</span>
<span class="badge badge--gold">Featured</span>

<!-- In card headers -->
<div class="card">
  <div style="display: flex; align-items: center; gap: var(--space-sm); margin-bottom: var(--space-md);">
    <span class="badge badge--terracotta">New</span>
    <h3>Latest Feature</h3>
  </div>
  <p>Description goes here.</p>
</div>
```

### Features:
- Pill-shaped design
- Uppercase styling with tracking
- Subtle backgrounds with borders
- Dark mode optimized
- Inline-flex for easy positioning

---

## 7. Feature Grid

Enhanced feature grid with warm accent support.

### Structure:
```html
<div class="feature-grid">
  <!-- Default moss accent -->
  <div class="feature-card">
    <div class="feature-card__icon">
      <svg><!-- icon --></svg>
    </div>
    <h3 class="feature-card__title">Feature Name</h3>
    <p class="feature-card__description">Description text.</p>
  </div>

  <!-- Warm terracotta accent -->
  <div class="feature-card feature-card--warm">
    <div class="feature-card__icon">
      <svg><!-- icon --></svg>
    </div>
    <h3 class="feature-card__title">AI-Powered</h3>
    <p class="feature-card__description">Intelligent automation.</p>
  </div>

  <!-- Sage accent -->
  <div class="feature-card feature-card--sage">
    <div class="feature-card__icon">
      <svg><!-- icon --></svg>
    </div>
    <h3 class="feature-card__title">Sustainable</h3>
    <p class="feature-card__description">Carbon-neutral operations.</p>
  </div>

  <!-- Amber accent -->
  <div class="feature-card feature-card--amber">
    <div class="feature-card__icon">
      <svg><!-- icon --></svg>
    </div>
    <h3 class="feature-card__title">Premium Support</h3>
    <p class="feature-card__description">24/7 expert help.</p>
  </div>
</div>
```

### Modifiers:
- `.feature-card--warm` - Terracotta icon background
- `.feature-card--sage` - Sage icon background
- `.feature-card--amber` - Amber icon background

### Features:
- Auto-fit responsive grid
- Colored icon backgrounds
- Hover lift animations
- Dark mode support
- Stacks on mobile

---

## Dark Mode Support

All components have full dark mode support:

```html
<!-- Automatically adapts when html[data-theme="dark"] is set -->
<div class="card card--warm-accent">
  <!-- Terracotta accent adjusts for dark backgrounds -->
</div>

<button class="btn btn--terracotta">
  <!-- Button contrast maintained in dark mode -->
</button>
```

### Dark Mode Adjustments:
- Reduced opacity for warm glass variants
- Adjusted terracotta/amber/sage colors for better contrast
- Darker card backgrounds with subtle borders
- Maintained readability across all components

---

## Accessibility

All components follow WCAG 2.1 AA standards:

### Focus States:
```css
/* All buttons have visible focus rings */
.btn--terracotta:focus-visible {
  outline: 2px solid var(--terracotta);
  outline-offset: 3px;
  box-shadow: 0 0 0 4px rgb(var(--rgb-terracotta) / 0.2);
}
```

### Reduced Motion:
```css
/* Animations disabled for prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .card--warm-accent:hover {
    transform: none; /* No lift animation */
  }
}
```

### Color Contrast:
- All text meets AA standards (4.5:1 minimum)
- Badge backgrounds adjusted for readability
- Button text has sufficient contrast in all states

---

## Performance

### Optimizations:
- Uses CSS custom properties (no runtime calculation)
- Hardware-accelerated transforms
- Will-change on animated elements
- Minimal repaints/reflows

### Best Practices:
```html
<!-- Lazy load images in product showcases -->
<img src="/assets/images/product.jpg"
     loading="lazy"
     alt="Product screenshot">

<!-- Use appropriate image sizes -->
<img srcset="/assets/images/product-mobile.jpg 640w,
             /assets/images/product-tablet.jpg 1024w,
             /assets/images/product-desktop.jpg 1920w"
     sizes="(max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw">
```

---

## Usage Examples

### Example 1: Epoch² Product Page
```html
<section class="hero hero--compact">
  <div class="container">
    <div class="hero__content">
      <span class="badge badge--terracotta">AI Platform</span>
      <h1 class="hero__title">Epoch²</h1>
      <p class="hero__description">
        Build intelligent workflows with context-aware AI agents.
      </p>
      <div class="hero__actions">
        <a href="/signup" class="btn btn--terracotta btn--lg">Start Building</a>
        <a href="/docs" class="btn btn--secondary">Documentation</a>
      </div>
    </div>
  </div>
</section>

<section class="product-showcase">
  <div class="product-showcase__background"></div>
  <div class="container">
    <div class="product-showcase__grid">
      <!-- Content from structure example above -->
    </div>
  </div>
</section>

<section class="section section--atmosphere-warm">
  <div class="container">
    <div class="feature-grid">
      <div class="feature-card feature-card--warm">
        <div class="feature-card__icon">⚡</div>
        <h3 class="feature-card__title">Lightning Fast</h3>
        <p class="feature-card__description">Deploy agents in seconds.</p>
      </div>
      <!-- More feature cards -->
    </div>
  </div>
</section>
```

### Example 2: Sustainability Section
```html
<section class="section section--atmosphere-earth">
  <div class="container">
    <div class="section-header">
      <span class="badge badge--sage">Impact</span>
      <h2 class="section-header__title">Carbon-Neutral Technology</h2>
      <p class="section-header__description">
        Building AI with environmental responsibility at our core.
      </p>
    </div>

    <div class="split">
      <div>
        <img src="/assets/images/solar-farm.jpg" alt="Renewable energy">
      </div>
      <div class="card card--sage-accent">
        <h3>100% Renewable Energy</h3>
        <p>All our infrastructure runs on solar and wind power.</p>
        <a href="/sustainability" class="btn btn--sage">Learn More</a>
      </div>
    </div>
  </div>
</section>
```

### Example 3: Mixed Accent Cards
```html
<section class="section">
  <div class="container">
    <div class="horizontal-scroll">
      <div class="horizontal-scroll__container">
        <div class="horizontal-scroll__item">
          <div class="card card--warm-accent">
            <span class="badge badge--terracotta">Epoch²</span>
            <h3>AI Agent Platform</h3>
            <p>Build intelligent workflows.</p>
            <a href="/epoch2" class="btn btn--terracotta">Explore</a>
          </div>
        </div>
        <div class="horizontal-scroll__item">
          <div class="card card--sage-accent">
            <span class="badge badge--sage">Sustainable</span>
            <h3>Green Infrastructure</h3>
            <p>Carbon-neutral hosting.</p>
            <a href="/green" class="btn btn--sage">Learn More</a>
          </div>
        </div>
        <!-- More cards -->
      </div>
    </div>
  </div>
</section>
```

---

## Migration Guide

### From Existing Components:

**Old:**
```html
<div class="card">
  <h3>Feature</h3>
  <a href="#" class="btn btn--primary">Learn More</a>
</div>
```

**New (with warm accents):**
```html
<div class="card card--warm-accent">
  <span class="badge badge--terracotta">New</span>
  <h3>Feature</h3>
  <a href="#" class="btn btn--terracotta">Learn More</a>
</div>
```

---

## Token Reference

All components use the following Solarpunk tokens:

### Colors:
- `--terracotta` / `--rgb-terracotta`
- `--amber` / `--rgb-amber`
- `--gold` / `--rgb-gold`
- `--sage` / `--rgb-sage`
- `--wheat` / `--rgb-wheat`

### Gradients:
- `--gradient-warm-glow`
- `--gradient-sunrise`
- `--gradient-earth-sky`

### Glass Effects:
- `--glass-warm-amber`
- `--glass-warm-sage`
- `--glass-warm-terracotta`

See `/assets/css/alkyme-tokens.css` for complete token definitions.

---

## Browser Support

All components tested and supported:
- Chrome 90+ ✓
- Safari 14+ ✓
- Firefox 88+ ✓
- Edge 90+ ✓

### Graceful Degradation:
- Backdrop-filter fallbacks for older browsers
- Transform animations disabled for reduced-motion
- CSS Grid with fallbacks

---

## Questions?

For component questions or feature requests, contact the Alkymē design team.
