#!/usr/bin/env python3
"""Regenerate shared marketing CSS from HTML sources.

- **Carousel / home / about / forms:** runs only while `index.html` and `about.html`
  still contain an inline `<style>` (initial migration). After externalization, edit
  `assets/site-*.css` directly or temporarily restore inline blocks.
- **Careers:** runs while `careers.html` still has `<style>`.

Run from repo root: python3 scripts/build_shared_css.py"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def extract_style(html: str) -> str:
    m = re.search(r"<style>\s*\n(.*?)\n  </style>", html, re.DOTALL)
    if not m:
        raise SystemExit("no <style> block found")
    return m.group(1)


def dedent_four(s: str) -> str:
    lines = []
    for line in s.splitlines():
        if line.startswith("    "):
            lines.append(line[4:])
        else:
            lines.append(line)
    return "\n".join(lines) + "\n"


def extract_careers_css() -> None:
    html = (ROOT / "careers.html").read_text(encoding="utf-8")
    if "<style>" not in html:
        print("Careers: skip (no inline <style>)")
        return
    st = extract_style(html)
    (ROOT / "assets" / "site-careers.css").write_text(
        "/* Careers page layout and sections. */\n\n" + dedent_four(st),
        encoding="utf-8",
    )
    print("Wrote assets/site-careers.css")


def main() -> None:
    index_html = (ROOT / "index.html").read_text(encoding="utf-8")
    about_html = (ROOT / "about.html").read_text(encoding="utf-8")
    contact_html = (ROOT / "contact.html").read_text(encoding="utf-8")

    if (
        "<style>" in index_html
        and "<style>" in about_html
        and "<style>" in contact_html
    ):
        idx_style = extract_style(index_html)
        ab_style = extract_style(about_html)
        ct_style = extract_style(contact_html)

        ca_start = ab_style.index("    /* Hero carousel: full viewport")
        ca_end = ab_style.index("    .about-after-carousel {")
        about_carousel = ab_style[ca_start:ca_end].rstrip() + "\n"

        st_start = idx_style.index("    /* Operating-model band:")
        st_end = idx_style.index("    .grid-3 {", st_start)
        studio_block = idx_style[st_start:st_end].rstrip() + "\n"

        dup_start = studio_block.index("    .about-carousel-controls {")
        dup_end = studio_block.index("    .studio-carousel-band__rail-wrap {", dup_start)
        studio_trimmed = (studio_block[:dup_start] + studio_block[dup_end:]).rstrip() + "\n"

        carousel_css = (
            "/* Shared: About hero carousel + home operating-model track. "
            "Load after site-chrome. */\n\n"
            + dedent_four(about_carousel)
            + "\n"
            + dedent_four(studio_trimmed)
        )
        (ROOT / "assets" / "site-carousel.css").write_text(carousel_css, encoding="utf-8")

        home_style = idx_style[:st_start] + idx_style[st_end:]
        (ROOT / "assets" / "site-home.css").write_text(dedent_four(home_style), encoding="utf-8")

        ab_pre = ab_style[:ca_start]
        ab_post = ab_style[ca_end:]
        about_remainder = ab_pre + ab_post
        (ROOT / "assets" / "site-about.css").write_text(dedent_four(about_remainder), encoding="utf-8")

        fm_start = ct_style.index("    .contact-form {")
        fm_end = ct_style.index("    footer {", fm_start)
        forms = ct_style[fm_start:fm_end].rstrip() + "\n"
        (ROOT / "assets" / "site-forms.css").write_text(
            "/* Contact form fields — load on contact pages. */\n\n" + dedent_four(forms),
            encoding="utf-8",
        )
        print("Wrote site-carousel.css, site-home.css, site-about.css, site-forms.css")
    else:
        print("Skip carousel/home/about/forms (index/about/contact already externalized)")

    extract_careers_css()


if __name__ == "__main__":
    main()
