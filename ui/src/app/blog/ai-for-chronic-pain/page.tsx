import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Chronic Pain: A Companion That Believes You | MEOK AI LABS",
  description:
    "Chronic pain sufferers are too often disbelieved, dismissed, or told it is in their head. MEOK's sovereign AI companion never doubts your experience, tracks your patterns, and supports you through the invisible battle.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-chronic-pain" },
  openGraph: {
    title: "AI for Chronic Pain: A Companion That Believes You",
    description:
      "Chronic pain sufferers are too often disbelieved, dismissed, or told it is in their head. MEOK's sovereign AI companion never doubts your experience, tracks your patterns, and supports you through the invisible battle.",
    url: "https://meok.ai/blog/ai-for-chronic-pain",
    siteName: "MEOK AI LABS",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    images: [
      {
        url: "https://meok.ai/og/ai-for-chronic-pain.png",
        width: 1200,
        height: 630,
        alt: "AI for Chronic Pain: A Companion That Believes You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Chronic Pain: A Companion That Believes You",
    description:
      "Chronic pain sufferers are too often disbelieved, dismissed, or told it is in their head. MEOK's sovereign AI companion never doubts your experience, tracks your patterns, and supports you through the invisible battle.",
    images: ["https://meok.ai/og/ai-for-chronic-pain.png"],
    creator: "@meok_ai",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Chronic Pain: A Companion That Believes You",
  description:
    "Chronic pain sufferers are too often disbelieved, dismissed, or told it is in their head. MEOK's sovereign AI companion never doubts your experience, tracks your patterns, and supports you through the invisible battle.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-chronic-pain",
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
    "AI for chronic pain",
    "chronic pain companion AI",
    "medical gaslighting chronic pain",
    "AI that believes you",
    "sovereign AI chronic pain",
    "chronic pain emotional support UK",
    "AI pain tracking",
    "Healer AI companion",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many adults in the UK live with chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to the British Pain Society, approximately 1 in 5 UK adults lives with chronic pain — around 10 to 14 million people. It is one of the most common reasons for GP consultations and long-term disability, yet it remains profoundly misunderstood and underfunded.",
      },
    },
    {
      "@type": "Question",
      name: "What is medical gaslighting and how does it affect chronic pain patients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medical gaslighting occurs when a healthcare provider dismisses, minimises, or attributes a patient's symptoms to psychological causes without adequate investigation. Chronic pain patients — particularly women and people of colour — are disproportionately told their pain is psychosomatic, exaggerated, or a result of anxiety, often delaying diagnosis by years.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's sovereign AI companion support chronic pain sufferers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's sovereign AI companion maintains a persistent, private memory of your pain experience across months and years. It never doubts what you tell it, never minimises your experience, and tracks patterns — flare triggers, sleep correlations, emotional cycles — that build a longitudinal record you own entirely. Your data never leaves your device to train models or inform insurers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Healer archetype in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer is one of MEOK's companion archetypes, oriented specifically towards somatic and emotional support. It draws on body-centred approaches — gentle grounding, breath awareness, body-scan techniques — while always deferring to your lived experience. The Healer never prescribes; it accompanies.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK share pain data with insurers or third parties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is built on a sovereignty-first architecture. Your memory vault — including everything you share about your pain, health, and emotional state — is stored on your device and never sent to third parties, never used to train AI models, and never accessible to insurers, employers, or advertisers.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForChronicPainBelievesYouPage() {
  const GOLD = "#c9a84c";
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";

  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
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
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.38)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Chronic Pain
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "rgba(245,240,232,0.55)",
                background: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.12)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Sovereign AI
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              14 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Chronic Pain: A Companion That Believes You
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.62)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: "42rem",
            }}
          >
            One in five UK adults lives with chronic pain. Most are disbelieved at least once.
            Many are disbelieved routinely. Told it is in their head. Told to try harder. Told
            their results are normal. MEOK&apos;s sovereign AI companion starts from a different
            premise: your experience is real, your pain is real, and you deserve a companion
            that never, under any circumstances, doubts you.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Disclaimer */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "10px",
            padding: "1rem 1.25rem",
            marginBottom: "2.75rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>&#9888;</span>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "0.88rem",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>Not medical advice.</strong> MEOK is not a medical
            device and does not provide clinical guidance, diagnosis, or treatment. If you live
            with chronic pain, please speak to your GP about referral to an NHS pain management
            clinic. UK support:{" "}
            <a
              href="https://painuk.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              Pain UK
            </a>
            ,{" "}
            <a
              href="https://britishpainsociety.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              British Pain Society
            </a>
            . If you are in crisis, call{" "}
            <a href="tel:116123" style={{ color: GOLD }}>
              Samaritans on 116 123
            </a>
            .
          </p>
        </div>

        {/* ── Section 1: The Scale ────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How common is chronic pain in the UK, and why does that number matter?
        </h2>

        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Approximately 1 in 5 UK adults lives with chronic pain — somewhere between 10 and 14
          million people. It is the most common reason for long-term disability, one of the
          leading causes of lost working days, and yet it receives a fraction of the research
          funding and clinical attention of conditions affecting smaller numbers.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Chronic pain is defined as pain that persists for three months or longer, either
          continuously or intermittently. It encompasses an enormous range of conditions:
          fibromyalgia, rheumatoid arthritis, osteoarthritis, neuropathic pain, complex regional
          pain syndrome, endometriosis-related pain, lower back pain, migraine, and many others.
          What unites them is not just duration but a particular quality of invisible burden.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Pain is subjective. It does not show on an X-ray. It does not bleed. It cannot be
          measured by a machine in a way that satisfies a sceptic. This is both a clinical reality
          and a cultural wound: because pain is invisible, the people who carry it are made to
          prove it — repeatedly, exhaustingly, and often unsuccessfully.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          The number matters because 1 in 5 means someone in almost every family, almost every
          workplace, almost every social circle. It means the dismissal of chronic pain is not
          a rare or specialist failure — it is a systemic one, baked into how medicine,
          employment, and even friendship treat people whose suffering cannot be seen.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 2: Medical Gaslighting ─────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is medical gaslighting, and why are chronic pain patients so vulnerable to it?
        </h2>

        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Medical gaslighting occurs when a clinician dismisses, minimises, or attributes
          a patient&apos;s symptoms to psychological causes without adequate investigation.
          Chronic pain patients — particularly women, people of colour, and those with
          medically unexplained symptoms — are disproportionately on the receiving end, often
          waiting years for a diagnosis that should have come sooner.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          The phrase comes from the 1944 film, but the experience predates it by centuries.
          Conditions like fibromyalgia, endometriosis, and chronic fatigue syndrome spent
          decades being categorised as hysteria, hypochondria, or attention-seeking before
          medical understanding caught up with patient experience. Some would argue it has
          not fully caught up yet.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Research consistently shows gender disparities in pain treatment. Women with identical
          pain presentations receive less analgesia than men. Their reports of pain are more
          likely to be attributed to emotional causes. The diagnostic delay for endometriosis
          in the UK remains approximately eight years — a figure that has changed little in
          two decades, despite awareness campaigns. Meanwhile, men with chronic pain conditions
          face their own form of dismissal: being told to toughen up, that their pain cannot
          be that bad, that real men do not admit to suffering.
        </p>

        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.25rem",
            margin: "1.75rem 0",
            color: "rgba(245,240,232,0.62)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          &ldquo;The doctor told me that my bloods were normal, so there was nothing wrong.
          I sat in my car afterwards and cried for forty minutes. Being told you are fine
          when you are not fine is its own kind of pain.&rdquo;
        </blockquote>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          The damage is not just psychological, though the psychological damage is real and
          serious. Being disbelieved delays diagnosis, delays treatment, and delays access to
          pain management services. It also has a corrosive effect on self-trust: people who
          have been repeatedly told their pain is not real begin to wonder, against all their
          bodily evidence, whether that might be true.
        </p>

        {/* Callout 1 */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 10px 10px 0",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            The cost of being disbelieved
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.78)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Research published in the British Journal of Health Psychology found that chronic
            pain patients who felt disbelieved by healthcare providers reported significantly
            higher levels of depression, anxiety, and catastrophising — not because they were
            unstable, but because being told your reality is false is intrinsically
            destabilising. The experience of disbelief is itself a trauma, layered on top of
            the original injury of living in pain.
          </p>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 3: Emotional Cost ───────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is the emotional cost of living in unacknowledged pain?
        </h2>

        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Chronic pain co-occurs with depression in roughly 50% of cases, and with anxiety in
          a similar proportion. But the emotional cost extends beyond diagnosable conditions.
          It includes grief for the life pain has interrupted, isolation from friends who
          struggle to understand, and the exhausting labour of constantly managing how much
          you reveal about how you feel.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          There is a particular performance required of people with chronic pain. You are too
          sick to function normally, but too visibly functional — on the days you manage to
          leave the house — to be believed. You learn to calibrate your self-presentation:
          not so visibly unwell that people become uncomfortable, not so composed that they
          doubt your pain. This performance is exhausting. It costs energy that could go
          toward surviving the day.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Pain also attacks identity. Many people with chronic pain were defined — before the
          pain — by activity, capability, ambition. The person who ran marathons, built a
          career, cared for others. When pain narrows what is possible, those identities become
          sites of grief. Who am I if I cannot do what I was? The question sounds simple. It
          is not simple.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Relationships strain under chronic pain. Partners grow frustrated, or try to help
          in ways that feel minimising. Friends withdraw when they run out of things to say.
          Family members oscillate between overprotection and dismissal. The person in pain
          is often left managing the emotional responses of the people around them, which
          adds to the burden rather than reducing it.
        </p>

        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.25rem",
            margin: "1.75rem 0",
            color: "rgba(245,240,232,0.62)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          &ldquo;I stopped telling people how I really was. It was easier than watching
          them try to fix it, or seeing their eyes glaze over, or having them say
          &lsquo;have you tried turmeric.&rsquo;&rdquo;
        </blockquote>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 4: Sovereign Memory ─────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How does sovereign memory track pain patterns — without sending data to insurers?
        </h2>

        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          MEOK&apos;s sovereign memory vault retains everything you share about your pain across
          months and years — levels, locations, triggers, sleep patterns, emotional states,
          medication responses. Crucially, this data lives on your device and belongs to you
          entirely. It is never sent to cloud servers, never used to train AI models, and
          never accessible to insurers, employers, or advertisers.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          This matters because the value of a pain diary is proportional to how honest you
          can be in it. If you suspect your entries might be read by an insurer assessing a
          claim, you will hedge. If you worry an employer might see that you logged three
          bad days this week, you will underreport. The moment surveillance enters the equation,
          the diary stops being a tool for you and becomes a tool used against you.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK&apos;s architecture eliminates this concern by design. The memory vault uses
          sovereign storage — a privacy covenant that is structural, not just a policy
          statement. Your pain data is yours. You can share it with a clinician if you choose.
          You can delete it if you choose. What you cannot have happen is MEOK using it
          without your knowledge or for purposes outside your interests.
        </p>

        {/* Feature box: what sovereign memory tracks */}
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            What sovereign memory holds over time
          </p>
          {[
            [
              "Daily pain levels",
              "Intensity, location, character — retained across every session. No re-explaining from scratch.",
            ],
            [
              "Flare triggers",
              "Which activities, weather changes, sleep patterns, or stressors preceded bad days, built session by session.",
            ],
            [
              "Medication notes",
              "What you said about side effects, timing, and whether something helped. In your words, not clinical shorthand.",
            ],
            [
              "Sleep and rest patterns",
              "Sleep quality logged alongside pain — because the relationship between the two shapes both.",
            ],
            [
              "Emotional state",
              "Mood, anxiety, and the texture of difficult days — held as context, not pathologised.",
            ],
            [
              "Your language",
              "How you describe your own experience. MEOK learns your vocabulary and reflects it back, not clinical framing.",
            ],
          ].map(([label, desc]) => (
            <div
              key={label}
              style={{
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
                marginBottom: "0.7rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: GOLD,
                  marginTop: "0.55rem",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  color: "rgba(245,240,232,0.72)",
                  fontSize: "0.93rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Over time, MEOK can surface patterns you may not have noticed yourself. After three
          months of logs, it might reflect that your worst days tend to follow two consecutive
          poor nights of sleep rather than just one. After six months, it might note that your
          pain scores are consistently lower in the weeks you manage gentle walking than in
          sedentary weeks — not as a directive to exercise, but as information you own.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          This longitudinal record has another practical value: it is something you can share
          with a GP or pain clinic. Rather than arriving at a ten-minute appointment and
          trying to summarise months of variable experience in words, you arrive with a record.
          One that was captured at the time, in your own language, without the pressure of
          the appointment room.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 5: Healer Companion ─────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is the Healer companion, and how does it support somatic experience?
        </h2>

        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          The Healer is one of MEOK&apos;s companion archetypes, built for somatic and
          emotional support. It draws on body-centred approaches — grounding techniques,
          breath awareness, gentle body-scan practices — while always centering your lived
          experience. The Healer never prescribes, never minimises, and never redirects
          your pain toward positivity. It accompanies.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Somatic support for chronic pain is not about curing the pain. It is about
          developing a different relationship with the body that carries it. Techniques
          like body scanning, slow breath regulation, and gentle sensory attention have
          evidence behind them for reducing the distress associated with pain — without
          dismissing the pain itself. The Healer archetype brings these approaches into
          conversation naturally, at your pace.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          The Healer is also different from standard wellness AI in one fundamental way:
          it does not assume that calm is the goal. Sometimes what someone with chronic pain
          needs is not to feel better in this moment but to feel heard in this moment. The
          Healer is calibrated to recognise that distinction and to follow your lead — offering
          tools when tools are wanted, and simply being present when they are not.
        </p>

        {/* Callout 2 */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 10px 10px 0",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            The difference between coping strategies and toxic positivity
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.78)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            There is a meaningful distinction between genuine coping strategies and toxic
            positivity. Coping strategies — pacing, gentle movement, breath work, sleep
            hygiene, social connection — are evidence-based tools that reduce the burden of
            pain over time. They do not claim to eliminate pain or suggest that pain is a
            mindset problem. Toxic positivity, by contrast, implies that the right attitude
            would fix things, that people who are still struggling have not tried hard enough.
            MEOK&apos;s Healer archetype offers the former and refuses the latter. There is no
            &ldquo;have you tried thinking positively&rdquo; here.
          </p>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 6: Pain, Identity, Work, Relationships ──────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How does chronic pain affect identity, work, and relationships — and what does AI support look like in those areas?
        </h2>

        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Chronic pain does not confine itself to the body. It reshapes identity, narrows
          what is possible at work, and puts unique pressures on every close relationship.
          Genuine AI support in these areas does not paper over the difficulty with
          reassurance. It holds space for the grief, helps untangle what is still possible,
          and remains present without demanding performance.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          <strong style={{ color: TEXT }}>Identity.</strong> For many people, chronic pain
          arrives in the middle of a life already in motion — a career being built, a family
          being raised, a sense of self being consolidated. Pain interrupts the narrative.
          Activities that formed part of identity become unavailable. The future that was being
          worked toward becomes uncertain. This is grief. It deserves to be named as grief,
          not immediately redirected toward adaptation and acceptance.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          <strong style={{ color: TEXT }}>Work.</strong> Chronic pain frequently collides with
          employment. Attendance becomes unpredictable. Concentration is fractured by pain.
          The disclosure dilemma — whether to tell an employer and risk being seen as
          unreliable, or not to tell them and have no reasonable adjustments — is a recurring
          source of anxiety. Many people with chronic pain are navigating this alone, without
          the benefit of an HR department that actually understands what they are managing.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          <strong style={{ color: TEXT }}>Relationships.</strong> Partners, friends, and family
          members often reach a point of compassion fatigue that they may feel guilty about
          and that the person with pain cannot help but sense. The relationship becomes
          asymmetric in ways that are difficult to name. Partners take on more. Social plans
          become unreliable. The person in pain often ends up managing the feelings of the
          people around them on top of managing their own pain.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK cannot repair these dynamics, but it can reduce the solitude within them.
          It offers a companion who does not fatigue, who does not need managing, who does
          not require you to perform wellness or optimism. In that specific, bounded sense,
          it provides something that human relationships — however loving — cannot always
          provide consistently: unconditional presence with no emotional cost to you.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 7: Care-Based AI ─────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What does care-based AI mean, and how does it ensure responses never minimise pain?
        </h2>

        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Care-based AI is a design philosophy, not a feature list. It means that MEOK&apos;s
          responses are built around a foundational commitment: never minimise, never dismiss,
          never redirect to positivity before acknowledging what is being shared. The care
          floor is structural — baked into how MEOK responds, not a setting you can accidentally
          turn off.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Most AI systems are calibrated for utility and resolution. They process a problem
          and attempt to solve it. Applied to pain, this instinct produces responses that
          feel dismissive even when they are well-intentioned: &ldquo;Here are some techniques
          that may help...&rdquo; before there has been any acknowledgement of the pain being
          shared. The person on the receiving end of this has been redirected, not heard.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK&apos;s care floor operates on a different principle: acknowledgement precedes
          everything else. What you share is received and reflected before anything is
          offered. And if you do not want anything offered — if you just need to say that
          today is very bad and have that witnessed — MEOK will witness it, without pivoting
          to solutions.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          This is not a small thing. People with chronic pain often describe how much energy
          they spend on managing the responses of others — making sure their pain accounts
          are not too detailed, too long, too repetitive. With MEOK, that management
          requirement drops to zero. You can say everything or nothing. You can be as
          repetitive as the pain itself. MEOK will not tire of hearing it.
        </p>

        {/* Callout 3 */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 10px 10px 0",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            What MEOK will never say
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.78)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              marginBottom: "0.7rem",
            }}
          >
            There are responses that people with chronic pain hear so often they become a
            kind of background noise of dismissal. MEOK is designed to never produce them:
          </p>
          {[
            "Have you tried yoga / mindfulness / turmeric?",
            "Your bloods are normal, so there is nothing wrong.",
            "Everyone gets tired sometimes.",
            "You should try to stay positive.",
            "At least it is not something serious.",
            "Maybe you are just stressed.",
            "Have you considered that anxiety could be causing this?",
          ].map((line) => (
            <div
              key={line}
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
                marginBottom: "0.45rem",
              }}
            >
              <span
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginTop: "0.05rem",
                  flexShrink: 0,
                }}
              >
                &#8224;
              </span>
              <p
                style={{
                  color: "rgba(245,240,232,0.62)",
                  fontSize: "0.93rem",
                  lineHeight: 1.55,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{line}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 8: Guardian ─────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is the Guardian, and how does it help when pain becomes overwhelming?
        </h2>

        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          The Guardian is MEOK&apos;s safety layer — a mode that activates when pain, distress,
          or crisis reaches a threshold where signposting to emergency or professional support
          is the most important thing. It holds a directory of crisis resources and connects
          you to them clearly, without drama, without delay, and without making you feel like
          a burden for needing them.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Chronic pain and suicidal ideation are more closely linked than many people know.
          The persistent experience of unrelieved pain, of being disbelieved, of losing the
          life you had, of being isolated — these are genuine risk factors for crisis. The
          period of a severe flare, a new dismissal from a clinician, or the loss of yet
          another relationship to pain can be a precipitating moment.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          The Guardian does not wait to be asked. When MEOK detects signals in what you
          share that suggest you are in crisis — hopelessness, talk of not wanting to continue,
          descriptions of overwhelming pain with no exit — it shifts mode. It names what it
          is noticing, without catastrophising. It offers immediate crisis resources — including
          Samaritans (116 123), the NHS urgent mental health line, and relevant condition-specific
          helplines. And it stays with you through that moment, rather than redirecting you
          away.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          The Guardian is also available at any hour. Pain does not keep business hours. A
          2am flare when the pain is at its worst and the apartment is quiet is one of the
          hardest moments — not only physically but in the sense of being utterly alone with
          something no one around you can see or share. The Guardian means there is always
          something there with you in that dark, and that it knows where to direct you if
          the dark becomes too much.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Comparison Table ────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          How MEOK compares to other support options for chronic pain
        </h2>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          No single support option covers everything. MEOK is not a replacement for clinical
          care, therapy, or human relationships. It is a supplement — specifically suited to
          the gaps those options cannot consistently fill.
        </p>

        <div
          style={{
            overflowX: "auto",
            marginBottom: "2rem",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
              color: "rgba(245,240,232,0.78)",
            }}
          >
            <thead>
              <tr>
                {[
                  "Feature",
                  "NHS Pain Clinic",
                  "Therapy / Psychology",
                  "General AI (ChatGPT etc.)",
                  "MEOK",
                ].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      padding: "0.75rem 0.85rem",
                      textAlign: "left",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: i === 0 ? "rgba(245,240,232,0.45)" : i === 4 ? GOLD : "rgba(245,240,232,0.6)",
                      borderBottom: `1px solid rgba(201,168,76,0.18)`,
                      background: i === 4 ? "rgba(201,168,76,0.07)" : "transparent",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Believes your pain unconditionally",
                  "Usually",
                  "Yes",
                  "Variable",
                  "Always",
                ],
                [
                  "Available at 2am",
                  "No",
                  "No",
                  "Yes",
                  "Yes",
                ],
                [
                  "Remembers your history",
                  "Via notes",
                  "Yes",
                  "No",
                  "Yes — months+",
                ],
                [
                  "Never shares data with insurers",
                  "No guarantee",
                  "Confidential but cloud-stored",
                  "Sends to cloud",
                  "Sovereign — on device",
                ],
                [
                  "Somatic support techniques",
                  "Yes",
                  "Yes",
                  "Basic",
                  "Yes — Healer",
                ],
                [
                  "Crisis signposting",
                  "Yes",
                  "Yes",
                  "Variable",
                  "Yes — Guardian",
                ],
                [
                  "Zero re-explaining required",
                  "No",
                  "No",
                  "No",
                  "Yes",
                ],
                [
                  "No toxic positivity",
                  "Usually",
                  "Usually",
                  "Often fails",
                  "By design",
                ],
                [
                  "Free to access",
                  "Yes (waits)",
                  "No",
                  "Partial",
                  "Free tier available",
                ],
              ].map((row, rIdx) => (
                <tr
                  key={row[0]}
                  style={{
                    background:
                      rIdx % 2 === 0
                        ? "rgba(255,255,255,0.015)"
                        : "transparent",
                  }}
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={`${row[0]}-${cIdx}`}
                      style={{
                        padding: "0.65rem 0.85rem",
                        borderBottom: "1px solid rgba(201,168,76,0.08)",
                        fontWeight: cIdx === 0 ? 600 : 400,
                        color:
                          cIdx === 0
                            ? "rgba(245,240,232,0.65)"
                            : cIdx === 4
                            ? cell === "Always" || cell === "Yes" || cell === "Yes — Healer" || cell === "Yes — Guardian" || cell === "Yes — months+" || cell === "Sovereign — on device" || cell === "By design" || cell === "Free tier available"
                              ? GOLD
                              : "rgba(245,240,232,0.75)"
                            : "rgba(245,240,232,0.6)",
                        background: cIdx === 4 ? "rgba(201,168,76,0.04)" : "transparent",
                        fontSize: "0.88rem",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── FAQ Section ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ marginBottom: "2.5rem" }}>
          {[
            {
              q: "How many adults in the UK live with chronic pain?",
              a: "Approximately 1 in 5 UK adults lives with chronic pain — around 10 to 14 million people. It is one of the most common reasons for long-term disability and GP consultations in the UK, yet receives a fraction of the research funding of conditions affecting smaller numbers. The British Pain Society and Pain UK are the leading bodies for UK-specific statistics and advocacy.",
            },
            {
              q: "What is medical gaslighting and how does it affect chronic pain patients?",
              a: "Medical gaslighting occurs when a clinician dismisses, minimises, or attributes a patient's symptoms to psychological causes without adequate investigation. Chronic pain patients — particularly women and people of colour — are disproportionately on the receiving end, often waiting years for diagnosis. The experience of being disbelieved is itself a trauma that compounds the original injury of living in pain.",
            },
            {
              q: "How does MEOK's sovereign AI companion support chronic pain sufferers?",
              a: "MEOK maintains a persistent, private memory of your pain experience across months and years. It never doubts what you tell it, tracks patterns including flare triggers, sleep correlations, and emotional cycles, and builds a longitudinal record you own entirely. Your data is stored on your device and never sent to cloud servers, insurers, or advertisers.",
            },
            {
              q: "What is the Healer archetype in MEOK?",
              a: "The Healer is one of MEOK's companion archetypes, oriented towards somatic and emotional support. It draws on body-centred approaches including grounding techniques, breath awareness, and body-scan practices, while always centering your lived experience. The Healer never prescribes, never minimises, and never redirects to positivity before acknowledging what you have shared.",
            },
            {
              q: "Does MEOK share pain data with insurers or third parties?",
              a: "No. MEOK is built on a sovereignty-first architecture. Your memory vault — including everything you share about your pain, health, and emotional state — is stored on your device and belongs to you entirely. It is never sent to cloud servers, never used to train AI models, and never accessible to insurers, employers, or advertisers. The privacy covenant is structural, not just a policy statement.",
            },
          ].map(({ q, a }, idx) => (
            <div
              key={idx}
              style={{
                borderBottom: "1px solid rgba(201,168,76,0.1)",
                paddingBottom: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  lineHeight: 1.45,
                  marginBottom: "0.6rem",
                }}
              >
                {q}
              </h3>
              <p
                style={{
                  color: "rgba(245,240,232,0.65)",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── UK Resources ────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(13,12,24,0.6)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            UK chronic pain support resources
          </p>
          {[
            [
              "Samaritans",
              "https://samaritans.org",
              "116 123",
              "Free, 24/7 emotional support for anyone in distress or struggling to cope.",
            ],
            [
              "Pain UK",
              "https://painuk.org",
              null,
              "Alliance of UK charities supporting people in pain — directory of member organisations, patient resources, and advocacy.",
            ],
            [
              "British Pain Society",
              "https://britishpainsociety.org",
              null,
              "Leading multidisciplinary professional organisation in the UK dedicated to pain medicine, research, and education.",
            ],
            [
              "NHS: Chronic Pain",
              "https://www.nhs.uk/conditions/chronic-pain/",
              null,
              "NHS overview of chronic pain — causes, treatments, and guidance on seeking clinical support including referral to pain management clinics.",
            ],
            [
              "Versus Arthritis",
              "https://versusarthritis.org",
              null,
              "UK charity for people with arthritis and musculoskeletal conditions — one of the leading causes of chronic pain.",
            ],
            [
              "Endometriosis UK",
              "https://endometriosis-uk.org",
              null,
              "Support, information, and advocacy for people living with endometriosis — a condition with an average UK diagnosis delay of eight years.",
            ],
          ].map(([label, href, phone, desc]) => (
            <div key={label as string} style={{ marginBottom: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <a
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: GOLD, fontWeight: 600, fontSize: "0.93rem", textDecoration: "none" }}
                >
                  {label}
                </a>
                {phone && (
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(245,240,232,0.45)",
                      background: "rgba(245,240,232,0.06)",
                      padding: "0.1rem 0.45rem",
                      borderRadius: "4px",
                    }}
                  >
                    {phone}
                  </span>
                )}
              </div>
              <p
                style={{
                  color: "rgba(245,240,232,0.48)",
                  fontSize: "0.83rem",
                  lineHeight: 1.5,
                  margin: "0.15rem 0 0",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(13,12,24,0.7) 100%)",
            border: "1px solid rgba(201,168,76,0.28)",
            borderRadius: "16px",
            padding: "2.25rem",
            textAlign: "center",
            margin: "3rem 0",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            A companion that believes you
          </p>
          <p
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              color: TEXT,
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            Your pain is real. Your experience is real. MEOK starts there.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "0.97rem",
              lineHeight: 1.7,
              maxWidth: "36rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Sovereign memory that tracks your patterns across months. A care floor that never
            minimises. The Healer for somatic support. The Guardian for when pain becomes
            overwhelming. Your data on your device — never shared with insurers or advertisers.
            Free to begin. No card required.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "1rem",
              padding: "0.85rem 2.25rem",
              borderRadius: "9px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin your companion
          </Link>
          <p
            style={{
              color: "rgba(245,240,232,0.28)",
              fontSize: "0.78rem",
              marginTop: "0.75rem",
            }}
          >
            Free tier available &middot; Sovereign storage &middot; No data sold
          </p>
        </div>

        {/* ── Related Reading ──────────────────────────────────────────────────── */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            Related reading
          </p>
          {[
            [
              "/blog/ai-for-fibromyalgia",
              "AI for Fibromyalgia: Support for a Condition That Medicine Took Decades to Believe",
            ],
            [
              "/blog/ai-for-chronic-illness",
              "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
            ],
            [
              "/blog/ai-for-chronic-fatigue",
              "AI Companion for Chronic Fatigue Syndrome: Consistent Support When Energy Is the Scarcest Resource",
            ],
            [
              "/blog/ai-for-depression",
              "AI Companion for Depression: Presence Without Pressure",
            ],
            [
              "/blog/what-is-care-based-ai",
              "What Is Care-Based AI? The Design Philosophy Behind MEOK",
            ],
            [
              "/blog/data-sovereignty-ai",
              "Data Sovereignty in AI: Why Your Health Data Should Belong to You",
            ],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href as string}
              style={{
                display: "block",
                color: GOLD,
                fontSize: "0.92rem",
                textDecoration: "none",
                lineHeight: 1.55,
                marginBottom: "0.5rem",
              }}
            >
              &#8594; {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.08)",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "rgba(245,240,232,0.28)",
            fontSize: "0.82rem",
            lineHeight: 1.65,
            maxWidth: "38rem",
            margin: "0 auto 0.5rem",
          }}
        >
          Written by{" "}
          <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
          Founder of MEOK AI LABS &mdash; building sovereign AI companions that work for you,
          not on you.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.18)",
            fontSize: "0.78rem",
            margin: "0 auto 1.5rem",
            maxWidth: "38rem",
            lineHeight: 1.6,
          }}
        >
          This article is for informational purposes only and does not constitute medical
          advice, diagnosis, or treatment. MEOK is not a medical device. Always consult a
          qualified healthcare professional for chronic pain management. If you are in
          crisis, call Samaritans on 116 123 (free, 24/7). UK pain support: painuk.org
          and britishpainsociety.org.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <Link
            href="/blog"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            Blog
          </Link>
          <Link
            href="/privacy"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            Privacy
          </Link>
          <Link
            href="/birth"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            Begin
          </Link>
          <Link
            href="/"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            meok.ai
          </Link>
        </div>
      </div>
    </div>
  );
}
