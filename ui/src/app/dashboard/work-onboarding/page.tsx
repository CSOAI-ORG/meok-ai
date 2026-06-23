"use client";

import { useState, useEffect } from "react";
import {
  Briefcase,
  Check,
  ChevronRight,
  ChevronLeft,
  Copy,
  FileText,
  Mail,
  Search,
  Bot,
  Users,
  Zap,
  Globe,
  RotateCcw,
  ExternalLink,
  Server,
  Wifi,
  WifiOff,
} from "lucide-react";

// ── Brand tokens ────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Types ────────────────────────────────────────────────────────────────────
type Role = "Founder" | "Developer" | "Writer" | "Researcher" | "Manager";
type Tool = "Documents" | "Email" | "Research" | "Agents" | "Team";

interface WizardState {
  workspaceName: string;
  role: Role | null;
  tools: Tool[];
}

// ── Constants ────────────────────────────────────────────────────────────────
const LS_KEY = "meok_work_onboarding_done";

const ROLES: { value: Role; label: string; desc: string }[] = [
  { value: "Founder", label: "Founder", desc: "Strategic planning, team, and vision" },
  { value: "Developer", label: "Developer", desc: "Technical builds, agents, and automation" },
  { value: "Writer", label: "Writer", desc: "Content, documents, and communications" },
  { value: "Researcher", label: "Researcher", desc: "Deep research and knowledge synthesis" },
  { value: "Manager", label: "Manager", desc: "Team coordination and project oversight" },
];

const TOOLS: { value: Tool; label: string; icon: React.ReactNode; href: string }[] = [
  { value: "Documents", label: "Documents", icon: <FileText className="w-4 h-4" />, href: "/dashboard/documents" },
  { value: "Email", label: "Email", icon: <Mail className="w-4 h-4" />, href: "/dashboard/email" },
  { value: "Research", label: "Research", icon: <Search className="w-4 h-4" />, href: "/dashboard/research" },
  { value: "Agents", label: "Agents", icon: <Bot className="w-4 h-4" />, href: "/dashboard/agents" },
  { value: "Team", label: "Team", icon: <Users className="w-4 h-4" />, href: "/dashboard/team" },
];

const TEMPLATES: Record<Role, { title: string; desc: string; icon: React.ReactNode }[]> = {
  Founder: [
    { title: "Business Planning", desc: "Structured plan with goals, milestones, and KPIs", icon: <Briefcase className="w-4 h-4" /> },
    { title: "Team Briefing", desc: "Weekly briefing doc for your team", icon: <Users className="w-4 h-4" /> },
    { title: "Research Report", desc: "Market analysis and competitive landscape", icon: <Search className="w-4 h-4" /> },
  ],
  Developer: [
    { title: "Project Spec", desc: "Technical spec with architecture and requirements", icon: <FileText className="w-4 h-4" /> },
    { title: "Agent Workflow", desc: "Automated agent pipeline configuration", icon: <Bot className="w-4 h-4" /> },
    { title: "API Docs Draft", desc: "Starter template for API documentation", icon: <Globe className="w-4 h-4" /> },
  ],
  Writer: [
    { title: "Content Calendar", desc: "Monthly content plan with topics and deadlines", icon: <FileText className="w-4 h-4" /> },
    { title: "Article Template", desc: "Long-form article with intro, sections, and CTA", icon: <Zap className="w-4 h-4" /> },
    { title: "Email Sequence", desc: "5-part email nurture sequence", icon: <Mail className="w-4 h-4" /> },
  ],
  Researcher: [
    { title: "Research Brief", desc: "Structured brief with questions and sources", icon: <Search className="w-4 h-4" /> },
    { title: "Literature Review", desc: "Annotated review template for academic sources", icon: <FileText className="w-4 h-4" /> },
    { title: "Insight Report", desc: "Summarise findings into a shareable report", icon: <Globe className="w-4 h-4" /> },
  ],
  Manager: [
    { title: "Sprint Plan", desc: "Two-week sprint with tasks and owners", icon: <Briefcase className="w-4 h-4" /> },
    { title: "1:1 Template", desc: "Recurring 1-on-1 agenda and notes", icon: <Users className="w-4 h-4" /> },
    { title: "Status Report", desc: "Weekly status update for stakeholders", icon: <FileText className="w-4 h-4" /> },
  ],
};

const MCP_CONFIG_SNIPPET = `{
  "mcpServers": {
    "meok": {
      "url": "https://sovereign.meok.ai/mcp",
      "transport": "http"
    }
  }
}`;

// ── Integration status (UI-only mock) ────────────────────────────────────────
const INTEGRATIONS = [
  { key: "mcp", label: "MCP Server", connected: false },
  { key: "documents", label: "Documents", connected: true },
  { key: "email", label: "Email", connected: true },
  { key: "research", label: "Research", connected: true },
];

// ── Step indicators ──────────────────────────────────────────────────────────
const STEPS = ["Workspace", "Role", "Tools", "Done"];

// ── Sub-components ───────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                style={{
                  background: done ? GOLD : active ? `${GOLD}30` : "rgba(255,255,255,0.06)",
                  color: done ? DEEP : active ? GOLD : "rgba(255,255,255,0.3)",
                  border: active ? `1px solid ${GOLD}60` : "1px solid transparent",
                }}
              >
                {done ? <Check className="w-3 h-3" /> : i + 1}
              </div>
              <span
                className="text-xs font-medium hidden sm:inline"
                style={{ color: active ? GOLD : done ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className="w-6 h-px"
                style={{ background: done ? `${GOLD}60` : "rgba(255,255,255,0.08)" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl p-5 ${className}`}
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      {children}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function WorkOnboardingPage() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mcpTesting, setMcpTesting] = useState(false);
  const [mcpResult, setMcpResult] = useState<null | "ok" | "fail">(null);

  const [wizard, setWizard] = useState<WizardState>({
    workspaceName: "",
    role: null,
    tools: [],
  });

  // Read localStorage on mount
  useEffect(() => {
    try {
      const val = localStorage.getItem(LS_KEY);
      if (val) {
        const parsed = JSON.parse(val);
        setWizard(parsed.wizard ?? wizard);
        setCompleted(true);
        setStep(3);
      }
    } catch {
      // ignore
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleComplete() {
    const save = { wizard, completedAt: new Date().toISOString() };
    localStorage.setItem(LS_KEY, JSON.stringify(save));
    setCompleted(true);
    setStep(3);
  }

  function handleReset() {
    localStorage.removeItem(LS_KEY);
    setCompleted(false);
    setStep(0);
    setWizard({ workspaceName: "", role: null, tools: [] });
    setMcpResult(null);
  }

  function toggleTool(t: Tool) {
    setWizard((w) => ({
      ...w,
      tools: w.tools.includes(t) ? w.tools.filter((x) => x !== t) : [...w.tools, t],
    }));
  }

  function copyConfig() {
    navigator.clipboard.writeText(MCP_CONFIG_SNIPPET).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function testMcp() {
    setMcpTesting(true);
    setMcpResult(null);
    // UI-only simulation
    setTimeout(() => {
      setMcpTesting(false);
      setMcpResult("fail"); // realistic default — not actually connected
    }, 1800);
  }

  const canAdvanceStep0 = wizard.workspaceName.trim().length >= 2;
  const canAdvanceStep1 = wizard.role !== null;
  const canAdvanceStep2 = wizard.tools.length >= 1;

  // Templates for selected role
  const templates = wizard.role ? TEMPLATES[wizard.role] : [];
  // Filter TOOLS to only the selected ones for the done screen
  const selectedToolObjects = TOOLS.filter((t) => wizard.tools.includes(t.value));

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${GOLD}18` }}
          >
            <Briefcase className="w-5 h-5" style={{ color: GOLD }} />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-white">Work Onboarding</h1>
            <p className="text-sm text-white/40">Set up your MEOK workspace</p>
          </div>
        </div>

        {completed && (
          <button type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-[1.02]"
            style={{
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${BORDER}`,
            }}
          >
            <RotateCcw className="w-3 h-3" />
            Reset wizard
          </button>
        )}
      </div>

      {/* Step indicator */}
      <StepIndicator current={step} />

      {/* ── STEP 0: Name your workspace ────────────────────────────────── */}
      {step === 0 && (
        <div className="max-w-xl space-y-6">
          <Card>
            <h2 className="text-base font-semibold text-white mb-1">Name your workspace</h2>
            <p className="text-sm text-white/40 mb-5">
              Give your MEOK workspace a name — this helps personalise your experience.
            </p>
            <label className="block text-xs font-medium text-white/50 mb-1.5">Workspace name</label>
            <input
              type="text"
              value={wizard.workspaceName}
              onChange={(e) => setWizard((w) => ({ ...w, workspaceName: e.target.value }))}
              placeholder="e.g. MEOK HQ, My Research Lab..."
              className="w-full px-4 py-3 rounded-lg text-sm text-white/80 outline-none focus:ring-1 transition-all"
              style={{
                background: DEEP,
                border: `1px solid ${BORDER}`,
                // @ts-expect-error -- CSS custom property
                "--tw-ring-color": GOLD,
              }}
              onKeyDown={(e) => e.key === "Enter" && canAdvanceStep0 && setStep(1)}
            />
          </Card>

          <div className="flex justify-end">
            <button type="button"
              onClick={() => setStep(1)}
              disabled={!canAdvanceStep0}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 1: Choose role ────────────────────────────────────────── */}
      {step === 1 && (
        <div className="max-w-xl space-y-6">
          <Card>
            <h2 className="text-base font-semibold text-white mb-1">Choose your role</h2>
            <p className="text-sm text-white/40 mb-5">
              Select the role that best describes how you use MEOK.
            </p>
            <div className="space-y-2">
              {ROLES.map((r) => {
                const selected = wizard.role === r.value;
                return (
                  <button type="button"
                    key={r.value}
                    onClick={() => setWizard((w) => ({ ...w, role: r.value }))}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all hover:scale-[1.01]"
                    style={{
                      background: selected ? `${GOLD}12` : `${DEEP}`,
                      border: `1px solid ${selected ? `${GOLD}50` : BORDER}`,
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                      style={{
                        borderColor: selected ? GOLD : "rgba(255,255,255,0.2)",
                        background: selected ? GOLD : "transparent",
                      }}
                    >
                      {selected && <Check className="w-3 h-3" style={{ color: DEEP }} />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{r.label}</p>
                      <p className="text-xs text-white/40">{r.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>

          <div className="flex justify-between">
            <button type="button"
              onClick={() => setStep(0)}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.01]"
              style={{ color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <button type="button"
              onClick={() => setStep(2)}
              disabled={!canAdvanceStep1}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 2: Pick tools + MCP ──────────────────────────────────── */}
      {step === 2 && (
        <div className="max-w-2xl space-y-6">
          {/* Tool selection */}
          <Card>
            <h2 className="text-base font-semibold text-white mb-1">Pick your primary tools</h2>
            <p className="text-sm text-white/40 mb-5">
              Select all the MEOK tools you plan to use. You can change this later.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TOOLS.map((t) => {
                const selected = wizard.tools.includes(t.value);
                return (
                  <button type="button"
                    key={t.value}
                    onClick={() => toggleTool(t.value)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all hover:scale-[1.01]"
                    style={{
                      background: selected ? `${GOLD}12` : DEEP,
                      border: `1px solid ${selected ? `${GOLD}50` : BORDER}`,
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-all"
                      style={{
                        background: selected ? `${GOLD}30` : "rgba(255,255,255,0.06)",
                        color: selected ? GOLD : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {t.icon}
                    </div>
                    <span className="text-sm font-medium" style={{ color: selected ? "white" : "rgba(255,255,255,0.6)" }}>
                      {t.label}
                    </span>
                    {selected && (
                      <Check className="w-4 h-4 ml-auto" style={{ color: GOLD }} />
                    )}
                  </button>
                );
              })}
            </div>
          </Card>

          {/* MCP connection guide */}
          <Card>
            <div className="flex items-center gap-2 mb-1">
              <Server className="w-4 h-4" style={{ color: GOLD }} />
              <h2 className="text-base font-semibold text-white">Connect MCP</h2>
              <span
                className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
              >
                Optional
              </span>
            </div>
            <p className="text-sm text-white/40 mb-4">
              Add the MEOK MCP server to your Claude Desktop config to connect your workspace to AI tools.
            </p>

            {/* Config snippet */}
            <div className="relative mb-3">
              <label className="block text-xs font-medium text-white/50 mb-1.5">
                claude_desktop_config.json
              </label>
              <div
                className="relative rounded-lg p-4 font-mono text-xs leading-relaxed overflow-x-auto"
                style={{ background: DEEP, border: `1px solid ${BORDER}` }}
              >
                <pre className="text-white/60 whitespace-pre">{MCP_CONFIG_SNIPPET}</pre>
                <button type="button"
                  onClick={copyConfig}
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all hover:scale-105"
                  style={{
                    background: copied ? "rgba(34,197,94,0.1)" : `${GOLD}15`,
                    color: copied ? "#22c55e" : GOLD,
                    border: `1px solid ${copied ? "rgba(34,197,94,0.3)" : `${GOLD}30`}`,
                  }}
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            {/* Test connection */}
            <button type="button"
              onClick={testMcp}
              disabled={mcpTesting}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] disabled:opacity-60"
              style={{
                background: `${GOLD}10`,
                color: GOLD,
                border: `1px solid ${GOLD}30`,
              }}
            >
              {mcpTesting ? (
                <>
                  <Wifi className="w-4 h-4 animate-pulse" />
                  Testing connection...
                </>
              ) : (
                <>
                  <Wifi className="w-4 h-4" />
                  Test connection
                </>
              )}
            </button>

            {mcpResult && (
              <div
                className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
                style={{
                  background: mcpResult === "ok" ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
                  border: `1px solid ${mcpResult === "ok" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                  color: mcpResult === "ok" ? "#22c55e" : "#ef4444",
                }}
              >
                {mcpResult === "ok" ? (
                  <><Check className="w-3.5 h-3.5" /> MCP server connected successfully</>
                ) : (
                  <><WifiOff className="w-3.5 h-3.5" /> Not connected — add the config and restart Claude Desktop</>
                )}
              </div>
            )}
          </Card>

          <div className="flex justify-between">
            <button type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.01]"
              style={{ color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <button type="button"
              onClick={handleComplete}
              disabled={!canAdvanceStep2}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
            >
              Finish setup
              <Check className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Done screen ───────────────────────────────────────── */}
      {step === 3 && (
        <div className="max-w-2xl space-y-6">
          {/* Success banner */}
          <div
            className="flex items-center gap-4 px-5 py-4 rounded-xl"
            style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30` }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${GOLD}25` }}
            >
              <Check className="w-5 h-5" style={{ color: GOLD }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {wizard.workspaceName ? `${wizard.workspaceName} is ready` : "Workspace is ready"}
              </p>
              <p className="text-xs text-white/40">
                Role: {wizard.role ?? "—"} &middot; {wizard.tools.length} tool{wizard.tools.length !== 1 ? "s" : ""} selected
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Selected tools quick links */}
            <Card>
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" style={{ color: GOLD }} />
                Your tools
              </h3>
              <div className="space-y-2">
                {selectedToolObjects.length > 0 ? (
                  selectedToolObjects.map((t) => (
                    <a
                      key={t.value}
                      href={t.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all hover:scale-[1.01] group"
                      style={{ background: DEEP, border: `1px solid ${BORDER}` }}
                    >
                      <div
                        className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                        style={{ background: `${GOLD}20`, color: GOLD }}
                      >
                        {t.icon}
                      </div>
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors">{t.label}</span>
                      <ExternalLink className="w-3 h-3 ml-auto text-white/20 group-hover:text-white/40 transition-colors" />
                    </a>
                  ))
                ) : (
                  <p className="text-xs text-white/30 italic">No tools selected</p>
                )}
              </div>
            </Card>

            {/* Integration status checker */}
            <Card>
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Server className="w-4 h-4" style={{ color: GOLD }} />
                Integration status
              </h3>
              <div className="space-y-2.5">
                {INTEGRATIONS.map((int) => (
                  <div key={int.key} className="flex items-center justify-between">
                    <span className="text-sm text-white/60">{int.label}</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: int.connected ? "#22c55e" : "rgba(239,68,68,0.7)",
                          boxShadow: int.connected ? "0 0 6px rgba(34,197,94,0.5)" : "none",
                        }}
                      />
                      <span
                        className="text-xs font-medium"
                        style={{ color: int.connected ? "#22c55e" : "rgba(239,68,68,0.8)" }}
                      >
                        {int.connected ? "Connected" : "Disconnected"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/25 mt-4 pt-3" style={{ borderTop: `1px solid ${BORDER}` }}>
                MCP connection requires Claude Desktop config
              </p>
            </Card>
          </div>

          {/* Quick start templates */}
          {wizard.role && templates.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" style={{ color: GOLD }} />
                Quick start templates
                <span className="text-xs text-white/30 font-normal">— tailored for {wizard.role}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {templates.map((tmpl) => (
                  <button type="button"
                    key={tmpl.title}
                    className="flex flex-col items-start gap-2 px-4 py-4 rounded-xl text-left transition-all hover:scale-[1.02] group"
                    style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                    onClick={() => {/* future: open document with template */}}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ background: `${GOLD}18`, color: GOLD }}
                    >
                      {tmpl.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{tmpl.title}</p>
                      <p className="text-xs text-white/40 mt-0.5 leading-snug">{tmpl.desc}</p>
                    </div>
                    <div
                      className="mt-auto flex items-center gap-1 text-xs font-medium"
                      style={{ color: `${GOLD}80` }}
                    >
                      Use template
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
