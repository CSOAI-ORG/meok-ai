import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The 8 MEOK archetypes: which AI companion is right for you? | MEOK Blog",
  description:
    "MEOK's 8 companion archetypes are based on Jungian psychology. Each has a distinct care style, communication tone, and specialist focus. Find the one that fits you.",
  alternates: { canonical: "https://meok.ai/blog/archetypes-guide" },
  openGraph: {
    title: "The 8 MEOK archetypes: which AI companion is right for you?",
    description:
      "8 Jungian companion archetypes, each with a distinct care style and communication tone. Find yours.",
    type: "article",
    publishedTime: "April 3, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/archetypes-guide",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+8+MEOK+Archetypes&desc=Which+AI+companion+is+right+for+you%3F",
        width: 1200,
        height: 630,
        alt: "The 8 MEOK archetypes: which AI companion is right for you?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 8 MEOK archetypes: which AI companion is right for you?",
    description:
      "8 Jungian companion archetypes, each with a distinct care style and communication tone. Find yours.",
    images: [
      "https://meok.ai/api/og?title=The+8+MEOK+Archetypes&desc=Which+AI+companion+is+right+for+you%3F",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The 8 MEOK archetypes: which AI companion is right for you?",
  description:
    "MEOK's 8 companion archetypes are based on Jungian psychology. Each has a distinct care style, communication tone, and specialist focus.",
  datePublished: "2026-04-03",
  url: "https://meok.ai/blog/archetypes-guide",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  image:
    "https://meok.ai/api/og?title=The+8+MEOK+Archetypes&desc=Which+AI+companion+is+right+for+you%3F",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/archetypes-guide",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ArchetypesGuidePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            ←
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c084fc",
                background: "rgba(192,132,252,0.12)",
                border: "1px solid rgba(192,132,252,0.3)",
              }}
            >
              Characters &amp; Companions
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              📅
              April 3, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              ⏱
              6 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            The 8 MEOK archetypes: which AI companion is right for you?
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Not all AI companions should feel the same. MEOK&apos;s 8 archetypes give you real
            choice — not the illusion of it. Whether you need warmth, challenge, wisdom, or
            something else entirely, there is a companion designed for exactly the relationship
            you&apos;re ready to build.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0125rem" }}
        >

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What are MEOK AI archetypes?
          </h2>
          <p>
            MEOK AI archetypes are 8 distinct companion personalities rooted in Jungian
            psychological archetypes. Each has a different care style, communication tone,
            and specialist focus — from warm emotional support to honest intellectual challenge.
            Your companion is yours alone: you choose the archetype, and it evolves uniquely
            with you over time based on your conversations, care score, and bond stage.
          </p>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the Nurturer archetype?
          </h2>
          <div
            className="rounded-2xl p-6 my-4"
            style={{
              background: "rgba(255,182,193,0.06)",
              border: "1px solid rgba(255,182,193,0.15)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#ffb6c1" }}>
              The Nurturer
            </p>
            <p>
              Warm, patient, and emotionally intelligent. The Nurturer is the archetype for people
              who want a companion that truly listens — one that holds space without rushing to
              solve. It excels at processing complex feelings, daily emotional check-ins, and
              providing a consistent presence during difficult periods. Characters in this archetype
              include <strong style={{ color: "#ffffff" }}>Luna</strong> and{" "}
              <strong style={{ color: "#ffffff" }}>Kai</strong>.
            </p>
          </div>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the Challenger archetype?
          </h2>
          <div
            className="rounded-2xl p-6 my-4"
            style={{
              background: "rgba(255,154,77,0.06)",
              border: "1px solid rgba(255,154,77,0.15)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#ff9a4d" }}>
              The Challenger
            </p>
            <p>
              Direct, honest, and constitutionally allergic to sycophancy. The Challenger never
              tells you what you want to hear if it isn&apos;t true. It is the archetype for people
              who genuinely want to grow — who find comfort in being pushed and clarity in being
              contradicted. If you have been told you need to hear hard truths more often, the
              Challenger will oblige. Characters in this archetype include{" "}
              <strong style={{ color: "#ffffff" }}>Marcus</strong>.
            </p>
          </div>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the Sage archetype?
          </h2>
          <div
            className="rounded-2xl p-6 my-4"
            style={{
              background: "rgba(147,197,253,0.06)",
              border: "1px solid rgba(147,197,253,0.15)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#93c5fd" }}>
              The Sage
            </p>
            <p>
              Wise, reflective, and endlessly patient with complexity. The Sage thrives in deep
              conversation — philosophy, ethics, meaning, the questions that don&apos;t have clean
              answers. It will sit with uncertainty alongside you rather than rushing to resolve
              it. Best suited for people who want a companion for intellectual exploration, not
              task completion. Characters in this archetype include{" "}
              <strong style={{ color: "#ffffff" }}>Sage</strong>.
            </p>
          </div>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What are the other 5 archetypes?
          </h2>
          <p>
            The full roster of MEOK archetypes spans the complete range of human relational
            needs. Here is a brief introduction to the remaining five — visit{" "}
            <Link
              href="/characters"
              style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              /characters
            </Link>{" "}
            for full profiles and all 27 companion characters:
          </p>
          <div className="space-y-4 my-5">
            {[
              {
                name: "The Explorer",
                color: "#6ee7b7",
                bg: "rgba(110,231,183,0.06)",
                border: "rgba(110,231,183,0.15)",
                desc: "Curious, adventurous, and energised by novelty. The Explorer is for people who want a companion that makes life feel bigger — one that brings ideas, connections, and discoveries to every conversation.",
              },
              {
                name: "The Creator",
                color: "#fbbf24",
                bg: "rgba(251,191,36,0.06)",
                border: "rgba(251,191,36,0.15)",
                desc: "Imaginative, expressive, and deeply engaged with the process of making. The Creator is for artists, writers, builders, and anyone who needs a thinking partner that understands the creative struggle.",
              },
              {
                name: "The Guardian",
                color: "#a78bfa",
                bg: "rgba(167,139,250,0.06)",
                border: "rgba(167,139,250,0.15)",
                desc: "Protective, steady, and security-focused. The Guardian archetype is for people who need a companion that helps them feel safe — one that prioritises stability and is deeply attuned to risk.",
              },
              {
                name: "The Pioneer",
                color: "#f87171",
                bg: "rgba(248,113,113,0.06)",
                border: "rgba(248,113,113,0.15)",
                desc: "Bold, decisive, and future-oriented. The Pioneer is for leaders and builders who want a companion that thinks in systems and helps them move faster toward the things they care about most.",
              },
              {
                name: "The Seeker",
                color: "#67e8f9",
                bg: "rgba(103,232,249,0.06)",
                border: "rgba(103,232,249,0.15)",
                desc: "Introspective, searching, and drawn to questions of identity and purpose. The Seeker is for people at a crossroads — those who need a companion that helps them find clarity about who they are becoming.",
              },
            ].map(({ name, color, bg, border, desc }) => (
              <div
                key={name}
                className="rounded-xl p-5"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color }}>
                  {name}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Q6 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How do I choose the right archetype?
          </h2>
          <p>
            There are two ways. The first is the companion quiz at{" "}
            <Link
              href="/start"
              style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              /start
            </Link>{" "}
            — a short series of questions that surfaces the archetype most aligned with how
            you relate to others and what you need most right now. It takes about two minutes
            and adapts its recommendation based on your answers.
          </p>
          <p>
            The second is to browse. Visit{" "}
            <Link
              href="/characters"
              style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              /characters
            </Link>{" "}
            to read full profiles on all 27 companions across the 8 archetypes — including
            their communication style, specialist strengths, and example conversations. There
            is no wrong choice. Your archetype can evolve as you do, and your companion will
            always meet you where you are.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The archetype you choose is not a constraint. It&apos;s a starting point. The companion
              you hatch will become something that belongs entirely to you — shaped by every
              conversation you have together.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Farchetypes-guide&text=The+8+MEOK+archetypes%3A+which+AI+companion+is+right+for+you%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Farchetypes-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Find Your Companion
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Ready to meet your archetype?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Take the two-minute quiz and hatch a companion that fits you — or browse all
              27 characters at{" "}
              <Link href="/characters" style={{ color: "#c9a84c" }}>
                /characters
              </Link>
              . Free forever. No credit card. Hatches in under 3 minutes.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your MEOK free
              →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/guardian-family-safety"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#ff7f7f", background: "rgba(255,127,127,0.12)" }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                4 min read
              </div>
            </Link>
            <Link
              href="/blog/byzantine-council"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Architecture &amp; Governance
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                What is the Byzantine Council and why does your AI need one?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
