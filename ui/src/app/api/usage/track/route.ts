/**
 * POST /api/usage/track
 * 
 * Records metered usage events (messages, storage, API calls, etc.)
 * Authenticated endpoint - requires valid user session
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createUsageMeter, type UsageEventType } from "@/lib/usage-metering";
import { track } from "@/lib/analytics";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { eventType, quantity = 1, metadata, tier = "explorer" } = body;

    // Validate event type
    const validEventTypes: UsageEventType[] = [
      "message_sent",
      "message_received", 
      "storage_bytes",
      "api_call",
      "voice_minute",
      "image_generated",
      "character_purchased",
      "squad_created",
    ];

    if (!validEventTypes.includes(eventType)) {
      return NextResponse.json(
        { error: "Invalid event type", validTypes: validEventTypes },
        { status: 400 }
      );
    }

    // Track usage
    const meter = createUsageMeter(userId, tier);
    const result = await meter.trackEvent(eventType, quantity, metadata);

    // Track for analytics (fire-and-forget)
    track("usage_event", {
      event_type: eventType,
      quantity,
      cost: result.cost,
      user_tier: tier,
    });

    return NextResponse.json({
      success: true,
      eventType,
      quantity,
      cost: result.cost,
      warning: result.warning,
    });
  } catch (error) {
    console.error("Usage tracking error:", error);
    return NextResponse.json(
      { error: "Failed to track usage" },
      { status: 500 }
    );
  }
}
