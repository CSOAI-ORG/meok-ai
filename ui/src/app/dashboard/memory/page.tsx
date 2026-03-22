"use client";

import { useEffect, useState, useCallback } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MemoryTimeline } from "@/components/memory-timeline";
import type { MemoryStats, MemoryEpisode } from "@/lib/types";

// ── Brand tokens ──────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const NAVY = "#1a1a2e";
const CREAM = "#f5f0e8";

// Known agent sources for filter dropdown
const KNOWN_AGENTS = [
  "all",
  "sovereign_heartbeat",
  "turiya_meta",
  "z_self",
  "z_self_meta_memory",
  "z_self_tripwires",
  "task_orchestrator",
  "shura_council",
  "council",
  "research_agent",
  "system",
];

const MEMORY_TYPES = ["all", "episodic", "semantic", "procedural", "interaction", "insight", "decision"];

// VAD dot color based on emotional score (0-1, where 0.5 = neutral)
function vadDotColor(vad?: number): string {
  if (vad === undefined) return "rgba(255,255,255,0.2)";
  if (vad >= 0.65) return "#4ade80";   // positive
  if (vad >= 0.40) return GOLD;        // neutral
  return "#f87171";                     // negative
}

function vadLabel(vad?: number): string {
  if (vad === undefined) return "";
  if (vad >= 0.65) return "positive";
  if (vad >= 0.40) return "neutral";
  return "negative";
}

function MemoryTypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    episodic: "text-blue-400 border-blue-400/30",
    semantic: "text-purple-400 border-purple-400/30",
    procedural: "text-green-400 border-green-400/30",
    interaction: "text-cyan-400 border-cyan-400/30",
    insight: "text-yellow-400 border-yellow-400/30",
    decision: "text-orange-400 border-orange-400/30",
  };
  return (
    <Badge variant="outline" className={`text-xs h-4 ${colors[type] || "text-white/40 border-white/20"}`}>
      {type}
    </Badge>
  );
}

// ── Memory card component ─────────────────────────────────────────
function MemoryCard({ memory, index }: { memory: MemoryEpisode; index: number }) {
  const memAny = memory as unknown as Record<string, unknown>
  const vad = memAny.vad_score as number | undefined;
  const dotColor = vadDotColor(vad);
  const rawTs = memAny.created_at as string | undefined
  const timestamp = rawTs
    ? new Date(rawTs).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : memory.timestamp
    ? new Date(memory.timestamp).toLocaleString("en-GB", {
        day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
      })
    : null;
  const preview = memory.content?.length > 140
    ? memory.content.slice(0, 140) + "…"
    : memory.content;

  return (
    <div
      className="rounded-xl p-4 transition-all duration-200 hover:border-white/15"
      style={{
        background: NAVY,
        border: "1px solid rgba(255,255,255,0.06)",
        animation: `fadeSlideUp 0.3s ease both ${index * 0.04}s`,
      }}
    >
      <div className="flex items-start gap-3">
        {/* VAD dot */}
        <div className="mt-1 flex-shrink-0" title={vad !== undefined ? `Emotional tone: ${vadLabel(vad)}` : "No emotional score"}>
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: dotColor, boxShadow: `0 0 5px ${dotColor}55` }}
          />
        </div>
        <div className="flex-1 min-w-0">
          {/* Top row: type badge + timestamp */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            {memory.memory_type && <MemoryTypeBadge type={memory.memory_type} />}
            {!!memAny.agent_id && (
              <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
                {String(memAny.agent_id)}
              </span>
            )}
            {timestamp && (
              <span className="ml-auto text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                {timestamp}
              </span>
            )}
          </div>
          {/* Content preview */}
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            {preview}
          </p>
          {/* VAD score if present */}
          {vad !== undefined && (
            <p className="text-[10px] mt-1.5" style={{ color: dotColor + "88" }}>
              emotional score {(vad * 100).toFixed(0)}% · {vadLabel(vad)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Loading skeleton ──────────────────────────────────────────────
function MemorySkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="rounded-xl p-4 animate-pulse"
          style={{ background: NAVY, border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex-1 space-y-2">
              <div className="flex gap-2">
                <div className="h-3.5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
                <div className="h-3.5 w-20 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
              </div>
              <div className="h-3 rounded" style={{ background: "rgba(255,255,255,0.05)", width: `${60 + (i * 17) % 35}%` }} />
              <div className="h-3 rounded" style={{ background: "rgba(255,255,255,0.04)", width: `${40 + (i * 13) % 40}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Empty state ───────────────────────────────────────────────────
function EmptyState() {
  return (
    <div
      className="rounded-2xl p-12 flex flex-col items-center text-center"
      style={{
        background: NAVY,
        border: "1px solid rgba(255,255,255,0.05)",
        animation: "fadeSlideUp 0.4s ease both",
      }}
    >
      <span className="text-5xl mb-4">🧠</span>
      <h3 className="text-base font-bold text-white mb-2">No memories yet</h3>
      <p className="text-sm max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
        You haven&rsquo;t stored any memories yet. Start a conversation and MEOK will begin remembering.
      </p>
    </div>
  );
}

export default function MemoryPage() {
  const [stats, setStats] = useState<MemoryStats | null>(null);
  const [memories, setMemories] = useState<MemoryEpisode[]>([]);
  const [memoriesLoading, setMemoriesLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [agentFilter, setAgentFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const loadMemories = useCallback(async (agentId?: string) => {
    const args: Record<string, unknown> = { limit: 20 };
    if (agentId && agentId !== "all") args.agent_id = agentId;
    const res = await callTool<{ memories: MemoryEpisode[] }>("list_memories", args);
    return res.memories || [];
  }, []);

  useEffect(() => {
    callTool<MemoryStats>("get_memory_stats").then(setStats).catch(console.error);
    setMemoriesLoading(true);
    loadMemories()
      .then(setMemories)
      .catch(console.error)
      .finally(() => setMemoriesLoading(false));
  }, [loadMemories]);

  // Reload when agent filter changes
  useEffect(() => {
    if (!query) {
      setMemoriesLoading(true);
      loadMemories(agentFilter)
        .then(setMemories)
        .catch(console.error)
        .finally(() => setMemoriesLoading(false));
    }
  }, [agentFilter, loadMemories, query]);

  const handleSearch = async () => {
    if (!query.trim()) {
      setMemoriesLoading(true);
      const fresh = await loadMemories(agentFilter);
      setMemories(fresh);
      setMemoriesLoading(false);
      return;
    }
    setSearching(true);
    try {
      const args: Record<string, unknown> = { query, limit: 20 };
      if (agentFilter !== "all") args.agent_id = agentFilter;
      const res = await callTool<{ memories: MemoryEpisode[] }>("query_memories", args);
      setMemories(res.memories || []);
    } catch (e) {
      console.error(e);
    } finally {
      setSearching(false);
    }
  };

  // Client-side type filter
  const displayMemories = typeFilter === "all"
    ? memories
    : memories.filter((m) => m.memory_type === typeFilter);

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="min-h-screen p-6 md:p-8 space-y-6" style={{ background: DEEP, color: "white" }}>

        {/* ── Header + total stat ── */}
        <div style={{ animation: "fadeSlideUp 0.3s ease both" }}>
          <h2 className="text-2xl font-bold text-white">Memory</h2>
          <div className="flex items-baseline gap-3 mt-1 flex-wrap">
            {stats ? (
              <>
                <span className="text-3xl font-black" style={{ color: GOLD }}>
                  {stats.total_episodes.toLocaleString()}
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  memories stored
                </span>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)" }}
                >
                  avg care {(stats.average_care_weight * 100).toFixed(0)}%
                </span>
              </>
            ) : (
              <div className="h-8 w-24 rounded animate-pulse" style={{ background: SURFACE }} />
            )}
          </div>
        </div>

        {/* ── Search + filters ── */}
        <div className="space-y-3" style={{ animation: "fadeSlideUp 0.3s ease both 0.06s" }}>
          <div className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search memories..."
              className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
              style={{
                background: SURFACE,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = `${GOLD}50`)}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            />
            <Button
              onClick={handleSearch}
              disabled={searching}
              className="px-5"
              style={{ background: GOLD, color: "#1a1a2e", border: "none" }}
            >
              {searching ? "Searching..." : "Search"}
            </Button>
          </div>

          {/* Agent filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Agent:</span>
            {KNOWN_AGENTS.map((agent) => (
              <button
                key={agent}
                onClick={() => setAgentFilter(agent)}
                className="text-xs px-2.5 py-1 rounded-lg border transition-colors"
                style={
                  agentFilter === agent
                    ? { background: "rgba(34,211,238,0.12)", color: "#22d3ee", borderColor: "rgba(34,211,238,0.25)" }
                    : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)", borderColor: "transparent" }
                }
              >
                {agent}
              </button>
            ))}
          </div>

          {/* Memory type tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Type:</span>
            {MEMORY_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className="text-xs px-2.5 py-1 rounded-lg border transition-colors"
                style={
                  typeFilter === t
                    ? { background: "rgba(167,139,250,0.12)", color: "#a78bfa", borderColor: "rgba(167,139,250,0.25)" }
                    : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)", borderColor: "transparent" }
                }
              >
                {t}
              </button>
            ))}
          </div>

          {/* Active filters indicator */}
          {(agentFilter !== "all" || typeFilter !== "all") && (
            <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>Filtering by:</span>
              {agentFilter !== "all" && (
                <Badge variant="outline" className="text-cyan-400 border-cyan-400/30">
                  agent: {agentFilter}
                </Badge>
              )}
              {typeFilter !== "all" && <MemoryTypeBadge type={typeFilter} />}
              <button
                className="underline hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onClick={() => { setAgentFilter("all"); setTypeFilter("all"); }}
              >
                clear
              </button>
            </div>
          )}
        </div>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Memory list ── */}
          <div className="lg:col-span-2 space-y-3" style={{ animation: "fadeSlideUp 0.35s ease both 0.1s" }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-white">Episodes</h3>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                {displayMemories.length} shown
              </span>
            </div>

            {memoriesLoading ? (
              <MemorySkeleton />
            ) : displayMemories.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-2.5">
                {displayMemories.map((m, idx) => (
                  <MemoryCard key={m.id} memory={m} index={idx} />
                ))}
              </div>
            )}
          </div>

          {/* ── Sidebar stats ── */}
          <div className="space-y-4" style={{ animation: "fadeSlideUp 0.35s ease both 0.15s" }}>

            {/* Stats card */}
            <div
              className="rounded-2xl p-5"
              style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">Stats</h3>
              {stats ? (
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Total episodes</span>
                    <span className="font-bold text-base" style={{ color: GOLD }}>{stats.total_episodes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Avg importance</span>
                    <span className="text-white">{(stats.average_importance * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Avg care weight</span>
                    <span className="text-white">{(stats.average_care_weight * 100).toFixed(0)}%</span>
                  </div>
                  {/* Care bar */}
                  <div className="pt-1">
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className="h-1.5 rounded-full transition-all duration-700"
                        style={{ width: `${Math.round(stats.average_care_weight * 100)}%`, background: GOLD }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-4 rounded animate-pulse" style={{ background: "rgba(255,255,255,0.06)" }} />
                  ))}
                </div>
              )}
            </div>

            {/* By Type card */}
            <div
              className="rounded-2xl p-5"
              style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">By Type</h3>
              {stats?.by_type ? (
                <div className="space-y-2">
                  {Object.entries(stats.by_type).map(([type, count]) => (
                    <button
                      key={type}
                      className="w-full flex justify-between items-center px-2 py-1.5 rounded-lg transition-colors"
                      style={{ background: "transparent" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      onClick={() => setTypeFilter(type)}
                    >
                      <MemoryTypeBadge type={type} />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{count as number}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-6 rounded animate-pulse" style={{ background: "rgba(255,255,255,0.04)" }} />
                  ))}
                </div>
              )}
            </div>

            {/* z_self meta-memory note */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "rgba(167,139,250,0.05)", border: "1px solid rgba(167,139,250,0.15)" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>z_self</span> observations are stored
                separately in MetaMemory. Filter by{" "}
                <button
                  className="underline"
                  style={{ color: "#22d3ee" }}
                  onClick={() => setAgentFilter("z_self")}
                >
                  agent: z_self
                </button>{" "}
                to see meta-cognitive records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
