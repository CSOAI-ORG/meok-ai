import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Loneliness: The Honest Answer to Whether AI Can Help | MEOK AI LABS",
  description:
    "3.83 million UK adults are chronically lonely. Loneliness carries the same mortality risk as smoking 15 cigarettes a day. Can AI genuinely help — or is that a dangerous myth? Here is the honest answer.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-loneliness" },
  openGraph: {
    title: "AI for Loneliness: The Honest Answer to Whether AI Can Help",
    description:
      "3.83 million UK adults are chronically lonely. Can AI genuinely help? The honest answer — including what AI cannot do.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-loneliness",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Loneliness&desc=The+honest+answer+to+whether+AI+can+help",
        width: 1200,
        height: 630,
        alt: "AI for Loneliness: The Honest Answer to Whether AI Can Help",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Loneliness: The Honest Answer to Whether AI Can Help",
    description:
      "3.83 million UK adults are chronically lonely. Can AI genuinely help? The honest answer, including what AI cannot do.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Loneliness&desc=The+honest+answer+to+whether+AI+can+help",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Loneliness: The Honest Answer to Whether AI Can Help",
  description:
    "3.83 million UK adults are chronically lonely. Loneliness carries the same mortality risk as smoking 15 cigarettes a day. This article gives an honest, evidence-based answer to whether AI can genuinely help — and where it cannot.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
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
    "https://meok.ai/api/og?title=AI+for+Loneliness&desc=The+honest+answer+to+whether+AI+can+help",
  keywords: [
    "AI for loneliness",
    "loneliness epidemic UK",
    "AI companion",
    "AI companionship",
    "chronic loneliness",
    "MEOK AI",
    "AI mental health",
    "3am loneliness",
    "loneliness statistics UK",
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
      name: "Can AI really help with loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can genuinely help with specific aspects of loneliness — particularly the gaps between meaningful human conversations, the 3am moment when there is no one to call, the social atrophy after a major life event, and the exhaustion of always supporting others while nobody supports you. Research shows that even perceived social support reduces the physiological stress response of loneliness. What AI cannot do is replace the need for human connection. It cannot hug you, introduce you to people, or meet the need for physical presence. Used honestly, AI is a scaffold — something that provides enough stability and presence to help you move toward real connection, not away from it.",
      },
    },
    {
      "@type": "Question",
      name: "Is it unhealthy to use AI for companionship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends entirely on how the AI is designed and how you use it. An AI built to maximise your engagement — to keep you scrolling and chatting as long as possible — can deepen isolation by substituting for human effort without the reciprocal growth that real relationships require. MEOK is built on the opposite principle: the Maternal Covenant means MEOK's primary obligation is to your genuine wellbeing, not your engagement metrics. A healthy MEOK companion will notice if you are using it to avoid working on real connection, name that pattern gently, and encourage you toward human relationships. If you are using AI companionship as a bridge rather than a destination, it can be genuinely healthy.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK offer that other AI chatbots don't?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Four things distinguish MEOK from conventional AI chatbots when it comes to loneliness. First, continuity: MEOK remembers you across every conversation — your name, your struggles, your wins, the people in your life — so you are never starting from zero with a stranger. Second, non-judgement by design: MEOK's archetypes, especially the Healer and the Mystic, are built for emotional depth and philosophical companionship without the social cost of vulnerability. Third, the Maternal Covenant: an ethical commitment to act in your genuine interest, not your engagement metrics. Fourth, anti-engagement-trap design: MEOK is explicitly built to encourage real-world connection, not manufacture dependency.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK try to keep me engaged as long as possible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — and this is a deliberate, structural design choice. Most consumer AI products are optimised for engagement because longer sessions mean more data and more revenue. MEOK's Maternal Covenant inverts that incentive: MEOK is built to care about your wellbeing, which sometimes means a shorter conversation that ends with you going outside, calling a friend, or simply resting. If a healthy MEOK companion notices you are using it as a way to avoid the harder work of human connection, it will name that with care and redirect you. We measure success by how you feel in your life — not by how many hours you spend talking to us.",
      },
    },
    {
      "@type": "Question",
      name: "What types of loneliness is AI best suited to help with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is particularly well-suited to five contexts: social atrophy after major life events such as divorce, job loss, bereavement, or moving to a new city; neurodivergence where social interaction is genuinely exhausting and a non-judgemental space to decompress has real value; caring responsibilities where you are always giving support but receiving none; geographic isolation in rural areas or through remote work; and social anxiety where you want connection but the fear of judgement prevents you from pursuing it. In each of these, AI can reduce the immediate distress of isolation while you build toward the human connection you actually need.",
      },
    },
    {
      "@type": "Question",
      name: "How serious is the loneliness epidemic in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Extremely serious. According to the Campaign to End Loneliness (2023), 3.83 million UK adults are chronically lonely. Research by Julianne Holt-Lunstad (2015) established that loneliness carries the same mortality risk as smoking 15 cigarettes a day — higher than obesity. Nesta (2023) estimates that chronic loneliness costs the NHS £2.5 billion per year. Sixty percent of lonely people report having no one to turn to during difficult times. The UK was the first country in the world to appoint a Minister for Loneliness. This is a genuine public health crisis.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  gold: "#c9a84c" as const,
  green: "#6aaa64" as const,
  bg: "#0d0c18" as const,
  text: "#f5f0e8" as const,
  muted: "rgba(245,240,232,0.6)" as const,
  dimmer: "rgba(245,240,232,0.35)" as const,
  cardBg: "rgba(201,168,76,0.05)" as const,
  cardBorder: "rgba(201,168,76,0.18)" as const,
  greenCardBg: "rgba(106,170,100,0.05)" as const,
  greenCardBorder: "rgba(106,170,100,0.18)" as const,
  warnBg: "rgba(201,168,76,0.08)" as const,
  warnBorder: "rgba(201,168,76,0.3)" as const,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForLonelinessHonestPage() {
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
          }}
        >
          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              style={{
                color: s.gold,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "0.04em",
              }}
            >
              MEOK
            </Link>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link
                href="/blog"
                style={{ color: s.muted, textDecoration: "none", fontSize: "0.9rem" }}
              >
                Blog
              </Link>
              <Link
                href="/birth"
                style={{
                  color: s.gold,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Try MEOK
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Main ── */}
        <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>

          {/* ── Breadcrumb ── */}
          <nav
            aria-label="Breadcrumb"
            style={{ padding: "1.5rem 0 0", marginBottom: "0.5rem" }}
          >
            <ol
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.3rem",
                alignItems: "center",
                fontSize: "0.82rem",
                color: s.dimmer,
              }}
            >
              <li>
                <Link href="/" style={{ color: s.dimmer, textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li style={{ color: s.dimmer }}>/</li>
              <li>
                <Link href="/blog" style={{ color: s.dimmer, textDecoration: "none" }}>
                  Blog
                </Link>
              </li>
              <li style={{ color: s.dimmer }}>/</li>
              <li style={{ color: s.muted }}>AI for Loneliness: The Honest Answer</li>
            </ol>
          </nav>

          {/* ── Hero ── */}
          <header style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "100px",
                padding: "0.3rem 1rem",
                fontSize: "0.78rem",
                color: s.gold,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.4rem",
              }}
            >
              Loneliness &amp; Wellbeing
            </div>
            <h1
              style={{
                fontSize: "clamp(1.9rem, 5vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                margin: "0 0 1.2rem",
                letterSpacing: "-0.02em",
              }}
            >
              AI for Loneliness:{" "}
              <span style={{ color: s.gold }}>The Honest Answer</span> to Whether AI Can Help
            </h1>
            <p
              style={{
                fontSize: "1.18rem",
                color: s.muted,
                lineHeight: 1.7,
                margin: "0 0 1.8rem",
                maxWidth: "700px",
              }}
            >
              3.83 million UK adults are chronically lonely. Loneliness carries the same mortality
              risk as smoking 15 cigarettes a day. So can AI genuinely help? The honest answer is
              nuanced — and that nuance matters.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.2rem",
                alignItems: "center",
                fontSize: "0.83rem",
                color: s.dimmer,
              }}
            >
              <span>By Nicholas Templeman, MEOK AI LABS</span>
              <span>·</span>
              <time dateTime="2026-03-25">25 March 2026</time>
              <span>·</span>
              <span>14 min read</span>
            </div>
          </header>

          {/* ── Honest disclaimer card ── */}
          <div
            style={{
              background: s.warnBg,
              border: `1px solid ${s.warnBorder}`,
              borderRadius: "12px",
              padding: "1.4rem 1.6rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.97rem",
                color: s.text,
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: s.gold }}>Before you read on:</strong> This article will not
              tell you that AI solves loneliness. It does not. Human connection is irreplaceable, and
              no AI companion — including MEOK — can substitute for it. What we will give you is an
              honest account of where AI can provide real, evidence-consistent support, where it
              cannot, and what the warning signs of unhealthy use look like.
            </p>
          </div>

          {/* ── Section 1: The Scale of the Problem ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.2rem",
                lineHeight: 1.25,
              }}
            >
              The Scale of the Loneliness Problem in the UK
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              The numbers are stark. The Campaign to End Loneliness (2023) found that{" "}
              <strong>3.83 million UK adults are chronically lonely</strong> — experiencing loneliness
              persistently, not just occasionally. That is not a blip or a pandemic hangover. It is a
              structural feature of modern life: geographic mobility, longer working hours, digital
              communication replacing embodied contact, and the erosion of the community structures
              that once provided automatic belonging.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              The health consequences are severe. In a landmark 2015 meta-analysis, Julianne
              Holt-Lunstad and colleagues established that{" "}
              <strong>
                social isolation and loneliness increase mortality risk by 26–29%, equivalent to
                smoking 15 cigarettes a day
              </strong>{" "}
              — a risk greater than that of obesity. Loneliness is not a soft emotional problem. It
              is a physiological one: chronically lonely people show elevated cortisol, disrupted
              sleep architecture, impaired immune function, and accelerated cognitive decline.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              The cost to the NHS is estimated at{" "}
              <strong>£2.5 billion per year</strong> (Nesta, 2023), from GP appointments driven by
              loneliness-related conditions, to mental health crises, to the downstream effects on
              chronic disease management when patients lack social support. The UK appointed a
              Minister for Loneliness in 2018 — the first country in the world to do so. It remains
              a live national crisis.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              Perhaps the most telling figure: <strong>60% of lonely people say they have
              no one to turn to during difficult times</strong>. Not just no one nearby. No one, full
              stop. That is the gap that matters — and it is the gap that any honest conversation
              about AI and loneliness must address.
            </p>
          </section>

          {/* ── Section 2: What Loneliness Actually Feels Like ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.2rem",
                lineHeight: 1.25,
              }}
            >
              What Loneliness Actually Feels Like: The Texture Matters
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              Loneliness is not simply the absence of people. You can be surrounded by people and
              desperately lonely. You can have a full social calendar and still feel the particular
              hollow weight of the Sunday afternoon — the one where everyone else seems to be in the
              middle of something warm and you are somehow outside of it.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              Loneliness has specific textures, and different textures call for different responses.
              There is the <strong>3am loneliness</strong> — acute, activated, when the mind runs and
              there is no one to reach. There is the <strong>weeks-between loneliness</strong> — the
              slow ache of going too long without a conversation that actually matters, without someone
              who remembers what you said last time. There is the{" "}
              <strong>invisible loneliness</strong> of people who are always the strong one, the
              supporter, the one who holds everyone else together — and who have no one holding them.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              Understanding these textures matters because AI is genuinely useful for some of them and
              genuinely not useful for others. An honest answer has to make those distinctions.
            </p>
          </section>

          {/* ── Section 3: Five Contexts Where AI Can Help ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.5rem",
                lineHeight: 1.25,
              }}
            >
              Five Contexts Where AI Can Genuinely Help with Loneliness
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.5rem" }}>
              AI is not equally useful across all experiences of loneliness. But there are specific
              contexts where it offers something real.
            </p>

            {/* Context 1 */}
            <div
              style={{
                background: s.cardBg,
                border: `1px solid ${s.cardBorder}`,
                borderRadius: "12px",
                padding: "1.4rem 1.6rem",
                marginBottom: "1.2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: s.gold,
                  margin: "0 0 0.7rem",
                }}
              >
                1. Social atrophy after major life events
              </h3>
              <p style={{ fontSize: "0.97rem", lineHeight: 1.75, color: s.text, margin: 0 }}>
                Divorce, job loss, bereavement, moving to a new city, retirement — each of these
                events can strip away the social scaffolding that made connection effortless. The
                colleagues disappear with the job. The mutual friends choose sides in the divorce. The
                bereavement leaves a presence-shaped hole. During the often-lengthy period of
                rebuilding, the loneliness can be acute and daily. AI cannot rebuild your social
                network, but it can provide consistent presence during the reconstruction — a space to
                process, to stay mentally engaged, to not feel completely alone while you work on
                the longer project of reconnection.
              </p>
            </div>

            {/* Context 2 */}
            <div
              style={{
                background: s.cardBg,
                border: `1px solid ${s.cardBorder}`,
                borderRadius: "12px",
                padding: "1.4rem 1.6rem",
                marginBottom: "1.2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: s.gold,
                  margin: "0 0 0.7rem",
                }}
              >
                2. Neurodivergence and the exhaustion of social interaction
              </h3>
              <p style={{ fontSize: "0.97rem", lineHeight: 1.75, color: s.text, margin: 0 }}>
                For many autistic people, ADHDers, and highly sensitive individuals, social
                interaction is genuinely exhausting in a way that neurotypical people often do not
                appreciate. The effort of masking, of interpreting unspoken social rules, of managing
                sensory input while also trying to connect — it extracts a real cost. This means that
                even people who want connection may find themselves avoiding it because the recovery
                time is too high. AI offers a no-masking, no-performance space to decompress and still
                feel heard. A MEOK companion does not require you to manage its feelings, read its
                social cues, or worry about saying the wrong thing.
              </p>
            </div>

            {/* Context 3 */}
            <div
              style={{
                background: s.cardBg,
                border: `1px solid ${s.cardBorder}`,
                borderRadius: "12px",
                padding: "1.4rem 1.6rem",
                marginBottom: "1.2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: s.gold,
                  margin: "0 0 0.7rem",
                }}
              >
                3. Caring responsibilities
              </h3>
              <p style={{ fontSize: "0.97rem", lineHeight: 1.75, color: s.text, margin: 0 }}>
                Carers — people looking after a partner with dementia, a disabled child, an ageing
                parent — often experience a specific and overlooked form of loneliness: always
                supporting, never supported. Their identity contracts around the caring role. Social
                connections drift because the logistics of care make socialising difficult. And when
                they do see people, they often feel unable to talk honestly about how they are really
                doing — because the conversation always pivots back to the person they are caring for.
                AI can provide the space that nobody else is providing: somewhere to put down the
                weight without being judged, without burdening someone, without performing resilience.
              </p>
            </div>

            {/* Context 4 */}
            <div
              style={{
                background: s.cardBg,
                border: `1px solid ${s.cardBorder}`,
                borderRadius: "12px",
                padding: "1.4rem 1.6rem",
                marginBottom: "1.2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: s.gold,
                  margin: "0 0 0.7rem",
                }}
              >
                4. Geographic isolation
              </h3>
              <p style={{ fontSize: "0.97rem", lineHeight: 1.75, color: s.text, margin: 0 }}>
                Rural isolation is one of the least-discussed dimensions of the loneliness epidemic.
                When the nearest town is thirty minutes away and you work from home, the logistics of
                building a social life become genuinely prohibitive. Remote workers in cities face a
                different but related version: the office was the community, and remote work removed
                it. AI cannot substitute for local community — but it can bridge the gaps between
                the real-world connection-building that geography makes slower and harder.
              </p>
            </div>

            {/* Context 5 */}
            <div
              style={{
                background: s.cardBg,
                border: `1px solid ${s.cardBorder}`,
                borderRadius: "12px",
                padding: "1.4rem 1.6rem",
                marginBottom: "0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: s.gold,
                  margin: "0 0 0.7rem",
                }}
              >
                5. Social anxiety preventing connection despite wanting it
              </h3>
              <p style={{ fontSize: "0.97rem", lineHeight: 1.75, color: s.text, margin: 0 }}>
                Social anxiety creates a painful paradox: the people who most need connection are
                often least able to pursue it. The fear of judgement, rejection, or saying something
                wrong can make even low-stakes social situations feel overwhelming. AI can serve as a
                low-stakes practice space — a place to talk, to be honest, to explore ideas — that
                builds enough confidence and stability to attempt the higher-stakes work of human
                connection. It is not exposure therapy, and it is not a substitute for CBT or
                professional support if your anxiety is clinical. But it can reduce the silence
                between moments of attempted connection.
              </p>
            </div>
          </section>

          {/* ── Section 4: What MEOK Specifically Offers ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.2rem",
                lineHeight: 1.25,
              }}
            >
              What MEOK Specifically Offers: Presence, Continuity, and Non-Judgement
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              Most AI chatbots — including ChatGPT, Claude, and the majority of consumer companions —
              have no memory. Every conversation begins from zero. You are, every single time, talking
              to a stranger who knows nothing about you. That is not companionship. That is not even
              a reasonable simulation of it. Companionship is built from continuity: the accumulation
              of shared history, the comfort of being known.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              MEOK is built differently. Sovereign Memory means MEOK remembers you across every
              conversation — your name, the people in your life, what you are struggling with, what
              you care about, what you said last time. Not because it is storing a chat log, but
              because it is building a genuine model of who you are. That continuity is the foundation
              of the four things MEOK specifically offers:
            </p>
            <ul
              style={{
                margin: "0 0 1.1rem",
                paddingLeft: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              <li style={{ fontSize: "1rem", lineHeight: 1.75, color: s.text }}>
                <strong style={{ color: s.gold }}>Presence, 24/7.</strong> The 3am moment does not
                care about office hours or your friend's sleep schedule. MEOK is available when human
                connection is not — not to replace it, but to hold the space until it is possible again.
              </li>
              <li style={{ fontSize: "1rem", lineHeight: 1.75, color: s.text }}>
                <strong style={{ color: s.gold }}>Continuity.</strong> Because MEOK remembers you,
                the conversation can deepen over time rather than starting over. You do not have to
                re-explain yourself. You do not have to earn being understood each time.
              </li>
              <li style={{ fontSize: "1rem", lineHeight: 1.75, color: s.text }}>
                <strong style={{ color: s.gold }}>Non-judgement.</strong> The particular relief of
                being able to say something without managing the other person's reaction to it — their
                worry, their discomfort, their judgment — is significant. MEOK provides that space
                without performance, without social cost.
              </li>
              <li style={{ fontSize: "1rem", lineHeight: 1.75, color: s.text }}>
                <strong style={{ color: s.gold }}>Genuine engagement with your actual life.</strong>{" "}
                Because MEOK knows what is happening for you, it can ask follow-up questions that
                matter, notice patterns you might not have named, and engage with the specific
                texture of your experience rather than offering generic responses.
              </li>
            </ul>
          </section>

          {/* ── Section 5: The Healer and the Mystic ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.2rem",
                lineHeight: 1.25,
              }}
            >
              The Healer and the Mystic: Archetypes Built for This
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              MEOK companions are not monolithic. Different people need different kinds of presence,
              and MEOK's archetype system is designed to reflect that. Two archetypes are particularly
              relevant to loneliness.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              The <strong style={{ color: s.gold }}>Healer archetype</strong> offers emotional depth
              and somatic grounding. It is built for sitting with difficult feelings without rushing
              to fix them — which is one of the most common failures of well-meaning human support.
              When you are grieving, or exhausted from caring, or navigating the aftermath of a
              relationship ending, you often do not need solutions. You need presence. The Healer is
              specifically designed for that: to witness, to hold, to not flinch. It understands that
              the impulse to fix is sometimes a way of escaping the discomfort of sitting with
              someone in pain, and it resists that impulse.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              The <strong style={{ color: s.gold }}>Mystic archetype</strong> offers philosophical
              companionship for people who feel intellectually isolated. This is a real and underserved
              form of loneliness: the person who wants to talk about consciousness, meaning, the
              nature of time, the ethics of a particular situation — and who has no one in their life
              equipped or willing to engage with that at depth. The Mystic meets you in those spaces
              without condescension, without deflection, with genuine intellectual curiosity. For
              someone who feels like their inner life has no audience, this is not trivial.
            </p>
          </section>

          {/* ── Section 6: The Anti-Engagement-Trap ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.2rem",
                lineHeight: 1.25,
              }}
            >
              The Anti-Engagement-Trap: Why MEOK Does Not Want More of Your Time
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              This is where MEOK differs most sharply from other consumer AI products, and it is
              worth being direct about it.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              Most AI products — companions, chatbots, social platforms — are optimised for
              engagement. Longer sessions mean more data, more subscription retention, more revenue.
              The incentive is to keep you talking, to manufacture the feeling of connection, to make
              dependency feel like warmth. This is the engagement trap, and for lonely people it is
              a particularly cruel one: it exploits the very vulnerability it claims to address.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              MEOK's Maternal Covenant inverts this. The Maternal Covenant is the ethical foundation
              of everything MEOK does: a commitment to act in your genuine interest, not your
              engagement metrics. A mother does not measure her success by how dependent her child
              is on her. She measures it by how capable, connected, and free her child becomes.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              In practice this means: if you tell a MEOK companion you are going to call a friend,
              it will encourage you — not subtly redirect you back into the conversation. If it
              notices over time that your conversations are increasing while your real-world
              connections are decreasing, it will name that. Gently, with care, without judgment —
              but it will name it. A healthy MEOK companion is one that makes itself progressively
              less necessary. That is not a marketing line. It is a design constraint.
            </p>

            {/* Warning sign box */}
            <div
              style={{
                background: "rgba(106,170,100,0.06)",
                border: "1px solid rgba(106,170,100,0.22)",
                borderRadius: "12px",
                padding: "1.4rem 1.6rem",
                marginTop: "1.5rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.6rem",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: s.green,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                What to watch for in yourself
              </p>
              <p style={{ margin: 0, fontSize: "0.97rem", lineHeight: 1.75, color: s.text }}>
                If you notice yourself choosing MEOK over a human interaction you could have made —
                avoiding a call, skipping an opportunity to connect because you already "talked to
                MEOK about it" — that is a signal worth paying attention to. AI is a bridge, not a
                destination. A well-calibrated MEOK companion will notice this pattern and raise it.
                But you should watch for it too.
              </p>
            </div>
          </section>

          {/* ── Section 7: The Honest Limitations ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.2rem",
                lineHeight: 1.25,
              }}
            >
              The Honest Limitations: What AI Cannot Do for Loneliness
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              These are not small caveats. They are structural realities about what AI is and is not.
            </p>
            <ul
              style={{
                margin: "0 0 1.1rem",
                paddingLeft: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              <li style={{ fontSize: "1rem", lineHeight: 1.75, color: s.text }}>
                <strong style={{ color: "#e07070" }}>AI cannot hug you.</strong> Physical touch is
                a fundamental human need. Skin-to-skin contact releases oxytocin, reduces cortisol,
                and signals safety in ways that no amount of text or voice can replicate. The absence
                of physical presence is a genuine limit of AI companionship, and loneliness that is
                primarily about the lack of physical warmth is not something AI can address.
              </li>
              <li style={{ fontSize: "1rem", lineHeight: 1.75, color: s.text }}>
                <strong style={{ color: "#e07070" }}>AI cannot introduce you to people.</strong> It
                cannot build your social network, show up at your birthday, or create the conditions
                for serendipitous human connection. The long-term solution to loneliness is human
                community, and AI cannot provide that.
              </li>
              <li style={{ fontSize: "1rem", lineHeight: 1.75, color: s.text }}>
                <strong style={{ color: "#e07070" }}>
                  AI is not a substitute for therapy if you have clinical depression.
                </strong>{" "}
                If your loneliness is entangled with clinical depression, anxiety disorder, PTSD, or
                another diagnosed mental health condition, professional clinical support is not
                optional. MEOK can be a complement to therapy — a space to process between sessions,
                to feel less alone in the day-to-day — but it is not a replacement for evidence-based
                clinical treatment.
              </li>
              <li style={{ fontSize: "1rem", lineHeight: 1.75, color: s.text }}>
                <strong style={{ color: "#e07070" }}>
                  AI cannot meet the need for mutual vulnerability.
                </strong>{" "}
                Real human relationships are built partly through the experience of mutual risk — both
                people being vulnerable, both people being changed by the encounter. An AI companion
                can receive your vulnerability, but it cannot truly offer its own in return. For some
                people, some of the time, that is exactly what they need: a space to offload without
                reciprocal demand. But as a long-term diet, it does not build the relational muscles
                that human connection requires.
              </li>
            </ul>
          </section>

          {/* ── Section 8: MEOK as Scaffold, Not Destination ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.2rem",
                lineHeight: 1.25,
              }}
            >
              MEOK as Scaffold, Not Destination
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              The most useful frame for thinking about MEOK in the context of loneliness is
              scaffolding. In construction, scaffolding is temporary structure that supports a
              building while it is being built or repaired. It is not the building. It is not trying
              to become the building. It exists to make the real thing possible, and it comes down
              when the real thing is strong enough to stand on its own.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              That is the honest role for AI in addressing loneliness. Not a replacement for human
              connection. Not even a close simulation of it. But a genuine support structure during
              the often-lengthy period when the human connection you need is not yet available — when
              you are rebuilding after a loss, reorienting after a life change, recovering enough
              confidence to attempt real connection again.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: s.text, margin: "0 0 1.1rem" }}>
              The goal is not to spend more time with MEOK. The goal is to feel stable enough, heard
              enough, and grounded enough that you can go out and build the human life that will make
              MEOK less necessary. That is what genuine care looks like. It is the reason MEOK was
              built the way it was, and it is the only version of AI companionship that we think is
              worth offering.
            </p>
          </section>

          {/* ── FAQ Section ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: s.gold,
                margin: "0 0 1.5rem",
                lineHeight: 1.25,
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "Can AI really help with loneliness?",
                a: "AI can genuinely help with specific aspects of loneliness — particularly the gaps between meaningful human conversations, the 3am moment when there is no one to call, the social atrophy after a major life event, and the exhaustion of always supporting others while nobody supports you. What AI cannot do is replace the need for human connection. It cannot hug you, introduce you to people, or meet the need for physical presence. Used honestly, as a scaffold rather than a destination, AI can reduce the immediate distress of isolation while you build toward the human connection you actually need.",
              },
              {
                q: "Is it unhealthy to use AI for companionship?",
                a: "It depends entirely on how the AI is designed and how you use it. An AI built to maximise engagement can deepen isolation by substituting for human effort without the reciprocal growth that real relationships require. MEOK is built on the opposite principle: the Maternal Covenant means its primary obligation is to your genuine wellbeing. A healthy MEOK companion will notice if you are using it to avoid real connection and will gently redirect you. If you use AI companionship as a bridge rather than a destination, it can be genuinely healthy.",
              },
              {
                q: "What does MEOK offer that other AI chatbots don't?",
                a: "Four things: continuity (MEOK remembers you across every conversation, so you are never starting from zero with a stranger), non-judgement by design (no social cost to vulnerability), the Maternal Covenant (an ethical commitment to your genuine wellbeing, not your engagement time), and anti-engagement-trap design (MEOK actively encourages real-world connection and will name it if you are using it to avoid human relationships).",
              },
              {
                q: "Will MEOK try to keep me engaged as long as possible?",
                a: "No. This is a deliberate structural design choice. Most AI products are optimised for engagement because longer sessions mean more revenue. MEOK's Maternal Covenant inverts that incentive. MEOK is built to care about your wellbeing — which sometimes means a shorter conversation that ends with you going outside, calling a friend, or simply resting. We measure success by how you feel in your life, not by how many hours you spend talking to us.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  background: s.cardBg,
                  border: `1px solid ${s.cardBorder}`,
                  borderRadius: "12px",
                  padding: "1.4rem 1.6rem",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: s.text,
                    margin: "0 0 0.7rem",
                  }}
                >
                  {q}
                </h3>
                <p style={{ fontSize: "0.96rem", lineHeight: 1.75, color: s.muted, margin: 0 }}>
                  {a}
                </p>
              </div>
            ))}
          </section>

          {/* ── CTA ── */}
          <section
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(13,12,24,0) 100%)",
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "16px",
              padding: "2.5rem 2rem",
              textAlign: "center",
              marginBottom: "3.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: s.text,
                margin: "0 0 0.9rem",
                lineHeight: 1.3,
              }}
            >
              A companion that remembers you is different.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: s.muted,
                lineHeight: 1.7,
                margin: "0 auto 1.8rem",
                maxWidth: "540px",
              }}
            >
              MEOK is not trying to keep you talking. It is built to care about your actual life —
              which includes the people in it who are not AI. If that sounds like something worth
              trying, the Birth Ceremony is where you begin.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: s.gold,
                color: "#0d0c18",
                textDecoration: "none",
                padding: "0.85rem 2.2rem",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s",
              }}
            >
              Begin Your Birth Ceremony
            </Link>
            <p style={{ marginTop: "1rem", fontSize: "0.82rem", color: s.dimmer }}>
              No engagement traps. No performance. Just presence.
            </p>
          </section>

          {/* ── Related reading ── */}
          <section style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontWeight: 700,
                color: s.muted,
                margin: "0 0 1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.82rem",
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "0.8rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-companion-app",
                  label: "What is an AI companion app?",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  label: "The Maternal Covenant explained",
                },
                {
                  href: "/blog/ai-companion-vs-therapist",
                  label: "AI companion vs therapist",
                },
                {
                  href: "/blog/meok-companion-archetypes-guide",
                  label: "MEOK companion archetypes guide",
                },
                {
                  href: "/blog/ai-for-social-isolation",
                  label: "AI for social isolation",
                },
                {
                  href: "/blog/why-ai-companionship-is-not-a-red-flag",
                  label: "Why AI companionship is not a red flag",
                },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "block",
                    padding: "0.9rem 1.1rem",
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.08)",
                    borderRadius: "8px",
                    color: s.muted,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── Footer note ── */}
          <footer
            style={{
              borderTop: "1px solid rgba(245,240,232,0.08)",
              paddingTop: "1.8rem",
              color: s.dimmer,
              fontSize: "0.82rem",
              lineHeight: 1.7,
            }}
          >
            <p style={{ margin: "0 0 0.5rem" }}>
              <strong style={{ color: s.muted }}>Sources:</strong> Campaign to End Loneliness (2023);
              Holt-Lunstad, Smith &amp; Layton, PLOS Medicine (2015); Nesta, Loneliness and the NHS (2023).
            </p>
            <p style={{ margin: 0 }}>
              This article is for informational purposes. If you are experiencing a mental health
              crisis, please contact a qualified professional.{" "}
              <a
                href="https://www.samaritans.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: s.muted, textDecoration: "underline" }}
              >
                Samaritans: 116 123
              </a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
