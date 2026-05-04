# Component System Migration Guide

Version 2.0.0

## Overview

This guide helps you migrate from page-specific components to the unified Alkyme Component System. The new system provides consistent styling, better maintainability, and improved accessibility across all pages.

---

## Migration Benefits

- **Consistency**: Same components look identical across all pages
- **Maintainability**: Update once, deploy everywhere
- **Performance**: Smaller CSS bundles with shared styles
- **Accessibility**: Built-in WCAG AA compliance
- **Dark Mode**: Automatic dark mode support
- **Future-proof**: Easy to extend and modify

---

## Migration Steps

### Step 1: Add Component Library

Add the component library to your HTML `<head>`:

```html
<!-- Before (old way) -->
<link rel="stylesheet" href="/assets/alkyme-tokens.css">
<link rel="stylesheet" href="/assets/site-marketing-base.css">
<link rel="stylesheet" href="/assets/site-chrome.css">
<link rel="stylesheet" href="/assets/site-home.css">

<!-- After (new way) -->
<link rel="stylesheet" href="/assets/alkyme-tokens.css">
<link rel="stylesheet" href="/assets/marketing-fonts.css">
<link rel="stylesheet" href="/assets/alkyme-components.css">
<link rel="stylesheet" href="/assets/site-home.css"> <!-- Keep for page-specific styles only -->
```

### Step 2: Update Component Classes

Replace page-specific classes with unified component classes.

### Step 3: Test & Validate

- Check visual appearance across all breakpoints
- Test dark mode functionality
- Validate accessibility with screen readers
- Test keyboard navigation

### Step 4: Clean Up

Remove unused page-specific component styles from CSS files.

---

## Component Migration Reference

### Buttons

#### Old Patterns

```html
<!-- site-chrome.css -->
<button class="button button-primary">Click me</button>
<button class="button button-secondary">Cancel</button>

<!-- contact-form specific -->
<button class="contact-form .button-primary">Submit</button>
```

#### New Pattern

```html
<button class="alk-btn alk-btn--primary">Click me</button>
<button class="alk-btn alk-btn--secondary">Cancel</button>
<button class="alk-btn alk-btn--primary">Submit</button>
```

#### CSS Changes

**Remove from page-specific CSS:**
```css
/* DELETE these page-specific button overrides */
.contact-form .button-primary {
  justify-self: stretch;
  margin-top: var(--type-band-lede-to-cta-gap);
  padding: 0.95rem 1.5rem;
}
```

**Replace with:**
```css
/* Keep layout-specific styles only */
.contact-form .alk-btn {
  justify-self: stretch;
  margin-top: var(--type-band-lede-to-cta-gap);
}
```

---

### Cards

#### Old Patterns

```html
<!-- site-home.css ventures-card -->
<div class="ventures-card">
  <div class="ventures-card__media">
    <img src="project.jpg" alt="">
  </div>
  <h3 class="ventures-card__title">Title</h3>
  <p class="ventures-card__text">Description</p>
  <span class="ventures-card__tag ventures-card__tag--market">Market</span>
</div>
```

#### New Pattern

```html
<div class="alk-card alk-card--interactive">
  <div class="alk-card__media">
    <img src="project.jpg" alt="">
  </div>
  <div class="alk-card__body">
    <span class="alk-card__tag alk-card__tag--market">Market</span>
    <h3 class="alk-card__title">Title</h3>
    <p class="alk-card__description">Description</p>
  </div>
</div>
```

#### CSS Changes

**Remove from site-home.css:**
```css
/* DELETE - now in alkyme-components.css */
.ventures-card {
  display: flex;
  flex-direction: column;
  padding: clamp(1.15rem, 2.5vw, 1.45rem);
  border-radius: var(--radius-media-lg);
  border: var(--border-hairline);
  background: var(--surface-modal-warm);
  transition: border-color 0.22s ease, box-shadow 0.28s ease;
}
```

**Keep layout-specific styles:**
```css
/* KEEP - grid layout is page-specific */
.ventures-band__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.35rem, 3.5vw, 2.25rem);
}
```

---

### Form Fields

#### Old Patterns

```html
<!-- site-forms.css -->
<div class="field">
  <label class="field-label" for="email">Email</label>
  <input type="email" id="email" class="field-input">
</div>
```

#### New Pattern

```html
<div class="alk-field">
  <label class="alk-field__label" for="email">Email</label>
  <input type="email" id="email" class="alk-field__input">
</div>
```

#### CSS Changes

**Remove from site-forms.css:**
```css
/* DELETE - now in alkyme-components.css */
.field {
  display: grid;
  gap: 0.4rem;
}

.field-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--forest);
}

.field-input {
  width: 100%;
  padding: 0.875rem 1.25rem;
  border: 1px solid rgb(var(--rgb-dew) / 0.55);
  border-radius: var(--radius);
  background: var(--page-bg);
}
```

**Keep form-specific layouts:**
```css
/* KEEP - form grid layout */
.contact-form {
  margin-top: 28px;
  margin-inline: auto;
  max-width: 560px;
  display: grid;
  gap: 1.25rem;
}
```

---

### Section Headers

#### Old Patterns

```html
<!-- Various implementations across pages -->
<div class="ventures-band__intro">
  <p class="ventures-band__eyebrow">Our Work</p>
  <h2 class="ventures-band__title">Featured Projects</h2>
  <p class="ventures-band__lede">Description text.</p>
</div>
```

#### New Pattern

```html
<div class="alk-section__header">
  <p class="alk-section__eyebrow">Our Work</p>
  <h2 class="alk-section__title">Featured Projects</h2>
  <p class="alk-section__description">Description text.</p>
</div>
```

#### CSS Changes

**Remove from page-specific CSS:**
```css
/* DELETE - now standardized */
.ventures-band__intro {
  text-align: center;
  max-width: min(44rem, 100%);
  margin-inline: auto;
  margin-bottom: clamp(2.75rem, 6vw, 4.25rem);
}

.ventures-band__eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-on-canvas);
}
```

---

### Layout Components

#### Old Patterns

```html
<!-- Different container implementations -->
<div class="container">Content</div>
<div class="container container--wide">Content</div>
```

#### New Pattern

```html
<div class="alk-container alk-container--xl">Content</div>
<div class="alk-container alk-container--full">Content</div>
```

#### Section Spacing

**Old:**
```html
<section class="section">Content</section>
<section class="section section--cloud">Content</section>
```

**New:**
```html
<section class="alk-section">Content</section>
<section class="alk-section alk-section--moss">Content</section>
```

---

## Page-by-Page Migration

### Home Page (index.html)

#### Changes Needed:

1. **Ventures Section Cards**
   - Replace: `.ventures-card` → `.alk-card`
   - Replace: `.ventures-card__title` → `.alk-card__title`
   - Replace: `.ventures-card__text` → `.alk-card__description`
   - Replace: `.ventures-card__tag` → `.alk-card__tag`

2. **Section Headers**
   - Replace: `.ventures-band__intro` → `.alk-section__header`
   - Replace: `.ventures-band__eyebrow` → `.alk-section__eyebrow`
   - Replace: `.ventures-band__title` → `.alk-section__title`

3. **CSS Cleanup**
   - Remove duplicate card styles from `site-home.css`
   - Keep only layout-specific grid and positioning

### Contact Page (contact.html)

#### Changes Needed:

1. **Form Fields**
   - Replace: `.field` → `.alk-field`
   - Replace: `.field-label` → `.alk-field__label`
   - Replace: `.field-input` → `.alk-field__input`
   - Replace: `.field-textarea` → `.alk-field__textarea`
   - Replace: `.field-select` → `.alk-field__select`

2. **Submit Button**
   - Replace: `.button-primary` → `.alk-btn alk-btn--primary`

3. **Section Header**
   - Replace: `.section-head--center` → `.alk-section__header`

4. **CSS Cleanup**
   - Delete all field component styles from `site-forms.css`
   - Keep only `.contact-form` grid layout
   - Keep `.contact-form-shell` glass container

### Careers Page (careers.html)

#### Changes Needed:

1. **Role Cards**
   - Migrate to `.alk-card` system
   - Use `.alk-card__tag` for role status

2. **Benefits Cards**
   - Replace custom card styles with `.alk-card`
   - Use `.alk-card--glass` for frosted effect

3. **Buttons**
   - Replace `.button-primary` → `.alk-btn alk-btn--primary`
   - Replace `.button-secondary` → `.alk-btn alk-btn--secondary`

### About Page (about.html)

#### Changes Needed:

1. **Pillar Cards**
   - Replace custom cards with `.alk-card`
   - Use `.alk-card--interactive` for hover effects

2. **Section Headers**
   - Standardize all section intros with `.alk-section__header`

---

## Common Migration Patterns

### Pattern 1: Card with Tag

**Before:**
```html
<div class="custom-card">
  <span class="custom-card__badge">New</span>
  <h3 class="custom-card__heading">Title</h3>
  <p class="custom-card__body">Description</p>
</div>
```

**After:**
```html
<div class="alk-card">
  <div class="alk-card__body">
    <span class="alk-card__tag alk-card__tag--primary">New</span>
    <h3 class="alk-card__title">Title</h3>
    <p class="alk-card__description">Description</p>
  </div>
</div>
```

### Pattern 2: Interactive Card with Link

**Before:**
```html
<div class="clickable-card">
  <h3>Title</h3>
  <p>Description</p>
  <a href="#" class="card-link">Learn more</a>
</div>
```

**After:**
```html
<div class="alk-card alk-card--interactive">
  <div class="alk-card__body">
    <h3 class="alk-card__title">Title</h3>
    <p class="alk-card__description">Description</p>
  </div>
  <div class="alk-card__footer">
    <a href="#" class="alk-link">Learn more</a>
  </div>
</div>
```

### Pattern 3: Form with Validation

**Before:**
```html
<div class="form-group error">
  <label class="form-label">Email</label>
  <input type="email" class="form-control">
  <span class="error-message">Invalid email</span>
</div>
```

**After:**
```html
<div class="alk-field alk-field--error">
  <label class="alk-field__label" for="email">Email</label>
  <input
    type="email"
    id="email"
    class="alk-field__input"
    aria-invalid="true"
    aria-describedby="email-error"
  >
  <p class="alk-field__error" id="email-error">Invalid email</p>
</div>
```

---

## Testing Checklist

After migrating each page, test:

### Visual Testing
- [ ] Desktop view (1280px+)
- [ ] Tablet view (768px - 1023px)
- [ ] Mobile view (< 768px)
- [ ] Dark mode toggle
- [ ] Print styles

### Functional Testing
- [ ] All buttons clickable
- [ ] Forms submit correctly
- [ ] Cards hover states work
- [ ] Links navigate properly

### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader announces correctly
- [ ] Focus visible on all interactive elements
- [ ] Color contrast meets WCAG AA
- [ ] Touch targets meet 44x44px minimum

### Performance Testing
- [ ] CSS bundle size reduced
- [ ] No layout shifts (CLS)
- [ ] Animations smooth (60fps)
- [ ] Reduced motion works

---

## Troubleshooting

### Issue: Button looks different after migration

**Solution:** Check for page-specific button overrides in your CSS:

```css
/* Remove these overrides */
.my-page .button-primary {
  padding: 20px; /* Custom padding */
}
```

If you need custom sizing, use the size modifiers:
```html
<button class="alk-btn alk-btn--primary alk-btn--lg">Large Button</button>
```

### Issue: Card spacing is off

**Solution:** The new cards use structured padding. Wrap content in elements:

```html
<!-- Wrong -->
<div class="alk-card">
  <h3>Title</h3>
  <p>Text</p>
</div>

<!-- Right -->
<div class="alk-card">
  <div class="alk-card__body">
    <h3 class="alk-card__title">Title</h3>
    <p class="alk-card__description">Text</p>
  </div>
</div>
```

### Issue: Form fields too wide on mobile

**Solution:** Use the form wrapper pattern:

```html
<div class="alk-container alk-container--sm">
  <form class="alk-stack alk-stack--md">
    <div class="alk-field">...</div>
    <div class="alk-field">...</div>
  </form>
</div>
```

### Issue: Dark mode colors wrong

**Solution:** Ensure `alkyme-tokens.css` is loaded before components:

```html
<link rel="stylesheet" href="/assets/alkyme-tokens.css">
<link rel="stylesheet" href="/assets/alkyme-components.css">
```

And use the correct theme attribute:
```html
<html data-theme="dark">
```

---

## Migration Timeline

### Phase 1: Setup (Week 1)
- Add component library to all pages
- Test that nothing breaks with both old and new classes

### Phase 2: Core Pages (Week 2)
- Migrate home page
- Migrate contact page
- Migrate about page

### Phase 3: Secondary Pages (Week 3)
- Migrate careers page
- Migrate help pages
- Migrate legal pages

### Phase 4: Cleanup (Week 4)
- Remove duplicate CSS from page-specific files
- Optimize CSS bundle size
- Final testing and QA

---

## Support

For questions or issues during migration:

1. Check the [Component Documentation](./components-documentation.md)
2. Review the [HTML Examples](../assets/components/examples.html)
3. Compare with existing working implementations
4. Check browser console for CSS errors

---

## Rollback Plan

If issues arise, you can rollback by:

1. Remove `alkyme-components.css` from HTML
2. Restore old classes in HTML
3. Revert CSS changes

Keep a backup of your original files before migration.

---

## Future Enhancements

Planned additions to the component system:

- Modal/Dialog components
- Dropdown/Menu components
- Toast/Notification components
- Tabs component
- Accordion component (expand from FAQ)
- Loading skeleton states
- Progress indicators
- Data tables
- Pagination

These will be added while maintaining backward compatibility.
