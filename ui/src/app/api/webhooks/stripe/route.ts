import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { updateUserTier, type Tier } from '@/lib/db/user';
import { ensureApiKeysTable, createApiKey, type ApiKeyTier } from '@/lib/db/api-keys';

// Next.js 15: disable body parsing so Stripe can verify the raw bytes
export const dynamic = 'force-dynamic';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

let apiKeysTableReady = false;

// Simple in-memory idempotency guard (per-process). In a multi-instance deployment,
// switch to Redis or a database table.
const processedEvents = new Set<string>();
const MAX_PROCESSED = 5000;

function markProcessed(eventId: string) {
  if (processedEvents.size >= MAX_PROCESSED) {
    const first = processedEvents.values().next().value;
    if (first) processedEvents.delete(first);
  }
  processedEvents.add(eventId);
}

function isProcessed(eventId: string): boolean {
  return processedEvents.has(eventId);
}

// ---------------------------------------------------------------------------
// Tier mapping — price IDs → internal tier names
// ---------------------------------------------------------------------------
const PRICE_TO_TIER: Record<string, string> = {
  [process.env.STRIPE_PRICE_SOVEREIGN_MONTHLY ?? 'price_sovereign_monthly']: 'sovereign',
  [process.env.STRIPE_PRICE_SOVEREIGN_ANNUAL  ?? 'price_sovereign_annual']:  'sovereign',
  [process.env.STRIPE_PRICE_FAMILY_MONTHLY    ?? 'price_family_monthly']:    'family',
  [process.env.STRIPE_PRICE_FAMILY_ANNUAL     ?? 'price_family_annual']:     'family',
};

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest): Promise<NextResponse> {
  // Next.js 15 — read raw bytes without consuming the body stream
  const body = await req.bytes();
  const sig  = req.headers.get('stripe-signature');

  if (!sig) {
    console.error('[Stripe webhook] Missing stripe-signature header');
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  if (!webhookSecret) {
    console.error('[Stripe webhook] STRIPE_WEBHOOK_SECRET is not set');
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(Buffer.from(body), sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[Stripe webhook] Signature verification failed:', message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  console.log(`[Stripe webhook] Received: ${event.type} (id=${event.id})`);

  if (isProcessed(event.id)) {
    console.log(`[Stripe webhook] Event ${event.id} already processed — skipping`);
    return NextResponse.json({ received: true, idempotent: true });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;

      case 'invoice.paid':
        await handleInvoicePaid(event.data.object as Stripe.Invoice);
        break;

      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;

      default:
        console.log(`[Stripe webhook] Unhandled event type: ${event.type}`);
    }
    markProcessed(event.id);
  } catch (err) {
    // Log handler errors but still return 200 — Stripe will retry on non-2xx
    console.error(`[Stripe webhook] Handler error for ${event.type}:`, err);
  }

  // Always acknowledge receipt so Stripe doesn't retry
  return NextResponse.json({ received: true });
}

// ---------------------------------------------------------------------------
// Event handlers
// ---------------------------------------------------------------------------

async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const userId = session.metadata?.userId;
  const email  = session.customer_email ?? (session.customer as string | null) ?? 'unknown';

  // Prefer explicit tier from metadata; fall back to price→tier mapping
  let tier = session.metadata?.tier;
  if (!tier && session.subscription) {
    try {
      const expandedSession = await getStripe().checkout.sessions.retrieve(session.id, {
        expand: ['line_items'],
      });
      const priceId = expandedSession.line_items?.data[0]?.price?.id;
      if (priceId) tier = PRICE_TO_TIER[priceId];
    } catch (err) {
      console.warn('[Stripe] Could not expand line items for tier lookup:', err);
    }
  }

  console.log('[Stripe] Checkout completed', { tier, sessionId: session.id });

  if (!userId) {
    console.warn('[Stripe] checkout.session.completed — no userId in metadata, skipping DB update');
    return;
  }

  const resolvedTier = (tier ?? 'sovereign') as Tier;
  const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id ?? undefined;
  const subscriptionId = typeof session.subscription === 'string' ? session.subscription : undefined;

  await updateUserTier(userId, resolvedTier, {
    customerId,
    subscriptionId,
  });

  // Generate API key for paid users (sovereign+ tier)
  if (resolvedTier !== 'explorer') {
    try {
      if (!apiKeysTableReady) {
        await ensureApiKeysTable();
        apiKeysTableReady = true;
      }
      const apiKeyTier: ApiKeyTier = resolvedTier === 'family' ? 'family' : 'sovereign';
      const existing = await import('@/lib/db/api-keys').then(m => m.listApiKeys(userId));
      if (!existing || existing.length === 0) {
        const key = await createApiKey(userId, apiKeyTier, 'Generated on signup');
        console.log(`[Stripe] API key generated for user *** (prefix=${key.prefix})`);
        // key.plaintext is available here — deliver via Resend email when configured
      }
    } catch (err) {
      console.error('[Stripe] API key generation failed (non-fatal):', err);
    }
  }

  console.log(`[Stripe] Updated user *** to tier=${resolvedTier}`);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription): Promise<void> {
  const priceId = subscription.items.data[0]?.price?.id;
  const tier    = priceId ? (PRICE_TO_TIER[priceId] ?? 'unknown') : 'unknown';
  const userId  = subscription.metadata?.userId;
  const status  = subscription.status;

  console.log('[Stripe] Subscription updated', {
    tier,
    priceId,
    status,
  });

  if (!userId) {
    console.warn('[Stripe] customer.subscription.updated — no userId in metadata, skipping DB update');
    return;
  }

  if (status === 'active' || status === 'trialing') {
    const resolvedTier = (tier !== 'unknown' ? tier : 'sovereign') as Tier;
    const customerId = typeof subscription.customer === 'string' ? subscription.customer : undefined;

    await updateUserTier(userId, resolvedTier, {
      customerId,
      subscriptionId: subscription.id,
    });

    console.log(`[Stripe] Updated user *** to tier=${resolvedTier} (subscription ${status})`);
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription): Promise<void> {
  const userId = subscription.metadata?.userId;
  const downgradedTier = 'explorer';

  console.log('[Stripe] Subscription cancelled — downgrading to Explorer', {
    cancelledAt: subscription.canceled_at
      ? new Date(subscription.canceled_at * 1000).toISOString()
      : null,
  });

  if (!userId) {
    console.warn('[Stripe] customer.subscription.deleted — no userId in metadata, skipping DB update');
    return;
  }

  await updateUserTier(userId, downgradedTier as Tier);
  console.log(`[Stripe] Downgraded user *** to tier=${downgradedTier}`);
}

async function handleInvoicePaid(invoice: Stripe.Invoice): Promise<void> {
  const sub = (invoice as any).subscription;
  const subscriptionId = typeof sub === 'string' ? sub : (sub as string | null | undefined);

  console.log('[Stripe] Invoice paid', {
    invoiceId: invoice.id,
    amountPaid: invoice.amount_paid,
    currency: invoice.currency,
  });

  if (!subscriptionId) return;

  try {
    const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
    await handleSubscriptionUpdated(subscription);
    console.log(`[Stripe] Refreshed tier after invoice payment for subscription=***`);
  } catch (err) {
    console.warn('[Stripe] Could not refresh subscription after invoice.paid:', err);
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inv = invoice as any;
  const customerId     = typeof inv.customer === 'string' ? inv.customer : inv.customer?.id;
  const subscriptionId = typeof inv.subscription === 'string'
    ? inv.subscription
    : (inv.subscription as string | null | undefined);
  const attemptCount  = inv.attempt_count ?? 1;

  console.warn('[Stripe] Payment failed', {
    invoiceId: inv.id,
    attemptCount,
    amountDue: inv.amount_due,
    currency: inv.currency,
  });

  // Do NOT immediately downgrade — allow a 3-day grace period.
  // Stripe will automatically retry the charge. If all retries are exhausted,
  // `customer.subscription.deleted` will fire, which handles the actual downgrade.

  // Payment failure notification: logged for monitoring; email integration pending Resend setup
  console.error(`[Stripe] Payment failure alert — attempt=${attemptCount} amount=${inv.amount_due} ${inv.currency}`);

  // Flag account on 3rd+ failure: set grace period so user retains access temporarily
  if (attemptCount >= 3) {
    console.error(`[Stripe] Payment failed ${attemptCount} times for customer=*** — setting grace period`);
    try {
      // Attempt to find userId from subscription metadata and set grace period
      if (subscriptionId && process.env.STRIPE_SECRET_KEY) {
        const sub = await getStripe().subscriptions.retrieve(subscriptionId);
        const subUserId = sub.metadata?.userId;
        if (subUserId) {
          const { setGracePeriod } = await import('@/lib/db/user');
          await setGracePeriod(subUserId, 7);
          console.warn(`[Stripe] Grace period set for user=*** (7 days)`);
        }
      }
    } catch (graceErr) {
      console.error('[Stripe] Failed to set grace period (non-fatal):', graceErr);
    }
  }
}
