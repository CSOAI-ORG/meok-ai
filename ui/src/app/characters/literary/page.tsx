import type { Metadata } from "next";
import Link from "next/link";
import { LITERARY_PACK, LITERARY_GENRES } from "@/lib/character-packs";

export const metadata: Metadata = {
  title: "Literary Classics — AI Companions Inspired by Public Domain Literature | MEOK AI LABS",
  description:
    "20 sovereign AI companions inspired by iconic characters from public domain literature — detectives, heroes, gothic explorers, and philosophers. All pre-1928. All original MEOK expressions.",
  alternates: { canonical: "https://meok.ai/characters/literary" },
  openGraph: {
    title: "Literary Classics | MEOK AI Companions",
    description: "Sherlock Holmes for deductive reasoning. Hamlet for philosophical depth. Elizabeth Bennet for social intelligence. 20 literary companion archetypes.",
    type: "website",
  },
};

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";

const GENRE_META: Record<string, { label: string; emoji: string; color: string; desc: string }> = {
  detective:     { label: "Detectives & Analysts",       emoji: "🔍", color: "#4B5563", desc: "Masters of observation, deduction, and the relentless pursuit of truth" },
  classic:       { label: "Classic Heroes & Anti-Heroes", emoji: "⚔️", color: "#7C3AED", desc: "The visionaries, survivors, rebels, and philosophers of the Western canon" },
  social:        { label: "Wit & Society",               emoji: "🪡", color: "#BE185D", desc: "Characters who navigated — and subverted — the social world with intelligence" },
  gothic:        { label: "Gothic & Philosophical",      emoji: "🌑", color: "#374151", desc: "The dark explorers of creation, duality, beauty, and the cost of ambition" },
  philosophical: { label: "Philosophers",                emoji: "🏛️", color: "#92400E", desc: "The great questioners whose method outlived their answers" },
  adventure:     { label: "Adventurers",                 emoji: "🛶", color: "#15803D", desc: "Treasure hunters, obsessives, river wanderers, and pirates of convenient loyalty" },
};

export default function LiteraryPage() {
  const genres = Object.entries(LITERARY_GENRES);

  return (
    <div style={{ background: DEEP, minHeight: "100vh", color: "#f5f0e8" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #0d0c18 0%, #1a1528 60%, #0d0c18 100%)",
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
          Literary{" "}
          <span style={{ color: GOLD }}>Classics</span>
        </h1>

        <p style={{ maxWidth: 640, margin: "0 auto 16px", fontSize: "1.15rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.7 }}>
          20 sovereign AI companions inspired by the most enduring characters in public domain
          literature — detectives, heroes, gothic explorers, social wits, and philosophers.
          All source works published before 1928. All companions are original MEOK expressions.
        </p>

        <p style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.8rem", maxWidth: 480, margin: "0 auto" }}>
          Note: These companions are inspired by literary characters, not simulations of them.
          They embody the intellectual tradition and spirit of their inspiration.
        </p>
      </section>

      {/* Genres */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        {genres.map(([genreKey, characterIds]) => {
          const meta = GENRE_META[genreKey];
          if (!meta) return null;
          const chars = characterIds.map(id => LITERARY_PACK[id]).filter(Boolean);

          return (
            <section key={genreKey} id={genreKey} style={{ marginBottom: 64 }}>
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
                    {meta.label}
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

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
                {chars.map(char => (
                  <Link key={char.id} href={`/characters/${char.id}`} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        background: SURFACE,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 12,
                        padding: 20,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 10,
                            background: `${char.color}18`,
                            border: `1px solid ${char.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.3rem",
                            flexShrink: 0,
                          }}
                        >
                          {char.emoji}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "1rem" }}>{char.name}</div>
                          <div style={{ color: char.color, fontSize: "0.78rem", fontWeight: 600 }}>{char.title}</div>
                        </div>
                      </div>

                      <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.83rem", lineHeight: 1.55, margin: 0, flex: 1 }}>
                        {char.tagline}
                      </p>

                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                        {char.tags.filter(t => !['literary', 'public-domain'].includes(t)).slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              color: "rgba(245,240,232,0.4)",
                              fontSize: "0.67rem",
                              padding: "2px 8px",
                              borderRadius: 5,
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        <span
                          style={{
                            marginLeft: "auto",
                            background: char.tier === 'sovereign' ? `${GOLD}12` : "rgba(255,255,255,0.05)",
                            color: char.tier === 'sovereign' ? GOLD : "rgba(255,255,255,0.3)",
                            fontSize: "0.68rem",
                            padding: "2px 10px",
                            borderRadius: 6,
                            fontWeight: 700,
                          }}
                        >
                          {char.tier === 'sovereign' ? 'Sovereign' : 'Free'}
                        </span>
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
        <p style={{ color: "rgba(245,240,232,0.4)", fontSize: "0.875rem", marginBottom: 24 }}>
          All literary companions available in the MEOK character universe
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
            ← Historical Legends
          </Link>
          <Link
            href="/characters/mythological"
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
            Mythological Pack →
          </Link>
        </div>
      </section>
    </div>
  );
}
