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

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress ?? 'unknown@meok.ai';
  const origin = req.headers.get('origin') ?? 'https://meok.ai';

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

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
    return NextResponse.json({ error: message }, { status: 500 });
  }
}