# Implementation Plan: CHRIST INFO – CS Department Website

## Overview

A phased implementation of the CHRIST INFO single-page academic microsite for the Department of Computer Science, CHRIST (Deemed to be University), Yeshwantpur Campus. Built with React (Vite), Tailwind CSS, and Framer Motion. No backend — pure static SPA with scroll navigation.

Implementation follows a strict dependency order: toolchain → folder structure → design system → primitives → sections → animations → responsive pass → accessibility pass → performance → production build.

---

## Tasks

- [x] 1. Project Setup & Toolchain
  - [x] 1.1 Scaffold the Vite + React project with TypeScript template
    - Run `npm create vite@latest christ-info -- --template react-ts`
    - Verify `vite.config.ts`, `tsconfig.json`, and `index.html` are present
    - _Requirements: 1.1, 1.4_

  - [x] 1.2 Install and configure Tailwind CSS
    - Install `tailwindcss`, `postcss`, `autoprefixer`
    - Run `npx tailwindcss init -p` to generate `tailwind.config.js` and `postcss.config.js`
    - Add Tailwind directives to `src/index.css`
    - _Requirements: 1.2_

  - [x] 1.3 Install Framer Motion
    - Install `framer-motion` package
    - Verify import works in `src/main.tsx`
    - _Requirements: 1.3_

  - [x] 1.4 Install supporting packages
    - Install `lucide-react` for thin-line icons
    - Install `react-scroll` or configure native smooth-scroll for anchor navigation
    - _Requirements: 1.3, 3.4_

  - [x] 1.5 Configure Vite build output for static deployment
    - Set `build.outDir` to `dist` in `vite.config.ts`
    - Verify `npm run build` produces a fully static `dist/` folder
    - _Requirements: 1.5_

- [x] 2. Project Architecture & Folder Structure
  - [x] 2.1 Create the canonical source directory structure
    - Create directories: `src/components/ui/`, `src/components/sections/`, `src/components/layout/`, `src/data/`, `src/lib/`, `src/assets/images/`
    - Create placeholder `index.ts` barrel files in each directory
    - _Requirements: 1.1, 1.4_

  - [x] 2.2 Create static data files in `/data/`
    - `src/data/leadership.ts` — array of 5 leader objects (name, title, email, phone, linkedin, imagePlaceholder)
    - `src/data/stats.ts` — array of 8 metric objects (value, label, icon)
    - `src/data/samagra.ts` — array of 6 wing objects (name, domain, tagline, icon)
    - `src/data/navigation.ts` — navbar links array and footer column data
    - _Requirements: 5.2, 6.2, 7.2, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [x] 2.3 Create the root App component shell
    - `src/App.tsx` — imports all section components in page order
    - Sections listed in order: Navbar, NavigationFunnel, LeadershipStrip, StatsBar, SamagraEcosystem, Footer
    - No logic yet — just structure and imports
    - _Requirements: 1.4_

- [ ] 3. Design System (Tokens, Typography, Tailwind Config)
  - [x] 3.1 Extend `tailwind.config.js` with custom color tokens
    - Add `maroon: { DEFAULT: '#7F1D1D', dark: '#5C1313' }`
    - Add `cream: { DEFAULT: '#FFF7ED' }`
    - Add `gold: { DEFAULT: '#D4A017', light: '#E8B84B' }`
    - Add `charcoal: { DEFAULT: '#1E293B', dark: '#111827' }`
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 3.2 Extend `tailwind.config.js` with custom typography tokens
    - Add `fontFamily.serif` → `['Playfair Display', 'Georgia', 'serif']`
    - Add `fontFamily.sans` → `['Inter', 'system-ui', 'sans-serif']`
    - Add `fontSize` scale entries for display, heading, subheading, body, label
    - _Requirements: 2.5, 2.6_

  - [x] 3.3 Add Google Fonts link in `index.html`
    - Link `Playfair Display` (weights 400, 600, 700) and `Inter` (weights 300, 400, 500, 600)
    - _Requirements: 2.5, 2.6_

  - [x] 3.4 Extend `tailwind.config.js` with custom spacing and shadow tokens
    - Add spacing scale entries: `section-x: 5rem`, `section-y: 6rem`
    - Add box-shadow entries: `card: '0 4px 24px rgba(127,29,29,0.07)'`, `card-hover: '0 8px 40px rgba(127,29,29,0.15)'`
    - _Requirements: 2.7, 2.8, 2.9_

  - [x] 3.5 Create `src/lib/animations.ts` with shared Framer Motion variants
    - Export `fadeInUp` variant (y: 24 → 0, opacity: 0 → 1, duration 0.5s ease-in-out)
    - Export `staggerContainer` variant (staggerChildren: 0.12s)
    - Export `cardHover` variant (translateY: -4px, boxShadow: card-hover)
    - Export `lineDrawIn` variant for SVG path animation (pathLength: 0 → 1)
    - Export `reducedMotion` utility — returns static variants when `prefers-reduced-motion: reduce`
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [x] 3.6 Create `src/lib/utils.ts` with shared utility helpers
    - `cn()` — classname merge helper using `clsx` + `tailwind-merge`
    - Install `clsx` and `tailwind-merge` packages
    - _Requirements: 2.9_

- [ ] 4. Reusable UI Primitives
  - [x] 4.1 Create `src/components/ui/Button.tsx`
    - Variants: `primary` (maroon fill, gold hover ring), `ghost` (transparent, maroon border)
    - Props: `variant`, `size`, `children`, `onClick`, `href`, `ariaLabel`
    - Apply `cardHover` motion variant on hover
    - _Requirements: 2.8, 10.3_

  - [x] 4.2 Create `src/components/ui/Card.tsx`
    - Base card: rounded-2xl, glassmorphism background (bg-white/60 backdrop-blur-sm), `card` shadow
    - Apply `cardHover` motion variant on hover (translateY + shadow upgrade)
    - Props: `children`, `className`, `onClick`, `ariaLabel`
    - _Requirements: 2.7, 2.8_

  - [x] 4.3 Create `src/components/ui/SectionWrapper.tsx`
    - Full-width section container with consistent horizontal padding and vertical spacing
    - Accepts `id` prop for scroll-anchor targeting
    - Wraps children in a `motion.div` with `fadeInUp` + `whileInView`
    - _Requirements: 9.1, 9.2, 10.4_

  - [ ] 4.4 Create `src/components/ui/IconWrapper.tsx`
    - Renders a `lucide-react` icon inside a styled circular container
    - Props: `icon`, `size`, `color`, `ariaLabel`
    - Applies `aria-hidden="true"` when decorative, visible label when interactive
    - _Requirements: 10.3_

  - [x] 4.5 Create `src/components/ui/AnimatedCard.tsx`
    - Wraps `Card.tsx` with Framer Motion `whileInView` entrance using `fadeInUp` variant
    - Accepts `delay` prop for stagger control
    - _Requirements: 4.7, 9.3_

- [ ] 5. Navbar Component
  - [ ] 5.1 Create `src/components/layout/Navbar.tsx` with desktop layout
    - Fixed top, full-width, maroon (#7F1D1D) background, z-index 50
    - Left: "CHRIST INFO" brand text in serif font, gold accent on "INFO"
    - Right: navigation links from `src/data/navigation.ts` — Home, Courses, Faculty, Samagra Club, Student Help, About CS, Vision & Mission
    - Each link uses smooth-scroll to its section anchor
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [ ] 5.2 Implement hamburger menu for mobile in `Navbar.tsx`
    - Below 768px: hide desktop links, show hamburger icon button
    - Hamburger toggles a slide-down panel with vertical nav links
    - Panel uses `motion.div` with `AnimatePresence` for open/close animation
    - Hamburger icon has `aria-label="Open navigation menu"` and `aria-expanded` state
    - _Requirements: 3.5, 3.6, 10.3, 10.6_

  - [ ] 5.3 Verify Navbar contrast meets WCAG AA
    - Check all link text on maroon background meets 4.5:1 contrast ratio
    - Adjust text color to cream (#FFF7ED) or white as needed
    - _Requirements: 3.7, 10.2_

- [ ] 6. Navigation Funnel Section *(HIGHEST PRIORITY)*
  - [ ] 6.1 Create `src/components/sections/NavigationFunnel.tsx` component shell
    - Import `SectionWrapper`, `AnimatedCard`, `IconWrapper` primitives
    - Set section `id="navigation-funnel"` for anchor targeting
    - Add `staggerContainer` motion wrapper around the card grid
    - _Requirements: 4.1_

  - [ ] 6.2 Implement top row: "Explore CHRIST University" card
    - Full-height card, left half of top row
    - Background: cream card with a campus image placeholder (lazy-loaded `<img>`)
    - Heading in serif font, maroon color; short descriptor in sans-serif body
    - `alt` text: "CHRIST University main campus"
    - _Requirements: 4.2, 4.3, 10.5, 11.1_

  - [ ] 6.3 Implement top row: "Explore Yeshwantpur Campus" card
    - Full-height card, right half of top row
    - Background: cream card with a campus image placeholder (lazy-loaded `<img>`)
    - Heading in serif font, maroon color
    - `alt` text: "CHRIST Yeshwantpur Campus"
    - _Requirements: 4.2, 4.4, 10.5, 11.1_

  - [ ] 6.4 Implement bottom row: "Department of Computer Science" full-width card
    - Full-width card spanning both columns
    - Heading "Department of Computer Science" in large serif, maroon
    - 6-icon grid using thin-line `lucide-react` icons: Academics, Labs, Research, Student Achievements, Events, Placements
    - Each icon pair: icon above, label below, arranged in a 6-column flex row
    - _Requirements: 4.2, 4.5_

  - [ ] 6.5 Implement 2-over-1 CSS grid layout for the three cards
    - Desktop: CSS Grid `grid-cols-2`, top two cards in row 1, bottom card spans `col-span-2`
    - Tablet: same grid, adjust gap and padding
    - Mobile: single-column stack (`grid-cols-1`, all cards full width)
    - _Requirements: 4.2, 10.1_

  - [ ] 6.6 Wire hover effects and entrance animations on all three Funnel cards
    - Each card wrapped in `AnimatedCard` with staggered delay (0, 0.12s, 0.24s)
    - Hover: `cardHover` variant — translateY(-4px) + shadow upgrade + subtle gold ring
    - _Requirements: 4.6, 4.7_

- [ ] 7. Leadership Strip Section
  - [ ] 7.1 Create `src/components/sections/LeadershipStrip.tsx` component shell
    - Import `SectionWrapper`, `AnimatedCard`, `IconWrapper`
    - Consume leader data from `src/data/leadership.ts`
    - Section heading "Department Leadership" in serif, maroon
    - _Requirements: 5.1_

  - [ ] 7.2 Build individual `LeaderCard` sub-component
    - Circular avatar: 80px diameter, placeholder background with initials fallback
    - Name in serif font, role/title in sans-serif label style, gold underline accent
    - Icon row: email, phone, LinkedIn icons from `lucide-react`; each with `aria-label`
    - _Requirements: 5.2, 5.3, 10.3, 10.5_

  - [ ] 7.3 Build "View All Faculty" terminal card
    - Distinct style: maroon fill card, cream/gold text, arrow icon
    - Positioned as the rightmost card in the row
    - _Requirements: 5.4_

  - [ ] 7.4 Implement horizontal scroll row with stagger animation
    - Desktop: horizontal flex row, overflow-x visible with gap-6
    - Mobile (< 768px): `overflow-x: auto`, horizontal scroll snap
    - `staggerContainer` wraps all cards; each card uses `fadeInUp` with left-to-right delay
    - _Requirements: 5.1, 5.6, 5.7, 10.1_

  - [ ] 7.5 Wire hover effects on leadership cards
    - Apply `cardHover` motion variant on each `LeaderCard` and the terminal card
    - _Requirements: 5.5_

- [ ] 8. Stats Bar Section
  - [ ] 8.1 Create `src/components/sections/StatsBar.tsx` component shell
    - Import `SectionWrapper`, `IconWrapper`
    - Consume metric data from `src/data/stats.ts`
    - Full-width strip between Leadership and Samagra sections
    - Cream background with a subtle maroon top border line (1px, gold tint)
    - _Requirements: 6.1_

  - [ ] 8.2 Build individual `StatItem` sub-component
    - Metric value in large serif or bold sans, gold (#D4A017) color
    - Label in small sans-serif, charcoal color
    - Optional icon above value using `IconWrapper`
    - _Requirements: 6.2, 6.3_

  - [ ] 8.3 Implement entrance animation for stats
    - Wrap `StatsBar` children in `staggerContainer`
    - Each `StatItem` uses `fadeInUp` with staggered delay
    - Trigger via `whileInView` with 20% threshold
    - _Requirements: 6.4_

  - [ ] 8.4 Implement responsive grid layout for Stats Bar
    - Desktop: single `flex` row, 8 items evenly spaced
    - Tablet: `grid-cols-4`
    - Mobile: `grid-cols-2`
    - _Requirements: 6.5, 10.1_

- [ ] 9. Samagra Club Ecosystem Section
  - [ ] 9.1 Create `src/components/sections/SamagraEcosystem.tsx` component shell
    - Import `SectionWrapper`, `AnimatedCard`, `Button`, `IconWrapper`
    - Consume wing data from `src/data/samagra.ts`
    - Section heading "Samagra – CS Students' Community" in serif, maroon
    - _Requirements: 7.1_

  - [ ] 9.2 Build main Samagra central card
    - Left-positioned or center card: "SAMAGRA – The Official Computer Science Students' Community"
    - Maroon card, cream/gold typography, Samagra brief tagline
    - "Explore Samagra" `Button` (primary variant) below the description
    - _Requirements: 7.1, 7.4_

  - [ ] 9.3 Build individual `WingNode` sub-component
    - Rounded card: wing name in serif bold, domain tagline in sans label, icon via `IconWrapper`
    - Subtle cream background with gold border on hover
    - _Requirements: 7.3_

  - [ ] 9.4 Implement connected-node layout with SVG connector lines (desktop)
    - Desktop: CSS Grid with central card + 6 wing nodes arranged around it
    - SVG overlay layer with `<path>` lines connecting center card to each wing node
    - Each `<path>` uses `lineDrawIn` Framer Motion variant (pathLength animation)
    - Lines animate after the main card appears
    - _Requirements: 7.2, 7.6_

  - [ ] 9.5 Implement mobile fallback layout for Samagra section
    - Mobile (< 768px): hide SVG connector lines, switch to vertical stacked card list
    - Main card on top, 6 wing cards below in `grid-cols-1`
    - _Requirements: 7.8, 10.1_

  - [ ] 9.6 Wire hover effects and entrance animations for Samagra
    - Each `WingNode` wrapped in `AnimatedCard` with staggered delay
    - Hover: `cardHover` variant on wing nodes
    - _Requirements: 7.5, 7.6_

  - [ ] 9.7 Wire "Explore Samagra" button action
    - Button `onClick` scrolls to a Samagra detail anchor or opens external Samagra URL in new tab
    - _Requirements: 7.7_

- [ ] 10. Footer Component
  - [ ] 10.1 Create `src/components/layout/Footer.tsx` component shell
    - Consume footer column data from `src/data/navigation.ts`
    - Dark charcoal gradient background: `from-[#1E293B] to-[#0F172A]`
    - _Requirements: 8.1_

  - [ ] 10.2 Implement 4-column link grid in Footer
    - Columns: Department Links, Courses, Resources, Contact Us
    - Column headings in gold, links in cream with cream/50 hover state
    - Each link is a `<a>` with smooth-scroll anchor or `href`
    - Contact Us column: address, phone, email as styled text blocks
    - _Requirements: 8.2, 8.3, 8.4, 8.5, 8.6, 8.9_

  - [ ] 10.3 Implement Footer left brand panel
    - CHRIST logo image with `alt="CHRIST University Logo"`
    - Social icons row: Instagram, LinkedIn, YouTube, Facebook from `lucide-react`
    - Each icon wrapped in `<a target="_blank" rel="noopener noreferrer">` with `aria-label`
    - Campus locations text: "Bangalore | Delhi NCR | Pune"
    - _Requirements: 8.7, 8.10, 10.3, 10.5_

  - [ ] 10.4 Implement Footer bottom bar
    - Full-width dark border-top separator (1px gold/20 opacity)
    - Copyright text: "© 2026 CHRIST INFO - Computer Science Department. All Rights Reserved."
    - Credit line: "Developed by Students of Bachelor of Computer Applications (BCA) | Class: BCA A (2023-26 Batch)"
    - Centered, small sans-serif, cream/60 color
    - _Requirements: 8.8_

  - [ ] 10.5 Implement responsive layout for Footer
    - Desktop: 5-column grid (brand panel + 4 link columns)
    - Tablet: 3-column grid (brand full-row + 2×2 link columns)
    - Mobile: single-column stacked layout
    - _Requirements: 10.1_

- [ ] 11. Checkpoint — Core Sections Complete
  - Ensure all sections render without errors, Navbar links scroll correctly, and hover states function on all cards.
  - Confirm the page order matches: Navbar → Navigation Funnel → Leadership Strip → Stats Bar → Samagra Ecosystem → Footer.
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. Scroll Animations & Page-Wide Interactions
  - [ ] 12.1 Audit every section for `whileInView` coverage
    - Confirm all `SectionWrapper` instances use `whileInView` with `once: true`
    - Confirm `viewport={{ amount: 0.2 }}` is set on all animated wrappers
    - _Requirements: 9.1, 9.2_

  - [ ] 12.2 Implement `prefers-reduced-motion` global guard
    - In `src/lib/animations.ts`, use `window.matchMedia('(prefers-reduced-motion: reduce)')` to detect preference
    - Export a `useReducedMotion` hook wrapping Framer Motion's built-in `useReducedMotion`
    - Apply in `App.tsx` to pass a `shouldAnimate` flag to all animated components
    - _Requirements: 9.5_

  - [ ] 12.3 Standardise easing and duration across all transitions
    - Audit all `transition` props in animation variants
    - Ensure all durations are between 0.3s–0.6s with `ease: 'easeInOut'`
    - _Requirements: 9.4_

  - [ ] 12.4 Implement stagger consistency audit
    - Confirm staggerChildren value is consistently `0.12s` across all `staggerContainer` wrappers
    - _Requirements: 9.3_

- [ ] 13. Responsive Design Pass
  - [ ] 13.1 Mobile pass — test and fix all sections at < 768px
    - Navigation Funnel: single-column stack
    - Leadership Strip: horizontal scroll with snap
    - Stats Bar: 2-column grid
    - Samagra: vertical stacked list, SVG connectors hidden
    - Footer: single-column stack
    - _Requirements: 10.1, 3.5, 4.2, 5.7, 6.5, 7.8_

  - [ ] 13.2 Tablet pass — test and fix all sections at 768px–1023px
    - Navigation Funnel grid, Stats Bar grid, Footer grid at tablet widths
    - Navbar full links visible (no hamburger at tablet)
    - _Requirements: 10.1_

  - [ ] 13.3 Desktop pass — verify layout at ≥ 1024px
    - Confirm connected-node Samagra layout renders with SVG lines
    - Confirm Stats Bar single row, Leadership horizontal row
    - _Requirements: 10.1_

- [ ] 14. Accessibility Pass
  - [ ] 14.1 Audit and add ARIA labels to all icon-only interactive elements
    - Hamburger button, social icons, contact icons (email, phone, LinkedIn on leader cards)
    - Each must have a descriptive `aria-label`
    - _Requirements: 10.3_

  - [ ] 14.2 Audit semantic HTML structure
    - Verify `<header>` wraps Navbar, `<main>` wraps page body, `<footer>` wraps Footer
    - Each section uses `<section>` with `aria-labelledby` pointing to its heading
    - Heading hierarchy: single `<h1>` on page, sections use `<h2>`, sub-elements use `<h3>`
    - _Requirements: 10.4_

  - [ ] 14.3 Add descriptive `alt` text to all images and avatar placeholders
    - Campus images, CHRIST logo, and all circular leader avatars
    - Leadership avatar fallback: "Profile photo of [Name]"
    - _Requirements: 10.5_

  - [ ] 14.4 Implement visible focus indicators
    - Add custom `focus-visible:ring-2 focus-visible:ring-gold` Tailwind classes to all interactive elements
    - Verify Tab key navigation order matches visual reading order
    - _Requirements: 10.6_

  - [ ] 14.5 Run contrast audit against WCAG AA requirements
    - Check: cream text on maroon (#7F1D1D) backgrounds — must meet 4.5:1
    - Check: charcoal text on cream (#FFF7ED) backgrounds
    - Check: gold (#D4A017) text on charcoal background in Footer — adjust shade if needed
    - _Requirements: 10.2, 3.7_

- [ ] 15. Performance Optimization
  - [ ] 15.1 Implement lazy loading for below-the-fold images
    - Add `loading="lazy"` to all campus image `<img>` elements
    - Add `loading="lazy"` to all leadership avatar images
    - _Requirements: 11.1_

  - [ ] 15.2 Audit and remove unused dependencies
    - Run `npm ls` and check for unused packages
    - Remove any package not referenced in source
    - _Requirements: 11.2_

  - [ ] 15.3 Verify code splitting and tree shaking in Vite build
    - Run `npm run build` and inspect `dist/assets/` chunk sizes
    - Verify Framer Motion and Lucide are not included if unused
    - Configure Vite `build.rollupOptions` with manual chunks if bundle is oversized
    - _Requirements: 11.3_

  - [ ] 15.4 Run Lighthouse audit on production build
    - Serve `dist/` locally with `npx serve dist`
    - Run Lighthouse in Chrome DevTools against the local server
    - Verify Performance score ≥ 80 on desktop
    - Fix any flagged issues (image sizing, render-blocking resources, unused JS)
    - _Requirements: 11.4_

- [ ] 16. Final Checkpoint — Production Ready
  - Run `npm run build` and verify zero build errors.
  - Confirm `dist/` folder is fully self-contained (all assets inlined or referenced correctly).
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Tasks follow strict dependency order — do not begin Phase 4+ tasks before Phase 3 (Design System) is complete
- The Navigation Funnel (Task 6) is the highest-priority section — build it before any other section
- Data files in `/data/` should be populated before building their consumer components
- All animation variants live in `src/lib/animations.ts` — do not define inline variants in section components
- Checkpoint tasks (11, 16) validate integration at natural phase boundaries
- The `reducedMotion` guard in Task 12.2 must be applied globally, not per-component

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3", "1.4"] },
    { "id": 1, "tasks": ["1.5", "2.1"] },
    { "id": 2, "tasks": ["2.2", "2.3"] },
    { "id": 3, "tasks": ["3.1", "3.2", "3.3", "3.4"] },
    { "id": 4, "tasks": ["3.5", "3.6"] },
    { "id": 5, "tasks": ["4.1", "4.2", "4.3", "4.4"] },
    { "id": 6, "tasks": ["4.5"] },
    { "id": 7, "tasks": ["5.1"] },
    { "id": 8, "tasks": ["5.2", "5.3"] },
    { "id": 9, "tasks": ["6.1"] },
    { "id": 10, "tasks": ["6.2", "6.3", "6.4"] },
    { "id": 11, "tasks": ["6.5"] },
    { "id": 12, "tasks": ["6.6", "7.1", "8.1", "9.1", "10.1"] },
    { "id": 13, "tasks": ["7.2", "7.3", "8.2", "9.2", "9.3", "10.2"] },
    { "id": 14, "tasks": ["7.4", "8.3", "9.4", "10.3"] },
    { "id": 15, "tasks": ["7.5", "8.4", "9.5", "10.4"] },
    { "id": 16, "tasks": ["9.6", "9.7", "10.5"] },
    { "id": 17, "tasks": ["12.1", "12.2", "12.3", "12.4"] },
    { "id": 18, "tasks": ["13.1", "13.2", "13.3"] },
    { "id": 19, "tasks": ["14.1", "14.2", "14.3", "14.4", "14.5"] },
    { "id": 20, "tasks": ["15.1", "15.2", "15.3"] },
    { "id": 21, "tasks": ["15.4"] }
  ]
}
```
