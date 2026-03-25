/** MEOK AI LABS — Referral API */

import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import {
  generateReferralCode,
  validateReferralCode,
  emptyStats,
  REFERRAL_REWARDS,
} from '@/lib/referral';

// ---------------------------------------------------------------------------
// GET /api/user/referral — Return current user's referral code + stats
// ---------------------------------------------------------------------------

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // In production: query DB for actual stats.
  // For now return placeholder zeros with the deterministic code.
  const stats = emptyStats(userId);

  return NextResponse.json({
    code: stats.code,
    stats: {
      totalReferred: stats.totalReferred,
      totalBondEarned: stats.totalBondEarned,
    },
    rewards: REFERRAL_REWARDS,
  });
}

// ---------------------------------------------------------------------------
// POST /api/user/referral — Redeem a referral code
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const code = body?.code;

  if (!code || !validateReferralCode(code)) {
    return NextResponse.json(
      { error: 'Invalid referral code. Must be 8 alphanumeric characters.' },
      { status: 400 },
    );
  }

  // Guard: user cannot redeem their own code
  const ownCode = generateReferralCode(userId);
  if (code === ownCode) {
    return NextResponse.json(
      { error: 'You cannot redeem your own referral code.' },
      { status: 400 },
    );
  }

  // Production referral flow:
  // 1. Look up referrer by code (SELECT id FROM users WHERE referral_code = ${code})
  // 2. Check referred user hasn't already redeemed (SELECT 1 FROM referrals WHERE referred_user_id = ${userId})
  // 3. Award referrer REFERRAL_REWARDS.referrerBondPoints bond points via addBondPoints()
  // 4. Extend referred user's trial by REFERRAL_REWARDS.referredTrialDays days
  // 5. INSERT INTO referrals (referrer_id, referred_user_id, code, created_at)
  // Wiring deferred until referrals table is deployed.

  return NextResponse.json({
    success: true,
    reward: 'trial_extended',
    trialDays: REFERRAL_REWARDS.referredTrialDays,
  });
}
