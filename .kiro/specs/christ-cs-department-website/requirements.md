# Requirements Document

## Introduction

CHRIST INFO is a modern, premium, single-page informational website for the Department of Computer Science at CHRIST (Deemed to be University), Yeshwantpur Campus, Bangalore. The site serves as the primary digital presence for the department, showcasing academic programmes, faculty leadership, student community (Samagra Club), institutional rankings, and essential resources. It is a purely static frontend application built with React (Vite), Tailwind CSS, and Framer Motion, requiring no backend or server-side logic.

---

## Glossary

- **Website**: The CHRIST INFO single-page informational site for the CS Department.
- **User**: Any visitor accessing the Website in a browser.
- **Navbar**: The sticky top navigation bar present on the Website.
- **Navigation Funnel**: The 3-card grid layout at the top of the page body, replacing a traditional hero banner.
- **Leadership Section**: The horizontal strip of circular profile cards for department heads.
- **Stats Bar**: The horizontal metrics strip displaying institutional rankings and department statistics.
- **Samagra Club Ecosystem**: The connected-node visual section showcasing the Samagra student community and its wings.
- **Footer**: The dark charcoal bottom section containing links, contact info, and credits.
- **Framer_Motion**: The animation library used for scroll-triggered fade-ins, transitions, and hover effects.
- **Glassmorphism**: A UI style using frosted-glass-like card backgrounds with backdrop blur and subtle transparency.
- **EARS**: Easy Approach to Requirements Syntax — the pattern system used for writing acceptance criteria.
- **NAAC**: National Assessment and Accreditation Council.
- **NIRF**: National Institutional Ranking Framework.
- **WURI**: World's Universities with Real Impact ranking.
- **QS**: QS World University Rankings.
- **Samagra**: The official Computer Science Students' Community at CHRIST Yeshwantpur.
- **Wing**: A sub-community within Samagra focused on a specific technical or creative domain.
- **BCA**: Bachelor of Computer Applications.
- **MDS**: Master of Data Science.
- **MSc_AI**: Master of Science in Artificial Intelligence.
- **MSc_Cyber**: Master of Science in Cyber Security.

---

## Requirements

### Requirement 1: Project Setup and Technology Stack

**User Story:** As a developer, I want the project bootstrapped with the correct toolchain, so that the site builds and runs reliably as a static frontend application.

#### Acceptance Criteria

1. THE Website SHALL be implemented as a React application scaffolded with Vite.
2. THE Website SHALL use Tailwind CSS for all utility-based styling.
3. THE Website SHALL use Framer Motion for all animations, transitions, and hover effects.
4. THE Website SHALL be a single-page application (SPA) with no backend, server-side rendering, or database dependencies.
5. WHEN the production build command is run, THE Website SHALL produce a fully static output directory ready for deployment on any static hosting provider.

---

### Requirement 2: Design System and Visual Identity

**User Story:** As a visitor, I want the site to feel premium and academic, so that I trust the credibility of the institution it represents.

#### Acceptance Criteria

1. THE Website SHALL apply a soft cream background color (#FFF7ED) as the default page background.
2. THE Website SHALL use deep maroon (#7F1D1D) for primary headers, the Navbar, and major accent elements.
3. THE Website SHALL use warm gold (#D4A017) for secondary accents, stat highlights, and decorative lines.
4. THE Website SHALL use charcoal (#1E293B) for body text, the Footer background, and dark surface elements.
5. THE Website SHALL use an elegant sans-serif typeface for all UI labels, body copy, and navigation links.
6. THE Website SHALL use a sophisticated serif typeface for main section headings to convey an academic aesthetic.
7. THE Website SHALL render all card components with rounded corners, layered elevation, a glassmorphism-style frosted background, and a subtle drop shadow.
8. WHEN a User hovers over an interactive card or button, THE Website SHALL apply a subtle glow effect, slight upward elevation (transform: translateY), and enhanced drop shadow within a 0.3s ease-in-out transition.
9. THE Website SHALL maintain consistent spacing, type scale, and color usage across all sections as defined by the design system.

---

### Requirement 3: Navbar

**User Story:** As a visitor, I want a persistent navigation bar, so that I can jump to any section of the page at any time.

#### Acceptance Criteria

1. THE Navbar SHALL be rendered at the top of the viewport and remain sticky (fixed position) during scroll.
2. THE Navbar SHALL display the "CHRIST INFO" brand name on the left side, styled in the maroon/gold color scheme.
3. THE Navbar SHALL contain the following navigation links in order: Home, Courses, Faculty, Samagra Club, Student Help, About CS, Vision & Mission.
4. WHEN a User clicks a Navbar link, THE Website SHALL smoothly scroll to the corresponding section on the page.
5. WHEN the viewport width is below the mobile breakpoint (< 768px), THE Navbar SHALL collapse navigation links into a hamburger menu.
6. WHEN the hamburger menu is activated, THE Navbar SHALL display navigation links in a dropdown or slide-in panel.
7. THE Navbar SHALL have a deep maroon (#7F1D1D) background with sufficient contrast for all link text to meet WCAG AA contrast standards.

---

### Requirement 4: Navigation Funnel (3-Card Grid)

**User Story:** As a visitor, I want a visually engaging entry point at the top of the page body, so that I can immediately understand the scope of the site and navigate to areas of interest.

#### Acceptance Criteria

1. THE Navigation_Funnel SHALL be rendered as the first content section below the Navbar, replacing a traditional hero banner.
2. THE Navigation_Funnel SHALL contain three cards arranged in a 2-over-1 grid: two equal-width cards on the top row and one full-width card on the bottom row.
3. THE Navigation_Funnel top-left card SHALL be labelled "Explore CHRIST University" and SHALL link to or scroll toward university-wide information.
4. THE Navigation_Funnel top-right card SHALL be labelled "Explore Yeshwantpur Campus" and SHALL link to or scroll toward campus-specific information.
5. THE Navigation_Funnel bottom card SHALL be labelled "Department of Computer Science" and SHALL display six icon-and-label pairs using thin-line icons: Academics, Labs, Research, Student Achievements, Events, Placements.
6. WHEN a User hovers over any Navigation_Funnel card, THE Website SHALL apply the hover effect defined in Requirement 2, Criterion 8.
7. WHEN the page loads, THE Navigation_Funnel cards SHALL animate into view using a Framer_Motion fade-in and upward slide with a staggered delay between cards.

---

### Requirement 5: Leadership Section

**User Story:** As a prospective student or parent, I want to see the department's key leaders, so that I can understand who runs the department and how to contact them.

#### Acceptance Criteria

1. THE Leadership_Section SHALL display department leaders in a horizontal scrollable row of circular profile cards.
2. THE Leadership_Section SHALL include the following leaders in left-to-right order: Director (Fr. Dr. Thomas C Mathew), Dean (Dr. Anil Joseph Pinto), HOD (Dr. Mary Anita E A), Associate HOD (Ms. Neethu Joy), Programme Coordinator (Ms. Anjana K).
3. EACH leadership card SHALL display a circular profile image placeholder, the person's full name, their title/role, and icon links for email, phone, and LinkedIn.
4. THE Leadership_Section SHALL include a "View All Faculty" card as the rightmost item in the row, styled distinctly to indicate navigation.
5. WHEN a User hovers over a leadership card, THE Website SHALL apply the hover effect defined in Requirement 2, Criterion 8.
6. WHEN the Leadership_Section scrolls into the viewport, THE Website SHALL animate each card in using Framer_Motion with a staggered left-to-right fade-in.
7. WHEN the viewport width is below the mobile breakpoint (< 768px), THE Leadership_Section SHALL switch to a horizontally scrollable single-row layout.

---

### Requirement 6: Stats Bar

**User Story:** As a visitor, I want to see key institutional metrics at a glance, so that I can quickly assess the department's academic standing.

#### Acceptance Criteria

1. THE Stats_Bar SHALL be rendered as a full-width horizontal strip between the Leadership Section and the Samagra Club Ecosystem section.
2. THE Stats_Bar SHALL display the following eight metrics with labels: NAAC A+ Grade, 60 NIRF Ranking, 681–700 WURI Ranking, Top 150 QS Asia Ranking, 50+ Dedicated Faculty, 1000+ Students, 6+ Labs & Centers, 100+ Research Publications.
3. THE Stats_Bar SHALL use warm gold (#D4A017) as the primary accent color for metric values or icons.
4. WHEN the Stats_Bar scrolls into the viewport, THE Website SHALL animate each metric using a Framer_Motion counter or fade-in effect with staggered timing.
5. THE Stats_Bar SHALL maintain a single horizontal row on desktop and wrap to a 2-column or 4-column grid on mobile viewports.

---

### Requirement 7: Samagra Club Ecosystem

**User Story:** As a student, I want to explore the Samagra Club and its wings, so that I can find a community that matches my interests.

#### Acceptance Criteria

1. THE Samagra_Section SHALL display a main card on the left labelled "SAMAGRA – The Official Computer Science Students' Community".
2. THE Samagra_Section SHALL display six wing nodes connected to the main card via visible connector lines: Vizerion (AI/ML & Data Science), WIST (Women in Software & Technology), Shield (Cyber Security & Ethical Hacking), Off Topic (Creativity & Quirky), Code Cell (Competitive Programming), Media Wing (Design & Media).
3. EACH wing node SHALL display the wing name, its domain/tagline, and a representative icon.
4. THE Samagra_Section SHALL include an "Explore Samagra" call-to-action button below or adjacent to the main card.
5. WHEN a User hovers over a wing node, THE Website SHALL apply the hover effect defined in Requirement 2, Criterion 8.
6. WHEN the Samagra_Section scrolls into the viewport, THE Website SHALL animate the main card and wing nodes into view using Framer_Motion, with the connector lines drawing in after the cards appear.
7. WHEN a User clicks the "Explore Samagra" button, THE Website SHALL scroll to or reveal additional Samagra information, or open an external Samagra link.
8. WHEN the viewport width is below the mobile breakpoint (< 768px), THE Samagra_Section SHALL switch from the connected-node layout to a vertical stacked card list.

---

### Requirement 8: Footer

**User Story:** As a visitor, I want a well-organized footer, so that I can find links, contact information, and institutional details without scrolling back to the top.

#### Acceptance Criteria

1. THE Footer SHALL use a dark charcoal gradient (#1E293B to a slightly darker shade) as its background.
2. THE Footer SHALL be organized into four columns: Department Links, Courses, Resources, and Contact Us.
3. THE Footer Department_Links column SHALL include: About CS Department, Faculty, Samagra Club, Student Help, Vision & Mission, Rules & Regulations.
4. THE Footer Courses column SHALL include: BCA, MDS, MSc AI, MSc Cyber Security.
5. THE Footer Resources column SHALL include: Academic Calendar, Time Table, Exam Cell, Library, Placement Cell.
6. THE Footer Contact_Us column SHALL display the following: address (CHRIST Deemed to be University, Nagasandra, Near Tumkur Road, Bangalore – 560 073, Karnataka, India), phone (+91 80 6189 6666 / 6667), and email (mail.yeshwantpur@christuniversity.in).
7. THE Footer left side SHALL display the CHRIST logo, social media icons for Instagram, LinkedIn, YouTube, and Facebook, and the campus locations "Bangalore | Delhi NCR | Pune".
8. THE Footer bottom bar SHALL display the copyright notice "© 2026 CHRIST INFO - Computer Science Department. All Rights Reserved." and the credit line "Developed by Students of Bachelor of Computer Applications (BCA) | Class: BCA A (2023-26 Batch)".
9. WHEN a User clicks a Footer link, THE Website SHALL navigate to the relevant section or open the relevant resource.
10. WHEN a User clicks a social media icon, THE Website SHALL open the respective social media page in a new browser tab.

---

### Requirement 9: Scroll Animations and Page-Wide Interactions

**User Story:** As a visitor, I want the page to feel alive and responsive, so that scrolling and interacting with it feels premium and intentional.

#### Acceptance Criteria

1. WHEN any major section enters the viewport during scroll, THE Website SHALL trigger a Framer_Motion fade-in and upward-slide entrance animation.
2. THE Website SHALL use Framer_Motion's `useInView` or `whileInView` API to trigger animations only when elements are visible, not on page load for off-screen content.
3. THE Website SHALL apply staggered animation delays to lists and grids so that child elements animate in sequentially rather than simultaneously.
4. ALL Framer_Motion transitions on the Website SHALL use ease-in-out easing with durations between 0.3s and 0.6s.
5. THE Website SHALL respect the `prefers-reduced-motion` media query: WHEN a User has enabled reduced motion in their OS settings, THE Website SHALL disable or minimize all animations.

---

### Requirement 10: Responsive Design and Accessibility

**User Story:** As a visitor on any device, I want the site to display correctly and be accessible, so that I can use it regardless of how I access it.

#### Acceptance Criteria

1. THE Website SHALL be fully responsive across three breakpoints: mobile (< 768px), tablet (768px–1023px), and desktop (≥ 1024px).
2. THE Website SHALL meet WCAG 2.1 Level AA contrast requirements for all text elements against their backgrounds.
3. THE Website SHALL include appropriate ARIA labels on all icon-only interactive elements (social icons, hamburger menu, contact icons).
4. THE Website SHALL use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h6>`) throughout its structure.
5. ALL images and avatar placeholders on THE Website SHALL include descriptive `alt` attributes.
6. THE Website SHALL be keyboard navigable: WHEN a User navigates using the Tab key, THE Website SHALL display a visible focus indicator on all interactive elements.

---

### Requirement 11: Performance and Build Quality

**User Story:** As a visitor, I want the site to load quickly, so that I am not frustrated by slow page renders.

#### Acceptance Criteria

1. THE Website SHALL lazy-load any images that appear below the fold to reduce initial page load time.
2. THE Website SHALL not include any unused third-party libraries in the production bundle.
3. WHEN the production build is generated, THE Website's JavaScript bundle SHALL be code-split or tree-shaken to minimize bundle size.
4. THE Website SHALL achieve a Lighthouse Performance score of 80 or above on desktop when tested against the production build.
