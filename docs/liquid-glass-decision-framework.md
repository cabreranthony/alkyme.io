# Liquid Glass Decision Framework

**Version:** 1.0
**Last Updated:** 2026-04-20
**Purpose:** Prevent liquid glass overuse and ensure intentional application

---

## When to Use Glass

Use liquid glass **ONLY** when:

### 1. Component Floats Over Varied Background
- Component overlays **image**, **video**, or **gradient with motion**
- Background content is **visually complex** and needs separation
- Examples: Hero overlays, image galleries with text, video players with controls

### 2. Component is Interactive Overlay
- **Modals** and dialogs
- **Popovers** and tooltips
- **Sticky navigation** that scrolls over content
- **Dropdown menus** that float above page content

### 3. Creates Depth Hierarchy Over Complex Background
- Component needs to **visually lift** from underlying complexity
- Background has **multiple layers** or **dynamic content**
- Glass effect creates **intentional separation** between foreground and background

---

## When NOT to Use Glass

Do **NOT** use glass when:

### 1. Component Sits on Solid Color Background
- If background is `#FFFFFF`, `#F5F5F7`, or any solid color → **use solid card**
- Glass on solid backgrounds wastes computation and provides no visual benefit
- Examples: Cards on white section backgrounds, sidebar on solid gray

### 2. Nothing Behind to Blur
- If there's **no visual content** behind the component → **defeats purpose**
- Glass requires underlying content to blur for the effect to work
- Examples: First element on a page, isolated cards with no background

### 3. Simple Border Card Would Be Clearer
- When **visual clarity** is more important than depth
- When **content hierarchy** doesn't require layering
- When **performance** is a concern (mobile, low-end devices)

### 4. Too Many Blur Layers on Screen
- **Maximum 3 glass layers** visible simultaneously
- Each blur layer impacts rendering performance
- Stacking glass creates visual confusion and performance issues

---

## Standard Glass Utilities

Use these **3 standard classes** for consistent glass implementation:

### `.glass-overlay` (Over Images/Video)
**Use:** Text overlays on hero images, video controls, image captions

```css
.glass-overlay {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
```

**When to use:**
- Hero text over background images
- Video player controls
- Image gallery overlays
- Toast notifications over dynamic content

---

### `.glass-cta` (Floating CTAs on Gradients)
**Use:** CTAs that float over gradient backgrounds with visual complexity

```css
.glass-cta {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
```

**When to use:**
- Primary CTAs on gradient hero sections
- Floating action buttons over complex backgrounds
- Sticky CTAs that scroll over page content

---

### `.card-solid` (Default for Most Cards)
**Use:** Standard cards on solid backgrounds (90% of use cases)

```css
.card-solid {
  background: var(--alk-white);
  border: 1px solid rgba(24, 61, 61, 0.12);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  border-radius: var(--alk-radius-xl);
}
```

**When to use:**
- Feature cards on white/gray sections
- Blog post cards
- Team member cards
- Product cards
- Any card on a solid background

**Hover state:**
```css
.card-solid:hover {
  background: var(--alk-soft-gray);
  border-color: rgba(24, 61, 61, 0.18);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

---

## Performance Guidelines

### Blur Value Hierarchy
Use these **optimized blur values**:

| Blur Value | Use Case | Performance Impact |
|------------|----------|-------------------|
| `4px` | Subtle overlays | Low |
| `8px` | Light glass | Low |
| `12px` | Standard glass (default) | Medium |
| `16px` | Heavy glass | Medium-High |
| `20px` | Maximum (CTAs only) | High |
| `24px` | Reserved for special effects | Very High |

**Rules:**
- **Default to 12px** for standard glass
- **Never exceed 20px** without performance testing
- **Reduce blur on mobile** (use `8px` instead of `12px`)

### Mobile Optimization
```css
@media (max-width: 768px) {
  .glass-overlay {
    backdrop-filter: blur(8px); /* Reduced from 12px */
  }

  .glass-cta {
    backdrop-filter: blur(12px) saturate(150%); /* Reduced from 16px */
  }
}
```

---

## Implementation Checklist

Before adding glass to a component:

- [ ] Is there **visual content** behind this component?
- [ ] Does the background have **complexity** that needs separation?
- [ ] Would a **solid card** be clearer and more performant?
- [ ] Are there already **3+ glass layers** on this screen?
- [ ] Have I tested on **mobile devices**?
- [ ] Is the blur value **≤20px**?

If you answered **"no"** to questions 1-2, or **"yes"** to question 3 → **Use solid card instead**

---

## Migration Guide

### Converting Glass to Solid Cards

**Before (unnecessary glass):**
```css
.feature-card {
  background: var(--alk-glass-white);
  backdrop-filter: blur(var(--alk-blur-md)) saturate(180%);
  border: 1px solid var(--alk-glass-border);
}
```

**After (optimized solid):**
```css
.feature-card {
  background: var(--alk-white);
  border: 1px solid rgba(24, 61, 61, 0.12);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
```

**Result:** Same visual hierarchy, better performance, clearer appearance

---

## Examples

### ✅ Good Use Cases

**Hero text over video background:**
```html
<div class="hero-video">
  <video src="background.mp4"></video>
  <div class="glass-overlay hero-content">
    <h1>Build Companies from Scratch</h1>
  </div>
</div>
```

**Sticky navigation over scrolling content:**
```html
<nav class="glass-overlay sticky-nav">
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
```

---

### ❌ Bad Use Cases

**Card on solid white background:**
```html
<!-- DON'T DO THIS -->
<section style="background: white;">
  <div class="glass-overlay feature-card">
    <h3>Feature Title</h3>
  </div>
</section>

<!-- DO THIS INSTEAD -->
<section style="background: white;">
  <div class="card-solid feature-card">
    <h3>Feature Title</h3>
  </div>
</section>
```

**Excessive blur values:**
```css
/* DON'T DO THIS */
.hero-cta {
  backdrop-filter: blur(64px); /* Too expensive! */
}

/* DO THIS INSTEAD */
.hero-cta {
  backdrop-filter: blur(16px); /* Balanced performance */
}
```

---

## Monitoring & Auditing

### Regular Checks
1. **Monthly audit:** Search codebase for `backdrop-filter` usage
2. **Performance test:** Use Chrome DevTools to check paint/composite times
3. **Visual review:** Ensure glass only appears where intentional

### Warning Signs
- ⚠️ Blur values exceeding `20px`
- ⚠️ Glass on components with solid backgrounds
- ⚠️ More than 3 glass layers on one screen
- ⚠️ Janky scrolling or hover interactions

---

## References

- [CSS backdrop-filter Performance](https://web.dev/backdrop-filter/)
- [Apple Design Resources](https://developer.apple.com/design/resources/)
- [Material Design - Elevation](https://m3.material.io/styles/elevation)

---

**Questions?** Contact the design system team or open an issue in the repository.
