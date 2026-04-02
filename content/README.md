# Content workflow

## Current phase: content deck → HTML

1. **Edit copy** in `content/content-deck.md` (start with the home page; other pages can get their own `content-deck-*.md` later).
2. **Sync to the site** by asking your editor/AI: *“Apply updates from `content/content-deck.md` to `index.html`”* (or the relevant file). You can paste a specific section if the change is small.
3. **Images:** Put preferred URLs or `assets/…` paths in the deck under each block’s **Image** notes, then request a pass to update `src` / `alt` in HTML.

The HTML file is still what the browser serves; the deck is the **draft you own** until you move to a CMS or static generator.

## Avoiding drift

- After a sync, the deck and page should match. If you edit HTML directly for a quick fix, **copy the new wording back** into the deck when you can.
- **Detail modal** copy for “Learn more” lives in the `DETAIL_MODAL_DATA` object inside `index.html`’s `<script>` for now. Longer term, that can move to JSON or MD front matter when you add a build step.

## Next phase (when you’re ready)

- **Eleventy / Astro / similar:** Markdown or YAML collections → templates; one source file per page or per section.
- **Headless CMS:** API or git-based CMS; same idea—edit outside raw HTML.

## Related docs

- `docs/style-guide.md` — tokens, type, components (not copy).
