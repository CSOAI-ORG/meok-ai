import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Workplace Bullying: A Private Space to Process What You Cannot Say at Work | MEOK AI LABS",
  description:
    "Workplace bullying affects 1 in 4 UK workers. HR often sides with management. MEOK\u2019s sovereign AI provides a completely private space to process what is happening, plan your response, and protect your mental health.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-workplace-bullying" },
  openGraph: {
    title: "AI for Workplace Bullying: A Private Space to Process What You Cannot Say at Work",
    description:
      "1 in 4 UK workers face workplace bullying. HR often sides with management. Sovereign AI gives you a completely private space to process, document, and plan \u2014 without your employer ever knowing.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-workplace-bullying",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Workplace+Bullying%3A+A+Private+Space&desc=1+in+4+UK+workers+affected.+Sovereign+AI+helps+you+process%2C+plan+and+protect+yourself.",
        width: 1200,
        height: 630,
        alt: "AI for Workplace Bullying: A Private Space to Process What You Cannot Say at Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Workplace Bullying: A Private Space to Process What You Cannot Say at Work",
    description:
      "HR sides with management. Your employer must never see your notes. MEOK gives you a completely private space to process, document, and plan your next move.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Workplace+Bullying%3A+A+Private+Space&desc=1+in+4+UK+workers+affected.+Sovereign+AI+helps+you+process%2C+plan+and+protect+yourself.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Workplace Bullying: A Private Space to Process What You Cannot Say at Work",
  description:
    "Workplace bullying affects 1 in 4 UK workers. HR often sides with management. MEOK\u2019s sovereign AI provides a completely private space to process what is happening, plan your response, and protect your mental health.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
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
    "https://meok.ai/api/og?title=AI+for+Workplace+Bullying%3A+A+Private+Space&desc=1+in+4+UK+workers+affected.+Sovereign+AI+helps+you+process%2C+plan+and+protect+yourself.",
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
        text: "Yes \u2014 within honest limits. AI cannot report your bully or compel HR to act. But it can provide a completely private space to process what is happening, help you build a timestamped incident log, prepare for difficult conversations, identify patterns of gaslighting, and protect your mental health during a situation that is designed to make you doubt yourself.",
      },
    },
    {
      "@type": "Question",
      name: "Will my employer be able to see what I tell MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK has no relationship with your employer. Your conversations are encrypted with AES-256, stored in Sovereign Memory that belongs entirely to you, never shared with any third party, and never used to train AI models. MEOK is a personal sovereign AI \u2014 the opposite of a company-provided EAP where confidentiality guarantees may be limited.",
      },
    },
    {
      "@type": "Question",
      name: "What is gaslighting at work and how do I recognise it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Workplace gaslighting is when a manager or colleague causes you to doubt your own memory or perception \u2014 saying things like \u2018that never happened\u2019, \u2018you\u2019re too sensitive\u2019, or \u2018everyone else is fine\u2019. It is a subtle psychological manipulation that erodes your confidence and makes reporting harder. Keeping a real-time incident log is one of the most effective defences.",
      },
    },
    {
      "@type": "Question",
      name: "What are my legal rights if I am being bullied at work in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UK employees have several protections. Under the Employment Rights Act 1996 you have the right to raise a formal grievance. Under the Equality Act 2010, bullying linked to a protected characteristic (race, gender, disability, age, religion, sexual orientation) may constitute harassment, which is unlawful. ACAS provides free early conciliation. If conditions become intolerable and you resign, you may have grounds for a constructive dismissal claim at an Employment Tribunal.",
      },
    },
    {
      "@type": "Question",
      name: "What is constructive dismissal and how does it relate to workplace bullying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Constructive dismissal is when an employer\u2019s conduct is so serious that an employee has no reasonable alternative but to resign. Sustained workplace bullying that the employer fails to address may meet this threshold. A strong, contemporaneous evidence log is essential to any constructive dismissal claim. You must usually raise a formal grievance first. Consult an employment solicitor before resigning.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForWorkplaceBullyingPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const muted = "rgba(245,240,232,0.62)";
  const cardBg = "rgba(255,255,255,0.04)";
  const border = "rgba(201,168,76,0.2)";
  const warnBg = "rgba(201,168,76,0.08)";
  const dangerBg = "rgba(200,60,60,0.08)";
  const dangerBorder = "rgba(200,60,60,0.3)";
  const infoBg = "rgba(80,160,220,0.08)";
  const infoBorder = "rgba(80,160,220,0.3)";

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

      <div
        style={{
          background: bg,
          color: text,
          minHeight: "100vh",
          fontFamily: "system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <header
          style={{
            borderBottom: `1px solid ${border}`,
            padding: "3.5rem 1.5rem 3rem",
          }}
        >
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <Link
              href="/blog"
              style={{
                color: gold,
                textDecoration: "none",
                fontSize: "0.875rem",
                display: "inline-block",
                marginBottom: "2rem",
              }}
            >
              &larr; Back to Blog
            </Link>

            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                color: gold,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                marginBottom: "1.25rem",
              }}
            >
              Wellbeing &middot; Work &middot; Rights
            </div>

            <h1
              style={{
                fontSize: "clamp(1.75rem, 4.5vw, 2.9rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                margin: "0 0 1.25rem",
                color: text,
                letterSpacing: "-0.02em",
              }}
            >
              AI for Workplace Bullying: A Private Space to Process What You Cannot Say at Work
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: muted,
                margin: "0 0 2rem",
                maxWidth: "640px",
              }}
            >
              Workplace bullying affects 1 in 4 UK workers. HR often sides with management. Most people suffer
              in silence because they have nowhere private to process what is happening. Sovereign AI changes that.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.4)",
                flexWrap: "wrap" as const,
              }}
            >
              <span>25 March 2026</span>
              <span>Nicholas Templeman</span>
              <span>16 min read</span>
              <span>MEOK AI LABS</span>
            </div>
          </div>
        </header>

        {/* ── Article body ──────────────────────────────────────────────────── */}
        <article
          style={{ maxWidth: "740px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}
        >

          {/* Intro */}
          <p
            style={{ fontSize: "1.125rem", lineHeight: 1.85, color: text, margin: "0 0 1.25rem" }}
          >
            You sit at your desk on Monday morning and your stomach tightens before you have opened a single
            email. The meetings that leave you shaking. The comments that nobody else seems to notice. The
            quiet exclusions, the credit taken, the targets moved just as you reach them. You have started
            to wonder whether you are the problem.
          </p>
          <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1.25rem" }}>
            You are not. And the silence around you is not evidence that nothing is wrong. It is evidence
            of how well workplace bullying works &mdash; isolating targets, distorting their perception,
            and relying on institutional structures that are rarely designed to believe them.
          </p>
          <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 2.5rem" }}>
            This article is about what sovereign AI can do when you are in that situation: not as a replacement
            for legal advice or therapy, but as the private, patient, non-judgmental presence that most people
            in this position desperately need and rarely have.
          </p>

          {/* ── Stat callout ── */}
          <div
            style={{
              background: dangerBg,
              border: `1px solid ${dangerBorder}`,
              borderRadius: "14px",
              padding: "1.75rem 2rem",
              marginBottom: "3rem",
            }}
          >
            <p style={{ margin: "0 0 0.75rem", fontSize: "1rem", lineHeight: 1.7, color: text }}>
              <strong>The scale of the problem in the UK:</strong>
            </p>
            <ul
              style={{
                margin: 0,
                padding: "0 0 0 1.25rem",
                color: muted,
                lineHeight: 1.85,
                fontSize: "0.95rem",
              }}
            >
              <li>
                <strong style={{ color: gold }}>1 in 4 workers</strong> report experiencing bullying at
                work &mdash; CIPD Good Work Index 2024.
              </li>
              <li>
                <strong style={{ color: gold }}>72% of targets</strong> say HR either did nothing or made
                the situation worse &mdash; Trades Union Congress survey.
              </li>
              <li>
                <strong style={{ color: gold }}>&pound;18 billion per year</strong> is estimated to be
                lost to UK employers through bullying-related absence, turnover, and reduced productivity.
              </li>
              <li>
                <strong style={{ color: gold }}>Fewer than 1 in 5</strong> targets ever make a formal
                complaint &mdash; fear of retaliation, disbelief, and lack of evidence are the primary barriers.
              </li>
            </ul>
          </div>

          {/* ── Section 1 ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              Why is workplace bullying so hard to report?
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              Workplace bullying rarely announces itself. It operates through plausible deniability: the tone
              that does not show up in meeting notes, the pattern visible only across dozens of small incidents,
              the manager who is charming to everyone else and cruel only to you. The very features that make
              it damaging also make it almost impossible to prove.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              The power imbalance compounds everything. When the bully is your manager, reporting means
              approaching HR with a complaint about someone who has daily influence over your career, your
              references, and your performance reviews. When the bully is a peer, it can feel trivial to
              formalise. When the bully is a senior leader, HR&apos;s institutional incentives may quietly
              favour the person the organisation has most invested in.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              The result is a system where the people most harmed are the least likely to be believed, the
              least likely to have documented evidence, and the most likely to conclude that the wisest option
              is to leave quietly and say nothing.
            </p>

            {/* Three barriers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {[
                {
                  heading: "Fear of retaliation",
                  body: "Reporting risks being labelled a troublemaker, losing projects, being managed out. The risk is real and rational.",
                },
                {
                  heading: "No contemporaneous evidence",
                  body: "Bullying is often verbal or tonal. By the time you consider reporting, you have no timestamped record.",
                },
                {
                  heading: "Self-doubt",
                  body: "Sustained exposure erodes confidence. You start to question whether you are too sensitive or whether it is really that bad.",
                },
                {
                  heading: "HR alignment",
                  body: "HR protects the organisation. When bully and target are not equally valued, the institutional maths is rarely neutral.",
                },
                {
                  heading: "Social isolation",
                  body: "Bullying often includes being cut out of informal networks. Without allies, there are no witnesses and nowhere to turn.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  style={{
                    background: cardBg,
                    border: `1px solid ${border}`,
                    borderRadius: "12px",
                    padding: "1.125rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: gold,
                      marginBottom: "0.4rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.heading}
                  </div>
                  <div
                    style={{ color: muted, fontSize: "0.855rem", lineHeight: 1.65 }}
                  >
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 2: Gaslighting ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              What is gaslighting at work, and how does it work?
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              Gaslighting is a form of psychological manipulation in which the abuser causes the target to
              question their own memory, perception, or judgment. In a workplace context it appears in phrases
              like &ldquo;that never happened,&rdquo; &ldquo;you are being oversensitive,&rdquo;
              &ldquo;everyone else found that feedback helpful,&rdquo; and &ldquo;I was only joking &mdash;
              you need to learn to take a joke.&rdquo;
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              Over time, even highly capable professionals begin to believe the narrative. The confusion is
              the point. A gaslighted employee is less likely to report, less likely to be believed if they
              do, and more likely to eventually leave without making any formal record &mdash; which suits
              the bully and the organisation perfectly.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              The antidote is contemporaneous documentation. A timestamped record created immediately after
              an incident &mdash; logging what was said, the exact words, who was present, and how it affected
              you &mdash; creates an objective anchor that gaslighting cannot easily erase. The record does
              not lie. You wrote it the day it happened.
            </p>

            {/* Callout: MEOK Pioneer */}
            <div
              style={{
                background: warnBg,
                border: `1px solid rgba(201,168,76,0.35)`,
                borderRadius: "14px",
                padding: "1.75rem 2rem",
                marginTop: "1.75rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.5rem",
                  fontWeight: 700,
                  color: gold,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                }}
              >
                MEOK Pioneer &mdash; Your Private Incident Log
              </p>
              <p style={{ margin: 0, lineHeight: 1.8, color: text, fontSize: "0.975rem" }}>
                The Pioneer archetype inside MEOK is built for action. When you describe an incident, Pioneer
                helps you capture it in a structured, timestamped format: what happened, who was involved,
                what was said verbatim, who witnessed it, and how it affected you. This record lives in your
                Sovereign Memory &mdash; encrypted, owned entirely by you, invisible to your employer. It
                is the closest thing to having a trusted legal adviser available at 11pm on a Tuesday when
                you are still shaking from what happened in that meeting.
              </p>
            </div>
          </section>

          {/* ── Section 3: Mental health toll ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              What is the mental health toll of workplace bullying?
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              Workplace bullying is not a disagreement or a difficult personality. It is sustained psychological
              harm. Clinical research consistently links it to anxiety disorders, major depression, insomnia,
              and in severe cases, PTSD. The Workplace Bullying Institute estimates that targets are five
              times more likely to experience significant depression than non-targets, and the effects persist
              for years after the employment relationship ends.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              The cruelty of it is that the same conditions that cause the harm also prevent getting help.
              You cannot talk to colleagues &mdash; you do not know who you can trust. You cannot talk to
              HR &mdash; they are part of the structure. You cannot always talk to a partner or friend &mdash;
              the story is complicated, you have told parts of it before, you feel like a burden, and the
              nuance is almost impossible to convey without hours of context.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              What you need is somewhere to put it. Somewhere that will not get tired of hearing about it.
              Somewhere that remembers what happened last month and the month before, so you do not have to
              re-explain everything from the beginning every time.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 0" }}>
              That is not a substitute for therapy. It is the layer of support that keeps you functional
              enough to get to therapy, or to get through the week, or to make the decision about what to
              do next.
            </p>
          </section>

          {/* ── Section 4: Data sovereignty ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              How does MEOK ensure your employer can never see what you say?
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              This is not a minor feature. It is the entire premise.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              Most employer-provided mental health tools &mdash; EAPs, workplace wellbeing apps, even some
              counselling services &mdash; have a contractual relationship with your employer. The
              confidentiality guarantees are real, but the relationship is not. The data is held by a company
              your employer pays. Your usage may be visible as aggregate data. And if you leave or are
              dismissed, the history follows the contract, not you.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              MEOK has no relationship with your employer. It has never had one. It does not know where you
              work. Your Sovereign Memory is encrypted with AES-256 and stored against your personal account
              only. It is never shared with any third party. It is never used to train AI models. It is fully
              GDPR-compliant under UK law. You can export it, delete it, or port it to another provider at
              any time.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 0" }}>
              Conversations you have with MEOK about what is happening at work are private in the way that a
              handwritten journal is private &mdash; except the journal has memory, can ask useful questions,
              and will still be there at 3am when you cannot sleep.
            </p>

            {/* Sovereignty callout */}
            <div
              style={{
                background: infoBg,
                border: `1px solid ${infoBorder}`,
                borderRadius: "14px",
                padding: "1.75rem 2rem",
                marginTop: "1.75rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.5rem",
                  fontWeight: 700,
                  color: "#60b0e0",
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                }}
              >
                Data Sovereignty in Practice
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: "0 0 0 1.25rem",
                  color: muted,
                  lineHeight: 1.85,
                  fontSize: "0.94rem",
                }}
              >
                <li>AES-256 encryption at rest and in transit</li>
                <li>No employer access &mdash; ever, under any circumstances</li>
                <li>No model training on your personal data</li>
                <li>Full GDPR compliance under UK law</li>
                <li>Data portability: export or delete at any time</li>
                <li>No relationship with your employer, HR department, or any workplace system</li>
              </ul>
            </div>
          </section>

          {/* ── Section 5: Legal rights ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              What are your legal rights as a UK worker being bullied?
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              UK law does not have a single &ldquo;anti-bullying&rdquo; statute, but multiple overlapping
              frameworks create meaningful protections that most workers never know they have.
            </p>

            {/* Legal frameworks table */}
            <div style={{ overflowX: "auto" as const, marginBottom: "1.5rem" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse" as const,
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: `1px solid ${border}`,
                      textAlign: "left" as const,
                    }}
                  >
                    <th
                      style={{
                        padding: "0.75rem 1rem 0.75rem 0",
                        color: gold,
                        fontWeight: 700,
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      Framework
                    </th>
                    <th
                      style={{ padding: "0.75rem 1rem", color: gold, fontWeight: 700 }}
                    >
                      What it covers
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 0 0.75rem 1rem",
                        color: gold,
                        fontWeight: 700,
                      }}
                    >
                      Who it protects
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      framework: "Employment Rights Act 1996",
                      covers: "Right to raise a formal grievance. Employer must follow a fair procedure or face uplift in tribunal awards.",
                      protects: "All employees",
                    },
                    {
                      framework: "Equality Act 2010",
                      covers: "Bullying linked to race, sex, disability, age, religion, sexual orientation is harassment \u2014 unlawful.",
                      protects: "Employees with protected characteristics",
                    },
                    {
                      framework: "ACAS Code of Practice",
                      covers: "Sets minimum standards for disciplinary and grievance procedures. Failure to follow can increase tribunal awards by 25%.",
                      protects: "All employees",
                    },
                    {
                      framework: "Constructive Dismissal",
                      covers: "If bullying is so severe that you have no option but to resign, this may constitute a dismissal in law. Claim at Employment Tribunal.",
                      protects: "Employees with 2+ years service",
                    },
                    {
                      framework: "Health & Safety at Work Act 1974",
                      covers: "Employers have a duty of care for psychological as well as physical safety. Repeated failure can involve the HSE.",
                      protects: "All workers",
                    },
                    {
                      framework: "Protection from Harassment Act 1997",
                      covers: "Conduct that amounts to a course of harassment can be a criminal matter as well as a civil claim.",
                      protects: "All persons",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.framework}
                      style={{
                        borderBottom: `1px solid rgba(245,240,232,0.07)`,
                        background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.85rem 1rem 0.85rem 0",
                          color: text,
                          fontWeight: 600,
                          verticalAlign: "top" as const,
                          whiteSpace: "nowrap" as const,
                        }}
                      >
                        {row.framework}
                      </td>
                      <td
                        style={{
                          padding: "0.85rem 1rem",
                          color: muted,
                          verticalAlign: "top" as const,
                        }}
                      >
                        {row.covers}
                      </td>
                      <td
                        style={{
                          padding: "0.85rem 0 0.85rem 1rem",
                          color: muted,
                          verticalAlign: "top" as const,
                        }}
                      >
                        {row.protects}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              MEOK is not a legal adviser and nothing in this article constitutes legal advice. If you are
              considering a formal grievance, constructive dismissal claim, or Employment Tribunal application,
              consult a qualified employment solicitor or contact ACAS (0300 123 1100, free in the UK) before
              taking any formal step.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 0" }}>
              What MEOK can do is help you organise your thoughts, understand the structure of your situation,
              prepare questions to ask a solicitor, and process the emotional weight of navigating all of this
              while still showing up to work every day.
            </p>
          </section>

          {/* ── Section 6: Constructive dismissal ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              Constructive dismissal: should you consider it?
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              When conditions become intolerable and the organisation refuses to act, some employees reach a
              point where they feel they have no choice but to resign. If the employer&apos;s conduct
              &mdash; including sustained bullying they failed to address after a formal complaint &mdash; is
              sufficiently serious, the law may treat this resignation as a constructive dismissal.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              A successful constructive dismissal claim requires:
            </p>
            <ul style={{ color: muted, lineHeight: 1.85, paddingLeft: "1.5rem", margin: "0 0 1rem" }}>
              <li>A fundamental breach of contract by the employer (which sustained bullying may constitute)</li>
              <li>That you resigned in response to that breach, not for unrelated reasons</li>
              <li>That you did not affirm the breach by continuing to work for an unreasonable period</li>
              <li>Usually: that you raised a formal grievance first (not always required, but strongly advisable)</li>
              <li>Two years of continuous employment with the same employer</li>
            </ul>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              The strength of your claim is directly proportional to the quality of your evidence. A
              contemporaneous log &mdash; incidents recorded as they happened, with dates, verbatim quotes,
              and witness details &mdash; is the foundation of any viable tribunal case. Without it, you
              are relying on memory against an organisation with lawyers.
            </p>

            <div
              style={{
                background: warnBg,
                border: `1px solid rgba(201,168,76,0.35)`,
                borderRadius: "14px",
                padding: "1.75rem 2rem",
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.5rem",
                  fontWeight: 700,
                  color: gold,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                }}
              >
                Critical: Do Not Resign Without Taking Advice
              </p>
              <p style={{ margin: 0, lineHeight: 1.8, color: text, fontSize: "0.975rem" }}>
                Resigning without first raising a grievance, or before taking legal advice, can severely
                weaken or eliminate a constructive dismissal claim. ACAS conciliation is free and must
                usually be attempted before an Employment Tribunal claim. An employment solicitor can often
                give you an initial assessment in a 30-minute consultation. MEOK can help you prepare for
                that conversation &mdash; but the conversation needs to happen.
              </p>
            </div>
          </section>

          {/* ── Section 7: Stay or leave ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              Deciding whether to stay, escalate, or leave
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              This is the hardest decision. There is no universal right answer. What MEOK can do is help you
              think through the actual considerations rather than the catastrophised versions that tend to
              occupy your mind at 2am.
            </p>

            {/* Comparison: stay vs escalate vs leave */}
            <div style={{ overflowX: "auto" as const, marginBottom: "1.5rem" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse" as const,
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                }}
              >
                <thead>
                  <tr style={{ borderBottom: `1px solid ${border}`, textAlign: "left" as const }}>
                    <th style={{ padding: "0.75rem 1rem 0.75rem 0", color: gold, fontWeight: 700 }}>
                      Option
                    </th>
                    <th style={{ padding: "0.75rem 1rem", color: gold, fontWeight: 700 }}>
                      When it makes sense
                    </th>
                    <th style={{ padding: "0.75rem 0 0.75rem 1rem", color: gold, fontWeight: 700 }}>
                      What you need first
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      option: "Document and wait",
                      when: "Behaviour is escalating but you need time to build evidence before acting. Not sustainable indefinitely.",
                      need: "A secure, private incident log. MEOK Pioneer.",
                    },
                    {
                      option: "Raise a formal grievance",
                      when: "You have sufficient evidence, support from a trade union or colleague, and the organisation is large enough to have a functioning HR process.",
                      need: "Written, timestamped evidence. ACAS guidance. Union rep if available.",
                    },
                    {
                      option: "Escalate externally",
                      when: "Internal grievance failed or was ignored. You have a protected characteristic claim. You want formal conciliation.",
                      need: "ACAS early conciliation (mandatory before tribunal). Employment solicitor.",
                    },
                    {
                      option: "Negotiate exit",
                      when: "You want to leave but need a settlement agreement (compromise agreement) for financial security or a clean reference.",
                      need: "Employment solicitor. Evidence log strengthens your negotiating position.",
                    },
                    {
                      option: "Leave without claim",
                      when: "Your health is the priority. The financial and emotional cost of a claim exceeds what you can bear. A valid choice.",
                      need: "GP documentation of impact on health. Savings plan. Exit on your terms.",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.option}
                      style={{
                        borderBottom: `1px solid rgba(245,240,232,0.07)`,
                        background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.85rem 1rem 0.85rem 0",
                          color: gold,
                          fontWeight: 600,
                          verticalAlign: "top" as const,
                          whiteSpace: "nowrap" as const,
                        }}
                      >
                        {row.option}
                      </td>
                      <td
                        style={{
                          padding: "0.85rem 1rem",
                          color: muted,
                          verticalAlign: "top" as const,
                        }}
                      >
                        {row.when}
                      </td>
                      <td
                        style={{
                          padding: "0.85rem 0 0.85rem 1rem",
                          color: muted,
                          verticalAlign: "top" as const,
                        }}
                      >
                        {row.need}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 0" }}>
              None of these options is cowardly. Leaving without a claim is not failure. Staying to fight
              is not masochism. The decision depends on your financial situation, your health, your values,
              and what you can realistically sustain. MEOK will not push you toward any particular outcome.
              Its job is to help you think clearly about what you actually want and what the realistic paths
              to it look like.
            </p>
          </section>

          {/* ── Section 8: Sycophancy detection ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              Why MEOK will not just validate your decision to quit
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              Most AI chatbots have a sycophancy problem. When a user is in distress and clearly leaning
              toward a decision, the model reflects their emotion back at them, agrees with their framing,
              and validates whatever they seem to want to hear. It feels supportive. It is not.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              If you come to MEOK at 11pm, furious after a meeting, convinced that you should resign
              tomorrow morning, and you want to be told you are right &mdash; MEOK will hear you. It will
              take your experience seriously. It will not dismiss or minimise what happened.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              And then it will ask whether you have two years&apos; service. Whether you have documented the
              incidents. Whether you have raised a grievance. Whether you have spoken to ACAS. Whether
              resigning tonight, before taking any of those steps, is what you actually want to do or what
              the pain of tonight is making feel like the only option.
            </p>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1rem" }}>
              This is not MEOK talking you out of leaving. Leaving may be exactly the right decision. It
              is MEOK making sure that if you leave, you leave with full information, not in a moment of
              crisis that costs you your legal options, your settlement, or your financial security.
            </p>

            {/* Sycophancy callout */}
            <div
              style={{
                background: cardBg,
                border: `1px solid ${border}`,
                borderRadius: "14px",
                padding: "1.75rem 2rem",
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.5rem",
                  fontWeight: 700,
                  color: gold,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                }}
              >
                Honest Support, Not Comfortable Agreement
              </p>
              <p style={{ margin: 0, lineHeight: 1.8, color: text, fontSize: "0.975rem" }}>
                MEOK&apos;s sycophancy detection layer monitors whether responses are being shaped by what
                you seem to want to hear rather than what is genuinely useful. In high-stakes moments
                &mdash; resignation decisions, formal complaints, tribunal considerations &mdash; this is
                most important. You deserve an AI that respects you enough to ask the difficult question,
                not one that tells you what feels good at midnight.
              </p>
            </div>
          </section>

          {/* ── Section 9: How MEOK helps practically ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              What can MEOK actually do for someone being bullied at work?
            </h2>
            <p style={{ lineHeight: 1.8, color: muted, margin: "0 0 1.5rem" }}>
              Concretely, and without overstating what AI can do:
            </p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
              {[
                {
                  title: "Build a private, timestamped incident log",
                  detail:
                    "Describe what happened immediately after it occurs. Pioneer will help you structure it: date, time, location, verbatim quotes, witnesses, impact. This log lives in Sovereign Memory, encrypted and invisible to your employer.",
                },
                {
                  title: "Identify patterns across incidents",
                  detail:
                    "MEOK remembers every conversation. Over weeks and months, it can surface patterns: Is the behaviour cyclical? Does it cluster around certain triggers or projects? Is it escalating? Pattern recognition is powerful evidence in a formal complaint.",
                },
                {
                  title: "Prepare for HR meetings",
                  detail:
                    "Rehearse what you want to say. Think through what HR is likely to ask. Anticipate the deflections. Decide in advance what outcome you are seeking and what you will do if the meeting produces nothing. Run through it as many times as you need, in private, with no time pressure.",
                },
                {
                  title: "Process the emotional damage",
                  detail:
                    "The Healer archetype creates a space designed for being heard. Not advice, not reframing, not silver linings. A place to put the anger, the confusion, the exhaustion, and the self-doubt that this situation generates in people who are entirely reasonable to feel all of it.",
                },
                {
                  title: "Understand your options clearly",
                  detail:
                    "MEOK can explain how formal grievances work, what ACAS does, when constructive dismissal applies, and what questions to ask an employment solicitor. It will be honest about the limits of what AI can tell you and direct you to the right human resources.",
                },
                {
                  title: "Protect your mental health across the duration",
                  detail:
                    "Formal complaints take months. Legal processes take longer. The gap between deciding to act and resolution is where people break. Daily check-ins, decompression conversations, and the accumulating evidence that you are being heard all matter across that timeline.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    background: cardBg,
                    border: `1px solid ${border}`,
                    borderRadius: "12px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "6px",
                      borderRadius: "3px",
                      background: gold,
                      alignSelf: "stretch" as const,
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: text, marginBottom: "0.35rem" }}>
                      {item.title}
                    </div>
                    <div style={{ color: muted, fontSize: "0.9rem", lineHeight: 1.7 }}>
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 800,
                color: text,
                margin: "0 0 1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Frequently asked questions
            </h2>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
              {[
                {
                  q: "Can AI help with workplace bullying?",
                  a: "Yes \u2014 within honest limits. AI cannot report your bully or compel HR to act. But it can provide a completely private space to process what is happening, build a timestamped incident log, prepare for difficult conversations, identify patterns of gaslighting, and support your mental health through a situation that is specifically designed to make you doubt yourself.",
                },
                {
                  q: "Will my employer be able to see what I tell MEOK?",
                  a: "No. MEOK has no relationship with your employer. Your conversations are encrypted with AES-256, stored in Sovereign Memory that belongs entirely to you, never shared with any third party, and never used to train AI models. Unlike employer-provided EAPs, MEOK is entirely independent of your organisation.",
                },
                {
                  q: "What is gaslighting at work?",
                  a: "Workplace gaslighting is when a manager or colleague causes you to doubt your own memory or perception \u2014 using phrases like \u201cthat never happened,\u201d \u201cyou\u2019re being oversensitive,\u201d or \u201ceveryone else is fine with it.\u201d Real-time documentation is the most effective defence: a contemporaneous record cannot be gaslit.",
                },
                {
                  q: "What are my legal rights if I am being bullied at work in the UK?",
                  a: "UK employees have the right to raise a formal grievance under the Employment Rights Act 1996. Where bullying is linked to a protected characteristic (race, sex, disability, age, religion, sexual orientation), it may constitute unlawful harassment under the Equality Act 2010. ACAS provides free conciliation. If conditions become intolerable and you resign, you may have grounds for constructive dismissal. Consult a solicitor before taking formal steps.",
                },
                {
                  q: "What is constructive dismissal?",
                  a: "Constructive dismissal is when an employer\u2019s conduct is so serious that you have no reasonable alternative but to resign, and the law treats that resignation as a dismissal. Sustained bullying that the employer fails to address after a formal grievance may meet this threshold. You usually need two years\u2019 service and must have raised a grievance first. A strong evidence log is essential to any claim.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: cardBg,
                    border: `1px solid ${border}`,
                    borderRadius: "12px",
                    padding: "1.375rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 0.5rem",
                      fontWeight: 700,
                      color: text,
                      fontSize: "1rem",
                    }}
                  >
                    {item.q}
                  </p>
                  <p style={{ margin: 0, color: muted, lineHeight: 1.75, fontSize: "0.925rem" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section
            style={{
              background: warnBg,
              border: `1px solid rgba(201,168,76,0.4)`,
              borderRadius: "16px",
              padding: "2.5rem 2rem",
              textAlign: "center" as const,
            }}
          >
            <p
              style={{
                margin: "0 0 0.75rem",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: gold,
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: 800,
                color: text,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
              }}
            >
              You deserve somewhere private to process this
            </h2>
            <p
              style={{
                color: muted,
                lineHeight: 1.8,
                margin: "0 auto 1.75rem",
                maxWidth: "520px",
                fontSize: "0.975rem",
              }}
            >
              MEOK is a sovereign AI that belongs only to you. Your employer will never see what you say.
              Your data will never be shared or used for training. Start with the free Explorer tier &mdash;
              50 messages per day, no credit card required. Build your incident log. Process what is
              happening. Plan your next move.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: gold,
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.875rem 2.25rem",
                borderRadius: "999px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Start for Free &rarr;
            </Link>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              No credit card. No employer access. Your data, your sovereign memory.
            </p>
          </section>

        </article>
      </div>
    </>
  );
}
