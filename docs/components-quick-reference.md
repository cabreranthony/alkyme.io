# Alkyme Component System - Quick Reference

Fast lookup for all components and their classes.

---

## Buttons

```html
<!-- Variants -->
<button class="alk-btn alk-btn--primary">Primary</button>
<button class="alk-btn alk-btn--secondary">Secondary</button>
<button class="alk-btn alk-btn--ghost">Ghost</button>

<!-- Sizes -->
<button class="alk-btn alk-btn--primary alk-btn--sm">Small</button>
<button class="alk-btn alk-btn--primary">Medium (default)</button>
<button class="alk-btn alk-btn--primary alk-btn--lg">Large</button>

<!-- States -->
<button class="alk-btn alk-btn--primary" disabled>Disabled</button>
<button class="alk-btn alk-btn--primary is-loading">Loading</button>
<button class="alk-btn alk-btn--primary alk-btn--full">Full Width</button>

<!-- Icon -->
<button class="alk-btn alk-btn--primary alk-btn--icon">×</button>
```

---

## Cards

```html
<!-- Basic -->
<div class="alk-card">
  <div class="alk-card__body">
    <h3 class="alk-card__title">Title</h3>
    <p class="alk-card__description">Description</p>
  </div>
</div>

<!-- With Media -->
<div class="alk-card">
  <div class="alk-card__body">
    <div class="alk-card__media">
      <img src="image.jpg" alt="">
    </div>
    <span class="alk-card__tag">Tag</span>
    <h3 class="alk-card__title">Title</h3>
    <p class="alk-card__description">Description</p>
  </div>
</div>

<!-- Variants -->
<div class="alk-card alk-card--elevated">Elevated</div>
<div class="alk-card alk-card--bordered">Bordered</div>
<div class="alk-card alk-card--interactive">Interactive</div>
<div class="alk-card alk-card--glass">Glass</div>
<div class="alk-card alk-card--compact">Compact</div>

<!-- Tags -->
<span class="alk-card__tag">Default</span>
<span class="alk-card__tag alk-card__tag--primary">Primary</span>
<span class="alk-card__tag alk-card__tag--market">Market</span>
<span class="alk-card__tag alk-card__tag--experiment">Experiment</span>

<!-- Structure -->
<div class="alk-card">
  <div class="alk-card__header">Header content</div>
  <div class="alk-card__body">Main content</div>
  <div class="alk-card__footer">Footer content</div>
</div>
```

---

## Forms

```html
<!-- Text Input -->
<div class="alk-field">
  <label class="alk-field__label" for="name">Name</label>
  <input type="text" id="name" class="alk-field__input">
</div>

<!-- Textarea -->
<div class="alk-field">
  <label class="alk-field__label" for="message">Message</label>
  <textarea id="message" class="alk-field__textarea"></textarea>
</div>

<!-- Select -->
<div class="alk-field">
  <label class="alk-field__label" for="topic">Topic</label>
  <select id="topic" class="alk-field__select">
    <option>Option 1</option>
  </select>
</div>

<!-- Error State -->
<div class="alk-field alk-field--error">
  <label class="alk-field__label" for="email">Email</label>
  <input
    type="email"
    id="email"
    class="alk-field__input"
    aria-invalid="true"
    aria-describedby="email-error"
  >
  <p class="alk-field__error" id="email-error">Error message</p>
</div>

<!-- Success State -->
<div class="alk-field alk-field--success">...</div>
```

---

## Typography

```html
<!-- Headings -->
<h1 class="alk-heading-1">Heading 1</h1>
<h2 class="alk-heading-2">Heading 2</h2>
<h3 class="alk-heading-3">Heading 3</h3>
<h4 class="alk-heading-4">Heading 4</h4>
<h5 class="alk-heading-5">Heading 5</h5>
<h6 class="alk-heading-6">Heading 6</h6>

<!-- Text Styles -->
<p class="alk-text-display">Display (hero)</p>
<p class="alk-text-lead">Lead (intro)</p>
<p class="alk-text-body">Body (default)</p>
<p class="alk-text-small">Small (caption)</p>
<p class="alk-text-eyebrow">Eyebrow (label)</p>
```

---

## Section Headers

```html
<!-- Centered (default) -->
<div class="alk-section__header">
  <p class="alk-section__eyebrow">Category</p>
  <h2 class="alk-section__title">Section Title</h2>
  <p class="alk-section__description">Description text.</p>
</div>

<!-- Left Aligned -->
<div class="alk-section__header alk-section__header--left">...</div>

<!-- Wide (no max-width) -->
<div class="alk-section__header alk-section__header--wide">...</div>

<!-- Title Sizes -->
<h2 class="alk-section__title alk-section__title--sm">Small</h2>
<h2 class="alk-section__title">Default</h2>
<h2 class="alk-section__title alk-section__title--lg">Large</h2>
```

---

## Layout: Container

```html
<div class="alk-container alk-container--sm">640px max</div>
<div class="alk-container alk-container--md">768px max</div>
<div class="alk-container alk-container--lg">1024px max</div>
<div class="alk-container alk-container--xl">1380px max</div>
<div class="alk-container alk-container--full">No max-width</div>
```

---

## Layout: Section

```html
<!-- Spacing -->
<section class="alk-section alk-section--sm">Small padding</section>
<section class="alk-section">Default padding</section>
<section class="alk-section alk-section--lg">Large padding</section>

<!-- No Padding -->
<section class="alk-section alk-section--no-top">No top</section>
<section class="alk-section alk-section--no-bottom">No bottom</section>

<!-- Backgrounds -->
<section class="alk-section alk-section--cream">Cream bg</section>
<section class="alk-section alk-section--moss">Moss bg</section>
<section class="alk-section alk-section--forest">Forest bg</section>
<section class="alk-section alk-section--charcoal">Charcoal bg</section>
<section class="alk-section alk-section--gradient">Gradient bg</section>
```

---

## Layout: Stack (Vertical)

```html
<div class="alk-stack alk-stack--xs">4px gap</div>
<div class="alk-stack alk-stack--sm">8px gap</div>
<div class="alk-stack alk-stack--md">16px gap</div>
<div class="alk-stack alk-stack--lg">24px gap</div>
<div class="alk-stack alk-stack--xl">32px gap</div>
<div class="alk-stack alk-stack--2xl">48px gap</div>
```

---

## Layout: Cluster (Horizontal)

```html
<div class="alk-cluster">Default gap</div>
<div class="alk-cluster alk-cluster--gap-xs">Extra small gap</div>
<div class="alk-cluster alk-cluster--gap-sm">Small gap</div>
<div class="alk-cluster alk-cluster--gap-lg">Large gap</div>
<div class="alk-cluster alk-cluster--gap-xl">Extra large gap</div>

<!-- Alignment -->
<div class="alk-cluster alk-cluster--start">Left</div>
<div class="alk-cluster alk-cluster--center">Center</div>
<div class="alk-cluster alk-cluster--end">Right</div>
<div class="alk-cluster alk-cluster--between">Space between</div>
```

---

## Layout: Grid

```html
<div class="alk-grid alk-grid--2">2 columns (responsive)</div>
<div class="alk-grid alk-grid--3">3 columns (responsive)</div>
<div class="alk-grid alk-grid--4">4 columns (responsive)</div>

<!-- Responsive behavior:
  - Mobile: 1 column
  - Tablet (640px+): 2 columns
  - Desktop (768px+): 3 columns
  - Large (1024px+): 4 columns (for --4 only)
-->
```

---

## Utilities: Badge

```html
<span class="alk-badge">Default</span>
<span class="alk-badge alk-badge--primary">Primary</span>
<span class="alk-badge alk-badge--success">Success</span>
<span class="alk-badge alk-badge--warning">Warning</span>
<span class="alk-badge alk-badge--info">Info</span>
```

---

## Utilities: Link

```html
<!-- Standard -->
<a href="#" class="alk-link">Link text →</a>

<!-- Circle Icon -->
<a href="#" class="alk-link alk-link--circle">
  <span class="alk-link__icon">→</span>
  <span>Link text</span>
</a>
```

---

## Utilities: Divider

```html
<hr class="alk-divider">
<hr class="alk-divider alk-divider--strong">
```

---

## Utilities: Aspect Ratio

```html
<div class="alk-aspect alk-aspect--square">1:1</div>
<div class="alk-aspect alk-aspect--video">16:9</div>
<div class="alk-aspect alk-aspect--wide">21:9</div>
<div class="alk-aspect alk-aspect--portrait">3:4</div>

<!-- Usage -->
<div class="alk-aspect alk-aspect--video">
  <img src="image.jpg" alt="">
  <!-- or iframe, video, etc. -->
</div>
```

---

## Accessibility

```html
<!-- Screen Reader Only -->
<span class="alk-sr-only">Hidden from view</span>

<!-- Skip Link -->
<a href="#main" class="alk-skip-link">Skip to content</a>
```

---

## Complete Page Template

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="/assets/alkyme-tokens.css">
  <link rel="stylesheet" href="/assets/marketing-fonts.css">
  <link rel="stylesheet" href="/assets/alkyme-components.css">
</head>
<body>

  <!-- Hero Section -->
  <section class="alk-section alk-section--lg">
    <div class="alk-container alk-container--xl">
      <div class="alk-section__header">
        <p class="alk-section__eyebrow">Welcome</p>
        <h1 class="alk-heading-1">Page Title</h1>
        <p class="alk-text-lead">Introduction paragraph.</p>
      </div>
      <div class="alk-cluster alk-cluster--center">
        <button class="alk-btn alk-btn--primary alk-btn--lg">Get Started</button>
        <button class="alk-btn alk-btn--secondary alk-btn--lg">Learn More</button>
      </div>
    </div>
  </section>

  <!-- Feature Grid -->
  <section class="alk-section">
    <div class="alk-container alk-container--xl">
      <div class="alk-section__header">
        <p class="alk-section__eyebrow">Features</p>
        <h2 class="alk-section__title">What We Offer</h2>
      </div>
      <div class="alk-grid alk-grid--3">
        <div class="alk-card alk-card--interactive">
          <div class="alk-card__body">
            <h3 class="alk-card__title">Feature 1</h3>
            <p class="alk-card__description">Description</p>
          </div>
        </div>
        <!-- More cards... -->
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="alk-section alk-section--moss">
    <div class="alk-container alk-container--sm">
      <div class="alk-section__header">
        <h2 class="alk-section__title">Contact Us</h2>
      </div>
      <form class="alk-stack alk-stack--md">
        <div class="alk-field">
          <label class="alk-field__label" for="name">Name</label>
          <input type="text" id="name" class="alk-field__input">
        </div>
        <div class="alk-field">
          <label class="alk-field__label" for="email">Email</label>
          <input type="email" id="email" class="alk-field__input">
        </div>
        <button type="submit" class="alk-btn alk-btn--primary">Submit</button>
      </form>
    </div>
  </section>

</body>
</html>
```

---

## Dark Mode

```javascript
// Toggle dark mode
function toggleDarkMode() {
  const html = document.documentElement;
  const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Initialize from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
```

---

## Common Patterns

### Card Grid with Tags
```html
<div class="alk-grid alk-grid--3">
  <div class="alk-card">
    <div class="alk-card__body">
      <span class="alk-card__tag alk-card__tag--market">Market</span>
      <h3 class="alk-card__title">Title</h3>
      <p class="alk-card__description">Description</p>
    </div>
    <div class="alk-card__footer">
      <a href="#" class="alk-link">Learn more →</a>
    </div>
  </div>
</div>
```

### Two-Column Form
```html
<form class="alk-stack alk-stack--md">
  <div class="alk-grid alk-grid--2">
    <div class="alk-field">
      <label class="alk-field__label" for="first">First Name</label>
      <input type="text" id="first" class="alk-field__input">
    </div>
    <div class="alk-field">
      <label class="alk-field__label" for="last">Last Name</label>
      <input type="text" id="last" class="alk-field__input">
    </div>
  </div>
  <button class="alk-btn alk-btn--primary">Submit</button>
</form>
```

### Button Group
```html
<div class="alk-cluster">
  <button class="alk-btn alk-btn--primary">Save</button>
  <button class="alk-btn alk-btn--secondary">Cancel</button>
  <button class="alk-btn alk-btn--ghost">Delete</button>
</div>
```

---

## Breakpoints Reference

```css
/* Mobile-first breakpoints used internally */
@media (min-width: 640px)  { /* Tablet */ }
@media (min-width: 768px)  { /* Desktop */ }
@media (min-width: 1024px) { /* Large */ }
@media (min-width: 1280px) { /* XL */ }
```

---

## Design Token Reference

### Colors
- `--bark` - Darkest green (headings, buttons)
- `--forest` - Dark green (accents, links)
- `--moss` - Medium green (highlights)
- `--dew` - Light green (borders, badges)
- `--eggshell-sky` - Off-white (backgrounds)
- `--page-bg` - White (main background)

### Spacing
- `--space-xs` - 4px
- `--space-sm` - 8px
- `--space-md` - 16px
- `--space-lg` - 24px
- `--space-xl` - 32px
- `--space-2xl` - 48px
- `--space-3xl` - 64px

### Typography
- `--type-ui-family` - Sans-serif (Source Sans 3)
- `--type-display-family` - Serif (Libre Baskerville)
- `--type-button-size` - Button text size
- `--type-body-size` - Body text size
- `--type-lead-size` - Lead paragraph size

---

**Quick Reference v2.0.0**
**For full documentation see:** `/docs/components-documentation.md`
