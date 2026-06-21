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

const TYPE_STYLES: Record<FeedEvent["type"], { icon: string; color: string }> = {
  council: { icon: "🏛️", color: "#c9a84c" },
  agent: { icon: "🤖", color: "#2d9b8a" },
  pioneer: { icon: "🚀", color: "#3b82f6" },
  research: { icon: "📜", color: "#8b5cf6" },
};

export default function DomeLiveFeed() {
  const [events, setEvents] = useState<FeedEvent[]>([]);
  const [index, setIndex] = useState(0);
  const [live, setLive] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/events/stream", { cache: "no-store" });
        if (res.ok) {
          const data = (await res.json()) as FeedEvent[];
          setEvents(data);
          setLive(true);
        }
      } catch {
        // keep empty → nothing rendered until fallback below
      }
    }
    void load();
  }, []);

  useEffect(() => {
    if (events.length === 0) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % events.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [events.length]);

  const display = events.length > 0 ? events : [];
  const visible = display.length
    ? display.slice(index, index + 5).concat(display.slice(0, Math.max(0, index + 5 - display.length)))
    : [];

  return (
    <div className="space-y-3">
      {live && (
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#22c55e]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
          </span>
          Live from SOV3 mesh
        </div>
      )}
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
      {display.length === 0 && (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-sm text-white/50">
          Waiting for live events from the SOV3 mesh...
        </div>
      )}
    </div>
  );
}
