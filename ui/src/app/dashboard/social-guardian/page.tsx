"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  Users,
  BookOpen,
  Activity,
  MessageSquare,
  Loader2,
  Copy,
  Check,
  ChevronDown,
  RotateCcw,
  Star,
  Zap,
  Shield,
  AlertTriangle,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ── Streaming helper ──────────────────────────────────────────────────────────
async function streamChat(
  prompt: string,
  systemOverride: string,
  onChunk: (text: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal,
    body: JSON.stringify({
      messages: [{ role: "user", content: prompt }],
      companionId: "__social_guardian__",
      _systemOverride: systemOverride,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as Record<string, string>).error ?? "Request failed");
  }

  const reader = res.body?.getReader();
  if (!reader) throw new Error("No response stream");

  const decoder = new TextDecoder();
  let accumulated = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    accumulated += decoder.decode(value, { stream: true });
    onChunk(accumulated);
  }
}

// ── localStorage helpers ──────────────────────────────────────────────────────
function loadLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function saveLocal<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* noop */ }
}

// ── Tab navigation ────────────────────────────────────────────────────────────
type TabId = "prep" | "scripts" | "sensory" | "debrief";

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "prep",    label: "Meeting Prep",       icon: <Users className="w-4 h-4" /> },
  { id: "scripts", label: "Script Generator",   icon: <BookOpen className="w-4 h-4" /> },
  { id: "sensory", label: "Sensory Tracker",    icon: <Activity className="w-4 h-4" /> },
  { id: "debrief", label: "Debrief",            icon: <MessageSquare className="w-4 h-4" /> },
];

// ─────────────────────────────────────────────────────────────────────────────
// 1. MEETING PREP
// ─────────────────────────────────────────────────────────────────────────────
const MEETING_PREP_SYSTEM = `You are a social preparation coach for MEOK AI. The user is neurodivergent and needs help preparing for a social interaction. Provide:
1) A brief profile of what to expect
2) 3 key things to remember
3) Suggested opening lines
4) Exit strategies if overwhelmed

Be warm, specific, practical, and non-judgmental. Format clearly with headers.`;

function MeetingPrep() {
  const [who, setWho]         = useState("");
  const [purpose, setPurpose] = useState("");
  const [worry, setWorry]     = useState("");
  const [output, setOutput]   = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const abortRef              = useRef<AbortController | null>(null);

  const handleSubmit = useCallback(async () => {
    if (!who.trim() || !purpose.trim()) return;
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput("");
    setError("");
    setLoading(true);

    const prompt = `I am preparing to meet: ${who}
Purpose of the meeting: ${purpose}
What I'm worried about: ${worry || "Nothing specific mentioned"}

Please help me prepare.`;

    try {
      await streamChat(prompt, MEETING_PREP_SYSTEM, setOutput, abortRef.current.signal);
    } catch (e: unknown) {
      if ((e as Error)?.name !== "AbortError") setError((e as Error)?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [who, purpose, worry]);

  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl p-6 border space-y-4"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <h2 className="text-base font-semibold text-white flex items-center gap-2">
          <Users className="w-4 h-4" style={{ color: GOLD }} />
          Who are you meeting?
        </h2>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
              Name &amp; Role
            </label>
            <input
              type="text"
              value={who}
              onChange={(e) => setWho(e.target.value)}
              placeholder="e.g. Sarah, my new manager"
              className="w-full px-3 py-2.5 rounded-lg text-white text-sm outline-none focus:ring-1"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${BORDER}`,
              }}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
              What&apos;s the purpose?
            </label>
            <input
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="e.g. One-to-one check-in about my performance"
              className="w-full px-3 py-2.5 rounded-lg text-white text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
              What are you worried about?
            </label>
            <textarea
              value={worry}
              onChange={(e) => setWorry(e.target.value)}
              placeholder="e.g. I might say the wrong thing, or freeze up when asked a direct question"
              rows={3}
              className="w-full px-3 py-2.5 rounded-lg text-white text-sm outline-none resize-none"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !who.trim() || !purpose.trim()}
          className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          style={{ background: GOLD, color: DEEP }}
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Shield className="w-4 h-4" />}
          {loading ? "Preparing your brief…" : "Generate Meeting Brief"}
        </button>

        {error && (
          <p className="text-sm text-red-400 flex items-center gap-1">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {error}
          </p>
        )}
      </div>

      {output && (
        <div
          className="rounded-2xl p-6 border"
          style={{ background: SURFACE, borderColor: `rgba(201,168,76,0.2)` }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold" style={{ color: GOLD }}>Your Meeting Brief</h3>
            {loading && <Loader2 className="w-4 h-4 animate-spin" style={{ color: GOLD }} />}
          </div>
          <div
            className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed"
            style={{ fontFamily: "inherit" }}
          >
            {output}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. SCRIPT GENERATOR
// ─────────────────────────────────────────────────────────────────────────────
const SCRIPT_CONTEXTS = [
  { value: "job-interview",          label: "Job Interview" },
  { value: "first-date",             label: "First Date" },
  { value: "difficult-conversation", label: "Difficult Conversation" },
  { value: "networking",             label: "Networking" },
  { value: "medical-appointment",    label: "Medical Appointment" },
  { value: "meeting-new-people",     label: "Meeting New People" },
];

function getScriptSystem(context: string): string {
  const ctxMap: Record<string, string> = {
    "job-interview": "job interviews — help them prepare confident, honest answers and handle nerves",
    "first-date": "first dates — help them feel relaxed, be themselves, and have natural conversation",
    "difficult-conversation": "difficult conversations — help them be clear, calm, and heard without conflict escalating",
    "networking": "professional networking — help them introduce themselves and make genuine connections",
    "medical-appointment": "medical appointments — help them clearly describe symptoms and ask the right questions",
    "meeting-new-people": "meeting new people socially — help them feel welcome and start conversations comfortably",
  };
  const ctx = ctxMap[context] ?? context;
  return `You are a social script coach for MEOK AI. The user is neurodivergent and needs help with ${ctx}.

Generate a practical social script with:
1) Opening lines (2-3 options to choose from)
2) Key phrases to use during the interaction
3) Responses to common difficult moments
4) A graceful exit/close

Mark [EDITABLE] next to any phrase the user should personalise. Be concise, warm, and specific.`;
}

function ScriptGenerator() {
  const [context, setContext]   = useState(SCRIPT_CONTEXTS[0].value);
  const [situation, setSituation] = useState("");
  const [output, setOutput]     = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [copied, setCopied]     = useState(false);
  const [open, setOpen]         = useState(false);
  const abortRef                = useRef<AbortController | null>(null);

  const selectedLabel = SCRIPT_CONTEXTS.find((c) => c.value === context)?.label ?? context;

  const handleSubmit = useCallback(async () => {
    if (!situation.trim()) return;
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput("");
    setError("");
    setLoading(true);

    const prompt = `Context: ${selectedLabel}
Specific situation: ${situation}

Please generate a script to help me navigate this.`;

    try {
      await streamChat(prompt, getScriptSystem(context), setOutput, abortRef.current.signal);
    } catch (e: unknown) {
      if ((e as Error)?.name !== "AbortError") setError((e as Error)?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [situation, context, selectedLabel]);

  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl p-6 border space-y-4"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <h2 className="text-base font-semibold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4" style={{ color: GOLD }} />
          Generate a social script
        </h2>

        {/* Context selector */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
            Context
          </label>
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-full px-3 py-2.5 rounded-lg text-white text-sm flex items-center justify-between"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
            >
              <span>{selectedLabel}</span>
              <ChevronDown
                className="w-4 h-4 text-gray-400 transition-transform"
                style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {open && (
              <div
                className="absolute z-10 mt-1 w-full rounded-lg overflow-hidden shadow-xl"
                style={{ background: "#1a1929", border: `1px solid ${BORDER}` }}
              >
                {SCRIPT_CONTEXTS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => { setContext(c.value); setOpen(false); }}
                    className="w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/5"
                    style={{ color: context === c.value ? GOLD : "#d1d5db" }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
            Describe your specific situation
          </label>
          <textarea
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="e.g. I have a second interview at a tech startup tomorrow. The last one went well but I froze when asked about my weaknesses."
            rows={4}
            className="w-full px-3 py-2.5 rounded-lg text-white text-sm outline-none resize-none"
            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !situation.trim()}
          className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          style={{ background: GOLD, color: DEEP }}
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
          {loading ? "Writing your script…" : "Generate Script"}
        </button>

        {error && (
          <p className="text-sm text-red-400 flex items-center gap-1">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {error}
          </p>
        )}
      </div>

      {output && (
        <div
          className="rounded-2xl p-6 border"
          style={{ background: SURFACE, borderColor: `rgba(201,168,76,0.2)` }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold" style={{ color: GOLD }}>
              Your {selectedLabel} Script
            </h3>
            <div className="flex items-center gap-2">
              {loading && <Loader2 className="w-4 h-4 animate-spin" style={{ color: GOLD }} />}
              {!loading && output && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: copied ? "rgba(34,197,94,0.15)" : "rgba(201,168,76,0.1)",
                    color: copied ? "#22c55e" : GOLD,
                    border: `1px solid ${copied ? "rgba(34,197,94,0.3)" : "rgba(201,168,76,0.3)"}`,
                  }}
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              )}
            </div>
          </div>
          <div className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. SENSORY LOAD TRACKER
// ─────────────────────────────────────────────────────────────────────────────
interface SensoryEntry {
  ts: number;
  noise: number;
  crowding: number;
  light: number;
  energy: number;
}

const SENSORY_KEY = "sg_sensory_log";

function getLoadColor(score: number): string {
  if (score <= 15) return "#22c55e";
  if (score <= 25) return "#eab308";
  if (score <= 32) return "#f97316";
  return "#ef4444";
}

function getLoadLabel(score: number): string {
  if (score <= 15) return "Low";
  if (score <= 25) return "Moderate";
  if (score <= 32) return "High";
  return "Critical";
}

function SensoryTracker() {
  const [noise,   setNoise]   = useState(5);
  const [crowding, setCrowding] = useState(5);
  const [light,   setLight]   = useState(5);
  const [energy,  setEnergy]  = useState(5);
  const [log, setLog]         = useState<SensoryEntry[]>([]);
  const [saved, setSaved]     = useState(false);

  useEffect(() => {
    setLog(loadLocal<SensoryEntry[]>(SENSORY_KEY, []));
  }, []);

  const total = noise + crowding + light + energy;
  const max = 40;

  const handleSave = () => {
    const entry: SensoryEntry = { ts: Date.now(), noise, crowding, light, energy };
    const updated = [entry, ...log].slice(0, 7);
    setLog(updated);
    saveLocal(SENSORY_KEY, updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // Pattern analysis — which day of week has highest avg
  const pattern = (() => {
    if (log.length < 3) return null;
    const byDay: Record<number, number[]> = {};
    log.forEach((e) => {
      const d = new Date(e.ts).getDay();
      if (!byDay[d]) byDay[d] = [];
      byDay[d].push(e.noise + e.crowding + e.light + e.energy);
    });
    let worst = -1, worstScore = 0;
    Object.entries(byDay).forEach(([day, scores]) => {
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      if (avg > worstScore) { worstScore = avg; worst = Number(day); }
    });
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return worst >= 0 ? `You tend to be most overwhelmed on ${days[worst]}s (avg load: ${Math.round(worstScore)}/40).` : null;
  })();

  const sliders: { label: string; value: number; set: (v: number) => void }[] = [
    { label: "Noise Level",   value: noise,    set: setNoise },
    { label: "Crowding",      value: crowding, set: setCrowding },
    { label: "Light",         value: light,    set: setLight },
    { label: "Social Energy (remaining)", value: energy, set: setEnergy },
  ];

  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl p-6 border space-y-5"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <Activity className="w-4 h-4" style={{ color: GOLD }} />
            Log your current sensory state
          </h2>
          {/* Total score ring */}
          <div className="relative w-16 h-16">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
              <circle
                cx="32" cy="32" r="27" fill="none"
                stroke={getLoadColor(total)}
                strokeWidth="5"
                strokeDasharray={`${(total / max) * 2 * Math.PI * 27} ${2 * Math.PI * 27}`}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-white">{total}</span>
              <span className="text-[9px] text-gray-400">/{max}</span>
            </div>
          </div>
        </div>

        <div
          className="text-center text-sm font-semibold py-1.5 px-4 rounded-full inline-block"
          style={{ background: `${getLoadColor(total)}20`, color: getLoadColor(total), border: `1px solid ${getLoadColor(total)}40` }}
        >
          {getLoadLabel(total)} Load
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          {sliders.map(({ label, value, set }) => (
            <div key={label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-400">{label}</span>
                <span className="text-xs font-bold" style={{ color: getLoadColor(value * 4) }}>
                  {value}/10
                </span>
              </div>
              <input
                type="range"
                min={0} max={10} step={1}
                value={value}
                onChange={(e) => set(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: getLoadColor(value * 4) }}
              />
              <div className="flex justify-between text-[10px] text-gray-600 mt-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          ))}
        </div>

        {total > 30 && (
          <div className="p-3 rounded-lg" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <p className="text-xs text-red-300">
              <strong>Critical load.</strong> Consider finding a quiet space, reducing inputs, or excusing yourself if needed. Your needs are valid.
            </p>
          </div>
        )}

        <button
          onClick={handleSave}
          className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2"
          style={{ background: GOLD, color: DEEP }}
        >
          {saved ? <Check className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
          {saved ? "Saved!" : "Log This Entry"}
        </button>
      </div>

      {/* History */}
      {log.length > 0 && (
        <div
          className="rounded-2xl p-6 border"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <h3 className="text-sm font-semibold text-white mb-3">Last {log.length} Entries</h3>

          {pattern && (
            <div className="mb-3 p-3 rounded-lg" style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}>
              <p className="text-xs" style={{ color: GOLD }}>{pattern}</p>
            </div>
          )}

          <div className="space-y-2">
            {log.map((e, i) => {
              const score = e.noise + e.crowding + e.light + e.energy;
              const date = new Date(e.ts);
              return (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
                >
                  <span className="text-xs text-gray-400">
                    {date.toLocaleDateString()} {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${getLoadColor(score)}15`, color: getLoadColor(score) }}
                  >
                    {score}/40 · {getLoadLabel(score)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. DEBRIEF
// ─────────────────────────────────────────────────────────────────────────────
interface DebriefEntry {
  ts: number;
  rating: number;
  hardest: string;
  worked: string;
  summary: string;
}

const DEBRIEF_KEY = "sg_debrief_log";

const DEBRIEF_SYSTEM = `You are a compassionate social coach for MEOK AI. The user is neurodivergent and has just completed a social interaction. They need a thoughtful debrief.

Based on their answers, provide:
1) A warm acknowledgement of what they experienced
2) What actually went well (even if they don't see it)
3) One specific, actionable thing to try differently next time
4) An encouraging close

Be brief (under 200 words), specific, and kind. Never be dismissive or generic.`;

const STARS = [1, 2, 3, 4, 5];

function Debrief() {
  const [rating,  setRating]  = useState(3);
  const [hardest, setHardest] = useState("");
  const [worked,  setWorked]  = useState("");
  const [output,  setOutput]  = useState("");
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const [history, setHistory] = useState<DebriefEntry[]>([]);
  const abortRef              = useRef<AbortController | null>(null);

  useEffect(() => {
    setHistory(loadLocal<DebriefEntry[]>(DEBRIEF_KEY, []));
  }, []);

  const handleSubmit = useCallback(async () => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput("");
    setError("");
    setLoading(true);

    const prompt = `Rating: ${rating}/5
What was hardest: ${hardest || "Not specified"}
What worked: ${worked || "Not specified"}

Please give me a personalised debrief.`;

    let final = "";
    try {
      await streamChat(prompt, DEBRIEF_SYSTEM, (t) => { setOutput(t); final = t; }, abortRef.current.signal);
      // Save to history
      const entry: DebriefEntry = { ts: Date.now(), rating, hardest, worked, summary: final.slice(0, 120) };
      const updated = [entry, ...history].slice(0, 20);
      setHistory(updated);
      saveLocal(DEBRIEF_KEY, updated);
    } catch (e: unknown) {
      if ((e as Error)?.name !== "AbortError") setError((e as Error)?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [rating, hardest, worked, history]);

  const handleReset = () => {
    setRating(3);
    setHardest("");
    setWorked("");
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl p-6 border space-y-4"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <h2 className="text-base font-semibold text-white flex items-center gap-2">
          <MessageSquare className="w-4 h-4" style={{ color: GOLD }} />
          Debrief a social interaction
        </h2>

        {/* Star rating */}
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
            How did it go overall?
          </label>
          <div className="flex gap-2">
            {STARS.map((s) => (
              <button
                key={s}
                onClick={() => setRating(s)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className="w-7 h-7"
                  style={{
                    fill: s <= rating ? GOLD : "transparent",
                    color: s <= rating ? GOLD : "rgba(255,255,255,0.2)",
                  }}
                />
              </button>
            ))}
            <span className="text-sm text-gray-400 ml-2 self-center">
              {["", "Really tough", "Tough", "Okay", "Went well", "Really well!"][rating]}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
            What was hardest?
          </label>
          <textarea
            value={hardest}
            onChange={(e) => setHardest(e.target.value)}
            placeholder="e.g. I didn't know what to do when there was a long silence"
            rows={2}
            className="w-full px-3 py-2.5 rounded-lg text-white text-sm outline-none resize-none"
            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
            What worked?
          </label>
          <textarea
            value={worked}
            onChange={(e) => setWorked(e.target.value)}
            placeholder="e.g. I remembered to ask questions about them rather than talking about myself"
            rows={2}
            className="w-full px-3 py-2.5 rounded-lg text-white text-sm outline-none resize-none"
            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            style={{ background: GOLD, color: DEEP }}
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <MessageSquare className="w-4 h-4" />}
            {loading ? "Generating debrief…" : "Get My Debrief"}
          </button>
          {output && (
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{ background: "rgba(255,255,255,0.05)", color: "#9ca3af", border: `1px solid ${BORDER}` }}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>

        {error && (
          <p className="text-sm text-red-400 flex items-center gap-1">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {error}
          </p>
        )}
      </div>

      {output && (
        <div
          className="rounded-2xl p-6 border"
          style={{ background: SURFACE, borderColor: `rgba(201,168,76,0.2)` }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold" style={{ color: GOLD }}>Your Debrief</h3>
            {loading && <Loader2 className="w-4 h-4 animate-spin" style={{ color: GOLD }} />}
          </div>
          <div className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">{output}</div>
        </div>
      )}

      {/* Past debriefs */}
      {history.length > 0 && (
        <div
          className="rounded-2xl p-6 border"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <h3 className="text-sm font-semibold text-white mb-3">Past Debriefs</h3>
          <div className="space-y-2">
            {history.slice(0, 5).map((e, i) => (
              <div
                key={i}
                className="px-3 py-2.5 rounded-lg"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">
                    {new Date(e.ts).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}
                  </span>
                  <span className="flex gap-0.5">
                    {STARS.map((s) => (
                      <Star
                        key={s}
                        className="w-3 h-3"
                        style={{ fill: s <= e.rating ? GOLD : "transparent", color: s <= e.rating ? GOLD : "rgba(255,255,255,0.15)" }}
                      />
                    ))}
                  </span>
                </div>
                {e.summary && (
                  <p className="text-xs text-gray-500 truncate">{e.summary}…</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function SocialGuardianPage() {
  const [tab, setTab] = useState<TabId>("prep");

  return (
    <div className="min-h-screen" style={{ background: DEEP }}>
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40` }}
            >
              <Shield className="w-5 h-5" style={{ color: GOLD }} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Social Guardian</h1>
              <p className="text-xs text-gray-500">Your neurodivergent social toolkit</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Prepare for interactions, generate scripts, track your sensory load, and debrief afterwards — all with AI coaching built for the way you think.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 p-1 rounded-xl mb-6"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-all"
              style={{
                background: tab === t.id ? GOLD : "transparent",
                color: tab === t.id ? DEEP : "#9ca3af",
              }}
            >
              {t.icon}
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "prep"    && <MeetingPrep />}
        {tab === "scripts" && <ScriptGenerator />}
        {tab === "sensory" && <SensoryTracker />}
        {tab === "debrief" && <Debrief />}
      </div>
    </div>
  );
}
