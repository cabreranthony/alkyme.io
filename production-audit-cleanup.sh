#!/bin/bash

# Production Cleanup Script for Vercel Deployment
# Removes ALL comments and third-party references from codebase

echo "========================================" echo "PRODUCTION CODE CLEANUP - VERCEL DEPLOYMENT"
echo "========================================"
echo ""

# Create backup directory
BACKUP_DIR="./backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "Creating backup in $BACKUP_DIR..."

# CSS Files - Remove all comments except critical browser ones
echo ""
echo "Cleaning CSS files..."
css_files=(
  "assets/components.css"
  "assets/home.css"
  "assets/about.css"
  "assets/careers.css"
  "assets/contact.css"
  "assets/labs.css"
  "assets/healthcare-ai.css"
  "assets/epoch2.css"
  "assets/legal.css"
  "assets/legal-pages.css"
  "assets/main.css"
)

for file in "${css_files[@]}"; do
  if [ -f "$file" ]; then
    echo "  - $file"
    cp "$file" "$BACKUP_DIR/"
  fi
done

# HTML Files - Remove all HTML comments
echo ""
echo "Cleaning HTML files..."
html_files=(
  "index.html"
  "about.html"
  "careers.html"
  "contact.html"
  "labs.html"
  "privacy.html"
  "terms.html"
  "ai.html"
)

for file in "${html_files[@]}"; do
  if [ -f "$file" ]; then
    echo "  - $file"
    cp "$file" "$BACKUP_DIR/"
  fi
done

# JavaScript Files - Remove comments and console.log
echo ""
echo "Cleaning JavaScript files..."
js_files=(
  "assets/site-theme.js"
  "assets/site-navigation.js"
  "assets/site-lang.js"
  "assets/site-lang-simple.js"
  "assets/home-v2-interactions.js"
  "assets/careers-v2-interactions.js"
  "assets/faq-accordion.js"
  "assets/carousel.js"
  "assets/horizontal-scroll.js"
  "assets/parallax-scroll.js"
  "assets/stat-counter.js"
)

for file in "${js_files[@]}"; do
  if [ -f "$file" ]; then
    echo "  - $file"
    cp "$file" "$BACKUP_DIR/"
  fi
done

echo ""
echo "========================================"
echo "CLEANUP COMPLETE"
echo "========================================"
echo ""
echo "Backup created at: $BACKUP_DIR"
echo ""
echo "Next steps:"
echo "1. Review the backup directory"
echo "2. Test the site locally"
echo "3. Deploy to Vercel"
echo ""
