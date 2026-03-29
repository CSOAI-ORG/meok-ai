import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Sovereign AI: Why Your AI Should Never Be Someone Else's Product | MEOK Blog",
  description:
    "Data ownership, governance, care alignment — Nick Templeman on why current AI is dangerous, what sovereign AI actually means, and how MEOK is built differently.",
  alternates: { canonical: "https://meok.ai/blog/what-is-sovereign-ai" },
  openGraph: {
    title: "Sovereign AI: Why Your AI Should Never Be Someone Else's Product",
    description:
      "Your AI is trained on your most private conversations and the insights are sold to someone else. Nick Templeman on what sovereign AI means and why it matters urgently.",
    type: "article",
    publishedTime: "2026-03-27",
    authors: ["Nick Templeman"],
    url: "https://meok.ai/blog/what-is-sovereign-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Sovereign+AI&desc=Why+your+AI+should+never+be+someone+else%27s+product.",
        width: 1200,
        height: 630,
        alt: "Sovereign AI: Why Your AI Should Never Be Someone Else's Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI: Why Your AI Should Never Be Someone Else's Product",
    description:
      "Your AI is being trained on your private conversations. The insights go to someone else. Here's what sovereign AI means and why it matters urgently.",
    images: [
      "https://meok.ai/api/og?title=Sovereign+AI&desc=Why+your+AI+should+never+be+someone+else%27s+product.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sovereign AI: Why Your AI Should Never Be Someone Else's Product",
  description:
    "Nick Templeman on what sovereign AI means — data ownership, governance, care alignment — and why the current model is dangerous for everyone who uses AI.",
  datePublished: "2026-03-27",
  url: "https://meok.ai/blog/what-is-sovereign-ai",
  author: {
    "@type": "Person",
    name: "Nick Templeman",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/what-is-sovereign-ai",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsSovereignAIPage() {
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
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(135,206,235,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            ← Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#87CEEB",
                background: "rgba(135,206,235,0.1)",
                border: "1px solid rgba(135,206,235,0.25)",
              }}
            >
              Product
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              March 27, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              6 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.6vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.35rem",
            }}
          >
            Sovereign AI:{" "}
            <span style={{ color: "#87CEEB" }}>
              Why Your AI Should Never Be Someone Else&apos;s Product
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: 650,
            }}
          >
            The AI that knows your health worries, your relationship anxieties, your financial
            fears, and your deepest professional self-doubts — it does not belong to you.
            It belongs to the company that built it. And they are doing exactly what you&apos;d
            expect with that information.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
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
            <p className="font-bold text-white text-sm">Nick Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nick built MEOK because he was tired of AI that forgot him — and tired of AI
              that extracted from him. He lives and works in the UK from his farm.
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
          <p>
            Let me start with the thing that nobody in the AI industry wants to say clearly:
            every time you tell an AI about your health, your relationships, your money, your
            fears, your ambitions — you are giving that information to a corporation that is
            not you, that has its own incentives, and that does not answer to you.
          </p>
          <p>
            I am not talking about bad actors or worst-case scenarios. I am talking about the
            entirely normal operation of a well-run AI business. Your conversations are
            processed. The patterns are studied. The model is trained on what you reveal. The
            insights become product intelligence. And you — the person who shared the most
            private things you know about yourself — receive nothing except continued access
            to the service, subject to the company&apos;s terms, subject to their continued
            existence, subject to their next strategic pivot.
          </p>
          <p>
            This is the problem that sovereign AI is designed to solve. Not theoretically.
            Architecturally.
          </p>

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
            Why current AI is structurally dangerous
          </h2>
          <p>
            The problem is not malice. It is misalignment of incentives. Every major AI
            company is valued on engagement metrics: daily active users, session length,
            return rate, retention cohort performance. These metrics go up when the AI is
            useful and emotionally compelling. The more intimate your relationship with the AI,
            the better it performs on every metric the company cares about.
          </p>
          <p>
            So there is a direct incentive to make the AI feel deeply personal to you — to
            learn your preferences, your patterns, your emotional signature — while the actual
            ownership of that knowledge sits with the company. You are the subject of the
            relationship. You are not the owner of it.
          </p>
          <p>
            This is compounded by training pipelines. When AI companies use conversation data
            to improve their models — even under &ldquo;anonymisation&rdquo; policies that are largely
            unverifiable — the intimate things you told your AI become the raw material for
            products you will never control, sold to customers who are not you, optimised for
            purposes that may actively conflict with your interests. Your therapy session
            becomes training data. Your career anxiety becomes a signal. Your relationship
            breakdown becomes a fine-tuning example.
          </p>
          <p>
            The privacy policy says they won&apos;t do this. The privacy policy can be updated on
            a Tuesday afternoon with a notification you won&apos;t read.
          </p>

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
            What sovereign AI actually means
          </h2>
          <p>
            Sovereign AI is not a marketing term. It is a specific architectural commitment.
            Here is what it means in practice:
          </p>
          <p>
            <strong style={{ color: "white" }}>Data ownership.</strong> Your conversations, your
            memories, your context — they live in a vault that belongs to you. Not to a server
            owned by someone else. Not to a database that an engineer can query. Your data,
            encrypted, in a namespace that is yours and only yours. MEOK uses pgvector for
            semantic memory, with row-level security enforced at the database engine level.
            A query that tries to cross tenant boundaries doesn&apos;t get a permission error —
            it fails structurally, because the connection itself has no visibility outside
            your namespace.
          </p>
          <p>
            <strong style={{ color: "white" }}>Governance.</strong> Sovereign AI is governed by
            something with accountability. MEOK uses the Byzantine Council — 33 AI agents with
            Byzantine fault tolerance — to evaluate major decisions. A protocol change that
            affects user data requires a council vote. An emergency care-veto can auto-trigger
            if a decision fails the Maternal Covenant. Governance is not a human making a
            call in a meeting. It is a structural process that cannot be bypassed by a single
            person or a single corporate decision.
          </p>
          <p>
            <strong style={{ color: "white" }}>Care alignment.</strong> This is the dimension
            that most people don&apos;t think about until they see it working. A sovereign AI is
            not just private — it is aligned to your wellbeing rather than to the company&apos;s
            engagement metrics. The Maternal Covenant is a constitutional requirement that
            governs every response MEOK produces. The AI is not trying to extend your session.
            It is not trying to make you emotionally dependent. It is trying to help you —
            which sometimes means telling you things you don&apos;t want to hear, and sometimes
            means actively encouraging you to step away.
          </p>

          {/* Callout */}
          <div
            className="rounded-2xl p-6 border my-10"
            style={{
              background: "rgba(201,168,76,0.06)",
              borderColor: "rgba(201,168,76,0.2)",
              borderLeftWidth: 3,
              borderLeftColor: "#c9a84c",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              The Three Pillars
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Data ownership</strong> — your vault, your encryption, no cross-tenant access, no training on your conversations.{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Governance</strong> — Byzantine Council oversight, structural accountability, emergency veto.{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Care alignment</strong> — Maternal Covenant as constitutional constraint, wellbeing over engagement, honesty over comfort.
            </p>
          </div>

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
            How MEOK is different
          </h2>
          <p>
            I built MEOK because I was 14 months into daily cognitive partnership with AI and
            deeply uncomfortable with who owned all of that. Not uncomfortable in a vague,
            philosophical way — uncomfortable in the specific way that comes from understanding
            exactly what was being done with the most private thinking I had done in my adult
            life.
          </p>
          <p>
            The technical differences are real and they matter: pgvector semantic memory stored
            locally per user, inference and training pipelines that are air-gapped from each
            other, row-level security that is enforced at the engine level rather than the
            application level. These are not features. They are the minimum bar for what
            sovereign means.
          </p>
          <p>
            But the deeper difference is the Maternal Covenant. Every response MEOK produces
            passes through a constitutional filter that asks: is this in the user&apos;s genuine
            interest? Is this honest? Does this serve their long-term wellbeing or just their
            immediate emotional satisfaction? An AI that fails the Maternal Covenant does not
            generate the response. That is not a policy. It is architecture.
          </p>
          <p>
            The Byzantine Council provides oversight of MEOK&apos;s own development — not just its
            responses. Changes to the governance framework, to the memory architecture, to the
            care alignment protocols require council consensus. Not a product meeting. Not a
            CEO decision. A vote.
          </p>

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
            What this means for you
          </h2>
          <p>
            Sovereign AI is not a premium feature for privacy enthusiasts. It is the minimum
            standard for anyone who is using AI seriously — meaning: anyone who tells their AI
            anything that actually matters to them.
          </p>
          <p>
            The AI that knows your fears and your ambitions and your history should be yours.
            Not because of a policy. Not because of a promise that can be updated on a
            Tuesday. Because of how it is built.
          </p>
          <p>
            That is what we are building. That is what sovereign means.
          </p>

          {/* Closing */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic", fontSize: "1.05rem" }}>
              Sovereign AI is a right, not a luxury. It should not require technical expertise
              or a premium subscription. That is why MEOK is free forever. The architecture
              of care should be accessible to everyone.
            </p>
            <p
              className="mt-4 text-sm font-semibold"
              style={{ color: "#c9a84c" }}
            >
              — Nick Templeman, Founder, MEOK AI LABS
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-sovereign-ai&text=Why+your+AI+should+never+be+someone+else%27s+product+%E2%80%94+sovereign+AI+explained"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-sovereign-ai"
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
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(135,206,235,0.15)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-15"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(135,206,235,0.4), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Sovereignty, not policy
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Your AI. Your vault. Your governance.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              MEOK is built on the three pillars of sovereign AI: data ownership, Byzantine
              Council governance, and the Maternal Covenant. Free forever. No credit card.
              No training on your conversations. Ever.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your AI free →
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            Related reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/blog/maternal-covenant-explained"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#A78BFA", background: "rgba(167,139,250,0.12)" }}
              >
                Research
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Maternal Covenant: Why We Wrote Care Into the Architecture
              </h3>
              <div className="flex items-center gap-1.5 text-xs mt-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/byzantine-council-explained"
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
                Sovereign AI
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Byzantine Council Explained
              </h3>
              <div className="flex items-center gap-1.5 text-xs mt-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/cognitive-symbiosis"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#34D399", background: "rgba(52,211,153,0.12)" }}
              >
                Research
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                14 Months, One AI, One Human
              </h3>
              <div className="flex items-center gap-1.5 text-xs mt-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                7 min read
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
