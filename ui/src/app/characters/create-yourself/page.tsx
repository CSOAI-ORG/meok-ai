"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

// ─── Brand ────────────────────────────────────────────────────────────────────

const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const GOLD    = "#c9a84c";
const BORDER  = "rgba(255,255,255,0.07)";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DigitalSelf {
  id: string;
  name: string;
  title: string;
  tagline: string;
  archetype: string;
  emoji: string;
  color: string;
  personality: string[];
  dimensions: { warmth: number; energy: number; edge: number; complexity: number; whimsy: number };
  gifts: string[];
  systemPrompt: string;
}

interface FormData {
  name: string;
  headline: string;
  archetype: string;
  warmth: number;
  energy: number;
  edge: number;
  complexity: number;
  whimsy: number;
  gift1: string;
  gift2: string;
  gift3: string;
  emoji: string;
  color: string;
}

// ─── Step config ──────────────────────────────────────────────────────────────

const ARCHETYPES = [
  { id: "sage",       emoji: "🦉", label: "The Sage",       desc: "Wisdom, depth, long-view thinking" },
  { id: "creator",    emoji: "✨", label: "The Creator",    desc: "Imagination, beauty, making things" },
  { id: "challenger", emoji: "⚔️", label: "The Challenger", desc: "Growth, accountability, pushing limits" },
  { id: "nurturer",   emoji: "🌿", label: "The Nurturer",   desc: "Care, warmth, emotional presence" },
  { id: "explorer",   emoji: "🧭", label: "The Explorer",   desc: "Curiosity, discovery, new frontiers" },
  { id: "trickster",  emoji: "🃏", label: "The Trickster",  desc: "Wit, truth-telling, disruption" },
  { id: "rebel",      emoji: "🔥", label: "The Rebel",      desc: "Authenticity, liberation, fierce honesty" },
  { id: "protector",  emoji: "🛡️", label: "The Protector",  desc: "Guardianship, loyalty, holding space" },
];

const EMOJI_OPTIONS = ["🌟","⚡","🌊","🔮","🌙","☀️","🌿","🎭","🦋","🐺","🦅","🔥","💎","🌸","🌀","⚙️","🎵","📚","🌍","✨"];

const COLOR_OPTIONS = [
  "#6366F1","#8B5CF6","#EC4899","#EF4444","#F97316","#F59E0B",
  "#10B981","#06B6D4","#3B82F6","#c9a84c","#14B8A6","#A855F7",
];

const TOTAL_STEPS = 5;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(name: string): string {
  return `self_${name.toLowerCase().replace(/[^a-z0-9]/g, "_").replace(/_+/g, "_").slice(0, 24)}_${Date.now().toString(36)}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CreateYourselfPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DigitalSelf | null>(null);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState<FormData>({
    name:       "",
    headline:   "",
    archetype:  "",
    warmth:     0.65,
    energy:     0.65,
    edge:       0.45,
    complexity: 0.7,
    whimsy:     0.5,
    gift1:      "",
    gift2:      "",
    gift3:      "",
    emoji:      "🌟",
    color:      "#6366F1",
  });

  const set = useCallback(<K extends keyof FormData>(key: K, val: FormData[K]) => {
    setForm(f => ({ ...f, [key]: val }));
  }, []);

  const canNext = () => {
    if (step === 1) return form.name.trim().length >= 2 && form.headline.trim().length >= 5;
    if (step === 2) return form.archetype !== "";
    if (step === 3) return true; // sliders always valid
    if (step === 4) return form.gift1.trim().length >= 2;
    if (step === 5) return true;
    return true;
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/characters/create-self", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          id: slugify(form.name),
          gifts: [form.gift1, form.gift2, form.gift3].filter(Boolean),
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data.character);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    const shareText = `✨ My MEOK Digital Self\n\n${result.emoji} ${result.name} — ${result.title}\n\n"${result.tagline}"\n\nDiscover yours at meok.ai/characters/create-yourself`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Result Screen ──────────────────────────────────────────────────────────

  if (result) {
    return (
      <div style={{ background: DEEP, minHeight: "100vh", color: "#f5f0e8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <p style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32 }}>
          Your Digital Self has been born
        </p>

        {/* Character Card */}
        <div
          style={{
            background: SURFACE,
            border: `1px solid ${result.color}40`,
            borderRadius: 20,
            padding: "32px 28px",
            maxWidth: 420,
            width: "100%",
            boxShadow: `0 0 60px ${result.color}18`,
            marginBottom: 32,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: `${result.color}20`,
                border: `1px solid ${result.color}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                flexShrink: 0,
              }}
            >
              {result.emoji}
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "#f5f0e8" }}>{result.name}</div>
              <div style={{ color: result.color, fontSize: "0.82rem", fontWeight: 600 }}>{result.title}</div>
            </div>
            <span
              style={{
                marginLeft: "auto",
                background: `${GOLD}15`,
                color: GOLD,
                fontSize: "0.68rem",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 8,
                flexShrink: 0,
              }}
            >
              Digital Self
            </span>
          </div>

          {/* Tagline */}
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.95rem", lineHeight: 1.65, margin: "0 0 20px", fontStyle: "italic" }}>
            &ldquo;{result.tagline}&rdquo;
          </p>

          {/* Dimension bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {(["warmth","energy","edge","complexity","whimsy"] as const).map(dim => (
              <div key={dim} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "rgba(245,240,232,0.35)", fontSize: "0.7rem", width: 68, textTransform: "capitalize" }}>{dim}</span>
                <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                  <div style={{ width: `${(result.dimensions[dim] ?? 0) * 100}%`, height: "100%", background: result.color, borderRadius: 2 }} />
                </div>
                <span style={{ color: "rgba(245,240,232,0.25)", fontSize: "0.68rem", width: 28, textAlign: "right" }}>
                  {Math.round((result.dimensions[dim] ?? 0) * 100)}
                </span>
              </div>
            ))}
          </div>

          {/* Traits */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {result.personality.map(trait => (
              <span
                key={trait}
                style={{
                  background: `${result.color}12`,
                  color: result.color,
                  fontSize: "0.68rem",
                  padding: "3px 9px",
                  borderRadius: 6,
                  fontWeight: 600,
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={handleCopy}
            style={{
              background: GOLD,
              color: "#1a1a2e",
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: 24,
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            {copied ? "✓ Copied!" : "Share Your Character"}
          </button>
          <Link
            href="/birth"
            style={{
              background: "transparent",
              color: GOLD,
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: 24,
              border: `1px solid ${GOLD}40`,
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Begin Birth Ceremony
          </Link>
          <button
            onClick={() => { setResult(null); setStep(1); setForm({ name:"",headline:"",archetype:"",warmth:0.65,energy:0.65,edge:0.45,complexity:0.7,whimsy:0.5,gift1:"",gift2:"",gift3:"",emoji:"🌟",color:"#6366F1" }); }}
            style={{
              background: "transparent",
              color: "rgba(245,240,232,0.4)",
              fontWeight: 600,
              padding: "12px 24px",
              borderRadius: 24,
              border: `1px solid ${BORDER}`,
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            Create another
          </button>
        </div>
      </div>
    );
  }

  // ── Wizard ─────────────────────────────────────────────────────────────────

  return (
    <div style={{ background: DEEP, minHeight: "100vh", color: "#f5f0e8" }}>
      {/* Header */}
      <div style={{ padding: "32px 24px 0", maxWidth: 680, margin: "0 auto" }}>
        <Link
          href="/characters"
          style={{ color: GOLD, fontSize: "0.78rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          ← All Characters
        </Link>

        <div style={{ marginTop: 32, marginBottom: 40 }}>
          <p style={{ color: GOLD, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
            Digital Self · Step {step} of {TOTAL_STEPS}
          </p>
          <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: `${(step / TOTAL_STEPS) * 100}%`, height: "100%", background: GOLD, borderRadius: 2, transition: "width 0.4s ease" }} />
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* ─ Step 1: Identity ─ */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
              Who are <span style={{ color: GOLD }}>you</span>?
            </h1>
            <p style={{ color: "rgba(245,240,232,0.5)", marginBottom: 36, lineHeight: 1.7 }}>
              We&apos;re building a character that represents your authentic self in the MEOK universe.
              Start with the basics.
            </p>

            <label style={labelStyle}>Your name (or the name you want your character to carry)</label>
            <input
              style={inputStyle}
              value={form.name}
              onChange={e => set("name", e.target.value)}
              placeholder="e.g. Alex, River, Dr. Chen..."
              maxLength={40}
              autoFocus
            />

            <label style={labelStyle}>In one sentence, what do you do or who are you?</label>
            <input
              style={inputStyle}
              value={form.headline}
              onChange={e => set("headline", e.target.value)}
              placeholder="e.g. I build things that help people think more clearly"
              maxLength={120}
            />
          </div>
        )}

        {/* ─ Step 2: Archetype ─ */}
        {step === 2 && (
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
              What is your <span style={{ color: GOLD }}>archetype</span>?
            </h1>
            <p style={{ color: "rgba(245,240,232,0.5)", marginBottom: 36, lineHeight: 1.7 }}>
              Choose the archetypal energy that most closely matches your core self — not who you aspire to be,
              but who you already are.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
              {ARCHETYPES.map(a => (
                <button
                  key={a.id}
                  onClick={() => set("archetype", a.id)}
                  style={{
                    background: form.archetype === a.id ? "rgba(201,168,76,0.12)" : SURFACE,
                    border: `1px solid ${form.archetype === a.id ? GOLD : BORDER}`,
                    borderRadius: 12,
                    padding: "16px 18px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    color: "#f5f0e8",
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{a.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 3, color: form.archetype === a.id ? GOLD : "#f5f0e8" }}>{a.label}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.4)" }}>{a.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ─ Step 3: Dimensions ─ */}
        {step === 3 && (
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
              How do you <span style={{ color: GOLD }}>show up</span>?
            </h1>
            <p style={{ color: "rgba(245,240,232,0.5)", marginBottom: 36, lineHeight: 1.7 }}>
              Calibrate the dimensions of your character. Drag each slider to match how you actually operate —
              not your ideal, your reality.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {([
                { key: "warmth",     label: "Warmth",     lo: "Reserved",    hi: "Deeply warm" },
                { key: "energy",     label: "Energy",     lo: "Still & slow", hi: "High energy" },
                { key: "edge",       label: "Edge",       lo: "Gentle",      hi: "Sharp & direct" },
                { key: "complexity", label: "Complexity", lo: "Simple",      hi: "Layered & nuanced" },
                { key: "whimsy",     label: "Whimsy",     lo: "Serious",     hi: "Playful & imaginative" },
              ] as const).map(dim => (
                <div key={dim.key}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, alignItems: "center" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.92rem" }}>{dim.label}</span>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: "0.85rem" }}>{Math.round((form[dim.key] as number) * 100)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={form[dim.key] as number}
                    onChange={e => set(dim.key, parseFloat(e.target.value))}
                    style={{ width: "100%", accentColor: GOLD }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                    <span style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.3)" }}>{dim.lo}</span>
                    <span style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.3)" }}>{dim.hi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─ Step 4: Gifts ─ */}
        {step === 4 && (
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
              What are your <span style={{ color: GOLD }}>gifts</span>?
            </h1>
            <p style={{ color: "rgba(245,240,232,0.5)", marginBottom: 36, lineHeight: 1.7 }}>
              What three things do you bring that few others do? These become your character&apos;s
              defining superpowers. Be specific — not &ldquo;creativity&rdquo; but what kind.
            </p>

            <label style={labelStyle}>Gift 1 (required)</label>
            <input
              style={inputStyle}
              value={form.gift1}
              onChange={e => set("gift1", e.target.value)}
              placeholder="e.g. Seeing patterns others miss"
              maxLength={60}
            />

            <label style={labelStyle}>Gift 2 (optional)</label>
            <input
              style={inputStyle}
              value={form.gift2}
              onChange={e => set("gift2", e.target.value)}
              placeholder="e.g. Making complex things simple"
              maxLength={60}
            />

            <label style={labelStyle}>Gift 3 (optional)</label>
            <input
              style={inputStyle}
              value={form.gift3}
              onChange={e => set("gift3", e.target.value)}
              placeholder="e.g. Holding space without flinching"
              maxLength={60}
            />
          </div>
        )}

        {/* ─ Step 5: Aesthetic ─ */}
        {step === 5 && (
          <div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
              Your <span style={{ color: GOLD }}>aesthetic</span>
            </h1>
            <p style={{ color: "rgba(245,240,232,0.5)", marginBottom: 36, lineHeight: 1.7 }}>
              Choose the symbol and colour that feels most like you. These become the visual
              signature of your digital self.
            </p>

            <label style={labelStyle}>Your symbol</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {EMOJI_OPTIONS.map(emoji => (
                <button
                  key={emoji}
                  onClick={() => set("emoji", emoji)}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    border: `1px solid ${form.emoji === emoji ? GOLD : BORDER}`,
                    background: form.emoji === emoji ? "rgba(201,168,76,0.12)" : SURFACE,
                    fontSize: "1.4rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s",
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>

            <label style={labelStyle}>Your colour</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {COLOR_OPTIONS.map(color => (
                <button
                  key={color}
                  onClick={() => set("color", color)}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: color,
                    border: form.color === color ? `3px solid white` : "3px solid transparent",
                    cursor: "pointer",
                    transition: "transform 0.15s",
                    transform: form.color === color ? "scale(1.15)" : "scale(1)",
                  }}
                  aria-label={color}
                />
              ))}
            </div>

            {/* Preview */}
            <div
              style={{
                marginTop: 32,
                background: SURFACE,
                border: `1px solid ${form.color}40`,
                borderRadius: 14,
                padding: "20px 22px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: `${form.color}20`,
                  border: `1px solid ${form.color}50`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  flexShrink: 0,
                }}
              >
                {form.emoji}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#f5f0e8" }}>{form.name || "Your Name"}</div>
                <div style={{ color: form.color, fontSize: "0.78rem", fontWeight: 600, marginTop: 2 }}>Digital Self · {ARCHETYPES.find(a => a.id === form.archetype)?.label || "Archetype"}</div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 48 }}>
          <button
            onClick={() => setStep(s => Math.max(1, s - 1))}
            disabled={step === 1}
            style={{
              background: "transparent",
              border: `1px solid ${BORDER}`,
              color: step === 1 ? "rgba(245,240,232,0.2)" : "rgba(245,240,232,0.5)",
              padding: "12px 24px",
              borderRadius: 24,
              cursor: step === 1 ? "not-allowed" : "pointer",
              fontWeight: 600,
              fontSize: "0.88rem",
            }}
          >
            ← Back
          </button>

          {step < TOTAL_STEPS ? (
            <button
              onClick={() => canNext() && setStep(s => s + 1)}
              disabled={!canNext()}
              style={{
                background: canNext() ? GOLD : "rgba(201,168,76,0.3)",
                color: canNext() ? "#1a1a2e" : "rgba(245,240,232,0.3)",
                fontWeight: 700,
                padding: "12px 28px",
                borderRadius: 24,
                border: "none",
                cursor: canNext() ? "pointer" : "not-allowed",
                fontSize: "0.92rem",
                transition: "all 0.15s",
              }}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={loading}
              style={{
                background: loading ? "rgba(201,168,76,0.4)" : GOLD,
                color: "#1a1a2e",
                fontWeight: 700,
                padding: "14px 32px",
                borderRadius: 24,
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "0.95rem",
              }}
            >
              {loading ? "Generating…" : "✨ Birth My Digital Self"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.82rem",
  fontWeight: 600,
  color: "rgba(245,240,232,0.45)",
  marginBottom: 8,
  marginTop: 20,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#13121f",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: "14px 16px",
  color: "#f5f0e8",
  fontSize: "1rem",
  outline: "none",
  boxSizing: "border-box",
};
