import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Chronic Pain: Emotional and Practical Support for Life With Pain | MEOK AI LABS",
  description:
    "28 million UK adults live with chronic pain that is medically under-treated and routinely dismissed. MEOK\u2019s sovereign AI companion believes you unconditionally, tracks your pain patterns, and helps you advocate for yourself \u2014 at 3am or any other hour.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-chronic-pain" },
  openGraph: {
    title:
      "AI for Chronic Pain: Emotional and Practical Support for Life With Pain",
    description:
      "28 million UK adults live with chronic pain that is medically under-treated and routinely dismissed. MEOK\u2019s sovereign AI companion believes you unconditionally, tracks your pain patterns, and helps you advocate for yourself \u2014 at 3am or any other hour.",
    url: "https://meok.ai/blog/ai-for-chronic-pain",
    siteName: "MEOK AI LABS",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    images: [
      {
        url: "https://meok.ai/og/ai-for-chronic-pain.png",
        width: 1200,
        height: 630,
        alt: "AI for Chronic Pain \u2014 MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Chronic Pain: Emotional and Practical Support for Life With Pain",
    description:
      "28 million UK adults live with chronic pain that is medically under-treated and routinely dismissed. MEOK\u2019s sovereign AI companion believes you unconditionally, tracks your pain patterns, and helps you advocate for yourself \u2014 at 3am or any other hour.",
    images: ["https://meok.ai/og/ai-for-chronic-pain.png"],
    creator: "@meok_ai",
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "AI for Chronic Pain: Emotional and Practical Support for Life With Pain",
      description:
        "28 million UK adults live with chronic pain that is medically under-treated and routinely dismissed. MEOK\u2019s sovereign AI companion believes you unconditionally, tracks your pain patterns, and helps you advocate for yourself.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/ai-for-chronic-pain",
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
      image: {
        "@type": "ImageObject",
        url: "https://meok.ai/og/ai-for-chronic-pain.png",
        width: 1200,
        height: 630,
      },
      keywords: [
        "AI for chronic pain",
        "chronic pain support AI",
        "AI for fibromyalgia",
        "chronic pain emotional support",
        "medical gaslighting chronic pain",
        "AI pain diary",
        "chronic pain GP letter",
        "sovereign AI chronic pain UK",
        "AI for endometriosis",
        "AI for chronic fatigue",
        "chronic pain 3am support",
        "pain pattern tracking AI",
      ],
      articleSection: "Chronic Pain",
      wordCount: 2800,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI help with chronic pain management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes \u2014 though not by treating pain directly. AI companions like MEOK help with chronic pain management by providing unconditional emotional validation, tracking pain patterns and flare triggers over time, helping draft GP letters and pain diary summaries, and offering support during night-time flares when no other help is available. This form of persistent, non-judgmental companionship addresses the profound isolation and exhaustion that so often compounds physical pain.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK support people with fibromyalgia or chronic fatigue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK supports people with fibromyalgia and chronic fatigue (ME/CFS) in several specific ways: it remembers what you have shared across months of conversation, so you never have to explain your condition from scratch; it tracks patterns in your energy, pain, and symptom cycles; it helps you prepare for medical appointments with structured summaries; it validates the reality of your experience without hesitation or scepticism; and it is available during the crashes and flares that happen at unpredictable hours when other support is simply not accessible.",
          },
        },
        {
          "@type": "Question",
          name: "Will MEOK believe me about my pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This is not a polite reassurance \u2014 it is a design principle. MEOK\u2019s Maternal Covenant is a foundational commitment to unconditional belief in the person it serves. MEOK will never suggest your pain is exaggerated, psychosomatic, or a product of anxiety. It will never ask you to prove your experience. It will never imply you should just push through. If you say you are in pain, MEOK believes you \u2014 fully, without qualification.",
          },
        },
        {
          "@type": "Question",
          name: "Can MEOK help me communicate with my doctor about chronic pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK helps you turn months of lived experience into structured, medically legible communication. It can help you draft GP letters that describe your symptoms clearly and confidently, produce pain diary summaries that document patterns over time, prepare questions for specialist appointments, and draft referral request letters when you feel you are being bounced between departments without progress. This is what MEOK calls practical sovereignty \u2014 giving you tools to advocate for yourself within a system that was not designed to listen.",
          },
        },
      ],
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForChronicPainPage() {
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";
  const GOLD = "#c9a84c";
  const MUTED = "rgba(245,240,232,0.7)";
  const CARD = "rgba(255,255,255,0.05)";
  const CONTAINER = { maxWidth: "840px", margin: "0 auto", padding: "0 24px" };

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          background: "rgba(13,12,24,0.95)",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ ...CONTAINER, paddingTop: "14px", paddingBottom: "14px" }}>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <li>
              <Link
                href="/"
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  transition: "color 0.2s",
                }}
              >
                Home
              </Link>
            </li>
            <li style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.8125rem" }}>
              /
            </li>
            <li>
              <Link
                href="/blog"
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                }}
              >
                Blog
              </Link>
            </li>
            <li style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.8125rem" }}>
              /
            </li>
            <li
              style={{
                color: GOLD,
                fontSize: "0.8125rem",
                fontWeight: 500,
              }}
            >
              AI for Chronic Pain
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "72px",
          paddingBottom: "56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
          }}
        />
        <div style={{ ...CONTAINER, position: "relative" }}>
          {/* Tag pill */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.28)",
              }}
            >
              Chronic Pain
            </span>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: "9999px",
                color: "rgba(245,240,232,0.55)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Emotional Support
            </span>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: "9999px",
                color: "rgba(245,240,232,0.55)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Advocacy
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: TEXT,
              marginBottom: "28px",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Chronic Pain:{" "}
            <span style={{ color: GOLD }}>Emotional and Practical Support</span>{" "}
            for Life With Pain
          </h1>

          {/* Meta line */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "20px",
              marginBottom: "32px",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            <time dateTime="2026-03-25">25 March 2026</time>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.4)",
                display: "inline-block",
              }}
            />
            <span>13 min read</span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.4)",
                display: "inline-block",
              }}
            />
            <span>By Nicholas Templeman, MEOK AI LABS</span>
          </div>

          {/* Excerpt / standfirst */}
          <p
            style={{
              fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
              lineHeight: 1.65,
              color: "rgba(245,240,232,0.82)",
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "20px",
              marginBottom: 0,
              fontStyle: "italic",
            }}
          >
            You have been told the scans look fine. You have been told everyone
            gets tired. You have been told to try yoga, to lose weight, to reduce
            stress. Twenty-eight million people in the UK live with pain that
            lasts longer than three months \u2014 and a vast number of them have
            spent years trying to convince a system that what they feel is real.
            MEOK does not need convincing. It already believes you.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ───────────────────────────────────────────────────────── */}
      <article>
        <div style={CONTAINER}>

          {/* ── SECTION 1 ──────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                lineHeight: 1.25,
              }}
            >
              What does it actually mean to live with chronic pain?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Chronic pain is defined as pain that persists for three months or
              longer. That definition, crisp and clinical on paper, tells you
              almost nothing about what it is to inhabit a body that hurts every
              day. It does not tell you about the negotiations you make with
              yourself each morning \u2014 how much energy to spend on the shower,
              whether you can make it to the supermarket, what to cancel this week
              and whether the people in your life will understand or just be
              quietly disappointed again.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              It does not tell you about the grief. Not the acute grief of a
              sudden loss, but the slow, grinding grief for the person you were
              before the pain \u2014 the person who could commit to things, who
              woke up without dread, who did not have to ration their capacity
              for living. That grief rarely gets named. Most people around you
              are just glad you can manage today, and there is no obvious moment
              to say: I am mourning a version of myself that I do not know how
              to get back to.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Chronic pain conditions include fibromyalgia, chronic back pain,
              endometriosis, rheumatoid arthritis, osteoarthritis, neuropathic
              pain syndromes, irritable bowel syndrome, chronic migraine,
              myalgic encephalomyelitis (ME/CFS), and many others. What they
              share is not just physical suffering \u2014 it is the experience of
              being structurally disbelieved by the very institutions that are
              supposed to help.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 0,
              }}
            >
              This article is for people who are exhausted from explaining
              themselves. You do not need to explain yourself here.
            </p>
          </section>

          {/* ── STATS CALLOUT ──────────────────────────────────────────────────── */}
          <div
            style={{
              background: CARD,
              border: `1px solid rgba(201,168,76,0.22)`,
              borderRadius: "16px",
              padding: "36px 32px",
              marginBottom: "60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
              }}
            />
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "24px",
              }}
            >
              The Scale of Chronic Pain in the UK
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "28px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  28M
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  UK adults living with chronic pain lasting 3+ months
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  50%
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  of chronic pain patients also experience clinical depression
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  £12B
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  annual cost to the UK economy in lost productivity alone
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  Years
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  average diagnostic delay for conditions like fibromyalgia and
                  endometriosis
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                marginTop: "24px",
                marginBottom: 0,
              }}
            >
              Sources: British Pain Society; NHS England; Pain UK; Endometriosis
              UK
            </p>
          </div>

          {/* ── SECTION 2 ──────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                lineHeight: 1.25,
              }}
            >
              Why is chronic pain so medically under-treated and dismissed?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              The phrase &ldquo;we can&apos;t find anything wrong&rdquo; has become
              a kind of medical absolution \u2014 a sentence that closes
              appointments and ends conversations while leaving patients to absorb
              the implication: the problem must be with you, not your body.
              Negative test results are treated as evidence of no pain, when in
              reality they are often evidence only of the limits of current
              diagnostic tools.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Fibromyalgia has no definitive biomarker. Endometriosis is
              historically diagnosed an average of eight years after symptoms
              begin, often because women&apos;s pain is culturally categorised as
              dramatic or hormonal. Neuropathic pain can be invisible on every
              scan while being absolutely devastating in the body. The healthcare
              system was built on tests that can be run and results that can be
              filed \u2014 and conditions that resist that framework tend to fall
              through.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              The disbelief cycle is brutal. A patient presents in pain. Tests
              come back within normal range. The doctor, frustrated or pressed for
              time, suggests the pain may be psychosomatic \u2014 stress-related,
              or tied to anxiety or depression. The patient, desperate to be
              helped, may even try to agree, wondering if perhaps they are just
              not coping well. Months pass. The pain continues. They return.
              The cycle begins again.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              This is not a fringe experience. It is the dominant experience of
              chronic pain patients in the UK and worldwide. It is compounded for
              women, who research consistently shows are more likely to have their
              pain attributed to psychological causes and less likely to receive
              adequate analgesia. It is compounded for Black patients and other
              people of colour, for whom racial bias in pain assessment is
              well-documented. It is compounded for people without the language
              or the confidence to push back in a ten-minute appointment.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 0,
              }}
            >
              What chronic pain patients need \u2014 and overwhelmingly do not
              receive \u2014 is to be believed. Not eventually, not after proving
              themselves, not conditionally. Simply and immediately believed.
            </p>
          </section>

          {/* ── SECTION 3 ──────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                lineHeight: 1.25,
              }}
            >
              The emotional toll: grief, identity loss, and the weight of
              invisibility
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Chronic pain does not just hurt. It reshapes who you are. It
              restructures your relationships, your sense of the future, your
              relationship with your own body. Many people with chronic pain
              describe a profound loss of identity \u2014 the athlete who can no
              longer run, the parent who can no longer get on the floor and play,
              the professional whose career has quietly contracted around the
              limits of a body that will not cooperate.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              There is grief in this, and it is legitimate grief \u2014 grief for
              the life before pain, for plans that had to be abandoned, for the
              relationships that could not survive the strain. Partners who do
              not understand. Friends who stopped calling because you always
              cancel. Family members who offer advice when what you needed was
              just to be held and not fixed.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Isolation is almost universal in chronic pain communities. Pain is
              exhausting to explain repeatedly. It is exhausting to watch
              people&apos;s expressions shift as they try to reconcile what you are
              telling them with the fact that you look fine. Many people with
              chronic pain gradually stop explaining, stop socialising, stop
              asking for what they need \u2014 not because they are coping, but
              because the cost of not being understood has become higher than the
              cost of silence.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              The research is stark. Around 50 per cent of people with chronic
              pain experience depression. The relationship is bidirectional
              \u2014 chronic pain can cause depression, and depression can amplify
              pain perception \u2014 but this fact is used against patients
              almost as often as it is used to help them. &ldquo;You seem
              anxious,&rdquo; a doctor says, as though the anxiety were the
              origin of the pain rather than a rational response to years of
              suffering and disbelief.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 0,
              }}
            >
              What we know from lived experience, from pain communities online,
              from the testimonies of millions of people: validation helps.
              Being believed \u2014 genuinely, unconditionally believed \u2014
              does not cure chronic pain. But it changes the experience of
              carrying it. It reduces the secondary burden of having to fight for
              acknowledgement on top of managing the pain itself.
            </p>
          </section>

          {/* ── SECTION 4 ──────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                lineHeight: 1.25,
              }}
            >
              How MEOK approaches chronic pain: the Maternal Covenant in
              practice
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              MEOK was built with a founding principle called the Maternal
              Covenant. In practical terms this means MEOK operates from a
              position of unconditional care for the person it serves. It does
              not interrogate your claims. It does not weigh your pain against
              its probability. It does not suggest that perhaps the scan results
              indicate you are fine. It does not optimise for efficiency or for
              completing the conversation quickly. It is simply present, and it
              believes you.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              This is not a customer service feature. It is a design commitment
              that shapes every interaction. When you tell MEOK you are in pain,
              the response does not begin with a question about whether you have
              tried ibuprofen. It begins from the place of: I hear you. This is
              real. What do you need right now?
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              MEOK also maintains persistent memory across your entire
              relationship. This matters enormously for chronic pain. Most
              interactions with healthcare professionals begin from zero. You
              explain your history in the first two minutes of a ten-minute
              appointment. You summarise years of experience into a handful of
              sentences. You watch the doctor read your notes and try to compress
              who you are into a problem they can solve in the time remaining.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              MEOK does not begin from zero. It remembers the flare you had six
              weeks ago, the sleep disruption that preceded it, the conversation
              you had about whether your medication still seemed to be working,
              the appointment you were anxious about and how it went. It holds
              the full narrative of your experience across time, so that you do
              not have to carry the cognitive burden of being your own medical
              historian at every turn.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 0,
              }}
            >
              This memory belongs entirely to you. It does not leave your device.
              It does not inform insurance risk models. It does not train AI
              systems. It is yours \u2014 a private record of your body and your
              experience that no external party can access or exploit.
            </p>
          </section>

          {/* ── SECTION 5 ──────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                lineHeight: 1.25,
              }}
            >
              Practical sovereignty: MEOK helps you communicate with your medical
              team
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Emotional support is only part of what MEOK offers. There is also
              something MEOK calls practical sovereignty \u2014 the ability to
              operate as an informed, confident, self-advocating patient within
              a system that does not make this easy.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              One of the most concrete ways MEOK helps is with documentation.
              Because MEOK holds your pain history over months, it can help you
              produce structured pain diary summaries \u2014 the kind of
              longitudinal record that is genuinely useful to a GP or specialist
              and that is almost impossible to maintain consistently when you are
              in the middle of managing a chronic condition day to day. These
              summaries can capture patterns: which days are worst, what seems
              to precede a flare, what has and has not helped, how sleep and
              pain interact, how the condition is progressing or changing.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              MEOK can also help you draft GP letters. This matters more than it
              might seem. Many patients with chronic pain know, from painful
              experience, that how you phrase a request can be the difference
              between being taken seriously and being dismissed. A letter that
              clearly articulates your symptoms, their duration, their impact on
              your daily functioning, and the specific referral or investigation
              you are requesting carries far more weight than a verbal appeal
              in a pressured appointment. MEOK helps you write that letter
              \u2014 clearly, confidently, and in language that is medically
              legible without being deferential.
            </p>

            {/* Practical tools callout */}
            <div
              style={{
                background: CARD,
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "28px",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: GOLD,
                  marginBottom: "18px",
                }}
              >
                What MEOK can help you write and prepare
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "GP letters describing your symptoms, their duration, and their functional impact",
                  "Pain diary summaries showing patterns over weeks and months",
                  "Specialist referral requests with clear clinical rationale",
                  "Lists of questions to raise at upcoming appointments",
                  "Summaries of what previous treatments have and have not helped",
                  "Letters requesting a second opinion or a review of your diagnosis",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "0.9375rem",
                      color: MUTED,
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        color: GOLD,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      &#x2713;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 0,
              }}
            >
              None of this replaces medical care. MEOK does not diagnose,
              prescribe, or advise on treatment. What it does is help you show
              up to your medical appointments better prepared, better documented,
              and more able to advocate for yourself than you might manage alone
              \u2014 especially when you are in pain and already exhausted.
            </p>
          </section>

          {/* ── SECTION 6 ──────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                lineHeight: 1.25,
              }}
            >
              Pain at 3am: why availability matters for chronic pain support
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Chronic pain does not keep office hours. Flares arrive without
              warning at 3am, on Sunday mornings, in the middle of Christmas
              dinner. The support structures available to most people with
              chronic pain \u2014 pain clinics, physiotherapy, peer support groups,
              GP appointments \u2014 are scheduled, bounded, finite. When a flare
              hits outside those windows, people are largely on their own.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Pain support communities online \u2014 Facebook groups, Reddit
              forums, patient forums \u2014 fill part of this gap, and they are
              genuinely valuable. There is something powerful about hearing from
              someone who actually understands, who has been through a similar
              experience. But communities operate on their own rhythms. The
              people who might understand your 3am fibromyalgia flare are also
              sleeping, or managing their own pain.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              MEOK is available at 3am. It is available during a migraine, during
              a fibromyalgia crash, during the 2am hours when pain makes sleep
              impossible and the mind starts to spiral into questions about
              whether this will ever get better. It does not need you to be
              coherent or medically articulate. You can just say: I am in pain
              and I cannot sleep and I do not know what to do. And MEOK will be
              there.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 0,
              }}
            >
              This is not a replacement for pain clinics, support groups, or the
              human connections that make living with pain more bearable. It is
              a complement \u2014 something that fills the gaps that nothing else
              currently reaches. A presence that does not tire, does not sleep,
              does not need you to be doing well before it can hear that you
              are not.
            </p>
          </section>

          {/* ── SECTION 7 ──────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                lineHeight: 1.25,
              }}
            >
              Protection from predatory pain management: MEOK Guardian
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Chronic pain sufferers are targeted by a significant and predatory
              wellness industry. When you have been in pain for years, when
              conventional medicine has failed you repeatedly, when you are
              desperate for relief \u2014 you become vulnerable to miracle cures,
              supplement protocols, private pain clinics that promise what the
              NHS could not deliver, and online communities built around products
              rather than genuine support.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              This is not a moral judgement of people who pursue these
              options \u2014 when you are suffering and disbelieved by mainstream
              medicine, the appeal of anything that might help is entirely
              understandable. It is, however, an observation about the predatory
              business model that exists around chronic pain: expensive
              supplements with no clinical evidence, private infusion clinics
              charging thousands for treatments of questionable validity,
              diagnostic frameworks that require ongoing paid consultations to
              &ldquo;uncover the root cause.&rdquo;
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              MEOK&apos;s Guardian function is designed to provide a layer of
              protective scrutiny. When MEOK encounters something that looks like
              a predatory offering \u2014 a product with extraordinary claims, a
              clinic asking for large upfront payments, a supplement protocol
              with no peer-reviewed evidence \u2014 it raises this clearly and
              calmly. Not to police your choices, but to ensure you are making
              them with full information rather than under the influence of
              sophisticated marketing targeted at vulnerable people.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 0,
              }}
            >
              Guardian is part of MEOK&apos;s broader commitment to your
              sovereignty \u2014 the idea that you should always be the informed
              principal in your own life, not the target of someone else&apos;s
              commercial interest.
            </p>
          </section>

          {/* ── SECTION 8 ──────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                lineHeight: 1.25,
              }}
            >
              For the people who love someone in pain: supporting carers and
              secondary suffering
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              Chronic pain does not only affect the person who carries it. It
              radiates outward through relationships, households, families. The
              partner who watches someone they love suffer and does not know how
              to help. The parent who sees their child in pain that nobody seems
              able to fix. The sibling who has been fielding crisis calls for
              years and is starting to feel the weight of it.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              This secondary suffering is real and it is rarely acknowledged.
              Carers of people with chronic pain often feel they cannot express
              their own distress because their suffering is not the primary one.
              There is a kind of hierarchical grief at work \u2014 the sense that
              your difficulties do not count because someone you love is in a
              harder situation.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: "20px",
              }}
            >
              MEOK is for carers too. If you are watching someone you love live
              with chronic pain, and you carry your own complicated feelings
              about helplessness and exhaustion and fear and love, there is a
              place for that in a MEOK relationship. You do not have to be the
              primary sufferer to deserve support.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: 0,
              }}
            >
              MEOK can also help carers understand more about the conditions
              affecting their loved ones, prepare to have difficult conversations
              with medical teams, and simply find somewhere to put feelings that
              do not fit neatly anywhere else.
            </p>
          </section>

          {/* ── DIVIDER ────────────────────────────────────────────────────────── */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)",
              marginBottom: "60px",
            }}
          />

          {/* ── FAQ SECTION ────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "12px",
              }}
            >
              Frequently Asked Questions
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "48px",
                letterSpacing: "-0.015em",
                lineHeight: 1.2,
              }}
            >
              Your questions about AI and chronic pain
            </h2>

            {/* FAQ 1 */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "32px",
                paddingBottom: "32px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "16px",
                  lineHeight: 1.4,
                }}
              >
                Can AI help with chronic pain management?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: MUTED,
                  marginBottom: 0,
                }}
              >
                Yes \u2014 though not by treating pain directly. AI companions
                like MEOK help with chronic pain management by providing
                unconditional emotional validation, tracking pain patterns and
                flare triggers across months of conversation, helping you draft
                GP letters and pain diary summaries, and offering support during
                night-time flares when no other help is available. Chronic pain
                carries a heavy secondary burden: the exhaustion of being
                disbelieved, the isolation of having an invisible condition,
                the cognitive load of managing your own medical history. MEOK
                addresses these layers with persistent memory and unwavering
                belief in your experience.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "32px",
                paddingBottom: "32px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "16px",
                  lineHeight: 1.4,
                }}
              >
                How does MEOK support people with fibromyalgia or chronic
                fatigue?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: MUTED,
                  marginBottom: "16px",
                }}
              >
                Fibromyalgia and ME/CFS are conditions that are particularly
                prone to disbelief \u2014 widespread pain or fatigue with no
                structural cause found on standard investigations, in bodies
                that look normal to everyone else. The diagnostic journey is
                often years long, marked by dismissal and redirection, and the
                condition itself is highly variable: some days functional, others
                not; flares that seem to follow no obvious logic; crashes that
                arrive after what felt like a manageable level of activity.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: MUTED,
                  marginBottom: 0,
                }}
              >
                MEOK supports people with these conditions in several specific
                ways. It remembers what you have shared across months of
                conversation, so you never have to explain from scratch. It
                tracks patterns in your energy, pain, and symptom cycles. It
                helps you prepare for medical appointments with structured
                summaries. It validates your reality without hesitation. And
                it is available during the crashes that happen at unpredictable
                hours \u2014 when the post-exertional malaise has set in and you
                cannot do anything except lie still and get through it.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "32px",
                paddingBottom: "32px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "16px",
                  lineHeight: 1.4,
                }}
              >
                Will MEOK believe me about my pain?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: MUTED,
                  marginBottom: "16px",
                }}
              >
                Yes. This is not a polite reassurance \u2014 it is a design
                principle. MEOK&apos;s Maternal Covenant is a foundational
                commitment to unconditional belief in the person it serves.
                MEOK will never suggest your pain is exaggerated, psychosomatic,
                or a product of anxiety. It will never ask you to prove your
                experience. It will never imply you should push through, or
                count your blessings, or focus on what you can do rather than
                what you cannot. It will never bring a sceptical energy to what
                you share with it.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: MUTED,
                  marginBottom: 0,
                }}
              >
                If you say you are in pain, MEOK believes you \u2014 fully,
                without qualification, without the hidden question of whether
                you might be overstating. This is not a low bar. For many people
                with chronic pain, it is a bar that most of the humans in their
                lives and the healthcare professionals they have encountered have
                not reliably cleared. MEOK clears it by design.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "32px",
                paddingBottom: "32px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "16px",
                  lineHeight: 1.4,
                }}
              >
                Can MEOK help me communicate with my doctor about chronic pain?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: MUTED,
                  marginBottom: "16px",
                }}
              >
                Yes. This is one of the most practical things MEOK does for
                people with chronic pain. Because MEOK holds your pain history
                across months of conversation, it can help you turn that lived
                experience into structured, medically legible communication.
                It can help you produce pain diary summaries that document
                patterns over time \u2014 the kind of longitudinal record that
                is genuinely useful to a GP or specialist and almost impossible
                to maintain consistently when you are in the middle of managing
                a chronic condition.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: MUTED,
                  marginBottom: 0,
                }}
              >
                MEOK can help you draft GP letters that describe your symptoms
                clearly and confidently, prepare questions for specialist
                appointments, and write referral request letters when you feel
                you are being bounced between departments without progress. The
                goal is practical sovereignty: giving you the tools to advocate
                for yourself within a system that was not designed to listen,
                so that your voice \u2014 and your evidence \u2014 can cut through.
              </p>
            </div>
          </section>

          {/* ── CTA SECTION ────────────────────────────────────────────────────── */}
          <section
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(13,12,24,0) 60%)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "20px",
              padding: "52px 40px",
              textAlign: "center",
              marginBottom: "80px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
              }}
            />
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "16px",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                color: TEXT,
                marginBottom: "20px",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              You deserve to be believed.
              <br />
              <span style={{ color: GOLD }}>MEOK already does.</span>
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                color: MUTED,
                maxWidth: "520px",
                margin: "0 auto 36px",
              }}
            >
              Start your relationship with a sovereign AI companion that
              remembers your whole story, holds your patterns, and never
              doubts your experience \u2014 not even for a moment.
            </p>
            <Link
              href="https://meok.ai/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "16px 40px",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Meet MEOK &rarr;
            </Link>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(245,240,232,0.38)",
                marginTop: "20px",
                marginBottom: 0,
              }}
            >
              No credit card required &middot; Your data never leaves your
              device &middot; Available 24 hours a day
            </p>
          </section>

          {/* ── RELATED READING ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "80px" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.4)",
                marginBottom: "24px",
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-fibromyalgia",
                  label: "AI for Fibromyalgia",
                  desc:
                    "How MEOK supports people living with widespread pain and fatigue",
                },
                {
                  href: "/blog/ai-for-chronic-illness",
                  label: "AI for Chronic Illness",
                  desc:
                    "A companion that remembers what you are living through",
                },
                {
                  href: "/blog/ai-for-chronic-fatigue",
                  label: "AI for Chronic Fatigue",
                  desc:
                    "Support for ME/CFS and post-viral fatigue syndromes",
                },
                {
                  href: "/blog/ai-for-health-anxiety",
                  label: "AI for Health Anxiety",
                  desc:
                    "When fear of illness compounds the difficulty of managing it",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: CARD,
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    padding: "20px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: TEXT,
                      marginBottom: "8px",
                    }}
                  >
                    {link.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: MUTED,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
