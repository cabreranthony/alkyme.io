# Marketing site — light / dark QA checklist

Use after token refactors, **`scripts/normalize_design_system_css.py`**, **`scripts/align_alkyme_css_brand_tokens.py`**, or theme-related changes.

## Setup

1. Serve the repo root (paths assume CSS under `assets/`). Example: `python3 -m http.server 8765` then open `http://127.0.0.1:8765/index.html`.
2. Clear or set **`localStorage["alkyme-theme"]`** as needed: DevTools → Application → Local Storage. Empty key = follow **`prefers-color-scheme`** until the footer toggle is used.
3. Hard refresh (**Cmd+Shift+R**) when verifying CSS.

## Global (every page)

- [ ] Footer **theme toggle** (moon/sun): switches **`html[data-theme="dark"]`**, no flash of wrong theme on reload (inline head script).
- [ ] **Logo** on non-home pages: readable on frosted topbar in **light** and **dark** (`site-chrome.css` filter on dark).
- [ ] **Focus**: keyboard focus ring visible on primary nav and buttons (`--focus-ring`).
- [ ] **Language control** opens/closes; no layout break in dark.

## Per route (light then dark)

For each URL, scan **hero**, **first content band**, **footer**, and any **modal** / **carousel** on that page.

| Page | URL(s) |
|------|--------|
| Home | `index.html`, `es/index.html`, `tl/index.html` |
| Careers | `careers.html`, `es/careers.html`, `tl/careers.html` |
| About | `about.html`, `es/about.html`, `tl/about.html` |
| Contact | `contact.html`, … |
| Help | `help.html`, … |
| Labs hub | `labs/index.html` (and locales if present) |
| Lab (e.g. ChronoCore) | `labs/chronocore.html`, … |
| Legal | `privacy.html`, `terms.html`, … |

**Home-specific:** hero video controls, ventures cards + **detail modal**, newsletter band SVG blobs, studio carousel.

**Careers-specific:** `#careers-discover` sheet, glass tiles, testimonial carousel arrows.

**Post-normalizer pass:** pay extra attention to **`site-home.css`**, **`site-careers.css`**, **`site-help.css`** modules (recent normalize targets).

## Legacy `alkyme.css` (if you ship it)

- [ ] Page that links **`alkyme.css`** still resolves **`@import url("assets/alkyme-tokens.css")`** (same origin, correct folder depth).
- [ ] Brand surfaces respond to **dark** (tokens drive bark / eggshell / forest / moss / dew / cloudy).
- [ ] After a Webflow re-export, re-run **`python3 scripts/align_alkyme_css_brand_tokens.py`**.

## Pass / fail

Record browser + OS, date, and any **screenshot + selector** for failures. Prefer fixing **tokens** or **shared module CSS** over page-local hacks.
