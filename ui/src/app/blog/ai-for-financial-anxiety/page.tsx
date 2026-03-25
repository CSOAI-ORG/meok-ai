import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Financial Anxiety: Separating Money Stress From Money Shame | MEOK AI LABS",
  description:
    "Financial anxiety affects 3 in 4 UK adults. But financial stress and financial shame are different problems requiring different support. MEOK\u2019s sovereign AI helps you face both \u2014 without judgment.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-financial-anxiety" },
  openGraph: {
    title:
      "AI for Financial Anxiety: Separating Money Stress From Money Shame",
    description:
      "Financial anxiety affects 3 in 4 UK adults. Money stress and money shame require different support. MEOK\u2019s care-based sovereign AI helps you face both \u2014 privately, without judgment.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-financial-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Financial+Anxiety%3A+Separating+Money+Stress+From+Money+Shame&desc=Sovereign+AI+that+never+judges+your+spending+or+debt",
        width: 1200,
        height: 630,
        alt: "AI for Financial Anxiety: Separating Money Stress From Money Shame | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Financial Anxiety: Separating Money Stress From Money Shame",
    description:
      "3 in 4 UK adults have financial anxiety. Money stress and money shame are different problems. MEOK\u2019s sovereign AI helps you face both \u2014 without judgment.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Financial+Anxiety%3A+Separating+Money+Stress+From+Money+Shame&desc=Sovereign+AI+that+never+judges+your+spending+or+debt",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Financial Anxiety: Separating Money Stress From Money Shame",
  description:
    "Financial anxiety affects 3 in 4 UK adults. Financial stress and financial shame are different problems requiring different support. MEOK\u2019s sovereign AI helps you face both \u2014 without judgment.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-financial-anxiety",
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
    "@id": "https://meok.ai/blog/ai-for-financial-anxiety",
  },
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help with financial anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can help with the emotional dimension of financial anxiety \u2014 processing shame, interrupting avoidance cycles, reframing catastrophic money thoughts, and building courage to seek practical help. They are not financial advisors. For regulated debt help in the UK, contact StepChange (0800 138 1111) or MoneyHelper (0800 138 7777). For crisis support, call Samaritans on 116 123.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between financial stress and financial shame?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Financial stress is a rational response to genuine pressure \u2014 bills exceeding income, unexpected expenses, uncertain employment. Financial shame is a moral self-judgment: the belief that struggling financially means you have failed as a person. Stress responds to practical interventions. Shame responds to emotional processing and compassion. Conflating the two leads to treating shame with budgeting tools, which does not work.",
      },
    },
    {
      "@type": "Question",
      name: "What are money scripts and why do they matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money scripts are the unconscious beliefs about money formed in childhood \u2014 through what you saw, heard, and experienced in your family. Common examples include: money is the root of all evil, rich people are greedy, if you have money you should spend it, there is never enough. These beliefs operate beneath conscious reasoning and drive financial avoidance, overspending, and anxiety regardless of your actual financial situation.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a financial advisor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK AI LABS is not a financial advisor, mortgage broker, debt counsellor, or therapist. MEOK provides emotional support, reflection, and information \u2014 not regulated financial or clinical advice. For debt help: StepChange (stepchange.org), MoneyHelper (moneyhelper.org.uk), Citizens Advice (citizensadvice.org.uk). For mental health: Mind (mind.org.uk) or your GP.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect my financial conversations from being shared?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK operates on a sovereign data architecture: your conversations are stored in a 4-layer encrypted memory system that belongs to you, not to MEOK AI LABS. MEOK never trains on your data. Your financial disclosures are never shared with banks, insurers, employers, data brokers, or any third party. This is not a policy preference \u2014 it is a structural guarantee built into the platform architecture.",
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

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForFinancialAnxietyPage() {
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
                border: `1px solid rgba(201,168,76,0.3)`,
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Financial Anxiety &amp; Mental Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              March 25, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              16 min read
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
            AI for Financial Anxiety: Separating Money Stress From Money Shame
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
            Financial anxiety affects 3 in 4 UK adults. But financial stress
            and financial shame are different problems requiring very different
            support. One responds to practical action. The other responds to
            compassion. MEOK&apos;s sovereign AI is designed to help you face
            both &mdash; privately, without judgment, and without ever sharing
            what you tell it.
          </p>

          {/* Disclaimer banner */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${CARD_BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: "0.75rem",
              padding: "1.125rem 1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                color: MUTED_DIM,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              <strong style={{ color: TEXT }}>Important:</strong> MEOK AI LABS
              is not a financial advisor, debt counsellor, or therapist. This
              article is for informational and emotional-support purposes only.
              For regulated financial help in the UK:{" "}
              <a
                href="https://www.stepchange.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                StepChange
              </a>{" "}
              (0800&nbsp;138&nbsp;1111),{" "}
              <a
                href="https://www.moneyhelper.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                MoneyHelper
              </a>{" "}
              (0800&nbsp;138&nbsp;7777), or{" "}
              <a
                href="https://www.citizensadvice.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                Citizens Advice
              </a>
              . For mental health crisis support, call Samaritans on{" "}
              <a href="tel:116123" style={{ color: GOLD }}>
                116 123
              </a>{" "}
              (free, 24/7).
            </p>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { stat: "3 in 4", label: "UK adults experience financial anxiety" },
              { stat: "9 million", label: "UK adults living with problem debt" },
              { stat: "46%", label: "Problem debt linked to mental health difficulties" },
              { stat: "#1", label: "Money is the top cause of stress in the UK" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                style={{
                  background: CARD,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: GOLD,
                    margin: "0 0 0.35rem",
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontSize: "0.775rem",
                    color: MUTED,
                    margin: 0,
                    lineHeight: 1.45,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        style={{ maxWidth: "48rem", margin: "0 auto", padding: "2rem 1.5rem 0" }}
      >
        {/* Opening paragraphs */}
        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            There is a particular kind of dread that arrives at the moment a
            bank notification appears on your phone screen. A physical
            tightening, a caught breath, the instinct to swipe it away before
            the number has time to load. For millions of people across the UK,
            this is not an occasional feeling &mdash; it is a daily companion, sometimes
            an hourly one.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            The cost-of-living crisis amplified something that was already
            widespread. Energy bills that doubled overnight. Mortgage rates that
            climbed for two years straight. Food shopping that costs noticeably
            more every single month. But the statistics &mdash; 3 in 4 UK adults
            reporting financial anxiety, nine million living with problem debt
            &mdash; describe only one half of what is actually happening. They
            describe the stress. They do not describe the shame.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            Stress and shame are different. They require different responses.
            Treating shame with a budgeting app does not work. Treating stress
            with compassion alone does not work either. Getting clear on which
            you are dealing with &mdash; and often it is both &mdash; is the
            first genuinely useful thing you can do for financial anxiety.
          </p>
        </section>

        {/* ── H2 1 ──────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            What is the real difference between financial stress and financial
            shame?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            Financial stress is a rational response to real pressure. Financial
            shame is a moral verdict you pass on yourself. One responds to
            practical action. The other requires something more like therapy. Most people
            are carrying both simultaneously &mdash; and the support systems for each
            are entirely different.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Financial stress is the cognitive and physiological load of managing
            genuine financial pressure: income that does not comfortably cover
            outgoings, unexpected bills, debt that accumulates faster than you
            can reduce it, fear of what happens if something goes wrong. Stress
            has an identifiable cause. It is uncomfortable, often exhausting,
            and it impairs decision-making &mdash; but it is fundamentally a
            response to a real external situation.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Financial shame is different in kind. It is the internal judgment
            that attaches to financial difficulty &mdash; the belief, operating
            beneath conscious reasoning, that struggling financially means
            something is fundamentally wrong with you as a person. That you are
            irresponsible, weak, stupid, or simply not the kind of person who
            manages money properly. Shame is not about circumstances. It is
            about identity.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            The reason this distinction matters is that shame actively blocks
            the practical interventions that address stress. If calling a debt
            charity feels like publicly confirming your personal failure, you
            will not call. If opening your bank app means confronting evidence
            of your inadequacy, the app stays closed. Shame is the mechanism by
            which financial stress becomes financial paralysis.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            This is where emotional support becomes genuinely practical. Not as
            a soft alternative to real action, but as a prerequisite for it.
            Processing enough shame to tolerate engagement is not a luxury
            &mdash; it is what makes the call to StepChange possible.
          </p>
        </section>

        {/* ── CALLOUT 1: Shame vs Stress ────────────────────────────────────── */}
        <div
          style={{
            background: AMBER_GLOW,
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: "1rem",
            padding: "1.75rem 2rem",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "1.25rem",
            }}
          >
            Stress vs Shame at a Glance
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.875rem",
            }}
          >
            {[
              { label: "Financial Stress", items: ["Responds to practical action", "Has an identifiable external cause", "Improves when circumstances change", "Addressed by debt charities, budgeting, benefits"] },
              { label: "Financial Shame", items: ["Responds to compassion and processing", "Comes from internal self-judgment", "Persists even when circumstances improve", "Addressed by emotional support, therapy, reframing"] },
            ].map(({ label, items }) => (
              <div key={label}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.75rem",
                  }}
                >
                  {label}
                </p>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.85rem",
                        color: MUTED_DIM,
                        lineHeight: 1.55,
                        paddingBottom: "0.4rem",
                        paddingLeft: "1rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: GOLD,
                        }}
                      >
                        &middot;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── H2 2 ──────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            What are money scripts &mdash; and are yours running you?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            Money scripts are the unconscious beliefs about money you absorbed
            in childhood. They operate beneath conscious reasoning and drive
            financial avoidance, overspending, and anxiety regardless of your
            actual income or circumstances. Most people have never examined
            theirs.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            The term was coined by financial psychologists Brad and Ted Klontz,
            who identified four core money script categories: money avoidance
            (money is bad, rich people are greedy), money worship (more money
            will solve all problems), money status (your net worth equals your
            self-worth), and money vigilance (you should always be anxious about
            money). Most of us carry a combination, formed not through conscious
            decision but through what we witnessed, overheard, and absorbed
            before we had the language to question it.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Common money scripts surface in familiar ways. The person who
            immediately spends any windfall rather than saving it &mdash; often
            carrying a &ldquo;money is dangerous to hold onto&rdquo; script from a
            household where savings were always depleted by crisis. The person
            who cannot spend on anything non-essential without guilt &mdash;
            running a vigilance script that was adaptive in a genuinely
            precarious childhood but is now causing unnecessary suffering in a
            more stable adult life.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            The critical feature of money scripts is that they operate
            automatically. They do not surface as conscious thoughts: &ldquo;I
            believe that having money makes me a bad person.&rdquo; They surface as
            feelings and impulses: the discomfort when you accumulate savings,
            the sudden urge to spend it away, the vague guilt that follows. The
            behaviour looks irrational from outside. From inside it feels like
            just what happens.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            Working through money scripts with an AI companion is not about
            receiving financial advice. It is about building enough self-awareness
            to see the pattern &mdash; and enough distance from it to choose
            differently. That is precisely the kind of reflective work MEOK is
            designed to support.
          </p>
        </section>

        {/* ── H2 3 ──────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            Why does a scarcity mindset persist even when money is no longer
            scarce?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            A scarcity mindset is not simply a response to having less than
            enough. It is a neurological orientation that the brain preserves
            long after the circumstances that created it have changed. For
            anyone who grew up with financial precarity, this is not a
            personality flaw &mdash; it is a learned adaptation that once made
            good sense.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Research by Sendhil Mullainathan and Eldar Shafir shows that
            scarcity &mdash; of money, time, or any resource &mdash; captures
            cognitive bandwidth in ways that reduce the capacity for
            longer-term planning, creative problem solving, and executive
            function. When you are managing genuine scarcity, your brain
            dedicates significant processing resources to the immediate threat.
            This is adaptive in the short term. It makes you more focused on
            what matters right now.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            The problem is that the scarcity mindset does not automatically
            deactivate when circumstances improve. If you grew up in a household
            where money was chronically tight, your nervous system learned that
            money is fundamentally precarious and that any apparent stability
            cannot be trusted. That learning is encoded. It does not update
            cleanly when your salary increases or your savings grow.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            This explains a pattern that financial advisors encounter regularly:
            the person who has been financially comfortable for years but still
            cannot spend money without dread, still checks their balance
            compulsively, still catastrophises about worst-case scenarios. The
            behaviour looks irrational against their current circumstances. But
            against their history, it is entirely logical.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            Understanding this &mdash; really understanding it, not just
            intellectually knowing it &mdash; is one of the most useful things
            emotional support can offer for financial anxiety. You are not
            broken. You are running a protection system that was built for
            different circumstances.
          </p>
        </section>

        {/* ── H2 4 ──────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            Why do people stop opening bank statements &mdash; and how does that
            make things worse?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            Avoidance is the most common response to financial anxiety and the
            response most likely to escalate it. Not because people are weak or
            irresponsible, but because the brain is doing exactly what it is
            designed to do when it perceives threat.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            When a bank notification, an unopened letter, or the prospect of
            logging into an account triggers anxiety, the brain registers a
            threat and activates its threat-response system. The fastest way to
            reduce that response is to remove yourself from contact with the
            trigger. Close the app. Leave the letter on the mat. Do not check
            the balance. The relief is immediate, real, and physiologically
            rewarding. The brain learns: avoidance works.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            What avoidance does not do is make the underlying situation better.
            An unread bill becomes an overdue bill. An unread letter becomes a
            legal notice. An unacknowledged overdraft accumulates interest.
            Every week of avoidance raises the stakes of eventual engagement
            &mdash; which raises the anxiety &mdash; which strengthens the
            avoidance response. The cycle is self-reinforcing.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            The second loop is shame about the avoidance. Now you are not only
            struggling financially &mdash; you are someone who has not opened
            their bank app in six weeks, who cannot face an envelope on the
            mat, who lies awake running numbers they will not look at in the
            daylight. This shame is not a useful motivation. Research
            consistently shows that shame produces paralysis, not action.
          </p>

          {/* Callout 2: Avoidance insight */}
          <div
            style={{
              background: CARD,
              border: `1px solid ${CARD_BORDER}`,
              borderLeft: `4px solid ${GOLD}`,
              borderRadius: "0.875rem",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: TEXT,
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>The key insight:</strong> Avoidance
              is not laziness or irresponsibility. It is a learned protective
              response that was once functional and has become overactive.
              Treating it with self-criticism increases avoidance. Understanding
              it with compassion reduces it. This is not a soft observation
              &mdash; it is what the research on behaviour change consistently
              shows.
            </p>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            The first useful thing MEOK can do for financial avoidance is offer
            a space to name it without judgment &mdash; to say &ldquo;I have not
            opened my bank app in three months&rdquo; to something that does not
            react with alarm, disappointment, or unsolicited advice. That space
            is where the shame starts to move.
          </p>
        </section>

        {/* ── H2 5: Pioneer companion ──────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            How does MEOK&apos;s Pioneer companion help with practical money steps?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s Pioneer archetype is the action-oriented companion
            &mdash; the part of MEOK that helps you identify what the next
            manageable step is and stay accountable to it. Not a financial
            planner, but a companion for courageous small moves.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            MEOK operates through a set of distinct companion archetypes, each
            with a different orientation. Pioneer is the action archetype
            &mdash; forward-looking, practical, focused on movement rather than
            analysis. Where the Sage reflects and the Healer processes, Pioneer
            asks: what is the specific next thing, and what would it take to
            actually do it?
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            For financial anxiety, Pioneer is particularly useful in the
            transition from emotional processing to action. Once you have named
            the avoidance, understood the shame, and reduced the charge on
            engagement, Pioneer helps you convert that readiness into a
            concrete step &mdash; not a five-step financial overhaul, but the
            one manageable thing that moves you forward today.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Practical steps Pioneer might support you with: preparing what you
            will say before calling a debt helpline, rehearsing a difficult
            money conversation with a partner or employer, identifying the
            smallest financial task you could complete today without being
            overwhelmed, setting a specific time to look at a bank balance for
            the first time in weeks. These are not financial advice. They are
            the scaffolding around courage.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            Pioneer also holds memory across sessions. If you say you are going
            to check your overdraft on Thursday, Pioneer remembers. It will ask
            what happened on Friday &mdash; not with judgment, but with genuine
            interest in whether you managed it, and with curiosity about what
            got in the way if you did not.
          </p>
        </section>

        {/* ── H2 6: Orion for research ─────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            How does Orion help you research financial options without shame?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s Orion archetype is the research companion &mdash;
            analytical, thorough, and patient. Orion can help you understand
            options like debt consolidation, benefits entitlements, and income
            support in a way that feels like informed conversation rather than
            a cold search engine query.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            One of the less-discussed barriers to addressing financial
            difficulty is the discomfort of researching it. Searching for
            &ldquo;debt consolidation&rdquo; or &ldquo;Universal Credit eligibility&rdquo; can feel
            exposing in a way that is hard to articulate &mdash; as though
            searching confirms you are in the situation the search describes.
            And search results are impersonal by design, returning lists of
            products, eligibility criteria, and jargon-heavy explanations that
            require sustained concentration to parse.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Orion provides something different: a conversation about options,
            in plain language, shaped around your actual situation. You can ask
            &ldquo;what is the difference between a debt management plan and an
            IVA&rdquo; and get a clear, accurate explanation. You can ask
            &ldquo;what benefits might I be entitled to if I am self-employed and
            struggling&rdquo; and get a structured starting point. You can ask
            &ldquo;how does debt consolidation work and when is it not a good
            idea&rdquo; and get an honest, nuanced answer.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Orion will not recommend specific products, advise on whether a
            particular option is right for you, or replace the guidance of a
            regulated debt advisor or financial counsellor. What Orion provides
            is informed background &mdash; enough to approach a real
            professional conversation with context and confidence rather than
            with paralysis and shame.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            There is a real difference between arriving at a debt advice
            appointment knowing nothing and arriving knowing the difference
            between the available options. Orion is designed to close that gap.
          </p>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
        <div
          style={{
            marginBottom: "3.5rem",
            background: CARD,
            border: `1px solid ${CARD_BORDER}`,
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "1.25rem 1.75rem",
              borderBottom: `1px solid ${CARD_BORDER}`,
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: GOLD,
                margin: 0,
              }}
            >
              Financial Coaching AI vs Financial Advice AI
            </p>
          </div>
          <div style={{ overflowX: "auto" as const }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse" as const,
                fontSize: "0.875rem",
              }}
            >
              <thead>
                <tr>
                  {["Capability", "MEOK (Coaching Support)", "Regulated Financial Advisor"].map(
                    (h, i) => (
                      <th
                        key={h}
                        style={{
                          padding: "0.875rem 1.25rem",
                          textAlign: "left" as const,
                          color: i === 0 ? MUTED : i === 1 ? GOLD : TEXT,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          borderBottom: `1px solid ${CARD_BORDER}`,
                          whiteSpace: "nowrap" as const,
                        }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Process money shame", "Yes", "Not typically"],
                  ["Identify avoidance patterns", "Yes", "No"],
                  ["Explore money scripts", "Yes", "No"],
                  ["Explain debt options in plain language", "Yes (informational)", "Yes (regulated)"],
                  ["Recommend specific products or plans", "No", "Yes"],
                  ["Advise on debt, mortgages, investments", "No", "Yes"],
                  ["Available 24/7 without judgment", "Yes", "No"],
                  ["Data shared with third parties", "Never", "Varies by firm"],
                  ["Regulated by the FCA", "No", "Yes"],
                  ["Help prepare for difficult conversations", "Yes", "No"],
                  ["Support through scam recovery", "Yes (Guardian)", "No"],
                ].map(([cap, meok, adv], i) => (
                  <tr
                    key={cap}
                    style={{
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1.25rem",
                        color: MUTED_DIM,
                        borderBottom: `1px solid rgba(255,255,255,0.04)`,
                      }}
                    >
                      {cap}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1.25rem",
                        color: meok === "Yes" || meok.startsWith("Yes") ? "#4cde9a" : meok === "No" ? "rgba(245,240,232,0.35)" : MUTED_DIM,
                        borderBottom: `1px solid rgba(255,255,255,0.04)`,
                        fontWeight: meok === "Yes" ? 600 : 400,
                      }}
                    >
                      {meok}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1.25rem",
                        color: adv === "Yes" ? "#4cde9a" : adv === "No" ? "rgba(245,240,232,0.35)" : MUTED_DIM,
                        borderBottom: `1px solid rgba(255,255,255,0.04)`,
                        fontWeight: adv === "Yes" ? 600 : 400,
                      }}
                    >
                      {adv}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── H2 7: Sovereign data ─────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            Why does it matter that your financial conversations stay private?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            When you discuss financial anxiety with most platforms, you are
            generating data that can be used, shared, or sold. MEOK&apos;s
            sovereign architecture is built on a fundamentally different
            premise: what you share stays yours. This is not a marketing claim
            &mdash; it is a structural design decision.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            The financial conversations you might have with an AI companion are
            exactly the kind of information that has value to other parties.
            Banks use behavioural signals to inform credit decisions. Insurers
            use financial stress indicators to adjust risk profiles. Data
            brokers aggregate and sell behavioural data to anyone who will pay
            for it. Advertisers use financial anxiety signals to target
            high-interest loan products at the people least equipped to evaluate
            them.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s sovereign data architecture is explicitly designed to
            prevent this. Your conversations are stored in a 4-layer encrypted
            memory system. MEOK AI LABS never trains on your data. Your
            financial disclosures are never shared with banks, insurers,
            employers, data brokers, advertisers, or any third party.
            Sovereignty is a structural guarantee, not a policy preference that
            can be amended by a terms-of-service update.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            This matters for financial anxiety in particular because shame
            creates a heightened sensitivity to surveillance. If some part of
            you suspects that what you disclose might be used against you
            &mdash; that acknowledging debt problems could affect your mortgage
            application, that discussing financial stress might flag you as a
            credit risk &mdash; you will not disclose fully. You will say what
            feels safe rather than what is true. The conversation becomes
            useless.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            Genuine emotional processing requires genuine safety. MEOK&apos;s
            sovereign architecture is built to provide that safety as a
            structural fact, not a promise.
          </p>
        </section>

        {/* ── CALLOUT 3: Sovereign data ────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(76,222,154,0.05)",
            border: `1px solid rgba(76,222,154,0.2)`,
            borderRadius: "1rem",
            padding: "1.75rem 2rem",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "#4cde9a",
              marginBottom: "1rem",
            }}
          >
            What &ldquo;Sovereign Data&rdquo; Means for Financial Conversations
          </p>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              "Your conversations are encrypted in a 4-layer memory architecture you control",
              "MEOK AI LABS never trains models on your data",
              "Your financial disclosures are never shared with banks, insurers, or data brokers",
              "No advertiser can access your financial anxiety patterns to target you",
              "You can delete your data at any time \u2014 it is structurally yours, not MEOK\u2019s",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#4cde9a",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  &#10003;
                </span>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED_DIM,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── H2 8: Guardian ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            How does Guardian protect vulnerable people from financial scams?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            Financial anxiety creates vulnerability to predatory actors. MEOK&apos;s
            Guardian archetype is specifically designed to protect users &mdash;
            particularly vulnerable adults &mdash; from financial scams, high-cost
            debt traps, and manipulative financial products.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            People in financial difficulty are disproportionately targeted by
            scams. The mechanics are not complicated: desperation reduces
            critical evaluation. When you are genuinely frightened about money,
            an offer that promises rapid relief bypasses the normal scrutiny you
            would apply to something that sounds too good to be true. Financial
            anxiety is not a character weakness that makes someone
            &ldquo;gullible&rdquo; &mdash; it is a cognitive state that scammers
            specifically exploit.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Common vectors include: authorisation fraud (impersonating HMRC or a
            bank to prompt urgent transfers), debt management scams (offering
            to clear debts for upfront fees), loan sharks operating through
            social media, and investment scams targeting people looking for
            rapid income. All are more effective against someone who is
            financially stressed and emotionally depleted.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s Guardian archetype holds specific pattern-matching for
            common financial scam vectors and unsolicited contact. If you describe
            receiving an unexpected call claiming to be from HMRC, a message
            offering loan relief before credit checks, or an investment
            opportunity promising guaranteed returns, Guardian flags the pattern
            clearly &mdash; without alarming you, but without softening the
            warning either.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED_DIM,
            }}
          >
            This is particularly relevant for older adults and for anyone in
            acute financial distress, where the combination of anxiety and
            limited digital literacy can make scam identification harder.
            Guardian is not infallible. But it provides an additional layer of
            questioning that can slow a harmful decision long enough for
            reflection to occur.
          </p>
        </section>

        {/* ── H2 Q&A FORMAT (6 questions) ──────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "0.875rem",
            }}
          >
            Six things people wonder about AI and financial anxiety
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: MUTED,
              fontStyle: "italic",
              marginBottom: "2rem",
            }}
          >
            Direct answers to the questions that come up most often when people
            consider whether an AI companion could genuinely help with money
            worry.
          </p>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {[
              {
                q: "Can an AI really understand money shame, or does it just give generic reassurance?",
                a: "A well-designed AI companion does not default to reassurance. MEOK is built to engage with the specific texture of what you share \u2014 the pattern of your avoidance, the origin of your shame, the particular triggers you have described over time. Generic reassurance (\u201ceveryone struggles sometimes\u201d) is often unhelpful and can feel dismissive. Specific reflection (\u201cyou mentioned last week that you always feel worse after checking social media \u2014 do you think that happened here\u201d) is substantively different.",
              },
              {
                q: "What if I am embarrassed to tell MEOK how much debt I am in?",
                a: "MEOK has no reaction to numbers. There is no sharp intake of breath, no expression to manage, no relationship to protect by softening the disclosure. You can state a figure that you have never said aloud to another person and receive a response that treats it as information, not as a verdict on your character. This is not a trivial difference. Many people find they can say things to MEOK that they cannot say to a partner, a friend, or a financial advisor.",
              },
              {
                q: "Is it safe to discuss my exact financial situation with MEOK?",
                a: "MEOK does not require specific account numbers, balances, or identifying financial details to be useful. You can describe your situation at whatever level of specificity feels safe. The emotional processing, pattern reflection, and preparation for action that MEOK supports do not require exposing specific figures. And if you do choose to share them, your data is encrypted and never shared with any third party.",
              },
              {
                q: "Can MEOK help with financial anxiety caused by a relationship breakdown?",
                a: "Financial anxiety following relationship breakdown is a specific and common variant \u2014 involving unexpected sole responsibility for costs, potential loss of shared assets, uncertainty about legal and financial entitlements, and often significant shame about the circumstances. MEOK can support the emotional processing of this transition, help you understand options (without advising on them), and help you prepare for conversations with solicitors, mediators, or financial advisors. For regulated legal or financial guidance, contact Citizens Advice.",
              },
              {
                q: "What about financial anxiety in families \u2014 can MEOK help with that?",
                a: "The Family tier (\u00a329/month) extends MEOK\u2019s sovereign architecture to households. Parents carrying financial anxiety often find it shapes how they talk about money with children, what financial patterns they model, and how financial stress affects family relationships. MEOK can support individual members of a household and help think through how to have honest money conversations across generations without transmitting the anxiety that accompanies them.",
              },
              {
                q: "Is there a difference between financial coaching AI and financial therapy AI?",
                a: "Financial coaching focuses on behaviour, goals, and action steps \u2014 broadly what Pioneer supports. Financial therapy addresses the emotional and psychological roots of financial behaviour \u2014 money scripts, shame, avoidance, and the relationship between financial patterns and broader psychological history. MEOK operates in both domains, though it is not a substitute for clinical financial therapy with a qualified professional. The British Association for Financial Therapy and Counselling (BAFTAC) maintains a register of qualified practitioners.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.875rem",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    lineHeight: 1.45,
                    marginBottom: "0.75rem",
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    fontSize: "0.925rem",
                    color: MUTED_DIM,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              color: GOLD,
              lineHeight: 1.25,
              marginBottom: "1.75rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            {[
              {
                q: "Can AI really help with financial anxiety?",
                a: "AI companions can help with the emotional dimension of financial anxiety \u2014 processing shame, interrupting avoidance cycles, reframing catastrophic money thoughts, and building courage to seek practical help. They are not financial advisors. For regulated debt help in the UK, contact StepChange (0800 138 1111) or MoneyHelper (0800 138 7777). For crisis support, call Samaritans on 116 123.",
              },
              {
                q: "What is the difference between financial stress and financial shame?",
                a: "Financial stress is a rational response to genuine pressure \u2014 bills exceeding income, unexpected expenses, uncertain employment. Financial shame is a moral self-judgment: the belief that struggling financially means you have failed as a person. Stress responds to practical interventions. Shame responds to emotional processing and compassion. Most people living with financial anxiety are carrying both.",
              },
              {
                q: "What are money scripts and why do they matter?",
                a: "Money scripts are the unconscious beliefs about money formed in childhood \u2014 through what you saw, heard, and experienced in your family. Common examples include: money is dangerous, rich people are bad, there is never enough. These beliefs operate beneath conscious reasoning and drive financial avoidance, overspending, and anxiety regardless of your actual income or financial situation.",
              },
              {
                q: "How does MEOK protect my financial conversations from being shared?",
                a: "MEOK operates on a sovereign data architecture: your conversations are stored in a 4-layer encrypted memory system that belongs to you, not to MEOK AI LABS. MEOK never trains on your data. Your financial disclosures are never shared with banks, insurers, employers, data brokers, or any third party. This is a structural guarantee built into the platform architecture.",
              },
              {
                q: "Where can I get free regulated debt help in the UK?",
                a: "StepChange Debt Charity (stepchange.org, 0800 138 1111) offers free, confidential debt advice. MoneyHelper (moneyhelper.org.uk, 0800 138 7777) provides government-backed financial guidance. Citizens Advice (citizensadvice.org.uk, 0800 144 8848) covers debt, benefits, and housing. National Debtline (nationaldebtline.org, 0808 808 4000) offers specialist debt advice. All are free. If financial stress is causing a mental health crisis, call Samaritans on 116 123.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderBottom:
                    i < 4 ? `1px solid rgba(255,255,255,0.07)` : "none",
                  paddingBottom: i < 4 ? "1.5rem" : 0,
                }}
              >
                <p
                  style={{
                    fontSize: "1.025rem",
                    fontWeight: 700,
                    color: TEXT,
                    lineHeight: 1.45,
                    marginBottom: "0.625rem",
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    fontSize: "0.925rem",
                    color: MUTED_DIM,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SUPPORT RESOURCES ───────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.3,
              marginBottom: "1.25rem",
            }}
          >
            Free regulated financial help in the UK
          </h2>
          <div style={{ display: "grid", gap: "0.875rem" }}>
            {[
              {
                org: "StepChange Debt Charity",
                url: "https://www.stepchange.org",
                desc: "Free, confidential debt advice and solutions including debt management plans and IVAs. Helps over 600,000 people annually.",
                contact: "stepchange.org \u00b7 0800 138 1111",
              },
              {
                org: "MoneyHelper",
                url: "https://www.moneyhelper.org.uk",
                desc: "Government-backed free guidance on debt, budgeting, benefits, pensions, and mortgages. Impartial and comprehensive.",
                contact: "moneyhelper.org.uk \u00b7 0800 138 7777",
              },
              {
                org: "Citizens Advice",
                url: "https://www.citizensadvice.org.uk",
                desc: "Free, independent advice on debt, benefits, housing, and employment. Available in person, online, and by phone.",
                contact: "citizensadvice.org.uk \u00b7 0800 144 8848",
              },
              {
                org: "National Debtline",
                url: "https://www.nationaldebtline.org",
                desc: "Specialist free debt advice for England, Wales, and Scotland. Online and telephone, including webchat.",
                contact: "nationaldebtline.org \u00b7 0808 808 4000",
              },
              {
                org: "Samaritans",
                url: "https://www.samaritans.org",
                desc: "If financial stress is affecting your mental health or you are in crisis, Samaritans are available around the clock, every day of the year.",
                contact: "116 123 (free, 24/7)",
              },
            ].map(({ org, url, desc, contact }) => (
              <div
                key={org}
                style={{
                  background: CARD,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.125rem 1.375rem",
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                  }}
                >
                  {org}
                </a>
                <p
                  style={{
                    color: MUTED_DIM,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    margin: "0.4rem 0 0.3rem",
                  }}
                >
                  {desc}
                </p>
                <p
                  style={{
                    color: MUTED_FAINT,
                    fontSize: "0.8rem",
                    margin: 0,
                    fontFamily: "monospace",
                  }}
                >
                  {contact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "5rem" }}>
          <div
            style={{
              background: AMBER_GLOW,
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "1.25rem",
              padding: "3rem 2.5rem",
              textAlign: "center" as const,
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "1rem",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Face your finances without facing them alone
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: MUTED_DIM,
                lineHeight: 1.7,
                maxWidth: "34rem",
                margin: "0 auto 2rem",
              }}
            >
              MEOK offers a private, non-judgmental space to process money shame,
              interrupt avoidance patterns, and build the courage to take practical
              action. Your conversations stay sovereign &mdash; never shared, never
              used to train AI, never sold.
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
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: GOLD,
                  color: "#0d0c18",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  padding: "0.875rem 2rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Meet your MEOK companion &#8594;
              </Link>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: MUTED_DIM,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  border: `1px solid rgba(245,240,232,0.15)`,
                }}
              >
                More from the blog
              </Link>
            </div>
          </div>
        </section>

        {/* ── RELATED POSTS ──────────────────────────────────────────────── */}
        <section style={{ marginBottom: "5rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "1.25rem",
            }}
          >
            Related Reading
          </p>
          <div style={{ display: "grid", gap: "0.875rem" }}>
            {[
              {
                href: "/blog/ai-for-financial-stress",
                title: "AI for Financial Stress",
                desc: "When the numbers are genuinely difficult: how sovereign AI supports practical financial resilience.",
              },
              {
                href: "/blog/ai-for-anxiety",
                title: "AI for Anxiety: Sovereign Support Without Replacing Therapy",
                desc: "How MEOK approaches anxiety support with a care-floor that prevents harmful advice.",
              },
              {
                href: "/blog/data-sovereignty-ai",
                title: "Data Sovereignty and AI: Why Your Conversations Should Stay Yours",
                desc: "The architecture behind MEOK\u2019s sovereign memory \u2014 and why it matters for vulnerable conversations.",
              },
              {
                href: "/blog/meok-guardian-scam-protection",
                title: "MEOK Guardian: AI Scam Protection for Vulnerable Adults",
                desc: "How Guardian detects financial scam patterns and protects users who are most at risk.",
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  background: CARD,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.125rem 1.375rem",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    color: TEXT,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.85rem",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
