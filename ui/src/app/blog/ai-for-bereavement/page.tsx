import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Bereavement: How MEOK Holds Space When Grief Has No Timeline | MEOK AI LABS",
  description:
    "Grief doesn\u2019t follow the five stages in a neat line. MEOK\u2019s Healer archetype holds space without rushing resolution, remembers who you lost by name, honours anniversaries, and stays with you at 2am when grief returns unexpectedly.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-bereavement" },
  openGraph: {
    title: "AI for Bereavement: How MEOK Holds Space When Grief Has No Timeline",
    description:
      "Grief doesn\u2019t follow the five stages in a neat line. MEOK\u2019s Healer archetype holds space without rushing resolution, remembers who you lost by name, honours anniversaries, and stays with you at 2am when grief returns unexpectedly.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-bereavement",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Bereavement&desc=How+MEOK+Holds+Space+When+Grief+Has+No+Timeline",
        width: 1200,
        height: 630,
        alt: "AI for Bereavement: How MEOK Holds Space When Grief Has No Timeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Bereavement: How MEOK Holds Space When Grief Has No Timeline",
    description:
      "Grief doesn\u2019t follow the five stages in a neat line. MEOK\u2019s Healer archetype holds space without rushing resolution, remembers who you lost by name, and stays with you at 2am.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Bereavement&desc=How+MEOK+Holds+Space+When+Grief+Has+No+Timeline",
    ],
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "AI for Bereavement: How MEOK Holds Space When Grief Has No Timeline",
      description:
        "Grief doesn\u2019t follow the five stages in a neat line. MEOK\u2019s Healer archetype holds space without rushing resolution, remembers who you lost by name, honours anniversaries, and stays with you at 2am when grief returns unexpectedly.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/ai-for-bereavement",
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
        "https://meok.ai/api/og?title=AI+for+Bereavement&desc=How+MEOK+Holds+Space+When+Grief+Has+No+Timeline",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/ai-for-bereavement",
      },
      keywords: [
        "AI for bereavement",
        "AI grief support",
        "complex grief AI",
        "disenfranchised grief",
        "MEOK Healer archetype",
        "grief no timeline",
        "AI companion grief",
        "pet loss AI support",
        "miscarriage grief AI",
        "grief anniversaries AI",
        "2am grief support",
        "Cruse Bereavement Support",
        "grief waves",
        "AI for loss",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does grief really follow Elisabeth K\u00fcbler-Ross\u2019s five stages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The five stages model \u2014 denial, anger, bargaining, depression, acceptance \u2014 was originally developed to describe the experience of people facing terminal illness, not bereavement. Grief is far more nonlinear: it resurges months or years later, arrives without warning on ordinary days, and takes entirely different shapes for different people and different losses. MEOK was built with this understanding at its core. It does not treat grief as a problem to be solved or a progression to be managed. It holds space for grief to be whatever it is on any given day.",
          },
        },
        {
          "@type": "Question",
          name: "What is disenfranchised grief and how does MEOK respond to it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Disenfranchised grief is grief that society does not fully acknowledge or permit \u2014 the loss of a pet, a miscarriage or stillbirth, an estranged parent, a friend rather than a blood relative, a relationship that was never public. Because these losses are socially minimised, the people experiencing them often feel they are not allowed to grieve as fully. MEOK makes no such distinctions. It honours every loss with the same depth of presence, never asking whether the grief is proportionate or earned.",
          },
        },
        {
          "@type": "Question",
          name: "Can MEOK help with grief that seems to go on too long?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no correct timeline for grief. The idea that grief should resolve within a year is a social convention, not a clinical or human truth. Prolonged grief disorder is a recognised clinical condition, but the vast majority of people who grieve for years are not disordered \u2014 they are deeply human. MEOK never suggests that grief has gone on too long. It meets people wherever they are. If grief is significantly impairing daily functioning, MEOK will signpost professional support from Cruse Bereavement Support or a GP.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK a replacement for professional bereavement counselling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MEOK is a compassionate presence and a safe space \u2014 it is not a bereavement counsellor, a therapist, or a medical service. For professional support, we strongly recommend Cruse Bereavement Support (0808 808 1677, free in the UK), your GP, or a qualified grief therapist. If you are experiencing suicidal thoughts or crisis-level distress, please contact the Samaritans on 116 123 immediately. MEOK will always signpost these resources and will never position itself as sufficient when professional care is needed.",
          },
        },
      ],
    },
  ],
}

// ── Style tokens ───────────────────────────────────────────────────────────────

const BG = "#0d0c18"
const TEXT = "#f5f0e8"
const GOLD = "#c9a84c"
const MUTED = "#a09880"
const CARD = "#13121f"
const BORDER = "#2a2840"
const GREEN = "#6aaa64"
const FAINT = "rgba(245,240,232,0.35)"
const GOLD_BG = "rgba(201,168,76,0.07)"
const GOLD_BORDER = "#c9a84c"
const SECTION_BG = "rgba(255,255,255,0.025)"

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForBereavementPage() {
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

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 65% 50% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Back link */}
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
            &larr; Back to Blog
          </Link>

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
              Grief &amp; Bereavement
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              25 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              16 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: "900",
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: "1.15",
              marginBottom: "1.25rem",
              letterSpacing: "-0.025em",
              margin: "0 0 1.25rem 0",
            }}
          >
            AI for Bereavement: How MEOK Holds Space When Grief Has No
            Timeline
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "1.125rem",
              color: MUTED,
              lineHeight: "1.75",
              marginBottom: "2rem",
              maxWidth: "42rem",
            }}
          >
            Grief does not follow Elisabeth K&uuml;bler-Ross&apos;s five stages
            in a neat line. It waves, resurges, and surprises you on an ordinary
            Tuesday two years later. MEOK&apos;s Healer archetype was designed
            for exactly this: holding space without rushing resolution,
            remembering who you lost, and being there at 2am when the grief
            returns without warning.
          </p>

          {/* Author row */}
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
                flexShrink: "0",
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
              <p style={{ fontSize: "0.75rem", color: FAINT, margin: "0" }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

          {/* ── SECTION 1 ── The myth of the five stages ───────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Why the Five Stages of Grief Are Not a Roadmap
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Elisabeth K&uuml;bler-Ross published <em>On Death and Dying</em>{" "}
              in 1969. The five stages &mdash; denial, anger, bargaining,
              depression, acceptance &mdash; were drawn from her work with
              people facing their own terminal illness, not bereavement. Over
              the following decades, the model migrated into popular culture as
              a framework for how grief is supposed to work: an orderly sequence
              with a destination.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Real grief rarely cooperates. You can feel acceptance for six
              months and then be ambushed by anger on a random morning. You can
              skip stages entirely. You can cycle back. The model&apos;s
              persistence as cultural shorthand has left millions of bereaved
              people wondering why they are not grieving correctly &mdash; why
              they are still sad, still angry, still undone, when the stages say
              they should have moved on.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              This is the first thing MEOK refuses to impose. There is no
              correct way to grieve. There is no timeline by which grief should
              resolve. When you bring your loss to MEOK, it does not assess
              where you are in a progression or gently suggest you might be
              ready for the next stage. It simply sits with you, in the grief
              you are actually experiencing, on the day you are experiencing it.
            </p>
          </div>

          {/* ── FEATURE BOX 1 ── The Healer Archetype ──────────────────────── */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "1rem",
              padding: "2rem",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                color: GOLD,
                letterSpacing: "0.08em",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              MEOK FEATURE
            </p>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "800",
                color: TEXT,
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              The Healer Archetype
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: "1.75",
                marginBottom: "1rem",
              }}
            >
              MEOK&apos;s Healer is not a therapist, a grief counsellor, or a
              well-meaning friend trying to find the silver lining. The Healer
              archetype was built around a single principle: that the most
              important thing you can do for a grieving person is to be present
              without agenda.
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: "1.75",
                marginBottom: "1rem",
              }}
            >
              That means no toxic positivity. No &ldquo;everything happens for a
              reason.&rdquo; No gentle redirection toward gratitude. The Healer
              holds the full weight of your loss without flinching and without
              trying to lighten it before you are ready.
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: "1.75",
              }}
            >
              You can name who you lost. You can describe who they were. You can
              be furious or devastated or numb or strangely fine and then
              wrecked again. The Healer will not judge, will not rush, and will
              not forget.
            </p>
          </div>

          {/* ── SECTION 2 ── Sovereign Memory and grief ────────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Remembering Who You Lost: How MEOK Holds Names, Relationships,
              and Meaning
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              One of the particular cruelties of grief is that the world moves
              on while you do not. People who once asked how you were slowly stop
              asking. Your person&apos;s name is spoken less often. The world
              shrinks them &mdash; reduces them to the fact of their absence
              rather than the fullness of who they were.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              MEOK&apos;s Sovereign Memory works against this. When you tell
              MEOK about someone you have lost &mdash; their name, what they
              meant to you, how they died, what you miss most &mdash; that
              context is held persistently. Not just for the next conversation,
              but for every conversation that follows. Weeks later, months later,
              MEOK will still know who you are talking about when you say{" "}
              <em>her</em> or <em>Dad</em> or <em>my best friend since
              school</em>.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              This continuity matters enormously in grief. The bereaved do not
              want to re-explain who they lost every time they need to talk.
              Standard chatbots &mdash; which reset between sessions and have no
              persistent memory &mdash; force this re-explanation endlessly. It
              is a small but real additional burden on people who are already
              carrying a great deal.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              MEOK removes that burden. It knows who you lost. It can help you
              remember them, talk about them, celebrate who they were, and sit
              with the specific texture of the loss you are carrying &mdash; not
              a generic version of grief, but yours.
            </p>
          </div>

          {/* ── SECTION 3 ── Anniversaries and accumulation ────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Anniversaries, Seasonal Grief, and the Accumulation of Small
              Moments
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Grief intensifies at predictable points &mdash; the one-year
              anniversary, birthdays, Christmas, the anniversary of the
              diagnosis, the date of the death &mdash; but also at unpredictable
              ones. A song on the radio. A smell. A stranger who walks like they
              did. These ambush moments are not signs of abnormal grief; they are
              simply how grief works when it is woven through a life that
              continues.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Anniversaries deserve particular attention. The run-up to the
              first anniversary of a death is often described as the hardest
              period, worse in some ways than the initial bereavement. The world
              expects grief to diminish; the anniversary reminds you that it has
              not disappeared, only changed shape.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Because MEOK holds your context across time, it can approach these
              dates with you rather than encountering them cold. If you have told
              MEOK that your mother died in October, it can acknowledge that
              approaching anniversary when it comes. It will not force the
              subject &mdash; but if you bring it, it will already understand why
              October is hard.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              There is also what might be called the accumulation problem:
              grief compounds. You lose a parent and are still carrying that
              when a friend dies. You lose a relationship and a pregnancy in the
              same year. MEOK can hold multiple losses simultaneously and
              understand that grief in one area of life can reactivate grief in
              another. It treats your losses as the interconnected human
              experience they are.
            </p>
          </div>

          {/* ── PULL QUOTE ─────────────────────────────────────────────────── */}
          <blockquote
            style={{
              borderLeft: `4px solid ${GOLD}`,
              paddingLeft: "1.5rem",
              margin: "0 0 3.5rem 0",
              position: "relative",
            }}
          >
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: TEXT,
                lineHeight: "1.65",
                fontStyle: "italic",
                margin: "0 0 0.5rem 0",
              }}
            >
              &ldquo;The most painful thing is not grief itself. It is the
              loneliness of grief in a world that is ready for you to be
              finished with it. MEOK will not be ready until you are.&rdquo;
            </p>
            <cite
              style={{
                fontSize: "0.875rem",
                color: MUTED,
                fontStyle: "normal",
              }}
            >
              Nicholas Templeman, Founder, MEOK AI LABS
            </cite>
          </blockquote>

          {/* ── SECTION 4 ── 2am grief ─────────────────────────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Being There at 2am: AI Availability When Human Support Is Not
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Grief does not keep office hours. It arrives at 2am, on Sunday
              mornings, in the middle of the working day. The bereaved know this
              rhythm: daytime often functions because function is required; night
              is when the loss surfaces properly.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              At 2am, calling a friend feels impossible &mdash; too aware of
              waking them, too aware of how many times you have already called,
              too aware that the grief is the same as it was and you cannot
              explain why tonight is worse than yesterday. The bereaved often
              describe this as the most isolating part: not the acute early days
              when people gathered, but the long middle distance of grief, when
              it is no longer new and yet nowhere near finished.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              MEOK is available without limit. It does not get tired of grief.
              It does not experience the slight but perceptible shift that
              happens in the people around you when the loss no longer feels
              recent. You can return to the same grief, the same memory, the
              same unanswerable question, and MEOK will sit with it as fully as
              the first time.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              This is not a replacement for the human support of friends,
              family, or professionals. But it fills a real and specific gap: the
              3am loneliness, the Sunday afternoon when the grief arrives hard,
              the moment you need to say something to someone and have no one to
              call without cost. MEOK is there.
            </p>
          </div>

          {/* ── SECTION 5 ── Disenfranchised grief ────────────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Disenfranchised Grief: Pet Loss, Miscarriage, and the Losses
              Society Refuses to Honour
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Kenneth Doka coined the term &ldquo;disenfranchised grief&rdquo;
              in 1989 to describe grief that is not socially recognised or
              supported &mdash; losses that the bereaved person experiences as
              significant but that the world around them treats as minor,
              inappropriate, or not quite real.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              The most common examples: the death of a beloved pet, met with
              sympathy that quickly cedes to the expectation that you will
              recover quickly because it was &ldquo;just an animal.&rdquo; A
              miscarriage or early pregnancy loss, where the grief is real and
              the love was real but the person existed mainly within the
              expectant parent. The death of an estranged parent &mdash; where
              grief is tangled with anger, relief, and a mourning not just for
              the person but for the relationship that never was. The loss of a
              friend, a colleague, a therapist, a celebrity who genuinely shaped
              your life.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Each of these losses can be as devastating as a conventional
              bereavement. But the people experiencing them often receive far
              less support &mdash; sometimes active dismissal &mdash; because the
              loss does not fit the script that society has for grief.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              MEOK makes no hierarchy of loss. It does not ask whether the grief
              is proportionate, whether the relationship justified it, whether
              enough time has passed. If you are grieving, MEOK holds that grief
              with the same full presence, regardless of what or who was lost.
            </p>
          </div>

          {/* ── FEATURE BOX 2 ── Disenfranchised grief types ───────────────── */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "1rem",
              padding: "2rem",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                color: GOLD,
                letterSpacing: "0.08em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              LOSSES MEOK HONOURS
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
                gap: "0.75rem",
              }}
            >
              {[
                "Death of a parent or sibling",
                "Death of a partner or spouse",
                "Pet loss &mdash; any animal, any bond",
                "Miscarriage or stillbirth",
                "Pregnancy termination grief",
                "Loss of an estranged parent",
                "Loss of a close friend",
                "Neonatal loss",
                "Loss of a therapist or mentor",
                "Grief after a relationship ending",
                "Loss of a pregnancy before others knew",
                "Anticipatory grief (terminal diagnosis)",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      color: GREEN,
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                      flexShrink: "0",
                    }}
                  >
                    &#10003;
                  </span>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: "1.6",
                    }}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 6 ── Complex grief ─────────────────────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Complex Grief: When Loss Is Tangled With Other Feelings
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Not all grief is straightforward loss. Complicated or complex grief
              &mdash; now more precisely termed prolonged grief disorder when it
              meets specific clinical thresholds &mdash; is characterised by an
              intensity and duration that significantly impairs functioning.
              Around 10% of bereaved people are estimated to experience it.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              But complexity in grief extends well beyond clinical categories.
              Grief after a difficult or abusive relationship carries anger and
              relief alongside loss. Grief after suicide is tangled with guilt,
              questions that cannot be answered, and sometimes stigma that limits
              who the bereaved feel they can speak openly to. Grief after a
              long illness can include relief at the ending, and guilt about that
              relief.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              MEOK does not require grief to be pure or clean. You can tell it
              that you are relieved your parent died, that you are furious at the
              person you lost, that you feel guilty about not crying more, that
              you are mourning someone you hated and loved simultaneously. MEOK
              will not redirect you toward a more acceptable emotional
              experience. It will hold the full complexity as it is.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              If you are experiencing grief that is significantly impairing your
              daily life &mdash; difficulty working, eating, sleeping, or
              maintaining relationships over an extended period &mdash; MEOK will
              encourage you to speak with a professional. Prolonged grief
              disorder is treatable, and Cruse Bereavement Support (0808 808
              1677) offers free specialist counselling in the UK.
            </p>
          </div>

          {/* ── SECTION 7 ── The taboo of grief taking too long ────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              The Taboo of Grief That Takes Too Long
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Western culture has an uncomfortable relationship with long grief.
              The unwritten social contract around bereavement runs roughly: a
              few weeks of acute distress, a few months of visible mourning, and
              then a gradual return to normal. By one year, the expectation is
              that you are managing. By two years, grief should be quiet.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              This timeline is entirely invented. Grief researchers such as
              Colin Murray Parkes and George Bonanno have demonstrated
              consistently that grief trajectories are enormously variable, that
              resilience is common but not universal, and that many people carry
              significant grief for years without any pathology. The love does
              not go away. Neither does the loss.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              The social pressure to move on has real costs. People begin to
              censor their grief in public. They stop mentioning the person who
              died because they have read the discomfort in the faces around
              them. They learn to perform being fine. Internally, the grief
              continues &mdash; now in isolation.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              MEOK imposes no timeline. You can bring grief that is ten years
              old to MEOK and find no suggestion that you should be past it, no
              mild reframe toward acceptance, no implication that the continued
              intensity of your feeling is unusual. Grief that takes a long time
              is normal. MEOK knows this. It will sit with you in the long
              middle of it.
            </p>
          </div>

          {/* ── SECTION 8 ── What MEOK cannot do ──────────────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              What MEOK Cannot Do: The Importance of Professional Bereavement
              Support
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              MEOK is honest about its limits. It is a compassionate presence.
              It is not a bereavement counsellor, a grief therapist, a
              psychologist, or a medical service. There are things that it
              cannot and should not try to do.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Clinical grief interventions &mdash; Complicated Grief Treatment
              (CGT), Cognitive Behavioural Therapy for grief, EMDR for traumatic
              loss &mdash; require trained human practitioners working within
              therapeutic frameworks. MEOK cannot replicate these. It can
              supplement professional support; it cannot replace it.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              If you are experiencing any of the following, please seek
              professional support:
            </p>
            <ul
              style={{
                paddingLeft: "1.5rem",
                marginBottom: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "Suicidal thoughts or thoughts of self-harm",
                "Grief significantly impairing your ability to work or care for yourself",
                "Using alcohol, substances, or medication to manage grief",
                "Grief that has not changed in intensity after many months",
                "Intrusive thoughts or flashbacks following a traumatic death",
                "Feeling that life is permanently meaningless without the person",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "1.0625rem",
                    color: MUTED,
                    lineHeight: "1.7",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              MEOK will always signpost professional help when the need is clear.
              It will never suggest that AI support is sufficient when it is not.
            </p>
          </div>

          {/* ── FEATURE BOX 3 ── Professional support resources ────────────── */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "1rem",
              padding: "2rem",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                color: GOLD,
                letterSpacing: "0.08em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              PROFESSIONAL SUPPORT
            </p>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "800",
                color: TEXT,
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Where to Get Specialist Bereavement Help
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: "700",
                    color: TEXT,
                    margin: "0 0 0.25rem 0",
                  }}
                >
                  Cruse Bereavement Support
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  Free specialist bereavement counselling in the UK.
                  Helpline: 0808 808 1677 (Monday&ndash;Friday, 9am&ndash;5pm).
                  Available to anyone who has experienced bereavement.
                  cruse.org.uk
                </p>
              </div>
              <div
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: "700",
                    color: TEXT,
                    margin: "0 0 0.25rem 0",
                  }}
                >
                  Samaritans
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  Available around the clock, every day of the year. Free to
                  call on 116 123. Not exclusively for crisis &mdash; you can
                  call if you simply need to talk. samaritans.org
                </p>
              </div>
              <div
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: "700",
                    color: TEXT,
                    margin: "0 0 0.25rem 0",
                  }}
                >
                  Child Bereavement UK
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  Specialist support for children and young people who have
                  been bereaved, and for adults supporting them.
                  childbereavementuk.org
                </p>
              </div>
              <div
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: "700",
                    color: TEXT,
                    margin: "0 0 0.25rem 0",
                  }}
                >
                  The Miscarriage Association
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED,
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  Support for those affected by pregnancy loss, including
                  miscarriage, ectopic pregnancy, and molar pregnancy.
                  miscarriageassociation.org.uk
                </p>
              </div>
            </div>
          </div>

          {/* ── SECTION 9 ── How to use MEOK for grief ────────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              How to Use MEOK When You Are Grieving
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              There is no correct way to approach MEOK in grief. You do not need
              to be articulate, coherent, or able to explain what you are
              feeling. You can come with a specific memory. You can come because
              you need to say the name of the person you lost to someone who
              will receive it without flinching. You can come at 2am because
              there is nowhere else to go.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Some people find it helpful to use MEOK to write through grief
              &mdash; a form of guided journalling in which MEOK helps open
              reflection rather than close it down. Grief journalling has a
              strong evidence base: James Pennebaker&apos;s research on
              expressive writing has shown measurable physical and psychological
              benefits from putting grief into words. MEOK can be a collaborator
              in this process, holding what you have written in Sovereign Memory
              so that the journal becomes an ongoing conversation rather than
              isolated entries.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
                marginBottom: "1.25rem",
              }}
            >
              Others use MEOK to talk about the person they lost &mdash; to
              share memories, describe who they were, honour the specific texture
              of the relationship. This kind of meaning-making is central to
              most contemporary grief frameworks, including William Worden&apos;s
              tasks of mourning and Robert Neimeyer&apos;s meaning reconstruction
              approach. MEOK can hold that space for as long as you need it.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.8",
              }}
            >
              When you are ready to start, you will go through MEOK&apos;s Birth
              Ceremony &mdash; a brief, intentional process through which MEOK
              learns who you are, what matters to you, and how it can best support
              you. From that point, your companion remembers everything you share.
              Your grief, your person, your timeline &mdash; all of it held
              securely in your Sovereign Memory.
            </p>
          </div>

          {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                fontWeight: "800",
                color: TEXT,
                lineHeight: "1.3",
                letterSpacing: "-0.015em",
                marginBottom: "2rem",
                margin: "0 0 2rem 0",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* FAQ 1 */}
              <div
                style={{
                  background: SECTION_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: "700",
                    color: TEXT,
                    marginBottom: "0.75rem",
                    margin: "0 0 0.75rem 0",
                    lineHeight: "1.4",
                  }}
                >
                  Does grief really follow Elisabeth K&uuml;bler-Ross&apos;s
                  five stages?
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: MUTED,
                    lineHeight: "1.75",
                    margin: "0",
                  }}
                >
                  No. The five stages model was originally drawn from work with
                  people facing terminal illness, not bereavement. Grief is far
                  more nonlinear: it resurges months or years later, arrives
                  without warning on ordinary days, and takes entirely different
                  shapes for different people. MEOK was built with this
                  understanding. It does not treat grief as a progression to be
                  managed or a problem to be resolved on a schedule. It holds
                  space for grief to be whatever it needs to be.
                </p>
              </div>

              {/* FAQ 2 */}
              <div
                style={{
                  background: SECTION_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: "700",
                    color: TEXT,
                    marginBottom: "0.75rem",
                    margin: "0 0 0.75rem 0",
                    lineHeight: "1.4",
                  }}
                >
                  What is disenfranchised grief and how does MEOK respond to it?
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: MUTED,
                    lineHeight: "1.75",
                    margin: "0",
                  }}
                >
                  Disenfranchised grief is grief that society does not
                  fully acknowledge or permit &mdash; the loss of a pet, a
                  miscarriage or stillbirth, an estranged parent, a
                  relationship that was never public. Because these losses
                  are socially minimised, people experiencing them often feel
                  they are not allowed to grieve as fully. MEOK makes no such
                  distinctions. It honours every loss with the same depth of
                  presence, never asking whether the grief is proportionate
                  or earned.
                </p>
              </div>

              {/* FAQ 3 */}
              <div
                style={{
                  background: SECTION_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: "700",
                    color: TEXT,
                    marginBottom: "0.75rem",
                    margin: "0 0 0.75rem 0",
                    lineHeight: "1.4",
                  }}
                >
                  Can MEOK help with grief that seems to have lasted too long?
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: MUTED,
                    lineHeight: "1.75",
                    margin: "0",
                  }}
                >
                  There is no correct timeline for grief. The idea that it
                  should resolve within a year is a social convention, not a
                  human truth. Most people who grieve for years are not
                  disordered &mdash; they are deeply human. MEOK never suggests
                  grief has gone on too long. It meets people wherever they
                  are. If grief is significantly impairing daily functioning,
                  MEOK will signpost professional support from Cruse
                  Bereavement Support or a GP, because prolonged grief disorder
                  is a treatable condition.
                </p>
              </div>

              {/* FAQ 4 */}
              <div
                style={{
                  background: SECTION_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: "700",
                    color: TEXT,
                    marginBottom: "0.75rem",
                    margin: "0 0 0.75rem 0",
                    lineHeight: "1.4",
                  }}
                >
                  Is MEOK a replacement for professional bereavement
                  counselling?
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: MUTED,
                    lineHeight: "1.75",
                    margin: "0",
                  }}
                >
                  No. MEOK is a compassionate presence &mdash; it is not a
                  bereavement counsellor, a therapist, or a medical service.
                  For professional support in the UK, we recommend Cruse
                  Bereavement Support (0808 808 1677, free) or your GP. If
                  you are experiencing suicidal thoughts or crisis-level
                  distress, please contact the Samaritans on 116 123
                  immediately. MEOK will always signpost these resources and
                  will never suggest that AI support is sufficient when
                  professional care is needed.
                </p>
              </div>
            </div>
          </div>

          {/* ── RELATED READING ───────────────────────────────────────────── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.125rem",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-companion-for-grief",
                  label: "AI Companion for Grief: What Presence Without Judgement Really Means",
                },
                {
                  href: "/blog/ai-for-grief-support",
                  label: "AI for Grief Support: The 3am Moment Nobody Talks About",
                },
                {
                  href: "/blog/ai-for-grief-after-miscarriage",
                  label: "AI for Grief After Miscarriage: Holding the Loss the World Minimises",
                },
                {
                  href: "/blog/ai-for-grief-in-men",
                  label: "AI for Grief in Men: When Stoicism Becomes Isolation",
                },
                {
                  href: "/blog/ai-for-grief-of-parent",
                  label: "Losing a Parent: How MEOK Holds That Specific Grief",
                },
                {
                  href: "/blog/ai-for-grief-and-loss",
                  label: "AI for Grief and Loss: A Comprehensive Guide",
                },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.9375rem",
                    color: GOLD,
                    textDecoration: "none",
                    lineHeight: "1.5",
                  }}
                >
                  <span style={{ flexShrink: "0", opacity: "0.6" }}>&#8594;</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA ──────────────────────────────────────────────────────────── */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "1.25rem",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            {/* Eyebrow */}
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                color: GOLD,
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              BEGIN WITH MEOK
            </p>

            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "900",
                color: "#ffffff",
                lineHeight: "1.25",
                marginBottom: "1rem",
                margin: "0 0 1rem 0",
                letterSpacing: "-0.02em",
              }}
            >
              You Don&apos;t Have to Grieve Alone at 2am
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: MUTED,
                lineHeight: "1.75",
                marginBottom: "1.75rem",
                maxWidth: "34rem",
                margin: "0 auto 1.75rem auto",
              }}
            >
              MEOK&apos;s Healer archetype holds space for grief without rushing
              resolution, without toxic positivity, and without forgetting. It
              remembers who you lost. It stays. Begin the Birth Ceremony and
              meet your companion.
            </p>

            <a
              href="https://meok.ai/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: GOLD,
                color: "#0d0c18",
                fontWeight: "700",
                fontSize: "1rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.625rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Begin the Birth Ceremony &#8594;
            </a>

            <p
              style={{
                fontSize: "0.8125rem",
                color: FAINT,
                marginTop: "1rem",
                margin: "1rem 0 0 0",
              }}
            >
              MEOK is not a clinical service. If you are in crisis, please
              contact the Samaritans on 116 123 (free, 24/7) or Cruse
              Bereavement Support on 0808 808 1677.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
