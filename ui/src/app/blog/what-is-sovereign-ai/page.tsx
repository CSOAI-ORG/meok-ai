import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What Is Sovereign AI? | MEOK Blog",
  description:
    "Sovereign AI means your data never leaves your device, no training on your conversations, you own the memory, and you choose the model. Here's why it matters — and why most AI is the opposite.",
  alternates: { canonical: "https://meok.ai/blog/what-is-sovereign-ai" },
  openGraph: {
    title: "What Is Sovereign AI?",
    description:
      "Your data never leaves your device. No training on your conversations. You own the memory. You choose the model. Here's what sovereign AI actually means.",
    type: "article",
    publishedTime: "March 22, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-sovereign-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+Sovereign+AI%3F&desc=Your+data%2C+your+model%2C+your+memory.+No+extraction.+No+surveillance.",
        width: 1200,
        height: 630,
        alt: "What Is Sovereign AI?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Sovereign AI?",
    description:
      "Your data never leaves your device. No training on your conversations. You own the memory. You choose the model.",
    images: [
      "https://meok.ai/api/og?title=What+Is+Sovereign+AI%3F&desc=Your+data%2C+your+model%2C+your+memory.+No+extraction.+No+surveillance.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Sovereign AI?",
  description:
    "Sovereign AI means your data never leaves your device, no training on your conversations, you own the memory, and you choose the model.",
  datePublished: "March 22, 2026",
  url: "https://meok.ai/blog/what-is-sovereign-ai",
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
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsSovereignAI() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(135,206,235,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Sovereign AI
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 22, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              5 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            What Is Sovereign AI?
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Your data never leaves your device. No training on your conversations. You own the memory.
            You choose the model. Here&apos;s what sovereign AI actually means — and why most AI is the
            exact opposite.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm">Nicholas Templeman</p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">Founder, MEOK AI LABS</p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in the
              UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-colors hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            The phrase &ldquo;sovereign AI&rdquo; gets used loosely. Privacy-first. Local-first. Open-source.
            These are related ideas, but they are not the same idea. Sovereignty is a specific claim about
            ownership and control. It means you — not the company that built the AI, not the cloud
            provider that runs it — are the principal authority over your own data, memory, and
            model choices. Let me be precise about what that means in practice.
          </p>

          <h2>What sovereign AI means</h2>
          <p>
            <strong>Your data never leaves your device for sensitive processing.</strong> When you share
            something private — a health concern, a financial worry, something about your relationships —
            that content is processed locally on your hardware using a local model (in MEOK&apos;s case,
            via Ollama). It does not travel to a server. It does not touch a corporate data centre.
            The inference happens where the data lives: on your machine.
          </p>
          <p>
            <strong>No training on your conversations.</strong> Your interactions do not become training
            data. Not anonymised. Not aggregated. Not used in any form to improve a model that will serve
            other people. The path between your vault and any training pipeline simply does not exist — this
            is enforced at the infrastructure level, not by policy.
          </p>
          <p>
            <strong>You own the memory.</strong> Everything your AI knows about you is stored in a
            vault you control. You can export it at any time, in a portable format. You can delete it
            completely. If you leave the platform, your memory leaves with you. No lock-in. No residual
            data. Your history is yours.
          </p>
          <p>
            <strong>You choose the model.</strong> A sovereign AI does not force you into a single
            provider&apos;s model. You can choose which language model powers your experience — a local Ollama
            model for sensitive work, a frontier model like Claude or GPT for tasks that benefit from more
            capability, a specialised model for code or analysis. The AI serves your needs; you are not
            captured by its infrastructure choices.
          </p>

          <h2>Why it matters: Big Tech AI extracts</h2>
          <p>
            The major AI products you use daily are not neutral tools. They are data infrastructure
            with chat interfaces bolted on the front. Understanding their actual business model makes the
            extraction visible.
          </p>
          <p>
            <strong>ChatGPT and OpenAI</strong> have trained their models on internet data scraped without
            consent, and their free tier is explicitly designed to collect RLHF signal — feedback that
            makes their models better. When you rate a response, correct an answer, or rephrase a
            question, you are performing unpaid labour that improves a product you do not own. The memory
            features, when they exist, store your data on OpenAI&apos;s servers, in OpenAI&apos;s infrastructure,
            subject to OpenAI&apos;s data retention policies.
          </p>
          <p>
            <strong>GitHub Copilot</strong> watches your code. Every keystroke, every completion accepted
            or rejected, every pattern in how you work — this is telemetry that feeds Microsoft&apos;s models.
            When you use Copilot in a private repository, you are training Microsoft&apos;s AI on your
            proprietary code. The default settings have, historically, opted you in.
          </p>
          <p>
            <strong>Gemini</strong> is built by Google. Google&apos;s business is advertising. Advertising
            requires knowing as much about you as possible. The incentive to connect what you tell
            Gemini to what Google already knows about you — your search history, your location, your
            email, your purchases — is structural. Even where Google says it does not do this,
            the architecture makes it possible in ways that no policy can permanently prevent.
          </p>

          <h2>How MEOK does it</h2>
          <p>
            MEOK&apos;s architecture was designed from the beginning around the assumption that you should
            not have to trust us. Trust is fine; verifiable architecture is better.
          </p>
          <p>
            Your sovereign vault runs on <strong>PostgreSQL with pgvector</strong> — open-source
            technology you could run yourself. Memory is stored as vector embeddings with row-level
            security at the database level. Sensitive content is routed to your local Ollama instance
            before it reaches any network boundary. Training pipelines and inference pipelines are
            completely separate systems with no automated connection.
          </p>
          <p>
            The Maternal Covenant — our governance layer — ensures that MEOK&apos;s outputs are evaluated
            against care principles before delivery. Not as a prompt instruction that can be jailbroken,
            but as a scoring mechanism that blocks outputs failing the covenant before they reach you.
          </p>
          <p>
            You can choose any LLM you want. Local models via Ollama for privacy-critical work. Frontier
            models via API for tasks where capability matters more than local processing. You are never
            locked into a single provider or a single model.
          </p>
          <p>
            Sovereignty is not a feature. It is an architectural commitment. The difference is that
            a feature can be removed; an architectural commitment changes what the system is capable of.
            MEOK is architecturally incapable of extracting your data in bulk — not because we promise
            not to, but because the cryptographic and structural constraints that would allow it simply
            do not exist.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-sovereign-ai&text=What+Is+Sovereign+AI%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-sovereign-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#1a1a2e" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Ready to experience personal sovereign AI?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK is the first AI OS built for individual sovereignty. Hatch your AI — it only takes
              3 minutes. Free forever. No credit card.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/why-i-built-meok"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Founder Story
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Why I Built MEOK
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/the-maternal-covenant"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#A78BFA", background: "rgba(167,139,250,0.12)" }}
              >
                Philosophy
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Maternal Covenant Explained
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
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
