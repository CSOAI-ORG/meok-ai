/**
 * MEOK AI LABS — KV Cache Layer
 *
 * Unified key-value cache that works in two modes:
 *
 *   1. Upstash Redis (production) — shared across all serverless instances,
 *      survives cold starts, TTL-based expiry.
 *      Requires: UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN in env.
 *
 *   2. In-process Map (fallback) — single-instance, resets on cold start.
 *      Used automatically when Upstash env vars are absent.
 *
 * Replaces the raw `new Map<>()` calls in memory.ts and rate-limit.ts.
 *
 * Usage:
 *   import { kv } from '@/lib/kv-cache'
 *   await kv.set('key', value, { ex: 86400 })   // TTL in seconds
 *   const val = await kv.get<MyType>('key')
 *   await kv.del('key')
 */

export interface KVSetOptions {
  /** Expiry in seconds. Ignored in Map fallback mode. */
  ex?: number;
}

export interface KVStore {
  get<T = unknown>(key: string): Promise<T | null>;
  set(key: string, value: unknown, opts?: KVSetOptions): Promise<void>;
  del(key: string): Promise<void>;
  exists(key: string): Promise<boolean>;
}

// ── Upstash Redis client (lazy-loaded) ────────────────────────────────────────

let _upstashClient: KVStore | null = null;

async function getUpstashClient(): Promise<KVStore | null> {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  // Lazy import — only loads when env vars present
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { Redis } = await import("@upstash/redis") as any;
    const redis = new Redis({ url, token });

    return {
      async get<T>(key: string) {
        return redis.get(key) as Promise<T | null>;
      },
      async set(key: string, value: unknown, opts?: KVSetOptions) {
        if (opts?.ex) {
          await redis.setex(key, opts.ex, JSON.stringify(value));
        } else {
          await redis.set(key, JSON.stringify(value));
        }
      },
      async del(key: string) {
        await redis.del(key);
      },
      async exists(key: string) {
        return (await redis.exists(key)) === 1;
      },
    };
  } catch {
    return null;
  }
}

// ── In-process Map fallback ───────────────────────────────────────────────────

interface MapEntry {
  value: unknown;
  expiresAt: number | null;
}

const _store = new Map<string, MapEntry>();

const mapKV: KVStore = {
  async get<T>(key: string): Promise<T | null> {
    const entry = _store.get(key);
    if (!entry) return null;
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      _store.delete(key);
      return null;
    }
    return entry.value as T;
  },
  async set(key: string, value: unknown, opts?: KVSetOptions) {
    const expiresAt = opts?.ex ? Date.now() + opts.ex * 1000 : null;
    _store.set(key, { value, expiresAt });
  },
  async del(key: string) {
    _store.delete(key);
  },
  async exists(key: string) {
    const entry = _store.get(key);
    if (!entry) return false;
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      _store.delete(key);
      return false;
    }
    return true;
  },
};

// ── Singleton getter ──────────────────────────────────────────────────────────

let _resolvedKV: KVStore | null = null;
let _resolving = false;
let _resolveQueue: Array<(kv: KVStore) => void> = [];

/**
 * Returns the best available KV store.
 * Tries Upstash first; falls back to in-process Map.
 */
export async function getKV(): Promise<KVStore> {
  if (_resolvedKV) return _resolvedKV;

  if (_resolving) {
    return new Promise((resolve) => _resolveQueue.push(resolve));
  }

  _resolving = true;
  const upstash = await getUpstashClient();
  _resolvedKV = upstash ?? mapKV;
  _resolving = false;

  const mode = upstash ? 'Upstash Redis' : 'in-process Map (set UPSTASH_REDIS_REST_URL to upgrade)';
  console.log(`[kv-cache] Using: ${mode}`);

  _resolveQueue.forEach((r) => r(_resolvedKV!));
  _resolveQueue = [];

  return _resolvedKV;
}

/**
 * Convenience singleton — use this in route handlers.
 *
 * const cache = await kv()
 * await cache.set('foo', 'bar', { ex: 3600 })
 */
export const kv = {
  async get<T>(key: string) { return (await getKV()).get<T>(key); },
  async set(key: string, value: unknown, opts?: KVSetOptions) { return (await getKV()).set(key, value, opts); },
  async del(key: string) { return (await getKV()).del(key); },
  async exists(key: string) { return (await getKV()).exists(key); },
};

export default kv;
