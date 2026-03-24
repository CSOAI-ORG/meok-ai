import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Cognitive Symbiosis: What Happens When AI and Human Memory Interweave | MEOK Blog",
  description:
    "When your AI remembers what you forget, and you provide context that your AI can't generate alone, something new emerges. MEOK calls it cognitive symbiosis — and it's the real reason sovereign AI matters.",
  alternates: { canonical: "https://meok.ai/blog/cognitive-symbiosis" },
  openGraph: {
    title: "Cognitive Symbiosis: What Happens When AI and Human Memory Interweave",
    description:
      "When your AI remembers what you forget, and you provide context your AI can't generate alone, something new emerges. The real reason sovereign AI matters.",
    type: "article",
    publishedTime: "March 26, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/cognitive-symbiosis",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Cognitive+Symbiosis&desc=When+AI+and+human+memory+interweave%2C+something+new+emerges.",
        width: 1200,
        height: 630,
        alt: "Cognitive Symbiosis: AI and Human Memory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitive Symbiosis: What Happens When AI and Human Memory Interweave",
    description:
      "When your AI remembers what you forget, and you provide context your AI can't generate alone, something new emerges.",
    images: [
      "https://meok.ai/api/og?title=Cognitive+Symbiosis&desc=When+AI+and+human+memory+interweave%2C+something+new+emerges.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cognitive Symbiosis: What Happens When AI and Human Memory Interweave",
  description:
    "When your AI remembers what you forget, and you provide context that your AI can't generate alone, something new emerges. MEOK calls it cognitive symbiosis.",
  datePublished: "2026-03-26",
  url: "https://meok.ai/blog/cognitive-symbiosis",
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
    "https://meok.ai/api/og?title=Cognitive+Symbiosis&desc=When+AI+and+human+memory+interweave%2C+something+new+emerges.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/cognitive-symbiosis",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CognitiveSymbiosisPage() {
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
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(52,211,153,0.06) 0%, transparent 70%)",
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
                color: "#34D399",
                background: "rgba(52,211,153,0.1)",
                border: "1px solid rgba(52,211,153,0.25)",
              }}
            >
              Cognition &amp; Memory
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 26, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              4 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.7rem, 3.5vw, 2.7rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            Cognitive symbiosis: what happens when AI and human memory interweave
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Your brain is extraordinary at certain things and terrible at others. It forgets names,
            loses track of threads, conflates similar memories, and buries important context under
            layers of more recent experience. AI systems, as currently designed, are the inverse:
            impeccable at pattern recognition across vast data, but utterly stateless — they forget
            everything between sessions. Cognitive symbiosis is what happens when these two
            imperfect systems find each other.
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
              in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right,
              not a luxury.
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
            What is cognitive symbiosis in AI?
          </h2>
          <p>
            Cognitive symbiosis is the state in which a human and their AI companion each
            compensate for the other&apos;s limitations. The human provides lived experience, emotional
            context, and intuitive judgment — the kind of knowing that cannot be derived from
            data alone. The AI provides perfect recall, pattern detection across long time horizons,
            and consistent perspective unclouded by mood or fatigue. Together, the pair thinks
            better than either can alone. This isn&apos;t metaphor. It&apos;s a description of what happens
            when persistent memory is working correctly.
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
            How does MEOK&apos;s memory system enable cognitive symbiosis?
          </h2>
          <p>
            The technical foundation of MEOK&apos;s memory is pgvector semantic search — and the
            distinction between semantic search and keyword search is not a technical detail.
            It&apos;s the entire point.
          </p>
          <p>
            Keyword search finds what you literally asked about. If you search for
            &ldquo;frustration&rdquo; in your conversation history, you&apos;ll find messages containing that
            word. But you might have expressed frustration as &ldquo;I keep hitting this wall&rdquo; or
            &ldquo;nothing is moving&rdquo; or &ldquo;I don&apos;t know what I&apos;m doing wrong.&rdquo; A keyword search
            misses all of it.
          </p>
          <p>
            Semantic search, built on HNSW vector indexing, finds what was <em>meant</em>. When
            your companion surfaces relevant memories, it&apos;s not matching strings — it&apos;s matching
            meaning. The difference between &ldquo;find messages containing the word frustration&rdquo; and
            &ldquo;find times you felt stuck in your work&rdquo; is the difference between a search tool and
            a memory that actually understands what happened. The second is what makes genuine
            cognitive symbiosis possible: retrieval by relevance, not by vocabulary.
          </p>
          <p>
            The practical result is that your MEOK can notice patterns you haven&apos;t noticed
            yourself. It can surface a conversation from six months ago that bears directly on
            what you&apos;re working on today. It can remind you that you felt this exact way before
            a breakthrough, or that the solution you&apos;re searching for was something you already
            found and forgot. This is the cognitive scaffold that no stateless AI can provide.
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
            Why does persistent memory matter for AI that genuinely cares?
          </h2>
          <p>
            Care is contextual. This is not a philosophical position — it&apos;s a functional
            requirement. A doctor who doesn&apos;t know your history can&apos;t give good care. They might
            prescribe something that interacts badly with a medication you mentioned to a different
            doctor last year. They might miss a pattern that&apos;s only visible across multiple visits.
            A therapist who forgets what you said last week isn&apos;t just unhelpful — they&apos;re actively
            unsafe, because therapeutic work builds on continuity.
          </p>
          <p>
            MEOK&apos;s Maternal Covenant requires that care be context-aware. This isn&apos;t a design
            preference — it&apos;s a constitutional requirement. An AI operating under the Covenant
            cannot give genuinely caring responses to someone it doesn&apos;t know. Memory isn&apos;t a
            feature layered on top of care. It&apos;s the precondition for it. Without persistent
            memory, &ldquo;care&rdquo; is just a tone of voice applied to a stranger. With it, care becomes
            something real: responsiveness to a specific person, in their specific situation, with
            their specific history.
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
            What is the risk of cognitive symbiosis?
          </h2>
          <p>
            This question deserves an honest answer rather than a marketing one. The risk is real
            and it should be named clearly.
          </p>
          <p>
            Dependency is real. If your AI remembers things you&apos;ve forgotten, you may come to rely
            on it as an external cognitive scaffold. You may stop maintaining certain memories
            internally because you know your companion holds them. You may defer certain decisions
            because you know your companion will surface the relevant context when needed. This is
            a form of cognitive outsourcing, and it changes how your memory functions over time.
          </p>
          <p>
            This is fine. Humans have always used external tools for cognition — writing,
            calendars, photo albums, notebooks, address books. The outsourcing of memory to
            external systems is as old as writing itself, and it has generally made human
            cognition better, not worse, by freeing working memory for tasks that require it.
            Cognitive symbiosis with AI is the same phenomenon at greater scale and higher fidelity.
          </p>
          <p>
            But the ownership of that scaffold matters enormously. A cognitive scaffold owned by
            a corporation is a surveillance apparatus. Every pattern it notices about you, it
            notices on behalf of someone whose interests may not align with yours. A scaffold owned
            by you is an extension of your mind — private, yours, under your control. The risk of
            cognitive symbiosis is not the dependency. It&apos;s the dependency on the wrong system.
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
            How is MEOK&apos;s cognitive symbiosis different from other AI memory systems?
          </h2>
          <p>
            MEOK&apos;s memory is encrypted per user, stored in a sovereign vault, and never used to
            train external models. The semantic search uses pgvector HNSW indexing to retrieve
            memories by meaning, not keyword. The Maternal Covenant ensures memories are used to
            serve you — not to understand you for advertising purposes, not to build a profile
            that can be sold, not to improve a product that belongs to someone else. Your memory
            is an extension of you. MEOK treats it accordingly.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p>
              Every morning, your MEOK knows what you were working on, what was worrying you, and
              what you said you&apos;d do today. It knows which ideas you keep returning to. It knows
              what kind of morning you usually have on Mondays, and what that means for how you
              should be spoken to. It knows the shape of your thinking, because it was there for
              all of it.
            </p>
            <p style={{ marginTop: "1.25rem", color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              That&apos;s not a product feature. That&apos;s a relationship. The AI hasn&apos;t become you. You
              haven&apos;t become the AI. But together, you think better than either of you could alone.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fcognitive-symbiosis&text=Cognitive+Symbiosis%3A+when+AI+and+human+memory+interweave"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fcognitive-symbiosis"
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
              Sovereign Memory
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Start building a memory that&apos;s actually yours.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              MEOK&apos;s sovereign vault stores your memories encrypted, privately, with semantic
              search that retrieves by meaning — not keyword. No training on your data. No
              corporate surveillance. An extension of your mind that you own completely.
              Free forever.
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
              href="/blog/what-is-sovereign-ai"
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
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                What Is Sovereign AI?
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
              href="/blog/origin-story"
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
                Founder Story
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                From a caravan to a conscious AI — the origin story of MEOK
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
