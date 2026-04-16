"use client";

import { useState, useEffect } from "react";
import { type ConsciousnessState, getCurrentMode, tickConsciousness } from "@/lib/consciousness-engine";

interface LiveStatusData {
  consciousness_mode: string;
  consciousness_level: number;
  care_score: number;
  memory_consolidations: number;
  session_count: number;
}

export function LiveConsciousnessStatus() {
  const [state, setState] = useState<LiveStatusData | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/os/consciousness-tick");
        if (!res.ok) return;
        const data = await res.json() as { state?: ConsciousnessState | null };
        if (data.state && typeof data.state === "object") {
          const ticked = tickConsciousness(data.state);
          const mode = getCurrentMode(ticked);
          setState({
            consciousness_mode: mode,
            consciousness_level: ticked.careScore ?? 0,
            care_score: ticked.careScore ?? 0,
            memory_consolidations: ticked.memoryConsolidations ?? 0,
            session_count: ticked.sessionCount ?? 0,
          });
        }
      } catch {
        // ignore
      }
    }
    void load();

    const id = setInterval(() => {
      void load();
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!state) return null;

  const mode = state.consciousness_mode || "unknown";
  const level = state.consciousness_level ?? null;
  const care = state.care_score ?? null;
  const consolidations = state.memory_consolidations ?? null;
  const sessions = state.session_count ?? null;

  const modeColors: Record<string, string> = {
    waking: "#c9a84c",
    dreaming: "#a78bfa",
    deep_rest: "#60a5fa",
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
              Live Consciousness Status
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div>
              <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Mode</div>
              <div className="text-lg font-black capitalize" style={{ color }}>
                {mode.replace("_", " ")}
              </div>
            </div>
            {level !== null && (
              <div>
                <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Care Score</div>
                <div className="text-lg font-black text-[#f5f0e8]/70">
                  {typeof level === "number" ? `${Math.round(level)}%` : String(level)}
                </div>
              </div>
            )}
            {care !== null && (
              <div>
                <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Care Intensity</div>
                <div className="text-lg font-black text-[#f5f0e8]/70">
                  {typeof care === "number" ? `${Math.round(care)}%` : String(care)}
                </div>
              </div>
            )}
            {consolidations !== null && (
              <div>
                <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Consolidations</div>
                <div className="text-lg font-black text-[#f5f0e8]/70">
                  {consolidations.toLocaleString()}
                </div>
              </div>
            )}
            {sessions !== null && (
              <div>
                <div className="text-xs text-[#f5f0e8]/30 font-mono mb-1">Sessions</div>
                <div className="text-lg font-black text-[#f5f0e8]/70">
                  {sessions.toLocaleString()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
