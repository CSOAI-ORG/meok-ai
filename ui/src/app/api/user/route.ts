/**
 * MEOK AI LABS — User Account Deletion Endpoint
 *
 * DELETE /api/user
 *
 * Soft-deletes the authenticated user's account and schedules full data
 * erasure within 30 days, satisfying GDPR Article 17 (right to erasure).
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 * Body: { confirm: "DELETE MY ACCOUNT" } — must match exactly, or returns 400.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { markUserDeleted } from '@/lib/db/user';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CONFIRM_STRING = 'DELETE MY ACCOUNT';

export async function DELETE(req: NextRequest) {
  // ── 1. Auth ──────────────────────────────────────────────────────────────
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized. Please sign in to delete your account.' },
      { status: 401 },
    );
  }

  // ── 2. Validate confirmation string ──────────────────────────────────────
  let body: { confirm?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Request body must be valid JSON.' },
      { status: 400 },
    );
  }

  if (body?.confirm !== CONFIRM_STRING) {
    return NextResponse.json(
      {
        error: `Confirmation string did not match. Send { "confirm": "${CONFIRM_STRING}" } to proceed.`,
      },
      { status: 400 },
    );
  }

  // ── 3. Soft-delete the user ───────────────────────────────────────────────
  await markUserDeleted(userId);

  // ── 4. Fire-and-forget: purge memories from SOV3 ─────────────────────────
  // This is intentionally not awaited — a failure here should not block the
  // deletion response. The SOV3 purge is best-effort; the GDPR erasure job
  // (scheduled above in markUserDeleted) is the authoritative cleanup path.
  //
  // TODO: replace this stub with a real SOV3 purge call.
  // Example:
  //   fetch(`${process.env.SOV3_BASE_URL}/api/memories/purge`, {
  //     method:  'POST',
  //     headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.SOV3_API_KEY}` },
  //     body:    JSON.stringify({ user_id: userId }),
  //   }).catch((err) => console.error('[api/user DELETE] SOV3 purge failed:', err));
  console.log(`[api/user DELETE] SOV3 memory purge stub fired for userId=${userId}`);

  // ── 5. Respond ────────────────────────────────────────────────────────────
  return NextResponse.json(
    {
      success: true,
      message:
        'Account scheduled for deletion. Data will be purged within 30 days per GDPR Article 17.',
    },
    { status: 200 },
  );
}
