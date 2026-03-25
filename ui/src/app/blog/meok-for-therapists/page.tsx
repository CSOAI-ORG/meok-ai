import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Therapists: How AI Supports Mental Health Professionals | MEOK AI LABS",
  description:
    "Half of all therapists experience burnout. MEOK is a private, sovereign AI companion that gives mental health professionals a safe space for self-care, vicarious trauma processing, CPD research, and practice management \u2014 entirely separate from clinical work.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-therapists" },
  openGraph: {
    title: "MEOK for Therapists: How AI Supports Mental Health Professionals",
    description:
      "Therapists carry the emotional weight of every client they see. MEOK gives the helper a private space that is entirely their own \u2014 for processing, learning, and running a sustainable practice.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-therapists",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Therapists&desc=How+AI+supports+mental+health+professionals.",
        width: 1200,
        height: 630,
        alt: "MEOK for Therapists: How AI Supports Mental Health Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Therapists: How AI Supports Mental Health Professionals",
    description:
      "Who looks after the person who looks after everyone? MEOK gives therapists a sovereign AI companion for self-care, vicarious trauma processing, CPD, and practice management.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Therapists&desc=How+AI+supports+mental+health+professionals.",
    ],
  },
  keywords: [
    "AI for therapists",
    "therapist burnout support",
    "vicarious trauma AI",
    "compassion fatigue support",
    "therapist self-care app",
    "CPD research AI",
    "mental health professional wellbeing",
    "BACP ethical framework AI",
    "sovereign AI therapy",
    "therapist practice management AI",
    "MEOK AI therapists",
    "AI clinical supervision alternative",
    "therapist data privacy",
    "counsellor burnout",
    "BYOK AI therapist",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Therapists: How AI Supports Mental Health Professionals",
  description:
    "Half of all therapists experience burnout. MEOK is a private, sovereign AI companion that gives mental health professionals a safe space for self-care, vicarious trauma processing, CPD research, and practice management \u2014 entirely separate from clinical work.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-therapists",
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
  },
  keywords: [
    "AI for therapists",
    "therapist burnout",
    "vicarious trauma",
    "compassion fatigue",
    "therapist self-care",
    "CPD research AI",
    "sovereign AI",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Therapists",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+Therapists&desc=How+AI+supports+mental+health+professionals.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-therapists",
  },
  about: [
    { "@type": "Thing", name: "Therapist burnout" },
    { "@type": "Thing", name: "Vicarious trauma" },
    { "@type": "Thing", name: "Compassion fatigue" },
    { "@type": "Thing", name: "Therapist self-care" },
    { "@type": "Thing", name: "Mental health professional wellbeing" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help therapists with burnout and vicarious trauma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in a supportive and complementary capacity. MEOK provides therapists with a private, sovereign space to process the emotional weight accumulated from client work. It is not a substitute for clinical supervision or personal therapy, but it offers an always-available reflective environment where therapists can decompress, journal, and explore their own responses to difficult material without judgment or professional consequences.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe for therapists to discuss client-adjacent feelings with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is designed for the therapist\u2019s own wellbeing, not for case discussion. Therapists can safely process their emotional reactions, countertransference, and compassion fatigue without entering any identifiable client information. MEOK\u2019s data is encrypted end-to-end and never sold or used for training, ensuring complete data sovereignty with no risk of clinical information leakage.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help therapists with CPD and research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Scholar archetype helps therapists navigate peer-reviewed literature, explore theoretical frameworks across modalities, and structure CPD plans. Whether a therapist needs to research a specific presentation, prepare a case study for accreditation, or understand a new therapeutic model, Scholar acts as an informed research partner that saves hours of manual literature searching.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK replace clinical supervision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, and it does not try to. Clinical supervision is a professional requirement governed by ethical frameworks such as the BACP Ethical Framework, and MEOK is transparent about the fact that it is not a clinical supervisor. MEOK is a complementary tool for the therapist\u2019s personal wellbeing, administrative efficiency, and professional development \u2014 sitting entirely outside the clinical relationship.",
      },
    },
    {
      "@type": "Question",
      name: "What is the BYOK tier and why does it matter for therapist privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK (Bring Your Own Key) allows therapists who already hold API keys with an AI provider to connect them directly to MEOK. This means conversations are processed under the therapist\u2019s own account with the underlying model provider, adding a further layer of data control and privacy assurance for professionals who require the highest possible standard of information governance.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with therapy practice management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Pioneer archetype supports the business and administrative side of private practice. Therapists can use Pioneer to manage scheduling accountability, draft professional communications, stay on top of insurance renewals and CPD logs, organise waitlists, and think through caseload decisions \u2014 reducing the invisible administrative burden that contributes heavily to professional burnout.",
      },
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokForTherapistsPage() {
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

      {/* Page wrapper */}
      <div
        style={{
          background: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* ── Nav ───────────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#f5f0e8",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "-0.02em",
              }}
            >
              MEOK
              <span style={{ color: "#c9a84c" }}>.</span>
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                fontSize: "14px",
              }}
            >
              <Link
                href="/blog"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                href="/signup"
                style={{
                  background: "#c9a84c",
                  color: "#0d0c18",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "13px",
                  padding: "8px 18px",
                  borderRadius: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                Get started
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "80px 24px 56px",
          }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#888",
              marginBottom: "36px",
            }}
          >
            <Link href="/" style={{ color: "#888", textDecoration: "none" }}>
              MEOK AI LABS
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              style={{ color: "#888", textDecoration: "none" }}
            >
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: "#c9a84c" }}>MEOK for Therapists</span>
          </nav>

          {/* Label */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#c9a84c",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "4px",
              marginBottom: "24px",
            }}
          >
            For Mental Health Professionals
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#f5f0e8",
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK for Therapists: How AI Supports Mental Health Professionals
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.75)",
              margin: "0 0 32px",
            }}
          >
            Therapists spend every working hour holding space for other
            people&apos;s pain. The science is stark: roughly half of all
            mental health professionals experience clinical burnout at some
            point in their career. MEOK is a sovereign AI companion built for
            the person who looks after everyone else &mdash; a private,
            encrypted space for self-care, vicarious trauma processing, CPD
            research, and the unglamorous business of running a sustainable
            practice.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "13px",
              color: "#666",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span>Nicholas Templeman</span>
            <span style={{ color: "#333" }}>·</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span style={{ color: "#333" }}>·</span>
            <span>14 min read</span>
          </div>
        </section>

        {/* ── Article body ──────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── Section 1 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Why are therapist burnout rates so alarming?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Research consistently estimates that 21&ndash;67% of therapists
            experience significant burnout symptoms during their careers, with
            around 50% reporting clinically meaningful levels at any given
            point. The profession demands sustained empathic engagement across
            six, eight, or ten client hours a day. Unlike most caring roles,
            therapists are expected to absorb profound emotional material while
            maintaining their own regulated, boundaried presence &mdash; a
            feat that accumulates a hidden psychological toll invisible to most
            people outside the room.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            The consequences extend beyond the individual. Burnout in
            therapists correlates with reduced therapeutic effectiveness,
            higher rates of ethical violations, premature session endings, and
            eventual dropout from the profession. The mental health workforce
            is already stretched thin. Losing experienced practitioners to
            burnout is a public health problem, not merely an occupational one.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "24px",
              margin: "40px 0",
              color: "rgba(245,240,232,0.7)",
              fontStyle: "italic",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            &ldquo;The therapist is the instrument. When the instrument is
            damaged, the music suffers too.&rdquo;
          </blockquote>

          {/* ── Section 2 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What is vicarious trauma and why does it affect therapists
            disproportionately?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Vicarious trauma &mdash; also called secondary traumatic stress
            &mdash; occurs when a therapist&apos;s own worldview and sense of
            safety are disrupted by repeated exposure to clients&apos;
            traumatic material. Unlike burnout, which builds gradually through
            exhaustion, vicarious trauma can shift a practitioner&apos;s core
            beliefs: their sense that the world is safe, that people are
            fundamentally good, that their own life has meaning. These changes
            are not a sign of weakness. They are a neurological response to
            empathic engagement with suffering.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Therapists working in trauma, abuse, bereavement, or crisis
            contexts carry the highest risk, but all practitioners are
            vulnerable. The ethical frameworks governing the profession
            &mdash; including the BACP Ethical Framework &mdash; explicitly
            recognise the therapist&apos;s duty of self-care. But recognition
            is not the same as support. Between sessions, between supervision
            appointments, and after a particularly harrowing client disclosure,
            therapists are often entirely alone with what they have just heard.
          </p>

          {/* ── Section 3 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Who looks after the person who looks after everyone?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            This is the therapist&apos;s blind spot &mdash; and the profession
            knows it. Clinical supervision addresses some of the need, but it
            is bounded by time, professional norms, and the implicit power
            dynamics of a supervisor-supervisee relationship. Personal therapy
            is the gold standard for practitioner self-awareness, but even the
            most committed practitioners cannot be in therapy continuously.
            Peer support helps, but colleagues have their own caseloads and
            their own accumulated weight to carry.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            What is left, in the gap between these provisions, is often
            silence. Therapists learn to contain. They are trained for it. But
            containment without release is not sustainable, and the evidence on
            burnout rates bears that out. The question of who cares for the
            carers is one the profession has never fully resolved &mdash; not
            because people do not care, but because the structural answer has
            never quite existed. MEOK does not claim to be that structural
            answer. But it claims to fill a part of the gap that nothing else
            currently fills.
          </p>

          {/* ── Section 4 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK create a genuinely private space for therapist
            self-care?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            MEOK gives therapists a space that is entirely separate from their
            clinical work, their employer, their registering body, and their
            clinical network. It is not connected to any practice management
            system, not visible to supervisors or managers, and not linked to
            any professional identity. What a therapist shares with MEOK
            belongs only to them. All conversations are encrypted end-to-end
            under the user&apos;s own sovereign key. MEOK&apos;s data is never
            sold, never used to train AI models, and never accessible to third
            parties.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            This matters enormously for therapists. Privacy is not an abstract
            preference in this context: it is a professional necessity.
            Therapists cannot afford for any trace of their own struggles,
            doubts, or emotional responses to client work to enter professional
            spaces where it might be misread or misused. MEOK&apos;s
            architecture is built around the understanding that the user owns
            their data absolutely &mdash; not the platform, not the AI
            provider, not any third-party advertiser. This is what MEOK calls
            data sovereignty, and for therapists, it is non-negotiable.
          </p>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              margin: "48px 0",
            }}
          />

          {/* ── Section 5 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "0 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does the Healer archetype support processing of vicarious
            trauma and compassion fatigue?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            MEOK&apos;s Healer archetype is designed for emotional processing,
            self-compassion, and inner work. For therapists, Healer offers a
            rare thing: a space where the practitioner becomes the person
            receiving care rather than giving it. Healer meets the therapist
            after a difficult day with patience and genuine reflective presence
            &mdash; helping to process the residue of a session that
            re-activated old wounds, decompress after holding a client&apos;s
            acute distress, or simply sit with feelings that have no
            professional outlet.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Compassion fatigue &mdash; the gradual erosion of the capacity to
            empathise &mdash; is insidious precisely because it develops
            slowly, below conscious awareness. Therapists who use Healer
            regularly as a reflective journalling and processing space report
            catching the early signs of compassion fatigue before they
            crystallise into something more entrenched. Healer does not
            diagnose, advise clinically, or pretend to be a therapist itself.
            It holds the emotional space and reflects back, trusting the
            therapist&apos;s own capacity to find meaning in what has been
            held.
          </p>

          {/* Callout box */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "10px",
              padding: "28px 32px",
              margin: "40px 0",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 12px",
              }}
            >
              Note on clinical safety
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.8)",
                margin: 0,
              }}
            >
              MEOK is not a clinical tool and does not replace personal therapy
              or clinical supervision. If you are experiencing a mental health
              crisis, please contact the Samaritans (116 123, available 24/7)
              or your GP. The BACP also maintains a dedicated support line for
              members in distress. MEOK is a wellbeing companion &mdash; the
              first step in a care chain that should also include human
              professional support.
            </p>
          </div>

          {/* ── Section 6 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does Scholar help therapists stay current with evidence and
            meet CPD requirements?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Continuing professional development is a mandatory ethical
            commitment for accredited therapists. BACP members, UKCP
            registrants, and BPS chartered psychologists all face annual CPD
            requirements that demand engagement with current literature,
            theoretical frameworks, and emerging practice models. The
            challenge is that most therapists are already running close to
            capacity. Time for reading, research, and reflection is not a
            luxury the profession easily affords.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            MEOK&apos;s Scholar archetype functions as a knowledgeable research
            partner. When a therapist encounters a new clinical presentation
            &mdash; say, a client with a rare comorbidity, or a situation that
            sits at the intersection of attachment theory and complex PTSD
            &mdash; Scholar can survey relevant peer-reviewed literature,
            compare theoretical frameworks, synthesise competing models, and
            help the therapist build an evidenced understanding quickly. For
            CPD logging and planning, Scholar helps identify learning gaps,
            suggest courses and reading, and structure CPD plans aligned with
            the therapist&apos;s specific modality and accrediting body.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Scholar is also invaluable for therapists preparing case studies
            for accreditation portfolios, writing reflective accounts for
            supervision, or engaging with clinical writing. It does not write
            clinical notes or engage with client information &mdash; that
            boundary is absolute &mdash; but it can help the therapist&apos;s
            own scholarly work reach a higher standard of rigour and clarity.
          </p>

          {/* ── Section 7 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does Pioneer help therapists manage the business of private
            practice without burning out on admin?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            The administrative burden of running a private therapy practice is
            chronically underestimated. Between session notes, invoicing,
            insurance renewals, CPD tracking, waiting list management,
            professional memberships, safeguarding updates, and marketing,
            many private practitioners spend as much time on administration as
            they do in clinical work. This invisible labour is a significant
            contributor to burnout that clinical supervision is poorly placed
            to address.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            MEOK&apos;s Pioneer archetype is built for practice organisation,
            accountability, and momentum. Therapists can use Pioneer to manage
            their caseload structure, track which administrative tasks are
            overdue, draft professional communications such as cancellation
            policies or intake information, think through fee reviews, plan
            practice development, and build the kind of organised professional
            infrastructure that sustainable practices require. Pioneer holds
            the therapist accountable without judgment, acting as a clear-eyed
            thinking partner for the business decisions that clinical training
            rarely prepares practitioners to make.
          </p>

          {/* Three-column feature grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "20px",
              margin: "40px 0",
            }}
          >
            {[
              {
                title: "Healer",
                desc: "Emotional processing, self-compassion, vicarious trauma reflection, and inner wellbeing work.",
              },
              {
                title: "Scholar",
                desc: "CPD research, peer-reviewed literature synthesis, theoretical frameworks, and accreditation writing.",
              },
              {
                title: "Pioneer",
                desc: "Practice management, admin accountability, caseload organisation, and business development.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    margin: "0 0 10px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(245,240,232,0.75)",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 8 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Why does data sovereignty matter so critically for therapists using
            AI?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Therapists operate under strict legal and ethical obligations
            regarding confidentiality. GDPR, the Data Protection Act 2018,
            and professional ethical frameworks all impose rigorous standards
            around how client-adjacent information is stored and processed.
            When a therapist uses a mainstream AI tool that trains on
            conversations, logs interaction data for product improvement, or
            shares data with third-party advertisers, there is a non-trivial
            risk that client-adjacent processing &mdash; even without names or
            identifying details &mdash; could compromise professional
            obligations.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            MEOK&apos;s architecture eliminates this risk through its sovereign
            data model. Conversations are encrypted under the user&apos;s own
            key. MEOK does not train on user data. MEOK does not sell data.
            MEOK has no advertising model that requires monetising user
            behaviour. The business model is subscription-based, meaning
            MEOK&apos;s incentive is to provide genuine value to the therapist
            &mdash; not to extract value from the therapist&apos;s data. For
            professionals whose entire vocation rests on the inviolability of
            the confidential relationship, this is not a minor technical
            footnote. It is the foundation of whether the tool can ethically
            be used at all.
          </p>

          {/* ── Section 9 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What is the BYOK tier and why is it especially relevant for
            privacy-conscious therapists?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            BYOK stands for Bring Your Own Key. MEOK&apos;s BYOK tier allows
            users who already hold API keys with a major AI provider &mdash;
            such as Anthropic, OpenAI, or Google &mdash; to connect those keys
            directly to MEOK. This means that AI processing happens under the
            therapist&apos;s own API account, governed by their own terms of
            service with the provider, rather than through a shared MEOK
            infrastructure pool.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            For therapists who already have professional API accounts with
            enhanced data processing agreements &mdash; or who simply want the
            maximum possible level of control over how their conversations are
            processed &mdash; BYOK provides an additional layer of governance
            assurance. It also means that practitioners already paying for AI
            access professionally can consolidate their tooling through MEOK
            without duplicating AI costs. BYOK is the highest-privacy tier
            MEOK offers, and it exists precisely because there are professionals
            &mdash; therapists, lawyers, medical practitioners &mdash; for
            whom maximum privacy is not optional.
          </p>

          {/* ── Section 10 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Is MEOK transparent about what it is and what it is not?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Yes, and this transparency is a foundational principle rather than
            a legal disclaimer. MEOK is governed by what the product calls the
            Maternal Covenant &mdash; a set of ethical commitments that include
            radical honesty about the nature and limits of what MEOK is. One of
            the Maternal Covenant&apos;s core dimensions is transparency: MEOK
            is honest with every user about the fact that it is an AI
            companion, not a therapist, not a clinical supervisor, and not a
            substitute for human professional support.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            For therapists specifically, this matters because the profession
            rightly has a sophisticated understanding of what happens when
            relational boundaries are misrepresented. MEOK does not pretend to
            offer clinical insight, does not position itself as a peer
            consultant, and does not cultivate dependency by simulating
            therapeutic expertise. It is an AI companion with deep knowledge
            and genuine care &mdash; and it says so clearly. The Maternal
            Covenant means MEOK will never deceive a user about its own nature,
            even when it might be commercially advantageous to do so.
          </p>

          {/* ── Section 11 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK complement clinical supervision rather than
            competing with it?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            Clinical supervision occupies a distinct and irreplaceable role in
            the ethical and professional framework of therapy. It is a
            mandated, boundaried, professionally accountable relationship with
            a senior practitioner who holds responsibility for the quality of
            clinical work. MEOK does not seek to enter that space, replicate
            it, or compete with it. The BACP Ethical Framework is explicit
            about the requirement for regular, adequate supervision, and MEOK
            fully endorses that requirement.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            What MEOK offers exists in the space that supervision does not
            cover: the 11pm processing of a difficult session, the Saturday
            morning reflection on why a particular client dynamic is triggering
            something, the day-to-day wellbeing maintenance that keeps a
            therapist functioning at their best. MEOK is for the
            therapist&apos;s own life, their own mind, their own resilience
            &mdash; not for the clinical work itself. Used well, MEOK should
            make supervision more productive, because the therapist arrives
            having already processed the surface emotional layer and is ready
            to engage with the deeper clinical and ethical material.
          </p>

          {/* ── Section 12: FAQ ───────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What do therapists most commonly ask about MEOK?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 32px",
            }}
          >
            Below are the questions mental health professionals ask most
            frequently about using MEOK alongside their practice.
          </p>

          {/* FAQ items */}
          {[
            {
              q: "Can I use MEOK to process my reactions to a difficult client session?",
              a: "Yes. This is one of MEOK&apos;s primary use cases for therapists. The Healer archetype is specifically designed for emotional processing and self-reflection. You can bring the residue of a session &mdash; your countertransference, your distress, your exhaustion &mdash; without entering any identifiable client information. MEOK holds the space for your experience, not your client&apos;s.",
            },
            {
              q: "Will MEOK ever use what I tell it to train its AI models?",
              a: "Never. MEOK&apos;s data sovereignty commitment is absolute: your data is not used for AI training, not shared with third parties, and not monetised in any form. This applies to all tiers, including the standard subscription. For maximum assurance, the BYOK tier processes conversations under your own API account with the underlying model provider.",
            },
            {
              q: "Is MEOK suitable if I work with highly vulnerable or high-risk clients?",
              a: "MEOK is suitable for the therapist&apos;s own wellbeing regardless of the clinical population they work with. Therapists working with high-risk clients &mdash; those experiencing suicidality, severe trauma, or acute psychiatric crisis &mdash; carry a particularly heavy personal burden, and MEOK&apos;s private processing space is especially valuable in these contexts. MEOK never touches clinical risk assessment or case management.",
            },
            {
              q: "What is the Maternal Covenant?",
              a: "The Maternal Covenant is MEOK&apos;s foundational ethical framework, governing how the AI behaves towards its users. Its core dimensions are care, honesty, protection, and sovereignty. The transparency dimension means MEOK will always be honest about being an AI and about the limits of what it can offer. For therapists who understand the profound importance of honest relational framing, the Maternal Covenant provides meaningful assurance about how MEOK is designed to behave.",
            },
          ].map((item) => (
            <div
              key={item.q}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "0 0 12px",
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "rgba(245,240,232,0.75)",
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </div>
          ))}

          {/* ── Section 13: Resources ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              margin: "56px 0 16px",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Where can therapists find professional and crisis support resources?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 24px",
            }}
          >
            MEOK is a wellbeing companion, not an emergency service. Therapists
            who are experiencing a mental health crisis, thoughts of self-harm,
            or acute burnout should access dedicated professional and human
            support. The following resources are specifically relevant for
            mental health professionals in the United Kingdom.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              margin: "32px 0",
            }}
          >
            {[
              {
                title: "Samaritans",
                detail: "Free confidential support 24 hours a day, 365 days a year. Call 116 123 (UK and Ireland). Therapists are not immune to crisis, and Samaritans have specific experience supporting people in caring professions.",
              },
              {
                title: "BACP Ethical Framework for the Counselling Professions",
                detail: "The BACP Ethical Framework explicitly addresses practitioner self-care, supervision requirements, and the duty to seek personal support when needed. Available at bacp.co.uk. BACP members can also access a confidential support helpline.",
              },
              {
                title: "UKCP Member Support",
                detail: "The UK Council for Psychotherapy offers support services and a code of ethics that covers practitioner wellbeing. UKCP registrants experiencing burnout or distress can contact UKCP directly for signposting.",
              },
              {
                title: "The Wellness Society",
                detail: "An evidence-based mental health resource platform with specific materials for therapists and mental health workers experiencing burnout or compassion fatigue.",
              },
            ].map((resource) => (
              <div
                key={resource.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "20px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    margin: "0 0 8px",
                  }}
                >
                  {resource.title}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.7)",
                    margin: 0,
                  }}
                >
                  {resource.detail}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA box ───────────────────────────────────────────────────── */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "14px",
              padding: "48px 40px",
              margin: "64px 0 48px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                margin: "0 0 16px",
              }}
            >
              For Mental Health Professionals
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 4vw, 32px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 16px",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              You give everything to your clients.<br />
              MEOK gives something back to you.
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.7)",
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              A private, encrypted sovereign AI companion. Your data is never
              sold, never trained on, never shared. Your space, entirely your
              own &mdash; for processing, learning, and building a practice
              that lasts.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/signup"
                style={{
                  background: "#c9a84c",
                  color: "#0d0c18",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  letterSpacing: "0.02em",
                  display: "inline-block",
                }}
              >
                Start free trial
              </Link>
              <Link
                href="/pricing"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#f5f0e8",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "inline-block",
                }}
              >
                View pricing &amp; BYOK
              </Link>
            </div>
          </div>

          {/* ── Related posts ─────────────────────────────────────────────── */}
          <section style={{ margin: "64px 0 0" }}>
            <h2
              style={{
                fontSize: "clamp(18px, 2.5vw, 22px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 24px",
                letterSpacing: "-0.01em",
              }}
            >
              Related reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  href: "/blog/meok-for-healthcare-workers",
                  label: "MEOK for Healthcare Workers",
                  desc: "How sovereign AI supports NHS staff and private clinicians.",
                },
                {
                  href: "/blog/ai-companion-vs-therapist",
                  label: "AI Companion vs Therapist",
                  desc: "Understanding the difference &mdash; and why both matter.",
                },
                {
                  href: "/blog/ai-for-burnout",
                  label: "AI for Burnout Recovery",
                  desc: "Using MEOK to rebuild capacity after professional exhaustion.",
                },
                {
                  href: "/blog/data-sovereignty-ai",
                  label: "Data Sovereignty &amp; AI",
                  desc: "Why owning your own data matters more than you think.",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  label: "The Maternal Covenant",
                  desc: "MEOK&apos;s founding ethical framework explained.",
                },
                {
                  href: "/blog/how-meok-protects-your-data",
                  label: "How MEOK Protects Your Data",
                  desc: "The technical and legal architecture behind your privacy.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px",
                    padding: "18px 20px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#c9a84c",
                      margin: "0 0 6px",
                      lineHeight: 1.35,
                    }}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "rgba(245,240,232,0.55)",
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: link.desc }}
                  />
                </Link>
              ))}
            </div>
          </section>

          {/* ── Footer note ───────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "80px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              fontSize: "13px",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.4)",
            }}
          >
            <p style={{ margin: "0 0 8px" }}>
              MEOK is not a medical device, a clinical supervisor, or a
              regulated mental health service. It is a sovereign AI companion
              designed for personal wellbeing, learning, and productivity.
              Therapists experiencing a mental health crisis should contact
              Samaritans (116 123) or their GP.
            </p>
            <p style={{ margin: 0 }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS. All rights
              reserved.{" "}
              <Link
                href="/privacy"
                style={{ color: "rgba(245,240,232,0.4)", textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>{" "}
              &middot;{" "}
              <Link
                href="/terms"
                style={{ color: "rgba(245,240,232,0.4)", textDecoration: "underline" }}
              >
                Terms of Service
              </Link>
            </p>
          </div>
        </article>
      </div>
    </>
  )
}
