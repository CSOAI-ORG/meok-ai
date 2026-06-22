"use client";

import { useMemo, useState } from "react";

export interface PheromoneMessage {
  from: string;
  to: string;
  intensity: number;
  topic: string;
}

interface PheromoneMatrixProps {
  messages: PheromoneMessage[];
}

const TEAL = "45, 155, 138";
const GOLD = "201, 168, 76";

export function PheromoneMatrix({ messages }: PheromoneMatrixProps) {
  const [hovered, setHovered] = useState<{ from: string; to: string } | null>(null);

  const { agents, maxIntensity, matrix } = useMemo(() => {
    const agentSet = new Set<string>();
    messages.forEach((m) => {
      agentSet.add(m.from);
      agentSet.add(m.to);
    });
    const agents = Array.from(agentSet).sort();
    const matrix = new Map<string, PheromoneMessage[]>();
    let max = 0;
    messages.forEach((m) => {
      const key = `${m.from}|${m.to}`;
      const existing = matrix.get(key) ?? [];
      existing.push(m);
      matrix.set(key, existing);
      if (m.intensity > max) max = m.intensity;
    });
    return { agents, maxIntensity: max || 1, matrix };
  }, [messages]);

  if (agents.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/50">
        No agent messages to visualise.
      </div>
    );
  }

  const size = agents.length;
  const cellWidth = Math.max(2.5, Math.min(5, 48 / size));

  function getCell(from: string, to: string) {
    const key = `${from}|${to}`;
    const msgs = matrix.get(key) ?? [];
    const intensity = msgs.reduce((sum, m) => sum + m.intensity, 0);
    const topics = msgs.map((m) => m.topic);
    return { intensity, topics };
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-block min-w-full rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-end gap-2">
          {/* Y-axis label spacer */}
          <div className="w-28 shrink-0" />

          {/* Column headers */}
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
          >
            {agents.map((agent) => (
              <div
                key={`col-${agent}`}
                className="flex items-end justify-center pb-2"
                style={{ width: `${cellWidth}rem` }}
              >
                <span
                  className="block origin-bottom-left -rotate-45 text-[10px] font-semibold uppercase tracking-wider text-white/50"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {agent}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Matrix rows */}
        <div className="space-y-1">
          {agents.map((from) => (
            <div key={`row-${from}`} className="flex items-center gap-2">
              <div className="w-28 shrink-0 pr-2 text-right">
                <span className="text-xs font-semibold text-white/80">{from}</span>
              </div>

              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
              >
                {agents.map((to) => {
                  const { intensity, topics } = getCell(from, to);
                  const isHover = hovered?.from === from && hovered?.to === to;
                  const alpha = Math.min(1, Math.max(0.08, intensity / maxIntensity));
                  const isDiagonal = from === to;

                  return (
                    <button
                      key={`${from}-${to}`}
                      type="button"
                      className="relative rounded transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50"
                      style={{
                        width: `${cellWidth}rem`,
                        height: `${cellWidth}rem`,
                        backgroundColor: isDiagonal
                          ? `rgba(${GOLD}, ${alpha * 0.5})`
                          : `rgba(${TEAL}, ${alpha})`,
                      }}
                      title={topics.length ? topics.join(" · ") : "No messages"}
                      onMouseEnter={() => setHovered({ from, to })}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered({ from, to })}
                      onBlur={() => setHovered(null)}
                      aria-label={`${from} to ${to}, intensity ${intensity}`}
                    >
                      {isHover && topics.length > 0 && (
                        <span className="absolute -top-8 left-1/2 z-10 w-max -translate-x-1/2 rounded bg-[#0d0c18] px-2 py-1 text-[10px] text-white shadow-lg ring-1 ring-white/10">
                          {topics[0]}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center justify-end gap-3 text-[10px] text-white/50">
          <span>Low</span>
          <div
            className="h-2 w-24 rounded"
            style={{
              background: `linear-gradient(90deg, rgba(${TEAL},0.08), rgba(${TEAL},1))`,
            }}
          />
          <span>High</span>
        </div>
      </div>
    </div>
  );
}
