"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { mcp, callTool } from "@/lib/api";

interface Task {
  id: string;
  label: string;
  priority: "high" | "medium" | "low";
  status: "complete" | "pending" | "in-progress" | "blocked";
}

interface CommandOutput {
  cmd: string;
  output: string;
  timestamp: Date;
  error?: boolean;
}

const PRIORITY_QUEUE: Task[] = [
  { id: "TASK-001", label: "Chat Intelligence", priority: "high", status: "complete" },
  { id: "TASK-002", label: "Tool Dispatch", priority: "high", status: "complete" },
  { id: "TASK-003", label: "Memory Search API", priority: "medium", status: "pending" },
  { id: "TASK-004", label: "pgvector Migration", priority: "medium", status: "pending" },
  { id: "TASK-005", label: "Neural Inference Upgrade", priority: "low", status: "pending" },
  { id: "TASK-006", label: "Streaming Chat v2", priority: "medium", status: "in-progress" },
  { id: "TASK-007", label: "Agent Coordination Protocol", priority: "high", status: "pending" },
  { id: "TASK-008", label: "BFT Council Integration", priority: "low", status: "blocked" },
];

interface HealthResponse {
  status?: string;
  version?: string;
  [key: string]: unknown;
}

export function RalphModule() {
  const [tasks, setTasks] = useState<Task[]>(PRIORITY_QUEUE);
  const [outputs, setOutputs] = useState<CommandOutput[]>([]);
  const [customCmd, setCustomCmd] = useState("");
  const [running, setRunning] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputs]);

  const addOutput = useCallback((cmd: string, output: string, error = false) => {
    setOutputs((prev) => [
      ...prev,
      { cmd, output, timestamp: new Date(), error },
    ]);
  }, []);

  const runCommand = useCallback(
    async (cmdId: string, label: string, fn: () => Promise<string>) => {
      if (running) return;
      setRunning(cmdId);
      try {
        const result = await fn();
        addOutput(label, result);
      } catch (err) {
        addOutput(label, err instanceof Error ? err.message : "Command failed", true);
      } finally {
        setRunning(null);
      }
    },
    [running, addOutput]
  );

  const SYSTEM_COMMANDS: Array<{
    id: string;
    label: string;
    color: string;
    fn: () => Promise<string>;
  }> = [
    {
      id: "health",
      label: "health",
      color: "#10B981",
      fn: async () => {
        const res = await mcp.get<HealthResponse>("/health");
        return JSON.stringify(res, null, 2);
      },
    },
    {
      id: "reflect",
      label: "reflect",
      color: "#F59E0B",
      fn: async () => {
        const res = await callTool<{ status?: string; result?: string }>("trigger_reflection");
        return JSON.stringify(res);
      },
    },
    {
      id: "dream",
      label: "dream",
      color: "#6B7280",
      fn: async () => {
        const res = await callTool<{ status?: string }>("enter_dream_state");
        return JSON.stringify(res);
      },
    },
    {
      id: "train",
      label: "train",
      color: "#F59E0B",
      fn: async () => {
        const res = await callTool<{ status?: string }>("trigger_neural_retrain");
        return JSON.stringify(res);
      },
    },
    {
      id: "git-pull",
      label: "git pull",
      color: "#6B7280",
      fn: async () => "Already up to date. (simulated — no git API exposed)",
    },
    {
      id: "restart",
      label: "restart",
      color: "#F97316",
      fn: async () => {
        const res = await mcp.post<{ status?: string }>("/admin/restart");
        return JSON.stringify(res);
      },
    },
    {
      id: "logs",
      label: "logs",
      color: "#6B7280",
      fn: async () => {
        const res = await mcp.get<{ logs?: string[] }>("/admin/logs");
        const lines = res?.logs ?? [];
        return lines.slice(-20).join("\n") || "No logs available";
      },
    },
    {
      id: "db-backup",
      label: "db backup",
      color: "#10B981",
      fn: async () => {
        const res = await callTool<{ status?: string }>("trigger_maintenance");
        return JSON.stringify(res);
      },
    },
  ];

  const handleCustomCmd = async () => {
    const raw = customCmd.trim();
    if (!raw || running) return;
    setCustomCmd("");

    await runCommand(
      `custom-${Date.now()}`,
      `$ ${raw}`,
      async () => {
        // Try to match known commands
        const lower = raw.toLowerCase();
        const match = SYSTEM_COMMANDS.find(
          (c) => lower === c.id || lower === c.label.toLowerCase()
        );
        if (match) return match.fn();

        // Tool call syntax: tool:name args
        if (lower.startsWith("tool:")) {
          const parts = raw.slice(5).trim().split(" ");
          const name = parts[0];
          let args: Record<string, unknown> = {};
          try {
            args = parts.length > 1 ? JSON.parse(parts.slice(1).join(" ")) : {};
          } catch {
            args = {};
          }
          const res = await callTool(name, args);
          return JSON.stringify(res, null, 2);
        }

        return `Unknown command: ${raw}\nTry: health, reflect, dream, train, restart, logs, db backup\nOr: tool:<name> {args}`;
      }
    );
  };

  const priorityColor = (p: Task["priority"]) => {
    switch (p) {
      case "high": return "#EF4444";
      case "medium": return "#F97316";
      case "low": return "#10B981";
    }
  };

  const priorityDot = (p: Task["priority"]) => {
    switch (p) {
      case "high": return "🔴";
      case "medium": return "🟡";
      case "low": return "🟢";
    }
  };

  const statusLabel = (s: Task["status"]) => {
    switch (s) {
      case "complete": return { text: "✓ COMPLETE", color: "#10B981" };
      case "pending": return { text: "○ PENDING", color: "#6B7280" };
      case "in-progress": return { text: "▶ IN PROGRESS", color: "#F59E0B" };
      case "blocked": return { text: "✗ BLOCKED", color: "#EF4444" };
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
          background: "#050507",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#F59E0B", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
          RALPH MODE
        </span>
        <span style={{ color: "#6B7280", fontSize: "10px", marginLeft: "12px" }}>
          — Operator Terminal
        </span>
        <div style={{ flex: 1 }} />
        <button type="button"
          onClick={() => {
            inputRef.current?.focus();
            setFocused(true);
          }}
          style={{
            background: focused ? "rgba(245, 158, 11, 0.1)" : "none",
            border: `1px solid ${focused ? "#F59E0B" : "#1a1a2e"}`,
            color: focused ? "#F59E0B" : "#6B7280",
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "10px",
            padding: "3px 10px",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          ⌘K Focus
        </button>
      </div>

      {/* Scrollable body */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Priority Queue */}
        <section>
          <div style={sectionHeader}>$ RALPH PRIORITY QUEUE</div>
          <div
            style={{
              border: "1px solid #1a1a2e",
              background: "#050507",
            }}
          >
            {tasks.map((task, i) => {
              const sl = statusLabel(task.status);
              return (
                <div
                  key={task.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "7px 12px",
                    borderBottom: i < tasks.length - 1 ? "1px solid #0a0a0f" : "none",
                    gap: "10px",
                  }}
                >
                  <span style={{ fontSize: "11px", flexShrink: 0 }}>{priorityDot(task.priority)}</span>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#6B7280",
                      width: "90px",
                      flexShrink: 0,
                      letterSpacing: "0.05em",
                    }}
                  >
                    [{task.id}]
                  </span>
                  <span style={{ fontSize: "11px", color: "#E5E7EB", flex: 1 }}>
                    {task.label}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      color: sl.color,
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                    }}
                  >
                    {sl.text}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* System commands */}
        <section>
          <div style={sectionHeader}>SYSTEM COMMANDS</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "6px",
              marginTop: "8px",
            }}
          >
            {SYSTEM_COMMANDS.map((cmd) => (
              <button type="button"
                key={cmd.id}
                onClick={() => runCommand(cmd.id, `> ${cmd.label}`, cmd.fn)}
                disabled={running !== null}
                style={{
                  background: running === cmd.id ? "rgba(245, 158, 11, 0.1)" : "none",
                  border: `1px solid ${running === cmd.id ? "#F59E0B" : running !== null ? "#374151" : cmd.color}`,
                  color: running === cmd.id ? "#F59E0B" : running !== null ? "#374151" : cmd.color,
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "10px",
                  padding: "6px 8px",
                  cursor: running !== null ? "not-allowed" : "pointer",
                  letterSpacing: "0.05em",
                  transition: "all 0.1s",
                  textAlign: "left",
                }}
              >
                {running === cmd.id ? "▶ ..." : `▶ ${cmd.label}`}
              </button>
            ))}
          </div>
        </section>

        {/* Custom command input */}
        <section>
          <div style={sectionHeader}>COMMAND INPUT</div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#F59E0B", fontSize: "12px", flexShrink: 0 }}>$</span>
            <input
              ref={inputRef}
              value={customCmd}
              onChange={(e) => setCustomCmd(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCustomCmd()}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="health | reflect | dream | train | tool:<name> {args}"
              disabled={running !== null}
              style={{
                flex: 1,
                background: "#0a0a0f",
                border: `1px solid ${focused ? "#F59E0B" : "#2d2d4e"}`,
                color: "#E5E7EB",
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: "11px",
                padding: "6px 10px",
                outline: "none",
                transition: "border-color 0.1s",
              }}
            />
            <button type="button"
              onClick={handleCustomCmd}
              disabled={!customCmd.trim() || running !== null}
              style={{
                background: "none",
                border: `1px solid ${!customCmd.trim() || running !== null ? "#374151" : "#F59E0B"}`,
                color: !customCmd.trim() || running !== null ? "#374151" : "#F59E0B",
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: "10px",
                padding: "6px 12px",
                cursor: !customCmd.trim() || running !== null ? "not-allowed" : "pointer",
                letterSpacing: "0.05em",
              }}
            >
              ↵ RUN
            </button>
          </div>
        </section>

        {/* Command output */}
        {outputs.length > 0 && (
          <section>
            <div style={sectionHeader}>COMMAND OUTPUT</div>
            <div
              style={{
                border: "1px solid #1a1a2e",
                padding: "8px 12px",
                background: "#050507",
                maxHeight: "300px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              {outputs.map((out, i) => (
                <OutputEntry key={i} output={out} />
              ))}
              <div ref={outputEndRef} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function OutputEntry({ output }: { output: CommandOutput }) {
  const [expanded, setExpanded] = useState(true);
  const ts = output.timestamp.toLocaleTimeString("en-GB", { hour12: false });

  return (
    <div style={{ borderBottom: "1px solid #0a0a0f", paddingBottom: "6px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: "4px",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <span style={{ fontSize: "10px", color: output.error ? "#EF4444" : "#F59E0B" }}>
          {output.cmd}
        </span>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "9px", color: "#374151" }}>{ts}</span>
          <span style={{ fontSize: "9px", color: "#374151" }}>{expanded ? "▲" : "▼"}</span>
        </div>
      </div>
      {expanded && (
        <pre
          style={{
            fontSize: "10px",
            color: output.error ? "#F97316" : "#E5E7EB",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            lineHeight: "1.5",
            margin: 0,
            padding: "6px 8px",
            background: "#0a0a0f",
            border: `1px solid ${output.error ? "rgba(239, 68, 68, 0.3)" : "#1a1a2e"}`,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {output.output}
        </pre>
      )}
    </div>
  );
}

const sectionHeader: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.12em",
  color: "#374151",
  fontWeight: 600,
  borderBottom: "1px solid #1a1a2e",
  paddingBottom: "6px",
  marginBottom: "8px",
};
