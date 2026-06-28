# QA Checklist — ERGO Landing Page

## Layout & Responsiveness
- [ ] Page renders without console errors
- [ ] All sections visible and correctly ordered
- [ ] No horizontal scroll on mobile (320px+)
- [ ] Navbar collapses to hamburger on <1024px
- [ ] Mobile menu opens/closes smoothly
- [ ] Footer stacks on mobile (single column)
- [ ] Grid content reflows correctly at all breakpoints

## Navigation & Links
- [ ] All nav links scroll to correct section
- [ ] Logo links to "/"
- [ ] "Book Test Drive" button links to #test-drive
- [ ] Social links open in new tab with rel="noopener noreferrer"
- [ ] Mobile menu closes on link click
- [ ] All CTA buttons are tappable on touch devices

## Animations & Motion
- [ ] Page loads without animation stutter
- [ ] Sections reveal on scroll (no jarring transitions)
- [ ] Animated counters increment correctly
- [ ] Carousel auto-plays and responds to controls
- [ ] Accordion opens/closes with smooth animation
- [ ] Interior hotspots show/hide info cards
- [ ] `prefers-reduced-motion: reduce` disables animations

## 3D Configurator
- [ ] Configurator section renders without Three.js errors
- [ ] Car model visible and properly lit
- [ ] Color picker changes car body color reactively
- [ ] Wheel/interior/package options update pricing
- [ ] Pricing summary shows correct calculations
- [ ] OrbitControls respond to mouse/touch
- [ ] Falls back gracefully on low-end devices

## Forms
- [ ] Test drive form validates all required fields
- [ ] Email validation rejects invalid formats
- [ ] Phone validation accepts international formats
- [ ] Submit button shows loading state
- [ ] Success message displays on submission
- [ ] Form clears or resets after success

## Accessibility
- [ ] Skip-to-content link visible on Tab
- [ ] All images have alt text or aria-hidden
- [ ] Form inputs have associated labels
- [ ] Error messages linked to inputs via aria-describedby
- [ ] Mobile menu traps focus when open
- [ ] Navbar uses correct ARIA roles (menubar, menuitem)
- [ ] Color contrast meets WCAG AA (4.5:1 normal, 3:1 large)
- [ ] Keyboard navigation works end-to-end

## Performance
- [ ] Lighthouse score ≥ 90 on all categories (mobile)
- [ ] No render-blocking resources
- [ ] Images optimized (AVIF/WebP)
- [ ] Fonts load with display:swap
- [ ] Three.js configurator lazy-loaded
- [ ] Bundle size within acceptable limits

## SEO
- [ ] Page has unique title and meta description
- [ ] Open Graph tags present (og:title, og:description, og:image)
- [ ] Twitter card tags present
- [ ] robots.txt and sitemap.xml accessible
- [ ] Structured data (JSON-LD) renders correctly
- [ ] Canonical URL set

## Error Handling
- [ ] 404 page displays for unknown routes
- [ ] Error boundary catches runtime errors
- [ ] Global error page renders on critical failure
- [ ] Console shows no unhandled rejections

## Cross-browser
- [ ] Chrome / Edge — latest
- [ ] Firefox — latest
- [ ] Safari — latest (macOS/iOS)
