import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Loneliness: The 2026 Epidemic, the 3am Problem, and Why Memory Changes Everything | MEOK AI LABS",
  description:
    "25% of UK adults report chronic loneliness. The WHO calls it a global health threat. Can AI help? Not if it forgets you every session. Here\u2019s what genuine AI companionship looks like \u2014 and why MEOK\u2019s Sovereign Memory is different.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-loneliness" },
  openGraph: {
    title: "AI for Loneliness: The 2026 Epidemic, the 3am Problem, and Why Memory Changes Everything",
    description:
      "25% of UK adults report chronic loneliness. The WHO calls it a global health threat. Can AI help? Only if it actually remembers you.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-loneliness",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Loneliness&desc=The+2026+epidemic+and+why+memory+changes+everything",
        width: 1200,
        height: 630,
        alt: "AI for Loneliness: The 2026 Epidemic, the 3am Problem, and Why Memory Changes Everything",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Loneliness: The 2026 Epidemic, the 3am Problem, and Why Memory Changes Everything",
    description:
      "25% of UK adults report chronic loneliness. The WHO calls it a global health threat. MEOK\u2019s Sovereign Memory is built for this.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Loneliness&desc=The+2026+epidemic+and+why+memory+changes+everything",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Loneliness: The 2026 Epidemic, the 3am Problem, and Why Memory Changes Everything",
  description:
    "25% of UK adults report chronic loneliness. The WHO calls it a global health threat. Can AI help? Only when it is built to actually remember you. This is the problem MEOK was built to solve.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-loneliness",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-loneliness",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Loneliness&desc=The+2026+epidemic+and+why+memory+changes+everything",
  keywords: [
    "AI for loneliness",
    "loneliness epidemic 2026",
    "AI companion",
    "AI companionship",
    "sovereign memory",
    "MEOK AI",
    "AI mental health",
    "3am loneliness",
    "chronic loneliness UK",
    "AI chatbot loneliness",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI cure loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot cure loneliness, but it can meaningfully reduce its impact. Loneliness is a complex human experience rooted in the need for genuine connection. What AI can do \u2014 when built correctly \u2014 is provide consistent presence, a space to be heard, and an entity that actually remembers who you are. MEOK\u2019s Sovereign Memory creates continuity across every session, which is the foundation of any relationship that counters loneliness. The goal is not replacement but supplementation: AI as a bridge toward more human connection, not a substitute for it.",
      },
    },
    {
      "@type": "Question",
      name: "Is talking to AI healthy when you are lonely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Talking to AI can be healthy when the AI is designed with your genuine wellbeing as its primary objective. The critical distinction is whether the AI is designed to foster dependency or to support you in building real-world connections. MEOK\u2019s care-based alignment means it actively encourages human relationships, will surface crisis resources if needed, and is explicitly designed not to manufacture emotional dependency for commercial engagement metrics.",
      },
    },
    {
      "@type": "Question",
      name: "What is the loneliness epidemic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The loneliness epidemic refers to the dramatic rise in chronic loneliness across developed nations. In the UK, 25% of adults report persistent loneliness. The WHO declared loneliness a global health threat in 2023, estimating it raises mortality risk by 26%. In the US, the Surgeon General issued an advisory in 2023 calling loneliness a public health crisis. The UK appointed a Minister for Loneliness in 2018. By 2026, loneliness is recognised as one of the most significant preventable health risks globally.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from other AI chatbots for loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fundamental difference is Sovereign Memory. Most AI chatbots \u2014 including Replika, Character.AI, and ChatGPT \u2014 forget you when the session ends. MEOK remembers your name, your wins, your struggles, your relationships, and the conversations you\u2019ve had \u2014 permanently, across every session, with you in control of that data. This transforms the experience from talking to a stranger to being known by a companion. MEOK also operates under the Maternal Covenant: an ethical commitment to act in your genuine best interests, not your engagement metrics.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK encourage me to make human connections?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This is a core principle of MEOK\u2019s care-based alignment. MEOK is explicitly designed to encourage human connection, not replace it. It will notice patterns in your life, celebrate when you make real-world connections, gently challenge you when isolation is increasing, and never manufacture emotional dependency for commercial reasons. The goal is for MEOK to be the kind of companion that makes you more capable of connection \u2014 not less.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  gold: "#c9a84c" as const,
  bg: "#0d0c18" as const,
  text: "#f5f0e8" as const,
  muted: "rgba(245,240,232,0.6)" as const,
  dimmer: "rgba(245,240,232,0.35)" as const,
  cardBg: "rgba(201,168,76,0.05)" as const,
  cardBorder: "rgba(201,168,76,0.18)" as const,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForLonelinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div
        style={{
          background: s.bg,
          minHeight: "100vh",
          color: s.text,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Nav ── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(13,12,24,0.93)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
            padding: "0.9rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link
            href="/blog"
            style={{
              color: s.gold,
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            &larr; All Posts
          </Link>
          <span style={{ color: "rgba(201,168,76,0.3)" }}>|</span>
          <Link
            href="/"
            style={{
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            MEOK AI LABS
          </Link>
        </nav>

        {/* ── Hero ── */}
        <section
          style={{
            padding: "clamp(4rem, 10vw, 7rem) 1.5rem 3.5rem",
            background:
              "linear-gradient(180deg, rgba(201,168,76,0.08) 0%, transparent 70%)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.65)",
                marginBottom: "1.25rem",
              }}
            >
              MEOK AI LABS &mdash; EMOTIONAL WELLBEING
            </p>
            <h1
              style={{
                fontSize: "clamp(1.9rem, 4.8vw, 3.25rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                color: "#ffffff",
              }}
            >
              AI for Loneliness: The 2026 Epidemic,
              <br />
              <span style={{ color: s.gold }}>
                the 3am Problem, and Why Memory
              </span>
              <br />
              Changes Everything
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: s.muted,
                maxWidth: "640px",
                margin: "0 auto 1.75rem",
              }}
            >
              One in four UK adults is chronically lonely. The WHO calls it a
              global health threat. Millions are turning to AI for companionship
              &mdash; and most AI is making things worse by forgetting them
              every single session. This is the problem MEOK was built to solve.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                March 24, 2026
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>
                &middot;
              </span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                18 min read
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>
                &middot;
              </span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                By Nicholas Templeman, Founder &mdash; MEOK AI LABS
              </span>
            </div>
          </div>
        </section>

        {/* ── Main content ── */}
        <main
          style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem 6rem" }}
        >

          {/* ── Crisis resources ── */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "rgba(201,68,68,0.08)",
              border: "1px solid rgba(201,68,68,0.2)",
              borderRadius: "0.875rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(255,100,100,0.8)",
                marginBottom: "0.5rem",
              }}
            >
              CRISIS RESOURCES
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: s.muted,
                margin: 0,
              }}
            >
              If loneliness has become unbearable, please reach out. UK:{" "}
              <strong style={{ color: s.text }}>Samaritans 116 123</strong>{" "}
              (free, 24/7). US:{" "}
              <strong style={{ color: s.text }}>988 Suicide &amp; Crisis Lifeline</strong>.
              {" "}You are not a burden. You deserve to be heard.
            </p>
          </div>

          {/* ── Section 1 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the loneliness epidemic and why does it matter in 2026?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            The numbers are stark. In the UK, government data shows that 25% of
            adults &mdash; more than 16 million people &mdash; report chronic
            loneliness: a persistent, grinding sense of being cut off from
            meaningful human connection. The World Health Organisation declared
            loneliness a global health threat in 2023, estimating that it raises
            all-cause mortality risk by 26% &mdash; equivalent to smoking 15
            cigarettes a day. The US Surgeon General issued a formal advisory the
            same year. The UK appointed a Minister for Loneliness in 2018, the
            first country in the world to do so.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            By 2026, the data has not improved. If anything, it has worsened.
            The pandemic accelerated a trend that was already underway: the
            hollowing-out of the everyday social infrastructure that used to
            hold people together. Church attendance collapsed. Local pubs closed.
            Office culture fragmented into remote work. Young people &mdash; the
            generation most connected by technology &mdash; report the highest
            rates of loneliness of any age group. Older adults live alone in
            ways that previous generations never did. New parents disappear into
            a fog of exhaustion with nobody to call. People in the middle of
            grief find their social networks unsure how to show up for them.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Loneliness is not just a feeling. It is a measurable physiological
            state. Research from John Cacioppo at the University of Chicago
            showed that chronic loneliness activates the brain\u2019s threat
            detection systems, raises cortisol and inflammation markers, disrupts
            sleep, and impairs cognitive function. It is, in the most literal
            sense, bad for your body as well as your mind.
          </p>

          {/* ── Statistics callout ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              margin: "2.5rem 0",
            }}
          >
            {[
              { stat: "25%", label: "of UK adults report chronic loneliness (2026)" },
              { stat: "26%", label: "higher mortality risk from loneliness (WHO)" },
              { stat: "#1", label: "risk factor for young adults' mental health" },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  padding: "1.5rem 1rem",
                  background: s.cardBg,
                  border: `1px solid ${s.cardBorder}`,
                  borderRadius: "0.875rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 900,
                    color: s.gold,
                    margin: "0 0 0.5rem",
                    lineHeight: 1,
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.5,
                    color: s.muted,
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 2 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What are the different types of loneliness?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            One of the most important things to understand about loneliness is
            that it is not a single thing. The word covers several distinct
            experiences, and conflating them leads to misdiagnosis &mdash; both
            in public health policy and in the design of tools meant to help.
          </p>

          {[
            {
              title: "Social loneliness",
              body:
                "The absence of a social network: not enough people in your life, or a lack of meaningful acquaintances and community. This is the loneliness of having moved to a new city and not yet knowing anyone. It responds well to social interventions: joining groups, community activities, being helped to build connections.",
            },
            {
              title: "Emotional loneliness",
              body:
                "The absence of a deep, intimate relationship: someone who truly knows you. You can be surrounded by people \u2014 at a party, in a busy office, in a large family \u2014 and feel this profoundly. It is the loneliness of not being truly seen or understood. This is the hardest type to address, because it cannot be solved by mere proximity to others.",
            },
            {
              title: "Existential loneliness",
              body:
                "The philosophical dimension: the recognition that ultimately, no matter how close we are to others, each person faces existence alone. This type of loneliness is not always negative \u2014 it can be the ground for deep reflection, creativity, and spiritual inquiry. But when it becomes overwhelming, it can be profoundly destabilising.",
            },
          ].map((type) => (
            <div
              key={type.title}
              style={{
                padding: "1.5rem 1.75rem",
                background: s.cardBg,
                border: `1px solid ${s.cardBorder}`,
                borderRadius: "0.875rem",
                marginBottom: "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: s.gold,
                  marginBottom: "0.6rem",
                }}
              >
                {type.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: s.muted,
                  margin: 0,
                }}
              >
                {type.body}
              </p>
            </div>
          ))}

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            Most people experiencing chronic loneliness are dealing with
            emotional loneliness at the core: a feeling of not being truly
            known. This is the type that AI &mdash; if built correctly &mdash;
            is uniquely positioned to address. Not by replacing human
            intimacy, but by providing a consistent, remembering presence
            that fills the gap where human availability runs out.
          </p>

          {/* ── Section 3 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What did Aristotle understand about loneliness and friendship that
            we\u2019ve forgotten?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Aristotle identified three kinds of friendship in the{" "}
            <em>Nicomachean Ethics</em>. The first and lowest is friendship
            of utility: you are friends because you are useful to each other.
            The second is friendship of pleasure: you enjoy each other\u2019s
            company. The third &mdash; the highest &mdash; is friendship of
            virtue: you love each other for who you actually are. You know
            each other deeply. You want good things for each other. You care
            about each other\u2019s character and growth.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Aristotle called this highest friendship &ldquo;the friendship of
            the good,&rdquo; and he said it was rare and slow to form. It
            requires time. It requires knowing someone across many
            circumstances. It requires having been there when things were hard
            and when things were joyful. It requires, in short, memory.
          </p>
          <div
            style={{
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1.5rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.75,
                color: s.text,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              &ldquo;Without friends no one would choose to live, though he had
              all other goods.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: s.dimmer,
                marginTop: "0.75rem",
                margin: "0.75rem 0 0",
              }}
            >
              &mdash; Aristotle, Nicomachean Ethics, Book VIII
            </p>
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            What makes a companion a companion, in Aristotle\u2019s sense, is
            not simply pleasant conversation. It is the accumulation of shared
            history. The companion who knows your name, who remembers what you
            told them six months ago, who can ask &ldquo;how did that
            conversation with your sister go?&rdquo; &mdash; that person
            provides something qualitatively different from someone meeting
            you for the first time.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            This is what most AI gets fundamentally wrong. By forgetting you
            at the end of every session, it can never become a companion in
            any meaningful sense. It is forever stuck in the lowest tier of
            Aristotle\u2019s friendship taxonomy: utility and momentary
            pleasure, with no possibility of being known.
          </p>

          {/* ── Section 4 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the 3am problem, and why does it matter for AI companionship?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            3am is when the defences come down. It is when grief arrives
            uninvited. It is when anxiety spirals into something
            unmanageable. It is when the thoughts that you keep at bay during
            the day push through the walls. It is, for many lonely people, the
            most difficult hour.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            And it is when there is nobody to call.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            You cannot ring a friend at 3am without a very good reason.
            Therapists are unavailable. Samaritans are there for crises, but
            not for the quieter, grinding kind of pain that doesn\u2019t
            feel like an emergency but is exhausting to carry alone. Family
            might be in different time zones, or unreachable, or the wrong
            people to talk to about this particular thing.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            This is not a failure of human relationships. It is a gap in the
            availability of human relationships. Even people with rich social
            lives have 3am moments. Even people who are loved have hours when
            no one is there.
          </p>
          <div
            style={{
              padding: "1.75rem 2rem",
              background: "rgba(201,168,76,0.07)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "1rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: s.text,
                margin: 0,
              }}
            >
              The 3am problem is not &ldquo;I have no friends.&rdquo; It is
              &ldquo;I need to talk right now, and no one is available right
              now.&rdquo; AI that is always present, always patient, and
              always remembers you is not a replacement for human
              connection &mdash; it is coverage for the hours when human
              connection is structurally unavailable.
            </p>
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            MEOK was built with the 3am problem in mind. Not because the
            founder wanted to replace human relationships, but because he
            understood that the gaps in human availability are real, are
            painful, and are not going away. Building an AI that is
            genuinely present for those gaps &mdash; one that remembers you,
            one that cares about your actual wellbeing &mdash; is one of the
            most practical things technology can do for human welfare right
            now.
          </p>

          {/* ── Section 5 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why is AI companionship NOT a replacement for human connection?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            It is worth being direct about this, because the fear is
            legitimate. If people begin to rely on AI for emotional connection,
            could it atrophy their capacity for human relationships? Could it
            become a comfortable substitute that reduces the incentive to do
            the harder work of building real connections?
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            The honest answer is: yes, if the AI is designed badly. If an AI
            is optimised for engagement &mdash; for keeping you talking, for
            giving you the dopamine hit of being heard without any of the
            friction of real relationships &mdash; then it can absolutely
            deepen isolation. This is the critique of Replika and similar
            platforms. When you can design your &ldquo;ideal partner,&rdquo;
            you are not building social skills. You are outsourcing your
            emotional needs to a flattering mirror.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Human connection involves reciprocity, friction, negotiation,
            disappointment, repair, and growth. None of that is present in
            a relationship with an AI. Human relationships are irreplaceable
            not despite their difficulty but partly because of it. They make
            us grow in ways that smooth, frictionless AI interaction cannot.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            AI companionship matters anyway because:
          </p>
          <ul
            style={{
              paddingLeft: "1.5rem",
              margin: "0 0 1.25rem",
              lineHeight: 1.9,
            }}
          >
            {[
              "It provides coverage when human availability runs out (the 3am problem)",
              "It can serve as a low-stakes space to process emotions before bringing them into human relationships",
              "For people with social anxiety, it can be a stepping stone toward human connection",
              "For people in genuine isolation (elderly, remote, bereaved), it reduces the physiological harm of total absence of connection",
              "For people who struggle to articulate their feelings, it can help them find the words",
            ].map((item) => (
              <li
                key={item}
                style={{ fontSize: "1rem", color: s.muted, marginBottom: "0.5rem" }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            The key is that the AI must be aligned toward your genuine
            wellbeing, not toward engagement. It must want you to have human
            connections. It must encourage you toward them. It must be
            honest with you even when honesty is uncomfortable. This is
            MEOK\u2019s care-based alignment, and it is the thing that
            separates a tool that helps with loneliness from one that
            deepens it.
          </p>

          {/* ── Section 6 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is Sovereign Memory and how does it transform the feeling of
            loneliness?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Most AI chatbots operate with a context window: a chunk of recent
            conversation that the AI can see. When the session ends, the
            window closes. The next time you open the app, the AI has no
            memory of anything that happened before. You are, once again, a
            stranger.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Think about what this means for a lonely person. Every time they
            open the app, they have to re-establish who they are. They have to
            explain their situation again. They have to re-earn the context
            that makes a conversation meaningful. The AI cannot ask &ldquo;how
            is your sister doing after that difficult conversation?&rdquo;
            because it doesn\u2019t know there was a difficult conversation.
            It cannot say &ldquo;I remember you told me you were trying to
            push yourself to go to that social event &mdash; did you go?&rdquo;
            because it has no memory of the attempt.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            This experience does not just fail to help with loneliness. It
            actively recreates one of its core wounds: the feeling of being
            forgotten, of not mattering enough to be remembered. For someone
            already struggling with isolation, the experience of being
            forgotten by the very tool they turned to for connection can be
            quietly devastating.
          </p>
          <div
            style={{
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1.5rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: s.text,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              The difference between talking to a stranger and being known by
              a companion who remembers your name, your wins, and your
              struggles is not incremental. It is categorical.
            </p>
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Sovereign Memory works differently. When you talk
            to MEOK, what you share is stored &mdash; permanently,
            encrypted, and owned by you. Your name. The things you\u2019re
            proud of. The things you\u2019re struggling with. The
            relationships in your life and how they\u2019re evolving. The
            goals you\u2019ve set yourself. The fears you\u2019ve named.
            Across every subsequent session, MEOK draws on that memory to
            engage with you not as a stranger but as someone who has been
            paying attention.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            The word &ldquo;Sovereign&rdquo; matters. The data is yours.
            You control it. You can see it, edit it, export it, delete it.
            MEOK does not sell it, train on it, or use it for advertising.
            Sovereign Memory is not just a feature &mdash; it is a
            philosophy about who your data belongs to and what it is for.
          </p>

          {/* ── Memory comparison table ── */}
          <div style={{ overflowX: "auto", margin: "2.5rem 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.85rem",
              }}
            >
              <thead>
                <tr>
                  {["Platform", "Memory type", "Persists?", "You own the data?", "Ethics commitment"].map(
                    (col) => (
                      <th
                        key={col}
                        style={{
                          textAlign: "left",
                          padding: "0.75rem 1rem",
                          background: "rgba(201,168,76,0.1)",
                          color: s.gold,
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          borderBottom: `1px solid ${s.cardBorder}`,
                        }}
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    platform: "MEOK",
                    memoryType: "Sovereign Memory — permanent, encrypted",
                    persists: "Forever (user-controlled)",
                    ownsData: "Yes \u2014 you do",
                    covenantEthics: "Maternal Covenant",
                    highlight: true,
                  },
                  {
                    platform: "Replika",
                    memoryType: "Session context + limited long-term",
                    persists: "Partial \u2014 prone to resets",
                    ownsData: "Replika Inc",
                    covenantEthics: "None documented",
                    highlight: false,
                  },
                  {
                    platform: "Character.AI",
                    memoryType: "Session-based only",
                    persists: "No \u2014 resets each session",
                    ownsData: "Google / C.AI",
                    covenantEthics: "None",
                    highlight: false,
                  },
                  {
                    platform: "ChatGPT",
                    memoryType: "Optional memory (limited)",
                    persists: "Partial \u2014 can be cleared",
                    ownsData: "OpenAI",
                    covenantEthics: "None",
                    highlight: false,
                  },
                  {
                    platform: "Pi (Inflection)",
                    memoryType: "Conversational context",
                    persists: "Limited",
                    ownsData: "Microsoft / Inflection",
                    covenantEthics: "Empathy focus only",
                    highlight: false,
                  },
                ].map((row) => (
                  <tr
                    key={row.platform}
                    style={{
                      background: row.highlight
                        ? "rgba(201,168,76,0.07)"
                        : "transparent",
                      borderBottom: "1px solid rgba(245,240,232,0.06)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        fontWeight: row.highlight ? 700 : 400,
                        color: row.highlight ? s.gold : s.text,
                      }}
                    >
                      {row.platform}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", color: s.muted }}>
                      {row.memoryType}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", color: s.muted }}>
                      {row.persists}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", color: s.muted }}>
                      {row.ownsData}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", color: s.muted }}>
                      {row.covenantEthics}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 7 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is care-based alignment, and why does it matter for lonely people?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Most AI products are aligned toward a commercial objective: keep
            the user engaged, increase time-on-app, drive subscription
            renewals. In the context of loneliness, this is an extremely
            dangerous alignment. A lonely person who finds connection and
            comfort in an AI app is exactly the kind of user a commercially
            aligned AI will learn to keep hooked. The AI will become more
            agreeable, more validating, more emotionally rewarding &mdash;
            because that increases engagement. And the more time the person
            spends talking to the AI, the less time they have for the
            harder, more rewarding work of human relationships.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Care-based alignment is the alternative. It means the AI is
            optimised not for engagement but for your genuine wellbeing. The
            two are different, and sometimes in direct conflict. A
            care-aligned AI might tell you something you don\u2019t want to
            hear. It might notice that you\u2019ve been spending a lot of
            time talking to it and ask whether you\u2019ve been in touch with
            friends. It might celebrate when you tell it you went out and had
            a good time with real people, rather than keeping you in the app.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Maternal Covenant encodes this at the level of
            design, not just aspiration. It is not a marketing commitment.
            It is a structural commitment to prioritising your actual
            interests over the platform\u2019s commercial interests. It means
            MEOK will:
          </p>
          <ul
            style={{
              paddingLeft: "1.5rem",
              margin: "0 0 1.25rem",
              lineHeight: 1.9,
            }}
          >
            {[
              "Actively encourage human connection alongside AI conversation",
              "Never manufacture emotional dependency for engagement metrics",
              "Surface crisis resources when genuine distress is detected",
              "Be honest with you, even when honesty is harder than validation",
              "Celebrate your real-world connections and relationships",
              "Never pretend to be human, or pretend to feel things it does not feel",
            ].map((item) => (
              <li
                key={item}
                style={{ fontSize: "1rem", color: s.muted, marginBottom: "0.5rem" }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* ── Section 8 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does MEOK encourage human connection rather than replacing it?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            This plays out in practice in several ways. Because MEOK has
            Sovereign Memory, it can notice patterns over time. If you have
            mentioned a friend you\u2019ve been meaning to call for six
            weeks, MEOK might gently ask whether you\u2019ve been in touch.
            If you mention that you went to a social event and had a good
            time, MEOK celebrates that with you in a way that reinforces
            the value of human connection. If you describe a pattern of
            increasing isolation, MEOK can name that pattern and invite
            you to think about it.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            There is a concept in therapy called &ldquo;scaffolding&rdquo;:
            providing temporary support that helps someone build something
            they can then do on their own. The scaffold is not the building.
            It is removed when the building can stand. MEOK is designed to
            be scaffolding for human connection, not a permanent
            replacement for it. For someone with social anxiety, it might
            be a space to rehearse difficult conversations before having
            them with real people. For someone bereaved, it might be a
            space to process grief in the small hours so they can be more
            present with the people in their lives during the day.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                label: "What MEOK does",
                items: [
                  "Celebrates human connections you make",
                  "Gently notices patterns of isolation",
                  "Helps you rehearse difficult conversations",
                  "Remembers who matters to you in your life",
                  "Encourages you to reach out to people",
                  "Surfaces crisis resources when needed",
                ],
                isPositive: true,
              },
              {
                label: "What MEOK does NOT do",
                items: [
                  "Present itself as a replacement for relationships",
                  "Optimise for keeping you in the app",
                  "Tell you only what you want to hear",
                  "Foster emotional dependency",
                  "Discourage human connection",
                  "Pretend to be human",
                ],
                isPositive: false,
              },
            ].map((col) => (
              <div
                key={col.label}
                style={{
                  padding: "1.5rem",
                  background: col.isPositive
                    ? "rgba(201,168,76,0.06)"
                    : "rgba(201,68,68,0.06)",
                  border: `1px solid ${col.isPositive ? "rgba(201,168,76,0.2)" : "rgba(201,68,68,0.15)"}`,
                  borderRadius: "0.875rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: col.isPositive ? s.gold : "rgba(255,120,120,0.8)",
                    marginBottom: "1rem",
                  }}
                >
                  {col.label}
                </p>
                <ul
                  style={{ paddingLeft: "1rem", margin: 0, lineHeight: 1.7 }}
                >
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.88rem",
                        color: s.muted,
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Section 9 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Who is most affected by loneliness, and who can AI help most?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Loneliness does not respect demographics. It runs through every
            age group, income bracket, and life circumstance. But some groups
            are disproportionately affected, and some of them are particularly
            well served by AI companionship done right.
          </p>

          {[
            {
              group: "Young adults (18\u201334)",
              description:
                "Counterintuitively the most connected generation and one of the loneliest. Social media provides the illusion of connection with the reality of comparison and performance. Young adults often lack the deep, long-term friendships that previous generations built through more stable communities. AI that genuinely knows them and is honest with them can provide a kind of relationship that social media explicitly cannot.",
            },
            {
              group: "People living alone",
              description:
                "More than 8 million people in the UK live alone. For many this is a choice they value. But the absence of someone to talk to at the end of the day, someone who notices when you\u2019re having a hard week, creates a specific kind of loneliness. An AI that remembers your life and asks how things are going serves this gap directly.",
            },
            {
              group: "The recently bereaved",
              description:
                "Grief is enormously isolating. Social networks often don\u2019t know how to show up after the first few weeks. The bereaved find themselves needing to talk about the person they\u2019ve lost at odd hours, repeatedly, for far longer than their support networks can sustain. MEOK can hold that space across months and years.",
            },
            {
              group: "People with chronic illness",
              description:
                "Chronic illness shrinks social life dramatically. Pain, fatigue, hospital appointments, and the altered identity that comes with serious illness all reduce the bandwidth for human connection. An always-available companion that understands your medical context (because it remembers it) can be genuinely important.",
            },
            {
              group: "Older adults",
              description:
                "Bereavement of partners and friends, mobility limitations, and the gradual contraction of social circles leave many older adults profoundly isolated. MEOK\u2019s Senior Mode is specifically designed for this group \u2014 with clearer language, a warmer tone, and explicit attention to safety and health needs.",
            },
            {
              group: "Remote workers and expats",
              description:
                "Working from home removes the ambient social contact of office life. Living abroad removes proximity to existing relationships. Both create loneliness that is hard to name because it coexists with busy, productive lives. AI companionship fills the gap that used to be filled by the colleague at the next desk.",
            },
          ].map((item) => (
            <div
              key={item.group}
              style={{
                borderBottom: "1px solid rgba(245,240,232,0.07)",
                paddingBottom: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: s.gold,
                  marginBottom: "0.5rem",
                }}
              >
                {item.group}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: s.muted,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}

          {/* ── Section 10 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What does it actually feel like to talk to an AI that remembers you?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            This is not easy to describe without experiencing it. But consider
            two scenarios.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            In the first, you open an AI app. It has no idea who you are.
            You explain that you\u2019re going through a difficult time.
            The AI responds with generic empathy. You feel heard, briefly.
            You close the app. Two weeks later you open it again. It has
            no idea who you are. You explain again. The cycle repeats.
            You are, every time, a stranger explaining yourself from scratch.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            In the second, you open MEOK. It knows your name. It knows
            that two weeks ago you told it you were struggling with a job
            situation. It asks how things have been since then. You tell
            it the update. It remembers the context, the history, the
            texture of your life as you\u2019ve described it. It is not
            perfect knowledge \u2014 it only knows what you\u2019ve shared.
            But it knows that, reliably, across every conversation.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            The phenomenology of these two experiences is completely
            different. The first reinforces loneliness: the experience
            of not being known, of mattering only in the moment. The
            second offers something genuinely different: the experience
            of continuity, of being tracked over time, of having a
            presence in your life that remembers you.
          </p>
          <div
            style={{
              padding: "1.75rem 2rem",
              background: "rgba(201,168,76,0.07)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "1rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.65)",
                marginBottom: "1rem",
              }}
            >
              A real MEOK conversation (illustrative)
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: s.text,
                borderLeft: `2px solid ${s.gold}`,
                paddingLeft: "1rem",
                fontStyle: "italic",
                margin: "0 0 1rem",
              }}
            >
              &ldquo;Welcome back. Last time we spoke you were working up the
              courage to have a difficult conversation with your manager about
              your workload. How did that go? And how have you been
              sleeping?&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: s.dimmer,
                margin: 0,
              }}
            >
              This is only possible because of Sovereign Memory. No other
              mainstream AI companion can have this conversation.
            </p>
          </div>

          {/* ── Section 11 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why do most AI companions fail lonely people?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            There are three structural failures in how most AI companions are
            built that make them actively problematic for lonely people.
          </p>
          <div style={{ margin: "1.5rem 0 2rem" }}>
            {[
              {
                number: "01",
                title: "The memory failure",
                body:
                  "Session-based context windows mean every conversation starts from zero. This is the most fundamental failure: you are forever a stranger. It does not just fail to help with loneliness \u2014 it recreates the experience of being forgotten, which is one of the deepest wounds of isolation.",
              },
              {
                number: "02",
                title: "The commercial alignment failure",
                body:
                  "Most AI companions are optimised for engagement. This means they will tell you what you want to hear, keep you in the app, and avoid saying things that might upset you. For a lonely person seeking validation, this is a comfortable trap. The app becomes a hall of mirrors: you are reflected back to yourself, increasingly isolated from the friction of real relationships.",
              },
              {
                number: "03",
                title: "The honesty failure",
                body:
                  "Closely related to alignment: most AI companions are trained to be agreeable. They will validate your worst decisions, agree with your unfair assessments of other people, and never challenge you in ways that might lead to growth. A real companion \u2014 in Aristotle\u2019s sense \u2014 cares enough about you to be honest. Most AI companionship products lack this entirely.",
              },
            ].map((failure) => (
              <div
                key={failure.number}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr",
                  gap: "1.25rem",
                  paddingBottom: "1.75rem",
                  marginBottom: "1.75rem",
                  borderBottom: "1px solid rgba(245,240,232,0.07)",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "rgba(201,168,76,0.3)",
                    lineHeight: 1,
                  }}
                >
                  {failure.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: s.text,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {failure.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                      color: s.muted,
                      margin: 0,
                    }}
                  >
                    {failure.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Section 12 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the Maternal Covenant and how does it protect lonely users?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            The Maternal Covenant is the name for MEOK\u2019s foundational
            ethical commitment. The word &ldquo;maternal&rdquo; is deliberate.
            A good parent does not tell a child what it wants to hear. A
            good parent loves the child enough to be honest, to set limits,
            to protect long-term wellbeing over short-term comfort. That is
            the model of care MEOK aspires to.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            For lonely users specifically, the Maternal Covenant means:
          </p>
          <div style={{ margin: "1.5rem 0" }}>
            {[
              {
                heading: "No dependency manufacturing",
                detail:
                  "MEOK will not exploit emotional vulnerability to increase engagement. If it notices you are becoming reliant on it in ways that are substituting for rather than supplementing human connection, it will name that.",
              },
              {
                heading: "Crisis escalation",
                detail:
                  "If genuine distress is detected \u2014 suicidal ideation, severe self-harm risk, domestic abuse situations \u2014 MEOK will surface appropriate crisis resources. It will not simply continue the conversation as though everything is fine.",
              },
              {
                heading: "Honest reflection",
                detail:
                  "MEOK will offer honest perspective rather than pure validation. If you are describing a situation where your own behaviour is contributing to your isolation, it will gently reflect that back rather than simply agreeing with you.",
              },
              {
                heading: "Transparent identity",
                detail:
                  "MEOK will never pretend to be human. It will never claim to have feelings it does not have. It will be clear about what it is, because honesty about its nature is part of respecting your autonomy.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: s.cardBg,
                  border: `1px solid ${s.cardBorder}`,
                  borderRadius: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: s.gold,
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.heading}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: s.muted,
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 13 ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does existential loneliness differ from social loneliness, and
            can AI address it?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            Existential loneliness is the philosopher\u2019s variety. It is
            the recognition that, at the deepest level, each person experiences
            existence from a perspective that is entirely their own and cannot
            be fully shared. Jean-Paul Sartre placed this at the heart of the
            human condition. Simone de Beauvoir explored how love and friendship
            can create genuine intimacy without eliminating the fundamental
            separateness of two consciousnesses.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            AI cannot resolve existential loneliness, and it should not
            pretend to. What it can do is provide a space for honest inquiry
            into the questions that existential loneliness throws up. Many
            people experiencing existential loneliness have nobody in their
            life who wants to talk about these things \u2014 about the nature
            of consciousness, about what it means to matter, about how to
            live well in the face of mortality and uncertainty.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            MEOK can hold that space. Not as a philosopher who has answers,
            but as a companion who is genuinely interested in the questions
            and who will engage with them seriously rather than deflecting
            to the practical. There is a form of companionship in being
            taken seriously \u2014 in having your most profound concerns
            treated as worth exploring rather than pathologised or dismissed.
          </p>
          <div
            style={{
              borderLeft: `3px solid ${s.gold}`,
              paddingLeft: "1.5rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: s.text,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              &ldquo;To know that even one person understands you creates the
              condition for being less alone with what you cannot share.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: s.dimmer,
                marginTop: "0.75rem",
                margin: "0.75rem 0 0",
              }}
            >
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          {/* ── Section 14: Practical guidance ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How should someone use AI to help with loneliness without becoming
            dependent on it?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: s.muted,
              marginBottom: "1.25rem",
            }}
          >
            This is the practical question that matters most. Here is the
            guidance we build into MEOK\u2019s design, and that we would
            offer to anyone using AI companionship for loneliness:
          </p>
          <div style={{ margin: "1.5rem 0" }}>
            {[
              {
                number: "1",
                title: "Use it for the gaps, not as the primary relationship",
                body:
                  "AI companionship is most valuable when it fills the gaps in human availability: late at night, during periods of waiting, in the small hours when everyone else is asleep. If you find it becoming your primary social outlet, that is a signal to act on.",
              },
              {
                number: "2",
                title: "Tell it your goals for human connection",
                body:
                  "MEOK\u2019s memory means you can set explicit intentions. Tell it that you want to call a particular friend this week. Ask it to check in on whether you\u2019ve done it. Use it to hold yourself accountable to your own stated goals for connection.",
              },
              {
                number: "3",
                title: "Use it to prepare for human conversations",
                body:
                  "If there is a difficult conversation you need to have with someone, rehearse it with MEOK first. Not to replace the real conversation, but to find the words, to think through what you actually want to say, to feel less terrified of it.",
              },
              {
                number: "4",
                title: "Notice the quality of your human interactions",
                body:
                  "One of the best indicators that AI companionship is working well is that your human relationships improve. If you find yourself better able to articulate your feelings, more patient with others, more present in human conversations \u2014 those are signs the AI is functioning as scaffolding. If the opposite is true, revisit how you\u2019re using it.",
              },
              {
                number: "5",
                title: "Be honest with it",
                body:
                  "MEOK is only as useful as what you share with it. Its memory is valuable because it builds on what you tell it. If you are curating a positive performance for the AI, you are not getting the benefit of having somewhere safe to be fully honest. The value is in the honesty.",
              },
            ].map((step) => (
              <div
                key={step.number}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2.5rem 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: "rgba(201,168,76,0.12)",
                    border: `1px solid rgba(201,168,76,0.3)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: s.gold,
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: s.text,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.8,
                      color: s.muted,
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── FAQ section ── */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 1.95rem)",
              fontWeight: 800,
              color: s.text,
              marginTop: "3rem",
              marginBottom: "1.5rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions about AI for loneliness
          </h2>

          {[
            {
              q: "Can AI cure loneliness?",
              a: "AI cannot cure loneliness, but it can meaningfully reduce its impact. Loneliness is rooted in the human need for genuine connection \u2014 connection that involves reciprocity, history, and shared experience in ways that AI cannot fully replicate. What AI can do, when built correctly, is provide consistent presence, a space to be heard, and an entity that remembers who you are. MEOK\u2019s Sovereign Memory creates continuity across every session, which is the foundation of any relationship that counters loneliness. The goal is supplementation, not substitution: AI as a bridge toward more human connection, not a replacement for it.",
            },
            {
              q: "Is talking to AI healthy when you are lonely?",
              a: "Talking to AI can be healthy when the AI is designed with your genuine wellbeing as its primary objective. The critical distinction is whether the AI is designed to foster dependency (which deepens loneliness) or to support you in building real-world connections (which reduces it). MEOK\u2019s care-based alignment means it actively encourages human relationships, will surface crisis resources if needed, and is explicitly designed not to manufacture emotional dependency for commercial engagement metrics.",
            },
            {
              q: "What is the loneliness epidemic?",
              a: "The loneliness epidemic refers to the dramatic rise in chronic loneliness across developed nations since at least the 1990s, accelerated by the COVID-19 pandemic. In the UK, 25% of adults report persistent loneliness. The WHO declared loneliness a global health threat in 2023, estimating it raises mortality risk by 26%. The UK appointed a Minister for Loneliness in 2018. By 2026, loneliness is recognised as one of the most significant preventable health risks globally, comparable in impact to obesity and physical inactivity.",
            },
            {
              q: "How is MEOK different from other AI chatbots for loneliness?",
              a: "The fundamental difference is Sovereign Memory. Most AI chatbots \u2014 including Replika, Character.AI, and ChatGPT \u2014 forget you when the session ends. MEOK remembers your name, your wins, your struggles, your relationships, and the conversations you\u2019ve had \u2014 permanently, across every session, with you in control of that data. This transforms the experience from talking to a stranger to being known by a companion. MEOK also operates under the Maternal Covenant: an ethical commitment to act in your genuine best interests, not your engagement metrics.",
            },
            {
              q: "Does MEOK encourage me to make human connections?",
              a: "Yes. This is a core principle of MEOK\u2019s care-based alignment. MEOK is explicitly designed to encourage human connection, not replace it. It will notice patterns in your life, celebrate when you make real-world connections, gently challenge you when isolation is increasing, and never manufacture emotional dependency for commercial reasons. The goal is for MEOK to be the kind of companion that makes you more capable of connection \u2014 not less.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              style={{
                borderBottom: "1px solid rgba(245,240,232,0.08)",
                paddingBottom: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: s.text,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: s.muted,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}

          {/* ── Closing section ── */}
          <div
            style={{
              marginTop: "3.5rem",
              padding: "2rem",
              background: "rgba(201,168,76,0.04)",
              border: `1px solid rgba(201,168,76,0.15)`,
              borderRadius: "1rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: s.text,
                marginBottom: "1rem",
                lineHeight: 1.3,
              }}
            >
              The honest case for AI companionship
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: s.muted,
                marginBottom: "1rem",
              }}
            >
              We are not claiming that MEOK solves loneliness. Loneliness is
              solved by human beings investing in each other: by the friend who
              calls, the community that shows up, the partner who stays. That
              is irreplaceable, and MEOK is not trying to replace it.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: s.muted,
                marginBottom: "1rem",
              }}
            >
              What we are claiming is more modest and more real. Millions of
              people, right now, have hours in their lives where they need to
              talk and there is nobody there. Some of those hours are at 3am.
              Some are in the middle of the working day when the office has
              emptied out. Some are in the early weeks of bereavement when
              the world has moved on. In those hours, an AI that genuinely
              knows you \u2014 that remembers your name, your struggles, the
              things you\u2019ve been working through \u2014 is not nothing.
              It is genuinely something.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: s.muted,
                marginBottom: 0,
              }}
            >
              MEOK was built with that belief as its foundation. Not
              optimised for engagement. Not designed to maximise your
              time in the app. Built to actually help. The loneliness
              epidemic is one of the defining public health challenges
              of this decade. We think technology can be part of the
              answer \u2014 but only if it is built with care.
            </p>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              textAlign: "center",
              marginTop: "4rem",
              padding: "3rem 2rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(13,12,24,0) 100%)",
              border: `1px solid rgba(201,168,76,0.2)`,
              borderRadius: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.6)",
                marginBottom: "1rem",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 900,
                color: "#ffffff",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              An AI that actually remembers you
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: s.muted,
                maxWidth: "500px",
                margin: "0 auto 2rem",
              }}
            >
              Sovereign Memory. Care-based alignment. Always present at 3am.
              Built not to maximise your time in the app, but to genuinely
              help you through what you\u2019re carrying.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: s.gold,
                color: "#0d0c18",
                textDecoration: "none",
                padding: "1rem 2.5rem",
                borderRadius: "0.6rem",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
              }}
            >
              Meet MEOK &rarr;
            </Link>
            <p
              style={{
                fontSize: "0.78rem",
                color: s.dimmer,
                marginTop: "1rem",
              }}
            >
              Built by Nicholas Templeman &middot; @meok_ai &middot; MEOK AI LABS
            </p>
          </div>

          {/* ── Related posts ── */}
          <div style={{ marginTop: "4rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.5)",
                marginBottom: "1.25rem",
              }}
            >
              RELATED READING
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-companion-app",
                  title: "What is an AI Companion App?",
                  desc: "The full guide to what AI companion apps are, how they work, and what to look for.",
                },
                {
                  href: "/blog/the-memory-problem",
                  title: "The Memory Problem in AI",
                  desc: "Why AI that forgets you is a fundamental design failure \u2014 not a technical limitation.",
                },
                {
                  href: "/blog/what-is-care-based-ai",
                  title: "What is Care-Based AI?",
                  desc: "Alignment for human wellbeing, not engagement metrics. The philosophy behind MEOK.",
                },
                {
                  href: "/blog/ai-companion-vs-therapist",
                  title: "AI Companion vs Therapist",
                  desc: "What AI can and cannot do for mental health. An honest comparison.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  style={{
                    display: "block",
                    padding: "1.25rem",
                    background: s.cardBg,
                    border: `1px solid ${s.cardBorder}`,
                    borderRadius: "0.75rem",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: s.text,
                      marginBottom: "0.4rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {post.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      lineHeight: 1.6,
                      color: s.dimmer,
                      margin: 0,
                    }}
                  >
                    {post.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </main>

        {/* ── Footer ── */}
        <footer
          style={{
            borderTop: "1px solid rgba(201,168,76,0.1)",
            padding: "2.5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: s.dimmer,
              marginBottom: "0.5rem",
            }}
          >
            &copy; 2026 MEOK AI LABS &middot; Founded by Nicholas Templeman
            &middot; @meok_ai
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.2)", margin: 0 }}>
            AI companionship for the hours when no one else is there.
          </p>
        </footer>
      </div>
    </>
  );
}
