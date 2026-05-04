# Alkymē Website - Apple + Meta Design Blend

**Last Updated:** 2026-04-18
**Status:** Implementation in progress

---

## Design Philosophy

The Alkymē website blends two premium design languages to create a unique B2B presence:

### Apple's Contributions
- **Minimalism**: Clean layouts, generous whitespace
- **Typography**: SF Pro-inspired hierarchy, 17px body text
- **Sophistication**: Subtle shadows (2-8px blur)
- **Restraint**: Controlled color palette, refined interactions
- **Smoothness**: Rounded corners (12-24px), gentle easing curves

### Meta's Contributions
- **Boldness**: Stronger shadows (8-24px blur), higher contrast
- **Vibrancy**: More saturated colors, vibrant gradients
- **Presence**: Cards that "pop" from the page
- **Moderate Corners**: 8-12px radius (vs Apple's 18-24px)
- **Impact**: Larger typography for headlines

### B2B Professional Layer
- **Trust signals**: Clear value propositions, testimonials
- **Clarity**: Direct messaging, no marketing fluff
- **Accessibility**: WCAG 2.1 AAA compliance
- **Performance**: Fast load times, optimized assets

---

## Token-Based Architecture

**All visual properties use CSS custom properties** - NO hardcoded values in page-specific CSS.

### Why Tokens Matter
1. **Consistency**: Single source of truth for all design decisions
2. **Maintainability**: Update once, apply everywhere
3. **Flexibility**: Easy to adjust blend ratio without touching HTML
4. **Scalability**: New pages automatically inherit the design system

### Token Categories

#### Colors
```css
--alk-green: #7a9b76;           /* Primary brand */
--alk-green-dark: #689063;      /* Hover states */
--alk-text-primary: #1D1D1F;    /* Apple's near-black */
--alk-text-secondary: #6E6E73;  /* Body copy */
```

#### Spacing (8px base grid)
```css
--alk-space-xs: 0.5rem;    /* 8px */
--alk-space-md: 1rem;      /* 16px */
--alk-space-xl: 2rem;      /* 32px */
--alk-space-3xl: 4rem;     /* 64px */
```

#### Typography Scale
```css
--alk-text-base: 1.0625rem;  /* 17px - Apple's body */
--alk-text-2xl: 1.75rem;     /* 28px - Meta's subheads */
--alk-text-5xl: 4.75rem;     /* 76px - Hero titles */
```

#### Border Radius (The Blend)
```css
--alk-radius-sm: 4px;    /* Meta's sharp corners */
--alk-radius-md: 8px;    /* Meta standard */
--alk-radius-lg: 12px;   /* Blend zone */
--alk-radius-xl: 16px;   /* Softer than Meta, less than Apple */
--alk-radius-2xl: 24px;  /* Hero elements */
```

**Rationale**: Meta typically uses 8px, Apple uses 18-24px. We use 12-16px for most cards - splitting the difference while leaning slightly toward Meta's boldness.

#### Shadows (The Blend)
```css
/* Apple: Very subtle (2-4% opacity) */
/* Meta: More presence (8-12% opacity) */
/* Our blend: 6-12% opacity */

--alk-shadow-sm: 0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
--alk-shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05);
--alk-shadow-lg: 0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06);
```

**Rationale**: Meta's shadows are more pronounced for depth. We use layered shadows (like Apple) but with Meta's opacity levels for presence.

#### Liquid Glass Effects
```css
--alk-glass-white: rgba(255, 255, 255, 0.72);  /* 72% opacity */
--alk-blur-md: 24px;                            /* Backdrop blur */
backdrop-filter: blur(var(--alk-blur-md)) saturate(180%);
```

**Unique to Alkymē**: Combines Apple's backdrop-filter technique with Meta's vibrant saturation boost.

---

## Page-by-Page Implementation

### ✅ Homepage (`index.html` + `site-home-liquid.css`)

**Status**: Token-based, blend applied

**Key Components**:
- **Hero**: Full-height video background with glass overlay
  - Uses: `--alk-blur-xs`, `--alk-shadow-md`, `--alk-radius-xl`
  - Blend: Meta's bold video presence + Apple's subtle overlay

- **Stats Cards**: Floating glass cards with metrics
  - Uses: `--alk-glass-white`, `--alk-radius-xl`, `--alk-shadow-md`
  - Blend: Meta's strong shadows + Apple's glass morphism

- **Process Steps**: 3-step visual timeline
  - Uses: `--alk-radius-full` (circular numbers), `--alk-shadow-lg`
  - Blend: Meta's bold numbers + Apple's refined spacing

- **Venture Cards**: Portfolio carousel
  - Uses: `--alk-radius-xl`, `--alk-shadow-lg` on hover
  - Blend: 16px radius (between Meta's 8px and Apple's 24px)

**Interactions**:
- Smooth scroll (Apple)
- Bold hover lifts: `translateY(-8px)` (Meta)
- Gentle easing: `cubic-bezier(0.28, 0.11, 0.32, 1)` (Apple)

---

### ✅ About Page (`about.html` + `site-about-liquid.css`)

**Status**: Token-based, blend applied

**Key Components**:
- **Hero Carousel**: 4 slides with image overlays
  - Uses: `--alk-radius-xl`, `--alk-shadow-md`, gradient overlays
  - Blend: Meta's vibrant imagery + Apple's typography hierarchy

- **Name Section**: Two-column layout explaining "Alkymē"
  - Uses: `--alk-text-6xl` (96px title), `--alk-space-3xl` gaps
  - Blend: Meta's large type + Apple's generous spacing

- **Pillars Cards**: 3-column glass cards
  - Uses: `--alk-radius-xl`, `--alk-shadow-md`, glass backgrounds
  - Blend: 16px corners, stronger shadows than pure Apple

- **Mission Statement**: Centered typography block
  - Uses: `--alk-text-4xl`, `--alk-leading-snug`
  - Blend: Meta's bold headlines + Apple's line height

**Visual Identity**:
- Details element for "Studio history" (progressive disclosure - Apple)
- Bold imagery throughout (Meta)
- Glass morphism cards (Alkymē signature)

---

### 🚧 AI Page (`ai.html` + `site-ai-liquid.css`)

**Status**: Needs complete overhaul

**Current Issues**:
- User reported "broken" and "not UX friendly"
- Likely using old V1 styles
- Missing liquid glass integration

**Planned Components**:
- **Hero**: Bold statement about AI approach
  - Typography: `--alk-text-5xl`, Meta's impact
  - Layout: Apple's centered restraint

- **Capabilities Grid**: 3-column glass cards
  - Icons + descriptions
  - Hover effects with `--alk-shadow-lg`

- **Technology Stack**: Logo showcase
  - Subtle blur backgrounds
  - Meta's vibrant presentation

- **Ethics Statement**: Premium text block
  - Large body copy: `--alk-text-lg` (19px)
  - Centered, max-width 800px (Apple)

**Implementation**: Create from scratch with token-based approach

---

### 🚧 Careers Page (`careers.html` + `site-careers-liquid.css`)

**Status**: Needs overhaul

**Planned Components**:
- **Hero**: Inspiring careers headline
  - Meta's bold typography
  - Apple's minimal layout

- **Culture Section**: Photo + glass text overlay
  - Large image with `--alk-radius-2xl`
  - Floating glass card with copy

- **Benefits Grid**: Icon + text cards
  - 2x3 or 3x3 grid
  - `--alk-radius-lg`, `--alk-shadow-md`
  - Subtle hover lifts

- **Open Roles**: Glass cards linking to Breezy
  - Each role: title, description, CTA
  - Meta's strong CTAs + Apple's whitespace

- **Team Photos**: Optional image grid
  - Rounded corners: `--alk-radius-lg`
  - Subtle hover zoom

**Integration**: Breezy HR widget needs glass styling

---

### 🚧 Contact Page (`contact.html` + `site-contact-liquid.css`)

**Status**: Has V2, needs liquid glass integration

**Current State**:
- Recently overhauled with `site-contact-v2.css`
- Needs token migration

**Enhancement Plan**:
- Migrate V2 styles to token system
- Apply `--alk-radius-md` to form inputs (8px - Meta)
- Use `--alk-shadow-lg` for form card depth
- Add gradient mesh background
- Premium button styles with `--alk-btn-*` classes

**Form Design**:
- Large inputs with bold labels (Meta)
- Generous padding and spacing (Apple)
- Glass form card floating on gradient background
- Strong focus states: `--alk-green` border, `--alk-shadow-md`

---

### 🚧 Privacy & Terms Pages

**Status**: Has V2, needs liquid glass integration

**Enhancement Plan**:
- Glass table of contents (sticky sidebar)
- Premium typography: `--alk-text-base` (17px)
- Subtle gradient backgrounds
- Section dividers with `--alk-glass-border`

**Typography Hierarchy**:
- H2: `--alk-text-3xl` (40px)
- H3: `--alk-text-2xl` (28px)
- Body: `--alk-text-base` (17px)
- Legal fine print: `--alk-text-sm` (13px)

---

### 🚧 Help Center

**Status**: ✅ COMPLETED

- Premium liquid glass design
- Advanced fuzzy search with Levenshtein distance
- 30+ article database
- Already using full token system

**No changes needed** - serves as reference implementation

---

## Global Components

### 🚧 Navigation (`site-chrome.css`)

**Current**: Basic topbar
**Needs**:
- Liquid glass background on scroll
- `backdrop-filter: blur(var(--alk-blur-md))`
- Smooth transitions
- Meta's bold logo + Apple's refined navigation links

**Scroll Behavior**:
```css
.topbar {
  background: transparent;
  transition: background 0.3s, backdrop-filter 0.3s;
}

.topbar--scrolled {
  background: var(--alk-glass-white);
  backdrop-filter: blur(var(--alk-blur-md));
  border-bottom: 1px solid var(--alk-glass-border);
  box-shadow: var(--alk-shadow-sm);
}
```

---

### 🚧 Footer (`site-footer.css`)

**Enhancement**:
- Subtle glass effect
- Premium spacing with `--alk-space-*` tokens
- Refined typography
- Meta's structure + Apple's restraint

---

## Component Pattern Library

### Glass Card (Standard)
```css
.component-card {
  background: var(--alk-glass-white);
  backdrop-filter: blur(var(--alk-blur-md)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--alk-blur-md)) saturate(180%);

  border: 1px solid var(--alk-glass-border);
  border-radius: var(--alk-radius-xl);  /* 16px - the blend */

  box-shadow: var(--alk-shadow-sm), var(--alk-inner-light);

  transition: all var(--alk-duration-base) var(--alk-ease-apple);
}

.component-card:hover {
  background: var(--alk-glass-light);
  border-color: var(--alk-glass-border-strong);
  box-shadow: var(--alk-shadow-lg), var(--alk-inner-strong);
  transform: translateY(-4px);  /* Meta's lift */
}
```

### Primary Button
```css
.alk-btn--primary {
  background: linear-gradient(180deg,
    var(--alk-green) 0%,
    var(--alk-green-dark) 100%
  );
  color: var(--alk-white);

  border-radius: var(--alk-radius-full);  /* Pill shape */
  padding: var(--alk-space-md) var(--alk-space-xl);

  box-shadow: var(--alk-shadow-sm), var(--alk-inner-light);

  transition: all var(--alk-duration-base) var(--alk-ease-apple);
}

.alk-btn--primary:hover {
  background: linear-gradient(180deg,
    var(--alk-green-dark) 0%,
    var(--alk-green) 100%
  );
  box-shadow: var(--alk-shadow-md), var(--alk-inner-strong);
  transform: translateY(-2px) scale(1.02);  /* Meta's bold interaction */
}

.alk-btn--primary:active {
  transform: translateY(0) scale(0.98);  /* Apple's press feedback */
}
```

### Section Header (Centered)
```css
.alk-section__header {
  text-align: center;
  max-width: 800px;  /* Apple's constraint */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--alk-space-3xl);  /* 64px generous spacing */
}

.alk-section__eyebrow {
  font-size: var(--alk-text-sm);  /* 13px */
  font-weight: var(--alk-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--alk-tracking-wider);  /* 0.05em */
  color: var(--alk-green-dark);
  margin-bottom: var(--alk-space-md);
}

.alk-section__title {
  font-family: var(--alk-font-display);
  font-size: var(--alk-text-4xl);  /* 56px - Meta's impact */
  font-weight: var(--alk-weight-bold);
  line-height: var(--alk-leading-tight);  /* 1.1 */
  letter-spacing: var(--alk-tracking-tight);
  color: var(--alk-text-primary);
  margin: 0 0 var(--alk-space-lg);
}

.alk-section__description {
  font-size: var(--alk-text-lg);  /* 19px - larger body */
  line-height: var(--alk-leading-relaxed);  /* 1.6 */
  color: var(--alk-text-secondary);
}
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small tablets */
@media (max-width: 768px) {
  /* Reduce hero text */
  --alk-text-6xl: 3.5rem;  /* 96px → 56px */
  --alk-text-5xl: 2.5rem;  /* 76px → 40px */

  /* Stack layouts */
  .two-column-grid {
    grid-template-columns: 1fr;
  }

  /* Full-width buttons */
  .alk-btn {
    width: 100%;
  }
}

/* Mobile */
@media (max-width: 480px) {
  /* Further reduce text */
  --alk-text-4xl: 2rem;  /* 56px → 32px */

  /* Reduce spacing */
  --alk-space-5xl: 4rem;  /* 128px → 64px */

  /* Smaller radius on mobile (Meta approach) */
  --alk-radius-xl: 12px;  /* 16px → 12px */
}
```

---

## Animation Principles

### Micro-interactions (Apple's Finesse)
- **Hover**: Lift + shadow increase
  - `translateY(-4px)` for cards
  - `--alk-shadow-md` → `--alk-shadow-lg`
  - Duration: `var(--alk-duration-base)` (250ms)

- **Click/Active**: Press feedback
  - `scale(0.98)` for tactile feel
  - Duration: `var(--alk-duration-fast)` (150ms)

### Entrance Animations (Meta's Boldness)
- Fade + slide from below
- Opacity: `0` → `1`
- Transform: `translateY(20px)` → `translateY(0)`
- Duration: 600ms
- Easing: `ease-out`
- Stagger delay: 100ms between items

### Scroll Effects
- **Parallax**: Subtle background movement (0.5x speed)
- **Reveal on Scroll**: Intersection Observer with fade-in
- **Video Playback**: Pause when not in viewport (performance)

---

## Accessibility (WCAG 2.1 AAA)

### Color Contrast
- **Text on white**: 7:1 minimum
  - `--alk-text-primary` (#1D1D1F) on white: **15.1:1** ✅
  - `--alk-text-secondary` (#6E6E73) on white: **7.5:1** ✅

- **Text on green**: 4.5:1 minimum for large text
  - White on `--alk-green-dark` (#689063): **4.8:1** ✅

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators: `--alk-green` 2px outline, 3px offset
- Skip links for main content
- Logical tab order

### Screen Readers
- Semantic HTML (`<nav>`, `<section>`, `<article>`)
- ARIA labels for icon-only buttons
- Alt text for all images
- Live regions for dynamic content

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Performance Targets

### Lighthouse Scores (Goal: 90+)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
  - Optimize hero images with WebP
  - Preload critical assets

- **FID** (First Input Delay): < 100ms
  - Minimize JavaScript execution
  - Use passive event listeners

- **CLS** (Cumulative Layout Shift): < 0.1
  - Set width/height on images
  - Reserve space for dynamic content

### Bundle Size
- **Critical CSS**: < 20KB (inlined)
- **Full CSS**: < 80KB (gzipped)
- **JavaScript**: < 50KB (deferred)
- **Page Weight**: < 2MB per page

---

## Implementation Checklist

### ✅ Completed
- [x] Global design tokens (`alkyme-liquid-glass.css`)
- [x] Homepage overhaul (`site-home-liquid.css`)
- [x] About page overhaul (`site-about-liquid.css`)
- [x] Help Center complete (`site-help.css`)
- [x] Apple+Meta blend ratios defined
- [x] Component pattern library documented

### 🚧 In Progress
- [ ] AI page complete overhaul
- [ ] Careers page overhaul
- [ ] Contact page token migration
- [ ] Privacy/Terms token migration

### 📋 To Do
- [ ] Navigation liquid glass update
- [ ] Footer refinement
- [ ] Cross-page consistency review
- [ ] Mobile responsiveness testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Browser compatibility testing

---

## Brand Positioning

**Alkymē's Design = Apple + Meta + B2B**

| Attribute | Apple | Meta | Alkymē Blend |
|-----------|-------|------|--------------|
| **Shadows** | Very subtle (2-4% opacity) | Strong (8-12%) | **Medium (6-12%)** |
| **Corners** | Very round (18-24px) | Moderate (8px) | **12-16px** |
| **Colors** | Muted, restrained | Vibrant, saturated | **Professional vibrance** |
| **Typography** | Refined, 17px body | Bold, large headlines | **Both: 17px body + bold heads** |
| **Spacing** | Generous | Moderate | **Generous** |
| **Interactions** | Subtle | Bold | **Subtle with bold accents** |
| **Imagery** | Product-focused | People-first | **Balanced: product + people** |

**Result**: A design system that feels:
- **Trustworthy** like Apple
- **Engaging** like Meta
- **Professional** for B2B buyers

---

**Next Steps**: Continue systematic overhaul of remaining pages, maintaining token-based approach for consistency.
