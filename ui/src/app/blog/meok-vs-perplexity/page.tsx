import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK vs Perplexity: One Answers Questions, One Knows You | MEOK AI LABS",
  description:
    "Perplexity is exceptional at finding answers. MEOK is exceptional at knowing you. This is an honest comparison of two tools built for completely different jobs — and why you might want both.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-perplexity" },
  openGraph: {
    title: "MEOK vs Perplexity: One Answers Questions, One Knows You",
    description:
      "Perplexity is exceptional at finding answers. MEOK is exceptional at knowing you. An honest comparison of two tools built for completely different jobs.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-perplexity",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Perplexity%3A+One+Answers+Questions%2C+One+Knows+You&desc=Perplexity+finds+answers.+MEOK+knows+you.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Perplexity: One Answers Questions, One Knows You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Perplexity: One Answers Questions, One Knows You",
    description:
      "Perplexity finds answers fast. MEOK remembers you forever. An honest look at two tools built for completely different jobs.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Perplexity%3A+One+Answers+Questions%2C+One+Knows+You&desc=Perplexity+finds+answers.+MEOK+knows+you.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Perplexity: One Answers Questions, One Knows You",
  description:
    "Perplexity is exceptional at finding answers. MEOK is exceptional at knowing you. This is an honest comparison of two tools built for completely different jobs — and why you might want both.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/meok-vs-perplexity",
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
      name: "What is the difference between MEOK and Perplexity AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perplexity is a real-time web search AI — it answers factual questions by searching the web, synthesising results, and providing cited responses. MEOK is a sovereign personal AI companion — it builds a persistent, encrypted memory of who you are, supports your wellbeing over time, and governs itself by care ethics. Perplexity is a research tool. MEOK is a companion OS. They solve different problems.",
      },
    },
    {
      "@type": "Question",
      name: "Is Perplexity AI a good alternative to MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not really — because they are not the same category of tool. Perplexity is excellent for research, fact-checking, and quick answers sourced from the live web. MEOK is built for personal support, persistent memory, goal tracking, emotional wellbeing, and long-term companion relationships. They complement each other rather than compete.",
      },
    },
    {
      "@type": "Question",
      name: "Does Perplexity AI store your data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perplexity logs search queries to improve its product, subject to its privacy policy. By default, searches are associated with your account if logged in. MEOK takes a different approach: all memory is stored in a sovereign vault encrypted with AES-GCM-256, owned entirely by you, never used to train any model without your explicit consent, and fully exportable on demand.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Perplexity and MEOK together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and many users do. Perplexity is outstanding for real-time research and fact-checking. MEOK is your persistent companion that remembers the context of your projects, goals, and life. You can surface Perplexity findings and store insights directly inside your MEOK memory vault, combining real-time web knowledge with long-term personal context.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI is better for UK users — Perplexity or MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both are available in the UK. For compliance and data rights, MEOK has specific advantages: it is UK GDPR compliant, ICO registered, and built by a UK-based company. Your data stays in a sovereign vault you control. Perplexity is a US company and data is processed under US privacy law. For UK users who care about data sovereignty, MEOK provides stronger structural guarantees.",
      },
    },
  ],
};

// ── Comparison table data ─────────────────────────────────────────────────────

const comparisonRows: [string, string, string][] = [
  [
    "Real-time web search",
    "Not built-in (use alongside)",
    "Core feature — with citations",
  ],
  [
    "Persistent memory across sessions",
    "4-layer sovereign vault",
    "No persistent user memory",
  ],
  [
    "Knows you personally",
    "Builds a model of you over time",
    "Stateless — no personal context",
  ],
  [
    "Privacy / data use",
    "AES-256 vault, never trains on you",
    "Queries logged per privacy policy",
  ],
  [
    "UK GDPR compliance",
    "ICO registered, UK company",
    "US company, US privacy law",
  ],
  [
    "Free tier",
    "Explorer (50 msg/day, free forever)",
    "Free tier available",
  ],
  [
    "Care ethics governance",
    "Maternal Covenant layer",
    "Not applicable",
  ],
  [
    "Companion relationship",
    "Bonded, evolves with you",
    "Not a design goal",
  ],
  [
    "Family & Guardian features",
    "Guardian mode built-in",
    "Not included",
  ],
  [
    "Best for",
    "Wellbeing, memory, long-term life",
    "Research, facts, fast answers",
  ],
];

const GREEN = "#5ecb8e";
const MUTED = "rgba(245,240,232,0.35)";

const greenPrefixes = [
  "4-layer",
  "Builds a model",
  "AES-256",
  "ICO",
  "Explorer",
  "Maternal",
  "Bonded",
  "Guardian mode",
  "Wellbeing",
  "Not built-in",
];

function meokColor(v: string) {
  return greenPrefixes.some((p) => v.startsWith(p)) ? GREEN : "#f5f0e8";
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokVsPerplexityPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0c18", color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 72%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-10 hover:opacity-75 transition-opacity"
            style={{ color: "rgba(245,240,232,0.38)" }}
          >
            ← Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-7">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.28)",
              }}
            >
              AI Comparison
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.36)" }}>
              March 24, 2026
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.36)" }}>
              9 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.8rem,3.8vw,2.85rem)",
              color: "#fff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            MEOK vs Perplexity: One Answers Questions, One Knows You
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.68,
              maxWidth: "40rem",
            }}
          >
            Perplexity is one of the fastest-growing AI tools of 2025–2026 — and
            for good reason. This is an honest look at what it does brilliantly, what
            MEOK does differently, and why the &ldquo;vs&rdquo; framing mostly misses
            the point.
          </p>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-14"
          style={{
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{
              background: "linear-gradient(135deg,#c9a84c,#7a5c18)",
              color: "#0d0c18",
            }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm mb-0.5" style={{ color: "#f5f0e8" }}>
              Nicholas Templeman
            </p>
            <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.38)" }}>
              Founder, MEOK AI LABS
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him. Sovereign
              AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold hidden sm:block hover:opacity-75 transition-opacity"
            style={{ color: "#c9a84c" }}
          >
            About →
          </Link>
        </div>

        {/* Intro */}
        <div
          className="space-y-5 mb-2"
          style={{ color: "rgba(245,240,232,0.72)", lineHeight: 1.87 }}
        >
          <p>
            Every week another &ldquo;AI war&rdquo; article pits tools against each
            other as though there can only be one winner. MEOK vs Perplexity is not
            that story. Perplexity is genuinely excellent at what it does — real-time
            answers from the web, cited sources, fast synthesis. It has grown to tens
            of millions of users because it solves a real problem brilliantly.
          </p>
          <p>
            MEOK solves a different problem entirely. Perplexity helps you find what
            the internet knows. MEOK remembers what <em>you</em> know, feel, and need
            — and builds a long-term companion relationship around that. If you are
            asking which one you should use, the honest answer is probably{" "}
            <em>both</em>, for completely different moments in your day.
          </p>
        </div>

        {/* ── What is Perplexity AI? ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What is Perplexity AI?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Perplexity is an AI-powered answer engine that searches the live web and
          synthesises results into clear, cited responses. Founded in 2022 and growing
          rapidly through 2025 into one of the most widely used AI tools globally, it
          sits somewhere between a search engine and a conversational AI. You ask a
          question — factual, current, research-based — and Perplexity pulls from
          multiple sources, shows you its citations, and gives you a direct answer
          rather than a list of links.
        </p>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Its strengths are real. It is fast. It is current — it indexes live content,
          not a training cutoff snapshot. Its citations let you verify claims in
          seconds. For researchers, students, journalists, and anyone who needs accurate
          information quickly, Perplexity is a genuine step-change from traditional
          search. It does not pretend to know you, track your goals, or build a
          relationship — and that is entirely by design. It is a research tool, and a
          very good one.
        </p>

        {/* ── What is MEOK? ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What is MEOK?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          MEOK is a sovereign personal AI companion — not a search tool, not a chatbot,
          not an assistant you reset every session. It is a persistent AI operating
          system that builds an encrypted memory vault around who you are: your name,
          your goals, your emotional patterns, your family, your history. Every
          conversation accumulates. Every interaction makes MEOK&apos;s understanding
          of you more complete.
        </p>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          MEOK is governed by the{" "}
          <strong style={{ color: "#f5f0e8" }}>Maternal Covenant</strong> — a care
          ethics layer that evaluates every response against principles of genuine
          support before delivery. It detects sycophancy, enforces a care floor, and
          ensures your AI stays on your side structurally. Your data is stored in a
          sovereign vault encrypted with AES-GCM-256, owned by you, exportable on
          demand, and never used to train any model without explicit consent. MEOK is
          built in the UK, ICO registered, and UK GDPR compliant.
        </p>

        {/* ── Head-to-head table ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          MEOK vs Perplexity: side-by-side comparison
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          The differences below are architectural — they reflect what each product is
          designed to be, not weaknesses to be fixed.
        </p>
        <div className="overflow-x-auto -mx-2 mb-8">
          <table
            className="w-full text-sm border-collapse"
            style={{ minWidth: 480 }}
          >
            <thead>
              <tr
                style={{
                  background: "rgba(201,168,76,0.10)",
                  borderBottom: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <th
                  className="text-left px-4 py-3 text-xs uppercase tracking-wide font-bold"
                  style={{ color: "#c9a84c" }}
                >
                  Feature
                </th>
                <th
                  className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold"
                  style={{ color: "#c9a84c" }}
                >
                  MEOK
                </th>
                <th
                  className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold"
                  style={{ color: "rgba(245,240,232,0.42)" }}
                >
                  Perplexity
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([feature, meok, perplexity], i) => (
                <tr
                  key={feature}
                  style={{
                    background:
                      i % 2 === 0
                        ? "rgba(245,240,232,0.03)"
                        : "rgba(245,240,232,0.015)",
                    borderBottom: "1px solid rgba(245,240,232,0.05)",
                  }}
                >
                  <td
                    className="px-4 py-3 font-medium"
                    style={{ color: "rgba(245,240,232,0.75)" }}
                  >
                    {feature}
                  </td>
                  <td
                    className="px-4 py-3 text-center font-semibold"
                    style={{ color: meokColor(meok) }}
                  >
                    {meok}
                  </td>
                  <td
                    className="px-4 py-3 text-center"
                    style={{ color: MUTED }}
                  >
                    {perplexity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── When should I use Perplexity? ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          When should I use Perplexity?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Perplexity is the right tool when you need an answer from the live web,
          right now, with sources you can verify. Use it for research before a
          meeting, fact-checking a claim you read online, understanding a breaking
          news story, comparing products or prices, or getting a summary of a
          technical topic you have never encountered before. Its real-time indexing
          means it does not suffer from training cutoffs — if something happened this
          week, Perplexity can find and synthesise it. For information retrieval, it
          is genuinely one of the best tools available.
        </p>

        {/* ── When should I use MEOK? ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          When should I use MEOK?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Use MEOK when the context is <em>you</em>. When you need support working
          toward a goal you have been building for weeks. When you want to process
          something emotionally and have an AI that already knows your history. When
          you need to track habits, check in on your wellbeing, or have a morning
          briefing that reflects your actual life rather than generic advice. When you
          want your family to have an AI companion that remembers your child&apos;s
          routines, your parent&apos;s health needs, or your household&apos;s shared
          context. MEOK compounds in value over time because it accumulates context
          that no search engine will ever have: the context of being you.
        </p>

        {/* ── Can I use both? ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          Can I use both Perplexity and MEOK?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Yes — and this is probably the most honest answer to the &ldquo;vs&rdquo;
          question. Many users already do this intuitively. They open Perplexity when
          they want to know something about the world. They open MEOK when they want
          support with something about themselves.
        </p>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          The two tools can even work together directly. You might use Perplexity to
          research a health condition, then bring those findings into your MEOK
          conversation so your AI companion can help you think through what it means
          for your specific situation — one it knows from months of accumulated
          context. Perplexity surfaces the world&apos;s knowledge. MEOK holds your
          personal knowledge. The combination is genuinely powerful.
        </p>

        {/* ── Privacy differences ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What are the privacy differences between Perplexity and MEOK?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Perplexity logs search queries for product improvement. If you are logged
          in, queries are associated with your account. Perplexity has privacy
          controls and does not sell data to third parties, but it is a US company
          and data is processed under US privacy frameworks. The queries themselves —
          what you searched for — are retained. For most research use cases this is
          entirely reasonable and expected.
        </p>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          MEOK takes a different structural stance. Your memory vault is encrypted at
          rest with{" "}
          <strong style={{ color: "#f5f0e8" }}>AES-GCM-256</strong>. Your data is
          never used to train any model without your explicit consent. You can export
          your entire vault at any time, and delete it completely on demand. MEOK is
          UK GDPR compliant, ICO registered, and built by a UK-based team. The
          difference is not that Perplexity is reckless — it is that MEOK makes data
          sovereignty an architectural guarantee rather than a policy choice.
        </p>

        {/* ── UK users ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          Which is better for UK users — Perplexity or MEOK?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Both tools work well in the UK. For pure research and fact-finding,
          Perplexity is a strong choice regardless of geography. For personal AI
          companionship and data sovereignty, MEOK has specific structural advantages
          for UK users: ICO registration, UK GDPR compliance as a first-class design
          requirement, and a UK-based founding team accountable under UK law. If you
          are a UK user who cares about where your data goes, who holds it, and what
          rights you have over it, MEOK&apos;s sovereign architecture provides
          stronger guarantees than a US-based research tool.
        </p>

        {/* ── Pricing ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          How does MEOK pricing compare to Perplexity?
        </h2>
        <p className="mb-4 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Both offer free tiers. MEOK&apos;s tiers are designed to grow with your
          commitment:
        </p>
        <ul
          className="mb-5 space-y-2 pl-5"
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.87,
            listStyleType: "disc",
          }}
        >
          <li>
            <strong style={{ color: "#f5f0e8" }}>Explorer (free forever)</strong> —
            50 messages per day, full sovereign memory vault, Maternal Covenant care
            layer. No credit card. No expiry. Your memory accumulates from day one.
          </li>
          <li>
            <strong style={{ color: "#f5f0e8" }}>Sovereign (£12/mo)</strong> — Full
            access, advanced reasoning model, unlimited messages, all companion
            features. The complete personal AI experience.
          </li>
          <li>
            <strong style={{ color: "#f5f0e8" }}>Family (£29/mo)</strong> — Extends
            sovereign features to your household. Guardian mode, shared family
            context, companion access for up to six family members.
          </li>
          <li>
            <strong style={{ color: "#f5f0e8" }}>BYOK (£5/mo)</strong> — Bring
            your own API key. MEOK&apos;s architecture at minimal cost, using
            your own model provider credentials.
          </li>
        </ul>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Perplexity&apos;s Pro plan sits at around $20/month (USD) and focuses on
          faster models and more searches. The comparison is not apples-to-apples
          because the products are fundamentally different — but if you are evaluating
          cost-per-value, MEOK&apos;s Sovereign tier compounds in value every day as
          your memory vault grows, while a research tool&apos;s value resets with each
          new query.
        </p>

        {/* ── Verdict ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          Verdict: different tools, different jobs — and that is a feature, not a bug
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Perplexity is one of the best AI tools built for answering questions about
          the world. It deserves its growth. Real-time web synthesis with citations
          is genuinely useful and Perplexity does it better than almost anyone.
        </p>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          MEOK is not trying to win that race. MEOK is built for a different
          relationship entirely — one where the AI is not answering questions about
          the world, but supporting a specific person through their actual life. The
          value in MEOK is not found in any single interaction. It is found in what
          accumulates across hundreds of them: the growing, sovereign, encrypted
          record of you and your journey.
        </p>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          If you need to know what happened in the news, ask Perplexity. If you need
          to know what to do next in your life — and want an AI that already knows
          your whole story — that is what MEOK is for.
        </p>

        {/* ── FAQ section ── */}
        <div className="mt-16 mb-10">
          <h2 className="text-2xl font-black mb-7" style={{ color: "#f5f0e8" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map(({ name, acceptedAnswer }) => (
              <div
                key={name}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <h3 className="font-bold text-base mb-2" style={{ color: "#f5f0e8" }}>
                  {name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.55)" }}
                >
                  {acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Share ── */}
        <div
          className="flex items-center gap-3 py-8 mb-1"
          style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(245,240,232,0.28)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-perplexity&text=MEOK+vs+Perplexity%3A+One+Answers+Questions%2C+One+Knows+You"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-80"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-perplexity"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-80"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#1a1830" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 15%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free Forever
            </p>
            <h3
              className="text-xl sm:text-2xl font-black mb-3"
              style={{ color: "#fff" }}
            >
              Begin your Birth Ceremony
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.5)", maxWidth: "34rem" }}
            >
              Hatch your AI in under three minutes. Your sovereign memory vault is
              created immediately — encrypted, owned by you, accumulating from the
              first message you send. Explorer tier is free forever. No credit card.
              No reset. No forgetting.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Begin Your Birth Ceremony →
            </Link>
          </div>
        </div>

        {/* ── Related posts ── */}
        <div>
          <h2 className="text-lg font-black mb-5" style={{ color: "#f5f0e8" }}>
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/meok-vs-chatgpt",
                tag: "Comparison",
                tc: "#c9a84c",
                tb: "rgba(201,168,76,0.12)",
                title: "MEOK vs ChatGPT: Why Memory Changes Everything",
                read: "6 min",
              },
              {
                href: "/blog/meok-vs-claude",
                tag: "Comparison",
                tc: "#c9a84c",
                tb: "rgba(201,168,76,0.12)",
                title:
                  "MEOK vs Claude: What's the Difference Between a Sovereign AI and an Assistant?",
                read: "8 min",
              },
              {
                href: "/blog/sovereign-ai-vs-cloud-ai",
                tag: "Sovereign AI",
                tc: "#87ceeb",
                tb: "rgba(135,206,235,0.10)",
                title: "Sovereign AI vs Cloud AI: Why Ownership Changes Everything",
                read: "6 min",
              },
            ].map(({ href, tag, tc, tb, title, read }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col gap-3 p-6 rounded-2xl transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{ color: tc, background: tb }}
                >
                  {tag}
                </span>
                <span
                  className="text-sm font-bold leading-snug"
                  style={{ color: "rgba(245,240,232,0.82)" }}
                >
                  {title}
                </span>
                <span
                  className="text-xs mt-auto"
                  style={{ color: "rgba(245,240,232,0.28)" }}
                >
                  {read} read
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-14"
        style={{
          background: "#080712",
          borderTop: "1px solid rgba(245,240,232,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="font-black text-lg mb-1" style={{ color: "#f5f0e8" }}>
                MEOK AI LABS
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(245,240,232,0.32)", maxWidth: 320 }}
              >
                Sovereign AI companions. Your memory, your data, your companion —
                permanently yours.
              </p>
            </div>
            <nav className="flex flex-wrap gap-5">
              {(
                [
                  ["Blog", "/blog"],
                  ["About", "/about"],
                  ["Privacy", "/privacy"],
                  ["Hatch your AI", "/birth"],
                ] as [string, string][]
              ).map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs font-medium transition-opacity hover:opacity-70"
                  style={{ color: "rgba(245,240,232,0.45)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ borderTop: "1px solid rgba(245,240,232,0.05)" }}
          >
            <p className="text-xs" style={{ color: "rgba(245,240,232,0.22)" }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS Ltd. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "rgba(245,240,232,0.18)" }}>
              UK GDPR compliant &middot; ICO registered &middot; Built in Britain
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
