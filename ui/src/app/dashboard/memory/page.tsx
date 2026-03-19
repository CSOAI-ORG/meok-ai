"use client";

import { useEffect, useState, useCallback } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MemoryTimeline } from "@/components/memory-timeline";
import type { MemoryStats, MemoryEpisode } from "@/lib/types";

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

export default function MemoryPage() {
  const [stats, setStats] = useState<MemoryStats | null>(null);
  const [memories, setMemories] = useState<MemoryEpisode[]>([]);
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
    loadMemories().then(setMemories).catch(console.error);
  }, [loadMemories]);

  // Reload when agent filter changes
  useEffect(() => {
    if (!query) {
      loadMemories(agentFilter).then(setMemories).catch(console.error);
    }
  }, [agentFilter, loadMemories, query]);

  const handleSearch = async () => {
    if (!query.trim()) {
      // Clear search — reload with filter
      const fresh = await loadMemories(agentFilter);
      setMemories(fresh);
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
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Memory</h2>
        <p className="text-sm text-white/40 mt-1">
          {stats
            ? `${stats.total_episodes} episodes • avg care ${(stats.average_care_weight * 100).toFixed(0)}%`
            : "Loading..."}
        </p>
      </div>

      {/* Search + filters */}
      <div className="space-y-2">
        <div className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search memories..."
            className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50"
          />
          <Button onClick={handleSearch} disabled={searching}>
            {searching ? "Searching..." : "Search"}
          </Button>
        </div>

        {/* Agent filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-white/30">Agent:</span>
          {KNOWN_AGENTS.map((agent) => (
            <button
              key={agent}
              onClick={() => setAgentFilter(agent)}
              className={`text-xs px-2 py-1 rounded-md transition-colors ${
                agentFilter === agent
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "bg-white/5 text-white/40 hover:text-white/70 border border-transparent"
              }`}
            >
              {agent}
            </button>
          ))}
        </div>

        {/* Memory type tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-white/30">Type:</span>
          {MEMORY_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`text-xs px-2 py-1 rounded-md transition-colors ${
                typeFilter === t
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                  : "bg-white/5 text-white/40 hover:text-white/70 border border-transparent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Active filters indicator */}
      {(agentFilter !== "all" || typeFilter !== "all") && (
        <div className="flex items-center gap-2 text-xs text-white/40">
          <span>Filtering by:</span>
          {agentFilter !== "all" && (
            <Badge variant="outline" className="text-cyan-400 border-cyan-400/30">
              agent: {agentFilter}
            </Badge>
          )}
          {typeFilter !== "all" && (
            <MemoryTypeBadge type={typeFilter} />
          )}
          <button
            className="text-white/30 hover:text-white/60 underline"
            onClick={() => { setAgentFilter("all"); setTypeFilter("all"); }}
          >
            clear
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Episodes</span>
                <span className="text-xs text-white/30 font-normal">
                  {displayMemories.length} shown
                </span>
              </CardTitle>
            </CardHeader>
            <MemoryTimeline memories={displayMemories} />
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent>
              {stats ? (
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/40">Total</span>
                    <span className="text-white">{stats.total_episodes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Avg importance</span>
                    <span className="text-white">{(stats.average_importance * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Avg care weight</span>
                    <span className="text-white">{(stats.average_care_weight * 100).toFixed(0)}%</span>
                  </div>
                </div>
              ) : (
                <p className="text-white/30 text-sm">Loading...</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>By Type</CardTitle>
            </CardHeader>
            <CardContent>
              {stats?.by_type ? (
                <div className="space-y-2">
                  {Object.entries(stats.by_type).map(([type, count]) => (
                    <div
                      key={type}
                      className="flex justify-between text-sm items-center cursor-pointer hover:bg-white/5 rounded px-1"
                      onClick={() => setTypeFilter(type)}
                    >
                      <MemoryTypeBadge type={type} />
                      <span className="text-white/70">{count as number}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>

          {/* z_self meta-memory note */}
          <Card className="border-purple-500/20 bg-purple-500/5">
            <CardContent className="pt-4">
              <p className="text-xs text-white/30">
                <span className="text-purple-400 font-medium">z_self</span> observations are stored
                separately in MetaMemory. Filter by{" "}
                <button
                  className="text-cyan-400 underline"
                  onClick={() => setAgentFilter("z_self")}
                >
                  agent: z_self
                </button>{" "}
                to see meta-cognitive records.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
