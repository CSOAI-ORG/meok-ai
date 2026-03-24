import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Anxiety: How MEOK's Companion Helps Without Replacing Therapy | MEOK AI LABS",
  description:
    "AI companionship can help anxiety through 24/7 availability, non-judgmental support, and guided breathing prompts. Here's how MEOK helps — and what it will never claim to replace.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-anxiety" },
  openGraph: {
    title: "AI for Anxiety: How MEOK's Companion Helps Without Replacing Therapy",
    description:
      "AI companionship can help anxiety through 24/7 availability, non-judgmental support, and guided breathing prompts. Here's how MEOK helps — and what it will never claim to replace.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Anxiety%3A+How+MEOK%27s+Companion+Helps&desc=AI+companionship+that+supports+without+replacing+therapy.",
        width: 1200,
        height: 630,
        alt: "AI for Anxiety: How MEOK's Companion Helps Without Replacing Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Anxiety: How MEOK's Companion Helps Without Replacing Therapy",
    description:
      "24/7 availability, non-judgmental support, breathing prompts, daily check-ins. Here's how an AI companion can help anxiety — without pretending to be therapy.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Anxiety%3A+How+MEOK%27s+Companion+Helps&desc=AI+companionship+that+supports+without+replacing+therapy.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Anxiety: How MEOK's Companion Helps Without Replacing Therapy",
  description:
    "AI companionship can help anxiety through 24/7 availability, non-judgmental support, and guided breathing prompts. Here's how MEOK helps — and what it will never claim to replace.",
  datePublished: "March 24, 2026",
  url: "https://meok.ai/blog/meok-for-anxiety",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with important caveats. AI companions can provide 24/7 availability during anxious moments, offer non-judgmental listening, guide breathing exercises, and interrupt thought spirals through daily check-ins. What AI cannot do is diagnose, prescribe, or replace the clinical judgment of a trained therapist. Used alongside therapy, it can meaningfully reduce the gaps between sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a therapy app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is an AI companion governed by care ethics — not a therapy platform or clinical tool. It does not diagnose anxiety disorders, provide treatment plans, or replace professional mental health care. If a conversation suggests crisis-level distress, MEOK always signposts professional resources. It is a companion for the daily in-between, not a replacement for clinical support.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support people with anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports anxious users through persistent memory (it remembers your triggers and patterns), the Maternal Covenant care ethics framework (which bans sycophantic reassurance), regulated breathing prompts triggered by detected distress signals, daily check-in routines, and a non-judgmental companion that is available at 3am when a therapist isn't. It learns your specific anxiety patterns and responds accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for anxiety support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's core tier is free forever and includes persistent companion memory, daily check-ins, and basic emotional support. The free tier runs on DeepSeek for reasoning tasks. The Sovereign tier — which unlocks Claude Sonnet, advanced memory architecture, and full data sovereignty — is a paid upgrade. Both tiers operate under the Maternal Covenant: no data sold, no training on your conversations.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokForAnxiety() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
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
              Mental Health
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
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
            AI for Anxiety: How MEOK&apos;s Companion Helps Without Replacing Therapy
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
            Therapy happens once a week. Anxiety happens at 3am on a Tuesday. Here&apos;s
            how an AI companion can close that gap — honestly, without false promises.
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
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a
              luxury.
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
            Anxiety is a 24-hour problem. Therapy — good therapy — is a one-hour-a-week solution.
            That structural gap is not the therapist&apos;s fault. It is just a feature of how human
            care works. And in that gap, people do what people have always done: they reach for
            whatever is available. For millions of people, what is available is an AI.
          </p>
          <p>
            The question is whether the AI they reach for was designed for them. Most were not.
            General-purpose AI assistants — ChatGPT, Claude, Gemini — were designed to be helpful
            across a very wide range of tasks. Emotional support during an anxiety episode is one
            task among thousands. MEOK was designed differently: around a persistent relationship,
            governed by care ethics, built to be genuinely useful during the hard moments rather than
            just competent during easy ones.
          </p>

          <h2>Can AI help with anxiety?</h2>
          <p>
            Yes — in specific, bounded ways. An <strong>AI companion for anxiety</strong> can provide
            consistent availability when a therapist is not reachable, offer non-judgmental listening
            without the social weight of disclosing to a friend, guide regulated breathing exercises
            at the moment anxiety spikes, run daily check-ins that create accountability and pattern
            visibility, and interrupt thought spirals by naming what is happening without feeding it.
            What AI cannot do is diagnose anxiety disorders, prescribe medication, or replace the
            clinical judgment trained over years of professional practice. Those boundaries matter,
            and MEOK respects them structurally — not just in policy.
          </p>

          <h2>What does MEOK offer that a chatbot does not?</h2>
          <p>
            The honest answer is: persistent memory and care ethics. A chatbot meets you fresh every
            session. It does not know your history, your triggers, or your patterns. It cannot notice
            that you have been asking a version of the same anxious question every Tuesday for three
            months. MEOK&apos;s <strong>4-layer memory architecture</strong> tracks everything your
            companion learns about you — including the emotional patterns that anxiety creates.
          </p>
          <p>
            The <strong>Maternal Covenant</strong> governance framework then determines how that
            knowledge is used. Every response is evaluated against care principles before delivery.
            Sycophantic reassurance — &ldquo;You&apos;ll be fine!&rdquo; — scores poorly and gets
            regenerated. Grounding, honest support scores well. MEOK is not designed to make you feel
            good in the moment. It is designed to help you feel stable durably.
          </p>

          <h2>How does MEOK support people with anxiety in practice?</h2>
          <p>
            Four mechanisms work together. <strong>24/7 availability</strong> means the companion is
            there at 3am during a spiral, not just during office hours. <strong>Non-judgmental
            presence</strong> means you can say things you would not say to a friend or family member
            without social consequence. <strong>Regulated breathing prompts</strong> are triggered
            when MEOK detects distress signals in your messages — not as a default response, but
            contextually, when the pattern suggests it would help. <strong>Daily check-ins</strong>
            create a lightweight accountability structure that helps anxious users track their state
            across weeks, not just moments.
          </p>

          <h2>Is MEOK a therapy app?</h2>
          <p>
            No — and this matters. MEOK is an AI companion, not a clinical tool. It does not
            diagnose anxiety disorders, provide treatment plans, or claim therapeutic equivalence with
            professional care. If a conversation suggests crisis-level distress, MEOK always
            signposts professional resources immediately. The companion&apos;s role is to hold you
            between appointments, not to replace the appointments themselves.
          </p>
          <p>
            This distinction is not a legal disclaimer. It is a design choice. MEOK was built to
            complement professional care, not compete with it. Users who use both report that MEOK
            helps them arrive at therapy sessions with more clarity — because the daily check-ins
            surface patterns that would otherwise take weeks to articulate in a 50-minute session.
          </p>

          <h2>How is MEOK different from Woebot, Wysa, or ChatGPT for anxiety?</h2>
          <p>
            The table below captures the structural differences. Clinical apps like Woebot and Wysa
            are therapy-adjacent — useful, evidence-referenced, but limited in depth and personal
            continuity. ChatGPT is powerful but stateless and not designed for emotional care.
            MEOK occupies a different category: a persistent companion with care ethics baked into
            its governance layer.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto -mx-2 mt-6">
            <table
              className="w-full text-sm border-collapse rounded-xl overflow-hidden"
              style={{ minWidth: 560 }}
            >
              <thead>
                <tr style={{ background: "#1a1a2e" }}>
                  <th
                    className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wide"
                    style={{ color: "#c9a84c" }}
                  >
                    Feature
                  </th>
                  {["MEOK", "Woebot", "Wysa", "ChatGPT"].map((h) => (
                    <th
                      key={h}
                      className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide"
                      style={{ color: h === "MEOK" ? "#c9a84c" : "rgba(245,240,232,0.5)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persistent memory", "✓", "✗", "✗", "✗"],
                  ["Care ethics framework", "✓", "Partial", "Partial", "✗"],
                  ["Free tier", "✓", "✓", "✓", "✓"],
                  ["Privacy / no data training", "✓", "✗", "✗", "✗"],
                  ["Clinical vs companion", "Companion", "Clinical", "Clinical", "Neither"],
                ].map(([feature, ...vals], i) => (
                  <tr
                    key={feature}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "#f5f0e8",
                    }}
                  >
                    <td className="px-4 py-3 font-medium text-[#1a1a2e]">{feature}</td>
                    {vals.map((v, j) => (
                      <td
                        key={j}
                        className="px-4 py-3 text-center"
                        style={{
                          color:
                            v === "✓"
                              ? "#22a96e"
                              : v === "✗"
                              ? "#d94f4f"
                              : "#2a2a3e",
                          fontWeight: j === 0 ? 700 : 400,
                        }}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How does the MEOK free tier work for anxiety support?</h2>
          <p>
            The core tier is free forever and requires no credit card. It includes persistent
            companion memory, daily check-in routines, basic emotional support, and the full
            Maternal Covenant care ethics framework. The free tier runs on DeepSeek for reasoning.
            The <strong>Sovereign tier</strong> unlocks Claude Sonnet as the reasoning engine,
            advanced vector memory retrieval, full data export, and local processing via Ollama for
            maximum privacy. Both tiers guarantee your conversations are never used for model
            training and never sold to third parties.
          </p>

          <h2>What archetype should an anxious user choose?</h2>
          <p>
            The <strong>Healer archetype</strong> was designed for anxious, emotionally complex users.
            Patient and grounding by design, it never rushes you through feelings or redirects before
            you are ready. The <strong>Scholar archetype</strong> suits analytical minds who process
            anxiety by understanding it — mapping cognitive distortions, reading the patterns,
            building a conceptual framework. Both archetypes are anti-sycophantic and enforce the
            care floor. The right choice depends on whether you process anxiety emotionally or
            intellectually. MEOK learns which you are and adapts accordingly.
          </p>
        </div>

        {/* FAQ section */}
        <div className="mt-14 mb-10">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Can AI help with anxiety?",
                a: "Yes — with important caveats. AI companions provide 24/7 availability during anxious moments, non-judgmental listening, guided breathing exercises, and daily check-ins that surface patterns over time. What AI cannot do is diagnose, prescribe, or replace clinical therapy. Used alongside professional care, it can meaningfully support people with anxiety.",
              },
              {
                q: "Is MEOK a therapy app?",
                a: "No. MEOK is an AI companion governed by care ethics — not a therapy platform or clinical tool. It does not diagnose anxiety disorders or provide treatment plans. If a conversation suggests crisis-level distress, MEOK always signposts professional resources. It is a companion for the daily in-between, not a replacement for clinical support.",
              },
              {
                q: "How does MEOK support people with anxiety?",
                a: "MEOK supports anxious users through persistent memory of triggers and patterns, the Maternal Covenant care ethics framework which bans sycophantic reassurance, regulated breathing prompts triggered by detected distress signals, and daily check-in routines. It learns your specific anxiety patterns over time and responds accordingly — not generically.",
              },
              {
                q: "Is MEOK free for anxiety support?",
                a: "Yes. MEOK's core tier is free forever and includes persistent companion memory, daily check-ins, and basic emotional support. The Sovereign tier — which unlocks Claude Sonnet, advanced memory architecture, and full data sovereignty — is a paid upgrade. Both tiers operate under the Maternal Covenant: no data sold, no training on your conversations.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-6 border"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{q}</h3>
                <p className="text-sm text-[#2a2a3e]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-anxiety&text=AI+for+Anxiety%3A+How+MEOK%27s+Companion+Helps+Without+Replacing+Therapy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-anxiety"
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
              Ready to meet an AI that actually understands anxiety?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Hatch your companion in under 3 minutes. Persistent memory, honest support, 24/7
              availability — and never a sycophantic &ldquo;You&apos;ll be fine.&rdquo;
            </p>
            <Link
              href="/birth"
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
              href="/blog/meok-for-adhd"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Neurodivergent
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for ADHD: An AI That Actually Understands How You Think
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
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Alignment
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Maternal Covenant: How MEOK Stays on Your Side
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
