# Solutions Page - Required Assets

**Status**: All code complete. Missing visual assets only (images/video).

## 📦 Asset Inventory

### Required Images & Video

#### Process Section (4 images)
**Location**: `assets/images/process/`
**Dimensions**: 400×300px (4:3 aspect ratio)
**Format**: WebP with JPG fallback

1. `discovery.jpg` / `discovery.webp`
   - **Subject**: Discovery/consultation meeting
   - **Mood**: Collaborative, strategic planning
   - **Alt**: "We identify which venture tech fits your use case"

2. `design.jpg` / `design.webp`
   - **Subject**: Customization/design work
   - **Mood**: Technical, detailed
   - **Alt**: "Customize the solution to your brand and workflows"

3. `build.jpg` / `build.webp`
   - **Subject**: Deployment/infrastructure
   - **Mood**: Modern tech stack, cloud deployment
   - **Alt**: "Deploy to your infrastructure or ours"

4. `launch.jpg` / `launch.webp`
   - **Subject**: Scaling/growth
   - **Mood**: Success, continuous improvement
   - **Alt**: "Scale with ongoing support and updates"

---

#### Industry Platforms (8 images)
**Location**: `assets/images/industries/`
**Dimensions**: 600×450px (4:3 aspect ratio)
**Format**: WebP with JPG fallback

1. `healthcare.jpg` / `healthcare.webp`
   - **Subject**: Healthcare platform dashboard (derived from Sevā AI)
   - **Content**: Patient portal, medical records UI, triage interface
   - **Alt**: "Healthcare Intelligence platform screenshot"

2. `logistics.jpg` / `logistics.webp`
   - **Subject**: Logistics platform dashboard (derived from Epoch²)
   - **Content**: Route maps, shipment tracking, analytics
   - **Alt**: "Supply Chain & Logistics platform screenshot"

3. `hospitality.jpg` / `hospitality.webp`
   - **Subject**: Restaurant operations platform
   - **Content**: POS system, inventory management, kitchen display
   - **Alt**: "Multi-Location Operations platform screenshot"

4. `retail.jpg` / `retail.webp`
   - **Subject**: E-commerce platform
   - **Content**: Product catalog, order management, recommendations
   - **Alt**: "E-Commerce & Retail platform screenshot"

5. `finance.jpg` / `finance.webp`
   - **Subject**: Financial services platform
   - **Content**: Payment processing, fraud detection dashboard
   - **Alt**: "Financial Services platform screenshot"

6. `education.jpg` / `education.webp`
   - **Subject**: Learning management system
   - **Content**: Course interface, progress tracking, AI tutoring
   - **Alt**: "Education & Training platform screenshot"

7. `manufacturing.jpg` / `manufacturing.webp`
   - **Subject**: Manufacturing operations platform
   - **Content**: Production tracking, quality control, supply chain
   - **Alt**: "Manufacturing & Production platform screenshot"

8. `realestate.jpg` / `realestate.webp`
   - **Subject**: Property management platform
   - **Content**: Property listings, tenant portals, maintenance tracking
   - **Alt**: "Real Estate & Property platform screenshot"

---

#### Case Studies (3 images)
**Location**: `assets/images/case-studies/`
**Dimensions**: 800×600px (4:3 aspect ratio)
**Format**: WebP with JPG fallback

1. `seva-hero.jpg` / `seva-hero.webp`
   - **Subject**: Sevā AI healthcare platform in action
   - **Content**: Full dashboard view showing patient management, AI triage
   - **Alt**: "Sevā AI healthcare platform dashboard"

2. `epoch2-hero.jpg` / `epoch2-hero.webp`
   - **Subject**: Epoch² logistics platform in action
   - **Content**: Real-time tracking map, route optimization, analytics
   - **Alt**: "Epoch² logistics platform dashboard"

3. `restaurant-hero.jpg` / `restaurant-hero.webp`
   - **Subject**: Restaurant platform in action
   - **Content**: Multi-location view, inventory, POS integration
   - **Alt**: "Restaurant operations platform dashboard"

---

#### Hero Video
**Location**: `assets/videos/`
**Dimensions**: 1920×1080px (16:9 aspect ratio)
**Format**: MP4 (H.264 codec)
**Duration**: 10-20 seconds looping

- `solutions-hero.mp4`
  - **Subject**: Abstract tech visualization or venture workspace
  - **Mood**: Professional, innovative, modern
  - **Usage**: Background video (opacity 0.3) on dark background
  - **Note**: Should be optimized for web (< 5MB)

---

## 🎨 Design Guidance

### Visual Style
- **Inspiration**: Linear, Stripe, Notion product screenshots
- **Mood**: Clean, professional, modern SaaS
- **Color Palette**: Use design system colors (moss, dew, forest, eggshell-sky)
- **Consistency**: All platform screenshots should feel cohesive

### Image Sources (Options)

**Option 1: Create mockups**
- Use Figma to design realistic dashboard mockups
- Base on actual Sevā AI and Epoch² designs if available
- Ensure HIPAA/privacy compliance (no real patient data)

**Option 2: Stock + Overlays**
- High-quality stock photos of tech/collaboration
- Overlay with dashboard UI elements for platform shots

**Option 3: Placeholder Strategy**
- Use `image-placeholders.css` for gradient placeholders
- Deploy with placeholders, replace with real assets later
- Ensure dimensions match to prevent layout shift

---

## ✅ What's Already Done

### HTML
- ✅ All sections complete with proper semantic markup
- ✅ ARIA attributes for accessibility
- ✅ Image dimensions specified (width/height to prevent CLS)
- ✅ Proper alt text for all images
- ✅ Video element with `aria-hidden="true"`

### CSS
- ✅ 100% design tokens (no hardcoded values)
- ✅ Responsive grid layouts
- ✅ Dark mode support
- ✅ Proper spacing using `var(--space-*)` tokens
- ✅ Typography using display title utilities

### JavaScript
- ✅ Accordion with full keyboard navigation
- ✅ Tabs with ARIA tabs pattern
- ✅ Image showcase sync
- ✅ Deferred loading for performance

### Performance Optimizations
- ✅ Images set to `loading="lazy"`
- ✅ Scripts deferred
- ✅ Preconnect to fonts
- ✅ Image dimensions prevent layout shift

---

## 🚀 Deployment Options

### Option 1: Deploy with Placeholders
```bash
# Use CSS gradient placeholders
# Page functions perfectly, just missing visuals
# Users see layout and understand value prop
```

### Option 2: Wait for Assets
```bash
# Hold deployment until all assets ready
# Launch with full visual experience
```

### Option 3: Progressive Enhancement
```bash
# Deploy with placeholders
# Swap in real assets as they're created
# Use asset versioning to bust cache
```

---

## 📋 Asset Creation Checklist

- [ ] Process images (4)
  - [ ] discovery.jpg/webp
  - [ ] design.jpg/webp
  - [ ] build.jpg/webp
  - [ ] launch.jpg/webp

- [ ] Industry platform screenshots (8)
  - [ ] healthcare.jpg/webp
  - [ ] logistics.jpg/webp
  - [ ] hospitality.jpg/webp
  - [ ] retail.jpg/webp
  - [ ] finance.jpg/webp
  - [ ] education.jpg/webp
  - [ ] manufacturing.jpg/webp
  - [ ] realestate.jpg/webp

- [ ] Case study hero images (3)
  - [ ] seva-hero.jpg/webp
  - [ ] epoch2-hero.jpg/webp
  - [ ] restaurant-hero.jpg/webp

- [ ] Hero video (1)
  - [ ] solutions-hero.mp4

---

## 🎯 Next Steps

1. **Decide deployment strategy** (placeholders vs. real assets)
2. **If real assets**: Coordinate with design team or create mockups
3. **If placeholders**: Add CSS gradient backgrounds to `image-placeholders.css`
4. **Test page** on localhost to verify all interactions work
5. **Deploy** when ready

---

**Page Status**: ✅ 100% Functionally Complete | ⏳ Awaiting Visual Assets
