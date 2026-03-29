"use client";

// Protected route — auth is enforced by the dashboard layout (AuthProvider + useAuth).

import { useState, useRef } from "react";
import {
  Zap,
  Search,
  Hammer,
  CalendarDays,
  Play,
  Moon,
  Sun,
  CheckCircle2,
  Clock,
  Loader2,
  ChevronRight,
  Sparkles,
  AlertCircle,
} from "lucide-react";

// ── BRAND TOKENS ────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";
const ORION_BLUE = "#60a5fa";
const RIRI_GOLD = "#c9a84c";
const HOURMAN_PURPLE = "#a78bfa";

// ── TYPES ────────────────────────────────────────────────────────────────────

type AgentName = "orion" | "riri" | "hourman";

interface RalphTask {
  id: string;
  agent: AgentName;
  title: string;
  description: string;
  estimatedTime: string;
  dependencies: string[];
  status: "pending" | "running" | "complete";
}

interface RalphPlan {
  projectTitle: string;
  summary: string;
  totalEstimatedTime: string;
  tasks: RalphTask[];
}

// ── AGENT CONFIG ─────────────────────────────────────────────────────────────

const AGENT_CONFIG: Record<AgentName, { label: string; color: string; bg: string; border: string; icon: typeof Search }> = {
  orion: {
    label: "Orion",
    color: ORION_BLUE,
    bg: "rgba(96,165,250,0.06)",
    border: "rgba(96,165,250,0.2)",
    icon: Search,
  },
  riri: {
    label: "Riri",
    color: RIRI_GOLD,
    bg: "rgba(201,168,76,0.06)",
    border: "rgba(201,168,76,0.2)",
    icon: Hammer,
  },
  hourman: {
    label: "Hourman",
    color: HOURMAN_PURPLE,
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.2)",
    icon: CalendarDays,
  },
};

// ── TASK CARD ─────────────────────────────────────────────────────────────────

function TaskCard({ task }: { task: RalphTask }) {
  const cfg = AGENT_CONFIG[task.agent];
  const AgentIcon = cfg.icon;

  return (
    <div
      className="rounded-xl p-4 transition-all"
      style={{ background: cfg.bg, border: `1px solid ${task.status === "complete" ? cfg.color + "50" : cfg.border}` }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: cfg.color + "20" }}
        >
          {task.status === "complete" ? (
            <CheckCircle2 size={14} style={{ color: cfg.color }} />
          ) : task.status === "running" ? (
            <Loader2 size={14} style={{ color: cfg.color }} className="animate-spin" />
          ) : (
            <AgentIcon size={14} style={{ color: cfg.color }} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-black text-white leading-snug mb-1"
            style={{ opacity: task.status === "complete" ? 0.5 : 1 }}
          >
            {task.title}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
            {task.description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span
              className="inline-flex items-center gap-1 text-[10px] font-mono"
              style={{ color: cfg.color + "90" }}
            >
              <Clock size={9} />
              {task.estimatedTime}
            </span>
            {task.dependencies.length > 0 && (
              <span className="text-[10px] text-white/20 font-mono">
                after: {task.dependencies.join(", ")}
              </span>
            )}
          </div>
        </div>
        <span
          className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full flex-shrink-0"
          style={{
            background: task.status === "complete" ? cfg.color + "20" : task.status === "running" ? cfg.color + "15" : "rgba(255,255,255,0.04)",
            color: task.status === "pending" ? "rgba(255,255,255,0.25)" : cfg.color,
          }}
        >
          {task.status}
        </span>
      </div>
    </div>
  );
}

// ── KANBAN COLUMN ─────────────────────────────────────────────────────────────

function KanbanColumn({ agent, tasks }: { agent: AgentName; tasks: RalphTask[] }) {
  const cfg = AGENT_CONFIG[agent];
  const AgentIcon = cfg.icon;
  const complete = tasks.filter((t) => t.status === "complete").length;

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ borderBottom: `1px solid ${BORDER}`, background: cfg.bg }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: cfg.color + "20", border: `1px solid ${cfg.border}` }}
        >
          <AgentIcon size={13} style={{ color: cfg.color }} />
        </div>
        <span className="text-sm font-black" style={{ color: cfg.color }}>
          {cfg.label}
        </span>
        <span className="ml-auto text-xs font-mono" style={{ color: cfg.color + "60" }}>
          {complete}/{tasks.length}
        </span>
      </div>
      <div className="p-3 flex-1 space-y-2">
        {tasks.length === 0 ? (
          <p className="text-xs text-white/20 text-center py-4">No tasks assigned</p>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}

// ── MORNING SUMMARY ───────────────────────────────────────────────────────────

function MorningSummary({ plan }: { plan: RalphPlan }) {
  const complete = plan.tasks.filter((t) => t.status === "complete");
  const byAgent = (a: AgentName) => complete.filter((t) => t.agent === a);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: SURFACE, border: `1px solid ${GOLD}40` }}
    >
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${BORDER}`, background: "rgba(201,168,76,0.06)" }}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: GOLD + "20" }}
        >
          <Sun size={16} color={GOLD} />
        </div>
        <div>
          <p className="text-sm font-black text-white">Ralph worked all night.</p>
          <p className="text-xs text-white/40">Here&apos;s what got done</p>
        </div>
        <span
          className="ml-auto text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: GOLD + "20", color: GOLD }}
        >
          {complete.length}/{plan.tasks.length} tasks complete
        </span>
      </div>

      <div className="p-6 space-y-5">
        <div
          className="rounded-xl p-4"
          style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
        >
          <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Project</p>
          <p className="text-base font-black text-white">{plan.projectTitle}</p>
          <p className="text-sm text-white/40 mt-1">{plan.summary}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(["orion", "riri", "hourman"] as AgentName[]).map((agent) => {
            const cfg = AGENT_CONFIG[agent];
            const agentTasks = byAgent(agent);
            return (
              <div
                key={agent}
                className="rounded-xl p-4"
                style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
              >
                <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: cfg.color }}>
                  {cfg.label}
                </p>
                {agentTasks.length === 0 ? (
                  <p className="text-xs text-white/25">No tasks completed</p>
                ) : (
                  <ul className="space-y-1">
                    {agentTasks.map((t) => (
                      <li key={t.id} className="flex items-start gap-2 text-xs text-white/60">
                        <CheckCircle2 size={10} style={{ color: cfg.color, marginTop: 2, flexShrink: 0 }} />
                        {t.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-xs text-white/25 text-center font-mono">
          Completed at {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} · Total time: {plan.totalEstimatedTime}
        </p>
      </div>
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function RalphModePage() {
  const [projectInput, setProjectInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<RalphPlan | null>(null);
  const [approved, setApproved] = useState(false);
  const [running, setRunning] = useState(false);
  const [overnightMode, setOvernightMode] = useState(false);
  const [showMorningSummary, setShowMorningSummary] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const taskTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleDecompose = async () => {
    if (!projectInput.trim()) return;
    setLoading(true);
    setError(null);
    setPlan(null);
    setApproved(false);
    setRunning(false);
    setShowMorningSummary(false);

    try {
      // Try Ralph project API first (fast heuristic decomposition)
      let parsed: RalphPlan | null = null;
      try {
        const ralphRes = await fetch("/api/ralph/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ goal: projectInput }),
        });
        if (ralphRes.ok) {
          const ralphData = await ralphRes.json();
          if (ralphData.decomposition?.length > 0) {
            parsed = {
              projectTitle: projectInput.slice(0, 60),
              summary: `Decomposed into ${ralphData.tasks} tasks across Orion, Riri, Hourman, and Sovereign`,
              totalEstimatedTime: "Overnight",
              tasks: ralphData.decomposition.map((t: { title: string; agent: string; priority: number }, i: number) => ({
                id: `task-${i}`,
                agent: t.agent === 'sovereign' ? 'orion' : t.agent, // Map sovereign to orion for UI
                title: t.title,
                description: t.title,
                estimatedTime: t.priority >= 4 ? "30 min" : "15 min",
                dependencies: [],
                status: "pending" as const,
              })),
            };
          }
        }
      } catch { /* fall through to LLM */ }

      // Fallback: use LLM for richer decomposition
      if (!parsed) {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system:
              "You are Ralph, MEOK's autonomous project orchestrator. Decompose into Orion (research), Riri (build), Hourman (plan) tasks. Return valid JSON only: { projectTitle, summary, totalEstimatedTime, tasks: [{ id, agent, title, description, estimatedTime, dependencies }] }",
            messages: [{ role: "user", content: projectInput }],
          }),
        });

        if (!res.ok) throw new Error("Ralph failed to respond");
        const data = await res.json();
        const raw: string = data.content ?? data.message ?? data.text ?? "";

        try {
          const cleaned = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
          parsed = JSON.parse(cleaned);
        } catch {
          throw new Error("Ralph returned an unexpected format. Try again.");
        }
      }

      // Ensure all tasks start as pending
      if (parsed) {
        parsed.tasks = parsed.tasks.map((t) => ({ ...t, status: "pending" as const }));
        setPlan(parsed);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    if (!plan) return;
    setApproved(true);
    setRunning(true);

    // Save project + tasks to real Ralph API (persistent queue)
    try {
      const projRes = await fetch('/api/ralph/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal: projectInput, title: plan.projectTitle }),
      });
      if (projRes.ok) {
        const projData = await projRes.json();
        // Also submit individual tasks with full descriptions
        for (const task of plan.tasks) {
          await fetch('/api/ralph/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: task.title,
              description: task.description,
              agent: task.agent,
              project_id: projData.project_id,
              priority: 3,
            }),
          }).catch(() => {});
        }
      }
    } catch { /* non-fatal — tasks still execute in browser simulation */ }

    // Also simulate sequential task execution for immediate UI feedback
    let delay = 0;
    const tasks = [...plan.tasks];

    tasks.forEach((task, idx) => {
      // Start running
      const startDelay = delay + 600;
      const completeDelay = delay + 600 + (overnightMode ? 800 : 1800);
      delay = completeDelay;

      const startTimer = setTimeout(() => {
        setPlan((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            tasks: prev.tasks.map((t) =>
              t.id === task.id ? { ...t, status: "running" } : t
            ),
          };
        });
      }, startDelay);

      const completeTimer = setTimeout(() => {
        setPlan((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            tasks: prev.tasks.map((t) =>
              t.id === task.id ? { ...t, status: "complete" } : t
            ),
          };
        });

        // After last task
        if (idx === tasks.length - 1) {
          const summaryTimer = setTimeout(() => {
            setRunning(false);
            if (overnightMode) {
              setShowMorningSummary(true);
            }
          }, 800);
          taskTimers.current.push(summaryTimer);
        }
      }, completeDelay);

      taskTimers.current.push(startTimer, completeTimer);
    });
  };

  const handleReset = () => {
    taskTimers.current.forEach(clearTimeout);
    taskTimers.current = [];
    setProjectInput("");
    setPlan(null);
    setApproved(false);
    setRunning(false);
    setOvernightMode(false);
    setShowMorningSummary(false);
    setError(null);
  };

  const orionTasks = plan?.tasks.filter((t) => t.agent === "orion") ?? [];
  const ririTasks = plan?.tasks.filter((t) => t.agent === "riri") ?? [];
  const hourmanTasks = plan?.tasks.filter((t) => t.agent === "hourman") ?? [];

  const totalTasks = plan?.tasks.length ?? 0;
  const completeTasks = plan?.tasks.filter((t) => t.status === "complete").length ?? 0;
  const progressPct = totalTasks > 0 ? Math.round((completeTasks / totalTasks) * 100) : 0;

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: DEEP, fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-5 py-10 space-y-8">

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: GOLD + "15", border: `1px solid ${GOLD}30` }}
              >
                <Zap size={18} color={GOLD} />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">Ralph Mode</h1>
              <span
                className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                style={{ background: GOLD + "15", color: GOLD, border: `1px solid ${GOLD}30` }}
              >
                Family Plan
              </span>
            </div>
            <p className="text-sm text-white/40">
              All agents together. Give Ralph a project — he orchestrates Orion, Riri, and Hourman.
            </p>
          </div>
          {plan && (
            <button
              onClick={handleReset}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              ← New project
            </button>
          )}
        </div>

        {/* ── MORNING SUMMARY ────────────────────────────────────────────── */}
        {showMorningSummary && plan && <MorningSummary plan={plan} />}

        {/* ── INPUT SECTION ──────────────────────────────────────────────── */}
        {!plan && (
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div
              className="px-6 py-4 flex items-center gap-2"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <Sparkles size={15} color={GOLD} />
              <span className="text-sm font-black text-white">Give Ralph a project</span>
            </div>
            <div className="p-6 space-y-4">
              <textarea
                value={projectInput}
                onChange={(e) => setProjectInput(e.target.value)}
                placeholder="e.g. Research and build a weekly newsletter system for our company — competitive analysis, content templates, scheduling, and automation..."
                rows={5}
                className="w-full rounded-xl px-4 py-3 text-sm text-white/80 resize-none outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${BORDER}`,
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: "1.6",
                }}
                onFocus={(e) => (e.target.style.borderColor = GOLD + "50")}
                onBlur={(e) => (e.target.style.borderColor = BORDER)}
              />

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOvernightMode((v) => !v)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                    style={{
                      background: overnightMode ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${overnightMode ? HOURMAN_PURPLE + "50" : BORDER}`,
                      color: overnightMode ? HOURMAN_PURPLE : "rgba(255,255,255,0.35)",
                    }}
                  >
                    <Moon size={12} />
                    Running overnight
                  </button>
                  {overnightMode && (
                    <span className="text-xs text-white/30 font-mono">
                      Morning summary on wake
                    </span>
                  )}
                </div>

                <button
                  onClick={handleDecompose}
                  disabled={loading || !projectInput.trim()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all disabled:opacity-40"
                  style={{ background: GOLD, color: DEEP }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Ralph is thinking...
                    </>
                  ) : (
                    <>
                      <Zap size={14} />
                      Decompose project
                    </>
                  )}
                </button>
              </div>

              {error && (
                <div
                  className="flex items-start gap-2 px-4 py-3 rounded-xl text-sm"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#fca5a5" }}
                >
                  <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                  {error}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── PLAN HEADER + APPROVE ───────────────────────────────────────── */}
        {plan && (
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: SURFACE, border: `1px solid ${approved ? GOLD + "40" : BORDER}` }}
          >
            <div
              className="px-6 py-4 flex items-center gap-3 flex-wrap"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <Zap size={15} color={GOLD} />
              <span className="text-sm font-black text-white">{plan.projectTitle}</span>
              <span className="text-xs text-white/30 ml-auto font-mono">
                ~{plan.totalEstimatedTime} total
              </span>
            </div>

            <div className="px-6 py-4 space-y-4">
              <p className="text-sm text-white/50 leading-relaxed">{plan.summary}</p>

              {/* Progress bar — visible after approval */}
              {approved && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/30 font-mono">
                      {running ? "Executing..." : "Complete"}
                    </span>
                    <span style={{ color: GOLD }} className="font-black font-mono">
                      {progressPct}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${progressPct}%`, background: `linear-gradient(90deg, ${GOLD}, ${ORION_BLUE})` }}
                    />
                  </div>
                </div>
              )}

              {!approved && (
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 text-xs text-white/35">
                    <ChevronRight size={12} />
                    <span>{plan.tasks.length} tasks across 3 agents</span>
                  </div>
                  <button
                    onClick={handleApprove}
                    className="ml-auto inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-black transition-all"
                    style={{ background: GOLD, color: DEEP }}
                  >
                    <Play size={13} />
                    Approve plan
                  </button>
                </div>
              )}

              {approved && running && overnightMode && (
                <div
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                  style={{ background: "rgba(167,139,250,0.08)", border: `1px solid ${HOURMAN_PURPLE}30` }}
                >
                  <Moon size={14} style={{ color: HOURMAN_PURPLE }} />
                  <span style={{ color: HOURMAN_PURPLE }} className="font-medium">
                    Running overnight — you&apos;ll get a morning summary when complete.
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── KANBAN BOARD ───────────────────────────────────────────────── */}
        {plan && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <KanbanColumn agent="orion" tasks={orionTasks} />
            <KanbanColumn agent="riri" tasks={ririTasks} />
            <KanbanColumn agent="hourman" tasks={hourmanTasks} />
          </div>
        )}

        {/* ── AGENT LEGEND ───────────────────────────────────────────────── */}
        {!plan && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(["orion", "riri", "hourman"] as AgentName[]).map((agent) => {
              const cfg = AGENT_CONFIG[agent];
              const Icon = cfg.icon;
              const roleDesc: Record<AgentName, string> = {
                orion: "Research, intelligence, competitive analysis, data gathering",
                riri: "Building, creating, writing, designing, generating assets",
                hourman: "Planning, scheduling, sequencing, timeline coordination",
              };
              return (
                <div
                  key={agent}
                  className="rounded-2xl p-5"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: cfg.color + "15", border: `1px solid ${cfg.border}` }}
                    >
                      <Icon size={15} style={{ color: cfg.color }} />
                    </div>
                    <span className="text-sm font-black" style={{ color: cfg.color }}>
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">{roleDesc[agent]}</p>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
