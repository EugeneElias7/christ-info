import { motion } from 'framer-motion';
import { getMotionVariants, fadeInUp, viewportLazy } from '../../lib/animations';
import { cn } from '../../lib/utils';

/**
 * SectionWrapper — semantic section container with scroll-triggered entrance animation.
 * Handles consistent section padding, max-width, and whileInView fade-in.
 * Width: 'narrow' (48rem) | 'standard' (64rem) | 'wide' (80rem, default)
 */

export interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  ariaLabel?: string;
  width?: 'narrow' | 'standard' | 'wide';
  animate?: boolean;
  background?: 'cream' | 'cream-muted' | 'maroon-tint' | 'none';
}

const widthClasses = {
  narrow:   'max-w-3xl',
  standard: 'max-w-5xl',
  wide:     'max-w-7xl',
};

const bgClasses = {
  cream:         'bg-cream',
  'cream-muted': 'bg-cream-muted',
  'maroon-tint': 'bg-maroon/[0.03]',
  none:          '',
};

export function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
  ariaLabel,
  width = 'wide',
  animate = true,
  background = 'none',
}: SectionWrapperProps) {
  const variants = getMotionVariants(fadeInUp);

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(bgClasses[background], className)}
    >
      <motion.div
        className={cn(
          'mx-auto w-full px-section-x-sm sm:px-section-x-md lg:px-section-x',
          'py-section-y-sm lg:py-section-y',
          widthClasses[width],
          innerClassName,
        )}
        variants={animate ? variants : undefined}
        initial={animate ? 'hidden' : undefined}
        whileInView={animate ? 'visible' : undefined}
        viewport={animate ? viewportLazy : undefined}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default SectionWrapper;
