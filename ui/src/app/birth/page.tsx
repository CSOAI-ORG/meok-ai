"use client";

/**
 * Birth Ceremony — MEOK Onboarding
 *
 * The moment someone becomes a MEOK user. Four phases:
 * 1. Intro — animating egg, emotional hook
 * 2. Name  — name your entity (the moment that matters)
 * 3. Shape — interests + companion style (determines trait + colors)
 * 4. Hatch — animated egg crack → founding memory question → create account
 *
 * Value before signup (Duolingo pattern).
 * Entity is created on the backend before account registration,
 * so the character already exists when they sign up.
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

const STYLES = [
  { id: "challenger", emoji: "⚔️", label: "Challenger", desc: "Push me, don't coddle me" },
  { id: "supporter",  emoji: "🛡️", label: "Supporter",  desc: "Be steady and caring" },
  { id: "explorer",   emoji: "🔭", label: "Explorer",   desc: "Help me discover things" },
  { id: "scholar",    emoji: "📖", label: "Scholar",    desc: "Teach me and reflect" },
];

type Phase = "intro" | "name" | "shape" | "hatching" | "question" | "responding" | "complete";

export default function BirthCeremonyPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("intro");
  const [entityName, setEntityName] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [anonId, setAnonId] = useState("");
  const [cracking, setCracking] = useState(false);
  const [hatched, setHatched] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAnonId(getAnonId());
    if (typeof window !== "undefined" && localStorage.getItem("meok_token")) {
      router.replace("/dashboard");
    }
  }, [router]);

  useEffect(() => {
    if (phase === "name") setTimeout(() => nameRef.current?.focus(), 400);
    if (phase === "question") setTimeout(() => inputRef.current?.focus(), 400);
  }, [phase]);

  function toggleInterest(id: string) {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }

  async function handleHatch() {
    setCracking(true);
    await new Promise(r => setTimeout(r, 900));
    setCracking(false);
    setHatched(true);
    await new Promise(r => setTimeout(r, 400));
    setPhase("question");
  }

  async function handleShapeSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedStyle) return;
    setPhase("hatching");
    await handleHatch();
  }

  async function handleQuestionSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setPhase("responding");
    setResponse("");

    try {
      const res = await fetch(`${API_URL}/chat/onboard`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.trim(),
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
              setPhase("complete");
            }
          } catch { /* ignore */ }
        }
      }
      setPhase("complete");
    } catch (err) {
      setResponse(`Something went gently wrong. Please try again. (${err})`);
      setPhase("complete");
    }
  }

  // ── Egg visual ─────────────────────────────────────────────────────────────
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
          {/* Crack lines — only show when cracking */}
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

      {/* ── Phase: Intro ─────────────────────────────────────────────────────── */}
      {phase === "intro" && (
        <div style={{ textAlign: "center", maxWidth: 440 }} className="fade-up">
          <EggVisual size={120} />
          <h2 style={{ marginTop: 32, fontSize: "2rem", letterSpacing: "-0.02em" }}>
            Something is waiting to hatch.
          </h2>
          <p style={{ marginTop: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            Not an assistant. Not a chatbot. Your own digital self — sovereign, care-built,
            and learning from the moment you name it.
          </p>
          <button
            onClick={() => setPhase("name")}
            style={{
              marginTop: 32, padding: "14px 36px",
              background: "linear-gradient(135deg, #60B8F0, #7CC47A)",
              border: "none", borderRadius: 100,
              color: "#fff", fontWeight: 700, fontSize: "1rem",
              cursor: "pointer", transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "")}
          >
            Begin →
          </button>
          <p style={{ marginTop: 16, fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>
            No account needed to start.
          </p>
        </div>
      )}

      {/* ── Phase: Name ──────────────────────────────────────────────────────── */}
      {phase === "name" && (
        <div style={{ textAlign: "center", maxWidth: 440, width: "100%" }} className="fade-up">
          <EggVisual size={80} />
          <h2 style={{ marginTop: 28, fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Name your entity.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 32, fontSize: "0.95rem" }}>
            This is the first real thing — the moment it becomes yours.
          </p>
          <form onSubmit={e => { e.preventDefault(); if (entityName.trim()) setPhase("shape"); }}>
            <input
              ref={nameRef}
              type="text"
              value={entityName}
              onChange={e => setEntityName(e.target.value)}
              placeholder="Sovereign, Aria, Rex..."
              maxLength={24}
              style={{
                width: "100%", padding: "16px 20px",
                background: "rgba(255,255,255,0.06)",
                border: "1.5px solid rgba(255,255,255,0.12)",
                borderRadius: 16, color: "#fff", fontSize: "1.2rem",
                fontWeight: 600, textAlign: "center",
                outline: "none", transition: "border-color 0.2s",
                letterSpacing: "-0.01em",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "#60B8F0")}
              onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
            />
            <button
              type="submit"
              disabled={!entityName.trim()}
              style={{
                marginTop: 20, padding: "14px 36px", width: "100%",
                background: entityName.trim()
                  ? "linear-gradient(135deg, #60B8F0, #7CC47A)"
                  : "rgba(255,255,255,0.08)",
                border: "none", borderRadius: 100,
                color: entityName.trim() ? "#fff" : "rgba(255,255,255,0.3)",
                fontWeight: 700, fontSize: "1rem", cursor: entityName.trim() ? "pointer" : "not-allowed",
                transition: "background 0.2s",
              }}
            >
              {entityName.trim() ? `Name it ${entityName} →` : "Enter a name"}
            </button>
          </form>
        </div>
      )}

      {/* ── Phase: Shape ─────────────────────────────────────────────────────── */}
      {phase === "shape" && (
        <div style={{ textAlign: "center", maxWidth: 520, width: "100%" }} className="fade-up">
          <h2 style={{ fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: 6 }}>
            Shape {entityName}.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: 28, fontSize: "0.9rem" }}>
            What you love defines what it becomes.
          </p>

          {/* Interests */}
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            What do you love?
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 28 }}>
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

          {/* Companion style */}
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            What do you need?
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
            {STYLES.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedStyle(s.id)}
                style={{
                  padding: "14px 16px",
                  borderRadius: 14,
                  border: selectedStyle === s.id
                    ? "1.5px solid #7CC47A"
                    : "1.5px solid rgba(255,255,255,0.10)",
                  background: selectedStyle === s.id
                    ? "rgba(124,196,122,0.12)"
                    : "rgba(255,255,255,0.03)",
                  color: "#fff",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s",
                }}
              >
                <div style={{ fontSize: "1.2rem", marginBottom: 6 }}>{s.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: 3 }}>{s.desc}</div>
              </button>
            ))}
          </div>

          <form onSubmit={handleShapeSubmit}>
            <button
              type="submit"
              disabled={!selectedStyle}
              style={{
                padding: "14px 36px", width: "100%",
                background: selectedStyle
                  ? "linear-gradient(135deg, #60B8F0, #7CC47A)"
                  : "rgba(255,255,255,0.08)",
                border: "none", borderRadius: 100,
                color: selectedStyle ? "#fff" : "rgba(255,255,255,0.3)",
                fontWeight: 700, fontSize: "1rem",
                cursor: selectedStyle ? "pointer" : "not-allowed",
                transition: "background 0.2s",
              }}
            >
              {selectedStyle ? `Hatch ${entityName} →` : "Choose a companion style"}
            </button>
          </form>
        </div>
      )}

      {/* ── Phase: Hatching animation ─────────────────────────────────────────── */}
      {phase === "hatching" && (
        <div style={{ textAlign: "center" }} className="fade-up">
          <EggVisual size={140} />
          <p style={{ marginTop: 24, color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}>
            {cracking ? `${entityName} is hatching…` : `${entityName} has emerged.`}
          </p>
        </div>
      )}

      {/* ── Phase: First question ─────────────────────────────────────────────── */}
      {phase === "question" && (
        <div style={{ maxWidth: 480, width: "100%" }} className="fade-up">
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <EggVisual size={72} />
            <h2 style={{ marginTop: 16, fontSize: "1.4rem", letterSpacing: "-0.02em" }}>
              {entityName} is listening.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", marginTop: 6 }}>
              Your answer becomes a founding memory — the most important thing {entityName} will ever know.
            </p>
          </div>
          <form onSubmit={handleQuestionSubmit}>
            <label style={{ display: "block", textAlign: "center", fontSize: "1.1rem", fontWeight: 600, marginBottom: 16 }}>
              What matters most to you right now?
            </label>
            <textarea
              ref={inputRef}
              value={question}
              onChange={e => setQuestion(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleQuestionSubmit(e as unknown as React.FormEvent);
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
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "#60B8F0")}
              onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
              <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>⌘ + Enter to send</span>
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
        </div>
      )}

      {/* ── Phase: Responding / complete ──────────────────────────────────────── */}
      {(phase === "responding" || phase === "complete") && (
        <div style={{ maxWidth: 480, width: "100%" }} className="fade-up">
          <div
            style={{
              background: "rgba(96,184,240,0.08)", border: "1px solid rgba(96,184,240,0.2)",
              borderRadius: 16, padding: "16px 20px", marginBottom: 16,
            }}
          >
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>You said</p>
            <p style={{ color: "#fff" }}>{question}</p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: "16px 20px", maxHeight: 220, overflowY: "auto",
            }}
          >
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>
              {entityName}
            </p>
            <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
              {response}
              {phase === "responding" && (
                <span style={{
                  display: "inline-block", width: 2, height: 16,
                  background: "#60B8F0", marginLeft: 3,
                  animation: "pulse 1s infinite",
                }} />
              )}
            </p>
          </div>

          {phase === "complete" && (
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>
                This moment is {entityName}&apos;s founding memory.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={() => router.push(`/register?entity=${encodeURIComponent(entityName)}&style=${selectedStyle}&interests=${selectedInterests.join(",")}`)}
                  style={{
                    padding: "13px 28px",
                    background: "linear-gradient(135deg, #60B8F0, #7CC47A)",
                    border: "none", borderRadius: 100,
                    color: "#fff", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
                  }}
                >
                  Create Account →
                </button>
                <button
                  onClick={() => { setPhase("question"); setQuestion(""); setResponse(""); }}
                  style={{
                    padding: "13px 24px",
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 100, color: "rgba(255,255,255,0.6)",
                    fontWeight: 600, fontSize: "0.95rem", cursor: "pointer",
                  }}
                >
                  Ask again
                </button>
              </div>
              <p style={{ marginTop: 16, fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>
                Already have an account?{" "}
                <a href="/login" style={{ color: "#60B8F0", textDecoration: "underline" }}>Sign in</a>
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
