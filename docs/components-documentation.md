# Alkyme Component System Documentation

Version 2.0.0

## Overview

The Alkyme Component System is a production-ready, framework-quality component library that provides standardized, reusable components across the entire Alkyme website. All components use `alkyme-tokens.css` as the single source of truth for design values.

## Installation

Include the component library in your HTML after the tokens and fonts:

```html
<link rel="stylesheet" href="/assets/alkyme-tokens.css">
<link rel="stylesheet" href="/assets/marketing-fonts.css">
<link rel="stylesheet" href="/assets/alkyme-components.css">
```

## Naming Convention

All components follow BEM (Block, Element, Modifier) naming:

- **Block**: `.alk-{component}` (e.g., `.alk-btn`, `.alk-card`)
- **Element**: `.alk-{component}__{element}` (e.g., `.alk-card__title`)
- **Modifier**: `.alk-{component}--{modifier}` (e.g., `.alk-btn--primary`)

---

## Components

### Buttons

Unified button system with three visual styles and three sizes.

#### Basic Usage

```html
<!-- Primary button (high emphasis) -->
<button class="alk-btn alk-btn--primary">Get Started</button>

<!-- Secondary button (medium emphasis) -->
<button class="alk-btn alk-btn--secondary">Learn More</button>

<!-- Ghost button (low emphasis) -->
<button class="alk-btn alk-btn--ghost">Cancel</button>
```

#### Sizes

```html
<!-- Small -->
<button class="alk-btn alk-btn--primary alk-btn--sm">Small</button>

<!-- Medium (default) -->
<button class="alk-btn alk-btn--primary">Medium</button>

<!-- Large -->
<button class="alk-btn alk-btn--primary alk-btn--lg">Large</button>
```

#### States

```html
<!-- Disabled -->
<button class="alk-btn alk-btn--primary" disabled>Disabled</button>

<!-- Loading -->
<button class="alk-btn alk-btn--primary is-loading">Loading...</button>

<!-- Full width -->
<button class="alk-btn alk-btn--primary alk-btn--full">Full Width</button>
```

#### Icon Buttons

```html
<button class="alk-btn alk-btn--primary alk-btn--icon" aria-label="Close">
  <svg width="16" height="16">...</svg>
</button>
```

#### With Icons

```html
<button class="alk-btn alk-btn--primary">
  <svg width="16" height="16">...</svg>
  <span>Download</span>
</button>
```

#### Design Tokens

- Uses `--button-primary-bg`, `--button-primary-fg` from tokens
- Inherits `--type-button-size`, `--type-button-weight`
- Respects `--radius-pill` for border radius
- Animations use `--duration-*` and `--ease-*` curves

#### Accessibility

- Minimum 44x44px touch target (WCAG 2.5.5)
- Focus visible ring with `--focus-ring`
- Ripple effect disabled with reduced motion
- Proper ARIA attributes supported

---

### Cards

Flexible card component with multiple variants and built-in elements.

#### Basic Usage

```html
<div class="alk-card">
  <div class="alk-card__header">
    <p class="alk-card__eyebrow">Featured</p>
    <h3 class="alk-card__title">Card Title</h3>
  </div>
  <div class="alk-card__body">
    <p class="alk-card__description">Card description text goes here.</p>
  </div>
  <div class="alk-card__footer">
    <a href="#" class="alk-link">Learn more</a>
  </div>
</div>
```

#### With Media

```html
<div class="alk-card">
  <div class="alk-card__media">
    <img src="image.jpg" alt="Description">
  </div>
  <div class="alk-card__body">
    <h3 class="alk-card__title">Card with Image</h3>
    <p class="alk-card__description">Description text.</p>
  </div>
</div>
```

#### Variants

```html
<!-- Elevated (stronger shadow) -->
<div class="alk-card alk-card--elevated">...</div>

<!-- Bordered (stronger border) -->
<div class="alk-card alk-card--bordered">...</div>

<!-- Interactive (clickable with hover) -->
<a href="#" class="alk-card alk-card--interactive">...</a>

<!-- Glass (frosted glass effect) -->
<div class="alk-card alk-card--glass">...</div>

<!-- Compact padding -->
<div class="alk-card alk-card--compact">...</div>
```

#### Tags/Badges

```html
<div class="alk-card">
  <div class="alk-card__body">
    <span class="alk-card__tag">Default</span>
    <span class="alk-card__tag alk-card__tag--primary">Primary</span>
    <span class="alk-card__tag alk-card__tag--market">Market</span>
    <span class="alk-card__tag alk-card__tag--experiment">Experiment</span>
  </div>
</div>
```

#### Design Tokens

- Uses `--surface-modal-warm` for background
- Card shadows from `--card-shadow-rest`, `--card-shadow-hover`
- Border radius from `--radius-media-lg`
- Media uses `--radius-media`
- Padding from `--card-padding-comfortable`

#### Accessibility

- Interactive cards have focus states
- Hover transforms respect reduced motion
- Image scaling disabled with reduced motion
- Glass cards fall back to solid with reduced transparency

---

### Section Headers

Standardized section introductions with eyebrow, title, and description.

#### Basic Usage

```html
<div class="alk-section__header">
  <p class="alk-section__eyebrow">Our Work</p>
  <h2 class="alk-section__title">Featured Projects</h2>
  <p class="alk-section__description">
    Explore our latest ventures and innovations.
  </p>
</div>
```

#### Variants

```html
<!-- Left aligned -->
<div class="alk-section__header alk-section__header--left">...</div>

<!-- Wide (no max-width) -->
<div class="alk-section__header alk-section__header--wide">...</div>

<!-- Title sizes -->
<h2 class="alk-section__title alk-section__title--sm">Small Title</h2>
<h2 class="alk-section__title">Default Title</h2>
<h2 class="alk-section__title alk-section__title--lg">Large Title</h2>
```

#### Design Tokens

- Eyebrow uses `--type-eyebrow-*` tokens
- Title uses `--type-h2-display-*` tokens
- Description uses `--type-lead-*` tokens
- Max width from `--section-head-center-max`
- Bottom margin from `--section-head-margin-bottom`

---

### Form Fields

Unified form field component with label, input, and error states.

#### Basic Usage

```html
<div class="alk-field">
  <label class="alk-field__label" for="email">Email Address</label>
  <input
    type="email"
    id="email"
    class="alk-field__input"
    placeholder="you@example.com"
  >
</div>
```

#### Textarea

```html
<div class="alk-field">
  <label class="alk-field__label" for="message">Message</label>
  <textarea
    id="message"
    class="alk-field__textarea"
    placeholder="Your message..."
  ></textarea>
</div>
```

#### Select

```html
<div class="alk-field">
  <label class="alk-field__label" for="topic">Topic</label>
  <select id="topic" class="alk-field__select">
    <option>General Inquiry</option>
    <option>Support</option>
    <option>Sales</option>
  </select>
</div>
```

#### Error State

```html
<div class="alk-field alk-field--error">
  <label class="alk-field__label" for="email">Email Address</label>
  <input
    type="email"
    id="email"
    class="alk-field__input"
    aria-invalid="true"
    aria-describedby="email-error"
  >
  <p class="alk-field__error" id="email-error">
    Please enter a valid email address.
  </p>
</div>
```

#### Success State

```html
<div class="alk-field alk-field--success">
  <label class="alk-field__label" for="email">Email Address</label>
  <input type="email" id="email" class="alk-field__input">
</div>
```

#### Design Tokens

- Label uses `--forest` color
- Inputs use `--page-bg` background
- Border from `rgb(var(--rgb-dew) / 0.55)`
- Hover/focus border uses `--moss`
- Error color from `--color-danger`
- Border radius from `--radius`

#### Accessibility

- Labels properly associated with inputs
- Error messages linked via `aria-describedby`
- Focus ring with proper offset
- Disabled state clearly indicated
- Transforms disabled with reduced motion

---

### Typography Components

Semantic heading and text classes for consistent typography.

#### Headings

```html
<h1 class="alk-heading-1">Display Heading</h1>
<h2 class="alk-heading-2">Section Heading</h2>
<h3 class="alk-heading-3">Subsection Heading</h3>
<h4 class="alk-heading-4">Card Heading</h4>
<h5 class="alk-heading-5">Small Heading</h5>
<h6 class="alk-heading-6">Tiny Heading</h6>
```

#### Text Styles

```html
<!-- Hero display text -->
<p class="alk-text-display">Large hero text</p>

<!-- Lead paragraph -->
<p class="alk-text-lead">Introduction paragraph with larger text.</p>

<!-- Body text -->
<p class="alk-text-body">Regular body copy.</p>

<!-- Small text -->
<p class="alk-text-small">Fine print or captions.</p>

<!-- Eyebrow label -->
<p class="alk-text-eyebrow">Category Label</p>
```

#### Design Tokens

All typography components use tokens from `alkyme-tokens.css`:
- `--type-h1-*` through `--type-h6-*`
- `--type-display-family` for serif headings
- `--type-ui-family` for sans-serif text
- `--type-lead-*`, `--type-body-*`, `--type-eyebrow-*`

---

### Layout Components

Container, section, stack, cluster, and grid layouts.

#### Container

```html
<!-- Extra large (default max-width) -->
<div class="alk-container alk-container--xl">Content</div>

<!-- Large -->
<div class="alk-container alk-container--lg">Content</div>

<!-- Medium -->
<div class="alk-container alk-container--md">Content</div>

<!-- Small -->
<div class="alk-container alk-container--sm">Content</div>

<!-- Full width (no max-width) -->
<div class="alk-container alk-container--full">Content</div>
```

#### Section

```html
<!-- Default section spacing -->
<section class="alk-section">Content</section>

<!-- Small spacing -->
<section class="alk-section alk-section--sm">Content</section>

<!-- Large spacing -->
<section class="alk-section alk-section--lg">Content</section>

<!-- No top padding -->
<section class="alk-section alk-section--no-top">Content</section>

<!-- With background -->
<section class="alk-section alk-section--moss">Content</section>
<section class="alk-section alk-section--forest">Content</section>
<section class="alk-section alk-section--gradient">Content</section>
```

#### Stack (Vertical)

```html
<div class="alk-stack alk-stack--md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Gap sizes: xs, sm, md, lg, xl, 2xl -->
<div class="alk-stack alk-stack--lg">...</div>
```

#### Cluster (Horizontal)

```html
<div class="alk-cluster">
  <button class="alk-btn alk-btn--primary">Button 1</button>
  <button class="alk-btn alk-btn--secondary">Button 2</button>
</div>

<!-- Alignment -->
<div class="alk-cluster alk-cluster--center">...</div>
<div class="alk-cluster alk-cluster--between">...</div>
```

#### Grid

```html
<!-- 2 column grid -->
<div class="alk-grid alk-grid--2">
  <div class="alk-card">Card 1</div>
  <div class="alk-card">Card 2</div>
</div>

<!-- 3 column grid -->
<div class="alk-grid alk-grid--3">
  <div class="alk-card">Card 1</div>
  <div class="alk-card">Card 2</div>
  <div class="alk-card">Card 3</div>
</div>

<!-- 4 column grid -->
<div class="alk-grid alk-grid--4">...</div>
```

Grid automatically stacks at mobile breakpoints.

#### Design Tokens

- Container padding from `--page-gutter`
- Section padding from `--section-pad-y`
- Stack/cluster gaps from `--space-*` scale
- Grid gap from `--grid-gap-cards`

---

### Utility Components

#### Badge

```html
<span class="alk-badge">Default</span>
<span class="alk-badge alk-badge--primary">Primary</span>
<span class="alk-badge alk-badge--success">Success</span>
<span class="alk-badge alk-badge--warning">Warning</span>
<span class="alk-badge alk-badge--info">Info</span>
```

#### Divider

```html
<hr class="alk-divider">
<hr class="alk-divider alk-divider--strong">
```

#### Link

```html
<!-- Standard link -->
<a href="#" class="alk-link">Learn more</a>

<!-- Circle link with icon -->
<a href="#" class="alk-link alk-link--circle">
  <span class="alk-link__icon">
    <svg width="11" height="11">...</svg>
  </span>
  <span>View project</span>
</a>
```

#### Aspect Ratio

```html
<!-- Square -->
<div class="alk-aspect alk-aspect--square">
  <img src="image.jpg" alt="">
</div>

<!-- Video (16:9) -->
<div class="alk-aspect alk-aspect--video">
  <iframe src="..."></iframe>
</div>

<!-- Wide (21:9) -->
<div class="alk-aspect alk-aspect--wide">...</div>

<!-- Portrait (3:4) -->
<div class="alk-aspect alk-aspect--portrait">...</div>
```

---

### Accessibility Components

#### Screen Reader Only

```html
<span class="alk-sr-only">This text is only for screen readers</span>
```

#### Skip Link

```html
<a href="#main-content" class="alk-skip-link">Skip to main content</a>
```

---

## Design Principles

### Mobile-First

All components are designed mobile-first and enhance progressively for larger screens.

### Dark Mode

All components automatically adapt to dark mode via `[data-theme="dark"]` on the `<html>` element.

```html
<html data-theme="dark">
```

### Accessibility

- WCAG AA compliant
- Minimum 44x44px touch targets
- Focus visible states
- Reduced motion support
- Reduced transparency support
- Screen reader text

### Performance

- Uses `contain: paint layout` for performance
- Optimized animations with GPU acceleration
- Lighter blur effects on mobile
- Reduced motion removes animations

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari 13+
- Android Chrome 80+
- Graceful degradation for older browsers

---

## Combining Components

Components are designed to work together seamlessly:

```html
<section class="alk-section alk-section--moss">
  <div class="alk-container alk-container--xl">
    <div class="alk-section__header">
      <p class="alk-section__eyebrow">Our Work</p>
      <h2 class="alk-section__title">Featured Projects</h2>
      <p class="alk-section__description">
        Explore our latest ventures and innovations.
      </p>
    </div>

    <div class="alk-grid alk-grid--3">
      <div class="alk-card alk-card--interactive">
        <div class="alk-card__media">
          <img src="project1.jpg" alt="Project 1">
        </div>
        <div class="alk-card__body">
          <span class="alk-card__tag alk-card__tag--market">Market</span>
          <h3 class="alk-card__title">Project Name</h3>
          <p class="alk-card__description">Brief description.</p>
        </div>
        <div class="alk-card__footer">
          <a href="#" class="alk-link alk-link--circle">
            <span class="alk-link__icon">→</span>
            <span>View project</span>
          </a>
        </div>
      </div>
      <!-- More cards... -->
    </div>
  </div>
</section>
```

---

### Hero Section

Unified hero component that replaces all page-specific hero implementations. Supports multiple layout, background, and content variants via modifiers.

#### Basic Usage

```html
<section class="alk-hero">
  <div class="alk-hero__container">
    <div class="alk-hero__content">
      <span class="alk-hero__eyebrow">About Us</span>
      <h1 class="alk-hero__title">Building the Future</h1>
      <p class="alk-hero__description">
        We combine innovative technology with thoughtful design to create
        exceptional digital experiences.
      </p>
    </div>
  </div>
</section>
```

#### With Actions

```html
<section class="alk-hero">
  <div class="alk-hero__container">
    <div class="alk-hero__content">
      <span class="alk-hero__eyebrow">Welcome</span>
      <h1 class="alk-hero__title">Let's Build Together</h1>
      <p class="alk-hero__description">
        Join our team of innovators shaping tomorrow's technology.
      </p>
      <div class="alk-hero__actions">
        <a href="#" class="alk-btn alk-btn--primary">Get Started</a>
        <a href="#" class="alk-btn alk-btn--secondary">Learn More</a>
      </div>
    </div>
  </div>
</section>
```

#### With Stats

```html
<section class="alk-hero">
  <div class="alk-hero__container">
    <div class="alk-hero__content">
      <span class="alk-hero__eyebrow">Impact</span>
      <h1 class="alk-hero__title">Trusted by Thousands</h1>
      <p class="alk-hero__description">
        Our platform powers mission-critical operations worldwide.
      </p>
      <div class="alk-hero__stats">
        <div class="alk-hero__stat">
          <span class="alk-hero__stat-value">24/7</span>
          <span class="alk-hero__stat-label">Active</span>
        </div>
        <div class="alk-hero__stat">
          <span class="alk-hero__stat-value">50K+</span>
          <span class="alk-hero__stat-label">Users</span>
        </div>
        <div class="alk-hero__stat">
          <span class="alk-hero__stat-value">99.9%</span>
          <span class="alk-hero__stat-label">Uptime</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Layout Variants

```html
<!-- Fullscreen (100vh) - Homepage style -->
<section class="alk-hero alk-hero--fullscreen alk-hero--large">
  ...
</section>

<!-- Split layout (two columns) - Careers style -->
<section class="alk-hero alk-hero--split alk-hero--wide">
  <div class="alk-hero__container">
    <div class="alk-hero__content">
      <span class="alk-hero__eyebrow">Careers</span>
      <h1 class="alk-hero__title">Join Our Team</h1>
      <p class="alk-hero__description">Build the future with us.</p>
      <div class="alk-hero__actions">
        <a href="#" class="alk-btn alk-btn--primary">View Openings</a>
      </div>
    </div>
    <div class="alk-hero__media">
      <img src="team-photo.jpg" alt="Our team">
    </div>
  </div>
</section>

<!-- Compact - Legal pages style -->
<section class="alk-hero alk-hero--compact alk-hero--small alk-hero--legal">
  ...
</section>
```

#### Background Variants

```html
<!-- Default: Subtle gradient -->
<section class="alk-hero">...</section>

<!-- Dark background (with video support) -->
<section class="alk-hero alk-hero--dark alk-hero--video">
  <div class="alk-hero__background">
    <video autoplay muted loop playsinline>
      <source src="hero-video.mp4" type="video/mp4">
    </video>
  </div>
  <div class="alk-hero__container">...</div>
</section>

<!-- Flat (minimal, no gradient) -->
<section class="alk-hero alk-hero--flat">...</section>

<!-- Legal page gradient -->
<section class="alk-hero alk-hero--legal">...</section>
```

#### Size Variants

```html
<!-- Large (homepage - 980px container, 4.5rem title) -->
<section class="alk-hero alk-hero--large">...</section>

<!-- Medium (default - 800px container, 3.5rem title) -->
<section class="alk-hero alk-hero--medium">...</section>

<!-- Small (legal - 768px container, clamp title) -->
<section class="alk-hero alk-hero--small">...</section>

<!-- Wide (split layouts - 1440px container) -->
<section class="alk-hero alk-hero--wide">...</section>
```

#### Title Line Breaks

```html
<h1 class="alk-hero__title">
  <span class="alk-hero__title-line">Build Amazing</span>
  <span class="alk-hero__title-line alk-hero__title-line--highlight">
    Digital Experiences
  </span>
</h1>
```

#### Common Combinations

```html
<!-- Homepage Hero -->
<section class="alk-hero alk-hero--fullscreen alk-hero--dark alk-hero--large alk-hero--video">
  ...
</section>

<!-- Careers Hero -->
<section class="alk-hero alk-hero--split alk-hero--wide">
  ...
</section>

<!-- About Hero -->
<section class="alk-hero alk-hero--large">
  ...
</section>

<!-- Contact Hero -->
<section class="alk-hero alk-hero--medium">
  ...
</section>

<!-- AI Page Hero -->
<section class="alk-hero alk-hero--fullscreen alk-hero--flat">
  ...
</section>

<!-- Legal Hero -->
<section class="alk-hero alk-hero--compact alk-hero--small alk-hero--legal">
  ...
</section>
```

#### Design Tokens

- Container widths: `--alk-hero-width` (customizable via CSS custom properties)
- Typography: Uses `--type-h1-display-*`, `--type-lead-*`, `--type-eyebrow-*`
- Spacing: Uses `--space-*` tokens throughout
- Colors: Uses semantic tokens (`--forest`, `--moss`, `--muted`, `--dew`)
- Glass effects: Uses `rgba()` with `backdrop-filter: blur()`
- Border radius: Uses `--radius-lg`, `--radius-full`

#### Responsive Behavior

- **Mobile (< 768px)**: All layouts become single column, stats/actions stack vertically
- **Tablet (768px - 1024px)**: Split layouts may stack depending on content
- **Desktop (> 1024px)**: Full layout variants active

#### Dark Mode

All hero variants include comprehensive dark mode overrides:
- Automatic background gradient inversion
- Text color adjustments for contrast
- Glass effect opacity changes
- Border color adjustments

#### Accessibility

- Semantic HTML structure (`<section>`, `<h1>`, `<p>`)
- Proper heading hierarchy
- ARIA attributes supported on optional elements
- Focus states on interactive elements
- Reduced motion support for animations
- Minimum contrast ratios maintained in all themes

#### Migration from Legacy Heroes

**Replace these legacy classes:**
- `home-hero` → `alk-hero alk-hero--fullscreen alk-hero--dark alk-hero--large alk-hero--video`
- `careers-hero` → `alk-hero alk-hero--split alk-hero--wide`
- `contact-hero` → `alk-hero alk-hero--medium`
- `ai-hero` → `alk-hero alk-hero--fullscreen alk-hero--flat`
- `privacy-v2-hero`, `terms-v2-hero` → `alk-hero alk-hero--compact alk-hero--small alk-hero--legal`
- `labs-hub-hero` → `alk-hero alk-hero--small`

**Benefits of unified component:**
- Zero page-specific hero CSS
- Consistent spacing and typography
- Automatic dark mode support
- Responsive behavior standardized
- Easier to maintain and extend

---

### CTA (Call-to-Action)

Unified Call-to-Action component that replaces all page-specific CTA implementations. Features gradient backgrounds, solid dark variants, and optional glass card wrappers.

#### Basic Usage

```html
<section class="alk-cta alk-cta--gradient">
  <div class="alk-container alk-container--lg">
    <div class="alk-cta__content">
      <h2 class="alk-cta__title">Ready to build with us?</h2>
      <p class="alk-cta__description">
        We're always looking for talented operators, designers, and engineers.
      </p>
      <div class="alk-cta__actions">
        <a href="careers.html" class="alk-btn alk-btn--primary alk-btn--lg">View Open Roles</a>
        <a href="contact.html" class="alk-btn alk-btn--secondary alk-btn--lg">Get In Touch</a>
      </div>
    </div>
  </div>
</section>
```

#### With Optional Eyebrow

```html
<section class="alk-cta alk-cta--gradient">
  <div class="alk-container alk-container--lg">
    <div class="alk-cta__content">
      <span class="alk-cta__eyebrow">Join Our Team</span>
      <h2 class="alk-cta__title">Ready to build with us?</h2>
      <p class="alk-cta__description">Supporting text...</p>
      <div class="alk-cta__actions">
        <a href="#" class="alk-btn alk-btn--primary alk-btn--lg">Primary Action</a>
      </div>
    </div>
  </div>
</section>
```

#### Background Variants

```html
<!-- Default gradient (forest → moss → dew) -->
<section class="alk-cta alk-cta--gradient">...</section>

<!-- Green gradient (interactive-green → interactive-green-dark) -->
<section class="alk-cta alk-cta--gradient-green">...</section>

<!-- Solid dark background -->
<section class="alk-cta alk-cta--solid-dark">...</section>
```

#### With Glass Card Wrapper

```html
<!-- Glass card wrapper (careers-style) -->
<section class="alk-cta alk-cta--gradient-green alk-cta--card">
  <div class="alk-container alk-container--lg">
    <div class="alk-cta__content">
      <h2 class="alk-cta__title">Ready to build</h2>
      <p class="alk-cta__description">
        Applications go through Breezy. For questions, email us directly.
      </p>
      <div class="alk-cta__actions">
        <a href="#" class="alk-btn alk-btn--primary alk-btn--lg">View all openings</a>
        <a href="#" class="alk-btn alk-btn--secondary alk-btn--lg">Learn about Alkymē</a>
      </div>
    </div>
  </div>
</section>
```

#### Size Variants

```html
<!-- Medium padding (default) -->
<section class="alk-cta alk-cta--gradient alk-cta--md">...</section>

<!-- Large padding -->
<section class="alk-cta alk-cta--gradient alk-cta--lg">...</section>

<!-- Extra large padding -->
<section class="alk-cta alk-cta--gradient alk-cta--xl">...</section>
```

#### Common Combinations

```html
<!-- Homepage CTA -->
<section class="alk-cta alk-cta--gradient alk-cta--md">
  ...
</section>

<!-- About Page CTA -->
<section class="alk-cta alk-cta--gradient alk-cta--lg">
  ...
</section>

<!-- Careers CTA with Glass Card -->
<section class="alk-cta alk-cta--gradient-green alk-cta--card">
  ...
</section>

<!-- AI Page CTA (minimal) -->
<section class="alk-cta alk-cta--solid-dark alk-cta--lg">
  ...
</section>
```

#### Design Tokens

- Typography: Uses `--type-h2-display-*`, `--type-lead-*`, `--type-eyebrow-*`
- Spacing: Uses `--space-*` tokens throughout
- Colors: Text uses `--eggshell-sky`, backgrounds use `--forest`, `--moss`, `--dew`, `--interactive-green`
- Glass effects: Uses `backdrop-filter: blur()` with RGBA backgrounds
- Border radius: Uses `--radius-2xl` for card variant
- Shadows: Layered shadows for depth

#### Button Styling

CTA sections override button colors for optimal contrast:
- **Primary buttons:** Cream background (`--eggshell-sky`) with dark forest text
- **Secondary buttons:** Transparent with cream border and text
- **Hover states:** Enhanced with subtle transforms and shadow changes
- **Active states:** Pressed effect with reduced shadow

#### Responsive Behavior

- **Mobile (< 768px)**: Reduced padding, smaller typography, stacked buttons
- **Tablet (768px - 1024px)**: Maintains horizontal button layout
- **Desktop (> 1024px)**: Full layout with maximum spacing

#### Dark Mode

All CTA variants include comprehensive dark mode overrides:
- Gradient backgrounds adjust to darker palette
- Glass card opacity reduced for better contrast
- Text maintains cream color for consistency
- Shadows enhanced for depth perception

#### Accessibility

- Semantic HTML structure (`<section>`, `<h2>`, `<p>`)
- Proper heading hierarchy
- Focus states on all interactive elements
- Reduced motion support (disables transforms)
- High contrast mode support (increased opacity, thicker borders)
- Minimum 44x44px touch targets on mobile

#### Migration from Legacy CTAs

**Replace these legacy implementations:**
- Homepage `cta-section__*` (undefined classes) → `alk-cta --gradient --md`
- About `alk-section--gradient` → `alk-cta --gradient --lg`
- Careers `careers-cta` → `alk-cta --gradient-green --card`
- AI `ai-cta` → `alk-cta --solid-dark --lg`

**Benefits of unified component:**
- Zero page-specific CTA CSS needed
- Consistent button contrast and interactions
- Automatic dark mode support
- Standardized spacing and typography
- Easier to maintain and extend

---

## Version History

### 2.0.0 (Current)
- Initial release of unified component system
- All components use alkyme-tokens.css
- Complete BEM naming convention
- Mobile-first responsive
- Full dark mode support
- WCAG AA accessibility

### 2.1.0 (April 2026)
- Added unified `alk-hero` component with comprehensive variants
- Replaces 6 different page-specific hero implementations
- Supports layout, background, and size variants
- Includes stats, actions, and media support
- Full dark mode coverage out of the box

### 2.2.0 (April 2026)
- Added unified `alk-cta` component with gradient and solid backgrounds
- Replaces 4 different page-specific CTA implementations
- Supports glass card wrapper variant (careers-style)
- Includes button color overrides for optimal contrast
- Full dark mode coverage and accessibility features
