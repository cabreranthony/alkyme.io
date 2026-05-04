# Development Backlog

Priority items for future implementation.

---

## 🔴 High Priority

### 1. Contact Form Email Integration
**Status:** Backend API exists but not connected to email service
**Effort:** 1-2 hours
**Files:** `api/contact.js`

**What's needed:**
1. Sign up for Resend.com (recommended) or SendGrid
2. Get API key
3. Add to Vercel environment variables:
   ```
   RESEND_API_KEY=your_api_key_here
   ```
4. Uncomment lines 75-99 in `api/contact.js`
5. Test form submission
6. Update form to show success/error messages to user

**Security considerations:**
- Add rate limiting (5 submissions per IP per hour)
- Implement CSRF token validation
- Add email verification for replies
- Log submissions to prevent abuse

**Current state:**
- ✅ Form HTML exists and styled
- ✅ API endpoint created with validation
- ✅ Honeypot anti-spam in place
- ✅ Input sanitization
- ❌ Email sending not connected
- ❌ No rate limiting
- ❌ No user feedback on success/error

---

## 🟡 Medium Priority

### 2. Fix NPM Security Vulnerabilities
**Status:** Low-severity vulnerabilities in dev dependencies
**Effort:** 15 minutes
**Command:** `npm audit fix`

**Vulnerabilities:**
- `critical` package: HIGH (dev-only)
- `@tootallnate/once`: LOW
- `jsdom`: LOW

**Note:** These are in devDependencies only, not shipped to production.

---

### 3. Improve Content Security Policy
**Status:** Currently allows `'unsafe-inline'` for scripts
**Effort:** 2-3 hours
**Impact:** Enhanced security

**What's needed:**
1. Extract all inline scripts to external `.js` files
2. Generate nonces for any remaining inline code
3. Update CSP in `vercel.json`:
   ```
   script-src 'self' 'nonce-{generated}' https://fonts.googleapis.com
   ```
4. Test all functionality still works

---

### 4. Add Security Monitoring
**Status:** Not implemented
**Effort:** 1 hour
**Options:**
- Vercel Analytics (built-in)
- Sentry for error tracking
- LogRocket for session replay

---

## 🟢 Nice to Have

### 5. Add CSRF Protection to Forms
**Effort:** 2-3 hours
Generate and validate tokens on form submission.

### 6. Implement Subresource Integrity (SRI)
**Effort:** 1 hour
Add integrity hashes for all CDN resources.

### 7. Add HSTS Header
**Effort:** 5 minutes
Add to `vercel.json`:
```json
{
  "key": "Strict-Transport-Security",
  "value": "max-age=31536000; includeSubDomains"
}
```

### 8. Form Submission Tracking/Analytics
**Effort:** 2 hours
Track conversion rates and form abandonment.

---

## 📋 Backlog Notes

**Last Updated:** May 4, 2026
**Next Review:** When implementing contact form

**Priority Order:**
1. Email integration (blocks contact form functionality)
2. NPM audit (quick security win)
3. CSP improvements (better security posture)
4. Everything else as needed
