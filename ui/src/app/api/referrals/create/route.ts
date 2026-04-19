/**
 * POST /api/referrals/create
 * 
 * Generate a unique referral code for the authenticated user
 * Returns the code and referral link
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createReferral, getReferralsByUser, getReferralStats } from "@/lib/referrals";
import { track } from "@/lib/analytics";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user already has a referral code
    const existingReferrals = await getReferralsByUser(userId);
    const activeReferral = existingReferrals.find(r => r.status === "pending");
    
    if (activeReferral) {
      return NextResponse.json({
        code: activeReferral.code,
        link: `https://meok.ai/start?ref=${activeReferral.code}`,
        existing: true,
      });
    }

    // Create new referral
    const referral = await createReferral(userId);

    track("referral_code_created", {
      user_id: userId,
      code: referral.code,
    });

    return NextResponse.json({
      code: referral.code,
      link: `https://meok.ai/start?ref=${referral.code}`,
      existing: false,
    });
  } catch (error) {
    console.error("Create referral error:", error);
    return NextResponse.json(
      { error: "Failed to create referral code" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/referrals/create
 * 
 * Get user's referral stats and existing codes
 */
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [referrals, stats] = await Promise.all([
      getReferralsByUser(userId),
      getReferralStats(userId),
    ]);

    const activeCode = referrals.find(r => r.status === "pending")?.code;

    return NextResponse.json({
      code: activeCode,
      link: activeCode ? `https://meok.ai/start?ref=${activeCode}` : null,
      stats,
      referrals: referrals.map(r => ({
        code: r.code,
        status: r.status,
        createdAt: r.createdAt,
        convertedAt: r.convertedAt,
      })),
    });
  } catch (error) {
    console.error("Get referrals error:", error);
    return NextResponse.json(
      { error: "Failed to fetch referrals" },
      { status: 500 }
    );
  }
}
