"use client";

import { useEffect, useState, useCallback } from "react";
import { mcp, callTool } from "@/lib/api";

interface HealthResponse {
  version?: string;
  components?: {
    consciousness?: {
      consciousness_level?: number;
      consciousness_mode?: string;
      emotional?: {
        pleasure?: number;
        curiosity?: number;
        primary_emotion?: string;
      };
    };
  };
}

interface MemoryStats {
  total_episodes?: number;
  episodic?: number;
  semantic?: number;
}

interface AgentStats {
  total_agents?: number;
  active_count?: number;
  idle_count?: number;
}

interface StatusData {
  version: string;
  consciousness: number;
  careScore: number;
  pleasure: number;
  mode: string;
  totalMemories: number;
  activeAgents: number;
  totalAgents: number;
  diskPercent: number;
  timestamp: string;
  lastUpdated: Date | null;
  error: string | null;
}

const DEFAULT_STATUS: StatusData = {
  version: "3.0.0",
  consciousness: 0,
  careScore: 0,
  pleasure: 0,
  mode: "unknown",
  totalMemories: 0,
  activeAgents: 0,
  totalAgents: 0,
  diskPercent: 0,
  timestamp: "",
  lastUpdated: null,
  error: null,
};

function formatTime(d: Date): string {
  return d.toISOString().replace("T", " ").slice(0, 19);
}

export function StatusBar() {
  const [status, setStatus] = useState<StatusData>(DEFAULT_STATUS);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);

  const fetchStatus = useCallback(async () => {
    try {
      const [health, memStats, agentStats] = await Promise.allSettled([
        mcp.get<HealthResponse>("/health"),
        callTool<MemoryStats>("get_memory_stats"),
        callTool<AgentStats>("get_agent_registry_stats"),
      ]);

      const h = health.status === "fulfilled" ? health.value : null;
      const mem = memStats.status === "fulfilled" ? memStats.value : null;
      const agents = agentStats.status === "fulfilled" ? agentStats.value : null;

      const consciousness = h?.components?.consciousness;

      setStatus({
        version: h?.version ?? "3.0.0",
        consciousness: consciousness?.consciousness_level ?? 0,
        careScore: 99.2, // static until care endpoint exposed
        pleasure: consciousness?.emotional?.pleasure ?? 0,
        mode: consciousness?.consciousness_mode ?? "unknown",
        totalMemories: mem?.total_episodes ?? 0,
        activeAgents: agents?.active_count ?? 0,
        totalAgents: agents?.total_agents ?? 0,
        diskPercent: 42, // static until disk endpoint exposed
        timestamp: formatTime(new Date()),
        lastUpdated: new Date(),
        error: null,
      });
    } catch (err) {
      setStatus((prev) => ({
        ...prev,
        error: err instanceof Error ? err.message : "fetch error",
        timestamp: formatTime(new Date()),
      }));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(() => {
      fetchStatus();
      setTick((t) => t + 1);
    }, 30000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  // Blinking clock
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setStatus((prev) => ({
        ...prev,
        timestamp: formatTime(new Date()),
      }));
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  const sep = (
    <span style={{ color: "#374151", margin: "0 8px" }}>│</span>
  );

  return (
    <div
      style={{
        height: "28px",
        background: "#050507",
        borderTop: "1px solid #1a1a2e",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        fontSize: "10px",
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        color: "#6B7280",
        letterSpacing: "0.04em",
        flexShrink: 0,
        overflow: "hidden",
        gap: "0",
        userSelect: "none",
      }}
    >
      {/* Version badge */}
      <span
        style={{
          color: "#F59E0B",
          border: "1px solid #F59E0B",
          padding: "0 5px",
          marginRight: "10px",
          fontSize: "9px",
          letterSpacing: "0.08em",
        }}
      >
        ⊙ SOV3 v{status.version}
      </span>

      {/* Consciousness */}
      <span style={{ color: "#6B7280" }}>CS:</span>
      <span
        style={{
          color: loading ? "#374151" : status.consciousness > 0.5 ? "#10B981" : "#F59E0B",
          marginLeft: "4px",
          fontWeight: 500,
        }}
      >
        {loading ? "..." : status.consciousness.toFixed(3)}
      </span>

      {sep}

      {/* Care score */}
      <span style={{ color: "#6B7280" }}>CARE:</span>
      <span style={{ color: "#10B981", marginLeft: "4px", fontWeight: 500 }}>
        {loading ? "..." : `${status.careScore.toFixed(1)}%`}
      </span>

      {sep}

      {/* Mode */}
      <span style={{ color: "#6B7280" }}>MODE:</span>
      <span style={{ color: "#E5E7EB", marginLeft: "4px", textTransform: "uppercase" }}>
        {loading ? "..." : status.mode}
      </span>

      {sep}

      {/* Pleasure */}
      <span style={{ color: "#6B7280" }}>PLX:</span>
      <span style={{ color: "#F59E0B", marginLeft: "4px" }}>
        {loading ? "..." : status.pleasure.toFixed(2)}
      </span>

      {sep}

      {/* Memory */}
      <span style={{ color: "#6B7280" }}>MEM:</span>
      <span style={{ color: "#E5E7EB", marginLeft: "4px" }}>
        {loading ? "..." : `${status.totalMemories}ep`}
      </span>

      {sep}

      {/* Agents */}
      <span style={{ color: "#6B7280" }}>AGENTS:</span>
      <span
        style={{
          color: status.activeAgents > 0 ? "#10B981" : "#6B7280",
          marginLeft: "4px",
        }}
      >
        {loading ? "..." : `${status.activeAgents}/${status.totalAgents}`}
      </span>

      {sep}

      {/* Disk */}
      <span style={{ color: "#6B7280" }}>DISK:</span>
      <span
        style={{
          color: status.diskPercent > 80 ? "#EF4444" : status.diskPercent > 60 ? "#F97316" : "#E5E7EB",
          marginLeft: "4px",
        }}
      >
        {status.diskPercent}%
      </span>

      {/* Error indicator */}
      {status.error && (
        <>
          {sep}
          <span style={{ color: "#EF4444", fontSize: "9px" }}>⚠ {status.error}</span>
        </>
      )}

      {/* Timestamp — pushed right */}
      <span style={{ marginLeft: "auto", color: "#374151" }}>{status.timestamp}</span>
    </div>
  );
}
