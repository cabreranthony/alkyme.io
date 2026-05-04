# Alkymē Website Testing Guide

**Version:** 2.0
**Date:** 2026-04-14
**Status:** Ready for Testing

---

## 🚀 Quick Start Testing

### 1. Open Pages in Browser

```bash
# From the Website directory
open index.html          # New homepage
open ai.html            # New AI page
open docs/component-examples.html  # Component library examples
```

### 2. Visual Check (5 minutes)

**Homepage (index.html):**
- [ ] Hero video plays in background
- [ ] Stats show: "12+", "3", "100%"
- [ ] Three process steps visible with connecting lines
- [ ] Venture cards in carousel
- [ ] Principles accordion visible
- [ ] Footer shows all social links

**AI Page (ai.html):**
- [ ] Dark gradient hero displays
- [ ] Stats show: "10×", "50+", "100%"
- [ ] 9 tool cards across 3 categories visible
- [ ] Before/After workflow comparison side-by-side
- [ ] 6 principle cards numbered 01-06
- [ ] FAQ accordion visible

### 3. Interaction Check (5 minutes)

**Homepage:**
- [ ] Click carousel arrows → slides change
- [ ] Click carousel dots → jumps to slide
- [ ] Click accordion items → expand/collapse
- [ ] Scroll down → topbar changes from transparent to solid
- [ ] Scroll down → logo changes from cream to black

**AI Page:**
- [ ] Click accordion items → expand/collapse
- [ ] Scroll down → topbar changes
- [ ] All CTAs clickable

---

## 📱 Responsive Testing

### Viewport Sizes to Test

```bash
# Mobile
320px width  - iPhone SE
375px width  - iPhone 12/13
414px width  - iPhone 12 Pro Max

# Tablet
768px width  - iPad portrait
1024px width - iPad landscape

# Desktop
1280px width - Laptop
1440px width - Desktop
1920px width - Large desktop
```

### What to Check at Each Size

**Mobile (320-767px):**
- [ ] Single column layout
- [ ] Carousel shows 1 slide
- [ ] Text readable, not cut off
- [ ] Buttons stack vertically
- [ ] Images scale correctly
- [ ] No horizontal scroll

**Tablet (768-1023px):**
- [ ] Carousel shows 2 slides
- [ ] Two-column grids work
- [ ] Hero content centered
- [ ] Navigation accessible

**Desktop (1024px+):**
- [ ] Carousel shows 3 slides
- [ ] Multi-column layouts active
- [ ] Content max-width applied
- [ ] Spacing looks balanced

---

## ⌨️ Keyboard Navigation Testing

### Homepage

```
Tab       → Focus moves through interactive elements
Enter     → Activates buttons and links
Space     → Activates buttons (accordion triggers)
Arrows    → Navigate carousel (when focused)
Escape    → Closes modals (if implemented)
```

**Test Flow:**
1. Press `Tab` repeatedly
2. Verify visible focus indicator on each element
3. Reach carousel → press `ArrowLeft`/`ArrowRight`
4. Reach accordion → press `Space` to expand/collapse
5. All interactive elements should be reachable

### AI Page

**Test Flow:**
1. Press `Tab` to navigate
2. Reach FAQ accordion items
3. Press `Space` or `Enter` to expand/collapse
4. Verify all content accessible via keyboard

---

## 🎨 Visual Regression Checks

### Colors

**Homepage:**
- [ ] Hero gradient: forest (#2d5016) → charcoal (#1a202c)
- [ ] "companies" text has green gradient
- [ ] Buttons: moss (#7a9b76) primary, forest secondary
- [ ] Process badges: moss background
- [ ] CTA section: moss → forest gradient

**AI Page:**
- [ ] Hero: dark charcoal → forest gradient
- [ ] Tool cards: subtle borders, hover effect
- [ ] Principle cards: numbered with gradient accent
- [ ] FAQ accordion: clean, minimal styling

### Typography

- [ ] Headings: Bold, large, clear hierarchy
- [ ] Body text: 16px base size, readable
- [ ] Eyebrows: Uppercase, smaller, moss color
- [ ] Stats: Large numbers, smaller labels below

### Spacing

- [ ] Sections have consistent vertical rhythm
- [ ] Content doesn't touch edges on mobile
- [ ] Cards have adequate padding
- [ ] Hero content centered with breathing room

---

## 🔧 Component Testing

### Carousel Component

**Location:** Homepage ventures section, About page

**Tests:**
- [ ] **Navigation:** Click prev/next arrows
- [ ] **Dots:** Click dots to jump to slides
- [ ] **Touch/Swipe:** Swipe left/right on mobile
- [ ] **Keyboard:** Arrow keys when focused
- [ ] **Loop:** Goes from last to first (if enabled)
- [ ] **Responsive:** 1 → 2 → 3 slides at breakpoints
- [ ] **Smooth:** Transitions are smooth, not jarring

**Expected Behavior:**
- Clicking next arrow advances 1 slide
- Swiping left shows next slide
- Active dot highlights current slide
- Slides animate smoothly (300ms transition)

### Accordion Component

**Location:** Homepage principles, AI page FAQ

**Tests:**
- [ ] **Click to expand:** Panel opens smoothly
- [ ] **Click to collapse:** Panel closes smoothly
- [ ] **Height transition:** Smooth, not instant
- [ ] **Icon rotation:** Arrow rotates when open
- [ ] **Multiple items:** Can expand multiple (if allowed)
- [ ] **Keyboard:** Space/Enter to toggle

**Expected Behavior:**
- Panel expands with smooth height transition
- Icon rotates 180° when open
- Only one open at a time (single-mode)
- Content fully visible when expanded

---

## 🌙 Dark Mode Testing

### Toggle Dark Mode

**Method 1:** Click theme toggle in footer
**Method 2:** Browser DevTools → Rendering → Emulate: prefers-color-scheme: dark

### What to Check

**Light Mode:**
- [ ] Backgrounds: cream (#f4f1ea)
- [ ] Text: charcoal (#1a202c)
- [ ] Logo: black variant when topbar solid
- [ ] Footer: light background

**Dark Mode:**
- [ ] Backgrounds: charcoal (#1a202c)
- [ ] Text: cream (#f4f1ea)
- [ ] Logo: cream variant when topbar solid
- [ ] Footer: dark background
- [ ] All text readable (contrast ≥4.5:1)

**Transitions:**
- [ ] Theme switch is smooth, not jarring
- [ ] All elements update (no missed elements)
- [ ] Preference persists on reload

---

## ♿ Accessibility Testing

### Automated Testing

**Tools:**
- axe DevTools (Chrome extension)
- WAVE (Browser extension)
- Lighthouse (Chrome DevTools)

**How to Run:**
1. Open page in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Run accessibility audit
5. Fix any issues found

**Target Scores:**
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Manual Testing

**Screen Reader (macOS VoiceOver):**
```bash
# Enable VoiceOver
Cmd + F5

# Navigate
VO + Right Arrow  - Next element
VO + Space        - Activate
```

**What to Check:**
- [ ] All images have alt text
- [ ] Headings in logical order (H1 → H2 → H3)
- [ ] Links have descriptive text
- [ ] Buttons announce their purpose
- [ ] Form inputs have labels
- [ ] Interactive elements have ARIA attributes

### Focus Indicators

- [ ] All interactive elements show focus ring
- [ ] Focus ring is visible (not removed)
- [ ] Focus order is logical (top → bottom)
- [ ] No keyboard traps

---

## ⚡ Performance Testing

### Lighthouse Audit

**How to Run:**
1. Open page in Chrome Incognito
2. Open DevTools → Lighthouse tab
3. Select "Performance" category
4. Click "Analyze page load"

**Target Metrics:**
- Performance Score: 90+
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### What to Check

**Homepage:**
- [ ] Video loads efficiently (not blocking render)
- [ ] Images lazy load
- [ ] JavaScript doesn't block rendering
- [ ] CSS minified (in production)

**AI Page:**
- [ ] Fast initial render
- [ ] No layout shifts during load
- [ ] Smooth scroll performance

### Network Throttling Test

**Chrome DevTools → Network:**
1. Select "Slow 3G" throttle
2. Reload page
3. Verify usable within 5 seconds

---

## 🌐 Cross-Browser Testing

### Desktop Browsers

**Chrome (Latest):**
- [ ] All features work
- [ ] Carousel smooth
- [ ] Accordion smooth
- [ ] Video plays

**Firefox (Latest):**
- [ ] All features work
- [ ] CSS Grid layouts correct
- [ ] Flexbox layouts correct

**Safari (Latest):**
- [ ] All features work
- [ ] Video plays
- [ ] Smooth scrolling works
- [ ] Backdrop filters work (glassmorphism)

**Edge (Latest):**
- [ ] All features work (should match Chrome)

### Mobile Browsers

**iOS Safari:**
- [ ] Touch interactions work
- [ ] Carousel swipe works
- [ ] Video plays inline (not fullscreen)
- [ ] Fixed positioning works

**Chrome Mobile (Android):**
- [ ] Touch interactions work
- [ ] Performance acceptable
- [ ] No layout issues

---

## 🐛 Common Issues to Look For

### Layout Issues

- [ ] ❌ Horizontal scroll on mobile
- [ ] ❌ Text overflow (cut off)
- [ ] ❌ Overlapping elements
- [ ] ❌ Broken images (404)
- [ ] ❌ Misaligned grids

### JavaScript Issues

- [ ] ❌ Console errors (check DevTools)
- [ ] ❌ Carousel doesn't advance
- [ ] ❌ Accordion doesn't expand
- [ ] ❌ Topbar doesn't change on scroll

### Performance Issues

- [ ] ❌ Slow page load (>3s)
- [ ] ❌ Janky animations
- [ ] ❌ Layout shifts during load
- [ ] ❌ Video doesn't load

### Accessibility Issues

- [ ] ❌ Missing alt text
- [ ] ❌ Poor color contrast
- [ ] ❌ Elements not keyboard accessible
- [ ] ❌ Missing ARIA labels

---

## 📋 Quick Test Checklist

### 5-Minute Smoke Test

**Homepage:**
- [ ] Opens without errors
- [ ] Video plays
- [ ] Carousel works (click arrows)
- [ ] Accordion works (click to expand)
- [ ] Responsive (resize browser)

**AI Page:**
- [ ] Opens without errors
- [ ] All sections visible
- [ ] Accordion works
- [ ] Responsive (resize browser)

**Component Examples:**
- [ ] Open `docs/component-examples.html`
- [ ] All components render
- [ ] Interactions work

### 15-Minute Full Test

- [ ] Test all carousel features
- [ ] Test all accordion features
- [ ] Test mobile view (DevTools device mode)
- [ ] Test keyboard navigation
- [ ] Test dark mode toggle
- [ ] Check console for errors
- [ ] Run Lighthouse audit

### 30-Minute Comprehensive Test

- [ ] Complete 15-minute test
- [ ] Test all responsive breakpoints
- [ ] Test all browsers (Chrome, Firefox, Safari)
- [ ] Test screen reader
- [ ] Test performance with throttling
- [ ] Verify all links work
- [ ] Check all images load

---

## 🎯 Testing Priorities

### P0 (Must Work Before Launch)

1. Pages load without errors
2. Carousel navigation works
3. Accordion expand/collapse works
4. Mobile responsive (no horizontal scroll)
5. All links functional

### P1 (Should Work Before Launch)

1. Keyboard navigation
2. Dark mode toggle
3. Screen reader compatibility
4. Performance score >80
5. Cross-browser compatibility

### P2 (Nice to Have)

1. Perfect animations
2. Performance score >95
3. All edge cases handled
4. Perfect accessibility score

---

## 📞 Reporting Issues

### Issue Template

```markdown
**Page:** [Homepage / AI Page / Component Examples]
**Browser:** [Chrome 120 / Safari 17 / etc.]
**Device:** [Desktop / iPhone 13 / etc.]
**Issue:** [Brief description]

**Steps to Reproduce:**
1. Go to...
2. Click on...
3. See error...

**Expected:** What should happen
**Actual:** What actually happened

**Screenshot:** [If applicable]
**Console Errors:** [Copy from DevTools Console]
```

---

## ✅ Sign-Off Checklist

Before considering testing complete:

- [ ] Smoke test passed on all pages
- [ ] Responsive test passed (mobile, tablet, desktop)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Lighthouse score acceptable
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Dark mode works
- [ ] Performance acceptable
- [ ] No console errors
- [ ] All links work
- [ ] All images load

---

**Last Updated:** 2026-04-14
**Tester:** _____________
**Date Tested:** _____________
**Status:** [ ] Pass  [ ] Fail  [ ] Needs Work
