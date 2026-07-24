/**
 * BeautyVerse Color Design Tokens
 * 
 * Inspired by:
 * - Dior: Elegant gold, deep blacks, refined champagne creams.
 * - Rare Beauty: Soft warm blushes, peachy roses, earthy wood tones.
 * - Apple: Crisp functional grays, minimalist white, high-contrast darks.
 */

export const colors = {
  // Brand specific colors
  brand: {
    gold: {
      50: '#FAF7F2',
      100: '#F4ECDC',
      200: '#E6D2B3',
      300: '#D3B381',
      400: '#C29555',
      500: '#B3803E', // Primary metallic gold
      600: '#93652E',
      700: '#734D23',
      800: '#543719',
      900: '#3D2712',
    },
    blush: {
      50: '#FDF9F9',
      100: '#FAF0F0',
      200: '#F2DCDD',
      300: '#E5BFC2',
      400: '#D4A3A7', // Primary dusty rose
      500: '#C2878C',
      600: '#A86A70',
      700: '#8C5156',
      800: '#6F3C40', // Deep rosewood
      900: '#542B2F',
    },
  },
  
  // Neutral tones - cream-based light and obsidian-based dark
  neutral: {
    cream: {
      50: '#FDFDFD',
      100: '#FAF8F5', // Alabaster/Satin background
      200: '#F4EFEB',
      300: '#EBE2DC',
      400: '#DACDC3',
      500: '#C7B4A8',
      600: '#9A887C',
      700: '#736257',
      800: '#4D3F37',
      900: '#29211D',
    },
    obsidian: {
      50: '#F5F5F5',
      100: '#E5E5E5',
      200: '#CCCCCC',
      300: '#B3B3B3',
      400: '#808080',
      500: '#666666',
      600: '#4D4D4D',
      700: '#333333',
      800: '#1F1F1F',
      900: '#121212', // Dark slate/charcoal
      950: '#0A0A0A', // Premium rich dark
    },
  },

  // Functional semantic mappings
  semantic: {
    success: {
      light: '#EBF6EE',
      main: '#2E7D32',
      dark: '#1B5E20',
    },
    error: {
      light: '#FDF2F2',
      main: '#D32F2F',
      dark: '#C62828',
    },
    warning: {
      light: '#FFF9E6',
      main: '#ED6C02',
      dark: '#E65100',
    },
    info: {
      light: '#E8F4FD',
      main: '#0288D1',
      dark: '#01579B',
    },
  },
} as const;

// CSS Variable definitions
export const cssVariables = {
  brandGold: 'var(--color-brand-gold-500)',
  brandBlush: 'var(--color-brand-blush-400)',
  creamBg: 'var(--color-neutral-cream-100)',
  obsidianText: 'var(--color-neutral-obsidian-950)',
} as const;

export type ColorType = typeof colors;
