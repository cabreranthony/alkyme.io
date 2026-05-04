#!/usr/bin/env python3
"""
Normalize assets/*.css to use alkyme-tokens RGB primitives and semantic vars.
Run from repo root: python3 scripts/normalize_design_system_css.py
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "assets"

FILES = sorted(
    p.name
    for p in ROOT.glob("*.css")
    if p.name != "alkyme-tokens.css" and not p.name.startswith(".")
)

RGBA_PAIRS = [
    ("rgba(4, 13, 18, ", "rgb(var(--rgb-bark) / "),
    ("rgba(4,13,18,", "rgb(var(--rgb-bark) / "),
    ("rgba(24, 61, 61, ", "rgb(var(--rgb-forest) / "),
    ("rgba(24,61,61,", "rgb(var(--rgb-forest) / "),
    ("rgba(147, 177, 166, ", "rgb(var(--rgb-dew) / "),
    ("rgba(147,177,166,", "rgb(var(--rgb-dew) / "),
    ("rgba(255, 249, 240, ", "rgb(var(--rgb-eggshell) / "),
    ("rgba(255,249,240,", "rgb(var(--rgb-eggshell) / "),
    ("rgba(255, 255, 255, ", "rgb(var(--rgb-white) / "),
    ("rgba(255,255,255,", "rgb(var(--rgb-white) / "),
    ("rgba(92, 131, 116, ", "rgb(var(--rgb-moss) / "),
    ("rgba(92,131,116,", "rgb(var(--rgb-moss) / "),
    ("rgba(100, 103, 107, ", "rgb(var(--rgb-ui-muted) / "),
    ("rgba(100,103,107,", "rgb(var(--rgb-ui-muted) / "),
    ("rgba(40, 43, 46, ", "rgb(var(--rgb-ui-strong) / "),
    ("rgba(40,43,46,", "rgb(var(--rgb-ui-strong) / "),
    ("rgba(30, 32, 35, ", "rgb(var(--rgb-ui-ink) / "),
    ("rgba(30,32,35,", "rgb(var(--rgb-ui-ink) / "),
    ("rgba(60, 63, 67, ", "rgb(var(--rgb-ui-surface) / "),
    ("rgba(60,63,67,", "rgb(var(--rgb-ui-surface) / "),
    ("rgba(45, 48, 52, ", "rgb(var(--rgb-ui-surface-hover) / "),
    ("rgba(45,48,52,", "rgb(var(--rgb-ui-surface-hover) / "),
    ("rgba(0, 0, 0, ", "rgb(var(--rgb-black) / "),
    ("rgba(0,0,0,", "rgb(var(--rgb-black) / "),
    ("rgba(16, 24, 40, ", "rgb(var(--rgb-slate) / "),
    ("rgba(16,24,40,", "rgb(var(--rgb-slate) / "),
]

# Hex (whole tokens only; avoid touching url() — skip lines with url(
HEX_SUBS = [
    ("#fff9f0", "var(--eggshell-sky)"),
    ("#040d12", "var(--bark)"),
    ("#183d3d", "var(--forest)"),
    ("#ffffff", "var(--page-bg)"),
    ("#fff", "var(--white)"),
]

# After rgba migration: collapse common borders to semantic tokens
SEMANTIC_SUBS = [
    ("1px solid rgb(var(--rgb-forest) / 0.08)", "var(--border-subtle)"),
    ("1px solid rgb(var(--rgb-forest) / 0.06)", "var(--border-hairline)"),
    ("1px solid rgb(var(--rgb-forest) / 0.1)", "var(--border-muted)"),
    ("1px solid rgb(var(--rgb-forest) / 0.12)", "var(--border-strong)"),
    ("1px solid rgb(var(--rgb-dew) / 0.45)", "var(--border-dew-soft)"),
    ("1px solid rgb(var(--rgb-dew) / 0.35)", "var(--border-dew-muted)"),
    ("0 0 0 3px rgb(var(--rgb-forest) / 0.12)", "var(--focus-glow-forest)"),
]


def process(text: str) -> str:
    for old, new in RGBA_PAIRS:
        text = text.replace(old, new)
    lines = text.splitlines(keepends=True)
    out = []
    for line in lines:
        if "url(" in line and "%23" in line:
            out.append(line)
            continue
        s = line
        for old, new in HEX_SUBS:
            s = s.replace(old, new)
        out.append(s)
    text = "".join(out)
    for old, new in SEMANTIC_SUBS:
        text = text.replace(old, new)
    return text


def main() -> None:
    for name in FILES:
        path = ROOT / name
        raw = path.read_text(encoding="utf-8")
        new = process(raw)
        if new != raw:
            path.write_text(new, encoding="utf-8")
            print("updated", name)
    print("Done.")


if __name__ == "__main__":
    main()
