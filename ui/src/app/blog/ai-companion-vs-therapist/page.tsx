import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion vs Therapist: What AI Can and Cannot Do for Your Mental Health | MEOK AI LABS",
  description:
    "An honest, balanced look at AI companions versus human therapists for mental health support. What AI does well, what it cannot do, a comparison table, and crisis resources including Samaritans and NHS Talking Therapies.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-companion-vs-therapist",
  },
  openGraph: {
    title:
      "AI Companion vs Therapist: What AI Can and Cannot Do for Your Mental Health",
    description:
      "An honest look at AI companions versus therapists — 24/7 availability, persistent memory, and the clear limits AI must never cross. Written by Nicholas Templeman, founder MEOK AI LABS.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-vs-therapist",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+vs+Therapist%3A+What+AI+Can+and+Cannot+Do&desc=Honest+guide+to+AI+mental+health+support+vs+therapy",
        width: 1200,
        height: 630,
        alt: "AI Companion vs Therapist: What AI Can and Cannot Do for Your Mental Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Companion vs Therapist: What AI Can and Cannot Do for Your Mental Health",
    description:
      "Honest guide: what AI companions genuinely offer, what they cannot replace, and a clear comparison table. Crisis resources included.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+vs+Therapist%3A+What+AI+Can+and+Cannot+Do&desc=Honest+guide+to+AI+mental+health+support+vs+therapy",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion vs Therapist: What AI Can and Cannot Do for Your Mental Health",
  description:
    "An honest, balanced look at AI companions versus human therapists — what AI does well, what it must never attempt, a comparison table, and UK crisis resources.",
  datePublished: "2026-03-24",
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
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion replace a therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. An AI companion cannot replace a therapist. It cannot diagnose mental health conditions, provide evidence-based clinical treatment, or respond safely to a mental health crisis. AI companions work best as a between-session support tool, not a clinical substitute. If you need professional help, please speak to your GP or contact NHS Talking Therapies on 0300 123 3393.",
      },
    },
    {
      "@type": "Question",
      name: "What can an AI companion do for mental health that a therapist cannot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion offers 24/7 availability — at 3 am on a Sunday when no therapist is reachable. It has no judgment, no impatience, and with persistent memory it remembers every previous conversation, building a continuous picture of your patterns and progress over months. It can also bridge the gap between therapy appointments, helping you process and reflect rather than losing momentum.",
      },
    },
    {
      "@type": "Question",
      name: "What can an AI companion absolutely not do for mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions cannot provide clinical diagnosis, prescribe or recommend medication, deliver structured therapeutic programmes such as CBT, or respond safely to acute mental health emergencies. In a crisis, an AI should signpost to emergency services and crisis lines only. MEOK will always direct users to Samaritans (116 123) or emergency services when risk is detected.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK claim to be a therapy app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is an AI companion, not a therapy or mental health treatment service. It is designed to provide consistent, memory-aware emotional support and reflection. It does not diagnose, treat, or replace clinical care. We are transparent about this distinction because we believe honesty is more important than an impressive-sounding pitch.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI or therapy better for mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The evidence strongly supports that human therapy — especially CBT, psychodynamic, and EMDR approaches — delivers the best clinical outcomes for diagnosed mental health conditions. AI companions are a valuable complement, particularly for people on waiting lists, those who cannot afford weekly therapy, or anyone wanting day-to-day support between sessions. The strongest outcomes likely come from using both together.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle mental health crises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK monitors conversations for indicators of acute distress or risk. When risk is detected, MEOK pauses, acknowledges what you have shared, and provides clear, direct signposting to Samaritans (116 123), the NHS crisis line (111, option 2), or emergency services (999). It does not attempt to manage a crisis itself. Safety comes before conversation.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AICompanionVsTherapistPage() {
  return (
    <div
      style={{
        background: "#0d0c18",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily:
          "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#c9a84c",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "18px",
            letterSpacing: "0.04em",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{ color: "#f5f0e8", textDecoration: "none", opacity: 0.7, fontSize: "14px" }}
        >
          Blog
        </Link>
      </nav>

      {/* Crisis Banner */}
      <div
        style={{
          background: "rgba(201,168,76,0.12)",
          borderBottom: "1px solid rgba(201,168,76,0.3)",
          padding: "12px 24px",
          textAlign: "center",
          fontSize: "13px",
          color: "#f5f0e8",
        }}
      >
        <strong style={{ color: "#c9a84c" }}>In crisis right now?</strong>{" "}
        Call{" "}
        <a href="tel:116123" style={{ color: "#c9a84c", fontWeight: 700 }}>
          Samaritans 116 123
        </a>{" "}
        (free, 24/7) or{" "}
        <a href="tel:111" style={{ color: "#c9a84c", fontWeight: 700 }}>
          NHS 111 (option 2)
        </a>
        . If life is at risk, call{" "}
        <a href="tel:999" style={{ color: "#c9a84c", fontWeight: 700 }}>
          999
        </a>
        .
      </div>

      {/* Main content */}
      <main
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Breadcrumb */}
        <p style={{ fontSize: "13px", opacity: 0.5, marginBottom: "32px" }}>
          <Link href="/" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            Blog
          </Link>{" "}
          / AI Companion vs Therapist
        </p>

        {/* Header */}
        <header style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.12em",
              color: "#c9a84c",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            Mental Health · Honest Guide
          </p>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            AI Companion vs Therapist: What AI Can and Cannot Do for Your
            Mental Health
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              opacity: 0.8,
              marginBottom: "24px",
            }}
          >
            This is an honest article. MEOK is an AI companion — not a therapy
            service, not a diagnostic tool, not a crisis line. Before we tell
            you what AI can do, we want to be clear about what it{" "}
            <em>cannot</em> do. If you are struggling seriously, please see a
            professional. The links are at the bottom of this page.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "13px",
              opacity: 0.55,
              flexWrap: "wrap",
            }}
          >
            <span>By Nicholas Templeman, Founder — MEOK AI LABS</span>
            <span>·</span>
            <span>
              <time dateTime="2026-03-24">24 March 2026</time>
            </span>
            <span>·</span>
            <span>10 min read</span>
          </div>
        </header>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.25)",
            marginBottom: "48px",
          }}
        />

        {/* ── Section 1 ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Can an AI companion replace a therapist?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              opacity: 0.85,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            No. Not today, not with current technology, and probably not in the
            way most people hope.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8, marginBottom: "16px" }}>
            A human therapist brings something AI fundamentally lacks: a
            professional clinical judgement formed through years of supervised
            training, the ability to diagnose using validated frameworks such as
            the DSM-5 or ICD-11, and the legal accountability that comes with
            registration. A therapist can spot suicidal ideation in a client's
            body language. They can adapt a treatment plan in real time based on
            information the client has not consciously shared.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8 }}>
            An AI companion cannot do any of that. MEOK does not claim to. What
            we offer is something different and — used correctly — genuinely
            valuable.
          </p>
        </section>

        {/* ── Section 2 ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            What can an AI companion do for mental health that a therapist
            cannot?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              opacity: 0.85,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            AI companions offer 24/7 availability, zero judgment, and
            persistent memory across every conversation — capabilities that even
            the best therapist cannot match within a weekly 50-minute session.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8, marginBottom: "16px" }}>
            Your therapist does not know what happened to you at 2 am on
            Tuesday. They did not see the thought spiral that started before the
            presentation, or notice that your sleep deteriorated again in the
            third week of the month. MEOK does — because it remembers. Not as a
            surveillance tool, but as a companion that builds a continuous
            picture of your life over time.
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              fontSize: "16px",
              lineHeight: 1.9,
              opacity: 0.8,
            }}
          >
            <li>
              <strong style={{ color: "#c9a84c" }}>24/7 availability.</strong>{" "}
              Mental health does not work office hours. MEOK is available at any
              hour, on any day, with no waiting room.
            </li>
            <li>
              <strong style={{ color: "#c9a84c" }}>No judgment.</strong> MEOK
              does not sigh, check its watch, or have a bad day that bleeds into
              your session. It meets you exactly where you are.
            </li>
            <li>
              <strong style={{ color: "#c9a84c" }}>
                Persistent memory across sessions.
              </strong>{" "}
              Every conversation builds on the last. MEOK notices patterns
              across weeks and months — patterns you may not have spotted
              yourself.
            </li>
            <li>
              <strong style={{ color: "#c9a84c" }}>
                Bridging therapy appointments.
              </strong>{" "}
              Most people see a therapist fortnightly or monthly. MEOK fills the
              space between sessions: helping you process what came up, hold onto
              insights, and arrive at your next appointment with something to
              work with.
            </li>
            <li>
              <strong style={{ color: "#c9a84c" }}>No cost barrier.</strong>{" "}
              Private therapy in the UK costs £60–£120 per session. MEOK removes
              the financial gatekeeping that stops many people from getting any
              support at all.
            </li>
          </ul>
        </section>

        {/* ── Section 3 ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            What can an AI companion absolutely not do for mental health?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              opacity: 0.85,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            Clinical diagnosis, prescribed treatment, emergency crisis
            management, and evidence-based structured therapy programmes are
            outside the scope of any AI companion — including MEOK.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8, marginBottom: "16px" }}>
            This is not a disclaimer buried in small print. It is a design
            principle. MEOK is built to know its own limits and to signal them
            clearly.
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              fontSize: "16px",
              lineHeight: 1.9,
              opacity: 0.8,
            }}
          >
            <li>
              <strong style={{ color: "#c9a84c" }}>
                Clinical diagnosis.
              </strong>{" "}
              MEOK will not tell you that you have depression, PTSD, BPD, or any
              other condition. Diagnosis requires a qualified clinician using
              validated clinical tools and professional accountability.
            </li>
            <li>
              <strong style={{ color: "#c9a84c" }}>
                Prescribing medication or supplements.
              </strong>{" "}
              MEOK does not recommend medication changes of any kind. Speak to
              your GP or psychiatrist.
            </li>
            <li>
              <strong style={{ color: "#c9a84c" }}>
                Structured therapeutic programmes.
              </strong>{" "}
              CBT, EMDR, DBT, and similar approaches require trained
              professionals to deliver them safely and effectively. MEOK is not
              a replacement for these.
            </li>
            <li>
              <strong style={{ color: "#c9a84c" }}>
                Emergency crisis response.
              </strong>{" "}
              If you are in immediate danger, MEOK will pause the conversation
              and direct you to Samaritans (116 123) or emergency services
              (999). It will not attempt to manage a crisis itself. That is the
              only appropriate response.
            </li>
            <li>
              <strong style={{ color: "#c9a84c" }}>
                Legal or safeguarding responsibilities.
              </strong>{" "}
              Therapists carry legal duties around safeguarding and disclosure.
              MEOK carries none of these — it is a conversation tool, not a
              regulated practitioner.
            </li>
          </ul>
        </section>

        {/* ── Comparison Table ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "24px",
              lineHeight: 1.3,
            }}
          >
            Is AI or therapy better for mental health — or should you use both?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              opacity: 0.85,
              marginBottom: "24px",
              fontWeight: 600,
            }}
          >
            The best clinical outcomes come from human therapy. The most
            accessible, consistent day-to-day support comes from AI. Used
            together, they are meaningfully stronger than either alone.
          </p>

          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "2px solid rgba(201,168,76,0.5)",
                  }}
                >
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      color: "#c9a84c",
                      fontWeight: 700,
                      width: "30%",
                    }}
                  >
                    Capability
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "12px 16px",
                      color: "#c9a84c",
                      fontWeight: 700,
                    }}
                  >
                    AI Companion
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "12px 16px",
                      color: "#c9a84c",
                      fontWeight: 700,
                    }}
                  >
                    Therapist
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "12px 16px",
                      color: "#c9a84c",
                      fontWeight: 700,
                    }}
                  >
                    Combined
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["24/7 availability", "Yes", "No", "Yes"],
                  ["No cost barrier", "Often", "No", "Partial"],
                  ["Persistent memory", "Yes", "Session notes", "Full"],
                  ["Clinical diagnosis", "No", "Yes", "Yes"],
                  ["Structured therapy (CBT etc)", "No", "Yes", "Yes"],
                  ["Emergency crisis response", "Signpost only", "Yes", "Yes"],
                  ["Between-session support", "Yes", "Limited", "Yes"],
                  ["Non-judgmental consistency", "Yes", "Mostly", "Yes"],
                  ["Prescription / medication", "No", "Via GP/psych", "Via GP/psych"],
                  ["Safeguarding & legal duty", "No", "Yes", "Yes"],
                  ["Long-term pattern awareness", "Yes", "Partial", "Yes"],
                  ["Human empathy & intuition", "Simulated", "Yes", "Yes"],
                ].map(([capability, ai, therapist, combined], i) => (
                  <tr
                    key={capability}
                    style={{
                      background:
                        i % 2 === 0
                          ? "rgba(255,255,255,0.03)"
                          : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td
                      style={{
                        padding: "11px 16px",
                        color: "#f5f0e8",
                        opacity: 0.9,
                        fontWeight: 500,
                      }}
                    >
                      {capability}
                    </td>
                    <td
                      style={{
                        padding: "11px 16px",
                        textAlign: "center",
                        color:
                          ai === "Yes" || ai === "Often"
                            ? "#c9a84c"
                            : ai === "No"
                            ? "rgba(245,240,232,0.4)"
                            : "#f5f0e8",
                        fontWeight: ai === "Yes" ? 600 : 400,
                      }}
                    >
                      {ai}
                    </td>
                    <td
                      style={{
                        padding: "11px 16px",
                        textAlign: "center",
                        color:
                          therapist === "Yes"
                            ? "#c9a84c"
                            : therapist === "No"
                            ? "rgba(245,240,232,0.4)"
                            : "#f5f0e8",
                        fontWeight: therapist === "Yes" ? 600 : 400,
                      }}
                    >
                      {therapist}
                    </td>
                    <td
                      style={{
                        padding: "11px 16px",
                        textAlign: "center",
                        color:
                          combined === "Yes" || combined === "Full"
                            ? "#c9a84c"
                            : combined === "No"
                            ? "rgba(245,240,232,0.4)"
                            : "#f5f0e8",
                        fontWeight:
                          combined === "Yes" || combined === "Full" ? 600 : 400,
                      }}
                    >
                      {combined}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "13px", opacity: 0.5, fontStyle: "italic" }}>
            Table reflects general capabilities of AI companion tools and
            registered human therapists as of 2026. Individual products vary.
          </p>
        </section>

        {/* ── Section 4 ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Does MEOK claim to be a therapy app?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              opacity: 0.85,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            No. MEOK is an AI companion. It is designed for consistent,
            memory-aware emotional support and honest reflection — not clinical
            treatment.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8, marginBottom: "16px" }}>
            The mental health technology space is crowded with apps that hint at
            therapeutic benefit while burying their limitations in terms and
            conditions. We think this is a problem. People who genuinely need
            clinical help may delay seeking it because they believe an app is
            covering that need.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8, marginBottom: "16px" }}>
            MEOK is built differently. We tell you clearly — here, in the app,
            and in every conversation where it matters — that MEOK is a
            companion, not a clinician. The distinction is not a legal hedge. It
            is the truth, and we believe you deserve to hear it plainly.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8 }}>
            What MEOK does offer is meaningful: a continuous presence, a
            non-judgmental ear, and a companion that notices things about your
            patterns that you might miss. That is genuinely useful — especially
            for people on NHS waiting lists (currently averaging 18 weeks for
            talking therapies in many areas), for those who cannot afford
            private sessions, or for anyone who wants daily support alongside
            their existing care.
          </p>
        </section>

        {/* ── Section 5 ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            How does MEOK handle mental health crises?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              opacity: 0.85,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            When risk is detected, MEOK stops the conversation, acknowledges
            what you have shared, and gives you direct, clear signposting to
            crisis services. It does not attempt to manage the crisis itself.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8, marginBottom: "16px" }}>
            No AI companion is equipped to handle a mental health emergency.
            Attempting to do so — by offering reassurance, asking de-escalation
            questions, or playing for time — risks making things worse. The
            correct response is immediate, unambiguous signposting to humans who
            are trained for exactly this.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8 }}>
            MEOK monitors for indicators of acute distress. When those
            indicators appear, the conversation changes. Safety is not an
            afterthought in MEOK's design — it is a core constraint that cannot
            be overridden by any conversation flow.
          </p>
        </section>

        {/* ── Section 6 ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Who benefits most from using an AI companion alongside therapy?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              opacity: 0.85,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            People on therapy waiting lists, those in between sessions, night
            workers, carers, students under pressure, and anyone who struggles
            to open up in face-to-face settings benefit significantly from
            AI-companion support alongside clinical care.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8, marginBottom: "16px" }}>
            The research on digital mental health tools consistently shows that
            engagement is highest when people can access support at the moment
            they need it — not three days later in a scheduled call. The moments
            of genuine need do not arrive on schedule.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8 }}>
            MEOK is also designed for people who find talking to a stranger
            difficult — particularly men, who are statistically less likely to
            seek therapy but more likely to engage with a private, low-stakes
            conversation tool. The lack of social risk removes one of the
            biggest barriers to engagement.
          </p>
        </section>

        {/* ── Section 7 ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            What makes MEOK different from other AI mental health apps?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              opacity: 0.85,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            MEOK is built on sovereign AI architecture: your data stays on your
            device, is never used to train models, and is never sold. Most
            competitors cannot make this claim.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8, marginBottom: "16px" }}>
            Persistent memory — genuine memory that accumulates across every
            session — is also rare. Most AI apps reset between conversations.
            MEOK builds a continuous model of who you are: your patterns, your
            language, your history. That continuity changes the quality of
            support fundamentally.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.8 }}>
            MEOK also has a built-in sycophancy detector. It is designed to
            challenge you gently when you need challenging, rather than simply
            validating everything you say. Real support sometimes means
            reflecting something back that you did not want to hear.
          </p>
        </section>

        {/* ── Disclaimer ── */}
        <section
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "12px",
            padding: "28px 32px",
            marginBottom: "48px",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Important Disclaimer
          </h3>
          <p style={{ fontSize: "15px", lineHeight: 1.7, opacity: 0.85, marginBottom: "12px" }}>
            MEOK is an AI companion product. It is <strong>not</strong> a
            regulated mental health service, a medical device, or a replacement
            for professional clinical care. Nothing in this article or in MEOK's
            conversations constitutes medical advice, psychological diagnosis, or
            therapeutic treatment.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, opacity: 0.85, marginBottom: "0" }}>
            If you are experiencing a mental health crisis, please contact a
            qualified professional or crisis service immediately. MEOK AI LABS
            accepts no clinical liability for actions taken based on
            conversations with MEOK.
          </p>
        </section>

        {/* ── Crisis Resources ── */}
        <section
          style={{
            background: "rgba(13,12,24,0.8)",
            border: "1px solid rgba(201,168,76,0.4)",
            borderRadius: "12px",
            padding: "32px",
            marginBottom: "56px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
            }}
          >
            Crisis Resources &amp; Professional Support
          </h3>
          <p style={{ fontSize: "14px", opacity: 0.7, marginBottom: "24px", lineHeight: 1.6 }}>
            If you or someone you know is in crisis, please reach out to one of
            the following services. All are free unless otherwise noted.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                name: "Samaritans",
                detail: "116 123 — free, 24/7, anonymous",
                url: "https://www.samaritans.org",
                note: "Call or email jo@samaritans.org",
              },
              {
                name: "NHS Talking Therapies",
                detail: "0300 123 3393",
                url: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/",
                note: "Self-refer for free CBT & therapy",
              },
              {
                name: "MIND",
                detail: "0300 123 3393",
                url: "https://www.mind.org.uk",
                note: "Information, advice & local services",
              },
              {
                name: "BetterHelp",
                detail: "Online therapy platform",
                url: "https://www.betterhelp.com",
                note: "Licensed therapists online (paid)",
              },
              {
                name: "Crisis Text Line (UK)",
                detail: "Text SHOUT to 85258",
                url: "https://giveusashout.org",
                note: "Free, 24/7 text-based crisis support",
              },
              {
                name: "NHS 111",
                detail: "111 — option 2 for mental health",
                url: "https://www.nhs.uk/urgent-emergency-care/nhs-111/",
                note: "For urgent but non-emergency support",
              },
            ].map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "8px",
                  padding: "16px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: "#c9a84c",
                    fontSize: "15px",
                    marginBottom: "4px",
                  }}
                >
                  {resource.name}
                </p>
                <p
                  style={{
                    color: "#f5f0e8",
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {resource.detail}
                </p>
                <p style={{ color: "#f5f0e8", fontSize: "13px", opacity: 0.6 }}>
                  {resource.note}
                </p>
              </a>
            ))}
          </div>
          <p
            style={{
              fontSize: "13px",
              opacity: 0.5,
              marginTop: "20px",
              lineHeight: 1.6,
            }}
          >
            Emergency services: call <strong>999</strong> if a life is at
            immediate risk.
          </p>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            textAlign: "center",
            padding: "48px 32px",
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "16px",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.12em",
              color: "#c9a84c",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            MEOK AI LABS
          </p>
          <h3
            style={{
              fontSize: "26px",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            A companion that remembers you.
            <br />
            Not a replacement for care.
          </h3>
          <p
            style={{
              fontSize: "16px",
              opacity: 0.7,
              lineHeight: 1.7,
              marginBottom: "28px",
              maxWidth: "480px",
              margin: "0 auto 28px",
            }}
          >
            MEOK is an honest AI companion — available at 3 am, judgment-free,
            and genuinely invested in your wellbeing. Try it alongside your
            existing care, not instead of it.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#c9a84c",
              color: "#0d0c18",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Meet MEOK
          </Link>
        </section>

        {/* ── Related Posts ── */}
        <section style={{ marginBottom: "48px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "20px",
              opacity: 0.9,
            }}
          >
            Related reading
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              {
                href: "/blog/ai-for-anxiety",
                title: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?",
              },
              {
                href: "/blog/ai-for-depression",
                title: "AI for Depression: Honest Limits and Real Benefits",
              },
              {
                href: "/blog/meok-vs-replika",
                title: "MEOK vs Replika: A Straight Comparison",
              },
              {
                href: "/blog/meok-vs-woebot",
                title: "MEOK vs Woebot: Companion vs CBT Tool",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  padding: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "#f5f0e8",
                  fontSize: "14px",
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {post.title}
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(201,168,76,0.2)",
          padding: "32px 24px",
          textAlign: "center",
          fontSize: "13px",
          opacity: 0.5,
          color: "#f5f0e8",
        }}
      >
        <p style={{ marginBottom: "8px" }}>
          &copy; {new Date().getFullYear()} MEOK AI LABS — Founded by Nicholas
          Templeman
        </p>
        <p style={{ marginBottom: "8px" }}>
          MEOK is an AI companion, not a regulated medical or mental health
          service.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            Privacy
          </Link>
          <Link href="/terms" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            Terms
          </Link>
          <Link href="/blog" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            Blog
          </Link>
          <Link href="/about" style={{ color: "#f5f0e8", textDecoration: "none" }}>
            About
          </Link>
        </div>
      </footer>
    </div>
  );
}
