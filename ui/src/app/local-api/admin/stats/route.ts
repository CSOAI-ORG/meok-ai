/**
 * MEOK AI LABS — Admin Stats Endpoint
 *
 * GET /api/admin/stats
 *
 * Returns aggregate statistics for the admin dashboard:
 * total users, companions created, messages today, etc.
 *
 * Auth: Clerk auth() — only admin emails allowed.
 */

import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getAuthUserId } from '@/lib/api-auth';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || 'nick@meok.ai,nicholas@meok.ai')
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean);

export async function GET() {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // In local mode, skip Clerk user lookup — local_sovereign_user is always admin
  const isLocal = process.env.MEOK_LOCAL_MODE === 'true';
  let email: string | undefined;
  if (isLocal) {
    email = 'nick@meok.ai';
  } else {
    const user = await currentUser();
    email = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase();
  }
  if (!email || !ADMIN_EMAILS.includes(email)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  if (!sql) {
    return NextResponse.json({
      totalUsers: null,
      activeCompanions: null,
      messagesToday: null,
      error: 'Database not configured',
    });
  }

  try {
    const [usersResult, companionsResult, messagesTodayResult] = await Promise.all([
      sql`SELECT COUNT(*)::int AS count FROM users WHERE deleted_at IS NULL`,
      sql`SELECT COUNT(*)::int AS count FROM users WHERE deleted_at IS NULL AND companion_id IS NOT NULL`,
      sql`SELECT COALESCE(SUM(messages_today), 0)::int AS count FROM users WHERE deleted_at IS NULL AND messages_today_reset = to_char(CURRENT_DATE, 'YYYY-MM-DD')`,
    ]) as [Array<{ count: number }>, Array<{ count: number }>, Array<{ count: number }>];

    return NextResponse.json({
      totalUsers: usersResult[0]?.count ?? 0,
      activeCompanions: companionsResult[0]?.count ?? 0,
      messagesToday: messagesTodayResult[0]?.count ?? 0,
    });
  } catch (err) {
    console.error('[api/admin/stats] Error fetching stats:', err);
    return NextResponse.json({
      totalUsers: null,
      activeCompanions: null,
      messagesToday: null,
      error: err instanceof Error ? err.message : 'Unknown error',
    }, { status: 500 });
  }
}
