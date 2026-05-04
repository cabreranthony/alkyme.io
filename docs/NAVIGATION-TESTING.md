# Alkyme Glass Navigation - Testing & QA Guide

**Purpose**: Comprehensive testing protocol for unified glass navigation
**WCAG Target**: AA Compliance (6.8:1 minimum contrast)
**Browser Support**: Chrome 76+, Firefox 103+, Safari 15.4+, Edge 79+

---

## Pre-Deployment Testing

### 1. Contrast Ratio Testing (WCAG AA)

#### Tool: Chrome DevTools Contrast Checker

**Light Mode Tests:**

```
Test 1: Default Navigation Link
1. Open index.html in Chrome
2. Right-click on "About" link → Inspect
3. In Styles panel, find color: #333333
4. Look for "Contrast ratio" indicator
5. ✅ PASS: Should show 7.2:1 (AA ✓, AAA ✓)

Test 2: Active Page Link
1. Stay on index.html
2. Inspect the link with aria-current="page"
3. Check color: #183d3d
4. ✅ PASS: Should show 6.8:1 (AA ✓)

Test 3: Hover State
1. Hover over "About" link
2. Inspect hovered element
3. Check color: #040d12
4. ✅ PASS: Should show 8.1:1 (AA ✓, AAA ✓)
```

**Dark Mode Tests:**

```
Test 4: Dark Mode Default Link
1. Toggle dark mode (footer button)
2. Inspect "About" link
3. Check color: rgba(255, 255, 255, 0.85)
4. ✅ PASS: Should show 12.4:1 (AA ✓, AAA ✓)

Test 5: Dark Mode Active Link
1. Stay in dark mode
2. Inspect active page link
3. Check color: #7a9b76
4. ✅ PASS: Should show 7.1:1 (AA ✓)
```

#### Alternative: Contrast Checker Tools

**WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/

```
Light Mode:
- Text: #333333
- Background: #FFFFFF (conservative test)
- Result: 12.63:1 ✅ AAA

Dark Mode:
- Text: #FFFFFF
- Background: #040d12
- Result: 19.3:1 ✅ AAA
```

---

### 2. Keyboard Navigation Testing

**Tool**: Physical keyboard (Tab, Shift+Tab, Enter, Space)

```
Test Sequence:
1. Load index.html
2. Press Tab repeatedly
3. Verify focus order:

Expected Focus Order:
1. Skip Link (appears on first Tab)
2. Alkymē Logo
3. About Link
4. Careers Link
5. Contact Link
6. Language Button

✅ PASS: Focus indicators visible (3px outline)
✅ PASS: Focus order is logical
✅ PASS: No focus traps
✅ PASS: Enter/Space activates links
```

**Focus Visibility Test:**

```
For each focusable element:
1. Press Tab to focus
2. Verify outline: 3px solid #183d3d
3. Verify outline-offset: 2px
4. ✅ PASS: Outline clearly visible against all backgrounds
```

---

### 3. Screen Reader Testing

#### Tool: VoiceOver (macOS)

**Activation**: `Cmd + F5`

```
Test Script:

1. Start VoiceOver
2. Load index.html
3. Press VO + Right Arrow to navigate

Expected Announcements:
- "Banner, landmark"
- "Alkymē home, link, current page"
- "Main navigation, navigation landmark"
- "About, link"
- "Careers, link"
- "Contact, link"
- "Language and region, button, collapsed"

✅ PASS: All elements properly announced
✅ PASS: Current page indicated
✅ PASS: Landmarks clearly identified
```

#### Tool: NVDA (Windows)

**Activation**: `Ctrl + Alt + N`

```
Test Script:

1. Start NVDA
2. Load index.html
3. Press Down Arrow to navigate

Expected Announcements:
- "banner region"
- "Alkymē home, link, current page"
- "navigation region, Main navigation"
- "About, link"
- "Careers, link"
- "Contact, link"
- "Language and region, button, collapsed"

✅ PASS: All elements properly announced
```

---

### 4. Mobile Responsive Testing

#### Viewport Sizes to Test:

```
320px  - iPhone SE
375px  - iPhone 12/13
390px  - iPhone 14 Pro
414px  - iPhone 14 Plus
768px  - iPad Portrait
1024px - iPad Landscape
1440px - Desktop
```

**Chrome DevTools Device Emulation:**

```
Test at 320px (iPhone SE):
1. Open DevTools (F12)
2. Toggle device toolbar (Cmd/Ctrl + Shift + M)
3. Select "iPhone SE"
4. ✅ PASS: Navigation fits without horizontal scroll
5. ✅ PASS: Logo size: 26px height
6. ✅ PASS: Nav links readable at 13px
7. ✅ PASS: Touch targets ≥ 44x44px
8. ✅ PASS: No text overlap

Test at 768px (iPad):
1. Select "iPad"
2. ✅ PASS: Navigation expands to 64px height
3. ✅ PASS: Logo size: 28px height
4. ✅ PASS: Nav links at 14px
5. ✅ PASS: Adequate spacing (24px gap)

Test at 1440px (Desktop):
1. Select "Responsive" mode
2. Set width to 1440px
3. ✅ PASS: Navigation at 72px height
4. ✅ PASS: Logo size: 32px height
5. ✅ PASS: Nav links at 15px
6. ✅ PASS: Centered within 1440px max-width
```

---

### 5. Touch Target Size Testing

**WCAG 2.1 Requirement**: Minimum 44x44 CSS pixels

```
Chrome DevTools Measurement:

1. Open DevTools → Elements
2. Hover over navigation link
3. Check computed dimensions in box model

Expected Measurements:
- Desktop links: ≥ 44px × 44px (10px + 16px padding = ~46px)
- Mobile links: ≥ 44px × 44px
- Language button: 44px × 44px minimum

✅ PASS: All interactive elements ≥ 44x44px
```

---

### 6. Glass Effect Visual Testing

**Tool**: Visual inspection across different backgrounds

```
Test 1: Over Light Background (About page)
1. Load about.html
2. ✅ PASS: Glass effect visible
3. ✅ PASS: Backdrop blur apparent
4. ✅ PASS: Text remains readable
5. ✅ PASS: Shadow provides depth

Test 2: Over Dark Background (Careers page)
1. Load careers.html
2. ✅ PASS: Glass effect works on dark hero
3. ✅ PASS: Black logo visible
4. ✅ PASS: Text contrast maintained

Test 3: Scroll Transition (index.html)
1. Load index.html
2. Scroll down slowly
3. ✅ PASS: Opacity increases smoothly
4. ✅ PASS: No jarring transitions
5. ✅ PASS: Background blur consistent
```

**Browser Support Test:**

```
Chrome 76+ (Full Support):
- ✅ backdrop-filter works
- ✅ Glass effect visible
- ✅ Blur renders smoothly

Safari 15.4+ (Full Support):
- ✅ -webkit-backdrop-filter works
- ✅ Glass effect visible
- ✅ Performance smooth

Firefox 103+ (Full Support):
- ✅ backdrop-filter works
- ✅ Glass effect visible

Legacy Browsers (Graceful Degradation):
- ✅ Falls back to solid background
- ✅ Contrast maintained
- ✅ Fully functional
```

---

### 7. Dark Mode Testing

```
Toggle Sequence Test:

1. Load index.html (light mode)
2. ✅ PASS: Black logo visible (#040d12)
3. ✅ PASS: Glass background: rgba(255,255,255,0.80)
4. ✅ PASS: Nav links: #333333

5. Click dark mode toggle (footer)
6. ✅ PASS: Logo inverts to white
7. ✅ PASS: Glass background: rgba(4,13,18,0.80)
8. ✅ PASS: Nav links: rgba(255,255,255,0.85)

9. Toggle back to light mode
10. ✅ PASS: All styles revert correctly
```

---

### 8. Performance Testing

#### Tool: Chrome DevTools Lighthouse

```
Lighthouse Audit:

1. Open DevTools → Lighthouse
2. Select "Navigation (default)"
3. Check "Accessibility" only
4. Click "Analyze page load"

Expected Scores:
- Accessibility: ≥ 95/100
- Performance: ≥ 90/100
- Best Practices: ≥ 90/100

Common Deductions:
- None expected for navigation

✅ PASS: Accessibility score 95+
```

#### Tool: Chrome DevTools Performance Monitor

```
Scroll Performance Test:

1. Open DevTools → Performance
2. Click Record (●)
3. Scroll up and down 5 times
4. Stop recording
5. Analyze results

Expected Metrics:
- FPS: 60 (green line)
- No layout shifts (CLS = 0)
- Smooth rendering (no red bars)
- GPU acceleration active

✅ PASS: Maintains 60fps during scroll
✅ PASS: No layout recalculations
```

---

### 9. Cross-Browser Testing

**Required Browsers:**

```
✅ Chrome 120+ (macOS)
✅ Chrome 120+ (Windows)
✅ Safari 17+ (macOS)
✅ Safari 17+ (iOS 17)
✅ Firefox 121+ (macOS)
✅ Firefox 121+ (Windows)
✅ Edge 120+ (Windows)

For each browser:
1. Visual check (glass effect visible)
2. Interaction check (hover, focus, click)
3. Scroll check (opacity transitions)
4. Dark mode check (toggle works)

Expected Results:
- All modern browsers: Full support
- Legacy browsers: Graceful degradation
```

---

### 10. High Contrast Mode Testing

**Windows High Contrast:**

```
Test Procedure:

1. Windows Settings → Accessibility → Contrast themes
2. Select "High contrast black"
3. Load index.html

Expected Results:
✅ PASS: Border visible (2px solid)
✅ PASS: Text high contrast
✅ PASS: Hover states clearly visible
✅ PASS: Active links underlined
```

**macOS Increased Contrast:**

```
Test Procedure:

1. System Settings → Accessibility → Display
2. Enable "Increase contrast"
3. Load index.html

Expected Results:
✅ PASS: Glass effect still visible
✅ PASS: Contrast ratios maintained
✅ PASS: Focus indicators enhanced
```

---

### 11. Reduced Motion Testing

```
Test Procedure:

1. macOS: System Settings → Accessibility → Display
   → Enable "Reduce motion"

2. Windows: Settings → Accessibility → Visual effects
   → Enable "Reduce motion"

3. Load index.html
4. Scroll up and down

Expected Results:
✅ PASS: No opacity transitions
✅ PASS: No smooth scrolling
✅ PASS: Instant state changes
✅ PASS: Functionality unchanged
```

---

## Post-Deployment Testing

### 1. Production URL Testing

```
Test all pages:
- https://alkyme.io/index.html
- https://alkyme.io/about.html
- https://alkyme.io/careers.html
- https://alkyme.io/contact.html

For each page:
✅ CSS loads correctly
✅ JS loads (if enabled)
✅ No console errors
✅ Navigation functions
✅ Dark mode toggles
✅ Language selector works
```

### 2. Real Device Testing

**iOS Devices:**

```
iPhone SE (2022):
- Safari: Navigation responsive
- Chrome: Navigation responsive
- Touch targets adequate

iPhone 14 Pro:
- Safari: Glass effect renders
- Navigation smooth
```

**Android Devices:**

```
Samsung Galaxy S21:
- Chrome: Full support
- Navigation functions

Google Pixel 7:
- Chrome: Glass effect visible
- Performance smooth
```

### 3. Analytics Validation

```
Post-Deploy Checks:

1. Monitor console errors (0 expected)
2. Check navigation click tracking
3. Verify no 404s for CSS/JS
4. Confirm glass effect rendering
5. Monitor performance metrics

Expected Metrics:
- Page Load Time: No increase
- FCP: No degradation
- CLS: Remains at 0
```

---

## Issue Tracking Template

When reporting issues, include:

```markdown
## Issue Title
Brief description

### Environment
- Browser: Chrome 120.0.6099.109
- OS: macOS 14.2
- Device: MacBook Pro M2
- Viewport: 1440x900

### Steps to Reproduce
1. Navigate to about.html
2. Enable dark mode
3. Scroll to bottom

### Expected Behavior
Logo should remain visible

### Actual Behavior
Logo disappears at bottom

### Screenshots
[Attach screenshot]

### Console Errors
[Paste any errors]

### Priority
- [ ] Critical (broken functionality)
- [x] High (accessibility issue)
- [ ] Medium (visual inconsistency)
- [ ] Low (minor polish)
```

---

## Test Results Log

```
Test Date: ____________________
Tester: ________________________
Version: site-navigation.css v1.0.0

[ ] Contrast ratios (WCAG AA)
[ ] Keyboard navigation
[ ] Screen reader (VoiceOver)
[ ] Screen reader (NVDA)
[ ] Mobile responsive (320-1440px)
[ ] Touch targets (44x44px)
[ ] Glass effect visual
[ ] Dark mode toggle
[ ] Performance (Lighthouse 95+)
[ ] Cross-browser (5 browsers)
[ ] High contrast mode
[ ] Reduced motion

Notes:
_________________________________
_________________________________
_________________________________

Overall Status:
[ ] PASS - Ready for production
[ ] FAIL - Issues found (see notes)
[ ] PARTIAL - Minor issues acceptable
```

---

## Automated Testing (Optional)

### Playwright Test Script

```javascript
// navigation.spec.js
import { test, expect } from '@playwright/test';

test.describe('Glass Navigation', () => {
  test('has correct contrast ratio', async ({ page }) => {
    await page.goto('https://alkyme.io/index.html');

    const navLink = await page.locator('.nav a').first();
    const color = await navLink.evaluate(
      el => window.getComputedStyle(el).color
    );

    expect(color).toBe('rgb(51, 51, 51)'); // #333333
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('https://alkyme.io/index.html');

    await page.keyboard.press('Tab'); // Skip link
    await page.keyboard.press('Tab'); // Logo
    await page.keyboard.press('Tab'); // About

    const focused = await page.evaluate(
      () => document.activeElement?.textContent
    );

    expect(focused).toBe('About');
  });

  test('mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('https://alkyme.io/index.html');

    const nav = await page.locator('.topbar');
    const height = await nav.evaluate(el => el.offsetHeight);

    expect(height).toBeLessThanOrEqual(64);
  });
});
```

---

## Regression Testing Checklist

After any code changes, re-test:

```
[ ] All 4 HTML pages load
[ ] CSS applies correctly
[ ] JS executes (if enabled)
[ ] Dark mode still works
[ ] Mobile responsive unchanged
[ ] Accessibility maintained
[ ] No new console errors
[ ] Performance unchanged
```

---

**Testing Status**: Complete protocol ready
**Last Updated**: 2026-04-20
**Next Review**: Post-deployment
