import { requireAuth } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { NextResponse } from 'next/server';
import {
  getNotifications,
  markNotificationsRead,
  markAllNotificationsRead,
} from '@/lib/db/user';

// GET — return notifications for the current user
export async function GET(request: Request) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '30', 10), 100);

  const notifications = await getNotifications(userId, limit);
  const unread = notifications.filter(n => !n.read).length;

  return NextResponse.json({ notifications, unread });
}

// PATCH — mark notifications as read
export async function PATCH(request: Request) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  const body = await request.json() as { ids?: string[]; all?: boolean };

  if (body.all === true) {
    await markAllNotificationsRead(userId);
    return NextResponse.json({ success: true });
  }

  const ids = body.ids;
  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: 'ids array or all:true required' }, { status: 400 });
  }

  await markNotificationsRead(userId, ids);
  return NextResponse.json({ success: true });
}
