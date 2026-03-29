"use client";

import { useState, useEffect, useCallback } from "react";
import {
  CheckCircle2,
  XCircle,
  RefreshCw,
  Copy,
  Download,
  Activity,
  Server,
  ShieldCheck,
  CreditCard,
  Gamepad2,
  BrainCircuit,
  BarChart3,
  Check,
} from "lucide-react";

// ─── Brand tokens ──────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── .env.example template ────────────────────────────────────────
const ENV_TEMPLATE = `# ─────────────────────────────────────────────────────────────────
# MEOK UI — Environment Variables
# Copy to .env.local and fill in your values.
# Never commit .env.local to version control.
# ─────────────────────────────────────────────────────────────────

# AI Keys
ANTHROPIC_API_KEY=
OPENAI_API_KEY=
GOOGLE_AI_API_KEY=

# Database (Neon PostgreSQL with pgvector)
DATABASE_URL=

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Gaming APIs
STEAM_API_KEY=
RAWG_API_KEY=
TWITCH_CLIENT_ID=
TWITCH_CLIENT_SECRET=

# Sovereign Temple (local MCP server)
SOV3_URL=http://localhost:3101

# Guardian
GUARDIAN_WEBHOOK_URL=

# Stripe (billing)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# Sentry
NEXT_PUBLIC_SENTRY_DSN=

# App
NEXT_PUBLIC_APP_URL=https://meok.ai
`;

// ─── Env var groups ────────────────────────────────────────────────
type EnvGroup = {
  label: string;
  icon: React.ReactNode;
  vars: { key: string; label: string; isPublic?: boolean }[];
};

// These are NEXT_PUBLIC_ vars — their presence can be checked client-side.
// Private server-side vars are checked via /api/health.
const ENV_GROUPS: EnvGroup[] = [
  {
    label: "AI Keys",
    icon: <BrainCircuit size={16} />,
    vars: [
      { key: "ANTHROPIC_API_KEY",  label: "Anthropic" },
      { key: "OPENAI_API_KEY",     label: "OpenAI" },
      { key: "GOOGLE_AI_API_KEY",  label: "Google AI" },
    ],
  },
  {
    label: "Database",
    icon: <Server size={16} />,
    vars: [
      { key: "DATABASE_URL", label: "Neon PostgreSQL" },
    ],
  },
  {
    label: "Auth (Clerk)",
    icon: <ShieldCheck size={16} />,
    vars: [
      { key: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY", label: "Publishable Key", isPublic: true },
      { key: "CLERK_SECRET_KEY",                  label: "Secret Key" },
      { key: "CLERK_WEBHOOK_SECRET",              label: "Webhook Secret" },
    ],
  },
  {
    label: "Gaming APIs",
    icon: <Gamepad2 size={16} />,
    vars: [
      { key: "STEAM_API_KEY",       label: "Steam" },
      { key: "RAWG_API_KEY",        label: "RAWG" },
      { key: "TWITCH_CLIENT_ID",    label: "Twitch Client ID" },
      { key: "TWITCH_CLIENT_SECRET", label: "Twitch Secret" },
    ],
  },
  {
    label: "Sovereign Temple",
    icon: <Activity size={16} />,
    vars: [
      { key: "SOV3_URL",                label: "SOV3 URL" },
      { key: "NEXT_PUBLIC_SOV3_ENDPOINT", label: "SOV3 Public Endpoint", isPublic: true },
      { key: "SOV3_ADMIN_TOKEN",         label: "Admin Token" },
    ],
  },
  {
    label: "Payments (Stripe)",
    icon: <CreditCard size={16} />,
    vars: [
      { key: "STRIPE_SECRET_KEY",              label: "Secret Key" },
      { key: "STRIPE_WEBHOOK_SECRET",          label: "Webhook Secret" },
      { key: "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY", label: "Publishable Key", isPublic: true },
    ],
  },
  {
    label: "Analytics",
    icon: <BarChart3 size={16} />,
    vars: [
      { key: "NEXT_PUBLIC_POSTHOG_KEY",  label: "PostHog Key",  isPublic: true },
      { key: "NEXT_PUBLIC_POSTHOG_HOST", label: "PostHog Host", isPublic: true },
      { key: "NEXT_PUBLIC_SENTRY_DSN",   label: "Sentry DSN",   isPublic: true },
    ],
  },
];

// ─── Deployment checklist items ────────────────────────────────────
const CHECKLIST_ITEMS = [
  { id: "env-vars",    label: "Environment variables configured" },
  { id: "database",    label: "Database connected" },
  { id: "auth",        label: "Auth configured (Clerk)" },
  { id: "ai-keys",     label: "AI keys working" },
  { id: "sov3",        label: "Sovereign Temple MCP running" },
  { id: "domain",      label: "Custom domain configured" },
  { id: "ssl",         label: "SSL certificate active" },
  { id: "analytics",   label: "Analytics tracking" },
];

const LS_KEY = "meok_deploy_checklist";

// ─── Helper: check if a public env var is set ─────────────────────
function isPublicVarSet(key: string): boolean {
  // NEXT_PUBLIC_ vars are baked in at build time via process.env
  const val = (process.env as Record<string, string | undefined>)[key];
  return !!val && val.length > 0;
}

// ─── MCPHealthResult type ─────────────────────────────────────────
interface MCPHealth {
  reachable: boolean;
  status?: string;
  latencyMs?: number;
  url: string;
  error?: string;
}

// ─── ServerEnvStatus type (from /api/health) ──────────────────────
interface ServerEnvStatus {
  providers: Record<string, boolean>;
  db: { connected: boolean };
}

// ─── EnvRow component ─────────────────────────────────────────────
function EnvRow({ label, isSet }: { label: string; isSet: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 0",
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
        {label}
      </span>
      {isSet ? (
        <CheckCircle2 size={16} color="#4ade80" />
      ) : (
        <XCircle size={16} color="rgba(255,255,255,0.25)" />
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function DeploymentPage() {
  const [mcpHealth, setMcpHealth] = useState<MCPHealth | null>(null);
  const [mcpLoading, setMcpLoading] = useState(false);
  const [serverEnv, setServerEnv] = useState<ServerEnvStatus | null>(null);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  // ── Load checklist from localStorage ──────────────────────────
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LS_KEY);
      if (stored) setChecklist(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const saveChecklist = (next: Record<string, boolean>) => {
    setChecklist(next);
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const toggleCheck = (id: string) => {
    saveChecklist({ ...checklist, [id]: !checklist[id] });
  };

  // ── Fetch server-side env status via /api/health ───────────────
  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((data) => setServerEnv(data as ServerEnvStatus))
      .catch(() => null);
  }, []);

  // ── MCP health check ───────────────────────────────────────────
  const checkMCP = useCallback(async () => {
    setMcpLoading(true);
    try {
      const res = await fetch("/api/mcp-health");
      const data = await res.json();
      setMcpHealth(data as MCPHealth);
    } catch {
      setMcpHealth({ reachable: false, url: "unknown", error: "Fetch failed" });
    } finally {
      setMcpLoading(false);
    }
  }, []);

  useEffect(() => {
    checkMCP();
  }, [checkMCP]);

  // ── Copy env template ──────────────────────────────────────────
  const copyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(ENV_TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: create a textarea and exec copy
      const ta = document.createElement("textarea");
      ta.value = ENV_TEMPLATE;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // ── Export config (which vars are set, no values) ──────────────
  const exportConfig = () => {
    const config: Record<string, boolean> = {};

    // Public vars checked client-side
    for (const group of ENV_GROUPS) {
      for (const v of group.vars) {
        if (v.isPublic) {
          config[v.key] = isPublicVarSet(v.key);
        } else {
          // Use server data if available
          config[v.key] = false; // default
        }
      }
    }

    // Overlay server data where available
    if (serverEnv) {
      if (serverEnv.db?.connected !== undefined) {
        config["DATABASE_URL"] = serverEnv.db.connected;
      }
      if (serverEnv.providers) {
        if (serverEnv.providers.anthropic !== undefined) config["ANTHROPIC_API_KEY"] = serverEnv.providers.anthropic;
        if (serverEnv.providers.openai !== undefined)     config["OPENAI_API_KEY"]    = serverEnv.providers.openai;
      }
    }

    const blob = new Blob([JSON.stringify(config, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meok-env-config.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Determine var status (public from process.env, private from /api/health) ─
  const getVarStatus = (key: string, isPublic?: boolean): boolean => {
    if (isPublic) return isPublicVarSet(key);
    // Infer from server health data
    if (serverEnv) {
      if (key === "DATABASE_URL") return serverEnv.db?.connected ?? false;
      if (key === "ANTHROPIC_API_KEY") return serverEnv.providers?.anthropic ?? false;
      if (key === "OPENAI_API_KEY")    return serverEnv.providers?.openai    ?? false;
    }
    return false;
  };

  // ─── Render ───────────────────────────────────────────────────
  return (
    <div
      style={{
        minHeight: "100vh",
        background: DEEP,
        color: "#fff",
        padding: "32px 24px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: GOLD,
            margin: 0,
            marginBottom: 6,
          }}
        >
          Deployment &amp; System Health
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0 }}>
          Review environment configuration, check service status, and track deployment readiness.
        </p>
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
        <button
          onClick={copyTemplate}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "9px 16px",
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 8,
            color: copied ? "#4ade80" : "#fff",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            transition: "border-color 0.15s",
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy .env template"}
        </button>

        <button
          onClick={exportConfig}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "9px 16px",
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 8,
            color: "#fff",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <Download size={14} />
          Export config
        </button>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
          marginBottom: 20,
        }}
      >
        {/* ── MCP Server Health ── */}
        <div
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Activity size={16} color={GOLD} />
              <span style={{ fontWeight: 600, fontSize: 14 }}>
                Sovereign Temple MCP
              </span>
            </div>
            <button
              onClick={checkMCP}
              disabled={mcpLoading}
              style={{
                background: "transparent",
                border: `1px solid ${BORDER}`,
                borderRadius: 6,
                padding: "4px 8px",
                cursor: "pointer",
                color: "rgba(255,255,255,0.6)",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 12,
              }}
            >
              <RefreshCw
                size={12}
                style={{
                  animation: mcpLoading ? "spin 1s linear infinite" : "none",
                }}
              />
              Refresh
            </button>
          </div>

          {mcpHealth ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 14px",
                  background: mcpHealth.reachable
                    ? "rgba(74,222,128,0.06)"
                    : "rgba(239,68,68,0.06)",
                  borderRadius: 8,
                  border: `1px solid ${
                    mcpHealth.reachable
                      ? "rgba(74,222,128,0.18)"
                      : "rgba(239,68,68,0.18)"
                  }`,
                }}
              >
                {mcpHealth.reachable ? (
                  <CheckCircle2 size={20} color="#4ade80" />
                ) : (
                  <XCircle size={20} color="#f87171" />
                )}
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: mcpHealth.reachable ? "#4ade80" : "#f87171",
                    }}
                  >
                    {mcpHealth.reachable ? "Online" : "Offline"}
                  </div>
                  {mcpHealth.status && (
                    <div
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.5)",
                        marginTop: 1,
                      }}
                    >
                      status: {mcpHealth.status}
                    </div>
                  )}
                </div>
                {mcpHealth.latencyMs !== undefined && (
                  <div
                    style={{
                      marginLeft: "auto",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {mcpHealth.latencyMs}ms
                  </div>
                )}
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  wordBreak: "break-all",
                }}
              >
                {mcpHealth.url}
              </div>

              {mcpHealth.error && (
                <div
                  style={{
                    fontSize: 12,
                    color: "#f87171",
                    background: "rgba(239,68,68,0.06)",
                    borderRadius: 6,
                    padding: "6px 10px",
                  }}
                >
                  {mcpHealth.error}
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.3)",
                fontSize: 13,
              }}
            >
              Checking&hellip;
            </div>
          )}
        </div>

        {/* ── Deployment Checklist ── */}
        <div
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <ShieldCheck size={16} color={GOLD} />
            <span style={{ fontWeight: 600, fontSize: 14 }}>
              Deployment Checklist
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {Object.values(checklist).filter(Boolean).length} /{" "}
              {CHECKLIST_ITEMS.length}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {CHECKLIST_ITEMS.map((item) => (
              <label
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  padding: "6px 8px",
                  borderRadius: 7,
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.04)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "transparent")
                }
              >
                <div
                  onClick={() => toggleCheck(item.id)}
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    border: `1.5px solid ${
                      checklist[item.id] ? GOLD : "rgba(255,255,255,0.2)"
                    }`,
                    background: checklist[item.id]
                      ? `${GOLD}22`
                      : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.15s",
                  }}
                >
                  {checklist[item.id] && (
                    <Check size={11} color={GOLD} strokeWidth={3} />
                  )}
                </div>
                <span
                  style={{
                    fontSize: 13,
                    color: checklist[item.id]
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(255,255,255,0.8)",
                    textDecoration: checklist[item.id]
                      ? "line-through"
                      : "none",
                    userSelect: "none",
                  }}
                  onClick={() => toggleCheck(item.id)}
                >
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ── Environment Variables ── */}
      <div
        style={{
          background: SURFACE,
          border: `1px solid ${BORDER}`,
          borderRadius: 12,
          padding: 20,
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            fontSize: 15,
            fontWeight: 600,
            marginBottom: 20,
            color: GOLD,
          }}
        >
          Environment Variables
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {ENV_GROUPS.map((group) => (
            <div key={group.label}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginBottom: 10,
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {group.icon}
                {group.label}
              </div>
              <div>
                {group.vars.map((v) => (
                  <EnvRow
                    key={v.key}
                    label={v.label}
                    isSet={getVarStatus(v.key, v.isPublic)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 20,
            fontSize: 11,
            color: "rgba(255,255,255,0.25)",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 12,
          }}
        >
          Private server-side variables (ANTHROPIC_API_KEY, DATABASE_URL, etc.) are
          verified via /api/health — no values are ever sent to the browser.
          NEXT_PUBLIC_ variables are checked at runtime on the client.
        </p>
      </div>

      {/* spin keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
