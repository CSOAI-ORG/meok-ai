/**
 * MEOK Monetization Engine
 * 
 * Revenue optimization strategies and upgrade prompt logic.
 */

import { Tier } from "./stripe";

// ── Upgrade Trigger Points ─────────────────────────────────────────────────

export const UPGRADE_TRIGGERS = {
  // Message limit approaching
  MESSAGE_LIMIT_WARNING: 40, // Warn at 40/50 messages for free users
  MESSAGE_LIMIT_HARD: 50,
  
  // Feature gates
  RALPH_MODE_GATE: "ralph_mode",
  FAMILY_GATE: "family_circle",
  CUSTOM_CHARACTER_GATE: "custom_character",
  API_ACCESS_GATE: "api_access",
  GUARDIAN_ADVANCED_GATE: "guardian_advanced",
  
  // Usage-based triggers
  MEMORY_EPISODES_THRESHOLD: 100, // Prompt upgrade at 100 memories
  DAILY_VISITS_STREAK: 7, // After 7 days of active use
  CONVERSATION_DEPTH: 20, // After 20 messages in one conversation
} as const;

// ── Smart Upgrade Prompts ──────────────────────────────────────────────────

interface UpgradePrompt {
  id: string;
  trigger: string;
  tierRequired: Tier;
  headline: string;
  description: string;
  cta: string;
  urgency: "low" | "medium" | "high";
  discount?: number; // Percentage discount
}

export const UPGRADE_PROMPTS: UpgradePrompt[] = [
  {
    id: "message_limit_warning",
    trigger: "messages_approaching",
    tierRequired: "sovereign",
    headline: "You're on a roll! 🚀",
    description: "You've used 40 of your 50 daily messages. Upgrade to Sovereign for unlimited conversations.",
    cta: "Get Unlimited Messages",
    urgency: "medium",
  },
  {
    id: "message_limit_hit",
    trigger: "messages_exhausted",
    tierRequired: "sovereign",
    headline: "Daily limit reached",
    description: "You've used all 50 messages today. Your memories are safe, but your companion is resting. Upgrade for unlimited access.",
    cta: "Continue Chatting — Upgrade",
    urgency: "high",
    discount: 20, // 20% off first month
  },
  {
    id: "ralph_mode_discovery",
    trigger: "ralph_mode_gate",
    tierRequired: "family",
    headline: "Meet Ralph — Your Autonomous Agent",
    description: "Ralph can work while you sleep: research, draft emails, analyze data, and complete tasks. Pro users only.",
    cta: "Unlock Ralph Mode",
    urgency: "medium",
  },
  {
    id: "family_guardian",
    trigger: "family_gate",
    tierRequired: "family",
    headline: "Protect your loved ones",
    description: "Family Guardian monitors messages for scams, predators, and self-harm risks. Keep your family safe online.",
    cta: "Activate Family Guardian",
    urgency: "high",
  },
  {
    id: "custom_character",
    trigger: "custom_character_gate",
    tierRequired: "sovereign",
    headline: "Create your perfect companion",
    description: "Sovereign users can design custom characters with unique personalities, voices, and specialties.",
    cta: "Design Custom Character",
    urgency: "low",
  },
  {
    id: "memory_milestone",
    trigger: "memory_episodes",
    tierRequired: "sovereign",
    headline: "100 memories together! 💛",
    description: "Your bond is growing. Sovereign users get advanced memory search, export, and permanent archival.",
    cta: "Upgrade to Sovereign",
    urgency: "low",
    discount: 15,
  },
  {
    id: "power_user",
    trigger: "daily_streak",
    tierRequired: "sovereign",
    headline: "You're a power user! ⚡",
    description: "7 days straight — you clearly value your AI companion. Sovereign unlocks the full experience.",
    cta: "Go Sovereign — 20% Off",
    urgency: "medium",
    discount: 20,
  },
];

// ── Revenue Optimization ───────────────────────────────────────────────────

export const REVENUE_FEATURES = {
  // Annual billing incentives
  ANNUAL_DISCOUNT: {
    sovereign: 0.17, // 17% off (2 months free)
    family: 0.17,
    byok: 0.17,
  },
  
  // Upsell paths
  UPSELL_PATHS: {
    explorer: ["sovereign", "family"],
    sovereign: ["family"],
    family: [],
    byok: ["sovereign", "family"],
  },
  
  // Feature gating for maximum conversion
  FEATURE_GATES: {
    ralph_mode: { tier: "family", previewMessages: 3 },
    custom_characters: { tier: "sovereign", limit: 1 },
    guardian_advanced: { tier: "sovereign" },
    api_access: { tier: "family" },
    priority_support: { tier: "sovereign" },
    family_sharing: { tier: "family", minMembers: 2 },
  },
} as const;

// ── Conversion Tracking ────────────────────────────────────────────────────

export interface ConversionEvent {
  event: string;
  userId?: string;
  currentTier: Tier;
  targetTier: Tier;
  source: string; // Where the prompt was shown
  discount?: number;
  timestamp: string;
}

export function trackConversion(event: Omit<ConversionEvent, "timestamp">) {
  const fullEvent: ConversionEvent = {
    ...event,
    timestamp: new Date().toISOString(),
  };
  
  // Send to analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      event_category: "monetization",
      event_label: fullEvent.event,
      value: fullEvent.targetTier === "sovereign" ? 9 : fullEvent.targetTier === "family" ? 29 : 5,
    });
  }
  
  // Log for analysis
  console.log("[Monetization] Conversion event:", fullEvent);
}

// ── Dynamic Pricing ────────────────────────────────────────────────────────

interface PricingContext {
  userDaysActive: number;
  messagesSent: number;
  memoriesCreated: number;
  referrer?: string;
  country?: string;
}

export function calculateDynamicPrice(
  basePrice: number,
  tier: Tier,
  context: PricingContext
): { price: number; discount: number; reason: string } {
  let discount = 0;
  const reasons: string[] = [];
  
  // Power user discount (high engagement)
  if (context.messagesSent > 200 && context.memoriesCreated > 50) {
    discount += 0.15;
    reasons.push("Power user loyalty");
  }
  
  // Long-term free user (converted after 30+ days)
  if (context.userDaysActive > 30) {
    discount += 0.10;
    reasons.push("Long-term user appreciation");
  }
  
  // Referral discount
  if (context.referrer) {
    discount += 0.10;
    reasons.push("Referral bonus");
  }
  
  // Cap at 25% discount
  discount = Math.min(discount, 0.25);
  
  return {
    price: Math.round(basePrice * (1 - discount)),
    discount,
    reason: reasons.join(" + ") || "Standard pricing",
  };
}
