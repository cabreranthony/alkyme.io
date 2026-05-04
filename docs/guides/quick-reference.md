# Alkymē Component Library - Quick Reference

## 🚀 Get Started in 3 Steps

1. **Include Core Files:**
```html
<link rel="stylesheet" href="assets/components/core.css">
<script src="assets/components/core.js"></script>
```

2. **Include Component Files You Need:**
```html
<!-- Layouts -->
<link rel="stylesheet" href="assets/components/layout.css">

<!-- Interactive -->
<link rel="stylesheet" href="assets/components/carousel.css">
<link rel="stylesheet" href="assets/components/accordion.css">
<link rel="stylesheet" href="assets/components/modal.css">
<script src="assets/components/carousel.js"></script>
<script src="assets/components/accordion.js"></script>
<script src="assets/components/modal.js"></script>

<!-- Media & Forms -->
<link rel="stylesheet" href="assets/components/media.css">
<link rel="stylesheet" href="assets/components/forms.css">
```

3. **Use Component HTML Patterns:**
```html
<div class="alk-carousel" data-alk-carousel>
  <!-- Component auto-initializes -->
</div>
```

## 📦 Available Components

### Layout Components
| Component | Class | Description |
|-----------|-------|-------------|
| Container | `.alk-container` | Centered content wrapper with max-width |
| Section | `.alk-section` | Vertical spacing wrapper |
| Grid | `.alk-grid` | Responsive grid layout |
| Split | `.alk-split` | Two-column split layout |
| Stack | `.alk-stack` | Vertical spacing layout |
| Cluster | `.alk-cluster` | Horizontal spacing layout |

### Interactive Components
| Component | Data Attribute | Description |
|-----------|----------------|-------------|
| Carousel | `data-alk-carousel` | Image/content carousel with navigation |
| Accordion | `data-alk-accordion` | Expandable content sections |
| Modal | `data-alk-modal` | Dialog/popup overlay |

### Media Components
| Component | Class | Description |
|-----------|-------|-------------|
| Video Player | `.alk-video` | Custom video player with controls |
| Image Gallery | `.alk-gallery` | Responsive image grid |
| Logo Wall | `.alk-logo-wall` | Logo grid display |
| Logo Marquee | `.alk-logo-marquee` | Scrolling logo animation |
| Media Object | `.alk-media` | Image + text pattern |

### Form Components
| Component | Class | Description |
|-----------|-------|-------------|
| Input | `.alk-input` | Text input field |
| Textarea | `.alk-textarea` | Multi-line text input |
| Select | `.alk-select` | Dropdown select field |
| Checkbox | `.alk-checkbox` | Checkbox input |
| Radio | `.alk-radio` | Radio button input |
| Switch | `.alk-switch` | Toggle switch |
| Button | `.alk-btn` | Button with variants |

## 🎨 Utility Classes

### Spacing
```html
<!-- Margin -->
<div class="alk-mt-lg alk-mb-xl">

<!-- Padding -->
<div class="alk-pt-md alk-pb-lg">
```

### Typography
```html
<!-- Size -->
<p class="alk-text-xl alk-font-bold">

<!-- Color -->
<span class="alk-text-moss">
```

### Display
```html
<!-- Flex -->
<div class="alk-flex alk-items-center alk-gap-md">

<!-- Grid -->
<div class="alk-grid alk-grid--3">
```

### Colors
```html
<div class="alk-bg-moss alk-text-inverse">
<div class="alk-bg-forest alk-text-cream">
```

## ⚡ Quick Examples

### Carousel
```html
<div class="alk-carousel" data-alk-carousel data-loop="true">
  <div class="alk-carousel__track" data-carousel-track>
    <div class="alk-carousel__slide" data-carousel-slide>Slide 1</div>
    <div class="alk-carousel__slide" data-carousel-slide>Slide 2</div>
  </div>
  <div class="alk-carousel__controls">
    <button data-carousel-prev>←</button>
    <div data-carousel-dots></div>
    <button data-carousel-next>→</button>
  </div>
</div>
```

### Accordion
```html
<div class="alk-accordion" data-alk-accordion>
  <div class="alk-accordion__item" data-accordion-item>
    <button class="alk-accordion__trigger" data-accordion-trigger>
      Question 1
      <span class="alk-accordion__icon">▼</span>
    </button>
    <div class="alk-accordion__panel" data-accordion-panel>
      <div data-accordion-content>Answer 1</div>
    </div>
  </div>
</div>
```

### Modal
```html
<button data-modal-trigger="my-modal">Open Modal</button>

<dialog class="alk-modal" data-alk-modal id="my-modal">
  <div class="alk-modal__container">
    <div class="alk-modal__header">
      <h3 class="alk-modal__title">Modal Title</h3>
      <button data-modal-close>×</button>
    </div>
    <div class="alk-modal__body">
      <p>Modal content here</p>
    </div>
  </div>
</dialog>
```

### Button
```html
<!-- Variants -->
<button class="alk-btn alk-btn--primary">Primary</button>
<button class="alk-btn alk-btn--secondary">Secondary</button>
<button class="alk-btn alk-btn--ghost">Ghost</button>

<!-- Sizes -->
<button class="alk-btn alk-btn--sm">Small</button>
<button class="alk-btn alk-btn--lg">Large</button>

<!-- States -->
<button class="alk-btn" disabled>Disabled</button>
<button class="alk-btn alk-btn--loading">Loading</button>
```

### Form
```html
<form class="alk-form">
  <div class="alk-form-group">
    <label class="alk-label alk-label--required">Name</label>
    <input type="text" class="alk-input" required>
  </div>

  <div class="alk-form-group">
    <label class="alk-label">Message</label>
    <textarea class="alk-textarea"></textarea>
  </div>

  <button type="submit" class="alk-btn alk-btn--primary">Submit</button>
</form>
```

### Grid Layout
```html
<div class="alk-grid alk-grid--3 alk-grid--gap-lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Split Layout
```html
<div class="alk-split alk-split--50-50">
  <div class="alk-split__content">
    <h2>Content Side</h2>
    <p>Text content here</p>
  </div>
  <div class="alk-split__media">
    <img src="image.jpg" alt="">
  </div>
</div>
```

## 🎯 Common Patterns

### Hero Section
```html
<section class="alk-section alk-section--xl alk-bg-gradient">
  <div class="alk-container alk-container--lg">
    <h1 class="alk-text-6xl alk-font-bold alk-text-center">
      Hero Title
    </h1>
    <p class="alk-text-xl alk-text-center">
      Hero description
    </p>
    <div class="alk-cluster alk-cluster--center">
      <a href="#" class="alk-btn alk-btn--primary alk-btn--lg">CTA 1</a>
      <a href="#" class="alk-btn alk-btn--secondary alk-btn--lg">CTA 2</a>
    </div>
  </div>
</section>
```

### Card Grid
```html
<div class="alk-grid alk-grid--3">
  <div class="alk-bg-secondary" style="padding: var(--alk-space-xl); border-radius: var(--alk-radius-lg);">
    <h3>Card Title</h3>
    <p>Card content</p>
  </div>
  <!-- More cards -->
</div>
```

### Section with Header
```html
<section class="alk-section">
  <div class="alk-container alk-container--xl">
    <div class="alk-section__header">
      <span class="alk-section__eyebrow">Eyebrow Text</span>
      <h2 class="alk-section__title">Section Title</h2>
      <p class="alk-section__description">Section description</p>
    </div>
    <!-- Section content -->
  </div>
</section>
```

## 🔧 Configuration

### Carousel Options
```html
<div 
  class="alk-carousel" 
  data-alk-carousel
  data-slides-per-view="1"
  data-loop="true"
  data-autoplay="true"
  data-autoplay-delay="5000"
  data-responsive='{"768": {"slidesPerView": 2}, "1024": {"slidesPerView": 3}}'
>
```

### Accordion Options
```html
<div 
  class="alk-accordion" 
  data-alk-accordion
  data-allow-multiple="false"
  data-default-open="0"
>
```

### Modal Options
```html
<dialog 
  class="alk-modal" 
  data-alk-modal
  data-close-on-backdrop="true"
  data-close-on-escape="true"
>
```

## 📱 Responsive Classes

```html
<!-- Hide on mobile -->
<div class="alk-hidden-mobile">

<!-- Show only on tablet+ -->
<div class="alk-show-tablet">

<!-- Show only on desktop+ -->
<div class="alk-show-desktop">
```

## 🌙 Dark Mode

Components automatically support dark mode when:
```html
<html data-theme="dark">
```

Toggle dark mode:
```javascript
document.documentElement.setAttribute('data-theme', 'dark');
// or
document.documentElement.setAttribute('data-theme', 'light');
```

## 📚 Full Documentation

- **Complete API:** `docs/COMPONENTS.md`
- **Live Examples:** `docs/component-examples.html`
- **Implementation Guide:** `docs/IMPLEMENTATION-GUIDE.md`

---

**Quick Reference Version:** 1.0
**Component Library Version:** 1.0.0
