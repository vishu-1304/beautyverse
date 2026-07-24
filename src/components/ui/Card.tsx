import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The styling aesthetic variant of the card.
   * @default 'bordered'
   */
  variant?: 'flat' | 'bordered' | 'elevated' | 'glass';
  /**
   * The animation effect on hover.
   * @default 'none'
   */
  hoverEffect?: 'none' | 'lift' | 'glow' | 'scale';
  /**
   * Internal padding surrounding the content.
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * The base theme background intensity.
   * @default 'light'
   */
  bgIntensity?: 'light' | 'dark' | 'warm';
  /**
   * Border rounding style:
   * - 'sleek': sharp 2px Dior classic styling.
   * - 'comfort': moderate 8px standard rounding.
   * - 'pill-box': generous 20px Rare Beauty curve.
   * @default 'comfort'
   */
  shape?: 'sleek' | 'comfort' | 'pill-box';
}

const CardComponent = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'bordered',
      hoverEffect = 'none',
      padding = 'md',
      bgIntensity = 'light',
      shape = 'comfort',
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'overflow-hidden transition-all duration-400 ease-out';

    // Rounding styles
    const shapeStyles = {
      sleek: 'rounded-[2px]',
      comfort: 'rounded-lg',
      'pill-box': 'rounded-2xl',
    };

    // Variant configurations
    const variantStyles = {
      flat: 'border-transparent shadow-none',
      bordered: 'border border-neutral-cream-300 dark:border-neutral-obsidian-800 shadow-none',
      elevated: 'border border-neutral-cream-200/50 dark:border-neutral-obsidian-900/30 shadow-luxury-md',
      glass: 'backdrop-blur-md shadow-luxury-sm border border-white/60 dark:border-white/10',
    };

    // Background Intensity styling mapping
    const bgStyles = {
      light: {
        flat: 'bg-white',
        bordered: 'bg-white',
        elevated: 'bg-white',
        glass: 'bg-white/40 dark:bg-neutral-obsidian-900/20',
      },
      dark: {
        flat: 'bg-neutral-obsidian-950 text-white',
        bordered: 'bg-neutral-obsidian-950 text-white',
        elevated: 'bg-neutral-obsidian-950 text-white',
        glass: 'bg-neutral-obsidian-950/40 text-white dark:bg-black/40',
      },
      warm: {
        flat: 'bg-neutral-cream-100/80',
        bordered: 'bg-neutral-cream-100/50',
        elevated: 'bg-neutral-cream-50',
        glass: 'bg-neutral-cream-50/50 dark:bg-neutral-cream-950/20',
      },
    };

    // Padding configuration
    const paddingStyles = {
      none: 'p-0',
      sm: 'p-4 md:p-5',
      md: 'p-6 md:p-8',
      lg: 'p-8 md:p-12',
    };

    // Hover transformations
    const hoverStyles = {
      none: '',
      lift: 'hover:-translate-y-1.5 hover:shadow-luxury-lg',
      glow: 'hover:shadow-luxury-glow hover:border-brand-gold-300/40 dark:hover:border-brand-gold-700/30',
      scale: 'hover:scale-[1.015] hover:shadow-luxury-md',
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          shapeStyles[shape],
          variantStyles[variant],
          bgStyles[bgIntensity][variant],
          paddingStyles[padding],
          hoverStyles[hoverEffect],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardComponent.displayName = 'Card';

// Card Header component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, divider = false, children, ...props }) => {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 pb-4',
        divider && 'border-b border-neutral-cream-200 dark:border-neutral-obsidian-800 mb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
CardHeader.displayName = 'Card.Header';

// Card Body component
const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
  return (
    <div className={cn('text-sm leading-relaxed text-neutral-cream-800 dark:text-neutral-obsidian-200', className)} {...props}>
      {children}
    </div>
  );
};
CardBody.displayName = 'Card.Body';

// Card Footer component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean;
}

const CardFooter: React.FC<CardFooterProps> = ({ className, divider = false, children, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center pt-4',
        divider && 'border-t border-neutral-cream-200 dark:border-neutral-obsidian-800 mt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
CardFooter.displayName = 'Card.Footer';

// Namespace exports for ease of usage
export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
