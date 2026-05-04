# Footer Redesign Sprint - Solutions Page
**Date**: 2026-05-03
**Status**: In Progress
**Reference**: Hotels.com footer (https://www.hotels.com/product/save-your-way/)

## Objective
Redesign the Solutions page footer to match Hotels.com's layout structure exactly.

## Requirements

### Layout Structure
Based on Hotels.com footer analysis:
- **Total columns**: 7 columns in grid
- **Column 1-2**: Logo area (wider, more space)
- **Column 3**: Empty/whitespace gap
- **Columns 4-7**: Four navigation sections side-by-side
  - Company
  - Solutions
  - Support
  - Legal

### Design Specifications
- **Logo**: Use `assets/logos/alkyme-logo-lt-hzt-black.svg` (horizontal black logo)
- **Background**: Light gray (#fafafa)
- **Typography**:
  - Headings: 13px, uppercase, semibold, letter-spacing
  - Links: 14px, regular weight, gray (#5a5a5a)
  - Hover: Dark gray (#111), no underline
- **Spacing**: Generous gaps between sections (56-72px)
- **Border**: 1px solid #e8e8e8 top border and between nav/legal sections

### Current Issues
1. Footer columns are evenly spaced - no visible gap between logo and nav
2. Logo too small (32px height)
3. Grid proportions incorrect - doesn't match Hotels.com visual balance
4. Hacky fractional unit approach instead of proper grid structure

## User Feedback
- "stop being hacky"
- "read your contract"
- "redo the footer from scratch"
- "use alkyme-logo-lt-hzt-black"

## Files to Modify
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/solutions.html` - Footer HTML structure
- `/Users/anthonycabrera/Documents/Business/Alkyme/Website/assets/css/solutions.css` - Footer CSS starting at line ~698

## Next Steps
1. Use Task agent to rebuild footer from scratch
2. Follow design system contract (no hacky code)
3. Match Hotels.com reference exactly
4. Use proper logo file (alkyme-logo-lt-hzt-black.svg)
5. Test and verify layout matches reference

## Reference Analysis
Hotels.com footer has:
- Logo on left with ample breathing room
- Clear visual separation (empty space) between logo and navigation
- 4 navigation columns grouped together on right side
- Clean, spacious, professional appearance
- Not evenly distributed - logo area is wider, then gap, then nav columns are tighter together
