# Warm Minimalist Solarpunk - QA & Polish Checklist

**Date:** 2026-04-27
**Status:** In Progress
**Scope:** Cross-page consistency, dark mode validation, performance optimization

---

## 1. Design Token Consistency

### ✅ Warm Palette Applied Across All Pages

**Terracotta (#B8705A):**
- [x] Home: Primary CTAs, process bullets, card borders
- [x] About: Phase card numbers, list bullets
- [x] Careers: Card numbers gradient, labels, hero borders
- [x] Contact: Method icons, hover states

**Amber (#D4A574):**
- [x] Home: Product showcase badges, hover shadows
- [x] About: Phase card hover states
- [x] Careers: Card number gradients (terracotta→amber)
- [x] Contact: Info card borders, dark mode icons

**Sage (#A8C686):**
- [x] Home: Value prop card (glass--warm-sage)
- [x] About: Philosophy cards
- [x] Contact: FAQ item borders

**Gold (#F4C95D):**
- [x] Dark mode: Enhanced hover states
- [x] Stats section dark mode highlights

**Wheat (#E8D5B5):**
- [x] Dark mode: Title colors, soft neutrals

---

## 2. Button Consistency

### Primary Actions (Terracotta)
- [x] Home hero: "View Active Ventures"
- [x] Home systematic section: "See Our Process"
- [x] Home product showcases: Both "View Case Study" buttons
- [x] Home CTA section: "View Active Ventures"

### Secondary Actions
- [x] Home hero: "How We Build" (eggshell-sky with borders)
- [x] Value prop cards: Maintain design system defaults
- [ ] **TODO:** Audit all secondary buttons across About/Careers/Contact

---

## 3. Glass Effects & Backdrop Filters

### Warm Glass Components Applied
- [x] Home: `.glass--warm-amber` (infrastructure card)
- [x] Home: `.glass--warm-sage` (operators card)
- [x] Home: `.glass--warm-terracotta` (portfolio card)

### Card Backgrounds (Warm Glass Pattern)
- [x] Home: Process accordion items
- [x] Home: Value prop cards
- [x] About: Phase cards
- [x] About: Philosophy cards
- [x] About: Focus cards
- [x] Contact: Contact info sidebar
- [x] Contact: FAQ items

**Consistent Pattern:**
```css
background: rgba(var(--rgb-white), 0.6);
backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(16px) saturate(180%);
```

---

## 4. Dark Mode Validation

### Color Swaps (Light → Dark)
- [x] Terracotta → Amber (process bullets, icons)
- [x] Borders: Terracotta/Forest → Wheat/Gold
- [x] Shadows: Amber → Gold
- [x] Numbers: Terracotta → Amber
- [x] Stat highlights: Eggshell-sky → Wheat

### Dark Mode Backgrounds
- [x] All cards: `rgba(var(--rgb-white), 0.03)`
- [x] Hover states: `rgba(var(--rgb-white), 0.05)`

### Shadow Validation
- [x] Home process accordion: Gold shadow (0.12 opacity)
- [x] About phase cards: Gold shadow (0.12 opacity)
- [x] Contact info: Gold shadow (0.12 opacity)
- [x] Contact FAQ: Sage shadow (0.1 opacity)

---

## 5. Typography Hierarchy

### Font Weights Applied
- [x] Hero titles: `var(--type-weight-light)` (300)
- [x] Stat numbers: `var(--type-weight-black)` (900)
- [x] Card numbers: `var(--type-weight-black)` (900)
- [x] Process numbers: `var(--type-weight-light)` (300)
- [x] Checkmarks/bullets: `var(--type-weight-black)` (900)

### Consistent Patterns
- Display numbers (01, 02, 03): Light (300) + low opacity
- Stats/metrics: Black (900) + high contrast
- Bullets/icons: Black (900) + accent color

---

## 6. Hover States & Micro-interactions

### Transform Consistency
- [x] Cards: `translateY(-2px)` on hover
- [x] Process accordion: `translateY(-2px)` on hover
- [x] Contact method icons: `scale(1.05)` on hover

### Shadow Progression
- [x] Default: No shadow or subtle shadow
- [x] Hover: `0 8px 24px rgba(warm-color / 0.12-0.15)`
- [x] Cards: `0 12px 32px rgba(warm-color / 0.15)` for emphasis

### Transition Timing
- [x] All transitions: `var(--duration-medium)` + `var(--ease-soft)`
- [x] Icon transforms: `var(--duration-medium)`

---

## 7. Border Consistency

### Light Mode
- Default borders: `rgba(var(--rgb-terracotta), 0.10-0.15)`
- Hover borders: `rgba(var(--rgb-amber), 0.25-0.30)`
- Dividers: `rgba(var(--rgb-terracotta), 0.12-0.15)`

### Dark Mode
- Default borders: `rgba(var(--rgb-wheat), 0.10-0.12)`
- Hover borders: `rgba(var(--rgb-gold), 0.20-0.25)`
- Dividers: `rgba(var(--rgb-wheat), 0.10)`

---

## 8. Atmospheric Gradients

### Home Page Only
- [x] Hero: `.section--atmosphere-warm` (radial amber glow)
- [x] Value prop: `.section--atmosphere-sunrise` (gold-to-terracotta linear)
- [x] Product showcase 1: `.section--atmosphere-earth` (wheat fade)
- [x] CTA section: `.section--atmosphere-warm` (amber glow)

### Other Pages
- About/Careers/Contact: Clean backgrounds, no atmospheric gradients
- **Rationale:** Home page is the warm showcase prototype

---

## 9. Badge System

### Product Showcase Badges
- [x] Epoch²: `.badge--amber` (Gaming)
- [x] Sevā AI: `.badge--sage` (Healthcare AI)

### Badge Consistency
- [ ] **TODO:** Check if badges exist in components.css
- [ ] **TODO:** Validate badge colors match Solarpunk palette

---

## 10. Performance Checks

### CSS Build
- [x] PostCSS compilation successful
- [x] No console errors
- [x] All imports resolved

### Asset Loading
- [x] home-product-showcase.css loaded correctly
- [ ] **TODO:** Validate no unused CSS classes
- [ ] **TODO:** Check minified CSS file size

### Animation Performance
- [x] Backdrop filters limited to hover states where possible
- [x] Transforms use GPU acceleration (translateY, scale)
- [ ] **TODO:** Test on lower-end devices

---

## 11. Cross-Page Visual Consistency

### Navigation
- [ ] **TODO:** Verify nav behavior consistent across all pages
- [ ] **TODO:** Check nav scroll states (home has special transparent treatment)

### Footer
- [ ] **TODO:** Ensure footer matches across all pages
- [ ] **TODO:** Verify footer link colors align with warm palette

### Stats Sections
- [x] Home: Dark background with eggshell-sky numbers
- [x] About: Integrated in hero with warm borders
- [ ] **TODO:** Careers page stats validation

---

## 12. Accessibility (WCAG 2.1 AA)

### Color Contrast
- [ ] **TODO:** Validate terracotta text on light backgrounds (4.5:1 minimum)
- [ ] **TODO:** Validate amber text in dark mode (4.5:1 minimum)
- [ ] **TODO:** Check all interactive elements meet contrast requirements

### Focus States
- [ ] **TODO:** Verify all buttons have visible focus indicators
- [ ] **TODO:** Check form inputs have proper focus styles
- [ ] **TODO:** Validate focus color uses Solarpunk palette

### Keyboard Navigation
- [ ] **TODO:** Tab through all interactive elements
- [ ] **TODO:** Verify process accordion keyboard accessible
- [ ] **TODO:** Test product showcase keyboard navigation

---

## 13. Responsive Breakpoints

### Mobile (< 640px)
- [ ] **TODO:** Product showcase stacks correctly
- [ ] **TODO:** Hero maintains readability
- [ ] **TODO:** Stats grid responds properly

### Tablet (640px - 900px)
- [ ] **TODO:** Phase cards stack on About page
- [ ] **TODO:** Contact layout switches to single column
- [ ] **TODO:** Process accordion maintains usability

### Desktop (> 900px)
- [x] Asymmetric product showcase grid (1.2fr / 1fr)
- [x] Stats grid displays 4 columns
- [x] Process accordion shows side-by-side layout

---

## 14. Browser Compatibility

### Backdrop Filters
- [x] `-webkit-backdrop-filter` prefix included
- [ ] **TODO:** Test in Safari
- [ ] **TODO:** Test in Firefox
- [ ] **TODO:** Provide fallback for unsupported browsers

### CSS Custom Properties
- [x] All colors use CSS variables
- [ ] **TODO:** IE11 fallback (if required)

---

## 15. Content Updates

### Branding
- [x] "Healthcare AI" → "Sevā<sup>AI</sup>" (completed)
- [ ] **TODO:** Verify Sevā AI branding consistent across all pages

### Placeholder Images
- [ ] **TODO:** Identify sections needing `elementor-placeholder-image`
- [ ] **TODO:** Add placeholders for future product imagery

---

## Final Validation

### Build Process
- [x] npm run build:css completes without errors
- [ ] **TODO:** npm run dev (watch mode) works correctly
- [ ] **TODO:** Verify dist/assets/styles.min.css updates

### File Organization
- [x] All CSS in /assets/css/
- [x] All JS in /assets/js/
- [x] Documentation in /docs/
- [x] Archives in /archive/

### Documentation
- [x] HOME-PAGE-SOLARPUNK-TRANSFORMATION.md created
- [ ] **TODO:** Update main README with Solarpunk aesthetic guidance
- [ ] **TODO:** Create COMPONENTS-SOLARPUNK-GUIDE.md for future development

---

## Priority Issues to Fix

1. **HIGH:** Validate badge components exist in components.css
2. **HIGH:** Test accessibility color contrast ratios
3. **MEDIUM:** Complete responsive testing across all breakpoints
4. **MEDIUM:** Verify dark mode across all pages
5. **LOW:** Create fallback for backdrop-filter
6. **LOW:** Optimize CSS file size

---

## Success Metrics

- ✅ 5 new Solarpunk colors integrated across 4 pages
- ✅ 34 component classes created
- ✅ 6 major page sections transformed on home page
- ✅ Full dark mode support
- ⏳ 0 accessibility violations (pending validation)
- ⏳ <100KB minified CSS (pending measurement)
- ⏳ 60fps animations (pending device testing)
