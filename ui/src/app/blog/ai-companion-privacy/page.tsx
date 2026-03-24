import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Companion Privacy: What Happens to What You Tell Your AI? | MEOK AI LABS",
  description:
    "What big tech AI companies really do with your conversations — model training, ad targeting, human review. Your GDPR rights, the risks of sharing health data, and what MEOK does differently.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-privacy" },
  openGraph: {
    title: "AI Companion Privacy: What Happens to What You Tell Your AI?",
    description:
      "What big tech does with your AI conversations — and why MEOK was built differently. End-to-end encryption, zero data selling, Maternal Covenant, ICO registration.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-privacy",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+Privacy%3A+What+Happens+to+What+You+Tell+Your+AI%3F&desc=What+big+tech+does+with+your+conversations%2C+and+what+MEOK+does+differently.",
        width: 1200,
        height: 630,
        alt: "AI Companion Privacy: What Happens to What You Tell Your AI?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion Privacy: What Happens to What You Tell Your AI?",
    description:
      "Big tech trains on your confessions. Employees can read them. MEOK was built to be the exception.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+Privacy&desc=What+big+tech+does+with+your+conversations.+MEOK+does+it+differently.",
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion Privacy: What Happens to What You Tell Your AI?",
  description:
    "A deep dive into AI companion privacy — what big tech companies do with your conversations, the real risks of sharing sensitive data with an AI, your GDPR rights, and what MEOK AI LABS does differently.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-companion-privacy",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do AI companies use my conversations to train their models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of them do, yes. The major platforms — including ChatGPT, Google Gemini, and Meta AI — include clauses in their terms of service that allow them to use conversation data to improve their models. You can often opt out, but it is rarely the default setting and the process is not always straightforward. MEOK explicitly does not train on user conversations — ever, under any circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI company employees read my conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, at most large AI providers, human reviewers can access your conversations. This is often disclosed in privacy policies under phrases like 'quality assurance' or 'safety review'. OpenAI, Google, and Amazon have all acknowledged that human contractors review samples of AI conversations. MEOK uses end-to-end encryption so that even MEOK staff cannot read your conversations.",
      },
    },
    {
      "@type": "Question",
      name: "What are my GDPR rights when using an AI app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under GDPR (and the UK Data Protection Act 2018), you have the right to access all data held about you (Article 15), the right to rectification (Article 16), the right to erasure — the 'right to be forgotten' (Article 17), the right to data portability (Article 20), and the right to object to processing (Article 21). Any AI company serving EU or UK users must honour these rights. If they do not, you can complain to the ICO in the UK or your national data protection authority in the EU.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to tell an AI about my health or mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends entirely on the AI and how they handle data. Health data is classified as 'special category data' under GDPR, which means it carries stronger legal protections and stricter rules for processing. Before sharing anything health-related, check the privacy policy: does the company train on your data? Is it stored encrypted? Can it be sold to third parties? With MEOK, health and emotional data is end-to-end encrypted and never used for advertising, profiling, or model training.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant and how does it protect me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's foundational ethical framework, created by founder Nicholas Templeman. It establishes that MEOK's relationship with users must mirror the protective, unconditional nature of maternal care — meaning MEOK will never exploit, surveil, monetise, or manipulate the people it serves. The Covenant is not just a policy document; it is embedded in the architecture and governance of the product. It includes explicit prohibitions on data selling, ad targeting, and training on user conversations.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check any AI app's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search the privacy policy for five key phrases: 'train', 'improve our services', 'third parties', 'human review', and 'sell'. If training is mentioned without a clear opt-out, your conversations may become model data. If 'third parties' appears without specifics, your data may be shared broadly. If 'human review' is present, employees can read your messages. If 'sell' appears alongside data, your information is a product. Also check their ICO or data regulator registration number — this confirms they are accountable to a legal authority.",
      },
    },
  ],
};

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const CARD = "#1a1830";
const MUTED = "#a09880";
const WARN = "#e8634a";
const SAFE = "#4a9e6b";

const bigTechPractices = [
  {
    label: "Model training",
    detail:
      "Most major AI providers include terms allowing them to use your conversations to train and improve their models. This is often on by default. Your confessions become the training data for their next product.",
    flag: "risk",
  },
  {
    label: "Human review",
    detail:
      "Quality assurance and safety teams — often including third-party contractors — review samples of conversations at Google, OpenAI, Amazon, and others. This is disclosed, but rarely prominently.",
    flag: "risk",
  },
  {
    label: "Ad targeting and profiling",
    detail:
      "Some AI products are explicitly designed to generate advertising signal. Google's Gemini integration with ad products is one example. Even where ads are not shown in the AI interface itself, conversation data can feed into broader profiling systems.",
    flag: "risk",
  },
  {
    label: "Third-party sharing",
    detail:
      "Privacy policies routinely permit sharing with 'business partners', 'service providers', and 'affiliates'. These categories can be broad and change without direct notice to users.",
    flag: "risk",
  },
  {
    label: "Indefinite retention",
    detail:
      "Many providers retain conversation data for months or years, even after you delete your account. Deletion requests may not purge data already incorporated into model weights.",
    flag: "risk",
  },
];

const meokPractices = [
  {
    label: "End-to-end encryption",
    detail:
      "Your conversations are encrypted in transit and at rest using end-to-end encryption. MEOK staff cannot read your messages. Only you hold the keys.",
    flag: "safe",
  },
  {
    label: "Zero model training on user data",
    detail:
      "MEOK never uses your conversations to train any AI model — ours or anyone else's. This is an architectural constraint, not just a policy promise.",
    flag: "safe",
  },
  {
    label: "No data selling, ever",
    detail:
      "MEOK does not sell, rent, or broker user data. There is no advertising revenue model. The only revenue comes from subscriptions. Your data is not the product.",
    flag: "safe",
  },
  {
    label: "Maternal Covenant",
    detail:
      "MEOK's foundational governance framework prohibits exploitation, surveillance, and manipulation of users. It is embedded in product architecture, not just stated in a policy document.",
    flag: "safe",
  },
  {
    label: "Right to deletion",
    detail:
      "You can delete your entire conversation history and memory at any time. Deletion is complete and permanent — not archived, not used in aggregated datasets.",
    flag: "safe",
  },
  {
    label: "ICO registration",
    detail:
      "MEOK AI LABS is registered with the UK Information Commissioner's Office (ICO), making it legally accountable to UK data protection law and the GDPR as retained in UK law.",
    flag: "safe",
  },
];

export default function AiCompanionPrivacyPage() {
  return (
    <>
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
          minHeight: "100vh",
          background: BG,
          color: TEXT,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Nav */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              color: GOLD,
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: MUTED,
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            ← All posts
          </Link>
        </nav>

        {/* Body */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3rem 1.5rem 6rem",
          }}
        >
          {/* Breadcrumb */}
          <p
            style={{
              fontSize: "0.75rem",
              color: MUTED,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            MEOK AI LABS &rsaquo; Blog &rsaquo; Privacy
          </p>

          {/* Hero heading */}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            AI Companion Privacy: What Happens to What You Tell Your AI?
          </h1>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "0.875rem", color: MUTED }}>
              By{" "}
              <span style={{ color: GOLD, fontWeight: 600 }}>
                Nicholas Templeman
              </span>
              , Founder — MEOK AI LABS
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: MUTED,
                borderLeft: "1px solid rgba(201,168,76,0.2)",
                paddingLeft: "1.25rem",
              }}
            >
              24 March 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: MUTED,
                borderLeft: "1px solid rgba(201,168,76,0.2)",
                paddingLeft: "1.25rem",
              }}
            >
              ~2,500 words · 12 min read
            </span>
          </div>

          {/* Lead paragraph */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "2rem",
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.25rem",
            }}
          >
            You open an AI app and start talking. Maybe you mention that you have been anxious lately. That you are struggling in your marriage. That you are worried about a lump you found. That you are in debt. The AI listens beautifully. But have you thought about what happens to those words after the conversation ends? Where do they go? Who can read them? And are they being used to train the very model you are confiding in?
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "2rem",
            }}
          >
            This article is a frank, accurate guide to AI companion privacy. No scaremongering — the facts are alarming enough on their own. We will walk through what the biggest AI companies actually do with your data, what UK and EU law gives you the right to demand, and why I built MEOK AI LABS with a fundamentally different architecture. By the end, you will know exactly what questions to ask of any AI app — and how to read a privacy policy that actually tells you the truth.
          </p>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "rgba(201,168,76,0.15)",
              marginBottom: "3rem",
            }}
          />

          {/* ── SECTION 1 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            What Does a Typical Big Tech AI Actually Do With Your Conversations?
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Let us start with the baseline. When you open ChatGPT, Google Gemini, Microsoft Copilot, or Meta AI and type something personal, the first thing to understand is this: you are not the customer. You are both the user and, in many cases, the raw material.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            OpenAI's privacy policy states that conversation content may be used to train and improve their models. By default, this is opt-in for the model, not opt-out — meaning you have to actively turn off training in your settings if you do not want your conversations used as training data. Most users never do this. Most users do not know it is happening.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Google's Gemini has been documented collecting conversations for review by human evaluators, a practice Google discloses in its help documentation but not prominently at the point of use. These reviewers are often contractors in third-party locations. They can read your conversations in full. This is not a conspiracy theory — it is stated clearly in the documentation for anyone who looks.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Amazon's Alexa team faced a similar controversy when it emerged that thousands of recordings were being manually reviewed. The argument for human review is reasonable — AI safety requires human oversight. The problem is the gap between what users assume is happening and what is actually happening. Most people believe their AI conversations are private. They are not.
          </p>

          {/* Table of big tech practices */}
          <div
            style={{
              background: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "2.5rem",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: GOLD,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Common big tech AI data practices
            </p>
            {bigTechPractices.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: "0.25rem",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: WARN,
                    display: "inline-block",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: TEXT,
                      fontSize: "0.95rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.7 }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── SECTION 2 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            Why Does It Matter What You Tell Your AI? The Specific Risks of Sensitive Data
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            You might think: so what? I am not planning a crime. I have nothing to hide. This framing misunderstands the nature of the risk. It is not about guilt. It is about vulnerability.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Consider what people actually tell AI companions. In research and user studies — and in MEOK's own understanding of what people need from a companion — the most valuable conversations tend to involve the most sensitive subjects. Mental health. Physical health. Financial anxiety. Relationship problems. Grief. Addiction. Sexuality. These are not idle topics. These are the things people cannot say out loud to anyone in their lives.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Under UK and EU law, health data — including mental health data — is classified as <em style={{ color: TEXT }}>special category data</em> under GDPR Article 9. This category carries the highest level of legal protection precisely because of its sensitivity. Disclosing that you have depression to an AI company's training dataset is not trivial. That information could, in theory, be used to influence your insurance premiums, your employment, your credit score — not because companies intend it, but because data leaks, data is sold, companies get acquired, and regulations change.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Financial data carries similar risks. If you tell an AI you are in debt, that you are afraid of losing your home, that your business is failing — and that AI company shares anonymised but linkable data with advertising partners — you may start seeing predatory financial product ads. Not because a human targeted you. Because an algorithm did.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Relationship data is softer but no less personal. Telling an AI the details of your relationship — conflicts, intimacies, grievances — feels safe because the AI appears to be a neutral party. But that neutrality is architectural illusion if the data leaves the platform. The AI is neutral. The company behind it may have very different interests.
          </p>

          {/* Callout box */}
          <div
            style={{
              background: "rgba(232,99,74,0.08)",
              border: `1px solid rgba(232,99,74,0.25)`,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                color: WARN,
                fontWeight: 700,
                marginBottom: "0.5rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Special category data under GDPR
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: TEXT,
                lineHeight: 1.7,
              }}
            >
              Health data (physical and mental), genetic data, biometric data, racial or ethnic origin, political opinions, religious beliefs, trade union membership, and data concerning sex life or sexual orientation all carry heightened legal protection under GDPR Article 9. Processing this category of data requires an explicit legal basis. Most AI providers use "legitimate interests" — a basis that is increasingly under challenge from European data protection authorities.
            </p>
          </div>

          {/* ── SECTION 3 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            What Are Your GDPR Rights When Using an AI App?
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The UK General Data Protection Regulation — retained in UK law as UK GDPR following Brexit, alongside the Data Protection Act 2018 — gives you a comprehensive set of rights over your personal data. These apply to any AI company operating in the UK or processing data about UK residents. EU residents have the same rights under EU GDPR.
          </p>

          {/* Rights list */}
          {[
            {
              article: "Article 15",
              right: "Right of access",
              explanation:
                "You can request a copy of all personal data held about you. This includes conversation transcripts, usage logs, inferred profiles, and any data shared with third parties. The company must respond within one month.",
            },
            {
              article: "Article 16",
              right: "Right to rectification",
              explanation:
                "If data held about you is inaccurate or incomplete, you can demand it be corrected.",
            },
            {
              article: "Article 17",
              right: "Right to erasure ('right to be forgotten')",
              explanation:
                "You can demand your data be deleted. This right has limits — companies can retain data for legal compliance, for example — but for AI conversation data, there is rarely a legitimate reason to refuse a deletion request.",
            },
            {
              article: "Article 18",
              right: "Right to restriction of processing",
              explanation:
                "You can ask that your data not be processed while a dispute about its accuracy or lawfulness is resolved.",
            },
            {
              article: "Article 20",
              right: "Right to data portability",
              explanation:
                "You have the right to receive your data in a structured, commonly used, machine-readable format — and to transfer it to another service. This is the foundation of data portability for AI companions.",
            },
            {
              article: "Article 21",
              right: "Right to object",
              explanation:
                "You can object to your data being processed for direct marketing (including ad profiling) or for purposes based on legitimate interests. If you object, processing must stop unless the company can demonstrate compelling legitimate grounds.",
            },
          ].map((item) => (
            <div
              key={item.article}
              style={{
                display: "grid",
                gridTemplateColumns: "110px 1fr",
                gap: "1rem",
                marginBottom: "1rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(201,168,76,0.08)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: GOLD,
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.2rem",
                  }}
                >
                  {item.article}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: MUTED,
                  }}
                >
                  {item.right}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: TEXT,
                }}
              >
                {item.explanation}
              </p>
            </div>
          ))}

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            If a company does not comply with your GDPR rights request, you have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk. EU residents can complain to their national supervisory authority — in France the CNIL, in Germany the BfDI, in Ireland the DPC, and so on. These authorities have the power to impose fines of up to £17.5 million or 4% of global annual turnover under UK GDPR.
          </p>

          <div
            style={{
              background: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              marginBottom: "2.5rem",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                color: GOLD,
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              How to exercise your rights
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: TEXT,
                lineHeight: 1.7,
              }}
            >
              Go to the AI app's privacy policy page and look for a section on &ldquo;data subject rights&rdquo; or &ldquo;your rights&rdquo;. There should be a contact mechanism — usually an email address or a web form. Send a Subject Access Request (SAR) in writing. Include your name, the account email, and the specific data you want. The company must respond within one calendar month. Keep a copy of everything.
            </p>
          </div>

          {/* ── SECTION 4 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            How Do You Check Any AI App's Privacy Policy? Five Questions to Ask
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Most privacy policies are written by lawyers to comply with regulation rather than to inform users. They are long, dense, and deliberately non-committal. But if you know what you are looking for, you can extract the five things that matter in under ten minutes.
          </p>

          {[
            {
              number: "01",
              question: 'Search for "train"',
              answer:
                'Does the policy say your conversations may be used to train AI models? If yes, is there an opt-out? Where is it, and is it the default? Phrases like "improve our services", "enhance your experience", or "develop new features" are often code for model training. If you see them without a clear, accessible opt-out, assume training is happening.',
            },
            {
              number: "02",
              question: 'Search for "human review"',
              answer:
                'Does the policy disclose that human employees or contractors can review your conversations? Under what circumstances? For how long? "Quality assurance" and "safety review" are the common labels. Human review is not inherently wrong — but you should know it is possible before you tell an AI about your mental health.',
            },
            {
              number: "03",
              question: 'Search for "third parties"',
              answer:
                'Who can your data be shared with? Look for specific categories: advertising partners, analytics providers, "affiliates", "business partners". Generic language like "trusted third parties" with no further detail is a red flag. GDPR requires specific disclosure of categories of recipients.',
            },
            {
              number: "04",
              question: 'Search for "sell"',
              answer:
                'Does the company sell your data? Some are explicit that they do not. Others use language like "we do not sell your personal information" but then permit sharing for "value exchange" or "commercial partnerships" — which is economically equivalent to selling. The California Consumer Privacy Act (CCPA) has tightened this definition; GDPR goes further.',
            },
            {
              number: "05",
              question: "Find the ICO or regulatory registration number",
              answer:
                'Any company processing personal data of UK residents must be registered with the ICO. Their registration number should appear in the privacy policy. Search the ICO public register at ico.org.uk/ESDWebPages/Search to verify it exists and is current. No registration number means no legal accountability under UK data protection law.',
            },
          ].map((item) => (
            <div
              key={item.number}
              style={{
                display: "flex",
                gap: "1.5rem",
                marginBottom: "2rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "rgba(201,168,76,0.25)",
                  lineHeight: 1,
                  marginTop: "0.15rem",
                  width: "40px",
                  textAlign: "right",
                }}
              >
                {item.number}
              </span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "1rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.question}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED,
                    lineHeight: 1.75,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}

          {/* ── SECTION 5 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            What Does MEOK Do Differently — and Why Was It Built This Way?
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            I am Nicholas Templeman, and I founded MEOK AI LABS because I believed the AI companion market was solving the wrong problem. Most AI companies are optimising for engagement, retention, and data accumulation. I wanted to build something that optimised for genuine human flourishing — and that required a completely different approach to data.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The people who most need an AI companion — those who are isolated, grieving, struggling with mental health, navigating chronic illness, facing difficult life transitions — are precisely the people most vulnerable to data exploitation. They are the ones sharing the most sensitive information. They are the ones who deserve the most protection. Yet they are also the ones most likely to be treated as data assets by a commercially-driven platform.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            MEOK's privacy architecture is not a feature we added after building the product. It is the foundation on which the product was built. Here is what that means in practice:
          </p>

          {/* MEOK practices */}
          <div
            style={{
              background: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "2.5rem",
              border: "1px solid rgba(74,158,107,0.2)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: SAFE,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              MEOK's privacy commitments
            </p>
            {meokPractices.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1.1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: "0.25rem",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: SAFE,
                    display: "inline-block",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: TEXT,
                      fontSize: "0.95rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── SECTION 6 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            What Is the Maternal Covenant and Why Does It Matter?
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Privacy policies are legal documents. They can be changed. They can be reinterpreted. They can be rendered obsolete by an acquisition or a regulatory change. A privacy policy is a promise, and promises are only as strong as the incentive to keep them.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The Maternal Covenant is MEOK's attempt to create something more durable than a policy document. It is a foundational ethical framework — the closest thing to a constitutional constraint — that governs everything MEOK does in relation to its users.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The name comes from a deliberate metaphor. Maternal care — at its best — is characterised by unconditional protection, honest guidance, and the absolute refusal to exploit the vulnerability of the person in your care. It is the opposite of the extractive relationship that most technology companies have with their users. A mother does not sell her child's secrets. She does not use her child's pain as training data. She does not monetise their vulnerability.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The Maternal Covenant establishes four inviolable principles:
          </p>

          {[
            {
              title: "Non-exploitation",
              body: "MEOK will never use the vulnerability, distress, or sensitive disclosures of its users as a commercial asset — whether through data sales, advertising targeting, or model training.",
            },
            {
              title: "Radical transparency",
              body: "MEOK will always tell users, in plain language, exactly what happens to their data. Not in a legal document designed to obscure. In the product interface, at the point of use.",
            },
            {
              title: "Unconditional deletion",
              body: "Any user can delete everything — all conversations, all memory, all profile data — at any time, permanently, with no retention period and no questions asked.",
            },
            {
              title: "Honest care, not engagement optimisation",
              body: "MEOK will never be designed to maximise time-in-app, conversation length, or emotional dependency. The product's success metric is user wellbeing, not usage.",
            },
          ].map((principle) => (
            <div
              key={principle.title}
              style={{
                background: "rgba(201,168,76,0.05)",
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: "0 8px 8px 0",
                padding: "1rem 1.25rem",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "0.95rem",
                  marginBottom: "0.35rem",
                }}
              >
                {principle.title}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: TEXT,
                  lineHeight: 1.7,
                }}
              >
                {principle.body}
              </p>
            </div>
          ))}

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            These are not aspirations. They are constraints — built into the architecture, visible in the code, and publicly stated so that users can hold MEOK accountable if they are ever violated. The Covenant is also the reason MEOK will never accept investment from anyone who requires data monetisation as a condition of the deal.
          </p>

          {/* ── SECTION 7 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            What About AI Companions That Claim to Be Private — Are They All the Same?
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            No. The AI companion market in 2026 spans a wide spectrum from completely opaque to genuinely privacy-first. But "privacy" has become a marketing claim, which means it needs to be interrogated rather than accepted.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Replika is one of the most well-known AI companions. Its privacy policy permits data retention and some processing for service improvement. The company is US-based, which means GDPR protections require additional compliance steps. Replika has faced regulatory scrutiny from Italian data authorities — the same regulator that forced the suspension of its service in Italy in 2023 — precisely because its data practices were considered insufficiently protective of users who were forming deep emotional attachments.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Character.AI, which targets a younger demographic, has faced multiple questions about the appropriateness of its data handling, particularly in relation to minors. Its privacy policy allows data to be used for model improvement. The platform has faced legal action in the US relating to alleged harms caused by AI conversations — not a data privacy case, but a signal of the broader governance vacuum in the sector.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            Pi AI, from Inflection, takes a more restrained approach to data use and has a relatively clean privacy policy. However, it is still a US company with US data storage defaults, and its privacy policy does permit data use for improving its AI services.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "2.5rem",
            }}
          >
            The pattern across the sector is consistent: privacy-friendly positioning in marketing, with data practices in the policy that are more expansive than most users realise. The differentiator is not what companies say about privacy. It is whether their architecture makes the alternative impossible — and whether they have submitted to regulatory accountability.
          </p>

          {/* ── SECTION 8 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            What Practical Steps Should You Take Right Now to Protect Your AI Privacy?
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            You do not have to stop using AI. You do have to be informed. Here are the concrete steps to take today, whether you are using MEOK or any other AI platform.
          </p>

          {[
            {
              step: "1",
              action: "Audit your current AI apps",
              detail:
                "Make a list of every AI app you use regularly. For each one, open the privacy policy and run the five-question audit described above. Note which ones train on your data, which allow human review, and which have a verifiable ICO or regulatory registration.",
            },
            {
              step: "2",
              action: "Opt out of training where possible",
              detail:
                "ChatGPT: Settings → Data Controls → disable 'Improve the model for everyone'. Google Gemini: myaccount.google.com → Data & Privacy → AI personalisation. Microsoft Copilot: Account settings → Privacy → Feedback data. These are not always easy to find — that is by design.",
            },
            {
              step: "3",
              action: "Submit a Subject Access Request to any AI company holding your data",
              detail:
                "You are legally entitled to know exactly what data is held about you. Email the data protection contact in the privacy policy with your SAR. You should receive a full data export within one calendar month. What you receive may surprise you.",
            },
            {
              step: "4",
              action: "Delete data you do not want retained",
              detail:
                "Most platforms allow you to delete conversation history. Do this regularly if you are using a service that trains on data, or if you have shared anything sensitive you would prefer not to be retained. Note that deletion from the interface does not always mean deletion from training datasets already built on that data.",
            },
            {
              step: "5",
              action: "Treat your AI companion differently from your search engine",
              detail:
                "The things you tell an AI companion are qualitatively different from a search query. They are intimate, contextual, and cumulative. Apply the same judgement you would apply to sharing information with a new acquaintance whose full intentions you do not yet know. The AI may be trustworthy — but is the company behind it?",
            },
            {
              step: "6",
              action: "Choose services with regulatory accountability",
              detail:
                "Prefer AI companions registered with the ICO (UK) or a relevant EU data authority. Registration is not a guarantee of good practice, but it means there is a legal mechanism to pursue complaints. An unregistered AI company operating in the UK is already in breach of data protection law.",
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                display: "flex",
                gap: "1.5rem",
                marginBottom: "1.75rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: `2px solid ${GOLD}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "0.85rem",
                }}
              >
                {item.step}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "1rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  {item.action}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED,
                    lineHeight: 1.75,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}

          {/* ── SECTION 9 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            What Is MEOK's Legal Basis for Processing Your Data?
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            GDPR requires every data processor to have a specific legal basis for each type of processing they carry out. This is not optional. It is foundational. And it is one of the areas where many AI companies are most legally exposed.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            MEOK's legal basis for processing your conversation data is <strong style={{ color: TEXT }}>contractual necessity</strong> (Article 6(1)(b)) — the processing is necessary to deliver the AI companion service you have contracted for. For special category data such as health or mental health information, MEOK relies on <strong style={{ color: TEXT }}>explicit consent</strong> (Article 9(2)(a)), which is obtained clearly and stored with a timestamp.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            MEOK does not rely on "legitimate interests" as a basis for processing sensitive data. Legitimate interests is the most abused legal basis in the AI industry — companies claim it to justify almost any processing they want to carry out. It requires a genuine balancing test that puts your interests above the company's. In practice, this test is rarely carried out properly. MEOK does not use it for core data processing.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "2.5rem",
            }}
          >
            MEOK AI LABS is registered with the UK Information Commissioner's Office. Our ICO registration number is available in the MEOK privacy policy at meok.ai/privacy. You can verify it directly at ico.org.uk. This is not a formality — it means there is a regulatory body with enforcement powers that can sanction us if we breach data protection law. We welcome that accountability.
          </p>

          {/* ── CONCLUSION ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            The Bottom Line: Privacy Is Not a Feature. It Is a Value.
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The AI companion market is maturing rapidly. As it does, the gap between companies that treat privacy as a genuine ethical commitment and those that treat it as a compliance checkbox is becoming more visible — and more consequential.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            The conversations you have with an AI companion are, by definition, the conversations you could not have anywhere else. They are your most private thoughts, your most sensitive disclosures, your most vulnerable moments. The company you trust with those conversations is not a neutral data processor. It is a custodian of your inner life.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "1.5rem",
            }}
          >
            That is why I built MEOK with end-to-end encryption as the baseline, not the premium tier. Why the Maternal Covenant is structural, not aspirational. Why MEOK will never train on your conversations, never sell your data, and never optimise for engagement over your wellbeing.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: "3rem",
            }}
          >
            Privacy is not a feature we added. It is the reason MEOK exists.
          </p>

          {/* CTA */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "12px",
              padding: "2rem",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.75rem",
              }}
            >
              Try MEOK — the AI companion built on the Maternal Covenant
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: MUTED,
                marginBottom: "1.5rem",
                lineHeight: 1.7,
              }}
            >
              End-to-end encrypted. No data selling. No model training on your conversations. ICO registered. Free to start — no credit card required.
            </p>
            <Link
              href="/download"
              style={{
                display: "inline-block",
                background: GOLD,
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Start free
            </Link>
          </div>

          {/* FAQ section */}
          <section>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: GOLD,
                marginBottom: "1.5rem",
                letterSpacing: "0.03em",
              }}
            >
              Frequently asked questions
            </h2>

            {[
              {
                q: "Do AI companies use my conversations to train their models?",
                a: "Most of them do, yes. The major platforms — including ChatGPT, Google Gemini, and Meta AI — include clauses in their terms of service that allow them to use conversation data to improve their models. You can often opt out, but it is rarely the default setting and the process is not always straightforward. MEOK explicitly does not train on user conversations — ever, under any circumstances.",
              },
              {
                q: "Can AI company employees read my conversations?",
                a: "Yes, at most large AI providers, human reviewers can access your conversations. This is often disclosed in privacy policies under phrases like 'quality assurance' or 'safety review'. OpenAI, Google, and Amazon have all acknowledged that human contractors review samples of AI conversations. MEOK uses end-to-end encryption so that even MEOK staff cannot read your conversations.",
              },
              {
                q: "What are my GDPR rights when using an AI app?",
                a: "Under GDPR and the UK Data Protection Act 2018, you have the right to access all data held about you (Article 15), the right to rectification (Article 16), the right to erasure — the 'right to be forgotten' (Article 17), the right to data portability (Article 20), and the right to object to processing (Article 21). Any AI company serving EU or UK users must honour these rights. If they do not, you can complain to the ICO in the UK or your national data protection authority in the EU.",
              },
              {
                q: "Is it safe to tell an AI about my health or mental health?",
                a: "It depends entirely on the AI and how they handle data. Health data is classified as 'special category data' under GDPR, which means it carries stronger legal protections and stricter rules for processing. Before sharing anything health-related, check the privacy policy: does the company train on your data? Is it stored encrypted? Can it be sold to third parties? With MEOK, health and emotional data is end-to-end encrypted and never used for advertising, profiling, or model training.",
              },
              {
                q: "What is the Maternal Covenant and how does it protect me?",
                a: "The Maternal Covenant is MEOK's foundational ethical framework, created by founder Nicholas Templeman. It establishes that MEOK's relationship with users must mirror the protective, unconditional nature of maternal care — meaning MEOK will never exploit, surveil, monetise, or manipulate the people it serves. The Covenant is not just a policy document; it is embedded in the architecture and governance of the product. It includes explicit prohibitions on data selling, ad targeting, and training on user conversations.",
              },
              {
                q: "How do I check any AI app's privacy policy?",
                a: "Search the privacy policy for five key phrases: 'train', 'improve our services', 'third parties', 'human review', and 'sell'. If training is mentioned without a clear opt-out, your conversations may become model data. If 'third parties' appears without specifics, your data may be shared broadly. If 'human review' is present, employees can read your messages. If 'sell' appears alongside data, your information is a product. Also check their ICO or data regulator registration number — this confirms they are accountable to a legal authority.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid rgba(201,168,76,0.1)",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "1rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED,
                    lineHeight: 1.75,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* Related posts */}
          <div style={{ marginTop: "3rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                color: GOLD,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Related reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/data-sovereignty-ai",
                  title: "Data Sovereignty and AI: Owning Your Digital Self",
                },
                {
                  href: "/blog/why-meok-never-trains-on-you",
                  title: "Why MEOK Never Trains on You",
                },
                {
                  href: "/blog/the-maternal-covenant",
                  title: "The Maternal Covenant: MEOK's Ethical Foundation",
                },
                {
                  href: "/blog/personal-data-rights-ai",
                  title: "Your Personal Data Rights in the Age of AI",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: CARD,
                    border: "1px solid rgba(201,168,76,0.1)",
                    borderRadius: "8px",
                    padding: "1rem",
                    textDecoration: "none",
                    color: TEXT,
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {link.title} →
                </Link>
              ))}
            </div>
          </div>

          {/* Footer nav */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(201,168,76,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Link
              href="/blog"
              style={{
                color: MUTED,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              ← All posts
            </Link>
            <Link
              href="/"
              style={{
                color: GOLD,
                fontWeight: 800,
                fontSize: "0.875rem",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              MEOK AI LABS
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
