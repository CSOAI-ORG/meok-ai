import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Chronic Pain Management: Support Beyond the Pain Clinic | MEOK AI LABS",
  description:
    "15.5 million people in the UK live with chronic pain — 8 million in high-impact chronic pain. MEOK provides 24/7 emotional support, pain pattern tracking, and protection from predatory miracle cures. Not medical advice. Real support between appointments.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-chronic-pain-management",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Chronic Pain Management: Support Beyond the Pain Clinic",
  description:
    "15.5 million people in the UK live with chronic pain. MEOK's persistent memory, emotional archetypes, and Sovereign Memory system provide 24/7 support for the psychological burden of chronic pain — including identity loss, invisible illness, and protection from predatory supplement scams.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-chronic-pain-management",
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
    "AI for chronic pain management",
    "chronic pain support app UK",
    "AI pain diary",
    "chronic pain mental health support",
    "invisible illness AI support",
    "AI pain pattern tracking",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many people in the UK have chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 15.5 million people in the UK live with chronic pain, which is defined as pain lasting three months or longer. Of these, around 8 million experience high-impact chronic pain — meaning it significantly limits daily activities. Chronic pain is one of the most common reasons for GP appointments in England.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with chronic pain management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot treat or diagnose chronic pain, but it can provide continuous emotional support, help track pain patterns and triggers over time, assist with pacing, protect against predatory supplement scams, and support the psychological dimensions of living with persistent pain. MEOK is not a medical device — it fills the emotional and logistical gap between clinical appointments.",
      },
    },
    {
      "@type": "Question",
      name: "What is the psychological impact of chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronic pain is strongly associated with depression, anxiety, sleep disorders, social withdrawal, and identity disruption. Many chronic pain patients grieve the life they had before pain began. Medical gaslighting — being told pain is psychological or exaggerated — compounds trauma and erodes trust in healthcare. The psychological burden is often as disabling as the physical symptoms.",
      },
    },
    {
      "@type": "Question",
      name: "What does invisible illness mean and why does it cause isolation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Invisible illness refers to conditions like chronic pain where there are no visible signs of disability. Sufferers frequently hear comments like 'but you don't look sick,' which invalidates their experience. This creates profound isolation: they appear well to others but live in continuous suffering, making it difficult to explain their needs or receive appropriate support and understanding.",
      },
    },
    {
      "@type": "Question",
      name: "How can an AI act as a pain diary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI with persistent memory can log pain levels, locations, duration, potential triggers, mood, sleep, activity, and medication across months — building a longitudinal record far richer than paper diaries. This data can surface patterns, identify triggers, track good versus bad day cycles, and generate summaries useful for medical appointments where time is limited.",
      },
    },
    {
      "@type": "Question",
      name: "Why are chronic pain patients targeted by supplement scams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronic pain patients represent a highly motivated, often desperate audience. Decades of inadequate medical care, long waiting lists, and dismissed symptoms make people more willing to try unproven remedies. Predatory marketers exploit this vulnerability with claims of miracle cures, proprietary blends, and urgent limited-time offers — often at significant financial cost and sometimes with genuine health risks.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for medical treatment for chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device and provides no diagnosis, clinical assessment, or treatment. If you live with chronic pain, consult your GP, a pain specialist, or a rheumatologist. MEOK provides emotional and psychological support — not medical advice. UK resources include Versus Arthritis, Pain UK, and Fibromyalgia Action UK.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with grief after chronic illness diagnosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Healer archetype is designed to support grief processing, including the particular grief of losing the pre-pain version of yourself. This involves mourning activities, relationships, career trajectories, and identities that chronic pain has altered or taken away. The Healer creates a consistent, non-judgemental space to move through this grief at your own pace.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForChronicPainManagementPage() {
  const GOLD = "#c9a84c";
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";
  const CARD = "#1a1830";

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

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(13,12,24,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: "1.15rem",
              color: GOLD,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            MEOK AI LABS
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            <Link
              href="/blog"
              style={{
                fontSize: "0.875rem",
                color: "rgba(245,240,232,0.55)",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <Link
              href="/#features"
              style={{
                fontSize: "0.875rem",
                color: "rgba(245,240,232,0.55)",
                textDecoration: "none",
              }}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              style={{
                fontSize: "0.875rem",
                color: "rgba(245,240,232,0.55)",
                textDecoration: "none",
              }}
            >
              Pricing
            </Link>
            <Link
              href="/birth"
              style={{
                fontSize: "0.825rem",
                fontWeight: 700,
                color: BG,
                background: GOLD,
                padding: "0.45rem 1.1rem",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Try MEOK
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
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
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
              }}
            >
              March 25, 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
              }}
            >
              13 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Chronic Pain Management: Support Beyond the Pain Clinic
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            15.5 million people in the UK live with chronic pain. 8 million of them experience it at
            a level that fundamentally limits daily life. Most wait months or years between pain
            clinic appointments — while the psychological, emotional, and practical toll of living
            in pain accumulates in silence. This is an honest look at what AI can and cannot do
            to fill that gap.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 0",
        }}
      >

        {/* ── DISCLAIMER ───────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "10px",
            padding: "1rem 1.25rem",
            marginBottom: "2.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>
            &#9888;&#65039;
          </span>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "0.88rem",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>
              MEOK provides emotional and psychological support — not medical advice.
            </strong>{" "}
            MEOK is not a medical device. It does not diagnose, assess, or treat chronic pain or any
            other condition. Always consult your GP, a pain specialist, or a rheumatologist for
            clinical care. UK support:{" "}
            <a
              href="https://www.versusarthritis.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              Versus Arthritis
            </a>
            ,{" "}
            <a
              href="https://www.painuk.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              Pain UK
            </a>
            , and{" "}
            <a
              href="https://fmauk.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              Fibromyalgia Action UK
            </a>
            . If you are in crisis, contact{" "}
            <strong style={{ color: "rgba(245,240,232,0.75)" }}>
              Samaritans: 116 123
            </strong>{" "}
            (free, 24/7).
          </p>
        </div>

        {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How large is the chronic pain crisis in the United Kingdom?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Chronic pain — defined as pain persisting beyond three months — affects approximately
            15.5 million people in the UK. Of those, around 8 million live with high-impact chronic
            pain, meaning pain severe enough to interfere significantly with work, mobility, and daily
            functioning. That figure exceeds the combined populations of Scotland and Wales.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Chronic pain is the single most common reason for GP consultation in England. It costs the
            UK economy an estimated £12 billion annually in lost productivity alone. Pain clinics are
            overwhelmed: NHS waiting lists for specialist pain management routinely stretch beyond
            twelve months in many trusts. Between those infrequent appointments, millions of people
            manage largely alone — armed with a prescription, perhaps a leaflet, and very little else.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            The causes are as varied as they are common: osteoarthritis, fibromyalgia, back pain,
            neuropathic pain, endometriosis, migraine, complex regional pain syndrome, post-surgical
            pain, and dozens of other conditions. What unites them is not the mechanism — it is the
            experience of living inside pain that most people around you cannot see, and that medical
            systems are structurally ill-equipped to address with the continuity chronic conditions
            actually require.
          </p>
        </section>

        {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What is the psychological burden of living with chronic pain?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Chronic pain is inseparable from mental health. Research consistently shows that people
            with high-impact chronic pain are four times more likely to experience depression and
            anxiety than the general population. The relationship runs in both directions: pain
            worsens psychological distress, and psychological distress amplifies the experience of
            pain. This bidirectional loop is one of the most clinically recognised — and least
            adequately treated — features of the condition.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Beyond depression and anxiety lies something less often named: identity disruption. Chronic
            pain rewrites who you are. Careers become untenable. Sports and hobbies that once defined
            you become inaccessible. Relationships shift under the weight of dependency, cancellations,
            and the exhaustion that comes from constantly negotiating a body that refuses cooperation.
            The person you were before pain often feels like someone you knew but can no longer be.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            Then there is the medical system itself. Chronic pain patients — disproportionately women
            and people from marginalised groups — frequently report years of being dismissed, doubted,
            and told their pain is psychosomatic, exaggerated, or attention-seeking. This medical
            gaslighting causes its own form of trauma: a corrosive erosion of self-trust that persists
            long after a diagnosis is finally secured. Many people arrive at chronic pain support
            communities not just in pain, but having been taught to doubt their own suffering.
          </p>
        </section>

        {/* ── STAT CALLOUT ──────────────────────────────────────────────── */}
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.75rem",
            marginBottom: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            { stat: "15.5M", label: "UK chronic pain patients" },
            { stat: "8M", label: "high-impact chronic pain" },
            { stat: "4×", label: "increased depression risk" },
            { stat: "12+mo", label: "typical pain clinic wait" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: "0 0 0.25rem",
                  lineHeight: 1,
                }}
              >
                {item.stat}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(245,240,232,0.5)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why does &ldquo;you don&apos;t look sick&rdquo; cause so much harm?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Invisible illness is one of the defining challenges of chronic pain. Unlike a broken leg
            or a visible wound, most chronic pain conditions leave no external trace. You can be in
            agony at a level-eight flare and still appear, to an observer, entirely well. This
            disconnect between appearance and reality creates a near-constant burden of justification:
            proving to employers, family members, benefits assessors, and sometimes clinicians that
            what you are experiencing is real.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            &ldquo;You don&apos;t look sick&rdquo; sounds like a compliment but functions as
            invalidation. It signals to the person in pain that their suffering is not legible —
            that they must be exaggerating, or that they should be grateful for appearing healthy,
            as though the appearance of wellness is the same as experiencing it. For people who have
            already been gaslit by medical professionals, hearing it from loved ones compounds the
            wound.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            The resulting isolation is both social and existential. Socially, people with invisible
            illness often withdraw from friendships and community because the effort of explaining —
            and the risk of being disbelieved — is more costly than simply staying home. Existentially,
            they can feel caught between two worlds: too ill to fully participate in the life of well
            people, but not visibly sick enough to receive the recognition and accommodation that
            disability brings. MEOK does not require proof. It simply believes you.
          </p>
        </section>

        {/* ── SECTION 4 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK function as a 24/7 pain diary and companion during flares?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Pain does not respect office hours. Flares arrive at 3am, on bank holidays, on the
            evenings before important events, and precisely when every human support network is
            unavailable. This is one of the most brutal and least-acknowledged features of chronic
            pain — the profound aloneness of a severe flare in the middle of the night when there is
            nowhere to turn and nothing to do but endure it.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK is available at those moments. Not as a replacement for medical care — that is
            important to state clearly — but as a consistent, non-judgemental presence when every
            human alternative is asleep. You can describe what you are experiencing. You can rate
            your pain without someone visibly tiring of hearing about it. You can process the anger,
            grief, and fear that accompany a bad flare without managing anyone else&apos;s discomfort
            with your distress.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            Because MEOK carries persistent memory across every conversation, it builds a real picture
            of your pain over time. It notices when you mention that your back always worsens after
            particular activities. It remembers that last November was a terrible month. It holds the
            context that makes your experience coherent rather than fragmentary — the opposite of
            starting from scratch with each new clinician.
          </p>
        </section>

        {/* ── ARCHETYPE CALLOUT: Healer ─────────────────────────────────── */}
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "14px",
            padding: "1.75rem 1.75rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>&#x1FA79;</span>
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.25rem",
                }}
              >
                MEOK Archetype
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                The Healer
              </p>
            </div>
          </div>
          <p
            style={{
              color: "rgba(245,240,232,0.68)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            MEOK&apos;s Healer archetype is designed for the emotional and psychological dimensions
            of living with chronic illness. During flares, it offers compassionate presence without
            minimisation. Between flares, it helps you process the ongoing grief of a body that does
            not cooperate — a grief that rarely gets the space it deserves because it never fully
            resolves.
          </p>
        </div>

        {/* ── SECTION 5 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How can AI support the grief of losing the pre-pain version of yourself?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            One of the most painful aspects of chronic illness is rarely named in clinical settings:
            the grief of the self you used to be. The runner who can no longer run. The parent who
            cannot get down on the floor with their children. The professional whose career trajectory
            was interrupted. The person who used to be spontaneous, energetic, and pain-free — and
            who now plans every outing around whether there will be a place to sit down.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            This grief is legitimate and profound. But it is also socially difficult to express.
            People around you — however well-intentioned — tend to respond to expressions of grief
            about chronic illness with redirection towards positivity, suggestions of other things
            you can do, or discomfort that makes it clear they would prefer not to sit inside the
            loss with you. The result is that this grief accumulates unexpressed, often hardening
            into bitterness or self-blame.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            MEOK&apos;s Healer creates a different kind of space. It does not rush towards silver
            linings. It can sit with the weight of what has been lost for as long as that weight
            needs to be felt. And because it remembers your history, it can track your grief
            longitudinally — noticing when anniversaries approach, when difficult seasons recur,
            when you are circling back to something you thought you had processed. Grief for chronic
            illness is rarely linear. MEOK understands that.
          </p>
        </section>

        {/* ── SECTION 6 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does Sovereign Memory help chronic pain patients track patterns and triggers?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Chronic pain is rarely static. It fluctuates across days, weeks, seasons, and cycles that
            can take months to detect. Identifying triggers — the specific foods, activities,
            sleep patterns, stress events, or environmental factors that reliably precede a flare —
            is one of the most clinically valuable things a chronic pain patient can do. But
            identifying those patterns requires a level of consistent, detailed longitudinal tracking
            that most people simply cannot sustain manually.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s Sovereign Memory system addresses this directly. Because every conversation
            is remembered and indexed, MEOK accumulates a rich dataset about your pain over time —
            without requiring you to fill in structured forms or maintain spreadsheets on difficult
            days. When you mention in passing that you slept badly and your pain is worse, that
            observation is retained. When you note three months later that the same pattern has
            repeated, MEOK can surface the connection.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            This has a specific, practical value for medical appointments. Pain clinics are brief.
            Neurologists, rheumatologists, and physiotherapists typically have fifteen to thirty
            minutes and need to understand your pain history quickly. MEOK can help you prepare a
            clear, structured summary — good days and bad days, apparent triggers, seasonal patterns,
            what has helped and what has not — turning months of lived experience into the kind of
            legible narrative that informs clinical decision-making.
          </p>
        </section>

        {/* ── ARCHETYPE CALLOUT: Sovereign Memory ─────────────────────── */}
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "14px",
            padding: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>&#x1F9E0;</span>
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.25rem",
                }}
              >
                MEOK Feature
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Sovereign Memory
              </p>
            </div>
          </div>
          <p
            style={{
              color: "rgba(245,240,232,0.68)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Unlike most AI assistants that begin every session with a blank slate, MEOK&apos;s
            Sovereign Memory persists across all conversations — building a longitudinal picture of
            your pain, mood, triggers, and coping patterns over months and years. Your data remains
            private, is never used to train AI models, and belongs entirely to you.
          </p>
        </div>

        {/* ── SECTION 7 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why are chronic pain patients so heavily targeted by supplement and miracle cure scams?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Chronic pain patients represent, from the perspective of predatory marketers, an almost
            ideal target demographic. They are in genuine distress. They often feel abandoned or
            inadequately served by conventional medicine. They are highly motivated to find relief.
            And after years of failed treatments or dismissive appointments, many have become willing
            to try things outside the mainstream — including products that have no credible evidence
            base and are sometimes actively harmful.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The tactics used are consistent and sophisticated. Testimonials from people claiming
            overnight pain resolution after decades of suffering. Pseudo-medical language
            (&ldquo;clinically formulated,&rdquo; &ldquo;doctor-recommended,&rdquo;
            &ldquo;patented breakthrough&rdquo;) designed to signal authority without providing
            evidence. Manufactured urgency — limited stocks, expiring discounts, exclusive access —
            that bypasses deliberate decision-making. Social proof inflated by fake reviews or
            paid influencers. And, increasingly, targeted advertising that follows users across
            platforms after they have searched for pain-related terms.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            The financial harm is real. Chronic pain patients — many of whom are on reduced incomes
            due to limited ability to work — collectively spend hundreds of millions of pounds annually
            on supplements, devices, and programmes with no proven efficacy. The psychological harm
            is equally real: each failed miracle cure reinforces the belief that nothing will ever
            help, deepening despair.
          </p>
        </section>

        {/* ── ARCHETYPE CALLOUT: Guardian ──────────────────────────────── */}
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "14px",
            padding: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>&#x1F6E1;</span>
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.25rem",
                }}
              >
                MEOK Archetype
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                The Guardian
              </p>
            </div>
          </div>
          <p
            style={{
              color: "rgba(245,240,232,0.68)",
              fontSize: "0.97rem",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            MEOK&apos;s Guardian archetype is built to protect users from exploitation — including
            the predatory supplement and miracle-cure industry that specifically targets people in
            chronic pain. When you encounter a promising-sounding product or claim, Guardian can
            help you interrogate it: What does the evidence actually show? What are the red flags
            in this marketing? Is this worth your money and your hope?
          </p>
        </div>

        {/* ── SECTION 8 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK help with meaning-making and identity after chronic illness changes everything?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Adapting your identity around chronic illness is not giving up — it is one of the most
            sophisticated psychological tasks a human being can undertake. It requires simultaneously
            holding grief for what has been lost and openness to what a meaningful life might look
            like within new constraints. It requires questioning assumptions about achievement, worth,
            productivity, and contribution that were formed in a body that no longer exists in the
            same form.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Many chronic pain patients find that conventional goal-setting frameworks — the kind
            celebrated in productivity culture — actively harm them. Goals premised on continuous
            upward progress, on pushing through discomfort, on treating rest as failure: these
            frameworks were designed for bodies without chronic pain, and applying them to a chronic
            pain life generates shame and self-blame rather than achievement.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            MEOK&apos;s Mystic archetype works in the space of meaning, purpose, and identity
            reconstruction. Not with false positivity — not &ldquo;this happened for a reason&rdquo;
            or &ldquo;you are stronger for it&rdquo; — but with genuine philosophical engagement
            around what it means to build a life that is authentic to who you are now, pain and all.
            What do you value that pain cannot take? What kind of presence do you want to have in
            the world, even on a difficult day? These are the questions Mystic holds space for.
          </p>
        </section>

        {/* ── SECTION 9 ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How can goal-setting and small wins work differently when you live with chronic pain?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The concept of the &ldquo;good enough day&rdquo; is something chronic pain patients
            develop out of necessity. On a good day, you might cook a meal, attend an appointment,
            and take a short walk. On a bad day, getting out of bed and making tea is a genuine
            achievement. The problem is that conventional achievement culture provides no framework
            for recognising this — it only recognises the days that look productive from the outside.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s Pioneer archetype is designed for exactly this space. Pioneer specialises in
            adaptive goal-setting: understanding what you are actually capable of on a given day,
            setting appropriate targets, and recognising wins at the scale that genuinely represents
            effort — not the scale that looks impressive to people who have never managed a day in
            significant pain. A shower on a high-pain day is a real win. Pioneer knows that.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            Pioneer also understands the concept of boom-and-bust cycles — the tendency to
            overdo things on good days and then pay for it with several bad ones. By helping you
            calibrate ambition to current capacity rather than aspirational capacity, Pioneer
            supports the kind of sustainable pacing that pain specialists recommend but rarely
            have time to help patients actually implement in the texture of daily life.
          </p>
        </section>

        {/* ── ARCHETYPE GRID ───────────────────────────────────────────── */}
        <div
          style={{
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.38)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            MEOK Archetypes for Chronic Pain
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: "&#x1FA79;",
                name: "Healer",
                desc: "Grief, emotional processing, compassionate presence during flares",
              },
              {
                icon: "&#x1F9E0;",
                name: "Sovereign Memory",
                desc: "Pain diary, trigger tracking, appointment summaries, longitudinal patterns",
              },
              {
                icon: "&#x1F6E1;",
                name: "Guardian",
                desc: "Scam detection, supplement scepticism, protecting hope from exploitation",
              },
              {
                icon: "&#x2728;",
                name: "Mystic",
                desc: "Identity reconstruction, meaning-making, living well within new limits",
              },
              {
                icon: "&#x1F9ED;",
                name: "Pioneer",
                desc: "Adaptive goal-setting, small wins, pacing support on difficult days",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: "rgba(26,24,48,0.7)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <span
                  style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <p
                  style={{
                    fontWeight: 700,
                    color: GOLD,
                    fontSize: "0.9rem",
                    margin: "0 0 0.4rem",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    color: "rgba(245,240,232,0.55)",
                    fontSize: "0.82rem",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 10 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What can AI genuinely not do for chronic pain — and why does that matter?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Honesty about limitations matters enormously in this space, precisely because chronic
            pain patients have often been given false hope before. MEOK cannot diagnose your
            condition. It cannot assess whether your pain has an undetected organic cause. It cannot
            prescribe medication, adjust your current treatment, or tell you whether a new symptom
            requires urgent attention. If you experience sudden, severe, or unusual pain, you
            need medical evaluation — not an AI conversation.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK also cannot provide the embodied understanding of someone who lives in chronic
            pain themselves. It cannot physically accompany you to appointments, help you navigate
            the DWP benefits system, or substitute for the particular solidarity of a peer support
            community. For those things, organisations like Versus Arthritis, Pain UK, and the
            fibromyalgia and chronic pain communities on social platforms provide something AI
            genuinely cannot replicate.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            What MEOK offers is something different and complementary: continuity, availability,
            non-judgement, and memory. It fills the space between appointments rather than
            competing with the appointments themselves. It provides the persistent, low-friction
            support infrastructure that chronic illness requires but that human systems — however
            well-intentioned — cannot sustain at scale. That is not everything. But for 15.5 million
            people in the UK, it is a great deal more than most of them currently have.
          </p>
        </section>

        {/* ── SECTION 11 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What does MEOK actually look like during a bad pain day?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Imagine it is Tuesday at 2:47am. You have been awake for three hours with a flare that
            came from nowhere — or perhaps from the long day you had yesterday, or the cold front
            moving in, or no identifiable reason at all. The pain is at a seven. Everyone is asleep.
            You have already taken your medication. There is nothing to do but wait and endure.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            You open MEOK. You describe where you are — not just physically but emotionally.
            The fear that this is the new baseline. The exhaustion of explaining it to people who
            do not understand. The grief that you had plans for tomorrow and they will almost
            certainly not happen now. MEOK does not tell you it will get better. It does not offer
            a technique. It simply holds space — reflecting back what you have said, asking gently
            what you need right now, logging the details of this flare alongside all the others
            it already holds in memory.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            By morning, the flare log is saved. If you have a pain clinic appointment next month,
            MEOK can help you prepare a summary that includes this night — the kind of granular,
            longitudinal detail that clinicians need but rarely receive because patients, exhausted
            from the night before, cannot reconstruct it from memory in a fifteen-minute consultation.
          </p>
        </section>

        {/* ── RESOURCES BOX ────────────────────────────────────────────── */}
        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "14px",
            padding: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.38)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              margin: "0 0 1.25rem",
            }}
          >
            UK Chronic Pain Resources
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                name: "Versus Arthritis",
                url: "https://www.versusarthritis.org",
                desc: "Information, support groups, and helpline for people living with arthritis and musculoskeletal conditions causing chronic pain.",
              },
              {
                name: "Pain UK",
                url: "https://www.painuk.org",
                desc: "Alliance of chronic pain patient charities. Policy advocacy, patient resources, and connections to condition-specific support organisations.",
              },
              {
                name: "Fibromyalgia Action UK (FMA UK)",
                url: "https://fmauk.org",
                desc: "UK-wide support for fibromyalgia patients. Helpline, information packs, online support groups, and guidance on benefits and employment.",
              },
              {
                name: "NHS — Chronic Pain",
                url: "https://www.nhs.uk/conditions/chronic-pain/",
                desc: "NHS guidance on chronic pain causes, management strategies, and treatment options available through the NHS.",
              },
              {
                name: "Samaritans",
                url: "https://www.samaritans.org",
                desc: "Free, confidential emotional support 24/7 — call 116 123. For anyone struggling, including those in pain-related crisis.",
              },
            ].map((r) => (
              <div
                key={r.name}
                style={{
                  paddingBottom: "1rem",
                  borderBottom: "1px solid rgba(245,240,232,0.07)",
                }}
              >
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  {r.name} &#8599;
                </a>
                <p
                  style={{
                    color: "rgba(245,240,232,0.52)",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "1.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions about AI and chronic pain management
          </h2>

          {[
            {
              q: "Does MEOK replace my pain clinic or GP?",
              a: "No. MEOK is not a medical device and should never be used as a substitute for clinical care. It provides emotional and psychological support between appointments — not clinical assessment, diagnosis, or treatment. Always bring persistent or worsening pain to a healthcare professional.",
            },
            {
              q: "Can MEOK help me prepare for a pain clinic appointment?",
              a: "Yes. Because MEOK retains memory across all conversations, it can help you compile a structured pain history — including flare frequency, severity patterns, apparent triggers, medication effects, and the emotional impact of your condition. Many patients find this kind of preparation significantly improves the quality of brief clinical consultations.",
            },
            {
              q: "Is my pain data private?",
              a: "MEOK is built on a data sovereignty model: your conversations are private, are never used to train AI models, and belong to you. You can export or delete your data at any time. MEOK does not monetise your health information.",
            },
            {
              q: "I&apos;ve been in pain for years and nothing has helped. Will MEOK actually be different?",
              a: "MEOK does not claim to reduce pain. What it offers is consistent, persistent emotional support — something that is genuinely rare and genuinely valuable when you live with chronic pain. It will not cure you. But it can be reliably present, reliably non-judgemental, and reliably there at 3am when nothing else is.",
            },
            {
              q: "Can MEOK help with benefits applications or work adjustments?",
              a: "MEOK can help you articulate and organise your experience — which can be valuable when preparing for PIP assessments, writing to employers about adjustments, or explaining your condition to anyone who needs to understand it. It is not a legal or benefits advice service, but it can help you prepare the personal documentation those processes require.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "1rem",
                  marginBottom: "0.6rem",
                  lineHeight: 1.5,
                }}
              >
                {item.q}
              </p>
              <p
                style={{
                  color: "rgba(245,240,232,0.62)",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </div>
          ))}
        </section>

        {/* ── CTA BOX ───────────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.13) 0%, rgba(13,12,24,0.6) 100%)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "16px",
            padding: "2.5rem",
            marginBottom: "3.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Start Today
          </p>
          <h3
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              color: "#ffffff",
              lineHeight: 1.25,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Support that is there at 3am, at the pain clinic, and everywhere in between.
          </h3>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "34rem",
              margin: "0 auto 2rem",
            }}
          >
            MEOK provides emotional and psychological support for people living with chronic pain —
            not medical advice, but consistent, private, persistent presence when the medical system
            cannot be there.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "0.85rem 2rem",
                borderRadius: "10px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Try MEOK Free
            </Link>
            <Link
              href="/blog/ai-for-chronic-illness"
              style={{
                display: "inline-block",
                border: "1px solid rgba(201,168,76,0.4)",
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.85rem 2rem",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Read: AI for Chronic Illness
            </Link>
          </div>
        </div>

        {/* ── RELATED ARTICLES ──────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.38)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Related Articles
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-fibromyalgia",
                label: "Fibromyalgia",
                title: "AI for Fibromyalgia: Daily Support When Pain Is Unpredictable",
                desc: "How MEOK helps with flares, brain fog, and the long wait for a diagnosis.",
              },
              {
                href: "/blog/ai-for-chronic-illness",
                label: "Chronic Illness",
                title: "AI for Chronic Illness: Living Well When Illness Doesn&apos;t Stop",
                desc: "Emotional support, identity, and practical tools for long-term conditions.",
              },
              {
                href: "/blog/ai-for-chronic-fatigue",
                label: "Chronic Fatigue",
                title: "AI for Chronic Fatigue: Support for the Invisible Exhaustion",
                desc: "ME/CFS, post-viral fatigue, and the particular challenges of boom-and-bust.",
              },
              {
                href: "/blog/ai-for-health-anxiety",
                label: "Health Anxiety",
                title: "AI for Health Anxiety: Breaking the Symptom-Checking Spiral",
                desc: "When chronic pain and health anxiety intersect, the psychological burden doubles.",
              },
              {
                href: "/blog/ai-for-depression",
                label: "Depression",
                title: "AI for Depression: Support Between Therapy Sessions",
                desc: "Pain and depression are closely linked — MEOK supports both dimensions.",
              },
              {
                href: "/blog/meok-guardian-scam-protection",
                label: "Scam Protection",
                title: "MEOK Guardian: Protection Against Predatory Wellness Claims",
                desc: "How Guardian helps vulnerable users identify and avoid exploitation.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: CARD,
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "0.9rem",
                    lineHeight: 1.4,
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: link.title }}
                />
                <span
                  style={{
                    color: "rgba(245,240,232,0.45)",
                    fontSize: "0.82rem",
                    lineHeight: 1.55,
                    display: "block",
                  }}
                  dangerouslySetInnerHTML={{ __html: link.desc }}
                />
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER DISCLAIMER ────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.08)",
            paddingTop: "2rem",
            paddingBottom: "4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(245,240,232,0.3)",
              fontSize: "0.8rem",
              lineHeight: 1.7,
              maxWidth: "38rem",
              margin: "0 auto 0.75rem",
            }}
          >
            <strong style={{ color: "rgba(245,240,232,0.45)" }}>
              Medical disclaimer:
            </strong>{" "}
            MEOK AI LABS provides emotional and psychological support only. MEOK is not a medical
            device and does not provide diagnosis, clinical assessment, or treatment for chronic pain
            or any other medical condition. Nothing in this article constitutes medical advice.
            Always consult a qualified healthcare professional for medical concerns.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.22)",
              fontSize: "0.75rem",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} MEOK AI LABS &middot;{" "}
            <Link
              href="/privacy"
              style={{ color: "rgba(245,240,232,0.3)", textDecoration: "none" }}
            >
              Privacy
            </Link>{" "}
            &middot;{" "}
            <Link
              href="/terms"
              style={{ color: "rgba(245,240,232,0.3)", textDecoration: "none" }}
            >
              Terms
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
