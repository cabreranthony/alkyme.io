# Cursor AI Education: Liquid Glass Design System Implementation

**Purpose:** This document teaches Cursor AI (and future AI assistants) how to properly implement, maintain, and extend the Alkyme liquid glass design system.

**Date Created:** April 2026
**Last Updated:** April 2026
**Author:** Claude (Anthropic) + Alkyme Team

---

## Table of Contents

1. [What Was Done](#1-what-was-done)
2. [Why It Was Done This Way](#2-why-it-was-done-this-way)
3. [How to Apply These Patterns](#3-how-to-apply-these-patterns)
4. [Common Mistakes to Avoid](#4-common-mistakes-to-avoid)
5. [Testing & Validation](#5-testing--validation)
6. [Future Enhancements](#6-future-enhancements)
7. [Quick Reference](#7-quick-reference)

---

## 1. What Was Done

### 1.1 Token System Enhancements (`alkyme-tokens.css`)

**Added Missing Glass State Tokens:**

```css
/* Interactive states for glass elements (buttons, cards, clickable surfaces) */
--glass-marketing-shadow-focus: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.95), 0 0 0 3px rgb(var(--rgb-forest) / 0.18), 0 14px 40px rgb(var(--rgb-bark) / 0.12);
--glass-marketing-shadow-active: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.95), 0 4px 16px rgb(var(--rgb-bark) / 0.1);
--glass-marketing-disabled-opacity: 0.5;

/* Loading/skeleton state for async content on glass */
--glass-marketing-skeleton-gradient: linear-gradient(
  90deg,
  rgb(var(--rgb-eggshell) / 0.5) 0%,
  rgb(var(--rgb-eggshell) / 0.7) 50%,
  rgb(var(--rgb-eggshell) / 0.5) 100%
);

/* Mobile: lighter blur for better performance on older devices */
--glass-marketing-filter-mobile: blur(12px) saturate(160%);
```

**Added Animation Tokens:**

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--duration-slow: 0.45s;

/* Glass-specific transitions */
--glass-transition-blur: backdrop-filter 0.35s var(--ease-out);
--glass-transition-shadow: box-shadow 0.28s var(--ease-out);
--glass-transition-background: background 0.28s var(--ease-out);
--glass-transition-all: transform 0.25s var(--ease-out), box-shadow 0.28s var(--ease-out);
```

**Enhanced Focus Ring System:**

```css
--focus-ring: 2px solid var(--forest);
--focus-ring-shadow: 0 0 0 4px rgb(var(--rgb-white) / 0.3);
--focus-offset: 3px;

/* Enhanced focus for glass elements (better contrast) */
--focus-ring-on-glass: 2px solid var(--bark);
--focus-ring-on-glass-shadow: 0 0 0 5px rgb(var(--rgb-eggshell) / 0.9);
```

**Added Breakpoint Reference Tokens:**

```css
/* Document in components; tokens for reference only */
--bp-mobile: 680px;
--bp-tablet: 900px;
--bp-desktop: 1200px;
--bp-wide: 1440px;

/* Touch targets (WCAG 2.5.5 - minimum 44x44px) */
--touch-target-min: 44px;
```

**Fixed Dark Mode Contrast:**

```css
/* BEFORE (too transparent, failed WCAG AA) */
--glass-marketing-gradient: linear-gradient(
  168deg,
  rgb(var(--rgb-glass-scrim-a) / 0.82) 0%,
  rgb(var(--rgb-glass-scrim-b) / 0.88) 42%,
  rgb(var(--rgb-glass-scrim-c) / 0.84) 100%
);

/* AFTER (increased opacity for better contrast) */
--glass-marketing-gradient: linear-gradient(
  168deg,
  rgb(var(--rgb-glass-scrim-a) / 0.9) 0%,
  rgb(var(--rgb-glass-scrim-b) / 0.94) 42%,
  rgb(var(--rgb-glass-scrim-c) / 0.92) 100%
);
```

### 1.2 Glass Component System (`site-marketing-base.css`)

**Base Glass with Performance Optimizations:**

```css
.glass {
  border-radius: var(--radius);
  background: var(--glass-marketing-gradient);
  border: var(--glass-marketing-border);
  box-shadow: var(--glass-marketing-shadow);
  backdrop-filter: var(--glass-marketing-filter);
  -webkit-backdrop-filter: var(--glass-marketing-filter);
  /* Performance: isolate paint and layout for better repaints */
  contain: paint layout;
}
```

**Interactive Glass Modifier:**

```css
.glass--interactive {
  transition: var(--glass-transition-all);
  cursor: pointer;
  will-change: transform, box-shadow;
}

.glass--interactive:hover {
  box-shadow: var(--glass-marketing-shadow-hover);
  transform: translateY(-2px);
}

.glass--interactive:focus-visible {
  outline: var(--focus-ring-on-glass);
  outline-offset: var(--focus-offset);
  box-shadow: var(--glass-marketing-shadow-focus);
  transform: translateY(-2px);
  will-change: auto; /* Remove hint after animation starts */
}

.glass--interactive:active {
  transform: translateY(0);
  box-shadow: var(--glass-marketing-shadow-active);
  transition-duration: 0.1s; /* Faster response on click */
}

.glass--interactive:disabled,
.glass--interactive[aria-disabled="true"] {
  opacity: var(--glass-marketing-disabled-opacity);
  cursor: not-allowed;
  transform: none;
  pointer-events: none;
}
```

**Stacked Glass Modifier:**

```css
.glass--stacked {
  box-shadow: var(--glass-marketing-shadow-stacked);
}
```

**Nested Glass Prevention:**

```css
/* Prevent double-blurring (performance + visual fix) */
.glass .glass {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: var(--glass-marketing-bg-solid);
  border: var(--border-strong);
}
```

**Loading State:**

```css
.glass--loading {
  background: var(--glass-marketing-skeleton-gradient);
  background-size: 200% 100%;
  animation: glass-skeleton-shimmer 1.5s infinite;
  pointer-events: none;
}

@keyframes glass-skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Mobile Performance Optimization:**

```css
@media (max-width: 680px) {
  .glass {
    backdrop-filter: var(--glass-marketing-filter-mobile);
    -webkit-backdrop-filter: var(--glass-marketing-filter-mobile);
  }
}
```

---

## 2. Why It Was Done This Way

### 2.1 Design System Philosophy

**Token-First Approach:**
- All visual properties live in `alkyme-tokens.css` as CSS custom properties
- Components reference tokens, never hard-code values
- Enables global theming (light/dark mode) from one source
- Makes future changes cascade automatically

**Why This Matters:**
```css
/* BAD: Hard-coded values */
.glass-card {
  box-shadow: 0 8px 32px rgba(4, 13, 18, 0.07);
  background: rgba(255, 249, 240, 0.78);
}

/* GOOD: Token-based */
.glass-card {
  box-shadow: var(--glass-marketing-shadow);
  background: var(--glass-marketing-gradient);
}
```

If we need to adjust the glass effect globally, we change one token instead of hunting through 50+ files.

### 2.2 Performance Decisions

**CSS Containment (`contain: paint layout`):**
- Tells the browser this element's internals don't affect outside layout
- Browser can optimize repaints for just this element
- Especially important for backdrop-filter (GPU-intensive)

**Mobile Blur Reduction:**
- Full-strength blur (`blur(20px)`) causes jank on older mobile devices
- Reduced to `blur(12px)` on screens <680px
- Users don't notice the difference; scroll performance improves dramatically

**Will-Change Strategy:**
```css
.glass--interactive {
  will-change: transform, box-shadow; /* Set on base state */
}

.glass--interactive:focus-visible {
  will-change: auto; /* Remove after interaction starts */
}
```

**Why:**
- `will-change` tells browser to optimize for these properties
- But keeping it active too long wastes memory
- We apply on hover/focus potential, remove after interaction

**Nested Glass Prevention:**
```css
.glass .glass {
  backdrop-filter: none; /* Don't blur already-blurred content */
}
```

**Why:**
- Stacking backdrop-filters multiplies GPU cost
- Visual result is messy (double blur looks wrong)
- Fallback to solid background for nested elements

### 2.3 Accessibility Decisions

**Enhanced Focus Rings on Glass:**

```css
/* Regular focus */
--focus-ring: 2px solid var(--forest);

/* Glass focus (higher contrast) */
--focus-ring-on-glass: 2px solid var(--bark);
--focus-ring-on-glass-shadow: 0 0 0 5px rgb(var(--rgb-eggshell) / 0.9);
```

**Why:**
- Glass backgrounds are complex (gradients, transparency)
- Standard green ring can blend into glass tones
- Dark ring + light shadow halo ensures visibility
- Meets WCAG 2.1 Success Criterion 2.4.7 (Focus Visible)

**Touch Target Sizing:**

```css
--touch-target-min: 44px;
```

**Why:**
- WCAG 2.5.5 requires minimum 44x44px touch targets
- Prevents "fat finger" errors on mobile
- Apply to all interactive elements (buttons, dots, close icons)

**Dark Mode Contrast Increase:**

```css
/* Increased from 0.82/0.88/0.84 to 0.9/0.94/0.92 */
```

**Why:**
- Original dark glass failed WCAG AA contrast ratio (4.5:1 for normal text)
- Increasing opacity makes background more opaque
- Text on glass now passes automated contrast checks
- Still maintains liquid glass aesthetic

### 2.4 Mobile-First Responsive Strategy

**Why Breakpoint Tokens:**

```css
--bp-mobile: 680px;
--bp-tablet: 900px;
--bp-desktop: 1200px;
```

**Purpose:**
- Standardizes breakpoints across all CSS files
- Previously inconsistent (some used 720px, 768px, 900px)
- Now documented in one place
- Components can reference for consistency

**Why These Values:**
- 680px: Accommodates large phones in landscape
- 900px: iPad Mini and similar tablets
- 1200px: Standard laptop minimum

**Mobile Glass Padding:**

```css
/* On very small screens, reduce blur and increase padding */
@media (max-width: 400px) {
  .glass {
    padding: clamp(0.875rem, 4vw, 1.25rem);
    backdrop-filter: var(--glass-marketing-filter-mobile);
  }
}
```

**Why:**
- Blur effect "eats" visual space
- On small screens (<400px), content feels cramped
- Increased padding gives breathing room
- Lighter blur improves legibility

---

## 3. How to Apply These Patterns

### 3.1 When to Use Glass Modifiers

**Use `.glass` alone for:**
- Static content cards
- Read-only information panels
- Decorative containers

**Use `.glass.glass--interactive` for:**
- Clickable cards
- Buttons with glass background
- Link containers
- Any element with hover/focus/active states

**Example:**
```html
<!-- Static card -->
<div class="glass">
  <h3>About Our Process</h3>
  <p>We build ventures in-house...</p>
</div>

<!-- Interactive card -->
<a href="/venture" class="glass glass--interactive">
  <h3>ChronoCore</h3>
  <p>Web-native RTS engine</p>
</a>
```

**Use `.glass.glass--stacked` for:**
- Glass cards layered under imagery
- About page pillar cards
- Any glass element with photo/video above it

**Example:**
```html
<div class="pillar-card">
  <img src="analytics.jpg" alt="Dashboard">
  <div class="glass glass--stacked pillar-card__body">
    <h3>Evidence over theater</h3>
    <p>Roadmaps follow market feedback</p>
  </div>
</div>
```

**Use `.glass.glass--loading` for:**
- Async content placeholders
- Form submission states
- Data fetching indicators

**Example:**
```html
<div class="glass glass--loading" aria-live="polite" aria-busy="true">
  <span class="sr-only">Loading content...</span>
</div>

<!-- JavaScript toggles this class -->
<script>
element.classList.add('glass--loading');
// ... fetch data ...
element.classList.remove('glass--loading');
</script>
```

### 3.2 How to Add New Glass Variants

**Step 1: Define tokens in `alkyme-tokens.css`:**

```css
/* Example: glass with stronger border for emphasis */
--glass-marketing-border-emphasis: 1px solid rgb(var(--rgb-forest) / 0.35);
--glass-marketing-shadow-emphasis: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.98),
                                    0 12px 48px rgb(var(--rgb-bark) / 0.15);
```

**Step 2: Create modifier in `site-marketing-base.css`:**

```css
.glass--emphasis {
  border: var(--glass-marketing-border-emphasis);
  box-shadow: var(--glass-marketing-shadow-emphasis);
}
```

**Step 3: Document usage in `docs/style-guide.md`:**

```markdown
### Glass Emphasis Variant

Use `.glass.glass--emphasis` for:
- Featured cards that need to stand out
- Primary CTAs with glass background
- Important announcements

Example:
<div class="glass glass--emphasis glass--interactive">
  <h3>New Launch: ChronoCore</h3>
</div>
```

**Step 4: Add dark mode tokens if needed:**

```css
html[data-theme="dark"] {
  --glass-marketing-border-emphasis: 1px solid rgb(var(--rgb-dew) / 0.4);
  --glass-marketing-shadow-emphasis: inset 0 1px 0 rgb(var(--rgb-dew) / 0.22),
                                      0 16px 56px rgb(var(--rgb-black) / 0.5);
}
```

### 3.3 How to Test Glass Implementations

**Visual Regression Checklist:**

```bash
# 1. Test light mode on white background
# Visit page, screenshot .glass elements

# 2. Toggle dark mode (footer button or localStorage)
# Screenshot same elements, compare contrast

# 3. Test on actual glass-appropriate backgrounds
# Glass should have content behind it (images, video, gradients)

# 4. Test all states
# - Default (static)
# - Hover (if interactive)
# - Focus (tab navigation)
# - Active (click/tap)
# - Disabled (if applicable)
# - Loading (if applicable)

# 5. Test responsive behavior
# Resize viewport: 375px, 680px, 900px, 1200px, 1440px
# Verify blur strength, padding, layout
```

**Accessibility Testing:**

```bash
# 1. Contrast Ratio
# Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
# Test text colors on glass backgrounds
# Target: 4.5:1 for normal text, 3:1 for large (18px+)

# 2. Keyboard Navigation
# Tab through all interactive glass elements
# Verify focus ring is visible
# Ensure Enter/Space activates links/buttons

# 3. Screen Reader
# Test with VoiceOver (Mac) or NVDA (Windows)
# Verify glass content is announced correctly
# Check aria-labels on interactive elements

# 4. Reduced Motion
# Enable in browser settings
# Verify animations respect prefers-reduced-motion
# Glass shimmer/transitions should pause

# 5. Reduced Transparency
# Enable in browser settings
# Verify glass falls back to solid backgrounds
# No blur, but maintains layout
```

**Performance Testing:**

```bash
# 1. Chrome DevTools Performance
# Record timeline while scrolling page with glass
# Look for:
#   - Paint times <16ms (60 FPS)
#   - No layout thrashing
#   - Minimal composite layers

# 2. Mobile Device Testing
# Test on actual devices (not just emulators):
#   - iPhone SE (low-end iOS)
#   - Mid-range Android (Samsung A series)
# Check for:
#   - Smooth scrolling
#   - No jank during glass hover/focus
#   - Blur doesn't cause lag

# 3. Lighthouse Audit
# Run Lighthouse in Chrome DevTools
# Target scores:
#   - Performance: 90+
#   - Accessibility: 95+
#   - Best Practices: 95+
```

---

## 4. Common Mistakes to Avoid

### 4.1 Don't Hard-Code Glass Properties

**❌ BAD:**
```css
.my-custom-card {
  background: rgba(255, 249, 240, 0.78);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(4, 13, 18, 0.07);
}
```

**✅ GOOD:**
```css
.my-custom-card {
  /* Extend base glass class */
}
```

```html
<div class="glass my-custom-card">
  <!-- Automatically gets all glass properties -->
</div>
```

**Why:**
- Hard-coded values break when design system updates
- Dark mode won't work (no token remapping)
- Increases maintenance burden

### 4.2 Don't Nest Backdrop-Filters

**❌ BAD:**
```html
<div class="glass">
  <div class="glass">
    <p>Nested glass</p>
  </div>
</div>
```

**Result:** Double blur (slow, ugly)

**✅ GOOD:**
```html
<div class="glass">
  <div class="glass-inner">
    <p>Nested content</p>
  </div>
</div>
```

```css
/* Already handled by base system */
.glass .glass {
  backdrop-filter: none; /* Prevents double blur */
  background: var(--glass-marketing-bg-solid);
}
```

### 4.3 Don't Forget will-change Cleanup

**❌ BAD:**
```css
.glass-card {
  will-change: transform, opacity, box-shadow, background;
  /* Never removed */
}
```

**Result:** Memory leak, browser reserves resources indefinitely

**✅ GOOD:**
```css
.glass-card {
  transition: transform 0.25s;
}

.glass-card:hover {
  will-change: transform; /* Add only when needed */
  transform: translateY(-2px);
}

.glass-card:not(:hover) {
  will-change: auto; /* Remove after animation */
}
```

### 4.4 Don't Use Glass on Inappropriate Backgrounds

**❌ BAD:**
```html
<!-- Glass on plain white, nothing behind it -->
<div style="background: white;">
  <div class="glass">
    <p>This looks pointless</p>
  </div>
</div>
```

**Result:** Glass effect is invisible (backdrop-filter needs content behind it)

**✅ GOOD:**
```html
<!-- Glass over imagery -->
<div style="background: url(photo.jpg);">
  <div class="glass">
    <p>Text is readable, blur is visible</p>
  </div>
</div>

<!-- Or glass on brand gradient -->
<div style="background: var(--gradient-bark-forest);">
  <div class="glass">
    <p>Glass effect enhances readability</p>
  </div>
</div>
```

### 4.5 Don't Ignore Mobile Performance

**❌ BAD:**
```css
/* Same heavy blur on all devices */
.glass {
  backdrop-filter: blur(24px) saturate(180%);
}
```

**Result:** Jank on older mobile devices

**✅ GOOD:**
```css
.glass {
  backdrop-filter: var(--glass-marketing-filter); /* 20px on desktop */
}

@media (max-width: 680px) {
  .glass {
    backdrop-filter: var(--glass-marketing-filter-mobile); /* 12px on mobile */
  }
}
```

### 4.6 Don't Skip Reduced-Motion Fallbacks

**❌ BAD:**
```css
.glass--loading {
  animation: shimmer 1.5s infinite;
  /* No prefers-reduced-motion check */
}
```

**Result:** Fails WCAG 2.3.3 (Animation from Interactions), causes discomfort for users with vestibular disorders

**✅ GOOD:**
```css
.glass--loading {
  animation: shimmer 1.5s infinite;
}

@media (prefers-reduced-motion: reduce) {
  .glass--loading {
    animation: none; /* Respect user preference */
    background-position: 0 0;
  }
}
```

---

## 5. Testing & Validation

### 5.1 Automated Tests You Can Run

**Contrast Ratio (Command Line):**

```bash
# Install pa11y-ci for automated accessibility testing
npm install -g pa11y-ci

# Create .pa11yci config
cat > .pa11yci << 'EOF'
{
  "defaults": {
    "standard": "WCAG2AA",
    "runners": ["axe"],
    "chromeLaunchConfig": {
      "args": ["--no-sandbox"]
    }
  },
  "urls": [
    "http://localhost:3000/",
    "http://localhost:3000/about.html",
    "http://localhost:3000/careers.html"
  ]
}
EOF

# Run tests
pa11y-ci
```

**Lighthouse CI:**

```bash
# Install lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://alkyme.io \
  --output=json \
  --output=html \
  --output-path=./lighthouse-report

# Check specific metrics
cat lighthouse-report.json | jq '.categories.accessibility.score'
# Target: 0.95 or higher (95/100)
```

**Visual Regression (Percy or similar):**

```bash
# Install Percy CLI
npm install --save-dev @percy/cli @percy/puppeteer

# Take snapshots
npx percy snapshot snapshots.yml
```

**`snapshots.yml` example:**
```yaml
static:
  - name: Home - Glass Cards
    url: http://localhost:3000/
    widths: [375, 768, 1280]
    selectors:
      - .glass
      - .glass--interactive
  - name: Dark Mode - Glass
    url: http://localhost:3000/?theme=dark
    widths: [375, 768, 1280]
```

### 5.2 Manual Test Checklist

**Before Committing Glass Changes:**

- [ ] Verify light mode glass on white background
- [ ] Verify light mode glass on eggshell background
- [ ] Toggle dark mode, verify glass adjusts
- [ ] Test glass over video (careers page)
- [ ] Test glass over images (about page)
- [ ] Tab through interactive glass, verify focus visible
- [ ] Hover interactive glass, verify lift animation
- [ ] Click interactive glass, verify active state
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Enable reduced motion, verify animations pause
- [ ] Enable reduced transparency, verify solid fallback
- [ ] Run Lighthouse, verify >90 performance, >95 accessibility
- [ ] Check Network tab, verify no layout thrashing
- [ ] Scroll page with glass, ensure 60 FPS

---

## 6. Future Enhancements

### 6.1 Potential Additions

**Glass Elevation System:**

```css
/* Multi-level stacking (like Material Design) */
--glass-elevation-1: var(--glass-marketing-shadow);
--glass-elevation-2: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.95),
                      0 16px 48px rgb(var(--rgb-bark) / 0.14);
--glass-elevation-3: inset 0 1px 0 rgb(var(--rgb-eggshell) / 0.95),
                      0 24px 64px rgb(var(--rgb-bark) / 0.18);
```

**Use Case:**
- Modals: elevation-3
- Dropdowns: elevation-2
- Cards: elevation-1

**Glass + Gradient Combinations:**

```css
--glass-marketing-gradient-branded: linear-gradient(
  145deg,
  rgb(var(--rgb-forest) / 0.08) 0%,
  rgb(var(--rgb-moss) / 0.12) 100%
),
var(--glass-marketing-gradient);
```

**Use Case:**
- Branded glass sections (subtle green tint)
- Feature callouts

**Glass Component Library:**

```css
/* Pre-built components */
.glass-card { /* ... */ }
.glass-modal { /* ... */ }
.glass-tooltip { /* ... */ }
.glass-dropdown { /* ... */ }
.glass-notification { /* ... */ }
```

### 6.2 Experimental Features to Try

**Variable Blur Based on Scroll:**

```javascript
// Increase blur as user scrolls (performance-permitting)
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const maxScroll = 500;
  const blurValue = Math.min(20, 5 + (scrolled / maxScroll) * 15);
  document.documentElement.style.setProperty(
    '--glass-dynamic-blur',
    `blur(${blurValue}px)`
  );
});
```

**Colored Glass Tints:**

```css
/* Accent-colored glass for status indicators */
.glass--success {
  background: linear-gradient(
    145deg,
    rgb(34 197 94 / 0.1) 0%,
    rgb(34 197 94 / 0.05) 100%
  ),
  var(--glass-marketing-gradient);
}

.glass--warning {
  background: linear-gradient(
    145deg,
    rgb(var(--rgb-status-experiment) / 0.12) 0%,
    rgb(var(--rgb-status-experiment) / 0.06) 100%
  ),
  var(--glass-marketing-gradient);
}
```

---

## 7. Quick Reference

### 7.1 Glass Class Combinations

```html
<!-- Static glass card -->
<div class="glass">...</div>

<!-- Interactive glass button -->
<button class="glass glass--interactive">...</button>

<!-- Stacked glass under image -->
<div class="glass glass--stacked">...</div>

<!-- Loading state -->
<div class="glass glass--loading" aria-busy="true">...</div>

<!-- Interactive + stacked -->
<a href="#" class="glass glass--interactive glass--stacked">...</a>
```

### 7.2 Common Token Patterns

```css
/* Using glass shadows */
box-shadow: var(--glass-marketing-shadow); /* Default */
box-shadow: var(--glass-marketing-shadow-hover); /* On hover */
box-shadow: var(--glass-marketing-shadow-focus); /* On focus */
box-shadow: var(--glass-marketing-shadow-active); /* On click */
box-shadow: var(--glass-marketing-shadow-stacked); /* Under imagery */

/* Using glass transitions */
transition: var(--glass-transition-all); /* Transform + shadow */
transition: var(--glass-transition-shadow); /* Shadow only */
transition: var(--glass-transition-blur); /* Backdrop-filter only */

/* Using focus rings on glass */
outline: var(--focus-ring-on-glass);
box-shadow: var(--focus-ring-on-glass-shadow);
```

### 7.3 Breakpoint Media Queries

```css
/* Mobile */
@media (max-width: 680px) {
  /* Styles for phones */
}

/* Tablet and up */
@media (min-width: 900px) {
  /* Styles for tablets */
}

/* Desktop and up */
@media (min-width: 1200px) {
  /* Styles for laptops/desktops */
}

/* Wide screens */
@media (min-width: 1440px) {
  /* Styles for large monitors */
}
```

### 7.4 Accessibility Patterns

```html
<!-- Interactive glass with proper semantics -->
<button class="glass glass--interactive" type="button" aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Loading glass with status -->
<div class="glass glass--loading" role="status" aria-live="polite" aria-busy="true">
  <span class="sr-only">Loading venture details...</span>
</div>

<!-- Disabled glass -->
<button class="glass glass--interactive" disabled aria-disabled="true">
  Submit
</button>
```

### 7.5 Performance Patterns

```css
/* Optimize animating glass */
.glass-card {
  /* Only hint at properties that will animate */
  will-change: transform;
}

.glass-card:hover {
  transform: translateY(-2px);
}

.glass-card:not(:hover) {
  will-change: auto; /* Remove hint when not animating */
}

/* Isolate paint */
.glass {
  contain: paint layout;
}

/* Reduce mobile blur */
@media (max-width: 680px) {
  .glass {
    backdrop-filter: var(--glass-marketing-filter-mobile);
  }
}
```

---

## Summary for Cursor AI

**When working with the Alkyme liquid glass system:**

1. **Always use tokens** - Never hard-code glass properties
2. **Use modifiers** - `.glass--interactive`, `.glass--stacked`, `.glass--loading`
3. **Test accessibility** - Contrast, keyboard nav, screen readers
4. **Optimize for mobile** - Lighter blur, responsive padding
5. **Respect user preferences** - Reduced motion, reduced transparency
6. **Document changes** - Update style-guide.md when adding variants
7. **Test visually** - Light/dark mode, multiple breakpoints

**Files to modify when working with glass:**
- **Tokens:** `assets/alkyme-tokens.css`
- **Base styles:** `assets/site-marketing-base.css`
- **Documentation:** `docs/style-guide.md`
- **Component-specific:** `assets/site-about.css`, `assets/site-careers.css`, etc.

**Never modify:**
- Don't touch `alkyme.css` (legacy Webflow bundle)
- Don't create new glass token files (consolidate in alkyme-tokens.css)

**Questions to ask before implementing:**
1. Does this need to be a token or component-specific?
2. Will this work in dark mode?
3. Will this work on mobile?
4. Is this accessible (contrast, focus, keyboard)?
5. Will this perform well (backdrop-filter cost)?

---

**Document Version:** 1.0
**Last Updated:** April 2026
**Maintained By:** Alkyme Design System Team
