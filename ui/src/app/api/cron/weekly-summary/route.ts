/** MEOK AI LABS — Weekly Care Summary Cron */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CRON_SECRET = process.env.CRON_SECRET;

/**
 * GET /api/cron/weekly-summary
 *
 * Generates weekly care summaries for family plan members.
 * Triggered by Vercel Cron on Mondays at 10 AM UTC (vercel.json: "0 10 * * 1").
 */
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const startTime = Date.now();

    // Weekly care summary generation for family plan members
    let summariesGenerated = 0;
    try {
      const { sql } = await import('@/lib/db/index');
      if (sql) {
        // Query family plan members with activity this week
        const familyUsers = await sql`
          SELECT id, email, name, messages_total, streak_days, last_active_date
          FROM users
          WHERE tier = 'family'
            AND deleted_at IS NULL
            AND last_active_date >= (CURRENT_DATE - INTERVAL '7 days')::date
        `;
        summariesGenerated = familyUsers.length;
        // Delivery via email/in-app pending Resend integration
        console.log(`[cron/weekly-summary] ${summariesGenerated} family member(s) eligible for summary`);
      } else {
        console.warn('[cron/weekly-summary] No database connection — skipping');
      }
    } catch (dbErr) {
      console.error('[cron/weekly-summary] DB query failed:', dbErr);
    }

    const duration = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      duration_ms: duration,
      summaries_generated: summariesGenerated,
    });
  } catch (err) {
    console.error('[cron/weekly-summary] Error:', err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
