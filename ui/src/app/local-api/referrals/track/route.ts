/**
 * POST /api/referrals/track
 * 
 * Track a referral conversion when a new user signs up with a referral code
 * Called from the signup flow or onboarding
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { trackReferralConversion } from "@/lib/referrals";
import { track } from "@/lib/analytics";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { code } = body;

    if (!code || typeof code !== "string") {
      return NextResponse.json(
        { error: "Referral code required" },
        { status: 400 }
      );
    }

    const result = await trackReferralConversion(code, userId);

    if (result.success) {
      track("referral_converted", {
        code,
        referee_id: userId,
        discount: result.discount,
      });

      return NextResponse.json({
        success: true,
        discount: result.discount,
        message: `Referral applied! You get ${result.discount}% off your first month.`,
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Track referral error:", error);
    return NextResponse.json(
      { error: "Failed to track referral" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/referrals/track
 * 
 * Validate a referral code (called during signup to show discount)
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json(
        { error: "Code parameter required" },
        { status: 400 }
      );
    }

    const { getReferralByCode } = await import("@/lib/referrals");
    const referral = await getReferralByCode(code);

    if (!referral) {
      return NextResponse.json(
        { valid: false, error: "Invalid referral code" },
        { status: 404 }
      );
    }

    if (referral.status !== "pending") {
      return NextResponse.json({
        valid: false,
        error: referral.status === "converted" 
          ? "Code already used" 
          : "Code expired",
      });
    }

    return NextResponse.json({
      valid: true,
      discount: 20,
      message: "20% off your first month",
    });
  } catch (error) {
    console.error("Validate referral error:", error);
    return NextResponse.json(
      { error: "Failed to validate code" },
      { status: 500 }
    );
  }
}
