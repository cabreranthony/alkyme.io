# Content deck — Home (`index.html`)

**Page:** Home  
**Target file:** `index.html`  
**Last aligned with HTML:** 2026-04-01 (synced from deck)

Use this as the canonical draft for home-page copy. Section IDs match `id="…"` anchors where applicable.

---

## Meta

- **`<title>`:** Alkymē | Startup Studio
- **Meta description:** Alkyme is a Los Angeles startup studio. We originate, test, and build companies, then spin out the ones that earn traction.

---

## Global chrome

### Top navigation (labels only)

- Home · About · Careers
- Contact (button)

---

## `#hero` — Introduction

**Eyebrow:** Startup Incubator  

**H1:** We build companies from ideas we start ourselves.

**Body:**  
Based in Los Angeles. We originate ideas, test them in market, and build the ones that show real traction into standalone companies.

This is a direct view into how we work and what comes out of the studio.

**CTAs:** Ventures · Contact  

**Media notes:** Background video + poster URLs are in HTML (`hero-video`); keep in sync if you swap assets.

### Hero bridge — “Studio in practice”

**Eyebrow:** Studio model
**H2:**  Ideas are tested, not pitched
**Sub:** Everything moves through the same system. Find a real problem, test it quickly, and invest only when there is signal.

**Card 1**  
- Title: Start with problems worth solving
- Text: Ideas come from gaps in the market, not brainstorming sessions. We look for pain that is clear and repeatable.
- Image note: Whiteboard sessions, messy thinking, not staged collaboration
- Image alt: Team reviewing work together at a table  

**Card 2**  
- Title: Test with real users
- Text: We validate demand with actual behavior. Landing pages, prototypes, early customers. Not opinions.
- Image note: Close up of product use, testing, analytics
- Image alt: Colleagues collaborating in a bright studio  

**Card 3**  
- Title: Build what earns traction
- Text: The ideas that show signal get time, capital, and a team. Everything else stops.
- Image note: Team building product, shipping, not planning
- Note: See the full loop on the next section. Link text: From thesis to traction → `#what-we-do`  
- Image alt: Product analytics and dashboards on a laptop  

**Primary CTA:** See how the studio runs → `#how-studio-runs`

---

## `#how-studio-runs` — Studio carousel band

**Eyebrow:** Operating model
**H2:** One team. Multiple ventures.
**Lede:** We run ideas in parallel and make decisions quickly. Most ideas do not make it through. The ones that do are built into real businesses.


**Dynamic detail line (initial / slide 1):** Thesis work first—problem, economics, and whether we want to own the outcome.

**Dots (aria labels):** Design · Build · Portfolio · Decide

### Slide / card 1 — Design  
- **data-detail (copy column):** Thesis work first—problem, economics, and whether we want to own the outcome.  
- Kicker: Design  
- Title: Opportunity first
- Text: We define the problem, market, and economics before we build anything.
- CTA: Learn more (opens detail modal `studio-loop`, slide 0)

### Slide / card 2 — Build  
- **data-detail:** Build and launch in-house—product, operations, and go-to-market until there’s a live offer.  
- Kicker: Build  
- Title: Execution in one loop
- Text: Product, operations, and go to market stay tightly connected until something real is live.
- CTA: Learn more → modal `studio-loop`, slide 1

### Slide / card 3 — Portfolio  
- **data-detail:** Multiple internal ventures; learnings and tooling carry across the portfolio.  
- Kicker: Portfolio  
- Title: Shared systems
- Text: Each venture is independent but benefits from shared tooling, data, and lessons.
  
- CTA: Learn more → modal `studio-loop`, slide 2

### Slide / card 4 — Decide
- **data-detail:** Spin-out, invest further, or stop—decisions tied to evidence, not schedule.  
- Kicker: Decide
- Title: Evidence over opinion
- Text: We invest more, spin out, or shut down based on performance.
- CTA: Learn more → modal `studio-loop`, slide 3

**Footer CTA:** Explore the full process → modal `studio-loop`, slide 0

---

## `#studio-approach` — Split band (placeholder)

**Eyebrow:** Building deliberately  
**H2:** Placeholder headline—how we operate the studio for everyone downstream  
**Lede:** Placeholder supporting copy: this band is a layout shell modeled on a split hero + anchored detail block. Swap in your real commitment, policy, or narrative—then link visitors into the studio loop below.

**Image alt:** Two colleagues talking in a bright office  

**Subhead:** Placeholder subhead—the practical lens we’re taking from thesis to spin-out  
**CTA:** Learn more → `#what-we-do`

**Column 1:** Placeholder column one: we’re still drafting the specifics here. Use this space for the first half of a longer explanation—discovery, constraints, or how you gather input before shipping.  

**Column 2:** Placeholder column two: mirror the reference layout with a second paragraph—principles, safeguards, or what happens when evidence contradicts the plan. Tight line length keeps it readable side by side.

---

## `#what-we-do` — Studio (cloud section)

**Eyebrow:** Studio  
**H2:** From idea to traction
**Intro:** Every idea moves through the same stages. No shortcuts.

### Box — Step 1  
- Label: Define  
- Title: Define the opportunity
- Desc: Understand the problem, who has it, and why it matters. Kill weak ideas early. 
- CTAs: Venture themes · Learn more  

### Box — Step 2  
- Label: Validate  
- Title: Validate demand  
- Desc: Test quickly with real users. Look for behavior, not feedback.
- CTAs: Why Alkymē · Our focus  

### Box — Step 3
- Label: Scale   
- Title: Build and grow
- Desc: Turn signal into a product, then into a business.
- CTAs: Studio model · Contact  

**Image alts:** As in HTML (studio, whiteboard, laptop analytics).

---

## `#ventures` — Ventures band

**Eyebrow:** Ventures  
**H2:** Where we focus
**Lede:** We build in areas where strong execution compounds over time. 

**Intro CTA (button):** How we run the studio → modal `studio-loop`, slide 0

### Card 1 — Operational systems
- Text: Modern tools for industries still running on outdated processes. 
- CTA: Learn more → modal `venture-service`

### Card 2 — Workflow software  
- Text: Products that improve how teams operate and scale output.
- CTA: Learn more → modal `venture-workflow`

### Card 3 — Commerce tools  
- Text: Solutions that increase conversion, retention, and efficiency.
- CTA: See how we choose what to build→ modal `venture-commerce`

---

## `#why` — Operating principles

**Eyebrow:** How we work
**H2:** Principles that guide decisions
**Intro:** Internal capital and reputation on the line—narrow bets, short feedback loops, tighter process each cycle.

| Principle | Body |
|-----------|------|
| Evidence first | We test before we commit. |
| Speed matters  | Fast cycles beat perfect plans. |
| Reuse what works | What we learn once applies everywhere. |
| Build for durability | We care about long term value, not short term metrics. |

---

## `#model` — Our model + CTA

### Band copy  
**Eyebrow:** Our model  
**H2:** De-risking internal bets  

**Bullets:**  
1. In-house team on ideas we originate—strategy, product, and go-to-market together.  
2. Gates on demand, economics, and repeatability before spin-out or further capital.  
3. Lean incubation: learning speed over presentation overhead.  
4. Cross-portfolio playbooks so each launch inherits prior work.  

**Link:** Contact → `contact.html`  

**Visual alt:** Team collaborating in a bright office  

### CTA strip  
**Eyebrow:** Contact  
**H2:** Get in touch
**Body:** Questions, opportunities, partnerships, or interest in working together. Send a note and we will route it internally.
**Button:** Contact → `contact.html`

---

## `#careers` — People and culture strip

**Eyebrow:** Careers
**H2:** Work on ideas that are still being figured out
**Text:** Join the studio or a venture team. You will be working on real products from day one.
**CTA:** View open roles → Breezy URL (see HTML for exact link)  

**Figure alt:** Engineer working at a desk with multiple monitors  

---

## Detail modal copy (`DETAIL_MODAL_DATA`)

Long-form slides for **Learn more** modals are stored in the `<script>` block in `index.html` (keys: `studio-loop`, `venture-service`, `venture-workflow`, `venture-commerce`).  

**Workflow:** When you revise modal copy, either edit the deck here in an appendix later, or edit the JS object directly until you adopt JSON/CMS. *Not duplicated in this file yet* to avoid two sources—sync from HTML when you extract.

---

## Footer

**Copyright line:** © [year] Alkyme. All rights reserved.  
**Links:** About · Careers · Contact · hello@alkyme.io  

---

## Future decks

- `content/content-deck-about.md`  
- `content/content-deck-contact.md`  
- `content/content-deck-careers.md`  

Add when you’re ready to draft those pages outside HTML.
