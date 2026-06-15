"use client";

import { useEffect, useState } from "react";

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";

interface LeaderboardAgent {
  id: string;
  trust_score: number;
  tier: string;
  badges: string[];
  badges_count: number;
}

interface LeaderboardData {
  generated_at?: string;
  agents: LeaderboardAgent[];
  error?: string;
}

const TIER_COLORS: Record<string, string> = {
  platinum: "#E5E4E2",
  gold: "#c9a84c",
  silver: "#C0C0C0",
  bronze: "#CD7F32",
  none: "#9a9a8a",
};

export default function Leaderboard() {
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch("/api/leaderboard", { cache: "no-store" });
        const d = await r.json();
        setData(d);
      } catch (e) {
        setData({ agents: [], error: String(e) });
      } finally {
        setLoading(false);
      }
    };
    load();
    const id = setInterval(load, 60000);
    return () => clearInterval(id);
  }, []);

  if (loading) return null;
  if (!data || data.error) {
    return (
      <section style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32, textAlign: "center" }}>
        <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>Live Leaderboard</h2>
        <p style={{ fontSize: 13, color: `${NAVY}88` }}>
          {data?.error ? `Engine: ${data.error}` : "Loading…"}
        </p>
        <p style={{ fontSize: 12, color: `${NAVY}66`, marginTop: 12 }}>
          The leaderboard is computed every 5 minutes by the MEOK gamification engine from SOV3 substrate events. Run{" "}
          <code style={{ background: `${NAVY}0a`, padding: "2px 6px", borderRadius: 4, fontFamily: "monospace" }}>~/clawd/meok/scripts/auto-gamification.py</code> to start the engine.
        </p>
      </section>
    );
  }

  return (
    <section style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, margin: 0 }}>Live Leaderboard</h2>
        <p style={{ fontSize: 12, color: `${NAVY}66`, margin: 0 }}>
          Updated {data.generated_at ? new Date(data.generated_at).toLocaleString() : "—"} · refreshes every 60s
        </p>
      </div>
      {data.agents.length === 0 ? (
        <p style={{ fontSize: 14, color: `${NAVY}88` }}>No agents on the leaderboard yet. Be the first — run a /verify call, deploy an MCP, or vote in the BFT Council.</p>
      ) : (
        <table style={{ width: "100%", fontSize: 14, borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${NAVY}1a`, textAlign: "left" }}>
              <th style={{ padding: 12, fontWeight: 900, width: 40 }}>#</th>
              <th style={{ padding: 12, fontWeight: 900 }}>Agent</th>
              <th style={{ padding: 12, fontWeight: 900 }}>Tier</th>
              <th style={{ padding: 12, fontWeight: 900, textAlign: "right" }}>Trust</th>
              <th style={{ padding: 12, fontWeight: 900, textAlign: "right" }}>Badges</th>
            </tr>
          </thead>
          <tbody>
            {data.agents.map((a, i) => (
              <tr key={a.id} style={{ borderBottom: `1px solid ${NAVY}0a` }}>
                <td style={{ padding: 12, fontFamily: "monospace", color: `${NAVY}88` }}>#{i + 1}</td>
                <td style={{ padding: 12, fontWeight: 700, fontFamily: "monospace" }}>{a.id}</td>
                <td style={{ padding: 12 }}>
                  <span style={{ display: "inline-block", padding: "2px 8px", fontSize: 11, fontWeight: 900, color: NAVY, background: TIER_COLORS[a.tier] || "#9a9a8a", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {a.tier}
                  </span>
                </td>
                <td style={{ padding: 12, textAlign: "right", fontFamily: "monospace", fontWeight: 900, color: GOLD }}>{a.trust_score.toLocaleString()}</td>
                <td style={{ padding: 12, textAlign: "right", fontFamily: "monospace" }}>{a.badges_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
