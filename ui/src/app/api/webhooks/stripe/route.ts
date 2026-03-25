import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { updateUserTier, type Tier } from '@/lib/db/user';

// Next.js 15: disable body parsing so Stripe can verify the raw bytes
export const dynamic = 'force-dynamic';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

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

      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;

      default:
        console.log(`[Stripe webhook] Unhandled event type: ${event.type}`);
    }
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
    // Expand line items if tier not in metadata
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

  console.log('[Stripe] Checkout completed', { userId, email, tier, sessionId: session.id });

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

  console.log(`[Stripe] Updated user ${userId} to tier=${resolvedTier}`);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription): Promise<void> {
  const priceId = subscription.items.data[0]?.price?.id;
  const tier    = priceId ? (PRICE_TO_TIER[priceId] ?? 'unknown') : 'unknown';
  const userId  = subscription.metadata?.userId;
  const status  = subscription.status;

  console.log('[Stripe] Subscription updated', {
    userId,
    tier,
    priceId,
    status,
    subscriptionId: subscription.id,
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

    console.log(`[Stripe] Updated user ${userId} to tier=${resolvedTier} (subscription ${status})`);
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription): Promise<void> {
  const userId = subscription.metadata?.userId;
  const downgradedTier = 'explorer';

  console.log('[Stripe] Subscription cancelled — downgrading to Explorer', {
    userId,
    subscriptionId: subscription.id,
    cancelledAt: subscription.canceled_at
      ? new Date(subscription.canceled_at * 1000).toISOString()
      : null,
  });

  if (!userId) {
    console.warn('[Stripe] customer.subscription.deleted — no userId in metadata, skipping DB update');
    return;
  }

  await updateUserTier(userId, downgradedTier as Tier);
  console.log(`[Stripe] Downgraded user ${userId} to tier=${downgradedTier}`);
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
    customerId,
    subscriptionId,
    invoiceId: inv.id,
    attemptCount,
    amountDue: inv.amount_due,
    currency: inv.currency,
  });

  // Do NOT immediately downgrade — allow a 3-day grace period.
  // Stripe will automatically retry the charge. If all retries are exhausted,
  // `customer.subscription.deleted` will fire, which handles the actual downgrade.

  // TODO: Send payment failure email via Resend (or similar)
  // e.g. await resend.emails.send({
  //   from: 'billing@meok.ai',
  //   to: invoice.customer_email ?? '',
  //   subject: 'Action required: payment failed for your MEOK subscription',
  //   react: PaymentFailedEmail({ attemptCount, dueDate: new Date(invoice.next_payment_attempt! * 1000) }),
  // });

  // TODO: If attemptCount >= 3, consider proactively flagging the account
  // (but do not remove access until subscription is actually cancelled)
}
