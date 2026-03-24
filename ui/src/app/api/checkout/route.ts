import { NextRequest, NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { createCheckoutSession, Tier } from '@/lib/stripe';

// Accepted paid tiers
const PAID_TIERS = new Set<string>(['sovereign', 'family']);

interface CheckoutBody {
  tier: 'sovereign' | 'family';
  interval: 'month' | 'year';
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  // -------------------------------------------------------------------------
  // Auth guard
  // -------------------------------------------------------------------------
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // -------------------------------------------------------------------------
  // Parse & validate body
  // -------------------------------------------------------------------------
  let body: Partial<CheckoutBody>;
  try {
    body = (await req.json()) as Partial<CheckoutBody>;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { tier, interval } = body;

  if (!tier || !PAID_TIERS.has(tier)) {
    return NextResponse.json(
      { error: 'Invalid tier. Must be "sovereign" or "family".' },
      { status: 400 },
    );
  }

  if (!interval || (interval !== 'month' && interval !== 'year')) {
    return NextResponse.json(
      { error: 'Invalid interval. Must be "month" or "year".' },
      { status: 400 },
    );
  }

  // -------------------------------------------------------------------------
  // Resolve user email from Clerk
  // -------------------------------------------------------------------------
  let email: string;
  try {
    const user = await currentUser();
    const primary = user?.emailAddresses?.find(
      (e) => e.id === user.primaryEmailAddressId,
    );
    email = primary?.emailAddress ?? '';
  } catch (err) {
    console.error('[Checkout] Failed to fetch Clerk user:', err);
    email = '';
  }

  // -------------------------------------------------------------------------
  // Build success / cancel URLs from the request origin
  // -------------------------------------------------------------------------
  const origin = req.headers.get('origin') ?? 'https://meok.ai';
  const successUrl = `${origin}/dashboard?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl  = `${origin}/pricing?checkout=cancelled`;

  // -------------------------------------------------------------------------
  // Create Stripe Checkout session
  // -------------------------------------------------------------------------
  try {
    const url = await createCheckoutSession({
      userId,
      email,
      tier: tier as Exclude<Tier, 'explorer'>,
      interval,
      successUrl,
      cancelUrl,
    });

    console.log('[Checkout] Session created', { userId, tier, interval });
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[Checkout] Failed to create Stripe session:', message);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 },
    );
  }
}
