# Alkymē marketing site — handoff notes

Static **HTML + CSS + small JS** (no bundler). Canonical host in markup is `https://alkyme.io/`; adjust if staging uses another domain.

**Local preview:** from the repo root, `python3 -m http.server 8765 --bind 127.0.0.1` then open **http://127.0.0.1:8765/** (or `http://localhost:8765/`).

## For the next session (AI or human)

1. **Brand and visuals** — Use existing tokens in `assets/alkyme-tokens.css` and patterns in `docs/style-guide.md`. Do **not** adopt alternate “brief” color systems unless the stakeholder explicitly changes direction.
2. **Copy stance** — Positioning blends **venture studio** + **labs / R&D** + **AI** narrative. ChronoCore copy should **hint** at future licensing or products **without** hard commercial claims (no SKU lists, unverified revenue, or “buy now” tone). ChronoCore page and home modal **Status** slide are aligned to that.
3. **Locales** — Recent structural and copy work prioritized **English only** (`/` root). **`es/`** and **`tl/`** mirrors may lag (e.g. home sections, new blocks). See `docs/LOCALE.md` and `scripts/locale_build.py`: running the script **overwrites** locale HTML with EN structure—only use when you intend to re-sync then re-translate.
4. **Nav order (EN)** — Top bar and footer **Company** block: **About → AI → Careers → Contact** (no **Labs** nav item; the public hub is intentionally low-profile). Keep footer and header in sync when adding pages.
5. **Labs** — **`labs/index.html`** is a **coming soon** placeholder (`noindex`); the previous hub markup is archived at **`archive/labs-hub-index-full.html`**. **Public lab deep dive:** `labs/chronocore/` (linked from About where relevant, not from a hub grid). Case-study-style lab narratives (Relay, Fieldwork, Vantage) and the home **`venture-relay`** modal live under **`archive/case-studies/`** (see that folder’s README to restore). ChronoCore CSS: `assets/site-lab-chronocore.css`; hub styling when restored: `assets/site-labs-hub.css`.
6. **Home (`index.html`)** — Venture-studio framing; hero primary CTA scrolls to **`#how-studio-runs`**; **`#how-studio-runs`** carousel cards have **no** “Learn more” row controls on the live page (archived: **`archive/studio-carousel-home-cta-buttons.html`** — `button` only, no links). **`#ventures`** band removed—**`archive/case-studies/home-section-ventures.html`**. **`#what-we-do`** first two tiles use **`studio-loop`** modal **`button`**s. **`#ai-infra`** band in `assets/site-home.css`. Modal **`DATA`**: **`studio-loop`**, **`venture-chronocore`** (EN).
7. **Deferred / cancelled (conversation context)** — Cookie consent banner, GA4 consent gating, and “Tagalog → Filipino” label rename were **cancelled** in task tracking; do not assume they exist in the repo. A backlog note may live in `docs/backlog-consent-ga4.md`.
8. **Archive** — `archive/ventures-band-v1.html`, `archive/studio-carousel-home-cta-buttons.html`, and **`archive/labs-hub-index-full.html`** are snapshots only; not wired into the live site.

## Repo layout (high level)

| Path | Role |
|------|------|
| `index.html`, `about.html`, `ai.html`, `careers.html`, `contact.html`, `privacy.html`, `terms.html` | EN marketing + legal |
| `help/index.html` | Help Center (searchable KB); footer link site-wide. Same files serve **`https://alkyme.io/help/`** and, if configured on Vercel, **`https://help.alkyme.io/`** (see `vercel.json` host rewrites). |
| `labs/` | Labs hub placeholder (`index.html`) + ChronoCore lab page |
| `archive/case-studies/` | Archived Relay/Fieldwork/Vantage HTML + `venture-relay` modal snippet (not deployed) |
| `archive/studio-carousel-home-cta-buttons.html` | Archived home carousel “Learn more” `button` blocks (not deployed) |
| `es/`, `tl/` | Locale mirrors (hreflang; paths differ) |
| `assets/` | CSS, JS, fonts, images, tokens |
| `docs/` | Style guide, locale notes, backlog notes |
| `scripts/locale_build.py` | Optional EN → es/tl structure sync |

## Scripts and assets

- **Theme**: `assets/site-theme.js` + `data-theme` on `<html>` (inline snippet in each page head).
- **Language picker**: `assets/site-lang.js` + footer/topbar triggers.
- **FAQ**: `assets/faq-accordion.js` on `ai.html`.
- **Help Center**: `help/index.html` + `assets/site-help.css` + `assets/site-help.js` (client-side search and category filters). **`vercel.json`** maps **`https://help.alkyme.io/`** (path `/` only) to `/help/index.html` so `/assets/…` still serves from the project root; add **`help.alkyme.io`** under the Vercel project **Domains** and point DNS (CNAME to `cname.vercel-dns.com` or the value Vercel shows).


## Quick checks after edits

- Broken `assets/` vs `../assets/` in `es/` and `tl/` if you touch those trees.
- New home sections need matching rules in `assets/site-home.css` if they introduce new BEM-style blocks.
- Grep for **`DETAIL_MODALS`** if ventures carousel copy and modal slides should stay consistent.

---

*Last snapshot intent: Labs hub set to coming soon (hub archived); Labs removed from global nav/footer; ChronoCore remains public without hub breadcrumb link.*
