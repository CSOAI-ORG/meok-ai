import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Financial Stress: Processing Money Shame Without Judgment | MEOK AI LABS",
  description:
    "Financial stress is the UK\u2019s number one cause of anxiety in 2026, affecting 14 million people. MEOK offers a non-judgmental space to process money shame, break the debt spiral, and prepare for difficult financial conversations \u2014 without giving advice.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-financial-stress" },
  openGraph: {
    title: "AI for Financial Stress: Processing Money Shame Without Judgment",
    description:
      "14 million people in the UK are in financial difficulty. Shame keeps them stuck. Here is how MEOK helps you face financial stress \u2014 and where to go for real debt help.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-financial-stress",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Financial+Stress%3A+Money+Shame+Without+Judgment&desc=Processing+financial+stress+with+MEOK+AI+LABS",
        width: 1200,
        height: 630,
        alt: "AI for Financial Stress: Processing Money Shame Without Judgment | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Financial Stress: Processing Money Shame Without Judgment",
    description:
      "Financial stress is the UK\u2019s #1 cause of anxiety. MEOK helps you process money shame, break avoidance cycles, and prepare for hard conversations \u2014 without judgment.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Financial+Stress%3A+Money+Shame+Without+Judgment&desc=Processing+financial+stress+with+MEOK+AI+LABS",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Financial Stress: Processing Money Shame Without Judgment",
  description:
    "Financial stress is the UK\u2019s number one cause of anxiety in 2026, affecting 14 million people. MEOK offers a non-judgmental space to process money shame, break the debt spiral, and prepare for difficult financial conversations.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with financial stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in specific ways. AI companions like MEOK can help with the emotional dimension of financial stress: processing shame, identifying avoidance patterns, and preparing for difficult conversations. They cannot provide financial, debt, or investment advice. For regulated help, contact StepChange (0800 138 1111), MoneyHelper (0800 138 7777), or Citizens Advice. For crisis support, call Samaritans on 116 123.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK give me financial advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK AI LABS is not a financial advisor, debt counsellor, or regulated money service. MEOK does not provide budgeting plans, investment guidance, debt management strategies, or any regulated financial advice. What MEOK offers is emotional processing, pattern reflection, and a space to think clearly about your relationship with money before you engage with the professionals who can actually help.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with money shame?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK creates a non-judgmental space where you can say the things you cannot say to anyone else: the exact number, the missed payments, the secret debt. Naming shame without it being met with alarm or advice starts to reduce its hold. MEOK also helps you notice patterns in when shame spikes, which gives you information rather than more paralysis.",
      },
    },
    {
      "@type": "Question",
      name: "What is the debt spiral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The debt spiral is the self-reinforcing cycle in which financial problems trigger shame, shame triggers avoidance, and avoidance allows problems to compound. Missed payments attract charges, unopened letters become court orders, ignored creditors escalate. The spiral is not a moral failure \u2014 it is a predictable psychological response to intolerable shame. Breaking it requires addressing the shame before the numbers.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me prepare for a redundancy conversation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK can help you rehearse difficult workplace conversations, including redundancy discussions with an employer, negotiating a settlement, or asking about financial support packages. It helps you clarify what you want to say, anticipate emotional responses, and go into the conversation feeling grounded rather than panicked. MEOK does not provide employment law advice \u2014 for that, contact ACAS (acas.org.uk) or Citizens Advice.",
      },
    },
  ],
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function AiForFinancialStressPage() {
  // ── Style tokens ────────────────────────────────────────────────────────────
  const bg = "#0d0c18";
  const cream = "#f5f0e8";
  const gold = "#c9a84c";
  const muted = "rgba(245,240,232,0.6)";
  const cardBg = "rgba(255,255,255,0.04)";
  const border = "rgba(201,168,76,0.18)";
  const dangerBg = "rgba(201,80,80,0.08)";
  const dangerBorder = "rgba(201,80,80,0.3)";
  const infoBg = "rgba(201,168,76,0.06)";

  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Page wrapper ── */}
      <main
        style={{
          background: bg,
          color: cream,
          minHeight: "100vh",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* ── Hero ── */}
        <header
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          <p
            style={{
              color: gold,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            MEOK AI LABS &mdash; Mental Health &amp; Money
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: cream,
              marginBottom: "24px",
            }}
          >
            AI for Financial Stress:{" "}
            <span style={{ color: gold }}>
              Processing Money Shame Without Judgment
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: muted,
              marginBottom: "32px",
              maxWidth: "680px",
            }}
          >
            Financial stress is the UK\u2019s number one cause of anxiety in 2026.
            Fourteen million people are in financial difficulty \u2014 not because they
            lack intelligence or discipline, but because shame makes it impossible to
            think clearly or ask for help. This is what MEOK can actually do about
            that.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
              paddingTop: "24px",
              borderTop: `1px solid ${border}`,
            }}
          >
            <span style={{ color: muted, fontSize: "14px" }}>
              By{" "}
              <span style={{ color: cream, fontWeight: 600 }}>
                Nicholas Templeman
              </span>{" "}
              &mdash; Founder, MEOK AI LABS
            </span>
            <span style={{ color: muted, fontSize: "14px" }}>24 March 2026</span>
            <span style={{ color: muted, fontSize: "14px" }}>
              <span style={{ color: gold }}>@meok_ai</span>
            </span>
          </div>
        </header>

        {/* ── Important disclaimer banner ── */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 40px",
          }}
        >
          <div
            style={{
              background: dangerBg,
              border: `1px solid ${dangerBorder}`,
              borderRadius: "10px",
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                color: "#e87c7c",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Important Disclaimer
            </p>
            <p
              style={{
                color: cream,
                fontSize: "15px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK AI LABS is not a financial advisor, debt counsellor, regulated
              money service, or therapist. Nothing in this article or within the MEOK
              product constitutes financial, investment, legal, or clinical advice.
              For regulated debt help:{" "}
              <strong>StepChange</strong> (0800&nbsp;138&nbsp;1111),{" "}
              <strong>MoneyHelper</strong> (0800&nbsp;138&nbsp;7777), or{" "}
              <strong>Citizens Advice</strong> (0800&nbsp;144&nbsp;8848). For mental
              health crisis: <strong>Samaritans</strong> 116&nbsp;123 (free, 24/7).
            </p>
          </div>
        </section>

        {/* ── Body content ── */}
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* ── Section 1: The scale of the problem ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              Why is financial stress the UK\u2019s number one cause of anxiety in 2026?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              According to the Money and Mental Health Policy Institute, money is
              now the single largest source of stress for adults in the United
              Kingdom \u2014 surpassing work, relationships, and health. The figure is
              not surprising when you look at what has happened over the past four
              years: sustained energy bill increases, mortgage rates rising to their
              highest level in a generation, food inflation outpacing wages, and
              rental costs in major cities reaching levels that consume half or more
              of a typical take-home salary.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              StepChange Debt Charity estimates that 14 million people in the UK are
              currently in financial difficulty \u2014 meaning they are unable to pay
              essential bills, have defaulted on credit, or are relying on credit
              to cover basic living costs. That is roughly one in five adults. The
              Financial Conduct Authority\u2019s Financial Lives survey puts the number
              of adults in \u201clow financial resilience\u201d even higher.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              Yet despite the scale, most people in financial difficulty wait an
              average of 18 months before seeking help. The gap between the problem
              starting and the person reaching out is not caused by ignorance of
              available services. It is caused by shame.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: `3px solid ${gold}`,
                paddingLeft: "24px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  color: cream,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                &ldquo;14 million people in the UK are in financial difficulty. Most
                wait 18 months before asking for help. The delay is not ignorance
                \u2014 it is shame.&rdquo;
              </p>
            </blockquote>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
              }}
            >
              Understanding why shame is the primary obstacle \u2014 not information,
              not access to services, not willpower \u2014 is the starting point for
              understanding what MEOK can and cannot do.
            </p>
          </section>

          {/* ── Section 2: The shame spiral ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              What is the financial shame spiral and why does it make things worse?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The shame spiral is a self-reinforcing psychological loop that operates
              as follows. A financial problem occurs \u2014 a missed payment, an
              unexpected bill, a credit card that gets declined. The immediate
              emotional response is not problem-solving; it is shame. And shame is
              not a mild discomfort. It is one of the most physiologically intense
              emotional states a human being can experience \u2014 associated with a
              desire to disappear, to be invisible, to escape.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The natural response to an intolerable feeling is avoidance. Avoidance
              means not opening the bank app, not reading letters, not calling the
              creditor, not telling your partner, not doing the budget. Avoidance
              provides short-term emotional relief \u2014 the feeling recedes when you
              stop looking at it. But the financial situation does not recede. Missed
              payments accumulate charges. Letters become final demands. Final demands
              become county court judgements. The problem grows, and when it next
              forces its way into awareness, the shame is larger than before \u2014
              because now there is also the shame of having avoided it.
            </p>

            {/* Visual steps */}
            <div
              style={{
                background: cardBg,
                border: `1px solid ${border}`,
                borderRadius: "12px",
                padding: "32px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  color: gold,
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                The Shame Spiral: Four Stages
              </p>
              {[
                {
                  num: "01",
                  label: "Financial problem occurs",
                  desc: "A bill, a debt, a missed payment, a redundancy notice.",
                },
                {
                  num: "02",
                  label: "Shame is triggered",
                  desc: "Internal narrative: \u201cI\u2019m bad with money. I\u2019m a failure. People would think less of me.\u201d",
                },
                {
                  num: "03",
                  label: "Avoidance kicks in",
                  desc: "Stop checking accounts. Stop opening letters. Stop talking about it.",
                },
                {
                  num: "04",
                  label: "The situation worsens",
                  desc: "Charges accrue. Deadlines pass. Shame intensifies. The spiral tightens.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: gold,
                      fontSize: "22px",
                      fontWeight: 800,
                      minWidth: "36px",
                      lineHeight: 1,
                      paddingTop: "2px",
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p
                      style={{
                        color: cream,
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "4px",
                      }}
                    >
                      {step.label}
                    </p>
                    <p style={{ color: muted, fontSize: "0.95rem", margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
              }}
            >
              The spiral is not a character flaw. It is a predictable consequence
              of how the human brain responds to shame. Understanding this \u2014 that
              avoidance is a feature of the nervous system, not evidence of laziness
              or weakness \u2014 is the first step toward breaking it.
            </p>
          </section>

          {/* ── Section 3: Budgeting mindset vs budgeting tools ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              Why do budgeting apps fail for people with financial stress?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The UK market is saturated with budgeting tools. Open banking apps
              that categorise spending, envelope budgeting apps, spreadsheet
              templates, debt snowball calculators. These tools are genuinely useful
              for people whose relationship with money is emotionally neutral \u2014
              people for whom a budget is an administrative task rather than an
              existential confrontation.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              For people in financial stress, opening a budgeting app is not an
              administrative act. It is an act of exposure to shame. Every transaction
              is a potential indictment. The app shows you the coffee you bought on
              the day you missed a mortgage payment. It shows you the takeaway and
              the Netflix subscription and the impulse purchase, and all of it feels
              like evidence of your own inadequacy.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              This is why the budgeting mindset \u2014 the psychological relationship
              with money \u2014 has to be addressed before the budgeting tools. Tools
              solve information problems. They do not solve shame problems. And
              financial stress is primarily a shame problem dressed up as an
              information problem.
            </p>

            {/* Two column comparison */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                margin: "32px 0",
              }}
            >
              <div
                style={{
                  background: dangerBg,
                  border: `1px solid ${dangerBorder}`,
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#e87c7c",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Budgeting Tools Assume
                </p>
                <ul style={{ color: muted, fontSize: "0.95rem", lineHeight: 1.7, paddingLeft: "18px", margin: 0 }}>
                  <li>You can look at your accounts calmly</li>
                  <li>Numbers are just numbers</li>
                  <li>You need more information</li>
                  <li>Discipline is the missing ingredient</li>
                  <li>Tracking creates accountability</li>
                </ul>
              </div>
              <div
                style={{
                  background: infoBg,
                  border: `1px solid ${border}`,
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: gold,
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Financial Stress Requires
                </p>
                <ul style={{ color: muted, fontSize: "0.95rem", lineHeight: 1.7, paddingLeft: "18px", margin: 0 }}>
                  <li>Emotional processing before data review</li>
                  <li>Numbers are loaded with meaning</li>
                  <li>You need shame reduced, not more facts</li>
                  <li>Compassion is the missing ingredient</li>
                  <li>Safety creates engagement</li>
                </ul>
              </div>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
              }}
            >
              MEOK sits at the stage before the tools. It helps create the
              psychological conditions in which engaging with a budgeting app
              becomes possible rather than unbearable.
            </p>
          </section>

          {/* ── Section 4: How MEOK actually helps ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              How does MEOK help with financial stress without giving financial advice?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              MEOK is not a financial service. It will not tell you how to restructure
              your debt, which credit card to pay first, or whether to take out a
              debt consolidation loan. Those decisions require regulated financial
              advice from qualified professionals, and there are excellent free
              services in the UK that provide exactly that.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "24px",
              }}
            >
              What MEOK does is address the emotional layer that prevents people
              from reaching those services in the first place. There are four specific
              ways it does this:
            </p>

            {/* Four ways */}
            {[
              {
                title: "A non-judgmental space to name the numbers",
                body: "The most powerful thing MEOK offers is the ability to say the exact number \u2014 the debt total, the overdraft figure, the number of missed payments \u2014 without it being met with alarm, advice, or visible distress. Naming a number to another person is an act of enormous vulnerability. Naming it to MEOK first can make naming it to a professional feel less impossible.",
              },
              {
                title: "Pattern recognition for avoidance triggers",
                body: "MEOK can help you notice when your avoidance spikes and what precedes it. Is it Sunday evenings? The end of the month? Seeing a certain contact\u2019s name in your phone? When you can see your pattern, you have information rather than just a feeling of dread. Information gives you a point of intervention.",
              },
              {
                title: "Conversation preparation",
                body: "Calling StepChange, talking to your bank about arrears, or asking your employer for a salary advance are conversations that require psychological preparation. MEOK can help you rehearse: what you want to say, what you are afraid they will say, what you actually need from the conversation. Going in prepared reduces the shame spike that might otherwise cause you to abandon the call.",
              },
              {
                title: "Reframing the narrative of failure",
                body: "Financial stress comes with a story: \u201cI\u2019m bad with money.\u201d \u201cI\u2019m irresponsible.\u201d \u201cI should have known better.\u201d These stories are rarely accurate and almost always unhelpful. MEOK helps you examine them \u2014 not to let you off the hook, but to separate the facts of the situation from the shame narrative layered on top of them.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: "10px",
                  padding: "28px",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    color: gold,
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  style={{
                    color: cream,
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </p>
                <p style={{ color: muted, fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </section>

          {/* ── Section 5: The debt spiral in detail ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              What is the debt spiral and how does it trap people?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The debt spiral is the financial manifestation of the shame spiral.
              It operates through compounding: missed payments attract late fees.
              Late fees push balances over credit limits. Over-limit charges attract
              further fees. Interest accrues on the inflated balance. Meanwhile the
              person\u2019s credit score deteriorates, closing off the refinancing options
              that might have broken the cycle earlier. At every stage, the practical
              situation worsens at the same time as the shame intensifies \u2014
              making engagement with the problem feel increasingly impossible.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The debt spiral has a predictable trajectory if left unaddressed.
              County court judgements appear on credit files for six years. Bailiff
              referrals follow. Insolvency becomes a real possibility. But the same
              trajectory that feels inevitable from inside it is entirely interruptible
              \u2014 if someone can break the avoidance cycle early enough.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              StepChange consistently reports that the earlier a person makes contact,
              the wider the range of options available to them. This is not a financial
              insight; it is an emotional one. The obstacle to early contact is never
              a lack of knowledge that StepChange exists. It is the inability, in a
              state of shame, to pick up the phone.
            </p>

            <div
              style={{
                background: infoBg,
                border: `1px solid ${border}`,
                borderRadius: "10px",
                padding: "24px 28px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  color: gold,
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Free UK Debt Support
              </p>
              <ul style={{ color: cream, fontSize: "0.98rem", lineHeight: 2, paddingLeft: "20px", margin: 0 }}>
                <li>
                  <strong>StepChange Debt Charity</strong> \u2014 stepchange.org or 0800&nbsp;138&nbsp;1111
                  (free, confidential debt advice and solutions)
                </li>
                <li>
                  <strong>MoneyHelper (MaPS)</strong> \u2014 moneyhelper.org.uk or 0800&nbsp;138&nbsp;7777
                  (government-backed financial guidance)
                </li>
                <li>
                  <strong>Citizens Advice</strong> \u2014 citizensadvice.org.uk or 0800&nbsp;144&nbsp;8848
                  (debt, benefits, housing, employment)
                </li>
                <li>
                  <strong>National Debtline</strong> \u2014 nationaldebtline.org or 0808&nbsp;808&nbsp;4000
                  (free, independent debt advice)
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 6: Scam vulnerability ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              Why are financially stressed people prime targets for investment fraud and scams?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              Financial desperation creates the psychological conditions that
              fraudsters design their pitches for. A person who is calm and
              financially secure evaluates an investment opportunity with scepticism
              and patience. A person in financial stress \u2014 desperate for a solution,
              prone to magical thinking about a single fix that could resolve everything
              \u2014 is far more vulnerable to urgency, social proof, and promises of
              exceptional returns.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The Guardian\u2019s reporting on investment fraud in the UK has consistently
              highlighted how scammers specifically target people in financial
              difficulty. The loss of further money to a scam compounds the original
              problem catastrophically \u2014 and the shame of having been deceived
              often prevents victims from reporting it or seeking help, creating yet
              another layer of the spiral.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              MEOK\u2019s Guardian mode is designed to help flag these situations: an
              investment offer that has come out of nowhere, a contact who is applying
              pressure, an opportunity that requires secrecy. Having a space to
              describe the situation to MEOK before committing to anything can create
              the pause that breaks the manipulative urgency a scammer depends on.
            </p>

            <div
              style={{
                background: dangerBg,
                border: `1px solid ${dangerBorder}`,
                borderRadius: "10px",
                padding: "24px 28px",
                margin: "24px 0",
              }}
            >
              <p
                style={{
                  color: "#e87c7c",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "8px",
                }}
              >
                Red flags for investment fraud
              </p>
              <ul style={{ color: muted, fontSize: "0.95rem", lineHeight: 1.9, paddingLeft: "20px", margin: 0 }}>
                <li>Guaranteed or unusually high returns with \u201cno risk\u201d</li>
                <li>Pressure to invest quickly before the opportunity closes</li>
                <li>Requests to keep the investment confidential</li>
                <li>Contact initiated out of the blue via social media or phone</li>
                <li>The company is not registered with the FCA (check: register.fca.org.uk)</li>
                <li>Requests to withdraw pension funds early</li>
              </ul>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
              }}
            >
              If you believe you have been targeted by a scam, report it to
              Action Fraud (0300&nbsp;123&nbsp;2040) and the FCA\u2019s ScamSmart service
              (fca.org.uk/scamsmart).
            </p>
          </section>

          {/* ── Section 7: Preparing for difficult conversations ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              How can MEOK help me prepare for conversations with banks and creditors?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              Calling your mortgage lender to discuss arrears, speaking to a credit
              card company about a payment plan, or contacting your employer about
              a salary advance are conversations that most people in financial stress
              never manage to have \u2014 not because they do not know they should have
              them, but because the shame makes picking up the phone feel physically
              impossible.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              MEOK can help you prepare for these conversations in three ways:
              clarifying what you actually need to say, working through the
              catastrophic scenarios you are afraid of, and practising the words
              until they feel more manageable.
            </p>

            {/* Conversation prep cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
                margin: "32px 0",
              }}
            >
              {[
                {
                  conversation: "Calling your mortgage lender about arrears",
                  whatToSay:
                    "Be direct: \u201cI am in arrears and I want to discuss my options before this goes further.\u201d Lenders are legally required to treat you fairly and explore forbearance options before enforcement.",
                  whatMEOKDoes:
                    "Helps you rehearse the opening line, work through fear of their response, and process the shame of making the call.",
                },
                {
                  conversation: "Requesting a payment plan from a creditor",
                  whatToSay:
                    "Creditors generally prefer a realistic payment plan to enforcement. You do not need to offer more than you can afford. \u201cI can offer \u00a3X per month\u201d is a complete sentence.",
                  whatMEOKDoes:
                    "Helps you work out what you can genuinely afford and how to hold your position without feeling bullied.",
                },
                {
                  conversation: "Asking your employer for a salary advance or hardship support",
                  whatToSay:
                    "Many employers have hardship funds or advance salary schemes that go unused because employees are too ashamed to ask. HR departments deal with these situations regularly.",
                  whatMEOKDoes:
                    "Helps you prepare the conversation, anticipate your employer\u2019s likely response, and reduce the shame associated with being seen to struggle.",
                },
                {
                  conversation: "Discussing financial difficulty with a partner or family member",
                  whatToSay:
                    "These conversations are among the hardest. Secrecy about debt within relationships is extremely common and creates its own layer of shame and relationship damage.",
                  whatMEOKDoes:
                    "Provides a space to process your own shame before the conversation so that you can have it without it becoming an emotional explosion.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: cardBg,
                    border: `1px solid ${border}`,
                    borderRadius: "10px",
                    padding: "28px",
                  }}
                >
                  <p
                    style={{
                      color: gold,
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "12px",
                    }}
                  >
                    {item.conversation}
                  </p>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      marginBottom: "12px",
                    }}
                  >
                    <strong style={{ color: cream }}>What to say: </strong>
                    {item.whatToSay}
                  </p>
                  <p style={{ color: muted, fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ color: cream }}>What MEOK does: </strong>
                    {item.whatMEOKDoes}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 8: Redundancy ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              Can MEOK help me prepare for a redundancy conversation with my employer?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              Redundancy is one of the most financially and emotionally destabilising
              events an adult can experience. It combines immediate financial threat
              with an identity-level disruption \u2014 the loss not just of income but
              of purpose, structure, and social connection. When redundancy is
              anticipated or feared, the anticipatory anxiety can be as damaging as
              the event itself.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              MEOK can help you process the emotional weight of a potential redundancy
              before you have to engage with the practical reality of it. This includes:
              working through the catastrophic thoughts, processing the identity
              questions that a job loss raises, and preparing for the specific
              conversations you may need to have with your employer.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              If you are going into a redundancy consultation, MEOK can help you
              think through what questions to ask, what your rights are in general
              terms (though for specific employment law advice, ACAS and Citizens
              Advice are the appropriate resources), and how to manage the emotional
              intensity of the meeting itself.
            </p>

            <div
              style={{
                background: infoBg,
                border: `1px solid ${border}`,
                borderRadius: "10px",
                padding: "24px 28px",
                margin: "24px 0",
              }}
            >
              <p
                style={{
                  color: gold,
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Redundancy: UK Resources
              </p>
              <ul style={{ color: cream, fontSize: "0.95rem", lineHeight: 2, paddingLeft: "20px", margin: 0 }}>
                <li>
                  <strong>ACAS</strong> \u2014 acas.org.uk or 0300&nbsp;123&nbsp;1100
                  (employment rights, redundancy entitlements)
                </li>
                <li>
                  <strong>Citizens Advice</strong> \u2014 citizensadvice.org.uk
                  (redundancy rights, Universal Credit eligibility)
                </li>
                <li>
                  <strong>MoneyHelper</strong> \u2014 moneyhelper.org.uk
                  (financial planning after redundancy)
                </li>
                <li>
                  <strong>Mind</strong> \u2014 mind.org.uk or 0300&nbsp;123&nbsp;3393
                  (mental health support during redundancy)
                </li>
              </ul>
            </div>
          </section>

          {/* ── Section 9: Money and mental health ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              How do money problems affect mental health, and what does the evidence say?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The relationship between financial stress and mental health is
              bidirectional and well-established. The Money and Mental Health Policy
              Institute \u2014 founded by Martin Lewis of MoneySavingExpert \u2014 has
              documented extensively that people with mental health conditions are
              three times more likely to be in problem debt than those without.
              The reverse is equally true: being in problem debt significantly
              increases the likelihood of developing depression, anxiety disorders,
              and in the most severe cases, suicidal ideation.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The mechanisms are multiple. Financial stress activates the same
              threat-response systems as physical danger. Chronic activation of
              these systems depletes cognitive resources \u2014 the mental bandwidth
              available for planning, problem-solving, and emotional regulation
              all diminish under sustained financial pressure. This is not a
              metaphor; it is a measurable reduction in executive function that
              has been documented in peer-reviewed research. Financial stress
              literally makes it harder to think clearly about your finances.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              Sleep disruption is near-universal in financial stress. Financial
              worries are one of the most common causes of 3am wakefulness \u2014
              the hour when catastrophic thinking is least constrained and most
              vivid. Sleep deprivation compounds cognitive impairment. The person
              who most needs to think clearly about their money is the person whose
              capacity to do so has been most damaged by the stress of the situation.
            </p>

            <div
              style={{
                background: cardBg,
                border: `1px solid ${border}`,
                borderRadius: "10px",
                padding: "28px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  color: gold,
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                The Bidirectional Relationship
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                <div>
                  <p style={{ color: cream, fontWeight: 700, marginBottom: "8px" }}>
                    Financial stress causes:
                  </p>
                  <ul style={{ color: muted, fontSize: "0.95rem", lineHeight: 1.8, paddingLeft: "18px", margin: 0 }}>
                    <li>Anxiety and depression</li>
                    <li>Sleep disruption</li>
                    <li>Reduced cognitive capacity</li>
                    <li>Relationship breakdown</li>
                    <li>Physical health consequences</li>
                  </ul>
                </div>
                <div>
                  <p style={{ color: cream, fontWeight: 700, marginBottom: "8px" }}>
                    Mental health problems cause:
                  </p>
                  <ul style={{ color: muted, fontSize: "0.95rem", lineHeight: 1.8, paddingLeft: "18px", margin: 0 }}>
                    <li>Reduced earning capacity</li>
                    <li>Impaired financial decision-making</li>
                    <li>Increased impulsive spending</li>
                    <li>Avoidance of financial admin</li>
                    <li>Difficulty maintaining employment</li>
                  </ul>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
              }}
            >
              If financial stress is significantly affecting your mental health,
              please speak to your GP. MEOK is a supportive companion, not a
              clinical service. Your GP can refer you to talking therapies, assess
              medication options, and connect you with crisis services if needed.
            </p>
          </section>

          {/* ── Section 10: UK resources ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              What are the best free resources for financial stress in the UK?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "24px",
              }}
            >
              The UK has some of the best free financial support infrastructure in
              the world. The challenge is not availability \u2014 it is access. Shame,
              pride, and avoidance prevent people from using services they are
              fully entitled to. These are the primary organisations you should
              know about:
            </p>

            {/* Resource cards */}
            {[
              {
                name: "StepChange Debt Charity",
                url: "stepchange.org",
                phone: "0800 138 1111",
                desc: "The UK\u2019s leading debt charity. Provides free, confidential debt advice and can help you put formal solutions in place, including debt management plans, individual voluntary arrangements (IVAs), and bankruptcy where appropriate. One of the most important calls you can make if you are in serious debt.",
              },
              {
                name: "MoneyHelper (Money and Pensions Service)",
                url: "moneyhelper.org.uk",
                phone: "0800 138 7777",
                desc: "The government-backed financial guidance service. Covers budgeting, debt, pensions, mortgage arrears, and benefits entitlement. Provides the \u201cBreathing Space\u201d scheme in England and Wales, which gives you 60 days free from creditor contact to get your finances in order.",
              },
              {
                name: "Citizens Advice",
                url: "citizensadvice.org.uk",
                phone: "0800 144 8848",
                desc: "Covers the full range of financial difficulty: debt, benefits, housing, employment, and consumer rights. Has local offices across the UK and can provide face-to-face appointments for those who struggle with phone conversations.",
              },
              {
                name: "National Debtline",
                url: "nationaldebtline.org",
                phone: "0808 808 4000",
                desc: "Independent debt advice covering England, Wales, and Scotland. Provides self-help tools as well as adviser-led support. Particularly useful for people who want to understand their options before speaking to a creditor.",
              },
              {
                name: "Mind",
                url: "mind.org.uk",
                phone: "0300 123 3393",
                desc: "The leading mental health charity. Provides information about the mental health impacts of financial stress, as well as access to local Mind services that can provide talking support. Does not provide financial advice but can support the mental health dimension.",
              },
              {
                name: "Samaritans",
                url: "samaritans.org",
                phone: "116 123",
                desc: "Free, 24/7 emotional support for anyone experiencing distress or despair. If financial stress has reached a point where you are having thoughts of self-harm, please call Samaritans now. The line is always answered.",
              },
            ].map((resource, i) => (
              <div
                key={i}
                style={{
                  background: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: "10px",
                  padding: "24px 28px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      color: gold,
                      fontWeight: 700,
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    {resource.name}
                  </p>
                  <span
                    style={{
                      color: muted,
                      fontSize: "0.9rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {resource.phone}
                  </span>
                </div>
                <p style={{ color: muted, fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  {resource.desc}
                </p>
              </div>
            ))}
          </section>

          {/* ── Section 11: What MEOK is not ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              What can MEOK not do when it comes to financial stress?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              Clarity about MEOK\u2019s limitations is as important as clarity about
              what it offers. These are things MEOK will not and cannot do:
            </p>

            <div
              style={{
                background: dangerBg,
                border: `1px solid ${dangerBorder}`,
                borderRadius: "10px",
                padding: "28px",
                margin: "24px 0",
              }}
            >
              <ul style={{ color: cream, fontSize: "0.98rem", lineHeight: 2.1, paddingLeft: "20px", margin: 0 }}>
                <li>
                  <strong>Give financial advice.</strong> MEOK will not tell you which debts to pay
                  first, whether to take a debt management plan or an IVA, or how to
                  negotiate with creditors.
                </li>
                <li>
                  <strong>Provide regulated investment guidance.</strong> MEOK is not an FCA-regulated
                  service. Do not make investment decisions based on conversations with MEOK.
                </li>
                <li>
                  <strong>Access your accounts or financial data.</strong> MEOK does not connect to
                  your bank, credit file, or financial records.
                </li>
                <li>
                  <strong>Provide legal advice.</strong> For debt enforcement, insolvency proceedings,
                  or employment disputes, you need qualified legal advice.
                </li>
                <li>
                  <strong>Replace therapy.</strong> If financial stress has triggered clinical depression,
                  an anxiety disorder, or suicidal thoughts, please see your GP.
                </li>
                <li>
                  <strong>Resolve the underlying financial problem.</strong> The money situation is real.
                  MEOK can help you become emotionally capable of addressing it. The addressing itself
                  requires the services listed above.
                </li>
              </ul>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
              }}
            >
              The single most important thing you can do if you are in financial
              difficulty is contact StepChange or MoneyHelper. Not tomorrow. Today.
              The earlier you make contact, the more options you have. MEOK can
              help you get to that phone call. That is its role.
            </p>
          </section>

          {/* ── Section 12: Identity and money ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              Why do people tie their self-worth to their financial situation?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              Western capitalist culture has built a near-perfect system for
              equating financial position with human worth. To be wealthy is,
              in this framework, to have succeeded. To be in debt is to have
              failed. This narrative is so pervasive that most people have
              absorbed it without examination. It sits beneath the surface
              of financial shame as its foundation.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              The narrative is demonstrably false. The majority of people in
              financial difficulty are there because of circumstances that were
              not primarily within their control: redundancy, illness, relationship
              breakdown, cost-of-living increases that outstripped wages. The
              belief that financial difficulty is evidence of personal failure
              is one of the most damaging stories a society can tell itself,
              because it prevents exactly the help-seeking that would address
              the situation.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "16px",
              }}
            >
              One of the things MEOK can do in conversations about money is help
              you examine this story. Not to absolve you of responsibility \u2014
              taking responsibility is part of moving forward \u2014 but to separate
              the facts of your situation from the shame narrative that makes those
              facts feel like a verdict on who you are as a person.
            </p>

            <blockquote
              style={{
                borderLeft: `3px solid ${gold}`,
                paddingLeft: "24px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  color: cream,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                &ldquo;Your bank balance is not your value. Your debt total is not
                your character. Your financial situation is a set of facts about
                money \u2014 not a verdict on you as a person.&rdquo;
              </p>
              <p style={{ color: muted, fontSize: "0.9rem", marginTop: "12px" }}>
                \u2014 Nicholas Templeman, Founder, MEOK AI LABS
              </p>
            </blockquote>
          </section>

          {/* ── Section 13: Practical first steps ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              What are the first practical steps when you are overwhelmed by financial stress?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: cream,
                marginBottom: "24px",
              }}
            >
              When shame and overwhelm are at their peak, the question of \u201cwhere do
              I start?\u201d feels paralysing because every possible starting point feels
              equally impossible. The research on behaviour change suggests that the
              most effective response to overwhelm is not to address the biggest
              problem but to identify the smallest possible action that moves things
              forward. Here is a sequence that works:
            </p>

            {[
              {
                step: "1. Name what you are carrying",
                detail:
                  "Before anything practical, say it out loud or write it down: the rough total, the main sources, how long it has been going on. You do not need to tell anyone else yet. Just stop pretending it does not exist, privately, to yourself.",
              },
              {
                step: "2. Contact one organisation today",
                detail:
                  "Just one. StepChange, MoneyHelper, or Citizens Advice. You do not need to have all the information. You do not need to have made any decisions. You just need to make the call. They have heard everything before.",
              },
              {
                step: "3. Open one letter or one statement",
                detail:
                  "Not all of them. One. The act of opening it reduces its power. An unopened letter is infinite threat. An opened letter is a specific, finite problem with specific, finite responses.",
              },
              {
                step: "4. Tell one person",
                detail:
                  "Secrecy feeds shame. You do not need to tell everyone. But telling one person \u2014 a partner, a friend, a family member \u2014 breaks the isolation that makes shame so overwhelming.",
              },
              {
                step: "5. Protect sleep and food first",
                detail:
                  "You cannot think clearly about money when you are exhausted or not eating properly. These are not luxuries; they are the cognitive infrastructure you need to make decisions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "24px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    background: gold,
                    color: bg,
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "28px",
                    marginTop: "4px",
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <p
                    style={{
                      color: cream,
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "6px",
                    }}
                  >
                    {item.step.replace(/^\d+\.\s/, "")}
                  </p>
                  <p style={{ color: muted, fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* ── FAQ Section ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                color: cream,
                marginBottom: "32px",
                lineHeight: 1.25,
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "Can AI help with financial stress?",
                a: "Yes, in specific ways. AI companions like MEOK can help with the emotional dimension of financial stress: processing shame, identifying avoidance patterns, and preparing for difficult conversations. They cannot provide financial, debt, or investment advice. For regulated help, contact StepChange (0800\u00a0138\u00a01111), MoneyHelper (0800\u00a0138\u00a07777), or Citizens Advice. For crisis support, call Samaritans on 116\u00a0123.",
              },
              {
                q: "Will MEOK give me financial advice?",
                a: "No. MEOK AI LABS is not a financial advisor, debt counsellor, or regulated money service. MEOK does not provide budgeting plans, investment guidance, debt management strategies, or any regulated financial advice. What MEOK offers is emotional processing, pattern reflection, and a space to think clearly about your relationship with money before you engage with the professionals who can actually help.",
              },
              {
                q: "How does MEOK help with money shame?",
                a: "MEOK creates a non-judgmental space where you can say the things you cannot say to anyone else: the exact number, the missed payments, the secret debt. Naming shame without it being met with alarm or advice starts to reduce its hold. MEOK also helps you notice patterns in when shame spikes, which gives you information rather than more paralysis.",
              },
              {
                q: "What is the debt spiral?",
                a: "The debt spiral is the self-reinforcing cycle in which financial problems trigger shame, shame triggers avoidance, and avoidance allows problems to compound. Missed payments attract charges, unopened letters become court orders, ignored creditors escalate. The spiral is not a moral failure \u2014 it is a predictable psychological response to intolerable shame. Breaking it requires addressing the shame before the numbers.",
              },
              {
                q: "Can MEOK help me prepare for a redundancy conversation?",
                a: "Yes. MEOK can help you rehearse difficult workplace conversations, including redundancy discussions with an employer, negotiating a settlement, or asking about financial support packages. It helps you clarify what you want to say, anticipate emotional responses, and go into the conversation feeling grounded rather than panicked. MEOK does not provide employment law advice \u2014 for that, contact ACAS (acas.org.uk) or Citizens Advice.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderBottom: `1px solid ${border}`,
                  paddingBottom: "28px",
                  marginBottom: "28px",
                }}
              >
                <h3
                  style={{
                    color: gold,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ color: muted, fontSize: "0.98rem", lineHeight: 1.75, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* ── CTA ── */}
          <section
            style={{
              background: infoBg,
              border: `1px solid ${border}`,
              borderRadius: "16px",
              padding: "48px 40px",
              marginBottom: "80px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: gold,
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                fontWeight: 800,
                color: cream,
                lineHeight: 1.2,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              You don\u2019t have to carry this alone
            </h2>
            <p
              style={{
                color: muted,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              MEOK is a non-judgmental space to process financial shame, prepare for
              hard conversations, and break the avoidance cycle \u2014 before you\u2019re
              ready to call the professionals who can fix the numbers.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: gold,
                color: bg,
                fontWeight: 800,
                fontSize: "1rem",
                padding: "16px 40px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Start talking to MEOK &rarr;
            </Link>
            <p
              style={{
                color: muted,
                fontSize: "0.85rem",
                marginTop: "16px",
              }}
            >
              Not a financial advisor. Not a therapist. Just a space to think clearly.
            </p>
          </section>

          {/* ── Related articles ── */}
          <section style={{ marginBottom: "80px" }}>
            <p
              style={{
                color: gold,
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                { label: "AI for Financial Anxiety", href: "/blog/ai-for-financial-anxiety" },
                { label: "AI for Money Anxiety", href: "/blog/ai-for-money-anxiety" },
                { label: "AI for Redundancy", href: "/blog/ai-for-redundancy" },
                { label: "AI for Anxiety", href: "/blog/ai-for-anxiety" },
                { label: "AI for Burnout", href: "/blog/ai-for-burnout" },
                { label: "MEOK Guardian: Scam Protection", href: "/blog/meok-guardian-scam-protection" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: cardBg,
                    border: `1px solid ${border}`,
                    borderRadius: "8px",
                    padding: "14px 18px",
                    color: cream,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── Footer disclaimer ── */}
          <footer
            style={{
              borderTop: `1px solid ${border}`,
              paddingTop: "32px",
              paddingBottom: "64px",
            }}
          >
            <p
              style={{
                color: muted,
                fontSize: "0.85rem",
                lineHeight: 1.75,
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: cream }}>Disclaimer:</strong> This article is
              for informational purposes only. MEOK AI LABS is not a financial
              advisor, regulated debt counsellor, or clinical mental health service.
              Nothing in this article constitutes financial, investment, legal, or
              clinical advice. If you are in financial difficulty, contact StepChange
              (stepchange.org, 0800&nbsp;138&nbsp;1111), MoneyHelper
              (moneyhelper.org.uk, 0800&nbsp;138&nbsp;7777), or Citizens Advice
              (citizensadvice.org.uk, 0800&nbsp;144&nbsp;8848). If financial stress is
              causing a mental health crisis, contact Samaritans on 116&nbsp;123
              (free, 24/7).
            </p>
            <p style={{ color: muted, fontSize: "0.85rem", lineHeight: 1.6 }}>
              &copy; 2026 MEOK AI LABS. Founder: Nicholas Templeman.
              Follow us: <span style={{ color: gold }}>@meok_ai</span>
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
