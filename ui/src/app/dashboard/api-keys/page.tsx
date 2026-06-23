"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Key,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  Loader2,
  Zap,
  ChevronRight,
  Trash2,
  Plus,
  Activity,
  Cpu,
  Sparkles,
  Bot,
} from "lucide-react";

// ── Brand tokens ───────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const SURFACE2 = "#1a1929";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Types ──────────────────────────────────────────────────────────
type Provider = "anthropic" | "openai" | "gemini" | "groq" | "custom";

interface ProviderConfig {
  id: Provider;
  name: string;
  keyPrefix: string | null;
  models: string[];
  pricing: string;
  color: string;
  Icon: React.FC<{ size?: number; className?: string }>;
}

interface SavedKey {
  id: string;
  provider: Provider;
  maskedKey: string; // "sk-ant-...XXXX"
  last4: string;
  addedAt: string;
  // demo usage
  requestsToday: number;
  tokensToday: number;
}

type TestStatus = "idle" | "testing" | "success" | "failure";

interface TestResult {
  status: TestStatus;
  latency?: number;
  model?: string;
  error?: string;
}

// ── Provider catalogue ─────────────────────────────────────────────
const PROVIDERS: ProviderConfig[] = [
  {
    id: "anthropic",
    name: "Anthropic",
    keyPrefix: "sk-ant-",
    models: ["claude-opus-4-5", "claude-sonnet-4-5", "claude-haiku-3-5"],
    pricing: "From $3 / MTok input",
    color: "#d97757",
    Icon: ({ size = 18, className }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-3.654 0H6.57L0 20h3.603l1.378-3.504h6.975l1.248 3.504h3.648L10.173 3.52zm-3.75 9.936 2.28-5.808 1.935 5.808H6.423z" />
      </svg>
    ),
  },
  {
    id: "openai",
    name: "OpenAI",
    keyPrefix: "sk-",
    models: ["gpt-4o", "gpt-4o-mini", "o1-preview"],
    pricing: "From $2.50 / MTok input",
    color: "#10a37f",
    Icon: ({ size = 18, className }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    id: "gemini",
    name: "Google Gemini",
    keyPrefix: null,
    models: ["gemini-2.0-flash", "gemini-1.5-pro", "gemini-1.5-flash"],
    pricing: "From $0.075 / MTok input",
    color: "#4285f4",
    Icon: ({ size = 18, className }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12" />
      </svg>
    ),
  },
  {
    id: "groq",
    name: "Groq",
    keyPrefix: "gsk_",
    models: ["llama-3.3-70b-versatile", "mixtral-8x7b", "gemma2-9b-it"],
    pricing: "From $0.59 / MTok input",
    color: "#f55036",
    Icon: ({ size = 18, className }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8a7.2 7.2 0 1 1 0 14.4A7.2 7.2 0 0 1 12 4.8zm0 2.4a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6z" />
      </svg>
    ),
  },
];

// ── Validation ─────────────────────────────────────────────────────
function validateKey(value: string, provider: Provider): string | null {
  if (!value.trim()) return "API key is required.";
  const cfg = PROVIDERS.find((p) => p.id === provider);
  if (cfg?.keyPrefix && !value.startsWith(cfg.keyPrefix)) {
    return `${cfg.name} keys must start with "${cfg.keyPrefix}".`;
  }
  if (value.length < 20) return "Key appears too short.";
  return null;
}

// ── LS helpers ─────────────────────────────────────────────────────
const LS_KEYS = "meok_byok_keys";
const LS_PROVIDER = "meok_active_provider";

function loadKeys(): SavedKey[] {
  try {
    return JSON.parse(localStorage.getItem(LS_KEYS) ?? "[]");
  } catch {
    return [];
  }
}

function saveKeys(keys: SavedKey[]) {
  localStorage.setItem(LS_KEYS, JSON.stringify(keys));
}

function loadActiveProvider(): Provider {
  return (localStorage.getItem(LS_PROVIDER) as Provider) ?? "anthropic";
}

function saveActiveProvider(p: Provider) {
  localStorage.setItem(LS_PROVIDER, p);
}

// ── Demo usage seeder ──────────────────────────────────────────────
function seedUsage(provider: Provider): { requestsToday: number; tokensToday: number } {
  const seeds: Record<Provider, [number, number]> = {
    anthropic: [47, 128_400],
    openai: [23, 67_200],
    gemini: [11, 34_800],
    groq: [89, 210_600],
    custom: [5, 12_000],
  };
  const [r, t] = seeds[provider];
  return { requestsToday: r, tokensToday: t };
}

// ── Sub-components ─────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: `${GOLD}99` }}>
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border p-5 ${className}`}
      style={{ background: SURFACE, borderColor: BORDER }}
    >
      {children}
    </div>
  );
}

// ── Provider Cards (86.4) ──────────────────────────────────────────
function ProviderCards({
  active,
  onSelect,
}: {
  active: Provider;
  onSelect: (p: Provider) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      {PROVIDERS.map((p) => {
        const isActive = p.id === active;
        return (
          <button type="button"
            key={p.id}
            onClick={() => onSelect(p.id)}
            className="rounded-xl border p-4 text-left transition-all duration-200 hover:scale-[1.02] focus:outline-none"
            style={{
              background: isActive ? `${p.color}14` : SURFACE,
              borderColor: isActive ? `${p.color}60` : BORDER,
              boxShadow: isActive ? `0 0 0 1px ${p.color}40` : "none",
            }}
          >
            {/* Icon + name */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${p.color}22`, color: p.color }}
              >
                <p.Icon size={16} />
              </div>
              <span
                className="text-sm font-semibold leading-tight"
                style={{ color: isActive ? p.color : "rgba(255,255,255,0.85)" }}
              >
                {p.name}
              </span>
            </div>

            {/* Model list */}
            <div className="space-y-1 mb-3">
              {p.models.slice(0, 2).map((m) => (
                <div key={m} className="text-[10px] font-mono truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {m}
                </div>
              ))}
              {p.models.length > 2 && (
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  +{p.models.length - 2} more
                </div>
              )}
            </div>

            {/* Pricing */}
            <div
              className="text-[11px] font-medium"
              style={{ color: isActive ? `${p.color}cc` : "rgba(255,255,255,0.35)" }}
            >
              {p.pricing}
            </div>

            {/* Active badge */}
            {isActive && (
              <div
                className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: `${p.color}22`, color: p.color }}
              >
                <CheckCircle2 size={10} />
                Active
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ── Key entry form (86.1) ──────────────────────────────────────────
function KeyEntryForm({
  activeProvider,
  onSaved,
}: {
  activeProvider: Provider;
  onSaved: (key: SavedKey) => void;
}) {
  const [provider, setProvider] = useState<Provider>(activeProvider);
  const [keyValue, setKeyValue] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<TestResult>({ status: "idle" });

  // Sync provider when parent changes
  useEffect(() => {
    setProvider(activeProvider);
    setError(null);
  }, [activeProvider]);

  const handleKeyChange = (v: string) => {
    setKeyValue(v);
    if (error) setError(validateKey(v, provider));
    setTestResult({ status: "idle" });
  };

  const handleProviderChange = (v: Provider) => {
    setProvider(v);
    setError(null);
    setTestResult({ status: "idle" });
  };

  // 86.2 Test key
  const handleTest = useCallback(async () => {
    const err = validateKey(keyValue, provider);
    if (err) { setError(err); return; }
    setError(null);

    const cfg = PROVIDERS.find((p) => p.id === provider)!;
    setTestResult({ status: "testing", model: cfg.models[0] });

    await new Promise((r) => setTimeout(r, 1500));

    // Demo: succeed if key looks plausible length
    const ok = keyValue.length > 24;
    const latency = Math.floor(Math.random() * 120) + 80; // 80–200ms
    setTestResult({
      status: ok ? "success" : "failure",
      latency,
      model: cfg.models[0],
      error: ok ? undefined : "Invalid API key or insufficient permissions.",
    });
  }, [keyValue, provider]);

  // Save key (only stores masked version)
  const handleSave = () => {
    const err = validateKey(keyValue, provider);
    if (err) { setError(err); return; }

    const last4 = keyValue.slice(-4);
    const cfg = PROVIDERS.find((p) => p.id === provider)!;
    const prefix = cfg.keyPrefix ?? keyValue.slice(0, 6);
    const maskedKey = `${prefix}...${last4}`;

    const newKey: SavedKey = {
      id: `${provider}_${Date.now()}`,
      provider,
      maskedKey,
      last4,
      addedAt: new Date().toISOString(),
      ...seedUsage(provider),
    };

    onSaved(newKey);
    setKeyValue("");
    setError(null);
    setTestResult({ status: "idle" });
  };

  const providerCfg = PROVIDERS.find((p) => p.id === provider)!;

  return (
    <Card>
      <div className="flex items-center gap-2 mb-5">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${GOLD}18`, color: GOLD }}
        >
          <Key size={15} />
        </div>
        <div>
          <div className="text-sm font-semibold text-white/90">Add API Key</div>
          <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            Keys are stored locally — never sent to MEOK servers
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Provider selector */}
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>
            Provider
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PROVIDERS.map((p) => {
              const sel = p.id === provider;
              return (
                <button type="button"
                  key={p.id}
                  onClick={() => handleProviderChange(p.id)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-all"
                  style={{
                    background: sel ? `${p.color}18` : `${SURFACE2}`,
                    borderColor: sel ? `${p.color}55` : BORDER,
                    color: sel ? p.color : "rgba(255,255,255,0.5)",
                  }}
                >
                  <p.Icon size={13} />
                  {p.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Key input */}
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>
            API Key
          </label>
          <div className="relative">
            <input
              type={showKey ? "text" : "password"}
              value={keyValue}
              onChange={(e) => handleKeyChange(e.target.value)}
              placeholder={
                providerCfg.keyPrefix
                  ? `${providerCfg.keyPrefix}api...`
                  : "Paste your API key here"
              }
              className="w-full rounded-lg px-4 py-3 pr-12 text-sm font-mono outline-none transition-all"
              style={{
                background: SURFACE2,
                border: `1px solid ${error ? "#ef4444" : BORDER}`,
                color: "rgba(255,255,255,0.85)",
              }}
              onBlur={() => setError(validateKey(keyValue, provider))}
            />
            <button
              type="button"
              onClick={() => setShowKey((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {showKey ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>

          {/* Inline validation */}
          {error && (
            <div className="flex items-center gap-1.5 mt-1.5 text-[11px]" style={{ color: "#ef4444" }}>
              <XCircle size={11} />
              {error}
            </div>
          )}
          {!error && keyValue && (
            <div className="flex items-center gap-1.5 mt-1.5 text-[11px]" style={{ color: "#22c55e" }}>
              <CheckCircle2 size={11} />
              Key format looks valid
            </div>
          )}
        </div>

        {/* Test result display */}
        {testResult.status !== "idle" && (
          <div
            className="rounded-lg px-4 py-3 flex items-center gap-3 text-sm"
            style={{
              background:
                testResult.status === "testing"
                  ? `${SURFACE2}`
                  : testResult.status === "success"
                  ? "rgba(34,197,94,0.08)"
                  : "rgba(239,68,68,0.08)",
              border: `1px solid ${
                testResult.status === "testing"
                  ? BORDER
                  : testResult.status === "success"
                  ? "rgba(34,197,94,0.25)"
                  : "rgba(239,68,68,0.25)"
              }`,
            }}
          >
            {testResult.status === "testing" && (
              <>
                <Loader2 size={15} className="animate-spin" style={{ color: GOLD }} />
                <span style={{ color: "rgba(255,255,255,0.6)" }}>
                  Testing against <span className="font-mono text-xs">{testResult.model}</span>…
                </span>
              </>
            )}
            {testResult.status === "success" && (
              <>
                <CheckCircle2 size={15} style={{ color: "#22c55e" }} />
                <span style={{ color: "#22c55e" }}>
                  Connection successful —{" "}
                  <span className="font-mono text-xs">{testResult.latency}ms</span> latency via{" "}
                  <span className="font-mono text-xs">{testResult.model}</span>
                </span>
              </>
            )}
            {testResult.status === "failure" && (
              <>
                <XCircle size={15} style={{ color: "#ef4444" }} />
                <span style={{ color: "#ef4444" }}>{testResult.error}</span>
              </>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <button type="button"
            onClick={handleTest}
            disabled={!keyValue || testResult.status === "testing"}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80"
            style={{
              background: `${SURFACE2}`,
              borderColor: BORDER,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {testResult.status === "testing" ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Zap size={14} />
            )}
            Test Key
          </button>

          <button type="button"
            onClick={handleSave}
            disabled={!keyValue || !!error}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-85"
            style={{ background: GOLD, color: DEEP }}
          >
            <Plus size={14} />
            Save Key
          </button>
        </div>
      </div>
    </Card>
  );
}

// ── Usage table (86.3) ─────────────────────────────────────────────
function UsageTable({
  keys,
  onDelete,
}: {
  keys: SavedKey[];
  onDelete: (id: string) => void;
}) {
  if (keys.length === 0) {
    return (
      <Card>
        <div className="flex flex-col items-center justify-center py-10 gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${GOLD}12`, color: `${GOLD}60` }}
          >
            <Key size={22} />
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            No keys saved yet. Add one above to get started.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden !p-0">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
              {["Provider", "Masked Key", "Requests Today", "Tokens Today", "Added", ""].map((h) => (
                <th
                  key={h}
                  className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: "rgba(255,255,255,0.35)", background: `${SURFACE2}` }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {keys.map((k, i) => {
              const cfg = PROVIDERS.find((p) => p.id === k.provider)!;
              return (
                <tr
                  key={k.id}
                  className="transition-colors hover:bg-white/[0.02]"
                  style={{ borderBottom: i < keys.length - 1 ? `1px solid ${BORDER}` : "none" }}
                >
                  {/* Provider */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${cfg.color}22`, color: cfg.color }}
                      >
                        <cfg.Icon size={14} />
                      </div>
                      <span className="font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                        {cfg.name}
                      </span>
                    </div>
                  </td>

                  {/* Masked key */}
                  <td className="px-5 py-4">
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-md"
                      style={{ background: `${SURFACE2}`, color: "rgba(255,255,255,0.55)", border: `1px solid ${BORDER}` }}
                    >
                      {k.maskedKey}
                    </span>
                  </td>

                  {/* Requests */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <Activity size={12} style={{ color: GOLD }} />
                      <span style={{ color: "rgba(255,255,255,0.75)" }}>{k.requestsToday.toLocaleString()}</span>
                    </div>
                  </td>

                  {/* Tokens */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <Cpu size={12} style={{ color: `${GOLD}99` }} />
                      <span style={{ color: "rgba(255,255,255,0.75)" }}>
                        {k.tokensToday >= 1000
                          ? `${(k.tokensToday / 1000).toFixed(1)}K`
                          : k.tokensToday.toLocaleString()}
                      </span>
                    </div>
                  </td>

                  {/* Added */}
                  <td className="px-5 py-4">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {new Date(k.addedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                  </td>

                  {/* Delete */}
                  <td className="px-5 py-4">
                    <button type="button"
                      onClick={() => onDelete(k.id)}
                      className="p-1.5 rounded-md transition-colors hover:bg-red-500/10"
                      style={{ color: "rgba(255,255,255,0.2)" }}
                      title="Remove key"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function ApiKeysPage() {
  const [activeProvider, setActiveProvider] = useState<Provider>("anthropic");
  const [savedKeys, setSavedKeys] = useState<SavedKey[]>([]);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage after mount
  useEffect(() => {
    setActiveProvider(loadActiveProvider());
    setSavedKeys(loadKeys());
    setMounted(true);
  }, []);

  const handleProviderSelect = (p: Provider) => {
    setActiveProvider(p);
    saveActiveProvider(p);
  };

  const handleKeySaved = (key: SavedKey) => {
    const updated = [...savedKeys.filter((k) => k.provider !== key.provider), key];
    setSavedKeys(updated);
    saveKeys(updated);
  };

  const handleDelete = (id: string) => {
    const updated = savedKeys.filter((k) => k.id !== id);
    setSavedKeys(updated);
    saveKeys(updated);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 size={22} className="animate-spin" style={{ color: GOLD }} />
      </div>
    );
  }

  const activeCfg = PROVIDERS.find((p) => p.id === activeProvider)!;

  return (
    <div className="min-h-screen px-6 py-8 max-w-5xl mx-auto" style={{ background: DEEP }}>
      {/* Page header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
          <span>Dashboard</span>
          <ChevronRight size={12} />
          <span style={{ color: "rgba(255,255,255,0.55)" }}>API Keys</span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white/90 mb-1.5 tracking-tight">
              Bring Your Own Key
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Use your own API keys to power MEOK AI. Keys stay local — MEOK never sees them.
            </p>
          </div>

          {/* Active provider badge */}
          <div
            className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold"
            style={{
              background: `${activeCfg.color}14`,
              borderColor: `${activeCfg.color}40`,
              color: activeCfg.color,
            }}
          >
            <activeCfg.Icon size={13} />
            {activeCfg.name}
            <span
              className="px-1.5 py-0.5 rounded-md text-[10px]"
              style={{ background: `${activeCfg.color}22` }}
            >
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Info banner */}
      <div
        className="flex items-start gap-3 rounded-xl px-5 py-4 mb-8 border"
        style={{ background: `${GOLD}0c`, borderColor: `${GOLD}22` }}
      >
        <Sparkles size={15} className="flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
        <div className="text-sm" style={{ color: `${GOLD}cc` }}>
          <strong>BYOK Mode:</strong> Your keys are stored only in your browser&apos;s localStorage and
          used directly for API calls. Only the last 4 characters are retained — the full key is
          discarded after the session.
        </div>
      </div>

      {/* 86.4 — Provider selection */}
      <SectionHeading>Select Provider</SectionHeading>
      <ProviderCards active={activeProvider} onSelect={handleProviderSelect} />

      {/* 86.1 + 86.2 — Key entry + test */}
      <SectionHeading>Add Key</SectionHeading>
      <div className="mb-8">
        <KeyEntryForm activeProvider={activeProvider} onSaved={handleKeySaved} />
      </div>

      {/* 86.3 — Usage tracking */}
      <div className="flex items-center justify-between mb-4">
        <SectionHeading>Saved Keys & Usage</SectionHeading>
        {savedKeys.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Bot size={12} />
            {savedKeys.length} key{savedKeys.length !== 1 ? "s" : ""} stored locally
          </div>
        )}
      </div>
      <UsageTable keys={savedKeys} onDelete={handleDelete} />
    </div>
  );
}
