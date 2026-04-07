/**
 * MEOK AI LABS — User Notifications API
 * 
 * GET /api/user/notifications - Get user's notifications
 * PATCH /api/user/notifications - Mark notifications as read
 * 
 * Uses caching for GET requests.
 */

import { requireAuth } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { apiCache, cacheControl } from '@/lib/cache';
import { NextResponse } from 'next/server';
import {
  getNotifications,
  markNotificationsRead,
  markAllNotificationsRead,
} from '@/lib/db/user';

export const runtime = 'nodejs';

// GET — return notifications for the current user
export async function GET(request: Request) {
  const requestId = crypto.randomUUID().slice(0, 8);
  const startTime = Date.now();

  try {
    const authResult = await requireAuth();
    if ('error' in authResult && authResult.error) {
      return authResult.error;
    }
    const userId = (authResult as { userId: string }).userId;

    const rateLimitResult = checkRateLimit(userId, 'explorer');
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'RATE_LIMITED', message: 'Too many requests' },
        { 
          status: 429,
          headers: { 
            'Cache-Control': 'no-store', 
            'X-Request-ID': requestId,
            'Retry-After': String(Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)),
          }
        }
      );
    }

    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '30', 10), 100);

    // Check cache
    const cacheKey = `notifications:${userId}:${limit}`;
    const cached = await apiCache.get(cacheKey);
    if (cached && !cached.stale) {
      return NextResponse.json(cached.data, {
        headers: {
          'Cache-Control': cacheControl({ maxAge: 30, staleWhileRevalidate: 60 }),
          'X-Cache': 'HIT',
          'X-Request-ID': requestId,
        },
      });
    }

    const notifications = await getNotifications(userId, limit);
    const unread = notifications.filter(n => !n.read).length;
    
    const responseData = { notifications, unread, cached: !!cached };
    
    // Cache the result
    await apiCache.set(cacheKey, responseData, { ttl: 30 });

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': cacheControl({ maxAge: 30, staleWhileRevalidate: 60 }),
        'X-Cache': cached ? 'STALE' : 'MISS',
        'X-Request-ID': requestId,
        'X-Response-Time': `${Date.now() - startTime}ms`,
        'X-RateLimit-Remaining': String(rateLimitResult.remaining),
      },
    });
  } catch (err) {
    console.error(`[user/notifications/GET ${requestId}] error:`, err);
    return NextResponse.json(
      { 
        error: 'INTERNAL_ERROR', 
        message: 'Failed to fetch notifications',
        requestId: process.env.NODE_ENV === 'development' ? requestId : undefined,
      },
      { 
        status: 500, 
        headers: { 'Cache-Control': 'no-store', 'X-Request-ID': requestId } 
      }
    );
  }
}

// PATCH — mark notifications as read
export async function PATCH(request: Request) {
  const requestId = crypto.randomUUID().slice(0, 8);
  const startTime = Date.now();

  try {
    const authResult = await requireAuth();
    if ('error' in authResult && authResult.error) {
      return authResult.error;
    }
    const userId = (authResult as { userId: string }).userId;

    const rateLimitResult = checkRateLimit(userId, 'explorer');
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'RATE_LIMITED', message: 'Too many requests' },
        { status: 429 }
      );
    }

    let body: { ids?: string[]; all?: boolean } | null;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'BAD_REQUEST', message: 'Invalid JSON body' },
        { status: 400, headers: { 'X-Request-ID': requestId } }
      );
    }

    if (!body) {
      return NextResponse.json(
        { error: 'BAD_REQUEST', message: 'Request body required' },
        { status: 400 }
      );
    }

    if (body.all === true) {
      await markAllNotificationsRead(userId);
      // Invalidate cache
      await apiCache.delete(`notifications:${userId}:*`);
      return NextResponse.json(
        { success: true },
        { headers: { 'X-Request-ID': requestId } }
      );
    }

    const ids = body.ids;
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: 'BAD_REQUEST', message: 'ids array or all:true required' },
        { status: 400 }
      );
    }

    await markNotificationsRead(userId, ids);
    
    // Invalidate cache
    await apiCache.delete(`notifications:${userId}:*`);

    return NextResponse.json(
      { success: true },
      {
        headers: {
          'X-Request-ID': requestId,
          'X-Response-Time': `${Date.now() - startTime}ms`,
          'X-RateLimit-Remaining': String(rateLimitResult.remaining),
        },
      }
    );
  } catch (err) {
    console.error(`[user/notifications/PATCH ${requestId}] error:`, err);
    return NextResponse.json(
      { 
        error: 'INTERNAL_ERROR', 
        message: 'Failed to update notifications',
        requestId: process.env.NODE_ENV === 'development' ? requestId : undefined,
      },
      { status: 500, headers: { 'X-Request-ID': requestId } }
    );
  }
}