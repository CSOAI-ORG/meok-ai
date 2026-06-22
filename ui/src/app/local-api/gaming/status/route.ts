/**
 * MEOK AI LABS — Gaming Integrations Status API
 * 
 * Check status of gaming integrations (Steam, Twitch, RAWG)
 * Used by AI Squad and Gaming Dashboard
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface IntegrationStatus {
  name: string;
  connected: boolean;
  configured: boolean;
  lastSync?: string;
  error?: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const integration = searchParams.get("integration");
  
  // Check environment for API keys
  const steamKey = process.env.STEAM_API_KEY;
  const rawgKey = process.env.RAWG_API_KEY;
  const twitchClientId = process.env.TWITCH_CLIENT_ID;
  const twitchSecret = process.env.TWITCH_CLIENT_SECRET;
  const elevenlabsKey = process.env.ELEVENLABS_API_KEY;
  
  // Build status for each integration
  const getSteamStatus = (): IntegrationStatus => ({
    name: "steam",
    connected: !!steamKey,
    configured: !!steamKey,
    error: !steamKey ? "Add STEAM_API_KEY to .env.local" : undefined,
  });
  
  const getRawgStatus = (): IntegrationStatus => ({
    name: "rawg",
    connected: !!rawgKey,
    configured: !!rawgKey,
    error: !rawgKey ? "Add RAWG_API_KEY to .env.local" : undefined,
  });
  
  const getTwitchStatus = (): IntegrationStatus => ({
    name: "twitch",
    connected: !!(twitchClientId && twitchSecret),
    configured: !!(twitchClientId && twitchSecret),
    error: !twitchClientId || !twitchSecret ? "Add TWITCH_CLIENT_ID and TWITCH_CLIENT_SECRET to .env.local" : undefined,
  });
  
  const getElevenLabsStatus = (): IntegrationStatus => ({
    name: "elevenlabs",
    connected: !!elevenlabsKey,
    configured: !!elevenlabsKey,
    error: !elevenlabsKey ? "Add ELEVENLABS_API_KEY to .env.local for voice" : undefined,
  });
  
  const statuses = {
    steam: getSteamStatus(),
    rawg: getRawgStatus(),
    twitch: getTwitchStatus(),
    elevenlabs: getElevenLabsStatus(),
  };
  
  // Return specific integration or all
  if (integration && statuses[integration as keyof typeof statuses]) {
    return NextResponse.json(statuses[integration as keyof typeof statuses]);
  }
  
  return NextResponse.json({
    integrations: statuses,
    summary: {
      total: Object.keys(statuses).length,
      connected: Object.values(statuses).filter(s => s.connected).length,
      configured: Object.values(statuses).filter(s => s.configured).length,
    },
  });
}