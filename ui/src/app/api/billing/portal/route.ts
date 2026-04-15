import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { getAuthUserId } from '@/lib/api-auth';
import { getUserById } from '@/lib/db/user';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const origin = req.headers.get('origin') ?? 'https://meok.ai';

  try {
    const user = await getUserById(userId);
    if (!user?.stripe_customer_id) {
      return NextResponse.json(
        { error: 'No active billing account found' },
        { status: 400 },
      );
    }

    const session = await getStripe().billingPortal.sessions.create({
      customer: user.stripe_customer_id,
      return_url: `${origin}/dashboard/billing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[Billing Portal] Failed to create portal session:', message);
    return NextResponse.json(
      { error: 'Failed to create billing portal session' },
      { status: 500 },
    );
  }
}
