/**
 * MEOK AI LABS — Steam API Proxy
 *
 * Proxies Steam Web API calls server-side to hide the API key and avoid CORS.
 * Requires STEAM_API_KEY in environment variables.
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const runtime = "nodejs";

const STEAM_API_BASE = "https://api.steampowered.com";

// Extract a 64-bit Steam ID from a profile URL or raw ID string
function parseSteamId(input: string): string | null {
  const trimmed = input.trim();
  // Raw numeric 64-bit Steam ID
  if (/^\d{17}$/.test(trimmed)) return trimmed;
  // Profile URL: steamcommunity.com/profiles/76561198XXXXXXXXX
  const profileMatch = trimmed.match(/\/profiles\/(\d{17})/);
  if (profileMatch) return profileMatch[1];
  // Vanity URL: steamcommunity.com/id/someusername — not resolvable without an extra API call
  return null;
}

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.STEAM_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Configure STEAM_API_KEY in .env.local" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const rawId = searchParams.get("steamid") ?? "";

  const steamId = parseSteamId(rawId);
  if (!steamId) {
    return NextResponse.json(
      {
        error:
          "Invalid Steam ID. Provide a 17-digit Steam ID or a full profile URL (steamcommunity.com/profiles/...).",
      },
      { status: 400 }
    );
  }

  try {
    // Fetch player summary + owned games + recently played in parallel
    const [summaryRes, recentRes] = await Promise.all([
      fetch(
        `${STEAM_API_BASE}/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`
      ),
      fetch(
        `${STEAM_API_BASE}/IPlayerService/GetRecentlyPlayedGames/v1/?key=${apiKey}&steamid=${steamId}&count=5`
      ),
    ]);

    if (!summaryRes.ok) {
      return NextResponse.json(
        { error: `Steam API error: ${summaryRes.status}` },
        { status: summaryRes.status }
      );
    }

    const summaryData = await summaryRes.json() as {
      response: {
        players: Array<{
          steamid: string;
          personaname: string;
          avatarfull: string;
          profileurl: string;
          gameid?: string;
          gameextrainfo?: string;
          lastlogoff: number;
          timecreated: number;
          personastate: number;
        }>;
      };
    };

    const player = summaryData.response?.players?.[0];
    if (!player) {
      return NextResponse.json(
        { error: "Steam profile not found or is private." },
        { status: 404 }
      );
    }

    // Owned games count — separate endpoint
    const ownedRes = await fetch(
      `${STEAM_API_BASE}/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamId}&include_appinfo=false&include_played_free_games=true`
    );
    const ownedData = ownedRes.ok
      ? (await ownedRes.json() as { response: { game_count?: number } })
      : null;

    const recentData = recentRes.ok
      ? (await recentRes.json() as {
          response: {
            games?: Array<{
              appid: number;
              name: string;
              playtime_2weeks: number;
              playtime_forever: number;
              img_icon_url: string;
            }>;
          };
        })
      : null;

    const statusMap: Record<number, string> = {
      0: "Offline",
      1: "Online",
      2: "Busy",
      3: "Away",
      4: "Snooze",
      5: "Looking to trade",
      6: "Looking to play",
    };

    return NextResponse.json({
      steamid: player.steamid,
      username: player.personaname,
      avatar: player.avatarfull,
      profileUrl: player.profileurl,
      status: statusMap[player.personastate] ?? "Unknown",
      currentGame: player.gameextrainfo ?? null,
      gamesCount: ownedData?.response?.game_count ?? null,
      recentGames:
        recentData?.response?.games?.map((g) => ({
          appid: g.appid,
          name: g.name,
          playtime2Weeks: g.playtime_2weeks,
          playtimeForever: g.playtime_forever,
          iconUrl: g.img_icon_url
            ? `https://media.steampowered.com/steamcommunity/public/images/apps/${g.appid}/${g.img_icon_url}.jpg`
            : null,
        })) ?? [],
    });
  } catch (err) {
    console.error("[steam/route] fetch error:", err);
    return NextResponse.json(
      { error: "Failed to reach Steam API. Please try again." },
      { status: 502 }
    );
  }
}
