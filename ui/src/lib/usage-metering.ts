/**
 * MEOK Usage-Based Billing System
 * 
 * Tracks metered usage (messages, storage, API calls) and calculates overages.
 * Part of the $680K/mo revenue infrastructure.
 */

import { sql as db } from "@/lib/db";

// ── Usage Types ─────────────────────────────────────────────────────────────

export type UsageEventType = 
  | "message_sent"
  | "message_received"
  | "storage_bytes"
  | "api_call"
  | "voice_minute"
  | "image_generated"
  | "character_purchased"
  | "squad_created";

export interface UsageEvent {
  id?: string;
  userId: string;
  eventType: UsageEventType;
  quantity: number;
  cost: number; // In cents (GBP)
  metadata?: Record<string, unknown>;
  timestamp: Date;
}

export interface UsageQuota {
  tier: string;
  feature: string;
  limit: number;
  overagePrice: number; // Price per unit in cents
  warningThreshold: number; // 0.0 - 1.0
}

export interface UsageSummary {
  userId: string;
  period: { start: Date; end: Date };
  events: Record<UsageEventType, { count: number; cost: number }>;
  totalCost: number;
  overages: Array<{ feature: string; exceededBy: number; cost: number }>;
}

// ── Tier Configuration ──────────────────────────────────────────────────────

export const USAGE_QUOTAS: UsageQuota[] = [
  // Explorer (Free) Tier
  { tier: "explorer", feature: "messages", limit: 50, overagePrice: 2, warningThreshold: 0.8 },
  { tier: "explorer", feature: "storage_mb", limit: 10, overagePrice: 10, warningThreshold: 0.9 },
  { tier: "explorer", feature: "api_calls", limit: 100, overagePrice: 1, warningThreshold: 1.0 },
  { tier: "explorer", feature: "voice_minutes", limit: 0, overagePrice: 5, warningThreshold: 0 },
  
  // Sovereign Tier
  { tier: "sovereign", feature: "messages", limit: 500, overagePrice: 1, warningThreshold: 0.9 },
  { tier: "sovereign", feature: "storage_mb", limit: 100, overagePrice: 5, warningThreshold: 0.95 },
  { tier: "sovereign", feature: "api_calls", limit: 1000, overagePrice: 0, warningThreshold: 1.0 },
  { tier: "sovereign", feature: "voice_minutes", limit: 60, overagePrice: 3, warningThreshold: 0.8 },
  
  // Family Tier
  { tier: "family", feature: "messages", limit: 2000, overagePrice: 0, warningThreshold: 1.0 },
  { tier: "family", feature: "storage_mb", limit: 500, overagePrice: 2, warningThreshold: 0.95 },
  { tier: "family", feature: "api_calls", limit: 5000, overagePrice: 0, warningThreshold: 1.0 },
  { tier: "family", feature: "voice_minutes", limit: 300, overagePrice: 2, warningThreshold: 0.9 },
  
  // BYOK Tier (Unlimited, no overages)
  { tier: "byok", feature: "messages", limit: Infinity, overagePrice: 0, warningThreshold: 1.0 },
  { tier: "byok", feature: "storage_mb", limit: Infinity, overagePrice: 0, warningThreshold: 1.0 },
  { tier: "byok", feature: "api_calls", limit: Infinity, overagePrice: 0, warningThreshold: 1.0 },
  { tier: "byok", feature: "voice_minutes", limit: Infinity, overagePrice: 0, warningThreshold: 1.0 },
];

// ── Usage Tracking ──────────────────────────────────────────────────────────

export class UsageMeter {
  private userId: string;
  private tier: string;

  constructor(userId: string, tier: string) {
    this.userId = userId;
    this.tier = tier;
  }

  /**
   * Record a usage event and calculate cost
   */
  async trackEvent(
    eventType: UsageEventType,
    quantity: number = 1,
    metadata?: Record<string, unknown>
  ): Promise<{ accepted: boolean; cost: number; warning?: string }> {
    const cost = this.calculateEventCost(eventType, quantity);
    
    const event: UsageEvent = {
      userId: this.userId,
      eventType,
      quantity,
      cost,
      metadata,
      timestamp: new Date(),
    };

    // Store event (fire-and-forget for performance)
    this.persistEvent(event).catch(console.error);

    // Check for warnings
    const warning = await this.checkWarningThreshold(eventType);

    return {
      accepted: true,
      cost,
      warning,
    };
  }

  /**
   * Check if user has exceeded their limit
   */
  async checkLimit(eventType: UsageEventType, requestedQuantity: number = 1): Promise<{
    allowed: boolean;
    remaining: number;
    wouldExceed: boolean;
    upgradeRequired: boolean;
  }> {
    const quota = this.getQuota(eventType);
    if (!quota || quota.limit === Infinity) {
      return { allowed: true, remaining: Infinity, wouldExceed: false, upgradeRequired: false };
    }

    const currentUsage = await this.getCurrentPeriodUsage(eventType);
    const remaining = Math.max(0, quota.limit - currentUsage);
    const wouldExceed = (currentUsage + requestedQuantity) > quota.limit;

    return {
      allowed: !wouldExceed || quota.overagePrice > 0,
      remaining,
      wouldExceed,
      upgradeRequired: wouldExceed && quota.overagePrice === 0,
    };
  }

  /**
   * Get usage summary for current billing period
   */
  async getCurrentPeriodSummary(): Promise<UsageSummary> {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    // Query from database
    const events = await db.query(
      `SELECT event_type, SUM(quantity) as total_qty, SUM(cost) as total_cost
       FROM usage_events 
       WHERE user_id = $1 
       AND timestamp >= $2
       GROUP BY event_type`,
      [this.userId, startOfMonth]
    );

    const summary: UsageSummary = {
      userId: this.userId,
      period: { start: startOfMonth, end: now },
      events: {} as Record<UsageEventType, { count: number; cost: number }>,
      totalCost: 0,
      overages: [],
    };

    for (const row of events.rows) {
      const eventType = row.event_type as UsageEventType;
      summary.events[eventType] = {
        count: parseInt(row.total_qty),
        cost: parseInt(row.total_cost),
      };
      summary.totalCost += parseInt(row.total_cost);
    }

    // Calculate overages
    for (const quota of USAGE_QUOTAS.filter(q => q.tier === this.tier)) {
      const eventType = this.mapFeatureToEventType(quota.feature);
      const usage = summary.events[eventType]?.count || 0;
      if (usage > quota.limit) {
        const exceededBy = usage - quota.limit;
        summary.overages.push({
          feature: quota.feature,
          exceededBy,
          cost: exceededBy * quota.overagePrice,
        });
      }
    }

    return summary;
  }

  // ── Private Helpers ───────────────────────────────────────────────────────

  private calculateEventCost(eventType: UsageEventType, quantity: number): number {
    // Base costs per event type (in cents)
    const baseCosts: Record<UsageEventType, number> = {
      message_sent: 0,
      message_received: 0,
      storage_bytes: 0,
      api_call: 0,
      voice_minute: 0,
      image_generated: 5,
      character_purchased: 0,
      squad_created: 0,
    };

    return (baseCosts[eventType] || 0) * quantity;
  }

  private getQuota(eventType: UsageEventType): UsageQuota | undefined {
    const feature = this.mapEventTypeToFeature(eventType);
    return USAGE_QUOTAS.find(q => q.tier === this.tier && q.feature === feature);
  }

  private mapEventTypeToFeature(eventType: UsageEventType): string {
    const mapping: Record<UsageEventType, string> = {
      message_sent: "messages",
      message_received: "messages",
      storage_bytes: "storage_mb",
      api_call: "api_calls",
      voice_minute: "voice_minutes",
      image_generated: "images",
      character_purchased: "characters",
      squad_created: "squads",
    };
    return mapping[eventType];
  }

  private mapFeatureToEventType(feature: string): UsageEventType {
    const mapping: Record<string, UsageEventType> = {
      messages: "message_sent",
      storage_mb: "storage_bytes",
      api_calls: "api_call",
      voice_minutes: "voice_minute",
    };
    return mapping[feature] || "api_call";
  }

  private async persistEvent(event: UsageEvent): Promise<void> {
    try {
      await db.query(
        `INSERT INTO usage_events (id, user_id, event_type, quantity, cost, metadata, timestamp)
         VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6)`,
        [event.userId, event.eventType, event.quantity, event.cost, JSON.stringify(event.metadata || {}), event.timestamp]
      );
    } catch (error) {
      console.error("Failed to persist usage event:", error);
    }
  }

  private async getCurrentPeriodUsage(eventType: UsageEventType): Promise<number> {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    try {
      const result = await db.query(
        `SELECT COALESCE(SUM(quantity), 0) as total
         FROM usage_events 
         WHERE user_id = $1 
         AND event_type = $2
         AND timestamp >= $3`,
        [this.userId, eventType, startOfMonth]
      );
      return parseInt(result.rows[0]?.total || 0);
    } catch {
      return 0;
    }
  }

  private async checkWarningThreshold(eventType: UsageEventType): Promise<string | undefined> {
    const quota = this.getQuota(eventType);
    if (!quota || quota.warningThreshold === 0) return undefined;

    const currentUsage = await this.getCurrentPeriodUsage(eventType);
    const ratio = currentUsage / quota.limit;

    if (ratio >= 1) {
      return `limit_exceeded`;
    } else if (ratio >= quota.warningThreshold) {
      return `approaching_limit:${Math.round(ratio * 100)}%`;
    }

    return undefined;
  }
}

// ── Singleton Export ────────────────────────────────────────────────────────

export function createUsageMeter(userId: string, tier: string): UsageMeter {
  return new UsageMeter(userId, tier);
}
