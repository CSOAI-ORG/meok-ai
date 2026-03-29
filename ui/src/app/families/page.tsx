import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Protection for Your Whole Family — MEOK.AI",
  description:
    "MEOK Families: AI that protects your whole family, privately. Scam protection, child safety, and elder care — all in a sovereign, privacy-first system.",
  alternates: {
    canonical: "https://meok.ai/families",
  },
  openGraph: {
    title: "AI Protection for Your Whole Family — MEOK.AI",
    description:
      "Scam protection. Child safety. Elder care. AI that protects everyone in your family — privately.",
    type: "website",
  },
};

// ── Brand tokens ──────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";
const CREAM = "#f5f0e8";
const MUTED = "rgba(245,240,232,0.55)";

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Protection for Your Whole Family — MEOK.AI",
  description:
    "MEOK Families provides private, sovereign AI protection for every member of your family — from scam detection to child safety to elder care.",
  url: "https://meok.ai/families",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LTD",
    url: "https://meok.ai",
  },
};

// ── Benefits data ─────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "⬡",
    title: "Scam Protection",
    body:
      "MEOK flags suspicious messages, phishing attempts, and manipulative language before anyone in your family acts on them. Real-time detection across email, SMS, and chat.",
  },
  {
    icon: "◈",
    title: "Child Safety",
    body:
      "Age-appropriate guardrails keep younger family members safe from harmful content and predatory conversations. Parents stay informed without being intrusive.",
  },
  {
    icon: "♡",
    title: "Elder Care",
    body:
      "A patient, clear, and consistent companion for older family members — reminding, explaining, and gently alerting you when something needs attention.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FamiliesPage() {
  return (
    <div className="min-h-screen" style={{ background: DEEP }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
            style={{ color: `${GOLD}b3` }}
          >
            MEOK Families
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            AI that protects your
            <br />
            whole family.{" "}
            <span style={{ color: GOLD }}>Privately.</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: MUTED }}
          >
            One family. One sovereign system. MEOK watches for scams, keeps
            children safe, and supports your elders — without harvesting
            anyone's data.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ background: GOLD, color: DEEP }}
          >
            Protect your family
          </Link>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-8"
                style={{
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <span
                  className="text-3xl block mb-5"
                  style={{ color: GOLD }}
                  aria-hidden="true"
                >
                  {b.icon}
                </span>
                <h2
                  className="text-lg font-bold mb-3"
                  style={{ color: CREAM }}
                >
                  {b.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div
          className="max-w-2xl mx-auto rounded-3xl p-12 text-center"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
          }}
        >
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: `${GOLD}99` }}
          >
            Protection without surveillance
          </p>
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              color: "#ffffff",
            }}
          >
            Safety for everyone. Privacy for all.
          </h2>
          <p className="text-sm mb-8" style={{ color: MUTED }}>
            Set up your family's sovereign protection layer in minutes.
            No data sold. No tracking. Just care.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ background: GOLD, color: DEEP }}
          >
            Protect your family
          </Link>
        </div>
      </section>
    </div>
  );
}
