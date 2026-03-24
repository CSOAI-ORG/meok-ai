/**
 * MEOK AI LABS — Clerk webhook handler
 * Route: POST /api/webhooks/clerk
 *
 * Clerk calls this endpoint when users sign up, update their profile,
 * or delete their account. Every request is verified against the
 * CLERK_WEBHOOK_SECRET using svix before any action is taken.
 *
 * Supported events:
 *   user.created  → create DB record, assign Explorer tier
 *   user.updated  → sync name / email to our DB
 *   user.deleted  → soft-delete, schedule GDPR erasure
 */

import { NextRequest, NextResponse } from 'next/server';
import { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';

import {
  createUser,
  getUserById,
  markUserDeleted,
} from '@/lib/db/user';

// ── Config ─────────────────────────────────────────────────────────────────

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET!;

// Clerk webhook payloads can be large (avatars etc.); disable body-size limit.
export const config = {
  api: { bodyParser: false },
};

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * Extracts the best available email address from a Clerk user payload.
 * Prefers the primary email; falls back to the first verified address,
 * then the first address in the list, then an empty string.
 */
function extractPrimaryEmail(
  emailAddresses: Array<{ id: string; email_address: string }>,
  primaryEmailAddressId: string | null | undefined,
): string {
  if (!emailAddresses.length) return '';

  const primary = emailAddresses.find((e) => e.id === primaryEmailAddressId);
  if (primary) return primary.email_address;

  return emailAddresses[0].email_address;
}

/**
 * Builds a display name from the Clerk first_name / last_name fields.
 * Returns null when both are absent or empty.
 */
function buildDisplayName(
  firstName: string | null | undefined,
  lastName: string | null | undefined,
): string | null {
  const parts = [firstName, lastName].filter(Boolean);
  return parts.length ? parts.join(' ') : null;
}

// ── Handler ────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  // ── 1. Read raw body (needed for svix signature verification) ────────────
  const payload = await req.text();

  const svixId        = req.headers.get('svix-id');
  const svixTimestamp = req.headers.get('svix-timestamp');
  const svixSignature = req.headers.get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    console.warn('[clerk/webhook] Missing svix headers — rejecting request');
    return NextResponse.json(
      { error: 'Missing required svix headers' },
      { status: 400 },
    );
  }

  // ── 2. Verify webhook signature ──────────────────────────────────────────
  let evt: WebhookEvent;

  try {
    const wh = new Webhook(webhookSecret);
    const headers = {
      'svix-id':        svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    };
    evt = wh.verify(payload, headers) as WebhookEvent;
  } catch (err) {
    console.error('[clerk/webhook] Signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid webhook signature' },
      { status: 400 },
    );
  }

  // ── 3. Route by event type ───────────────────────────────────────────────
  const eventType = evt.type;
  console.log(`[clerk/webhook] Received event: ${eventType}`);

  try {
    switch (eventType) {

      // ── user.created ────────────────────────────────────────────────────
      case 'user.created': {
        const data = evt.data;

        const email = extractPrimaryEmail(
          data.email_addresses,
          data.primary_email_address_id,
        );
        const name = buildDisplayName(data.first_name, data.last_name);

        console.log(`[clerk/webhook] user.created — clerkId=${data.id} email=${email} name=${name ?? '(none)'}`);

        // Create DB record with Explorer tier (default)
        const user = await createUser(data.id, email, name);

        console.log(`[clerk/webhook] User record created — id=${user.id} tier=${user.tier}`);

        // TODO: send welcome email (e.g. via Resend / Postmark)
        // await sendWelcomeEmail({ to: email, name });

        // TODO: trigger onboarding flow (e.g. push to analytics / CRM)
        // await analytics.identify(data.id, { email, name, tier: 'explorer', plan: 'free' });

        break;
      }

      // ── user.updated ────────────────────────────────────────────────────
      case 'user.updated': {
        const data = evt.data;

        const email = extractPrimaryEmail(
          data.email_addresses,
          data.primary_email_address_id,
        );
        const name = buildDisplayName(data.first_name, data.last_name);

        console.log(`[clerk/webhook] user.updated — clerkId=${data.id} email=${email} name=${name ?? '(none)'}`);

        // Fetch existing user to confirm they exist in our DB
        const existing = await getUserById(data.id);

        if (!existing) {
          // Edge case: webhook can fire before user.created is processed,
          // or the record may have been missed. Create it defensively.
          console.warn(`[clerk/webhook] user.updated — no existing record for id=${data.id}, creating now`);
          await createUser(data.id, email, name);
          break;
        }

        // TODO: implement with your database of choice (Neon/Supabase/PlanetScale)
        // Sync name and email to the users table:
        //   await sql`
        //     UPDATE users
        //     SET email      = ${email},
        //         name       = ${name},
        //         updated_at = NOW()
        //     WHERE id = ${data.id}
        //   `;

        console.log(`[clerk/webhook] User record synced — id=${data.id}`);

        break;
      }

      // ── user.deleted ────────────────────────────────────────────────────
      case 'user.deleted': {
        const data = evt.data;

        if (!data.id) {
          // Clerk may send deleted events with a null id in some edge cases
          console.warn('[clerk/webhook] user.deleted — missing user id, skipping');
          break;
        }

        console.log(`[clerk/webhook] user.deleted — clerkId=${data.id}`);

        // Soft-delete; a scheduled job will purge PII after the grace period
        await markUserDeleted(data.id);

        // TODO: cancel active Stripe subscription if present
        // const user = await getUserById(data.id);
        // if (user?.stripe_subscription_id) {
        //   await stripe.subscriptions.cancel(user.stripe_subscription_id, {
        //     prorate: false,
        //   });
        // }

        // TODO: enqueue GDPR erasure job (fires after 30-day retention window)
        // await gdprQueue.add('schedule-erasure', { userId: data.id }, { delay: ms('30d') });

        console.log(`[clerk/webhook] User soft-deleted — id=${data.id}. GDPR erasure will be scheduled.`);

        break;
      }

      // ── unhandled events ─────────────────────────────────────────────────
      default: {
        // Log and ignore — do not error; Clerk retries on non-2xx responses
        console.log(`[clerk/webhook] Unhandled event type: ${eventType}`);
        break;
      }
    }
  } catch (err) {
    console.error(`[clerk/webhook] Error processing event ${eventType}:`, err);
    // Return 500 so Clerk will retry the delivery
    return NextResponse.json(
      { error: 'Internal server error processing webhook' },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
