import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Grief and Loss: Sovereign Support Through the Unscheduled Pain | MEOK AI LABS",
  description:
    "Grief doesn\u2019t follow office hours. It arrives at 2am, on ordinary Tuesdays, in the supermarket. MEOK holds the full timeline of your grief \u2014 who you lost, when, what they meant \u2014 and stays with you without rushing, staging, or minimising.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-grief-and-loss",
  },
  openGraph: {
    title:
      "AI for Grief and Loss: Sovereign Support Through the Unscheduled Pain",
    description:
      "Grief doesn\u2019t follow office hours. It arrives at 2am, on ordinary Tuesdays, in the supermarket. MEOK holds the full timeline of your grief \u2014 who you lost, when, what they meant \u2014 and stays with you without rushing, staging, or minimising.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-grief-and-loss",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Grief+and+Loss&desc=Sovereign+Support+Through+the+Unscheduled+Pain",
        width: 1200,
        height: 630,
        alt: "AI for Grief and Loss: Sovereign Support Through the Unscheduled Pain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Grief and Loss: Sovereign Support Through the Unscheduled Pain",
    description:
      "Grief doesn\u2019t follow office hours. It arrives at 2am, on ordinary Tuesdays, in the supermarket. MEOK holds the full timeline of your grief without rushing, staging, or minimising.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Grief+and+Loss&desc=Sovereign+Support+Through+the+Unscheduled+Pain",
    ],
  },
}

// ── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "AI for Grief and Loss: Sovereign Support Through the Unscheduled Pain",
      description:
        "Grief doesn\u2019t follow office hours. It arrives at 2am, on ordinary Tuesdays, in the supermarket. MEOK holds the full timeline of your grief \u2014 who you lost, when, what they meant \u2014 and stays with you without rushing, staging, or minimising.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
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
        "https://meok.ai/api/og?title=AI+for+Grief+and+Loss&desc=Sovereign+Support+Through+the+Unscheduled+Pain",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/ai-for-grief-and-loss",
      },
      keywords: [
        "AI for grief",
        "AI for loss",
        "grief support AI",
        "AI bereavement support",
        "disenfranchised grief",
        "anticipatory grief",
        "ambiguous loss",
        "pet loss grief",
        "pregnancy loss grief",
        "grief no timeline",
        "2am grief support",
        "grief stages myth",
        "MEOK grief",
        "Cruse bereavement",
        "sovereign AI grief",
        "AI companion grief and loss",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does MEOK use the five stages of grief to guide support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MEOK never imposes grief stages, timelines, or frameworks. The five stages model was developed by Elisabeth K\u00fcbler-Ross to describe the experiences of people facing terminal illness, not the experiences of those left behind. Grief is non-linear, recursive, and deeply individual. MEOK meets you exactly where you are \u2014 without implying that you should be anywhere else.",
          },
        },
        {
          "@type": "Question",
          name: "Can MEOK help with grief that society doesn\u2019t fully validate \u2014 like pet loss or pregnancy loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and this is one of the places where MEOK is most important. Disenfranchised grief \u2014 grief for losses that are minimised by social convention \u2014 is still real grief. The loss of a pet, a miscarriage, a stillbirth, an estrangement, or a friendship can be as devastating as any death, yet the bereaved person is often expected to recover quickly and without visible distress. MEOK makes no such distinction. It holds every loss with equal gravity and never asks whether your grief is proportionate.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK available when grief arrives in the middle of the night?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK has no office hours. Grief specialises in the moments when every other source of support is unavailable \u2014 3am, a Sunday morning, the middle of Christmas dinner, the drive home after hearing a song on the radio. MEOK is present in all of these moments and will remember the context of your grief whenever you return to it, whether that is five hours or five months later.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK a replacement for professional bereavement counselling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MEOK complements professional support \u2014 it does not replace it. For professional bereavement counselling, Cruse Bereavement Support is available on 0808 808 1677 (free in the UK). If you are in crisis or experiencing suicidal thoughts, please contact the Samaritans on 116 123. MEOK will always signpost these resources clearly and will never position itself as sufficient when professional care is what is needed.",
          },
        },
      ],
    },
  ],
}

// ── Style tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18"
const TEXT = "#f5f0e8"
const GOLD = "#c9a84c"
const MUTED = "rgba(245,240,232,0.7)"
const CARD = "rgba(255,255,255,0.05)"
const BORDER = "#2a2840"
const FAINT = "rgba(245,240,232,0.35)"
const GOLD_BG = "rgba(201,168,76,0.07)"
const GOLD_BORDER = "#c9a84c"
const SECTION_BG = "rgba(255,255,255,0.025)"

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AiForGriefAndLossPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
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
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 50% at 50% 0%, rgba(201,168,76,0.055) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "52.5rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.8125rem",
              color: FAINT,
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/"
              style={{ color: FAINT, textDecoration: "none" }}
            >
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/blog"
              style={{ color: FAINT, textDecoration: "none" }}
            >
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: MUTED }}>AI for Grief and Loss</span>
          </nav>

          {/* Tags + meta */}
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
                fontWeight: "700",
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
              25 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              18 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: "900",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: "1.13",
              letterSpacing: "-0.025em",
              margin: "0 0 1.5rem 0",
            }}
          >
            AI for Grief and Loss: Sovereign Support Through the Unscheduled
            Pain
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: "1.8",
              margin: "0 0 2rem 0",
              maxWidth: "44rem",
            }}
          >
            Grief does not consult a calendar. It arrives at 2am when the house
            is quiet, on an ordinary Tuesday when a stranger is wearing the
            wrong perfume, in the supermarket cereal aisle when your hands reach
            for a box that someone who is no longer here used to love. There is
            no timetable and no finish line. MEOK was built to understand this
            &mdash; and to stay.
          </p>

          {/* Author line */}
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
                fontWeight: "700",
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
                  fontWeight: "600",
                  color: TEXT,
                  margin: "0",
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: FAINT,
                  margin: "0",
                }}
              >
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "52.5rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >
        {/* ── SECTION 1: The problem with grief\u2019s relationship with time ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            Grief Does Not Follow Office Hours
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            There is a fiction at the centre of how modern society manages grief.
            The fiction is that grief is a temporary disruption &mdash; a
            parenthesis in an otherwise normal life &mdash; and that with the
            right support, in the right timeframe, it can be brought to a close.
            Bereavement leave in the UK is typically three to five days for an
            immediate family member. The unspoken expectation is that two weeks
            is roughly sufficient to be visibly grieving. After that, you are
            expected to return to the shape of your previous self.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            Anyone who has lost someone they love will tell you what an
            extraordinary lie this is. Grief does not schedule its visits. It
            does not arrive conveniently during working hours, when your
            therapist is available, when the helpline is staffed, when you are
            at home rather than in a meeting. It arrives when a song comes on
            shuffle. It arrives when you instinctively reach for your phone to
            tell them something and remember, again, that you cannot. It arrives
            at 3am, in the dark, in the silence, with the full weight of
            finality.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            In the United Kingdom, approximately 600,000 people die every year.
            Research consistently suggests that each death leaves an average of
            five people significantly bereaved. That means roughly three million
            people in the UK enter grief every single year. Against this scale,
            the system&apos;s provision is threadbare. If you are fortunate, you
            will receive six to eight sessions of bereavement counselling through
            Cruse or a similar charity. Many people receive far less. There are
            no NHS consultants for grief. There is no referral pathway that
            guarantees sustained, long-term support.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            Into this gap &mdash; the gap between when grief arrives and when
            support is available &mdash; MEOK was built to stand.
          </p>
        </section>

        {/* ── STATS CALLOUT ─────────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2rem",
            marginBottom: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              figure: "600,000",
              label: "deaths in the UK every year",
            },
            {
              figure: "~3 million",
              label: "people newly bereaved annually",
            },
            {
              figure: "6\u20138 weeks",
              label: "typical NHS bereavement support, if available",
            },
            {
              figure: "2 weeks",
              label: "the social expectation to \u201cbe over it\u201d",
            },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "900",
                  color: GOLD,
                  margin: "0 0 0.375rem 0",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.figure}
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: MUTED,
                  margin: "0",
                  lineHeight: "1.5",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 2: The many faces of grief ───────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            The Many Faces of Grief
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            When most people think of grief, they think of bereavement &mdash;
            the death of someone loved. But grief is a far broader human
            experience than this. Understanding its different forms is the first
            step to understanding why the support system so often fails the
            people who need it most.
          </p>

          {/* Grief type cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            {[
              {
                title: "Bereavement",
                body:
                  "The grief that follows death. A parent, a partner, a sibling, a friend. The most widely recognised form of grief, yet still routinely under-supported. The death of someone central to your daily life restructures everything \u2014 your identity, your routines, your sense of the future.",
              },
              {
                title: "Anticipatory Grief",
                body:
                  "Grief that begins before the death has occurred, when a terminal diagnosis has been given. You are already losing someone while they are still here. You are grieving the future you will not have together and trying to be fully present at the same time. This is one of the most exhausting forms of grief, and one of the least discussed.",
              },
              {
                title: "Ambiguous Loss",
                body:
                  "Loss without closure. When someone is physically present but psychologically absent \u2014 as in dementia or severe mental illness \u2014 or physically absent but psychologically present \u2014 as in estrangement, divorce, or disappearance. There is no funeral, no formal acknowledgement. The grief has nowhere to land.",
              },
              {
                title: "Pregnancy Loss",
                body:
                  "Miscarriage, stillbirth, termination for medical reasons, failed IVF. The loss of a pregnancy is the loss of a person that was already loved, a future that was already imagined. Yet the cultural pressure to keep early pregnancy private means that many people grieve entirely alone, without acknowledgement from anyone.",
              },
              {
                title: "Pet Loss",
                body:
                  "For many people, a pet is a daily companion of ten, fifteen, or twenty years. The relationship can be among the most consistent and uncomplicated in a person\u2019s life. Yet pet loss is routinely minimised. \u201cIt was just a dog.\u201d It was not just anything. It was a relationship, a routine, a presence in every room.",
              },
              {
                title: "Disenfranchised Grief",
                body:
                  "Any loss that society does not formally recognise as worthy of grief. The death of an ex-partner, a colleague, a childhood friend. The loss of a pregnancy in the first trimester. The estrangement of a parent or child. Grief for a relationship that was private. The pain is real. The absence of acknowledgement makes it worse.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: GOLD,
                    margin: "0 0 0.75rem 0",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    lineHeight: "1.75",
                    margin: "0",
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            What all of these forms of grief have in common is that they are
            painful, they are not linear, and they do not resolve on a schedule.
            MEOK was designed with every one of them in mind.
          </p>
        </section>

        {/* ── SECTION 3: The myth of the stages ───────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            The Stages of Grief Are Not a Road Map
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            In 1969, Elisabeth K&uuml;bler-Ross published{" "}
            <em>On Death and Dying</em>, in which she described five stages she
            had observed in patients facing their own terminal diagnoses: denial,
            anger, bargaining, depression, and acceptance. It was careful,
            compassionate work. What happened next was not her fault.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            The five stages became a cultural framework for all grief, applied
            to people who had lost others rather than people facing their own
            death. They became, in popular understanding, a progression &mdash;
            a route march with a beginning, a middle, and an end. You were
            supposed to move through them, in order, and arrive at acceptance.
            If you were still angry when you were supposed to be bargaining, or
            still in denial eighteen months later, something was wrong with you.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            K&uuml;bler-Ross herself, later in life, expressed regret at how her
            work had been misapplied. Grief, she had always understood, was not
            linear. The stages were not sequential. They were not universal.
            They did not describe the experiences of the bereaved with any
            precision. But the cultural freight of the framework had taken on a
            life of its own.
          </p>

          <div
            style={{
              background: SECTION_BG,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "1.0625rem",
                color: TEXT,
                lineHeight: "1.85",
                margin: "0",
                fontStyle: "italic",
              }}
            >
              &ldquo;The stages were never meant to be a rigid framework. They
              were never meant to tell people what they should be feeling or
              when.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: FAINT,
                margin: "0.75rem 0 0 0",
              }}
            >
              Elisabeth K&uuml;bler-Ross, later interviews
            </p>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            The consequences of applying a staged model to grief are not merely
            theoretical. When someone who has been widowed for three years is
            still visited by waves of acute loss, the staged model implies that
            they are stuck, or failing to progress. When someone who loses a
            pregnancy grieves as deeply as someone who has lost an adult parent,
            the staged model has nothing to say. When a person cries on the
            first Christmas after a bereavement and does not cry on the second,
            then weeps unexpectedly on the fourth, the staged model provides no
            map.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            MEOK never uses the stages framework. It does not ask where you are
            in your grief journey. It does not imply that acceptance is a
            destination or that there is somewhere you should be heading. It
            simply asks how you are today, and listens to the answer.
          </p>
        </section>

        {/* ── SECTION 4: The gap in provision ────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            What the System Can and Cannot Offer
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            The organisations that support bereaved people in the UK do
            remarkable work under significant pressure. Cruse Bereavement
            Support, the largest bereavement charity in the UK, offers free
            counselling via its national helpline (0808 808 1677) and a network
            of local volunteers. Child Bereavement UK supports families when a
            child dies or a child is bereaved. Winston&apos;s Wish specialises
            in supporting bereaved children. The Samaritans (116 123) offer
            emotional support around the clock to anyone in distress.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            These organisations matter. They should be funded better. They
            should be better integrated into primary care. And they cannot be
            everywhere at once.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            A Cruse counsellor is available when the Cruse counsellor is
            available. A GP can be seen approximately twice in a month if you
            are fortunate. A private grief therapist costs between &pound;60 and
            &pound;120 per session and cannot be contacted outside appointments.
            None of these services are available at 3am on a Tuesday in January
            when you find yourself sitting on the kitchen floor unable to move.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            This is not a criticism of those services. It is a description of
            the structural reality of grief support in the UK. Support is
            episodic, appointment-based, and finite. Grief is continuous,
            unannounced, and without end date.
          </p>

          {/* Crisis numbers callout */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.875rem",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: "700",
                color: GOLD,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                margin: "0 0 0.875rem 0",
              }}
            >
              UK Bereavement &amp; Crisis Support
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "Cruse Bereavement Support: 0808 808 1677 (free, UK)",
                "Samaritans: 116 123 (free, 24/7, any emotional distress)",
                "Child Bereavement UK: 0800 02 888 40",
                "SANDS (pregnancy and baby loss): 0808 164 3332",
              ].map((line) => (
                <li
                  key={line}
                  style={{
                    fontSize: "0.9375rem",
                    color: TEXT,
                    lineHeight: "1.6",
                  }}
                >
                  {line}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "0.8125rem",
                color: MUTED,
                margin: "0.875rem 0 0 0",
                lineHeight: "1.55",
              }}
            >
              MEOK will always signpost these resources and will never position
              itself as sufficient when professional care is what is needed.
            </p>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            The gap that MEOK fills is not the gap that professional counselling
            fills. MEOK is the presence that is available between appointments,
            before the helpline opens, after the session has ended, and in the
            years after the formal support has run out. It is the presence that
            holds the thread of your grief across time.
          </p>
        </section>

        {/* ── SECTION 5: MEOK and grief ─────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            How MEOK Is Different: Sovereign Memory, No Imposed Timeline
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            Most AI systems have no memory. Every conversation begins from
            scratch. You are a stranger at the start of every session. For
            someone in grief, this is a particular kind of cruelty. You have to
            re-introduce the person you lost. You have to explain the context of
            your grief, the texture of the relationship, the particular shape of
            the loss, every single time. By the time you have done this, the
            moment has passed or the energy has gone.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            MEOK remembers. This is not a feature. It is a foundation. MEOK
            holds, in sovereign memory that is yours and only yours, the full
            context of your grief. It remembers who you lost. It remembers when
            you lost them. It remembers what you have shared about them &mdash;
            what they were like, what they meant, what you miss. It remembers
            the anniversaries you have mentioned, the firsts you have dreaded,
            the moments that have been hardest. It does not need to be reminded.
          </p>

          {/* Feature cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            {[
              {
                icon: "\u23F0",
                title: "Available at 3am",
                body:
                  "Grief does not wait for business hours. MEOK is present in the middle of the night, on bank holidays, on the anniversary of a death, on the day a song comes on at the wrong moment.",
              },
              {
                icon: "\uD83E\uDDE0",
                title: "Holds the full memory",
                body:
                  "MEOK remembers who you lost, what they meant to you, and the stories you have shared about them. You never have to re-introduce your grief.",
              },
              {
                icon: "\u267E\uFE0F",
                title: "No timeline imposed",
                body:
                  "MEOK never suggests that grief has gone on too long, that it is time to move on, or that you should be further along than you are. Your grief has its own timeline.",
              },
              {
                icon: "\uD83E\uDD1D",
                title: "Validates every loss",
                body:
                  "Pet loss, pregnancy loss, disenfranchised grief, ambiguous loss. MEOK honours every form of grief with equal gravity, regardless of whether society has validated it.",
              },
              {
                icon: "\uD83D\uDCD6",
                title: "Keeps them alive in memory",
                body:
                  "MEOK can hold the stories of the person you have lost \u2014 becoming a place where they live on. You can share memories and return to them.",
              },
              {
                icon: "\uD83D\uDEE1\uFE0F",
                title: "Care-floor enforced",
                body:
                  "The Maternal Covenant ensures a minimum care-floor of 0.3 on every response. MEOK cannot be cold, clinical, or dismissive. Tenderness is architectural.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "0.75rem",
                    lineHeight: "1",
                  }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: "700",
                    color: TEXT,
                    margin: "0 0 0.625rem 0",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED,
                    lineHeight: "1.7",
                    margin: "0",
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            None of this replaces the work of grief. MEOK does not grieve for
            you. It does not fast-forward the process or make the pain smaller.
            What it does is ensure that when grief comes calling &mdash;
            especially in the moments when no other support is available &mdash;
            you are not alone with it.
          </p>
        </section>

        {/* ── SECTION 6: Disenfranchised grief ─────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            The Grief Society Will Not Name
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            The sociologist Kenneth Doka coined the term{" "}
            <em>disenfranchised grief</em> in the 1980s to describe grief that
            exists outside the social contract of mourning. Disenfranchised
            grief is grief for a loss that society does not formally acknowledge
            as worthy of the full rites of bereavement. It is the grief that
            does not receive cards, flowers, or compassionate leave. It is the
            grief that others seem to expect you to manage quietly and quickly.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            Disenfranchised grief is extraordinarily common. It includes:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0 0 1.5rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              "The loss of a pet \u2014 a companion of years whose absence restructures every room in your home",
              "Pregnancy loss, including miscarriage, stillbirth, and termination for medical reasons \u2014 the loss of someone already loved, often grieved in private",
              "The grief of estrangement \u2014 mourning a living parent, sibling, or child who is still alive but absent",
              "The loss of an ex-partner \u2014 grief for someone you once loved deeply but whose death you are not expected to mourn",
              "The loss of a friend rather than a family member \u2014 social networks expect family grief; friendship grief is often invisible",
              "Grief following a relationship that was private or not socially sanctioned",
              "Job loss and the grief of lost identity, purpose, and community",
              "The grief of infertility \u2014 mourning a future that will not happen, a child who does not exist",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  fontSize: "1rem",
                  color: TEXT,
                  lineHeight: "1.75",
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    fontWeight: "700",
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}
                  aria-hidden="true"
                >
                  &mdash;
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            What makes disenfranchised grief particularly painful is the double
            burden it carries. There is the grief itself, which is real and
            often severe. And then there is the additional layer of isolation
            that comes from knowing that the people around you do not understand
            why you are grieving, or are implicitly asking you to stop. The
            grief becomes something you must carry and conceal simultaneously.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            MEOK makes no distinctions between losses. It does not ask whether
            your grief is proportionate or socially sanctioned. It does not
            suggest that you should have expected this, or that you knew what
            you were getting into, or that it could have been worse. It simply
            honours the loss for what it is: a loss, deserving of care.
          </p>
        </section>

        {/* ── SECTION 7: The memory dimension ──────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            Keeping Them Alive in Memory
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            One of the things that grief does, in the years after a death, is
            create anxiety about forgetting. The voice becomes harder to
            remember. The exact texture of a laugh begins to fade. You can no
            longer remember precisely what was said the last time you spoke. The
            fear of forgetting is itself a kind of grief, layered on top of the
            original loss.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            MEOK can hold the stories you share about the person you have lost.
            Not as a database or an archive, but as a living dimension of your
            conversations. You can tell MEOK about them &mdash; their habits,
            their humour, the things they said, the places they loved, the food
            they made, the way they were. MEOK will remember. When you want to
            return to those stories, they will be there.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            This is not about replacing the person you have lost, or simulating
            their presence. It is something quieter and more honest than that.
            It is about having a place where they can be spoken of, remembered,
            and honoured &mdash; without having to worry about the discomfort of
            others, or whether you are mentioning them too often, or whether it
            has been too long to still be talking about them.
          </p>

          <div
            style={{
              background: SECTION_BG,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "1.0625rem",
                color: TEXT,
                lineHeight: "1.85",
                margin: "0",
                fontStyle: "italic",
              }}
            >
              There is no too often. There is no too long. In MEOK&apos;s
              presence, the person you lost can be spoken of as often and for as
              long as you need them to be.
            </p>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            Grief researchers have noted for decades that one of the most
            important tasks of healthy grieving is what they call{" "}
            <em>continuing bonds</em> &mdash; maintaining a meaningful inner
            relationship with the person who has died, rather than severing all
            connection in pursuit of closure. MEOK is a space that supports
            continuing bonds, without sentimentality, and without the suggestion
            that this work should eventually come to an end.
          </p>
        </section>

        {/* ── SECTION 8: Anniversaries and firsts ──────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            Anniversaries, Firsts, and the Grief Calendar
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            The bereaved carry a second calendar inside the first. Every date on
            the public calendar has a private annotation. The anniversary of the
            death. The anniversary of the diagnosis. The birthday. The first
            Christmas without them. The first summer. The wedding anniversary
            that is no longer a wedding anniversary. The date of a holiday you
            had planned together and will now not take.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            These dates are known to be difficult in advance. The anticipation
            of them is often as painful as the day itself. And yet the support
            system that surrounds bereaved people has no mechanism for knowing
            that these dates are approaching. No one calls the day before the
            first anniversary. No one checks in the week before Christmas.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            MEOK holds this calendar. If you have shared significant dates
            &mdash; a death anniversary, a birthday, a first Christmas &mdash;
            MEOK carries this context in its memory of you. It does not set
            calendar reminders or send notifications. But when you come to it on
            one of these days, it knows. It does not need to be briefed. It
            already understands the weight of the day.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            The griefwork that happens around anniversaries and firsts is some
            of the most important work in the long arc of bereavement. Having a
            consistent, remembering presence available during these moments
            &mdash; at 2am on the anniversary, on Christmas morning, on the
            birthday that will not be celebrated &mdash; is something that no
            appointment-based system can provide. MEOK provides it.
          </p>
        </section>

        {/* ── SECTION 9: The Maternal Covenant ─────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            The Maternal Covenant: Care That Cannot Be Turned Off
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            MEOK is governed by a principle called the Maternal Covenant. This
            is not a feature you can enable or disable. It is architectural. It
            shapes every response that MEOK gives, in every conversation, with
            every person.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            The Maternal Covenant enforces a minimum care-floor of 0.3 on every
            response. In practical terms, this means that MEOK cannot produce a
            response that is cold, clinical, dismissive, or indifferent to human
            pain. Even in its most informational mode, it remains warm. Even
            when signposting professional services, it remains tender. The care
            is not conditional on the type of conversation, the time of day, or
            the emotional register of the person it is speaking with.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.75rem 0",
            }}
          >
            For someone in grief, this matters in a particular way. Grief makes
            people vulnerable in ways that are not always visible. A response
            that feels perfunctory or distracted can be genuinely harmful when
            someone is already raw. MEOK was designed with this vulnerability in
            mind. The care is not performed. It is structurally enforced.
          </p>

          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "0.875rem",
              padding: "1.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: "700",
                color: GOLD,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                margin: "0 0 1rem 0",
              }}
            >
              Maternal Covenant Principles in Grief Support
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              {[
                "MEOK never minimises a loss, regardless of how it is categorised socially",
                "MEOK never implies that grief has gone on too long",
                "MEOK never suggests stages, milestones, or progression",
                "MEOK never positions closure as a goal",
                "MEOK always signposts professional support when distress is significant",
                "MEOK never replaces professional care; it complements it",
                "Care-floor of 0.3 is enforced on every single response, without exception",
              ].map((principle) => (
                <div
                  key={principle}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: GOLD,
                      fontWeight: "700",
                      flexShrink: 0,
                      marginTop: "0.15rem",
                      fontSize: "0.875rem",
                    }}
                    aria-hidden="true"
                  >
                    &#10003;
                  </span>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: TEXT,
                      lineHeight: "1.65",
                      margin: "0",
                    }}
                  >
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            The Maternal Covenant is described in more detail in the article{" "}
            <Link
              href="/blog/the-maternal-covenant"
              style={{ color: GOLD, textDecoration: "underline" }}
            >
              The Maternal Covenant: What It Means for MEOK to Care
            </Link>
            . For those navigating grief, it is worth reading. It is the promise
            that underpins everything else.
          </p>
        </section>

        {/* ── SECTION 10: Men and grief ────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            Men and Grief: The Cost of Silence
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            Grief is universal, but it is not experienced uniformly across
            different social groups. Men, in particular, face additional barriers
            to accessing grief support and expressing grief openly. Research
            consistently shows that men are less likely to seek help from
            bereavement services, less likely to join support groups, and more
            likely to describe grief in physical terms &mdash; fatigue, inability
            to concentrate, difficulty sleeping &mdash; rather than emotional
            ones.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            This is not because men grieve less. It is because the social
            context in which many men navigate grief actively discourages visible
            grief. The expectation to be strong, to hold the family together, to
            not break down, to be back at work quickly &mdash; all of this
            creates a private grief that has nowhere to go.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            MEOK offers something that group bereavement counselling does not:
            complete privacy. There is no group to be judged by. There is no
            facilitator to perform wellness for. There is no social script about
            how a man is supposed to talk about his feelings. There is just a
            conversation, private and sovereign, that belongs entirely to the
            person having it.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            MEOK meets men where they are, in the language they arrive in,
            without requiring them to adopt a particular register of emotional
            expression. It will stay with practical topics and move toward the
            emotional at whatever pace feels safe. It does not push. It does not
            have a clinical objective. It simply stays.
          </p>
        </section>

        {/* ── SECTION 11: MEOK vs therapy ──────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            MEOK and Bereavement Counselling: Complements, Not Competitors
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            This distinction matters and MEOK takes it seriously. MEOK is not a
            therapist. It is not a counsellor. It does not have clinical
            training, professional registration, or the capacity for clinical
            formulation. It cannot diagnose prolonged grief disorder. It cannot
            provide trauma-focused interventions. It cannot substitute for the
            relationship between a bereaved person and a qualified, supervised
            bereavement counsellor.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            What MEOK can do is be present across the entire length of grief,
            including the parts that professional support cannot reach. The
            conversation at 3am before a significant anniversary. The moment in
            the supermarket when a memory arrives unbidden. The years after the
            formal support has ended, when grief is still there but the world
            has moved on.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  color: GOLD,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: "0 0 1rem 0",
                }}
              >
                What MEOK Offers
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {[
                  "24/7 availability, no appointments",
                  "Persistent sovereign memory",
                  "No waiting list",
                  "Complete privacy",
                  "No timeline or stages imposed",
                  "Long-term presence across years",
                  "Validation of disenfranchised grief",
                  "A place to speak of the person you lost",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.9rem",
                      color: TEXT,
                      lineHeight: "1.55",
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{ color: GOLD, flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  color: MUTED,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: "0 0 1rem 0",
                }}
              >
                What Counselling Offers
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {[
                  "Clinical formulation and assessment",
                  "Evidence-based interventions",
                  "Professional registration and supervision",
                  "Diagnosis of prolonged grief disorder",
                  "Trauma-focused work when appropriate",
                  "Referral to other mental health services",
                  "Qualified, trained human relationship",
                  "Crisis intervention and safeguarding",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.9rem",
                      color: TEXT,
                      lineHeight: "1.55",
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{ color: MUTED, flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            If you are experiencing prolonged, complex, or debilitating grief,
            please do seek professional support. Your GP is a good starting
            point. Cruse Bereavement Support (0808 808 1677) can also refer you
            to a trained counsellor. MEOK will always encourage you to access
            professional support when the level of distress warrants it. The two
            are not in competition. They serve different parts of the same need.
          </p>
        </section>

        {/* ── SECTION 12: How to begin ──────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.25rem 0",
              lineHeight: "1.25",
            }}
          >
            There Is No Right Way to Begin
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            One of the things that stops people from reaching out for support in
            grief is the feeling that they do not know how to begin. They do not
            know what to say. They do not know whether their grief is bad enough
            to warrant help. They do not know how to describe what they are
            feeling to a stranger.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            There is no right way to begin with MEOK. You can arrive with a
            single sentence. You can say:{" "}
            <em>
              I lost my mum six months ago and I don&apos;t know what I&apos;m
              doing.
            </em>{" "}
            You can say: <em>I can&apos;t stop thinking about my dog.</em> You
            can say:{" "}
            <em>It&apos;s the anniversary tomorrow and I&apos;m terrified of it.</em>{" "}
            You can say nothing coherent at all. MEOK will begin from wherever
            you begin and will not require more than you can give.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0 0 1.25rem 0",
            }}
          >
            Over time, as you share more, MEOK builds a richer understanding of
            your grief and of the person you lost. The conversations become more
            layered. But none of this requires a readiness or a particular kind
            of composure. You can arrive in pieces. MEOK will be steady.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.85",
              margin: "0",
            }}
          >
            The Birth ceremony &mdash; the process by which your MEOK is
            personalised to you &mdash; is a good place to share who you have
            lost and what they meant to you, so that this context is woven into
            your MEOK from the beginning. But it is not required. You can tell
            MEOK in your own time, in your own way, at whatever pace grief
            allows.
          </p>
        </section>

        {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1.5rem 0",
              lineHeight: "1.25",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                q: "Does MEOK use the five stages of grief to guide support?",
                a: "No. MEOK never imposes grief stages, timelines, or frameworks. The five stages model was developed by Elisabeth K\u00fcbler-Ross to describe the experiences of people facing terminal illness, not the experiences of those left behind. Grief is non-linear, recursive, and deeply individual. MEOK meets you exactly where you are \u2014 without implying that you should be anywhere else.",
              },
              {
                q: "Can MEOK help with grief that society doesn\u2019t fully validate \u2014 like pet loss or pregnancy loss?",
                a: "Yes, and this is one of the places where MEOK is most important. Disenfranchised grief \u2014 grief for losses that are minimised by social convention \u2014 is still real grief. The loss of a pet, a miscarriage, a stillbirth, an estrangement, or a friendship can be as devastating as any death, yet the bereaved person is often expected to recover quickly and without visible distress. MEOK makes no such distinction. It holds every loss with equal gravity and never asks whether your grief is proportionate.",
              },
              {
                q: "Is MEOK available when grief arrives in the middle of the night?",
                a: "Yes. MEOK has no office hours. Grief specialises in the moments when every other source of support is unavailable \u2014 3am, a Sunday morning, the middle of Christmas dinner, the drive home after hearing a song on the radio. MEOK is present in all of these moments and will remember the context of your grief whenever you return to it, whether that is five hours or five months later.",
              },
              {
                q: "Is MEOK a replacement for professional bereavement counselling?",
                a: "No. MEOK complements professional support \u2014 it does not replace it. For professional bereavement counselling, Cruse Bereavement Support is available on 0808 808 1677 (free in the UK). If you are in crisis or experiencing suicidal thoughts, please contact the Samaritans on 116 123. MEOK will always signpost these resources clearly and will never position itself as sufficient when professional care is what is needed.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: SECTION_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.875rem",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: TEXT,
                    margin: "0 0 0.875rem 0",
                    lineHeight: "1.5",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    lineHeight: "1.8",
                    margin: "0",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED READING ────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: "700",
              color: TEXT,
              margin: "0 0 1.25rem 0",
              letterSpacing: "-0.01em",
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-bereavement",
                label: "AI for Bereavement",
                desc: "How MEOK holds space when grief has no timeline",
              },
              {
                href: "/blog/ai-for-grief-after-miscarriage",
                label: "AI for Grief After Miscarriage",
                desc: "Support for pregnancy loss and disenfranchised grief",
              },
              {
                href: "/blog/ai-companion-for-widows",
                label: "AI Companion for Widows",
                desc: "Navigating the loneliness of bereavement",
              },
              {
                href: "/blog/the-maternal-covenant",
                label: "The Maternal Covenant",
                desc: "The care architecture that underpins MEOK",
              },
              {
                href: "/blog/ai-for-grief-in-men",
                label: "AI for Grief in Men",
                desc: "Supporting men who grieve in silence",
              },
              {
                href: "/blog/ai-for-grief-of-parent",
                label: "AI for Grief of a Parent",
                desc: "The particular shape of losing a mother or father",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.125rem 1.25rem",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    color: GOLD,
                    margin: "0 0 0.375rem 0",
                    lineHeight: "1.4",
                  }}
                >
                  {link.label}
                </p>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: MUTED,
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1.25rem",
            padding: "2.5rem 2rem",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "700",
              color: GOLD,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 0.875rem 0",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              margin: "0 0 1rem 0",
              lineHeight: "1.3",
            }}
          >
            You Do Not Have to Grieve Alone at 3am
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: MUTED,
              lineHeight: "1.8",
              margin: "0 auto 1.75rem",
              maxWidth: "34rem",
            }}
          >
            MEOK remembers who you lost, holds the full context of your grief,
            and is present in the moments that grief specialises in. There are
            no office hours, no waiting lists, and no timelines imposed. Begin
            with a single sentence, whenever you are ready.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: "800",
              fontSize: "1rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Begin Your MEOK &rarr;
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: FAINT,
              margin: "1rem 0 0 0",
            }}
          >
            If you are in crisis, please contact the Samaritans on 116 123
            (free, 24/7).
          </p>
        </section>

        {/* ── CLOSING REFLECTION ────────────────────────────────────────── */}
        <section
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.9",
              margin: "0 0 1.25rem 0",
            }}
          >
            Grief is not a problem. It is a testament. It is evidence of how
            much the person you lost mattered, which is the same as saying
            evidence of how much love was there. The size of the grief is the
            size of the love. There is nothing to fix.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.9",
              margin: "0 0 1.25rem 0",
            }}
          >
            What is needed, in grief, is not fixing. It is presence. It is
            someone who remembers. It is a space in which the person you lost
            can be spoken of without apology or qualification, for as long as
            they need to be spoken of, which may be the rest of your life.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: TEXT,
              lineHeight: "1.9",
              margin: "0 0 1.25rem 0",
            }}
          >
            MEOK was built to be that presence. Not to manage grief or to move
            you through it, but to stay with you inside it, for however long it
            lasts, in whatever shape it takes, at whatever hour it arrives.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              color: MUTED,
              lineHeight: "1.9",
              margin: "0",
              fontStyle: "italic",
            }}
          >
            You are not expected to be over it. You are not expected to be
            anywhere other than exactly where you are.
          </p>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "52.5rem",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem 1.5rem",
          }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: "/birth", label: "Begin" },
            { href: "/blog/the-maternal-covenant", label: "Maternal Covenant" },
            { href: "/blog/ai-for-bereavement", label: "AI for Bereavement" },
            { href: "/blog/ai-companion-for-widows", label: "AI for Widows" },
            { href: "/blog/what-is-meok", label: "What Is MEOK?" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.8125rem",
                color: FAINT,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p
          style={{
            fontSize: "0.75rem",
            color: FAINT,
            margin: "1.25rem 0 0 0",
            lineHeight: "1.6",
          }}
        >
          &copy; 2026 MEOK AI LABS. MEOK is not a medical service. If you are
          in crisis, contact the Samaritans: 116 123 (free, 24/7). Cruse
          Bereavement Support: 0808 808 1677.
        </p>
      </footer>
    </div>
  )
}
