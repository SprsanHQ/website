# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sparsan is a static marketing website for an AI-powered chatbot platform targeting SMEs. The site is built with vanilla HTML, CSS, and JavaScript - no build tools, frameworks, or package managers required.

## Version Control

This repository uses Git for version control:
- `.gitignore`: Configured to exclude IDE files, OS files (.DS_Store), and sensitive data
- Commit messages should be descriptive and follow conventional commit format
- Branch naming: Feature branches typically use `feature/`, `fix/`, or `claude/` prefixes

## Development Commands

### Local Server
Since this is a static site, use any HTTP server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if npx available)
npx http-server

# PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### No Build Process
There are no build, compile, or transpile steps. Files are served directly.

## Architecture Overview

### File Structure
```
sparsan/
├── .gitignore              # Comprehensive gitignore for IDE, OS, and sensitive files
├── README.md               # Project documentation
├── CLAUDE.md               # This file - Claude Code guidance
├── netlify.toml            # Netlify configuration
├── robots.txt              # Search engine directives
├── sitemap.xml             # SEO sitemap
├── docs/                   # Documentation files
│   └── NETLIFY-FORMS-SETUP.md
├── assets/                 # All static assets organized by type
│   ├── css/
│   │   └── styles.css      # Single monolithic stylesheet (~35KB, ~1905 lines)
│   ├── js/
│   │   └── script.js       # All JavaScript functionality (~350 lines)
│   └── images/
│       ├── logo.png        # Site logo (1.3MB PNG, used in navbar and footer)
│       └── favicon.png     # Site favicon (2.5MB PNG, linked in all pages)
├── index.html              # Homepage with hero, features, ROI calculator, testimonials
├── features.html           # Detailed feature breakdown
├── pricing.html            # Pricing tiers with interactive calculator
├── use-cases.html          # Industry-specific use cases
├── resources.html          # Blog, guides, webinars
├── about.html              # Company information
├── contact.html            # Contact form and locations
└── success.html            # Form success page
```

**HTML Pages**: 8 standalone pages with shared navigation and footer at root level for simple routing

### CSS Architecture
The CSS uses a **CSS variables-based design system** defined in `:root`:
- Color scheme: `--primary-blue` (#00B4D8), `--dark-gray` (#3D4E5C), `--light-blue` (#90E0EF)
- Spacing scale: `--spacing-xs` through `--spacing-3xl`
- Semantic colors: `--success`, `--warning`, `--error`
- Complete grayscale palette: `--gray-50` through `--gray-900`

**Layout patterns**:
- Mobile-first responsive design with breakpoints at 768px and 1024px
- Grid-based layouts using CSS Grid: `.features-grid`, `.pricing-grid`, `.testimonials-grid`
- Consistent section padding: `var(--spacing-3xl) 0`
- Common card pattern: white background, gray border, hover transforms

**Component naming**: BEM-inspired but not strict (e.g., `.feature-card`, `.blog-card`, `.pricing-card`)

### JavaScript Architecture
All functionality lives in `assets/js/script.js` with these key patterns:

1. **DOM-ready initialization**: Multiple `DOMContentLoaded` listeners for different features
2. **Feature modules** (not formal modules, just logical groupings):
   - Mobile menu toggle
   - Pricing toggle (monthly/annual)
   - ROI calculator with live updates
   - Contact form handling
   - Smooth scroll for anchor links
   - Intersection Observer for scroll animations
   - Navbar scroll effects
   - Statistics counter animations
   - FAQ accordion
   - Toast notifications

3. **Global namespace**: `window.Sparsan` object exports utilities:
   ```javascript
   window.Sparsan = {
       showToast,
       copyToClipboard,
       calculateROI
   }
   ```

4. **Dynamic CSS injection**: Script injects keyframe animations and responsive styles via `<style>` tag

### Navigation Pattern
All pages share identical navigation structure:
- Fixed navbar with logo, menu items, and CTA buttons
- Mobile hamburger menu (shown below 768px)
- Consistent footer with 4 columns: branding, product, resources, company

### Interactive Features

**ROI Calculator** (on `index.html` and `pricing.html`):
- Input fields: agents, salary, tools cost, automation percentage
- Real-time calculation on input/change events
- Updates three display values: current cost, new cost, savings

**Pricing Toggle**:
- Monthly/annual billing switch
- Shows/hides `.monthly-price` and `.annual-price` elements via CSS display

**Scroll Animations**:
- IntersectionObserver watches `.feature-card`, `.step`, `.testimonial-card`, `.pricing-card`
- Adds `.animate-in` class when elements enter viewport
- Triggers fadeInUp animation

**Form Handling**:
- Contact form prevents default and shows alert (no backend integration)
- Button loading states for submit buttons

## Design System

### Typography
- Font: Inter (via Google Fonts)
- 6 heading levels with consistent sizing (3rem → 1rem)
- Line height: 1.2 for headings, 1.6 for body

### Buttons
Three variants:
- `.btn-primary` - Blue background, white text
- `.btn-secondary` - White background, blue border
- `.btn-outline` - Transparent with blue border
- Modifier: `.btn-large` for CTAs

### Cards
Common hover pattern across all card types:
```css
transform: translateY(-5px);
box-shadow: var(--shadow-xl);
border-color: var(--primary-blue);
```

## Common Tasks

### Adding a New Page
1. Copy existing HTML page as template
2. Update `<title>` and meta description
3. Ensure navigation links include the new page
4. Maintain consistent `.navbar` and `.footer` structure
5. Use standard section classes: `.page-hero`, `.section-header`, etc.

### Modifying Colors
Edit CSS variables in `assets/css/styles.css` at `:root` (lines 12-34):
```css
:root {
    --primary-blue: #00B4D8;
    --dark-gray: #3D4E5C;
    --light-blue: #90E0EF;
}
```

### Adding JavaScript Functionality
1. Add to `assets/js/script.js` (no module system)
2. Use `DOMContentLoaded` for DOM-dependent code
3. Add null checks (`if (element)`) before event listeners
4. Export to `window.Sparsan` if reusable across pages

### Contact Information
Contact email appears in multiple locations:
- Footer of all pages
- `contact.html` form and direct contact section
- Update all instances when changing: currently `hello@sparsan.com` for general inquiries and `support@sparsan.com` for support

## Browser Support
Modern browsers only (ES6+ JavaScript):
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers: iOS Safari, Chrome Mobile
- Uses modern features: IntersectionObserver, CSS Grid, CSS Custom Properties

## Important Notes

- **No backend**: Forms submit to console.log only. Requires integration with Formspree, Netlify Forms, or custom backend
- **No analytics**: Google Analytics placeholders exist but not configured
- **Static content**: All text is hardcoded in HTML (no CMS)
- **Image placeholders**: Many sections show text placeholders instead of images
- **No accessibility audits**: ARIA labels minimal, may need enhancement for WCAG compliance
- **Image optimization needed**: Logo and favicon are large PNGs (1.3MB and 2.5MB respectively) - consider optimizing or converting to WebP/SVG for better performance

## Deployment

### Netlify (Configured)
The site includes `netlify.toml` with:
- Publish directory: "." (root)
- Redirect rules for clean URLs (/contact → /contact.html)
- Forms processing enabled

Deploy via:
- Drag-and-drop to Netlify dashboard
- Connect Git repository for automatic deploys
- Netlify CLI: `netlify deploy --prod`

### Other Hosting Options
- **Vercel**: Git deploy (auto-detects static site)
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Enable static website hosting
- **Any web server**: Upload via FTP/SFTP

### SEO Files Included
- `robots.txt`: Search engine crawler directives
- `sitemap.xml`: Complete sitemap with all 8 pages

## Troubleshooting

### Common Issues

**Navigation not consistent across pages**
- All 8 HTML pages should have identical `<nav class="navbar">` structure
- Check that logo path is consistent: `assets/images/logo.png`
- Verify active page class is applied correctly

**JavaScript not working on a specific page**
- Ensure `<script src="assets/js/script.js"></script>` is before closing `</body>` tag
- Check browser console for errors (F12)
- Verify element IDs/classes match what JavaScript expects

**Styles not applying**
- Confirm `<link rel="stylesheet" href="assets/css/styles.css">` in `<head>`
- Check for path issues if accessing from subdirectory
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Forms not submitting**
- Forms currently only log to console - need backend integration
- For Netlify: Add `netlify` or `data-netlify="true"` attribute to `<form>` tag
- See `docs/NETLIFY-FORMS-SETUP.md` for detailed form integration guide

**Images not displaying**
- Verify files exist in `assets/images/` directory
- Check image paths in HTML (should be relative: `assets/images/filename.png`)
- Ensure images aren't being blocked by ad blockers

## Performance Optimization Recommendations

### Quick Wins
1. **Optimize images**: Compress logo.png and favicon.png (currently 1.3MB and 2.5MB)
   - Use tools like ImageOptim, TinyPNG, or Squoosh
   - Consider converting to WebP format with PNG fallbacks
   - Favicon could be reduced to 32x32 or 64x64 pixels

2. **Lazy load images**: Add `loading="lazy"` attribute to images below the fold

3. **Minify assets** (for production):
   - CSS: Use cssnano or clean-css
   - JS: Use terser or uglify-js
   - HTML: Use html-minifier

4. **Enable caching**: Add cache headers via hosting provider
   - Static assets: 1 year
   - HTML: 1 hour or no-cache

### Advanced Optimizations
- Consider converting logo to SVG for perfect scaling and smaller file size
- Implement critical CSS for above-the-fold content
- Add preconnect hints for Google Fonts
- Consider using system fonts to eliminate external font request

## Testing & Quality Assurance

### Manual Testing Checklist
When making changes, test these key features:

**Cross-page consistency**
- [ ] Navigation menu works on all 8 pages
- [ ] Footer content identical across all pages
- [ ] Logo displays correctly
- [ ] Mobile menu toggles properly (< 768px width)

**Interactive features**
- [ ] ROI calculator updates values in real-time (index.html, pricing.html)
- [ ] Pricing toggle switches between monthly/annual (pricing.html)
- [ ] Contact form shows validation (contact.html)
- [ ] Smooth scroll on anchor links
- [ ] Scroll animations trigger when elements enter viewport

**Responsive design**
- [ ] Test at 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large desktop)
- [ ] All text is readable without horizontal scrolling
- [ ] Images scale appropriately
- [ ] Grid layouts adjust properly

**Browser compatibility**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Validation Tools
- **HTML**: [W3C Validator](https://validator.w3.org/)
- **CSS**: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- **Accessibility**: [WAVE Tool](https://wave.webaim.org/)
- **Performance**: Lighthouse in Chrome DevTools
- **Mobile-friendly**: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## Code Conventions

### HTML
- Use semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, etc.)
- Maintain consistent indentation (4 spaces)
- Always include alt text for images
- Use meaningful class names that describe purpose, not appearance

### CSS
- Follow the existing BEM-inspired naming: `.block-name`, `.block-name__element`, `.block-name--modifier`
- Use CSS variables from `:root` instead of hardcoded values
- Mobile-first: Base styles for mobile, then `@media (min-width: 768px)` for larger screens
- Group related properties: positioning, box model, typography, visual, misc

### JavaScript
- Use `const` and `let`, never `var`
- Add null checks before DOM manipulation: `if (element) { ... }`
- Keep functions focused on a single responsibility
- Comment complex logic
- Use descriptive variable names
- Export reusable functions to `window.Sparsan` namespace
