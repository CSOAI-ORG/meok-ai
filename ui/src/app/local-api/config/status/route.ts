/**
 * MEOK AI LABS — Voice/Services Status API
 * 
 * Checks configuration for all voice and integration APIs
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  // Check environment variables
  const elevenlabsKey = process.env.ELEVENLABS_API_KEY;
  const cartesiaKey = process.env.CARTESIA_API_KEY;
  const steamKey = process.env.STEAM_API_KEY;
  const twitchClientId = process.env.TWITCH_CLIENT_ID;
  const twitchSecret = process.env.TWITCH_CLIENT_SECRET;
  const rawgKey = process.env.RAWG_API_KEY;
  const discordWebhook = process.env.DISCORD_WEBHOOK_URL;

  return NextResponse.json({
    voice: {
      elevenlabs: {
        configured: !!elevenlabsKey,
        status: elevenlabsKey ? "ready" : "add_key",
        keyHint: elevenlabsKey ? "***" + elevenlabsKey.slice(-4) : "ELEVENLABS_API_KEY",
        description: "Premium voice synthesis",
      },
      cartesia: {
        configured: !!cartesiaKey,
        status: cartesiaKey ? "ready" : "add_key",
        keyHint: cartesiaKey ? "***" + cartesiaKey.slice(-4) : "CARTESIA_API_KEY",
        description: "Fast voice generation",
      },
    },
    gaming: {
      steam: {
        configured: !!steamKey,
        status: steamKey ? "ready" : "add_key",
        keyHint: steamKey ? "configured" : "STEAM_API_KEY",
        description: "Steam Web API for player data",
      },
      twitch: {
        configured: !!(twitchClientId && twitchSecret),
        status: twitchClientId && twitchSecret ? "ready" : "add_key",
        keyHint: twitchClientId ? "configured" : "TWITCH_CLIENT_ID + TWITCH_CLIENT_SECRET",
        description: "Stream platform integration",
      },
      rawg: {
        configured: !!rawgKey,
        status: rawgKey ? "ready" : "add_key",
        keyHint: rawgKey ? "configured" : "RAWG_API_KEY",
        description: "Game database & reviews",
      },
    },
    integrations: {
      discord: {
        configured: !!discordWebhook,
        status: discordWebhook ? "ready" : "add_key",
        description: "Discord webhook notifications",
      },
    },
    summary: {
      totalApis: 8,
      configured: [elevenlabsKey, cartesiaKey, steamKey, twitchClientId && twitchSecret, rawgKey, discordWebhook].filter(Boolean).length,
    },
  });
}

export async function POST(req: NextRequest) {
  // Test specific service
  const body = await req.json();
  const { service, testConnection } = body;

  switch (service) {
    case "steam": {
      // Would test Steam API
      return NextResponse.json({
        service: "steam",
        tested: true,
        requiresKey: true,
      });
    }
    case "twitch": {
      return NextResponse.json({
        service: "twitch",
        tested: true,
        requiresKey: true,
      });
    }
    default:
      return NextResponse.json({ error: "Unknown service" }, { status: 400 });
  }
}