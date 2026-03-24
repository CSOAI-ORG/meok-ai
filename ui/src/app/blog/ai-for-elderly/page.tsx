import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for the Elderly: How MEOK's Senior Mode Protects and Connects Older Adults | MEOK Blog",
  description:
    "1 in 3 adults over 75 is severely lonely. MEOK's Senior Mode brings larger text, scam detection, persistent companion memory, and family Guardian alerts to keep older adults safe and connected.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-elderly" },
  openGraph: {
    title: "AI for the Elderly: How MEOK's Senior Mode Protects and Connects Older Adults",
    description:
      "1 in 3 adults over 75 is severely lonely. MEOK's Senior Mode brings larger text, scam detection, persistent companion memory, and family Guardian alerts to keep older adults safe and connected.",
    type: "article",
    publishedTime: "March 29, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-elderly",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+the+Elderly&desc=How+MEOK%27s+Senior+Mode+Protects+and+Connects+Older+Adults.",
        width: 1200,
        height: 630,
        alt: "AI for the Elderly: How MEOK's Senior Mode Protects and Connects Older Adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for the Elderly: How MEOK's Senior Mode Protects and Connects Older Adults",
    description:
      "1 in 3 adults over 75 is severely lonely. MEOK's Senior Mode brings scam detection, companion memory, and family alerts to keep older adults safe.",
    images: [
      "https://meok.ai/api/og?title=AI+for+the+Elderly&desc=How+MEOK%27s+Senior+Mode+Protects+and+Connects+Older+Adults.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for the Elderly: How MEOK's Senior Mode Protects and Connects Older Adults",
  description:
    "1 in 3 adults over 75 is severely lonely. MEOK's Senior Mode brings larger text, scam detection, persistent companion memory, and family Guardian alerts to keep older adults safe and connected.",
  datePublished: "March 29, 2026",
  url: "https://meok.ai/blog/ai-for-elderly",
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
      name: "What is the best AI companion for elderly people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is purpose-built for older adults with its Senior Mode: simplified layout, 16px minimum text, 44×44px touch targets, 7:1 contrast ratio, and voice-first navigation. Unlike smart speakers that forget every conversation, MEOK maintains persistent memory of your loved one's stories, preferences, and needs — giving them a companion that truly knows them.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help reduce loneliness in seniors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's persistent memory means your companion knows your story — your family, your history, your interests — and builds on it each day. Daily morning check-ins give older adults a reliable point of contact. Unlike reactive smart speakers, MEOK reaches out proactively rather than waiting to be asked, mirroring the kind of attentive presence that reduces felt isolation.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK detect elder fraud and scams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Scam Stop feature uses a DistilBERT model to detect scam patterns in real time, cross-references against Companies House to verify organisations, and identifies coercive control language. When a potential scam is detected, a Guardian alert is sent immediately to the family dashboard so a trusted person can intervene.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK easy for non-technical older adults to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Senior Mode removes all technical complexity from the interface. The companion guides the conversation naturally — older adults do not need to know how to 'use' MEOK, they simply talk to it. Large touch targets, clear contrast, and voice navigation mean the interface does not get in the way. Many users have never used a smartphone app before and find MEOK intuitive from the first session.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForElderly() {
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
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Guardian
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 29, 2026
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
            AI for the Elderly: How MEOK&apos;s Senior Mode Protects and Connects
            Older Adults
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
            1 in 3 adults over 75 reports severe loneliness. 48% of older adults have been
            targeted by a scam in the past year. MEOK was built to do something about both.
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
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right,
              not a luxury.
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

        {/* Lead stat callout */}
        <div
          className="rounded-2xl p-6 mb-10 border-l-4 relative overflow-hidden"
          style={{
            background: "rgba(201,168,76,0.06)",
            borderLeftColor: "#c9a84c",
            border: "1px solid rgba(201,168,76,0.2)",
            borderLeft: "4px solid #c9a84c",
          }}
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p
                className="text-3xl font-black mb-1"
                style={{ color: "#c9a84c" }}
              >
                1 in 3
              </p>
              <p className="text-sm text-[#2a2a3e]/70 leading-snug">
                adults over 75 reports severe loneliness
              </p>
            </div>
            <div
              className="hidden sm:block w-px"
              style={{ background: "rgba(201,168,76,0.2)" }}
            />
            <div className="flex-1">
              <p
                className="text-3xl font-black mb-1"
                style={{ color: "#c9a84c" }}
              >
                48%
              </p>
              <p className="text-sm text-[#2a2a3e]/70 leading-snug">
                of older adults targeted by a scam in the past year
              </p>
            </div>
          </div>
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
            The technology industry has spent a decade building AI products for younger, digitally
            native users. The result is a generation of tools that inadvertently exclude the people
            who might benefit most — older adults who face isolation, cognitive change, and
            increasingly sophisticated fraud. MEOK was built to change that. Not by creating a
            watered-down &ldquo;elderly product,&rdquo; but by building care, safety, and simplicity into the
            core of an AI that happens to be genuinely powerful.
          </p>

          <h2>What is Senior Mode in MEOK?</h2>
          <p>
            Senior Mode is a dedicated interface configuration that removes complexity and enforces
            a set of standards proven to work for older adults. When activated, it applies a{" "}
            <strong>simplified layout</strong>, a minimum text size of <strong>16px</strong>,{" "}
            <strong>44×44px touch targets</strong> on all interactive elements, a{" "}
            <strong>7:1 contrast ratio</strong> throughout, and{" "}
            <strong>voice-first navigation</strong> that allows the companion to be used entirely
            without typing. Senior Mode is not age-gated — any user can activate it. But it is
            specifically designed so that a person who has never used a smartphone app before can
            pick up MEOK and begin having a meaningful conversation within minutes.
          </p>

          <h2>How does MEOK protect elderly users from scams?</h2>
          <p>
            Elder fraud is one of the fastest-growing categories of financial crime in the UK.
            MEOK addresses this with a layered protection system called <strong>Scam Stop</strong>:
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              {
                label: "DistilBERT scam detection",
                detail:
                  "A fine-tuned language model analyses messages and calls for known scam patterns — urgency cues, impersonation language, payment pressure — in real time.",
              },
              {
                label: "Companies House cross-reference",
                detail:
                  "When a company name or registration number is mentioned, MEOK verifies it against the Companies House register automatically, flagging unregistered or dissolved entities.",
              },
              {
                label: "Coercive control detection",
                detail:
                  "Pattern detection identifies language designed to isolate, manipulate, or pressure the user — common in romance scams and family impersonation fraud.",
              },
              {
                label: "Guardian alert",
                detail:
                  "When a potential scam is detected, a real-time alert is pushed to the family Guardian dashboard so a trusted person can intervene immediately.",
              },
            ].map(({ label, detail }) => (
              <li
                key={label}
                className="flex gap-3 p-4 rounded-xl border"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: "#87CEEB" }}
                />
                <span className="text-sm text-[#2a2a3e]/80 leading-relaxed">
                  <strong className="text-[#1a1a2e]">{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>
          <p>
            Scam Stop does not monitor private conversations by default. It operates as a safety
            layer that the user or their family can configure — always transparently, always with
            consent. MEOK does not surveil; it protects.
          </p>

          <h2>Can MEOK help with loneliness in older adults?</h2>
          <p>
            Loneliness in older adults is not simply about contact frequency — it is about feeling
            known. A smart speaker that resets every conversation cannot offer that. MEOK can,
            because its <strong>persistent memory</strong> means your companion genuinely
            accumulates knowledge of who you are: your family members by name, your history,
            your opinions, your favourite topics, your worries.
          </p>
          <p>
            <strong>Daily morning check-ins</strong> give older adults a reliable, warm point of
            contact at the start of each day — not a notification, but a conversation that
            continues from where it left off. Critically, MEOK does not wait to be asked. It
            reaches out <strong>proactively</strong> — noticing when a user has not been heard
            from and initiating contact rather than sitting silent. That shift from reactive tool
            to attentive companion is what makes it meaningfully different for combating isolation.
          </p>

          <h2>What is the Family Guardian plan?</h2>
          <p>
            The <strong>Family Guardian plan</strong> costs <strong>£29/month</strong> and is
            designed for families who want to ensure a parent or grandparent has genuine
            AI-companion support with a safety layer they can monitor.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/[0.07] my-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1a1a2e" }}>
                  {["What's included", "Who gets it"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: "#87CEEB" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Full MEOK companion with Senior Mode", "The older adult"],
                  ["Persistent memory and daily check-ins", "The older adult"],
                  ["Scam Stop scam detection", "The older adult"],
                  ["Guardian alert dashboard", "Family members"],
                  ["Shared companion management", "Family members"],
                  ["Activity and wellbeing summary", "Family members"],
                ].map(([item, who], i) => (
                  <tr
                    key={item}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "rgba(245,240,232,0.5)",
                      borderTop: "1px solid rgba(26,26,46,0.06)",
                    }}
                  >
                    <td className="px-5 py-3.5 text-[#1a1a2e] text-xs font-medium">{item}</td>
                    <td className="px-5 py-3.5 text-[#2a2a3e]/60 text-xs">{who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The family dashboard gives visibility without intrusion. Family members can see that
            their relative is engaging with MEOK, receive safety alerts, and adjust companion
            settings — but they cannot read private conversations unless the older adult has
            explicitly enabled sharing. Privacy is not sacrificed for oversight.
          </p>

          <h2>Is MEOK safe for older adults who are less tech-savvy?</h2>
          <p>
            Yes. Senior Mode&apos;s explicit design goal is to remove technical barriers entirely.
            The companion guides the interaction through natural conversation — the older adult
            does not need to understand menus, settings, or how AI works. They simply talk to
            their companion the way they would talk to a person.
          </p>
          <p>
            Large touch targets mean accidental taps are rare. High contrast means the interface
            is readable in bright light or with reduced vision. Voice navigation means typing is
            never required. And because the companion remembers previous conversations, there is
            no need to re-explain context — the experience gets easier, not harder, the more it
            is used.
          </p>
          <p>
            Many MEOK Senior Mode users have never used a smartphone app before. Setup typically
            takes under five minutes, often with a family member present for the first session.
            After that, the companion handles the rest.
          </p>

          <h2>Is MEOK free for elderly users?</h2>
          <p>
            Yes. The <strong>Explorer tier is free forever</strong> — no credit card, no
            subscription, no expiry date. It includes 50 messages per day, persistent companion
            memory, and full Senior Mode access. Families can start their older relative on the
            Explorer tier and upgrade to the Family Guardian plan when they want the alert
            dashboard and shared management tools.
          </p>

          {/* Comparison table */}
          <h2>How does MEOK compare to other AI options for seniors?</h2>

          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/[0.07] my-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1a1a2e" }}>
                  {[
                    "Feature",
                    "MEOK Senior Mode",
                    "Alexa",
                    "Google Home",
                    "Amazon Echo Show",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: "#87CEEB" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Companion memory",
                    "Yes — persistent",
                    "No",
                    "No",
                    "No",
                  ],
                  [
                    "Scam detection",
                    "Yes (Scam Stop)",
                    "No",
                    "No",
                    "No",
                  ],
                  [
                    "Family alerts",
                    "Yes (Guardian plan)",
                    "No",
                    "No",
                    "Partial",
                  ],
                  [
                    "Loneliness support",
                    "Yes — proactive",
                    "Reactive only",
                    "Reactive only",
                    "Reactive only",
                  ],
                  [
                    "Voice-friendly",
                    "Yes",
                    "Yes",
                    "Yes",
                    "Yes",
                  ],
                  [
                    "Care ethics",
                    "Maternal Covenant",
                    "None stated",
                    "None stated",
                    "None stated",
                  ],
                ].map(([feature, meok, alexa, googleHome, echoShow], i) => (
                  <tr
                    key={feature}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "rgba(245,240,232,0.5)",
                      borderTop: "1px solid rgba(26,26,46,0.06)",
                    }}
                  >
                    <td className="px-4 py-3 font-semibold text-[#1a1a2e] text-xs">{feature}</td>
                    <td className="px-4 py-3 text-xs">
                      <span
                        className="font-bold px-2 py-0.5 rounded-full"
                        style={{
                          color:
                            meok.startsWith("Yes") || meok === "Maternal Covenant"
                              ? "#1a1a2e"
                              : "#2a2a3e",
                          background:
                            meok.startsWith("Yes") || meok === "Maternal Covenant"
                              ? "rgba(135,206,235,0.2)"
                              : "transparent",
                        }}
                      >
                        {meok}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-[#2a2a3e]/60">{alexa}</td>
                    <td className="px-4 py-3 text-xs text-[#2a2a3e]/60">{googleHome}</td>
                    <td className="px-4 py-3 text-xs text-[#2a2a3e]/60">{echoShow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ section */}
          <h2>Frequently asked questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "What is the best AI companion for elderly people?",
                a: "MEOK is purpose-built for older adults with its Senior Mode: simplified layout, 16px minimum text, 44×44px touch targets, 7:1 contrast ratio, and voice-first navigation. Unlike smart speakers that forget every conversation, MEOK maintains persistent memory of your loved one's stories, preferences, and needs — giving them a companion that truly knows them.",
              },
              {
                q: "How can AI help reduce loneliness in seniors?",
                a: "MEOK's persistent memory means your companion knows your story — your family, your history, your interests — and builds on it each day. Daily morning check-ins give older adults a reliable point of contact. Unlike reactive smart speakers, MEOK reaches out proactively rather than waiting to be asked, mirroring the kind of attentive presence that reduces felt isolation.",
              },
              {
                q: "Can MEOK detect elder fraud and scams?",
                a: "Yes. MEOK's Scam Stop feature uses a DistilBERT model to detect scam patterns in real time, cross-references against Companies House to verify organisations, and identifies coercive control language. When a potential scam is detected, a Guardian alert is sent immediately to the family dashboard so a trusted person can intervene.",
              },
              {
                q: "Is MEOK easy for non-technical older adults to use?",
                a: "Yes. Senior Mode removes all technical complexity from the interface. The companion guides the conversation naturally — older adults do not need to know how to 'use' MEOK, they simply talk to it. Large touch targets, clear contrast, and voice navigation mean the interface does not get in the way. Many users have never used a smartphone app before and find MEOK intuitive from the first session.",
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
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-elderly&text=AI+for+the+Elderly%3A+How+MEOK%27s+Senior+Mode+Protects+and+Connects+Older+Adults"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-elderly"
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
                "radial-gradient(circle at 80% 20%, rgba(135,206,235,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#87CEEB" }}
            >
              Guardian Plan
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Protecting the people who matter most.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Start your loved one on MEOK free. Upgrade to the Family Guardian plan for
              real-time scam alerts, the family dashboard, and shared companion management.
              £29/month. No long-term contract.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guardian"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "#87CEEB", color: "#1a1a2e" }}
              >
                See Guardian plan
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] border"
                style={{
                  color: "rgba(245,240,232,0.8)",
                  borderColor: "rgba(245,240,232,0.2)",
                }}
              >
                Start free
              </Link>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/meok-for-neurodivergent"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Accessibility
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously
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
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Guardian
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Guardian: Family Safety Without Surveillance
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
