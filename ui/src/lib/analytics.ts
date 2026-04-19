/**
 * MEOK Analytics & Tracking Layer - Server-Safe Module
 * 
 * Comprehensive event tracking for funnel optimization, user behavior,
 * and revenue attribution. No React hooks - safe for server components.
 */

// ── Event Types ────────────────────────────────────────────────────────────

export type AnalyticsEvent =
  // Acquisition
  | { name: "user_signup"; properties: { source: string; referrer?: string } }
  | { name: "user_login"; properties: { method: string } }
  
  // Onboarding
  | { name: "onboarding_start"; properties: { step: string } }
  | { name: "onboarding_step_complete"; properties: { step: number; totalSteps: number } }
  | { name: "onboarding_quiz_complete"; properties: { archetype: string; duration: number } }
  | { name: "onboarding_companion_created"; properties: { archetype: string; name: string } }
  | { name: "onboarding_first_message"; properties: { timeToFirstMessage: number } }
  
  // Engagement
  | { name: "message_sent"; properties: { tier: string; messageLength: number; taskType?: string } }
  | { name: "conversation_started"; properties: { source: string } }
  | { name: "feature_used"; properties: { feature: string; context?: string } }
  | { name: "page_view"; properties: { path: string; referrer?: string; timeOnPage?: number } }
  
  // Monetization
  | { name: "upgrade_prompt_shown"; properties: { trigger: string; tier: string } }
  | { name: "upgrade_click"; properties: { source: string; tier: string; discount?: number } }
  | { name: "checkout_started"; properties: { tier: string; interval: string; discount?: number } }
  | { name: "checkout_completed"; properties: { tier: string; interval: string; revenue: number } }
  | { name: "checkout_cancelled"; properties: { tier: string; step: string } }
  | { name: "marketplace_purchase"; properties: { item: string; price: number; category: string } }
  | { name: "microtransaction"; properties: { item: string; price: number } }
  | { name: "usage_event"; properties: { event_type: string; quantity: number; cost: number; user_tier: string } }
  | { name: "add_on_purchased"; properties: { add_on_id: string; price: number; billing_cycle: string } }
  | { name: "add_on_subscription_created"; properties: { add_on_id: string; price: number; billing_cycle: string; subscription_id: string } }
  | { name: "character_purchase_initiated"; properties: { character_id: string; rarity: string; price: number; creator_id?: string } }
  | { name: "character_purchase_completed"; properties: { character_id: string; price: number; creator_id?: string } }
  | { name: "referral_code_created"; properties: { user_id: string; code: string } }
  | { name: "referral_converted"; properties: { code: string; referee_id: string; discount?: number } }
  
  // Retention
  | { name: "session_start"; properties: { dayOfWeek: number; hourOfDay: number } }
  | { name: "session_end"; properties: { duration: number; messagesSent: number } }
  | { name: "return_visit"; properties: { daysSinceLastVisit: number } }
  | { name: "streak_milestone"; properties: { streak: number } }
  
  // Technical
  | { name: "error"; properties: { message: string; stack?: string; context?: string } }
  | { name: "performance"; properties: { metric: string; value: number; path: string } };

// ── Analytics Client ───────────────────────────────────────────────────────

class AnalyticsClient {
  private queue: AnalyticsEvent[] = [];
  private flushInterval: ReturnType<typeof setInterval> | null = null;
  private sessionId: string;
  private sessionStart: number;
  private userId: string | null = null;
  private isClient: boolean;

  constructor() {
    this.isClient = typeof window !== "undefined";
    this.sessionId = this.generateId();
    this.sessionStart = Date.now();
    
    if (this.isClient) {
      this.startFlushInterval();
      this.trackSessionStart();
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  setUserId(userId: string | null) {
    this.userId = userId;
  }

  track(
    name: AnalyticsEvent["name"],
    properties: Record<string, unknown>
  ) {
    const event = {
      name,
      properties: {
        ...properties,
        _sessionId: this.sessionId,
        _timestamp: Date.now(),
        _userId: this.userId,
      },
    } as unknown as AnalyticsEvent;

    this.queue.push(event);

    // Flush immediately for critical events
    if (["checkout_completed", "checkout_started", "upgrade_click"].includes(name)) {
      this.flush();
    }

    // Also send to Google Analytics if available (client-only)
    if (this.isClient) {
      this.sendToGA(name, properties);
    }
  }

  private sendToGA(name: string, properties: Record<string, unknown>) {
    const gtag = (window as unknown as { gtag?: (event: string, name: string, params: Record<string, unknown>) => void }).gtag;
    if (gtag) {
      gtag("event", name, properties);
    }
  }

  private async flush() {
    if (this.queue.length === 0) return;

    const batch = [...this.queue];
    this.queue = [];

    try {
      await fetch("/api/analytics/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ events: batch }),
      });
    } catch (err) {
      console.error("[Analytics] Failed to flush:", err);
      // Re-add to queue for retry
      this.queue.unshift(...batch);
    }
  }

  private startFlushInterval() {
    this.flushInterval = setInterval(() => {
      this.flush();
    }, 5000); // Flush every 5 seconds
  }

  private trackSessionStart() {
    const now = new Date();
    this.track("session_start", {
      dayOfWeek: now.getDay(),
      hourOfDay: now.getHours(),
    });
  }

  trackSessionEnd(messagesSent: number) {
    const duration = Date.now() - this.sessionStart;
    this.track("session_end", { duration, messagesSent });
    this.flush();
  }

  destroy() {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
    }
    this.flush();
  }
}

// Singleton instance (only created on client)
let analyticsInstance: AnalyticsClient | null = null;

export function getAnalytics(): AnalyticsClient {
  if (!analyticsInstance) {
    analyticsInstance = new AnalyticsClient();
  }
  return analyticsInstance;
}

// ── Simple Track Export ────────────────────────────────────────────────────

export function track(
  name: AnalyticsEvent["name"],
  properties: Record<string, unknown>
): void {
  const analytics = getAnalytics();
  analytics.track(name, properties);
}

// ── Funnel Tracking ────────────────────────────────────────────────────────

export const FUNNELS = {
  ONBOARDING: [
    "onboarding_start",
    "onboarding_step_complete",
    "onboarding_quiz_complete",
    "onboarding_companion_created",
    "onboarding_first_message",
  ],
  UPGRADE: [
    "upgrade_prompt_shown",
    "upgrade_click",
    "checkout_started",
    "checkout_completed",
  ],
  ENGAGEMENT: [
    "user_signup",
    "session_start",
    "conversation_started",
    "message_sent",
  ],
} as const;

export function calculateFunnelConversion(
  funnel: readonly string[],
  events: AnalyticsEvent[]
): number {
  const firstStep = funnel[0];
  const lastStep = funnel[funnel.length - 1];

  const firstCount = events.filter((e) => e.name === firstStep).length;
  const lastCount = events.filter((e) => e.name === lastStep).length;

  if (firstCount === 0) return 0;
  return (lastCount / firstCount) * 100;
}

// ── Cohort Analysis ────────────────────────────────────────────────────────

export interface CohortData {
  signupDate: string;
  users: number;
  retention: Record<number, number>; // Day -> % retained
}

export function calculateCohorts(
  signups: { userId: string; date: string }[],
  activeEvents: { userId: string; date: string }[]
): CohortData[] {
  const cohorts: Record<string, Set<string>> = {};

  // Group signups by week
  signups.forEach((signup) => {
    const week = getWeekStart(signup.date);
    if (!cohorts[week]) cohorts[week] = new Set();
    cohorts[week].add(signup.userId);
  });

  return Object.entries(cohorts).map(([week, userSet]) => {
    const retention: Record<number, number> = {};

    for (let day = 1; day <= 30; day++) {
      const activeUsers = new Set(
        activeEvents
          .filter((e) => {
            const daysSinceSignup =
              (new Date(e.date).getTime() - new Date(week).getTime()) /
              (1000 * 60 * 60 * 24);
            return daysSinceSignup >= day && daysSinceSignup < day + 1;
          })
          .map((e) => e.userId)
      );

      const retained = [...userSet].filter((id) => activeUsers.has(id)).length;
      retention[day] = (retained / userSet.size) * 100;
    }

    return {
      signupDate: week,
      users: userSet.size,
      retention,
    };
  });
}

function getWeekStart(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDay();
  const diff = date.getDate() - day;
  const weekStart = new Date(date.setDate(diff));
  return weekStart.toISOString().split("T")[0];
}

// ── Server-Safe Helper ─────────────────────────────────────────────────────

export function createServerTracker(userId?: string) {
  return {
    track: (
      name: AnalyticsEvent["name"],
      properties: Record<string, unknown>
    ) => {
      // On server, just log or store to DB directly
      // This is a simplified version for API routes
      const event = {
        name,
        properties: {
          ...properties,
          _timestamp: Date.now(),
          _userId: userId,
        },
      };
      
      // Fire-and-forget to API
      if (typeof fetch !== "undefined") {
        fetch("http://localhost:3000/api/analytics/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ events: [event] }),
        }).catch(() => {}); // Silent fail on server
      }
    },
  };
}
