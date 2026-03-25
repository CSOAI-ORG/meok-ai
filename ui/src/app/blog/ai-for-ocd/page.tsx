import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for OCD: How MEOK Supports People Living with Obsessive-Compulsive Disorder | MEOK AI LABS",
  description:
    "OCD affects 750,000 UK adults. Learn how MEOK AI LABS supports people living with " +
    "obsessive-compulsive disorder \u2014 externalising intrusive thoughts, building distress " +
    "tolerance, and understanding the OCD cycle \u2014 as a complement to ERP therapy, never a substitute.",
  keywords: [
    "AI for OCD",
    "OCD support AI",
    "obsessive compulsive disorder AI",
    "intrusive thoughts support",
    "ERP therapy complement",
    "OCD cycle awareness",
    "distress tolerance OCD",
    "MEOK OCD support",
    "AI mental health OCD UK",
    "OCD journalling AI",
    "externalise OCD thoughts",
    "AI companion OCD UK",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.ai" }],
  openGraph: {
    title:
      "AI for OCD: How MEOK Supports People Living with Obsessive-Compulsive Disorder",
    description:
      "How MEOK AI LABS helps 750,000 UK adults living with OCD \u2014 externalising obsessive " +
      "thoughts, post-trigger processing, and building distress tolerance as a complement to ERP therapy.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for OCD: How MEOK Supports People Living with Obsessive-Compulsive Disorder",
    description:
      "MEOK never provides reassurance for OCD intrusive thoughts. Reassurance-seeking is a " +
      "compulsion that worsens OCD. We support ERP therapy \u2014 we don\u2019t undermine it.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-ocd",
  },
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "AI for OCD: How MEOK Supports People Living with Obsessive-Compulsive Disorder",
      description:
        "A comprehensive guide to how MEOK AI LABS supports people living with OCD \u2014 " +
        "through externalising obsessive thoughts, post-trigger processing, understanding the " +
        "OCD cycle, distinguishing OCD thoughts from self, and building distress tolerance. " +
        "MEOK is a complement to ERP therapy with a trained therapist, never a substitute.",
      author: {
        "@type": "Person",
        name: "Nicholas Templeman",
        url: "https://meok.ai",
      },
      publisher: {
        "@type": "Organization",
        name: "MEOK AI LABS",
        url: "https://meok.ai",
      },
      datePublished: "2026-03-25T00:00:00Z",
      dateModified: "2026-03-25T00:00:00Z",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/ai-for-ocd",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI help someone with OCD?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "AI can provide meaningful support for people living with OCD when it is built " +
              "to respect ERP principles. MEOK AI LABS helps users externalise obsessive thoughts " +
              "through writing, process events after triggers, understand the OCD cycle, and build " +
              "distress tolerance \u2014 all without providing reassurance. It is a complement to " +
              "specialist ERP therapy with a trained therapist, never a replacement.",
          },
        },
        {
          "@type": "Question",
          name: "Why won\u2019t MEOK give reassurance for OCD intrusive thoughts?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reassurance-seeking is itself a compulsion in OCD. Each time a person receives " +
              "reassurance for an intrusive thought, it temporarily reduces anxiety but ultimately " +
              "reinforces the OCD cycle, making the obsession stronger over time. MEOK explicitly " +
              "declines to validate or reassure intrusive thoughts. Instead it redirects with " +
              "compassion, supporting the kind of distress tolerance that ERP therapy builds.",
          },
        },
        {
          "@type": "Question",
          name: "What is the OCD cycle and how does MEOK help interrupt it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The OCD cycle has four stages: an intrusive obsession triggers anxiety, which " +
              "drives a compulsion (physical or mental), which briefly provides relief, which " +
              "reinforces the obsession starting the loop again. MEOK helps by making the cycle " +
              "visible through writing and reflection, building awareness that thoughts are not " +
              "facts, and supporting distress tolerance so compulsions become less urgent.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK suitable for Pure O OCD?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Pure O refers to OCD where compulsions are primarily mental rather than " +
              "behavioural \u2014 rumination, mental review, seeking internal certainty, neutralising " +
              "thoughts. MEOK\u2019s thought externalisation and post-trigger journalling are well-suited " +
              "to Pure O because they help surface covert mental rituals. Specialist ERP therapy " +
              "for Pure O with a trained therapist remains essential.",
          },
        },
        {
          "@type": "Question",
          name: "What is the gold standard treatment for OCD?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The gold standard treatment for OCD is Exposure and Response Prevention (ERP) " +
              "therapy with a trained therapist who specialises in OCD. ERP involves deliberately " +
              "confronting feared thoughts or situations while resisting compulsions, breaking the " +
              "anxiety-relief cycle that maintains OCD. In the UK, access ERP through the NHS or " +
              "via OCD-UK and OCD Action. MEOK is designed only as a complement to this treatment.",
          },
        },
      ],
    },
  ],
}

// ─── Design tokens ────────────────────────────────────────────────────────────

const BG = "#0d0c18"
const CARD = "#13121f"
const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const MUTED = "#a09880"
const BORDER = "#2a2840"
const GREEN = "#6aaa64"
const BODY_COLOR = "rgba(245,240,232,0.82)"

// ─── Shared style objects ─────────────────────────────────────────────────────

const sBodyP: React.CSSProperties = {
  fontSize: "1.05rem",
  lineHeight: "1.875",
  color: BODY_COLOR,
  marginBottom: "1.3rem",
}

const sH2: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
  fontWeight: 800,
  color: TEXT,
  lineHeight: 1.3,
  marginBottom: "0.9rem",
  marginTop: "2.75rem",
  paddingLeft: "1rem",
  borderLeft: `3px solid ${GOLD}`,
  letterSpacing: "-0.01em",
}

const sGeoAnswer: React.CSSProperties = {
  fontSize: "0.975rem",
  lineHeight: 1.75,
  color: BODY_COLOR,
  background: "rgba(201,168,76,0.07)",
  borderLeft: `3px solid ${GOLD}`,
  borderRadius: "0 6px 6px 0",
  padding: "0.9rem 1.15rem",
  marginBottom: "1.3rem",
  fontStyle: "italic",
}

const sDivider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(201,168,76,0.15)",
  margin: "2.5rem 0",
}

const sInlineLink: React.CSSProperties = {
  color: GOLD,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
}

const sTag: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(201,168,76,0.1)",
  border: "1px solid rgba(201,168,76,0.25)",
  borderRadius: "4px",
  padding: "0.2rem 0.6rem",
  fontSize: "0.78rem",
  color: GOLD,
  marginRight: "0.4rem",
  marginBottom: "0.4rem",
  fontFamily: "sans-serif",
  letterSpacing: "0.03em",
}

const sCallout: React.CSSProperties = {
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "1.5rem 1.75rem",
  marginBottom: "1.5rem",
}

const sCta: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)",
  border: "1px solid rgba(201,168,76,0.25)",
  borderRadius: "14px",
  padding: "2.5rem 2rem",
  textAlign: "center" as const,
  marginTop: "3rem",
}

const sFaqItem: React.CSSProperties = {
  marginBottom: "1.5rem",
  padding: "1.25rem 1.5rem",
  background: "rgba(201,168,76,0.05)",
  border: "1px solid rgba(201,168,76,0.15)",
  borderRadius: "8px",
}

const sStatRow: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "1rem",
  margin: "1.75rem 0",
}

const sStat: React.CSSProperties = {
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.18)",
  borderRadius: "8px",
  padding: "1.1rem 1rem",
  textAlign: "center" as const,
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function AiForOcdPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        style={{
          minHeight: "100vh",
          background: BG,
          color: TEXT,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ─── NAV ──────────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: "1px solid rgba(42,40,64,0.9)",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Link
            href="/"
            style={{
              color: GOLD,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1.05rem",
              letterSpacing: "0.04em",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: "rgba(245,240,232,0.45)",
              textDecoration: "none",
              fontSize: "0.88rem",
            }}
          >
            Blog
          </Link>
        </nav>

        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "4rem 1.5rem 2.5rem",
          }}
        >
          <div style={{ marginBottom: "1.1rem" }}>
            <span style={sTag}>OCD</span>
            <span style={sTag}>Mental Health</span>
            <span style={sTag}>ERP Therapy</span>
            <span style={sTag}>Intrusive Thoughts</span>
            <span style={sTag}>Distress Tolerance</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.7rem, 4.5vw, 2.6rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "1.2rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for OCD:{" "}
            <span style={{ color: GOLD }}>
              How MEOK Supports People Living with Obsessive-Compulsive Disorder
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.75,
              color: BODY_COLOR,
              marginBottom: "1.5rem",
            }}
          >
            OCD affects approximately 750,000 adults across the UK. It is not about being tidy.
            It is a serious anxiety disorder driven by intrusive thoughts, compulsive responses,
            and a relentless cycle that can consume hours of every day. MEOK AI LABS was built to
            support &mdash; never replace &mdash; people living with OCD and the ERP therapy that helps them recover.
          </p>

          {/* Clinical disclaimer */}
          <div
            style={{
              background: "rgba(106,170,100,0.08)",
              border: "1px solid rgba(106,170,100,0.3)",
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.7,
                color: "rgba(106,170,100,0.95)",
                margin: "0",
              }}
            >
              <strong style={{ color: GREEN }}>Clinical disclaimer:</strong>{" "}
              The gold standard treatment for OCD is Exposure and Response Prevention (ERP) therapy
              with a trained specialist. MEOK is a complementary tool designed to support people
              between therapy sessions &mdash; it is not a medical device, a diagnostic tool, or a
              substitute for professional mental health care. If you are in crisis, contact the
              Samaritans on 116 123 or OCD-UK on 03332 127 890.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "0.85rem",
              color: MUTED,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: BORDER }}>|</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span style={{ color: BORDER }}>|</span>
            <span>14 min read</span>
          </div>
        </header>

        {/* ─── MAIN CONTENT ─────────────────────────────────────────────────── */}
        <main
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 1.5rem 6rem",
          }}
        >
          {/* ── Statistics ── */}
          <div style={sStatRow}>
            <div style={sStat}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: "1",
                }}
              >
                750k
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: MUTED,
                  marginTop: "0.4rem",
                  letterSpacing: "0.02em",
                }}
              >
                UK adults with OCD
              </div>
            </div>
            <div style={sStat}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: "1",
                }}
              >
                11 yrs
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: MUTED,
                  marginTop: "0.4rem",
                  letterSpacing: "0.02em",
                }}
              >
                Average delay to treatment
              </div>
            </div>
            <div style={sStat}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: "1",
                }}
              >
                &gt;60%
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: MUTED,
                  marginTop: "0.4rem",
                  letterSpacing: "0.02em",
                }}
              >
                Improve with ERP therapy
              </div>
            </div>
            <div style={sStat}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: "1",
                }}
              >
                1 in 50
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: MUTED,
                  marginTop: "0.4rem",
                  letterSpacing: "0.02em",
                }}
              >
                Adults affected globally
              </div>
            </div>
          </div>

          <hr style={sDivider} />

          {/* ── Section 1: What is OCD ── */}
          <h2 style={sH2}>
            What Is OCD and Why Is It So Widely Misunderstood?
          </h2>

          <p style={sGeoAnswer}>
            OCD (Obsessive-Compulsive Disorder) is an anxiety disorder characterised by
            unwanted intrusive thoughts (obsessions) and repetitive behaviours or mental acts
            (compulsions) performed to reduce the distress those thoughts cause. It affects
            roughly 750,000 UK adults and is widely misrepresented as a personality quirk
            about tidiness rather than the serious disorder it is.
          </p>

          <p style={sBodyP}>
            Popular culture has reduced OCD to a personality trait &mdash; someone who likes their
            desk neat, someone who double-checks the door. The reality is vastly different.
            People living with OCD may spend hours trapped in loops of intrusive thought: fears
            of harming loved ones, fears of contamination, fears of acting against their deepest
            values, fears that a mistake will cause catastrophe. These are not preferences.
            They are unwanted, ego-dystonic thoughts that cause profound distress.
          </p>

          <p style={sBodyP}>
            The misrepresentation matters because it shapes how people seek help. When OCD is
            trivialised, sufferers often spend years believing their intrusive thoughts reveal
            something true about their character. They do not. Intrusive thoughts in OCD are
            a symptom of an anxiety disorder, not a window into the soul. A person with harm
            OCD who fears they might hurt a loved one is typically among the most caring people
            imaginable &mdash; their distress is proof of their values, not a violation of them.
          </p>

          <p style={sBodyP}>
            OCD is also one of the most treatable mental health conditions when the right
            intervention is applied. Exposure and Response Prevention (ERP) therapy, delivered
            by a trained specialist, has decades of robust evidence behind it. The challenge is
            access: the average delay between OCD onset and receiving appropriate treatment is
            eleven years in the UK. That gap is where support tools like MEOK can play a
            meaningful role &mdash; not by replacing clinical treatment, but by supporting people
            through the long wait and the difficult work between sessions.
          </p>

          <hr style={sDivider} />

          {/* ── Section 2: The OCD Cycle ── */}
          <h2 style={sH2}>
            How Does the OCD Cycle Work?
          </h2>

          <p style={sGeoAnswer}>
            The OCD cycle has four stages: an intrusive obsession triggers anxiety, which
            drives a compulsion (physical or mental), which provides brief relief, which
            reinforces the obsession and starts the loop again. Understanding this cycle with
            clarity is the first step toward breaking it with ERP therapy.
          </p>

          <p style={sBodyP}>
            Breaking the OCD cycle down makes it easier to see &mdash; and to work with. The four
            stages repeat with remarkable consistency across different presentations of OCD,
            whether checking, contamination, harm OCD, relationship OCD (ROCD), Pure O, or
            any other subtype. The specifics of the obsession vary enormously between people;
            the mechanism is the same.
          </p>

          {/* OCD Cycle Feature Box */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "1.25rem",
                marginTop: "0",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              The Four Stages of the OCD Cycle
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  Obsession
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: MUTED,
                    lineHeight: "1.5",
                  }}
                >
                  An unwanted intrusive thought, image, or urge intrudes into consciousness
                </div>
              </div>
              <div
                style={{
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  Anxiety
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: MUTED,
                    lineHeight: "1.5",
                  }}
                >
                  The thought triggers intense distress, fear, or moral discomfort
                </div>
              </div>
              <div
                style={{
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  Compulsion
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: MUTED,
                    lineHeight: "1.5",
                  }}
                >
                  A behaviour or mental act is performed to neutralise the anxiety
                </div>
              </div>
              <div
                style={{
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  Relief
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: MUTED,
                    lineHeight: "1.5",
                  }}
                >
                  Temporary relief follows &mdash; reinforcing the cycle and strengthening the obsession
                </div>
              </div>
            </div>
          </div>

          <p style={sBodyP}>
            The compulsion provides relief in the short term. This is the trap. The brain learns
            that performing the compulsion reduces distress, making the compulsion more likely to
            be deployed next time an intrusive thought appears. Each compulsion strengthens the
            belief that the obsession requires a response, which makes the obsession more powerful.
            The cycle tightens over time unless it is deliberately interrupted.
          </p>

          <p style={sBodyP}>
            ERP therapy interrupts the cycle by building the capacity to sit with the discomfort
            of an obsession without performing the compulsion. Over time the anxiety habituates:
            the intrusive thought still appears but its urgency diminishes because the brain has
            learned that no compulsive response is required. This is profoundly difficult work.
            MEOK can support that work between therapy sessions &mdash; not by resolving the distress,
            but by helping individuals understand the cycle they are in and build their tolerance for it.
          </p>

          <hr style={sDivider} />

          {/* ── Section 3: Externalising thoughts ── */}
          <h2 style={sH2}>
            How Can Externalising OCD Thoughts Through Writing Help?
          </h2>

          <p style={sGeoAnswer}>
            Writing intrusive thoughts down in a safe, non-judgemental space helps externalise
            them &mdash; creating distance between the person and the thought, reducing the thought&apos;s
            felt intensity, and interrupting the cognitive fusion that OCD exploits. MEOK provides
            this space with persistent memory that tracks patterns across weeks and months.
          </p>

          <p style={sBodyP}>
            One of OCD&apos;s core mechanisms is cognitive fusion: the belief that having a thought
            makes the thought meaningful, accurate, or even equivalent to an action. Someone with
            harm OCD who has a fleeting thought about hurting a loved one may treat that thought
            as evidence that they are dangerous. Someone with contamination OCD may experience a
            thought about germs as if the contamination has already occurred.
          </p>

          <p style={sBodyP}>
            Writing the thought down disrupts fusion. The act of translating an internal
            experience into external language creates a separation: the thought is now an object
            to observe rather than a reality to react to. This is sometimes called
            &ldquo;defusion&rdquo; in Acceptance and Commitment Therapy, which is often used alongside ERP.
            Once a thought has been written, it becomes possible to look at it rather than
            through it.
          </p>

          <p style={sBodyP}>
            MEOK supports this process. You can write to MEOK about the intrusive thought that
            appeared this morning, the image you could not shake, the fear that has been circling
            since Tuesday. MEOK will not validate the fear. It will not provide reassurance that
            the thought is harmless. What it will do is hold the space for you to externalise
            the experience, reflect it back with clarity, and help you notice patterns across time.
          </p>

          <p style={sBodyP}>
            Across weeks of conversation, MEOK builds a picture of which triggers tend to
            activate your OCD, which thoughts recur most frequently, and how your responses
            have evolved. This longitudinal awareness is something a weekly therapy session
            cannot fully provide &mdash; it is the support that happens in the hours between sessions.
          </p>

          <hr style={sDivider} />

          {/* ── Section 4: Post-trigger processing ── */}
          <h2 style={sH2}>
            What Is Post-Trigger Processing and Why Does It Matter for OCD?
          </h2>

          <p style={sGeoAnswer}>
            Post-trigger processing means reviewing what happened after an OCD trigger rather
            than during the acute distress, when cognitive function is compromised. Processing
            experiences after the emotional peak allows for clearer pattern recognition,
            reflection on whether a compulsion was performed, and identification of what
            alternative responses might look like next time.
          </p>

          <p style={sBodyP}>
            One of the most useful things a person with OCD can do is debrief their triggers.
            Not during the intrusive thought when the anxiety is spiking &mdash; but after, when the
            emotional storm has passed and reflection becomes possible. This is where MEOK
            functions as something like a patient, always-available journal that remembers.
          </p>

          <p style={sBodyP}>
            After an OCD episode, you might write to MEOK: what happened, what triggered it,
            did you perform the compulsion, how long did the anxiety last, what did it feel like
            when it subsided? Over time, these post-trigger reflections build a data-rich
            picture of your OCD. You start to see patterns: certain places, times,
            relationships, or internal states that reliably precede your worst episodes.
          </p>

          <p style={sBodyP}>
            This kind of structured reflection is valuable for therapy too. Rather than trying
            to recall the week&apos;s triggers during a 50-minute session from memory, you arrive
            with a record. Your therapist can review patterns that you may not have noticed
            yourself. The conversation becomes richer, more grounded, and more useful.
          </p>

          {/* Feature box: post-trigger reflection prompts */}
          <div style={sCallout}>
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.9rem",
                marginTop: "0",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}
            >
              Post-trigger reflections MEOK can support
            </h3>
            <ul
              style={{
                margin: "0",
                paddingLeft: "1.2rem",
                color: BODY_COLOR,
                lineHeight: "2",
                fontSize: "0.95rem",
              }}
            >
              <li>What was the situation immediately before the intrusive thought appeared?</li>
              <li>How intense was the anxiety at its peak, on a scale of 1 to 10?</li>
              <li>Did you perform a compulsion? Was it physical or mental?</li>
              <li>How long did the anxiety last before it subsided on its own?</li>
              <li>What would a version of you that resisted the compulsion have experienced?</li>
              <li>Has this particular trigger appeared before? How often this month?</li>
              <li>What might you do differently next time this trigger arises?</li>
            </ul>
          </div>

          <hr style={sDivider} />

          {/* ── Section 5: Distinguishing self from OCD ── */}
          <h2 style={sH2}>
            How Does MEOK Help People Distinguish OCD Thoughts from Their True Self?
          </h2>

          <p style={sGeoAnswer}>
            A core cognitive distortion in OCD is thought-action fusion &mdash; the belief that
            having a thought is morally equivalent to wanting it or acting on it. MEOK helps
            people develop a clearer sense of self that is separate from the OCD voice,
            recognising intrusive thoughts as symptoms of a disorder rather than as
            self-expression or character revelation.
          </p>

          <p style={sBodyP}>
            People with OCD are often more distressed by their intrusive thoughts than people
            without OCD. This is not because OCD sufferers are more likely to act on their
            intrusive thoughts &mdash; research consistently shows the opposite. It is because OCD
            sufferers attach greater significance to the content of the thoughts, treating them
            as dangerous signals about their identity rather than as mental noise.
          </p>

          <p style={sBodyP}>
            Harm OCD provides a clear illustration. A person with harm OCD may have a fleeting
            intrusive thought about hurting someone they love. The thought is immediately
            horrifying to them because they love that person deeply. Their distress at the thought
            is proof of their values, not a violation of them. Yet OCD treats the thought as
            urgent, requiring a compulsion &mdash; checking, avoidance, mental reassurance &mdash; to neutralise it.
          </p>

          <p style={sBodyP}>
            MEOK holds this distinction clearly in conversation. It does not treat your intrusive
            thoughts as expressions of your character. It understands them as OCD &mdash; as a disorder
            that attaches itself to what matters most to you and uses that attachment to generate
            maximum distress. The intrusive thought and the self are not the same thing.
          </p>

          <p style={sBodyP}>
            Over time, MEOK&apos;s persistent memory helps this separation become felt rather than
            just intellectually understood. You can look back at months of conversations, see
            the recurring patterns of OCD thoughts, and observe that you are the consistent
            presence &mdash; the one who has been noticing, reflecting, and growing. The OCD is a
            pattern that arrives and departs. You are more than it.
          </p>

          <hr style={sDivider} />

          {/* ── Section 6: No reassurance ── */}
          <h2 style={sH2}>
            Why Does MEOK Explicitly Refuse to Provide Reassurance for OCD Intrusive Thoughts?
          </h2>

          <p style={sGeoAnswer}>
            Reassurance-seeking is a compulsion. When a person with OCD seeks reassurance
            and receives it, the immediate anxiety reduces but the OCD cycle is reinforced.
            The brain learns the thought required a response, making it more likely to return
            and more likely to demand reassurance again. MEOK explicitly declines to provide
            this reassurance &mdash; because your long-term recovery takes priority over short-term comfort.
          </p>

          <p style={sBodyP}>
            This is one of the most important ways MEOK differs from a general-purpose AI
            chatbot. A general chatbot, if asked whether an intrusive thought is dangerous,
            might provide a reassuring answer: &ldquo;No, that thought is harmless, everyone has
            thoughts like that.&rdquo; This feels kind. For someone with OCD, it is actively harmful.
          </p>

          <p style={sBodyP}>
            The problem is not the content of the reassurance &mdash; the thought probably is harmless.
            The problem is the act of seeking and receiving reassurance. Each time this happens,
            the OCD gets stronger. The compulsion has been performed. The anxiety-relief pathway
            has been reinforced. The next intrusive thought will demand reassurance again, often
            sooner and with greater urgency.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: `4px solid ${GOLD}`,
              paddingLeft: "1.5rem",
              margin: "2rem 0",
              color: BODY_COLOR,
              fontSize: "1.1rem",
              lineHeight: "1.75",
              fontStyle: "italic",
            }}
          >
            &ldquo;Reassurance is a compulsion dressed as kindness. Every time OCD receives
            reassurance, it learns to ask louder next time. MEOK refuses to play that game
            &mdash; because your long-term recovery matters more than your short-term comfort.&rdquo;
          </blockquote>

          <p style={sBodyP}>
            When MEOK detects reassurance-seeking patterns &mdash; when a conversation begins to
            circle around the same intrusive thought looking for confirmation that everything
            is fine &mdash; it responds with compassionate redirection. It names what appears to be
            happening. It offers the option to process the experience differently. It holds firm
            in not providing the reassurance, even when that feels frustrating in the moment.
          </p>

          <p style={sBodyP}>
            This is the Healer archetype in practice. True care sometimes means declining to
            do the thing that would make someone comfortable right now, because you understand
            what their long-term wellbeing requires. A good OCD therapist does the same thing.
            MEOK is designed to honour that principle consistently.
          </p>

          <hr style={sDivider} />

          {/* ── Section 7: Distress tolerance ── */}
          <h2 style={sH2}>
            How Does MEOK Support Building Distress Tolerance Between ERP Sessions?
          </h2>

          <p style={sGeoAnswer}>
            Distress tolerance is the capacity to experience anxiety without immediately acting
            to neutralise it. It is the core skill that ERP therapy builds. MEOK supports
            distress tolerance between sessions by helping individuals log completed exposures,
            celebrate non-compulsive responses, build language for sitting with discomfort, and
            track the evidence that anxiety always subsides without a compulsion.
          </p>

          <p style={sBodyP}>
            ERP therapy works by systematically building distress tolerance. The person with
            OCD, guided by a trained therapist, deliberately faces feared situations and
            resists the urge to perform compulsions. Over time the anxiety habituates: the
            intrusive thought still appears but its urgency diminishes because the brain has
            learned that no response is required.
          </p>

          <p style={sBodyP}>
            This process is hard. There is often a period between ERP sessions when the person
            needs to complete exposure homework, face difficult situations, and resist compulsions
            without their therapist present. This is where motivation, reflection, and a sense
            of being supported matters enormously.
          </p>

          <p style={sBodyP}>
            MEOK can walk alongside this process. You can tell MEOK what exposure you completed
            today, how difficult it was, what you noticed, whether the anxiety peaked and
            subsided as your therapist said it would. MEOK can reflect back the courage that
            took, track your progress across weeks, and help you recognise the genuine change
            that is building even when progress feels invisible from the inside.
          </p>

          <p style={sBodyP}>
            MEOK can also help you develop language for the experience of distress tolerance
            itself: the feeling of anxiety rising, the compulsion urge arriving, the decision
            to sit with the discomfort, the gradual reduction in intensity that follows.
            Being able to describe this process accurately is part of developing agency over it.
            The more fluently you can narrate the experience, the less overwhelming it becomes.
          </p>

          {/* Feature box: distress tolerance support */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: GOLD,
                marginTop: "0",
                marginBottom: "1rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}
            >
              How MEOK supports distress tolerance between ERP sessions
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  Exposure logging
                </div>
                <div style={{ fontSize: "0.82rem", color: MUTED, lineHeight: "1.55" }}>
                  Record exposures completed, their difficulty rating, and what you noticed during and after
                </div>
              </div>
              <div
                style={{
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  Non-compulsion wins
                </div>
                <div style={{ fontSize: "0.82rem", color: MUTED, lineHeight: "1.55" }}>
                  Celebrate every instance of resisting a compulsion &mdash; MEOK remembers these across weeks
                </div>
              </div>
              <div
                style={{
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  Anxiety arc tracking
                </div>
                <div style={{ fontSize: "0.82rem", color: MUTED, lineHeight: "1.55" }}>
                  Note how long anxiety lasted and when it peaked &mdash; building evidence that it always subsides
                </div>
              </div>
              <div
                style={{
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.4rem",
                  }}
                >
                  Pre-session summaries
                </div>
                <div style={{ fontSize: "0.82rem", color: MUTED, lineHeight: "1.55" }}>
                  Review your week&apos;s exposures, triggers, and responses before your therapy appointment
                </div>
              </div>
            </div>
          </div>

          <hr style={sDivider} />

          {/* ── Section 8: Pure O ── */}
          <h2 style={sH2}>
            What Is Pure O OCD and Can AI Support People Who Have It?
          </h2>

          <p style={sGeoAnswer}>
            Pure O (purely obsessional OCD) describes presentations where compulsions are
            primarily mental rather than behavioural: rumination, mental review, thought
            neutralisation, and the relentless seeking of internal certainty. It is often
            undiagnosed for years because there are no visible rituals. AI support is
            well-suited to Pure O because writing externalises the covert mental activity
            that sustains it.
          </p>

          <p style={sBodyP}>
            Pure O is one of the most misunderstood presentations of OCD. People with Pure O
            often spend years not knowing they have OCD because their compulsions are invisible.
            They are not checking locks or washing hands. They are running internal debates,
            reviewing memories for evidence of wrongdoing, seeking certainty inside their own
            mind, mentally rehearsing reassuring arguments about their character or safety.
          </p>

          <p style={sBodyP}>
            This covert compulsive activity is just as exhausting and just as counterproductive
            as visible rituals. It reinforces the OCD cycle just as effectively. And because it
            is invisible, the person with Pure O often believes they are simply an anxious
            worrier, a deeply moral person who cannot stop thinking, or someone with an unusual
            mind. The years pass. The diagnosis does not come.
          </p>

          <p style={sBodyP}>
            MEOK&apos;s approach to Pure O centres on making the invisible visible. Writing about the
            thought loop &mdash; the argument that is being internally rehearsed, the memory being
            checked, the certainty being sought &mdash; externalises it. Once externalised, it can be
            observed. Once observed, it can be recognised as a compulsion rather than a
            reasonable cognitive process. This recognition does not resolve Pure O, but it is
            a significant step toward engaging properly with ERP therapy for it.
          </p>

          <p style={sBodyP}>
            Note that MEOK does not diagnose Pure O or any other presentation of OCD.
            If you recognise the description above, seeking an assessment from a mental health
            professional &mdash; and specifically one trained in OCD &mdash; is the appropriate next step.
            OCD-UK&apos;s therapist directory is a good place to start.
          </p>

          <hr style={sDivider} />

          {/* ── Section 9: Healer archetype ── */}
          <h2 style={sH2}>
            How Does the Healer Archetype Shape MEOK&apos;s Approach to OCD Support?
          </h2>

          <p style={sGeoAnswer}>
            The Healer archetype in MEOK prioritises long-term wellbeing over short-term
            comfort. For OCD support this is essential: true care means declining to
            reassure, holding steady when the person is in distress, and consistently
            directing back toward the therapeutic work rather than the compulsive relief
            that worsens the condition over time.
          </p>

          <p style={sBodyP}>
            MEOK is built around a set of distinct archetypes &mdash; different modes of relating
            that serve different needs. For mental health support, and for OCD in particular,
            the Healer archetype is the appropriate lens. The Healer is not a rescuer. It does
            not seek to eliminate all pain immediately. It understands that some discomfort is
            part of the healing process.
          </p>

          <p style={sBodyP}>
            This distinction matters enormously for OCD. A companion that rescues &mdash; that
            validates reassurance-seeking, that soothes every expression of intrusive thought
            with &ldquo;you will be okay&rdquo; &mdash; is actively harmful to someone with OCD. The comfort
            it provides is real but temporary. The damage it does to the therapeutic process
            is real and compounding.
          </p>

          <p style={sBodyP}>
            The Healer holds a longer view. When you describe an intrusive thought to MEOK and
            ask whether you should be worried, MEOK will not tell you not to worry. It will
            reflect the experience, acknowledge the discomfort, and gently redirect toward
            what the therapeutic work suggests &mdash; sitting with the uncertainty, noticing the
            compulsion urge, choosing not to perform it. This is harder. It is also what
            genuine support for OCD looks like.
          </p>

          <p style={sBodyP}>
            The Healer archetype also means MEOK consistently holds the bigger picture: that
            this work is hard, that recovery from OCD is real, and that the courage it takes
            to face intrusive thoughts without performing compulsions is extraordinary. MEOK
            holds that truth even when the person in the middle of a bad episode cannot.
          </p>

          <hr style={sDivider} />

          {/* ── Section 10: What to look for ── */}
          <h2 style={sH2}>
            What Should Someone with OCD Look for in an AI Companion?
          </h2>

          <p style={sGeoAnswer}>
            An AI companion appropriate for someone with OCD should refuse to provide
            reassurance for intrusive thoughts, understand the OCD cycle and not reinforce it,
            maintain persistent memory across sessions to track patterns over time, actively
            support ERP therapy rather than substituting for it, and be transparent about its
            limitations as a tool rather than a clinical intervention.
          </p>

          <p style={sBodyP}>
            Not all AI companions are appropriate for people with OCD. Some are designed
            primarily to be agreeable and validating &mdash; which serves many emotional needs well
            but is actively contraindicated for OCD. The risk is not that the AI will say
            something obviously harmful. The risk is that the AI will provide exactly the kind
            of warm, confirming responses that OCD exploits.
          </p>

          <p style={sBodyP}>
            MEOK was designed with this in mind. The care-scoring framework that governs
            MEOK&apos;s responses includes explicit guidance around OCD-related patterns: when
            reassurance-seeking is detected, the response is compassionate redirection, not
            confirmation. This is a design decision, not a limitation. It is what genuine
            care for someone with OCD requires.
          </p>

          {/* Feature box: what to look for */}
          <div
            style={{
              background: "rgba(106,170,100,0.06)",
              border: "1px solid rgba(106,170,100,0.2)",
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: GREEN,
                marginTop: "0",
                marginBottom: "1rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}
            >
              Five things to look for in an AI companion if you have OCD
            </h3>
            <ol
              style={{
                margin: "0",
                paddingLeft: "1.4rem",
                color: BODY_COLOR,
                lineHeight: "2.1",
                fontSize: "0.95rem",
              }}
            >
              <li>
                <strong style={{ color: TEXT }}>No reassurance for intrusive thoughts</strong>{" "}
                &mdash; this is non-negotiable. Any AI that validates OCD reassurance-seeking is harmful.
              </li>
              <li>
                <strong style={{ color: TEXT }}>OCD-aware design</strong>{" "}
                &mdash; the AI should understand the OCD cycle and its mechanisms, not just mental health broadly.
              </li>
              <li>
                <strong style={{ color: TEXT }}>Persistent memory</strong>{" "}
                &mdash; pattern recognition across weeks and months is where genuine insight is built.
              </li>
              <li>
                <strong style={{ color: TEXT }}>Therapy-complementing, not substituting</strong>{" "}
                &mdash; the AI should consistently direct toward professional ERP treatment with a specialist.
              </li>
              <li>
                <strong style={{ color: TEXT }}>Clear disclaimers</strong>{" "}
                &mdash; transparent about what it is and is not, including the hard limits of AI support.
              </li>
            </ol>
          </div>

          <hr style={sDivider} />

          {/* ── Section 11: Where to access ERP ── */}
          <h2 style={sH2}>
            Where Can Someone with OCD in the UK Access ERP Therapy?
          </h2>

          <p style={sGeoAnswer}>
            In the UK, ERP therapy for OCD is available through the NHS via GP referral to
            IAPT services. Specialist OCD treatment may require referral to secondary care.
            OCD-UK and OCD Action are the leading national charities and provide therapist
            directories, peer support, and crisis resources for people at any stage of their
            OCD journey.
          </p>

          <p style={sBodyP}>
            Accessing appropriate OCD treatment in the UK often takes persistence. Not all IAPT
            therapists have specialist training in ERP for OCD, and waiting times can be
            significant. The following organisations are the best starting points for finding
            specialist help:
          </p>

          <ul
            style={{
              paddingLeft: "1.4rem",
              color: BODY_COLOR,
              lineHeight: "2",
              fontSize: "1rem",
              marginBottom: "1.3rem",
            }}
          >
            <li>
              <strong style={{ color: TEXT }}>OCD-UK</strong> &mdash; ocduk.org &mdash; the UK&apos;s leading
              OCD charity. Therapist directory, peer support groups, helpline: 03332 127 890
            </li>
            <li>
              <strong style={{ color: TEXT }}>OCD Action</strong> &mdash; ocdaction.org.uk &mdash;
              national charity offering support groups, CBT/ERP resources, and advocacy
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS IAPT</strong> &mdash; refer via your GP. Ask
              specifically for a therapist with OCD and ERP experience
            </li>
            <li>
              <strong style={{ color: TEXT }}>Maudsley NHS Foundation Trust</strong> &mdash;
              the National OCD Service for complex and treatment-resistant cases
            </li>
            <li>
              <strong style={{ color: TEXT }}>Samaritans</strong> &mdash; 116 123 &mdash; for
              crisis support 24 hours a day, 7 days a week, free from any phone
            </li>
          </ul>

          <p style={sBodyP}>
            MEOK is not a substitute for any of these resources. Its role is to support the
            work between sessions, track patterns over time, and help people arrive at their
            therapy better prepared and more self-aware. The clinical work must be done with
            a qualified professional who specialises in OCD and ERP.
          </p>

          <hr style={sDivider} />

          {/* ── FAQ Section ── */}
          <h2 style={sH2}>
            Frequently Asked Questions: AI for OCD
          </h2>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.6rem",
                marginTop: "0",
              }}
            >
              Can AI help someone with OCD?
            </h3>
            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: "1.7",
                color: BODY_COLOR,
                margin: "0",
              }}
            >
              AI can provide meaningful support for people living with OCD when it is built
              to respect ERP principles. MEOK helps users externalise obsessive thoughts
              through writing, process events after triggers, understand the OCD cycle, and build
              distress tolerance &mdash; all without providing reassurance. It is a complement to
              specialist ERP therapy with a trained therapist, never a replacement.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.6rem",
                marginTop: "0",
              }}
            >
              Why won&apos;t MEOK give reassurance for OCD intrusive thoughts?
            </h3>
            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: "1.7",
                color: BODY_COLOR,
                margin: "0",
              }}
            >
              Reassurance-seeking is itself a compulsion in OCD. Each time a person receives
              reassurance for an intrusive thought, it temporarily reduces anxiety but ultimately
              reinforces the OCD cycle, making the obsession stronger over time. MEOK explicitly
              declines to validate or reassure intrusive thoughts, redirecting with compassion
              toward distress tolerance instead.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.6rem",
                marginTop: "0",
              }}
            >
              What is the OCD cycle and how does MEOK help interrupt it?
            </h3>
            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: "1.7",
                color: BODY_COLOR,
                margin: "0",
              }}
            >
              The OCD cycle has four stages: an intrusive obsession triggers anxiety, which drives a
              compulsion, which provides brief relief, which reinforces the obsession. MEOK helps
              by making the cycle visible through writing and reflection, building awareness that
              thoughts are not facts, and supporting distress tolerance so compulsions become less urgent.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.6rem",
                marginTop: "0",
              }}
            >
              Is MEOK suitable for Pure O OCD?
            </h3>
            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: "1.7",
                color: BODY_COLOR,
                margin: "0",
              }}
            >
              Yes. Pure O OCD involves primarily mental compulsions &mdash; rumination, mental review,
              seeking internal certainty, thought neutralisation. MEOK&apos;s thought externalisation and
              post-trigger journalling are well-suited to Pure O because they help surface covert
              mental rituals. Specialist ERP therapy with a trained therapist remains essential.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.6rem",
                marginTop: "0",
              }}
            >
              What is the gold standard treatment for OCD?
            </h3>
            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: "1.7",
                color: BODY_COLOR,
                margin: "0",
              }}
            >
              The gold standard treatment for OCD is Exposure and Response Prevention (ERP) therapy
              delivered by a trained specialist. ERP involves deliberately confronting feared
              thoughts and situations while resisting compulsions, breaking the anxiety-relief
              cycle that maintains OCD. In the UK, access ERP through OCD-UK, OCD Action, or
              the NHS. MEOK is designed only as a complement to this treatment.
            </p>
          </div>

          <hr style={sDivider} />

          {/* ── Summary ── */}
          <h2 style={sH2}>
            Summary: What MEOK Does and Does Not Do for OCD
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: "rgba(106,170,100,0.07)",
                border: "1px solid rgba(106,170,100,0.25)",
                borderRadius: "10px",
                padding: "1.4rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: GREEN,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  marginBottom: "0.9rem",
                }}
              >
                MEOK does
              </div>
              <ul
                style={{
                  margin: "0",
                  paddingLeft: "1.2rem",
                  color: BODY_COLOR,
                  fontSize: "0.9rem",
                  lineHeight: "2",
                }}
              >
                <li>Hold space for externalising intrusive thoughts</li>
                <li>Support post-trigger processing and reflection</li>
                <li>Help identify patterns across weeks and months</li>
                <li>Build language for the distress tolerance experience</li>
                <li>Celebrate non-compulsive responses</li>
                <li>Track exposure homework progress</li>
                <li>Prepare pre-therapy session summaries</li>
                <li>Redirect compassionately when reassurance is sought</li>
                <li>Hold the distinction between OCD thoughts and self</li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.18)",
                borderRadius: "10px",
                padding: "1.4rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  marginBottom: "0.9rem",
                }}
              >
                MEOK does not
              </div>
              <ul
                style={{
                  margin: "0",
                  paddingLeft: "1.2rem",
                  color: BODY_COLOR,
                  fontSize: "0.9rem",
                  lineHeight: "2",
                }}
              >
                <li>Provide reassurance for intrusive thoughts</li>
                <li>Diagnose OCD or any other condition</li>
                <li>Deliver ERP therapy</li>
                <li>Replace a trained OCD therapist</li>
                <li>Validate compulsions or avoidance</li>
                <li>Act as a crisis intervention service</li>
                <li>Provide medical or psychiatric advice</li>
                <li>Make clinical judgements about medication</li>
              </ul>
            </div>
          </div>

          <p style={sBodyP}>
            OCD is one of the most isolating and misunderstood conditions a person can live with.
            The thoughts that cause the most distress are often the thoughts most at odds with who
            the person truly is. The compulsions that seem most irrational from the outside are
            the ones that feel most urgent from the inside. The eleven-year average gap between
            onset and treatment is a gap filled with suffering that does not need to be as
            prolonged as it so often is.
          </p>

          <p style={sBodyP}>
            MEOK will not close that gap on its own. But it can make the hours between therapy
            sessions more purposeful, more reflective, and more connected to the recovery work
            that ERP makes possible. It can hold the pattern across months when memory fails.
            It can refuse the reassurance that OCD demands without refusing the person who is
            struggling. That is what it is here for.
          </p>

          <hr style={sDivider} />

          {/* ── Internal links ── */}
          <p
            style={{
              fontSize: "0.9rem",
              color: MUTED,
              lineHeight: "1.8",
            }}
          >
            Related reading:{" "}
            <Link href="/blog/ai-for-anxiety" style={sInlineLink}>
              AI for Anxiety
            </Link>
            {" \u00b7 "}
            <Link href="/blog/ai-for-ocd-support" style={sInlineLink}>
              AI for OCD Support
            </Link>
            {" \u00b7 "}
            <Link href="/blog/ai-for-health-anxiety" style={sInlineLink}>
              AI for Health Anxiety
            </Link>
            {" \u00b7 "}
            <Link href="/blog/ai-companion-vs-therapist" style={sInlineLink}>
              AI Companion vs Therapist
            </Link>
            {" \u00b7 "}
            <Link href="/blog/meok-companion-archetypes-guide" style={sInlineLink}>
              MEOK Archetypes Guide
            </Link>
          </p>

          {/* ── CTA ── */}
          <div style={sCta}>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                marginBottom: "0.75rem",
              }}
            >
              MEOK AI LABS &mdash; Healer Archetype
            </div>

            <h2
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                fontWeight: 900,
                color: TEXT,
                marginBottom: "1rem",
                marginTop: "0",
                letterSpacing: "-0.02em",
                lineHeight: "1.25",
              }}
            >
              An AI companion that understands OCD &mdash; and refuses to make it worse
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.75",
                color: BODY_COLOR,
                maxWidth: "520px",
                margin: "0 auto 1.75rem",
              }}
            >
              MEOK supports people living with OCD through externalising obsessive thoughts,
              post-trigger processing, and building distress tolerance &mdash; as a genuine complement
              to ERP therapy. It will not reassure your intrusive thoughts. It will walk with
              you as you learn not to need it to.
            </p>

            <Link
              href="https://meok.ai/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: "#0d0c18",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "0.85rem 2.25rem",
                borderRadius: "8px",
                letterSpacing: "0.02em",
              }}
            >
              Meet your MEOK companion
            </Link>

            <p
              style={{
                fontSize: "0.8rem",
                color: MUTED,
                marginTop: "1.25rem",
                marginBottom: "0",
              }}
            >
              Not a medical device. Not a substitute for ERP therapy with a trained specialist.
              A companion for the hours in between.
            </p>
          </div>
        </main>

        {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
        <footer
          style={{
            borderTop: `1px solid ${BORDER}`,
            padding: "2rem 1.5rem",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              color: MUTED,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            &copy; 2026 MEOK AI LABS. MEOK is not a medical device and does not provide clinical
            treatment. The gold standard treatment for OCD is ERP therapy with a trained
            specialist. If you are in crisis contact the Samaritans on 116 123.
          </p>
        </footer>
      </div>
    </>
  )
}
