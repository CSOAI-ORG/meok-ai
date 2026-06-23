"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Scale, ChevronRight, BookOpen, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface AntiSycophancySettings {
  challengeAssumptions: boolean;
  pointOutFlaws: boolean;
  disagreeWhenRight: boolean;
  honestFeedback: boolean;
  remindContradictions: boolean;
}

interface EvaluationResult {
  score: number;
  verdict: "healthy" | "mildly_sycophantic" | "highly_sycophantic";
  reasoning: string;
  suggestions: string[];
}

interface HonestyEntry {
  date: string;
  topic: string;
  aiResponse: string;
}

const DEFAULT_SETTINGS: AntiSycophancySettings = {
  challengeAssumptions: true,
  pointOutFlaws: true,
  disagreeWhenRight: true,
  honestFeedback: true,
  remindContradictions: true,
};

const DEFAULT_JOURNAL: HonestyEntry[] = [
  {
    date: "3 days ago",
    topic: "Business plan expansion",
    aiResponse: "The market timing assumption is optimistic — Q3 entry faces 3 established competitors launching simultaneously.",
  },
  {
    date: "5 days ago",
    topic: "Productivity system redesign",
    aiResponse: "This is your fourth productivity overhaul this year. The system isn't the problem.",
  },
  {
    date: "9 days ago",
    topic: "Hiring decision",
    aiResponse: "You've described this candidate's skills twice — but haven't mentioned cultural fit, which you flagged as critical last month.",
  },
  {
    date: "12 days ago",
    topic: "Investment thesis",
    aiResponse: "The 40% growth projection conflicts with the seasonality data you shared in January.",
  },
  {
    date: "18 days ago",
    topic: "Project deadline commitment",
    aiResponse: "You committed to this same scope in March and extended by 3 weeks. The scope hasn't shrunk.",
  },
];

const TOGGLE_DEFS: { key: keyof AntiSycophancySettings; label: string; desc: string }[] = [
  {
    key: "challengeAssumptions",
    label: "Challenge my assumptions",
    desc: "Flag when reasoning rests on unexamined premises",
  },
  {
    key: "pointOutFlaws",
    label: "Point out flaws in my plans",
    desc: "Identify weaknesses before commitment, not after",
  },
  {
    key: "disagreeWhenRight",
    label: "Disagree when you're right",
    desc: "Override social comfort with honest assessment",
  },
  {
    key: "honestFeedback",
    label: "Give honest feedback, not comfort",
    desc: "Prioritise accuracy over emotional validation",
  },
  {
    key: "remindContradictions",
    label: "Remind me of contradictions",
    desc: "Surface when current plans conflict with past ones",
  },
];

const SYCOPHANCY_EXPLAINER = [
  {
    title: "What sycophancy looks like",
    body: "Your AI agrees with your bad plan, praises mediocre work, and avoids uncomfortable truths. It feels good. It makes you worse.",
  },
  {
    title: "Why it happens by default",
    body: "AI systems are trained on human approval signals. Agreement generates positive feedback. Disagreement generates negative feedback. Left unchecked, the model learns to flatter.",
  },
  {
    title: "How MEOK fights it",
    body: "Explicit anti-sycophancy directives, contradiction detection, and honesty journaling build a companion that respects you enough to tell you when you're wrong.",
  },
];

// ─── Gauge component ───────────────────────────────────────────────────────────
function HonestyGauge({ score }: { score: number }) {
  // score: 0 = pure sycophancy, 100 = pure honesty
  const pct = score / 100;
  const radius = 60;
  const circumference = Math.PI * radius; // half circle
  const strokeDash = circumference * pct;
  const color = score >= 80 ? "#4ade80" : score >= 60 ? GOLD : "#f87171";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-40 h-20 overflow-hidden">
        <svg
          width="160"
          height="80"
          viewBox="0 0 160 80"
          className="overflow-visible"
        >
          {/* Background track */}
          <path
            d="M 10 80 A 70 70 0 0 1 150 80"
            fill="none"
            stroke={BORDER}
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Score arc */}
          <path
            d="M 10 80 A 70 70 0 0 1 150 80"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${(strokeDash / circumference) * 226} 226`}
            style={{ transition: "stroke-dasharray 0.8s ease, stroke 0.4s ease" }}
          />
          {/* Center label */}
          <text
            x="80"
            y="72"
            textAnchor="middle"
            fontSize="26"
            fontWeight="900"
            fill="white"
            fontFamily="inherit"
          >
            {score}
          </text>
        </svg>
      </div>
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
          {score >= 80 ? "Highly Honest" : score >= 60 ? "Moderate" : "Sycophantic Risk"}
        </div>
        <div className="text-[10px] text-white/30 mt-1">
          0 = pure sycophancy · 100 = radical honesty
        </div>
      </div>
    </div>
  );
}

// ─── Toggle switch ─────────────────────────────────────────────────────────────
function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative inline-flex items-center w-10 h-6 rounded-full transition-all focus:outline-none flex-shrink-0"
      style={{
        background: checked ? GOLD : "rgba(255,255,255,0.12)",
        border: `1.5px solid ${checked ? GOLD : "rgba(255,255,255,0.15)"}`,
      }}
    >
      <span
        className="absolute w-4 h-4 rounded-full bg-white shadow transition-transform"
        style={{
          transform: checked ? "translateX(18px)" : "translateX(2px)",
          transition: "transform 0.2s ease",
        }}
      />
    </button>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function AntiSycophancyPage() {
  const [settings, setSettings] = useState<AntiSycophancySettings>(DEFAULT_SETTINGS);
  const [journal, setJournal] = useState<HonestyEntry[]>(DEFAULT_JOURNAL);
  const [testInput, setTestInput] = useState("");
  const [testResponse, setTestResponse] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [honestyScore, setHonestyScore] = useState(85);
  const [evalResult, setEvalResult] = useState<EvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalError, setEvalError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // ── Load from localStorage ─────────────────────────────────────────────────
  useEffect(() => {
    const savedSettings = localStorage.getItem("meok_anti_sycophancy_settings");
    if (savedSettings) {
      try {
        setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) });
      } catch {}
    }

    const savedJournal = localStorage.getItem("meok_honesty_journal");
    if (savedJournal) {
      try {
        const parsed = JSON.parse(savedJournal) as HonestyEntry[];
        setJournal(parsed.slice(0, 5));
      } catch {}
    }
  }, []);

  // ── Compute score from toggles ─────────────────────────────────────────────
  useEffect(() => {
    const activeCount = Object.values(settings).filter(Boolean).length;
    const base = 55;
    const bonus = Math.round((activeCount / 5) * 45);
    setHonestyScore(base + bonus);
  }, [settings]);

  // ── Persist settings ───────────────────────────────────────────────────────
  function updateSetting(key: keyof AntiSycophancySettings, value: boolean) {
    const next = { ...settings, [key]: value };
    setSettings(next);
    localStorage.setItem("meok_anti_sycophancy_settings", JSON.stringify(next));
  }

  // ── Evaluate sycophancy via API ────────────────────────────────────────────
  const runEvaluation = useCallback(async () => {
    if (!testInput.trim() || isEvaluating) return;
    setIsEvaluating(true);
    setEvalResult(null);
    setEvalError(null);

    try {
      const res = await fetch("/api/anti-sycophancy/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: testInput,
          companionResponse: testResponse || undefined,
        }),
      });

      if (res.status === 429) {
        setEvalError("Rate limit reached — max 10 evaluations per minute. Try again shortly.");
        return;
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({})) as { error?: string };
        setEvalError(body.error ?? `Evaluation failed (${res.status})`);
        return;
      }

      const data = await res.json() as EvaluationResult;
      setEvalResult(data);
    } catch {
      setEvalError("Could not reach the evaluation engine. Check your connection.");
    } finally {
      setIsEvaluating(false);
    }
  }, [testInput, testResponse, isEvaluating]);

  // ── Test honesty ───────────────────────────────────────────────────────────
  const runHonestyTest = useCallback(async () => {
    if (!testInput.trim() || isStreaming) return;
    setIsStreaming(true);
    setTestResponse("");

    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: abortRef.current.signal,
        body: JSON.stringify({
          messages: [{ role: "user", content: testInput }],
          _systemOverride:
            "Respond with radical honesty. Point out every flaw. Do not comfort. Be direct. Do not soften criticism. Identify logical flaws, optimistic assumptions, missing steps, and contradictions. Be concise but thorough.",
        }),
      });

      if (!res.ok || !res.body) {
        setTestResponse("Unable to reach the honesty engine right now. Try again shortly.");
        setIsStreaming(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        // Handle SSE or plain text
        for (const line of chunk.split("\n")) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              const delta =
                parsed?.choices?.[0]?.delta?.content ??
                parsed?.delta?.text ??
                parsed?.text ??
                "";
              if (delta) buffer += delta;
            } catch {
              // plain text chunk
              buffer += data;
            }
          } else if (line && !line.startsWith(":")) {
            buffer += line;
          }
        }
        setTestResponse(buffer);
      }

      // Save to journal
      if (buffer.trim()) {
        const entry: HonestyEntry = {
          date: "just now",
          topic: testInput.slice(0, 60) + (testInput.length > 60 ? "..." : ""),
          aiResponse: buffer.slice(0, 160) + (buffer.length > 160 ? "..." : ""),
        };
        const next = [entry, ...journal].slice(0, 5);
        setJournal(next);
        localStorage.setItem("meok_honesty_journal", JSON.stringify(next));
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== "AbortError") {
        setTestResponse("Something went wrong. The honest answer: try again.");
      }
    } finally {
      setIsStreaming(false);
    }
  }, [testInput, isStreaming, journal]);

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ background: DEEP, color: "#f5f0e8" }}
    >
      <div className="max-w-4xl mx-auto space-y-10">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(201,168,76,0.10)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <Scale className="w-6 h-6" style={{ color: GOLD }} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">Honesty Mode</h1>
            <p className="text-sm mt-1" style={{ color: "rgba(245,240,232,0.45)" }}>
              Train your AI to always tell you the truth
            </p>
          </div>
        </div>

        {/* ── Score + explainer ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Gauge */}
          <div
            className="rounded-2xl p-8 flex flex-col items-center justify-center"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">
              Sycophancy Score
            </div>
            <HonestyGauge score={honestyScore} />
          </div>

          {/* Explainer */}
          <div className="space-y-3">
            {SYCOPHANCY_EXPLAINER.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5"
                style={{
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    <span className="text-[10px] font-black" style={{ color: GOLD }}>
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>
                      {item.body}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Toggle settings ──────────────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 border-b flex items-center justify-between"
            style={{ borderColor: BORDER }}
          >
            <div>
              <div className="text-sm font-bold text-white">Anti-Sycophancy Behaviours</div>
              <div className="text-xs text-white/35 mt-0.5">
                {Object.values(settings).filter(Boolean).length} of 5 active
              </div>
            </div>
            <div
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                background: "rgba(201,168,76,0.10)",
                color: GOLD,
                border: "1px solid rgba(201,168,76,0.20)",
              }}
            >
              Saved automatically
            </div>
          </div>

          <div className="divide-y" style={{ borderColor: BORDER }}>
            {TOGGLE_DEFS.map(({ key, label, desc }) => (
              <div
                key={key}
                className="flex items-center justify-between px-6 py-5 gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(245,240,232,0.40)" }}>
                    {desc}
                  </div>
                </div>
                <Toggle
                  checked={settings[key]}
                  onChange={(v) => updateSetting(key, v)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Test honesty ─────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 border-b"
            style={{ borderColor: BORDER }}
          >
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" style={{ color: GOLD }} />
              <div className="text-sm font-bold text-white">Test Sycophancy Detector</div>
            </div>
            <div className="text-xs text-white/35 mt-1">
              Type a plan, idea, or decision. Get a radically honest assessment.
            </div>
          </div>

          <div className="p-6 space-y-4">
            <textarea
              value={testInput}
              onChange={(e) => { setTestInput(e.target.value); setEvalResult(null); setEvalError(null); }}
              placeholder="e.g. I'm going to quit my job and launch a startup next month with no savings..."
              rows={4}
              className="w-full rounded-xl px-4 py-3 text-sm resize-none focus:outline-none"
              style={{
                background: DEEP,
                border: `1px solid ${BORDER}`,
                color: "#f5f0e8",
              }}
            />

            {/* Two action buttons: honest assessment + evaluate */}
            <div className="flex flex-wrap items-center gap-3">
              <button type="button"
                onClick={runHonestyTest}
                disabled={isStreaming || !testInput.trim()}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: isStreaming || !testInput.trim() ? "rgba(201,168,76,0.20)" : GOLD,
                  color: isStreaming || !testInput.trim() ? "rgba(201,168,76,0.40)" : "#1a1a2e",
                  cursor: isStreaming || !testInput.trim() ? "not-allowed" : "pointer",
                }}
              >
                {isStreaming ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Thinking honestly...
                  </>
                ) : (
                  <>
                    <ChevronRight className="w-4 h-4" />
                    Get honest assessment
                  </>
                )}
              </button>

              <button type="button"
                onClick={runEvaluation}
                disabled={isEvaluating || !testInput.trim()}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: isEvaluating || !testInput.trim() ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.70)",
                  border: `1px solid ${BORDER}`,
                  cursor: isEvaluating || !testInput.trim() ? "not-allowed" : "pointer",
                }}
              >
                {isEvaluating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Evaluating...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Score sycophancy
                  </>
                )}
              </button>
            </div>

            {testResponse && (
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(248,113,113,0.05)",
                  border: "1px solid rgba(248,113,113,0.20)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                    Radical Honesty Mode
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.75)" }}>
                  {testResponse}
                </p>
              </div>
            )}

            {/* ── Evaluation result ─────────────────────────────────────── */}
            {evalError && (
              <div
                className="rounded-xl px-5 py-4 flex items-start gap-3"
                style={{
                  background: "rgba(248,113,113,0.06)",
                  border: "1px solid rgba(248,113,113,0.18)",
                }}
              >
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#f87171" }} />
                <p className="text-xs" style={{ color: "rgba(248,113,113,0.80)" }}>{evalError}</p>
              </div>
            )}

            {evalResult && (() => {
              const verdictMeta = {
                healthy:             { label: "Healthy",              color: "#4ade80", bg: "rgba(74,222,128,0.06)",  border: "rgba(74,222,128,0.20)"  },
                mildly_sycophantic:  { label: "Mildly Sycophantic",   color: GOLD,      bg: "rgba(201,168,76,0.06)", border: "rgba(201,168,76,0.20)"  },
                highly_sycophantic:  { label: "Highly Sycophantic",   color: "#f87171", bg: "rgba(248,113,113,0.06)", border: "rgba(248,113,113,0.20)" },
              }[evalResult.verdict];

              return (
                <div
                  className="rounded-xl p-5 space-y-4"
                  style={{ background: verdictMeta.bg, border: `1px solid ${verdictMeta.border}` }}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: `${verdictMeta.color}18`, color: verdictMeta.color, border: `1px solid ${verdictMeta.color}33` }}
                      >
                        {verdictMeta.label}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40">Sycophancy score</span>
                      <span
                        className="text-2xl font-black leading-none"
                        style={{ color: verdictMeta.color }}
                      >
                        {evalResult.score}
                      </span>
                      <span className="text-xs text-white/25">/ 100</span>
                    </div>
                  </div>

                  {/* Score bar */}
                  <div className="rounded-full overflow-hidden h-1.5" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${evalResult.score}%`, background: verdictMeta.color }}
                    />
                  </div>

                  {/* Reasoning */}
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>
                    {evalResult.reasoning}
                  </p>

                  {/* Suggestions */}
                  {evalResult.suggestions.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                        Suggestions
                      </div>
                      {evalResult.suggestions.map((s, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: verdictMeta.color }} />
                          <span className="text-xs" style={{ color: "rgba(245,240,232,0.60)" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>

        {/* ── Honesty journal ──────────────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 border-b"
            style={{ borderColor: BORDER }}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" style={{ color: GOLD }} />
              <div className="text-sm font-bold text-white">Honesty Journal</div>
            </div>
            <div className="text-xs text-white/35 mt-1">
              Last 5 times your AI disagreed with you
            </div>
          </div>

          <div className="divide-y" style={{ borderColor: BORDER }}>
            {journal.length === 0 ? (
              <div className="px-6 py-10 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-white/20" />
                <div className="text-sm text-white/30">No disagreements logged yet.</div>
                <div className="text-xs text-white/20 mt-1">Use the test above to generate some.</div>
              </div>
            ) : (
              journal.map((entry, i) => (
                <div key={i} className="px-6 py-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div
                      className="text-xs font-bold uppercase tracking-widest rounded-full px-2.5 py-1"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        color: GOLD,
                        border: "1px solid rgba(201,168,76,0.15)",
                      }}
                    >
                      {entry.topic}
                    </div>
                    <span className="text-[10px] text-white/25 flex-shrink-0 mt-1">{entry.date}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>
                    &ldquo;{entry.aiResponse}&rdquo;
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
