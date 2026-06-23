# `@meok/ui`

Minimal shared UI primitives for the MEOK flagship surface (`~/meok-ai/ui`).

## Scope

This package is the single source of truth for design tokens, layout primitives,
and reusable SaaS/compliance components that will be shared across the flagship
surface and the vertical apps being folded into `/apps/*`.

## Contents

| Export | Path | Purpose |
|--------|------|---------|
| Design tokens | `src/tokens.ts` + `src/styles/tokens.css` | Colors, spacing, typography (CSS variables + JS) |
| `Shell` / `Nav` / `Footer` | `src/components/Shell.tsx` | Layout shell with responsive nav and footer |
| `PricingCard` | `src/components/PricingCard.tsx` | Card using canonical Stripe products |
| `BFTVoteResult` | `src/components/BFTVoteResult.tsx` | Reusable BFT council vote display (extracted from Aethelgard panel) |
| Canonical products | `src/pricing.ts` | Live Stripe products from `meok-ai/AGENTS.md` |

## Usage

Import components directly via the workspace alias:

```tsx
import { Shell, PricingCard, STRIPE_PRODUCTS } from "@meok/ui";
```

Import tokens in your root CSS file (already done in `src/app/globals.css`):

```css
@import "@meok/ui/styles";
```

## Notes

- The package is private and consumed through the `tsconfig.json` path alias
  `@meok/ui` → `./packages/ui/src/index.ts`.
- Next.js resolves `@meok/ui` imports to the package source via the path alias,
  so no separate build step is required.
- Tailwind v4 tokens are defined in `src/styles/tokens.css` using `@theme` and
  `:root` CSS custom properties.
