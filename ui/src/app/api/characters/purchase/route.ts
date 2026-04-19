/**
 * POST /api/characters/purchase
 * 
 * Purchase a premium character from the marketplace
 * Handles payment, creator revenue share, and character unlock
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import { sql as db } from "@/lib/db";
import { track } from "@/lib/analytics";

// Character pricing from marketplace catalog
const CHARACTER_PRICES: Record<string, number> = {
  common: 299,      // £2.99
  rare: 499,        // £4.99
  epic: 999,        // £9.99
  legendary: 1999,  // £19.99
  mythic: 2999,     // £29.99
};

const CREATOR_REVENUE_SHARE = 0.70; // 70% to creator

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { characterId, rarity = "common", creatorId } = body;

    if (!characterId) {
      return NextResponse.json(
        { error: "Character ID required" },
        { status: 400 }
      );
    }

    const price = CHARACTER_PRICES[rarity] || CHARACTER_PRICES.common;
    const creatorShare = Math.round(price * CREATOR_REVENUE_SHARE);
    const platformShare = price - creatorShare;

    // Check if user already owns this character
    const existingPurchase = await db.query(
      `SELECT id FROM user_characters WHERE user_id = $1 AND character_id = $2`,
      [userId, characterId]
    );

    if (existingPurchase.rows.length > 0) {
      return NextResponse.json(
        { error: "Character already owned" },
        { status: 400 }
      );
    }

    // Get or create Stripe customer
    const userResult = await db.query(
      `SELECT stripe_customer_id FROM users WHERE id = $1`,
      [userId]
    );

    let customerId = userResult.rows[0]?.stripe_customer_id;
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

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price,
      currency: "gbp",
      customer: customerId,
      metadata: {
        type: "character_purchase",
        characterId,
        userId,
        creatorId: creatorId || "system",
        creatorShare: creatorShare.toString(),
      },
    });

    // Record pending purchase
    await db.query(
      `INSERT INTO character_purchases 
       (id, user_id, character_id, creator_id, price, creator_share, platform_share, status, stripe_payment_intent_id, created_at)
       VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, 'pending', $7, NOW())`,
      [userId, characterId, creatorId || null, price, creatorShare, platformShare, paymentIntent.id]
    );

    track("character_purchase_initiated", {
      character_id: characterId,
      rarity,
      price,
      creator_id: creatorId,
    });

    return NextResponse.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      price,
      currency: "gbp",
    });
  } catch (error) {
    console.error("Character purchase error:", error);
    return NextResponse.json(
      { error: "Failed to initiate purchase" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/characters/purchase
 * 
 * Get user's purchased characters
 */
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await db.query(
      `SELECT 
         cp.id,
         cp.character_id,
         cp.creator_id,
         cp.price,
         cp.status,
         cp.created_at,
         c.name as character_name,
         c.rarity,
         c.avatar_url
       FROM character_purchases cp
       LEFT JOIN characters c ON cp.character_id = c.id
       WHERE cp.user_id = $1
       ORDER BY cp.created_at DESC`,
      [userId]
    );

    const purchases = result.rows.map((row: Record<string, unknown>) => ({
      id: row.id,
      characterId: row.character_id,
      creatorId: row.creator_id,
      characterName: row.character_name,
      rarity: row.rarity,
      avatarUrl: row.avatar_url,
      price: row.price,
      status: row.status,
      purchasedAt: row.created_at,
    }));

    return NextResponse.json({ purchases });
  } catch (error) {
    console.error("Get purchases error:", error);
    return NextResponse.json(
      { error: "Failed to fetch purchases" },
      { status: 500 }
    );
  }
}
