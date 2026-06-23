/**
 * Programmatic design tokens for MEOK UI components.
 * Mirrors the CSS custom properties defined in `./styles/tokens.css`.
 */

export const colors = {
  gold: "#c9a84c",
  goldDark: "#b8963e",
  navy: "#1a1a2e",
  deep: "#0d0c18",
  cream: "#FAF9F6",
  creamDark: "#F5F3EF",
  teal: "#2d9b8a",
  orange: "#e07340",
  muted: "#9a9a8a",
  border: "#e8e4dc",
  surface0: "#0a0a0f",
  surface1: "#13121f",
  surface2: "#1a1a2e",
  surface3: "#242340",
} as const;

export const spacing = {
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  18: "4.5rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  88: "22rem",
  96: "24rem",
  128: "32rem",
} as const;

export const typography = {
  fontFamily: `var(--font-dm-sans), system-ui, -apple-system, BlinkMacSystemFont, sans-serif`,
  fontSize: {
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  lineHeight: {
    none: "1",
    tight: "1.05",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.2em",
  },
} as const;

export const tokens = { colors, spacing, typography } as const;
