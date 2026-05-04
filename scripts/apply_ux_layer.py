#!/usr/bin/env python3
"""
Apply marketing base CSS, contact/legal shell cleanup, skip link, main#id, canonical + OG/Twitter meta.
Run from repo root: python3 scripts/apply_ux_layer.py
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKIP_LINE = '  <a class="skip-link" href="#main">Skip to main content</a>\n'
OG_IMAGE = "https://alkyme.io/assets/og-default.svg"


def asset_prefix(path: Path) -> str:
    return "../assets/" if path.parent.name in ("es", "tl") else "assets/"


def ensure_marketing_base(html: str, prefix: str) -> str:
    if "site-marketing-base.css" in html:
        return html
    needle = f'<link rel="stylesheet" href="{prefix}alkyme-tokens.css">'
    if needle not in html:
        raise SystemExit(f"Missing tokens link: {prefix}")
    return html.replace(
        needle,
        needle + f'\n  <link rel="stylesheet" href="{prefix}site-marketing-base.css">',
        1,
    )


def strip_style_block(html: str) -> str:
    return re.sub(r"\n  <style>.*?</style>\n", "\n", html, count=1, flags=re.DOTALL)


def patch_contact_head(html: str, prefix: str) -> str:
    if "<style>" in html:
        html = strip_style_block(html)
    if "site-contact.css" in html:
        return html
    needle = f'<link rel="stylesheet" href="{prefix}site-forms.css">'
    ins = (
        needle
        + f'\n  <link rel="stylesheet" href="{prefix}site-contact.css">'
    )
    if needle not in html:
        raise SystemExit("contact: missing site-forms link")
    return html.replace(needle, ins, 1)


def patch_legal_head(html: str) -> str:
    if "<style>" in html:
        return strip_style_block(html)
    return html


def canonical_for(rel: Path) -> str:
    parts = rel.parts
    if len(parts) == 1:
        fname, loc = parts[0], ""
    else:
        fname, loc = parts[1], f"{parts[0]}/"
    base = "https://alkyme.io/"
    if fname == "index.html":
        return base + loc if loc else base
    return base + loc + fname


def og_locale(html: str) -> str:
    m = re.search(r'<html\s+lang="([^"]+)"', html, re.I)
    if not m:
        return "en_US"
    lang = m.group(1).lower()
    if lang.startswith("es"):
        return "es_ES"
    if lang.startswith("tl"):
        return "fil_PH"
    return "en_US"


def inject_meta(html: str, rel: Path) -> str:
    if 'rel="canonical"' in html:
        return html
    dm = re.search(
        r'(<meta\s+name="description"\s+content="[^"]*"\s*>)', html, re.I
    )
    tm = re.search(r"<title>([^<]*)</title>", html, re.I)
    if not dm or not tm:
        return html
    title = tm.group(1).strip()
    canon = canonical_for(rel)
    loc = og_locale(html)
    block = f"""
  <link rel="canonical" href="{canon}">
  <meta name="theme-color" content="#040d12">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Alkymē">
  <meta property="og:locale" content="{loc}">
  <meta property="og:title" content="{escape_attr(title)}">
  <meta property="og:description" content="{escape_attr(dm.group(0))}">
"""
    # fix og:description - need content from description meta
    desc_m = re.search(r'name="description"\s+content="([^"]*)"', html, re.I)
    desc = escape_attr(desc_m.group(1)) if desc_m else ""
    block = f"""
  <link rel="canonical" href="{canon}">
  <meta name="theme-color" content="#040d12">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Alkymē">
  <meta property="og:locale" content="{loc}">
  <meta property="og:title" content="{escape_attr(title)}">
  <meta property="og:description" content="{desc}">
  <meta property="og:url" content="{canon}">
  <meta property="og:image" content="{OG_IMAGE}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{escape_attr(title)}">
  <meta name="twitter:description" content="{desc}">
"""
    return html.replace(dm.group(1), dm.group(1) + block, 1)


def escape_attr(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace('"', "&quot;")
        .replace("<", "&lt;")
    )


def inject_skip(html: str) -> str:
    if "skip-link" in html:
        return html
    return re.sub(r"(<body[^>]*>\n)", r"\1" + SKIP_LINE, html, count=1)


def inject_main_id(html: str) -> str:
    if re.search(r'<main[^>]*\bid="main"', html):
        return html
    m = re.search(r"<main\b[^>]*>", html)
    if not m:
        return html
    tag = m.group(0)
    if "id=" in tag:
        return html
    new = tag.replace("<main", '<main id="main"', 1)
    return html[: m.start()] + new + html[m.end() :]


def patch_contact_body(html: str) -> str:
    if "page-contact" not in html:
        html = re.sub(r"<body>\n", '<body class="page-contact">\n', html, count=1)
    if "contact-form-shell" in html:
        return html
    html = html.replace(
        '        <p id="form-ack"',
        '        <div class="contact-form-shell">\n        <p id="form-ack"',
        1,
    )
    html = html.replace(
        "</form>\n      </div>\n    </section>",
        "</form>\n        </div>\n      </div>\n    </section>",
        1,
    )
    return html


def process(path: Path) -> None:
    rel = path.relative_to(ROOT)
    text = path.read_text(encoding="utf-8")
    prefix = asset_prefix(path)

    text = ensure_marketing_base(text, prefix)

    if path.name == "contact.html":
        text = patch_contact_head(text, prefix)
        text = patch_contact_body(text)

    if path.name in ("privacy.html", "terms.html", "ai.html"):
        text = patch_legal_head(text)

    text = inject_meta(text, rel)
    text = inject_skip(text)
    text = inject_main_id(text)

    path.write_text(text, encoding="utf-8")


def main() -> None:
    for folder in [ROOT, ROOT / "es", ROOT / "tl"]:
        if not folder.is_dir():
            continue
        for path in sorted(folder.glob("*.html")):
            process(path)
    print("Applied UX layer to all *.html (en, es, tl)")


if __name__ == "__main__":
    main()
