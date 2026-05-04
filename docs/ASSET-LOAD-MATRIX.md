# Asset Load Matrix - What Pages Use What

**Last Updated:** 2026-04-14
**Purpose:** Single source of truth for which HTML files load which CSS/JS stacks

---

## The Two-Stack Reality

**We currently have TWO parallel front-end systems:**

| Stack | Pages | Status | Token System | Components |
|-------|-------|--------|--------------|------------|
| **V2 Rebuild** | EN index, ai, about | ✅ Live | `--alk-*` (components) + alkyme-tokens (base) | `assets/components/*` |
| **Legacy/Locale** | es/*, tl/*, old backups | ✅ Live | `alkyme-tokens.css` only | Custom per-page |

**Why?** English flagship pages were rebuilt with component library (v2). Locale pages (es/, tl/) still use original system. This is intentional but temporary.

**Risk:** Bugfixes and design changes must be applied to BOTH stacks or locales drift.

---

## English Pages (V2 Stack)

### index.html (Homepage - V2)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar (✅ careers topbar fix)
4. assets/components/core.css        ← Component tokens (--alk-*)
5. assets/components/layout.css      ← Layout primitives
6. assets/components/carousel.css    ← Carousel component
7. assets/components/accordion.css   ← Accordion component
8. assets/site-home-v2.css          ← Page-specific v2 styles
9. assets/site-footer.css            ← Footer styles
```

**JS Load Order:**
```
1. assets/site-theme.js              ← Theme toggle
2. assets/site-lang.js               ← Language switcher
3. assets/components/core.js         ← Component foundation (NO defer)
4. assets/components/carousel.js     ← Carousel (NO defer)
5. assets/components/accordion.js    ← Accordion (NO defer)
6. assets/home-v2-interactions.js    ← Page interactions (NO defer)
```

**Features:**
- Video hero with gradient overlay
- Animated stats counter
- 3-step visual process
- Ventures carousel (component library)
- Principles accordion (component library)
- Scroll-triggered animations
- Topbar logo swap on scroll

---

### ai.html (AI Page - V2)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar
4. assets/components/core.css        ← Component tokens (--alk-*)
5. assets/components/layout.css      ← Layout primitives
6. assets/components/accordion.css   ← Accordion component
7. assets/site-ai-v2.css            ← Page-specific v2 styles
8. assets/site-footer.css            ← Footer styles
```

**JS Load Order:**
```
1. assets/site-theme.js              ← Theme toggle
2. assets/site-lang.js               ← Language switcher
3. assets/components/core.js         ← Component foundation (NO defer)
4. assets/components/accordion.js    ← Accordion (NO defer)
+ Inline: topbar logo swap script
```

**Features:**
- Dark gradient hero
- 9 AI tools in categories
- Before/After workflow comparison
- 6 AI principles with examples
- FAQ accordion (component library)
- Glassmorphism effects

---

### about.html (About Page - V2)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar
4. assets/components/core.css        ← Component tokens (--alk-*)
5. assets/components/layout.css      ← Layout primitives
6. assets/components/carousel.css    ← Carousel component
7. assets/site-about-v2.css         ← Page-specific v2 styles
8. assets/site-footer.css            ← Footer styles
```

**JS Load Order:**
```
1. assets/site-theme.js              ← Theme toggle
2. assets/site-lang.js               ← Language switcher
3. assets/components/core.js         ← Component foundation (NO defer)
4. assets/components/carousel.js     ← Carousel (NO defer)
+ Inline: topbar logo swap script
+ Inline: tagline video slow-down script
```

**Features:**
- Hero carousel (4 slides, component library)
- Studio name/pronunciation section
- Mission with image/text layout
- 3 pillar cards
- Link cards to careers/AI
- LA video tagline band

---

### careers.html (Careers - Hybrid)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar (✅ light hero fix)
4. assets/site-careers-new.css       ← Page-specific (NOT v2)
5. assets/site-forms.css             ← Form styles
6. assets/site-footer.css            ← Footer styles
```

**JS Load Order:**
```
1. assets/site-theme.js              ← Theme toggle
2. assets/site-lang.js               ← Language switcher
+ Inline: topbar logo swap script
+ Inline: benefits carousel script
```

**Stack:** Hybrid (alkyme-tokens only, no component library)
**Features:** Light hero gradient, benefits carousel (custom), application form

**Note:** Topbar visibility fix in `site-chrome.css` line 377-381:
```css
.careers-new-page .topbar.topbar--over-hero:not(.topbar--solid) {
  background-color: rgba(26, 32, 44, 0.15);
  backdrop-filter: blur(10px);
}
```

---

### contact.html (Contact - Legacy)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar
4. assets/site-forms.css             ← Form styles
5. assets/site-contact.css           ← Page-specific
6. assets/site-footer.css            ← Footer styles
```

**JS Load Order:**
```
1. assets/site-theme.js              ← Theme toggle
2. assets/site-lang.js               ← Language switcher
3. assets/country-dial-data.js       ← Phone dial codes
+ Inline: phone input formatting
```

**Stack:** Legacy (alkyme-tokens only, no component library)

---

## Locale Pages (Legacy Stack)

### es/index.html (Spanish Homepage - Legacy)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar
4. assets/site-carousel.css          ← OLD carousel styles
5. assets/site-home.css              ← OLD homepage styles (NOT v2)
6. assets/site-footer.css            ← Footer styles
```

**JS Load Order:**
```
1. assets/site-theme.js              ← Theme toggle
2. assets/site-lang.js               ← Language switcher
+ Inline: OLD custom carousel script (NOT component library)
```

**Stack:** Legacy (alkyme-tokens only, OLD carousel, NO component library)
**Differs from EN index.html:** Yes - completely different structure, old carousel code

---

### tl/index.html (Tagalog Homepage - Legacy)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar
4. assets/site-carousel.css          ← OLD carousel styles
5. assets/site-home.css              ← OLD homepage styles (NOT v2)
6. assets/site-footer.css            ← Footer styles
```

**JS Load Order:**
```
1. assets/site-theme.js              ← Theme toggle
2. assets/site-lang.js               ← Language switcher
+ Inline: OLD custom carousel script (NOT component library)
```

**Stack:** Legacy (alkyme-tokens only, OLD carousel, NO component library)
**Differs from EN index.html:** Yes - completely different structure, old carousel code

---

### es/ai.html (Spanish AI Page - Legacy)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar
4. assets/legal-pages.css            ← Legal/FAQ styles
5. assets/site-ai.css                ← OLD AI styles (NOT v2)
6. assets/site-footer.css            ← Footer styles
7. assets/faq-accordion.js           ← OLD FAQ accordion
```

**Stack:** Legacy (legal-style FAQ, NOT marketing AI page)
**Differs from EN ai.html:** Yes - FAQ format vs full marketing page

---

### tl/ai.html (Tagalog AI Page - Legacy)

**CSS Load Order:**
```
1. assets/alkyme-tokens.css          ← Base tokens (shared)
2. assets/site-marketing-base.css    ← Base styles
3. assets/site-chrome.css            ← Header/topbar
4. assets/legal-pages.css            ← Legal/FAQ styles
5. assets/site-ai.css                ← OLD AI styles (NOT v2)
6. assets/site-footer.css            ← Footer styles
7. assets/faq-accordion.js           ← OLD FAQ accordion
```

**Stack:** Legacy (legal-style FAQ, NOT marketing AI page)
**Differs from EN ai.html:** Yes - FAQ format vs full marketing page

---

## Backup/Old Files (Reference Only)

| File | Purpose | Stack |
|------|---------|-------|
| `index-old.html` | Backup of original EN homepage before v2 rebuild | Legacy |
| `ai-old.html` | Backup of original EN AI page before v2 rebuild | Legacy |
| `about-old.html` | Backup of original EN About page before v2 rebuild | Legacy |
| `careers-old.html` | Old careers page before site-careers-new.css | Legacy |

**Do Not Use** - These are archived for reference only.

---

## Locale Differences (es/*, tl/* vs EN)

### Why Locale Pages Differ from EN Pages

**Current State (2026-04-14):**
- **EN flagship pages** (index.html, ai.html, about.html) were rebuilt with v2 stack (component library, modern design)
- **Locale pages** (es/*, tl/*) still use **LEGACY stack** (original carousel, old CSS, no component library)

**Key Differences:**

| Aspect | EN (English) | ES (Spanish) | TL (Tagalog) |
|--------|-------------|--------------|--------------|
| **Homepage Stack** | V2 (components) | Legacy (old carousel) | Legacy (old carousel) |
| **AI Page Format** | Full marketing page | FAQ/legal format | FAQ/legal format |
| **AI Page Purpose** | Showcase AI tools/features | Answer common questions | Answer common questions |
| **Carousel Implementation** | `components/carousel.js` | Inline custom script | Inline custom script |
| **CSS Files** | `site-home-v2.css`, `site-ai-v2.css` | `site-home.css`, `site-ai.css` | `site-home.css`, `site-ai.css` |
| **Component Library** | ✅ Yes | ❌ No | ❌ No |

### Why Different AI Page Formats?

**EN ai.html (Marketing Page):**
- Full-featured marketing page showcasing AI tools, features, benefits
- 9 AI tools organized by category
- Before/After workflow comparison
- 6 AI principles with examples
- Visual graphics and interactive elements
- Built with component library (accordion for FAQs)

**es/ai.html & tl/ai.html (FAQ Pages):**
- Focused on answering common questions about AI
- Legal/educational format
- Simple accordion FAQ structure
- Text-heavy, minimal graphics
- Not rebuilt with v2 stack (still uses old FAQ accordion)

**Intentional or Oversight?**
- **Likely intentional** - Different content strategy for different locales
- ES/TL audiences may prefer concise FAQs over marketing content
- However: `hreflang` links imply content equivalence, which creates confusion

**Recommendation:**
1. **Option A:** Rebuild es/ai.html and tl/ai.html as marketing pages (translate EN version)
2. **Option B:** Keep FAQ format but adjust navigation labels to clarify ("AI FAQ" vs "AI Tools")
3. **Option C:** Create separate routes (e.g., `/es/ai` for marketing, `/es/ai-faq` for questions)

### Migration Status

**Not Yet Migrated to V2:**
- ❌ `es/index.html` - Homepage (still uses legacy carousel)
- ❌ `tl/index.html` - Homepage (still uses legacy carousel)
- ❌ `es/ai.html` - AI page (FAQ format, not marketing)
- ❌ `tl/ai.html` - AI page (FAQ format, not marketing)
- ❌ `es/about.html` - About page (if it exists)
- ❌ `tl/about.html` - About page (if it exists)

**Impact:**
- ⚠️ Bugfixes and design changes to EN pages must be manually applied to locale pages
- ⚠️ Locale pages don't benefit from component library improvements
- ⚠️ Brand consistency risk - locales may drift from EN design

**See Migration Path (Phase 3) below for recommended approach.**

---

## Token System Comparison

### alkyme-tokens.css (Base - Shared by ALL pages)

**Defines:**
- Core brand colors: `--bark`, `--moss`, `--forest`, `--dew`, `--eggshell`
- Glass effects: `--glass-marketing-*`
- Layout: `--page-bg`, `--cloudy-day`, `--text`, `--muted`
- Typography: `--type-*` variables
- Spacing: Limited to container/rhythm
- Buttons: `--button-primary-*`, `--button-secondary-*`

**Used by:** ALL pages (EN + es + tl)

---

### assets/components/core.css (Component Library - V2 Only)

**Defines:**
- Component colors: `--alk-moss`, `--alk-forest`, `--alk-cream`, `--alk-charcoal`, `--alk-slate`
  - **✅ BRIDGED (2026-04-14):** Now reference alkyme-tokens.css values via `var(--moss)`, `var(--forest)`, etc.
- Spacing scale: `--alk-space-xs` through `--alk-space-3xl` (8px to 96px)
  - **✅ BRIDGED (2026-04-14):** Now mapped to alkyme-tokens spacing scale where values overlap
- Typography scale: `--alk-text-xs` through `--alk-text-6xl` (12px to 60px)
- Typography fonts: `--alk-font-sans` references `var(--font-ui)` from alkyme-tokens
- Radius: `--alk-radius-sm` through `--alk-radius-full`
- Shadows: `--alk-shadow-*`
- Transitions: `--alk-transition-*`
- Utility classes: spacing, typography, display, flex, grid

**Used by:** Only V2 pages (EN index, ai, about)

**~~Overlap/Conflict:~~** ✅ **RESOLVED (2026-04-14)**
- ~~`--alk-moss` (#7a9b76) vs alkyme-tokens `--moss` (may differ)~~ → Now uses `var(--moss)` from alkyme-tokens
- ~~`--alk-forest` (#2d5016) vs alkyme-tokens `--forest` (may differ)~~ → Now uses `var(--forest)` from alkyme-tokens
- ~~Spacing defined in both (different scales/naming)~~ → Now mapped to alkyme-tokens scale

---

## Dead/Duplicate Assets (Clean Up Needed)

| File | Status | Notes |
|------|--------|-------|
| `assets/site-ai.css` | ⚠️ Superseded | Used by es/tl/ai-old only. EN ai.html uses site-ai-v2.css |
| `assets/site-home.css` | ⚠️ Superseded | Used by es/tl/index-old only. EN index.html uses site-home-v2.css |
| `assets/site-about.css` | ⚠️ Superseded | Used by about-old only. EN about.html uses site-about-v2.css |
| `assets/site-careers.css` | ⚠️ Unclear | careers.html uses site-careers-new.css. What uses the old file? |
| `assets/site-carousel.css` | ⚠️ Legacy | Used by es/tl only. EN pages use components/carousel.css |

**Action Needed:** Document which files are authoritative, archive or delete unused.

---

## Migration Path (Recommended)

### Phase 1: Immediate (Prevent Drift)
1. ✅ Document current state (this file)
2. Apply any EN v2 bugfixes to es/tl legacy versions manually
3. Note locale differences in hreflang/nav (es/tl AI = FAQ, not marketing)

### Phase 2: Unify Tokens ✅ **COMPLETED (2026-04-14)**
1. ✅ Mapped `--alk-*` colors to existing alkyme-tokens values
2. ✅ Chose Option A: Made core.css reference alkyme-tokens (bridge approach)
   - `--alk-moss: var(--moss)` (references canonical token)
   - `--alk-forest: var(--forest)` (references canonical token)
   - `--alk-space-xs: var(--space-sm)` (maps to alkyme scale)
3. ✅ V2 pages automatically inherit unified tokens (no changes needed)

### Phase 3: Migrate Locales (Complete Unification)
1. Rebuild es/index.html using v2 stack (translate content, use components)
2. Rebuild tl/index.html using v2 stack
3. Decide: Migrate es/ai.html to full marketing page OR keep FAQ format (document decision)
4. Remove legacy stacks (site-home.css, site-carousel.css, etc.)

### Phase 4: Clean Up
1. Archive old backup files (index-old.html, etc.) to `archive/` folder
2. Delete truly unused CSS files
3. Single source of truth: one stack, all pages

---

## Known Issues & Fixes

### 1. Careers Topbar Visibility (✅ FIXED)
- **File:** `assets/site-chrome.css` lines 377-381
- **Issue:** Light hero background made cream logo invisible
- **Fix:** Added semi-transparent dark background to topbar over light heroes
- **Applies to:** careers.html only

### 2. Script Loading (❌ NOT FIXED)
- **Issue:** Inconsistent use of `defer` attribute on scripts
- **Current:** Most scripts load without defer, site-theme.js has defer
- **Risk:** Execution order dependent on DOM state
- **Fix Needed:** Normalize to defer all except inline theme script

### 3. Token Duplication (✅ FIXED 2026-04-14)
- **Issue:** Colors defined in both alkyme-tokens.css and components/core.css
- **Risk:** Color drift, hard to maintain brand consistency
- **Fix:** Bridged components/core.css to reference alkyme-tokens.css values (see Phase 2 above)
- **Result:** Single source of truth for brand colors, automatic propagation to v2 pages

### 4. Locale Content Parity (❌ NOT FIXED)
- **Issue:** es/ai.html and tl/ai.html are FAQ pages, EN ai.html is full marketing page
- **Risk:** Users expect same content across languages (hreflang implies equivalence)
- **Fix Needed:** Either align structure OR adjust hreflang/nav labels

---

## Quick Reference

**"I'm editing the homepage, which CSS file?"**
- EN: `assets/site-home-v2.css`
- ES: `assets/site-home.css` (legacy)
- TL: `assets/site-home.css` (legacy)

**"I'm editing the AI page, which CSS file?"**
- EN: `assets/site-ai-v2.css`
- ES: `assets/site-ai.css` (legacy FAQ format)
- TL: `assets/site-ai.css` (legacy FAQ format)

**"I'm editing the carousel, which file?"**
- EN pages: `assets/components/carousel.css` + `carousel.js`
- ES/TL pages: Inline script in HTML (legacy custom carousel)

**"I'm adding a new color, where?"**
- Base brand colors: `assets/alkyme-tokens.css` (ONLY place to define new brand colors)
- Component-specific: `assets/components/core.css` (automatically inherits via `var(--color-name)`)

**"I'm fixing a bug in the topbar, which file?"**
- `assets/site-chrome.css` (shared by ALL pages)

**"Which pages use the component library?"**
- EN: index.html, ai.html, about.html
- ES/TL: None (legacy stack)

---

## Summary

**Current Reality (2026-04-14):**
- ✅ **V2 Stack:** EN flagship pages (index, ai, about) rebuilt with component library
- ✅ **Legacy Stack:** Locale pages (es/*, tl/*) still use original system
- ⚠️ **Two Parallel Systems:** Must maintain both until migration complete
- ⚠️ **Token Duplication:** Colors/spacing defined in two places
- ⚠️ **Locale Drift Risk:** Bugfixes must be applied to both stacks

**Recommendation:**
1. Use this matrix as single source of truth for "what loads what"
2. Unify token systems (Phase 2)
3. Migrate locales to v2 (Phase 3)
4. Clean up dead assets (Phase 4)

**For Now:**
- Check this file before editing ANY CSS/JS
- Apply fixes to correct stack (v2 OR legacy)
- Document intentional differences (e.g., es/tl AI = FAQ format)

---

**Document Version:** 1.0
**Maintained By:** Development Team
**Update Trigger:** Any change to CSS/JS load order in HTML files
