# Alkyme Glass Navigation - Quick Start Guide

**Time Required**: 30 minutes
**Skill Level**: Basic HTML/CSS knowledge
**Files Modified**: 4 HTML pages

---

## 3-Step Implementation

### Step 1: Add CSS Link (5 minutes)

Open these files and add ONE line to the `<head>` section:

**Files to update:**
- `index.html`
- `about.html`
- `careers.html`
- `contact.html`

**Add this line** after the existing chrome CSS:

```html
<!-- Existing line -->
<link rel="stylesheet" href="assets/site-chrome-refined.css">

<!-- ADD THIS NEW LINE -->
<link rel="stylesheet" href="assets/site-navigation.css">

<!-- Rest of your stylesheets -->
<link rel="stylesheet" href="assets/site-footer.css">
```

---

### Step 2: Update Navigation HTML (25 minutes)

Replace the `<header class="topbar">` section in each file with the unified version.

#### index.html

**FIND (lines 51-75):**
```html
<header class="topbar topbar--over-hero" role="banner">
```

**REPLACE WITH:**
```html
<header class="topbar" role="banner">
  <div class="container topbar-inner">
    <div class="topbar-cluster">
      <a class="brand" href="index.html" aria-label="Alkymē home" aria-current="page">
        <img class="brand-logo" src="assets/logos/alkyme-logo-rt-hzt-black.svg" alt="Alkymē" width="200" height="36" decoding="async">
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="about.html">About</a>
        <a href="careers.html">Careers</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
    <div class="topbar__end">
      <div class="topbar__lang">
        <button type="button" class="topbar__lang-btn alkyme-lang-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="alkyme-lang-dialog">
          <span class="site-footer__lang-trigger-visual" aria-hidden="true">
            <svg class="site-footer__lang-globe" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            <span class="site-footer__lang-code" data-alkyme-lang-code>EN</span>
          </span>
          <span class="site-footer__sr-only">Language and region</span>
        </button>
      </div>
    </div>
  </div>
</header>
```

**Key changes:**
- ❌ Removed `topbar--over-hero` class
- ✅ Changed logo to `alkyme-logo-rt-hzt-black.svg`
- ❌ Removed `id="brand-logo"`
- ✅ Changed href to `index.html`

---

#### about.html

**No changes needed!** Already correct.

Verify it matches this pattern:
```html
<header class="topbar" role="banner">
  <div class="container topbar-inner">
    <div class="topbar-cluster">
      <a class="brand" href="index.html" aria-label="Alkymē home">
        <img class="brand-logo" src="assets/logos/alkyme-logo-rt-hzt-black.svg" alt="Alkymē" width="200" height="36" decoding="async">
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="about.html" aria-current="page">About</a>
        <a href="careers.html">Careers</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
    <!-- ... rest of header ... -->
  </div>
</header>
```

**Note**: The `aria-current="page"` should be on "About" link for this page.

---

#### careers.html

**FIND (lines 41-65):**
```html
<header class="topbar topbar--over-hero" role="banner">
```

**REPLACE WITH:**
```html
<header class="topbar" role="banner">
  <div class="container topbar-inner">
    <div class="topbar-cluster">
      <a class="brand" href="index.html" aria-label="Alkymē home">
        <img class="brand-logo" src="assets/logos/alkyme-logo-rt-hzt-black.svg" alt="Alkymē" width="200" height="36" decoding="async">
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="about.html">About</a>
        <a href="careers.html" aria-current="page">Careers</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
    <div class="topbar__end">
      <div class="topbar__lang">
        <button type="button" class="topbar__lang-btn alkyme-lang-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="alkyme-lang-dialog">
          <span class="site-footer__lang-trigger-visual" aria-hidden="true">
            <svg class="site-footer__lang-globe" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            <span class="site-footer__lang-code" data-alkyme-lang-code>EN</span>
          </span>
          <span class="site-footer__sr-only">Language and region</span>
        </button>
      </div>
    </div>
  </div>
</header>
```

**Key changes:**
- ❌ Removed `topbar--over-hero` class
- ✅ Changed logo to black version
- ❌ Removed `id="brand-logo"`

---

#### contact.html

**FIND (lines 44-69):**
```html
<header class="topbar" role="banner">
  <div class="container topbar-inner">
    <div class="topbar-cluster">
      <a class="brand" href="index.html" aria-label="Alkymē home">
        <img class="brand-logo" src="assets/logos/alkyme-logo-rt-hzt-black.svg" alt="Alkymē" width="200" height="36" decoding="async">
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="about.html">About</a>
        <a href="ai.html">AI</a>  <!-- REMOVE THIS LINE -->
        <a href="careers.html">Careers</a>
        <a href="contact.html" aria-current="page">Contact</a>
      </nav>
    </div>
```

**REPLACE WITH:**
```html
<header class="topbar" role="banner">
  <div class="container topbar-inner">
    <div class="topbar-cluster">
      <a class="brand" href="index.html" aria-label="Alkymē home">
        <img class="brand-logo" src="assets/logos/alkyme-logo-rt-hzt-black.svg" alt="Alkymē" width="200" height="36" decoding="async">
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="about.html">About</a>
        <a href="careers.html">Careers</a>
        <a href="contact.html" aria-current="page">Contact</a>
      </nav>
    </div>
    <div class="topbar__end">
      <div class="topbar__lang">
        <button type="button" class="topbar__lang-btn alkyme-lang-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="alkyme-lang-dialog">
          <span class="site-footer__lang-trigger-visual" aria-hidden="true">
            <svg class="site-footer__lang-globe" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            <span class="site-footer__lang-code" data-alkyme-lang-code>EN</span>
          </span>
          <span class="site-footer__sr-only">Language and region</span>
        </button>
      </div>
    </div>
  </div>
</header>
```

**Key changes:**
- ❌ Removed `<a href="ai.html">AI</a>` link (standardize nav across pages)

---

### Step 3: Optional JavaScript (2 minutes)

**OPTIONAL**: Add smooth scroll transitions.

Add this line BEFORE the closing `</body>` tag on ALL pages:

```html
  <!-- Optional: Navigation scroll enhancement -->
  <script src="assets/site-navigation.js" defer></script>

  <!-- Your existing scripts -->
  <script src="assets/site-theme.js" defer></script>
  <script src="assets/site-lang.js" defer></script>
</body>
```

**Can I skip this?** YES! Navigation works perfectly without it.

---

## Quick Test Checklist

After implementation, verify these 5 things:

### 1. Visual Check
- [ ] Black logo displays on all pages
- [ ] Glass effect visible (semi-transparent nav)
- [ ] Text is readable

### 2. Navigation Check
- [ ] All 3 links work (About, Careers, Contact)
- [ ] Active page highlighted in green
- [ ] Hover states show subtle background

### 3. Dark Mode Check
- [ ] Toggle dark mode (footer button)
- [ ] Logo inverts to white
- [ ] Glass effect works on dark background

### 4. Mobile Check
- [ ] Open on phone or resize browser to 320px
- [ ] Navigation doesn't break or wrap
- [ ] Logo and links readable

### 5. Keyboard Check
- [ ] Press Tab key repeatedly
- [ ] Focus outline visible on each element
- [ ] Enter key activates links

**All 5 pass?** You're done!

---

## Common Issues & Fixes

### Issue: Logo doesn't display

**Solution**: Verify logo exists at:
```
/assets/logos/alkyme-logo-rt-hzt-black.svg
```

If missing, check git status for deleted files.

---

### Issue: Glass effect not visible

**Check browser version**:
- Chrome 76+ ✅
- Firefox 103+ ✅
- Safari 15.4+ ✅

Older browsers get solid background (expected).

---

### Issue: Text hard to read

**Check contrast** with Chrome DevTools:
1. Right-click link → Inspect
2. Look for "Contrast ratio" in Styles panel
3. Should show 6.8:1 minimum

If fails, check your theme colors.

---

### Issue: Navigation overlaps content

**Add padding to main content**:
```html
<main id="main" style="padding-top: 88px;">
```

This accounts for 72px nav + 16px spacing.

---

### Issue: Dark mode doesn't work

**Verify** dark mode toggle button exists in footer and theme script loads:
```html
<script src="assets/site-theme.js" defer></script>
```

---

## Rollback Instructions

If you need to undo:

1. **Remove CSS link** from all pages:
   ```html
   <!-- Comment out or delete this line -->
   <!-- <link rel="stylesheet" href="assets/site-navigation.css"> -->
   ```

2. **Revert header HTML** to original version
   - Use git or backups

3. Site falls back to old styles immediately

---

## File Checklist

Before deploying, verify these files exist:

```
✅ /assets/site-navigation.css (9.3 KB)
✅ /assets/site-navigation.js (3.2 KB) - optional
✅ /assets/logos/alkyme-logo-rt-hzt-black.svg
```

---

## Need Help?

### Documentation
1. **Implementation Guide**: `/docs/NAVIGATION-IMPLEMENTATION.md` (detailed)
2. **Testing Guide**: `/docs/NAVIGATION-TESTING.md` (QA protocol)
3. **Design Specs**: `/docs/NAVIGATION-DESIGN-SPECS.md` (visual specs)
4. **Summary**: `/docs/NAVIGATION-SUMMARY.md` (overview)

### Debugging
1. Open browser console (F12)
2. Check for CSS/JS errors
3. Verify file paths are correct
4. Test in Chrome first (best support)

---

## Success Criteria

Your implementation is successful when:

- ✅ All 4 pages display black logo
- ✅ Glass effect visible on navigation
- ✅ No console errors
- ✅ Keyboard navigation works
- ✅ Dark mode toggles correctly
- ✅ Mobile responsive (test at 320px)

**Time to deploy**: 30 minutes
**Complexity**: Low (HTML + CSS only)
**Risk**: Low (easily reversible)

---

**Ready to start?** Follow Step 1 above!

**Questions?** See full implementation guide in `/docs/NAVIGATION-IMPLEMENTATION.md`
