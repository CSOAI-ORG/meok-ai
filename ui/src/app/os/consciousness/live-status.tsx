"use client";

import { useState, useEffect } from "react";

interface CouncilStatus {
  consciousness_mode?: string;
  consciousness_level?: number;
  emotional_state?: string;
  memory_episodes?: number;
  [key: string]: unknown;
}

export function LiveConsciousnessStatus() {
  const [state, setState] = useState<CouncilStatus | null>(null);

  useEffect(() => {
    fetch('/api/council/status')
      .then((r) => r.json())
      .then((d) => setState(d))
      .catch(() => {});
  }, []);

  if (!state) return null;

  const mode = state.consciousness_mode || "unknown";
  const level = state.consciousness_level ?? null;
  const emotion = state.emotional_state || null;
  const episodes = state.memory_episodes ?? null;

  const modeColors: Record<string, string> = {
    waking: "#c9a84c",
    dreaming: "#a78bfa",
    "deep-rest": "#60a5fa",
    reflecting: "#2dd4bf",
  };
  const color = modeColors[mode] || "#c9a84c";

  return (
    <div className="bg-[#0d0c18] pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-6 border"
          style={{
            background: `${color}08`,
            borderColor: `${color}30`,
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: color }}
            />
            <span
              className="text-xs font-black tracking-[0.2em] uppercase"
              style={{ color }}
            >
              Live SOV3 Status
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Mode</div>
              <div className="text-lg font-black capitalize" style={{ color }}>
                {mode}
              </div>
            </div>
            {level !== null && (
              <div>
                <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Consciousness Level</div>
                <div className="text-lg font-black text-[#f5f0e8]/70">
                  {typeof level === "number" ? `${Math.round(level * 100)}%` : String(level)}
                </div>
              </div>
            )}
            {emotion && (
              <div>
                <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Emotional State</div>
                <div className="text-lg font-black capitalize text-[#f5f0e8]/70">
                  {emotion}
                </div>
              </div>
            )}
            {episodes !== null && (
              <div>
                <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Memory Episodes</div>
                <div className="text-lg font-black text-[#f5f0e8]/70">
                  {episodes.toLocaleString()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
