# Alkyme Design System Contract

**Status:** Phase 4 Complete (April 2026)
**Last Updated:** 2026-04-21

This document establishes the canonical rules and patterns for the Alkyme marketing website. All developers and designers must follow these contracts to maintain consistency and quality.

---

## Table of Contents

1. [Token System (Single Source of Truth)](#token-system)
2. [Component Patterns](#component-patterns)
3. [Container & Layout Guidelines](#container-layout)
4. [Spacing Patterns](#spacing-patterns)
5. [Typography Hierarchy](#typography-hierarchy)
6. [Dark Mode Requirements](#dark-mode-requirements)
7. [Validation Checklist](#validation-checklist)

---

## 1. Token System (Single Source of Truth) {#token-system}

### 1.1 Core Principle

**All design tokens live in `/assets/alkyme-tokens.css`**. This is the ONLY file where:
- Brand colors are defined as hex values
- RGB tuples are defined for alpha transparency
- Typography scales are established
- Spacing systems are created
- Motion/timing curves are specified

### 1.2 Token Categories

#### Brand Colors (Hex)
```css
--bark: #040d12          /* Brand dark green */
--forest: #183d3d        /* Secondary green */
--moss: #5c8374          /* Mid-tone green */
--dew: #93b1a6           /* Light accent */
--eggshell-sky: #fff9f0  /* Warm light surface */
--cloudy-day: #f4f4f4    /* Neutral surface */
--page-bg: #ffffff       /* Default canvas */
```

#### Interactive Colors
```css
--interactive-green: #7a9b76       /* UI interactions */
--interactive-green-dark: #689063  /* Hover states */
--interactive-green-darker: #2d5016 /* Pressed states */
```

#### RGB Tuples (for alpha transparency)
```css
--rgb-bark: 4 13 18
--rgb-forest: 24 61 61
--rgb-moss: 92 131 116
--rgb-dew: 147 177 166
--rgb-eggshell: 255 249 240
--rgb-white: 255 255 255
--rgb-black: 0 0 0
--rgb-interactive-green: 122 155 118
```

**Usage:** `rgb(var(--rgb-bark) / 0.8)` for translucent colors

#### Semantic Color Roles
```css
--text: var(--ink)            /* Primary text */
--ink: var(--bark)            /* Body copy (light mode) */
--muted: var(--forest)        /* Secondary text */
--accent-on-canvas: var(--forest) /* Links, labels */
```

#### Border & Surface Tokens
```css
--border-subtle: 1px solid rgb(var(--rgb-forest) / 0.08)
--border-muted: 1px solid rgb(var(--rgb-forest) / 0.1)
--border-strong: 1px solid rgb(var(--rgb-forest) / 0.12)
--border-hairline: 1px solid rgb(var(--rgb-forest) / 0.06)
```

#### Radius (Shape System)
```css
--radius-sm: 0.375rem       /* Dense UI */
--radius: 0.5rem            /* Default buttons/inputs */
--radius-lg: 0.75rem        /* Nested chips */
--radius-xl: 1rem           /* Large insets */
--radius-media: clamp(0.75rem, 1.25vw, 1.125rem)    /* Photos/cards */
--radius-media-lg: clamp(1rem, 1.85vw, 1.35rem)     /* Large surfaces */
--radius-pill: var(--radius-media-lg)                /* Pill CTAs */
```

#### Elevation (Shadow System)
```css
/* 6-tier modern elevation */
--shadow-1: 0 1px 2px rgb(var(--rgb-bark) / 0.04)
--shadow-2: 0 2px 4px rgb(var(--rgb-bark) / 0.08)
--shadow-3: 0 4px 8px rgb(var(--rgb-bark) / 0.10)
--shadow-4: 0 8px 16px rgb(var(--rgb-bark) / 0.12)
--shadow-5: 0 12px 28px rgb(var(--rgb-bark) / 0.15)
--shadow-6: 0 16px 48px rgb(var(--rgb-bark) / 0.20)

/* Semantic card shadows */
--card-shadow-rest: var(--shadow-2)
--card-shadow-hover: var(--shadow-5)
--card-shadow-elevated: var(--shadow-6)
```

#### Glass System
```css
/* Marketing glass (light canvas) */
--glass-marketing-gradient: linear-gradient(145deg, ...)
--glass-marketing-border: 1px solid rgb(var(--rgb-dew) / 0.55)
--glass-marketing-shadow: inset 0 1px 0 rgb(...), 0 8px 32px rgb(...)
--glass-marketing-shadow-hover: ...
--glass-marketing-shadow-focus: ...
--glass-marketing-shadow-active: ...
--glass-marketing-shadow-stacked: ...
--glass-marketing-filter: blur(20px) saturate(170%)
--glass-marketing-filter-mobile: blur(12px) saturate(160%)
--glass-marketing-bg-solid: rgb(var(--rgb-eggshell) / 0.96)
--glass-marketing-disabled-opacity: 0.5
```

#### Motion & Timing
```css
/* Duration tiers */
--duration-instant: 100ms
--duration-fast: 200ms
--duration-medium: 350ms
--duration-slow: 500ms
--duration-extra-slow: 800ms

/* Easing curves */
--ease-soft: cubic-bezier(0.08, 0.52, 0.52, 1)
--ease-strong: cubic-bezier(0.12, 0.8, 0.32, 1)
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1)
--ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1)

/* Context transitions */
--transition-card: transform var(--duration-medium) var(--ease-soft),
                   box-shadow var(--duration-medium) var(--ease-soft),
                   opacity var(--duration-fast) var(--ease-soft)
--transition-glass: background var(--duration-medium) var(--ease-soft),
                    backdrop-filter var(--duration-medium) var(--ease-soft),
                    border-color var(--duration-fast) var(--ease-soft)
```

### 1.3 Token Usage Rules

**DO:**
- Always use `var(--token-name)` for colors, spacing, typography
- Use `rgb(var(--rgb-*) / alpha)` for translucent colors
- Reference semantic tokens (`--text`, `--muted`) for text colors
- Use fluid tokens (`clamp()`) for responsive sizing

**DON'T:**
- Hard-code hex colors outside `alkyme-tokens.css`
- Duplicate token definitions in page-specific CSS
- Create arbitrary spacing values (use `--space-*` scale)
- Override tokens without documented reason

---

## 2. Component Patterns {#component-patterns}

### 2.1 Hero Component

**Class:** `.alk-hero` (modern) or `.hero` (legacy)

**Structure:**
```html
<section class="alk-hero">
  <div class="alk-hero__content">
    <p class="eyebrow">Label text</p>
    <h1>Hero headline</h1>
    <p class="lead">Supporting description</p>
    <div class="alk-hero__actions">
      <a href="#" class="button button-primary button--pill">Primary CTA</a>
      <a href="#" class="button button-secondary button--pill">Secondary CTA</a>
    </div>
  </div>
</section>
```

**Variants:**
- `.alk-hero--centered` - Center-aligned content
- `.alk-hero--media` - With background image/video
- `.alk-hero--compact` - Reduced vertical padding

**Typography:**
- `h1`: Uses `--type-h1-display-hero-size` on home page
- `h1`: Uses `--type-h1-size` on other pages
- `.lead`: Uses `--type-lead-size` and `--type-lead-line`
- `.eyebrow`: Uses `--type-eyebrow-*` tokens

**Spacing:**
- Top padding: `--page-hero-pad-top` (accounts for fixed header)
- Bottom padding: `--page-hero-pad-bottom`
- Title to body: `--type-band-title-to-body-gap`
- Body to CTA: `--type-band-lede-to-cta-gap`

### 2.2 CTA Component

**5-Tier CTA System:**

#### Tier 1: Primary Pill
```html
<a href="#" class="button button-primary button--pill">
  Get Started
</a>
```
- Radius: `var(--radius-pill)`
- Background: `var(--button-primary-bg)`
- Color: `var(--button-primary-fg)`
- Use: Primary page actions

#### Tier 2: Secondary Pill
```html
<a href="#" class="button button-secondary button--pill">
  Learn More
</a>
```
- Radius: `var(--radius-pill)`
- Border: Brand color
- Use: Paired with primary in heroes

#### Tier 3: Text CTA + Icon
```html
<a href="#" class="card__cta">
  Learn more →
</a>
```
- No border/background
- Color: `var(--accent-on-canvas)`
- Hover: `var(--text)`
- Use: Card actions, compact links

#### Tier 4: Inline/Prose Link
```html
<a href="#">inline link</a>
```
- Inherits color from parent
- Hover: `var(--accent-on-canvas)`
- Use: Body copy, footnotes

#### Tier 5: Dark Scrim/Glass CTA
```html
<a href="#" class="button button-primary button--pill glass">
  Watch Video
</a>
```
- Glass surface with eggshell tints
- Use: Hero video overlays, carousel slides

### 2.3 Card Component

**Class:** `.alk-card` (modern) or `.card` (legacy)

**Structure:**
```html
<article class="alk-card">
  <div class="alk-card__media">
    <img src="..." alt="...">
  </div>
  <div class="alk-card__content">
    <h3>Card Title</h3>
    <p>Card description text...</p>
    <a href="#" class="alk-card__cta">Learn more →</a>
  </div>
</article>
```

**Variants:**
- `.alk-card--glass` - Glass morphism effect
- `.alk-card--elevated` - Enhanced shadow on hover
- `.alk-card--horizontal` - Side-by-side layout

**Spacing:**
- Internal padding: `var(--space-lg)` to `var(--space-xl)`
- H3 to paragraph: `var(--space-sm)` (8px)
- Paragraph to CTA: `var(--space-md)` (16px)

### 2.4 Section Component

**Class:** `.section`

**Structure:**
```html
<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Section Label</p>
      <h2>Section Title</h2>
      <p class="lead">Section description...</p>
    </div>
    <!-- Section content -->
  </div>
</section>
```

**Spacing:**
- Vertical padding: `var(--section-pad-y)` - clamp(4rem, 10vw, 6rem)
- Section head margin: `var(--section-head-margin-bottom)` - clamp(1.5rem, 4vw, 2.25rem)

### 2.5 Glass Component

**Class:** `.glass`

**Base Usage:**
```html
<div class="glass">
  <!-- Content -->
</div>
```

**Modifiers:**
- `.glass--interactive` - For clickable elements (buttons, cards)
- `.glass--stacked` - For glass layered under imagery
- `.glass--loading` - Loading skeleton with shimmer

**Properties (from tokens):**
- Background: `var(--glass-marketing-gradient)`
- Border: `var(--glass-marketing-border)`
- Shadow: `var(--glass-marketing-shadow)`
- Filter: `var(--glass-marketing-filter)`

**Performance:**
- Contains: `paint layout`
- Mobile blur reduction automatic
- Nested glass prevention built-in

---

## 3. Container & Layout Guidelines {#container-layout}

### 3.1 Container System

**Primary Container:**
```html
<div class="container">
  <!-- Content -->
</div>
```
- Max-width: `var(--content-max-width)` - 1380px
- Horizontal padding: `var(--page-gutter)` - clamp(1.25rem, 5vw, 2.75rem)
- Centering: `margin-inline: auto`

**Wide Container:**
```html
<div class="container--wide">
  <!-- Content -->
</div>
```
- Same as `.container` but allows full-bleed on mobile
- Used for: Image grids, carousels, full-width sections

**Fluid Container:**
```html
<div class="container-fluid">
  <!-- Content -->
</div>
```
- No max-width constraint
- Full viewport width with gutters
- Used for: Backgrounds, full-width bands

### 3.2 Width Constraints

**Semantic Width Tokens:**
```css
--section-head-max: 38rem           /* Section headers */
--section-head-center-max: 42rem    /* Centered headers */
--section-head-intro-max: 38rem     /* Intro text */
--section-lead-max: 42rem           /* Lead paragraphs */
```

**Usage:**
```css
.section-head {
  max-width: var(--section-head-max);
}
```

### 3.3 Grid System

**Card Grid:**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-min-card), 1fr));
  gap: var(--grid-gap-cards);
}
```

**Tokens:**
- `--grid-gap-cards`: clamp(1.5rem, 3vw, 2rem)
- `--grid-min-card`: 300px

**Common Patterns:**
- 3-column: `grid-template-columns: repeat(3, 1fr)`
- 2-column: `grid-template-columns: repeat(2, 1fr)`
- Auto-fit: `repeat(auto-fit, minmax(300px, 1fr))`

---

## 4. Spacing Patterns {#spacing-patterns}

### 4.1 Modular Spacing Scale

**Base Scale (4px):**
```css
--space-xs: 0.25rem    /* 4px - micro-spacing */
--space-sm: 0.5rem     /* 8px - tight elements */
--space-md: 1rem       /* 16px - default spacing */
--space-lg: 1.5rem     /* 24px - comfortable spacing */
--space-xl: 2rem       /* 32px - module spacing */
--space-2xl: 3rem      /* 48px - large gaps */
--space-3xl: 4rem      /* 64px - section breaks */
```

### 4.2 Vertical Rhythm Tokens

**Title to Body:**
```css
--type-band-title-to-body-gap: clamp(0.85rem, 2.2vw, 1.2rem)  /* 14-19px */
```
Use between section h2 and opening paragraph.

**Body to CTA:**
```css
--type-band-lede-to-cta-gap: clamp(1.35rem, 3.2vw, 1.85rem)  /* 22-30px */
```
Use between lede paragraph and action button.

**Section Header to Content:**
```css
--section-head-margin-bottom: clamp(1.5rem, 4vw, 2.25rem)  /* 24-36px */
```
Use after centered section header blocks.

### 4.3 Common Spacing Patterns

**Pattern 1: Section Band**
```html
<section class="section">
  <p class="eyebrow">Label</p>
  <!-- 8px gap (eyebrow margin-bottom) -->
  <h2>Title</h2>
  <!-- var(--type-band-title-to-body-gap): 14-19px -->
  <p class="lead">Description...</p>
  <!-- var(--type-band-lede-to-cta-gap): 22-30px -->
  <a href="#" class="button">CTA</a>
</section>
```

**Pattern 2: Card Internal**
```html
<article class="card">
  <h3>Title</h3>
  <!-- var(--space-sm): 8px -->
  <p>Description...</p>
  <!-- var(--space-md): 16px -->
  <a href="#">Action →</a>
</article>
```

### 4.4 Section Spacing

**Vertical Section Padding:**
```css
--section-pad-y: clamp(4rem, 10vw, 6rem)  /* 64-96px */
```

**Between Sections:**
Use `.section` class which applies `padding-block: var(--section-pad-y)`

---

## 5. Typography Hierarchy {#typography-hierarchy}

### 5.1 Font Families

**Display Font (Editorial):**
```css
--font-display: "Libre Baskerville", Georgia, "Times New Roman", serif
--type-display-family: var(--font-display)
```

**UI Font (Interface):**
```css
--font-ui: "Source Sans 3", ui-sans-serif, system-ui, sans-serif
--type-ui-family: var(--font-ui)
```

### 5.2 Heading Scale

**H1 (Page Title):**
```css
font-size: var(--type-h1-size)            /* clamp(2rem, 4.5vw, 3rem) */
font-weight: var(--type-h1-weight)        /* 400 */
line-height: var(--type-h1-line)          /* 1.12 */
letter-spacing: var(--type-h1-track)      /* -0.02em */
font-family: var(--type-display-family)
```

**H1 Hero (Home Only):**
```css
font-size: var(--type-h1-display-hero-size)  /* clamp(2.35rem, 5.5vw, 3.75rem) */
line-height: var(--type-h1-display-hero-line)  /* 1.08 */
```

**H2 Display (Section Titles):**
```css
/* Small (default) */
font-size: var(--type-h2-display-sm-size)   /* clamp(1.35rem, 2.5vw, 1.65rem) */

/* Medium (centered sections) */
font-size: var(--type-h2-display-md-size)   /* clamp(1.45rem, 3vw, 2rem) */

/* Large (principles rail) */
font-size: var(--type-h2-display-lg-size)   /* clamp(1.85rem, 3.8vw, 2.65rem) */

/* Common properties */
font-weight: var(--type-h2-weight)          /* 700 */
line-height: var(--type-h2-line-tight)      /* 1.12 */
letter-spacing: var(--type-h2-track)        /* -0.02em */
font-family: var(--type-display-family)
```

**H2 UI (Sans Section Title):**
```css
font-size: var(--type-h2-ui-size)           /* clamp(1.75rem, 3.2vw, 2.35rem) */
font-weight: var(--type-h2-weight)          /* 700 */
line-height: var(--type-h2-line-ui)         /* 1.14 */
font-family: var(--type-ui-family)
```

**H3 (Card/Component Titles):**
```css
font-size: var(--type-h3-size)              /* 1.1rem */
/* or fluid */
font-size: var(--type-h3-size-fluid)        /* clamp(1.12rem, 2vw, 1.28rem) */

font-weight: var(--type-h3-weight)          /* 600 */
line-height: var(--type-h-ui-line)          /* 1.22 */
letter-spacing: var(--type-heading-ui-track) /* -0.012em */
font-family: var(--type-ui-family)
```

**H3 Section (In-band Label):**
```css
font-size: var(--type-h3-section-size)      /* clamp(1.18rem, 2.4vw, 1.42rem) */
```

### 5.3 Body Typography

**Body Text:**
```css
font-size: var(--type-body-size)            /* 1rem */
line-height: var(--type-body-line)          /* 1.6 */
font-weight: var(--type-body-weight)        /* 400 */
font-family: var(--type-ui-family)
color: var(--muted)
```

**Prose (Marketing Body):**
```css
font-size: var(--type-prose-size)           /* 1.02rem */
line-height: var(--type-prose-line)         /* 1.58 */
color: var(--prose-on-light-canvas)         /* rgb(var(--rgb-bark) / 0.74) */
```

**Lead (Intro Paragraph):**
```css
font-size: var(--type-lead-size)            /* clamp(1.02rem, 1.35vw, 1.125rem) */
line-height: var(--type-lead-line)          /* 1.55 */
color: var(--muted)
```

### 5.4 UI Typography

**Eyebrow/Kicker:**
```css
font-size: var(--type-eyebrow-size)         /* 0.72rem */
font-weight: var(--type-eyebrow-weight)     /* 600 */
line-height: var(--type-eyebrow-line)       /* 1.25 */
letter-spacing: var(--type-eyebrow-track)   /* 0.14em */
text-transform: uppercase
color: var(--moss) / dark: var(--accent-on-canvas)
```

**Button Label:**
```css
font-size: var(--type-button-size)          /* 0.95rem */
font-weight: var(--type-button-weight)      /* 600 */
font-family: var(--type-ui-family)
```

**Caption:**
```css
font-size: var(--type-caption-size)         /* 0.92rem */
line-height: var(--type-caption-line)       /* 1.45 */
font-weight: var(--type-caption-weight)     /* 400 */
```

### 5.5 Typography Taxonomy

**When to use Display vs UI:**

| Content Type | Font | Weight | Example |
|-------------|------|--------|---------|
| Page/section title | Display | 400 (h1) / 700 (h2) | "Why Alkyme" |
| In-band subhead | UI | 600 | "What this means" |
| Card title | UI | 600 | Feature card heading |
| Modal title | UI | 600 | Dialog header |
| Footer labels | UI | 600 | Column headings |
| Eyebrow | UI | 600 | "Startup Studio" |
| Body/chrome | UI | 400 | Paragraph text |
| Legal document | Display | 400/700 | Privacy h1/h2 |
| Testimonial | Display | 700 | Pull quote |

**Key Rule:** One Display heading per section. Use UI for structure within the section.

---

## 6. Dark Mode Requirements {#dark-mode-requirements}

### 6.1 Implementation Pattern

**HTML Attribute:**
```html
<html data-theme="dark">
```

**CSS Override:**
```css
html[data-theme="dark"] {
  color-scheme: dark;
  /* Remapped tokens */
}
```

### 6.2 Token Remapping

**Colors that change:**
```css
/* Light mode */
--ink: var(--bark)           /* #040d12 */
--text: var(--ink)
--page-bg: #ffffff

/* Dark mode */
--ink: #e6f0ea               /* Light text */
--text: var(--ink)
--page-bg: #070c0a           /* Dark canvas */
```

**Colors that DON'T change:**
- `--bark` (stays #040d12 for brand consistency)
- `--forest`, `--moss`, `--dew` (brand greens)
- Use `--ink` for text, not `--bark`

### 6.3 Dark Mode Checklist

Every page MUST have:

1. **Theme Toggle:** `#site-theme-toggle` in footer
2. **Theme Script:** `assets/site-theme.js` loaded
3. **FOUC Prevention:** Inline script in `<head>`
4. **Proper Scoping:** All dark styles use `html[data-theme="dark"]`
5. **Semantic Colors:** Use `--text`, `--muted`, not hardcoded colors

### 6.4 Dark Mode Patterns

**Text on Light Canvas:**
```css
color: var(--text);              /* Auto-switches */
color: var(--muted);             /* Secondary text */
```

**Text on Dark Surface (brand):**
```css
color: var(--text-on-dark);      /* Eggshell */
color: var(--prose-on-dark-surface);  /* With alpha */
```

**Glass in Dark Mode:**
```css
/* Automatically uses dark gradient/shadow via tokens */
.glass {
  background: var(--glass-marketing-gradient);
  box-shadow: var(--glass-marketing-shadow);
}
```

### 6.5 Testing Requirements

**Manual Test:**
1. Toggle dark mode in footer
2. Verify text remains readable (WCAG AA contrast)
3. Check glass effects render properly
4. Verify shadows are visible
5. Test interactive states (hover, focus)

**Automated Check:**
```bash
# Search for hardcoded colors that should be tokens
grep -r "#[0-9a-f]{6}" assets/*.css | grep -v "alkyme-tokens.css"
```

---

## 7. Validation Checklist {#validation-checklist}

### 7.1 Token Validation

- [ ] No duplicate color definitions outside `alkyme-tokens.css`
- [ ] All colors use `var(--token)` syntax
- [ ] Alpha transparency uses `rgb(var(--rgb-*) / alpha)`
- [ ] No hardcoded spacing values (use `--space-*`)
- [ ] Typography uses `--type-*` tokens

### 7.2 Component Validation

- [ ] All heroes use `.alk-hero` or `.hero` class
- [ ] All CTAs use proper tier classes
- [ ] Button groups use documented patterns
- [ ] Cards use `.alk-card` or `.card` structure
- [ ] Glass elements use `.glass` with proper modifiers

### 7.3 Dark Mode Validation

- [ ] `html[data-theme="dark"]` selector used
- [ ] Theme toggle present in footer
- [ ] FOUC prevention script in `<head>`
- [ ] All text uses semantic color tokens
- [ ] Interactive states visible in dark mode

### 7.4 Structure Validation

- [ ] `.container` used for content width
- [ ] Section spacing uses `--section-pad-y`
- [ ] Vertical rhythm follows documented patterns
- [ ] Grid gaps use `--grid-gap-cards`
- [ ] Footer consistent across all pages

### 7.5 Accessibility Validation

- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- [ ] Touch targets minimum 44x44px
- [ ] Focus states visible (`:focus-visible`)
- [ ] Skip link present (`#main` target)
- [ ] Semantic HTML structure

### 7.6 Performance Validation

- [ ] Glass blur reduced on mobile
- [ ] `prefers-reduced-motion` respected
- [ ] Images lazy-loaded where appropriate
- [ ] Critical CSS inline (if applicable)
- [ ] Fonts preconnected/preloaded

---

## Appendix A: File Load Order

**Every marketing page:**
```html
<head>
  <!-- FOUC prevention (inline) -->
  <script>/* theme check */</script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="assets/marketing-fonts.css">

  <!-- Design system -->
  <link rel="stylesheet" href="assets/alkyme-tokens.css">
  <link rel="stylesheet" href="assets/site-marketing-base.css">
  <link rel="stylesheet" href="assets/site-chrome.css">

  <!-- Page-specific -->
  <link rel="stylesheet" href="assets/site-home.css">
  <link rel="stylesheet" href="assets/site-footer.css">
</head>
```

---

## Appendix B: Token Migration Guide

**Migrating hardcoded values:**

### Colors
```css
/* Before */
color: #040d12;
background: rgba(4, 13, 18, 0.8);

/* After */
color: var(--bark);
background: rgb(var(--rgb-bark) / 0.8);
```

### Spacing
```css
/* Before */
margin-bottom: 24px;
gap: 32px;

/* After */
margin-bottom: var(--space-lg);  /* 24px */
gap: var(--space-xl);             /* 32px */
```

### Typography
```css
/* Before */
font-size: 1.5rem;
font-weight: 700;
line-height: 1.2;

/* After */
font-size: var(--type-h2-display-sm-size);
font-weight: var(--type-h2-weight);
line-height: var(--type-h2-line-tight);
```

---

## Appendix C: Common Mistakes

### Mistake 1: Hardcoded Colors
```css
/* WRONG */
.my-component {
  color: #040d12;
  border: 1px solid #93b1a6;
}

/* RIGHT */
.my-component {
  color: var(--bark);
  border: var(--border-subtle);
}
```

### Mistake 2: Duplicate Tokens
```css
/* WRONG - defining in page CSS */
:root {
  --my-green: #5c8374;
}

/* RIGHT - use existing token */
.my-component {
  color: var(--moss);
}
```

### Mistake 3: Arbitrary Spacing
```css
/* WRONG */
.my-component {
  margin-bottom: 18px;
  padding: 27px 19px;
}

/* RIGHT */
.my-component {
  margin-bottom: var(--space-lg);  /* 24px */
  padding: var(--space-xl) var(--space-lg);  /* 32px 24px */
}
```

### Mistake 4: Dark Mode Not Scoped
```css
/* WRONG */
.dark .my-component {
  color: white;
}

/* RIGHT */
html[data-theme="dark"] .my-component {
  color: var(--text);
}
```

### Mistake 5: Font Stack Duplication
```css
/* WRONG */
.my-heading {
  font-family: "Libre Baskerville", Georgia, serif;
}

/* RIGHT */
.my-heading {
  font-family: var(--type-display-family);
}
```

---

## Appendix D: Quick Reference

### Most Used Tokens

**Colors:**
- `--bark` - Brand dark
- `--text` - Primary text (auto-switches in dark mode)
- `--muted` - Secondary text
- `--accent-on-canvas` - Links, labels

**Spacing:**
- `--space-sm` - 8px
- `--space-md` - 16px
- `--space-lg` - 24px
- `--space-xl` - 32px

**Typography:**
- `--type-h1-size` - Page title
- `--type-h2-display-sm-size` - Section title
- `--type-body-size` - Body text
- `--type-lead-size` - Intro paragraph

**Layout:**
- `--page-gutter` - Horizontal padding
- `--section-pad-y` - Vertical section spacing
- `--content-max-width` - Max content width (1380px)

**Radius:**
- `--radius` - Default (8px)
- `--radius-media` - Photos/cards (responsive)
- `--radius-pill` - Pill buttons (responsive)

**Shadow:**
- `--card-shadow-rest` - Default card
- `--card-shadow-hover` - Hover state
- `--shadow-lg` - Large elevation

---

## Document History

**Phase 4 (April 2026):**
- Initial contract creation
- Comprehensive token documentation
- Component pattern definitions
- Dark mode requirements established

**Maintenance:**
- Update this document when adding new tokens
- Run validation checklist before each release
- Review quarterly for consistency

---

## 8. Communication & Execution Protocol {#communication-protocol}

### 8.1 Shorthand Interpretation

**User communicates in shorthand** - It is your responsibility to:
1. **Interpret the intent** based on context and prior patterns
2. **Ask clarifying questions immediately** if not 100% clear on the request
3. **Push back before executing** rather than going down the wrong path
4. **Confirm understanding** when instructions are ambiguous

### 8.2 When to Ask Follow-up Questions

**ALWAYS ask follow-up questions when:**
- User request has multiple valid interpretations
- Technical approach is unclear (e.g., "make it liquid glass" - what specifically?)
- Scope is ambiguous (e.g., "globally" - which files/components?)
- You're inferring something that wasn't explicitly stated

**Example patterns:**
- User: "use the non img/vid one"
  - ❌ Wrong: Assume which option they mean
  - ✅ Right: "You mentioned 'non img/vid' - do you mean Option 4 (gradient background) or are you referring to something else? I want to make sure I implement the right hero."

- User: "make nav liquid glass globally"
  - ❌ Wrong: Apply one interpretation and hope it's right
  - ✅ Right: "Just to clarify - do you want the nav to have liquid glass as the default state (always visible), or only when scrolled? And should this apply to all pages?"

### 8.3 Execution Protocol

**Before starting work:**
1. Confirm you understand the full scope
2. State your interpretation in plain language
3. Wait for confirmation if there's ANY ambiguity
4. Only proceed when 100% certain

**During work:**
1. Use TodoWrite to track tasks if work is multi-step
2. Mark tasks complete only when fully finished (no errors, tests pass, etc.)
3. If you encounter blockers, create new todos describing the issue
4. Never mark a task complete if implementation is partial or has errors

**After completion:**
1. Verify the work matches the original request
2. Test in browser if it's a visual change
3. Rebuild CSS if styles were modified
4. Note any follow-up work needed

### 8.4 Quality Standards

**Never do hacky or half-ass work:**
- Use proper design tokens, not hardcoded values
- Follow established patterns in the codebase
- Write clean, maintainable code
- Don't rush - ask questions first, then execute correctly

**When you make a mistake:**
1. Acknowledge it immediately
2. Fix it completely (don't just patch it)
3. Add a note to prevent the same mistake in the future
4. Update this contract if needed

---

**Questions or updates needed?**
Contact: Development Team
Last Validated: 2026-05-03
