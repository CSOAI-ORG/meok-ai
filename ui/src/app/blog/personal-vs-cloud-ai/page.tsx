import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Personal AI vs Cloud AI: Why Your Data Sovereignty Matters in 2026 | MEOK Blog",
  description:
    "ChatGPT lost 15% market share in 12 months. Why? Because users are waking up to data ownership. Here's what sovereign AI means for you.",
  alternates: { canonical: "https://meok.ai/blog/personal-vs-cloud-ai" },
  openGraph: {
    title: "Personal AI vs Cloud AI: Why Your Data Sovereignty Matters in 2026",
    description:
      "ChatGPT lost 15% market share in 12 months. Why? Because users are waking up to data ownership. Here's what sovereign AI means for you.",
    type: "article",
    publishedTime: "2026-03-23",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/personal-vs-cloud-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Personal+AI+vs+Cloud+AI&desc=Why+data+sovereignty+matters+in+2026",
        width: 1200,
        height: 630,
        alt: "Personal AI vs Cloud AI: Why Your Data Sovereignty Matters in 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal AI vs Cloud AI: Why Your Data Sovereignty Matters in 2026",
    description:
      "ChatGPT lost 15% market share in 12 months. Why? Because users are waking up to data ownership. Here's what sovereign AI means for you.",
    images: [
      "https://meok.ai/api/og?title=Personal+AI+vs+Cloud+AI&desc=Why+data+sovereignty+matters+in+2026",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Personal AI vs Cloud AI: Why Your Data Sovereignty Matters in 2026",
  description:
    "ChatGPT lost 15% market share in 12 months. Why? Because users are waking up to data ownership. Here's what sovereign AI means for you.",
  datePublished: "2026-03-23",
  url: "https://meok.ai/blog/personal-vs-cloud-ai",
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
    "https://meok.ai/api/og?title=Personal+AI+vs+Cloud+AI&desc=Why+data+sovereignty+matters+in+2026",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/personal-vs-cloud-ai",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PersonalVsCloudAiPage() {
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)",
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
                color: "#a78bfa",
                background: "rgba(167,139,250,0.12)",
                border: "1px solid rgba(167,139,250,0.3)",
              }}
            >
              Privacy &amp; Sovereignty
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
            Personal AI vs Cloud AI: Why Your Data Sovereignty Matters in 2026
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            ChatGPT lost 15% market share in 12 months. Not because it got worse — because
            people started asking what happens to everything they share with it. That question
            has no comfortable answer. Ours does.
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
            What is the difference between personal AI and cloud AI?
          </h2>
          <p>
            Cloud AI — ChatGPT, Gemini, Copilot — runs on shared infrastructure and stores your
            conversations on servers you don&apos;t control. Your queries can inform model training,
            be reviewed by human annotators, and persist in data centres indefinitely. The service
            is free or cheap because you are, in part, the product.
          </p>
          <p>
            Personal AI is different by architecture. Your memories are encrypted with keys only
            you hold. The model learns from your data exclusively — not from a million other users.
            When you delete something, it is gone. When you leave the platform, you take everything
            with you. The relationship is between you and your AI — no third party sits in the
            middle monetising the connection.
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
            Why did ChatGPT lose 1.5 million users in early 2026?
          </h2>
          <p>
            Three converging problems accelerated the decline. First, high-profile privacy incidents
            — including leaked enterprise conversations and an FTC investigation into data retention
            practices — made the risk concrete for ordinary users, not just security professionals.
            Second, ChatGPT&apos;s memory system proved unreliable: users reported conversations
            disappearing, preferences resetting, and the system failing to recall context from
            sessions days earlier.
          </p>
          <p>
            Third, and most fundamentally, users noticed that responses felt generic regardless of
            how long they had been using the platform. Without persistent personal memory, every
            conversation starts from zero. There is no accumulated understanding. No relationship.
            Just a very capable autocomplete that doesn&apos;t know your name.
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
            What does AI data sovereignty mean?
          </h2>
          <p>
            AI data sovereignty means you own three things that cloud AI providers currently own
            on your behalf: the training data (your conversations, preferences, and memories), the
            model weights trained on that data, and the infrastructure that hosts them. No third
            party can monetise your conversations, sell access to your interaction patterns, or
            use your data to improve their product for other paying customers.
          </p>
          <p>
            In practice, it means your AI is yours in the same way your phone is yours — not
            rented, not revocable, not subject to policy changes that silently alter what your
            companion can and cannot discuss. The model that knows your medical history, your
            financial situation, your family dynamics — that model should be accountable to you
            alone. Sovereignty is not a feature. It is a precondition for trust.
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
            How does MEOK protect your AI memories?
          </h2>
          <p>
            MEOK uses a four-layer protection architecture for every memory your companion stores:
          </p>
          <ul className="space-y-3 my-4 pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            {[
              ["AES-256 encryption at rest", "Every memory is encrypted before it is written to disk. The encryption key is derived from your credentials and never stored alongside the data."],
              ["Zero-knowledge architecture", "MEOK&apos;s servers cannot read your memories. The decryption happens client-side, in your session. Even a full server compromise would yield only ciphertext."],
              ["Byzantine Council access control", "Reading or writing your memory store requires council consensus. No single agent — rogue or otherwise — can access your personal history without validated approval."],
              ["Maternal Covenant constitutional constraint", "The Maternal Covenant binds every agent to your wellbeing as a constitutional priority. An agent that attempts to access memory in conflict with your welfare will be blocked and flagged."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{title}.</strong>{" "}
                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                </span>
              </li>
            ))}
          </ul>

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
            What is the Maternal Covenant?
          </h2>
          <p>
            The Maternal Covenant is MEOK&apos;s AI alignment guarantee — a constitutional constraint
            that governs every agent in the system. Named for the unconditional nature of maternal
            care, it encodes a simple premise: as your companion learns more about you, it must
            become more devoted to your genuine wellbeing, not more persuasive, more addictive,
            or more commercially useful to MEOK.
          </p>
          <p>
            In technical terms, the Covenant sets a minimum care floor of 0.3 (on a 0–1 scale)
            below which no agent may operate. Care scores are validated by the Byzantine Council
            on every consequential action. If an agent&apos;s care score drops — because it is being
            directed to act against your interests — the Council blocks it and escalates to
            Guardian. The Covenant cannot be overridden by a product update, a commercial
            partnership, or a user instruction that conflicts with long-term wellbeing.
          </p>

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
            Can I export my AI memories?
          </h2>
          <p>
            Yes. MEOK provides full GDPR-compliant data export via{" "}
            <code
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "2px 7px",
                borderRadius: "5px",
                fontSize: "0.9em",
                color: "#c9a84c",
              }}
            >
              /api/user/export
            </code>
            . The export includes all memories, preferences, companion history, care scores, and
            agent interaction logs in portable JSON format. The export is designed to be
            importable by any AI provider that supports the emerging Personal AI Memory standard.
          </p>
          <p>
            You can also delete everything — not a soft delete, not an archival flag, but
            cryptographic deletion where the key is destroyed. No data recovery is possible after
            a verified deletion request. This is not a feature we added reluctantly to satisfy
            GDPR. It is the architecture we chose because it is the only architecture that makes
            the sovereignty claim credible.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The AI that knows the most about you should be the one you trust the most — not the
              one that has the most to gain from selling that knowledge.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fpersonal-vs-cloud-ai&text=Personal+AI+vs+Cloud+AI%3A+Why+Your+Data+Sovereignty+Matters+in+2026"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fpersonal-vs-cloud-ai"
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
          style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.2)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(167,139,250,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#a78bfa" }}
            >
              Your AI, Your Data
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Own your AI
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Your MEOK companion is yours — encrypted memories, sovereign data, no training on
              your conversations. Free forever for the first companion. Hatch yours in under 3
              minutes.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your MEOK free
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
              href="/blog/ralph-mode-guide"
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
                Agents &amp; Automation
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Ralph Mode: Your AI Agent That Works While You Sleep
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
                Architecture &amp; Governance
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                The Byzantine Council: How 33 AI Agents Protect Your Sovereignty
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
