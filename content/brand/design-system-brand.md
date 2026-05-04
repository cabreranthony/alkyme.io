# ALKYME — DESIGN SYSTEM (TYPOGRAPHY + COLOR + UX RULES)

**Implementation in this repo:** **`assets/alkyme-tokens.css`** is the single source of truth for CSS custom properties (colors, `--type-*`, radii, motion, layout). **`docs/style-guide.md`** documents how marketing pages apply those tokens. This Markdown file explains **why** those choices exist and captures patterns (CTA hierarchy, grids, imagery) that should stay consistent with the code.

---

## TYPOGRAPHY

**ChatGPT Recommendation:**
Primary Font: Inter or equivalent modern sans-serif

**Claude Recommendation:**
The actual implementation uses a **dual-font system** for editorial hierarchy and functional clarity:

**Display Font** (h1, h2, pull quotes)
Libre Baskerville — serif, editorial tone, calm authority
→ Use for: Page titles, section headers, testimonial quotes

**UI Font** (h3-h6, body copy, buttons, UI chrome)
Source Sans 3 — clean, readable, functional
→ Use for: Cards, navigation, forms, body text, captions

**Why two fonts?**
Display establishes brand tone (thoughtful, deliberate). UI ensures readability and performance at smaller sizes and high-density layouts.

---

### TYPE SCALE

**ChatGPT Recommendation:**

H1: 48–64px, Weight: 500, Line height: 1.1
H2: 32–40px, Weight: 500, Line height: 1.2
H3: 24–28px, Weight: 500
Body Large: 18px, Weight: 400
Body: 16px, Weight: 400
Small: 14px, Weight: 400
Caption: 12px, Weight: 400

**Claude Recommendation:**
The implementation uses **fluid typography** (clamp) for responsiveness, and weights are intentionally varied to establish hierarchy:

**H1 (Display — Libre Baskerville)**
Size: `clamp(2rem, 4.5vw, 3rem)` ≈ 32–48px
Weight: **400** (not 500 — size establishes dominance, not weight)
Line height: 1.12
Letter-spacing: -0.02em
→ Philosophy: One primary page title; calm, editorial presence

**H2 (Display — Libre Baskerville)**
Size: `clamp(1.35rem, 2.5vw, 1.65rem)` ≈ 22–26px
Weight: **700** (bolder at smaller size so sections scan clearly under h1)
Line height: 1.12
Letter-spacing: -0.02em
→ Philosophy: Section "chapters" — need visual weight to break up bands

**H3-H6 (UI — Source Sans 3)**
Size: 1.1rem–0.95rem (varies by level)
Weight: **600**
Line height: 1.22–1.35
→ Philosophy: Cards, lists, subordinate to serif section titles

**Body (UI — Source Sans 3)**
Size: 1rem (16px)
Weight: 400
Line height: 1.6
→ Default reading text

**Body Large / Lead**
Size: `clamp(1.02rem, 1.35vw, 1.125rem)` ≈ 16–18px
Line height: 1.55
→ Hero descriptions, section intros

**Eyebrow (UI — Source Sans 3)**
Size: 0.72rem (≈12px)
Weight: 600
Uppercase, letter-spacing: 0.14em
Color: --moss (brand green)
→ Meta-labels above titles (e.g., "Startup Studio")

**Caption**
Size: 0.92rem (≈15px)
Weight: 400
Line height: 1.45

**Why varied weights?**
- H1 at 400: Large size already commands attention; heavy weight would shout
- H2 at 700: Smaller size needs boldness to signal section breaks
- H3+ at 600: Functional density for cards/UI without competing with h2  

---

## BUTTONS

**ChatGPT Recommendation:**

Primary Button:
- Background: #183D3D
- Text: #FFF9F0
- Weight: 500
- Padding: 12px 20px

Secondary Button:
- Border: 1px solid #5C8374
- Text: #183D3D

Text CTA:
- Underline on hover
- No border

**Claude Recommendation:**
Buttons need hover states, focus rings, and should reference **semantic tokens** (not raw hex) for theme compatibility:

**Primary Button** (filled, high emphasis)
- Background: `--button-primary-bg` → #040D12 (bark) in light mode
- Text: `--button-primary-fg` → #FFF9F0 (eggshell-sky)
- Weight: 600
- Padding: 12px 20px (vertical, horizontal)
- Border-radius: `--radius-pill` ≈ 1–1.35rem (matches media corners site-wide)
- **Hover**: Subtle brightness shift or scale
- **Focus**: `--focus-ring` (2px solid --forest, 3px offset)

**Secondary Button** (outlined, medium emphasis)
- Border: 1px solid `--moss` (#5C8374)
- Text: `--ink` (theme-aware)
- Background: transparent
- Weight: 600
- Same padding/radius as primary
- **Hover**: Background fills with `rgb(var(--rgb-moss) / 0.08)`

**Text CTA** (link-style, low emphasis)
- No border, no background
- Text: `--ink` (inherits from context)
- Weight: 600 or inherit
- **Hover**: Color shifts to `--accent-on-canvas`, underline appears
- Use when pairing with a primary button (avoids two heavy CTAs side-by-side)

**Why 600 weight (not 500)?**
Functional density — buttons need to feel "clickable" vs editorial text at 400.

**Dark Mode Behavior:**
- Primary button: Background becomes --moss (#5C8374), text stays light
- All semantic tokens remap automatically via `[data-theme="dark"]`

---

## COLOR SYSTEM

**ChatGPT Recommendation:**

Primary: #040D12 (base dark), #183D3D (primary surface)
Secondary: #5C8374, #93B1A6
Neutral: #FFF9F0, #F4F4F4
Accents: Purple #8F00FF, Blue #1F6FFF (use sparingly)

**Claude Recommendation:**
The implementation uses a **named palette** (poetic, on-brand) + **semantic tokens** (functional roles). Always use semantic tokens in code, not raw hex.

**Named Palette** (Brand Constants)
- `--bark`: #040D12 — darkest, anchoring
- `--forest`: #183D3D — primary surface, rich depth
- `--moss`: #5C8374 — secondary, organic mid-tone
- `--dew`: #93B1A6 — muted, soft accents
- `--eggshell-sky`: #FFF9F0 — warm off-white (avoid pure #FFF)
- `--cloudy-day`: #F4F4F4 — neutral light surface

**Semantic Tokens** (Use These in Code)
- `--ink`: Body text color (theme-aware: bark in light, eggshell in dark)
- `--bg`: Page background
- `--accent-on-canvas`: Links, labels, eyebrows (adapts to theme)
- `--button-primary-bg / -fg`: Filled button colors
- `--muted`: Subtext, secondary information

**RGB Tuples** (For Alpha Transparency)
Every core color has a matching `--rgb-*` triplet for overlays:
```css
/* Example: Semi-transparent forest overlay */
background: rgb(var(--rgb-forest) / 0.1);

/* Example: Dew border at 45% opacity */
border: 1px solid rgb(var(--rgb-dew) / 0.45);
```

**Accents** (Use Sparingly)
Purple (#8F00FF) and Blue (#1F6FFF) were mentioned but **not present in current implementation**.
→ If adding: Only for micro-interactions (active states, highlights). Never for large surfaces or brand identity.

**Dark Mode Philosophy:**
All semantic tokens remap in `[data-theme="dark"]`:
- `--ink` shifts from bark → light eggshell
- `--bg` shifts from white → deep green-black (#070c0a)
- Brand colors (--bark hex, --rgb-bark) stay constant for gradients/shadows
- Result: Consistent brand feel, readable in any mode

---

## GRADIENTS

**ChatGPT Recommendation:**

Primary Gradient: #040D12 → #183D3D
Secondary Gradient: #183D3D → #5C8374
Light Gradient: #FFF9F0 → #F4F4F4

Usage:
- Hero backgrounds
- Section transitions
- Never behind body text

**Claude Recommendation:**
Same gradient directions are valid, but **implementation notes**:

**Primary Gradient** (Dark depth)
`linear-gradient(#040D12, #183D3D)` — bark → forest
→ Use for: Hero backgrounds, dark section transitions

**Secondary Gradient** (Organic warmth)
`linear-gradient(#183D3D, #5C8374)` — forest → moss
→ Use for: Mid-page accent bands, feature cards

**Light Gradient** (Subtle texture)
`linear-gradient(#FFF9F0, #F4F4F4)` — eggshell → cloudy-day
→ Use for: Light section backgrounds, modal overlays

**Rules:**
- Never place gradients directly behind body text (readability suffers)
- OK behind headlines if contrast ratio ≥ 4.5:1
- Use solid color overlays (`rgb(var(--rgb-bark) / 0.6)`) over gradient backgrounds when text is present

---

## DARK VS LIGHT SECTIONS

**ChatGPT Recommendation:**

Dark sections:
- Use white text (#FFF9F0)
- Avoid pure white (#FFFFFF)

Light sections:
- Use #040D12 text
- Subtext in #5C8374

**Claude Recommendation:**
This is correct direction, but should reference **semantic tokens** for theme compatibility:

**On Dark Surfaces** (bark, forest, video backgrounds)
- Headlines: `--text-on-dark` (#FFF9F0 / eggshell-sky)
- Body copy: `--prose-on-dark-surface` → `rgb(var(--rgb-eggshell) / 0.9)` (90% opacity for softer reading)
- **Avoid** pure #FFFFFF (too harsh, breaks brand warmth)

**On Light Surfaces** (white, eggshell, cloudy-day)
- Headlines: `--ink` (bark in light mode, auto-adapts in dark mode)
- Body copy: `--prose-on-light-canvas` → `rgb(var(--rgb-bark) / 0.74)` (74% opacity for comfortable reading)
- Subtext/captions: `--muted` (forest green, less prominent)

**Why opacity vs solid colors?**
Reduces harshness, improves readability on textured/gradient backgrounds, feels more organic

---

## LAYOUT

**ChatGPT Recommendation:**

Max width: 1200px
Text width: 600–720px
Section padding: 80px vertical
Card spacing: 24px

**Claude Recommendation:**
The implementation uses **fluid spacing** and a slightly wider canvas for modern widescreen displays:

**Content Max Width**
`--content-max-width: 1380px` (not 1200px)
→ Why wider? Modern displays (1440px+) are common; 1200px feels cramped. 1380px balances spaciousness with readability.

**Page Gutters** (horizontal padding)
`--page-gutter: clamp(1.25rem, 5vw, 2.75rem)` ≈ 20–44px
→ Scales with viewport; mobile gets tighter margins, desktop gets breathing room

**Section Padding** (vertical rhythm)
`--section-pad-y: clamp(4rem, 10vw, 6rem)` ≈ 64–96px
→ Larger than 80px fixed; adapts to screen size for better proportions

**Text / Prose Width** (optimal reading line length)
`--section-head-max: 38rem` ≈ 608px
`--section-lead-max: 42rem` ≈ 672px
→ Matches your 600–720px intent; caps at ~65–75 characters per line (ideal readability)

**Card Spacing**
24px is valid; implementation also uses `--radius-media: clamp(0.75rem, 1.25vw, 1.125rem)` for card corners
→ Rounded corners scale with viewport for consistent visual density

**Why fluid (clamp) vs fixed px?**
- Responsive by default (no breakpoint-specific overrides needed)
- Proportions stay harmonious across device sizes
- Reduces CSS complexity

---

## CTA RULES

**ChatGPT Recommendation:**

Primary + Secondary combo allowed:
[Primary Button] [Text link]

Never: 2 heavy buttons side by side

**Claude Recommendation:**
This is correct. Expanding with hierarchy logic:

**Allowed Combinations:**
1. **Primary + Text link** (most common)
   - Example: `[Get Started]` (filled button) + "Learn more →" (text link)
   - Hierarchy: Clear primary action, secondary is low-emphasis

2. **Primary + Secondary** (rare, high-stakes pages)
   - Example: `[Start free trial]` (filled) + `[View pricing]` (outlined)
   - Use when both actions are equally valid but one is preferred

**Never:**
- Two primary (filled) buttons side-by-side → causes decision paralysis
- Three+ CTAs in one section → dilutes focus

**Hierarchy at a Glance:**
- **Primary**: Filled button (--button-primary-bg/fg) — one per section max
- **Secondary**: Outlined button or bold text link — supporting action
- **Tertiary**: Plain text link — exploratory, "learn more" type

**Visual weight order**: Primary > Secondary > Text link

---

## GRID

**ChatGPT Recommendation:**

3-column for desktop
2-column tablet
1-column mobile

**Claude Recommendation:**
This breakpoint logic is standard and valid. Implementation notes:

**Desktop** (≥1024px or ≥1200px depending on component)
- 3-column grid for cards, features, principles
- Gap: 24–32px (often `clamp(1.5rem, 3vw, 2rem)`)

**Tablet** (768px – 1023px)
- 2-column grid
- Maintains visual density without cramping

**Mobile** (≤767px)
- 1-column stack
- Full-width cards for touch-friendliness

**CSS Grid Pattern:**
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}
```
→ Auto-responsive; columns collapse naturally without media queries

**When to deviate:**
- Testimonials: Often 1-column even on desktop (spotlight effect)
- Wide feature blocks: 2-column max (avoid small tiles for complex content)

---

## IMAGE RULES

**ChatGPT Recommendation:**

Avoid: overly polished imagery

Use:
- Real work environments
- Product screens
- Whiteboards
- In-progress work

**Claude Recommendation:**
This direction is excellent — authentic, unpolished imagery aligns with "we build" vs "we sell." Expanding:

**Preferred Imagery:**
- **Real work environments**: Team at desks, laptops, monitors (not staged stock photos)
- **Product screens**: Actual interfaces, dashboards, prototypes (not generic UI mockups)
- **Whiteboards / sketches**: Strategy sessions, wireframes, messy diagrams
- **In-progress work**: Code editors, terminal windows, design files mid-iteration
- **Candid team moments**: Working sessions, not posed headshots

**Avoid:**
- Generic stock photography (fake office scenes, models pretending to work)
- Overly airbrushed / color-graded imagery
- Abstract tech visuals (floating holograms, circuit boards, generic "AI" graphics)
- Anything that feels like a SaaS landing page template

**Why this works:**
- Builds trust (shows real process, not marketing veneer)
- Differentiates from "agency" aesthetic
- Supports "we build" positioning

**Technical specs:**
- Aspect ratios: 16:9 for hero, 4:3 or 3:2 for cards, 1:1 for team photos
- Corner radius: `--radius-media` or `--radius-media-lg` (matches card corners)
- Overlays: If text on image, use `rgb(var(--rgb-bark) / 0.4–0.7)` scrim

---

## UX RULES

**ChatGPT Recommendation:**

- Every section must answer one question
- No repeated messaging across sections
- Each page needs one primary action
- Keep scroll flow logical: what → how → proof → action

**Claude Recommendation:**
These are strong foundational principles. Expanding with implementation guidelines:

**1. Every section must answer one question**
✅ Good: "How we validate ideas" → Section shows validation process
❌ Bad: "Our approach" → Section mixes validation + team structure + tech stack

**2. No repeated messaging across sections**
✅ Good: "Test in market" (process) vs "Signal-based decisions" (philosophy) — related but distinct
❌ Bad: Three sections all saying "we move fast" in different words
→ **Fix**: If a theme repeats, consolidate or differentiate clearly (e.g., "fast validation" vs "fast iteration" vs "fast decisions" are NOT different enough)

**3. Each page needs one primary action**
- Home: "View ventures" or "See open roles"
- Careers: "Apply now"
- Contact: "Send message"
→ Other CTAs can exist, but one should dominate (visual hierarchy + placement)

**4. Scroll flow: what → how → proof → action**
Example (Home page):
- **What**: "We build products. AI is how we run them." (hero)
- **How**: "Identify, build, extract" (process section)
- **Proof**: Ventures launched, team testimonials, metrics
- **Action**: "Join the studio" or "See our work"

**Additional UX principles** (from implementation analysis):

**5. Progressive disclosure**
- Don't front-load everything. Start broad ("We build"), then narrow ("Here's how"), then specific ("Here's an example")

**6. Scannable hierarchy**
- Eyebrow → H2 → Body → CTA (predictable rhythm)
- Users should grasp section intent from headline alone
- **Spacing tokens** (see `docs/style-guide.md` § Vertical Rhythm & Spacing):
  - H2 → Body: `--type-band-title-to-body-gap` (14–19px)
  - Body → CTA: `--type-band-lede-to-cta-gap` (22–30px)
  - Section header → content: `--section-head-margin-bottom` (24–36px)

**7. Respect cognitive load**
- Max 3-4 cards per section (more = choice paralysis)
- Limit sections per page to 6-8 (beyond that, split into sub-pages)

**8. Mobile-first thinking**
- If a section doesn't work in 1-column mobile, rethink its structure (don't just "stack it")

---