/**
 * MEOK Cron API
 * 
 * Scheduled jobs for billing, re-engagement, and maintenance
 * Called by Vercel Cron or external scheduler
 */

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

interface CronJob {
  name: string;
  handler: () => Promise<{ success: boolean; count?: number; error?: string }>;
}

// Cron job handlers
const cronJobs: Record<string, CronJob['handler']> = {
  // Daily billing reconciliation
  'billing-reconcile': async () => {
    console.log('[cron] Running billing reconciliation...');
    
    // Find subscriptions ending in next 3 days
    const expiring = await sql`
      SELECT user_id, stripe_subscription_id, tier
      FROM users
      WHERE stripe_subscription_id IS NOT NULL
      AND next_billing_date <= NOW() + INTERVAL '3 days'
    `;

    // Send renewal reminders
    for (const sub of expiring) {
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.INTERNAL_API_KEY || '',
        },
        body: JSON.stringify({
          to: sub.user_id, // Would lookup actual email
          templateId: 'annual_discount',
        }),
      });
    }

    return { success: true, count: expiring.length };
  },

  // Daily re-engagement emails
  're-engagement': async () => {
    console.log('[cron] Running re-engagement campaign...');

    // Find users inactive for 7 days
    const inactive7d = await sql`
      SELECT DISTINCT user_id
      FROM user_activity
      WHERE last_active < NOW() - INTERVAL '7 days'
      AND last_active > NOW() - INTERVAL '8 days'
    `;

    for (const user of inactive7d) {
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.INTERNAL_API_KEY || '',
        },
        body: JSON.stringify({
          to: user.user_id,
          templateId: 'reactivation_7day',
        }),
      });
    }

    // Find users inactive for 30 days
    const inactive30d = await sql`
      SELECT DISTINCT user_id
      FROM user_activity
      WHERE last_active < NOW() - INTERVAL '30 days'
      AND last_active > NOW() - INTERVAL '31 days'
    `;

    for (const user of inactive30d) {
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.INTERNAL_API_KEY || '',
        },
        body: JSON.stringify({
          to: user.user_id,
          templateId: 'reactivation_30day',
        }),
      });
    }

    return { success: true, count: inactive7d.length + inactive30d.length };
  },

  // Morning briefing generation
  'morning-briefing': async () => {
    console.log('[cron] Generating morning briefings...');

    // Find active users who want morning briefings
    const users = await sql`
      SELECT user_id
      FROM user_preferences
      WHERE morning_briefing = true
    `;

    for (const user of users) {
      // Trigger briefing generation
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/morning-briefing`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.INTERNAL_API_KEY || '',
        },
        body: JSON.stringify({
          userId: user.user_id,
          schedule: 'morning',
        }),
      });
    }

    return { success: true, count: users.length };
  },

  // Usage limit reset
  'usage-reset': async () => {
    console.log('[cron] Resetting daily usage limits...');

    await sql`
      UPDATE user_usage
      SET messages_today = 0,
          api_calls_today = 0,
          reset_at = NOW()
      WHERE reset_at < NOW() - INTERVAL '1 day'
    `;

    return { success: true };
  },

  // Analytics aggregation
  'analytics-aggregate': async () => {
    console.log('[cron] Aggregating analytics...');

    // Daily active users
    const dau = await sql`
      SELECT COUNT(DISTINCT user_id) as count
      FROM user_activity
      WHERE last_active > NOW() - INTERVAL '1 day'
    `;

    // Messages today
    const messages = await sql`
      SELECT COUNT(*) as count
      FROM messages
      WHERE created_at > NOW() - INTERVAL '1 day'
    `;

    // Store in analytics table
    await sql`
      INSERT INTO daily_analytics (date, dau, messages_sent)
      VALUES (CURRENT_DATE, ${dau[0]?.count || 0}, ${messages[0]?.count || 0})
      ON CONFLICT (date) DO UPDATE SET
        dau = EXCLUDED.dau,
        messages_sent = EXCLUDED.messages_sent
    `;

    return { success: true, count: dau[0]?.count };
  },

  // Cleanup old data
  'cleanup': async () => {
    console.log('[cron] Running cleanup...');

    // Archive old messages (keep last 90 days in hot storage)
    await sql`
      INSERT INTO messages_archive
      SELECT * FROM messages
      WHERE created_at < NOW() - INTERVAL '90 days'
      AND archived = false
    `;

    await sql`
      UPDATE messages SET archived = true
      WHERE created_at < NOW() - INTERVAL '90 days'
    `;

    return { success: true };
  },
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Verify cron secret
    const authHeader = req.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { job } = await req.json();

    if (!job || !cronJobs[job]) {
      return NextResponse.json(
        { 
          error: 'Invalid job',
          availableJobs: Object.keys(cronJobs),
        },
        { status: 400 }
      );
    }

    const result = await cronJobs[job]();

    return NextResponse.json({
      job,
      timestamp: new Date().toISOString(),
      ...result,
    });
  } catch (error) {
    console.error('[cron] Error:', error);
    return NextResponse.json(
      { error: 'Cron job failed', details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  // List available cron jobs
  return NextResponse.json({
    jobs: Object.keys(cronJobs).map((name) => ({
      name,
      endpoint: '/api/cron',
      method: 'POST',
      body: { job: name },
    })),
    documentation: 'Call POST /api/cron with { "job": "job-name" } to execute',
  });
}
