/**
 * MEOK A/B Testing Framework - Server-Safe Module
 * 
 * Experiment tracking and feature flag management for conversion optimization.
 * This file contains NO React hooks and is safe to import in server components.
 */

// ── Experiment Types ───────────────────────────────────────────────────────

export interface Experiment {
  id: string;
  name: string;
  description: string;
  variants: Record<string, ExperimentVariant>;
  weights: Record<string, number>; // Must sum to 1
  targetAudience?: (user: UserContext) => boolean;
  startDate: string;
  endDate?: string;
  metrics: string[];
}

interface ExperimentVariant {
  name: string;
  description: string;
  config: Record<string, unknown>;
}

interface UserContext {
  userId?: string;
  tier: string;
  daysSinceSignup: number;
  country?: string;
  device?: string;
  referrer?: string;
}

// ── Active Experiments ─────────────────────────────────────────────────────

export const ACTIVE_EXPERIMENTS: Experiment[] = [
  // Pricing Page Experiments
  {
    id: "pricing_headline_v1",
    name: "Pricing Page Headline",
    description: "Test which headline converts better on pricing page",
    variants: {
      control: {
        name: "Control",
        description: "Choose your sovereign AI companion",
        config: { headline: "Choose your sovereign AI companion", subheadline: "Free forever. Upgrade when you're ready." },
      },
      value_focused: {
        name: "Value Focused",
        description: "Emphasize value proposition",
        config: { headline: "Save 10+ hours every week", subheadline: "Your AI companion that remembers everything" },
      },
      social_proof: {
        name: "Social Proof",
        description: "Include social proof in headline",
        config: { headline: "Join 10,000+ sovereign AI users", subheadline: "The companion that never forgets you" },
      },
    },
    weights: { control: 0.34, value_focused: 0.33, social_proof: 0.33 },
    startDate: "2026-01-01",
    metrics: ["page_conversion", "time_on_page", "scroll_depth"],
  },

  // Upgrade Prompt Experiments
  {
    id: "upgrade_prompt_timing",
    name: "Upgrade Prompt Timing",
    description: "When should we show the upgrade prompt for message limits?",
    variants: {
      at_40: {
        name: "At 40 messages",
        description: "Show prompt at 80% usage",
        config: { threshold: 0.8, urgency: "medium" },
      },
      at_45: {
        name: "At 45 messages",
        description: "Show prompt at 90% usage",
        config: { threshold: 0.9, urgency: "high" },
      },
      at_limit: {
        name: "At limit only",
        description: "Only show when limit reached",
        config: { threshold: 1.0, urgency: "critical" },
      },
    },
    weights: { at_40: 0.34, at_45: 0.33, at_limit: 0.33 },
    startDate: "2026-01-01",
    metrics: ["upgrade_click_rate", "checkout_conversion", "user_frustration"],
  },

  // Discount Experiments
  {
    id: "discount_amount_v1",
    name: "First Month Discount",
    description: "What discount amount drives best conversion vs retention?",
    variants: {
      no_discount: {
        name: "No Discount",
        description: "Full price",
        config: { discount: 0, message: "Upgrade to Sovereign" },
      },
      ten_percent: {
        name: "10% Off",
        description: "Small discount",
        config: { discount: 10, message: "Save 10% on your first month" },
      },
      twenty_percent: {
        name: "20% Off",
        description: "Medium discount",
        config: { discount: 20, message: "Get 20% off — limited time" },
      },
      fifty_percent: {
        name: "50% Off",
        description: "Large discount",
        config: { discount: 50, message: "Half off your first month!" },
      },
    },
    weights: { no_discount: 0.25, ten_percent: 0.25, twenty_percent: 0.25, fifty_percent: 0.25 },
    startDate: "2026-01-01",
    metrics: ["conversion_rate", "first_month_retention", "ltv_3month"],
  },

  // Onboarding Experiments
  {
    id: "onboarding_length",
    name: "Onboarding Quiz Length",
    description: "Does shorter or longer onboarding improve completion?",
    variants: {
      three_questions: {
        name: "3 Questions",
        description: "Quick onboarding",
        config: { questionCount: 3, estimatedTime: "1 minute" },
      },
      five_questions: {
        name: "5 Questions",
        description: "Standard onboarding",
        config: { questionCount: 5, estimatedTime: "2 minutes" },
      },
      seven_questions: {
        name: "7 Questions",
        description: "Detailed onboarding",
        config: { questionCount: 7, estimatedTime: "3 minutes" },
      },
    },
    weights: { three_questions: 0.34, five_questions: 0.33, seven_questions: 0.33 },
    startDate: "2026-01-01",
    metrics: ["completion_rate", "first_message_time", "7day_retention"],
  },

  // Feature Discovery
  {
    id: "feature_highlight",
    name: "Dashboard Feature Highlight",
    description: "Which feature should we highlight for new users?",
    variants: {
      chat_focused: {
        name: "Chat Focused",
        description: "Emphasize chat capabilities",
        config: { highlightFeature: "chat", cta: "Start Chatting" },
      },
      memory_focused: {
        name: "Memory Focused",
        description: "Emphasize memory capabilities",
        config: { highlightFeature: "memory", cta: "Explore Memories" },
      },
      guardian_focused: {
        name: "Guardian Focused",
        description: "Emphasize safety features",
        config: { highlightFeature: "guardian", cta: "Activate Guardian" },
      },
    },
    weights: { chat_focused: 0.34, memory_focused: 0.33, guardian_focused: 0.33 },
    targetAudience: (user) => user.tier === "explorer",
    startDate: "2026-01-01",
    metrics: ["feature_engagement", "upgrade_conversion", "session_duration"],
  },
];

// ── Assignment Logic ───────────────────────────────────────────────────────

export function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

export function assignVariant(
  experimentId: string,
  userId: string,
  experiment: Experiment
): string {
  const hash = hashString(`${experimentId}:${userId}`);
  const normalized = hash / 2147483647; // Max 32-bit signed int
  
  let cumulative = 0;
  for (const [variantId, weight] of Object.entries(experiment.weights)) {
    cumulative += weight;
    if (normalized <= cumulative) {
      return variantId;
    }
  }
  
  return Object.keys(experiment.variants)[0];
}

// ── Experiment Results ─────────────────────────────────────────────────────

export interface ExperimentResult {
  experimentId: string;
  totalParticipants: number;
  variantResults: Record<string, {
    participants: number;
    conversions: number;
    conversionRate: number;
    confidenceInterval: [number, number];
    isWinner: boolean;
  }>;
  winner: string | null;
  confidence: number;
}

export function calculateExperimentResults(
  experiment: Experiment,
  events: { variant: string; converted: boolean }[]
): ExperimentResult {
  const variantResults: ExperimentResult["variantResults"] = {};
  
  // Group by variant
  const byVariant: Record<string, { converted: boolean }[]> = {};
  events.forEach((e) => {
    if (!byVariant[e.variant]) byVariant[e.variant] = [];
    byVariant[e.variant].push(e);
  });

  // Calculate stats for each variant
  let maxRate = 0;
  let winner: string | null = null;

  Object.entries(byVariant).forEach(([variant, data]) => {
    const converted = data.filter((d) => d.converted).length;
    const rate = converted / data.length;
    
    // Simple 95% CI using normal approximation
    const se = Math.sqrt((rate * (1 - rate)) / data.length);
    const ci: [number, number] = [rate - 1.96 * se, rate + 1.96 * se];

    variantResults[variant] = {
      participants: data.length,
      conversions: converted,
      conversionRate: rate,
      confidenceInterval: ci,
      isWinner: false,
    };

    if (rate > maxRate) {
      maxRate = rate;
      winner = variant;
    }
  });

  // Mark winner
  if (winner) {
    variantResults[winner].isWinner = true;
  }

  return {
    experimentId: experiment.id,
    totalParticipants: events.length,
    variantResults,
    winner,
    confidence: 0.95, // Placeholder
  };
}

// ── Server-Side Helpers (safe to call from API routes) ─────────────────────

export function getExperimentById(id: string): Experiment | undefined {
  return ACTIVE_EXPERIMENTS.find(e => e.id === id);
}

export function getAllExperiments(): Experiment[] {
  return ACTIVE_EXPERIMENTS;
}

export function getActiveExperimentsForDate(date: Date = new Date()): Experiment[] {
  return ACTIVE_EXPERIMENTS.filter(e => {
    const start = new Date(e.startDate);
    const end = e.endDate ? new Date(e.endDate) : null;
    return date >= start && (!end || date <= end);
  });
}
