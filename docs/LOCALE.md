# Locale mirrors (`es/` and `tl/`)

## What `scripts/locale_build.py` does

From the **English** HTML files at the repo root, it:

- Injects hreflang `<link rel="alternate">` tags into each root file (if missing).
- Overwrites **`es/*.html`** and **`tl/*.html`** by copying the English source, rewriting `assets/` → `../assets/`, and setting `<html lang>`.

## Important

Running `locale_build.py` **replaces the entire body** of every locale file with the English version. Any **translated copy** in `es/` or `tl/` will be lost unless you restore it from version control or re-translate.

Use the script when you intentionally want to **sync structure** (new sections, meta tags, markup) from English and then re-apply translations—or maintain locales by **editing `es/` and `tl/` by hand** and avoid running the script on those trees.

## New shared CSS files

`rewrite_assets_for_subfolder` already rewrites every `href="assets/…"` link, including:

- `site-marketing-base.css`
- `site-contact.css`
- `og-default.svg` (absolute URLs in meta are unchanged)

No change is required in `locale_build.py` for new asset filenames under `assets/`.
