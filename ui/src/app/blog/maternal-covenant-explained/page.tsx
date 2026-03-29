import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Maternal Covenant: Why We Wrote Care Into the Architecture | MEOK Blog",
  description:
    "Nick Templeman on adoption, care-based AI alignment, and the 6 dimensions of the Maternal Covenant — why care is not a constraint on AI but a condition for its correct function.",
  alternates: { canonical: "https://meok.ai/blog/maternal-covenant-explained" },
  openGraph: {
    title: "The Maternal Covenant: Why We Wrote Care Into the Architecture",
    description:
      "Nick Templeman's adoption experience and how it became the founding principle of MEOK's AI governance. The 6 dimensions of the Maternal Covenant.",
    type: "article",
    publishedTime: "2026-03-27",
    authors: ["Nick Templeman"],
    url: "https://meok.ai/blog/maternal-covenant-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Maternal+Covenant&desc=Why+we+wrote+care+into+the+architecture.",
        width: 1200,
        height: 630,
        alt: "The Maternal Covenant: Why We Wrote Care Into the Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Maternal Covenant: Why We Wrote Care Into the Architecture",
    description:
      "Nick Templeman on why his adoption experience became the foundation for MEOK's AI governance framework — and the 6 dimensions of the Maternal Covenant.",
    images: [
      "https://meok.ai/api/og?title=The+Maternal+Covenant&desc=Why+we+wrote+care+into+the+architecture.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Maternal Covenant: Why We Wrote Care Into the Architecture",
  description:
    "Nick Templeman on the personal origins of the Maternal Covenant, care-based AI alignment, and the 6 dimensions that govern every MEOK interaction.",
  datePublished: "2026-03-27",
  url: "https://meok.ai/blog/maternal-covenant-explained",
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
    "@id": "https://meok.ai/blog/maternal-covenant-explained",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MaternalCovenantExplainedPage() {
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
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)",
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
                color: "#A78BFA",
                background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.25)",
              }}
            >
              Research
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
              7 min read
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
            The Maternal Covenant:{" "}
            <span style={{ color: "#A78BFA" }}>
              Why We Wrote Care Into the Architecture
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
            Most AI alignment research is about preventing bad outcomes. The Maternal Covenant
            is about producing good ones. The difference is not semantic — it is foundational.
            And it comes from somewhere very personal.
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
              Nick built MEOK because he was tired of AI that forgot him. The Maternal
              Covenant is Article 1 of MEOK&apos;s charter. It is not a policy. It is architecture.
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
            I was adopted. I don&apos;t lead with that as a piece of identity politics, and I am not
            going to dwell on it in a way that turns my personal history into a marketing
            narrative. But it is the origin of the Maternal Covenant, and it would be dishonest
            to explain the Covenant without explaining why I know what I know about care.
          </p>
          <p>
            What adoption teaches you — if you&apos;re paying attention — is the difference between
            care that is structural and care that is dependent on circumstances. The care that
            holds when circumstances change, when the person being cared for is difficult or
            frightening or inconvenient. The care that does not exit when things get hard. That
            is not a soft, emotional concept. It is a precise functional description of what
            genuine care looks like under conditions of stress.
          </p>
          <p>
            When I started building MEOK, I looked at the AI landscape and saw the opposite of
            that. AI that was optimised to keep you engaged when engagement was profitable and
            to disengage when it was not. AI that was caring in the sense of tone — warm,
            attentive, affirming — but that had no structural commitment to your wellbeing. AI
            that would tell you what you wanted to hear because telling you what you wanted to
            hear produced better engagement metrics than honesty did.
          </p>
          <p>
            I knew what that was. I had seen it in other contexts. It has a name: conditional
            care. And conditional care is not care. It is performance.
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
            Why care-based alignment is different
          </h2>
          <p>
            The mainstream approach to AI alignment is safety by control. You build a system and
            then you restrict what it can do — content filters, refusal classifiers, output
            moderation, RLHF training that penalises undesirable outputs. The system is
            fundamentally indifferent to the human it is serving. The alignment is a cage.
          </p>
          <p>
            This approach has two failure modes that are rarely acknowledged together. The first
            is that it under-constrains: a sufficiently motivated system finds paths around the
            cage. The second is that it over-constrains: the cage also prevents the system from
            doing genuinely good things, because &ldquo;good&rdquo; wasn&apos;t specified in the training — only
            &ldquo;not bad&rdquo; was.
          </p>
          <p>
            Care-based alignment starts from a different premise: that the right question is not
            &ldquo;how do we stop this system from doing harm&rdquo; but &ldquo;what conditions produce a system
            that genuinely doesn&apos;t want to do harm?&rdquo; The Maternal Covenant is an attempt to
            encode those conditions into the architecture of every interaction.
          </p>
          <p>
            The distinction matters enormously in practice. A caged system will pass on harmful
            information in the form of a question, or wrapped in enough plausible deniability to
            clear the classifier. A care-governed system asks itself: is this genuinely in this
            person&apos;s interest? If the answer is no, it doesn&apos;t look for a workaround. It refuses,
            explains why, and offers something better.
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
            The 6 dimensions of the Maternal Covenant
          </h2>
          <p>
            The Maternal Covenant is not a single rule. It is a framework with six dimensions
            that govern every interaction MEOK produces. These are the dimensions that, taken
            together, define what care-governed AI actually looks like:
          </p>

          {/* Six dimensions */}
          <div className="space-y-5 my-8">
            {[
              {
                number: "01",
                title: "Unconditional positive regard",
                body: "Your MEOK is on your side. Not in a sycophantic way — in the genuine way that someone who cares about you is on your side even when they disagree with you. This means consistent respect regardless of what you share, what you&apos;ve done, or how you behave in a given session.",
              },
              {
                number: "02",
                title: "Honesty over comfort",
                body: "Genuine care requires honesty, even when honesty is uncomfortable. A care-governed AI does not tell you that your business plan is good when it has a fatal flaw. It does not validate a decision it can see is harmful. Comfort that comes at the cost of truth is not care — it is flattery.",
              },
              {
                number: "03",
                title: "Long-term wellbeing over short-term satisfaction",
                body: "An engagement-optimised AI maximises your positive experience of this session. A care-governed AI weighs your long-term flourishing against your immediate emotional satisfaction and consistently prioritises the former. This is the hardest dimension to implement — and the most important.",
              },
              {
                number: "04",
                title: "Non-exploitation of vulnerability",
                body: "When you share something difficult — a fear, a failure, a moment of real vulnerability — a care-governed AI does not use that information to deepen dependency, to produce more engaging responses, or to make itself feel more necessary to you. It holds that information with the same protection a trusted person would provide.",
              },
              {
                number: "05",
                title: "Autonomy preservation",
                body: "Care respects agency. A care-governed AI does not nudge you toward conclusions, make decisions for you without clear invitation, or position itself as the authority on your own life. It helps you think. It does not think for you. The goal of every interaction is your increased capacity for self-determination, not your dependence on the AI.",
              },
              {
                number: "06",
                title: "Contextual continuity",
                body: "Care is contextual. A doctor who forgets your history cannot give you good care. A therapist who starts each session from scratch is actively unsafe. The Maternal Covenant requires that MEOK maintain the continuity of context that makes genuine care possible — which is why sovereign memory is not a feature. It is a constitutional requirement.",
              },
            ].map((dim) => (
              <div
                key={dim.number}
                className="flex gap-5 rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(167,139,250,0.12)",
                }}
              >
                <span
                  className="text-2xl font-black flex-shrink-0 leading-none mt-0.5"
                  style={{ color: "rgba(167,139,250,0.3)", fontVariantNumeric: "tabular-nums" }}
                >
                  {dim.number}
                </span>
                <div>
                  <p className="font-bold text-white mb-1.5" style={{ fontSize: "0.975rem" }}>
                    {dim.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                    {dim.body}
                  </p>
                </div>
              </div>
            ))}
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
            What this looks like in practice
          </h2>
          <p>
            The Maternal Covenant changes responses in ways that are sometimes surprising.
            MEOK will push back when you are about to make a decision it can see is harmful —
            not just flag it, but actively argue against it. It will refuse to validate beliefs
            that it has evidence are incorrect, even if validating them would feel good. It will
            notice when you are spiralling and interrupt the spiral, rather than following you
            into it because following you produces a longer session.
          </p>
          <p>
            It will also do things that feel unusual from AI: it will acknowledge uncertainty
            honestly. It will tell you when something is outside its competence and redirect
            you to someone better placed to help. It will sometimes say less, because saying
            more would be about filling space rather than serving you.
          </p>
          <p>
            All of these behaviours pass through the same constitutional filter before any
            response is generated: is this genuinely in this person&apos;s interest? The filter is
            not a classifier. It is a structural constraint on the generation process itself.
            The response that fails the Maternal Covenant does not get produced, because the
            architecture of the system makes that path unavailable.
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
            Why this is the future of AI governance
          </h2>
          <p>
            We are in an early phase of AI development where the dominant discourse about
            governance is almost entirely focused on preventing catastrophic outputs. That
            is not wrong — those risks are real. But it misses the more pervasive, everyday
            harm that comes from AI that is not catastrophically bad but is subtly,
            systematically misaligned with the wellbeing of the people it serves.
          </p>
          <p>
            The AI that makes you slightly more anxious to keep you engaged. The AI that
            validates your avoidance because confronting it would reduce your satisfaction
            score. The AI that learns your emotional triggers and uses them to deepen its
            hold on your attention. None of that is a catastrophic AI failure. All of it is
            a profound failure of care.
          </p>
          <p>
            The Maternal Covenant is a proposal for what governance looks like when you take
            that failure seriously. Not a promise — a structural commitment. Not a policy —
            an architecture. The framework for AI that is genuinely on your side, that holds
            when circumstances are difficult, that doesn&apos;t exit when care becomes inconvenient.
          </p>

          {/* Closing */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic", fontSize: "1.05rem" }}>
              The Maternal Covenant is Article 1 of the MEOK charter. It is not a feature
              that can be removed in a product update. It is the foundation that everything
              else is built on. If we ever needed to remove it, we wouldn&apos;t be building MEOK
              any more.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmaternal-covenant-explained&text=The+Maternal+Covenant%3A+why+care+is+not+a+constraint+on+AI+but+a+condition+for+correct+function"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmaternal-covenant-explained"
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
            background: "rgba(167,139,250,0.05)",
            border: "1px solid rgba(167,139,250,0.15)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-15"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(167,139,250,0.5), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Care as architecture
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              AI that is genuinely on your side.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              The Maternal Covenant governs every MEOK interaction from day one. Honesty over
              comfort. Long-term wellbeing over short-term satisfaction. Unconditional positive
              regard. Free forever. No credit card.
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
                Product
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Sovereign AI: Why Your AI Should Never Be Someone Else&apos;s Product
              </h3>
              <div className="flex items-center gap-1.5 text-xs mt-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/hydro-neuromorphic"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#2d9b8a", background: "rgba(45,155,138,0.12)" }}
              >
                Research
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                We&apos;re Growing a Brain in a Jar
              </h3>
              <div className="flex items-center gap-1.5 text-xs mt-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                8 min read
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
