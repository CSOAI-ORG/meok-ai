import Stripe from "stripe";

// Server-side Stripe instance (lazy — avoids build-time throw when env not set)
let _stripe: Stripe | null = null;
export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY environment variable is not set");
    _stripe = new Stripe(key, {
      apiVersion: "2026-02-25.clover",
      appInfo: { name: "MEOK Sovereign AI OS", version: "1.0.0" },
    });
  }
  return _stripe;
}
/** @deprecated use getStripe() */
export const stripe = new Proxy({} as Stripe, {
  get(_t, prop) { return (getStripe() as unknown as Record<string | symbol, unknown>)[prop]; },
});

// Pricing tiers
export const PLANS = {
  free: {
    name: "Explorer",
    priceId: process.env.STRIPE_PRICE_FREE || null,
    price: 0,
    features: ["1 character", "Basic conversation", "Community support"],
    limits: { messages: 50, characters: 1 },
  },
  pro: {
    name: "Sovereign",
    priceId: process.env.STRIPE_PRICE_PRO,
    price: 1200, // £12/month in pence
    features: ["3 characters", "Unlimited conversation", "Voice interaction", "Dashboard access", "Priority support"],
    limits: { messages: -1, characters: 3 },
  },
  premium: {
    name: "Sovereign Elite",
    priceId: process.env.STRIPE_PRICE_PREMIUM,
    price: 2900, // £29/month in pence
    features: [
      "Unlimited characters",
      "Family Guardian mode",
      "Ralph Mode (autonomous AI)",
      "API access",
      "Custom character creation",
      "Dedicated support",
    ],
    limits: { messages: -1, characters: -1 },
  },
} as const;

export type PlanId = keyof typeof PLANS;
