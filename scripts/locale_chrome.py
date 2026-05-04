#!/usr/bin/env python3
"""
Replace repeated header/footer chrome in es/*.html and tl/*.html.
Run after locale_build.py:  python3 scripts/locale_chrome.py
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Order matters: longer / more specific first where needed.
ES_CHROME = [
    ('aria-label="Main navigation"', 'aria-label="Navegación principal"'),
    ('aria-label="Alkymē home"', 'aria-label="Inicio de Alkymē"'),
    ('aria-label="Site"', 'aria-label="Sitio"'),
    ('aria-label="Legal"', 'aria-label="Legal"'),
    ('aria-label="Social and email"', 'aria-label="Redes sociales y correo"'),
    ('aria-label="Alkymē on LinkedIn"', 'aria-label="Alkymē en LinkedIn"'),
    ('aria-label="Alkymē on X"', 'aria-label="Alkymē en X"'),
    ('aria-label="Alkymē on Instagram"', 'aria-label="Alkymē en Instagram"'),
    ('aria-label="Email hello@alkyme.io"', 'aria-label="Correo a hello@alkyme.io"'),
    ('>Contact Us</a>', '>Contáctanos</a>'),
    ('>Careers</a>', '>Carreras</a>'),
    ('>About</a>', '>Acerca de</a>'),
    ('>Home</a>', '>Inicio</a>'),
    ('>Contact</a>', '>Contacto</a>'),
    ('>AI</a>', '>IA</a>'),
    ('<h2 class="site-footer__heading">Studio</h2>', '<h2 class="site-footer__heading">Estudio</h2>'),
    ('<h2 class="site-footer__heading">Company</h2>', '<h2 class="site-footer__heading">Empresa</h2>'),
    ('<h2 class="site-footer__heading">Contact</h2>', '<h2 class="site-footer__heading">Contacto</h2>'),
    ('>Privacy</a>', '>Privacidad</a>'),
    ('>Terms</a>', '>Términos</a>'),
    ('Alkyme. All rights reserved.', 'Alkymē. Todos los derechos reservados.'),
]

TL_CHROME = [
    ('aria-label="Main navigation"', 'aria-label="Pangunahing nabigasyon"'),
    ('aria-label="Alkymē home"', 'aria-label="Homepage ng Alkymē"'),
    ('aria-label="Site"', 'aria-label="Site"'),
    ('aria-label="Legal"', 'aria-label="Legal"'),
    ('aria-label="Social and email"', 'aria-label="Social media at email"'),
    ('aria-label="Alkymē on LinkedIn"', 'aria-label="Alkymē sa LinkedIn"'),
    ('aria-label="Alkymē on X"', 'aria-label="Alkymē sa X"'),
    ('aria-label="Alkymē on Instagram"', 'aria-label="Alkymē sa Instagram"'),
    ('aria-label="Email hello@alkyme.io"', 'aria-label="I-email ang hello@alkyme.io"'),
    ('>Contact Us</a>', '>Makipag-ugnayan</a>'),
    ('>Careers</a>', '>Karera</a>'),
    ('>About</a>', '>Tungkol</a>'),
    ('>Home</a>', '>Home</a>'),
    ('>Contact</a>', '>Kontak</a>'),
    ('>AI</a>', '>AI</a>'),
    ('<h2 class="site-footer__heading">Studio</h2>', '<h2 class="site-footer__heading">Studio</h2>'),
    ('<h2 class="site-footer__heading">Company</h2>', '<h2 class="site-footer__heading">Kumpanya</h2>'),
    ('<h2 class="site-footer__heading">Contact</h2>', '<h2 class="site-footer__heading">Kontak</h2>'),
    ('>Privacy</a>', '>Privacy</a>'),
    ('>Terms</a>', '>Terms</a>'),
    ('Alkyme. All rights reserved.', 'Alkymē. Nakalaan ang lahat ng karapatan.'),
]

def apply_pack(html: str, pack: list[tuple[str, str]]) -> str:
    for old, new in pack:
        html = html.replace(old, new)
    return html


def fix_ai_nav(html: str, lang: str) -> str:
    """Restore short 'AI' label in nav/footer where we want IA (es) or AI (tl)."""
    if lang == "es":
        # Top nav current page might be ">IA</a>" with aria-current — keep IA
        return html
    return html


def main() -> None:
    for folder, pack in (("es", ES_CHROME), ("tl", TL_CHROME)):
        d = ROOT / folder
        if not d.is_dir():
            continue
        for path in sorted(d.glob("*.html")):
            text = path.read_text(encoding="utf-8")
            text = apply_pack(text, pack)
            path.write_text(text, encoding="utf-8")
        print(f"chrome: {folder}/")


if __name__ == "__main__":
    main()
