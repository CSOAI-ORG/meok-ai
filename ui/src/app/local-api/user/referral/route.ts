/** MEOK AI LABS — Referral API */

import { requireAuth } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { NextRequest, NextResponse } from 'next/server';
import {
  generateReferralCode,
  validateReferralCode,
  REFERRAL_REWARDS,
} from '@/lib/referral';
import {
  setReferralCode,
  getUserByReferralCode,
  hasRedeemedReferral,
  recordReferral,
  getReferralStats,
  createNotification,
} from '@/lib/db/user';

// GET /api/user/referral — Return current user's referral code + stats
export async function GET() {
  try {
    const authResult = await requireAuth();
    if (authResult.error) return authResult.error;
    const { userId } = authResult;

    const rateLimitResult = checkRateLimit(userId, 'explorer');
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const code = generateReferralCode(userId);

    // Persist the code to DB for lookup (idempotent — only sets if null)
    void setReferralCode(userId, code).catch(() => {});

    const stats = await getReferralStats(userId);

    return NextResponse.json({
      code,
      stats: {
        totalReferred: stats.totalReferred,
        totalBondEarned: stats.totalBondEarned,
      },
      rewards: REFERRAL_REWARDS,
    });
  } catch (err) {
    console.error('[user/referral GET] error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/user/referral — Redeem a referral code
export async function POST(req: NextRequest) {
  try {
    const authResult = await requireAuth();
    if (authResult.error) return authResult.error;
    const { userId } = authResult;

    const rateLimitResult = checkRateLimit(userId, 'explorer');
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const body = await req.json().catch(() => null) as { code?: string } | null;
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

    // Guard: user cannot redeem more than once
    const alreadyRedeemed = await hasRedeemedReferral(userId);
    if (alreadyRedeemed) {
      return NextResponse.json(
        { error: 'You have already redeemed a referral code.' },
        { status: 400 },
      );
    }

    // Look up the referrer by their code
    const referrerId = await getUserByReferralCode(code);
    if (!referrerId) {
      return NextResponse.json(
        { error: 'Referral code not found.' },
        { status: 404 },
      );
    }

    // Record the referral and award rewards
    await recordReferral(
      referrerId,
      userId,
      code,
      REFERRAL_REWARDS.referrerBondPoints,
      REFERRAL_REWARDS.referredTrialDays,
    );

    // Notify the referrer
    void createNotification(referrerId, {
      type: 'milestone',
      title: 'Referral Reward Earned!',
      message: `Someone joined MEOK using your referral code. You've earned ${REFERRAL_REWARDS.referrerBondPoints} bond points!`,
      metadata: { bond_points: REFERRAL_REWARDS.referrerBondPoints },
    }).catch(() => {});

    return NextResponse.json({
      success: true,
      reward: 'trial_extended',
      trialDays: REFERRAL_REWARDS.referredTrialDays,
      message: `Welcome! Your ${REFERRAL_REWARDS.referredTrialDays}-day trial extension has been applied.`,
    });
  } catch (err) {
    console.error('[user/referral POST] error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
