#!/usr/bin/env python3
"""Wire Phase C shared CSS into HTML (en + es + tl). Safe to re-run: skips pages already linked."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def patch_index(path: Path, prefix: str) -> None:
    t = path.read_text(encoding="utf-8")
    if "site-home.css" in t:
        return
    rep = (
        f'  <link rel="stylesheet" href="{prefix}site-chrome.css">\n'
        f'  <link rel="stylesheet" href="{prefix}site-carousel.css">\n'
        f'  <link rel="stylesheet" href="{prefix}site-home.css">'
    )
    t2, n = re.subn(
        r'<link rel="stylesheet" href="' + re.escape(prefix) + r'site-chrome\.css">\s*<style>.*?</style>',
        rep,
        t,
        count=1,
        flags=re.DOTALL,
    )
    if n != 1:
        raise SystemExit(f"index patch failed ({n}) {path}")
    path.write_text(t2, encoding="utf-8")


def patch_about(path: Path, prefix: str) -> None:
    t = path.read_text(encoding="utf-8")
    if "site-about.css" in t:
        return
    rep = (
        f'  <link rel="stylesheet" href="{prefix}site-chrome.css">\n'
        f'  <link rel="stylesheet" href="{prefix}site-carousel.css">\n'
        f'  <link rel="stylesheet" href="{prefix}site-about.css">'
    )
    t2, n = re.subn(
        r'<link rel="stylesheet" href="' + re.escape(prefix) + r'site-chrome\.css">\s*<style>.*?</style>',
        rep,
        t,
        count=1,
        flags=re.DOTALL,
    )
    if n != 1:
        raise SystemExit(f"about patch failed ({n}) {path}")
    path.write_text(t2, encoding="utf-8")


def patch_contact(path: Path, prefix: str) -> None:
    t = path.read_text(encoding="utf-8")
    if "site-forms.css" in t:
        return
    insert = (
        f'  <link rel="stylesheet" href="{prefix}site-chrome.css">\n'
        f'  <link rel="stylesheet" href="{prefix}site-forms.css">\n'
        "  <style>"
    )
    t2, n = re.subn(
        r'<link rel="stylesheet" href="' + re.escape(prefix) + r'site-chrome\.css">\s*<style>',
        insert,
        t,
        count=1,
    )
    if n != 1:
        raise SystemExit(f"contact chrome patch failed ({n}) {path}")

    form_chunk = re.compile(
        r"\n    \.contact-form \{.*?\n    #form-ack \{[^}]+\}\n",
        re.DOTALL,
    )
    t3, n2 = form_chunk.subn("\n", t2, count=1)
    if n2 != 1:
        raise SystemExit(f"contact form strip failed ({n2}) {path}")
    path.write_text(t3, encoding="utf-8")


def patch_careers(path: Path, prefix: str) -> None:
    t = path.read_text(encoding="utf-8")
    if "site-careers.css" in t:
        return
    rep = (
        f'  <link rel="stylesheet" href="{prefix}site-chrome.css">\n'
        f'  <link rel="stylesheet" href="{prefix}site-careers.css">'
    )
    t2, n = re.subn(
        r'<link rel="stylesheet" href="' + re.escape(prefix) + r'site-chrome\.css">\s*<style>.*?</style>',
        rep,
        t,
        count=1,
        flags=re.DOTALL,
    )
    if n != 1:
        raise SystemExit(f"careers patch failed ({n}) {path}")
    path.write_text(t2, encoding="utf-8")


def main() -> None:
    patch_index(ROOT / "index.html", "assets/")
    patch_index(ROOT / "es" / "index.html", "../assets/")
    patch_index(ROOT / "tl" / "index.html", "../assets/")

    patch_about(ROOT / "about.html", "assets/")
    patch_about(ROOT / "es" / "about.html", "../assets/")
    patch_about(ROOT / "tl" / "about.html", "../assets/")

    patch_contact(ROOT / "contact.html", "assets/")
    patch_contact(ROOT / "es" / "contact.html", "../assets/")
    patch_contact(ROOT / "tl" / "contact.html", "../assets/")

    patch_careers(ROOT / "careers.html", "assets/")
    patch_careers(ROOT / "es" / "careers.html", "../assets/")
    patch_careers(ROOT / "tl" / "careers.html", "../assets/")

    print("Phase C HTML wiring OK (index, about, contact, careers × en/es/tl)")


if __name__ == "__main__":
    main()
