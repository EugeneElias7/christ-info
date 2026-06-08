# Design Document: CHRIST INFO – CS Department Website

## Overview

CHRIST INFO is a premium, single-page academic microsite for the Department of Computer Science, CHRIST (Deemed to be University), Yeshwantpur Campus. The design system is built on editorial restraint, institutional authority, and cinematic motion — not startup energy or dashboard aesthetics.

**Stack:** React (Vite) + TypeScript + Tailwind CSS + Framer Motion + Lenis (smooth scroll)
**Architecture:** Static SPA, no backend, scroll-based navigation

---

## Architecture

### System Architecture

```
Browser (Static SPA)
│
├── index.html          ← Google Fonts, meta, root div
├── src/main.tsx        ← React root, Lenis smooth scroll init
├── src/App.tsx         ← Page shell: Navbar + sections + Footer
│
├── src/components/
│   ├── ui/             ← Reusable primitives (Button, Card, SectionWrapper, etc.)
│   ├── sections/       ← Page sections (NavigationFunnel, LeadershipStrip, etc.)
│   └── layout/         ← Navbar, Footer
│
├── src/data/           ← Static typed arrays (no API calls)
├── src/lib/            ← Shared utilities (animations.ts, utils.ts)
└── src/assets/         ← Images, icons
```

### Data Flow

All data is static — no API calls, no state management library, no routing beyond the single root page.

```
src/data/*.ts  →  Section components  →  Rendered HTML
     ↑
Typed arrays populated at build time
```

### Scroll Navigation

Lenis (smooth scroll library) is initialised once in `src/main.tsx`. All navbar links call `scrollToSection(id)` from `src/lib/utils.ts`, which calculates the target offset accounting for the 64px fixed navbar.

### Build & Deployment

`npm run build` → Vite produces a fully static `dist/` folder. No SSR, no edge functions, no environment variables. Compatible with any static host (Netlify, Vercel, GitHub Pages).

---

## Components and Interfaces

### Button

```tsx
interface ButtonProps {
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  disabled?: boolean;
}
```

### Card

```tsx
interface CardProps {
  variant?: 'base' | 'interactive' | 'maroon';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}
```

### SectionWrapper

```tsx
interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  width?: 'narrow' | 'standard' | 'wide';
  animate?: boolean;
}
```

### IconWrapper

```tsx
interface IconWrapperProps {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  ariaLabel?: string;   // required for interactive; omit for decorative
  onClick?: () => void;
}
```

### AnimatedCard

```tsx
interface AnimatedCardProps extends CardProps {
  delay?: number;       // stagger offset in seconds
  viewport?: 'once' | 'lazy';
}
```

---

## Data Models

### Leader

```ts
interface Leader {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  imagePlaceholder: string;   // initials e.g. "TM"
}
```

### Stat

```ts
interface Stat {
  id: string;
  value: string;    // e.g. "A+", "60", "681–700"
  label: string;    // e.g. "NAAC Grade", "NIRF Ranking"
  icon: string;     // lucide icon name
}
```

### Wing (Samagra)

```ts
interface Wing {
  id: string;
  name: string;     // e.g. "Vizerion"
  domain: string;   // e.g. "AI/ML & Data Science"
  tagline: string;
  icon: string;     // lucide icon name
}
```

### NavLink

```ts
interface NavLink {
  label: string;
  href: string;     // anchor id e.g. "#faculty"
}
```

### FooterColumn

```ts
interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
```

---

## Correctness Properties

### Property 1: Navigation Funnel Layout Integrity

The Navigation Funnel MUST render as a strict 2-over-1 grid at all desktop and tablet viewports. The bottom "Department of Computer Science" card MUST span both columns (`col-span-2`). At mobile (<768px), all three cards MUST stack in a single column.

**Validates: Requirements 4.2, 4.5, 10.1**

### Property 2: Scroll Navigation Accuracy

Clicking any navbar link MUST smoothly scroll to the correct target section. The scroll position MUST account for the 64px fixed navbar offset so section headings are not obscured.

**Validates: Requirements 3.4**

### Property 3: Animation Reduced-Motion Compliance

All `whileInView` animations MUST trigger only once per page load (`once: true`). When the OS `prefers-reduced-motion: reduce` setting is active, ALL Framer Motion animations MUST be disabled or reduced to instant transitions (duration: 0).

**Validates: Requirements 9.2, 9.5**

### Property 4: WCAG AA Contrast Compliance

All text on maroon (`#7F1D1D`) backgrounds MUST meet WCAG 2.1 AA contrast ratio (≥ 4.5:1 for normal text). All body text on cream (`#FFF7ED`) backgrounds MUST meet WCAG AA. Gold (`#D4A017`) used as text on charcoal MUST meet AA.

**Validates: Requirements 3.7, 10.2**

### Property 5: Static Build Completeness

`npm run build` MUST exit with code 0 and produce a fully self-contained `dist/` folder. No server-side dependencies, API routes, or environment variables are permitted. All assets MUST be resolvable relative to the document root.

**Validates: Requirements 1.4, 1.5, 11.3**

### Property 6: Responsive Layout Completeness

Every section MUST render without horizontal overflow, text truncation, or layout breakage at three explicit viewport widths: 375px (mobile), 768px (tablet), and 1280px (desktop).

**Validates: Requirements 10.1**

### Property 7: Performance Budget

The production Lighthouse Performance score MUST be ≥ 80 on desktop. All below-fold images MUST use `loading="lazy"`. The gzipped JavaScript bundle MUST remain under 250KB.

**Validates: Requirements 11.1, 11.4**

---

## Error Handling

Since this is a static frontend with no API calls, error handling is limited to:

- **Missing images** — All `<img>` elements use explicit `width` + `height` + `alt`. Broken images fall back to the styled placeholder (initials or icon block) via CSS `color` on the container.
- **Font loading failure** — Google Fonts uses `display=swap`. If fonts fail to load, the fallback stack (Georgia → serif, system-ui → sans-serif) maintains readability.
- **Scroll target not found** — `scrollToSection()` in `utils.ts` silently no-ops if the target element doesn't exist (no console errors in production).
- **Reduced motion detection failure** — `isReducedMotion()` is SSR-safe and returns `false` if `window` is unavailable, defaulting to animations enabled.
- **Build errors** — TypeScript strict mode (`"strict": true`) and ESLint catch type and lint errors at build time. `npm run build` must exit 0 before deployment.

---

## Testing Strategy

### Visual QA via Playground (`/playground`)

The dev-only Playground page is the primary testing surface. Before Phase 5 begins, it MUST confirm:
- All Button variants render correctly at all sizes
- All Card variants render with correct shadow, radius, and hover behavior
- Full typography scale is visually correct
- All animation variants play correctly (timing, easing, stagger)
- Reduced motion mode disables all animations

### Responsive Testing

Test at three explicit breakpoints using browser DevTools:
- **375px** (iPhone SE) — mobile layout
- **768px** (iPad) — tablet layout
- **1280px** (desktop) — full layout

### Accessibility Testing

- Keyboard navigation: Tab through entire page, verify focus ring visibility on every interactive element
- Screen reader: Verify `aria-label`, `aria-labelledby`, heading hierarchy with browser accessibility tree

### Performance Testing

- Run `npm run build` then `npx serve dist`
- Run Lighthouse in Chrome DevTools (desktop preset)
- Verify Performance ≥ 80, no render-blocking resources

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `maroon.DEFAULT` | `#7F1D1D` | Navbar, primary headings, structural accents, maroon cards |
| `maroon.dark` | `#5C1313` | Hover states, deep maroon areas |
| `maroon.light` | `#9B2226` | Subtle tints |
| `cream.DEFAULT` | `#FFF7ED` | Page background (dominant), card backgrounds |
| `cream.muted` | `#FDF0E0` | Alternate section backgrounds |
| `cream.border` | `#E8D5B7` | Card borders, avatar backgrounds |
| `gold.DEFAULT` | `#D4A017` | Stat values, decorative accents, button outlines |
| `gold.light` | `#E8B84B` | Hover highlights |
| `charcoal.DEFAULT` | `#1E293B` | Body text, footer background |
| `charcoal.dark` | `#0F172A` | Footer gradient end, deep surfaces |

**Palette rules:**
- Cream dominates the page (background)
- Maroon is structural (navbar, headings, key CTAs)
- Gold is sparingly applied (stats, decorative lines, button accents)
- Charcoal anchors the footer

### Typography

| Role | Font | Token |
|------|------|-------|
| Section headings, card titles | Playfair Display (serif) | `font-serif` |
| Body, navigation, labels, metadata | Inter (sans-serif) | `font-sans` |

**Scale tokens:**
- `text-display-lg` (3.5rem) — large section hero headings
- `text-display` (2.75rem) — primary section headings
- `text-display-sm` (2.25rem) — sub-section headings
- `text-heading-lg` (1.875rem) — card feature headings
- `text-heading` (1.5rem) — standard section headings
- `text-heading-sm` (1.25rem) — component headings
- `text-body-lg` (1.125rem) — lead body copy
- `text-body` (1rem) — standard body
- `text-body-sm` (0.875rem) — captions, labels
- `text-label-lg/label/label-sm` — UI labels, nav, tags
- `text-eyebrow` (0.6875rem, 0.15em spacing) — "Welcome Christite" style labels

### Spacing

- `section-container` class — `max-w-7xl mx-auto` with responsive horizontal padding
- `section-spacing` class — `py-section-y-sm lg:py-section-y`
- Card padding: `p-card-p` (28px) / `p-card-p-sm` (20px)
- Card gaps: `gap-card-gap` (24px)

### Shadow System (maroon-tinted)

- `shadow-card` — resting state (very subtle)
- `shadow-card-md` — medium weight cards
- `shadow-card-hover` — hover state (elevated)
- `shadow-card-lg` — large feature cards
- `shadow-gold-glow` — focus rings, gold accents
- `shadow-nav` — navbar drop shadow

### Border Radius

- `rounded-card` (12px) — standard cards
- `rounded-card-lg` (16px) — large feature cards
- `rounded-full` — avatar circles only
- `rounded-pill` — tag/badge only

---

## Component Architecture

### File Structure

```
src/
├── components/
│   ├── ui/                    # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── IconWrapper.tsx
│   │   ├── AnimatedCard.tsx
│   │   └── index.ts
│   ├── sections/              # Page sections
│   │   ├── NavigationFunnel.tsx
│   │   ├── LeadershipStrip.tsx
│   │   ├── StatsBar.tsx
│   │   ├── SamagraEcosystem.tsx
│   │   └── index.ts
│   └── layout/                # Page-level layout
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── index.ts
├── data/                      # Static typed data
│   ├── leadership.ts
│   ├── stats.ts
│   ├── samagra.ts
│   └── navigation.ts
├── lib/                       # Shared utilities
│   ├── animations.ts          # All Framer Motion variants
│   └── utils.ts               # cn(), scrollToSection(), etc.
├── assets/images/             # Static assets
├── pages/
│   └── Playground.tsx         # Dev-only component preview (DEV only)
├── App.tsx
├── main.tsx
└── index.css                  # Tailwind + global CSS reset
```

### Component Interface Standards

All UI primitives follow this interface pattern:

```tsx
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;           // always accepted, merged via cn()
  // ...component-specific props (max 8–10 total)
}
```

---

## UI Primitive Specifications

### Button

**Variants:**
- `primary` — maroon fill (`bg-maroon`), cream text, gold ring on hover/focus
- `ghost` — transparent, maroon or gold thin border, maroon text, gold glow on hover

**Sizes:**
- `sm` — `py-1.5 px-4 text-label`
- `default` — `py-2 px-5 text-label-lg`
- `lg` — `py-2.5 px-6 text-body-sm`

**Motion:** `whileHover={buttonHover}` / `whileTap={buttonTap}` from `animations.ts`
**Shape:** `rounded-card` (12px) — NOT pill-shaped
**Transition:** 0.25s ease-editorial

### Card

**Variants:**
- `base` — `card-base` class (cream/60 bg, border, shadow-card, backdrop-blur)
- `interactive` — `card-interactive` class (adds hover lift + shadow upgrade)
- `maroon` — `card-maroon` class (inverted: maroon bg, cream text)

**Motion wrapper:** `AnimatedCard` component handles `whileInView` + `fadeInUp` with delay prop.
**Hover:** `whileHover={cardHoverLift}` — `y: -4px`, shadow upgrade, 0.25s

### SectionWrapper

- Wraps each page section
- Provides: semantic `<section>` with `id` prop, `section-container` + `section-spacing` classes
- Animates in with `fadeInUp` + `whileInView={viewportOnce}` when section enters viewport
- Props: `id`, `className`, `children`, `ariaLabel`

### IconWrapper

- Renders a `lucide-react` icon in a styled circular container
- Decorative: `aria-hidden="true"` (no label needed)
- Interactive: requires `ariaLabel` prop → rendered as accessible button
- Sizes: `sm` (20px), `default` (24px), `lg` (32px)

### AnimatedCard

- Wraps `Card` with Framer Motion `whileInView` entrance
- Uses `fadeInUp` variant from `animations.ts`
- Accepts `delay` prop (number in seconds) for stagger offset
- Automatically passes through all Card props

---

## Section Specifications

### Navbar
- Fixed top, z-nav (50), full-width
- Background: `bg-maroon` with `shadow-nav`
- Height: `h-nav-h` (64px)
- Left: "CHRIST INFO" — `font-serif text-cream`, "INFO" accented in `text-gold`
- Right: nav links in `text-label-lg font-sans text-cream/90`, underline on hover/active
- Mobile (<768px): hamburger toggle, `AnimatePresence` slide-down panel

### Navigation Funnel ← Core Identity
- First content section after navbar
- **Layout:** 2-over-1 CSS Grid
  - Row 1: two equal cards — "Explore CHRIST University" (left) + "Explore Yeshwantpur Campus" (right)
  - Row 2: one full-width card — "Department of Computer Science"
- Top cards: tall (min-h ~300px), campus image placeholder + serif heading + ghost button
- Bottom card: horizontal layout — left side (heading + tagline + description), right side (6 icon pairs in flex row)
- Bottom card icons: Academics, Labs, Research, Student Achievements, Events, Placements
- All three cards: `AnimatedCard` with stagger 0/0.12/0.24s
- Hover: `cardHoverLift` + maroon gold ring

### Leadership Strip
- Section heading: "Our Leadership" — `text-heading-lg font-serif text-maroon heading-underline`
- Layout: horizontal flex row, `scroll-snap-x` on mobile
- Cards: circular avatar (80px) + name (serif) + title (label, gold underline) + icon row (email/phone/LinkedIn)
- Terminal card: "View All Faculty" — `card-maroon` variant, arrow icon
- Animation: `staggerContainer` + `fadeInLeft` per card

### Stats Bar
- Full-width strip, `bg-cream-muted` with 1px top border (`border-t border-gold/20`)
- 8 metrics in single row (desktop) → `grid-cols-4` (tablet) → `grid-cols-2` (mobile)
- Each stat: icon (gold) above, value in `text-display-sm font-serif text-maroon`, label in `text-label text-charcoal`
- Animation: `staggerContainerFast` + `fadeInUp`

### Samagra Club Ecosystem
- Desktop: central card (left/center) + 6 wing node cards arranged around it with SVG connector lines
- SVG paths: `motion.path` with `lineDrawIn` variant, drawn after cards appear
- Mobile: vertical stacked list, SVG connectors hidden
- Central card: `card-maroon`, "SAMAGRA" heading + tagline + "Explore Samagra" Button (primary)
- Wing nodes: `card-interactive`, wing name (serif bold) + domain tagline (label) + icon
- Animation: central card `fadeInUp`, wings `staggerContainer` + `fadeInUp`

### Footer
- Background: `bg-gradient-to-b from-charcoal to-charcoal-dark`
- 5-column grid: brand panel (logo + social + campus) + 4 link columns
- Column headings: `text-label-lg text-gold`
- Links: `text-body-sm text-cream/70 hover:text-cream`
- Social icons: `<a target="_blank" rel="noopener noreferrer">` with `aria-label`
- Bottom bar: 1px `border-t border-gold/20` separator, copyright + credit line

---

## Motion System

All variants live in `src/lib/animations.ts`. Always use `getMotionVariants(variant)` to auto-disable on `prefers-reduced-motion`.

| Variant | Use case | Duration |
|---------|----------|----------|
| `fadeInUp` | Cards, headings, sections | 0.5s |
| `fadeIn` | Full-width elements | 0.4s |
| `fadeInLeft` | Horizontal rows | 0.5s |
| `scaleIn` | Avatars, icons | 0.4s |
| `staggerContainer` | Card grid parents | 0.12s stagger |
| `staggerContainerFast` | Dense grids | 0.07s stagger |
| `lineDrawIn` | SVG connector paths | 0.6s, 0.3s delay |
| `cardHoverLift` | `whileHover` on cards | 0.25s |
| `buttonHover/Tap` | Button interaction | 0.2s |

Viewport triggers: `viewportOnce` (20% threshold) or `viewportLazy` (10% threshold).

---

## Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|------------|-------|-----------|
| Mobile | < 768px | Single column, hamburger menu, scroll-snap rows, stacked Samagra |
| Tablet | 768px–1023px | 2-column grids, full navbar links |
| Desktop | ≥ 1024px | Full layouts, SVG connectors, horizontal rows |

---

## Accessibility Standards

- WCAG 2.1 Level AA contrast on all text
- `aria-label` on all icon-only interactive elements
- `aria-expanded` + `aria-controls` on hamburger
- `<section aria-labelledby="...">` on all page sections
- Single `<h1>` per page, sections use `<h2>`, cards use `<h3>`
- `loading="lazy"` on all below-fold images
- `alt` text on all images; `aria-hidden="true"` on decorative icons
- Visible `focus-visible` ring: `ring-2 ring-gold ring-offset-2`

---

## Development Playground

A dev-only preview page at `src/pages/Playground.tsx` must be built before Phase 5.

**Purpose:** validate every UI primitive visually before it is used in sections.

**Must preview:**
- All Button variants and sizes
- All Card variants
- Full typography scale (display → eyebrow)
- SectionWrapper in context
- All motion variants (with play/pause)
- IconWrapper variants (decorative vs. interactive)
- Hover states on all interactive elements

**Condition:** only rendered in development (`import.meta.env.DEV`)

---

## Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance (desktop) | ≥ 80 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total JS bundle (gzipped) | < 250KB |
| Below-fold images | lazy loaded |

---

## Deployment

- Static output via `npm run build` → `dist/`
- Compatible with: Netlify, Vercel, GitHub Pages, any static host
- No server-side logic, no API routes, no environment variables required

---

## Visual Composition Rules

### Section Width System

Three layout widths only — no arbitrary `max-w-*` values:

| Width | Class | Max-width | Sections |
|-------|-------|-----------|----------|
| `narrow` | `max-w-3xl` | 48rem | Editorial reading blocks |
| `standard` | `max-w-5xl` | 64rem | Leadership, Stats, general content |
| `wide` | `max-w-7xl` | 80rem | Navigation Funnel, Samagra, Footer |

`SectionWrapper` accepts a `width` prop defaulting to `wide`.

### Grid Discipline

| Section | Grid | Rule |
|---------|------|------|
| Navigation Funnel | `grid-cols-2` + `col-span-2` bottom | Strict 2-over-1 only |
| Leadership Strip | `flex flex-row` | Single horizontal flow, no column wrapping |
| Stats Bar | `flex` row → `grid-cols-4` → `grid-cols-2` | Thin metric strip |
| Samagra Ecosystem | CSS Grid + SVG overlay | Connected ecosystem layout |
| Footer | `grid-cols-5` (1 brand + 4 columns) | Fixed column structure |

### Card Density Rules

- Maximum 3 visual hierarchy levels per section
- Maximum 5 data points per individual card
- No nested cards inside cards
- No dashboard widget stacking

### Visual Rhythm — Section Alternation

| Section | Background |
|---------|------------|
| Navbar | `bg-maroon` |
| Navigation Funnel | `bg-cream` |
| Leadership Strip | `bg-cream` |
| Stats Bar | `bg-cream-muted` |
| Samagra Ecosystem | `bg-cream` / `bg-maroon/5` |
| Footer | `bg-charcoal` → `bg-charcoal-dark` gradient |

### Gold Accent Boundaries

Gold MAY appear on: separators, ghost button borders, stat values, SVG connectors (low opacity), focus rings, Footer column headings, the word "INFO" in the brand.

Gold MUST NOT appear on: large filled surfaces, primary button fills, dominant body copy, more than 2–3 simultaneous elements in a single viewport.

### Iconography

- Library: `lucide-react` only
- Stroke width: 1.5 (default) — do not override
- Sizes: 16px / 20px / 24px / 32px
- Color: inherits text color or explicitly `text-maroon` / `text-gold` / `text-cream`
- Style: thin-line only — no filled icons in content areas

### Image Treatment

- Apply soft overlay on campus images: `absolute inset-0 bg-maroon/15`
- Portraits: `rounded-full object-cover` with fixed dimensions
- All image containers use `aspect-ratio` or explicit dimensions to prevent CLS
- Placeholder: `bg-maroon/10` block + centered thin-line icon (campus) or initials (avatars)

### Motion Hierarchy

**Staggered reveals (full treatment):**
- Navigation Funnel — highest priority
- Samagra Ecosystem — connector line draw-in
- Leadership Strip — left-to-right stagger

**Simple fade-in only:**
- Stats Bar (fast stagger on metrics)
- Footer (single `fadeIn`)

**No entrance animation:**
- Navbar (always visible on load)

**Forbidden:** floating idle animations, parallax, per-word text animations, any duration > 0.6s outside `lineDrawIn`.

### Visual Priority Order

1. Navigation Funnel — strongest visual anchor
2. Samagra Ecosystem — second most complex
3. Leadership Strip — portrait-led, authoritative
4. Stats Bar — compact, gold-accented
5. Footer — dark informational anchor

If any section visually outweighs the Navigation Funnel, simplify that section.

### Playground QA Gate

The Playground page must validate before Phase 5:

| Test | Verify |
|------|--------|
| Spacing rhythm | Section containers, card padding, gaps |
| Typography hierarchy | All tokens `display-lg` → `eyebrow` side-by-side |
| Hover consistency | Correct lift + shadow on all interactive cards |
| Animation timing | 0.3–0.6s range feels calm and cinematic |
| Responsive | 375px / 768px / 1280px breakpoints |
| Focus states | Gold ring visible on all interactive elements via Tab |
| Reduced motion | All animations disabled when OS preference active |
| Color swatches | All tokens visually rendered |
| Shadow scale | All shadow tokens on cream background |
