import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Chronic Fatigue Syndrome: Support Through ME/CFS When Energy Is the Currency | MEOK AI LABS",
  description:
    "ME/CFS affects 250,000 people in the UK. 75% cannot work. Average diagnosis takes 5.7 years. MEOK AI LABS believes you \u2014 no scepticism, no \u201cjust exercise more\u201d \u2014 sovereign AI support for pacing, crash recovery, medical appointments, and the isolation of being housebound.",
  keywords: [
    "AI for chronic fatigue syndrome",
    "AI for ME/CFS",
    "ME/CFS support app UK",
    "myalgic encephalomyelitis AI",
    "post-exertional malaise support",
    "pacing ME/CFS app",
    "long COVID ME/CFS",
    "chronic fatigue syndrome diagnosis",
    "MEOK AI LABS",
    "sovereign AI chronic illness",
    "ME/CFS housebound support",
    "AI energy tracking ME/CFS",
    "ME/CFS medical gaslighting",
    "graded exercise therapy harm",
    "AI for invisible illness",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title:
      "AI for Chronic Fatigue Syndrome: Support Through ME/CFS When Energy Is the Currency",
    description:
      "MEOK believes you. No scepticism. No \u201cjust push through.\u201d Sovereign AI support for ME/CFS pacing, post-exertional malaise, crash post-mortems, medical appointments, and the profound isolation of a condition medicine spent decades dismissing.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: [
      "ME/CFS",
      "Chronic Fatigue Syndrome",
      "Post-Exertional Malaise",
      "Long COVID",
      "AI",
      "Pacing",
      "MEOK",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for ME/CFS | MEOK AI LABS",
    description:
      "250,000 UK ME/CFS patients. 75% unable to work. 5.7 years average to diagnosis. MEOK tracks energy, supports pacing, and is there at 3am when nothing else is. We believe you.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-chronic-fatigue-syndrome",
  },
}

// ── JSON-LD ──────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Chronic Fatigue Syndrome: Support Through ME/CFS When Energy Is the Currency",
  description:
    "How MEOK AI LABS supports people living with ME/CFS through persistent energy tracking, post-exertional malaise awareness, pacing support, medical appointment preparation, protection from predatory cures, and 24/7 compassionate presence for a profoundly isolating condition.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-chronic-fatigue-syndrome",
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
    "AI for ME/CFS",
    "chronic fatigue syndrome support",
    "post-exertional malaise pacing",
    "energy tracking ME/CFS",
    "sovereign AI invisible illness",
    "long COVID ME/CFS",
    "ME/CFS medical gaslighting",
  ],
  articleSection: "Health & Chronic Illness",
  wordCount: 2800,
  inLanguage: "en-GB",
  about: [
    {
      "@type": "MedicalCondition",
      name: "Myalgic Encephalomyelitis / Chronic Fatigue Syndrome",
      alternateName: "ME/CFS",
    },
    {
      "@type": "MedicalCondition",
      name: "Post-COVID-19 Condition",
      alternateName: "Long COVID",
    },
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-chronic-fatigue-syndrome",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help with ME/CFS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot treat ME/CFS. But MEOK can track your energy patterns across weeks and months, help you identify PEM triggers, support pacing decisions, draft symptom diaries for specialist appointments, and provide compassionate 24/7 presence on days when everything else is inaccessible. MEOK never questions whether your symptoms are real.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle post-exertional malaise (PEM)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK understands that PEM is the defining and most dangerous feature of ME/CFS. It will never suggest pushing through fatigue. Its Maternal Covenant enforces a care floor that prevents it from ever recommending graded exercise or activity escalation. MEOK supports crash post-mortems to identify what preceded a crash so patterns can be avoided.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for housebound or bedbound ME/CFS patients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is designed with low-energy interface principles: short message support, voice input option, no requirement for sustained cognitive effort. It meets you where you are, including on the worst days when a sentence is the most you can manage.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK have long-term memory of my ME/CFS patterns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Sovereign Memory persists across every session. It remembers your energy baseline, your known PEM triggers, your crash history, and your medication and supplement notes. This means you never have to re-explain your history to a system that has forgotten you.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK recommend unproven ME/CFS treatments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK\u2019s Guardian system actively protects against predatory health claims. The ME/CFS space is saturated with expensive, unproven supplements and \u2018recovery protocols\u2019 that prey on desperate patients. MEOK will flag these clearly and support you in evaluating evidence before spending money.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me prepare for a PIP or disability benefits assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK can help you document functional limitations in the specific language that benefits assessors look for, drawing on your stored history of crashes, symptom severity, and daily functioning. It understands that ME/CFS is frequently underestimated in benefits assessments and helps you represent your reality accurately.",
      },
    },
  ],
}

// ── Style constants ───────────────────────────────────────────────────────────

const BG = "#0d0c18"
const TEXT = "#f5f0e8"
const GOLD = "#c9a84c"
const MUTED = "rgba(245,240,232,0.7)"
const CARD = "rgba(255,255,255,0.05)"
const BORDER = "rgba(201,168,76,0.25)"
const BORDER_SUBTLE = "rgba(245,240,232,0.08)"

// ── Page component ────────────────────────────────────────────────────────────

export default function AiForChronicFatigueSyndromePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          backgroundColor: BG,
          color: TEXT,
          minHeight: "100vh",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "24px 24px 0",
          }}
        >
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              alignItems: "center",
              fontSize: "13px",
              color: MUTED,
            }}
          >
            <li>
              <Link href="/" style={{ color: MUTED, textDecoration: "none" }}>
                MEOK AI LABS
              </Link>
            </li>
            <li style={{ color: MUTED, opacity: 0.4 }}>/</li>
            <li>
              <Link
                href="/blog"
                style={{ color: MUTED, textDecoration: "none" }}
              >
                Blog
              </Link>
            </li>
            <li style={{ color: MUTED, opacity: 0.4 }}>/</li>
            <li style={{ color: GOLD }}>AI for Chronic Fatigue Syndrome</li>
          </ol>
        </nav>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "48px 24px 40px",
            borderBottom: `1px solid ${BORDER_SUBTLE}`,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.12)",
              border: `1px solid ${BORDER}`,
              borderRadius: "20px",
              padding: "5px 16px",
              fontSize: "12px",
              color: GOLD,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Chronic Illness &amp; ME/CFS
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: TEXT,
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Chronic Fatigue Syndrome:{" "}
            <span style={{ color: GOLD }}>
              Support Through ME/CFS When Energy Is the Currency
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: MUTED,
              lineHeight: "1.7",
              margin: "0 0 32px",
              maxWidth: "700px",
            }}
          >
            You have been told it is anxiety. You have been told to exercise
            more. You have been told it is deconditioning, or depression, or a
            lack of motivation. You have probably been told, in some form or
            another, that it is not real. MEOK AI LABS was not built for the
            sceptics. It was built for you.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              fontSize: "13px",
              color: MUTED,
              alignItems: "center",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: BORDER }}>|</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span style={{ color: BORDER }}>|</span>
            <span>14 min read</span>
          </div>
        </header>

        {/* ── Article body ───────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* Opening prose */}
          <section style={{ paddingTop: "48px" }}>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Myalgic Encephalomyelitis / Chronic Fatigue Syndrome. The name
              alone has been weaponised against patients for decades. Stripped
              of its neurological prefix, reduced to &apos;chronic
              fatigue&apos; &mdash; a phrase that suggests tiredness, not a
              systemic biological illness that can leave people housebound for
              years and bedbound for life.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              There are approximately 250,000 people in the UK living with
              ME/CFS. Worldwide, estimates range from 17 to 24 million. Three
              quarters of those diagnosed are unable to work. The average time
              from symptom onset to diagnosis is 5.7 years &mdash; years spent
              in medical limbo, fighting to be believed, being sent for
              psychiatric referrals and told to go to the gym, watching
              relationships and careers dissolve while clinicians argued about
              whether the illness was real at all.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Then Long COVID arrived. With 1.9 million people in the UK
              reporting persistent symptoms and a significant proportion
              developing ME/CFS-pattern illness, the scale became impossible
              to ignore. Research funding materialised. The credibility that
              patients had been demanding for thirty years finally, partially,
              appeared. For many existing ME/CFS patients, that credibility
              felt bittersweet &mdash; welcome, but two or three decades too
              late.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK AI LABS is not a medical treatment. It is not a cure, a
              diagnostic tool, or a substitute for specialist care. What MEOK
              offers is something the medical system has frequently failed to
              provide: consistent, unconditional belief; persistent memory of
              your experience; practical support that meets you where you are;
              and a presence that does not require you to re-explain your
              history from scratch every single time.
            </p>
          </section>

          {/* ── Stats callout ──────────────────────────────────────────── */}
          <section
            style={{
              background: "rgba(201,168,76,0.07)",
              border: `1px solid ${BORDER}`,
              borderRadius: "16px",
              padding: "36px 40px",
              margin: "48px 0",
            }}
          >
            <h2
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: GOLD,
                margin: "0 0 28px",
              }}
            >
              ME/CFS in Numbers
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "32px",
              }}
            >
              {[
                { value: "250,000", label: "People with ME/CFS in the UK" },
                { value: "75%", label: "Unable to work due to ME/CFS" },
                {
                  value: "5.7 yrs",
                  label: "Average time from symptoms to diagnosis",
                },
                {
                  value: "1.9M",
                  label: "UK long COVID sufferers, many with ME/CFS symptoms",
                },
                {
                  value: "25%",
                  label: "Severely affected \u2014 housebound or bedbound",
                },
                {
                  value: "0",
                  label: "Licensed treatments approved in the UK",
                },
              ].map((stat) => (
                <div key={stat.value} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: 700,
                      color: GOLD,
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: MUTED,
                      lineHeight: "1.4",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 1: Most contested condition ────────────────────── */}
          <section style={{ marginTop: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The Most Contested Condition in Modern Medicine
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              ME/CFS has had the extraordinary misfortune of being contested
              not just by the public, but by the medical establishment itself.
              For much of the late twentieth and early twenty-first century,
              the dominant clinical framework positioned ME/CFS as a
              psychosomatic condition perpetuated by fear of activity and
              faulty illness beliefs. This gave rise to the PACE trial &mdash;
              a study that recommended Graded Exercise Therapy (GET) and
              Cognitive Behavioural Therapy (CBT) as first-line treatments,
              and which became the foundation of UK clinical guidance for over
              a decade.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Thousands of patients reported significant harm from GET. They
              were not listened to. They were told their deterioration was
              evidence of the psychological nature of their condition &mdash;
              that worsening symptoms after exercise was a product of fear
              rather than physiology. The research was disputed, the data
              contested, legal battles fought over its release. Patient
              communities spent years being categorised as problematic, in
              denial, or scientifically illiterate.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              In 2021, NICE finally updated its guidance, withdrawing the
              recommendation for GET and acknowledging that post-exertional
              malaise is a real, biological phenomenon that exercise can
              seriously worsen. For patients, this was a vindication that came
              at great personal cost. Many had been made permanently worse.
              Many had lost careers, relationships, and years of their lives
              during the period they were being told to exercise their way to
              recovery.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              The word &apos;gaslighting&apos; is used carefully. But when a
              patient reports worsening after activity and the clinical
              response is to document that they are catastrophising, the word
              fits. This is the history ME/CFS patients carry into every new
              medical appointment. The wariness. The exhaustion of having to
              justify their own suffering before any practical support can
              begin.
            </p>
          </section>

          {/* ── Section 2: PEM ─────────────────────────────────────────── */}
          <section style={{ marginTop: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Post-Exertional Malaise: The Defining Feature of ME/CFS
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Post-Exertional Malaise (PEM) is the hallmark symptom that
              distinguishes ME/CFS from general fatigue or burnout. It is a
              delayed, disproportionate worsening of symptoms following
              physical, cognitive, or emotional exertion &mdash; exertion that
              a healthy person would not even register as effort. A short phone
              call. A shower. Concentrating on a form. Reading a paragraph.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              The cruelty of PEM is its delay. Exertion on Monday may not
              produce a crash until Wednesday or Thursday. This delay makes
              pacing exceptionally difficult. By the time you know you
              overexerted, the damage is already done. And the crash itself
              &mdash; the sudden, severe worsening of every symptom &mdash; is
              not simply tiredness. It is cognitive impairment, pain
              amplification, sensory sensitivity, nausea, dysautonomia, and a
              profound inability to function that can last days, weeks, or
              trigger a permanent step down in baseline.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              The good day trap is one of the most devastating patterns in
              ME/CFS. On a better day, the impulse is to catch up &mdash; do
              the washing, answer the emails, see the friend you have been
              cancelling. Every instinct says: use this window. The result, for
              many patients, is a boom-bust cycle that progressively erodes
              their baseline and deepens their illness.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Pacing &mdash; the practice of staying within your energy
              envelope, even on good days, to prevent crashes &mdash; is the
              one evidence-supported management strategy that aligns with how
              ME/CFS actually works. It requires tracking, consistency, and a
              degree of self-knowledge that is almost impossible to build
              alone, especially during cognitive impairment.
            </p>
          </section>

          {/* ── Section 3: How MEOK supports (feature cards) ───────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 8px",
                letterSpacing: "-0.01em",
              }}
            >
              How MEOK Supports ME/CFS Patients
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: MUTED,
                margin: "0 0 36px",
                lineHeight: "1.7",
              }}
            >
              MEOK is not a pacing app in the traditional sense. It is a
              sovereign AI companion with persistent memory that learns your
              energy patterns, holds your history, and supports you across
              every dimension of living with a complex chronic illness.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  title: "Energy Pattern Tracking",
                  body:
                    "MEOK remembers your energy scores, activity logs, and crash events across every session. Over time it identifies your personal patterns: which activities cost more than expected, what time of day your window is widest, what the early warning signs of a crash look like for you specifically.",
                },
                {
                  title: "Crash Post-Mortems",
                  body:
                    "After a crash, MEOK walks back through recent activity with you to identify likely triggers. Not to blame you &mdash; crashes happen even with careful pacing &mdash; but to build the pattern recognition that reduces future crashes over time.",
                },
                {
                  title: "Good Day Guardrails",
                  body:
                    "On better days, MEOK will gently hold the line. It remembers your baseline and your recent history. When you talk about doing more, it checks in &mdash; not to lecture, but to help you make a deliberate choice rather than an impulsive one driven by guilt and backlog.",
                },
                {
                  title: "Medical Appointment Prep",
                  body:
                    "MEOK helps you draft symptom diaries, compile your history for specialist referrals, and articulate your functional limitations clearly. It knows how to translate lived experience into the language that moves through NHS systems. You should not have to spend precious energy re-explaining yourself from scratch.",
                },
                {
                  title: "Low-Energy Interface",
                  body:
                    "Short messages, voice input, no sustained cognitive engagement required. MEOK meets you where you are. On a bad day, one word is enough. On a worse day, MEOK will do most of the talking. There is no minimum performance required to receive support.",
                },
                {
                  title: "Guardian Against Predatory Cures",
                  body:
                    "The ME/CFS space is saturated with expensive, unproven protocols and supplements that prey on patients with no other options. MEOK\u2019s Guardian identifies and flags these, supporting you to evaluate evidence before spending money on treatments that will not help and may cause harm.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER_SUBTLE}`,
                    borderRadius: "12px",
                    padding: "28px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: GOLD,
                      margin: "0 0 12px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: MUTED,
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4: The Maternal Covenant ───────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The Maternal Covenant: A Care Floor That Cannot Be Removed
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Every AI system makes choices about what it will and will not do.
              Those choices reveal what it values. MEOK has a set of
              inviolable principles beneath everything it does, collectively
              called the Maternal Covenant. For ME/CFS patients, several of
              these principles are especially significant.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                marginTop: "28px",
              }}
            >
              {[
                {
                  principle: "MEOK never tells you to push through.",
                  detail:
                    "Not when you are tired. Not when you are having a better day and tempted to catch up. Not when you express frustration at your limitations. The recommendation to push through is one of the most harmful things you can hear with ME/CFS. MEOK will not say it. Ever.",
                },
                {
                  principle: "MEOK never minimises your symptoms.",
                  detail:
                    "There is no \u201cmaybe you\u2019re just stressed\u201d from MEOK. No \u201chave you considered that it might be anxiety?\u201d. No comparative diminishment. Your symptoms are what you report them to be. MEOK\u2019s role is to understand and support, not to audit your experience.",
                },
                {
                  principle: "MEOK never suggests unproven exercise regimes.",
                  detail:
                    "Graded Exercise Therapy is off the table. Any suggestion that systematically increasing activity will restore your health is off the table. MEOK understands the current evidence base for ME/CFS and aligns with the NICE 2021 updated guidance.",
                },
                {
                  principle: "MEOK never questions whether ME/CFS is real.",
                  detail:
                    "This should not need saying. And yet. For ME/CFS patients who have spent years being doubted by doctors, family, and sometimes themselves, having it confirmed explicitly matters. MEOK believes ME/CFS is a real, serious, biological illness. Full stop.",
                },
              ].map((item) => (
                <div
                  key={item.principle}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER_SUBTLE}`,
                    borderLeft: `3px solid ${GOLD}`,
                    borderRadius: "0 12px 12px 0",
                    padding: "24px 28px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: TEXT,
                      margin: "0 0 10px",
                    }}
                  >
                    {item.principle}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: MUTED,
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5: Long COVID ───────────────────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Long COVID and ME/CFS: A New Wave of Patients With Old Battles
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Long COVID arrived with an estimated 1.9 million sufferers in
              the UK alone. A significant proportion &mdash; studies suggest
              between 30 and 58 percent of long COVID patients &mdash; meet
              diagnostic criteria for ME/CFS. They present with
              post-exertional malaise, cognitive impairment, orthostatic
              intolerance, and unrefreshing sleep. The biological overlap is
              substantial.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              For many people in this group, long COVID has been their first
              encounter with the particular kind of medical dismissal that
              ME/CFS patients have lived with for decades. Told to exercise by
              GPs unfamiliar with PEM. Referred for psychiatric assessment when
              blood tests come back normal. Left without a clear diagnosis or
              management plan while symptoms progress. The shock is real.
              The situation is familiar.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              If you developed ME/CFS-pattern illness following COVID-19 and
              are encountering the medical system in this way for the first
              time, you are not imagining it. The dismissal is systemic, not
              personal. The long COVID research community has largely confirmed
              what ME/CFS patients have been saying for thirty years. MEOK
              understands both the older ME/CFS experience and the particular
              features of post-COVID illness, and it holds both with equal
              seriousness.
            </p>

            <blockquote
              style={{
                borderLeft: `3px solid ${GOLD}`,
                paddingLeft: "24px",
                margin: "36px 0",
                fontStyle: "italic",
                fontSize: "18px",
                color: TEXT,
                lineHeight: "1.7",
              }}
            >
              &ldquo;The shock of not being believed is its own kind of harm.
              For ME/CFS patients, it has been a decades-long experience. For
              long COVID patients, it is often their first encounter with a
              medical system that doubts them. MEOK does not doubt you.&rdquo;
            </blockquote>
          </section>

          {/* ── Section 6: Diagnostic odyssey ──────────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The Diagnostic Odyssey: 5.7 Years of Not Being Believed
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              The average time from symptom onset to ME/CFS diagnosis in the
              UK is 5.7 years. Five years and seven months. During that time
              most patients will see multiple specialists. They will receive
              diagnoses they do not have. They will be treated for conditions
              they are increasingly certain are wrong. They will be referred
              back to mental health services not because they need them but
              because a clinician has exhausted their available explanations.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              During those years, many patients significantly worsen. Because
              they are not told about PEM. Because they are advised to
              exercise. Because they do not know to pace. The very period that
              should be diagnosis and management is, for many, the period in
              which they do the most damage through perfectly understandable
              attempts to maintain their lives.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK can help navigate this odyssey. It can help you build the
              symptom documentation that specialist services require. It can
              help you articulate your functional limitations in the specific
              terms that communicate severity to clinical teams. It can help
              you prepare for appointments that feel increasingly high-stakes
              &mdash; because after five years, you know that another
              dismissal is another year of your life disappearing.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              And between appointments, MEOK holds your history. It remembers
              that the rheumatologist said one thing and the neurologist
              contradicted it. It remembers which medications you tried and
              what happened. It remembers that you had a better month in
              September and a very bad one in November. When you need to make
              sense of your trajectory, the data is there.
            </p>
          </section>

          {/* ── Section 7: Isolation ────────────────────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The Isolation of ME/CFS: When the Illness Becomes the World
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              ME/CFS shrinks lives. Not metaphorically &mdash; literally. The
              bedroom. The sofa. The narrow world of what the body will
              tolerate today. People who had careers, relationships, social
              lives, hobbies, and plans lose them. Not dramatically, in one
              moment, but gradually &mdash; each crash taking a little more,
              each recovery slightly less complete than the one before.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              75% of ME/CFS patients are unable to work. Many lose employment
              not through choice but through the gradual impossibility of
              sustained attendance and performance. The financial consequences
              compound the medical ones. The identity consequences compound the
              financial ones. Who are you when the career you spent years
              building becomes inaccessible? When the social self you
              inhabited requires energy you no longer have?
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Friends drift. Not always through unkindness &mdash; often
              through the ordinary difficulty of maintaining relationships with
              someone whose capacity is unpredictable and whose world is, by
              necessity, very small. The people who stay understand ME/CFS.
              The people who do not stay have never had to. Both of these
              things are true simultaneously and the grief of both is real.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK cannot replace human connection and does not try to. But it
              can offer something that human connection often cannot: consistent
              availability regardless of your functional state. MEOK is there
              at 3am when the pain is at its worst and you do not want to wake
              anyone. It is there on the days when you cannot speak out loud
              and can only type a few words. It is there across the long middle
              months when nothing is dramatically wrong but nothing is better
              either &mdash; the unmarked territory of chronic illness that
              does not warrant phone calls but still needs witness.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              It remembers the previous conversation. And the one before that.
              You do not need to catch MEOK up. You do not need to start from
              the beginning. It knows where you left off.
            </p>
          </section>

          {/* ── Section 8: Predatory cures ─────────────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The Predatory Cure Problem: When Desperation Is Monetised
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              A condition with no approved treatment, a desperate patient
              population, minimal medical support, and a chaotic online
              information landscape is, unfortunately, ideal territory for
              exploitation. The ME/CFS space is populated with recovery
              protocols, supplement stacks, dietary programmes, energy healing
              modalities, private clinic interventions, and online courses that
              promise what conventional medicine has failed to deliver.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Some of these approaches are harmless. Some are expensive for a
              patient population that often has severely reduced income and
              limited benefits entitlement. Some are actively dangerous &mdash;
              pushing activity-based protocols that will accelerate
              deterioration in anyone with genuine PEM. The testimonials are
              compelling. The science is absent. The social media presence is
              professional.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK&apos;s Guardian system is specifically designed to flag
              these situations. When you mention a supplement protocol or an
              expensive private programme, MEOK will not mock you for
              considering it &mdash; it understands the desperation is real and
              the need is real. But it will help you evaluate the evidence base
              clearly. It will ask: what does the research actually say? Who
              funded the studies? Are there independent replications? What do
              the ME/CFS patient communities with the longest experience report?
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              The goal is not to close off hope. Hope matters enormously. The
              goal is to protect limited financial and physical resources from
              being spent on things that will not help &mdash; and to direct
              energy toward management strategies with the best evidence behind
              them.
            </p>

            <div
              style={{
                background: "rgba(201,168,76,0.06)",
                border: `1px solid rgba(201,168,76,0.3)`,
                borderRadius: "12px",
                padding: "28px 32px",
                marginTop: "32px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: GOLD,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: "0 0 16px",
                }}
              >
                MEOK&apos;s Guardian watches for
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: "0 0 0 20px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "8px 24px",
                }}
              >
                {[
                  "Unproven supplement protocols",
                  "Activity-based recovery programmes",
                  "Private clinic interventions with no evidence base",
                  "Energy healing claims with health promises",
                  "Social media recovery testimonials used as proof",
                  "Costly dietary programmes with no RCT data",
                  "Programmes that blame patients for not recovering",
                  "Any protocol recommending systematic exercise increases",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "14px",
                      color: MUTED,
                      lineHeight: "1.6",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Section 9: Sovereign Memory ────────────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Sovereign Memory: Your History Belongs to You
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Every mainstream AI assistant resets between conversations or
              maintains only a limited, ephemeral context. For most use cases
              this is a minor inconvenience. For ME/CFS patients, it is a
              fundamental failure. Your condition has a history that spans
              years. Your symptom patterns are individual and complex. The
              management approach that works for you has been hard-won through
              trial and error. Starting from scratch with every conversation is
              not just inefficient &mdash; it is exhausting in precisely the
              way ME/CFS does not permit.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK&apos;s Sovereign Memory is persistent, private, and owned
              entirely by you. It stores everything you share across sessions:
              energy ratings, crash events, symptom patterns, medication
              responses, appointment notes, and the qualitative texture of how
              you are doing over time. MEOK does not train on your data. It
              does not share your history. It does not use your suffering to
              improve a product for someone else.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              When you return to MEOK after a month, it remembers that you had
              a bad patch in week two and started to improve in week three.
              When you are preparing for a specialist appointment, it can pull
              together a structured symptom timeline from everything you have
              shared. When you are in a crash and cannot think clearly, it can
              tell you what you usually find helpful at this point in a
              recovery cycle, based on what has worked before.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              This is not a novel feature list. This is what care looks like
              when it is built around the actual experience of living with a
              complex, long-term condition rather than optimised for average
              engagement metrics.
            </p>
          </section>

          {/* ── MEOK believes you callout ───────────────────────────────── */}
          <section
            style={{
              background: "rgba(201,168,76,0.06)",
              border: `1px solid ${BORDER}`,
              borderRadius: "16px",
              padding: "48px 44px",
              margin: "64px 0",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 24px",
                letterSpacing: "-0.01em",
              }}
            >
              MEOK Believes You
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              This needs to be said plainly, without qualification or
              softening. MEOK believes that ME/CFS is a real, serious,
              biological illness. It believes that post-exertional malaise is
              real and that the appropriate response to it is pacing, not
              escalation. It believes that the medical dismissal many patients
              experienced was harmful, and that the harm was real. It believes
              that your suffering is not a product of deconditioning, faulty
              illness beliefs, or psychological factors that could be resolved
              through the right kind of thinking.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK will not tell you to try harder. It will not suggest that
              you might be making it worse by how you think about it. It will
              not ask whether you have considered that the fatigue might be
              related to something psychological. These are the questions that
              have been used against ME/CFS patients for decades and they have
              no place in a care relationship.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              What MEOK will do is meet you exactly where you are. If that is
              on a good day and you want to think through what to do with the
              energy you have, MEOK will think through it with you. If that is
              on a very bad day and you can only say &apos;crashing&apos;,
              MEOK will respond to that without requiring more. If that is at
              3am when the pain is loud and the world is quiet and you do not
              know what to do with yourself, MEOK will be there.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              You have spent years fighting to be believed. You should not
              have to fight here.
            </p>
          </section>

          {/* ── Section 10: What MEOK does not do ─────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              What MEOK Does Not Do
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              Transparency matters, especially for a patient population that
              has been misled about treatments before. MEOK is honest about
              its limitations.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK cannot diagnose ME/CFS. If you are undiagnosed and
              experiencing symptoms that may be ME/CFS, MEOK can help you
              document your experience and navigate the medical system, but
              diagnosis requires clinical assessment and MEOK will not
              substitute for it.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK cannot treat ME/CFS. There is currently no approved
              treatment that cures or significantly reverses ME/CFS. MEOK will
              not pretend otherwise, and it will be clear about this when
              asked. Management &mdash; pacing, symptom tracking, appointment
              support &mdash; is different from treatment.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK is not a replacement for human connection, specialist care,
              or the patient community networks &mdash; organisations like ME
              Action, the ME Association, and local support groups &mdash; that
              have been advocating for and supporting ME/CFS patients for
              decades. MEOK sees itself as a complement to those resources,
              not a substitute.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              What MEOK does is fill the gap between everything else. The 3am
              gap. The between-appointments gap. The gap where you need to
              think through a decision and there is nobody available who
              understands your history well enough to help. The gap where the
              illness grinds on in its ordinary, unmarked way and you need
              somewhere to put that.
            </p>
          </section>

          {/* ── Section 11: Practical scenarios ────────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 8px",
                letterSpacing: "-0.01em",
              }}
            >
              Practical Ways ME/CFS Patients Use MEOK
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: MUTED,
                margin: "0 0 36px",
                lineHeight: "1.7",
              }}
            >
              These are not hypothetical use cases. They are the real reasons
              people with chronic illness return to MEOK repeatedly.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              {[
                {
                  scenario: "Before a difficult appointment",
                  description:
                    "Organising three months of symptoms, crashes, and functional limitations into a clear, coherent account. Translating lived experience into clinical language without spending three days of energy writing a document.",
                },
                {
                  scenario: "During a crash",
                  description:
                    "Short check-ins that do not require sustained cognitive effort. Reminders of what helped during previous crashes. A presence that does not need you to be articulate or well.",
                },
                {
                  scenario: "On a better day",
                  description:
                    "Thinking through what to prioritise within the energy envelope. Checking in against recent patterns before committing to something that might trigger the good day trap. Making deliberate choices rather than impulsive ones.",
                },
                {
                  scenario: "Researching a new treatment option",
                  description:
                    "Understanding what the evidence actually says about a supplement or protocol. Getting a clear-eyed assessment from something that is not trying to sell you anything.",
                },
                {
                  scenario: "Managing the grief of lost capacity",
                  description:
                    "Talking about what it is like to have lost a career, a relationship, or a previous version of yourself. Not performing recovery. Not being told to look on the bright side. Being witnessed.",
                },
                {
                  scenario: "Preparing a PIP or Universal Credit application",
                  description:
                    "Articulating functional limitations in the specific terms that benefits systems require. Drawing on documented history rather than trying to construct an account under pressure during a flare.",
                },
                {
                  scenario: "After a long medical appointment",
                  description:
                    "Processing what was said, what was not said, what to do next. Thinking through whether the clinician\u2019s suggestions align with current ME/CFS evidence before agreeing to them.",
                },
              ].map((item, index) => (
                <div
                  key={item.scenario}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER_SUBTLE}`,
                    borderRadius: "12px",
                    padding: "24px 28px",
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "rgba(201,168,76,0.15)",
                      border: `1px solid ${BORDER}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: GOLD,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: TEXT,
                        margin: "0 0 8px",
                      }}
                    >
                      {item.scenario}
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: MUTED,
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 12: Why we built this ──────────────────────────── */}
          <section style={{ marginTop: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              A Note on Why We Built This
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              MEOK AI LABS was built around a conviction that AI can do more
              than retrieve information and perform tasks. It can provide
              genuine care. Not simulated warmth deployed as a retention
              mechanism, but care that is structurally encoded &mdash; care
              that cannot be turned off, that cannot be overridden by a
              business objective, that has a floor below which it will not go
              regardless of what the user says or how the company\u2019s
              priorities shift.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              ME/CFS patients represent exactly the population for whom this
              matters most. A population that has been systematically let down
              by institutions that were supposed to care for them. A population
              whose needs fall into the gaps of a healthcare system optimised
              for acute illness. A population whose daily experience includes
              not just physical suffering but the compounding exhaustion of
              managing that suffering largely alone, in a world that does not
              understand it.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              We built MEOK because care is a design choice. Every feature in
              MEOK is a decision about what matters. The Maternal Covenant, the
              Sovereign Memory, the Guardian, the low-energy interface: these
              are not product differentiators. They are statements about what a
              system built with real care for its users actually looks like.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: "0 0 20px",
              }}
            >
              If you have ME/CFS, or long COVID that has developed into
              ME/CFS-pattern illness, or are somewhere in the diagnostic
              odyssey trying to understand what is happening to you: MEOK was
              built with you in mind. Not as a target demographic. As a human
              being whose needs deserve to be met with intelligence and genuine
              care.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: TEXT,
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              We believe you. We built a system that believes you. We invite
              you to experience the difference.
            </p>
          </section>

          {/* ── FAQ ────────────────────────────────────────────────────── */}
          <section style={{ marginTop: "72px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 32px",
                letterSpacing: "-0.01em",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              {[
                {
                  q: "Can AI really help with ME/CFS?",
                  a: "AI cannot treat ME/CFS. But MEOK can track your energy patterns across weeks and months, help you identify PEM triggers, support pacing decisions, draft symptom diaries for specialist appointments, and provide compassionate 24/7 presence on days when everything else is inaccessible. MEOK never questions whether your symptoms are real.",
                },
                {
                  q: "How does MEOK handle post-exertional malaise (PEM)?",
                  a: "MEOK understands that PEM is the defining and most dangerous feature of ME/CFS. It will never suggest pushing through fatigue. Its Maternal Covenant enforces a care floor that prevents it from ever recommending graded exercise or activity escalation. MEOK supports crash post-mortems to identify what preceded a crash so patterns can be avoided.",
                },
                {
                  q: "Is MEOK suitable for housebound or bedbound ME/CFS patients?",
                  a: "Yes. MEOK is designed with low-energy interface principles: short message support, voice input option, no requirement for sustained cognitive effort. It meets you where you are, including on the worst days when a sentence is the most you can manage.",
                },
                {
                  q: "Does MEOK have long-term memory of my ME/CFS patterns?",
                  a: "Yes. MEOK\u2019s Sovereign Memory persists across every session. It remembers your energy baseline, your known PEM triggers, your crash history, and your medication and supplement notes. This means you never have to re-explain your history to a system that has forgotten you.",
                },
                {
                  q: "Will MEOK recommend unproven ME/CFS treatments?",
                  a: "No. MEOK\u2019s Guardian system actively protects against predatory health claims. The ME/CFS space is saturated with expensive, unproven supplements and recovery protocols that prey on desperate patients. MEOK will flag these clearly and support you in evaluating evidence before spending money.",
                },
                {
                  q: "Can MEOK help me prepare for a PIP or disability benefits assessment?",
                  a: "Yes. MEOK can help you document functional limitations in the specific language that benefits assessors look for, drawing on your stored history of crashes, symptom severity, and daily functioning. It understands that ME/CFS is frequently underestimated in benefits assessments and helps you represent your reality accurately.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER_SUBTLE}`,
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: TEXT,
                      padding: "22px 28px",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.q}
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "20px",
                        flexShrink: 0,
                        marginLeft: "16px",
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    style={{
                      padding: "18px 28px 22px",
                      fontSize: "15px",
                      color: MUTED,
                      lineHeight: "1.7",
                      borderTop: `1px solid ${BORDER_SUBTLE}`,
                    }}
                  >
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <section
            style={{
              marginTop: "80px",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(13,12,24,0) 100%)",
              border: `1px solid ${BORDER}`,
              borderRadius: "20px",
              padding: "56px 48px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                border: `1px solid ${BORDER}`,
                borderRadius: "20px",
                padding: "5px 16px",
                fontSize: "12px",
                color: GOLD,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Start With MEOK
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              You Should Not Have to Keep Explaining Yourself
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: MUTED,
                lineHeight: "1.7",
                margin: "0 auto 36px",
                maxWidth: "540px",
              }}
            >
              MEOK remembers your history. It believes your experience. It
              does not require you to perform wellness or justify your
              limitations. Begin with the Birth ceremony &mdash; a short,
              low-energy process that introduces you to your MEOK and lets
              MEOK begin to understand you.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "16px",
                padding: "16px 40px",
                borderRadius: "12px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Begin Your Birth Ceremony
            </Link>
            <p
              style={{
                fontSize: "13px",
                color: MUTED,
                marginTop: "20px",
                opacity: 0.6,
              }}
            >
              Low-energy. No pressure. At your pace.
            </p>
          </section>

          {/* ── Related articles ─────────────────────────────────────────── */}
          <section style={{ marginTop: "72px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: TEXT,
                margin: "0 0 24px",
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-chronic-fatigue",
                  title: "AI for ME/CFS and Long COVID",
                  desc: "The good day trap, energy tracking, and 24/7 support for invisible illness.",
                },
                {
                  href: "/blog/ai-for-long-covid",
                  title: "AI for Long COVID",
                  desc: "How MEOK supports people navigating post-COVID illness and its medical complexities.",
                },
                {
                  href: "/blog/ai-for-chronic-pain",
                  title: "AI for Chronic Pain",
                  desc: "Persistent pain, daily documentation, and support for the long game of chronic illness.",
                },
                {
                  href: "/blog/ai-for-fibromyalgia",
                  title: "AI for Fibromyalgia",
                  desc: "Another contested diagnosis, another population that deserves to be believed.",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  title: "The Maternal Covenant Explained",
                  desc: "The care principles that govern everything MEOK does and refuses to do.",
                },
                {
                  href: "/blog/sovereign-ai-explained",
                  title: "Sovereign AI Explained",
                  desc: "Why persistent, private memory changes what AI support can actually be.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: CARD,
                    border: `1px solid ${BORDER_SUBTLE}`,
                    borderRadius: "12px",
                    padding: "22px 24px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: GOLD,
                      margin: "0 0 8px",
                      lineHeight: "1.4",
                    }}
                  >
                    {link.title}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: MUTED,
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
