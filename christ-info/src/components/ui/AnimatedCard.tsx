import { motion } from 'framer-motion';
import { getMotionVariants, fadeInUp } from '../../lib/animations';
import { Card } from './Card';
import type { CardProps } from './Card';
import { cn } from '../../lib/utils';

/**
 * AnimatedCard — Card with whileInView entrance animation.
 * Accepts a delay prop for stagger control.
 * Wraps Card with Framer Motion fadeInUp triggered on scroll.
 */

export interface AnimatedCardProps extends CardProps {
  delay?: number;
  viewport?: 'once' | 'lazy';
}

export function AnimatedCard({
  delay = 0,
  viewport = 'once',
  children,
  className,
  ...cardProps
}: AnimatedCardProps) {
  const variants = getMotionVariants(fadeInUp);
  const viewportConfig = {
    once: true,
    amount: viewport === 'lazy' ? 0.1 : 0.2,
  } as const;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay }}
      className={cn('h-full', className)}
    >
      <Card {...cardProps} className="h-full">
        {children}
      </Card>
    </motion.div>
  );
}

export default AnimatedCard;
