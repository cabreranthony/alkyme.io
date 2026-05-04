#!/bin/bash
# Cleanup script to remove competitor references from CSS comments
# Run from Website root directory

echo "Cleaning competitor references from CSS files..."

# Replace Apple references
find assets -name "*.css" -type f -exec sed -i '' 's/Apple minimalism/refined minimalism/g' {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Apple's restraint/Refined restraint/g" {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Apple's sophisticated/Sophisticated/g" {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Apple's refined/Refined/g" {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Apple-level/Premium/g" {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Apple-inspired/Refined/g" {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Apple's approach/Refined proportional scaling/g" {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Apple subtlety/subtle depth/g" {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Apple (smooth)/smooth/g" {} +

# Replace Meta references
find assets -name "*.css" -type f -exec sed -i '' 's/Meta boldness/bold confidence/g' {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Meta's vibrant/Vibrant/g" {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Meta's bold/Bold/g" {} +
find assets -name "*.css" -type f -exec sed -i '' 's/Meta presence/confident presence/g' {} +
find assets -name "*.css" -type f -exec sed -i '' 's/Meta-inspired/Modern/g' {} +
find assets -name "*.css" -type f -exec sed -i '' 's/Meta-style/Modern/g' {} +
find assets -name "*.css" -type f -exec sed -i '' 's/Meta pattern/modern pattern/g' {} +
find assets -name "*.css" -type f -exec sed -i '' "s/Meta (moderate)/moderate/g" {} +

# Replace Google references
find assets -name "*.css" -type f -exec sed -i '' 's/Meta\/Google/enterprise/g' {} +
find assets -name "*.css" -type f -exec sed -i '' 's/Google\/Meta/enterprise/g' {} +

# Replace Netflix references (should be archived already, but just in case)
find assets -name "*.css" -type f -exec sed -i '' 's/Netflix-inspired/Cinematic/g' {} +
find assets -name "*.css" -type f -exec sed -i '' 's/Netflix structure/cinematic structure/g' {} +
find assets -name "*.css" -type f -exec sed -i '' 's/Netflix-style/Cinematic/g' {} +

echo "Done! Competitor references cleaned from CSS."
echo "Review changes with: git diff assets/"
