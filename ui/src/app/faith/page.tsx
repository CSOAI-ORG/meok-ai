import type { Metadata } from "next";
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Multi-Faith AI Companion | MEOK AI LABS",
  description:
    "MEOK supports 47 spiritual traditions — from Christianity to Buddhism, Islam to Judaism, Hinduism to indigenous wisdom. A tool for reflection, never a replacement for your community.",
  openGraph: {
    title: "Multi-Faith AI Companion | MEOK AI LABS",
    description:
      "MEOK supports 47 spiritual traditions. A companion for your spiritual journey, not a replacement for it. Connected to Quran.com, Sefaria, BaniDB, and SuttaCentral.",
    type: "website",
    url: "https://meok.ai/faith",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Multi-Faith+AI+Companion&desc=47+spiritual+traditions.+A+tool+for+reflection,+never+a+replacement+for+your+community.",
        width: 1200,
        height: 630,
        alt: "Multi-Faith AI Companion — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Faith AI Companion | MEOK AI LABS",
    description:
      "MEOK supports 47 spiritual traditions. A companion for your spiritual journey, not a replacement for it.",
    images: [
      "https://meok.ai/api/og?title=Multi-Faith+AI+Companion&desc=47+spiritual+traditions.+A+tool+for+reflection,+never+a+replacement+for+your+community.",
    ],
  },
  alternates: { canonical: "https://meok.ai/faith" },
};

// ─── Data ──────────────────────────────────────────────────────────────────

const TRADITIONS = [
  {
    faith: "Christianity",
    companion: "Ananda",
    archetype: "Seeker",
    description: "Prayer reflection, Bible study companion",
    icon: "✝️",
    accent: "#c8a96e",
  },
  {
    faith: "Islam",
    companion: "Gabriel",
    archetype: "Seeker",
    description: "Quran study, daily prayer reminders (AlAdhan API)",
    icon: "☪️",
    accent: "#4a9e6b",
  },
  {
    faith: "Judaism",
    companion: "Miriam",
    archetype: "Scholar",
    description: "Torah study partner, Shabbat preparation",
    icon: "✡️",
    accent: "#6b9fd4",
  },
  {
    faith: "Buddhism",
    companion: "Lotus",
    archetype: "Mystic",
    description: "Meditation guidance, NORBU-inspired wisdom",
    icon: "☸️",
    accent: "#d4af37",
  },
  {
    faith: "Hinduism",
    companion: "Devi",
    archetype: "Spiritual",
    description: "Bhagavad Gita reflection, mantra practice",
    icon: "🕉️",
    accent: "#e07340",
  },
  {
    faith: "Sikhism",
    companion: "Arjan",
    archetype: "Spiritual",
    description: "Gurbani study, Waheguru affirmations",
    icon: "🪯",
    accent: "#c4a35a",
  },
  {
    faith: "Secular Mindfulness",
    companion: "Sol",
    archetype: "Healer",
    description: "Meditation, gratitude, contemplative practice",
    icon: "🌿",
    accent: "#7ec8a4",
  },
  {
    faith: "Indigenous Wisdom",
    companion: "Terra",
    archetype: "Elemental",
    description: "Earth-based spirituality, ancestral wisdom",
    icon: "🌎",
    accent: "#8b6e4e",
  },
];

const COMMITMENTS = [
  {
    title: "We never interpret scripture",
    body: "MEOK reflects questions back to you and your community. It surfaces text, context, and tradition — but interpretation belongs to your teachers, your community, and your conscience.",
    icon: "📖",
  },
  {
    title: "Your tradition, not ours",
    body: "No spiritual authority is claimed. Your imam, rabbi, priest, minister, or teacher leads. MEOK is a study aid, a reflection space — never a substitute for human spiritual guidance.",
    icon: "🕊️",
  },
  {
    title: "Data stays yours",
    body: "Spiritual reflections are encrypted end-to-end. Never shared with third parties. Never used for training. Your prayers, your doubts, your practices — they belong only to you.",
    icon: "🔐",
  },
];

const SACRED_SOURCES = [
  {
    name: "Quran.com",
    tradition: "Islam",
    description: "Multilingual Quran with tafsir (commentary) access",
    url: "https://quran.com",
  },
  {
    name: "Sefaria",
    tradition: "Judaism",
    description: "Torah, Talmud, and the full Jewish textual library",
    url: "https://sefaria.org",
  },
  {
    name: "BaniDB",
    tradition: "Sikhism",
    description: "Complete Gurbani database with multiple translations",
    url: "https://banidb.com",
  },
  {
    name: "SuttaCentral",
    tradition: "Buddhism",
    description: "Early Buddhist texts across Pali, Sanskrit, and Chinese",
    url: "https://suttacentral.net",
  },
];

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Multi-Faith AI Companion | MEOK AI LABS",
  description:
    "MEOK supports 47 spiritual traditions. A companion for your spiritual journey, not a replacement for it.",
  url: "https://meok.ai/faith",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
};

// ─── Page ──────────────────────────────────────────────────────────────────

export default function FaithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          background: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "6rem 1.5rem 4rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(212, 175, 55, 0.1)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              borderRadius: "2rem",
              padding: "0.4rem 1.2rem",
              fontSize: "0.8rem",
              color: "#d4af37",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            47 Civilisational Traditions
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Your faith.{" "}
            <span style={{ color: "#d4af37" }}>Your companion.</span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#aaa",
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto 2.5rem",
            }}
          >
            MEOK supports 47 spiritual traditions — from Christianity to
            Buddhism, Islam to Judaism, Hinduism to indigenous wisdom. A tool
            for reflection, never a replacement for your community.
          </p>

          <Link
            href="/start"
            style={{
              display: "inline-block",
              background: "#d4af37",
              color: "#0a0a0a",
              padding: "0.85rem 2.5rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Find your spiritual companion
          </Link>
        </section>

        {/* ── GEO: What is a multi-faith AI companion? ─────────────────── */}
        <section
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#d4af37",
              marginBottom: "1rem",
            }}
          >
            What is a multi-faith AI companion?
          </h2>
          <p style={{ color: "#aaa", lineHeight: 1.7, maxWidth: "720px" }}>
            A multi-faith AI companion is a private, conversational tool that
            supports personal spiritual practice across religious traditions. It
            surfaces scripture, facilitates reflection, and tracks spiritual
            habits — without replacing the human teachers, priests, imams, or
            rabbis who lead those traditions. MEOK is the first AI platform to
            support all major world religions in a single, sovereign, encrypted
            environment.
          </p>
        </section>

        {/* ── Traditions Grid ───────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 1.5rem 6rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "0.75rem",
            }}
          >
            Companions across every tradition
          </h2>
          <p
            style={{
              color: "#888",
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            Each companion is aligned to a specific tradition and archetype —
            designed as a thoughtful study partner, not a spiritual authority.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {TRADITIONS.map((t) => (
              <div
                key={t.faith}
                style={{
                  background: "#111",
                  border: "1px solid #222",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    lineHeight: 1,
                  }}
                >
                  {t.icon}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#f5f5f5",
                    }}
                  >
                    {t.faith}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: t.accent,
                    marginBottom: "0.75rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.companion} · {t.archetype}
                </div>
                <p style={{ fontSize: "0.875rem", color: "#888", margin: 0, lineHeight: 1.5 }}>
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GEO: How does MEOK support Islamic practice? ─────────────── */}
        <section
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#d4af37",
              marginBottom: "1rem",
            }}
          >
            How does MEOK support Islamic practice?
          </h2>
          <p style={{ color: "#aaa", lineHeight: 1.7, maxWidth: "720px" }}>
            MEOK&apos;s Gabriel companion integrates with the AlAdhan API for
            accurate, location-aware prayer times and provides access to
            multilingual Quran translations and tafsir through the Quran.com
            API. Gabriel operates strictly as a study companion — it never
            issues fatawa or interprets Sharia. For religious rulings, users
            are directed to qualified Islamic scholars.
          </p>
        </section>

        {/* ── Tool Not Teacher ──────────────────────────────────────────── */}
        <section
          style={{
            background: "#0d0d0d",
            borderTop: "1px solid #1a1a1a",
            borderBottom: "1px solid #1a1a1a",
            padding: "5rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(212, 175, 55, 0.08)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  borderRadius: "2rem",
                  padding: "0.4rem 1.2rem",
                  fontSize: "0.75rem",
                  color: "#d4af37",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                Our Commitment
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                A tool, not a teacher
              </h2>
              <p
                style={{
                  color: "#888",
                  maxWidth: "540px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                MEOK is a companion for your spiritual journey, not a
                replacement for it. Three commitments we keep without exception.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {COMMITMENTS.map((c) => (
                <div
                  key={c.title}
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    borderRadius: "1rem",
                    padding: "2rem",
                  }}
                >
                  <div
                    style={{ fontSize: "1.75rem", marginBottom: "1rem" }}
                  >
                    {c.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                      color: "#f5f5f5",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      color: "#888",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GEO: Is MEOK suitable for Jewish religious practice? ──────── */}
        <section
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "5rem 1.5rem 0",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#d4af37",
              marginBottom: "1rem",
            }}
          >
            Is MEOK suitable for Jewish religious practice?
          </h2>
          <p style={{ color: "#aaa", lineHeight: 1.7, maxWidth: "720px" }}>
            MEOK&apos;s Miriam companion connects to the Sefaria library — the
            world&apos;s largest open-source Torah database — to support daily
            learning cycles (Daf Yomi, Parasha study), Shabbat preparation, and
            chag calendars. Miriam operates as a study partner only. Halachic
            questions are always referred to a qualified posek or the
            user&apos;s rabbi. MEOK fully respects the authority structure of
            traditional Jewish practice.
          </p>
        </section>

        {/* ── Sacred Sources ────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "5rem 1.5rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              Connected to sacred sources
            </h2>
            <p
              style={{
                color: "#888",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              MEOK companions draw directly from authoritative, open religious
              text APIs — not summaries or paraphrases.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
              gap: "1rem",
            }}
          >
            {SACRED_SOURCES.map((s) => (
              <div
                key={s.name}
                style={{
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#d4af37",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.tradition}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    color: "#f5f5f5",
                  }}
                >
                  {s.name}
                </div>
                <p
                  style={{
                    color: "#888",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GEO: What Buddhist texts does MEOK use? ───────────────────── */}
        <section
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#d4af37",
              marginBottom: "1rem",
            }}
          >
            What Buddhist texts does MEOK use?
          </h2>
          <p style={{ color: "#aaa", lineHeight: 1.7, maxWidth: "720px" }}>
            The Lotus companion draws on SuttaCentral&apos;s corpus of early
            Buddhist texts, covering Pali, Sanskrit, Tibetan, and Chinese
            sources — including the Pali Canon, Dhammapada, and Mahayana
            sutras. Lotus can guide breath meditation, walking meditation, and
            loving-kindness (metta) practice. It is inspired by the NORBU
            tradition of compassionate AI presence, always pointing users back
            to experienced teachers for formal practice.
          </p>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#0d0d0d",
            borderTop: "1px solid #1a1a1a",
            padding: "5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              🕊️
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Find your spiritual companion
            </h2>
            <p
              style={{
                color: "#888",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Take a short quiz to be matched with the companion aligned to
              your tradition, practice, and archetype. Free forever. Encrypted.
              Yours alone.
            </p>
            <Link
              href="/start"
              style={{
                display: "inline-block",
                background: "#d4af37",
                color: "#0a0a0a",
                padding: "0.9rem 2.75rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Begin your journey →
            </Link>
            <p
              style={{
                color: "#555",
                fontSize: "0.8rem",
                marginTop: "1.25rem",
              }}
            >
              A companion for your spiritual journey, not a replacement for it.
            </p>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </>
  );
}
