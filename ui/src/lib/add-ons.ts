/**
 * MEOK Add-On Store
 * 
 * Premium features and upgrades beyond tier subscriptions.
 * Part of the $680K/mo revenue infrastructure.
 */

// ── Add-On Types ────────────────────────────────────────────────────────────

export interface AddOn {
  id: string;
  name: string;
  description: string;
  category: "storage" | "support" | "customization" | "api" | "power";
  pricing: {
    monthly?: number; // in cents (GBP) - required for subscriptions
    yearly?: number; // in cents (GBP)
    oneTime?: number; // in cents (GBP) for one-time purchases
  };
  features: string[];
  incompatibleWith?: string[]; // Add-on IDs that conflict
  requiresTier?: string; // Minimum tier required
  popular?: boolean;
  badge?: string; // e.g., "NEW", "POPULAR", "BETA"
}

export interface UserAddOn {
  addOnId: string;
  purchasedAt: Date;
  expiresAt?: Date; // undefined for lifetime purchases
  status: "active" | "cancelled" | "expired";
  stripeSubscriptionId?: string;
}

// ── Add-On Catalog ──────────────────────────────────────────────────────────

export const ADD_ONS: AddOn[] = [
  // Storage Add-Ons
  {
    id: "extra-storage-100mb",
    name: "Extra 100MB Memory",
    description: "Additional 100MB of persistent memory storage for your AI companion",
    category: "storage",
    pricing: { monthly: 499, yearly: 4990 }, // £4.99/mo or £49.90/yr (2 months free)
    features: ["100MB additional storage", "Works with all tiers", "Instant activation"],
    popular: true,
  },
  {
    id: "extra-storage-500mb",
    name: "Extra 500MB Memory",
    description: "Bulk storage upgrade for power users with extensive memory needs",
    category: "storage",
    pricing: { monthly: 1999, yearly: 19990 }, // £19.99/mo
    features: ["500MB additional storage", "20% cheaper per MB", "Priority sync"],
    badge: "BEST VALUE",
  },

  // Support Add-Ons
  {
    id: "priority-support",
    name: "Priority Support",
    description: "Skip the queue with 24-hour response guarantee from our team",
    category: "support",
    pricing: { monthly: 1499, yearly: 14990 }, // £14.99/mo
    features: [
      "24-hour response guarantee",
      "Direct Slack channel access",
      "Monthly check-in call",
      "Feature request prioritization",
    ],
    requiresTier: "sovereign",
  },

  // Customization Add-Ons
  {
    id: "custom-domain",
    name: "Custom Domain",
    description: "White-label your MEOK experience with your own domain",
    category: "customization",
    pricing: { monthly: 999, yearly: 9990 }, // £9.99/mo
    features: [
      "Use your own domain",
      "Free SSL certificate",
      "Custom branding colors",
      "Remove MEOK watermark",
    ],
    requiresTier: "sovereign",
    popular: true,
  },
  {
    id: "custom-character",
    name: "Custom Character Design",
    description: "Work with our team to create a bespoke AI character",
    category: "customization",
    pricing: { oneTime: 4999 }, // £49.99 one-time
    features: [
      "1-hour design consultation",
      "3 custom avatar variations",
      "Unique personality tuning",
      "Exclusive to your account",
    ],
    badge: "NEW",
  },

  // API Add-Ons
  {
    id: "api-access",
    name: "API Access",
    description: "Programmatic access to your MEOK companion via REST API",
    category: "api",
    pricing: { monthly: 1999, yearly: 19990 }, // £19.99/mo
    features: [
      "10,000 API calls/month",
      "WebSocket real-time access",
      "SDK for Node.js & Python",
      "99.9% uptime SLA",
    ],
    requiresTier: "sovereign",
    popular: true,
  },
  {
    id: "api-premium",
    name: "API Premium",
    description: "High-volume API access for integrations and applications",
    category: "api",
    pricing: { monthly: 4999, yearly: 49990 }, // £49.99/mo
    features: [
      "100,000 API calls/month",
      "Priority rate limits",
      "Dedicated API key",
      "Custom webhook endpoints",
      "Technical support included",
    ],
    requiresTier: "family",
    incompatibleWith: ["api-access"],
  },

  // Power User Add-Ons
  {
    id: "unlimited-voice",
    name: "Unlimited Voice",
    description: "Remove voice minute limits for unlimited conversations",
    category: "power",
    pricing: { monthly: 799, yearly: 7990 }, // £7.99/mo
    features: [
      "Unlimited voice minutes",
      "Higher quality audio",
      "Multiple voice options",
      "Voice cloning (coming soon)",
    ],
    popular: true,
  },
  {
    id: "ai-squad-premium",
    name: "AI Squad Premium",
    description: "Enhanced AI Squad capabilities for team collaboration",
    category: "power",
    pricing: { monthly: 1299, yearly: 12990 }, // £12.99/mo
    features: [
      "Up to 10 squad members",
      "Advanced role permissions",
      "Squad analytics dashboard",
      "Shared memory spaces",
    ],
    requiresTier: "sovereign",
  },
];

// ── Helper Functions ────────────────────────────────────────────────────────

export function getAddOn(id: string): AddOn | undefined {
  return ADD_ONS.find(a => a.id === id);
}

export function getAddOnsByCategory(category: AddOn["category"]): AddOn[] {
  return ADD_ONS.filter(a => a.category === category);
}

export function getPopularAddOns(): AddOn[] {
  return ADD_ONS.filter(a => a.popular);
}

export function getAvailableAddOns(userTier: string): AddOn[] {
  return ADD_ONS.filter(a => {
    if (a.requiresTier) {
      const tierOrder = ["explorer", "sovereign", "family", "byok"];
      return tierOrder.indexOf(userTier) >= tierOrder.indexOf(a.requiresTier);
    }
    return true;
  });
}

export function calculateAddOnPrice(
  addOnId: string,
  billingCycle: "monthly" | "yearly" = "monthly"
): number {
  const addOn = getAddOn(addOnId);
  if (!addOn) return 0;

  if (billingCycle === "yearly" && addOn.pricing.yearly) {
    return addOn.pricing.yearly;
  }

  return addOn.pricing.monthly || addOn.pricing.oneTime || 0;
}

// ── Purchase Logic ──────────────────────────────────────────────────────────

export interface AddOnPurchaseRequest {
  addOnId: string;
  userId: string;
  billingCycle: "monthly" | "yearly";
  paymentMethodId: string;
}

export interface AddOnPurchaseResult {
  success: boolean;
  subscriptionId?: string;
  clientSecret?: string; // For Stripe confirmation
  error?: string;
}

export async function validateAddOnPurchase(
  userId: string,
  addOnId: string,
  userTier: string,
  existingAddOns: UserAddOn[]
): Promise<{ valid: boolean; error?: string }> {
  const addOn = getAddOn(addOnId);
  
  if (!addOn) {
    return { valid: false, error: "Add-on not found" };
  }

  // Check tier requirement
  if (addOn.requiresTier) {
    const tierOrder = ["explorer", "sovereign", "family", "byok"];
    if (tierOrder.indexOf(userTier) < tierOrder.indexOf(addOn.requiresTier)) {
      return { 
        valid: false, 
        error: `Requires ${addOn.requiresTier} tier or higher` 
      };
    }
  }

  // Check incompatibilities
  if (addOn.incompatibleWith) {
    const hasConflict = existingAddOns.some(
      ea => ea.status === "active" && addOn.incompatibleWith?.includes(ea.addOnId)
    );
    if (hasConflict) {
      return { 
        valid: false, 
        error: "Incompatible with existing add-on. Please cancel the conflicting add-on first." 
      };
    }
  }

  // Check if already purchased
  const alreadyActive = existingAddOns.some(
    ea => ea.addOnId === addOnId && ea.status === "active"
  );
  if (alreadyActive) {
    return { valid: false, error: "Add-on already active" };
  }

  return { valid: true };
}
