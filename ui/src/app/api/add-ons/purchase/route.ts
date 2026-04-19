/**
 * POST /api/add-ons/purchase
 * 
 * Purchase an add-on (creates Stripe subscription or one-time payment)
 * Authenticated endpoint
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import { sql as db } from "@/lib/db";
import { 
  getAddOn, 
  calculateAddOnPrice, 
  validateAddOnPurchase,
  type UserAddOn 
} from "@/lib/add-ons";
import { track } from "@/lib/analytics";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { addOnId, billingCycle = "monthly", paymentMethodId } = body;

    // Get user's current tier and existing add-ons
    const userResult = await db.query(
      `SELECT tier, stripe_customer_id FROM users WHERE id = $1`,
      [userId]
    );
    const user = userResult.rows[0];
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get existing add-ons
    const addOnsResult = await db.query(
      `SELECT * FROM user_add_ons WHERE user_id = $1`,
      [userId]
    );
    const existingAddOns: UserAddOn[] = addOnsResult.rows.map((row: Record<string, unknown>) => ({
      addOnId: row.add_on_id,
      purchasedAt: row.purchased_at,
      expiresAt: row.expires_at,
      status: row.status,
      stripeSubscriptionId: row.stripe_subscription_id,
    }));

    // Validate purchase
    const validation = await validateAddOnPurchase(
      userId,
      addOnId,
      user.tier,
      existingAddOns
    );

    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const addOn = getAddOn(addOnId);
    if (!addOn) {
      return NextResponse.json({ error: "Add-on not found" }, { status: 404 });
    }

    const price = calculateAddOnPrice(addOnId, billingCycle);

    // Create Stripe customer if needed
    let customerId = user.stripe_customer_id;
    if (!customerId) {
      const customer = await stripe.customers.create({
        metadata: { userId },
      });
      customerId = customer.id;
      
      await db.query(
        `UPDATE users SET stripe_customer_id = $1 WHERE id = $2`,
        [customerId, userId]
      );
    }

    // Handle one-time purchase
    if (addOn.pricing.oneTime && billingCycle === "monthly") {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: addOn.pricing.oneTime,
        currency: "gbp",
        customer: customerId,
        payment_method: paymentMethodId,
        confirm: true,
        off_session: true,
      });

      if (paymentIntent.status === "succeeded") {
        // Record purchase
        await db.query(
          `INSERT INTO user_add_ons (user_id, add_on_id, purchased_at, status, stripe_payment_intent_id)
           VALUES ($1, $2, NOW(), 'active', $3)`,
          [userId, addOnId, paymentIntent.id]
        );

        track("add_on_purchased", {
          add_on_id: addOnId,
          price: addOn.pricing.oneTime,
          billing_cycle: "one_time",
        });

        return NextResponse.json({
          success: true,
          paymentIntentId: paymentIntent.id,
        });
      }

      return NextResponse.json({
        success: false,
        clientSecret: paymentIntent.client_secret,
      });
    }

    // Handle subscription - first create a product and price
    const product = await stripe.products.create({
      name: addOn.name,
      description: addOn.description,
    });

    const stripePrice = await stripe.prices.create({
      product: product.id,
      unit_amount: price,
      currency: "gbp",
      recurring: {
        interval: billingCycle === "yearly" ? "year" : "month",
      },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: stripePrice.id }],
      payment_behavior: "default_incomplete",
      payment_settings: { save_default_payment_method: "on_subscription" },
      expand: ["latest_invoice.payment_intent"],
    });

    // Record pending subscription
    await db.query(
      `INSERT INTO user_add_ons (user_id, add_on_id, purchased_at, status, stripe_subscription_id)
       VALUES ($1, $2, NOW(), 'pending', $3)`,
      [userId, addOnId, subscription.id]
    );

    const latestInvoice = subscription.latest_invoice as { 
      payment_intent?: { client_secret: string | null } 
    } | null;

    track("add_on_subscription_created", {
      add_on_id: addOnId,
      price,
      billing_cycle: billingCycle,
      subscription_id: subscription.id,
    });

    return NextResponse.json({
      success: true,
      subscriptionId: subscription.id,
      clientSecret: latestInvoice?.payment_intent?.client_secret,
      status: subscription.status,
    });

  } catch (error) {
    console.error("Add-on purchase error:", error);
    return NextResponse.json(
      { error: "Failed to process purchase" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/add-ons/purchase
 * 
 * Get user's active add-ons
 */
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await db.query(
      `SELECT * FROM user_add_ons WHERE user_id = $1 ORDER BY purchased_at DESC`,
      [userId]
    );

    const addOns = result.rows.map((row: Record<string, unknown>) => ({
      addOnId: row.add_on_id,
      purchasedAt: row.purchased_at,
      expiresAt: row.expires_at,
      status: row.status,
      stripeSubscriptionId: row.stripe_subscription_id,
    }));

    return NextResponse.json({ addOns });
  } catch (error) {
    console.error("Get add-ons error:", error);
    return NextResponse.json(
      { error: "Failed to fetch add-ons" },
      { status: 500 }
    );
  }
}
