/** MEOK AI LABS — Referral System */

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Reward configuration for the referral programme */
export const REFERRAL_REWARDS = {
  /** Bond points awarded to the referrer per successful referral */
  referrerBondPoints: 50,
  /** Free trial days granted to the referred user */
  referredTrialDays: 7,
} as const;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Aggregate statistics for a single user's referral activity */
export interface ReferralStats {
  /** The user's unique referral code */
  code: string;
  /** How many users have signed up via this code */
  totalReferred: number;
  /** Cumulative bond points earned through referrals */
  totalBondEarned: number;
}

/** Stored referral record (placeholder — will be backed by DB) */
export interface ReferralRecord {
  /** The referral code that was used */
  code: string;
  /** userId of the person who referred */
  referrerId: string;
  /** userId of the person who was referred */
  referredId: string;
  /** ISO-8601 timestamp of when the referral was redeemed */
  redeemedAt: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Simple hash function (djb2) that converts a string into a numeric hash.
 * Deterministic — same input always produces the same output.
 */
function djb2Hash(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return hash >>> 0; // ensure unsigned 32-bit
}

/**
 * Generates a unique, deterministic 8-character alphanumeric referral code
 * derived from the user's ID.
 *
 * @param userId - The Clerk user ID (e.g. `user_2abc...`)
 * @returns An 8-character uppercase alphanumeric code
 */
export function generateReferralCode(userId: string): string {
  const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no ambiguous chars (0/O, 1/I)
  const hash1 = djb2Hash(userId);
  const hash2 = djb2Hash(userId + ':salt');

  // Combine both hashes into a 64-bit-ish space so we get 8 distinct chars
  const combined = BigInt(hash1) * BigInt(2 ** 32) + BigInt(hash2);

  let code = '';
  let remaining = combined;
  for (let i = 0; i < 8; i++) {
    const index = Number(remaining % BigInt(CHARSET.length));
    code += CHARSET[index];
    remaining = remaining / BigInt(CHARSET.length);
  }

  return code;
}

/**
 * Validates that a referral code has the correct format:
 * exactly 8 characters, uppercase alphanumeric (matching our charset).
 *
 * @param code - The code string to validate
 * @returns `true` if the format is valid
 */
export function validateReferralCode(code: string): boolean {
  if (typeof code !== 'string') return false;
  return /^[A-Z0-9]{8}$/.test(code);
}

/**
 * Build an empty ReferralStats object for a user who has no referrals yet.
 */
export function emptyStats(userId: string): ReferralStats {
  return {
    code: generateReferralCode(userId),
    totalReferred: 0,
    totalBondEarned: 0,
  };
}
