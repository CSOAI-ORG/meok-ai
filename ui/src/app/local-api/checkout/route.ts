import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getAuthUserId } from '@/lib/api-auth';
import { createCheckoutSession, Tier, GovernanceTier } from '@/lib/stripe';
const _isLocalMode = process.env.MEOK_LOCAL_MODE === 'true';

// Accepted paid tiers
const PAID_TIERS = new Set<string>([
  'sovereign', 'family', 'byok',
  'governance-smb', 'governance-professional', 'governance-enterprise',
]);

interface CheckoutBody {
  tier: 'sovereign' | 'family' | 'byok' | 'governance-smb' | 'governance-professional' | 'governance-enterprise';
  interval: 'month' | 'year';
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  // -------------------------------------------------------------------------
  // Auth guard
  // -------------------------------------------------------------------------
  const userId = await getAuthUserId();
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
      { error: 'Invalid tier. Must be "sovereign", "family", "byok", "governance-smb", "governance-professional", or "governance-enterprise".' },
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
    const user = _isLocalMode ? null : await currentUser();
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
      tier: tier as Exclude<Tier, 'explorer'> | GovernanceTier,
      interval,
      successUrl,
      cancelUrl,
    });

    console.log('[Checkout] Session created', { userId, tier, interval });
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[Checkout] Failed to create Stripe session:', message);
    // Stripe connection/auth failures are provider-side, not client errors.
    const isConfigError = message.includes('not configured') || message.includes('environment variable');
    return NextResponse.json(
      {
        error: 'Checkout unavailable right now',
        detail: isConfigError ? 'Billing is not configured for this environment.' : 'Our payment provider returned an error. Please try again in a moment.',
      },
      { status: isConfigError ? 503 : 502 },
    );
  }
}
