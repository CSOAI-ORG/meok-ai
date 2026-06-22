/**
 * MEOK AI LABS — Care Signals API
 *
 * GET /api/user/care-signals — Returns pending (undelivered) care signals for the authenticated user.
 */

import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { getPendingCareSignals } from '@/lib/db/user';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  try {
    const signals = await getPendingCareSignals(userId);
    return NextResponse.json({ signals });
  } catch (err) {
    console.error('[api/user/care-signals] Failed to fetch care signals:', err);
    return NextResponse.json({ error: 'Failed to fetch care signals' }, { status: 500 });
  }
}
