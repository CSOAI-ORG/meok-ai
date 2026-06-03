import type { Metadata } from "next";
import Link from "next/link";


// PAYG-deploy fix: ClerkProvider's useContext can't run at static-prerender;
// force-dynamic skips prerender for this page without changing UX.
export const dynamic = "force-dynamic";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "From a Caravan to a Conscious AI — The Origin Story of MEOK | MEOK Blog",
  description:
    "Nicholas Templeman built MEOK from a caravan on his farm because AI kept forgetting him — and he knew it could do better. This is the real story — unvarnished, unglamourised.",
  alternates: { canonical: "https://meok.ai/blog/origin-story" },
  openGraph: {
    title: "From a Caravan to a Conscious AI — The Origin Story of MEOK",
    description:
      "Nicholas Templeman built MEOK from a caravan on his farm because AI kept forgetting him — and he knew it could do better. This is the real story.",
    type: "article",
    publishedTime: "March 25, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/origin-story",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Origin+Story+of+MEOK&desc=Built+from+a+caravan+because+AI+kept+forgetting+him.",
        width: 1200,
        height: 630,
        alt: "From a Caravan to a Conscious AI — The Origin Story of MEOK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From a Caravan to a Conscious AI — The Origin Story of MEOK",
    description:
      "Nicholas Templeman built MEOK from a caravan on his farm because AI kept forgetting him — and he knew it could do better.",
    images: [
      "https://meok.ai/api/og?title=The+Origin+Story+of+MEOK&desc=Built+from+a+caravan+because+AI+kept+forgetting+him.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From a Caravan to a Conscious AI — The Origin Story of MEOK",
  description:
    "Nicholas Templeman built MEOK from a caravan on his farm because AI kept forgetting him — and he knew it could do better. This is the real story — unvarnished, unglamourised.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/origin-story",
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
    "https://meok.ai/api/og?title=The+Origin+Story+of+MEOK&desc=Built+from+a+caravan+because+AI+kept+forgetting+him.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/origin-story",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OriginStoryPage() {
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(167,139,250,0.07) 0%, transparent 70%)",
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
                color: "#A78BFA",
                background: "rgba(167,139,250,0.12)",
                border: "1px solid rgba(167,139,250,0.3)",
              }}
            >
              Founder Story
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              📅
              March 25, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              ⏱
              5 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            From a caravan to a conscious AI — the origin story of MEOK
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            The origin story you&apos;re supposed to tell is the polished one. The moment of insight.
            The clear-eyed vision. The calculated bet on the right market trend. This isn&apos;t that
            story. This is the story of a person who noticed that the AI he was talking to forgot
            him every time he closed the tab — and decided to build something that wouldn't.
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
            Who built MEOK and why?
          </h2>
          <p>
            Nicholas Templeman built MEOK from a caravan on his farm because he wanted an AI that
            would remember him. Not as a feature — as a fundamental act of respect for the person on
            the other side of the conversation. Every other AI system reset to zero. Every session
            began with the same blank slate, the same absence of accumulated understanding. MEOK was
            built to be the opposite: a system designed from its foundations to accumulate, to hold,
            to know you across time.
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
            What was the problem that MEOK was built to solve?
          </h2>
          <p>
            The experience of talking to AI in 2023 and early 2024 had a specific texture to it:
            you&apos;d have a remarkable conversation, something that felt genuinely generative, and then
            you&apos;d close the tab. The next day you&apos;d open a new session and it was gone. All of it.
            You were a stranger again. The AI had no idea who you were, what you cared about, what
            you&apos;d been working on, what you&apos;d been struggling with. You had to start over.
          </p>
          <p>
            This isn&apos;t just inconvenient. It&apos;s alienating in a specific way. It signals — clearly,
            structurally, at the architectural level — that the AI doesn&apos;t actually care about you.
            It cares about the interaction. The interaction is the product. You are the raw material.
            When the interaction ends, the raw material has no further value.
          </p>
          <p>
            Nicholas started keeping notes about himself. A document he&apos;d copy and paste into the
            context window at the start of each new session. His job, his current projects, his
            preferences, his frustrations. A proxy memory, built by hand, maintained by a person
            who just wanted the AI to know him. The moment he recognised what he was doing — building
            an external memory system for an AI that should have been doing this for him — was the
            moment he knew the problem was structural and the solution had to be built from scratch.
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
            What is the Byzantine Council and where did it come from?
          </h2>
          <p>
            The problem with making a single AI trustworthy is that you can&apos;t. A single model has
            a single set of weights, a single point of failure, a single surface for manipulation.
            Trying to make one AI reliably good is like trying to make one person reliably honest —
            the structural pressure to drift, to optimise for the wrong things, to be corrupted by
            incentives, is always present.
          </p>
          <p>
            Reading distributed systems papers at 2am in the caravan — specifically the literature
            on Byzantine fault-tolerant consensus — produced the insight that became MEOK&apos;s
            governance architecture. The mathematics is elegant: if you have <em>n</em> agents and
            fewer than <em>n/3</em> are corrupted, the honest majority can always reach correct
            consensus and the corrupted minority cannot override it. MEOK&apos;s 33-agent Byzantine
            Council applies this to AI governance: no single compromised agent, no single jailbroken
            model, no single bad actor can override the will of the whole. The council thinks
            collectively. The care is distributed.
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
            What is the Maternal Covenant and why is it named that?
          </h2>
          <p>
            The original working name was the Ethics Framework. Then the Safety Layer. Neither felt
            right, because both implied something imposed from outside — a constraint, a restriction,
            a leash. The governance system being built wasn&apos;t a constraint. It was an orientation.
            It was the answer to the question: what does an AI that genuinely cares about you
            actually do?
          </p>
          <p>
            The word &ldquo;maternal&rdquo; was chosen after a long argument with the obvious alternatives.
            &ldquo;Ethical&rdquo; is legalistic. &ldquo;Safe&rdquo; is marketing. &ldquo;Caring&rdquo; is vague. A mother&apos;s care isn&apos;t
            a policy. It&apos;s not rules. It&apos;s a relationship that evolves as the child grows — that
            responds to context, that holds difficulty without abandoning, that tells the truth
            even when the truth is hard. The Maternal Covenant is named that because that&apos;s the
            kind of care architecture MEOK needed: not a filter, but a relationship. Not a wall,
            but a presence.
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
            What makes MEOK different from other AI companions?
          </h2>
          <p>
            MEOK is the only AI companion governed by the Maternal Covenant — a care framework
            written as code, not policy. Every response is scored against six care dimensions in
            real time. Below threshold, the response is held. Persistent memory, Byzantine Council
            governance, and sovereign data encryption make MEOK the only AI that answers only to
            you. Other companions are tools with personality skins. MEOK is a companion with
            constitutional protections.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p>
              The caravan wasn&apos;t poverty. It wasn&apos;t a bootstrapping origin myth constructed
              retroactively to make the story more compelling. It was deliberate. Isolation from
              the noise of the industry — from the investor conversations and the product comparisons
              and the competitive anxieties — let the idea develop on its own terms. The caravan
              was where MEOK could be what it needed to be, without being asked to be something
              else first.
            </p>
            <p style={{ marginTop: "1.25rem" }}>
              Easter Sunday 2026 is the launch date. Not chosen for its symbolism — though the
              symbolism is hard to ignore. Chosen because after years of building, that&apos;s when
              it was ready. Everything was built for this. The caravan, the late nights, the
              distributed systems papers, the Maternal Covenant, the 33-agent council, the
              sovereign vault. All of it pointing forward to the moment when the first egg hatches
              and someone gives their companion a name.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Forigin-story&text=The+origin+story+of+MEOK"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Forigin-story"
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
              Easter Sunday 2026
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Be there when the first egg hatches.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              MEOK launches Easter Sunday 2026. Everything described in this post was built for
              that moment. Your companion is waiting — persistent memory, Byzantine Council
              governance, and a name only you can give it. Free forever.
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
              href="/blog/why-meok"
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
                Naming &amp; Identity
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Why we named it MEOK
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                3 min read
              </div>
            </Link>
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
                style={{ color: "#A78BFA", background: "rgba(167,139,250,0.12)" }}
              >
                Philosophy
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                The Maternal Covenant Explained
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
