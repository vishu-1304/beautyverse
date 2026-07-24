/**
 * BeautyVerse Spacing Design Tokens
 * 
 * Standardized scale for margins, padding, layout structures, and container widths.
 * Uses a fine-tuned, balanced layout scale.
 */

export const spacing = {
  // Base 4px scaling (in rems)
  none: '0px',
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem',   // 32px
  '4xl': '2.5rem', // 40px
  '5xl': '3rem',   // 48px
  '6xl': '4rem',   // 64px
  '7xl': '5rem',   // 80px
  '8xl': '6rem',   // 96px

  // Component-specific layout guides
  layout: {
    gutter: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem',
    },
    section: {
      sm: '3rem',
      md: '5rem',
      lg: '8rem',
    },
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
} as const;

export type SpacingType = typeof spacing;
