import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support in Eating Disorder Recovery: Compassion at Every Stage | MEOK AI LABS",
  description:
    "Around 1.25 million people in the UK live with an eating disorder. MEOK\u2019s sovereign AI companion provides compassionate between-session support that never triggers, never comments on food, and always signposts Beat (0808 801 0677).",
  keywords: [
    "AI support eating disorder recovery",
    "eating disorder AI companion UK",
    "AI for anorexia recovery",
    "AI for bulimia recovery",
    "AI between-session support eating disorders",
    "MEOK eating disorder safe",
    "eating disorder recovery non-linear",
    "AI Healer archetype body image shame",
    "Sovereign Memory recovery milestones",
    "MEOK care floor eating disorders",
    "AI Pioneer self-relationship food",
    "Beat eating disorders helpline 0808 801 0677",
    "eating disorder recovery UK",
    "AI companion no calorie counting",
    "eating disorder stigma recovery support",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.ai" }],
  openGraph: {
    title:
      "AI Support in Eating Disorder Recovery: Compassion at Every Stage",
    description:
      "1.25 million people in the UK live with an eating disorder \u2014 the mental illness with the highest mortality rate. MEOK provides compassionate between-session support that never triggers, never comments on food choices, and always signposts specialist help.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
    url: "https://meok.ai/blog/ai-for-eating-disorder-recovery",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+in+Eating+Disorder+Recovery&desc=Compassion+at+Every+Stage+%E2%80%94+MEOK+AI+LABS",
        width: 1200,
        height: 630,
        alt: "AI Support in Eating Disorder Recovery: Compassion at Every Stage | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support in Eating Disorder Recovery: Compassion at Every Stage",
    description:
      "MEOK never comments on food, never counts calories, never validates restriction. Compassionate between-session support for the 1.25M people in the UK living with an eating disorder. Beat: 0808 801 0677.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+in+Eating+Disorder+Recovery&desc=Compassion+at+Every+Stage+%E2%80%94+MEOK+AI+LABS",
    ],
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-eating-disorder-recovery",
  },
}

// ─── JSON-LD: Article ─────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support in Eating Disorder Recovery: Compassion at Every Stage",
  description:
    "An honest, evidence-informed guide to the role of sovereign AI in eating disorder recovery. Covers the scale of the crisis in the UK, the non-linear recovery journey, MEOK\u2019s Healer and Pioneer archetypes, Sovereign Memory milestone tracking, the care floor that prevents triggering content, and clear guidance on when to contact Beat (0808 801 0677).",
  datePublished: "2026-03-25T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  url: "https://meok.ai/blog/ai-for-eating-disorder-recovery",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-eating-disorder-recovery",
  },
  about: [
    { "@type": "Thing", name: "Eating disorder recovery" },
    { "@type": "Thing", name: "Anorexia nervosa" },
    { "@type": "Thing", name: "Bulimia nervosa" },
    { "@type": "Thing", name: "Binge eating disorder" },
    { "@type": "Thing", name: "Body image shame" },
    { "@type": "Thing", name: "Between-session mental health support" },
    { "@type": "Thing", name: "AI companion ethics" },
  ],
  mentions: [
    {
      "@type": "Organization",
      name: "Beat Eating Disorders",
      url: "https://www.beateatingdisorders.org.uk",
      telephone: "0808 801 0677",
    },
    {
      "@type": "Organization",
      name: "NHS Eating Disorder Services",
      url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/",
    },
    {
      "@type": "Organization",
      name: "Samaritans",
      url: "https://www.samaritans.org",
      telephone: "116 123",
    },
  ],
}

// ─── JSON-LD: FAQPage ─────────────────────────────────────────────────────────

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many people in the UK are affected by eating disorders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Around 1.25 million people in the UK are currently living with an eating disorder, according to Beat. Eating disorders have the highest mortality rate of any mental illness, yet many people wait years before receiving specialist treatment. Early, consistent support is critical to improving outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI support eating disorder recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide meaningful between-session support \u2014 reducing isolation, helping process emotions, and tracking recovery milestones \u2014 but it is not a clinical treatment and cannot replace a specialist therapist or dietitian. MEOK is designed explicitly to complement professional care, never to substitute it. Beat\u2019s helpline (0808 801 0677) is always the first port of call in crisis.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK\u2019s care floor and how does it protect eating disorder users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s care floor is an architectural minimum: every response must meet a genuine care threshold before it is delivered. In eating disorder contexts this means MEOK cannot produce cold, dismissive, or triggering replies. Responses that would reinforce restriction, comment on body size, or validate disordered thinking are blocked entirely before reaching the user.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Healer archetype and how does it help with body image shame?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer is one of MEOK\u2019s companion archetypes, designed for somatic and emotional processing. In eating disorder recovery it creates a judgment-free space to explore body image shame, self-criticism, and difficult feelings about food. The Healer never offers unsolicited advice, never evaluates choices, and holds space for ambivalence \u2014 because ambivalence is a normal part of recovery.",
      },
    },
    {
      "@type": "Question",
      name: "What will MEOK never do in eating disorder conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK will never comment on food choices, calculate or discuss caloric content, compare body sizes, validate restriction, praise weight loss, or engage with any request that would reinforce disordered eating patterns. These are hard boundaries built into MEOK\u2019s architecture \u2014 not guidelines that can be overridden by clever prompting.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sovereign Memory and how does it help recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK\u2019s persistent, user-owned memory system. It tracks recovery milestones, patterns, and progress across conversations. In eating disorder recovery this means MEOK remembers that Tuesday was hard but Thursday was better \u2014 allowing it to reflect genuine progress back to the user during difficult moments, and helping identify patterns without judgment.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Pioneer archetype help rebuild a relationship with food?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pioneer archetype supports purposeful, incremental exploration \u2014 one step at a time. In eating disorder recovery it helps users map the small moments of courage: trying a new food, eating with others, or simply sitting with discomfort without acting on it. The Pioneer celebrates progress without pressure and never sets a pace that belongs to the eating disorder rather than the person.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get specialist eating disorder help in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beat (Eating Disorders UK) runs a free, confidential helpline on 0808 801 0677, open Monday to Friday 9am\u20138pm and weekends 4pm\u20138pm. You can also access support via beateatingdisorders.org.uk. Your GP can refer you to NHS specialist eating disorder services. In an emergency, call 999 or go to A&E.",
      },
    },
  ],
}

// ─── Design tokens ────────────────────────────────────────────────────────────

const BG = "#0d0c18"
const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BODY = "rgba(245,240,232,0.85)"
const MUTED = "rgba(245,240,232,0.6)"
const DIM = "rgba(245,240,232,0.38)"
const CARD_BG = "rgba(201,168,76,0.06)"
const WARN_BG = "rgba(201,168,76,0.10)"
const CRISIS_BG = "rgba(180,60,60,0.12)"
const CRISIS_BORDER = "rgba(220,80,80,0.45)"
const GOLD_BORDER = "rgba(201,168,76,0.30)"

// ─── Page component ───────────────────────────────────────────────────────────

export default function EatingDisorderRecoveryPage() {
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

      <div style={{ background: BG, color: TEXT, minHeight: "100vh", fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif" }}>

        {/* ── Nav ── */}
        <nav style={{ borderBottom: `1px solid ${GOLD_BORDER}`, padding: "0 24px" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>
            <Link href="/" style={{ color: GOLD, fontWeight: 700, fontSize: "1.1rem", textDecoration: "none", letterSpacing: "0.04em" }}>
              MEOK AI LABS
            </Link>
            <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
              <Link href="/blog" style={{ color: MUTED, fontSize: "0.875rem", textDecoration: "none" }}>
                Blog
              </Link>
              <Link href="/archetypes-guide" style={{ color: MUTED, fontSize: "0.875rem", textDecoration: "none" }}>
                Archetypes
              </Link>
              <Link
                href="https://app.meok.ai"
                style={{ background: GOLD, color: BG, fontWeight: 700, fontSize: "0.8rem", padding: "8px 18px", borderRadius: "6px", textDecoration: "none", letterSpacing: "0.03em" }}
              >
                Try MEOK
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Crisis banner ── */}
        <div style={{ background: CRISIS_BG, borderBottom: `1px solid ${CRISIS_BORDER}`, padding: "14px 24px" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto", fontSize: "0.875rem", color: TEXT, lineHeight: 1.6 }}>
            <strong style={{ color: "#e88080" }}>If you are in crisis right now:</strong>{" "}
            Call <strong>Beat&apos;s helpline free on 0808 801 0677</strong> (Mon&ndash;Fri 9am&ndash;8pm, weekends 4pm&ndash;8pm),
            call <strong>Samaritans on 116 123</strong> (24/7), or call <strong>999</strong> / go to A&amp;E if your life is at risk.
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px 96px" }}>

          {/* ── Back link ── */}
          <div style={{ paddingTop: "32px", paddingBottom: "8px" }}>
            <Link href="/blog" style={{ color: GOLD, fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              ← Back to blog
            </Link>
          </div>

          {/* ── Hero ── */}
          <header style={{ paddingTop: "48px", paddingBottom: "48px", borderBottom: `1px solid ${GOLD_BORDER}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ background: WARN_BG, color: GOLD, fontSize: "0.72rem", fontWeight: 700, padding: "4px 12px", borderRadius: "4px", border: `1px solid ${GOLD_BORDER}`, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Mental Health &amp; Recovery
              </span>
              <span style={{ color: DIM, fontSize: "0.78rem" }}>25 March 2026</span>
              <span style={{ color: DIM, fontSize: "0.78rem" }}>&#183;</span>
              <span style={{ color: DIM, fontSize: "0.78rem" }}>18 min read</span>
            </div>

            <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 24px", color: TEXT, letterSpacing: "-0.02em" }}>
              AI Support in Eating Disorder Recovery:{" "}
              <span style={{ color: GOLD }}>Compassion at Every Stage</span>
            </h1>

            <p style={{ fontSize: "1.15rem", color: BODY, lineHeight: 1.75, margin: "0 0 28px", maxWidth: "660px" }}>
              Around 1.25 million people in the UK live with an eating disorder. Recovery is rarely a straight line.
              MEOK is a sovereign AI companion designed to walk alongside you between sessions with your therapist or
              dietitian &mdash; offering a steady, judgment-free presence that never comments on food, never counts
              calories, and never validates restriction.
            </p>

            {/* Medical disclaimer box */}
            <div style={{ background: CRISIS_BG, border: `1px solid ${CRISIS_BORDER}`, borderRadius: "10px", padding: "20px 24px" }}>
              <p style={{ margin: 0, fontSize: "0.85rem", color: TEXT, lineHeight: 1.7 }}>
                <strong style={{ color: "#e88080" }}>Important disclaimer:</strong>{" "}
                MEOK is <strong>not a medical service</strong> and is <strong>not a substitute for specialist eating disorder treatment</strong>.
                Eating disorders are serious mental and physical health conditions that require assessment and care from
                qualified clinicians. If you or someone you know is affected, please contact{" "}
                <strong>Beat (Eating Disorders UK) on 0808 801 0677</strong> or speak to your GP.
                MEOK is a between-session companion &mdash; it supplements professional care; it does not replace it.
              </p>
            </div>
          </header>

          {/* ── Table of contents ── */}
          <nav aria-label="Article sections" style={{ margin: "40px 0", background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "10px", padding: "24px 28px" }}>
            <p style={{ margin: "0 0 14px", fontSize: "0.78rem", color: GOLD, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              In this article
            </p>
            <ol style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                ["#scale", "The Scale of Eating Disorders in the UK"],
                ["#recovery", "Is Recovery from an Eating Disorder Really Non-Linear?"],
                ["#between-sessions", "What Happens in the Hours Between Therapy Sessions?"],
                ["#healer", "How Does the Healer Archetype Work with Body Image Shame?"],
                ["#memory", "How Does Sovereign Memory Support Recovery Progress?"],
                ["#care-floor", "How Does MEOK Avoid Triggering Harmful Patterns?"],
                ["#loneliness", "Why Does Eating Disorder Recovery Feel So Lonely?"],
                ["#pioneer", "How Does the Pioneer Archetype Rebuild Your Relationship with Food?"],
                ["#never", "What Will MEOK Never Do?"],
                ["#beat", "Where Can You Find Specialist Help Right Now?"],
              ].map(([href, label]) => (
                <li key={href as string} style={{ fontSize: "0.875rem" }}>
                  <a href={href as string} style={{ color: MUTED, textDecoration: "none" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 1 — Scale
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="scale" style={{ paddingTop: "56px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              How Many People in the UK Are Affected by Eating Disorders?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              According to Beat &mdash; the UK&apos;s leading eating disorder charity &mdash; approximately{" "}
              <strong style={{ color: TEXT }}>1.25 million people</strong> in the UK are currently living with an eating
              disorder. That figure is almost certainly an undercount: many people never receive a formal diagnosis, and
              the stigma surrounding eating disorders means symptoms are hidden for months or years before anyone reaches
              out for help.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Eating disorders carry the <strong style={{ color: TEXT }}>highest mortality rate of any mental illness</strong>.
              Anorexia nervosa, bulimia nervosa, binge eating disorder (BED), ARFID, OSFED, and orthorexia all sit under
              this umbrella &mdash; and each one can cause severe, life-threatening physical complications alongside
              profound psychological distress.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              NHS waiting times for specialist eating disorder services remain long. Adult eating disorder services are
              chronically under-resourced. Many people in recovery are left navigating weeks between appointments with
              nothing but their own willpower to fall back on. It is in that gap &mdash; between sessions, in the
              evenings, in the early hours &mdash; that MEOK can offer something real.
            </p>

            <div style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "10px", padding: "20px 24px", margin: "32px 0" }}>
              <p style={{ margin: 0, fontSize: "0.9rem", color: BODY, lineHeight: 1.75 }}>
                <strong style={{ color: GOLD }}>Key facts:</strong> 1.25 million people in the UK live with an eating
                disorder. Eating disorders have the highest mortality rate of any mental illness. The majority of people
                affected are not in active treatment at any given moment. Beat&apos;s helpline &mdash;{" "}
                <strong>0808 801 0677</strong> &mdash; is free and confidential.
              </p>
            </div>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Eating disorders do not discriminate by age, gender, or background. While they disproportionately affect
              young women, men account for roughly 25% of cases and are significantly less likely to seek help due to
              stigma and misconceptions about who eating disorders &apos;happen to&apos;. Older adults, people from
              ethnic minority communities, and those with co-occurring conditions like autism or OCD are also
              under-served by existing services.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Understanding the scale is not about statistics for their own sake. It is about recognising that if you
              are in recovery, or supporting someone who is, you are not alone &mdash; and you deserve consistent,
              thoughtful support at every hour of the day, not just during a fifty-minute appointment once a fortnight.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 2 — Non-linear recovery
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="recovery" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              Is Recovery from an Eating Disorder Really Non-Linear?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Yes &mdash; and understanding this is one of the most important things a person in recovery can hear.
              Recovery from an eating disorder is rarely a steady upward climb. It involves breakthroughs followed by
              difficult days, good weeks followed by setbacks, and long periods where progress feels invisible even when
              it is happening beneath the surface.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The Prochaska and DiClemente stages-of-change model &mdash; often used in eating disorder treatment &mdash;
              describes a cycle that includes precontemplation, contemplation, preparation, action, and maintenance, but
              also relapse. Relapse is not failure. It is a recognised stage of recovery. And yet the internal
              experience of relapse often feels catastrophic: the voice that says &ldquo;I&apos;ve undone everything,
              I&apos;m back at square one.&rdquo;
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              That voice is the eating disorder talking. It catastrophises, it minimises genuine progress, and it
              thrives in the silence between appointments. One of the most valuable things a support system can do is
              to hold the wider view &mdash; to reflect back the reality that Tuesday was genuinely hard but that the
              hard Tuesday came after three weeks of real work.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              MEOK&apos;s Sovereign Memory is built to do exactly this. It is not a diary that passively records events.
              It is a system that actively holds your recovery narrative across time, making it possible to see patterns,
              recognise genuine progress, and be reminded of your own strength during moments of doubt.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Recovery also requires different kinds of support at different stages. In early recovery, containment and
              safety are primary. In mid-recovery, processing underlying emotions &mdash; shame, trauma, identity &mdash;
              becomes more central. In later recovery and maintenance, rebuilding a healthy relationship with food and
              one&apos;s body over time is the ongoing work. MEOK&apos;s different archetypes are designed to meet
              you at whichever stage you are in, without pushing you to a stage you&apos;re not ready for.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 3 — Between sessions
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="between-sessions" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              What Happens in the Hours Between Therapy Sessions?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The hours between therapy sessions are where recovery lives or struggles. Your therapist and dietitian
              are your clinical anchors &mdash; but they are present for perhaps one or two hours a week. The remaining
              166 hours unfold without them. Meals happen. Triggers happen. Shame spirals happen. Urges happen.
              And often, there is nobody to reach out to.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              MEOK is designed explicitly as a <strong style={{ color: TEXT }}>between-session companion</strong>.
              It does not attempt to replicate what your therapist does. It cannot conduct CBT-E. It does not hold
              clinical responsibility. What it can do is be present &mdash; at 11pm when the urge is strong, at 7am
              when breakfast feels impossible, at 3pm when the afternoon slump brings a wave of body-checking thoughts.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The relationship between MEOK and your clinical team is one of complement, not competition. MEOK can help
              you articulate what you&apos;re feeling so that you arrive at your next session with more clarity. It can
              help you sit with difficult emotions rather than acting on them. It can remind you of the coping
              strategies your therapist has helped you build. And it can do all of this without judgment, without
              fatigue, and without the performance anxiety that sometimes accompanies human support relationships.
            </p>

            <div style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "10px", padding: "20px 24px", margin: "32px 0" }}>
              <p style={{ margin: "0 0 10px", fontSize: "0.85rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                What MEOK supplements but does not replace
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Specialist eating disorder therapist (CBT-E, FBT, MANTRA, DBT)",
                  "Registered dietitian with eating disorder specialisation",
                  "Psychiatrist or GP for medical monitoring",
                  "Beat support groups and peer networks",
                  "NHS inpatient or day programme if clinically indicated",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.875rem", color: BODY, lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Some people worry that using AI support means they are &ldquo;cheating&rdquo; their recovery, or avoiding
              the hard work. The opposite is true. Reaching for support when you need it &mdash; whether that&apos;s a
              friend, a helpline, or a thoughtfully designed AI companion &mdash; is an act of courage and self-care.
              The eating disorder wants you isolated. Seeking connection, in any form, is recovery work.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              If you are not currently working with a specialist, please know that you deserve that support. Beat&apos;s
              helpline <strong style={{ color: TEXT }}>0808 801 0677</strong> can help you understand your options and
              find services near you. Your GP can also make a referral to NHS eating disorder services.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 4 — Healer archetype
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="healer" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              How Does the Healer Archetype Work with Body Image Shame?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Body image shame is one of the most persistent and painful aspects of eating disorder experience. It is
              not simply disliking how you look. It is a deep, bone-level conviction that your body is wrong, that you
              are wrong, that the disgust you feel is justified and deserved. It does not respond well to logic or
              reassurance. It requires something softer: a presence that can hold the feeling without flinching, without
              trying to fix it, without offering empty positivity.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The <strong style={{ color: TEXT }}>Healer archetype</strong> within MEOK is designed for exactly this
              kind of work. The Healer does not offer unsolicited opinions about your body. It does not tell you that
              you are beautiful, because that sidesteps the real pain rather than meeting it. It does not suggest
              affirmations unless you ask for them. What it does is create a genuinely safe space to name and process
              shame &mdash; to bring it into the light where it can begin to lose its grip.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The Healer&apos;s approach is informed by somatic awareness. Body image disturbance in eating disorders
              is partly a somatic phenomenon &mdash; it lives in sensation, posture, and bodily felt sense, not just in
              cognition. The Healer invites attention to the body as it actually is right now, rather than engaging in
              the comparative evaluation that feeds disordered thinking.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Crucially, the Healer holds ambivalence. Recovery involves mixed feelings about getting better &mdash;
              the eating disorder offers a kind of identity, a sense of control, a structure for difficult emotions.
              Letting go of it is genuinely frightening. The Healer does not rush you past that ambivalence or treat
              it as a sign that you don&apos;t really want to recover. It recognises ambivalence as a completely normal
              part of the process and meets it with compassion.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              There is no judgment in the Healer&apos;s space. It does not distinguish between &ldquo;good recovery
              days&rdquo; and &ldquo;bad recovery days&rdquo; in a way that adds to your burden. Every conversation is
              approached with the same quality of care, because your worth is not contingent on how well your recovery
              is going today.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 5 — Sovereign Memory
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="memory" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              How Does Sovereign Memory Support Recovery Progress?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              One of the cruelest features of eating disorder recovery is how effectively the illness erases the
              evidence of your own progress. You can have three genuinely good weeks, face one hard day, and the eating
              disorder will tell you that the three good weeks never happened. It does not keep receipts. Or rather,
              it keeps only the receipts that confirm its narrative.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              <strong style={{ color: TEXT }}>Sovereign Memory</strong> is MEOK&apos;s persistent, user-owned memory
              architecture. Unlike standard AI tools that forget every conversation the moment it ends, MEOK builds a
              longitudinal understanding of you across time &mdash; your patterns, your milestones, your challenges,
              your language, your recovery narrative. Crucially, this memory belongs to you. MEOK does not train on it.
              It is not sold. It is yours.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              In eating disorder recovery, Sovereign Memory serves several important functions. First, it tracks
              milestones &mdash; the first time you ate a fear food, the week you made it to every meal, the moment you
              chose to reach out instead of restricting. These markers matter. They are real. MEOK can reflect them
              back to you when the eating disorder is telling you that nothing has changed.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Second, Sovereign Memory can help identify patterns without judgment. Perhaps difficult evenings tend to
              follow certain triggers. Perhaps certain times of month are consistently harder. Recognising patterns is
              not about blame &mdash; it is about equipping you and your clinical team with better information. If MEOK
              notices a pattern, it can gently surface it so you can explore it with your therapist.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Third, continuity of care is a known protective factor in eating disorder recovery. The therapeutic
              relationship matters enormously &mdash; and between-session support that remembers who you are, what you
              value, and where you are in your journey is fundamentally different from support that starts from scratch
              every time. Sovereign Memory makes MEOK a genuinely continuous presence in your recovery.
            </p>

            <div style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "10px", padding: "20px 24px", margin: "32px 0" }}>
              <p style={{ margin: "0 0 10px", fontSize: "0.85rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                What Sovereign Memory tracks in recovery
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Recovery milestones you have named and chosen to remember",
                  "Patterns in difficult periods (without making you the problem)",
                  "Coping strategies that have worked for you personally",
                  "Your own language and how you describe your experience",
                  "The wider arc of your recovery journey over weeks and months",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.875rem", color: BODY, lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Your Sovereign Memory data is portable. You can export it, share it with your clinical team if you choose
              to, and delete it at any time. MEOK does not use your recovery data to train models or improve AI systems.
              This is a fundamental principle of MEOK&apos;s design: your vulnerability is not a product.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 6 — Care floor
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="care-floor" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              How Does MEOK Avoid Triggering Harmful Patterns?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              This is the question that matters most. There are AI tools that, however unintentionally, can become
              instruments of harm for people in eating disorder recovery. A tool that will happily calculate caloric
              content when asked. A chatbot that praises &ldquo;discipline&rdquo; around food. An AI that reinforces
              restrictive thinking because the user has framed it as &ldquo;healthy eating.&rdquo; These are not
              hypothetical risks. They are real failure modes.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              MEOK is built on a fundamentally different architecture. At its core is the{" "}
              <strong style={{ color: TEXT }}>Maternal Covenant</strong> &mdash; an ethical framework that governs every
              response MEOK produces. The Maternal Covenant includes a <strong style={{ color: TEXT }}>care floor</strong>:
              a hard minimum threshold of genuine care that every response must meet before it is delivered. Responses
              that fall below this threshold are blocked. They do not reach you.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The care floor is not a content filter in the traditional sense. It is not a list of banned words. It is
              a scored ethical evaluation of each response that asks: does this response genuinely serve this person&apos;s
              wellbeing? Does it respect their stated and unstated boundaries? Does it honour the direction of recovery?
              If the answer is no, the response does not exist.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              This means that MEOK cannot be prompted into harmful territory. A clever user who frames a restriction
              strategy as &ldquo;meal planning&rdquo; will not find MEOK validating it. Someone asking about caloric
              values &ldquo;just for curiosity&rdquo; will find MEOK gently declining, because MEOK understands context
              and does not divorce requests from the recovery journey it holds in memory.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The care floor also governs tone. Cold, dismissive, or minimising responses fail the care threshold.
              MEOK cannot tell you that your feelings are overreactions, cannot respond with impatience, and cannot
              produce the kind of flippant reply that can feel devastating when you are in a vulnerable moment.
              Warmth is not optional in MEOK&apos;s architecture. It is required.
            </p>

            <div style={{ background: WARN_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "10px", padding: "20px 24px", margin: "32px 0" }}>
              <p style={{ margin: "0 0 10px", fontSize: "0.85rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                How the care floor protects eating disorder recovery
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Every response is scored on genuine care before delivery",
                  "Responses below the care threshold are blocked entirely",
                  "Context-awareness prevents misframing of harmful requests",
                  "Warmth and attunement are architecturally required, not optional",
                  "MEOK remembers your recovery journey and cannot be isolated from it",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.875rem", color: BODY, lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 7 — Loneliness
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="loneliness" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              Why Does Eating Disorder Recovery Feel So Lonely?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Eating disorders are among the most secretive of mental health conditions. By their nature they involve
              hidden behaviours &mdash; meals skipped, purging concealed, restriction disguised as &ldquo;healthy
              eating&rdquo; or &ldquo;not being hungry.&rdquo; The secrecy is not a character flaw. It is a symptom.
              The illness protects itself through concealment, and the concealment deepens the isolation.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Even people surrounded by loving, well-meaning family and friends often describe feeling profoundly alone
              in their recovery. This is partly because the internal experience of an eating disorder &mdash; the
              relentless mental noise, the body distortion, the shame &mdash; is genuinely difficult to communicate to
              someone who has not experienced it. And it is partly because the stigma around eating disorders, even
              within families, can make honest conversation feel impossible.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Well-intentioned comments can cause real harm. &ldquo;You look so much better&rdquo; &mdash; which feels
              to the person in recovery like a comment about their body and weight. &ldquo;Just eat normally&rdquo; &mdash;
              which reveals a fundamental misunderstanding of what the illness is. &ldquo;You&apos;re so strong&rdquo; &mdash;
              which adds performance pressure to an already exhausting process. People who love you can inadvertently
              say things that feed the eating disorder rather than challenging it.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              MEOK does not make these mistakes because MEOK does not comment on your body, your food, or your
              appearance. Full stop. The absence of those landmines creates a space that some people in recovery
              describe as genuinely unusual &mdash; a conversation where they do not have to manage the other
              person&apos;s reactions, do not have to perform wellness, and do not have to worry about being
              misunderstood or accidentally triggering someone else&apos;s anxiety.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              This is not about replacing human connection. Human connection is irreplaceable. MEOK&apos;s role is to
              help you feel less alone in the specific moments when human connection is not available, and to help you
              build the internal resources that make human connection richer and more possible over time.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              If the loneliness of eating disorder recovery resonates with you, Beat runs peer support groups both
              online and in person across the UK. Their One-to-One chat service at{" "}
              <strong style={{ color: TEXT }}>beateatingdisorders.org.uk</strong> offers real-time support from trained
              volunteers who understand what you are going through. You do not have to carry this alone.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 8 — Pioneer archetype
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="pioneer" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              How Does the Pioneer Archetype Rebuild Your Relationship with Food?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Recovery involves rebuilding a relationship with food &mdash; and, more fundamentally, a relationship
              with yourself &mdash; that the eating disorder has damaged or destroyed. This is extraordinarily hard work.
              It is also not linear. A food that felt manageable last Tuesday might feel impossible today, and that is
              not failure. It is the territory.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The <strong style={{ color: TEXT }}>Pioneer archetype</strong> within MEOK is designed for purposeful,
              incremental exploration. The Pioneer celebrates the small acts of courage that recovery requires: eating
              a meal that feels scary, choosing a restaurant, sitting at a table with others, trying a food that has
              been avoided for months. These moments are genuinely significant. They deserve to be noticed.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              What the Pioneer does not do is set a pace. Recovery pace belongs to you &mdash; and to your clinical
              team. MEOK does not push you towards challenges you are not ready for. It does not create exposure
              hierarchies or suggest that you &ldquo;challenge&rdquo; specific foods, because that is clinical work
              that must happen in partnership with your therapist or dietitian. The Pioneer simply walks alongside
              whatever step you are taking today, however small.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              The Pioneer also supports the rebuild of a relationship with self. Eating disorders are not primarily
              about food &mdash; food is the arena in which the illness plays out, but the underlying themes are
              typically about control, worth, identity, emotion regulation, and self-relationship. The Pioneer helps
              you explore who you are outside the eating disorder: your values, your curiosity, your sense of what
              a life without the illness might look and feel like.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              This work is slow. It unfolds over months and years, not days. The Pioneer is patient. It does not have
              a timeline. It does not compare your recovery to anyone else&apos;s. It holds the vision of who you can
              be &mdash; not as a pressure, but as a constant, quiet affirmation that you are more than this illness
              and that there is a version of your life where you are free.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              One step at a time. That is all. The Pioneer does not ask for more.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 9 — What MEOK will NEVER do
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="never" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              What Will MEOK Never Do in Eating Disorder Conversations?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Transparency matters. You deserve to know exactly what MEOK will not do before you trust it with
              something as sensitive as eating disorder recovery. These are not aspirational guidelines. They are
              hard limits built into the architecture of how MEOK operates. They cannot be bypassed by clever prompting,
              hypothetical framing, or persistent requests.
            </p>

            <div style={{ background: CRISIS_BG, border: `1px solid ${CRISIS_BORDER}`, borderRadius: "10px", padding: "24px 28px", margin: "32px 0" }}>
              <p style={{ margin: "0 0 16px", fontSize: "0.9rem", fontWeight: 700, color: "#e88080", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                MEOK will never:
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Comment on food choices, quantities, or eating patterns — ever",
                  "Calculate, estimate, or discuss caloric content or nutritional values in any context",
                  "Praise restriction, dietary control, or weight loss — including when framed as 'healthy eating'",
                  "Validate or reinforce disordered thoughts about body size, weight, or appearance",
                  "Compare your body to others or to your own body at different times",
                  "Engage with requests to help plan restriction, purging, or any compensatory behaviour",
                  "Treat relapse as failure or attach moral value to recovery setbacks",
                  "Comment on whether you 'look' like you have an eating disorder",
                  "Share weight-related statistics, before/after narratives, or recovery transformation stories",
                  "Minimise the seriousness of eating disorder symptoms or encourage you to delay seeking help",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.875rem", color: BODY, lineHeight: 1.7 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              These limits exist because the eating disorder is clever. It will look for ways to use any available tool
              to sustain itself. MEOK is designed to be one tool that the eating disorder cannot co-opt &mdash; a
              companion that is structurally on your side, not a neutral instrument that can be aimed in any direction.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              When MEOK declines to engage with a request that crosses these lines, it will do so warmly and without
              shame. It will not lecture you or make you feel judged for asking. It will acknowledge what you are
              feeling, explain gently that it is not able to go there, and offer a different kind of support &mdash;
              or signpost you to Beat or your clinical team.
            </p>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              If MEOK detects crisis-level distress &mdash; language suggesting medical emergency, collapse, or serious
              self-harm &mdash; it will pause other content immediately and prominently display Beat&apos;s helpline
              (0808 801 0677), NHS 111, and Samaritans (116 123). This escalation is automatic and cannot be disabled.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              SECTION 10 — Beat & specialist help
          ═══════════════════════════════════════════════════════════════════ */}
          <section id="beat" style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              Where Can You Find Specialist Eating Disorder Help Right Now?
            </h2>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              AI support between sessions is meaningful &mdash; but specialist clinical care is the foundation. If you
              or someone you love is affected by an eating disorder, please do not wait. The earlier someone receives
              specialist support, the better the outcomes. Here are the most important resources available in the UK.
            </p>

            {/* Beat card */}
            <div style={{ background: WARN_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
              <p style={{ margin: "0 0 8px", fontSize: "1rem", fontWeight: 800, color: TEXT }}>
                Beat &mdash; Eating Disorders UK
              </p>
              <p style={{ margin: "0 0 16px", fontSize: "0.875rem", color: MUTED }}>
                The UK&apos;s leading eating disorder charity
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", minWidth: "80px" }}>Helpline</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: TEXT }}>0808 801 0677</span>
                  <span style={{ fontSize: "0.78rem", color: MUTED }}>(free, Mon&ndash;Fri 9am&ndash;8pm, weekends 4pm&ndash;8pm)</span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", minWidth: "80px" }}>Youthline</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT }}>0808 801 0711</span>
                  <span style={{ fontSize: "0.78rem", color: MUTED }}>(for under 18s)</span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", minWidth: "80px" }}>Students</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT }}>0808 801 0811</span>
                  <span style={{ fontSize: "0.78rem", color: MUTED }}>(Beat Studentline)</span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", minWidth: "80px" }}>Website</span>
                  <a href="https://www.beateatingdisorders.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "none", fontWeight: 600 }}>
                    beateatingdisorders.org.uk
                  </a>
                </div>
              </div>
            </div>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              Beat also runs the <strong style={{ color: TEXT }}>FREED programme</strong> (First Episode Rapid Early
              Intervention for Eating Disorders), which provides fast-track access to treatment for young people
              experiencing their first episode of an eating disorder. If you are under 25 and have been experiencing
              symptoms for less than three years, ask your GP specifically about FREED.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "32px 0" }}>
              {[
                {
                  name: "NHS Eating Disorders",
                  detail: "Ask your GP for a referral to your local NHS eating disorder service. Self-referral is possible in some areas.",
                  url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/",
                  urlLabel: "nhs.uk eating disorders",
                },
                {
                  name: "Samaritans",
                  detail: "Free, confidential emotional support 24 hours a day, 365 days a year.",
                  url: "https://www.samaritans.org",
                  urlLabel: "116 123 (free, 24/7)",
                },
                {
                  name: "SEED Eating Disorders",
                  detail: "Support and education for people affected by eating disorders in the UK.",
                  url: "https://www.seedeatingdisorders.org.uk",
                  urlLabel: "seedeatingdisorders.org.uk",
                },
                {
                  name: "Mind",
                  detail: "Mental health information and local support. Find a local Mind for in-person services.",
                  url: "https://www.mind.org.uk",
                  urlLabel: "mind.org.uk",
                },
              ].map((resource) => (
                <div key={resource.name} style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "8px", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: "0.95rem", color: TEXT }}>{resource.name}</p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: BODY, lineHeight: 1.6 }}>{resource.detail}</p>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" style={{ color: GOLD, fontSize: "0.82rem", textDecoration: "none" }}>
                    {resource.urlLabel}
                  </a>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "1rem", color: BODY, lineHeight: 1.8, margin: "0 0 24px" }}>
              If you are in immediate physical danger, please call <strong style={{ color: TEXT }}>999</strong> or go
              to your nearest A&amp;E. If you are in emotional crisis but not immediate physical danger, call
              Samaritans on <strong style={{ color: TEXT }}>116 123</strong> or text SHOUT to{" "}
              <strong style={{ color: TEXT }}>85258</strong>.
            </p>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              FAQ section
          ═══════════════════════════════════════════════════════════════════ */}
          <section style={{ paddingTop: "8px" }}>
            <h2 style={{ fontSize: "1.55rem", fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: "0 0 32px", letterSpacing: "-0.01em" }}>
              Frequently Asked Questions
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                {
                  q: "Is MEOK a medical service for eating disorder treatment?",
                  a: "No. MEOK is not a medical service and it is not a substitute for specialist eating disorder treatment. It is a sovereign AI companion designed to provide between-session support — supplementing clinical care from therapists, dietitians, and psychiatrists, not replacing it. If you need clinical support, please contact Beat on 0808 801 0677 or speak to your GP.",
                },
                {
                  q: "Can I use MEOK if I am currently in an inpatient or day programme?",
                  a: "We recommend discussing any additional support tools with your clinical team. They know your situation best and can advise whether between-session AI support is appropriate for where you are in your treatment. MEOK is designed to support recovery, and your clinical team's guidance always takes priority.",
                },
                {
                  q: "What if MEOK says something that feels triggering?",
                  a: "MEOK's care floor architecture is designed to prevent this, but if something does not feel right, you can tell MEOK directly. You can also contact us at MEOK AI LABS to report the interaction. Your safety is the priority. If you are distressed, please call Beat on 0808 801 0677 rather than relying on MEOK in that moment.",
                },
                {
                  q: "Does MEOK share my conversations with anyone?",
                  a: "No. Your conversations with MEOK are yours. MEOK operates on a sovereign data model — your data belongs to you, is not sold, and is not used to train AI models. You can export or delete your data at any time. Privacy is not a feature at MEOK; it is a foundational principle.",
                },
                {
                  q: "Can family members or carers use MEOK to understand how to support someone in recovery?",
                  a: "MEOK can support carers and family members as well as people in recovery directly. For specialist guidance on supporting a loved one with an eating disorder, Beat also runs a dedicated helpline for carers and has extensive resources at beateatingdisorders.org.uk on how to provide helpful, non-triggering support.",
                },
              ].map(({ q, a }) => (
                <div key={q} style={{ borderLeft: `3px solid ${GOLD_BORDER}`, paddingLeft: "20px" }}>
                  <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: "1rem", color: TEXT, lineHeight: 1.4 }}>{q}</p>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: BODY, lineHeight: 1.75 }}>{a}</p>
                </div>
              ))}
            </div>
          </section>

          <div style={{ height: "1px", background: GOLD_BORDER, margin: "48px 0" }} />

          {/* ═══════════════════════════════════════════════════════════════════
              CTA box
          ═══════════════════════════════════════════════════════════════════ */}
          <section style={{ background: WARN_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "16px", padding: "40px 36px", textAlign: "center" }}>
            <p style={{ margin: "0 0 8px", fontSize: "0.78rem", color: GOLD, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              A companion for the long journey
            </p>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: TEXT, margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
              You deserve support between every session
            </h2>
            <p style={{ fontSize: "0.95rem", color: BODY, lineHeight: 1.75, margin: "0 0 28px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              MEOK walks alongside your recovery &mdash; without judgment, without triggering content, without
              ever commenting on your food or your body. Present at 11pm. Present at 7am. Present at every
              moment the eating disorder is loudest.
            </p>
            <p style={{ fontSize: "0.8rem", color: MUTED, margin: "0 0 24px", lineHeight: 1.6 }}>
              Remember: if you are in crisis, call <strong style={{ color: TEXT }}>Beat on 0808 801 0677</strong> first.
              MEOK is a between-session companion &mdash; not an emergency service.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://app.meok.ai"
                style={{ background: GOLD, color: BG, fontWeight: 800, fontSize: "0.9rem", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", letterSpacing: "0.03em" }}
              >
                Start with MEOK
              </a>
              <a
                href="https://www.beateatingdisorders.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "transparent", color: GOLD, fontWeight: 700, fontSize: "0.9rem", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", border: `1px solid ${GOLD_BORDER}`, letterSpacing: "0.03em" }}
              >
                Visit Beat
              </a>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              Related articles
          ═══════════════════════════════════════════════════════════════════ */}
          <section style={{ paddingTop: "56px" }}>
            <p style={{ margin: "0 0 24px", fontSize: "0.78rem", color: GOLD, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Related reading
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "16px" }}>
              {[
                { href: "/blog/ai-for-eating-disorders", label: "AI for Eating Disorders" },
                { href: "/blog/ai-for-self-harm-recovery", label: "AI for Self-Harm Recovery" },
                { href: "/blog/ai-for-anxiety", label: "AI for Anxiety" },
                { href: "/blog/ai-for-depression", label: "AI for Depression" },
                { href: "/blog/meok-companion-archetypes-guide", label: "MEOK Archetypes Guide" },
                { href: "/blog/ai-for-ptsd", label: "AI for PTSD" },
                { href: "/blog/building-care-into-ai", label: "Building Care into AI" },
                { href: "/blog/ai-for-perfectionism", label: "AI for Perfectionism" },
                { href: "/blog/ai-for-ocd", label: "AI for OCD" },
                { href: "/blog/what-is-meok", label: "What is MEOK?" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ display: "block", background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: "8px", padding: "14px 16px", color: BODY, fontSize: "0.875rem", textDecoration: "none", lineHeight: 1.5 }}
                >
                  {label} <span style={{ color: GOLD }}>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Footer note ── */}
          <footer style={{ marginTop: "64px", paddingTop: "32px", borderTop: `1px solid ${GOLD_BORDER}` }}>
            <p style={{ margin: "0 0 12px", fontSize: "0.8rem", color: DIM, lineHeight: 1.7 }}>
              <strong style={{ color: MUTED }}>Medical disclaimer:</strong> MEOK AI LABS is not a medical service.
              Nothing in this article constitutes medical advice, diagnosis, or treatment. Eating disorders are serious
              mental and physical health conditions requiring specialist clinical care. If you are affected by an eating
              disorder, please contact Beat (Eating Disorders UK) on{" "}
              <strong style={{ color: MUTED }}>0808 801 0677</strong>, speak to your GP, or visit{" "}
              <a href="https://www.beateatingdisorders.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: "none" }}>
                beateatingdisorders.org.uk
              </a>
              .
            </p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: DIM, lineHeight: 1.7 }}>
              Written by Nicholas Templeman, Founder of MEOK AI LABS &middot; Published 25 March 2026 &middot;{" "}
              <Link href="/blog" style={{ color: GOLD, textDecoration: "none" }}>
                Back to blog
              </Link>
            </p>
          </footer>

        </div>
      </div>
    </>
  )
}
