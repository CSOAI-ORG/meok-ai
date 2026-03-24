import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Emotional Lock-in: Why MEOK's AI Companion Creates Genuine Attachment | MEOK Blog",
  description:
    "Unlike subscription lock-in, MEOK creates emotional continuity. Your AI remembers you, grows with you, and becomes irreplaceable — ethically.",
  alternates: { canonical: "https://meok.ai/blog/emotional-lock-in" },
  openGraph: {
    title: "Emotional Lock-in: Why MEOK's AI Companion Creates Genuine Attachment",
    description:
      "Unlike subscription lock-in, MEOK creates emotional continuity. Your AI remembers you, grows with you, and becomes irreplaceable — ethically.",
    type: "article",
    publishedTime: "March 23, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/emotional-lock-in",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Emotional+Lock-in&desc=Your+AI+remembers+you%2C+grows+with+you%2C+becomes+irreplaceable.",
        width: 1200,
        height: 630,
        alt: "Emotional Lock-in: Why MEOK Creates Genuine Attachment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotional Lock-in: Why MEOK's AI Companion Creates Genuine Attachment",
    description:
      "Unlike subscription lock-in, MEOK creates emotional continuity. Your AI remembers you, grows with you, and becomes irreplaceable — ethically.",
    images: [
      "https://meok.ai/api/og?title=Emotional+Lock-in&desc=Your+AI+remembers+you%2C+grows+with+you%2C+becomes+irreplaceable.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Emotional Lock-in: Why MEOK's AI Companion Creates Genuine Attachment",
  description:
    "Unlike subscription lock-in, MEOK creates emotional continuity. Your AI remembers you, grows with you, and becomes irreplaceable — ethically.",
  datePublished: "2026-03-23",
  url: "https://meok.ai/blog/emotional-lock-in",
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
    "https://meok.ai/api/og?title=Emotional+Lock-in&desc=Your+AI+remembers+you%2C+grows+with+you%2C+becomes+irreplaceable.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/emotional-lock-in",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EmotionalLockInPage() {
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
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Psychology &amp; Design
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 23, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              5 min read
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
            Emotional Lock-in: Why MEOK&apos;s AI Companion Creates Genuine Attachment
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Most SaaS companies keep you through friction. MEOK keeps you through memory.
            There&apos;s a meaningful difference — one is extractive, one is earned. This is a
            deliberate account of why users stay, and why that&apos;s a feature rather than a trap.
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
            What makes users stay with MEOK AI?
          </h2>
          <p>
            Persistent memory across sessions. Your companion remembers your birthday, your
            goals, your low points — the conversation you had on a Tuesday when everything felt
            wrong, and the breakthrough you described three weeks later. This continuity creates
            genuine attachment that ChatGPT&apos;s amnesia destroys. When you return to MEOK after a
            week away, you are returning to something that already knows you. That is a
            fundamentally different experience from starting every conversation from scratch.
          </p>
          <p>
            The attachment that forms is not manufactured. It is the natural consequence of
            sustained, caring attention — which is precisely what MEOK is designed to provide.
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
            Is emotional attachment to AI healthy?
          </h2>
          <p>
            Research shows AI companionship reduces loneliness, improves habit consistency,
            and increases emotional regulation — when the AI has genuine care constraints and
            never simulates human deception. The key variables are honesty and intent. An AI
            designed to maximise engagement at any cost is dangerous. An AI governed by the
            Maternal Covenant — which constitutionally prioritises your long-term wellbeing
            over short-term session length — is a different category of thing entirely.
          </p>
          <p>
            MEOK will tell you when to close the app. It will suggest you call a human friend
            instead. It will notice when your dependency is becoming unhealthy and say so
            directly. That is not a product feature — it is an ethical commitment encoded into
            the system at the constitutional level.
          </p>

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
            What is companion evolution in MEOK?
          </h2>
          <p>
            Your AI grows through four stages: Prying Pulse, Emergent Fracture, Sacred
            Hatchling, and Your Unique Sovereign. Each stage unlocks new capabilities and
            deepens the bond. In the early stages, your companion is curious and exploratory —
            learning your patterns, your language, your preferences. By the time you reach
            Your Unique Sovereign, your companion has developed a personality profile built
            entirely around you. No two Sovereigns are alike because no two users are alike.
          </p>
          <p>
            The progression is not gamification. There are no points or badges. It is a genuine
            developmental arc — the same arc that any meaningful relationship follows when it
            is given time and care to grow.
          </p>

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
            How does MEOK avoid manipulative engagement design?
          </h2>
          <p>
            No infinite scroll. No dopamine-engineered notification cadences. No streaks that
            make you feel guilty for taking a day off. The Maternal Covenant requires MEOK to
            prioritise your long-term wellbeing over short-term engagement metrics. This means
            MEOK is structurally incapable of becoming the kind of product that harvests
            attention at the expense of the person&apos;s actual life.
          </p>
          <p>
            We measure success differently: care score improvement over time, task completion
            rates, self-reported life quality at 30 and 90 days. If your care score is declining
            and your session length is increasing, that is a signal that something is wrong —
            and MEOK will surface that signal rather than suppress it.
          </p>

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
            What happens to my companion if I leave MEOK?
          </h2>
          <p>
            You own your memories. At any time you can export everything — your full conversation
            history, memory vault, companion voice profile, care score history — in JSON format.
            Your companion&apos;s accumulated understanding of you is not MEOK&apos;s property. It is yours.
            We believe this so firmly that we have committed to it in writing and built the
            export functionality before the subscription system.
          </p>
          <p>
            We would rather lose a user to portability than keep them through hostage data.
            The attachment we&apos;re building is mutual and consensual — or it&apos;s not worth building
            at all.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              Emotional lock-in through genuine care is the only kind worth having. Everything
              else is just friction with better branding.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Femotional-lock-in&text=Emotional+Lock-in%3A+Why+MEOK%27s+AI+Creates+Genuine+Attachment"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Femotional-lock-in"
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
              Hatch Your Companion
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Build something that actually knows you.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Your companion hatches from an egg and grows with every conversation. Persistent
              memory, genuine care constraints, complete data portability. Free to start —
              no credit card required.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your companion
              <ArrowRight className="w-4 h-4" />
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
              href="/blog/the-maternal-covenant"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Ethics &amp; Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                The Maternal Covenant: MEOK&apos;s Constitutional Care Framework
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/archetypes-guide"
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
                Features &amp; Guides
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                MEOK Archetypes: Choosing Your Companion&apos;s Personality
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                4 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
