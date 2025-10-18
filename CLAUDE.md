# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sparsan is a static marketing website for an AI-powered chatbot platform targeting SMEs. The site is built with vanilla HTML, CSS, and JavaScript - no build tools, frameworks, or package managers required.

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
│   │   └── styles.css      # Single monolithic stylesheet (~35KB, ~1900 lines)
│   ├── js/
│   │   └── script.js       # All JavaScript functionality (~380 lines)
│   └── images/
│       ├── logo.png        # Site logo
│       └── favicon.png     # Site favicon
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

## Deployment
This is a static site - upload all files to any static hosting:
- Netlify: Drag-and-drop or Git deploy
- Vercel: Git deploy
- GitHub Pages: Push to gh-pages branch
- AWS S3: Enable static website hosting
- Any web server: Upload via FTP/SFTP
