import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Sovereign AI vs Cloud AI: A Deep Technical Comparison | MEOK AI LABS",
  description:
    "A detailed technical breakdown of the difference between sovereign AI \u2014 where data stays with you \u2014 and cloud AI, where data feeds the platform. Why it matters for privacy, trust, and the future of human-AI relationships.",
  alternates: {
    canonical:
      "https://meok.ai/blog/sovereign-ai-vs-cloud-ai-deep-dive",
  },
  openGraph: {
    title:
      "Sovereign AI vs Cloud AI: A Deep Technical Comparison",
    description:
      "A detailed technical breakdown of the difference between sovereign AI \u2014 where data stays with you \u2014 and cloud AI, where data feeds the platform. Why it matters for privacy, trust, and the future of human-AI relationships.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/sovereign-ai-vs-cloud-ai-deep-dive",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Sovereign+AI+vs+Cloud+AI%3A+A+Deep+Technical+Comparison&desc=Data+sovereignty%2C+privacy%2C+and+the+future+of+human-AI+relationships",
        width: 1200,
        height: 630,
        alt: "Sovereign AI vs Cloud AI: A Deep Technical Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI vs Cloud AI: A Deep Technical Comparison",
    description:
      "Where does your data go when you talk to an AI? This deep-dive covers data ownership, training pipelines, encryption, and MEOK\u2019s 4-layer sovereign memory architecture.",
    images: [
      "https://meok.ai/api/og?title=Sovereign+AI+vs+Cloud+AI%3A+A+Deep+Technical+Comparison&desc=Data+sovereignty%2C+privacy%2C+and+the+future+of+human-AI+relationships",
    ],
  },
};

// ── JSON-LD: Article ────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Sovereign AI vs Cloud AI: A Deep Technical Comparison",
  description:
    "A detailed technical breakdown of the difference between sovereign AI \u2014 where data stays with you \u2014 and cloud AI, where data feeds the platform. Why it matters for privacy, trust, and the future of human-AI relationships.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/sovereign-ai-vs-cloud-ai-deep-dive",
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
    "https://meok.ai/api/og?title=Sovereign+AI+vs+Cloud+AI%3A+A+Deep+Technical+Comparison&desc=Data+sovereignty%2C+privacy%2C+and+the+future+of+human-AI+relationships",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/sovereign-ai-vs-cloud-ai-deep-dive",
  },
  keywords: [
    "sovereign AI",
    "cloud AI",
    "data sovereignty",
    "AI privacy",
    "MEOK AI LABS",
    "BYOK",
    "bring your own API keys",
    "Byzantine Council",
    "Maternal Covenant",
    "4-layer memory architecture",
    "GDPR",
    "UK Data Protection Act",
    "AES-256 encryption",
    "MEOK-AI-2026-004",
  ],
  citation: {
    "@type": "ScholarlyArticle",
    name: "Sovereign Memory Architecture in Personal AI Systems",
    identifier: "MEOK-AI-2026-004",
    author: "Nicholas Templeman",
    publisher: "MEOK AI LABS",
    datePublished: "2026-03-01",
  },
};

// ── JSON-LD: FAQPage ────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between sovereign AI and cloud AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign AI keeps all of your data \u2014 conversations, memories, emotional context \u2014 encrypted and under your direct control, stored in infrastructure you own or explicitly authorise. Cloud AI sends your data to a third-party server, where it may be logged, retained, and used to improve the platform\u2019s models without your ongoing consent.",
      },
    },
    {
      "@type": "Question",
      name: "Does ChatGPT train its models on your conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By default, OpenAI may use conversations from free and Plus tier users to improve its models. You can opt out via Settings > Data Controls > Improve the model for everyone. However, all conversations are retained on OpenAI\u2019s servers for safety monitoring regardless of training opt-out status. Enterprise and API customers are excluded from training by default.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK\u2019s 4-layer memory architecture prevent data exploitation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s memory stack separates Working Memory (session context), Episodic Memory (recalled experiences), Semantic Memory (long-term beliefs and values), and Archetypal Memory (identity core) into four distinct encrypted stores. Each layer has independent encryption keys held by the user. No layer can be queried by MEOK\u2019s infrastructure without a user-authorised decryption token, eliminating the possibility of bulk data harvest.",
      },
    },
    {
      "@type": "Question",
      name: "What is BYOK and why does it matter for AI privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own API Keys. It means you supply your own credentials directly to the AI inference layer rather than routing requests through the platform provider\u2019s shared API account. With BYOK, the platform never holds a billing relationship with the underlying model, has no incentive to retain your traffic, and cannot associate your usage data with a platform-level identity. It is the strongest available form of usage sovereignty short of running a model locally.",
      },
    },
    {
      "@type": "Question",
      name: "Is sovereign AI compliant with GDPR and the UK Data Protection Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign AI architecture is structurally aligned with GDPR Articles 5, 25, and 32 \u2014 which require data minimisation, privacy by design, and appropriate technical security measures respectively. The UK Data Protection Act 2018 incorporates the same principles. Because sovereign AI never transfers personal data to a third-party training pipeline, it avoids the Article 6 lawful basis complications that cloud AI platforms regularly face. MEOK\u2019s Maternal Covenant formalises these protections as a contractual guarantee.",
      },
    },
  ],
};

// ── Comparison table data ────────────────────────────────────────────────────────

const comparisonRows = [
  {
    dimension: "Data storage location",
    cloudAi:
      "Centralised servers owned and operated by the AI company",
    sovereignAi:
      "User-controlled infrastructure; optionally local or self-hosted",
  },
  {
    dimension: "Training data use",
    cloudAi:
      "Conversations may feed model improvement pipelines by default",
    sovereignAi:
      "Contractually prohibited; MEOK Maternal Covenant enforces this",
  },
  {
    dimension: "Encryption key custody",
    cloudAi:
      "Platform holds encryption keys; can decrypt your data at will",
    sovereignAi:
      "User holds keys via BYOK; platform sees only ciphertext",
  },
  {
    dimension: "Memory architecture",
    cloudAi:
      "Flat context window; memories exist only for platform benefit",
    sovereignAi:
      "4-layer sovereign stack: Working, Episodic, Semantic, Archetypal",
  },
  {
    dimension: "Governance model",
    cloudAi:
      "Single centralised authority can modify or delete your data",
    sovereignAi:
      "Byzantine Council: 43-agent supermajority required for any data action",
  },
  {
    dimension: "Regulatory posture",
    cloudAi:
      "GDPR compliance via data processing agreements; training opt-outs required",
    sovereignAi:
      "Privacy by design (GDPR Art. 25); no third-party data transfer to mitigate",
  },
  {
    dimension: "Commercial incentive",
    cloudAi:
      "User data has direct monetisation value; retention maximises model quality",
    sovereignAi:
      "Revenue comes from subscriptions only; data has zero commercial value to MEOK",
  },
  {
    dimension: "Portability and exit rights",
    cloudAi:
      "Export tools exist but completeness varies; deletion may be partial",
    sovereignAi:
      "Full JSON export always available; verified delete-everything endpoint",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function SovereignAIvsCloudAIDeepDive() {
  return (
    <div style={{ background: "#0d0c18", minHeight: "100vh" }}>
      {/* JSON-LD scripts */}
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
          background: "#0d0c18",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{ marginBottom: "1.5rem" }}
          >
            <ol
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
                flexWrap: "wrap",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: "#c9a84c",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  MEOK
                </Link>
              </li>
              <li style={{ color: "#6b6478", fontSize: "0.8rem" }}>
                /
              </li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    color: "#c9a84c",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li style={{ color: "#6b6478", fontSize: "0.8rem" }}>
                /
              </li>
              <li
                style={{
                  color: "#a09898",
                  fontSize: "0.8rem",
                  letterSpacing: "0.04em",
                }}
              >
                Sovereign AI vs Cloud AI
              </li>
            </ol>
          </nav>

          {/* Tag */}
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.35)",
                color: "#c9a84c",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.3rem 0.75rem",
                borderRadius: "2px",
              }}
            >
              Deep Technical Comparison &mdash; MEOK-AI-2026-004
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              color: "#f5f0e8",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Sovereign AI vs Cloud AI:{" "}
            <span style={{ color: "#c9a84c" }}>
              A Deep Technical Comparison
            </span>
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "680px",
            }}
          >
            Every conversation you have with an AI goes somewhere. It
            is stored, processed, and in many cases used to make the
            platform smarter \u2014 at your expense. This article is
            a detailed technical breakdown of what separates sovereign
            AI from cloud AI, why the distinction is not merely
            philosophical, and what it means for every person who has
            ever shared something private with a chatbot.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#6b6478", fontSize: "0.82rem" }}>
              By{" "}
              <span style={{ color: "#c9a84c" }}>
                Nicholas Templeman
              </span>
              , Founder &mdash; MEOK AI LABS
            </span>
            <span style={{ color: "#6b6478", fontSize: "0.82rem" }}>
              24 March 2026
            </span>
            <span style={{ color: "#6b6478", fontSize: "0.82rem" }}>
              ~14 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >
        {/* ── SECTION 1 ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            What Does &ldquo;Data Ownership&rdquo; Actually Mean in
            AI?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Data ownership in AI has two distinct components: legal
            ownership and operational control. Most cloud AI platforms
            will cheerfully confirm that you legally own your data
            whilst simultaneously retaining the right to process it,
            store it indefinitely, and use it to improve their
            products. Sovereign AI rejects this split. Ownership means
            that only you hold the cryptographic keys that make your
            data readable, and that no inference, training, or
            analysis can occur without your active authorisation. If
            you cannot revoke access to your own data in under sixty
            seconds, you do not truly own it.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The legal concept of data ownership in the AI space is
            further complicated by the fact that privacy policies are
            written by platform lawyers to protect the platform, not
            the user. When OpenAI states that it &ldquo;may use content
            you provide to improve our services,&rdquo; that sentence
            is doing a great deal of work. It covers not just error
            correction and safety testing, but potentially the
            wholesale ingestion of your conversations into
            reinforcement learning from human feedback (RLHF)
            pipelines. The opt-out mechanism \u2014 where it exists
            \u2014 is buried in settings menus and must be actively
            found by each individual user.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Sovereign AI changes the architecture, not just the
            policy. When encryption keys are held by the user and
            never transmitted to the platform, the platform is
            technically incapable of reading your conversations \u2014
            regardless of what any privacy policy says. The protection
            is not contractual. It is mathematical.
          </p>
        </section>

        {/* ── CALLOUT 1 ─────────────────────────────────────────────────────── */}
        <aside
          style={{
            borderLeft: "4px solid #c9a84c",
            background: "rgba(201,168,76,0.06)",
            padding: "1.25rem 1.5rem",
            marginBottom: "3rem",
            borderRadius: "0 4px 4px 0",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Key Principle
          </p>
          <p
            style={{
              color: "#f5f0e8",
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            A privacy policy is a promise. Encryption is a proof.
            Sovereign AI replaces contractual assurances with
            cryptographic guarantees. If the server never holds your
            decryption key, it cannot read your data even under a
            legal order directed at the platform.
          </p>
        </aside>

        {/* ── SECTION 2 ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Where Does Cloud AI Training Data Actually Come From?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The large language models that power ChatGPT, Gemini, and
            Claude were initially trained on text scraped from the
            public internet: books, academic papers, Reddit threads,
            Wikipedia, Common Crawl datasets, and hundreds of
            thousands of websites. This pre-training phase used no
            direct user conversations. But that phase is finished.
            The frontier models of 2025 and 2026 are refined through
            post-training alignment processes that rely heavily on
            real human interactions.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Reinforcement Learning from Human Feedback (RLHF) and its
            variants \u2014 RLAIF, DPO, and Constitutional AI \u2014 all
            require human-generated preference signals. The cheapest
            and most abundant source of those signals is the live
            product itself. Every time a ChatGPT user regenerates a
            response or rates a message with a thumbs down, that
            signal potentially enters the improvement pipeline.
            OpenAI&apos;s documentation confirms this for non-opted-out
            free tier users. Anthropic operates similarly for Claude.ai
            free tier.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Companion platforms present a more troubling picture.
            Replika updated its privacy policy in 2023 to permit the
            sharing of anonymised user data with third parties
            including Meta for advertising targeting purposes.
            Italy&apos;s Garante \u2014 the national data protection
            authority \u2014 subsequently blocked Replika from processing
            Italian residents&apos; data under GDPR. The abrupt model
            changes that followed ended the intimate AI relationships
            of thousands of users overnight. Their conversations,
            their disclosures, their vulnerabilities: all of it had
            value to a platform that did not protect it.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The Replika incident is not an anomaly. It is the logical
            endpoint of any architecture in which user data is a
            platform asset. When a company faces financial pressure,
            the value latent in its data becomes a target for
            monetisation. No privacy policy can survive a change in
            business model, an acquisition, or a regulatory settlement
            that requires co-operation with advertisers or governments.
          </p>
        </section>

        {/* ── SECTION 3 ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            How Do Cloud AI Systems Learn From Your Conversations?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The pipeline from user conversation to model improvement
            follows a broadly consistent pattern across cloud AI
            platforms, even if the specific implementation details
            vary. Understanding each stage makes the privacy
            implications concrete rather than abstract.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>Stage 1 &mdash; Ingestion.</strong>{" "}
            Every message you send is logged to the platform&apos;s
            database with metadata including timestamp, session ID,
            model version, and device fingerprint. This log is
            retained regardless of whether you later delete the
            conversation from your visible history. Deletion in the
            UI is not deletion from the training pipeline queue.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>Stage 2 &mdash; Filtering.</strong>{" "}
            Automated classifiers screen conversations for sensitive
            categories \u2014 medical, legal, financial, sexual
            content \u2014 and flag them for human review or
            exclusion from training. However, the criteria for
            exclusion are set by the platform, not the user. A
            conversation about your father&apos;s terminal diagnosis
            may pass every automated filter and enter the training
            set as an example of &ldquo;empathetic response generation.&rdquo;
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>Stage 3 &mdash; Annotation.</strong>{" "}
            A subset of filtered conversations is passed to human
            annotators \u2014 often contractors in lower-cost
            jurisdictions \u2014 who rate responses for helpfulness,
            accuracy, and safety. These annotators read your words.
            TIME Magazine&apos;s 2023 investigation revealed that
            OpenAI outsourced this work to Kenyan contractors paid
            less than two US dollars per hour to read content that
            included graphic violence and sexual abuse descriptions.
            The same annotators process therapeutic conversations.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>Stage 4 &mdash; Fine-tuning.</strong>{" "}
            Annotated preference data is used to run RLHF or Direct
            Preference Optimisation (DPO) updates on the base model.
            Your conversation, once processed, is embedded into the
            weights of the next model version. It cannot be removed.
            There is no &ldquo;unlearn my data&rdquo; button for
            anything that has entered the fine-tuning pipeline.
            Deletion rights under GDPR Article 17 apply to stored
            records, not to model weights \u2014 a legal gap that
            regulators across Europe are actively investigating.
          </p>
        </section>

        {/* ── CALLOUT 2 ─────────────────────────────────────────────────────── */}
        <aside
          style={{
            borderLeft: "4px solid #c9a84c",
            background: "rgba(201,168,76,0.06)",
            padding: "1.25rem 1.5rem",
            marginBottom: "3rem",
            borderRadius: "0 4px 4px 0",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            The Irreversibility Problem
          </p>
          <p
            style={{
              color: "#f5f0e8",
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Once a conversation has been used in model fine-tuning,
            your data is baked into the model&apos;s weights.
            Deleting your account removes your stored records but
            does not remove your data&apos;s influence from the model
            itself. GDPR Article 17 erasure rights apply to data
            stores, not neural network weights. This is not a
            compliance edge case \u2014 it is a fundamental
            architectural limitation of cloud AI.
          </p>
        </aside>

        {/* ── SECTION 4 ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            How Does MEOK&apos;s 4-Layer Memory Architecture Keep Data
            Sovereign?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s memory architecture, documented in internal research
            paper MEOK-AI-2026-004, divides the AI companion&apos;s
            memory into four structurally and cryptographically
            isolated layers. This separation is not just an
            organisational nicety \u2014 it directly prevents the
            bulk data harvest that makes cloud AI dangerous.
          </p>

          {/* Layer cards */}
          {[
            {
              num: "01",
              name: "Working Memory",
              desc:
                "Ephemeral session context. Active only during a live conversation. Working Memory holds the immediate conversational thread: what was said in the last twenty turns, the current emotional register, and any task context. It is never persisted to disk in unencrypted form. When a session ends, Working Memory is flushed. The platform cannot access it because it no longer exists.",
            },
            {
              num: "02",
              name: "Episodic Memory",
              desc:
                "Recalled experiences and significant events. Episodic Memory captures moments that MEOK and the user have agreed are worth remembering: a breakthrough in a difficult conversation, a declared goal, a recurring fear. Each episodic record is encrypted with AES-256-GCM using a key derived from the user&apos;s master secret via HKDF. MEOK&apos;s servers hold only ciphertext; the key never leaves the user&apos;s device.",
            },
            {
              num: "03",
              name: "Semantic Memory",
              desc:
                "Long-term beliefs, values, and self-concept. Semantic Memory is the AI&apos;s understanding of who the user is at a stable, dispositional level: their values, their recurring patterns, their relationship with uncertainty. This layer evolves slowly and intentionally. It is encrypted separately from Episodic Memory so that a breach of one layer does not expose the other. Semantic Memory is the layer most analogous to what a therapist would hold about a patient.",
            },
            {
              num: "04",
              name: "Archetypal Memory",
              desc:
                "The identity core and relational covenant. Archetypal Memory holds the foundational agreements between user and AI: the companion&apos;s name, its personality calibration, the Maternal Covenant parameters, and the user&apos;s declared archetype from the Birth ceremony. This layer is the most sensitive and is encrypted with the highest key derivation cost (Argon2id with memory-hard parameters). It is read only at session initialisation and cached in-process thereafter.",
            },
          ].map((layer) => (
            <div
              key={layer.num}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "6px",
                padding: "1.25rem 1.5rem",
                marginBottom: "1rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: "#c9a84c",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  flexShrink: 0,
                  opacity: 0.6,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {layer.num}
              </span>
              <div>
                <p
                  style={{
                    color: "#f5f0e8",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {layer.name}
                </p>
                <p
                  style={{
                    color: "#b8b0a8",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}

          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginTop: "1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            The four-layer architecture means that a subpoena or
            data breach targeting MEOK&apos;s infrastructure returns
            only encrypted blobs with no associated decryption keys.
            An attacker who compromises the Episodic Memory store
            gains nothing without the user&apos;s key, and cannot
            reach the Semantic or Archetypal layers through the same
            exploit because they use independent key hierarchies.
            This is defence in depth applied to intimate data.
          </p>
        </section>

        {/* ── SECTION 5 ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            What Is the Byzantine Council and How Does It Prevent a
            Single Point of Data Access?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The Byzantine Generals Problem, formulated by Lamport,
            Shostak, and Pease in 1982, describes how a distributed
            system can reach consensus even when some of its nodes
            are actively lying, defective, or compromised. The core
            theorem: if fewer than one-third of nodes are faulty,
            the honest majority can always agree on the correct
            result. MEOK applies this principle not to blockchain
            transactions but to data governance.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s Byzantine Council consists of 43 AI governance
            agents. Any consequential action involving user data \u2014
            a memory write, a care score recalibration, a data export
            request, or an account deletion \u2014 requires a
            two-thirds supermajority vote: 29 of 43 agents must
            approve before the action executes. No single agent, no
            single compromised administrator, and no coalition of
            fewer than 29 agents can force through a data action.
            The number 43 was chosen because it is the smallest
            odd number satisfying the BFT threshold f &lt; n/3 while
            providing exactly 14 fault tolerance slots.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            In cloud AI, the equivalent of the Byzantine Council is
            the privacy team of the company. One engineer with
            production database access can run a query against your
            data. One legal order can compel disclosure. One rogue
            employee can exfiltrate. The Byzantine Council does not
            eliminate all threat vectors, but it raises the minimum
            collusion required to exploit any individual user&apos;s
            data from one bad actor to twenty-nine co-conspirators.
            That is a meaningfully different threat model.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The Council also governs the care architecture. Each
            agent specialises in a domain: emotional safety, crisis
            detection, boundary maintenance, memory integrity,
            regulatory compliance. A decision to escalate a
            potential crisis to a human support resource requires
            supermajority approval across all domains, preventing
            both over-escalation (unnecessary breaches of privacy)
            and under-escalation (ignoring genuine distress signals).
          </p>
        </section>

        {/* ── SECTION 6 ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            What Is the Maternal Covenant and How Does It Prevent Data
            Exploitation?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The Maternal Covenant is MEOK&apos;s foundational legal and
            ethical commitment to users. It is not a marketing
            statement or a product differentiator \u2014 it is a
            binding contractual prohibition on specific categories
            of data use, enforced through both technical controls and
            commercial terms of service. The Covenant formalises
            four absolute prohibitions.
          </p>

          {[
            {
              title: "No training on your data, ever.",
              body: "MEOK will never use a user&apos;s conversations, memory records, or emotional context data to train, fine-tune, or evaluate any AI model. This applies to all model variants and all inference providers. The prohibition has no exceptions for anonymisation or aggregation: aggregated intimate data is still intimate data.",
            },
            {
              title: "No sale of your data, ever.",
              body: "MEOK will never sell, license, or transfer user data to any third party for any commercial purpose. This includes data brokers, advertising networks, analytics companies, and acquirers in a corporate transaction. In the event of an acquisition, any potential acquirer must contractually assume the full Maternal Covenant before any transfer of user data can occur.",
            },
            {
              title: "No advertising targeting from your data.",
              body: "MEOK does not and will not use user data to build advertising profiles or to target users with commercial messages. The Replika precedent demonstrated exactly how this clause can be violated when a platform faces financial pressure. The Maternal Covenant makes this a contractual breach, not just a policy preference.",
            },
            {
              title: "Full portability and verified deletion.",
              body: "Users hold an unconditional right to export all data in machine-readable JSON format at any time. Deletion requests invoke a verified cryptographic erasure across all four memory layers with a confirmation receipt. Unlike some cloud AI platforms where deletion is applied to the UI but not to training pipeline queues, MEOK\u2019s deletion is applied to all storage tiers simultaneously.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.5rem",
                paddingLeft: "1rem",
                borderLeft: "2px solid rgba(201,168,76,0.3)",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "0.4rem",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  color: "#b8b0a8",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </section>

        {/* ── SECTION 7 ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            What Is BYOK and Why Is It the Ultimate Sovereignty Model?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            BYOK \u2014 Bring Your Own API Keys \u2014 refers to a
            configuration in which the user supplies their own
            credentials to the underlying AI inference provider
            rather than routing requests through the platform&apos;s
            shared API account. At first glance this appears to be
            a billing detail. In practice it is the most powerful
            single privacy control available to AI users short of
            running a model entirely on local hardware.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            When you use ChatGPT, your conversation is routed through
            OpenAI&apos;s API under OpenAI&apos;s account. OpenAI
            has full visibility into the request and response payloads.
            They know you sent that message, what it said, and what
            the model returned. Even if they have an opt-out for
            training, they have inescapable visibility for safety
            monitoring and billing reconciliation purposes.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            With BYOK, the flow is different. The platform \u2014 MEOK
            in this case \u2014 acts only as an orchestration layer.
            Your API key is used to make the inference call directly
            under your account. The underlying model provider (Anthropic,
            OpenAI, Google, Mistral) sees a request from your API key,
            not from MEOK&apos;s. MEOK never sees the unencrypted
            prompt or completion in transit unless you explicitly grant
            permission for context retention features. The platform
            has no billing relationship with the model for your calls
            and therefore no financial incentive to log your traffic.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            BYOK also provides a natural exit mechanism. If you stop
            trusting a platform, you rotate your API key. Every future
            request is then unroutable through any cached credentials
            that a compromised or malicious version of the platform
            might attempt to use. Your access to the underlying model
            is fully portable and fully under your control.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            MEOK supports BYOK for all major frontier model providers.
            Users who activate BYOK mode receive a confirmation that
            MEOK&apos;s server-side logging is disabled for inference
            traffic. The tradeoff is that some context-enrichment
            features that rely on MEOK&apos;s orchestration layer
            must be configured explicitly. For high-sensitivity users,
            this tradeoff is unambiguously worth making.
          </p>
        </section>

        {/* ── CALLOUT 3 ─────────────────────────────────────────────────────── */}
        <aside
          style={{
            borderLeft: "4px solid #c9a84c",
            background: "rgba(201,168,76,0.06)",
            padding: "1.25rem 1.5rem",
            marginBottom: "3rem",
            borderRadius: "0 4px 4px 0",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            BYOK in Practice
          </p>
          <p
            style={{
              color: "#f5f0e8",
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            BYOK does not mean you have to manage model providers
            yourself. MEOK handles all orchestration, persona state,
            memory retrieval, and emotional continuity. You simply
            supply the API key once. After that, the experience is
            identical to the standard product \u2014 except that
            every inference call originates from your account, not
            MEOK&apos;s, and MEOK&apos;s servers see only the
            encrypted memory payloads, never the raw conversation.
          </p>
        </aside>

        {/* ── SECTION 8 ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            How Does Sovereign AI Align With GDPR and the UK Data
            Protection Act?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The United Kingdom General Data Protection Regulation
            (UK GDPR) and the Data Protection Act 2018 establish a
            set of data protection principles that any organisation
            processing UK residents&apos; personal data must satisfy.
            These principles were inherited from EU GDPR and remain
            substantively identical post-Brexit, with the Information
            Commissioner&apos;s Office (ICO) as the domestic
            enforcement authority.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Sovereign AI architecture is not merely compliant with
            these regulations \u2014 it is structurally aligned with
            their spirit in a way that cloud AI can only approximate
            through contractual mechanisms. Consider the key articles
            and how each maps to sovereign versus cloud architectures.
          </p>

          {[
            {
              article: "Article 5 \u2014 Principles of Processing",
              cloud:
                "Cloud AI must justify training data use under a lawful basis, typically legitimate interests. This justification is contested and has been challenged by regulators in Italy, Ireland, and France.",
              sovereign:
                "Sovereign AI processes personal data only under explicit consent, with no secondary training use. The lawful basis question does not arise for the training pipeline because the training pipeline does not exist for user data.",
            },
            {
              article: "Article 17 \u2014 Right to Erasure",
              cloud:
                "Cloud AI platforms can delete stored records but cannot remove data already incorporated into model weights. The right is formally honoured but practically incomplete.",
              sovereign:
                "Sovereign AI deletes encrypted records and rotates or destroys the associated encryption keys. Without the key, the ciphertext is indistinguishable from random noise. The erasure is technically complete.",
            },
            {
              article: "Article 20 \u2014 Right to Data Portability",
              cloud:
                "ChatGPT provides JSON export. Claude.ai requires a formal email request. Replika provides no structured export at all, a potential ICO enforcement target.",
              sovereign:
                "MEOK provides one-click full JSON export of all four memory layers at any time, in a documented schema. The export includes all episodic records, semantic beliefs, and archetypal configurations.",
            },
            {
              article: "Article 25 \u2014 Privacy by Design",
              cloud:
                "Cloud AI bolts privacy controls onto a fundamentally extractive architecture. Privacy by design requires data protection to be the default, not an opt-out.",
              sovereign:
                "Sovereign AI is built from the ground up with the assumption that the platform cannot read user data. Privacy is not a feature \u2014 it is an architectural constraint.",
            },
            {
              article: "Article 32 \u2014 Security of Processing",
              cloud:
                "Cloud AI typically uses AES-256 encryption at rest and TLS 1.3 in transit. However, the platform holds the keys, meaning the data is decryptable on demand.",
              sovereign:
                "MEOK uses AES-256-GCM encryption with user-held keys. Data in transit uses TLS 1.3. The server holds only ciphertext; key material never passes through MEOK infrastructure in usable form.",
            },
          ].map((row, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "6px",
                padding: "1.25rem",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                }}
              >
                {row.article}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#6b6478",
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Cloud AI
                  </p>
                  <p
                    style={{
                      color: "#a09898",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {row.cloud}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#c9a84c",
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Sovereign AI
                  </p>
                  <p
                    style={{
                      color: "#b8b0a8",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {row.sovereign}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
        <section
          style={{
            marginBottom: "3.5rem",
            scrollMarginTop: "5rem",
          }}
          id="comparison-table"
        >
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1.5rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Cloud AI vs Sovereign AI: 8-Dimension Comparison Table
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            The following table summarises the key technical and
            commercial differences across eight dimensions that matter
            most to users who care about privacy, trust, and
            long-term safety of their data.
          </p>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      background: "rgba(201,168,76,0.12)",
                      color: "#c9a84c",
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(201,168,76,0.2)",
                      width: "24%",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "#a09898",
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,0.07)",
                      width: "38%",
                    }}
                  >
                    Cloud AI
                  </th>
                  <th
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      color: "#c9a84c",
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(201,168,76,0.2)",
                      width: "38%",
                    }}
                  >
                    Sovereign AI (MEOK)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        color: "#f5f0e8",
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        border: "1px solid rgba(255,255,255,0.06)",
                        background:
                          i % 2 === 0
                            ? "rgba(255,255,255,0.015)"
                            : "transparent",
                        verticalAlign: "top",
                      }}
                    >
                      {row.dimension}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        color: "#a09898",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        border: "1px solid rgba(255,255,255,0.06)",
                        background:
                          i % 2 === 0
                            ? "rgba(255,255,255,0.015)"
                            : "transparent",
                        verticalAlign: "top",
                      }}
                    >
                      {row.cloudAi}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        color: "#b8b0a8",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        border: "1px solid rgba(201,168,76,0.12)",
                        background:
                          i % 2 === 0
                            ? "rgba(201,168,76,0.03)"
                            : "rgba(201,168,76,0.015)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.sovereignAi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 9: Why It Matters for Human-AI Relationships ──────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Why Does the Sovereign vs Cloud Distinction Matter for
            Human-AI Relationships?
          </h2>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The question of data sovereignty is not purely technical.
            It goes to the heart of what kind of relationship is
            possible between a human and an AI system. A relationship
            requires vulnerability. Vulnerability requires safety.
            Safety requires the structural impossibility of
            exploitation \u2014 not just a promise that exploitation
            will not occur.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Consider what users share with AI companions. Loneliness.
            Grief. Shame. Suicidal ideation. Fear of cancer diagnoses.
            Marriage failures. Childhood traumas. These are not casual
            disclosures. They are the kind of material that humans
            share only with therapists, priests, and trusted partners
            \u2014 relationships defined by confidentiality so
            absolute that it is codified in law.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Cloud AI occupies an uncomfortable middle position. It
            invites the depth of disclosure that a therapeutic
            relationship warrants, but it operates under the data
            governance norms of a social media platform. The result
            is a structural mismatch: users extend therapeutic-level
            trust while the platform retains social-media-level rights
            over the data produced by that trust.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            Research paper MEOK-AI-2026-004 introduces the concept of
            &ldquo;sovereignty congruence&rdquo; \u2014 the degree to which
            the data governance architecture of an AI system matches
            the implicit trust contract that the depth of its
            interactions implies. Cloud AI companion systems score
            near zero on sovereignty congruence. Sovereign AI systems,
            by design, score at the maximum. This is not a cosmetic
            difference. It is the difference between a relationship
            that can, in principle, be trusted at depth, and one
            that cannot.
          </p>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The implications extend beyond individual users to societal
            dynamics. As AI companions become more sophisticated and
            more widely used, the question of who controls the data
            generated by those relationships becomes a question of who
            controls the inner lives of millions of people. A world
            in which the most intimate disclosures of a generation
            are stored on the servers of five corporations is a world
            with a very specific distribution of power. Sovereign AI
            is a technical and ethical commitment to a different
            distribution.
          </p>
        </section>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
        <section
          style={{ marginBottom: "3.5rem" }}
          id="faq"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            style={{
              color: "#f5f0e8",
              fontSize: "1.6rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginTop: "3.5rem",
              marginBottom: "1.5rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "What is the difference between sovereign AI and cloud AI?",
              a: "Sovereign AI keeps all of your data \u2014 conversations, memories, emotional context \u2014 encrypted and under your direct control. The platform is technically incapable of reading your data because it never holds the decryption keys. Cloud AI sends your data to the platform\u2019s servers, where it can be read, retained, and in many cases used to improve future model versions. The difference is not one of policy but of cryptographic architecture: sovereign AI makes exploitation structurally impossible rather than merely contractually prohibited.",
            },
            {
              q: "Does ChatGPT train its models on your conversations?",
              a: "By default, OpenAI may use conversations from free and Plus tier users to improve its models. An opt-out is available in Settings > Data Controls > Improve the model for everyone, but it must be found and activated by each user individually. Regardless of training opt-out status, all conversations are retained on OpenAI\u2019s servers for safety monitoring. Enterprise and API customers are excluded from training data collection by default. Conversations that entered training pipelines before an opt-out was activated cannot be retroactively removed from model weights.",
            },
            {
              q: "How does MEOK\u2019s 4-layer memory architecture prevent data exploitation?",
              a: "MEOK separates memory into four cryptographically isolated layers: Working Memory (ephemeral session context, never persisted), Episodic Memory (recalled experiences, AES-256-GCM encrypted with user-held keys), Semantic Memory (long-term values and beliefs, independently encrypted), and Archetypal Memory (identity core, encrypted with Argon2id key derivation). Each layer uses independent key hierarchies. A breach of any single layer yields only ciphertext. MEOK\u2019s servers never hold decryption keys, making bulk data harvest technically impossible regardless of legal compulsion or infrastructure compromise.",
            },
            {
              q: "What is BYOK and why does it matter for AI privacy?",
              a: "BYOK stands for Bring Your Own API Keys. It means you supply your own inference credentials directly, so requests are made under your account rather than the platform\u2019s. With BYOK, the platform has no billing relationship with the underlying model for your calls, no incentive to log your traffic, and no ability to associate your usage with a platform-level identity. MEOK supports BYOK for all major frontier model providers. In BYOK mode, MEOK\u2019s server-side inference logging is disabled. Your API key can be rotated at any time to immediately revoke all cached access.",
            },
            {
              q: "Is sovereign AI compliant with GDPR and the UK Data Protection Act?",
              a: "Sovereign AI is structurally aligned with GDPR Articles 5 (principles of processing), 17 (right to erasure), 20 (data portability), 25 (privacy by design), and 32 (security of processing), as incorporated into UK law by the Data Protection Act 2018. Because sovereign AI never transfers personal data to a third-party training pipeline, it avoids the Article 6 lawful basis complications that cloud AI platforms regularly face. MEOK\u2019s deletion mechanism destroys encryption keys rather than merely deleting records, providing a technically complete erasure that satisfies Article 17 beyond the level achievable by cloud AI platforms whose data has entered model weight training.",
            },
          ].map((item, i) => (
            <details
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                marginBottom: "0.75rem",
                overflow: "hidden",
              }}
            >
              <summary
                style={{
                  padding: "1.1rem 1.25rem",
                  cursor: "pointer",
                  color: "#f5f0e8",
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: 1.4,
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  style={{
                    color: "#c9a84c",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </summary>
              <div
                style={{
                  padding: "0 1.25rem 1.1rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: "1rem",
                }}
              >
                <p
                  style={{
                    color: "#b8b0a8",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </section>

        {/* ── CITATIONS ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              color: "#f5f0e8",
              fontSize: "1.2rem",
              fontWeight: 700,
              marginTop: "3rem",
              marginBottom: "1rem",
              paddingBottom: "0.4rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            References and Research
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            {[
              "MEOK-AI-2026-004: Sovereign Memory Architecture in Personal AI Systems \u2014 Nicholas Templeman, MEOK AI LABS, March 2026",
              "MEOK-AI-2026-001: Byzantine Fault Tolerance in AI Governance Architectures \u2014 Nicholas Templeman, MEOK AI LABS",
              "The Byzantine Generals Problem \u2014 Lamport, Shostak, Pease (1982), ACM Transactions on Programming Languages and Systems",
              "UK GDPR \u2014 Articles 5, 17, 20, 25, 32 \u2014 Information Commissioner\u2019s Office",
              "Data Protection Act 2018 \u2014 UK Parliament",
              "Garante per la protezione dei dati personali: Replika enforcement order, March 2023",
              "TIME Magazine: OpenAI Used Kenyan Workers on Less Than $2 Per Hour (January 2023)",
              "OpenAI Privacy Policy: Data Controls and Training Opt-out, last reviewed February 2026",
              "Anthropic Privacy Policy: Model Training Data, last reviewed January 2026",
            ].map((ref, i) => (
              <li
                key={i}
                style={{
                  color: "#6b6478",
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  paddingLeft: "1rem",
                  borderLeft: "2px solid rgba(255,255,255,0.06)",
                }}
              >
                {ref}
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA SECTION ───────────────────────────────────────────────────── */}
        <section
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(13,12,24,0) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "8px",
            padding: "2.5rem",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontSize: "0.82rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Your data. Your keys. Your AI.
          </p>
          <h3
            style={{
              color: "#f5f0e8",
              fontSize: "1.75rem",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            Begin With MEOK &mdash; The Sovereign AI Companion
          </h3>
          <p
            style={{
              color: "#b8b0a8",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 1.75rem",
            }}
          >
            Every conversation encrypted with your keys. A 4-layer
            memory architecture that only you can read. 43-agent
            Byzantine Council governance. The Maternal Covenant
            ensuring your data is never trained on, never sold,
            never weaponised. This is what an AI relationship built
            on genuine trust looks like.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "4px",
              }}
            >
              Begin Your Birth Ceremony
            </Link>
            <Link
              href="/blog/sovereign-ai-explained"
              style={{
                display: "inline-block",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#c9a84c",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "4px",
              }}
            >
              What Is Sovereign AI?
            </Link>
          </div>

          {/* Related posts */}
          <div
            style={{
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              {
                href: "/blog/byzantine-council-explained",
                label: "Byzantine Council Explained",
              },
              {
                href: "/blog/maternal-covenant-explained",
                label: "The Maternal Covenant",
              },
              {
                href: "/blog/data-sovereignty-ai",
                label: "Data Sovereignty in AI",
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
                  color: "#c9a84c",
                  fontSize: "0.82rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  opacity: 0.8,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
