import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

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

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.CheckoutSession;
      const { userId, planId } = session.metadata || {};
      if (userId && planId) {
        // TODO: Update user tier in DB / Clerk metadata
        console.log(`[Stripe] User ${userId} activated ${planId} plan`);
        // await clerkClient.users.updateUserMetadata(userId, { publicMetadata: { plan: planId } });
      }
      break;
    }

    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      const sub = invoice.subscription as string;
      console.log(`[Stripe] Invoice paid — subscription ${sub}`);
      // TODO: Extend access, log payment
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = invoice.customer as string;
      console.warn(`[Stripe] Payment failed for customer ${customerId}`);
      // TODO: Email user, restrict access after grace period
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      if (userId) {
        console.log(`[Stripe] Subscription cancelled for user ${userId}`);
        // TODO: Downgrade to free tier
      }
      break;
    }

    default:
      console.log(`[Stripe webhook] Unhandled event: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
