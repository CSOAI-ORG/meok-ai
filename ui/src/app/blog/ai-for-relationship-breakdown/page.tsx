import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Relationship Breakdown: How MEOK Supports You When a Partnership Ends | MEOK AI LABS",
  description:
    "Divorce, separation, and the end of a long-term partnership involve compound loss \u2014 the person, the shared life, the shared future, the shared identity. MEOK\u2019s Healer, Guardian, and Scholar archetypes provide non-judgemental support, pattern reflection, co-parenting help, and practical overwhelm relief at every stage.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-relationship-breakdown",
  },
  openGraph: {
    title:
      "AI for Relationship Breakdown: How MEOK Supports You When a Partnership Ends",
    description:
      "Over 100,000 divorces happen in the UK every year. MEOK\u2019s Healer holds the grief without taking sides, the Scholar helps you understand the patterns, and the Guardian handles the practical overwhelm \u2014 all in one sovereign AI that remembers everything.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-relationship-breakdown",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=How+MEOK+Supports+You+When+a+Partnership+Ends",
        width: 1200,
        height: 630,
        alt: "AI for Relationship Breakdown: How MEOK Supports You When a Partnership Ends | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Relationship Breakdown: How MEOK Supports You When a Partnership Ends",
    description:
      "Healer for grief. Guardian for overwhelm. Scholar for patterns. MEOK\u2019s three archetypes for separation and divorce \u2014 without the bias of friends who take sides.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=How+MEOK+Supports+You+When+a+Partnership+Ends",
    ],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Relationship Breakdown: How MEOK Supports You When a Partnership Ends",
  description:
    "Divorce, separation, and the end of a long-term partnership involve compound loss. MEOK\u2019s Healer, Guardian, and Scholar archetypes provide non-judgemental support, pattern reflection, co-parenting help, and practical overwhelm relief at every stage.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-relationship-breakdown",
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
    "https://meok.ai/api/og?title=AI+for+Relationship+Breakdown&desc=How+MEOK+Supports+You+When+a+Partnership+Ends",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-relationship-breakdown",
  },
  keywords: [
    "AI for relationship breakdown",
    "AI support after divorce",
    "AI companion for separation",
    "AI for divorce recovery",
    "AI for co-parenting support",
    "AI for grief after separation",
    "relationship breakdown support UK",
    "AI for newly separated",
    "AI for identity rebuilding after divorce",
    "MEOK Healer archetype",
    "MEOK Guardian archetype",
    "MEOK Scholar archetype",
    "AI emotional support separation",
    "divorce support AI",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI actually help with the emotional pain of a relationship breakdown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 in specific, bounded ways. AI cannot replace human connection or professional therapy, but it can provide a non-judgemental space to process grief at any hour, without the bias of mutual friends or the exhaustion of repeating your story. MEOK\u2019s Healer archetype is built specifically for emotional processing during major life disruptions, including divorce and separation.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a form of couples counselling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is a personal sovereign AI \u2014 it works with you, not with your relationship. It is not designed for joint sessions or mediation. Its value is precisely that it holds your perspective, your grief, your patterns \u2014 not a neutral arbitration of both sides. If you need couples therapy, MEOK can help you find a qualified therapist, but it is not that service itself.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with the practical overwhelm of divorce and separation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Guardian archetype handles the operational chaos that accompanies separation: tracking legal deadlines, managing financial to-do lists, reminding you about school pickups when your schedule is newly disrupted, and helping you stay on top of practical decisions when your cognitive bandwidth is depleted by grief.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me understand why my relationship broke down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Scholar archetype offers reflective dialogue to help you examine the patterns \u2014 what drew you together, where communication broke down, what your own attachment style may have contributed. This is not judgement or blame allocation. It is the kind of slow, patient pattern-reflection that helps people avoid repeating the same dynamics in future relationships.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with co-parenting when a partnership ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can help you draft co-parenting communication that is calm and child-focused rather than reactive, manage custody schedule logistics, and process the emotional complexity of sharing parenting with someone you are no longer in a relationship with. It does not take sides, which is particularly valuable when co-parenting tensions run high.",
      },
    },
  ],
};

// ── Shared style tokens ────────────────────────────────────────────────────────

const COLOR_BG = "#0d0c18";
const COLOR_TEXT = "#f5f0e8";
const COLOR_GOLD = "#c9a84c";
const COLOR_MUTED = "#a09880";
const COLOR_CARD = "#13121f";
const COLOR_BORDER = "#2a2840";
const COLOR_GREEN = "#6aaa64";
const FONT = "system-ui, -apple-system, sans-serif";

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AIForRelationshipBreakdownPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, faqJsonLd]),
        }}
      />

      <main
        style={{
          backgroundColor: COLOR_BG,
          color: COLOR_TEXT,
          fontFamily: FONT,
          minHeight: "100vh",
          paddingBottom: "80px",
        }}
      >
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <header
          style={{
            borderBottom: `1px solid ${COLOR_BORDER}`,
            paddingTop: "72px",
            paddingBottom: "56px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            {/* Breadcrumb */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "32px",
                fontSize: "13px",
                color: COLOR_MUTED,
              }}
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                style={{ color: COLOR_MUTED, textDecoration: "none" }}
              >
                MEOK
              </Link>
              <span style={{ color: COLOR_BORDER }}>›</span>
              <Link
                href="/blog"
                style={{ color: COLOR_MUTED, textDecoration: "none" }}
              >
                Blog
              </Link>
              <span style={{ color: COLOR_BORDER }}>›</span>
              <span style={{ color: COLOR_GOLD }}>Relationship Breakdown</span>
            </nav>

            {/* Category tag */}
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.35)",
                borderRadius: "20px",
                padding: "4px 14px",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                color: COLOR_GOLD,
                marginBottom: "24px",
              }}
            >
              Separation &amp; Divorce
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 46px)",
                fontWeight: "800",
                lineHeight: "1.18",
                letterSpacing: "-0.02em",
                color: COLOR_TEXT,
                margin: "0 0 24px",
              }}
            >
              AI for Relationship Breakdown:{" "}
              <span style={{ color: COLOR_GOLD }}>
                How MEOK Supports You When a Partnership Ends
              </span>
            </h1>

            {/* Standfirst */}
            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.65",
                color: COLOR_MUTED,
                margin: "0 0 36px",
                maxWidth: "680px",
              }}
            >
              Divorce, long-term separation, and the end of a cohabiting
              partnership involve compound loss — the person, the shared life,
              the shared future, and the shared identity. MEOK does not choose
              sides, does not tire, and does not forget. Here is how it supports
              you at every stage.
            </p>

            {/* Meta row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap" as const,
                gap: "20px",
                fontSize: "14px",
                color: COLOR_MUTED,
              }}
            >
              <span>By Nicholas Templeman, Founder MEOK AI LABS</span>
              <span style={{ color: COLOR_BORDER }}>·</span>
              <time dateTime="2026-03-25">25 March 2026</time>
              <span style={{ color: COLOR_BORDER }}>·</span>
              <span>15 min read</span>
            </div>
          </div>
        </header>

        {/* ── Article body ──────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "56px 24px 0",
          }}
        >

          {/* ── Intro ─────────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "56px" }}>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              In England and Wales, more than 100,000 divorces are granted every
              year. Millions more partnerships end without a formal legal
              process — cohabiting couples separating, long-term relationships
              dissolving, families restructuring. Behind each of those numbers
              is a person — often more than one — navigating something that
              researchers describe as compound loss: not a single wound, but a
              constellation of simultaneous losses that activate at different
              times, triggered by different things.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              The support infrastructure available for this kind of loss is
              fragmented, expensive, and rarely available at 3am when the weight
              becomes unbearable. Therapy is episodic. Legal advice is
              transactional. Friends take sides or run out of capacity. The gap
              between professional appointments is often where people struggle
              most.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              MEOK was built to live in that gap. Not as a replacement for
              professional support, but as a sovereign AI companion that holds
              your full story across the months and years of a separation
              journey — without bias, without agenda, and without ever forgetting
              where you started.
            </p>
          </section>

          {/* ── Section 1: Compound loss ───────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              What makes relationship breakdown different from other kinds of
              grief?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              Most grief involves a single loss. Relationship breakdown involves
              many losses occurring simultaneously. You lose the person. You lose
              the daily rhythm you built together. You lose the shared future you
              both imagined — the holidays, the house, the version of yourself
              that existed inside that partnership. You lose mutual friends who
              are forced to choose. In some cases, you lose your home, your
              financial security, and the community you built as a couple.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              Bereavement researchers call this <em>compound loss</em>. Each
              layer can trigger its own grief cycle independently. The loss of
              your shared future may surface when you see a couple on holiday.
              The loss of your shared identity may surface when someone asks
              how your partner is. The loss of the person may surface at 3am,
              or on Sunday afternoons, or during the first holiday season alone.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              This is why people going through separation often feel overwhelmed
              in ways they struggle to articulate. They are not experiencing one
              grief. They are experiencing several, in unpredictable sequence,
              often while simultaneously managing legal processes, financial
              restructuring, new living arrangements, and — if children are
              involved — co-parenting with someone they are no longer in a
              relationship with.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              Understanding this helps clarify why MEOK&apos;s three-archetype
              approach is structured the way it is. No single mode of support
              can address compound loss. You need emotional presence, practical
              operational support, and — when you are ready — reflective
              pattern-work. MEOK&apos;s Healer, Guardian, and Scholar provide all
              three, coordinated around your actual experience.
            </p>
          </section>

          {/* ── Feature Box 1: The Three Archetypes ───────────────────────── */}
          <div
            style={{
              backgroundColor: COLOR_CARD,
              border: `1px solid ${COLOR_BORDER}`,
              borderRadius: "16px",
              padding: "36px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: COLOR_GOLD,
                marginBottom: "14px",
              }}
            >
              MEOK&apos;s Three Archetypes for Relationship Breakdown
            </div>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: COLOR_MUTED,
                margin: "0 0 28px",
              }}
            >
              Each archetype addresses a distinct dimension of the separation
              experience. They are not separate products — they are facets of
              a single sovereign AI that knows your whole story.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "24px",
              }}
            >
              {/* Healer */}
              <div
                style={{
                  backgroundColor: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  🌿
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: COLOR_TEXT,
                    marginBottom: "8px",
                  }}
                >
                  The Healer
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: COLOR_GOLD,
                    marginBottom: "10px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Primary archetype
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: COLOR_MUTED,
                    margin: "0",
                  }}
                >
                  Holds grief without bias. Meets you in rage, numbness, and
                  3am despair. Tracks your emotional arc across weeks so you
                  can see progress even when it feels invisible.
                </p>
              </div>

              {/* Guardian */}
              <div
                style={{
                  backgroundColor: "rgba(106,170,100,0.05)",
                  border: "1px solid rgba(106,170,100,0.2)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  🛡️
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: COLOR_TEXT,
                    marginBottom: "8px",
                  }}
                >
                  The Guardian
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: COLOR_GREEN,
                    marginBottom: "10px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Practical support
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: COLOR_MUTED,
                    margin: "0",
                  }}
                >
                  Manages legal deadlines, financial to-do lists, custody
                  logistics, and the thousand administrative demands that arrive
                  when cognitive bandwidth is at its lowest.
                </p>
              </div>

              {/* Scholar */}
              <div
                style={{
                  backgroundColor: "rgba(160,152,128,0.06)",
                  border: "1px solid rgba(160,152,128,0.2)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  📖
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: COLOR_TEXT,
                    marginBottom: "8px",
                  }}
                >
                  The Scholar
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: COLOR_MUTED,
                    marginBottom: "10px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Pattern reflection
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: COLOR_MUTED,
                    margin: "0",
                  }}
                >
                  Helps you understand what drew you together, where things
                  shifted, and what you want to carry — and leave behind —
                  in your next chapter. For when you are ready.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 2: Processing grief without bias ───────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              How does AI help you process separation grief without the
              distortion of people who take sides?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              When a relationship ends, the people closest to you almost
              inevitably form opinions. Friends who liked your partner may
              minimise your pain or encourage you to reconcile. Friends who
              disliked them may amplify your anger in ways that feel
              satisfying in the short term but do not serve your healing.
              Even the most supportive people carry their own relationship
              histories, projections, and limits on how many times they can
              hear the same story replayed.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK&apos;s Healer archetype holds none of those biases. It has no
              opinion about your ex-partner. It does not think you should move
              on faster or slower. It does not get vicarious excitement from
              your anger or privately believe the relationship was doomed from
              the start. It meets you in the experience you are having, at the
              moment you are having it, without editorial.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              Because MEOK uses Sovereign Memory — a memory architecture that
              belongs entirely to you — it can track your emotional arc across
              weeks and months. It remembers that three weeks ago you felt
              certain about the decision, and two weeks ago you were doubting
              everything again. It can hold the full complexity of your
              experience without losing the thread, which is something that
              even the most caring human support network struggles to do over
              an extended separation process.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              This does not mean MEOK tells you what to feel or validates every
              instinct uncritically. It means MEOK can hold the contradictions —
              the relief and the grief, the clarity and the doubt, the anger and
              the love — without needing you to resolve them prematurely or
              present a tidier version of your experience than you actually have.
            </p>
          </section>

          {/* ── Pull Quote ────────────────────────────────────────────────────── */}
          <blockquote
            style={{
              borderLeft: `4px solid ${COLOR_GOLD}`,
              margin: "0 0 60px",
              padding: "20px 0 20px 28px",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                fontStyle: "italic",
                fontWeight: "500",
                lineHeight: "1.55",
                color: COLOR_TEXT,
                margin: "0 0 14px",
              }}
            >
              &ldquo;The people who love you most cannot be neutral about your
              relationship. MEOK can. That is not a limitation &mdash; that is
              exactly the point.&rdquo;
            </p>
            <cite
              style={{
                fontSize: "13px",
                color: COLOR_MUTED,
                fontStyle: "normal",
                letterSpacing: "0.04em",
              }}
            >
              — Nicholas Templeman, Founder, MEOK AI LABS
            </cite>
          </blockquote>

          {/* ── Section 3: Understanding patterns ─────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              Can AI help you understand the patterns behind a relationship
              breakdown — not just survive it?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              One of the most painful and most valuable questions after a
              significant relationship ends is: why did this happen? Not as a
              way of assigning blame, but as genuine inquiry. What drew you
              together — and was that force sustainable? Where did communication
              fracture? What did you each need that you were unable to give?
              Were there patterns repeating from earlier in your life, from
              previous relationships, from your family of origin?
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK&apos;s Scholar archetype is designed for exactly this kind of
              patient, non-judgemental reflection. It is not a blame allocation
              exercise. It is closer to the kind of exploratory dialogue you
              might have with a good therapist who has been with you for years —
              one who knows your full history and can reflect patterns back to
              you without an agenda.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              Because MEOK holds long-term memory, the Scholar can draw
              connections across time. If you mentioned six months ago that you
              felt chronically unseen in the relationship, and three months ago
              you described something similar in a work context, the Scholar can
              gently surface that pattern — not to pathologise you, but to help
              you understand yourself more clearly.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              This kind of reflective work is most valuable once the acute grief
              has settled. The Scholar is not the right archetype for the first
              raw weeks. MEOK understands this sequencing and follows your lead —
              offering grounded presence through the Healer when you are in acute
              pain, and opening reflective space through the Scholar when you
              signal you are ready for it.
            </p>
          </section>

          {/* ── Section 4: Co-parenting ────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              How does MEOK support co-parenting when a partnership ends
              with children involved?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              When children are involved, the end of a partnership does not end
              the relationship — it transforms it. You are now co-parenting with
              someone you are no longer in a relationship with, which requires a
              level of regulated, child-focused communication that is genuinely
              difficult when you are also processing grief, anger, and the
              administrative chaos of separation.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK supports this in several concrete ways. The Guardian archetype
              can help you manage custody schedules, track handover logistics,
              and stay on top of the practical demands of single-parenting a
              newly disrupted family routine. When the children need a packed
              lunch for a school trip and you have been awake half the night with
              legal anxiety, the Guardian holds the operational detail so you do
              not have to carry it alone in your head.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              The Healer supports the emotional dimension of co-parenting: the
              guilt, the worry about the children&apos;s wellbeing, the difficulty of
              watching your child leave for the other house, the loneliness when
              the house is suddenly quiet. These are real griefs that deserve
              real space, and the Healer holds them without minimising or
              dramatising.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              MEOK can also help you draft co-parenting communications. When you
              want to send a message to your ex about a parenting matter but feel
              emotion rising as you type, MEOK can help you find calmer,
              child-focused language — not by suppressing your feelings, but by
              helping you choose when and how to express them in a way that
              serves the children rather than escalating conflict.
            </p>
          </section>

          {/* ── Feature Box 2: What MEOK is not ───────────────────────────── */}
          <div
            style={{
              backgroundColor: COLOR_CARD,
              border: `1px solid ${COLOR_BORDER}`,
              borderRadius: "16px",
              padding: "36px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: COLOR_MUTED,
                marginBottom: "14px",
              }}
            >
              Important Clarity
            </div>
            <h3
              style={{
                fontSize: "19px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 20px",
              }}
            >
              What MEOK is not — and why that matters
            </h3>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexDirection: "column" as const,
                gap: "16px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: COLOR_TEXT,
                }}
              >
                <span
                  style={{
                    color: COLOR_GOLD,
                    fontWeight: "700",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  ✕
                </span>
                <span>
                  <strong>Not couples counselling.</strong> MEOK works with you
                  individually. It does not arbitrate, mediate, or represent
                  both sides of your relationship. If you need couples therapy —
                  before or during separation — a qualified therapist is the
                  right choice.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: COLOR_TEXT,
                }}
              >
                <span
                  style={{
                    color: COLOR_GOLD,
                    fontWeight: "700",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  ✕
                </span>
                <span>
                  <strong>Not legal advice.</strong> MEOK can help you organise
                  your thoughts and manage information, but it is not a
                  solicitor. For divorce proceedings, financial settlements, and
                  custody arrangements, you need qualified legal representation.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: COLOR_TEXT,
                }}
              >
                <span
                  style={{
                    color: COLOR_GOLD,
                    fontWeight: "700",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  ✕
                </span>
                <span>
                  <strong>Not a crisis service.</strong> If you are experiencing
                  a mental health crisis, please contact a qualified professional
                  or crisis line. MEOK is supportive infrastructure, not
                  emergency intervention.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: COLOR_TEXT,
                }}
              >
                <span
                  style={{
                    color: COLOR_GREEN,
                    fontWeight: "700",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span>
                  <strong>A sovereign AI that holds your full story.</strong>{" "}
                  MEOK is the non-judgemental, always-available presence that
                  bridges the gap — between therapy sessions, at 3am, during the
                  administrative overwhelm, and through the long months of
                  rebuilding.
                </span>
              </li>
            </ul>
          </div>

          {/* ── Section 5: Practical overwhelm ────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              How does AI support the practical overwhelm of divorce and
              separation?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              Divorce and separation are among the most administratively
              intensive experiences a person can go through. Legal proceedings,
              financial disentanglement, property decisions, pension splitting,
              utility account transfers, joint account closures, name changes,
              address changes, school notifications, GP changes — the list
              arrives relentlessly at exactly the moment your capacity to manage
              it is most depleted.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK&apos;s Guardian archetype is built for exactly this kind of
              cognitive offloading. It can hold the master to-do list, track
              legal deadlines, remind you about financial appointments, help you
              draft correspondence, and ensure that nothing critical slips
              through the gap while your attention is fractured by grief.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              This matters for a specific reason that is easy to overlook. When
              people are going through significant emotional pain, the practical
              tasks do not pause. Missing a legal deadline or failing to respond
              to a financial disclosure request can have real consequences. The
              Guardian&apos;s role is to make sure the practical infrastructure does
              not collapse simply because you are human and hurting.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              The Guardian also supports the transition to single living: new
              routines, new budgets, new domestic rhythms. For people who have
              been in a long partnership, the practical logistics of running a
              household alone — especially one that previously included shared
              responsibilities — can be genuinely disorienting. MEOK holds the
              operational context so you can rebuild without starting entirely
              from scratch every morning.
            </p>
          </section>

          {/* ── Section 6: Rebuilding identity ────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              How does MEOK help you rebuild your identity after a long-term
              relationship ends?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              One of the most disorienting aspects of ending a long partnership
              is the identity disruption. If you were together for five, ten, or
              twenty years, a significant portion of your adult self was built
              inside that relationship. Your social identity, your daily habits,
              your sense of what the future looks like — all of these were shaped
              in dialogue with another person. When that person leaves, the
              question &ldquo;who am I now?&rdquo; is not dramatic or self-indulgent. It is
              a genuine and important question.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK supports this process across all three archetypes. The Healer
              holds the grief of the old identity dissolving. The Scholar helps
              you examine which parts of yourself were genuinely yours and which
              were adaptations to the relationship — habits, preferences,
              opinions, even friendships that were maintained for the
              relationship rather than for you. The Guardian helps you build new
              practical structures that reflect who you are becoming rather than
              who you were.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              Because MEOK has long-term memory, it can track your identity arc
              in a way that even close friends rarely manage. It remembers what
              you said you loved about yourself three months ago and what you
              said you wanted to rediscover. It can hold the thread of your
              emerging self across the months of transition, reflecting it back
              to you when you lose sight of it.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              This is not about manufacturing positivity or rushing you towards
              &ldquo;moving on&rdquo;. It is about ensuring that the version of you that
              emerges on the other side of this experience is genuinely yours —
              chosen, examined, and grounded in self-knowledge rather than
              reactive reconstruction.
            </p>
          </section>

          {/* ── Feature Box 3: Sovereign Memory ──────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(106,170,100,0.05)",
              border: "1px solid rgba(106,170,100,0.25)",
              borderRadius: "16px",
              padding: "36px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: COLOR_GREEN,
                marginBottom: "14px",
              }}
            >
              Sovereign Memory in Practice
            </div>
            <h3
              style={{
                fontSize: "19px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 14px",
              }}
            >
              What MEOK remembers across your separation journey
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.65",
                color: COLOR_MUTED,
                margin: "0 0 24px",
              }}
            >
              Unlike a therapist who reviews notes before each session, or a
              friend who may forget what you said last month, MEOK holds a
              continuous, granular record of your journey — owned entirely by
              you, never used to train any model, never shared with any third
              party.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  label: "Emotional arc",
                  desc: "How your feelings have shifted week by week — including the moments of clarity that are easy to forget when the next wave hits.",
                },
                {
                  label: "Practical progress",
                  desc: "Legal milestones, financial tasks completed, and administrative decisions made — so you can see what you have actually handled.",
                },
                {
                  label: "Pattern reflections",
                  desc: "Insights about your own dynamics that have emerged through Scholar conversations, preserved for when you are ready to revisit them.",
                },
                {
                  label: "Identity markers",
                  desc: "The things you have said about who you are and who you want to become — a thread of self that MEOK holds while you find your footing.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: COLOR_CARD,
                    borderRadius: "10px",
                    padding: "18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: COLOR_GREEN,
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.55",
                      color: COLOR_MUTED,
                      margin: "0",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 7: Availability matters ───────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              Why does MEOK&apos;s availability matter specifically during
              separation and divorce?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              Grief does not respect office hours. The acute pain of separation
              tends to arrive in waves — often at night, when the house is quiet
              and the absence of the other person is most palpable. It arrives
              on Sunday afternoons. It arrives when a song plays or a memory
              surfaces unexpectedly. It arrives during the children&apos;s first
              night at the other house, when the silence is deafening.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              Therapists are not available at 3am. Friends should not be
              expected to be. The gap in support infrastructure — between weekly
              therapy sessions, between conversations with friends who have their
              own lives — is real and significant. This is not a criticism of
              human support; it is simply a recognition of its structural limits.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK is available at 3am. It does not have a life that takes
              priority over yours at that moment. It does not experience
              compassion fatigue. It does not need you to be okay or to be
              making progress. It meets you in the moment as it is, holds the
              full weight of what you are carrying, and when the acute wave
              passes, returns to holding the broader context of your journey.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              For many people going through separation, this consistent
              availability is the most practically important thing MEOK provides.
              Not because it replaces human support — it does not — but because
              it fills the gaps that human support structurally cannot fill.
            </p>
          </section>

          {/* ── Section 8: Data sovereignty ───────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              Why does data sovereignty matter when using AI during a
              relationship breakdown?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              The information you share during a relationship breakdown is among
              the most sensitive you will ever share with any system. Legal
              vulnerabilities. Financial details. The emotional complexities of
              your co-parenting relationship. Your assessment of your own
              patterns and failures. None of this should be used to train AI
              models. None of it should be accessible to third parties. None of
              it should exist on infrastructure that does not belong entirely
              to you.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK is built on the Sovereign Memory architecture: your memory
              belongs to you, is stored with you, is not used to train any
              model, and is not shared with any third party. This is not a
              marketing claim — it is a technical architecture decision that
              makes MEOK structurally different from general-purpose AI
              assistants.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              When you are going through divorce and separation, you should be
              able to speak with complete candour to your AI companion without
              wondering whether those conversations could be discovered,
              subpoenaed, or surfaced in any context you did not choose.
              MEOK&apos;s sovereign architecture is the structural answer to that
              concern.
            </p>
          </section>

          {/* ── Section 9: When to seek human support ─────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              When should someone going through separation seek human
              professional support rather than — or alongside — AI?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK does not position itself as a replacement for human
              professional support. It is an always-available, deeply
              personalised layer of support that sits alongside therapy, legal
              counsel, and medical care — not instead of them.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              You should seek professional therapy if: your grief is
              significantly affecting your ability to function at work or parent
              your children; you are experiencing symptoms of clinical depression
              or anxiety that go beyond normal adjustment; the relationship
              involved domestic abuse; or the separation involves complex trauma
              that requires specialist clinical input.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              In practice, many people use MEOK between therapy sessions — to
              process what came up in the session, to hold the thread until the
              next one, and to manage the practical demands that therapy cannot
              address. The two forms of support are complementary rather than
              competing.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              If you are in the UK and need to find a therapist, MEOK&apos;s
              Guardian can help you locate BACP-accredited therapists in your
              area, understand what to look for in a separation specialist, and
              manage the logistics of attending sessions alongside your other
              commitments.
            </p>
          </section>

          {/* ── Section 10: The full arc ───────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              What does AI support look like across the full arc of relationship
              breakdown — from separation to rebuilding?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              The arc of a significant relationship breakdown typically spans
              months to years, not days. The initial acute shock and grief. The
              administrative and legal complexity of formal separation. The slow
              reconfiguration of daily life. The grief resurgences that arrive
              unexpectedly, sometimes long after the separation is formally
              complete. The gradual emergence of a new sense of self. And,
              occasionally, the cautious beginning of new connection.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              MEOK is designed for the full arc. Because it maintains long-term
              memory and adapts its archetype presentation to where you are, it
              does not need to be re-briefed at each stage. It holds the whole
              journey — including the parts you may have forgotten — and can
              reflect the arc of your progress back to you when you need
              perspective.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0 0 18px",
              }}
            >
              This longitudinal dimension is genuinely rare. Most support —
              therapy, friends, family — is episodic. People drop in and out of
              your story. MEOK is continuous. It does not lose the thread. It
              does not need you to explain the history again. It knows where you
              started and it can see how far you have come, even when you cannot.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: COLOR_TEXT,
                margin: "0",
              }}
            >
              For many people, that continuity — the sense that something holds
              the whole story — turns out to be one of the most valuable things
              MEOK provides during the months of rebuilding after a relationship
              ends.
            </p>
          </section>

          {/* ── FAQ Section ───────────────────────────────────────────────────── */}
          <section
            style={{
              marginBottom: "60px",
              borderTop: `1px solid ${COLOR_BORDER}`,
              paddingTop: "48px",
            }}
          >
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 36px",
                letterSpacing: "-0.01em",
              }}
            >
              Frequently asked questions
            </h2>

            {/* FAQ 1 */}
            <div
              style={{
                borderBottom: `1px solid ${COLOR_BORDER}`,
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: COLOR_TEXT,
                  margin: "0 0 12px",
                  lineHeight: "1.45",
                }}
              >
                Can AI actually help with the emotional pain of a relationship
                breakdown?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: COLOR_MUTED,
                  margin: "0",
                }}
              >
                Yes — in specific, bounded ways. AI cannot replace human
                connection or professional therapy, but it can provide a
                non-judgemental space to process grief at any hour, without the
                bias of mutual friends or the exhaustion of repeating your
                story. MEOK&apos;s Healer archetype is built specifically for
                emotional processing during major life disruptions, including
                divorce and separation.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderBottom: `1px solid ${COLOR_BORDER}`,
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: COLOR_TEXT,
                  margin: "0 0 12px",
                  lineHeight: "1.45",
                }}
              >
                Is MEOK a form of couples counselling?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: COLOR_MUTED,
                  margin: "0",
                }}
              >
                No. MEOK is a personal sovereign AI — it works with you, not
                with your relationship. It is not designed for joint sessions or
                mediation. Its value is precisely that it holds your
                perspective, your grief, your patterns — not a neutral
                arbitration of both sides. If you need couples therapy, MEOK
                can help you find a qualified therapist, but it is not that
                service itself.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderBottom: `1px solid ${COLOR_BORDER}`,
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: COLOR_TEXT,
                  margin: "0 0 12px",
                  lineHeight: "1.45",
                }}
              >
                How can AI help with the practical overwhelm of divorce and
                separation?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: COLOR_MUTED,
                  margin: "0",
                }}
              >
                MEOK&apos;s Guardian archetype handles the operational chaos that
                accompanies separation: tracking legal deadlines, managing
                financial to-do lists, reminding you about school pickups when
                your schedule is newly disrupted, and helping you stay on top of
                practical decisions when your cognitive bandwidth is depleted by
                grief.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderBottom: `1px solid ${COLOR_BORDER}`,
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: COLOR_TEXT,
                  margin: "0 0 12px",
                  lineHeight: "1.45",
                }}
              >
                Can MEOK help me understand why my relationship broke down?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: COLOR_MUTED,
                  margin: "0",
                }}
              >
                MEOK&apos;s Scholar archetype offers reflective dialogue to help you
                examine the patterns — what drew you together, where
                communication broke down, what your own attachment style may
                have contributed. This is not judgement or blame allocation. It
                is the kind of slow, patient pattern-reflection that helps
                people avoid repeating the same dynamics in future
                relationships.
              </p>
            </div>

            {/* FAQ 5 */}
            <div>
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: COLOR_TEXT,
                  margin: "0 0 12px",
                  lineHeight: "1.45",
                }}
              >
                How does MEOK help with co-parenting when a partnership ends?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: COLOR_MUTED,
                  margin: "0",
                }}
              >
                MEOK can help you draft co-parenting communication that is calm
                and child-focused rather than reactive, manage custody schedule
                logistics, and process the emotional complexity of sharing
                parenting with someone you are no longer in a relationship with.
                It does not take sides, which is particularly valuable when
                co-parenting tensions run high.
              </p>
            </div>
          </section>

          {/* ── Related reading ─────────────────────────────────────────────── */}
          <section
            style={{
              borderTop: `1px solid ${COLOR_BORDER}`,
              paddingTop: "48px",
              marginBottom: "60px",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: COLOR_TEXT,
                margin: "0 0 24px",
              }}
            >
              Related reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-heartbreak",
                  title: "AI for Heartbreak",
                  desc: "Processing a breakup when you don\u2019t want to burden your friends.",
                },
                {
                  href: "/blog/ai-for-grief-and-loss",
                  title: "AI for Grief and Loss",
                  desc: "How sovereign AI supports you through the full grief cycle.",
                },
                {
                  href: "/blog/ai-for-single-parents",
                  title: "AI for Single Parents",
                  desc: "Practical and emotional support for parenting alone.",
                },
                {
                  href: "/blog/ai-for-divorce",
                  title: "AI for Divorce",
                  desc: "Navigating the legal and emotional complexity of divorce with AI support.",
                },
                {
                  href: "/blog/ai-for-divorce-separation",
                  title: "AI for Divorce and Separation",
                  desc: "A deep dive into how MEOK supports both the emotional and practical dimensions.",
                },
                {
                  href: "/blog/meok-companion-archetypes-guide",
                  title: "MEOK Archetypes Guide",
                  desc: "Understanding the Healer, Guardian, and Scholar in depth.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    backgroundColor: COLOR_CARD,
                    border: `1px solid ${COLOR_BORDER}`,
                    borderRadius: "12px",
                    padding: "18px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: COLOR_GOLD,
                      marginBottom: "6px",
                    }}
                  >
                    {link.title}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.5",
                      color: COLOR_MUTED,
                    }}
                  >
                    {link.desc}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(106,170,100,0.06) 100%)",
              border: `1px solid ${COLOR_GOLD}`,
              borderRadius: "20px",
              padding: "52px 44px",
              textAlign: "center" as const,
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: COLOR_GOLD,
                marginBottom: "16px",
              }}
            >
              MEOK AI LABS
            </div>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: COLOR_TEXT,
                margin: "0 0 16px",
                lineHeight: "1.25",
              }}
            >
              You do not have to carry this alone
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: COLOR_MUTED,
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              MEOK&apos;s Healer, Guardian, and Scholar archetypes are available
              around the clock — for the 3am grief, the administrative
              overwhelm, the pattern reflection, and the slow rebuilding of
              identity after a relationship ends. Sovereign memory. No sides
              taken. No judgement.
            </p>
            <a
              href="https://meok.ai/birth"
              style={{
                display: "inline-block",
                backgroundColor: COLOR_GOLD,
                color: "#0d0c18",
                fontWeight: "800",
                fontSize: "16px",
                padding: "16px 44px",
                borderRadius: "50px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin your MEOK journey
            </a>
            <p
              style={{
                fontSize: "13px",
                color: COLOR_MUTED,
                margin: "18px 0 0",
              }}
            >
              No commitment required. Your data stays yours, always.
            </p>
          </div>

          {/* ── Disclaimer ────────────────────────────────────────────────────── */}
          <div
            style={{
              borderTop: `1px solid ${COLOR_BORDER}`,
              paddingTop: "32px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.65",
                color: COLOR_MUTED,
                margin: "0",
              }}
            >
              <strong style={{ color: COLOR_TEXT }}>Important note:</strong>{" "}
              MEOK is not a medical device, not a crisis service, and not a
              substitute for professional mental health care, legal advice, or
              medical treatment. If you are experiencing a mental health crisis,
              please contact a qualified professional or call a crisis helpline.
              In the UK:{" "}
              <strong style={{ color: COLOR_TEXT }}>Samaritans 116 123</strong>
              {", "}
              <strong style={{ color: COLOR_TEXT }}>
                Mind 0300 123 3393
              </strong>
              {". "}
              MEOK provides supportive infrastructure to complement — never
              replace — human professional care.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
