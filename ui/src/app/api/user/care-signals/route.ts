/**
 * MEOK AI LABS — Care Signals API
 *
 * GET /api/user/care-signals — Returns pending (undelivered) care signals for the authenticated user.
 */

import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getPendingCareSignals } from '@/lib/db/user';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const signals = await getPendingCareSignals(userId);
    return NextResponse.json({ signals });
  } catch (err) {
    console.error('[api/user/care-signals] Failed to fetch care signals:', err);
    return NextResponse.json({ error: 'Failed to fetch care signals' }, { status: 500 });
  }
}
