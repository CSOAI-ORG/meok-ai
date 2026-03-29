/** MEOK AI LABS — Weekly Care Summary Cron */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CRON_SECRET = process.env.CRON_SECRET;

/**
 * GET /api/cron/weekly-summary
 *
 * Generates weekly care summaries for active users and delivers them
 * as in-app notifications. Triggered every Monday at 10 AM UTC.
 */
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const startTime = Date.now();
    let summariesGenerated = 0;

    try {
      const { sql } = await import('@/lib/db/index');
      if (sql) {
        // Fetch active users from the past 7 days
        const activeUsers = await sql`
          SELECT id, name, messages_total, streak_days
          FROM users
          WHERE deleted_at IS NULL
            AND last_active_date >= (CURRENT_DATE - INTERVAL '7 days')::date
          LIMIT 1000
        ` as Array<{ id: string; name: string | null; messages_total: number; streak_days: number }>;

        for (const user of activeUsers) {
          const firstName = user.name?.split(' ')[0] ?? 'there';
          const streakText = user.streak_days > 1 ? `${user.streak_days}-day streak` : 'daily practice';

          await sql`
            INSERT INTO notifications (user_id, type, title, message, metadata)
            VALUES (
              ${user.id},
              'system',
              'Your Weekly Companion Summary',
              ${`Hi ${firstName}, here's your weekly companion check-in. You've maintained a ${streakText} with ${user.messages_total} total interactions. Keep growing your bond — each conversation deepens your companion's understanding of you.`},
              ${{ week_of: new Date().toISOString().split('T')[0], messages_total: user.messages_total, streak_days: user.streak_days } as unknown as string}::jsonb
            )
          `.catch(() => {}); // Non-fatal per user

          summariesGenerated++;
        }

        console.log(`[cron/weekly-summary] Created ${summariesGenerated} weekly summary notifications`);
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
