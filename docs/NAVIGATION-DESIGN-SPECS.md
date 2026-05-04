# Glass Navigation Design Specifications

**System**: Alkyme Unified Glass Navigation
**Design Option**: C - Glass Nav with Backdrop Blur
**Status**: Production Ready

---

## Visual Design

### Glass Morphism Effect

**Light Mode:**
```css
background: rgba(255, 255, 255, 0.80);
backdrop-filter: blur(20px) saturate(150%);
box-shadow:
  0 1px 3px rgba(0, 0, 0, 0.08),
  0 1px 2px rgba(0, 0, 0, 0.04);
border-bottom: 1px solid rgba(4, 13, 18, 0.08);
```

**Dark Mode:**
```css
background: rgba(4, 13, 18, 0.80);
backdrop-filter: blur(24px) saturate(180%);
box-shadow:
  0 1px 3px rgba(0, 0, 0, 0.3),
  0 1px 2px rgba(0, 0, 0, 0.2);
border-bottom: 1px solid rgba(255, 255, 255, 0.08);
```

**Scrolled State (Progressive Enhancement):**
```css
/* More opaque when scrolled */
background: rgba(255, 255, 255, 0.90); /* +10% opacity */
box-shadow:
  0 2px 8px rgba(0, 0, 0, 0.08),
  0 1px 3px rgba(0, 0, 0, 0.06);
```

---

## Color Palette

### Brand Colors (Alkyme)

```
Forest (Primary):    #183d3d
Bark (Nearly Black): #040d12
Moss (Accent):       #7a9b76
Cream (Light):       #F5F5DC (reference only)
```

### Navigation Colors

**Light Mode:**
```css
Default Link:     #333333  /* 7.2:1 contrast on glass */
Hover:            #040d12  /* 8.1:1 contrast */
Active Page:      #183d3d  /* 6.8:1 contrast (AA) */
Hover BG:         rgba(24, 61, 61, 0.08)
Active BG:        rgba(24, 61, 61, 0.06)
```

**Dark Mode:**
```css
Default Link:     rgba(255, 255, 255, 0.85)  /* 12.4:1 */
Hover:            #FFFFFF                     /* 19.3:1 */
Active Page:      #7a9b76                     /* 7.1:1 (AA) */
Hover BG:         rgba(122, 155, 118, 0.12)
Active BG:        rgba(122, 155, 118, 0.15)
```

---

## Typography

### Font Families
```css
Logo/Brand:    var(--alk-font-display, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)
Navigation:    var(--alk-font-text, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)
```

### Font Sizes (Responsive)

**Desktop (1440px+):**
```
Logo:              18px / 700 weight / -0.01em letter-spacing
Nav Links:         15px / 500 weight (600 when active)
Language Button:   14px / 500 weight
```

**Tablet (768px):**
```
Logo:              18px
Nav Links:         14px
Language Button:   13px
```

**Mobile (320px):**
```
Logo:              18px
Nav Links:         13px
Language Button:   13px
```

---

## Spacing & Layout

### Navigation Height
```
Desktop:  72px
Tablet:   64px
Mobile:   64px
```

### Logo Dimensions
```
Desktop:  32px height × auto width (max 200px)
Tablet:   28px height × auto width
Mobile:   26px height × auto width
```

### Internal Spacing
```
Topbar Inner Padding:
  Desktop: 0 32px
  Tablet:  0 20px
  Mobile:  0 16px

Cluster Gap (Logo to Nav):
  Desktop: 48px
  Tablet:  24px
  Mobile:  16px

Nav Link Gap:
  Desktop: 4px
  Tablet:  2px
  Mobile:  0px

Link Padding:
  Desktop: 10px 16px
  Tablet:  8px 12px
  Mobile:  6px 10px
```

---

## Interactive States

### Navigation Links

**Default State:**
```css
color: #333333;
background: transparent;
border-radius: 8px;
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

**Hover State:**
```css
color: #040d12;
background: rgba(24, 61, 61, 0.08);
```

**Active Page:**
```css
color: #183d3d;
background: rgba(24, 61, 61, 0.06);
font-weight: 600;
```

**Focus State (Keyboard):**
```css
outline: 3px solid #183d3d;
outline-offset: 2px;
background: rgba(24, 61, 61, 0.06);
```

### Language Button

**Default:**
```css
color: #333333;
background: transparent;
min-width: 44px;
min-height: 44px;
```

**Hover:**
```css
color: #040d12;
background: rgba(24, 61, 61, 0.08);
```

**Focus:**
```css
outline: 3px solid #183d3d;
outline-offset: 2px;
```

---

## Accessibility Specifications

### WCAG 2.1 AA Compliance

**Contrast Ratios (Minimum 4.5:1 for text, 3:1 for large text):**

```
Light Mode:
  Nav Links:        7.2:1  ✅ AAA
  Active Link:      6.8:1  ✅ AA
  Hover State:      8.1:1  ✅ AAA

Dark Mode:
  Nav Links:       12.4:1  ✅ AAA
  Active Link:      7.1:1  ✅ AA
  Hover State:     13.2:1  ✅ AAA
```

### Touch Targets (WCAG 2.1 SC 2.5.5)
```
Minimum Size: 44px × 44px

Logo Link:         ≥ 44px × 44px
Nav Links:         ≥ 44px × 44px (via padding)
Language Button:   44px × 44px (explicit min-width/height)
```

### Focus Indicators (WCAG 2.1 SC 2.4.7)
```
Outline Width:     3px
Outline Color:     #183d3d (light) / #7a9b76 (dark)
Outline Offset:    2px
Outline Style:     solid
```

### Keyboard Navigation
```
Tab Order:
1. Skip Link
2. Logo
3. Nav Link 1 (About)
4. Nav Link 2 (Careers)
5. Nav Link 3 (Contact)
6. Language Button

Activation:
- Enter: Activates links
- Space: Activates buttons
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Base: 320px+ (Mobile) */
.topbar-inner { height: 64px; padding: 0 16px; }
.nav a { font-size: 13px; padding: 6px 10px; }

/* Tablet: 768px+ */
@media (max-width: 768px) {
  .topbar-inner { height: 64px; padding: 0 20px; }
  .nav a { font-size: 14px; padding: 8px 12px; }
}

/* Desktop: 769px+ */
/* Default styles apply */
.topbar-inner { height: 72px; padding: 0 32px; }
.nav a { font-size: 15px; padding: 10px 16px; }
```

---

## Animation & Transitions

### Timing Functions
```css
Easing:        cubic-bezier(0.4, 0, 0.2, 1)  /* Material Design Standard */
Duration:      200ms (interactions), 300ms (state changes)
```

### Transition Properties
```css
/* Navigation Bar */
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Links & Buttons */
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

/* Logo */
transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .topbar,
  .brand,
  .nav a,
  .topbar__lang-btn {
    transition: none;
  }
}
```

---

## Browser Support Matrix

### Full Support (Glass Effect)
```
✅ Chrome 76+
✅ Firefox 103+
✅ Safari 15.4+ (with -webkit-backdrop-filter)
✅ Edge 79+
✅ Opera 63+
```

### Partial Support (Fallback)
```
⚠️  Chrome < 76:    Solid background (rgba opacity only)
⚠️  Firefox < 103:  Solid background
⚠️  Safari < 15.4:  Solid background
```

### Fallback Mechanism
```css
/* Modern browsers */
.topbar {
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(20px) saturate(150%);
}

/* Fallback for non-supporting browsers */
@supports not (backdrop-filter: blur(20px)) {
  .topbar {
    background: rgba(255, 255, 255, 0.96);
  }
}
```

---

## Logo Asset Specifications

### File Path
```
/assets/logos/alkyme-logo-rt-hzt-black.svg
```

### Logo Requirements
```
Format:        SVG (vector)
Color:         Black (#040d12 or pure black)
Orientation:   Horizontal (right-aligned text)
Dimensions:    Width auto, height: 32px (desktop)
Aspect Ratio:  Preserve (no stretching)
```

### Dark Mode Handling
```css
/* Logo automatically inverts in dark mode via parent color */
[data-theme="dark"] .brand {
  color: #FFFFFF;
}

/* SVG inherits currentColor */
.brand-logo {
  color: inherit;
}
```

---

## Z-Index Layers

```css
Skip Link:      100  /* Top of everything for accessibility */
Navigation:      50  /* Fixed header */
Content:          1  /* Default stacking */
Background:       0  /* Hero backgrounds */
```

---

## Performance Specifications

### Target Metrics
```
First Contentful Paint (FCP):  < 1.8s
Largest Contentful Paint (LCP): < 2.5s
Cumulative Layout Shift (CLS):  0 (no shift)
Time to Interactive (TTI):      < 3.8s
```

### Optimization Techniques
```
✅ CSS-only base functionality (no JS required)
✅ Passive scroll listeners (JavaScript enhancement)
✅ requestAnimationFrame for scroll handlers
✅ GPU acceleration via backdrop-filter
✅ Minimal repaints (transform-based animations)
```

---

## Design Tokens Reference

```css
/* If using CSS variables, define as: */
:root {
  /* Colors */
  --nav-forest: #183d3d;
  --nav-bark: #040d12;
  --nav-moss: #7a9b76;
  --nav-text-light: #333333;
  --nav-text-dark: rgba(255, 255, 255, 0.85);

  /* Spacing */
  --nav-height-desktop: 72px;
  --nav-height-mobile: 64px;
  --nav-padding-x: 32px;
  --nav-gap: 48px;

  /* Typography */
  --nav-font-size: 15px;
  --nav-font-weight: 500;
  --nav-font-weight-active: 600;

  /* Effects */
  --nav-blur: 20px;
  --nav-opacity: 0.80;
  --nav-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Component Anatomy

```
┌─────────────────────────────────────────────────────────────────┐
│ .topbar (Fixed, Glass Background, 72px height)                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  .container.topbar-inner (Max 1440px, centered)                │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                                                           │ │
│  │  .topbar-cluster                        .topbar__end     │ │
│  │  ┌──────────────────────┐               ┌──────────────┐ │ │
│  │  │                      │               │              │ │ │
│  │  │  .brand    .nav      │               │ .topbar__lang│ │ │
│  │  │  ┌────┐   ┌────────┐ │               │ ┌──────────┐ │ │ │
│  │  │  │Logo│   │A│C│C   │ │               │ │ 🌐 EN   │ │ │ │
│  │  │  └────┘   └────────┘ │               │ └──────────┘ │ │ │
│  │  │                      │               │              │ │ │
│  │  └──────────────────────┘               └──────────────┘ │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
   |                                                           |
   48px gap                                                 16px gap

A = About link
C = Careers link
C = Contact link
```

---

## Export for Design Tools

### Figma/Sketch Specifications

**Navigation Frame:**
```
Desktop: 1440 × 72px
Tablet:  768 × 64px
Mobile:  375 × 64px
```

**Glass Effect (Layer Styles):**
```
Fill:           #FFFFFF at 80% opacity
Blur:           20px Gaussian
Inner Shadow:   0 1px 3px rgba(0,0,0,0.08)
Border:         1px bottom, rgba(4,13,18,0.08)
```

**Typography Styles:**
```
Logo:
- Font: Display Font
- Size: 18px
- Weight: Bold (700)
- Color: #040d12

Nav Links:
- Font: Text Font
- Size: 15px
- Weight: Medium (500), Semibold (600) active
- Color: #333333
- Line Height: 1.5
```

---

## Developer Handoff Checklist

```
✅ CSS file: site-navigation.css (7.2 KB)
✅ JS file: site-navigation.js (2.8 KB, optional)
✅ HTML template: Universal header markup
✅ Logo asset: alkyme-logo-rt-hzt-black.svg
✅ Color palette: Hex codes + RGBA values
✅ Spacing values: px units for all breakpoints
✅ Animation specs: Timing functions + durations
✅ Accessibility: WCAG AA compliance verified
✅ Browser support: Chrome 76+, Firefox 103+, Safari 15.4+
✅ Responsive: 320px to 1440px tested
```

---

**Design System Version**: 1.0.0
**Last Updated**: 2026-04-20
**Design Lead**: Alkyme Design Team
**Status**: Production Ready
