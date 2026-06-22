/**
 * GET /api/referrals/rewards
 * 
 * Get user's referral rewards (credit balance, available discounts)
 * Also shows reward history
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { 
  getReferralStats, 
  getAvailableCredit, 
  getRefereeDiscount 
} from "@/lib/referrals";
import { sql as db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [stats, credit, discount] = await Promise.all([
      getReferralStats(userId),
      getAvailableCredit(userId),
      getRefereeDiscount(userId),
    ]);

    // Get reward history
    const historyResult = await db.query(
      `SELECT 
         r.id,
         r.type,
         r.amount,
         r.status,
         r.created_at,
         r.applied_at,
         r.expires_at,
         ref.code as referral_code,
         ref.referee_id
       FROM referral_rewards r
       LEFT JOIN referrals ref ON r.referral_id = ref.id
       WHERE r.user_id = $1
       ORDER BY r.created_at DESC`,
      [userId]
    );

    const history = historyResult.rows.map((row: Record<string, unknown>) => ({
      id: row.id,
      type: row.type,
      amount: row.amount,
      status: row.status,
      createdAt: row.created_at,
      appliedAt: row.applied_at,
      expiresAt: row.expires_at,
      referralCode: row.referral_code,
    }));

    return NextResponse.json({
      stats,
      availableCredit: credit,
      availableDiscount: discount,
      history,
    });
  } catch (error) {
    console.error("Get rewards error:", error);
    return NextResponse.json(
      { error: "Failed to fetch rewards" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/referrals/rewards/apply
 * 
 * Apply referrer credit to a subscription payment
 * Called during checkout to reduce payment amount
 */
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { amount } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    const { useCredit } = await import("@/lib/referrals");
    const success = await useCredit(userId, amount);

    if (success) {
      return NextResponse.json({
        success: true,
        amountApplied: amount,
        message: `£${(amount / 100).toFixed(2)} credit applied`,
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Insufficient credit" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Apply credit error:", error);
    return NextResponse.json(
      { error: "Failed to apply credit" },
      { status: 500 }
    );
  }
}
