/**
 * MEOK AI LABS — Riot Games API Proxy
 *
 * Proxies Riot API calls server-side to hide the API key and avoid CORS.
 * Supports League of Legends and Valorant lookups.
 * Requires RIOT_API_KEY in environment variables.
 */

import { NextRequest, NextResponse } from "next/server";
import { getAuthUserId } from "@/lib/api-auth";
import { z } from "zod";

export const runtime = "nodejs";

const RIOT_API_BASE = "https://{region}.api.riotgames.com";
const MATCH_V5_ROUTING_BASE = "https://{routing}.api.riotgames.com";

// Platform region → Match v5 routing value
function getMatchRouting(region: string): string {
  const americas = ["br1", "la1", "la2", "na1"];
  const asia = ["jp1", "kr"];
  const europe = ["eun1", "euw1", "tr1", "ru"];
  const sea = ["oc1", "ph2", "sg2", "th2", "tw2", "vn2"];

  const r = region.toLowerCase();
  if (americas.includes(r)) return "americas";
  if (asia.includes(r)) return "asia";
  if (europe.includes(r)) return "europe";
  if (sea.includes(r)) return "sea";
  // Default fallback to europe for unknown regions
  return "europe";
}

// ── Simple in-memory cache with TTL ──
interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

const cache = new Map<string, CacheEntry<unknown>>();
const CACHE_TTL_MS = 60_000; // 1 minute

function getCacheKey(region: string, ...parts: string[]): string {
  return [region, ...parts].join("::");
}

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
  return entry.data as T;
}

function setCached<T>(key: string, data: T, ttlMs = CACHE_TTL_MS): void {
  cache.set(key, { data, expiresAt: Date.now() + ttlMs });
}

// ── Zod schemas ──
const LolQuerySchema = z.object({
  summonerName: z.string().min(1).max(64),
  region: z.string().min(2).max(8),
  game: z.literal("lol"),
});

const ValorantQuerySchema = z.object({
  puuid: z.string().uuid(),
  region: z.string().min(2).max(8),
  game: z.literal("valorant"),
});

const LiveMatchQuerySchema = z.object({
  action: z.literal("liveMatch"),
  summonerId: z.string().min(1),
  region: z.string().min(2).max(8),
});

const UnionQuerySchema = z.union([LolQuerySchema, ValorantQuerySchema, LiveMatchQuerySchema]);

// ── Mock fallbacks ──
const MOCK_LOL_PROFILE = {
  mock: true,
  summoner: {
    id: "mock-summoner-id",
    accountId: "mock-account-id",
    puuid: "550e8400-e29b-41d4-a716-446655440000",
    name: "DemoSummoner",
    profileIconId: 1,
    revisionDate: Date.now(),
    summonerLevel: 150,
  },
  ranked: [
    {
      leagueId: "mock-league",
      queueType: "RANKED_SOLO_5x5",
      tier: "PLATINUM",
      rank: "II",
      summonerId: "mock-summoner-id",
      leaguePoints: 67,
      wins: 120,
      losses: 98,
      hotStreak: false,
      veteran: true,
      freshBlood: false,
      inactive: false,
    },
  ],
  recentMatches: {
    matchIds: ["EUW1_mock_1", "EUW1_mock_2", "EUW1_mock_3"],
    details: [
      {
        matchId: "EUW1_mock_1",
        info: {
          gameDuration: 1865,
          gameMode: "CLASSIC",
          queueId: 420,
        },
      },
    ],
  },
};

const MOCK_VALORANT_PROFILE = {
  mock: true,
  note: "Valorant match history API is restricted. Returning demo data.",
  puuid: "550e8400-e29b-41d4-a716-446655440000",
  region: "eu",
  matches: [
    {
      matchId: "mock-val-match-1",
      map: "Ascent",
      mode: "Competitive",
      result: "Win",
      kills: 22,
      deaths: 14,
      assists: 6,
      agent: "Jett",
      rank: "Diamond 2",
      rr: 68,
      playedAt: new Date(Date.now() - 3_600_000).toISOString(),
    },
    {
      matchId: "mock-val-match-2",
      map: "Bind",
      mode: "Competitive",
      result: "Loss",
      kills: 14,
      deaths: 17,
      assists: 3,
      agent: "Reyna",
      rank: "Diamond 2",
      rr: 62,
      playedAt: new Date(Date.now() - 28_800_000).toISOString(),
    },
  ],
};

const MOCK_LIVE_MATCH = {
  mock: true,
  note: "No live match found or API key not configured.",
  gameId: 0,
  mapId: 11,
  gameMode: "CLASSIC",
  gameType: "MATCHED_GAME",
  gameQueueConfigId: 420,
  participants: [],
  platformId: "EUW1",
};

// ── Helpers ──
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

function jsonResponse(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: corsHeaders() });
}

async function riotFetch<T>(url: string, apiKey: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      "X-Riot-Token": apiKey,
      Accept: "application/json",
    },
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "Unknown error");
    throw new Error(`Riot API error ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}

// ── Route handlers ──
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function GET(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const { searchParams } = new URL(req.url);
  const rawParams = Object.fromEntries(searchParams.entries());

  // Normalize for Zod
  const parseResult = UnionQuerySchema.safeParse({
    ...rawParams,
    ...(rawParams.summonerName ? { summonerName: decodeURIComponent(rawParams.summonerName) } : {}),
  });

  if (!parseResult.success) {
    return jsonResponse({ error: "Invalid query parameters", issues: parseResult.error.issues }, 400);
  }

  const params = parseResult.data;
  const apiKey = process.env.RIOT_API_KEY;

  try {
    if ("game" in params && params.game === "lol") {
      if (!apiKey) {
        return jsonResponse({ ...MOCK_LOL_PROFILE, fallbackReason: "RIOT_API_KEY not configured" });
      }
      return await handleLolQuery(params.summonerName, params.region, apiKey);
    }

    if ("game" in params && params.game === "valorant") {
      // Valorant match history is heavily restricted; always return mock with graceful messaging
      return jsonResponse({
        ...MOCK_VALORANT_PROFILE,
        puuid: params.puuid,
        region: params.region,
        ...(apiKey
          ? { note: "Valorant match API is restricted. Returning demo data." }
          : { note: "RIOT_API_KEY not configured. Returning demo data." }),
      });
    }

    if ("action" in params && params.action === "liveMatch") {
      if (!apiKey) {
        return jsonResponse({ ...MOCK_LIVE_MATCH, fallbackReason: "RIOT_API_KEY not configured" });
      }
      return await handleLiveMatch(params.summonerId, params.region, apiKey);
    }

    return jsonResponse({ error: "Unsupported query" }, 400);
  } catch (err) {
    console.error("[gaming/riot/route] error:", err);
    return jsonResponse(
      { error: "Failed to reach Riot API. Please try again." },
      502
    );
  }
}

// ── League of Legends handler ──
async function handleLolQuery(summonerName: string, region: string, apiKey: string) {
  const cacheKey = getCacheKey(region, "lol", summonerName);
  const cached = getCached<unknown>(cacheKey);
  if (cached) {
    return jsonResponse({ ...cached, cached: true });
  }

  const encodedName = encodeURIComponent(summonerName);
  const baseUrl = RIOT_API_BASE.replace("{region}", region.toLowerCase());

  // 1. Summoner profile
  const summoner = await riotFetch<{
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
  }>(`${baseUrl}/lol/summoner/v4/summoners/by-name/${encodedName}`, apiKey);

  // 2. Ranked stats + recent match IDs in parallel
  const routing = getMatchRouting(region);
  const matchBaseUrl = MATCH_V5_ROUTING_BASE.replace("{routing}", routing);

  const [ranked, matchIds] = await Promise.all([
    riotFetch<
      Array<{
        leagueId: string;
        queueType: string;
        tier: string;
        rank: string;
        summonerId: string;
        leaguePoints: number;
        wins: number;
        losses: number;
        hotStreak: boolean;
        veteran: boolean;
        freshBlood: boolean;
        inactive: boolean;
      }>
    >(`${baseUrl}/lol/league/v4/entries/by-summoner/${summoner.id}`, apiKey).catch(() => []),
    riotFetch<string[]>(
      `${matchBaseUrl}/lol/match/v5/matches/by-puuid/${summoner.puuid}/ids?start=0&count=5`,
      apiKey
    ).catch(() => []),
  ]);

  // 3. Fetch first 3 match details in parallel
  const matchDetails = await Promise.all(
    matchIds.slice(0, 3).map((matchId) =>
      riotFetch<{
        metadata: { matchId: string };
        info: {
          gameDuration: number;
          gameMode: string;
          queueId: number;
          participants?: Array<{
            puuid: string;
            summonerName: string;
            championName: string;
            kills: number;
            deaths: number;
            assists: number;
            win: boolean;
          }>;
        };
      }>(`${matchBaseUrl}/lol/match/v5/matches/${matchId}`, apiKey).catch(() => null)
    )
  );

  const result = {
    summoner,
    ranked,
    recentMatches: {
      matchIds,
      details: matchDetails
        .filter((m): m is NonNullable<typeof m> => m !== null)
        .map((m) => ({
          matchId: m.metadata.matchId,
          info: {
            gameDuration: m.info.gameDuration,
            gameMode: m.info.gameMode,
            queueId: m.info.queueId,
            playerSnapshot: m.info.participants?.find((p) => p.puuid === summoner.puuid) ?? null,
          },
        })),
    },
  };

  setCached(cacheKey, result);
  return jsonResponse(result);
}

// ── Live match handler ──
async function handleLiveMatch(summonerId: string, region: string, apiKey: string) {
  const cacheKey = getCacheKey(region, "live", summonerId);
  const cached = getCached<unknown>(cacheKey);
  if (cached) {
    return jsonResponse({ ...cached, cached: true });
  }

  const baseUrl = RIOT_API_BASE.replace("{region}", region.toLowerCase());

  try {
    const liveMatch = await riotFetch<{
      gameId: number;
      mapId: number;
      gameMode: string;
      gameType: string;
      gameQueueConfigId: number;
      participants: Array<{
        teamId: number;
        spell1Id: number;
        spell2Id: number;
        championId: number;
        profileIconId: number;
        summonerName: string;
        bot: boolean;
        summonerId: string;
        gameCustomizationObjects?: unknown[];
        perkIds?: number[];
        perkStyle?: number;
        perkSubStyle?: number;
      }>;
      platformId: string;
      bannedChampions?: unknown[];
      gameStartTime?: number;
      gameLength?: number;
    }>(`${baseUrl}/lol/spectator/v4/active-games/by-summoner/${summonerId}`, apiKey);

    // Cache live match for a shorter TTL (15s) since it changes quickly
    setCached(cacheKey, liveMatch, 15_000);
    return jsonResponse(liveMatch);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes("404")) {
      return jsonResponse({ ...MOCK_LIVE_MATCH, note: "Summoner is not currently in a game." });
    }
    throw err;
  }
}
