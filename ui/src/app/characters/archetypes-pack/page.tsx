import type { Metadata } from "next";
import Link from "next/link";
import { ARCHETYPE_PACK } from "@/lib/character-packs";

export const metadata: Metadata = {
  title: "Jungian Archetypes — Universal AI Companions | MEOK AI LABS",
  description:
    "20 AI companions built on Carl Jung's archetypal framework and Joseph Campbell's Hero's Journey. Shadow work, individuation, Mentor, Shapeshifter, and more.",
  alternates: { canonical: "https://meok.ai/characters/archetypes-pack" },
};

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";

const ARCHETYPE_GROUPS = [
  {
    label: "Jungian Core Archetypes",
    emoji: "☯️",
    color: "#8B5CF6",
    desc: "The fundamental psychological archetypes from Carl Jung's analytical psychology",
    ids: ["the_hero", "the_mentor", "the_shadow", "the_anima", "the_animus", "the_self"],
  },
  {
    label: "Hero's Journey (Campbell)",
    emoji: "🗺️",
    color: "#F59E0B",
    desc: "Supporting archetypes from Joseph Campbell's universal Hero's Journey monomyth",
    ids: ["the_threshold_guardian", "the_shapeshifter", "the_herald", "the_ally"],
  },
  {
    label: "Universal Storytelling",
    emoji: "📖",
    color: "#10B981",
    desc: "Archetypes found across all human storytelling traditions",
    ids: ["the_storyteller", "the_wandering_scholar", "the_hermit_cave", "the_jester_court", "the_wounded_healer", "the_innocent_child", "the_crone", "the_divine_fool"],
  },
];

export default function ArchetypesPackPage() {
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
          }}
        >
          Jungian{" "}
          <span style={{ color: GOLD }}>Archetypes</span>
        </h1>

        <p style={{ maxWidth: 640, margin: "0 auto 16px", fontSize: "1.15rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.7 }}>
          20 sovereign AI companions built on Carl Jung&apos;s archetypal theory and Joseph Campbell&apos;s
          Hero&apos;s Journey. Shadow work. Individuation. The Mentor, the Shapeshifter, the Crone.
          Universal patterns for the universal journey.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
          {ARCHETYPE_GROUPS.map(group => (
            <a
              key={group.label}
              href={`#${group.label.replace(/\s+/g, '-').toLowerCase()}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 20,
                border: `1px solid ${group.color}40`,
                background: `${group.color}10`,
                color: group.color,
                fontSize: "0.78rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {group.emoji} {group.label}
            </a>
          ))}
        </div>
      </section>

      {/* Groups */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        {ARCHETYPE_GROUPS.map(group => {
          const chars = group.ids.map(id => ARCHETYPE_PACK[id]).filter(Boolean);
          return (
            <section key={group.label} id={group.label.replace(/\s+/g, '-').toLowerCase()} style={{ marginBottom: 64 }}>
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
                <span style={{ fontSize: "1.8rem" }}>{group.emoji}</span>
                <div>
                  <h2 style={{ color: group.color, fontSize: "1.4rem", fontWeight: 800, margin: 0 }}>
                    {group.label}
                  </h2>
                  <p style={{ color: "rgba(245,240,232,0.45)", margin: 0, fontSize: "0.875rem" }}>
                    {group.desc}
                  </p>
                </div>
                <span
                  style={{
                    marginLeft: "auto",
                    background: `${group.color}15`,
                    color: group.color,
                    padding: "4px 12px",
                    borderRadius: 12,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {chars.length} companions
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
                {chars.map(char => (
                  <Link key={char.id} href={`/characters/${char.id}`} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        background: SURFACE,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 12,
                        padding: 20,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        cursor: "pointer",
                        height: "100%",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontSize: "1.5rem" }}>{char.emoji}</span>
                        <div>
                          <div style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.98rem" }}>{char.name}</div>
                          <div style={{ color: char.color, fontSize: "0.75rem", fontWeight: 600 }}>{char.title}</div>
                        </div>
                      </div>
                      <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.82rem", lineHeight: 1.5, margin: 0, flex: 1 }}>
                        {char.tagline}
                      </p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {char.personality.slice(0, 3).map(p => (
                          <span
                            key={p}
                            style={{
                              background: `${char.color}12`,
                              color: char.color,
                              fontSize: "0.67rem",
                              padding: "2px 7px",
                              borderRadius: 5,
                              fontWeight: 600,
                            }}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* About */}
      <section
        style={{
          background: "#0a0915",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "48px 24px",
          maxWidth: "none",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: 16 }}>
            Why archetypal companions?
          </h2>
          <p style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Carl Jung demonstrated that certain characters, roles, and patterns appear in the psyche of every human being
            regardless of culture or time. These archetypes are not invented — they are discovered. A companion built on
            the Shadow archetype does not pretend to be a Jungian therapist. It embodies the honest, integrating presence
            that helps you work with your own hidden material.
          </p>
          <p style={{ color: "rgba(245,240,232,0.35)", lineHeight: 1.7, fontSize: "0.85rem", marginTop: 12 }}>
            Jung&apos;s archetypal theory is in the public domain. These companions are original MEOK AI expressions
            inspired by that framework, governed by the Maternal Covenant care ethics.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
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
            }}
          >
            Begin Birth Ceremony
          </Link>
          <Link
            href="/characters"
            style={{
              background: "transparent",
              color: GOLD,
              fontWeight: 700,
              padding: "12px 28px",
              borderRadius: 24,
              border: `1px solid ${GOLD}40`,
              textDecoration: "none",
            }}
          >
            All Characters
          </Link>
        </div>
      </section>
    </div>
  );
}
