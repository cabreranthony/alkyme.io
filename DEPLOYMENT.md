# Deployment Guide

## Quick Deploy to Vercel

### First Time Setup

1. **Install Vercel CLI** (optional, but recommended):
   ```bash
   npm i -g vercel
   ```

2. **Build the CSS**:
   ```bash
   npm run build:css
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

3. **Auto-Deploy**:
   - Every push to `main` triggers a production deploy
   - Pull requests get preview deployments

## Pre-Deployment Checklist

- [ ] Run `npm run build:css` to compile latest CSS
- [ ] Test locally with `python3 -m http.server 8000`
- [ ] Check all pages load correctly
- [ ] Verify dark mode works
- [ ] Test mobile responsiveness
- [ ] Confirm all images load
- [ ] Check contact form (if API is set up)

## Vercel Configuration

The project includes `vercel.json` with:
- Security headers (CSP, X-Frame-Options, etc.)
- Help center subdomain routing (`help.alkyme.io`)

## Custom Domain Setup

1. **Add Domain in Vercel**:
   - Project Settings → Domains
   - Add `alkyme.io` and `www.alkyme.io`

2. **Configure DNS**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Help Center Subdomain** (optional):
   ```
   Type: CNAME
   Name: help
   Value: cname.vercel-dns.com
   ```

## Environment Variables

For contact form API (if using Resend):

```bash
# In Vercel Dashboard → Settings → Environment Variables
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## Build Commands

Vercel auto-detects these, but explicit config:

```json
{
  "buildCommand": "npm run build:css",
  "outputDirectory": ".",
  "installCommand": "npm install"
}
```

## Folder Structure for Deployment

```
/
├── *.html              # Main pages (will be served)
├── assets/             # Static assets (will be served)
├── dist/               # Compiled CSS (will be served)
├── help/               # Help center (will be served)
├── labs/               # Ventures pages (will be served)
├── api/                # API routes (will be served)
├── es/                 # Spanish locales (will be served)
├── tl/                 # Tagalog locales (will be served)
├── node_modules/       # Ignored (.vercelignore)
├── archive/            # Ignored (.vercelignore)
├── docs/               # Ignored (.vercelignore)
├── ops/                # Ignored (.vercelignore)
└── *.md files          # Ignored (.vercelignore, except README.md)
```

## Post-Deployment Verification

1. Visit your production URL
2. Check all navigation links work
3. Test forms
4. Verify analytics (if configured)
5. Check SSL certificate is active
6. Test dark mode toggle
7. Verify mobile menu works

## Rollback

If something goes wrong:

```bash
# Via Vercel CLI
vercel rollback

# OR via Dashboard
# Deployments → Find previous deploy → Promote to Production
```

## Performance Optimization

Already configured:
- ✅ Minified CSS in `dist/`
- ✅ Optimized images
- ✅ Minimal JavaScript
- ✅ Security headers in `vercel.json`

## Troubleshooting

**CSS not updating?**
```bash
npm run build:css
git add dist/
git commit -m "Update compiled CSS"
git push
```

**404 errors?**
- Check file paths are relative
- Ensure files aren't in `.vercelignore`

**Help subdomain not working?**
- Verify DNS CNAME for `help` subdomain
- Check `vercel.json` rewrites configuration
- Add domain in Vercel dashboard

## Support

- Vercel Docs: https://vercel.com/docs
- GitHub Issues: Create issue in your repo
- Vercel Support: support@vercel.com

---

**Last Updated**: 2026-05-03
