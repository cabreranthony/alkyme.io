# Alkymē site style guide

Living reference for the marketing HTML pages. **Canonical tokens** live in each page’s `:root` block (or align `about.html` / `contact.html` / `careers.html` with these names). This doc explains intent and patterns—don’t duplicate hex values here when they already exist in CSS.

---

## Brand palette (tokens)

| Token | Role |
|--------|------|
| `--bark` | Near-black text, primary dark UI, hero canvas |
| `--forest` | Secondary text, links, emphasis on light backgrounds |
| `--moss` | Hover / active accents |
| `--dew` | Borders, dividers, soft accents |
| `--page-bg` | Default white canvas |
| `--eggshell-sky` | Warm light surfaces, text on dark buttons |
| `--cloudy-day` | Alternate section background (`section--cloud`) |

**Rule:** Prefer `var(--…)` over raw hex in new CSS.

---

## Typography

- **Headings (editorial):** Libre Baskerville — `h1`, `h2`, `h3` in the global sheet.
- **UI / marketing sans:** Source Sans 3 — eyebrow labels, carousel headings, ventures band, modals, careers title. Applied via `font-family: "Source Sans 3", …` on specific components.
- **Eyebrows:** Uppercase, small, letter-spaced, `var(--forest)` or muted variant per component.

---

## Layout

- **Gutters:** `var(--page-gutter)` horizontal padding on `.container`.
- **Wide rail:** `.container--wide` → `max-width: min(1240px, 100%)`.
- **Sections:** `.section` vertical padding `clamp(4rem, 10vw, 5.5rem)` unless a band overrides (e.g. hero, careers).
- **No full-width “module” rules** between major sections (borders between bands were removed on purpose).

---

## Components (use existing classes)

| Need | Use |
|------|-----|
| Primary action | `.button.button-primary` |
| Secondary | `.button.button-secondary` |
| Pill shape | add `.button--pill` |
| Text link in copy | `.text-link` where defined |
| Section label | `.eyebrow` or component-specific `__eyebrow` |
| Card surface | `.card`, `.why-card`, `.studio-box`, etc. — match sibling sections |

Don’t introduce a third button style without updating this doc and the CSS.

---

## Imagery

- Prefer **descriptive `alt`** for meaningful images; empty `alt` only for decorative cases.
- Remote images: Unsplash URLs with `auto=format&fit=crop` params as currently used; long-term consider **`assets/`** for stability.
- Hero video: external sources in `index.html`; poster for reduced motion / loading.

---

## Motion & a11y

- **Reveal:** `[data-reveal]` + `.is-visible`; respect `prefers-reduced-motion` (script adds visible state without animation).
- **Focus:** Visible focus rings on interactive elements (`:focus-visible`); forest-colored outlines on custom controls.
- **Modals:** `role="dialog"`, `aria-modal`, labelled title, Escape to close, return focus to trigger.

---

## Files per page

| Page | Primary stylesheet location |
|------|-----------------------------|
| Home | `<style>` in `index.html` |
| About | `<style>` in `about.html` |
| Contact | `<style>` in `contact.html` |
| Careers | `<style>` in `careers.html` |

When tokens diverge between pages, consider extracting a shared `assets/site.css` in a later build step.

---

## AI / editor notes

When changing layout or new components: **match class names and variables already on the page**; extend existing BEM-like blocks (`studio-carousel-band__…`, `ventures-band__…`) rather than inventing parallel systems.

See also: `content/README.md` and `content/content-deck.md` for copy workflow.
