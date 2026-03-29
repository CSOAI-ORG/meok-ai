/**
 * MEOK AI LABS — Twitch Top Games Proxy
 *
 * Uses Twitch's Client Credentials OAuth flow (app auth — no user login required).
 * Requires TWITCH_CLIENT_ID + TWITCH_CLIENT_SECRET in environment variables.
 * Free to use: https://dev.twitch.tv/docs/api/
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const runtime = "nodejs";

// Simple in-memory token cache (lives for process lifetime, refreshed when expired)
let cachedToken: { access_token: string; expires_at: number } | null = null;

async function getAppToken(clientId: string, clientSecret: string): Promise<string> {
  const now = Date.now();

  // Reuse cached token if still valid (with 60s buffer)
  if (cachedToken && cachedToken.expires_at - 60_000 > now) {
    return cachedToken.access_token;
  }

  const res = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
    }),
  });

  if (!res.ok) {
    throw new Error(`Twitch OAuth error: ${res.status}`);
  }

  const data = await res.json() as {
    access_token: string;
    expires_in: number;
    token_type: string;
  };

  cachedToken = {
    access_token: data.access_token,
    expires_at: now + data.expires_in * 1000,
  };

  return data.access_token;
}

export async function GET(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const clientId = process.env.TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET;

  if (!clientId) {
    return NextResponse.json(
      { error: "Configure TWITCH_CLIENT_ID in .env.local" },
      { status: 500 }
    );
  }
  if (!clientSecret) {
    return NextResponse.json(
      { error: "Configure TWITCH_CLIENT_SECRET in .env.local" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const limit = Math.min(Number(searchParams.get("limit") ?? "10"), 20);

  try {
    const token = await getAppToken(clientId, clientSecret);

    // Fetch top games by viewer count
    const gamesRes = await fetch(
      `https://api.twitch.tv/helix/games/top?first=${limit}`,
      {
        headers: {
          "Client-Id": clientId,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!gamesRes.ok) {
      return NextResponse.json(
        { error: `Twitch Games API error: ${gamesRes.status}` },
        { status: gamesRes.status }
      );
    }

    const gamesData = await gamesRes.json() as {
      data: Array<{
        id: string;
        name: string;
        box_art_url: string;
      }>;
      pagination: { cursor?: string };
    };

    // For each top game, fetch a live stream count via /streams?game_id= (one per game is costly,
    // so instead fetch the top streams list and aggregate viewer counts per game_id)
    const gameIds = gamesData.data.map((g) => g.id);

    const streamsRes = await fetch(
      `https://api.twitch.tv/helix/streams?${gameIds.map((id) => `game_id=${id}`).join("&")}&first=100`,
      {
        headers: {
          "Client-Id": clientId,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const streamsData = streamsRes.ok
      ? (await streamsRes.json() as {
          data: Array<{
            game_id: string;
            viewer_count: number;
          }>;
        })
      : { data: [] };

    // Aggregate viewer counts per game
    const viewersByGame: Record<string, number> = {};
    const streamCountByGame: Record<string, number> = {};
    for (const stream of streamsData.data) {
      viewersByGame[stream.game_id] =
        (viewersByGame[stream.game_id] ?? 0) + stream.viewer_count;
      streamCountByGame[stream.game_id] =
        (streamCountByGame[stream.game_id] ?? 0) + 1;
    }

    const BOX_W = 285;
    const BOX_H = 380;

    return NextResponse.json({
      games: gamesData.data.map((game, index) => ({
        id: game.id,
        name: game.name,
        boxArtUrl: game.box_art_url
          .replace("{width}", String(BOX_W))
          .replace("{height}", String(BOX_H)),
        rank: index + 1,
        viewerCount: viewersByGame[game.id] ?? 0,
        streamCount: streamCountByGame[game.id] ?? 0,
        watchUrl: `https://www.twitch.tv/directory/game/${encodeURIComponent(game.name)}`,
      })),
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[gaming/twitch/route] error:", err);
    return NextResponse.json(
      { error: "Failed to reach Twitch API. Please try again." },
      { status: 502 }
    );
  }
}
