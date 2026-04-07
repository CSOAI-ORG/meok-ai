/**
 * MEOK AI LABS — API Response Utilities
 * 
 * Standardized response helpers for consistent API patterns.
 */

import { NextResponse } from 'next/server';

export type ApiErrorCode = 
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'RATE_LIMITED'
  | 'BAD_REQUEST'
  | 'INTERNAL_ERROR'
  | 'SERVICE_UNAVAILABLE'
  | 'TIMEOUT';

export interface ApiError {
  error: string;
  code: ApiErrorCode;
  details?: unknown;
  requestId?: string;
}

export interface ApiSuccess<T> {
  data: T;
  timestamp: string;
  cached?: boolean;
}

export function success<T>(data: T, options: { cache?: boolean; cacheTTL?: number } = {}): NextResponse<ApiSuccess<T>> {
  const headers = { 
    'Content-Type': 'application/json',
    'Cache-Control': options.cache ? `public, max-age=${options.cacheTTL || 60}` : 'no-store',
  };
  return NextResponse.json({ data, timestamp: new Date().toISOString() }, { headers });
}

export function error(code: ApiErrorCode, message: string, options: { status?: number; details?: unknown; requestId?: string } = {}): NextResponse<ApiError> {
  const statusMap: Record<ApiErrorCode, number> = {
    UNAUTHORIZED: 401, FORBIDDEN: 403, NOT_FOUND: 404, RATE_LIMITED: 429,
    BAD_REQUEST: 400, INTERNAL_ERROR: 500, SERVICE_UNAVAILABLE: 503, TIMEOUT: 504,
  };
  return NextResponse.json({
    error: message, code, details: options.details, requestId: options.requestId,
  }, { status: options.status || statusMap[code], headers: { 'Cache-Control': 'no-store' } });
}

export async function requireAuth(): Promise<string | NextResponse> {
  const { getAuthUserId } = await import('@/lib/api-auth');
  const userId = await getAuthUserId();
  if (!userId) return error('UNAUTHORIZED', 'Authentication required');
  return userId;
}

export function validateFields<T extends string>(obj: Record<string, unknown>, fields: T[]): { valid: boolean; missing: T[] } {
  const missing = fields.filter(field => !obj[field]) as T[];
  return { valid: missing.length === 0, missing };
}

export function cached<T>(fetcher: () => Promise<T>, ttlMs: number = 30000) {
  let cache: { data: T; ts: number } | null = null;
  return { 
    get data() { return cache?.data as T }, 
    get cached() { return !!(cache && Date.now() - cache.ts < ttlMs) }, 
    refresh: async () => { cache = { data: await fetcher(), ts: Date.now() }; return cache.data; } 
  };
}

export default { success, error, requireAuth, validateFields, cached };