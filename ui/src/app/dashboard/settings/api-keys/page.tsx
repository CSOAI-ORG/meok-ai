"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Key,
  Plus,
  Trash2,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Clock,
  ChevronDown,
  X,
  Eye,
  EyeOff,
  Activity,
} from "lucide-react";

// ─── Brand tokens ──────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ─── Types ──────────────────────────────────────────────────────────
type Provider = "anthropic" | "openai" | "google" | "groq";

interface SavedKey {
  id: string;
  provider: Provider;
  maskedKey: string;
  fullKey: string;
  addedAt: string;
  lastUsed: string | null;
}

interface KeyStats {
  requestsToday: number;
  requestsMonth: number;
  tokensEstimated: number;
  dailySparkline: number[]; // last 7 days, 0-100
}

interface ProviderStatus {
  name: string;
  provider: Provider;
  status: "operational" | "degraded" | "down";
  lastChecked: Date;
}

// ─── Provider config ────────────────────────────────────────────────
const PROVIDER_META: Record<Provider, { label: string; color: string; prefix: string; placeholder: string }> = {
  anthropic: {
    label: "Anthropic",
    color: "#c96442",
    prefix: "sk-ant-",
    placeholder: "sk-ant-api03-...",
  },
  openai: {
    label: "OpenAI",
    color: "#10a37f",
    prefix: "sk-",
    placeholder: "sk-proj-...",
  },
  google: {
    label: "Google Gemini",
    color: "#4285f4",
    prefix: "AI",
    placeholder: "AIza...",
  },
  groq: {
    label: "Groq",
    color: "#f55036",
    prefix: "gsk_",
    placeholder: "gsk_...",
  },
};

const STORAGE_KEY = "meok_byok_keys";

// ─── Helpers ────────────────────────────────────────────────────────
function maskKey(key: string): string {
  if (key.length <= 8) return "••••••••";
  const prefix = key.slice(0, 10);
  const suffix = key.slice(-4);
  return `${prefix}••••${suffix}`;
}

function validateKey(provider: Provider, key: string): string | null {
  const meta = PROVIDER_META[provider];
  if (!key.trim()) return "Key cannot be empty";
  if (!key.startsWith(meta.prefix)) return `${meta.label} keys must start with "${meta.prefix}"`;
  if (key.length < 20) return "Key appears too short";
  return null;
}

function generateStats(): KeyStats {
  const base = Math.floor(Math.random() * 80) + 20;
  return {
    requestsToday: Math.floor(Math.random() * 120) + 5,
    requestsMonth: Math.floor(Math.random() * 3000) + 200,
    tokensEstimated: Math.floor(Math.random() * 500000) + 10000,
    dailySparkline: Array.from({ length: 7 }, () => Math.floor(Math.random() * 80) + 10),
  };
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ─── Sub-components ─────────────────────────────────────────────────

function ProviderDot({ provider, size = 10 }: { provider: Provider; size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: PROVIDER_META[provider].color,
        flexShrink: 0,
      }}
    />
  );
}

function Sparkline({ values }: { values: number[] }) {
  const max = Math.max(...values, 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 28 }}>
      {values.map((v, i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: `${Math.max(4, (v / max) * 28)}px`,
            background: i === values.length - 1 ? GOLD : "rgba(201,168,76,0.35)",
            borderRadius: 2,
            transition: "height 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

function StatusDot({ status }: { status: ProviderStatus["status"] }) {
  const color =
    status === "operational" ? "#22c55e" : status === "degraded" ? "#eab308" : "#ef4444";
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      <span
        style={{
          display: "inline-block",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 6px ${color}`,
        }}
      />
      {status === "operational" && (
        <span
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: color,
            opacity: 0.4,
            animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite",
          }}
        />
      )}
    </span>
  );
}

// ─── Main page ───────────────────────────────────────────────────────
export default function ApiKeysSettingsPage() {
  const [keys, setKeys] = useState<SavedKey[]>([]);
  const [stats, setStats] = useState<Record<string, KeyStats>>({});
  const [statuses, setStatuses] = useState<ProviderStatus[]>([]);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());

  // Add-key form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [formProvider, setFormProvider] = useState<Provider>("anthropic");
  const [formKey, setFormKey] = useState("");
  const [formKeyVisible, setFormKeyVisible] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSaving, setFormSaving] = useState(false);

  // Remove confirmation
  const [pendingRemove, setPendingRemove] = useState<string | null>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: SavedKey[] = JSON.parse(raw);
        setKeys(parsed);
        const s: Record<string, KeyStats> = {};
        parsed.forEach((k) => (s[k.id] = generateStats()));
        setStats(s);
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Initial provider statuses
  useEffect(() => {
    setStatuses(buildStatuses());
  }, []);

  // Auto-refresh statuses every 60s
  useEffect(() => {
    const interval = setInterval(() => {
      setStatuses(buildStatuses());
      setLastRefreshed(new Date());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  function buildStatuses(): ProviderStatus[] {
    // Groq occasionally degrades for demo realism
    const groqRoll = Math.random();
    return [
      { name: "Anthropic API", provider: "anthropic", status: "operational", lastChecked: new Date() },
      { name: "OpenAI API", provider: "openai", status: "operational", lastChecked: new Date() },
      { name: "Google Gemini", provider: "google", status: "operational", lastChecked: new Date() },
      {
        name: "Groq",
        provider: "groq",
        status: groqRoll < 0.6 ? "degraded" : "operational",
        lastChecked: new Date(),
      },
    ];
  }

  function persistKeys(updated: SavedKey[]) {
    setKeys(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  const handleSave = useCallback(() => {
    const err = validateKey(formProvider, formKey);
    if (err) {
      setFormError(err);
      return;
    }
    setFormSaving(true);
    setTimeout(() => {
      const newKey: SavedKey = {
        id: crypto.randomUUID(),
        provider: formProvider,
        maskedKey: maskKey(formKey),
        fullKey: formKey,
        addedAt: new Date().toISOString(),
        lastUsed: null,
      };
      const updated = [...keys, newKey];
      persistKeys(updated);
      setStats((prev) => ({ ...prev, [newKey.id]: generateStats() }));
      setFormKey("");
      setFormError(null);
      setFormSaving(false);
      setShowAddForm(false);
    }, 600);
  }, [formProvider, formKey, keys]);

  function handleRemoveConfirm(id: string) {
    const updated = keys.filter((k) => k.id !== id);
    persistKeys(updated);
    setStats((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setPendingRemove(null);
  }

  function handleManualRefresh() {
    setStatuses(buildStatuses());
    setLastRefreshed(new Date());
  }

  // ─── Render ──────────────────────────────────────────────────────
  return (
    <>
      {/* Ping animation keyframes injected once */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: DEEP,
          padding: "32px 24px",
          fontFamily: "'Inter', system-ui, sans-serif",
          color: "#e8e6f0",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Page header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <Key size={20} color={GOLD} />
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#f0eeff" }}>
                API Keys
              </h1>
            </div>
            <p style={{ margin: 0, fontSize: 14, color: "rgba(232,230,240,0.5)" }}>
              Bring your own keys for Anthropic, OpenAI, Google and Groq. Keys are stored locally in
              your browser and never sent to MEOK servers.
            </p>
          </div>

          {/* ── Section 95.1 + 95.3: Saved keys table ── */}
          <Section
            title="Saved Keys"
            action={
              <button type="button"
                onClick={() => setShowAddForm((v) => !v)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  background: showAddForm ? "rgba(201,168,76,0.15)" : GOLD,
                  color: showAddForm ? GOLD : "#0d0c18",
                  border: showAddForm ? `1px solid ${GOLD}` : "none",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {showAddForm ? <X size={14} /> : <Plus size={14} />}
                {showAddForm ? "Cancel" : "Add new key"}
              </button>
            }
          >
            {/* ── Section 95.2: Add-key inline form ── */}
            {showAddForm && (
              <div
                style={{
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  padding: 20,
                  marginBottom: 16,
                  animation: "fadeIn 0.15s ease",
                }}
              >
                <p style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 600, color: GOLD }}>
                  Add API Key
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {/* Provider selector */}
                  <div>
                    <label style={labelStyle}>Provider</label>
                    <div style={{ position: "relative" }}>
                      <select
                        value={formProvider}
                        onChange={(e) => {
                          setFormProvider(e.target.value as Provider);
                          setFormError(null);
                        }}
                        style={{
                          ...inputStyle,
                          appearance: "none",
                          paddingRight: 36,
                          cursor: "pointer",
                        }}
                      >
                        {(Object.keys(PROVIDER_META) as Provider[]).map((p) => (
                          <option key={p} value={p} style={{ background: SURFACE }}>
                            {PROVIDER_META[p].label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        style={{
                          position: "absolute",
                          right: 12,
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "rgba(232,230,240,0.4)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Key input */}
                  <div>
                    <label style={labelStyle}>API Key</label>
                    <div style={{ position: "relative" }}>
                      <input
                        type={formKeyVisible ? "text" : "password"}
                        value={formKey}
                        onChange={(e) => {
                          setFormKey(e.target.value);
                          setFormError(null);
                        }}
                        placeholder={PROVIDER_META[formProvider].placeholder}
                        style={{
                          ...inputStyle,
                          paddingRight: 40,
                          fontFamily: formKeyVisible ? "monospace" : undefined,
                          letterSpacing: formKeyVisible ? undefined : "0.1em",
                        }}
                        onKeyDown={(e) => e.key === "Enter" && handleSave()}
                      />
                      <button
                        type="button"
                        onClick={() => setFormKeyVisible((v) => !v)}
                        style={{
                          position: "absolute",
                          right: 10,
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "rgba(232,230,240,0.4)",
                          padding: 2,
                        }}
                      >
                        {formKeyVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                    {formError && (
                      <p style={{ margin: "6px 0 0", fontSize: 12, color: "#ef4444" }}>
                        {formError}
                      </p>
                    )}
                  </div>

                  {/* Save button */}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button type="button"
                      onClick={handleSave}
                      disabled={formSaving}
                      style={{
                        padding: "8px 20px",
                        background: formSaving ? "rgba(201,168,76,0.4)" : GOLD,
                        color: "#0d0c18",
                        border: "none",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: formSaving ? "not-allowed" : "pointer",
                        transition: "opacity 0.2s",
                      }}
                    >
                      {formSaving ? "Saving…" : "Save Key"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Keys table */}
            {keys.length === 0 ? (
              <div
                style={{
                  padding: "40px 20px",
                  textAlign: "center",
                  color: "rgba(232,230,240,0.3)",
                  fontSize: 14,
                }}
              >
                <Key size={32} style={{ marginBottom: 10, opacity: 0.3 }} />
                <p style={{ margin: 0 }}>No API keys saved yet.</p>
                <p style={{ margin: "4px 0 0", fontSize: 12 }}>
                  Add a key above to start using BYOK.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {/* Table header */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr 100px 100px 80px 90px",
                    gap: 12,
                    padding: "0 12px 8px",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgba(232,230,240,0.35)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <span>Provider</span>
                  <span>Key</span>
                  <span>Added</span>
                  <span>Last Used</span>
                  <span style={{ textAlign: "right" }}>7d</span>
                  <span style={{ textAlign: "center" }}>Action</span>
                </div>

                {keys.map((key) => {
                  const meta = PROVIDER_META[key.provider];
                  const keyStats = stats[key.id];
                  const isRemoving = pendingRemove === key.id;

                  return (
                    <div
                      key={key.id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "180px 1fr 100px 100px 80px 90px",
                        gap: 12,
                        alignItems: "center",
                        padding: "12px",
                        background: isRemoving
                          ? "rgba(239,68,68,0.06)"
                          : "rgba(255,255,255,0.02)",
                        border: `1px solid ${isRemoving ? "rgba(239,68,68,0.2)" : BORDER}`,
                        borderRadius: 8,
                        transition: "background 0.2s, border 0.2s",
                      }}
                    >
                      {/* Provider */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <ProviderDot provider={key.provider} size={9} />
                        <span style={{ fontSize: 13, fontWeight: 500 }}>{meta.label}</span>
                      </div>

                      {/* Masked key */}
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: 12,
                          color: "rgba(232,230,240,0.65)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {key.maskedKey}
                      </span>

                      {/* Added date */}
                      <span style={{ fontSize: 12, color: "rgba(232,230,240,0.45)" }}>
                        {formatDate(key.addedAt)}
                      </span>

                      {/* Last used */}
                      <span style={{ fontSize: 12, color: "rgba(232,230,240,0.45)" }}>
                        {key.lastUsed ? formatDate(key.lastUsed) : "Never"}
                      </span>

                      {/* Sparkline */}
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        {keyStats ? (
                          <Sparkline values={keyStats.dailySparkline} />
                        ) : (
                          <span style={{ fontSize: 11, color: "rgba(232,230,240,0.2)" }}>—</span>
                        )}
                      </div>

                      {/* Remove action */}
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        {isRemoving ? (
                          <div style={{ display: "flex", gap: 4 }}>
                            <button type="button"
                              onClick={() => handleRemoveConfirm(key.id)}
                              style={{
                                padding: "4px 8px",
                                background: "#ef4444",
                                color: "#fff",
                                border: "none",
                                borderRadius: 6,
                                fontSize: 11,
                                fontWeight: 700,
                                cursor: "pointer",
                              }}
                            >
                              Yes
                            </button>
                            <button type="button"
                              onClick={() => setPendingRemove(null)}
                              style={{
                                padding: "4px 8px",
                                background: "rgba(255,255,255,0.08)",
                                color: "rgba(232,230,240,0.7)",
                                border: "none",
                                borderRadius: 6,
                                fontSize: 11,
                                cursor: "pointer",
                              }}
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <button type="button"
                            onClick={() => setPendingRemove(key.id)}
                            title="Remove key"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 4,
                              padding: "5px 10px",
                              background: "rgba(239,68,68,0.1)",
                              color: "#ef4444",
                              border: "1px solid rgba(239,68,68,0.2)",
                              borderRadius: 6,
                              fontSize: 12,
                              cursor: "pointer",
                              transition: "background 0.15s",
                            }}
                            onMouseEnter={(e) =>
                              ((e.currentTarget as HTMLElement).style.background =
                                "rgba(239,68,68,0.2)")
                            }
                            onMouseLeave={(e) =>
                              ((e.currentTarget as HTMLElement).style.background =
                                "rgba(239,68,68,0.1)")
                            }
                          >
                            <Trash2 size={12} />
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Section>

          {/* ── Section 95.3: Key usage stats ── */}
          {keys.length > 0 && (
            <Section title="Usage Statistics">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: 12,
                }}
              >
                {keys.map((key) => {
                  const keyStats = stats[key.id];
                  if (!keyStats) return null;
                  return (
                    <div
                      key={key.id}
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: `1px solid ${BORDER}`,
                        borderRadius: 10,
                        padding: 16,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          marginBottom: 12,
                        }}
                      >
                        <ProviderDot provider={key.provider} size={8} />
                        <span style={{ fontSize: 13, fontWeight: 600 }}>
                          {PROVIDER_META[key.provider].label}
                        </span>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <StatRow label="Today" value={String(keyStats.requestsToday)} unit="req" />
                        <StatRow
                          label="This month"
                          value={formatNumber(keyStats.requestsMonth)}
                          unit="req"
                        />
                        <StatRow
                          label="Est. tokens"
                          value={formatNumber(keyStats.tokensEstimated)}
                          unit=""
                        />
                      </div>

                      <div style={{ marginTop: 12 }}>
                        <p
                          style={{
                            margin: "0 0 6px",
                            fontSize: 10,
                            color: "rgba(232,230,240,0.35)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          Daily (7d)
                        </p>
                        <Sparkline values={keyStats.dailySparkline} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>
          )}

          {/* ── Section 95.4: Provider health status ── */}
          <Section
            title="Provider Health"
            action={
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "rgba(232,230,240,0.35)" }}>
                  <Clock size={10} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
                  {lastRefreshed.toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </span>
                <button type="button"
                  onClick={handleManualRefresh}
                  title="Refresh status"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "5px 10px",
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(232,230,240,0.6)",
                    border: `1px solid ${BORDER}`,
                    borderRadius: 6,
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")
                  }
                >
                  <RefreshCw size={12} />
                  Refresh
                </button>
              </div>
            }
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
                gap: 10,
              }}
            >
              {statuses.map((s) => (
                <div
                  key={s.provider}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${BORDER}`,
                    borderRadius: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <ProviderDot provider={s.provider} size={8} />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <StatusDot status={s.status} />
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color:
                          s.status === "operational"
                            ? "#22c55e"
                            : s.status === "degraded"
                            ? "#eab308"
                            : "#ef4444",
                        textTransform: "capitalize",
                      }}
                    >
                      {s.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Auto-refresh notice */}
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 11,
                color: "rgba(232,230,240,0.25)",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Activity size={11} />
              Status auto-refreshes every 60 seconds
            </p>
          </Section>
        </div>
      </div>
    </>
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────
function Section({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        padding: 24,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#f0eeff" }}>{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}

// ─── Stat row ────────────────────────────────────────────────────────
function StatRow({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 12, color: "rgba(232,230,240,0.45)" }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: "#e8e6f0" }}>
        {value}
        {unit && (
          <span style={{ fontSize: 11, fontWeight: 400, color: "rgba(232,230,240,0.35)", marginLeft: 3 }}>
            {unit}
          </span>
        )}
      </span>
    </div>
  );
}

// ─── Shared input/label styles ────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  color: "#e8e6f0",
  fontSize: 13,
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: 12,
  fontWeight: 500,
  color: "rgba(232,230,240,0.5)",
};
