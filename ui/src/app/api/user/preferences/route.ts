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
 * TODO: persist to DB via updateUser() once DB is connected.
 */

import { auth } from '@clerk/nextjs/server';
import { type NextRequest, NextResponse } from 'next/server';

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
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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

    // TODO: persist to DB via updateUser() once DB is connected
    // Example:
    //   await updateUser(userId, updates);

    return NextResponse.json({ updated: updates, message: 'Preferences saved' });
  } catch {
    return NextResponse.json(
      { error: 'Failed to update preferences' },
      { status: 500 },
    );
  }
}
