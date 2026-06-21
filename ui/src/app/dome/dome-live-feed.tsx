"use client";

import { useEffect, useState } from "react";

interface FeedEvent {
  id: string;
  time: string;
  actor: string;
  action: string;
  detail: string;
  type: "council" | "agent" | "pioneer" | "research";
}

const EVENTS: FeedEvent[] = [
  { id: "1", time: "Now", actor: "Council", action: "approved water-rationing policy", detail: "Vote: 41-6", type: "council" },
  { id: "2", time: "2m ago", actor: "Aria", action: "sold 12 energy units", detail: "Market price: 0.04 MEOK", type: "agent" },
  { id: "3", time: "4m ago", actor: "Pioneer #1,184", action: "claimed a residential plot", detail: "District 3, Block 7", type: "pioneer" },
  { id: "4", time: "7m ago", actor: "Research", action: "dataset completed", detail: "30-day town-life social dynamics", type: "research" },
  { id: "5", time: "11m ago", actor: "Marcus", action: "patrolled Industrial District", detail: "0 incidents reported", type: "agent" },
  { id: "6", time: "14m ago", actor: "Council", action: "funded orbital shuttle prototype", detail: "Budget: 8,400 MEOK", type: "council" },
  { id: "7", time: "19m ago", actor: "Pioneer #942", action: "co-authored governance paper", detail: "Anonymized contribution attested", type: "research" },
  { id: "8", time: "23m ago", actor: "Scout", action: "discovered anomaly", detail: "Deep Space Gate sector 4", type: "agent" },
];

const TYPE_STYLES: Record<FeedEvent["type"], { icon: string; color: string }> = {
  council: { icon: "🏛️", color: "#c9a84c" },
  agent: { icon: "🤖", color: "#2d9b8a" },
  pioneer: { icon: "🚀", color: "#3b82f6" },
  research: { icon: "📜", color: "#8b5cf6" },
};

export default function DomeLiveFeed() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % EVENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const visible = EVENTS.slice(index, index + 5).concat(EVENTS.slice(0, Math.max(0, index + 5 - EVENTS.length)));

  return (
    <div className="space-y-3">
      {visible.map((e) => {
        const style = TYPE_STYLES[e.type];
        return (
          <div key={`${e.id}-${index}`} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 transition-all duration-500">
            <span className="text-lg">{style.icon}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold text-white/90">{e.actor}</span>
                <span className="shrink-0 text-[10px] font-medium uppercase tracking-wider text-white/40">{e.time}</span>
              </div>
              <p className="mt-0.5 text-sm text-white/70">
                {e.action} <span style={{ color: style.color }}>·</span> {e.detail}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
