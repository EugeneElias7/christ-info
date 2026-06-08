# CHRIST INFO

A premium academic microsite for the **Department of Computer Science** at **CHRIST (Deemed to be University)**, Yeshwantpur Campus, Bangalore — built as an editorial-style information portal for programme discovery, faculty exploration, university heritage, and department identity.

---

## Features

- Editorial-inspired academic UI with maroon/cream/gold palette
- Responsive mobile-first layout (1 → 2 → 4 column grids)
- Faculty directory with search, filters, and leadership cards
- Programme detail pages with section info and research content
- About University tabbed experience (Vision, Founder, History, Anthem, Rules)
- SAMAGRA club ecosystem showcase with hover wing descriptions
- Smooth Framer Motion page transitions and staggered card reveals
- React Router 6 SPA navigation with animated routes
- Fully static — deployable to Vercel / Netlify

---

## Tech Stack

| Layer        | Technology                       |
| ------------ | -------------------------------- |
| Framework    | React 18 + TypeScript            |
| Build        | Vite 5                           |
| Routing      | React Router 6                   |
| Styling      | Tailwind CSS 3.4                 |
| Animation    | Framer Motion 11                 |
| Icons        | Lucide React                     |
| Class Utils  | clsx + tailwind-merge            |
| Scroll       | Lenis                            |
| Lint         | ESLint 9                         |

---

## Project Structure

```
christ-info/
├── index.html                          # Entry HTML (DM Sans + Playfair Display via Google Fonts)
├── vite.config.ts                      # Vite + React plugin
├── tailwind.config.js                  # Design tokens: colors, fonts, spacing, shadows
├── postcss.config.js                   # PostCSS with Tailwind + Autoprefixer
├── tsconfig.json / tsconfig.app.json   # TypeScript configuration
├── eslint.config.js                    # ESLint flat config
├── package.json                        # Dependencies & scripts
│
└── src/
    ├── main.tsx                        # React root mount
    ├── App.tsx                         # Router layout (Navbar → AnimRoutes → Footer)
    ├── index.css                       # Global styles, Tailwind directives, overflow fixes
    ├── App.css                         # (reserved)
    ├── vite-env.d.ts                   # Vite ambient types
    │
    ├── assets/
    │   └── images/
    │       ├── christ logo.png         # Navbar — white CHRIST logo
    │       ├── department-Logo.png     # Footer — CS department logo
    │       ├── Chavra-Img.png          # About page — St. Kuriakose Elias Chavara
    │       ├── samagra logo.png        # Samagra page — club logo
    │       ├── Vault Vortex.png        # SAMAGRA wing — Fin-tech
    │       ├── SHIELD.png              # SAMAGRA wing — Cyber Security
    │       ├── Vizerion.png            # SAMAGRA wing — E Sports
    │       ├── OF(F) Topic.png         # SAMAGRA wing — Creativity
    │       ├── CSC SOC.png             # SAMAGRA wing — CS Community
    │       ├── WIST.png                # SAMAGRA wing — Women in Tech
    │       └── Tech Revamp.png         # SAMAGRA wing — Tech Innovation
    │
    ├── data/                           # Static content & configuration (single source of truth)
    │   ├── navigation.ts               # NavLink[] + FooterColumn[] — drives Navbar & Footer
    │   ├── programmes.ts               # Programme[] — 4 programmes with sections & exploreUrl
    │   ├── about.ts                    # Vision/Mission, Founder, History milestones, Anthem
    │   ├── faculty-data.json           # 36 faculty + 4 leadership entries
    │   ├── leadership.ts               # Leader[] — derived from faculty-data.json, deduplicates HOD
    │   ├── samagra.ts                  # Wing[] — 6 SAMAGRA club wings
    │   └── stats.ts                    # Stat[] — 5 accreditation/ranking items
    │
    ├── lib/                            # Shared utilities
    │   ├── utils.ts                    # cn(), scrollToSection(), toKebabCase(), truncate()
    │   └── animations.ts              # Framer Motion variants (fadeInUp, staggerContainer, viewport)
    │
    ├── components/
    │   ├── layout/                     # Persistent shell rendered in App.tsx
    │   │   ├── Navbar.tsx              # Fixed top bar, maroon bg, dropdown menus, mobile panel
    │   │   ├── Footer.tsx              # 4-column footer, social icons, department branding
    │   │   └── index.ts               # Barrel export
    │   │
    │   ├── sections/                   # Page-level content blocks (homepage + reusable)
    │   │   ├── NavigationFunnel.tsx    # Hero: 3 quick-link cards (Uni / Campus / Dept)
    │   │   ├── UniversityExcellence.tsx# Accreditations & rankings (5 stat cards)
    │   │   ├── LeadershipStrip.tsx     # 4 premium leadership portrait cards
    │   │   ├── FacultyPreview.tsx      # Up to 8 faculty cards with "View All" link
    │   │   ├── RulesSection.tsx        # 6 university rules in responsive grid
    │   │   ├── SamagraEcosystem.tsx    # 6 SAMAGRA wing cards with emoji + hover
    │   │   └── index.ts               # Barrel export
    │   │
    │   ├── ui/                         # Reusable design primitives
    │   │   ├── Button.tsx              # 3 variants (primary / ghost / gold) × 3 sizes
    │   │   ├── Card.tsx                # 3 variants (base / interactive / maroon)
    │   │   ├── SectionWrapper.tsx      # Animated section container with bg/width options
    │   │   ├── Container.tsx           # Simple max-width wrapper (no animation)
    │   │   ├── AnimatedCard.tsx        # Card with scroll-triggered fade-in
    │   │   ├── AnimatedReveal.tsx      # Stagger container for children animations
    │   │   ├── IconWrapper.tsx         # Consistent lucide-icon sizing (plain / circle)
    │   │   ├── IconLabelPair.tsx       # Vertical icon + label pair
    │   │   └── index.ts               # Barrel export
    │   │
    │   └── ScrollToTop.tsx             # Route-change scroll reset (renders null)
    │
    └── pages/                          # Route-level page components
        ├── HomePage.tsx                # / — Funnel → Excellence → Leadership → Faculty → Rules
        ├── ProgrammesPage.tsx          # /programmes — 4 programme cards with gold CTAs
        ├── ProgrammeDetailPage.tsx     # /programmes/:id — sections grid or PhD research page
        ├── AboutUniversityPage.tsx     # /about-university — sticky tab bar, 5 sections
        ├── FacultyPage.tsx             # /faculty — search + filter + leadership + grid
        ├── SamagraPage.tsx             # /samagra — 7-wing grid with hover descriptions
        ├── Playground.tsx              # /playground — dev component catalog (not in nav)
        └── index.ts                    # Barrel export
```

---

## Routes

| Route               | Component              | Description                                      |
| ------------------- | ---------------------- | ------------------------------------------------ |
| `/`                 | `HomePage`             | Landing page with 5 stacked sections             |
| `/programmes`       | `ProgrammesPage`       | 4 programme cards (BCA, MDS, MSc AI & CS, PhD)   |
| `/programmes/:id`   | `ProgrammeDetailPage`  | Sections detail or PhD research showcase          |
| `/about-university` | `AboutUniversityPage`  | Tabbed: Vision, Founder, History, Anthem, Rules  |
| `/faculty`          | `FacultyPage`          | Searchable directory with leadership section     |
| `/samagra`          | `SamagraPage`          | 7-wing SAMAGRA club grid                         |
| `/playground`       | `Playground`           | Dev-only component catalog (not in navbar)       |
| `*`                 | 404 inline             | "Back to Home" fallback                          |

---

## Design System

### Brand Colors

| Token    | Hex     | Usage                                |
| -------- | ------- | ------------------------------------ |
| Maroon   | #7F1D1D | Navbar, headings, buttons, primary   |
| Cream    | #FFF7ED | Page background, card surfaces       |
| Gold     | #D4A017 | Accents, CTAs, underlines, badges    |
| Charcoal | #1E293B | Body text, footer background         |
| Maroon Dark | #5C1313 | Navbar dark variant               |
| Cream Muted | #FDF0E0 | Alternating section backgrounds  |
| Cream Border | #E8D5B7 | Card borders, dividers           |

### Typography

| Style           | Font           | Size Range     | Usage                         |
| --------------- | -------------- | -------------- | ----------------------------- |
| Display (lg/sm) | Playfair Display | 2.25–3.5rem  | Page titles, hero headings    |
| Heading (lg/sm) | Playfair Display | 1.25–1.875rem | Section titles, card titles   |
| Body (lg/sm)    | DM Sans        | 0.875–1.125rem | Paragraphs, descriptions      |
| Label (lg/sm)   | DM Sans        | 0.75–0.875rem  | Navigation, metadata, buttons |
| Eyebrow         | DM Sans        | 0.6875rem      | Section category labels       |

### Key Conventions

- **Cards**: White surface (`bg-white`), cream border (`border-cream-border`), 12px radius (`rounded-card`), maroon-tinted shadow (`shadow-card`)
- **Hover**: `-translate-y-1.5`, `border-gold/30`, `shadow-card-hover` — 350ms ease-smooth
- **CTAs**: Gold pill (`bg-gold/10 rounded-pill text-gold`), arrow slides right on hover (`group-hover:gap-2`)
- **Accent bar**: 8px gold-to-maroon gradient strip at top of cards
- **Motion**: Page enter/exit `fade + slide 12px` (400ms), card reveals staggered at 80ms delay
- **Active state**: Focus visible gold ring (`focus-visible:ring-2 focus-visible:ring-gold`)

---

## Data Architecture

All content is centralized in `src/data/` as typed TypeScript modules or JSON:

| File                  | Exports                          | Consumed By                          |
| --------------------- | -------------------------------- | ------------------------------------ |
| `navigation.ts`       | `navLinks`, `footerColumns`      | `Navbar`, `Footer`                   |
| `programmes.ts`       | `Programme[]`                    | `ProgrammesPage`, `ProgrammeDetailPage` |
| `faculty-data.json`   | Raw faculty + leadership data    | `leadership.ts`                      |
| `leadership.ts`       | `Leader[]` (derived + combined)  | `LeadershipStrip`, `FacultyPage`     |
| `about.ts`            | Vision, Founder, History, Anthem | `AboutUniversityPage`                |
| `samagra.ts`          | `Wing[]` (6 wings)               | `SamagraEcosystem`, `SamagraPage`    |
| `stats.ts`            | `Stat[]` (5 items)               | `UniversityExcellence`               |

---

## Component Architecture

```
App.tsx
├── ScrollToTop           # Resets scroll on route change
├── Navbar                # Navigation with dropdowns
│   └── navLinks[]        # From data/navigation.ts
│
├── AnimatePresence
│   └── Routes
│       ├── HomePage
│       │   ├── NavigationFunnel
│       │   ├── UniversityExcellence
│       │   ├── LeadershipStrip
│       │   │   └── leaders[]     # From data/leadership.ts
│       │   ├── FacultyPreview
│       │   │   └── faculty[]     # From data/faculty-data.json
│       │   └── RulesSection
│       │
│       ├── ProgrammesPage
│       │   └── Card per programme # From data/programmes.ts
│       │
│       ├── ProgrammeDetailPage
│       │   └── Sections grid / PhD research
│       │
│       ├── AboutUniversityPage
│       │   ├── Sticky tab bar
│       │   └── 5 content sections
│       │
│       ├── FacultyPage
│       │   ├── Search + filter bar
│       │   ├── Leadership section (4 cards)
│       │   └── Faculty grid
│       │
│       └── SamagraPage
│           └── 7-wing grid with hover
│
└── Footer                # Columns from data/navigation.ts
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (port 8000)
npm run dev

# TypeScript type check
npx tsc --noEmit

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## Customization Guide

### Add a Programme

1. Add entry to `src/data/programmes.ts` implementing `Programme` interface
2. Add route + children in `src/data/navigation.ts` for navbar dropdown
3. Add external link in footer columns if needed

### Add a Faculty Member

1. Add entry to `src/data/faculty-data.json` with all required fields
2. Host image on CHRIST server or place in `public/images/faculty/`

### Add a SAMAGRA Wing

1. Add wing image to `src/assets/images/`
2. Add wing definition to `src/data/samagra.ts` implementing `Wing` interface
3. Add image mapping + description in `src/pages/SamagraPage.tsx`

### Modify Navigation

Edit `src/data/navigation.ts` — `navLinks` drives Navbar dropdowns and `footerColumns` drives Footer link lists. Each nav link supports `children` for nested dropdown menus.

---

## Deployment

The project is a fully static frontend. Build with `npm run build` and deploy the `dist/` folder to:

- **Vercel**: Connect repo → Vercel auto-detects Vite → deploys `dist/`
- **Netlify**: Set publish directory to `dist/`
- **GitHub Pages**: Use `vite.config.js` base path

Recommended: `https://christ-info.vercel.app`

---

## Credits

Built by **Eugene Elias** — Student of Computer Science  
CHRIST (Deemed to be University), Yeshwantpur Campus, Bangalore
