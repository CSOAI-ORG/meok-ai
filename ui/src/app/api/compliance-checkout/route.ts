import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getAuthUserId } from '@/lib/api-auth';
import Stripe from 'stripe';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { priceId } = await req.json();
  if (!priceId || !['price_starter_audit', 'price_pro_audit'].includes(priceId)) {
    return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 });
  }

  // Clerk may be unconfigured (e.g. no keys in an env) — don't let a failed
  // user lookup 500 the checkout; fall back to an empty email.
  let email = 'unknown@meok.ai';
  try {
    const user = await currentUser();
    email = user?.emailAddresses?.[0]?.emailAddress ?? email;
  } catch (err) {
    console.warn('[Compliance checkout] Clerk user lookup failed:', err instanceof Error ? err.message : err);
  }
  const origin = req.headers.get('origin') ?? 'https://meok.ai';

  if (!process.env.STRIPE_SECRET_KEY) {
    console.warn('[Compliance checkout] STRIPE_SECRET_KEY not set');
    return NextResponse.json(
      { error: 'Audit checkout is not available yet. Please contact us to book.', contactUrl: '/contact' },
      { status: 503 },
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    let amount: number;
    let name: string;
    switch (priceId) {
      case 'price_starter_audit': amount = 500000; name = 'EU AI Act Starter Audit (£5,000)'; break;
      case 'price_pro_audit': amount = 1200000; name = 'EU AI Act Professional Audit (£12,000)'; break;
      default: return NextResponse.json({ error: 'Unknown price' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'gbp',
          product_data: { name, description: 'EU AI Act compliance audit delivered in 48 hours. Board-ready PDF report included.' },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      customer_email: email,
      success_url: `${origin}/compliance-audit/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/compliance-audit?cancelled=true`,
      metadata: { userId, priceId, audit_type: priceId === 'price_starter_audit' ? 'starter' : 'professional' },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[Compliance checkout] Failed to create session:', message);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}