# Alkymē Component Library

**Version:** 1.0.0
**Last Updated:** 2026-04-14

A comprehensive, production-ready component system for the Alkymē website. Built with semantic HTML, accessible patterns, and the Alkymē design token system.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Architecture](#architecture)
3. [Design Tokens](#design-tokens)
4. [Layout Components](#layout-components)
5. [Navigation Components](#navigation-components)
6. [Content Components](#content-components)
7. [Interactive Components](#interactive-components)
8. [Media Components](#media-components)
9. [Form Components](#form-components)
10. [Utility Classes](#utility-classes)
11. [JavaScript API](#javascript-api)
12. [Accessibility Guidelines](#accessibility-guidelines)
13. [Best Practices](#best-practices)

---

## Quick Start

### Installation

```html
<!-- Required Core Files (in order) -->
<link rel="stylesheet" href="assets/alkyme-tokens.css">
<link rel="stylesheet" href="assets/components/core.css">
<link rel="stylesheet" href="assets/components/[component-name].css">
<script src="assets/components/[component-name].js" defer></script>
```

### Basic Usage

```html
<!-- Use data attributes for JavaScript hooks -->
<div class="alk-component" data-alk-component="carousel">
  <!-- Component content -->
</div>

<!-- Initialize via JavaScript -->
<script>
  AlkymeComponents.init(); // Auto-initializes all components
</script>
```

---

## Architecture

### File Structure

```
assets/
├── alkyme-tokens.css           # Design tokens (colors, spacing, typography)
├── components/
│   ├── core.css                # Base styles, resets, utilities
│   ├── layout/
│   │   ├── container.css       # Grid containers
│   │   ├── section.css         # Page sections
│   │   └── split-screen.css    # Split layouts
│   ├── navigation/
│   │   ├── topbar.css          # Primary navigation
│   │   ├── footer.css          # Site footer
│   │   ├── breadcrumbs.css     # Breadcrumb navigation
│   │   └── tabs.css            # Tab navigation
│   ├── content/
│   │   ├── card.css            # Card components
│   │   ├── hero.css            # Hero sections
│   │   ├── stats.css           # Metric displays
│   │   └── timeline.css        # Timeline layouts
│   ├── interactive/
│   │   ├── carousel.css        # Carousels/sliders
│   │   ├── accordion.css       # Accordions/FAQ
│   │   ├── modal.css           # Dialogs/modals
│   │   ├── dropdown.css        # Dropdown menus
│   │   └── tabs.css            # Tab panels
│   ├── media/
│   │   ├── video-player.css    # Video components
│   │   ├── image-gallery.css   # Image galleries
│   │   ├── logo-wall.css       # Logo clouds
│   │   └── media-object.css    # Media + text
│   ├── forms/
│   │   ├── fields.css          # Input fields
│   │   ├── buttons.css         # Button styles
│   │   └── validation.css      # Form validation
│   └── utils/
│       ├── spacing.css         # Margin/padding utilities
│       ├── typography.css      # Text utilities
│       └── visibility.css      # Show/hide utilities
└── components/
    ├── core.js                 # Core utilities
    ├── carousel.js             # Carousel logic
    ├── accordion.js            # Accordion logic
    ├── modal.js                # Modal logic
    └── ... (other JS modules)
```

### Naming Conventions

- **Prefix:** All components use `alk-` prefix
- **BEM Methodology:** Block__Element--Modifier
  - Block: `.alk-card`
  - Element: `.alk-card__title`
  - Modifier: `.alk-card--featured`
- **Data Attributes:** Use for JavaScript hooks (`data-alk-carousel`)
- **State Classes:** Use `is-` prefix (`.is-active`, `.is-open`)

---

## Design Tokens

All components use CSS custom properties from `alkyme-tokens.css`.

### Color Tokens

```css
/* Brand Colors */
--forest: #183d3d;
--moss: #5c8374;
--dew: #93b1a7;
--eggshell: #f4f4f2;
--bark: #040d12;

/* Semantic Colors */
--text: var(--bark);
--text-muted: var(--muted);
--bg-primary: var(--page-bg);
--bg-secondary: var(--cloudy-day);

/* Glass Morphism */
--glass-bg-subtle: rgba(var(--rgb-white), 0.65);
--glass-bg-strong: rgba(var(--rgb-white), 0.85);
--glass-blur-subtle: blur(12px) saturate(140%);
```

### Spacing Scale

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 0.75rem;   /* 12px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
--spacing-3xl: 4rem;     /* 64px */
```

### Typography Scale

```css
/* Font Families */
--type-display-family: 'Bricolage Grotesque', sans-serif;
--type-ui-family: 'Inter', sans-serif;

/* Font Sizes */
--type-xs: 0.75rem;      /* 12px */
--type-sm: 0.875rem;     /* 14px */
--type-base: 1rem;       /* 16px */
--type-lg: 1.125rem;     /* 18px */
--type-xl: 1.25rem;      /* 20px */
--type-2xl: 1.5rem;      /* 24px */
--type-3xl: 2rem;        /* 32px */
--type-4xl: 2.5rem;      /* 40px */
```

### Breakpoints

```css
/* Mobile-first approach */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 960px)  { /* lg */ }
@media (min-width: 1200px) { /* xl */ }
@media (min-width: 1440px) { /* 2xl */ }
```

---

## Layout Components

### Container

Constrains content width and centers it.

```html
<div class="alk-container">
  <!-- Content constrained to max-width -->
</div>

<!-- Variants -->
<div class="alk-container alk-container--narrow">  <!-- 42rem max -->
<div class="alk-container alk-container--wide">    <!-- 1400px max -->
<div class="alk-container alk-container--fluid">   <!-- 100% width -->
```

**CSS File:** `components/layout/container.css`

```css
.alk-container {
  max-width: var(--container-max, 1200px);
  margin-inline: auto;
  padding-inline: var(--page-gutter, 1.25rem);
}

.alk-container--narrow { max-width: 42rem; }
.alk-container--wide { max-width: 1400px; }
.alk-container--fluid { max-width: none; }
```

---

### Section

Page sections with consistent spacing.

```html
<section class="alk-section">
  <div class="alk-container">
    <!-- Section content -->
  </div>
</section>

<!-- Variants -->
<section class="alk-section alk-section--hero">       <!-- Full viewport height -->
<section class="alk-section alk-section--cloud">      <!-- Cloud background -->
<section class="alk-section alk-section--bordered">   <!-- Top border -->
```

**CSS File:** `components/layout/section.css`

```css
.alk-section {
  padding-block: var(--section-pad-y, 4rem);
}

.alk-section--hero {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
}

.alk-section--cloud {
  background: var(--cloudy-day);
}

.alk-section--bordered {
  border-top: var(--border-section);
}
```

---

### Split Screen

Two-column layout that stacks on mobile.

```html
<div class="alk-split">
  <div class="alk-split__left">
    <!-- Left content -->
  </div>
  <div class="alk-split__right">
    <!-- Right content -->
  </div>
</div>

<!-- Variants -->
<div class="alk-split alk-split--60-40">   <!-- 60/40 split -->
<div class="alk-split alk-split--reverse">  <!-- Right column first on mobile -->
<div class="alk-split alk-split--centered"> <!-- Vertically centered -->
```

**CSS File:** `components/layout/split-screen.css`

**JavaScript:** None required

---

## Navigation Components

### Topbar

Primary site navigation with logo, menu, and utilities.

```html
<header class="alk-topbar" data-alk-topbar role="banner">
  <div class="alk-container alk-topbar__inner">
    <!-- Logo -->
    <div class="alk-topbar__brand">
      <a href="/" aria-label="Home">
        <img src="/logo.svg" alt="Alkymē" class="alk-topbar__logo">
      </a>
    </div>

    <!-- Navigation -->
    <nav class="alk-topbar__nav" aria-label="Main navigation">
      <a href="/about" class="alk-topbar__link">About</a>
      <a href="/careers" class="alk-topbar__link" aria-current="page">Careers</a>
      <a href="/contact" class="alk-topbar__link">Contact</a>
    </nav>

    <!-- Utilities -->
    <div class="alk-topbar__utilities">
      <button class="alk-topbar__theme-toggle" data-theme-toggle aria-label="Toggle theme">
        <!-- Theme icon -->
      </button>
      <button class="alk-topbar__menu-toggle" data-mobile-menu aria-label="Toggle menu">
        <!-- Hamburger icon -->
      </button>
    </div>
  </div>
</header>
```

**CSS File:** `components/navigation/topbar.css`

**JavaScript File:** `components/navigation/topbar.js`

**Features:**
- Sticky on scroll
- Mobile hamburger menu
- Logo swap on scroll (cream → black)
- Smooth transitions
- Theme toggle integration

**API:**

```javascript
// Initialize
const topbar = new AlkymeTopbar({
  element: document.querySelector('[data-alk-topbar]'),
  stickyOffset: 80,           // When to become sticky
  logoLight: '/logo-light.svg',
  logoDark: '/logo-dark.svg',
  onScroll: (scrollY) => {},  // Scroll callback
});

// Methods
topbar.setSticky(true);
topbar.openMobileMenu();
topbar.closeMobileMenu();
```

---

### Footer

Site footer with logo, navigation, social links, utilities.

```html
<footer class="alk-footer">
  <div class="alk-container alk-footer__inner">
    <!-- Brand Column -->
    <div class="alk-footer__brand">
      <a href="/" class="alk-footer__logo">
        <img src="/logo.svg" alt="Alkymē">
      </a>
      <ul class="alk-footer__social" aria-label="Social links">
        <li><a href="#" aria-label="LinkedIn"><!-- Icon --></a></li>
        <li><a href="#" aria-label="Twitter"><!-- Icon --></a></li>
      </ul>
    </div>

    <!-- Navigation Columns -->
    <nav class="alk-footer__nav" aria-label="Footer navigation">
      <div class="alk-footer__col">
        <h2 class="alk-footer__heading">Company</h2>
        <ul class="alk-footer__links">
          <li><a href="/about">About</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>
      <!-- More columns -->
    </nav>
  </div>

  <!-- Bottom Bar -->
  <div class="alk-footer__bottom">
    <div class="alk-container alk-footer__bottom-inner">
      <span class="alk-footer__copyright">© 2026 Alkymē</span>
      <ul class="alk-footer__legal">
        <li><a href="/privacy">Privacy</a></li>
        <li><a href="/terms">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>
```

**CSS File:** `components/navigation/footer.css`

**JavaScript:** None required (unless adding interactions)

---

### Breadcrumbs

Hierarchical navigation trail.

```html
<nav class="alk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="alk-breadcrumbs__list">
    <li class="alk-breadcrumbs__item">
      <a href="/" class="alk-breadcrumbs__link">Home</a>
    </li>
    <li class="alk-breadcrumbs__item">
      <a href="/labs" class="alk-breadcrumbs__link">Labs</a>
    </li>
    <li class="alk-breadcrumbs__item" aria-current="page">
      <span class="alk-breadcrumbs__current">ChronoCore</span>
    </li>
  </ol>
</nav>
```

**CSS File:** `components/navigation/breadcrumbs.css`

---

### Tabs (Navigation)

Tab-based navigation system.

```html
<div class="alk-tabs" data-alk-tabs>
  <!-- Tab List -->
  <div class="alk-tabs__list" role="tablist" aria-label="Content sections">
    <button class="alk-tabs__tab is-active" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
      Overview
    </button>
    <button class="alk-tabs__tab" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">
      Features
    </button>
    <button class="alk-tabs__tab" role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3">
      Pricing
    </button>
  </div>

  <!-- Tab Panels -->
  <div class="alk-tabs__panels">
    <div class="alk-tabs__panel is-active" role="tabpanel" aria-labelledby="tab-1" id="panel-1">
      <!-- Panel 1 content -->
    </div>
    <div class="alk-tabs__panel" role="tabpanel" aria-labelledby="tab-2" id="panel-2" hidden>
      <!-- Panel 2 content -->
    </div>
    <div class="alk-tabs__panel" role="tabpanel" aria-labelledby="tab-3" id="panel-3" hidden>
      <!-- Panel 3 content -->
    </div>
  </div>
</div>
```

**CSS File:** `components/navigation/tabs.css`

**JavaScript File:** `components/navigation/tabs.js`

**Features:**
- Keyboard navigation (arrow keys)
- ARIA compliant
- Smooth transitions
- URL hash support

---

## Content Components

### Card

Flexible card component for content display.

```html
<!-- Basic Card -->
<article class="alk-card">
  <div class="alk-card__header">
    <h3 class="alk-card__title">Card Title</h3>
    <p class="alk-card__subtitle">Subtitle text</p>
  </div>
  <div class="alk-card__body">
    <p>Card content goes here.</p>
  </div>
  <div class="alk-card__footer">
    <a href="#" class="alk-card__link">Learn more →</a>
  </div>
</article>

<!-- Card Variants -->
<article class="alk-card alk-card--glass">           <!-- Glass morphism -->
<article class="alk-card alk-card--interactive">     <!-- Hover effects -->
<article class="alk-card alk-card--featured">        <!-- Highlighted -->
<article class="alk-card alk-card--horizontal">      <!-- Horizontal layout -->

<!-- Card with Image -->
<article class="alk-card alk-card--has-media">
  <figure class="alk-card__media">
    <img src="/image.jpg" alt="Description">
  </figure>
  <div class="alk-card__content">
    <h3 class="alk-card__title">Title</h3>
    <p>Content</p>
  </div>
</article>
```

**CSS File:** `components/content/card.css`

**Features:**
- Glass morphism variants
- Hover effects
- Media support (images, videos)
- Flexible layouts

---

### Hero

Large hero sections with various layouts.

```html
<!-- Split Hero -->
<section class="alk-hero alk-hero--split">
  <div class="alk-container alk-hero__grid">
    <div class="alk-hero__content">
      <p class="alk-hero__eyebrow">Eyebrow text</p>
      <h1 class="alk-hero__title">Build what ships</h1>
      <p class="alk-hero__lead">Supporting text that explains the value proposition.</p>
      <div class="alk-hero__actions">
        <a href="#" class="alk-button alk-button--primary">Primary CTA</a>
        <a href="#" class="alk-button alk-button--secondary">Secondary CTA</a>
      </div>
    </div>
    <div class="alk-hero__media">
      <img src="/hero-image.jpg" alt="Description">
    </div>
  </div>
</section>

<!-- Centered Hero -->
<section class="alk-hero alk-hero--centered">
  <div class="alk-container">
    <div class="alk-hero__content">
      <!-- Centered content -->
    </div>
  </div>
</section>

<!-- Video Hero -->
<section class="alk-hero alk-hero--video">
  <div class="alk-hero__video-bg" aria-hidden="true">
    <video autoplay muted loop playsinline>
      <source src="/video.mp4" type="video/mp4">
    </video>
    <div class="alk-hero__overlay"></div>
  </div>
  <div class="alk-container alk-hero__content">
    <!-- Content overlaid on video -->
  </div>
</section>
```

**CSS File:** `components/content/hero.css`

**Variants:**
- `--split`: Two-column layout
- `--centered`: Centered text
- `--video`: Video background
- `--minimal`: Simplified layout

---

### Stats / Metrics

Display key metrics and statistics.

```html
<div class="alk-stats">
  <div class="alk-stat">
    <span class="alk-stat__value">12</span>
    <span class="alk-stat__label">Ventures launched</span>
    <p class="alk-stat__description">Since inception in 2023</p>
  </div>
  <div class="alk-stat">
    <span class="alk-stat__value">3mo</span>
    <span class="alk-stat__label">Time to revenue</span>
    <p class="alk-stat__description">Average across portfolio</p>
  </div>
  <div class="alk-stat">
    <span class="alk-stat__value">100%</span>
    <span class="alk-stat__label">Human reviewed</span>
  </div>
</div>

<!-- Inline Stats (for hero sections) -->
<div class="alk-stats alk-stats--inline">
  <!-- Stats display horizontally -->
</div>

<!-- Card Grid Stats -->
<div class="alk-stats alk-stats--cards">
  <article class="alk-stat alk-stat--card">
    <!-- Each stat in a card -->
  </article>
</div>
```

**CSS File:** `components/content/stats.css`

---

### Timeline

Vertical timeline for displaying chronological content.

```html
<div class="alk-timeline">
  <article class="alk-timeline__item">
    <div class="alk-timeline__marker">
      <span class="alk-timeline__day">Mon</span>
    </div>
    <div class="alk-timeline__content">
      <h3 class="alk-timeline__title">Event Title</h3>
      <p class="alk-timeline__description">Event description text.</p>
      <div class="alk-timeline__meta">
        <span class="alk-timeline__tag">Tag 1</span>
        <span class="alk-timeline__tag">Tag 2</span>
      </div>
    </div>
  </article>
  <!-- More timeline items -->
</div>

<!-- Horizontal Timeline (for process flows) -->
<div class="alk-timeline alk-timeline--horizontal">
  <!-- Items flow left to right -->
</div>
```

**CSS File:** `components/content/timeline.css`

---

## Interactive Components

### Carousel / Slider

Multi-purpose carousel component.

```html
<div class="alk-carousel" data-alk-carousel role="region" aria-roledescription="carousel" aria-label="Image carousel">
  <!-- Track -->
  <div class="alk-carousel__track" data-carousel-track>
    <div class="alk-carousel__slide" data-carousel-slide>
      <!-- Slide 1 content -->
    </div>
    <div class="alk-carousel__slide" data-carousel-slide>
      <!-- Slide 2 content -->
    </div>
    <div class="alk-carousel__slide" data-carousel-slide>
      <!-- Slide 3 content -->
    </div>
  </div>

  <!-- Controls -->
  <div class="alk-carousel__controls">
    <button class="alk-carousel__btn alk-carousel__btn--prev" data-carousel-prev aria-label="Previous slide">
      <svg><!-- Arrow icon --></svg>
    </button>
    <div class="alk-carousel__dots" data-carousel-dots></div>
    <button class="alk-carousel__btn alk-carousel__btn--next" data-carousel-next aria-label="Next slide">
      <svg><!-- Arrow icon --></svg>
    </button>
  </div>

  <!-- Live Region for Screen Readers -->
  <div class="alk-carousel__live" aria-live="polite" aria-atomic="true"></div>
</div>
```

**CSS File:** `components/interactive/carousel.css`

**JavaScript File:** `components/interactive/carousel.js`

**Configuration:**

```javascript
const carousel = new AlkymeCarousel({
  element: document.querySelector('[data-alk-carousel]'),
  slidesPerView: 1,           // Number of slides visible
  spaceBetween: 20,           // Gap between slides (px)
  loop: false,                // Enable infinite loop
  autoplay: false,            // Auto-advance slides
  autoplayDelay: 5000,        // Delay between slides (ms)
  pauseOnHover: true,         // Pause autoplay on hover
  navigation: true,           // Show prev/next buttons
  pagination: true,           // Show dot indicators
  keyboard: true,             // Enable keyboard navigation
  responsive: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  onSlideChange: (index) => {}, // Callback on slide change
});

// Methods
carousel.next();
carousel.prev();
carousel.goTo(2);
carousel.play();   // Start autoplay
carousel.pause();  // Stop autoplay
carousel.destroy();
```

**Variants:**
- `--cards`: Card-based carousel
- `--fade`: Fade transition instead of slide
- `--full`: Full-width slides

---

### Accordion / FAQ

Collapsible content sections.

```html
<div class="alk-accordion" data-alk-accordion>
  <div class="alk-accordion__item">
    <button class="alk-accordion__trigger" aria-expanded="false" aria-controls="panel-1" id="trigger-1">
      <span class="alk-accordion__title">Question 1</span>
      <svg class="alk-accordion__icon" aria-hidden="true"><!-- Chevron --></svg>
    </button>
    <div class="alk-accordion__panel" id="panel-1" role="region" aria-labelledby="trigger-1" hidden>
      <div class="alk-accordion__content">
        <p>Answer to question 1.</p>
      </div>
    </div>
  </div>

  <div class="alk-accordion__item">
    <!-- More items -->
  </div>
</div>
```

**CSS File:** `components/interactive/accordion.css`

**JavaScript File:** `components/interactive/accordion.js`

**Configuration:**

```javascript
const accordion = new AlkymeAccordion({
  element: document.querySelector('[data-alk-accordion]'),
  allowMultiple: false,       // Allow multiple panels open
  animationDuration: 300,     // Transition duration (ms)
  onOpen: (item) => {},       // Callback on panel open
  onClose: (item) => {},      // Callback on panel close
});

// Methods
accordion.open(0);      // Open first item
accordion.close(1);     // Close second item
accordion.toggle(2);    // Toggle third item
accordion.openAll();
accordion.closeAll();
```

**Features:**
- Smooth height animations
- Keyboard navigation
- Single or multiple open panels
- ARIA compliant

---

### Modal / Dialog

Accessible modal dialogs.

```html
<dialog class="alk-modal" data-alk-modal id="modal-1" aria-labelledby="modal-title">
  <div class="alk-modal__surface">
    <!-- Close Button -->
    <button class="alk-modal__close" data-modal-close aria-label="Close dialog">
      <svg><!-- X icon --></svg>
    </button>

    <!-- Header -->
    <header class="alk-modal__header">
      <h2 class="alk-modal__title" id="modal-title">Modal Title</h2>
      <p class="alk-modal__subtitle">Optional subtitle</p>
    </header>

    <!-- Body -->
    <div class="alk-modal__body">
      <p>Modal content goes here.</p>
    </div>

    <!-- Footer -->
    <footer class="alk-modal__footer">
      <button class="alk-button alk-button--secondary" data-modal-close>Cancel</button>
      <button class="alk-button alk-button--primary">Confirm</button>
    </footer>
  </div>
</dialog>

<!-- Trigger Button -->
<button data-modal-trigger="modal-1">Open Modal</button>
```

**CSS File:** `components/interactive/modal.css`

**JavaScript File:** `components/interactive/modal.js`

**Configuration:**

```javascript
const modal = new AlkymeModal({
  element: document.querySelector('[data-alk-modal]'),
  closeOnBackdrop: true,      // Close when clicking backdrop
  closeOnEscape: true,        // Close on Esc key
  trapFocus: true,            // Trap focus inside modal
  restoreFocus: true,         // Return focus to trigger
  onOpen: () => {},           // Open callback
  onClose: () => {},          // Close callback
});

// Methods
modal.open();
modal.close();
modal.toggle();
```

**Features:**
- Native `<dialog>` element
- Focus trap
- Backdrop blur
- Smooth animations
- Keyboard accessible
- Glass morphism variant

---

### Dropdown Menu

Dropdown menus for navigation or actions.

```html
<div class="alk-dropdown" data-alk-dropdown>
  <button class="alk-dropdown__trigger" aria-haspopup="true" aria-expanded="false" data-dropdown-trigger>
    Menu <svg class="alk-dropdown__icon"><!-- Chevron --></svg>
  </button>

  <div class="alk-dropdown__panel" data-dropdown-panel hidden>
    <ul class="alk-dropdown__list" role="menu">
      <li role="none">
        <a href="#" class="alk-dropdown__item" role="menuitem">Item 1</a>
      </li>
      <li role="none">
        <a href="#" class="alk-dropdown__item" role="menuitem">Item 2</a>
      </li>
      <li class="alk-dropdown__divider" role="separator"></li>
      <li role="none">
        <a href="#" class="alk-dropdown__item" role="menuitem">Item 3</a>
      </li>
    </ul>
  </div>
</div>
```

**CSS File:** `components/interactive/dropdown.css`

**JavaScript File:** `components/interactive/dropdown.js`

**Features:**
- Click or hover trigger
- Keyboard navigation (arrow keys)
- Click outside to close
- Positioned automatically (no overflow)

---

## Media Components

### Video Player

Custom video player with controls.

```html
<div class="alk-video" data-alk-video>
  <video class="alk-video__element" data-video-element>
    <source src="/video.mp4" type="video/mp4">
  </video>

  <!-- Custom Controls -->
  <div class="alk-video__controls" data-video-controls>
    <button class="alk-video__btn alk-video__btn--play" data-video-play aria-label="Play">
      <svg><!-- Play icon --></svg>
    </button>
    <div class="alk-video__progress" data-video-progress>
      <div class="alk-video__progress-bar" data-video-progress-bar></div>
    </div>
    <button class="alk-video__btn alk-video__btn--mute" data-video-mute aria-label="Mute">
      <svg><!-- Volume icon --></svg>
    </button>
    <button class="alk-video__btn alk-video__btn--fullscreen" data-video-fullscreen aria-label="Fullscreen">
      <svg><!-- Fullscreen icon --></svg>
    </button>
  </div>
</div>
```

**CSS File:** `components/media/video-player.css`

**JavaScript File:** `components/media/video-player.js`

**Features:**
- Custom styled controls
- Progress bar with seek
- Volume control
- Fullscreen support
- Keyboard shortcuts
- Respects `prefers-reduced-motion`

---

### Image Gallery

Grid-based image gallery with lightbox.

```html
<div class="alk-gallery" data-alk-gallery>
  <div class="alk-gallery__grid">
    <figure class="alk-gallery__item">
      <a href="/full-1.jpg" class="alk-gallery__link" data-gallery-item>
        <img src="/thumb-1.jpg" alt="Image 1">
      </a>
    </figure>
    <figure class="alk-gallery__item">
      <a href="/full-2.jpg" class="alk-gallery__link" data-gallery-item>
        <img src="/thumb-2.jpg" alt="Image 2">
      </a>
    </figure>
    <!-- More items -->
  </div>
</div>
```

**CSS File:** `components/media/image-gallery.css`

**JavaScript File:** `components/media/image-gallery.js`

**Features:**
- Lightbox on click
- Keyboard navigation in lightbox
- Responsive grid
- Lazy loading support

---

### Logo Wall / Logo Cloud

Scrolling or static logo display.

```html
<!-- Static Logo Wall -->
<div class="alk-logo-wall">
  <div class="alk-logo-wall__grid">
    <img src="/logo-1.svg" alt="Company 1" class="alk-logo-wall__logo">
    <img src="/logo-2.svg" alt="Company 2" class="alk-logo-wall__logo">
    <img src="/logo-3.svg" alt="Company 3" class="alk-logo-wall__logo">
    <!-- More logos -->
  </div>
</div>

<!-- Scrolling Logo Wall -->
<div class="alk-logo-wall alk-logo-wall--scroll" data-alk-logo-scroll>
  <div class="alk-logo-wall__track" data-logo-track>
    <img src="/logo-1.svg" alt="Company 1" class="alk-logo-wall__logo">
    <!-- Logos will be duplicated by JS for infinite scroll -->
  </div>
</div>
```

**CSS File:** `components/media/logo-wall.css`

**JavaScript File:** `components/media/logo-wall.js`

**Configuration:**

```javascript
const logoWall = new AlkymeLogoWall({
  element: document.querySelector('[data-alk-logo-scroll]'),
  speed: 30,                  // Pixels per second
  pauseOnHover: true,         // Pause animation on hover
  direction: 'left',          // 'left' or 'right'
});

// Methods
logoWall.play();
logoWall.pause();
logoWall.setSpeed(50);
```

**Features:**
- Infinite scroll animation
- Pause on hover
- Grayscale to color on hover
- Responsive grid for static version

---

### Media Object

Image/video + text layout pattern.

```html
<div class="alk-media">
  <div class="alk-media__figure">
    <img src="/image.jpg" alt="Description">
  </div>
  <div class="alk-media__body">
    <h3 class="alk-media__title">Title</h3>
    <p class="alk-media__text">Supporting text content.</p>
  </div>
</div>

<!-- Variants -->
<div class="alk-media alk-media--reverse">      <!-- Image on right -->
<div class="alk-media alk-media--centered">     <!-- Vertically centered -->
<div class="alk-media alk-media--stacked">      <!-- Stack on all sizes -->
```

**CSS File:** `components/media/media-object.css`

---

## Form Components

### Form Fields

Text inputs, textareas, selects.

```html
<!-- Text Input -->
<div class="alk-field">
  <label class="alk-field__label" for="name">Name</label>
  <input type="text" id="name" class="alk-field__input" required>
  <p class="alk-field__hint">Optional hint text</p>
  <p class="alk-field__error" hidden>Error message</p>
</div>

<!-- Textarea -->
<div class="alk-field">
  <label class="alk-field__label" for="message">Message</label>
  <textarea id="message" class="alk-field__textarea" rows="4"></textarea>
</div>

<!-- Select -->
<div class="alk-field">
  <label class="alk-field__label" for="country">Country</label>
  <select id="country" class="alk-field__select">
    <option value="">Select one</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>
</div>

<!-- Checkbox -->
<div class="alk-field alk-field--checkbox">
  <input type="checkbox" id="terms" class="alk-field__checkbox">
  <label class="alk-field__label" for="terms">
    I agree to the <a href="/terms">terms</a>
  </label>
</div>

<!-- Radio Group -->
<fieldset class="alk-field alk-field--radio-group">
  <legend class="alk-field__legend">Choose one</legend>
  <div class="alk-field__radio">
    <input type="radio" id="option-1" name="option" class="alk-field__radio-input">
    <label class="alk-field__label" for="option-1">Option 1</label>
  </div>
  <div class="alk-field__radio">
    <input type="radio" id="option-2" name="option" class="alk-field__radio-input">
    <label class="alk-field__label" for="option-2">Option 2</label>
  </div>
</fieldset>
```

**CSS File:** `components/forms/fields.css`

**States:**
- `.is-valid` - Valid state
- `.is-invalid` - Error state
- `.is-disabled` - Disabled state

---

### Buttons

Button component with variants.

```html
<!-- Primary Button -->
<button class="alk-button alk-button--primary">
  Primary Button
</button>

<!-- Secondary Button -->
<button class="alk-button alk-button--secondary">
  Secondary Button
</button>

<!-- Ghost Button -->
<button class="alk-button alk-button--ghost">
  Ghost Button
</button>

<!-- Sizes -->
<button class="alk-button alk-button--sm">Small</button>
<button class="alk-button alk-button--lg">Large</button>

<!-- With Icon -->
<button class="alk-button alk-button--primary">
  <svg class="alk-button__icon"><!-- Icon --></svg>
  <span>Button Text</span>
</button>

<!-- Icon Only -->
<button class="alk-button alk-button--icon" aria-label="Close">
  <svg><!-- Icon --></svg>
</button>

<!-- Loading State -->
<button class="alk-button alk-button--primary is-loading" disabled>
  <span class="alk-button__spinner"></span>
  <span>Loading...</span>
</button>
```

**CSS File:** `components/forms/buttons.css`

**Variants:**
- `--primary` - Brand colored, high emphasis
- `--secondary` - Outlined, medium emphasis
- `--ghost` - Text only, low emphasis
- `--danger` - Destructive actions
- `--sm` - Small size
- `--lg` - Large size
- `--icon` - Icon only (square)
- `--pill` - Fully rounded edges

---

### Form Validation

Client-side form validation.

```html
<form class="alk-form" data-alk-form novalidate>
  <div class="alk-field">
    <label class="alk-field__label" for="email">Email</label>
    <input
      type="email"
      id="email"
      class="alk-field__input"
      required
      data-validate="email"
      aria-describedby="email-error"
    >
    <p class="alk-field__error" id="email-error" role="alert" hidden></p>
  </div>

  <button type="submit" class="alk-button alk-button--primary">Submit</button>
</form>
```

**JavaScript File:** `components/forms/validation.js`

**Configuration:**

```javascript
const form = new AlkymeFormValidation({
  element: document.querySelector('[data-alk-form]'),
  validateOn: 'blur',         // 'blur', 'input', 'submit'
  showErrors: true,           // Show error messages
  scrollToError: true,        // Scroll to first error on submit
  rules: {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    password: {
      required: true,
      minLength: 8,
      message: 'Password must be at least 8 characters'
    }
  },
  onValidate: (isValid, errors) => {},
  onSubmit: (formData) => {},
});
```

**Built-in Validators:**
- `required`
- `email`
- `url`
- `minLength` / `maxLength`
- `min` / `max` (for numbers)
- `pattern` (regex)
- Custom validators

---

## Utility Classes

### Spacing

```css
/* Margin */
.alk-m-0    { margin: 0; }
.alk-m-xs   { margin: var(--spacing-xs); }
.alk-m-sm   { margin: var(--spacing-sm); }
.alk-m-md   { margin: var(--spacing-md); }
.alk-m-lg   { margin: var(--spacing-lg); }
.alk-m-xl   { margin: var(--spacing-xl); }

/* Directional margins (mt, mr, mb, ml) */
.alk-mt-lg  { margin-top: var(--spacing-lg); }
.alk-mb-xl  { margin-bottom: var(--spacing-xl); }

/* Padding (same pattern as margin with p-*) */
.alk-p-md   { padding: var(--spacing-md); }
.alk-px-lg  { padding-inline: var(--spacing-lg); }
.alk-py-sm  { padding-block: var(--spacing-sm); }
```

---

### Typography

```css
/* Text Alignment */
.alk-text-left    { text-align: left; }
.alk-text-center  { text-align: center; }
.alk-text-right   { text-align: right; }

/* Font Weights */
.alk-font-normal  { font-weight: 400; }
.alk-font-medium  { font-weight: 500; }
.alk-font-semibold { font-weight: 600; }
.alk-font-bold    { font-weight: 700; }

/* Font Sizes */
.alk-text-xs      { font-size: var(--type-xs); }
.alk-text-sm      { font-size: var(--type-sm); }
.alk-text-base    { font-size: var(--type-base); }
.alk-text-lg      { font-size: var(--type-lg); }
.alk-text-xl      { font-size: var(--type-xl); }

/* Colors */
.alk-text-forest  { color: var(--forest); }
.alk-text-moss    { color: var(--moss); }
.alk-text-muted   { color: var(--muted); }
```

---

### Visibility

```css
/* Display */
.alk-hidden       { display: none !important; }
.alk-block        { display: block; }
.alk-inline-block { display: inline-block; }
.alk-flex         { display: flex; }
.alk-grid         { display: grid; }

/* Screen Reader Only */
.alk-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Responsive Visibility */
.alk-hidden-sm    { /* Hidden on screens < 640px */ }
.alk-hidden-md    { /* Hidden on screens < 768px */ }
.alk-visible-lg   { /* Visible only on screens > 960px */ }
```

---

## JavaScript API

### Core Initialization

```javascript
// Auto-initialize all components on page load
AlkymeComponents.init();

// Initialize specific component type
AlkymeComponents.init('carousel');

// Initialize with custom config
AlkymeComponents.init({
  carousel: { slidesPerView: 2 },
  accordion: { allowMultiple: true },
});
```

---

### Event System

All components emit custom events:

```javascript
// Listen to component events
document.addEventListener('alkyme:carousel:change', (e) => {
  console.log('Carousel changed to slide:', e.detail.index);
});

document.addEventListener('alkyme:modal:open', (e) => {
  console.log('Modal opened:', e.detail.id);
});

document.addEventListener('alkyme:accordion:toggle', (e) => {
  console.log('Accordion toggled:', e.detail.isOpen);
});
```

**Standard Events:**
- `alkyme:[component]:init` - Component initialized
- `alkyme:[component]:destroy` - Component destroyed
- Component-specific events (change, open, close, etc.)

---

### Global Methods

```javascript
// Get component instance
const carousel = AlkymeComponents.get('carousel', element);

// Destroy component
AlkymeComponents.destroy('carousel', element);

// Update component config
AlkymeComponents.update('carousel', element, { slidesPerView: 3 });
```

---

## Accessibility Guidelines

### ARIA Labels

```html
<!-- Always provide aria-label for icon-only buttons -->
<button aria-label="Close menu">
  <svg><!-- Icon --></svg>
</button>

<!-- Use aria-labelledby to reference visible text -->
<section aria-labelledby="section-heading">
  <h2 id="section-heading">Section Title</h2>
</section>

<!-- Provide aria-describedby for additional context -->
<input
  id="password"
  type="password"
  aria-describedby="password-hint"
>
<p id="password-hint">Must be at least 8 characters</p>
```

---

### Keyboard Navigation

All interactive components must support:

- **Tab** - Navigate forward
- **Shift + Tab** - Navigate backward
- **Enter / Space** - Activate button/link
- **Escape** - Close modal/dropdown
- **Arrow keys** - Navigate carousel/tabs/dropdown items
- **Home / End** - Jump to first/last item

---

### Screen Reader Support

```html
<!-- Live regions for dynamic content -->
<div aria-live="polite" aria-atomic="true">
  <!-- Announcements will be read -->
</div>

<!-- Hide decorative content -->
<svg aria-hidden="true"><!-- Decorative icon --></svg>

<!-- Indicate current page/state -->
<a href="/about" aria-current="page">About</a>
<button aria-pressed="true">Toggle</button>
```

---

### Focus Management

```css
/* Always provide visible focus styles */
.alk-button:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 2px;
}

/* Never remove focus styles without replacement */
.alk-button:focus {
  /* Provide alternative focus indicator */
}
```

---

## Best Practices

### Performance

1. **Lazy Load Components**
   ```javascript
   // Only initialize when component is in viewport
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         AlkymeComponents.init('carousel', entry.target);
         observer.unobserve(entry.target);
       }
     });
   });
   ```

2. **Debounce Resize Events**
   ```javascript
   let resizeTimer;
   window.addEventListener('resize', () => {
     clearTimeout(resizeTimer);
     resizeTimer = setTimeout(() => {
       // Handle resize
     }, 250);
   });
   ```

3. **Use CSS Containment**
   ```css
   .alk-card {
     contain: layout paint;
   }
   ```

---

### Maintainability

1. **Always use design tokens** - Never hardcode colors or spacing
2. **Follow BEM naming** - Consistent, predictable class names
3. **One component per file** - Easier to maintain and debug
4. **Document variants** - Comment available modifiers
5. **Version components** - Track breaking changes

---

### Browser Support

- **Modern evergreen browsers** (Chrome, Firefox, Safari, Edge)
- **No IE11 support** (uses modern CSS features)
- **Progressive enhancement** for older browsers
- **Graceful degradation** for missing JavaScript

---

## Component Checklist

When creating a new component:

- [ ] Follows BEM naming convention
- [ ] Uses design tokens (no hardcoded values)
- [ ] Includes responsive breakpoints
- [ ] Has dark mode support
- [ ] Supports `prefers-reduced-motion`
- [ ] Includes ARIA attributes
- [ ] Keyboard accessible
- [ ] Screen reader tested
- [ ] Has variants documented
- [ ] Includes usage examples
- [ ] Has JavaScript API (if interactive)
- [ ] Emits custom events
- [ ] Handles edge cases
- [ ] Mobile tested
- [ ] Cross-browser tested

---

## Migration Guide

### From Hardcoded to Components

**Before:**
```html
<div class="hero" style="padding: 80px 20px;">
  <h1 style="font-size: 48px; color: #183d3d;">Title</h1>
</div>
```

**After:**
```html
<section class="alk-hero alk-hero--centered">
  <div class="alk-container">
    <h1 class="alk-hero__title">Title</h1>
  </div>
</section>
```

### Component Refactor Steps

1. Identify reusable patterns in existing code
2. Extract to component with BEM classes
3. Replace hardcoded values with tokens
4. Add responsive breakpoints
5. Ensure accessibility
6. Document usage
7. Replace old code with component
8. Test thoroughly

---

## Contributing

### Adding New Components

1. Create component files:
   ```
   components/[category]/[name].css
   components/[category]/[name].js (if needed)
   ```

2. Follow naming conventions
3. Use design tokens
4. Include accessibility features
5. Add to this documentation
6. Create usage examples
7. Submit for review

---

## Support

For questions or issues:
- **Documentation:** `/docs/COMPONENTS.md` (this file)
- **Examples:** `/docs/examples/` (coming soon)
- **Style Guide:** `/docs/style-guide.md`

---

**End of Component Library Documentation**

Last updated: 2026-04-14
Version: 1.0.0
