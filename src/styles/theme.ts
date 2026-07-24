import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

/**
 * BeautyVerse Design System Unified Theme Object
 * 
 * Aggregates design tokens (colors, typography, spacing) and adds layout styles
 * like shadows, border radiuses, and transitions.
 */

export const theme = {
  colors,
  typography,
  spacing,
  
  // Shadows - Soft, premium multi-layered, or glow accents
  shadows: {
    none: 'none',
    sm: '0 2px 8px -2px rgba(18, 18, 18, 0.04), 0 1px 4px -1px rgba(18, 18, 18, 0.02)',
    md: '0 12px 24px -10px rgba(111, 60, 64, 0.06), 0 4px 12px -4px rgba(18, 18, 18, 0.03)',
    lg: '0 24px 48px -18px rgba(18, 18, 18, 0.08), 0 8px 24px -8px rgba(18, 18, 18, 0.04)',
    glow: '0 0 20px 2px rgba(212, 175, 55, 0.15), 0 4px 12px -2px rgba(111, 60, 64, 0.05)',
    glass: '0 8px 32px 0 rgba(18, 18, 18, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
  },

  // Border Radius - Dior sleek sharp vs Rare Beauty soft rounded
  borderRadius: {
    none: '0px',
    xs: '2px',       // Apple style very small details
    sm: '4px',       // Dior classic sleek cards & buttons
    md: '8px',       // Modern minimalist
    lg: '12px',      // Rare Beauty card rounding
    xl: '16px',      // Cozy rounded containers
    '2xl': '24px',   // Large modal/dialog sheets
    full: '9999px',  // Pill buttons and circle avatars
  },

  // Transitions & Animations - Apple inspired fluid curves
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Micro-rebound
    fade: 'opacity 0.2s cubic-bezier(0.4, 0, 1, 1)',
    transform: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

export type ThemeType = typeof theme;
