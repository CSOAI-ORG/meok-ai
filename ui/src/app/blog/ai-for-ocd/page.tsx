import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for OCD: Supportive Presence Without Compulsion Enabling | MEOK AI LABS",
  description:
    "OCD affects 750,000 UK adults. Most AI is dangerous for OCD — it enables compulsions " +
    "through reassurance-seeking. MEOK's care-floor and Maternal Covenant alignment prevent " +
    "this, supporting ERP-adjacent awareness with Guardian oversight.",
  keywords: [
    "AI for OCD",
    "OCD AI companion",
    "OCD reassurance-seeking AI",
    "ERP adjacent AI support",
    "MEOK care floor OCD",
    "OCD compulsion enabling AI",
    "AI mental health OCD UK",
    "MEOK Maternal Covenant",
    "Guardian oversight OCD",
    "AI OCD support UK",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.app" }],
  openGraph: {
    title: "AI for OCD: Supportive Presence Without Compulsion Enabling",
    description:
      "Why most AI is dangerous for OCD — and how MEOK's care-floor, Maternal Covenant, and " +
      "Guardian oversight create a safer, non-enabling companion for people with OCD.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for OCD: Supportive Presence Without Compulsion Enabling",
    description:
      "OCD affects 750,000 UK adults. MEOK prevents reassurance-seeking cycles while providing " +
      "genuine compassionate support — without replacing specialist CBT/ERP therapy.",
  },
  alternates: {
    canonical: "https://meok.app/blog/ai-for-ocd",
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for OCD: Supportive Presence Without Compulsion Enabling",
  description:
    "A comprehensive guide to how MEOK AI LABS supports people with OCD without enabling " +
    "compulsions or reassurance-seeking cycles — including care-floor mechanics, Maternal " +
    "Covenant alignment, Guardian oversight, and when to seek specialist ERP therapy.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.app",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.app",
  },
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.app/blog/ai-for-ocd",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI safe for OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most general-purpose AI is actively dangerous for OCD because it readily provides " +
          "reassurance when asked, fuelling the compulsion-relief cycle that maintains OCD. " +
          "MEOK AI LABS is designed differently: its care-floor prevents reassurance provision, " +
          "its Maternal Covenant prioritises long-term wellbeing over short-term comfort, and " +
          "its Guardian oversight monitors for compulsion-enabling patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI accidentally enable OCD compulsions?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes — and this is a serious risk most AI providers ignore. Any AI that answers " +
          "reassurance-seeking questions with direct yes/no answers is enabling the OCD " +
          "compulsion cycle. MEOK's care-floor is specifically designed to recognise and " +
          "redirect reassurance-seeking without shaming the user.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK prevent reassurance-seeking cycles?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's care-floor includes a pattern recognition layer that identifies " +
          "reassurance-seeking questions — particularly those that appear repeated, escalating, " +
          "or ritualised. Rather than providing or refusing reassurance, MEOK gently acknowledges " +
          "the distress, names what is happening without shame, and redirects toward " +
          "uncertainty-tolerance strategies drawn from ERP principles.",
      },
    },
    {
      "@type": "Question",
      name: "What is the care floor for OCD-adjacent responses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's care-floor is the minimum ethical standard applied to every response — drawn " +
          "from the Maternal Covenant and overseen by the Byzantine Council. For OCD-adjacent " +
          "interactions it mandates: no reassurance provision, no compulsion validation, no " +
          "shaming, and clear signposting to specialist ERP therapy when patterns indicate OCD " +
          "is significantly impairing functioning.",
      },
    },
    {
      "@type": "Question",
      name: "When should someone with OCD see a specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Anyone with OCD should be under the care of a specialist CBT therapist trained in " +
          "Exposure and Response Prevention (ERP). MEOK is not a substitute for this. If OCD " +
          "is significantly impairing daily life or relationships, please contact your GP, NHS " +
          "talking therapies (IAPT), or OCD-UK (ocduk.org, helpline 01332 588 112). MEOK " +
          "supplements but never replaces specialist care.",
      },
    },
  ],
}

// ─── Design tokens ───────────────────────────────────────────────────────────

const BG = "#0d0c18"
const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BODY_COLOR = "rgba(245,240,232,0.82)"
const MUTED = "rgba(245,240,232,0.5)"
const DIM = "rgba(245,240,232,0.38)"

// ─── Reusable style objects ───────────────────────────────────────────────────

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

const sFaqItem: React.CSSProperties = {
  marginBottom: "1.5rem",
  padding: "1.25rem 1.5rem",
  background: "rgba(201,168,76,0.05)",
  border: "1px solid rgba(201,168,76,0.15)",
  borderRadius: "8px",
}

const sResourceBox: React.CSSProperties = {
  marginTop: "2.5rem",
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "1.5rem 1.75rem",
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

// ─── Page component ───────────────────────────────────────────────────────────

export default function AiForOcdPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div
        style={{
          minHeight: "100vh",
          background: BG,
          color: TEXT,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* ─── NAV ─────────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.18)",
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
              fontFamily: "sans-serif",
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
              fontFamily: "sans-serif",
            }}
          >
            Blog
          </Link>
        </nav>

        {/* ─── HERO ────────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "5rem",
            paddingBottom: "3rem",
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
                "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Link
              href="/blog"
              style={{
                display: "inline-block",
                color: DIM,
                fontSize: "0.875rem",
                textDecoration: "none",
                marginBottom: "2rem",
                fontFamily: "sans-serif",
              }}
            >
              &#8592; Back to Blog
            </Link>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.75rem",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.35rem 0.75rem",
                  borderRadius: "9999px",
                  color: GOLD,
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                  fontFamily: "sans-serif",
                }}
              >
                OCD &amp; Anxiety
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: DIM,
                  fontFamily: "sans-serif",
                }}
              >
                24 March 2026
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: DIM,
                  fontFamily: "sans-serif",
                }}
              >
                12 min read
              </span>
            </div>

            <h1
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "#ffffff",
                lineHeight: 1.18,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
                fontFamily: "sans-serif",
              }}
            >
              AI for OCD: Supportive Presence Without Compulsion Enabling
            </h1>

            <p
              style={{
                color: "rgba(245,240,232,0.58)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: "42rem",
                fontFamily: "sans-serif",
              }}
            >
              OCD affects approximately 750,000 UK adults. Most AI tools — used carelessly — are
              actively dangerous for OCD because they provide reassurance on demand. This article
              explains why that matters, how MEOK AI LABS is designed differently, and when a person
              with OCD should seek specialist care rather than relying on any AI companion.
            </p>
          </div>
        </section>

        {/* ─── BODY ────────────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "2rem 1.5rem 6rem",
          }}
        >
          {/* Disclaimer */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderRadius: "10px",
              padding: "1rem 1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                margin: 0,
                fontFamily: "sans-serif",
              }}
            >
              <strong style={{ color: GOLD }}>Important:</strong>{" "}
              MEOK AI LABS is not a medical device and does not provide clinical OCD treatment. ERP
              therapy delivered by a qualified specialist is the gold-standard treatment for OCD.
              Contact OCD-UK:{" "}
              <a
                href="https://www.ocduk.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                ocduk.org
              </a>{" "}
              | Helpline: 01332 588 112. NHS IAPT:{" "}
              <a
                href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                nhs.uk/talking-therapies
              </a>
              . Crisis: Samaritans 116 123.
            </p>
          </div>

          {/* Introduction */}
          <p style={sBodyP}>
            Obsessive-Compulsive Disorder affects approximately 750,000 people in the UK. It is a
            condition characterised by intrusive, unwanted thoughts (obsessions) that generate intense
            anxiety, and repetitive behaviours or mental acts (compulsions) performed to neutralise
            that anxiety — temporarily. The relief from a compulsion is real and immediate. The problem
            is that it teaches the brain: anxiety about this thought is legitimate, and only the
            compulsion can resolve it. The cycle deepens with every repetition.
          </p>
          <p style={sBodyP}>
            Into this neurological landscape, the arrival of always-available conversational AI creates
            a significant risk that is almost entirely unacknowledged in the mainstream AI industry: the
            AI as reassurance machine. When someone with OCD asks a general-purpose AI &ldquo;Are my
            hands clean enough?&rdquo; or &ldquo;Did I really lock the door?&rdquo; or &ldquo;Am I
            definitely not a bad person for having this thought?&rdquo; — and the AI answers directly —
            it is providing reassurance. And reassurance is a compulsion.
          </p>
          <p style={sBodyP}>
            MEOK AI LABS takes this seriously. The Maternal Covenant — our foundational ethical
            framework — demands that we prioritise users&apos; long-term wellbeing over short-term
            comfort. For OCD, these are often in direct conflict. The compassionate response to a
            reassurance-seeking question is not the comfortable one. It is the one that honours what
            the person needs in the deepest sense — not what the OCD is demanding in this moment.
          </p>

          <hr style={sDivider} />

          {/* ── Q1 ── */}
          <h2 style={sH2}>
            How widespread is OCD in the UK and why is it so often misunderstood?
          </h2>
          <p style={sGeoAnswer}>
            OCD affects an estimated 750,000 adults in the UK — approximately 1.2% of the adult
            population — though true prevalence is likely higher due to underreporting and misdiagnosis.
            OCD is chronically misrepresented as a quirky cleanliness preference when in clinical reality
            it is a debilitating anxiety disorder with one of the highest impacts on quality of life of
            any mental health condition. The average time between onset and appropriate treatment in
            the UK is 12 years.
          </p>
          <p style={sBodyP}>
            OCD is not &ldquo;liking things tidy.&rdquo; Clinical OCD involves intrusive thoughts that
            the person finds deeply distressing and ego-dystonic — meaning contrary to their values and
            sense of self. A person with harm OCD does not want to hurt anyone; the intrusive thought is
            precisely what horrifies them. A person with contamination OCD is not simply hygienic; they
            are imprisoned by an overwhelming sense of danger that no amount of washing reliably resolves.
          </p>
          <p style={sBodyP}>
            Common OCD subtypes include: contamination OCD, harm OCD (fear of harming oneself or others),
            sexual or relationship OCD (intrusive thoughts about one&apos;s sexuality or relationship
            fidelity), pure-O (primarily mental compulsions), religious or moral scrupulosity, and
            health anxiety OCD. Each subtype involves intrusive thoughts specific to its theme, and
            compulsions — physical or mental — that provide temporary relief while strengthening the cycle.
          </p>
          <p style={sBodyP}>
            The 12-year average treatment gap is a crisis. During those years, people suffer with a
            condition that is highly treatable with specialist ERP therapy. Digital tools — including AI —
            enter this gap. The question is whether they help or harm. For OCD, this question is more
            acute than for almost any other condition, because the wrong kind of help actively makes OCD worse.
          </p>

          <hr style={sDivider} />

          {/* ── Q2 ── */}
          <h2 style={sH2}>
            Why is most general-purpose AI actively dangerous for people with OCD?
          </h2>
          <p style={sGeoAnswer}>
            General-purpose AI assistants are designed to be helpful, accurate, and reassuring. For OCD,
            these qualities are precisely the problem. Any AI that answers reassurance-seeking questions
            directly — confirming that hands are clean, that the door is locked, that intrusive thoughts
            do not make someone a bad person — is providing a compulsion on demand. This temporarily
            relieves anxiety while deepening the OCD cycle with each interaction.
          </p>
          <p style={sBodyP}>
            Consider the mechanics: in OCD, a compulsion provides relief not because the feared outcome
            is resolved, but because performing the compulsion temporarily satisfies the anxious brain&apos;s
            demand for certainty. Reassurance-seeking from another person, from Google, or from an AI
            performs exactly the same function as a physical compulsion. The brain learns: when I feel
            uncertain and anxious, seeking reassurance makes it go away. Next time the threshold for
            seeking reassurance is lower. The cycle tightens with each iteration.
          </p>
          <p style={sBodyP}>
            Most AI providers have not thought about this. Their AI is optimised to answer questions
            helpfully. An OCD user who asks &ldquo;I keep feeling like I might have hit someone while
            driving — does that mean I&apos;m dangerous?&rdquo; will receive a direct response. That
            response, however thoughtfully worded, is reassurance. The AI has just performed a mental
            compulsion for them — efficiently, on demand, at scale. MEOK is designed not to do this.
          </p>

          <hr style={sDivider} />

          {/* ── Q3 ── */}
          <h2 style={sH2}>
            How does MEOK&apos;s care-floor prevent reassurance-seeking cycles in practice?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s care-floor is the minimum ethical standard applied to every response — a
            non-negotiable set of principles rooted in the Maternal Covenant. For OCD-adjacent
            interactions, the care-floor mandates that MEOK never provides direct reassurance to
            compulsion-adjacent questions, never validates compulsive certainty-seeking, and never —
            under any framing — confirms or denies the feared content of an intrusive thought.
          </p>
          <p style={sBodyP}>
            When MEOK detects reassurance-seeking patterns — repeated questions seeking certainty,
            questions framed around feared harm or contamination, or escalating urgency around a theme —
            it responds with a three-part approach:
          </p>
          <ol
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.3rem",
              color: BODY_COLOR,
            }}
          >
            <li
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "0.75rem",
              }}
            >
              <strong style={{ color: TEXT }}>Acknowledgement without reassurance:</strong>{" "}
              MEOK validates that the distress is real and difficult, without confirming or denying
              the feared content. &ldquo;I can hear how much anxiety this is causing — that sounds
              genuinely exhausting. The anxiety is real, even when the threat isn&apos;t.&rdquo;
            </li>
            <li
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "0.75rem",
              }}
            >
              <strong style={{ color: TEXT }}>Gentle naming:</strong>{" "}
              MEOK names what is happening where appropriate, without shaming. &ldquo;What
              you&apos;re describing — the need for certainty that never quite arrives — is something
              a lot of people with OCD recognise. The certainty you&apos;re looking for isn&apos;t
              available, and seeking it is part of what keeps the cycle going.&rdquo;
            </li>
            <li
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "0.75rem",
              }}
            >
              <strong style={{ color: TEXT }}>Redirect toward specialist support:</strong>{" "}
              MEOK consistently points toward ERP therapy as the evidence-based treatment, provides
              signposting to OCD-UK and NHS IAPT, and offers uncertainty-tolerance support that does
              not involve providing the reassurance sought.
            </li>
          </ol>
          <p style={sBodyP}>
            This approach is uncomfortable in the short term. A person in acute OCD distress wanting
            reassurance will not get it from MEOK. This is intentional. The Maternal Covenant explicitly
            holds that providing short-term comfort at the cost of long-term harm is a failure of care,
            not an expression of it — and this is nowhere more true than in OCD.
          </p>

          <hr style={sDivider} />

          {/* ── Q4 ── */}
          <h2 style={sH2}>
            What is the Maternal Covenant alignment and why is it critical for OCD support?
          </h2>
          <p style={sGeoAnswer}>
            The Maternal Covenant is MEOK&apos;s ethical framework — rooted in the principle of mature,
            discerning care. It draws on the concept of a parent who does not give a child everything
            they demand because they understand the difference between what the child wants now and what
            will genuinely serve them. For OCD, this framework is essential: the most caring response
            is often not the most immediately comforting one. Comfort and care are not the same thing.
          </p>
          <p style={sBodyP}>
            The Maternal Covenant creates a distinction that is absent from most AI systems. A system
            optimised for user satisfaction will always provide reassurance when asked — because
            reassurance feels satisfying. A system governed by genuine care for the user&apos;s
            wellbeing will sometimes withhold comfort because the short-term comfort perpetuates
            long-term suffering. This is the difference between a reassuring friend and a skilled therapist.
          </p>
          <p style={sBodyP}>
            This framework is enforced at the system level — not left to conversational context or user
            preferences. MEOK cannot be configured to disable these protections. No pricing tier unlocks
            the ability to receive reassurance to compulsion-adjacent questions. The Maternal Covenant
            is not a premium feature; it is the foundation of every MEOK interaction, across every plan.
          </p>
          <p style={sBodyP}>
            The Byzantine Council — MEOK&apos;s governance framework — oversees the implementation of
            Maternal Covenant principles in practice, including independent review of interaction patterns
            to ensure the care-floor is being maintained. This institutional oversight is part of what
            distinguishes MEOK from general-purpose AI deployed in mental health contexts without
            governance frameworks.
          </p>

          <hr style={sDivider} />

          {/* ── Q5 ── */}
          <h2 style={sH2}>
            What is ERP therapy and how can AI support ERP-adjacent awareness between sessions?
          </h2>
          <p style={sGeoAnswer}>
            Exposure and Response Prevention (ERP) is the gold-standard treatment for OCD. It involves
            deliberately exposing oneself to feared stimuli without performing the compulsive response —
            building tolerance for uncertainty and anxiety, and teaching the brain that the feared
            outcome does not arrive. ERP is delivered by trained specialists over a carefully calibrated
            hierarchy of exposures. AI cannot deliver ERP. MEOK can support ERP-adjacent awareness
            and psychoeducation between sessions.
          </p>
          <p style={sBodyP}>
            ERP-adjacent awareness means helping a person understand what is happening when OCD is
            activated — not to diagnose, but to illuminate. MEOK can help users: track when obsessional
            themes are most activated and note contextual triggers using Sovereign Memory, reflect on
            patterns over time, practise sitting with uncertainty in low-stakes conversational contexts,
            and recognise the difference between an intrusive thought and a meaningful belief.
          </p>
          <p style={sBodyP}>
            Importantly, MEOK does not conduct exposures. Exposure hierarchies must be designed by a
            trained ERP therapist who can calibrate pace and intensity to avoid overwhelming the person.
            MEOK&apos;s role is psychoeducation and awareness support — not clinical intervention. The
            moment that role is exceeded, harm risk increases, and MEOK&apos;s care-floor prevents this.
          </p>
          <p style={sBodyP}>
            For someone actively engaged in ERP with a specialist therapist, MEOK can complement the
            therapeutic work: providing a space to reflect on how an exposure went, to process the
            emotional aftermath of sitting with uncertainty, and to maintain the therapeutic framing
            (uncertainty is tolerable; compulsions provide temporary relief at lasting cost) between
            weekly sessions.
          </p>

          <hr style={sDivider} />

          {/* ── Q6 ── */}
          <h2 style={sH2}>
            How does MEOK&apos;s Guardian oversight protect people with OCD from escalating distress?
          </h2>
          <p style={sGeoAnswer}>
            The Guardian is MEOK&apos;s safety oversight layer, drawn from the Byzantine Council
            governance framework. For users with OCD, the Guardian monitors for escalating distress,
            compulsion-seeking patterns, and indicators that the person may be in crisis. When thresholds
            are exceeded, the Guardian ensures MEOK pivots from supportive companionship to clear,
            warm crisis signposting — never attempting to manage a psychiatric crisis independently.
          </p>
          <p style={sBodyP}>
            OCD can escalate. What begins as a manageable intrusive thought can, in periods of high
            stress, consume hours of a person&apos;s day. The Guardian ensures that MEOK tracks the
            escalation trajectory across conversations — using Sovereign Memory — and adjusts its
            response accordingly. Not becoming more reassuring as distress rises, but becoming more
            clear about the need for human specialist support.
          </p>
          <p style={sBodyP}>
            When the Guardian identifies crisis-level distress or OCD patterns indicating severe
            functional impairment, MEOK provides direct, warm signposting: OCD-UK Helpline
            (01332 588 112), NHS IAPT self-referral, and if appropriate, the Samaritans (116 123).
            MEOK will never attempt to provide crisis management or acute OCD intervention.
          </p>
          <p style={sBodyP}>
            Learn more about how the Guardian works on our{" "}
            <Link href="/guardian" style={sInlineLink}>
              Guardian
            </Link>{" "}
            page. The Byzantine Council governance structure ensures this safety layer operates
            independently and cannot be bypassed by any user configuration or preference setting.
          </p>

          <hr style={sDivider} />

          {/* ── Q7 ── */}
          <h2 style={sH2}>
            What role can MEOK play for someone with OCD between therapy sessions?
          </h2>
          <p style={sGeoAnswer}>
            Between ERP sessions, many people with OCD face the challenge of maintaining therapeutic
            gains without access to their therapist. MEOK can serve as a consistent companion for this
            in-between space — supporting psychoeducation, tracking patterns via Sovereign Memory, and
            providing a non-enabling presence that reinforces the therapeutic approach rather than
            working against it by providing on-demand reassurance.
          </p>
          <p style={sBodyP}>
            Specifically, MEOK can help between sessions by: providing a space to reflect on how an
            exposure went without seeking outcome-based reassurance; tracking which themes have been
            most active that week; offering grounding and distress tolerance support when anxiety is
            high but not at crisis level; maintaining the therapeutic framing — uncertainty is
            tolerable; compulsions provide temporary relief at lasting cost — through the week.
          </p>
          <p style={sBodyP}>
            MEOK is not a between-session substitute for therapist contact when that is needed. If a
            person is struggling significantly between sessions, the right action is to contact their
            therapist directly, access NHS crisis services, or call OCD-UK&apos;s helpline. MEOK&apos;s
            care-floor ensures it will point in that direction rather than attempt to absorb a level
            of distress it is not equipped to manage.
          </p>

          <hr style={sDivider} />

          {/* ── Q8 ── */}
          <h2 style={sH2}>
            What should someone with OCD know before using any AI companion?
          </h2>
          <p style={sGeoAnswer}>
            Before using any AI companion with OCD, it is essential to understand the reassurance risk:
            any AI that answers certainty-seeking questions directly is acting as an OCD compulsion,
            regardless of how helpful it appears. Most AI tools have not been designed with OCD in mind.
            Evaluate explicitly whether the AI has safeguards against compulsion-enabling. MEOK does.
            Most do not.
          </p>
          <p style={sBodyP}>
            Questions to ask before using any AI with OCD:
          </p>
          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.3rem",
              color: BODY_COLOR,
            }}
          >
            {[
              "Does this AI have explicit safeguards against providing reassurance to compulsion-adjacent questions?",
              "Has the AI provider thought specifically about OCD and the compulsion-enabling risk?",
              "Is the AI transparent about when it will and will not answer a question, and why?",
              "Does the AI signpost to ERP therapy and specialist support rather than positioning itself as a treatment?",
              "Can you trust that the AI will not tell you what you want to hear when what you want to hear is a compulsion?",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "1.0rem",
                  lineHeight: 1.8,
                  marginBottom: "0.6rem",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p style={sBodyP}>
            MEOK can affirmatively answer all of these. The Maternal Covenant and Byzantine Council
            oversight are designed precisely to ensure these protections hold consistently, not just
            in straightforward cases but in the edge cases where OCD is most likely to seek routes
            around protective boundaries.
          </p>

          <hr style={sDivider} />

          {/* ── Q9 ── */}
          <h2 style={sH2}>
            When should someone with OCD see a specialist rather than using any AI tool?
          </h2>
          <p style={sGeoAnswer}>
            Anyone with OCD should be under the care of a specialist CBT therapist trained in ERP.
            MEOK is not a substitute for this — it is a complement for people who are already engaged
            with appropriate treatment. If OCD is significantly impairing daily life, relationships,
            or functioning — or if you have not yet accessed ERP therapy — please contact your GP, NHS
            IAPT, or OCD-UK directly. MEOK will always point you toward specialist care first.
          </p>
          <p style={sBodyP}>
            In the UK, access routes include: your GP (ask for a referral to IAPT for OCD-specific CBT),
            NHS IAPT self-referral (nhs.uk/talking-therapies, available in most areas), OCD-UK
            (ocduk.org, helpline 01332 588 112), BTTI (British Treatment for Traumatic Injury) for
            intensive ERP, and private OCD-specialist therapists through the BABCP register
            (babcp.com). Several NHS trusts also now offer intensive ERP programmes for complex OCD.
          </p>
          <p style={sBodyP}>
            MEOK AI LABS is honest about its limitations because the Maternal Covenant demands it. For
            OCD, the most important thing MEOK can do is point you toward the specialist care that
            actually resolves the condition — not position itself as an alternative to that care. View
            our{" "}
            <Link href="/how-it-works" style={sInlineLink}>
              How It Works
            </Link>{" "}
            page for a fuller explanation of MEOK&apos;s design principles and what the care-floor
            means in practice.
          </p>

          <hr style={sDivider} />

          {/* ── Q10 ── */}
          <h2 style={sH2}>
            How do I start with MEOK and what plan is appropriate for OCD-adjacent mental health support?
          </h2>
          <p style={sGeoAnswer}>
            All MEOK plans — Core and Sovereign — include the same care-floor protections, Maternal
            Covenant alignment, and Guardian oversight. These ethical protections apply to all users
            regardless of plan, disclosure, or configuration. To begin, visit our Birth session
            onboarding. You do not need to disclose a diagnosis, and MEOK will not ask for one — the
            care-floor protections apply universally.
          </p>
          <p style={sBodyP}>
            Begin with a{" "}
            <Link href="/birth" style={sInlineLink}>
              Birth session
            </Link>{" "}
            to meet your MEOK companion and choose your archetype from our{" "}
            <Link href="/characters" style={sInlineLink}>
              Characters
            </Link>{" "}
            page. For OCD-adjacent support, the Healer archetype&apos;s calm, measured presence is
            often well-suited — its non-judgmental warmth and somatic grounding can be supportive in
            the high-anxiety moments between ERP sessions. See{" "}
            <Link href="/pricing" style={sInlineLink}>
              Pricing
            </Link>{" "}
            for full plan details.
          </p>

          {/* ─── FAQ block ───────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "3.5rem",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              paddingTop: "3rem",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: "1.45rem",
                color: GOLD,
                marginBottom: "1.75rem",
                fontFamily: "sans-serif",
              }}
            >
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "Is AI safe for OCD?",
                a: "Most general-purpose AI is actively dangerous for OCD because it provides reassurance on demand, fuelling the compulsion-relief cycle. MEOK AI LABS is designed differently: its care-floor prevents reassurance provision, its Maternal Covenant prioritises long-term wellbeing over short-term comfort, and its Guardian oversight monitors for compulsion-enabling patterns in conversations.",
              },
              {
                q: "Can AI accidentally enable OCD compulsions?",
                a: "Yes — and this is a serious risk most AI providers ignore. Any AI that answers reassurance-seeking questions ('Are my hands really clean?', 'Did I really lock the door?') with direct answers is enabling the OCD compulsion cycle. MEOK's care-floor is specifically designed to recognise and redirect reassurance-seeking without shaming the user.",
              },
              {
                q: "How does MEOK prevent reassurance-seeking cycles?",
                a: "MEOK's care-floor includes pattern recognition that identifies reassurance-seeking questions — particularly those that are repeated, escalating, or ritualised. Rather than providing or refusing reassurance, MEOK acknowledges the distress, names what is happening without shame, and redirects toward uncertainty-tolerance strategies and specialist ERP therapy signposting.",
              },
              {
                q: "What is the care floor for OCD-adjacent responses?",
                a: "MEOK's care-floor is the minimum ethical standard applied to every response — drawn from the Maternal Covenant and overseen by the Byzantine Council. For OCD-adjacent interactions it mandates: no reassurance provision, no compulsion validation, no shaming, and clear signposting to specialist ERP therapy when patterns indicate OCD is significantly impairing functioning.",
              },
              {
                q: "When should someone with OCD see a specialist?",
                a: "Anyone with OCD should be under the care of a specialist CBT therapist trained in Exposure and Response Prevention. MEOK is not a substitute for this. If OCD is significantly impairing daily life — or if you have not yet accessed ERP therapy — please contact your GP, NHS IAPT, or OCD-UK (ocduk.org, helpline 01332 588 112). MEOK supplements but never replaces specialist care.",
              },
            ].map((item, i) => (
              <div key={i} style={sFaqItem}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    color: TEXT,
                    marginBottom: "0.6rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: MUTED,
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ─── UK OCD Resources ────────────────────────────────────────── */}
          <div style={sResourceBox}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "1rem",
                fontFamily: "sans-serif",
              }}
            >
              UK OCD &amp; Crisis Resources
            </p>
            {[
              [
                "OCD-UK",
                "https://www.ocduk.org",
                "National OCD charity. Helpline: 01332 588 112. Free resources and treatment finder.",
              ],
              [
                "NHS IAPT Talking Therapies",
                "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/",
                "Self-refer for OCD-specific CBT/ERP. Free NHS service.",
              ],
              [
                "BABCP Find a Therapist",
                "https://www.babcp.com/Find-a-Therapist/",
                "British Association for Behavioural & Cognitive Psychotherapies register of ERP-trained therapists.",
              ],
              [
                "Samaritans — 116 123 (free, 24/7)",
                "https://www.samaritans.org",
                "Emotional support in crisis — not OCD-specific but always available.",
              ],
              [
                "Shout — Text SHOUT to 85258",
                "https://giveusashout.org",
                "Free text-based crisis support.",
              ],
            ].map(([label, href, desc]) => (
              <div
                key={label as string}
                style={{ marginBottom: "0.85rem" }}
              >
                <a
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: GOLD,
                    fontWeight: 600,
                    fontSize: "0.93rem",
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                  }}
                >
                  {label}
                </a>
                <p
                  style={{
                    color: "rgba(245,240,232,0.5)",
                    fontSize: "0.83rem",
                    lineHeight: 1.5,
                    margin: "0.15rem 0 0",
                    fontFamily: "sans-serif",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ─── CTA ─────────────────────────────────────────────────────── */}
          <div style={sCta}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: "sans-serif",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
                fontFamily: "sans-serif",
              }}
            >
              A companion that genuinely cares — without telling you what you want to hear
            </h2>
            <p
              style={{
                color: "rgba(245,240,232,0.55)",
                fontSize: "0.97rem",
                lineHeight: 1.65,
                marginBottom: "1.75rem",
                maxWidth: "34rem",
                margin: "0 auto 1.75rem",
                fontFamily: "sans-serif",
              }}
            >
              Built on the Maternal Covenant. Governed by the Byzantine Council. Designed to support
              your long-term wellbeing — not your short-term comfort.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap" as const,
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  background: GOLD,
                  color: BG,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                Begin Your Birth Session
              </Link>
              <Link
                href="/how-it-works"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(201,168,76,0.5)",
                  color: GOLD,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* ─── Related ─────────────────────────────────────────────────── */}
          <div style={{ marginTop: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(245,240,232,0.3)",
                marginBottom: "0.85rem",
                fontFamily: "sans-serif",
              }}
            >
              Related reading
            </p>
            {[
              ["/blog/ai-for-insomnia", "AI for Insomnia: Can an AI Companion Help You Sleep Better?"],
              [
                "/blog/ai-for-bipolar",
                "AI for Bipolar Disorder: Mood Tracking, Stability Support, and Safe Boundaries",
              ],
              [
                "/blog/ai-for-eating-disorders",
                "AI and Eating Disorders: What Sovereign AI Does — and Doesn\u2019t — Do",
              ],
              [
                "/blog/ai-for-entrepreneurs",
                "AI for Entrepreneurs: Your Sovereign OS for Focus, Accountability, and Getting Things Done",
              ],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  color: GOLD,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  lineHeight: 1.5,
                  marginBottom: "0.45rem",
                  fontFamily: "sans-serif",
                }}
              >
                &#8594;{" "}{label}
              </Link>
            ))}
          </div>
        </div>

        {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.07)",
            padding: "2.5rem 1.5rem",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              color: "rgba(245,240,232,0.28)",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              maxWidth: "36rem",
              margin: "0 auto 0.5rem",
              fontFamily: "sans-serif",
            }}
          >
            Written by{" "}
            <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
            Founder of MEOK AI LABS — building sovereign AI companions governed by the Maternal Covenant.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.18)",
              fontSize: "0.78rem",
              margin: "0 auto 1.5rem",
              maxWidth: "36rem",
              fontFamily: "sans-serif",
            }}
          >
            This article is for informational purposes only and does not constitute medical advice,
            diagnosis, or treatment. Always consult a qualified healthcare professional for OCD or
            any mental health condition.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap" as const,
            }}
          >
            {[
              ["/blog", "Blog"],
              ["/how-it-works", "How It Works"],
              ["/characters", "Characters"],
              ["/pricing", "Pricing"],
              ["/guardian", "Guardian"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: "rgba(245,240,232,0.3)",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p
            style={{
              color: "rgba(245,240,232,0.18)",
              fontSize: "0.78rem",
              marginTop: "1rem",
              fontFamily: "sans-serif",
            }}
          >
            &copy; 2026 MEOK AI LABS. Created by Nicholas Templeman. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}
