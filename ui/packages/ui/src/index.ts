// ── Design tokens ──
export * from "./tokens";

// ── Styles ──
// Import in your root CSS file:
// @import "@meok/ui/styles";

// ── Layout primitives ──
export { Nav, type NavProps, type NavLink } from "./components/Nav";
export { Footer, type FooterProps, type FooterColumn } from "./components/Footer";
export { Shell, type ShellProps } from "./components/Shell";

// ── Pricing ──
export { PricingCard, type PricingCardProps, type PricingProduct } from "./components/PricingCard";
export {
  STRIPE_PRODUCTS,
  SUBSCRIPTION_PRODUCTS,
  ONE_TIME_PRODUCTS,
} from "./pricing";

// ── BFT governance ──
export {
  BFTVoteResult,
  type BFTVoteResultProps,
  type BFTVoteResultData,
  type BFTAgentVote,
  type BFTVoteValue,
} from "./components/BFTVoteResult";

// ── Utilities ──
export { cn } from "./lib/utils";
