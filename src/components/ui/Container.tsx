import React from 'react';
import { cn } from '../../utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The maximum horizontal boundary width of the container.
   * @default 'xl'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /**
   * Safe gutter paddings.
   * - 'none': p-0
   * - 'normal': Standard margins for typical web layout consistency.
   * - 'airy': Spacious Dior-inspired margins that accentuate clean white space.
   * @default 'normal'
   */
  padding?: 'none' | 'normal' | 'airy';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'xl', padding = 'normal', children, ...props }, ref) => {
    // Base centering styling
    const baseStyles = 'mx-auto w-full';

    // Width limit mapping
    const sizeStyles = {
      sm: 'max-w-3xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    // Padding gutters mapping
    const paddingStyles = {
      none: 'px-0',
      normal: 'px-4 sm:px-6 lg:px-8',
      airy: 'px-6 sm:px-12 lg:px-16',
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], paddingStyles[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
export default Container;
