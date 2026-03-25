/** MEOK AI LABS — Streak Reset Cron */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CRON_SECRET = process.env.CRON_SECRET;

/**
 * GET /api/cron/streak-reset
 *
 * Resets streaks for users who missed a day of interaction.
 * Triggered by Vercel Cron daily at 00:05 UTC (vercel.json: "5 0 * * *").
 */
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const startTime = Date.now();

    // Query users whose last interaction was > 24h ago and reset their streaks
    let streaksReset = 0;
    try {
      const { sql } = await import('@/lib/db/index');
      if (sql) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        const rows = await sql`
          UPDATE users
          SET streak_days = 0,
              updated_at  = NOW()
          WHERE deleted_at IS NULL
            AND last_active_date IS NOT NULL
            AND last_active_date < ${yesterday}
            AND streak_days > 0
          RETURNING id
        `;
        streaksReset = rows.length;
        console.log(`[cron/streak-reset] Reset ${streaksReset} streak(s)`);
      } else {
        console.warn('[cron/streak-reset] No database connection — skipping');
      }
    } catch (dbErr) {
      console.error('[cron/streak-reset] DB query failed:', dbErr);
    }

    const duration = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      duration_ms: duration,
      streaks_reset: streaksReset,
    });
  } catch (err) {
    console.error('[cron/streak-reset] Error:', err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
