"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Loader2,
  CheckCircle2,
  XCircle,
  Clock,
  Cpu,
  RefreshCw,
  AlertCircle,
  ListTodo,
  Activity,
  Layers,
  Zap,
} from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Phase 75 types ────────────────────────────────────────────────────────────

type AgentStatus = "idle" | "working" | "completed" | "failed";

interface Agent {
  id: string;
  name: string;
  model: string;
  status: AgentStatus;
  lastActivity: string;
}

type TaskStatus = "queued" | "running" | "completed" | "failed";

interface AgentTask {
  id: string;
  label: string;
  description: string;
  assignedAgent: string;
  status: TaskStatus;
  progress: number; // 0–100
  result: string | null;
  createdAt: string;
  completedAt: string | null;
  resultExpanded: boolean;
}

// ── Defaults ──────────────────────────────────────────────────────────────────

const DEFAULT_AGENTS: Agent[] = [
  { id: "orion",   name: "Orion",   model: "claude-opus-4",   status: "idle",      lastActivity: new Date().toISOString() },
  { id: "riri",    name: "Riri",    model: "claude-sonnet-4", status: "idle",      lastActivity: new Date().toISOString() },
  { id: "hourman", name: "Hourman", model: "claude-haiku-3",  status: "idle",      lastActivity: new Date().toISOString() },
  { id: "z_self",  name: "z_self",  model: "observer",        status: "working",   lastActivity: new Date().toISOString() },
];

const DEFAULT_TASKS: AgentTask[] = [
  {
    id: "task-001",
    label: "Memory consolidation",
    description: "Consolidate episodic memories from the past 24 hours into long-term storage",
    assignedAgent: "orion",
    status: "completed",
    progress: 100,
    result: "Consolidated 47 episodic memories. 12 tagged as high-salience. 3 contradictions resolved. Long-term index updated.",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    completedAt: new Date(Date.now() - 1800000).toISOString(),
    resultExpanded: false,
  },
  {
    id: "task-002",
    label: "Research: MEOK v4 roadmap",
    description: "Analyse competitor landscape and draft Q2 roadmap priorities",
    assignedAgent: "riri",
    status: "running",
    progress: 62,
    result: null,
    createdAt: new Date(Date.now() - 900000).toISOString(),
    completedAt: null,
    resultExpanded: false,
  },
  {
    id: "task-003",
    label: "Log rotation audit",
    description: "Verify log rotation is working correctly and flag any oversized shards",
    assignedAgent: "hourman",
    status: "queued",
    progress: 0,
    result: null,
    createdAt: new Date(Date.now() - 300000).toISOString(),
    completedAt: null,
    resultExpanded: false,
  },
  {
    id: "task-004",
    label: "Security harden API keys",
    description: "Rotate stale API keys and update vault references",
    assignedAgent: "orion",
    status: "failed",
    progress: 34,
    result: "Error: Vault connection timeout after 30s. Keys unchanged. Retry recommended.",
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    completedAt: new Date(Date.now() - 6900000).toISOString(),
    resultExpanded: false,
  },
];

const STORAGE_KEY_TASKS  = "meok_orch_tasks_v1";
const STORAGE_KEY_AGENTS = "meok_orch_agents_v1";

// ── Helpers ───────────────────────────────────────────────────────────────────

const STATUS_DOT: Record<AgentStatus, string> = {
  idle:      "#6b7280",
  working:   GOLD,
  completed: "#22c55e",
  failed:    "#ef4444",
};

const TASK_STATUS_DOT: Record<TaskStatus, string> = {
  queued:    "#6b7280",
  running:   GOLD,
  completed: "#22c55e",
  failed:    "#ef4444",
};

const TASK_STATUS_LABEL: Record<TaskStatus, string> = {
  queued:    "Queued",
  running:   "Running",
  completed: "Completed",
  failed:    "Failed",
};

function fmt(iso: string) {
  try { return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); }
  catch { return "—"; }
}

function genId() {
  return `task-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ icon, title, sub }: { icon: React.ReactNode; title: string; sub?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${GOLD}18` }}
      >
        {icon}
      </div>
      <div>
        <h2 className="text-sm font-semibold text-white">{title}</h2>
        {sub && <p className="text-xs text-white/40">{sub}</p>}
      </div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl p-4 ${className}`}
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      {children}
    </div>
  );
}

// ─── 75.2 Agent status indicator ─────────────────────────────────────────────

function AgentStatusIndicator({ agent }: { agent: Agent }) {
  const statusLabel: Record<AgentStatus, string> = {
    idle:      "Idle",
    working:   "Working",
    completed: "Completed",
    failed:    "Failed",
  };

  return (
    <div
      className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-white/5"
      style={{ border: `1px solid ${BORDER}` }}
    >
      {/* Animated dot */}
      <span className="relative flex-shrink-0">
        <span
          className="block w-2.5 h-2.5 rounded-full"
          style={{ background: STATUS_DOT[agent.status] }}
        />
        {agent.status === "working" && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-60"
            style={{ background: STATUS_DOT[agent.status] }}
          />
        )}
      </span>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white leading-none">{agent.name}</p>
        <p className="text-xs text-white/40 mt-0.5 truncate">{agent.model}</p>
      </div>

      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={{
          background: `${STATUS_DOT[agent.status]}18`,
          color: STATUS_DOT[agent.status],
        }}
      >
        {statusLabel[agent.status]}
      </span>
    </div>
  );
}

// ─── 75.1 Task progress bar ───────────────────────────────────────────────────

function ProgressBar({ value, status }: { value: number; status: TaskStatus }) {
  const color =
    status === "completed" ? "#22c55e" :
    status === "failed"    ? "#ef4444" :
    status === "running"   ? GOLD :
    "rgba(255,255,255,0.2)";

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-white/40">{TASK_STATUS_LABEL[status]}</span>
        <span className="text-xs font-mono" style={{ color }}>{value}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: color }}
        />
      </div>
    </div>
  );
}

// ─── 75.4 Result panel ────────────────────────────────────────────────────────

function ResultPanel({
  result,
  status,
  expanded,
  onToggle,
}: {
  result: string;
  status: TaskStatus;
  expanded: boolean;
  onToggle: () => void;
}) {
  const accentColor = status === "failed" ? "#ef4444" : "#22c55e";

  return (
    <div
      className="mt-3 rounded-lg overflow-hidden"
      style={{ border: `1px solid ${accentColor}22` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 transition-colors hover:bg-white/5"
        style={{ background: `${accentColor}08` }}
      >
        <span className="text-xs font-medium" style={{ color: accentColor }}>
          {status === "failed" ? "Error output" : "Result"}
        </span>
        <ChevronRight
          className="w-3.5 h-3.5 transition-transform"
          style={{ color: accentColor, transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
        />
      </button>
      {expanded && (
        <div
          className="px-3 py-2 text-xs leading-relaxed font-mono whitespace-pre-wrap"
          style={{ color: "rgba(255,255,255,0.55)", background: `${DEEP}` }}
        >
          {result}
        </div>
      )}
    </div>
  );
}

// ─── Task row (queue item) ────────────────────────────────────────────────────

function TaskRow({
  task,
  index,
  total,
  agents,
  onMoveUp,
  onMoveDown,
  onRemove,
  onToggleResult,
}: {
  task: AgentTask;
  index: number;
  total: number;
  agents: Agent[];
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  onToggleResult: () => void;
}) {
  const agent = agents.find((a) => a.id === task.assignedAgent);

  return (
    <div
      className="rounded-xl p-4 transition-all"
      style={{ background: `${SURFACE}`, border: `1px solid ${BORDER}` }}
    >
      {/* Top row */}
      <div className="flex items-start gap-3">
        {/* Status dot */}
        <span className="relative mt-1 flex-shrink-0">
          <span
            className="block w-2.5 h-2.5 rounded-full"
            style={{ background: TASK_STATUS_DOT[task.status] }}
          />
          {task.status === "running" && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-60"
              style={{ background: TASK_STATUS_DOT[task.status] }}
            />
          )}
        </span>

        {/* Label + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-white">{task.label}</span>
            {agent && (
              <span
                className="text-xs px-1.5 py-0.5 rounded"
                style={{ background: `${GOLD}15`, color: GOLD }}
              >
                {agent.name}
              </span>
            )}
          </div>
          <p className="text-xs text-white/40 mt-0.5 leading-snug">{task.description}</p>
          <p className="text-xs text-white/25 mt-1">
            Created {fmt(task.createdAt)}
            {task.completedAt && ` · Done ${fmt(task.completedAt)}`}
          </p>
        </div>

        {/* Reorder + remove controls */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={onMoveUp}
            disabled={index === 0}
            className="p-1 rounded hover:bg-white/10 disabled:opacity-20 transition-colors"
            title="Move up"
          >
            <ChevronUp className="w-3.5 h-3.5 text-white/50" />
          </button>
          <button
            onClick={onMoveDown}
            disabled={index === total - 1}
            className="p-1 rounded hover:bg-white/10 disabled:opacity-20 transition-colors"
            title="Move down"
          >
            <ChevronDown className="w-3.5 h-3.5 text-white/50" />
          </button>
          <button
            onClick={onRemove}
            className="p-1 rounded hover:bg-red-500/20 transition-colors"
            title="Remove task"
          >
            <Trash2 className="w-3.5 h-3.5 text-white/30 hover:text-red-400" />
          </button>
        </div>
      </div>

      {/* Progress bar — 75.1 */}
      <ProgressBar value={task.progress} status={task.status} />

      {/* Result panel — 75.4 */}
      {task.result && (
        <ResultPanel
          result={task.result}
          status={task.status}
          expanded={task.resultExpanded}
          onToggle={onToggleResult}
        />
      )}
    </div>
  );
}

// ─── Add task modal / inline form ────────────────────────────────────────────

function AddTaskForm({
  agents,
  onAdd,
  onCancel,
}: {
  agents: Agent[];
  onAdd: (t: Omit<AgentTask, "id" | "createdAt" | "completedAt" | "resultExpanded">) => void;
  onCancel: () => void;
}) {
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [assignedAgent, setAssignedAgent] = useState(agents[0]?.id ?? "");

  const submit = () => {
    if (!label.trim()) return;
    onAdd({
      label: label.trim(),
      description: description.trim(),
      assignedAgent,
      status: "queued",
      progress: 0,
      result: null,
    });
  };

  const inputStyle = {
    background: DEEP,
    border: `1px solid ${BORDER}`,
    color: "white",
    outline: "none",
  };

  return (
    <div
      className="rounded-xl p-4 space-y-3"
      style={{ background: SURFACE, border: `1px solid ${GOLD}40` }}
    >
      <p className="text-sm font-semibold text-white">New task</p>

      <input
        autoFocus
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Task label"
        className="w-full px-3 py-2 rounded-lg text-sm text-white/80 placeholder-white/30"
        style={inputStyle}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        rows={2}
        className="w-full px-3 py-2 rounded-lg text-sm text-white/80 placeholder-white/30 resize-none"
        style={inputStyle}
      />

      <div>
        <label className="block text-xs text-white/40 mb-1">Assign to agent</label>
        <select
          value={assignedAgent}
          onChange={(e) => setAssignedAgent(e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-sm"
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          {agents.map((a) => (
            <option key={a.id} value={a.id} style={{ background: DEEP }}>
              {a.name} — {a.model}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={submit}
          disabled={!label.trim()}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-40 transition-all hover:scale-[1.02]"
          style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
        >
          <Plus className="w-3.5 h-3.5" />
          Add to queue
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-lg text-sm text-white/50 hover:text-white/70 transition-colors"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Queue stats strip ────────────────────────────────────────────────────────

function QueueStrip({ tasks }: { tasks: AgentTask[] }) {
  const counts = tasks.reduce<Record<TaskStatus, number>>(
    (acc, t) => { acc[t.status]++; return acc; },
    { queued: 0, running: 0, completed: 0, failed: 0 }
  );

  const items: { label: string; count: number; color: string }[] = [
    { label: "Queued",    count: counts.queued,    color: "#6b7280" },
    { label: "Running",   count: counts.running,   color: GOLD },
    { label: "Completed", count: counts.completed, color: "#22c55e" },
    { label: "Failed",    count: counts.failed,    color: "#ef4444" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map(({ label, count, color }) => (
        <div
          key={label}
          className="rounded-lg px-3 py-2 text-center"
          style={{ background: `${color}10`, border: `1px solid ${color}25` }}
        >
          <p className="text-lg font-bold" style={{ color }}>{count}</p>
          <p className="text-xs text-white/40">{label}</p>
        </div>
      ))}
    </div>
  );
}

// ── Simulate progress for running tasks ───────────────────────────────────────

function useSimulator(
  tasks: AgentTask[],
  setTasks: React.Dispatch<React.SetStateAction<AgentTask[]>>
) {
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setTasks((prev) =>
        prev.map((t) => {
          if (t.status !== "running") return t;
          const next = Math.min(100, t.progress + Math.floor(Math.random() * 4 + 1));
          if (next >= 100) {
            return {
              ...t,
              progress: 100,
              status: "completed",
              completedAt: new Date().toISOString(),
              result: `Task completed successfully. Agent processed ${Math.floor(Math.random() * 200 + 50)} items in ${Math.floor(Math.random() * 8 + 2)}s. Output stored to memory index.`,
            };
          }
          return { ...t, progress: next };
        })
      );
    }, 2000);

    return () => { if (ref.current) clearInterval(ref.current); };
  }, [setTasks]);
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function OrchestratorPage() {
  // ── Persistent state ───────────────────────────────────────────────────────
  const [tasks, setTasks] = useState<AgentTask[]>(() => {
    if (typeof window === "undefined") return DEFAULT_TASKS;
    try {
      const stored = localStorage.getItem(STORAGE_KEY_TASKS);
      return stored ? (JSON.parse(stored) as AgentTask[]) : DEFAULT_TASKS;
    } catch { return DEFAULT_TASKS; }
  });

  const [agents, setAgents] = useState<Agent[]>(() => {
    if (typeof window === "undefined") return DEFAULT_AGENTS;
    try {
      const stored = localStorage.getItem(STORAGE_KEY_AGENTS);
      return stored ? (JSON.parse(stored) as Agent[]) : DEFAULT_AGENTS;
    } catch { return DEFAULT_AGENTS; }
  });

  // Persist to localStorage on change
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks)); } catch { /* noop */ }
  }, [tasks]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_AGENTS, JSON.stringify(agents)); } catch { /* noop */ }
  }, [agents]);

  // ── UI state ───────────────────────────────────────────────────────────────
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState<TaskStatus | "all">("all");

  // ── Simulator ──────────────────────────────────────────────────────────────
  useSimulator(tasks, setTasks);

  // ── Sync running agent indicators ─────────────────────────────────────────
  useEffect(() => {
    const agentIds = new Set(tasks.filter((t) => t.status === "running").map((t) => t.assignedAgent));
    setAgents((prev) =>
      prev.map((a) => ({
        ...a,
        status: agentIds.has(a.id)
          ? "working"
          : tasks.some((t) => t.assignedAgent === a.id && t.status === "completed")
          ? "idle"
          : a.status,
        lastActivity: agentIds.has(a.id) ? new Date().toISOString() : a.lastActivity,
      }))
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  // ── Task queue handlers ────────────────────────────────────────────────────
  const addTask = useCallback(
    (partial: Omit<AgentTask, "id" | "createdAt" | "completedAt" | "resultExpanded">) => {
      setTasks((prev) => [
        ...prev,
        {
          ...partial,
          id: genId(),
          createdAt: new Date().toISOString(),
          completedAt: null,
          resultExpanded: false,
        },
      ]);
      setShowAddForm(false);
    },
    []
  );

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveTask = useCallback((id: string, dir: "up" | "down") => {
    setTasks((prev) => {
      const idx = prev.findIndex((t) => t.id === id);
      if (idx === -1) return prev;
      const next = [...prev];
      const swap = dir === "up" ? idx - 1 : idx + 1;
      if (swap < 0 || swap >= next.length) return prev;
      [next[idx], next[swap]] = [next[swap], next[idx]];
      return next;
    });
  }, []);

  const toggleResult = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, resultExpanded: !t.resultExpanded } : t))
    );
  }, []);

  const resetDemo = useCallback(() => {
    setTasks(DEFAULT_TASKS.map((t) => ({ ...t, resultExpanded: false })));
    setAgents(DEFAULT_AGENTS);
    localStorage.removeItem(STORAGE_KEY_TASKS);
    localStorage.removeItem(STORAGE_KEY_AGENTS);
  }, []);

  // ── Filtered view ─────────────────────────────────────────────────────────
  const visibleTasks =
    filterStatus === "all" ? tasks : tasks.filter((t) => t.status === filterStatus);

  const completedTasks = tasks.filter((t) => t.status === "completed" && t.result);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen p-4 md:p-8 space-y-8" style={{ background: DEEP }}>
      {/* ── Page header ── */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: `${GOLD}18` }}
          >
            <Cpu className="w-5 h-5" style={{ color: GOLD }} />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-white">Agent Orchestrator</h1>
            <p className="text-sm text-white/40">Phase 75 — task execution engine</p>
          </div>
        </div>
        <button
          onClick={resetDemo}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/40 hover:text-white/60 transition-colors"
          style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
          title="Reset demo state"
        >
          <RefreshCw className="w-3 h-3" />
          Reset demo
        </button>
      </div>

      {/* ══ Section 1 — 75.2 Agent Status Indicators ══════════════════════════ */}
      <section>
        <SectionHeader
          icon={<Activity className="w-4 h-4" style={{ color: GOLD }} />}
          title="Agent Status"
          sub="Live status of all registered agents"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {agents.map((agent) => (
            <AgentStatusIndicator key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      {/* ══ Section 2 — 75.3 Task Queue Management ════════════════════════════ */}
      <section>
        <SectionHeader
          icon={<ListTodo className="w-4 h-4" style={{ color: GOLD }} />}
          title="Task Queue"
          sub="Add, reorder, and remove queued tasks"
        />

        {/* Stats strip */}
        <div className="mb-4">
          <QueueStrip tasks={tasks} />
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {(["all", "queued", "running", "completed", "failed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilterStatus(f)}
              className="px-3 py-1 rounded-full text-xs font-medium capitalize transition-all"
              style={{
                background: filterStatus === f ? `${GOLD}20` : "rgba(255,255,255,0.05)",
                color: filterStatus === f ? GOLD : "rgba(255,255,255,0.45)",
                border: `1px solid ${filterStatus === f ? `${GOLD}40` : BORDER}`,
              }}
            >
              {f === "all" ? "All" : TASK_STATUS_LABEL[f]}
            </button>
          ))}

          <button
            onClick={() => setShowAddForm((v) => !v)}
            className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02]"
            style={{
              background: showAddForm ? "rgba(255,255,255,0.07)" : `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`,
              color: showAddForm ? "rgba(255,255,255,0.5)" : DEEP,
            }}
          >
            <Plus className="w-3.5 h-3.5" />
            {showAddForm ? "Cancel" : "Add task"}
          </button>
        </div>

        {/* Add task form */}
        {showAddForm && (
          <div className="mb-4">
            <AddTaskForm
              agents={agents}
              onAdd={addTask}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        )}

        {/* Task list */}
        <div className="space-y-3">
          {visibleTasks.length === 0 ? (
            <div
              className="rounded-xl p-8 text-center"
              style={{ border: `1px dashed ${BORDER}` }}
            >
              <ListTodo className="w-8 h-8 text-white/20 mx-auto mb-2" />
              <p className="text-sm text-white/30">No tasks in this view</p>
            </div>
          ) : (
            visibleTasks.map((task, idx) => (
              <TaskRow
                key={task.id}
                task={task}
                index={idx}
                total={visibleTasks.length}
                agents={agents}
                onMoveUp={() => moveTask(task.id, "up")}
                onMoveDown={() => moveTask(task.id, "down")}
                onRemove={() => removeTask(task.id)}
                onToggleResult={() => toggleResult(task.id)}
              />
            ))
          )}
        </div>
      </section>

      {/* ══ Section 3 — 75.4 Result Aggregation View ══════════════════════════ */}
      {completedTasks.length > 0 && (
        <section>
          <SectionHeader
            icon={<Layers className="w-4 h-4" style={{ color: GOLD }} />}
            title="Result Aggregation"
            sub={`${completedTasks.length} completed task${completedTasks.length !== 1 ? "s" : ""} with output`}
          />

          <div className="space-y-3">
            {completedTasks.map((task) => {
              const agent = agents.find((a) => a.id === task.assignedAgent);
              return (
                <Card key={task.id}>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#22c55e" }} />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-white">{task.label}</span>
                      {agent && (
                        <span
                          className="ml-2 text-xs px-1.5 py-0.5 rounded"
                          style={{ background: `${GOLD}15`, color: GOLD }}
                        >
                          {agent.name}
                        </span>
                      )}
                    </div>
                    {task.completedAt && (
                      <span className="text-xs text-white/30 flex-shrink-0 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {fmt(task.completedAt)}
                      </span>
                    )}
                  </div>

                  {task.result && (
                    <ResultPanel
                      result={task.result}
                      status={task.status}
                      expanded={task.resultExpanded}
                      onToggle={() => toggleResult(task.id)}
                    />
                  )}
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* ══ Section 4 — Failed tasks notice ═══════════════════════════════════ */}
      {tasks.filter((t) => t.status === "failed").length > 0 && (
        <section>
          <SectionHeader
            icon={<AlertCircle className="w-4 h-4" style={{ color: "#ef4444" }} />}
            title="Failed Tasks"
            sub="Tasks requiring attention"
          />
          <div className="space-y-3">
            {tasks
              .filter((t) => t.status === "failed")
              .map((task) => {
                const agent = agents.find((a) => a.id === task.assignedAgent);
                return (
                  <Card key={task.id}>
                    <div className="flex items-center gap-3 mb-2">
                      <XCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#ef4444" }} />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium text-white">{task.label}</span>
                        {agent && (
                          <span
                            className="ml-2 text-xs px-1.5 py-0.5 rounded"
                            style={{ background: `${GOLD}15`, color: GOLD }}
                          >
                            {agent.name}
                          </span>
                        )}
                      </div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444" }}
                      >
                        {task.progress}% before failure
                      </span>
                    </div>

                    {task.result && (
                      <ResultPanel
                        result={task.result}
                        status="failed"
                        expanded={task.resultExpanded}
                        onToggle={() => toggleResult(task.id)}
                      />
                    )}

                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() =>
                          setTasks((prev) =>
                            prev.map((t) =>
                              t.id === task.id
                                ? { ...t, status: "running", progress: 0, result: null, completedAt: null }
                                : t
                            )
                          )
                        }
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-[1.02]"
                        style={{ background: `${GOLD}15`, color: GOLD, border: `1px solid ${GOLD}30` }}
                      >
                        <Zap className="w-3 h-3" />
                        Retry task
                      </button>
                      <button
                        onClick={() => removeTask(task.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-white/40 hover:text-white/60"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      >
                        <Trash2 className="w-3 h-3" />
                        Dismiss
                      </button>
                    </div>
                  </Card>
                );
              })}
          </div>
        </section>
      )}

      {/* ══ Footer note ═══════════════════════════════════════════════════════ */}
      <p className="text-xs text-white/20 text-center pb-4">
        Phase 75 · Demo state persisted via localStorage · Running tasks auto-advance every 2s
      </p>
    </div>
  );
}
