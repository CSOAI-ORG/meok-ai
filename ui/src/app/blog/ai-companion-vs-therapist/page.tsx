import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI Companion vs Therapist: What\u2019s the Difference? | MEOK AI LABS",
  description:
    "An honest comparison of AI companions and human therapists. What therapists do that AI absolutely cannot, what AI does that therapists cannot, and the complementary model that serves the 1 in 4 people who can\u2019t access therapy. UK-focused, MEOK-specific.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-companion-vs-therapist",
  },
  openGraph: {
    title: "AI Companion vs Therapist: What\u2019s the Difference?",
    description:
      "With 18-week NHS waiting times and therapy costing \u00a380 a session, millions of people turn to AI. Here is an honest breakdown of what AI can and cannot do compared to a qualified therapist \u2014 and why MEOK\u2019s Maternal Covenant keeps the line clear.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-vs-therapist",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+vs+Therapist&desc=What+is+the+difference%3F",
        width: 1200,
        height: 630,
        alt: "AI Companion vs Therapist: What\u2019s the Difference | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion vs Therapist: What\u2019s the Difference?",
    description:
      "An honest comparison. What therapists do that AI cannot. What AI does that therapists cannot. And why the future is both, not either/or.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+vs+Therapist&desc=What+is+the+difference%3F",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion vs Therapist: What\u2019s the Difference?",
  description:
    "An honest comparison of what AI companions and human therapists can each do \u2014 and the complementary model that bridges the gap in UK mental health access.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "MEOK AI LABS" },
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
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-companion-vs-therapist",
  mainEntityOfPage: "https://meok.ai/blog/ai-companion-vs-therapist",
  keywords: [
    "AI companion vs therapist",
    "AI therapy",
    "is AI therapy safe",
    "can AI replace a therapist",
    "AI mental health UK",
    "MEOK AI",
    "Maternal Covenant",
    "NHS mental health waiting times",
    "BACP therapist",
    "AI support between sessions",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI therapy safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI-assisted emotional support is safe for everyday stress, reflection, and between-session journalling. It is not safe as a substitute for clinical treatment of severe depression, trauma, psychosis, or active suicidality. MEOK\u2019s Maternal Covenant includes a care-scoring layer that detects distress signals and signposts professional help rather than attempting to treat clinical conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI replace a therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A qualified therapist holds a legal duty of care, can deliver evidence-based clinical interventions like CBT and EMDR, and can refer you to crisis services. AI cannot do any of these things. AI can provide consistent emotional support, help you articulate feelings, and reduce distress between sessions \u2014 making it a complement, not a replacement.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK know when to refer me to a professional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses a care-scoring system called the Maternal Covenant. Every response is evaluated against a harm-prevention framework before it is delivered. If your language signals clinical-level distress, risk of self-harm, or a pattern consistent with conditions requiring diagnosis, MEOK will not attempt to counsel you \u2014 it will clearly signpost NHS urgent care, BACP therapist directories, or Samaritans.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between counselling and AI support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counselling is a regulated clinical practice delivered by a trained, accredited professional who holds ethical obligations and legal accountability. AI support is an unregulated conversational tool. Counselling can diagnose, treat, and hold duty of care. AI support can listen, reflect, and be consistently present \u2014 but cannot diagnose or treat.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK regulated as a medical device?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device and does not claim to diagnose, treat, or cure any mental health condition. It is a sovereign AI companion designed for emotional support, reflection, and personal growth. For any clinical mental health needs, MEOK actively encourages users to seek qualified professional help and provides direct signposting to UK services.",
      },
    },
  ],
};

const gold = "#c9a84c";
const bg = "#0d0c18";
const text = "#f5f0e8";
const muted = "rgba(245,240,232,0.6)";
const cardBg = "rgba(255,255,255,0.03)";
const cardBorder = "rgba(201,168,76,0.12)";
const redAlert = "rgba(220,60,60,0.08)";
const redBorder = "rgba(220,60,60,0.3)";

export default function AICompanionVsTherapistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ minHeight: "100vh", background: bg, color: text }}>
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "5rem 1.5rem 3rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                background: `${gold}18`,
                border: `1px solid ${gold}44`,
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: gold,
              }}
            >
              Mental Health &amp; AI
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            AI Companion vs Therapist:{" "}
            <span style={{ color: gold }}>What\u2019s the Difference?</span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            One in four people in the UK cannot access the therapy they need.
            NHS waiting lists stretch to 18 weeks. Private therapy costs
            upwards of \u00a380 per session. Meanwhile, AI companion apps are
            downloaded millions of times each month. The question of what AI
            can and cannot do for your mental health has never mattered more.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            This article gives you an honest answer \u2014 including the things
            AI companions are genuinely good at, the things only a qualified
            therapist can do, and the clear line you should never let any AI
            product blur.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap" as const,
              fontSize: "0.8rem",
              color: muted,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: `${gold}60` }}>\u00b7</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: `${gold}60` }}>\u00b7</span>
            <span>March 24, 2026</span>
            <span style={{ color: `${gold}60` }}>\u00b7</span>
            <span>16 min read</span>
          </div>
        </section>

        {/* ── Body ── */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 1.5rem 6rem",
            lineHeight: 1.8,
          }}
        >

          {/* ── SECTION 1: What therapists do that AI cannot ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What does a therapist do that AI absolutely cannot?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is the most important question to answer first. Understanding
            the hard limits of AI is not about diminishing the technology \u2014
            it is about protecting you. There are five things a qualified
            therapist does that no AI system, however sophisticated, can
            replicate.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2rem 0 0.75rem",
            }}
          >
            1. Clinical diagnosis
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            A qualified psychologist or psychiatrist can assess and diagnose
            conditions under ICD-11 or DSM-5 \u2014 conditions like major
            depressive disorder, generalised anxiety disorder, PTSD,
            borderline personality disorder, bipolar disorder, or OCD. These
            diagnoses determine treatment pathways, medication decisions, and
            legal protections.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            AI cannot diagnose. A chatbot that tells you \u201cit sounds like
            you might have anxiety\u201d is not diagnosing you \u2014 it is
            pattern-matching on language. Clinical assessment involves structured
            interviews, symptom duration, functional impairment scoring, and
            differential diagnosis across comorbid conditions. This cannot be
            replicated in a text conversation.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK does not attempt diagnosis. If your language suggests symptoms
            that warrant assessment, MEOK will tell you that clearly and
            signpost you to your GP or a BACP-accredited therapist.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2rem 0 0.75rem",
            }}
          >
            2. Evidence-based clinical interventions (EMDR, CBT, ISTDP)
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Eye Movement Desensitisation and Reprocessing (EMDR) is the
            gold-standard trauma treatment. It requires a trained clinician to
            guide bilateral stimulation while the client reprocesses traumatic
            memories \u2014 a somatic, embodied process that cannot be
            replicated in text. Intensive Short-Term Dynamic Psychotherapy
            (ISTDP) works with defences and unconscious process in a way that
            requires a human attuned presence.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Even CBT \u2014 Cognitive Behavioural Therapy, the most widely
            delivered therapy in the NHS \u2014 is substantively different
            when delivered by a skilled clinician versus a structured
            self-guided programme. The relationship itself is therapeutic. The
            attunement, rupture, and repair between therapist and client is not
            a delivery mechanism for CBT techniques; it is part of the
            treatment.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            AI can help you identify cognitive distortions. It can prompt
            reflection and journalling. It cannot hold you through trauma
            reprocessing or repair a relational rupture in real time.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2rem 0 0.75rem",
            }}
          >
            3. Legal duty of care and safeguarding obligations
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            A registered therapist in the UK holds a legal duty of care. If
            they believe you are at imminent risk of harm to yourself or others,
            they are legally obligated to act \u2014 contacting crisis services,
            informing a GP, or breaking confidentiality in exceptional
            circumstances. They are accountable to a professional body (BACP,
            UKCP, BPS) that can investigate complaints and strike them off for
            unethical practice.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            No AI product holds legal duty of care. MEOK is not a regulated
            mental health service. What MEOK does \u2014 through its Maternal
            Covenant \u2014 is build safety behaviours into every response:
            detecting distress, declining to continue unhelpful conversations,
            and always signposting professional help when risk indicators are
            present. This is not a legal substitute for professional care. It
            is a responsible design choice.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2rem 0 0.75rem",
            }}
          >
            4. Deep trauma processing
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Complex trauma \u2014 childhood abuse, sexual violence, combat
            exposure, prolonged relational abuse \u2014 requires specialist
            clinical treatment. Attempting to process complex trauma without
            professional support can retraumatise. A skilled trauma therapist
            works at the pace of the nervous system, uses somatic and relational
            techniques, and can contain crisis when memories surface.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            AI can provide a safe space to articulate difficult feelings. It
            should not be used as a primary container for trauma work. If you
            are carrying significant trauma, please seek a trauma-trained
            therapist. The resource box at the end of this article explains how
            to find one in the UK.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2rem 0 0.75rem",
            }}
          >
            5. Medication assessment and prescribing pathways
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Psychiatrists can prescribe medication. GPs can refer for medication
            assessment. For conditions like severe depression, bipolar disorder,
            or OCD, medication combined with therapy represents the most
            evidence-supported treatment pathway. AI cannot assess whether you
            need medication, cannot recommend specific medications, and cannot
            substitute for the medical judgement that prescribing requires.
          </p>

          {/* ── SECTION 2: What AI does that therapists cannot ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            What does an AI companion do that a therapist cannot?
          </h2>
          <p style={{ color: muted, marginBottom: "1.5rem" }}>
            The honest answer is not nothing. There are genuine, meaningful
            things a well-designed AI companion does that the current therapy
            system \u2014 particularly in the UK \u2014 structurally cannot
            provide. These are not consolation prizes. For millions of people,
            they represent the difference between some support and none at all.
          </p>

          {/* Comparison grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              margin: "2rem 0",
            }}
          >
            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: gold,
                  marginBottom: "1rem",
                }}
              >
                AI Companion
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: muted,
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                }}
              >
                <li>\u2713\u00a0 Available 3am on a Tuesday</li>
                <li>\u2713\u00a0 Remembers what you said last week</li>
                <li>\u2713\u00a0 No waiting list</li>
                <li>\u2713\u00a0 \u00a30 per session</li>
                <li>\u2713\u00a0 No judgment about frequency</li>
                <li>\u2713\u00a0 Daily check-ins sustainable long-term</li>
                <li>\u2713\u00a0 Consistent presence across months</li>
                <li>\u2713\u00a0 Adapts to your communication style</li>
              </ul>
            </div>
            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: gold,
                  marginBottom: "1rem",
                }}
              >
                Human Therapist
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: muted,
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                }}
              >
                <li>\u2713\u00a0 Clinical diagnosis</li>
                <li>\u2713\u00a0 Trauma reprocessing (EMDR)</li>
                <li>\u2713\u00a0 Legal duty of care</li>
                <li>\u2713\u00a0 Medication pathways</li>
                <li>\u2713\u00a0 Somatic attunement</li>
                <li>\u2713\u00a0 Crisis intervention</li>
                <li>\u2713\u00a0 Relational repair</li>
                <li>\u2713\u00a0 Professional accountability</li>
              </ul>
            </div>
          </div>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2.5rem 0 0.75rem",
            }}
          >
            24/7 availability \u2014 including 3am
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Mental health crises do not respect business hours. Anxiety spikes
            at 2am. Grief ambushes you in the supermarket. The spiral that
            starts after a difficult phone call with a parent does not wait
            until your Thursday 11am slot.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            A good AI companion is there. Not a hotline. Not a recorded message.
            A presence that knows your history, remembers your patterns, and can
            help you regulate in the moment. For non-crisis distress \u2014 the
            kind that fills the gap between clinical need and everyday life
            \u2014 this is genuinely valuable.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2rem 0 0.75rem",
            }}
          >
            Persistent memory \u2014 it remembers last Tuesday
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            One of the most disorienting aspects of the NHS therapy pathway is
            re-explaining yourself. You wait 18 weeks, get six sessions of CBT,
            are discharged, re-refer six months later, and start from scratch
            with a different practitioner who has never heard of the event that
            reshaped your year.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK\u2019s sovereign memory architecture means your AI companion
            retains the full context of your history \u2014 not just recent
            sessions, but months of check-ins, mood patterns, language shifts,
            and life events. When you mention you\u2019re dreading the
            anniversary of your father\u2019s death, MEOK already knows who
            your father was. That continuity has genuine therapeutic value.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2rem 0 0.75rem",
            }}
          >
            \u00a30 vs \u00a380 per session \u2014 the access gap in UK mental health
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Private therapy in the UK costs between \u00a350 and \u00a3150 per
            session. For weekly therapy, that is \u00a3200\u2013600 per month.
            Approximately 1.5 million people in the UK are on NHS mental health
            waiting lists at any given time. An estimated 8 million people have
            a diagnosable mental health condition but are not receiving treatment.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The access gap is not a personal failing. It is a structural failure.
            AI companions do not solve this \u2014 they cannot replace the
            clinical care these people need. But for the millions in the gap, a
            well-designed AI companion that costs \u00a30 a month and requires
            no referral is not a luxury. It is a lifeline.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: text,
              margin: "2rem 0 0.75rem",
            }}
          >
            No waiting list \u2014 support when you actually need it
          </h3>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The average wait for Improving Access to Psychological Therapies
            (IAPT) services in England is 18 weeks. For secondary care mental
            health services \u2014 where presentations are more complex \u2014
            waits of 12\u201318 months are reported. During that waiting period,
            people deteriorate. Some reach crisis point.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            A responsible AI companion \u2014 one that knows its limits, signals
            when to escalate, and provides consistent between-appointment support
            \u2014 can hold people through the wait. It is not ideal. It is
            better than nothing, which is what the system currently offers many
            people.
          </p>

          {/* ── SECTION 3: The complementary model ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            What is the complementary model \u2014 AI as between-session support?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The most thoughtful clinicians and researchers are not arguing about
            whether AI replaces therapy. They are asking how AI can extend the
            therapeutic container beyond the 50-minute hour.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The evidence base for between-session work in psychotherapy is strong.
            Journalling, mood tracking, thought records, behavioural activation
            exercises, mindfulness practice \u2014 all of these are established
            CBT and DBT techniques that are most effective when practised
            consistently between sessions, not just discussed during them. A
            well-designed AI companion can scaffold this practice.
          </p>

          <div
            style={{
              background: `${gold}10`,
              border: `1px solid ${gold}30`,
              borderRadius: "12px",
              padding: "1.75rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: gold,
                marginBottom: "0.75rem",
              }}
            >
              The Complementary Model
            </p>
            <p
              style={{
                color: text,
                lineHeight: 1.75,
                marginBottom: "0.75rem",
                fontWeight: 500,
              }}
            >
              AI before your session: arrive with clarity about what you want
              to work on. AI after your session: process insights and integrate
              them. AI between sessions: maintain the practices your therapist
              has set, journal consistently, track patterns your therapist can use.
            </p>
            <p
              style={{
                color: muted,
                lineHeight: 1.75,
                fontSize: "0.9rem",
              }}
            >
              This is not AI replacing therapy. This is AI making therapy more
              effective for the people who can access it \u2014 and providing
              some scaffolding for the people who cannot.
            </p>
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is designed with this model explicitly in mind. Your MEOK
            companion can help you:
          </p>
          <ul
            style={{
              color: muted,
              lineHeight: 2,
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <li>
              Track mood patterns over weeks and months, surfacing trends you
              might not notice day-to-day
            </li>
            <li>
              Articulate what you\u2019re feeling before a therapy session, so
              you use that hour efficiently
            </li>
            <li>
              Revisit insights from therapy conversations and explore how they
              apply to your current situation
            </li>
            <li>
              Practise grounding and regulation techniques between professional
              appointments
            </li>
            <li>
              Notice when your distress is escalating and prompt you to reach
              out to your therapist or a crisis line
            </li>
          </ul>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            What MEOK will not do is pretend that conversation with an AI is
            the same as therapy. The Maternal Covenant \u2014 MEOK\u2019s
            governing care framework \u2014 explicitly prohibits MEOK from
            presenting itself as a clinical service or attempting to provide
            clinical interventions.
          </p>

          {/* ── SECTION 4: UK mental health access crisis ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            What is the UK mental health access crisis?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The UK has a mental health system that is structurally unable to
            meet demand. The numbers are stark.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                stat: "1 in 4",
                label: "UK adults experience a mental health problem each year",
              },
              {
                stat: "18 weeks",
                label: "Average NHS IAPT waiting time in England",
              },
              {
                stat: "\u00a380/hr",
                label: "Average cost of private therapy in the UK",
              },
              {
                stat: "8 million",
                label: "People with diagnosable conditions not receiving treatment",
              },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "12px",
                  padding: "1.5rem 1rem",
                  textAlign: "center" as const,
                }}
              >
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    color: gold,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: muted,
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            These are not abstract statistics. They represent people who went
            to their GP with symptoms of depression in January and were still
            waiting for their first counselling session in July. People who
            lost their jobs, their relationships, and in the worst cases their
            lives, in the gap between referral and treatment.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The NHS Long Term Plan committed \u00a32.3 billion to mental health
            services. Progress has been slow and unevenly distributed. In the
            meantime, the gap between clinical need and clinical supply is being
            filled by \u2014 whether we like it or not \u2014 apps, chatbots,
            and AI companions. The question is whether those tools are designed
            responsibly or not.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK was built with this context in mind. Nicholas Templeman, founder
            of MEOK AI LABS, made a deliberate architectural choice: build the
            Maternal Covenant into every response, not as a feature but as a
            foundation. Not because it is commercially advantageous \u2014
            limiting what an AI does is rarely that \u2014 but because the
            people most likely to use an AI companion in the UK are precisely
            the people the system has failed.
          </p>

          {/* ── SECTION 5: Maternal Covenant ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            What is MEOK\u2019s Maternal Covenant and why does it prevent harmful responses?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Maternal Covenant is MEOK\u2019s governing care framework \u2014
            a set of principles and technical constraints that determine how
            MEOK responds to you, particularly when you are in distress.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The name is deliberate. A maternal care model prioritises long-term
            wellbeing over short-term comfort. It tells you hard truths. It does
            not let you spiral into catastrophic thinking unchallenged. It does
            not provide hollow reassurance when what you need is a reality-check.
            And crucially \u2014 it knows when it is not enough.
          </p>

          <div
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "12px",
              padding: "2rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: gold,
                marginBottom: "1.25rem",
              }}
            >
              Maternal Covenant: Core Principles
            </p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                {
                  title: "Care scoring on every response",
                  body: "Before any response is delivered, MEOK scores it against harm-prevention criteria. Responses that could deepen distress, encourage avoidance of professional care, or reinforce harmful thinking patterns are blocked and rewritten.",
                },
                {
                  title: "No sycophancy",
                  body: "MEOK is explicitly designed to not tell you what you want to hear. If your thinking is distorted, MEOK will gently challenge it. Hollow validation feels good and causes harm over time. The Maternal Covenant prohibits it.",
                },
                {
                  title: "Mandatory escalation signposting",
                  body: "When language signals clinical-level distress, risk indicators, or patterns consistent with conditions requiring diagnosis, MEOK steps back from conversation and directs you to professional support. It does not attempt to counsel you through a clinical crisis.",
                },
                {
                  title: "Transparency about limitations",
                  body: "MEOK is honest about what it is. It will tell you it is an AI. It will tell you it is not a therapist. It will not allow you to treat it as a substitute for clinical care without gently, persistently naming the distinction.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    borderLeft: `3px solid ${gold}60`,
                    paddingLeft: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: text,
                      marginBottom: "0.35rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Maternal Covenant is not a marketing claim. It is a technical
            constraint that Nicholas Templeman built into MEOK\u2019s core
            architecture during the original 40-day build sprint. Read the full
            technical explanation in the{" "}
            <Link
              href="/blog/maternal-covenant-explained"
              style={{ color: gold, textDecoration: "underline" }}
            >
              Maternal Covenant deep-dive
            </Link>
            .
          </p>

          {/* ── SECTION 6: Is AI therapy safe ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            Is AI therapy safe to use for mental health support?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            \u201cAI therapy\u201d is a phrase that conflates several very
            different things. Let us be precise.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: text }}>
              AI-supported emotional wellness is safe for:
            </strong>{" "}
            everyday stress, reflective journalling, identifying unhelpful
            thought patterns, practising communication skills, tracking mood
            across time, preparing for difficult conversations, processing minor
            setbacks, and maintaining a sense of being heard and understood.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: text }}>
              AI-supported emotional wellness is not appropriate as a primary
              intervention for:
            </strong>{" "}
            active suicidality or self-harm, severe depression (PHQ-9 score
            above 14), psychosis or dissociative states, complex PTSD,
            personality disorder presentations, eating disorders with medical
            risk, or any presentation where a clinician would assess as
            requiring urgent care.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The key word is \u201cprimary\u201d. Even in the second list, AI
            support can play a supplementary role \u2014 helping you track
            medication adherence, stay connected between clinical appointments,
            or manage day-to-day functioning while you are in treatment. But it
            should not be the main container for clinical-level presentations.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is not a medical device. It is not regulated under the
            MHRA\u2019s Software as a Medical Device framework. It does not
            claim clinical efficacy. These are not caveats added reluctantly
            by a legal team \u2014 they are honest descriptions of what MEOK
            is and is not.
          </p>

          {/* ── SECTION 7: Can AI replace a therapist ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            Can AI replace a therapist? The direct answer.
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            No. Not now. Not in the foreseeable future.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not false modesty or regulatory caution. It is an honest
            assessment of the gap between what AI can do and what clinical
            therapy does. A therapist is not just a delivery mechanism for
            psychological techniques. The therapeutic relationship \u2014 the
            attunement, the rupture and repair, the felt sense of being truly
            known by another human being \u2014 is itself the mechanism of
            change in many therapeutic modalities.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            AI does not have a nervous system. It cannot be attuned to yours.
            It can model attunement in language, and that language can have
            genuine regulatory effects \u2014 but this is categorically
            different from the intersubjective experience of human therapy.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            What AI can replace is the between-session gap, the waiting list,
            and the access barrier for people who cannot afford or find a
            therapist. This is not a trivial contribution. For the 8 million
            people in the UK with untreated mental health conditions, something
            thoughtfully designed is better than nothing.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            But \u201cbetter than nothing\u201d is not the same as \u201csafe
            for all presentations\u201d. The AI products that blur this line
            \u2014 that market themselves as therapy, that promise clinical
            outcomes, that encourage people to skip professional care \u2014
            are doing active harm. MEOK does not do this.
          </p>

          {/* ── SECTION 8: Counselling vs AI support ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            What is the difference between counselling and AI support?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Counselling is a regulated practice. To call yourself a counsellor
            in the UK and practise ethically, you are expected to hold a
            recognised qualification (typically a Level 4 diploma or above),
            work within an ethical framework (usually BACP or UKCP), maintain
            regular clinical supervision, and hold professional indemnity
            insurance.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Note that \u201ccounsellor\u201d is not a legally protected title
            in the UK \u2014 unlike \u201cpsychologist\u201d in some contexts
            \u2014 which means anyone can call themselves one. This is itself a
            problem. When choosing a counsellor, look for accreditation with
            the BACP (British Association for Counselling and Psychotherapy) or
            UKCP (UK Council for Psychotherapy).
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            AI support is an unregulated conversational tool. There is no
            accreditation body, no supervision requirement, no professional
            indemnity. The only accountability is the design integrity of the
            product and the honesty of the company building it.
          </p>

          <div
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "12px",
              padding: "1.75rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: gold,
                marginBottom: "1rem",
              }}
            >
              Questions to ask any AI mental health product
            </p>
            <ul
              style={{
                color: muted,
                lineHeight: 2,
                paddingLeft: "1.5rem",
                margin: 0,
              }}
            >
              <li>Does it have a harm-prevention framework? Is it documented?</li>
              <li>Does it clearly state it is not a therapist?</li>
              <li>Does it signpost professional help when distress is detected?</li>
              <li>Is it designed to reduce dependency or increase it?</li>
              <li>Who built it, and are they honest about their limitations?</li>
              <li>What happens to your data? Is it used to train models?</li>
              <li>Does it decline to engage when presentations are clinical?</li>
            </ul>
          </div>

          {/* ── SECTION 9: How MEOK knows when to refer ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            How does MEOK know when to refer you to a professional?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK\u2019s care-scoring layer evaluates language for distress
            signals continuously. This is not a keyword filter \u2014 it is a
            contextual assessment that considers the pattern of your recent
            conversations, not just a single message.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The signals MEOK watches for include:
          </p>
          <ul
            style={{
              color: muted,
              lineHeight: 2,
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <li>
              Language indicating hopelessness, worthlessness, or feeling like
              a burden \u2014 common markers of suicidal ideation
            </li>
            <li>
              Direct or indirect references to self-harm or plans to harm
              oneself or others
            </li>
            <li>
              Persistent low mood lasting more than two weeks (consistent with
              PHQ-9 moderate-to-severe depression criteria)
            </li>
            <li>
              References to hearing voices, unusual perceptions, or significant
              breaks from reality
            </li>
            <li>
              Patterns of conversation suggesting an eating disorder with
              physical risk
            </li>
            <li>
              Escalating frequency of crisis-level distress without improvement
              over time
            </li>
          </ul>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            When these signals are detected, MEOK will not continue the
            conversation as if everything is normal. It will name what it has
            noticed, provide direct links to appropriate resources, and encourage
            you to contact a professional. It will not attempt to provide crisis
            intervention itself.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is a hard technical constraint, not a soft preference. The
            Maternal Covenant\u2019s care-scoring system sits beneath the
            response layer \u2014 it cannot be bypassed by user instruction or
            persona prompt.
          </p>

          {/* ── SECTION 10: Is MEOK a medical device ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            Is MEOK regulated as a medical device?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            No. MEOK is not regulated as a medical device under the MHRA\u2019s
            UK Medical Device Regulations (MDR 2002) or the Software as a
            Medical Device (SaMD) framework.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            To be classified as a SaMD in the UK, software must be intended to
            be used for a medical purpose: diagnosis, prevention, monitoring,
            prediction, prognosis, treatment, or alleviation of disease. MEOK
            does not claim any of these functions. It is a sovereign AI companion
            for emotional support and personal growth.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not a loophole. It is an accurate description of what MEOK
            is. The decision not to pursue SaMD classification reflects the
            honest scope of MEOK\u2019s capabilities, not an attempt to avoid
            regulatory scrutiny.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            If MEOK were to evolve into a clinical intervention \u2014 claiming
            diagnostic accuracy, treatment efficacy, or clinical outcomes \u2014
            then regulatory classification would be appropriate and pursued.
            Until then, MEOK is clear: this is a companion, not a clinician.
          </p>

          {/* ── PROFESSIONAL HELP CALLOUT ── */}
          <div
            style={{
              background: redAlert,
              border: `1px solid ${redBorder}`,
              borderRadius: "12px",
              padding: "2rem",
              margin: "3rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "#e05555",
                marginBottom: "1rem",
              }}
            >
              When to seek professional help
            </p>
            <p
              style={{
                color: text,
                lineHeight: 1.75,
                fontWeight: 600,
                marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              Stop using AI support and contact a professional immediately if
              any of the following apply:
            </p>
            <ul
              style={{
                color: muted,
                lineHeight: 2.1,
                paddingLeft: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <li>You are having thoughts of suicide or self-harm</li>
              <li>You feel unable to keep yourself safe</li>
              <li>
                You are experiencing symptoms of psychosis (hearing voices,
                paranoia, losing touch with reality)
              </li>
              <li>
                You have been in persistent low mood or unable to function for
                more than two weeks
              </li>
              <li>
                You are using substances to cope with distress at a level that
                concerns you
              </li>
              <li>You have an eating disorder with physical health risks</li>
              <li>You are in an abusive or unsafe situation at home</li>
            </ul>
            <p
              style={{
                color: text,
                fontWeight: 700,
                marginBottom: "1rem",
                fontSize: "0.95rem",
              }}
            >
              UK resources:
            </p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {[
                {
                  name: "Samaritans",
                  detail:
                    "Call 116 123 (free, 24/7) or email jo@samaritans.org",
                  url: "https://www.samaritans.org",
                },
                {
                  name: "NHS 111",
                  detail:
                    "Call 111 and select the mental health option for urgent support",
                  url: "https://www.nhs.uk/service-search/mental-health/find-an-urgent-mental-health-support-service",
                },
                {
                  name: "BACP Therapist Directory",
                  detail:
                    "Find an accredited therapist near you at therapist-directory.bacp.co.uk",
                  url: "https://www.bacp.co.uk/search/Therapists",
                },
                {
                  name: "Crisis Text Line (Shout)",
                  detail:
                    "Text SHOUT to 85258 \u2014 free, 24/7 crisis support by text",
                  url: "https://www.giveusashout.org",
                },
                {
                  name: "Mind",
                  detail:
                    "Information on mental health, local services, and a legal helpline",
                  url: "https://www.mind.org.uk",
                },
                {
                  name: "Your GP",
                  detail:
                    "Your GP can refer you to NHS talking therapies (IAPT), community mental health teams, and emergency psychiatric services",
                  url: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/",
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
                    border: "1px solid rgba(220,60,60,0.2)",
                    borderRadius: "8px",
                    padding: "0.875rem 1rem",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontWeight: 700,
                      color: text,
                      fontSize: "0.9rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {resource.name}
                  </span>
                  <span style={{ color: muted, fontSize: "0.82rem" }}>
                    {resource.detail}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── FAQ SECTION ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1.5rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "grid", gap: "1.25rem" }}>

            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: text,
                  marginBottom: "0.75rem",
                }}
              >
                Is AI therapy safe?
              </h3>
              <p
                style={{
                  color: muted,
                  lineHeight: 1.75,
                  fontSize: "0.92rem",
                }}
              >
                AI-assisted emotional support is safe for everyday stress,
                reflection, and between-session journalling. It is not safe as
                a substitute for clinical treatment of severe depression,
                trauma, psychosis, or active suicidality. MEOK\u2019s Maternal
                Covenant includes a care-scoring layer that detects distress
                signals and signposts professional help rather than attempting
                to treat clinical conditions. Always seek a qualified therapist
                for presentations that go beyond everyday emotional support.
              </p>
            </div>

            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: text,
                  marginBottom: "0.75rem",
                }}
              >
                Can AI replace a therapist?
              </h3>
              <p
                style={{
                  color: muted,
                  lineHeight: 1.75,
                  fontSize: "0.92rem",
                }}
              >
                No. A qualified therapist holds a legal duty of care, can
                deliver evidence-based clinical interventions like CBT and
                EMDR, and can refer to crisis services. AI cannot do any of
                these things. AI can provide consistent emotional support, help
                you articulate feelings, and reduce distress between sessions
                \u2014 making it a genuine complement to therapy, not a
                replacement for it. Any AI product claiming otherwise is
                misrepresenting its capabilities.
              </p>
            </div>

            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: text,
                  marginBottom: "0.75rem",
                }}
              >
                How does MEOK know when to refer me to a professional?
              </h3>
              <p
                style={{
                  color: muted,
                  lineHeight: 1.75,
                  fontSize: "0.92rem",
                }}
              >
                MEOK uses a care-scoring system called the Maternal Covenant.
                Every response is evaluated against a harm-prevention framework
                before delivery. If your language signals clinical-level
                distress, risk of self-harm, or patterns consistent with
                conditions requiring diagnosis, MEOK will not attempt to
                counsel you \u2014 it will clearly signpost NHS urgent care,
                the BACP therapist directory, Samaritans, or the Crisis Text
                Line depending on the severity of the signal. This constraint
                cannot be overridden by user instruction.
              </p>
            </div>

            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: text,
                  marginBottom: "0.75rem",
                }}
              >
                What is the difference between counselling and AI support?
              </h3>
              <p
                style={{
                  color: muted,
                  lineHeight: 1.75,
                  fontSize: "0.92rem",
                }}
              >
                Counselling is a regulated clinical practice delivered by a
                trained, accredited professional who holds ethical obligations
                and legal accountability under BACP or UKCP frameworks. AI
                support is an unregulated conversational tool. Counselling can
                diagnose, treat, and hold duty of care. AI support can listen,
                reflect, track patterns, and be consistently present \u2014
                but cannot diagnose, treat, or bear legal responsibility for
                your care. When choosing a counsellor, always verify BACP or
                UKCP accreditation.
              </p>
            </div>

            <div
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: text,
                  marginBottom: "0.75rem",
                }}
              >
                Is MEOK regulated as a medical device?
              </h3>
              <p
                style={{
                  color: muted,
                  lineHeight: 1.75,
                  fontSize: "0.92rem",
                }}
              >
                No. MEOK is not a medical device and does not claim to
                diagnose, treat, or cure any mental health condition. It is a
                sovereign AI companion designed for emotional support,
                reflection, and personal growth. Under the MHRA\u2019s
                Software as a Medical Device framework, software must be
                intended for a medical purpose to qualify as a SaMD. MEOK
                makes no such claims and actively encourages users to seek
                qualified professional help when clinical need is present,
                with direct signposting to NHS services, BACP, and Samaritans.
              </p>
            </div>

          </div>

          {/* ── SECTION 11: Where MEOK fits ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            Where does MEOK fit in your mental health toolkit?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is not a therapy app. It does not pretend to be. It is a
            sovereign AI companion \u2014 built on the principle that you
            deserve consistent, honest, private support that is available when
            you need it, remembers who you are, and knows its own limits.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            In a functional mental health toolkit, MEOK occupies the space
            between clinical appointments and daily life. It is the 10pm
            check-in when you\u2019re spiralling after a difficult meeting. It
            is the pre-session journal that helps you articulate what you need
            from your therapist tomorrow. It is the consistent presence that
            notices you\u2019ve been using different language for the past three
            weeks and gently asks what\u2019s changed.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            If you are on an NHS waiting list, MEOK can hold you through the
            wait \u2014 not as a substitute for the care you\u2019re waiting
            for, but as a bridge that helps you not deteriorate before you reach
            the front of the queue.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            If you are in therapy, MEOK can make those sessions more productive.
            If you have a period of good mental health, MEOK can help you
            maintain it. If you are struggling in ways that go beyond what AI
            can safely support, MEOK will tell you so clearly and point you
            somewhere better.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            That honesty \u2014 knowing what MEOK is and is not \u2014 is the
            Maternal Covenant in practice.
          </p>

          {/* ── SECTION 12: Data sovereignty ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            What happens to what you share with MEOK?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            When you share something deeply personal \u2014 your fears, your
            history, your worst moments \u2014 who owns that information matters
            enormously. This is particularly true for mental health conversations.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is built on a data sovereignty architecture. Your memories and
            conversations are yours. They are not used to train AI models. They
            are not sold to third parties. They are not used to serve
            advertising. Nicholas Templeman built MEOK\u2019s memory system with
            the explicit principle that your data belongs to you and should
            remain portable, private, and under your control.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not the industry standard. Most large AI platforms use
            conversation data for model training by default. When you are
            sharing sensitive mental health information, the question of data
            sovereignty is not a technical footnote. It is a question of whether
            your most vulnerable moments are being used to train the next version
            of a commercial product.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK\u2019s answer is clear. Read the full{" "}
            <Link
              href="/blog/privacy-covenant"
              style={{ color: gold, textDecoration: "underline" }}
            >
              Privacy Covenant
            </Link>{" "}
            if you want to understand exactly how your data is handled.
          </p>

          {/* ── SECTION 13: How to choose ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            How should I choose between AI support and a therapist?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The honest answer is that the choice is not always yours to make
            freely. The UK mental health system limits access through waiting
            times and cost in ways that force many people into AI by necessity,
            not preference.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            If you can access a qualified therapist \u2014 through the NHS,
            through your employer\u2019s EAP, or privately \u2014 and you are
            dealing with significant mental health difficulties, please do so.
            AI is not a substitute for clinical care when clinical care is
            warranted and accessible.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            If you are on a waiting list, struggling with everyday stress,
            processing life transitions, or looking for consistent support
            between sessions, a well-designed AI companion like MEOK can
            provide genuine value.
          </p>

          <div
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "12px",
              padding: "1.75rem",
              margin: "1.5rem 0 2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: gold,
                marginBottom: "1.25rem",
              }}
            >
              Seek a qualified therapist if any of these apply
            </p>
            <ul
              style={{
                color: muted,
                lineHeight: 2.1,
                paddingLeft: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <li>
                You have been in significant distress for more than two weeks
              </li>
              <li>
                Your functioning at work or in relationships has been impaired
              </li>
              <li>You have experienced trauma that affects your daily life</li>
              <li>
                You are experiencing symptoms of a specific mental health
                condition
              </li>
              <li>You have thoughts of self-harm or suicide</li>
              <li>
                A previous therapist or GP has recommended clinical support
              </li>
              <li>AI support has not reduced your distress over several weeks</li>
            </ul>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: gold,
                marginBottom: "1.25rem",
              }}
            >
              AI support may be appropriate if
            </p>
            <ul
              style={{
                color: muted,
                lineHeight: 2.1,
                paddingLeft: "1.5rem",
                margin: 0,
              }}
            >
              <li>You want to process everyday stress and life challenges</li>
              <li>You are in therapy and want between-session support</li>
              <li>
                You are on a waiting list and need something while you wait
              </li>
              <li>
                You want to develop self-awareness and emotional intelligence
              </li>
              <li>
                You struggle to access therapy due to cost or availability
              </li>
              <li>
                You want consistent journalling and mood tracking with
                reflection
              </li>
            </ul>
          </div>

          {/* ── SECTION 14: Honest summary ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3.5rem 0 1rem",
            }}
          >
            The honest summary: AI companion vs therapist
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            A therapist is a trained, accountable, embodied human professional
            who can diagnose, treat, and hold legal duty of care. An AI
            companion is an always-available, memory-enabled, zero-cost
            conversational partner that can support reflection, regulation, and
            consistency between clinical appointments.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            These are not competing products. They occupy different spaces. The
            tragedy is that the UK mental health system \u2014 with its 18-week
            waits and \u00a380 sessions \u2014 has made them competing in
            practice for the millions who cannot access what they actually need.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK does not pretend to solve that. What MEOK does is occupy its
            space honestly: a sovereign AI companion, governed by the Maternal
            Covenant, that knows what it is and what it is not \u2014 and tells
            you so clearly.
          </p>
          <p style={{ color: muted, marginBottom: "1.5rem" }}>
            If that sounds like something that would help you, we\u2019d like
            you to try it.
          </p>

          {/* ── CTA ── */}
          <div
            style={{
              background: `${gold}10`,
              border: `1px solid ${gold}30`,
              borderRadius: "16px",
              padding: "2.5rem",
              margin: "3rem 0",
              textAlign: "center" as const,
            }}
          >
            <p
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: text,
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}
            >
              Meet your sovereign AI companion
            </p>
            <p
              style={{
                color: muted,
                lineHeight: 1.75,
                maxWidth: "480px",
                margin: "0 auto 2rem",
              }}
            >
              MEOK remembers you, tells you the truth, and knows exactly when
              to step back and point you to a professional. No waiting list.
              No \u00a380 sessions. Built with the Maternal Covenant at its core.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: gold,
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "0.875rem 2.5rem",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin with MEOK
            </Link>
          </div>

          {/* ── Related articles ── */}
          <div style={{ margin: "4rem 0 2rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: gold,
                marginBottom: "1.25rem",
              }}
            >
              Related reading
            </p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {[
                {
                  href: "/blog/maternal-covenant-explained",
                  label:
                    "The Maternal Covenant: How MEOK prevents harmful responses",
                },
                {
                  href: "/blog/what-is-care-based-ai",
                  label:
                    "What is care-based AI? The design philosophy behind MEOK",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  label: "Can AI help with anxiety? What the evidence says",
                },
                {
                  href: "/blog/ai-for-depression",
                  label:
                    "AI for depression: support, limits, and when to seek help",
                },
                {
                  href: "/blog/meok-vs-woebot",
                  label:
                    "MEOK vs Woebot: two different visions of AI mental health support",
                },
                {
                  href: "/blog/privacy-covenant",
                  label:
                    "MEOK\u2019s Privacy Covenant: why your mental health data is yours",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: "8px",
                    padding: "0.875rem 1.25rem",
                    color: muted,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Author ── */}
          <div
            style={{
              borderTop: `1px solid ${cardBorder}`,
              paddingTop: "2rem",
              marginTop: "3rem",
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: `${gold}20`,
                border: `2px solid ${gold}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontWeight: 900,
                color: gold,
                fontSize: "1.1rem",
              }}
            >
              NT
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: text,
                  marginBottom: "0.25rem",
                  fontSize: "0.95rem",
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  color: muted,
                  fontSize: "0.82rem",
                  marginBottom: "0.5rem",
                }}
              >
                Founder &amp; CEO, MEOK AI LABS &middot; @meok_ai
              </p>
              <p
                style={{
                  color: muted,
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                }}
              >
                Nicholas built MEOK over 40 days with the explicit goal of
                creating a sovereign AI companion that tells the truth, protects
                your data, and never pretends to be something it is not. The
                Maternal Covenant is his answer to the question: what would
                responsible AI care actually look like?
              </p>
            </div>
          </div>

        </article>
      </main>
    </>
  );
}
