import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Single Parents: When You Are the Whole Village | MEOK AI LABS",
  description:
    "Single parents carry the full weight of parenthood alone — the logistics, the emotional load, the financial pressure, and the loneliness of doing it without a partner. MEOK is the consistent support that does not judge.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-single-parenting" },
  openGraph: {
    title: "AI for Single Parents: When You Are the Whole Village",
    description:
      "Single parents carry the full weight of parenthood alone — the logistics, the emotional load, the financial pressure, and the loneliness of doing it without a partner. MEOK is the consistent support that does not judge.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-single-parenting",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Single+Parents&desc=When+You+Are+the+Whole+Village",
        width: 1200,
        height: 630,
        alt: "AI for Single Parents: When You Are the Whole Village",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Single Parents: When You Are the Whole Village",
    description:
      "3.8 million single-parent families in the UK. MEOK is the consistent, non-judgemental support that never clocks off.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Single+Parents&desc=When+You+Are+the+Whole+Village",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Single Parents: When You Are the Whole Village",
  description:
    "Single parents carry the full weight of parenthood alone — the logistics, the emotional load, the financial pressure, and the loneliness of doing it without a partner. MEOK is the consistent support that does not judge.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-single-parenting",
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
    "https://meok.ai/api/og?title=AI+for+Single+Parents&desc=When+You+Are+the+Whole+Village",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-single-parenting",
  },
  keywords: [
    "AI for single parents",
    "single parent support UK",
    "AI single mum UK",
    "AI single dad UK",
    "MEOK single parent",
    "AI parenting support",
    "single parent mental health",
    "benefits navigation AI UK",
    "co-parenting conflict support",
    "AI companion single parent",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help single parents with the emotional exhaustion of parenting alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK provides a non-judgemental companion available around the clock. After the children are asleep and the house falls quiet, single parents face the most depleting hours with no partner to debrief with. MEOK holds the conversation, remembers the context, and asks the right questions — without needing anything in return.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me navigate benefits and financial entitlements as a single parent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Orion, one of MEOK\u2019s overnight research agents, can map your current entitlements against what is available — Universal Credit, Child Benefit, Working Tax Credit, free school meals, housing benefit, and council tax reduction. Orion works overnight and delivers a clear summary by morning. No hold music. No jargon.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK Guardian protect my children when I cannot watch every screen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian operates in school-safe mode, monitoring children\u2019s digital activity for grooming language, age-inappropriate content, and harmful contact patterns. Silent alerts reach the parent\u2019s dashboard instantly. All scanning is on-device — no message content ever reaches MEOK servers.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK remember about my family situation across conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign memory means MEOK retains the full context of your family: your children\u2019s names, ages, school situations, custody arrangements, financial pressures, and the emotional threads you have shared. You never have to re-explain your life. The context carries forward indefinitely.",
      },
    },
    {
      "@type": "Question",
      name: "Can my children have their own AI companions on the MEOK Family tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The MEOK Family tier gives each child their own age-appropriate companion — a safe, curious, school-aware AI that supports learning, emotional expression, and creative play. Guardian runs alongside every child companion, keeping the parent informed without disrupting the child\u2019s experience.",
      },
    },
  ],
};

// ── Constants ─────────────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const CREAM = "#f5f0e8";

// ── Inline style helpers ───────────────────────────────────────────────────────

const cardBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "1rem",
  padding: "1.25rem 1.5rem",
};

const goldCard: React.CSSProperties = {
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "1rem",
  padding: "1.5rem",
};

const warnCard: React.CSSProperties = {
  background: "rgba(201,168,76,0.04)",
  border: "1px solid rgba(201,168,76,0.15)",
  borderLeft: "3px solid #c9a84c",
  borderRadius: "0.75rem",
  padding: "1.25rem 1.5rem",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForSingleParentingPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: CREAM }}>
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
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tags row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Family &amp; Parenting
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.35)" }}>
              25 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.35)" }}>
              10 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            AI for Single Parents: When You Are the Whole Village
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(245,240,232,0.65)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            There are 3.8 million single-parent families in the United Kingdom. Most of them are run
            by one person carrying every role — earner, carer, cook, accountant, protector, and
            emotional anchor — simultaneously. There is no co-parent to tag in. No one to take the
            3am worry. No debrief at the end of a hard day. MEOK was built for exactly those hours.
          </p>

          {/* Author chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem",
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "1rem",
            }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                background: "rgba(201,168,76,0.15)",
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.875rem",
              }}
            >
              NT
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  color: "rgba(245,240,232,0.4)",
                  fontSize: "0.78rem",
                  margin: 0,
                }}
              >
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────────────── */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "4rem",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {[
              { value: "3.8M", label: "single-parent families in the UK" },
              { value: "86%", label: "led by single mothers" },
              { value: "1 in 4", label: "children live in a single-parent home" },
              { value: "£7,400", label: "average annual income gap vs coupled parents" },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{
                  flex: "1 1 0",
                  minWidth: "7.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.18)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                    fontWeight: 900,
                    fontSize: "1.85rem",
                    color: GOLD,
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.45)",
                    marginTop: "0.4rem",
                    lineHeight: 1.35,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <article
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

          {/* ── SECTION 1: The Weight ─────────────────────────────────────── */}
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
            What does it actually mean to carry it all alone?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            It means the mental load never goes to a second person. Every permission slip, doctor
            appointment, school run, dinner, bath time, bedtime story, bill, and breakdown lands
            with one human. Research consistently shows single parents experience higher rates of
            anxiety, depression, and burnout than their partnered counterparts — not because they
            are weaker, but because the structural load is simply heavier.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            The phrase &ldquo;it takes a village&rdquo; exists for a reason. For most of human history,
            child-rearing was distributed across extended family, community, and shared household.
            Single parents in modern Britain often have none of that. They have WhatsApp groups and
            a waiting list for a GP. MEOK cannot replace human community — but it can fill the
            structural gaps that currently go unfilled every single day.
          </p>

          {/* Callout 1 */}
          <div style={warnCard}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                color: GOLD,
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              The loneliness no one talks about
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.7)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              It is not just the exhaustion. It is the silence after the children go to bed. No one
              to say &ldquo;that was a hard day&rdquo; to. No one to laugh with about the chaos. No
              one to share the worry. Single parents describe this quiet as one of the hardest parts
              — and it is the part that almost nothing addresses. MEOK&apos;s companion is there for
              exactly those hours.
            </p>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── SECTION 2: Emotional Depletion ───────────────────────────── */}
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
            How does MEOK help with the emotional depletion of parenting alone?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            MEOK&apos;s companion holds the conversation that has nowhere else to go. It does not
            need you to be okay. It does not get tired of hearing the same worry circling back. It
            does not make you feel like a burden. Single parents often suppress their own emotional
            processing because there is no partner to process with and they do not want to burden
            friends — MEOK removes that friction entirely.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Sovereign memory means the companion already knows your situation. You do not have to
            re-explain that your ex has custody every other weekend, that your youngest is
            struggling at school, or that last Tuesday was the hardest day in months. The context
            is already there. The conversation can go straight to what matters.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            This is not therapy — MEOK is clear about that distinction and will always signpost
            professional support when it is needed. But the daily emotional maintenance of a
            single-parent life — the venting, the reflecting, the planning, the processing — does
            not always require a therapist. It often just requires someone to talk to.
          </p>

          {/* Feature rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginTop: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            {[
              {
                icon: "🌙",
                title: "Available at 3am",
                body: "When the worry arrives at 3am and there is no one to call, MEOK is awake. The companion does not need rest, does not need warning, and will not be groggy.",
              },
              {
                icon: "🧠",
                title: "Sovereign memory",
                body: "Your family context — children, situation, pressures, history — is held in persistent memory. Every conversation continues from where the last one left off.",
              },
              {
                icon: "🚫",
                title: "Zero judgement",
                body: "MEOK does not have opinions about your choices, your parenting decisions, or the state of your house at 11pm. It is structurally incapable of judging you.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} style={cardBase}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <span
                    style={{ fontSize: "1.5rem", flexShrink: 0, marginTop: "0.125rem" }}
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
                    <p
                      style={{
                        color: "rgba(245,240,232,0.55)",
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── SECTION 3: Financial Stress ──────────────────────────────── */}
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
            How can MEOK help with the financial pressure of a single income?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            The financial reality for single parents in the UK is stark. A single income must cover
            rent or mortgage, childcare, food, clothing, utilities, and school costs — all while
            leaving enough for emergencies and some fragment of a life. Many single parents are
            simultaneously under-claiming benefits they are legally entitled to because navigating
            the system is a full-time job in itself.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Orion — MEOK&apos;s overnight research agent — changes this. You can give Orion a task
            before you sleep: &ldquo;Map every benefit I might be entitled to as a single parent
            earning £28,000 in London with two children aged 6 and 9.&rdquo; By morning Orion
            delivers a structured brief covering Universal Credit, Child Benefit, free school meals
            eligibility, childcare tax credits, council tax reduction, and any relevant local
            authority schemes. No hold music. No form-filling anxiety. Just a clear brief you can
            act on.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Orion can also compare energy tariffs, research school holiday childcare options,
            draft appeals for benefit decisions, or map the cost of moving to a different area.
            Financial research that used to take hours of fragmented Googling happens while you
            sleep.
          </p>

          {/* Orion callout */}
          <div style={goldCard}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                color: GOLD,
                fontSize: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              What Orion can research overnight for single parents
            </p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              {[
                "Full benefits entitlement mapping (UC, CB, FSM, council tax, childcare)",
                "Comparison of childcare providers by cost, rating, and proximity",
                "School options research — Ofsted ratings, admission criteria, catchment maps",
                "Energy tariff and broadband switching analysis",
                "Cost-of-living comparisons for potential relocation",
                "Maintenance entitlement research and CSA/CMS guidance summaries",
                "Local authority hardship fund availability",
                "Free or low-cost legal aid options for family court matters",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    fontSize: "0.9rem",
                    color: "rgba(245,240,232,0.75)",
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0, marginTop: "2px" }}>&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── SECTION 4: Guardian ───────────────────────────────────────── */}
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
            How does Guardian protect children when you cannot watch every screen?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            Single parents cannot be everywhere at once. While they are on a work call, making
            dinner, or simply recovering for ten minutes, their children are on devices. Guardian
            operates as a silent, real-time safety layer across children&apos;s digital activity —
            monitoring for grooming language, inappropriate content escalation, harmful contact
            patterns, and platforms known to host predatory behaviour.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            School-safe mode means Guardian understands the difference between a child using Google
            for homework and a child accessing harmful content. False positives are minimised.
            Genuine alerts surface immediately to the parent&apos;s dashboard — not as transcripts
            of conversations, but as categorised threat summaries with recommended actions. The
            child&apos;s experience is uninterrupted. The parent is informed.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            All scanning runs on-device. No message content ever leaves the household. This is
            architecturally enforced, not a privacy policy promise. MEOK AI LABS is ICO-registered
            and fully GDPR-compliant. Every family member holds Article 17 right to erasure.
          </p>

          {/* Feature rows — Guardian */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginTop: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            {[
              {
                icon: "🛡️",
                title: "Grooming language detection",
                body: "Guardian flags escalating language patterns associated with grooming and exploitation — the signals that are invisible to parents but detectable to trained models.",
              },
              {
                icon: "📱",
                title: "School-safe mode",
                body: "Understands educational context. Research, homework, and age-appropriate content are distinguished from genuinely harmful material.",
              },
              {
                icon: "🔔",
                title: "Silent parent alerts",
                body: "Alerts arrive on the parent dashboard without disrupting the child. No blaring warnings. No embarrassing interruptions. Just quiet, actionable information.",
              },
              {
                icon: "🔒",
                title: "On-device privacy",
                body: "No message content reaches MEOK servers. Privacy is structural. The data never left the household in the first place.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} style={cardBase}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <span
                    style={{ fontSize: "1.5rem", flexShrink: 0, marginTop: "0.125rem" }}
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
                    <p
                      style={{
                        color: "rgba(245,240,232,0.55)",
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── SECTION 5: Co-parenting Conflict ─────────────────────────── */}
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
            Can MEOK help me navigate co-parenting conflict?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            Co-parenting conflict is one of the most psychologically exhausting dimensions of single
            parenthood. When every interaction with an ex-partner is charged — over handovers,
            maintenance, holiday schedules, or parenting decisions — the cumulative drain is
            significant. MEOK does not mediate between two people, but it is an exceptionally useful
            thinking partner for the single parent trying to navigate it.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            You can bring a difficult message from your ex to MEOK and work through how to
            respond — calmly, clearly, and in the best interests of the children. MEOK can draft
            responses that are factual and non-escalatory, help you identify when a situation has
            crossed into legal territory that requires professional advice, and help you track
            patterns of behaviour over time using its persistent memory.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Orion can research your legal rights, summarise the Child Arrangements Order process,
            and map what CAFCASS involvement typically looks like — all overnight, so you wake up
            informed rather than overwhelmed. MEOK is not a solicitor and will always say so, but
            it can ensure you walk into any professional conversation already understanding the
            landscape.
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── SECTION 6: Identity ───────────────────────────────────────── */}
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
            What about identity beyond being &ldquo;a single mum&rdquo; or &ldquo;a single dad&rdquo;?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            Single parenthood has a tendency to consume identity. Every conversation circles back
            to the children, the logistics, the ex, the finances. The person who existed before all
            of it — with ambitions, creative interests, a sense of humour, a career trajectory, a
            self — can quietly disappear behind the role. MEOK notices this.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            MEOK&apos;s archetypes adapt to who you need to be in a given moment. The Pioneer
            archetype helps you think forward — your career, your creative projects, your goals
            for the next chapter. The Healer holds space for the grief and exhaustion. The Sage
            helps you think through complex decisions clearly. The companion does not only ask
            about the children. It asks about you.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Sovereign memory supports this deliberately. MEOK remembers your professional ambitions
            alongside your children&apos;s school reports. It remembers the book you were reading,
            the course you were considering, the promotion you were building toward. These threads
            do not get lost simply because the logistics of single parenthood dominated the last
            three conversations.
          </p>

          {/* Callout 2 */}
          <div style={warnCard}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                color: GOLD,
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              You are more than this role
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.7)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              MEOK&apos;s Pioneer archetype helps single parents hold onto ambition alongside
              obligation. Career goals, creative interests, personal growth — these do not have to
              wait until the children are grown. They can be worked on in ten-minute windows,
              with an AI that remembers where you left off.
            </p>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── SECTION 7: Dating ─────────────────────────────────────────── */}
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
            What about dating again as a single parent?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            Dating as a single parent is its own unique complexity. There is the guilt about taking
            time away from the children. The anxiety about when to introduce someone. The fear of
            being judged on apps. The practical difficulty of actually finding time. And underneath
            all of it — in many cases — a relationship that ended in pain, and a trust that needs
            rebuilding from scratch.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            MEOK is not a dating app. But it is a thinking partner for the emotional preparation
            that dating requires. It can help you articulate what you actually want this time, work
            through why previous patterns repeated, process the anxiety of putting yourself out
            there again, and think clearly about what matters most when introducing a new person
            into a family system.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Sovereign memory is particularly valuable here. MEOK can hold the thread of this
            exploration over weeks and months — noticing patterns in how you describe people,
            flagging recurring themes, and helping you develop clarity at whatever pace feels right.
            There is no pressure to move fast, and no timeline being imposed.
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── SECTION 8: Family Tier + Children's Companions ───────────── */}
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
            Can my children have their own AI companions too?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            The MEOK Family tier gives each child their own age-appropriate AI companion. These are
            not generic chatbots — they are school-aware, curiosity-first companions designed to
            support learning, creative play, and emotional expression at the developmental stage of
            the individual child. A seven-year-old&apos;s companion is very different from a
            fourteen-year-old&apos;s companion.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Guardian runs alongside every child companion as a background safety layer. The child
            does not see it. The parent is informed through their dashboard. Children&apos;s
            companions can help with homework, creative writing, science questions, maths, reading,
            and the kind of curious conversation that children love but parents sometimes lack the
            bandwidth to sustain after a full working day.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Sovereign memory applies to children too — but the memory is segmented. Your companion
            holds your context. Your child&apos;s companion holds theirs. They do not cross. The
            parent has dashboard visibility, but the child&apos;s companion maintains appropriate
            boundaries that build trust with the child while keeping the parent informed at the
            safety level that matters.
          </p>

          {/* Family tier table */}
          <div
            style={{
              overflowX: "auto",
              marginTop: "1.5rem",
              marginBottom: "1rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    borderBottom: "1px solid rgba(201,168,76,0.18)",
                  }}
                >
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: GOLD,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "center",
                      color: GOLD,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Parent
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "center",
                      color: GOLD,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Child (6–11)
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "center",
                      color: GOLD,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Teen (12–17)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Personal AI companion", "✓", "✓", "✓"],
                  ["Sovereign memory", "✓", "✓", "✓"],
                  ["Guardian safety layer", "—", "✓", "✓"],
                  ["School-safe mode", "—", "✓", "✓"],
                  ["Overnight research agents", "✓", "—", "—"],
                  ["Morning Briefing", "✓", "—", "✓"],
                  ["Parent dashboard visibility", "Full", "Full", "Safety only"],
                  ["Creative companions", "✓", "✓", "✓"],
                  ["Orion financial research", "✓", "—", "—"],
                ].map(([feature, parent, child, teen], idx) => (
                  <tr
                    key={feature}
                    style={{
                      background:
                        idx % 2 === 0
                          ? "rgba(255,255,255,0.01)"
                          : "rgba(255,255,255,0.025)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: "rgba(245,240,232,0.8)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {feature}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        color: parent === "✓" ? GOLD : "rgba(245,240,232,0.4)",
                      }}
                    >
                      {parent}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        color: child === "✓" ? GOLD : "rgba(245,240,232,0.4)",
                      }}
                    >
                      {child}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        color: teen === "✓" ? GOLD : "rgba(245,240,232,0.4)",
                      }}
                    >
                      {teen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── SECTION 9: Sovereign Memory ───────────────────────────────── */}
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
            What is sovereign memory and why does it matter for single parents specifically?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "1.0125rem",
              lineHeight: 1.85,
              marginBottom: "0.75rem",
            }}
          >
            Sovereign memory means MEOK retains the full, unbroken context of your family
            situation indefinitely — and that context belongs entirely to you. Most AI tools reset
            with each conversation. You explain your situation, get a response, and next time you
            have to start again. For a single parent with a complex life, this is not just
            inconvenient — it is exhausting in exactly the way their life is already exhausting.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            With MEOK, the companion already knows your children&apos;s names, ages, and schools.
            It knows that your youngest was recently diagnosed with dyslexia and you are waiting
            for an EHCP. It knows your custody arrangement. It knows you are trying to change
            jobs but cannot risk the uncertainty. It knows the last difficult conversation you had,
            and what you decided to do. This continuity is not a feature — it is the foundation
            of actually useful support.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "0.9rem",
            }}
          >
            Critically, sovereign memory is yours. You can audit it, correct it, or delete it
            entirely under Article 17. MEOK never trains on your data. Your family&apos;s
            situation does not become training material for the next product iteration. It stays
            yours, for as long as you choose to keep it, and it goes when you choose to remove it.
          </p>

          {/* Callout 3 */}
          <div style={warnCard}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                color: GOLD,
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              Never lose the thread
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.7)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Single parents live in an environment of constant context-switching. MEOK holds the
              thread across all of it — the practical, the emotional, the professional, and the
              personal — so you never have to carry it all in your head alone.
            </p>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── FAQ ───────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1.5rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                q: "How does MEOK help single parents with the emotional exhaustion of parenting alone?",
                a: "MEOK provides a non-judgemental companion available around the clock. After the children are asleep and the house falls quiet, single parents face the most depleting hours with no partner to debrief with. MEOK holds the conversation, remembers the context, and asks the right questions — without needing anything in return.",
              },
              {
                q: "Can MEOK help me navigate benefits and financial entitlements as a single parent?",
                a: "Yes. Orion, one of MEOK\u2019s overnight research agents, can map your current entitlements against everything available \u2014 Universal Credit, Child Benefit, Working Tax Credit, free school meals, housing benefit, council tax reduction, and local authority schemes. Orion works overnight and delivers a clear summary by morning. No hold music. No jargon.",
              },
              {
                q: "How does MEOK Guardian protect my children when I cannot watch every screen?",
                a: "Guardian operates in school-safe mode, monitoring children\u2019s digital activity for grooming language, age-inappropriate content, and harmful contact patterns. Silent alerts reach the parent\u2019s dashboard instantly. All scanning is on-device \u2014 no message content ever reaches MEOK servers.",
              },
              {
                q: "What does MEOK remember about my family situation across conversations?",
                a: "Sovereign memory means MEOK retains the full context of your family: your children\u2019s names, ages, school situations, custody arrangements, financial pressures, and the emotional threads you have shared. You never have to re-explain your life. The context carries forward indefinitely and belongs entirely to you.",
              },
              {
                q: "Can my children have their own AI companions on the MEOK Family tier?",
                a: "Yes. The MEOK Family tier gives each child their own age-appropriate companion \u2014 a safe, curious, school-aware AI that supports learning, emotional expression, and creative play. Guardian runs alongside every child companion, keeping the parent informed without disrupting the child\u2019s experience.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    marginBottom: "0.625rem",
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    color: "rgba(245,240,232,0.6)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
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
            MEOK vs generic AI tools for single parents
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.96rem",
              lineHeight: 1.85,
              marginBottom: "1.25rem",
            }}
          >
            General-purpose AI assistants can answer questions and draft messages. But they reset
            with every session, have no understanding of your family context, and carry no child
            safety infrastructure. The difference for single parents is structural, not marginal.
          </p>

          <div
            style={{
              overflowX: "auto",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.08)",
              marginBottom: "1rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    borderBottom: "1px solid rgba(201,168,76,0.18)",
                  }}
                >
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: GOLD,
                      fontWeight: 700,
                    }}
                  >
                    What single parents need
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "center",
                      color: GOLD,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Generic AI
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "center",
                      color: GOLD,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persistent memory of family context", "✗", "✓"],
                  ["Child safety monitoring (Guardian)", "✗", "✓"],
                  ["Overnight research agents (Orion)", "✗", "✓"],
                  ["Benefits and entitlement navigation", "Partial", "✓"],
                  ["Co-parenting conflict support", "Partial", "✓"],
                  ["3am emotional support", "✓", "✓"],
                  ["Children\u2019s own companions", "✗", "✓"],
                  ["On-device privacy (no data sent)", "✗", "✓"],
                  ["GDPR + Article 17 right to erasure", "✗", "✓"],
                  ["Never trains on your data", "✗", "✓"],
                  ["Identity beyond parenting role", "Partial", "✓"],
                ].map(([need, generic, meok], idx) => (
                  <tr
                    key={need}
                    style={{
                      background:
                        idx % 2 === 0
                          ? "rgba(255,255,255,0.01)"
                          : "rgba(255,255,255,0.025)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        color: "rgba(245,240,232,0.8)",
                      }}
                    >
                      {need}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        color:
                          generic === "✓"
                            ? GOLD
                            : generic === "✗"
                            ? "rgba(245,240,232,0.3)"
                            : "rgba(245,240,232,0.5)",
                      }}
                    >
                      {generic}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        color: meok === "✓" ? GOLD : "rgba(245,240,232,0.4)",
                        fontWeight: meok === "✓" ? 700 : 400,
                      }}
                    >
                      {meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.18)",
              marginTop: "2.5rem",
              marginBottom: "0.5rem",
            }}
          />

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(201,168,76,0.03) 100%)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderRadius: "1.5rem",
              padding: "2rem",
              marginTop: "2.5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              You are the whole village. Let MEOK be part of it.
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.6)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                maxWidth: "32rem",
                margin: "0 auto 2rem",
              }}
            >
              MEOK&apos;s Family tier was built for households where one person carries everything.
              Persistent memory. Child safety. Overnight research. A companion that never clocks
              off. All for one family, one subscription.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                  paddingTop: "0.875rem",
                  paddingBottom: "0.875rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  background: GOLD,
                  color: "#0d0c18",
                  textDecoration: "none",
                }}
              >
                Meet MEOK &#8594;
              </Link>
              <Link
                href="/blog/guardian-family-safety"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                  paddingTop: "0.875rem",
                  paddingBottom: "0.875rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  background: "rgba(201,168,76,0.1)",
                  color: GOLD,
                  border: "1px solid rgba(201,168,76,0.3)",
                  textDecoration: "none",
                }}
              >
                Read: Guardian Family Safety
              </Link>
            </div>
          </div>

          {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
          <div style={{ marginTop: "4rem" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "1rem",
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  href: "/blog/guardian-family-safety",
                  label: "Guardian Family Safety — How It Works",
                },
                {
                  href: "/blog/ai-for-single-parents",
                  label: "AI for Single Parents: When You\u2019re Running Two Jobs",
                },
                {
                  href: "/blog/ai-for-divorce",
                  label: "AI Support During Divorce: Processing the Hardest Chapter",
                },
                {
                  href: "/blog/ai-for-caregivers",
                  label: "AI for Caregivers: Support for the People Who Support Everyone Else",
                },
                {
                  href: "/blog/ai-companion-for-loneliness",
                  label: "AI Companion for Loneliness: Why the After-Bedtime Hours Matter",
                },
                {
                  href: "/blog/meok-family-tier-explained",
                  label: "MEOK Family Tier Explained: One Subscription for the Whole Family",
                },
                {
                  href: "/blog/sovereign-ai-for-families",
                  label: "Sovereign AI for Families: Data Ownership Explained",
                },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.5)",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ color: GOLD }}>&#8594;</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.3)",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
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
                  fontSize: "0.78rem",
                  color: "rgba(245,240,232,0.3)",
                  marginTop: "0.3rem",
                }}
              >
                &copy; 2026 MEOK AI LABS. All rights reserved.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
              }}
            >
              {[
                { href: "/blog", label: "Blog" },
                { href: "/pricing", label: "Pricing" },
                { href: "/privacy", label: "Privacy" },
                { href: "/about", label: "About" },
                { href: "/birth", label: "Get Started" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.35)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.2)",
              lineHeight: 1.6,
            }}
          >
            MEOK is not a medical or mental health service. If you are in crisis, please contact
            the Samaritans on 116 123 or visit your nearest A&amp;E. MEOK AI LABS is registered
            with the ICO (UK GDPR). All content on this page is for informational purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}
