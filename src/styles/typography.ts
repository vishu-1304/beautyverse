/**
 * BeautyVerse Typography Design Tokens
 * 
 * Inspired by:
 * - Dior: Sophisticated display Serif (Cormorant Garamond)
 * - Apple: Extremely crisp and functional Sans-Serif (Plus Jakarta Sans)
 */

export const typography = {
  fontFamily: {
    display: '"Cormorant Garamond", "Didot", "Bodoni MT", "Georgia", serif',
    sans: '"Plus Jakarta Sans", "SF Pro Display", "-apple-system", sans-serif',
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    editorial: '0.15em', // High-end Dior-inspired editorial spacing
  },
  lineHeight: {
    none: '1',
    tight: '1.2',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

export type TypographyType = typeof typography;
