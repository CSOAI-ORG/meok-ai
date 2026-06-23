"use client";

import { useEffect, useState } from "react";
import { PheromoneMatrix, PheromoneMessage } from "./PheromoneMatrix";

interface TownFeedVerdict {
  ts?: string;
  winner?: "A" | "B" | "TIE";
  margin?: number;
  prompt?: string;
  king?: string;
  queen?: string;
}

interface TownFeed {
  recent_verdicts?: TownFeedVerdict[];
}

interface Agent {
  id: string;
  name: string;
  role: string;
}

function deriveMessages(agents: Agent[], verdicts: TownFeedVerdict[]): PheromoneMessage[] {
  if (agents.length < 2 || !verdicts?.length) return [];

  const topics = [
    "fiscal rule",
    "budget transfer",
    "AI Act fine",
    "sovereign debt",
    "liquidity alert",
    "green taxonomy",
    "CBDC pilot",
    "crypto framework",
  ];

  const messages: PheromoneMessage[] = [];
  const sample = verdicts.slice(-12);

  for (let i = 0; i < sample.length; i++) {
    const v = sample[i];
    const fromIdx = i % agents.length;
    const toIdx = (i + 1) % agents.length;
    const intensity = Math.max(0.3, Math.min(1, (v.margin ?? 0.05) * 15));
    messages.push({
      from: agents[fromIdx].name,
      to: agents[toIdx].name,
      intensity,
      topic: v.prompt?.slice(0, 40).replace(/\s+/g, " ") || topics[i % topics.length],
    });
  }

  // Add reciprocal signals for visual balance, derived from verdict winner direction.
  for (let i = 0; i < Math.min(sample.length, 6); i++) {
    const v = sample[i];
    const fromIdx = (i + 2) % agents.length;
    const toIdx = (i + 3) % agents.length;
    messages.push({
      from: agents[fromIdx].name,
      to: agents[toIdx].name,
      intensity: v.winner === "A" ? 0.75 : v.winner === "B" ? 0.55 : 0.35,
      topic: v.winner === "TIE" ? "coalition building" : "policy majority",
    });
  }

  return messages;
}

export function LivePheromoneMatrix() {
  const [messages, setMessages] = useState<PheromoneMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [agentsRes, feedRes] = await Promise.all([
          fetch("/api/town/agents", { cache: "no-store" }),
          fetch("/town_feed.json", { cache: "no-store" }),
        ]);

        const agentsData = agentsRes.ok ? await agentsRes.json() : { agents: [] };
        const feedData = feedRes.ok ? await feedRes.json() : { recent_verdicts: [] };

        const agents = (agentsData.agents ?? []).slice(0, 12) as Agent[];
        const verdicts = (feedData.recent_verdicts ?? []) as TownFeedVerdict[];

        if (!cancelled) {
          setMessages(deriveMessages(agents, verdicts));
        }
      } catch (err) {
        console.error("[LivePheromoneMatrix] failed:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
        <div className="skeleton mb-4 h-4 w-48 rounded" />
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="skeleton aspect-square rounded" />
          ))}
        </div>
      </div>
    );
  }

  return <PheromoneMatrix messages={messages} />;
}
