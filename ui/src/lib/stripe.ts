import Stripe from "stripe";

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
  appInfo: { name: "MEOK Sovereign AI OS", version: "1.0.0" },
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
