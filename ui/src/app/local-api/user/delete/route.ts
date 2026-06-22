/**
 * MEOK AI LABS — Account Deletion & Reactivation Endpoint
 *
 * POST  /api/user/delete  — Soft-delete with 30-day grace period (GDPR Art. 17)
 * DELETE /api/user/delete  — Reactivate within grace period
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { getUserById, updateUserProfile } from '@/lib/db/user';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ── POST: Schedule account deletion ─────────────────────────────────────────

export async function POST(req: NextRequest) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  // Validate confirmation
  let body: { confirm?: boolean } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (body?.confirm !== true) {
    return NextResponse.json(
      { error: 'You must send { "confirm": true } to proceed with account deletion.' },
      { status: 400 },
    );
  }

  // Verify user exists
  const user = await getUserById(userId);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  if (user.deleted_at) {
    return NextResponse.json(
      { error: 'Account is already scheduled for deletion.' },
      { status: 409 },
    );
  }

  // Soft-delete: set deleted_at timestamp
  const now = new Date();
  const deletionDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  await updateUserProfile(userId, { deleted_at: now.toISOString() });

  // Cancel Stripe subscription if active
  if (user.stripe_subscription_id) {
    try {
      const stripe = getStripe();
      await stripe.subscriptions.cancel(user.stripe_subscription_id);
    } catch (err) {
      console.error('[api/user/delete POST] Stripe cancellation failed:', err);
      // Non-blocking — deletion still proceeds
    }
  }

  return NextResponse.json({
    success: true,
    message: 'Account scheduled for deletion. You have 30 days to cancel.',
    deletionDate: deletionDate.toISOString(),
  });
}

// ── DELETE: Reactivate account within grace period ──────────────────────────

export async function DELETE(_req: NextRequest) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const user = await getUserById(userId);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  if (!user.deleted_at) {
    return NextResponse.json(
      { error: 'Account is not scheduled for deletion.' },
      { status: 400 },
    );
  }

  // Check if still within the 30-day grace period
  const deletedAt = new Date(user.deleted_at);
  const gracePeriodEnd = new Date(deletedAt.getTime() + 30 * 24 * 60 * 60 * 1000);

  if (new Date() > gracePeriodEnd) {
    return NextResponse.json(
      { error: 'Grace period has expired. Account data has been permanently erased.' },
      { status: 410 },
    );
  }

  // Clear deleted_at to reactivate
  await updateUserProfile(userId, { deleted_at: null });

  return NextResponse.json({
    success: true,
    message: 'Account reactivated successfully. Welcome back.',
  });
}
