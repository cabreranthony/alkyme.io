#!/usr/bin/env python3
"""
Rewrite brand-aligned hex literals in repo-root `alkyme.css` to use design tokens.

- Prepends `@import` of `assets/alkyme-tokens.css` (idempotent).
- Removes the Webflow duplicate `:root` brand block (brand vars now come from tokens + `--transparent` in tokens).
- Replaces bark / eggshell / forest / moss / dew / cloudy literals and 8-digit alpha variants with `var(--*)` or `rgb(var(--rgb-*) / α)`.

Does not touch Webflow chrome colors (e.g. #3898ec) or arbitrary neutrals.

Run from repo root:
  python3 scripts/align_alkyme_css_brand_tokens.py
"""

from __future__ import annotations

from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
TARGET = REPO / "alkyme.css"

IMPORT_MARKER = 'assets/alkyme-tokens.css'
HEADER = f"""/* Legacy Webflow export: design tokens loaded for brand vars + dark mode. */
@import url("{IMPORT_MARKER}");

"""

# Webflow duplicate :root (removed after tokens define --transparent + palette).
WEBFLOW_DUP_ROOT = """:root {
  --transparent: transparent;
  --bark: #040d12;
  --cloudy-day: #f4f4f4;
  --eggshell-sky: #fff9f0;
  --forest: #183d3d;
  --moss: #5c8374;
  --dew: #93b1a6;
}

"""

# Longest keys first so 8-digit hex are not partially eaten.
REPLACEMENTS: list[tuple[str, str]] = [
    # Bark + alpha (0xYY / 255)
    ("#040d1233", "rgb(var(--rgb-bark) / 0.2)"),
    ("#040d124d", "rgb(var(--rgb-bark) / 0.3)"),
    ("#040d1266", "rgb(var(--rgb-bark) / 0.4)"),
    ("#040d1280", "rgb(var(--rgb-bark) / 0.5)"),
    ("#040d1299", "rgb(var(--rgb-bark) / 0.6)"),
    ("#040d12ad", "rgb(var(--rgb-bark) / 0.68)"),
    ("#040d12cc", "rgb(var(--rgb-bark) / 0.8)"),
    ("#040d12", "var(--bark)"),
    # Eggshell + alpha
    ("#fff9f026", "rgb(var(--rgb-eggshell) / 0.15)"),
    ("#fff9f040", "rgb(var(--rgb-eggshell) / 0.25)"),
    ("#fff9f066", "rgb(var(--rgb-eggshell) / 0.4)"),
    ("#fff9f080", "rgb(var(--rgb-eggshell) / 0.5)"),
    ("#fff9f099", "rgb(var(--rgb-eggshell) / 0.6)"),
    ("#fff9f01a", "rgb(var(--rgb-eggshell) / 0.1)"),
    ("#fff9f0", "var(--eggshell-sky)"),
    # Forest + alpha
    ("#183d3de6", "rgb(var(--rgb-forest) / 0.9)"),
    ("#183d3d99", "rgb(var(--rgb-forest) / 0.6)"),
    ("#183d3d33", "rgb(var(--rgb-forest) / 0.2)"),
    ("#183d3d26", "rgb(var(--rgb-forest) / 0.15)"),
    ("#183d3d1a", "rgb(var(--rgb-forest) / 0.1)"),
    ("#183d3d", "var(--forest)"),
    # Moss (no alpha variants in export)
    ("#5c8374", "var(--moss)"),
    # Dew + alpha
    ("#93b1a699", "rgb(var(--rgb-dew) / 0.6)"),
    ("#93b1a61a", "rgb(var(--rgb-dew) / 0.1)"),
    ("#93b1a6", "var(--dew)"),
    # Cloudy (no --rgb-cloudy; theme-aware mix for alpha)
    ("#f4f4f480", "color-mix(in srgb, var(--cloudy-day) 50%, transparent)"),
    ("#f4f4f4", "var(--cloudy-day)"),
]


def main() -> None:
    text = TARGET.read_text(encoding="utf-8")

    if IMPORT_MARKER not in text[:800]:
        text = HEADER + text

    if WEBFLOW_DUP_ROOT in text:
        text = text.replace(WEBFLOW_DUP_ROOT, "", 1)

    for old, new in REPLACEMENTS:
        text = text.replace(old, new)

    TARGET.write_text(text, encoding="utf-8")
    print("Updated", TARGET.relative_to(REPO))


if __name__ == "__main__":
    main()
