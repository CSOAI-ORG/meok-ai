import Stripe from "stripe";

/**
 * Thrown when Stripe is not yet configured (missing secret key or a tier's
 * price ID). Callers should treat this as "self-serve checkout not available
 * yet" (503 / contact sales) rather than a server fault (500), so a missing
 * env var on Vercel degrades gracefully instead of erroring the user out.
 */
export class StripeConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StripeConfigError";
  }
}

// Server-side Stripe instance (lazy — avoids build-time throw when env not set)
let _stripe: Stripe | null = null;
export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new StripeConfigError("STRIPE_SECRET_KEY environment variable is not set");
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
// Governance tiers (Labs MCP product)
// ---------------------------------------------------------------------------
export const GOVERNANCE_TIERS = {
  'governance-smb': {
    name: 'Governance Starter',
    price_monthly: 49,
    features: ['1 industry pack', '500 API calls/day', 'Data persistence', 'Email support', 'Audit logging'],
  },
  'governance-professional': {
    name: 'Governance Pro',
    price_monthly: 149,
    features: ['Full compliance suite', '12 framework crosswalks', '2,000 API calls/day', 'Audit trail export', 'Priority support', '1 industry pack included'],
  },
  'governance-defence': {
    name: 'Governance Defence',
    price_monthly: 999,
    features: ['All 208 servers', 'Unlimited API calls', 'SSO / SAML', 'On-premise option', '99.9% SLA', 'Dedicated manager', 'Custom frameworks'],
  },
  'governance-enterprise': {
    name: 'Governance Enterprise',
    price_monthly: 2499,
    features: ['Everything in Defence', 'Multi-BU audit-grade separation', 'Custom verify domain', 'White-label option', 'Pay by invoice / PO', 'Dedicated CSM + SLA', 'Air-gapped deployment'],
  },
} as const;

export type GovernanceTier = keyof typeof GOVERNANCE_TIERS;

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
  tier: 'sovereign' | 'family' | 'byok' | GovernanceTier;
  interval: 'month' | 'year';
  successUrl: string;
  cancelUrl: string;
}): Promise<string> {
  const { userId, email, tier, interval, successUrl, cancelUrl } = params;

  let priceId: string;
  if (tier === 'governance-smb') {
    priceId = process.env.STRIPE_PRICE_GOVERNANCE_SMB_MONTHLY!;
  } else if (tier === 'governance-professional') {
    priceId = process.env.STRIPE_PRICE_GOVERNANCE_PRO_MONTHLY!;
  } else if (tier === 'governance-defence') {
    priceId = process.env.STRIPE_PRICE_GOVERNANCE_DEFENCE_MONTHLY!;
  } else if (tier === 'governance-enterprise') {
    priceId = process.env.STRIPE_PRICE_GOVERNANCE_ENTERPRISE_MONTHLY!;
  } else if (tier === 'sovereign') {
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
    throw new StripeConfigError(`Stripe price ID not configured for tier=${tier} interval=${interval}`);
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
