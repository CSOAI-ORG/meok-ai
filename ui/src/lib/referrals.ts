/**
 * MEOK Referral Program
 * 
 * Viral growth engine: £10 credit for referrer, 20% off for referee.
 * Part of the $680K/mo revenue infrastructure.
 */

import { sql as db } from "@/lib/db";

// ── Types ───────────────────────────────────────────────────────────────────

export interface Referral {
  id: string;
  code: string;
  referrerId: string;
  refereeId?: string;
  status: "pending" | "converted" | "expired";
  createdAt: Date;
  convertedAt?: Date;
  rewardApplied: boolean;
}

export interface ReferralReward {
  id: string;
  userId: string;
  type: "referrer_credit" | "referee_discount";
  amount: number; // in cents (GBP)
  status: "pending" | "applied" | "expired";
  expiresAt: Date;
  referralId: string;
}

export interface ReferralStats {
  totalReferrals: number;
  converted: number;
  pending: number;
  totalEarned: number; // in cents
  availableCredit: number; // in cents
}

// ── Configuration ───────────────────────────────────────────────────────────

const REFERRAL_CONFIG = {
  referrerReward: 1000, // £10 credit
  refereeDiscount: 20, // 20% off
  codeLength: 8,
  expiryDays: 30,
  rewardExpiryDays: 365,
};

// ── Code Generation ─────────────────────────────────────────────────────────

function generateReferralCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < REFERRAL_CONFIG.codeLength; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

async function generateUniqueCode(): Promise<string> {
  let attempts = 0;
  while (attempts < 10) {
    const code = generateReferralCode();
    const existing = await db.query(
      `SELECT id FROM referrals WHERE code = $1`,
      [code]
    );
    if (existing.rows.length === 0) {
      return code;
    }
    attempts++;
  }
  throw new Error("Failed to generate unique referral code");
}

// ── Core Functions ──────────────────────────────────────────────────────────

export async function createReferral(referrerId: string): Promise<Referral> {
  const code = await generateUniqueCode();
  
  const result = await db.query(
    `INSERT INTO referrals (id, code, referrer_id, status, created_at, reward_applied)
     VALUES (gen_random_uuid(), $1, $2, 'pending', NOW(), false)
     RETURNING *`,
    [code, referrerId]
  );

  const row = result.rows[0];
  return {
    id: row.id,
    code: row.code,
    referrerId: row.referrer_id,
    refereeId: row.referee_id,
    status: row.status,
    createdAt: row.created_at,
    convertedAt: row.converted_at,
    rewardApplied: row.reward_applied,
  };
}

export async function getReferralByCode(code: string): Promise<Referral | null> {
  const result = await db.query(
    `SELECT * FROM referrals WHERE code = $1`,
    [code.toUpperCase()]
  );

  if (result.rows.length === 0) return null;

  const row = result.rows[0];
  return {
    id: row.id,
    code: row.code,
    referrerId: row.referrer_id,
    refereeId: row.referee_id,
    status: row.status,
    createdAt: row.created_at,
    convertedAt: row.converted_at,
    rewardApplied: row.reward_applied,
  };
}

export async function trackReferralConversion(
  code: string,
  refereeId: string
): Promise<{ success: boolean; discount?: number; error?: string }> {
  const referral = await getReferralByCode(code);

  if (!referral) {
    return { success: false, error: "Invalid referral code" };
  }

  if (referral.referrerId === refereeId) {
    return { success: false, error: "Cannot use your own referral code" };
  }

  if (referral.status !== "pending") {
    return { success: false, error: "Referral code already used" };
  }

  // Check expiry
  const daysSinceCreated = (Date.now() - referral.createdAt.getTime()) / (1000 * 60 * 60 * 24);
  if (daysSinceCreated > REFERRAL_CONFIG.expiryDays) {
    await db.query(
      `UPDATE referrals SET status = 'expired' WHERE id = $1`,
      [referral.id]
    );
    return { success: false, error: "Referral code expired" };
  }

  // Mark as converted
  await db.query(
    `UPDATE referrals 
     SET status = 'converted', referee_id = $1, converted_at = NOW()
     WHERE id = $2`,
    [refereeId, referral.id]
  );

  // Create rewards
  const rewardExpiry = new Date();
  rewardExpiry.setDate(rewardExpiry.getDate() + REFERRAL_CONFIG.rewardExpiryDays);

  // Referrer reward (credit)
  await db.query(
    `INSERT INTO referral_rewards (id, user_id, type, amount, status, expires_at, referral_id)
     VALUES (gen_random_uuid(), $1, 'referrer_credit', $2, 'pending', $3, $4)`,
    [referral.referrerId, REFERRAL_CONFIG.referrerReward, rewardExpiry, referral.id]
  );

  // Referee reward (discount)
  await db.query(
    `INSERT INTO referral_rewards (id, user_id, type, amount, status, expires_at, referral_id)
     VALUES (gen_random_uuid(), $1, 'referee_discount', $2, 'pending', $3, $4)`,
    [refereeId, REFERRAL_CONFIG.refereeDiscount, rewardExpiry, referral.id]
  );

  return {
    success: true,
    discount: REFERRAL_CONFIG.refereeDiscount,
  };
}

export async function applyReferrerReward(
  referralId: string
): Promise<void> {
  await db.query(
    `UPDATE referral_rewards 
     SET status = 'applied', applied_at = NOW()
     WHERE referral_id = $1 AND type = 'referrer_credit'`,
    [referralId]
  );

  await db.query(
    `UPDATE referrals SET reward_applied = true WHERE id = $1`,
    [referralId]
  );
}

export async function getReferralStats(userId: string): Promise<ReferralStats> {
  const referralsResult = await db.query(
    `SELECT 
       COUNT(*) as total,
       COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted,
       COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending
     FROM referrals WHERE referrer_id = $1`,
    [userId]
  );

  const rewardsResult = await db.query(
    `SELECT 
       COALESCE(SUM(CASE WHEN status = 'applied' THEN amount ELSE 0 END), 0) as earned,
       COALESCE(SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END), 0) as available
     FROM referral_rewards 
     WHERE user_id = $1 AND type = 'referrer_credit'`,
    [userId]
  );

  return {
    totalReferrals: parseInt(referralsResult.rows[0].total),
    converted: parseInt(referralsResult.rows[0].converted),
    pending: parseInt(referralsResult.rows[0].pending),
    totalEarned: parseInt(rewardsResult.rows[0].earned),
    availableCredit: parseInt(rewardsResult.rows[0].available),
  };
}

export async function getReferralsByUser(userId: string): Promise<Referral[]> {
  const result = await db.query(
    `SELECT * FROM referrals WHERE referrer_id = $1 ORDER BY created_at DESC`,
    [userId]
  );

  return result.rows.map((row: Record<string, unknown>) => ({
    id: row.id,
    code: row.code,
    referrerId: row.referrer_id,
    refereeId: row.referee_id,
    status: row.status,
    createdAt: row.created_at,
    convertedAt: row.converted_at,
    rewardApplied: row.reward_applied,
  }));
}

export async function getAvailableCredit(userId: string): Promise<number> {
  const result = await db.query(
    `SELECT COALESCE(SUM(amount), 0) as credit
     FROM referral_rewards 
     WHERE user_id = $1 
     AND type = 'referrer_credit' 
     AND status = 'pending'
     AND expires_at > NOW()`,
    [userId]
  );

  return parseInt(result.rows[0].credit);
}

export async function useCredit(userId: string, amount: number): Promise<boolean> {
  const available = await getAvailableCredit(userId);
  
  if (available < amount) {
    return false;
  }

  // Mark credit as used
  await db.query(
    `UPDATE referral_rewards 
     SET status = 'applied', applied_at = NOW()
     WHERE id IN (
       SELECT id FROM referral_rewards 
       WHERE user_id = $1 
       AND type = 'referrer_credit' 
       AND status = 'pending'
       ORDER BY expires_at ASC
       LIMIT 1
     )`,
    [userId]
  );

  return true;
}

// ── Discount Application ────────────────────────────────────────────────────

export async function getRefereeDiscount(userId: string): Promise<number> {
  const result = await db.query(
    `SELECT amount FROM referral_rewards 
     WHERE user_id = $1 
     AND type = 'referee_discount' 
     AND status = 'pending'
     AND expires_at > NOW()
     LIMIT 1`,
    [userId]
  );

  if (result.rows.length === 0) return 0;
  return parseInt(result.rows[0].amount);
}

export async function applyRefereeDiscount(userId: string): Promise<void> {
  await db.query(
    `UPDATE referral_rewards 
     SET status = 'applied', applied_at = NOW()
     WHERE user_id = $1 AND type = 'referee_discount' AND status = 'pending'`,
    [userId]
  );
}
