/**
 * MEOK AI LABS — In-Memory Sliding Window Rate Limiter
 *
 * Token bucket algorithm with daily refill at midnight UTC.
 * No Redis dependency — suitable for single-instance deployments.
 * For multi-instance, swap the Map for a shared store.
 */

export type RateLimitTier = 'explorer' | 'sovereign' | 'family';

interface TokenBucket {
  tokens: number;
  lastRefill: number;
}

const TIER_LIMITS: Record<RateLimitTier, number> = {
  explorer: 100,   // 100 requests per day
  sovereign: 1000, // 1000 requests per day
  family: -1,      // unlimited
};

/** In-memory store — keyed by userId */
const buckets = new Map<string, TokenBucket>();

/**
 * Returns the epoch-ms timestamp for the next midnight UTC.
 */
function nextMidnightUTC(): number {
  const now = new Date();
  const tomorrow = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + 1,
    0, 0, 0, 0,
  ));
  return tomorrow.getTime();
}

/**
 * Returns the epoch-ms timestamp for midnight UTC today (start of current window).
 */
function todayMidnightUTC(): number {
  const now = new Date();
  return Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    0, 0, 0, 0,
  );
}

/**
 * Refill the bucket if we've crossed into a new UTC day.
 */
function maybeRefill(bucket: TokenBucket, tier: RateLimitTier): void {
  const windowStart = todayMidnightUTC();
  if (bucket.lastRefill < windowStart) {
    bucket.tokens = TIER_LIMITS[tier];
    bucket.lastRefill = Date.now();
  }
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

/**
 * Check and consume one token from the rate limit bucket for a user.
 *
 * @param userId - Unique user identifier
 * @param tier   - User's subscription tier
 * @returns Rate limit result with remaining tokens and reset time
 */
export function checkRateLimit(userId: string, tier: RateLimitTier): RateLimitResult {
  const limit = TIER_LIMITS[tier];

  // Unlimited tier — always allow
  if (limit === -1) {
    return { allowed: true, remaining: Infinity, resetAt: 0 };
  }

  let bucket = buckets.get(userId);

  if (!bucket) {
    bucket = { tokens: limit, lastRefill: Date.now() };
    buckets.set(userId, bucket);
  }

  maybeRefill(bucket, tier);

  const resetAt = nextMidnightUTC();

  if (bucket.tokens <= 0) {
    return { allowed: false, remaining: 0, resetAt };
  }

  bucket.tokens -= 1;
  return { allowed: true, remaining: bucket.tokens, resetAt };
}

/**
 * Peek at remaining tokens without consuming one.
 */
export function getRemainingTokens(userId: string, tier: RateLimitTier): number {
  const limit = TIER_LIMITS[tier];
  if (limit === -1) return Infinity;

  const bucket = buckets.get(userId);
  if (!bucket) return limit;

  maybeRefill(bucket, tier);
  return bucket.tokens;
}

/**
 * Clear all buckets — useful for testing.
 */
export function resetAllBuckets(): void {
  buckets.clear();
}
