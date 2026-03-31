import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { updateUserTier, downgradeTier, setGracePeriod, type Tier } from "@/lib/db/user";

// Disable body parsing — Stripe needs raw body for signature verification
export const dynamic = "force-dynamic";

async function getRawBody(req: NextRequest): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  const reader = req.body?.getReader();
  if (!reader) return Buffer.alloc(0);
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  const rawBody = await getRawBody(req);
  const sig = req.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("[Stripe webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  console.log(`[Stripe webhook] ${event.type}`);

  try {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const { userId, planId, tier } = session.metadata || {};
      if (userId) {
        const resolvedTier = (tier ?? planId ?? "sovereign") as Tier;
        const customerId = typeof session.customer === "string" ? session.customer : undefined;
        const subscriptionId = typeof session.subscription === "string" ? session.subscription : undefined;

        await updateUserTier(userId, resolvedTier, { customerId, subscriptionId });
        console.log(`[Stripe] User ${userId} activated ${resolvedTier} plan`);
      }
      break;
    }

    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      const rawSub = (invoice as unknown as Record<string, unknown>).subscription;
      const subId = typeof rawSub === "string" ? rawSub : undefined;

      if (subId) {
        // Fetch the subscription to get userId from metadata
        const subscription = await stripe.subscriptions.retrieve(subId);
        const userId = subscription.metadata?.userId;
        if (userId) {
          // Extend access — tier stays the same, update timestamp
          const tier = (subscription.metadata?.tier ?? "sovereign") as Tier;
          await updateUserTier(userId, tier, {
            customerId: typeof invoice.customer === "string" ? invoice.customer : undefined,
            subscriptionId: subId,
          });
          console.log(`[Stripe] Invoice paid — extended ${tier} access for user ${userId}`);
        }
      }
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const rawSub2 = (invoice as unknown as Record<string, unknown>).subscription;
      const subId = typeof rawSub2 === "string" ? rawSub2 : undefined;

      if (subId) {
        const subscription = await stripe.subscriptions.retrieve(subId);
        const userId = subscription.metadata?.userId;
        if (userId) {
          // Set 7-day grace period before downgrade
          await setGracePeriod(userId, 7);
          console.warn(`[Stripe] Payment failed for user ${userId} — 7-day grace period set`);
        }
      }
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      if (userId) {
        await downgradeTier(userId);
        console.log(`[Stripe] Subscription cancelled — downgraded user ${userId} to explorer`);
      }
      break;
    }

    default:
      console.log(`[Stripe webhook] Unhandled event: ${event.type}`);
  }
  } catch (handlerErr) {
    console.error(`[Stripe webhook] Handler error for ${event.type}:`, handlerErr);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
