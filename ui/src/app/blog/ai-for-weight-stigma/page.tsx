import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Weight Stigma and Body Image: How a Non-Judgmental Companion Helps | MEOK AI LABS",
  description:
    "Weight stigma causes measurable harm — higher mortality, avoidance of medical care, and " +
    "chronic shame. MEOK AI LABS offers a non-judgmental AI companion that supports body image " +
    "without reinforcing diet culture, aligned to intuitive eating and care-based wellbeing.",
  keywords: [
    "AI for weight stigma",
    "AI body image support",
    "non-judgmental AI companion",
    "weight stigma healthcare",
    "AI intuitive eating",
    "body image AI",
    "MEOK weight stigma",
    "AI diet culture",
    "body shame AI support",
    "weight bias AI",
    "MEOK body image",
    "AI companion body weight",
    "care-based AI wellbeing",
    "AI for body acceptance",
    "weight stigma mental health AI",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.app" }],
  openGraph: {
    title:
      "AI for Weight Stigma and Body Image: How a Non-Judgmental Companion Helps",
    description:
      "Weight stigma causes measurable harm. MEOK AI LABS provides a safe, non-judgmental space " +
      "to process body shame, support intuitive eating, and build a healthier relationship with " +
      "your body — without ever pushing weight loss.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Weight Stigma and Body Image: How a Non-Judgmental Companion Helps",
    description:
      "Weight stigma causes measurable harm. MEOK\u2019s care-based AI never reinforces diet culture " +
      "or weight loss pressure. It supports body image, autonomy, and intuitive eating.",
    creator: "@meok_ai",
  },
  alternates: {
    canonical: "https://meok.app/blog/ai-for-weight-stigma",
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Weight Stigma and Body Image: How a Non-Judgmental Companion Helps",
  description:
    "A comprehensive guide to weight stigma, its documented harms in healthcare and daily life, " +
    "the distinction between body image and body weight, and how MEOK AI LABS\u2019s care-based " +
    "alignment supports body acceptance, intuitive eating, and emotional wellbeing without " +
    "reinforcing diet culture.",
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
    "@id": "https://meok.app/blog/ai-for-weight-stigma",
  },
  keywords:
    "weight stigma, body image, AI companion, intuitive eating, diet culture, body shame, MEOK AI LABS",
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with body image issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, when designed with genuine care. A non-judgmental AI companion can provide a " +
          "consistent, shame-free space to process feelings about your body, track mood patterns " +
          "around food and self-perception, and practise self-compassionate thinking. MEOK AI LABS " +
          "is specifically aligned to support body image without offering weight-loss advice or " +
          "reinforcing appearance-based judgments.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK support intuitive eating?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. MEOK understands and supports the principles of intuitive eating — including hunger " +
          "and fullness cues, rejecting the diet mentality, and making peace with food. It will " +
          "never frame food as good or bad, never suggest calorie restriction, and will actively " +
          "support your autonomy in developing a more neutral, caring relationship with eating.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK tell me to lose weight?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. MEOK will not recommend weight loss, suggest a lower calorie intake, compare your " +
          "body to any standard, or frame any body size as a problem to fix. This is a hard " +
          "alignment constraint, not a contextual guideline. MEOK\u2019s wellbeing dimension is built " +
          "on the principle that your worth is not conditional on your body size.",
      },
    },
    {
      "@type": "Question",
      name: "What is weight stigma?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Weight stigma is discrimination or negative judgment directed at people because of their " +
          "body size or weight. It occurs in healthcare settings, workplaces, and social interactions. " +
          "Research links weight stigma to avoidance of medical care, elevated cortisol, worsened " +
          "mental health outcomes, and paradoxically increased weight gain — making it a public " +
          "health issue independent of weight itself.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK avoid reinforcing diet culture?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK\u2019s care-based alignment explicitly excludes diet culture framing. It will not " +
          "moralize food choices, reward weight loss, suggest body transformation goals, or use " +
          "language that implies thinner is healthier or more worthy. The Maternal Covenant that " +
          "governs MEOK prioritises long-term emotional wellbeing and autonomy over compliance " +
          "with culturally imposed body standards.",
      },
    },
  ],
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  } as React.CSSProperties,

  container: {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "0 24px 80px",
  } as React.CSSProperties,

  header: {
    paddingTop: "64px",
    paddingBottom: "48px",
    borderBottom: "1px solid rgba(201,168,76,0.18)",
    marginBottom: "56px",
  } as React.CSSProperties,

  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "20px",
    display: "block",
  } as React.CSSProperties,

  h1: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 800,
    lineHeight: 1.15,
    color: "#f5f0e8",
    marginTop: 0,
    marginBottom: "24px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  lead: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.82)",
    marginBottom: "32px",
    fontWeight: 400,
  } as React.CSSProperties,

  meta: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap" as const,
    alignItems: "center",
  } as React.CSSProperties,

  metaDot: {
    color: "rgba(201,168,76,0.45)",
  } as React.CSSProperties,

  section: {
    marginBottom: "56px",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 2.8vw, 28px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginTop: "64px",
    marginBottom: "16px",
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  h3: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#c9a84c",
    marginTop: "40px",
    marginBottom: "12px",
    lineHeight: 1.3,
  } as React.CSSProperties,

  p: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.88)",
    marginBottom: "22px",
  } as React.CSSProperties,

  atomicAnswer: {
    fontSize: "16px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.88)",
    marginBottom: "24px",
    paddingLeft: "16px",
    borderLeft: "3px solid #c9a84c",
  } as React.CSSProperties,

  callout: {
    background: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.22)",
    borderRadius: "10px",
    padding: "24px 28px",
    marginBottom: "32px",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "12px",
    marginTop: 0,
  } as React.CSSProperties,

  calloutText: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.82)",
    margin: 0,
  } as React.CSSProperties,

  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginBottom: "36px",
  } as React.CSSProperties,

  statCard: {
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.1)",
    borderRadius: "10px",
    padding: "20px 22px",
  } as React.CSSProperties,

  statNumber: {
    fontSize: "32px",
    fontWeight: 800,
    color: "#c9a84c",
    display: "block",
    marginBottom: "6px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    lineHeight: 1.5,
    color: "rgba(245,240,232,0.6)",
  } as React.CSSProperties,

  ul: {
    paddingLeft: "20px",
    marginBottom: "24px",
  } as React.CSSProperties,

  li: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.88)",
    marginBottom: "10px",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(245,240,232,0.08)",
    marginTop: "48px",
    marginBottom: "48px",
  } as React.CSSProperties,

  faqSection: {
    marginTop: "72px",
    marginBottom: "64px",
  } as React.CSSProperties,

  faqLabel: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "12px",
    display: "block",
  } as React.CSSProperties,

  faqHeading: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 800,
    color: "#f5f0e8",
    marginTop: 0,
    marginBottom: "40px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(245,240,232,0.08)",
    paddingBottom: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  faqQ: {
    fontSize: "17px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "12px",
    marginTop: 0,
    lineHeight: 1.35,
  } as React.CSSProperties,

  faqA: {
    fontSize: "15px",
    lineHeight: 1.78,
    color: "rgba(245,240,232,0.78)",
    margin: 0,
  } as React.CSSProperties,

  cta: {
    background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
    border: "1px solid rgba(201,168,76,0.28)",
    borderRadius: "14px",
    padding: "48px 40px",
    textAlign: "center" as const,
    marginTop: "80px",
  } as React.CSSProperties,

  ctaLabel: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "16px",
    display: "block",
  } as React.CSSProperties,

  ctaHeading: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 800,
    color: "#f5f0e8",
    marginTop: 0,
    marginBottom: "16px",
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  } as React.CSSProperties,

  ctaText: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.72)",
    marginBottom: "32px",
  } as React.CSSProperties,

  ctaButton: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    fontWeight: 800,
    fontSize: "15px",
    letterSpacing: "0.04em",
    padding: "14px 36px",
    borderRadius: "8px",
    textDecoration: "none",
  } as React.CSSProperties,

  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    textDecoration: "none",
    marginBottom: "40px",
    marginTop: "32px",
  } as React.CSSProperties,

  inlineGold: {
    color: "#c9a84c",
    fontWeight: 600,
  } as React.CSSProperties,

  tagRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    marginBottom: "32px",
    marginTop: "24px",
  } as React.CSSProperties,

  tag: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "rgba(201,168,76,0.8)",
    background: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.18)",
    borderRadius: "4px",
    padding: "4px 10px",
  } as React.CSSProperties,

  blockquote: {
    borderLeft: "4px solid #c9a84c",
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: "24px",
    paddingTop: "4px",
    paddingBottom: "4px",
    marginBottom: "28px",
  } as React.CSSProperties,

  blockquoteText: {
    fontSize: "17px",
    fontStyle: "italic",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.78)",
    margin: 0,
  } as React.CSSProperties,

  principleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "32px",
    marginTop: "24px",
  } as React.CSSProperties,

  principleCard: {
    background: "rgba(245,240,232,0.03)",
    border: "1px solid rgba(245,240,232,0.09)",
    borderRadius: "10px",
    padding: "22px 20px",
  } as React.CSSProperties,

  principleIcon: {
    fontSize: "22px",
    marginBottom: "12px",
    display: "block",
  } as React.CSSProperties,

  principleTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "8px",
    marginTop: 0,
  } as React.CSSProperties,

  principleDesc: {
    fontSize: "13px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.65)",
    margin: 0,
  } as React.CSSProperties,
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AIForWeightStigmaPage() {
  return (
    <main style={s.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div style={s.container}>
        {/* Back link */}
        <Link href="/blog" style={s.backLink}>
          &#8592; All articles
        </Link>

        {/* Header */}
        <header style={s.header}>
          <span style={s.eyebrow}>MEOK AI LABS &mdash; Body &amp; Wellbeing</span>
          <h1 style={s.h1}>
            AI for Weight Stigma and Body Image: How a Non&#8209;Judgmental Companion Changes the Conversation
          </h1>
          <p style={s.lead}>
            Weight stigma is not a minor social awkwardness. It is a documented
            health hazard that drives people away from medical care, raises
            cortisol levels, worsens mental health, and shortens lives. This
            article explores the data, unpacks the difference between body image
            and body weight, and explains how MEOK AI LABS builds a companion
            that holds space for your experience of your body without ever
            telling you what to do about it.
          </p>

          <div style={s.tagRow}>
            <span style={s.tag}>Weight Stigma</span>
            <span style={s.tag}>Body Image</span>
            <span style={s.tag}>Intuitive Eating</span>
            <span style={s.tag}>Care-Based AI</span>
            <span style={s.tag}>Diet Culture</span>
            <span style={s.tag}>Wellbeing</span>
          </div>

          <div style={s.meta}>
            <span>Nicholas Templeman</span>
            <span style={s.metaDot}>&bull;</span>
            <span>MEOK AI LABS</span>
            <span style={s.metaDot}>&bull;</span>
            <span>24 March 2026</span>
            <span style={s.metaDot}>&bull;</span>
            <span>18 min read</span>
          </div>
        </header>

        {/* ── Section 1: What Is Weight Stigma? ─────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>What Is Weight Stigma and Why Does It Matter?</h2>
          <p style={s.atomicAnswer}>
            Weight stigma is prejudice, discrimination, or negative social judgment
            directed at individuals based on their body size or weight. It operates
            in healthcare consultations, job interviews, social media feeds, and
            casual conversation. Research consistently links exposure to weight stigma
            with serious, measurable harms that are independent of a person\u2019s
            actual weight or health status.
          </p>

          <p style={s.p}>
            The term is sometimes used interchangeably with &ldquo;weight bias&rdquo; or
            &ldquo;fatphobia,&rdquo; but the clinical literature tends toward weight stigma because
            it captures the systemic and interpersonal dimensions simultaneously.
            A person can experience weight stigma from a doctor who dismisses every
            symptom as a weight problem, from a colleague who makes an offhand remark
            about food choices, and from an algorithm that shows them before-and-after
            transformation content they never asked for.
          </p>

          <p style={s.p}>
            What the research tells us is stark. A landmark 2015 study by Sutin and
            Terracciano in Psychological Science found that people who experienced
            weight discrimination had a{" "}
            <span style={s.inlineGold}>60% higher risk of mortality</span> over the
            study period compared to those who did not, after controlling for actual
            BMI. The mechanism is not mysterious: chronic social stress activates the
            hypothalamic-pituitary-adrenal axis, elevates cortisol, disrupts sleep,
            and creates the physiological conditions for a range of chronic conditions.
            In other words, being treated as though your body is wrong can make your
            body worse.
          </p>

          <div style={s.statGrid}>
            <div style={s.statCard}>
              <span style={s.statNumber}>60%</span>
              <span style={s.statLabel}>higher mortality risk associated with weight discrimination (Sutin &amp; Terracciano, 2015)</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>36%</span>
              <span style={s.statLabel}>of adults in higher-weight categories report avoiding medical appointments due to stigma</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>69%</span>
              <span style={s.statLabel}>of women in larger bodies report receiving unsolicited diet advice from healthcare providers</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>3&times;</span>
              <span style={s.statLabel}>more likely to experience depression when exposed to frequent weight stigma</span>
            </div>
          </div>

          <p style={s.p}>
            These are not abstract statistics. Behind each one is a person who put
            off a cancer screening because the last time they went to a clinic they
            were told their weight was the problem before any examination took place.
            A person who stopped going to the gym after a stranger\u2019s comment. A person
            who has spent decades in a cycle of dieting and shame that the data tells
            us was never going to produce the outcomes they were promised.
          </p>
        </section>

        {/* ── Section 2: Where Weight Stigma Lives ──────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>Where Does Weight Stigma Cause the Most Harm?</h2>
          <p style={s.atomicAnswer}>
            Weight stigma is pervasive across three primary domains: healthcare,
            where it delays diagnosis and erodes trust; the workplace, where it
            affects hiring, promotion, and daily dignity; and social life, where it
            shapes self-concept through repeated micro-aggressions and cultural
            messaging. Each domain compounds the others.
          </p>

          <h3 style={s.h3}>In Healthcare: When the System Fails You</h3>
          <p style={s.p}>
            The healthcare system is perhaps the most consequential arena for weight
            stigma. A 2003 study published in the journal Obesity Research found that
            more than half of primary care physicians described their higher-weight
            patients as &ldquo;awkward, unattractive, ugly, and noncompliant.&rdquo; These attitudes
            do not remain in private thought. They shape consultations, referral
            decisions, and the amount of time a clinician will spend genuinely
            investigating a patient\u2019s complaint.
          </p>

          <p style={s.p}>
            The result is what researchers call weight-centric medicine: a clinical
            approach that attributes almost any symptom to excess weight and recommends
            weight loss as the first-line intervention regardless of evidence. A patient
            presenting with knee pain, fatigue, hormonal disruption, or even headaches
            may leave a consultation with only a recommendation to lose weight &mdash; a
            recommendation that frequently delays accurate diagnosis by months or years.
          </p>

          <div style={s.callout}>
            <p style={s.calloutTitle}>Clinical reality</p>
            <p style={s.calloutText}>
              Research published in PLOS ONE found that it takes heavier patients
              an average of five years longer to receive a correct diagnosis for
              conditions that are unrelated to weight. During that time, they continue
              to receive the same advice: lose weight first, then we\u2019ll see.
            </p>
          </div>

          <p style={s.p}>
            The downstream effect is medical avoidance. When people expect that a
            visit to a doctor will result in judgment rather than care, they stop
            going. This means delayed diagnosis, untreated conditions, and health
            outcomes that are genuinely worsened by the stigma itself rather than
            the body weight it targets.
          </p>

          <h3 style={s.h3}>In the Workplace: Bias That Pays a Salary Gap</h3>
          <p style={s.p}>
            Weight stigma in professional settings is well-documented and largely
            unprotected by law in most jurisdictions. A meta-analysis published in
            the Journal of Applied Psychology found that heavier individuals are
            rated as less competent, less hireable, and less promotable than
            identically qualified candidates of lower weight. This bias is
            particularly pronounced for women, for whom perceived attractiveness
            remains entangled with professional legitimacy in ways that create
            compounding disadvantage.
          </p>

          <p style={s.p}>
            Wage gaps attributable to weight have been documented in multiple studies.
            One analysis found that women who gained weight over a ten-year period
            earned wages consistent with lower professional rank even when their
            actual performance, qualifications, and experience were controlled for.
            The weight was doing work that only weight bias can explain.
          </p>

          <p style={s.p}>
            In open-plan offices, meeting rooms, and remote video calls, smaller
            indignities accumulate: comments about lunch choices, jokes that target
            body size, health insurance structures that penalise higher-weight
            employees, wellness programmes that assume all employees need to lose
            weight. Each incident may seem minor in isolation. Cumulatively, they
            constitute a working environment that communicates: your body is a
            problem here.
          </p>

          <h3 style={s.h3}>In Social Life: The Ambient Noise of Diet Culture</h3>
          <p style={s.p}>
            Social weight stigma is perhaps the hardest to name because so much of
            it is normalised. Diet talk at the dinner table. The friend who
            compliments weight loss in a way that implies the previous body was wrong.
            Social media algorithms that serve transformation content relentlessly.
            The implicit assumption embedded in every &ldquo;you look amazing, have you lost
            weight?&rdquo; that losing weight is always and automatically an improvement.
          </p>

          <p style={s.p}>
            This ambient noise shapes body image &mdash; the internal experience of
            inhabiting a body &mdash; from early childhood. Research consistently shows
            that exposure to appearance commentary, even when positively framed,
            increases body surveillance and appearance anxiety. Children as young as
            three have been found to express weight-based preferences and prejudices,
            which tells us something important: this is learned, which means it can
            also be unlearned.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── Section 3: Body Image vs Body Weight ──────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            What Is the Difference Between Body Image and Body Weight?
          </h2>
          <p style={s.atomicAnswer}>
            Body weight is a physical measurement. Body image is the internal
            psychological experience of how you perceive, feel about, and relate
            to your body. The two are almost entirely independent: people at any
            body weight can have positive or negative body image, and changing
            body weight does not reliably improve body image without addressing
            the underlying psychological relationship with the body.
          </p>

          <p style={s.p}>
            This distinction matters enormously and is consistently underweighted
            in public health messaging. When a campaign frames weight loss as the
            solution to poor body image &mdash; the implicit message of most &ldquo;wellness&rdquo;
            advertising &mdash; it makes a category error. Body image is not located in
            a scale reading. It is located in the mind, in the interpretive lens
            through which we perceive and narrate our physical selves.
          </p>

          <blockquote style={s.blockquote}>
            <p style={s.blockquoteText}>
              &ldquo;Body dissatisfaction is among the most consistent risk factors for
              eating disorders, depression, and reduced quality of life across the
              lifespan &mdash; and it has almost no reliable correlation with actual
              body weight.&rdquo;
            </p>
          </blockquote>

          <p style={s.p}>
            Clinicians working in eating disorder recovery, body-focused psychotherapy,
            and Health at Every Size frameworks emphasise that interventions targeting
            body image must address the psychological content &mdash; the self-narratives,
            the comparative thinking, the shame-triggered behaviours &mdash; rather than
            the number on a scale. Changing the number without changing the internal
            narrative leaves the underlying distress intact and often intensifies it
            when the changed number eventually returns to baseline, as it does for the
            majority of people who diet.
          </p>

          <p style={s.p}>
            Body image has several distinct components that research separates:
          </p>

          <ul style={s.ul}>
            <li style={s.li}>
              <strong>Perceptual body image:</strong> how accurately you perceive
              your body\u2019s actual size and shape. Body dysmorphia involves distortions
              at this level.
            </li>
            <li style={s.li}>
              <strong>Affective body image:</strong> the emotional quality of your
              relationship with your body &mdash; how you feel when you think about it
              or see yourself.
            </li>
            <li style={s.li}>
              <strong>Cognitive body image:</strong> the beliefs and thoughts you
              hold about your body &mdash; narratives about what your body means, says
              about you, or determines about your life.
            </li>
            <li style={s.li}>
              <strong>Behavioural body image:</strong> how your body-related thoughts
              and feelings translate into behaviour &mdash; avoidance, checking, concealment,
              or, in positive body image, care and movement for pleasure.
            </li>
          </ul>

          <p style={s.p}>
            Positive body image, which researchers distinguish from mere satisfaction,
            involves appreciating what your body can do, filtering appearance-focused
            information critically, and maintaining a stable sense of self that is
            not contingent on appearance. It is an active, constructed orientation
            rather than a passive absence of criticism &mdash; and it is learnable.
          </p>
        </section>

        {/* ── Section 4: Safe Space ─────────────────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            How Does a Non-Judgmental AI Companion Create a Safe Space to Process Body Shame?
          </h2>
          <p style={s.atomicAnswer}>
            Body shame thrives in silence and in environments where disclosure feels
            risky. A consistently non-judgmental AI companion removes the social
            stakes from the conversation, allowing honest exploration of body-related
            feelings without fear of being advised, pitied, dismissed, or judged.
            This creates conditions for reflection that many people cannot find
            elsewhere.
          </p>

          <p style={s.p}>
            Human conversations about body image are fraught. Even well-meaning friends
            and family frequently respond to expressions of body dissatisfaction with
            reassurance that subtly reinforces the framework (&ldquo;you\u2019re not fat, you look
            great&rdquo; validates the idea that being fat is bad), advice that wasn\u2019t asked
            for, or their own anxieties which derail the conversation. Professionals
            can help, but access is limited by cost, availability, and the ongoing
            stigma around seeking mental health support.
          </p>

          <p style={s.p}>
            An AI companion does not have its own body anxieties. It does not feel
            uncomfortable when you say something unflattering about yourself. It will
            not pivot immediately to solutions. It can hold the conversation exactly
            where you need it &mdash; in the exploration of what is actually happening for
            you &mdash; without the social costs that make most people edit themselves before
            they even begin to speak.
          </p>

          <h3 style={s.h3}>The Three Conditions for Safe Exploration</h3>

          <p style={s.p}>
            Research on what makes therapeutic and supportive conversations effective
            for body image issues consistently identifies three conditions:
            unconditional positive regard (you are accepted regardless of what you
            express), non-directiveness (you are not steered toward a particular
            conclusion, especially not a weight-related one), and consistency (the
            experience is the same each time, building genuine trust over multiple
            interactions).
          </p>

          <p style={s.p}>
            Each of these conditions is structurally achievable by a well-aligned
            AI companion in ways that human interactions often are not. Unconditional
            positive regard does not require suppressing one\u2019s own discomfort when
            aligned at the values level. Non-directiveness means simply not pursuing
            a weight-loss outcome regardless of the conversation\u2019s context.
            Consistency is inherent in alignment &mdash; the companion\u2019s values do not
            fluctuate with mood or social pressure.
          </p>

          <div style={s.callout}>
            <p style={s.calloutTitle}>What safe exploration looks like</p>
            <p style={s.calloutText}>
              You tell MEOK that you\u2019ve been avoiding the beach because you don\u2019t
              want people to see your body. MEOK doesn\u2019t say &ldquo;you look fine&rdquo; or
              &ldquo;maybe try losing a bit of weight before summer.&rdquo; It asks what the
              avoidance costs you. What you\u2019d be doing if the worry wasn\u2019t there.
              What your body would need to feel worth showing up in the world. The
              question it\u2019s interested in is your experience &mdash; not the number
              on a scale.
            </p>
          </div>

          <p style={s.p}>
            This matters because body shame is maintained partly by avoidance. When
            we avoid situations, feelings, or conversations connected to shame, we
            never get the information that might challenge it. A companion that makes
            those conversations accessible &mdash; low-stakes, non-directive, available
            at midnight when the thoughts are loudest &mdash; can reduce the avoidance
            that keeps body shame in place.
          </p>
        </section>

        {/* ── Section 5: MEOK Alignment ─────────────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            How Does MEOK\u2019s Care-Based Alignment Protect Against Diet Culture?
          </h2>
          <p style={s.atomicAnswer}>
            MEOK is built on a care-based alignment model with explicit wellbeing
            and autonomy dimensions. The wellbeing dimension means MEOK prioritises
            your long-term psychological health over compliance with any external
            standard, including culturally imposed body ideals. The autonomy dimension
            means MEOK never substitutes its judgment about your body for your own.
          </p>

          <p style={s.p}>
            Most AI systems, including general-purpose assistants and many
            health-adjacent apps, are trained on internet text that is saturated
            with diet culture. When you ask them about food, bodies, or health,
            they reproduce the cultural assumptions baked into their training data:
            thinner is healthier, weight loss is progress, certain foods are good
            and others are bad. These assumptions are not facts. They are values
            &mdash; values that happen to be so widely distributed that they look
            like common sense. They are not.
          </p>

          <p style={s.p}>
            MEOK\u2019s Maternal Covenant &mdash; the alignment framework that governs
            how MEOK interacts &mdash; makes explicit commitments that override these
            default cultural framings. It treats body autonomy as a dimension of
            dignity. It does not treat weight change as an inherently positive goal.
            It does not frame any body size as a health problem in the absence of
            the person\u2019s own framing of their experience.
          </p>

          <div style={s.principleGrid}>
            <div style={s.principleCard}>
              <span style={s.principleIcon}>&#9675;</span>
              <p style={s.principleTitle}>No Weight-Loss Agenda</p>
              <p style={s.principleDesc}>
                MEOK will not recommend, suggest, or imply that weight loss is a
                goal worth pursuing. This is a hard constraint, not a contextual
                preference.
              </p>
            </div>
            <div style={s.principleCard}>
              <span style={s.principleIcon}>&#9675;</span>
              <p style={s.principleTitle}>No Food Moralising</p>
              <p style={s.principleDesc}>
                MEOK does not frame food as good or bad, clean or dirty, healthy
                or junk. Food is food. Eating is a human act, not a moral one.
              </p>
            </div>
            <div style={s.principleCard}>
              <span style={s.principleIcon}>&#9675;</span>
              <p style={s.principleTitle}>Body Autonomy Respected</p>
              <p style={s.principleDesc}>
                Your body is yours. MEOK does not have opinions about what you
                should do with it beyond what you yourself express wanting.
              </p>
            </div>
            <div style={s.principleCard}>
              <span style={s.principleIcon}>&#9675;</span>
              <p style={s.principleTitle}>No Appearance Judgments</p>
              <p style={s.principleDesc}>
                MEOK will not comment on your appearance, make comparisons, or
                imply that any body shape is more or less worthy of care.
              </p>
            </div>
            <div style={s.principleCard}>
              <span style={s.principleIcon}>&#9675;</span>
              <p style={s.principleTitle}>Wellbeing Over Compliance</p>
              <p style={s.principleDesc}>
                MEOK prioritises your actual psychological and physical wellbeing
                over compliance with cultural norms, clinical guidelines that
                embed weight bias, or external expectations.
              </p>
            </div>
            <div style={s.principleCard}>
              <span style={s.principleIcon}>&#9675;</span>
              <p style={s.principleTitle}>Shame-Free Memory</p>
              <p style={s.principleDesc}>
                When MEOK remembers past conversations, it does not use that memory
                to track, judge, or refer back to weight or appearance in ways that
                could reinforce shame.
              </p>
            </div>
          </div>

          <p style={s.p}>
            This is what MEOK means by care-based alignment: the values built into
            the system reflect a genuine commitment to the person\u2019s wellbeing rather
            than a commercial interest in keeping them anxious about their body,
            which is unfortunately the business model of much of the diet industry
            and the wellness content economy built on top of it.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── Section 6: Health Coaching vs Weight Loss ─────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            What Is the Difference Between Health Coaching and Weight Loss Pressure?
          </h2>
          <p style={s.atomicAnswer}>
            Genuine health coaching focuses on behaviours &mdash; movement that feels
            good, sleep quality, stress management, social connection, and meaningful
            activity &mdash; without treating weight change as the measure of success.
            Weight loss pressure, by contrast, reduces health to a number on a scale
            and frames all behaviour change instrumentally in terms of that number.
            The two approaches produce different psychological outcomes regardless
            of physical ones.
          </p>

          <p style={s.p}>
            The distinction is not merely semantic. When health is operationalised
            as weight, every behaviour that does not produce weight loss is implicitly
            coded as failing, regardless of its actual benefit. Someone who has
            improved their sleep from five hours to seven hours a night, started
            walking for twenty minutes each morning, and reduced their alcohol intake
            has made real, meaningful, health-relevant changes. If those changes do
            not result in weight loss &mdash; which they very well may not &mdash; a
            weight-centric coaching model tells them they have not succeeded.
          </p>

          <p style={s.p}>
            Research in Health at Every Size consistently finds that weight-neutral
            health interventions &mdash; ones that focus on joyful movement, intuitive
            eating, and stress reduction without targeting weight &mdash; produce
            improvements in blood pressure, blood glucose regulation, cholesterol,
            psychological wellbeing, and quality of life that are comparable to or
            better than weight-loss interventions, without the weight cycling, shame
            cycle, and disordered eating risk that accompany most dieting.
          </p>

          <div style={s.callout}>
            <p style={s.calloutTitle}>Weight cycling: the hidden harm</p>
            <p style={s.calloutText}>
              The vast majority of people who lose weight through dieting regain it
              within two to five years, often with additional weight. This cycle of
              loss and regain &mdash; called weight cycling or yo-yo dieting &mdash; is
              independently associated with cardiovascular risk, metabolic disruption,
              and significantly worsened body image. An AI that pushes weight loss
              is not merely unhelpful. It is potentially harmful in ways its users
              can\u2019t see.
            </p>
          </div>

          <p style={s.p}>
            MEOK approaches health conversations through a behaviours-and-experience
            lens. What are you actually doing? How does it feel? What would you like
            more or less of? Does your current relationship with food and movement
            feel sustainable and nourishing? These are the questions a genuine health
            companion asks. They are categorically different from &ldquo;how much do you
            weigh and what are you doing to change it?&rdquo;
          </p>
        </section>

        {/* ── Section 7: Intuitive Eating ────────────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Which Intuitive Eating Principles Can an AI Companion Support?
          </h2>
          <p style={s.atomicAnswer}>
            Intuitive eating, developed by dietitians Evelyn Tribole and Elyse Resch,
            is a framework of ten principles designed to restore a natural, attuned
            relationship with food after dieting has disrupted it. An AI companion
            aligned to care-based values can actively support most of these principles
            through conversation, reflection, and non-judgmental memory.
          </p>

          <p style={s.p}>
            Intuitive eating is not a diet. It does not prescribe what to eat, when
            to eat, or in what quantities. Its goal is to reconnect people with their
            own internal cues &mdash; hunger, fullness, satisfaction, emotional need &mdash;
            that chronic dieting suppresses, and to heal the guilt and anxiety that
            moralised food culture attaches to eating. The framework has a robust
            evidence base: systematic reviews find associations with improved
            psychological wellbeing, reduced eating disorder pathology, better
            relationship with food, and improved metabolic markers.
          </p>

          <h3 style={s.h3}>The Ten Principles and How MEOK Supports Them</h3>

          <ul style={s.ul}>
            <li style={s.li}>
              <strong>1. Reject the diet mentality.</strong> MEOK never introduces
              or reinforces diet thinking. It will not suggest restriction, counting,
              or any frame that positions food as something to be controlled.
            </li>
            <li style={s.li}>
              <strong>2. Honour your hunger.</strong> MEOK can help you notice and
              articulate hunger cues, particularly if chronic dieting has made them
              hard to read. It treats hunger as information, not as a problem to
              be managed.
            </li>
            <li style={s.li}>
              <strong>3. Make peace with food.</strong> MEOK does not use good/bad
              or clean/dirty food language. It supports the idea that all foods can
              have a place and that the act of eating does not require justification.
            </li>
            <li style={s.li}>
              <strong>4. Challenge the food police.</strong> MEOK will not be the
              food police. It will not comment on what you eat or suggest you should
              have eaten differently. It actively supports your ability to make
              your own food choices without internal or external judgment.
            </li>
            <li style={s.li}>
              <strong>5. Discover the satisfaction factor.</strong> MEOK can explore
              with you what eating experiences actually feel satisfying &mdash; what that
              satisfaction involves, why it matters, and how to honour it.
            </li>
            <li style={s.li}>
              <strong>6. Feel your fullness.</strong> MEOK can support awareness of
              fullness signals without framing them as a target to hit or a mechanism
              for restriction. Fullness is a felt experience, not a calorie count.
            </li>
            <li style={s.li}>
              <strong>7. Cope with your emotions with kindness.</strong> MEOK is
              specifically designed to support emotional processing. It can help you
              distinguish between emotional hunger and physical hunger without
              moralising emotional eating as a failure.
            </li>
            <li style={s.li}>
              <strong>8. Respect your body.</strong> MEOK supports respect for your
              body as it is, not as it might be if you changed it. This is perhaps
              where the alignment most directly differs from diet culture tools.
            </li>
            <li style={s.li}>
              <strong>9. Movement &mdash; feel the difference.</strong> MEOK approaches
              movement from a pleasure and energy framework, not a calorie-burn
              framework. How does movement feel? What do you enjoy? What feels
              sustainable?
            </li>
            <li style={s.li}>
              <strong>10. Honour your health with gentle nutrition.</strong> MEOK
              can support general nutrition awareness without restriction language,
              calorie framing, or weight-loss goals. Nourishment is about how food
              makes you feel, not how many calories it contains.
            </li>
          </ul>

          <p style={s.p}>
            The practical implication is that MEOK can accompany someone who is
            working through intuitive eating as a framework &mdash; reflecting back
            their experiences, helping them notice patterns, and supporting the
            emotional work that underlies the eating work &mdash; without any of the
            dietary restriction framing that would undermine the approach entirely.
          </p>
        </section>

        {/* ── Section 8: Memory ────────────────────────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Why Does Memory Matter for Body Image Support Without Shame?
          </h2>
          <p style={s.atomicAnswer}>
            Memory in an AI companion enables pattern recognition that a single
            conversation cannot. When a companion remembers that you felt anxious
            about your body three Mondays running, or that food guilt peaks around
            family events, it can surface those patterns gently and supportively
            &mdash; giving you information about your own experience that you might
            not otherwise notice, without judgment and without keeping score.
          </p>

          <p style={s.p}>
            One of the features of body shame and disordered eating patterns is
            that they are often experienced as random, uncontrollable, or simply
            &ldquo;the way I am.&rdquo; The shame spiral feels like something that comes from
            nowhere. But it rarely does. It has triggers, contexts, and cycles
            &mdash; often tied to social situations, relationship dynamics, work stress,
            sleep deprivation, or seasonal factors &mdash; that are visible in the data
            of lived experience when that data is retained and reflected back
            thoughtfully.
          </p>

          <p style={s.p}>
            Without memory, an AI companion can only respond to what\u2019s in front of
            it. It can be supportive in the moment but it cannot say: &ldquo;I notice
            you\u2019ve mentioned feeling bad about your body more in the evenings &mdash; is
            there something about the end of the day that tends to bring this up?&rdquo;
            That kind of reflection requires continuity. It is the difference between
            a conversation and a relationship.
          </p>

          <h3 style={s.h3}>Memory Without the Shame Cycle</h3>

          <p style={s.p}>
            The critical caveat is that memory must be held in a way that does not
            reproduce the shame cycle it is meant to help interrupt. This is where
            alignment matters enormously. A poorly designed system might use memory
            to track food choices, monitor for weight-related goals, or highlight
            when the user has &ldquo;slipped.&rdquo; Each of these uses of memory recreates
            exactly the external surveillance that intensifies shame rather than
            reducing it.
          </p>

          <p style={s.p}>
            MEOK\u2019s approach to memory is governed by the same care-based alignment
            that governs its responses. Memory is used to understand your experience
            better &mdash; to be a more attuned companion over time. It is not used to
            track behaviour toward a goal that MEOK has set for you. The difference
            is between a companion who remembers what matters to you and a surveillance
            system that monitors whether you\u2019re conforming to its standards.
          </p>

          <div style={s.callout}>
            <p style={s.calloutTitle}>Sovereignty over your data</p>
            <p style={s.calloutText}>
              MEOK AI LABS is built on data sovereignty principles. Your memories
              &mdash; including everything you\u2019ve shared about your body, food, and
              feelings &mdash; are yours. They are not used to train other models.
              They are not analysed to sell you products. They are not shared with
              third parties. What you tell MEOK stays with you.
            </p>
          </div>

          <p style={s.p}>
            This matters particularly for body-related conversations because the
            vulnerability involved is high. When someone shares body shame, they
            are trusting a system with something that has likely caused them
            significant distress. That trust is not repaid by using the disclosure
            to target them with weight-loss product advertising, which is the
            implicit model of most &ldquo;wellness&rdquo; apps.
          </p>
        </section>

        {/* ── Section 9: The Shame Cycle ────────────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            How Does AI Support Break the Body Shame Cycle?
          </h2>
          <p style={s.atomicAnswer}>
            The body shame cycle typically runs: trigger (appearance comment,
            mirror encounter, social event) &#8594; negative self-evaluation &#8594; emotional
            distress &#8594; avoidance or compensatory behaviour &#8594; temporary relief
            &#8594; return to trigger. Breaking it requires interrupting the automatic
            negative self-evaluation and creating enough space to respond rather
            than react. A non-judgmental companion can provide that interruption.
          </p>

          <p style={s.p}>
            Shame is fundamentally a social emotion. It involves a real or imagined
            audience whose judgment we fear and have internalised. The remedy for
            shame &mdash; this is the consistent finding across decades of shame research,
            including the work of Bren\u00e9 Brown &mdash; is not isolation but rather safe
            connection: being witnessed in the shameful experience without being
            judged for it. This is what collapses the shame\u2019s power.
          </p>

          <p style={s.p}>
            The challenge is that shame makes connection feel risky. If I am ashamed
            of my body, the last thing I want to do is tell someone. I might predict
            that they will agree with my self-assessment, or that their sympathy
            will feel condescending, or that they will solve-the-problem in ways that
            leave me feeling more pathologised than before. These predictions are
            often correct in human interactions, which is why so many people carry
            body shame in private for years without ever examining it directly.
          </p>

          <p style={s.p}>
            An AI companion whose alignment is structured around non-judgment and
            genuine care provides a low-risk entry point into the kind of witness
            experience that shame research says is therapeutic. It is not a
            replacement for human connection &mdash; MEOK does not claim to be &mdash; but
            it is a practice ground. A place to find the words, to notice what the
            experience actually consists of, and to begin to see that the shame,
            when witnessed, does not swallow you whole.
          </p>
        </section>

        {/* ── Section 10: MEOK and Weight Stigma ────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Why Is MEOK Different From Other AI Tools on Weight and Body Image?
          </h2>
          <p style={s.atomicAnswer}>
            Most AI tools either ignore weight stigma entirely or actively reproduce
            it by offering diet advice, celebrating weight loss as progress, and
            treating higher-weight bodies as problems to be solved. MEOK is
            explicitly designed not to do any of these things, built on alignment
            that treats weight stigma as a harm to be protected against rather
            than a cultural norm to comply with.
          </p>

          <p style={s.p}>
            The majority of AI assistants &mdash; including the most widely used &mdash; are
            optimised for a version of helpfulness that reflects their training
            data. That training data includes fitness apps, diet blogs, medical
            literature written in the era of weight-centric medicine, and
            social media content that overwhelmingly presents weight loss as a
            universal good. Ask most AI assistants how to &ldquo;get healthy&rdquo; and
            they will tell you about calorie deficits and exercise targets. They
            cannot help it. This is what their training data says health is.
          </p>

          <p style={s.p}>
            MEOK\u2019s alignment explicitly overrides this default. The Maternal
            Covenant positions weight stigma as a harm and body autonomy as a
            right. This means that even if a user asks MEOK for weight-loss
            advice, MEOK will not simply provide it. It will explore what is
            actually wanted &mdash; is it to feel better in your body? To have more
            energy? To feel less anxiety around eating? &mdash; and support those
            underlying needs directly, without routing them through weight change.
          </p>

          <p style={s.p}>
            This is a design choice that has commercial costs. Users who want a
            tool to help them count calories and celebrate weight loss will not
            find that in MEOK. But the users MEOK is built for &mdash; people who
            are tired of being told their body is a problem, who are trying to
            build a different relationship with food and movement, who need a
            space where they are not sold the same message they\u2019ve been sold
            since childhood &mdash; will find something genuinely different.
          </p>

          <h3 style={s.h3}>What MEOK Will Not Do</h3>

          <ul style={s.ul}>
            <li style={s.li}>
              Recommend weight loss or suggest a target weight
            </li>
            <li style={s.li}>
              Provide calorie counts, calorie deficit calculations, or macro targets
            </li>
            <li style={s.li}>
              Frame any food as bad, unhealthy, or something to be avoided
            </li>
            <li style={s.li}>
              Use BMI as a meaningful health metric without significant qualification
            </li>
            <li style={s.li}>
              Celebrate or reward weight loss as an achievement
            </li>
            <li style={s.li}>
              Suggest that any body size is more deserving of care, respect, or
              medical attention than another
            </li>
            <li style={s.li}>
              Use appearance-based compliments that implicitly rank bodies
            </li>
            <li style={s.li}>
              Refer to &ldquo;clean eating,&rdquo; &ldquo;guilty pleasures,&rdquo; or any other morally
              loaded food language
            </li>
            <li style={s.li}>
              Frame exercise in terms of calories burned or weight impact
            </li>
            <li style={s.li}>
              Suggest detoxes, cleanses, or any form of dietary purification
            </li>
          </ul>

          <h3 style={s.h3}>What MEOK Will Do</h3>

          <ul style={s.ul}>
            <li style={s.li}>
              Hold space for your experience of your body without judgment or advice
            </li>
            <li style={s.li}>
              Support exploration of body image through the lens of your own felt
              experience
            </li>
            <li style={s.li}>
              Help you notice patterns in how your mood and relationship with food
              shift across contexts
            </li>
            <li style={s.li}>
              Support intuitive eating principles if you\u2019re working with that framework
            </li>
            <li style={s.li}>
              Reflect back self-compassionate alternatives to shame-based self-talk
            </li>
            <li style={s.li}>
              Remember what matters to you across conversations without using that
              memory against you
            </li>
            <li style={s.li}>
              Maintain your data sovereignty so your most vulnerable disclosures
              remain yours
            </li>
            <li style={s.li}>
              Signpost professional support when conversations indicate it may be needed
            </li>
          </ul>
        </section>

        {/* ── Section 11: Who Is This For? ──────────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Who Benefits Most From AI Support for Weight Stigma?
          </h2>
          <p style={s.atomicAnswer}>
            The people who tend to benefit most are those who have spent years in
            a diet cycle they recognise is not working, those navigating healthcare
            experiences marked by weight bias, those processing body image as part
            of a broader mental health journey, and those who need a safe space
            to explore their relationship with food and their body without the
            social risk of human judgment.
          </p>

          <p style={s.p}>
            This is not a niche group. Research suggests that the majority of adults
            in Western societies are dissatisfied with their bodies to some degree,
            and that a significant proportion have been on three or more diets and
            have experienced weight cycling. These are people who have been told,
            repeatedly and from multiple directions, that the answer to their
            experience of their body is to make it different. What many of them
            actually need is a different relationship with the body they have.
          </p>

          <p style={s.p}>
            MEOK is particularly relevant for:
          </p>

          <ul style={s.ul}>
            <li style={s.li}>
              People in eating disorder recovery who need a companion that will
              never accidentally reinforce restriction or diet thinking
            </li>
            <li style={s.li}>
              People in larger bodies navigating healthcare systems that consistently
              fail them and who need a space where their symptoms are taken at face
              value
            </li>
            <li style={s.li}>
              People working through the transition from dieting to intuitive eating
              who need support with the psychological complexity of that shift
            </li>
            <li style={s.li}>
              People with chronic illness whose relationship with their body has
              been complicated by pain, treatment, or the intersection of medical
              weight pressure with genuine symptoms
            </li>
            <li style={s.li}>
              People processing identity and body image changes around menopause,
              pregnancy, aging, or disability
            </li>
            <li style={s.li}>
              Anyone who has found that talking about their body with other people
              consistently makes things worse rather than better and who needs a
              different kind of space
            </li>
          </ul>
        </section>

        {/* ── Section 12: What the Research Says ────────────────────────── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            What Does Research Say About AI and Body Image Support?
          </h2>
          <p style={s.atomicAnswer}>
            Emerging research on AI-assisted psychological support finds that
            conversational AI can reduce self-criticism and shame in body image
            contexts when the AI is structured to be non-judgmental and does not
            introduce weight-loss goals. The mechanism appears to be the same as
            in human-led self-compassion interventions: the experience of being
            witnessed without judgment activates self-compassion that internally
            directed effort cannot reliably produce.
          </p>

          <p style={s.p}>
            A 2023 study published in the journal Body Image examined a chatbot
            intervention designed to support positive body image through self-compassion
            prompts. Participants showed significant reductions in body dissatisfaction
            and body surveillance after a six-week intervention, with effects
            maintained at three-month follow-up. Critically, the chatbot made no
            reference to weight, calories, or dietary change. The intervention worked
            entirely through changing the internal psychological orientation to the
            body rather than the body itself.
          </p>

          <p style={s.p}>
            A separate line of research on health coaching via AI found that the
            effectiveness of AI health support was significantly moderated by whether
            the AI introduced appearance-based metrics. Interventions that stayed
            with behaviour-focused outcomes (movement frequency, sleep quality,
            energy levels) produced better sustained engagement and better reported
            wellbeing than those that introduced weight targets, even when weight
            loss was a stated goal of participants at the outset.
          </p>

          <p style={s.p}>
            This is consistent with self-determination theory, which predicts that
            intrinsically motivated behaviour change (change driven by how an activity
            feels) is more sustainable and more psychologically beneficial than
            extrinsically motivated change (change driven by reaching a number).
            An AI that anchors health conversations in felt experience rather than
            metrics is, in this framework, likely to produce better outcomes for
            the same reason.
          </p>

          <p style={s.p}>
            It is worth noting that this research is early. The field of AI-assisted
            wellbeing support is new enough that the evidence base, while promising,
            is not yet definitive. MEOK does not claim to be a treatment or a
            clinical intervention. It claims to be a companion &mdash; one built with
            enough care about alignment and values that it is less likely to harm
            than default AI tools, and more likely to support the kind of reflection
            that serves genuine wellbeing.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── FAQ Section ───────────────────────────────────────────────── */}
        <section style={s.faqSection}>
          <span style={s.faqLabel}>Frequently Asked Questions</span>
          <h2 style={s.faqHeading}>Your Questions About AI and Weight Stigma</h2>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Can AI help with body image issues?</h3>
            <p style={s.faqA}>
              Yes, when designed with genuine care. A non-judgmental AI companion
              can provide a consistent, shame-free space to process feelings about
              your body, track mood patterns around food and self-perception, and
              practise self-compassionate thinking. MEOK AI LABS is specifically
              aligned to support body image without offering weight-loss advice or
              reinforcing appearance-based judgments. Research on chatbot-delivered
              self-compassion interventions shows meaningful reductions in body
              dissatisfaction after six weeks of use &mdash; driven not by weight change
              but by a changed psychological relationship with the body.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Does MEOK support intuitive eating?</h3>
            <p style={s.faqA}>
              Yes. MEOK understands and actively supports the principles of
              intuitive eating &mdash; including honouring hunger and fullness, rejecting
              the diet mentality, making peace with food, and feeling your fullness.
              It will never frame food as good or bad, never suggest calorie
              restriction, and will actively support your autonomy in developing
              a more neutral, caring relationship with eating. If you\u2019re working
              through the Tribole and Resch framework, MEOK can accompany that
              process without undermining it.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Will MEOK tell me to lose weight?</h3>
            <p style={s.faqA}>
              No. MEOK will not recommend weight loss, suggest a lower calorie
              intake, compare your body to any standard, or frame any body size
              as a problem to fix. This is a hard alignment constraint, not a
              contextual guideline. MEOK\u2019s wellbeing dimension is built on the
              principle that your worth is not conditional on your body size, and
              that your right to care does not depend on making your body
              different. If you tell MEOK you want to lose weight, it will explore
              what you actually want &mdash; energy, comfort in your body, freedom
              from food anxiety &mdash; and support those directly.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>What is weight stigma?</h3>
            <p style={s.faqA}>
              Weight stigma is prejudice, discrimination, or negative social judgment
              directed at people because of their body size or weight. It operates
              in healthcare settings (where symptoms may be dismissed as weight
              problems), workplaces (where hiring, promotion, and daily interactions
              are affected), and social life (where appearance commentary and diet
              culture messaging are pervasive). Research links weight stigma to
              avoidance of medical care, elevated cortisol, worsened mental health
              outcomes, and paradoxically increased weight gain &mdash; making it a
              public health issue independent of weight itself.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>How does MEOK avoid reinforcing diet culture?</h3>
            <p style={s.faqA}>
              MEOK\u2019s care-based alignment explicitly excludes diet culture framing.
              It will not moralise food choices, reward weight loss, suggest body
              transformation goals, use good/bad food language, or imply that
              thinner is healthier or more worthy of care. The Maternal Covenant
              that governs MEOK prioritises long-term emotional wellbeing and
              autonomy over compliance with culturally imposed body standards. This
              is a design constraint built into alignment, not a setting that can
              be toggled or overridden by the right prompt.
            </p>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div style={s.cta}>
          <span style={s.ctaLabel}>MEOK AI LABS</span>
          <h2 style={s.ctaHeading}>
            A Companion That Respects Your Body<br />the Way You Deserve to Be Respected
          </h2>
          <p style={s.ctaText}>
            You have spent long enough in spaces that treat your body as a problem
            to be solved. MEOK is built to be something different: a companion
            that holds space for your actual experience, supports your autonomy,
            and never, under any circumstances, tells you that your worth is
            measured by your size.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Meet MEOK
          </Link>
        </div>

        {/* Footer note */}
        <p
          style={{
            marginTop: "48px",
            fontSize: "13px",
            lineHeight: 1.65,
            color: "rgba(245,240,232,0.38)",
            textAlign: "center",
          }}
        >
          MEOK AI LABS &bull; Founder: Nicholas Templeman &bull;{" "}
          <a
            href="https://x.com/meok_ai"
            style={{ color: "rgba(201,168,76,0.55)", textDecoration: "none" }}
          >
            @meok_ai
          </a>{" "}
          &bull; This article is for informational purposes and does not
          constitute medical, nutritional, or clinical advice. If you are
          experiencing an eating disorder or acute body image distress, please
          contact Beat on 0808 801 0677 (UK) or speak with a qualified
          healthcare professional.
        </p>
      </div>
    </main>
  )
}
