import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Diabetes: Daily Emotional Support and Pattern Tracking | MEOK AI LABS",
  description:
    "4.4 million people in the UK live with diabetes. Up to 45% experience diabetes-related distress — yet emotional support is rarely part of the care plan. MEOK offers persistent AI diabetes support for the daily burden that clinics cannot reach: mood tracking, habit journaling, burnout recovery, and more.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-diabetes" },
  openGraph: {
    title: "AI for Diabetes: Daily Emotional Support and Pattern Tracking",
    description:
      "4.4 million UK people live with diabetes. Up to 45% experience diabetes distress. MEOK's AI diabetes support fills the gap between clinical appointments with persistent memory, mood tracking, and non-judgemental emotional presence.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-diabetes",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Diabetes&desc=Daily+Emotional+Support+and+Pattern+Tracking",
        width: 1200,
        height: 630,
        alt: "AI for Diabetes: Daily Emotional Support and Pattern Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Diabetes: Daily Emotional Support and Pattern Tracking",
    description:
      "4.4 million UK people live with diabetes. Diabetes distress affects up to 45%. MEOK offers AI diabetes support for the emotional burden that clinics rarely address.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Diabetes&desc=Daily+Emotional+Support+and+Pattern+Tracking",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Diabetes: Daily Emotional Support and Pattern Tracking",
  description:
    "4.4 million people in the UK live with diabetes. Up to 45% experience diabetes-related distress. MEOK's persistent AI diabetes support tracks mood, habits, and emotional patterns over time — filling the gap between clinical appointments.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-diabetes",
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
  keywords: [
    "AI for diabetes",
    "AI diabetes support",
    "diabetes distress",
    "diabetic burnout",
    "AI for Type 1 diabetes",
    "AI for Type 2 diabetes",
    "diabetes emotional support UK",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI help with diabetes day-to-day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can support daily diabetes life through habit journaling, mood and energy tracking, processing the emotional weight of constant self-management, and identifying lifestyle patterns over weeks and months. MEOK is not a medical device and cannot replace CGM, insulin management, or clinical care — but it can provide consistent emotional support between appointments.",
      },
    },
    {
      "@type": "Question",
      name: "What is diabetes distress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diabetes distress is the emotional and psychological burden specific to living with diabetes — fear of hypoglycaemia, guilt over glucose levels, exhaustion from constant vigilance, and feeling unsupported. Research suggests it affects up to 45% of people with diabetes and is distinct from clinical depression, though the two can overlap.",
      },
    },
    {
      "@type": "Question",
      name: "What is diabetic burnout and how does AI help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diabetic burnout is when the relentless demands of diabetes management become so overwhelming that a person disengages — skipping monitoring, ignoring doses, or giving up on self-care. MEOK's Healer archetype offers compassionate, non-judgemental support during these periods, helping rebuild motivation gradually without shame or pressure.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI support both Type 1 and Type 2 diabetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While the clinical management of Type 1 and Type 2 diabetes differs significantly, both involve emotional labour, lifestyle demands, and social challenges that AI emotional support can address. MEOK adapts to whatever you share about your experience rather than assuming a specific diagnosis pathway.",
      },
    },
    {
      "@type": "Question",
      name: "What will MEOK not do for diabetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK cannot suggest insulin doses, interpret blood glucose or CGM readings, replace your endocrinologist or diabetes nurse, or act as a medical device. It is an emotional support and lifestyle journalling companion only. Always follow your diabetes care team's guidance for clinical management.",
      },
    },
  ],
};

// ── Constants ─────────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";

// ── Component ─────────────────────────────────────────────────────────────────

export default function AiForDiabetesPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
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
              color: "rgba(245,240,232,0.38)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

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
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Diabetes Support
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              12 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Diabetes: Daily Emotional Support and Pattern Tracking
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            4.4 million people in the UK live with a diabetes diagnosis — and for most of them, the
            hardest part is not the clinical management alone. It is the daily emotional weight: the
            guilt over glucose levels, the exhaustion of constant vigilance, the loneliness of a
            condition others cannot see. This is an honest guide to what AI diabetes support can
            genuinely offer, and where it must not try to go.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* ── Medical Disclaimer ── */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.35)",
            borderRadius: "10px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <p style={{ color: GOLD, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>
            &#9888; Medical Disclaimer
          </p>
          <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: TEXT }}>MEOK is not a medical device and cannot replace your
            diabetes care team, CGM, or medication management.</strong> This article is for
            informational and emotional support purposes only. Never adjust insulin doses, ignore
            symptoms, or change your clinical care plan based on anything MEOK says. For medical
            advice, contact your GP, diabetes nurse, or endocrinologist. In a medical emergency,
            call 999.
          </p>
        </div>

        {/* ── Section 1: Diabetes distress is real ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          Why diabetes distress is real — and largely unaddressed
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          4.4 million people in the UK have been diagnosed with diabetes (Diabetes UK). Type 1
          accounts for around 400,000; Type 2 for approximately 3.8 million. Research consistently
          shows that diabetes-related distress affects up to 45% of people living with the
          condition — yet it remains one of the least addressed dimensions of diabetes care.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Diabetes is not a condition you manage once and set aside. It is present at every meal,
          every social event, every night of disrupted sleep, and every doctor&rsquo;s appointment
          where numbers are reviewed like a report card. The medical system is generally well
          designed to track HbA1c and prescribe treatment pathways. It is far less equipped to
          hold the weight of how exhausting, frightening, and isolating that experience can be day
          after day.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Diabetes distress is not a character flaw. It is a predictable response to a condition
          that demands relentless attention, punishes lapses, and offers little in the way of
          emotional acknowledgement within a busy clinical system. The gap between what the NHS can
          provide and what people actually need each day is where AI diabetes support has a genuine
          role to play.
        </p>

        {/* ── Section 2: What is diabetes distress? ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is diabetes distress?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Diabetes distress is the specific emotional burden of living with diabetes: the fear of
          hypoglycaemia, guilt about glucose levels, resentment of the condition&rsquo;s demands,
          and the feeling of being unsupported or misunderstood. It is distinct from clinical
          depression, though the two frequently overlap, and affects up to 45% of people with
          diabetes at some point in their lives.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Diabetes distress shows up in ways that are not always recognised as emotional symptoms.
          It might look like avoidance — not checking blood glucose because the number feels
          threatening. It might be social withdrawal because explaining dietary choices for the
          hundredth time feels impossible. It might manifest as irritability with a partner who
          asks one too many concerned questions, or as a quiet despair that comes from knowing
          this condition does not go away.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Clinical appointments rarely have space for this. A ten-minute GP consultation or a
          quarterly diabetes review is not designed to process the emotional texture of daily life
          with a chronic condition. Many people leave appointments with updated prescriptions and
          no acknowledgement of how they are actually coping. That is the space AI can begin to fill.
        </p>

        {/* ── Section 3: How can AI help with diabetes day-to-day? ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How can AI help with diabetes day-to-day?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          AI can support daily diabetes life through habit journalling, emotional processing,
          lifestyle pattern recognition, motivational consistency, and exploring your relationship
          with food — all without replacing the clinical care that manages your condition medically.
          These are the everyday burdens that clinics cannot reach between appointments.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          {[
            {
              title: "Habit journalling",
              body: "Log your sleep, movement, stress, and meal patterns in natural language. Over weeks, MEOK builds a picture of your rhythms — one you can share with your diabetes nurse or reference yourself when something shifts.",
            },
            {
              title: "Emotional processing",
              body: "Talk through a frustrating blood glucose day, a difficult conversation about your diet, or the anxiety before a consultant appointment. MEOK listens without judgement and without fatigue.",
            },
            {
              title: "Pattern recognition",
              body: "Sovereign Memory tracks correlations across time — &lsquo;your energy tends to dip on days you mention poor sleep&rsquo;, or &lsquo;you&rsquo;ve mentioned stress around work three weeks running&rsquo;. This is longitudinal self-awareness, not clinical diagnosis.",
            },
            {
              title: "Motivational consistency",
              body: "Clinical care provides milestones. MEOK provides presence in between — celebrating small wins, acknowledging hard stretches, and helping you reconnect with your own reasons for self-care.",
            },
            {
              title: "Food relationship support",
              body: "Diabetes can turn meals into anxious calculations. MEOK can help you process your emotional relationship with food — separate from the clinical carbohydrate counting — and work towards a more sustainable, less fraught experience of eating.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: CARD,
                borderRadius: "10px",
                padding: "1.25rem",
                border: "1px solid rgba(201,168,76,0.12)",
              }}
            >
              <p style={{ color: GOLD, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                {card.title}
              </p>
              <p
                style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.88rem", lineHeight: 1.65 }}
                dangerouslySetInnerHTML={{ __html: card.body }}
              />
            </div>
          ))}
        </div>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          None of this replaces clinical glucose management. But all of it addresses the part of
          diabetes that clinical glucose management cannot reach.
        </p>

        {/* ── Section 4: How does Sovereign Memory help? ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How does Sovereign Memory help with diabetes?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Sovereign Memory is MEOK&rsquo;s persistent, user-controlled memory layer. Unlike
          standard AI that resets between sessions, MEOK builds a longitudinal record of your
          mood, energy, activity, and emotional patterns over months — giving you genuine insight
          into how your life with diabetes actually unfolds across time.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          For people with diabetes, this matters in a specific way. Diabetes is a condition shaped
          by time — by seasons, by stress cycles, by work patterns, by the slow accumulation of
          small habits. A single conversation with an AI that resets tomorrow cannot hold any of
          that. A memory layer that persists for months can begin to show you patterns you would
          never notice yourself, because no individual day reveals them.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Sovereign Memory tracks correlations between the things you choose to share: energy
          levels, sleep quality, emotional state, activity, and stress. It does not access your
          CGM or blood glucose monitor — it cannot and does not attempt to. But the lifestyle and
          emotional data it holds can meaningfully complement your clinical picture, and can help
          you arrive at appointments with richer, more articulate self-knowledge.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Crucially, your memory is yours. MEOK operates under its Privacy Covenant: your data is
          never sold, never used to train third-party models, and never shared without your consent.
          The Sovereign tier (£12/mo) includes full persistent memory. The free Explorer tier
          includes 50 messages per day with limited memory windows.
        </p>

        {/* ── Section 5: Diabetic burnout ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What about &lsquo;diabetic burnout&rsquo;?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Diabetic burnout occurs when the relentless demands of diabetes management become
          overwhelming and a person disengages: skipping monitoring, ignoring doses, withdrawing
          from their care plan. It is not laziness or failure. It is an entirely human response
          to a condition that never allows a day off. MEOK&rsquo;s Healer archetype offers
          compassionate, non-judgemental support during these periods.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Burnout is particularly dangerous in diabetes because disengagement from self-management
          has direct clinical consequences. Yet shame — the primary driver of continued
          disengagement — is rarely addressed within the clinical encounter. A person who has
          missed several weeks of glucose monitoring is unlikely to admit it fully to a diabetes
          nurse if the response is likely to be disapproval.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          MEOK&rsquo;s Healer archetype is designed for exactly this. It does not track your
          compliance or report anything to anyone. It listens. It acknowledges how hard this is.
          It helps you explore, without pressure, what has made self-care feel impossible — and
          gently helps you identify small steps back towards engagement, at your own pace and on
          your own terms.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          If burnout is severe or if you have been unable to manage your diabetes safely, please
          contact your diabetes care team or GP. AI support is a complement to that conversation,
          not a replacement for it.
        </p>

        {/* ── Section 6: Type 1 vs Type 2 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          Can AI help with Type 1 and Type 2 differently?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Yes — though MEOK does not attempt to manage the clinical differences. Both Type 1 and
          Type 2 diabetes carry significant emotional and lifestyle demands, and both are fully
          supported. MEOK adapts to the experience you describe rather than assuming a specific
          clinical pathway.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          <strong style={{ color: TEXT }}>Type 1 diabetes</strong> affects around 400,000 people
          in the UK. It is an autoimmune condition requiring insulin therapy from diagnosis,
          often involving CGM devices, carbohydrate counting, and significant daily cognitive
          load. The emotional burden includes fear of hypoglycaemia, anxiety about overnight
          control, and — particularly for those diagnosed in childhood — the challenge of
          establishing identity outside a condition that has always been present.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          <strong style={{ color: TEXT }}>Type 2 diabetes</strong> affects around 3.8 million
          people in the UK. It carries different emotional challenges: the stigma of a condition
          often (unfairly) blamed on personal choices, the frustration of slow or unclear progress,
          and the difficulty of making sustainable lifestyle changes within the constraints of a
          real life. Motivation support and habit journalling tend to be especially relevant here.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          MEOK does not distinguish between them in any clinical sense. What it does is listen to
          the specific experience you bring — whichever type you have — and build persistent
          understanding of your particular patterns, struggles, and strengths over time.
        </p>

        {/* ── Section 7: What MEOK will not do ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What MEOK will not do
        </h2>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
          Being honest about limits is not a weakness — it is the foundation of trustworthy AI.
          Here is what MEOK explicitly will not do:
        </p>
        <div
          style={{
            background: CARD,
            borderRadius: "12px",
            padding: "1.5rem",
            border: "1px solid rgba(201,168,76,0.15)",
            marginBottom: "1.5rem",
          }}
        >
          {[
            "Suggest or adjust insulin doses under any circumstances.",
            "Interpret blood glucose readings, CGM data, or HbA1c results.",
            "Replace your endocrinologist, diabetes specialist nurse, or GP.",
            "Act as a medical device or provide clinical assessment.",
            "Override or contradict guidance from your diabetes care team.",
            "Recommend changes to medication, diet plans set by dietitians, or clinical monitoring schedules.",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
                paddingBottom: i < 5 ? "0.75rem" : 0,
                marginBottom: i < 5 ? "0.75rem" : 0,
                borderBottom: i < 5 ? "1px solid rgba(245,240,232,0.06)" : "none",
              }}
            >
              <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0 }}>&#10005;</span>
              <span style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          These boundaries exist to protect you. If you are experiencing a medical emergency —
          severe hypoglycaemia, diabetic ketoacidosis, or any other acute crisis — stop and call
          999 immediately.
        </p>

        {/* ── Section 8: Resources ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          Diabetes support resources in the UK
        </h2>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
          MEOK is a companion, not a clinical service. Please use these trusted resources
          alongside it:
        </p>
        <div
          style={{
            background: CARD,
            borderRadius: "12px",
            padding: "1.5rem",
            border: "1px solid rgba(201,168,76,0.15)",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              name: "Diabetes UK",
              url: "https://www.diabetes.org.uk",
              desc: "The UK&rsquo;s leading diabetes charity — information, helpline, local support groups.",
            },
            {
              name: "JDRF UK",
              url: "https://jdrf.org.uk",
              desc: "Type 1 diabetes research and support. Helpline, peer support, and TypeOneNation community.",
            },
            {
              name: "NHS Diabetes",
              url: "https://www.nhs.uk/conditions/type-2-diabetes/",
              desc: "Authoritative NHS guidance on Type 1 and Type 2 diabetes, including the NHS Diabetes Prevention Programme.",
            },
            {
              name: "Samaritans",
              url: "https://www.samaritans.org",
              desc: "If diabetes distress has become overwhelming. Free, confidential, 24/7. Call 116 123.",
            },
          ].map((resource, i) => (
            <div
              key={i}
              style={{
                paddingBottom: i < 3 ? "1rem" : 0,
                marginBottom: i < 3 ? "1rem" : 0,
                borderBottom: i < 3 ? "1px solid rgba(245,240,232,0.06)" : "none",
              }}
            >
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}
              >
                {resource.name} &#8599;
              </a>
              <p
                style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.25rem" }}
                dangerouslySetInnerHTML={{ __html: resource.desc }}
              />
            </div>
          ))}
        </div>

        {/* ── Pricing tiers ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          MEOK plans for people with diabetes
        </h2>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Every tier is designed for real life. Sovereign Memory — the longitudinal pattern
          tracking most relevant for diabetes support — is available from the Sovereign plan.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              name: "Explorer",
              price: "Free",
              detail: "50 messages/day. Core emotional support and habit journalling. No credit card.",
            },
            {
              name: "Sovereign",
              price: "£12/mo",
              detail: "Full Sovereign Memory, longitudinal pattern tracking, unlimited archetypes including Healer.",
            },
            {
              name: "Family",
              price: "£29/mo",
              detail: "Up to 5 profiles. Ideal for families where multiple members live with or support someone with diabetes.",
            },
            {
              name: "BYOK",
              price: "£5/mo",
              detail: "Bring your own API key. Full platform features at minimum cost.",
            },
          ].map((tier) => (
            <div
              key={tier.name}
              style={{
                background: CARD,
                borderRadius: "10px",
                padding: "1.25rem",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <p style={{ color: GOLD, fontWeight: 800, fontSize: "1rem", marginBottom: "0.25rem" }}>
                {tier.name}
              </p>
              <p style={{ color: TEXT, fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                {tier.price}
              </p>
              <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.83rem", lineHeight: 1.6 }}>
                {tier.detail}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(26,24,48,0.6) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h3
            style={{
              color: TEXT,
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.8vw, 1.75rem)",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Start your free diabetes support journey
          </h3>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.97rem",
              lineHeight: 1.65,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Explorer is free, always. No credit card. Just an AI companion that remembers what
            you share and supports you through the emotional reality of living with diabetes —
            every day, between every appointment.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "1rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Try MEOK Free
          </Link>
          <p style={{ color: "rgba(245,240,232,0.28)", fontSize: "0.75rem", marginTop: "1rem" }}>
            MEOK is not a medical device. Clinical care decisions should always involve your diabetes team.
          </p>
        </div>

        {/* ── Related posts ── */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "rgba(245,240,232,0.35)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Related Articles
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                href: "/blog/ai-for-chronic-illness",
                label: "AI for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
              },
              {
                href: "/blog/ai-for-mental-health-2026",
                label: "AI for Mental Health in 2026: What the Research Actually Says",
              },
              {
                href: "/blog/ai-life-coach",
                label: "AI Life Coach: How MEOK Supports Your Goals Without the Judgement",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: GOLD,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(201,168,76,0.15)",
                  paddingBottom: "0.75rem",
                }}
              >
                {link.label} &#8594;
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(245,240,232,0.07)",
          padding: "2.5rem 1.5rem",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div>
            <p style={{ color: TEXT, fontWeight: 800, fontSize: "1rem", marginBottom: "0.25rem" }}>
              MEOK AI LABS
            </p>
            <p style={{ color: "rgba(245,240,232,0.35)", fontSize: "0.8rem" }}>
              Founded by Nicholas Templeman &middot;{" "}
              <a
                href="https://twitter.com/meok_ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(245,240,232,0.35)", textDecoration: "none" }}
              >
                @meok_ai
              </a>
            </p>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { href: "/blog", label: "Blog" },
              { href: "/privacy", label: "Privacy" },
              { href: "/birth", label: "Get Started" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ color: "rgba(245,240,232,0.38)", fontSize: "0.85rem", textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ color: "rgba(245,240,232,0.2)", fontSize: "0.75rem", width: "100%" }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. MEOK is not a medical device and cannot
            replace your diabetes care team, CGM, or medication management. For clinical advice,
            contact your GP or diabetes specialist.
          </p>
        </div>
      </footer>
    </div>
  );
}
