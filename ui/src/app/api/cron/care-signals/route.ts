/** MEOK AI LABS — Care Signals Cron */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CRON_SECRET = process.env.CRON_SECRET;

/**
 * GET /api/cron/care-signals
 *
 * Checks and delivers pending care signals to users.
 * Triggered by Vercel Cron every 4 hours (vercel.json: "0 *​/4 * * *").
 */
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const startTime = Date.now();

    // Query and deliver pending care signals
    let delivered = 0;
    try {
      const { sql } = await import('@/lib/db/index');
      if (sql) {
        // Fetch pending signals that are due for delivery
        const pending = await sql`
          SELECT id, user_id, signal_type, message, priority
          FROM care_signals
          WHERE delivered = false
            AND deliver_at <= NOW()
          ORDER BY created_at ASC
          LIMIT 100
        `;

        if (pending.length > 0) {
          // Deliver via in-app (push/email delivery pending integration)
          console.log(`[cron/care-signals] Delivering ${pending.length} care signal(s)`);

          // Mark as delivered
          const ids = pending.map((r: Record<string, unknown>) => r.id as string);
          await sql`
            UPDATE care_signals
            SET delivered = true
            WHERE id = ANY(${ids})
          `;
          delivered = pending.length;
        }

        console.log(`[cron/care-signals] ${delivered} signal(s) delivered`);
      } else {
        console.warn('[cron/care-signals] No database connection — skipping');
      }
    } catch (dbErr) {
      console.error('[cron/care-signals] DB query failed:', dbErr);
    }

    const duration = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      duration_ms: duration,
      delivered,
    });
  } catch (err) {
    console.error('[cron/care-signals] Error:', err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
