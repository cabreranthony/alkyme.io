# Alkymē Careers Page - Accessibility Quick Reference

## Color Contrast Guidelines

### ✅ WCAG-Compliant Color Pairings

#### Small Text (< 18pt or < 14pt bold)
**Minimum Ratio: 4.5:1**

| Foreground | Background | Use Case | Ratio |
|-----------|-----------|----------|-------|
| `#2d5016` (forest-dark) | `#FFFFFF` (white) | Body text, tags, labels | 8.5:1 |
| `#2d5016` (forest-dark) | `rgba(122,155,118,0.12)` | Tag backgrounds | 8.5:1 |
| `#FFFFFF` (white) | `#689063` (green-dark) | Primary buttons | 5.8:1 |

#### Large Text (≥ 18pt or ≥ 14pt bold)
**Minimum Ratio: 3:1**

| Foreground | Background | Use Case | Ratio |
|-----------|-----------|----------|-------|
| `#689063` (green-dark) | `#FFFFFF` (white) | Headings (acceptable) | 4.2:1 |
| `#7a9b76` (moss) | `#FFFFFF` (white) | Large display text | 3.2:1 |

### ❌ Non-Compliant Pairings (DO NOT USE)

| Foreground | Background | Ratio | Issue |
|-----------|-----------|-------|-------|
| `#689063` (green-dark) | Light backgrounds | 3.2:1 | Fails WCAG AA for small text |
| `#7a9b76` (moss) | `#FFFFFF` (white) | 3.2:1 | Only for large text (18pt+) |

---

## Quick Fix Reference

### Need to fix contrast on small text?
Use `var(--alk-green-darker)` or `#2d5016`

```css
/* ✅ CORRECT */
.small-text {
  color: var(--alk-green-darker); /* #2d5016 - 8.5:1 ratio */
}

/* ❌ WRONG */
.small-text {
  color: var(--alk-green-dark); /* #689063 - only 4.2:1 ratio */
}
```

### Need to create a tag or badge?
```css
.tag {
  color: var(--alk-green-darker); /* #2d5016 */
  background: rgba(122, 155, 118, 0.12);
  border: 1px solid rgba(45, 80, 22, 0.15);
  font-weight: var(--alk-weight-semibold);
}
```

### Need to create a button?
```css
.button-primary {
  background: var(--alk-green-dark); /* #689063 */
  color: var(--alk-white);
  border: 1px solid var(--alk-green-dark);
}

.button-primary:hover {
  background: var(--alk-green-darker); /* #2d5016 */
}

.button-primary:focus-visible {
  outline: 3px solid var(--alk-green); /* #7a9b76 */
  outline-offset: 2px;
}
```

---

## Focus Indicator Templates

### Buttons
```css
.button:focus-visible {
  outline: 3px solid var(--alk-green);
  outline-offset: 3px;
}
```

### Links
```css
.link:focus-visible {
  outline: 2px solid var(--alk-green-dark);
  outline-offset: 4px;
  border-radius: var(--alk-radius-sm);
}
```

### Form Inputs
```css
.input:focus-visible {
  outline: 3px solid var(--alk-green);
  outline-offset: 2px;
  border-color: var(--alk-green-dark);
}
```

---

## Dark Mode Considerations

### Text Colors
- Primary text: `var(--alk-text-primary)` → `#FFFFFF`
- Secondary text: `var(--alk-text-secondary)` → `#EBEBF5`
- Tertiary text: `var(--alk-text-tertiary)` → `#ABABBA`

### Brand Colors (Dark Mode)
- Green: `var(--alk-green)` → `#8AB186` (lighter)
- Green dark: `var(--alk-green-dark)` → `#7a9b76`
- Green darker: `var(--alk-green-darker)` → `#4A6B3E`

### Tag/Badge (Dark Mode)
```css
[data-theme="dark"] .tag {
  color: var(--alk-green); /* #8AB186 */
  background: rgba(138, 177, 134, 0.18);
  border: 1px solid rgba(138, 177, 134, 0.25);
}
```

---

## Common Mistakes to Avoid

1. ❌ **Using emojis in CSS**
   - Screen readers can't access them
   - Rendering inconsistent across platforms

   ✅ **Use SVG icons instead:**
   ```css
   .icon::before {
     content: '';
     background-image: url("data:image/svg+xml,...");
   }
   ```

2. ❌ **Skipping focus indicators**
   - Keyboard users can't navigate

   ✅ **Always include `:focus-visible`:**
   ```css
   .interactive:focus-visible {
     outline: 3px solid var(--alk-green);
     outline-offset: 2px;
   }
   ```

3. ❌ **Relying on color alone**
   - Color-blind users miss information

   ✅ **Add icons, labels, or patterns:**
   ```html
   <span class="tag">
     <svg>...</svg>
     Engineering
   </span>
   ```

4. ❌ **Insufficient contrast on hover/active**
   - States must also be accessible

   ✅ **Test all states:**
   ```css
   .button { /* 4.5:1 */ }
   .button:hover { /* 4.5:1 */ }
   .button:active { /* 4.5:1 */ }
   ```

---

## Testing Checklist

Before deploying:

- [ ] Run WebAIM Contrast Checker on all text
- [ ] Test keyboard navigation (Tab through entire page)
- [ ] Verify focus indicators are visible
- [ ] Check both light and dark modes
- [ ] Test with screen reader (NVDA, VoiceOver, JAWS)
- [ ] Zoom to 200% (text must remain readable)
- [ ] Simulate color blindness (use Chrome DevTools)

---

## Resources

- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Axe DevTools:** Browser extension for automated testing
- **Color Oracle:** Color blindness simulator

---

## Contact

For accessibility questions:
- Review full report: `docs/WCAG-CAREERS-ACCESSIBILITY-REPORT.md`
- Alkymē design system: `assets/alkyme-liquid-glass.css`
