import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual variant of the button.
   * @default 'solid'
   */
  variant?: 'solid' | 'outline' | 'ghost' | 'glass' | 'shimmer';
  /**
   * The color theme intent of the button.
   * @default 'primary'
   */
  intent?: 'primary' | 'secondary' | 'accent' | 'neutral';
  /**
   * The size classification.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The structural boundary style.
   * - 'sleek': Dior-inspired, sharp editorial style with minimal rounding, uppercase typography.
   * - 'pill': Rare Beauty-inspired, soft rounded matte, comforting feminine look.
   * @default 'pill'
   */
  shape?: 'sleek' | 'pill';
  /**
   * Displays a premium spinner and disables actions.
   */
  isLoading?: boolean;
  /**
   * Optional icon to render on the left of the label.
   */
  leftIcon?: React.ReactNode;
  /**
   * Optional icon to render on the right of the label.
   */
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'solid',
      intent = 'primary',
      size = 'md',
      shape = 'pill',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles: Apple-like active scale depress, transition timing
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97] cursor-pointer';

    // Shape & Typography mapping
    const shapeStyles = {
      sleek: 'rounded-[2px] uppercase tracking-[0.18em] font-serif font-medium text-xs',
      pill: 'rounded-full tracking-wide font-sans text-sm',
    };

    // Size mapping
    const sizeStyles = {
      sleek: {
        sm: 'px-4 py-2 text-[10px]',
        md: 'px-6 py-3 text-[11px]',
        lg: 'px-8 py-4 text-xs',
      },
      pill: {
        sm: 'px-3.5 py-1.5 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-7.5 py-3.5 text-base',
      },
    };

    // Style combination grid based on variant and intent
    const variantIntentStyles = {
      solid: {
        primary: 'bg-brand-blush-800 hover:bg-brand-blush-700 text-white shadow-luxury-sm focus:ring-brand-blush-500',
        secondary: 'bg-neutral-obsidian-950 hover:bg-neutral-obsidian-900 text-white shadow-luxury-sm focus:ring-neutral-obsidian-500',
        accent: 'bg-brand-gold-500 hover:bg-brand-gold-600 text-white shadow-luxury-sm focus:ring-brand-gold-400',
        neutral: 'bg-neutral-cream-200 hover:bg-neutral-cream-300 text-neutral-cream-800 focus:ring-neutral-cream-400',
      },
      outline: {
        primary: 'border border-brand-blush-400 hover:bg-brand-blush-50 text-brand-blush-800 focus:ring-brand-blush-500',
        secondary: 'border border-neutral-obsidian-900 hover:bg-neutral-obsidian-50 text-neutral-obsidian-950 focus:ring-neutral-obsidian-500',
        accent: 'border border-brand-gold-500 hover:bg-brand-gold-50 text-brand-gold-600 focus:ring-brand-gold-500',
        neutral: 'border border-neutral-cream-300 hover:bg-neutral-cream-100 text-neutral-cream-700 focus:ring-neutral-cream-400',
      },
      ghost: {
        primary: 'text-brand-blush-800 hover:bg-brand-blush-100/50 focus:ring-brand-blush-500',
        secondary: 'text-neutral-obsidian-950 hover:bg-neutral-obsidian-100/50 focus:ring-neutral-obsidian-500',
        accent: 'text-brand-gold-600 hover:bg-brand-gold-100/50 focus:ring-brand-gold-500',
        neutral: 'text-neutral-cream-600 hover:bg-neutral-cream-100 focus:ring-neutral-cream-400',
      },
      glass: {
        primary: 'bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/60 text-brand-blush-800 shadow-luxury-sm focus:ring-brand-blush-500',
        secondary: 'bg-white/30 backdrop-blur-md border border-white/50 hover:bg-white/50 text-neutral-obsidian-950 shadow-luxury-sm focus:ring-neutral-obsidian-500',
        accent: 'bg-white/40 backdrop-blur-md border border-brand-gold-200/50 hover:bg-brand-gold-50/50 text-brand-gold-600 shadow-luxury-sm focus:ring-brand-gold-500',
        neutral: 'bg-white/50 backdrop-blur-md border border-white/70 hover:bg-white/80 text-neutral-cream-800 shadow-luxury-sm focus:ring-neutral-cream-400',
      },
      shimmer: {
        primary: 'bg-shimmer-blush text-white shadow-luxury-sm hover:brightness-105 animate-shimmer focus:ring-brand-blush-500',
        secondary: 'bg-gradient-to-r from-neutral-obsidian-950 via-neutral-obsidian-800 to-neutral-obsidian-950 text-white shadow-luxury-sm hover:brightness-110 focus:ring-neutral-obsidian-500',
        accent: 'bg-shimmer-gold text-neutral-obsidian-950 font-semibold shadow-luxury-sm hover:brightness-105 animate-shimmer focus:ring-brand-gold-400',
        neutral: 'bg-gradient-to-r from-neutral-cream-100 via-white to-neutral-cream-100 text-neutral-cream-800 border border-neutral-cream-200 shadow-luxury-sm focus:ring-neutral-cream-400',
      },
    };

    const finalSizeClass = sizeStyles[shape][size];

    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          shapeStyles[shape],
          finalSizeClass,
          variantIntentStyles[variant][intent],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!isLoading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
        <span className="truncate">{children}</span>
        {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
