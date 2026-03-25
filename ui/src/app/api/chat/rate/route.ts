/**
 * MEOK AI LABS — Response Rating API
 *
 * POST /api/chat/rate — Rate a chat response (thumbs up/down with optional feedback).
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 * Body: { messageId: string, rating: 'up' | 'down', feedback?: string }
 *
 * Logs the rating via structured logger for analytics/quality tracking.
 */

import { auth } from '@clerk/nextjs/server';
import { type NextRequest, NextResponse } from 'next/server';
import { logInfo, logError } from '@/lib/logger';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { messageId, rating, feedback } = body;

    if (!messageId || typeof messageId !== 'string') {
      return NextResponse.json({ error: 'messageId is required' }, { status: 400 });
    }

    if (rating !== 'up' && rating !== 'down') {
      return NextResponse.json({ error: 'rating must be "up" or "down"' }, { status: 400 });
    }

    logInfo('chat.rate', {
      userId,
      metadata: {
        messageId,
        rating,
        ...(feedback ? { feedback: String(feedback).slice(0, 500) } : {}),
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    logError('chat.rate.error', { userId, metadata: { error: String(err) } });
    return NextResponse.json({ error: 'Failed to record rating' }, { status: 500 });
  }
}
