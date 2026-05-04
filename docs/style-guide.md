# Alkymē site style guide

Living reference for the marketing HTML pages. **Canonical design tokens** live in **`assets/alkyme-tokens.css`**. Prefer `var(--…)` for colors, radii, shadows, and motion—don’t duplicate hex values in one-off CSS.

### Brand & content references (living Markdown)

| Doc | Purpose |
|-----|---------|
| **`assets/content/brand-content-guidelines.md`** | Voice, tone, terminology (studio / venture / spin out), banned phrases, editorial mechanics, SEO title/description patterns. **Use for copy and meta text**, not for inventing new CSS variables. |
| **`assets/content/design-system-brand.md`** | Visual and UX rationale aligned with this repo: dual-font hierarchy, semantic colors, CTA combinations, grids, imagery direction, section flow (what → how → proof → action). **Companion** to the token file—when the Markdown and tokens disagree, **tokens win for code**; update Markdown or tokens together after a conscious change. |

New global tokens from that alignment (see **`alkyme-tokens.css`**): **`--gradient-*`**, **`--scrim-on-media`**, **`--grid-gap-cards`**, **`--grid-min-card`**, **`--rgb-status-market*`** / **`--rgb-status-experiment*`** (venture/modal badges), **`--rgb-glass-scrim-*`** / **`--rgb-glass-card-*`** (careers discover glass stops), **`--shadow-card-on-dark*`**, **`--shadow-dialog-dark`**.

---

## Proactive alignment: baseline forward

**You want a starting line to move forward from—not whack-a-mole later, and not a single “read every line” marathon that goes stale on the next commit.**

| Layer | What it is |
|--------|------------|
| **Baseline** | This guide + **`alkyme-tokens.css`** + tier tables (CTAs/links, type, radii, color hierarchy) + **`assets/content/brand-content-guidelines.md`** / **`design-system-brand.md`** for copy/visual intent. **New work defaults here**; extend tokens/docs instead of one-off patterns. |
| **Targeted sweeps** | Before a launch or when refactoring a **surface** (e.g. all hero/home CSS), run a **checklist pass**: raw `#hex` outside tokens, `border-radius` not using `var(--radius*)`, eyebrow/CTA tier drift, EN / es / `tl/` parity, light + dark. Cheap, repeatable, proactive. |
| **Module pass (while editing)** | Cursor rule **`alkyme-principal-bar-no-blunt-fixes.mdc`**: if you touch a **`section`** or band (e.g. `#how-studio-runs`), **default** to checking that **whole module** against this guide—not only the one node you changed. |
| **Ship pipeline** | Substantive UI: **ideate → align → code → QA** per **`.cursor/rules/alkyme-ship-pipeline-subagents.mdc`**—run **SA-UX**, **SA-COPY**, **SA-I18N** (and **SA-SEO** / others when relevant) **before** implementation, then **SA-QA** before ship. |
| **Full line-by-line audit** | Reserve for **major rebrand or pre-launch hardening**—high cost, snapshot decays quickly; use only when the baseline + sweeps aren’t enough. |

**Net:** Proactive doesn’t require auditing the whole repo once. It requires a **frozen contract** (this doc) and **disciplined sweeps** so drift is caught in batches, not only when you notice it in the browser.

---

## Brand palette (tokens)

| Token | Role |
|--------|------|
| `--bark` | Brand dark green: primary fills, hero gradients, shadows (not default body copy) |
| `--ink` | Body / UI text ink; light mode matches `--bark`, dark mode becomes a light neutral |
| `--text` | Semantic alias → `--ink` (prefer this for headings and copy) |
| `--accent-on-canvas` | Uppercase labels, circle CTAs, mint hovers — `forest` in light, light mint in dark |
| `--forest` | Secondary text, links, focus rings |
| `--moss` | Hover / accents; default **`.eyebrow`** tint |
| `--dew` | Borders, dividers, soft accents |
| `--page-bg` | Default white canvas |
| `--eggshell-sky` | Warm light surfaces, text on dark buttons |
| `--cloudy-day` | Alternate section / footer wash |

**Also defined:** `--shadow-sm` … `--shadow-lg`, `--ease-out`, `--duration-fast`, `--focus-ring`, `--theme-color`, **`--button-primary-*`** (see `alkyme-tokens.css`).

### Radius (shape system)

| Token | Use |
|--------|-----|
| `--radius-sm` | Dense UI (badges, tiny chips) |
| `--radius` | Inputs, default `.button`, nav link hit areas |
| `--radius-lg` | Nested chips / floats on dark surfaces |
| `--radius-xl` | Reserved for large insets |
| `--radius-pill` | **Same value as `--radius-media-lg`** (rounded rect, not a full capsule). Used for **hero CTAs**, `.button--pill`, and primary/secondary **marketing pills** so buttons align with hero/roles photos and large glass cards. **Header:** main items are **text nav**; **Contact** is not a pill in the bar. |
| `--radius-media` | **Default** for photos, cards, model stage, why tiles, studio boxes, carousel tiles |
| `--radius-media-lg` | **Large** surfaces: careers band image, approach figure, newsletter form shell, detail modal shell — and **pill CTAs** via `--radius-pill` |

New marketing surfaces should use **`--radius-media`** or **`--radius-media-lg`** — avoid new one-off `clamp()` radii unless adding a new tier in tokens.

**Careers discover (`#careers-discover`):** `.careers-discover-sheet` uses **`--radius-media-lg`**; testimonial photo uses **`--radius-media`**. Sheet fill and glass tints use **`--forest`**, **`--moss`**, **`--dew`**, and **`rgb(var(--rgb-*) / α)`** only — no raw forest hex in CSS. Horizontal padding uses **`--discover-sheet-pad-x`** plus **`env(safe-area-inset-*)`**. Liquid glass on value/benefit tiles: **vertical Moss→Forest** gradient tint (token RGB only), plus **`blur(var(--careers-showcase-glass-blur)) saturate(var(--careers-showcase-glass-sat))`** (dark theme uses **`--careers-showcase-glass-sat-dark`**); no diagonal eggshell sheen on the fill. **Tablet stack:** `max-width: 900px` collapses the photo + quote grid to one column. **Carousel nav** uses **`rgb(var(--rgb-eggshell) / …)`** (not `--rgb-white`) so frosted circles stay light in dark mode.

---

## Typography bible (`--type-*` in `alkyme-tokens.css`)

**Canonical scale:** all marketing pages load **`alkyme-tokens.css`** then **`site-marketing-base.css`**. **Headings `h1`–`h6`**, **body**, **`.eyebrow`**, and **`.button`** use **`var(--type-*)`** for size, weight, leading, and tracking. Page modules (e.g. `site-home.css`, `site-careers.css`) **only override** when a surface needs a **documented tier** (e.g. `--type-h2-display-lg-size` for the principles rail, `--type-h2-ui-size` for a sans section headline on dark).

### Why h1 can be lighter than h2

- **`h1`** (Display, **`--type-h1-weight` = 400**): one primary page title. **Hierarchy comes from size** (`--type-h1-size` or hero `--type-h1-display-hero-size`), not maximum weight. Lighter weight reads calm and editorial.
- **`h2`** (Display, **700**): section “chapters” are **smaller** than `h1`; **700** keeps them scannable and clearly subordinate through **size + weight**, not a heavier `h1` that would compete with the page title.

### Token quick reference

| Token group | Role |
|-------------|------|
| `--type-display-family` / `--type-ui-family` | Aliases → `--font-display` / `--font-ui` |
| `--type-h1-*` | Document `h1` (default scale) |
| `--type-h1-display-hero-*` | **Home hero** `h1` only (scoped in `site-home.css` to `.hero h1`) |
| `--type-h2-display-sm-size` | Default **`h2`** in `site-marketing-base.css` |
| `--type-h2-display-md-size` | Centered / sheet section titles (e.g. careers discover closer) |
| `--type-h2-display-lg-size` | Large serif rail title (principles band `h2`) |
| `--type-h2-band-size` | **Index** section `h2` under `main#main` |
| `--type-h2-ui-size` | **Sans** section headline (e.g. careers `#roles` split column) |
| `--type-h3-*` … `--type-h6-*` | UI headings for cards, lists, legal subheads |
| `--type-h3-section-size` | In-band UI label between card `h3` and display `h2` (e.g. careers block title) |
| `--type-body-*` | `body` in `site-marketing-base.css` |
| `--type-prose-*` | **Index** `main#main p` (marketing body) |
| `--type-lead-*` | Intro / lede paragraphs (hero lead, principles lede, roles lede) |
| `--type-eyebrow-*` | `.eyebrow` + band variants (`--type-eyebrow-track-wide`, hero sizes) |
| `--type-caption-*` | Fine print, meta |
| `--type-attribution-*` | Testimonial attribution under display pull-quote |
| `--type-pullquote-*` | Display pull-quote (e.g. careers discover carousel); scoped alias on `#careers-discover` |
| `--type-strong-weight` / `--type-ui-emphasis-weight` | **`strong`**, inline emphasis, link weight in legal |
| `--type-button-*` | **`.button`**, **`.skip-link`** label in `site-chrome.css` |
| `--type-modal-title-*` | Detail modal bar title (**`site-home.css`** `.detail-modal__title`) — **UI**, not Display |
| `--type-legal-*` | Longform legal `h1`–`h3` in `legal-pages.css` |

**Non-CTA clickable text:** inline **`a`** inherits color; global **`a:hover`** uses **`--accent-on-canvas`** (see CTAs table). No separate type token—weight stays **`inherit`** unless a component sets **`--type-ui-emphasis-weight`** for a specific line.

---

## Typography taxonomy (display vs UI)

**Fonts (tokens):** `--font-display` (Libre Baskerville) · `--font-ui` (Source Sans 3). Prefer **`--type-display-family`** / **`--type-ui-family`** in new CSS for consistency with the bible above.

| Role | Typical HTML / pattern | Font | Weight | Notes |
|------|-------------------------|------|--------|--------|
| **Page / section title** | `h1`, `h2` (e.g. Principles, Ventures, band titles) | **Display** | 400 (`h1` hero) / **700** (`h2`) | One serif “billboard” per section; tight negative tracking. |
| **In-band subhead** | `h3.studio-approach-band__subhead` (“What this means in practice”) | **UI** | **600** | Introduces a list or block *under* the section serif pair—not a second editorial title. |
| **Card / tile / grid item title** | `h3` in cards (Why, Ventures, hero bridge, carousel, studio image tiles when paired with body copy) | **UI** | **600** (700 on dark scrims when extra contrast needed) | Subordinate to section `h2`; scannable sans. |
| **Modal / overlay title** | e.g. `#detail-modal-title` / `.detail-modal__title` | **UI** | **600** | **Dialog chrome** (“where you are” in the panel), not another page section. Keeps **Display** for band `h2` only on the canvas. For a strong **editorial** line inside the modal body, use **Display** on that in-content heading—not on the sticky dialog header. |
| **Footer column labels** | `.site-footer__heading` | **UI** | **600** | Uppercase / small — already sans in `site-footer.css`. |
| **Eyebrow / kicker** | `.eyebrow`, `__eyebrow`, `__label` | **UI** | **600** | Uppercase, tracked; color `--moss` / `--accent-on-canvas` (dark). |
| **Body & UI chrome** | `p`, forms, nav, buttons | **UI** | **400** / **600** for labels | Default paragraph color **`--muted`**; use **`--text`** when copy is the primary line (e.g. legal lead). |
| **Legal document** | `.legal-main h1`, `.legal-prose h2` | **Display** | 400 / **700** | `.legal-prose h3` uses **UI** **600** for subsections. |
| **Careers discover testimonial** | `.careers-benefits-showcase__quote-text` (inside `#careers-discover`) | **Display** | **700** | Pull-quote uses **`--type-pullquote-*`** via scoped aliases (`--careers-showcase-quote-*` on `#careers-discover`). |
| **Careers discover attribution** | `.careers-benefits-showcase__attribution` | **UI** | **400** body, **700** name | **`--type-attribution-*`** for size/leading; **`--careers-showcase-caption-muted`** for role line color. |

**Rationale:** Section `h2` + card `h3` both in Libre created two competing editorial voices. Product-style marketing (Meta-class systems) keeps **one serif level per band** and uses **sans for structure inside the band**. **Overlays** (detail modal, language sheet, etc.) are **UI layers** on top of that page story: their **bar titles** use **UI** so they don’t read as a second serif section headline next to the parent band’s Libre `h2`.

---

## Color hierarchy (brand use)

| Token | Use |
|--------|-----|
| `--text` / `--ink` | Primary reading text, headings on light surfaces. |
| `--muted` | Supporting copy, descriptions under titles, card body. |
| `--bark` | Brand dark fills, hero stages, **text on light chips** (e.g. cream card). |
| `--forest` | Focus rings, borders in light theme; avoid alone for body text on dark (use `--accent-on-canvas`). |
| `--accent-on-canvas` | Links hover, mint CTAs, eyebrows in dark mode — readable on `--page-bg`. |
| `--button-primary-*` | Filled actions only; don’t reuse as arbitrary text color. |

Global inline **`a:hover`** uses **`--accent-on-canvas`** so light/dark stay consistent.

---

## CTAs and text links (tiers)

Use the right **pattern** so visitors learn what’s a primary action vs auxiliary navigation vs inline reference.

| Tier | Pattern | Radius / shape | Color & decoration | Where |
|------|---------|----------------|-------------------|--------|
| **1 — Primary pill** | `.button.button-primary` (and `.button--pill` where used) | **`var(--radius-pill)`** | `--button-primary-*` | Section primaries, **hero glass CTAs** (same pill; glass is a *surface* override, not a different shape tier). Header **Contact** is a **nav link**, not this tier. |
| **2 — Secondary pill** | `.button.button-secondary` | **`var(--radius-pill)`** on marketing chrome | Page fill + border (`site-chrome.css`); hero uses glass overrides in `site-home.css`. | Pair with primary in heroes, bands, forms. |
| **3 — Text CTA + icon** | e.g. `.studio-carousel-card__cta` (button or link) | N/A (not a pill) | Default **`var(--accent-on-canvas)`**, hover **`var(--text)`**; **no underline**; optional circle + chevron. | Card “Learn more”, compact secondary actions on **light** cards. |
| **4 — Inline / prose link** | `a` in body copy | N/A | Inherit color; global **`a:hover`** → **`--accent-on-canvas`**; underline only when prose needs it (e.g. legal), not on chrome. | Paragraphs, footnotes. |
| **5 — Dark scrim / carousel slide** | Glass `.button-primary` / `.button-secondary` | **`var(--radius-pill)`** | Eggshell-tinted borders/fills over `--bark`; shared rules in **`site-home.css`** for **`.hero .hero-actions`** and **`#what-we-do` `.studio-box__actions`** (use **`button--pill`** with those classes). | Hero video stack, **studio image tiles** (`#what-we-do`), about carousel slides. |

**Eyebrows / kickers on dark brand** (hero video stack, `hero-bark-body`): use **`var(--eggshell-sky)`** and the same **letter-spacing** as global `.eyebrow` (**`0.14em`** via **`--type-eyebrow-track`**), not a separate dew-only treatment, so “How we work” and “Startup studio” read as one system.

---

## Dark mode (appearance)

- **DOM:** `html[data-theme="dark"]` turns on the dark token block in **`alkyme-tokens.css`** (`color-scheme: dark`, remapped canvas/surfaces/`--ink`, frosted topbar RGBs, and button contrast).
- **Persistence:** **`assets/site-theme.js`** reads/writes **`localStorage["alkyme-theme"]`** as `"dark"` or `"light"`. If the key is missing, the site follows **`prefers-color-scheme`** until the user toggles.
- **FOUC:** A small inline script in each page `<head>` (after viewport) applies the stored/system preference before paint.
- **UI:** Footer **`#site-theme-toggle`** (moon / sun icon) lives in **`site-footer__utilities`** next to the language control; styles in **`site-footer.css`**.
- **Copy vs. brand:** Use **`var(--text)`** / **`var(--muted)`** for typography. Keep **`var(--bark)`** and **`rgb(var(--rgb-bark) / …)`** where you intend the brand dark (stages, hero overlays, shadows).
- **Logo:** Home swaps to the cream wordmark when the topbar is solid **and** dark mode is on (see `index.html` / `es` / `tl` scroll script). Other pages use the black SVG with a CSS filter in **`site-chrome.css`** (`[src*="hzt-black"]`) so the mark reads on the frosted bar.

---

## Design system contract

### Single source of truth (change brand here)

| What | File | Notes |
|------|------|--------|
| **Brand colors** (hex + `--rgb-*`) | **`assets/alkyme-tokens.css`** | Only file for new `#hex` in the marketing stack. Dark overrides live in `html[data-theme="dark"]` in the same file. |
| **Gradients, media scrim, card grid gap** | **`assets/alkyme-tokens.css`** | **`--gradient-bark-forest`**, **`--gradient-forest-moss`**, **`--gradient-eggshell-cloud`**, **`--scrim-on-media`**, **`--grid-gap-cards`**, **`--grid-min-card`** — prefer over one-off `linear-gradient()` / magic gaps when a shared token fits. |
| **Voice, copy rules, editorial SEO** | **`assets/content/brand-content-guidelines.md`** | Not imported by CSS; editors and agents follow for visible strings and meta. |
| **Visual/UX rationale (expanded)** | **`assets/content/design-system-brand.md`** | Prose companion to tokens + this guide; keep in sync when changing the system. |
| **Font stacks** (`--font-display`, `--font-ui`) and **type scale** (`--type-*`) | **`assets/alkyme-tokens.css`** | Marketing **`h1`–`h6`**, **body**, **`.eyebrow`**, **buttons** use **`var(--type-*)`** from **`site-marketing-base.css`** / **`site-chrome.css`**. Page modules override only with **another `--type-*` tier** (documented in the Typography bible). No duplicated longhand family lists or ad-hoc heading `clamp()` outside tokens. |
| **Google Fonts URL** (families + weights) | **`assets/marketing-fonts.css`** | One `@import`. Update **both** this URL and the `--font-*` names in tokens if you switch typefaces. |
| **`<meta name="theme-color">`** | Each `*.html` | Cannot use CSS `var()`. When you change `--theme-color`, mirror the same hex in meta tags (or add a small build step later). |
| **Legacy Webflow `alkyme.css`** | Repo root **`alkyme.css`** | Starts with **`@import`** of **`assets/alkyme-tokens.css`**. Brand-aligned hex (bark, eggshell, forest, moss, dew, cloudy + common alphas) uses **`var(--*)`** / **`rgb(var(--rgb-*) / α)`** / **`color-mix`** — re-apply after Webflow export with **`python3 scripts/align_alkyme_css_brand_tokens.py`**. Webflow/editor chrome (e.g. checkbox **`#3898ec`**) stays literal. |

**Also in tokens:** hex palette, **space-separated `--rgb-*` tuples** (for `rgb(var(--rgb-bark) / 0.12)`), **semantic borders** (`--border-subtle`, `--border-section`, …), **surfaces** (`--surface-newsletter`, `--surface-modal-warm`, `--color-danger`), **motion/layout**, **radii**, **marketing gradients** (`--gradient-*`), **`--scrim-on-media`**, **grid helpers** (`--grid-gap-cards`, `--grid-min-card`), **status chroma** (`--rgb-status-market*`, `--rgb-status-experiment*`), **careers glass stops** (`--rgb-glass-scrim-*`, `--rgb-glass-card-*`), and **dark elevation shadows** (`--shadow-card-on-dark`, `--shadow-card-on-dark-lg`, `--shadow-dialog-dark`).

**Load order (every marketing page):** `preconnect` → **`marketing-fonts.css`** → **`alkyme-tokens.css`** → `site-marketing-base.css` → …

**Downstream CSS** (`site-*.css`, `legal-pages.css`) should:

- Use **`var(--…)`** for colors, borders, shadows, radii, and timing — **no new raw `#hex` or `rgba(r,g,b,…)`** except inside `alkyme-tokens.css`.
- For translucent tints, prefer **`rgb(var(--rgb-*) / α)`** with tuples defined in tokens, or a composed semantic token (e.g. `var(--border-muted)`).
- **Masks** may use **`rgb(var(--rgb-black))`** where a solid mask stop is required.

**Maintenance:** After editing colors in large sheets, run **`python3 scripts/normalize_design_system_css.py`** from the repo root to re-apply rgba→rgb mappings and common border shorthands (keeps modules aligned). After re-exporting **`alkyme.css`** from Webflow, run **`python3 scripts/align_alkyme_css_brand_tokens.py`**. For theme QA, use **`docs/qa-marketing-light-dark.md`**.

**Pages:** Every marketing HTML file loads **`marketing-fonts.css` → `alkyme-tokens.css` → `site-marketing-base.css` → `site-chrome.css` → …** so all sections/modules inherit the same foundation.

---

## Typography

- **Bible:** **`--type-*`** tokens in **`alkyme-tokens.css`** + global rules in **`site-marketing-base.css`** / **`site-chrome.css`** (see **Typography bible** above).
- **Display (editorial):** `var(--type-display-family)` — page/section titles per the taxonomy table; **not** for dialog header titles (**UI** — see **Modal / overlay title**).
- **UI / body:** `var(--type-ui-family)` — body, nav, footer, forms, **modal/dialog header titles** (e.g. **`site-home.css`** `.detail-modal__title`).
- **Eyebrows:** **`.eyebrow`** uses **`--type-eyebrow-*`**; color **`var(--moss)`** / dark **`--accent-on-canvas`**. Band-specific eyebrows may use **`--type-eyebrow-track-wide`** or hero sizes.

---

## Layout

- **Gutters:** `var(--page-gutter)` on `.container` (from **`site-marketing-base.css`**).
- **Wide rail:** `.container--wide` in **`site-home.css`** → `max-width: min(var(--content-wide-max), 100%)`.
- **Sections:** `var(--section-pad-y)` on `.section` (home and others); token is a `clamp()` for vertical rhythm.
- **Card grids (new work):** prefer `gap: var(--grid-gap-cards)` and `minmax(var(--grid-min-card), 1fr)` (see **`design-system-brand.md`** § Grid) so new marketing grids match the documented rhythm without duplicating `clamp()` values.

---

## Vertical Rhythm & Spacing

**Philosophy:** Consistent spacing between text elements creates visual harmony and guides the reader's eye through content. All rhythm tokens use fluid `clamp()` values that scale with viewport size.

### Spacing Tokens (defined in `alkyme-tokens.css`)

| Token | Value | Use |
|-------|-------|-----|
| `--type-h2-band-margin-after` | `0.875rem` (14px) | Space after band `h2` when immediately followed by cards/grid (rare; most h2 → body uses title-to-body-gap below) |
| `--type-band-title-to-body-gap` | `clamp(0.85rem, 2.2vw, 1.2rem)` (14–19px) | **Title → first paragraph**: Gap from section `h2` to opening body/lede text |
| `--section-head-margin-bottom` | `clamp(1.5rem, 4vw, 2.25rem)` (24–36px) | **Section intro → content**: Gap from centered section header block to main content below |
| `--type-band-lede-to-cta-gap` | `clamp(1.35rem, 3.2vw, 1.85rem)` (22–30px) | **Lede → CTA**: Gap from intro paragraph to primary action button |

### Common Rhythm Patterns

**Pattern 1: Section band (most common)**
```html
<section class="section">
  <div class="container">
    <p class="eyebrow">Startup Studio</p>           <!-- Eyebrow -->
    <!-- Gap: eyebrow has margin-bottom (inherited from .eyebrow styles) -->

    <h2>How we work</h2>                             <!-- Title -->
    <!-- Gap: var(--type-band-title-to-body-gap) → 14–19px -->

    <p class="lead">We identify problems...</p>     <!-- Lede -->
    <!-- Gap: var(--type-band-lede-to-cta-gap) → 22–30px -->

    <a href="#" class="button button-primary">Get started</a>  <!-- CTA -->
  </div>
</section>
```

**Spacing breakdown:**
1. **Eyebrow → H2:** Handled by `.eyebrow` `margin-bottom` (typically `0.5rem` / 8px)
2. **H2 → Lede:** `var(--type-band-title-to-body-gap)` = 14–19px
3. **Lede → CTA:** `var(--type-band-lede-to-cta-gap)` = 22–30px

---

**Pattern 2: Centered section header**
```html
<section class="section">
  <div class="container">
    <div class="section-head">
      <h2>Our Principles</h2>
      <p>How we approach every venture...</p>
    </div>
    <!-- Gap: var(--section-head-margin-bottom) → 24–36px -->

    <div class="grid">
      <!-- Principle cards... -->
    </div>
  </div>
</section>
```

**Spacing:** `.section-head` has `margin-bottom: var(--section-head-margin-bottom)` = 24–36px before grid starts.

---

**Pattern 3: Card internal spacing**
```html
<article class="card">
  <h3>Card Title</h3>
  <!-- Gap: h3 margin-bottom (typically 0.5rem / 8px) -->

  <p>Card description text...</p>
  <!-- Gap: paragraph margin-bottom (typically 1rem / 16px if more paragraphs follow) -->

  <a href="#" class="card__cta">Learn more →</a>
</article>
```

**Spacing:** Card-internal spacing is typically **tighter** than band-level spacing:
- **H3 → P:** `0.5rem` (8px) - keeps card compact
- **P → CTA:** `1rem` (16px) - comfortable but not sprawling

---

### Spacing Scale (for component-level adjustments)

When you need manual spacing (margins/padding) that doesn't fit a rhythm token, use the **modular scale**:

| Token | Value | Use |
|-------|-------|-----|
| `--space-xs` | `0.25rem` (4px) | Micro-spacing (icon gaps, tight inline elements) |
| `--space-sm` | `0.5rem` (8px) | **Eyebrow → title**, tight card elements |
| `--space-md` | `1rem` (16px) | Default paragraph spacing, card padding |
| `--space-lg` | `1.5rem` (24px) | Section element spacing |
| `--space-xl` | `2rem` (32px) | Card padding (comfortable), module spacing |
| `--space-2xl` | `3rem` (48px) | Large module gaps |
| `--space-3xl` | `4rem` (64px) | Section breaks |

**Note:** Component library also defines `--alk-space-*` tokens that **map to these values** (see Token System Bridge in REBUILD-CHANGELOG.md).

---

### Line Heights (affect visual rhythm)

Line height creates vertical space **within** multi-line text blocks. Tighter line heights feel compact; looser feels airy.

| Token | Value | Use |
|-------|-------|-----|
| `--type-h1-line` | `1.12` | Tight (large display text needs less leading) |
| `--type-h2-line-tight` | `1.12` | Section titles (serif, tight for impact) |
| `--type-h-ui-line` | `1.22` | UI headings (h3–h6, cards, chrome) |
| `--type-body-line` | `1.6` | **Body text** (comfortable reading) |
| `--type-lead-line` | `1.55` | Lede/intro (slightly tighter than body for elegance) |
| `--type-caption-line` | `1.45` | Small text (needs more leading for readability) |

**Why vary line height?**
- **Large text (h1, h2):** Needs less leading - already has vertical presence
- **Body text:** Needs generous leading (1.6) for comfortable multi-line reading
- **Small text:** Needs more leading (1.45+) to prevent cramped feeling

---

### Usage Guidelines

**DO:**
- Use rhythm tokens (`--type-band-*`, `--section-head-*`) for **band-level** spacing (title → body → CTA)
- Use spacing scale (`--space-*`) for **component-level** padding/margins (cards, modules)
- Let fluid `clamp()` values handle responsiveness (don't override with fixed px at breakpoints)
- Maintain the documented pattern: **Eyebrow → H2 → Lede → CTA**

**DON'T:**
- Hard-code arbitrary margins (`margin-bottom: 23px`) - use a token
- Mix rhythm systems (don't use `--space-xl` for title → body gap; use `--type-band-title-to-body-gap`)
- Override line heights without documenting a new `--type-*` tier
- Stack too many elements without spacing (creates visual clutter)

---

### Quick Reference

**"What spacing do I use for...?"**
- **Section h2 → opening paragraph:** `var(--type-band-title-to-body-gap)`
- **Intro text → CTA button:** `var(--type-band-lede-to-cta-gap)`
- **Centered header block → content below:** `var(--section-head-margin-bottom)`
- **Card h3 → description:** `0.5rem` / `var(--space-sm)` (tight, card-internal)
- **Eyebrow → title:** Handled by `.eyebrow` styles (~8px)
- **Between sections:** `var(--section-pad-y)` (64–96px)
- **Card internal padding:** `var(--space-lg)` to `var(--space-xl)` (24–32px)

---

## Components (use existing classes)

| Need | Use |
|------|-----|
| Primary action | `.button.button-primary` |
| Secondary | `.button.button-secondary` |
| Skip to content | **`.skip-link`** (first child of `<body>`; target **`#main`**) |
| Dark / light | **`#site-theme-toggle`** in the footer (with **`site-theme.js`**) |
| Section label | `.eyebrow` or `__eyebrow` |
| Contact form shell | **`.contact-form-shell`** wrapping the form card |

---

## Liquid glass system

**Base class:** `.glass` (defined in **`site-marketing-base.css`**)

### What it does

Applies the marketing glassmorphism effect: backdrop blur + gradient fill + border + shadow. All visual properties are controlled by **`--glass-marketing-*` tokens** in **`alkyme-tokens.css`**, which automatically remap for dark mode.

### Token-first contract

**Never hard-code glass properties** (blur, gradient, shadow, border) in component CSS. Reference tokens:

| Token | Use |
|-------|-----|
| `--glass-marketing-gradient` | Light gradient (eggshell tones) or dark gradient (bark-adjacent scrims); auto-swaps on `[data-theme="dark"]` |
| `--glass-marketing-border` | Hairline border (dew-tinted light, dew-muted dark) |
| `--glass-marketing-shadow` | Default elevation with inset highlight |
| `--glass-marketing-shadow-hover` | Elevated state for interactive elements |
| `--glass-marketing-shadow-focus` | Focus state with ring shadow |
| `--glass-marketing-shadow-active` | Pressed state (reduced elevation) |
| `--glass-marketing-shadow-stacked` | Softer shadow for layered glass under imagery |
| `--glass-marketing-filter` | `blur(20px) saturate(170%)` on desktop |
| `--glass-marketing-filter-mobile` | `blur(12px) saturate(160%)` for performance on small screens |
| `--glass-marketing-bg-solid` | Fallback solid background when `prefers-reduced-transparency: reduce` |
| `--glass-marketing-disabled-opacity` | `0.5` for disabled interactive glass |
| `--glass-marketing-skeleton-gradient` | Shimmer gradient for loading states |

### Glass modifiers

Use these on `.glass` elements for specific behaviors:

| Modifier | When to use | What it does |
|----------|-------------|--------------|
| `.glass--interactive` | Buttons, clickable cards, links wrapped in glass | Adds hover lift (`translateY(-2px)`), focus ring, active press, disabled state; uses `--glass-transition-all` |
| `.glass--stacked` | Glass layered under imagery (e.g. about pillar cards) | Uses `--glass-marketing-shadow-stacked` for softer elevation |
| `.glass--loading` | Async content placeholder on glass | Shimmer animation with `--glass-marketing-skeleton-gradient`; respects `prefers-reduced-motion` |

**Example:**
```html
<button class="glass glass--interactive">
  <!-- Interactive glass button with hover/focus/active states -->
</button>

<div class="glass glass--stacked">
  <!-- Glass card under a photo -->
</div>

<div class="glass glass--loading">
  <!-- Loading skeleton with shimmer -->
</div>
```

### Performance optimizations

**Built into `.glass`:**
- `contain: paint layout` — isolates repaints for better scroll performance
- Mobile blur reduction via `@media (max-width: 680px)` using `--glass-marketing-filter-mobile`
- `will-change: transform, box-shadow` on `.glass--interactive` (removed after interaction starts)

**Nested glass prevention:**
`.glass .glass` automatically disables blur and uses solid background to prevent double-blur performance hit.

### Accessibility

- **Reduced transparency:** `prefers-reduced-transparency: reduce` removes blur and uses `--glass-marketing-bg-solid`
- **Reduced motion:** `.glass--loading` disables shimmer animation when `prefers-reduced-motion: reduce`
- **Focus visibility:** `.glass--interactive:focus-visible` uses `--focus-ring-on-glass` (dark ring in light mode, light ring in dark mode) with shadow halo for contrast on any background

### Usage guidelines

**DO:**
- Use `.glass` on light-canvas cards (hero, about link cards)
- Add `.glass--interactive` to any clickable glass element
- Let tokens handle all visual properties (gradient, blur, shadow)
- Stack glass under imagery with `.glass--stacked`

**DON'T:**
- Override blur/gradient/shadow inline (change tokens instead)
- Nest glass inside glass for clickable content (performance + visual issue)
- Use glass on already-complex backgrounds (contrast/readability)
- Skip `.glass--interactive` on interactive elements (a11y + UX consistency)

### Related patterns

- **Careers discover tiles:** Use custom `--careers-showcase-glass-*` tokens on `#careers-discover` with vertical moss→forest gradient (different from marketing light glass)
- **Dark video scrims:** Hero and studio tiles use glass buttons on `--bark` stages (see **CTAs** tier 5)
- **About pillar cards:** `.about-featured-card__body.glass` with custom padding (component-level)

---

## Motion & a11y

- **Reveal:** `[data-reveal]` + `.is-visible`; respect `prefers-reduced-motion`.
- **Focus:** Global **`:focus-visible`** in **`site-marketing-base.css`**; buttons also get **`.button:focus-visible`** in **`site-chrome.css`**. Glass elements use **`--focus-ring-on-glass`** for better contrast.
- **Skip link:** Visible on keyboard focus only (off-screen until focused).
- **Modals:** `role="dialog"`, `aria-modal`, Escape, return focus.
- **Touch targets:** All interactive elements meet **`--touch-target-min` (44px)** per WCAG 2.5.5.

---

## Social & SEO meta

Every marketing page should include **`link rel="canonical"`**, **`theme-color`**, **Open Graph** (`og:title`, `og:description`, `og:url`, `og:image`, `og:locale`, …), and **Twitter** card tags. **`scripts/apply_ux_layer.py`** injects them from each file’s `<title>` and `meta name="description"` (idempotent if already present).

Default share image: **`https://alkyme.io/assets/og-default.svg`** — replace with a **1200×630 PNG** for maximum compatibility with Facebook/LinkedIn if needed.

---

## Files per page (load order)

1. **`assets/alkyme-tokens.css`**
2. **`assets/site-marketing-base.css`** — reset, body type, `.container`, `.eyebrow`, global `:focus-visible` (all marketing pages).
3. **`assets/site-chrome.css`** — topbar, buttons, **`.skip-link`**, mobile nav.
4. **Page modules** (as needed):
   - **`site-carousel.css`**, **`site-home.css`**, **`site-about.css`**, **`site-careers.css`**
   - **`site-forms.css`** + **`site-contact.css`** on **`contact.html`**
5. **`assets/site-footer.css`** — footer + language modal.
6. **`assets/legal-pages.css`** — privacy, terms, AI FAQ layout and prose.

**Locales:** English uses `href="assets/…"`; **`es/`** and **`tl/`** use `../assets/…`.

**Locale workflow:** See **`docs/LOCALE.md`**. **`scripts/locale_build.py`** overwrites translated HTML if you run it after localizing.

**Regenerating extracted CSS:** **`scripts/build_shared_css.py`** (carousel/home/about/forms when inline `<style>` exists; careers when present). **`scripts/patch_html_phase_c.py`** wires Phase C links (idempotent). **`scripts/apply_ux_layer.py`** adds marketing base, contact/legal cleanup, meta, skip link, **`main id="main"`** (idempotent).

---

## AI / editor notes

Extend existing BEM-like blocks (`studio-carousel-band__…`, `ventures-band__…`) rather than parallel systems.

See also: `content/README.md`, `content/content-deck.md`, **`assets/content/brand-content-guidelines.md`**, **`assets/content/design-system-brand.md`**.
