/**
 * MEOK AI LABS — Unified Caching System
 * 
 * Multi-tier caching for API responses:
 * - In-memory LRU cache (default)
 * - Stale-while-revalidate pattern
 */

export type CacheStorage = 'memory' | 'none';

export interface CacheOptions {
  ttl?: number;
  staleWhileRevalidate?: number;
  storage?: CacheStorage;
  keyPrefix?: string;
}

export interface CacheEntry<T> {
  data: T;
  ts: number;
  ttl: number;
}

export interface CacheResult<T> {
  data: T | null;
  cached: boolean;
  stale: boolean;
}

const memoryCache = new Map<string, CacheEntry<unknown>>();
const MAX_SIZE = 500;

export class Cache {
  private defaultTTL: number;
  private storage: CacheStorage;
  private prefix: string;

  constructor(options: CacheOptions = {}) {
    this.defaultTTL = options.ttl || 60;
    this.storage = options.storage || 'memory';
    this.prefix = options.keyPrefix || 'meok:cache:';
  }

  private getKey(key: string): string {
    return `${this.prefix || 'meok:cache:'}${key}`;
  }

  private isExpired(entry: CacheEntry<unknown>): boolean {
    return Date.now() > entry.ts + (entry.ttl * 1000);
  }

  private isStale(entry: CacheEntry<unknown>): boolean {
    return Date.now() > entry.ts + (entry.ttl * 1000 * 2);
  }

  async get<T>(key: string): Promise<CacheResult<T>> {
    const fullKey = this.getKey(key);

    if (this.storage === 'memory') {
      const entry = memoryCache.get(fullKey) as CacheEntry<T> | undefined;
      if (!entry) return { data: null, cached: false, stale: false };
      if (this.isExpired(entry)) {
        memoryCache.delete(fullKey);
        return { data: null, cached: false, stale: false };
      }
      return { data: entry.data, cached: true, stale: this.isStale(entry) };
    }

    return { data: null, cached: false, stale: false };
  }

  async set<T>(key: string, data: T, options: { ttl?: number } = {}): Promise<void> {
    const fullKey = (this.prefix || 'meok:cache:') + key;
    const entry: CacheEntry<T> = { data, ts: Date.now(), ttl: options.ttl || this.defaultTTL };

    if (this.storage === 'memory') {
      if (memoryCache.size >= MAX_SIZE) {
        const firstKey = memoryCache.keys().next().value;
        if (firstKey) memoryCache.delete(firstKey);
      }
      memoryCache.set(fullKey, entry);
    }
  }

  async delete(key: string): Promise<void> {
    memoryCache.delete(this.getKey(key));
  }

  async clear(): Promise<void> {
    memoryCache.clear();
  }

  async withCache<T>(key: string, fetcher: () => Promise<T>, options: CacheOptions = {}): Promise<{ data: T; cached: boolean; swr: boolean }> {
    const result = await this.get<T>(key);
    
    if (result.cached && !result.stale) {
      return { data: result.data!, cached: true, swr: false };
    }
    
    if (result.cached && result.stale) {
      fetcher().then(fresh => this.set(key, fresh, { ttl: options.ttl })).catch(() => {});
      return { data: result.data!, cached: true, swr: true };
    }
    
    const fresh = await fetcher();
    await this.set(key, fresh, { ttl: options.ttl });
    return { data: fresh, cached: false, swr: false };
  }
}

export const apiCache = new Cache({ ttl: 60, storage: 'memory' });
export const slowCache = new Cache({ ttl: 300, storage: 'memory' });

export function cacheControl(options: { maxAge?: number; staleWhileRevalidate?: number; noStore?: boolean }): string {
  if (options.noStore) return 'no-store';
  const parts: string[] = [];
  if (options.maxAge) parts.push(`max-age=${options.maxAge}`);
  if (options.staleWhileRevalidate) parts.push(`stale-while-revalidate=${options.staleWhileRevalidate}`);
  return parts.join(', ') || 'no-store';
}

export default Cache;