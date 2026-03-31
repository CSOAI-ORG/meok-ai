/**
 * MEOK AI LABS — Rate Limiter (Redis-backed with Map fallback)
 *
 * Token bucket algorithm with daily refill at midnight UTC.
 * Storage: Upstash Redis when configured, in-process Map fallback.
 * KV layer (kv-cache.ts) handles the backend switch automatically.
 */

import { kv } from '@/lib/kv-cache';

export type RateLimitTier = 'explorer' | 'sovereign' | 'family';

interface TokenBucket { tokens: number; lastRefill: number; }

const TIER_LIMITS: Record<RateLimitTier, number> = {
  explorer: 100, sovereign: 1000, family: -1,
};

function nextMidnightUTC(): number {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)).getTime();
}

function todayMidnightUTC(): number {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
}

function secondsUntilMidnight(): number {
  return Math.max(1, Math.floor((nextMidnightUTC() - Date.now()) / 1000));
}

function kvKey(userId: string): string {
  return `meok:rl:${userId}:${new Date().toISOString().slice(0, 10)}`;
}

export interface RateLimitResult {
  allowed: boolean; remaining: number; resetAt: number;
}

/** Async Redis-backed rate limit — use in new routes */
export async function checkRateLimitAsync(userId: string, tier: RateLimitTier): Promise<RateLimitResult> {
  const limit = TIER_LIMITS[tier];
  if (limit === -1) return { allowed: true, remaining: Infinity, resetAt: 0 };
  const key = kvKey(userId);
  const resetAt = nextMidnightUTC();
  const ttl = secondsUntilMidnight();
  let bucket = await kv.get<TokenBucket>(key);
  if (!bucket || bucket.lastRefill < todayMidnightUTC()) {
    bucket = { tokens: limit - 1, lastRefill: Date.now() };
    await kv.set(key, bucket, { ex: ttl });
    return { allowed: true, remaining: bucket.tokens, resetAt };
  }
  if (bucket.tokens <= 0) return { allowed: false, remaining: 0, resetAt };
  bucket.tokens -= 1;
  await kv.set(key, bucket, { ex: ttl });
  return { allowed: true, remaining: bucket.tokens, resetAt };
}

/** Sync shim for backwards compat — uses in-process Map */
const _sb = new Map<string, TokenBucket>();
const MAX_BUCKET_ENTRIES = 10_000;
let _lastCleanup = Date.now();

/** Prune stale entries from the in-memory rate limit map */
function pruneStaleEntries() {
  if (Date.now() - _lastCleanup < 60_000) return; // at most once per minute
  _lastCleanup = Date.now();
  const today = new Date().toISOString().slice(0, 10);
  for (const key of _sb.keys()) {
    if (!key.endsWith(today)) _sb.delete(key);
  }
  // Hard cap as safety net
  if (_sb.size > MAX_BUCKET_ENTRIES) {
    const excess = _sb.size - MAX_BUCKET_ENTRIES;
    const iter = _sb.keys();
    for (let i = 0; i < excess; i++) { const k = iter.next().value; if (k) _sb.delete(k); }
  }
}

export function checkRateLimit(userId: string, tier: RateLimitTier): RateLimitResult {
  pruneStaleEntries();
  const limit = TIER_LIMITS[tier];
  if (limit === -1) return { allowed: true, remaining: Infinity, resetAt: 0 };
  const key = `${userId}:${new Date().toISOString().slice(0, 10)}`;
  let b = _sb.get(key);
  if (!b) { b = { tokens: limit, lastRefill: Date.now() }; _sb.set(key, b); }
  if (b.lastRefill < todayMidnightUTC()) { b.tokens = limit; b.lastRefill = Date.now(); }
  const resetAt = nextMidnightUTC();
  if (b.tokens <= 0) return { allowed: false, remaining: 0, resetAt };
  b.tokens -= 1;
  return { allowed: true, remaining: b.tokens, resetAt };
}

export async function getRemainingTokensAsync(userId: string, tier: RateLimitTier): Promise<number> {
  const limit = TIER_LIMITS[tier];
  if (limit === -1) return Infinity;
  const b = await kv.get<TokenBucket>(kvKey(userId));
  return b?.tokens ?? limit;
}

export function getRemainingTokens(userId: string, tier: RateLimitTier): number {
  const limit = TIER_LIMITS[tier];
  if (limit === -1) return Infinity;
  const b = _sb.get(`${userId}:${new Date().toISOString().slice(0, 10)}`);
  return b?.tokens ?? limit;
}

export function resetAllBuckets(): void { _sb.clear(); }
