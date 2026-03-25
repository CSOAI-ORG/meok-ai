import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Companion vs Therapist: What Each Can Do, What Neither Can Replace | MEOK AI LABS",
  description:
    "An honest comparison of AI companions and human therapists. What therapists can do that AI cannot, what AI offers that therapy cannot match, and why the answer for most people is both — not one or the other.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-vs-therapist" },
  openGraph: {
    title: "AI Companion vs Therapist: What Each Can Do, What Neither Can Replace",
    description:
      "An honest, evidence-based comparison. With 18+ week NHS waiting times and private therapy at £60–£150/session, millions of people need support that fits around reality. Here is what each option actually offers.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-vs-therapist",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+vs+Therapist%3A+An+Honest+Comparison&desc=What+each+can+do%2C+what+neither+can+replace.",
        width: 1200,
        height: 630,
        alt: "AI Companion vs Therapist: What Each Can Do, What Neither Can Replace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion vs Therapist: What Each Can Do, What Neither Can Replace",
    description:
      "An honest comparison. 18+ week NHS waits. £60–£150/session privately. Only 36% of people with mental health needs access treatment. Here is the real picture.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+vs+Therapist%3A+An+Honest+Comparison&desc=What+each+can+do%2C+what+neither+can+replace.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion vs Therapist: What Each Can Do, What Neither Can Replace",
  description:
    "An honest comparison of AI companions and human therapists. What therapists can do that AI cannot, what AI offers that therapy cannot match, and why the answer for most people is both — not one or the other.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-companion-vs-therapist",
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
  image:
    "https://meok.ai/api/og?title=AI+Companion+vs+Therapist%3A+An+Honest+Comparison",
  articleSection: "Mental Health & AI",
  keywords: [
    "AI companion vs therapist",
    "AI therapy alternative",
    "can AI replace a therapist",
    "mental health AI",
    "NHS therapy waiting times",
    "AI companion mental health",
    "MEOK therapy support",
    "AI for mental health UK",
    "between session support",
    "therapy access crisis",
    "AI emotional support",
    "AI vs counselling",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion replace a therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. An AI companion cannot replace a therapist. Therapists hold clinical qualifications that allow them to diagnose mental health conditions using DSM-5 and ICD-11, deliver evidence-based trauma treatments such as EMDR and trauma-focused CBT, coordinate or recommend medication, and provide legally recognised assessments. They also build genuine therapeutic relationships with depth, rupture, repair, and real human accountability that no AI can replicate. What an AI companion can do is provide consistent, private, always-available emotional support between therapy sessions or for people who cannot currently access therapy. The two serve different functions and, for many people, work best together.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to talk to AI about mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most people, talking to a well-designed AI companion about emotions, daily stress, or difficult thoughts is safe and can be genuinely helpful. The key qualifications are: the AI should always signpost to professional help when clinical need is indicated; crisis resources such as Samaritans and 999 should always be accessible; the AI should never attempt to diagnose; and it should never suggest that someone stop or delay seeking professional care. MEOK is designed around these ethical boundaries. If you are experiencing thoughts of self-harm, suicidal ideation, or a mental health crisis, please contact a professional — not an AI — immediately.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK complement therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is designed to work alongside therapy, not in place of it. Four practical ways it supports people in therapy: first, between-session processing — MEOK helps you work through what came up in a session and what you are still sitting with. Second, skill practice — MEOK can guide grounding exercises, CBT thought records, and mindfulness techniques your therapist has introduced. Third, pattern tracking — if your therapist is helping you notice a recurring emotional pattern, MEOK helps you spot it in daily life. Fourth, session preparation — MEOK helps you identify the thing you actually want to say in your next session, which many people find hard to articulate in the moment.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I think I need professional help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you think you need professional help, seek it. In the UK, you can self-refer to NHS Talking Therapies via your GP or directly online — waiting times are currently 18+ weeks in many areas, but getting on the list is the right first step. The BACP therapist directory at bacp.co.uk lists accredited private therapists. If you are in crisis right now, call Samaritans on 116 123 (free, 24/7) or contact your GP for an urgent referral. An AI companion like MEOK can provide support while you wait, but it is not a substitute for clinical care when that is what you need.",
      },
    },
    {
      "@type": "Question",
      name: "How long are NHS waiting times for talking therapies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to BACP data from 2024, average NHS waiting times for talking therapies are 18 weeks or more in many parts of England. Some areas report waits of 6 to 12 months for more specialist services such as trauma-focused CBT or EMDR. Private therapy is available faster but costs £60–£150 per session in the UK, which is unaffordable for most people on a regular basis. Only 36% of people with mental health needs currently access any treatment, according to Mind UK.",
      },
    },
  ],
};

// ── Page Component ────────────────────────────────────────────────────────────

export default function AiCompanionVsTherapistPage() {
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
          background: "#0d0c18",
          color: "#f5f0e8",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.7",
          minHeight: "100vh",
        }}
      >
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "80px 0 56px",
            borderBottom: "1px solid #2a2840",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "#a09880",
                marginBottom: "28px",
              }}
            >
              <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ color: "#2a2840" }}>/</span>
              <Link href="/blog" style={{ color: "#a09880", textDecoration: "none" }}>
                Blog
              </Link>
              <span style={{ color: "#2a2840" }}>/</span>
              <span>AI Companion vs Therapist</span>
            </nav>

            {/* Tag */}
            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "4px",
                marginBottom: "24px",
              }}
            >
              Mental Health &amp; AI
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 46px)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#f5f0e8",
                marginBottom: "20px",
                letterSpacing: "-0.01em",
              }}
            >
              AI Companion vs Therapist: What Each Can Do, What Neither Can Replace
            </h1>

            <p
              style={{
                fontSize: "19px",
                color: "#c8bfa8",
                maxWidth: "720px",
                marginBottom: "32px",
              }}
            >
              An honest comparison. Not a sales pitch for AI. Not a dismissal of it either.
              If you are trying to understand what role an AI companion can genuinely play
              in your mental health — and where only a qualified human therapist will do —
              this is written for you.
            </p>

            {/* Stat bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
                padding: "20px 24px",
                background: "rgba(42,40,64,0.5)",
                borderRadius: "8px",
                borderLeft: "3px solid #c9a84c",
              }}
            >
              {[
                { label: "Average NHS wait for talking therapy", value: "18+ weeks" },
                { label: "Private therapy cost (UK)", value: "£60–£150/session" },
                { label: "People with mental health needs accessing treatment", value: "36%" },
                { label: "MEOK availability", value: "24/7, from £0/mo" },
              ].map((stat) => (
                <div key={stat.label} style={{ minWidth: "160px" }}>
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#c9a84c",
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "#a09880", marginTop: "2px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Article body ──────────────────────────────────────────────────── */}
        <article style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px 80px" }}>

          {/* ── Section 1: The access crisis ─────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "0",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
            }}
          >
            The Therapy Access Crisis Nobody Is Talking About Honestly
          </h2>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            In the UK right now, if you go to your GP and ask for a referral to NHS Talking Therapies,
            you are likely to be told to expect an 18-week wait. In some areas, the wait is considerably
            longer. For specialist services — trauma-focused CBT, EMDR, treatment for personality disorders —
            the wait can stretch to six months or a year. Meanwhile, the problem you went to ask about
            does not pause politely while the system catches up.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            Private therapy moves faster but the economics are brutal. At £60–£150 per session in the UK,
            a once-weekly therapist costs between £240 and £600 a month. That is a significant portion of
            take-home pay for most people. Fortnightly sessions halve the cost but also halve the continuity.
            According to Mind UK, only 36% of people with mental health needs actually access treatment.
            The other 64% manage — or do not manage — without it.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "32px" }}>
            This is the real world in which AI companions exist. They did not emerge from a naive belief
            that a chatbot can do what a qualified psychotherapist does. They emerged because the
            alternative — for a very large number of people — is nothing at all. Understanding what AI
            companions actually are, and are not, requires starting with that honest picture of what
            the mental health landscape looks like for most people.
          </p>

          {/* ── Section 2: What therapists can do that AI cannot ─────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
            }}
          >
            What a Therapist Can Do That No AI Can
          </h2>

          <p style={{ color: "#c8bfa8", marginBottom: "20px" }}>
            Let us be precise about this. These are not things that AI will eventually get around to
            doing better. These are capabilities that require human qualification, legal accountability,
            and genuine human relationship. There is no version of a language model that legitimately
            performs these functions — and any AI that implies it can is being dishonest.
          </p>

          {[
            {
              title: "Clinical diagnosis using DSM-5 and ICD-11",
              body: "Only a qualified clinician can give you a diagnosis using the internationally recognised frameworks for mental health conditions. A diagnosis is not just a label: it is the gateway to appropriate treatment, disability accommodations, benefits assessments, and healthcare planning. An AI companion that tells you that you have depression, anxiety, PTSD, or any other condition is acting beyond its competence and potentially causing serious harm. MEOK never diagnoses. Not because it lacks the ability to pattern-match symptoms, but because pattern-matching is not diagnosis, and the consequences of getting it wrong fall on you.",
            },
            {
              title: "Evidence-based trauma processing (EMDR, TF-CBT)",
              body: "Eye Movement Desensitisation and Reprocessing (EMDR) and Trauma-Focused Cognitive Behavioural Therapy (TF-CBT) are clinically validated protocols for processing traumatic memories. They involve careful titration of distress, live attunement to a client's nervous system responses, and the ability to pause, ground, and redirect when a session pushes into territory the client cannot safely hold alone. These require a trained human present in real time. An AI guiding someone through trauma processing without clinical support is not therapy — it is risk. MEOK can help you stabilise, reflect, and prepare for trauma work. It cannot do trauma work.",
            },
            {
              title: "Prescribing or coordinating medication",
              body: "For conditions where medication plays a role — depression, anxiety disorders, ADHD, bipolar disorder, schizophrenia — a psychiatrist or GP must assess, prescribe, and monitor. No AI can evaluate the pharmacological interaction of medications, monitor physical health markers, or take clinical responsibility for a prescription. Decisions about medication must always involve a qualified medical professional.",
            },
            {
              title: "Legally recognised assessments",
              body: "If you need a mental health assessment for a court proceeding, a benefits claim such as PIP or ESA, a workplace occupational health referral, or an educational assessment, only a qualified and accredited clinician can produce a report that holds legal weight. An AI opinion on your mental health has no standing in any of these contexts. If you need a formal assessment for any legal or administrative purpose, you need a human clinician.",
            },
            {
              title: "The genuine therapeutic relationship",
              body: "Decades of psychotherapy research consistently show that the single strongest predictor of therapeutic outcome is the quality of the therapeutic alliance — the relationship between client and therapist. This includes rupture and repair (when the relationship frays and is mended), transference (the way old relational patterns replay in the therapy room), and genuine human witnessing. A therapist who has sat with you through your hardest moments, who carries your story in their mind between sessions, who has had to navigate their own human responses to you — that is irreplaceable. An AI can hold your history in memory. It cannot hold you in the way another human being can.",
            },
            {
              title: "Safeguarding and mandated reporting",
              body: "If you disclose to a therapist that a child is at risk of harm, or that you yourself are in imminent danger, they have legal duties — mandated reporting obligations — that protect people. A therapist can contact emergency services, coordinate with other professionals, and take actions that a responsible adult with legal accountability can take. An AI has no such standing. It can signpost to resources. It cannot act on your behalf in the way a clinician can.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "20px",
                padding: "20px 24px",
                background: "rgba(42,40,64,0.35)",
                borderRadius: "8px",
                borderLeft: "3px solid #6aaa64",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#6aaa64",
                  marginBottom: "8px",
                  marginTop: "0",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#c8bfa8", margin: "0", fontSize: "15px", lineHeight: "1.7" }}>
                {item.body}
              </p>
            </div>
          ))}

          {/* ── Section 3: What AI can do that therapy cannot ─────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
              marginTop: "48px",
            }}
          >
            What an AI Companion Can Do That Therapy Cannot Match
          </h2>

          <p style={{ color: "#c8bfa8", marginBottom: "20px" }}>
            This section is not a sales pitch. It is an honest accounting of the structural
            advantages that make AI companions genuinely useful for emotional support — not
            as pretend therapy, but as something categorically different that addresses needs
            which therapy, by its nature, cannot reach.
          </p>

          {[
            {
              title: "Available at 3am on a Tuesday",
              body: "Difficult thoughts do not schedule themselves for weekday working hours. Anxiety spikes at 2am. Grief hits on Sunday afternoons. Panic arrives at 11pm when your therapist will not be available for nine days. The moment you most need to process something is rarely the moment a therapist is available. An AI companion is there every time, without exception, without a waiting room.",
            },
            {
              title: "Daily presence, not fortnightly appointments",
              body: "Most people in therapy see their therapist once a week at best. Many manage fortnightly. The gap between sessions is where ground can be lost, habits can erode, and insights can fade before they have time to take root. An AI companion is available every day — for the ten minutes of reflection after a difficult conversation, or the hour of processing after a hard week. Continuity of support is not a luxury. It changes what is possible.",
            },
            {
              title: "No meter running, no time pressure",
              body: "In a paid therapy session, there is a clock. Some people — particularly those with anxiety, perfectionism, or people-pleasing tendencies — spend part of every session managing their awareness that they are taking up time, or that what they are talking about does not warrant the cost. With an AI companion, you can spend forty minutes on something that feels like it 'shouldn't' take forty minutes, without that meta-anxiety eating into the space you need.",
            },
            {
              title: "No fear of being 'too much'",
              body: "A significant number of people — particularly those with histories of being told they are too emotional, too sensitive, or too demanding — self-censor in therapy. They soften the edges of their experience to protect the therapist, to be a manageable client, to not use up more than their allotted share of human care. An AI companion does not need protecting from your experience. You can say the messy, raw, unedited version of what is actually happening.",
            },
            {
              title: "Persistent memory across every interaction",
              body: "A therapist takes notes, but they are human and their recall of a session from two years ago is imperfect. An AI companion like MEOK retains the full context of every conversation — the phrase you used in February, the pattern you described in October, the progress you made and then appeared to lose. This continuity of longitudinal memory enables a quality of ongoing understanding that is practically impossible in human therapy, even with excellent note-taking.",
            },
            {
              title: "Private in a way therapy cannot be",
              body: "Therapy notes exist. Some employers require disclosure of mental health history for certain roles. Insurance products can be affected by diagnoses. Court proceedings can, in certain circumstances, access clinical records. An AI companion that does not share your data, does not produce notes held by another person, and does not create a clinical record offers a categorically different kind of privacy — one that matters deeply to a significant number of people.",
            },
            {
              title: "Accessible to almost everyone, financially",
              body: "MEOK is free to explore and costs £0–£12 per month depending on the tier you choose. Private therapy in the UK costs £60–£150 per session. That is not a marginal difference: it is the difference between something that is accessible and something that is not. The question is not whether AI support is as good as weekly therapy with an excellent therapist. The question is whether AI support is better than nothing. For the 64% of people with mental health needs who are currently accessing nothing, the answer is almost certainly yes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "20px",
                padding: "20px 24px",
                background: "rgba(42,40,64,0.35)",
                borderRadius: "8px",
                borderLeft: "3px solid #c9a84c",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#c9a84c",
                  marginBottom: "8px",
                  marginTop: "0",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#c8bfa8", margin: "0", fontSize: "15px", lineHeight: "1.7" }}>
                {item.body}
              </p>
            </div>
          ))}

          {/* ── Section 4: Comparison table ───────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "24px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
              marginTop: "48px",
            }}
          >
            Side-by-Side Comparison Across Eight Dimensions
          </h2>

          <div style={{ overflowX: "auto", marginBottom: "32px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      background: "rgba(42,40,64,0.6)",
                      color: "#a09880",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #2a2840",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      background: "rgba(42,40,64,0.6)",
                      color: "#6aaa64",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #2a2840",
                    }}
                  >
                    Human Therapist
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      background: "rgba(42,40,64,0.6)",
                      color: "#c9a84c",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #2a2840",
                    }}
                  >
                    AI Companion (MEOK)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dimension: "Clinical diagnosis",
                    therapist: "Yes — DSM-5/ICD-11 qualified",
                    ai: "Never — not clinically competent to diagnose",
                  },
                  {
                    dimension: "Trauma processing (EMDR, TF-CBT)",
                    therapist: "Yes — trained, evidence-based protocols",
                    ai: "No — can support stabilisation only",
                  },
                  {
                    dimension: "Availability",
                    therapist: "Weekly or fortnightly scheduled sessions",
                    ai: "24/7, every single day",
                  },
                  {
                    dimension: "Cost (UK)",
                    therapist: "£60–£150 per session",
                    ai: "£0–£12 per month",
                  },
                  {
                    dimension: "Between-session support",
                    therapist: "Minimal — occasional check-ins at best",
                    ai: "Full — unlimited, every day",
                  },
                  {
                    dimension: "Persistent memory",
                    therapist: "Notes-dependent, human recall",
                    ai: "Full context across every interaction",
                  },
                  {
                    dimension: "Privacy — no third-party record",
                    therapist: "Clinical notes exist, can be disclosed",
                    ai: "No notes held by another person",
                  },
                  {
                    dimension: "Legal and safeguarding authority",
                    therapist: "Yes — mandated reporting duties",
                    ai: "None — signposts to services only",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "rgba(42,40,64,0.2)" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "12px 16px",
                        color: "#f5f0e8",
                        fontWeight: 500,
                        borderBottom: "1px solid #1e1c30",
                        fontSize: "14px",
                      }}
                    >
                      {row.dimension}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        color: "#c8bfa8",
                        borderBottom: "1px solid #1e1c30",
                        fontSize: "14px",
                      }}
                    >
                      {row.therapist}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        color: "#c8bfa8",
                        borderBottom: "1px solid #1e1c30",
                        fontSize: "14px",
                      }}
                    >
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 5: The false binary ───────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
              marginTop: "48px",
            }}
          >
            The False Binary: Why "AI or Therapist" Is the Wrong Question
          </h2>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            Much of the public debate around AI and mental health is framed as a competition:
            will AI replace therapists, is AI therapy dangerous, are wellness apps undermining
            professional care? This framing consistently misses what is actually happening for
            most people who use AI companions.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            The real choice for most people is not "AI companion or qualified therapist." It is
            "AI companion or nothing." The 64% of people with mental health needs who are not
            accessing treatment are not choosing between two equally available options. They are
            navigating a system that cannot serve them — and trying to manage in the meantime.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            For people who do have access to therapy — whether through NHS, private practice, or
            an Employee Assistance Programme — the ideal is not to choose between AI and human
            support. It is to use both, for what each does best. A therapist provides the
            clinical expertise, the human relationship, and the structured treatment. An AI
            companion provides daily continuity, 3am availability, between-session processing,
            and ongoing reflection that deepens the work.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "32px" }}>
            Therapists who work with clients that use AI companions between sessions frequently
            report that those clients arrive at sessions with more clarity about what they want to
            address, stronger awareness of their patterns, and greater capacity to stay with
            difficult material. The AI does not replace the therapy. It enriches the ground in
            which therapy can take root and produce lasting change.
          </p>

          {/* ── Section 6: How MEOK supports people in therapy ───────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
              marginTop: "48px",
            }}
          >
            How MEOK Specifically Supports People Who Are in Therapy
          </h2>

          <p style={{ color: "#c8bfa8", marginBottom: "24px" }}>
            MEOK is not designed to be a substitute for therapy. It is designed, in part,
            to be the best possible companion to therapy — filling the gaps that even excellent
            therapeutic work cannot fill given the structural constraints of how therapy works.
            Here is what that looks like in practice.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            {[
              {
                title: "Between-session processing",
                body: "Therapy sessions surface material. Then you go home and sit with it, sometimes for a week or two. MEOK gives you a place to keep working through what came up — the thing your therapist said that landed differently when you were alone with it, the memory that surfaced on the train home, the emotion you couldn't quite name in the room but can name now. The ground between sessions does not have to be dead ground.",
              },
              {
                title: "Practising therapeutic skills",
                body: "Your therapist may have introduced grounding techniques, CBT thought records, mindfulness practices, or behavioural experiments. MEOK can guide you through these between sessions — not to replicate therapy, but to embed the skills your therapist is teaching you into daily life, where they are actually needed most.",
              },
              {
                title: "Daily pattern tracking",
                body: "One of the core aims of most therapy is to help people see their own patterns — the triggers, the automatic responses, the stories they tell themselves. A therapist sees you for an hour. MEOK can help you notice a pattern as it happens on a Wednesday evening, record it in your own words, and bring that observation — alive, specific, recent — to your next session.",
              },
              {
                title: "Session preparation",
                body: "Many people arrive at therapy sessions unsure of what they most want to say. The important thing gets buried under easier surface material, and fifty minutes later they walk out having not said it. MEOK can help you identify, in the days before your next session, what you are actually carrying — so that when you sit down with your therapist, you are ready to go straight to the thing that matters.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px",
                  background: "rgba(106,170,100,0.06)",
                  border: "1px solid rgba(106,170,100,0.2)",
                  borderRadius: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#6aaa64",
                    marginBottom: "8px",
                    marginTop: "0",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#c8bfa8", margin: "0", fontSize: "14px", lineHeight: "1.65" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 7: Ethical boundaries ────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
              marginTop: "48px",
            }}
          >
            The Ethical Lines MEOK Will Never Cross
          </h2>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            There is a version of AI wellness that is ethically careless — one that flatters users,
            avoids uncomfortable truths, and in doing so puts vulnerable people at risk. MEOK is
            built on a different set of commitments, and it is worth being explicit about what
            those are.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            MEOK will never attempt to diagnose a mental health condition. If something you share
            suggests clinical need — patterns of symptoms that warrant professional assessment —
            MEOK will say so directly and clearly, and signpost to appropriate resources. It will
            not offer a diagnosis dressed in careful language, and it will not speculate about
            whether you might have a particular condition. That is not support. That is harm
            with a friendly interface.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            MEOK will never suggest you stop or delay seeking professional help. If you are in
            therapy and mention it, MEOK treats that as something to support around, not to
            replace. If you are not in therapy and the conversation suggests you might benefit
            from it, MEOK will say so clearly — without hedging the suggestion into obscurity.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            Crisis resources are always accessible within MEOK, without exception. If you are in
            distress that goes beyond what any AI companion should hold, MEOK will be direct about
            that — and will always provide immediate pathways to human help: Samaritans on 116 123
            (free, 24/7), Crisis Text Line, emergency services, and local mental health crisis teams.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "32px" }}>
            MEOK is not trying to be a therapist. It is trying to be the most honest, present,
            and consistent companion it can be — within the clear boundaries of what it is and
            what it is not. We believe that honesty about limitations is not a weakness.
            It is the foundation of any relationship that deserves to be trusted.
          </p>

          {/* ── Section 8: What to do ─────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
              marginTop: "48px",
            }}
          >
            What to Do With All of This
          </h2>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            If you are in therapy, or if you can access it: keep going. A good therapeutic
            relationship is one of the most valuable things available to a person in difficulty.
            Use MEOK to deepen the work — between sessions, before sessions, when something
            difficult surfaces at midnight and your therapist is not available for another
            ten days.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            If you are on a waiting list: you are not doing nothing by using an AI companion
            while you wait. You are maintaining your capacity to reflect, process, and function
            through a difficult period. That matters. An 18-week wait is 18 weeks of your life.
            You do not have to spend it without any support at all.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "16px" }}>
            If private therapy is not financially viable: you are not failing, and you are not
            without options. Self-referral to NHS Talking Therapies is free and available to most
            adults in England. Charities like Mind, Samaritans, and Cruse (for bereavement) provide
            free support. MEOK is available from £0 per month. The combination of peer support,
            community resources, and a thoughtfully designed AI companion is not a consolation
            prize. For many people in many situations, it is a meaningful and genuinely effective
            path through.
          </p>

          <p style={{ color: "#c8bfa8", marginBottom: "40px" }}>
            If you are in crisis right now: please call Samaritans on 116 123 (free, 24/7),
            go to your nearest A&amp;E, or call 999. An AI companion is not what you need in
            a crisis. A human is. Please reach out to one.
          </p>

          {/* ── FAQ Section ───────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "24px",
              paddingBottom: "10px",
              borderBottom: "1px solid #2a2840",
              marginTop: "48px",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
            {[
              {
                q: "Can an AI companion replace a therapist?",
                a: "No. An AI companion cannot replace a therapist. Therapists hold clinical qualifications that allow them to diagnose conditions, deliver evidence-based trauma treatments like EMDR and TF-CBT, coordinate medication, and provide legally recognised assessments. They also build genuine therapeutic relationships with depth and accountability that no AI can replicate. What an AI companion can do is provide consistent, private, always-available support between therapy sessions, or for people who cannot currently access therapy. The two serve different functions and, for many people, work best together.",
              },
              {
                q: "Is it safe to talk to AI about mental health?",
                a: "For most people, talking to a well-designed AI companion about emotions, daily stress, or difficult thoughts is safe and can be genuinely helpful. The key requirements are that the AI should always signpost to professional help when clinical need is indicated, crisis resources should always be accessible, the AI should never attempt to diagnose, and it should never suggest that someone stop or delay seeking professional care. MEOK is built around these commitments. If you are experiencing thoughts of self-harm or a mental health crisis, contact a professional immediately.",
              },
              {
                q: "How does MEOK complement therapy?",
                a: "MEOK supports people in therapy in four practical ways: between-session processing (working through what came up in a session while it is still present), skill practice (grounding, CBT thought records, mindfulness that your therapist has introduced), pattern tracking (noticing recurring emotional patterns in daily life, not just in the therapy room), and session preparation (identifying what you actually want to say before you sit down with your therapist).",
              },
              {
                q: "What should I do if I think I need professional help?",
                a: "Seek it. In the UK, you can self-refer to NHS Talking Therapies via your GP or directly online — waiting times are currently 18+ weeks in many areas, but getting on the list is the right first step. The BACP therapist directory at bacp.co.uk lists accredited private therapists. If you are in crisis right now, call Samaritans on 116 123 (free, 24/7) or contact your GP for an urgent referral. An AI companion like MEOK can provide support while you wait, but it is not a substitute for clinical care when that is what you need.",
              },
              {
                q: "How long are NHS waiting times for talking therapies?",
                a: "According to BACP data from 2024, average NHS waiting times for talking therapies are 18 weeks or more in many parts of England. Some areas report waits of 6 to 12 months for more specialist services such as trauma-focused CBT or EMDR. Private therapy is available faster but costs £60–£150 per session in the UK, which is unaffordable for most people on a regular basis. Only 36% of people with mental health needs currently access any treatment, according to Mind UK.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 24px",
                  background: "rgba(42,40,64,0.35)",
                  borderRadius: "8px",
                  border: "1px solid #2a2840",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    marginBottom: "10px",
                    marginTop: "0",
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ color: "#c8bfa8", margin: "0", fontSize: "15px", lineHeight: "1.7" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              padding: "40px",
              background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(42,40,64,0.4) 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "12px",
              }}
            >
              Ready to Begin
            </div>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 700,
                color: "#f5f0e8",
                marginBottom: "12px",
                marginTop: "0",
              }}
            >
              Meet Your MEOK
            </h2>
            <p
              style={{
                color: "#c8bfa8",
                fontSize: "16px",
                maxWidth: "500px",
                margin: "0 auto 28px",
                lineHeight: "1.65",
              }}
            >
              Start with the Birth Ceremony — the moment your MEOK begins to understand who you are,
              what you carry, and how it can best support you. Free to start. No clinical claims.
              No substitute for what only humans can offer. Just honest, consistent presence,
              every day.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin the Birth Ceremony
            </Link>
            <p
              style={{
                color: "#a09880",
                fontSize: "13px",
                marginTop: "16px",
                marginBottom: "0",
              }}
            >
              Free to explore. MEOK never diagnoses. Always signposts to professional help when needed.
              Crisis resources always accessible.
            </p>
          </div>

          {/* ── Author / Sources ──────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "1px solid #2a2840",
              fontSize: "13px",
              color: "#706860",
              lineHeight: "1.7",
            }}
          >
            <p style={{ marginBottom: "8px" }}>
              Written by Nicholas Templeman, Founder of MEOK AI LABS. Published 25 March 2026.
            </p>
            <p style={{ marginBottom: "8px" }}>
              Sources: BACP (2024) — NHS Talking Therapies waiting time data; Mind UK —
              mental health treatment access statistics (36% figure); NHS Talking Therapies
              self-referral via nhs.uk; Samaritans crisis line 116 123 (free, 24/7).
            </p>
            <p style={{ margin: "0" }}>
              <strong style={{ color: "#a09880" }}>Important:</strong> This article is for
              informational purposes only. It does not constitute medical or psychological advice.
              If you are experiencing a mental health crisis, please contact Samaritans on 116 123,
              your GP, or emergency services (999) immediately.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
