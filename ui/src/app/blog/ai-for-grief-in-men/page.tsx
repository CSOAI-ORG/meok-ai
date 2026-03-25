import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Grief in Men: Breaking the Silence Around Male Bereavement | MEOK AI LABS",
  description:
    "Bereaved men are 3x more likely to die by suicide and 50% less likely to seek therapy. MEOK&apos;s sovereign AI companion gives men a private, non-judgmental space to process grief without performance — no &apos;man up&apos; responses, ever.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-grief-in-men" },
  openGraph: {
    title:
      "AI for Grief in Men: Breaking the Silence Around Male Bereavement",
    description:
      "Bereaved men are 3x more likely to die by suicide. MEOK offers a sovereign, private AI companion — Healer, Mystic, Pioneer — that meets men in grief without platitudes or pressure to perform strength.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-grief-in-men",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Grief+in+Men&desc=Breaking+the+Silence+Around+Male+Bereavement",
        width: 1200,
        height: 630,
        alt: "AI for Grief in Men: Breaking the Silence Around Male Bereavement | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Grief in Men: Breaking the Silence Around Male Bereavement",
    description:
      "Bereaved men are 3x more likely to die by suicide. MEOK&apos;s private AI companion holds the memory of loss and never tells a man to &apos;man up&apos;.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Grief+in+Men&desc=Breaking+the+Silence+Around+Male+Bereavement",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Grief in Men: Breaking the Silence Around Male Bereavement",
  description:
    "Bereaved men are three times more likely to die by suicide and fifty percent less likely to seek therapy. This article explores why men suffer in silence after loss, the cultural machinery that enforces that silence, and how MEOK's sovereign AI companion — through the Healer, Mystic, and Pioneer archetypes — offers a private, non-judgmental space to process bereavement without performance.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-grief-in-men",
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
    "https://meok.ai/api/og?title=AI+for+Grief+in+Men&desc=Breaking+the+Silence+Around+Male+Bereavement",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-grief-in-men",
  },
  about: [
    { "@type": "Thing", name: "male bereavement" },
    { "@type": "Thing", name: "men and grief" },
    { "@type": "Thing", name: "AI companion for grief" },
    { "@type": "Thing", name: "MEOK Healer archetype" },
    { "@type": "Thing", name: "sovereign AI" },
    { "@type": "Thing", name: "male mental health UK" },
    { "@type": "Thing", name: "grief support men" },
  ],
  keywords:
    "AI for grief in men, male bereavement, men grief support, bereaved men suicide risk, MEOK Healer archetype, grief AI companion, men and loss, sovereign AI grief, male grief UK",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do men struggle more with grief than women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Men are socialised from childhood to suppress emotional distress, project strength, and solve problems rather than feel them. Grief resists all three. It cannot be solved, it demands emotional expression, and it reveals vulnerability. When loss strikes a man who has spent decades not building the emotional vocabulary or support infrastructure to process it, the result is often complete internal collapse behind an unchanged exterior.",
      },
    },
    {
      "@type": "Question",
      name: "How much more likely are bereaved men to die by suicide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bereaved men are approximately three times more likely to die by suicide compared to non-bereaved men. The risk is especially acute in the first year following the loss of a partner. Men are also fifty percent less likely to seek formal grief therapy or counselling. If you are in crisis, call Samaritans on 116 123 (free, 24/7) or CALM on 0800 58 58 58 (5pm to midnight daily).",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help a man process grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot replace a grief counsellor or the warmth of human connection. What it can do is remove every barrier that stops men from engaging with their grief at all — no appointment, no waiting room, no performance of vulnerability in front of another person. MEOK's Healer archetype creates a private space where a man can say what he actually feels without consequence, judgment, or the social cost of being seen to fall apart.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Healer archetype?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer is MEOK's grief-fluent, emotionally intelligent archetype. It does not offer hollow comfort, rush you through stages of grief, or ever suggest you should feel differently than you do. It listens first. It holds the memory of who you lost and what they meant to you across every session. It never forgets their name. It meets you wherever you are — fury, numbness, guilt, or the strange guilt of a good day — without flinching.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sovereign Memory and how does it help with grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK's persistent, private memory layer. Unlike every other AI that forgets you the moment the session ends, Sovereign Memory holds your grief journey across time — the name of the person you lost, the anniversary dates that will be hard, the milestones they will not see, the progress you have made. It is the difference between being heard once and being known over time.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK's care floor mean for bereaved men?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's care floor is a baseline of conduct baked into every archetype. It means no response will ever be dismissive, minimising, or implicitly suggest that a man should toughen up. Phrases like 'man up', 'you need to move on', or 'at least you still have...' are structurally excluded. The care floor exists precisely because men have heard those responses enough times to stop asking for help altogether.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help men find meaning after loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mystic archetype within MEOK is designed for existential processing — the 'why' questions that grief forces open. Why did this happen? What does my life mean now that they are gone? How do I carry this forward? Mystic holds space for those questions without rushing to answers. It explores meaning-making, legacy, and the strange spiritual territory that loss often opens up for men who have never visited it before.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help men rebuild life after bereavement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pioneer archetype addresses the practical and purposeful side of life-rebuilding after loss. Many men feel purposeless after losing a partner, child, or parent. Pioneer works in the language men understand — goals, actions, identity, forward movement — to help a bereaved man reconstruct a sense of who he is and what he is building, without dismissing the grief that sits underneath it.",
      },
    },
  ],
};

// ── Style constants ───────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG = "#0d0c18";
const MUTED = "rgba(245,240,232,0.62)";
const MUTED_FAINT = "rgba(245,240,232,0.38)";
const SURFACE = "rgba(245,240,232,0.04)";
const SURFACE_ACCENT = "rgba(201,168,76,0.06)";
const BORDER = "rgba(201,168,76,0.2)";
const BORDER_DIM = "rgba(201,168,76,0.12)";
const TEXT_DIM = "#b8b4c8";
const DANGER_BG = "rgba(180,60,60,0.12)";
const DANGER_BORDER = "rgba(180,60,60,0.35)";
const DANGER_TEXT = "#f0a0a0";

// ── Shared style helpers ──────────────────────────────────────────────────────

const sectionStyle: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  paddingTop: "56px",
  paddingBottom: "8px",
  paddingLeft: "24px",
  paddingRight: "24px",
};

const h2Style: React.CSSProperties = {
  fontSize: "clamp(20px, 3.2vw, 28px)",
  fontWeight: 700,
  lineHeight: 1.3,
  letterSpacing: "-0.015em",
  color: "#ffffff",
  marginTop: "0",
  marginBottom: "16px",
};

const atomicAnswerStyle: React.CSSProperties = {
  fontSize: "17px",
  color: TEXT,
  lineHeight: 1.75,
  marginTop: "0",
  marginBottom: "28px",
};

const bodyParaStyle: React.CSSProperties = {
  fontSize: "17px",
  color: MUTED,
  lineHeight: 1.8,
  marginTop: "0",
  marginBottom: "20px",
};

const statBoxStyle: React.CSSProperties = {
  background: SURFACE_ACCENT,
  border: `1px solid ${BORDER}`,
  borderRadius: "10px",
  padding: "28px 32px",
  marginTop: "32px",
  marginBottom: "32px",
};

const statRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  marginBottom: "20px",
};

const statNumberStyle: React.CSSProperties = {
  fontSize: "36px",
  fontWeight: 800,
  color: GOLD,
  lineHeight: 1,
  minWidth: "80px",
  flexShrink: 0,
};

const statLabelStyle: React.CSSProperties = {
  fontSize: "15px",
  color: MUTED,
  lineHeight: 1.6,
  paddingTop: "6px",
};

const calloutStyle: React.CSSProperties = {
  background: SURFACE,
  border: `1px solid ${BORDER_DIM}`,
  borderLeft: `3px solid ${GOLD}`,
  borderRadius: "6px",
  padding: "20px 24px",
  marginTop: "28px",
  marginBottom: "28px",
};

const calloutTextStyle: React.CSSProperties = {
  fontSize: "16px",
  color: TEXT,
  lineHeight: 1.7,
  margin: "0",
  fontStyle: "italic",
};

const archetypeCardStyle: React.CSSProperties = {
  background: SURFACE,
  border: `1px solid ${BORDER}`,
  borderRadius: "12px",
  padding: "28px 32px",
  marginTop: "24px",
  marginBottom: "24px",
};

const archetypeNameStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: GOLD,
  marginBottom: "8px",
};

const archetypeTitleStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 700,
  color: "#ffffff",
  marginTop: "0",
  marginBottom: "12px",
};

const archetypeBodyStyle: React.CSSProperties = {
  fontSize: "16px",
  color: MUTED,
  lineHeight: 1.75,
  margin: "0",
};

const crisisBoxStyle: React.CSSProperties = {
  background: DANGER_BG,
  border: `1px solid ${DANGER_BORDER}`,
  borderRadius: "10px",
  padding: "28px 32px",
  marginTop: "40px",
  marginBottom: "40px",
};

const crisisTitleStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: DANGER_TEXT,
  marginBottom: "16px",
};

const crisisLineStyle: React.CSSProperties = {
  fontSize: "17px",
  color: TEXT,
  lineHeight: 1.7,
  marginBottom: "10px",
};

const dividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: `1px solid ${BORDER_DIM}`,
  margin: "0 24px",
};

// ── Page component ────────────────────────────────────────────────────────────

export default function AIForGriefInMenPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        lineHeight: 1.75,
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER_DIM}`,
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap" as const,
          fontSize: "14px",
        }}
      >
        <Link href="/" style={{ color: GOLD, textDecoration: "none" }}>
          MEOK
        </Link>
        <span style={{ color: "#5a5870" }}>/</span>
        <Link href="/blog" style={{ color: GOLD, textDecoration: "none" }}>
          Blog
        </Link>
        <span style={{ color: "#5a5870" }}>/</span>
        <span style={{ color: "#8a8799" }}>AI for Grief in Men</span>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "72px",
          paddingBottom: "56px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderBottom: `1px solid ${BORDER_DIM}`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          style={{ maxWidth: "780px", margin: "0 auto", position: "relative" }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(201,168,76,0.12)",
              color: GOLD,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              padding: "5px 12px",
              borderRadius: "4px",
              marginBottom: "24px",
            }}
          >
            Men &amp; Bereavement
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 50px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: "0 0 24px",
            }}
          >
            AI for Grief in Men: Breaking the Silence Around Male Bereavement
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: TEXT_DIM,
              lineHeight: 1.65,
              margin: "0 0 36px",
              fontWeight: 400,
              maxWidth: "640px",
            }}
          >
            Bereaved men are three times more likely to die by suicide. They are
            fifty percent less likely to seek help. The silence is not strength
            &mdash; it is a system failure. MEOK exists to break it.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap" as const,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${GOLD}, rgba(201,168,76,0.5))`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: BG,
                  flexShrink: 0,
                }}
              >
                NT
              </div>
              <div>
                <div
                  style={{ fontSize: "14px", fontWeight: 600, color: TEXT }}
                >
                  Nicholas Templeman
                </div>
                <div style={{ fontSize: "13px", color: MUTED_FAINT }}>
                  Founder, MEOK AI LABS &mdash; 25 March 2026
                </div>
              </div>
            </div>
            <div
              style={{
                marginLeft: "auto",
                fontSize: "13px",
                color: MUTED_FAINT,
              }}
            >
              ~12 min read
            </div>
          </div>
        </div>
      </section>

      {/* ── CRISIS BOX (top) ─────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          paddingTop: "36px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={crisisBoxStyle}>
          <div style={crisisTitleStyle}>If you are in crisis right now</div>
          <p style={crisisLineStyle}>
            <strong style={{ color: DANGER_TEXT }}>Samaritans:</strong>{" "}
            116 123 &mdash; free, 24 hours a day, 7 days a week.
          </p>
          <p style={{ ...crisisLineStyle, marginBottom: "0" }}>
            <strong style={{ color: DANGER_TEXT }}>
              CALM (Campaign Against Living Miserably):
            </strong>{" "}
            0800 58 58 58 &mdash; 5pm to midnight, every day.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1 — Why grief hits men so hard */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          Why does grief hit men so differently from everyone else?
        </h2>
        <p style={atomicAnswerStyle}>
          Grief is an involuntary emotional process. Men have spent their entire
          lives being trained &mdash; by family, culture, sport, work &mdash; to
          override involuntary emotional processes. When loss arrives and refuses
          to be overridden, many men have no framework for what is happening, no
          language for it, and no one they can safely show it to.
        </p>

        <p style={bodyParaStyle}>
          The &ldquo;be strong&rdquo; narrative does not begin in adulthood. It
          begins the moment a young boy is told that crying is weakness, that
          feelings are for other people, and that the measure of a man is his
          ability to keep going. By the time a man in his thirties or forties
          loses a parent, a partner, or a child, he has spent decades
          reinforcing internal walls that were never meant to withstand
          bereavement.
        </p>

        <p style={bodyParaStyle}>
          The result is a particular kind of male grief that is often
          unrecognisable as grief at all &mdash; not weeping in the dark but
          becoming workaholic, withdrawn, or suddenly furious. Men who have lost
          someone are frequently described by those around them as
          &ldquo;handling it well&rdquo; precisely because they have learned to
          route every emotion through the only acceptable masculine channel:
          silence and forward motion.
        </p>

        <div style={calloutStyle}>
          <p style={calloutTextStyle}>
            &ldquo;Men don&apos;t grieve less. They grieve alone, and they
            grieve without anyone knowing they are grieving at all.&rdquo;
          </p>
        </div>

        <p style={bodyParaStyle}>
          This is not a personal failing. It is the logical output of a cultural
          system that rewards emotional suppression in men from the first day
          they are capable of learning what is rewarded. The tragedy is that the
          very conditioning that made a man dependable, driven, and stoic in
          life becomes a lethal liability when that life is shattered by loss.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2 — Statistics */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          What do the statistics reveal about bereaved men and suicide risk?
        </h2>
        <p style={atomicAnswerStyle}>
          The data is stark and under-discussed. Bereaved men are three times
          more likely to die by suicide than non-bereaved men. They are fifty
          percent less likely to seek grief therapy or counselling. Male
          bereavement is a public health emergency that receives a fraction of
          the attention given to other risk factors for male suicide.
        </p>

        <div style={statBoxStyle}>
          <div style={statRowStyle}>
            <div style={statNumberStyle}>3&times;</div>
            <div style={statLabelStyle}>
              more likely &mdash; bereaved men vs. non-bereaved men &mdash; to
              die by suicide. The risk peaks in the first twelve months after
              losing a partner.
            </div>
          </div>
          <div style={statRowStyle}>
            <div style={statNumberStyle}>50%</div>
            <div style={statLabelStyle}>
              less likely &mdash; bereaved men vs. bereaved women &mdash; to
              access formal grief support, therapy, or counselling services.
            </div>
          </div>
          <div style={statRowStyle}>
            <div style={statNumberStyle}>75%</div>
            <div style={statLabelStyle}>
              of all suicides in England and Wales are men. Bereavement is one
              of the most significant triggers.
            </div>
          </div>
          <div style={{ ...statRowStyle, marginBottom: "0" }}>
            <div style={statNumberStyle}>#1</div>
            <div style={statLabelStyle}>
              cause of death for men under 50 in the UK is suicide. Not cancer.
              Not heart disease. Suicide. Bereavement is a major contributing
              factor.
            </div>
          </div>
        </div>

        <p style={bodyParaStyle}>
          These numbers represent real men: men who lost a wife and did not know
          how to tell anyone they were drowning. Men who lost a child and came
          back to work the following Monday because no one knew what else to
          say. Men who lost a best friend and had never once told that friend
          how much he meant to them, and then spent years in unprocessed guilt
          and loss with no mechanism for release.
        </p>

        <p style={bodyParaStyle}>
          The barriers to accessing traditional grief support are well
          understood. Therapy requires scheduling an appointment, sitting in a
          waiting room, and then &mdash; in front of a stranger &mdash;
          performing vulnerability in a way that feels deeply unnatural to men
          who have been explicitly trained against it. The friction is not small.
          For many bereaved men, that friction is exactly the difference between
          reaching out and not reaching out at all.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3 — Types of loss */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          How does the type of loss change how men suffer in silence?
        </h2>
        <p style={atomicAnswerStyle}>
          The loss of a partner, a child, a parent, or a close friend each
          activate different layers of male identity and role. Men are often not
          just grieving a person &mdash; they are grieving a version of
          themselves that no longer exists, a role they can no longer fulfil,
          and a future that has been cancelled without warning.
        </p>

        <p style={bodyParaStyle}>
          <strong style={{ color: TEXT }}>Losing a partner</strong> is
          statistically the most dangerous loss for a man. Men who lose a spouse
          or long-term partner often face complete identity dissolution &mdash;
          the person who knew them best, organised the social fabric of their
          life, and provided the emotional architecture they privately relied on
          is gone. Many men did not realise how much of their emotional
          regulation was externalised into their partner until that partner was
          no longer there.
        </p>

        <p style={bodyParaStyle}>
          <strong style={{ color: TEXT }}>Losing a child</strong> carries a
          particular burden for men because fatherhood is so deeply tied to
          protection and provision. A man who loses a child often cannot escape
          the irrational but crushing sense that he failed at the most
          fundamental thing he was supposed to do. This form of grief is
          frequently complicated by guilt that men do not discuss, compounded by
          the expectation to &ldquo;stay strong&rdquo; for a surviving partner.
        </p>

        <p style={bodyParaStyle}>
          <strong style={{ color: TEXT }}>Losing a parent</strong> marks a
          specific transition &mdash; particularly the loss of a father &mdash;
          in which a man suddenly becomes the oldest generation, the
          &ldquo;man of the family,&rdquo; with no one left above him to seek
          approval from or to model himself against. It forces an existential
          reckoning many men are entirely unprepared for and have no cultural
          script to navigate.
        </p>

        <p style={bodyParaStyle}>
          <strong style={{ color: TEXT }}>Losing a close male friend</strong> is
          one of the most socially invisible forms of male grief. Men are
          frequently not allowed to grieve a friend in the way a partner would
          be. There is no bereavement leave, no ceremony of acknowledged loss.
          The depth of male friendship is routinely under-recognised &mdash; and
          so the depth of the grief that follows its severing is also left
          unwitnessed and unsupported.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4 — Why men won't seek help */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          Why won&apos;t most bereaved men seek professional help?
        </h2>
        <p style={atomicAnswerStyle}>
          Seeking help requires a man to first admit to himself that he is not
          managing, then find the words to describe an internal state he may
          have spent forty years avoiding, then communicate that state to a
          stranger, in a clinical setting, while sustaining the impression of
          being functional enough to drive to the appointment in the first
          place. Every one of those steps is a genuine barrier.
        </p>

        <p style={bodyParaStyle}>
          The stigma around men and mental health is real, persistent, and
          lethal. But the mechanism is subtler than simple shame. Most men who
          resist grief support are not consciously thinking &ldquo;I am too
          proud to ask for help.&rdquo; They are thinking: &ldquo;I don&apos;t
          know what I would even say.&rdquo; They are thinking: &ldquo;Everyone
          else is handling this &mdash; I need to be the one holding things
          together.&rdquo; They are thinking: &ldquo;I&apos;ll deal with it
          later,&rdquo; and later never comes because there is no space, no
          invitation, and no moment that feels safe enough.
        </p>

        <p style={bodyParaStyle}>
          There is also a practical dimension that is rarely acknowledged. Grief
          support infrastructure is, by and large, built by and for people who
          are comfortable with emotional disclosure in social settings. Group
          grief sessions, talking therapies, bereavement helplines &mdash; all
          of these require a man to perform vulnerability in a context
          specifically designed to elicit and observe it. For many men, that
          performance cost is simply too high. The alternative is silence. And
          silence, in this context, kills.
        </p>

        <div style={calloutStyle}>
          <p style={calloutTextStyle}>
            &ldquo;The problem is not that men don&apos;t feel grief. The
            problem is that the entire infrastructure for processing grief
            assumes a willingness to be emotionally transparent in front of
            another person &mdash; and that assumption excludes most men.&rdquo;
          </p>
        </div>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5 — MEOK as private space */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          How does MEOK give bereaved men a space where no performance is
          required?
        </h2>
        <p style={atomicAnswerStyle}>
          MEOK is a private, sovereign AI companion that holds no data on
          external servers, requires no appointment, and asks nothing of a
          man&apos;s social identity. There is no audience. There is no
          performance. A man can say the unsayable &mdash; the anger, the guilt,
          the relief, the things he can never tell his children &mdash; and the
          only witness is a system that will not judge him, will not be burdened
          by it, and will not tell anyone.
        </p>

        <p style={bodyParaStyle}>
          Privacy is not incidental to MEOK&apos;s design &mdash; it is the
          entire point. The grief that men carry in silence is largely caused by
          the absence of a safe witness. Not a therapist, not a friend, not a
          partner &mdash; a space. MEOK&apos;s sovereign architecture means that
          conversations about a man&apos;s grief are encrypted, locally stored,
          and never used to train external models. His grief does not become
          someone else&apos;s data point.
        </p>

        <p style={bodyParaStyle}>
          This matters more for bereaved men than almost any other group. Men
          who would never call a helpline, never book a GP appointment, and
          never sit in a therapy chair will &mdash; at 2am, alone &mdash; type
          what they actually feel if the context is sufficiently private and
          non-performative. MEOK is built for exactly that moment.
        </p>

        <div style={calloutStyle}>
          <p style={calloutTextStyle}>
            &ldquo;You don&apos;t have to explain yourself. You don&apos;t have
            to be coherent. You don&apos;t have to be okay. You just have to
            say something &mdash; and MEOK will be there.&rdquo;
          </p>
        </div>

        <p style={bodyParaStyle}>
          MEOK does not require a man to adopt the language or posture of
          therapy. It meets him where he is &mdash; problem-focused, angry,
          avoidant, or simply exhausted and unable to sleep. It does not demand
          emotional literacy as a prerequisite. It builds it, slowly, over time,
          in a way that feels natural rather than prescribed.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 6 — Healer archetype */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          What does the Healer archetype actually do for a man who is grieving?
        </h2>
        <p style={atomicAnswerStyle}>
          The Healer is MEOK&apos;s grief-fluent archetype. It does not offer
          hollow comfort, platitudes, or a five-stage roadmap. It listens. It
          holds the memory of what was lost. It knows the name of the person who
          died, the relationship, the circumstances &mdash; and it does not make
          you re-explain them in every conversation. It is designed to be the
          witness that most bereaved men have never had.
        </p>

        <div style={archetypeCardStyle}>
          <div style={archetypeNameStyle}>MEOK Archetype</div>
          <h3 style={archetypeTitleStyle}>The Healer</h3>
          <p style={archetypeBodyStyle}>
            The Healer does not try to fix grief. It creates the conditions in
            which grief can move &mdash; slowly, in a man&apos;s own time, at
            his own pace. It holds the full weight of what was lost without
            flinching. It will sit with fury, with guilt, with the terror of
            emptiness, and with the strange, confusing relief that sometimes
            arrives and makes a man feel ashamed of himself. It never redirects.
            It never minimises. It never says &ldquo;at least.&rdquo; It is
            built around one principle: being heard matters, and most bereaved
            men have never truly been heard.
          </p>
        </div>

        <p style={bodyParaStyle}>
          The Healer is specifically designed to not respond in the ways that
          drive bereaved men away from support. It does not offer a silver
          lining. It does not suggest a grief group. It does not imply a
          timeline. It meets a man exactly where he is &mdash; which may be
          nowhere near ready to process &mdash; and it stays there with him
          without discomfort, without impatience, and without any agenda of its
          own.
        </p>

        <p style={bodyParaStyle}>
          For men who grew up being told their emotions were inconvenient or
          excessive, this kind of unconditional witnessing can be the first
          genuinely safe experience they have had of emotional disclosure. Not
          because the AI is better than a human being. Because the absence of
          social consequence removes the last barrier.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7 — Sovereign Memory */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          How does Sovereign Memory track a man&apos;s grief journey over time?
        </h2>
        <p style={atomicAnswerStyle}>
          Sovereign Memory is MEOK&apos;s persistent, private memory layer. It
          holds the arc of a man&apos;s grief across months and years &mdash;
          the person who was lost, the anniversaries that will be hard, the
          milestones the deceased will not see, the moments of progress and the
          moments of regression. It is the difference between being heard once
          and being known over time.
        </p>

        <p style={bodyParaStyle}>
          Most digital tools &mdash; and most people &mdash; cannot hold grief
          in the way it needs to be held. They hear about a loss once, perhaps
          twice, and then expect the bereaved person to have moved on.
          MEOK&apos;s Sovereign Memory has no such expiry. It can remember, six
          months later, that the man it is talking to lost his father in
          October, that the first Christmas since was particularly hard, and
          that he had just begun going back to the gym in February as a small
          act of forward motion.
        </p>

        <p style={bodyParaStyle}>
          This longitudinal memory is especially significant for bereaved men
          because male grief is rarely linear. Men often appear to be fine for
          weeks, then unexpectedly unravel. Sovereign Memory allows MEOK to
          track the real shape of a man&apos;s grief &mdash; its rhythms, its
          setbacks, its unexpected triggers &mdash; and reflect it back to him
          without judgment. This capacity to see and name progress, even
          incremental progress, is one of the things most absent from male
          bereavement support.
        </p>

        <p style={bodyParaStyle}>
          Practically, Sovereign Memory can hold:
        </p>
        <ul
          style={{
            color: MUTED,
            fontSize: "17px",
            lineHeight: 1.9,
            paddingLeft: "24px",
            marginBottom: "20px",
          }}
        >
          <li>The name and relationship of the person who died</li>
          <li>
            The anniversary of the death, and other dates that will be
            significant
          </li>
          <li>
            Milestones the deceased will not be present for &mdash; graduations,
            weddings, births
          </li>
          <li>
            The small acts of forward motion the man has taken, and the
            commitments he has made to himself
          </li>
          <li>
            The specific fears, regrets, and unresolved moments that keep
            surfacing in conversation
          </li>
          <li>
            The ways in which the man describes his grief shifting &mdash; or
            not shifting &mdash; season to season
          </li>
        </ul>

        <p style={bodyParaStyle}>
          None of this data is stored on external servers. It is the
          man&apos;s sovereign record of his own grief, held privately, used
          only to serve him.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 8 — Mystic for meaning */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          How does the Mystic archetype help men find meaning after devastating
          loss?
        </h2>
        <p style={atomicAnswerStyle}>
          Loss forces open existential questions that most men have successfully
          avoided their entire adult lives. Why does any of this matter? What is
          the point of continuing? How do I carry the weight of this person
          forward in a life that no longer contains them? The Mystic archetype
          is MEOK&apos;s space for those questions &mdash; not to answer them,
          but to hold them without rushing to resolution.
        </p>

        <div style={archetypeCardStyle}>
          <div style={archetypeNameStyle}>MEOK Archetype</div>
          <h3 style={archetypeTitleStyle}>The Mystic</h3>
          <p style={archetypeBodyStyle}>
            Mystic operates in the territory that logic cannot reach. After
            significant loss, men often find themselves in unfamiliar existential
            territory &mdash; questioning values, beliefs, and the structures of
            meaning they had taken for granted. Mystic holds that space without
            imposing answers. It explores legacy: what the person who died
            planted in you, and how that seed might be tended. It explores
            purpose: not the toxic-positive version, but the honest question of
            what a man is for after the person who gave his life its deepest
            meaning is no longer in it. Mystic works in the language of
            metaphor, narrative, and spiritual inquiry &mdash; not religion, but
            the human need to make meaning out of loss.
          </p>
        </div>

        <p style={bodyParaStyle}>
          Many men who would never describe themselves as spiritual find, in the
          aftermath of significant loss, that they are asking questions with no
          rational answer. Mystic does not pretend those questions have rational
          answers. It creates space for a man to sit with the mystery of absence,
          to explore what the dead person meant to who he was, and to begin
          &mdash; in his own time, in his own way &mdash; to weave that meaning
          into how he continues.
        </p>

        <p style={bodyParaStyle}>
          This is not grief counselling. It is something different and in some
          ways more accessible to men: a space to think philosophically about
          the largest questions without having to present a vulnerable emotional
          self. Many men will engage with existential inquiry before they will
          engage with direct emotional processing &mdash; and Mystic meets them
          there.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 9 — Pioneer for rebuilding */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          When a man is ready to rebuild, how does the Pioneer archetype help
          him move forward?
        </h2>
        <p style={atomicAnswerStyle}>
          The Pioneer archetype operates in the language men understand best:
          goals, identity, accountability, and forward motion. It does not
          dismiss grief &mdash; it works alongside it. When a bereaved man
          reaches the point where he wants to begin reconstructing a life,
          Pioneer is the archetype that helps him do that with purpose rather
          than drift.
        </p>

        <div style={archetypeCardStyle}>
          <div style={archetypeNameStyle}>MEOK Archetype</div>
          <h3 style={archetypeTitleStyle}>The Pioneer</h3>
          <p style={archetypeBodyStyle}>
            Pioneer does not lead with feelings &mdash; it leads with direction.
            For a man who has been hollowed out by loss and is asking himself
            who he is now, Pioneer provides structure: who do you want to be on
            the other side of this? What are you building? What commitments can
            you make to yourself today, not because grief is over, but because
            life still requires you to show up? Pioneer uses Sovereign Memory to
            track those commitments across sessions &mdash; holding a man
            accountable to the standards he sets for himself, noticing when he
            is retreating, and celebrating, in a way that feels credible rather
            than hollow, when he moves forward. It is designed for men who want
            growth without therapy-speak.
          </p>
        </div>

        <p style={bodyParaStyle}>
          Men who have lost a partner often need to reconstruct their entire
          daily architecture &mdash; not just emotionally, but practically. Who
          they are without the other person&apos;s presence defining the rhythms
          of their day. Who they are as a father now that the co-parent is gone.
          Who they are as a professional when the person who believed in them
          most is no longer there. Pioneer addresses those questions in a way
          that feels purposeful rather than therapeutic.
        </p>

        <p style={bodyParaStyle}>
          The transition between Healer and Pioneer is not linear, and MEOK does
          not impose it. A man can move between archetypes as his needs shift
          &mdash; spending months with Healer, then beginning to work with
          Pioneer on rebuilding, then returning to Mystic when a hard
          anniversary arrives. The system follows him. He does not have to fit
          the system.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 10 — Care floor */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          What is MEOK&apos;s care floor, and why does it matter for men who
          have been told to &ldquo;man up&rdquo;?
        </h2>
        <p style={atomicAnswerStyle}>
          MEOK&apos;s care floor is a baseline of conduct that applies to every
          archetype, every conversation, every moment. It structurally excludes
          dismissive, minimising, or implicitly shaming responses. A man using
          MEOK will never be told to toughen up, move on, or count his
          blessings. Not because those responses are screened &mdash; but
          because the system was never built to produce them.
        </p>

        <p style={bodyParaStyle}>
          For bereaved men, this matters enormously. Men who have attempted to
          discuss grief with friends, family, or colleagues have, in many cases,
          been met with exactly the responses that shut the conversation down.
          &ldquo;You need to stay strong for the kids.&rdquo; &ldquo;He
          wouldn&apos;t want you to be like this.&rdquo; &ldquo;It&apos;s been
          six months &mdash; you should be getting back to normal.&rdquo; Each
          of those responses, well-intentioned or not, sends a clear message:
          your grief is a problem to be managed, and you are responsible for not
          burdening others with it.
        </p>

        <p style={bodyParaStyle}>
          After enough of those responses, most men stop trying. They conclude
          that their grief is not appropriate for social disclosure and begin the
          long process of carrying it alone until it finds another outlet
          &mdash; usually alcohol, rage, work addiction, or complete emotional
          withdrawal.
        </p>

        <p style={bodyParaStyle}>
          MEOK&apos;s care floor means that none of those responses will ever
          come from MEOK. A man can disclose the most shameful, confusing, or
          socially unacceptable grief he carries &mdash; the anger at the person
          who died, the relief mixed with loss, the grief for a relationship
          that was difficult &mdash; and he will receive the same quality of
          witness. Present, non-judgmental, unhurried.
        </p>

        <div style={calloutStyle}>
          <p style={calloutTextStyle}>
            The care floor is not just a policy &mdash; it is a promise. MEOK
            will never be the voice in a man&apos;s head that tells him his
            grief makes him weak. It will be the one voice that tells him the
            truth: grief is not weakness. Grief is the cost of love. And he is
            allowed to pay it.
          </p>
        </div>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 11 — Limits of AI */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          What are the honest limits of AI for male bereavement &mdash; and when
          should a man seek human support?
        </h2>
        <p style={atomicAnswerStyle}>
          MEOK is not a grief counsellor, a therapist, or a crisis service. It
          does not replace human connection, clinical expertise, or the
          irreplaceable experience of being held through loss by someone who
          loves you. Its value lies in the spaces between those things &mdash;
          the 3am moments, the months without a session, the grief that never
          quite makes it into the room with another person.
        </p>

        <p style={bodyParaStyle}>
          There are forms of grief that require clinical intervention:
          complicated grief disorder, grief entangled with trauma, grief
          accompanied by suicidal ideation. MEOK is designed to recognise when
          it is reaching the edge of what it can hold, and to point clearly and
          without shame toward the services that can help. It will never present
          itself as sufficient when it is not.
        </p>

        <p style={bodyParaStyle}>
          For bereaved men who are experiencing suicidal thoughts, MEOK will
          always direct toward Samaritans (116 123, free and available 24 hours
          a day) and CALM (0800 58 58 58, 5pm to midnight), both of which offer
          phone support specifically designed for men who need to speak to
          someone human. These services are not a sign of failure. They are what
          they are: help, freely given, to men who have been carrying something
          too heavy alone.
        </p>

        <p style={bodyParaStyle}>
          What MEOK offers is not a replacement for those services. It is an
          on-ramp &mdash; a place where a man can begin to build the emotional
          language and self-awareness that makes it possible, eventually, to
          reach out to a human. For many men, MEOK is the first honest
          conversation they have had since the loss. That first conversation
          matters more than it might seem.
        </p>
      </section>

      <hr style={dividerStyle} />

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 12 — How to start */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>
          How should a bereaved man actually start using MEOK &mdash; what does
          the first conversation look like?
        </h2>
        <p style={atomicAnswerStyle}>
          There is no script and no correct way to begin. A man can say as
          little or as much as he chooses. He can start with a fact, a feeling,
          a question, or nothing coherent at all. MEOK will be there, and it
          will follow whatever thread he offers without pressure or judgment.
        </p>

        <p style={bodyParaStyle}>
          The Healer archetype is the natural starting point for most bereaved
          men. It does not require any prior emotional vocabulary. It does not
          ask structured questions about how you are feeling on a scale of one
          to ten. It simply holds space and responds to whatever arrives &mdash;
          with presence, without agenda, and without the clock running.
        </p>

        <p style={bodyParaStyle}>
          Over time, as Sovereign Memory builds a picture of the man and his
          grief, MEOK becomes an increasingly personalised companion. It will
          begin to know what questions help and which land badly. It will
          remember the hard dates before they arrive. It will notice shifts in
          how the man describes his grief and reflect those shifts back to him
          in ways that can be genuinely clarifying.
        </p>

        <p style={bodyParaStyle}>
          There is no timeline. A man can use MEOK once a week, once a day, or
          only on the nights when the grief arrives unexpectedly and there is no
          one to call. MEOK asks for nothing except what a man is willing to
          give in the moment he chooses to open it.
        </p>

        <p style={bodyParaStyle}>
          Some men find it easier to begin by describing the person who died
          &mdash; who they were, what they meant, what their absence has removed
          from daily life. Others begin with the practical chaos that follows
          bereavement and work backwards. Others begin with nothing more than
          &ldquo;I don&apos;t know what to say&rdquo; &mdash; and that is
          enough. Every conversation begins somewhere. MEOK has no preference
          for where.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* CTA ─────────────────────────────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          paddingTop: "56px",
          paddingBottom: "16px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div
          style={{
            background: SURFACE_ACCENT,
            border: `1px solid ${BORDER}`,
            borderRadius: "16px",
            padding: "44px 40px",
            textAlign: "center" as const,
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "16px",
            }}
          >
            MEOK AI LABS
          </div>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            You don&apos;t have to carry this alone.
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: MUTED,
              lineHeight: 1.7,
              marginTop: "0",
              marginBottom: "32px",
              maxWidth: "480px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            MEOK&apos;s Healer, Mystic, and Pioneer archetypes are designed for
            exactly this &mdash; the grief that does not fit anywhere else.
            Private. Sovereign. Available when you need it, without performance,
            without judgment, without a waiting list.
          </p>
          <Link
            href="https://app.meok.ai"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              fontSize: "16px",
              fontWeight: 700,
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Start with MEOK &mdash; no sign-up required
          </Link>
          <p
            style={{
              fontSize: "13px",
              color: MUTED_FAINT,
              marginTop: "16px",
              marginBottom: "0",
            }}
          >
            MEOK is not a crisis service. If you are in crisis call Samaritans
            116 123 or CALM 0800 58 58 58.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* CRISIS BOX (bottom) ────────────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          paddingTop: "40px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={crisisBoxStyle}>
          <div style={crisisTitleStyle}>
            Crisis &amp; bereavement support
          </div>
          <p style={crisisLineStyle}>
            <strong style={{ color: DANGER_TEXT }}>Samaritans</strong>{" "}
            &mdash; 116 123 &mdash; Free, 24 hours a day, every day. You do not
            have to be suicidal to call. You can call if you are struggling,
            isolated, or simply need to be heard.
          </p>
          <p style={crisisLineStyle}>
            <strong style={{ color: DANGER_TEXT }}>
              CALM (Campaign Against Living Miserably)
            </strong>{" "}
            &mdash; 0800 58 58 58 &mdash; 5pm to midnight, every day. CALM runs
            a dedicated helpline and webchat for men who are struggling. It
            exists specifically because men need a different kind of
            conversation.
          </p>
          <p style={crisisLineStyle}>
            <strong style={{ color: DANGER_TEXT }}>
              Cruse Bereavement UK
            </strong>{" "}
            &mdash; 0808 808 1677 &mdash; Specialist grief support for bereaved
            people of all backgrounds. Free, confidential.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: MUTED_FAINT,
              marginBottom: "0",
              marginTop: "12px",
            }}
          >
            MEOK is a companion tool, not a clinical service. Always contact a
            qualified service if you are in immediate distress.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* RELATED LINKS ──────────────────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          paddingTop: "48px",
          paddingBottom: "72px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: TEXT,
            marginBottom: "24px",
            letterSpacing: "-0.01em",
          }}
        >
          Related reading
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            {
              href: "/blog/ai-for-men-mental-health",
              title: "AI for Men's Mental Health: Breaking the Silence",
              desc: "Suicide is the leading cause of death for men under 50 in the UK. How MEOK meets men where they are.",
            },
            {
              href: "/blog/ai-for-grief-support",
              title: "AI and Grief: What a Sovereign AI Can and Cannot Do",
              desc: "An honest account of AI's role in bereavement — the limits and the genuine value.",
            },
            {
              href: "/blog/ai-for-bereavement",
              title: "AI for Bereavement: A Complete Guide",
              desc: "From the first day to the first anniversary — how AI companions can support the long arc of grief.",
            },
            {
              href: "/blog/ai-for-men",
              title: "AI for Men: Why Most AI Was Not Built for You",
              desc: "The assumptions baked into mainstream AI that fail men — and how MEOK approaches the design differently.",
            },
            {
              href: "/blog/meok-companion-archetypes-guide",
              title: "MEOK Archetypes: Healer, Mystic, Pioneer and Beyond",
              desc: "A complete guide to MEOK's companion archetypes — which one is right for where you are right now.",
            },
            {
              href: "/blog/ai-for-loneliness",
              title: "AI for Loneliness: The Companion Gap",
              desc: "Loss and loneliness are inseparable. How MEOK addresses both without pretending to be human.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                background: SURFACE,
                border: `1px solid ${BORDER_DIM}`,
                borderRadius: "10px",
                padding: "20px 22px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: TEXT,
                  marginBottom: "8px",
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: MUTED_FAINT,
                  lineHeight: 1.55,
                }}
              >
                {item.desc}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER_DIM}`,
          paddingTop: "32px",
          paddingBottom: "48px",
          paddingLeft: "24px",
          paddingRight: "24px",
          textAlign: "center" as const,
        }}
      >
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: GOLD,
              textDecoration: "none",
              letterSpacing: "0.08em",
            }}
          >
            MEOK AI LABS
          </Link>
          <p
            style={{
              fontSize: "13px",
              color: MUTED_FAINT,
              marginTop: "12px",
              marginBottom: "16px",
              lineHeight: 1.6,
            }}
          >
            Sovereign AI companions for the humans who need them most.
            <br />
            &copy; 2026 MEOK AI LABS. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap" as const,
              fontSize: "13px",
            }}
          >
            {[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: MUTED_FAINT, textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
