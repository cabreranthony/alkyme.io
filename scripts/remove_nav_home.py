#!/usr/bin/env python3
"""Remove redundant Home/Inicio from topbar nav and footer Studio column (logo is home)."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FOOTER_COL = re.compile(
    r"""
\s*<div\s+class="site-footer__col">\s*
  <div\s+class="site-footer__group">\s*
    <h2\s+class="site-footer__heading">(?:Studio|Estudio)</h2>\s*
    <ul\s+class="site-footer__links">\s*
      <li><a\s+href="index\.html"(?:\s+aria-current="page")?>(?:Home|Inicio)</a></li>\s*
    </ul>\s*
  </div>\s*
</div>
""",
    re.VERBOSE,
)

NAV_HOME = re.compile(
    r'\n\s*<a\s+href="index\.html"(?:\s+aria-current="page")?>(?:Home|Inicio)</a>',
)


def main() -> None:
    for folder in (ROOT, ROOT / "es", ROOT / "tl"):
        for path in sorted(folder.glob("*.html")):
            t = path.read_text(encoding="utf-8")
            t2, n1 = NAV_HOME.subn("", t, count=1)
            t2, n2 = FOOTER_COL.subn("", t2, count=1)
            if path.name == "index.html":
                m = re.search(
                    r'<a class="brand" href="#hero"[^>]*>',
                    t2,
                )
                if m and "aria-current" not in m.group(0):
                    t2 = re.sub(
                        r'(<a class="brand" href="#hero" aria-label="[^"]*")(\s*>)',
                        r"\1 aria-current=\"page\"\2",
                        t2,
                        count=1,
                    )
            if (n1, n2) == (0, 0) and path.name != "index.html":
                continue
            path.write_text(t2, encoding="utf-8")
            print(path.relative_to(ROOT), f"nav-{n1} footer-{n2}")

    print("Done.")


if __name__ == "__main__":
    main()
