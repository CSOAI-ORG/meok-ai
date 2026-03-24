import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Kids: What Parents Need to Know Before Saying Yes | MEOK AI LABS",
  description:
    "Not all AI companions are built for children. Here's the framework that determines whether yours is — content layers, threat detection, compliance, and the Guardian mode parents actually need.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-for-kids" },
  openGraph: {
    title:
      "AI Companion for Kids: What Parents Need to Know Before Saying Yes",
    description:
      "Not all AI companions are built for children. Here's the framework that determines whether yours is — content layers, threat detection, compliance, and the Guardian mode parents actually need.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-kids",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Kids&desc=Not+all+AI+companions+are+built+for+children.+Here%27s+the+framework+that+determines+whether+yours+is.",
        width: 1200,
        height: 630,
        alt: "AI Companion for Kids: What Parents Need to Know Before Saying Yes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Companion for Kids: What Parents Need to Know Before Saying Yes",
    description:
      "Not all AI companions are built for children. Here's the framework that determines whether yours is — content layers, threat detection, compliance, and the Guardian mode parents actually need.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+for+Kids&desc=Not+all+AI+companions+are+built+for+children.+Here%27s+the+framework+that+determines+whether+yours+is.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Kids: What Parents Need to Know Before Saying Yes",
  description:
    "Not all AI companions are built for children. Here's the framework that determines whether yours is — content layers, threat detection, compliance, and the Guardian mode parents actually need.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/ai-companion-for-kids",
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

export default function AICompanionForKids() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0d0c18] text-white">
        {/* ── DARK HERO ───────────────────────────────────────────────────── */}
        <section className="pt-32 pb-14 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
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
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                Guardian
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                <Calendar className="w-3.5 h-3.5" />
                March 25, 2026
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                <Clock className="w-3.5 h-3.5" />
                6 min read
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
              AI Companion for Kids: What Parents Need to Know Before Saying Yes
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: "rgba(245,240,232,0.6)",
                fontSize: "1.1rem",
                lineHeight: 1.65,
                maxWidth: 640,
              }}
            >
              Not all AI companions are built for children. Here&apos;s the
              framework that determines whether yours is.
            </p>
          </div>
        </section>

        {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
        <div
          className="max-w-3xl mx-auto px-6 py-14"
          style={{ background: "#f5f0e8", color: "#2a2a3e" }}
        >
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
              <p className="font-bold text-[#1a1a2e] text-sm">
                Nicholas Templeman
              </p>
              <p className="text-xs text-[#1a1a2e]/45 mb-1">
                Founder, MEOK AI LABS
              </p>
              <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
                Nicholas built MEOK because he was tired of AI that forgot him.
                He lives and works in the UK — mostly from a caravan on his
                farm. He believes sovereign AI is a right, not a luxury.
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
              [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
              [&_p]:text-base"
          >
            <p>
              Every week a parent somewhere hands a child a device and says
              &ldquo;ask the AI.&rdquo; Sometimes they mean a search engine.
              Sometimes they mean a chatbot trained on the uncurated internet.
              Sometimes they genuinely don&apos;t know what the child is talking
              to — and neither does the AI company, because they never designed
              it to care.
            </p>
            <p>
              Most AI products were built for adults. Their safety frameworks,
              their content policies, their data practices — all designed with
              an adult user in mind, then left unchanged when children arrived.
              That gap is where harm lives. This article is about closing it.
            </p>

            <h2>Are AI companions safe for children?</h2>
            <p>
              Most are not — and most don&apos;t claim to be. General-purpose AI
              tools have no child-specific safeguards, no content boundaries for
              under-13 users, and no parental visibility. A handful of
              purpose-built systems do. MEOK&apos;s Guardian mode was designed
              specifically for this gap.
            </p>

            <h2>What is MEOK&apos;s Guardian mode for children?</h2>
            <p>
              Guardian mode activates a separate content layer that blocks adult
              topics, explicit language, gambling references, and unsafe
              relationship dynamics. Every message from a child passes through
              DistilBERT threat detection before reaching the AI — and parents
              receive alerts on detected risks, not after-the-fact reports.
            </p>

            <h2>Does MEOK comply with the UK Children&apos;s Code?</h2>
            <p>
              MEOK is designed to the ICO&apos;s Age-Appropriate Design Code.
              This means: data minimisation for under-18 users, no profiling for
              commercial purposes, privacy settings defaulted to high, and no
              nudge techniques designed to keep children using the product past
              healthy limits.
            </p>

            <h2>What kind of content can a child&apos;s companion discuss?</h2>
            <p>
              In Guardian mode, the companion can help with homework, tell
              age-appropriate stories, discuss emotions, play word games, and
              support learning. It cannot discuss violence, adult relationships,
              drugs, or content rated above a U/PG equivalent. Parents set
              additional topic restrictions in the family dashboard.
            </p>

            <h2>Can parents see what their child says to the AI?</h2>
            <p>
              MEOK gives parents a Guardian dashboard with alert history and
              topic summaries — not verbatim transcripts. This preserves the
              child&apos;s emotional safety while giving parents visibility on
              risk signals. Full transcript access is available only when a
              high-severity alert is triggered.
            </p>

            <h2>What happens if a child says something concerning?</h2>
            <p>
              If threat detection scores above 0.85, the companion does three
              things: redirects the conversation to safe topics, sends a
              Guardian alert to the parent&apos;s device, and — in crisis
              scenarios like self-harm language — provides the child with
              age-appropriate support resources immediately.
            </p>

            <h2>At what age is an AI companion appropriate?</h2>
            <p>
              MEOK recommends supervised use from age 8, unsupervised from 13
              with Guardian mode active. Children under 8 should use AI only
              with a parent present. These aren&apos;t hard limits — parents
              know their children — but they&apos;re the defaults we&apos;ve
              designed our safety architecture around.
            </p>
          </div>

          {/* Closing pull quote */}
          <div
            className="my-10 rounded-2xl p-8"
            style={{
              background: "#0d0c18",
              borderLeft: "3px solid #c9a84c",
            }}
          >
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(245,240,232,0.7)" }}
            >
              The question isn&apos;t whether your child will interact with AI.
              They already do. The question is whether the AI they interact with
              was built to protect them.
            </p>
            <p
              className="text-sm mt-4 font-semibold"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              — Nicholas Templeman, Founder
            </p>
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
            <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
              Share
            </span>
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-kids&text=AI+Companion+for+Kids%3A+What+Parents+Need+to+Know+Before+Saying+Yes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
            >
              &#120143; Twitter
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-kids"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
            >
              LinkedIn
            </a>
          </div>

          {/* CTA — Guardian focused */}
          <div
            className="rounded-2xl p-8 sm:p-10 mb-10 relative overflow-hidden"
            style={{ background: "#0d0c18" }}
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
                Guardian
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                Built to protect the children you love.
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                MEOK Guardian mode gives your child a safe AI companion and
                gives you the visibility to trust it. Age-appropriate. UK
                Children&apos;s Code compliant. Designed for families.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/guardian"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                  style={{ background: "#c9a84c", color: "#0d0c18" }}
                >
                  Explore Guardian Mode
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/hatch"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all border"
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    borderColor: "rgba(245,240,232,0.15)",
                  }}
                >
                  Hatch their AI free
                </Link>
              </div>
            </div>
          </div>

          {/* More posts */}
          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] mb-5">
              More from the blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/ai-companion-for-elderly"
                className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.12)",
                  }}
                >
                  Guardian
                </span>
                <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                  AI Companion for Elderly Parents: What Families Need to Know
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                  <Clock className="w-3 h-3" />
                  7 min read
                </div>
              </Link>
              <Link
                href="/blog/guardian-family-safety"
                className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.12)",
                  }}
                >
                  Guardian
                </span>
                <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                  Guardian: The Family Safety Layer Built Into MEOK
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                  <Clock className="w-3 h-3" />
                  5 min read
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
