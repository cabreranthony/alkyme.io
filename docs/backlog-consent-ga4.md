# Backlog: cookie consent banner + GA4

Reference UX: bottom-fixed bar (not a centered modal unless we later add one). Align with **`alkyme-tokens.css`**, **`site-chrome.css`**, a11y rules in **`alkyme-marketing-site.mdc`**, and **`alkyme-backend-integrations-gate.mdc`** when touching third-party scripts.

---

## 1. Consent UI (bottom banner)

- [ ] **Markup:** Landmark (`role="region"` + `aria-label`) or `dialog` if we need modal behavior; live region for screen reader on first show.
- [ ] **Placement:** Fixed bottom, safe-area insets, above footer on small viewports; z-index above page chrome, below language overlay if both exist.
- [ ] **Content:** Short copy + links to **`privacy.html`** (and **`terms.html`** if Terms reference cookies/analytics). Match brand typography (**UI** sans, token colors).
- [ ] **Actions:** Primary **Agree** / optional **Essential only** or **Reject non-essential** if we adopt a stricter GDPR-style pattern (product decision).
- [ ] **Persistence:** `localStorage` key (e.g. `alkyme-consent-v1`) with value + timestamp; hide banner when set; respect **Do Not Track** / **Global Privacy Control** only if we explicitly support (document choice).
- [ ] **i18n:** Mirror strings in **`es/`** and **`tl/`** pages + any shared JS message map (like **`site-lang.js`** pattern).

---

## 2. GA4 — what happens on **Agree**

Choose one strategy (recommend **Consent Mode v2** if GA stays in the page snippet at all):

| Approach | On Agree | Before Agree |
|----------|----------|----------------|
| **A. Deferred load (simplest)** | Inject `gtag.js` + `config` with Measurement ID | No GA script in DOM |
| **B. Consent Mode v2 (Google)** | `gtag('consent', 'update', { analytics_storage: 'granted', ... })` | Snippet runs with `denied` defaults first |

- [ ] **Never** send hits before consent if we market EU/UK visitors.
- [ ] Store **Measurement ID** only via hosting inject / build placeholder — **not** hardcoded secrets in repo (see integrations gate).
- [ ] **QA:** Accept → network shows `google-analytics.com` / `googletagmanager.com`; decline → no analytics requests; reload → banner stays dismissed.

---

## 3. Engineering tasks (checklist)

- [ ] Add **`assets/site-consent.js`** (or extend a small module): read storage, show/hide bar, dispatch `alkyme-consent-changed` for other scripts.
- [ ] Load script on all marketing pages (after tokens; defer).
- [ ] If using GTM: document container vs gtag; single owner of consent updates.
- [ ] Update **Privacy** copy if we add GA4 (what’s collected, retention, opt-out).
- [ ] Run **ship pipeline** + **backend integrations gate** before merging.

---

## Open decisions (product / legal)

- Exact wording and whether **Reject** or **Manage** is required for jurisdictions you care about.
- Whether Alkymē needs **Consent Mode** + Ads tags later (affects default consent map).
