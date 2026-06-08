import { motion } from 'framer-motion';
import { buttonHover, buttonTap } from '../../lib/animations';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'ghost' | 'gold';
type ButtonSize = 'sm' | 'default' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-maroon text-cream border border-maroon/90',
    'hover:bg-maroon-dark hover:border-maroon-dark hover:shadow-gold-glow/60',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ),
  ghost: cn(
    'bg-transparent text-maroon border border-gold/40',
    'hover:border-gold hover:bg-gold/5',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ),
  gold: cn(
    'bg-gold text-maroon-dark border border-gold',
    'hover:bg-gold-light hover:border-gold-light hover:shadow-lg',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm:      'py-1 px-3 text-label gap-1.5',
  default: 'py-1.5 px-4 text-label-lg gap-2',
  lg:      'py-2 px-5 text-body-sm gap-2',
};

const baseClasses = cn(
  'inline-flex items-center justify-center',
  'font-sans font-medium tracking-wide',
  'rounded-card',
  'transition-all duration-250 ease-smooth',
  'select-none whitespace-nowrap',
);

export function Button({
  variant = 'primary',
  size = 'default',
  children,
  className,
  onClick,
  href,
  ariaLabel,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        className={classes}
        whileHover={disabled ? undefined : buttonHover}
        whileTap={disabled ? undefined : buttonTap}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={classes}
      whileHover={disabled ? undefined : buttonHover}
      whileTap={disabled ? undefined : buttonTap}
    >
      {children}
    </motion.button>
  );
}

export default Button;
