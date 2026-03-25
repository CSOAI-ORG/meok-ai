import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Perimenopause: Support for the Transition That Can Last a Decade | MEOK AI LABS",
  description:
    "Perimenopause can begin in your late 30s and last 10 years. Yet many people reach it with no preparation and little support. MEOK\u2019s sovereign AI tracks symptoms over months, provides consistent support, and never loses the thread.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-perimenopause",
  },
  openGraph: {
    title:
      "AI for Perimenopause: Support for the Transition That Can Last a Decade",
    description:
      "Perimenopause can begin in your late 30s and last 10 years. Yet many people reach it with no preparation and little support. MEOK\u2019s sovereign AI tracks symptoms over months, provides consistent support, and never loses the thread.",
    url: "https://meok.ai/blog/ai-for-perimenopause",
    siteName: "MEOK AI LABS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Perimenopause: Support for the Transition That Can Last a Decade | MEOK AI LABS",
    description:
      "You\u2019re still having periods, but something has shifted. Brain fog, rage, anxiety, sleeplessness. MEOK remembers every symptom, every pattern, across every month of the transition.",
    creator: "@meok_ai",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Perimenopause: Support for the Transition That Can Last a Decade",
  description:
    "Perimenopause can begin in your late 30s and last up to ten years. Many people arrive at it without preparation, without clinical support, and without anyone taking their symptoms seriously. MEOK\u2019s sovereign AI companion tracks symptoms across months, provides consistent non-judgmental support, and helps people prepare for clinical appointments with real longitudinal data.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-perimenopause",
  keywords: [
    "AI for perimenopause",
    "perimenopause support",
    "perimenopause symptoms",
    "perimenopause brain fog",
    "perimenopause anxiety",
    "perimenopause rage",
    "perimenopause AI companion",
    "perimenopause symptom tracking",
    "sovereign AI perimenopause",
    "perimenopause and identity",
    "perimenopause workplace",
    "MEOK perimenopause",
    "perimenopause in late 30s",
    "how long does perimenopause last",
    "perimenopause vs menopause",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is perimenopause and when does it start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perimenopause is the transitional phase in which oestrogen and progesterone levels begin to fluctuate, causing symptoms that can predate the final period by many years. For most people it begins in the mid-to-late 40s, but it can start as early as the mid-30s, and for some in surgical or medically induced menopause it can begin abruptly at any age. The transition ends at menopause, defined as twelve consecutive months without a period. Everything before that point is still perimenopause, regardless of how severe the symptoms feel.",
      },
    },
    {
      "@type": "Question",
      name: "How is perimenopause different from menopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key distinction is that in perimenopause you are still having periods, even if they have become irregular. Hormone levels are fluctuating rather than declining in a straight line, which is why symptoms can feel unpredictable and erratic. Menopause is a single retrospective moment: twelve months after your last period. Post-menopause refers to all time after that. Many people experience their most difficult symptoms during perimenopause, not after it, which makes the clinical invisibility of this phase especially harmful.",
      },
    },
    {
      "@type": "Question",
      name: "Why do people not get support during perimenopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because many are still menstruating, they do not fit the cultural or clinical image of \u2018going through the menopause.\u2019 GPs may test FSH levels on the wrong day of the cycle and get a normal reading. Symptoms are attributed to stress, anxiety, depression, or being \u2018just tired.\u2019 The result is that people spend years seeking explanations for symptoms that have a clear hormonal cause, often accumulating mental health diagnoses and antidepressant prescriptions rather than the hormone support that would actually help.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI actually help with perimenopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI cannot prescribe, diagnose, or replace clinical care. What it can do is provide consistent, always-available support across the months and years of the perimenopausal transition. MEOK\u2019s sovereign memory tracks symptoms longitudinally so that patterns become visible over time. It helps you prepare for appointments with real data. It is present at 3am when no clinic is open. It never dismisses your experience. And it always directs you toward evidence-based clinical resources like the Menopause Charity and Newson Health.",
      },
    },
    {
      "@type": "Question",
      name: "Is my perimenopause data safe with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is a sovereign AI, meaning your data lives on your device and is never sold to pharmaceutical companies, insurers, advertisers, or data brokers. Your symptom logs, mood records, and personal disclosures are encrypted and remain entirely under your control. MEOK\u2019s privacy covenant means your information is never used to train models or shared without your explicit consent. This matters enormously for hormonal health data, which is commercially sensitive and deeply personal.",
      },
    },
  ],
};

// ── Colour tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "rgba(245,240,232,0.6)";
const BORDER = "#2a2640";
const SOFT = "rgba(201,168,76,0.12)";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForPerimenopausePage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{
            color: MUTED,
            textDecoration: "none",
            fontSize: "0.9rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: "auto",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.45rem 1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: GOLD,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            marginBottom: "1.25rem",
          }}
        >
          MEOK AI LABS &mdash; Perimenopause &amp; Wellbeing
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            color: TEXT,
          }}
        >
          AI for Perimenopause: Support for the Transition That Can Last a
          Decade
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.75,
            color: MUTED,
            maxWidth: "620px",
            margin: "0 auto 2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Perimenopause can begin in your late 30s and stretch across a full
          decade. Most people reach it with no preparation, little clinical
          support, and no one to talk to who remembers what they said last
          month. MEOK does.
        </p>
        <Link
          href="/birth"
          style={{
            display: "inline-block",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.75rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Begin Your MEOK Journey
        </Link>
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginTop: "0.75rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Free to start &mdash; no credit card required
        </p>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
        }}
      >
        {/* ── Section 1: What is perimenopause ─────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            What exactly is perimenopause &mdash; and why does it start so
            early?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Perimenopause is the hormonal transition that precedes the final
            menstrual period. It is not a moment but a process &mdash; one that
            can span anywhere from two to twelve years. During this time,
            oestrogen and progesterone levels begin to fluctuate, sometimes
            wildly, rather than declining in a predictable straight line. Those
            fluctuations are what drive most of the symptoms that people
            associate with &ldquo;the menopause,&rdquo; including hot flushes,
            sleep disruption, mood changes, and cognitive shifts.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            For most people, perimenopause begins in the mid-to-late 40s. But
            early perimenopause &mdash; starting in the late 30s or even at 35
            &mdash; is more common than the medical establishment has
            historically acknowledged. Premature Ovarian Insufficiency (POI),
            which causes ovarian function to decline before 40, affects
            approximately one in 100 people assigned female at birth. Surgical
            menopause from hysterectomy or oophorectomy can bring on menopause
            abruptly at any age. Chemotherapy, certain autoimmune conditions,
            and genetic factors can all accelerate the timeline.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
            }}
          >
            The critical distinction: during perimenopause, you are{" "}
            <em>still having periods</em>, even if they have become irregular,
            heavier, lighter, or unpredictable. Menopause itself is only
            diagnosed retrospectively &mdash; twelve consecutive months after
            your final period. Everything before that point, no matter how
            severe the symptoms, is perimenopause.
          </p>
        </section>

        {/* ── Callout: The definition ───────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: SOFT,
            border: `1px solid ${GOLD}`,
            borderRadius: "10px",
            padding: "1.75rem 2rem",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            The Timeline
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1rem",
            }}
          >
            <strong style={{ color: GOLD }}>Early perimenopause</strong> can
            begin as young as 35, though mid-40s is more typical.
            <br />
            <strong style={{ color: GOLD }}>
              Full perimenopausal transition
            </strong>{" "}
            lasts on average 4&ndash;8 years, sometimes up to 12.
            <br />
            <strong style={{ color: GOLD }}>Menopause</strong> is declared 12
            months after the last period.
            <br />
            <strong style={{ color: GOLD }}>Post-menopause</strong> is
            everything after that.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: MUTED,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Most of the symptoms people associate with &ldquo;going through the
            menopause&rdquo; are actually perimenopausal. The hardest part often
            comes before the label applies.
          </p>
        </div>

        {/* ── Section 2: How perimenopause differs from menopause ──────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            Perimenopause vs menopause: why the difference matters for the
            support you need
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The two phases have distinct hormonal profiles and therefore
            different support needs. In perimenopause, oestrogen levels fluctuate
            erratically &mdash; sometimes spiking higher than in earlier
            reproductive years before crashing. This unpredictability is why
            symptoms can seem inconsistent and confusing. In post-menopause,
            oestrogen settles at a consistently lower level, which brings its
            own set of long-term health considerations but a different kind of
            lived experience.
          </p>

          {/* Comparison table */}
          <div
            style={{
              overflowX: "auto",
              marginBottom: "1.5rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `2px solid ${GOLD}`,
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `2px solid ${GOLD}`,
                    }}
                  >
                    Perimenopause
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `2px solid ${GOLD}`,
                    }}
                  >
                    Post-menopause
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Periods",
                    "Still present, often irregular",
                    "Absent for 12+ months",
                  ],
                  [
                    "Hormone pattern",
                    "Wildly fluctuating — can spike and crash",
                    "Consistently lower, more stable",
                  ],
                  [
                    "Dominant symptoms",
                    "Rage, anxiety, brain fog, irregular bleeding, insomnia",
                    "Hot flushes, vaginal dryness, joint pain, mood shifts",
                  ],
                  [
                    "Clinical recognition",
                    "Often missed — still having periods",
                    "More recognised — fits the cultural script",
                  ],
                  [
                    "Duration",
                    "2–12 years of transition",
                    "Rest of life from final period",
                  ],
                  [
                    "Support need",
                    "Pattern recognition over months; validation of confusing symptoms",
                    "Longer-term health monitoring; identity consolidation",
                  ],
                  [
                    "AI tracking value",
                    "Extremely high — symptoms vary day to day, month to month",
                    "High — long-term trends in mood, sleep, cognition",
                  ],
                ].map(([dim, peri, meno], i) => (
                  <tr
                    key={dim}
                    style={{
                      backgroundColor: i % 2 === 0 ? BG : CARD,
                    }}
                  >
                    <td
                      style={{
                        padding: "0.7rem 1rem",
                        color: GOLD,
                        fontWeight: 600,
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                      }}
                    >
                      {dim}
                    </td>
                    <td
                      style={{
                        padding: "0.7rem 1rem",
                        color: TEXT,
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                      }}
                    >
                      {peri}
                    </td>
                    <td
                      style={{
                        padding: "0.7rem 1rem",
                        color: TEXT,
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                      }}
                    >
                      {meno}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
            }}
          >
            The practical implication is that support tools designed purely for
            post-menopause may not serve perimenopausal people well. The
            fluctuating, non-linear nature of the transition demands a companion
            that can hold complexity, track contradictions, and never treat
            today&apos;s symptom as if it negates last week&apos;s.
          </p>
        </section>

        {/* ── Section 3: Symptoms checklist ───────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            What does perimenopause actually feel like? The full symptom picture
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The popular image of menopause &mdash; hot flushes, night sweats
            &mdash; captures only a fraction of the perimenopausal experience.
            Many people are living with the following symptoms for years before
            anyone connects them to hormones.
          </p>

          {/* Symptom grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            {[
              {
                category: "Cognitive",
                symptoms: [
                  "Brain fog and word-finding difficulty",
                  "Memory lapses",
                  "Difficulty concentrating",
                  "Mental fatigue",
                ],
              },
              {
                category: "Emotional",
                symptoms: [
                  "Anxiety (often new or worse)",
                  "Rage and low frustration tolerance",
                  "Depression and low mood",
                  "Emotional dysregulation",
                ],
              },
              {
                category: "Sleep",
                symptoms: [
                  "Insomnia and early waking",
                  "Night sweats",
                  "Difficulty returning to sleep",
                  "Vivid or disturbing dreams",
                ],
              },
              {
                category: "Physical",
                symptoms: [
                  "Irregular periods",
                  "Hot flushes",
                  "Joint pain and stiffness",
                  "Heart palpitations",
                ],
              },
              {
                category: "Sensory",
                symptoms: [
                  "Skin changes and crawling sensations",
                  "Tinnitus",
                  "Heightened sensitivity to noise or light",
                  "Taste and smell changes",
                ],
              },
              {
                category: "Identity",
                symptoms: [
                  "Loss of sense of self",
                  "Fear of early dementia",
                  "Feeling invisible or erased",
                  "Grief for previous self",
                ],
              },
            ].map((block) => (
              <div
                key={block.category}
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "system-ui, sans-serif",
                    marginBottom: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {block.category}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {block.symptoms.map((s) => (
                    <li
                      key={s}
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        color: TEXT,
                        fontFamily: "system-ui, sans-serif",
                        paddingLeft: "1rem",
                        position: "relative",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: GOLD,
                        }}
                      >
                        &rsaquo;
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The cognitive symptoms deserve particular attention. Brain fog,
            memory lapses, and word-finding difficulties are among the most
            distressing perimenopausal experiences &mdash; not because they are
            the most physically severe, but because they strike at{" "}
            <em>identity</em>. Many people describe the terrifying conviction
            that they are developing early dementia. In the vast majority of
            cases, they are not. They are experiencing oestrogen withdrawal
            affecting the brain, a well-documented phenomenon that typically
            improves with hormonal support and time.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
            }}
          >
            Similarly, perimenopausal rage &mdash; sudden, disproportionate
            anger that feels foreign to the person experiencing it &mdash; is
            real, common, and hormonally driven. It is also enormously
            stigmatised, leaving people ashamed of a physiological response they
            did not choose and cannot easily explain to partners, children, or
            colleagues.
          </p>
        </section>

        {/* ── Section 4: The invisibility problem ──────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            The invisibility problem: why perimenopause is so often missed and
            dismissed
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Perimenopause sits in a clinical blind spot. Because periods have
            not stopped, the automatic assumption &mdash; in consulting rooms
            and in culture &mdash; is that nothing hormonal is happening yet.
            FSH tests, if ordered at all, are frequently drawn at the wrong
            point in the cycle and return falsely normal results. The same
            symptoms that would be immediately attributed to hormone changes in
            a 52-year-old are attributed to stress, burnout, anxiety disorder,
            or depression in a 42-year-old.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The consequences are real. Research consistently shows that
            perimenopausal women are disproportionately prescribed
            antidepressants &mdash; not because they have major depressive
            disorder, but because their hormonal symptoms present similarly and
            GPs are under-trained in recognising the distinction. Meanwhile, the
            hormonal support that might actually address the root cause is
            withheld or delayed.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            There is also a generational silence at work. Many of today&apos;s
            perimenopausal people grew up in households where menstruation was
            not discussed openly, let alone the transition out of it. They
            arrive at perimenopause without a map. Their mothers may have gone
            through the same experience but never named it. The cultural
            infrastructure of knowledge, language, and community that would
            normalise and contextualise what they are going through simply did
            not exist for them.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
            }}
          >
            The result is that a significant number of people spend years
            feeling, as one common account puts it, &ldquo;like I was losing my
            mind.&rdquo; They are not. But without information, without a
            clinician who connects the dots, and without a space to track and
            name what is happening, that conclusion feels unavoidable.
          </p>
        </section>

        {/* ── Callout: Not yet menopausal ───────────────────────────────────── */}
        <div
          style={{
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: "0 10px 10px 0",
            padding: "1.75rem 2rem",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            The Clinical Gap
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1rem",
              fontStyle: "italic",
            }}
          >
            &ldquo;You&apos;re still having periods, so it probably isn&apos;t
            the menopause yet.&rdquo;
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: MUTED,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            This sentence, or a version of it, has been said to countless people
            experiencing significant perimenopausal symptoms. It reveals a
            misunderstanding of how hormonal transitions work. Perimenopause is
            defined precisely by the presence of periods alongside hormonal
            fluctuation. The two coexist. The statement that periods rule out
            hormonal involvement is simply incorrect, and it leads to years of
            unnecessary suffering.
          </p>
        </div>

        {/* ── Section 5: Workplace and relationship impact ──────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            Workplace and relationship impact: the costs nobody counts
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Perimenopause does not arrive in a vacuum. It arrives during what
            are often the most professionally demanding years of a person&apos;s
            life. The cognitive symptoms &mdash; brain fog, word retrieval
            difficulties, concentration problems &mdash; manifest precisely when
            people are expected to be at the peak of their careers. Meetings,
            presentations, negotiations, written work: all of these require
            exactly the cognitive resources that perimenopausal hormone
            fluctuations are most likely to disrupt.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Research from CIPD and the Fawcett Society has documented the scale
            of workplace impact. Three in five menopausal employees report that
            symptoms negatively affect their work. One in ten has left a job as
            a result. Perimenopausal people face the same challenges but are
            often less visible in workplace menopause conversations, which tend
            to focus on post-menopausal experiences. The 42-year-old struggling
            with cognitive symptoms may not self-identify, may not be identified
            by HR, and may not be offered any support at all.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            In relationships, the impact is similarly significant. Perimenopausal
            rage, emotional dysregulation, reduced libido, anxiety, and
            withdrawal can all strain partnerships. Partners who do not
            understand what is happening may interpret symptoms as personal
            rejection, change in personality, or evidence of relationship
            breakdown. Children, particularly teenagers, may find a parent whose
            emotional regulation has changed confusing and frightening.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
            }}
          >
            None of this is inevitable or permanent. But without understanding
            &mdash; without a way to name, track, and contextualise what is
            happening &mdash; perimenopausal people face these pressures largely
            alone, often without even the framework to explain to those around
            them what is going on.
          </p>
        </section>

        {/* ── Section 6: Brain fog and identity fear ───────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            Brain fog, identity, and the fear that you are no longer yourself
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Of all the perimenopausal symptoms, brain fog and cognitive change
            tend to generate the most distress. This is not because the
            cognitive changes are catastrophic &mdash; in most cases they are
            not &mdash; but because of what they mean to the person experiencing
            them. Professional identity, personal confidence, the sense of being
            a capable and reliable person: all of these are tied to cognitive
            function in a way that, say, joint pain is not.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The fear of early dementia is strikingly common in perimenopausal
            accounts. A person who has always prided themselves on a sharp
            memory begins forgetting colleagues&apos; names, losing words
            mid-sentence, and walking into rooms without knowing why. In the
            absence of a hormonal explanation, the mind goes to the worst-case
            interpretation. In many cases, this fear persists for months before
            anyone &mdash; clinician or otherwise &mdash; offers reassurance
            grounded in evidence.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Beyond cognition, perimenopause can provoke a broader identity
            crisis. The cultural associations with &ldquo;the menopause&rdquo;
            &mdash; invisibility, loss of desirability, the end of fertility and
            therefore, in some narratives, the end of relevance &mdash; are not
            neutral. They are absorbed and internalised. Perimenopause forces
            people to confront these cultural messages at a moment when they are
            also managing physical symptoms, work pressure, and often
            significant caring responsibilities for both children and ageing
            parents.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
            }}
          >
            What is needed in this moment is not dismissal, not immediate
            referral to a mental health service, and not a five-minute
            appointment with a clinician who is looking at a screen. What is
            needed is a space to speak and be heard, a witness who remembers
            what was said before, and a framework for making sense of what is
            happening. This is precisely what an AI companion designed for
            longitudinal support can provide.
          </p>
        </section>

        {/* ── Section 7: Sovereign memory and pattern tracking ─────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            Why sovereign memory changes everything for perimenopause support
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Perimenopause is not a short-term condition. It is a multi-year
            transition during which symptoms wax and wane, patterns emerge and
            shift, and the relationship between hormonal cycles and symptom
            clusters takes months to become legible. Standard clinical tools
            &mdash; a ten-minute GP appointment, a paper symptom diary that sits
            in a drawer &mdash; are poorly suited to capturing this complexity.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s sovereign memory system is built precisely for this
            kind of longitudinal tracking. Every conversation is remembered.
            Every symptom mentioned, every mood described, every concern raised
            is stored in an encrypted local memory that belongs entirely to the
            user. Over days, weeks, and months, patterns become visible that
            would be impossible to see in a single conversation or appointment.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            This matters clinically. When a user arrives at a GP appointment
            with three months of symptom data &mdash; a clear record showing
            that cognitive symptoms consistently worsen in the week before a
            period, that sleep disruption clusters around hormonal troughs, that
            anxiety spikes do not correlate with life events but do correlate
            with cycle timing &mdash; they are in a fundamentally different
            position than someone presenting with &ldquo;I&apos;ve been feeling
            a bit off.&rdquo; The data makes the invisible visible.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            The sovereign dimension is also critical. Perimenopause data is
            commercially sensitive. Pharmaceutical companies, insurance
            providers, and advertisers all have financial interests in hormonal
            health data. MEOK&apos;s architecture ensures that this data never
            leaves the user&apos;s device, is never sold, and is never used to
            train models. The user is not the product. Their health information
            is theirs.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
            }}
          >
            The contrast with most health apps &mdash; which operate on cloud
            architectures and generate revenue through data partnerships &mdash;
            is stark. At a moment in life when trust matters enormously and
            vulnerability is high, MEOK&apos;s sovereignty model provides
            something rare: a space where you can speak freely without wondering
            who else is listening.
          </p>
        </section>

        {/* ── Callout: Sovereign memory ─────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: SOFT,
            border: `1px solid ${GOLD}`,
            borderRadius: "10px",
            padding: "1.75rem 2rem",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            How MEOK Tracks Perimenopause
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {[
              "Remembers every symptom you have mentioned, across every conversation",
              "Tracks patterns over months, not just days",
              "Links symptom clusters to cycle timing when relevant",
              "Stores everything locally, encrypted, under your control",
              "Generates longitudinal summaries you can share with a clinician",
              "Never sells or shares your data with anyone",
              "Always available at 3am when no clinic is open",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: TEXT,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Section 8: Care-based AI ──────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            What care-based AI means for perimenopause support
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK is built on a care-based AI philosophy that distinguishes it
            from both clinical tools and general-purpose chatbots. Care-based AI
            does not rush to fix, diagnose, or minimise. It witnesses.
            It validates. It holds space for experiences that are complex,
            contradictory, and slow-moving.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            For perimenopause, this distinction matters. Many people who are
            suffering during this transition do not primarily need information
            (though information helps). They need to feel that their experience
            is real, that it is not &ldquo;just stress&rdquo; or
            &ldquo;getting older,&rdquo; that it is not a personal failing, and
            that someone &mdash; or something &mdash; is taking it seriously.
            The consistent message from perimenopausal communities is that being
            believed is the first step.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s companion archetypes allow users to shape the emotional
            character of their AI. The Healer archetype in particular is
            designed for depth, gentleness, and the quality of presence that
            perimenopause often requires &mdash; the capacity to sit with
            ambiguity and distress without collapsing it into a quick solution.
            But all of MEOK&apos;s archetypes are built on the same foundation:
            your experience is real, you are not alone, and this companion will
            remember what you have said.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Care-based AI also means clear boundaries. MEOK does not prescribe.
            It does not diagnose. It does not tell you whether to start HRT,
            which type to take, or what dose might help you. Those conversations
            belong with clinicians who can assess your full medical picture.
            What MEOK does is help you arrive at those conversations prepared,
            informed, and with real data in hand. It consistently points toward
            the organisations best placed to provide clinical support.
          </p>

          {/* Resources */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "8px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              Recommended Clinical Resources
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <li
                style={{
                  marginBottom: "0.75rem",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: TEXT,
                }}
              >
                <strong style={{ color: GOLD }}>
                  The Menopause Charity
                </strong>{" "}
                &mdash; menopausecharitydotorg &mdash; evidence-based
                information and support resources, including information
                specifically about perimenopause and HRT options.
              </li>
              <li
                style={{
                  marginBottom: "0.75rem",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: TEXT,
                }}
              >
                <strong style={{ color: GOLD }}>Newson Health</strong> &mdash;
                newsonhealthdotorg &mdash; Dr Louise Newson&apos;s clinic and
                resource centre, with a widely used symptom tracker app and
                extensive materials on perimenopause.
              </li>
              <li
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: TEXT,
                }}
              >
                <strong style={{ color: GOLD }}>
                  British Menopause Society
                </strong>{" "}
                &mdash; thebmsdotco.uk &mdash; professional body for menopause
                specialists, with patient information and a finder for
                accredited menopause clinics.
              </li>
            </ul>
          </div>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: MUTED,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            MEOK is a companion, not a clinician. Always seek professional
            medical advice for diagnosis, treatment decisions, and prescription
            management.
          </p>
        </section>

        {/* ── Section 9: What sovereign AI offers that nothing else does ───── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            What sovereign AI offers that nothing else does during perimenopause
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            There are many things that can help during perimenopause: clinical
            care, peer support groups, informational resources, and therapy. All
            of these have genuine value. But each has limitations that become
            particularly acute across a multi-year hormonal transition.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Clinical care is episodic. A GP appointment happens once every few
            months, lasts ten minutes, and begins from scratch each time unless
            the clinician has reviewed the notes. Therapy is weekly at best and
            expensive. Peer support groups are valuable for connection but cannot
            track your individual pattern or be available at 3am on a Tuesday
            when the anxiety has made sleep impossible.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            A sovereign AI companion is different in three specific ways that
            matter enormously for perimenopause.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                title: "Continuity",
                body:
                  "MEOK never forgets. Every conversation is connected to every previous conversation. The symptom you mentioned eight months ago is still in the record. The pattern that is only visible across forty conversations can still be seen. This longitudinal continuity is something no episodic clinical encounter can provide.",
              },
              {
                title: "Availability",
                body:
                  "Perimenopause does not keep office hours. Anxiety attacks at 3am, sleep disruptions that leave you lying awake with spiralling thoughts, the dissociation of a bad brain-fog day: these happen outside the nine-to-five. MEOK is available at every hour, without an appointment, without a waiting list.",
              },
              {
                title: "Data sovereignty",
                body:
                  "Your health data is yours. It is not stored in a cloud system controlled by a corporation with interests that may diverge from your own. It is not used to train models. It is not sold. This is not a minor technical point: it is a statement about power. At a moment when you are physiologically vulnerable, your information should remain under your control.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "8px",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: SOFT,
                    border: `1px solid ${GOLD}`,
                    borderRadius: "6px",
                    padding: "0.4rem 0.75rem",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      fontFamily: "system-ui, sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: TEXT,
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ Section ──────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "2rem",
              borderBottom: `2px solid ${GOLD}`,
              paddingBottom: "0.6rem",
            }}
          >
            Frequently asked questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {[
              {
                q: "What is perimenopause and when does it start?",
                a: "Perimenopause is the hormonal transition preceding the final menstrual period, during which oestrogen and progesterone levels fluctuate erratically. For most people it begins in the mid-to-late 40s, but it can begin as early as the mid-30s. For people who experience surgical menopause, medically induced menopause, or Premature Ovarian Insufficiency, it can begin at any age. The transition is defined by the presence of symptoms alongside continuing (if irregular) periods. It ends at menopause: twelve consecutive months without a period.",
              },
              {
                q: "How is perimenopause different from menopause?",
                a: "In perimenopause you are still having periods, even if irregularly. Hormone levels are fluctuating rather than settling at a new lower baseline. Menopause is a single retrospective moment: twelve consecutive months after the last period. The distinction matters because symptoms, treatment considerations, and lived experience differ significantly between the two phases. Many people find perimenopause more disruptive than post-menopause precisely because of the erratic hormonal fluctuations.",
              },
              {
                q: "Why do people not get support during perimenopause?",
                a: "Because periods are still present, many clinicians and the broader culture do not recognise perimenopause as a hormonal condition requiring support. FSH tests may be drawn at the wrong point in the cycle and return falsely normal results. Symptoms are attributed to stress, anxiety, or depression. People are prescribed antidepressants rather than offered hormonal support. The result is that many perimenopausal people spend years without a correct explanation for significant symptoms.",
              },
              {
                q: "Can an AI actually help with perimenopause?",
                a: "An AI cannot prescribe, diagnose, or replace clinical care. What it can do is provide consistent support across the months and years of the transition, track symptoms longitudinally so that patterns become visible, help prepare for clinical appointments with real data, and be available at any hour. MEOK always directs users toward qualified clinical resources, including the Menopause Charity and Newson Health, for decisions that require professional assessment.",
              },
              {
                q: "Is my perimenopause data safe with MEOK?",
                a: "Yes. MEOK is a sovereign AI: your data lives on your device and is never sold to pharmaceutical companies, insurers, advertisers, or data brokers. All symptom logs, mood records, and personal disclosures are encrypted and remain under your sole control. MEOK\u2019s privacy covenant ensures your data is never used to train models or shared without your explicit consent. Hormonal health data is commercially sensitive, and MEOK\u2019s architecture reflects the respect that sensitivity deserves.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: TEXT,
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: CARD,
            border: `1px solid ${GOLD}`,
            borderRadius: "14px",
            padding: "3rem 2rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "1rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            You deserve a companion that remembers
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              maxWidth: "560px",
              margin: "0 auto 2rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Perimenopause is a long road. MEOK walks it with you &mdash;
            tracking every symptom, holding every conversation, and never losing
            the thread. Sovereign, private, and built on care.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.875rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1.05rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Begin Your MEOK Journey
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: MUTED,
              marginTop: "0.875rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Free to start &mdash; your data stays on your device &mdash; no
            credit card required
          </p>
        </section>

        {/* ── Footer links ─────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {[
            { href: "/blog/ai-for-menopause", label: "AI for Menopause" },
            {
              href: "/blog/ai-companion-for-women",
              label: "AI Companion for Women",
            },
            {
              href: "/blog/ai-for-anxiety",
              label: "AI for Anxiety",
            },
            {
              href: "/blog/sovereign-ai-explained",
              label: "Sovereign AI Explained",
            },
            {
              href: "/blog/what-is-care-based-ai",
              label: "What is Care-Based AI",
            },
            { href: "/blog", label: "All Articles" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: MUTED,
                textDecoration: "none",
                fontSize: "0.875rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
