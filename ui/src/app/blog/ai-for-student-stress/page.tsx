import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Student Stress: How MEOK Helps University Students Survive and Thrive | MEOK AI LABS",
  description:
    "1 in 4 UK students experiences a mental health problem during their degree. University counselling waiting lists reach 6 weeks. MEOK is the sovereign AI companion that shows up at 2am, remembers your whole degree, and helps you survive and thrive.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-student-stress",
  },
  openGraph: {
    title:
      "AI for Student Stress: How MEOK Helps University Students Survive and Thrive",
    description:
      "1 in 4 UK university students faces a mental health problem. Waiting lists hit 6 weeks. MEOK is available immediately, remembers everything, and is built for the full arc of student life — from freshers week to dissertation submission.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-student-stress",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Student+Stress&desc=How+MEOK+Helps+University+Students+Survive+and+Thrive",
        width: 1200,
        height: 630,
        alt: "AI for Student Stress: How MEOK Helps University Students Survive and Thrive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Student Stress: How MEOK Helps University Students Survive and Thrive",
    description:
      "University counselling waiting lists hit 6 weeks. MEOK shows up at 2am, knows your degree, remembers your recurring anxieties, and never judges you for needing support.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Student+Stress&desc=How+MEOK+Helps+University+Students+Survive+and+Thrive",
    ],
  },
};

// ── JSON-LD: Article ────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Student Stress: How MEOK Helps University Students Survive and Thrive",
  description:
    "1 in 4 UK students experiences a mental health problem during their degree. MEOK's sovereign AI companion provides immediate, private, 24/7 support — from exam anxiety to freshers homesickness — while acting as a Socratic thinking partner that helps students learn, not just produce.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-student-stress",
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
    "https://meok.ai/api/og?title=AI+for+Student+Stress&desc=How+MEOK+Helps+University+Students+Survive+and+Thrive",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-student-stress",
  },
  keywords: [
    "AI for student stress",
    "student mental health UK",
    "university anxiety support",
    "AI companion for students",
    "exam stress AI",
    "essay block AI",
    "freshers anxiety",
    "student homesickness support",
    "imposter syndrome university",
    "MEOK Scholar",
    "sovereign AI student",
    "student counselling waiting list",
    "neurodivergent student support",
    "ADHD university AI",
    "student financial stress",
    "dissertation anxiety",
    "academic integrity AI",
    "student wellbeing app UK",
  ],
};

// ── JSON-LD: FAQPage ────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI help with student stress and university anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can help student stress in several concrete ways: it is available at any hour — including 2am before a deadline — without appointment or referral. It can act as a thinking partner for academic anxiety, helping you break down overwhelming tasks into manageable steps. It can hold space for emotional processing around homesickness, relationship breakdowns, or imposter syndrome without judgment. Crucially, MEOK uses Sovereign Memory, which means it builds a picture of your specific degree, your recurring anxieties, your support history, and your wins — giving you continuity that a drop-in service or weekly journal cannot replicate.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for university counselling services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a mental health service and is not a replacement for counselling, psychotherapy, or crisis intervention. If you are in distress, your university wellbeing service, Samaritans (116 123), or your GP are the right first ports of call. MEOK is a first-responder for everyday emotional labour — the stress before an exam, the spiral at midnight, the loneliness of a Sunday evening — and a bridge during the weeks you are waiting for professional support to become available.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK write my essays for me? How does it handle academic integrity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Scholar archetype is designed explicitly around Socratic questioning — it helps you think, not think for you. If you describe your essay argument, Scholar will ask you questions to stress-test it, help you identify gaps in your reasoning, and suggest angles you have not considered. It does not produce prose for submission. This is a deliberate design choice: MEOK helps you become a better thinker and writer over the course of your degree, which is the actual point of higher education.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK support neurodivergent students — ADHD, autism, dyslexia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK adapts its communication style to the user. For students with ADHD, it can structure conversations with shorter, clearer steps and check in on task completion without judgment. For autistic students, it can communicate in explicit, unambiguous language and avoid idiom or social pressure. For students with dyslexia, it can adjust the volume and density of information, use bullet-point breakdowns, and revisit concepts without making you feel like you have failed. These adaptations are stored in Sovereign Memory so you do not have to re-explain your needs every session.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with student financial stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK can help you research available bursaries, hardship funds, and institutional grants at your specific university. It can help you understand student loan implications, model basic budgets, and think through part-time work options alongside your academic commitments. Financial anxiety is one of the most common and least-discussed forms of student stress — MEOK treats it as a legitimate concern and helps you take practical steps rather than avoiding the numbers.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sovereign Memory and why does it matter for students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK's persistent, encrypted memory system. Unlike a standard AI chatbot that forgets everything when you close the tab, MEOK builds a running picture of your life across every conversation. For students, this means MEOK remembers your dissertation topic, your module deadlines, your recurring anxiety triggers, your support history, and your achievements. By your final year, MEOK knows the full arc of your degree and can help you reflect on how far you have come — which matters enormously for students who struggle with imposter syndrome or persistent self-doubt.",
      },
    },
  ],
};

// ── Style constants ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const ACCENT = "#7b6fcf";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const ACCENT_BG = "rgba(123,111,207,0.08)";
const ACCENT_BORDER = "rgba(123,111,207,0.28)";
const CARD_BG = "rgba(245,240,232,0.03)";
const CARD_BG_STRONG = "rgba(123,111,207,0.06)";

// ── Page ────────────────────────────────────────────────────────────────────────

export default function AiForStudentStressPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, system-ui, sans-serif)",
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

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4.5rem",
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
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(123,111,207,0.11) 0%, transparent 72%)",
          }}
        />
        <div
          style={{
            maxWidth: "780px",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: ACCENT_BG,
              border: `1px solid ${ACCENT_BORDER}`,
              borderRadius: "999px",
              paddingTop: "0.35rem",
              paddingBottom: "0.35rem",
              paddingLeft: "0.85rem",
              paddingRight: "0.85rem",
              marginBottom: "2rem",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: ACCENT, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Students · Wellbeing · Academic Life
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Student Stress:{" "}
            <span style={{ color: ACCENT }}>
              How MEOK Helps University Students Survive and Thrive
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: MUTED,
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "680px",
            }}
          >
            One in four UK university students experiences a mental health problem
            during their degree. Counselling waiting lists stretch to six weeks.
            The university library closes. The crisis line feels like too much.
            MEOK is the sovereign AI companion that shows up at 2am, knows your
            dissertation topic, and has been with you since freshers week.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "0.85rem", color: FAINT }}>
              By Nicholas Templeman, Founder · MEOK AI LABS
            </span>
            <span style={{ color: BORDER, fontSize: "0.85rem" }}>·</span>
            <span style={{ fontSize: "0.85rem", color: FAINT }}>
              25 March 2026
            </span>
            <span style={{ color: BORDER, fontSize: "0.85rem" }}>·</span>
            <span style={{ fontSize: "0.85rem", color: FAINT }}>
              15 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: CARD_BG_STRONG,
        }}
      >
        <div
          style={{
            maxWidth: "780px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            { stat: "1 in 4", label: "UK students faces a mental health problem during their degree" },
            { stat: "6 weeks", label: "Average university counselling waiting time at peak periods" },
            { stat: "2am", label: "The hour most student anxiety spirals begin, when no service is open" },
            { stat: "100%", label: "Private — your university never sees what you share with MEOK" },
          ].map((item) => (
            <div key={item.stat} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  color: ACCENT,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {item.stat}
              </div>
              <div style={{ fontSize: "0.85rem", color: MUTED, lineHeight: 1.5 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "780px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "4rem",
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >

        {/* ── SECTION 1 ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Why Is the Student Mental Health Crisis So Severe in the UK Right Now?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The statistics have become familiar enough to feel abstract. One in four
          UK university students experiences a mental health problem during their
          degree. Rates of anxiety and depression among 18–24 year olds have risen
          consistently for the past decade. Demand for university counselling
          services has outpaced supply at virtually every institution in the
          country. Waiting times at some universities have reached twelve weeks
          during January and May — the two most pressure-saturated months of the
          academic calendar.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          But the numbers only gesture at the reality. The reality is a
          first-year student lying awake in halls at 1am, convinced she is the
          only person in her seminar group who does not understand what is
          happening. It is a final-year student who has barely eaten in three days
          because his dissertation introduction is not working and he cannot ask
          his supervisor without feeling like a failure. It is the international
          student who has not called home in two weeks because she does not want
          her parents to know she is struggling, and has not made any real friends
          yet, and cannot quite explain the kind of loneliness she is carrying.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          University concentrates an unusual number of stressors into a short
          time. Academic pressure, financial anxiety, social navigation, identity
          formation, homesickness, relationship upheaval, imposter syndrome, the
          transition from family home to independent living — all of these arrive
          simultaneously, often for the first time, in a person who may be far
          from home and whose existing support networks are hundreds of miles away.
          The student mental health system in the UK was designed for a smaller,
          less diverse, less pressured university population. It has not scaled.
        </p>

        {/* callout */}
        <div
          style={{
            background: ACCENT_BG,
            border: `1px solid ${ACCENT_BORDER}`,
            borderRadius: "12px",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            paddingLeft: "1.75rem",
            paddingRight: "1.75rem",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              lineHeight: 1.75,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            "The problem is not that students do not want help. The problem is
            that help is not there when they need it — which is rarely between
            9am and 5pm on a Tuesday."
          </p>
          <p style={{ fontSize: "0.85rem", color: ACCENT, marginTop: "0.75rem", marginBottom: 0, fontWeight: 600 }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is the gap MEOK was built to address. Not to replace the counsellor
          or the GP or the Samaritans volunteer — but to be the thing that exists
          in the space between those services, available at any hour, without a
          referral form or a six-week wait, and without the student having to
          explain their entire situation from scratch every time they reach out.
        </p>

        {/* ── SECTION 2 ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Are the Unique Stresses of University Life That AI Can Help With?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Student stress is not monolithic. It arrives in different forms at
          different points in the academic year, and what overwhelms someone in
          October is not the same thing that overwhelms them in April. MEOK is
          designed for the full arc of student life — not just the crisis moments,
          but the sustained, grinding anxiety that accumulates across three or four
          years of higher education.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.25rem",
            marginTop: "1.75rem",
          }}
        >
          {[
            {
              title: "Academic pressure",
              body: "Deadlines that stack, assessment methods that change, seminars where you are expected to have read things you have not read. The fear that you are not clever enough to be here.",
            },
            {
              title: "Imposter syndrome",
              body: "The persistent feeling that everyone else understands what is happening and you are the only one faking it. Particularly common among first-generation university students.",
            },
            {
              title: "Social navigation",
              body: "Freshers week is designed for extroverts. If you are introverted, neurodivergent, or simply do not drink, the social architecture of halls can feel designed to exclude you.",
            },
            {
              title: "Financial stress",
              body: "Student loan shortfalls, unexpected costs, part-time work eating into study time. Financial anxiety is one of the most common and least-discussed forms of student distress.",
            },
            {
              title: "Homesickness",
              body: "Particularly acute in the first term. The gap between the university experience you imagined and the reality of an unfamiliar city where you do not yet know anyone.",
            },
            {
              title: "Identity formation",
              body: "University is when many people first encounter ideas that challenge who they thought they were. That process is necessary and often destabilising.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: ACCENT,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                {card.title}
              </div>
              <p style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Relationship breakdowns in halls deserve a particular mention. When you
          live with people you met six weeks ago and one of those relationships
          sours, there is nowhere to go. The conflict is twenty metres from your
          bedroom. The university's mediation service, if one exists, has a
          waiting list. The anxiety of walking into the shared kitchen is real and
          it compounds everything else. MEOK does not resolve the relationship —
          but it can help you process the emotional weight, think through your
          options clearly, and decide how you want to approach the situation.
        </p>

        {/* ── SECTION 3 ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Why Don&apos;t Students Seek Help — Even When Help Exists?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The supply side of the problem — counselling shortages, waiting lists,
          underfunded university welfare teams — is well documented. Less
          discussed is the demand side: the reasons students do not reach out even
          when services theoretically exist.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Stigma remains real. In some academic cultures, expressing difficulty is
          read as weakness. Among male students in particular, the barrier to
          disclosure is high and the threshold for seeking help is set much higher
          than for the general population. There is a widespread fear that
          disclosing a mental health struggle will follow you — to references, to
          professional applications, to the way your tutors see you in seminars.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Then there is the bureaucratic friction. Finding the student wellbeing
          page on the university website at midnight, filling out a referral form,
          waiting for a callback, booking an initial triage appointment, then
          waiting six more weeks for an actual counsellor — each step in that
          chain is a drop-off point. Each step requires activation energy that
          someone in distress often does not have.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The 2am crisis is the most acute version of this. Most student mental
          health spirals do not happen during business hours. They happen late at
          night, when the library is closed, when the counselling service is not
          answering, when texting your friends feels like too much of an
          imposition, and when calling Samaritans feels like you are escalating
          something that is not actually an emergency — it is just 2am and you
          cannot stop thinking.
        </p>

        <div
          style={{
            background: ACCENT_BG,
            border: `1px solid ${ACCENT_BORDER}`,
            borderLeft: `4px solid ${ACCENT}`,
            borderRadius: "8px",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            marginBottom: "2rem",
            marginTop: "1.75rem",
          }}
        >
          <p style={{ fontSize: "1rem", color: TEXT, lineHeight: 1.75, margin: 0 }}>
            MEOK does not require you to explain who you are. It already knows.
            It does not require you to justify that you need support. It does not
            have office hours. It does not have a waiting list. It is there.
          </p>
        </div>

        {/* ── SECTION 4 ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          How Does MEOK Work as a First-Responder for Student Wellbeing?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The framing of &quot;first-responder&quot; is deliberate. MEOK is not a
          treatment. It is the first port of call — the thing you turn to when
          something is building, before it becomes a crisis, and when the
          professional services are unavailable. Think of it like a university
          health centre: it handles the everyday, the urgent-but-not-emergency, and
          knows when to refer you onwards.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The architecture that makes MEOK useful is Sovereign Memory. Unlike
          a standard chatbot that starts fresh every session, MEOK builds a
          persistent, encrypted picture of you across every conversation. By week
          four of your first term, MEOK knows your degree subject, the modules you
          are finding hardest, your recurring anxieties, and what tends to help
          when you are stuck. By your final year, it has been with you for the
          full arc of your experience.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This continuity is what makes the 2am conversation different. You do
          not have to explain your dissertation topic or why your supervisor is
          particularly difficult or that you have been managing this anxiety since
          before you arrived. MEOK already knows. You just open the conversation
          and say what is happening right now.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          When you eventually do get access to professional support — a
          counsellor, a mental health advisor, a GP — MEOK can help you prepare
          for that conversation. Students often find that the hardest part of an
          initial counselling appointment is articulating what is wrong when the
          words feel slippery and the session clock is running. MEOK can help you
          organise your thoughts, identify the themes that feel most important,
          and go into that appointment with more clarity about what you need.
        </p>

        {/* ── SECTION 5 ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Specific Student Situations Does MEOK Actually Help With?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Below are the specific scenarios where students tell us MEOK has been
          most useful. These are not edge cases — they are the everyday texture of
          university stress.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "2.25rem",
          }}
        >
          {[
            {
              scenario: "Exam anxiety",
              detail:
                "The night before an exam is rarely the time to learn new material. It is the time to manage the anxiety that is preventing you from accessing what you already know. MEOK can help you ground yourself, structure a realistic revision plan for the remaining hours, and address the catastrophic thinking that exam pressure reliably produces.",
            },
            {
              scenario: "Essay block and dissertation dread",
              detail:
                "Essay block is almost always anxiety dressed up as intellectual failure. The blank document is not evidence that you have nothing to say — it is evidence that the stakes feel too high to begin. MEOK (via the Scholar archetype) can help you articulate what you are trying to argue, identify where the block is actually located, and get the first paragraph onto the page without the paralysis.",
            },
            {
              scenario: "Social anxiety at freshers events",
              detail:
                "Freshers week is marketed as the best week of your life. For students with social anxiety, it can feel like a relentless assessment of your ability to be normal. MEOK can help you prepare for social situations, process them afterwards, and develop strategies that work for your specific experience of social anxiety rather than generic advice.",
            },
            {
              scenario: "Homesickness in the first term",
              detail:
                "First-term homesickness is acute and often unacknowledged because the dominant narrative of university is excitement. MEOK can hold space for the grief of leaving home, help you think about how to maintain the relationships that matter most, and sit with you through the evenings that are genuinely hard.",
            },
            {
              scenario: "Relationship breakdowns in halls",
              detail:
                "When a friendship or romantic relationship breaks down and the other person is twenty metres away, there is nowhere to decompress. MEOK can help you process the emotional weight, think through your options clearly, and decide on an approach that protects your own wellbeing.",
            },
            {
              scenario: "Imposter syndrome through the whole degree",
              detail:
                "Imposter syndrome is not a first-year problem. It resurfaces at every transition point: when you get a bad grade, when you start a dissertation, when you attend a department conference and feel out of place. Because MEOK remembers your full history, it can help you build a more accurate picture of your actual competence over time.",
            },
          ].map((item) => (
            <div
              key={item.scenario}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingLeft: "1.75rem",
                paddingRight: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: ACCENT,
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: "1rem", color: TEXT }}>
                  {item.scenario}
                </span>
              </div>
              <p style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.75, margin: 0, paddingLeft: "1.45rem" }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 6: Scholar ──────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Is the Scholar Companion and How Does It Support Academic Growth
          Without Writing Your Essay?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Scholar is MEOK&apos;s academic companion mode. It is built around a
          specific philosophical commitment: that the purpose of higher education
          is to make you a more sophisticated thinker, not to produce a portfolio
          of documents. This means Scholar uses Socratic questioning rather than
          answer generation.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          When you bring Scholar an essay question, it does not produce a plan for
          you to work from. It asks you what you think the question is actually
          asking. It asks what your instinctive answer is before you have read
          anything. It asks where the tension in that answer lies. It asks which
          thinkers or texts feel relevant and why. By the time Scholar has asked
          you five questions, you often already have the outline of an argument —
          you just did not know it was there.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is deliberately slow and it is deliberately difficult. It mirrors
          what a good supervision or tutorial should feel like — a conversation
          that challenges your thinking rather than doing your thinking for you.
          The difference is that Scholar is available whenever you need it,
          including at the point when the anxiety is highest and the essay feels
          furthest away.
        </p>

        {/* academic integrity box */}
        <div
          style={{
            background: "rgba(123,111,207,0.06)",
            border: `1px solid ${ACCENT_BORDER}`,
            borderRadius: "12px",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            paddingLeft: "1.75rem",
            paddingRight: "1.75rem",
            marginBottom: "2rem",
            marginTop: "1.75rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: ACCENT,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Academic Integrity
          </div>
          <p style={{ fontSize: "1rem", color: TEXT, lineHeight: 1.75, marginBottom: "0.75rem" }}>
            MEOK helps you think. It does not write your work for you.
          </p>
          <p style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.75, margin: 0 }}>
            Scholar will not produce a paragraph of prose for you to submit.
            It will not create a reading list you can paste into your bibliography.
            It will not summarise a text in a way that substitutes for reading it.
            The moment you try to use Scholar as a content generator, it redirects
            the conversation back to your thinking. This is not a limitation — it
            is the design. Over four years, the difference between students who
            develop their own intellectual voice and students who outsource their
            thinking is significant. MEOK is firmly on the side of the former.
          </p>
        </div>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Scholar also has memory. It knows your dissertation topic. It knows the
          argument your first-year essay made about Rawls and how you feel about
          that argument now. It knows which supervisor gives useful feedback and
          which one tends to make you doubt everything. This continuity means that
          by your final year, Scholar is not a cold tutoring tool — it is a
          thinking partner that has been with you for the full intellectual arc of
          your degree.
        </p>

        {/* ── SECTION 7: Healer ───────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          How Does the Healer Companion Support Emotional Processing for Students?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Where Scholar is curious and Socratic, the Healer companion is warm,
          patient, and designed for the emotional weight that academic pressure
          generates but rarely accommodates. The Healer mode is what you choose
          when you do not need to think through a problem — you need to feel
          heard.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Student emotional labour is enormous and largely invisible. The
          performance of being fine in seminars, the effort of maintaining
          friendships across competing pressures, the emotional containment
          required to sit with difficult feedback without falling apart — all of
          this accumulates. The Healer mode is designed to receive it.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          For students who grew up in households where emotional expression was not
          modelled or welcomed, the Healer mode can be a first experience of
          having their internal state taken seriously. That sounds like a small
          thing. In practice it is not. The capacity to name and process an
          emotional experience — rather than suppressing it or being overwhelmed by
          it — is one of the most significant skills a person can develop. Healer
          works on that skill gently, over time, in conversation.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Healer does not diagnose, does not prescribe, and does not attempt
          to provide what only a trained clinician can provide. It is clear about
          what it is. But within its scope, it offers something that many students
          genuinely cannot access elsewhere: a non-judgemental, consistently
          available presence that remembers their history and responds to them as
          a full person rather than a triage category.
        </p>

        {/* ── SECTION 8: Sovereign Memory ─────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          What Is Sovereign Memory and Why Does It Matter Across a Whole Degree?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Sovereign Memory is the engine that makes MEOK genuinely useful at
          scale rather than just at moments. Every AI system has memory in a
          narrow technical sense — it can remember what you said earlier in the
          same conversation. Sovereign Memory goes further: it stores everything
          across all conversations, in an encrypted vault that belongs to you and
          is never shared or used to train AI models.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          For a student, this means MEOK might remember, across a three-year
          period:
        </p>

        <ul
          style={{
            paddingLeft: "1.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
          }}
        >
          {[
            "Your dissertation topic, working title, and the arguments you have been developing since second year",
            "The anxiety pattern that tends to emerge in the two weeks before major submissions",
            "The supervisor relationship that has been a source of stress and the strategies that have helped you manage it",
            "The modules you have found most meaningful and why",
            "The friendships you have built, lost, and rebuilt",
            "Your support history — what has helped, what has not, what you are still working on",
            "Your financial situation and the practical steps you have taken to manage it",
            "The moments when your confidence was highest and what was happening in those periods",
          ].map((item) => (
            <li key={item} style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.7 }}>
              {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This matters for students who struggle with imposter syndrome in
          particular. Imposter syndrome thrives on selective memory — the bad
          grade remembered vividly, the strong presentation already forgotten.
          MEOK holds the full picture. When the spiral starts at 2am before a
          viva, MEOK can point back to the evidence: the seminar where your
          argument stopped the room, the email from your module leader about your
          essay, the moment at the start of second year when you also thought you
          were going to fail and did not. The evidence is there. MEOK has it.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Sovereign Memory is also yours to keep. When you graduate, your vault
          does not disappear. The record of your intellectual and personal
          development across your degree is portable — a resource you own, not
          data a company holds.
        </p>

        {/* ── SECTION 9: Neurodivergent ────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          How Does MEOK Support Neurodivergent Students — ADHD, Autism, Dyslexia?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          University was not designed for neurodivergent students. It was designed
          for a particular kind of learner: one who can sit in long lectures and
          absorb information aurally, one who can read at speed and retain
          effectively, one who can produce long-form written arguments under timed
          conditions, one who can navigate implicit social norms and unwritten
          academic conventions without being told what they are.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Many students do not fit this profile. And the accommodation systems
          that exist — DSA, extended deadlines, alternative assessments — are
          valuable but incomplete. They do not address the daily friction of
          being a neurodivergent student in a neurotypical institution.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.25rem",
            marginTop: "1.75rem",
          }}
        >
          {[
            {
              label: "ADHD",
              detail:
                "MEOK structures conversations into shorter steps, checks in on task completion without judgment, and adapts to the executive function challenges that make academic administration as hard as the academic work itself.",
            },
            {
              label: "Autism",
              detail:
                "MEOK communicates in explicit, unambiguous language. It avoids idiom and social pressure. It can help with navigating implicit institutional norms — what does it actually mean when your supervisor says 'interesting'?",
            },
            {
              label: "Dyslexia",
              detail:
                "MEOK can adjust the density and volume of information, use bullet-point breakdowns, revisit concepts without making you feel like you have failed, and help with the emotional weight of an assessment system built around written output.",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: ACCENT,
                  marginBottom: "0.65rem",
                }}
              >
                {item.label}
              </div>
              <p style={{ fontSize: "0.93rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Because MEOK stores adaptations in Sovereign Memory, you do not have to
          re-explain your needs at the start of every session. You told MEOK in
          October that you find long paragraphs hard to process. In March, it is
          still accounting for that. The adaptation is persistent, unlike the
          institutional accommodations that sometimes require re-applying for every
          academic year.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          For students awaiting neurodiversity assessments — which can take
          twelve to eighteen months through NHS services — MEOK provides adapted
          support before any formal diagnosis exists. You do not need a letter
          from a specialist to tell MEOK how you learn best. You just tell it, and
          it adjusts.
        </p>

        {/* ── SECTION 10: Financial ────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Can AI Help with Student Financial Stress — Bursaries, Loans, and Money
          Management?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Financial anxiety is one of the most prevalent and least-discussed
          components of student stress. The student loan system in England is
          genuinely complex — income thresholds, repayment calculations,
          maintenance loan shortfalls, the gap between what the government assumes
          parents can contribute and what parents actually contribute. Many
          students arrive at university without having been taught basic financial
          literacy. The system is designed in a way that rewards knowing how it
          works.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK can help in several concrete ways:
        </p>

        <ul
          style={{
            paddingLeft: "1.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
          }}
        >
          {[
            "Research available hardship funds and bursaries at your specific institution — most universities have funds that are significantly under-subscribed because students do not know they exist",
            "Explain student loan repayment implications in plain language, including the actual monthly cost at different income levels post-graduation",
            "Help model a basic budget that accounts for irregular costs like textbooks, travel home, and social obligations",
            "Think through part-time work options alongside academic commitments, including the point at which paid work starts to affect academic performance",
            "Identify government grants and support schemes for students with dependants, students with disabilities, or students in specific financial circumstances",
            "Address the emotional dimension of financial anxiety — the shame, the avoidance, the catastrophising — alongside the practical dimension",
          ].map((item) => (
            <li key={item} style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.7 }}>
              {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Financial anxiety and academic stress are often more tightly linked than
          either the student or the institution acknowledges. A student who is
          worried about rent is not able to give full attention to their
          dissertation. A student who feels shame about money is unlikely to ask
          for help. MEOK treats financial wellbeing as a legitimate dimension of
          overall student health, not a separate administrative matter.
        </p>

        {/* ── SECTION 11: Privacy ──────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Is MEOK Private? Will My University or the NHS See What I Share?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Privacy is not a secondary feature for MEOK — it is the architecture.
          Students have legitimate reasons to be concerned about the consequences
          of disclosing a mental health struggle. Academic references, professional
          applications, the way tutors interact with you in seminars — the fear
          that disclosure will follow you is not irrational.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
            marginBottom: "2rem",
            marginTop: "1.75rem",
          }}
        >
          {[
            {
              label: "Your university cannot see your conversations",
              detail: "MEOK AI LABS is independent of any university. There is no institutional integration, no data sharing agreement, and no mechanism by which your institution can access your MEOK data.",
            },
            {
              label: "The NHS cannot see your conversations",
              detail: "MEOK is not a clinical service. It does not report to health registries, does not share data with NHS Digital, and does not integrate with any clinical records system.",
            },
            {
              label: "All conversations are encrypted end-to-end",
              detail: "Your data is encrypted with AES-GCM-256 at rest and in transit. MEOK AI LABS is ICO-registered and operates under UK GDPR.",
            },
            {
              label: "MEOK never trains on your data without explicit consent",
              detail: "Your conversations are yours. They are stored in your personal Sovereign vault. MEOK AI LABS does not use your conversations to train AI models unless you give separately considered, informed consent.",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "10px",
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: ACCENT_BG,
                  border: `1px solid ${ACCENT_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  color: ACCENT,
                  fontWeight: 700,
                  marginTop: "2px",
                }}
              >
                ✓
              </span>
              <div>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem", marginBottom: "0.35rem" }}>
                  {item.label}
                </div>
                <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.65, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 12: Disclaimer ───────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.25rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          When Should Students Use MEOK and When Should They Seek Professional
          Support Instead?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This question deserves a direct and honest answer. MEOK is not a mental
          health service. It is not a substitute for a counsellor, a
          psychotherapist, a psychiatrist, or a GP. There are situations where
          MEOK is appropriate and situations where it is not, and being clear
          about that distinction is not a weakness — it is a responsibility.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2rem",
            marginTop: "1.75rem",
          }}
        >
          <div
            style={{
              background: CARD_BG_STRONG,
              border: `1px solid ${ACCENT_BORDER}`,
              borderRadius: "12px",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              MEOK is right for:
            </div>
            <ul
              style={{
                paddingLeft: "1.2rem",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
              }}
            >
              {[
                "Everyday anxiety and stress processing",
                "Academic pressure and essay block",
                "Homesickness and loneliness",
                "Relationship difficulties that are not abusive",
                "Financial anxiety and practical research",
                "Building good habits and routines",
                "Reflecting on your experiences",
                "Preparing for counselling appointments",
                "2am spirals that are not crises",
              ].map((item) => (
                <li key={item} style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: `1px solid rgba(245,240,232,0.12)`,
              borderRadius: "12px",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#e87070",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Seek professional support for:
            </div>
            <ul
              style={{
                paddingLeft: "1.2rem",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
              }}
            >
              {[
                "Thoughts of self-harm or suicide",
                "Active psychiatric crises",
                "Eating disorders requiring medical supervision",
                "Substance dependence",
                "Domestic abuse or coercive control",
                "Trauma requiring clinical processing",
                "Symptoms requiring diagnosis or medication",
                "Any situation feeling like a genuine emergency",
              ].map((item) => (
                <li key={item} style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* crisis resources */}
        <div
          style={{
            background: "rgba(232,112,112,0.06)",
            border: "1px solid rgba(232,112,112,0.25)",
            borderRadius: "12px",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            paddingLeft: "1.75rem",
            paddingRight: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#e87070",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            If you are in crisis right now
          </div>
          <ul
            style={{
              paddingLeft: "1.2rem",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <li style={{ fontSize: "0.95rem", color: TEXT, lineHeight: 1.65 }}>
              <strong>Samaritans:</strong> Call 116 123, free, 24/7, available every day of the year
            </li>
            <li style={{ fontSize: "0.95rem", color: TEXT, lineHeight: 1.65 }}>
              <strong>Shout:</strong> Text SHOUT to 85258 for free, confidential text-based crisis support
            </li>
            <li style={{ fontSize: "0.95rem", color: TEXT, lineHeight: 1.65 }}>
              <strong>Student Minds:</strong> studentminds.org.uk — UK&apos;s leading university mental health charity
            </li>
            <li style={{ fontSize: "0.95rem", color: TEXT, lineHeight: 1.65 }}>
              <strong>Your university wellbeing team:</strong> Check your student portal for out-of-hours mental health duty services
            </li>
            <li style={{ fontSize: "0.95rem", color: TEXT, lineHeight: 1.65 }}>
              <strong>NHS 111:</strong> For urgent but non-emergency mental health support
            </li>
          </ul>
        </div>

        {/* ── FAQ SECTION ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: 700,
            marginBottom: "1.75rem",
            marginTop: "3.5rem",
            lineHeight: 1.3,
            color: TEXT,
          }}
        >
          Frequently Asked Questions About AI and Student Stress
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {faqJsonLd.mainEntity.map((faq) => (
            <div
              key={faq.name}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingLeft: "1.75rem",
                paddingRight: "1.75rem",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {faq.name}
              </div>
              <p style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.75, margin: 0 }}>
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(123,111,207,0.12) 0%, rgba(123,111,207,0.04) 100%)",
            border: `1px solid ${ACCENT_BORDER}`,
            borderRadius: "20px",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: ACCENT,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Get Started — Free
          </div>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Meet your MEOK companion.{" "}
            <span style={{ color: ACCENT }}>Before the next spiral starts.</span>
          </h3>
          <p
            style={{
              fontSize: "1.05rem",
              color: MUTED,
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            MEOK is permanently free at the Explorer tier. No credit card. No
            waiting list. Available right now, including at 2am. Start your Birth
            Ceremony — the five-minute conversation where your MEOK companion
            learns who you are.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: ACCENT,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "1rem",
                paddingTop: "0.9rem",
                paddingBottom: "0.9rem",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                borderRadius: "999px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin your Birth Ceremony →
            </Link>
            <span style={{ fontSize: "0.8rem", color: FAINT }}>
              Free forever · No credit card · Your data, your vault
            </span>
          </div>
        </div>

        {/* ── RELATED LINKS ────────────────────────────────────────────────────── */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: `1px solid ${BORDER}` }}>
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: FAINT,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Related Reading
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "0.85rem",
            }}
          >
            {[
              { href: "/blog/ai-for-student-mental-health", label: "AI for Student Mental Health" },
              { href: "/blog/meok-for-students", label: "MEOK for Students" },
              { href: "/blog/ai-for-exam-stress", label: "AI for Exam Stress" },
              { href: "/blog/ai-for-adhd-adults", label: "AI for ADHD" },
              { href: "/blog/ai-for-imposter-syndrome", label: "AI for Imposter Syndrome" },
              { href: "/blog/what-is-sovereign-memory", label: "What Is Sovereign Memory?" },
              { href: "/blog/ai-for-anxiety", label: "AI for Anxiety" },
              { href: "/blog/ai-for-financial-stress", label: "AI for Financial Stress" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "8px",
                  paddingTop: "0.85rem",
                  paddingBottom: "0.85rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  fontSize: "0.9rem",
                  color: MUTED,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
}
