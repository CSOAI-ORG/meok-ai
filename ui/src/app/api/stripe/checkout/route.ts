"use server";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe, PLANS, PlanId } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { planId } = await req.json() as { planId: PlanId };
    const plan = PLANS[planId];
    if (!plan || !plan.priceId) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    // Embedded Checkout session (no redirect — mounts in page)
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [{ price: plan.priceId, quantity: 1 }],
      mode: "subscription",
      return_url: `${origin}/dashboard?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      metadata: { userId, planId },
      subscription_data: {
        trial_period_days: 14,  // 14-day free trial
        metadata: { userId, planId },
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error("[Stripe checkout]", err);
    return NextResponse.json({ error: "Checkout creation failed" }, { status: 500 });
  }
}
