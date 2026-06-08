import { motion } from 'framer-motion';
import { cardHoverLift } from '../../lib/animations';
import { cn } from '../../lib/utils';

/**
 * GlassCard — premium glass-morphism card surface.
 *
 * Used by the Navigation Funnel top cards and feature sections where
 * a heavier, more visually prominent card is required.
 *
 * Differences from `Card`:
 * - `rounded-card-lg` (16px) instead of `rounded-card` (12px)
 * - `shadow-card-md` for additional visual weight
 * - `bg-cream/80` (higher opacity glass) + `backdrop-blur-glass`
 * - `overflow-hidden` + `relative` for image slot children
 * - Hover lift enabled by default via `hoverable` prop
 */

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  /** Whether to apply cardHoverLift on hover. Defaults to true. */
  hoverable?: boolean;
}

export function GlassCard({
  children,
  className,
  onClick,
  ariaLabel,
  hoverable = true,
}: GlassCardProps) {
  return (
    <motion.div
      aria-label={ariaLabel}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      className={cn(
        'relative overflow-hidden',
        'rounded-card-lg',
        'border border-cream-border/60',
        'shadow-card-md',
        'bg-cream/80 backdrop-blur-glass',
        onClick && 'cursor-pointer',
        className,
      )}
      whileHover={hoverable ? cardHoverLift : undefined}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}

export default GlassCard;
