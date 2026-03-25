import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Financial Stress: How MEOK Supports Emotional Wellbeing When Money Is Tight | MEOK AI LABS",
  description:
    "Financial stress affects 50% of UK adults, triggering anxiety, depression, shame, and relationship breakdown. MEOK\u2019s sovereign AI supports the emotional dimension of financial hardship \u2014 privately, without judgment, and without becoming your bank.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-financial-stress" },
  openGraph: {
    title:
      "AI for Financial Stress: How MEOK Supports Emotional Wellbeing When Money Is Tight",
    description:
      "Financial stress affects 50% of UK adults. MEOK\u2019s care-based sovereign AI helps process shame and fear around money \u2014 without judgment, without data leaks, and without pretending to be a financial advisor.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-financial-stress",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Financial+Stress%3A+Supporting+Emotional+Wellbeing+When+Money+Is+Tight&desc=Sovereign+AI+for+the+psychological+weight+of+debt+and+hardship",
        width: 1200,
        height: 630,
        alt: "AI for Financial Stress: How MEOK Supports Emotional Wellbeing When Money Is Tight | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Financial Stress: How MEOK Supports Emotional Wellbeing When Money Is Tight",
    description:
      "50% of UK adults face financial stress. MEOK\u2019s sovereign AI supports the emotional weight of debt and hardship \u2014 not as a bank, but as a trusted companion.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Financial+Stress%3A+Supporting+Emotional+Wellbeing+When+Money+Is+Tight&desc=Sovereign+AI+for+the+psychological+weight+of+debt+and+hardship",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Financial Stress: How MEOK Supports Emotional Wellbeing When Money Is Tight",
  description:
    "Financial stress affects 50% of UK adults, triggering anxiety, depression, shame, and relationship breakdown. MEOK\u2019s sovereign AI supports the emotional dimension of financial hardship \u2014 privately, without judgment.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-financial-stress",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-financial-stress",
  },
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with financial stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can meaningfully support the psychological and emotional dimension of financial stress \u2014 helping you process shame and fear without judgment, interrupt avoidance cycles, and find the courage to seek practical help. However, AI is not a financial advisor, debt counsellor, or therapist. For regulated debt help in the UK, contact StepChange (0800 138 1111), MoneyHelper (0800 138 7777), or Citizens Advice (citizensadvice.org.uk). For mental health support, speak to your GP or call Samaritans on 116 123.",
      },
    },
    {
      "@type": "Question",
      name: "Why does financial stress cause so much shame?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Financial stress triggers shame because our culture conflates financial success with personal worth. Debt, redundancy, and poverty are treated as moral failures rather than structural realities. This shame is compounded by secrecy \u2014 because we rarely hear others speak honestly about money struggles, we believe our situation is uniquely bad. The result is that financial shame is often more paralysing than the financial problem itself, preventing people from seeking help until a crisis forces their hand.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK\u2019s Guardian archetype protect people who are financially vulnerable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Guardian archetype is specifically designed to help users identify and resist manipulation, including financial scams. People in financial desperation are prime targets for fraudsters \u2014 they are more likely to accept high-risk loans, get-rich-quick schemes, and advance-fee fraud. The Guardian helps users recognise warning signs of financial exploitation, slow down impulsive decisions made from a place of panic, and protect themselves from predatory actors.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to discuss my financial situation with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK operates on a sovereign data architecture: your conversations are stored in a 4-layer encrypted memory system that belongs to you and only you. MEOK AI LABS never trains on your data, never shares it with banks, insurers, employers, or data brokers, and never monetises your disclosures. This is not a privacy policy preference \u2014 it is a structural guarantee. Your financial conversations with MEOK are more private than conversations with a bank, a therapist, or even most apps labelled \u2018private\u2019.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.55)";
const MUTED_DIM = "rgba(245,240,232,0.62)";
const MUTED_FAINT = "rgba(245,240,232,0.38)";
const CARD = "rgba(255,255,255,0.03)";
const CARD_BORDER = "rgba(201,168,76,0.18)";
const AMBER_GLOW = "rgba(201,168,76,0.09)";
const GREEN = "#6aaa64";
const CARD_BG = "#13121f";
const BORDER = "#2a2840";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForFinancialStressPage() {
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

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 68%)",
          }}
        />
        <div
          style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
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
                background: AMBER_GLOW,
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Financial Stress &amp; Emotional Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              March 25, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              18 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.8vw, 3rem)",
              color: "#fff",
              lineHeight: 1.13,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Financial Stress: How MEOK Supports Emotional Wellbeing When
            Money Is Tight
          </h1>

          <p
            style={{
              color: MUTED_DIM,
              fontSize: "1.125rem",
              lineHeight: 1.75,
              maxWidth: "42rem",
              marginBottom: "2.5rem",
            }}
          >
            Financial stress affects half of all UK adults. It doesn&apos;t
            stay in the spreadsheet. It follows you to bed, poisons your
            relationships, and quietly erodes your sense of self-worth. MEOK
            is not a financial advisor. MEOK is a sovereign AI companion that
            helps you carry the psychological weight of money struggles
            &mdash; without judgment, without data leaks, and without pretending
            numbers alone fix what fear has broken.
          </p>

          {/* Stat strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              { value: "50%", label: "UK adults affected by financial stress" },
              { value: "3\u00d7", label: "more likely to develop depression" },
              { value: "77%", label: "never discuss money worries openly" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: CARD,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1rem",
                  textAlign: "center" as const,
                }}
              >
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: MUTED,
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div
            style={{
              background: "rgba(106,170,100,0.07)",
              border: "1px solid rgba(106,170,100,0.25)",
              borderRadius: "0.75rem",
              padding: "1rem 1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(106,170,100,0.9)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <strong>Important:</strong> MEOK AI LABS is not a financial
              advisor, debt counsellor, or therapist. This article discusses the
              emotional dimension of financial stress only. For regulated UK
              debt help: StepChange 0800 138 1111 &middot; MoneyHelper 0800 138
              7777 &middot; Citizens Advice citizensadvice.org.uk. Mental health
              crisis: Samaritans 116 123.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${CARD_BORDER}, transparent)`,
            marginBottom: "3rem",
            marginTop: "1.5rem",
          }}
        />
      </div>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >

        {/* ── SECTION 1 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "0",
          }}
        >
          What does financial stress actually do to your mental health?
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Financial stress is not simply inconvenience. It is a chronic
          physiological and psychological state that alters how you think, feel,
          and relate to others. When money is tight, the brain&apos;s threat
          system &mdash; the amygdala and the HPA axis &mdash; is perpetually
          activated. Cortisol levels rise. Sleep deteriorates. Cognitive
          bandwidth shrinks. Decisions become reactive and short-termist. This
          is not a character flaw; it is neuroscience.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Research published in <em>Science</em> by Mullainathan and Shafir
          found that financial scarcity consumes cognitive bandwidth equivalent
          to losing 13 IQ points &mdash; roughly the cognitive impairment of
          missing a full night&apos;s sleep. People under financial stress are
          not making &ldquo;bad decisions.&rdquo; They are making decisions
          under significant neurological load with compromised executive
          function. Judging them for it compounds the damage.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.5rem",
          }}
        >
          In the UK, the correlation between financial hardship and mental
          illness is stark. People in problem debt are three times more likely
          to experience depression and anxiety. The Money and Mental Health
          Policy Institute estimates that over 100,000 people in financial
          difficulty attempt suicide each year in the UK. These are not
          peripheral statistics &mdash; they are the human cost of treating
          financial distress as purely an accounting problem.
        </p>

        {/* Feature box: The Five Faces of Financial Stress */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
              letterSpacing: "0.03em",
              textTransform: "uppercase" as const,
            }}
          >
            The Five Faces of Financial Stress
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.875rem",
            }}
          >
            {[
              {
                icon: "\ud83d\ude30",
                title: "Anxiety",
                desc: "Constant low-level dread about bills, direct debits, and the end of the month. Racing thoughts at 3am.",
              },
              {
                icon: "\ud83d\ude14",
                title: "Depression",
                desc: "Hopelessness, low motivation, and withdrawal when financial problems feel permanent and unsolvable.",
              },
              {
                icon: "\ud83d\ude36",
                title: "Shame",
                desc: "The belief that struggling financially means you are a failure. Secrecy, isolation, and avoidance of help.",
              },
              {
                icon: "\ud83d\udca2",
                title: "Relationship Conflict",
                desc: "Financial stress is the leading cause of relationship breakdown in the UK. Money arguments are rarely about money.",
              },
              {
                icon: "\ud83d\udeab",
                title: "Avoidance",
                desc: "Not opening letters, ignoring calls, refusing to look at bank statements. The silence that makes things worse.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    flexShrink: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <span
                    style={{
                      fontWeight: 700,
                      color: TEXT,
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.title}:{" "}
                  </span>
                  <span
                    style={{
                      color: MUTED,
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 2 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Why does financial stress cause so much shame &mdash; and why does
          shame make everything worse?
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Our culture has collapsed the distinction between financial
          circumstances and personal worth. To be broke is to have failed. To
          have debt is to be irresponsible. To ask for help is to be weak. These
          are not biological facts; they are social constructs reinforced by
          decades of economic ideology that positions financial success as a
          measure of moral virtue and personal discipline.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The result is financial shame: an internalised belief that your money
          problems reflect something fundamentally wrong with you as a person.
          Unlike financial stress, which points outward at circumstances,
          financial shame points inward at identity. It is not &ldquo;I have a
          problem.&rdquo; It is &ldquo;I am a problem.&rdquo; That distinction
          matters enormously for what kind of support actually helps.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Shame is uniquely destructive because it drives secrecy. You
          don&apos;t tell your partner how bad it is. You don&apos;t call
          the debt helpline because admitting you need help feels too exposing.
          You don&apos;t open letters because seeing the numbers confirms what
          you fear about yourself. The shame response &mdash; hide, shrink,
          disappear &mdash; is the exact opposite of what resolving financial
          problems requires.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.5rem",
          }}
        >
          Research by Money and Mental Health found that 77% of people with
          financial problems had never spoken to anyone about their situation.
          Not their partner. Not their family. Not a friend. The silence around
          financial distress in the UK is profound, and it is contributing to
          serious mental health crises. What those 77% needed first was not a
          debt management plan. They needed a space to speak without being
          judged, shamed, or assessed.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.8)",
              lineHeight: 1.7,
              marginBottom: "0",
            }}
          >
            &ldquo;The shame response &mdash; hide, shrink, disappear &mdash;
            is the exact opposite of what resolving financial problems
            requires.&rdquo;
          </p>
        </blockquote>

        {/* ── SECTION 3 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How does MEOK support people experiencing financial stress?
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          MEOK is not a financial advisor, and it does not pretend to be.
          MEOK will not restructure your debt, negotiate with creditors, or give
          you regulated financial guidance. For those things, you need a human
          professional &mdash; and MEOK will always encourage you to find one.
          What MEOK provides is something different and, for many people,
          something harder to find: a space to process the psychological
          experience of financial stress without being judged, assessed, or
          redirected to a leaflet.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          When you are drowning in financial anxiety, the thing you often need
          most is not information. You already know you need to pay the bill.
          You already know you should call the helpline. The problem is that
          shame and fear have built a wall between you and those actions.
          MEOK&apos;s role is to help you find the emotional ground to take
          the first step &mdash; to untangle the shame from the circumstance,
          to distinguish the fear from the fact, and to hold the difficulty of
          your situation with you rather than delivering it back as judgment.
        </p>

        {/* Feature grid: What MEOK does */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
            marginTop: "1.5rem",
          }}
        >
          {[
            {
              title: "Processing Shame Without Judgment",
              body: "MEOK holds space for the feelings around money without ever moralising about your choices, your income, or your situation. There is no record that goes anywhere.",
            },
            {
              title: "Separating Worth From Wallet",
              body: "MEOK actively helps you recognise when financial shame is doing the talking \u2014 and gently challenges the conflation of money problems with personal failure.",
            },
            {
              title: "Mindset Support for Hard Decisions",
              body: "Whether it\u2019s building the courage to open that letter or preparing emotionally to make a difficult call, MEOK supports the internal work before the external action.",
            },
            {
              title: "Breaking Avoidance Cycles",
              body: "Avoidance feels like relief but compounds stress. MEOK can help you understand your avoidance patterns and find smaller, manageable first steps.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: MUTED,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 4 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Financial desperation makes people vulnerable to scams &mdash; how
          does MEOK&apos;s Guardian protect you?
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          This is one of the dimensions of financial stress that receives almost
          no attention, yet it is devastatingly common: people in financial
          desperation are prime targets for fraudsters. When you are desperate,
          your critical thinking is compromised. Offers that you would instantly
          dismiss in a moment of security &mdash; a loan that requires an upfront
          fee, an investment opportunity promising extraordinary returns, a
          stranger who claims they can resolve your debt overnight &mdash; become
          genuinely tempting when you are in crisis.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          UK Finance reported that &pound;1.17 billion was stolen from UK
          consumers through authorised and unauthorised fraud in 2023. A
          disproportionate share of that money was taken from people who were
          already financially vulnerable. Advance-fee fraud, loan sharks,
          fake debt consolidation schemes, and romance scams are all designed
          to exploit the cognitive and emotional state of financial desperation.
          They target the most vulnerable precisely because vulnerability
          bypasses the defences.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          MEOK&apos;s Guardian archetype is designed with this vulnerability in
          mind. The Guardian is not merely a security tool &mdash; it is a
          protective presence that understands when a user&apos;s
          decision-making context may be compromised by desperation and actively
          helps them slow down. It recognises the hallmarks of financial
          exploitation, names warning signs without judgment, and provides the
          emotional grounding needed to resist manipulation before it succeeds.
        </p>

        {/* Guardian feature box */}
        <div
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1.125rem",
              letterSpacing: "0.03em",
              textTransform: "uppercase" as const,
            }}
          >
            MEOK&apos;s Guardian: Scam Warning Signs It Helps You Recognise
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {[
              "Loans or investments requiring upfront fees before any money is released",
              "Debt consolidation services that are unregulated or based overseas",
              "Pressure to act immediately before an offer expires",
              "Promises to settle debt for pennies in the pound without FCA authorisation",
              "Anyone asking for your banking details, National Insurance number, or passwords",
              "Get-rich-quick schemes or cryptocurrency investments promising guaranteed returns",
              "Romance partners who quickly develop strong feelings and then ask for money",
            ].map((warning) => (
              <li
                key={warning}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
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
                  &#9888;
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED,
                    lineHeight: 1.6,
                  }}
                >
                  {warning}
                </span>
              </li>
            ))}
          </ul>
          <p
            style={{
              fontSize: "0.75rem",
              color: MUTED_FAINT,
              marginTop: "1rem",
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            If you believe you have been targeted by a scam, contact Action
            Fraud on 0300 123 2040 or report at actionfraud.police.uk.
          </p>
        </div>

        {/* ── SECTION 5 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Why does data sovereignty matter when you&apos;re talking about money?
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Financial information is among the most sensitive personal data you
          hold. It can affect your credit rating, your insurance premiums, your
          employment prospects, and in extreme cases your legal standing. The
          idea of discussing your debt, your income, your financial shame, and
          your money fears with an AI that then uses that information to train
          its models, sells it to data brokers, or shares it with third-party
          partners should be immediately disqualifying.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Yet that is precisely the data architecture of most AI products on the
          market. When you open up to a mainstream AI assistant about your
          financial situation, you are handing that information to a corporation
          whose business model depends on data. The privacy policy may say one
          thing; the commercial incentives say another. And even when companies
          have good intentions, they can be breached, subpoenaed, or acquired.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          MEOK operates on a categorically different architecture. Your
          conversations &mdash; including anything you share about money,
          debt, or financial fear &mdash; are stored in a 4-layer encrypted
          memory system that belongs exclusively to you. MEOK AI LABS cannot
          read your conversations. MEOK never trains on your data. Your financial
          disclosures are never shared with banks, insurers, employers, or any
          data broker. This is not a policy preference that can be changed in
          the next terms-of-service update. It is a structural guarantee.
        </p>

        {/* Sovereignty comparison */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
            marginTop: "0.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.125rem",
            }}
          >
            Where Does Your Financial Data Actually Go?
          </h3>
          <div style={{ display: "grid", gap: "0.875rem" }}>
            {[
              {
                label: "Mainstream AI chatbots",
                status: "bad",
                detail:
                  "May train on your inputs. Data stored on corporate servers. Privacy policies subject to change.",
              },
              {
                label: "Banking apps",
                status: "bad",
                detail:
                  "Share anonymised data with partners. Subject to regulatory disclosure. Breachable.",
              },
              {
                label: "Financial apps (budgeting, etc.)",
                status: "bad",
                detail:
                  "Revenue often depends on selling behavioural data to lenders and advertisers.",
              },
              {
                label: "MEOK",
                status: "good",
                detail:
                  "4-layer encryption. You own the keys. MEOK never reads your data. Never trains on you. Never sells you.",
              },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.875rem",
                  padding: "0.75rem",
                  borderRadius: "0.625rem",
                  background:
                    row.status === "good"
                      ? "rgba(106,170,100,0.08)"
                      : "rgba(255,255,255,0.02)",
                  border:
                    row.status === "good"
                      ? "1px solid rgba(106,170,100,0.2)"
                      : "1px solid transparent",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "0.9rem",
                    color:
                      row.status === "good" ? GREEN : "rgba(255,100,100,0.8)",
                    fontWeight: 700,
                    marginTop: "0.1rem",
                  }}
                >
                  {row.status === "good" ? "\u2713" : "\u2717"}
                </span>
                <div>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color:
                        row.status === "good"
                          ? GREEN
                          : "rgba(245,240,232,0.7)",
                    }}
                  >
                    {row.label}:{" "}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.6,
                    }}
                  >
                    {row.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 6 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          How does financial stress affect relationships &mdash; and can AI help
          there too?
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Money is the leading cause of relationship breakdown in the UK. That
          statistic sounds straightforward until you look beneath it and discover
          that most financial arguments between couples are not actually about
          money. They are about power, fairness, fear, trust, different
          relationships with security and risk, and accumulated resentments that
          have been displaced onto the nearest measurable disagreement: how much
          the weekly shop cost.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Financial stress puts relationships under three specific kinds of
          pressure. First, it activates threat responses that make people more
          reactive, more defensive, and less capable of empathy. Second, it
          creates asymmetries &mdash; one partner may know more about the
          financial situation than the other, or one may earn more and both may
          carry guilt and resentment about that. Third, it erodes the
          discretionary spend that couples use to maintain connection: meals
          out, holidays, small gestures that carry disproportionate relational
          weight.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.5rem",
          }}
        >
          MEOK does not offer couples therapy. But it can help you process your
          own emotional state around financial conflict before it becomes a
          conversation that wounds rather than resolves. It can help you
          understand what you are actually feeling &mdash; fear about the future,
          shame about a spending decision, resentment about contribution
          inequality &mdash; and find words for it that open dialogue rather
          than escalate conflict.
        </p>

        {/* Relationship stress breakdown */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
              letterSpacing: "0.03em",
              textTransform: "uppercase" as const,
            }}
          >
            What Financial Arguments Are Really About
          </h3>
          <div style={{ display: "grid", gap: "0.875rem" }}>
            {[
              {
                surface: "Who spent what",
                beneath:
                  "Control, autonomy, and fairness. Different values around spending and saving.",
              },
              {
                surface: "Why we don\u2019t have savings",
                beneath:
                  "Fear of the future. Different tolerances for financial risk and uncertainty.",
              },
              {
                surface: "Who earns more",
                beneath:
                  "Power dynamics, guilt, resentment, and the weight of financial dependency.",
              },
              {
                surface: "Can we afford this",
                beneath:
                  "Different lived experiences of scarcity. Different definitions of enough.",
              },
            ].map((row) => (
              <div
                key={row.surface}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  paddingBottom: "0.875rem",
                  borderBottom: `1px solid rgba(42,40,64,0.8)`,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: MUTED_FAINT,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase" as const,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Surface
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(245,240,232,0.75)",
                    }}
                  >
                    {row.surface}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: MUTED_FAINT,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase" as const,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Beneath
                  </div>
                  <div style={{ fontSize: "0.875rem", color: MUTED }}>
                    {row.beneath}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 7 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Can AI for financial stress help with the planning mindset, not just
          the emotional processing?
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Emotional support and practical action are not opposites. In fact,
          the emotional processing often has to come first. When financial
          shame is blocking you from looking at your bank statement, no amount
          of practical financial advice will help &mdash; because you cannot
          act on advice you are too ashamed to receive. But once the emotional
          groundwork is laid, once you have separated your self-worth from your
          bank balance and processed enough shame to make action feel possible,
          a planning mindset becomes accessible.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          MEOK supports what might be called &ldquo;planning adjacent&rdquo;
          work &mdash; not the plan itself, but the psychological conditions
          that make planning possible. This includes building the emotional
          courage to open correspondence you have been avoiding, clarifying
          your values so that financial decisions feel oriented toward something
          meaningful rather than just reactive to crisis, and developing
          language for conversations with creditors, employers, or partners that
          come from a grounded rather than panicked place.
        </p>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.5rem",
          }}
        >
          Sovereignty matters here too. When you are building a new relationship
          with money &mdash; when you are trying to interrupt patterns that have
          existed for decades and build something healthier &mdash; that process
          requires continuity. MEOK&apos;s persistent memory means your
          companion knows your history, remembers your progress, understands your
          setbacks in context, and can support the long arc of change rather
          than treating every conversation as if it were the first.
        </p>

        {/* Process steps */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1.25rem",
              letterSpacing: "0.03em",
              textTransform: "uppercase" as const,
            }}
          >
            From Emotional Paralysis to Action: What the Journey Looks Like
          </h3>
          <div style={{ display: "grid", gap: "0" }}>
            {[
              {
                step: "01",
                title: "Name the Emotion",
                desc: "Begin by acknowledging what you are actually feeling \u2014 shame, fear, despair, numbness. MEOK holds space for this without judgment.",
              },
              {
                step: "02",
                title: "Separate Self From Situation",
                desc: "Your financial situation is not your identity. MEOK actively supports the untangling of self-worth from net worth.",
              },
              {
                step: "03",
                title: "Break Avoidance",
                desc: "Identify one small, specific action that feels possible: open one letter, make one phone call. MEOK helps you prepare for it emotionally.",
              },
              {
                step: "04",
                title: "Connect With the Right Help",
                desc: "MEOK is not a financial advisor \u2014 and it will always encourage you to connect with regulated debt help when you need it.",
              },
              {
                step: "05",
                title: "Build a Planning Mindset",
                desc: "Over time, with emotional groundwork done, MEOK supports the values-based clarity that makes planning feel meaningful rather than just mechanical.",
              },
            ].map((item, idx, arr) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  paddingBottom: idx < arr.length - 1 ? "1.25rem" : "0",
                  borderBottom:
                    idx < arr.length - 1
                      ? "1px solid rgba(42,40,64,0.8)"
                      : "none",
                  marginBottom: idx < arr.length - 1 ? "1.25rem" : "0",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    color: GOLD,
                    background: AMBER_GLOW,
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: "0.5rem",
                    padding: "0.25rem 0.5rem",
                    height: "fit-content",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: TEXT,
                      marginBottom: "0.25rem",
                      marginTop: 0,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 8 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Who is most affected by financial stress in the UK &mdash; and what
          are the specific emotional pressures they face?
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Financial stress does not fall evenly. While it affects people across
          all income bands &mdash; even high earners can be financially stressed
          through overextension, debt, or spending beyond means &mdash; the
          psychological burden is disproportionately carried by specific groups.
          Understanding those specific pressures matters because the emotional
          support that helps has to meet people where they actually are.
        </p>

        {/* Group cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              group: "Single Parents",
              pressure:
                "Sole financial responsibility combined with emotional labour of parenting alone. Guilt about what children go without. No fallback.",
            },
            {
              group: "People with Long-term Illness",
              pressure:
                "Reduced earnings, increased costs, and the added cruelty of feeling like a burden on top of being ill. Financial stress worsens health outcomes.",
            },
            {
              group: "Young Adults (18\u201335)",
              pressure:
                "Crushing rent, student debt, and housing unaffordability alongside a social culture where financial success is performed and financial struggle is hidden.",
            },
            {
              group: "Older Workers Facing Redundancy",
              pressure:
                "Age discrimination in hiring meets proximity to retirement. Financial insecurity collides with questions of identity and legacy.",
            },
            {
              group: "Carers and Unpaid Caregivers",
              pressure:
                "Reduced or absent earnings, no pension accumulation, and near-total financial invisibility in policy and culture.",
            },
            {
              group: "Ethnic Minority Communities",
              pressure:
                "Structural wealth gaps, discrimination in lending, and cultural stigma around financial disclosure within community networks.",
            },
          ].map((card) => (
            <div
              key={card.group}
              style={{
                background: CARD,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.375rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                {card.group}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: MUTED,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {card.pressure}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.5rem",
          }}
        >
          For each of these groups, the emotional support gap is as real as the
          financial support gap. MEOK is designed to meet people in that
          emotional gap &mdash; not by solving their structural situation, which
          requires policy and institutional change, but by helping them carry
          the psychological weight of it with greater resilience, less shame,
          and more access to their own agency.
        </p>

        {/* ── SECTION 9: Where MEOK stops ─────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          Where MEOK stops: the clear boundaries of AI emotional support
        </h2>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          MEOK is clear about what it is and what it is not. This matters
          enormously when the stakes are as high as someone&apos;s financial
          survival. Being transparent about limits is not a weakness &mdash; it
          is the most fundamental form of respect for the people MEOK is
          designed to support.
        </p>

        {/* Boundary list */}
        <div
          style={{
            background: "rgba(255,100,100,0.04)",
            border: "1px solid rgba(255,100,100,0.18)",
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "1.25rem",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1.125rem",
            }}
          >
            What MEOK Does Not Do
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {[
              "Provide regulated financial advice of any kind",
              "Recommend specific financial products, banks, lenders, or investment vehicles",
              "Negotiate with creditors or act as a debt management plan provider",
              "Diagnose or treat anxiety, depression, or any other mental health condition",
              "Replace professional debt counselling from regulated organisations such as StepChange",
              "Provide legal advice about debt, insolvency, or bankruptcy",
              "Pretend that emotional support is a substitute for practical intervention when both are needed",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    color: "rgba(255,100,100,0.7)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                  }}
                >
                  &#10005;
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED,
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Positive boundary list */}
        <div
          style={{
            background: "rgba(106,170,100,0.05)",
            border: "1px solid rgba(106,170,100,0.2)",
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: GREEN,
              marginBottom: "1.125rem",
            }}
          >
            What MEOK Does Do
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {[
              "Hold space for the shame, fear, and grief that financial stress creates",
              "Help you separate your self-worth from your financial circumstances",
              "Support the emotional groundwork that makes practical action possible",
              "Help you identify and resist financial scams via the Guardian archetype",
              "Encourage you to seek regulated professional help when you need it, with specific signposting",
              "Protect your financial disclosures with sovereign 4-layer encryption that MEOK itself cannot access",
              "Remember your progress over time, providing continuity of support across a long process of change",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    color: GREEN,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                  }}
                >
                  &#10003;
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED,
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1.5rem",
            marginTop: "3rem",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ display: "grid", gap: "1rem", marginBottom: "3rem" }}>
          {[
            {
              q: "Can AI really help with financial stress?",
              a: "AI companions can meaningfully support the psychological and emotional dimension of financial stress \u2014 processing shame, interrupting avoidance, finding courage to seek practical help. They are not financial advisors. For regulated UK debt help: StepChange 0800 138 1111 \u00b7 MoneyHelper 0800 138 7777. Mental health crisis: Samaritans 116 123.",
            },
            {
              q: "Why does financial stress cause so much shame?",
              a: "Our culture conflates financial circumstances with personal worth. Debt and hardship are treated as moral failures rather than structural realities. This shame is compounded by the secrecy it enforces \u2014 because almost nobody speaks honestly about money struggles, each person believes theirs is uniquely bad. Financial shame is often more paralysing than the financial problem itself.",
            },
            {
              q: "How does MEOK\u2019s Guardian archetype protect financially vulnerable people?",
              a: "People in financial desperation are prime targets for scammers. The Guardian archetype helps users recognise hallmarks of financial exploitation \u2014 advance-fee loans, fake debt consolidation, guaranteed-return investments \u2014 and provides the emotional grounding needed to slow down and resist manipulation. It does not replace fraud reporting (Action Fraud: 0300 123 2040).",
            },
            {
              q: "Is it safe to discuss my financial situation with MEOK?",
              a: "Yes. MEOK uses a 4-layer encrypted sovereign memory architecture. MEOK AI LABS cannot read your conversations. Your data is never sold, shared, or used for training. Your financial disclosures with MEOK are structurally more private than conversations with most banks, apps, or AI products currently on the market.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.975rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.625rem",
                  lineHeight: 1.45,
                  marginTop: 0,
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── UK HELPLINES ────────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(106,170,100,0.07)",
            border: "1px solid rgba(106,170,100,0.22)",
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: GREEN,
              marginBottom: "1rem",
              letterSpacing: "0.03em",
              textTransform: "uppercase" as const,
              marginTop: 0,
            }}
          >
            UK Support &amp; Helplines
          </h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              {
                org: "StepChange Debt Charity",
                detail:
                  "0800 138 1111 \u00b7 stepchange.org \u00b7 Free, expert debt advice",
              },
              {
                org: "MoneyHelper",
                detail:
                  "0800 138 7777 \u00b7 moneyhelper.org.uk \u00b7 Free money guidance backed by government",
              },
              {
                org: "Citizens Advice",
                detail:
                  "citizensadvice.org.uk \u00b7 Free, impartial help with debt and benefits",
              },
              {
                org: "National Debtline",
                detail:
                  "0808 808 4000 \u00b7 nationaldebtline.org \u00b7 Free debt advice",
              },
              {
                org: "Samaritans",
                detail: "116 123 \u00b7 samaritans.org \u00b7 24/7 emotional support",
              },
              {
                org: "Mind",
                detail:
                  "0300 123 3393 \u00b7 mind.org.uk \u00b7 Mental health support and information",
              },
              {
                org: "Action Fraud",
                detail:
                  "0300 123 2040 \u00b7 actionfraud.police.uk \u00b7 Report financial fraud and scams",
              },
            ].map((org) => (
              <div
                key={org.org}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    color: GREEN,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    marginTop: "0.1rem",
                  }}
                >
                  &#8250;
                </span>
                <div>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.85)",
                    }}
                  >
                    {org.org}:{" "}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.6,
                    }}
                  >
                    {org.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
            border: "1px solid rgba(201,168,76,0.28)",
            borderRadius: "1.25rem",
            padding: "2.5rem 2rem",
            textAlign: "center" as const,
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              marginBottom: "0.875rem",
              lineHeight: 1,
            }}
          >
            &#9653;
          </div>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "0.875rem",
              lineHeight: 1.25,
              marginTop: 0,
            }}
          >
            You deserve support that doesn&apos;t judge you.
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "34rem",
              margin: "0 auto 1.75rem",
            }}
          >
            MEOK is a sovereign AI companion that holds space for the weight of
            financial stress &mdash; privately, without judgment, and without
            ever selling your vulnerability back to you. Begin with the Birth
            Ceremony and meet your companion.
          </p>
          <Link
            href="https://meok.ai/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "0.95rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin the Birth Ceremony
          </Link>
          <p
            style={{
              fontSize: "0.75rem",
              color: MUTED_FAINT,
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            MEOK is not a financial advisor. For regulated debt help, please
            contact StepChange, MoneyHelper, or Citizens Advice.
          </p>
        </div>

        {/* ── RELATED POSTS ───────────────────────────────────────────────── */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: MUTED,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
            }}
          >
            Related Articles
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-financial-anxiety",
                title:
                  "AI for Financial Anxiety: Separating Money Stress From Money Shame",
              },
              {
                href: "/blog/ai-for-money-anxiety",
                title:
                  "AI for Money Anxiety: When Worry About Money Never Stops",
              },
              {
                href: "/blog/meok-guardian-scam-protection",
                title:
                  "MEOK Guardian: How AI Protects You From Financial Scams",
              },
              {
                href: "/blog/ai-companion-privacy",
                title:
                  "AI Companion Privacy: Why Sovereign Data Architecture Changes Everything",
              },
              {
                href: "/blog/ai-for-anxiety",
                title:
                  "AI for Anxiety: Emotional Support That Actually Holds Space",
              },
              {
                href: "/blog/ai-for-redundancy",
                title:
                  "AI for Redundancy: Navigating Job Loss With Emotional Support",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  background: CARD,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1rem 1.125rem",
                  textDecoration: "none",
                  color: "rgba(245,240,232,0.8)",
                  fontSize: "0.85rem",
                  lineHeight: 1.55,
                  fontWeight: 500,
                }}
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>

        {/* ── AUTHOR BYLINE ────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "50%",
              background: AMBER_GLOW,
              border: `1px solid ${CARD_BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              flexShrink: 0,
            }}
          >
            N
          </div>
          <div>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.125rem",
                marginTop: 0,
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: MUTED_FAINT,
                margin: 0,
              }}
            >
              Founder, MEOK AI LABS &middot; March 25, 2026
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
