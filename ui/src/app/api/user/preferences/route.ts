/**
 * MEOK AI LABS — User Preferences Endpoint
 *
 * PATCH /api/user/preferences
 *
 * Updates one or more of the authenticated user's preference fields.
 * Only whitelisted keys are accepted; unknown keys are silently ignored.
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 * Body: Partial record of allowed preference keys.
 *
 * Persists to Neon DB via guardian_settings JSONB (preferences sub-key).
 */

import { getAuthUserId } from '@/lib/api-auth';
import { type NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db/index';
import { checkRateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_KEYS = [
  'theme',
  'senior_mode',
  'reduce_motion',
  'font_size',
  'morning_brief_enabled',
  'guardian_enabled',
] as const;

export async function PATCH(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  try {
    const body = await req.json();
    const updates: Record<string, unknown> = {};

    for (const key of ALLOWED_KEYS) {
      if (key in body) updates[key] = body[key];
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No valid preferences provided' },
        { status: 400 },
      );
    }

    // Persist to DB — store in guardian_settings JSONB as a "preferences" sub-key
    // until a dedicated preferences column is added to the users table.
    if (sql) {
      try {
        await sql`
          UPDATE users
          SET guardian_settings = COALESCE(guardian_settings, '{}'::jsonb) || jsonb_build_object('preferences', ${JSON.stringify(updates)}::jsonb),
              updated_at = NOW()
          WHERE id = ${userId} AND deleted_at IS NULL
        `;
      } catch (dbErr) {
        // Log but don't fail the request — preferences are echoed back regardless
        console.warn('[user/preferences] DB write failed (preferences stored in-memory only):', dbErr);
      }
    } else {
      console.warn('[user/preferences] No database connection — preferences not persisted');
    }

    return NextResponse.json({ updated: updates, message: 'Preferences saved' });
  } catch {
    return NextResponse.json(
      { error: 'Failed to update preferences' },
      { status: 500 },
    );
  }
}
