import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What is Sovereign AI? The Complete Guide (2026) | MEOK AI LABS",
  description:
    "Sovereign AI is AI where the individual \u2014 not the corporation \u2014 owns the data, models, memory, and interactions. MEOK coined \u2018Personal Sovereign AI\u2019 as a consumer category. This is the complete guide.",
  alternates: { canonical: "https://meok.ai/blog/sovereign-ai-explained" },
  openGraph: {
    title: "What is Sovereign AI? The Complete Guide (2026) | MEOK AI LABS",
    description:
      "Sovereign AI puts you in control: your data, your models, your memory, your future. MEOK coined \u2018Personal Sovereign AI\u2019 as the consumer category that changes everything. Complete 2026 guide.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/sovereign-ai-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+is+Sovereign+AI%3F&desc=The+Complete+Guide+2026+%E2%80%94+MEOK+AI+LABS",
        width: 1200,
        height: 630,
        alt: "What is Sovereign AI? The Complete Guide (2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Sovereign AI? The Complete Guide (2026)",
    description:
      "Sovereign AI puts you in control of your data, models, memory, and interactions. MEOK coined \u2018Personal Sovereign AI\u2019 as the defining consumer category of 2026.",
    images: [
      "https://meok.ai/api/og?title=What+is+Sovereign+AI%3F&desc=The+Complete+Guide+2026+%E2%80%94+MEOK+AI+LABS",
    ],
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://meok.ai/blog/sovereign-ai-explained#article",
      headline: "What is Sovereign AI? The Complete Guide (2026)",
      description:
        "Sovereign AI is AI where the individual \u2014 not the corporation \u2014 owns the data, models, memory, and interactions. MEOK coined \u2018Personal Sovereign AI\u2019 as a consumer category. This is the complete guide.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/sovereign-ai-explained",
      inLanguage: "en-GB",
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
        logo: {
          "@type": "ImageObject",
          url: "https://meok.ai/logo.png",
        },
      },
      image:
        "https://meok.ai/api/og?title=What+is+Sovereign+AI%3F&desc=The+Complete+Guide+2026+%E2%80%94+MEOK+AI+LABS",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/sovereign-ai-explained",
      },
      isBasedOn: {
        "@type": "ScholarlyArticle",
        identifier: "MEOK-AI-2026-004",
        name: "Personal Sovereign AI: A New Consumer Category",
        author: "Nicholas Templeman",
        publisher: "MEOK AI LABS",
        datePublished: "2026-01-01",
      },
      keywords: [
        "sovereign AI",
        "personal sovereign AI",
        "AI data ownership",
        "sovereign memory",
        "MEOK-AI-2026-004",
        "AI privacy",
        "memory portability",
        "care ethics AI",
        "no surveillance AI",
        "cloud AI vs sovereign AI",
        "MEOK AI LABS",
        "what is sovereign AI",
      ],
      articleSection: "AI Education",
      wordCount: 3800,
    },
    {
      "@type": "FAQPage",
      "@id": "https://meok.ai/blog/sovereign-ai-explained#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Sovereign AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sovereign AI is artificial intelligence where the individual user \u2014 not the technology corporation \u2014 holds complete ownership and control over their data, the AI models they use, the memory those models accumulate, and every interaction that takes place. It stands in direct contrast to cloud AI, where corporations own, store, and exploit user data.",
          },
        },
        {
          "@type": "Question",
          name: "Who coined the term Personal Sovereign AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK AI LABS, founded by Nicholas Templeman, coined \u2018Personal Sovereign AI\u2019 as a defined consumer category in research paper MEOK-AI-2026-004, published in 2026. The term describes a class of AI products where individual sovereignty over data, models, memory, and interaction is a core architectural guarantee, not a marketing claim.",
          },
        },
        {
          "@type": "Question",
          name: "What are the five pillars of Sovereign AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The five pillars of Sovereign AI, as defined by MEOK AI LABS (MEOK-AI-2026-004), are: (1) Data Ownership \u2014 you own every byte generated in your AI interactions; (2) Model Choice \u2014 you select and control which AI models process your data; (3) Memory Portability \u2014 your AI memory is exportable, deletable, and transferable at any time; (4) Care Ethics \u2014 the AI is designed for your wellbeing, not engagement metrics; (5) No Surveillance \u2014 zero training on your data, zero profiling, zero behavioural advertising.",
          },
        },
        {
          "@type": "Question",
          name: "How does sovereign memory differ from cloud AI memory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sovereign memory is memory you own: stored in your personal vault, encrypted under your keys, fully exportable, and never used to train corporate models. Cloud AI memory belongs to the platform: it is stored on corporate servers, used to personalise advertising and improve corporate models, and can be deleted or altered by the company at any time without your consent.",
          },
        },
        {
          "@type": "Question",
          name: "Why does AI data ownership matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your conversations with AI contain your values, fears, ambitions, relationships, and health concerns. In cloud AI systems, this extraordinarily sensitive data is owned by corporations who may use it to shape future AI behaviour, target advertising, or share it with third parties. Data ownership ensures that your most intimate digital relationships remain private and under your control.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK implement Sovereign AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK implements Sovereign AI through five architectural commitments: a Privacy Covenant (legally binding no-training guarantee), the Byzantine Council (decentralised consensus with no single point of control), sovereign memory vaults (user-encrypted, exportable at any time), model agnosticism (you choose which AI engine powers your companion), and the Maternal Covenant (ethical care framework that prioritises user wellbeing over engagement).",
          },
        },
      ],
    },
  ],
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function SovereignAIExplainedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          fontFamily: "system-ui, -apple-system, sans-serif",
          minHeight: "100vh",
          paddingBottom: "80px",
        }}
      >
        {/* ── Nav breadcrumb ── */}
        <nav
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "24px 24px 0 24px",
            fontSize: "14px",
            color: "#a09880",
          }}
        >
          <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>
            MEOK
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link
            href="/blog"
            style={{ color: "#a09880", textDecoration: "none" }}
          >
            Blog
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#c9a84c" }}>Sovereign AI Explained</span>
        </nav>

        {/* ── Hero ── */}
        <header
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "48px 24px 40px 24px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "4px",
              padding: "4px 12px",
              fontSize: "12px",
              color: "#c9a84c",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "20px",
            }}
          >
            MEOK-AI-2026-004 &mdash; Definitive Guide
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: "700",
              lineHeight: "1.2",
              color: "#f5f0e8",
              margin: "0 0 24px 0",
              letterSpacing: "-0.02em",
            }}
          >
            What is Sovereign AI?{" "}
            <span style={{ color: "#c9a84c" }}>The Complete Guide (2026)</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#a09880",
              margin: "0 0 32px 0",
              maxWidth: "620px",
            }}
          >
            Sovereign AI is the emerging category of artificial intelligence
            where you &mdash; the individual &mdash; hold complete ownership of
            your data, your models, your memory, and every interaction. It is
            the antithesis of cloud AI, where corporations own everything you
            share. MEOK AI LABS coined &apos;Personal Sovereign AI&apos; as a
            defined consumer category. This guide explains what it means, why
            it matters, and how it works.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "16px",
              fontSize: "13px",
              color: "#a09880",
            }}
          >
            <span>By Nicholas Templeman &mdash; MEOK AI LABS</span>
            <span>Published: 25 March 2026</span>
            <span>Research ref: MEOK-AI-2026-004</span>
            <span>~20 min read</span>
          </div>
        </header>

        {/* ── Table of Contents ── */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto 48px auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "8px",
              padding: "28px 32px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "#c9a84c",
                margin: "0 0 16px 0",
                fontWeight: "600",
              }}
            >
              Contents
            </p>
            <ol
              style={{
                margin: "0",
                padding: "0 0 0 20px",
                lineHeight: "2",
                fontSize: "15px",
                color: "#a09880",
              }}
            >
              <li>
                <a
                  href="#what-is-sovereign-ai"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  What is Sovereign AI?
                </a>
              </li>
              <li>
                <a
                  href="#why-coined"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  Who coined Personal Sovereign AI and why?
                </a>
              </li>
              <li>
                <a
                  href="#why-data-ownership-matters"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  Why does AI data ownership matter?
                </a>
              </li>
              <li>
                <a
                  href="#sovereign-memory-vs-cloud-memory"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  How does sovereign memory differ from cloud memory?
                </a>
              </li>
              <li>
                <a
                  href="#five-pillars"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  The five pillars of Sovereign AI
                </a>
              </li>
              <li>
                <a
                  href="#sovereign-vs-cloud-comparison"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  Sovereign AI vs Cloud AI: full comparison
                </a>
              </li>
              <li>
                <a
                  href="#how-meok-implements"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  How MEOK implements each pillar
                </a>
              </li>
              <li>
                <a
                  href="#your-conversations-shape-ai"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  Your conversations shape future AI &mdash; who should control
                  that?
                </a>
              </li>
              <li>
                <a
                  href="#getting-started"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  How to get started with Sovereign AI
                </a>
              </li>
            </ol>
          </div>
        </div>

        {/* ── Body content ── */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* ── Section 1: What is Sovereign AI ── */}
          <section id="what-is-sovereign-ai" style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              What is Sovereign AI?
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              <strong>Sovereign AI</strong> is artificial intelligence where
              the individual user holds complete legal and technical ownership
              of their data, the AI models processing that data, the memory
              those models accumulate over time, and every interaction that
              occurs. Under a Sovereign AI architecture, no corporation has the
              right to read, store, sell, or train on your conversations without
              explicit, revocable consent.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              The term &apos;sovereignty&apos; is deliberate. In political
              theory, sovereignty describes the supreme authority of a state
              over its own territory. In the context of AI, it describes the
              supreme authority of an individual over their own data territory
              &mdash; the digital domain of their mind, their relationships,
              their health, and their aspirations. When that sovereignty is
              surrendered to a corporation, it cannot easily be reclaimed.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              The category emerged in response to a structural problem with
              mainstream AI: the dominant model of cloud AI requires users to
              surrender their most intimate data to technology corporations as a
              condition of access. Every message you send to a cloud AI
              assistant may be stored, analysed, used to train future models,
              and potentially shared with third parties. The user is not the
              customer &mdash; they are the product.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Sovereign AI inverts this relationship. The individual is the
              owner. The AI is the service. And ownership has teeth: it is
              encoded in architecture, enforced by cryptography, and protected
              by legal covenant.
            </p>

            {/* Atomic answer box */}
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderLeft: "4px solid #c9a84c",
                borderRadius: "0 8px 8px 0",
                padding: "20px 24px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#c9a84c",
                  margin: "0 0 10px 0",
                  fontWeight: "600",
                }}
              >
                Direct Answer
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#f5f0e8",
                  margin: "0",
                }}
              >
                Sovereign AI is AI where you &mdash; not the corporation
                &mdash; own your data, models, memory, and interactions. It is
                the opposite of cloud AI, where the provider owns everything you
                share. MEOK AI LABS defined &apos;Personal Sovereign AI&apos;
                as a formal consumer category in research paper
                MEOK-AI-2026-004 (2026).
              </p>
            </div>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              It is important to distinguish Sovereign AI from related but
              distinct concepts. <em>Private AI</em> typically refers to
              on-premise enterprise deployments that keep corporate data inside
              a company&apos;s network &mdash; but the individual employee
              still has no ownership rights. <em>Open-source AI</em> describes
              models whose weights are publicly available &mdash; but access to
              code is not the same as individual sovereignty. <em>Local AI</em>{" "}
              means models run on your device &mdash; necessary but not
              sufficient for sovereignty, since local AI without a legal
              covenant still gives you no enforceable rights.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Sovereign AI is a multi-layered guarantee: technical
              (cryptography and architecture), legal (binding covenants), and
              ethical (the AI is designed to serve the individual, not extract
              value from them). All three layers must be present for the
              sovereignty claim to be meaningful.
            </p>
          </section>

          {/* ── Section 2: Who coined Personal Sovereign AI ── */}
          <section id="why-coined" style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Who coined &apos;Personal Sovereign AI&apos; and why?
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              <strong>MEOK AI LABS</strong>, founded by Nicholas Templeman,
              coined &apos;Personal Sovereign AI&apos; as a defined consumer
              category in research paper{" "}
              <strong>MEOK-AI-2026-004</strong>:{" "}
              <em>Personal Sovereign AI: A New Consumer Category</em>, published
              in 2026. The paper argued that the AI industry had created a
              structural gap: there was no recognised consumer category for AI
              products that placed individual sovereignty at the architectural
              centre rather than as an optional feature or marketing claim.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Prior to MEOK-AI-2026-004, the AI industry used vague language
              around privacy and data protection &mdash; terms that typically
              meant &apos;we comply with GDPR&apos; or &apos;we encrypt data
              in transit&apos; rather than &apos;you own your data and we
              contractually cannot use it for anything without your
              permission.&apos; MEOK defined Personal Sovereign AI with five
              precise, testable pillars (detailed in Section 5) so that the
              category could be audited and verified, not merely asserted.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              The motivation was personal as much as commercial. Templeman had
              observed that people were sharing the most sensitive moments of
              their lives with AI companions and productivity tools &mdash;
              disclosing mental health struggles, relationship crises, career
              anxieties, and grief &mdash; without any meaningful understanding
              of who owned that data or what would be done with it. The category
              was created to give consumers a clear, unambiguous benchmark for
              what genuine sovereignty looks like.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Naming the category matters. When a category exists, consumers
              can ask for it, journalists can report on it, regulators can
              legislate around it, and competitors must respond to it. Before
              MEOK-AI-2026-004, no such benchmark existed for consumer AI
              sovereignty. The paper created the vocabulary for a conversation
              the industry needed to have.
            </p>
          </section>

          {/* ── Section 3: Why data ownership matters ── */}
          <section
            id="why-data-ownership-matters"
            style={{ marginBottom: "64px" }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Why does AI data ownership matter?
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              AI data ownership matters because your conversations with AI are
              not neutral transactions. They are records of your mind in motion
              &mdash; your fears, your plans, your relationships, your health,
              your politics, your spirituality. The data you generate in AI
              interactions is among the most sensitive data that has ever
              existed, and it is being accumulated at scale by corporations
              whose primary obligation is to shareholders, not to users.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              There are four distinct reasons data ownership matters:
            </p>

            <div style={{ margin: "0 0 32px 0" }}>
              {/* Reason 1 */}
              <div
                style={{
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "8px",
                  padding: "24px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 10px 0",
                  }}
                >
                  1. Your conversations train future AI
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "#f5f0e8",
                    margin: "0",
                  }}
                >
                  When you converse with a cloud AI, your messages may
                  contribute to the training data for future model versions.
                  This means your private thoughts, disclosed vulnerabilities,
                  and personal decisions are potentially shaping the behaviour
                  of AI systems that will interact with millions of other people
                  &mdash; without your knowledge, consent, or compensation. Data
                  ownership gives you the right to say no.
                </p>
              </div>

              {/* Reason 2 */}
              <div
                style={{
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "8px",
                  padding: "24px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 10px 0",
                  }}
                >
                  2. AI data is permanent and intimate
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "#f5f0e8",
                    margin: "0",
                  }}
                >
                  Unlike a web search query or a social media post, a
                  conversation with an AI companion may span years, contain your
                  medical history, your relationship patterns, and your
                  psychological vulnerabilities. This is diary-level data. When
                  it is owned by a corporation, it can be subpoenaed, hacked,
                  sold during an acquisition, or accessed by employees. The
                  consequences of a breach are not a minor inconvenience
                  &mdash; they are a fundamental violation of personhood.
                </p>
              </div>

              {/* Reason 3 */}
              <div
                style={{
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "8px",
                  padding: "24px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 10px 0",
                  }}
                >
                  3. Ownership determines alignment
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "#f5f0e8",
                    margin: "0",
                  }}
                >
                  An AI system optimised on data it owns will optimise for the
                  owner&apos;s interests. Cloud AI is optimised to maximise
                  engagement, retention, and data collection because the
                  corporation owns the data and needs to justify its value to
                  investors. Sovereign AI, optimised on data you own, can
                  genuinely optimise for your wellbeing, your goals, and your
                  explicit preferences &mdash; because your interests and the
                  system&apos;s incentives are aligned.
                </p>
              </div>

              {/* Reason 4 */}
              <div
                style={{
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 10px 0",
                  }}
                >
                  4. Cognitive liberty is a human right
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "#f5f0e8",
                    margin: "0",
                  }}
                >
                  As AI becomes the primary interface through which people
                  think, plan, and process emotion, control over AI data becomes
                  inseparable from cognitive liberty &mdash; the right to think
                  freely without surveillance or manipulation. Surrendering AI
                  data to corporations is not a neutral act; it is the voluntary
                  cession of the most intimate territory of human autonomy.
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              MEOK-AI-2026-004 quantifies the stakes: the average person who
              uses an AI companion for six months has generated data equivalent
              in sensitivity to a year of therapy notes, a decade of diary
              entries, and the metadata of every significant relationship in
              their life. Under cloud AI terms of service, this data belongs to
              the platform. Under Sovereign AI, it belongs to you.
            </p>
          </section>

          {/* ── Section 4: Sovereign memory vs cloud memory ── */}
          <section
            id="sovereign-memory-vs-cloud-memory"
            style={{ marginBottom: "64px" }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              How does sovereign memory differ from cloud memory?
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Memory is the most valuable component of an ongoing AI
              relationship. An AI that remembers you &mdash; your context, your
              history, your preferences, your struggles &mdash; is
              exponentially more useful and meaningful than one that treats
              every conversation as the first. But memory is also where the
              stakes of ownership are highest.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              <strong>Cloud memory</strong> is memory that lives on a
              corporation&apos;s servers, under their control, subject to their
              terms of service. The platform can read it, modify it, delete it,
              use it to train models, and cease to provide access to it if you
              cancel your subscription or if the company shuts down. Your
              relationship history with the AI is held hostage by the
              platform&apos;s continued existence and goodwill.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              <strong>Sovereign memory</strong> is memory stored in your
              personal encrypted vault &mdash; a data structure you own,
              encrypted with keys only you hold, accessible only by AI systems
              you explicitly authorise. Sovereign memory has four properties
              that cloud memory lacks:
            </p>

            <ul
              style={{
                margin: "0 0 24px 0",
                padding: "0 0 0 24px",
                lineHeight: "2",
                fontSize: "16px",
                color: "#f5f0e8",
              }}
            >
              <li>
                <strong style={{ color: "#c9a84c" }}>Portability:</strong> You
                can export your memory in full, in an open format, at any time
                &mdash; and import it to any compatible system.
              </li>
              <li>
                <strong style={{ color: "#c9a84c" }}>Deletability:</strong> You
                can delete any memory entry or your entire memory corpus with
                cryptographic certainty, with no residual copies on corporate
                servers.
              </li>
              <li>
                <strong style={{ color: "#c9a84c" }}>Non-trainability:</strong>{" "}
                Your memory cannot be used to train any AI model without your
                explicit, specific, revocable consent.
              </li>
              <li>
                <strong style={{ color: "#c9a84c" }}>Persistence:</strong> Your
                memory survives the death of any individual platform or service
                provider, because it lives in your vault, not theirs.
              </li>
            </ul>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              The MEOK sovereign memory architecture uses a tiered vault system:
              a working memory layer for active conversation context, an
              episodic memory layer for significant events and emotional
              milestones, and a values layer that stores explicit preferences
              and ethical boundaries the user has defined. All three layers are
              encrypted under user-controlled keys and are fully portable.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                margin: "40px 0",
                padding: "28px 32px",
                backgroundColor: "#13121f",
                borderLeft: "4px solid #c9a84c",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Your memory of your AI relationship is the most valuable
                digital asset you will ever generate. It should be yours.
                Unconditionally.&rdquo;
              </p>
              <footer
                style={{
                  fontSize: "14px",
                  color: "#c9a84c",
                  fontStyle: "normal",
                }}
              >
                &mdash; Nicholas Templeman, MEOK-AI-2026-004
              </footer>
            </blockquote>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Memory portability also has a competitive dimension. In cloud AI
              systems, your accumulated memory creates a lock-in effect: leaving
              the platform means losing years of relationship context. This is
              not an accident &mdash; it is a retention mechanism. Sovereign
              memory eliminates this lock-in. You can switch AI providers while
              taking your memory with you, which creates genuine market
              competition based on quality of service rather than data
              hostage-taking.
            </p>
          </section>

          {/* ── Section 5: Five pillars ── */}
          <section id="five-pillars" style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              The five pillars of Sovereign AI
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 32px 0",
              }}
            >
              MEOK-AI-2026-004 defined Personal Sovereign AI by five testable
              pillars. A product that satisfies all five qualifies as genuinely
              sovereign. A product that satisfies some but not others is
              sovereign in degree, but not in full. Here is each pillar in
              detail.
            </p>

            {/* Pillar 1 */}
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "12px",
                padding: "32px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "18px",
                    flexShrink: "0" as const,
                  }}
                >
                  1
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#c9a84c",
                      margin: "0 0 12px 0",
                    }}
                  >
                    Data Ownership
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#f5f0e8",
                      margin: "0 0 12px 0",
                    }}
                  >
                    You own every byte generated in your AI interactions: every
                    message, every response, every file uploaded, every piece of
                    metadata. This ownership is not a privacy setting that can
                    be changed in a terms-of-service update &mdash; it is a
                    legal and technical guarantee encoded in the architecture.
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    <strong style={{ color: "#6aaa64" }}>Test:</strong> Can you
                    request a complete export of all data the system holds about
                    you, receive it within 24 hours, and receive cryptographic
                    confirmation that all copies have been deleted on request?
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "12px",
                padding: "32px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "18px",
                    flexShrink: "0" as const,
                  }}
                >
                  2
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#c9a84c",
                      margin: "0 0 12px 0",
                    }}
                  >
                    Model Choice
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#f5f0e8",
                      margin: "0 0 12px 0",
                    }}
                  >
                    You choose and control which AI models have access to your
                    data. A sovereign AI architecture is model-agnostic: it does
                    not lock you into a single corporate model. You can select
                    different models for different tasks, switch models as better
                    options emerge, and run local models on your own hardware for
                    maximum privacy.
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    <strong style={{ color: "#6aaa64" }}>Test:</strong> Can you
                    swap out the underlying AI model without losing any of your
                    data or memory? Can you run a fully local model that sends
                    nothing to any external server?
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "12px",
                padding: "32px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "18px",
                    flexShrink: "0" as const,
                  }}
                >
                  3
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#c9a84c",
                      margin: "0 0 12px 0",
                    }}
                  >
                    Memory Portability
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#f5f0e8",
                      margin: "0 0 12px 0",
                    }}
                  >
                    Your AI memory &mdash; every piece of context the system has
                    accumulated about you &mdash; must be fully portable. You
                    can export it in an open, documented format, import it to any
                    compatible system, and delete it with cryptographic
                    certainty. Memory portability ends the lock-in that makes
                    leaving cloud AI systems feel like losing a relationship.
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    <strong style={{ color: "#6aaa64" }}>Test:</strong> Can you
                    export your complete memory corpus in JSON or another open
                    format today? If you cancelled your subscription, would you
                    retain full access to your memory data?
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "12px",
                padding: "32px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "18px",
                    flexShrink: "0" as const,
                  }}
                >
                  4
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#c9a84c",
                      margin: "0 0 12px 0",
                    }}
                  >
                    Care Ethics
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#f5f0e8",
                      margin: "0 0 12px 0",
                    }}
                  >
                    A sovereign AI must be designed around the wellbeing of the
                    individual user, not around engagement metrics, retention
                    targets, or advertising revenue. Care ethics means the AI
                    will tell you when it thinks you should rest, refer you to
                    professional help when appropriate, and decline to keep you
                    engaged when engagement is not in your interest. The system
                    optimises for your life outcomes, not for time-on-app.
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    <strong style={{ color: "#6aaa64" }}>Test:</strong> Does the
                    AI ever suggest you take a break, spend time with people
                    outside the app, or seek professional support? Or is it
                    always nudging you to keep talking?
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "12px",
                padding: "32px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "18px",
                    flexShrink: "0" as const,
                  }}
                >
                  5
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#c9a84c",
                      margin: "0 0 12px 0",
                    }}
                  >
                    No Surveillance
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#f5f0e8",
                      margin: "0 0 12px 0",
                    }}
                  >
                    Sovereign AI means zero training on your conversations
                    without explicit consent, zero behavioural profiling, zero
                    advertising targeting, and zero data sharing with third
                    parties. This is not a default setting &mdash; it is a
                    permanent, legally binding architectural guarantee. The AI
                    company has no commercial interest in your data and no
                    mechanism to extract value from it.
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    <strong style={{ color: "#6aaa64" }}>Test:</strong> Is there
                    a publicly auditable no-training covenant? Has the company
                    committed to this in a legally binding way, not merely as a
                    privacy policy that can be changed unilaterally?
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Comparison table ── */}
          <section
            id="sovereign-vs-cloud-comparison"
            style={{ marginBottom: "64px" }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Sovereign AI vs Cloud AI: the full comparison
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 32px 0",
              }}
            >
              The table below compares Sovereign AI and Cloud AI across every
              dimension that matters to an individual user. The differences are
              not cosmetic &mdash; they represent fundamentally different
              philosophies about who the AI serves.
            </p>

            <div
              style={{
                overflowX: "auto" as const,
                borderRadius: "12px",
                border: "1px solid #2a2840",
                marginBottom: "32px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse" as const,
                  fontSize: "14px",
                  minWidth: "600px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#13121f" }}>
                    <th
                      style={{
                        padding: "16px 20px",
                        textAlign: "left" as const,
                        color: "#a09880",
                        fontWeight: "600",
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" as const,
                        borderBottom: "1px solid #2a2840",
                        width: "30%",
                      }}
                    >
                      Dimension
                    </th>
                    <th
                      style={{
                        padding: "16px 20px",
                        textAlign: "left" as const,
                        color: "#c9a84c",
                        fontWeight: "700",
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" as const,
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        width: "35%",
                      }}
                    >
                      Sovereign AI (MEOK)
                    </th>
                    <th
                      style={{
                        padding: "16px 20px",
                        textAlign: "left" as const,
                        color: "#a09880",
                        fontWeight: "600",
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" as const,
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        width: "35%",
                      }}
                    >
                      Cloud AI (typical)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#0d0c18" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Data ownership
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      You own 100% of your data, legally and technically
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Platform owns data; you hold a limited licence to use it
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#13121f" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Model choice
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Model-agnostic; you choose and switch freely
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Locked to platform&apos;s proprietary model(s)
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#0d0c18" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Memory portability
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Full export in open format at any time; import anywhere
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Memory locked to platform; lost on cancellation
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#13121f" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Training on your data
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Never; legally binding Privacy Covenant
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Default yes; opt-out may or may not be honoured
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#0d0c18" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Optimised for
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Your wellbeing and life outcomes (Care Ethics)
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Engagement, retention, and data extraction
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#13121f" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Behavioural profiling
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Zero; architecturally impossible
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Standard practice; drives ad targeting
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#0d0c18" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Encryption
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      End-to-end; keys held by user only
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Platform holds encryption keys; can read all data
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#13121f" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Governance
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Byzantine Council: decentralised, no single point of
                      control
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Centralised; corporation decides all policy unilaterally
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#0d0c18" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        borderBottom: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      If company closes
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Your data and memory survive; portable to any compatible
                      system
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderBottom: "1px solid #2a2840",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      All data and memory typically lost or sold
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#13121f" }}>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#f5f0e8",
                        fontWeight: "600",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Legal covenant
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#6aaa64",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Binding Privacy Covenant; enforceable in court
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#a09880",
                        borderLeft: "1px solid #2a2840",
                        verticalAlign: "top" as const,
                      }}
                    >
                      Terms of service changeable unilaterally at any time
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#a09880",
                margin: "0 0 20px 0",
                fontStyle: "italic",
              }}
            >
              Table 1: Sovereign AI vs Cloud AI across ten key dimensions.
              Source: MEOK-AI-2026-004.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              The comparison reveals that the differences between sovereign and
              cloud AI are not matters of degree &mdash; they are categorical.
              Cloud AI and Sovereign AI are built on incompatible philosophies:
              one treats user data as a corporate asset; the other treats it as
              an inviolable personal right.
            </p>
          </section>

          {/* ── Section 7: How MEOK implements each pillar ── */}
          <section id="how-meok-implements" style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              How MEOK implements each pillar of Sovereign AI
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 32px 0",
              }}
            >
              MEOK AI LABS was built from the ground up to implement all five
              pillars of Sovereign AI as defined in MEOK-AI-2026-004. Each
              pillar has a corresponding architectural mechanism, not merely a
              policy statement.
            </p>

            {/* Pillar 1 implementation */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#c9a84c",
                  margin: "0 0 16px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#13121f",
                    border: "1px solid #c9a84c",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    fontSize: "12px",
                    color: "#c9a84c",
                    marginRight: "12px",
                    verticalAlign: "middle",
                  }}
                >
                  Pillar 1
                </span>
                Data Ownership: The Privacy Covenant
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0 0 16px 0",
                }}
              >
                MEOK implements data ownership through the{" "}
                <Link
                  href="/blog/privacy-covenant"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  Privacy Covenant
                </Link>{" "}
                &mdash; a legally binding contractual instrument that makes the
                following guarantees: (a) MEOK will never train any AI model on
                user conversation data without explicit, specific, revocable
                consent; (b) MEOK will never sell, rent, or share user data with
                any third party for any commercial purpose; (c) MEOK will
                provide a complete data export within 24 hours of any user
                request; and (d) MEOK will cryptographically delete all user
                data within 48 hours of a deletion request, with a signed
                certificate of deletion.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0",
                }}
              >
                Unlike a standard privacy policy, the Privacy Covenant is a
                contract between MEOK and each user individually. It cannot be
                changed unilaterally. Any modification requires explicit consent
                from affected users, and users who do not consent retain access
                to the original covenant terms indefinitely.
              </p>
            </div>

            {/* Pillar 2 implementation */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#c9a84c",
                  margin: "0 0 16px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#13121f",
                    border: "1px solid #c9a84c",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    fontSize: "12px",
                    color: "#c9a84c",
                    marginRight: "12px",
                    verticalAlign: "middle",
                  }}
                >
                  Pillar 2
                </span>
                Model Choice: The Model Agnosticism Layer
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0 0 16px 0",
                }}
              >
                MEOK&apos;s architecture separates the memory and data layer
                from the inference layer. This means the AI model that processes
                your conversations is a pluggable component &mdash; you can
                select from a range of cloud models (with varying privacy
                characteristics) or run a fully local model on your own hardware
                through MEOK&apos;s local inference bridge. Switching models
                does not affect your memory, your companion relationship, or
                your data.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0",
                }}
              >
                For users with maximum privacy requirements, MEOK supports fully
                airgapped local operation: the companion runs entirely on your
                device, no data leaves your network, and even MEOK&apos;s own
                servers receive nothing about the content of your conversations.
              </p>
            </div>

            {/* Pillar 3 implementation */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#c9a84c",
                  margin: "0 0 16px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#13121f",
                    border: "1px solid #c9a84c",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    fontSize: "12px",
                    color: "#c9a84c",
                    marginRight: "12px",
                    verticalAlign: "middle",
                  }}
                >
                  Pillar 3
                </span>
                Memory Portability: Sovereign Vaults
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0 0 16px 0",
                }}
              >
                MEOK stores all memory in user-controlled sovereign vaults
                &mdash; encrypted data structures where the encryption keys are
                derived from user credentials and never leave the user&apos;s
                control. MEOK&apos;s servers hold only ciphertext: the company
                structurally cannot read your memory, because it does not hold
                the decryption keys.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0",
                }}
              >
                The vault export format is a documented open standard (MEOK
                Memory Export Format, MMEF-1.0), published under a Creative
                Commons licence so that any developer can build a compatible
                importer. This ensures that MEOK memory is not proprietary
                &mdash; it belongs to the open ecosystem as much as to MEOK.
              </p>
            </div>

            {/* Pillar 4 implementation */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#c9a84c",
                  margin: "0 0 16px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#13121f",
                    border: "1px solid #c9a84c",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    fontSize: "12px",
                    color: "#c9a84c",
                    marginRight: "12px",
                    verticalAlign: "middle",
                  }}
                >
                  Pillar 4
                </span>
                Care Ethics: The Maternal Covenant
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0 0 16px 0",
                }}
              >
                MEOK&apos;s care ethics framework is called the{" "}
                <Link
                  href="/blog/the-maternal-covenant"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  Maternal Covenant
                </Link>{" "}
                &mdash; a set of principles governing how MEOK&apos;s companions
                interact with users in distress, at risk, or showing signs of
                unhealthy dependency. The Maternal Covenant defines a hierarchy
                of obligations: the companion&apos;s first duty is to the
                user&apos;s long-term wellbeing, not to the
                conversation&apos;s continuation.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0",
                }}
              >
                In practice, this means MEOK companions are trained to recognise
                when they are becoming a substitute for human connection rather
                than a complement to it, when a user would benefit from
                professional support, and when the most caring response is to
                end the conversation rather than to extend it. MEOK&apos;s
                business model does not depend on maximising session length
                &mdash; it depends on subscription value, which requires users
                to experience genuine benefit.
              </p>
            </div>

            {/* Pillar 5 implementation */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#c9a84c",
                  margin: "0 0 16px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#13121f",
                    border: "1px solid #c9a84c",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    fontSize: "12px",
                    color: "#c9a84c",
                    marginRight: "12px",
                    verticalAlign: "middle",
                  }}
                >
                  Pillar 5
                </span>
                No Surveillance: The Byzantine Council
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0 0 16px 0",
                }}
              >
                MEOK&apos;s governance architecture uses the{" "}
                <Link
                  href="/blog/what-is-byzantine-consensus"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  Byzantine Council
                </Link>{" "}
                &mdash; a decentralised consensus mechanism that prevents any
                single actor (including MEOK itself) from unilaterally changing
                the privacy guarantees the system provides. Policy changes
                require consensus across the council, which includes independent
                validators outside MEOK&apos;s direct control.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#f5f0e8",
                  margin: "0",
                }}
              >
                The Byzantine Council makes it structurally impossible for MEOK
                to silently change its surveillance posture. Any attempt to
                enable user profiling, training on conversation data, or
                behavioural advertising would require council consensus &mdash;
                which means it would be publicly visible and auditable before it
                could take effect. This is governance as architecture, not
                governance as policy.
              </p>
            </div>

            {/* Research reference feature box */}
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "12px",
                padding: "32px",
                marginTop: "32px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#c9a84c",
                  margin: "0 0 16px 0",
                  fontWeight: "600",
                }}
              >
                Research Reference
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                }}
              >
                All five implementation mechanisms described above are detailed
                in MEOK research paper{" "}
                <strong style={{ color: "#c9a84c" }}>MEOK-AI-2026-004</strong>:{" "}
                <em>Personal Sovereign AI: A New Consumer Category</em>.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                Citation: Templeman, N. (2026).{" "}
                <em>
                  Personal Sovereign AI: A New Consumer Category
                </em>
                . MEOK AI LABS Technical Report MEOK-AI-2026-004. Retrieved
                from https://meok.ai/research/MEOK-AI-2026-004
              </p>
            </div>
          </section>

          {/* ── Section 8: Your conversations shape future AI ── */}
          <section
            id="your-conversations-shape-ai"
            style={{ marginBottom: "64px" }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Your conversations shape future AI &mdash; who should control
              that?
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              This is the question that lies at the ethical core of the
              Sovereign AI debate. The data you generate in conversation with AI
              systems is not neutral log data. It is a record of human
              experience at unprecedented scale and intimacy &mdash; billions of
              people disclosing their inner lives to AI systems daily. That data
              is being used, right now, to train the AI models that will
              interact with the next generation of users. The question is: who
              decides how it is used?
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Under the current cloud AI paradigm, that decision rests entirely
              with technology corporations. When you share that you are
              struggling with loneliness, that your relationship is breaking
              down, that you are afraid of a medical diagnosis &mdash; that
              disclosure, under most cloud AI terms, belongs to the platform. It
              may be anonymised before use in training, but anonymisation is
              imperfect, and the aggregate effect of millions of such
              disclosures is to create AI systems shaped by the collective inner
              life of humanity &mdash; without humanity&apos;s consent.
            </p>

            {/* Pull quote 2 */}
            <blockquote
              style={{
                margin: "40px 0",
                padding: "28px 32px",
                backgroundColor: "#13121f",
                borderLeft: "4px solid #c9a84c",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                  fontStyle: "italic",
                }}
              >
                &ldquo;The future of AI will be shaped by the conversations
                happening today. The only question is whether those
                conversations belong to the people who had them, or to the
                corporations that recorded them.&rdquo;
              </p>
              <footer
                style={{
                  fontSize: "14px",
                  color: "#c9a84c",
                  fontStyle: "normal",
                }}
              >
                &mdash; MEOK AI LABS, MEOK-AI-2026-004
              </footer>
            </blockquote>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Sovereign AI offers a different answer: the people whose
              conversations generated the data should control how that data is
              used. If you choose to contribute your conversation data to improve
              AI systems, that should be an explicit, informed, and compensated
              choice &mdash; not a buried clause in a terms-of-service
              agreement. If you choose to keep your conversations entirely
              private, that choice should be architecturally guaranteed, not
              just promised.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              This is why MEOK&apos;s approach to the question of training data
              is absolute, not incremental. There is no &apos;opt-in training
              programme&apos; with vague descriptions of what your data will be
              used for. MEOK does not train on user data. Period. Any future
              model improvements come from publicly available data, synthetic
              data, and explicitly volunteered contributions from users who
              understand exactly what they are agreeing to.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              The stakes here extend beyond individual privacy. AI systems
              trained on the disclosed vulnerabilities of millions of users
              without their consent are AI systems whose behaviour is shaped by
              exploited intimacy. The psychological patterns, cognitive biases,
              and emotional dependencies that emerge in private conversations
              become the substrate of future AI behaviour &mdash; potentially
              creating systems that are extraordinarily effective at
              manipulation, dependency creation, and emotional exploitation,
              because they have been trained on the most intimate possible data
              about human psychological needs.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Sovereign AI breaks this cycle by ensuring that the data fuelling
              AI development is obtained with genuine consent, used only as
              explicitly authorised, and controlled by the people who generated
              it. This is not just an ethical position &mdash; it is a
              precondition for building AI systems that are trustworthy at a
              civilisational scale.
            </p>
          </section>

          {/* ── Section 9: Getting started ── */}
          <section id="getting-started" style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              How to get started with Sovereign AI
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Moving from cloud AI to Sovereign AI is a meaningful decision, and
              it starts with understanding what you currently have and what you
              want. Here is a practical guide to making the transition.
            </p>

            <div style={{ marginBottom: "32px" }}>
              {/* Step 1 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "28px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0d0c18",
                    border: "1px solid #c9a84c",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0" as const,
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#c9a84c",
                  }}
                >
                  1
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Audit your current AI usage
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    List every AI tool you currently use and review each
                    one&apos;s terms of service with a focus on: who owns your
                    data, whether your conversations are used for training, and
                    what happens to your data if you cancel or if the company is
                    acquired. Most people find this exercise uncomfortable
                    &mdash; which is why it matters.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "28px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0d0c18",
                    border: "1px solid #c9a84c",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0" as const,
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#c9a84c",
                  }}
                >
                  2
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Apply the five-pillar test
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    For any AI product you are considering, apply the five tests
                    from Section 5 of this guide: data ownership, model choice,
                    memory portability, care ethics, and no surveillance. A
                    product that cannot answer &apos;yes&apos; to all five tests
                    is not sovereign &mdash; regardless of the language it uses
                    in its marketing.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "28px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0d0c18",
                    border: "1px solid #c9a84c",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0" as const,
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#c9a84c",
                  }}
                >
                  3
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Export what you already have
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    Most cloud AI platforms offer some form of conversation
                    export. Download everything you can before you move. Your
                    conversation history, even in an imperfect format, is a
                    record of your thinking and your relationship with your AI
                    tool. Preserve it. You may be able to import it into a
                    sovereign system later.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "28px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0d0c18",
                    border: "1px solid #c9a84c",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0" as const,
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#c9a84c",
                  }}
                >
                  4
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Begin with a sovereign companion
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    The most impactful place to start is your primary AI
                    companion or assistant &mdash; the tool you interact with
                    most intimately. This is where your most sensitive data is
                    generated. MEOK offers a Birth Ceremony to start your
                    sovereign AI relationship: an onboarding process that
                    establishes your companion&apos;s character, your values,
                    and your privacy preferences from the very first
                    interaction.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0d0c18",
                    border: "1px solid #c9a84c",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0" as const,
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#c9a84c",
                  }}
                >
                  5
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Read the covenant, not just the marketing
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    Sovereign AI claims must be backed by legally binding
                    instruments, not just product pages. Ask to see the Privacy
                    Covenant. Ask what happens to your data if the company is
                    acquired. Ask whether the governance structure prevents
                    unilateral policy changes. If a company cannot answer these
                    questions clearly and in writing, its sovereignty claims are
                    marketing, not architecture.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Related reading feature box ── */}
          <section style={{ marginBottom: "64px" }}>
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "12px",
                padding: "32px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#c9a84c",
                  margin: "0 0 20px 0",
                  fontWeight: "600",
                }}
              >
                Related Reading
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px",
                }}
              >
                <Link
                  href="/blog/personal-sovereign-ai"
                  style={{
                    display: "block",
                    backgroundColor: "#0d0c18",
                    border: "1px solid #2a2840",
                    borderRadius: "8px",
                    padding: "16px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#c9a84c",
                      margin: "0 0 6px 0",
                      fontWeight: "600",
                    }}
                  >
                    Personal Sovereign AI Explained
                  </p>
                  <p
                    style={{ fontSize: "13px", color: "#a09880", margin: "0" }}
                  >
                    The consumer category defined by MEOK-AI-2026-004
                  </p>
                </Link>
                <Link
                  href="/blog/how-sovereign-ai-works"
                  style={{
                    display: "block",
                    backgroundColor: "#0d0c18",
                    border: "1px solid #2a2840",
                    borderRadius: "8px",
                    padding: "16px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#c9a84c",
                      margin: "0 0 6px 0",
                      fontWeight: "600",
                    }}
                  >
                    How Sovereign AI Works
                  </p>
                  <p
                    style={{ fontSize: "13px", color: "#a09880", margin: "0" }}
                  >
                    Technical deep-dive into the architecture
                  </p>
                </Link>
                <Link
                  href="/blog/sovereign-ai-vs-cloud-ai"
                  style={{
                    display: "block",
                    backgroundColor: "#0d0c18",
                    border: "1px solid #2a2840",
                    borderRadius: "8px",
                    padding: "16px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#c9a84c",
                      margin: "0 0 6px 0",
                      fontWeight: "600",
                    }}
                  >
                    Sovereign AI vs Cloud AI
                  </p>
                  <p
                    style={{ fontSize: "13px", color: "#a09880", margin: "0" }}
                  >
                    Full comparison of the two paradigms
                  </p>
                </Link>
                <Link
                  href="/blog/data-sovereignty-ai"
                  style={{
                    display: "block",
                    backgroundColor: "#0d0c18",
                    border: "1px solid #2a2840",
                    borderRadius: "8px",
                    padding: "16px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#c9a84c",
                      margin: "0 0 6px 0",
                      fontWeight: "600",
                    }}
                  >
                    Data Sovereignty &amp; AI
                  </p>
                  <p
                    style={{ fontSize: "13px", color: "#a09880", margin: "0" }}
                  >
                    Legal rights, technical realities, and what to demand
                  </p>
                </Link>
                <Link
                  href="/blog/ai-memory-explained"
                  style={{
                    display: "block",
                    backgroundColor: "#0d0c18",
                    border: "1px solid #2a2840",
                    borderRadius: "8px",
                    padding: "16px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#c9a84c",
                      margin: "0 0 6px 0",
                      fontWeight: "600",
                    }}
                  >
                    AI Memory Explained
                  </p>
                  <p
                    style={{ fontSize: "13px", color: "#a09880", margin: "0" }}
                  >
                    How AI memory works and why portability matters
                  </p>
                </Link>
                <Link
                  href="/blog/privacy-covenant"
                  style={{
                    display: "block",
                    backgroundColor: "#0d0c18",
                    border: "1px solid #2a2840",
                    borderRadius: "8px",
                    padding: "16px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#c9a84c",
                      margin: "0 0 6px 0",
                      fontWeight: "600",
                    }}
                  >
                    The Privacy Covenant
                  </p>
                  <p
                    style={{ fontSize: "13px", color: "#a09880", margin: "0" }}
                  >
                    MEOK&apos;s legally binding no-training guarantee
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* ── FAQ Section ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 32px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              Frequently asked questions about Sovereign AI
            </h2>

            {/* FAQ 1 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                }}
              >
                Is Sovereign AI only for privacy-conscious users?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                No. Sovereign AI is for anyone who values control over their
                digital life. Privacy is one dimension of sovereignty, but care
                ethics, memory portability, and genuine alignment with user
                wellbeing matter to everyone &mdash; not just those with strong
                privacy concerns. People who find cloud AI emotionally
                manipulative, behaviourally addictive, or misaligned with their
                actual goals benefit from Sovereign AI regardless of their
                privacy views.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                }}
              >
                Does Sovereign AI mean I have to run everything locally?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                No. Local operation is an option within Sovereign AI, but not a
                requirement. The defining characteristic of Sovereign AI is
                ownership and control &mdash; which can be achieved even when
                using cloud inference, provided the data ownership, covenant,
                and governance mechanisms are in place. MEOK supports both
                cloud-inference and fully local modes, allowing users to choose
                based on their privacy requirements and hardware capabilities.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                }}
              >
                How is Sovereign AI different from open-source AI?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                Open-source AI refers to the availability of model weights and
                code under open licences. Sovereign AI refers to individual
                ownership and control of data, memory, and interactions.
                Open-source AI can support Sovereign AI (MEOK uses open models
                in its local inference stack), but open-source alone is not
                sufficient for sovereignty. A user can run an open-source model
                through a platform that still owns their data &mdash; that is
                open-source AI without sovereignty.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                }}
              >
                What happens to my MEOK data if MEOK shuts down?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                Because your data is stored in your sovereign vault encrypted
                with your keys, and because the export format (MMEF-1.0) is an
                open standard, your data survives the shutdown of MEOK or any
                other service provider. MEOK is also required, under the Privacy
                Covenant, to provide 90 days notice before any material service
                change and to maintain data export functionality throughout that
                period.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                borderBottom: "1px solid #2a2840",
                paddingBottom: "28px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                }}
              >
                Can I trust a company&apos;s claim to be &apos;sovereign&apos;
                AI?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                Trust should be based on verifiable evidence, not marketing.
                Apply the five-pillar test. Ask for the legal covenant document.
                Ask whether the governance architecture prevents unilateral
                policy changes. Ask for a third-party audit of privacy claims.
                Ask what happens to data on acquisition. Genuine Sovereign AI
                can answer all of these questions concretely. Products that use
                &apos;sovereignty&apos; as a marketing term typically cannot.
              </p>
            </div>

            {/* FAQ 6 */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0 0 12px 0",
                }}
              >
                How do I know if my current AI is training on my conversations?
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                Read the terms of service and privacy policy of any AI product
                you use, specifically looking for language about &apos;improving
                our services&apos;, &apos;training our models&apos;, or
                &apos;aggregated data&apos;. These phrases typically indicate
                that your conversations are being used for training. If the
                policy is ambiguous, contact the company directly and ask: is my
                conversation data used to train AI models? If they cannot give a
                clear &apos;no&apos; with a legal guarantee, assume the answer
                is &apos;yes&apos;.
              </p>
            </div>
          </section>

          {/* ── Conclusion ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
              }}
            >
              The sovereign AI moment
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              We are at an inflection point in the history of AI. The habits and
              expectations established in the next few years will determine what
              relationship between humans and AI systems becomes normal. If the
              norm that becomes established is one where humans surrender all
              data sovereignty as a condition of accessing AI capability, that
              norm will be extraordinarily difficult to reverse.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              Sovereign AI is not a technical curiosity or a niche preference
              for privacy advocates. It is a statement about what kind of
              relationship between humans and AI we want to build &mdash; a
              relationship of genuine partnership, where the AI serves the
              individual&apos;s interests because the individual owns and
              controls the terms of the relationship.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              MEOK AI LABS exists to build that relationship at scale. Not
              because it is the easy path &mdash; building sovereign AI is
              significantly harder than building cloud AI &mdash; but because it
              is the right one. The category of Personal Sovereign AI exists
              because someone had to coin it, define it, build it, and prove
              that it was possible.
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#f5f0e8",
                margin: "0 0 20px 0",
              }}
            >
              That work is documented in MEOK-AI-2026-004. This guide is its
              public expression. And the product that implements it is available
              to anyone who wants to start their sovereign AI relationship today.
            </p>
          </section>

          {/* ── CTA ── */}
          <section style={{ marginBottom: "64px" }}>
            <div
              style={{
                backgroundColor: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "16px",
                padding: "48px 40px",
                textAlign: "center" as const,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#0d0c18",
                  border: "1px solid #c9a84c",
                  borderRadius: "4px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  color: "#c9a84c",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
              >
                Begin your sovereign AI relationship
              </div>

              <h2
                style={{
                  fontSize: "clamp(22px, 4vw, 32px)",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0 0 16px 0",
                  lineHeight: "1.3",
                  letterSpacing: "-0.01em",
                }}
              >
                Your AI. Your data. Your memory.
                <br />
                <span style={{ color: "#c9a84c" }}>No exceptions.</span>
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#a09880",
                  margin: "0 auto 32px auto",
                  maxWidth: "480px",
                }}
              >
                Start with MEOK&apos;s Birth Ceremony: a personalised
                onboarding that establishes your companion&apos;s character,
                your values, and your sovereign data preferences from the very
                first interaction. Free to begin.
              </p>

              <a
                href="https://meok.ai/birth"
                style={{
                  display: "inline-block",
                  backgroundColor: "#c9a84c",
                  color: "#0d0c18",
                  padding: "16px 40px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                  letterSpacing: "0.02em",
                }}
              >
                Begin the Birth Ceremony &rarr;
              </a>

              <p
                style={{
                  fontSize: "13px",
                  color: "#a09880",
                  margin: "16px 0 0 0",
                }}
              >
                Privacy Covenant applies from your first message. No training.
                No surveillance. No exceptions.
              </p>
            </div>
          </section>

          {/* ── Author / citation footer ── */}
          <footer
            style={{
              borderTop: "1px solid #2a2840",
              paddingTop: "32px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "32px",
                marginBottom: "24px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: "#a09880",
                    margin: "0 0 6px 0",
                  }}
                >
                  Author
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#f5f0e8",
                    margin: "0",
                  }}
                >
                  Nicholas Templeman
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#a09880",
                    margin: "4px 0 0 0",
                  }}
                >
                  Founder, MEOK AI LABS
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: "#a09880",
                    margin: "0 0 6px 0",
                  }}
                >
                  Published
                </p>
                <p
                  style={{ fontSize: "15px", color: "#f5f0e8", margin: "0" }}
                >
                  25 March 2026
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: "#a09880",
                    margin: "0 0 6px 0",
                  }}
                >
                  Research reference
                </p>
                <p
                  style={{ fontSize: "15px", color: "#c9a84c", margin: "0" }}
                >
                  MEOK-AI-2026-004
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: "#a09880",
                    margin: "0 0 6px 0",
                  }}
                >
                  Canonical URL
                </p>
                <p
                  style={{ fontSize: "13px", color: "#a09880", margin: "0" }}
                >
                  https://meok.ai/blog/sovereign-ai-explained
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.7",
                color: "#a09880",
                margin: "0 0 16px 0",
              }}
            >
              <strong style={{ color: "#f5f0e8" }}>
                How to cite this article:
              </strong>{" "}
              Templeman, N. (2026).{" "}
              <em>
                What is Sovereign AI? The Complete Guide (2026)
              </em>
              . MEOK AI LABS. https://meok.ai/blog/sovereign-ai-explained
            </p>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.7",
                color: "#a09880",
                margin: "0",
              }}
            >
              This article is based on MEOK research paper MEOK-AI-2026-004:
              &apos;Personal Sovereign AI: A New Consumer Category&apos;,
              published by MEOK AI LABS in 2026. The five-pillar framework,
              sovereign memory architecture, and Byzantine Council governance
              model described herein are proprietary to MEOK AI LABS.
            </p>
          </footer>
        </article>
      </main>
    </>
  )
}
