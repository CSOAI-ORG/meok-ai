"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Network,
  CheckCircle2,
  Circle,
  ChevronDown,
  Zap,
  Star,
  DollarSign,
  ToggleLeft,
  ToggleRight,
  Send,
  Loader2,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { Surface, GlowText, IconOrb } from "@/components/design-system";

// ── Brand tokens ────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ── Types ────────────────────────────────────────────────────────────────────

interface Provider {
  id: string;
  name: string;
  label: string;
  color: string;
  glowColor: string;
  models: ModelOption[];
  icon: string; // emoji / text icon
}

interface ModelOption {
  id: string;
  label: string;
  speed: number;   // 0–100
  quality: number; // 0–100
  cost: number;    // 0–100 (higher = more expensive)
}

interface RouterConfig {
  activeProvider: string;
  selectedModels: Record<string, string>; // providerId → modelId
  rules: {
    fastestForChat: boolean;
    bestForTasks: boolean;
    cheapestForResearch: boolean;
    manualOverride: string; // "auto" | providerId
  };
}

// ── Provider + model catalogue ───────────────────────────────────────────────

const PROVIDERS: Provider[] = [
  {
    id: "anthropic",
    name: "Anthropic",
    label: "Claude",
    color: "#a855f7",
    glowColor: "rgba(168,85,247,0.15)",
    icon: "◈",
    models: [
      { id: "claude-3-5-sonnet-20241022", label: "Claude 3.5 Sonnet", speed: 72, quality: 95, cost: 62 },
      { id: "claude-3-5-haiku-20241022",  label: "Claude 3.5 Haiku",  speed: 90, quality: 80, cost: 18 },
      { id: "claude-3-opus-20240229",     label: "Claude 3 Opus",     speed: 45, quality: 98, cost: 90 },
    ],
  },
  {
    id: "openai",
    name: "OpenAI",
    label: "GPT-4o",
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.15)",
    icon: "◎",
    models: [
      { id: "gpt-4o",          label: "GPT-4o",       speed: 75, quality: 93, cost: 58 },
      { id: "gpt-4o-mini",     label: "GPT-4o mini",  speed: 95, quality: 78, cost: 12 },
      { id: "o1-preview",      label: "o1-preview",   speed: 30, quality: 99, cost: 95 },
    ],
  },
  {
    id: "google",
    name: "Google",
    label: "Gemini",
    color: "#3b82f6",
    glowColor: "rgba(59,130,246,0.15)",
    icon: "◇",
    models: [
      { id: "gemini-1.5-pro",   label: "Gemini 1.5 Pro",   speed: 68, quality: 90, cost: 45 },
      { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash",  speed: 92, quality: 75, cost: 8  },
      { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash",  speed: 94, quality: 82, cost: 10 },
    ],
  },
  {
    id: "mistral",
    name: "Mistral",
    label: "Mistral",
    color: "#f97316",
    glowColor: "rgba(249,115,22,0.15)",
    icon: "⊕",
    models: [
      { id: "mistral-large-latest",  label: "Mistral Large",  speed: 70, quality: 88, cost: 40 },
      { id: "mistral-small-latest",  label: "Mistral Small",  speed: 85, quality: 72, cost: 14 },
      { id: "codestral-latest",      label: "Codestral",      speed: 80, quality: 84, cost: 20 },
    ],
  },
  {
    id: "meta",
    name: "Meta",
    label: "Llama",
    color: "#60a5fa",
    glowColor: "rgba(96,165,250,0.15)",
    icon: "⬡",
    models: [
      { id: "llama-3.1-70b-versatile", label: "Llama 3.1 70B", speed: 88, quality: 82, cost: 5  },
      { id: "llama-3.1-8b-instant",    label: "Llama 3.1 8B",  speed: 98, quality: 65, cost: 1  },
      { id: "llama-3.2-90b-vision-preview", label: "Llama 3.2 90B Vision", speed: 60, quality: 85, cost: 10 },
    ],
  },
  {
    id: "groq",
    name: "Groq",
    label: "Fast inference",
    color: "#eab308",
    glowColor: "rgba(234,179,8,0.15)",
    icon: "⚡",
    models: [
      { id: "llama-3.1-70b-versatile", label: "Llama 3.1 70B (Groq)", speed: 99, quality: 82, cost: 4  },
      { id: "mixtral-8x7b-32768",      label: "Mixtral 8x7B",          speed: 97, quality: 77, cost: 3  },
      { id: "gemma2-9b-it",            label: "Gemma2 9B",              speed: 99, quality: 68, cost: 1  },
    ],
  },
];

const DEFAULT_CONFIG: RouterConfig = {
  activeProvider: "",
  selectedModels: Object.fromEntries(PROVIDERS.map((p) => [p.id, p.models[0].id])),
  rules: {
    fastestForChat: false,
    bestForTasks: false,
    cheapestForResearch: false,
    manualOverride: "auto",
  },
};

const LS_CONFIG_KEY   = "meok_llm_router_config";
const LS_PROVIDER_KEY = "meok_active_provider";

// ── Helpers ──────────────────────────────────────────────────────────────────

function loadConfig(): RouterConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(LS_CONFIG_KEY);
    if (!raw) return DEFAULT_CONFIG;
    return { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_CONFIG;
  }
}

function saveConfig(cfg: RouterConfig) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_CONFIG_KEY, JSON.stringify(cfg));
  if (cfg.activeProvider) {
    localStorage.setItem(LS_PROVIDER_KEY, cfg.activeProvider);
  }
}

// ── Sub-components ───────────────────────────────────────────────────────────

function TradeoffBar({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1" style={{ color }}>
          {icon}
          <span className="text-white/50">{label}</span>
        </span>
        <span className="text-white/30">{value}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}

function ModelDropdown({
  provider,
  selectedModelId,
  onSelect,
}: {
  provider: Provider;
  selectedModelId: string;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = provider.models.find((m) => m.id === selectedModelId) ?? provider.models[0];

  return (
    <div className="relative">
      <button type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs text-white/70 transition-colors hover:text-white"
        style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
      >
        <span className="truncate">{selected.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 ml-2 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: GOLD }}
        />
      </button>
      {open && (
        <div
          className="absolute z-20 w-full mt-1 rounded-lg overflow-hidden shadow-xl"
          style={{ background: "#1a1929", border: `1px solid ${BORDER}` }}
        >
          {provider.models.map((m) => (
            <button type="button"
              key={m.id}
              onClick={() => { onSelect(m.id); setOpen(false); }}
              className="w-full flex items-center justify-between px-3 py-2 text-xs hover:bg-white/[0.06] transition-colors"
              style={{ color: m.id === selectedModelId ? GOLD : "rgba(255,255,255,0.7)" }}
            >
              <span>{m.label}</span>
              {m.id === selectedModelId && <CheckCircle2 className="w-3 h-3" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function RuleToggle({
  label,
  description,
  value,
  onChange,
}: {
  label: string;
  description: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <Surface
      variant="glass"
      className="flex items-start justify-between gap-4 p-4 rounded-xl cursor-pointer transition-colors"
      style={{ background: value ? `${GOLD}0a` : undefined, borderColor: value ? `${GOLD}30` : undefined }}
      onClick={() => onChange(!value)}
      role="checkbox"
      aria-checked={value}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") onChange(!value); }}
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white/80">{label}</p>
        <p className="text-xs text-white/35 mt-0.5 leading-relaxed">{description}</p>
      </div>
      {value ? (
        <ToggleRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
      ) : (
        <ToggleLeft className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/20" />
      )}
    </Surface>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function AnyLlmPage() {
  const [config, setConfig] = useState<RouterConfig>(DEFAULT_CONFIG);
  const [testState, setTestState] = useState<Record<string, { loading: boolean; response?: string; error?: string }>>({});

  // Hydrate from localStorage on mount
  useEffect(() => {
    const saved = loadConfig();
    // Sync activeProvider from meok_active_provider key as well
    const savedActive = localStorage.getItem(LS_PROVIDER_KEY);
    if (savedActive && !saved.activeProvider) {
      saved.activeProvider = savedActive;
    }
    setConfig(saved);
  }, []);

  const updateConfig = useCallback((patch: Partial<RouterConfig>) => {
    setConfig((prev) => {
      const next = { ...prev, ...patch };
      saveConfig(next);
      return next;
    });
  }, []);

  function setActiveProvider(id: string) {
    updateConfig({ activeProvider: id });
  }

  function setModelForProvider(providerId: string, modelId: string) {
    updateConfig({
      selectedModels: { ...config.selectedModels, [providerId]: modelId },
    });
  }

  function setRule(key: keyof RouterConfig["rules"], value: boolean | string) {
    updateConfig({ rules: { ...config.rules, [key]: value } });
  }

  async function testModel(provider: Provider) {
    const modelId = config.selectedModels[provider.id] ?? provider.models[0].id;
    setTestState((prev) => ({
      ...prev,
      [provider.id]: { loading: true },
    }));

    try {
      const res = await fetch("/api/chat/byok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: provider.id,
          model: modelId,
          messages: [{ role: "user", content: "Hello, who are you? Give a one-sentence response." }],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        setTestState((prev) => ({
          ...prev,
          [provider.id]: { loading: false, error: err || `HTTP ${res.status}` },
        }));
        return;
      }

      const data = await res.json();
      const reply =
        data?.choices?.[0]?.message?.content ??
        data?.content?.[0]?.text ??
        data?.text ??
        data?.response ??
        JSON.stringify(data).slice(0, 120);

      setTestState((prev) => ({
        ...prev,
        [provider.id]: { loading: false, response: reply },
      }));
    } catch (e) {
      setTestState((prev) => ({
        ...prev,
        [provider.id]: { loading: false, error: (e as Error).message },
      }));
    }
  }

  function clearTest(providerId: string) {
    setTestState((prev) => {
      const next = { ...prev };
      delete next[providerId];
      return next;
    });
  }

  const activeProviderObj = PROVIDERS.find((p) => p.id === config.activeProvider);

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>

      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-8">
        <IconOrb icon={Network} variant="gold" size="lg" />
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white">
            <GlowText variant="gold" as="span">Any LLM</GlowText>
          </h1>
          <p className="text-sm text-white/40">Route your conversations to any AI model</p>
        </div>
        {activeProviderObj && (
          <Surface
            variant="glass"
            className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ color: activeProviderObj.color, borderColor: `${activeProviderObj.color}40` }}
          >
            <span>{activeProviderObj.icon}</span>
            {activeProviderObj.name} active
          </Surface>
        )}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* ── Left + centre: provider grid ── */}
        <div className="xl:col-span-2 space-y-6">

          {/* Provider selector grid */}
          <Surface variant="elevated" className="p-6">
            <h2 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">
              Providers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROVIDERS.map((provider) => {
                const isActive   = config.activeProvider === provider.id;
                const selectedId = config.selectedModels[provider.id] ?? provider.models[0].id;
                const model      = provider.models.find((m) => m.id === selectedId) ?? provider.models[0];
                const ts         = testState[provider.id];

                return (
                  <Surface
                    key={provider.id}
                    variant="elevated"
                    glow={isActive ? "gold" : "none"}
                    className="rounded-xl p-4 flex flex-col gap-3 transition-all duration-200"
                  >
                    {/* Provider header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-lg font-black w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
                          style={{ background: `${provider.color}20`, color: provider.color }}
                        >
                          {provider.icon}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{provider.name}</p>
                          <p className="text-[10px] text-white/30">{provider.label}</p>
                        </div>
                      </div>
                      <button type="button"
                        onClick={() => setActiveProvider(isActive ? "" : provider.id)}
                        className="flex items-center justify-center w-7 h-7 rounded-full transition-all"
                        style={{
                          background: isActive ? `${provider.color}30` : "rgba(255,255,255,0.05)",
                          border: `1px solid ${isActive ? provider.color + "60" : BORDER}`,
                        }}
                        title={isActive ? "Deactivate" : "Set as active"}
                      >
                        {isActive ? (
                          <CheckCircle2 className="w-4 h-4" style={{ color: provider.color }} />
                        ) : (
                          <Circle className="w-4 h-4 text-white/20" />
                        )}
                      </button>
                    </div>

                    {/* Model selector */}
                    <ModelDropdown
                      provider={provider}
                      selectedModelId={selectedId}
                      onSelect={(id) => setModelForProvider(provider.id, id)}
                    />

                    {/* Speed / Quality / Cost bars */}
                    <div className="space-y-2">
                      <TradeoffBar
                        label="Speed"
                        value={model.speed}
                        icon={<Zap className="w-3 h-3" />}
                        color="#22c55e"
                      />
                      <TradeoffBar
                        label="Quality"
                        value={model.quality}
                        icon={<Star className="w-3 h-3" />}
                        color={GOLD}
                      />
                      <TradeoffBar
                        label="Cost"
                        value={model.cost}
                        icon={<DollarSign className="w-3 h-3" />}
                        color="#ef4444"
                      />
                    </div>

                    {/* Test this model */}
                    <div>
                      {!ts || (!ts.loading && !ts.response && !ts.error) ? (
                        <button type="button"
                          onClick={() => testModel(provider)}
                          className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02]"
                          style={{
                            background: `${provider.color}15`,
                            color: provider.color,
                            border: `1px solid ${provider.color}30`,
                          }}
                        >
                          <Send className="w-3 h-3" />
                          Test this model
                        </button>
                      ) : ts.loading ? (
                        <Surface variant="glass" className="flex items-center justify-center gap-2 py-2 text-xs text-white/40">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Testing…
                        </Surface>
                      ) : (
                        <Surface
                          variant="glass"
                          className="p-2.5 text-xs leading-relaxed"
                          style={{ background: ts.error ? "rgba(239,68,68,0.08)" : `${provider.color}0a`, borderColor: ts.error ? "rgba(239,68,68,0.2)" : provider.color + "20" }}
                        >
                          {ts.error ? (
                            <div className="flex items-start gap-1.5">
                              <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5 text-red-400" />
                              <span className="text-red-400 break-all">{ts.error}</span>
                            </div>
                          ) : (
                            <p style={{ color: provider.color }}>{ts.response}</p>
                          )}
                          <button type="button"
                            onClick={() => clearTest(provider.id)}
                            className="mt-2 flex items-center gap-1 text-[10px] text-white/25 hover:text-white/50 transition-colors"
                          >
                            <RotateCcw className="w-2.5 h-2.5" />
                            Clear
                          </button>
                        </Surface>
                      )}
                    </div>
                  </Surface>
                );
              })}
            </div>
          </Surface>
        </div>

        {/* ── Right column: routing rules ── */}
        <div className="space-y-6">

          {/* Active model summary */}
          <Surface variant="elevated" glow="gold" className="p-5">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Active model</p>
            {activeProviderObj ? (() => {
              const selId = config.selectedModels[activeProviderObj.id] ?? activeProviderObj.models[0].id;
              const selModel = activeProviderObj.models.find((m) => m.id === selId) ?? activeProviderObj.models[0];
              return (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-base w-7 h-7 flex items-center justify-center rounded-md font-black"
                      style={{ background: `${activeProviderObj.color}20`, color: activeProviderObj.color }}
                    >
                      {activeProviderObj.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{activeProviderObj.name}</p>
                      <p className="text-xs text-white/40">{selModel.label}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 mt-3">
                    <TradeoffBar label="Speed"   value={selModel.speed}   icon={<Zap className="w-3 h-3" />}          color="#22c55e" />
                    <TradeoffBar label="Quality" value={selModel.quality} icon={<Star className="w-3 h-3" />}         color={GOLD} />
                    <TradeoffBar label="Cost"    value={selModel.cost}    icon={<DollarSign className="w-3 h-3" />}   color="#ef4444" />
                  </div>
                </div>
              );
            })() : (
              <p className="text-sm text-white/30">No provider selected. Click ○ on any provider card to activate it.</p>
            )}
          </Surface>

          {/* Routing rules */}
          <Surface variant="elevated" glow="gold" className="p-5">
            <h2 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">
              Routing rules
            </h2>
            <div className="space-y-3">
              <RuleToggle
                label="Use fastest for chat"
                description="Route conversational messages to the model with the highest speed score."
                value={config.rules.fastestForChat}
                onChange={(v) => setRule("fastestForChat", v)}
              />
              <RuleToggle
                label="Use best for tasks"
                description="Route complex tasks to the model with the highest quality score."
                value={config.rules.bestForTasks}
                onChange={(v) => setRule("bestForTasks", v)}
              />
              <RuleToggle
                label="Use cheapest for research"
                description="Route long research sessions to the most cost-effective model."
                value={config.rules.cheapestForResearch}
                onChange={(v) => setRule("cheapestForResearch", v)}
              />
            </div>

            {/* Manual override */}
            <div className="mt-4">
              <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">
                Custom routing override
              </label>
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: `1px solid ${BORDER}` }}
              >
                {[{ id: "auto", label: "Auto (use rules above)" }, ...PROVIDERS].map((p, i, arr) => (
                  <button type="button"
                    key={p.id}
                    onClick={() => setRule("manualOverride", p.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-xs transition-colors hover:bg-white/[0.04]"
                    style={{
                      background: config.rules.manualOverride === p.id ? `${GOLD}10` : "transparent",
                      color: config.rules.manualOverride === p.id ? GOLD : "rgba(255,255,255,0.55)",
                      borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <span>{"icon" in p ? `${p.icon} ${p.label ?? p.name}` : p.label}</span>
                    {config.rules.manualOverride === p.id && (
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: GOLD }} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </Surface>

          {/* Config status */}
          <Surface variant="glass" className="p-4 text-xs text-white/30">
            <p className="font-mono mb-1" style={{ color: GOLD }}>meok_llm_router_config</p>
            <p>Stored in localStorage. Synced across sessions.</p>
            <button type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.removeItem(LS_CONFIG_KEY);
                  localStorage.removeItem(LS_PROVIDER_KEY);
                }
                setConfig(DEFAULT_CONFIG);
                setTestState({});
              }}
              className="mt-2 text-white/25 hover:text-white/50 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset to defaults
            </button>
          </Surface>
        </div>
      </div>
    </div>
  );
}
