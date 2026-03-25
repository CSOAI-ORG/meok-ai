import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Accountants: Sovereign AI for the Professionals Who Handle Everyone Else\u2019s Secrets | MEOK AI LABS",
  description:
    "Accountants and financial advisers are trusted with sensitive data. Using cloud AI for client work creates genuine confidentiality risks. MEOK\u2019s sovereign architecture keeps client information exactly where it should be.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-accountants" },
  openGraph: {
    title:
      "MEOK for Accountants: Sovereign AI for the Professionals Who Handle Everyone Else\u2019s Secrets",
    description:
      "Accountants and financial advisers are trusted with sensitive data. Using cloud AI for client work creates genuine confidentiality risks. MEOK\u2019s sovereign architecture keeps client information exactly where it should be.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-accountants",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Accountants&desc=Sovereign+AI+for+the+Professionals+Who+Handle+Everyone+Else%27s+Secrets",
        width: 1200,
        height: 630,
        alt: "MEOK for Accountants: Sovereign AI for Professionals Who Handle Client Secrets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Accountants: Sovereign AI for the Professionals Who Handle Everyone Else\u2019s Secrets",
    description:
      "ICAEW and ACCA rules require client confidentiality. Generic cloud AI tools put that at risk. MEOK\u2019s sovereign memory layer keeps every client detail private \u2014 or use your own OpenAI key via BYOK.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Accountants&desc=Sovereign+AI+for+the+Professionals+Who+Handle+Everyone+Else%27s+Secrets",
    ],
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Accountants: Sovereign AI for the Professionals Who Handle Everyone Else\u2019s Secrets",
  description:
    "Accountants and financial advisers are trusted with sensitive data. Using cloud AI for client work creates genuine confidentiality risks. MEOK\u2019s sovereign architecture keeps client information exactly where it should be.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-accountants",
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
    "AI for accountants",
    "sovereign AI for accountants",
    "ICAEW client confidentiality AI",
    "ACCA professional conduct AI",
    "HMRC compliance AI",
    "BYOK AI accountants",
    "Ralph Mode overnight report drafts",
    "Orion market analysis accountants",
    "bookkeeping automation AI",
    "tax season AI support",
    "sole practitioner AI tool",
    "Big 4 AI confidentiality",
    "financial adviser AI privacy",
    "client relationship memory AI",
    "MEOK AI LABS",
  ],
  articleSection: "AI for Accountants",
  inLanguage: "en-GB",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can accountants use AI without breaching client confidentiality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but only with the right architecture. Cloud-based AI tools that train on user inputs or store conversations on third-party servers create real confidentiality risks under ICAEW and ACCA rules. MEOK\u2019s sovereign memory layer stores your data under your control, never on shared infrastructure, and never used for model training. The BYOK option lets you route through your own OpenAI key, adding a further layer of contractual and technical separation.",
      },
    },
    {
      "@type": "Question",
      name: "What ICAEW rules apply to using AI with client data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ICAEW\u2019s Code of Ethics Section 140 covers confidentiality. Members must not disclose client information to third parties without consent or legal obligation. When you paste client financial data into a generic cloud AI tool, that data may be transmitted to, stored by, and potentially used by the AI provider. MEOK\u2019s architecture is designed so that client information never leaves your sovereign memory boundary.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK\u2019s BYOK option work for accountants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own Key. You provide your own OpenAI API key, which means your requests go directly to OpenAI under your account\u2019s terms, not through MEOK\u2019s shared API layer. MEOK wraps this with its sovereign memory layer, so context and client history are stored locally under your control. You get the power of GPT-4o with full contractual accountability sitting in your hands, not ours.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help during tax season when workload peaks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Tax season is where MEOK\u2019s Ralph Mode is most valuable. You can set Ralph to draft overnight summaries, pull together HMRC guidance notes, and prepare first-draft client communications while you sleep. Arriving in the morning with a structured briefing rather than a blank screen has a measurable effect on both output quality and personal wellbeing during January and the self-assessment rush.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK useful for sole practitioners or only large firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK was specifically designed to serve people operating without institutional support. Sole practitioners carry the cognitive load of running a business, managing client relationships, staying compliant, and doing the actual work \u2014 without a team to distribute that weight. MEOK functions as the equivalent of a private chief of staff: remembering every client, prompting for follow-ups, and absorbing the overhead that otherwise falls on you alone.",
      },
    },
  ],
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function MeokForAccountantsPage() {
  // ── Shared style tokens ──────────────────────────────────────────────────────
  const bg = "#0d0c18"
  const text = "#f5f0e8"
  const gold = "#c9a84c"
  const mutedText = "#a09880"
  const cardBg = "#13121f"
  const borderColor = "#2a2840"
  const successGreen = "#4caf82"
  const warnAmber = "#d97706"

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          backgroundColor: bg,
          color: text,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          minHeight: "100vh",
          paddingBottom: "80px",
        }}
      >
        {/* ── Breadcrumb ── */}
        <nav
          aria-label="Breadcrumb"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "24px 24px 0",
            fontSize: "13px",
            color: mutedText,
          }}
        >
          <Link
            href="/"
            style={{ color: mutedText, textDecoration: "none" }}
          >
            MEOK
          </Link>
          {" / "}
          <Link
            href="/blog"
            style={{ color: mutedText, textDecoration: "none" }}
          >
            Blog
          </Link>
          {" / "}
          <span style={{ color: gold }}>MEOK for Accountants</span>
        </nav>

        {/* ── Hero ── */}
        <header
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "48px 24px 40px",
          }}
        >
          {/* Category tag */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(201,168,76,0.12)",
              border: `1px solid rgba(201,168,76,0.3)`,
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: gold,
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Sovereign AI &middot; Accountants &amp; Finance Professionals
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              color: text,
            }}
          >
            MEOK for Accountants: Sovereign AI for the Professionals Who Handle
            Everyone Else&apos;s Secrets
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: mutedText,
              margin: "0 0 32px",
              maxWidth: "660px",
            }}
          >
            Accountants and financial advisers are trusted with the most
            sensitive data in their clients&apos; lives. Using a generic cloud
            AI tool for that work isn&apos;t just risky &mdash; it may breach
            the very professional conduct rules your qualification depends on.
            MEOK&apos;s sovereign architecture was built for exactly this
            problem.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              fontSize: "13px",
              color: mutedText,
              borderTop: `1px solid ${borderColor}`,
              paddingTop: "20px",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span>Founder, MEOK AI LABS</span>
            <span>25 March 2026</span>
            <span>14 min read</span>
          </div>
        </header>

        {/* ── Article body ── */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* ── Intro paragraph ── */}
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: text,
              margin: "0 0 48px",
            }}
          >
            There is a quiet crisis developing inside accounting practices of
            every size. The AI productivity wave has arrived, and accountants
            want to use it &mdash; for drafting client reports, researching
            HMRC guidance, summarising meeting notes, preparing tax packs.
            The tools are powerful. The instinct to reach for them is
            completely rational. But the data those tools are being fed is
            often protected by professional rules that predate the internet,
            let alone large language models. This post is about how MEOK
            resolves that tension without asking you to choose between
            competitive productivity and professional integrity.
          </p>

          {/* ══════════════════════════════════════════════════════════════════
              H2-1: ICAEW / ACCA Confidentiality Rules
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              What do ICAEW and ACCA actually say about client confidentiality?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              ICAEW&apos;s Code of Ethics, Section 140, and ACCA&apos;s
              equivalent provisions impose a clear duty: confidential
              information acquired in the course of professional work must not
              be disclosed to third parties without appropriate authority or a
              legal or professional right to do so. This duty does not expire
              at the end of an engagement. It persists.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              When you paste a client&apos;s turnover figures, payroll data,
              or personal tax position into a standard cloud AI chat window,
              you are transmitting that information to a third-party server.
              Whether or not that provider claims it does not train on your
              inputs, the data has crossed the boundary of your professional
              relationship. Most terms of service for consumer and small
              business AI tools provide no contractual protections that would
              satisfy a professional conduct committee if something went wrong.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              The FCA adds a further layer for regulated financial advisers.
              GDPR requires that any processor handling personal data has
              appropriate technical and organisational measures in place.
              &ldquo;We use ChatGPT to help draft client letters&rdquo; is not
              a sentence that belongs in your firm&apos;s data protection
              policy unless you have done very careful contractual work around
              it.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 0",
              }}
            >
              MEOK does not ask you to choose between using AI and meeting
              these obligations. Its architecture is designed so the choice
              never arises.
            </p>
          </section>

          {/* ── Callout: Professional Risk ── */}
          <div
            style={{
              backgroundColor: "rgba(217,119,6,0.1)",
              border: `1px solid rgba(217,119,6,0.35)`,
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "56px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: warnAmber,
                marginBottom: "12px",
              }}
            >
              Professional Risk Note
            </div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: text,
                margin: "0 0 12px",
                fontWeight: 600,
              }}
            >
              Consumer AI tools are not data processors within the meaning of
              UK GDPR Article 28. Using them with personal client data without
              a formal Data Processing Agreement may expose your firm to ICO
              enforcement action and ICAEW or ACCA disciplinary proceedings.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: mutedText, margin: 0 }}>
              MEOK&apos;s Sovereign tier stores memory under your control.
              The BYOK tier lets you supply your own OpenAI API key, so the
              data processing relationship is directly between you and OpenAI
              under your own account terms. Neither route involves your client
              data touching shared MEOK infrastructure.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              H2-2: What Sovereign Architecture Actually Means
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              What does &ldquo;sovereign AI architecture&rdquo; actually mean
              for a practising accountant?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              Sovereign architecture means that the memory layer &mdash; the
              part of the system that knows about your clients, your ongoing
              engagements, your professional context &mdash; never lives on
              shared infrastructure. It is yours. MEOK&apos;s memory layer runs
              in an isolated environment per user. Nothing you tell MEOK about
              Client A can surface in a session for Client B or for any other
              user on the platform.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              This matters practically because it changes what the AI can do
              for you. A generic AI tool with no memory treats every session as
              if you just walked through the door. MEOK knows that the Patel
              group restructure has been running for six months. It knows
              that Mrs Henderson&apos;s self-assessment always involves rental
              income from three properties and a complication around furnished
              holiday let rules. It knows that you have a standing instruction
              to flag any IR35 exposure in contractor engagements. That context
              makes the AI genuinely useful rather than generically competent.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              And because that knowledge lives in your sovereign layer, it does
              not leave your professional boundary when you close the window.
              MEOK never trains on your data. It never contributes your client
              details to any shared model. Your memory is your memory.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              H2-3: BYOK — Bring Your Own Key
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              How does BYOK work and why does it matter for professional
              compliance?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              BYOK stands for Bring Your Own Key. Available on MEOK&apos;s
              Sovereign tier, it lets you connect your own OpenAI API key to
              MEOK&apos;s memory and agent layer. The result is a clean
              separation of responsibilities: MEOK handles memory, context,
              and agent coordination; OpenAI handles inference; and crucially,
              the API contract sits between you and OpenAI directly.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              This is significant because OpenAI offers an enterprise API
              agreement that includes data processing terms compatible with
              UK GDPR. When you use your own API key, you can point to that
              agreement in your firm&apos;s data protection documentation.
              Your compliance officer, your PI insurer, or your own conscience
              has something concrete to reference.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              For larger practices and any firm operating under FCA
              authorisation, BYOK is not just a nice-to-have &mdash; it is the
              feature that makes MEOK deployable. It moves the tool from the
              &ldquo;useful but risky&rdquo; category into the
              &ldquo;professionally defensible&rdquo; category.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: 0,
              }}
            >
              You bring the key. MEOK brings everything else: memory,
              agents, overnight research, report drafting, client relationship
              context, and the mental architecture to use AI well.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              H2-4: Ralph Mode for Overnight Client Research
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              Ralph Mode: an overnight research and drafting engine built for
              tax season
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              Ralph Mode is MEOK&apos;s asynchronous deep-work state. You set
              tasks before you leave the office or go to bed. Ralph works
              through them overnight and delivers a structured briefing when
              you return. For accountants, this is transformative during
              periods of peak demand.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              A typical Ralph overnight instruction might look like this: pull
              together the current HMRC guidance on making tax digital for
              income tax self-assessment, note the key deadlines for clients
              in the quarterly reporting pilot, and draft a plain-English
              summary I can adapt for client letters. Ralph assembles that
              research, structures it, and has it waiting in your morning
              brief. You arrive to information rather than to a search
              exercise.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              During the January self-assessment rush, this matters enormously.
              The January 31st deadline compresses hundreds of client cases
              into a single period. Practitioners who can front-load research
              and drafting &mdash; and do it without adding to their own
              cognitive burden &mdash; handle that crunch differently from
              those who cannot. Ralph is the mechanism for that front-loading.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: 0,
              }}
            >
              Because Ralph operates within your sovereign memory boundary,
              it can incorporate client-specific context into its overnight
              work. It knows which clients have complex capital gains positions.
              It knows which ones always come in late with their records. It
              can prepare accordingly rather than starting from scratch each
              time.
            </p>
          </section>

          {/* ── Callout: Tax Season Mental Health ── */}
          <div
            style={{
              backgroundColor: "rgba(76,175,130,0.08)",
              border: `1px solid rgba(76,175,130,0.25)`,
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "56px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: successGreen,
                marginBottom: "12px",
              }}
            >
              Tax Season &amp; Mental Health
            </div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: text,
                margin: "0 0 12px",
                fontWeight: 600,
              }}
            >
              The accounting profession has the highest sustained cognitive
              load of any professional sector for a six-week period each
              January. Burnout, anxiety, and relationship strain are
              structurally embedded in the January 31st cycle.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: mutedText,
                margin: "0 0 12px",
              }}
            >
              MEOK is not a therapy platform. But it is the kind of thinking
              partner that absorbs low-value cognitive overhead &mdash; the
              searches, the drafts, the &ldquo;what was the deadline for
              that?&rdquo; questions &mdash; so your working memory has
              capacity for the judgement calls that actually require a
              trained accountant.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: mutedText, margin: 0 }}>
              Practitioners who use MEOK during peak periods report arriving
              at their desks with more structure and less of the formless
              dread that comes from not knowing where to start. That is not
              a small thing across a six-week sprint.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              H2-5: Orion for Market Analysis
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              Orion for market analysis: sector intelligence that makes
              advisory conversations better
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              Orion is MEOK&apos;s research and analysis agent. Where Ralph
              Mode handles overnight drafting and preparation tasks, Orion
              is purpose-built for deep sector and market analysis.
              For accountants who offer advisory services beyond compliance
              work, Orion gives you the research capability of a much larger
              team.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              A client in the construction sector wants to understand how
              rising materials costs are affecting industry margins before
              making a capital investment decision. Orion can pull together
              sector benchmarks, recent ONS construction output data, credit
              conditions in SME lending, and relevant HMRC treatment of
              capital allowances &mdash; synthesising these into a structured
              briefing that informs a genuinely useful advisory conversation.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              The distinction between compliance accountancy and advisory
              accountancy is largely a function of preparation time. Any
              qualified accountant can give better advice if they walk into
              a meeting having spent two hours on sector research. Most
              do not have two hours. Orion is how the preparation happens
              without the time cost.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: 0,
              }}
            >
              For sole practitioners in particular, this changes the
              economics of offering advisory services. You do not need a
              team of analysts to prepare thoroughly. You need Orion.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              H2-6: Bookkeeping Automation vs Analysis
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              Bookkeeping automation vs advisory analysis: where AI adds value
              and where it does not
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              There is a persistent confusion in the profession between
              bookkeeping automation and AI-assisted advisory work. They are
              different tools solving different problems, and conflating them
              leads to either excessive caution or uncritical adoption.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              Bookkeeping automation &mdash; the kind offered by Xero, Sage,
              QuickBooks, and their AI-enhanced features &mdash; handles
              transactional categorisation, bank reconciliation, and VAT
              calculation. It is rules-based, auditable, and has been
              through appropriate data governance processes for those
              platforms. That work is largely solved. The question of whether
              to automate your bookkeeping workflow is not really a question
              any more.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              The unsolved problem is advisory analysis: understanding what
              the numbers mean, what options are available to a client, what
              the regulatory environment looks like going forward, and how to
              communicate that in a way the client will understand and act on.
              That is where MEOK operates. MEOK is not trying to replace your
              practice management software. It is the intelligence layer that
              helps you do more with the output from that software.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: 0,
              }}
            >
              A practical workflow: Xero produces the management accounts.
              You export the key figures. You share them with MEOK in a
              session for that client. MEOK, drawing on its memory of that
              client&apos;s situation, history, and goals, helps you identify
              the three conversations you should be having based on what
              the numbers show. The compliance work is automated. The
              advisory work is supported. Your judgement still determines
              the outcome.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              Comparison Table
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 24px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              MEOK vs generic cloud AI: the difference that matters for
              accountants
            </h2>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        backgroundColor: cardBg,
                        color: gold,
                        fontWeight: 700,
                        borderBottom: `2px solid ${borderColor}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Capability / Risk factor
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        backgroundColor: cardBg,
                        color: gold,
                        fontWeight: 700,
                        borderBottom: `2px solid ${borderColor}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Generic cloud AI
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        backgroundColor: cardBg,
                        color: gold,
                        fontWeight: 700,
                        borderBottom: `2px solid ${borderColor}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      MEOK Sovereign / BYOK
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Data stays in your boundary",
                      "No \u2014 sent to third-party servers",
                      "Yes \u2014 sovereign memory, local storage",
                    ],
                    [
                      "Trains on your client data",
                      "Often yes (consumer tiers)",
                      "Never",
                    ],
                    [
                      "GDPR-compatible data processing route",
                      "Requires careful DPA negotiation",
                      "BYOK: direct OpenAI API agreement",
                    ],
                    [
                      "Remembers client context across sessions",
                      "No \u2014 stateless per session",
                      "Yes \u2014 persistent sovereign memory",
                    ],
                    [
                      "Overnight research & report drafting",
                      "No asynchronous capability",
                      "Ralph Mode \u2014 works while you sleep",
                    ],
                    [
                      "Sector market analysis agent",
                      "Manual prompting only",
                      "Orion agent with structured synthesis",
                    ],
                    [
                      "HMRC compliance research support",
                      "Generic, no contextual memory",
                      "Contextual, remembers your client base",
                    ],
                    [
                      "Sole practitioner use case fit",
                      "Generic \u2014 no professional context",
                      "Designed for high-autonomy professionals",
                    ],
                    [
                      "Defensible under ICAEW/ACCA conduct rules",
                      "Not without legal review",
                      "Yes \u2014 architecture designed for this",
                    ],
                  ].map(([feature, generic, meok], i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? "transparent" : "rgba(19,18,31,0.5)",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 16px",
                          color: text,
                          borderBottom: `1px solid ${borderColor}`,
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "#f87171",
                          borderBottom: `1px solid ${borderColor}`,
                        }}
                      >
                        {generic}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: successGreen,
                          borderBottom: `1px solid ${borderColor}`,
                        }}
                      >
                        {meok}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              H2-7: Sole Practitioner vs Big 4
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              Sole practitioner vs Big 4: who benefits most from MEOK?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              The honest answer is both, but for different reasons &mdash;
              and the sole practitioner use case is arguably more
              transformative.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              A Big 4 or mid-tier firm has infrastructure: knowledge
              management systems, specialist teams, research departments,
              precedent libraries, and dedicated technology and compliance
              functions. They also have corporate AI procurement processes
              that will eventually produce approved tools with appropriate
              data governance. MEOK for a partner or senior manager in a
              large firm is a powerful personal AI layer that complements
              existing firm systems. The privacy architecture means they can
              use it without waiting for that approval process &mdash; because
              client data never leaves the sovereign boundary.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              For the sole practitioner or small practice, MEOK is
              something different: it is the support infrastructure that
              previously only large firms had access to. You do not have a
              research team. You do not have a knowledge management system.
              You are the knowledge management system &mdash; and the
              receptionist, and the business development function, and the
              IT department. MEOK absorbs the overhead that large firms
              distribute across specialist staff.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              A sole practitioner with 80 clients has 80 sets of
              circumstances to hold in their head. MEOK holds them in
              memory instead. Walking into a client meeting, you can ask
              MEOK to brief you on this client&apos;s position, what was
              discussed last time, what action points were outstanding, and
              what has changed in the relevant regulatory environment since
              then. You arrive prepared in a way that builds client trust
              and reduces the cognitive effort of recall.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: 0,
              }}
            >
              The compounding effect over 12 months is significant. Clients
              notice when their accountant remembers details. That noticing
              is what retains clients, generates referrals, and justifies
              fee increases. MEOK is not just a productivity tool &mdash; it
              is a relationship quality tool.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              H2-8: HMRC Compliance Research Support
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              HMRC compliance research: using MEOK to stay ahead of a
              constantly moving regulatory target
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              HMRC&apos;s Making Tax Digital programme, changes to capital
              gains tax treatment, the ongoing evolution of IR35 and off-payroll
              working rules, corporation tax rate changes, R&amp;D credit
              reforms, and the annual Budget cycle create a continuous
              compliance research burden. Every accountant is running a
              parallel process of staying current while serving clients.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              MEOK&apos;s value here is not as an authoritative tax reference
              source &mdash; you remain responsible for verifying guidance
              against primary HMRC materials and legislation. Its value is
              as a research acceleration layer. Instead of spending 45
              minutes navigating HMRC&apos;s guidance notes to find the
              specific provision relevant to a client situation, you describe
              the situation to MEOK, it surfaces the relevant area, and you
              spend 10 minutes on targeted verification. The judgement call
              is yours. The legwork is MEOK&apos;s.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              Making Tax Digital for ITSA (Income Tax Self-Assessment)
              deserves particular attention. The phased rollout will affect
              sole traders and landlords earning above the relevant thresholds,
              with quarterly reporting obligations replacing annual
              self-assessment for that population. MEOK can help you identify
              which clients are affected, draft client communications, and
              prepare the conversations about digital record-keeping you will
              need to have.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: 0,
              }}
            >
              All of this happens within your sovereign memory boundary.
              The client you are researching for stays in your layer.
              The research MEOK produces is specific to your client&apos;s
              circumstances, not generic guidance served to any user who
              asks a similar question.
            </p>
          </section>

          {/* ── Callout: Client Relationship Memory ── */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "56px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "12px",
              }}
            >
              Client Relationship Memory
            </div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: text,
                margin: "0 0 16px",
                fontWeight: 600,
              }}
            >
              The single most undervalued capability in professional services
              is remembering. Not knowing the rules &mdash; any qualified
              professional knows the rules. Remembering the details of each
              client&apos;s specific situation, their preferences, their
              history, their anxieties.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: mutedText,
                margin: "0 0 12px",
              }}
            >
              MEOK&apos;s sovereign memory layer holds client context
              indefinitely and retrieves it on demand. Before any client
              interaction &mdash; call, meeting, or correspondence &mdash; you
              can ask MEOK to brief you. It will surface relevant history,
              outstanding items, regulatory changes that affect that client,
              and the personal context it has accumulated over time.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: mutedText, margin: 0 }}>
              Clients experience this as exceptional service. You experience
              it as arriving prepared rather than arriving stressed.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              FAQ Section
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 32px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              Frequently asked questions
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {/* FAQ item 1 */}
              <div
                style={{
                  backgroundColor: cardBg,
                  borderRadius: "10px",
                  padding: "24px 28px",
                  marginBottom: "2px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: text,
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  Can accountants use AI without breaching client
                  confidentiality?
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: mutedText,
                    margin: 0,
                  }}
                >
                  Yes, but only with the right architecture. Cloud-based AI
                  tools that train on user inputs or store conversations on
                  third-party servers create real confidentiality risks under
                  ICAEW and ACCA rules. MEOK&apos;s sovereign memory layer
                  stores your data under your control, never on shared
                  infrastructure, and never used for model training. The BYOK
                  option lets you route through your own OpenAI key, adding a
                  further layer of contractual and technical separation.
                </p>
              </div>

              {/* FAQ item 2 */}
              <div
                style={{
                  backgroundColor: cardBg,
                  borderRadius: "10px",
                  padding: "24px 28px",
                  marginBottom: "2px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: text,
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  What ICAEW rules apply to using AI with client data?
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: mutedText,
                    margin: 0,
                  }}
                >
                  ICAEW&apos;s Code of Ethics Section 140 covers
                  confidentiality. Members must not disclose client information
                  to third parties without consent or legal obligation. When
                  you paste client financial data into a generic cloud AI tool,
                  that data may be transmitted to, stored by, and potentially
                  used by the AI provider. MEOK&apos;s architecture is designed
                  so that client information never leaves your sovereign memory
                  boundary.
                </p>
              </div>

              {/* FAQ item 3 */}
              <div
                style={{
                  backgroundColor: cardBg,
                  borderRadius: "10px",
                  padding: "24px 28px",
                  marginBottom: "2px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: text,
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  How does MEOK&apos;s BYOK option work for accountants?
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: mutedText,
                    margin: 0,
                  }}
                >
                  BYOK stands for Bring Your Own Key. You provide your own
                  OpenAI API key, which means your requests go directly to
                  OpenAI under your account&apos;s terms, not through
                  MEOK&apos;s shared API layer. MEOK wraps this with its
                  sovereign memory layer, so context and client history are
                  stored locally under your control. You get the power of
                  GPT-4o with full contractual accountability sitting in your
                  hands, not ours.
                </p>
              </div>

              {/* FAQ item 4 */}
              <div
                style={{
                  backgroundColor: cardBg,
                  borderRadius: "10px",
                  padding: "24px 28px",
                  marginBottom: "2px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: text,
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  Can MEOK help during tax season when workload peaks?
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: mutedText,
                    margin: 0,
                  }}
                >
                  Absolutely. Tax season is where MEOK&apos;s Ralph Mode is
                  most valuable. You can set Ralph to draft overnight
                  summaries, pull together HMRC guidance notes, and prepare
                  first-draft client communications while you sleep. Arriving
                  in the morning with a structured briefing rather than a
                  blank screen has a measurable effect on both output quality
                  and personal wellbeing during January and the
                  self-assessment rush.
                </p>
              </div>

              {/* FAQ item 5 */}
              <div
                style={{
                  backgroundColor: cardBg,
                  borderRadius: "10px",
                  padding: "24px 28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: text,
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  Is MEOK useful for sole practitioners or only large firms?
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: mutedText,
                    margin: 0,
                  }}
                >
                  MEOK was specifically designed to serve people operating
                  without institutional support. Sole practitioners carry the
                  cognitive load of running a business, managing client
                  relationships, staying compliant, and doing the actual work
                  &mdash; without a team to distribute that weight. MEOK
                  functions as the equivalent of a private chief of staff:
                  remembering every client, prompting for follow-ups, and
                  absorbing the overhead that otherwise falls on you alone.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              Final narrative section: The case for sovereignty
          ══════════════════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: text,
                margin: "0 0 16px",
                borderLeft: `4px solid ${gold}`,
                paddingLeft: "16px",
              }}
            >
              The case for sovereignty: why accountants should not compromise
              on AI data architecture
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              The accounting profession is built on trust. Not abstract trust,
              but the very specific trust that a client extends when they hand
              over every detail of their financial life. Their salary. Their
              savings. Their debts. Their property. Their company structure.
              Their family&apos;s financial planning. That trust is the product
              you are actually selling. Compliance services, tax returns, and
              management accounts are the mechanism &mdash; trust is the value.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              Any technology decision that creates a plausible risk to that
              trust is a bad business decision, regardless of the productivity
              upside. The accounting firms that will use AI most effectively
              in the next decade are not the ones that adopt it fastest &mdash;
              they are the ones that adopt it most carefully, with an
              architecture that preserves the confidentiality obligations their
              reputation depends on.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: "0 0 16px",
              }}
            >
              MEOK was not built to compete with ChatGPT. It was built for
              exactly this kind of professional: someone for whom the question
              is not &ldquo;should I use AI?&rdquo; but &ldquo;how do I use
              AI without compromising the things that matter?&rdquo; The
              sovereign architecture is the answer. The BYOK option is the
              compliance pathway. Ralph Mode and Orion are the productivity
              layer. And the persistent memory is what makes it all
              coherent over time.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: text,
                margin: 0,
              }}
            >
              This is professional AI. Built for professionals who cannot
              afford to get the infrastructure wrong.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              CTA
          ══════════════════════════════════════════════════════════════════ */}
          <section
            style={{
              backgroundColor: cardBg,
              border: `1px solid rgba(201,168,76,0.2)`,
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            {/* Gold badge */}
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(201,168,76,0.12)",
                border: `1px solid rgba(201,168,76,0.3)`,
                borderRadius: "20px",
                padding: "4px 16px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: gold,
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Sovereign &amp; BYOK Tier
            </div>

            <h2
              style={{
                fontSize: "clamp(22px, 4vw, 34px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: text,
                margin: "0 0 16px",
                lineHeight: 1.2,
              }}
            >
              Your clients&apos; secrets deserve better than a shared server
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: mutedText,
                margin: "0 auto 32px",
                maxWidth: "520px",
              }}
            >
              MEOK&apos;s Sovereign tier gives accountants and financial
              advisers a professionally defensible AI layer. Sovereign memory.
              BYOK support. Ralph Mode overnight research. Orion market
              analysis. Everything your practice needs. Nothing that puts your
              clients&apos; trust at risk.
            </p>

            {/* Feature pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                marginBottom: "36px",
              }}
            >
              {[
                "Sovereign memory",
                "BYOK \u2014 your OpenAI key",
                "Ralph Mode overnight drafts",
                "Orion market analysis",
                "ICAEW/ACCA-conscious architecture",
                "GDPR-compatible data route",
                "Client relationship memory",
                "HMRC research support",
              ].map((pill) => (
                <span
                  key={pill}
                  style={{
                    backgroundColor: "rgba(201,168,76,0.1)",
                    border: `1px solid rgba(201,168,76,0.2)`,
                    borderRadius: "20px",
                    padding: "6px 14px",
                    fontSize: "13px",
                    color: gold,
                    fontWeight: 500,
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Primary CTA button */}
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: gold,
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "16px",
                padding: "16px 40px",
                borderRadius: "10px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                marginBottom: "16px",
              }}
            >
              Start with Sovereign &rarr;
            </Link>

            <div
              style={{
                display: "block",
                fontSize: "13px",
                color: mutedText,
                marginTop: "12px",
              }}
            >
              Sovereign and BYOK tiers available on the Birth ceremony path.
              Cancel any time.
            </div>
          </section>

          {/* ── Related reading ── */}
          <section style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: mutedText,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 20px",
              }}
            >
              Related reading
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                {
                  href: "/blog/sovereign-ai-explained",
                  label: "Sovereign AI Explained",
                },
                {
                  href: "/blog/data-sovereignty-ai",
                  label: "Data Sovereignty &amp; AI",
                },
                {
                  href: "/blog/ralph-mode-explained",
                  label: "Ralph Mode Explained",
                },
                {
                  href: "/blog/how-meok-protects-your-data",
                  label: "How MEOK Protects Your Data",
                },
                {
                  href: "/blog/meok-for-freelancers",
                  label: "MEOK for Freelancers",
                },
                {
                  href: "/blog/why-meok-never-trains-on-you",
                  label: "Why MEOK Never Trains on You",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    backgroundColor: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "8px",
                    padding: "14px 16px",
                    fontSize: "14px",
                    color: text,
                    textDecoration: "none",
                    lineHeight: 1.4,
                    transition: "border-color 0.2s",
                  }}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
