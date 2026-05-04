# ALKYME CONTENT STRATEGY

**Written by:** Maya Chen, Senior Marketing Strategist
**Date:** April 29, 2026
**Status:** NEEDS IMMEDIATE ACTION

---

## EXECUTIVE SUMMARY: WHAT'S BROKEN

You have TWO businesses fighting for attention on the same website.

**Business Model #1:** Venture Studio (build AI companies from scratch, spin them out, equity ownership)
**Business Model #2:** B2B Solutions (sell the tech from those ventures to external clients)

This hybrid model is BRILLIANT. Most companies would fuck this up by trying to be both at once. You're halfway there—but the current site is confused about which audience gets the homepage.

### THE PROBLEM

**Homepage:** Talks to investors/talent (venture studio angle)
**Solutions.html:** EXISTS but is ORPHANED in navigation (B2B client angle)
**AI.html:** Random page about AI capabilities—not clear who this is for
**Labs:** Good portfolio showcase, but doesn't connect to B2B offering
**About/Careers/Contact:** Solid, but all venture-studio focused

### THE DIAGNOSIS

You built a solutions page but BURIED IT. Navigation says: About, Labs, Careers, Contact. No mention of "Solutions" or "For Enterprises" or "Buy Our Tech." If I'm a potential B2B client, I have to KNOW this page exists to find it.

### THE FIX (High Level)

**PICK A PRIMARY AUDIENCE FOR THE HOMEPAGE.**

I recommend: VENTURE STUDIO FIRST. Here's why:

1. Ventures give you credibility (proof you can build)
2. Investors/talent are higher priority for growth
3. B2B clients can have a CLEAR secondary path

**THEN:** Make Solutions discoverable. Add it to nav. Make it impossible to miss.

**RESULT:** Two clear paths. No confusion. Each audience gets what they need.

---

## TARGET AUDIENCES (Who Are We Talking To?)

### Primary Audiences

**1. INVESTORS**
- What they want: Proof you can build companies, traction metrics, team credibility
- Current experience: Homepage works for them. Labs shows traction. Good.
- What's missing: Clear venture timeline, exit strategy, fundraising status

**2. TALENT (Engineers, Designers, Operators)**
- What they want: Interesting problems, equity, senior team, no bullshit
- Current experience: Careers page is EXCELLENT. Best page on the site.
- What's missing: Nothing major. Keep doing this.

### Secondary Audience

**3. B2B CLIENTS (Enterprises Who Want to Buy Your Tech)**
- What they want: Battle-tested infrastructure, fast deployment, proof it works
- Current experience: Solutions page exists but is INVISIBLE. Not in nav. No CTAs pointing to it.
- What's missing: DISCOVERABILITY. They need to know this exists.

### Tertiary Audiences (Don't Optimize For These)

**4. PRESS/MEDIA:** Will find you through About/Labs. Current content works.
**5. STRATEGIC PARTNERS:** Same as clients—need to find Solutions page.
**6. GENERAL CURIOSITY:** Doesn't matter. Not a conversion target.

---

## SITE ARCHITECTURE (What Pages We Need)

### KEEP (These Work)

| Page | Purpose | Audience | Status |
|------|---------|----------|--------|
| **Homepage** | Venture studio positioning, drive to Labs/About/Careers | Investors, Talent | NEEDS MINOR TWEAKS |
| **About** | Studio model, process, team philosophy | All audiences | STRONG. Keep. |
| **Labs** | Portfolio showcase, proof of traction | Investors, Clients | GOOD. Add B2B CTA. |
| **Careers** | Recruiting pitch, culture, open roles | Talent | BEST PAGE. Don't touch. |
| **Contact** | General inquiries, form, info | All audiences | FUNCTIONAL. Keep. |

### FIX (These Are Broken)

| Page | Problem | Fix |
|------|---------|-----|
| **Solutions.html** | ORPHANED. Not in navigation. Invisible to clients. | Add to nav as "Enterprise" or "For Clients" or "Solutions." Make it impossible to miss. |
| **AI.html** | Confusing purpose. Is this for clients? Talent? Press? Unclear. | MERGE into Solutions page as "How We Use AI" section OR delete and integrate into About. |

### KILL (Delete These)

Nothing to delete YET. But watch out for documentation bloat (you have 40+ markdown files in the repo—those don't belong in production).

---

## UPDATED PLATFORM POSITIONING (April 29, 2026)

**CRITICAL CORRECTION after conversation with Anthony:**

Maya initially interpreted the Solutions page platforms as "fake claims." **That was wrong.**

### THE ACTUAL REALITY

Alkymē operates in multiple industries:
- **Healthcare** (Sevā AI - public case study available)
- **Digital Publishing** (platform exists, no public case study yet)
- **Wellness** (platform exists, no public case study yet)
- **Legal Tech** (platform exists, no public case study yet)
- **Event Management** (internal platforms, not public)
- **Plus:** Logistics, Hospitality, Retail, Finance, Education, Manufacturing, Real Estate (not built yet, but capable of building)

### THE POSITIONING STRATEGY

**DON'T say:** "We've built platforms in these 8 industries" (implies all are live)
**DON'T say:** "Here are our case studies" (we only have 1 public one)

**DO say:** "We operate in these industries and understand how AI can transform them"

**Marcus's job:** Write industry positioning that:
1. Shows we understand the industry's AI potential
2. Hints at solutions we could provide (or have provided)
3. Doesn't claim specific case studies we can't share yet
4. Frames it as "industries we serve" not "platforms we've shipped"

**Example framing:**
- "Healthcare: AI-powered patient engagement and clinical workflow automation"
- "Publishing: Intelligent content management and audience personalization at scale"
- "Wellness: Automated scheduling and member experience platforms"

Each industry gets a description of **what AI solves in that vertical**, not specific proof points.

---

## NAVIGATION STRUCTURE (What Goes in the Header)

### CURRENT NAVIGATION (What You Have Now)

```
Alkymē | About | Labs | Careers | Contact
```

**Problem:** No path for B2B clients. Solutions page is invisible.

### RECOMMENDED NAVIGATION (Primary Option)

```
Alkymē | About | Labs | Enterprise | Careers | Contact
```

**Why "Enterprise" instead of "Solutions"?**
- "Solutions" is generic buzzword bullshit
- "Enterprise" signals who it's for
- Alternative: "For Clients" or "Platforms"

### ALTERNATIVE NAVIGATION (If You Want to Go Bold)

```
Alkymē | Studio | Ventures | Enterprise | Careers | Contact
```

**Why this works:**
- "Studio" = About page (venture studio model)
- "Ventures" = Labs (portfolio)
- "Enterprise" = Solutions (B2B offering)
- Clearer language, less generic

**My recommendation:** Go with PRIMARY option first. Test it. Don't overthink.

---

## PAGE-BY-PAGE BREAKDOWN

### 1. HOMEPAGE (index.html)

**Current State:** GOOD, but could be clearer about B2B path.

**Primary Audience:** Investors, Talent
**Secondary Audience:** B2B Clients (if they land here)

**Current H1:** "Build companies at venture speed"
**Assessment:** Works. Clear. Not fancy, but effective.

**Current Problem:** No mention of B2B offering. If a potential client lands here, they see "venture studio" and bounce.

**Fix:**
- Keep venture studio angle PRIMARY
- Add ONE line in hero that hints at B2B: "We also license our battle-tested tech to enterprises."
- Add a CTA section ABOVE footer: "Looking to deploy our tech? Explore enterprise solutions."

**MESSAGING HIERARCHY (What to Say):**

1. **Primary message:** We build AI companies from scratch (venture studio)
2. **Proof points:** 4 active ventures, real traction, paying customers
3. **Process:** Identify → Build → Scale (keep this, it's clear)
4. **Ventures showcase:** Epoch² and Sevā AI (good, keep)
5. **NEW CTA SECTION:** "Want this tech for your business? We license it." → Link to Solutions

**VOICE/TONE:** Current tone is perfect. Direct, no-bullshit, evidence-based. Don't change it.

---

### 2. ABOUT (about.html)

**Current State:** STRONG. One of the best pages.

**Primary Audience:** All audiences (investors, talent, clients, press)

**Current H1:** "Built 2 companies in 3 years. No pitch decks, no consultants."
**Assessment:** LOVE THIS. Don't touch it.

**What Works:**
- Clear studio model explanation
- 3-phase process (Originate → Build → Launch)
- Team philosophy section (senior teams, generalists, ownership)
- Current focus on Epoch² and Healthcare AI

**What's Missing:**
- No mention that this tech is AVAILABLE FOR PURCHASE
- Clients reading this page won't know they can license your infra

**Fix (Small Addition):**
- Add ONE sentence in "What makes us different" section: "When a venture proves itself, we package the tech for other companies—battle-tested infrastructure you can deploy in weeks."
- Add CTA at bottom: "Interested in licensing our platforms? View enterprise solutions."

**MESSAGING HIERARCHY:**
1. We're a venture studio that builds from scratch
2. Our process: 90 days to validate, 6 months to revenue, 12 months to profitability
3. Small senior teams, shared infrastructure, compounding learnings
4. Current ventures: Epoch² (gaming), Healthcare AI (marketing automation)
5. NEW: This tech is available to clients

---

### 3. LABS (labs.html)

**Current State:** GOOD. Shows traction, proves you can build.

**Primary Audience:** Investors, Talent
**Secondary Audience:** B2B Clients (if they're researching your credibility)

**Current H1:** "Two ventures. Real traction."
**Assessment:** Good. Specific. Honest.

**What Works:**
- Clear metrics (alpha with 6-person team, 3 paying clients, 85% cost reduction)
- Good case study links
- "How we choose what to build" section (smart, shows discipline)
- "What's next" pipeline section (creates excitement)

**What's Missing:**
- No bridge to B2B offering
- If I'm a healthcare exec, I see "Healthcare AI platform" and think "cool, but not for me"

**Fix:**
- Add ONE CTA at bottom of each venture card: "Interested in this tech for your business? Explore enterprise deployment."
- Or add a SINGLE section at the bottom: "Want to deploy this tech? We license battle-tested platforms to enterprises. Learn more."

**MESSAGING HIERARCHY:**
1. We've built 2 ventures with real traction
2. Epoch²: Gaming engine, procedural narratives, alpha with indie studios
3. Healthcare AI: 85% cost reduction, 3 paying clients, HIPAA-compliant
4. Pipeline: Legal AI, Supply chain intelligence (shows we're active)
5. NEW: This tech is available for licensing

---

### 4. CAREERS (careers.html)

**Current State:** BEST PAGE ON THE SITE. Don't touch it.

**Primary Audience:** Talent (engineers, designers, operators)

**Current H1:** "Build companies, not features"
**Assessment:** PERFECT. This is the kind of clarity I want everywhere.

**What Works:**
- Clear value props (multiple ventures, real equity, senior teams)
- Recent work section with actual products
- "How we work" philosophy cards (no bullshit, small teams, fast feedback)
- "What we're looking for" (you've shipped, you're technical, you prefer building)
- Benefits section (competitive comp, flexible work, growth budget)

**What's Missing:**
- NOTHING. This page is a masterclass in recruiting content.

**Fix:**
- NONE. Copy this tone to other pages.

**MESSAGING HIERARCHY:**
1. Build companies, not features (equity, autonomy, impact)
2. Work across multiple ventures (healthcare, gaming, SaaS)
3. Small senior teams (10 people, no juniors, everyone ships)
4. See real work: Epoch², Healthcare AI
5. How we work: Own outcomes, fast feedback, no theater
6. What we offer: Market comp + equity, full benefits, flexible work

---

### 5. CONTACT (contact.html)

**Current State:** FUNCTIONAL. Does the job.

**Primary Audience:** All audiences

**Current H1:** "Let's talk"
**Assessment:** Fine. Not exciting, but clear.

**What Works:**
- Simple form with interest selector (partnership, investment, careers, general)
- Contact info visible (email, phone, location)
- FAQ section answers common questions

**What's Missing:**
- B2B clients might not know which form option to pick
- "Partnership" could mean strategic partner OR client

**Fix:**
- Update form dropdown: Add "Enterprise solutions / licensing" as an option
- Update FAQ: Add "Can I license your venture tech?" question

**MESSAGING HIERARCHY:**
1. We're open to conversations (partnership, investment, talent)
2. NEW: We also license platforms to enterprises
3. Use the form or email/call directly
4. We respond in 2-3 business days
5. FAQ covers common questions

---

### 6. SOLUTIONS (solutions.html) — THE BIG ONE

**Current State:** GOOD PAGE. TERRIBLE DISCOVERABILITY.

**Primary Audience:** B2B Clients (enterprises, mid-market companies)

**Current H1:** "Venture-proven technology. Enterprise-ready solutions."
**Assessment:** Good positioning. "Venture-proven" is the differentiator.

**What Works:**
- Clear value props (battle-tested, weeks not years, real AI, your data)
- Process section (Match → Customize → Deploy → Scale)
- Available platforms accordion (healthcare, logistics, hospitality, etc.)
- Case studies with metrics
- Strong CTA

**What's BROKEN:**
- NOT IN NAVIGATION. Invisible.
- No inbound links from other pages
- If you don't know this exists, you'll never find it

**CRITICAL FIXES:**

1. **ADD TO NAVIGATION** (top priority)
   - Label: "Enterprise" or "For Clients" or "Solutions"
   - Make it visible in header nav

2. **ADD INBOUND LINKS FROM OTHER PAGES:**
   - Homepage: Add CTA section above footer
   - Labs: Add CTA at bottom of venture cards
   - About: Mention licensing in "What makes us different"

3. **MESSAGING TWEAKS:**
   - Current H1 is good, but could be clearer
   - Alternative: "Battle-tested tech from our ventures. Ready for your business."
   - Remove buzzwords: "leverage," "cutting-edge," "innovative"

**CONTENT PROBLEMS I SEE:**

**Problem #1: FAKE VENTURES**

The accordion lists 8 platforms:
1. Healthcare Intelligence (from Sevā AI) ✓ REAL
2. Supply Chain & Logistics (from Epoch²) ✗ BULLSHIT
3. Multi-Location Operations (hospitality venture) ✗ FAKE
4. E-Commerce & Retail ✗ FAKE
5. Financial Services ✗ FAKE
6. Education & Training ✗ FAKE
7. Manufacturing & Production ✗ FAKE
8. Real Estate & Property ✗ FAKE

**This is a CREDIBILITY KILLER.**

You have TWO real ventures:
- Sevā AI (healthcare marketing automation)
- Epoch² (procedural game engine)

You do NOT have logistics, hospitality, retail, finance, education, manufacturing, or real estate platforms. STOP CLAIMING YOU DO.

**Fix:**
- DELETE the fake platforms
- ONLY list what you've actually built
- If you want to show potential: "We've built healthcare and gaming platforms. Interested in other industries? Let's talk about custom builds."

**Honest version:**

```
AVAILABLE PLATFORMS

1. Healthcare Marketing Automation
   Derived from Sevā AI. HIPAA-compliant, multi-agent workflows,
   proven with 3 paying clients. 85% cost reduction vs agencies.

2. Procedural Game Engine (for licensing to indie studios)
   Derived from Epoch². Infinite replayability, adaptive AI storytelling,
   alpha-tested with partner studios.

CUSTOM BUILDS

Don't see your industry? We build ventures from scratch using
our proven process. If there's demand, we'll build it.
```

**Why this works:**
- HONEST. You're not claiming shit you haven't built.
- CREDIBLE. Shows real products, real traction.
- OPEN-ENDED. Clients can still inquire about custom work.

**MESSAGING HIERARCHY (Fixed):**

1. Battle-tested tech from real ventures (not prototypes)
2. Deploy in weeks, not years (we've done the hard work)
3. TWO proven platforms: Healthcare AI, Gaming Engine
4. White-label or licensed deployment, your choice
5. Case studies with metrics (proof it works)
6. Custom builds available if you need something else

---

### 7. AI.html (How We Use AI)

**Current State:** CONFUSING PURPOSE.

**Primary Audience:** ??? (Not clear)

**Current H1:** "Build companies at the speed of AI."
**Assessment:** Overlaps with homepage. Why does this exist?

**What This Page Does:**
- Shows AI models you use (Claude, GPT-4, DeepSeek, Grok)
- Explains how you use AI (code gen, content, prototyping, research)
- Sets boundaries (where AI doesn't belong)
- Trust section (HIPAA, no customer data, human accountability)

**The Problem:**
- Is this for CLIENTS? (to show you're AI-powered?)
- Is this for TALENT? (to show you use modern tools?)
- Is this for PRESS? (transparency about AI?)

**It's trying to be all three. Pick one.**

**DECISION POINT:**

**OPTION A: MERGE INTO SOLUTIONS**
- Take "How We Use AI" content
- Add it to Solutions page as a section
- Shows clients you're serious about AI
- Delete AI.html as standalone page

**OPTION B: MERGE INTO ABOUT**
- Take "Our AI Philosophy" content
- Add it to About page under "How We Work"
- Shows talent/investors you're thoughtful about AI
- Delete AI.html as standalone page

**OPTION C: KEEP AS STANDALONE (Not Recommended)**
- Only if you're getting press inquiries about AI ethics
- Only if you need a page to link from press releases
- Otherwise, it's orphaned content

**MY RECOMMENDATION:** OPTION A (Merge into Solutions).

**Why:** Clients care about HOW you use AI to build their platforms. Investors/talent don't need a separate page for this—they'll see it in About/Labs.

**What to Keep:**
- AI models section (shows you use best-in-class tools)
- How you use AI (code gen, content, research—clients want to know)
- Trust section (HIPAA-compliant, no customer data—critical for clients)

**What to Cut:**
- Duplicate hero section (already on homepage)
- Overly defensive tone ("AI doesn't belong in X, Y, Z")—simplify to "Human oversight at every step"

---

## VOICE & TONE GUIDELINES

### What's Working (Keep This)

**FROM CAREERS PAGE:**
- "Build companies, not features"
- "No bullshit"
- "Own outcomes, not tasks"
- "Evidence over ego"
- "No performance theater"

THIS IS YOUR VOICE. Clear. Direct. No fluff. Keep it.

**FROM ABOUT PAGE:**
- "No pitch decks, no consultants"
- "We don't wait for founders to walk through the door"
- "Evidence decides, not sunk cost"

LOVE THIS. Opinionated. Honest. Real.

### What to Avoid (Don't Do This)

**BUZZWORD BINGO:**
- "Synergy," "leverage," "cutting-edge," "innovative," "solutions," "paradigm shift"
- If your competitor could say it, DON'T SAY IT

**VAGUE CLAIMS:**
- "We're customer-focused" (everyone says this)
- "Best-in-class" (prove it or don't say it)
- "Industry-leading" (meaningless)

**FAKE METRICS:**
- Don't list 8 platforms when you've built 2
- Don't claim "50,000 patients" for Sevā if it's not true
- Numbers must be REAL and VERIFIABLE

### Voice Principles

**1. CLARITY OVER CLEVERNESS**
- "We build AI companies from scratch" > "We transform possibilities into realities"
- "85% cost reduction" > "Significant savings"
- "3 paying customers" > "Growing client base"

**2. PROOF OVER PROMISES**
- "Game engine in alpha with 2 partner studios" > "Revolutionary gaming platform"
- "Healthcare AI serving 3 regional health systems" > "Transforming healthcare"
- Show, don't tell

**3. HONEST ABOUT CONSTRAINTS**
- "We've built 2 ventures. More in the pipeline." > "Leading venture studio with 8 platforms"
- "10-person team, all senior" > "Growing team of experts"
- Specificity builds trust

**4. ONE MESSAGE PER PAGE**
- Homepage: Venture studio angle
- Solutions: B2B tech licensing
- Labs: Portfolio proof
- Careers: Recruiting pitch
- Don't mix messages

---

## WHAT TO BUILD, FIX, DELETE

### BUILD (New Stuff)

**PRIORITY 1: Add Solutions to Navigation**
- Update header nav on ALL pages
- Label: "Enterprise" or "For Clients"
- Make it visible, impossible to miss

**PRIORITY 2: Add B2B CTAs to Existing Pages**
- Homepage: Section above footer ("Want this tech? Explore enterprise solutions")
- Labs: CTA at bottom of venture cards
- About: One sentence in "What makes us different"

**PRIORITY 3: Create Honest Solutions Page**
- Cut fake platforms (logistics, hospitality, retail, finance, education, manufacturing, real estate)
- Only list real ventures: Healthcare AI, Gaming Engine
- Add section for custom builds

### FIX (Broken Stuff)

**PRIORITY 1: Solutions.html**
- Remove fake platforms
- Keep only Healthcare AI and Epoch² gaming engine
- Add "Custom builds available" section
- Merge AI.html content into this page

**PRIORITY 2: AI.html**
- Decide: Merge into Solutions OR About OR Delete
- My vote: Merge into Solutions (clients care about this)

**PRIORITY 3: Contact Form**
- Add "Enterprise solutions / licensing" to dropdown
- Add FAQ: "Can I license your venture tech?"

### DELETE (Kill It)

**IMMEDIATE:**
- Fake platform claims on Solutions page
- Any mention of ventures you haven't built
- Duplicate content (AI.html if merged)

**FUTURE CLEANUP:**
- 40+ markdown docs in repo (keep these out of production)
- Any page that doesn't serve a clear audience

---

## IMPLEMENTATION ROADMAP

### WEEK 1: Critical Fixes

**Day 1-2:**
1. Add "Enterprise" to navigation (all pages)
2. Update Solutions page: Remove fake platforms, keep only Healthcare AI + Epoch²
3. Add "Custom builds" section to Solutions

**Day 3-4:**
4. Add B2B CTAs to Homepage (section above footer)
5. Add B2B CTAs to Labs (bottom of venture cards)
6. Update Contact form (add "Enterprise solutions" option)

**Day 5:**
7. Merge AI.html into Solutions OR About (decision required)
8. QA all changes

### WEEK 2: Polish

**Day 1-2:**
1. Rewrite Solutions H1 if needed (currently good, but test alternatives)
2. Add transition copy to About page (mention licensing)
3. Update meta descriptions for Solutions page

**Day 3-4:**
4. Review all CTAs for consistency
5. Check that B2B path is clear from every page
6. Test navigation flow

**Day 5:**
7. Final review
8. Ship it

### WEEK 3: Measure

1. Track Solutions page traffic (should increase significantly)
2. Track Contact form submissions ("Enterprise solutions" option)
3. Run user tests: Can B2B clients find what they need?
4. Iterate based on data

---

## METRICS TO TRACK

### Discovery Metrics
- **Solutions page traffic:** Should increase 300-500% after nav change
- **Time on Solutions page:** Should be 60+ seconds (sign of engagement)
- **Contact form submissions:** Track "Enterprise solutions" option

### Conversion Metrics
- **B2B demo requests:** Track separately from general inquiries
- **Client pipeline:** How many leads from Solutions page?
- **Deal close rate:** Are B2B clients converting?

### Audience Split
- **Venture studio traffic:** Homepage → About → Labs → Careers
- **B2B client traffic:** Homepage → Solutions → Contact OR Labs → Solutions → Contact

You should see TWO clear paths. If traffic is mixed, your messaging is still confusing.

---

## FINAL THOUGHTS (From Maya)

You're sitting on a GOLDMINE and hiding it.

Most venture studios can't sell their tech because it's half-baked. You've actually PROVEN your platforms work—Sevā AI has paying customers, Epoch² is in alpha. That's RARE.

But you buried the Solutions page. Made it invisible. A potential client lands on your site, sees "venture studio," and leaves. They don't know you SELL this stuff.

**The fix is simple:**

1. Add Solutions to nav (make it visible)
2. Add CTAs pointing to it (from Homepage, Labs, About)
3. Be HONEST about what you've built (2 platforms, not 8)
4. Let each audience find their path (investors → Labs, clients → Solutions)

**One more thing:**

Stop hedging. Your Careers page has the BEST voice on the site:

> "Build companies, not features"
> "Own outcomes, not tasks"
> "No performance theater"

THAT'S the Alkymē voice. Use it everywhere.

Kill the buzzwords. Kill the fake platforms. Kill the vague claims.

Be specific. Be honest. Be bold.

You've built real companies. ACT LIKE IT.

---

**Next Steps:**

1. Founder reviews this strategy (approve/reject recommendations)
2. Marcus (Content Director) writes updated copy based on this framework
3. Isa (Lead Dev) implements nav changes, CTA additions, page updates
4. Ship in 2 weeks, measure in week 3

Questions? Fight me on anything. I'd rather debate now than ship garbage.

— Maya

