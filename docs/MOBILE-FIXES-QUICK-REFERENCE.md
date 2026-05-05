# Mobile Fixes - Quick Reference Guide

## Installation

```html
<!-- Add to <head> after main CSS -->
<link rel="stylesheet" href="assets/css/mobile-fixes.css">
```

## Breakpoints (Mobile-First)

| Breakpoint | Min-Width | Device Type | Container Padding | Grid Gap |
|------------|-----------|-------------|-------------------|----------|
| Base       | 320px     | iPhone SE   | 16px             | 16px     |
| Small      | 375px     | iPhone 8    | 16px             | 16px     |
| Medium     | 480px     | Large phones| 20px             | 20px     |
| Large      | 640px     | Phablets    | 24px             | 24px     |
| XL         | 768px     | Tablet ↕    | 32px             | 28px     |
| 2XL        | 1024px    | Tablet ↔    | 40px             | 32px     |
| 3XL        | 1280px    | Desktop     | 48px             | 32px     |

## Spacing Scale (8px base unit)

```css
--space-1:  4px   /* 0.25rem */
--space-2:  8px   /* 0.5rem */
--space-3:  12px  /* 0.75rem */
--space-4:  16px  /* 1rem - base */
--space-6:  24px  /* 1.5rem */
--space-8:  32px  /* 2rem */
--space-12: 48px  /* 3rem */
--space-16: 64px  /* 4rem */
--space-20: 80px  /* 5rem */
--space-24: 96px  /* 6rem */
```

## Typography

### Font Sizes (Mobile → Desktop)
```css
Body:  16px → 18px
Small: 14px
H1:    28px → 72px (fluid)
H2:    24px → 56px (fluid)
H3:    20px → 40px (fluid)
H4:    18px → 20px (fluid)
```

### Line Heights
```css
Body:    1.5
Headings: 1.2 - 1.3
```

## Touch Targets

**Minimum Size:** 48px × 48px (Material Design & Apple HIG)

```html
<!-- All these automatically get 48×48px -->
<button>Button</button>
<a href="#" class="btn">Link Button</a>
<input type="text">
<select></select>
<textarea></textarea>
```

## Navigation

### HTML Structure
```html
<nav class="nav">
  <div class="container">
    <div class="nav__inner">
      <a href="/" class="nav__logo">
        <img src="logo.svg" alt="Logo">
      </a>

      <!-- Desktop menu (auto-hidden <640px) -->
      <div class="nav__menu">
        <a href="#" class="nav__link">Link</a>
      </div>

      <!-- Hamburger (auto-shown <640px) -->
      <button class="nav__hamburger" aria-label="Menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="nav__mobile-menu" data-open="false">
      <a href="#" class="nav__link">Link</a>
    </div>
  </div>
</nav>
```

### JavaScript
```javascript
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile-menu');

hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isOpen);
  mobileMenu.setAttribute('data-open', !isOpen);
  document.body.classList.toggle('mobile-menu-open', !isOpen);
});
```

## Forms

### Basic Form
```html
<form>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" required>
    <span class="form-help">We'll never share your email</span>
  </div>

  <button type="submit" class="form-submit btn btn--primary">
    Submit
  </button>
</form>
```

### Checkbox/Radio
```html
<div class="checkbox-group">
  <label class="checkbox-label">
    <input type="checkbox" name="agree">
    <span>I agree to terms</span>
  </label>
</div>
```

## Grid Layouts

### Responsive Grids
```html
<!-- Single → 2 col (640px) → 3 col (768px) -->
<div class="grid-cards cols-3">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>

<!-- 2 col (480px) → 3 col (768px) → 4 col (1024px) -->
<div class="grid-cards cols-2-mobile cols-4">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

### Manual Grids
```html
<!-- Single column on mobile -->
<div class="two-column">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<div class="three-column">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

## Utility Classes

### Visibility
```html
<div class="mobile-only">Mobile only (<640px)</div>
<div class="tablet-up">Tablet+ (≥640px)</div>
<div class="desktop-only">Desktop (≥1280px)</div>
```

### Display
```html
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-flex">Flex</div>
<div class="d-grid">Grid</div>
```

### Flex
```html
<div class="d-flex flex-column align-items-center justify-content-between gap-4">
  <!-- Flexbox with gap -->
</div>
```

### Spacing
```html
<!-- Margin -->
<div class="m-0">No margin</div>
<div class="mt-4">Margin top: 16px</div>
<div class="mb-6">Margin bottom: 24px</div>
<div class="mx-auto">Margin auto horizontal</div>

<!-- Padding -->
<div class="p-0">No padding</div>
<div class="p-4">Padding: 16px</div>
<div class="px-4">Padding horizontal: 16px</div>
<div class="py-4">Padding vertical: 16px</div>
```

### Text
```html
<div class="text-center">Centered</div>
<div class="text-left">Left aligned</div>
<div class="text-right">Right aligned</div>
```

### Width
```html
<div class="w-100">Full width</div>
<div class="w-auto">Auto width</div>
```

### Overflow
```html
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-x-hidden">No horizontal scroll</div>
<div class="overflow-y-auto">Vertical scroll if needed</div>
```

### Accessibility
```html
<span class="sr-only">Screen reader only</span>
<span class="visually-hidden">Visually hidden</span>
```

## Common Patterns

### Hero Section
```html
<section class="hero">
  <div class="container">
    <h1>Hero Title</h1>
    <p>Hero description</p>
    <button class="btn btn--primary">Call to Action</button>
  </div>
</section>
```

### Card Grid
```html
<section class="section">
  <div class="container">
    <h2 class="text-center">Features</h2>
    <div class="grid-cards cols-3">
      <div class="card">
        <h3>Feature 1</h3>
        <p>Description</p>
      </div>
      <div class="card">
        <h3>Feature 2</h3>
        <p>Description</p>
      </div>
      <div class="card">
        <h3>Feature 3</h3>
        <p>Description</p>
      </div>
    </div>
  </div>
</section>
```

### Two-Column Split
```html
<section class="section">
  <div class="container">
    <div class="two-column">
      <div>
        <h2>Left Column</h2>
        <p>Content</p>
      </div>
      <div>
        <img src="image.jpg" alt="Description">
      </div>
    </div>
  </div>
</section>
```

### Contact Form
```html
<section class="section">
  <div class="container container--narrow">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" required>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="form-submit btn btn--primary">
        Send Message
      </button>
    </form>
  </div>
</section>
```

## Responsive Images

### Basic Responsive Image
```html
<img src="image.jpg" alt="Description">
<!-- Automatically scales to container width -->
```

### Picture Element
```html
<picture>
  <source media="(min-width: 1024px)" srcset="large.jpg">
  <source media="(min-width: 640px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture>
```

### Video Embed
```html
<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe>
</div>
```

## Responsive Tables

```html
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Testing Device Sizes

### Chrome DevTools
1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M / Cmd+Shift+M)
3. Test these sizes:
   - iPhone SE: 375×667
   - iPhone 12/13: 390×844
   - iPad: 768×1024
   - iPad Pro: 1024×1366

### Physical Devices
- iPhone SE (320px width in landscape)
- iPhone 8/X (375px)
- iPhone 12/13 (390px)
- Android phones (360-412px)
- iPad (768px)
- iPad Pro (1024px)

## Troubleshooting

### Horizontal Scroll
```css
/* Add to problematic element */
.element {
  overflow-x: hidden;
  max-width: 100%;
}
```

### iOS Zoom on Input
```css
/* Ensure font-size is at least 16px */
input {
  font-size: 16px;
}
```

### Small Touch Targets
```css
/* Ensure minimum 48×48px */
button {
  min-width: 48px;
  min-height: 48px;
}
```

### Text Too Large on Mobile
```css
/* Use fluid typography */
h1 {
  font-size: clamp(28px, 8vw, 72px);
}
```

## Performance Tips

### Preload CSS
```html
<link rel="preload" href="assets/css/mobile-fixes.css" as="style">
<link rel="stylesheet" href="assets/css/mobile-fixes.css">
```

### Reduce Motion
```css
/* Automatically handled for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  /* Animations are minimal */
}
```

### GPU Acceleration
```css
/* Automatically applied to animated elements */
.element {
  transform: translateZ(0);
  will-change: transform;
}
```

## Browser Support

- ✅ Chrome 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Samsung Internet 14+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

## Dark Mode

Dark mode is automatically supported. All fixes work in both light and dark modes.

```html
<!-- Dark mode is detected automatically -->
<html data-theme="dark">
  <!-- Your content -->
</html>
```

## Quick Checks

### ✅ Mobile Checklist
- [ ] All touch targets ≥48×48px
- [ ] Text ≥16px (body) and ≥14px (small)
- [ ] No horizontal scroll
- [ ] Forms easy to fill
- [ ] Navigation menu works
- [ ] Grids stack properly
- [ ] Images scale correctly
- [ ] Proper spacing throughout

### ✅ Accessibility Checklist
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] ARIA labels on buttons
- [ ] Form labels present
- [ ] Color contrast adequate
- [ ] Screen reader friendly

---

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/css/mobile-fixes.css`
**Version:** 1.0
**Updated:** 2026-05-04
