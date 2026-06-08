import { cn } from '../../lib/utils';
import { IconWrapper } from './IconWrapper';
import type { IconWrapperProps } from './IconWrapper';

/**
 * IconLabelPair — vertical icon + label pair used in Navigation Funnel bottom card.
 * Icon on top, label below. Thin-line lucide icon, Inter label.
 */

export interface IconLabelPairProps {
  icon: IconWrapperProps['icon'];
  label: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  size?: 'sm' | 'default';
}

export function IconLabelPair({
  icon,
  label,
  className,
  iconClassName,
  labelClassName,
  size = 'default',
}: IconLabelPairProps) {
  return (
    <div className={cn('flex flex-col items-center gap-1.5 text-center', className)}>
      <IconWrapper
        icon={icon}
        size={size === 'sm' ? 'sm' : 'default'}
        className={cn('text-maroon/70', iconClassName)}
      />
      <span
        className={cn(
          'font-sans text-label-sm text-charcoal/80 leading-tight',
          labelClassName,
        )}
      >
        {label}
      </span>
    </div>
  );
}

export default IconLabelPair;
