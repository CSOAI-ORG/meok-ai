"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── Character archetype map ──────────────────────────────────────────────────
const ARCHETYPE_EMOJI: Record<string, string> = {
  aria:    "💜",
  sage:    "🔮",
  luna:    "🌙",
  gabriel: "⚡",
  marcus:  "🔥",
  shanti:  "🌿",
  custom:  "✨",
};

// ─── Moods ────────────────────────────────────────────────────────────────────
type Mood = "Listening" | "Thinking" | "Working" | "Resting" | "Curious";

const MOOD_COLOR: Record<Mood, string> = {
  Listening: "#7c9cf5",
  Thinking:  GOLD,
  Working:   "#f5c87c",
  Resting:   "#9c7cf5",
  Curious:   "#f57c7c",
};

// ─── Consciousness modes ──────────────────────────────────────────────────────
const CONSCIOUSNESS_MODES = ["Focused", "Creative", "Analytical", "Empathic"] as const;
type ConsciousnessMode = typeof CONSCIOUSNESS_MODES[number];

// ─── Task types for workspace display ────────────────────────────────────────
type TaskType = "research" | "email" | "code" | "planning" | "analysis" | "general";

function detectTaskType(text: string): TaskType {
  const lower = text.toLowerCase();
  if (lower.includes("research") || lower.includes("find out") || lower.includes("what is") || lower.includes("tell me about")) return "research";
  if (lower.includes("email") || lower.includes("write to") || lower.includes("message to")) return "email";
  if (lower.includes("code") || lower.includes("function") || lower.includes("script") || lower.includes("implement")) return "code";
  if (lower.includes("plan") || lower.includes("schedule") || lower.includes("organise") || lower.includes("organize") || lower.includes("todo")) return "planning";
  if (lower.includes("analyse") || lower.includes("analyze") || lower.includes("compare") || lower.includes("summarise") || lower.includes("summarize")) return "analysis";
  return "general";
}

// ─── Quick command chips ──────────────────────────────────────────────────────
const QUICK_COMMANDS = [
  { label: "Research...", prompt: "Research for me: " },
  { label: "Write an email to...", prompt: "Write an email to " },
  { label: "Summarise...", prompt: "Summarise: " },
  { label: "Plan my day", prompt: "Help me plan my day" },
  { label: "What do you remember about...", prompt: "What do you remember about " },
];

// ─── Conversation entry ───────────────────────────────────────────────────────
interface ConvEntry {
  id: string;
  role: "user" | "character";
  text: string;
  timestamp: Date;
  taskType?: TaskType;
}

// ─── Breathing animation keyframes injected once ──────────────────────────────
const GLOBAL_CSS = `
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.045); }
}
@keyframes think-rotate {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes wave-pulse {
  0%, 100% { height: 8px;  opacity: 0.5; }
  50%       { height: 24px; opacity: 1;   }
}
@keyframes star-float {
  0%, 100% { transform: translateY(0)   opacity(1);   }
  50%       { transform: translateY(-8px) opacity(0.6); }
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
}
@keyframes stream-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px ${GOLD}30; }
  50%       { box-shadow: 0 0 40px ${GOLD}60; }
}
@keyframes progress-bar {
  0%   { width: 10%; }
  50%  { width: 70%; }
  100% { width: 90%; }
}
`;

// ─── State animation component ────────────────────────────────────────────────
function StateAnimation({ mood }: { mood: Mood }) {
  if (mood === "Thinking") {
    return (
      <div className="flex gap-1.5 items-center justify-center h-6">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              width: 7, height: 7, borderRadius: "50%",
              background: GOLD,
              opacity: 0.4 + i * 0.3,
              animation: `think-rotate 1.2s linear infinite`,
              animationDelay: `${i * 0.15}s`,
              display: "inline-block",
            }}
          />
        ))}
      </div>
    );
  }
  if (mood === "Working") {
    return (
      <div style={{ width: "100%", height: 4, borderRadius: 2, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 2, background: GOLD, animation: "progress-bar 2s ease-in-out infinite" }} />
      </div>
    );
  }
  if (mood === "Listening") {
    return (
      <div className="flex gap-1 items-end justify-center h-6">
        {[0, 1, 2, 3, 4].map(i => (
          <span
            key={i}
            style={{
              width: 3, borderRadius: 2, background: GOLD,
              animation: `wave-pulse 0.9s ease-in-out infinite`,
              animationDelay: `${i * 0.12}s`,
              display: "inline-block",
            }}
          />
        ))}
      </div>
    );
  }
  if (mood === "Resting") {
    return (
      <div className="flex gap-1.5 items-center justify-center h-6">
        {["✦", "✧", "✦"].map((s, i) => (
          <span key={i} style={{ fontSize: 10, color: GOLD, opacity: 0.5, animation: `star-float 2s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}>
            {s}
          </span>
        ))}
      </div>
    );
  }
  // Curious
  return (
    <span style={{ fontSize: 18, animation: "breathe 2s ease-in-out infinite", display: "inline-block" }}>?</span>
  );
}

// ─── Bond ring ────────────────────────────────────────────────────────────────
function BondRing({ level, emoji }: { level: number; emoji: string }) {
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const dash = (level / 100) * circumference;

  return (
    <div style={{ position: "relative", width: 110, height: 110, flexShrink: 0 }}>
      <svg width="110" height="110" style={{ position: "absolute", inset: 0 }}>
        <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
        <circle
          cx="55" cy="55" r={r} fill="none"
          stroke={GOLD} strokeWidth="3"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
          transform="rotate(-90 55 55)"
          style={{ transition: "stroke-dasharray 0.8s ease" }}
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 44,
        animation: "breathe 3s ease-in-out infinite",
      }}>
        {emoji}
      </div>
    </div>
  );
}

// ─── Workspace output renderer ────────────────────────────────────────────────
function WorkspaceOutput({ text, taskType, streaming }: { text: string; taskType: TaskType; streaming: boolean }) {
  if (!text) return null;

  const baseStyle: React.CSSProperties = {
    animation: "fade-in 0.3s ease both",
    fontSize: 14,
    lineHeight: 1.7,
  };

  if (taskType === "code") {
    return (
      <pre style={{
        ...baseStyle,
        background: "rgba(0,0,0,0.4)",
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        padding: "16px 20px",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: 13,
        color: "#e2e8f0",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}>
        <code>{text}</code>
      </pre>
    );
  }

  if (taskType === "email") {
    const lines = text.split("\n");
    return (
      <div style={{
        ...baseStyle,
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        padding: "20px 24px",
        color: "rgba(255,255,255,0.85)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}>
          <span style={{ fontSize: 18 }}>✉️</span>
          <span style={{ fontSize: 11, color: GOLD, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Email Draft</span>
        </div>
        {lines.map((line, i) => <p key={i} style={{ margin: "4px 0", color: line.startsWith("Subject:") || line.startsWith("To:") || line.startsWith("From:") ? GOLD : "rgba(255,255,255,0.82)" }}>{line}</p>)}
      </div>
    );
  }

  if (taskType === "planning") {
    const lines = text.split("\n");
    return (
      <div style={{ ...baseStyle, color: "rgba(255,255,255,0.85)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 18 }}>📋</span>
          <span style={{ fontSize: 11, color: GOLD, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Plan</span>
        </div>
        {lines.map((line, i) => {
          const isBullet = line.trim().startsWith("-") || line.trim().startsWith("•") || /^\d+\./.test(line.trim());
          return (
            <div key={i} style={{ display: "flex", gap: 8, margin: "6px 0", alignItems: "flex-start" }}>
              {isBullet && <span style={{ color: GOLD, marginTop: 3, flexShrink: 0 }}>◆</span>}
              <span style={{ color: isBullet ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)", fontStyle: isBullet ? "normal" : "italic" }}>
                {line.replace(/^[-•]\s*/, "").replace(/^\d+\.\s*/, "")}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  if (taskType === "research" || taskType === "analysis") {
    const sections = text.split(/\n(?=#{1,3} )/);
    return (
      <div style={{ ...baseStyle, color: "rgba(255,255,255,0.85)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 18 }}>{taskType === "research" ? "🔍" : "📊"}</span>
          <span style={{ fontSize: 11, color: GOLD, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {taskType === "research" ? "Research Output" : "Analysis"}
          </span>
        </div>
        {sections.map((section, i) => {
          const lines = section.split("\n");
          const firstLine = lines[0];
          const isHeading = firstLine.startsWith("#");
          const headingText = firstLine.replace(/^#+\s*/, "");
          const body = lines.slice(isHeading ? 1 : 0).join("\n");
          return (
            <div key={i} style={{ marginBottom: 16 }}>
              {isHeading && (
                <h3 style={{ fontSize: 15, fontWeight: 700, color: GOLD, marginBottom: 6 }}>{headingText}</h3>
              )}
              <p style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>{body}</p>
            </div>
          );
        })}
      </div>
    );
  }

  // general
  return (
    <p style={{ ...baseStyle, color: "rgba(255,255,255,0.85)", whiteSpace: "pre-wrap" }}>
      {text}
    </p>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function SovereignOSPage() {
  // ── Character state ──────────────────────────────────────────────────────
  const [characterName]   = useState("Aria");
  const [characterKey]    = useState("aria");
  const [bondLevel]       = useState(72);
  const [mood, setMood]   = useState<Mood>("Listening");
  const [taskDesc, setTaskDesc] = useState("");
  const [consciousnessMode, setConsciousnessMode] = useState<ConsciousnessMode>("Focused");

  // ── Workspace state ──────────────────────────────────────────────────────
  const [workOutput, setWorkOutput]     = useState("");
  const [workStreaming, setWorkStreaming] = useState(false);
  const [currentTaskType, setCurrentTaskType] = useState<TaskType>("general");
  const [contextAppended, setContextAppended] = useState(false);

  // ── Conversation history ─────────────────────────────────────────────────
  const [history, setHistory] = useState<ConvEntry[]>([]);

  // ── Input state ──────────────────────────────────────────────────────────
  const [input, setInput]   = useState("");
  const [sending, setSending] = useState(false);

  // ── Refs ─────────────────────────────────────────────────────────────────
  const inputRef      = useRef<HTMLTextAreaElement>(null);
  const historyRef    = useRef<HTMLDivElement>(null);
  const workRef       = useRef<HTMLDivElement>(null);
  const abortRef      = useRef<AbortController | null>(null);

  const emoji = ARCHETYPE_EMOJI[characterKey] ?? "✨";

  // ── Inject global CSS once ────────────────────────────────────────────────
  useEffect(() => {
    const id = "sovereign-os-styles";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = GLOBAL_CSS;
      document.head.appendChild(style);
    }
  }, []);

  // ── Keyboard shortcuts ────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setInput("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ── Scroll history to bottom ──────────────────────────────────────────────
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  // ── Scroll workspace to bottom on stream ─────────────────────────────────
  useEffect(() => {
    if (workRef.current) {
      workRef.current.scrollTop = workRef.current.scrollHeight;
    }
  }, [workOutput]);

  // ── Read chat handoff context on mount ────────────────────────────────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem("meok_os_handoff_context");
      if (!raw) return;
      const ctx = JSON.parse(raw) as {
        messages: Array<{ role: string; text: string }>;
        companionId: string;
        charName: string;
        model: string;
        timestamp: number;
      };
      // Only use if within last 10 minutes
      if (Date.now() - ctx.timestamp > 10 * 60 * 1000) return;
      // Inject prior messages as history entries
      const injected: ConvEntry[] = ctx.messages.map((m, i) => ({
        id: `handoff-${i}`,
        role: (m.role === "user" ? "user" : "character") as "user" | "character",
        text: m.text,
        timestamp: new Date(ctx.timestamp - (ctx.messages.length - i) * 1000),
      }));
      if (injected.length > 0) {
        setHistory(injected);
        setTaskDesc(`Continuing from chat (${ctx.charName})`);
      }
      // Clear so it doesn't re-inject on refresh
      localStorage.removeItem("meok_os_handoff_context");
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Send message ──────────────────────────────────────────────────────────
  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || sending) return;

    const userEntry: ConvEntry = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
      timestamp: new Date(),
    };
    setHistory(prev => [...prev.slice(-9), userEntry]);
    setInput("");
    setSending(true);
    setWorkOutput("");
    setWorkStreaming(true);
    setContextAppended(false);

    const taskType = detectTaskType(text);
    setCurrentTaskType(taskType);
    setMood("Thinking");
    setTaskDesc("Analysing your request…");

    await new Promise(r => setTimeout(r, 400));
    setMood("Working");
    setTaskDesc(
      taskType === "research" ? "Researching…"
      : taskType === "email"  ? "Drafting email…"
      : taskType === "code"   ? "Writing code…"
      : taskType === "planning" ? "Building plan…"
      : taskType === "analysis" ? "Analysing…"
      : "Working on it…"
    );

    const systemOverride = `You are ${characterName}, the user's personal AI operating system. You have a distinct, warm, intelligent personality. You take on tasks with care and capability. When you receive a task: first acknowledge with exactly one sentence in your voice, then complete it with full output. Format output clearly for the task type. End with a brief personal note in your voice.`;

    const contextNote = contextAppended && workOutput
      ? `\n\n[Context from previous output: ${workOutput.slice(0, 400)}…]`
      : "";

    try {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: [{ role: "user", content: text.trim() + contextNote }],
          _systemOverride: systemOverride,
          characterId: characterKey,
          stream: true,
        }),
      });

      if (!res.ok) throw new Error(`API error ${res.status}`);

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let full = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          // Handle both plain text streaming and SSE format
          const lines = chunk.split("\n");
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6).trim();
              if (data === "[DONE]") continue;
              try {
                const parsed = JSON.parse(data);
                const delta = parsed.choices?.[0]?.delta?.content
                  ?? parsed.delta?.text
                  ?? parsed.text
                  ?? "";
                full += delta;
                setWorkOutput(full);
              } catch {
                // not JSON — treat as plain text delta
                if (data && data !== "[DONE]") {
                  full += data;
                  setWorkOutput(full);
                }
              }
            } else if (line && !line.startsWith(":")) {
              // plain streaming (non-SSE)
              full += line;
              setWorkOutput(full);
            }
          }
        }
      }

      const charEntry: ConvEntry = {
        id: (Date.now() + 1).toString(),
        role: "character",
        text: full || "(No response received)",
        timestamp: new Date(),
        taskType,
      };
      setHistory(prev => [...prev.slice(-9), charEntry]);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      const errText = `Something went wrong. Please try again.`;
      setWorkOutput(errText);
      setHistory(prev => [...prev, {
        id: (Date.now() + 2).toString(),
        role: "character",
        text: errText,
        timestamp: new Date(),
      }]);
    } finally {
      setSending(false);
      setWorkStreaming(false);
      setMood("Listening");
      setTaskDesc("");
    }
  }, [sending, characterName, characterKey, contextAppended, workOutput]);

  const handleSubmit = () => sendMessage(input);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleQuickCommand = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  const handleCopy = () => {
    if (workOutput) navigator.clipboard.writeText(workOutput).catch(() => {});
  };

  const handleAskAbout = () => {
    setContextAppended(true);
    setInput("Based on the above, ");
    inputRef.current?.focus();
  };

  // ── Cycle consciousness mode ───────────────────────────────────────────────
  const cycleMode = () => {
    const idx = CONSCIOUSNESS_MODES.indexOf(consciousnessMode);
    setConsciousnessMode(CONSCIOUSNESS_MODES[(idx + 1) % CONSCIOUSNESS_MODES.length]);
  };

  const moodColor = MOOD_COLOR[mood];

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100dvh",
      background: DEEP,
      color: "white",
      fontFamily: "'Inter', system-ui, sans-serif",
      overflow: "hidden",
    }}>

      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 20px",
        height: 44,
        flexShrink: 0,
        background: SURFACE,
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: GOLD, letterSpacing: "0.04em" }}>
          {characterName}
        </span>
        <span style={{ width: 1, height: 16, background: BORDER }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 7, height: 7, borderRadius: "50%",
              background: moodColor,
              boxShadow: `0 0 8px ${moodColor}`,
              transition: "background 0.4s, box-shadow 0.4s",
            }}
          />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em" }}>
            {mood}
          </span>
        </div>
        <span style={{ width: 1, height: 16, background: BORDER }} />
        <button
          onClick={cycleMode}
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.35)",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.06em",
            padding: 0,
          }}
          title="Click to cycle consciousness mode"
        >
          {consciousnessMode}
        </button>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Sovereign OS
        </span>
      </div>

      {/* ── Main content area ────────────────────────────────────────────── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* ── Character Presence Panel (35%) ──────────────────────────── */}
        <div style={{
          width: "35%",
          minWidth: 220,
          maxWidth: 340,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          padding: "24px 20px",
          background: SURFACE,
          borderRight: `1px solid ${BORDER}`,
          position: "relative",
        }}>
          {/* Ambient glow behind avatar */}
          <div style={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${GOLD}18 0%, transparent 70%)`,
            pointerEvents: "none",
            animation: "glow-pulse 3s ease-in-out infinite",
          }} />

          {/* Bond ring + emoji avatar */}
          <BondRing level={bondLevel} emoji={emoji} />

          {/* Character name */}
          <div style={{ textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 18, fontWeight: 700, color: GOLD, letterSpacing: "0.04em" }}>
              {characterName}
            </p>
            <p style={{ margin: "4px 0 0", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Your AI OS
            </p>
          </div>

          {/* Mood badge */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            width: "100%",
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 20,
              background: `${moodColor}18`,
              border: `1px solid ${moodColor}35`,
              transition: "all 0.4s ease",
            }}>
              <span style={{ fontSize: 11, color: moodColor, fontWeight: 600, letterSpacing: "0.06em" }}>
                {mood}
              </span>
            </div>

            {/* State animation */}
            <div style={{ minHeight: 28, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <StateAnimation mood={mood} />
            </div>

            {/* Task description */}
            {taskDesc && (
              <p style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
                margin: 0,
                fontStyle: "italic",
                animation: "fade-in 0.3s ease both",
              }}>
                {taskDesc}
              </p>
            )}
          </div>

          {/* Bond level */}
          <div style={{ width: "100%", textAlign: "center" }}>
            <p style={{ margin: "0 0 6px", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Bond Level
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
              <div style={{
                flex: 1, maxWidth: 100, height: 3, borderRadius: 2,
                background: "rgba(255,255,255,0.08)",
                overflow: "hidden",
              }}>
                <div style={{
                  height: "100%",
                  width: `${bondLevel}%`,
                  background: `linear-gradient(90deg, ${GOLD}80, ${GOLD})`,
                  borderRadius: 2,
                  transition: "width 1s ease",
                }} />
              </div>
              <span style={{ fontSize: 10, color: `${GOLD}90`, fontWeight: 600 }}>{bondLevel}</span>
            </div>
          </div>
        </div>

        {/* ── Work Space (65%) ────────────────────────────────────────────── */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: DEEP,
        }}>
          {/* Workspace header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderBottom: `1px solid ${BORDER}`,
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Work Space
              {workStreaming && (
                <span style={{ marginLeft: 10, color: GOLD, animation: "fade-in 0.2s ease both" }}>
                  ⚡ Streaming…
                </span>
              )}
            </span>
            {workOutput && (
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={handleAskAbout}
                  style={{
                    fontSize: 10,
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: `1px solid ${BORDER}`,
                    background: "none",
                    color: "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  Ask about this
                </button>
                <button
                  onClick={handleCopy}
                  style={{
                    fontSize: 10,
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: `1px solid ${GOLD}40`,
                    background: `${GOLD}12`,
                    color: GOLD,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = `${GOLD}22`)}
                  onMouseLeave={e => (e.currentTarget.style.background = `${GOLD}12`)}
                >
                  Copy output
                </button>
              </div>
            )}
          </div>

          {/* Workspace content */}
          <div
            ref={workRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "24px 28px",
            }}
          >
            {!workOutput && !workStreaming && (
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: 16,
                opacity: 0.4,
              }}>
                <span style={{ fontSize: 48, animation: "breathe 4s ease-in-out infinite" }}>{emoji}</span>
                <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.5)", textAlign: "center", maxWidth: 300 }}>
                  Ask {characterName} anything. Research, write, plan, code — whatever you need.
                </p>
              </div>
            )}
            {workOutput && (
              <WorkspaceOutput text={workOutput} taskType={currentTaskType} streaming={workStreaming} />
            )}
          </div>
        </div>
      </div>

      {/* ── Conversation history ──────────────────────────────────────────── */}
      <div style={{
        flexShrink: 0,
        maxHeight: 160,
        borderTop: `1px solid ${BORDER}`,
        background: SURFACE,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{
          padding: "6px 20px 4px",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Conversation
          </span>
        </div>
        <div
          ref={historyRef}
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0 20px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {history.length === 0 ? (
            <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.18)", fontStyle: "italic" }}>
              No messages yet. Say something to {characterName}.
            </p>
          ) : (
            history.slice(-5).map(entry => (
              <div
                key={entry.id}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  animation: "fade-in 0.25s ease both",
                }}
              >
                <span style={{
                  fontSize: 10,
                  color: entry.role === "user" ? "rgba(255,255,255,0.3)" : GOLD,
                  fontWeight: 600,
                  flexShrink: 0,
                  minWidth: 64,
                  paddingTop: 2,
                  letterSpacing: "0.06em",
                }}>
                  {entry.role === "user" ? "You" : characterName}
                </span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                  {entry.text}
                </span>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", flexShrink: 0, paddingTop: 3, marginLeft: "auto" }}>
                  {entry.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Input bar ─────────────────────────────────────────────────────── */}
      <div style={{
        flexShrink: 0,
        borderTop: `1px solid ${BORDER}`,
        background: SURFACE,
        padding: "10px 16px 14px",
      }}>
        {/* Quick command chips */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
          {QUICK_COMMANDS.map(cmd => (
            <button
              key={cmd.label}
              onClick={() => handleQuickCommand(cmd.prompt)}
              style={{
                fontSize: 11,
                padding: "4px 10px",
                borderRadius: 20,
                border: `1px solid ${BORDER}`,
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.45)",
                cursor: "pointer",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${GOLD}50`;
                e.currentTarget.style.color = GOLD;
                e.currentTarget.style.background = `${GOLD}10`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = BORDER;
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {cmd.label}
            </button>
          ))}
        </div>

        {/* Textarea + send */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 10,
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          padding: "8px 10px 8px 14px",
          transition: "border-color 0.2s",
        }}
          onFocusCapture={e => (e.currentTarget.style.borderColor = `${GOLD}50`)}
          onBlurCapture={e => (e.currentTarget.style.borderColor = BORDER)}
        >
          <span style={{ fontSize: 18, flexShrink: 0, paddingBottom: 4, opacity: 0.7 }}>🎤</span>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Talk to ${characterName} — type or speak…`}
            rows={1}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              resize: "none",
              color: "rgba(255,255,255,0.9)",
              fontSize: 14,
              lineHeight: 1.6,
              fontFamily: "inherit",
              maxHeight: 100,
              overflowY: "auto",
            }}
            onInput={e => {
              const el = e.currentTarget;
              el.style.height = "auto";
              el.style.height = Math.min(el.scrollHeight, 100) + "px";
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || sending}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: "none",
              background: input.trim() && !sending ? GOLD : "rgba(255,255,255,0.06)",
              color: input.trim() && !sending ? DEEP : "rgba(255,255,255,0.2)",
              cursor: input.trim() && !sending ? "pointer" : "not-allowed",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.15s",
              fontWeight: 700,
            }}
            aria-label="Send message"
          >
            {sending ? "…" : "▶"}
          </button>
        </div>

        {/* Keyboard hint */}
        <p style={{ margin: "6px 0 0", fontSize: 10, color: "rgba(255,255,255,0.18)", paddingLeft: 4 }}>
          ⌘↵ Send · Esc Clear · ⌘K Focus
        </p>
      </div>
    </div>
  );
}
