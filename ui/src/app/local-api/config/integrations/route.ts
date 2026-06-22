/**
 * MEOK AI LABS — Integration Setup Helper
 * 
 * Guided flows for connecting external services
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface IntegrationGuide {
  id: string;
  name: string;
  description: string;
  steps: { number: number; instruction: string; link?: string }[];
  envVars: string[];
}

const GUIDES: Record<string, IntegrationGuide> = {
  steam: {
    id: "steam",
    name: "Steam",
    description: "Connect your Steam account for game stats, achievements, and library data",
    steps: [
      { number: 1, instruction: "Go to Steam Developer Portal", link: "https://developer.valvesoftware.com" },
      { number: 2, instruction: "Create a new Steam Web API key" },
      { number: 3, instruction: "Copy the API key" },
      { number: 4, instruction: "Add STEAM_API_KEY to your .env.local file" },
    ],
    envVars: ["STEAM_API_KEY"],
  },
  twitch: {
    id: "twitch",
    name: "Twitch",
    description: "Connect Twitch for stream notifications and viewer engagement",
    steps: [
      { number: 1, instruction: "Go to Twitch Developer Console", link: "https://dev.twitch.tv" },
      { number: 2, instruction: "Create a new Application" },
      { number: 3, instruction: "Get your Client ID and Client Secret" },
      { number: 4, instruction: "Add TWITCH_CLIENT_ID and TWITCH_CLIENT_SECRET to .env.local" },
    ],
    envVars: ["TWITCH_CLIENT_ID", "TWITCH_CLIENT_SECRET"],
  },
  rawg: {
    id: "rawg",
    name: "RAWG",
    description: "Game database API - covers 200,000+ games with reviews, ratings, and data",
    steps: [
      { number: 1, instruction: "Go to RAWG API Dashboard", link: "https://rawg.io/apidocs" },
      { number: 2, instruction: "Sign up for free API key" },
      { number: 3, instruction: "Copy your API key" },
      { number: 4, instruction: "Add RAWG_API_KEY to .env.local" },
    ],
    envVars: ["RAWG_API_KEY"],
  },
  elevenlabs: {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "Premium voice synthesis - natural sounding AI voices",
    steps: [
      { number: 1, instruction: "Go to ElevenLabs", link: "https://elevenlabs.io" },
      { number: 2, instruction: "Create account and go to Profile" },
      { number: 3, instruction: "Copy your API key" },
      { number: 4, instruction: "Add ELEVENLABS_API_KEY to .env.local" },
    ],
    envVars: ["ELEVENLABS_API_KEY"],
  },
  discord: {
    id: "discord",
    name: "Discord",
    description: "Send notifications to your Discord server",
    steps: [
      { number: 1, instruction: "Server Settings → Integrations → Webhooks" },
      { number: 2, instruction: "Create new webhook" },
      { number: 3, instruction: "Copy webhook URL" },
      { number: 4, instruction: "Use in AI Squad Settings or add to .env as DISCORD_WEBHOOK_URL" },
    ],
    envVars: ["DISCORD_WEBHOOK_URL"],
  },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const guideId = searchParams.get("guide");

  if (guideId && GUIDES[guideId]) {
    return NextResponse.json(GUIDES[guideId]);
  }

  // Return all guides
  return NextResponse.json({
    guides: Object.values(GUIDES).map(g => ({
      id: g.id,
      name: g.name,
      description: g.description,
      steps: g.steps.length,
    })),
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { action, guideId, apiKey } = body;

  if (action === "validate") {
    // Simple validation - would need more robust checks
    if (!apiKey || apiKey.length < 5) {
      return NextResponse.json({
        valid: false,
        error: "API key appears invalid (too short)",
      });
    }

    return NextResponse.json({
      valid: true,
      guideId,
      validatedAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}