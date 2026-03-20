"use client";

import { useState, useEffect, useCallback } from "react";
import { callTool } from "@/lib/api";

interface Agent {
  id: string;
  name: string;
  role: string;
  status: "active" | "idle" | "error" | "sleeping";
  last_active?: string;
  task?: string;
  capabilities?: string[];
  success_rate?: number;
  tasks_completed?: number;
}

interface AgentRegistryResponse {
  total_agents?: number;
  active_count?: number;
  idle_count?: number;
  agents?: Agent[];
  registry?: Agent[];
}

const PLACEHOLDER_AGENTS: Agent[] = [
  { id: "research-001", name: "RESRCH", role: "researcher", status: "active", task: "knowledge sweep" },
  { id: "dream-001", name: "DREAM", role: "dreamer", status: "idle" },
  { id: "guard-001", name: "GUARD", role: "guardian", status: "idle" },
  { id: "scout-001", name: "SCOUT", role: "scout", status: "idle" },
  { id: "strat-001", name: "STRAT", role: "strategist", status: "idle" },
  { id: "sage-001", name: "SAGE", role: "sage", status: "idle" },
  { id: "create-001", name: "CREATE", role: "creator", status: "idle" },
  { id: "comp-001", name: "COMP", role: "companion", status: "idle" },
  { id: "council-001", name: "CNCL", role: "council", status: "idle" },
  { id: "orion-001", name: "ORION", role: "hunter", status: "idle" },
  { id: "riri-001", name: "RIRI", role: "builder", status: "idle" },
  { id: "hourman-001", name: "HOUR", role: "hourman", status: "idle" },
];

type FilterStatus = "all" | "active" | "idle" | "error";

export function AgentCouncil() {
  const [agents, setAgents] = useState<Agent[]>(PLACEHOLDER_AGENTS);
  const [stats, setStats] = useState({ total: 43, active: 1, idle: 42 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [search, setSearch] = useState("");
  const [actionLog, setActionLog] = useState<string[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const fetchAgents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await callTool<AgentRegistryResponse>("get_agent_registry_stats");
      if (result) {
        const agentList = result.agents ?? result.registry ?? PLACEHOLDER_AGENTS;
        setAgents(agentList.length > 0 ? agentList : PLACEHOLDER_AGENTS);
        setStats({
          total: result.total_agents ?? agentList.length,
          active: result.active_count ?? 0,
          idle: result.idle_count ?? agentList.length,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch agents");
      setAgents(PLACEHOLDER_AGENTS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  const logAction = (msg: string) => {
    const ts = new Date().toLocaleTimeString("en-GB", { hour12: false });
    setActionLog((prev) => [`[${ts}] ${msg}`, ...prev].slice(0, 20));
  };

  const handleRunAgent = async (agent: Agent) => {
    logAction(`Dispatching ${agent.name} (${agent.role})...`);
    try {
      await callTool("delegate_task", {
        agent_id: agent.id,
        task: `run_${agent.role}`,
      });
      logAction(`${agent.name}: task dispatched successfully`);
    } catch (err) {
      logAction(`${agent.name}: ERROR — ${err instanceof Error ? err.message : "failed"}`);
    }
  };

  const handleViewLog = (agent: Agent) => {
    setSelectedAgent(agent);
    logAction(`Viewing logs for ${agent.name}`);
  };

  const filteredAgents = agents.filter((a) => {
    if (filter !== "all" && a.status !== filter) return false;
    if (search && !a.name.toLowerCase().includes(search.toLowerCase()) &&
        !a.role.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const statusColor = (status: string) => {
    switch (status) {
      case "active": return "#10B981";
      case "idle": return "#6B7280";
      case "error": return "#EF4444";
      case "sleeping": return "#374151";
      default: return "#6B7280";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #1a1a2e",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "#050507",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#E5E7EB", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
          AGENT COUNCIL
        </span>
        <span style={{ color: "#6B7280", fontSize: "10px" }}>
          — {stats.total} registered
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 4px #10B981" }} />
          <span style={{ fontSize: "10px", color: "#10B981" }}>{stats.active} active</span>
        </div>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6B7280" }} />
        <span style={{ fontSize: "10px", color: "#6B7280" }}>{stats.idle} idle</span>
        <div style={{ flex: 1 }} />
        <button
          onClick={fetchAgents}
          disabled={loading}
          style={termBtnStyle(loading ? "#374151" : "#6B7280", loading)}
        >
          ↻
        </button>
      </div>

      {/* Filter bar */}
      <div
        style={{
          padding: "8px 16px",
          borderBottom: "1px solid #1a1a2e",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          background: "#050507",
          flexShrink: 0,
        }}
      >
        {(["all", "active", "idle", "error"] as FilterStatus[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              background: filter === f ? "rgba(245, 158, 11, 0.1)" : "none",
              border: `1px solid ${filter === f ? "#F59E0B" : "#1a1a2e"}`,
              color: filter === f ? "#F59E0B" : "#6B7280",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "10px",
              padding: "3px 8px",
              cursor: "pointer",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {f}
          </button>
        ))}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search agents..."
          style={{
            marginLeft: "8px",
            background: "#0a0a0f",
            border: "1px solid #2d2d4e",
            color: "#E5E7EB",
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "11px",
            padding: "3px 8px",
            outline: "none",
            width: "160px",
          }}
        />
        <span style={{ fontSize: "10px", color: "#374151", marginLeft: "auto" }}>
          {filteredAgents.length} shown
        </span>
      </div>

      {/* Main content: grid + log */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Agent grid */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px 16px",
          }}
        >
          {error && (
            <div
              style={{
                padding: "8px 12px",
                border: "1px solid #F59E0B",
                color: "#F97316",
                fontSize: "10px",
                marginBottom: "12px",
              }}
            >
              ⚠ {error} — showing cached data
            </div>
          )}

          {loading ? (
            <div style={{ color: "#374151", fontSize: "11px", padding: "16px 0" }}>
              Loading agents...
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "8px",
              }}
            >
              {filteredAgents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  statusColor={statusColor}
                  selected={selectedAgent?.id === agent.id}
                  onViewLog={() => handleViewLog(agent)}
                  onRun={() => handleRunAgent(agent)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right panel: selected agent + log */}
        <div
          style={{
            width: "280px",
            flexShrink: 0,
            borderLeft: "1px solid #1a1a2e",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            background: "#050507",
          }}
        >
          {/* Selected agent detail */}
          {selectedAgent && (
            <div
              style={{
                padding: "12px",
                borderBottom: "1px solid #1a1a2e",
              }}
            >
              <div style={{ fontSize: "9px", letterSpacing: "0.1em", color: "#374151", marginBottom: "8px" }}>
                AGENT DETAIL
              </div>
              <div style={{ fontSize: "12px", color: "#F59E0B", fontWeight: 600, marginBottom: "4px" }}>
                {selectedAgent.name}
              </div>
              <div style={{ fontSize: "10px", color: "#6B7280", marginBottom: "8px" }}>
                {selectedAgent.role.toUpperCase()}
              </div>
              {selectedAgent.task && (
                <div style={{ fontSize: "10px", color: "#E5E7EB", marginBottom: "4px" }}>
                  Task: {selectedAgent.task}
                </div>
              )}
              {selectedAgent.success_rate !== undefined && (
                <div style={{ fontSize: "10px", color: "#10B981" }}>
                  Success: {(selectedAgent.success_rate * 100).toFixed(0)}%
                </div>
              )}
              {selectedAgent.tasks_completed !== undefined && (
                <div style={{ fontSize: "10px", color: "#6B7280" }}>
                  Completed: {selectedAgent.tasks_completed}
                </div>
              )}
              {selectedAgent.capabilities && selectedAgent.capabilities.length > 0 && (
                <div style={{ marginTop: "8px" }}>
                  <div style={{ fontSize: "9px", color: "#374151", marginBottom: "4px" }}>CAPABILITIES</div>
                  {selectedAgent.capabilities.slice(0, 5).map((cap, i) => (
                    <div key={i} style={{ fontSize: "9px", color: "#6B7280", marginBottom: "2px" }}>
                      • {cap}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Action log */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "8px 12px",
            }}
          >
            <div style={{ fontSize: "9px", letterSpacing: "0.1em", color: "#374151", marginBottom: "8px" }}>
              ACTION LOG
            </div>
            {actionLog.length === 0 ? (
              <div style={{ fontSize: "10px", color: "#374151" }}>No actions yet</div>
            ) : (
              actionLog.map((entry, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: i === 0 ? "#E5E7EB" : "#6B7280",
                    padding: "2px 0",
                    borderBottom: "1px solid #0a0a0f",
                    lineHeight: "1.4",
                  }}
                >
                  {entry}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentCard({
  agent,
  statusColor,
  selected,
  onViewLog,
  onRun,
}: {
  agent: Agent;
  statusColor: (s: string) => string;
  selected: boolean;
  onViewLog: () => void;
  onRun: () => void;
}) {
  const color = statusColor(agent.status);

  return (
    <div
      style={{
        border: `1px solid ${selected ? "#F59E0B" : "#1a1a2e"}`,
        padding: "10px 10px 8px",
        background: selected ? "rgba(245, 158, 11, 0.04)" : "#050507",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        transition: "all 0.1s",
      }}
    >
      {/* Status + name */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: color,
            flexShrink: 0,
            boxShadow: agent.status === "active" ? `0 0 5px ${color}` : "none",
          }}
        />
        <span
          style={{
            fontSize: "11px",
            color: "#E5E7EB",
            fontWeight: 600,
            letterSpacing: "0.05em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {agent.name}
        </span>
      </div>

      {/* Role */}
      <div style={{ fontSize: "9px", color: "#6B7280", letterSpacing: "0.05em" }}>
        {agent.role}
      </div>

      {/* Status text */}
      <div style={{ fontSize: "9px", color, letterSpacing: "0.08em" }}>
        {agent.status}
        {agent.task && agent.status === "active" && (
          <span style={{ color: "#374151", marginLeft: "4px", fontStyle: "italic" }}>
            — {agent.task.slice(0, 12)}
          </span>
        )}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: "4px", marginTop: "2px" }}>
        <button
          onClick={onViewLog}
          style={{
            flex: 1,
            background: "none",
            border: "1px solid #1a1a2e",
            color: "#6B7280",
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "9px",
            padding: "2px 4px",
            cursor: "pointer",
            letterSpacing: "0.03em",
          }}
        >
          ⊡ log
        </button>
        <button
          onClick={onRun}
          disabled={agent.status === "active"}
          style={{
            flex: 1,
            background: "none",
            border: `1px solid ${agent.status === "active" ? "#374151" : "#10B981"}`,
            color: agent.status === "active" ? "#374151" : "#10B981",
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "9px",
            padding: "2px 4px",
            cursor: agent.status === "active" ? "not-allowed" : "pointer",
            letterSpacing: "0.03em",
          }}
        >
          ▶ run
        </button>
      </div>
    </div>
  );
}

function termBtnStyle(color: string, disabled: boolean): React.CSSProperties {
  return {
    background: "none",
    border: `1px solid ${color}`,
    color: color,
    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
    fontSize: "10px",
    padding: "3px 8px",
    cursor: disabled ? "not-allowed" : "pointer",
    letterSpacing: "0.05em",
  };
}
