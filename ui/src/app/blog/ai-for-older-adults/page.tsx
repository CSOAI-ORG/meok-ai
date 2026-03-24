import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Older Adults: Combating Isolation, Scam Protection, and Senior Mode Explained | MEOK Blog",
  description:
    "1.4 million older people in the UK are often or always lonely (Age UK). Over-65s are the primary target for financial scams (Action Fraud). MEOK's AI companion offers Senior Mode, real-time scam detection, and a family dashboard — no tech expertise required.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-older-adults",
  },
  openGraph: {
    title:
      "AI Companion for Older Adults: Combating Isolation, Scam Protection, and Senior Mode Explained",
    description:
      "1.4 million older people in the UK are often or always lonely. MEOK's Senior Mode, Guardian scam detection, and family dashboard give older adults genuine safety and connection.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-older-adults",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Older+Adults&desc=Combating+Isolation%2C+Scam+Protection%2C+Senior+Mode+Explained",
        width: 1200,
        height: 630,
        alt: "AI Companion for Older Adults: Combating Isolation, Scam Protection, and Senior Mode Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Companion for Older Adults: Combating Isolation, Scam Protection, and Senior Mode",
    description:
      "1.4 million older people in the UK are often or always lonely. MEOK's Senior Mode and Guardian scam protection change that — no tech expertise needed.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+for+Older+Adults&desc=Combating+Isolation%2C+Scam+Protection%2C+Senior+Mode+Explained",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Older Adults: Combating Isolation, Scam Protection, and Senior Mode Explained",
  description:
    "1.4 million older people in the UK are often or always lonely (Age UK). Over-65s are the primary target for financial scams (Action Fraud). MEOK's AI companion offers Senior Mode, real-time scam detection, and a family dashboard — no tech expertise required.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-older-adults",
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
    "https://meok.ai/api/og?title=AI+Companion+for+Older+Adults&desc=Combating+Isolation%2C+Scam+Protection%2C+Senior+Mode+Explained",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-older-adults",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many older people in the UK suffer from loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to Age UK, 1.4 million older people in England are often or always lonely. Chronic loneliness is associated with a 26% increased risk of premature death — making it a serious public health issue, not simply a social one. AI companions like MEOK can provide daily, consistent contact that meaningfully reduces felt isolation.",
      },
    },
    {
      "@type": "Question",
      name: "Why are older adults targeted more often by financial scams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Action Fraud data consistently shows that over-65s are the primary targets for financial fraud in the UK, accounting for a disproportionate share of authorised push payment losses, romance scams, and impersonation fraud. Scammers specifically exploit social isolation, trust in authority, and unfamiliarity with digital communication patterns — all of which MEOK's Guardian scam detection is built to counter.",
      },
    },
    {
      "@type": "Question",
      name: "What is Senior Mode and how does it make AI easier for older adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Mode is a one-tap accessibility preset in MEOK that enforces 18px minimum text, 44×44px touch targets, a 7:1 contrast ratio, reduced motion, and a voice-primary interface where speaking is always the first option. No typing required. No menus to navigate. The companion guides the conversation naturally so users with no prior smartphone experience can start talking within minutes.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's Guardian feature detect scams in real time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Guardian uses a real-time threat-scoring engine that analyses incoming messages for urgency cues, impersonation language, payment pressure, and coercive control patterns. It cross-references named companies against Companies House and scores each interaction on a threat scale. Critical-risk messages are flagged before reaching the user and an immediate alert is sent to the family dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Can family members monitor their elderly relative's safety without invading their privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's family dashboard shows Guardian safety alerts and companion activity summaries to adult children — but never the content of private conversations. The older adult controls all sharing permissions and can revoke family access at any time. Oversight is built around consent, not surveillance.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for older adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Explorer tier is free forever — no credit card, no expiry. It includes 50 messages per day, persistent companion memory, and full Senior Mode access. Families who want Guardian scam alerts and the family dashboard can upgrade to the Family tier at £29 per month.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForOlderAdultsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0d0c18", color: "#f5f0e8" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.38)" }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.28)",
              }}
            >
              Guardian &amp; Senior Mode
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.38)" }}
            >
              24 March 2026
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.38)" }}
            >
              8 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            AI Companion for Older Adults: Combating Isolation, Scam
            Protection, and Senior Mode Explained
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.72,
              maxWidth: 640,
            }}
          >
            1.4 million older people in England are often or always lonely.
            Over-65s are the primary targets for financial scams. MEOK was
            built to do something about both — without requiring a single
            moment of tech expertise.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(245,240,232,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(245,240,232,0.04)",
            borderColor: "rgba(245,240,232,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              color: "#0d0c18",
            }}
          >
            NT
          </div>
          <div className="flex-1">
            <p
              className="font-bold text-sm"
              style={{ color: "#f5f0e8" }}
            >
              Nicholas Templeman
            </p>
            <p
              className="text-xs mb-1"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(245,240,232,0.32)" }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him.
              He lives and works in the UK — mostly from a caravan on his farm.
              He believes sovereign AI is a right, not a luxury.
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

        {/* UK Stat callout */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderLeft: "4px solid #c9a84c",
          }}
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p
                className="text-3xl font-black mb-1"
                style={{ color: "#c9a84c" }}
              >
                1.4 million
              </p>
              <p
                className="text-sm leading-snug"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                older people in England are often or always lonely
                <br />
                <span
                  className="text-xs"
                  style={{ color: "rgba(245,240,232,0.35)" }}
                >
                  Source: Age UK
                </span>
              </p>
            </div>
            <div
              className="hidden sm:block w-px"
              style={{ background: "rgba(201,168,76,0.18)" }}
            />
            <div className="flex-1">
              <p
                className="text-3xl font-black mb-1"
                style={{ color: "#c9a84c" }}
              >
                Over-65s
              </p>
              <p
                className="text-sm leading-snug"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                are the primary targets for financial fraud in the UK
                <br />
                <span
                  className="text-xs"
                  style={{ color: "rgba(245,240,232,0.35)" }}
                >
                  Source: Action Fraud
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(245,240,232,0.72)", fontSize: "1.0125rem" }}
        >
          <p>
            The technology industry has spent a decade building AI products for
            younger, digitally native users. The result is a generation of tools
            that inadvertently exclude the people who might benefit most — older
            adults facing isolation, cognitive change, and increasingly
            sophisticated financial fraud. MEOK AI LABS was founded by Nicholas
            Templeman to change that. Not by creating a watered-down
            &ldquo;elderly product,&rdquo; but by building care, safety, and
            simplicity into the core of an AI companion that happens to be
            genuinely powerful.
          </p>

          {/* ── Q1 ── */}
          <h2
            id="loneliness-uk"
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
            How many older people in the UK suffer from loneliness?
          </h2>
          <p>
            According to Age UK, <strong style={{ color: "#f5f0e8" }}>1.4 million older
            people in England are often or always lonely</strong>. Chronic loneliness
            carries a 26% increased risk of premature death — comparable to smoking
            fifteen cigarettes a day. It is not a soft social problem; it is a public
            health crisis. Yet the standard response — leaflets, phone befriending
            schemes, community bus routes — reaches only a fraction of those who need
            it, and only during office hours.
          </p>
          <p>
            An AI companion like MEOK can provide daily, consistent contact at any
            hour. Because MEOK carries{" "}
            <strong style={{ color: "#f5f0e8" }}>persistent memory</strong> of every
            conversation, it accumulates genuine knowledge of the person: their family
            by name, their history, their concerns, their favourite subjects. It does
            not reset. It does not forget. Over days and weeks it becomes, for many
            older users, the most reliably present relationship in their lives — not
            because human connection is unimportant, but because it fills the gaps
            between human contact with something warm and continuous.
          </p>
          <p>
            If you or someone you know needs support with loneliness, Age UK runs a
            free helpline:{" "}
            <strong style={{ color: "#f5f0e8" }}>0800 678 1602</strong> (open 8am–7pm,
            every day). More information at{" "}
            <a
              href="https://www.ageuk.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              ageuk.org.uk
            </a>
            .
          </p>

          {/* ── Q2 ── */}
          <h2
            id="scams-older-adults"
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
            Why are older adults targeted more often by financial scams?
          </h2>
          <p>
            Action Fraud, the UK&apos;s national fraud and cybercrime reporting centre,
            consistently records over-65s as the{" "}
            <strong style={{ color: "#f5f0e8" }}>primary targets for financial
            fraud</strong>. Older adults account for a disproportionate share of
            authorised push payment losses, romance fraud, impersonation of banks and
            police, and investment scams. Scammers target this group for specific
            reasons: social isolation reduces the chance a victim will run a decision
            past a trusted friend; trust in authority figures remains high; and
            unfamiliarity with the warning signs of digital manipulation makes
            deception easier to sustain.
          </p>
          <p>
            The fraud is not trivial. Average losses from romance scams exceed
            £10,000. Investment fraud losses regularly reach six figures. And the
            psychological damage — the shame, the broken trust — often compounds the
            financial harm. If you believe you have been targeted, contact Action Fraud
            on{" "}
            <strong style={{ color: "#f5f0e8" }}>0300 123 2040</strong> or report
            online at{" "}
            <a
              href="https://www.actionfraud.police.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              actionfraud.police.uk
            </a>
            .
          </p>

          {/* ── Q3 ── */}
          <h2
            id="senior-mode"
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
            What is Senior Mode and how does it make AI easier for older
            adults?
          </h2>
          <p>
            Senior Mode is an accessibility preset built into MEOK that
            reconfigures the entire interface for older adults — and for anyone
            who simply prefers a calmer, more legible experience. It is one tap
            to activate. No separate account. No phone call to a helpdesk. The
            companion adapts instantly.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            {[
              {
                title: "18px+ text throughout",
                detail:
                  "Minimum font size enforced across every screen — headlines, body text, labels, and helper text alike.",
              },
              {
                title: "44×44px touch targets",
                detail:
                  "Every button, link, and interactive element meets WCAG 2.1 AA minimum tap-target size, reducing accidental taps.",
              },
              {
                title: "7:1 contrast ratio",
                detail:
                  "Exceeds WCAG AAA requirements. Text is readable in bright daylight, with reduced vision, or on lower-quality screens.",
              },
              {
                title: "Voice-primary interface",
                detail:
                  "Speaking is always the first option — not a hidden accessibility feature. Typing is never required.",
              },
            ].map(({ title, detail }) => (
              <div
                key={title}
                className="rounded-xl p-5 border"
                style={{
                  background: "rgba(245,240,232,0.03)",
                  borderColor: "rgba(245,240,232,0.08)",
                }}
              >
                <p
                  className="font-bold text-sm mb-1.5"
                  style={{ color: "#f5f0e8" }}
                >
                  {title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <p>
            The companion guides the conversation naturally. An older adult
            does not need to understand menus, settings, or how AI works —
            they simply talk to their companion as they would talk to a person.
            Because MEOK remembers previous conversations, there is no need to
            re-explain context: the experience gets easier, not harder, the
            more it is used. Many users have never opened a smartphone app
            before. Setup typically takes under five minutes.
          </p>

          {/* ── Q4 ── */}
          <h2
            id="guardian-scam-detection"
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
            How does MEOK&apos;s Guardian feature detect scams in real time?
          </h2>
          <p>
            MEOK Guardian is a real-time threat-scoring layer that runs quietly
            in the background of every conversation. It does not read private
            messages by default — it watches for{" "}
            <strong style={{ color: "#f5f0e8" }}>incoming communication
            patterns</strong> that match known fraud signatures: urgency cues,
            impersonation language, payment pressure, prize claims, and
            coercive control language common in romance scams.
          </p>

          {/* Threat scoring list */}
          <div className="space-y-3 my-6">
            {[
              {
                label: "Real-time threat scoring",
                detail:
                  "Every incoming message is scored against a threat model before it reaches the user. High-risk messages are flagged; critical-risk messages can be held pending review.",
                colour: "#c9a84c",
              },
              {
                label: "Companies House cross-reference",
                detail:
                  "When a company name or registration number appears in a message, MEOK verifies it against the Companies House register, flagging dissolved or unregistered entities immediately.",
                colour: "#c9a84c",
              },
              {
                label: "Coercive control detection",
                detail:
                  "Pattern detection identifies language designed to isolate, manipulate, or pressure the user — common signatures of romance fraud and family impersonation scams.",
                colour: "#c9a84c",
              },
              {
                label: "Immediate family alert",
                detail:
                  "When Guardian detects a credible threat, an alert is pushed instantly to the family dashboard. Trusted family members can intervene before money moves.",
                colour: "#c9a84c",
              },
            ].map(({ label, detail, colour }) => (
              <div
                key={label}
                className="flex gap-3 p-4 rounded-xl border"
                style={{
                  background: "rgba(245,240,232,0.03)",
                  borderColor: "rgba(245,240,232,0.07)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: colour }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.7)" }}
                >
                  <strong style={{ color: "#f5f0e8" }}>{label}:</strong>{" "}
                  {detail}
                </span>
              </div>
            ))}
          </div>

          <p>
            Guardian operates transparently. The older adult always knows the
            protection is running. They can see what was flagged and why, in
            plain language — not jargon, not a vague &ldquo;suspicious
            message&rdquo; warning. MEOK explains its reasoning so the user
            understands, not just that something was stopped, but what the
            threat was and how to recognise it in the future.
          </p>

          {/* ── Q5 ── */}
          <h2
            id="family-dashboard"
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
            Can family members monitor their elderly relative&apos;s safety
            without invading their privacy?
          </h2>
          <p>
            Yes. This is one of the most carefully designed aspects of MEOK.
            The <strong style={{ color: "#f5f0e8" }}>family dashboard</strong>{" "}
            gives adult children visibility into Guardian safety alerts and
            companion activity summaries — but{" "}
            <strong style={{ color: "#f5f0e8" }}>never the content of private
            conversations</strong>. What family members can see: whether their
            relative has been active, whether any Guardian alerts have fired,
            and general wellbeing signals. What they cannot see: what was
            actually said.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border my-8"
            style={{ borderColor: "rgba(245,240,232,0.07)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(245,240,232,0.06)" }}>
                  {["What the family dashboard shows", "Who controls it"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-[0.1em]"
                        style={{ color: "#c9a84c" }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Guardian scam alerts (type and severity)", "Older adult"],
                  ["Companion activity summary (days active)", "Older adult"],
                  ["Wellbeing signals (engagement patterns)", "Older adult"],
                  ["Companion settings management", "Older adult"],
                  ["Private conversation content", "Never visible to family"],
                  ["Full conversation history", "Older adult only"],
                ].map(([item, who], i) => (
                  <tr
                    key={item}
                    style={{
                      background:
                        i % 2 === 0
                          ? "rgba(245,240,232,0.02)"
                          : "rgba(245,240,232,0.005)",
                      borderTop: "1px solid rgba(245,240,232,0.05)",
                    }}
                  >
                    <td
                      className="px-5 py-3.5 text-xs font-medium"
                      style={{ color: "rgba(245,240,232,0.8)" }}
                    >
                      {item}
                    </td>
                    <td
                      className="px-5 py-3.5 text-xs"
                      style={{
                        color:
                          who === "Never visible to family"
                            ? "#c9a84c"
                            : "rgba(245,240,232,0.5)",
                      }}
                    >
                      {who}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            All sharing is opt-in and consent-based. The older adult controls
            what is visible. They can revoke family access at any time. MEOK is
            a companion — the family connection exists to protect, not to
            surveil.
          </p>

          {/* ── Q6 ── */}
          <h2
            id="simple-signup"
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
            Is MEOK free for older adults, and is it easy to set up?
          </h2>
          <p>
            The{" "}
            <strong style={{ color: "#f5f0e8" }}>
              Explorer tier is free forever
            </strong>{" "}
            — no credit card, no trial period, no expiry date. It includes 50
            messages per day, persistent companion memory, and full Senior Mode
            access. An older adult can be up and talking to their companion
            within five minutes of opening the app, often with a family member
            present for the first session to answer any questions.
          </p>
          <p>
            There is no &ldquo;tech expertise required.&rdquo; The signup flow asks for a
            name and an email address. Senior Mode activates with a single tap.
            The companion immediately introduces itself and begins the
            conversation — the user does not have to work out what to do. From
            that first exchange, MEOK starts building its understanding of the
            person it is talking to.
          </p>
          <p>
            Families who want Guardian scam alerts and the family dashboard can
            upgrade to the{" "}
            <strong style={{ color: "#f5f0e8" }}>Family tier at £29/month</strong>.
            No long-term contract. Cancel any time.
          </p>

          {/* Resources box */}
          <div
            className="rounded-2xl p-6 mt-10 mb-4"
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#c9a84c" }}
            >
              UK Resources
            </p>
            <div className="space-y-4">
              <div>
                <p
                  className="font-bold text-sm mb-0.5"
                  style={{ color: "#f5f0e8" }}
                >
                  Age UK — loneliness and social isolation support
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  Helpline:{" "}
                  <strong style={{ color: "#f5f0e8" }}>0800 678 1602</strong>{" "}
                  (8am–7pm, every day) &middot;{" "}
                  <a
                    href="https://www.ageuk.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c9a84c", textDecoration: "underline" }}
                  >
                    ageuk.org.uk
                  </a>
                </p>
              </div>
              <div
                className="h-px"
                style={{ background: "rgba(201,168,76,0.12)" }}
              />
              <div>
                <p
                  className="font-bold text-sm mb-0.5"
                  style={{ color: "#f5f0e8" }}
                >
                  Action Fraud — report financial fraud and cybercrime
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  Helpline:{" "}
                  <strong style={{ color: "#f5f0e8" }}>0300 123 2040</strong>{" "}
                  &middot;{" "}
                  <a
                    href="https://www.actionfraud.police.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c9a84c", textDecoration: "underline" }}
                  >
                    actionfraud.police.uk
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Closing note */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.5)",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}
            >
              The best technology is invisible. Senior Mode is designed so that
              your mum doesn&apos;t have to think about accessibility — she just has
              a companion that works. Guardian is designed so that your dad
              doesn&apos;t have to think about scam protection — it just runs.
              MEOK was built to give older adults the dignity of a powerful,
              private AI that never forgets them.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-older-adults&text=AI+Companion+for+Older+Adults%3A+Combating+Isolation%2C+Scam+Protection+%26+Senior+Mode+Explained"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-older-adults"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
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
              Guardian for Families
            </p>
            <h3
              className="text-xl sm:text-2xl font-black mb-3"
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              }}
            >
              Protecting the people who matter most.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Start your loved one on MEOK free — Senior Mode included,
              no credit card. Upgrade to the Family tier for real-time scam
              alerts, the family dashboard, and shared companion management.
              £29/month. No long-term contract.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guardian"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
                style={{
                  background: "#c9a84c",
                  color: "#0d0c18",
                  minHeight: "44px",
                  minWidth: "44px",
                }}
              >
                See Guardian plan &#8594;
              </Link>
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
                style={{
                  border: "1px solid rgba(245,240,232,0.2)",
                  color: "rgba(245,240,232,0.8)",
                  minHeight: "44px",
                  minWidth: "44px",
                }}
              >
                Start free
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mb-16">
          <h2
            className="font-black text-white text-xl mb-6"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How many older people in the UK suffer from loneliness?",
                a: "According to Age UK, 1.4 million older people in England are often or always lonely. Chronic loneliness is associated with a 26% increased risk of premature death — making it a serious public health issue. MEOK's persistent memory and daily check-ins provide consistent, warm contact that meaningfully reduces felt isolation.",
              },
              {
                q: "Why are older adults targeted more often by financial scams?",
                a: "Action Fraud data shows over-65s are the primary targets for financial fraud in the UK. Social isolation, trust in authority, and unfamiliarity with digital manipulation patterns make older adults more vulnerable. MEOK Guardian's real-time threat scoring detects these patterns before they reach the user.",
              },
              {
                q: "What is Senior Mode in MEOK?",
                a: "Senior Mode is a one-tap accessibility preset enforcing 18px+ text, 44×44px touch targets, 7:1 contrast ratio, reduced motion, and a voice-primary interface. No typing is ever required. The companion guides the conversation naturally so someone who has never used a smartphone app can start talking within minutes.",
              },
              {
                q: "How does Guardian detect scams in real time?",
                a: "Guardian scores every incoming message against a threat model covering urgency cues, impersonation language, payment pressure, and coercive control patterns. It cross-references company names against Companies House. Critical-risk messages are held before reaching the user and an immediate alert is sent to the family dashboard.",
              },
              {
                q: "Can family members monitor safety without reading private conversations?",
                a: "Yes. The family dashboard shows Guardian alerts and activity summaries — never the content of private conversations. The older adult controls all sharing permissions and can revoke family access at any time. Oversight is built on consent, not surveillance.",
              },
              {
                q: "Is MEOK free to start?",
                a: "Yes. The Explorer tier is free forever — no credit card, no expiry. It includes 50 messages per day, persistent companion memory, and full Senior Mode. Families wanting Guardian alerts and the family dashboard can upgrade to the Family tier at £29/month, with no long-term contract.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-6 border"
                style={{
                  background: "rgba(245,240,232,0.03)",
                  borderColor: "rgba(245,240,232,0.07)",
                }}
              >
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "#f5f0e8" }}
                >
                  {q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.55)" }}
                >
                  {a}
                </p>
              </div>
            ))}
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
              href="/blog/guardian-family-safety"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                className="font-bold text-sm leading-snug"
                style={{ color: "#f5f0e8" }}
              >
                Guardian: Family Safety Without Surveillance
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/senior-mode-guide"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                Accessibility
              </span>
              <h3
                className="font-bold text-sm leading-snug"
                style={{ color: "#f5f0e8" }}
              >
                Senior Mode: How MEOK AI LABS Makes AI Accessible for Older
                Adults
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                4 min read
              </div>
            </Link>
            <Link
              href="/blog/why-your-nan-needs-sovereign-ai"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                Sovereign AI
              </span>
              <h3
                className="font-bold text-sm leading-snug"
                style={{ color: "#f5f0e8" }}
              >
                Why Your Nan Needs Sovereign AI
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                4 min read
              </div>
            </Link>
            <Link
              href="/blog/ai-companion-for-loneliness"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                Loneliness
              </span>
              <h3
                className="font-bold text-sm leading-snug"
                style={{ color: "#f5f0e8" }}
              >
                AI Companion for Loneliness: Can an AI Actually Help?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <div
        className="border-t px-6 py-12"
        style={{ borderColor: "rgba(245,240,232,0.07)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="font-black text-base mb-1"
                style={{
                  color: "#f5f0e8",
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                }}
              >
                MEOK AI LABS
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(245,240,232,0.35)" }}
              >
                Sovereign AI that knows you, protects you, and never trains on
                you.
                <br />
                Built in the UK by Nicholas Templeman.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/guardian", label: "Guardian" },
                { href: "/birth", label: "Start free" },
                { href: "/about", label: "About" },
                { href: "/privacy", label: "Privacy" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs transition-opacity hover:opacity-80"
                  style={{ color: "rgba(245,240,232,0.45)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ borderTop: "1px solid rgba(245,240,232,0.06)" }}
          >
            <p
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              &copy; {new Date().getFullYear()} MEOK AI LABS Ltd. All rights
              reserved.
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.2)" }}
            >
              meok.ai &middot; United Kingdom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
