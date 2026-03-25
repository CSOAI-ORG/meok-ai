import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Financial Anxiety: When Money Worries Feel Too Shameful to Talk About | MEOK AI LABS",
  description:
    "51% of UK adults are worried about their finances, yet money shame keeps most of us silent. MEOK offers a completely private space to say the actual number — without judgment, advice, or stigma.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-financial-anxiety" },
  openGraph: {
    title:
      "AI for Financial Anxiety: When Money Worries Feel Too Shameful to Talk About",
    description:
      "51% of UK adults are worried about their finances. Money shame keeps most people silent. MEOK\u2019s sovereign AI creates a private space to face the numbers \u2014 without judgment or unsolicited advice.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-financial-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Financial+Anxiety%3A+When+Money+Worries+Feel+Too+Shameful+to+Talk+About&desc=Private+support+for+money+shame+without+judgment",
        width: 1200,
        height: 630,
        alt: "AI for Financial Anxiety: When Money Worries Feel Too Shameful to Talk About | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Financial Anxiety: When Money Worries Feel Too Shameful to Talk About",
    description:
      "51% of UK adults worry about money. 15 million have less than \u00a3100 saved. Yet money shame keeps most of us silent. MEOK creates a space to finally say the number.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Financial+Anxiety%3A+When+Money+Worries+Feel+Too+Shameful+to+Talk+About&desc=Private+support+for+money+shame+without+judgment",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Financial Anxiety: When Money Worries Feel Too Shameful to Talk About",
  description:
    "51% of UK adults are worried about their finances, yet money shame keeps most of us silent. MEOK offers a completely private space to say the actual number \u2014 without judgment, advice, or stigma.",
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
      name: "Can AI help with financial anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can help with the emotional and psychological dimensions of financial anxiety \u2014 processing shame, interrupting avoidance cycles, helping you articulate what you are actually afraid of, and giving you a private space to say the numbers out loud for the first time. MEOK is not a financial advisor and does not provide regulated financial guidance. For debt help in the UK, contact StepChange on 0800 138 1111 or Citizens Advice at citizensadvice.org.uk.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK give me financial advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK AI LABS is not a financial advisor, mortgage broker, or debt counsellor, and does not provide regulated financial advice. What MEOK offers is a private space to process money-related emotions, think through decisions, research information (such as how the debt avalanche method works or what benefits you might be eligible for), and prepare for conversations with professionals. For regulated advice, speak to Citizens Advice (citizensadvice.org.uk) or StepChange (0800 138 1111).",
      },
    },
    {
      "@type": "Question",
      name: "How private is it to talk to MEOK about money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely private. MEOK operates on a sovereign data architecture \u2014 your conversations are stored in a 4-layer encrypted memory system that belongs to you, not to MEOK AI LABS. MEOK never trains on your data. Your financial disclosures are never shared with banks, insurers, employers, data brokers, or any third party. MEOK never asks for account numbers and never integrates with your banking without your explicit, active consent. You share only what you choose to share.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I have serious debt problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact a regulated UK debt charity immediately. StepChange (stepchange.org, 0800 138 1111) offers free, confidential debt advice and can help you with debt management plans, IVAs, and other solutions. Citizens Advice (citizensadvice.org.uk) provides free guidance on benefits, debt, and financial rights. MoneyHelper (moneyhelper.org.uk) is a free government-backed service. If financial stress is affecting your mental health or you are in crisis, call Samaritans on 116 123 (free, 24/7).",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between financial anxiety and financial problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Financial anxiety is a psychological state \u2014 characterised by worry, avoidance, dread, and shame around money \u2014 that can exist independently of your actual financial situation. You can have financial anxiety with a healthy bank balance, or face genuine hardship without significant anxiety. MEOK helps with the former: processing the emotional weight of money. For the latter, regulated charities like StepChange and Citizens Advice provide practical, professional support.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const GREEN = "#6aaa64";
const MUTED = "rgba(245,240,232,0.55)";
const MUTED_DIM = "rgba(245,240,232,0.62)";
const MUTED_FAINT = "rgba(245,240,232,0.38)";
const CARD = "rgba(255,255,255,0.03)";
const CARD_BORDER = "rgba(201,168,76,0.18)";
const AMBER_GLOW = "rgba(201,168,76,0.09)";
const GREEN_GLOW = "rgba(106,170,100,0.09)";

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
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              fontSize: "0.8rem",
              color: MUTED_FAINT,
            }}
          >
            <Link
              href="/"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
            >
              Home
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link
              href="/blog"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
            >
              Blog
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: MUTED }}>AI for Financial Anxiety</span>
          </nav>

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
              Financial Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              March 25, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              14 min read
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
            AI for Financial Anxiety: When Money Worries Feel Too Shameful to
            Talk About
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
            Fifty-one percent of UK adults are worried about their financial
            situation. Fifteen million have less than &pound;100 saved. Yet for
            most people, money is the one topic they will never discuss honestly
            &mdash; with a friend, a partner, or a professional. The silence is
            not ignorance. It is shame. MEOK exists to break that silence.
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
              For regulated debt help in the UK:{" "}
              <a
                href="https://www.stepchange.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                StepChange
              </a>{" "}
              (0800&nbsp;138&nbsp;1111) or{" "}
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
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "5rem",
        }}
      >

        {/* ── STATS STRIP ─────────────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
            gap: "1rem",
            marginBottom: "3.5rem",
          }}
        >
          {[
            { stat: "51%", label: "of UK adults worried about finances", src: "Mental Health Foundation, 2023" },
            { stat: "15M", label: "UK adults have less than £100 saved", src: "Money and Pensions Service, 2023" },
            { stat: "1 in 4", label: "UK adults have zero savings", src: "Money and Pensions Service, 2023" },
            { stat: "#1", label: "trigger for male suicide in the UK", src: "is financial difficulty" },
          ].map(({ stat, label, src }) => (
            <div
              key={stat}
              style={{
                background: CARD,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.25rem 1.5rem",
                textAlign: "center" as const,
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: 1.1,
                  marginBottom: "0.375rem",
                }}
              >
                {stat}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: MUTED_DIM,
                  lineHeight: 1.45,
                  marginBottom: "0.25rem",
                }}
              >
                {label}
              </div>
              <div style={{ fontSize: "0.7rem", color: MUTED_FAINT }}>
                {src}
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 1 ── Why Money Feels Different ──────────────────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          Why Money Feels Different from Every Other Problem
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          You can tell a friend your relationship is falling apart. You can
          admit to a colleague that you are struggling with your mental health.
          You can post about burnout, grief, anxiety, or loneliness on social
          media and receive sympathy and solidarity in return. But try saying,
          openly and plainly: &ldquo;I have &pound;4,000 of credit card debt I
          can&rsquo;t shift&rdquo; or &ldquo;I don&rsquo;t actually understand
          how my pension works&rdquo; or &ldquo;I&rsquo;ve been ignoring my
          bank statements for three months.&rdquo;
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The silence that follows is different. It carries a different
          quality. Money is not just a practical matter in modern Western
          culture &mdash; it is a moral one. It is treated as evidence of
          intelligence, discipline, worthiness, and adult competence. When
          money goes wrong, the cultural message, rarely spoken aloud but
          everywhere felt, is that you went wrong. That you made bad choices.
          That you deserve it.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          This is why financial anxiety is so uniquely difficult. It is not
          just the stress of not having enough. It is the layered shame of
          feeling that having &ldquo;not enough&rdquo; reveals something
          fundamentally inadequate about you. And shame, as a psychological
          state, does not respond to practical advice. It responds to
          connection, witness, and the experience of being known and not
          rejected.
        </p>

        {/* ── SECTION 2 ── What Silence Costs ─────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          What the Silence Costs You
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Money shame does not stay contained. It spreads, and it
          generates specific and recognisable behaviours that make the
          underlying situation worse:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "1rem",
            marginBottom: "1.75rem",
          }}
        >
          {[
            {
              title: "Avoidance",
              body: "Not checking your bank balance. Not opening letters from creditors. Not logging into your pension portal. Not looking at your credit score. What you don\u2019t know can\u2019t hurt you \u2014 except it already is.",
            },
            {
              title: "Paralysis",
              body: "Knowing something needs to be done (the bill, the call, the form) but being unable to start. The task sits in your head, growing larger and more threatening by the day. Executive function collapses under the weight of dread.",
            },
            {
              title: "Magical thinking",
              body: "It will sort itself. Something will come through. Next month will be different. The lottery. A windfall. A promotion. The cognitive strategy that allows you to continue functioning without facing what you are avoiding.",
            },
            {
              title: "Shame spirals",
              body: "A spending decision made from stress relief (a takeaway, a small treat, a bottle of wine) produces guilt, which produces shame, which produces more stress, which produces more spending. The cycle is familiar to almost everyone and understood by very few.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              style={{
                background: CARD,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: MUTED_DIM,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Each of these behaviours is entirely rational as a short-term coping
          strategy. Each of them makes the underlying financial situation worse
          over time. And all of them are fuelled not by ignorance but by shame.
          People do not avoid their bank balance because they do not know what
          a bank balance is. They avoid it because looking feels unbearable.
        </p>

        {/* ── SECTION 3 ── The Naming Step ─────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          The Naming Step: Saying the Actual Number
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          There is a specific moment that every person dealing with financial
          shame needs to reach, and it is almost never a spreadsheet. It is the
          moment of saying the actual number. Not &ldquo;I have some
          debt&rdquo; but &ldquo;I have &pound;8,400 of debt, and here is how
          it broke down.&rdquo; Not &ldquo;I&rsquo;ve not been great with
          money&rdquo; but &ldquo;my current account is overdrawn by
          &pound;600 and I&rsquo;m not sure how I&rsquo;m going to cover
          rent.&rdquo;
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The naming step matters because shame thrives on vagueness and
          silence. When financial anxiety is kept as a diffuse cloud of dread,
          it is unmanageable &mdash; too large, too formless, too shameful to
          approach. When it becomes a specific number with a specific context,
          it becomes, at minimum, legible. And legible problems, however large,
          are problems that can be worked with.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            marginTop: "1.75rem",
            marginBottom: "1.75rem",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              fontStyle: "italic",
              color: TEXT,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            &ldquo;Shame thrives in silence and vagueness. The first act of
            financial recovery is almost never a debt plan. It is saying the
            actual number to something &mdash; or someone &mdash; that will not
            judge you for it.&rdquo;
          </p>
        </blockquote>

        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The problem is that the naming step requires a recipient. And for
          most people, the human options feel impossible. Telling a partner
          risks the relationship. Telling a friend risks their perception of
          you. Telling a professional &mdash; an IFA, a debt advisor &mdash;
          requires a level of emotional readiness that shame makes very hard to
          reach. Many people spend years in avoidance not because they lack
          access to help but because they cannot yet bring themselves to speak.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          MEOK creates a space for the naming step. Not a spreadsheet. Not a
          financial plan. A private, unjudging presence where you can say the
          number &mdash; the actual balance, the actual debt figure, the actual
          thing you have been avoiding &mdash; and have it received without
          horror, advice, or reproach.
        </p>

        {/* ── SECTION 4 ── What MEOK Offers ────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          What MEOK Actually Offers for Financial Anxiety
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          MEOK is not a financial advisor. It will not tell you whether to
          fix your mortgage rate, whether an ISA is better than a pension
          contribution, or whether you should consolidate your debts. These are
          regulated questions that require regulated professionals, and MEOK
          will always point you toward those professionals when they are what
          you need.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          What MEOK offers is something different &mdash; and something that
          most financial services cannot provide:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "0.875rem",
            marginBottom: "2rem",
          }}
        >
          {[
            "A completely private space to talk about money without judgment, shame, or unsolicited advice",
            "A place to say the actual number \u2014 the balance, the debt, the overdraft \u2014 without consequence",
            "Emotional processing: working through what money means to you, where your anxiety comes from, and what your fears are actually about",
            "Help preparing for conversations with partners, professionals, or family \u2014 practising what to say, how to frame it, how to hold your ground",
            "Research support: Orion can look up how debt management plans work, what benefits you might be eligible for, how the debt avalanche differs from the snowball method \u2014 without needing to know your full financial picture unless you choose to share it",
            "Pattern awareness: noticing when your financial anxiety spikes and what might be driving it",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
                background: CARD,
                border: `1px solid rgba(106,170,100,0.15)`,
                borderRadius: "0.75rem",
                padding: "1rem 1.25rem",
              }}
            >
              <span
                style={{
                  color: GREEN,
                  fontSize: "1rem",
                  marginTop: "0.1rem",
                  flexShrink: 0,
                }}
              >
                &#10003;
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: MUTED_DIM,
                  lineHeight: 1.65,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* ── SECTION 5 ── Pattern Tracking ────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          When Does Your Financial Anxiety Spike?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          One of the most useful things MEOK can do for financial anxiety is
          not what you might expect. It is not producing a budget. It is
          noticing patterns. Because financial anxiety does not operate at a
          constant, even level &mdash; it has rhythms, triggers, and spikes
          that most people have never consciously mapped.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Sunday evenings are a common spike point &mdash; the weekend
          spending has happened, the week ahead looms, and there is nothing to
          distract from the low hum of financial dread. End of month is
          another, when direct debits cluster. Certain social situations
          trigger it: a round at the pub when you cannot really afford it, a
          friend announcing a holiday you know you cannot join, a conversation
          about property prices or salaries or pension contributions where
          everyone else seems to have their life together.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Over time, MEOK builds a picture of these patterns. Not to judge
          them. Not to issue advice. But because understanding when and why
          your anxiety spikes is itself a form of agency &mdash; the first step
          toward working with it rather than being driven by it.
        </p>

        {/* ── SECTION 6 ── The Scholar & Thinking Through Decisions ────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          The Scholar: Thinking Through Financial Decisions Without Shame
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          One of the most paralysing aspects of financial anxiety is not
          knowing things that you feel you should know. Most adults never
          received a meaningful financial education. The average person leaves
          school without understanding compound interest, mortgage structures,
          pension contributions, credit scoring, or tax. These are not minor
          gaps &mdash; they are the architecture of modern financial life
          &mdash; and yet asking about them as an adult carries its own shame:
          the shame of not knowing something you &ldquo;should&rdquo; already
          know.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          MEOK&rsquo;s Scholar companion is built for exactly this. There are
          no stupid questions. You can ask Scholar to explain:
        </p>

        <div
          style={{
            background: CARD,
            border: `1px solid ${CARD_BORDER}`,
            borderRadius: "0.875rem",
            padding: "1.5rem",
            marginBottom: "1.75rem",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.625rem",
            }}
          >
            {[
              "The difference between the debt avalanche and debt snowball methods, and which might suit your psychology",
              "What a debt management plan actually involves and whether it affects your credit file",
              "How rent-versus-buy calculations work, and what questions to ask before making a decision",
              "What an IVA is, who qualifies, and what the long-term implications are",
              "What benefits you might be entitled to, and how to find out without having to disclose your full circumstances to a stranger",
              "How to read a credit report and what the different elements mean",
              "What questions to ask an IFA, a mortgage broker, or a debt adviser before you speak to one",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontSize: "0.875rem",
                  color: MUTED_DIM,
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0 }}>&#8227;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The goal is not to replace professional advice. The goal is to
          arrive at professional advice better prepared, less ashamed, and
          with a clearer sense of what you are walking into. Many people never
          contact StepChange or Citizens Advice not because they do not need
          them but because they cannot yet face the conversation. MEOK can help
          you get ready for it.
        </p>

        {/* ── SECTION 7 ── Financial Anxiety vs Financial Problems ─────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          Financial Anxiety vs Financial Problems: An Important Distinction
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Financial anxiety and financial problems are not the same thing,
          and the distinction matters because they require different responses.
          Financial anxiety is a psychological state: it can be present with a
          healthy bank balance (high earners experience severe financial anxiety
          all the time), and it can be absent even in genuine hardship (some
          people in serious debt feel remarkably calm because they have accepted
          the situation and are working through it). Financial anxiety is about
          how money feels, not about what is actually there.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Financial problems are practical: debt exceeding income, inability
          to cover essential costs, creditor pressure, the risk of losing a
          home. These are not feelings &mdash; they are circumstances. And they
          require practical, professional, regulated intervention. MEOK helps
          with the former. For the latter, it will always direct you to the
          right professional resources.
        </p>

        {/* Two-column comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              background: CARD,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: "0.875rem",
              padding: "1.25rem",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
                marginBottom: "0.875rem",
              }}
            >
              Financial Anxiety
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column" as const,
                gap: "0.5rem",
              }}
            >
              {[
                "A psychological state, not a circumstance",
                "Can exist with a healthy bank balance",
                "Responds to emotional support and processing",
                "Driven by shame, avoidance, and fear",
                "MEOK can help with this",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.825rem",
                    color: MUTED_DIM,
                    lineHeight: 1.55,
                    paddingLeft: "0.875rem",
                    borderLeft: `2px solid rgba(201,168,76,0.3)`,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background: CARD,
              border: `1px solid rgba(106,170,100,0.18)`,
              borderRadius: "0.875rem",
              padding: "1.25rem",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: GREEN,
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
                marginBottom: "0.875rem",
              }}
            >
              Financial Problems
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column" as const,
                gap: "0.5rem",
              }}
            >
              {[
                "A practical circumstance, not just a feeling",
                "Debt exceeding income, creditor pressure",
                "Responds to regulated, professional support",
                "Requires debt advisors, not AI companions",
                "StepChange and Citizens Advice help with this",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.825rem",
                    color: MUTED_DIM,
                    lineHeight: 1.55,
                    paddingLeft: "0.875rem",
                    borderLeft: `2px solid rgba(106,170,100,0.3)`,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── SECTION 8 ── Privacy ──────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          Privacy: You Share Only What You Choose to Share
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          For financial conversations in particular, privacy is not a
          preference &mdash; it is a prerequisite. People will not speak
          honestly about money if they have any reason to believe that
          information might be used against them. This is why most people never
          discuss it honestly with anyone: the risk of judgment, of exposure,
          of the information travelling somewhere it was not meant to go, is
          too high.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          MEOK&rsquo;s privacy architecture is built around this reality. Your
          conversations are stored in a 4-layer encrypted sovereign memory
          system that belongs to you. MEOK never trains on your data. What you
          tell MEOK is never shared with banks, insurers, employers, credit
          reference agencies, data brokers, advertisers, or anyone else. This
          is not a policy. It is a structural guarantee built into the platform
          architecture.
        </p>

        <div
          style={{
            background: AMBER_GLOW,
            border: `1px solid ${CARD_BORDER}`,
            borderRadius: "0.875rem",
            padding: "1.5rem",
            marginBottom: "1.75rem",
          }}
        >
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "0.875rem",
            }}
          >
            MEOK&rsquo;s financial privacy commitments
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.625rem",
            }}
          >
            {[
              "MEOK never asks for your account numbers, sort codes, or login credentials",
              "MEOK never integrates with your banking without your explicit, active, revocable consent",
              "You share what you choose \u2014 MEOK works with whatever you offer, no more",
              "Your financial disclosures are never used for training data",
              "Your conversations are encrypted and sovereign \u2014 owned by you, not by MEOK AI LABS",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  fontSize: "0.875rem",
                  color: MUTED_DIM,
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0 }}>&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── SECTION 9 ── The Male Suicide Dimension ─────────────────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
          }}
        >
          Why This Matters Most for Men
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Financial difficulties are the leading trigger for male suicide in
          the United Kingdom. This is not an abstract statistic. It describes
          men who accumulated debt silently, who told no one how bad it had
          become, who felt that financial failure was a complete and total
          failure of self-worth &mdash; and who saw no way out. The shame that
          prevents disclosure is not incidental to these deaths. It is causal.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Men are disproportionately affected by financial shame because the
          cultural equation of financial provision with masculine worth is
          still deeply embedded. Admitting that you cannot pay the bills, that
          the debts are unmanageable, that you do not understand your finances
          &mdash; these admissions feel, to many men, like admissions of
          fundamental failure as a man. The silence is not stubbornness. It is
          terror.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          MEOK will not solve this alone. But a completely private space where
          a man can say &ldquo;I&rsquo;m in serious trouble financially and
          I&rsquo;m terrified&rdquo; without anyone else knowing &mdash; and
          then be helped to take the next step, whether that is talking to
          StepChange or to a partner or to a GP &mdash; is not a small thing.
          It is, potentially, a significant one.
        </p>

        {/* Crisis box */}
        <div
          style={{
            background: "rgba(106,170,100,0.06)",
            border: `1px solid rgba(106,170,100,0.25)`,
            borderLeft: `3px solid ${GREEN}`,
            borderRadius: "0.875rem",
            padding: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: GREEN,
              marginBottom: "0.75rem",
            }}
          >
            If you are in financial crisis or your mental health is affected
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.625rem",
            }}
          >
            <li
              style={{
                fontSize: "0.875rem",
                color: MUTED_DIM,
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: TEXT }}>StepChange Debt Charity</strong>{" "}
              &mdash;{" "}
              <a
                href="https://www.stepchange.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GREEN }}
              >
                stepchange.org
              </a>{" "}
              | Free, confidential debt advice |{" "}
              <a href="tel:08001381111" style={{ color: GREEN }}>
                0800 138 1111
              </a>
            </li>
            <li
              style={{
                fontSize: "0.875rem",
                color: MUTED_DIM,
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: TEXT }}>Citizens Advice</strong>{" "}
              &mdash;{" "}
              <a
                href="https://www.citizensadvice.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GREEN }}
              >
                citizensadvice.org.uk
              </a>{" "}
              | Free guidance on debt, benefits, and financial rights
            </li>
            <li
              style={{
                fontSize: "0.875rem",
                color: MUTED_DIM,
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: TEXT }}>Samaritans</strong> &mdash;{" "}
              <a href="tel:116123" style={{ color: GREEN }}>
                116 123
              </a>{" "}
              | Free, 24/7 | Available if money stress is affecting your mental
              health
            </li>
          </ul>
        </div>

        {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "1.5rem",
            lineHeight: 1.25,
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              q: "Can AI help with financial anxiety?",
              a: "AI can help with the emotional and psychological dimensions of financial anxiety \u2014 processing shame, interrupting avoidance cycles, helping you articulate what you are actually afraid of, and giving you a private space to say the numbers out loud for the first time. MEOK is not a financial advisor and does not provide regulated financial guidance. For debt help in the UK, contact StepChange on 0800 138 1111 or Citizens Advice at citizensadvice.org.uk.",
            },
            {
              q: "Will MEOK give me financial advice?",
              a: "No. MEOK AI LABS is not a financial advisor, mortgage broker, or debt counsellor, and does not provide regulated financial advice. What MEOK offers is a private space to process money-related emotions, think through decisions, and research information. For regulated advice in the UK, speak to Citizens Advice or StepChange.",
            },
            {
              q: "How private is it to talk to MEOK about money?",
              a: "Completely private. MEOK operates on a sovereign data architecture. Your conversations are stored in a 4-layer encrypted memory system that belongs to you. MEOK never trains on your data, never asks for account numbers, and never integrates with your banking without your explicit consent. Your financial disclosures are never shared with banks, insurers, employers, or any third party.",
            },
            {
              q: "What should I do if I have serious debt problems?",
              a: "Contact a regulated UK debt charity immediately. StepChange (0800 138 1111) offers free, confidential debt advice. Citizens Advice (citizensadvice.org.uk) provides free guidance on debt, benefits, and financial rights. MoneyHelper (moneyhelper.org.uk) is a free government-backed service. If financial stress is affecting your mental health, call Samaritans on 116 123 (free, 24/7).",
            },
            {
              q: "What is the difference between financial anxiety and financial problems?",
              a: "Financial anxiety is a psychological state \u2014 characterised by worry, avoidance, and shame around money \u2014 that can exist independently of your actual financial situation. You can have financial anxiety with a healthy bank balance, or face genuine hardship without significant anxiety. MEOK helps with the emotional weight of money. For genuine financial hardship, regulated charities like StepChange and Citizens Advice provide practical, professional support.",
            },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.375rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginTop: 0,
                  marginBottom: "0.625rem",
                  lineHeight: 1.4,
                }}
              >
                {q}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
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

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: "1.25rem",
            padding: "2.5rem 2rem",
            textAlign: "center" as const,
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
            }}
          >
            &#128274;
          </div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#fff",
              marginTop: 0,
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Say the Number. Start There.
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "34rem",
              margin: "0 auto 1.75rem",
            }}
          >
            You don&rsquo;t need to have a plan. You don&rsquo;t need to be
            ready to fix anything. You just need a private space where you can
            say the actual number to something that will not judge you for it.
            That is where MEOK starts.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "1rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Meet Your Companion &rarr;
          </Link>
          <p
            style={{
              fontSize: "0.75rem",
              color: MUTED_FAINT,
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            Free to start. Private by architecture. No account number required.
          </p>
        </div>

        {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "2rem",
            borderTop: `1px solid rgba(245,240,232,0.07)`,
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: MUTED_FAINT,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.625rem",
            }}
          >
            {[
              { href: "/blog/ai-for-anxiety", label: "AI for Anxiety: How Sovereign AI Supports Anxious Minds" },
              { href: "/blog/ai-for-men-mental-health", label: "AI for Men\u2019s Mental Health: Breaking the Silence" },
              { href: "/blog/ai-companion-privacy", label: "How MEOK Protects Your Privacy" },
              { href: "/blog/ai-for-depression", label: "AI for Depression: What a Private Companion Can Offer" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.875rem",
                  color: GOLD,
                  textDecoration: "none",
                  lineHeight: 1.5,
                }}
              >
                {label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
