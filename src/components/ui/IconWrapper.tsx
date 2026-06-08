import type { LucideProps } from 'lucide-react';
import { cn } from '../../lib/utils';

type IconSize = 'sm' | 'default' | 'lg' | 'xl';
type IconVariant = 'plain' | 'circle';

export interface IconWrapperProps {
  icon: React.ComponentType<LucideProps>;
  size?: IconSize;
  variant?: IconVariant;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
  onClick?: () => void;
  color?: string;
}

const sizeMap: Record<IconSize, number> = {
  sm:      16,
  default: 20,
  lg:      24,
  xl:      32,
};

const circleSizeClasses: Record<IconSize, string> = {
  sm:      'w-7 h-7',
  default: 'w-9 h-9',
  lg:      'w-11 h-11',
  xl:      'w-14 h-14',
};

/**
 * IconWrapper — renders a lucide-react icon with consistent sizing and ARIA handling.
 * Decorative (no ariaLabel): aria-hidden="true".
 * Interactive (with ariaLabel + onClick): rendered as accessible button.
 * Variant 'circle': wraps icon in a styled circular container.
 */
export function IconWrapper({
  icon: Icon,
  size = 'default',
  variant = 'plain',
  className,
  containerClassName,
  ariaLabel,
  onClick,
  color,
}: IconWrapperProps) {
  const iconSize = sizeMap[size];
  const isInteractive = Boolean(ariaLabel && onClick);
  const isDecorative = !ariaLabel;

  const iconElement = (
    <Icon
      size={iconSize}
      strokeWidth={1.5}
      className={cn(color, className)}
      aria-hidden={isDecorative ? 'true' : undefined}
    />
  );

  if (variant === 'circle') {
    const circleClasses = cn(
      'inline-flex items-center justify-center rounded-full',
      'bg-cream-border/60',
      circleSizeClasses[size],
      isInteractive && [
        'cursor-pointer transition-colors duration-250',
        'hover:bg-cream-border focus-visible:ring-2 focus-visible:ring-gold',
      ],
      containerClassName
    );

    if (isInteractive) {
      return (
        <button
          type="button"
          onClick={onClick}
          aria-label={ariaLabel}
          className={cn('outline-none', circleClasses)}
        >
          {iconElement}
        </button>
      );
    }

    return (
      <span className={circleClasses} aria-hidden="true">
        {iconElement}
      </span>
    );
  }

  if (isInteractive) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className={cn(
          'inline-flex items-center justify-center outline-none',
          'rounded-sm focus-visible:ring-2 focus-visible:ring-gold',
          'transition-opacity duration-250 hover:opacity-70',
          containerClassName
        )}
      >
        {iconElement}
      </button>
    );
  }

  return iconElement;
}

export default IconWrapper;
