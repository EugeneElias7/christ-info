import { motion } from 'framer-motion';
import { getMotionVariants, staggerContainer, staggerContainerFast, viewportLazy } from '../../lib/animations';
import { cn } from '../../lib/utils';

/**
 * AnimatedReveal — stagger container for child animations.
 * Wraps a group of elements; children animate in sequentially.
 * Children must use motion.div with fadeInUp/fadeInLeft variants.
 */

export interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
}

export function AnimatedReveal({ children, className, fast = false }: AnimatedRevealProps) {
  const variants = getMotionVariants(fast ? staggerContainerFast : staggerContainer);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportLazy}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedReveal;
