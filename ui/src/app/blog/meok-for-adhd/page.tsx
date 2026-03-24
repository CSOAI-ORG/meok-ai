import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for ADHD: An AI That Actually Understands How You Think | MEOK Blog",
  description:
    "ADHD brains work differently — and most AI products weren't designed for them. MEOK's Literal Mode, pattern alerts, and neurodivergent-first design make it the first AI companion that thinks with you, not past you.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-adhd" },
  openGraph: {
    title: "MEOK for ADHD: An AI That Actually Understands How You Think",
    description:
      "ADHD brains work differently — and most AI products weren't designed for them. MEOK's Literal Mode, pattern alerts, and neurodivergent-first design make it the first AI companion that thinks with you, not past you.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-adhd",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+ADHD&desc=The+first+AI+companion+that+thinks+with+you%2C+not+past+you.",
        width: 1200,
        height: 630,
        alt: "MEOK for ADHD: An AI That Actually Understands How You Think",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for ADHD: An AI That Actually Understands How You Think",
    description:
      "ADHD brains work differently — and most AI products weren't designed for them. MEOK's Literal Mode, pattern alerts, and neurodivergent-first design make it the first AI companion that thinks with you, not past you.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+ADHD&desc=The+first+AI+companion+that+thinks+with+you%2C+not+past+you.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for ADHD: An AI That Actually Understands How You Think",
  description:
    "ADHD brains work differently — and most AI products weren't designed for them. MEOK's Literal Mode, pattern alerts, and neurodivergent-first design make it the first AI companion that thinks with you, not past you.",
  datePublished: "March 24, 2026",
  url: "https://meok.ai/blog/meok-for-adhd",
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

export default function MeokForADHD() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(135,206,235,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            ←
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
              Neurodivergent
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              📅
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              ⏱
              7 min read
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
            MEOK for ADHD: An AI That Actually Understands How You Think
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
            There are 9.5 million neurodivergent people in the UK. Almost no AI product was built
            for how they think. MEOK&apos;s Literal Mode, Ralph Mode, and neurodivergent-first
            design change that — one conversation at a time.
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
            <p className="font-bold text-[#1a1a2e] text-sm">Nicholas Templeman</p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">Founder, MEOK AI LABS</p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not
              a luxury.
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
            Every AI assistant I tried before building MEOK made the same assumption: that the
            person on the other end thinks in straight lines. That they have one task, one question,
            one thread of attention — and they want a clean answer and then they&apos;re done.
          </p>
          <p>
            That&apos;s not how ADHD works. And it&apos;s not how a lot of the 9.5 million
            neurodivergent people in the UK experience their days. Most AI tools weren&apos;t built
            with them in mind. MEOK was. Here&apos;s what that means in practice.
          </p>

          <h2>Can AI help with ADHD?</h2>
          <p>
            Yes — when it is designed for ADHD rather than adapted as an afterthought. AI can help
            with task initiation, context-switching, decision fatigue, and routine structure. The
            problem is that most AI tools add friction: they require precise prompts, lose context
            between sessions, and present information in walls of text that ADHD brains find hard
            to process. MEOK is built from the opposite direction.
          </p>

          <h2>What is Literal Mode and how does it help ADHD users?</h2>
          <p>
            Literal Mode is MEOK&apos;s communication setting that removes implied meaning, sarcasm,
            and idiomatic language from responses. Every answer is direct, plain, and structured.
            For ADHD users who spend cognitive energy parsing subtext and managing ambiguity, Literal
            Mode removes that overhead entirely — leaving more capacity for the actual task at hand.
          </p>

          <h3>What Literal Mode looks like in practice</h3>
          <p>
            Standard AI might respond to &ldquo;should I do this first?&rdquo; with &ldquo;That
            depends on a few factors...&rdquo; and then list six paragraphs. Literal Mode responds
            with &ldquo;Yes. Do this first because [one reason]. Then do [next step].&rdquo; No
            hedging. No options theatre. A direct answer that respects how the ADHD brain is
            actually working in that moment.
          </p>

          <h2>How does MEOK help with task management and ADHD?</h2>
          <p>
            MEOK&apos;s Morning Brief delivers a structured daily digest each morning — removing
            decision fatigue from the start of the day. Tasks are prioritised, context from the
            previous day is recalled automatically, and the AI surfaces only what is relevant right
            now. Ralph Mode handles overnight processing so the ADHD brain wakes to structure
            rather than chaos.
          </p>

          <h3>Ralph Mode: working while you sleep</h3>
          <p>
            Ralph Mode is MEOK&apos;s overnight agent. While the user sleeps, it processes
            outstanding tasks, organises notes from the previous day, drafts responses to pending
            messages, and prepares the Morning Brief. For ADHD users who context-switch constantly
            during the day, waking to a processed inbox rather than an accumulation of unfinished
            thoughts is a meaningful change in how the day starts.
          </p>

          <h3>Morning Brief: structure before the noise starts</h3>
          <p>
            The Morning Brief is a structured, scannable digest delivered at a time the user sets.
            It contains: the three most important things today, one thing carried forward from
            yesterday, and any time-sensitive items. It does not contain everything. Filtering is
            the point — giving the ADHD brain a place to start rather than a pile to sort through.
          </p>

          <h2>Does MEOK work for adults with ADHD?</h2>
          <p>
            MEOK is built primarily for adults — it does not assume a school or work context, does
            not require a diagnosis, and does not treat ADHD as a deficit to compensate for. Adults
            with ADHD often have well-developed coping strategies and what they need is an AI that
            works with those strategies rather than ignoring them. MEOK learns individual
            communication style over time and adapts accordingly.
          </p>

          <h3>Companion evolution</h3>
          <p>
            MEOK&apos;s companion remembers how you communicate across sessions. If you think in
            bullet points, it mirrors that. If you prefer long-form explanation, it matches. If you
            tend to spiral when anxious and need grounding, it learns to recognise the pattern and
            offer a redirect. The companion becomes a more accurate model of you the longer you work
            together — not because it is training on your data for its benefit, but because you
            are genuinely its only priority.
          </p>

          <h2>What is neurodivergent-first AI design?</h2>
          <p>
            Neurodivergent-first design means building the AI around cognitive diversity rather than
            treating neurotypical assumptions as the default. It means Pattern Alerts that flag when
            a conversation is being used to manipulate — because ADHD users are 50% more likely to
            be fraud victims. It means Comfort Settings that adjust the entire interface. It means
            never punishing non-linear thinking.
          </p>

          <h3>Pattern Alerts: protecting neurodivergent users from manipulation</h3>
          <p>
            Adults with ADHD are statistically more likely to be targeted by fraud and manipulation.
            MEOK&apos;s Pattern Alerts monitor conversation patterns for signs of boundary
            violations, social engineering, or escalating pressure — and flag them without judgment.
            It is not surveillance. It is the friend who notices what you might miss when
            you&apos;re fully focused on something else.
          </p>

          <h2>How does MEOK reduce sensory overload?</h2>
          <p>
            MEOK&apos;s Comfort Settings allow users to reduce motion across the interface, increase
            contrast, adjust font size, and toggle all sounds off. Every setting is accessible in
            one tap from any screen. For users in overload states, fewer clicks to safety matters
            — so the interface does not require navigation to reach the settings that help most.
          </p>

          <h3>One-tap access to calm</h3>
          <p>
            The Comfort Settings shortcut is always visible. It does not require the user to
            remember where to find it, navigate a menu, or explain why they need it. It is there
            because sensory overload rarely announces itself in advance — and because the people who
            need these settings most are usually the ones with the least spare cognitive capacity
            to find them.
          </p>

          <h2>How is MEOK different from other AI tools for ADHD?</h2>
          <p>
            Most AI tools for ADHD are general-purpose AI with an ADHD feature bolted on. MEOK is
            built the other way around — neurodivergent-first, with sovereign memory that persists
            across sessions, a Guardian mode that includes school-safe content and safe social media
            analysis, and a Maternal Covenant alignment that prioritises the user&apos;s wellbeing
            over engagement. It does not try to keep you on the app. It tries to help you get off it.
          </p>

          <h3>Guardian for younger users</h3>
          <p>
            For families with neurodivergent children or teenagers, MEOK Guardian includes
            school-safe mode and safe social media analysis — flagging content patterns that may be
            harmful without censoring legitimate exploration. It is not a content blocker. It is a
            companion that notices things and asks about them, the way a trusted adult would.
          </p>
        </div>

        {/* Closing pull quote */}
        <div
          className="my-10 rounded-2xl p-8"
          style={{
            background: "#0d0c18",
            borderLeft: "3px solid #87CEEB",
          }}
        >
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            Most AI assumes you think in straight lines. MEOK assumes you don&apos;t — and builds
            from there. The ADHD brain is not broken. It was just handed tools designed for someone
            else.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            Sovereign AI means AI that works the way you work. Not the way the product team
            imagined you working.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-adhd&text=MEOK+for+ADHD%3A+An+AI+That+Actually+Understands+How+You+Think"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-adhd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-10 relative overflow-hidden"
          style={{ background: "#0d0c18" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(135,206,235,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#87CEEB" }}
            >
              Neurodivergent-first
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              An AI that thinks the way you think.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Literal Mode. Morning Brief. Ralph Mode. Pattern Alerts. Comfort Settings. Built for
              the ADHD brain — and free to hatch in 10 minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/hatch"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "#87CEEB", color: "#0d0c18" }}
              >
                Hatch your AI free
                →
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all border"
                style={{
                  color: "rgba(245,240,232,0.7)",
                  borderColor: "rgba(245,240,232,0.15)",
                }}
              >
                See all features
              </Link>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/why-your-nan-needs-sovereign-ai"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#7BC47F", background: "rgba(123,196,127,0.12)" }}
              >
                Guardian
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Why Your Nan Needs Sovereign AI More Than Your CTO Does
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/ai-companion-for-elderly"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#7BC47F", background: "rgba(123,196,127,0.12)" }}
              >
                Guardian
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                AI Companion for Elderly Parents: What Families Need to Know
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱
                7 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
