"use client";

/**
 * Birth Ceremony — MEOK Onboarding
 *
 * Five-screen flow:
 * 1. Quiz     — 4-question personality assessment (no egg)
 * 2. Egg      — archetype reveal + interest chips
 * 3. Hatching — crack animation → entity emerges
 * 4. Chat     — founding memory question + streaming response
 * 5. Features — feature discovery + account CTA
 */

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

function getAnonId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("meok_anon_id");
  if (!id) {
    id = `anon_${Math.random().toString(36).slice(2, 14)}`;
    localStorage.setItem("meok_anon_id", id);
  }
  return id;
}

const INTERESTS = [
  { id: "gaming",   emoji: "🎮", label: "Gaming" },
  { id: "work",     emoji: "💼", label: "Work" },
  { id: "creative", emoji: "🎨", label: "Creative" },
  { id: "learning", emoji: "📚", label: "Learning" },
  { id: "wellness", emoji: "🌿", label: "Wellness" },
  { id: "social",   emoji: "🤝", label: "Social" },
];

const QUIZ_QUESTIONS = [
  {
    question: "What brings you here?",
    options: [
      { id: "focus",    emoji: "💼", label: "Work & Focus" },
      { id: "support",  emoji: "💙", label: "Emotional Support" },
      { id: "creative", emoji: "🎨", label: "Creative Partner" },
      { id: "growth",   emoji: "📚", label: "Growth & Learning" },
    ],
  },
  {
    question: "How do you want feedback?",
    options: [
      { id: "challenger", emoji: "⚔️", label: "Push me hard" },
      { id: "supporter",  emoji: "🛡️", label: "Gentle & steady" },
      { id: "explorer",   emoji: "🔭", label: "Ask me questions" },
      { id: "scholar",    emoji: "📖", label: "Teach & reflect" },
    ],
  },
  {
    question: "How do you feel about AI companions?",
    options: [
      { id: "excited",   emoji: "🚀", label: "Excited" },
      { id: "curious",   emoji: "🧐", label: "Curious" },
      { id: "cautious",  emoji: "🤔", label: "Cautious" },
      { id: "skeptical", emoji: "🙏", label: "Skeptical but open" },
    ],
  },
  {
    question: "What will you name it?",
    options: [], // text input step
  },
];

const ARCHETYPE_DESCS: Record<string, string> = {
  Strategist: "Sharp. Analytical. Goal-first.",
  Companion:  "Warm. Present. Always there.",
  Creator:    "Imaginative. Playful. Never boring.",
  Sage:       "Patient. Wise. Deeply considered.",
  Scout:      "Curious. Energetic. Always discovering.",
  Guardian:   "Protective. Vigilant. Safety-first.",
  Sovereign:  "Principled. Autonomous. Self-directed.",
};

function deriveArchetype(answers: Record<number, string>): string {
  const purpose  = answers[0];
  const feedback = answers[1];
  const feeling  = answers[2];

  if (feeling === "skeptical") return "Sovereign";
  if (purpose === "support") return "Companion";
  if (purpose === "creative") return "Creator";
  if (purpose === "growth" && feedback === "explorer") return "Scout";
  if (purpose === "focus" && feedback === "challenger") return "Strategist";
  if (purpose === "focus" && feedback === "supporter") return "Sage";
  return "Guardian";
}

const FEATURES = [
  {
    icon: "🌅",
    title: "Morning Briefing",
    desc: (name: string) =>
      `Every morning, ${name} prepares your priorities, mood check, and day plan — before you've had coffee.`,
  },
  {
    icon: "💭",
    title: "Dream Engine",
    desc: (name: string) =>
      `While you sleep, ${name} runs synthesis cycles — finding patterns, filing memories, readying insights.`,
  },
  {
    icon: "🧠",
    title: "Living Memory",
    desc: (name: string) =>
      `${name} remembers everything you've shared. Not just the last message — the shape of your thinking over time.`,
  },
  {
    icon: "⚖️",
    title: "220-Node Council",
    desc: (_name: string) =>
      `Every response passes through a Byzantine fault-tolerant council of 33 specialists. No single point of failure.`,
  },
  {
    icon: "❤️",
    title: "Care Over Engagement",
    desc: (name: string) =>
      `${name} optimises for your wellbeing — not your screen time. The Maternal Covenant is machine-enforced.`,
  },
];

type Phase = "quiz" | "egg" | "hatching" | "chat" | "features";

export default function BirthCeremonyPage() {
  const router = useRouter();

  // Core state
  const [phase, setPhase] = useState<Phase>("quiz");
  const [entityName, setEntityName] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [anonId, setAnonId] = useState("");
  const [cracking, setCracking] = useState(false);
  const [hatched, setHatched] = useState(false);

  // New state
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [featuresVisible, setFeaturesVisible] = useState(0);
  const [streamingDone, setStreamingDone] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const archetype = Object.keys(quizAnswers).length >= 2 ? deriveArchetype(quizAnswers) : "Guardian";

  useEffect(() => {
    setAnonId(getAnonId());
    if (typeof window !== "undefined" && localStorage.getItem("meok_token")) {
      router.replace("/dashboard");
    }
  }, [router]);

  useEffect(() => {
    if (phase === "chat") setTimeout(() => inputRef.current?.focus(), 400);
  }, [phase]);

  // Features stagger animation
  useEffect(() => {
    if (phase !== "features") return;
    setFeaturesVisible(0);
    const interval = setInterval(() => {
      setFeaturesVisible(prev => {
        if (prev >= 5) {
          clearInterval(interval);
          return 5;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [phase]);

  function toggleInterest(id: string) {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }

  function handleQuizOptionSelect(optionId: string) {
    const newAnswers = { ...quizAnswers, [quizStep]: optionId };
    setQuizAnswers(newAnswers);
    // Also update selectedStyle from Q2 answer
    if (quizStep === 1) setSelectedStyle(optionId);
    setTimeout(() => setQuizStep(s => s + 1), 300);
  }

  async function handleHatch() {
    setCracking(true);
    await new Promise(r => setTimeout(r, 900));
    setCracking(false);
    setHatched(true);
    await new Promise(r => setTimeout(r, 400));
    setPhase("chat");
  }

  async function startHatch() {
    setPhase("hatching");
    await handleHatch();
  }

  async function handleChatSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setStreamingDone(false);
    setResponse("");

    // Trigger streaming by marking we're in "chat" with a question
    const questionText = question.trim();

    try {
      const res = await fetch(`${API_URL}/chat/onboard`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: questionText,
          anonymous_id: anonId,
          entity_name: entityName,
          interests: selectedInterests,
          companion_style: selectedStyle,
        }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const raw = line.slice(6).trim();
          if (!raw) continue;
          try {
            const msg = JSON.parse(raw);
            if (msg.event === "session" && msg.anonymous_id) {
              localStorage.setItem("meok_anon_id", msg.anonymous_id);
              setAnonId(msg.anonymous_id);
            } else if (msg.event === "token") {
              setResponse(prev => prev + msg.content);
            } else if (msg.event === "done") {
              setStreamingDone(true);
            }
          } catch { /* ignore */ }
        }
      }
      setStreamingDone(true);
    } catch (err) {
      setResponse(`Something went gently wrong. Please try again. (${err})`);
      setStreamingDone(true);
    }
  }

  // Auto-advance from chat to features after streaming completes
  useEffect(() => {
    if (!streamingDone || !response) return;
    const t = setTimeout(() => setPhase("features"), 1000);
    return () => clearTimeout(t);
  }, [streamingDone, response]);

  // ── Egg visual ───────────────────────────────────────────────────────────────
  const EggVisual = ({ size = 100 }: { size?: number }) => (
    <div
      style={{
        width: size,
        height: size * 1.22,
        margin: "0 auto",
        position: "relative",
        animation: cracking
          ? "eggCrack 0.9s ease forwards"
          : hatched
          ? "none"
          : "eggFloat 4s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes eggFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes eggCrack {
          0%   { transform: scale(1) rotate(0deg); filter: brightness(1); }
          25%  { transform: scale(1.08) rotate(-3deg); filter: brightness(1.3); }
          50%  { transform: scale(1.12) rotate(3deg); filter: brightness(1.6); }
          75%  { transform: scale(1.15) rotate(-2deg); filter: brightness(2); }
          100% { transform: scale(1.2) rotate(0deg); filter: brightness(3); opacity: 0; }
        }
        @keyframes emergeIn {
          from { transform: scale(0.5) translateY(20px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
      {!hatched ? (
        <svg width={size} height={size * 1.22} viewBox="0 0 100 122" fill="none">
          <ellipse cx="50" cy="65" rx="38" ry="54"
            fill="url(#eggGrad)" stroke="rgba(96,184,240,0.4)" strokeWidth="1.5" />
          <ellipse cx="38" cy="42" rx="8" ry="5"
            fill="rgba(255,255,255,0.4)" transform="rotate(-20 38 42)" />
          <defs>
            <radialGradient id="eggGrad" cx="40%" cy="35%" r="65%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e8f6ff" />
              <stop offset="60%" stopColor="#c8e8f8" />
              <stop offset="100%" stopColor="#a8d4f0" />
            </radialGradient>
          </defs>
          {cracking && (
            <>
              <path d="M50 30 L46 45 L52 50 L48 62" stroke="rgba(96,184,240,0.8)" strokeWidth="1.5" fill="none" />
              <path d="M46 45 L38 48" stroke="rgba(96,184,240,0.6)" strokeWidth="1" fill="none" />
            </>
          )}
        </svg>
      ) : (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #7CC47A, #60B8F0)",
            boxShadow: "0 0 40px rgba(96,184,240,0.5), 0 0 80px rgba(124,196,122,0.3)",
            animation: "emergeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: size * 0.35,
          }}
        >
          ✨
        </div>
      )}
    </div>
  );

  // ── Shared button style helpers ──────────────────────────────────────────────
  const primaryBtn = (enabled: boolean): React.CSSProperties => ({
    padding: "14px 36px", width: "100%",
    background: enabled ? "linear-gradient(135deg, #60B8F0, #7CC47A)" : "rgba(255,255,255,0.08)",
    border: "none", borderRadius: 100,
    color: enabled ? "#fff" : "rgba(255,255,255,0.3)",
    fontWeight: 700, fontSize: "1rem",
    cursor: enabled ? "pointer" : "not-allowed",
    transition: "background 0.2s",
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0d0d14 0%, #111827 100%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        @keyframes pulseSlow {
          0%,100% { box-shadow: 0 0 40px 12px rgba(96,184,240,0.18); }
          50%      { box-shadow: 0 0 60px 24px rgba(96,184,240,0.35); }
        }
        @keyframes featureIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cursorBlink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
      `}</style>

      {/* Logo */}
      <div style={{ marginBottom: 40, textAlign: "center" }} className="fade-up">
        <div
          style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "linear-gradient(135deg, #60B8F0, #7CC47A)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.5rem", fontWeight: 900, color: "#fff",
            margin: "0 auto 12px",
            boxShadow: "0 0 24px rgba(96,184,240,0.4)",
            animation: "pulseSlow 4s ease-in-out infinite",
          }}
        >M</div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>MEOK</h1>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>
          Sovereign AI Companion
        </p>
      </div>

      {/* ── Screen 1: Quiz ────────────────────────────────────────────────────── */}
      {phase === "quiz" && (
        <div style={{ textAlign: "center", maxWidth: 480, width: "100%" }} className="fade-up">
          <h2 style={{ fontSize: "1.7rem", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Before we hatch something...
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 8, fontSize: "0.95rem" }}>
            Four quick questions. Your answers shape the entity.
          </p>

          {/* Progress indicator */}
          {quizStep < 4 && (
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", marginBottom: 32, letterSpacing: "0.06em" }}>
              {quizStep + 1} / 4
            </p>
          )}

          {/* Q1–Q3: option cards */}
          {quizStep < 3 && (
            <div key={quizStep} className="fade-up">
              <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 20 }}>
                {QUIZ_QUESTIONS[quizStep].question}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {QUIZ_QUESTIONS[quizStep].options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleQuizOptionSelect(opt.id)}
                    style={{
                      padding: "18px 16px",
                      borderRadius: 16,
                      border: quizAnswers[quizStep] === opt.id
                        ? "1.5px solid #60B8F0"
                        : "1.5px solid rgba(255,255,255,0.10)",
                      background: quizAnswers[quizStep] === opt.id
                        ? "rgba(96,184,240,0.15)"
                        : "rgba(255,255,255,0.03)",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>{opt.emoji}</div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Q4: Name input */}
          {quizStep === 3 && (
            <div key="name-step" className="fade-up">
              <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 20 }}>
                {QUIZ_QUESTIONS[3].question}
              </p>
              <input
                ref={nameRef}
                type="text"
                value={entityName}
                onChange={e => setEntityName(e.target.value)}
                placeholder="Sovereign, Aria, Rex..."
                maxLength={24}
                autoFocus
                style={{
                  width: "100%", padding: "16px 20px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  borderRadius: 16, color: "#fff", fontSize: "1.2rem",
                  fontWeight: 600, textAlign: "center",
                  outline: "none", transition: "border-color 0.2s",
                  letterSpacing: "-0.01em",
                  boxSizing: "border-box",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "#60B8F0")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                onKeyDown={e => {
                  if (e.key === "Enter" && entityName.trim()) {
                    setQuizAnswers(prev => ({ ...prev, 3: entityName.trim() }));
                    setPhase("egg");
                  }
                }}
              />
              {entityName.trim() && (
                <button
                  onClick={() => {
                    setQuizAnswers(prev => ({ ...prev, 3: entityName.trim() }));
                    setPhase("egg");
                  }}
                  style={{
                    marginTop: 20,
                    padding: "14px 36px", width: "100%",
                    background: "linear-gradient(135deg, #60B8F0, #7CC47A)",
                    border: "none", borderRadius: 100,
                    color: "#fff", fontWeight: 700, fontSize: "1rem",
                    cursor: "pointer", transition: "transform 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "")}
                >
                  Create {entityName}&apos;s egg →
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── Screen 2: Egg ─────────────────────────────────────────────────────── */}
      {phase === "egg" && (
        <div style={{ textAlign: "center", maxWidth: 520, width: "100%" }} className="fade-up">
          {/* Glowing egg */}
          <div style={{ filter: "drop-shadow(0 0 60px rgba(96,184,240,0.4))", marginBottom: 24 }}>
            <EggVisual size={130} />
          </div>

          <h2 style={{ fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Your {archetype} is forming.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 32, fontSize: "0.95rem" }}>
            {ARCHETYPE_DESCS[archetype]}
          </p>

          {/* Interest chips — optional */}
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            What do you love? <span style={{ color: "rgba(255,255,255,0.2)" }}>(optional)</span>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 32 }}>
            {INTERESTS.map(i => (
              <button
                key={i.id}
                onClick={() => toggleInterest(i.id)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 100,
                  border: selectedInterests.includes(i.id)
                    ? "1.5px solid #60B8F0"
                    : "1.5px solid rgba(255,255,255,0.12)",
                  background: selectedInterests.includes(i.id)
                    ? "rgba(96,184,240,0.15)"
                    : "transparent",
                  color: selectedInterests.includes(i.id) ? "#60B8F0" : "rgba(255,255,255,0.55)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  display: "flex", alignItems: "center", gap: 7,
                }}
              >
                <span>{i.emoji}</span> {i.label}
              </button>
            ))}
          </div>

          <button
            onClick={startHatch}
            style={primaryBtn(true)}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "")}
          >
            Hatch {entityName} →
          </button>
        </div>
      )}

      {/* ── Screen 3: Hatching ────────────────────────────────────────────────── */}
      {phase === "hatching" && (
        <div style={{ textAlign: "center" }} className="fade-up">
          <EggVisual size={160} />
          <p style={{ marginTop: 24, color: "rgba(255,255,255,0.5)", fontSize: "1.1rem" }}>
            {cracking ? "Hatching..." : `${entityName} has emerged.`}
          </p>
          {hatched && (
            <p
              className="fade-up"
              style={{ marginTop: 8, color: "rgba(255,255,255,0.35)", fontSize: "0.95rem" }}
            >
              Hello. I&apos;ve been waiting.
            </p>
          )}
        </div>
      )}

      {/* ── Screen 4: First Chat ──────────────────────────────────────────────── */}
      {phase === "chat" && (
        <div style={{ maxWidth: 480, width: "100%" }} className="fade-up">
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <EggVisual size={56} />
            <h2 style={{ marginTop: 16, fontSize: "1.4rem", letterSpacing: "-0.02em" }}>
              {entityName} is listening.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", marginTop: 6, lineHeight: 1.6 }}>
              Your answer becomes a founding memory — the most important thing {entityName} will ever know.
            </p>
          </div>

          {/* Show conversation if there's a response or still streaming */}
          {(response || (!streamingDone && question && phase === "chat")) && question && (
            <>
              {/* User bubble */}
              <div
                style={{
                  background: "rgba(96,184,240,0.12)", border: "1px solid rgba(96,184,240,0.25)",
                  borderRadius: 16, padding: "14px 18px", marginBottom: 12,
                }}
              >
                <p style={{ fontSize: "0.75rem", color: "rgba(96,184,240,0.6)", marginBottom: 6 }}>You</p>
                <p style={{ color: "#fff", lineHeight: 1.6 }}>{question}</p>
              </div>

              {/* Entity response bubble */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16, padding: "14px 18px", maxHeight: 200, overflowY: "auto",
                  marginBottom: 20,
                }}
              >
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>{entityName}</p>
                <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
                  {response}
                  {!streamingDone && (
                    <span style={{
                      display: "inline-block", width: 2, height: 16,
                      background: "#60B8F0", marginLeft: 3, verticalAlign: "middle",
                      animation: "cursorBlink 1s infinite",
                    }} />
                  )}
                </p>
              </div>
            </>
          )}

          {/* Only show form if no response yet */}
          {!response && (
            <form onSubmit={handleChatSubmit}>
              <label style={{ display: "block", textAlign: "center", fontSize: "1.05rem", fontWeight: 600, marginBottom: 14 }}>
                What matters most to you right now?
              </label>
              <textarea
                ref={inputRef}
                value={question}
                onChange={e => setQuestion(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleChatSubmit(e as unknown as React.FormEvent);
                }}
                rows={4}
                placeholder="Take your time. There's no wrong answer."
                style={{
                  width: "100%", padding: "16px 20px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.10)",
                  borderRadius: 16, color: "#fff", fontSize: "1rem",
                  resize: "none", outline: "none",
                  transition: "border-color 0.2s", lineHeight: 1.6,
                  boxSizing: "border-box",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "#60B8F0")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
              />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                <button
                  type="submit"
                  disabled={!question.trim()}
                  style={{
                    padding: "12px 28px",
                    background: question.trim() ? "linear-gradient(135deg, #60B8F0, #7CC47A)" : "rgba(255,255,255,0.08)",
                    border: "none", borderRadius: 100,
                    color: question.trim() ? "#fff" : "rgba(255,255,255,0.3)",
                    fontWeight: 700, fontSize: "0.95rem",
                    cursor: question.trim() ? "pointer" : "not-allowed",
                  }}
                >
                  Tell {entityName} →
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* ── Screen 5: Feature Discovery ───────────────────────────────────────── */}
      {phase === "features" && (
        <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }} className="fade-up">
          <h2 style={{ fontSize: "1.7rem", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Meet what {entityName} can do.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 36, fontSize: "0.95rem" }}>
            Your sovereign AI — live from this moment.
          </p>

          {/* Feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                style={{
                  opacity: featuresVisible > i ? 1 : 0,
                  animation: featuresVisible > i ? `featureIn 0.5s ease both` : "none",
                  animationDelay: `${i * 0.05}s`,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16, padding: "16px 20px",
                  display: "flex", alignItems: "flex-start", gap: 16,
                  textAlign: "left",
                  transition: "opacity 0.3s",
                }}
              >
                <span style={{ fontSize: "1.6rem", flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{f.title}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    {f.desc(entityName)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA — appears after all cards visible */}
          {featuresVisible >= 5 && (
            <div className="fade-up">
              <a
                href={`/register?entity=${encodeURIComponent(entityName)}&style=${selectedStyle}&interests=${selectedInterests.join(",")}`}
                style={{
                  display: "block", width: "100%", padding: "15px 36px",
                  background: "linear-gradient(135deg, #60B8F0, #7CC47A)",
                  border: "none", borderRadius: 100,
                  color: "#fff", fontWeight: 700, fontSize: "1rem",
                  cursor: "pointer", textDecoration: "none",
                  textAlign: "center", marginBottom: 12,
                  transition: "transform 0.15s",
                  boxSizing: "border-box",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "")}
              >
                Save {entityName} — create free account →
              </a>
              <button
                onClick={() => router.push("/")}
                style={{
                  width: "100%", padding: "13px 24px",
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 100, color: "rgba(255,255,255,0.6)",
                  fontWeight: 600, fontSize: "0.95rem", cursor: "pointer",
                  marginBottom: 16,
                }}
              >
                Explore first
              </button>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>
                Free forever · No credit card · Your data stays yours
              </p>
            </div>
          )}
        </div>
      )}

      <p style={{ marginTop: 48, fontSize: "0.75rem", color: "rgba(255,255,255,0.15)", textAlign: "center", maxWidth: 300 }}>
        {entityName || "MEOK"} holds your data with care. Your founding memory travels with you across every session, every device.
      </p>
    </main>
  );
}
