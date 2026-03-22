"use client";

import { useEffect, useState } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  CheckCircle2,
  Clock,
  Loader2,
  XCircle,
  ListTodo,
  Play,
  Moon,
  Zap,
  Calendar,
} from "lucide-react";

const GOLD = "#c9a84c";

// ─── Types ────────────────────────────────────────────────────────

interface Agent {
  id: string;
  name: string;
  status: string;
  trust_level: number;
  capabilities: string[];
  last_active?: string;
  last_action?: string;
  next_run?: string;
  tasks_done?: number;
}

interface AgentStats {
  total_agents?: number;
  active_agents?: number;
  idle_agents?: number;
  error_agents?: number;
  agents?: Agent[];
}

interface HeartbeatJob {
  id?: string;
  name?: string;
  schedule?: string;
  next_run?: string;
  last_run?: string;
  status?: string;
  [key: string]: unknown;
}

interface Task {
  id?: string;
  name?: string;
  type?: string;
  status?: string;
  agent_id?: string;
  priority?: string | number;
  description?: string;
  created_at?: string;
  progress?: number;
  [key: string]: unknown;
}

type FilterTab = "all" | "running" | "queued" | "completed" | "failed";

// ─── Status config ─────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  string,
  {
    dot: string;
    dotColor: string;
    badge: "gold" | "cyan" | "green" | "red" | "default";
    label: string;
    icon: React.ReactNode;
  }
> = {
  active: {
    dot: "bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]",
    dotColor: "#4ade80",
    badge: "green",
    label: "Active",
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />,
  },
  running: {
    dot: "bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.6)]",
    dotColor: "#60a5fa",
    badge: "cyan",
    label: "Running",
    icon: <Loader2 className="w-3.5 h-3.5 text-blue-400 animate-spin" />,
  },
  sleeping: {
    dot: "bg-white/25",
    dotColor: "rgba(255,255,255,0.3)",
    badge: "default",
    label: "Sleeping",
    icon: <Moon className="w-3.5 h-3.5 text-white/30" />,
  },
  idle: {
    dot: "bg-white/25",
    dotColor: "rgba(255,255,255,0.3)",
    badge: "default",
    label: "Idle",
    icon: <Moon className="w-3.5 h-3.5 text-white/30" />,
  },
  queued: {
    dot: "bg-blue-400",
    dotColor: "#60a5fa",
    badge: "cyan",
    label: "Queued",
    icon: <Clock className="w-3.5 h-3.5 text-blue-400" />,
  },
  pending: {
    dot: "bg-blue-400",
    dotColor: "#60a5fa",
    badge: "cyan",
    label: "Pending",
    icon: <Clock className="w-3.5 h-3.5 text-blue-400" />,
  },
  completed: {
    dot: "bg-green-400",
    dotColor: "#4ade80",
    badge: "green",
    label: "Completed",
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />,
  },
  done: {
    dot: "bg-green-400",
    dotColor: "#4ade80",
    badge: "green",
    label: "Done",
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />,
  },
  failed: {
    dot: "bg-red-400",
    dotColor: "#f87171",
    badge: "red",
    label: "Failed",
    icon: <XCircle className="w-3.5 h-3.5 text-red-400" />,
  },
  error: {
    dot: "bg-red-400",
    dotColor: "#f87171",
    badge: "red",
    label: "Error",
    icon: <XCircle className="w-3.5 h-3.5 text-red-400" />,
  },
};

function getStatusCfg(status: string) {
  return (
    STATUS_CONFIG[status?.toLowerCase()] ?? {
      dot: "bg-white/20",
      dotColor: "rgba(255,255,255,0.2)",
      badge: "default" as const,
      label: status ?? "Unknown",
      icon: <div className="w-3.5 h-3.5 rounded-full bg-white/20" />,
    }
  );
}

// ─── Agent card ────────────────────────────────────────────────────

function AgentCard({ agent }: { agent: Agent }) {
  const cfg = getStatusCfg(agent.status);
  const lastActive = agent.last_active
    ? new Date(agent.last_active).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;
  const nextRun = agent.next_run
    ? new Date(agent.next_run).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  const statusKey = (agent.status ?? "").toLowerCase();
  const isSleeping = statusKey === "sleeping" || statusKey === "idle";

  return (
    <div
      className="rounded-xl p-4 transition-all hover:border-white/15"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${cfg.dot}`} />
          <div className="flex items-center gap-2 min-w-0">
            <Bot className="w-4 h-4 text-white/40 shrink-0" />
            <span className="text-sm font-semibold text-white truncate">{agent.name}</span>
          </div>
        </div>
        <Badge variant={cfg.badge as Parameters<typeof Badge>[0]["variant"]}>
          {cfg.label}
        </Badge>
      </div>

      {/* Meta rows */}
      <div className="space-y-1.5">
        {agent.last_action && (
          <div className="flex items-start gap-2">
            <Zap className="w-3 h-3 text-white/20 shrink-0 mt-0.5" />
            <span className="text-xs text-white/45 line-clamp-2 leading-relaxed">
              {agent.last_action}
            </span>
          </div>
        )}
        {lastActive && (
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-white/20 shrink-0" />
            <span className="text-xs text-white/35">Last active: {lastActive}</span>
          </div>
        )}
        {nextRun && (
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-white/20 shrink-0" />
            <span className="text-xs text-white/35">Next run: {nextRun}</span>
          </div>
        )}
        {agent.tasks_done !== undefined && (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-white/20 shrink-0" />
            <span className="text-xs text-white/35">{agent.tasks_done} tasks completed</span>
          </div>
        )}
      </div>

      {/* Capabilities */}
      {agent.capabilities?.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-white/5">
          {agent.capabilities.slice(0, 4).map((c) => (
            <Badge key={c} variant="default">{c}</Badge>
          ))}
          {agent.capabilities.length > 4 && (
            <Badge variant="default">+{agent.capabilities.length - 4}</Badge>
          )}
        </div>
      )}

      {/* Ralph Mode CTA */}
      {agent.name?.toLowerCase().includes("ralph") && isSleeping && (
        <button
          type="button"
          className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all"
          style={{
            background: `${GOLD}12`,
            border: `1px solid ${GOLD}35`,
            color: GOLD,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}20`; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}12`; }}
        >
          <Play className="w-3 h-3" />
          Start Ralph Mode
        </button>
      )}
    </div>
  );
}

// ─── Task card ─────────────────────────────────────────────────────

function TaskCard({ task }: { task: Task }) {
  const status = (task.status ?? "queued").toLowerCase();
  const cfg = getStatusCfg(status);
  const ts = task.created_at
    ? new Date(task.created_at).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;
  const isRunning = status === "running";

  return (
    <div
      className="rounded-xl p-4 transition-all hover:border-white/15"
      style={{ background: "#0f0e1a", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          {cfg.icon}
          <span className="text-sm font-medium text-white truncate">
            {task.name ?? task.type ?? task.id ?? "Unnamed Task"}
          </span>
        </div>
        {ts && <span className="text-xs font-mono text-white/20 shrink-0">{ts}</span>}
      </div>

      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {task.agent_id && (
          <span className="inline-flex items-center gap-1 bg-white/5 border border-white/8 rounded-full px-2 py-0.5 text-xs text-white/40">
            <Bot className="w-3 h-3" />
            {task.agent_id}
          </span>
        )}
        {task.priority !== undefined && (
          <Badge variant="default">P{task.priority}</Badge>
        )}
        <Badge variant={cfg.badge as Parameters<typeof Badge>[0]["variant"]}>{cfg.label}</Badge>
      </div>

      {task.description && (
        <p className="text-xs text-white/40 leading-relaxed mb-2">{task.description}</p>
      )}

      {isRunning && task.progress !== undefined && (
        <div className="mt-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/30">Progress</span>
            <span className="text-xs font-mono" style={{ color: GOLD }}>{task.progress}%</span>
          </div>
          <div className="w-full h-1 rounded-full bg-white/8 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${task.progress}%`, background: GOLD }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Heartbeat job row ─────────────────────────────────────────────

function HeartbeatRow({ job }: { job: HeartbeatJob }) {
  const nextRun = job.next_run
    ? new Date(job.next_run).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;
  const lastRun = job.last_run
    ? new Date(job.last_run).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;
  const cfg = getStatusCfg(job.status ?? "idle");

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
      <span className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white/75 truncate">{job.name ?? job.id ?? "Job"}</p>
        {job.schedule && (
          <p className="text-xs text-white/30 font-mono mt-0.5">{job.schedule}</p>
        )}
      </div>
      <div className="text-right shrink-0">
        {nextRun && (
          <p className="text-xs text-white/40">
            <span className="text-white/25">next</span> {nextRun}
          </p>
        )}
        {lastRun && (
          <p className="text-xs text-white/25">
            <span className="text-white/15">last</span> {lastRun}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Skeleton loader ───────────────────────────────────────────────

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-lg bg-white/5 animate-pulse ${className ?? ""}`}
    />
  );
}

function AgentCardSkeleton() {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Skeleton className="w-2.5 h-2.5 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>
      <Skeleton className="h-3 w-48 mb-2" />
      <Skeleton className="h-3 w-36" />
    </div>
  );
}

// ─── Empty states ──────────────────────────────────────────────────

function NoAgents() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <Bot className="w-7 h-7 text-white/20" />
      </div>
      <h3 className="text-base font-semibold text-white/40 mb-2">No agents running</h3>
      <p className="text-sm text-white/25 max-w-xs leading-relaxed">
        MEOK agents will appear here once registered. Start Ralph Mode to launch your first autonomous agent.
      </p>
    </div>
  );
}

// ─── Filter tabs ───────────────────────────────────────────────────

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: "all",       label: "All"       },
  { key: "running",   label: "Running"   },
  { key: "queued",    label: "Queued"    },
  { key: "completed", label: "Completed" },
  { key: "failed",    label: "Failed"    },
];

// ─── Main page ─────────────────────────────────────────────────────

export default function AgentsPage() {
  const [stats, setStats] = useState<AgentStats | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [heartbeatJobs, setHeartbeatJobs] = useState<HeartbeatJob[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await Promise.allSettled([
        callTool<AgentStats>("get_agent_registry_stats").then(setStats).catch(console.error),
        callTool<{ tasks?: Task[] }>("orion_get_tasks")
          .then((r) => setTasks(r.tasks || []))
          .catch(console.error),
        callTool<{ jobs?: HeartbeatJob[] }>("get_heartbeat_status")
          .then((r) => setHeartbeatJobs(r.jobs || []))
          .catch(console.error),
      ]);
      setLoading(false);
    };
    load();
  }, []);

  const agents = stats?.agents ?? [];

  const filteredTasks = tasks.filter((t) => {
    if (activeFilter === "all") return true;
    const s = (t.status ?? "").toLowerCase();
    if (activeFilter === "running")   return s === "running";
    if (activeFilter === "queued")    return s === "queued" || s === "pending";
    if (activeFilter === "completed") return s === "completed" || s === "done";
    if (activeFilter === "failed")    return s === "failed" || s === "error";
    return true;
  });

  const filterCounts: Record<FilterTab, number> = {
    all:       tasks.length,
    running:   tasks.filter((t) => (t.status ?? "").toLowerCase() === "running").length,
    queued:    tasks.filter((t) => ["queued", "pending"].includes((t.status ?? "").toLowerCase())).length,
    completed: tasks.filter((t) => ["completed", "done"].includes((t.status ?? "").toLowerCase())).length,
    failed:    tasks.filter((t) => ["failed", "error"].includes((t.status ?? "").toLowerCase())).length,
  };

  const totalAgents = stats?.total_agents ?? agents.length;
  const activeAgents = stats?.active_agents ?? agents.filter((a) => ["active", "running"].includes((a.status ?? "").toLowerCase())).length;
  const idleAgents = stats?.idle_agents ?? agents.filter((a) => ["idle", "sleeping"].includes((a.status ?? "").toLowerCase())).length;
  const errorAgents = stats?.error_agents ?? agents.filter((a) => ["error", "failed"].includes((a.status ?? "").toLowerCase())).length;

  // Ralph Mode running?
  const ralphRunning = agents.some(
    (a) => a.name?.toLowerCase().includes("ralph") && ["active", "running"].includes((a.status ?? "").toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-[#0d0c18] py-8 space-y-6"
      style={{ animation: "fadeIn 0.4s ease-out both" }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 space-y-6">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Bot className="w-6 h-6" style={{ color: GOLD }} />
              Agents
            </h1>
            <p className="text-sm text-white/40 mt-1">
              {loading ? "Loading…" : `${totalAgents} agent${totalAgents !== 1 ? "s" : ""} registered · multi-agent task management`}
            </p>
          </div>

          {/* Ralph Mode CTA (global, if Ralph not running) */}
          {!loading && !ralphRunning && (
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shrink-0 transition-all"
              style={{
                background: `${GOLD}15`,
                border: `1px solid ${GOLD}40`,
                color: GOLD,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}25`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}15`; }}
            >
              <Play className="w-4 h-4" />
              Start Ralph Mode
            </button>
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Total Agents",  value: totalAgents,   color: "text-white"        },
            { label: "Active",        value: activeAgents,  color: "text-green-400"    },
            { label: "Sleeping",      value: idleAgents,    color: "text-white/50"     },
            { label: "Error State",   value: errorAgents,   color: "text-red-400"      },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="rounded-xl p-4"
              style={{ background: "#0f0e1a", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-xs text-white/35 uppercase tracking-wider mb-1">{label}</p>
              {loading ? (
                <Skeleton className="h-7 w-10" />
              ) : (
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Agent cards */}
        <div>
          <h2 className="text-xs font-medium text-white/40 uppercase tracking-wider flex items-center gap-2 mb-3">
            <Bot className="w-3.5 h-3.5" />
            Registered Agents
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => <AgentCardSkeleton key={i} />)}
            </div>
          ) : agents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          ) : (
            <NoAgents />
          )}
        </div>

        {/* Heartbeat jobs */}
        {(loading || heartbeatJobs.length > 0) && (
          <Card
            style={{ background: "#0f0e1a", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: GOLD }} />
                Scheduled Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <Skeleton className="w-2 h-2 rounded-full" />
                      <Skeleton className="h-4 flex-1" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              ) : heartbeatJobs.length > 0 ? (
                <div>
                  {heartbeatJobs.map((job, i) => (
                    <HeartbeatRow key={job.id ?? i} job={job} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-white/30 py-4 text-center">No scheduled jobs</p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Task queue */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-medium text-white/40 uppercase tracking-wider flex items-center gap-2">
              <ListTodo className="w-3.5 h-3.5" />
              Task Queue
            </h2>
            <span className="text-xs text-white/25 font-mono">{tasks.length} total</span>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 mb-4 flex-wrap">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                style={{
                  background: activeFilter === tab.key ? `${GOLD}15` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeFilter === tab.key ? `${GOLD}35` : "transparent"}`,
                  color: activeFilter === tab.key ? GOLD : "rgba(255,255,255,0.4)",
                }}
              >
                {tab.label}
                {filterCounts[tab.key] > 0 && (
                  <span
                    className="text-xs"
                    style={{ color: activeFilter === tab.key ? `${GOLD}90` : "rgba(255,255,255,0.25)" }}
                  >
                    {filterCounts[tab.key]}
                  </span>
                )}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: "#0f0e1a", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <Skeleton className="h-4 w-40 mb-3" />
                  <Skeleton className="h-3 w-56 mb-2" />
                  <Skeleton className="h-2 w-full" />
                </div>
              ))}
            </div>
          ) : filteredTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredTasks.map((task, i) => (
                <TaskCard key={task.id ?? i} task={task} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-white/25 text-sm">
              {activeFilter === "all" ? "No tasks in queue" : `No ${activeFilter} tasks`}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
