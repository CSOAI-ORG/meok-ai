"use client";

import { useEffect, useState } from "react";
import { Surface } from "@/components/design-system/surface";

const SCORES = [
  { rank: 1, name: "filesystem", score: 98.7, status: "GOLD" },
  { rank: 2, name: "github", score: 97.2, status: "GOLD" },
  { rank: 3, name: "slack", score: 94.1, status: "GOOD" },
  { rank: 4, name: "postgres", score: 89.3, status: "GOOD" },
  { rank: 5, name: "aws-s3", score: 82.1, status: "WARN" },
  { rank: 6, name: "fetch", score: 78.4, status: "GOOD" },
  { rank: 7, name: "brave-search", score: 74.9, status: "GOOD" },
  { rank: 8, name: "playwright", score: 71.2, status: "WARN" },
  { rank: 9, name: "puppeteer", score: 64.5, status: "WARN" },
  { rank: 10, name: "sequential-thinking", score: 58.0, status: "WARN" },
];

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  GOLD: { bg: "rgba(201,168,76,0.15)", text: "#c9a84c" },
  GOOD: { bg: "rgba(52,211,153,0.12)", text: "#22c55e" },
  WARN: { bg: "rgba(224,115,64,0.12)", text: "#e07340" },
  BROKEN: { bg: "rgba(248,113,113,0.12)", text: "#f87171" },
  DEAD: { bg: "rgba(255,255,255,0.05)", text: "#9ca3af" },
};

export default function TownScoreboard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2500);
    return () => clearInterval(id);
  }, []);

  const liveScores = SCORES.map((s, i) => ({
    ...s,
    liveScore: s.score + Math.sin((tick + i) * 0.5) * 0.4,
  }));

  return (
    <Surface variant="elevated" className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
        <div>
          <h3 className="text-lg font-semibold text-white">CSOAI MCP Scoreboard</h3>
          <p className="text-xs text-white/50">Live health scores from protocol testing quests</p>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-[#c9a84c]">1,247</div>
          <div className="text-xs text-white/50">Your pts · Rank #42</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.02] text-xs uppercase tracking-wider text-white/40">
            <tr>
              <th className="px-6 py-3 font-medium">Rank</th>
              <th className="px-6 py-3 font-medium">MCP Server</th>
              <th className="px-6 py-3 font-medium">Score</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {liveScores.map((s) => {
              const style = STATUS_STYLES[s.status] ?? STATUS_STYLES.DEAD;
              return (
                <tr key={s.name} className="border-b border-white/[0.03] transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-3 text-white/60">#{s.rank}</td>
                  <td className="px-6 py-3 font-medium text-white">{s.name}</td>
                  <td className="px-6 py-3 tabular-nums text-white/80">{s.liveScore.toFixed(1)}</td>
                  <td className="px-6 py-3">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="border-t border-white/5 px-6 py-3 text-xs text-white/40">
        Powered by openmcp · Scores simulate live protocol test results.
      </div>
    </Surface>
  );
}
