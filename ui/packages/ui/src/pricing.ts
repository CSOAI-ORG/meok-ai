/**
 * Canonical Stripe products for the MEOK flagship surface.
 * Source: /Users/nicholas/meok-ai/AGENTS.md
 */
import type { PricingProduct } from "./components/PricingCard";

export const STRIPE_PRODUCTS: PricingProduct[] = [
  {
    id: "sovereign",
    name: "Sovereign",
    price: "£29/mo",
    sub: "compliance tier",
    description:
      "Audit trail + MCP fleet access + signed evidence chain. The sovereign starting point for regulated organisations.",
    href: "https://buy.stripe.com/9B67sNeoIcMObEx56o8k91S",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "£199/mo",
    sub: "compliance tier",
    description:
      "Full MCP fleet + monthly attestations + new-regulator alerts + expanded governance seats.",
    href: "https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "£1,499/mo",
    sub: "multi-tenant",
    description:
      "Council governance + custom rules + white-label portal + multi-region deploy. For global operators.",
    href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U",
    featured: false,
  },
  {
    id: "article-50-kit",
    name: "Article 50 Kit",
    price: "£999",
    sub: "one-time",
    description:
      "C2PA + SynthID + perceptual fingerprinting + Ed25519 attestations. EU Code of Practice compliant.",
    href: "https://buy.stripe.com/fZu00l4O8fZ07oh0Q88k91V",
    featured: false,
  },
  {
    id: "launch50",
    name: "LAUNCH50",
    price: "£499",
    sub: "£999 → £499, 50% off",
    description:
      "Article 50 Kit at half price. Limited time. Same kit, same delivery.",
    href: "https://buy.stripe.com/4gMcN7a8s6oq0ZTaqI8k91Z",
    featured: false,
  },
  {
    id: "quick-kit",
    name: "Quick Kit",
    price: "£9",
    sub: "one-time",
    description:
      "Test the kit on a small scale. C2PA manifest only, no watermark. Sample compliance.",
    href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W",
    featured: false,
  },
  {
    id: "audit-prep",
    name: "Audit-Prep",
    price: "£4,950",
    sub: "one-time",
    description:
      "Auditor-ready evidence pack aligned to ISO 42001 + ISO 42005 + EU AI Act. CEASAI-aligned.",
    href: "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X",
    featured: false,
  },
  {
    id: "watchdog-cert",
    name: "Watchdog Cert",
    price: "£4,950",
    sub: "one-time",
    description:
      "Third-party CEASAI certification. MEOK signs the cert. Auditor verifies offline.",
    href: "https://buy.stripe.com/9B6dRb2G0eUWcIBaqI8k91Y",
    featured: false,
  },
];

export const SUBSCRIPTION_PRODUCTS = STRIPE_PRODUCTS.filter((p) =>
  p.price.endsWith("/mo")
);

export const ONE_TIME_PRODUCTS = STRIPE_PRODUCTS.filter(
  (p) => !p.price.endsWith("/mo")
);
