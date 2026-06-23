"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Mic,
  MicOff,
  Send,
  Pause,
  SkipForward,
  Maximize2,
  Minimize2,
  Settings,
  ChevronRight,
  Brain,
  FileText,
  Mail,
  Shield,
  Gamepad2,
  Eye,
  Zap,
  Loader2,
  CheckCircle2,
  Circle,
  RotateCcw,
  X,
} from "lucide-react";
import { Surface, GlowText, IconOrb } from "@/components/design-system";

// ── Brand tokens ────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ── Types ───────────────────────────────────────────────────────────────────
type Mood = "Focused" | "Thinking" | "Working" | "Listening" | "Dreaming";
type ConsciousnessMode = "Waking" | "Dreaming" | "Reflecting";
type ToolTab = "Research" | "Email" | "Documents" | "Guardian" | "Gaming";
type TaskStep = { label: string; status: "done" | "active" | "pending" };

interface MemoryFragment {
  id: string;
  topic: string;
  snippet: string;
  ago: string;
}

interface ContextEntity {
  name: string;
  type: "person" | "concept" | "place" | "project";
}

interface ActiveTask {
  title: string;
  steps: TaskStep[];
  stream: string[];
}

interface CharacterState {
  id: string;
  name: string;
  emoji: string;
  color: string;
  mood: Mood;
  speechBubble: string | null;
  bondLevel: number;
  careScore: number;
}

// ── Default character ────────────────────────────────────────────────────────
const DEFAULT_CHARACTER: CharacterState = {
  id: "orion",
  name: "Orion",
  emoji: "⚡",
  color: "#c9a84c",
  mood: "Focused",
  speechBubble: "Ready when you are.",
  bondLevel: 72,
  careScore: 88,
};

const DEFAULT_MEMORIES: MemoryFragment[] = [
  { id: "m1", topic: "Byzantine Governance", snippet: "Discussed conciliar structures and their modern parallels.", ago: "2h ago" },
  { id: "m2", topic: "Project Sovereign", snippet: "v3.0 fractal council system — finalising council vote logic.", ago: "Yesterday" },
  { id: "m3", topic: "MEOK OS Vision", snippet: "Fly Eye interface proposed as primary interaction paradigm.", ago: "3 days ago" },
];

const DEFAULT_ENTITIES: ContextEntity[] = [
  { name: "Sovereign Temple", type: "project" },
  { name: "MEOK AI LTD", type: "project" },
  { name: "Byzantine Council", type: "concept" },
  { name: "Nick", type: "person" },
];

const QUICK_ACTIONS = [
  "Brief me on today",
  "What should I focus on?",
  "What did we last discuss?",
];

const TOOL_ICONS: Record<ToolTab, React.ReactNode> = {
  Research:  <Brain size={13} />,
  Email:     <Mail size={13} />,
  Documents: <FileText size={13} />,
  Guardian:  <Shield size={13} />,
  Gaming:    <Gamepad2 size={13} />,
};

// ── Helpers ──────────────────────────────────────────────────────────────────
function moodColor(mood: Mood): string {
  switch (mood) {
    case "Focused":   return GOLD;
    case "Thinking":  return "#7c9ef8";
    case "Working":   return "#5ec97a";
    case "Listening": return "#c47cec";
    case "Dreaming":  return "#ec8c4c";
  }
}

function consciousnessColor(mode: ConsciousnessMode): string {
  switch (mode) {
    case "Waking":    return GOLD;
    case "Dreaming":  return "#7c9ef8";
    case "Reflecting": return "#9ee8b0";
  }
}

// ── Compound Eye SVG icon ────────────────────────────────────────────────────
function FlyEyeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="6"  cy="6"  r="4" stroke={GOLD} strokeWidth="1.2" fill="none" />
      <circle cx="14" cy="6"  r="4" stroke={GOLD} strokeWidth="1.2" fill="none" />
      <circle cx="6"  cy="14" r="4" stroke={GOLD} strokeWidth="1.2" fill="none" />
      <circle cx="14" cy="14" r="4" stroke={GOLD} strokeWidth="1.2" fill="none" />
      <circle cx="6"  cy="6"  r="1.5" fill={GOLD} fillOpacity="0.6" />
      <circle cx="14" cy="6"  r="1.5" fill={GOLD} fillOpacity="0.6" />
      <circle cx="6"  cy="14" r="1.5" fill={GOLD} fillOpacity="0.6" />
      <circle cx="14" cy="14" r="1.5" fill={GOLD} fillOpacity="0.6" />
    </svg>
  );
}

// ── Step status icon ─────────────────────────────────────────────────────────
function StepIcon({ status }: { status: TaskStep["status"] }) {
  if (status === "done")   return <CheckCircle2 size={14} color="#5ec97a" />;
  if (status === "active") return <Loader2 size={14} color={GOLD} style={{ animation: "spin 1.2s linear infinite" }} />;
  return <Circle size={14} color="rgba(255,255,255,0.2)" />;
}

// ═══════════════════════════════════════════════════════════════════════════
// Main component
// ═══════════════════════════════════════════════════════════════════════════
export default function FlyEyePage() {
  // ── Character state ───────────────────────────────────────────────────────
  const [character, setCharacter] = useState<CharacterState>(DEFAULT_CHARACTER);
  const [consciousnessMode, setConsciousnessMode] = useState<ConsciousnessMode>("Waking");
  const [speechVisible, setSpeechVisible] = useState(true);

  // ── Task state ────────────────────────────────────────────────────────────
  const [activeTask, setActiveTask] = useState<ActiveTask | null>(null);
  const [taskPaused, setTaskPaused] = useState(false);

  // ── Context / memory ─────────────────────────────────────────────────────
  const [memories] = useState<MemoryFragment[]>(DEFAULT_MEMORIES);
  const [entities]  = useState<ContextEntity[]>(DEFAULT_ENTITIES);

  // ── Tool state ────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState<ToolTab>("Research");

  // ── Chat input ────────────────────────────────────────────────────────────
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const streamRef = useRef<HTMLDivElement>(null);

  // ── Layout ────────────────────────────────────────────────────────────────
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ── Load persisted character from localStorage ────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem("meok_flyeye_character");
      if (saved) setCharacter({ ...DEFAULT_CHARACTER, ...JSON.parse(saved) });
    } catch { /* ignore */ }
  }, []);

  // ── Speech bubble auto-hide ───────────────────────────────────────────────
  useEffect(() => {
    if (!character.speechBubble) return;
    setSpeechVisible(true);
    const t = setTimeout(() => setSpeechVisible(false), 8000);
    return () => clearTimeout(t);
  }, [character.speechBubble]);

  // ── Auto-scroll stream ────────────────────────────────────────────────────
  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
    }
  }, [activeTask?.stream]);

  // ── Chat send ─────────────────────────────────────────────────────────────
  const handleSend = useCallback(async () => {
    const text = inputValue.trim();
    if (!text || isSending) return;

    setInputValue("");
    setIsSending(true);

    // Transition character mood
    setCharacter(prev => ({ ...prev, mood: "Thinking" }));

    // Build a simulated task to show the character working
    const newTask: ActiveTask = {
      title: `Processing: ${text.slice(0, 60)}${text.length > 60 ? "…" : ""}`,
      steps: [
        { label: "Parsing request", status: "done" },
        { label: "Retrieving context", status: "done" },
        { label: "Generating response", status: "active" },
        { label: "Delivering answer", status: "pending" },
      ],
      stream: [],
    };
    setActiveTask(newTask);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: text }],
          characterId: character.id,
          _systemOverride: `You are ${character.name}, acting as a sovereign AI OS agent in Fly Eye Mode.
Be concise and direct. Think like a command-line OS with personality.
Surface only what matters. No fluff. Start immediately.`,
        }),
      });

      if (!res.ok) throw new Error(`API ${res.status}`);

      const data = await res.json();
      const reply: string =
        data.message ?? data.content ?? data.reply ?? data.text ??
        (typeof data === "string" ? data : "Done.");

      // Simulate streaming the reply word-by-word into the task stream
      const words = reply.split(" ");
      let accumulated = "";
      for (let i = 0; i < words.length; i++) {
        accumulated += (i === 0 ? "" : " ") + words[i];
        setActiveTask(prev =>
          prev ? { ...prev, stream: [accumulated] } : prev
        );
        await new Promise(r => setTimeout(r, 28));
      }

      // Mark all steps done
      setActiveTask(prev =>
        prev
          ? {
              ...prev,
              steps: prev.steps.map(s => ({ ...s, status: "done" as const })),
            }
          : prev
      );

      // Update character speech bubble + mood
      const snippet = reply.slice(0, 120) + (reply.length > 120 ? "…" : "");
      setCharacter(prev => ({
        ...prev,
        mood: "Focused",
        speechBubble: snippet,
      }));
    } catch {
      setCharacter(prev => ({
        ...prev,
        mood: "Focused",
        speechBubble: "Something went wrong. Try again.",
      }));
      setActiveTask(prev =>
        prev
          ? {
              ...prev,
              steps: prev.steps.map((s, i) =>
                i === 2 ? { ...s, status: "pending" as const } : s
              ),
              stream: ["⚠ Connection error."],
            }
          : prev
      );
    } finally {
      setIsSending(false);
    }
  }, [inputValue, isSending, character.id, character.name]);

  // ── Keyboard submit ───────────────────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Fullscreen ────────────────────────────────────────────────────────────
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // ── Mood-based avatar animation class ────────────────────────────────────
  const avatarAnimClass =
    character.mood === "Thinking" ? "fly-eye-ripple" :
    character.mood === "Working"  ? "fly-eye-pulse-work" :
    "fly-eye-breathe";

  // ═══════════════════════════════════════════════════════════════════════════
  // Render
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <>
      {/* ── Keyframe injections ─────────────────────────────────────────────── */}
      <style>{`
        @keyframes flyEyeBreathe {
          0%, 100% { transform: scale(1);    opacity: 1; }
          50%       { transform: scale(1.02); opacity: 0.96; }
        }
        @keyframes flyEyeRipple {
          0%   { box-shadow: 0 0 0 0   rgba(124,158,248,0.4); }
          50%  { box-shadow: 0 0 0 18px rgba(124,158,248,0);  }
          100% { box-shadow: 0 0 0 0   rgba(124,158,248,0);   }
        }
        @keyframes flyEyePulseWork {
          0%, 100% { box-shadow: 0 0 0 0   rgba(94,201,122,0.5); }
          50%       { box-shadow: 0 0 0 12px rgba(94,201,122,0);  }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes speechFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes streamFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(201,168,76,0.15); }
          50%       { border-color: rgba(201,168,76,0.45); }
        }
        .fly-eye-breathe {
          animation: flyEyeBreathe 4s ease-in-out infinite;
        }
        .fly-eye-ripple {
          animation: flyEyeRipple 2s ease-out infinite;
        }
        .fly-eye-pulse-work {
          animation: flyEyePulseWork 1.5s ease-in-out infinite;
        }
        .fly-eye-input:focus {
          outline: none;
          border-color: rgba(201,168,76,0.4) !important;
        }
        .fly-eye-input::placeholder {
          color: rgba(255,255,255,0.18);
        }
        .fly-eye-tab-active {
          color: ${GOLD};
          border-bottom: 1px solid ${GOLD};
        }
        .fly-eye-stream-line {
          animation: streamFadeIn 0.15s ease-out;
        }
        .fly-eye-speech {
          animation: speechFadeIn 0.3s ease-out;
        }
        .fly-eye-memory-card:hover {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(201,168,76,0.2) !important;
        }
        .fly-eye-quick-chip:hover {
          background: rgba(201,168,76,0.12) !important;
          border-color: rgba(201,168,76,0.35) !important;
          color: ${GOLD} !important;
        }
        ::-webkit-scrollbar { width: 3px; height: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>

      {/* ── Outer shell — full viewport ─────────────────────────────────────── */}
      <div
        style={{
          width: "100vw",
          height: "100dvh",
          background: DEEP,
          color: "#e5e5e5",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          overflow: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >

        {/* ╔══════════════════════════════════════════════════════════════════╗
            ║  TOP BAR                                                         ║
            ╚══════════════════════════════════════════════════════════════════╝ */}
        <div
          style={{
            height: "44px",
            minHeight: "44px",
            background: SURFACE,
            borderBottom: `1px solid ${BORDER}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1rem",
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          {/* Left: character status */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: moodColor(character.mood),
                boxShadow: `0 0 6px ${moodColor(character.mood)}`,
                flexShrink: 0,
              }}
            />
            <span style={{ fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "-0.01em", color: "#e5e5e5" }}>
              {character.name}
            </span>
            <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>
              {character.mood}
            </span>
          </div>

          {/* Center: Fly Eye label */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FlyEyeIcon size={16} />
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Fly Eye Mode
            </span>
          </div>

          {/* Right: controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <TopBarButton onClick={toggleFullscreen} title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}>
              {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </TopBarButton>
            <TopBarButton title="Settings">
              <Settings size={14} />
            </TopBarButton>
          </div>
        </div>

        {/* ╔══════════════════════════════════════════════════════════════════╗
            ║  GRID — 4 quadrants                                              ║
            ╚══════════════════════════════════════════════════════════════════╝ */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 0,
            overflow: "hidden",
          }}
        >

          {/* ── Q1: CHARACTER PRESENCE (top-left) ─────────────────────────── */}
          <QuadrantShell label="Character Presence" position="top-left">
            {/* Gold radial glow behind avatar */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                background: `radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                padding: "1.5rem",
                gap: "1rem",
                position: "relative",
              }}
            >
              {/* Avatar */}
              <div
                className={avatarAnimClass}
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 35% 35%, ${character.color}33, ${character.color}11)`,
                  border: `2px solid ${character.color}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3.25rem",
                  flexShrink: 0,
                  userSelect: "none",
                }}
                aria-label={`${character.name} avatar`}
              >
                {character.emoji}
              </div>

              {/* Name + mood */}
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 800, fontSize: "1.125rem", letterSpacing: "-0.02em" }}>
                  {character.name}
                </div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: moodColor(character.mood),
                    marginTop: "0.2rem",
                  }}
                >
                  {character.mood}
                </div>
              </div>

              {/* Speech bubble */}
              {character.speechBubble && speechVisible && (
                <Surface
                  variant="glass"
                  className="fly-eye-speech rounded-[10px] px-3.5 py-2.5 text-[13px] leading-relaxed text-center relative max-w-full"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <span style={{ color: "rgba(255,255,255,0.25)", marginRight: "0.375rem" }}>&ldquo;</span>
                  {character.speechBubble}
                  <span style={{ color: "rgba(255,255,255,0.25)", marginLeft: "0.375rem" }}>&rdquo;</span>
                </Surface>
              )}

              {/* Voice input button */}
              <button
                onPointerDown={() => setIsListening(true)}
                onPointerUp={() => setIsListening(false)}
                onPointerLeave={() => setIsListening(false)}
                aria-label="Hold to speak"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: isListening
                    ? `rgba(201,168,76,0.25)`
                    : "rgba(255,255,255,0.05)",
                  border: `1.5px solid ${isListening ? GOLD : "rgba(255,255,255,0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.18s",
                  boxShadow: isListening ? `0 0 16px ${GOLD}55` : "none",
                  flexShrink: 0,
                }}
              >
                {isListening ? (
                  <Mic size={22} color={GOLD} />
                ) : (
                  <MicOff size={22} color="rgba(255,255,255,0.3)" />
                )}
              </button>
              <span style={{ fontSize: "0.6125rem", color: "rgba(255,255,255,0.2)", marginTop: "-0.5rem" }}>
                Hold to speak
              </span>
            </div>
          </QuadrantShell>

          {/* ── Q2: ACTIVE TASK (top-right) ───────────────────────────────── */}
          <QuadrantShell label="Active Task" position="top-right">
            <div style={{ padding: "1.25rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.875rem", overflow: "hidden" }}>

              {activeTask ? (
                <>
                  {/* Task title */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                    <div>
                      <div style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.3rem" }}>
                        Active
                      </div>
                      <div style={{ fontWeight: 700, fontSize: "0.9375rem", lineHeight: 1.4, color: "#f0f0f0" }}>
                        {activeTask.title}
                      </div>
                    </div>
                    {/* Controls */}
                    <div style={{ display: "flex", gap: "0.375rem", flexShrink: 0 }}>
                      <TaskButton onClick={() => setTaskPaused(p => !p)} title={taskPaused ? "Resume" : "Pause"}>
                        {taskPaused ? <RotateCcw size={12} /> : <Pause size={12} />}
                        {taskPaused ? "Resume" : "Pause"}
                      </TaskButton>
                      <TaskButton onClick={() => setActiveTask(null)} title="Redirect">
                        <SkipForward size={12} />
                        Redirect
                      </TaskButton>
                    </div>
                  </div>

                  {/* Steps */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {activeTask.steps.map((step, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <StepIcon status={step.status} />
                        <span
                          style={{
                            fontSize: "0.8125rem",
                            color: step.status === "done"
                              ? "rgba(255,255,255,0.4)"
                              : step.status === "active"
                                ? "#f0f0f0"
                                : "rgba(255,255,255,0.2)",
                            fontWeight: step.status === "active" ? 600 : 400,
                          }}
                        >
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stream output */}
                  <div
                    ref={streamRef}
                    style={{
                      flex: 1,
                      background: "rgba(0,0,0,0.2)",
                      borderRadius: "8px",
                      border: `1px solid ${BORDER}`,
                      padding: "0.75rem",
                      overflowY: "auto",
                      fontSize: "0.8125rem",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.65)",
                      fontFamily: "ui-monospace, 'JetBrains Mono', monospace",
                    }}
                  >
                    {activeTask.stream.length === 0 ? (
                      <span style={{ color: "rgba(255,255,255,0.2)" }}>Awaiting output…</span>
                    ) : (
                      activeTask.stream.map((line, i) => (
                        <div key={i} className="fly-eye-stream-line" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                          {line}
                        </div>
                      ))
                    )}
                  </div>
                </>
              ) : (
                /* Idle state */
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.25rem", textAlign: "center" }}>
                  <div>
                    <div className="mx-auto mb-2">
                      <IconOrb icon={Zap} variant="gold" size="lg" />
                    </div>
                    <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "rgba(255,255,255,0.35)" }}>
                      Ready. What shall I do?
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                    {QUICK_ACTIONS.map(action => (
                      <button type="button"
                        key={action}
                        className="fly-eye-quick-chip"
                        onClick={() => setInputValue(action)}
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: `1px solid rgba(255,255,255,0.1)`,
                          borderRadius: "999px",
                          padding: "0.375rem 0.875rem",
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.45)",
                          cursor: "pointer",
                          transition: "all 0.18s",
                          fontFamily: "inherit",
                        }}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </QuadrantShell>

          {/* ── Q3: CONTEXT / MEMORY (bottom-left) ───────────────────────── */}
          <QuadrantShell label="Context & Memory" position="bottom-left">
            <div style={{ padding: "1.25rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.875rem", overflowY: "auto" }}>

              {/* Consciousness mode */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Eye size={13} color={consciousnessColor(consciousnessMode)} />
                  <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: consciousnessColor(consciousnessMode), letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {consciousnessMode}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <MiniStat label="Bond" value={`${character.bondLevel}%`} />
                  <MiniStat label="Care" value={`${character.careScore}%`} />
                </div>
              </div>

              {/* Session context entities */}
              <div>
                <SectionLabel>Session Context</SectionLabel>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "0.5rem" }}>
                  {entities.map(e => (
                    <EntityChip key={e.name} entity={e} />
                  ))}
                </div>
              </div>

              {/* Memory fragments */}
              <div style={{ flex: 1 }}>
                <SectionLabel>{character.name} remembers:</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {memories.map(m => (
                    <Surface
                      key={m.id}
                      variant="glass"
                      className="fly-eye-memory-card p-2.5 px-3 rounded-lg cursor-pointer transition-all hover:border-white/15"
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.2rem" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#d4c4a0" }}>{m.topic}</span>
                        <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.2)" }}>{m.ago}</span>
                      </div>
                      <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.45 }}>{m.snippet}</span>
                    </Surface>
                  ))}
                </div>
              </div>
            </div>
          </QuadrantShell>

          {/* ── Q4: TOOLS & OUTPUT (bottom-right) ────────────────────────── */}
          <QuadrantShell label="Tools & Output" position="bottom-right">
            <div style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>

              {/* Tab bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: `1px solid ${BORDER}`,
                  padding: "0 1rem",
                  flexShrink: 0,
                  gap: "0.125rem",
                  overflowX: "auto",
                }}
              >
                {(Object.keys(TOOL_ICONS) as ToolTab[]).map(tab => (
                  <button type="button"
                    key={tab}
                    className={activeTab === tab ? "fly-eye-tab-active" : ""}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      padding: "0.625rem 0.75rem",
                      background: "none",
                      border: "none",
                      borderBottom: activeTab === tab ? `1px solid ${GOLD}` : "1px solid transparent",
                      fontSize: "0.6875rem",
                      fontWeight: activeTab === tab ? 700 : 500,
                      color: activeTab === tab ? GOLD : "rgba(255,255,255,0.3)",
                      cursor: "pointer",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      fontFamily: "inherit",
                      whiteSpace: "nowrap",
                      marginBottom: "-1px",
                      transition: "color 0.15s",
                    }}
                  >
                    {TOOL_ICONS[tab]}
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tool content area */}
              <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
                <ToolPanel tab={activeTab} />
              </div>
            </div>
          </QuadrantShell>
        </div>

        {/* ╔══════════════════════════════════════════════════════════════════╗
            ║  CHAT INPUT BAR — full width at bottom                           ║
            ╚══════════════════════════════════════════════════════════════════╝ */}
        <div
          style={{
            background: SURFACE,
            borderTop: `1px solid ${BORDER}`,
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "flex-end",
            gap: "0.625rem",
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          {/* Textarea */}
          <div style={{ flex: 1, position: "relative" }}>
            <textarea
              ref={inputRef}
              className="fly-eye-input"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Talk to ${character.name}…`}
              rows={1}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid rgba(255,255,255,0.1)`,
                borderRadius: "10px",
                padding: "0.6875rem 1rem",
                fontSize: "0.9375rem",
                color: "#f0f0f0",
                fontFamily: "inherit",
                resize: "none",
                lineHeight: 1.5,
                maxHeight: "120px",
                overflowY: "auto",
                transition: "border-color 0.15s",
                boxSizing: "border-box",
              }}
              onInput={e => {
                const t = e.currentTarget;
                t.style.height = "auto";
                t.style.height = Math.min(t.scrollHeight, 120) + "px";
              }}
            />
          </div>

          {/* Voice button */}
          <button
            onPointerDown={() => setIsListening(true)}
            onPointerUp={() => setIsListening(false)}
            onPointerLeave={() => setIsListening(false)}
            aria-label="Hold to speak"
            style={{
              width: 44,
              height: 44,
              borderRadius: "10px",
              background: isListening ? `rgba(201,168,76,0.18)` : "rgba(255,255,255,0.04)",
              border: `1px solid ${isListening ? GOLD : "rgba(255,255,255,0.1)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "all 0.15s",
            }}
          >
            {isListening ? <Mic size={18} color={GOLD} /> : <MicOff size={18} color="rgba(255,255,255,0.3)" />}
          </button>

          {/* Send button */}
          <button type="button"
            onClick={handleSend}
            disabled={!inputValue.trim() || isSending}
            aria-label="Send message"
            style={{
              width: 44,
              height: 44,
              borderRadius: "10px",
              background: inputValue.trim() && !isSending ? GOLD : "rgba(255,255,255,0.04)",
              border: `1px solid ${inputValue.trim() && !isSending ? GOLD : "rgba(255,255,255,0.08)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: inputValue.trim() && !isSending ? "pointer" : "not-allowed",
              flexShrink: 0,
              transition: "all 0.18s",
              opacity: isSending ? 0.6 : 1,
            }}
          >
            {isSending ? (
              <Loader2 size={18} color={DEEP} style={{ animation: "spin 1s linear infinite" }} />
            ) : (
              <Send size={18} color={inputValue.trim() ? DEEP : "rgba(255,255,255,0.2)"} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Sub-components
// ═══════════════════════════════════════════════════════════════════════════

function QuadrantShell({
  children,
  label,
  position,
}: {
  children: React.ReactNode;
  label: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const borderStyle = `1px solid ${BORDER}`;
  return (
    <div
      style={{
        background: SURFACE,
        borderRight:  position.includes("left")  ? borderStyle : undefined,
        borderBottom: position.includes("top")   ? borderStyle : undefined,
        position: "relative",
        overflow: "hidden",
        minHeight: 0,
        minWidth: 0,
      }}
      aria-label={label}
    >
      {/* Quadrant label watermark */}
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "0.75rem",
          fontSize: "0.5625rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.1)",
          pointerEvents: "none",
          zIndex: 1,
          userSelect: "none",
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function TopBarButton({
  children,
  onClick,
  title,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}) {
  return (
    <button type="button"
      onClick={onClick}
      title={title}
      style={{
        width: 30,
        height: 30,
        borderRadius: "6px",
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "rgba(255,255,255,0.35)",
        transition: "color 0.15s, background 0.15s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.75)";
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.35)";
        (e.currentTarget as HTMLButtonElement).style.background = "none";
      }}
    >
      {children}
    </button>
  );
}

function TaskButton({
  children,
  onClick,
  title,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}) {
  return (
    <button type="button"
      onClick={onClick}
      title={title}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        padding: "0.3rem 0.625rem",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid rgba(255,255,255,0.08)`,
        borderRadius: "6px",
        fontSize: "0.6875rem",
        fontWeight: 600,
        color: "rgba(255,255,255,0.45)",
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all 0.15s",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "0.6rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.25)",
      }}
    >
      {children}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "rgba(255,255,255,0.55)", lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: "0.5625rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.15rem" }}>
        {label}
      </div>
    </div>
  );
}

const ENTITY_COLORS: Record<ContextEntity["type"], string> = {
  person:  "rgba(196,112,122,0.2)",
  concept: "rgba(124,158,248,0.2)",
  place:   "rgba(94,201,122,0.2)",
  project: "rgba(201,168,76,0.15)",
};
const ENTITY_TEXT: Record<ContextEntity["type"], string> = {
  person:  "#c4707a",
  concept: "#7c9ef8",
  place:   "#5ec97a",
  project: GOLD,
};

function EntityChip({ entity }: { entity: ContextEntity }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.25rem",
        padding: "0.2rem 0.6rem",
        borderRadius: "999px",
        background: ENTITY_COLORS[entity.type],
        border: `1px solid ${ENTITY_TEXT[entity.type]}33`,
        fontSize: "0.6875rem",
        fontWeight: 600,
        color: ENTITY_TEXT[entity.type],
        letterSpacing: "0.02em",
      }}
    >
      {entity.name}
    </div>
  );
}

// ── Tool panel content ────────────────────────────────────────────────────────
const TOOL_PLACEHOLDERS: Record<ToolTab, { icon: React.ReactNode; title: string; sub: string; cta: string }> = {
  Research: {
    icon: <Brain size={24} color="rgba(255,255,255,0.12)" />,
    title: "Research Engine",
    sub: "Start a task to see research output here.",
    cta: "Open Full Research View",
  },
  Email: {
    icon: <Mail size={24} color="rgba(255,255,255,0.12)" />,
    title: "Email Drafts",
    sub: "No active email drafts.",
    cta: "Open Email Composer",
  },
  Documents: {
    icon: <FileText size={24} color="rgba(255,255,255,0.12)" />,
    title: "Documents",
    sub: "Recent documents will appear here.",
    cta: "Open Documents",
  },
  Guardian: {
    icon: <Shield size={24} color="rgba(255,255,255,0.12)" />,
    title: "Guardian 24/7",
    sub: "No active alerts. Family safe.",
    cta: "Open Guardian",
  },
  Gaming: {
    icon: <Gamepad2 size={24} color="rgba(255,255,255,0.12)" />,
    title: "Gaming Coach",
    sub: "No active session.",
    cta: "Open Gaming View",
  },
};

function ToolPanel({ tab }: { tab: ToolTab }) {
  const item = TOOL_PLACEHOLDERS[tab];
  return (
    <Surface
      variant="glass"
      className="h-full flex flex-col items-center justify-center gap-3.5 text-center p-4 rounded-xl"
    >
      {item.icon}
      <div>
        <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.25rem" }}>
          {item.title}
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", lineHeight: 1.5 }}>
          {item.sub}
        </div>
      </div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.375rem",
          padding: "0.4rem 0.875rem",
          background: "rgba(255,255,255,0.04)",
          border: `1px solid rgba(255,255,255,0.08)`,
          borderRadius: "7px",
          fontSize: "0.6875rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.35)",
          cursor: "pointer",
          fontFamily: "inherit",
          letterSpacing: "0.03em",
          transition: "all 0.15s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.color = GOLD;
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.3)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.35)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)";
        }}
      >
        {item.cta}
        <ChevronRight size={12} />
      </button>
    </Surface>
  );
}
