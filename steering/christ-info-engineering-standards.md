# CHRIST INFO — Engineering Standards & Development Constraints

These standards apply to all implementation work on the CHRIST INFO CS Department website.
Every component, section, and utility must conform to these rules.

---

## 1. Component Conventions

Every reusable component MUST:

- Be fully typed with TypeScript (no `any`, no implicit types)
- Accept a `className?: string` prop and merge it using `cn()` from `src/lib/utils.ts`
- Use `cn()` for all conditional class logic — never string concatenation
- Avoid inline `style={{}}` props — use Tailwind utilities exclusively
- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`–`<h6>`, `<button>`, `<a>`)
- Support responsive layouts via Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`)
- Support reduced-motion accessibility via `getMotionVariants()` from `src/lib/animations.ts`

All components MUST:

- Remain visually minimal — no decorative excess
- Avoid excessive props (max 8–10 props per component; compose instead of bloating)
- Avoid deeply nested JSX structures (max 4–5 levels; extract sub-components when deeper)
- Export a named export AND a default export
- Include a JSDoc comment describing the component's purpose

---

## 2. Component Preview Playground

A dev-only playground page MUST exist at the route `/playground` (or rendered conditionally in dev mode).

**Purpose:** Visually validate all UI primitives in isolation before section implementation begins.

**Must include:**
- Button variants (primary, ghost, sizes)
- Card variants (base, interactive, maroon)
- Typography scale (all fontSize tokens: display → eyebrow)
- SectionWrapper behavior
- Motion examples (fadeInUp, staggerContainer, cardHoverLift)
- IconWrapper variants
- Hover states
- Responsive layout preview

**Rules:**
- Only rendered when `import.meta.env.DEV === true`
- Not shipped in production build
- Lives at `src/pages/Playground.tsx` or `src/components/dev/Playground.tsx`

---

## 3. Button System Rules

Buttons MUST:

- Use thin warm-gold outlines for `ghost` variant
- Use minimal fill — no heavy backgrounds on secondary actions
- Apply elegant hover transitions (0.25s ease-editorial)
- Use subtle gold glow (`shadow-gold-glow`) on focus/hover — NOT neon glow
- Use the `buttonHover` and `buttonTap` variants from `src/lib/animations.ts`

Buttons MUST NOT:

- Use oversized pill shapes (max border-radius: `rounded-card` = 12px)
- Use bulky padding (keep compact: `py-2 px-5` for default, `py-1.5 px-4` for small)
- Mimic startup SaaS CTA buttons (large, gradient-fill, bold font)

**Default button feel:** compact, editorial, academic — restrained authority.

---

## 4. Card System Rules

Cards MUST:

- Use the `card-base` or `card-interactive` CSS class from `src/index.css`, OR the `Card` component
- Use `rounded-card` (12px) for standard cards, `rounded-card-lg` (16px) for large feature cards
- Use maroon-tinted shadows: `shadow-card` at rest, `shadow-card-hover` on hover
- Use `shadow-card-md` for cards with more visual weight (Navigation Funnel cards)
- Maintain editorial internal padding: `p-card-p` (28px) desktop, `p-card-p-sm` (20px) compact

Cards MUST NOT:

- Use inflated padding that makes them feel empty
- Use oversized `rounded-3xl` or `rounded-full` shapes
- Use generic grey box shadows (`shadow-md`, `shadow-lg` from Tailwind defaults)
- Add gradient backgrounds unless explicitly specified per section

---

## 5. Motion System Rules

All animation variants MUST be imported from `src/lib/animations.ts`.

**Available variants (use these, do not redefine):**
- `fadeInUp` — primary entrance for cards, headings, sections
- `fadeIn` — full-width elements
- `fadeInLeft` — horizontal rows (leadership strip)
- `scaleIn` — circular avatars, icon containers
- `staggerContainer` — parent wrapper for sequential child animations
- `staggerContainerFast` — dense grids (stats bar)
- `lineDrawIn` — SVG connector paths (Samagra ecosystem)
- `cardHoverLift` — `whileHover` for interactive cards
- `buttonHover` / `buttonTap` — button interaction feedback

**Rules:**
- Always use `getMotionVariants(variant)` to wrap variants — respects `prefers-reduced-motion`
- Always pair `whileInView` with `viewport={viewportOnce}` or `viewport={viewportLazy}`
- All transitions: duration 0.3s–0.6s, easing `[0.25, 0.46, 0.45, 0.94]` (editorial curve)
- Stagger children: 0.12s standard, 0.07s for dense grids

**Animation tone:** calm, cinematic, premium, subtle. Not bouncy, not snappy, not flashy.

---

## 6. Typography Hierarchy Rules

**Playfair Display (font-serif):** headings ONLY
- `<h1>` — page-level display headings
- `<h2>` — section headings
- `<h3>` — card headings, sub-section titles
- `<h4>` — component headings

**Inter (font-sans):** everything else
- Navigation links
- Labels and eyebrow text
- Body copy and descriptions
- Metadata, captions, tags

**Font size tokens to use (from tailwind.config.js):**
- Display: `text-display-lg`, `text-display`, `text-display-sm`
- Heading: `text-heading-lg`, `text-heading`, `text-heading-sm`
- Body: `text-body-lg`, `text-body`, `text-body-sm`
- Label: `text-label-lg`, `text-label`, `text-label-sm`
- Eyebrow: `text-eyebrow`

**NEVER use:** `text-4xl`, `text-5xl`, `text-6xl` raw Tailwind scale on headings — use the named tokens.

**Typography feel:** premium academic editorial — measured, readable, authoritative.

---

## 7. Spacing Rules

Whitespace is a primary design element — treat it as such.

**Section spacing:** always use `section-spacing` class or `py-section-y-sm lg:py-section-y`
**Section horizontal padding:** always use `section-container` class or `px-section-x-sm md:px-section-x-md lg:px-section-x`
**Card internal padding:** `p-card-p` (28px) desktop, `p-card-p-sm` (20px) compact/mobile
**Grid gaps:** `gap-card-gap` (24px) between card grid items

**Rules:**
- Never compress section spacing to save vertical space
- Never remove breathing room between headings and their content
- Maintain consistent vertical rhythm across all sections
- Separate sections with enough space that each feels distinct and breathable

---

## 8. Section Implementation Order

When Phase 5 begins, sections MUST be implemented in this exact sequence:

1. **Navbar** — sticky, maroon, brand + nav links + mobile hamburger
2. **Navigation Funnel** ← HIGHEST PRIORITY — defines the entire site identity
3. **Leadership Strip** — horizontal scrollable row
4. **Stats Bar** — full-width metrics strip
5. **Samagra Club Ecosystem** — connected-node layout
6. **Footer** — 4-column layout

**Navigation Funnel rules:**
- Receives the highest visual polish of any section
- Must match the reference design exactly (2-over-1 grid, campus imagery, CS icon strip)
- Must be built before any other section
- No placeholder cards — real layout from day one

---

## 9. Image Placeholder Strategy

Until real images are provided, use elegant editorial placeholders:

**Campus images (Navigation Funnel top cards):**
- `bg-maroon/10` tinted rectangular blocks with a centered thin maroon border icon
- Dimensions match the final image container exactly
- Include `alt` text describing the intended image

**Leadership avatars (circular):**
- Circular `bg-cream-border` containers (80px diameter)
- Initials rendered in `text-maroon font-serif` at center
- Format: first initial + last initial (e.g. "TM" for Thomas C Mathew)

**Logo placeholder:**
- Simple text "CHRIST" in `font-serif text-cream` on maroon background

**All placeholders MUST:**
- Match final dimensions exactly (no layout shift when real images load)
- Include `aria-hidden="true"` if decorative, or proper `alt` text if meaningful
- Use `aspect-ratio` or fixed dimensions to prevent CLS

---

## 10. Development Philosophy

The site MUST feel like: **"A premium academic microsite."**

**The visual tone:** institutional, elegant, calm, modern, editorial.

**It is NOT:**
- A startup dashboard
- An admin panel
- A flashy landing page
- A generic portfolio template
- A SaaS product marketing page

**Every design decision must ask:**
> "Does this feel like it belongs on CHRIST University's official digital presence?"

If the answer is no — simplify, reduce, restrain.

**The maroon-cream-gold palette is sacred.** Do not introduce new colors without explicit approval.
**Framer Motion is for elevation, not entertainment.** Animations must serve clarity, not distract from content.
**Typography sets the institutional tone.** When in doubt, reduce the font size and increase the spacing.

---

## 11. Section Width System

Only three layout widths are permitted. Do NOT use arbitrary `max-w-*` values outside this system.

| Width token | Tailwind class | Max-width | Used for |
|-------------|---------------|-----------|----------|
| `narrow` | `max-w-3xl` | 48rem | Editorial reading sections, long-form text |
| `standard` | `max-w-5xl` | 64rem | Default content — headings, leadership, stats |
| `wide` | `max-w-7xl` | 80rem | Navigation Funnel, Samagra Ecosystem, Footer |

The `section-container` utility class uses `wide` by default. Pass `width="standard"` or `width="narrow"` to `SectionWrapper` to override.

---

## 12. Grid Discipline

Each section has exactly one permitted grid layout. Do NOT deviate.

| Section | Layout | Rule |
|---------|--------|------|
| Navigation Funnel | 2-over-1 CSS Grid | Strict — no other grid variant |
| Leadership Strip | Single horizontal flex row | No columns, no wrapping grid |
| Stats Bar | Single-row flex (desktop) / 2–4 col grid (mobile) | Thin metric strip only |
| Samagra Ecosystem | Central card + radial nodes + SVG lines | Connected ecosystem only |
| Footer | 5-column grid (1 brand + 4 link columns) | No sidebar, no full-width single col |

**Forbidden:** random multi-column card grids, asymmetric layouts not specified above, dashboard widget stacking.

---

## 13. Card Density Rules

Maximum 3 visual hierarchy levels per section:
1. Section heading + eyebrow
2. Primary cards or feature items
3. Sub-labels, metadata, icons within cards

**Forbidden:**
- Overcrowded information (more than 5 data points per card)
- Nested cards inside cards
- Dashboard widget stacking (multiple card types in the same visual band)
- Showing more than 6 items in a single card grid without pagination or scroll

---

## 14. Visual Rhythm — Section Background Alternation

Sections MUST alternate backgrounds to prevent visual fatigue:

| Section | Background |
|---------|------------|
| Navbar | `bg-maroon` |
| Navigation Funnel | `bg-cream` |
| Leadership Strip | `bg-cream` |
| Stats Bar | `bg-cream-muted` (subtle tint) |
| Samagra Ecosystem | `bg-cream` or subtle `bg-maroon/5` tint |
| Footer | `bg-charcoal` gradient |

Never stack two visually identical section backgrounds without a separator or spacing break.

---

## 15. Gold Accent Usage Rules

Gold (`#D4A017`) is a **micro-accent** color — used sparingly to elevate key details.

**Gold MAY be used for:**
- Thin decorative separators / `gold-rule` lines
- Hover outlines on ghost buttons (`border-gold`)
- Stat value highlights in the Stats Bar
- SVG connector lines in Samagra (subtle opacity)
- Focus rings (`ring-gold`)
- Column headings in the Footer
- The word "INFO" in the Navbar brand

**Gold MUST NOT be used for:**
- Large filled surfaces or backgrounds
- Gold-filled buttons (primary buttons use maroon)
- Dominant text color in body copy
- Over-accenting (more than 2–3 gold elements visible at once in a viewport)

---

## 16. Iconography Rules

**Use only thin-line icons from `lucide-react`.**

- Default stroke width: 1.5 (Lucide default) — do NOT increase to 2+
- Icon sizes: 16px (label), 20px (default), 24px (feature), 32px (large display)
- Icon color: inherits from text color or explicitly set to `text-maroon`, `text-gold`, or `text-cream`
- Never use multi-color icon systems
- Never use filled/solid icon variants in body content

**Forbidden:** bulky filled icons, colorful icon sets, inconsistent stroke weights.

---

## 17. Image Treatment Rules

All imagery must feel editorial and institutional.

**Requirements:**
- Campus images: soft overlay (`bg-maroon/15` or `bg-charcoal/20`) applied via absolute positioned div over `<img>`
- Portrait images: circular crop, `object-cover`, neutral/academic framing
- Avoid oversaturation — images should feel calm, not vibrant
- Never use neon-lit or overly processed photography
- Maintain consistent `aspect-ratio` on all image containers to prevent layout shift

**Placeholder strategy (until real images are provided):**
- Campus image placeholder: `bg-maroon/10` block with centered `<Building2>` icon (maroon, thin-line)
- Avatar placeholder: `bg-cream-border` circle, initials in `font-serif text-maroon`
- Dimensions must match final image exactly

---

## 18. Motion Hierarchy Rules

**Only key sections receive animated reveals.** Not every element needs motion.

**Sections that receive staggered reveals:**
- Navigation Funnel (staggered card entrance — highest priority)
- Samagra Ecosystem (connector line draw-in after cards appear)
- Leadership Strip (left-to-right card stagger)
- Stats Bar (fast stagger on metrics)

**Sections that receive simple fade-in only:**
- Navbar (no entrance animation — always visible)
- Footer (single `fadeIn` on scroll)

**Forbidden motion:**
- Animating every text element independently
- Simultaneous animation of all page text
- Floating/bobbing idle animations
- Parallax effects
- Any animation with duration > 0.6s (except `lineDrawIn` path animations)

---

## 19. Visual Priority Order

The page must communicate a clear visual hierarchy. Sections are weighted in this order:

1. **Navigation Funnel** — strongest visual anchor, most polished
2. **Samagra Ecosystem** — second most visually complex, connected-node layout
3. **Leadership Strip** — authoritative, portrait-led
4. **Stats Bar** — compact, metrics-focused, gold accents
5. **Footer** — dark, informational anchor

The Navigation Funnel must never be visually outweighed by any other section. If any other section appears more prominent, simplify that section.

---

## 20. Playground QA Requirements

The Playground page must validate ALL of the following before Phase 5 begins:

| Test category | What to verify |
|---------------|----------------|
| Spacing rhythm | Section containers, card padding, gap consistency |
| Typography hierarchy | All scale tokens from `display-lg` → `eyebrow` rendered side-by-side |
| Hover consistency | All interactive elements show correct lift + shadow |
| Animation timing | fadeInUp, stagger, lineDrawIn — verify 0.3–0.6s feel |
| Responsive behavior | Test at 375px, 768px, 1280px |
| Focus states | Tab through all interactive elements — gold ring visible |
| Reduced motion mode | Toggle OS reduced motion — verify all animations disabled |
| Color palette swatch | All tokens rendered visually |
| Shadow scale | All shadow tokens rendered on white/cream background |

The Playground is the **visual QA gate** — Phase 5 section implementation MUST NOT begin until the Playground confirms all primitives are correct.
