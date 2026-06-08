# CHRIST INFO

An academic microsite for the **Department of Computer Science** at **CHRIST (Deemed to be University)**, Yeshwantpur Campus, Bangalore — built as a premium, editorial-style information portal for students, faculty, and visitors.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Routing | React Router 6 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Styling | Tailwind CSS 3.4 |
| Class utils | clsx + tailwind-merge |
| Smooth scroll | Lenis |

---

## Project Structure

```
christ-info/
├── index.html                    # Entry HTML (Google Fonts: DM Sans + Playfair Display)
├── tailwind.config.js            # Custom design tokens (colors, fonts, shadows, spacing)
├── vite.config.ts                # Vite config with React plugin
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies & scripts
└── src/
    ├── main.tsx                  # React root mount
    ├── App.tsx                   # Router layout (Navbar → AnimatePresence → Routes → Footer)
    ├── index.css                 # Global styles (overflow-x-hidden, box-sizing, fonts)
    ├── assets/
    │   └── images/               # Static images (logos, wing icons, Chavara portrait)
    ├── data/                     # Static content & configuration
    │   ├── navigation.ts         # Navbar links + Footer columns
    │   ├── programmes.ts         # 4 programmes (BCA, MDS, MSc AI & CS, PhD)
    │   ├── about.ts              # Vision, mission, founder, history, anthem
    │   ├── faculty-data.json     # 36 faculty + 4 leadership entries
    │   ├── leadership.ts         # Leader type & derived arrays
    │   ├── samagra.ts            # 6 SAMAGRA club wings
    │   └── stats.ts              # 5 accreditation/ranking stats
    ├── lib/                      # Shared utilities
    │   ├── utils.ts              # cn(), scrollToSection(), toKebabCase()
    │   └── animations.ts         # Framer Motion variants (fadeInUp, staggerContainer)
    ├── components/
    │   ├── layout/               # Persistent shell
    │   │   ├── Navbar.tsx        # Fixed top bar, dropdowns, mobile menu
    │   │   └── Footer.tsx        # 4-column footer, social icons, credits
    │   ├── sections/             # Page-level content blocks
    │   │   ├── NavigationFunnel.tsx    # Hero: 3 quick-link cards
    │   │   ├── UniversityExcellence.tsx # Accreditations & rankings grid
    │   │   ├── StatsBar.tsx           # Horizontal stats strip
    │   │   ├── LeadershipStrip.tsx     # 4 leadership portrait cards
    │   │   ├── FacultyPreview.tsx      # Up to 8 faculty cards (homepage)
    │   │   ├── RulesSection.tsx        # 6 rule cards
    │   │   ├── AboutPanel.tsx          # Modal: Vision, Founder, History, Anthem
    │   │   ├── ProgrammePanel.tsx      # Modal: programme sections
    │   │   └── SamagraEcosystem.tsx    # SAMAGRA wing grid cards
    │   ├── ui/                   # Reusable primitives
    │   │   ├── Button.tsx, Card.tsx, GlassCard.tsx, SectionWrapper.tsx
    │   │   ├── Container.tsx, AnimatedCard.tsx, AnimatedReveal.tsx
    │   │   └── IconWrapper.tsx, IconLabelPair.tsx
    │   └── ScrollToTop.tsx       # Route-change scroll reset
    └── pages/                    # Route-level page components
        ├── HomePage.tsx          # / — landing page
        ├── ProgrammesPage.tsx    # /programmes — programme card grid
        ├── ProgrammeDetailPage.tsx  # /programmes/:id — detail view
        ├── AboutUniversityPage.tsx  # /about-university — tabbed info
        ├── FacultyPage.tsx       # /faculty — searchable faculty directory
        ├── SamagraPage.tsx       # /samagra — SAMAGRA club showcase
        └── Playground.tsx        # /playground (dev only) — component catalog
```

---

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | `HomePage` | Funnel → Excellence → Leadership → Faculty Preview → Rules |
| `/programmes` | `ProgrammesPage` | 4 programme cards (BCA, MDS, MSc AI & CS, PhD) |
| `/programmes/:id` | `ProgrammeDetailPage` | Sections detail for BCA/MDS/MSc; research page for PhD |
| `/about-university` | `AboutUniversityPage` | Tabbed: Vision, Founder, History, Anthem, Rules |
| `/faculty` | `FacultyPage` | Search + filter faculty directory with leadership section |
| `/samagra` | `SamagraPage` | 7-wing SAMAGRA club grid with logo & hover descriptions |
| `*` | 404 page | "Back to Home" fallback |

---

## Design System

### Colors

```
Maroon  #7F1D1D   (primary brand — navbar, headings, buttons)
Cream   #FFF7ED   (page background, white cards)
Gold    #D4A017   (accents, CTAs, underlines)
Charcoal #1E293B  (body text, footer)
```

### Typography

| Style | Font | Used For |
|---|---|---|
| Display (2.25–3.5rem) | Playfair Display | Page titles, hero headings |
| Heading (1.25–1.875rem) | Playfair Display | Section titles, card titles |
| Body (0.875–1.125rem) | DM Sans | Paragraphs, descriptions |
| Label (0.75–0.875rem) | DM Sans | Navigation, metadata, buttons |
| Eyebrow (0.6875rem) | DM Sans | Section category labels |

### Key Conventions

- **Cards**: White (`bg-white`), cream border (`border-cream-border`), 12px radius (`rounded-card`), maroon-tinted shadow (`shadow-card`)
- **Hover**: `-translate-y-1`, `border-gold/30`, `shadow-card-hover` — smooth 350ms ease
- **CTAs**: Gold pill button (`bg-gold/10 rounded-pill text-gold`), arrow slides right on hover
- **Accent bar**: Gold-to-maroon gradient `h-2` strip at top of cards
- **Motion**: Page transitions `fade + slide 12px` (400ms), staggered card reveals (80ms delay per card)

---

## Data Flow

All static content lives in `src/data/` as typed TypeScript modules or JSON:

- **Programmes**: `programmes.ts` — 4 objects with sections, durations, descriptions, and external CHRIST course URLs
- **Faculty**: `faculty-data.json` — 40 entries consumed by `leadership.ts` which deduplicates HOD across leadership and faculty grids
- **Navigation**: `navigation.ts` — drives both Navbar dropdowns and Footer columns from a single source of truth
- **About**: `about.ts` — vision/mission text, founder quote, history milestones, anthem video/lyrics
- **SAMAGRA**: `samagra.ts` — 6 wing definitions with emoji icons

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (port 8000)
npm run dev

# TypeScript check
npx tsc --noEmit

# Production build
npm run build

# Preview built site
npm run preview
```

---

## Customization Guide

### Adding a Programme

1. Add an entry to `src/data/programmes.ts` (implementing `Programme` interface)
2. Add a route in `navigation.ts` children if it needs a dropdown entry
3. Add an external URL in footer columns if needed

### Adding a Faculty Member

1. Add an entry to `src/data/faculty-data.json` with all required fields
2. Image should be hosted on CHRIST server or placed in `public/images/faculty/`

### Adding a SAMAGRA Wing

1. Add a wing image to `src/assets/images/`
2. Add the wing definition to `src/data/samagra.ts`
3. Add image mapping + description in `src/pages/SamagraPage.tsx`

### Modifying the Navbar

Edit `src/data/navigation.ts` — the Navbar component reads `navLinks` and renders dropdowns automatically. Each link supports `children` for nested menus.

---

## Credits

Built by **[Eugene Elias](https://www.linkedin.com/in/eugene-elias)**, Student of Computer Science, CHRIST University.

---
