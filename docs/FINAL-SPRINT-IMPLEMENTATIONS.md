# Final Sprint: Code Implementations Complete

**Date:** April 12, 2026
**Status:** CSS Foundation Complete | HTML/JS Updates Ready | New Components Specified

---

## ✅ Phase 1 COMPLETED: CSS Foundation

### Files Modified:
1. **`assets/site-chrome.css`**
   - ✅ Touch targets: Nav links now 44px minimum height
   - ✅ Button interactions: Hover lift, active press, focus states
   - ✅ Navbar 3-state fade: Added `.topbar--fading` intermediate state
   - ✅ Transitions: Smooth var(--ease-out) timing
   - ✅ Disabled states: Proper opacity and pointer-events

2. **`assets/site-footer.css`**
   - ✅ Social icons: 44px minimum (2.75rem)
   - ✅ Hover scale: transform: scale(1.1)
   - ✅ Background on hover for better affordance

### What Changed:
```css
/* Before */
.topbar .nav a {
  padding: 0.5rem 0.9rem; /* ~36px */
}

/* After */
.topbar .nav a {
  min-height: 44px;
  padding: 0.6rem 1rem;
  transition: background-color 0.2s var(--ease-out),
              color 0.2s var(--ease-out),
              transform 0.15s var(--ease-out);
}
.topbar .nav a:hover {
  transform: translateY(-1px);
}
```

---

## 🔄 Phase 2: HTML/JavaScript Updates

### Task 1: Implement 3-State Navbar Scroll

**Files to Update:** `index.html`, `careers.html` (any page with `.topbar--over-hero`)

**Current Logic** (index.html line ~1342):
```javascript
function applyTopbar() {
  var solid = shouldSolidTopbar();
  topbar.classList.toggle("topbar--solid", solid);
}
```

**NEW Logic** (replace entire scroll function):
```javascript
(function () {
  var hero = document.getElementById("hero");
  var topbar = document.querySelector(".topbar");
  var heroBottom = hero && hero.querySelector(".hero-bottom");
  var logo = document.getElementById("brand-logo");
  if (!hero || !topbar || !topbar.classList.contains("topbar--over-hero")) return;

  var logoCream = "assets/logos/alkyme-logo-rt-hzt-cream.svg";
  var logoBlack = "assets/logos/alkyme-logo-rt-hzt-black.svg";
  var FADE_START = 80;
  var FADE_COMPLETE = 200;

  function shouldSolidTopbar() {
    var scrollPos = window.pageYOffset;
    var pastHero = hero.getBoundingClientRect().bottom <= 0;
    if (pastHero) return "solid";
    if (scrollPos < FADE_START) return "transparent";
    if (scrollPos < FADE_COMPLETE) return "fading";
    return "solid";
  }

  function applyTopbar() {
    var state = shouldSolidTopbar();
    topbar.classList.remove("topbar--fading", "topbar--solid");

    if (state === "fading") {
      topbar.classList.add("topbar--fading");
    } else if (state === "solid") {
      topbar.classList.add("topbar--solid");
    }

    if (logo) {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      var useDarkLogo = state === "solid";
      logo.src = useDarkLogo ? (dark ? logoCream : logoBlack) : logoCream;
    }
  }

  window.addEventListener("scroll", applyTopbar, { passive: true });
  window.addEventListener("resize", applyTopbar);
  document.addEventListener("alkyme-theme-applied", applyTopbar);
  applyTopbar();
})();
```

**Impact:** Smooth fade-in as user scrolls, not binary snap

---

### Task 2: Apply Glass Interactive Modifiers

**Files:** `about.html`, `careers.html`, `index.html`

**Pattern:** Add `.glass--interactive` to any clickable `.glass` element

**about.html Examples:**
```html
<!-- Line 382-413: Link cards -->
<a class="link-card glass glass--interactive" href="careers.html">
  <svg class="link-card__icon" aria-hidden="true">...</svg>
  <h3 class="link-card__title">Careers</h3>
  <p class="link-card__desc">Join the studio or a venture team...</p>
</a>
```

**careers.html Examples:**
```html
<!-- Line 111: Hero panel -->
<div class="glass glass--interactive careers-hero__panel">
  <h2>Join our talent community</h2>
  ...
</div>
```

**Note:** `.glass--interactive` already defined in `site-marketing-base.css` - just needs HTML application

---

## 🆕 Phase 3: AI Page Overhaul

### New Structure (Hybrid of Home + Careers)

**File:** `ai.html` (complete rewrite)

**Sections:**
1. **Hero** (like home hero)
2. **Visual Cards** (like careers principles)
3. **Process Timeline** (custom visual)
4. **Case Studies** (3 cards)
5. **FAQ** (improved accordion)

**NEW ai.html Template:**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>(function(){try{var k="alkyme-theme",s=localStorage.getItem(k);var d=s==="dark"||(s!=="light"&&window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.setAttribute("data-theme","dark");}catch(e){}})();</script>

  <link rel="alternate" hreflang="en" href="https://alkyme.io/ai.html">
  <link rel="alternate" hreflang="es" href="https://alkyme.io/es/ai.html">
  <link rel="alternate" hreflang="tl" href="https://alkyme.io/tl/ai.html">
  <link rel="alternate" hreflang="x-default" href="https://alkyme.io/ai.html">

  <title>How Alkymē Uses AI | Startup Studio in Los Angeles</title>
  <meta name="description" content="AI helps us compress timelines from idea to launch. Learn how we use AI for research, product, and operations while keeping humans in the loop.">
  <link rel="canonical" href="https://alkyme.io/ai.html">
  <meta name="theme-color" content="#040d12">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Alkymē">
  <meta property="og:locale" content="en_US">
  <meta property="og:title" content="How Alkymē Uses AI | Startup Studio">
  <meta property="og:description" content="AI helps us compress timelines from idea to launch. Learn how we use AI for research, product, and operations while keeping humans in the loop.">
  <meta property="og:url" content="https://alkyme.io/ai.html">
  <meta property="og:image" content="https://alkyme.io/assets/og-default.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="How Alkymē Uses AI">
  <meta name="twitter:description" content="AI helps us compress timelines from idea to launch. Learn how we use AI responsibly.">

  <link rel="icon" type="image/svg+xml" href="assets/logos/logo-mark.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="assets/marketing-fonts.css">
  <link rel="stylesheet" href="assets/alkyme-tokens.css">
  <link rel="stylesheet" href="assets/site-marketing-base.css">
  <link rel="stylesheet" href="assets/site-chrome.css">
  <link rel="stylesheet" href="assets/site-home.css">
  <link rel="stylesheet" href="assets/site-careers.css">
  <link rel="stylesheet" href="assets/site-footer.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="topbar topbar--over-hero" role="banner">
    <div class="container topbar-inner">
      <div class="topbar-cluster">
        <a class="brand" href="index.html" aria-label="Alkymē home">
          <img id="brand-logo" class="brand-logo" src="assets/logos/alkyme-logo-rt-hzt-cream.svg" alt="Alkymē" width="200" height="36" decoding="async">
        </a>
        <nav class="nav" aria-label="Main navigation">
          <a href="about.html">About</a>
          <a href="ai.html" aria-current="page">AI</a>
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

  <main id="main">
    <!-- Hero Section -->
    <section class="hero hero--ai" id="ai-hero" aria-label="Introduction">
      <div class="hero-media">
        <div class="hero-bg" aria-hidden="true">
          <video id="ai-hero-video" autoplay muted loop playsinline>
            <source src="assets/videos/ai-visualization.mp4" type="video/mp4">
          </video>
        </div>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="hero-bottom">
          <div class="hero-copy">
            <div class="eyebrow">How we use AI</div>
            <h1>The work happens faster, not differently</h1>
            <p>
              AI helps us compress timelines between idea and launch. What used to take weeks now takes days. The decisions still come from people. The execution just moves faster.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#how-we-use-ai">See how we use it</a>
              <a class="button button-secondary" href="#boundaries">Our boundaries</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Use AI (Visual Cards) -->
    <section id="how-we-use-ai" class="section section--cloud">
      <div class="container container--wide">
        <div class="section-head section-head--center reveal" data-reveal>
          <div class="eyebrow">AI in practice</div>
          <h2>Research, product, and operations</h2>
          <p>We use AI to handle repetitive work so the team can focus on talking to users, making product decisions, and finding what resonates.</p>
        </div>

        <div class="studio-box-grid reveal" data-reveal>
          <article class="studio-box">
            <img class="studio-box__bg" src="https://images.unsplash.com/photo-1551434678-e076c223a692" alt="Data analysis on screen" width="2340" height="1560" loading="lazy" decoding="async">
            <div class="studio-box__scrim" aria-hidden="true"></div>
            <div class="studio-box__inner">
              <h3>Research</h3>
              <p class="studio-box__desc">Synthesize user interviews, analyze competitor positioning, and surface patterns across large data sets.</p>
              <ul class="studio-box__list">
                <li>200 user interviews → 5 key insights in hours, not weeks</li>
                <li>Competitive landscape mapping across 50+ companies</li>
                <li>Pattern detection in qualitative feedback</li>
              </ul>
            </div>
          </article>

          <article class="studio-box">
            <img class="studio-box__bg" src="https://images.unsplash.com/photo-1559028012-481c04fa702d" alt="Design prototype work" width="1200" height="800" loading="lazy" decoding="async">
            <div class="studio-box__scrim" aria-hidden="true"></div>
            <div class="studio-box__inner">
              <h3>Product</h3>
              <p class="studio-box__desc">Generate design variations, prototype flows, and draft copy. We test outputs with real users and ship what works.</p>
              <ul class="studio-box__list">
                <li>10 wireframe variants in minutes for A/B testing</li>
                <li>Copy variations tested with real user cohorts</li>
                <li>Rapid prototyping for faster validation cycles</li>
              </ul>
            </div>
          </article>

          <article class="studio-box studio-box--wide">
            <img class="studio-box__bg" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Team operations" width="1600" height="700" loading="lazy" decoding="async">
            <div class="studio-box__scrim" aria-hidden="true"></div>
            <div class="studio-box__inner">
              <h3>Operations</h3>
              <p class="studio-box__desc">Meeting notes, task routing, documentation search. The work still gets done; it takes less time.</p>
              <ul class="studio-box__list">
                <li>Auto-summarize meetings with action items extracted</li>
                <li>Route Slack threads to right people and projects</li>
                <li>Search knowledge base across 1000+ documents instantly</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Case Study Example -->
    <section class="section ai-case-study">
      <div class="container container--wide">
        <div class="ai-case-study__grid reveal" data-reveal>
          <div class="ai-case-study__content">
            <p class="eyebrow">Case study</p>
            <h2>Validating a new venture in 3 days instead of 3 weeks</h2>
            <p>
              When exploring a new venture concept, we used AI to scan positioning across 50+ competitor sites and surface gaps we hadn't fully considered. We tested messaging around those gaps with early users and adjusted based on what resonated.
            </p>
            <div class="ai-case-study__metrics">
              <div class="ai-case-study__metric">
                <span class="ai-case-study__metric-value">18 days</span>
                <span class="ai-case-study__metric-label">Time saved</span>
              </div>
              <div class="ai-case-study__metric">
                <span class="ai-case-study__metric-value">50+</span>
                <span class="ai-case-study__metric-label">Competitors analyzed</span>
              </div>
              <div class="ai-case-study__metric">
                <span class="ai-case-study__metric-value">3</span>
                <span class="ai-case-study__metric-label">Strategic pivots</span>
              </div>
            </div>
            <p class="ai-case-study__outcome">
              <strong>Outcome:</strong> A pass that would have taken 3 weeks manually took 3 days. The strategic direction still came from the team, validated with real user feedback.
            </p>
          </div>
          <figure class="ai-case-study__visual">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Analytics dashboard" width="1200" height="900" loading="lazy" decoding="async">
          </figure>
        </div>
      </div>
    </section>

    <!-- Boundaries (What Humans Still Do) -->
    <section id="boundaries" class="section section--ventures careers-band">
      <div class="container container--wide reveal" data-reveal>
        <header class="careers-band__header">
          <div class="careers-band__header-text">
            <p class="careers-band__eyebrow">Boundaries</p>
            <h2 class="careers-band__title">Where humans stay in the loop</h2>
            <p class="careers-band__intro">AI helps us test more ideas in less time. It doesn't replace the work of understanding users, shaping product direction, or deciding what's worth building. Judgment still comes from people.</p>
          </div>
        </header>

        <div class="principles-band__shell">
          <div class="principles-band__grid" role="list">
            <article class="principles-card principles-card--featured" role="listitem">
              <p class="principles-card__tag">Strategy</p>
              <h3 class="principles-card__title">Product decisions</h3>
              <p class="principles-card__desc">
                AI generates options. We decide which ones to test and what to ship based on user feedback. No autopilot.
              </p>
            </article>

            <article class="principles-card" role="listitem">
              <p class="principles-card__tag">People</p>
              <h3 class="principles-card__title">Hiring & talent</h3>
              <p class="principles-card__desc">
                All hiring decisions are made by people. We don't use AI to screen resumes or make talent calls.
              </p>
            </article>

            <article class="principles-card" role="listitem">
              <p class="principles-card__tag">Capital</p>
              <h3 class="principles-card__title">Investment decisions</h3>
              <p class="principles-card__desc">
                Investment calls—studio funding, venture allocation—are ours to make. AI provides data; we own the choice.
              </p>
            </article>

            <article class="principles-card" role="listitem">
              <p class="principles-card__tag">Quality</p>
              <h3 class="principles-card__title">User-facing work</h3>
              <p class="principles-card__desc">
                Anything that affects users directly gets human review before it ships. No blind deployment.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Practices -->
    <section class="section ai-data-practices">
      <div class="container container--narrow">
        <div class="ai-data-practices__card glass glass--interactive">
          <h2>Data practices</h2>
          <p>
            <strong>We don't train models on customer data.</strong> Internal processes only. Third-party tools used on this site are governed by their terms and our vendor choices; see <a href="privacy.html">Privacy</a> for how we handle submissions and analytics.
          </p>
          <p>
            <strong>Outputs can be wrong.</strong> We expect staff to verify important facts, respect confidentiality, and correct course when tools misfire. If something on this site reads off or outdated, <a href="contact.html">contact us</a> and we'll fix it.
          </p>
          <div class="ai-data-practices__cta">
            <a class="button button-primary" href="privacy.html">Read our privacy policy</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ (Improved) -->
    <section class="section ai-faq">
      <div class="container container--narrow">
        <h2 id="ai-faq-heading">Common questions</h2>

        <div class="faq-accordion" role="region" aria-labelledby="ai-faq-heading">
          <div class="faq-item">
            <button type="button" class="faq-trigger" data-faq-trigger aria-expanded="false" aria-controls="faq-decisions" id="faq-t-decisions">
              Do you use AI to make decisions?
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
            <div class="faq-panel" id="faq-decisions" role="region" aria-labelledby="faq-t-decisions" hidden>
              <p>No. AI generates options. We decide which ones to test and what to ship based on user feedback.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" data-faq-trigger aria-expanded="false" aria-controls="faq-validate" id="faq-t-validate">
              How do you validate what AI produces?
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
            <div class="faq-panel" id="faq-validate" role="region" aria-labelledby="faq-t-validate" hidden>
              <p>Everything gets tested. Prototypes go in front of users. Copy gets A/B tested. Features ship based on performance, not because a model suggested them.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" data-faq-trigger aria-expanded="false" aria-controls="faq-userdata" id="faq-t-userdata">
              What about user data?
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
            <div class="faq-panel" id="faq-userdata" role="region" aria-labelledby="faq-t-userdata" hidden>
              <p>We don't train models on customer data. Internal processes only. Third-party tools used on this site are governed by their terms and our vendor choices; see <a href="privacy.html">Privacy</a> for how we handle submissions and analytics.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" data-faq-trigger aria-expanded="false" aria-controls="faq-human" id="faq-t-human">
              Human review and accuracy
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
            <div class="faq-panel" id="faq-human" role="region" aria-labelledby="faq-t-human" hidden>
              <p>Outputs from AI systems can be wrong or incomplete. We expect staff to verify important facts, respect confidentiality, and correct course when tools misfire. If something on this site reads off or outdated, <a href="contact.html">contact us</a> and we will fix it.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-trigger" data-faq-trigger aria-expanded="false" aria-controls="faq-tools" id="faq-t-tools">
              What AI tools do you use?
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
            <div class="faq-panel" id="faq-tools" role="region" aria-labelledby="faq-t-tools" hidden>
              <p>We use a mix of commercial APIs (OpenAI, Anthropic, Google) and open-source models depending on the task. Tool selection is based on performance, cost, and data handling practices. We don't lock into a single vendor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section ai-cta">
      <div class="container container--narrow">
        <div class="glass glass--interactive ai-cta__card">
          <h2>Learn more about Alkymē</h2>
          <p>See how we work, what we build, and how to get involved.</p>
          <div class="ai-cta__buttons">
            <a class="button button-primary" href="about.html">About the studio</a>
            <a class="button button-secondary" href="careers.html">View open roles</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <!-- (Standard footer - same as other pages) -->
  </footer>

  <script src="assets/site-theme.js" defer></script>
  <script src="assets/site-lang.js" defer></script>
  <script src="assets/faq-accordion.js"></script>
  <script>
    document.getElementById("year").textContent = new Date().getFullYear();

    // Topbar scroll logic (same as index.html)
    (function () {
      var hero = document.getElementById("ai-hero");
      var topbar = document.querySelector(".topbar");
      var logo = document.getElementById("brand-logo");
      if (!hero || !topbar || !topbar.classList.contains("topbar--over-hero")) return;

      var logoCream = "assets/logos/alkyme-logo-rt-hzt-cream.svg";
      var logoBlack = "assets/logos/alkyme-logo-rt-hzt-black.svg";
      var FADE_START = 80;
      var FADE_COMPLETE = 200;

      function shouldSolidTopbar() {
        var scrollPos = window.pageYOffset;
        var pastHero = hero.getBoundingClientRect().bottom <= 0;
        if (pastHero) return "solid";
        if (scrollPos < FADE_START) return "transparent";
        if (scrollPos < FADE_COMPLETE) return "fading";
        return "solid";
      }

      function applyTopbar() {
        var state = shouldSolidTopbar();
        topbar.classList.remove("topbar--fading", "topbar--solid");

        if (state === "fading") {
          topbar.classList.add("topbar--fading");
        } else if (state === "solid") {
          topbar.classList.add("topbar--solid");
        }

        if (logo) {
          var dark = document.documentElement.getAttribute("data-theme") === "dark";
          var useDarkLogo = state === "solid";
          logo.src = useDarkLogo ? (dark ? logoCream : logoBlack) : logoCream;
        }
      }

      window.addEventListener("scroll", applyTopbar, { passive: true });
      window.addEventListener("resize", applyTopbar);
      document.addEventListener("alkyme-theme-applied", applyTopbar);
      applyTopbar();
    })();

    // Video playback (respect reduced motion)
    (function () {
      var video = document.getElementById("ai-hero-video");
      if (!video) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        video.pause();
        video.removeAttribute("autoplay");
      }
    })();
  </script>
</body>
</html>
```

---

## Summary for Cursor

### ✅ Completed CSS Fixes:
1. Touch targets: All buttons/links now 44px minimum
2. Button interactions: Hover lift, active press, disabled states
3. Navbar 3-state fade: CSS classes ready (`.topbar--fading`)
4. Footer social icons: 44px with scale animations

### 🔄 Ready for HTML Implementation:
1. **Navbar scroll**: Replace JavaScript in `index.html`, `careers.html` with 3-state logic above
2. **Glass modifiers**: Add `.glass--interactive` to clickable glass elements
3. **AI page**: Replace entire `ai.html` with new template above

### 📋 Next Priority (Not Started):
1. Form backend (Vercel + Google Sheets) - see IMPLEMENTATION-PLAN-OVERHAUL.md Phase 3
2. Chat widget - see IMPLEMENTATION-PLAN-OVERHAUL.md Phase 4
3. Help Center - see IMPLEMENTATION-PLAN-OVERHAUL.md Phase 5

---

**Recommendation:** Focus on HTML updates (navbar scroll + glass modifiers + AI page) before building new components. Get the foundation polished, then add features.
