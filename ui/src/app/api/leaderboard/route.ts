import { NextResponse } from "next/server";

// Returns the gamification leaderboard.
// Production: reads the deployed snapshot at public/leaderboard.json (committed,
// refreshed by clawd/meok/scripts/auto-gamification.py which writes to both
// ~/.meok/leaderboard.json for local dev and ui/public/leaderboard.json for deploy).
// Local dev: prefers ~/.meok/leaderboard.json if present (most up-to-date), else
// falls back to the bundled public copy. os.homedir() does NOT resolve to real
// data on Vercel serverless, hence the deployed public/ snapshot is the source.
import fs from "fs";
import path from "path";
import os from "os";

export const dynamic = "force-dynamic";

export function GET() {
  const candidates = [
    path.join(os.homedir(), ".meok", "leaderboard.json"), // local dev (freshest)
    path.join(process.cwd(), "public", "leaderboard.json"), // deployed snapshot
  ];
  for (const lbPath of candidates) {
    try {
      if (fs.existsSync(lbPath)) {
        const data = JSON.parse(fs.readFileSync(lbPath, "utf-8"));
        return NextResponse.json(data);
      }
    } catch (e) {
      // Try the next candidate; only error out if none work.
      if (lbPath === candidates[candidates.length - 1]) {
        return NextResponse.json({ agents: [], error: String(e) }, { status: 500 });
      }
    }
  }
  return NextResponse.json({ agents: [], error: "no leaderboard snapshot found" });
}
