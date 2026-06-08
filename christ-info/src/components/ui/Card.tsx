import { motion } from 'framer-motion';
import { cardHoverLift } from '../../lib/animations';
import { cn } from '../../lib/utils';

export interface CardProps {
  variant?: 'base' | 'interactive' | 'maroon';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  as?: 'div' | 'article' | 'section';
}

const variantClasses: Record<NonNullable<CardProps['variant']>, string> = {
  base: cn(
    'bg-white',
    'border border-cream-border',
    'shadow-card-white rounded-card',
  ),
  interactive: cn(
    'bg-white',
    'border border-cream-border',
    'shadow-card-white rounded-card',
    'cursor-pointer',
    'transition-all duration-350 ease-smooth',
  ),
  maroon: cn(
    'bg-gradient-to-br from-maroon to-maroon-dark',
    'border border-maroon/30',
    'shadow-card rounded-card',
    'text-cream',
  ),
};

export function Card({
  variant = 'base',
  children,
  className,
  onClick,
  ariaLabel,
  as: Tag = 'div',
}: CardProps) {
  const classes = cn(variantClasses[variant], className);

  if (variant === 'interactive') {
    return (
      <motion.div
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        whileHover={cardHoverLift}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Tag
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Tag>
  );
}

export default Card;
