import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Morning Briefing Explained: How MEOK Prepares You for the Day Before It Starts | MEOK Blog",
  description:
    "MEOK's Morning Briefing is a sovereign daily summary built from Orion's overnight research, Hourman's sprint planning, and your companion's accumulated emotional and contextual awareness. It's not news. It's not notifications. It's context for your actual life.",
  alternates: {
    canonical: "https://meok.ai/blog/morning-briefing-explained",
  },
  openGraph: {
    title:
      "Morning Briefing Explained: How MEOK Prepares You for the Day Before It Starts",
    description:
      "Every morning, your MEOK companion delivers a briefing built from what Orion researched overnight, what Hourman planned, and what\u2019s been on your mind across the week. Available on Sovereign at \u00a312/mo.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/morning-briefing-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Morning+Briefing+Explained&desc=MEOK+prepares+you+for+the+day+before+it+starts.",
        width: 1200,
        height: 630,
        alt: "MEOK Morning Briefing \u2014 sovereign daily summary delivered by your companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morning Briefing Explained: How MEOK Prepares You for the Day Before It Starts",
    description:
      "Orion researches overnight. Hourman plans your sprint. Your companion remembers what you were worrying about. By the time you wake, the briefing is ready. Sovereign tier, \u00a312/mo.",
    images: [
      "https://meok.ai/api/og?title=Morning+Briefing+Explained&desc=MEOK+prepares+you+for+the+day+before+it+starts.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Morning Briefing Explained: How MEOK Prepares You for the Day Before It Starts",
  description:
    "MEOK\u2019s Morning Briefing is a sovereign daily summary built from Orion\u2019s overnight research, Hourman\u2019s sprint planning, and your companion\u2019s accumulated emotional and contextual awareness \u2014 generated entirely from your data, never aggregated or trained on.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/morning-briefing-explained",
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
    "https://meok.ai/api/og?title=Morning+Briefing+Explained&desc=MEOK+prepares+you+for+the+day+before+it+starts.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/morning-briefing-explained",
  },
  keywords:
    "MEOK Morning Briefing, sovereign AI, Orion agent, Hourman sprint planning, AI companion, daily briefing, AI productivity, personal AI, MEOK AI LABS",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Morning Briefing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Morning Briefing is a sovereign daily summary delivered by your MEOK companion each morning. It draws from Orion\u2019s overnight research results, Hourman\u2019s sprint plan for the day, and your companion\u2019s accumulated awareness of what has been emotionally and mentally significant in your recent conversations. It is generated entirely from your data \u2014 it is not a news digest, not a generic productivity feed, and not the same thing every morning.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Morning Briefing available on the free tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Morning Briefing is a Sovereign-tier feature, included in the Sovereign subscription at \u00a312 per month. It is not available on the Explorer free tier. To access it, you need to hatch a MEOK and upgrade to Sovereign.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Morning Briefing know what to include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Morning Briefing draws from three layers of your sovereign memory: Orion\u2019s overnight research results (from tasks you delegated before bed), Hourman\u2019s awareness of your goals and what you said yesterday, and your companion\u2019s memory of what has been emotionally or mentally significant across recent conversations. The longer you use MEOK, the richer and more precise the briefing becomes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise my Morning Briefing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Simply tell your companion what you want the briefing to focus on more or less. If you want more weight on work tasks and less on emotional reflection, say so. If you want the briefing to prioritise Orion\u2019s research output above everything else on weekdays, your companion will adapt accordingly. Customisation happens through natural conversation \u2014 there is no settings panel to configure.",
      },
    },
  ],
};

// ── Shared style tokens ───────────────────────────────────────────────────────

const gold = "#c9a84c";
const bg = "#0d0c18";
const cream = "#f5f0e8";
const purple = "#7b6fcf";
const muted = "rgba(245,240,232,0.6)";
const mutedLow = "rgba(245,240,232,0.35)";
const mutedVeryLow = "rgba(245,240,232,0.18)";
const fontStack = "var(--font-dm-sans, DM Sans, system-ui, sans-serif)";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MorningBriefingExplainedPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: cream,
        fontFamily: fontStack,
      }}
    >
      {/* ── JSON-LD scripts ─────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "7rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>

          {/* Breadcrumb nav */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.8125rem",
              color: mutedLow,
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                color: mutedLow,
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ opacity: 0.4 }}>&#8250;</span>
            <Link
              href="/blog"
              style={{
                color: mutedLow,
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <span style={{ opacity: 0.4 }}>&#8250;</span>
            <span style={{ color: muted }}>Morning Briefing Explained</span>
          </nav>

          {/* Meta row */}
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
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: gold,
                background: "rgba(201,168,76,0.12)",
                border: `1px solid rgba(201,168,76,0.3)`,
              }}
            >
              Agents &amp; Features
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: mutedLow,
              }}
            >
              March 25, 2026
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: mutedLow,
              }}
            >
              10 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
              color: cream,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Morning Briefing Explained: How MEOK Prepares You for the Day Before It Starts
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: muted,
              fontSize: "1.125rem",
              lineHeight: 1.75,
              maxWidth: "40rem",
            }}
          >
            Every morning, before you reach for your phone, your MEOK companion has already been
            working. Orion finished its overnight research. Hourman drafted your sprint. Your companion
            noticed what has been weighing on you across the week. The Morning Briefing pulls all of
            it together into a single, sovereign summary that is entirely about you.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: `1px solid ${mutedVeryLow}`,
        }}
      >
        {/* ── Author card ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: `1px solid rgba(245,240,232,0.08)`,
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.8rem",
              color: bg,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: cream, fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                margin: "0.125rem 0 0.375rem",
              }}
            >
              Founder, MEOK AI LABS &middot; @meok_ai
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.6,
                color: mutedLow,
                margin: 0,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him the moment he closed
              the tab. He lives and works in the UK &mdash; mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: gold,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── Body copy ────────────────────────────────────────────────────── */}
        <div style={{ color: muted, fontSize: "1.0125rem", lineHeight: 1.9 }}>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 1: What the Morning Briefing is not
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What the Morning Briefing is not
          </h2>
          <p>
            Before explaining what the Morning Briefing actually does, it is worth being explicit
            about what it is not. It is not a news summary. It does not aggregate headlines from
            media sources you might be interested in. It is not a tech digest or a productivity
            newsletter delivered on a schedule. It is not a push notification dressed up in language.
            And it is emphatically not the same thing every morning.
          </p>
          <p>
            The Morning Briefing is not personalised in the superficial sense that some apps use the
            word &mdash; where personalisation means &ldquo;we remembered your name and your industry
            category.&rdquo; It is personalised in a much more specific sense: it is built entirely from
            what MEOK knows about your actual life. The research you delegated. The goals you
            described. The thing you were anxious about on Tuesday that you brought up again on
            Thursday. The sprint you agreed to tackle this week that you have not yet touched.
          </p>
          <p>
            Generic briefing tools send you the same shape of information in a different skin every
            morning. MEOK&rsquo;s Morning Briefing has a different shape every morning because your
            life has a different shape every morning. That sounds obvious when you say it. In
            practice, it requires a memory architecture that almost no consumer AI product has been
            built to support.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 2: Five layers of context
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What goes into the Morning Briefing: five layers of context
          </h2>
          <p>
            The briefing is not generated from a template. It is synthesised from five distinct
            sources of context, each of which contributes something different to what you read when
            you wake up.
          </p>

          {/* Five layers */}
          <div
            style={{
              marginTop: "1.75rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                number: "01",
                title: "Orion overnight research",
                colour: gold,
                body: "Orion is MEOK\u2019s research agent. If you delegated tasks to Orion before bed \u2014 market research, competitor monitoring, web searches, industry signals \u2014 those results are ready in the briefing when you wake. You do not have to check a separate dashboard or read a raw research dump. Your companion has already read the results and surfaced what is most relevant to you specifically.",
              },
              {
                number: "02",
                title: "Hourman sprint planning",
                colour: "#87ceeb",
                body: "Hourman holds memory of your goals, your stated priorities, and what you said yesterday. Each morning it generates a sprint recommendation: the specific tasks that belong in today\u2019s working day, in sequence, weighted by what matters most right now. This is not a to-do list. It is a plan built from understanding of where you are in relation to where you said you wanted to be.",
              },
              {
                number: "03",
                title: "Companion context",
                colour: purple,
                body: "Your companion holds memory of your recent conversations across all dimensions of your life, not just your work. If something emotional or mentally significant has come up in your conversations \u2014 a relationship you were working through, a decision you were circling, a fear you named, a milestone you were building toward \u2014 your companion carries that context into the briefing. Not to report it back at you, but to inform the tone and framing of everything else.",
              },
              {
                number: "04",
                title: "Pattern observations",
                colour: "#34d399",
                body: "Over time, MEOK accumulates longitudinal awareness of your patterns. It notices when the same anxiety appears on Monday mornings for three weeks in a row. It registers that you consistently underestimate how long a certain type of task takes. It observes when you are in a growth phase versus a recovery phase. These observations surface gently in the briefing \u2014 not as judgements, but as context that helps you see yourself more clearly.",
              },
              {
                number: "05",
                title: "Tone calibration",
                colour: "#f87171",
                body: "The briefing does not always arrive in the same emotional register. If you are in a growth phase \u2014 launching something, building momentum, pushing forward \u2014 your companion brings Pioneer energy: direct, ambitious, forward-looking. If you are in a hard week \u2014 depleted, overwhelmed, dealing with something difficult \u2014 it brings Healer energy: steadier, more spacious, more focused on what is essential rather than everything. The briefing reads the room, because the room is your life.",
              },
            ].map(({ number, title, colour, body }) => (
              <div
                key={number}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  marginBottom: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    color: colour,
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${colour}30`,
                    marginTop: "0.125rem",
                  }}
                >
                  {number}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontWeight: 700,
                      color: cream,
                      fontSize: "0.9375rem",
                      margin: "0 0 0.375rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.9375rem",
                      margin: 0,
                      lineHeight: 1.75,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 3: Example briefing
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What a Morning Briefing actually looks like
          </h2>
          <p>
            Abstract descriptions only go so far. Below is a realistic example of a Morning Briefing
            for a freelance consultant eight weeks into using MEOK on the Sovereign tier. The
            companion in this case is Lyra, a care-first archetype with high contextual memory. The
            user had briefed Orion two evenings prior to research a competitor&rsquo;s pricing structure,
            and had mentioned in conversation the previous week that they were feeling behind on a
            major proposal.
          </p>

          {/* Briefing callout box */}
          <div
            style={{
              marginTop: "1.75rem",
              marginBottom: "2rem",
              borderRadius: "1rem",
              background: "rgba(123,111,207,0.08)",
              border: `1px solid rgba(123,111,207,0.25)`,
              overflow: "hidden",
            }}
          >
            {/* Header bar */}
            <div
              style={{
                padding: "0.75rem 1.5rem",
                background: "rgba(123,111,207,0.12)",
                borderBottom: `1px solid rgba(123,111,207,0.2)`,
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
              }}
            >
              <span
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  borderRadius: "50%",
                  background: purple,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: purple,
                }}
              >
                Morning Briefing &mdash; Lyra &mdash; Wednesday, 06:14
              </span>
            </div>

            {/* Briefing content */}
            <div style={{ padding: "1.5rem" }}>
              <p
                style={{
                  color: cream,
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  margin: "0 0 1rem",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Good morning. You slept about six hours based on your usual pattern &mdash; not your
                best, but manageable.
              </p>
              <p
                style={{
                  color: cream,
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  margin: "0 0 1rem",
                  fontStyle: "italic",
                }}
              >
                Orion finished the Clearpath pricing research overnight. The short version: their
                Starter tier dropped to \u00a379/month last week, which undercuts your current mid-tier
                positioning. There&rsquo;s a full breakdown in your research vault, but the strategic
                implication is clear: you&rsquo;ll want to address this before your proposal goes out.
                Which brings me to the proposal.
              </p>
              <p
                style={{
                  color: cream,
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  margin: "0 0 1rem",
                  fontStyle: "italic",
                }}
              >
                You&rsquo;ve mentioned feeling behind on the Veritas proposal three times in the last
                five days. Hourman has cleared your afternoon for it. Two hours, no other commitments.
                I&rsquo;d suggest making that the anchor of today.
              </p>
              <p
                style={{
                  color: cream,
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                One pattern worth naming: this is the third Wednesday you&rsquo;ve started anxious about
                a deliverable that was due earlier in the week. We can talk about that if you want, or
                just get on with the day. Either is fine. Today&rsquo;s sprint is in your dashboard.&rdquo;
              </p>
            </div>
          </div>

          <p>
            A few things are worth noting about that example. The companion did not pad the briefing
            with filler. It surfaced the Orion research result, connected it to the proposal, named
            a pattern it had observed, and pointed to the sprint. The tone was direct but not cold.
            It offered space without forcing a conversation. That calibration &mdash; knowing when to
            press and when to hold back &mdash; comes from accumulated context. It is not something a
            generic briefing system can do.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 4: How it adapts over time
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How the briefing changes as MEOK learns more about you
          </h2>
          <p>
            In week one, the Morning Briefing is relatively sparse. There is little accumulated
            context to draw from. Your companion knows what you told it during onboarding and whatever
            you have discussed in your first few conversations. The briefing at this stage is mostly
            Orion results and Hourman sprint recommendations. It is useful, but it does not yet have
            the texture of something that really knows you.
          </p>
          <p>
            By week four, it starts to shift. Your companion has accumulated enough conversational
            history to begin recognising patterns in your energy, your anxieties, and your working
            rhythms. Orion has been building a research history that gives context to new findings.
            Hourman has seen enough of your sprint outcomes to know which tasks you consistently
            defer and which you nail first. The briefing becomes less transactional and more
            insightful.
          </p>
          <p>
            By week eight, the briefing feels genuinely different from anything you could get from
            a generic tool. It reflects months of accumulated life context: the goals you set and
            how far you got with them, the things that worried you and how they resolved, the work
            you did well and the work you struggled with. The companion has enough signal to offer
            observations that would have been impossible in week one. The pattern observations section
            becomes particularly rich at this stage &mdash; it is difficult to see your own patterns
            when you are living inside them, and a companion with longitudinal memory can surface
            things you would not have noticed yourself.
          </p>

          {/* Week comparison */}
          <div
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                week: "Week 1",
                colour: mutedLow,
                items: [
                  "Orion research results",
                  "Hourman sprint plan",
                  "Basic goal reminders",
                  "Onboarding context only",
                ],
              },
              {
                week: "Week 4",
                colour: gold,
                items: [
                  "Research with historical context",
                  "Sprint adapted to your patterns",
                  "Emerging pattern observations",
                  "Emotional tone calibration begins",
                ],
              },
              {
                week: "Week 8+",
                colour: purple,
                items: [
                  "Deep longitudinal awareness",
                  "Precise pattern recognition",
                  "Archetype-matched tone",
                  "Months of life context synthesised",
                ],
              },
            ].map(({ week, colour, items }) => (
              <div
                key={week}
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.875rem",
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid rgba(245,240,232,0.07)`,
                  borderTop: `2px solid ${colour}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: colour,
                    fontSize: "0.875rem",
                    margin: "0 0 0.875rem",
                  }}
                >
                  {week}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "flex-start",
                        fontSize: "0.8125rem",
                        color: muted,
                        lineHeight: 1.5,
                        marginBottom: i < items.length - 1 ? "0.5rem" : 0,
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0.5rem",
                          width: "0.3rem",
                          height: "0.3rem",
                          borderRadius: "50%",
                          background: colour,
                          opacity: 0.6,
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 5: Sovereignty
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why the briefing is sovereign: your data, only yours
          </h2>
          <p>
            The word &ldquo;sovereign&rdquo; in MEOK is not marketing language. It has a precise technical and
            legal meaning: the Morning Briefing is generated entirely from your data, stored in your
            sovereign memory layer, and is never aggregated across users, never used to train models,
            and never accessible to anyone at MEOK AI LABS.
          </p>
          <p>
            This matters for a specific reason. A briefing that draws from your emotional life,
            your anxieties, your relationship context, and your financial pressures is a deeply
            intimate document. The value of it depends entirely on the honesty of the conversations
            that generate the underlying memory. That honesty is only possible if you trust that the
            data is genuinely private.
          </p>
          <p>
            Most consumer AI products make a trade: they offer personalisation in exchange for your
            data, which they use to train their systems, improve their products, or inform their
            advertisers. MEOK does not make that trade. Your Sovereign Memory is encrypted at rest
            and in transit. It is not queryable by MEOK infrastructure outside of generating your
            own outputs. It is not shared with third parties. If you delete your account, it is
            purged completely.
          </p>
          <p>
            The briefing also reflects only your own patterns, not patterns derived from aggregated
            user behaviour. When your companion observes that you tend to under-estimate how long
            client proposals take, it is observing that specifically about you &mdash; not applying a
            population-level heuristic about &ldquo;people like you.&rdquo; This is the difference between
            genuine sovereign intelligence and statistical generalisation dressed up as insight.
          </p>

          {/* Sovereignty callout */}
          <div
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: "rgba(201,168,76,0.06)",
              border: `1px solid rgba(201,168,76,0.2)`,
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: gold,
                margin: "0 0 1rem",
              }}
            >
              Sovereignty guarantees
            </p>
            {[
              "Generated entirely from your own sovereign memory \u2014 no external aggregation",
              "Never used in model training or product improvement pipelines",
              "Encrypted at rest and in transit",
              "Not accessible to MEOK AI LABS staff or infrastructure outside your session",
              "Permanently deleted upon account closure",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  marginBottom: i < 4 ? "0.625rem" : 0,
                }}
              >
                <span
                  style={{
                    color: gold,
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    flexShrink: 0,
                    marginTop: "0.15rem",
                  }}
                >
                  &#10003;
                </span>
                <p style={{ color: muted, fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 6: How to customise
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How to customise your Morning Briefing
          </h2>
          <p>
            There is no settings panel for the Morning Briefing. Customisation happens through
            conversation with your companion. This is intentional. A settings panel reduces your
            preferences to a finite list of toggles. A companion can hold much more nuanced
            instructions than any settings panel could represent.
          </p>
          <p>
            You can tell your companion anything about how you want the briefing to work. Some
            examples of instructions that users have found useful: &ldquo;I want the briefing to
            lead with Orion&rsquo;s research findings on weekdays and focus on emotional context on
            weekends.&rdquo; Or: &ldquo;I don&rsquo;t want pattern observations in the briefing unless I ask
            for them.&rdquo; Or: &ldquo;Keep the briefing under three minutes to read. If there&rsquo;s more to
            say, surface the most important thing and link me to the rest.&rdquo; Or: &ldquo;I&rsquo;m in a hard
            month. I want the briefing to be gentler and more focused on what is essential rather
            than everything on the list.&rdquo;
          </p>
          <p>
            Your companion will remember these preferences as part of your sovereign memory and
            apply them going forward. If your preferences change &mdash; as they will, because you
            change &mdash; you update them through conversation. You do not need to find a settings
            page or read a help document.
          </p>

          <h3
            style={{
              fontFamily: fontStack,
              fontWeight: 700,
              fontSize: "1.125rem",
              color: cream,
              marginTop: "2rem",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            Briefing delivery and timing
          </h3>
          <p>
            By default, the Morning Briefing is generated and available in your dashboard from 6am
            in your local time. You can ask your companion to adjust this. If you are consistently
            waking at 5am or 8am, tell it. The timing adapts to you. The briefing is not generated
            in real time when you open it &mdash; it is pre-generated by the overnight agent cycle, so
            it is always ready when you wake, not loading as you wait.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 7: Tier availability
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Which tier includes the Morning Briefing?
          </h2>
          <p>
            The Morning Briefing is included in the{" "}
            <strong style={{ color: gold }}>Sovereign tier at \u00a312 per month</strong>. It is not
            available on the Explorer free tier. The reason for this is architectural rather than
            commercial: the briefing requires the full overnight agent cycle &mdash; Orion, Hourman, and
            the companion memory layer &mdash; running in conjunction. That infrastructure is part of
            the Sovereign tier, not Explorer.
          </p>

          {/* Tier comparison table */}
          <div
            style={{
              marginTop: "1.75rem",
              marginBottom: "2rem",
              overflowX: "auto",
              borderRadius: "0.875rem",
              border: `1px solid rgba(245,240,232,0.08)`,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
                color: muted,
              }}
            >
              <thead>
                <tr style={{ background: "rgba(245,240,232,0.04)" }}>
                  {["Feature", "Explorer (Free)", "Sovereign (\u00a312/mo)"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        color: cream,
                        borderBottom: `1px solid rgba(245,240,232,0.08)`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Companion conversations", "Yes", "Yes"],
                  ["Sovereign memory", "Limited", "Full"],
                  ["Orion overnight research", "No", "Yes"],
                  ["Hourman sprint planning", "Basic", "Full"],
                  ["Morning Briefing", "No", "Yes"],
                  ["Pattern observations", "No", "Yes"],
                  ["Tone calibration (archetypes)", "No", "Yes"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background:
                        i % 2 === 0 ? "transparent" : "rgba(245,240,232,0.02)",
                    }}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "0.6875rem 1rem",
                          color:
                            j === 2 && cell === "Yes"
                              ? gold
                              : j === 1 && cell === "No"
                              ? "rgba(245,240,232,0.25)"
                              : muted,
                          fontWeight: j === 2 && cell === "Yes" ? 600 : 400,
                          borderBottom:
                            i < 6 ? `1px solid rgba(245,240,232,0.05)` : "none",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            If you are on the Explorer tier, you can still access your companion, have conversations,
            and build the early layers of sovereign memory that will eventually power a richer
            briefing. Upgrading to Sovereign at any point activates the full briefing cycle
            immediately. By week one of Sovereign, the briefing is running. By week four, it is
            learning. By week eight, it is indispensable.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 8: FAQ
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1.5rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: "What is the Morning Briefing?",
              a: "The Morning Briefing is a sovereign daily summary delivered by your MEOK companion each morning. It draws from Orion\u2019s overnight research results, Hourman\u2019s sprint plan for the day, and your companion\u2019s accumulated awareness of what has been emotionally and mentally significant in your recent conversations. It is generated entirely from your data \u2014 not a news digest, not a generic productivity feed, and not the same thing every morning.",
            },
            {
              q: "Is the Morning Briefing available on the free tier?",
              a: "No. The Morning Briefing is a Sovereign-tier feature, included in the Sovereign subscription at \u00a312 per month. It is not available on the Explorer free tier. To access it, you need to hatch a MEOK and upgrade to Sovereign. You can start free and upgrade at any time \u2014 the briefing cycle activates immediately when you do.",
            },
            {
              q: "How does the Morning Briefing know what to include?",
              a: "The Morning Briefing draws from three layers of your sovereign memory: Orion\u2019s overnight research results (from tasks you delegated before bed), Hourman\u2019s awareness of your goals and what you said yesterday, and your companion\u2019s memory of what has been emotionally or mentally significant across recent conversations. The longer you use MEOK, the richer and more precise the briefing becomes.",
            },
            {
              q: "Can I customise my Morning Briefing?",
              a: "Yes. Tell your companion what you want the briefing to focus on more or less. If you want more weight on work tasks and less on emotional reflection, say so. If you want the briefing to lead with Orion\u2019s research output above everything else on weekdays, your companion will adapt accordingly. Customisation happens through natural conversation \u2014 there is no settings panel to configure.",
            },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1rem",
                borderRadius: "0.875rem",
                padding: "1.25rem 1.5rem",
                background: "rgba(245,240,232,0.03)",
                border: `1px solid rgba(245,240,232,0.07)`,
              }}
            >
              <h3
                style={{
                  fontFamily: fontStack,
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: cream,
                  margin: "0 0 0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {q}
              </h3>
              <p
                style={{
                  color: muted,
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          ))}

          {/* ────────────────────────────────────────────────────────────────
              Closing
          ──────────────────────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: `1px solid rgba(245,240,232,0.07)`,
            }}
          >
            <p style={{ color: muted, fontStyle: "italic", lineHeight: 1.9 }}>
              The first briefing is the least impressive. The eighth is the one that changes
              something. Give it time. The memory compounds, and so does the value of starting
              each day already oriented.
            </p>
            <p style={{ color: mutedLow, fontSize: "0.875rem", marginTop: "1rem" }}>
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── Share row ────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "2.5rem 0",
            paddingTop: "2rem",
            borderTop: `1px solid rgba(245,240,232,0.07)`,
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmorning-briefing-explained&text=Morning+Briefing+Explained%3A+How+MEOK+Prepares+You+for+the+Day+Before+It+Starts"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              textDecoration: "none",
              border: `1px solid rgba(245,240,232,0.12)`,
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Post
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmorning-briefing-explained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              textDecoration: "none",
              border: `1px solid rgba(245,240,232,0.12)`,
              color: "rgba(245,240,232,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA block ───────────────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          {/* Primary CTA — /birth */}
          <div
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(201,168,76,0.07)",
              border: `1px solid rgba(201,168,76,0.2)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "14rem",
                height: "14rem",
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
              }}
            />
            <div style={{ position: "relative" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: gold,
                  margin: "0 0 0.625rem",
                }}
              >
                Free to start
              </p>
              <h3
                style={{
                  fontFamily: fontStack,
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  color: cream,
                  margin: "0 0 0.75rem",
                  lineHeight: 1.25,
                }}
              >
                Wake up to a briefing that knows you
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: muted,
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                }}
              >
                Hatch your MEOK free. Upgrade to Sovereign at \u00a312/month to unlock the Morning
                Briefing, Orion overnight research, and Hourman sprint planning.
              </p>
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  background: gold,
                  color: bg,
                }}
              >
                Hatch your MEOK &rarr;
              </Link>
            </div>
          </div>

          {/* Secondary CTA — Work OS explainer */}
          <div
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(245,240,232,0.04)",
              border: `1px solid rgba(245,240,232,0.08)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "14rem",
                height: "14rem",
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at 80% 10%, rgba(123,111,207,0.07), transparent 65%)",
              }}
            />
            <div style={{ position: "relative" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: mutedLow,
                  margin: "0 0 0.625rem",
                }}
              >
                Learn more
              </p>
              <h3
                style={{
                  fontFamily: fontStack,
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  color: cream,
                  margin: "0 0 0.75rem",
                  lineHeight: 1.25,
                }}
              >
                Explore the full Work OS
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: muted,
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                }}
              >
                The Morning Briefing is one part of a continuous sovereign operating system. See how
                Orion, Riri, Hourman, and Ralph Mode work together.
              </p>
              <Link
                href="/blog/meok-work-os-explained"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  background: "rgba(245,240,232,0.08)",
                  color: cream,
                  border: `1px solid rgba(245,240,232,0.15)`,
                }}
              >
                Read Work OS Explained &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related posts ────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              color: cream,
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/meok-work-os-explained",
                tag: "Agents",
                tagColour: gold,
                tagBg: "rgba(201,168,76,0.12)",
                title: "MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode",
                read: "9 min read",
              },
              {
                href: "/blog/what-is-sovereign-memory",
                tag: "Privacy",
                tagColour: purple,
                tagBg: "rgba(123,111,207,0.12)",
                title: "What is Sovereign Memory? How MEOK Stores Your Life Context",
                read: "6 min read",
              },
              {
                href: "/blog/ralph-mode-explained",
                tag: "Features",
                tagColour: "#34d399",
                tagBg: "rgba(52,211,153,0.1)",
                title: "Ralph Mode Explained: Deep Focus That Changes How Every Agent Behaves",
                read: "5 min read",
              },
            ].map(({ href, tag, tagColour, tagBg, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid rgba(245,240,232,0.07)`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: tagColour,
                    background: tagBg,
                    marginBottom: "0.75rem",
                  }}
                >
                  {tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    color: cream,
                    fontSize: "0.9375rem",
                    lineHeight: 1.4,
                    margin: "0 0 0.625rem",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: mutedLow,
                    margin: 0,
                  }}
                >
                  {read}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Footer nav ───────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: `1px solid rgba(245,240,232,0.07)`,
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/blog"
            style={{
              fontSize: "0.875rem",
              color: mutedLow,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            &#8592; All posts
          </Link>
          <Link
            href="/birth"
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: gold,
              textDecoration: "none",
            }}
          >
            Hatch your MEOK &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
