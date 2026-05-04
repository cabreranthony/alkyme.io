# Alkyme Site Architecture Proposal

**Date:** 2026-05-03
**Purpose:** Restructure site navigation and information architecture to properly represent all three business pillars

---

## Executive Summary

Current site structure emphasizes the venture studio (Pillar 1) and bespoke solutions (Pillar 3) but **completely omits** marketing/digital services for SMBs (Pillar 2). This proposal presents three navigation models that balance all three pillars and serve distinct audience types.

### Current Navigation Problems
1. **Missing Pillar 2**: No entry point for SMB marketing/digital services
2. **Confusing terminology**: "Labs" vs "Ventures" vs "Portfolio"
3. **Over-emphasis on AI**: Not every client needs AI—some need websites, branding, ops automation
4. **Unclear differentiation**: Solutions page focuses only on tech licensing, not the full service spectrum

---

## Three Navigation Architecture Options

### Option A: Three Equal Pillars (Recommended)

**Navigation Structure:**
```
Home | About | Ventures | Services | Solutions | Careers | Contact
```

**Philosophy:** Clear separation of the three business models with equal visual weight

#### Detailed Page Structure

**1. Home (/)**
- Hero: "We build companies. We help businesses grow. We license proven tech."
- Three-column intro to each pillar
- Featured venture spotlight
- Client testimonials (mix of venture partners, SMB clients, enterprise licensees)
- CTA matrix: "Launch a venture" | "Grow your business" | "Deploy our tech"

**2. About (/about.html)**
- Current structure (keep as-is)
- Add section: "Three ways to work with us"
- Team philosophy
- Studio model explanation

**3. Ventures (/ventures.html)** - *Renamed from "Labs"*
- Hero: "Building companies from scratch"
- Active portfolio (Epoch², Healthcare AI)
- Pipeline/Research phase ventures
- Venture selection criteria
- Partnership opportunities (for founders/investors)
- CTA: "Partner with us" | "License our tech"

**4. Services (/services.html)** - *NEW PAGE*
- Hero: "Marketing and digital transformation for growing businesses"
- Service offerings:
  - **Website Development** (design, build, launch)
  - **Digital Marketing** (SEO, content, paid ads)
  - **Brand Strategy** (positioning, messaging, visual identity)
  - **Operations Automation** (CRM setup, workflow optimization)
- Service packages (Starter, Growth, Scale)
- SMB case studies
- Process: Discovery → Strategy → Execution → Growth
- CTA: "Start a project" | "Schedule consultation"

**5. Solutions (/solutions.html)**
- Current content (keep enterprise AI focus)
- Emphasize "battle-tested from our ventures"
- Expand beyond AI to include:
  - Healthcare marketing automation (Sevā AI)
  - Narrative game engine (Epoch²)
  - Future: Logistics, ops platforms
- De-emphasize "AI" in headlines, emphasize "proven systems"
- CTA: "Book a demo" | "View case studies"

**6. Careers (/careers.html)**
- Current structure (keep as-is)
- Add clarity: roles support all three pillars

**7. Contact (/contact.html)**
- Intent selector:
  - "I want to launch a venture"
  - "I need marketing/digital services"
  - "I want to license your technology"
  - "I'm interested in partnering/investing"
  - "General inquiry"

#### Pros
- ✅ Clear separation of business models
- ✅ Each pillar gets equal prominence
- ✅ Easy for users to self-select their path
- ✅ Scalable (can add more ventures/services/solutions)
- ✅ SEO-friendly (dedicated pages for each offering)

#### Cons
- ❌ Five main nav items (slightly busy)
- ❌ May confuse visitors about "what Alkyme is"
- ❌ Requires new "Services" page development

---

### Option B: Consolidated Dropdown

**Navigation Structure:**
```
Home | About | What We Do ▼ | Portfolio | Careers | Contact
                  └─ Ventures
                  └─ Services
                  └─ Solutions
```

**Philosophy:** Simplify top-level nav, organize offerings under "What We Do"

#### Detailed Page Structure

**1. Home (/)**
- Same as Option A

**2. About (/about.html)**
- Same as Option A

**3. What We Do (/what-we-do.html)** - *NEW HUB PAGE*
- Hero: "Three ways we build"
- Three large cards:
  - **Build Ventures** → Links to /ventures
  - **Grow Businesses** → Links to /services
  - **License Technology** → Links to /solutions
- Use case selector: "I'm a..." (Founder | SMB Owner | Enterprise CTO)
- Process comparison chart
- CTA matrix for each pillar

**4. Ventures (/ventures.html)**
- Same as Option A

**5. Services (/services.html)**
- Same as Option A

**6. Solutions (/solutions.html)**
- Same as Option A

**7. Portfolio (/portfolio.html)** - *NEW PAGE*
- All ventures (active + graduated + shut down)
- Filter by: Status (Active, Graduated, Research) | Industry
- Success stories and learnings
- CTA: "Work with these companies" | "License their tech"

**8. Careers (/careers.html)**
- Same as Option A

**9. Contact (/contact.html)**
- Same as Option A

#### Pros
- ✅ Cleaner top-level navigation (4 items vs 5)
- ✅ Hub page explains the business model clearly
- ✅ "What We Do" is intuitive for first-time visitors
- ✅ Portfolio page consolidates all ventures

#### Cons
- ❌ Extra click to reach ventures/services/solutions
- ❌ Dropdown navigation can reduce discoverability
- ❌ Requires two new pages (hub + portfolio)

---

### Option C: Audience-Focused

**Navigation Structure:**
```
Home | About | For Founders | For Businesses | Portfolio | Careers | Contact
```

**Philosophy:** Organize by target audience, not offering type

#### Detailed Page Structure

**1. Home (/)**
- Hero: "Choose your path"
- Audience selector with three paths:
  - **For Founders**: Launch a venture with us
  - **For Businesses**: Marketing, digital, tech solutions
  - **For Investors**: Partner on portfolio companies
- Featured ventures
- Client testimonials by audience type

**2. About (/about.html)**
- Same as Option A

**3. For Founders (/for-founders.html)** - *NEW PAGE*
- Hero: "Build your company with venture studio backing"
- What we offer founders:
  - Shared infrastructure
  - Proven operators
  - Capital and strategic guidance
- How to partner
- Application process
- Active ventures showcase
- CTA: "Apply to build" | "Schedule a call"

**4. For Businesses (/for-businesses.html)** - *NEW PAGE*
- Hero: "Grow faster with battle-tested services and technology"
- Two-column layout:
  - **Column A: Services** (SMB marketing/digital)
  - **Column B: Solutions** (enterprise tech licensing)
- Self-selector: "I need..." (Marketing help | Technology | Both)
- Case studies from both pillars
- Service packages + solution tiers
- CTA: "Start a project" | "Book a demo"

**5. Portfolio (/portfolio.html)**
- Same as Option B
- Emphasis on "available for licensing"

**6. Careers (/careers.html)**
- Same as Option A

**7. Contact (/contact.html)**
- Audience-based intent selector:
  - "I'm a founder"
  - "I'm a business owner"
  - "I'm an investor"
  - "General inquiry"

#### Pros
- ✅ User-centric (speak to "who" not "what")
- ✅ Combines services + solutions for business owners
- ✅ Clear paths for each audience segment
- ✅ Reduces decision fatigue

#### Cons
- ❌ Less clear for SEO (services/solutions combined)
- ❌ May confuse users who don't fit neat categories
- ❌ Harder to scale if audience segments expand
- ❌ "For Businesses" page combines two distinct offerings

---

## Page Structure Deep Dive

### New Page: Services (/services.html)

**Required for Options A, B, C**

#### Hero Section
```
Headline: Marketing and digital transformation for growing businesses
Subhead: Full-service support from brand strategy to website launch to growth campaigns
CTA: "View packages" | "Schedule consultation"
```

#### Service Categories (4 Cards)

1. **Website Development**
   - Custom design and development
   - E-commerce platforms
   - Performance optimization
   - Hosting and maintenance

2. **Digital Marketing**
   - SEO and content strategy
   - Paid advertising (Google, Meta, LinkedIn)
   - Email marketing automation
   - Analytics and reporting

3. **Brand Strategy**
   - Brand positioning and messaging
   - Visual identity design
   - Brand guidelines and assets
   - Rebrands and refreshes

4. **Operations Automation**
   - CRM implementation (HubSpot, Salesforce)
   - Workflow automation (Zapier, Make)
   - Process documentation
   - Team training

#### Service Packages (Pricing Tiers)

**Starter** ($5K–$15K)
- Single service focus
- 4–6 week timeline
- Best for: New businesses, single-channel needs

**Growth** ($15K–$50K)
- Multi-channel strategy
- 8–12 week timeline
- Best for: Scaling businesses, comprehensive digital presence

**Scale** ($50K+)
- Full transformation
- Ongoing partnership
- Best for: Established businesses, enterprise needs

#### Process Timeline
1. **Discovery** (Week 1): Audit, goals, strategy
2. **Strategy** (Week 2–3): Roadmap, creative, setup
3. **Execution** (Week 4–8): Build, launch, iterate
4. **Growth** (Week 9+): Optimize, scale, report

#### SMB Case Studies
- Local restaurant: Website + SEO → 3x online orders
- Healthcare clinic: Brand refresh + paid ads → 40% patient growth
- E-commerce: Shopify build + email automation → $500K annual revenue

#### CTA Section
"Ready to grow? Let's build your roadmap."
- Schedule free consultation
- View full case studies
- Download service guide (PDF)

---

### Revised Page: Solutions (/solutions.html)

**Updates for all options**

#### Key Changes
1. **Less AI-heavy language**: Emphasize "proven systems" not "AI solutions"
2. **Venture-sourced**: "Built for our companies, available for yours"
3. **Broader categories**: Not just healthcare AI

#### Updated Hero
```
OLD: Deploy AI your business will actually use
NEW: Deploy technology proven in real companies

OLD: License the same AI platforms powering our portfolio companies
NEW: License the same systems powering our ventures—battle-tested, customizable, ready to deploy
```

#### Offering Categories (Accordion)

1. **Healthcare Marketing Automation** (Sevā AI)
   - Currently: 3 clients, 50K+ patients
   - Available: HIPAA-compliant, white-label
   - Use case: Regional health systems, private practices, telehealth

2. **Procedural Narrative Engine** (Epoch²)
   - Currently: Alpha with 2 game studios
   - Available: Unity/Unreal SDK, licensing model
   - Use case: Game studios, interactive media, training simulations

3. **Supply Chain Intelligence** (Research phase)
   - Currently: In development
   - Preview: Predictive logistics for regional distributors
   - Use case: 10–50 truck operations

4. **Operations Platforms** (Generic category)
   - CRM systems
   - Workflow automation
   - Data analytics dashboards
   - Built from venture learnings

#### Messaging Shifts
- "AI" → "Intelligent systems" or "Automation"
- "AI-powered" → "Battle-tested" or "Proven"
- "Deploy AI" → "Deploy technology"
- Emphasize operational excellence, not just technical specs

---

## User Journey Maps

### Journey 1: Startup Founder Seeking Venture Partnership

**Persona:** Sarah, Technical Co-Founder
**Goal:** Find a venture studio to help build her healthcare tech idea
**Entry Point:** Google search "Los Angeles venture studio"

#### Option A Journey
1. Land on **Home** → See "Build companies at venture speed"
2. Click **"Ventures"** nav → Learn about portfolio approach
3. Review **Epoch²** and **Healthcare AI** case studies
4. Click **"Partner with us"** CTA
5. **Contact form** with intent: "I want to launch a venture"
6. Receive response: Intro call scheduled

**Friction points:** None — clear path

#### Option B Journey
1. Land on **Home** → See "Three ways we build"
2. Click **"What We Do"** dropdown → Select **"Ventures"**
3. Same as steps 3–6 above

**Friction points:** Extra click through dropdown

#### Option C Journey
1. Land on **Home** → See audience selector
2. Click **"For Founders"** nav
3. Read application process
4. Review portfolio companies
5. Click **"Apply to build"** CTA
6. Same contact flow

**Friction points:** None — most direct path

**Winner for this journey:** Option C (audience-focused)

---

### Journey 2: Small Business Owner Needing Website + Marketing

**Persona:** Marcus, Local Restaurant Owner
**Goal:** Rebuild outdated website and improve Google visibility
**Entry Point:** Referral from another business owner

#### Option A Journey
1. Land on **Home** → See three pillars
2. Click **"Services"** nav → See service categories
3. Review **Website Development** + **Digital Marketing**
4. Check **Service Packages** → Identify "Growth" tier
5. Review SMB case study (restaurant success)
6. Click **"Schedule consultation"** CTA
7. **Contact form** with intent: "I need marketing/digital services"

**Friction points:** None — clear service page

#### Option B Journey
1. Land on **Home** → See "Three ways we build"
2. Click **"What We Do"** dropdown → Select **"Services"**
3. Same as steps 3–7 above

**Friction points:** Dropdown adds friction for first-time visitors

#### Option C Journey
1. Land on **Home** → See audience selector
2. Click **"For Businesses"** nav
3. See **Services** + **Solutions** in split layout
4. Click **"I need marketing help"** selector → Filters to services
5. Same as steps 3–7 from Option A

**Friction points:** Combined page may confuse (services vs solutions)

**Winner for this journey:** Option A (dedicated services page)

---

### Journey 3: Enterprise CTO Seeking Healthcare AI Platform

**Persona:** Dr. Jennifer Liu, CTO of Regional Health System
**Goal:** Find proven AI platform for patient engagement
**Entry Point:** LinkedIn ad "Healthcare AI Platform"

#### Option A Journey
1. Land on **Solutions** page → See "Deploy technology proven in real companies"
2. Expand **Healthcare Marketing Automation** accordion
3. Review **Sevā AI** metrics (3 clients, 50K patients, 85% cost reduction)
4. Watch case study video
5. Click **"Book a demo"** CTA
6. **Contact form** with intent: "I want to license your technology"
7. Receive response: Demo scheduled with technical team

**Friction points:** None — direct landing page

#### Option B Journey
1. Same as Option A (solutions page is identical)

**Friction points:** None

#### Option C Journey
1. Land on **For Businesses** page → See Services + Solutions
2. Click **"I need technology"** selector → Filters to Solutions
3. Same as steps 2–7 from Option A

**Friction points:** Combined page adds slight confusion

**Winner for this journey:** Options A & B (dedicated solutions page)

---

### Journey 4: Investor/Partner Exploring Portfolio

**Persona:** Alex, Angel Investor
**Goal:** Evaluate Alkyme's venture portfolio for potential investment
**Entry Point:** Crunchbase profile link

#### Option A Journey
1. Land on **Home** → See studio stats
2. Click **"Ventures"** nav → See active portfolio
3. Click **Epoch²** case study → Review traction metrics
4. Return to Ventures → Check pipeline section
5. Click **"Partner with us"** CTA
6. **Contact form** with intent: "I'm interested in partnering/investing"

**Friction points:** No centralized portfolio view

#### Option B Journey
1. Land on **Home** → Same as above
2. Click **"Portfolio"** nav → See all ventures (active, graduated, research)
3. Filter by **Status: Active** → Review Epoch² and Healthcare AI
4. Click **Epoch²** case study
5. Same as steps 5–6 above

**Friction points:** None — dedicated portfolio page is ideal

#### Option C Journey
1. Land on **Home** → See audience paths
2. Click **"Portfolio"** nav → Same as Option B
3. Same as steps 3–6 above

**Friction points:** None

**Winner for this journey:** Options B & C (dedicated portfolio page)

---

## Comparative Analysis

### Journey Success by Option

| User Type | Option A | Option B | Option C |
|-----------|----------|----------|----------|
| Founder seeking venture partnership | Good | Fair | **Excellent** |
| SMB owner needing services | **Excellent** | Good | Fair |
| Enterprise CTO seeking tech | **Excellent** | **Excellent** | Good |
| Investor exploring portfolio | Fair | **Excellent** | **Excellent** |

### Implementation Complexity

| Option | New Pages Required | Development Time | Content Lift |
|--------|-------------------|------------------|--------------|
| **Option A** | 1 (Services) | 2–3 weeks | Medium |
| **Option B** | 3 (What We Do hub, Services, Portfolio) | 4–5 weeks | High |
| **Option C** | 3 (For Founders, For Businesses, Portfolio) | 4–5 weeks | High |

### SEO Impact

| Option | Keyword Targeting | Organic Discoverability | Ranking Potential |
|--------|------------------|------------------------|------------------|
| **Option A** | Excellent (dedicated pages) | High | **Best** |
| **Option B** | Good (some consolidation) | Medium | Good |
| **Option C** | Fair (audience-focused) | Medium | Fair |

---

## Recommended Approach: Option A (Three Equal Pillars)

### Rationale

**1. Clearest Communication**
- Each business pillar gets dedicated real estate
- No ambiguity about what Alkyme offers
- Easy to explain: "We build ventures, help businesses grow, and license proven tech"

**2. Best for SEO**
- Dedicated `/services` page ranks for "Los Angeles digital marketing agency"
- Dedicated `/ventures` page ranks for "LA venture studio"
- Dedicated `/solutions` page ranks for "healthcare AI platform"

**3. Scalable Architecture**
- Easy to add new services (expand services page)
- Easy to add new ventures (expand ventures page)
- Easy to add new solutions (expand solutions page)

**4. Serves All Audience Types**
- Founders → Ventures page
- SMB owners → Services page
- Enterprise CTOs → Solutions page
- Investors → Ventures page + About

**5. Lowest Implementation Risk**
- Only **one new page** required (Services)
- Other pages need updates, not full rebuilds
- Can launch incrementally (Services page first)

### Implementation Phases

#### Phase 1: Foundation (Weeks 1–2)
- Rename "Labs" → "Ventures" in navigation
- Update home page hero: "We build companies. We help businesses grow. We license proven tech."
- Add three-pillar intro section to home page
- Create intent selector on contact page

#### Phase 2: Services Page (Weeks 3–4)
- Build `/services.html` page (see detailed structure above)
- Service categories, packages, case studies
- Contact form integration
- Update footer navigation

#### Phase 3: Content Refinement (Weeks 5–6)
- Rewrite Solutions page (less AI-heavy, more "proven systems")
- Add "Three ways to work with us" section to About page
- Update Ventures page with clearer partnership CTAs
- Create SMB case studies for Services page

#### Phase 4: Cross-Linking & Optimization (Week 7)
- Add cross-links between pillars:
  - Services page → "Need enterprise tech? See Solutions"
  - Solutions page → "Need marketing support? See Services"
  - Ventures page → "Deploy this tech: See Solutions"
- Update all CTAs to align with three-pillar model
- SEO optimization for new Services page

---

## Alternative Recommendation: Hybrid Approach

If **Option A** feels too complex, consider this **simplified hybrid**:

### Navigation Structure
```
Home | About | Portfolio | Services & Solutions | Careers | Contact
```

#### Combined Services & Solutions Page

**Two-column layout:**
- **Left column:** For growing businesses (Services)
- **Right column:** For enterprises (Solutions)

**Self-selector at top:**
"I'm looking for..."
- [ ] Marketing and digital services → Scrolls to Services
- [ ] Enterprise technology licensing → Scrolls to Solutions

**Pros:**
- Only one new page required
- Simpler navigation (4 main items)
- Clear differentiation within single page

**Cons:**
- Less SEO value (combined page)
- May confuse visitors about Alkyme's primary focus
- Harder to scale (page becomes long)

**Only use this if:** Development resources are extremely limited

---

## Next Steps

### Immediate Actions
1. **Stakeholder alignment:** Review three options with leadership team
2. **Audience validation:** Survey 5–10 recent contacts about navigation clarity
3. **Competitive analysis:** Review 3–5 venture studio websites for navigation patterns
4. **Decision:** Select Option A, B, C, or Hybrid by [DATE]

### Post-Decision
1. **Wireframe new pages** (Services, Portfolio, Hub pages as needed)
2. **Write core copy** for all new/updated pages
3. **Design comps** for new page layouts
4. **Develop and test** (mobile-first, accessibility)
5. **Launch and monitor** (analytics, heatmaps, user feedback)

### Success Metrics (3 months post-launch)
- **Contact form submissions by intent:**
  - Venture partnerships: 5+ per month
  - Services inquiries: 10+ per month
  - Solutions demos: 3+ per month
- **Bounce rate on new pages:** <40%
- **Time on page for Services:** >2 minutes
- **Navigation click-through:** 30%+ click nav items beyond Home

---

## Appendix: Navigation Sitemap (Option A)

```
Alkyme.io
│
├── Home (/)
│   ├── Hero: Three pillars intro
│   ├── Studio stats
│   ├── Featured ventures
│   ├── Client testimonials
│   └── CTA matrix
│
├── About (/about.html)
│   ├── Studio model
│   ├── How we work
│   ├── Three ways to work with us [NEW]
│   ├── Team philosophy
│   └── Current focus
│
├── Ventures (/ventures.html) [RENAMED from Labs]
│   ├── Active portfolio
│   │   ├── Epoch² (game engine)
│   │   └── Healthcare AI (Sevā)
│   ├── Selection criteria
│   ├── Pipeline (research phase)
│   ├── Partnership opportunities
│   └── CTA: Partner | License
│
├── Services (/services.html) [NEW PAGE]
│   ├── Service categories
│   │   ├── Website development
│   │   ├── Digital marketing
│   │   ├── Brand strategy
│   │   └── Operations automation
│   ├── Service packages (Starter, Growth, Scale)
│   ├── Process timeline
│   ├── SMB case studies
│   └── CTA: Schedule consultation
│
├── Solutions (/solutions.html) [UPDATED]
│   ├── Value props (battle-tested, weeks not years)
│   ├── How it works (match, customize, deploy, scale)
│   ├── Offering categories [UPDATED]
│   │   ├── Healthcare automation (Sevā AI)
│   │   ├── Procedural narrative (Epoch²)
│   │   ├── Supply chain (research)
│   │   └── Operations platforms (generic)
│   ├── Case studies (Sevā AI in production)
│   └── CTA: Book demo
│
├── Careers (/careers.html)
│   ├── Open roles
│   ├── Benefits and culture
│   ├── Application process
│   └── CTA: Apply
│
└── Contact (/contact.html) [UPDATED]
    ├── Intent selector [NEW]
    │   ├── Launch a venture
    │   ├── Marketing/digital services
    │   ├── License technology
    │   ├── Partner/invest
    │   └── General inquiry
    ├── Contact form
    ├── Office location
    └── Email/phone
```

---

## Appendix: Footer Navigation Update

**Current footer columns:**
- Support
- Legal
- Company
- Solutions

**Recommended footer for Option A:**

**Column 1: Ventures**
- View Portfolio
- Partner with Us
- Epoch² Case Study
- Healthcare AI Case Study

**Column 2: Services** [NEW]
- Website Development
- Digital Marketing
- Brand Strategy
- Operations Automation

**Column 3: Solutions**
- Platform Licensing
- Healthcare Automation
- Game Engine
- View All Solutions

**Column 4: Company**
- About
- Careers
- Contact
- Press Kit [future]

**Column 5: Support**
- Help Center [future]
- Case Studies
- Privacy Policy
- Terms of Service

---

**End of Proposal**

**Contact for questions:** [Your name/email]
**Next review date:** [DATE]
**Decision deadline:** [DATE]
