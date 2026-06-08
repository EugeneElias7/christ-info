import { cn } from '../../lib/utils';

/**
 * Container — simple max-width wrapper with responsive horizontal padding.
 * Use when you need a constrained inner layout without section semantics.
 */

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  width?: 'narrow' | 'standard' | 'wide';
}

const widthClasses = {
  narrow:   'max-w-3xl',
  standard: 'max-w-5xl',
  wide:     'max-w-7xl',
};

export function Container({ children, className, width = 'wide' }: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto w-full px-section-x-sm sm:px-section-x-md lg:px-section-x',
      widthClasses[width],
      className,
    )}>
      {children}
    </div>
  );
}

export default Container;
