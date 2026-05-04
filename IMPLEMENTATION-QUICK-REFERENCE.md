# Implementation Quick Reference
**SMB Repositioning - Exact Find & Replace Instructions**

---

## Navigation Updates (8 files)

### Find:
```html
<a href="/solutions.html" class="nav__link">Enterprise</a>
```

### Replace:
```html
<a href="/solutions.html" class="nav__link">Solutions</a>
```

### On solutions.html, find:
```html
<a href="/solutions.html" class="nav__link nav__link--active">Enterprise</a>
```

### Replace:
```html
<a href="/solutions.html" class="nav__link nav__link--active">Solutions</a>
```

**Files:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/index.html (line 38)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/about.html (line 35)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/labs.html (line 35)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/careers.html (line 36)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/contact.html (line 35)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/solutions.html (line 35)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/privacy.html (line 32)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/terms.html (line 32)

---

## CTA Buttons (3 files)

### Find:
```html
Explore Enterprise Solutions
```

### Replace:
```html
Explore Solutions
```

**Files:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/index.html (line 295)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/about.html (line 291)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/labs.html (line 259)

---

## Contact Form (1 file)

### Find:
```html
<option value="licensing">Enterprise solutions / licensing</option>
```

### Replace:
```html
<option value="licensing">Platform licensing</option>
```

**File:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/contact.html (line 138)

---

## Solutions Page Meta Description (1 file)

### Find:
```html
<meta name="description" content="Venture-proven AI solutions for your business. We package the same technology powering our portfolio companies into enterprise-ready platforms you can deploy in weeks, not years.">
```

### Replace:
```html
<meta name="description" content="Venture-proven AI solutions for your business. We package the same technology powering our portfolio companies into production-ready platforms you can deploy in weeks, not years.">
```

**File:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/solutions.html (line 11)

---

## Section Eyebrows (2 files)

### Find:
```html
<p style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.875rem; color: var(--color-text-muted, #666); margin-bottom: 1rem;">FOR ENTERPRISES</p>
```

### Replace:
```html
<p style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.875rem; color: var(--color-text-muted, #666); margin-bottom: 1rem;">FOR YOUR BUSINESS</p>
```

**Files:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/index.html (line ~289)
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/labs.html (line 253)

---

## Body Copy - "enterprise deployment" (3 files)

### File 1: index.html (line 292)

**Find:**
```html
The same battle-tested platforms running our ventures—packaged for enterprise deployment. HIPAA-compliant, SOC 2 ready, proven at scale.
```

**Replace:**
```html
The same battle-tested platforms running our ventures—packaged for your business. HIPAA-compliant, SOC 2 ready, proven at scale.
```

### File 2: labs.html (line 256)

**Find:**
```html
The platforms running our ventures are available for enterprise deployment. Battle-tested, production-ready, deployable in weeks.
```

**Replace:**
```html
The platforms running our ventures are available for your business. Battle-tested, production-ready, deployable in weeks.
```

### File 3: about.html (line 286)

**Find:**
```html
Interested in licensing our platforms? We package proven tech for enterprise deployment.
```

**Replace:**
```html
Interested in licensing our platforms? We package proven tech for your business.
```

---

## Solutions Page - Education Section (1 file)

### Find:
```html
LMS platforms, AI tutoring, progress tracking, certification systems. Built for enterprise learning at scale.
```

### Replace:
```html
LMS platforms, AI tutoring, progress tracking, certification systems. Built for learning at scale.
```

**File:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/solutions.html (line 359)

---

## Healthcare AI Subpage (1 file)

### Find:
```html
We occasionally work with regional health systems and healthcare enterprises looking to modernize marketing operations.
```

### Replace:
```html
We occasionally work with regional health systems and healthcare organizations looking to modernize marketing operations.
```

**File:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/labs/healthcare-ai/index.html (line 369)

---

## Homepage Portfolio Description (1 file)

### Find:
```html
Building companies across healthcare AI and enterprise automation. Each venture benefits from our studio's compounded knowledge and systematic validation approach.
```

### Replace:
```html
Building companies across healthcare AI and business automation. Each venture benefits from our studio's compounded knowledge and systematic validation approach.
```

**File:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/index.html (line 151)

**Reason:** "enterprise automation" suggests large corporate automation projects. "business automation" is more inclusive and accessible.

---

## Help Center Article (1 file - OPTIONAL)

### Find:
```html
<li>B2B SaaS and enterprise software</li>
```

### Replace:
```html
<li>B2B SaaS and business software</li>
```

**File:**
- /Users/anthonycabrera/Documents/Business/Alkyme/Website/help/articles/what-is-alkyme.html (line 126)

**Note:** This is a help center article describing what Alkyme does, not customer-facing marketing. Could be updated for consistency, but lower priority.

---

## DO NOT CHANGE (These are correct)

### solutions.html (line 110)
```html
Enterprise-grade tech, not enterprise-grade pricing
```
**Reason:** Positions enterprise as negative (cost), aligns with anti-bloat messaging

### labs.html (line 228)
```html
Most legal AI tools target enterprise—we're building for the long tail.
```
**Reason:** Explicitly states we DON'T target enterprise, perfect positioning

---

## Implementation Checklist

**Phase 1 - Navigation & High-Visibility CTAs:**
- [ ] Update navigation on all 8 pages (index, about, labs, careers, contact, solutions, privacy, terms)
- [ ] Update CTA buttons on 3 pages (index, about, labs)
- [ ] Update contact form dropdown

**Phase 2 - Content Updates:**
- [ ] Update solutions.html meta description
- [ ] Update section eyebrows (index.html, labs.html)
- [ ] Update "enterprise deployment" copy (index.html, labs.html, about.html)
- [ ] Update solutions.html education section

**Phase 3 - Subpages & Additional Copy:**
- [ ] Update healthcare-ai/index.html
- [ ] Update homepage portfolio description (index.html line 151)
- [ ] (Optional) Update help center article

**Final QA:**
- [ ] Search all HTML files for remaining "enterprise" instances
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Screen reader test
- [ ] Mobile responsiveness check
- [ ] Dark mode compatibility

---

## Quick Verification Script

Run this to find any remaining "enterprise" instances:

```bash
grep -ri "enterprise" --include="*.html" . | grep -v "Enterprise-grade tech, not enterprise-grade pricing" | grep -v "target enterprise—we're building"
```

Expected result: Should only show the two "DO NOT CHANGE" instances above.

---

*Ready for implementation - all changes mapped and verified*
