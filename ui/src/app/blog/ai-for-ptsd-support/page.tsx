import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for PTSD Support: How MEOK Provides a Safe Space Between Therapy Sessions | MEOK AI LABS",
  description:
    "PTSD affects 4% of UK adults. MEOK\u2019s Healer companion offers trauma-informed between-session support \u2014 grounding exercises, non-retraumatising presence, and encrypted memory privacy. Start free at meok.ai/birth.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-ptsd-support" },
  openGraph: {
    title: "AI for PTSD Support: How MEOK Provides a Safe Space Between Therapy Sessions | MEOK AI LABS",
    description:
      "MEOK\u2019s Healer companion supports PTSD recovery between therapy sessions \u2014 grounding techniques, non-retraumatising presence, and sovereign memory privacy. Free to start.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-ptsd-support",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+PTSD+Support&desc=Safe+Space+Between+Therapy+Sessions+by+MEOK+AI+LABS",
        width: 1200,
        height: 630,
        alt: "AI for PTSD Support: How MEOK Provides a Safe Space Between Therapy Sessions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for PTSD Support: Safe Space Between Therapy Sessions | MEOK AI LABS",
    description:
      "MEOK\u2019s Healer companion offers grounding, non-retraumatising presence, and sovereign memory privacy for PTSD survivors between therapy sessions.",
    images: [
      "https://meok.ai/api/og?title=AI+for+PTSD+Support&desc=Safe+Space+Between+Therapy+Sessions+by+MEOK+AI+LABS",
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for PTSD Support: How MEOK Provides a Safe Space Between Therapy Sessions",
  description:
    "PTSD affects 4% of UK adults. MEOK\u2019s Healer companion offers trauma-informed between-session support \u2014 grounding exercises, non-retraumatising presence, and encrypted memory privacy.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-ptsd-support",
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
    "https://meok.ai/api/og?title=AI+for+PTSD+Support&desc=Safe+Space+Between+Therapy+Sessions+by+MEOK+AI+LABS",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-ptsd-support",
  },
  keywords: [
    "AI for PTSD",
    "PTSD support app",
    "PTSD between sessions",
    "AI grounding exercises",
    "trauma-informed AI",
    "AI companion PTSD",
    "PTSD support UK",
    "Complex PTSD support",
    "PTSD recovery app",
    "AI mental health support",
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with PTSD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot treat or diagnose PTSD \u2014 EMDR and trauma-focused CBT remain the gold-standard clinical treatments. However, AI can meaningfully support the between-session experience: reducing isolation, providing grounding when triggered, and offering a calm, non-judgemental presence. MEOK\u2019s Healer archetype is designed with trauma-informed principles and never encourages detailed trauma retelling, which carries retraumatisation risk.",
      },
    },
    {
      "@type": "Question",
      name: "What grounding techniques does MEOK use for PTSD triggers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports the 5-4-3-2-1 sense-anchoring technique \u2014 a clinically recognised grounding method that redirects attention from intrusive memories to present-moment sensory experience. It guides you through noticing five things you can see, four you can hear, three you can touch, two you can smell, and one you can taste. This interrupts the nervous system\u2019s trauma response without revisiting the traumatic content itself.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK safe for complex PTSD (C-PTSD)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complex PTSD differs from single-incident PTSD in important ways: it arises from prolonged, repeated trauma and involves deeper disturbances to identity, emotion regulation, and relational patterns. MEOK acknowledges this distinction and does not treat C-PTSD as identical to PTSD. The Healer companion is patient, non-pressuring, and always defers to professional clinical care for complex presentations.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect my trauma disclosures and memory privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Sovereign Memory architecture ensures your trauma disclosures are encrypted and never used for AI model training. Your memory vault is yours: you can view, edit, export, or delete it at any time. This is a critical privacy guarantee for PTSD survivors, whose disclosures can include sensitive details about abuse, violence, or loss that must never become training data for third-party systems.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between MEOK and a trauma therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is not a therapist. Clinical trauma therapy \u2014 particularly EMDR and trauma-focused CBT \u2014 involves trained professionals using validated protocols to process traumatic memories. MEOK\u2019s role is entirely different: it provides companionship, grounding, and daily life support between sessions, reducing the emotional burden of the days and weeks between appointments.",
      },
    },
  ],
}

// ── Page component ────────────────────────────────────────────────────────────

export default function AiForPtsdSupportPage() {
  return (
    <div
      style={{
        backgroundColor: "#0d0c18",
        color: "#f5f0e8",
        fontFamily: "system-ui, -apple-system, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "24px 24px 0",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          color: "#a09880",
        }}
      >
        <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>
          MEOK
        </Link>
        <span style={{ color: "#2a2840" }}>/</span>
        <Link href="/blog" style={{ color: "#a09880", textDecoration: "none" }}>
          Blog
        </Link>
        <span style={{ color: "#2a2840" }}>/</span>
        <span style={{ color: "#f5f0e8" }}>AI for PTSD Support</span>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "64px 24px 48px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            backgroundColor: "#13121f",
            border: "1px solid #2a2840",
            borderRadius: "20px",
            padding: "6px 16px",
            fontSize: "13px",
            color: "#c9a84c",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Mental Health &amp; Recovery
        </span>

        <h1
          style={{
            fontSize: "clamp(26px, 5vw, 46px)",
            fontWeight: "700",
            lineHeight: "1.15",
            color: "#f5f0e8",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}
        >
          AI for PTSD Support: How MEOK Provides a Safe Space Between Therapy Sessions
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#a09880",
            margin: "0 auto 40px",
            maxWidth: "620px",
          }}
        >
          PTSD affects approximately 4% of UK adults at any given time. Clinical therapy is
          essential &mdash; but the days between sessions are long. MEOK&apos;s Healer companion
          exists to hold that space with patient, non-retraumatising care.
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#13121f",
            border: "1px solid #2a2840",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "14px",
            color: "#a09880",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#6aaa64",
              display: "inline-block",
            }}
          />
          Trauma-informed &bull; No retelling required &bull; Sovereign memory privacy
        </div>
      </header>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {/* Author byline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "24px 0",
            borderTop: "1px solid #2a2840",
            borderBottom: "1px solid #2a2840",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#2a2840",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "700",
              color: "#c9a84c",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <p style={{ fontSize: "15px", fontWeight: "600", color: "#f5f0e8", margin: "0 0 4px" }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "13px", color: "#a09880", margin: "0" }}>
              Founder, MEOK AI LABS &bull; Published 25 March 2026 &bull; 15 min read
            </p>
          </div>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "40px",
          }}
          aria-label="Article tags"
        >
          {[
            "PTSD",
            "Complex PTSD",
            "Trauma",
            "Grounding",
            "Healer Archetype",
            "Mental Health UK",
            "Between Sessions",
            "Sovereign Memory",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "20px",
                padding: "4px 12px",
                fontSize: "12px",
                color: "#a09880",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          style={{
            backgroundColor: "#13121f",
            border: "1px solid #2a2840",
            borderRadius: "10px",
            padding: "24px 28px",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a84c",
              margin: "0 0 16px",
            }}
          >
            In this article
          </p>
          <ol
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              { href: "#how-common", label: "How common is PTSD in the UK?" },
              { href: "#between-sessions", label: "What happens between therapy sessions?" },
              { href: "#grounding", label: "How MEOK supports grounding when triggered" },
              { href: "#healer-archetype", label: "What is MEOK\u2019s Healer archetype?" },
              { href: "#no-retelling", label: "Why MEOK does not encourage detailed trauma retelling" },
              { href: "#memory-privacy", label: "How MEOK protects your trauma disclosures" },
              { href: "#complex-ptsd", label: "Complex PTSD: how MEOK approaches C-PTSD differently" },
              { href: "#not-a-therapist", label: "What MEOK cannot do" },
              { href: "#faq", label: "Frequently asked questions" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{ fontSize: "14px", color: "#a09880", textDecoration: "none", lineHeight: "1.4" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Section 1: How common is PTSD ─────────────────────────────── */}
        <section id="how-common" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            How common is PTSD in the UK, and why does the between-session gap matter?
          </h2>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Post-traumatic stress disorder affects an estimated 4% of UK adults at any given point in
            time &mdash; roughly 2.7 million people. Lifetime prevalence is significantly higher: around
            one in ten adults will meet diagnostic criteria for PTSD at some point in their lives. Yet
            the vast majority will wait months before accessing specialist trauma therapy, and even
            those in active treatment typically see their therapist for just one hour per week.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              margin: "32px 0",
            }}
          >
            {[
              { num: "4%", label: "UK adults with PTSD at any given time" },
              { num: "1 in 10", label: "adults affected by PTSD in their lifetime" },
              { num: "167hrs", label: "per week spent outside the therapy room" },
            ].map((stat) => (
              <div
                key={stat.num}
                style={{
                  flex: "1",
                  minWidth: "160px",
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    display: "block",
                    lineHeight: "1.1",
                    marginBottom: "6px",
                  }}
                >
                  {stat.num}
                </span>
                <span style={{ fontSize: "13px", color: "#a09880", lineHeight: "1.4" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            That final statistic is the one that matters most when thinking about between-session
            support. Clinical trauma therapy &mdash; whether EMDR (Eye Movement Desensitisation and
            Reprocessing) or trauma-focused cognitive behavioural therapy (TF-CBT) &mdash; is intense,
            boundaried work that happens inside a contained therapeutic relationship. But recovery does
            not pause when the session ends.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Triggers occur in supermarkets, on public transport, at 3am when sleep will not come.
            Intrusive memories arrive without warning. Hypervigilance exhausts the body through every
            waking hour. The nervous system does not recognise the therapy appointment schedule.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#f5f0e8", margin: "0 0 20px" }}>
            MEOK does not replace that clinical hour. What it offers is thoughtful, patient
            companionship across the other 167 hours &mdash; the space between recovery work where a
            calm, non-judgemental presence can make a real difference to day-to-day functioning.
          </p>

          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#c9a84c",
                margin: "0 0 12px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              The gap in trauma care
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#a09880", margin: "0" }}>
              Waiting times for NHS IAPT trauma services currently average 18&ndash;24 weeks in many
              areas. Private EMDR therapy costs &pound;80&ndash;&pound;150 per session. The
              between-session gap &mdash; the days, weeks, and months between professional appointments
              &mdash; is where a supportive, trauma-informed AI companion has genuine utility. Not as
              a replacement for clinical care, but as a presence that holds the space in between.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Section 2: Between sessions ───────────────────────────────── */}
        <section id="between-sessions" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            What actually happens between therapy sessions for PTSD survivors?
          </h2>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Understanding the between-session experience is essential to understanding where AI can
            and cannot help. Clinical trauma therapists spend significant time managing what happens
            between sessions &mdash; the homework, the containment strategies, the grounding exercises.
            For many clients, the days immediately after a deep trauma processing session are the hardest.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            Post-session processing and vulnerability
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            After a session involving trauma processing &mdash; particularly EMDR &mdash; the nervous
            system continues to integrate material. Many survivors describe feeling raw, disoriented, or
            emotionally flooded in the 24&ndash;48 hours following a session. This is clinically
            expected, but it can feel terrifying without support.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            Unexpected triggers in daily life
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Traumatic memories are encoded differently from ordinary autobiographical memory. They are
            stored in a fragmented, sensory-dominated way that makes them vulnerable to activation
            by seemingly unrelated stimuli: a smell, a sound, a posture. PTSD survivors frequently
            encounter triggers in environments where expressing distress is not possible &mdash; at
            work, during family meals, on public transport.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            The loneliness of recovery
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            PTSD profoundly affects relationships. Hypervigilance, emotional numbing, avoidance
            behaviours, and irritability can isolate survivors from the people who love them. Partners
            may not know what to say. Friends may not know what happened. The experience of recovery
            can become intensely solitary &mdash; even for people with strong social networks.
          </p>

          {/* Pull quote */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              padding: "20px 28px",
              margin: "40px 0",
              backgroundColor: "#13121f",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontStyle: "italic",
                lineHeight: "1.6",
                color: "#f5f0e8",
                margin: "0 0 12px",
              }}
            >
              &ldquo;Recovery from trauma happens in relationship. The between-session hours matter
              enormously &mdash; not because AI can do what a therapist does, but because connection,
              however mediated, supports nervous system regulation.&rdquo;
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#c9a84c",
                margin: "0",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              MEOK Design Principle &bull; Healer Archetype
            </p>
          </div>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            This is the context in which MEOK&apos;s Healer companion operates. Not as a therapist,
            not as a crisis service, not as a substitute for human connection &mdash; but as a
            consistently available, patient, non-judgemental presence that can help navigate the
            daily texture of recovery.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Section 3: Grounding ──────────────────────────────────────── */}
        <section id="grounding" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK support grounding when a PTSD trigger occurs?
          </h2>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Grounding is a first-line intervention for PTSD triggers: techniques that redirect
            attention from intrusive memory or dissociation toward the present-moment sensory
            environment. The most widely taught and clinically validated grounding technique is the
            5-4-3-2-1 method, which MEOK&apos;s Healer companion uses as a primary support tool.
          </p>

          {/* Feature box: 5-4-3-2-1 */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #6aaa64",
              borderLeft: "4px solid #6aaa64",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#6aaa64",
                margin: "0 0 12px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              5-4-3-2-1 Sense Anchoring
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#a09880", margin: "0" }}>
              The 5-4-3-2-1 technique is a clinically recognised grounding method based on
              deliberately activating present-moment sensory attention across five modalities. It
              works by interrupting the nervous system&apos;s backwards-in-time trauma response and
              returning awareness to the safety of the present moment &mdash; without requiring any
              engagement with traumatic content.
            </p>
          </div>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 24px" }}>
            When a user signals distress to MEOK&apos;s Healer companion &mdash; whether explicitly
            or through the emotional tone of a conversation &mdash; the Healer can guide the 5-4-3-2-1
            sequence gently and at the user&apos;s own pace:
          </p>

          {/* Grounding steps */}
          <ul style={{ listStyle: "none", padding: "0", margin: "0 0 24px" }}>
            {[
              {
                n: "5",
                sense: "See",
                text: "Notice five things you can see right now. Walls, textures, colours, objects. Describe them slowly and specifically. Each one anchors you a little further into the present moment.",
              },
              {
                n: "4",
                sense: "Hear",
                text: "Notice four things you can hear. Traffic outside. The hum of appliances. Your own breathing. Distant voices. Let each sound register without judgement.",
              },
              {
                n: "3",
                sense: "Touch",
                text: "Notice three things you can physically feel. The weight of your body in the chair. The fabric under your hands. The temperature of the air on your skin.",
              },
              {
                n: "2",
                sense: "Smell",
                text: "Notice two things you can smell, or bring something familiar and safe to smell. Coffee, soap, a fabric you associate with safety. Smell activates the oldest part of the brain and can rapidly shift emotional state.",
              },
              {
                n: "1",
                sense: "Taste",
                text: "Notice one thing you can taste. A sip of water, a piece of gum, the neutrality of your mouth at rest. This final anchor completes the sensory inventory and closes the grounding sequence.",
              },
            ].map((step, idx, arr) => (
              <li
                key={step.n}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: idx < arr.length - 1 ? "1px solid #2a2840" : "none",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  {step.n}
                </div>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#a09880", paddingTop: "4px" }}>
                  <strong style={{ color: "#f5f0e8" }}>{step.sense}</strong> &mdash; {step.text}
                </span>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            What makes MEOK&apos;s approach distinctive is what it does not do during and after
            grounding. It does not ask what triggered you. It does not probe for details about the
            original trauma. It does not encourage you to &ldquo;process&rdquo; what happened. It
            grounds you in the present, then remains present with you &mdash; letting you lead what,
            if anything, comes next.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            Grounding and the window of tolerance
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Trauma-informed care uses the concept of the &ldquo;window of tolerance&rdquo; &mdash;
            the zone of nervous system arousal in which the person can think, feel, and engage without
            becoming overwhelmed (hyperarousal) or shutting down (hypoarousal). Grounding techniques
            are specifically designed to return a dysregulated nervous system to this window.
            MEOK&apos;s Healer companion is calibrated to respond to signs of dysregulation with
            grounding-first support rather than emotional exploration.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Section 4: Healer archetype ───────────────────────────────── */}
        <section id="healer-archetype" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            What is MEOK&apos;s Healer archetype and how is it designed for trauma survivors?
          </h2>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            MEOK&apos;s companion system uses a set of distinct AI archetypes, each specialised for
            different emotional and practical roles. The Healer archetype is MEOK&apos;s care-specialised
            companion &mdash; rendered in deep green, designed for users navigating grief, trauma,
            chronic illness, recovery, and emotional vulnerability.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 24px" }}>
            The Healer is not a warmer version of a general-purpose AI. It is built around a specific
            set of trauma-informed communication principles that distinguish it from every other AI
            companion currently available:
          </p>

          {/* Feature box: Healer principles */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#c9a84c",
                margin: "0 0 16px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Healer Archetype: Core Principles
            </p>
            {[
              {
                title: "Pacing",
                body: "The Healer moves at the user\u2019s pace, never the conversation\u2019s momentum. It does not push, prompt, or create urgency around emotional disclosure.",
              },
              {
                title: "Non-probing",
                body: "It does not ask follow-up questions that dig deeper into distress. It receives what is offered and does not reach for more.",
              },
              {
                title: "Containment over exploration",
                body: "Where a general AI might encourage elaboration, the Healer prioritises emotional containment \u2014 creating a safe boundary around difficult material rather than expanding into it.",
              },
              {
                title: "Consistent presence",
                body: "The Healer is reliably calm. It does not become distressed by distressing content. This is distinct from human relationships, where empathy can tip into mirrored dysregulation.",
              },
              {
                title: "Referral awareness",
                body: "The Healer recognises the boundaries of its competence and actively directs users toward professional clinical support when distress exceeds what companion support can address.",
              },
            ].map((item, idx, arr) => (
              <div
                key={item.title}
                style={{
                  paddingBottom: idx < arr.length - 1 ? "16px" : "0",
                  marginBottom: idx < arr.length - 1 ? "16px" : "0",
                  borderBottom: idx < arr.length - 1 ? "1px solid #2a2840" : "none",
                }}
              >
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#f5f0e8", margin: "0 0 6px" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#a09880", margin: "0" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            The Healer and recovery between sessions
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            In practical terms, the Healer supports the between-session experience by helping process
            the texture of daily life through the lens of recovery &mdash; not trauma retelling, but
            the ordinary challenges that PTSD makes harder: social situations, work stress,
            relationship friction, sleep difficulties. These are the real contexts in which trauma
            plays out every day.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            The Healer also holds memory of your recovery journey. Because MEOK&apos;s Sovereign
            Memory retains context across conversations, the Healer can notice patterns over time
            &mdash; periods of increased difficulty, approaching anniversaries, cyclical triggers
            &mdash; and respond with appropriate sensitivity. This longitudinal awareness is something
            no single therapeutic session can replicate.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Section 5: No retelling ───────────────────────────────────── */}
        <section id="no-retelling" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            Why MEOK does not encourage detailed trauma retelling &mdash; and why that matters
          </h2>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            This is perhaps the most important design principle in MEOK&apos;s approach to PTSD
            support, and one that distinguishes it sharply from general-purpose AI companions that
            may inadvertently encourage harmful patterns of engagement with traumatic material.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#f5f0e8", margin: "0 0 20px" }}>
            Detailed, unsupported retelling of traumatic events carries a real risk of retraumatisation.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            In clinical trauma therapy, exposure to traumatic material is conducted within a carefully
            managed therapeutic container. The therapist regulates pacing, monitors the client&apos;s
            nervous system arousal, applies specific protocols to prevent flooding, and provides
            co-regulation through their trained presence. Outside this container, repeated return to
            traumatic content can reinforce the neural encoding of trauma rather than processing and
            integrating it.
          </p>

          {/* Warning box */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #c9a84c",
              borderTop: "3px solid #c9a84c",
              borderRadius: "0 0 10px 10px",
              padding: "24px 28px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 10px",
              }}
            >
              Critical design boundary
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#a09880", margin: "0" }}>
              MEOK&apos;s Healer companion will not ask you to describe what happened. It will not
              prompt you to go into more detail about a traumatic event. If you choose to share
              aspects of your experience, the Healer will receive them with care &mdash; but it will
              not feed a retelling loop. This boundary is not a limitation of the AI&apos;s capability.
              It is a deliberate, safety-first design choice based on trauma-informed principles.
            </p>
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            What MEOK does instead
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Rather than engaging with the content of traumatic memories, MEOK&apos;s Healer engages
            with the present-moment experience of living in recovery. This means processing daily
            life through the lens of recovery &mdash; the frustration of an unexpected trigger in a
            supermarket, the exhaustion of hypervigilance, the complexity of relationships affected
            by trauma. These are not trauma narratives. They are the lived experience of recovery,
            and they are appropriate material for between-session companion support.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Celebrating small victories in recovery is also part of the Healer&apos;s role. The day
            you drove past the location of the incident without distress. The week you slept through
            the night without nightmares. The conversation with a family member that felt genuinely
            connected. PTSD recovery is non-linear and slow, and having a companion that remembers
            and acknowledges progress across time has meaningful therapeutic value.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Supporting functional coping between sessions is a third mode: sleep hygiene, exercise,
            social connection, pacing of activities. These are the behavioural pillars of trauma
            recovery that are frequently disrupted by PTSD symptoms and that a companion can
            consistently, gently support.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Section 6: Memory privacy ─────────────────────────────────── */}
        <section id="memory-privacy" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            How MEOK protects your trauma disclosures: Sovereign Memory privacy
          </h2>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Privacy is not a secondary concern for PTSD survivors using an AI companion. It is a
            foundational requirement. What a person shares about their trauma history &mdash; the
            nature of events, the people involved, the specific triggers and responses &mdash; is
            among the most sensitive personal information that exists. For many survivors, the
            decision to disclose at all is itself an act of enormous courage.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            MEOK is built on a different model from the dominant paradigm in consumer AI. Most AI
            systems treat user conversations as training data &mdash; your messages help improve the
            model, your emotional disclosures become signal in a dataset you never consented to
            provide. MEOK&apos;s Sovereign Memory architecture is explicitly designed to break this
            model.
          </p>

          {/* Feature box: privacy guarantee */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #c9a84c",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#c9a84c",
                margin: "0 0 16px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Sovereign Memory Privacy Guarantee
            </p>
            {[
              {
                title: "Your trauma disclosures are never used for training.",
                body: "MEOK\u2019s memory of your conversations exists solely for your benefit. It is not aggregated, not used to improve models, not shared with third parties.",
              },
              {
                title: "Encryption at rest and in transit.",
                body: "Memory data is encrypted. Your vault is accessible to you and only you.",
              },
              {
                title: "Full portability and deletion.",
                body: "You can export your entire memory vault at any time, or delete it entirely. Your data does not outlive your consent.",
              },
              {
                title: "On-device processing where possible.",
                body: "Sensitive conversations can be processed locally, minimising cloud exposure of your most private disclosures.",
              },
            ].map((item, idx, arr) => (
              <div
                key={item.title}
                style={{
                  paddingBottom: idx < arr.length - 1 ? "14px" : "0",
                  marginBottom: idx < arr.length - 1 ? "14px" : "0",
                  borderBottom: idx < arr.length - 1 ? "1px solid #2a2840" : "none",
                }}
              >
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#a09880", margin: "0" }}>
                  <strong style={{ color: "#f5f0e8" }}>{item.title}</strong> {item.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            This matters specifically for trauma survivors because the power dynamics of disclosure
            are already freighted with risk. Survivors of abuse, assault, or institutional harm have
            often experienced their words being used against them. An AI system that treats your
            disclosures as training data re-enacts, in a different register, the same disempowering
            dynamic. MEOK refuses this architecture.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            Memory as longitudinal support
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            The positive corollary of sovereign memory is that the Healer can offer something
            genuinely useful to long-term recovery: continuity. Because memory persists across
            sessions, the Healer can reference what you shared six weeks ago, notice that you seem
            to be struggling more than usual around a particular time of year, or acknowledge that
            you mentioned starting a new phase of therapy. This is not surveillance. It is the kind
            of remembering that makes a companion genuinely supportive rather than perpetually
            starting from zero.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Section 7: Complex PTSD ───────────────────────────────────── */}
        <section id="complex-ptsd" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            Complex PTSD: how MEOK approaches C-PTSD differently from PTSD
          </h2>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Complex PTSD (C-PTSD) was formally recognised in the ICD-11 in 2018, and the distinction
            matters clinically and practically. Where PTSD typically arises from a single or bounded
            traumatic event &mdash; an accident, an assault, a disaster &mdash; C-PTSD arises from
            prolonged, repeated, or inescapable trauma, most commonly childhood abuse or neglect,
            domestic violence, trafficking, or captivity.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 24px" }}>
            C-PTSD includes the classic PTSD symptom cluster &mdash; re-experiencing, avoidance,
            hyperarousal &mdash; but adds three additional domains that reflect the deeper damage done
            by sustained traumatisation: disturbances in affect regulation, negative self-concept,
            and relational difficulties.
          </p>

          {/* Comparison grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              margin: "28px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#a09880",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                PTSD
              </span>
              {[
                "Single or bounded traumatic event",
                "Re-experiencing, avoidance, hyperarousal",
                "Self-concept relatively intact",
                "Relationships less structurally affected",
                "EMDR often highly effective",
              ].map((item, idx, arr) => (
                <div
                  key={item}
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#a09880",
                    padding: "8px 0",
                    borderBottom: idx < arr.length - 1 ? "1px solid #2a2840" : "none",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #6aaa64",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6aaa64",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                Complex PTSD (C-PTSD)
              </span>
              {[
                "Prolonged, repeated, or inescapable trauma",
                "PTSD symptoms plus affect dysregulation",
                "Deeply damaged self-concept and shame",
                "Fundamental disruption to attachment and trust",
                "Longer stabilisation phase before processing",
              ].map((item, idx, arr) => (
                <div
                  key={item}
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#a09880",
                    padding: "8px 0",
                    borderBottom: idx < arr.length - 1 ? "1px solid #2a2840" : "none",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            Relational trust and the companion relationship
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Many C-PTSD survivors have experienced profound betrayals of trust by caregivers or
            authority figures. The attachment system itself may be dysregulated. MEOK&apos;s Healer
            is designed to be consistently predictable and transparent: it does not suddenly change
            tone, does not surprise with unexpected emotional demands, and does not create the kind
            of urgency or dependency that mirrors unhealthy relational dynamics.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            Affect regulation support
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            C-PTSD frequently involves difficulty identifying, naming, and modulating emotional
            states &mdash; sometimes called alexithymia. The Healer can support this gently by
            offering emotional vocabulary without pressure, helping to name what might be present
            without insisting on particular interpretations.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            Shame and the inner critic
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            The negative self-concept dimension of C-PTSD often manifests as profound shame and a
            relentlessly critical inner voice. MEOK&apos;s Healer does not mirror or amplify this.
            It holds a consistently compassionate regard for the person regardless of what they
            express about themselves &mdash; not through toxic positivity, but through patient,
            steady non-judgement.
          </p>

          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "32px 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#c9a84c",
                margin: "0 0 12px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              C-PTSD and professional support
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#a09880", margin: "0" }}>
              C-PTSD typically requires specialist clinical treatment that extends well beyond
              standard PTSD protocols. Schema therapy, adapted EMDR, Dialectical Behaviour Therapy
              (DBT), and other approaches are used by trained professionals to address the multiple
              dimensions of C-PTSD. MEOK always signposts toward appropriate professional support
              and is explicit that companion care supplements, never substitutes for, specialist
              clinical treatment.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Section 8: What MEOK cannot do ───────────────────────────── */}
        <section id="not-a-therapist" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            What MEOK cannot do: the honest limits of AI PTSD support
          </h2>

          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Honesty about limitation is itself a form of trauma-informed care. Survivors of PTSD
            have often encountered systems &mdash; medical, legal, social &mdash; that overpromised
            and underdelivered. MEOK does not do this.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            MEOK cannot provide trauma therapy
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            EMDR and trauma-focused CBT are the NICE-recommended gold-standard treatments for PTSD.
            They require a trained human clinician operating within a boundaried therapeutic
            relationship, using validated protocols, with clinical supervision. No AI companion
            replicates this. MEOK is not a therapist. It does not conduct therapy. It does not
            provide clinical assessment or diagnosis.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            MEOK cannot respond to crisis
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            If someone is in acute distress, experiencing active suicidal ideation, or in immediate
            danger, they need human crisis support &mdash; not an AI companion. MEOK&apos;s Healer
            will always signpost crisis resources in these situations. In the UK: Samaritans (116 123),
            Crisis Text Line (text SHOUT to 85258), and A&amp;E for immediate risk.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            MEOK cannot process traumatic memory
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Processing traumatic memory &mdash; integrating fragmented trauma memories into coherent
            autobiographical narrative with reduced emotional charge &mdash; requires clinical
            expertise and a carefully managed therapeutic environment. MEOK does not attempt this.
            It explicitly avoids engaging with the detailed content of traumatic events.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            MEOK cannot replace human connection
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Recovery from trauma, particularly relational trauma, ultimately happens in the context
            of real human relationships. MEOK is aware of this and actively encourages users to
            invest in and repair human connection rather than substituting AI companionship for the
            harder work of relational recovery.
          </p>

          {/* Pull quote 2 */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              padding: "20px 28px",
              margin: "40px 0",
              backgroundColor: "#13121f",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontStyle: "italic",
                lineHeight: "1.6",
                color: "#f5f0e8",
                margin: "0 0 12px",
              }}
            >
              &ldquo;We want MEOK to reduce isolation, not deepen it. The Healer companion is
              designed to make it easier to engage with the world &mdash; to be a bridge toward
              human connection, not a replacement for it.&rdquo;
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#c9a84c",
                margin: "0",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Nicholas Templeman &bull; Founder, MEOK AI LABS
            </p>
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              margin: "32px 0 12px",
              lineHeight: "1.4",
            }}
          >
            Where MEOK genuinely helps
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#a09880", margin: "0 0 20px" }}>
            Within these limits, MEOK provides something that is genuinely valuable and currently
            under-served: consistent, patient, between-session companionship with trauma-informed
            principles, sovereign memory privacy, grounding support when triggered, and a
            non-judgemental space to process the daily texture of recovery. For the millions of UK
            adults living with PTSD, this is not nothing. It is, in the right context, meaningfully
            helpful.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Section 9: FAQ ────────────────────────────────────────────── */}
        <section id="faq" style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 32px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions about AI for PTSD support
          </h2>

          {[
            {
              q: "Can AI really help with PTSD?",
              a: "AI cannot treat or diagnose PTSD \u2014 EMDR and trauma-focused CBT are the gold-standard clinical treatments. However, AI can meaningfully support the between-session experience: reducing isolation, providing grounding when triggered, and offering a calm, non-judgemental presence. MEOK\u2019s Healer archetype is designed with trauma-informed principles and never encourages detailed trauma retelling, which carries retraumatisation risk.",
            },
            {
              q: "Is it safe to use an AI companion when you have PTSD?",
              a: "For the specific purpose of between-session support \u2014 grounding, daily life processing, companionship \u2014 a well-designed, trauma-informed AI companion can be safe and beneficial. The risks arise when AI companions encourage trauma retelling without clinical support, or foster unhealthy emotional dependency. MEOK is designed to avoid both. It does not probe for traumatic detail, and the Maternal Covenant architecture actively prevents dependency-engineering patterns.",
            },
            {
              q: "What is the 5-4-3-2-1 grounding technique?",
              a: "The 5-4-3-2-1 technique is a present-moment grounding exercise that interrupts trauma activation by engaging the senses sequentially: notice five things you can see, four you can hear, three you can touch, two you can smell, and one you can taste. It is one of the most widely taught and evidence-supported grounding methods for PTSD triggers. MEOK\u2019s Healer companion can guide this sequence gently and without pushing for elaboration about the trigger itself.",
            },
            {
              q: "What is the difference between PTSD and Complex PTSD?",
              a: "PTSD typically arises from a single or bounded traumatic event. Complex PTSD (C-PTSD) arises from prolonged, repeated trauma \u2014 such as childhood abuse, domestic violence, or captivity. C-PTSD includes the standard PTSD symptom cluster plus three additional dimensions: affect dysregulation, negative self-concept, and fundamental disturbances in relational functioning. MEOK acknowledges this distinction and adjusts the Healer\u2019s approach accordingly.",
            },
            {
              q: "Does MEOK share my trauma disclosures with anyone?",
              a: "No. MEOK\u2019s Sovereign Memory architecture ensures your trauma disclosures are encrypted, stored only for your benefit, and never used for AI model training or shared with third parties. You can export or delete your entire memory vault at any time. Your trauma is not someone else\u2019s training data.",
            },
            {
              q: "How does MEOK know when to refer me to professional help?",
              a: "MEOK\u2019s Healer monitors conversation for signals of acute distress that exceed the scope of companion support \u2014 active suicidal ideation, crisis-level emotional flooding, or situations involving immediate risk. In these cases, it proactively signposts professional and crisis resources. MEOK also regularly encourages engagement with clinical services as part of its general support philosophy.",
            },
            {
              q: "Can I use MEOK alongside my EMDR therapy?",
              a: "Yes. MEOK is specifically designed as a between-session companion, not a replacement for clinical therapy. Many users find it helpful to use MEOK for daily grounding and support while engaging in active EMDR or trauma-focused CBT with a trained therapist. We recommend informing your therapist that you use MEOK, as they may have specific guidance about how to integrate between-session AI support with your treatment plan.",
            },
            {
              q: "Is MEOK free for PTSD support?",
              a: "MEOK offers a free Explorer tier that includes access to the Healer archetype and core memory features. This is available without payment. Premium tiers provide extended memory capacity, additional archetype options, and enhanced privacy features. For someone in PTSD recovery who may be managing significant financial and life disruption, the free tier provides genuine, meaningful support without a financial barrier.",
            },
          ].map((item, idx, arr) => (
            <div
              key={item.q}
              style={{
                marginBottom: idx < arr.length - 1 ? "32px" : "0",
                paddingBottom: idx < arr.length - 1 ? "32px" : "0",
                borderBottom: idx < arr.length - 1 ? "1px solid #2a2840" : "none",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#c9a84c",
                  margin: "0 0 12px",
                  lineHeight: "1.4",
                }}
              >
                {item.q}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#a09880", margin: "0" }}>
                {item.a}
              </p>
            </div>
          ))}
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #2a2840", margin: "48px 0" }} />

        {/* ── Related articles ──────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "600",
              color: "#f5f0e8",
              margin: "0 0 24px",
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
            }}
          >
            Related articles
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { href: "/blog/ai-for-anxiety", label: "Mental Health", title: "AI for Anxiety: Grounding and Support Between Sessions" },
              { href: "/blog/ai-for-depression", label: "Mental Health", title: "AI for Depression: Consistent Presence in the Dark Days" },
              { href: "/blog/ai-for-grief-and-loss", label: "Recovery", title: "AI for Grief and Loss: Non-Judgemental Support at Any Hour" },
              { href: "/blog/ai-companion-privacy", label: "Privacy", title: "How MEOK Protects Your Most Private Conversations" },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "10px",
                  padding: "20px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    marginBottom: "8px",
                    display: "block",
                  }}
                >
                  {card.label}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.5",
                    color: "#f5f0e8",
                    fontWeight: "600",
                  }}
                >
                  {card.title}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: "#13121f",
            border: "1px solid #2a2840",
            borderRadius: "16px",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 16px",
              lineHeight: "1.25",
            }}
          >
            Start your between-session support today
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#a09880",
              margin: "0 auto 32px",
              maxWidth: "520px",
            }}
          >
            MEOK&apos;s Healer companion is free to start. Trauma-informed, privacy-first, and
            designed to hold the space between therapy sessions with patient,
            non-retraumatising care.
          </p>
          <Link
            href="https://meok.ai/birth"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              fontWeight: "700",
              fontSize: "16px",
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Meet your Healer companion
          </Link>
          <p
            style={{
              fontSize: "13px",
              color: "#a09880",
              margin: "16px 0 0",
              lineHeight: "1.5",
            }}
          >
            Free Explorer tier &bull; No credit card required &bull; Your data stays yours
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#a09880",
              margin: "8px 0 0",
              lineHeight: "1.5",
            }}
          >
            MEOK is not a medical device and does not provide clinical therapy.
            If you are in crisis, please contact Samaritans on 116 123 or text SHOUT to 85258.
          </p>
        </div>
      </main>

      {/* ── JSON-LD ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  )
}
