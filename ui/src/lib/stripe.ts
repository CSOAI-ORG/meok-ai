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

// ---------------------------------------------------------------------------
// Tiers (canonical, used by webhooks and UI)
// ---------------------------------------------------------------------------
export const TIERS = {
  explorer: {
    name: 'Explorer',
    price: 0,
    messages_per_day: 50,
    memory_days: 365, // sovereign memory — persistent
  },
  sovereign: {
    name: 'Sovereign',
    price_monthly: 12,
    price_annual: 120,
    messages_per_day: -1, // unlimited
  },
  family: {
    name: 'Family',
    price_monthly: 29,
    price_annual: 290,
    members: 5,
    messages_per_day: -1, // unlimited
  },
  byok: {
    name: 'BYOK',
    price_monthly: 5,
    price_annual: 50,
    messages_per_day: -1, // unlimited (uses user's own API keys)
  },
} as const;

export type Tier = keyof typeof TIERS;

// ---------------------------------------------------------------------------
// Checkout session helper
// ---------------------------------------------------------------------------

/**
 * Create a Stripe Checkout session for upgrading to a paid tier.
 * Returns the redirect URL to send the user to.
 */
export async function createCheckoutSession(params: {
  userId: string;
  email: string;
  tier: 'sovereign' | 'family' | 'byok';
  interval: 'month' | 'year';
  successUrl: string;
  cancelUrl: string;
}): Promise<string> {
  const { userId, email, tier, interval, successUrl, cancelUrl } = params;

  let priceId: string;
  if (tier === 'sovereign') {
    priceId = interval === 'month'
      ? process.env.STRIPE_PRICE_SOVEREIGN_MONTHLY!
      : process.env.STRIPE_PRICE_SOVEREIGN_ANNUAL!;
  } else if (tier === 'byok') {
    priceId = process.env.STRIPE_PRICE_BYOK_MONTHLY!; // BYOK is monthly-only
  } else {
    priceId = interval === 'month'
      ? process.env.STRIPE_PRICE_FAMILY_MONTHLY!
      : process.env.STRIPE_PRICE_FAMILY_ANNUAL!;
  }

  if (!priceId) {
    throw new Error(`Stripe price ID not configured for tier=${tier} interval=${interval}`);
  }

  const session = await getStripe().checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: email,
    line_items: [{ price: priceId, quantity: 1 }],
    metadata: { userId, tier },
    subscription_data: {
      trial_period_days: 14,
      metadata: { userId, tier },
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
    allow_promotion_codes: true,
    billing_address_collection: 'auto',
  });

  if (!session.url) {
    throw new Error('Stripe checkout session created but no URL returned');
  }

  return session.url;
}
