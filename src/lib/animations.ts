import type { Variants } from 'framer-motion';

// ─── REDUCED MOTION DETECTION ────────────────────────────────────────────────
// Used to return static (no-animation) variants when user prefers reduced motion.
// Import and use `getMotionVariants` in components instead of raw variants.

const isReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// ─── CORE VARIANTS ───────────────────────────────────────────────────────────

/**
 * Fade in with subtle upward slide.
 * Primary entrance animation for sections, cards, and headings.
 * Duration: 0.5s ease-in-out
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94], // editorial easing
    },
  },
};

/**
 * Fade in only — no vertical movement.
 * Used for full-width elements where vertical shift looks odd.
 * Duration: 0.4s ease-in-out
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

/**
 * Fade in from left — for horizontal rows (leadership strip).
 * Duration: 0.5s
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/**
 * Stagger container — wraps a list of animated children.
 * Each child staggers by 0.12s.
 * Apply to the parent motion.div, use fadeInUp on children.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/**
 * Stagger container — faster variant for dense grids (stats bar).
 * Each child staggers by 0.07s.
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.0,
    },
  },
};

/**
 * SVG line draw-in animation.
 * Apply to motion.path elements — draws the path from start to end.
 * Duration: 0.6s, delayed to appear after parent card.
 */
export const lineDrawIn: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0.3, // lines draw after cards appear
      },
      opacity: {
        duration: 0.1,
        delay: 0.3,
      },
    },
  },
};

/**
 * Scale in — for circular avatars and icon containers.
 * Subtle scale from 0.92 → 1.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ─── HOVER VARIANTS ──────────────────────────────────────────────────────────

/**
 * Card hover lift.
 * Use as `whileHover` on interactive card motion.div elements.
 * translateY: -4px + shadow upgrade.
 * Duration: 0.25s
 */
export const cardHoverLift = {
  y: -4,
  transition: {
    duration: 0.25,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

/**
 * Button hover scale.
 * Subtle scale for primary buttons.
 */
export const buttonHover = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
};

/**
 * Button tap feedback.
 */
export const buttonTap = {
  scale: 0.98,
};

// ─── VIEWPORT CONFIG ─────────────────────────────────────────────────────────

/**
 * Shared viewport config for whileInView triggers.
 * amount: 0.2 — triggers when 20% of element is visible.
 * once: true — animates once per page load.
 */
export const viewportOnce = {
  once: true,
  amount: 0.2 as const,
};

/**
 * Lazy viewport — triggers when just 10% visible.
 * Use for tall sections that may not fully enter viewport on mobile.
 */
export const viewportLazy = {
  once: true,
  amount: 0.1 as const,
};

// ─── REDUCED MOTION WRAPPER ──────────────────────────────────────────────────

/**
 * Returns static (no-op) variants when user prefers reduced motion.
 * Usage: const variants = getMotionVariants(fadeInUp);
 */
export const getMotionVariants = (variants: Variants): Variants => {
  if (isReducedMotion()) {
    return {
      hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
      visible: { opacity: 1, y: 0, x: 0, scale: 1 },
    };
  }
  return variants;
};

/**
 * Returns undefined transition (instant) when reduced motion is preferred.
 * Usage: <motion.div transition={getMotionTransition(0.5)} />
 */
export const getMotionTransition = (duration: number = 0.5) => {
  if (isReducedMotion()) return { duration: 0 };
  return { duration, ease: [0.25, 0.46, 0.45, 0.94] };
};
