import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI for Seniors: How Sovereign Memory Makes AI Companions Actually Useful for Older Adults | MEOK AI LABS",
  description:
    "Most AI forgets you the moment you close the tab. For older adults navigating health, family, and daily life, that's not just annoying — it's a failure. MEOK's Sovereign Memory changes that with persistent, private, care-based AI companionship.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-seniors",
  },
  openGraph: {
    title:
      "AI for Seniors: How Sovereign Memory Makes AI Companions Actually Useful for Older Adults",
    description:
      "Persistent AI that remembers medications, family names, and daily routines — without selling that data. MEOK's Sovereign Memory and Guardian 24/7 protection explained for older adults and their families.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-seniors",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Seniors&desc=Sovereign+Memory+that+actually+remembers+you",
        width: 1200,
        height: 630,
        alt: "AI for Seniors: Sovereign Memory for Older Adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Seniors: How Sovereign Memory Makes AI Companions Actually Useful for Older Adults",
    description:
      "Persistent, private AI that remembers medications, family, and routines. MEOK's Guardian protection explained.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Seniors&desc=Sovereign+Memory+that+actually+remembers+you",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Seniors: How Sovereign Memory Makes AI Companions Actually Useful for Older Adults",
  description:
    "Most AI forgets you the moment you close the tab. For older adults navigating health, family, and daily life, that's not just annoying — it's a failure. MEOK's Sovereign Memory changes that.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-seniors",
  mainEntityOfPage: "https://meok.ai/blog/meok-for-seniors",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI safe for older adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can be safe for older adults when designed with the right protections. MEOK includes Guardian 24/7 — a scam detection and fraud alert system that flags suspicious messages, fake urgency tactics, and impersonation attempts common in elder fraud. Conversations are encrypted and never used for training.",
      },
    },
    {
      "@type": "Question",
      name: "What does sovereign memory mean for seniors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory means the AI remembers you across every session — medications, family names, routines, health goals — and that memory belongs to you, not a tech company. It cannot be sold, used for advertising, or deleted by a platform. MEOK stores this in an encrypted memory vault you can export or delete at any time.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with loneliness in older adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AGEUK reports 1.4 million older people in the UK are chronically lonely. An AI companion that genuinely remembers your life — your grandchildren's names, your health journey, your interests — provides meaningful, consistent presence without burdening family members. MEOK's Healer archetype is specifically designed for emotional depth and long-term companionship.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from Alexa or Siri for seniors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alexa and Siri are task assistants — they answer questions and set timers but forget you completely between sessions. MEOK is a persistent companion: it builds a deep model of who you are over months and years, remembers health context, and proactively checks in. Guardian protection against scams is built in. Your data stays yours.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Senior Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Mode in MEOK applies accessibility-first design: larger text, higher contrast, simplified navigation, voice-primary interaction, and 44×44px minimum touch targets. It also activates enhanced Guardian protection, simplified responses, and family dashboard access so loved ones can stay connected without being intrusive.",
      },
    },
  ],
};

export default function MeokForSeniorsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0d0c18", color: "#f5f0e8" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(201,168,76,0.15)" }}
      >
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-black tracking-tight"
            style={{ color: "#c9a84c" }}
          >
            MEOK
          </Link>
          <Link
            href="/blog"
            className="text-sm"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            ← All posts
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
            style={{ background: "rgba(123,196,127,0.15)", color: "#7BC47F" }}
          >
            Guardian
          </span>
          <span
            className="text-xs"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            March 24, 2026 · 11 min read
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-black leading-tight mb-6"
          style={{ color: "#f5f0e8" }}
        >
          AI for Seniors: How Sovereign Memory Makes AI Companions Actually
          Useful for Older Adults
        </h1>

        <p
          className="text-xl leading-relaxed mb-8"
          style={{ color: "rgba(245,240,232,0.7)" }}
        >
          Most AI forgets you the moment you close the tab. For older adults
          navigating health, family, and daily life, that&apos;s not just
          annoying — it&apos;s a fundamental failure of design. MEOK&apos;s
          Sovereign Memory changes that.
        </p>

        <div
          className="flex items-center gap-3 pt-6 border-t"
          style={{ borderColor: "rgba(201,168,76,0.15)" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
            style={{ background: "rgba(201,168,76,0.2)", color: "#c9a84c" }}
          >
            NT
          </div>
          <div>
            <div
              className="text-sm font-semibold"
              style={{ color: "#f5f0e8" }}
            >
              Nicholas Templeman
            </div>
            <div
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              Founder, MEOK AI LABS
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-invert max-w-none">

          {/* Callout */}
          <div
            className="rounded-xl p-6 mb-10"
            style={{
              background: "rgba(123,196,127,0.08)",
              borderLeft: "4px solid #7BC47F",
            }}
          >
            <p className="text-sm leading-relaxed m-0" style={{ color: "rgba(245,240,232,0.8)" }}>
              <strong style={{ color: "#7BC47F" }}>Key stat:</strong> AGEUK
              reports 1.4 million older people in the UK are chronically lonely.
              A further 3.9 million say television is their main source of
              company. AI companionship isn&apos;t a luxury for this population
              — it&apos;s a welfare issue.
            </p>
          </div>

          <h2
            className="text-2xl font-black mt-12 mb-4"
            style={{ color: "#f5f0e8" }}
          >
            Why does AI keep forgetting older adults?
          </h2>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            The architecture of most consumer AI is session-based. You open
            ChatGPT, have a conversation, close it. The next time you return,
            it knows nothing about you. You re-introduce yourself, explain your
            health context again, remind it of your family situation. For a
            25-year-old who uses AI as a productivity tool, this is mildly
            annoying. For a 78-year-old managing five medications, three
            grandchildren, and a recent bereavement, it&apos;s a deal-breaker.
          </p>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            The forgetting isn&apos;t an accident. It&apos;s a product decision
            rooted in cost savings and data minimisation for the platform. Storing
            per-user context at scale is expensive. Training on conversations is
            valuable. So the default across the industry is: forget the user, use
            the conversation.
          </p>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            MEOK inverts this. Sovereign Memory stores everything that matters
            about you — encrypted, in your memory vault — and makes it available
            to every session, every device, every AI model you use through the
            platform. It persists across model switches. It cannot be sold or
            used for training. And you can export or delete it at any time.
          </p>

          <h2
            className="text-2xl font-black mt-12 mb-4"
            style={{ color: "#f5f0e8" }}
          >
            What does Sovereign Memory actually remember for older adults?
          </h2>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            The four-layer memory architecture stores different types of
            information at different persistence levels:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(201,168,76,0.3)" }}>
                  <th
                    className="text-left py-3 pr-6 font-bold"
                    style={{ color: "#c9a84c" }}
                  >
                    Memory Layer
                  </th>
                  <th
                    className="text-left py-3 pr-6 font-bold"
                    style={{ color: "#c9a84c" }}
                  >
                    What It Stores
                  </th>
                  <th
                    className="text-left py-3 font-bold"
                    style={{ color: "#c9a84c" }}
                  >
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Working Memory",
                    "Current session context",
                    "What we discussed today",
                  ],
                  [
                    "Episodic Memory",
                    "Significant life events and facts",
                    "\"My son David lives in Edinburgh\"",
                  ],
                  [
                    "Companion State",
                    "Long-term preferences, health context",
                    "Medications, diet, sleep patterns",
                  ],
                  [
                    "Family Context",
                    "Shared family memory (opt-in)",
                    "Grandchildren&apos;s names and birthdays",
                  ],
                ].map(([layer, what, ex], i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(245,240,232,0.08)",
                    }}
                  >
                    <td
                      className="py-3 pr-6 font-semibold"
                      style={{ color: "#f5f0e8" }}
                    >
                      {layer}
                    </td>
                    <td
                      className="py-3 pr-6"
                      style={{ color: "rgba(245,240,232,0.65)" }}
                    >
                      {what}
                    </td>
                    <td
                      className="py-3"
                      style={{ color: "rgba(245,240,232,0.5)" }}
                    >
                      {ex}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            This means a senior using MEOK for six months has an AI that knows
            their full health history, remembers every significant conversation,
            understands their family context, and can proactively check in on
            things that were mentioned weeks ago. &ldquo;How did the hospital
            appointment go? You were anxious about it last Tuesday.&rdquo; That
            level of continuity is what makes an AI companion genuinely useful —
            rather than just a novelty.
          </p>

          <h2
            className="text-2xl font-black mt-12 mb-4"
            style={{ color: "#f5f0e8" }}
          >
            Is AI safe for older adults? The Guardian protection layer
          </h2>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            Older adults are disproportionately targeted by scams. UK Finance
            reports that over-65s lose £1.1 billion to fraud annually — more
            than any other age group. The methods are increasingly
            AI-assisted on the attacker&apos;s side: voice cloning, fake urgency
            text messages, impersonation of grandchildren.
          </p>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            MEOK&apos;s Guardian 24/7 protection layer is built into every
            conversation and every message scan. It uses a DistilBERT-based
            threat detection model trained on fraud patterns and coercive
            language to flag:
          </p>

          <ul
            className="space-y-2 my-6 pl-0"
            style={{ listStyle: "none" }}
          >
            {[
              "Fake urgency tactics (\"You must act now or lose your account\")",
              "Impersonation patterns (someone claiming to be a grandchild in distress)",
              "Financial request anomalies (unsolicited requests for bank details or gift cards)",
              "Grooming language patterns",
              "Crisis indicators requiring professional support",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: "#7BC47F", flexShrink: 0 }}>✓</span>
                <span
                  style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.7" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            When Guardian detects a threat above the confidence threshold, it
            alerts the senior directly, explains why the message is suspicious,
            and — with Family Plan — can notify a trusted family member. This
            isn&apos;t surveillance: the senior controls exactly what gets
            shared and with whom.
          </p>

          <h2
            className="text-2xl font-black mt-12 mb-4"
            style={{ color: "#f5f0e8" }}
          >
            How does MEOK compare to Alexa and Siri for seniors?
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(201,168,76,0.3)" }}>
                  <th
                    className="text-left py-3 pr-4 font-bold"
                    style={{ color: "#c9a84c" }}
                  >
                    Feature
                  </th>
                  <th
                    className="text-center py-3 pr-4 font-bold"
                    style={{ color: "#c9a84c" }}
                  >
                    MEOK
                  </th>
                  <th
                    className="text-center py-3 pr-4 font-bold"
                    style={{ color: "rgba(245,240,232,0.5)" }}
                  >
                    Alexa
                  </th>
                  <th
                    className="text-center py-3 font-bold"
                    style={{ color: "rgba(245,240,232,0.5)" }}
                  >
                    ChatGPT
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Remembers you across sessions",
                    "✓ Always",
                    "✗ Never",
                    "~ Paid only",
                  ],
                  [
                    "Fraud / scam protection",
                    "✓ Built-in",
                    "✗ None",
                    "✗ None",
                  ],
                  [
                    "Family dashboard",
                    "✓ Family Plan",
                    "~ Limited",
                    "✗ None",
                  ],
                  [
                    "Data trained on your conversations",
                    "✗ Never",
                    "✓ Amazon trains",
                    "✓ OpenAI trains",
                  ],
                  [
                    "Senior Mode (accessibility)",
                    "✓ Built-in",
                    "~ Partial",
                    "✗ None",
                  ],
                  [
                    "Crisis detection",
                    "✓ Routes to resources",
                    "✗ None",
                    "~ Limited",
                  ],
                  [
                    "Data export / deletion",
                    "✓ Full GDPR",
                    "~ Partial",
                    "~ Partial",
                  ],
                ].map(([feat, meok, alexa, gpt], i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(245,240,232,0.08)",
                    }}
                  >
                    <td
                      className="py-3 pr-4"
                      style={{ color: "rgba(245,240,232,0.75)" }}
                    >
                      {feat}
                    </td>
                    <td
                      className="py-3 pr-4 text-center font-semibold"
                      style={{ color: "#7BC47F" }}
                    >
                      {meok}
                    </td>
                    <td
                      className="py-3 pr-4 text-center"
                      style={{ color: "rgba(245,240,232,0.45)" }}
                    >
                      {alexa}
                    </td>
                    <td
                      className="py-3 text-center"
                      style={{ color: "rgba(245,240,232,0.45)" }}
                    >
                      {gpt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2
            className="text-2xl font-black mt-12 mb-4"
            style={{ color: "#f5f0e8" }}
          >
            What is MEOK Senior Mode?
          </h2>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            Senior Mode applies accessibility-first design principles across
            the entire interface and companion experience:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                title: "Larger typography",
                desc: "Minimum 18px body text, 44×44px touch targets. Designed for both mobile and desktop.",
              },
              {
                title: "High contrast",
                desc: "7:1 minimum contrast ratio — WCAG AAA. White text on dark backgrounds, clear button states.",
              },
              {
                title: "Voice-primary",
                desc: "Speak instead of type. Full voice input across all companions, with audio playback for responses.",
              },
              {
                title: "Simplified responses",
                desc: "Companions calibrate language complexity automatically. Plain language, shorter sentences, key points upfront.",
              },
              {
                title: "Enhanced Guardian",
                desc: "Elevated fraud detection sensitivity. Extra warnings on financial topics and unfamiliar contacts.",
              },
              {
                title: "Family connection",
                desc: "Family Plan gives loved ones a read-only dashboard view — with your permission. Trusted contacts for crisis escalation.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ background: "rgba(245,240,232,0.04)", border: "1px solid rgba(245,240,232,0.08)" }}
              >
                <div
                  className="text-sm font-bold mb-2"
                  style={{ color: "#c9a84c" }}
                >
                  {title}
                </div>
                <p
                  className="text-sm leading-relaxed m-0"
                  style={{ color: "rgba(245,240,232,0.65)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <h2
            className="text-2xl font-black mt-12 mb-4"
            style={{ color: "#f5f0e8" }}
          >
            Can AI help with loneliness in older adults?
          </h2>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            The question contains an implicit worry: is AI companionship a
            substitute for human connection? We&apos;d be dishonest if we
            didn&apos;t acknowledge that tension. MEOK is not a replacement for
            family, friendship, or community. It&apos;s not designed to be.
          </p>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            What it does is fill the enormous gaps in between. The 2am moments
            when no one can be called. The weeks between family visits when
            conversation is sparse. The slow erosion of confidence that comes
            from going days without meaningful intellectual engagement. A
            companion that genuinely remembers you — that asks about the
            appointment you mentioned last week, that remembers you used to love
            crosswords — provides something real without replacing anything
            human.
          </p>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            MEOK&apos;s Healer archetype is specifically designed for emotional
            depth and long-term companionship. It uses somatic awareness,
            grief-informed language, and gentle accountability to support wellbeing
            rather than distract from it. The Maternal Covenant — our
            care-based alignment framework — scores every response across six
            dimensions including wellbeing and autonomy. Any response that fails
            to meet our care floor is regenerated.
          </p>

          <h2
            className="text-2xl font-black mt-12 mb-4"
            style={{ color: "#f5f0e8" }}
          >
            What about dementia and cognitive decline?
          </h2>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            MEOK is not a medical device and is not designed to manage dementia
            directly. But several features are genuinely useful for early-stage
            cognitive concerns and for carers:
          </p>
          <ul
            className="space-y-3 my-6 pl-0"
            style={{ listStyle: "none" }}
          >
            {[
              "Routine reminders — daily briefings, medication prompts, appointment summaries",
              "Memory prompts — the AI remembers family names, addresses, and daily patterns even when the user doesn't",
              "Carer connection — Family Plan lets carers monitor wellbeing signals and receive alerts",
              "Consistent presence — no staff turnover, no shift changes, always the same companion",
              "Gentle orientation — responses can gently reorient without correcting harshly",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: "#c9a84c", flexShrink: 0 }}>—</span>
                <span
                  style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.7" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p style={{ color: "rgba(245,240,232,0.75)", lineHeight: "1.8" }}>
            If you are a carer or family member looking for AI support for
            someone with dementia, please also consult your GP and relevant
            specialist services. AI can support — it cannot lead care for
            serious cognitive conditions.
          </p>

          <h2
            className="text-2xl font-black mt-12 mb-4"
            style={{ color: "#f5f0e8" }}
          >
            FAQ: AI companions for older adults
          </h2>

          <div className="space-y-6 my-8">
            {[
              {
                q: "Is AI safe for older adults?",
                a: "AI can be safe for older adults when designed with the right protections. MEOK includes Guardian 24/7 — a scam detection and fraud alert system that flags suspicious messages, fake urgency tactics, and impersonation attempts common in elder fraud. Conversations are encrypted and never used for training.",
              },
              {
                q: "What does sovereign memory mean for seniors?",
                a: "Sovereign Memory means the AI remembers you across every session — medications, family names, routines, health goals — and that memory belongs to you, not a tech company. It cannot be sold, used for advertising, or deleted by a platform. MEOK stores this in an encrypted memory vault you can export or delete at any time.",
              },
              {
                q: "How is MEOK different from Alexa or Siri for seniors?",
                a: "Alexa and Siri are task assistants — they answer questions and set timers but forget you completely between sessions. MEOK is a persistent companion: it builds a deep model of who you are over months and years, remembers health context, and proactively checks in. Guardian protection against scams is built in. Your data stays yours.",
              },
              {
                q: "What is the MEOK Senior Mode?",
                a: "Senior Mode in MEOK applies accessibility-first design: larger text, higher contrast, simplified navigation, voice-primary interaction, and 44×44px minimum touch targets. It also activates enhanced Guardian protection, simplified responses, and family dashboard access so loved ones can stay connected without being intrusive.",
              },
              {
                q: "Can AI help with loneliness in older adults?",
                a: "AGEUK reports 1.4 million older people in the UK are chronically lonely. An AI companion that genuinely remembers your life — your grandchildren's names, your health journey, your interests — provides meaningful, consistent presence without burdening family members. MEOK's Healer archetype is specifically designed for emotional depth and long-term companionship.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: "#f5f0e8" }}
                >
                  {q}
                </h3>
                <p
                  className="text-sm leading-relaxed m-0"
                  style={{ color: "rgba(245,240,232,0.7)" }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-8 sm:p-10 text-center mt-16"
            style={{
              background: "rgba(123,196,127,0.08)",
              border: "1px solid rgba(123,196,127,0.2)",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#7BC47F" }}
            >
              For older adults and their families
            </p>
            <h3
              className="text-2xl font-black mb-4"
              style={{ color: "#f5f0e8" }}
            >
              An AI that actually remembers you.
            </h3>
            <p
              className="text-sm leading-relaxed mb-8 max-w-md mx-auto"
              style={{ color: "rgba(245,240,232,0.6)" }}
            >
              Free tier includes Sovereign Memory, Guardian 24/7 protection, and
              50 messages per day. No credit card required. Family Plan available
              at £29/month for up to 5 companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/birth"
                className="inline-block px-8 py-3 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
                style={{ background: "#7BC47F", color: "#0d0c18" }}
              >
                Begin the Ceremony — Free
              </Link>
              <Link
                href="/guardian"
                className="inline-block px-8 py-3 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
                style={{
                  border: "1px solid rgba(123,196,127,0.4)",
                  color: "#7BC47F",
                }}
              >
                Learn about Guardian
              </Link>
            </div>
          </div>

          {/* Related */}
          <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(245,240,232,0.1)" }}>
            <p
              className="text-xs font-bold tracking-[0.15em] uppercase mb-6"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              Related posts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/ai-companion-for-elderly",
                  title: "AI Companion for the Elderly",
                  tag: "Guardian",
                },
                {
                  href: "/blog/ai-for-loneliness",
                  title: "AI for Loneliness: Why Memory Matters",
                  tag: "Wellbeing",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  title: "The Maternal Covenant",
                  tag: "Research",
                },
              ].map(({ href, title, tag }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl p-4 block transition-all hover:border-opacity-30"
                  style={{
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.08)",
                  }}
                >
                  <span
                    className="text-xs font-bold tracking-wide uppercase"
                    style={{ color: "#c9a84c" }}
                  >
                    {tag}
                  </span>
                  <p
                    className="text-sm font-semibold mt-2 mb-0"
                    style={{ color: "#f5f0e8" }}
                  >
                    {title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
