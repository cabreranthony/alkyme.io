# Homepage Spacing Audit Report

**Date:** 2026-04-20
**Page:** `/index.html`
**User Feedback:** "Negative space is good, but too much is bad. Too much makes it look like we're trying to fill up the space with noise or fluff."

---

## Executive Summary

This audit identifies areas where excessive spacing creates "dead zones" that feel like filler rather than intentional breathing room. The homepage currently uses aggressive vertical spacing (8rem–10rem on desktop) that stretches content unnecessarily and creates awkward rhythm.

**Key Findings:**
- **Hero Section**: Excessive internal padding (96px / 6rem) feels stretched
- **Process Section**: Oversized vertical spacing (8rem–10rem) creates empty voids between steps
- **CTA Section**: Default section padding is too large for a simple 2-element section
- **Overall Rhythm**: Spacing lacks hierarchy—all sections feel equally weighted

---

## 1. Current Spacing Inventory

### A. Hero Section (`home-hero`)

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`

**Lines 15-23, 60-67:**
```css
.home-hero {
  min-height: 100vh;
  /* Full viewport height is appropriate */
}

.home-hero__content {
  padding: var(--alk-space-3xl) var(--alk-space-lg);
  /* = 96px (6rem) top/bottom, 32px (2rem) left/right */
  max-width: 980px;
  margin: 0 auto;
}
```

**Current Values:**
- **Container:** `min-height: 100vh` (appropriate for hero)
- **Content Padding:** `96px` top/bottom (excessive internal spacing)
- **Internal Gaps:**
  - Eyebrow → Title: `var(--alk-space-xl)` = `48px`
  - Title → Description: `var(--alk-space-xl)` = `48px`
  - Description → Actions: `var(--alk-space-3xl)` = `96px` ⚠️

**Problem Areas:**
- ❌ **96px padding** on `.home-hero__content` creates excessive white space within the hero
- ❌ **96px gap** before buttons feels like dead space, especially on mobile
- ⚠️ **48px gaps** between text elements could be tighter for better cohesion

---

### B. Process Section (`#how-we-work`)

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/components/layout.css`

**Lines 82-85, 182-185:**
```css
.alk-section--xl {
  padding-top: 8rem;    /* 128px */
  padding-bottom: 8rem; /* 128px */
}

@media (min-width: 768px) {
  .alk-section--xl {
    padding-top: 10rem;    /* 160px ⚠️ */
    padding-bottom: 10rem; /* 160px ⚠️ */
  }
}
```

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`

**Lines 235-239, 244:**
```css
.home-process {
  display: flex;
  flex-direction: column;
  gap: var(--alk-space-4xl); /* This token doesn't exist! Falls back to default */
}

.home-process__step {
  gap: var(--alk-space-2xl); /* 64px between number/content */
}
```

**Current Values:**
- **Section Padding:** `128px` mobile → `160px` desktop (both top & bottom)
- **Section Header → Content:** `var(--alk-space-2xl)` = `48px` (line 123)
- **Between Steps:** `var(--alk-space-4xl)` = **undefined** (likely falls back to browser default or breaks)
- **Step Number → Content:** `64px` horizontal gap

**Problem Areas:**
- ❌ **160px section padding** (top + bottom = 320px total) feels like excessive filler
- ❌ **Undefined `--alk-space-4xl`** token creates unpredictable spacing between steps
- ⚠️ **64px horizontal gap** between step number and content pushes elements apart unnecessarily
- ❌ Spacing creates "empty voids" rather than purposeful rhythm

---

### C. Section Header (Shared Component)

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/components/layout.css`

**Lines 121-127:**
```css
.alk-section__header {
  text-align: center;
  margin-bottom: var(--alk-space-2xl); /* 48px */
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
}
```

**Current Values:**
- **Header → Body:** `48px` margin-bottom
- **Max Width:** `768px` (appropriate for readability)

**Assessment:**
- ✅ **48px gap** is reasonable for section header separation
- ✅ Max-width prevents overly long lines

---

### D. CTA Section (`alk-section--gradient`)

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/index.html` (line 162)
**Applied Class:** `.alk-section` (no size modifier = default)

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/components/layout.css`

**Lines 61-64, 177-180:**
```css
.alk-section {
  padding-top: var(--alk-space-3xl);   /* 64px */
  padding-bottom: var(--alk-space-3xl); /* 64px */
}

@media (min-width: 768px) {
  .alk-section {
    padding-top: 6rem;    /* 96px */
    padding-bottom: 6rem; /* 96px */
  }
}
```

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`

**Lines 820-834:**
```css
.cta-section__title {
  margin: 0 0 var(--alk-space-lg); /* 24px */
}

.cta-section__description {
  margin: 0 0 var(--alk-space-2xl); /* 48px */
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
```

**Current Values:**
- **Section Padding:** `64px` mobile → `96px` desktop
- **Title → Description:** `24px`
- **Description → Buttons:** `48px`
- **Container:** `.alk-container--lg` = `max-width: 1024px` with centered text

**Problem Areas:**
- ⚠️ **96px section padding** feels excessive for a simple CTA with only 2 text elements + buttons
- ✅ Internal spacing (24px, 48px) is appropriate
- ⚠️ Total vertical space (96px + 24px + 48px + button height + 96px ≈ **300px+**) creates a bloated section

---

## 2. Excessive Spacing - Problem Areas

### Critical Issues (Immediate Impact)

#### 🔴 **Problem 1: Process Section Vertical Bloat**
**Location:** `layout.css` lines 82-85, 182-185
**Current:** `padding: 10rem 0` (160px top + 160px bottom = **320px total**)

**Why it's excessive:**
- Creates massive vertical voids before and after the 3-step process
- Feels like "stretching to fill space" rather than intentional rhythm
- On scroll, users encounter large empty gaps between content
- Desktop breakpoint actually **increases** padding (8rem → 10rem)

**Impact:** High visual emptiness, breaks content flow

---

#### 🔴 **Problem 2: Undefined Step Spacing Token**
**Location:** `site-home-liquid.css` line 238
**Current:** `gap: var(--alk-space-4xl)` — **This token does not exist**

**Actual Token Values (from `/assets/components/core.css` lines 38-44):**
```css
--alk-space-xs: 8px
--alk-space-sm: 16px
--alk-space-md: 24px
--alk-space-lg: 32px
--alk-space-xl: 48px
--alk-space-2xl: 64px
--alk-space-3xl: 96px
/* --alk-space-4xl does NOT exist */
```

**Result:**
- Browser likely ignores the undefined variable and uses default `gap` behavior
- Inconsistent rendering across browsers
- Technical debt that creates unpredictable spacing

**Impact:** Technical error + unpredictable vertical spacing between process steps

---

#### 🟡 **Problem 3: Hero Internal Padding Excess**
**Location:** `site-home-liquid.css` line 66
**Current:** `padding: var(--alk-space-3xl) var(--alk-space-lg)` = `96px 32px`

**Why it's excessive:**
- Hero already occupies `100vh` (full screen)
- Additional 96px top/bottom padding pushes content into a smaller "safe zone"
- On mobile, this creates awkward vertical centering with too much space above/below
- Combined with 48px gaps between title/description, feels overly spaced

**Impact:** Content feels "floaty" in the middle of the viewport

---

#### 🟡 **Problem 4: Hero Description → Actions Gap**
**Location:** `site-home-liquid.css` line 120
**Current:** `margin: 0 auto var(--alk-space-3xl)` = `96px` bottom margin

**Why it's excessive:**
- 96px gap between description text and call-to-action buttons
- Creates visual disconnect between value prop and action
- Feels like filler space, especially on mobile where screen real estate is limited

**Impact:** Weakens CTA hierarchy, feels like dead space

---

### Moderate Issues (Secondary Impact)

#### 🟡 **Problem 5: CTA Section Padding on Desktop**
**Location:** `layout.css` lines 177-180
**Current:** `padding: 6rem 0` (96px top + 96px bottom)

**Why it could be tighter:**
- Section contains only: title + description + 2 buttons
- Simple content doesn't warrant 96px breathing room on all sides
- Feels stretched compared to content density
- Could use `--md` or custom reduced padding

**Impact:** Section feels oversized for its content weight

---

#### 🟡 **Problem 6: Process Step Horizontal Gap**
**Location:** `site-home-liquid.css` line 244
**Current:** `gap: var(--alk-space-2xl)` = `64px` between step number and text

**Why it could be tighter:**
- 64px horizontal gap pushes step number far from content
- On desktop, creates wide horizontal voids
- 32px–48px would maintain visual connection without feeling cramped

**Impact:** Horizontal disconnection between numbered badge and step content

---

## 3. Visual Balance Analysis

### Current Rhythm Issues

**Hierarchy Problems:**
1. ❌ **All sections feel equally weighted** — Process section has same visual importance as hero due to oversized padding
2. ❌ **Lack of breathing rhythm** — Large gaps everywhere create monotonous spacing
3. ❌ **No progressive disclosure** — User sees gaps → content → gaps in predictable, boring pattern

**Flow Problems:**
1. ❌ **Awkward scroll experience** — Long stretches of empty space between sections
2. ❌ **Content feels isolated** — Elements don't feel connected into a cohesive narrative
3. ❌ **Mobile suffers most** — Excessive padding consumes limited viewport, forcing excessive scrolling

### Recommended Rhythm

**Good spacing creates hierarchy:**
- **Hero** (largest): Premium breathing room appropriate for primary value prop
- **Process** (medium): Enough space to separate from hero, but not dominant
- **CTA** (compact): Punchy, tight spacing to drive urgency

**Progressive vertical rhythm:**
```
Hero (100vh intrinsic)
  ↓ 64px–80px transition
Process Section (64px top/bottom)
  ↓ 48px–64px transition
CTA Section (48px–64px top/bottom, tight internal)
```

---

## 4. Recommended Spacing Values

### 🎯 **Recommendation 1: Reduce Process Section Padding**

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/components/layout.css`

**Current (lines 82-85, 182-185):**
```css
.alk-section--xl {
  padding-top: 8rem;    /* 128px */
  padding-bottom: 8rem; /* 128px */
}

@media (min-width: 768px) {
  .alk-section--xl {
    padding-top: 10rem;    /* 160px */
    padding-bottom: 10rem; /* 160px */
  }
}
```

**Recommended:**
```css
.alk-section--xl {
  padding-top: 4rem;    /* 64px - REDUCED */
  padding-bottom: 4rem; /* 64px - REDUCED */
}

@media (min-width: 768px) {
  .alk-section--xl {
    padding-top: 5rem;    /* 80px - REDUCED from 160px */
    padding-bottom: 5rem; /* 80px - REDUCED from 160px */
  }
}
```

**Rationale:**
- Reduces total vertical padding from **320px → 160px** on desktop (50% reduction)
- Maintains breathing room without feeling like filler
- Creates better rhythm with hero section above
- Still provides clear section separation

**Impact:** Dramatically tightens page, removes "dead zones"

---

### 🎯 **Recommendation 2: Fix Undefined Step Spacing Token**

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`

**Current (line 238):**
```css
.home-process {
  gap: var(--alk-space-4xl); /* UNDEFINED TOKEN */
}
```

**Recommended:**
```css
.home-process {
  gap: var(--alk-space-2xl); /* 64px - DEFINED TOKEN */
}
```

**Rationale:**
- Uses existing, defined token (`--alk-space-2xl` = 64px)
- Provides clear vertical separation between steps
- Predictable, consistent rendering
- Aligns with design system scale

**Impact:** Fixes technical debt, ensures consistent rendering

---

### 🎯 **Recommendation 3: Reduce Hero Internal Padding**

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`

**Current (line 66):**
```css
.home-hero__content {
  padding: var(--alk-space-3xl) var(--alk-space-lg);
  /* = 96px top/bottom, 32px left/right */
}
```

**Recommended:**
```css
.home-hero__content {
  padding: var(--alk-space-xl) var(--alk-space-lg);
  /* = 48px top/bottom, 32px left/right - REDUCED */
}

@media (min-width: 768px) {
  .home-hero__content {
    padding: var(--alk-space-2xl) var(--alk-space-lg);
    /* = 64px top/bottom, 32px left/right - MODERATE */
  }
}
```

**Rationale:**
- Hero is already `100vh` — excessive padding shrinks usable content area
- 48px mobile → 64px desktop provides sufficient air without feeling floaty
- Keeps content more compact and impactful
- Horizontal padding stays at 32px (appropriate)

**Impact:** Tighter hero content, more purposeful use of viewport

---

### 🎯 **Recommendation 4: Reduce Hero Description → Actions Gap**

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`

**Current (line 120):**
```css
.home-hero__description {
  margin: 0 auto var(--alk-space-3xl); /* 96px bottom */
}
```

**Recommended:**
```css
.home-hero__description {
  margin: 0 auto var(--alk-space-xl); /* 48px bottom - REDUCED */
}

@media (min-width: 768px) {
  .home-hero__description {
    margin: 0 auto var(--alk-space-2xl); /* 64px bottom - MODERATE */
  }
}
```

**Rationale:**
- Brings CTA buttons closer to value proposition
- Strengthens visual hierarchy (description → action)
- Reduces dead space on mobile significantly (96px → 48px)
- Desktop gets moderate spacing (64px) for breathing room

**Impact:** Stronger CTA hierarchy, less filler space

---

### 🎯 **Recommendation 5: Optimize CTA Section Padding**

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/index.html`

**Current (line 162):**
```html
<section class="alk-section alk-section--gradient">
  <!-- Uses default .alk-section = 64px mobile, 96px desktop -->
</section>
```

**Recommended:**
```html
<section class="alk-section alk-section--md alk-section--gradient">
  <!-- Uses .alk-section--md = 48px top/bottom -->
</section>
```

**Alternative (Custom CSS):**

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`

Add after line 835:
```css
/* Tighter CTA section padding for homepage */
.alk-section--gradient {
  padding-top: var(--alk-space-2xl);   /* 64px */
  padding-bottom: var(--alk-space-2xl); /* 64px */
}

@media (min-width: 768px) {
  .alk-section--gradient {
    padding-top: 4rem;    /* 64px stays consistent */
    padding-bottom: 4rem;
  }
}
```

**Rationale:**
- CTA section has minimal content (title + description + buttons)
- Doesn't need 96px desktop padding
- 64px all breakpoints creates punchy, urgent feel
- Maintains clear section separation without bloat

**Impact:** Tighter CTA section, better content density

---

### 🎯 **Recommendation 6: Reduce Process Step Horizontal Gap**

**File:** `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`

**Current (line 244):**
```css
.home-process__step {
  gap: var(--alk-space-2xl); /* 64px horizontal */
}
```

**Recommended:**
```css
.home-process__step {
  gap: var(--alk-space-lg); /* 32px horizontal - REDUCED */
}

@media (min-width: 768px) {
  .home-process__step {
    gap: var(--alk-space-xl); /* 48px horizontal - MODERATE */
  }
}
```

**Rationale:**
- 64px horizontal gap creates excessive distance between step number and content
- 32px mobile → 48px desktop maintains connection while providing breathing room
- Keeps numbered badge visually associated with its content
- Reduces horizontal "dead zones"

**Impact:** Better visual connection between step elements

---

## 5. Before/After Comparison

### Process Section Example

#### ❌ **BEFORE** (Current)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|                                        |
|         160px empty space              | ← Excessive padding top
|                                        |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Section Header
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         48px gap                       |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[01]←────64px gap────→Step 1 Content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|      Undefined gap (browser default)   | ← Technical issue
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[02]←────64px gap────→Step 2 Content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|      Undefined gap                     |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[03]←────64px gap────→Step 3 Content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|                                        |
|         160px empty space              | ← Excessive padding bottom
|                                        |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Padding: 320px (160 + 160)
Horizontal Gap: 64px (disconnected)
Step Gap: Undefined (broken)
```

#### ✅ **AFTER** (Recommended)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         80px breathing space           | ← Purposeful padding top
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Section Header
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         48px gap (unchanged)           |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[01]←──48px gap──→Step 1 Content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         64px defined gap               | ← Fixed, predictable
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[02]←──48px gap──→Step 2 Content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         64px defined gap               |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[03]←──48px gap──→Step 3 Content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         80px breathing space           | ← Purposeful padding bottom
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Padding: 160px (80 + 80) - 50% REDUCTION
Horizontal Gap: 48px (connected)
Step Gap: 64px (defined, consistent)
```

**Improvements:**
- ✅ **50% reduction** in section padding (320px → 160px)
- ✅ **Fixed undefined token** — predictable, consistent rendering
- ✅ **Tighter horizontal gaps** — better visual connection
- ✅ **Purposeful spacing** — feels intentional, not filler

---

### Hero Section Example

#### ❌ **BEFORE** (Current)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|                                        |
|         96px internal padding          | ← Excessive
|                                        |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Eyebrow Badge
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         48px gap                       |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hero Title (3 lines)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         48px gap                       |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Description paragraph
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|                                        |
|         96px DEAD SPACE                | ← Feels like filler
|                                        |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ CTA Buttons ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|                                        |
|         96px internal padding          | ← Excessive
|                                        |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Content Padding: 96px top/bottom
Description → CTA: 96px gap
```

#### ✅ **AFTER** (Recommended)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         64px internal padding          | ← Reduced
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Eyebrow Badge
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         48px gap (unchanged)           |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hero Title (3 lines)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         48px gap (unchanged)           |
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Description paragraph
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         64px purposeful gap            | ← Reduced, feels intentional
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ CTA Buttons ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
|         64px internal padding          | ← Reduced
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Content Padding: 64px top/bottom (desktop)
Description → CTA: 64px gap (desktop)
```

**Improvements:**
- ✅ **33% reduction** in content padding (96px → 64px desktop)
- ✅ **33% reduction** in CTA gap (96px → 64px desktop)
- ✅ **Tighter mobile** — 48px padding/gaps on small screens
- ✅ **Stronger hierarchy** — CTA feels connected to value prop

---

## 6. Summary of Changes

| Location | Current | Recommended | Reduction |
|----------|---------|-------------|-----------|
| **Process Section Padding (Desktop)** | 10rem (160px) | 5rem (80px) | **50%** |
| **Process Section Padding (Mobile)** | 8rem (128px) | 4rem (64px) | **50%** |
| **Process Step Gap** | `--alk-space-4xl` (undefined) | `--alk-space-2xl` (64px) | **Fixed** |
| **Process Horizontal Gap (Desktop)** | 64px | 48px | **25%** |
| **Process Horizontal Gap (Mobile)** | 64px | 32px | **50%** |
| **Hero Content Padding (Desktop)** | 96px | 64px | **33%** |
| **Hero Content Padding (Mobile)** | 96px | 48px | **50%** |
| **Hero Description → CTA (Desktop)** | 96px | 64px | **33%** |
| **Hero Description → CTA (Mobile)** | 96px | 48px | **50%** |
| **CTA Section Padding (Desktop)** | 96px | 64px | **33%** |
| **CTA Section Padding (Mobile)** | 64px | 64px | No change |

---

## 7. Implementation Priority

### 🔴 **High Priority** (Immediate Impact)

1. **Fix Process Section Padding** — Biggest visual impact, removes major dead zones
2. **Fix Undefined Step Spacing Token** — Technical debt, breaks consistency
3. **Reduce Hero Description → CTA Gap** — Strengthens primary conversion path

### 🟡 **Medium Priority** (Secondary Impact)

4. **Reduce Hero Internal Padding** — Improves mobile experience significantly
5. **Optimize CTA Section Padding** — Tightens final section
6. **Reduce Process Horizontal Gap** — Better element connection

---

## 8. Design System Notes

### Spacing Scale Alignment

**Current Issue:** Component library (`/assets/components/core.css`) uses a different spacing scale than canonical tokens (`/assets/alkyme-tokens.css`):

**Component Library Scale (8px base):**
```css
--alk-space-xs: 8px
--alk-space-sm: 16px
--alk-space-md: 24px
--alk-space-lg: 32px
--alk-space-xl: 48px
--alk-space-2xl: 64px
--alk-space-3xl: 96px
/* No --alk-space-4xl */
```

**Canonical Tokens Scale (4px base):**
```css
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
/* No --space-4xl */
```

**Recommendation for Future:**
- Consolidate into single spacing scale
- Consider adding `--space-4xl: 80px` to both systems if needed for intentional large gaps
- Remove `--alk-space-3xl: 96px` or document when 96px is truly appropriate (rare)

---

## 9. User Feedback Validation

**Original Feedback:** "Negative space is good, but too much is bad. Too much makes it look like we're trying to fill up the space with noise or fluff."

### How Recommendations Address This:

✅ **Reduces "filler" feeling:**
- Process section no longer feels stretched with 160px padding
- Hero doesn't have awkward 96px gaps that feel arbitrary
- CTA section is punchy, not bloated

✅ **Maintains purposeful breathing room:**
- 64px–80px section padding still provides clear separation
- 48px internal gaps keep hierarchy clear
- Spacing feels intentional, not excessive

✅ **Creates better rhythm:**
- Progressive spacing hierarchy (hero → process → CTA)
- Tighter connections between related elements
- Mobile experience dramatically improved with 50% reductions

---

## 10. Next Steps

1. **Review recommendations** with design/product team
2. **Implement high-priority changes** first (Process section, undefined token, hero CTA gap)
3. **Test on multiple viewport sizes** — especially mobile (375px–768px range)
4. **Validate scroll experience** — ensure content flows without jarring gaps
5. **Consider design system alignment** — resolve token scale differences

---

**Files Referenced:**
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/index.html`
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/site-home-liquid.css`
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/components/layout.css`
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/components/core.css`
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/alkyme-tokens.css`
