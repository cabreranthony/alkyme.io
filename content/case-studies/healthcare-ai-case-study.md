# Healthcare Marketing AI Case Study — Web Page Spec

> **File purpose:** This document is both the **final copy** for a case study page on the Alkymē AI Lab website and the **build specification** for the developer (or Claude Code) implementing it. Every section contains a `COPY` block (word-for-word page content) and a `BUILD SPEC` block (components, layout, images, interactions).
>
> **Client anonymization:** The client is always referred to as "a regional healthcare system" or "the system." No names, no regions, no service lines specific enough to identify them.
>
> **Metrics:** All numbers are directional estimates shown in brackets where final figures should replace them (e.g. `[~40%]`). Keep the bracket convention in draft builds so reviewers know what still needs to be confirmed.

---

## GLOBAL PAGE SETUP

### BUILD SPEC — Global

**Route suggestion:** `/case-studies/healthcare-marketing-ai` (or similar slug you already use).

**Typography**
- Headings: a strong geometric sans-serif (e.g. *Inter*, *General Sans*, *Söhne*, or your existing heading font).
- Body: same family or a matched humanist sans (e.g. *Inter* body weight 400, 16–18px, line-height 1.6–1.7).
- Eyebrows / micro-labels: uppercase, letter-spacing 0.1em, 11–12px, weight 600, amber accent color.
- **Rule:** No all-caps paragraphs. No more than one H1 on the page (it lives in the hero).

**Color palette**
- `--ink`: `#0F2A44` (deep navy, primary text + dark sections)
- `--paper`: `#FAFAF7` (warm off-white background)
- `--accent`: `#D97706` (warm amber — used sparingly for eyebrows, underlines, key numbers)
- `--sage`: `#6B8F71` (soft healthcare green — secondary accent for agent cards, subtle backgrounds)
- `--muted`: `#6B7280` (body muted / captions)
- `--line`: `#E5E7EB` (dividers, card borders)
- `--success`: `#065F46` (used for "before → after" delta indicators)

**Spacing scale**
Use an 8px base. Section vertical padding: `96px` desktop / `64px` tablet / `48px` mobile.

**Grid**
12-column, max content width `1200px`, gutter `24px`. Hero and quote sections are allowed to bleed full width.

**Motion**
- Fade-up on scroll for section headings and card entries (20–30px translate, 400–600ms ease-out, once).
- Respect `prefers-reduced-motion`: disable all translate and parallax, keep fades only.

**Accessibility**
- Color contrast AA minimum on body copy.
- Every image has meaningful alt text (I've provided one per image).
- Carousel must support keyboard navigation (arrow keys) and a visible progress indicator.
- Timeline must be linearized for screen readers (each step as a list item with a visible heading).

**Meta**
- `<title>`: Reinventing regional healthcare marketing with AI agents — Alkymē AI Lab
- `<meta name="description">`: How Alkymē replaced a traditional agency model with a coordinated system of AI agents that plan, create, buy, and measure patient-facing marketing for a multi-facility regional health system — with full HIPAA-safe governance and human checkpoints at every decision that matters.
- Open Graph image: same as the hero image.

**Scope note (place prominently near the top of the page, styled as a small italic callout beneath the hero):**

*This case study covers the client's patient-facing marketing program. Physician and clinician recruitment, employer-of-choice campaigns, donor and foundation communications, and internal-employee communications were handled by separate teams and are not part of the work described here.*

---

## SECTION 1 — HERO

### COPY

**Eyebrow:** CASE STUDY · HEALTHCARE

**H1:** From scattered to strategic: how a regional health system turned marketing into an always-on AI operation.

**Subhead (lead paragraph):** A multi-facility regional healthcare system had been running marketing the way most community health systems do — a small outside agency, a part-time executive sponsor, and a stack of spreadsheets. We replaced that model with a coordinated set of AI agents that plan campaigns, produce creative, buy media, and report results across every service line and every location.

**Primary CTA (button):** See how we did it  *(anchor link → `#challenge`)*

**Secondary CTA (text link with arrow):** Talk to our team  *(→ `/contact`)*

### BUILD SPEC — Hero

**Component:** `Hero / full-bleed-with-image`

- Full viewport width, `min-height: 88vh` desktop, `72vh` tablet, `68vh` mobile.
- Background image behind a dark navy gradient overlay.
- Left-aligned content stack, vertically centered, max width `680px`.
- Order top-to-bottom: eyebrow → H1 → subhead → CTA row.
- Primary CTA: solid amber button, white text, `padding: 14px 28px`, `border-radius: 999px`.
- Secondary CTA: underlined text link with trailing arrow `→`, white on dark.

**Gradient overlay**
- Desktop: `linear-gradient(90deg, rgba(15,42,68,0.85) 0%, rgba(15,42,68,0.55) 60%, rgba(15,42,68,0.2) 100%)`
- Mobile: switch to vertical `linear-gradient(180deg, rgba(15,42,68,0.3) 0%, rgba(15,42,68,0.85) 80%)` so text at the bottom stays legible.

**Image placeholder**
- Filename: `hero-healthcare-system.jpg`
- Alt text: *Wide exterior view of a modern community hospital at dusk with warm interior light visible through the windows.*
- Unsplash search terms (pick one): `modern hospital exterior evening`, `healthcare building architecture warm light`, `community hospital dusk`
- Ratio: 16:9, minimum `2400×1350`. Focal point in the right two-thirds of the frame so the left-aligned text has clean background.

**Motion**
- Subtle Ken-Burns on the image (5% scale, 20s, alternate). Disable on `prefers-reduced-motion`.
- Content fades up once, 600ms, 40px translate.

**Scope callout (directly beneath the hero, above Section 2)**
- Thin horizontal band, `--paper` background, centered text, max-width `760px`.
- Small amber left-border `3px` accent.
- Text in italic muted gray (14px): *This case study covers the client's patient-facing marketing program. Physician and clinician recruitment, employer-of-choice campaigns, and donor communications were handled by separate teams and are not part of the work described here.*
- Vertical padding `24px`, no imagery, no headings.

---

## SECTION 2 — CLIENT SNAPSHOT

### COPY

**Eyebrow:** THE CLIENT

**H2:** A regional system doing serious work with a small back office.

**Intro paragraph:** The client operates multiple acute-care and ambulatory facilities across a defined geographic region, with a full slate of service lines ranging from primary care to specialty surgical programs. It is a meaningful community institution — and, like many health systems at this scale, it had never stood up a dedicated internal marketing function.

**Stat strip** *(four cards side-by-side):*

1. **Multi-site** · A regional footprint spanning acute-care, ambulatory, and specialty locations.
2. **One part-time sponsor** · Marketing was an add-on to a senior executive's operational role.
3. **One small agency** · A traditional creative-and-media shop, limited technical capability.
4. **Zero internal marketers** · No CMO, no brand manager, no in-house designer or media buyer.

### BUILD SPEC — Client Snapshot

**Component:** `Section / two-part` → heading + four-card stat strip.

**Layout**
- Section background: `--paper`.
- Heading block left-aligned, max width `720px`, bottom margin `48px`.
- Stat strip: 4 equal columns on desktop, 2×2 grid on tablet, stacked on mobile.

**Card styling**
- Background `white`, border `1px solid --line`, border-radius `16px`, padding `24px`.
- Bold top label (14px, weight 700, `--ink`).
- Body text below (15px, `--muted`, line-height 1.5).
- Small amber vertical accent bar `4px` wide pinned to the left edge of each card.

**No images in this section** — keep it dense and typographic.

---

## SECTION 3 — THE CHALLENGE

### COPY

**Eyebrow (anchor:** `#challenge`**):** THE CHALLENGE

**H2:** Marketing was a side-of-desk function pretending to be a growth engine.

**Lead paragraph:** Before we engaged, the system's marketing operation was held together by the goodwill of a senior executive who already had a full operational job, and an outside agency that was competent at traditional advertising but not equipped for the speed, targeting, and measurement modern healthcare marketing requires. The pattern is familiar — and expensive. Campaigns went out because they had to, not because they were working. Media spend was renewed because it was easier than questioning it. Creative took weeks because every asset moved through a manual chain of emails, revisions, and legal review.

**Friction Grid — heading:** Where the cracks were showing

**Friction Grid — cards** *(9 cards, 3×3 grid):*

1. **Invisible ROI** — Reporting was a monthly PDF of impressions and clicks with no line back to patient volume, service-line growth, or cost per acquired patient.
2. **Stale media mix** — Budget allocation mirrored the prior year almost line for line. Underperforming channels kept getting funded; emerging channels couldn't get a seat.
3. **Slow creative cycles** — A single flyer or digital ad could take two to three weeks to move from brief to approval to publish.
4. **No brand system** — Each campaign invented its own look. Typography, color, and voice drifted between service lines and across facilities.
5. **Service-line conflicts** — Cardiology, orthopedics, women's health, primary care, and others competed for the same channels with no central calendar or share-of-voice logic.
6. **Compliance bottlenecks** — Every asset routed through legal and clinical review manually. Turnaround was measured in days, not hours.
7. **Reputation drift** — Reviews, ratings, and local listings across facilities were barely managed. Outdated hours, wrong phone numbers, and unanswered reviews were common.
8. **Bilingual gaps** — Community reach in non-English-speaking populations was sporadic and mostly handled by last-minute translation requests.
9. **Executive burnout** — The executive sponsor was spending meaningful weekly hours on marketing decisions that weren't really hers to own.

### BUILD SPEC — The Challenge

**Component A:** `Section / heading + lead` (same structure as prior section).

**Component B:** `Friction Grid` — 3×3 on desktop, 2×[4–5] on tablet, 1-column stack on mobile.

**Card styling**
- White card on `--paper` background.
- Small numbered badge top-left (amber circle, white numeral, `32px`).
- Card title (16px, weight 700, `--ink`) immediately right of the badge.
- Supporting body below (15px, `--muted`, line-height 1.55).
- Padding `24px`, border-radius `12px`, subtle shadow `0 1px 2px rgba(15,42,68,0.04)`.

**Image placeholder** *(split image panel above the grid, optional but strong)*
- Filename: `challenge-sticky-notes.jpg`
- Alt text: *Close-up of an office desk covered in sticky notes, printed campaign briefs, and highlighted spreadsheets, suggesting a marketing function running on manual processes.*
- Unsplash search: `marketing planning sticky notes desk`, `campaign planning whiteboard` (desaturate 20% on render to stay on-brand).
- Placement: full-width band between the H2 and the friction grid, height `360px`, object-fit cover, focal point center.
- Caption overlay (bottom-left): small amber eyebrow "BEFORE" + short line "Six service lines, one shared inbox, and a Monday morning spreadsheet."

---

## SECTION 4 — OUR APPROACH

### COPY

**Eyebrow:** OUR APPROACH

**H2:** We didn't build a marketing team. We built a marketing system.

**Body paragraph 1:** Hiring a full internal marketing department would have been disproportionate to the system's scale, and replacing the agency with a bigger agency would have reproduced the same problems at a higher cost. We took a different path: design a set of narrowly-scoped AI agents, each one owning a single discipline of modern marketing, and connect them through a central orchestration layer that the executive sponsor could actually supervise in a few focused hours per week.

**Body paragraph 2:** The goal was never to remove humans from decisions — it was to remove humans from repetition. Strategy, approvals, and clinical judgment stay with the people who own them. Drafting, routing, testing, optimizing, reporting, and the hundred small campaign chores in between are handled by agents working on a shared brief and a shared brand system.

**Body paragraph 3 (why not existing point solutions):** The vendor landscape in healthcare marketing is mature. There are capable tools in every lane — local-listings platforms like Yext and Moz Local, review-management platforms like Reputation.com and BirdEye, demand-side platforms for programmatic media, and a long tail of healthcare-specific creative and media shops. The client had evaluated several of them. The reason they hadn't worked, and wouldn't, was coordination. Each vendor solves one lane well. None of them coordinate with the others, and none of them compensate for a client with no internal marketing team to glue the stack together. Our thesis was that the coordination is the product. Agents sharing a single brief, a single brand system, and a single performance picture remove the integration burden the client could not carry internally. Where a point solution is best-in-class for a narrow job, our agents can call it as a tool — the agent layer supplies the memory and the orchestration.

**Three principles** *(presented as a row of three pillar cards):*

1. **One brief, many agents.** Every campaign starts from a single structured brief that every agent reads. No more parallel email threads.
2. **Humans at the edges.** Clinicians review claims. Executives approve spend. Everything in between is automated with an audit trail.
3. **Always-on, never idle.** Agents run continuously. Performance data flows into the next day's decisions without a meeting.

### BUILD SPEC — Our Approach

**Component A:** `Section / heading + two-paragraph lead`, centered or left-aligned consistent with prior sections.

**Component B:** `Three-pillar row`
- Three equal columns on desktop, stacked on mobile.
- Each pillar: small sage-colored numeral top (`01`, `02`, `03`) at 48px weight 700.
- Title beneath at 20px weight 700 `--ink`.
- Body below at 16px `--muted`.
- Divider between pillars on desktop: thin vertical `1px solid --line`, height matches content.

**Background treatment**
- Soft sage tint: `background: #F3F5F0` (or a 6% sage overlay on paper).
- Subtle top-and-bottom dividers to separate from adjacent sections.

**No image in this section** — it's a manifesto moment, deliberately quiet.

---

## SECTION 5 — THE AGENT SYSTEM

### COPY

**Eyebrow:** THE SYSTEM

**H2:** Six specialized agents, one coordinated marketing operation.

**Lead paragraph:** Each agent has a narrow job, a clear input, and a clear output. Together they cover the full lifecycle of a modern healthcare marketing program — from planning the quarter, to shipping the creative, to buying the media, to closing the loop with service-line leaders.

**Agent cards** *(presented as a horizontal carousel — details in build spec):*

**01 · Campaign Planner Agent**
*What it owns:* Quarterly and monthly planning across service lines, with built-in share-of-voice logic so cardiology, primary care, women's health, and other lines never collide in the same channel on the same week.
*What the exec sees:* A single calendar view with proposed campaigns, budgets, and rationale — ready to approve or adjust.
*Key outputs:* Campaign briefs, budget splits, audience definitions, approval-ready calendar.

**02 · Creative Studio Agent**
*What it owns:* Produces on-brand creative across formats — static display, short-form video scripts, paid social variants, landing page copy, print assets, and language adaptations for the communities the system serves. Every draft is conformed to the centralized brand system before a human sees it. No asset is published without review by a named human reviewer — copy reviewers for voice and brand, clinical reviewers for any claim, and legal review for anything touching regulated categories.
*What the exec sees:* Drafts delivered in hours, not weeks, already conformed to the brand system and ready for clinical or legal sign-off where required.
*Key outputs:* Ad variants, landing page copy, email and SMS drafts, and language adaptations appropriate to the system's communities.

**03 · Media Buying Agent**
*What it owns:* Digital media allocation (programmatic, paid search, paid social) with near-daily performance monitoring and rapid reallocation away from underperforming placements within pre-approved channel and budget guardrails. Traditional media buys (local television, radio, and print) are handled on the planning cycle — the agent produces mix recommendations against geography, service-line priorities, and historical performance, and the executive sponsor approves the commitment. The agent never moves spend above a pre-agreed threshold without human approval.
*What the exec sees:* A live dashboard for digital channels with a plain-English weekly recap, plus a planning-cycle recommendation packet for traditional buys.
*Key outputs:* Channel-level digital spend plans, daily pacing adjustments, traditional-media mix recommendations, geo- and facility-level targeting.

**04 · Compliance & Brand Reviewer Agent**
*What it owns:* A first-pass review of every asset against brand standards and healthcare marketing regulations (claims language, disclaimers, reserved terminology). Routes risky items to human legal or clinical review with context.
*What the exec sees:* Fewer compliance escalations, clearer flags when they do happen, and a consistent brand across every touchpoint.
*Key outputs:* Review comments, flagged-claim reports, cleaned-up copy ready for human sign-off.

**05 · Reputation & Local Presence Agent**
*What it owns:* Monitors reviews and ratings across all facilities, drafts response text for human approval (with HIPAA-safe language patterns that never confirm or deny a patient relationship), keeps hours and services correct on local listings, and watches local search visibility by facility and by service line. Where the client already had contracts with specialist listings or review tools, the agent integrates with them rather than replacing them.
*What the exec sees:* A weekly reputation brief instead of a quarterly surprise.
*Key outputs:* Review drafts, listing accuracy reports, local search recommendations by facility.

**06 · Performance Analyst Agent**
*What it owns:* Consolidates performance data across channels and ties it to the outcomes the system actually cares about — new patient visits, service-line volume lift, cost per acquired patient, event attendance — and writes the narrative, not just the numbers.
*What the exec sees:* A plain-English weekly summary with the three decisions that need a human this week.
*Key outputs:* Executive brief, service-line scorecards, anomaly alerts.

### BUILD SPEC — The Agent System

**Component:** `Carousel / agent-cards-horizontal`

**Carousel mechanics**
- Horizontal scroll-snap on mobile (touch).
- Desktop: arrow controls on the left and right, plus paginated dots beneath the carousel, plus keyboard arrow-key support when focus is on the carousel region.
- Show 1.2 cards peeking on mobile (so users see there's more), 2.2 on tablet, 3 on desktop.
- Auto-play is **off** by default. Add a small play/pause toggle only if desired; it must respect `prefers-reduced-motion`.

**Card anatomy**
- Large numeric prefix top-left: `01` through `06` in amber, 48px weight 700.
- Agent name in H3 (`22–24px`, weight 700, `--ink`).
- Small sage-color pill beneath name with short category label (e.g., "Planning," "Creative," "Media," "Compliance," "Reputation," "Analytics").
- Icon / illustration in the top-right corner of the card (see image spec below).
- Three labeled paragraphs: `What it owns`, `What the exec sees`, `Key outputs` — each label in uppercase micro-label style (11px, letter-spacing 0.08em, amber).
- Bottom-of-card line: "Human-in-the-loop checkpoint: [short description]" in italic muted gray.

**Card dimensions**
- Width `360px` desktop, `300px` mobile.
- Min-height `520px` so cards align across the carousel.
- Background white, border `1px solid --line`, border-radius `20px`, padding `32px`, subtle shadow on hover.

**Agent icons / illustrations** *(one per card — 6 total)*

For each icon, either commission a simple line-illustration set, or use Unsplash/Unsplash-style abstract photography cropped into a square. If using photography, desaturate and apply a sage-to-amber duotone so the set feels cohesive.

| # | Agent | Alt text | Unsplash search |
|---|---|---|---|
| 01 | Campaign Planner | *Abstract overhead view of a planning calendar with color-coded blocks* | `planner calendar flat lay minimal` |
| 02 | Creative Studio | *Close-up of design tools, color swatches, and type specimens* | `design studio flat lay color swatches` |
| 03 | Media Buying | *Abstract data visualization of channel performance curves* | `abstract data visualization waves` |
| 04 | Compliance Reviewer | *Close-up of a magnifying glass over printed text* | `magnifying glass document detail` |
| 05 | Reputation & Local | *Stylized map pin over a city map at low contrast* | `city map pins abstract` |
| 06 | Performance Analyst | *Abstract chart with an amber highlighted trendline* | `abstract chart lines amber` |

All images: square `1:1`, minimum `800×800`, inscribed in a rounded-square frame at the top-right of the card at `96×96`.

**Section background**
- Full-width deep navy band (`--ink`) with white text.
- This is the visual centerpiece of the page — give it generous top and bottom padding (`128px` desktop).
- Section eyebrow and H2 are white; lead paragraph is at 85% white opacity.

---

## SECTION 6 — GOVERNANCE, COMPLIANCE & OWNERSHIP

### COPY

**Eyebrow:** GUARDRAILS

**H2:** In healthcare, an AI marketing operation lives or dies on governance. Here's ours.

**Lead paragraph:** Before we wrote a single agent prompt, we sat with the client's legal, clinical, and IT leadership to settle four questions. Those answers — not the agents themselves — are what made this engagement possible.

**Pillar cards** *(four pillars, presented as a 2×2 grid or four-column row):*

**01 · Data scope**
The agents do not operate on protected health information. Audience definitions are built from aggregated, de-identified, and publicly available signals — no patient records, no EHR data, no PHI in agent prompts or outputs. Where the client chose to join marketing results to service-line volume for measurement, that join happened in the client's own environment, downstream of the agents, using the client's existing data-governance controls.

**02 · Business-associate posture**
Even though the agent system is not designed to touch PHI, we executed a Business Associate Agreement with the client as a precaution for any edge case. Our hosting stack is SOC 2 Type II attested, our vendor subprocessors are listed and reviewed annually with the client's compliance team, and our data-retention defaults are set to the minimum viable for operational continuity.

**03 · Human checkpoints by design**
Every agent has explicit human-in-the-loop points. Clinical reviewers sign off on any asset that makes a clinical claim. Legal reviews anything touching regulated categories. The executive sponsor approves every campaign and every budget reallocation above a pre-agreed threshold. The agents draft, route, and recommend. They do not publish, spend, or respond without a human confirmation when the decision matters.

**04 · Accountability and ownership**
The client owns all generated creative, all agent outputs, and all performance data. The engagement letter specifies the accountability model when an agent makes a mistake — rollback procedures, incident review, escalation paths, and who carries liability for what. This is on the first page of the contract, not buried in an appendix.

**Closing line below the grid:** Full governance documentation, including our BAA template, subprocessor list, and incident response playbook, is available under NDA.

### BUILD SPEC — Governance

**Component:** `Section / heading + four-pillar grid`

**Layout**
- Section background: `--paper`.
- Heading and lead paragraph left-aligned, max-width `760px`.
- Four pillar cards in a 2×2 grid on desktop, stacked on mobile.

**Pillar card styling**
- White background, border `1px solid --line`, border-radius `16px`, padding `32px`.
- Large numeric prefix top-left in sage (`01` through `04`, 40px weight 700).
- Pillar title (18px, weight 700, `--ink`) beneath the number.
- Body paragraph (15px, `--muted`, line-height 1.6).
- Small check-mark icon in amber at the top-right corner of each card to reinforce the "guardrail" visual language.

**Optional but recommended: inline badge row above the H2**
- A horizontal row of small pill badges: `HIPAA-AWARE` · `BAA EXECUTED` · `SOC 2 TYPE II` · `HUMAN-IN-THE-LOOP`
- Pill styling: amber outline, amber text, `--paper` fill, 11px uppercase, letter-spacing 0.08em.
- This is the compliance signal a technical buyer scans for in the first five seconds on the page.

**Image placeholder (optional, restrained)**
- Filename: `governance-locked-cabinet.jpg`
- Alt text: *Close-up of a modern locked filing cabinet or secure server rack, neutral lighting, symbolizing data security and governance.*
- Unsplash search: `secure server rack neutral`, `locked filing cabinet minimal`
- Placement: small inset image to the right of the heading block, `320px` square, rounded corners, or omit entirely if it adds clutter.

---

## SECTION 7 — IMPLEMENTATION JOURNEY

### COPY

**Eyebrow:** THE JOURNEY

**H2:** Six months from first brief to full steady state.

**Lead paragraph:** We did not attempt a big-bang transition. We ran the existing agency in parallel for the first phase, stood up agents one at a time in shadow mode, and cut each function over only when the agent had outperformed the status quo on a pre-agreed measure across a two-to-four-week comparison window. Early digital-only wins arrived inside the first quarter. Full program steady state — including compliance cutover, traditional-media planning, and multi-facility reputation coverage — took the full six months.

**Timeline steps** *(six nodes):*

**Weeks 1–4 · Discovery and brand codification**
We interviewed the executive sponsor, the incumbent agency, each service-line leader, and representatives from legal, clinical, and IT. We pulled twelve months of campaign data, invoices, and creative. We codified the brand system — voice, typography, color, photography direction, and the claim library — into a machine-readable source of truth every agent could reference. We documented the governance model and executed the BAA and data-handling agreements before any agent touched production data.

**Weeks 5–8 · Agent build-out, phase one**
We deployed the Campaign Planner, Creative Studio, and Compliance Reviewer agents in a sandbox connected to real client data in a read-only posture. The incumbent agency continued to ship live work. Agents produced shadow deliverables in parallel so we could compare quality, compliance, and speed side by side.

**Weeks 9–12 · Shadow comparison and phase-one cutover**
Once shadow output consistently met or beat the agency on quality and compliance — and dramatically beat it on speed — we cut planning, creative, and compliance review over to the agent system. The agency's scope was reduced accordingly. The first measurable operational wins appeared here: creative turnaround collapsed and compliance escalations dropped within the first full cycle.

**Weeks 13–16 · Digital media cutover**
We brought the Media Buying Agent online for digital channels first — programmatic, paid search, and paid social — with a two-week staged rollout across one service line before expanding to the full portfolio. Traditional media (local TV, radio, print) stayed on the existing planning cycle throughout this phase; we did not attempt to touch it until the digital side was stable.

**Weeks 17–20 · Reputation, local presence, and traditional-media planning**
The Reputation & Local Presence Agent went live across all facilities. The Media Buying Agent took over traditional-media planning on the next planning cycle, producing its first full mix recommendation for executive approval. This phase also surfaced the first multi-facility listing accuracy issues the client hadn't known about, and corrected them.

**Weeks 21–24 · Performance layer, executive rituals, and steady state**
The Performance Analyst Agent came online last, replacing the monthly agency report with a weekly executive brief, a live dashboard, and service-line scorecards. Two recurring executive rituals — a 30-minute Monday approvals session and a 45-minute Thursday performance review — replaced the ad hoc meeting load the sponsor had been carrying. We declared steady state at the end of week 24, with a 90-day post-launch retrospective scheduled as part of the engagement.

**Closing line below the timeline:** Early wins inside the first quarter; full program steady state at six months. Timelines vary with system size, service-line count, and existing data infrastructure.

### BUILD SPEC — Implementation Journey

**Component:** `Timeline / vertical-alternating` on desktop, `Timeline / vertical-stacked` on mobile.

**Timeline mechanics (desktop)**
- A vertical spine line in `--line` color down the center of the section.
- Node markers alternate left/right.
- Each node has: a small filled amber circle on the spine, a date label (`WEEKS 1–2`, etc.) in eyebrow style, a bold step title (`H3`, 20px), and a body paragraph.
- Nodes animate in sequentially as they scroll into view (100ms stagger, fade-up).

**Timeline mechanics (mobile)**
- Spine line pinned to the left (`24px` inset).
- All nodes stack on the right of the spine.
- Same date label → title → body structure.

**Background**
- Return to `--paper` background.
- Keep the section relatively restrained — no imagery, just the timeline and the closing sentence from the COPY block below it.

**No images in this section.** Let the timeline carry the weight.

---

## SECTION 8 — RESULTS

### COPY

**Eyebrow:** THE RESULTS

**H2:** What changed, in numbers.

**Lead paragraph:** These are directional results from the first two full quarters at steady state, compared against the trailing twelve months under the previous agency model. Numbers shown in brackets are directional pending final client sign-off; methodology is summarized below and full detail is available under NDA. All measurements were performed on marketing-layer data (ad platforms, call tracking, form submissions, event attendance) — not a direct claim on total clinical volume, which is influenced by many factors beyond marketing.

**Result cards** *(six big-number cards, 3×2 grid):*

1. **`[~35%]`** reduction in working-media waste *(digital spend reallocated away from placements below a pre-agreed ROAS threshold into campaigns with measurable inquiry lift).*
2. **`[~10x]`** faster creative turnaround *(median time from brief to in-market, digital assets; print and traditional turnaround improved but on a different cycle).*
3. **`[~60%]`** fewer compliance escalations *(issues resolved at first-pass agent review before reaching human legal or clinical review).*
4. **`[~3x]`** more campaigns shipped per quarter *(without increasing the overall marketing budget).*
5. **`[~80%]`** less executive time on marketing *(weekly hours reclaimed by the executive sponsor for her primary operational role).*
6. **`[~20%]`** lift in tracked marketing inquiries *(aggregate across priority service lines, Q/Q, measured at the marketing layer — not a claim on total clinical volume).*

**How we measured (subheading beneath the stat grid):**

- **Baseline:** trailing twelve months before engagement, drawn from the agency's platform reports, the client's call-tracking system, and invoice records.
- **Comparison:** trailing two quarters at steady state (post week 24).
- **Seasonality:** baselines and comparisons are aligned to the same fiscal periods where possible; unavoidable mismatches are adjusted using the client's own historical seasonality factors for predictable demand cycles (flu season, open enrollment, community event calendars).
- **Attribution:** inquiry lift is measured at the marketing layer — form submissions, tracked phone calls, booked appointments originating from marketing channels. We do not claim a direct causal tie to total service-line volume; clinical volume is influenced by referral patterns, insurance mix, community demographics, and factors outside marketing.
- **Controls:** this was not a randomized controlled rollout. Confounding variables (market conditions, competitive moves, service-line expansions independent of marketing) are documented in the full methodology appendix available under NDA.
- **Media-waste calculation:** spend on digital placements below a pre-agreed ROAS threshold in the baseline, compared to the steady-state equivalent after reallocation.

**Closing line:** Brackets indicate directional figures pending final client sign-off. Full methodology, service-line-level breakouts, and confounder discussion are available under NDA.

### BUILD SPEC — Results

**Component:** `Stat Grid / oversized-numbers`

**Layout**
- Six cards, 3 columns × 2 rows on desktop, 2 columns on tablet, 1 column on mobile.
- Each card: extra-large number (72–96px, weight 800, `--ink`), then short qualifier line (16px, weight 600, `--ink`), then italic caption (14px, `--muted`).
- Numbers in brackets `[~40%]` should render with the brackets visible — that's intentional until final figures replace them.
- Include a small amber upward arrow icon inline next to the number where appropriate.

**Card styling**
- Background `white`, border-radius `20px`, border `1px solid --line`, padding `40px`.
- Subtle 2px amber underline beneath each number (as a visual accent).

**Methodology block (below the stat grid)**
- Collapsed-by-default accordion titled "How we measured" with a small chevron, opens to reveal the six-bullet methodology list from the COPY block.
- Accordion background `--paper`, border `1px solid --line`, border-radius `12px`, padding `24px` when expanded.
- Rationale for the collapse: the methodology matters to serious buyers but doesn't belong in the main scroll for casual readers.
- **Accessibility:** use a proper `<details>`/`<summary>` pattern so the content is always keyboard accessible and always present in the DOM for search engines and assistive tech.

**Section background**
- Sage tint (`#F3F5F0`) again to visually bookend with the Approach section.

**Optional but strong: full-width photo band above the grid**
- Filename: `results-clinical-lobby.jpg`
- Alt text: *Warm, softly lit hospital lobby with patients checking in, suggesting a welcoming, well-run facility.*
- Unsplash search: `hospital reception warm lobby`, `healthcare waiting room welcoming`
- Height `280px`, full width, soft dark gradient at the bottom to transition into the sage section below.

---

## SECTION 9 — WHAT IT UNLOCKED

### COPY

**Eyebrow:** WHAT IT UNLOCKED

**H2:** The real win was not faster marketing. It was giving the system its strategic time back.

**Body paragraph 1:** The executive sponsor was no longer drafting approvals between operational meetings. Service-line leaders stopped campaigning internally for marketing attention because the share-of-voice logic handled it upstream. The system's community presence became more consistent, more multilingual, and more responsive — not because anyone was working harder, but because the right work was finally getting done automatically.

**Body paragraph 2:** Most importantly, the system now has something it has never had before: a living, structured record of every campaign decision, every creative iteration, every dollar spent, and every outcome measured. When a future leader inherits the marketing function, they inherit a working system — not a stack of folders and a phone number for the old agency.

**Pull quote** *(styled as a large, set-off quotation):*

> "Before this, I was approving marketing in the gaps between my operational meetings and hoping the agency was catching what I wasn't. Now I spend about ninety minutes a week on it in two scheduled sessions, the work still ships on time, and I can see what's working and what isn't. That's the change, in one sentence."

*Attribution line:* — Executive sponsor, regional healthcare system *(attributed anonymously at the client's request; quote lightly edited for brevity with the speaker's approval).*

### BUILD SPEC — What It Unlocked

**Component A:** `Section / two-column-narrative`
- Left column: H2 + eyebrow (40% width).
- Right column: two body paragraphs (60% width).
- Stack on mobile.

**Component B:** `Pull Quote / oversized`
- Full-width block with vertical padding `96px`.
- Background: deep navy (`--ink`) with white text, OR a subtle photographic background at very low opacity if you'd like more texture.
- Giant opening quotation mark in amber at 160px, weight 800, positioned top-left of the quote.
- Quote text: 32px desktop, 24px mobile, weight 500, line-height 1.35, centered, max-width `820px`.
- Attribution line below, small caps 12px, amber accent.

**Optional image placeholder for the pull-quote background**
- Filename: `community-hands.jpg`
- Alt text: *Soft, out-of-focus image of hands being held in a supportive gesture, suggesting community and care.*
- Unsplash search: `caring hands soft focus`, `community care hands blurred`
- Apply heavy dark navy overlay (85–90% opacity) so text remains the focal element.

---

## SECTION 10 — CTA / CLOSING

### COPY

**Eyebrow:** NEXT STEP

**H2:** If this sounds like your system, we should talk.

**Body paragraph:** We work with regional health systems, specialty groups, and healthcare networks that have outgrown a traditional agency relationship and aren't looking to stand up a full internal marketing department. If that's you — or if you're the executive quietly carrying marketing as an additional duty — we'd like to hear what you're working on.

**Primary CTA:** Book a 30-minute working session *(→ `/contact` or calendar link)*

**Secondary CTA:** Read more case studies *(→ `/case-studies`)*

**Below the CTAs, small attribution line:** Case study prepared by Alkymē AI Lab. Client details anonymized. All figures directional and available in full under NDA.

### BUILD SPEC — CTA

**Component:** `CTA Band / split-with-image`

**Layout**
- Split 60/40 on desktop: copy on the left, image on the right. Stack on mobile with image above copy.
- Background: `--paper` with a subtle sage gradient fading in from the right edge behind the image.

**CTA styling**
- Primary button: solid amber, white text, same `999px` radius as the hero.
- Secondary: underlined text link with arrow.
- Attribution line: 12px, `--muted`, centered beneath the CTAs, margin-top `48px`.

**Image placeholder**
- Filename: `cta-handshake-consult.jpg`
- Alt text: *Two professionals in a bright office meeting across a table, mid-conversation, warm natural light.*
- Unsplash search: `healthcare executive meeting bright office`, `consultant meeting warm light`
- Ratio: 4:5 portrait on desktop, 16:9 landscape on mobile.

---

## APPENDIX — IMAGE CHECKLIST

Use this to brief whoever sources the photography. Every image is on the `--paper` or `--ink` background — nothing should compete with the copy.

| # | Filename | Section | Alt text | Unsplash search |
|---|---|---|---|---|
| 1 | `hero-healthcare-system.jpg` | Hero | Wide exterior view of a modern community hospital at dusk with warm interior light. | `modern hospital exterior evening` |
| 2 | `challenge-sticky-notes.jpg` | Challenge | Desk covered in sticky notes and printed briefs, suggesting manual planning. | `marketing planning sticky notes desk` |
| 3–8 | Six agent icons / photos | Agent System carousel | See agent table in Section 5. | See agent table in Section 5. |
| 9 | `governance-locked-cabinet.jpg` | Governance (optional) | Close-up of a modern locked filing cabinet or secure server rack, neutral lighting. | `secure server rack neutral` |
| 10 | `results-clinical-lobby.jpg` | Results | Warm, softly lit hospital lobby with a welcoming feel. | `hospital reception warm lobby` |
| 11 | `community-hands.jpg` | Pull Quote (optional) | Supportive hands, soft focus, suggesting community care. | `caring hands soft focus` |
| 12 | `cta-handshake-consult.jpg` | CTA | Two professionals meeting in a bright office, warm light. | `consultant meeting warm light` |

**Photography direction for all images**
- Prefer natural light and warm color temperature.
- Avoid stereotypical stock-photo imagery (no people in scrubs pointing at tablets, no perfectly lit surgeons folded arms).
- Humans are welcome but should feel candid, not posed.
- If any images include identifiable patients, ensure model release equivalence — or choose images without identifiable faces.

---

## APPENDIX — COMPONENT LIBRARY SUMMARY

For whoever implements this, here's the full set of components the page requires. If any of these already exist in your design system, map to them; otherwise build in this order.

1. `Hero / full-bleed-with-image` — used once (Section 1).
2. `Scope Callout / italic-band` — used once directly beneath the hero.
3. `Section / heading + lead` — general-purpose section wrapper, used throughout.
4. `Stat Strip / four-card` — Section 2.
5. `Friction Grid / 3x3-numbered-cards` — Section 3.
6. `Three-pillar row` — Section 4.
7. `Carousel / agent-cards-horizontal` — Section 5. **Highest-complexity component.**
8. `Pill Badge Row / compliance-signals` — Section 6 (optional, above governance H2).
9. `Pillar Grid / 2x2-numbered-cards` — Section 6.
10. `Timeline / vertical-alternating` (+ mobile variant) — Section 7.
11. `Stat Grid / oversized-numbers` — Section 8.
12. `Accordion / details-summary` — Section 8 (for "How we measured").
13. `Section / two-column-narrative` — Section 9.
14. `Pull Quote / oversized` — Section 9.
15. `CTA Band / split-with-image` — Section 10.

---

## APPENDIX — IMPLEMENTATION NOTES FOR CLAUDE CODE (OR ANY DEV)

Treat this document as the single source of truth. If you're Claude Code building this page, work top-to-bottom, one section at a time, and check in at the end of each section before moving on. Suggested build order:

1. Scaffold the page and global styles (tokens, typography, spacing scale).
2. Build the reusable components in the order listed above.
3. Populate each section from the `COPY` blocks exactly as written. Do not paraphrase — all copy has been reviewed.
4. Wire up the carousel's keyboard and reduced-motion behavior last; it's the easiest place to introduce accessibility bugs.
5. Use placeholder images from Unsplash or a local grey block of the correct aspect ratio. Do not ship placeholders to production — every image must be replaced with an approved asset before the page goes live.
6. Leave the bracketed metrics (e.g. `[~40%]`) exactly as shown. A reviewer will replace them with final figures before launch.

**If anything in this spec is ambiguous, stop and ask.** Do not invent new copy, new metrics, or new sections.
