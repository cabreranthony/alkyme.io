# Alkymē Design System - Component Specifications

**Version:** 1.0
**Last Updated:** April 24, 2026
**Status:** Production
**Philosophy:** Apple-minimalist aesthetic with liquid glass micro-interactions

---

## Table of Contents

1. [Buttons](#1-buttons)
2. [Cards](#2-cards)
3. [Navigation](#3-navigation)
4. [Forms](#4-forms)
5. [Sections](#5-sections)
6. [Additional Components](#6-additional-components)

---

## 1. Buttons

### Purpose

Buttons are the primary interactive elements for triggering actions. Use buttons for high-emphasis actions like CTAs, form submissions, and navigation to key pages.

### When to Use

- **Primary Button:** Main call-to-action on a page (limit to 1-2 per viewport)
- **Secondary Button:** Alternative actions, lower hierarchy
- **Large Button:** Hero sections, major CTAs, conversion-critical moments

### Anatomy

```html
<!-- Primary Button -->
<button class="btn btn--primary">
  Primary Action
</button>

<!-- Secondary Button -->
<a href="/page" class="btn btn--secondary">
  Secondary Action
</a>

<!-- Large Button -->
<button class="btn btn--primary btn--lg">
  Large Primary Action
</button>

<!-- Button with Icon -->
<button class="btn btn--primary">
  <svg width="20" height="20"><!-- icon --></svg>
  <span>Action with Icon</span>
</button>
```

### States

#### Default State
```css
.btn {
  /* Base Properties */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);           /* 4px gap between icon and text */
  padding: var(--space-sm) var(--space-xl);  /* 10px 32px */
  font-family: var(--font-ui);
  font-size: var(--type-button-size);        /* 17px - Apple standard */
  font-weight: var(--type-strong-weight);    /* 600 */
  border-radius: var(--radius-pill);         /* Fully rounded ends */

  /* Glass Effects */
  backdrop-filter: blur(4px) saturate(110%);
  -webkit-backdrop-filter: blur(4px) saturate(110%);

  /* Animation */
  transition: all var(--duration-fast) var(--ease-soft);  /* 150ms */
}
```

#### Primary - Default
```css
.btn--primary {
  background: var(--bark);                    /* #040d12 */
  color: var(--eggshell-sky);                 /* #fff9f0 */
  box-shadow: var(--glass-marketing-shadow);
  border: none;
}
```

#### Primary - Hover
```css
.btn--primary:hover {
  background: var(--forest);                  /* #183d3d */
  color: var(--eggshell-sky);
  transform: translateY(-0.5px);              /* Subtle lift */
  box-shadow: var(--glass-marketing-shadow-hover);
}
```

#### Primary - Active (Press)
```css
.btn--primary:active {
  transform: translateY(0) scale(0.98);       /* Apple-style press feedback */
  box-shadow: var(--glass-marketing-shadow);
  transition-duration: var(--duration-instant);  /* 100ms - instant press feel */
}
```

#### Primary - Focus
```css
.btn--primary:focus-visible {
  outline: var(--focus-ring);                 /* 2px solid forest */
  outline-offset: var(--focus-offset);        /* 3px */
  box-shadow: var(--glass-marketing-shadow-focus);
}
```

#### Primary - Disabled
```css
.btn--primary:disabled {
  opacity: var(--glass-marketing-disabled-opacity);  /* 0.5 */
  cursor: not-allowed;
  transform: none;
  pointer-events: none;
}
```

#### Secondary - Default
```css
.btn--secondary {
  background: rgba(var(--rgb-white), 0.5);
  color: var(--bark);
  border: 1px solid var(--border);
  box-shadow: var(--glass-marketing-shadow);
}
```

#### Secondary - Hover
```css
.btn--secondary:hover {
  background: rgba(var(--rgb-white), 0.7);
  border-color: var(--moss);                  /* #5c8374 */
  color: var(--moss);
  transform: translateY(-0.5px);
  box-shadow: var(--glass-marketing-shadow-hover);
}
```

#### Large Size Modifier
```css
.btn--lg {
  padding: var(--space-md) var(--space-2xl);  /* 16px 48px */
  font-size: var(--type-lead-size);           /* 18px-21px fluid */
}
```

### Accessibility Requirements (WCAG AAA)

#### Keyboard Support
- **Tab:** Focus button
- **Enter/Space:** Activate button
- **Shift+Tab:** Focus previous element

#### Minimum Touch Target
- Minimum size: 44x44px (WCAG 2.5.5)
- Current implementation: Default button achieves 42px height, --lg variant exceeds requirement
- Recommendation: Add `min-height: 44px` to `.btn` for AAA compliance

#### Focus Indicators
```html
<!-- Always include visible focus styles -->
<button class="btn btn--primary">
  <!-- Focus visible via outline + offset + shadow -->
</button>
```

#### Color Contrast
- **Primary (Light Mode):**
  - Background: `#040d12` (bark)
  - Text: `#fff9f0` (eggshell-sky)
  - Contrast Ratio: 16.8:1 (AAA - exceeds 7:1)

- **Secondary (Light Mode):**
  - Background: `rgba(255,255,255,0.5)` + border
  - Text: `#040d12` (bark)
  - Contrast Ratio: 16.8:1 (AAA)

- **Primary (Dark Mode):**
  - Background: `#5c8374` (moss)
  - Text: `#f8fcf9`
  - Contrast Ratio: 5.2:1 (AA - meets 4.5:1, approaching AAA)

#### ARIA Attributes
```html
<!-- Loading state -->
<button class="btn btn--primary" aria-busy="true" disabled>
  <svg><!-- spinner icon --></svg>
  <span>Loading...</span>
</button>

<!-- Icon-only button (requires label) -->
<button class="btn btn--secondary" aria-label="Close modal">
  <svg><!-- X icon --></svg>
</button>

<!-- Toggle button -->
<button
  class="btn btn--secondary"
  aria-pressed="false"
  aria-label="Toggle theme">
  <svg><!-- icon --></svg>
</button>
```

### Responsive Behavior

#### Mobile Optimization (max-width: 768px)
```css
@media (max-width: 768px) {
  .btn {
    /* Lighter glass effects for performance */
    backdrop-filter: var(--glass-marketing-filter-mobile);  /* blur(12px) */
    -webkit-backdrop-filter: var(--glass-marketing-filter-mobile);
  }

  /* Full-width buttons in CTA sections */
  .cta-section__actions .btn {
    width: 100%;
  }
}
```

### Token Mapping

| Property | Token | Value (Light) | Value (Dark) |
|----------|-------|---------------|--------------|
| Font family | `--font-ui` | Source Sans 3 | Source Sans 3 |
| Font size | `--type-button-size` | 17px | 17px |
| Font weight | `--type-strong-weight` | 600 | 600 |
| Border radius | `--radius-pill` | 9999px | 9999px |
| Padding vertical | `--space-sm` | 10px | 10px |
| Padding horizontal | `--space-xl` | 32px | 32px |
| Gap (icon spacing) | `--space-xs` | 4px | 4px |
| Transition speed | `--duration-fast` | 150ms | 150ms |
| Easing | `--ease-soft` | cubic-bezier(0.08, 0.52, 0.52, 1) | same |

### Do's and Don'ts

#### Do:
- Use primary buttons for conversion-critical actions
- Limit primary buttons to 1-2 per viewport to maintain hierarchy
- Include descriptive text (avoid "Click Here" or "Submit")
- Ensure adequate spacing between adjacent buttons (min 16px)
- Use secondary buttons for alternative, lower-priority actions
- Include loading states for async actions

#### Don't:
- Don't use multiple primary buttons competing for attention
- Don't use buttons for navigation if a link is more appropriate
- Don't rely on color alone to communicate state (use text/icons too)
- Don't reduce font size below 17px for legibility
- Don't remove focus indicators
- Don't use disabled state without explanation

### Special Variant: Gradient CTA Button

Used in `.cta-section--gradient` contexts (animated gradient backgrounds):

```css
.cta-section--gradient .btn--primary {
  /* Dual-layer gradient: solid background + animated border */
  background:
    var(--bark) padding-box,
    linear-gradient(135deg, var(--forest), var(--moss), var(--dew), var(--moss), var(--forest)) border-box;
  background-size: 100% 100%, 300% 300%;
  color: var(--eggshell-sky);
  border: 2px solid transparent;

  /* Sophisticated, slow animation */
  animation: ctaGradientBorderRotate 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes ctaGradientBorderRotate {
  0%, 100% { background-position: 0% 0%, 0% 50%; }
  50% { background-position: 0% 0%, 100% 50%; }
}

/* Hover speeds up animation + changes background */
.cta-section--gradient .btn--primary:hover {
  background: var(--forest) padding-box, /* ... */;
  animation-duration: 3s;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(var(--rgb-bark), 0.35);
}
```

**Reduced Motion Support:**
```css
@media (prefers-reduced-motion: reduce) {
  .cta-section--gradient .btn--primary {
    animation: none;
    background-position: 0% 0%, 50% 50%;  /* Static gradient */
  }
}
```

---

## 2. Cards

### Purpose

Cards are content containers that group related information. Use cards for features, services, team members, ventures, or any discrete content unit that benefits from visual separation.

### When to Use

- Displaying collections of similar content (features, services, ventures)
- Creating scannable layouts with multiple distinct topics
- Grouping related information that may have associated actions
- Building interactive galleries or catalogs

### Anatomy

```html
<!-- Basic Card -->
<div class="card">
  <h3 class="card__title">Card Title</h3>
  <p class="card__description">
    Description text providing context about this content.
  </p>
</div>

<!-- Card with Image and CTA -->
<div class="card">
  <img
    src="/path/to/image.jpg"
    alt="Descriptive alt text"
    style="width: 100%; height: 240px; object-fit: cover; border-radius: var(--radius-media-lg); margin-bottom: var(--space-lg);">
  <h3 class="card__title">Card Title</h3>
  <p class="card__description" style="margin-bottom: var(--space-lg);">
    Description text goes here.
  </p>
  <a href="/learn-more" class="btn btn--secondary">Learn More</a>
</div>

<!-- Clickable Card (entire card is a link) -->
<a href="/destination" class="card" style="text-decoration: none; color: inherit;">
  <h3 class="card__title">Clickable Card</h3>
  <p class="card__description">
    The entire card surface is interactive.
  </p>
</a>
```

### Layout Specifications

#### Base Card Styles
```css
.card {
  /* Structure */
  background: var(--white);                   /* #ffffff in light mode */
  border: 1px solid rgba(var(--rgb-forest), 0.08);
  border-radius: var(--radius-media-lg);      /* clamp(1rem, 1.85vw, 1.35rem) */
  padding: var(--space-3xl);                  /* 64px - Apple-level generosity */

  /* Position context for pseudo-elements */
  position: relative;

  /* Glass Effects */
  backdrop-filter: blur(4px) saturate(110%);
  -webkit-backdrop-filter: blur(4px) saturate(110%);
  box-shadow: var(--glass-marketing-shadow);

  /* Animation */
  transition: all var(--duration-medium) var(--ease-soft);  /* 250ms */
  will-change: transform;  /* Performance optimization */
}
```

#### Typography Within Cards
```css
.card__title {
  /* Uses h3 defaults from components.css */
  font-family: var(--font-ui);
  font-size: var(--type-h3-section-size);     /* clamp(1.18rem, 2.4vw, 1.42rem) */
  font-weight: var(--type-heading-ui-weight); /* 600 */
  line-height: var(--type-h-ui-line);         /* 1.22 */
  letter-spacing: var(--type-heading-ui-track);  /* -0.012em */
  margin-bottom: var(--space-sm);             /* 10px */
}

.card__description {
  color: var(--muted);                        /* var(--forest) in light mode */
  line-height: var(--type-lead-line);         /* 1.55 */
}
```

### Spacing Rules

#### Internal Spacing
- **Padding:** `var(--space-3xl)` (64px) on all sides
- **Title to Description:** `var(--space-sm)` (10px)
- **Description to CTA:** `var(--space-lg)` (24px)
- **Image to Content:** `var(--space-lg)` (24px)

#### External Spacing (Card Grids)
```css
/* Grid Layout */
.paths-grid,
.phases-grid,
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-3xl);  /* 64px between cards */
}

@media (max-width: 768px) {
  .paths-grid,
  .phases-grid,
  .philosophy-grid {
    grid-template-columns: 1fr;  /* Stack on mobile */
    gap: var(--space-2xl);       /* 48px on mobile */
  }
}
```

### Hover/Interaction States

#### Hover State
```css
.card:hover {
  border-color: rgba(var(--rgb-forest), 0.12);  /* Slightly more visible border */
  box-shadow: var(--glass-marketing-shadow-hover);
  transform: translateY(-1px);  /* Subtle lift - reduced from -2px */
}

/* Enhanced shadow on hover using pseudo-element */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  opacity: 0;
  box-shadow: 0 20px 40px rgba(var(--rgb-forest), 0.15);
  transition: opacity var(--duration-medium) var(--ease-soft);
  pointer-events: none;
  z-index: -1;
}

.card:hover::before {
  opacity: 1;
}
```

#### Focus State (for clickable cards)
```css
.card:focus-visible {
  outline: var(--focus-ring);           /* 2px solid forest */
  outline-offset: var(--focus-offset);  /* 3px */
  box-shadow: var(--glass-marketing-shadow-focus);
}
```

#### Active State (for clickable cards)
```css
.card:active {
  transform: translateY(0) scale(0.99);  /* Subtle press */
  box-shadow: var(--glass-marketing-shadow-active);
  transition-duration: var(--duration-instant);  /* 100ms */
}
```

### Responsive Behavior

```css
@media (max-width: 768px) {
  .card {
    padding: var(--space-2xl);  /* 48px on mobile */
    backdrop-filter: var(--glass-marketing-filter-mobile);
    -webkit-backdrop-filter: var(--glass-marketing-filter-mobile);
  }
}
```

### Dark Mode

```css
html[data-theme="dark"] .card {
  background: rgba(var(--rgb-white), 0.03);      /* Very subtle white tint */
  border-color: rgba(var(--rgb-dew), 0.1);
}

html[data-theme="dark"] .card:hover {
  background: rgba(var(--rgb-white), 0.05);
  border-color: rgba(var(--rgb-dew), 0.15);
}
```

### Accessibility

#### Keyboard Navigation
- If card is clickable (wrapped in `<a>`), must be keyboard focusable
- Focus indicator must be clearly visible
- Enter key activates link

#### ARIA Attributes
```html
<!-- Card with external link -->
<a href="https://external.com" class="card" target="_blank" rel="noopener">
  <h3 class="card__title">External Resource</h3>
  <p class="card__description">Opens in new window</p>
  <span class="sr-only">(opens in new window)</span>
</a>

<!-- Card in a list -->
<ul role="list" class="paths-grid">
  <li>
    <div class="card">
      <h3 class="card__title">Studio Model</h3>
      <!-- ... -->
    </div>
  </li>
</ul>
```

#### Screen Reader Considerations
- Use semantic headings inside cards (`<h3>` or appropriate level)
- Ensure images have descriptive alt text
- If card is clickable, entire title should be in link text (not "Read more")

### Token Mapping

| Property | Token | Light Value | Dark Value |
|----------|-------|-------------|------------|
| Background | `--white` | #ffffff | rgba(255,255,255,0.03) |
| Border | `rgba(var(--rgb-forest), 0.08)` | rgba(24,61,61,0.08) | rgba(147,177,166,0.1) |
| Border radius | `--radius-media-lg` | clamp(1rem, 1.85vw, 1.35rem) | same |
| Padding | `--space-3xl` | 64px | 64px |
| Shadow | `--glass-marketing-shadow` | Complex token | Complex token |
| Transition | `--duration-medium` | 250ms | 250ms |

### Do's and Don'ts

#### Do:
- Use consistent card heights in a grid when possible
- Include clear visual hierarchy (title > description > action)
- Provide adequate padding (64px is generous but intentional)
- Use cards for scannable, grouped content
- Make entire card clickable if it leads to a single destination
- Include subtle hover states for interactive feedback

#### Don't:
- Don't nest cards within cards
- Don't use cards for single, primary content (use section layout instead)
- Don't make cards clickable if they contain multiple actions
- Don't remove border/shadow - these define the card boundary
- Don't use cards as generic divs (they imply discrete content units)
- Don't exceed 300 characters in card descriptions

---

## 3. Navigation

### Purpose

The navigation component provides primary site navigation with fixed positioning, glass morphism aesthetic, and theme/language controls. It maintains visibility during scroll while adapting to light/dark modes.

### When to Use

- Primary site navigation (appears on all pages)
- Fixed header with brand logo, main links, and utility actions
- Should be consistent across all pages except unique landing pages

### Anatomy

```html
<nav class="nav">
  <div class="container">
    <div class="nav__inner">
      <!-- Brand -->
      <a href="/index.html" class="nav__logo">Alkymē</a>

      <!-- Main Navigation Links -->
      <div class="nav__menu">
        <a href="/about.html" class="nav__link">About</a>
        <a href="/labs.html" class="nav__link">Labs</a>
        <a href="/careers.html" class="nav__link nav__link--active">Careers</a>
        <a href="/contact.html" class="nav__link">Contact</a>
      </div>

      <!-- Utility Actions -->
      <div class="nav__actions">
        <!-- Language Selector -->
        <button type="button" class="alkyme-lang-trigger"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-label="Select language">
          <svg width="20" height="20"><!-- globe icon --></svg>
          <span data-alkyme-lang-code>EN</span>
        </button>

        <!-- Theme Toggle -->
        <button type="button" class="theme-toggle" aria-label="Toggle theme">
          <svg width="20" height="20"><!-- sun icon --></svg>
        </button>
      </div>
    </div>
  </div>
</nav>
```

### Mobile vs Desktop Behavior

#### Desktop (>768px)
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  /* Glass morphism background */
  background: rgba(var(--rgb-white), 0.80);
  backdrop-filter: var(--glass-marketing-filter);          /* blur(20px) saturate(170%) */
  -webkit-backdrop-filter: var(--glass-marketing-filter);

  /* Subtle border */
  border-bottom: 1px solid rgba(var(--rgb-forest), 0.08);

  /* Smooth theme transitions */
  transition: background-color var(--duration-fast) var(--ease-soft);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;  /* Fixed nav height */
}

.nav__menu {
  display: flex;
  align-items: center;
  gap: var(--space-2xl);  /* 48px between links */
}
```

#### Mobile (≤768px)
```css
@media (max-width: 768px) {
  .nav__menu {
    gap: var(--space-lg);  /* 24px - tighter spacing */
  }

  /* NOTE: Current implementation does NOT include mobile hamburger menu */
  /* Mobile shows condensed horizontal nav with smaller gaps */
  /* Future enhancement: Implement slide-out drawer for mobile */
}
```

**Current Limitation:** The navigation does not include a responsive mobile menu (hamburger). On small screens, links compress horizontally. **Recommendation:** Implement mobile drawer menu for viewports <640px.

### Component Structure

#### Logo
```css
.nav__logo {
  font-family: var(--font-display);    /* Libre Baskerville */
  font-size: 1.25rem;                  /* 20px */
  font-weight: 400;
  color: var(--bark);
  letter-spacing: -0.01em;
}
```

#### Navigation Links
```css
.nav__link {
  font-size: var(--type-body-size);      /* 17px */
  font-weight: var(--type-strong-weight); /* 600 */
  color: var(--text);
  padding: var(--space-xs) 0;            /* Vertical padding for touch target */
  position: relative;
  transition: color var(--duration-fast) var(--ease-soft);
}

.nav__link:hover {
  color: var(--moss);  /* #5c8374 */
}

/* Active page indicator */
.nav__link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--moss);
}
```

#### Utility Actions (Theme Toggle, Language Selector)
```css
.theme-toggle,
.alkyme-lang-trigger {
  appearance: none;
  border: none;
  background: none;
  padding: var(--space-xs);       /* 4px - icon buttons */
  cursor: pointer;
  color: var(--text);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);           /* 4px between icon and text */

  border-radius: var(--radius);   /* 8px */
  transition: background-color var(--duration-fast) var(--ease-soft);

  font-size: var(--type-caption-size);     /* 0.92rem */
  font-weight: var(--type-strong-weight);  /* 600 */
}

.theme-toggle:hover,
.alkyme-lang-trigger:hover {
  background: var(--hover-overlay);  /* rgba(var(--rgb-forest), 0.05) */
}

.theme-toggle svg,
.alkyme-lang-trigger svg {
  width: 20px;
  height: 20px;
}
```

### Dark Mode

```css
html[data-theme="dark"] .nav {
  background: rgba(var(--rgb-bark), 0.80);
  border-bottom-color: rgba(var(--rgb-dew), 0.1);
}

html[data-theme="dark"] .nav__logo {
  color: var(--eggshell-sky);  /* Light text on dark bg */
}
```

### Accessibility

#### Keyboard Navigation
- **Tab:** Move through nav links and action buttons sequentially
- **Shift+Tab:** Move backwards
- **Enter:** Activate link/button
- **Arrow Keys:** (Not implemented) Could enhance to move between nav links

#### Focus Management
```css
.nav__link:focus-visible,
.theme-toggle:focus-visible,
.alkyme-lang-trigger:focus-visible {
  outline: var(--focus-ring);           /* 2px solid forest */
  outline-offset: var(--focus-offset);  /* 3px */
  border-radius: var(--radius-sm);      /* Rounded focus outline */
}
```

#### ARIA Attributes
```html
<!-- Language Selector -->
<button
  type="button"
  class="alkyme-lang-trigger"
  aria-haspopup="dialog"           <!-- Indicates opens modal -->
  aria-expanded="false"            <!-- Toggle when modal opens -->
  aria-label="Select language">   <!-- Screen reader label -->
  <svg><!-- icon --></svg>
  <span data-alkyme-lang-code>EN</span>
</button>

<!-- Theme Toggle -->
<button
  type="button"
  class="theme-toggle"
  aria-label="Toggle theme"       <!-- Descriptive label -->
  aria-pressed="false">            <!-- Toggle state -->
  <svg><!-- icon --></svg>
</button>

<!-- Active Page Indication -->
<a
  href="/careers.html"
  class="nav__link nav__link--active"
  aria-current="page">             <!-- Screen reader announcement -->
  Careers
</a>
```

#### Screen Reader Considerations
- Navigation wrapped in `<nav>` semantic element
- Active page indicated with `aria-current="page"`
- Icon-only buttons require `aria-label`
- Language code visible text provides context ("EN")

#### Skip Link
**Missing from current implementation.** Add before navigation:

```html
<a href="#main" class="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--button-primary-bg);
  color: var(--button-primary-fg);
  padding: var(--space-sm) var(--space-lg);
  text-decoration: none;
  z-index: 10000;
  font-weight: var(--type-strong-weight);
}

.skip-link:focus {
  top: 0;
}
</style>
```

### Main Content Offset

Since navigation is `position: fixed`, page content must be offset:

```css
main {
  padding-top: 72px;  /* Matches nav height */
}
```

### Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| >768px | Full horizontal nav with standard spacing |
| ≤768px | Compressed horizontal nav with reduced gaps |
| <640px | **Needs mobile menu** (hamburger drawer) |

### Token Mapping

| Property | Token | Value |
|----------|-------|-------|
| Height | Hardcoded | 72px |
| Background opacity | Custom | 0.80 |
| Backdrop filter | `--glass-marketing-filter` | blur(20px) saturate(170%) |
| Border | Custom | 1px solid rgba(forest, 0.08) |
| Logo font | `--font-display` | Libre Baskerville |
| Link font | `--font-ui` | Source Sans 3 |
| Link size | `--type-body-size` | 17px |
| Link weight | `--type-strong-weight` | 600 |
| Link gap | `--space-2xl` | 48px (desktop), 24px (mobile) |

### Do's and Don'ts

#### Do:
- Keep navigation links to 4-6 primary items
- Use clear, concise labels (1-2 words)
- Indicate current page with visual and ARIA markers
- Provide visible focus states for all interactive elements
- Use semantic `<nav>` element
- Include skip link for keyboard users
- Test with screen readers

#### Don't:
- Don't use dropdowns unless absolutely necessary
- Don't hide navigation on scroll (fixed positioning is intentional)
- Don't change link order between pages
- Don't use icon-only buttons without labels
- Don't rely on color alone for active state (use underline too)
- Don't forget mobile users (hamburger menu needed)

---

## 4. Forms

### Purpose

Form components collect user input with clear states, validation feedback, and accessibility. Used for contact forms, newsletter signups, search, and data entry.

### When to Use

- Contact forms (primary use case on contact.html)
- Newsletter subscriptions
- Search inputs
- Application forms
- Any user data collection

### Anatomy

```html
<!-- Complete Form Example -->
<form class="contact-form" action="/api/contact" method="POST">

  <!-- Text Input -->
  <div class="form__field">
    <label for="name" class="form__label">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      class="form__input"
      required
      autocomplete="name"
      aria-describedby="name-help">
    <span id="name-help" class="form__help">Enter your full name</span>
  </div>

  <!-- Email Input -->
  <div class="form__field">
    <label for="email" class="form__label">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      class="form__input"
      required
      autocomplete="email"
      aria-describedby="email-error">
    <span id="email-error" class="form__error" role="alert" hidden>
      Please enter a valid email address
    </span>
  </div>

  <!-- Select Dropdown -->
  <div class="form__field">
    <label for="interest" class="form__label">I'm interested in...</label>
    <select id="interest" name="interest" class="form__select" required>
      <option value="">Select an option</option>
      <option value="partnership">Partnership or collaboration</option>
      <option value="investment">Investment opportunities</option>
      <option value="careers">Joining the team</option>
    </select>
  </div>

  <!-- Textarea -->
  <div class="form__field">
    <label for="message" class="form__label">Message</label>
    <textarea
      id="message"
      name="message"
      class="form__textarea"
      required
      rows="6"
      placeholder="Tell us a bit about what you're looking to discuss..."></textarea>
  </div>

  <!-- Submit Button -->
  <button type="submit" class="btn btn--primary btn--lg">
    Send Message
  </button>

</form>
```

### Input States

#### Default State
```css
.form__input,
.form__textarea,
.form__select {
  width: 100%;
  padding: var(--space-sm) var(--space-md);  /* 10px 16px */
  font-family: var(--font-ui);
  font-size: var(--type-body-size);          /* 17px */
  border: 1px solid rgba(var(--rgb-forest), 0.2);
  border-radius: var(--radius);              /* 8px */
  background: var(--white);
  color: var(--text);
  transition: all var(--duration-fast) var(--ease-soft);
}
```

#### Focus State
```css
.form__input:focus,
.form__textarea:focus,
.form__select:focus {
  outline: none;  /* Remove default browser outline */
  border-color: var(--moss);                 /* #5c8374 */
  box-shadow: 0 0 0 3px rgba(var(--rgb-moss), 0.1);  /* Focus ring */
}
```

#### Error State
```css
.form__input[aria-invalid="true"],
.form__textarea[aria-invalid="true"],
.form__select[aria-invalid="true"] {
  border-color: var(--color-danger);         /* #c5221f */
  box-shadow: 0 0 0 3px rgba(var(--rgb-danger), 0.1);
}

.form__error {
  display: block;
  margin-top: var(--space-xs);  /* 4px */
  color: var(--color-danger);
  font-size: var(--type-caption-size);  /* 0.92rem */
  font-weight: var(--type-strong-weight);
}
```

#### Success State
```css
.form__input[aria-invalid="false"],
.form__textarea[aria-invalid="false"],
.form__select[aria-invalid="false"] {
  border-color: var(--moss);
}

.form__success {
  display: block;
  margin-top: var(--space-xs);
  color: var(--moss);
  font-size: var(--type-caption-size);
  font-weight: var(--type-strong-weight);
}
```

#### Disabled State
```css
.form__input:disabled,
.form__textarea:disabled,
.form__select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: var(--cloudy-day);  /* #f4f4f4 */
}
```

#### Placeholder
```css
.form__input::placeholder,
.form__textarea::placeholder {
  color: var(--muted);
  opacity: 0.6;
}
```

### Label Requirements

#### Always Include Labels
```html
<!-- CORRECT: Visible label -->
<label for="email" class="form__label">Email</label>
<input type="email" id="email" class="form__input">

<!-- INCORRECT: No label -->
<input type="email" placeholder="Email" class="form__input">

<!-- ACCEPTABLE: Visually hidden label if design requires -->
<label for="search" class="sr-only">Search</label>
<input type="search" id="search" placeholder="Search...">
```

#### Label Styles
```css
.form__label {
  display: block;
  font-weight: var(--type-strong-weight);  /* 600 */
  margin-bottom: var(--space-xs);          /* 4px */
  color: var(--text);
  font-size: var(--type-body-size);        /* 17px */
}

/* Optional indicator */
.form__label--required::after {
  content: ' *';
  color: var(--color-danger);
}
```

### Field Spacing
```css
.form__field {
  margin-bottom: var(--space-lg);  /* 24px between fields */
}
```

### Error Messaging Patterns

#### Inline Validation
```html
<div class="form__field">
  <label for="email" class="form__label">Email</label>
  <input
    type="email"
    id="email"
    class="form__input"
    aria-invalid="true"
    aria-describedby="email-error">
  <span id="email-error" class="form__error" role="alert">
    Please enter a valid email address
  </span>
</div>
```

#### Form-Level Errors
```html
<div class="form__alert form__alert--error" role="alert">
  <strong>Unable to submit:</strong> Please fix the errors below.
</div>
```

#### Success Message
```html
<div class="form__alert form__alert--success" role="status">
  <strong>Message sent!</strong> We'll get back to you within 2-3 business days.
</div>
```

```css
.form__alert {
  padding: var(--space-md);
  border-radius: var(--radius);
  margin-bottom: var(--space-lg);
  font-size: var(--type-body-size);
}

.form__alert--error {
  background: rgba(var(--rgb-danger), 0.1);
  border: 1px solid var(--color-danger);
  color: var(--text);
}

.form__alert--success {
  background: rgba(var(--rgb-moss), 0.1);
  border: 1px solid var(--moss);
  color: var(--text);
}
```

### Validation UX

#### Timing
- **On blur:** Validate after user leaves field (don't validate while typing)
- **On submit:** Validate all fields and focus first error
- **On correction:** Remove error as soon as input becomes valid

#### Error Message Guidelines
- Be specific: "Email must include @" not "Invalid input"
- Be helpful: "Password must be at least 8 characters"
- Be concise: Keep under 100 characters
- Use plain language: Avoid technical jargon

### Textarea Specific
```css
.form__textarea {
  resize: vertical;        /* Allow vertical resize only */
  min-height: 120px;       /* Default minimum height */
  max-height: 400px;       /* Prevent excessive height */
}
```

### Dark Mode
```css
html[data-theme="dark"] .form__input,
html[data-theme="dark"] .form__textarea,
html[data-theme="dark"] .form__select {
  background: rgba(var(--rgb-white), 0.03);
  border-color: rgba(var(--rgb-dew), 0.2);
  color: var(--text);
}

html[data-theme="dark"] .form__input::placeholder,
html[data-theme="dark"] .form__textarea::placeholder {
  color: rgba(var(--rgb-eggshell), 0.5);
}
```

### Accessibility

#### Required Fields
```html
<!-- Method 1: HTML5 required attribute -->
<input type="text" required>

<!-- Method 2: ARIA (for custom validation) -->
<input type="text" aria-required="true">

<!-- Method 3: Visual indicator in label -->
<label class="form__label form__label--required">Name</label>
```

#### Error Announcements
```html
<!-- Use role="alert" for immediate announcement -->
<span id="email-error" class="form__error" role="alert">
  Invalid email address
</span>

<!-- Associate with input via aria-describedby -->
<input
  type="email"
  aria-invalid="true"
  aria-describedby="email-error">
```

#### Form Submission States
```html
<!-- Loading state -->
<button type="submit" class="btn btn--primary" aria-busy="true" disabled>
  <svg><!-- spinner --></svg>
  <span>Sending...</span>
</button>

<!-- After successful submission -->
<div role="status" aria-live="polite">
  Your message has been sent successfully.
</div>
```

#### Autocomplete Attributes
```html
<!-- Help browsers and password managers -->
<input type="text" autocomplete="name">
<input type="email" autocomplete="email">
<input type="tel" autocomplete="tel">
<input type="text" autocomplete="organization">
```

### Token Mapping

| Property | Token | Value |
|----------|-------|-------|
| Font family | `--font-ui` | Source Sans 3 |
| Font size | `--type-body-size` | 17px |
| Padding vertical | `--space-sm` | 10px |
| Padding horizontal | `--space-md` | 16px |
| Border radius | `--radius` | 8px |
| Field spacing | `--space-lg` | 24px |
| Label weight | `--type-strong-weight` | 600 |
| Focus color | `--moss` | #5c8374 |
| Error color | `--color-danger` | #c5221f |

### Do's and Don'ts

#### Do:
- Always include visible labels
- Validate on blur, not on every keystroke
- Show errors close to the relevant field
- Use specific, helpful error messages
- Include autocomplete attributes
- Mark required fields clearly
- Test with keyboard only
- Test with screen readers
- Provide success confirmation

#### Don't:
- Don't use placeholder as a label replacement
- Don't validate while user is typing
- Don't show errors before user has finished
- Don't use generic errors ("Invalid input")
- Don't disable submit button permanently
- Don't forget disabled state styling
- Don't remove error messages without user action
- Don't rely on color alone for validation states

---

## 5. Sections

### Purpose

Section components provide vertical rhythm and consistent spacing throughout the page. They serve as the primary structural containers for content bands.

### When to Use

- Every major content block should be wrapped in a section
- Use modifiers to control spacing, background, and padding
- Sections create the vertical flow of the page

### Anatomy

```html
<!-- Default Section -->
<section class="section">
  <div class="container">
    <!-- Content -->
  </div>
</section>

<!-- Section with Gray Background -->
<section class="section section--gray">
  <div class="container">
    <!-- Content -->
  </div>
</section>

<!-- Large Section (More Padding) -->
<section class="section section--lg">
  <div class="container">
    <!-- Content -->
  </div>
</section>

<!-- Small Section (Less Padding) -->
<section class="section section--sm">
  <div class="container">
    <!-- Content -->
  </div>
</section>

<!-- No Padding Section (Full-bleed content) -->
<section class="section section--no-padding">
  <!-- No container - full width -->
</section>
```

### Spacing System

#### Base Section
```css
.section {
  padding: var(--space-5xl) 0;  /* 160px top/bottom */
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-4xl) 0;  /* 96px on mobile */
  }
}
```

#### Small Section
```css
.section--sm {
  padding: var(--space-3xl) 0;  /* 64px top/bottom */
}

@media (max-width: 768px) {
  .section--sm {
    padding: var(--space-2xl) 0;  /* 48px on mobile */
  }
}
```

#### Large Section
```css
.section--lg {
  padding: var(--space-6xl) 0;  /* 200px top/bottom */
}

@media (max-width: 768px) {
  .section--lg {
    padding: var(--space-4xl) 0;  /* 96px on mobile (same as default) */
  }
}
```

#### No Padding Section
```css
.section--no-padding {
  padding: 0;
}
```

### When to Use Each Variant

| Variant | Use Case | Example |
|---------|----------|---------|
| Default | Standard content sections | Features, team, testimonials |
| `--sm` | Compact sections, tight grouping | Footer, small CTAs, newsletter signup |
| `--lg` | Hero-adjacent sections, major breaks | After hero, before footer, major dividers |
| `--gray` | Visual separation, alternating rhythm | Every other section for scanability |
| `--no-padding` | Full-bleed content, CTA banners | Gradient CTA sections, full-width images |

### Background Modifiers

#### Gray Background
```css
.section--gray {
  background: var(--cloudy-day);  /* #f4f4f4 in light mode */
}

html[data-theme="dark"] .section--gray {
  background: var(--cloudy-day);  /* #111a17 in dark mode */
}
```

### Section Header Pattern

Common pattern for section introductions:

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-header__title">Section Title</h2>
      <p class="section-header__description">
        Brief description introducing the content below.
      </p>
    </div>

    <!-- Section content -->
  </div>
</section>
```

```css
.section-header {
  text-align: center;
  margin-bottom: var(--space-4xl);  /* 64px */
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-header__title {
  margin-bottom: var(--space-xl);  /* 32px */
}

.section-header__description {
  color: var(--muted);
  font-size: var(--type-lead-size);      /* 18px-21px fluid */
  line-height: var(--type-lead-line);    /* 1.55 */
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: var(--space-3xl);  /* 48px */
  }
}
```

### Responsive Rules

#### Desktop (>768px)
- Full spacing scale applies
- Alternating backgrounds create strong visual rhythm
- Generous vertical breathing room

#### Mobile (≤768px)
- Reduced spacing to fit more content in viewport
- All section variants reduce to tighter spacing
- Maintain relative proportions (lg > default > sm)

### Container System

Sections work with the container system to provide horizontal constraints:

```css
.container {
  width: 100%;
  max-width: var(--content-max-width);  /* 1440px */
  margin: 0 auto;
  padding: 0 var(--space-xl);           /* 32px horizontal padding */
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-lg);         /* 24px on mobile */
  }
}
```

### Special Section Patterns

#### CTA Section (Standard)
```html
<section class="section">
  <div class="container">
    <div class="cta-section">
      <h2 class="cta-section__title">Call to Action</h2>
      <p class="cta-section__description">
        Supporting text for the CTA.
      </p>
      <div class="cta-section__actions">
        <a href="#" class="btn btn--primary btn--lg">Primary Action</a>
        <a href="#" class="btn btn--secondary btn--lg">Secondary Action</a>
      </div>
    </div>
  </div>
</section>
```

```css
.cta-section {
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}

.cta-section__title {
  margin-bottom: var(--space-xl);  /* 32px */
}

.cta-section__description {
  color: var(--muted);
  font-size: var(--type-lead-size);
  line-height: var(--type-lead-line);
  margin-bottom: var(--space-xl);
}

.cta-section__actions {
  display: flex;
  gap: var(--space-md);      /* 16px */
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cta-section__actions {
    flex-direction: column;
    align-items: center;
  }
}
```

#### CTA Section with Gradient Background
```html
<section class="section section--no-padding">
  <div class="cta-section cta-section--gradient texture-overlay">
    <h2 class="cta-section__title">Gradient CTA</h2>
    <p class="cta-section__description">
      High-impact call to action with animated gradient.
    </p>
    <div class="cta-section__actions">
      <a href="#" class="btn btn--primary btn--lg">Take Action</a>
    </div>
  </div>
</section>
```

```css
.cta-section--gradient {
  position: relative;
  padding: var(--space-6xl) var(--space-xl);  /* 200px 32px */
  margin: 0;
  max-width: none;
  color: var(--eggshell-sky);
  overflow: hidden;

  /* Animated gradient background */
  background: linear-gradient(
    -45deg,
    var(--bark),
    var(--forest),
    var(--moss),
    var(--forest),
    var(--bark)
  );
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .cta-section--gradient {
    animation: none;
    background: var(--gradient-cta-section);
  }
}
```

### Token Mapping

| Variant | Padding Token | Desktop Value | Mobile Value |
|---------|---------------|---------------|--------------|
| Default | `--space-5xl` | 160px | 96px |
| `--sm` | `--space-3xl` | 64px | 48px |
| `--lg` | `--space-6xl` | 200px | 96px |
| `--no-padding` | none | 0 | 0 |

### Do's and Don'ts

#### Do:
- Use sections for every major content block
- Alternate `.section--gray` for visual rhythm
- Use `.section--lg` after heroes and before footers
- Use `.section--sm` for compact, related content
- Include `.section-header` for titled sections
- Maintain consistent vertical rhythm across pages

#### Don't:
- Don't nest sections within sections
- Don't skip section wrappers (breaks rhythm)
- Don't apply background colors directly to container
- Don't use `--no-padding` for standard content
- Don't mix section spacing arbitrarily (use modifiers)
- Don't forget mobile spacing reduction

---

## 6. Additional Components

### Hero

#### Purpose
Primary landing area at the top of a page. Sets the tone, communicates key value proposition.

#### Anatomy
```html
<!-- Full-height Hero (Home page) -->
<section class="hero">
  <div class="hero__background">
    <video class="hero__video" autoplay muted loop playsinline>
      <source src="/video.mp4" type="video/mp4">
    </video>
    <div class="hero__overlay"></div>
  </div>
  <div class="container">
    <div class="hero__content">
      <h1 class="hero__title">We build companies from scratch</h1>
      <p class="hero__description">
        Brief supporting copy that expands on the headline.
      </p>
      <div class="hero__actions">
        <a href="#" class="btn btn--primary btn--lg">Primary CTA</a>
        <a href="#" class="btn btn--secondary btn--lg">Secondary CTA</a>
      </div>
    </div>
  </div>
</section>

<!-- Compact Hero (Interior pages) -->
<section class="hero hero--compact">
  <div class="container">
    <div class="hero__content">
      <h1 class="hero__title">Page Title</h1>
      <p class="hero__description">
        Supporting description for interior page.
      </p>
    </div>
  </div>
</section>
```

#### Styles
```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero__content {
  text-align: center;
  max-width: 900px;
  padding: var(--space-4xl) 0;
}

.hero__title {
  font-size: var(--type-h1-display-hero-size);  /* 48px-88px */
  line-height: var(--type-h1-display-hero-line);
  margin-bottom: var(--space-lg);
  max-width: var(--type-h1-display-hero-max-ch);  /* 18ch */
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
  }
}
```

---

### Footer

#### Purpose
Consistent site-wide footer with navigation, contact info, and legal links.

#### Anatomy
```html
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <!-- Brand Column -->
      <div>
        <div class="footer__brand">Alkymē</div>
        <p class="footer__description">
          Turning ideas into companies.
        </p>
      </div>

      <!-- Navigation Columns -->
      <div>
        <h4 class="footer__heading">Company</h4>
        <ul class="footer__links">
          <li><a href="/about.html" class="footer__link">About</a></li>
          <li><a href="/labs.html" class="footer__link">Labs</a></li>
          <li><a href="/careers.html" class="footer__link">Careers</a></li>
        </ul>
      </div>

      <!-- ... more columns -->
    </div>

    <div class="footer__bottom">
      <span>© 2026 Alkymē. All rights reserved.</span>
      <span>Los Angeles, California</span>
    </div>
  </div>
</footer>
```

#### Grid Layout
```css
.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-3xl);
  margin-bottom: var(--space-3xl);
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
}
```

---

### Split Layout

#### Purpose
Two-column layout for text + image combinations.

#### Anatomy
```html
<div class="split">
  <div>
    <img src="/image.jpg" alt="Description">
  </div>
  <div>
    <h2>Content Title</h2>
    <p>Content description...</p>
  </div>
</div>
```

#### Styles
```css
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

@media (max-width: 900px) {
  .split {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
}
```

---

## Accessibility Testing Checklist

For all components, verify:

- [ ] Keyboard navigation works (Tab, Shift+Tab, Enter, Space, Arrows where applicable)
- [ ] Focus indicators are visible (3px offset, 2px outline minimum)
- [ ] Color contrast meets WCAG AAA (7:1 for text, 3:1 for UI components)
- [ ] Screen reader announces all interactive elements correctly
- [ ] States are communicated (loading, error, success, disabled)
- [ ] Forms have associated labels (no placeholder-only labels)
- [ ] Error messages are descriptive and helpful
- [ ] ARIA attributes are used correctly (not over-used)
- [ ] Semantic HTML is prioritized over ARIA
- [ ] Touch targets meet minimum 44x44px
- [ ] Reduced motion preferences are respected
- [ ] Dark mode maintains contrast ratios

---

## Design Token Quick Reference

### Spacing Scale
```css
--space-xs: 4px
--space-sm: 10px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 96px
--space-5xl: 160px
--space-6xl: 200px
--space-7xl: 240px
```

### Typography Scale
```css
--type-h1-size: clamp(2rem, 4.5vw, 3rem)           /* 32px-48px */
--type-h2-display-md-size: clamp(1.75rem, 3.5vw, 2.5rem)  /* 28px-40px */
--type-h3-section-size: clamp(1.18rem, 2.4vw, 1.42rem)    /* ~19px-23px */
--type-body-size: 1.0625rem                        /* 17px */
--type-lead-size: clamp(1.125rem, 1.5vw, 1.3125rem)  /* 18px-21px */
--type-caption-size: 0.92rem                       /* ~15px */
```

### Color Palette
```css
--bark: #040d12       /* Primary dark */
--forest: #183d3d     /* Secondary dark */
--moss: #5c8374       /* Accent green */
--dew: #93b1a6        /* Light green */
--eggshell-sky: #fff9f0  /* Warm white */
--cloudy-day: #f4f4f4    /* Light gray */
```

### Shadow System
```css
--shadow-1 through --shadow-6  /* Progressive elevation */
--glass-marketing-shadow       /* Liquid glass default */
--glass-marketing-shadow-hover /* Liquid glass hover */
--glass-marketing-shadow-focus /* Liquid glass focus */
```

---

## Version History

- **v1.0** (April 24, 2026): Initial component specifications based on production implementation

---

## Related Documentation

- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/docs/style-guide.md` - Design system overview
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/alkyme-tokens.css` - Design token definitions
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/components.css` - Component implementation
