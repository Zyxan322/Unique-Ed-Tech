# Unique EdTech Premium Upgrade

## Goal
Upgrade the existing site in place while preserving its logo, brand palette, navigation, hero carousel, page URLs, content structure, contact details, and working links.

## Implementation

### 1. Shared premium interaction system
- Add a reusable pointer-aware 3D card treatment with restrained tilt, lift, image parallax, moving highlight, accent border, icon motion, and CTA-arrow motion.
- Upgrade the shared reveal system to support directional reveals, scale/image reveals, blur-to-sharp transitions, stagger delays, and reduced-motion fallbacks.
- Add lightweight parallax for large editorial images using scroll position only while visible.
- Add a thin global scroll-progress line and refined link, button, image, input, and navigation interactions.
- Keep mobile effects touch-friendly and disable cursor tilt/parallax when reduced motion is requested.

### 2. Expanded homepage story
Keep the existing full-screen hero, then organize the page into this sequence:
1. Learning Beyond the Classroom — editorial welcome image and three highlights.
2. Why Unique EdTech — six upgraded feature cards.
3. Explore Our Learning Journey — filterable, swipeable course carousel with all academic levels and technology programs; four cards on desktop, two to three on tablet, one on mobile.
4. Preparing Students for the Digital Future — large realistic lab image with layered program labels.
5. Imagine. Build. Innovate. — robotics/STEM editorial section.
6. How We Help Students Grow — five-step scroll-highlighted learning journey.
7. Campus Life — masonry image gallery with lightbox and keyboard navigation.
8. Student Activities — swipeable horizontal cards with working controls.
9. Achievements / Highlights — editable placeholders with viewport-triggered counter presentation, without invented statistics.
10. What Our Community Says — five editable testimonial placeholders in a controlled/swipeable carousel.
11. Latest From Unique EdTech — news and events cards linking to existing pages.
12. Cinematic admissions banner linking to Apply and Book a Visit.

### 3. Existing page upgrades
- Apply the shared reveal, parallax, stagger, depth-card, image, and CTA treatments across every catch-all page.
- Expand Academics and Programs overview content with linked cards for every existing academic level and program.
- Preserve placeholder-only faculty, testimonial, resource, and achievement content until verified details are supplied.
- Keep existing page validation and metadata while ensuring each supported URL remains reachable.

### 4. Footer and fixed controls
- Redesign the footer as a premium multi-layer final chapter: CTA banner, brand introduction, Academics, Programs, Explore, contact, social links, and legal bar.
- Use only supplied contact details; label unavailable address and social destinations as editable rather than inventing them.
- Refine the WhatsApp control into a circular button that expands on hover without blinking.
- Add a subtle long-page section navigator for Academics, Programs, Campus, Activities, and Admissions where those anchors exist.

### 5. Technical and accessibility safeguards
- Use semantic brand tokens and the existing Sora/Manrope type system.
- Use transform/opacity-based animation, Intersection Observer, lazy image loading, stable media dimensions, and no continuous JavaScript animation loops.
- Add keyboard controls and focus management to carousels and the campus lightbox.
- Prevent horizontal page overflow and ensure controls remain usable at desktop, tablet, and mobile widths.
- Retain the existing metadata and add page-specific structured data only where the page content supports it.

## Verification
- Check the homepage and representative inner pages at desktop, tablet, and mobile sizes.
- Verify header, logo, every navigation item, course links, carousel arrows, filters, lightbox keyboard controls, testimonials, admissions CTAs, footer links, WhatsApp, and back-to-top.
- Confirm no overlap or horizontal overflow, reduced-motion behavior, correct active states, and clean browser console/runtime behavior.
