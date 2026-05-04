# Solarpunk Components - Quick Reference

## Glass Modifiers
```html
<div class="glass--warm-amber">...</div>
<div class="glass--warm-sage">...</div>
<div class="glass--warm-terracotta">...</div>
```

## Product Showcase
```html
<section class="product-showcase">
  <div class="product-showcase__background"></div>
  <div class="container">
    <div class="product-showcase__grid">
      <div class="product-showcase__content">
        <div class="product-showcase__eyebrow">Product Name</div>
        <h2 class="product-showcase__title">Title</h2>
        <p class="product-showcase__description">Description</p>
        <ul class="product-showcase__stats">
          <li class="product-showcase__stat">
            <span class="product-showcase__stat-value">10x</span>
            <span class="product-showcase__stat-label">Faster</span>
          </li>
        </ul>
        <div class="product-showcase__actions">
          <a href="#" class="btn btn--terracotta">CTA</a>
        </div>
      </div>
      <div class="product-showcase__media">
        <img src="..." alt="...">
      </div>
    </div>
  </div>
</section>

<!-- Reverse layout -->
<section class="product-showcase product-showcase--reverse">
  <!-- Same structure -->
</section>
```

## Section Backgrounds
```html
<section class="section--atmosphere-warm">...</section>
<section class="section--atmosphere-sunrise">...</section>
<section class="section--atmosphere-earth">...</section>
```

## Cards
```html
<div class="card card--warm-accent">...</div>
<div class="card card--sage-accent">...</div>
```

## Buttons
```html
<a class="btn btn--terracotta">Terracotta CTA</a>
<a class="btn btn--amber">Amber CTA</a>
<a class="btn btn--sage">Sage CTA</a>
```

## Badges
```html
<span class="badge badge--terracotta">Badge</span>
<span class="badge badge--amber">Badge</span>
<span class="badge badge--sage">Badge</span>
<span class="badge badge--gold">Badge</span>
```

## Feature Grid
```html
<div class="feature-grid">
  <div class="feature-card feature-card--warm">
    <div class="feature-card__icon">Icon</div>
    <h3 class="feature-card__title">Title</h3>
    <p class="feature-card__description">Description</p>
  </div>
  <!-- Modifiers: feature-card--warm, --sage, --amber -->
</div>
```

## Color Tokens
- `--terracotta` (#B8705A light, #C9826E dark)
- `--amber` (#D4A574 light, #E0B387 dark)
- `--gold` (#F4C95D light, #F5D174 dark)
- `--sage` (#A8C686 light, #B5D498 dark)
- `--wheat` (#E8D5B5 light, #F0DFC5 dark)

## Gradient Tokens
- `--gradient-warm-glow` - Radial amber
- `--gradient-sunrise` - Gold → Terracotta
- `--gradient-earth-sky` - Wheat → White

## Glass Tokens
- `--glass-warm-amber`
- `--glass-warm-sage`
- `--glass-warm-terracotta`
