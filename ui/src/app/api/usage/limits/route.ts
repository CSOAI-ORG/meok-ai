/**
 * GET /api/usage/limits
 * 
 * Returns current usage and limits for the authenticated user
 * Used by client to show progress bars, warnings, and upgrade prompts
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createUsageMeter, USAGE_QUOTAS } from "@/lib/usage-metering";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's tier from query param or default to explorer
    const { searchParams } = new URL(req.url);
    const tier = searchParams.get("tier") || "explorer";

    const meter = createUsageMeter(userId, tier);
    const summary = await meter.getCurrentPeriodSummary();

    // Get quota info for the tier
    const quotas = USAGE_QUOTAS.filter(q => q.tier === tier);

    return NextResponse.json({
      userId,
      tier,
      period: summary.period,
      usage: summary.events,
      quotas: quotas.map(q => ({
        feature: q.feature,
        limit: q.limit,
        warningThreshold: q.warningThreshold,
        overagePrice: q.overagePrice,
      })),
      overages: summary.overages,
      totalCost: summary.totalCost,
    });
  } catch (error) {
    console.error("Usage limits error:", error);
    return NextResponse.json(
      { error: "Failed to fetch usage limits" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/usage/limits
 * 
 * Check if a specific operation would exceed limits
 * Returns whether operation is allowed and remaining quota
 */
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { eventType, quantity = 1, tier = "explorer" } = body;

    const meter = createUsageMeter(userId, tier);
    const check = await meter.checkLimit(eventType, quantity);

    return NextResponse.json({
      allowed: check.allowed,
      remaining: check.remaining,
      wouldExceed: check.wouldExceed,
      upgradeRequired: check.upgradeRequired,
    });
  } catch (error) {
    console.error("Usage check error:", error);
    return NextResponse.json(
      { error: "Failed to check usage limits" },
      { status: 500 }
    );
  }
}
