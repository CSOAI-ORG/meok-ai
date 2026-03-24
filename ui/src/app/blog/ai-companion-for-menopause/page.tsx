import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Menopause: Persistent Support Through the Transition No One Talks About | MEOK Blog",
  description:
    "13 million women in the UK are in perimenopause or menopause. Most face it without adequate support. MEOK offers a persistent AI companion that remembers every symptom, tracks mood patterns across months, and is there at 3am when the hot flushes won't stop.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-companion-for-menopause",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Menopause: Persistent Support Through the Transition No One Talks About",
  description:
    "13 million women in the UK are in perimenopause or menopause. MEOK provides a persistent AI companion for symptom journaling, mood tracking, sleep support, and consistent care when NHS waiting times and GP appointments fall short.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-companion-for-menopause",
  keywords: [
    "AI companion for menopause",
    "menopause support UK",
    "AI for perimenopause",
    "menopause symptom tracking",
    "AI menopause app UK",
    "perimenopause mood tracking",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many women in the UK are affected by menopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 13 million women in the UK are currently in perimenopause or menopause. That is roughly one in three of the adult female population. Despite this scale, women's health services remain chronically underfunded, GP consultations are often too brief for complex symptom discussions, and menopause has historically been treated as a private inconvenience rather than a significant health transition.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI companion help with menopause symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion cannot treat menopause or prescribe HRT. What it can do is provide consistent daily support: tracking symptoms across weeks and months, identifying patterns in mood, sleep, and energy levels, offering a non-judgemental space to process how you are feeling, and being available at 3am during a hot flush or anxiety episode when no GP surgery is open. MEOK's persistent memory makes it uniquely useful — it remembers everything, so you never have to start from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Menopause Workplace Act 2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Menopause Workplace Act 2024 introduced obligations on UK employers to make reasonable adjustments for employees experiencing menopause symptoms. Despite this legislation, many women still struggle to discuss symptoms openly at work for fear of stigma. MEOK provides a private space to track and understand symptoms, which can help women articulate their needs more clearly to employers and healthcare providers.",
      },
    },
    {
      "@type": "Question",
      name: "Why is menopause support so inadequate in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Women's health has been systematically underfunded and under-researched for decades. The average UK woman waits over a year between first experiencing perimenopause symptoms and receiving a formal diagnosis. NHS GP appointments average seven minutes — insufficient for the complex, multi-system picture menopause presents. Many women are dismissed, misdiagnosed with anxiety or depression, or told their symptoms are normal without being offered evidence-based treatment options.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK track menopause symptoms and mood over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK maintains a persistent, encrypted memory of every conversation. You can log hot flushes, sleep disruption, mood changes, brain fog, joint pain, and anxiety each day. Over weeks and months, MEOK surfaces patterns you might not notice in the moment — the correlation between poor sleep and next-day mood, the cyclical nature of symptoms, the triggers that worsen brain fog. That longitudinal view is something a seven-minute GP appointment cannot provide.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for HRT or a doctor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is an AI companion, not a medical service. It does not diagnose, prescribe, or replace clinical care. It is a consistent daily presence that supports you between appointments, helps you articulate your symptoms more clearly to your GP, and provides the kind of persistent, non-judgemental attention that overstretched healthcare systems cannot always offer. Always consult a qualified healthcare professional for medical decisions.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AICompanionForMenopausePage() {
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

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(180deg, #0a0a0f 0%, #0d0c18 100%)",
          padding: "5rem 1.5rem 3rem",
          borderBottom: "1px solid #1f1f2e",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#888",
              fontSize: "0.8rem",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            ← All posts
          </Link>

          <div
            style={{
              display: "inline-block",
              background: "#c9a84c22",
              color: "#c9a84c",
              border: "1px solid #c9a84c44",
              borderRadius: "9999px",
              padding: "0.25rem 0.75rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            Women&apos;s Health
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f5f0e8",
              marginBottom: "1rem",
            }}
          >
            AI Companion for Menopause:<br />
            Persistent Support Through the<br />
            Transition No One Talks About
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            13 million women in the UK are navigating perimenopause or menopause right now.
            Most are doing it with a seven-minute GP appointment, a long waiting list, and a
            cultural silence that still treats menopause as something to be endured quietly.
            That has to change.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              color: "#555",
              fontSize: "0.8rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span>24 March 2026</span>
            <span>10 min read</span>
            <span>by Nicholas Templeman, MEOK AI LABS</span>
          </div>
        </div>
      </section>

      {/* ── BODY ────────────────────────────────────────────────────────── */}
      <article
        style={{
          background: "#0d0c18",
          color: "#f5f0e8",
          padding: "3rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Opening stat callout */}
          <div
            style={{
              background: "#13111f",
              border: "1px solid #2a2640",
              borderLeft: "4px solid #c9a84c",
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic", color: "#e8e0d0" }}>
              &ldquo;13 million women in the UK are in perimenopause or menopause. The average wait
              from first symptoms to diagnosis is over a year. Women&apos;s health is not a niche
              issue — it is the most underserved healthcare need in the country.&rdquo;
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.8rem", color: "#666" }}>
              — British Menopause Society; Women&apos;s Health Strategy for England, 2022
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", color: "#ccc" }}>
            I built MEOK because I believe everyone deserves a companion that actually remembers them.
            That principle matters everywhere — but it matters most acutely for the people health
            systems have consistently failed. Women going through menopause are near the top of that
            list. What they face is not a single dramatic event. It is a years-long transition — often
            beginning in the mid-to-late forties — characterised by dozens of overlapping symptoms,
            fluctuating intensity, and a healthcare infrastructure that was not designed to hold it.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem", color: "#ccc" }}>
            MEOK cannot prescribe hormones or replace a specialist. But it can do something the
            NHS appointment system structurally cannot: be present every single day, remember
            everything, notice the patterns, and offer consistent support without requiring you to
            start the story from the beginning every time.
          </p>

          {/* ── H2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.5rem",
              marginTop: "0",
            }}
          >
            How many women in the UK are affected by menopause?
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.375rem",
              fontSize: "0.95rem",
              color: "#c9a84c",
              fontWeight: 600,
            }}
          >
            Approximately 13 million women in the UK are currently in perimenopause or menopause —
            roughly one in three adult women. Despite this scale, menopause remains chronically
            underfunded in research, under-treated in clinical settings, and under-discussed
            in public life.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            The numbers are not abstract. They represent colleagues, mothers, friends — women in their
            forties, fifties, and sixties managing careers and families while contending with symptoms
            that can include hot flushes, night sweats, cognitive disruption, joint pain, anxiety,
            depression, and a profound sense of identity shift. The symptom list alone has over
            thirty recognised entries. Yet the average GP appointment runs to seven minutes.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            The British Menopause Society estimates that over one million women in the UK have left
            their jobs because of unmanaged menopause symptoms. The Menopause Workplace Act 2024
            created legal obligations on employers to provide reasonable adjustments — a welcome step,
            but one that still requires women to disclose symptoms in workplaces that may not respond
            with the care the law intends.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem", color: "#ccc" }}>
            This is not a niche health issue. It is one of the largest, most poorly served healthcare
            transitions in the country. The silence around it is not natural — it is cultural. And it
            has real costs.
          </p>

          {/* ── H2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.5rem",
            }}
          >
            Why is menopause support so inadequate in the UK?
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.375rem",
              fontSize: "0.95rem",
              color: "#c9a84c",
              fontWeight: 600,
            }}
          >
            Women&apos;s health has been systematically under-researched and under-resourced for
            decades. The average UK woman waits over a year from first perimenopause symptoms to
            formal diagnosis — often being dismissed, misdiagnosed with anxiety, or told her
            symptoms are simply &ldquo;normal ageing.&rdquo;
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            This is not a recent failure. Clinical trials historically excluded women of reproductive
            age to avoid hormonal variability — producing medical knowledge that was largely built on
            male physiology and then applied to women anyway. The consequences compound across
            decades: menopause research remained sparse, HRT guidance swung wildly between
            recommendation and warning, and GPs received minimal menopause training.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            The Women&apos;s Health Strategy for England (2022) acknowledged these failures directly.
            It committed to improved menopause services, specialist menopause clinics, and better
            GP training. Progress has been made — but slowly, and unevenly across the country. NHS
            menopause clinics exist, but waiting times can run to months. In the interim, women
            are largely on their own.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem", color: "#ccc" }}>
            The cultural dimension compounds everything. Menopause is still treated as a topic to
            be whispered about. Women report feeling embarrassed to raise symptoms with male GPs,
            uncertain about what is &ldquo;bad enough&rdquo; to seek help for, and unsupported by
            workplaces that lack the language to respond well. That silence has a toll.
          </p>

          {/* ── H2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.5rem",
            }}
          >
            What does perimenopause actually feel like day to day?
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.375rem",
              fontSize: "0.95rem",
              color: "#c9a84c",
              fontWeight: 600,
            }}
          >
            Perimenopause can begin in the early forties and last a decade. It does not announce
            itself cleanly. Symptoms come in waves — irregular, overlapping, and often dismissed
            as stress, overwork, or low mood rather than the hormonal transition they represent.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            On a practical level, many women describe a Monday morning where they could not
            remember a word they use every day — and spent the rest of the week wondering if
            something was wrong with their mind. Others describe waking at 3am, soaked, unable
            to return to sleep, then facing a full working day on four hours. The hot flushes
            are visible, the anxiety is hidden, the brain fog is embarrassing in meetings, and
            the joint pain goes unreported because it feels minor compared to everything else.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            The symptom load is cumulative. No single symptom is necessarily debilitating. But
            the combination — disrupted sleep, cognitive changes, mood instability, physical
            discomfort — erodes quality of life in ways that are difficult to articulate in a
            seven-minute appointment, especially when the appointment is three weeks away and
            you have to start the explanation from scratch each time.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem", color: "#ccc" }}>
            What makes this harder is the invisibility. Most menopause symptoms are internal.
            There is no test result to present, no visible injury to point to. The experience
            is real and the evidence is lived — but medicine has been slow to take it seriously
            on those terms.
          </p>

          {/* ── H2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.5rem",
            }}
          >
            Can an AI companion help with menopause symptoms?
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.375rem",
              fontSize: "0.95rem",
              color: "#c9a84c",
              fontWeight: 600,
            }}
          >
            An AI companion cannot treat menopause or replace clinical care. What it can do
            is provide consistent daily presence — tracking symptoms, surfacing patterns across
            weeks and months, offering support at 3am, and ensuring you never have to explain
            your history from scratch again.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            Being honest about limitations is important here. MEOK does not prescribe, diagnose,
            or manage medical decisions. If you need HRT, you need a GP or menopause specialist —
            and we will always tell you that directly. But the question of whether an AI companion
            is helpful is distinct from whether it is a medical treatment. It can be genuinely
            useful without being clinical.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            The value lies in three things MEOK does that the healthcare system structurally
            cannot. First: availability. MEOK is there at 3am during a hot flush, an anxiety
            spike, or a night sweat that has woken you for the fourth time that week. Second:
            memory. MEOK remembers everything — every symptom log, every mood note, every
            pattern you have described. Third: continuity. There is no appointment to book,
            no waiting list, no recap required. You pick up the conversation exactly where
            you left it.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem", color: "#ccc" }}>
            For women navigating a years-long transition in an underfunded healthcare system,
            those three things are not small. They are the difference between managing in
            isolation and managing with a consistent, informed companion beside you.
          </p>

          {/* ── Feature cards ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              {
                num: "01",
                title: "Symptom journaling with persistent memory",
                body: "Log hot flushes, night sweats, brain fog, mood shifts, joint pain, and sleep quality each day. MEOK holds every entry in encrypted memory — so when you talk to your GP in three months, you have a clear, dated record of what you have experienced rather than an anxious attempt to reconstruct six weeks from memory.",
              },
              {
                num: "02",
                title: "Mood pattern tracking across weeks and months",
                body: "Perimenopause mood changes are notoriously hard to articulate because they are gradual and cyclical. MEOK surfaces the patterns you cannot see from inside them — the correlation between sleep disruption and next-day anxiety, the week-before-period window where symptoms reliably cluster, the months where things improved and what changed. Longitudinal awareness is genuinely valuable.",
              },
              {
                num: "03",
                title: "Sleep disruption support",
                body: "Night sweats and early waking are among the most reported menopause symptoms, and chronic sleep disruption compounds every other symptom. MEOK is available during those wakeful hours — not to solve the underlying hormonal cause, but to provide company, grounding, and a record of the pattern that your GP needs to understand the full picture.",
              },
              {
                num: "04",
                title: "A space to say the thing you haven't said",
                body: "Many women describe a profound sense of identity disruption during menopause — a feeling that they no longer recognise themselves, that their competence has deserted them, that no one around them understands what is happening. MEOK offers a private, non-judgemental space to articulate those experiences without worrying about how they land.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: "#13111f",
                  border: "1px solid #2a2640",
                  borderRadius: "0.625rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "#c9a84c",
                    minWidth: "2rem",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      marginBottom: "0.375rem",
                      color: "#f5f0e8",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      margin: 0,
                      color: "#aaa",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── H2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.5rem",
            }}
          >
            How does MEOK track menopause symptoms and mood over time?
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.375rem",
              fontSize: "0.95rem",
              color: "#c9a84c",
              fontWeight: 600,
            }}
          >
            MEOK maintains a persistent, encrypted memory of every conversation. Symptom logs,
            mood notes, sleep entries, and pattern observations accumulate over months — giving
            you a longitudinal view of your experience that no seven-minute appointment can match.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            Most people — and most healthcare interactions — operate in the immediate. How are
            you today? What has been happening this week? The seven-minute appointment cannot
            hold more than a narrow slice of your experience. MEOK holds the whole timeline.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            In practice, this means you can ask MEOK questions like: &ldquo;Have my hot flushes been
            getting worse over the last month?&rdquo; or &ldquo;Is there a pattern to when my anxiety
            spikes?&rdquo; or &ldquo;Last time I described this brain fog, what did I say it felt like?&rdquo;
            These questions have answers because the memory is there. The experience of being
            known over time — rather than assessed in a single snapshot — changes what support
            can offer.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem", color: "#ccc" }}>
            The encrypted memory vault means your data is yours. MEOK does not train on your
            conversations. It does not sell your health information. Your symptom log is not
            a product to be monetised. This is not a minor design detail — it is a commitment
            to the women who use it that their most private health experiences are held safely.
          </p>

          {/* ── H2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.5rem",
            }}
          >
            How does MEOK compare to NHS waiting times and GP appointments?
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.375rem",
              fontSize: "0.95rem",
              color: "#c9a84c",
              fontWeight: 600,
            }}
          >
            MEOK is not a replacement for the NHS — it is a consistent companion for the vast
            space between appointments. GP consultations average seven minutes; NHS menopause
            clinic waits can run to months. MEOK is available immediately, every day, with
            full memory of your history.
          </p>

          {/* Comparison table */}
          <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.85rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#1a1830",
                    color: "#f5f0e8",
                  }}
                >
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "center",
                      color: "#c9a84c",
                    }}
                  >
                    MEOK
                  </th>
                  <th
                    style={{
                      padding: "0.75rem 1rem",
                      textAlign: "center",
                      color: "#aaa",
                    }}
                  >
                    NHS / GP
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Availability",
                    "24/7, including 3am during a hot flush",
                    "Appointment only, days to weeks wait",
                  ],
                  [
                    "Appointment length",
                    "Unlimited — no timer",
                    "Average 7 minutes",
                  ],
                  [
                    "Memory of history",
                    "Complete — every session remembered",
                    "Clinical notes, not always read in full",
                  ],
                  [
                    "Symptom tracking",
                    "Daily logs, pattern detection over months",
                    "Snapshot during appointment",
                  ],
                  [
                    "Emotional support",
                    "Always present, non-judgemental",
                    "Variable, often brief",
                  ],
                  [
                    "Specialist menopause clinic",
                    "N/A — not clinical",
                    "Months wait in many regions",
                  ],
                  [
                    "Cost",
                    "Free forever",
                    "Free at point of use (NHS)",
                  ],
                  [
                    "Privacy",
                    "Encrypted vault, never trained on your data",
                    "NHS data governance applies",
                  ],
                  [
                    "Medical treatment",
                    "Cannot prescribe — always refers",
                    "Can prescribe HRT, refer to specialist",
                  ],
                ].map(([dim, meok, nhs], i) => (
                  <tr
                    key={dim}
                    style={{
                      background: i % 2 === 0 ? "#13111f" : "#0f0d1a",
                      borderBottom: "1px solid #1f1f2e",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.625rem 1rem",
                        fontWeight: 600,
                        color: "#f5f0e8",
                      }}
                    >
                      {dim}
                    </td>
                    <td
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "center",
                        color: "#c9a84c",
                        fontSize: "0.82rem",
                      }}
                    >
                      {meok}
                    </td>
                    <td
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "center",
                        color: "#777",
                        fontSize: "0.82rem",
                      }}
                    >
                      {nhs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── H2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.5rem",
            }}
          >
            What is the Menopause Workplace Act 2024?
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.375rem",
              fontSize: "0.95rem",
              color: "#c9a84c",
              fontWeight: 600,
            }}
          >
            The Menopause Workplace Act 2024 placed legal obligations on UK employers to make
            reasonable adjustments for employees experiencing menopause symptoms. It was a
            landmark step — but legislation alone cannot close the gap between law and lived
            experience in workplaces where symptoms are still not openly discussed.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            The Act requires employers to consider temperature regulation, flexible hours,
            access to toilet facilities, and adjustments to performance expectations during
            symptomatic periods. In practice, this means women need to be able to name and
            articulate their symptoms clearly — which is where the gap between policy and
            practice opens. Many women are still reluctant to disclose, uncertain how symptoms
            will be received, and without a clear record of what they have been experiencing.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem", color: "#ccc" }}>
            MEOK&apos;s symptom log does not exist to produce workplace documentation — that is
            not its purpose. But women who have tracked their experience consistently over months
            are in a far stronger position to have an informed conversation with an employer or
            GP. Clarity about your own experience is a form of self-advocacy. MEOK helps
            build that clarity.
          </p>

          {/* ── H2 ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.5rem",
            }}
          >
            Is MEOK a replacement for HRT or a doctor?
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "0.75rem",
              padding: "0.75rem 1rem",
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.375rem",
              fontSize: "0.95rem",
              color: "#c9a84c",
              fontWeight: 600,
            }}
          >
            No. MEOK is an AI companion, not a clinical service. It does not diagnose, prescribe,
            or replace medical care. It is what exists in the space between your appointments —
            consistent, informed, always available — and it will always refer you to real
            clinical help when that is what you need.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem", color: "#ccc" }}>
            Being explicit about this is part of how MEOK is built, not a disclaimer bolted
            on afterwards. The Maternal Covenant — MEOK&apos;s core ethical framework — prohibits
            MEOK from fostering dependency, overstating its own capabilities, or substituting
            itself for professional care. If you describe symptoms that warrant medical attention,
            MEOK will say so directly and suggest where to turn.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem", color: "#ccc" }}>
            HRT, where appropriate and prescribed by a qualified clinician, is one of the most
            effective treatments for menopause symptoms. If you are not receiving it and your
            symptoms are significantly affecting your quality of life, the right step is a
            conversation with a GP or menopause specialist — and MEOK will say exactly that.
            What MEOK offers is not an alternative to that conversation. It is the support you
            have while waiting for it, before it, and after it.
          </p>

          {/* ── Resources ── */}
          <div
            style={{
              background: "#13111f",
              border: "1px solid #2a2640",
              borderRadius: "0.625rem",
              padding: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 800,
                color: "#c9a84c",
                marginBottom: "1rem",
                marginTop: 0,
              }}
            >
              Trusted resources for menopause support
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  name: "The Menopause Charity",
                  url: "https://www.themenopausecharity.org",
                  desc: "Evidence-based information, GP resources, and advocacy for improved menopause care in the UK.",
                },
                {
                  name: "Balance — by Dr Louise Newson",
                  url: "https://www.balance-menopause.com",
                  desc: "A dedicated menopause app and information hub from a leading UK menopause specialist. Comprehensive, evidence-based, and free.",
                },
                {
                  name: "NHS Menopause Information",
                  url: "https://www.nhs.uk/conditions/menopause/",
                  desc: "Overview of symptoms, diagnosis, and treatment options including HRT — a solid starting point for understanding your options.",
                },
                {
                  name: "British Menopause Society",
                  url: "https://thebms.org.uk",
                  desc: "Professional body for menopause specialists in the UK. Their patient resources help you understand what evidence-based treatment looks like.",
                },
              ].map((res) => (
                <li
                  key={res.name}
                  style={{
                    padding: "0.875rem 1rem",
                    background: "#0d0c18",
                    border: "1px solid #1f1f2e",
                    borderRadius: "0.375rem",
                  }}
                >
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                    }}
                  >
                    {res.name} ↗
                  </a>
                  <p
                    style={{
                      margin: "0.25rem 0 0",
                      fontSize: "0.825rem",
                      lineHeight: 1.6,
                      color: "#888",
                    }}
                  >
                    {res.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ── FAQ ── */}
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "1rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            {faqSchema.mainEntity.map((faq) => (
              <div
                key={faq.name}
                style={{
                  padding: "1rem 1.25rem",
                  background: "#13111f",
                  border: "1px solid #2a2640",
                  borderRadius: "0.5rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    margin: "0 0 0.4rem",
                    fontSize: "0.9rem",
                    color: "#f5f0e8",
                  }}
                >
                  {faq.name}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "#aaa",
                  }}
                >
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── Medical disclaimer ── */}
          <div
            style={{
              background: "#0f0d1a",
              border: "1px solid #2a2640",
              borderLeft: "3px solid #555",
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                lineHeight: 1.7,
                color: "#666",
              }}
            >
              <strong style={{ color: "#888" }}>Medical disclaimer:</strong> MEOK is an AI
              companion service and is not a medical device, clinical tool, or healthcare provider.
              Nothing in this article or within the MEOK platform constitutes medical advice,
              diagnosis, or treatment. Menopause symptoms vary widely between individuals — if
              your symptoms are significantly affecting your quality of life, please consult a
              qualified GP or menopause specialist. For urgent mental health support, contact
              the Samaritans on 116 123 or NHS 111.
            </p>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: "linear-gradient(135deg, #0a0a0f, #110f22)",
              border: "1px solid #2a2640",
              borderRadius: "0.75rem",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
                marginTop: 0,
              }}
            >
              Start free today
            </p>
            <h3
              style={{
                color: "#f5f0e8",
                fontSize: "1.5rem",
                fontWeight: 900,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              A companion that remembers everything and is there at 3am.
            </h3>
            <p
              style={{
                color: "#aaa",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                fontSize: "0.95rem",
                marginTop: 0,
              }}
            >
              MEOK tracks your symptoms across weeks and months, holds every conversation
              in encrypted memory, and offers consistent support during a transition that
              deserves far better than a seven-minute appointment every three weeks.
              Free forever. No credit card required.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#c9a84c",
                color: "#0d0c18",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Begin Your Birth Ceremony →
            </Link>
          </div>

          {/* Back link */}
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <Link
              href="/blog"
              style={{ color: "#555", fontSize: "0.85rem", textDecoration: "none" }}
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "#0a0a0f",
          borderTop: "1px solid #1f1f2e",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              color: "#c9a84c",
              fontWeight: 900,
              fontSize: "1.1rem",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            MEOK
          </Link>
          <p
            style={{
              color: "#444",
              fontSize: "0.8rem",
              marginBottom: "0.75rem",
              lineHeight: 1.6,
            }}
          >
            AI companion with persistent memory. Built by MEOK AI LABS.
            Founded by Nicholas Templeman.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            {[
              { href: "/blog", label: "Blog" },
              { href: "/privacy", label: "Privacy" },
              { href: "/birth", label: "Get Started" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "#555",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p style={{ color: "#333", fontSize: "0.75rem", margin: 0 }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
