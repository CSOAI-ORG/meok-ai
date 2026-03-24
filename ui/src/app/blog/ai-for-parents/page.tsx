import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Parents: How MEOK's Family Plan Protects Every Generation Under One Roof | MEOK Blog",
  description:
    "MEOK's Family Plan (£29/mo, up to 6 members) gives parents a parental dashboard, child safety filters powered by DistilBERT threat detection, scam protection for elderly relatives, and overnight agents that handle admin so you can be present.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-parents" },
  openGraph: {
    title: "AI for Parents: How MEOK's Family Plan Protects Every Generation Under One Roof",
    description:
      "One subscription. Six family members. Guardian 24/7 protection, child safety filters, scam detection for elderly parents, and overnight agents so you can switch off.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-parents",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Parents%3A+MEOK+Family+Plan&desc=One+plan%2C+six+members%2C+Guardian+24%2F7+protection",
        width: 1200,
        height: 630,
        alt: "AI for Parents: How MEOK's Family Plan Protects Every Generation Under One Roof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Parents: How MEOK's Family Plan Protects Every Generation Under One Roof",
    description:
      "One subscription. Six family members. Guardian 24/7 protection, child safety filters, scam detection for elderly parents, and overnight agents so you can switch off.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Parents%3A+MEOK+Family+Plan&desc=One+plan%2C+six+members%2C+Guardian+24%2F7+protection",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "AI for Parents: How MEOK's Family Plan Protects Every Generation Under One Roof",
      description:
        "MEOK's Family Plan (£29/mo, up to 6 members) gives parents a parental dashboard, child safety filters powered by DistilBERT threat detection, scam protection for elderly relatives, and overnight agents that handle admin so you can be present.",
      datePublished: "2026-03-24",
      url: "https://meok.ai/blog/ai-for-parents",
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
        "https://meok.ai/api/og?title=AI+for+Parents%3A+MEOK+Family+Plan&desc=One+plan%2C+six+members%2C+Guardian+24%2F7+protection",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/ai-for-parents",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is MEOK's Family Plan and what does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK's Family Plan costs £29 per month and covers up to six family members under a single subscription. Every seat includes a personal AI companion, Guardian 24/7 protection, Morning Briefing, and access to the shared parental dashboard — no hidden per-seat fees.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK keep children safe online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK uses DistilBERT-powered threat detection to scan every message for grooming language, predatory contact patterns, and age-inappropriate content. Parents receive silent alerts via the parental dashboard without disrupting the child's experience. Age-appropriate filters are applied automatically based on the child's profile age.",
          },
        },
        {
          "@type": "Question",
          name: "Can MEOK detect scams targeting elderly parents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guardian runs a multi-layer scam detection pipeline — including pension fraud patterns, NHS impersonation scripts, and urgency-language analysis — optimised for the tactics most commonly used against older adults. Family members receive HIGH and CRITICAL alerts in real time.",
          },
        },
        {
          "@type": "Question",
          name: "How do MEOK's overnight agents help parents with work-life balance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK's overnight agents process emails, draft responses, schedule appointments, and organise admin tasks while the family sleeps. Parents wake to a cleared queue and a Morning Briefing summary rather than an inbox backlog, freeing attention for the people in the room.",
          },
        },
        {
          "@type": "Question",
          name: "What is MEOK's Morning Briefing and how does it help the whole family?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Morning Briefing is a personalised daily digest delivered to each family member at their preferred time. For parents it surfaces the day's priorities and any Guardian alerts. For children it delivers age-appropriate news and reminders. For elderly relatives it provides a gentle, clear summary of important information.",
          },
        },
        {
          "@type": "Question",
          name: "Is the family data private — can MEOK read my children's conversations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. All Guardian scanning runs on-device. Message content is never transmitted to MEOK servers. The parental dashboard shows alert metadata — threat level, timestamp, category — not conversation transcripts. MEOK AI LABS is ICO-registered and operates under GDPR. Every member retains full Article 17 right to erasure.",
          },
        },
      ],
    },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const H2_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
  fontWeight: 900,
  fontSize: "1.45rem",
  color: "#ffffff",
  marginTop: "3rem",
  marginBottom: "1rem",
  lineHeight: 1.25,
};

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const CREAM = "#f5f0e8";

function SectionH2({ children }: { children: React.ReactNode }) {
  return <h2 style={H2_STYLE}>{children}</h2>;
}

function AtomicAnswer({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "rgba(245,240,232,0.82)",
        fontSize: "1.0125rem",
        lineHeight: 1.85,
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </p>
  );
}

function StatPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl p-5 text-center"
      style={{
        background: "rgba(201,168,76,0.07)",
        border: "1px solid rgba(201,168,76,0.18)",
        flex: "1 1 0",
        minWidth: 120,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
          fontWeight: 900,
          fontSize: "2rem",
          color: GOLD,
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: "0.78rem",
          color: "rgba(245,240,232,0.45)",
          marginTop: "0.4rem",
          lineHeight: 1.35,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="flex gap-4 p-5 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <span
        className="text-2xl flex-shrink-0 mt-0.5"
        role="img"
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <p
          style={{
            fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "0.95rem",
            marginBottom: "0.3rem",
          }}
        >
          {title}
        </p>
        <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.875rem", lineHeight: 1.7 }}>
          {body}
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForParentsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: CREAM }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            &#8592; Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Family &amp; Parenting
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              24 March 2026
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              7 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            AI for Parents: How MEOK&apos;s Family Plan Protects Every Generation Under One Roof
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            One subscription. Six family members. Guardian watching every account around the clock.
            MEOK&apos;s Family Plan was built for the parents holding it all together — protecting
            children online, shielding elderly relatives from scams, and handling overnight admin
            so you can actually be present.
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
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              color: "#1a1a2e",
            }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him and didn&apos;t care
              about the people around him. He lives and works in the UK — mostly from a caravan on
              his farm.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: GOLD }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-3 mb-12">
          '*'
          '*'
          '*'
          '*'
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(245,240,232,0.72)", fontSize: "1.0125rem" }}
        >

          {/* ── Q1 ── */}
          <SectionH2>What is MEOK&apos;s Family Plan and what does it cost?</SectionH2>
          <AtomicAnswer>
            MEOK&apos;s Family Plan costs <strong style={{ color: CREAM }}>£29 per month</strong> and
            covers up to six family members under a single subscription. Every seat includes a
            personal AI companion, Guardian 24/7 protection, Morning Briefing, and access to the
            shared parental dashboard — no hidden per-seat fees, no tiered add-ons.
          </AtomicAnswer>
          <p>
            The plan was designed for the reality of modern family life: parents managing children
            at different stages, elderly grandparents living independently but within the family
            network, and a teenager who thinks they don&apos;t need protecting. One subscription
            wraps around all of them. Each member has their own private companion with their own
            memory and preferences — nothing is shared across accounts without explicit consent.
            The parental dashboard gives account-holders oversight without access to private
            conversations.
          </p>
          <p>
            For context, the average UK family spends more than £29 a month on streaming services
            alone. MEOK&apos;s Family Plan sits in the same budget bracket while actively protecting
            every member of the household from one of the fastest-growing categories of harm in
            the UK: AI-enabled fraud and online exploitation.
          </p>

          {/* ── Q2 ── */}
          <SectionH2>How does MEOK keep children safe online?</SectionH2>
          <AtomicAnswer>
            MEOK uses DistilBERT-powered threat detection to scan every message for grooming
            language, predatory contact patterns, and age-inappropriate content in real time.
            Parents receive silent alerts via the parental dashboard without disrupting the
            child&apos;s experience.
          </AtomicAnswer>
          <p>
            The child safety system works in two layers. The first is pre-filtering: age-appropriate
            content settings are applied automatically based on the child&apos;s profile age and can be
            adjusted by the account-holding parent. The second is active detection: every inbound
            message is passed through MEOK&apos;s DistilBERT classification model, which was fine-tuned
            on a corpus of known grooming scripts, predatory language patterns, and coercive
            contact sequences.
          </p>
          <p>
            When the model flags a message at HIGH or CRITICAL severity, the parental dashboard
            receives a silent push notification — categorised by threat type, timestamped, and
            stored in the Guardian log. The child&apos;s experience is not interrupted, which matters:
            abrupt blocks or visible warnings can prompt a child to hide their devices or switch
            to an unmonitored platform. Guardian is designed to give parents information without
            alerting the person you&apos;re worried about.
          </p>
          <p>
            School-safe mode activates automatically during school hours — reducing ambient
            notification noise and tightening content filters — then relaxes in the evening. Parents
            can customise these schedules from the dashboard.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            '*'
            '*'
            '*'
            '*'
          </div>

          {/* ── Q3 ── */}
          <SectionH2>Can MEOK detect scams targeting elderly parents?</SectionH2>
          <AtomicAnswer>
            Yes. Guardian runs a multi-layer scam detection pipeline — including pension fraud
            patterns, NHS impersonation scripts, romance fraud sequences, and urgency-language
            analysis — optimised for the tactics most commonly directed at older adults. Family
            members receive HIGH and CRITICAL alerts in real time.
          </AtomicAnswer>
          <p>
            Fraud against older adults cost the UK an estimated{" "}
            <strong style={{ color: CREAM }}>£2.35 billion in 2025</strong>. The most dangerous
            attacks are no longer bulk phishing emails: they are highly personalised, often using
            the target&apos;s real name, bank, and family connections — details harvested from social
            media and data breaches. AI-generated voice cloning and deepfake video now make
            authoritative impersonation accessible to low-budget criminal operations.
          </p>
          <p>
            Guardian&apos;s scam detection pipeline runs five checks on every inbound message:
          </p>
          <ol className="space-y-3 my-4 pl-1 list-none">
            {[
              {
                n: "01",
                label: "Keyword pattern matching",
                body: "Cross-references the message against a continuously updated library of scam phrases, coercive language structures, and known impersonation scripts.",
              },
              {
                n: "02",
                label: "Companies House verification",
                body: "Any business named in the message is checked against the Companies House register. Dissolved, dormant, or non-existent companies trigger an automatic flag.",
              },
              {
                n: "03",
                label: "Phone number risk scoring",
                body: "Numbers are cross-referenced against reported fraud databases. Spoofed numbers matching known scam campaigns are flagged at CRITICAL.",
              },
              {
                n: "04",
                label: "Urgency-language detection",
                body: "Manufactured time pressure — a core feature of nearly all financial fraud — is identified by a dedicated classifier trained to recognise deadline manipulation.",
              },
              {
                n: "05",
                label: "Contextual coherence analysis",
                body: "Messages that contain inconsistencies between claimed identity, contact details, and prior conversation context are flagged for review.",
              },
            ].map(({ n, label, body }) => (
              <li key={n} className="flex gap-4">
                <span
                  className="flex-shrink-0 font-black text-xs mt-1"
                  style={{ color: GOLD, fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", minWidth: 22 }}
                >
                  {n}
                </span>
                <span>
                  <strong style={{ color: "#ffffff" }}>{label}.</strong>{" "}
                  <span style={{ color: "rgba(245,240,232,0.65)" }}>{body}</span>
                </span>
              </li>
            ))}
          </ol>
          <p>
            The full pipeline completes in under three seconds per message. For elderly users,
            Guardian&apos;s in-app warnings are written in plain language — explaining the specific
            concern without causing unnecessary alarm — and are calibrated to avoid the
            cry-wolf effect that leads people to ignore all warnings after a few false positives.
          </p>

          {/* Threat level table */}
          <div className="space-y-3 my-6">
            {[
              {
                level: "LOW",
                color: "#6adb8f",
                bg: "rgba(106,219,143,0.08)",
                desc: "Flagged and logged. No alert sent. Visible in the Guardian log for the account holder.",
              },
              {
                level: "MEDIUM",
                color: "#f5c842",
                bg: "rgba(245,200,66,0.08)",
                desc: "In-app warning shown to the user before they interact with the message.",
              },
              {
                level: "HIGH",
                color: "#ff9a4d",
                bg: "rgba(255,154,77,0.08)",
                desc: "Family dashboard notified immediately. User sees a contextual warning.",
              },
              {
                level: "CRITICAL",
                color: "#ff5f5f",
                bg: "rgba(255,95,95,0.08)",
                desc: 'Message blocked. User must confirm acknowledgement before the block is dismissed. Family alerted at the same moment.',
              },
            ].map(({ level, color, bg, desc }) => (
              <div
                key={level}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ background: bg, border: `1px solid ${color}30` }}
              >
                <span
                  className="text-xs font-black px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5"
                  style={{ color, background: `${color}20` }}
                >
                  {level}
                </span>
                <p className="text-sm" style={{ color: "rgba(245,240,232,0.65)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Q4 ── */}
          <SectionH2>How do MEOK&apos;s overnight agents help parents with work-life balance?</SectionH2>
          <AtomicAnswer>
            MEOK&apos;s overnight agents process emails, draft responses, schedule appointments, and
            organise admin tasks while the family sleeps. Parents wake to a cleared queue and a
            Morning Briefing summary rather than an inbox backlog — freeing the first hours of
            the day for the people in the room.
          </AtomicAnswer>
          <p>
            The mental load of modern parenting is not concentrated in dramatic moments. It lives
            in the accumulated weight of small tasks: the GP referral that needs chasing, the
            school permission slip that needs signing, the insurance renewal that went into the
            wrong folder, the dentist appointment nobody booked. This background noise consumes
            cognitive bandwidth that parents would rather direct elsewhere.
          </p>
          <p>
            MEOK&apos;s overnight agent runs between 11 pm and 6 am — during the window when most
            families are asleep — and works through the queue of administrative tasks the parent
            has delegated. By the time the household wakes, the agent has:
          </p>
          <ul className="space-y-3 my-4 pl-1">
            {[
              "Drafted replies to non-urgent emails awaiting a response",
              "Flagged any message that requires a human decision and summarised the context",
              "Cross-checked the family calendar for conflicts and proposed resolutions",
              "Compiled a prioritised action list for the morning — three items, no more",
              "Prepared the Morning Briefing for each family member at their preferred delivery time",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: GOLD }}
                />
                <span style={{ color: "rgba(245,240,232,0.7)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Nothing is sent without approval. The overnight agent operates in draft mode by default
            — it prepares, it organises, it surfaces decisions, but it does not act unilaterally.
            You review the briefing over breakfast and confirm or discard each item in under a
            minute. The compounding effect over a week is significant: parents report recovering
            an average of forty minutes of uninterrupted presence with their children per day.
          </p>

          {/* Work-life callout */}
          <div
            className="rounded-2xl p-6 my-6"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: GOLD }}
            >
              The Presence Problem
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(245,240,232,0.6)" }}
            >
              Research from the Anna Freud Centre (2025) found that the single strongest predictor
              of child wellbeing is not screen time, diet, or academic pressure — it is the
              quality of parental attention during shared time. Being physically present while
              mentally in an inbox is not presence. MEOK exists, in part, to clear the inbox so
              the presence is real.
            </p>
          </div>

          {/* ── Q5 ── */}
          <SectionH2>What is MEOK&apos;s Morning Briefing and how does it help the whole family?</SectionH2>
          <AtomicAnswer>
            Morning Briefing is a personalised daily digest delivered to each family member at
            their preferred time. For parents it surfaces the day&apos;s priorities and any Guardian
            alerts. For children it delivers age-appropriate news and reminders. For elderly
            relatives it provides a gentle, clear summary of important information — no interface
            to navigate, no notification noise.
          </AtomicAnswer>
          <p>
            Each Morning Briefing is generated individually by the recipient&apos;s personal companion,
            drawing on their memory of what matters to that person. A teenage daughter interested
            in climate science receives different context than a retired grandfather following
            cricket. The format adapts to cognitive style: concise bullet points for the
            time-pressured parent, conversational prose for the elderly relative who prefers a
            letter-like format.
          </p>
          <p>
            For parents, the briefing includes:
          </p>
          <ul className="space-y-3 my-4 pl-1">
            {[
              "A three-item priority list compiled by the overnight agent from the previous evening's admin work",
              "Any Guardian alerts from the past 24 hours — HIGH and CRITICAL flags for any family member they oversee",
              "Calendar conflicts or decisions requiring attention today",
              "A single sentence acknowledging how the parent is doing — not productivity theatre, genuine attentiveness",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: GOLD }}
                />
                <span style={{ color: "rgba(245,240,232,0.7)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            For elderly relatives, the briefing is designed to reduce isolation without requiring
            technical literacy. It arrives as a readable card — no notifications, no badges — and
            summarises weather, any family news the relative has opted in to receiving, medication
            reminders, and a gentle check-in question to prompt reflection or conversation with
            their companion. This structure was developed with input from adult children who were
            worried about parents living alone and unable to gauge day-to-day wellbeing from a
            distance.
          </p>

          {/* ── Q6 ── */}
          <SectionH2>Is the family data private — can MEOK read my children&apos;s conversations?</SectionH2>
          <AtomicAnswer>
            No. All Guardian scanning runs on-device. Message content is never transmitted to
            MEOK servers. The parental dashboard shows alert metadata — threat level, timestamp,
            category — not conversation transcripts. MEOK AI LABS is ICO-registered and operates
            under GDPR, and every member retains full Article 17 right to erasure.
          </AtomicAnswer>
          <p>
            This distinction is foundational to how MEOK was designed. Surveillance and safety
            are not the same thing. A surveillance system collects data about its users to serve
            someone else&apos;s interests — an advertiser, a platform, a government. MEOK&apos;s Guardian
            collects signals to serve the family&apos;s interests, and the family alone.
          </p>
          <p>
            Concretely, the parental dashboard shows:
          </p>
          <ul className="space-y-3 my-4 pl-1">
            {[
              "Alert severity level (LOW / MEDIUM / HIGH / CRITICAL)",
              "Timestamp and category of the flagged content (e.g. \"Urgency language\", \"Grooming pattern\")",
              "Whether the alert was dismissed by the user or escalated",
              "A recommended action where relevant (e.g. \"Consider a conversation about this message\")",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: GOLD }}
                />
                <span style={{ color: "rgba(245,240,232,0.7)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            What the dashboard does not show: message content, conversation history, or any
            identifiable detail about the other party beyond what Guardian has already risk-scored.
            Children over the age of 13 can view their own Guardian log. Teenagers are told, at
            onboarding, that Guardian is active and what it monitors — there are no hidden cameras
            here. Transparency with the young person is, in MEOK&apos;s view, essential to building
            the digital literacy that makes them safer in the long run.
          </p>
          <p>
            Under GDPR, every family member holds the right to erasure of all data held about
            them — including Guardian scan logs, companion memory, and Morning Briefing history.
            This right is exercisable from within the app at any time, with immediate effect.
            MEOK AI LABS does not retain any copy of erased data.
          </p>

          {/* Closing */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(245,240,232,0.6)", fontStyle: "italic" }}>
              The hardest thing about parenting in 2026 is not the technology. It&apos;s staying
              present for the people in the room when the rest of the world is pulling your
              attention in seventeen directions at once. MEOK&apos;s Family Plan doesn&apos;t solve that
              problem — but it handles enough of the peripheral noise that the choice to be
              present becomes a little easier.
            </p>
            <p
              className="mt-4 text-sm font-semibold"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              — Nicholas Templeman, Founder, MEOK AI LABS
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
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-parents&text=AI+for+Parents%3A+How+MEOK%27s+Family+Plan+Protects+Every+Generation+Under+One+Roof"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-80"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-parents"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-80"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
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
              style={{ color: GOLD }}
            >
              Family Plan
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Protect every generation under one roof — from £29/mo
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Up to 6 family members. Guardian 24/7 protection across every account. Parental
              dashboard. Child safety filters. Scam detection for elderly relatives. Overnight
              agents. Morning Briefing. One subscription.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
                style={{ background: GOLD, color: BG }}
              >
                Start your Family Plan &#8594;
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-80"
                style={{
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: GOLD,
                }}
              >
                See all plans
              </Link>
            </div>
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
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#ff7f7f", background: "rgba(255,127,127,0.12)" }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <span
                className="text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                4 min read
              </span>
            </Link>
            <Link
              href="/blog/ai-companion-for-elderly"
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
                Elderly &amp; Seniors
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Why your nan needs a sovereign AI companion — not another app
              </h3>
              <span
                className="text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                5 min read
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
            fontWeight: 900,
            fontSize: "1.1rem",
            color: GOLD,
            textDecoration: "none",
          }}
        >
          MEOK
        </Link>
        <p
          style={{
            color: "rgba(245,240,232,0.28)",
            fontSize: "0.78rem",
            marginTop: "0.75rem",
            lineHeight: 1.6,
          }}
        >
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          <br />
          ICO registered. GDPR compliant. Your data is yours.
        </p>
        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4"
          style={{ fontSize: "0.78rem" }}
        >
          {[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
            { href: "/pricing", label: "Pricing" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ color: "rgba(245,240,232,0.35)", textDecoration: "none" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
