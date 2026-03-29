/**
 * MEOK AI LABS — RAWG Game Search Proxy
 *
 * Proxies RAWG.io API calls server-side to hide the API key.
 * Requires RAWG_API_KEY in environment variables.
 * Free tier: 20,000 requests/month — https://rawg.io/apidocs
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const runtime = "nodejs";

const RAWG_BASE = "https://api.rawg.io/api";

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.RAWG_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Configure RAWG_API_KEY in .env.local" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") ?? "";
  const page = searchParams.get("page") ?? "1";
  const pageSize = searchParams.get("page_size") ?? "10";

  if (!query.trim()) {
    return NextResponse.json(
      { error: "Provide a search query via ?query=" },
      { status: 400 }
    );
  }

  try {
    const url = new URL(`${RAWG_BASE}/games`);
    url.searchParams.set("key", apiKey);
    url.searchParams.set("search", query.trim());
    url.searchParams.set("page", page);
    url.searchParams.set("page_size", pageSize);
    url.searchParams.set("search_precise", "true");

    const res = await fetch(url.toString());

    if (!res.ok) {
      return NextResponse.json(
        { error: `RAWG API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json() as {
      count: number;
      next: string | null;
      previous: string | null;
      results: Array<{
        id: number;
        slug: string;
        name: string;
        released: string | null;
        background_image: string | null;
        rating: number;
        rating_top: number;
        ratings_count: number;
        metacritic: number | null;
        platforms: Array<{ platform: { name: string } }> | null;
        genres: Array<{ name: string }>;
        short_screenshots: Array<{ id: number; image: string }>;
        tags: Array<{ name: string }>;
      }>;
    };

    return NextResponse.json({
      count: data.count,
      hasNext: !!data.next,
      games: data.results.map((g) => ({
        id: g.id,
        slug: g.slug,
        name: g.name,
        released: g.released,
        backgroundImage: g.background_image,
        rating: g.rating,
        ratingTop: g.rating_top,
        ratingsCount: g.ratings_count,
        metacritic: g.metacritic,
        platforms: g.platforms?.map((p) => p.platform.name) ?? [],
        genres: g.genres.map((g) => g.name),
        screenshots: g.short_screenshots.slice(0, 3).map((s) => s.image),
      })),
    });
  } catch (err) {
    console.error("[gaming/search/route] fetch error:", err);
    return NextResponse.json(
      { error: "Failed to reach RAWG API. Please try again." },
      { status: 502 }
    );
  }
}
