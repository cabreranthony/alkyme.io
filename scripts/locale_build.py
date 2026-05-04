#!/usr/bin/env python3
"""
Generate locale mirrors under es/ and tl/: fix asset paths, set <html lang>,
inject hreflang alternates on all language variants. Run from repo root:
  python3 scripts/locale_build.py

Warning: overwrites es/*.html and tl/*.html from English sources — translated
copy is lost unless you re-apply it. See docs/LOCALE.md.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = [
    "index.html",
    "about.html",
    "careers.html",
    "contact.html",
    "privacy.html",
    "terms.html",
    "ai.html",
]
ORIGIN = "https://alkyme.io"
VIEWPORT_MARK = '<meta name="viewport" content="width=device-width, initial-scale=1">'


def hreflang_links(filename: str) -> str:
    """Same alternates on every variant; x-default → English URL."""
    return f"""  <!-- hreflang: set canonical host in production if not alkyme.io -->
  <link rel="alternate" hreflang="en" href="{ORIGIN}/{filename}">
  <link rel="alternate" hreflang="es" href="{ORIGIN}/es/{filename}">
  <link rel="alternate" hreflang="tl" href="{ORIGIN}/tl/{filename}">
  <link rel="alternate" hreflang="x-default" href="{ORIGIN}/{filename}">
"""


def inject_hreflang(html: str, filename: str) -> str:
    if 'rel="alternate" hreflang="en"' in html:
        return html
    if VIEWPORT_MARK not in html:
        raise SystemExit(f"Missing viewport in {filename}")
    block = hreflang_links(filename)
    return html.replace(VIEWPORT_MARK, VIEWPORT_MARK + "\n" + block, 1)


def rewrite_assets_for_subfolder(html: str) -> str:
    html = html.replace('href="assets/', 'href="../assets/')
    html = html.replace("href='assets/", "href='../assets/")
    html = html.replace('src="assets/', 'src="../assets/')
    html = html.replace("src='assets/", "src='../assets/")
    html = html.replace('"assets/', '"../assets/')
    html = html.replace("'assets/", "'../assets/")
    return html


def set_html_lang(html: str, lang: str) -> str:
    return re.sub(r"<html\s+lang=\"[^\"]*\"", f'<html lang="{lang}"', html, count=1, flags=re.I)


def main() -> None:
    for name in PAGES:
        path = ROOT / name
        text = path.read_text(encoding="utf-8")
        text = inject_hreflang(text, name)
        path.write_text(text, encoding="utf-8")

    for loc, lang in ("es", "es"), ("tl", "tl"):
        d = ROOT / loc
        d.mkdir(exist_ok=True)
        for name in PAGES:
            src = (ROOT / name).read_text(encoding="utf-8")
            out = rewrite_assets_for_subfolder(src)
            out = set_html_lang(out, lang)
            (d / name).write_text(out, encoding="utf-8")
        print(f"wrote {loc}/*.html ({len(PAGES)} files)")


if __name__ == "__main__":
    main()
