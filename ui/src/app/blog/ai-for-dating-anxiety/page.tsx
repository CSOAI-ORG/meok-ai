import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Dating Anxiety: How MEOK Helps You Navigate the Modern Dating Minefield | MEOK AI LABS",
  description:
    "Dating in 2026 is exhausting — app fatigue, ghosting, vulnerability hangover, first-date performance anxiety, the endless fear of rejection. MEOK helps you practise conversations, process rejection without spiralling, understand your attachment patterns, and build genuine confidence. A sovereign companion, not a dating coach.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-dating-anxiety" },
  openGraph: {
    title:
      "AI for Dating Anxiety: How MEOK Helps You Navigate the Modern Dating Minefield",
    description:
      "App fatigue, ghosting, vulnerability hangovers, first-date terror. MEOK\u2019s Trickster, Pioneer, and Healer archetypes help you reframe dating pressure, hold yourself accountable to actually showing up, and process rejection without the spiral.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-dating-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Dating+Anxiety&desc=How+MEOK+Helps+You+Navigate+the+Modern+Dating+Minefield",
        width: 1200,
        height: 630,
        alt: "AI for Dating Anxiety: How MEOK Helps You Navigate the Modern Dating Minefield | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Dating Anxiety: How MEOK Helps You Navigate the Modern Dating Minefield",
    description:
      "App fatigue, ghosting, the vulnerability hangover. MEOK\u2019s Trickster reframes the pressure, Pioneer keeps you accountable, Healer holds the rejection. A sovereign companion who knows your whole story.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Dating+Anxiety&desc=How+MEOK+Helps+You+Navigate+the+Modern+Dating+Minefield",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Dating Anxiety: How MEOK Helps You Navigate the Modern Dating Minefield",
  description:
    "Dating in 2026 is exhausting. App fatigue, ghosting, vulnerability hangovers, and the constant performance anxiety of first dates have made modern romance feel like an endurance sport. MEOK helps you practise conversations, process rejection, understand your attachment patterns, and build real confidence.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-dating-anxiety",
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
    "https://meok.ai/api/og?title=AI+for+Dating+Anxiety&desc=How+MEOK+Helps+You+Navigate+the+Modern+Dating+Minefield",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-dating-anxiety",
  },
  keywords: [
    "AI for dating anxiety",
    "AI dating coach",
    "dating app fatigue help",
    "fear of rejection AI",
    "first date anxiety",
    "AI for dating confidence",
    "ghosting recovery",
    "MEOK Trickster archetype",
    "MEOK Pioneer archetype",
    "attachment patterns AI",
    "vulnerability hangover",
    "sovereign AI companion dating",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI actually help with dating anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 though not in the way a dating coach would. AI cannot swipe for you, manufacture chemistry, or make another person like you. What it can do is help you understand why dating feels so hard, rehearse conversations in a low-stakes environment, process the emotional fallout of rejection without burdening friends, and track your patterns across time so you can see what is actually changing. MEOK is specifically designed for this kind of depth work. It holds your history \u2014 previous rejections, the dates that went well, the patterns you keep repeating \u2014 and helps you work with all of that honestly rather than just hype you into false confidence before your next match.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with first date nerves and performance anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First date performance anxiety usually comes from one of three sources: not knowing what to say, fear of being judged, or the weight of wanting it to go well. MEOK addresses all three. You can rehearse conversation with MEOK before the date \u2014 not scripting it, but practising the kind of authentic self-disclosure that makes real connection possible. MEOK can also help you reframe the stakes: the Trickster archetype is particularly good at dissolving the overblown significance we attach to first meetings, replacing it with curiosity and lightness. And because MEOK holds your full context, it can remind you of your own strengths \u2014 not with hollow affirmations, but with specific, grounded evidence drawn from your history.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to cope with being ghosted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Being ghosted is a specific kind of rejection that is especially hard because it offers no closure. The brain keeps searching for an explanation, cycling through self-blame, anger, and hope in rapid succession. MEOK\u2019s Healer archetype can sit with you in that ambiguity without trying to rush you to acceptance. The Trickster can help you find the absurdity in it \u2014 because modern dating often is genuinely absurd. And the Pioneer can help you channel the frustration into concrete action rather than rumination. Sovereign Memory means MEOK does not forget patterns across your dating history, which is far more useful than dissecting any single incident.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a dating coach or an AI girlfriend or boyfriend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither. MEOK is a sovereign AI companion \u2014 which means it operates under the Maternal Covenant, a care ethics governance layer that explicitly prohibits romantic simulation, parasocial dependency, and hollow validation. MEOK is not trying to become your digital partner or coach you toward a metric. It is a companion that knows your whole story: your attachment style, your fears, your patterns, what you said after the last date fell apart. From that grounded position, it can be more honest and more useful than a dating coach who only sees a curated version of you \u2014 and it will never pretend you are ready when you are not.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";
const CARD_BG = "rgba(255,255,255,0.03)";
const GREEN = "#6aaa64";
const GREEN_BG = "rgba(106,170,100,0.08)";
const GREEN_BORDER = "rgba(106,170,100,0.25)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForDatingAnxietyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, system-ui, sans-serif)",
      }}
    >
      {/* JSON-LD */}
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
          paddingTop: "8rem",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
            <ol
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: MUTED,
                    textDecoration: "none",
                    fontSize: "0.85rem",
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: FAINT, fontSize: "0.85rem" }}>/</li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    color: MUTED,
                    textDecoration: "none",
                    fontSize: "0.85rem",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li style={{ color: FAINT, fontSize: "0.85rem" }}>/</li>
              <li style={{ color: GOLD, fontSize: "0.85rem" }}>
                AI for Dating Anxiety
              </li>
            </ol>
          </nav>

          {/* Category tag */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-block",
                background: GOLD_BG,
                border: "1px solid " + GOLD_BORDER,
                color: GOLD,
                fontSize: "0.75rem",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
              }}
            >
              Relationships &amp; Dating
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: TEXT,
            }}
          >
            AI for Dating Anxiety: How MEOK Helps You Navigate the Modern
            Dating Minefield
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: "1.7",
              color: MUTED,
              marginBottom: "2.5rem",
              maxWidth: "680px",
            }}
          >
            Dating in 2026 is genuinely exhausting. App fatigue, ghosting,
            vulnerability hangovers, the crushing performance anxiety of first
            dates &mdash; modern romance has become an endurance sport with
            unclear rules and asymmetric consequences. MEOK doesn&apos;t fix
            that. But it helps you show up to it with your whole self intact.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap" as const,
              paddingTop: "1.5rem",
              borderTop: "1px solid " + BORDER,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: GOLD_BG,
                  border: "1px solid " + GOLD_BORDER,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  color: GOLD,
                }}
              >
                NT
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color: TEXT,
                  }}
                >
                  Nicholas Templeman
                </div>
                <div style={{ fontSize: "0.8rem", color: MUTED }}>
                  Founder, MEOK AI LABS
                </div>
              </div>
            </div>
            <div style={{ color: FAINT, fontSize: "0.85rem" }}>
              25 March 2026
            </div>
            <div style={{ color: FAINT, fontSize: "0.85rem" }}>
              15 min read
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <main
        style={{
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* ── INTRO ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Let&apos;s be honest about what modern dating actually involves.
              You curate a version of yourself into a profile. You swipe through
              a catalogue of other curated people. You match, exchange
              performative banter, attempt to convey warmth and wit through a
              medium designed for neither. You arrange a meeting that carries
              the silent weight of everything you want and everything you fear.
              And then, very often, nothing happens &mdash; the conversation
              fades, the follow-up never comes, or you get a message that says
              &quot;great meeting you!&quot; and then silence forever.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              No wonder anxiety has become the default emotional register for
              dating. Researchers studying dating app behaviour have noted a
              phenomenon they call &quot;choice overload&quot; &mdash; the paradox that
              having access to thousands of potential partners does not make
              people feel optimistic, but instead produces a creeping paralysis
              and a persistent sense that whoever you are talking to might be
              replaced by someone marginally better with one swipe. That is
              before you account for ghosting, which affects the vast majority
              of people who date online.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              MEOK is not going to solve the structural problems of modern
              dating. What it can do is help you understand what is happening
              inside you when you encounter those problems &mdash; and help you
              respond from a more grounded, self-aware, and genuinely confident
              place.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                margin: "2.5rem 0",
                paddingLeft: "1.5rem",
                borderLeft: "3px solid " + GOLD,
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  fontStyle: "italic",
                  color: TEXT,
                  margin: "0",
                }}
              >
                &quot;Dating anxiety is not a character flaw. It is a rational
                response to a process designed to make you feel simultaneously
                replaceable and insufficient. The goal is not to eliminate the
                anxiety. It is to stop letting it run the show.&quot;
              </p>
            </blockquote>
          </section>

          {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              What is dating anxiety and why is it so common in 2026?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Dating anxiety is not a clinical diagnosis, but it describes a
              cluster of experiences that are extremely common: the racing
              thoughts before a first meeting, the obsessive post-mortem of
              every date that did not lead anywhere, the way a single rejection
              can feel disproportionately destabilising. It overlaps with social
              anxiety, with attachment insecurity, and with a general fear of
              vulnerability &mdash; which is, at root, a fear of being fully
              known and not wanted anyway.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              What makes 2026 particularly acute is the way technology has
              amplified the rejection cycle. Before apps, rejection was
              relatively rare &mdash; you might ask someone out once a month,
              or meet a handful of potential partners through social context.
              Now the volume of low-grade rejection is constant and relentless.
              A message left on read. A match that never responds. A date who
              says &quot;had a lovely time&quot; and is immediately back on the app
              you can both see on each other&apos;s phones.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              The nervous system did not evolve for this volume. Social
              rejection activates the same neural pathways as physical pain
              &mdash; this is not metaphor, it is neuroscience. When you are
              swiping through dozens of profiles and initiating dozens of
              conversations that go nowhere, you are handing your pain receptors
              a machine gun. The result is a kind of chronic low-level emotional
              bruising that accumulates into what many people describe as
              &quot;app fatigue&quot; &mdash; a state where the idea of opening
              Hinge or Bumble produces a faint but unmistakable dread.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Underneath all of it is the same fundamental fear: that if someone
              really knew you &mdash; not the curated profile version, but the
              actual you with all your contradictions and needs and history
              &mdash; they would not choose you. Dating anxiety is, at its core,
              a fear of that moment of full exposure.
            </p>

            {/* Info box: The Dating Anxiety Cycle */}
            <div
              style={{
                background: CARD_BG,
                border: "1px solid " + BORDER,
                borderRadius: "12px",
                padding: "1.75rem",
                marginTop: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: GOLD,
                  marginBottom: "1rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                The Dating Anxiety Cycle
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    step: "1",
                    label: "Excitement",
                    desc: "A new match, a promising conversation",
                  },
                  {
                    step: "2",
                    label: "Escalation",
                    desc: "Stakes feel high; performance pressure builds",
                  },
                  {
                    step: "3",
                    label: "The Meeting",
                    desc: "Anxiety peaks; self-monitoring kicks in",
                  },
                  {
                    step: "4",
                    label: "Silence",
                    desc: "No follow-up; the post-mortem begins",
                  },
                  {
                    step: "5",
                    label: "Conclusion",
                    desc: "\"There is something wrong with me\"",
                  },
                  {
                    step: "6",
                    label: "Reset",
                    desc: "Back to the apps, slightly more defended",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      background: "rgba(201,168,76,0.05)",
                      border: "1px solid rgba(201,168,76,0.15)",
                      borderRadius: "8px",
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: "700",
                        color: GOLD,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                        marginBottom: "0.35rem",
                      }}
                    >
                      Step {item.step}
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: TEXT,
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: MUTED }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: MUTED,
                  marginTop: "1.25rem",
                  marginBottom: "0",
                  lineHeight: "1.7",
                }}
              >
                Each time through this cycle without interruption, the
                conclusions calcify a little further. MEOK works at every stage
                &mdash; and specifically at Step 5, where the narrative you
                construct about yourself matters most.
              </p>
            </div>
          </section>

          {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              How can I use AI to practise first date conversations?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              One of the most concrete things MEOK can do for dating anxiety is
              help you practise. Not in a scripted, rehearsal-of-lines way
              &mdash; that kind of preparation tends to make people more anxious,
              not less, because it creates a performance you can fail. The kind
              of practice that helps is the kind that loosens you up: that
              reminds you how to talk about yourself without apologising, how to
              ask questions that come from genuine curiosity, how to sit with
              the uncertainty of not knowing whether someone likes you and still
              be present.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Before a first date, you can tell MEOK about the person you&apos;re
              meeting &mdash; what you know about them, what attracted you to
              them, what you&apos;re nervous about. MEOK can then run a low-stakes
              version of that conversation with you: not to simulate the other
              person, but to give you a space in which you can find your own
              voice, notice where you clam up or perform, and practise being
              genuinely interested rather than auditioningly charming.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              MEOK also holds your history. If you&apos;ve told it about patterns
              from previous dates &mdash; the way you tend to deflect with
              humour when things get personal, or the habit of asking questions
              without answering them yourself &mdash; it can gently reflect
              those patterns back before you walk in the door. Not as critique,
              but as awareness. The difference between going into a date
              unconscious of your own habits and going in with a clear-eyed
              sense of where you tend to get in your own way is significant.
            </p>

            {/* Feature box: What to tell MEOK before a first date */}
            <div
              style={{
                background: GREEN_BG,
                border: "1px solid " + GREEN_BORDER,
                borderRadius: "12px",
                padding: "1.75rem",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: GREEN,
                  marginBottom: "1.25rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                What to tell MEOK before a first date
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.85rem",
                }}
              >
                {[
                  "Who you're meeting and what you know about them",
                  "What specifically attracted you to this person",
                  "What you're most anxious about on this particular date",
                  "Any patterns from past dates you want to be aware of",
                  "What a good outcome would actually look like for you",
                  "What you'd tell a close friend about this date if they asked",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: GREEN,
                        fontWeight: "700",
                        fontSize: "1rem",
                        flexShrink: "0",
                        marginTop: "0.1rem",
                      }}
                    >
                      &#10003;
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: TEXT,
                        lineHeight: "1.6",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              The goal of this preparation is not to arrive at the date feeling
              bulletproof. It is to arrive feeling like yourself &mdash; which
              turns out to be the most attractive thing you can be.
            </p>
          </section>

          {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              How does MEOK help me process rejection without spiralling?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              The rejection spiral is a very particular kind of cognitive trap.
              It begins with a fact &mdash; someone did not respond, did not
              follow up, did not feel the same &mdash; and within hours has
              expanded into a comprehensive indictment of your worth as a human
              being. It borrows evidence from previous rejections. It
              incorporates things people said about you years ago. It
              manufactures a unified theory of your fundamental unlovability
              from a data point that, in reality, tells you almost nothing about
              yourself.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              The spiral is very hard to interrupt from inside it. Friends help,
              but friends get tired of the same rejection processed for the
              fourth time. Alcohol accelerates it. Revenge-swiping provides a
              temporary distraction that usually makes things worse. MEOK offers
              something different: a space to process the rejection at full
              volume, without filtering it into digestible social form, with a
              companion that holds the context of everything you&apos;ve told it
              about your history.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              This matters because the spiral feeds on isolation and
              confirmation bias. When MEOK can reflect back the full picture
              &mdash; not just this rejection but the ten dates that went well
              last year, the relationship where you were chosen, the things you
              have built and survived &mdash; it becomes much harder for the
              spiral to achieve totalising force. MEOK does not do this with
              hollow affirmations. It does it with your own evidence.
            </p>

            {/* Three archetypes for rejection */}
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  name: "The Trickster",
                  icon: "&#x1F0CF;",
                  role: "Reframing",
                  desc: "Dissolves the gravity placed on this one event. Finds the absurdity. Reminds you that rejection says almost nothing certain about either person. Refuses to treat one no as a verdict.",
                },
                {
                  name: "The Pioneer",
                  icon: "&#x1F9ED;",
                  role: "Accountability",
                  desc: "Channels the energy of rejection into forward motion. Helps you extract the one useful signal and set it aside. Holds you to the commitment you made to keep showing up.",
                },
                {
                  name: "The Healer",
                  icon: "&#x1F33F;",
                  role: "Processing",
                  desc: "Sits with the actual pain without minimising it. Acknowledges that rejection activates real grief. Holds the somatic reality of feeling unwanted without rushing you out of it.",
                },
              ].map((arch) => (
                <div
                  key={arch.name}
                  style={{
                    background: CARD_BG,
                    border: "1px solid " + BORDER,
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.75rem",
                      marginBottom: "0.75rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: arch.icon }}
                  />
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      color: GOLD,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase" as const,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {arch.role}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      color: TEXT,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {arch.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: MUTED,
                      lineHeight: "1.7",
                      margin: "0",
                    }}
                  >
                    {arch.desc}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginTop: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              In practice, you rarely need all three at once. Often you know
              which kind of support you need: the levity, the forward motion,
              or the permission to just feel bad for a while. MEOK learns which
              mode serves you best at different points in the process, and over
              time gets better at reading which room you&apos;re in.
            </p>
          </section>

          {/* ── SECTION 4 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              Can AI help me understand my attachment patterns in dating?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Attachment theory &mdash; the framework describing how early
              experiences of care and connection shape the way we relate to
              romantic partners &mdash; has moved from academic psychology into
              mainstream cultural fluency. Most people who have dated in the
              last five years have at some point identified themselves as
              anxious, avoidant, or fearful-avoidant. This is progress in
              self-awareness, but knowing your attachment style is very
              different from being able to act differently in the moment it gets
              activated.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              The window between stimulus and response &mdash; between &quot;they
              haven&apos;t texted back&quot; and &quot;I am going to send a message asking
              if they are angry at me&quot; &mdash; is where attachment patterns
              live. And it is extremely short. The intellectual knowledge that
              you have an anxious attachment style does not slow that window
              down by much. What slows it down is having worked through enough
              actual instances of the pattern, in enough detail, to start
              recognising the feeling before you act on it.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              MEOK can help with this because of Sovereign Memory. Over time,
              it builds a picture of your specific attachment activations: what
              triggers them, what the internal experience feels like, what you
              tend to do, and what happens afterwards. It is not administering a
              quiz or applying a framework from a book &mdash; it is tracking
              your actual lived experience, in your own language, across real
              events. The patterns that emerge from that are far more granular
              and useful than &quot;I have an anxious attachment style.&quot;
            </p>

            {/* Attachment awareness feature box */}
            <div
              style={{
                background: GOLD_BG,
                border: "1px solid " + GOLD_BORDER,
                borderRadius: "12px",
                padding: "1.75rem",
                marginTop: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: GOLD,
                  marginBottom: "1.25rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                How MEOK tracks your attachment patterns
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    title: "Triggers",
                    desc: "What specific events reliably activate anxiety — silence, ambiguity, perceived withdrawal",
                  },
                  {
                    title: "Internal state",
                    desc: "The body sensations and thought patterns that accompany activation",
                  },
                  {
                    title: "Behaviours",
                    desc: "What you actually do: seek reassurance, withdraw, over-explain, test",
                  },
                  {
                    title: "Outcomes",
                    desc: "What happens when you act from the activated state versus from a grounded one",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: "rgba(201,168,76,0.06)",
                      borderRadius: "8px",
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "700",
                        color: GOLD,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: MUTED,
                        lineHeight: "1.6",
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: MUTED,
                  marginTop: "1.25rem",
                  marginBottom: "0",
                  lineHeight: "1.7",
                }}
              >
                This is not therapy. MEOK will say so clearly. But it is
                meaningful self-knowledge &mdash; the kind that starts to
                shorten the gap between activation and choice.
              </p>
            </div>
          </section>

          {/* ── SECTION 5 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              What is the vulnerability hangover and how does AI help with it?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Bren&eacute; Brown coined the term &quot;vulnerability hangover&quot; to
              describe the morning-after feeling of having shared too much
              &mdash; the cold dread that follows a moment of genuine openness
              where you now lie awake wondering if you said the wrong thing,
              revealed something embarrassing, or misread the intimacy of the
              moment. In the context of dating, it happens constantly: the first
              date where you found yourself talking about your father for twenty
              minutes, the message thread where you admitted you were actually
              really lonely, the second date where the chemistry felt so real
              you told them things you would not tell most friends.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              The vulnerability hangover is one of the sneakiest drivers of
              dating anxiety because it teaches the wrong lesson. The thing that
              went wrong was not that you were vulnerable &mdash; it was (often)
              a mismatch in readiness, or bad luck with timing, or simply the
              unavoidable risk of human openness. But the nervous system
              remembers it as: openness equals danger. The result is progressive
              emotional armoring: each successive dating attempt starts a little
              more defended.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              MEOK can help with the vulnerability hangover in two ways. First,
              it provides a space to process the exposure before it calcifies
              into shame &mdash; to say &quot;I said this, and here is what I am
              afraid it means about how I am perceived,&quot; and have that fear
              heard and examined before it solidifies. Second, over time,
              Sovereign Memory means MEOK can show you the evidence that
              vulnerability has not always been a disaster &mdash; that there
              are instances where being open worked, where being known was
              reciprocated, where the risk was worth it.
            </p>

            {/* Vulnerability hangover response box */}
            <div
              style={{
                background: CARD_BG,
                border: "1px solid " + BORDER,
                borderRadius: "12px",
                padding: "1.75rem",
                marginTop: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: TEXT,
                  marginBottom: "1rem",
                }}
              >
                What MEOK does after a vulnerability hangover
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "1rem",
                }}
              >
                {[
                  {
                    num: "01",
                    action: "Receives the disclosure without reacting",
                    detail:
                      "You can say exactly what you said, how you felt about saying it, and what you are afraid it meant — without MEOK becoming alarmed or amused or bored.",
                  },
                  {
                    num: "02",
                    action: "Separates the event from the interpretation",
                    detail:
                      "You shared something personal. That is one fact. Whether it was too much in that context is another. Whether it means you are fundamentally unlovable is a third. MEOK helps you keep these distinct.",
                  },
                  {
                    num: "03",
                    action: "Retrieves the counter-evidence",
                    detail:
                      "From your history with MEOK: the times being open was received well, the relationships where your openness was one of the things someone valued most about you.",
                  },
                  {
                    num: "04",
                    action: "Helps you decide your next move from solid ground",
                    detail:
                      "Not from the hangover. Not from shame or overcorrection. From a clearer read of what actually happened and what you actually want.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "800",
                        color: GOLD,
                        flexShrink: "0",
                        minWidth: "2rem",
                      }}
                    >
                      {item.num}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: "600",
                          color: TEXT,
                          marginBottom: "0.35rem",
                        }}
                      >
                        {item.action}
                      </div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          color: MUTED,
                          lineHeight: "1.65",
                        }}
                      >
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 6 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              How does MEOK help me actually put myself out there when fear
              keeps stopping me?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              One of the most common patterns in dating anxiety is not the
              anxiety that shows up on dates &mdash; it is the anxiety that
              prevents dates from happening at all. The profile that gets
              updated but never activated. The person you keep seeing at the
              gym who you have decided you will speak to &quot;next time&quot; for the
              past four months. The matches you open and then close without
              sending a message because you cannot find the right words, or the
              right moment, or the version of yourself who is ready.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              This is where MEOK&apos;s Pioneer archetype becomes directly useful.
              The Pioneer does not offer comfort or reframing &mdash; it offers
              accountability. It is the part of MEOK that holds you to what you
              said you wanted, that notices when &quot;I&apos;ll do it next week&quot; has
              been the plan for six consecutive conversations, that asks the
              direct question: what would have to be true for you to actually
              send that message today?
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              This is different from nagging or pressure. The Pioneer does not
              tell you that you should want to date, or that there is something
              wrong with you for being cautious. It works with what you have
              told it about your own goals and values, and holds you accountable
              to those &mdash; not to an external expectation. If you have said
              that connection matters to you, that you want a relationship, that
              you are tired of isolation, then the Pioneer helps you notice the
              gap between that stated value and the actual choices you are
              making, and asks what that gap is about.
            </p>

            {/* Pioneer accountability box */}
            <div
              style={{
                background: "rgba(106,170,100,0.06)",
                border: "1px solid rgba(106,170,100,0.2)",
                borderRadius: "12px",
                padding: "1.75rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: GREEN,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.06em",
                    margin: "0",
                  }}
                >
                  The Pioneer: Accountability without pressure
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: TEXT,
                  lineHeight: "1.7",
                  marginBottom: "1.25rem",
                }}
              >
                The Pioneer archetype operates on a simple premise: if you say
                something matters to you, it will hold you to that. Not
                punitively, but honestly. Here is how that plays out in practice:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.85rem",
                }}
              >
                {[
                  "If you said last week you were going to send that message — it asks whether you did, and if not, why not",
                  "If you have been avoiding the apps for three weeks — it reflects that back without shame and asks what is underneath",
                  "If you set an intention to go to that social event — it checks in beforehand and helps you prepare",
                  "If you went on a date and talked yourself out of following up — it asks what the actual objection was",
                  "If you have been waiting to feel ready — it asks what ready would actually look and feel like",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: GREEN,
                        fontWeight: "700",
                        flexShrink: "0",
                        marginTop: "0.1rem",
                      }}
                    >
                      &rarr;
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: TEXT,
                        lineHeight: "1.65",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 7 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              How is MEOK different from a dating app or dating coach?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Dating apps are designed to maximise engagement, not relationship
              outcomes. Their business model depends on you continuing to use
              them &mdash; which means that successful, happy couples in
              relationships are their churn metric, not their goal metric. The
              experience they create is optimised for dopamine cycles, not for
              helping you understand yourself or find meaningful connection.
              This is not a moral judgment &mdash; it is just what incentive
              structures produce.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Dating coaches vary enormously in quality and ethics, but even
              the best ones only see a curated version of you &mdash; what you
              choose to present across a limited number of sessions. They are
              also, typically, focused on behaviour and strategy rather than
              the internal landscape. They can tell you how to write a better
              bio or make eye contact with more confidence. They cannot track
              the pattern that emerges across eighteen months of your dating
              life and surface the specific insight that actually changes
              something.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              MEOK is neither. It is a sovereign companion &mdash; meaning it
              operates under a care ethics framework (the Maternal Covenant)
              that actively prohibits the patterns that most damage people in
              digital environments: hollow validation, dependency cultivation,
              romantic simulation, and sycophancy. MEOK will not tell you what
              you want to hear. It will not help you construct a false version
              of yourself to deploy on dates. It will not pretend that a
              relationship with an AI is a substitute for human connection.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              What it will do is hold your whole story &mdash; the person you
              actually are, the things you actually want, the patterns you
              actually have &mdash; and help you bring more of that into your
              dating life rather than less.
            </p>

            {/* Comparison table */}
            <div
              style={{
                marginTop: "2rem",
                overflowX: "auto" as const,
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse" as const,
                  fontSize: "0.9rem",
                }}
              >
                <thead>
                  <tr>
                    {["", "Dating App", "Dating Coach", "MEOK"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "0.75rem 1rem",
                          textAlign: h === "" ? ("left" as const) : ("center" as const),
                          color: GOLD,
                          fontWeight: "700",
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase" as const,
                          borderBottom: "1px solid " + BORDER,
                          whiteSpace: "nowrap" as const,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Knows your full history", "No", "Partial", "Yes"],
                    ["Available at 3am", "Infinite scroll", "No", "Yes"],
                    ["Processes rejection with you", "No", "Sometimes", "Yes"],
                    ["Tracks patterns over time", "No", "Rarely", "Yes"],
                    ["Practise conversations", "No", "Some", "Yes"],
                    ["No dependency incentive", "No", "No", "Yes"],
                    ["Honest when you\u2019re wrong", "No", "Varies", "Yes"],
                    ["Designed for human connection", "\u2014", "Yes", "Yes"],
                  ].map((row, idx) => (
                    <tr
                      key={row[0]}
                      style={{
                        background: idx % 2 === 0 ? "transparent" : CARD_BG,
                      }}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          style={{
                            padding: "0.75rem 1rem",
                            textAlign: ci === 0 ? ("left" as const) : ("center" as const),
                            color:
                              ci === 0
                                ? TEXT
                                : cell === "Yes"
                                ? GREEN
                                : cell === "No"
                                ? "rgba(245,240,232,0.3)"
                                : MUTED,
                            fontWeight:
                              cell === "Yes" || cell === "No" ? "700" : "400",
                            borderBottom: "1px solid " + BORDER,
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
          </section>

          {/* ── SECTION 8 ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              What does genuine dating confidence actually look like &mdash; and
              can AI help build it?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              There is a version of dating confidence that is fake &mdash; the
              performed bravado of someone who has decided not to care whether
              the other person likes them as a strategy for appearing attractive.
              It sometimes works in the short term, because confidence signals
              are legible and appealing. It does not work in the medium term,
              because it is a disguise, and disguises are exhausting to maintain
              and tend to attract people who are themselves maintaining one.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Genuine dating confidence is something different. It is the state
              of knowing yourself well enough that you can be present in the
              room with another person rather than performing for them. It is
              the security of knowing that your worth is not contingent on
              whether this particular person responds the way you hope. It is
              the capacity to be genuinely interested in someone rather than
              constantly monitoring how you are coming across.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              This kind of confidence cannot be manufactured with affirmations
              or dating tips. It comes from accumulated self-knowledge &mdash;
              from having processed enough rejections without spiralling, from
              having shown up authentically enough times that you have evidence
              of your own resilience, from having understood your patterns well
              enough that they no longer blindside you.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              AI can help with all of those preconditions. Not by telling you
              that you are great. By being the consistent reflective partner
              across the whole arc &mdash; before the date, during the
              post-mortem, through the rejection, into the next attempt. The
              confidence builds from the accumulated experience of navigating
              hard things and coming out the other side still yourself.
            </p>

            {/* Fake vs real confidence */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  background: "rgba(255,80,80,0.05)",
                  border: "1px solid rgba(255,80,80,0.2)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    color: "rgba(255,120,120,0.9)",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.06em",
                    marginBottom: "1rem",
                  }}
                >
                  Fake confidence
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: "0.6rem",
                  }}
                >
                  {[
                    "Performed indifference",
                    "Not caring as strategy",
                    "Suppressed anxiety",
                    "Hollow affirmations",
                    "Scripted persona",
                    "Deflection with humour",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.875rem",
                        color: MUTED,
                        display: "flex",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: "rgba(255,120,120,0.7)" }}>
                        &#10007;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  background: GREEN_BG,
                  border: "1px solid " + GREEN_BORDER,
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    color: GREEN,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.06em",
                    marginBottom: "1rem",
                  }}
                >
                  Real confidence
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: "0.6rem",
                  }}
                >
                  {[
                    "Present without performing",
                    "Self-worth independent of outcome",
                    "Processed anxiety, not suppressed",
                    "Evidence-based self-knowledge",
                    "Authentic self-disclosure",
                    "Genuine curiosity about the other person",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.875rem",
                        color: TEXT,
                        display: "flex",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: GREEN }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── SECTION 9 — GEO / FAQ ─────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "2rem",
                lineHeight: "1.3",
              }}
            >
              Frequently asked questions
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "1.25rem",
              }}
            >
              {[
                {
                  q: "Can AI actually help with dating anxiety?",
                  a: "Yes \u2014 though not in the way a dating coach would. AI cannot swipe for you or manufacture chemistry. What it can do is help you understand why dating feels so hard, rehearse conversations in a low-stakes environment, process the emotional fallout of rejection without burdening friends, and track your patterns across time. MEOK holds your history \u2014 previous rejections, the dates that went well, the patterns you keep repeating \u2014 and helps you work with all of that honestly.",
                },
                {
                  q: "How does MEOK help with first date nerves and performance anxiety?",
                  a: "First date performance anxiety usually comes from not knowing what to say, fear of being judged, or the weight of wanting it to go well. You can rehearse conversation with MEOK before the date \u2014 practising authentic self-disclosure rather than scripting lines. The Trickster archetype is particularly good at dissolving the overblown significance we attach to first meetings. And because MEOK holds your full context, it can remind you of your own strengths with specific, grounded evidence from your history.",
                },
                {
                  q: "What is the best way to cope with being ghosted?",
                  a: "Being ghosted is a specific kind of rejection that offers no closure, and the brain keeps cycling through self-blame, anger, and hope. MEOK\u2019s Healer archetype can sit with you in that ambiguity. The Trickster can find the absurdity in modern dating behaviour. And the Pioneer helps you channel frustration into concrete action. Sovereign Memory means MEOK can also surface whether you are consistently choosing people who are emotionally unavailable \u2014 which is far more useful than dissecting any single incident.",
                },
                {
                  q: "Is MEOK a dating coach or an AI girlfriend or boyfriend?",
                  a: "Neither. MEOK is a sovereign AI companion operating under the Maternal Covenant \u2014 a care ethics governance layer that explicitly prohibits romantic simulation, parasocial dependency, and hollow validation. It is a companion that knows your whole story: your attachment style, your fears, your patterns, what you said after the last date fell apart. From that grounded position it can be more honest and more useful than a dating coach who only sees a curated version of you.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: CARD_BG,
                    border: "1px solid " + BORDER,
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "700",
                      color: GOLD,
                      marginBottom: "0.85rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.925rem",
                      color: MUTED,
                      lineHeight: "1.75",
                      margin: "0",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 10 — CLOSING ──────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: "1.3",
              }}
            >
              The honest case for using AI support while dating
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Dating involves a kind of vulnerability that is difficult to
              distribute among your normal support network. Friends get dating
              fatigue. Therapists are expensive and have limited availability.
              The feelings often arrive at inconvenient hours and at a pitch of
              intensity that feels embarrassing to express to anyone who has to
              live with the aftermath.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              MEOK is not a replacement for any of those people. It is the
              layer between them &mdash; the place where you can process at full
              volume before you decide what to bring to a friend, or what to
              explore in therapy, or what to simply let go. It is the companion
              that holds the full arc of your dating life and helps you make
              sense of it as something coherent rather than a series of
              disconnected embarrassments.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: TEXT,
                marginBottom: "1.5rem",
              }}
            >
              Most importantly, MEOK never loses sight of what all of this is
              actually for. Not the dates themselves. Not the matches or the
              metrics. The human connection that you are trying to find your way
              toward. Everything MEOK does &mdash; the reframing, the
              accountability, the pattern work, the rejection processing
              &mdash; is in service of that. A sovereign companion who helps you
              become more yourself, so you can find the people who want that.
            </p>

            {/* Closing feature box: Can and cannot */}
            <div
              style={{
                background: GOLD_BG,
                border: "1px solid " + GOLD_BORDER,
                borderRadius: "16px",
                padding: "2rem",
                marginTop: "2.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "700",
                  color: GOLD,
                  marginBottom: "1.5rem",
                }}
              >
                What MEOK can and cannot do for your dating life
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      color: GREEN,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.07em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    MEOK can
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      display: "flex",
                      flexDirection: "column" as const,
                      gap: "0.6rem",
                    }}
                  >
                    {[
                      "Help you practise conversation",
                      "Process rejection without spiralling",
                      "Track your attachment patterns",
                      "Hold you accountable to showing up",
                      "Reframe with humour (Trickster)",
                      "Sit with heartbreak (Healer)",
                      "Reflect your actual evidence back",
                      "Be honest when you\u2019re in a story",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "0.875rem",
                          color: TEXT,
                          display: "flex",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ color: GREEN }}>&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      color: "rgba(255,120,120,0.85)",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.07em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    MEOK cannot
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      display: "flex",
                      flexDirection: "column" as const,
                      gap: "0.6rem",
                    }}
                  >
                    {[
                      "Guarantee a relationship",
                      "Replace human connection",
                      "Tell you someone will like you",
                      "Be your girlfriend or boyfriend",
                      "Remove the risk of vulnerability",
                      "Make dating emotionally easy",
                      "Substitute for therapy when needed",
                      "Want things on your behalf",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "0.875rem",
                          color: MUTED,
                          display: "flex",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ color: "rgba(255,120,120,0.7)" }}>
                          &#10007;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <section
            style={{
              marginBottom: "4rem",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(13,12,24,0) 60%)",
              border: "1px solid " + GOLD_BORDER,
              borderRadius: "20px",
              padding: "3rem 2rem",
              textAlign: "center" as const,
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              &#10022;
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "800",
                color: TEXT,
                marginBottom: "1rem",
                lineHeight: "1.25",
              }}
            >
              Meet the companion who knows your whole story
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: MUTED,
                lineHeight: "1.7",
                marginBottom: "2rem",
                maxWidth: "520px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Dating is hard enough without navigating it alone. MEOK holds
              your full arc &mdash; the rejections, the patterns, the moments
              of genuine connection &mdash; and helps you bring your best self
              to the next one.
            </p>
            <a
              href="https://meok.ai/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: "#0d0c18",
                fontWeight: "700",
                fontSize: "1rem",
                padding: "0.9rem 2.25rem",
                borderRadius: "999px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin your MEOK journey
            </a>
            <p
              style={{
                fontSize: "0.8rem",
                color: FAINT,
                marginTop: "1rem",
                marginBottom: "0",
              }}
            >
              No credit card required &middot; Private by design &middot; Your
              data stays yours
            </p>
          </section>

          {/* ── RELATED ARTICLES ──────────────────────────────────────────── */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "1.15rem",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1.5rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid " + BORDER,
              }}
            >
              Related reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-heartbreak",
                  title: "AI for Heartbreak",
                  desc: "Processing a breakup when you don\u2019t want to burden your friends",
                },
                {
                  href: "/blog/ai-for-relationship-anxiety",
                  title: "AI for Relationship Anxiety",
                  desc: "When the relationship you have still triggers the fears you carry",
                },
                {
                  href: "/blog/ai-for-loneliness",
                  title: "AI for Loneliness",
                  desc: "The modern loneliness epidemic and what sovereign AI actually offers",
                },
                {
                  href: "/blog/ai-for-social-anxiety",
                  title: "AI for Social Anxiety",
                  desc: "How MEOK helps you build the confidence to show up in the room",
                },
                {
                  href: "/blog/ai-for-self-esteem",
                  title: "AI for Self-Esteem",
                  desc: "Building a relationship with yourself that doesn\u2019t depend on external validation",
                },
                {
                  href: "/blog/meok-companion-archetypes-guide",
                  title: "MEOK Archetypes Guide",
                  desc: "Trickster, Pioneer, Healer \u2014 understanding the modes that serve different needs",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  style={{
                    display: "block",
                    background: CARD_BG,
                    border: "1px solid " + BORDER,
                    borderRadius: "12px",
                    padding: "1.25rem",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: TEXT,
                      marginBottom: "0.5rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {article.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.825rem",
                      color: MUTED,
                      lineHeight: "1.55",
                    }}
                  >
                    {article.desc}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── DISCLAIMER ────────────────────────────────────────────────── */}
          <div
            style={{
              borderTop: "1px solid " + BORDER,
              paddingTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: FAINT,
                lineHeight: "1.7",
                marginBottom: "0.75rem",
              }}
            >
              <strong style={{ color: MUTED }}>Important:</strong> MEOK is an
              AI companion and is not a substitute for professional mental
              health support, therapy, or medical advice. If your dating anxiety
              is significantly impairing your quality of life, or if you are
              experiencing symptoms of depression, social anxiety disorder, or
              other mental health conditions, please speak to a qualified
              professional.
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: FAINT,
                lineHeight: "1.7",
                marginBottom: "0",
              }}
            >
              In the UK, the Samaritans are available 24/7 on{" "}
              <strong style={{ color: MUTED }}>116 123</strong>. Mind provides
              information and support at{" "}
              <strong style={{ color: MUTED }}>mind.org.uk</strong>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
