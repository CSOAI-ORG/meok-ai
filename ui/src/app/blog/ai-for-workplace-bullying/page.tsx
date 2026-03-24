import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Workplace Bullying: Document, Prepare, and Reclaim Your Power | MEOK AI LABS",
  description:
    "1 in 3 UK workers experience workplace bullying. Learn how AI can help you document incidents, prepare for HR meetings, recognise gaslighting, and protect your mental health when the system fails you.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-workplace-bullying" },
  openGraph: {
    title: "AI for Workplace Bullying: Document, Prepare, and Reclaim Your Power",
    description:
      "1 in 3 UK workers are affected by workplace bullying. Here\u2019s how sovereign AI helps you document, prepare, and protect yourself when HR won\u2019t.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-workplace-bullying",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Workplace+Bullying%3A+Document+%26+Reclaim+Power&desc=1+in+3+UK+workers+affected.+Sovereign+AI+helps+you+fight+back.",
        width: 1200,
        height: 630,
        alt: "AI for Workplace Bullying: Document, Prepare, and Reclaim Your Power",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Workplace Bullying: Document, Prepare, and Reclaim Your Power",
    description:
      "1 in 3 UK workers face bullying. AI can help you document incidents with timestamps, rehearse HR conversations, and process the emotional toll \u2014 privately and safely.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Workplace+Bullying%3A+Document+%26+Reclaim+Power&desc=1+in+3+UK+workers+affected.+Sovereign+AI+helps+you+fight+back.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Workplace Bullying: Document, Prepare, and Reclaim Your Power",
  description:
    "1 in 3 UK workers experience workplace bullying. Learn how AI can help you document incidents, prepare for HR meetings, recognise gaslighting, and protect your mental health when the system fails you.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-workplace-bullying",
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
  image:
    "https://meok.ai/api/og?title=AI+for+Workplace+Bullying%3A+Document+%26+Reclaim+Power&desc=1+in+3+UK+workers+affected.+Sovereign+AI+helps+you+fight+back.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-workplace-bullying",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with workplace bullying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI cannot report your bully for you, but it can help you build a timestamped evidence log, identify behavioural patterns across incidents, rehearse what you want to say to HR, and process the emotional damage in a safe, private space. For many people, that practical and emotional scaffolding is the difference between staying silent and taking action.",
      },
    },
    {
      "@type": "Question",
      name: "How do I document workplace bullying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Record every incident immediately after it happens with five key fields: date and time, location, what was said or done verbatim, who witnessed it, and how it affected you. Keep this log outside company systems \u2014 in a personal app or secure note. MEOK\u2019s Sovereign Memory creates a persistent, timestamped record that belongs only to you, which you can draw on when preparing a formal grievance.",
      },
    },
    {
      "@type": "Question",
      name: "What is gaslighting at work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Workplace gaslighting is when a colleague or manager causes you to doubt your own memory or perception of events \u2014 saying things like \u2018that never happened\u2019, \u2018you\u2019re too sensitive\u2019, or \u2018everyone else is fine with it\u2019. It is a subtle form of psychological manipulation that erodes your confidence and makes it harder to report abuse. Documenting incidents in real time is one of the most effective defences against it.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me prepare for an HR meeting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK can help you structure your account of events clearly, anticipate the questions HR is likely to ask, rehearse your answers until you feel confident, and think through what outcome you want from the meeting. You can run through the conversation as many times as you need, in private, without time pressure or judgment.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if HR ignores my bullying complaint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, document the failure to act in the same way you documented the bullying \u2014 dates, what you submitted, who you spoke to, and what response you received. Then consider escalating to ACAS (free UK conciliation service), your trade union, or an employment solicitor. Your evidence log becomes critical at this stage. MEOK can help you organise this documentation and prepare for external escalation.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForWorkplaceBullyingPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const muted = "rgba(245,240,232,0.6)";
  const cardBg = "rgba(255,255,255,0.04)";
  const borderColor = "rgba(201,168,76,0.25)";
  const warnBg = "rgba(201,168,76,0.08)";
  const dangerBg = "rgba(200,60,60,0.08)";
  const dangerBorder = "rgba(200,60,60,0.3)";

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

      <main
        style={{
          backgroundColor: bg,
          color: text,
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.75",
          minHeight: "100vh",
        }}
      >
        {/* ── Hero ── */}
        <header
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "80px 24px 56px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: warnBg,
              border: `1px solid ${borderColor}`,
              borderRadius: "20px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <span style={{ color: gold, fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              MEOK AI LABS
            </span>
            <span style={{ color: muted, fontSize: "12px" }}>&mdash; Workplace Wellbeing</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: "1.2",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Workplace Bullying: Document, Prepare, and Reclaim Your Power
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: muted,
              marginBottom: "32px",
              maxWidth: "640px",
            }}
          >
            1 in 3 UK workers experience bullying at work. Many suffer in silence, unsure how to prove what is happening, afraid of retaliation, and let down by the very HR systems that should protect them. This is what sovereign AI can do for you when the institution won\u2019t.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
              fontSize: "14px",
              color: muted,
            }}
          >
            <span>By <strong style={{ color: text }}>Nicholas Templeman</strong>, Founder &mdash; MEOK AI LABS</span>
            <span style={{ color: borderColor }}>|</span>
            <time dateTime="2026-03-24">24 March 2026</time>
            <span style={{ color: borderColor }}>|</span>
            <span>14 min read</span>
          </div>
        </header>

        {/* ── Body ── */}
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 100px",
          }}
        >
          {/* ── Stat callout ── */}
          <div
            style={{
              background: dangerBg,
              border: `1px solid ${dangerBorder}`,
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "56px",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: "1.7" }}>
              <strong style={{ color: text }}>The numbers are not abstract.</strong> Research by the Trades Union Congress and the University of Sheffield estimates that{" "}
              <strong style={{ color: gold }}>1 in 3 UK workers</strong> has experienced bullying in the workplace. The psychological consequences include clinical-level anxiety, depression, and post-traumatic stress disorder. Estimated costs to UK employers exceed{" "}
              <strong style={{ color: gold }}>&pound;18 billion per year</strong> in lost productivity, absence, and staff turnover &mdash; yet formal reporting rates remain startlingly low.
            </p>
          </div>

          {/* ── Section 1 ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              What does workplace bullying actually look like in 2026?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              The popular image of workplace bullying is a red-faced manager screaming across an open-plan office. That version exists, but it is the easiest to confront and the least common. Most bullying in modern workplaces is subtler, more deniable, and deliberately constructed so that the target looks unreasonable if they complain.
            </p>
            <p style={{ color: muted, marginBottom: "20px" }}>
              Understanding the vocabulary is the first step to defending yourself.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              {[
                {
                  label: "Gaslighting",
                  body: "Systematically causing you to doubt your own memory and perception. \u201cThat meeting never happened.\u201d \u201cYou\u2019re imagining things.\u201d \u201cEveryone else is fine with how I manage.\u201d Over weeks this can shatter your professional confidence entirely.",
                },
                {
                  label: "Social exclusion",
                  body: "Being omitted from team lunches, Slack channels, project meetings, or key information loops. The exclusion is rarely documented in writing; it happens in corridors and DMs you\u2019re not in.",
                },
                {
                  label: "Workload manipulation",
                  body: "Either being deliberately overloaded to the point of failure, or starved of work to signal irrelevance and push you toward resignation. Both are designed to make you look incompetent.",
                },
                {
                  label: "Undermining",
                  body: "Having your ideas dismissed in meetings, then re-presented by someone else. Being criticised in front of colleagues. Having your professional judgment publicly questioned without grounds.",
                },
                {
                  label: "Threat and intimidation",
                  body: "Implicit warnings about performance reviews, restructures, or future references that signal: \u2018stay quiet or face consequences\u2019. Often delivered verbally and with plausible deniability.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "10px",
                    padding: "20px 24px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: gold,
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    {item.label}
                  </h3>
                  <p style={{ color: muted, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <p style={{ color: muted }}>
              The common thread is deniability. Subtle bullying is designed so that each individual incident sounds minor when described in isolation. It is the pattern &mdash; the cumulative, deliberate repetition &mdash; that constitutes the harm. This is precisely why documentation matters so profoundly, and why most people fail to document effectively until it is too late.
            </p>
          </section>

          {/* ── Section 2 ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Why don\u2019t people report workplace bullying?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              If you have ever wondered why victims stay silent, the answer is not weakness. It is rational risk calculation performed by someone who is already psychologically depleted. Reporting bullying in a workplace that does not have a genuine anti-bullying culture involves a cascade of real costs.
            </p>

            <div
              style={{
                background: warnBg,
                border: `1px solid ${borderColor}`,
                borderRadius: "12px",
                padding: "28px 32px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: gold,
                  marginBottom: "16px",
                  marginTop: 0,
                }}
              >
                The reporting trap
              </h3>
              <ul
                style={{
                  color: muted,
                  paddingLeft: "20px",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>
                  <strong style={{ color: text }}>Fear of disbelief.</strong> Without documentation, it is your word against a manager\u2019s. HR professionals are trained to investigate, not to believe automatically &mdash; and targets often have no evidence trail.
                </li>
                <li>
                  <strong style={{ color: text }}>Fear of retaliation.</strong> Studies consistently show that a significant proportion of people who raise formal complaints face worsened treatment, exclusion, or managed-out processes in the months that follow.
                </li>
                <li>
                  <strong style={{ color: text }}>HR\u2019s structural loyalty.</strong> In most UK companies, HR is employed by the organisation, not by you. Their primary function is to manage legal and reputational risk for the employer. That is not cynicism; it is their job description. Acting as though HR is on your side before you have evidence is a strategic error.
                </li>
                <li>
                  <strong style={{ color: text }}>Emotional cost of reliving it.</strong> Formally documenting abuse and repeating it to strangers in an investigation is itself traumatic. Many people choose to leave rather than endure the process.
                </li>
                <li>
                  <strong style={{ color: text }}>The normalisation trap.</strong> Months of gaslighting mean many targets genuinely believe they are overreacting by the time they consider reporting. The internal voice that says \u2018maybe it\u2019s not that bad\u2019 is often the bully\u2019s voice, internalised.
                </li>
              </ul>
            </div>

            <p style={{ color: muted }}>
              None of these barriers disappear with an AI companion. But several of them become more manageable when you have a private, non-judgmental space to build your evidence, test your perceptions, and prepare your case before you walk into any formal process.
            </p>
          </section>

          {/* ── Section 3: Psychological impact ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              What is the psychological impact of workplace bullying?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              Workplace bullying is not a minor inconvenience to be toughened up about. The clinical literature is unambiguous: sustained workplace bullying causes measurable, lasting psychological injury. The Workplace Bullying Institute and peer-reviewed studies in occupational health have documented the following outcomes in targets.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              {[
                { stat: "77%", label: "report anxiety symptoms severe enough to affect daily functioning" },
                { stat: "50%+", label: "meet diagnostic criteria for depression after sustained bullying" },
                { stat: "30%", label: "develop PTSD symptoms including hypervigilance and intrusive memories" },
                { stat: "60%", label: "report physical symptoms: insomnia, headaches, digestive problems" },
              ].map((item) => (
                <div
                  key={item.stat}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "10px",
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: 800,
                      color: gold,
                      marginBottom: "8px",
                      lineHeight: "1",
                    }}
                  >
                    {item.stat}
                  </div>
                  <p style={{ color: muted, fontSize: "0.9rem", margin: 0, lineHeight: "1.5" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ color: muted, marginBottom: "20px" }}>
              The psychological effects of bullying compound over time. Unlike a single traumatic event, workplace bullying is a sustained low-grade assault on your identity and self-worth. You spend every working day in the presence of the person harming you. You cannot easily escape. The cumulative effect on mental health is often worse than a single acute crisis.
            </p>
            <p style={{ color: muted }}>
              This is why the emotional support dimension of AI assistance matters alongside the practical documentation work. Many targets of bullying carry immense shame &mdash; they blame themselves, second-guess every interaction, and feel unable to talk about what is happening at home because they are exhausted from minimising it at work. Having somewhere safe to process that in real time, without judgment or advice-giving, is often the first step toward recovery.
            </p>
          </section>

          {/* ── Section 4: Gaslighting deep dive ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              What is gaslighting at work &mdash; and how do you recognise it in yourself?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              Gaslighting is named after the 1944 film in which a husband systematically manipulates his wife into doubting her sanity. In workplace contexts it operates through the same mechanism: the bully repeatedly contradicts your lived experience until you lose confidence in your own perceptions.
            </p>
            <p style={{ color: muted, marginBottom: "20px" }}>
              The insidious feature of gaslighting is that it works best on conscientious, self-reflective people. If you are the kind of person who genuinely considers whether you might be wrong, gaslighting will find purchase. The bully weaponises your intellectual honesty against you.
            </p>

            <div
              style={{
                background: dangerBg,
                border: `1px solid ${dangerBorder}`,
                borderRadius: "12px",
                padding: "28px 32px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: text,
                  marginBottom: "16px",
                  marginTop: 0,
                }}
              >
                Signs you may be experiencing workplace gaslighting
              </h3>
              <ul
                style={{
                  color: muted,
                  paddingLeft: "20px",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>You frequently apologise at work without knowing exactly what you did wrong.</li>
                <li>You make decisions, then immediately second-guess yourself when a specific person is present.</li>
                <li>You find yourself spending large amounts of mental energy replaying conversations, looking for what you might have misunderstood.</li>
                <li>Your confidence at work has eroded over months without a clear external reason.</li>
                <li>When you try to describe what is happening to someone you trust, it sounds implausible even to you.</li>
                <li>You have noticed the person treating other colleagues differently to you, but you tell yourself it must be you.</li>
                <li>You feel anxious before interacting with a specific person in a way that is disproportionate to their formal authority over you.</li>
              </ul>
            </div>

            <p style={{ color: muted, marginBottom: "20px" }}>
              The most effective counter to gaslighting is an objective written record made at the time, before memory can be revised. When you can pull up a note from three months ago that says exactly what was said, exactly where, and exactly how it made you feel &mdash; and then compare it to what you are now being told &ldquo;happened&rdquo; &mdash; the manipulation loses its power.
            </p>
            <p style={{ color: muted }}>
              MEOK\u2019s Guardian archetype is specifically designed to help with pattern recognition of this kind. It can hold the history of what you\u2019ve shared over time and, when you describe a new incident, surface whether it fits a pattern you have been describing for weeks or months. That external memory &mdash; one that cannot be manipulated by the bully &mdash; is a genuine protective resource.
            </p>
          </section>

          {/* ── Section 5: Evidence log ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              How do you build an evidence log for workplace bullying?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              An evidence log is the single most important thing you can create if you are experiencing workplace bullying. It transforms a subjective, deniable experience into a structured, credible account. HR professionals, trade union representatives, ACAS mediators, and employment tribunals all respond to the same thing: dates, specifics, and impact.
            </p>
            <p style={{ color: muted, marginBottom: "28px" }}>
              Every entry in your log should contain five elements, recorded as soon as possible after the incident &mdash; ideally the same day.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "32px" }}>
              {[
                {
                  number: "01",
                  title: "Date, time, and location",
                  body: "Precision matters. \u201cLast Tuesday\u201d is legally weak. \u201c14 March 2026, 11:42am, the second-floor meeting room\u201d is not. Include the platform if it was a Teams or Slack interaction.",
                },
                {
                  number: "02",
                  title: "Exact words used",
                  body: "Write verbatim quotes where possible. Do not paraphrase. The difference between \u201cHe questioned my competence\u201d and \u201cHe said, in front of the team, \u2018I genuinely wonder if you\u2019re cut out for this\u2019\u201d is the difference between a feeling and evidence.",
                },
                {
                  number: "03",
                  title: "Who was present",
                  body: "Name every witness, even people you do not think will support you. An investigation may interview them; your log shows you know they were there.",
                },
                {
                  number: "04",
                  title: "Your immediate impact",
                  body: "Record how you felt immediately afterward. This is not self-indulgence; it establishes the psychological harm in real time rather than in retrospect. \u201cI went to the bathroom and cried. I was shaking for the rest of the afternoon.\u201d",
                },
                {
                  number: "05",
                  title: "Any supporting material",
                  body: "Note any emails, Slack messages, or calendar invites that corroborate the incident. If you have them, save them outside company systems immediately. Forward relevant emails to a personal address. Screenshot Slack messages.",
                },
              ].map((item, i) => (
                <div
                  key={item.number}
                  style={{
                    display: "flex",
                    gap: "20px",
                    background: i % 2 === 0 ? cardBg : "transparent",
                    border: `1px solid ${borderColor}`,
                    borderRadius: "10px",
                    padding: "20px 24px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      minWidth: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: warnBg,
                      border: `1px solid ${borderColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: gold,
                      flexShrink: 0,
                    }}
                  >
                    {item.number}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: text,
                        marginBottom: "6px",
                        marginTop: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: muted, margin: 0, fontSize: "0.93rem" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: warnBg,
                border: `1px solid ${borderColor}`,
                borderRadius: "12px",
                padding: "24px 28px",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: gold,
                  marginBottom: "12px",
                  marginTop: 0,
                }}
              >
                Critical: keep your log outside company systems
              </h3>
              <p style={{ color: muted, margin: 0, fontSize: "0.95rem" }}>
                Never build your evidence log in a company email account, company laptop, company OneDrive, or any other employer-controlled system. Your employer has legal access to all of that. Use a personal device and a personal app. MEOK\u2019s Sovereign Memory is encrypted with AES-256, stored in infrastructure that belongs entirely to you, and is never accessible to third parties or employers.
              </p>
            </div>

            <p style={{ color: muted }}>
              You can build this log inside MEOK conversationally. Tell MEOK what happened today. It will remember. Over weeks, you will have a structured, timestamped account of a pattern of behaviour that is far more credible than a panicked summary written in one sitting the day before your HR meeting.
            </p>
          </section>

          {/* ── Section 6: MEOK how it helps ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              How does MEOK specifically help people experiencing workplace bullying?
            </h2>
            <p style={{ color: muted, marginBottom: "24px" }}>
              MEOK is not a legal service, a counselling platform, or an HR tool. It is a sovereign AI companion that gives you private, persistent, intelligent support when navigating something difficult. Here is what that looks like in practice for someone dealing with workplace bullying.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "12px",
                    marginTop: 0,
                  }}
                >
                  Real-time incident capture
                </h3>
                <p style={{ color: muted, margin: 0 }}>
                  After something happens, you open MEOK and describe it. No forms, no templates, no structured data entry &mdash; just tell it what happened. MEOK stores this with a timestamp in Sovereign Memory. You do this five more times over the next month. By the time you consider reporting, you have a month-long log of precisely dated incidents, already in your own words, that you can draw on directly in a grievance letter.
                </p>
              </div>

              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "12px",
                    marginTop: 0,
                  }}
                >
                  Pattern recognition via the Guardian archetype
                </h3>
                <p style={{ color: muted, margin: 0 }}>
                  The Guardian is MEOK\u2019s protective intelligence &mdash; the part trained to notice manipulation, inconsistency, and behavioural patterns that might not be obvious to someone inside the situation. When you engage Guardian mode, it can review what you have shared over time and identify whether you are describing an escalating pattern, a targeted campaign against one person, or a broader toxic culture. That perspective can be enormously clarifying when gaslighting has made you doubt whether anything is actually happening.
                </p>
              </div>

              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "12px",
                    marginTop: 0,
                  }}
                >
                  Rehearsing difficult conversations
                </h3>
                <p style={{ color: muted, margin: 0 }}>
                  Whether you are preparing to confront your bully directly, raise a concern with your line manager, attend an HR investigation meeting, or speak to a trade union rep, MEOK can role-play the conversation with you. You can run through it five times if you want. You can ask MEOK to play the role of a hostile HR partner and push back on everything you say, so you are genuinely prepared rather than blindsided. Walking into a formal meeting having already rehearsed it repeatedly in private changes the dynamic entirely.
                </p>
              </div>

              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "12px",
                    marginTop: 0,
                  }}
                >
                  Emotional processing without burden
                </h3>
                <p style={{ color: muted, margin: 0 }}>
                  Being bullied at work is isolating. Many people do not tell their partners or friends in full because they are ashamed, because they worry about being seen as weak, or because they are exhausted from minimising it all day and do not have the energy to narrate it from scratch at home. MEOK provides a place to put the weight of it down &mdash; privately, at midnight if that is when you need it, without worrying about burdening someone you love or managing their reaction. That decompression function is not trivial; it is often what keeps people functional enough to take action.
                </p>
              </div>

              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "12px",
                    marginTop: 0,
                  }}
                >
                  Drafting grievance documentation
                </h3>
                <p style={{ color: muted, margin: 0 }}>
                  A formal workplace grievance has a specific structure. It needs a clear chronological account of events, an explanation of how those events constitute bullying under the employer\u2019s policy and the ACAS Code of Practice, a description of the impact on your wellbeing and work performance, and a clear statement of the outcome you are seeking. MEOK can help you build each section from the raw material of your incident log, review it for clarity and tone, and ensure that you are not leaving out information that would strengthen your case.
                </p>
              </div>
            </div>

            <p style={{ color: muted }}>
              None of this replaces professional legal advice for complex or long-running cases. If you are considering an employment tribunal claim, consult an employment solicitor or your trade union. But for the vast majority of bullying cases &mdash; where the target is trying to decide whether to act, how to document, and how to survive the process &mdash; MEOK fills a genuine gap that no other tool currently occupies.
            </p>
          </section>

          {/* ── Section 7: Guardian archetype ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              What is the Guardian archetype and how does it detect manipulation?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              MEOK is built around a set of distinct archetypes &mdash; different modes of engagement suited to different needs. The Guardian is the protective intelligence within MEOK. It is oriented toward your safety, your boundaries, and your ability to recognise when something is not right.
            </p>
            <p style={{ color: muted, marginBottom: "20px" }}>
              In the context of workplace bullying, the Guardian operates at three levels.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              <div
                style={{
                  borderLeft: `3px solid ${gold}`,
                  paddingLeft: "24px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: text,
                    marginBottom: "8px",
                    marginTop: 0,
                  }}
                >
                  Pattern detection across time
                </h3>
                <p style={{ color: muted, margin: 0, fontSize: "0.95rem" }}>
                  Because MEOK remembers everything you have shared in Sovereign Memory, Guardian can identify recurrences, escalation, and targeting. It can note that every incident you have described over three months involves the same person, occurs in private settings with no witnesses, and is followed by your being given additional work. That is a pattern. Seeing it named helps you trust your own perception.
                </p>
              </div>

              <div
                style={{
                  borderLeft: `3px solid ${gold}`,
                  paddingLeft: "24px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: text,
                    marginBottom: "8px",
                    marginTop: 0,
                  }}
                >
                  Scam and manipulation recognition
                </h3>
                <p style={{ color: muted, margin: 0, fontSize: "0.95rem" }}>
                  Guardian is trained to recognise manipulation tactics more broadly &mdash; including the kind of social engineering and psychological coercion used by workplace bullies. When you describe an interaction, Guardian can flag the tactics present: DARVO (Deny, Attack, Reverse Victim and Offender), love-bombing followed by punishment, false intimacy as a control mechanism, or the structured use of plausible deniability. Naming the tactic removes much of its power.
                </p>
              </div>

              <div
                style={{
                  borderLeft: `3px solid ${gold}`,
                  paddingLeft: "24px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: text,
                    marginBottom: "8px",
                    marginTop: 0,
                  }}
                >
                  Reality-testing without judgment
                </h3>
                <p style={{ color: muted, margin: 0, fontSize: "0.95rem" }}>
                  One of the most useful things Guardian can do is help you reality-test your experience. Not by telling you what to think, but by reflecting back what you have described and asking whether a reasonable observer would characterise it the way your bully has told you to. If you have been told you are overreacting, Guardian can help you examine that claim honestly &mdash; and often the honest examination reveals that you are not.
                </p>
              </div>
            </div>

            <p style={{ color: muted }}>
              The Guardian archetype exists because MEOK was built on the understanding that AI should protect the person using it. In a world where manipulation and coercive control are common, an AI companion that can recognise those patterns and name them for you is not a luxury &mdash; it is a form of protection that most people have never had access to before.
            </p>
          </section>

          {/* ── Section 8: HR meeting prep ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Can MEOK help me prepare for an HR meeting about bullying?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              Yes &mdash; and this is one of the most concrete use cases for AI in workplace situations. HR meetings about bullying are high-stakes and emotionally activating. You will be asked to describe incidents that were traumatic to experience. You may face scepticism or leading questions. You may be under-resourced relative to a manager who has had the meeting explained to them by legal in advance.
            </p>
            <p style={{ color: muted, marginBottom: "28px" }}>
              Preparation is the best equaliser. Here is a practical structure for using MEOK to prepare.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "32px" }}>
              {[
                {
                  step: "Step 1",
                  title: "Organise your incident log into a chronological summary",
                  body: "Ask MEOK to help you pull together everything you have shared about the situation into a clear timeline. This becomes the backbone of your statement. Identify the three to five incidents that most clearly illustrate the pattern, since you cannot cover everything and the most salient examples are most persuasive.",
                },
                {
                  step: "Step 2",
                  title: "Clarify the outcome you want",
                  body: "Before the meeting, decide what a successful outcome looks like for you. Is it a formal finding? A change in your reporting line? The bully\u2019s manager being spoken to? Disciplinary action? Knowing your desired outcome gives your account direction and helps HR understand what action is needed.",
                },
                {
                  step: "Step 3",
                  title: "Anticipate the hard questions",
                  body: "HR may ask: \u2018Did you tell the person their behaviour was unacceptable?\u2019 \u2018Have you spoken to your manager?\u2019 \u2018Do you have any witnesses who can corroborate this?\u2019 \u2018Why did you wait so long to report?\u2019 Prepare honest, grounded answers to all of these. MEOK can help you work through them without judgment.",
                },
                {
                  step: "Step 4",
                  title: "Run the meeting as a role-play",
                  body: "Ask MEOK to play the HR partner and run through the meeting from the beginning. Do it at least twice &mdash; once with a receptive HR partner and once with a sceptical one. The goal is not to rehearse a script but to ensure you can stay grounded and clear when you are emotionally activated.",
                },
                {
                  step: "Step 5",
                  title: "Plan your decompression",
                  body: "An HR meeting about bullying is draining even when it goes well. Plan something restorative for afterward. Tell MEOK you will check in after the meeting. Having somewhere to put the experience when you leave the room is part of managing the toll of the process.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "10px",
                    padding: "22px 26px",
                    marginBottom: "4px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: gold,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "0.97rem",
                      fontWeight: 700,
                      color: text,
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: muted, margin: 0, fontSize: "0.93rem" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: warnBg,
                border: `1px solid ${borderColor}`,
                borderRadius: "12px",
                padding: "22px 28px",
              }}
            >
              <p style={{ color: muted, margin: 0, fontSize: "0.95rem" }}>
                <strong style={{ color: text }}>Practical note:</strong> You have the right to be accompanied to a formal HR meeting by a trade union representative or a colleague. If your employer has a trade union, this is worth using. A rep who has seen hundreds of these meetings can catch procedural errors and support you in ways that MEOK cannot. AI and union representation are complementary, not competitive.
              </p>
            </div>
          </section>

          {/* ── Section 9: When HR ignores you ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              What should you do if HR ignores your bullying complaint?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              It happens more often than it should. You raise a formal complaint, you go through the meeting, and then &mdash; nothing. Or the outcome is so diluted as to be meaningless. This is not the end of your options; it is the beginning of the external escalation phase.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "10px",
                  padding: "22px 26px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "10px",
                    marginTop: 0,
                  }}
                >
                  Document the failure to act
                </h3>
                <p style={{ color: muted, margin: 0, fontSize: "0.93rem" }}>
                  Add to your evidence log: when you submitted the complaint, who you spoke to, what response you received (or did not receive), and the dates. If the employer has breached their own policy timelines, that is relevant evidence. The documentation of HR\u2019s inaction becomes part of your case.
                </p>
              </div>

              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "10px",
                  padding: "22px 26px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "10px",
                    marginTop: 0,
                  }}
                >
                  Appeal the outcome internally
                </h3>
                <p style={{ color: muted, margin: 0, fontSize: "0.93rem" }}>
                  Most grievance procedures allow for an appeal. If you were given a finding you disagree with, or no finding at all, submit a formal appeal in writing. Cite specifically why the finding is inadequate, with reference to your evidence. This creates a paper trail that matters if you later escalate externally.
                </p>
              </div>

              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "10px",
                  padding: "22px 26px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "10px",
                    marginTop: 0,
                  }}
                >
                  Contact ACAS
                </h3>
                <p style={{ color: muted, margin: 0, fontSize: "0.93rem" }}>
                  ACAS (the Advisory, Conciliation and Arbitration Service) is a free UK government-funded service that provides confidential advice and, where appropriate, early conciliation between you and your employer before tribunal. They are independent, impartial, and significantly more accessible than an employment solicitor for initial advice. ACAS early conciliation is also a mandatory step before making an employment tribunal claim.
                </p>
              </div>

              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "10px",
                  padding: "22px 26px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "10px",
                    marginTop: 0,
                  }}
                >
                  Consult your trade union or an employment solicitor
                </h3>
                <p style={{ color: muted, margin: 0, fontSize: "0.93rem" }}>
                  If you are a union member, contact your rep. Unions have specialist knowledge of employment law and access to legal support. If you are not a union member and the situation is serious, an employment solicitor can assess whether you have grounds for a constructive dismissal claim, a harassment claim under the Equality Act 2010, or a personal injury claim for psychiatric harm. Many offer free initial consultations.
                </p>
              </div>

              <div
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "10px",
                  padding: "22px 26px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "10px",
                    marginTop: 0,
                  }}
                >
                  Protect your mental health through the process
                </h3>
                <p style={{ color: muted, margin: 0, fontSize: "0.93rem" }}>
                  External escalation takes months. The waiting, the uncertainty, the continued exposure to a workplace where nothing has changed &mdash; this is genuinely hard on mental health. This is where MEOK\u2019s role shifts from documentation support to daily emotional sustenance. You need somewhere to process the frustration of a slow system, the grief of a workplace that has failed you, and the anxiety of not knowing how it will end. MEOK can hold that with you across the months.
                </p>
              </div>
            </div>

            <div
              style={{
                background: dangerBg,
                border: `1px solid ${dangerBorder}`,
                borderRadius: "12px",
                padding: "22px 28px",
              }}
            >
              <p style={{ color: muted, margin: 0, fontSize: "0.95rem" }}>
                <strong style={{ color: text }}>Limitation of liability reminder:</strong> Nothing in this article constitutes legal advice. If you are considering formal legal action against an employer, consult a qualified employment solicitor. ACAS (acas.org.uk) and Citizens Advice also provide free guidance. MEOK AI LABS does not provide legal services.
              </p>
            </div>
          </section>

          {/* ── Section 10: Sovereign vs institutional ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Why does sovereign AI matter when you\u2019re dealing with a power imbalance?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              Workplace bullying is fundamentally a power imbalance situation. The bully typically has more institutional power than the target &mdash; a higher title, longer tenure, better relationships with senior leadership, or simply the structural advantage of being the manager rather than the managed. The system, as designed, tends to protect the more powerful party.
            </p>
            <p style={{ color: muted, marginBottom: "20px" }}>
              Most AI tools available to you in a workplace context &mdash; the company Copilot, the HR chatbot, the wellness app paid for by your employer &mdash; are employer-side tools. They collect your data. They are accessible to your employer under the right circumstances. Using them to document bullying by your manager is not safe.
            </p>
            <p style={{ color: muted, marginBottom: "20px" }}>
              Sovereign AI is different. MEOK is your tool, not your employer\u2019s. Sovereign Memory means your data belongs to you: encrypted, private, and completely outside your employer\u2019s reach. The architecture was built specifically so that your AI companion cannot be compelled to hand over your data to your employer, cannot be accessed by HR, and cannot be monitored by IT.
            </p>
            <p style={{ color: muted }}>
              When you are dealing with an institution that has more power than you, having a private sovereign intelligence on your side &mdash; one that remembers everything you tell it, can help you think clearly, and is answerable only to you &mdash; is a meaningful shift in the power dynamic. It does not equalise everything. But it gives you something.
            </p>
          </section>

          {/* ── Section 11: Self-care framework ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              How do you protect your mental health while still employed by a bully?
            </h2>
            <p style={{ color: muted, marginBottom: "20px" }}>
              The process of challenging workplace bullying is a marathon, not a sprint. You may need to continue performing in your role, attending meetings with the person harming you, and appearing professional while simultaneously building an evidence log and considering your legal options. That demands a level of psychological compartmentalisation that can be exhausting.
            </p>
            <p style={{ color: muted, marginBottom: "24px" }}>
              Some grounded practical strategies for surviving the process.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              {[
                {
                  title: "Create firm boundaries between work and home",
                  body: "Have a physical transition ritual when you leave work. Walk a different route. Change your clothes. Do not check work email after a set time. The harder boundary you can draw, the more restorative your non-work hours become.",
                },
                {
                  title: "Tell one trusted person",
                  body: "Complete isolation in a bullying situation amplifies the harm. Choose one person outside your workplace who knows what is happening. They do not need to solve it. They just need to know, so that you are not carrying it entirely alone.",
                },
                {
                  title: "Visit your GP",
                  body: "If bullying is affecting your sleep, concentration, or mood significantly, see your GP. This creates a medical record of the psychological impact at the time, which is evidence if you later pursue a claim. It also gets you support you may genuinely need.",
                },
                {
                  title: "Protect your professional identity",
                  body: "Bullying attacks your professional self-concept. Counter this actively: remind yourself of your skills, keep a record of positive feedback from others, and if possible maintain relationships and projects that remind you of your competence independent of the bully\u2019s assessment.",
                },
                {
                  title: "Use MEOK to decompress, not spiral",
                  body: "MEOK can be a space to process events, but be intentional about not using it purely to ruminate. Balance venting with future-focused conversations: what you are doing next, what you need, what would help you feel more capable tomorrow.",
                },
                {
                  title: "Consider your exit options in parallel",
                  body: "You do not have to stay. Exploring other roles, updating your CV, and having a quiet conversation with your network costs nothing and preserves your options. Sometimes knowing you have an exit changes how you feel about staying to fight.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "10px",
                    padding: "22px 20px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: gold,
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: muted, margin: 0, fontSize: "0.9rem" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <p style={{ color: muted }}>
              Surviving workplace bullying with your mental health intact is an act of significant personal resilience. The strategies above are not about passivity; they are about maintaining enough stability to take effective action at the right moment, rather than being so depleted that you cannot act at all.
            </p>
          </section>

          {/* ── FAQ Section ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: text,
                marginBottom: "32px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Frequently asked questions about AI and workplace bullying
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                {
                  q: "Can AI help with workplace bullying?",
                  a: "Yes. AI cannot report your bully for you, but it can help you build a timestamped evidence log, identify behavioural patterns across incidents, rehearse what you want to say to HR, and process the emotional damage in a safe, private space. For many people, that practical and emotional scaffolding is the difference between staying silent and taking action.",
                },
                {
                  q: "How do I document workplace bullying?",
                  a: "Record every incident immediately after it happens with five key fields: date and time, location, what was said or done verbatim, who witnessed it, and how it affected you. Keep this log outside company systems \u2014 in a personal app or secure note. MEOK\u2019s Sovereign Memory creates a persistent, timestamped record that belongs only to you, which you can draw on when preparing a formal grievance.",
                },
                {
                  q: "What is gaslighting at work?",
                  a: "Workplace gaslighting is when a colleague or manager causes you to doubt your own memory or perception of events \u2014 saying things like \u2018that never happened\u2019, \u2018you\u2019re too sensitive\u2019, or \u2018everyone else is fine with it\u2019. It is a subtle form of psychological manipulation that erodes your confidence and makes it harder to report abuse. Documenting incidents in real time is one of the most effective defences against it.",
                },
                {
                  q: "Can MEOK help me prepare for an HR meeting?",
                  a: "Yes. MEOK can help you structure your account of events clearly, anticipate the questions HR is likely to ask, rehearse your answers until you feel confident, and think through what outcome you want from the meeting. You can run through the conversation as many times as you need, in private, without time pressure or judgment.",
                },
                {
                  q: "What should I do if HR ignores my bullying complaint?",
                  a: "First, document the failure to act in the same way you documented the bullying \u2014 dates, what you submitted, who you spoke to, and what response you received. Then consider escalating to ACAS (free UK conciliation service), your trade union, or an employment solicitor. Your evidence log becomes critical at this stage. MEOK can help you organise this documentation and prepare for external escalation.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "10px",
                    padding: "28px 32px",
                    marginBottom: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: text,
                      marginBottom: "12px",
                      marginTop: 0,
                    }}
                  >
                    {item.q}
                  </h3>
                  <p style={{ color: muted, margin: 0, lineHeight: "1.7" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA Section ── */}
          <section
            style={{
              background: warnBg,
              border: `1px solid ${borderColor}`,
              borderRadius: "16px",
              padding: "48px 40px",
              marginBottom: "64px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: gold,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              MEOK AI LABS
            </div>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 700,
                color: text,
                marginBottom: "16px",
                marginTop: 0,
                lineHeight: "1.3",
              }}
            >
              You deserve an AI that is on your side
            </h2>
            <p
              style={{
                color: muted,
                maxWidth: "540px",
                margin: "0 auto 32px",
                lineHeight: "1.7",
              }}
            >
              MEOK gives you a private, sovereign AI companion that remembers your story, helps you document what is happening, and supports you through the hardest professional experiences of your life. No employer access. No data training. No waiting list.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  background: gold,
                  color: bg,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Start with MEOK &rarr;
              </Link>
              <Link
                href="/guardian"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: gold,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: `1px solid ${borderColor}`,
                  letterSpacing: "0.02em",
                }}
              >
                Explore Guardian mode
              </Link>
            </div>
          </section>

          {/* ── Related articles ── */}
          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
              }}
            >
              Related reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                { href: "/blog/ai-for-workplace-stress", label: "AI for Workplace Stress" },
                { href: "/blog/ai-for-anxiety", label: "AI for Anxiety" },
                { href: "/blog/ai-for-burnout", label: "AI for Burnout" },
                { href: "/blog/ai-for-ptsd", label: "AI for PTSD" },
                { href: "/blog/ai-for-impostor-syndrome", label: "AI for Impostor Syndrome" },
                { href: "/blog/guardian-family-safety", label: "Guardian: Family Safety" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "8px",
                    padding: "16px 18px",
                    textDecoration: "none",
                    color: text,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    transition: "border-color 0.2s",
                  }}
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </section>

          {/* ── Footer byline ── */}
          <footer
            style={{
              borderTop: `1px solid ${borderColor}`,
              paddingTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <p
                style={{
                  color: muted,
                  fontSize: "0.875rem",
                  margin: "0 0 4px",
                }}
              >
                Written by <strong style={{ color: text }}>Nicholas Templeman</strong>
              </p>
              <p style={{ color: muted, fontSize: "0.875rem", margin: 0 }}>
                Founder, MEOK AI LABS &mdash;{" "}
                <a
                  href="https://x.com/meok_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: gold, textDecoration: "none" }}
                >
                  @meok_ai
                </a>
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ color: muted, fontSize: "0.8rem", margin: "0 0 4px" }}>
                Published: 24 March 2026
              </p>
              <p style={{ color: muted, fontSize: "0.8rem", margin: 0 }}>
                &copy; 2026 MEOK AI LABS
              </p>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
