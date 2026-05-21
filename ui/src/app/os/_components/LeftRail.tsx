"use client";

/**
 * LeftRail — model + character + sovereign mode picker.
 *
 * Day-2 skeleton: static placeholders. Real Zustand-backed selectors land in
 * Day 3 (Fri 22 May 2026) per the architecture plan.
 */

const GOLD = "#c9a84c";
const MUTED = "rgba(255,255,255,0.55)";
const BORDER = "rgba(255,255,255,0.08)";

const PROVIDERS = [
  { id: "claude-4.7", label: "Claude Opus 4.7", icon: "🟣" },
  { id: "gpt-5", label: "GPT-5", icon: "⚪" },
  { id: "gemini-2.5", label: "Gemini 2.5 Pro", icon: "🔵" },
  { id: "llama-3.3", label: "Llama 3.3 70B", icon: "🟢" },
  { id: "step-3.6", label: "Step 3.6 Flash", icon: "🟡" },
  { id: "deepseek", label: "DeepSeek-R1", icon: "🟠" },
  { id: "qwen", label: "Qwen 2.5", icon: "🔴" },
  { id: "kimi-k2", label: "Kimi K2.5", icon: "🟤" },
  { id: "mistral", label: "Mistral Large", icon: "⚫" },
  { id: "ollama-local", label: "Ollama (local)", icon: "🔘" },
];

const CHARACTERS = [
  { id: "aria", label: "Aria", desc: "Maternal companion" },
  { id: "sage", label: "Sage", desc: "Strategic advisor" },
  { id: "luna", label: "Luna", desc: "Creative spark" },
  { id: "gabriel", label: "Gabriel", desc: "Guardian / safety" },
  { id: "marcus", label: "Marcus", desc: "Stoic builder" },
  { id: "shanti", label: "Shanti", desc: "Calm coach" },
];

const MODES = ["cloud", "local", "vast"] as const;

export default function LeftRail() {
  return (
    <div style={{ padding: "1rem", fontSize: 14 }}>
      {/* ── Section: provider ─────────────────────────────── */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: ".5rem" }}>
          Provider
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 4 }}>
          {PROVIDERS.map((p) => (
            <li key={p.id}>
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: ".5rem .7rem",
                  background: "transparent",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  color: "inherit",
                  cursor: "pointer",
                  fontSize: 13,
                  display: "flex",
                  gap: ".5rem",
                  alignItems: "center",
                }}
                disabled
                title="Provider select wiring lands on Day 3 (Fri 22 May)"
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Section: character ───────────────────────────── */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: ".5rem" }}>
          Character
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 4 }}>
          {CHARACTERS.map((c) => (
            <li key={c.id}>
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: ".5rem .7rem",
                  background: "transparent",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  color: "inherit",
                  cursor: "pointer",
                  fontSize: 13,
                }}
                disabled
              >
                <div style={{ fontWeight: 600 }}>{c.label}</div>
                <div style={{ fontSize: 11, color: MUTED }}>{c.desc}</div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Section: sovereign mode ──────────────────────── */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: ".5rem" }}>
          Sovereign mode
        </h3>
        <div style={{ display: "flex", gap: 4, padding: 4, background: "rgba(0,0,0,0.3)", borderRadius: 10 }}>
          {MODES.map((m) => (
            <button
              key={m}
              style={{
                flex: 1,
                padding: ".4rem",
                background: m === "cloud" ? GOLD : "transparent",
                color: m === "cloud" ? "#0d0c18" : MUTED,
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: m === "cloud" ? 700 : 500,
                textTransform: "capitalize",
              }}
              disabled
            >
              {m}
            </button>
          ))}
        </div>
      </section>

      {/* ── Section: sessions ────────────────────────────── */}
      <section>
        <h3 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: ".5rem" }}>
          Sessions
        </h3>
        <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.5, margin: 0 }}>
          Session history lands on Day 4 (Sat 23 May). For now, every page
          load starts a fresh in-memory session.
        </p>
      </section>
    </div>
  );
}
