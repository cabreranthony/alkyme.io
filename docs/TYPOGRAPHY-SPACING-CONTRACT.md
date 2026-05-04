# Typography & Spacing Design Contract

**Purpose**: Establish and enforce consistent typographic hierarchy, spacing, and visual rhythm across the entire Alkymē website.

**Owner**: Design System / QA Agent
**Last Updated**: 2026-04-29
**Status**: ACTIVE ENFORCEMENT

---

## 1. HEADING HIERARCHY RULES

### H1 - Page Title (Only ONE per page)
- **Usage**: Main page title only
- **Class**: `.display-title` + `.display-title--xl` OR native `<h1>`
- **Token**: `--type-h1-size` or `--type-h1-display-hero-size` (for hero sections)
- **Size**: `clamp(2rem, 4.5vw, 3rem)` (standard) or `clamp(3rem, 6vw, 4.5rem)` (hero)
- **Weight**: `400` (regular) or `600` (hero)
- **Family**: `var(--type-display-family)` (Libre Baskerville)
- **Line Height**: `1.12`
- **Letter Spacing**: `-0.02em`
- **Color**:
  - Light mode: `var(--text)` (#040d12)
  - Dark mode: `var(--eggshell-sky)` (#fff9f0)
- **Margin Bottom**: `var(--space-xl)` (2rem / 32px)

**Example Locations**:
- Hero sections: "Industry Solutions", "Build companies at the speed of AI"
- Page titles

### H2 - Section Headers
- **Usage**: Major section dividers
- **Class**: `.display-title` + size modifier
  - XL: `.display-title--xl` → `--type-h2-display-lg-size`
  - LG: `.display-title--lg` → `--type-h2-display-md-size`
  - MD: `.display-title--md` → `--type-h2-display-sm-size`
- **Tokens**:
  - XL: `clamp(2.5rem, 5vw, 3.5rem)` (40-56px)
  - LG: `clamp(2rem, 4vw, 3rem)` (32-48px)
  - MD: `clamp(1.55rem, 2.8vw, 1.95rem)` (24.8-31.2px)
- **Weight**: `600` (semibold)
- **Family**: `var(--type-display-family)` (Libre Baskerville)
- **Line Height**: `1.08` (tight for display)
- **Letter Spacing**: `-0.02em`
- **Margin Bottom**: `var(--space-lg)` to `var(--space-2xl)` depending on context
- **Margin Top**: `0` (spacing handled by parent section)

**Example Locations**:
- "From conversation to launch" (.display-title--md)
- "Solutions for every industry" (.display-title--md)
- "See what we've built" (.display-title--xl)
- "Ready to build your solution?" (.display-title--md)

### H3 - Subsection Headers
- **Usage**: Component titles, card headers, process steps
- **Token**: `--type-h3-size` or `--type-h3-section-size`
- **Size**:
  - Standard: `1.1rem` (17.6px)
  - Section: `clamp(1.18rem, 2.4vw, 1.42rem)` (18.88-22.72px)
- **Weight**: `600` (semibold)
- **Family**: `var(--type-ui-family)` (Source Sans 3)
- **Line Height**: `1.22`
- **Letter Spacing**: `-0.012em`
- **Margin Bottom**: `var(--space-sm)` to `var(--space-md)`

**Example Locations**:
- Process card titles: "Discovery", "Design", "Build", "Launch"
- Case study panel titles

### H4 - Card/Component Titles
- **Usage**: Smaller component headers
- **Token**: `--type-h4-size`
- **Size**: `1.02rem` (16.32px)
- **Weight**: `600` (semibold)
- **Family**: `var(--type-ui-family)` (Source Sans 3)
- **Line Height**: `1.25`
- **Margin Bottom**: `var(--space-xs)` to `var(--space-sm)`

**Example Locations**:
- Value prop card titles
- Capability accordion items

### H5 & H6 - Rarely Used
- **Usage**: Deep nested content only
- **Size**: `0.98rem` and `0.95rem` respectively
- **Family**: `var(--type-ui-family)`

---

## 2. SECTION SPACING RULES

### Section Padding (Vertical)
All major sections MUST use consistent vertical padding:

```css
.section {
  padding: var(--space-6xl) 0; /* 8rem / 128px */
}
```

**Exceptions**:
- `.section--sm`: `var(--space-4xl) 0` (5rem / 80px)
- `.section--lg`: `var(--space-7xl) 0` (10rem / 160px)

### Section Header Spacing
Section headers (H2) should have consistent bottom margin:

```css
.section-header {
  margin-bottom: var(--space-4xl); /* 5rem / 80px */
}

/* For centered headers */
.section-header--center {
  text-align: center;
  margin-bottom: var(--space-5xl); /* 6rem / 96px */
}
```

### Content Block Spacing
- **Between heading and paragraph**: `var(--space-lg)` (1.5rem / 24px)
- **Between paragraphs**: `var(--space-md)` (1rem / 16px)
- **Between content sections**: `var(--space-2xl)` (3rem / 48px)

---

## 3. COMPONENT-SPECIFIC RULES

### Hero Sections
```css
.hero {
  padding: var(--space-6xl) 0; /* 8rem top/bottom */
}

.hero__title {
  margin-bottom: var(--space-xl); /* 2rem / 32px */
}

.hero__lead {
  margin-bottom: var(--space-2xl); /* 3rem / 48px */
}

.hero__actions {
  gap: var(--space-md); /* 1rem / 16px between buttons */
}
```

### Card Grids
```css
.card-grid {
  gap: var(--space-2xl); /* 3rem / 48px between cards */
}

.card__title {
  margin-bottom: var(--space-sm); /* 0.625rem / 10px */
}

.card__description {
  margin-bottom: 0; /* No bottom margin */
}
```

### Process/Timeline Sections
```css
.process-header {
  text-align: center;
  margin-bottom: var(--space-5xl); /* 6rem / 96px */
}

.process-grid {
  gap: var(--space-2xl); /* 3rem / 48px */
}
```

### Dark Sections
```css
.dark-section {
  background: var(--bark) or #1a1a1a;
  padding: var(--space-6xl) 0;
}

.dark-section .display-title {
  color: var(--eggshell-sky); /* MUST override */
}

.dark-section__header {
  margin-bottom: var(--space-3xl); /* 4rem / 64px */
}
```

### CTA Boxes/Cards
```css
.cta-box {
  padding: var(--space-4xl); /* 5rem / 80px */
  text-align: center;
}

.cta-box__title {
  margin-bottom: var(--space-lg); /* 1.5rem / 24px */
}

.cta-box__description {
  margin-bottom: var(--space-2xl); /* 3rem / 48px */
}
```

---

## 4. EYEBROW/LABEL RULES

Eyebrows (small labels above headers):

```css
.eyebrow {
  font-size: var(--type-eyebrow-size); /* 0.8125rem / 13px */
  font-weight: var(--type-eyebrow-weight); /* 600 */
  font-family: var(--type-ui-family);
  text-transform: uppercase;
  letter-spacing: var(--type-eyebrow-track); /* 0.12em */
  line-height: 1.25;
  margin-bottom: var(--space-md); /* 1rem / 16px */
  color: var(--moss); /* or var(--dew) in dark mode */
}
```

---

## 5. BODY TEXT RULES

### Lead Text (Introduction paragraphs)
```css
.lead {
  font-size: var(--type-lead-size); /* clamp(1.125rem, 1.5vw, 1.3125rem) */
  line-height: var(--type-lead-line); /* 1.55 */
  margin-bottom: var(--space-2xl);
}
```

### Standard Body Text
```css
.body {
  font-size: var(--type-body-size); /* 1.0625rem / 17px */
  line-height: var(--type-body-line); /* 1.6 */
}
```

### Small Text
```css
.small {
  font-size: var(--type-small-size); /* ~0.92rem / 14.7px */
  line-height: var(--type-small-line); /* 1.45 */
}
```

### Caption Text
```css
.caption {
  font-size: var(--type-caption-size); /* 0.92rem / 14.7px */
  line-height: var(--type-caption-line); /* 1.45 */
  color: var(--muted);
}
```

---

## 6. BUTTON SPACING

```css
.btn {
  padding: 0.75rem var(--space-xl); /* 12px vertical, 32px horizontal */
  gap: var(--space-xs); /* 0.25rem / 4px for icon spacing */
}

.btn--lg {
  padding: var(--space-md) var(--space-2xl); /* 16px × 48px */
}

/* Button groups */
.btn-group {
  gap: var(--space-md); /* 1rem / 16px between buttons */
}
```

---

## 7. RESPONSIVE SCALING

### Mobile (< 900px)
- Section padding reduces to `var(--space-4xl)` (5rem)
- Display titles scale down via clamp()
- Card grids become single column
- Horizontal spacing (container padding) reduces to `var(--space-lg)`

### Tablet (900px - 1200px)
- Standard spacing maintained
- 2-column grids where applicable

### Desktop (> 1200px)
- Full spacing values
- 4-column grids where designed

---

## 8. COMMON VIOLATIONS TO WATCH

### ❌ WRONG:
```css
/* Inconsistent section padding */
.my-section { padding: 100px 0; } /* Hardcoded value */

/* No spacing system */
.card { margin-bottom: 25px; } /* Random value */

/* Wrong font family */
h2 { font-family: Arial; } /* Not using tokens */

/* Inconsistent heading sizes */
.section-title { font-size: 28px; } /* Not using display-title utilities */

/* Missing dark mode override */
.dark-section h2 { } /* Will be invisible on dark background */
```

### ✅ CORRECT:
```css
/* Using spacing tokens */
.my-section { padding: var(--space-6xl) 0; }

/* Design system spacing */
.card { margin-bottom: var(--space-2xl); }

/* Proper font family */
h2 { font-family: var(--type-display-family); }

/* Using utility classes */
<h2 class="display-title display-title--lg">Title</h2>

/* Dark mode handled */
.dark-section .display-title { color: var(--eggshell-sky); }
```

---

## 9. AUDIT CHECKLIST

Before any page goes live, verify:

- [ ] Only ONE H1 per page
- [ ] All H2s use `.display-title` utility classes
- [ ] Section padding uses `var(--space-6xl)` or approved variants
- [ ] Header bottom margins are consistent (lg/xl/2xl based on context)
- [ ] No hardcoded pixel values for spacing (except borders)
- [ ] All dark sections override `.display-title` color
- [ ] Eyebrows use proper sizing and spacing
- [ ] Button groups have consistent gaps
- [ ] Card grids use `var(--space-2xl)` or `var(--space-3xl)` gaps
- [ ] Body text uses approved size tokens
- [ ] Responsive breakpoints maintain hierarchy
- [ ] Letter spacing follows tokens
- [ ] Line heights follow tokens
- [ ] Font weights are semantic (400/600/700)

---

## 10. CURRENT SITE ISSUES FOUND

### Solutions Page - Case Study Section
**Issue**: "Epoch²: Supply Chain Optimization" title has different spacing than "Ready to build your solution?"

**Root Cause**:
- Case study panel title uses `.case-study-panel__title` with custom CSS
- CTA uses `.display-title` utility class
- Different margin/padding values

**Fix Needed**:
```css
/* Current - WRONG */
.case-study-panel__title {
  font-size: var(--type-h2-display-sm-size);
  /* Custom margins that don't match other sections */
}

/* Should be - CORRECT */
<h3 class="display-title display-title--md">Epoch²: Supply Chain Optimization</h3>
/* OR ensure custom class has exact same spacing as .display-title */
```

---

## 11. ENFORCEMENT PROCESS

1. **During Development**:
   - Use existing `.display-title` utilities instead of creating custom heading styles
   - Reference this contract when unsure about spacing
   - Use spacing tokens, never hardcoded values

2. **Pre-Deployment QA**:
   - Run visual regression tests
   - Check each section against this contract
   - Verify responsive scaling
   - Test dark mode overrides

3. **Post-Deployment Audit**:
   - Quarterly review of all pages
   - Update contract when new patterns emerge
   - Document exceptions with justification

---

## 12. DECISION TREE

**"What heading size should I use?"**

```
Is this the main page title?
├─ YES → <h1> or .display-title--xl (hero sections)
└─ NO → Is this a major section divider?
    ├─ YES → <h2 class="display-title display-title--lg or --md">
    └─ NO → Is this a component/card title?
        ├─ YES → <h3> (process cards, features)
        └─ NO → <h4> or smaller
```

**"What spacing should I use?"**

```
What am I spacing?
├─ Between sections → var(--space-6xl) padding
├─ Header to content → var(--space-lg) to var(--space-2xl)
├─ Between cards → var(--space-2xl) or var(--space-3xl)
├─ Between buttons → var(--space-md)
├─ Title to description → var(--space-sm) to var(--space-md)
└─ Between paragraphs → var(--space-md)
```

---

## APPENDIX: SPACING TOKEN REFERENCE

```css
--space-xs:    0.25rem  (4px)
--space-sm:    0.625rem (10px)
--space-md:    1rem     (16px)
--space-lg:    1.5rem   (24px)
--space-xl:    2rem     (32px)
--space-2xl:   3rem     (48px)
--space-3xl:   4rem     (64px)
--space-4xl:   5rem     (80px)
--space-5xl:   6rem     (96px)
--space-6xl:   8rem     (128px)
--space-7xl:   10rem    (160px)
```

## APPENDIX: TYPE TOKEN REFERENCE

```css
/* Display Heading Sizes */
--type-h1-display-hero-size:  clamp(3rem, 6vw, 4.5rem)      (48-72px)
--type-h2-display-lg-size:    clamp(2.5rem, 5vw, 3.5rem)    (40-56px)
--type-h2-display-md-size:    clamp(2rem, 4vw, 3rem)        (32-48px)
--type-h2-display-sm-size:    clamp(1.55rem, 2.8vw, 1.95rem)(24.8-31.2px)

/* Standard Heading Sizes */
--type-h1-size:               clamp(2rem, 4.5vw, 3rem)      (32-48px)
--type-h3-section-size:       clamp(1.18rem, 2.4vw, 1.42rem)(18.88-22.72px)
--type-h3-size:               1.1rem                         (17.6px)
--type-h4-size:               1.02rem                        (16.32px)

/* Body Sizes */
--type-lead-size:             clamp(1.125rem, 1.5vw, 1.3125rem) (18-21px)
--type-body-size:             1.0625rem                      (17px)
--type-small-size:            ~0.92rem                       (14.7px)
--type-caption-size:          0.92rem                        (14.7px)
--type-eyebrow-size:          0.8125rem                      (13px)
```

---

**END OF CONTRACT**

*This is a living document. When adding new patterns, update this contract first, then implement.*
