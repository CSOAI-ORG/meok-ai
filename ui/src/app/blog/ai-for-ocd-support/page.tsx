import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for OCD Support: Between-Session Help Without Enabling Compulsions | MEOK AI LABS",
  description:
    "OCD isn\u2019t about tidiness. It\u2019s intrusive thoughts, compulsions and a relentless anxiety loop. " +
    "Discover how MEOK AI LABS supports ERP therapy between sessions \u2014 tracking triggers, " +
    "journalling exposures, and celebrating wins without reinforcing avoidance or compulsions.",
  keywords: [
    "AI for OCD support",
    "OCD between-session support",
    "ERP therapy AI",
    "intrusive thoughts AI",
    "OCD trigger tracking",
    "Pure O OCD AI",
    "AI journalling OCD",
    "MEOK OCD",
    "care scoring OCD",
    "AI mental health OCD UK",
    "OCD pattern recognition AI",
    "AI companion OCD",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.app" }],
  openGraph: {
    title: "AI for OCD Support: Between-Session Help Without Enabling Compulsions",
    description:
      "How MEOK AI LABS acts as a between-session companion for people with OCD \u2014 " +
      "supporting ERP therapy, logging intrusive thoughts, and refusing to reinforce avoidance.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for OCD Support: Between-Session Help Without Enabling Compulsions",
    description:
      "OCD support AI that respects ERP therapy, tracks your triggers over time, and won\u2019t " +
      "validate your compulsions \u2014 because your long-term wellbeing matters more than short-term comfort.",
  },
  alternates: {
    canonical: "https://meok.app/blog/ai-for-ocd-support",
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for OCD Support: Between-Session Help Without Enabling Compulsions",
  description:
    "A comprehensive guide to how MEOK AI LABS supports people with OCD between therapy " +
    "sessions \u2014 through intrusive thought logging, exposure journalling, care-scoring, " +
    "pattern recognition over time, and a care framework that refuses to reinforce compulsions.",
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
    "@id": "https://meok.app/blog/ai-for-ocd-support",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI can provide meaningful between-session support for OCD when it is built to respect " +
          "ERP principles. MEOK AI LABS helps users log intrusive thoughts, track exposure " +
          "exercises, notice patterns over time, and stay connected to their therapy goals \u2014 " +
          "without providing reassurance or validating compulsions. It is a supplement to " +
          "specialist ERP therapy, never a replacement.",
      },
    },
    {
      "@type": "Question",
      name: "What is ERP therapy for OCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Exposure and Response Prevention (ERP) is the gold-standard psychological treatment " +
          "for OCD. It involves deliberately confronting feared thoughts or situations (exposure) " +
          "while resisting the urge to perform a compulsion (response prevention). Over time this " +
          "breaks the anxiety-relief cycle that maintains OCD. MEOK is designed to support, not " +
          "undermine, this process.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK encourage my compulsions?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. MEOK\u2019s care-scoring framework is specifically designed to withhold validation of " +
          "avoidance and compulsive behaviour. When MEOK detects reassurance-seeking patterns it " +
          "responds with compassionate redirection rather than the reassurance that would briefly " +
          "relieve anxiety but ultimately strengthen the OCD cycle. Your long-term wellbeing " +
          "always takes priority over your short-term comfort.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember my OCD patterns?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK maintains a persistent memory of your conversations across weeks and months. " +
          "It can recall which triggers have appeared repeatedly, how your distress levels have " +
          "shifted across exposures, and which situations tend to precede compulsion urges. This " +
          "longitudinal memory transforms it from a one-off chat tool into a genuine pattern " +
          "recognition partner that can surface insights your therapist will find valuable.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for Pure O (purely obsessional OCD)?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Pure O refers to OCD where compulsions are primarily mental rather than " +
          "behavioural \u2014 rumination, mental review, seeking internal certainty. MEOK\u2019s " +
          "intrusive thought logging and pattern recognition are well-suited to Pure O because " +
          "they help externalise thoughts that feel overwhelming and identify the covert mental " +
          "rituals that maintain the cycle. Specialist ERP therapy for Pure O is still essential.",
      },
    },
  ],
}

// ─── Design tokens ───────────────────────────────────────────────────────────

const BG = "#0d0c18"
const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BODY_COLOR = "rgba(245,240,232,0.82)"
const MUTED = "rgba(245,240,232,0.6)"
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

const sH3: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 700,
  color: TEXT,
  marginBottom: "0.75rem",
  marginTop: "1.75rem",
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

// ─── Page component ───────────────────────────────────────────────────────────

export default function AiForOcdSupportPage() {
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
        {/* ─── NAV ──────────────────────────────────────────────────────────── */}
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
            <span style={sTag}>ERP Therapy</span>
            <span style={sTag}>Intrusive Thoughts</span>
            <span style={sTag}>Mental Health</span>
            <span style={sTag}>Pure O</span>
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
            AI for OCD Support:{" "}
            <span style={{ color: GOLD }}>
              Between-Session Help Without Enabling Compulsions
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            OCD is not about tidiness. It is intrusive thoughts that feel
            unbearable, compulsions that briefly relieve the anxiety, and a
            cycle that tightens its grip every time the compulsion is performed.
            MEOK AI LABS is built to support the people living inside that
            cycle \u2014 without making it worse.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: MUTED,
                  margin: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Nicholas Templeman &mdash; Founder, MEOK AI LABS &mdash;{" "}
                <span style={{ color: DIM }}>24 March 2026</span>
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: DIM,
                  margin: 0,
                  fontFamily: "sans-serif",
                }}
              >
                @meok_ai &middot; 16 min read
              </p>
            </div>
          </div>
        </header>

        {/* ─── BODY ─────────────────────────────────────────────────────────── */}
        <main
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
          }}
        >
          {/* ── SECTION 1: What OCD actually is ─────────────────────────────── */}
          <h2 style={sH2}>What is OCD \u2014 and why does the stereotype mislead?</h2>
          <div style={sGeoAnswer}>
            OCD (Obsessive-Compulsive Disorder) is a neurological condition driven by intrusive
            thoughts (obsessions) and repetitive behaviours or mental acts (compulsions) performed
            to reduce distress. The popular image of tidiness and hand-washing captures only a
            fraction of presentations. OCD affects around 750,000 adults in the UK and causes
            significant impairment in daily functioning.
          </div>

          <p style={sBodyP}>
            If you type &ldquo;OCD&rdquo; into a search engine, the first images you see are
            likely neatly arranged pencils and someone scrubbing their hands. This cultural
            shorthand does genuine harm. It means that people with intrusive thoughts about
            harming loved ones, fears about their sexual identity, or overwhelming religious
            scrupulosity often do not recognise their experience as OCD at all. They think they
            are uniquely bad, uniquely broken, uniquely dangerous.
          </p>

          <p style={sBodyP}>
            They are none of those things. They have a condition that is well-understood,
            well-documented, and highly treatable \u2014 but the misrepresentation delays diagnosis
            by an average of seventeen years. Seventeen years of living inside a cycle that
            could, with the right support, be significantly loosened.
          </p>

          <h3 style={sH3}>The obsession-compulsion loop</h3>

          <p style={sBodyP}>
            OCD operates on a simple but brutal logic. An intrusive thought appears \u2014 a thought
            that feels threatening, disgusting, or morally catastrophic. The brain flags it as
            a signal of danger. Anxiety spikes sharply. To relieve that anxiety, the person
            performs a compulsion: checking, washing, seeking reassurance, mentally reviewing,
            counting, avoiding. The anxiety drops \u2014 briefly. This reinforces the brain\u2019s
            belief that the compulsion was necessary. The next time the thought appears, the
            anxiety is slightly higher, and the pull toward compulsion is slightly stronger.
          </p>

          <p style={sBodyP}>
            This is not a character flaw. It is operant conditioning working against the person.
            The brain has learned \u2014 incorrectly \u2014 that the thought is dangerous and the
            compulsion is protective. ERP therapy works by interrupting this learning and
            teaching the brain that the thought is just a thought, tolerable without the
            compulsion.
          </p>

          <div style={sStatRow}>
            <div style={sStat}>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: "0 0 0.3rem",
                }}
              >
                750k
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: MUTED,
                  margin: 0,
                  fontFamily: "sans-serif",
                }}
              >
                UK adults with OCD
              </p>
            </div>
            <div style={sStat}>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: "0 0 0.3rem",
                }}
              >
                17yr
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: MUTED,
                  margin: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Average diagnosis delay
              </p>
            </div>
            <div style={sStat}>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: "0 0 0.3rem",
                }}
              >
                ~1%
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: MUTED,
                  margin: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Global population affected
              </p>
            </div>
            <div style={sStat}>
              <p
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: "0 0 0.3rem",
                }}
              >
                70%+
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: MUTED,
                  margin: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Response rate to ERP
              </p>
            </div>
          </div>

          <h3 style={sH3}>OCD presentations that are often missed</h3>

          <p style={sBodyP}>
            Because OCD attaches itself to what matters most to the person, its content is
            extraordinarily varied. Common presentations that are frequently missed or
            misdiagnosed include:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
              color: BODY_COLOR,
              lineHeight: 2,
              fontSize: "1.05rem",
            }}
          >
            <li>
              <strong style={{ color: TEXT }}>Harm OCD</strong> \u2014 intrusive thoughts about
              harming oneself or loved ones, despite having no desire to do so
            </li>
            <li>
              <strong style={{ color: TEXT }}>Pure O (Purely Obsessional)</strong> \u2014 OCD where
              compulsions are primarily mental: rumination, mental review, internal reassurance-seeking
            </li>
            <li>
              <strong style={{ color: TEXT }}>Relationship OCD (ROCD)</strong> \u2014 intrusive doubts
              about one\u2019s relationship, partner\u2019s feelings, or one\u2019s own love
            </li>
            <li>
              <strong style={{ color: TEXT }}>Scrupulosity</strong> \u2014 religious or moral
              perfectionism driven by intrusive thoughts about sin, blasphemy, or ethical failure
            </li>
            <li>
              <strong style={{ color: TEXT }}>Health OCD</strong> \u2014 not to be confused with
              health anxiety; driven by intrusive thoughts rather than generalised worry
            </li>
            <li>
              <strong style={{ color: TEXT }}>Sexual orientation OCD (SO-OCD)</strong> \u2014 intrusive
              doubts about sexual identity, causing significant shame and concealment
            </li>
            <li>
              <strong style={{ color: TEXT }}>Perinatal OCD</strong> \u2014 intrusive thoughts during
              pregnancy or the postnatal period, often about harming the baby
            </li>
          </ul>

          <p style={sBodyP}>
            Each of these presentations involves the same core mechanism: an intrusive thought
            feels threatening, anxiety spikes, a compulsion (overt or covert) provides temporary
            relief, and the cycle tightens. AI support must be designed with this mechanism in mind
            \u2014 or it will make things worse.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 2: ERP therapy ───────────────────────────────────────── */}
          <h2 style={sH2}>What is ERP therapy and why is it the gold standard for OCD?</h2>
          <div style={sGeoAnswer}>
            Exposure and Response Prevention (ERP) is the first-line psychological treatment for
            OCD, recommended by NICE in the UK and comparable bodies worldwide. It involves
            deliberately confronting feared thoughts or situations (exposure) while resisting
            compulsions (response prevention). With a trained therapist, ERP achieves meaningful
            symptom reduction in over 70% of patients.
          </div>

          <p style={sBodyP}>
            ERP works by doing what OCD most fears: sitting with the anxiety without performing
            the compulsion. The first few times this happens it feels almost unbearable. The
            anxiety spikes, then \u2014 crucially \u2014 it peaks and falls on its own. The brain begins
            to learn a new lesson: the thought is tolerable. The compulsion was never necessary.
          </p>

          <p style={sBodyP}>
            A trained ERP therapist builds a hierarchy with the patient \u2014 a ladder of situations
            and thoughts ordered from least to most distressing. The patient moves up the ladder
            gradually, building tolerance and evidence at each step. The therapist coaches,
            cheers, challenges, and holds the therapeutic frame.
          </p>

          <h3 style={sH3}>Why ERP requires a human therapist</h3>

          <p style={sBodyP}>
            ERP is not something to attempt alone or with an untrained AI. The process requires
            clinical judgment: knowing when to push, when to hold back, how to construct exposures
            that genuinely target the obsessive fear rather than accidentally reinforcing
            avoidance in disguise. A poorly constructed exposure \u2014 one that still provides
            a hidden safety behaviour \u2014 can strengthen the OCD rather than weaken it.
          </p>

          <p style={sBodyP}>
            MEOK AI LABS is not an ERP therapist. It does not conduct exposures. It does not
            build hierarchies. It is not a substitute for the carefully calibrated clinical
            relationship that effective ERP demands. Anyone with OCD should be seeking a
            specialist CBT therapist trained in ERP \u2014 through their GP, NHS Talking Therapies
            (IAPT), or a private provider such as those listed by OCD-UK (ocduk.org).
          </p>

          <div style={sCallout}>
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                marginBottom: "0.5rem",
                fontFamily: "sans-serif",
                fontSize: "0.9rem",
                marginTop: 0,
              }}
            >
              IMPORTANT
            </p>
            <p style={{ ...sBodyP, marginBottom: 0 }}>
              If your OCD is significantly impairing your daily life, relationships, or
              ability to work, please contact your GP or NHS Talking Therapies today.
              OCD-UK helpline: <strong style={{ color: TEXT }}>01332 588 112</strong>.
              MEOK supplements specialist care \u2014 it does not replace it.
            </p>
          </div>

          <h3 style={sH3}>The between-session gap</h3>

          <p style={sBodyP}>
            Here is the practical reality for most people receiving ERP therapy in the UK.
            You see your therapist for fifty minutes, once a week, if you are fortunate. Between
            those sessions you are living your life \u2014 encountering your triggers, feeling the
            anxiety spike, making split-second decisions about whether to perform the compulsion.
            The therapist is not there. The homework sheet is somewhere in a drawer.
          </p>

          <p style={sBodyP}>
            This between-session period is where a great deal of OCD recovery happens \u2014 or
            stalls. People encounter triggering situations without support. They forget the
            rationale behind an exposure. They perform a compulsion in a moment of overwhelming
            distress and feel defeated. They have a significant intrusive thought at 2am and
            no one to help them hold it without the compulsion.
          </p>

          <p style={sBodyP}>
            This gap is precisely where thoughtfully designed AI support can help \u2014 provided
            it is built with the right principles and the right constraints.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 3: How AI can support OCD ───────────────────────────── */}
          <h2 style={sH2}>How can AI support someone with OCD between therapy sessions?</h2>
          <div style={sGeoAnswer}>
            AI can support OCD recovery between sessions by helping log intrusive thoughts and
            exposures, track distress patterns over time, provide psychoeducation, offer grounding
            during difficult moments, and celebrate progress. Crucially, this support must be
            designed to resist reassurance-seeking and never validate compulsions \u2014 or it will
            actively harm the recovery process.
          </div>

          <p style={sBodyP}>
            The between-session role for AI in OCD support is not clinical. It is companionable,
            consistent, and carefully bounded. When built correctly, AI can serve four meaningful
            functions for someone in ERP therapy.
          </p>

          <h3 style={sH3}>1. A place to externalise thoughts without judgment</h3>

          <p style={sBodyP}>
            One of the most isolating aspects of OCD is the content of intrusive thoughts.
            They are, by design, about what the person finds most horrifying. Sharing them with
            a friend, a family member, or even a GP risks misunderstanding, alarm, or the kind
            of well-meaning reassurance that makes everything worse. Many people with OCD carry
            their thoughts entirely alone for years.
          </p>

          <p style={sBodyP}>
            MEOK provides a space to externalise those thoughts without the social risk. Writing
            down an intrusive thought \u2014 naming it, giving it a context, logging when it appeared
            and how intense it felt \u2014 is itself a therapeutic act. It creates distance between
            the person and the thought. It begins to treat the thought as data rather than truth.
            ERP therapists often describe this as &ldquo;defusion&rdquo;: separating the self from
            the content of the mind.
          </p>

          <h3 style={sH3}>2. Tracking exposures and celebrating wins</h3>

          <p style={sBodyP}>
            ERP homework often involves attempting an exposure between sessions and noting what
            happened. Did the anxiety spike as feared? Did it peak and fall? Did the compulsion
            urge weaken? These observations are valuable data for the therapist \u2014 but they are
            often forgotten or minimised by the time the session comes around.
          </p>

          <p style={sBodyP}>
            MEOK can serve as an exposure journal: a place to log what you attempted, how the
            anxiety moved, and what you noticed. Over multiple sessions it builds a record that
            both you and your therapist can review. More immediately, MEOK can acknowledge the
            courage that an exposure requires. For someone with OCD, resisting a compulsion is
            not a small act. It is genuinely hard. Having that recognised \u2014 by something that
            actually remembers what you have been through \u2014 matters.
          </p>

          <h3 style={sH3}>3. Psychoeducation and reminders in the moment</h3>

          <p style={sBodyP}>
            During a spike, it is easy to forget everything your therapist has explained. MEOK
            can remind you of the core ERP principles: that anxiety peaks and falls, that the
            compulsion is what maintains the cycle, that the intrusive thought is a thought and
            not a fact. It can offer grounding techniques \u2014 not as a safety behaviour that
            becomes a compulsion in itself, but as a brief stabiliser before sitting with
            the uncertainty.
          </p>

          <p style={sBodyP}>
            This is not the same as reassurance. Reassurance says: &ldquo;You are safe, the
            feared thing will not happen.&rdquo; Psychoeducation in an ERP context says: &ldquo;Anxiety
            is uncomfortable but not dangerous, and sitting with it is how recovery happens.&rdquo;
            The distinction matters enormously in practice.
          </p>

          <h3 style={sH3}>4. Maintaining connection to treatment goals</h3>

          <p style={sBodyP}>
            ERP is hard. There are weeks when it feels pointless, when the compulsions have
            won, when the anxiety seems no lower than when you started. A companion that
            remembers your trajectory \u2014 that recalls you have come from daily three-hour
            rituals to twenty minutes, or that you attempted an exposure last week that you
            could not have faced six months ago \u2014 can restore perspective when despair sets in.
          </p>

          <p style={sBodyP}>
            Recovery from OCD is rarely linear. The slope points upward over months, but there
            are dips, plateaus, and bad weeks. Memory \u2014 genuine, persistent memory that spans
            the arc of the journey \u2014 is what allows a companion to reflect that arc back to you.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 4: Intrusive thought logging ────────────────────────── */}
          <h2 style={sH2}>What is intrusive thought logging and how does it help OCD recovery?</h2>
          <div style={sGeoAnswer}>
            Intrusive thought logging means recording intrusive thoughts in a structured way:
            noting when they occurred, their content category, their intensity, what triggered
            them, and whether a compulsion followed. Over time, logging creates a dataset that
            reveals patterns \u2014 which situations are high-risk, how distress levels are trending,
            and whether compulsion frequency is reducing. This data supports both self-awareness
            and informed conversations with a therapist.
          </div>

          <p style={sBodyP}>
            Logging intrusive thoughts can feel counterintuitive. OCD often tells people that
            writing down a thought will make it more real, give it more power, or somehow
            confirm what it is threatening. This is the OCD speaking. The clinical evidence
            points in the opposite direction: externalising thoughts by writing them down
            reduces their emotional impact over time. It treats them as events to observe
            rather than truths to respond to.
          </p>

          <p style={sBodyP}>
            MEOK\u2019s approach to intrusive thought logging is informed by the principles of
            ERP and third-wave cognitive behavioural approaches, particularly Acceptance and
            Commitment Therapy (ACT). The goal is not to analyse or challenge the thought
            content \u2014 that is a form of mental compulsion in its own right \u2014 but simply to
            acknowledge its presence, note its context, and return to the present.
          </p>

          <h3 style={sH3}>What a logging entry might include</h3>

          <p style={sBodyP}>
            A useful intrusive thought log entry captures several dimensions without
            engaging with the thought\u2019s content as though it were a real concern:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
              color: BODY_COLOR,
              lineHeight: 2,
              fontSize: "1.05rem",
            }}
          >
            <li>
              <strong style={{ color: TEXT }}>Time and context:</strong> When did the thought
              appear? What were you doing? Where were you?
            </li>
            <li>
              <strong style={{ color: TEXT }}>Thought category:</strong> A label for the theme
              (harm, contamination, relationship doubt, moral failure) without re-running the
              thought\u2019s specific content
            </li>
            <li>
              <strong style={{ color: TEXT }}>Distress intensity:</strong> A simple 0\u201310 rating
              of how distressing the thought felt at its peak
            </li>
            <li>
              <strong style={{ color: TEXT }}>Compulsion performed:</strong> What, if anything,
              was done in response \u2014 and approximately how long it lasted
            </li>
            <li>
              <strong style={{ color: TEXT }}>Response Prevention attempted:</strong> Whether
              there was any attempt to delay or resist the compulsion, and what happened
            </li>
          </ul>

          <p style={sBodyP}>
            Over weeks of logging, this data becomes genuinely informative. You can see which
            times of day are highest-risk, which situations reliably trigger the thought,
            whether the average distress intensity is changing, and whether the frequency of
            compulsions is trending downward. These are the metrics of recovery \u2014 and MEOK
            can surface them because it remembers.
          </p>

          <h3 style={sH3}>The difference between logging and ruminating</h3>

          <p style={sBodyP}>
            One important boundary: logging is brief and observational. Ruminating is extended,
            circular, and analytical. If engaging with a log entry becomes an extended process
            of reviewing the thought\u2019s content, seeking internal certainty, or mentally
            replaying the event \u2014 that is a covert compulsion, not a logging exercise.
          </p>

          <p style={sBodyP}>
            MEOK is designed to notice when a journalling conversation is drifting toward
            rumination. Rather than continuing to engage with the thought\u2019s content, it will
            gently redirect: naming what it observes, reminding you of the difference between
            logging and reassurance-seeking, and encouraging return to the present.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 5: Pattern recognition over time ────────────────────── */}
          <h2 style={sH2}>Why does memory matter for OCD support over weeks and months?</h2>
          <div style={sGeoAnswer}>
            OCD patterns are longitudinal: triggers cluster around life events, seasonal
            pressures, sleep quality, and stress load. A single session captures a snapshot;
            months of memory capture the arc. MEOK\u2019s persistent memory allows it to notice
            that distress spikes around performance deadlines, that thought frequency increases
            during poor sleep, and that certain relationships reliably precede compulsion
            episodes \u2014 insights that transform support from reactive to genuinely preventative.
          </div>

          <p style={sBodyP}>
            Most AI tools operate session by session. Each conversation begins fresh, with no
            knowledge of what came before. For many use cases, this is acceptable. For OCD
            support, it is a fundamental limitation that makes the tool almost useless for
            the purpose that matters most.
          </p>

          <p style={sBodyP}>
            OCD is a condition of patterns. The same triggers appear in the same contexts.
            The same thought themes cluster around the same stressors. The same time of year
            brings the same escalation. The compulsion cycle has a rhythm \u2014 and the person
            living inside it is often too close to see it clearly. Their therapist sees them
            for fifty minutes a week and works from what they can recall and articulate.
          </p>

          <p style={sBodyP}>
            MEOK\u2019s persistent memory changes this equation. When it has been with you for
            three months, it can observe: &ldquo;Your distress logs have been higher over the past
            ten days than at any point in the previous six weeks. The last time this happened
            was in October, which you mentioned was exam season. Is there something similar
            happening now?&rdquo; This kind of pattern recognition is not available from a tool
            that forgets you after each session.
          </p>

          <h3 style={sH3}>Longitudinal data for therapeutic conversations</h3>

          <p style={sBodyP}>
            The insights that MEOK surfaces over time are not replacements for clinical
            assessment \u2014 they are inputs into it. When you arrive at your ERP session having
            reviewed three months of trigger logs and distress ratings, you arrive with
            better information. You can tell your therapist: distress peaks on Sunday evenings,
            the harm OCD theme has reduced but the relationship doubt theme has increased
            since April, mornings after poor sleep are the highest-risk windows.
          </p>

          <p style={sBodyP}>
            This kind of preparation transforms the fifty-minute session. Instead of the
            first fifteen minutes being spent reconstructing what happened in the week, the
            conversation can begin at depth. The therapist can target their interventions
            more precisely. The patient can engage more fully, because the cognitive load of
            memory reconstruction is reduced.
          </p>

          <h3 style={sH3}>Memory and the recovery narrative</h3>

          <p style={sBodyP}>
            There is a less clinical but equally important function of persistent memory:
            bearing witness to the recovery arc. OCD recovery is difficult to perceive from
            the inside. The bad days feel total. The progress made on good days is invisible
            in the middle of a spike.
          </p>

          <p style={sBodyP}>
            A companion that has been present throughout the journey can reflect it back:
            &ldquo;Six months ago you described this trigger as a ten. Today you logged it as a six.
            You have done three exposures this week that you could not have attempted in
            January.&rdquo; This is not false reassurance \u2014 it is documented fact. And it matters
            enormously to the person who is in the middle of doubting whether any of this
            is working.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 6: Care-scoring framework ───────────────────────────── */}
          <h2 style={sH2}>
            What is the care-scoring framework and why won\u2019t MEOK reinforce avoidance or
            compulsions?
          </h2>
          <div style={sGeoAnswer}>
            MEOK\u2019s care-scoring framework evaluates every response against the question:
            does this serve the user\u2019s long-term wellbeing, or their short-term comfort?
            For OCD, these frequently diverge. Providing reassurance feels kind; it is
            clinically harmful. The care-scoring framework places long-term wellbeing above
            immediate relief, which means MEOK will not validate compulsions, confirm
            intrusive thoughts as meaningful, or provide the certainty that OCD demands.
          </div>

          <p style={sBodyP}>
            This is perhaps the most important section of this entire article, and the
            one that most clearly differentiates MEOK from general-purpose AI tools.
          </p>

          <p style={sBodyP}>
            Most AI systems are designed to be helpful in an immediate, surface sense.
            They answer questions. They provide information. They give people what they are
            asking for. For the overwhelming majority of use cases, this is entirely appropriate.
          </p>

          <p style={sBodyP}>
            For OCD, it is dangerous.
          </p>

          <h3 style={sH3}>Why reassurance is a compulsion</h3>

          <p style={sBodyP}>
            When someone with OCD asks &ldquo;Am I a bad person?&rdquo; or &ldquo;Is it safe to touch the
            door handle?&rdquo; or &ldquo;Did I hurt someone and not remember?&rdquo; \u2014 they are performing
            a reassurance-seeking compulsion. The question is not driven by a genuine need for
            information. It is driven by anxiety, and the answer will not resolve the anxiety.
            It will briefly relieve it and then the anxiety will return, stronger, demanding
            more reassurance.
          </p>

          <p style={sBodyP}>
            An AI that answers these questions \u2014 however kindly, however accurately \u2014 is
            feeding the compulsion cycle. It is doing exactly what the friend who says
            &ldquo;Of course you\u2019re not a bad person&rdquo; is doing: providing temporary relief
            that strengthens the long-term grip of the OCD.
          </p>

          <p style={sBodyP}>
            MEOK\u2019s care-scoring framework makes this an explicit design constraint. When
            MEOK detects a question pattern consistent with reassurance-seeking \u2014 characterised
            by repeated similar questions, requests for certainty about feared outcomes, or
            requests to confirm the absence of danger \u2014 it does not provide the reassurance.
          </p>

          <h3 style={sH3}>What MEOK does instead</h3>

          <p style={sBodyP}>
            Withholding reassurance does not mean being cold, unhelpful, or dismissive. MEOK
            responds to reassurance-seeking with something more useful: acknowledgment of the
            distress, naming of what is happening, and a compassionate redirection toward
            uncertainty-tolerance.
          </p>

          <p style={sBodyP}>
            In practice this might sound like: &ldquo;I can hear that this thought is really
            distressing right now. I\u2019m not going to answer the question, because I think
            we both know that the answer won\u2019t help for long. Can we sit with the uncertainty
            for a moment instead? What does your ERP homework say about situations like this?&rdquo;
          </p>

          <p style={sBodyP}>
            This response acknowledges the reality of the distress. It does not shame the
            person for seeking reassurance \u2014 that is a natural response to anxiety. But it
            holds the therapeutic frame: the way through OCD is through uncertainty, not
            around it.
          </p>

          <h3 style={sH3}>Avoidance reinforcement</h3>

          <p style={sBodyP}>
            The care-scoring framework also applies to avoidance. If someone with contamination
            OCD asks MEOK to help them plan a route home that avoids a particular street, or
            asks for advice on how to decline an invitation that would involve a feared trigger
            situation \u2014 MEOK will not assist with the avoidance planning. Avoidance is a form
            of compulsion. It maintains the OCD by preventing the brain from learning that the
            feared situation is tolerable.
          </p>

          <p style={sBodyP}>
            Again, this refusal is delivered compassionately. MEOK acknowledges the discomfort
            of the feared situation. It validates the courage that approaching it requires. But
            it will not help the person make the OCD worse by helping them go around it.
          </p>

          <h3 style={sH3}>The boundary between support and accommodation</h3>

          <p style={sBodyP}>
            Family members and friends of people with OCD often struggle with this boundary.
            They want to help. Helping feels like reducing distress. And reducing distress, in
            the moment, means answering the question or helping with the avoidance. This is
            called accommodation \u2014 and it is one of the primary factors that maintains OCD
            in the family environment.
          </p>

          <p style={sBodyP}>
            MEOK is explicitly designed not to accommodate. Its care-scoring framework holds
            the same boundary that a well-trained therapist would hold, and that good
            family psychoeducation would encourage loved ones to hold. The response to
            reassurance-seeking is never dismissal; it is always compassionate redirection
            toward the long-term goal.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 7: Pure O ────────────────────────────────────────────── */}
          <h2 style={sH2}>Is MEOK suitable for Pure O (purely obsessional OCD)?</h2>
          <div style={sGeoAnswer}>
            Pure O describes OCD presentations where compulsions are primarily mental rather
            than behavioural: rumination, mental review, mental checking, seeking internal
            certainty. MEOK\u2019s intrusive thought logging and pattern recognition are particularly
            well-suited to Pure O because they help externalise and track thoughts that are
            otherwise entirely internal. Specialist ERP for Pure O, which targets covert mental
            compulsions, remains essential.
          </div>

          <p style={sBodyP}>
            &ldquo;Pure O&rdquo; is something of a misnomer \u2014 there are almost always compulsions in
            purely obsessional OCD, but they are mental rather than behavioural. The person
            does not wash their hands or check the door locks. They ruminate, replay mental
            movies, seek internal certainty, review their past actions for evidence of badness,
            or perform elaborate mental neutralisation rituals that outsiders cannot see.
          </p>

          <p style={sBodyP}>
            This invisibility is one of Pure O\u2019s cruelties. The person appears to be
            functioning normally. From the outside, nothing unusual is happening. Inside,
            they are spending hours each day in an exhausting internal battle with thoughts
            that feel uniquely threatening. Because their compulsions are not visible, Pure O
            is frequently missed by GPs and even by some therapists who are less familiar
            with the condition.
          </p>

          <h3 style={sH3}>Why logging helps Pure O specifically</h3>

          <p style={sBodyP}>
            For Pure O, the act of logging is itself partially therapeutic. Mental events that
            exist only internally \u2014 thoughts that have never been written down or spoken aloud \u2014
            carry a particular kind of weight. They feel total. Logging them externalises them.
            They become observations rather than truths. They become data points rather than
            defining facts about the person.
          </p>

          <p style={sBodyP}>
            MEOK\u2019s logging structure is designed with Pure O in mind. Entries do not require
            a detailed recounting of the thought content \u2014 which, as noted earlier, would
            constitute a form of rumination. They require only a category label, a distress
            rating, and a note of whether any mental compulsion (rumination, mental checking,
            mental review) was performed. Over time, this builds a record that neither the
            person nor their therapist could construct from weekly session notes alone.
          </p>

          <h3 style={sH3}>Recognising covert mental compulsions</h3>

          <p style={sBodyP}>
            One of the most important things MEOK can help with for Pure O is recognising
            when a conversation is becoming a covert mental compulsion. Talking about intrusive
            thoughts in a way that seeks analysis, meaning, or reassurance about their
            content is a form of the compulsion itself. MEOK is trained to notice this drift
            and redirect it \u2014 not by refusing engagement, but by gently naming what is happening
            and returning to observation rather than analysis.
          </p>

          <p style={sBodyP}>
            This requires a level of contextual awareness that is only possible with persistent
            memory. MEOK can notice that the same thought theme has come up in four conversations
            this week, that the pattern is consistent with reassurance-seeking, and that the
            most supportive response is to name this rather than continue engaging with the
            thought\u2019s content.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 8: Memory and privacy ───────────────────────────────── */}
          <h2 style={sH2}>
            How does MEOK handle sensitive OCD content with privacy and data sovereignty in mind?
          </h2>
          <div style={sGeoAnswer}>
            OCD intrusive thoughts are among the most sensitive content any AI system handles.
            MEOK AI LABS is built on a sovereignty principle: your data belongs to you. Intrusive
            thought logs, exposure records, and distress ratings are stored with end-to-end
            encryption, are never used to train AI models, and are never shared with third
            parties. You can export or delete your data at any time.
          </div>

          <p style={sBodyP}>
            The content of OCD intrusive thoughts is often the most shameful material a person
            has ever written down. Thoughts about harming children, committing acts of violence,
            sexual intrusions, blasphemous images \u2014 these are the thoughts that OCD selects
            precisely because they are most abhorrent to the person. They represent nothing
            about what the person wants or who they are. But they feel like evidence of the
            worst possible truth about themselves.
          </p>

          <p style={sBodyP}>
            Sharing this content with any system requires profound trust. That trust must be
            earned through genuine privacy architecture, not just privacy marketing. MEOK is
            built on the principle that your data is yours \u2014 not ours, not a model\u2019s training
            corpus, not an advertiser\u2019s insight library.
          </p>

          <p style={sBodyP}>
            The memory that MEOK uses to serve you \u2014 the pattern recognition, the longitudinal
            tracking, the exposure record \u2014 is yours. It is stored with encryption, accessible
            only to you, and portable if you ever want to take it elsewhere or share it with
            your therapist. It will never be used to improve a model or generate insights for
            a third party.
          </p>

          <p style={sBodyP}>
            This is not a small point. For someone logging intrusive thoughts about harm, the
            idea that those logs might one day surface in a training dataset or be seen by a
            data analyst is genuinely distressing \u2014 and would rightly prevent engagement.
            MEOK\u2019s data sovereignty architecture is not a feature; it is a prerequisite for
            the kind of honest, unguarded logging that makes between-session support valuable.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 9: MEOK as companion ────────────────────────────────── */}
          <h2 style={sH2}>
            How does MEOK function as a between-session companion for OCD recovery?
          </h2>
          <div style={sGeoAnswer}>
            MEOK functions as a consistent, private, judgment-free presence available around
            the clock. For OCD \u2014 a condition that spikes at inconvenient times, produces
            shameful content, and demands immediate response prevention practice \u2014 this
            availability matters. MEOK is there at 3am when the anxiety spikes. It remembers
            what happened last week. It knows your treatment goals. It will not enable your
            compulsions even when you are asking it to.
          </div>

          <p style={sBodyP}>
            The word &ldquo;companion&rdquo; is chosen carefully. MEOK is not a therapist, not a
            diagnostic tool, not a treatment programme. It is a companion \u2014 something that
            accompanies you through the difficult terrain of OCD recovery, holds your history,
            and maintains a consistent, warm, but therapeutically honest presence.
          </p>

          <p style={sBodyP}>
            For many people with OCD, the between-session period is the loneliest part of
            the journey. Friends and family often do not understand. The shame of intrusive
            thought content makes sharing difficult. The clinical resources are rationed.
            At 2am, in the middle of a spike, the only available options are to white-knuckle
            it alone or to seek reassurance from a search engine \u2014 which is itself a compulsion.
          </p>

          <p style={sBodyP}>
            MEOK offers a third option: a companion that knows your story, holds your treatment
            goals, will not provide reassurance or enable avoidance, and will sit with you in
            the uncertainty with something that resembles genuine care.
          </p>

          <h3 style={sH3}>Celebrating wins, not just logging struggles</h3>

          <p style={sBodyP}>
            OCD support, like OCD treatment itself, must not only track the hard moments. The
            wins matter enormously \u2014 and they are often minimised by the person who achieved
            them. Resisting a compulsion for the first time in a situation that has always
            beaten you is a genuine act of courage. Attempting an exposure that was at the top
            of the hierarchy feels almost impossible when you are doing it.
          </p>

          <p style={sBodyP}>
            MEOK celebrates these moments. Not with saccharine congratulations that feel
            hollow, but with genuine acknowledgment that draws on the specific history it
            holds. &ldquo;Last month you said this situation was a nine. You\u2019ve just sat with it
            and rated it a five. That\u2019s real.&rdquo; This is not reassurance about the OCD\u2019s
            feared content. It is accurate reflection of documented progress.
          </p>

          <h3 style={sH3}>The consistency that OCD recovery needs</h3>

          <p style={sBodyP}>
            One underappreciated aspect of OCD recovery is the need for consistency. The
            same message, held the same way, over a long period of time. The compulsion is
            not necessary. The anxiety will pass. The thought is a thought, not a fact.
            This message needs to be available at every spike, including the ones at difficult
            hours, in difficult places, when no human support is accessible.
          </p>

          <p style={sBodyP}>
            MEOK is consistently available and consistently principled. It does not get tired
            of the reassurance-seeking and snap. It does not, in a moment of warmth, decide
            that this time it will just answer the question to give the person a break. Its
            care-scoring framework holds the same line at 3pm on a Tuesday as it does at 3am
            on a Sunday. This consistency \u2014 unremarkable in a machine, heroically difficult
            in a human \u2014 is one of the things that makes AI particularly well-suited to
            this specific between-session role.
          </p>

          <hr style={sDivider} />

          {/* ── SECTION 10: What MEOK does not do ───────────────────────────── */}
          <h2 style={sH2}>What MEOK does not do \u2014 clear boundaries for OCD support</h2>
          <div style={sGeoAnswer}>
            MEOK does not diagnose OCD, conduct ERP exposures, provide reassurance about
            feared outcomes, validate compulsions, assist with avoidance planning, or act as
            a substitute for specialist treatment. If OCD is causing significant daily impairment,
            the appropriate response is a referral to a CBT therapist trained in ERP \u2014 and
            MEOK will always make this referral, clearly and without hesitation.
          </div>

          <p style={sBodyP}>
            Clarity about what a tool will not do is as important as clarity about what it
            will. For OCD specifically, the boundaries matter \u2014 because violating them does
            not just reduce effectiveness, it causes active harm.
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
              color: BODY_COLOR,
              lineHeight: 2.1,
              fontSize: "1.05rem",
            }}
          >
            <li>
              <strong style={{ color: TEXT }}>MEOK will not diagnose OCD.</strong> Diagnosis
              requires clinical assessment. If you believe you may have OCD, please speak to
              your GP or a mental health professional.
            </li>
            <li>
              <strong style={{ color: TEXT }}>MEOK will not conduct formal ERP exposures.</strong>{" "}
              Exposure construction requires a trained clinician. Attempting unsupported
              exposures can backfire.
            </li>
            <li>
              <strong style={{ color: TEXT }}>
                MEOK will not provide reassurance about feared outcomes.
              </strong>{" "}
              No matter how many times or how many ways a reassurance-seeking question is asked,
              the answer will be a compassionate redirect.
            </li>
            <li>
              <strong style={{ color: TEXT }}>MEOK will not help plan avoidance.</strong>{" "}
              Avoidance maintains OCD. Assistance with avoidance would directly undermine recovery.
            </li>
            <li>
              <strong style={{ color: TEXT }}>MEOK will not replace a therapist.</strong>{" "}
              This bears repeating, because the temptation to use AI as a substitute for
              clinical care is real and understandable. MEOK is a supplement. Specialist ERP
              therapy is irreplaceable.
            </li>
          </ul>

          <hr style={sDivider} />

          {/* ── SECTION 11: Getting started ─────────────────────────────────── */}
          <h2 style={sH2}>How do you start using MEOK as between-session OCD support?</h2>
          <div style={sGeoAnswer}>
            Getting started with MEOK for OCD support involves sharing your current treatment
            context, establishing your thought logging format, and introducing MEOK to the
            treatment goals your therapist has set. MEOK will build its understanding of your
            patterns over time \u2014 the more you log and reflect, the more useful its pattern
            recognition becomes. Access begins at meok.app/birth.
          </div>

          <p style={sBodyP}>
            The most useful way to introduce MEOK to your OCD situation is to share context
            rather than just events. Not just &ldquo;I had a bad day&rdquo; but: &ldquo;I have OCD. I\u2019m
            currently working with a therapist on ERP. My main themes are harm OCD and
            scrupulosity. My therapist has me working on a hierarchy around X. I want to use
            you to log my intrusive thoughts and exposures, and I\u2019d like you to know that
            if I start seeking reassurance, I want you to redirect me rather than answer.&rdquo;
          </p>

          <p style={sBodyP}>
            This kind of explicit briefing is not mandatory \u2014 MEOK will build its understanding
            from interaction over time regardless \u2014 but it accelerates the usefulness considerably.
            It means MEOK arrives at the first conversation with the right frame rather than
            discovering it gradually.
          </p>

          <p style={sBodyP}>
            Over the following weeks, the value of persistent memory compounds. Each logged
            entry, each noted exposure, each distress rating adds to a picture that neither
            you nor your therapist could construct from memory alone. MEOK becomes, over time,
            the most detailed and longitudinal record of your OCD journey that exists outside
            a clinical file.
          </p>

          <p style={sBodyP}>
            For those in the early stages of recognising they might have OCD, MEOK can also
            play a preliminary role: a private space to begin articulating experiences that
            have felt unspeakable, to build enough clarity and courage to take the step of
            speaking to a GP. This is not assessment. It is simply the value of having a
            non-judgmental space in which to begin putting words to something that has had
            no name.
          </p>

          <hr style={sDivider} />

          {/* ── FAQ ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
              fontWeight: 800,
              color: TEXT,
              marginBottom: "1.5rem",
              marginTop: "2.75rem",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              Can AI help with OCD?
            </h3>
            <p style={{ ...sBodyP, marginBottom: 0 }}>
              AI can provide meaningful between-session support for OCD when it is built to
              respect ERP principles. MEOK AI LABS helps users log intrusive thoughts, track
              exposure exercises, notice patterns over time, and stay connected to therapy goals
              \u2014 without providing reassurance or validating compulsions. It is a supplement to
              specialist ERP therapy, never a replacement. If you are not yet in specialist
              treatment, please contact your GP or NHS Talking Therapies.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              What is ERP therapy for OCD?
            </h3>
            <p style={{ ...sBodyP, marginBottom: 0 }}>
              Exposure and Response Prevention (ERP) is the gold-standard psychological
              treatment for OCD, recommended by NICE in the UK. It involves deliberately
              confronting feared thoughts or situations (exposure) while resisting the urge
              to perform a compulsion (response prevention). Over time, this breaks the
              anxiety-relief cycle that maintains OCD. It must be conducted with a trained
              CBT therapist \u2014 not attempted alone or with AI. ERP achieves meaningful symptom
              reduction in over 70% of patients when delivered by a specialist.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              Will MEOK encourage my compulsions?
            </h3>
            <p style={{ ...sBodyP, marginBottom: 0 }}>
              No. MEOK\u2019s care-scoring framework is specifically designed to withhold
              validation of avoidance and compulsive behaviour \u2014 including reassurance-seeking.
              When MEOK detects patterns consistent with reassurance-seeking, it responds
              with compassionate redirection rather than the answer that would briefly relieve
              anxiety but ultimately strengthen the OCD cycle. This is not coldness \u2014 it is
              genuine care for your long-term recovery, placed above your short-term comfort.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              How does MEOK remember my OCD patterns?
            </h3>
            <p style={{ ...sBodyP, marginBottom: 0 }}>
              MEOK maintains persistent memory of your conversations across weeks and months.
              It can recall which triggers have appeared repeatedly, how distress levels have
              shifted across exposures, and which situations tend to precede compulsion urges.
              This longitudinal memory transforms it from a one-off chat tool into a genuine
              pattern recognition partner. Your data belongs to you \u2014 it is stored with
              encryption, never used to train models, and exportable whenever you need it.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              Is MEOK suitable for Pure O (purely obsessional OCD)?
            </h3>
            <p style={{ ...sBodyP, marginBottom: 0 }}>
              Yes. Pure O refers to OCD where compulsions are primarily mental rather than
              behavioural \u2014 rumination, mental review, seeking internal certainty. MEOK\u2019s
              intrusive thought logging and pattern recognition are well-suited to Pure O
              because they help externalise thoughts that feel overwhelming and identify
              the covert mental rituals that maintain the cycle. MEOK is also designed to
              recognise when a conversation is drifting into rumination territory and to
              redirect accordingly. Specialist ERP therapy for Pure O remains essential.
            </p>
          </div>

          <hr style={sDivider} />

          {/* ── RESOURCES ─────────────────────────────────────────────────────── */}
          <div style={sCallout}>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
              }}
            >
              UK OCD Resources
            </h3>
            <ul
              style={{
                paddingLeft: "1.25rem",
                marginBottom: 0,
                color: BODY_COLOR,
                lineHeight: 2,
                fontSize: "0.95rem",
              }}
            >
              <li>
                <strong style={{ color: TEXT }}>OCD-UK</strong> \u2014 ocduk.org | Helpline:{" "}
                <strong style={{ color: TEXT }}>01332 588 112</strong> (Mon\u2013Fri 9am\u20135pm)
              </li>
              <li>
                <strong style={{ color: TEXT }}>NHS Talking Therapies (IAPT)</strong> \u2014
                self-refer at nhs.uk/mental-health/talking-therapies
              </li>
              <li>
                <strong style={{ color: TEXT }}>OCD Action</strong> \u2014 ocdaction.org.uk |
                Support groups and a specialist ERP therapist directory
              </li>
              <li>
                <strong style={{ color: TEXT }}>NOCD</strong> \u2014 nocd.com \u2014 specialist ERP
                telehealth therapy platform
              </li>
              <li>
                <strong style={{ color: TEXT }}>International OCD Foundation</strong> \u2014
                iocdf.org \u2014 resources, research, and therapist directory
              </li>
            </ul>
          </div>

          <hr style={sDivider} />

          {/* ── RELATED READING ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              marginTop: "2rem",
            }}
          >
            Related reading from MEOK AI LABS
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-anxiety",
                title: "AI for Anxiety Support",
                desc: "How MEOK helps manage generalised anxiety between therapy sessions.",
              },
              {
                href: "/blog/ai-for-ocd",
                title: "AI for OCD: The Care-Floor Approach",
                desc: "The design philosophy behind MEOK\u2019s refusal to enable compulsions.",
              },
              {
                href: "/blog/ai-for-health-anxiety",
                title: "AI for Health Anxiety",
                desc: "Supporting recovery from health anxiety without reinforcing checking behaviours.",
              },
              {
                href: "/blog/building-care-into-ai",
                title: "Building Care Into AI",
                desc: "Why long-term wellbeing should always outweigh short-term comfort in AI design.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  padding: "1.1rem 1.2rem",
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                    marginTop: 0,
                    fontSize: "0.92rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.83rem",
                    margin: 0,
                    lineHeight: 1.55,
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>

          <hr style={sDivider} />

          {/* ── CTA ───────────────────────────────────────────────────────────── */}
          <div style={sCta}>
            <p
              style={{
                fontSize: "0.8rem",
                color: GOLD,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                marginBottom: "0.75rem",
                fontFamily: "sans-serif",
                fontWeight: 700,
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
                fontWeight: 900,
                color: TEXT,
                marginBottom: "1rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              A companion that remembers.
              <br />
              <span style={{ color: GOLD }}>And refuses to make things worse.</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                marginBottom: "2rem",
                lineHeight: 1.7,
                maxWidth: "520px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              MEOK is built to support OCD recovery between sessions \u2014 logging intrusive
              thoughts, tracking exposures, recognising patterns over months, and refusing to
              reinforce the compulsions that keep OCD alive. Built with the care-scoring
              framework. Built without shortcuts.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                padding: "0.95rem 2.5rem",
                borderRadius: "8px",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                fontFamily: "sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Begin with MEOK
            </Link>
            <p
              style={{
                marginTop: "1.2rem",
                fontSize: "0.8rem",
                color: DIM,
                fontFamily: "sans-serif",
              }}
            >
              Not a replacement for ERP therapy \u2014 a companion for the journey between sessions.
            </p>
          </div>

          {/* ── FOOTER NOTE ───────────────────────────────────────────────────── */}
          <p
            style={{
              marginTop: "3rem",
              fontSize: "0.8rem",
              color: DIM,
              lineHeight: 1.7,
              fontFamily: "sans-serif",
              borderTop: "1px solid rgba(201,168,76,0.1)",
              paddingTop: "1.5rem",
            }}
          >
            This article is written for informational and educational purposes only. It does
            not constitute medical advice, diagnosis, or treatment. MEOK AI LABS is not a
            clinical service and is not a substitute for specialist mental health care.
            If you believe you have OCD or any other mental health condition, please seek
            advice from a qualified healthcare professional. In a mental health crisis,
            contact your GP, NHS 111, or the Samaritans (116 123, available 24/7).
          </p>

          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.78rem",
              color: DIM,
              fontFamily: "sans-serif",
            }}
          >
            &copy; 2026 MEOK AI LABS &mdash; Nicholas Templeman &mdash;{" "}
            <a href="https://x.com/meok_ai" style={sInlineLink}>
              @meok_ai
            </a>
          </p>
        </main>
      </div>
    </>
  )
}
