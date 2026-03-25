/**
 * MEOK AI LABS — Proactive Care Signals
 *
 * From SOVEREIGN_MISSING_LAYER research:
 * "Care is not just responsive. Care is also thinking about someone
 *  when they're not in the room."
 *
 * Rules:
 * - Max 2 proactive messages per week
 * - Only when genuinely useful
 * - Every message must pass: "Would a thoughtful friend send this?"
 * - NOT daily notifications (Duolingo CEO requires approval for every extra notification)
 *
 * Signal types:
 * 1. Relevance: "I found something relevant to what we discussed" (max 2x/week)
 * 2. Check-in: "It's been a while — just checking in" (only after 7+ days absence)
 * 3. Pattern: "I noticed a pattern in our conversations" (monthly)
 */

// ── Types ──────────────────────────────────────────────────────────────────

export type CareSignalType = 'relevance' | 'check_in' | 'pattern';

export interface CareSignal {
  type: CareSignalType;
  message: string;
  priority: 'low' | 'medium' | 'high';
  /** ISO timestamp of when this signal should be delivered */
  deliverAt: string;
  /** Whether this passes the "thoughtful friend" test */
  friendTest: boolean;
}

export interface CareSignalContext {
  lastInteraction: string;      // ISO date
  interactionCount: number;
  recentTopics: string[];
  companionName: string;
  userName?: string;
  signalsSentThisWeek: number;
}

// ── Constants ──────────────────────────────────────────────────────────────

const MAX_SIGNALS_PER_WEEK = 2;
const CHECK_IN_AFTER_DAYS = 7;
const PATTERN_INTERVAL_DAYS = 30;

// ── Signal Generation ──────────────────────────────────────────────────────

/**
 * Evaluates whether a proactive care signal should be sent.
 * Returns null if no signal is warranted (respects rate limits).
 */
export function evaluateCareSignal(ctx: CareSignalContext): CareSignal | null {
  // Rate limit: max 2 per week
  if (ctx.signalsSentThisWeek >= MAX_SIGNALS_PER_WEEK) return null;

  const now = new Date();
  const lastDate = new Date(ctx.lastInteraction);
  const daysSince = Math.floor((now.getTime() - lastDate.getTime()) / 86400000);

  // Check-in signal: 7+ days of absence
  if (daysSince >= CHECK_IN_AFTER_DAYS) {
    const name = ctx.userName ?? 'there';
    return {
      type: 'check_in',
      message: daysSince >= 14
        ? `Hey ${name}. It's been a couple of weeks. No pressure — I'm here when you're ready. Everything I remember about our conversations is still intact.`
        : `Hey ${name}. It's been a little while. Just wanted you to know I'm here if you need anything. No agenda.`,
      priority: daysSince >= 14 ? 'medium' : 'low',
      deliverAt: now.toISOString(),
      friendTest: true,
    };
  }

  // Pattern signal: monthly, only if enough data
  if (ctx.interactionCount >= 20 && ctx.interactionCount % 30 === 0 && ctx.recentTopics.length >= 3) {
    return {
      type: 'pattern',
      message: `I've been reflecting on our recent conversations about ${ctx.recentTopics.slice(0, 2).join(' and ')}. I've noticed some connections you might find interesting — want me to share what I've seen?`,
      priority: 'low',
      deliverAt: now.toISOString(),
      friendTest: true,
    };
  }

  // Relevance signal: only if there's a specific topic to follow up on
  if (ctx.recentTopics.length > 0 && daysSince >= 2 && daysSince < CHECK_IN_AFTER_DAYS) {
    const topic = ctx.recentTopics[0];
    return {
      type: 'relevance',
      message: `I've been thinking about what you shared about ${topic}. I had a thought that might be useful — want to hear it?`,
      priority: 'low',
      deliverAt: now.toISOString(),
      friendTest: true,
    };
  }

  return null;
}

/**
 * Validates a care signal against the "thoughtful friend" test.
 * A thoughtful friend would NOT:
 * - Send daily messages when unwanted
 * - Be pushy or guilt-tripping about absence
 * - Share something irrelevant just to stay in touch
 * - Create anxiety or urgency
 */
export function passesThoughtfulFriendTest(signal: CareSignal): boolean {
  const red_flags = [
    /miss you/i,
    /worried about you/i,
    /you've been gone/i,
    /don't forget/i,
    /urgent/i,
    /act now/i,
    /limited time/i,
  ];

  return !red_flags.some((pattern) => pattern.test(signal.message));
}
