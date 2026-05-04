# FEATURE FLAGS
**Maintained by:** Sam Okafor, Lead Engineer
**Last Updated:** April 29, 2026

---

## Active Feature Flags

### Language Toggle (HIDDEN)

**Status:** HIDDEN (not deleted, can be re-enabled)

**Reason:** Too complex to QA non-English languages right now. Hiding the UI until multilingual content is ready.

**Implementation:**
- Added `style="display: none;"` to `.alkyme-lang-trigger` button on all pages
- Functionality still works (site-lang.js still loads)
- No visual UI for users to click

**Files affected:**
- index.html
- about.html
- labs.html
- careers.html
- contact.html
- solutions.html
- privacy.html
- terms.html

**To re-enable:**
1. Remove `style="display: none;"` from all `.alkyme-lang-trigger` buttons
2. Test language switching with real Spanish/Tagalog content
3. Verify all translations are accurate

**Scripts still loading:**
- `assets/js/site-lang.js` - Still loads (no harm, just unused)
- `assets/country-dial-data.js` - Still referenced (used by contact form)

**Future work:**
- Create `/es/` directory for Spanish content
- Create `/tl/` directory for Tagalog content
- Add actual translations (not just template strings)
- Re-enable toggle when ready

---

## Feature Flag Best Practices

When hiding features (vs deleting):
1. ✅ Use inline `style="display: none;"` (easy to find/remove)
2. ✅ Document in this file (FEATURE-FLAGS.md)
3. ✅ Keep supporting code intact (JS files, CSS classes)
4. ✅ Note what needs to be done to re-enable

When fully removing features:
1. Delete HTML elements
2. Remove JS file loads
3. Remove CSS classes
4. Document removal in BUILD-COMPLETE-SUMMARY.md

---

**Current hidden features:**
- Language toggle (hidden April 29, 2026)

**Current active features:**
- Dark mode toggle (active, working)
- Theme persistence (active, working)
- Navigation (active, all pages)
- Contact form (active, needs backend testing)
- Solutions accordion (active, working)
- Case study tabs (active, working)
