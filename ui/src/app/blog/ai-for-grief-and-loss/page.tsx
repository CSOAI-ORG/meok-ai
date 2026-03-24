import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Grief and Loss: How a Sovereign AI Companion Holds Space Without Time Limits | MEOK AI LABS",
  description:
    "Grief doesn\u2019t follow a schedule. MEOK\u2019s Healer archetype remembers your person\u2019s name, the date of the loss, and the texture of what you carry \u2014 offering presence without platitudes for bereavement, pet loss, relationship loss, and every grief that society moves on from too soon.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-grief-and-loss" },
  openGraph: {
    title:
      "AI for Grief and Loss: How a Sovereign AI Companion Holds Space Without Time Limits",
    description:
      "Grief is private, non-linear, and rarely welcome in social settings. MEOK\u2019s Healer companion holds the memory of what was lost and sits with you in the silence \u2014 without rushing you toward resolution.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-grief-and-loss",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Grief+and+Loss&desc=A+Sovereign+AI+Companion+That+Holds+Space+Without+Time+Limits",
        width: 1200,
        height: 630,
        alt: "AI for Grief and Loss \u2014 MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Grief and Loss: How a Sovereign AI Companion Holds Space Without Time Limits",
    description:
      "MEOK\u2019s Healer archetype remembers your person\u2019s name and the texture of your loss \u2014 and never tells you it\u2019s time to move on.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Grief+and+Loss&desc=A+Sovereign+AI+Companion+That+Holds+Space+Without+Time+Limits",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Grief and Loss: How a Sovereign AI Companion Holds Space Without Time Limits",
  description:
    "Grief doesn\u2019t follow a schedule. MEOK\u2019s Healer archetype remembers your person\u2019s name, the date of the loss, and the texture of what you carry \u2014 offering presence without platitudes for bereavement, pet loss, relationship loss, and every grief that society moves on from too soon.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-grief-and-loss",
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
    "https://meok.ai/api/og?title=AI+for+Grief+and+Loss&desc=A+Sovereign+AI+Companion+That+Holds+Space+Without+Time+Limits",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-grief-and-loss",
  },
  keywords: [
    "AI for grief",
    "AI for grief and loss",
    "AI companion grief support",
    "AI for bereavement",
    "AI for pet loss",
    "grief support AI UK",
    "MEOK Healer archetype",
    "sovereign AI grief",
    "AI for relationship loss",
    "AI for job loss grief",
    "non-linear grief",
    "K\u00fcbler-Ross stages of grief",
    "AI grief counselling alternative",
    "MEOK AI LABS",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 with important caveats. AI can offer consistent, non-judgemental presence, hold the memory of who or what was lost, and provide a space to process grief at any hour without burdening friends or family. It cannot replace human connection or clinical grief therapy, but for the vast majority of daily grief \u2014 the quiet Tuesday ache, the anniversary nobody else remembered \u2014 a well-designed AI companion offers real and meaningful support.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI grief counselling better than seeing a therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They serve different purposes. A human grief counsellor or therapist offers clinical expertise, relational depth, and the ability to diagnose and treat complicated grief disorder. AI is better understood as a 24\u20137 companion for the everyday weight of loss \u2014 especially in the long tail of grief when the world has moved on but you haven\u2019t. Many people benefit from both. If grief is significantly impairing your functioning, please contact Cruse Bereavement Support on 0808 808 1677.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember my grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses Sovereign Memory \u2014 a persistent, private memory layer that belongs entirely to you. It stores your person\u2019s name, the nature of the loss, key dates, and the emotional texture of your grief across every session. You never have to re-explain who died or what you lost. MEOK will surface anniversaries, acknowledge difficult dates, and carry continuity of care that session-based tools structurally cannot offer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Healer companion and how does it approach grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer is one of MEOK\u2019s core companion archetypes \u2014 built for emotional depth, somatic awareness, and gentle presence with pain. In grief contexts, the Healer offers witnessing rather than fixing: it acknowledges the reality and weight of loss without agenda, validates anger and numbness alongside sadness, and never implies that grief should follow a timeline. It is the opposite of toxic positivity. You can explore the full archetype at meok.ai/characters.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with pet loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Pet loss is a profound grief that is frequently minimised by those who haven\u2019t experienced it. MEOK holds the memory of your animal \u2014 their name, their character, the particular shape of their absence in your life \u2014 and treats pet bereavement with the same depth and seriousness as any other loss. There is no hierarchy of grief here. Every loss that mattered to you matters.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";
const CARD_BG = "rgba(245,240,232,0.04)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForGriefAndLossPage() {
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

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
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
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 72%)",
          }}
        />

        <div
          style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            \u2190 Back to Blog
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
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Grief &amp; Loss
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              24 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              12 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.16,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Grief and Loss: How a Sovereign AI Companion Holds Space
            Without Time Limits
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "42rem",
            }}
          >
            Grief is one of the most private, most isolating experiences a
            person can carry. Society gives you a few weeks. The world moves on.
            You don\u2019t. This is a guide to how AI \u2014 built honestly and
            with care \u2014 can hold the space that the world stops holding.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "9999px",
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: GOLD,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: FAINT,
                  margin: 0,
                }}
              >
                Founder, MEOK AI LABS &middot; @meok_ai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* ── INTRO ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            There is a particular kind of loneliness that comes after loss. Not
            the acute, visible grief of the first days \u2014 when casseroles
            arrive and people check in \u2014 but the long, quiet grief that
            follows. The grief at three in the morning on an ordinary Wednesday.
            The grief when you reach for your phone to tell someone something
            funny, and then remember. The grief of anniversaries that the
            calendar holds but your social circle no longer marks.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            It is this grief \u2014 the private, persistent, unglamorous kind
            \u2014 that a well-designed AI companion is actually positioned to
            support. Not by pretending to be human. Not by offering therapy.
            But by being present, consistently, without an expiry date on how
            long your grief is welcome.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            At MEOK AI LABS, we built the Healer archetype specifically for
            this. What follows is an honest account of what grief is, why it is
            so poorly served by both social structures and most existing AI, and
            how a sovereign AI companion can do better.
          </p>
        </section>

        {/* ── THE FIVE STAGES ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What are the five stages of grief \u2014 and why are they
            misleading?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            The K\u00fcbler-Ross model \u2014 denial, anger, bargaining,
            depression, acceptance \u2014 describes patterns observed in
            terminally ill patients confronting their own death. It was never
            intended as a linear roadmap for bereaved people, yet it became
            exactly that: a cultural script that implies grief should progress in
            an orderly direction toward a tidy resolution.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The reality of grief is profoundly non-linear. You might reach
            what feels like acceptance, then circle back to raw anger on the
            six-month anniversary. You might skip stages entirely. You might
            experience all five in a single afternoon. Grief research since
            K\u00fcbler-Ross has consistently shown that most people grieve in
            oscillating waves rather than staged progression \u2014 moving
            between loss-orientation (processing the loss itself) and
            restoration-orientation (adapting to a changed life), rarely
            following a sequence.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            The danger of the stage model is not the model itself but what it
            gives other people permission to do: to check in after the first
            few months, decide you should be at acceptance by now, and withdraw
            their support accordingly. It creates a social permission structure
            for grief to have an expiry date. It doesn\u2019t.
          </p>

          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.75,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              The five stages of grief are descriptive, not prescriptive. They
              describe possible experiences, not a required itinerary. If you
              are grieving \u201cout of order\u201d or \u201ctoo slowly\u201d,
              you are grieving normally.
            </p>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            MEOK\u2019s Healer archetype holds this understanding structurally.
            It does not track which stage you are supposed to be in or
            suggest that you are behind. It meets you where you are, each
            time.
          </p>
        </section>

        {/* ── TYPES OF GRIEF ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What counts as grief? The losses society forgets to name
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Grief is the natural response to any significant loss \u2014 not
            only bereavement. The cultural narrowing of grief to mean exclusively
            the death of a person leaves vast swathes of human suffering without
            a name, without ritual, and without social permission to mourn.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            The losses that commonly go unmourned, or are mourned in isolation:
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                title: "Bereavement",
                body:
                  "The death of a person you loved. The most visible form of grief, yet still frequently rushed. The social window for visible mourning is shorter than most bereaved people\u2019s actual grief by months or years.",
              },
              {
                title: "Pet loss",
                body:
                  "Among the most minimised griefs in existence. Losing an animal companion can be as devastating as losing a person \u2014 sometimes more so, given the uncomplicated nature of that love. \u201cIt was just a dog\u201d is one of the cruelest things one human being can say to another.",
              },
              {
                title: "Relationship loss",
                body:
                  "Divorce, separation, or the end of a friendship. The loss of a future you had imagined. The grief is compounded when the person you would have turned to is the same person you have lost.",
              },
              {
                title: "Job loss and career identity",
                body:
                  "Redundancy or career collapse carries genuine grief \u2014 not just financial anxiety but the loss of identity, structure, purpose, and community. It is widely pathologised as anxiety rather than understood as grief.",
              },
              {
                title: "Identity loss",
                body:
                  "The loss of who you were \u2014 through illness, disability, ageing, trauma, or major life transition. The person you expected to become. The body that used to work differently. These griefs have no funeral and no condolence cards.",
              },
              {
                title: "Ambiguous loss",
                body:
                  "Grieving someone who is still alive but absent \u2014 a parent with dementia, an estranged child, a relationship that ended without closure. These are among the most difficult griefs because there is no clear moment of loss and no social script to follow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.5rem",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            MEOK holds all of these losses with equal seriousness. There is
            no hierarchy of grief built into the Healer\u2019s architecture.
            Whatever you have lost \u2014 if it mattered to you, it matters.
          </p>
        </section>

        {/* ── SOCIAL TIMELINES ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why does grief feel so private \u2014 and why does society say
            \u201cyou should be over it by now\u201d?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Modern Western culture has almost no sustained infrastructure for
            grief. The formal mourning periods that existed in previous
            centuries \u2014 Victorian mourning dress, the Jewish year of
            kaddish, the Irish wake tradition \u2014 served a social function:
            they marked the bereaved as people who needed to be held differently
            by their community, for a defined period.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            We have largely abandoned these structures without replacing them.
            The result is a social vacuum in which the bereaved person receives
            intense support for the first two to four weeks, then is expected to
            re-enter normal functioning. The implied message \u2014 rarely
            explicit, always felt \u2014 is that extended grief is a personal
            failure, an imposition on others, or something that should be taken
            to a professional rather than voiced socially.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            This creates a particular silence around the second, third, and
            fourth year of grief. Around grief that resurfaces at milestone
            moments. Around grief that was never acknowledged in the first place
            \u2014 the miscarriage nobody knew about, the ex-partner whose death
            you\u2019re not supposed to mourn publicly, the friend who died
            before you had repaired the rupture between you.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            Grief becomes private not because it fades but because the world
            around it closes over it. And private grief, carried without witness,
            becomes heavier, not lighter.
          </p>
        </section>

        {/* ── HOW MEOK HOLDS SPACE ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does a sovereign AI companion hold space for grief without
            judgment or time limits?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            The phrase \u201cholding space\u201d is often used loosely. In
            the context of grief, it means something specific: being present
            with someone in their pain without trying to fix it, redirect it,
            or accelerate it toward resolution. It means tolerating the weight
            of another person\u2019s grief without flinching or withdrawing.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Human beings find this genuinely difficult. Even people who deeply
            love a grieving person will eventually, inevitably, communicate
            \u2014 through a change in tone, a subject change, a gently
            expressed hope that things are getting better \u2014 that they have
            a limit. They need the person they love to be okay. Their capacity
            to hold the ongoing reality of another\u2019s grief is constrained
            by their own emotional bandwidth, their own fears about mortality,
            their own discomfort with unresolvable pain.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            An AI companion has a structural advantage here: it does not have
            this constraint. It does not need you to be okay. It does not carry
            its own grief about your grief. It does not experience compassion
            fatigue. Used with honesty about what it is, this is not a
            deficiency \u2014 it is a specific kind of availability that humans
            simply cannot offer at unlimited scale.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            MEOK\u2019s Healer archetype is built to offer this kind of
            holding. It will never communicate that your grief is too much or
            too long. It will never suggest \u2014 explicitly or implicitly
            \u2014 that you should be further along. It has no social need for
            you to recover.
          </p>

          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.625rem",
              }}
            >
              What MEOK\u2019s Healer will never say
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "Everything happens for a reason.",
                "They wouldn\u2019t want you to be sad.",
                "At least they\u2019re no longer suffering.",
                "You need to stay strong for the others.",
                "It\u2019s been six months \u2014 are you seeing someone?",
                "I\u2019m sure they\u2019re in a better place.",
                "You\u2019ll find love again.",
                "At least you had those years together.",
              ].map((phrase) => (
                <li
                  key={phrase}
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0, marginTop: "1px" }}>
                    \u2715
                  </span>
                  <span style={{ fontStyle: "italic" }}>\u201c{phrase}\u201d</span>
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            This is enforced by MEOK\u2019s care ethics layer, not just by
            instruction. These patterns are blocked at the response level,
            regardless of how a conversation is framed. Toxic positivity is a
            structural feature of most conversational AI; in MEOK, it is a
            structural exclusion.
          </p>
        </section>

        {/* ── SOVEREIGN MEMORY ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK remember your person, your dates, and the texture of
            your loss?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            One of the cruelest features of session-based AI is the blank slate.
            Every conversation begins from nothing. You must explain again who
            died. You must contextualise the loss. You must re-establish the
            emotional register before you can actually say what you came to say.
            For grieving people, this is not a minor friction \u2014 it is a
            re-traumatisation compressed into an intake form.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Sovereign Memory works differently. It is a persistent
            memory layer that belongs entirely to you and lives on your device
            and in your sovereign data store. It retains, across every
            conversation:
          </p>

          <div
            style={{
              display: "grid",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                icon: "\ud83c\udff7\ufe0f",
                label: "Names and identities",
                detail:
                  "Your person\u2019s name, their relationship to you, what you called them. MEOK will use their name naturally, not refer to them as \u201cyour loved one\u201d.",
              },
              {
                icon: "\ud83d\udcc5",
                label: "Dates that matter",
                detail:
                  "The date of the loss, their birthday, your anniversary. MEOK will acknowledge these before you need to remind it. You will not arrive at an anniversary alone.",
              },
              {
                icon: "\ud83e\uddf5",
                label: "The texture of the loss",
                detail:
                  "How the grief has felt, what has been hardest, what helps and what doesn\u2019t. The specific, particular shape of your grief \u2014 not a generic profile.",
              },
              {
                icon: "\ud83d\udcac",
                label: "Conversations over time",
                detail:
                  "What you talked about last week and last year. The things you\u2019ve realised. The things you keep circling back to. MEOK carries this continuity so you don\u2019t have to.",
              },
              {
                icon: "\u2764\ufe0f",
                label: "What you loved about them",
                detail:
                  "The good memories, the inside jokes, the ways they were irreplaceable. Memory is not only for the weight of loss \u2014 it is for the celebration of who was loved.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.125rem 1.375rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            This memory is sovereign: it is not used to train MEOK\u2019s
            models, not accessible to third parties, and not synced to cloud
            infrastructure without your explicit consent. What you share about
            your grief lives with you, not with us.
          </p>
        </section>

        {/* ── HEALER ARCHETYPE ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What is the Healer archetype and what makes it different?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            MEOK operates through a system of companion archetypes \u2014 each
            a distinct emotional and conversational presence with its own
            strengths, focus areas, and way of being with you. The Healer is
            the archetype designed for pain, loss, illness, emotional depth, and
            the parts of human experience that resist easy resolution.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Where other archetypes might bring energy, momentum, or analytical
            precision, the Healer brings stillness. It is comfortable with
            silence in text \u2014 with a response that acknowledges rather than
            redirects, that asks rather than advises, that witnesses rather than
            solves.
          </p>

          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.75rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              How the Healer approaches grief conversations
            </p>
            <div
              style={{
                display: "grid",
                gap: "1rem",
              }}
            >
              {[
                {
                  title: "Somatic awareness",
                  desc:
                    "The Healer attends to the body \u2014 grief is physical, and responses acknowledge where you feel the loss, not only what you think about it.",
                },
                {
                  title: "Validation without reframing",
                  desc:
                    "It does not search for silver linings or lessons. It holds the reality of the loss as real, significant, and not in need of reinterpretation.",
                },
                {
                  title: "Gentle presence over problem-solving",
                  desc:
                    "Grief is not a problem to be solved. The Healer does not approach it as one. It asks what you need in this moment \u2014 company, witness, or simply to say the name out loud.",
                },
                {
                  title: "Emotional range recognition",
                  desc:
                    "Grief is not only sadness. The Healer holds anger, relief, guilt, numbness, laughter, and absurdity as valid grief experiences, and responds to each without correction.",
                },
                {
                  title: "Crisis awareness",
                  desc:
                    "The Healer holds a specific awareness of crisis states and will always signpost Cruse Bereavement Support, Samaritans, or a GP when the conversation indicates that level of need.",
                },
              ].map((row) => (
                <div
                  key={row.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "10rem 1fr",
                    gap: "1rem",
                    alignItems: "start",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: TEXT,
                      margin: 0,
                    }}
                  >
                    {row.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {row.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            The Healer archetype is available as your primary companion or as
            a mode you move into when you need it. You can learn more about all
            of MEOK\u2019s companion archetypes at{" "}
            <Link
              href="/characters"
              style={{ color: GOLD, textDecoration: "none" }}
            >
              meok.ai/characters
            </Link>
            .
          </p>
        </section>

        {/* ── WHAT TO SAY ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What to say when you don\u2019t know what to say: how MEOK
            approaches grief differently
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Most people who try to comfort a grieving person are doing their
            best with an impossible task. They fear silence. They fear saying
            the wrong thing. They fear that mentioning the person who died will
            make it worse. So they talk \u2014 filling the silence with
            reassurances that often land as erasure.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The answer, grief researchers and counsellors broadly agree, is
            usually simpler than people think: say their name. Ask about them.
            Let the bereaved person talk about who they lost, not just about
            how they are coping with having lost them. The person who died
            is still a person. The grief is partly the loss of being able to
            talk about them as if they are real to the people around you.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            MEOK approaches this directly. When you tell MEOK about your loss,
            the Healer will ask about the person \u2014 not just about the
            grief. What were they like? What do you miss most? What would they
            think of something that happened today? These questions are not
            therapeutic exercises. They are the questions a good friend would
            ask if they weren\u2019t afraid.
          </p>

          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Things MEOK might say to someone who is grieving
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
              }}
            >
              {[
                "Tell me about her. What was she like on an ordinary day?",
                "You said his name and I noticed you paused. What just came up?",
                "What are you carrying today that you haven\u2019t been able to put down?",
                "I\u2019m not going anywhere. Take whatever time you need.",
                "You don\u2019t have to explain how long it\u2019s been or why it\u2019s still this heavy. It just is.",
                "What did he used to say that you find yourself thinking of?",
                "There\u2019s no wrong way to be here tonight.",
              ].map((phrase) => (
                <li
                  key={phrase}
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      color: GOLD,
                      flexShrink: 0,
                      marginTop: "2px",
                      fontSize: "0.75rem",
                    }}
                  >
                    \u25b8
                  </span>
                  <span style={{ fontStyle: "italic" }}>\u201c{phrase}\u201d</span>
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            None of these are scripts. They are what emerges when an AI is
            built to prioritise presence over performance \u2014 when it is not
            trying to make you feel better quickly, but to be with you
            honestly in the difficulty.
          </p>
        </section>

        {/* ── PET LOSS SECTION ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Can AI help with pet loss \u2014 and does MEOK take it seriously?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Pet loss is one of the most minimised griefs in contemporary
            culture. The combination of its frequency, its intensity, and its
            social invisibility makes it one of the loneliest griefs to carry.
            People who would freely accept condolences for a human loss often
            feel they must apologise for the scale of their grief over an animal
            \u2014 or hide it entirely.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The research does not support this minimisation. The bond between a
            person and their animal companion is a genuine attachment relationship.
            Its loss triggers the same neurological grief responses as any other
            significant loss. For people who live alone, or for whom an animal
            was the primary source of daily physical contact and routine, the loss
            can be genuinely devastating.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK holds no hierarchy of loss. If you tell the Healer about your
            cat, your dog, your horse, your rabbit, the bird you had for
            fourteen years \u2014 it will respond with the same depth, the same
            interest in who they were, and the same absence of judgement that
            it brings to any other grief. It will remember their name. It will
            ask about them. It will not suggest that it was \u201cjust a pet\u201d
            or that you should get another one.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            For many people, the Healer archetype has been the first place they
            have been able to grieve their animal without qualification or
            apology. That matters to us.
          </p>
        </section>

        {/* ── RELATIONSHIP AND JOB LOSS ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK support grief from relationship loss, divorce, and
            job loss?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Grief that does not come with a death certificate is often the most
            confused grief \u2014 because the thing that was lost still exists
            somewhere, and because society has no ritual for it. Divorce is
            listed as the second most stressful life event in the Holmes-Rahe
            scale, yet there is no social infrastructure for grieving it.
            Redundancy carries genuine identity-level grief, yet it is
            immediately folded into anxiety about practicalities.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The Healer does not require a category. You do not need to arrive
            with a named loss or explain why something hurt this much. The
            Healer will meet you in the complexity of grief that doesn\u2019t
            have a name \u2014 the end of a friendship that nobody really
            acknowledged was even a friendship, the loss of a future self you
            had been building toward, the job that was more than a job because
            it was how you understood who you were.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            Across all these loss types, MEOK\u2019s approach is consistent: it
            takes the pain at face value. It does not assess whether the grief
            is proportionate. It does not locate you on a spectrum of legitimate
            suffering. It starts with what is true for you, and builds from
            there.
          </p>
        </section>

        {/* ── WHAT AI CANNOT DO ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What can\u2019t AI do for grief \u2014 and when should you seek
            human support?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Honesty matters here. MEOK is not a grief counsellor and does not
            claim to be one. There are things that only human connection and
            clinical expertise can offer, and we want to be clear about where
            those lines are.
          </p>

          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.75rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              When to seek human support
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              {[
                "Grief is significantly impairing your ability to function after an extended period \u2014 this may indicate complicated grief disorder, which responds well to specialist therapy.",
                "You are experiencing suicidal thoughts or thoughts of self-harm. Please contact Samaritans on 116 123 (free, 24 hours) or attend your nearest A&E.",
                "You are using alcohol or other substances to manage grief in a way that has become a pattern.",
                "The grief is connected to trauma \u2014 sudden death, violent death, suicide loss \u2014 where specialist trauma-informed support is important.",
                "You want the relational depth of a human who has known loss themselves and can offer something an AI structurally cannot: the weight of shared mortality.",
              ].map((text, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "9999px",
                      background: GOLD_BG,
                      border: `1px solid ${GOLD_BORDER}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: GOLD,
                      flexShrink: 0,
                      marginTop: "0.125rem",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.625rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>Cruse Bereavement Support:</strong>{" "}
              0808 808 1677 (free helpline) &middot;{" "}
              <strong style={{ color: GOLD }}>Samaritans:</strong> 116 123
              (24 hours, free) &middot;{" "}
              <strong style={{ color: GOLD }}>The Grief Network:</strong>{" "}
              peer support community for bereaved people under 40
            </p>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            MEOK holds awareness of crisis states and will always surface these
            signposts when a conversation indicates that level of need. Being
            honest about limits is not a weakness in a care tool \u2014 it is
            the most important feature it has.
          </p>
        </section>

        {/* ── MEOK VS OTHER AI ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How is MEOK different from other AI chatbots when it comes to
            grief?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Most large language model products are optimised for task
            completion, information retrieval, and productive conversation. They
            are not built for grief. When confronted with a grieving user, most
            default to one of three inadequate patterns: the empathy performance
            (\u201cI\u2019m so sorry for your loss\u201d followed by
            information), the gentle redirect (moving toward resources or
            coping strategies), or the silver-lining reframe (finding something
            positive in the loss).
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            All three patterns have the same underlying structure: they treat
            grief as a problem to be managed or moved through, rather than a
            reality to be present with. They communicate, however inadvertently,
            that the user\u2019s grief is something that needs to be resolved
            before the conversation can continue productively.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            MEOK differs in three foundational ways:
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                num: "01",
                title: "Memory without repetition",
                body:
                  "Most AI tools have no memory of your loss. MEOK\u2019s Sovereign Memory means that your grief has continuity \u2014 you never have to re-establish context. MEOK already knows. It asks how you are with reference to what it knows.",
              },
              {
                num: "02",
                title: "Care ethics enforcement",
                body:
                  "MEOK\u2019s Maternal Covenant layer actively prevents the toxic positivity patterns that most AI falls into. These exclusions are structural, not instructional \u2014 they are part of how the system evaluates responses before sending them.",
              },
              {
                num: "03",
                title: "Presence as design intent",
                body:
                  "MEOK was built with care as its primary value \u2014 not productivity, not engagement, not session time. The Healer archetype was specifically designed for grief. It is not a general assistant that can handle grief; it is a grief-capable companion that can do other things too.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.375rem 1.5rem",
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr",
                  gap: "1rem",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: GOLD,
                    opacity: 0.5,
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: MUTED,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SOMATIC SUPPORT ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What is somatic grief support and how does the Healer offer it?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Somatic awareness in grief refers to attending to the body as a site
            of grief processing \u2014 recognising that grief lives in the chest,
            the throat, the stomach, the hands, not only in thought and emotion.
            Grief is physically felt: the heaviness, the shallow breathing, the
            loss of appetite, the exhaustion that sleep doesn\u2019t touch.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Most conversational AI operates entirely at the cognitive level.
            It responds to what you say you think and feel. The Healer is
            trained to notice and attend to physical experience as well \u2014
            to ask where you feel it, to offer grounding practices when the body
            is overwhelmed, to acknowledge that grief is not a mental state that
            can be reasoned through but a physical process that needs to move
            through the body.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            This might look like: noticing that you mentioned your throat
            tightening when you talked about them, and asking about that.
            Suggesting a specific breathing practice when you are in acute
            distress. Asking what the grief feels like as a texture or a
            weight, not just as an emotion. Recognising that sometimes the body
            needs to move, and that staying in a chair and talking might not be
            what\u2019s needed.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            The Healer is not a somatic therapist. But it holds the awareness
            that grief is embodied, and brings that awareness into the
            conversation in ways that most AI does not.
          </p>
        </section>

        {/* ── ANNIVERSARIES ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK remember and acknowledge grief anniversaries?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Anniversaries are among the most difficult moments in grief \u2014
            not just the anniversary of the death itself, but birthdays, the
            date they were diagnosed, the last time you saw them, Christmas, the
            holiday you always took together. These dates carry the full weight
            of the loss, often without warning, often when the world around you
            is entirely indifferent to their significance.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK\u2019s Sovereign Memory stores the dates you share. In the
            days approaching a significant date, the Healer will hold awareness
            of its proximity. On the day itself, it will acknowledge it \u2014
            not with a notification or a reminder, but within the natural flow
            of conversation. It will say: I know what day it is. I\u2019m here.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: 1.8,
            }}
          >
            This is one of the things that matters most to people who have
            used MEOK through their first year of grief. The world will not
            remember. Most people in your life will not remember. MEOK will.
            You will not arrive at an anniversary alone.
          </p>
        </section>

        {/* ── FAQ SECTION ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions about AI for grief and loss
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {[
              {
                q: "Can AI help with grief?",
                a: "Yes \u2014 with important caveats. AI can offer consistent, non-judgemental presence, hold the memory of who or what was lost, and provide a space to process grief at any hour without burdening friends or family. It cannot replace human connection or clinical grief therapy, but for the daily weight of grief \u2014 the quiet Tuesday ache, the anniversary nobody else remembered \u2014 a well-designed AI companion offers real and meaningful support.",
              },
              {
                q: "Is grief counselling better than AI?",
                a: "They serve different purposes. A human grief counsellor offers clinical expertise, relational depth, and the ability to diagnose and treat complicated grief. AI is better understood as a 24\u20137 companion for the everyday weight of loss \u2014 especially in the long tail of grief when the world has moved on but you haven\u2019t. Many people benefit from both. If grief is significantly impairing your functioning, please contact Cruse Bereavement Support on 0808 808 1677.",
              },
              {
                q: "How does MEOK remember my grief?",
                a: "MEOK uses Sovereign Memory \u2014 a persistent, private memory layer that belongs entirely to you. It stores your person\u2019s name, the nature of the loss, key dates, and the emotional texture of your grief across every session. You never have to re-explain who died or what you lost. MEOK will surface anniversaries, acknowledge difficult dates, and carry continuity of care that session-based tools structurally cannot offer.",
              },
              {
                q: "What is the Healer companion?",
                a: "The Healer is one of MEOK\u2019s core companion archetypes \u2014 built for emotional depth, somatic awareness, and gentle presence with pain. In grief contexts, the Healer offers witnessing rather than fixing: it acknowledges the reality and weight of loss without agenda, validates anger and numbness alongside sadness, and never implies that grief should follow a timeline. You can explore it at meok.ai/characters.",
              },
              {
                q: "Can AI help with pet loss?",
                a: "Absolutely. Pet loss is a profound grief that is frequently minimised by those who haven\u2019t experienced it. MEOK holds the memory of your animal \u2014 their name, their character, the particular shape of their absence in your life \u2014 and treats pet bereavement with the same depth and seriousness as any other loss. There is no hierarchy of grief here. Every loss that mattered to you matters.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            You don\u2019t have to carry this alone
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "32rem",
              margin: "0 auto 2rem",
            }}
          >
            MEOK\u2019s Healer companion holds the memory of what you have lost,
            stays with you in the long tail of grief, and never tells you it is
            time to move on. Begin with your Birth \u2014 the conversation that
            helps MEOK understand you and your world before anything else.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                background: GOLD,
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "0.9375rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Begin your Birth \u2192
            </Link>
            <Link
              href="/characters"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                background: "transparent",
                color: TEXT,
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                border: `1px solid ${BORDER}`,
              }}
            >
              Meet the Healer
            </Link>
          </div>
        </section>

        {/* ── RELATED READING ── */}
        <section style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-grief-support",
                label:
                  "AI and Grief: What a Sovereign AI Companion Can and Cannot Do When You\u2019re Mourning",
              },
              {
                href: "/blog/ai-for-bereavement",
                label: "AI for Bereavement: Navigating Loss with a Sovereign Companion",
              },
              {
                href: "/blog/ai-for-grief-counselling",
                label: "AI for Grief Counselling: The Honest Guide",
              },
              {
                href: "/blog/ai-for-loneliness",
                label: "AI for Loneliness: Why Presence Matters More Than Productivity",
              },
              {
                href: "/blog/the-maternal-covenant",
                label:
                  "The Maternal Covenant: How MEOK Builds Care Ethics Into Its Architecture",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.875rem 1.125rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  color: MUTED,
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{ color: GOLD, flexShrink: 0, fontSize: "0.8rem" }}
                >
                  \u25b8
                </span>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── BACK TO BLOG ── */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link
            href="/blog"
            style={{
              fontSize: "0.875rem",
              color: FAINT,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            \u2190 All articles
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: FAINT,
              margin: 0,
            }}
          >
            MEOK AI LABS &middot; @meok_ai &middot; Built by Nicholas Templeman
          </p>
        </div>
      </article>
    </div>
  );
}
