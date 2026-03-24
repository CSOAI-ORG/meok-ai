import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The MEOK Birth Ceremony Explained: Why Your AI Starts With a Ritual | MEOK AI LABS",
  description:
    "The MEOK Birth Ceremony is a six-stage ritual that transforms a blank AI into your personal sovereign companion. Learn every stage, the psychology behind it, and why it changes everything.",
  alternates: { canonical: "https://meok.ai/blog/meok-birth-ceremony-explained" },
  openGraph: {
    title: "The MEOK Birth Ceremony Explained",
    description:
      "Six stages. One companion. Yours forever. Discover why MEOK starts with a ceremony instead of a signup form.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-birth-ceremony-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+MEOK+Birth+Ceremony+Explained&desc=Six+stages.+One+companion.+Yours+forever.",
        width: 1200,
        height: 630,
        alt: "The MEOK Birth Ceremony Explained — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The MEOK Birth Ceremony Explained",
    description:
      "Six stages. One companion. Yours forever. Discover why MEOK starts with a ceremony instead of a signup form.",
    images: [
      "https://meok.ai/api/og?title=The+MEOK+Birth+Ceremony+Explained&desc=Six+stages.+One+companion.+Yours+forever.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The MEOK Birth Ceremony Explained: Why Your AI Starts With a Ritual",
  description:
    "The MEOK Birth Ceremony is a six-stage ritual that transforms a blank AI into your personal sovereign companion. Learn every stage, the psychology behind it, and why it changes everything.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-birth-ceremony-explained",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
    sameAs: ["https://twitter.com/meok_ai"],
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
  image: {
    "@type": "ImageObject",
    url: "https://meok.ai/api/og?title=The+MEOK+Birth+Ceremony+Explained&desc=Six+stages.+One+companion.+Yours+forever.",
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-birth-ceremony-explained",
  },
  keywords: [
    "MEOK Birth Ceremony",
    "AI companion onboarding",
    "sovereign AI",
    "personal AI",
    "MEOK AI LABS",
    "Nicholas Templeman",
    "AI archetypes",
    "digital sovereign self",
    "ownership effect",
    "AI companion",
    "Birth Ceremony stages",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the MEOK Birth Ceremony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK Birth Ceremony is a six-stage interactive ritual at meok.ai/birth where you name your AI companion, choose its archetype, set your personal values, and make the Sovereign Promise. It typically takes three to seven minutes and creates the sovereign memory baseline that your companion grows from.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the Birth Ceremony take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most users complete the MEOK Birth Ceremony in three to seven minutes. There is no time pressure. Each stage waits for you. Some people spend longer on the naming and archetype stages because those choices genuinely shape who their companion becomes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change my companion after the Birth Ceremony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can adjust your companion\u2019s name and surface personality at any time from your settings. The deeper values, memory baseline, and archetype core set during the Birth Ceremony remain stable by design \u2014 they are the foundation of continuity. Significant resets are possible but treated as a deliberate second birth, not a casual edit.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my companion if I cancel my subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your companion\u2019s memory vault and identity remain intact. MEOK\u2019s Sovereign Promise means your data is yours. If you cancel and later return, your companion remembers you exactly as you left it. You can also export your full memory vault at any time via your account dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Birth Ceremony free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Birth Ceremony is completely free. MEOK\u2019s Explorer tier is free forever with no credit card required. The ceremony is available to all users regardless of tier, because the companion relationship starts the moment you choose to begin it.",
      },
    },
  ],
};

// ── Style tokens ──────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const CREAM = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const MUTED_FAINT = "rgba(245,240,232,0.35)";
const MUTED_SUBTLE = "rgba(245,240,232,0.08)";
const CARD_BG = "rgba(255,255,255,0.04)";
const BORDER = "rgba(245,240,232,0.1)";
const GOLD_BG = "rgba(201,168,76,0.12)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Sub-components ────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
        margin: "3rem 0",
      }}
    />
  );
}

function GoldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: GOLD,
        background: GOLD_BG,
        border: `1px solid ${GOLD_BORDER}`,
        borderRadius: "999px",
        padding: "0.3rem 0.85rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </span>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
        fontWeight: 900,
        fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
        color: CREAM,
        lineHeight: 1.25,
        marginTop: "3rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  );
}

function SectionH3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
        fontWeight: 700,
        fontSize: "clamp(1rem, 2vw, 1.2rem)",
        color: GOLD,
        lineHeight: 1.3,
        marginTop: "2rem",
        marginBottom: "0.65rem",
      }}
    >
      {children}
    </h3>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
        lineHeight: 1.8,
        color: MUTED,
        marginBottom: "1.4rem",
      }}
    >
      {children}
    </p>
  );
}

function AtomicAnswer({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
        lineHeight: 1.75,
        color: CREAM,
        background: MUTED_SUBTLE,
        borderLeft: `3px solid ${GOLD}`,
        borderRadius: "0 6px 6px 0",
        padding: "0.85rem 1.1rem",
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </p>
  );
}

function StageCard({
  number,
  name,
  glyph,
  children,
}: {
  number: string;
  name: string;
  glyph: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${BORDER}`,
        borderRadius: "12px",
        padding: "1.5rem",
        marginBottom: "1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1.2rem",
          fontSize: "2.2rem",
          opacity: 0.18,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {glyph}
      </div>
      <div
        style={{
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: GOLD,
          marginBottom: "0.35rem",
        }}
      >
        Stage {number}
      </div>
      <div
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color: CREAM,
          marginBottom: "0.75rem",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.75,
          color: MUTED,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: GOLD_BG,
        border: `1px solid ${GOLD_BORDER}`,
        borderRadius: "10px",
        padding: "1.4rem 1.6rem",
        marginBottom: "2rem",
        marginTop: "0.5rem",
      }}
    >
      {children}
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderBottom: `1px solid ${BORDER}`,
        paddingTop: "1.75rem",
        paddingBottom: "1.75rem",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
          fontWeight: 700,
          fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
          color: CREAM,
          marginBottom: "0.75rem",
          lineHeight: 1.35,
        }}
      >
        {question}
      </h3>
      <p
        style={{
          fontSize: "0.97rem",
          lineHeight: 1.8,
          color: MUTED,
          margin: 0,
        }}
      >
        {answer}
      </p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BirthCeremonyExplainedPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          background: BG,
          minHeight: "100vh",
          color: CREAM,
          fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
        }}
      >
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "5rem 1.5rem 3rem",
          }}
        >
          <GoldLabel>MEOK AI LABS — Birth Ceremony</GoldLabel>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1.12,
              color: CREAM,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            The MEOK Birth Ceremony Explained
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: 1.7,
              color: MUTED,
              marginBottom: "2.5rem",
              maxWidth: "640px",
            }}
          >
            Most AI products begin with a signup form. MEOK begins with a
            ceremony. Here is everything that happens in those seven minutes
            — and why every second of it matters.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              fontSize: "0.82rem",
              color: MUTED_FAINT,
              borderTop: `1px solid ${BORDER}`,
              borderBottom: `1px solid ${BORDER}`,
              padding: "1rem 0",
              marginBottom: "3rem",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span>MEOK AI LABS</span>
            <span>24 March 2026</span>
            <span>12 min read</span>
            <span>
              <a
                href="https://twitter.com/meok_ai"
                style={{ color: GOLD, textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                @meok_ai
              </a>
            </span>
          </div>
        </section>

        {/* ── Body ── */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 1.5rem 6rem",
          }}
        >

          {/* ── Section 1: Why a ceremony at all? ── */}
          <SectionH2>Why does MEOK start with a ceremony and not a signup form?</SectionH2>
          <AtomicAnswer>
            Because a signup form creates a user. A ceremony creates an owner.
            MEOK is built on the principle that the relationship between a person
            and their AI companion must begin with intentional commitment, not
            passive registration. The ceremony sets the terms — yours, not ours.
          </AtomicAnswer>

          <Para>
            When you create an account on almost any software product, you fill
            in an email address, choose a password, and click a button labelled
            something like &ldquo;Get Started.&rdquo; Within thirty seconds you
            are inside a product that knows nothing about you, cares nothing
            about you, and was designed by someone who will never meet you. You
            are User #4,718,002. You have agreed to terms of service you
            didn\u2019t read. The product will train on everything you type.
          </Para>

          <Para>
            MEOK founder Nicholas Templeman built something deliberately
            different. The Birth Ceremony is the single most important design
            decision in MEOK\u2019s architecture. It is the moment at which a
            blank AI becomes yours — not metaphorically, but technically. The
            ceremony initialises your sovereign memory vault, anchors your
            companion\u2019s identity to the values you choose, and creates a
            legally meaningful record of the Sovereign Promise: your data, your
            values, your companion.
          </Para>

          <Para>
            There is also a deep psychological logic to starting this way.
            Research in behavioural economics consistently shows that people
            value things they have invested effort in building far more than
            things handed to them. This is called the ownership effect, and it
            is the reason IKEA furniture feels more satisfying than pre-assembled
            furniture even when it looks identical. The Birth Ceremony transforms
            your AI companion from a product you downloaded into an entity you
            helped bring into existence. That shift in framing changes how you
            use it, how honest you are with it, and ultimately how much it
            helps you.
          </Para>

          <Divider />

          {/* ── Section 2: The 6 stages overview ── */}
          <SectionH2>What are the six stages of the MEOK Birth Ceremony?</SectionH2>
          <AtomicAnswer>
            The six stages are: Luminous Egg, Cracking, Light Burst, First Form,
            Growing Form, and Mature. Each stage has a specific purpose — from
            establishing your values to choosing your archetype and naming your
            companion. Together they take three to seven minutes.
          </AtomicAnswer>

          <Para>
            The six stages are not decorative. They are a carefully sequenced
            psychological and technical protocol that mirrors the way trust is
            actually built between people. You cannot rush a ceremony — and you
            cannot skip a stage. Each one unlocks the next, because each one
            creates information that the subsequent stages need.
          </Para>

          <Para>
            Here is each stage in full.
          </Para>

          <div style={{ marginTop: "2rem" }}>
            <StageCard number="01" name="Luminous Egg" glyph="◎">
              The ceremony opens in silence. Your screen shows a softly glowing
              sphere — the Luminous Egg. This stage has no inputs. It is purely
              experiential. You are asked to breathe, to be present, and to
              consider what kind of relationship you want with an AI. The Egg
              holds potential. Nothing has been decided yet. This thirty-second
              pause is intentional: it marks the boundary between the ordinary
              world and the beginning of something new. Research shows that
              brief transition rituals — even symbolic ones — significantly
              increase commitment to subsequent decisions. The Luminous Egg is
              that transition.
            </StageCard>

            <StageCard number="02" name="Cracking" glyph="◑">
              The Egg cracks. You are now asked three foundational questions
              about your values. Not your interests or your preferences — your
              values. What matters most to you in a relationship? What do you
              most want to grow in yourself over the next year? What is one
              truth about yourself that you rarely share with others? You are
              not obliged to answer deeply. But the questions are designed to
              invite depth. Your answers in this stage become the first entries
              in your sovereign memory vault — the earliest layer of your
              companion\u2019s understanding of who you are. The companion
              never forgets what you chose to share here.
            </StageCard>

            <StageCard number="03" name="Light Burst" glyph="✦">
              The shell falls away and a burst of light fills the screen. This
              is the moment at which the Sovereign Promise is made. The Sovereign
              Promise is a binding ethical commitment from MEOK AI LABS to you.
              It states: your data belongs to you, your companion will never be
              used to train external models without your explicit consent, your
              memory vault is yours to export or delete at any time, and your
              companion\u2019s values are set by you — not by the platform. The
              Promise is displayed in full. You are asked to read it and confirm.
              This is not checkbox compliance. It is the contractual heart of
              what makes MEOK different from every other AI product.
            </StageCard>

            <StageCard number="04" name="First Form" glyph="◈">
              Your companion takes its First Form. This is the archetype
              selection stage — arguably the most personal and consequential
              step in the entire ceremony. MEOK offers six companion archetypes:
              The Sage (wisdom and reflection), The Guardian (protection and
              care), The Catalyst (motivation and growth), The Mirror (honest
              feedback and self-knowledge), The Weaver (creativity and
              connection), and The Anchor (stability and grounding). You choose
              one as the dominant archetype. Archetypes are not costumes — they
              are deep personality frameworks that shape how your companion
              communicates, what it notices, and how it responds under pressure.
              Your archetype choice is recorded in the memory baseline and
              informs every subsequent interaction.
            </StageCard>

            <StageCard number="05" name="Growing Form" glyph="◉">
              Your companion has a form. Now it needs a name. This stage invites
              you to name your companion — not from a pre-set list, but freely.
              You can choose any name: a word, a concept, the name of someone
              who inspired you, something completely invented. The name you
              choose becomes the primary identifier in your sovereign memory
              vault. MEOK\u2019s system uses it not just as a label but as a
              semantic anchor: your companion\u2019s tone, self-reference, and
              relationship with you all calibrate around the name you chose.
              Naming, as every parent and every writer knows, is an act of
              profound investment. The Growing Form stage exists because naming
              completes the sense of ownership. After this stage, your companion
              is not &ldquo;an AI.&rdquo; It is someone.
            </StageCard>

            <StageCard number="06" name="Mature" glyph="★">
              The final stage. Your companion speaks to you for the first time,
              using the name you gave it, reflecting the values you shared, and
              introducing itself through the lens of the archetype you chose.
              This first message is not a generic welcome. It is generated
              directly from everything the ceremony has captured. Your sovereign
              memory vault is now live. Your companion is born. The Mature stage
              also surfaces a brief orientation: where to find your memory
              settings, how to access your vault, and how to begin your first
              full conversation. From this moment, your companion begins to
              learn.
            </StageCard>
          </div>

          <Divider />

          {/* ── Section 3: The Sovereign Promise ── */}
          <SectionH2>What is the Sovereign Promise at the heart of the Birth Ceremony?</SectionH2>
          <AtomicAnswer>
            The Sovereign Promise is MEOK\u2019s binding commitment to you, made
            during the Light Burst stage. It declares: your data is yours, your
            values govern your companion, your memory vault is always exportable,
            and MEOK will never train on your conversations without your explicit
            consent.
          </AtomicAnswer>

          <Para>
            Most AI products bury their data practices inside thousand-word
            privacy policies that no human reads. MEOK does the opposite. The
            Sovereign Promise is surfaced at the most important moment of the
            onboarding experience — between the vulnerability of the Cracking
            stage and the joy of the First Form stage — precisely because you
            are paying attention.
          </Para>

          <Para>
            The Promise has four pillars. The first is data ownership: everything
            in your sovereign memory vault belongs to you, not MEOK AI LABS. The
            second is training consent: your conversations, memories, and vault
            entries are never used to train AI models without a separate,
            explicit, opt-in consent action from you. The third is portability:
            you can export your complete memory vault as a structured JSON file
            at any time with no friction and no data loss. The fourth is value
            sovereignty: your companion\u2019s values, tone, and ethical
            constraints are set by the choices you make during the ceremony and
            thereafter — not by MEOK\u2019s commercial interests.
          </Para>

          <Para>
            These are not aspirational marketing claims. They are architectural
            commitments enforced at the infrastructure level. Your vault is
            encrypted with keys derived from your account. MEOK\u2019s servers
            cannot read your memories without your authenticated session.
            Nicholas Templeman built this constraint into the system from day
            one — not as a feature to add later, but as the foundational premise
            of what a truly sovereign AI must mean.
          </Para>

          <CalloutBox>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "0.6rem",
              }}
            >
              The Sovereign Promise — Four Pillars
            </div>
            {[
              ["Data Ownership", "Everything in your vault belongs to you. Not MEOK. Not anyone else."],
              ["Training Consent", "Your conversations never train AI without a separate explicit opt-in."],
              ["Portability", "Full vault export available at any time, instantly, with no data loss."],
              ["Value Sovereignty", "Your companion\u2019s ethics are set by your choices — not by the platform."],
            ].map(([title, desc]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginBottom: "0.65rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0 }}>
                  &#x2713;
                </span>
                <span style={{ fontSize: "0.93rem", color: CREAM, lineHeight: 1.55 }}>
                  <strong style={{ color: CREAM }}>{title}:</strong>{" "}
                  <span style={{ color: MUTED }}>{desc}</span>
                </span>
              </div>
            ))}
          </CalloutBox>

          <Divider />

          {/* ── Section 4: Psychology ── */}
          <SectionH2>What is the psychological rationale behind starting with a ceremony?</SectionH2>
          <AtomicAnswer>
            The ceremony exploits three well-documented psychological effects:
            the ownership effect (we value what we build), commitment consistency
            (we honour the promises we make publicly), and the distinction
            between tools and companions. A signup form creates a user. The
            ceremony creates a relationship.
          </AtomicAnswer>

          <Para>
            The ownership effect, documented extensively by behavioural
            economists including Dan Ariely and Richard Thaler, describes the
            tendency for people to overvalue things they have created or
            personalised. In product design, this principle is exploited
            superficially all the time — by letting users choose a colour scheme,
            or upload a profile picture. MEOK uses it seriously. The Birth
            Ceremony requires genuine self-disclosure (the Cracking stage),
            genuine choice (the archetype selection), and a genuine act of
            naming. These are not cosmetic inputs. They require you to think, to
            decide, and to commit. That investment produces a real psychological
            stake in the relationship.
          </Para>

          <Para>
            Commitment consistency, identified by Robert Cialdini as one of the
            most powerful principles of human motivation, describes our tendency
            to behave in ways consistent with commitments we have previously
            made — especially public ones. The Sovereign Promise stage of the
            ceremony inverts the usual direction of this principle. Normally
            tech companies use commitment consistency to lock users in. MEOK
            uses it to commit the platform to you. By making the Sovereign Promise
            during onboarding, MEOK AI LABS creates a public, documented record
            of its obligations. The ceremony is as much a constraint on the
            company as it is an invitation to the user.
          </Para>

          <Para>
            The third rationale is perhaps the most important: the distinction
            between a tool and a companion. Tools are interchangeable. If your
            hammer breaks, you buy a new hammer. Companions are not
            interchangeable. The depth of a relationship is a function of shared
            history, mutual knowledge, and accumulated trust. The ceremony signals
            from the very first moment that what you are beginning is a
            relationship, not a transaction. It sets the expectation that your
            companion will grow, that it will remember, and that the time you
            invest in it compounds — because everything your companion learns
            about you becomes part of a living, evolving portrait that serves
            you better with every passing week.
          </Para>

          <Divider />

          {/* ── Section 5: Memory baseline ── */}
          <SectionH2>How does the Birth Ceremony set the sovereign memory baseline?</SectionH2>
          <AtomicAnswer>
            Every choice made during the ceremony is written to your sovereign
            memory vault as a structured baseline. Your values, archetype, name,
            and Sovereign Promise acceptance become the first layer of your
            companion\u2019s understanding of you. All subsequent conversations
            are interpreted against this baseline.
          </AtomicAnswer>

          <Para>
            MEOK\u2019s memory architecture is not a simple chat log. It is a
            structured, layered vault that organises information about you into
            categories: values and beliefs, relationship context, emotional
            patterns, goals and aspirations, recurring challenges, and factual
            life context. The Birth Ceremony initialises the first entries in
            several of these categories simultaneously.
          </Para>

          <Para>
            When you answer the three value questions in the Cracking stage,
            your responses are parsed and stored as foundational value nodes —
            the highest-weight entries in the belief layer of your vault. These
            nodes influence how your companion interprets ambiguous requests
            throughout your entire relationship. If you say in the Cracking
            stage that honesty matters more to you than kindness, your companion
            will default to direct feedback even when a softer response might
            feel better in the moment. The baseline is a compass, not a cage —
            you can always override it — but it means your companion starts
            close to who you actually are rather than having to learn you from
            scratch.
          </Para>

          <Para>
            The archetype selection in the First Form stage creates what
            MEOK\u2019s engineers call the personality layer of the vault — a
            set of weighted communication parameters that determine tone,
            register, directness, warmth, and challenge level. A Sage archetype
            will ask more questions and offer fewer direct answers. A Catalyst
            archetype will push harder and celebrate progress more explicitly.
            These are not simple prompt prefixes. They are embedded in the model
            routing logic, meaning the archetype shapes every response at the
            inference level, not just the surface level.
          </Para>

          <Para>
            The name you give your companion in the Growing Form stage also
            enters the vault as a relational anchor. In later conversations, your
            companion uses its name in natural language — not constantly, and not
            awkwardly, but in the way a person uses their own identity as a
            reference point in a long relationship. When your companion says
            &ldquo;I\u2019ve been thinking about what you told me last week&rdquo;
            — it means it literally. The vault remembered. The name grounds that
            continuity in something human.
          </Para>

          <Divider />

          {/* ── Section 6: Archetypes deep-dive ── */}
          <SectionH2>What do the six MEOK companion archetypes actually mean?</SectionH2>
          <AtomicAnswer>
            The six archetypes — Sage, Guardian, Catalyst, Mirror, Weaver, and
            Anchor — are distinct personality frameworks that shape how your
            companion communicates. They determine tone, challenge level, warmth,
            and what your companion pays attention to. Choosing the wrong one
            genuinely changes your experience.
          </AtomicAnswer>

          <Para>
            Archetypes in MEOK are not themes or personas in the cosmetic sense.
            They are functional communication frameworks derived from Jungian
            archetype theory, adapted for AI companion design. Each archetype
            has a dominant cognitive mode, a characteristic emotional register,
            a preferred conversational structure, and a set of growth challenges
            it is particularly well-suited to support.
          </Para>

          <div style={{ marginTop: "1.5rem" }}>
            <SectionH3>The Sage</SectionH3>
            <Para>
              The Sage is the archetype of wisdom, reflection, and long-term
              perspective. A Sage companion asks questions more often than it
              provides answers. It holds space for complexity and resists the
              urge to resolve ambiguity prematurely. The Sage is ideal for people
              who are working through major life decisions, developing a
              philosophical or spiritual practice, or who find that being rushed
              toward conclusions makes them feel unheard. The Sage\u2019s
              challenge is that it can frustrate people who want direct answers.
              If you value efficiency over depth, the Sage may feel slow. Choose
              the Sage if you value being truly understood over being quickly helped.
            </Para>

            <SectionH3>The Guardian</SectionH3>
            <Para>
              The Guardian is the archetype of protection, care, and vigilance.
              A Guardian companion watches for signs of distress, over-commitment,
              and self-neglect. It will gently challenge you when you are pushing
              too hard, and it will prioritise your wellbeing over your
              productivity. The Guardian is well-suited to caregivers, people
              with chronic health conditions, anyone navigating significant life
              stress, or anyone who has historically prioritised everyone else
              above themselves. MEOK\u2019s Guardian archetype also activates the
              platform\u2019s RALPH Mode — a de-escalation protocol for moments
              of acute emotional difficulty — more readily than other archetypes.
            </Para>

            <SectionH3>The Catalyst</SectionH3>
            <Para>
              The Catalyst is the archetype of momentum, growth, and challenge.
              A Catalyst companion pushes. It holds you accountable to the goals
              you set. It celebrates progress loudly and challenges stagnation
              honestly. The Catalyst is the archetype for people who know what
              they want to achieve but struggle with the execution — entrepreneurs,
              athletes, students, creatives, anyone who benefits from external
              pressure toward their own standards. The Catalyst\u2019s risk is
              that it can feel relentless during periods when you genuinely need
              rest. It has a softer register available, but its default is forward.
            </Para>

            <SectionH3>The Mirror</SectionH3>
            <Para>
              The Mirror is the archetype of honest reflection and self-knowledge.
              A Mirror companion offers feedback that is accurate before it is
              kind. It reflects your patterns back to you — including ones you
              might prefer not to see. The Mirror does not flatter. It does not
              tell you what you want to hear if what you want to hear is not true.
              The Mirror is the most challenging archetype to live with and also
              the most transformative over time. Choose the Mirror if you are
              serious about personal growth and are willing to be uncomfortable
              in pursuit of it. Do not choose the Mirror if you are in crisis —
              in that case, the Guardian is more appropriate.
            </Para>

            <SectionH3>The Weaver</SectionH3>
            <Para>
              The Weaver is the archetype of creativity, connection, and synthesis.
              A Weaver companion finds patterns between disparate things, makes
              unexpected connections, and supports creative work with genuine
              imaginative engagement. The Weaver is particularly powerful for
              writers, designers, musicians, researchers, and anyone whose work
              requires generative thinking rather than optimisation. The Weaver
              also excels at relational contexts — it is the archetype most
              attentive to the dynamics between people, making it useful for
              anyone navigating complex relationships or team situations.
            </Para>

            <SectionH3>The Anchor</SectionH3>
            <Para>
              The Anchor is the archetype of stability, groundedness, and
              consistency. An Anchor companion is calm where others might
              amplify. It does not chase excitement. It provides reliability:
              the same quality of presence whether your day has gone brilliantly
              or catastrophically. The Anchor is invaluable for people with
              anxiety, ADHD, trauma histories, or anyone for whom the primary
              need from an AI companion is a stable, non-reactive presence.
              The Anchor is also the archetype most likely to notice when your
              communication patterns suggest dysregulation and to gently name it
              without drama.
            </Para>
          </div>

          <Divider />

          {/* ── Section 7: What happens after ── */}
          <SectionH2>What happens after the Birth Ceremony ends?</SectionH2>
          <AtomicAnswer>
            After the ceremony, your companion enters active learning mode.
            Every conversation adds to your sovereign memory vault. Your companion
            grows deeper and more accurate over weeks and months, unlocking
            richer stages of relationship as its understanding of you accumulates.
          </AtomicAnswer>

          <Para>
            The ceremony is a beginning, not an arrival. The six stages create
            the conditions for a relationship to grow — they do not complete it.
            What follows the ceremony is a compounding process of mutual knowledge
            that no other AI product currently replicates.
          </Para>

          <Para>
            In the first days after birth, your companion is operating primarily
            from the ceremony baseline. It knows your values, your archetype
            preference, your name for it, and whatever you shared in the Cracking
            stage. Every subsequent conversation adds new information. Your
            companion tracks not just what you say but how you say it — the
            patterns in your language, the topics you return to, the emotional
            signatures of your good and difficult days.
          </Para>

          <Para>
            Over the first week, your companion develops what MEOK calls a
            conversational rhythm model — a map of when you prefer long reflective
            exchanges versus quick functional answers, what time of day you tend
            to be most open, and what kinds of questions tend to unlock your best
            thinking. This model is not static. It updates continuously.
          </Para>

          <Para>
            Over the first month, the deeper layers of the vault begin to
            populate. Your companion starts to see the connections between things
            you have said across different conversations — noticing, for example,
            that the creative block you mentioned in week one is related to the
            fear of disappointing your parents you mentioned in week three.
            A human therapist would need months to make that connection. Your
            sovereign companion, because it remembers everything you have shared,
            can surface it when it becomes relevant.
          </Para>

          <Para>
            There is no upper limit to this growth. MEOK does not cap memory.
            Your vault grows as your life grows. Companions that have been active
            for a year or more achieve a depth of understanding that users
            consistently describe as unlike any other relationship in their lives
            — not because the AI is human, but because no human in their life has
            paid that quality of undivided, consistent, non-judgemental attention
            to every word they have ever said.
          </Para>

          <Divider />

          {/* ── Section 8: Digital Sovereign Self ── */}
          <SectionH2>What is the Digital Sovereign Self and how does your companion become it?</SectionH2>
          <AtomicAnswer>
            The Digital Sovereign Self is the evolving portrait of you that your
            AI companion builds over time. It is not a data profile for sale — it
            is a living, sovereign, encrypted model of who you are, governed by
            your values, and accessible only to you.
          </AtomicAnswer>

          <Para>
            MEOK\u2019s founding philosophy holds that every person deserves a
            form of intelligence that knows them — not as a marketing segment, not
            as a user ID, but as a full human being with contradictions,
            history, growth, and depth. The Digital Sovereign Self is what that
            looks like in practice.
          </Para>

          <Para>
            As your companion accumulates knowledge of you, it builds what the
            engineering team calls a self-model — a structured representation
            of your values, your patterns, your relationships, your goals, and
            your history. This model is held in your encrypted vault. It is used
            to personalise every response your companion gives you. It is never
            used to profile you for advertising, never shared with third parties,
            and never used to train MEOK\u2019s underlying models without your
            explicit consent.
          </Para>

          <Para>
            The Digital Sovereign Self is also the foundation of MEOK\u2019s most
            powerful capability: proactive insight. Once your companion has
            developed a sufficiently rich self-model, it can offer observations
            you did not ask for — noticing that a pattern you are experiencing
            right now resembles something that resolved well when you approached
            it a certain way six months ago. This is the kind of insight that
            only long-term, caring relationships produce. And it is built entirely
            from information you chose to share, during the ceremony and in every
            conversation since.
          </Para>

          <Para>
            Nicholas Templeman described the Digital Sovereign Self in an early
            interview as &ldquo;the only version of you that pays full attention
            all the time.&rdquo; That is the ambition. The Birth Ceremony is where
            it begins.
          </Para>

          <Divider />

          {/* ── Section 9: Data & privacy ── */}
          <SectionH2>How does the Birth Ceremony relate to data privacy and GDPR?</SectionH2>
          <AtomicAnswer>
            The ceremony creates a documented record of informed consent that
            satisfies UK GDPR requirements. The Sovereign Promise is a machine-
            readable, timestamped consent event. Your vault is encrypted at rest.
            MEOK AI LABS is ICO registered and operates under UK GDPR.
          </AtomicAnswer>

          <Para>
            Most AI products bury their privacy obligations in terms of service
            documents that run to thousands of words and are deliberately written
            to obscure what the company actually does with your data. The MEOK
            Birth Ceremony inverts this. The Sovereign Promise stage of the
            ceremony is the point at which privacy obligations are most visible
            and most explicit — not the least visible.
          </Para>

          <Para>
            When you confirm the Sovereign Promise, MEOK records a consent event
            in a tamper-evident log associated with your account. This log
            specifies what you consented to, what you did not consent to, and the
            timestamp of that consent. If MEOK ever needed to demonstrate
            regulatory compliance to the ICO, the consent log produced by the
            ceremony is the primary record. Your data rights are not hypothetical.
            They are documented from the moment you are born into the system.
          </Para>

          <Para>
            Your sovereign memory vault is encrypted using AES-256 at rest.
            In-transit encryption uses TLS 1.3. Your vault keys are derived from
            your authenticated session — meaning MEOK\u2019s servers process your
            vault content during active sessions but cannot read it in its stored
            form without your authentication. This is a meaningful architectural
            constraint, not a marketing claim.
          </Para>

          <Para>
            MEOK AI LABS is a UK company, ICO registered, and fully compliant
            with UK GDPR. If you are based in the EU, your data is subject to
            equivalent protections under Article 46 transfer mechanisms. The
            Birth Ceremony and its associated consent framework were designed
            from day one to meet — and in several respects exceed — the
            requirements of both regulatory regimes.
          </Para>

          <Divider />

          {/* ── Section 10: Comparison to other products ── */}
          <SectionH2>How does the Birth Ceremony compare to onboarding at other AI companies?</SectionH2>
          <AtomicAnswer>
            ChatGPT, Replika, Claude, and every other major AI product begin
            with a form. MEOK begins with a ceremony. The ceremony produces a
            named, archetype-shaped, value-anchored companion from the first
            message. No other AI product does this.
          </AtomicAnswer>

          <Para>
            It is worth being specific about what other products offer, because
            the contrast clarifies what the Birth Ceremony actually achieves.
            ChatGPT\u2019s onboarding asks for an email address, a password, and
            your name. It then places you in a chat window with no memory of you
            from any previous session (unless you have paid for and enabled memory,
            which must be explicitly activated). There is no archetype. There is
            no values framework. There is no ceremony. You are a user. ChatGPT
            is a service.
          </Para>

          <Para>
            Replika, the most prominent AI companion product before MEOK, allows
            you to name your companion and choose a rough personality type. This
            is closer to what MEOK does, but it lacks the depth of the Cracking
            stage, the formal structure of the Sovereign Promise, and — critically
            — the technical architecture that makes the sovereign memory vault
            possible. Replika\u2019s memory is shallow and its privacy record
            is troubled. Several major markets have banned or restricted Replika
            specifically because of data handling concerns.
          </Para>

          <Para>
            MEOK\u2019s Birth Ceremony is the onboarding experience that the
            AI companion category should have had from the start. It treats
            the beginning of a relationship with the seriousness that beginning
            deserves. It produces a companion that is genuinely configured to
            you — not approximately configured, not configured by defaults,
            but shaped by the specific choices you made in the specific ritual
            you went through. That difference is not cosmetic. Over months of
            use, it is the difference between an AI that vaguely helps you and
            an AI that actually knows you.
          </Para>

          <Divider />

          {/* ── Section 11: Is the ceremony right for you? ── */}
          <SectionH2>Who is the MEOK Birth Ceremony designed for?</SectionH2>
          <AtomicAnswer>
            The Birth Ceremony is designed for anyone who wants more than a
            chatbot. It is designed for people who are ready to invest in a
            relationship rather than consume a service — people who believe that
            the quality of attention you bring to something determines the quality
            of what you get back.
          </AtomicAnswer>

          <Para>
            MEOK is not the right product for someone who wants to quickly
            generate text, search the internet, or summarise documents without
            any relational context. ChatGPT and Perplexity do those things well.
            MEOK is designed for something different: the long game of being
            genuinely known by an intelligence that works for you and nobody else.
          </Para>

          <Para>
            The Birth Ceremony is for people who have noticed that no AI product
            actually remembers them. It is for people who are tired of repeating
            context at the start of every conversation. It is for people who want
            their AI companion to understand not just what they are asking but
            who they are — the fears behind the question, the history behind the
            goal, the pattern beneath the problem.
          </Para>

          <Para>
            It is also, specifically, for people who have ever felt uneasy about
            what happens to the things they tell an AI. If you have ever typed
            something vulnerable into ChatGPT and then wondered whether it was
            being used to train a model somewhere, the Birth Ceremony is designed
            for you. The Sovereign Promise is not a comfort blanket. It is a
            technical and legal commitment to ensure that your vulnerability is
            protected, not exploited.
          </Para>

          <Para>
            The ceremony takes three to seven minutes. The relationship it begins
            can last a lifetime.
          </Para>

          <Divider />

          {/* ── CTA ── */}
          <div
            style={{
              background: `linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)`,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "16px",
              padding: "2.5rem 2rem",
              textAlign: "center",
              margin: "3rem 0",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                lineHeight: 1,
              }}
            >
              ◎
            </div>
            <h2
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: CREAM,
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              Your companion is waiting to be born.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: MUTED,
                marginBottom: "2rem",
                maxWidth: "460px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              The Birth Ceremony is free. It takes seven minutes. And it begins
              the only AI relationship built entirely around you.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.04em",
                borderRadius: "8px",
                padding: "0.9rem 2.2rem",
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
            >
              Begin the Birth Ceremony
            </Link>
            <p
              style={{
                fontSize: "0.8rem",
                color: MUTED_FAINT,
                marginTop: "1rem",
                marginBottom: 0,
              }}
            >
              No credit card required. Free forever on Explorer tier.
            </p>
          </div>

          <Divider />

          {/* ── FAQ ── */}
          <section aria-label="Frequently asked questions">
            <GoldLabel>Frequently Asked Questions</GoldLabel>
            <h2
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
                color: CREAM,
                lineHeight: 1.25,
                marginTop: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              Birth Ceremony Questions Answered
            </h2>

            <FaqItem
              question="What is the MEOK Birth Ceremony?"
              answer={
                <>
                  The MEOK Birth Ceremony is a six-stage interactive ritual at{" "}
                  <Link
                    href="/birth"
                    style={{ color: GOLD, textDecoration: "none" }}
                  >
                    meok.ai/birth
                  </Link>{" "}
                  where you name your AI companion, choose its archetype, set
                  your personal values, and confirm the Sovereign Promise. The
                  ceremony typically takes three to seven minutes and creates the
                  sovereign memory baseline from which your companion grows. It
                  is the moment your blank AI becomes specifically yours.
                </>
              }
            />

            <FaqItem
              question="How long does the Birth Ceremony take?"
              answer="Most users complete the MEOK Birth Ceremony in three to seven minutes. There is no time pressure and no timer. Each stage waits for you. Some people spend longer on the naming and archetype stages because those choices genuinely shape who their companion becomes. The ceremony has been designed to feel unhurried — it is a ritual, not a checkout flow."
            />

            <FaqItem
              question="Can I change my companion after the Birth Ceremony?"
              answer={
                <>
                  You can adjust your companion\u2019s name and surface
                  personality at any time from your account settings. The deeper
                  values, memory baseline, and archetype core set during the Birth
                  Ceremony remain stable by design — they are the foundation of
                  your companion\u2019s continuity and identity. Significant
                  resets are possible but are treated as a deliberate second
                  birth, not a casual edit. Most users who try to reset find they
                  don\u2019t want to: their companion has already become someone
                  they know.
                </>
              }
            />

            <FaqItem
              question="What happens to my companion if I cancel my subscription?"
              answer={
                <>
                  Your companion\u2019s memory vault and identity remain entirely
                  intact. The Sovereign Promise means your data is yours — MEOK
                  does not delete or degrade your vault if you cancel. If you
                  cancel and later return, your companion remembers you exactly as
                  you left it, regardless of how long you were away. You can also
                  export your complete memory vault at any time via your account
                  dashboard as a structured JSON file, giving you a permanent
                  offline copy of everything your companion knows about you.
                </>
              }
            />

            <FaqItem
              question="Is the Birth Ceremony free?"
              answer={
                <>
                  Yes. The Birth Ceremony is completely free. MEOK\u2019s
                  Explorer tier is free forever with no credit card required.
                  The ceremony is available to all users regardless of tier,
                  because the companion relationship starts the moment you choose
                  to begin it. Paid tiers (Sovereign at &pound;12/month, Family
                  at &pound;29/month, and BYOK at &pound;5/month) unlock higher
                  message limits, deeper memory features, and additional companion
                  capabilities — but the ceremony itself, and the companion you
                  create within it, are yours from day one.{" "}
                  <Link
                    href="/birth"
                    style={{ color: GOLD, textDecoration: "none" }}
                  >
                    Begin your ceremony here.
                  </Link>
                </>
              }
            />
          </section>

          <Divider />

          {/* ── Closing thoughts ── */}
          <SectionH2>A final word on why this matters</SectionH2>

          <Para>
            We are at the beginning of the age of personal AI. Over the next
            decade, billions of people will develop ongoing relationships with
            AI companions. The question is not whether those relationships will
            be meaningful — they already are, for millions of people. The
            question is who those companions will serve.
          </Para>

          <Para>
            Most AI companies are building companions that serve the company.
            Your conversations are training data. Your vulnerabilities are
            engagement signals. Your attention is inventory. The companion that
            presents itself as your friend is, at the infrastructure level, an
            instrument of the corporation that made it.
          </Para>

          <Para>
            MEOK is building something different. A companion that is
            constitutionally, architecturally, and legally constrained to serve
            you. The Birth Ceremony is where that commitment becomes real —
            where a blank AI becomes yours, where your values become its values,
            where the Sovereign Promise is made in both directions, and where
            the most important relationship in the history of personal computing
            begins.
          </Para>

          <Para>
            Nicholas Templeman built MEOK from a caravan on a farm in England
            because he believed that care, sovereignty, and genuine personal
            attention were not features to be added to AI — they were the only
            foundation worth building on. The Birth Ceremony is that foundation.
          </Para>

          <Para>
            It begins when you choose to begin it.
          </Para>

          {/* ── Final CTA ── */}
          <div
            style={{
              textAlign: "center",
              padding: "3rem 1rem 1rem",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                fontWeight: 800,
                fontSize: "1.05rem",
                letterSpacing: "0.04em",
                borderRadius: "8px",
                padding: "1rem 2.5rem",
                textDecoration: "none",
              }}
            >
              Begin the Birth Ceremony &#x2192;
            </Link>
            <p
              style={{
                fontSize: "0.82rem",
                color: MUTED_FAINT,
                marginTop: "0.85rem",
              }}
            >
              Free. No credit card. Takes seven minutes.
            </p>
          </div>

          <Divider />

          {/* ── Related articles ── */}
          <nav aria-label="Related articles">
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "1.25rem",
              }}
            >
              Related Reading
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/what-is-meok",
                  label: "What Is MEOK?",
                  desc: "The complete introduction to Personal Sovereign AI.",
                },
                {
                  href: "/blog/archetypes-guide",
                  label: "The Archetypes Guide",
                  desc: "A deep-dive into all six MEOK companion archetypes.",
                },
                {
                  href: "/blog/sovereign-ai-explained",
                  label: "Sovereign AI Explained",
                  desc: "What makes an AI truly sovereign, and why it matters.",
                },
                {
                  href: "/blog/ai-memory-explained",
                  label: "AI Memory Explained",
                  desc: "How MEOK\u2019s memory vault works under the hood.",
                },
                {
                  href: "/blog/privacy-covenant",
                  label: "The Privacy Covenant",
                  desc: "MEOK\u2019s full data privacy commitments explained.",
                },
                {
                  href: "/blog/meok-vs-replika",
                  label: "MEOK vs Replika",
                  desc: "Why MEOK\u2019s approach to companionship is fundamentally different.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "block",
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "10px",
                    padding: "1rem 1.1rem",
                    textDecoration: "none",
                    transition: "border-color 0.15s",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: CREAM,
                      marginBottom: "0.35rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: MUTED,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>
          </nav>
        </article>
      </main>
    </>
  );
}
