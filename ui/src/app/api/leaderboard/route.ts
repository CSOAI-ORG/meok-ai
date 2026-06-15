import { NextResponse } from "next/server";

// Returns the live gamification leaderboard
// Reads from ~/.meok/leaderboard.json (written by /Users/nicholas/clawd/meok/scripts/auto-gamification.py)
import fs from "fs";
import path from "path";
import os from "os";

export const dynamic = "force-dynamic";

export function GET() {
  const lbPath = path.join(os.homedir(), ".meok", "leaderboard.json");
  try {
    if (!fs.existsSync(lbPath)) {
      return NextResponse.json({ agents: [], error: "leaderboard.json not found — run auto-gamification.py" });
    }
    const data = JSON.parse(fs.readFileSync(lbPath, "utf-8"));
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ agents: [], error: String(e) }, { status: 500 });
  }
}
