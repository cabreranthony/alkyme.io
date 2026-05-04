# Alkymē Website - Comprehensive Overhaul Implementation Plan

**Date:** April 12, 2026
**Scope:** Production-grade code overhaul across frontend, backend, and infrastructure
**Engineering Team:** Senior Principal Engineers (Frontend, Backend, DevOps, UX)

---

## Executive Summary

Comprehensive code overhaul to production standards with:
- **Frontend:** CSS/HTML refinements (WCAG AA, performance, UX polish)
- **Backend:** Custom form handling (Vercel Edge + Google Sheets API)
- **New Features:** Intercom-style chat widget, Zendesk-style Help Center
- **Standards:** International best practices, minimal comments, senior-level code quality

**Estimated Implementation Time:** 24-32 engineer hours across 4 phases

---

## Phase 1: CSS Foundation & UX Polish (6-8 hours)

### 1.1 Critical Fixes (Priority 1)
**File:** `assets/alkyme-tokens.css`

✅ **COMPLETED:**
- Color contrast WCAG AA compliance
- Glass gradient opacity improvements
- Interactive state tokens (focus, hover, active, disabled)
- Mobile performance tokens

**Remaining:**
- Animation easing curves refinement
- Navbar fade tokens
- Chat widget tokens
- Help center design tokens

---

### 1.2 Touch Targets & Interaction States
**Files:** `assets/site-chrome.css`, `assets/site-footer.css`, `assets/site-marketing-base.css`

**Changes Required:**

```css
/* site-chrome.css - Line 214-218 */
.topbar .nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px; /* WCAG 2.5.5 compliance */
  padding: 0.6rem 1rem; /* Increased from 0.5rem 0.9rem */
  border-radius: var(--radius);
  font-weight: 500;
  transition: background-color 0.2s var(--ease-out), color 0.2s var(--ease-out), transform 0.15s var(--ease-out);
}

.topbar .nav a:hover {
  background-color: var(--cloudy-day);
  color: var(--text);
  transform: translateY(-1px); /* Subtle lift on hover */
}

.topbar .nav a:active {
  transform: translateY(0); /* Press down on click */
  transition-duration: 0.1s;
}
```

```css
/* site-footer.css - Social icons */
.site-footer__social a {
  width: 2.75rem; /* 44px minimum */
  height: 2.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s var(--ease-out), transform 0.15s var(--ease-out);
}

.site-footer__social a:hover {
  background-color: var(--cloudy-day);
  transform: scale(1.1);
}

.site-footer__social a:active {
  transform: scale(1);
}
```

**Impact:** Mobile-friendly touch targets, polished micro-interactions

---

### 1.3 Navbar Scroll Fade Enhancement
**File:** `assets/site-chrome.css`

**Current Behavior:** Binary snap (transparent → solid)
**New Behavior:** Smooth fade with scroll progress

**Implementation:**

```css
/* Add progressive opacity states */
.topbar.topbar--over-hero {
  background-color: transparent;
  backdrop-filter: none;
  transition: background-color 0.3s var(--ease-out),
              backdrop-filter 0.3s var(--ease-out),
              border-bottom-color 0.3s var(--ease-out);
}

.topbar.topbar--over-hero.topbar--fading {
  background-color: rgb(var(--rgb-white) / 0.4);
  backdrop-filter: blur(12px) saturate(150%);
  border-bottom: var(--border-hairline);
}

.topbar.topbar--over-hero.topbar--solid {
  background-color: rgb(var(--rgb-white) / 0.78);
  backdrop-filter: blur(24px) saturate(175%);
  border-bottom: var(--border-hairline);
}
```

**JavaScript Enhancement** (in HTML inline script):
```javascript
// Smooth 3-state navbar fade
var scrollThreshold1 = 80; // Start fading
var scrollThreshold2 = 200; // Fully solid

window.addEventListener('scroll', function() {
  var scrollPos = window.pageYOffset;
  if (scrollPos < scrollThreshold1) {
    topbar.classList.remove('topbar--fading', 'topbar--solid');
  } else if (scrollPos < scrollThreshold2) {
    topbar.classList.add('topbar--fading');
    topbar.classList.remove('topbar--solid');
  } else {
    topbar.classList.add('topbar--solid');
    topbar.classList.remove('topbar--fading');
  }
}, { passive: true });
```

---

### 1.4 Button & CTA Refinement
**Files:** `assets/site-chrome.css`

**Changes:**

```css
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.75rem 1.5rem;
  font-family: var(--type-ui-family);
  font-size: var(--type-button-size);
  font-weight: var(--type-button-weight);
  line-height: 1;
  text-decoration: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s var(--ease-out);
  will-change: transform;
}

.button-primary {
  background: var(--bark);
  color: var(--eggshell-sky);
  border: none;
}

.button-primary:hover {
  background: var(--forest);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgb(var(--rgb-bark) / 0.15);
}

.button-primary:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 3px;
  transform: translateY(-2px);
}

.button-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgb(var(--rgb-bark) / 0.1);
  transition-duration: 0.1s;
}

.button-secondary {
  background: transparent;
  color: var(--forest);
  border: 1.5px solid var(--forest);
}

.button-secondary:hover {
  background: var(--forest);
  color: var(--eggshell-sky);
  transform: translateY(-2px);
}

.button-secondary:active {
  transform: translateY(0);
}

.button--pill {
  border-radius: var(--radius-pill);
}
```

---

### 1.5 Card & Image Hover States
**Files:** `assets/site-home.css`, `assets/site-about.css`

**Principle:** Differentiate interactive vs decorative surfaces

**Interactive cards** (clickable):
```css
.hero-bridge-card,
.principles-card--featured,
.studio-carousel-card {
  transition: transform 0.25s var(--ease-out), box-shadow 0.25s var(--ease-out);
}

.hero-bridge-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgb(var(--rgb-bark) / 0.1);
}
```

**Decorative images** (non-interactive):
```css
.about-carousel-slide img,
.careers-benefits-showcase__img {
  /* No hover state - visual only */
  transition: none;
}
```

---

## Phase 2: HTML Refinements & Accessibility (4-6 hours)

### 2.1 Glass Modifier Application
**Files:** All HTML pages

**Pattern:** Add `.glass--interactive` to clickable glass surfaces

**index.html:**
```html
<!-- Line 308 - Studio box CTAs (currently just buttons, but on glass background) -->
<button type="button" class="button button-primary button--pill glass--interactive">
  How we originate
</button>
```

**about.html:**
```html
<!-- Line 382 - Link cards -->
<a class="link-card glass glass--interactive" href="careers.html">
  <!-- content -->
</a>
```

**careers.html:**
```html
<!-- Line 111 - Hero panel -->
<div class="glass glass--interactive careers-hero__panel">
  <!-- content -->
</div>
```

---

### 2.2 Form Accessibility Enhancements
**Files:** `contact.html`, `careers.html`, `index.html` (newsletter)

**Pattern:** Add proper ARIA, validation states, error handling

```html
<div class="field">
  <label class="field-label" for="contact-name">
    Name <span aria-hidden="true">*</span>
  </label>
  <input
    class="field-input"
    id="contact-name"
    name="name"
    type="text"
    autocomplete="name"
    required
    aria-required="true"
    aria-invalid="false"
    aria-describedby="contact-name-error contact-name-help"
  >
  <span id="contact-name-help" class="field-help" hidden>
    Your full name as you'd like us to address you
  </span>
  <span id="contact-name-error" class="field-error" role="alert" hidden>
    Please enter your name
  </span>
</div>
```

**CSS for validation states:**
```css
.field-input[aria-invalid="true"] {
  border-color: var(--color-danger);
  background-color: rgb(var(--rgb-danger) / 0.05);
}

.field-error {
  display: none;
  color: var(--color-danger);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.field-error:not([hidden]) {
  display: block;
  animation: shake 0.3s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(8px); }
}
```

---

### 2.3 SEO Enhancements
**Files:** All HTML pages

**Changes:**

1. **Title tags** (front-load keywords):
```html
<!-- index.html -->
<title>Alkymē | Startup Studio Building Companies in Los Angeles</title>

<!-- about.html -->
<title>About Alkymē | AI Venture Studio in Los Angeles</title>

<!-- careers.html -->
<title>Careers at Alkymē | Join Our Startup Studio Team in LA</title>

<!-- contact.html -->
<title>Contact Alkymē | Get in Touch with Our Studio</title>
```

2. **Meta descriptions** (155 chars, compelling):
```html
<!-- index.html -->
<meta name="description" content="Alkymē builds companies from scratch in Los Angeles. We originate ideas, test with real users, and launch ventures designed to scale. See our work.">
```

3. **Structured data** (JSON-LD):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alkymē",
  "alternateName": "Alkyme",
  "url": "https://alkyme.io",
  "logo": "https://alkyme.io/assets/logos/alkyme-logo-rt-hzt-black.svg",
  "description": "Startup studio building companies from scratch in Los Angeles",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-559-825-5963",
    "contactType": "General Inquiry",
    "email": "hello@alkyme.io"
  },
  "sameAs": [
    "https://www.linkedin.com/company/alkymelabs",
    "https://x.com/alkymelabs",
    "https://www.instagram.com/alkymelabs"
  ]
}
</script>
```

---

## Phase 3: Custom Form Backend (8-10 hours)

### 3.1 Architecture

**Stack:**
- **Runtime:** Vercel Edge Functions (serverless, global CDN)
- **Storage:** Google Sheets API (simple, visual, free)
- **Email:** SendGrid API (transactional email)
- **Validation:** Zod schema validation
- **Security:** Rate limiting (Upstash Redis), CSRF tokens, input sanitization

**Why Google Sheets over Notion/Airtable:**
- Native spreadsheet format (easy filtering, pivot tables)
- Free Google Workspace integration
- Familiar UI for non-technical stakeholders
- Easy CSV export for CRM migration
- Google Apps Script automation potential

---

### 3.2 Implementation

**File Structure:**
```
/api/
  ├── contact.ts          # General contact form
  ├── careers-talent.ts   # Talent community signup
  ├── newsletter.ts       # Newsletter subscription
  └── chat-widget.ts      # Chat widget fallback form
/lib/
  ├── google-sheets.ts    # Google Sheets API client
  ├── sendgrid.ts         # Email sending utility
  ├── validation.ts       # Zod schemas
  ├── rate-limit.ts       # Redis rate limiter
  └── security.ts         # CSRF, sanitization
```

---

### 3.3 Google Sheets Setup

**Sheet Structure:**

**Sheet 1: "Contact Form"**
| Timestamp | Topic | Name | Email | Company | Message | IP (Hashed) | User Agent | Status |
|-----------|-------|------|-------|---------|---------|-------------|------------|--------|
| 2026-04-12 10:30 AM | General inquiry | John Doe | john@example.com | Acme Inc | ... | abc123... | Mozilla/5.0... | New |

**Sheet 2: "Talent Community"**
| Timestamp | First Name | Last Name | Email | Status | Source |
|-----------|------------|-----------|-------|--------|--------|
| 2026-04-12 11:15 AM | Jane | Smith | jane@example.com | Subscribed | careers.html |

**Sheet 3: "Newsletter"**
| Timestamp | First Name | Last Name | Email | Phone | Country | Status |
|-----------|------------|-----------|-------|-------|---------|--------|
| 2026-04-12 12:00 PM | Mike | Johnson | mike@example.com | +1 559... | US | Active |

**Sheet 4: "Chat Widget"**
| Timestamp | Name | Email | Message | Page URL | Chat History | Status |
|-----------|------|-------|---------|----------|--------------|--------|
| 2026-04-12 2:30 PM | Sarah Lee | sarah@example.com | Interested in... | /about.html | [...] | New |

---

### 3.4 API Implementation

**`/api/contact.ts`** (Vercel Edge Function):

```typescript
import { z } from 'zod';
import { appendToSheet } from '@/lib/google-sheets';
import { sendEmail } from '@/lib/sendgrid';
import { rateLimit } from '@/lib/rate-limit';
import { sanitizeInput, hashIP } from '@/lib/security';

const contactSchema = z.object({
  inquiry_type: z.enum([
    'General inquiry',
    'Investor inquiry',
    'Careers & talent',
    'Agency or project help',
    'Spun-out venture',
    'Press or other'
  ]),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(2000),
  consent: z.literal('true'),
  _honey: z.string().max(0)
});

export const config = {
  runtime: 'edge'
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  const rateLimitResult = await rateLimit(ip, { maxRequests: 5, windowMs: 60000 });
  if (!rateLimitResult.success) {
    return new Response(JSON.stringify({
      error: 'Too many requests. Please try again later.',
      retryAfter: rateLimitResult.retryAfter
    }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': String(rateLimitResult.retryAfter) }
    });
  }

  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData);

    if (data._honey && String(data._honey).length > 0) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const validated = contactSchema.parse(data);

    const sanitized = {
      inquiry_type: sanitizeInput(validated.inquiry_type),
      name: sanitizeInput(validated.name),
      email: validated.email.toLowerCase().trim(),
      company: validated.company ? sanitizeInput(validated.company) : '',
      message: sanitizeInput(validated.message)
    };

    await appendToSheet('Contact Form', [
      new Date().toISOString(),
      sanitized.inquiry_type,
      sanitized.name,
      sanitized.email,
      sanitized.company,
      sanitized.message,
      hashIP(ip),
      userAgent,
      'New'
    ]);

    await sendEmail({
      to: 'hello@alkyme.io',
      subject: `Alkymē — ${sanitized.inquiry_type}`,
      from: 'no-reply@alkyme.io',
      replyTo: sanitized.email,
      templateId: 'd-contact-form',
      dynamicTemplateData: sanitized
    });

    await sendEmail({
      to: sanitized.email,
      subject: 'We received your message — Alkymē',
      from: 'hello@alkyme.io',
      templateId: 'd-contact-confirmation',
      dynamicTemplateData: {
        name: sanitized.name
      }
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Received. We'll reply by email.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({
        error: 'Validation failed',
        details: error.errors
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.error('Contact form error:', error);
    return new Response(JSON.stringify({
      error: 'Something went wrong. Please try again.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

---

### 3.5 Google Sheets API Client

**`/lib/google-sheets.ts`**:

```typescript
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

export async function appendToSheet(sheetName: string, values: any[]) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [values]
    }
  });
}

export async function getSheetData(sheetName: string, range: string = 'A:Z') {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!${range}`
  });

  return response.data.values || [];
}
```

---

### 3.6 Environment Variables

**`.env.local`** (not committed):
```env
# Google Sheets API
GOOGLE_SERVICE_ACCOUNT_EMAIL=alkyme-forms@alkyme-website.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j

# SendGrid
SENDGRID_API_KEY=SG.xxxxx

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxx

# Security
CSRF_SECRET=random-secret-key-here
```

**Vercel Dashboard:** Add all env vars to project settings

---

### 3.7 Frontend Form Updates

**`contact.html`** (updated):

```html
<form
  class="contact-form"
  id="contact-form"
  action="/api/contact"
  method="POST"
  name="contact-alkyme"
>
  <!-- CSRF token -->
  <input type="hidden" name="_csrf" id="csrf-token" value="">

  <!-- Honeypot (properly hidden) -->
  <input
    type="text"
    class="honeypot"
    name="_honey"
    tabindex="-1"
    autocomplete="off"
    aria-hidden="true"
    role="presentation"
    style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;"
  >

  <div class="field">
    <label class="field-label" for="inquiry-type">
      Topic <span aria-hidden="true">*</span>
    </label>
    <select class="field-select" id="inquiry-type" name="inquiry_type" required aria-required="true">
      <option value="General inquiry">General / who is Alkymē</option>
      <option value="Investor inquiry">Investor</option>
      <option value="Careers & talent">Careers & talent</option>
      <option value="Agency or project help">Agency, vendor, or project</option>
      <option value="Spun-out venture">Spun-out company</option>
      <option value="Press or other">Press or other</option>
    </select>
  </div>

  <!-- Name field with validation -->
  <div class="field">
    <label class="field-label" for="contact-name">
      Name <span aria-hidden="true">*</span>
    </label>
    <input
      class="field-input"
      id="contact-name"
      name="name"
      type="text"
      autocomplete="name"
      required
      aria-required="true"
      aria-invalid="false"
      aria-describedby="contact-name-error"
      minlength="2"
      maxlength="100"
    >
    <span id="contact-name-error" class="field-error" role="alert" hidden>
      Please enter your name (2-100 characters)
    </span>
  </div>

  <!-- Email field -->
  <div class="field">
    <label class="field-label" for="contact-email">
      Email <span aria-hidden="true">*</span>
    </label>
    <input
      class="field-input"
      id="contact-email"
      name="email"
      type="email"
      autocomplete="email"
      required
      aria-required="true"
      aria-invalid="false"
      aria-describedby="contact-email-error"
      inputmode="email"
    >
    <span id="contact-email-error" class="field-error" role="alert" hidden>
      Please enter a valid email address
    </span>
  </div>

  <!-- Company (optional) -->
  <div class="field">
    <label class="field-label" for="contact-company">
      Company or context <span style="font-weight:400;color:var(--muted);">(optional)</span>
    </label>
    <input
      class="field-input"
      id="contact-company"
      name="company"
      type="text"
      autocomplete="organization"
      maxlength="100"
    >
  </div>

  <!-- Message -->
  <div class="field">
    <label class="field-label" for="contact-message">
      Message <span aria-hidden="true">*</span>
    </label>
    <textarea
      class="field-textarea"
      id="contact-message"
      name="message"
      required
      aria-required="true"
      aria-invalid="false"
      aria-describedby="contact-message-error"
      placeholder="Context and links as needed."
      minlength="10"
      maxlength="2000"
      rows="5"
    ></textarea>
    <span id="contact-message-error" class="field-error" role="alert" hidden>
      Please enter a message (10-2000 characters)
    </span>
  </div>

  <!-- Consent checkbox (GDPR) -->
  <div class="field field--checkbox">
    <label class="field-label--checkbox">
      <input
        type="checkbox"
        name="consent"
        value="true"
        required
        aria-required="true"
        aria-describedby="contact-consent-error"
      >
      <span>
        I agree to Alkymē's <a href="privacy.html" target="_blank">Privacy Policy</a> and consent to data processing.
      </span>
    </label>
    <span id="contact-consent-error" class="field-error" role="alert" hidden>
      Please accept the privacy policy to continue
    </span>
  </div>

  <!-- Submit button -->
  <button class="button button-primary" type="submit" id="contact-submit">
    <span class="button__text">Send message</span>
    <span class="button__spinner" hidden aria-hidden="true">
      <svg class="spinner" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/><path d="M12 2a10 10 0 0110 10" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/></svg>
    </span>
  </button>
</form>

<script>
(function() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit');
  const btnText = submitBtn.querySelector('.button__text');
  const btnSpinner = submitBtn.querySelector('.button__spinner');

  // Client-side validation
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous errors
    form.querySelectorAll('.field-error').forEach(el => el.hidden = true);
    form.querySelectorAll('[aria-invalid]').forEach(el => el.setAttribute('aria-invalid', 'false'));

    // Validate
    const formData = new FormData(form);
    let hasErrors = false;

    if (!formData.get('name') || formData.get('name').length < 2) {
      showError('contact-name', 'Please enter your name (2-100 characters)');
      hasErrors = true;
    }

    if (!formData.get('email') || !isValidEmail(formData.get('email'))) {
      showError('contact-email', 'Please enter a valid email address');
      hasErrors = true;
    }

    if (!formData.get('message') || formData.get('message').length < 10) {
      showError('contact-message', 'Please enter a message (10-2000 characters)');
      hasErrors = true;
    }

    if (!formData.get('consent')) {
      showError('contact-consent', 'Please accept the privacy policy to continue');
      hasErrors = true;
    }

    if (hasErrors) return;

    // Submit
    submitBtn.disabled = true;
    btnText.hidden = true;
    btnSpinner.hidden = false;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        form.reset();
        showSuccess(data.message || 'Received. We'll reply by email.');
      } else {
        // Error
        showGlobalError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      showGlobalError('Network error. Please check your connection and try again.');
    } finally {
      submitBtn.disabled = false;
      btnText.hidden = false;
      btnSpinner.hidden = true;
    }
  });

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (input) input.setAttribute('aria-invalid', 'true');
    if (error) {
      error.textContent = message;
      error.hidden = false;
    }
  }

  function showSuccess(message) {
    const ack = document.getElementById('form-ack');
    if (ack) {
      ack.textContent = message;
      ack.style.display = 'block';
      ack.style.color = 'var(--moss)';
      setTimeout(() => { ack.style.display = 'none'; }, 10000);
    }
  }

  function showGlobalError(message) {
    const ack = document.getElementById('form-ack');
    if (ack) {
      ack.textContent = message;
      ack.style.display = 'block';
      ack.style.color = 'var(--color-danger)';
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();
</script>
```

---

## Phase 4: Intercom-Style Chat Widget (6-8 hours)

### 4.1 Design Spec

**Visual:**
- Floating bubble (bottom-right, 24px from edges)
- `--forest` background, white icon
- Unread badge (red dot when triggered)
- Expands to 400x600px chat panel on click
- Smooth slide-in animation

**Behavior:**
- Triggers after 3 page scrolls OR 30s idle
- User can type messages (stored locally)
- "Away from chat" state shows fallback form
- Form pre-fills with chat history
- Submit → Google Sheets + SendGrid email

**Accessibility:**
- Keyboard accessible (Tab, Enter, Escape)
- Screen reader friendly
- Respects `prefers-reduced-motion`
- Focus trap when open

---

### 4.2 Implementation

**File:** `/assets/chat-widget.js`

```javascript
(function() {
  'use strict';

  const TRIGGER_SCROLL_COUNT = 3;
  const TRIGGER_IDLE_MS = 30000;
  const STORAGE_KEY = 'alkyme-chat-history';

  let scrollCount = 0;
  let idleTimer = null;
  let chatHistory = [];
  let isOpen = false;

  // Create widget HTML
  const widgetHTML = `
    <div id="alkyme-chat-widget" class="chat-widget" role="region" aria-label="Chat support">
      <button type="button" class="chat-widget__bubble" id="chat-bubble" aria-label="Open chat" aria-expanded="false" aria-controls="chat-panel">
        <svg class="chat-widget__bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
        </svg>
        <span class="chat-widget__bubble-badge" id="chat-badge" hidden></span>
      </button>

      <div class="chat-widget__panel glass" id="chat-panel" hidden>
        <div class="chat-widget__header">
          <div class="chat-widget__header-info">
            <h2 class="chat-widget__title">Alkymē</h2>
            <p class="chat-widget__status">
              <span class="chat-widget__status-dot"></span>
              Away — We'll reply by email
            </p>
          </div>
          <button type="button" class="chat-widget__close" id="chat-close" aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="chat-widget__messages" id="chat-messages">
          <div class="chat-widget__message chat-widget__message--bot">
            <div class="chat-widget__message-avatar">
              <img src="/assets/logos/logo-mark.svg" alt="Alkymē" width="32" height="32">
            </div>
            <div class="chat-widget__message-bubble">
              <p>Hi! We're currently away but we'd love to hear from you. Type your message below or fill out the form to get in touch.</p>
            </div>
          </div>
        </div>

        <div class="chat-widget__form-view" id="chat-form-view" hidden>
          <p class="chat-widget__form-intro">Leave your details and we'll get back to you within 1-2 business days.</p>
          <form class="chat-widget__form" id="chat-widget-form">
            <input type="hidden" name="chat_history" id="chat-history-field">
            <input type="hidden" name="page_url" id="chat-page-url">

            <div class="field field--compact">
              <label class="field-label" for="chat-name">Name *</label>
              <input class="field-input" id="chat-name" name="name" type="text" required autocomplete="name">
            </div>

            <div class="field field--compact">
              <label class="field-label" for="chat-email">Email *</label>
              <input class="field-input" id="chat-email" name="email" type="email" required autocomplete="email" inputmode="email">
            </div>

            <div class="field field--compact">
              <label class="field-label" for="chat-message">Message *</label>
              <textarea class="field-textarea" id="chat-message" name="message" required rows="4"></textarea>
            </div>

            <button class="button button-primary button--small" type="submit">Send message</button>
          </form>
          <p class="chat-widget__form-success" id="chat-form-success" hidden>
            Thanks! We'll reply to your email within 1-2 business days.
          </p>
        </div>

        <div class="chat-widget__input-wrapper" id="chat-input-wrapper">
          <input
            type="text"
            class="chat-widget__input"
            id="chat-input"
            placeholder="Type your message..."
            autocomplete="off"
          >
          <button type="button" class="chat-widget__send" id="chat-send" aria-label="Send message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
          <button type="button" class="chat-widget__submit-form" id="chat-submit-form">
            Submit via form
          </button>
        </div>
      </div>
    </div>
  `;

  // Initialize
  function init() {
    // Inject widget HTML
    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    // Get elements
    const bubble = document.getElementById('chat-bubble');
    const panel = document.getElementById('chat-panel');
    const closeBtn = document.getElementById('chat-close');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const submitFormBtn = document.getElementById('chat-submit-form');
    const messagesContainer = document.getElementById('chat-messages');
    const formView = document.getElementById('chat-form-view');
    const inputWrapper = document.getElementById('chat-input-wrapper');
    const badge = document.getElementById('chat-badge');
    const form = document.getElementById('chat-widget-form');

    // Load chat history from localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        chatHistory = JSON.parse(stored);
        renderMessages();
      } catch (e) {}
    }

    // Event listeners
    bubble.addEventListener('click', openChat);
    closeBtn.addEventListener('click', closeChat);
    sendBtn.addEventListener('click', sendMessage);
    submitFormBtn.addEventListener('click', showForm);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
    form.addEventListener('submit', submitForm);

    // Trigger logic
    window.addEventListener('scroll', handleScroll, { passive: true });
    resetIdleTimer();
    document.addEventListener('mousemove', resetIdleTimer, { passive: true });
    document.addEventListener('keypress', resetIdleTimer, { passive: true });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeChat();
    });
  }

  function handleScroll() {
    scrollCount++;
    if (scrollCount >= TRIGGER_SCROLL_COUNT && !isOpen) {
      triggerWidget();
    }
  }

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      if (!isOpen) triggerWidget();
    }, TRIGGER_IDLE_MS);
  }

  function triggerWidget() {
    const badge = document.getElementById('chat-badge');
    if (badge) {
      badge.hidden = false;
      badge.setAttribute('aria-label', 'New message');
    }
  }

  function openChat() {
    isOpen = true;
    const bubble = document.getElementById('chat-bubble');
    const panel = document.getElementById('chat-panel');
    const badge = document.getElementById('chat-badge');
    const input = document.getElementById('chat-input');

    bubble.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    badge.hidden = true;

    // Focus input
    requestAnimationFrame(() => input.focus());
  }

  function closeChat() {
    isOpen = false;
    const bubble = document.getElementById('chat-bubble');
    const panel = document.getElementById('chat-panel');

    bubble.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
  }

  function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    chatHistory.push({
      sender: 'user',
      text: message,
      timestamp: new Date().toISOString()
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory));
    renderMessages();
    input.value = '';

    // Auto-reply (away message)
    setTimeout(() => {
      chatHistory.push({
        sender: 'bot',
        text: "Thanks for your message! We're currently away. Please fill out the form below and we'll get back to you within 1-2 business days.",
        timestamp: new Date().toISOString()
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory));
      renderMessages();
    }, 1000);
  }

  function renderMessages() {
    const container = document.getElementById('chat-messages');
    const firstMessage = container.querySelector('.chat-widget__message--bot');

    // Clear except first message
    Array.from(container.children).forEach((child, index) => {
      if (index > 0) child.remove();
    });

    chatHistory.forEach((msg) => {
      const messageEl = document.createElement('div');
      messageEl.className = `chat-widget__message chat-widget__message--${msg.sender}`;

      if (msg.sender === 'bot') {
        messageEl.innerHTML = `
          <div class="chat-widget__message-avatar">
            <img src="/assets/logos/logo-mark.svg" alt="Alkymē" width="32" height="32">
          </div>
          <div class="chat-widget__message-bubble">
            <p>${escapeHTML(msg.text)}</p>
          </div>
        `;
      } else {
        messageEl.innerHTML = `
          <div class="chat-widget__message-bubble">
            <p>${escapeHTML(msg.text)}</p>
          </div>
        `;
      }

      container.appendChild(messageEl);
    });

    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
  }

  function showForm() {
    const formView = document.getElementById('chat-form-view');
    const inputWrapper = document.getElementById('chat-input-wrapper');
    const chatMessageField = document.getElementById('chat-message');
    const chatHistoryField = document.getElementById('chat-history-field');
    const pageUrlField = document.getElementById('chat-page-url');

    // Pre-fill message with chat history
    const userMessages = chatHistory.filter(m => m.sender === 'user').map(m => m.text).join('\n\n');
    chatMessageField.value = userMessages;

    // Store full history in hidden field
    chatHistoryField.value = JSON.stringify(chatHistory);
    pageUrlField.value = window.location.href;

    inputWrapper.hidden = true;
    formView.hidden = false;
  }

  async function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch('/api/chat-widget', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        form.hidden = true;
        document.getElementById('chat-form-success').hidden = false;

        // Clear chat history
        chatHistory = [];
        localStorage.removeItem(STORAGE_KEY);

        setTimeout(() => {
          closeChat();
          // Reset for next time
          document.getElementById('chat-form-view').hidden = true;
          document.getElementById('chat-input-wrapper').hidden = false;
          form.hidden = false;
          document.getElementById('chat-form-success').hidden = true;
        }, 3000);
      } else {
        alert('Something went wrong. Please try again or email us directly at hello@alkyme.io');
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
    }
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```

---

### 4.3 Chat Widget CSS

**File:** `/assets/chat-widget.css`

```css
.chat-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  font-family: var(--type-ui-family);
}

.chat-widget__bubble {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--forest);
  color: var(--eggshell-sky);
  border: none;
  box-shadow: 0 4px 16px rgb(var(--rgb-bark) / 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
}

.chat-widget__bubble:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgb(var(--rgb-bark) / 0.2);
}

.chat-widget__bubble:active {
  transform: scale(1);
}

.chat-widget__bubble-icon {
  width: 28px;
  height: 28px;
}

.chat-widget__bubble-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-danger);
  border: 2px solid var(--white);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.chat-widget__panel {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 400px;
  height: 600px;
  max-height: calc(100vh - 120px);
  background: var(--glass-marketing-gradient);
  border: var(--glass-marketing-border);
  box-shadow: var(--glass-marketing-shadow-stacked);
  backdrop-filter: var(--glass-marketing-filter);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s var(--ease-out);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 680px) {
  .chat-widget__panel {
    width: calc(100vw - 48px);
    height: calc(100vh - 120px);
  }
}

.chat-widget__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: var(--border-subtle);
}

.chat-widget__title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: var(--text);
}

.chat-widget__status {
  font-size: 0.875rem;
  color: var(--muted);
  margin: 0.25rem 0 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chat-widget__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--dew);
}

.chat-widget__close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: var(--muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s var(--ease-out);
}

.chat-widget__close:hover {
  background: var(--cloudy-day);
  color: var(--text);
}

.chat-widget__close svg {
  width: 18px;
  height: 18px;
}

.chat-widget__messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-widget__message {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.chat-widget__message--user {
  flex-direction: row-reverse;
}

.chat-widget__message-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--forest);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.chat-widget__message-avatar img {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

.chat-widget__message-bubble {
  max-width: 75%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-lg);
  background: var(--white);
  border: var(--border-subtle);
}

.chat-widget__message--user .chat-widget__message-bubble {
  background: var(--forest);
  color: var(--eggshell-sky);
  border: none;
}

.chat-widget__message-bubble p {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
}

.chat-widget__form-view {
  padding: 1.25rem;
  flex: 1;
  overflow-y: auto;
}

.chat-widget__form-intro {
  font-size: 0.9375rem;
  color: var(--muted);
  margin: 0 0 1.25rem;
}

.chat-widget__form .field {
  margin-bottom: 1rem;
}

.chat-widget__form .field-label {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.chat-widget__form .field-input,
.chat-widget__form .field-textarea {
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: var(--border-strong);
  border-radius: var(--radius);
  font-size: 0.9375rem;
  background: var(--white);
}

.chat-widget__form .field-input:focus,
.chat-widget__form .field-textarea:focus {
  outline: 2px solid var(--forest);
  outline-offset: 0;
  border-color: transparent;
}

.chat-widget__form .button {
  width: 100%;
}

.chat-widget__form-success {
  padding: 1.5rem;
  text-align: center;
  color: var(--moss);
  font-weight: 600;
}

.chat-widget__input-wrapper {
  padding: 1rem 1.25rem;
  border-top: var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chat-widget__input {
  flex: 1;
  padding: 0.625rem 0.875rem;
  border: var(--border-strong);
  border-radius: var(--radius);
  font-size: 0.9375rem;
  background: var(--white);
}

.chat-widget__input:focus {
  outline: 2px solid var(--forest);
  outline-offset: 0;
  border-color: transparent;
}

.chat-widget__send {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--forest);
  color: var(--eggshell-sky);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s var(--ease-out);
}

.chat-widget__send:hover {
  transform: scale(1.1);
}

.chat-widget__send svg {
  width: 18px;
  height: 18px;
}

.chat-widget__submit-form {
  width: 100%;
  padding: 0.625rem;
  background: transparent;
  border: 1.5px solid var(--forest);
  color: var(--forest);
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s var(--ease-out);
}

.chat-widget__submit-form:hover {
  background: var(--forest);
  color: var(--eggshell-sky);
}

@media (prefers-reduced-motion: reduce) {
  .chat-widget__panel {
    animation: none;
  }
  .chat-widget__bubble-badge {
    animation: none;
  }
}
```

---

## Phase 5: Help Center Overhaul (6-8 hours)

### 5.1 Current State

**File:** `help/index.html`

**Issues:**
- Single-page design (all content on one page)
- No article structure
- Not scalable (adding articles requires HTML edits)
- No search functionality
- No categories/organization

**Goal:** Zendesk-style multi-page help center with CMS-like structure

---

### 5.2 New Architecture

**File Structure:**
```
/help/
  ├── index.html              # Help center hub (categories + search)
  ├── article.html            # Article template (dynamic based on URL param)
  ├── category.html           # Category page (lists articles)
  ├── search.html             # Search results
  └── articles/
      ├── data.json           # Article content database
      └── [static MD files]   # Optional Markdown source
```

**URL Structure:**
- Hub: `/help/`
- Category: `/help/category.html?cat=getting-started`
- Article: `/help/article.html?id=how-to-contact-us`
- Search: `/help/search.html?q=careers`

---

### 5.3 Article Database

**File:** `/help/articles/data.json`

```json
{
  "categories": [
    {
      "id": "getting-started",
      "name": "Getting Started",
      "description": "Learn about Alkymē and how we work",
      "icon": "rocket",
      "order": 1
    },
    {
      "id": "careers",
      "name": "Careers & Talent",
      "description": "Join our team or talent community",
      "icon": "briefcase",
      "order": 2
    },
    {
      "id": "investors",
      "name": "For Investors",
      "description": "Investment opportunities and process",
      "icon": "trending-up",
      "order": 3
    },
    {
      "id": "ventures",
      "name": "Our Ventures",
      "description": "Learn about our portfolio and spin-outs",
      "icon": "grid",
      "order": 4
    },
    {
      "id": "technical",
      "name": "Technical & Legal",
      "description": "Privacy, terms, and technical support",
      "icon": "shield",
      "order": 5
    }
  ],
  "articles": [
    {
      "id": "what-is-alkyme",
      "category": "getting-started",
      "title": "What is Alkymē?",
      "description": "Learn about our startup studio model and how we build companies",
      "author": "Alkymē Team",
      "updated": "2026-04-10",
      "views": 1250,
      "helpful": 45,
      "tags": ["about", "studio", "model"],
      "content": "<p>Alkymē is a startup studio based in Los Angeles...</p>"
    },
    {
      "id": "how-to-contact-us",
      "category": "getting-started",
      "title": "How do I contact Alkymē?",
      "description": "Different ways to reach our team",
      "author": "Support Team",
      "updated": "2026-04-12",
      "views": 850,
      "helpful": 38,
      "tags": ["contact", "support", "email"],
      "content": "<p>You can reach us through several channels...</p>"
    },
    {
      "id": "how-we-use-ai",
      "category": "getting-started",
      "title": "How does Alkymē use AI?",
      "description": "Our approach to AI, data practices, and boundaries",
      "author": "Engineering Team",
      "updated": "2026-03-28",
      "views": 620,
      "helpful": 22,
      "tags": ["ai", "technology", "privacy"],
      "content": "<p>We use AI to compress timelines...</p>"
    },
    {
      "id": "apply-for-job",
      "category": "careers",
      "title": "How do I apply for a role?",
      "description": "Application process and what to expect",
      "author": "Talent Team",
      "updated": "2026-04-05",
      "views": 1820,
      "helpful": 67,
      "tags": ["careers", "application", "hiring"],
      "content": "<p>All open roles are listed on our Breezy HR portal...</p>"
    },
    {
      "id": "talent-community",
      "category": "careers",
      "title": "What is the talent community?",
      "description": "Stay connected even when there's no current role",
      "author": "Talent Team",
      "updated": "2026-03-15",
      "views": 940,
      "helpful": 31,
      "tags": ["careers", "talent", "community"],
      "content": "<p>Our talent community is a way to stay updated...</p>"
    },
    {
      "id": "investment-process",
      "category": "investors",
      "title": "How do I invest in Alkymē or a venture?",
      "description": "Investment opportunities and process",
      "author": "Investment Team",
      "updated": "2026-02-20",
      "views": 450,
      "helpful": 18,
      "tags": ["investment", "funding", "ventures"],
      "content": "<p>We periodically raise capital for the studio and individual ventures...</p>"
    },
    {
      "id": "venture-spin-out",
      "category": "ventures",
      "title": "How do ventures spin out?",
      "description": "From studio to standalone company",
      "author": "Studio Team",
      "updated": "2026-03-01",
      "views": 680,
      "helpful": 25,
      "tags": ["ventures", "spin-out", "model"],
      "content": "<p>When a venture shows repeatable traction...</p>"
    },
    {
      "id": "privacy-policy",
      "category": "technical",
      "title": "Where can I find your privacy policy?",
      "description": "Data practices, GDPR, and your rights",
      "author": "Legal Team",
      "updated": "2026-04-08",
      "views": 320,
      "helpful": 12,
      "tags": ["privacy", "legal", "gdpr"],
      "content": "<p>Our full privacy policy is available at <a href='/privacy.html'>alkyme.io/privacy</a>...</p>"
    },
    {
      "id": "delete-my-data",
      "category": "technical",
      "title": "How do I request data deletion?",
      "description": "GDPR/CCPA data deletion requests",
      "author": "Privacy Team",
      "updated": "2026-04-10",
      "views": 180,
      "helpful": 8,
      "tags": ["privacy", "gdpr", "data"],
      "content": "<p>To request deletion of your personal data, email privacy@alkyme.io...</p>"
    }
  ]
}
```

---

### 5.4 Help Center Hub

**File:** `/help/index.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Help Center | Alkymē</title>
  <meta name="description" content="Find answers about Alkymē, our ventures, careers, and how we work.">
  <link rel="canonical" href="https://alkyme.io/help/">

  <link rel="icon" type="image/svg+xml" href="../assets/logos/logo-mark.svg">
  <link rel="stylesheet" href="../assets/marketing-fonts.css">
  <link rel="stylesheet" href="../assets/alkyme-tokens.css">
  <link rel="stylesheet" href="../assets/site-marketing-base.css">
  <link rel="stylesheet" href="../assets/site-chrome.css">
  <link rel="stylesheet" href="../assets/site-help.css">
  <link rel="stylesheet" href="../assets/site-footer.css">
</head>
<body class="page-help">
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="topbar" role="banner">
    <div class="container topbar-inner">
      <div class="topbar-cluster">
        <a class="brand" href="../index.html" aria-label="Alkymē home">
          <img class="brand-logo" src="../assets/logos/alkyme-logo-rt-hzt-black.svg" alt="Alkymē" width="200" height="36" decoding="async">
        </a>
        <nav class="nav" aria-label="Main navigation">
          <a href="../about.html">About</a>
          <a href="../ai.html">AI</a>
          <a href="../careers.html">Careers</a>
          <a href="../contact.html">Contact</a>
        </nav>
      </div>
    </div>
  </header>

  <main id="main" class="help-main">
    <section class="help-hero">
      <div class="container container--narrow">
        <h1 class="help-hero__title">How can we help?</h1>
        <div class="help-hero__search">
          <form action="search.html" method="GET" role="search">
            <label for="help-search" class="visually-hidden">Search help articles</label>
            <div class="help-search-bar">
              <svg class="help-search-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="search"
                id="help-search"
                name="q"
                class="help-search-bar__input"
                placeholder="Search for articles..."
                autocomplete="off"
              >
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="help-categories">
      <div class="container container--wide">
        <div class="help-categories__grid" id="help-categories-grid">
          <!-- Populated by JavaScript from data.json -->
        </div>
      </div>
    </section>

    <section class="help-popular">
      <div class="container container--narrow">
        <h2 class="help-section__title">Popular articles</h2>
        <div class="help-articles__list" id="popular-articles">
          <!-- Populated by JavaScript -->
        </div>
      </div>
    </section>

    <section class="help-contact">
      <div class="container container--narrow">
        <div class="help-contact__card glass">
          <h2>Still need help?</h2>
          <p>Can't find what you're looking for? Get in touch and we'll help you out.</p>
          <a class="button button-primary" href="../contact.html">Contact support</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <!-- Same footer as other pages -->
  </footer>

  <script src="../assets/site-theme.js" defer></script>
  <script>
    (async function() {
      const response = await fetch('articles/data.json');
      const data = await response.json();

      // Render categories
      const categoriesGrid = document.getElementById('help-categories-grid');
      data.categories
        .sort((a, b) => a.order - b.order)
        .forEach(cat => {
          const articleCount = data.articles.filter(a => a.category === cat.id).length;
          const categoryCard = `
            <a href="category.html?cat=${cat.id}" class="help-category-card glass glass--interactive">
              <div class="help-category-card__icon">
                ${getIcon(cat.icon)}
              </div>
              <h3 class="help-category-card__title">${cat.name}</h3>
              <p class="help-category-card__desc">${cat.description}</p>
              <p class="help-category-card__count">${articleCount} article${articleCount !== 1 ? 's' : ''}</p>
            </a>
          `;
          categoriesGrid.insertAdjacentHTML('beforeend', categoryCard);
        });

      // Render popular articles (top 5 by views)
      const popularContainer = document.getElementById('popular-articles');
      const popular = data.articles
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

      popular.forEach(article => {
        const articleLink = `
          <a href="article.html?id=${article.id}" class="help-article-item">
            <span class="help-article-item__title">${article.title}</span>
            <span class="help-article-item__meta">${article.description}</span>
          </a>
        `;
        popularContainer.insertAdjacentHTML('beforeend', articleLink);
      });

      function getIcon(name) {
        const icons = {
          rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
          briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
          'trending-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
          grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
          shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        };
        return icons[name] || icons.rocket;
      }
    })();
  </script>
</body>
</html>
```

---

This plan is **extremely detailed** but represents 24-32 hours of senior engineering work. Given the scope, I recommend we prioritize:

1. **Phase 1 (CSS fixes)** - Immediate UX improvements
2. **Phase 3 (Form backend)** - Critical security/GDPR compliance
3. **Phase 4 (Chat widget)** - High-value feature for engagement
4. **Phase 5 (Help Center)** - Nice-to-have, can be iterative

**Would you like me to:**
1. Start implementing Phase 1 (CSS fixes) right now?
2. Build the form backend (Phase 3) as the highest priority?
3. Proceed with all phases systematically?

Let me know your priority and I'll begin executing the code immediately.
