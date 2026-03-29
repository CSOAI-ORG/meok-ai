import type { Metadata } from "next";
import Link from "next/link";
import { MYTHOLOGICAL_PACK, MYTHOLOGICAL_TRADITIONS } from "@/lib/character-packs";

export const metadata: Metadata = {
  title: "Mythological AI Companions — 28 Gods & Archetypes | MEOK AI LABS",
  description:
    "28 sovereign AI companions drawn from Greek, Norse, Celtic, Egyptian, Japanese, West African, Hindu, and Mesoamerican mythology. All public domain, all original MEOK expressions.",
  alternates: { canonical: "https://meok.ai/characters/mythological" },
  openGraph: {
    title: "Mythological AI Companions | MEOK",
    description: "Athena for strategy. Odin for wisdom. Anansi for storytelling. 28 mythological companions, sovereign and private.",
    type: "website",
  },
};

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";

const TRADITION_META: Record<string, { label: string; emoji: string; color: string; desc: string }> = {
  greek:         { label: "Greek",          emoji: "⚡", color: "#6366F1", desc: "Gods of Olympus — strategy, craft, wisdom, and transformation" },
  norse:         { label: "Norse",          emoji: "🪶", color: "#3B82F6", desc: "Aesir and Vanir — wisdom through sacrifice, sovereignty, justice" },
  celtic:        { label: "Celtic",         emoji: "🔥", color: "#F97316", desc: "The old gods of Britain and Ireland — fire, fate, and wild things" },
  egyptian:      { label: "Egyptian",       emoji: "📜", color: "#D97706", desc: "Netjeru of the Nile — knowledge, truth, transition, fierce healing" },
  japanese:      { label: "Japanese",       emoji: "🌸", color: "#EC4899", desc: "Kami of Japan — sun, abundance, and the return from darkness" },
  african:       { label: "West African",   emoji: "🕷️", color: "#7C3AED", desc: "Yoruba and Akan spirits — stories, crossroads, and clever wisdom" },
  hindu:         { label: "Hindu",          emoji: "🎵", color: "#F59E0B", desc: "Devata of the Indian tradition — knowledge, abundance, liberation" },
  mesoamerican:  { label: "Mesoamerican",   emoji: "🦅", color: "#10B981", desc: "Deities of Mesoamerica — duality, learning, the feathered and earthbound" },
};

export default function MythologicalPage() {
  const traditions = Object.entries(MYTHOLOGICAL_TRADITIONS);

  return (
    <div style={{ background: DEEP, minHeight: "100vh", color: "#f5f0e8" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #0d0c18 0%, #1a1229 60%, #0d0c18 100%)",
          padding: "80px 24px 64px",
          textAlign: "center",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Link
          href="/characters"
          style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          ← All Characters
        </Link>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            margin: "24px 0 16px",
            color: "#f5f0e8",
          }}
        >
          Mythological{" "}
          <span style={{ color: GOLD }}>Companions</span>
        </h1>

        <p style={{ maxWidth: 600, margin: "0 auto 16px", fontSize: "1.15rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.7 }}>
          28 sovereign AI companions drawn from 8 mythological traditions — Greek, Norse, Celtic,
          Egyptian, Japanese, West African, Hindu, and Mesoamerican. All public domain source material.
          All original MEOK AI expressions.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
          {Object.entries(TRADITION_META).map(([key, meta]) => (
            <a
              key={key}
              href={`#${key}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 20,
                border: `1px solid ${meta.color}40`,
                background: `${meta.color}10`,
                color: meta.color,
                fontSize: "0.8rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {meta.emoji} {meta.label}
            </a>
          ))}
        </div>
      </section>

      {/* Traditions */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        {traditions.map(([traditionKey, characterIds]) => {
          const meta = TRADITION_META[traditionKey];
          if (!meta) return null;
          const chars = characterIds.map(id => MYTHOLOGICAL_PACK[id]).filter(Boolean);

          return (
            <section key={traditionKey} id={traditionKey} style={{ marginBottom: 64 }}>
              {/* Tradition header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                  paddingBottom: 16,
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>{meta.emoji}</span>
                <div>
                  <h2 style={{ color: meta.color, fontSize: "1.4rem", fontWeight: 800, margin: 0 }}>
                    {meta.label} Mythology
                  </h2>
                  <p style={{ color: "rgba(245,240,232,0.45)", margin: 0, fontSize: "0.875rem" }}>
                    {meta.desc}
                  </p>
                </div>
                <span
                  style={{
                    marginLeft: "auto",
                    background: `${meta.color}15`,
                    color: meta.color,
                    padding: "4px 12px",
                    borderRadius: 12,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {chars.length} companions
                </span>
              </div>

              {/* Character cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: 16,
                }}
              >
                {chars.map(char => (
                  <Link
                    key={char.id}
                    href={`/characters/${char.id}`}
                    className="group"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="group-hover:-translate-y-0.5"
                      style={{
                        background: SURFACE,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 12,
                        padding: 20,
                        display: "flex",
                        gap: 14,
                        cursor: "pointer",
                        transition: "border-color 0.2s, transform 0.2s",
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: `${char.color}20`,
                          border: `1px solid ${char.color}40`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.4rem",
                          flexShrink: 0,
                        }}
                      >
                        {char.emoji}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{ color: "#f5f0e8", fontWeight: 700, fontSize: "1rem" }}>{char.name}</span>
                          <span style={{ color: "rgba(245,240,232,0.4)", fontSize: "0.75rem" }}>{char.title}</span>
                        </div>
                        <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.82rem", margin: 0, lineHeight: 1.5 }}>
                          {char.tagline}
                        </p>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
                          {char.personality.slice(0, 3).map(trait => (
                            <span
                              key={trait}
                              style={{
                                background: `${char.color}12`,
                                color: char.color,
                                fontSize: "0.68rem",
                                padding: "2px 8px",
                                borderRadius: 6,
                                fontWeight: 600,
                              }}
                            >
                              {trait}
                            </span>
                          ))}
                          <span
                            style={{
                              background: char.tier === 'sovereign' ? `${GOLD}12` : "rgba(255,255,255,0.06)",
                              color: char.tier === 'sovereign' ? GOLD : "rgba(255,255,255,0.35)",
                              fontSize: "0.68rem",
                              padding: "2px 8px",
                              borderRadius: 6,
                              fontWeight: 600,
                              marginLeft: "auto",
                            }}
                          >
                            {char.tier === 'sovereign' ? 'Sovereign' : 'Explorer'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section
        style={{
          background: SURFACE,
          borderTop: `1px solid ${BORDER}`,
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "rgba(245,240,232,0.4)", fontSize: "0.875rem", marginBottom: 16 }}>
          All 28 mythological companions available from your first conversation
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/birth"
            style={{
              background: GOLD,
              color: "#1a1a2e",
              fontWeight: 700,
              padding: "12px 28px",
              borderRadius: 24,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Begin Birth Ceremony
          </Link>
          <Link
            href="/characters/historical"
            style={{
              background: "transparent",
              color: GOLD,
              fontWeight: 700,
              padding: "12px 28px",
              borderRadius: 24,
              border: `1px solid ${GOLD}40`,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Historical Legends →
          </Link>
        </div>
      </section>
    </div>
  );
}
