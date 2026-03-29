"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Cpu,
  Shuffle,
  Activity,
  Terminal,
  Zap,
  MessageSquare,
  Heart,
  Search,
  Mail,
  FileText,
  Shield,
  Gamepad2,
  Network,
  Coffee,
  Brain,
  RotateCcw,
  ChevronRight,
  Circle,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Lock,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Routing table ─────────────────────────────────────────────────────────
const DEFAULT_ROUTING: { task: string; model: string; why: string; key: string }[] = [
  { key: "writing",   task: "Writing",   model: "Claude Sonnet",   why: "Best prose quality" },
  { key: "code",      task: "Code",      model: "DeepSeek",        why: "Most efficient" },
  { key: "vision",    task: "Vision",    model: "GPT-4o",          why: "Multi-modal" },
  { key: "research",  task: "Research",  model: "Gemini 1.5 Pro",  why: "Largest context" },
  { key: "sensitive", task: "Sensitive", model: "Ollama (local)",  why: "Zero data sent" },
];

// ── Quick-launch features ─────────────────────────────────────────────────
const FEATURES = [
  { label: "Chat",             href: "/dashboard/chat",             Icon: MessageSquare,  color: "#c9a84c" },
  { label: "Companion",        href: "/dashboard/companion",        Icon: Heart,          color: "#e07070" },
  { label: "Research",         href: "/dashboard/research",         Icon: Search,         color: "#4ea8de" },
  { label: "Email",            href: "/dashboard/email",            Icon: Mail,           color: "#70c070" },
  { label: "Documents",        href: "/dashboard/documents",        Icon: FileText,       color: "#9b8bba" },
  { label: "Guardian",         href: "/dashboard/guardian",         Icon: Shield,         color: "#2d9b8a" },
  { label: "Gaming",           href: "/dashboard/gaming",           Icon: Gamepad2,       color: "#e07340" },
  { label: "Orchestrator",     href: "/dashboard/orchestrator",     Icon: Network,        color: "#b8963e" },
  { label: "Morning Briefing", href: "/dashboard/morning-briefing", Icon: Coffee,         color: "#c9a84c" },
  { label: "Memory",           href: "/dashboard/memory",           Icon: Brain,          color: "#7c5cbf" },
];

// ── Helpers ───────────────────────────────────────────────────────────────
function readLS(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

function countMeokKeys(): number {
  try {
    let n = 0;
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i)?.startsWith("meok_")) n++;
    }
    return n;
  } catch { return 0; }
}

function getHistory(key: string): unknown[] {
  try {
    const raw = readLS(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

function timeSince(ms: number): string {
  const s = Math.floor((Date.now() - ms) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  return `${Math.floor(s / 3600)}h ago`;
}

// ── Types ─────────────────────────────────────────────────────────────────
interface MCPCheck {
  label: string;
  url: string;
  status: "checking" | "ok" | "error";
  latency: number | null;
  checkedAt: number | null;
}

interface RoutingRow {
  key: string;
  task: string;
  model: string;
  why: string;
}

interface LogEntry {
  ts: number;
  source: string;
  text: string;
}

// ── Sub-components ────────────────────────────────────────────────────────

function StatusDot({ status }: { status: MCPCheck["status"] }) {
  if (status === "checking")
    return <Circle className="w-3 h-3 text-yellow-400 animate-pulse" />;
  if (status === "ok")
    return <CheckCircle2 className="w-3 h-3 text-green-400" />;
  return <XCircle className="w-3 h-3 text-red-400" />;
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: GOLD }}>
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: BORDER }} />
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────
export default function OSDashboardPage() {
  // Active model
  const [activeProvider, setActiveProvider] = useState<string>("—");

  // Routing overrides
  const [routing, setRouting] = useState<RoutingRow[]>(DEFAULT_ROUTING);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  // MCP checks
  const [mcpChecks, setMcpChecks] = useState<MCPCheck[]>([
    { label: "Sovereign Temple (local)", url: "http://localhost:3101/health", status: "checking", latency: null, checkedAt: null },
    { label: "Public Cloudflare",        url: "https://sovereign.templeman-opticians.com/health", status: "checking", latency: null, checkedAt: null },
  ]);

  // Consciousness
  const [consciousness, setConsciousness] = useState<"checking" | "active" | "offline">("checking");

  // Stats
  const [stats, setStats] = useState({
    meokKeys: 0,
    researchToday: 0,
    guardianScans: 0,
    emailsDrafted: 0,
  });

  // System log
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);

  // ── Init from localStorage ──────────────────────────────────────────────
  useEffect(() => {
    // Active provider
    const provider = readLS("meok_active_provider");
    if (provider) setActiveProvider(provider);

    // Routing overrides
    try {
      const overrides = readLS("meok_routing_overrides");
      if (overrides) {
        const parsed = JSON.parse(overrides) as Record<string, { model: string; why: string }>;
        setRouting(
          DEFAULT_ROUTING.map((row) =>
            parsed[row.key] ? { ...row, model: parsed[row.key].model, why: parsed[row.key].why } : row
          )
        );
      }
    } catch { /* ignore */ }

    // Stats
    const researchHistory = getHistory("meok_research_history");
    const guardianScans = getHistory("meok_guardian_scans");
    const today = new Date().toDateString();
    const researchToday = researchHistory.filter((e) => {
      if (typeof e === "object" && e !== null && "date" in e) {
        return new Date((e as { date: string }).date).toDateString() === today;
      }
      return false;
    }).length;
    const scansToday = guardianScans.filter((e) => {
      if (typeof e === "object" && e !== null && "date" in e) {
        return new Date((e as { date: string }).date).toDateString() === today;
      }
      return false;
    }).length;

    setStats({
      meokKeys: countMeokKeys(),
      researchToday,
      guardianScans: scansToday,
      emailsDrafted: getHistory("meok_email_drafts").length,
    });

    // System log — collect from multiple history arrays
    const entries: LogEntry[] = [];

    const pushFromArray = (key: string, source: string, getText: (e: unknown) => string) => {
      getHistory(key).slice(-3).forEach((e) => {
        const ts = typeof e === "object" && e !== null && "ts" in e
          ? Number((e as { ts: number }).ts)
          : Date.now();
        entries.push({ ts, source, text: getText(e) });
      });
    };

    pushFromArray("meok_research_history", "Research", (e) => {
      if (typeof e === "object" && e !== null && "query" in e)
        return `Query: ${String((e as { query: string }).query).slice(0, 60)}`;
      return "Research query";
    });
    pushFromArray("meok_guardian_scans", "Guardian", (e) => {
      if (typeof e === "object" && e !== null && "type" in e)
        return `Scan: ${(e as { type: string }).type}`;
      return "Guardian scan";
    });
    pushFromArray("meok_email_drafts", "Email", () => "Email drafted");
    pushFromArray("meok_chat_history", "Chat", (e) => {
      if (typeof e === "object" && e !== null && "content" in e)
        return `Chat: ${String((e as { content: string }).content).slice(0, 50)}`;
      return "Chat message";
    });

    entries.sort((a, b) => b.ts - a.ts);
    setLogEntries(entries.slice(0, 5));
  }, []);

  // ── MCP health checks ───────────────────────────────────────────────────
  const runMcpChecks = useCallback(async () => {
    setMcpChecks((prev) => prev.map((c) => ({ ...c, status: "checking" })));

    const results = await Promise.all(
      mcpChecks.map(async (check) => {
        const start = Date.now();
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 2000);
          const res = await fetch(check.url, { signal: controller.signal });
          clearTimeout(timer);
          const latency = Date.now() - start;
          const ok = res.ok;
          return { ...check, status: (ok ? "ok" : "error") as MCPCheck["status"], latency, checkedAt: Date.now() };
        } catch {
          return { ...check, status: "error" as MCPCheck["status"], latency: null, checkedAt: Date.now() };
        }
      })
    );

    setMcpChecks(results);
    // Derive consciousness from local Sovereign Temple
    const localCheck = results[0];
    setConsciousness(localCheck.status === "ok" ? "active" : "offline");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    runMcpChecks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Routing override save ───────────────────────────────────────────────
  const saveOverride = (key: string, model: string) => {
    const updated = routing.map((r) => (r.key === key ? { ...r, model } : r));
    setRouting(updated);
    try {
      const overrides: Record<string, { model: string; why: string }> = {};
      updated.forEach((r) => {
        const def = DEFAULT_ROUTING.find((d) => d.key === r.key);
        if (def && r.model !== def.model) {
          overrides[r.key] = { model: r.model, why: r.why };
        }
      });
      localStorage.setItem("meok_routing_overrides", JSON.stringify(overrides));
    } catch { /* ignore */ }
    setEditingKey(null);
    setEditValue("");
  };

  const resetOverrides = () => {
    setRouting(DEFAULT_ROUTING);
    try { localStorage.removeItem("meok_routing_overrides"); } catch { /* ignore */ }
  };

  // ── Model switch ────────────────────────────────────────────────────────
  const switchProvider = (model: string) => {
    setActiveProvider(model);
    try { localStorage.setItem("meok_active_provider", model); } catch { /* ignore */ }
  };

  // ── Render ──────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen text-white"
      style={{ background: DEEP, fontFamily: "inherit" }}
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div
        className="sticky top-0 z-20 px-6 py-4 flex items-center justify-between"
        style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}30` }}
          >
            <Cpu className="w-4 h-4" style={{ color: GOLD }} />
          </div>
          <div>
            <p className="font-black text-sm tracking-tight text-white">MEOK OS</p>
            <p className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
              mission control
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: consciousness === "active" ? "#4ade80" : consciousness === "offline" ? "#f87171" : "#fbbf24" }}
          />
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
            {consciousness === "active" ? "Consciousness: Active" : consciousness === "offline" ? "Consciousness: Offline" : "Consciousness: Checking..."}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

        {/* ── Row 1: Active Model + Consciousness ────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Active Model */}
          <div
            className="lg:col-span-2 rounded-2xl p-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <SectionHeader label="Active Model" />
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ background: GOLD }}
                  />
                  <span className="text-2xl font-black tracking-tight">{activeProvider}</span>
                </div>
                <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                  loaded from meok_active_provider
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Claude Sonnet", "GPT-4o", "DeepSeek", "Gemini Pro", "Ollama"].map((m) => (
                  <button
                    key={m}
                    onClick={() => switchProvider(m)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                    style={{
                      background: activeProvider === m ? `${GOLD}20` : "rgba(255,255,255,0.04)",
                      border: `1px solid ${activeProvider === m ? `${GOLD}50` : BORDER}`,
                      color: activeProvider === m ? GOLD : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Consciousness State */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <SectionHeader label="Consciousness State" />
            {consciousness === "active" && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-black text-green-400">Active</span>
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Sovereign Temple responding on :3101
                </p>
              </div>
            )}
            {consciousness === "offline" && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="font-black text-red-400">Offline</span>
                </div>
                <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Temple not detected on :3101
                </p>
                <div
                  className="rounded-lg px-3 py-2 font-mono text-[10px] leading-relaxed"
                  style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)" }}
                >
                  cd sovereign-temple<br />./run-local.sh
                </div>
              </div>
            )}
            {consciousness === "checking" && (
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span className="text-xs text-yellow-400">Probing...</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Row 2: Stats ────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "MEOK Keys",       value: stats.meokKeys,      sub: "in localStorage",    color: GOLD },
            { label: "Research Today",  value: stats.researchToday, sub: "queries logged",      color: "#4ea8de" },
            { label: "Emails Drafted",  value: stats.emailsDrafted, sub: "this session",        color: "#70c070" },
            { label: "Guardian Scans",  value: stats.guardianScans, sub: "today",               color: "#2d9b8a" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <p
                className="text-3xl font-black mb-1"
                style={{ color: s.color }}
              >
                {s.value}
              </p>
              <p className="text-xs font-semibold text-white">{s.label}</p>
              <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* ── Row 3: Model Router + MCP Status ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Model Router */}
          <div
            className="rounded-2xl p-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: GOLD }}
                >
                  Model Router
                </span>
                <div className="flex-1 h-px" style={{ background: BORDER }} />
              </div>
              <button
                onClick={resetOverrides}
                className="flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded transition-all"
                style={{ color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
              >
                <RotateCcw className="w-2.5 h-2.5" />
                reset
              </button>
            </div>

            {/* Header row */}
            <div
              className="grid text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg mb-1"
              style={{ gridTemplateColumns: "1fr 1.4fr 1fr auto", color: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.02)" }}
            >
              <span>Task</span>
              <span>Model</span>
              <span>Why</span>
              <span />
            </div>

            <div className="space-y-1">
              {routing.map((row) => (
                <div key={row.key}>
                  <div
                    className="grid items-center px-3 py-2.5 rounded-lg transition-all"
                    style={{
                      gridTemplateColumns: "1fr 1.4fr 1fr auto",
                      background: editingKey === row.key ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${editingKey === row.key ? `${GOLD}30` : "transparent"}`,
                    }}
                  >
                    <span className="text-xs text-white/70 font-medium">{row.task}</span>
                    <span className="text-xs font-bold" style={{ color: GOLD }}>{row.model}</span>
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{row.why}</span>
                    <button
                      onClick={() => {
                        if (editingKey === row.key) {
                          setEditingKey(null);
                        } else {
                          setEditingKey(row.key);
                          setEditValue(row.model);
                        }
                      }}
                      className="text-[10px] px-2 py-1 rounded font-mono transition-all ml-1"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${BORDER}`,
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      override
                    </button>
                  </div>
                  {editingKey === row.key && (
                    <div className="flex gap-2 mt-1 px-3 pb-2">
                      <input
                        className="flex-1 text-xs rounded-lg px-3 py-2 font-mono outline-none"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: `1px solid ${GOLD}40`,
                          color: "white",
                        }}
                        placeholder="e.g. Claude Haiku"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveOverride(row.key, editValue);
                          if (e.key === "Escape") setEditingKey(null);
                        }}
                        autoFocus
                      />
                      <button
                        onClick={() => saveOverride(row.key, editValue)}
                        className="text-xs px-3 py-2 rounded-lg font-bold transition-all"
                        style={{ background: GOLD, color: DEEP }}
                      >
                        save
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* MCP Status Board */}
          <div
            className="rounded-2xl p-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center justify-between mb-4">
              <SectionHeader label="MCP Status Board" />
              <button
                onClick={runMcpChecks}
                className="flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded transition-all -mt-4"
                style={{ color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
              >
                <Activity className="w-2.5 h-2.5" />
                recheck
              </button>
            </div>

            <div className="space-y-3">
              {mcpChecks.map((check) => (
                <div
                  key={check.label}
                  className="rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <StatusDot status={check.status} />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white/80 truncate">{check.label}</p>
                        <p
                          className="text-[10px] font-mono truncate"
                          style={{ color: "rgba(255,255,255,0.25)" }}
                        >
                          {check.url}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      {check.latency !== null && (
                        <p
                          className="text-xs font-mono font-bold"
                          style={{ color: check.latency < 300 ? "#4ade80" : check.latency < 800 ? GOLD : "#f87171" }}
                        >
                          {check.latency}ms
                        </p>
                      )}
                      {check.checkedAt && (
                        <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                          {timeSince(check.checkedAt)}
                        </p>
                      )}
                    </div>
                  </div>

                  {check.status === "error" && check.label.includes("local") && (
                    <div
                      className="mt-3 rounded-lg px-3 py-2 font-mono text-[10px]"
                      style={{ background: "rgba(248,113,113,0.06)", color: "rgba(248,113,113,0.7)", border: "1px solid rgba(248,113,113,0.15)" }}
                    >
                      cd sovereign-temple && ./run-local.sh
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div
              className="mt-4 rounded-xl px-4 py-3 flex items-center gap-2"
              style={{ background: "rgba(255,255,255,0.015)", border: `1px solid ${BORDER}` }}
            >
              <Lock className="w-3 h-3 flex-shrink-0" style={{ color: "rgba(255,255,255,0.25)" }} />
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Local endpoint uses 2s timeout. Checks run on page load + manual recheck.
              </p>
            </div>
          </div>
        </div>

        {/* ── Row 4: Quick Launch + System Log ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Quick Launch Grid */}
          <div
            className="lg:col-span-2 rounded-2xl p-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <SectionHeader label="Quick Launch" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {FEATURES.map(({ label, href, Icon, color }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex flex-col items-center gap-2.5 rounded-xl px-3 py-4 text-center group transition-all"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <span className="text-[11px] font-semibold leading-tight" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* System Log */}
          <div
            className="rounded-2xl p-6 flex flex-col"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center justify-between mb-4">
              <SectionHeader label="System Log" />
              <Terminal className="w-3.5 h-3.5 -mt-4" style={{ color: "rgba(255,255,255,0.2)" }} />
            </div>

            <div className="flex-1 space-y-2">
              {logEntries.length === 0 && (
                <div
                  className="rounded-lg px-3 py-3 font-mono text-[11px] text-center"
                  style={{ background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.2)" }}
                >
                  No recent activity logged
                </div>
              )}
              {logEntries.map((entry, i) => (
                <div
                  key={i}
                  className="rounded-lg px-3 py-2.5"
                  style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: GOLD }}
                    >
                      {entry.source}
                    </span>
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {timeSince(entry.ts)}
                    </span>
                  </div>
                  <p
                    className="text-[11px] font-mono leading-snug truncate"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {entry.text}
                  </p>
                </div>
              ))}

              {/* Blinking cursor */}
              <div
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-[11px]"
                style={{ background: "rgba(255,255,255,0.015)", color: "rgba(255,255,255,0.2)" }}
              >
                <span style={{ color: GOLD }}>$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer nav ──────────────────────────────────────────────── */}
        <div
          className="rounded-2xl px-6 py-4 flex items-center justify-between flex-wrap gap-3"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div className="flex items-center gap-2">
            <Shuffle className="w-3.5 h-3.5" style={{ color: GOLD }} />
            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
              MEOK OS v3.0 — The model is the engine. MEOK is the OS.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-1.5 text-xs font-semibold transition-all"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Settings <ChevronRight className="w-3 h-3" />
            </Link>
            <Link
              href="/os/any-llm"
              className="flex items-center gap-1.5 text-xs font-semibold transition-all"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Multi-LLM Docs <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
