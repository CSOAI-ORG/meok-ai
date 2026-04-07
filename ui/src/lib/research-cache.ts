/**
 * MEOK AI LABS — Research Result Cache
 *
 * In-memory cache for research search results to reduce API calls.
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

class ResearchCache {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private maxSize: number;
  private ttl: number; // Time to live in ms

  constructor(maxSize = 100, ttlMinutes = 30) {
    this.maxSize = maxSize;
    this.ttl = ttlMinutes * 60 * 1000;
  }

  private generateKey(query: string): string {
    // Normalize query for cache key
    return query.toLowerCase().trim().replace(/\s+/g, ' ');
  }

  get<T>(query: string): T | null {
    const key = this.generateKey(query);
    const entry = this.cache.get(key);
    
    if (!entry) return null;
    
    // Check expiration
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data as T;
  }

  set<T>(query: string, data: T): void {
    const key = this.generateKey(query);
    
    // Evict oldest if at capacity
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) this.cache.delete(oldestKey);
    }
    
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + this.ttl,
    });
  }

  invalidate(pattern?: string): void {
    if (!pattern) {
      this.cache.clear();
      return;
    }
    
    // Invalidate keys matching pattern
    for (const key of this.cache.keys()) {
      if (key.includes(pattern.toLowerCase())) {
        this.cache.delete(key);
      }
    }
  }

  getStats(): { size: number; hits: number; oldest: number | null } {
    let oldest: number | null = null;
    
    for (const entry of this.cache.values()) {
      if (!oldest || entry.timestamp < oldest) {
        oldest = entry.timestamp;
      }
    }
    
    return {
      size: this.cache.size,
      hits: 0, // Could track hits with additional counter
      oldest,
    };
  }
}

// Singleton instance
export const researchCache = new ResearchCache(50, 30); // 50 entries, 30 min TTL

export default ResearchCache;