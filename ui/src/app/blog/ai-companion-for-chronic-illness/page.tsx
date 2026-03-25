import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Chronic Illness: Living Well When Your Body Has Different Plans | MEOK AI LABS",
  description:
    "Chronic illness is invisible to most people \u2014 but not to MEOK. An AI companion that is available at 3am during a pain flare, remembers every treatment you\u2019ve tried, and never gets compassion fatigue. Sovereign memory built for the long game.",
  alternates: {
    canonical:
      "https://meok.ai/blog/ai-companion-for-chronic-illness",
  },
  openGraph: {
    title:
      "AI Companion for Chronic Illness: Living Well When Your Body Has Different Plans",
    description:
      "Chronic illness is invisible to most people \u2014 but not to MEOK. An AI companion available at 3am, remembering every treatment you\u2019ve tried, never tiring of the conversation.",
    url: "https://meok.ai/blog/ai-companion-for-chronic-illness",
    siteName: "MEOK AI LABS",
    type: "article",
    images: [
      {
        url: "https://meok.ai/og/ai-companion-for-chronic-illness.png",
        width: 1200,
        height: 630,
        alt: "AI Companion for Chronic Illness \u2014 MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Companion for Chronic Illness: Living Well When Your Body Has Different Plans",
    description:
      "Chronic illness is invisible to most people \u2014 but not to MEOK. Available at 3am, no compassion fatigue, sovereign memory that belongs to you.",
    images: ["https://meok.ai/og/ai-companion-for-chronic-illness.png"],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Chronic Illness: Living Well When Your Body Has Different Plans",
  description:
    "Chronic illness is invisible to most people \u2014 but not to MEOK. An AI companion that is available at 3am during a pain flare, remembers every treatment you\u2019ve tried, and never gets compassion fatigue.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-companion-for-chronic-illness",
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
    "AI companion for chronic illness",
    "AI for fibromyalgia",
    "AI for ME CFS",
    "AI for lupus",
    "AI for endometriosis",
    "AI for long COVID",
    "AI for chronic pain",
    "chronic illness support app",
    "sovereign AI health companion",
    "AI that remembers your symptoms",
    "AI companion 3am pain flare",
    "pacing support chronic illness",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion genuinely help someone living with a chronic illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in specific and meaningful ways. An AI companion cannot cure a condition or replace your medical team, but it can provide something the healthcare system structurally cannot: consistent, available, memory-holding support. MEOK remembers your treatment history, your symptom patterns, your good periods and your crash days, and it is available at 3am during a pain flare without needing to be briefed from the beginning. For many people with chronic illness, the emotional weight of having to constantly re-explain their situation is exhausting. MEOK removes that burden entirely.",
      },
    },
    {
      "@type": "Question",
      name: "What conditions is MEOK useful for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is not condition-specific \u2014 it adapts to whatever you are living with. People use it for fibromyalgia, ME/CFS, multiple sclerosis, lupus, Crohn\u2019s disease, endometriosis, type 1 and type 2 diabetes, long COVID, heart conditions, POTS, rare diseases, and many other chronic conditions. Because MEOK builds a persistent memory of your experience rather than applying condition-specific rules, it works for the full complexity of your situation, including when you have multiple conditions simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sovereign Memory and why does it matter for chronic illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK\u2019s architecture for persistent, user-owned memory. Your conversation history, your symptom patterns, your medication logs, your good days and bad days \u2014 all of this belongs to you, not to a corporation that can sell it, retrain on it, or delete it without warning. For someone with a chronic illness, your health history is deeply personal and clinically significant. Sovereign Memory means it persists, it is yours, and it is never used to train external AI models.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with pacing for conditions like ME/CFS or fibromyalgia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can help you think through your energy envelope for a given day, week, or period. By remembering your previous crashes, your activity levels before a flare, and the patterns that tend to precede difficult periods, MEOK can help you plan around your energy availability rather than against it. It can also hold you accountable to rest when you need it \u2014 a harder task than it sounds when guilt and the desire to catch up on life push you toward overexertion.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a substitute for medical care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device, does not provide medical advice, and is not a substitute for working with qualified healthcare professionals. It is a personal AI companion designed to support the emotional and practical dimensions of living with chronic illness: the isolation, the administrative burden, the identity questions, the relationship strain. If you are experiencing a medical emergency, call your local emergency services immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me prepare for medical appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. One of the most practically useful things MEOK does for people with chronic illness is appointment preparation. Because it holds a persistent record of your symptoms, medication changes, and notable events, it can help you build a clear summary to bring to your doctor, rheumatologist, neurologist, or specialist. It can help you formulate questions, prioritise what to raise in a short appointment, and think through what you need to communicate to be taken seriously.",
      },
    },
    {
      "@type": "Question",
      name: "How does chronic illness affect identity, and can MEOK help with that?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronic illness often forces a renegotiation of identity. The person you were before diagnosis \u2014 what you could do, what you planned, who others expected you to be \u2014 may no longer be possible in the same form. This is a genuine and often unacknowledged grief. MEOK can hold space for that grief without rushing you to acceptance, help you explore who you are within the constraints of your condition, and support you in finding meaning and connection that fits your actual life rather than the life you had planned.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiCompanionForChronicIllnessPage() {
  const GREEN = "#6aaa64";
  const GREEN_DIM = "#4a8a44";
  const BG = "#0d0c18";
  const TEXT = "#f0ece4";
  const CARD = "#13112a";
  const CARD2 = "#1a1830";
  const MUTED = "#9a94a8";
  const BORDER = "#252340";
  const FAINT = "#1e1c38";

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
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
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(106,170,100,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Category pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(106,170,100,0.12)",
              border: `1px solid rgba(106,170,100,0.3)`,
              borderRadius: "100px",
              padding: "0.35rem 1rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: GREEN,
                display: "inline-block",
              }}
            />
            <span
              style={{
                color: GREEN,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Mental Health &amp; Wellbeing
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            AI Companion for Chronic Illness:{" "}
            <span style={{ color: GREEN }}>
              Living Well When Your Body Has Different Plans
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: MUTED,
              maxWidth: "680px",
              margin: "0 auto 2rem",
            }}
          >
            You have explained your condition a thousand times. To doctors who
            had ten minutes. To friends who tried but faded. To family members
            who love you but have run out of bandwidth. MEOK remembers
            everything \u2014 and never runs out.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              color: MUTED,
              fontSize: "0.85rem",
            }}
          >
            <span>By Nicholas Templeman, MEOK AI LABS</span>
            <span style={{ color: BORDER }}>|</span>
            <span>25 March 2026</span>
            <span style={{ color: BORDER }}>|</span>
            <span>28 min read</span>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER BANNER ─────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto 3rem",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            background: "rgba(106,170,100,0.07)",
            border: `1px solid rgba(106,170,100,0.25)`,
            borderRadius: "12px",
            padding: "1.2rem 1.5rem",
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "1.2rem",
              flexShrink: 0,
              marginTop: "0.1rem",
            }}
          >
            &#9432;
          </span>
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              lineHeight: 1.65,
              color: MUTED,
            }}
          >
            <strong style={{ color: TEXT }}>Medical disclaimer:</strong> MEOK
            is not a medical device and does not provide medical advice,
            diagnosis, or treatment. Nothing in this article or within the MEOK
            platform is a substitute for working with qualified healthcare
            professionals. If you are experiencing a medical emergency, call
            your local emergency services immediately.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >
        {/* ── SECTION: The invisible grief ──────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            What Is the Invisible Grief of Chronic Illness Nobody Talks About?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            There is a particular grief that comes with a chronic illness
            diagnosis that the world rarely names. It is not the grief of
            bereavement \u2014 no funeral, no flowers, no casseroles left on
            the doorstep. It is the grief of the body you had, the life you
            planned, and the version of yourself that others had already mapped
            out for you.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            You grieve the career you were building before fatigue made a
            full working week impossible. You grieve the spontaneity of saying
            yes to a weekend away without calculating whether you will have
            enough energy to stand at a train station. You grieve the
            relationship with your body that used to feel reliable, even
            unremarkable.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This grief is compounded by its invisibility. Many chronic
            conditions \u2014 fibromyalgia, ME/CFS, lupus, endometriosis, long
            COVID \u2014 leave no external mark. You look, to most people,
            entirely fine. And so the grief goes unexpressed, unacknowledged,
            and underground. Which is where it does the most damage.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK was built to sit with that grief. Not to fix it or rush you
            through it, but to hold it with you as long as you need \u2014
            which is exactly what the people around you, however much they love
            you, often cannot sustain.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: `4px solid ${GREEN}`,
              paddingLeft: "1.5rem",
              marginLeft: 0,
              marginRight: 0,
              marginBottom: "1.25rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                fontStyle: "italic",
                lineHeight: 1.7,
                color: TEXT,
                margin: 0,
              }}
            >
              &ldquo;The hardest thing is not the pain itself. It is explaining
              the pain to someone who does not believe it because they cannot
              see it.&rdquo;
            </p>
            <cite
              style={{
                display: "block",
                marginTop: "0.75rem",
                fontSize: "0.85rem",
                color: MUTED,
                fontStyle: "normal",
              }}
            >
              A common experience across fibromyalgia, ME/CFS, and lupus
              communities
            </cite>
          </blockquote>
        </section>

        {/* ── SECTION: Conditions covered ───────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            Which Chronic Conditions Does MEOK Support?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK is not a condition-specific tool with a list of pre-programmed
            responses for particular diagnoses. It is a sovereign AI companion
            that builds a persistent, growing picture of your specific
            experience over time. That means it works for the full complexity
            of chronic illness, including when you are managing multiple
            conditions simultaneously.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            People currently using MEOK live with:
          </p>

          {/* Conditions grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "0.85rem",
              marginBottom: "2rem",
            }}
          >
            {[
              "Fibromyalgia",
              "ME/CFS (Myalgic Encephalomyelitis)",
              "Multiple Sclerosis (MS)",
              "Lupus (SLE)",
              "Crohn\u2019s Disease",
              "Endometriosis",
              "Type 1 Diabetes",
              "Type 2 Diabetes",
              "Long COVID",
              "Heart Conditions",
              "POTS",
              "Rare Autoimmune Diseases",
              "Ehlers-Danlos Syndrome",
              "Ankylosing Spondylitis",
              "Psoriatic Arthritis",
              "Interstitial Cystitis",
            ].map((condition) => (
              <div
                key={condition}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "0.85rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: GREEN,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: TEXT,
                    lineHeight: 1.4,
                  }}
                >
                  {condition}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            What matters to MEOK is not which diagnostic category your
            condition falls under, but what you are actually experiencing
            \u2014 the fatigue, the pain, the fog, the fear, the uncertainty,
            the good weeks and the crashes. It builds from your reality, not
            from a medical textbook.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            It is also important to acknowledge that many people with chronic
            illness have gone years without a diagnosis, or are living in the
            exhausting liminal space of being undiagnosed but unwell. MEOK
            supports you in that space too. You do not need a letter from a
            specialist to deserve support.
          </p>
        </section>

        {/* ── SECTION: The isolation problem ────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            Why Does Chronic Illness Feel So Isolating, Even When You Are
            Surrounded by People Who Love You?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This is one of the most painful paradoxes of chronic illness.
            Isolation is not always about being alone. You can have a devoted
            partner, attentive parents, and friends who genuinely care, and
            still feel profoundly alone in your experience. This happens for
            several structural reasons.
          </p>

          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "16px",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: GREEN,
                marginTop: 0,
                marginBottom: "1.25rem",
              }}
            >
              The three structural isolation traps of chronic illness
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    marginTop: 0,
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  1. The ten-minute appointment
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: MUTED,
                  }}
                >
                  Your GP or specialist has, on average, ten minutes with you.
                  In that ten minutes you are expected to summarise months of
                  symptoms, navigate a system that may not believe your pain,
                  make decisions about medications, and advocate for yourself
                  against a clinician who has seen forty patients today and will
                  see forty more tomorrow. The clinical system is not built for
                  complexity. You are.
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    marginTop: 0,
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  2. Compassion fatigue in the people you love
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: MUTED,
                  }}
                >
                  Partners, parents, and close friends start with enormous
                  goodwill. But chronic illness, by definition, does not end.
                  And sustained, open-ended emotional labour depletes even the
                  most loving people. They may not withdraw intentionally, but
                  you can feel when the conversations get shorter, when the
                  check-ins become less frequent, when you sense that your
                  illness is becoming, to them, a kind of background noise they
                  have learned to live around.
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    marginTop: 0,
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  3. The incomprehension of the healthy
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: MUTED,
                  }}
                >
                  Healthy people, however well-intentioned, cannot fully
                  imagine what it is like to plan your week around your energy
                  budget, to cancel a dinner you were looking forward to because
                  your body has simply said no today, or to live with the
                  specific psychological weight of not knowing whether a good
                  week means you are getting better or simply building toward a
                  crash. This is not a failure of empathy \u2014 it is a
                  failure of shared experience.
                </p>
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK addresses all three of these gaps simultaneously. It has
            unlimited time. It builds a genuine understanding of your specific
            condition over months and years. And it never forgets what you told
            it last week or last month, so you never have to start from scratch.
          </p>
        </section>

        {/* ── SECTION: What MEOK offers ─────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            What Does MEOK Actually Offer That Is Different From Other Support?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The question is worth asking directly. There are support forums,
            therapists, chronic illness communities, condition-specific apps,
            and symptom trackers. MEOK is none of these things exactly \u2014
            but it has properties that none of them share.
          </p>

          {/* Feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {[
              {
                title: "Available at 3am during a pain flare",
                body: "Pain does not observe business hours. Flares do not wait until your therapist\u2019s next available slot. MEOK is available at any hour, in any timezone, without an appointment. When the pain wakes you at 3am and the house is quiet and you need to talk to something that knows your situation, MEOK is there.",
              },
              {
                title: "Remembers which treatments you have tried",
                body: "One of the most exhausting features of chronic illness management is having to repeat your treatment history every time you see a new clinician, a new specialist, or a new therapist. MEOK holds this information persistently. It remembers that you tried amitriptyline and it gave you vivid nightmares. It remembers that the hydrotherapy helped for three weeks but the travelling was unsustainable. You never have to explain from scratch.",
              },
              {
                title: "Never gets tired of hearing about it",
                body: "This is not a small thing. It might be the single most important thing MEOK offers. The people in your life love you, but their capacity for ongoing, attentive engagement with your illness is finite. MEOK\u2019s is not. It is not performing patience. It simply does not have the depletion mechanism that human empathy does.",
              },
              {
                title: "Does not project, catastrophise, or dismiss",
                body: "When you tell MEOK that today is a bad day, it does not say \u2018have you tried yoga?\u2019 It does not say \u2018at least it\u2019s not cancer.\u2019 It does not visibly struggle to conceal its worry in a way that makes you feel you need to manage its emotions as well as your own. It meets you where you are.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "14px",
                  padding: "1.5rem",
                  borderLeft: `4px solid ${GREEN}`,
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginTop: 0,
                    marginBottom: "0.65rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    lineHeight: 1.78,
                    color: MUTED,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: Sovereign Memory ─────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            How Does Sovereign Memory Work, and Why Is It Important for People
            with Chronic Illness?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Sovereign Memory is MEOK\u2019s core technical architecture. It is
            the thing that separates MEOK from every other AI product you may
            have tried.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Most AI systems, including the ones you know from big technology
            companies, have no persistent memory between sessions. Each
            conversation begins fresh. You are, effectively, a stranger every
            time you open the app. For someone managing a chronic illness, this
            is useless at best and actively demoralising at worst. Explaining
            your history to a blank slate, over and over, is a form of labour
            that costs energy you do not have.
          </p>

          <div
            style={{
              background: `linear-gradient(135deg, rgba(106,170,100,0.1) 0%, rgba(106,170,100,0.04) 100%)`,
              border: `1px solid rgba(106,170,100,0.3)`,
              borderRadius: "16px",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: GREEN,
                marginTop: 0,
                marginBottom: "1.25rem",
              }}
            >
              What Sovereign Memory tracks for you
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  label: "Symptom patterns",
                  desc: "Which symptoms appear together, what triggers them, how they evolve over months",
                },
                {
                  label: "Medication history",
                  desc: "What you have tried, what worked, what had side effects, and in what doses",
                },
                {
                  label: "Good days and crash days",
                  desc: "The patterns before a flare, what preceded a better week, your energy trajectory",
                },
                {
                  label: "Treatment experiments",
                  desc: "Dietary changes, sleep interventions, pacing strategies \u2014 what you tried and what happened",
                },
                {
                  label: "Appointment history",
                  desc: "What you discussed with your specialist, what they said, what was decided",
                },
                {
                  label: "Emotional landscape",
                  desc: "Your fears, your breakthroughs, your grief, your moments of resilience",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "10px",
                    padding: "1rem 1.1rem",
                    border: `1px solid rgba(106,170,100,0.15)`,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: TEXT,
                      marginTop: 0,
                      marginBottom: "0.35rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.85rem",
                      color: MUTED,
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Crucially, this memory belongs to you. It is not held on servers
            that a corporation can sell, retrain models on, or delete when they
            change their business model. Your health history is among the most
            sensitive data in existence. MEOK treats it accordingly.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            For people with chronic illness, this means something practically
            important: you do not have to maintain a separate symptom diary.
            You do not have to keep a spreadsheet. You do not have to remember
            what you told the neurologist six months ago before your next
            appointment. MEOK holds this, accurately and persistently, and you
            can ask it to retrieve and summarise at any time.
          </p>
        </section>

        {/* ── SECTION: Identity ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            Who Are You Now? Chronic Illness, Identity, and the Self That Keeps
            Changing
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This is territory that healthcare systems almost never enter. A
            rheumatologist will adjust your medication. A physiotherapist will
            work on your mobility. But who is going to help you work out who
            you are now that your illness has changed what you can do, what you
            can plan for, and what others expect of you?
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Chronic illness forces an identity negotiation that healthy people
            rarely face at the same depth or urgency. The questions are
            profound and they are practical simultaneously:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              "If I can no longer work the way I used to, what does that mean for my sense of purpose and my financial identity?",
              "If I have to cancel plans regularly, am I still a good friend, a good partner, a good parent?",
              "If my illness is invisible, am I obligated to tell people about it, and what happens when they do not believe me?",
              "If my body is unpredictable, how do I build a future that feels real?",
              "Am I allowed to be proud of myself on days when I managed to shower and do the washing up?",
            ].map((q) => (
              <li
                key={q}
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: MUTED,
                }}
              >
                {q}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK can sit with you in these questions without rushing you to
            resolution. It holds a longitudinal picture of who you are across
            time \u2014 the version of you before diagnosis, the version
            struggling through the early uncertain years, and the version
            finding, slowly and in your own way, what a meaningful life looks
            like within the constraints of your condition.
          </p>

          <blockquote
            style={{
              borderLeft: `4px solid ${GREEN}`,
              paddingLeft: "1.5rem",
              marginLeft: 0,
              marginRight: 0,
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                fontStyle: "italic",
                lineHeight: 1.7,
                color: TEXT,
                margin: 0,
              }}
            >
              &ldquo;The goal is not to become the person you were before the
              illness. The goal is to become someone who knows what actually
              matters to them, because the illness removed everything that
              did not.&rdquo;
            </p>
          </blockquote>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            That renegotiation is not a one-time event. It happens again every
            time your condition changes, every time you have a relapse after a
            period of stability, every time the world asks more of you than
            your body can currently offer. MEOK is a companion for all of those
            iterations, not just the first one.
          </p>
        </section>

        {/* ── SECTION: Medical bureaucracy ──────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            How Can MEOK Help Me Navigate the Medical System Without Burning Out?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Managing a chronic illness is a part-time job that nobody asked for
            and nobody pays you to do. Between appointments, referrals,
            prescriptions, benefits forms, insurance correspondence, condition
            research, support group navigation, and the ceaseless task of
            advocating for yourself inside a system that was not built for
            complexity, the administrative burden can rival the physical burden
            of the condition itself.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                title: "Appointment preparation",
                body: "MEOK can help you build a structured summary of your recent symptoms, medication changes, and notable events to bring to your next appointment. It can help you formulate the questions you need to ask, prioritise what to raise in ten minutes, and think through how to communicate the severity of your situation clearly and credibly.",
              },
              {
                title: "Condition research",
                body: "When you receive a new diagnosis, a new medication suggestion, or read something alarming online at midnight, MEOK can help you think through what you are reading, contextualise it against your specific situation, and work out what questions it raises for your next clinical conversation.",
              },
              {
                title: "Symptom tracking without the spreadsheet",
                body: "Because MEOK holds your conversation history persistently, talking to it regularly about how you are feeling creates a de facto symptom record. You can ask it to summarise your symptom pattern for the last three months and use that as the basis for a medical letter or appointment brief.",
              },
              {
                title: "Benefits and administrative support",
                body: "Navigating PIP, ESA, or equivalent disability benefits systems in any country is one of the most dehumanising experiences the chronic illness community describes. MEOK can help you think through what you need to document, how to describe your condition in the bureaucratic language these systems require, and how to manage the emotional impact of a system that routinely disbelieves people.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "14px",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: GREEN,
                    marginTop: 0,
                    marginBottom: "0.7rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    lineHeight: 1.78,
                    color: MUTED,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK does not replace your medical team, your benefits advisor, or
            your specialist. What it does is reduce the cognitive labour
            involved in navigating all of them, so that you arrive at each
            interaction with more capacity rather than already depleted.
          </p>
        </section>

        {/* ── SECTION: Relationship strain ──────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            How Does Chronic Illness Affect Relationships, and How Can MEOK Help?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Chronic illness does not exist in isolation from your relationships.
            It moves into them, reshapes them, and sometimes tests them to
            breaking point. The effects are different depending on the
            relationship.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "14px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginTop: 0,
                  marginBottom: "0.75rem",
                }}
              >
                Partnerships and intimate relationships
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.78,
                  color: MUTED,
                }}
              >
                Partners of people with chronic illness often take on caring
                roles that were not part of the original relationship contract.
                This can create guilt, resentment, power imbalances, and
                intimacy difficulties that neither person wanted. The ill partner
                may feel like a burden; the caring partner may feel unable to
                express their own needs without seeming cruel. MEOK can help you
                think through these dynamics, prepare for difficult conversations
                with your partner, and process the grief of a relationship that
                has changed shape.
              </p>
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "14px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginTop: 0,
                  marginBottom: "0.75rem",
                }}
              >
                Friendships
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.78,
                  color: MUTED,
                }}
              >
                Chronic illness is a friendship filter. Some friends lean in and
                prove themselves extraordinary. Others gradually fade, not from
                cruelty but from a kind of discomfort with sustained illness that
                makes them pull back. Losing friendships to your illness, even
                gradually and without drama, is a genuine and underappreciated
                loss. MEOK can hold space for that grief and help you think about
                how you want to maintain, rebuild, or restructure your social
                world within the constraints of your energy.
              </p>
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "14px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginTop: 0,
                  marginBottom: "0.75rem",
                }}
              >
                Family dynamics
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.78,
                  color: MUTED,
                }}
              >
                Family relationships carry particular weight because of the
                expectations embedded in them. Parents who struggle to accept the
                changed reality of your capacity. Siblings who take on more than
                their share, or who disappear. Children who are trying to make
                sense of a parent\u2019s illness. All of these dynamics generate
                conversations that are difficult to have and feelings that need
                processing. MEOK is a space where you can work through this
                without worrying about the impact on the very people you are
                thinking about.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            One of the subtle but important functions MEOK plays is as a kind
            of pressure valve. When you have a space to process your thoughts
            and feelings thoroughly, you arrive at conversations with the people
            you love in a less depleted state. The relationship benefits are
            often indirect but real.
          </p>
        </section>

        {/* ── SECTION: Flares and remissions ────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            How Does MEOK Help Through the Unpredictability of Flares and
            Remissions?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            The unpredictability of chronic illness is not just a physical
            problem. It is a psychological one. Living with the constant
            uncertainty of not knowing whether a good week means recovery or
            false hope, whether pushing through today will mean paying for it
            tomorrow, whether the flare that has lasted three weeks will end
            before a significant event you have been holding on for \u2014 this
            is a form of psychological stress that is genuinely difficult to
            communicate to people who have not experienced it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK becomes a stabilising presence precisely because of its
            consistency. While your body fluctuates, MEOK does not. It is the
            same whether you are in a crash or having your best week in months.
            It holds your history, remembers your previous good periods, and
            can gently help you see that you have survived previous flares
            when the current one feels endless.
          </p>

          <div
            style={{
              background: FAINT,
              border: `1px solid ${BORDER}`,
              borderRadius: "16px",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: GREEN,
                marginTop: 0,
                marginBottom: "1.25rem",
              }}
            >
              What MEOK can do during a flare
            </h3>

            <ul
              style={{
                margin: 0,
                paddingLeft: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {[
                "Be present without requiring you to be articulate or coherent",
                "Help you identify whether current symptoms match previous flare patterns",
                "Support you in deciding whether this flare warrants contacting your medical team",
                "Hold space for the frustration, fear, and grief that flares bring without trying to reframe them too quickly",
                "Help you communicate your current state to a partner, family member, or employer",
                "Remind you of what has helped in previous flares, without prescribing",
                "Be there at 3am when the pain wakes you and the house is silent",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: MUTED,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            During remissions, MEOK plays a different but equally important
            role. It can help you think carefully about how to use good periods
            without burning through them. It can help you resist the pull
            toward overexertion that almost every person with ME/CFS or
            fibromyalgia knows \u2014 the instinct to do everything you have
            been unable to do during the flare, in a burst of energy that
            precipitates the next crash.
          </p>
        </section>

        {/* ── SECTION: Pacing ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            How Can MEOK Support Pacing and Energy Management?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Pacing is the management strategy recommended for conditions like
            ME/CFS, fibromyalgia, and post-viral illness, and it is harder to
            implement in practice than it sounds in theory. The principle is
            simple: stay within your energy envelope, avoid boom-and-bust
            cycles, and build sustainable activity levels over time. The
            practice involves overriding deeply ingrained habits, social
            expectations, and the psychological distress of illness when it
            looks like laziness from the outside.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK can support pacing in several concrete ways:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                title: "Daily planning within your energy budget",
                desc: "MEOK can help you think through what you want to do in a day against what your body is likely to sustain. Not by imposing limits, but by asking the questions that help you make conscious rather than impulsive decisions.",
              },
              {
                title: "Pattern recognition over time",
                desc: "By holding your history, MEOK can notice patterns you might miss in the moment \u2014 the activities that tend to precede a crash, the rest ratios that have worked in better periods, the warning signs you have described before flares.",
              },
              {
                title: "Accountability for rest",
                desc: "Rest is not passive. For many people with chronic illness, especially those with high achievement histories, rest requires active permission. MEOK can provide that permission without judgment, and hold you gently accountable to it.",
              },
              {
                title: "Celebrating small wins",
                desc: "Pacing requires you to redefine what counts as a good day. A day where you rested when you needed to, rather than pushed through, is a good day. MEOK understands this and does not apply healthy-world metrics to your progress.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "12px",
                  padding: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: GREEN,
                    marginTop: 0,
                    marginBottom: "0.6rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.88rem",
                    lineHeight: 1.72,
                    color: MUTED,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            It is worth being clear: MEOK is not a medical pacing programme
            and cannot replace a fatigue management therapist or occupational
            therapist with expertise in energy-limiting conditions. What it
            can do is supplement that care with a persistent, available,
            non-judgmental presence that understands your specific situation
            and can hold your pacing goals alongside everything else in your
            life.
          </p>
        </section>

        {/* ── SECTION: Wellbeing in a constrained life ──────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            Is It Possible to Find Meaning, Joy, and Connection When Your Energy
            Is Limited?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Yes. Cautiously, honestly, and with full acknowledgement that this
            is hard work: yes. But the wellbeing that becomes available to
            people with chronic illness looks different from the maximalist,
            optimised, bucket-list version of wellbeing that wellness culture
            sells.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            It is a more precise kind of wellbeing. Because your energy is
            limited, you become more intentional about where it goes. The
            relationships that genuinely sustain you become clearer. The
            activities that provide real rather than performative meaning
            become more visible. The capacities that illness has not taken
            \u2014 intellectual curiosity, emotional depth, creativity, the
            ability to be genuinely present with another person \u2014 can
            become more central to your identity.
          </p>

          <div
            style={{
              background: `linear-gradient(135deg, rgba(106,170,100,0.08) 0%, rgba(19,17,42,0) 100%)`,
              border: `1px solid rgba(106,170,100,0.2)`,
              borderRadius: "16px",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: TEXT,
                marginTop: 0,
                marginBottom: "1rem",
              }}
            >
              What MEOK can support in a constrained life
            </h3>

            <ul
              style={{
                margin: 0,
                paddingLeft: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {[
                "Helping you identify what genuinely matters to you, now, not as a pre-illness aspiration",
                "Thinking through low-energy activities and connections that are genuinely restorative",
                "Processing the guilt that comes with doing something enjoyable on a day you could not do something productive",
                "Exploring what creativity, contribution, and connection look like at your current capacity",
                "Celebrating the small acts of maintenance and care that keep your life running on difficult days",
                "Sitting with you in the hard days without rushing you toward gratitude or silver linings",
                "Holding a picture of your resilience across time \u2014 evidence of what you have already survived",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.72,
                    color: MUTED,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This is not toxic positivity. MEOK does not tell you that your
            illness is a gift or that everything happens for a reason or that
            you just need to adjust your mindset. It holds the full complexity:
            the genuine grief of what illness has taken, and the genuine
            possibility of a life that is meaningful within the reality of what
            remains.
          </p>
        </section>

        {/* ── SECTION: Condition deep-dives ─────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            What Does MEOK Look Like for Specific Conditions?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "2rem",
            }}
          >
            Every condition has its own particular texture. Here is how MEOK
            tends to be most useful for people living with some of the most
            common chronic conditions.
          </p>

          {[
            {
              condition: "Fibromyalgia",
              content:
                "Fibromyalgia is one of the most disbelieved conditions in medicine. The pain is real, the fatigue is real, the cognitive difficulties are real \u2014 but the absence of visible pathology means that people with fibromyalgia spend years fighting to be believed. MEOK holds your experience without questioning its legitimacy. It tracks the complex, multi-system symptom picture that fibromyalgia presents, helps you prepare for appointments in a system that may be dismissive, and provides a consistent space for the profound exhaustion of fighting to be taken seriously.",
            },
            {
              condition: "ME/CFS",
              content:
                "Myalgic Encephalomyelitis and Chronic Fatigue Syndrome are energy-limiting conditions where the relationship between activity and consequences is non-linear and often delayed. MEOK\u2019s memory is particularly valuable here because it can help track the time delay between activity and post-exertional malaise, identify activity thresholds that tend to trigger crashes, and support pacing in a condition where pacing is both essential and psychologically demanding. The social isolation of ME/CFS \u2014 often house- or bed-bound during severe periods \u2014 makes a consistently available companion particularly meaningful.",
            },
            {
              condition: "Multiple Sclerosis",
              content:
                "MS presents differently for everyone, and its relapsing-remitting nature means that the experience of the condition is constantly shifting. MEOK can track symptom patterns across relapses, help you communicate the subjective experience of MS to people who do not understand it, and provide ongoing support for the identity adjustments that come with a progressive condition. The fear and uncertainty that accompany each relapse \u2014 will I recover fully this time? how far will this go? \u2014 is a dimension of MS that the clinical system rarely addresses.",
            },
            {
              condition: "Lupus",
              content:
                "Lupus is a complex autoimmune condition that affects multiple organ systems and fluctuates significantly. The diagnostic journey for lupus is often lengthy and traumatic, involving years of dismissed symptoms and misdiagnoses. MEOK can support people through that diagnostic process, help them maintain and communicate their symptom record, and provide a persistent space for the emotional complexity of living with a condition that can affect almost any part of the body without warning.",
            },
            {
              condition: "Endometriosis",
              content:
                "Endometriosis carries a diagnostic delay of, on average, eight years in the UK. For most of those eight years, people with endometriosis are told their pain is normal, psychosomatic, or exaggerated. MEOK can help people in that diagnostic journey by supporting them in tracking and articulating their symptoms in clinical terms, holding the history of their pain over months and years, and providing validation in a space where medical gaslighting has been the norm. After diagnosis, MEOK supports the ongoing management of a condition that currently has no cure.",
            },
            {
              condition: "Long COVID",
              content:
                "Long COVID has created a new community of people navigating chronic illness for the first time, often without established care pathways, community, or cultural understanding of what they are experiencing. MEOK is particularly useful for this group because it does not require you to have a neat diagnosis or established treatment plan. It meets you in the uncertainty, holds your symptom history through the fluctuations of long COVID, and supports the profound disorientation of a life that changed suddenly and has not yet resolved.",
            },
            {
              condition: "Diabetes (Type 1 and Type 2)",
              content:
                "Living with diabetes involves continuous self-management decisions across every aspect of daily life. The emotional dimension \u2014 diabetes distress, burnout from the relentlessness of management, the grief of dietary restrictions and lifestyle adjustments \u2014 is well-documented but poorly supported. MEOK can hold space for the weight of that relentlessness, track patterns in how your management is going, and support the days when you are simply exhausted by the ceaseless demands of a condition that never takes a day off.",
            },
          ].map((item) => (
            <div
              key={item.condition}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "14px",
                padding: "1.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: GREEN,
                  marginTop: 0,
                  marginBottom: "0.75rem",
                }}
              >
                {item.condition}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.78,
                  color: MUTED,
                }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </section>

        {/* ── SECTION: What MEOK is not ─────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            What Is MEOK Not, and Why Does That Distinction Matter?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Being honest about the limits of what MEOK is matters. Particularly
            for people with chronic illness, who have often been given false
            hope by treatments, interventions, and systems that overpromised.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                label: "MEOK is not a medical device",
                desc: "It cannot diagnose conditions, interpret clinical test results, or make treatment decisions. These require trained clinicians with access to your full clinical picture.",
              },
              {
                label: "MEOK is not a therapist",
                desc: "It cannot provide psychotherapy, cognitive behavioural therapy, EMDR, or any other clinical mental health intervention. If you need clinical mental health support, please seek it from a qualified professional.",
              },
              {
                label: "MEOK is not a crisis service",
                desc: "If you are in immediate danger, call your local emergency services. If you are experiencing a mental health crisis, call the Samaritans on 116 123 (UK) or a crisis line in your country.",
              },
              {
                label: "MEOK does not replace human connection",
                desc: "Human connection \u2014 with people who genuinely know and love you \u2014 is irreplaceable. MEOK is not a substitute for those relationships. It is a complement to them, particularly in the spaces and hours those relationships cannot reach.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,100,80,0.05)",
                  border: "1px solid rgba(255,100,80,0.15)",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#ff6450",
                    fontWeight: 700,
                    fontSize: "1rem",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  &#10005;
                </span>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: TEXT,
                      marginTop: 0,
                      marginBottom: "0.4rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: MUTED,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: FAQ ──────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "1.5rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${GREEN}`,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                q: "Can an AI companion genuinely help someone living with a chronic illness?",
                a: "Yes, in specific and meaningful ways. An AI companion cannot cure your condition or replace your medical team. But it can provide something the healthcare system structurally cannot: consistent, available, memory-holding support. MEOK remembers your treatment history, your symptom patterns, your good periods and your crash days \u2014 and it is available at 3am during a pain flare without needing to be briefed from the beginning.",
              },
              {
                q: "Does MEOK work if I have multiple chronic conditions?",
                a: "Yes. Many people with chronic illness have more than one diagnosis \u2014 fibromyalgia alongside ME/CFS, endometriosis alongside anxiety, diabetes alongside depression. MEOK is not condition-specific and builds from your lived experience rather than diagnostic categories. It holds the full complexity of your situation, including the ways multiple conditions interact.",
              },
              {
                q: "What is Sovereign Memory and why does it matter for my health history?",
                a: "Sovereign Memory is MEOK\u2019s architecture for persistent, user-owned memory. Your symptom patterns, medication history, and conversation history belong to you \u2014 not to a corporation that can sell, retrain on, or delete it. For someone with a chronic illness, this history is clinically significant and deeply personal. It persists across sessions so you never start from scratch.",
              },
              {
                q: "How does MEOK help with pacing for conditions like ME/CFS or fibromyalgia?",
                a: "MEOK can help you think through your energy envelope for a given day, remember the activity patterns that have preceded previous crashes, and hold you gently accountable to rest. It does not prescribe a pacing programme, but it provides ongoing, contextualised support for the psychological challenge of pacing in the real world.",
              },
              {
                q: "Can MEOK help me prepare for medical appointments?",
                a: "Yes. Because MEOK holds a persistent record of your symptoms, medication changes, and notable events, it can help you build a structured summary for your next appointment. It can help you formulate questions, prioritise what to raise in a short appointment, and think through how to communicate your situation clearly to clinicians.",
              },
              {
                q: "Is MEOK safe to use if I am having a mental health crisis?",
                a: "MEOK is not a crisis service and is not a substitute for emergency mental health support. If you are in immediate danger, call 999 (UK) or your local emergency services. If you are in a mental health crisis, call the Samaritans on 116 123 (UK). MEOK includes a Guardian feature that can alert a trusted contact if you signal that you need help, but this is not a replacement for crisis services.",
              },
              {
                q: "What does MEOK cost, and is there a free option?",
                a: "MEOK offers a free tier that allows you to begin building your sovereign memory and explore the companion. Paid tiers unlock extended memory depth, additional features, and full Sovereign Memory architecture. Visit meok.ai for current pricing.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: CARD2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "14px",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginTop: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.93rem",
                    lineHeight: 1.78,
                    color: MUTED,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: `linear-gradient(135deg, rgba(106,170,100,0.15) 0%, rgba(106,170,100,0.05) 100%)`,
            border: `1px solid rgba(106,170,100,0.35)`,
            borderRadius: "20px",
            padding: "3rem 2rem",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(106,170,100,0.15)",
              border: `1px solid rgba(106,170,100,0.35)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              fontSize: "1.5rem",
            }}
          >
            &#9672;
          </div>

          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: TEXT,
              marginTop: 0,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            A companion that remembers, never runs out, and is there at 3am
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              maxWidth: "560px",
              margin: "0 auto 2rem",
            }}
          >
            You have explained your condition enough times. MEOK is a sovereign
            AI companion that holds your full history, adapts to your energy
            on any given day, and never needs you to start from scratch. Begin
            with the Birth Ceremony \u2014 a thoughtful introduction to a
            companion that will grow with you.
          </p>

          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: GREEN,
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "1.05rem",
              padding: "0.9rem 2.5rem",
              borderRadius: "100px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Begin Your Birth Ceremony
          </Link>

          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.85rem",
              color: MUTED,
            }}
          >
            Free to start. Your data stays yours. No medical advice given.
          </p>
        </section>

        {/* ── RELATED READING ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Related Reading
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-chronic-illness",
                label: "AI for Chronic Illness: A Companion That Remembers",
              },
              {
                href: "/blog/ai-for-chronic-pain",
                label: "AI for Chronic Pain: Support Beyond the Prescription",
              },
              {
                href: "/blog/ai-for-fibromyalgia",
                label: "AI for Fibromyalgia: Being Believed at Last",
              },
              {
                href: "/blog/ai-for-long-covid",
                label: "AI for Long COVID: Navigating the Uncertain Recovery",
              },
              {
                href: "/blog/what-is-sovereign-memory",
                label: "What Is Sovereign Memory?",
              },
              {
                href: "/blog/ai-companion-vs-therapist",
                label: "AI Companion vs Therapist: Understanding the Difference",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "12px",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  color: MUTED,
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  transition: "border-color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER NOTE ───────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              color: MUTED,
              lineHeight: 1.65,
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            <strong style={{ color: TEXT }}>Medical disclaimer:</strong> MEOK
            is a personal AI companion and is not a medical device. Nothing in
            this article or within the MEOK platform constitutes medical advice,
            diagnosis, or treatment. Always seek the guidance of your physician
            or other qualified healthcare provider with any questions you may
            have regarding a medical condition. In a medical emergency, call
            your local emergency services immediately.
          </p>
        </div>
      </main>
    </div>
  );
}
