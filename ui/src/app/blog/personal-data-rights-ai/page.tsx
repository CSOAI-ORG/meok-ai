import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Your AI Knows Everything About You. Do You Own Any of It? | MEOK AI LABS",
  description:
    "Everything you've ever told your AI lives on someone else's server. They can read it, analyse it, train on it, or lose it in a breach. Here's what AI data ownership actually means — and how to take it back.",
  alternates: { canonical: "https://meok.ai/blog/personal-data-rights-ai" },
  keywords: [
    "AI data ownership",
    "personal data rights AI",
    "AI privacy rights",
    "who owns AI data",
    "data sovereignty AI",
    "GDPR AI conversations",
    "AI data portability",
  ],
  openGraph: {
    title: "Your AI Knows Everything About You. Do You Own Any of It?",
    description:
      "Everything you've ever told your AI lives on someone else's server. They can read it, analyse it, train on it, or lose it in a breach. Here's what AI data ownership actually means.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/personal-data-rights-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Your+AI+Knows+Everything+About+You&desc=Do+you+own+any+of+it%3F",
        width: 1200,
        height: 630,
        alt: "Your AI Knows Everything About You. Do You Own Any of It?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your AI Knows Everything About You. Do You Own Any of It?",
    description:
      "Everything you've told your AI is on someone else's server. They can read it, sell insights from it, or lose it in a breach. Time to ask harder questions.",
    images: [
      "https://meok.ai/api/og?title=Your+AI+Knows+Everything+About+You&desc=Do+you+own+any+of+it%3F",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Your AI Knows Everything About You. Do You Own Any of It?",
  description:
    "Everything you've ever told your AI lives on someone else's server. They can read it, analyse it, train on it, or lose it in a breach. Here's what AI data ownership actually means — and how to take it back.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/personal-data-rights-ai",
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
  inLanguage: "en-GB",
  mainEntityOfPage: "https://meok.ai/blog/personal-data-rights-ai",
  keywords:
    "AI data ownership, personal data rights AI, AI privacy rights, who owns AI data, data sovereignty AI",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who owns the data you give to AI companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under most current terms of service, AI companies own or have a perpetual licence to use the data you submit. When you type a message into ChatGPT, Claude, or Gemini, that conversation is stored on their servers and is subject to their privacy policy — not yours. You may have legal rights over your personal data under GDPR or CCPA, but ownership in the contractual sense belongs to the platform.",
      },
    },
    {
      "@type": "Question",
      name: "Do AI companies train on your personal conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By default, many do. OpenAI trains on free-tier conversations unless you opt out via Settings → Data Controls. Google uses Gemini conversations to improve its services unless you disable activity controls. Anthropic retains conversations for up to 90 days for safety and trust purposes. Microsoft Copilot's data practices depend on whether you are using a personal or enterprise account. MEOK does not train on your conversations — architecturally, not just by policy.",
      },
    },
    {
      "@type": "Question",
      name: "What rights do I have over my AI data under UK law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under UK GDPR, you have the right to access a copy of your personal data (Subject Access Request), the right to erasure ('right to be forgotten'), the right to data portability (receive your data in a machine-readable format), and the right to rectification (correct inaccurate data). AI companies operating in the UK must honour these rights within one calendar month of request.",
      },
    },
    {
      "@type": "Question",
      name: "What is data portability in AI and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data portability means you can receive a copy of your personal data in a structured, machine-readable format and transfer it to another service. In AI, this should mean you could take your ChatGPT memories to Claude, or your Gemini conversation history to a new provider, without losing your context. Currently, no mainstream AI offers genuine memory portability — your relationship with your AI is locked to that platform.",
      },
    },
    {
      "@type": "Question",
      name: "What would AI data sovereignty actually look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "True AI data sovereignty means your personal data and AI memories are encrypted with keys only you hold, stored in a format you can export, portable to any compatible service, and deletable on your terms with cryptographic proof of deletion. It means no company — including the one that built your AI — can read, sell, or train on your data without your explicit, revocable consent. MEOK is built on this architecture.",
      },
    },
  ],
};

// ── Comparison table ──────────────────────────────────────────────────────────

type DataRightsLevel = "yes" | "no" | "partial";

interface DataRightsRow {
  dimension: string;
  chatgpt: DataRightsLevel;
  claude: DataRightsLevel;
  gemini: DataRightsLevel;
  meok: DataRightsLevel;
  note?: string;
}

const dataRightsTable: DataRightsRow[] = [
  {
    dimension: "You legally own your data (not licensed back to you)",
    chatgpt: "no",
    claude: "no",
    gemini: "no",
    meok: "yes",
    note: "Most platforms take a broad perpetual licence over submitted content. MEOK does not.",
  },
  {
    dimension: "No training on conversations by default",
    chatgpt: "no",
    claude: "partial",
    gemini: "no",
    meok: "yes",
    note: "OpenAI and Google train by default. Anthropic retains for 90 days (safety). MEOK: architecturally impossible.",
  },
  {
    dimension: "Encryption keys held by the user",
    chatgpt: "no",
    claude: "no",
    gemini: "no",
    meok: "yes",
    note: "MEOK derives encryption keys client-side. The server stores only ciphertext.",
  },
  {
    dimension: "Full memory export in open format",
    chatgpt: "partial",
    claude: "no",
    gemini: "partial",
    meok: "yes",
    note: "ChatGPT and Gemini offer limited data exports. Neither exports structured AI memories in portable form.",
  },
  {
    dimension: "Cryptographic deletion (provably irrecoverable)",
    chatgpt: "no",
    claude: "no",
    gemini: "no",
    meok: "yes",
    note: "MEOK deletes the encryption key, rendering all stored ciphertext permanently unreadable.",
  },
  {
    dimension: "GDPR Subject Access Request (30-day)",
    chatgpt: "yes",
    claude: "yes",
    gemini: "yes",
    meok: "yes",
    note: "All four comply with SAR obligations, though scope of data returned varies.",
  },
  {
    dimension: "Memory portability (take your memories to another AI)",
    chatgpt: "no",
    claude: "no",
    gemini: "no",
    meok: "yes",
    note: "MEOK exports memories as structured JSON. No mainstream competitor offers this.",
  },
  {
    dimension: "Data remains private if company is acquired",
    chatgpt: "no",
    claude: "no",
    gemini: "no",
    meok: "yes",
    note: "MEOK's cryptographic architecture means an acquirer inherits only ciphertext — not your plaintext.",
  },
];

function RightsIcon({ level }: { level: DataRightsLevel }) {
  if (level === "yes")
    return <CheckCircle className="w-5 h-5 mx-auto" style={{ color: "#4caf92" }} />;
  if (level === "no")
    return <XCircle className="w-5 h-5 mx-auto" style={{ color: "#e05c7a" }} />;
  return <AlertCircle className="w-5 h-5 mx-auto" style={{ color: "#c9a84c" }} />;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PersonalDataRightsAI() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Data Rights
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "rgba(245,240,232,0.5)",
                background: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.1)",
              }}
            >
              AI Privacy
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              24 March 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              14 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Your AI Knows Everything About You. Do You Own Any of It?
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Everything you&apos;ve ever told your AI is stored on someone else&apos;s server. That company
            can read it, analyse it, sell insights from it, or lose it in a breach. It&apos;s time to
            ask who actually owns your relationship with your AI.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm">Nicholas Templeman</p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">Founder, MEOK AI LABS · Built in England</p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas founded MEOK AI LABS because he believed your AI should serve you — not
              harvest you. He is not a solicitor; this article is for informational purposes and
              does not constitute legal advice.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-colors hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base
            [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc
            [&_li]:text-base"
        >
          {/* ── Intro ── */}
          <p>
            Think about the last conversation you had with an AI. Perhaps you described an argument
            with your partner. Maybe you talked through a health scare. You might have shared your
            salary, your location, your anxieties about the future. You probably typed it all
            without a second thought — because the interface felt intimate, private, almost like a
            journal.
          </p>
          <p>
            It is not a journal. Every word you have ever typed into a mainstream AI assistant is
            sitting on a server in a data centre you have never visited, owned by a company whose
            priorities are not yours. That company can read it. Their contractors can read it. A
            regulator can subpoena it. A hacker can steal it. And in most cases, if that company is
            acquired tomorrow, the new owners inherit every confession you have ever made.
          </p>
          <p>
            This article is not here to frighten you. It is here to give you the facts — the legal
            reality, the technical reality, and the questions you should be asking before you trust
            any AI with your inner life.
          </p>

          {/* ── Section 1 ── */}
          <h2 id="who-owns-ai-data">
            Who actually owns the data you give to AI companies?
          </h2>
          <p>
            The legal answer, under most current terms of service, is: they do. Or more precisely,
            you retain nominal ownership of your content but you grant the AI company a broad,
            perpetual, irrevocable licence to use it for almost any purpose they care to define.
          </p>
          <p>
            OpenAI&apos;s terms of service state that you own your input and output, but that you grant
            OpenAI &ldquo;a worldwide, non-exclusive, royalty-free, transferable, sub-licensable licence&rdquo; to
            use your content to provide and improve the service. The word &ldquo;improve&rdquo; is doing
            significant work there. Google&apos;s terms contain similar language. Anthropic&apos;s are
            somewhat narrower, but still reserve rights to use conversations for safety and quality
            purposes.
          </p>
          <p>
            The practical consequence is this: if you disclose something sensitive to a mainstream
            AI today, you have, in effect, handed a copy to a corporation on terms that heavily
            favour them. You cannot take it back. You cannot audit how it was used. You can request
            deletion under GDPR, and they must comply — but you have no way to verify that the
            deletion was complete, or that derived data (model weights adjusted by your words)
            was ever removed.
          </p>
          <div
            className="rounded-xl p-6 my-2"
            style={{ background: "rgba(201,168,76,0.08)", borderLeft: "3px solid #c9a84c" }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: "#c9a84c" }}>The key distinction</p>
            <p className="text-sm leading-relaxed" style={{ color: "#2a2a3e" }}>
              Owning your data means controlling it — who can read it, where it lives, and when it
              is destroyed. A licence-back arrangement is not ownership. It is a gift with conditions
              attached.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <h2 id="what-do-ai-companies-do-with-your-conversations">
            What do AI companies do with your conversations?
          </h2>
          <p>
            Four things, roughly in order of how often they happen:
          </p>
          <ol className="list-decimal pl-5 space-y-3 my-2" style={{ color: "#2a2a3e" }}>
            <li>
              <strong>Provide the service.</strong> Your message is decrypted on arrival at their
              server, passed to the model, and a response is generated. This is the transaction you
              signed up for. Everything else on this list is the price you pay for it.
            </li>
            <li>
              <strong>Store and retain.</strong> Most services retain your conversation history
              indefinitely (or until you delete it), associated with your account. This is the raw
              material for everything below.
            </li>
            <li>
              <strong>Improve the product.</strong> This is the polite phrase for training new
              models, fine-tuning existing ones, and conducting behavioural research on aggregate
              patterns in user conversations. Your anxiety, your relationship dynamics, your
              political opinions — all feeding into the next generation of products.
            </li>
            <li>
              <strong>Expose it to risk.</strong> Every dataset that exists can be breached. In
              2023, a ChatGPT bug briefly exposed other users&apos; chat histories. In 2024, Slack
              faced backlash for similar data practice disclosures. The more intimate the AI, the
              more catastrophic the breach.
            </li>
          </ol>
          <p>
            There is a fifth category that rarely gets discussed: regulatory disclosure. If a
            government body subpoenas an AI company for records relating to a user, and that company
            holds plaintext conversation logs, they have no technical defence against compliance.
            They hand over the data. This is not hypothetical — it has happened in criminal
            investigations.
          </p>

          {/* ── Section 3 ── */}
          <h2 id="do-ai-companies-train-on-your-conversations">
            Do AI companies train on your personal conversations?
          </h2>
          <p>
            Let&apos;s go through the major players specifically, because the details matter.
          </p>
          <p>
            <strong>OpenAI (ChatGPT).</strong> Free-tier users are opted in to model improvement by
            default. To opt out: Settings → Data Controls → toggle off &ldquo;Improve the model for
            everyone.&rdquo; Even with opt-out, your conversations transit their servers in plaintext.
            ChatGPT Enterprise and API customers have stronger protections — no training by default,
            and contractual guarantees. The 600 million people on the free tier do not have
            those protections.
          </p>
          <p>
            <strong>Anthropic (Claude).</strong> Anthropic states it does not use Claude.ai
            conversations to train its models by default. However, conversations are retained for
            up to 90 days for safety and trust-and-safety review purposes. Anthropic&apos;s privacy
            policy is more restrained than OpenAI&apos;s, but your conversations still exist in
            plaintext on their servers during that window.
          </p>
          <p>
            <strong>Google (Gemini).</strong> Google uses Gemini conversations to &ldquo;improve Google
            products and machine-learning technologies&rdquo; unless you turn off Gemini Apps Activity
            in your Google account. Conversations can be reviewed by trained reviewers. Given
            Google&apos;s broader data ecosystem, Gemini conversations can also inform personalisation
            across Google&apos;s advertising infrastructure.
          </p>
          <p>
            <strong>Microsoft (Copilot).</strong> Microsoft&apos;s data practices vary substantially by
            product tier. Consumer Copilot follows Microsoft&apos;s general privacy policy, which
            permits use of data to improve services. Microsoft 365 Copilot in an enterprise context
            has significantly stronger protections. If you are using Copilot through a personal
            Microsoft account, assume training opt-out is not the default.
          </p>
          <div
            className="rounded-xl p-6 my-2"
            style={{ background: "rgba(201,168,76,0.08)", borderLeft: "3px solid #c9a84c" }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: "#c9a84c" }}>The pattern</p>
            <p className="text-sm leading-relaxed" style={{ color: "#2a2a3e" }}>
              In every case, the privacy protection is a setting — a policy instrument — not a
              structural constraint. Policies change. Settings reset. Companies get acquired.
              Cryptography does not change retroactively.
            </p>
          </div>

          {/* ── Section 4 ── */}
          <h2 id="ai-data-rights-uk-law">
            What rights do you have over your AI data under UK law?
          </h2>
          <p>
            UK GDPR — retained post-Brexit as domestic law under the Data Protection Act 2018 —
            gives you a meaningful set of rights over personal data held by any organisation
            processing data about UK residents. Here is what you are entitled to:
          </p>
          <div className="space-y-4 my-2">
            {[
              {
                right: "Right of access (Subject Access Request)",
                detail:
                  "You can request a copy of all personal data an AI company holds about you. They must respond within one calendar month. This includes conversation logs, any profile or memory data, and records of how your data has been used.",
              },
              {
                right: "Right to erasure ('right to be forgotten')",
                detail:
                  "You can request that your personal data be deleted. AI companies must comply unless they have a compelling legal basis for retention. Crucially, this should cover derived data — memories, embeddings, fine-tuning inputs — not just the raw transcript.",
              },
              {
                right: "Right to data portability",
                detail:
                  "Under Article 20, you have the right to receive your personal data in a structured, commonly used, machine-readable format and to transmit it to another controller. This is the legal basis for AI memory portability — but in practice, no mainstream AI platform honours it meaningfully.",
              },
              {
                right: "Right to rectification",
                detail:
                  "If an AI system holds inaccurate personal data about you — incorrect memories, wrong profile information — you can require it to be corrected.",
              },
            ].map(({ right, detail }) => (
              <div
                key={right}
                className="rounded-xl p-5"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,26,46,0.08)",
                }}
              >
                <p className="font-bold text-sm mb-1" style={{ color: "#1a1a2e" }}>
                  {right}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#2a2a3e" }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
          <p>
            These rights exist on paper. Exercising them is another matter. Filing a Subject Access
            Request with a US AI company as a UK citizen involves identifying the correct legal
            entity, understanding their transfer mechanisms, and waiting. The system works — slowly,
            and with friction. It was not designed for an era in which 600 million people are having
            intimate daily conversations with AI.
          </p>

          {/* ── Section 5 ── */}
          <h2 id="data-portability-ai">
            What is data portability and why doesn&apos;t any AI offer it?
          </h2>
          <p>
            Data portability, in the context of AI, should mean this: everything your AI has
            learned about you — your preferences, your memories, your communication style, your
            history — should be yours to take with you. If you leave ChatGPT for Claude, or Claude
            for MEOK, your AI should be able to greet you as a person it knows, not a stranger.
          </p>
          <p>
            This does not happen. Your ChatGPT &ldquo;memory&rdquo; — the collection of facts the model has
            been instructed to remember about you — cannot be exported to Claude. Your Gemini
            personalisation does not transfer to Copilot. The moment you leave a platform, you
            start again from zero. The AI knows everything about you. You own none of it.
          </p>
          <p>
            The reason no mainstream AI offers genuine portability is straightforward: your
            personalised relationship with their AI is a retention mechanism. The longer you use a
            platform, the more it knows about you, and the harder it becomes to leave. This is
            deliberate lock-in, dressed up as a feature. Under GDPR Article 20, you have a legal
            right to portability — but enforcing it against a company whose servers hold your data
            in a proprietary format requires legal action, not a download button.
          </p>

          {/* ── Section 6 ── */}
          <h2 id="ai-data-sovereignty">
            What would AI data sovereignty actually look like?
          </h2>
          <p>
            True data sovereignty in AI has four properties:
          </p>
          <ol className="list-decimal pl-5 space-y-3 my-2" style={{ color: "#2a2a3e" }}>
            <li>
              <strong>Your encryption keys.</strong> Data about you is encrypted with a key that
              only you hold. The company storing your data cannot read it — they hold ciphertext,
              not plaintext. This is not a policy; it is a mathematical constraint.
            </li>
            <li>
              <strong>Open, portable format.</strong> Your memories, your conversation history, your
              AI relationship — all stored in a documented, open format that any compatible system
              can import. Leaving a platform should cost you nothing except the time to migrate.
            </li>
            <li>
              <strong>Deletable on your terms.</strong> Deletion should be cryptographic. Deleting
              the encryption key makes every piece of stored data permanently unreadable — not
              flagged for deletion, not queued for purging, but mathematically irrecoverable from
              the moment you act.
            </li>
            <li>
              <strong>Provably private.</strong> You should be able to verify, independently, that
              the system works as described. Open-source encryption libraries. Published
              architecture. Third-party audits. Privacy by design, not privacy by promise.
            </li>
          </ol>
          <p>
            This is not a fantasy. This is an engineering decision. The reason most AI companies
            have not built it is not that it is technically impossible — it is that it is
            commercially inconvenient. Data is worth money. Giving users genuine control over their
            data means giving up a revenue stream.
          </p>

          {/* ── Section 7 ── */}
          <h2 id="meok-data-ownership">
            How does MEOK handle data ownership?
          </h2>
          <p>
            MEOK was built on the premise that your AI companion should belong to you — not to the
            company that made it. Here is what that means technically:
          </p>
          <div className="space-y-4 my-2">
            {[
              {
                label: "User-held encryption keys",
                body: "MEOK derives encryption keys from factors held on your device. These keys are never transmitted to MEOK's servers. We store only ciphertext. Even with full database access, a MEOK engineer sees encrypted blobs — not your conversations.",
              },
              {
                label: "AES-256-GCM encryption",
                body: "All memories and personal data are encrypted using AES-256-GCM, the same standard used by governments and financial institutions. The GCM mode provides authenticated encryption — meaning any tampering with stored data is detectable.",
              },
              {
                label: "Cryptographic deletion",
                body: "When you delete your data, MEOK deletes the encryption key. The ciphertext becomes permanently unreadable — not recoverable by a future data request, a court order, or an acquirer. This is deletion with mathematical proof.",
              },
              {
                label: "Export in open format",
                body: "Your memories are exportable as structured JSON — a documented, open standard. You can import this into any compatible system. Your AI relationship is portable because it is yours.",
              },
            ].map(({ label, body }) => (
              <div
                key={label}
                className="rounded-xl p-5"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,26,46,0.08)",
                }}
              >
                <p className="font-bold text-sm mb-1" style={{ color: "#1a1a2e" }}>
                  {label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#2a2a3e" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 8 ── */}
          <h2 id="export-meok-memories">
            Can I export my MEOK memories?
          </h2>
          <p>
            Yes — fully and at any time. MEOK provides a complete export of all your memories and
            personal data as structured JSON, including:
          </p>
          <ul className="my-2" style={{ color: "#2a2a3e" }}>
            <li>Every memory your AI companion holds about you</li>
            <li>Timestamps and context for when each memory was formed</li>
            <li>Your preference and personality settings</li>
            <li>Conversation metadata (without raw transcripts, which are encrypted)</li>
          </ul>
          <p>
            The export is GDPR-compliant and satisfies the Article 20 right to data portability in
            both letter and spirit. You do not need to file a Subject Access Request or wait 30
            days. The download is available directly from your account dashboard.
          </p>
          <p>
            This is how it should work for every AI. It is how it works for MEOK.
          </p>

          {/* ── Section 9 ── */}
          <h2 id="meok-acquisition-data">
            What happens to my data if MEOK is acquired?
          </h2>
          <p>
            This is the question most AI companies hope you will not ask. Here is our answer.
          </p>
          <p>
            If MEOK is ever acquired, the acquiring company inherits our servers and our
            infrastructure. What they do not inherit is the ability to read your data. Because
            encryption keys are held client-side — on your device, derived from factors you
            control — the ciphertext on our servers is mathematically useless without your key.
            An acquirer cannot decrypt your memories. They cannot read your conversations.
            They cannot train a new model on your personal data.
          </p>
          <p>
            This is not a contractual promise. It is not &ldquo;we agree not to share your data with
            the acquirer.&rdquo; It is a structural property of the system. No contract can unlock
            ciphertext that was never encrypted with the acquirer&apos;s key.
          </p>
          <p>
            The only way an acquisition changes your privacy is if MEOK changes the architecture
            before that point — and that change would require your explicit re-consent to a new
            encryption model. We would rather close the company.
          </p>
        </div>

        {/* ── Comparison Table ── */}
        <div className="mt-16 mb-12">
          <h2
            className="text-2xl font-black mb-2"
            style={{ color: "#1a1a2e" }}
          >
            AI data rights: how the platforms compare
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(42,42,62,0.55)" }}>
            Eight data rights dimensions across ChatGPT, Claude, Gemini, and MEOK.
          </p>
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(26,26,46,0.08)" }}>
            <table className="w-full text-sm" style={{ background: "#ffffff" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(26,26,46,0.08)" }}>
                  <th
                    className="text-left p-4 font-bold"
                    style={{ color: "#1a1a2e", minWidth: 200 }}
                  >
                    Data right
                  </th>
                  {["ChatGPT", "Claude", "Gemini", "MEOK"].map((name) => (
                    <th
                      key={name}
                      className="text-center p-4 font-bold"
                      style={{
                        color: name === "MEOK" ? "#c9a84c" : "#1a1a2e",
                        minWidth: 80,
                      }}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRightsTable.map((row, i) => (
                  <tr
                    key={row.dimension}
                    style={{
                      borderBottom:
                        i < dataRightsTable.length - 1
                          ? "1px solid rgba(26,26,46,0.06)"
                          : undefined,
                      background: i % 2 === 0 ? "#ffffff" : "rgba(245,240,232,0.4)",
                    }}
                  >
                    <td className="p-4" style={{ color: "#2a2a3e" }}>
                      <span className="font-medium">{row.dimension}</span>
                      {row.note && (
                        <p className="text-xs mt-1" style={{ color: "rgba(42,42,62,0.45)" }}>
                          {row.note}
                        </p>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <RightsIcon level={row.chatgpt} />
                    </td>
                    <td className="p-4 text-center">
                      <RightsIcon level={row.claude} />
                    </td>
                    <td className="p-4 text-center">
                      <RightsIcon level={row.gemini} />
                    </td>
                    <td className="p-4 text-center">
                      <RightsIcon level={row.meok} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center gap-6 mt-4 text-xs" style={{ color: "rgba(42,42,62,0.5)" }}>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" style={{ color: "#4caf92" }} /> Yes
            </span>
            <span className="flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" style={{ color: "#c9a84c" }} /> Partial / opt-out required
            </span>
            <span className="flex items-center gap-1.5">
              <XCircle className="w-4 h-4" style={{ color: "#e05c7a" }} /> No
            </span>
          </div>
        </div>

        {/* ── Checklist ── */}
        <div
          className="rounded-2xl p-8 mb-16"
          style={{ background: "#0d0c18" }}
        >
          <h2
            className="text-2xl font-black mb-2"
            style={{ color: "#ffffff" }}
          >
            The AI Data Rights Checklist
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(245,240,232,0.5)" }}>
            Eight questions to ask any AI before trusting it with your life.
          </p>
          <ol className="space-y-5">
            {[
              {
                q: "Who holds the encryption keys?",
                a: "If the company holds the keys, they can read your data. Full stop. Ask specifically whether keys are client-side or server-side.",
              },
              {
                q: "Is training opt-in or opt-out?",
                a: "Opt-out means you are already contributing to training until you find the setting. Opt-in means your explicit consent is required. Demand the latter.",
              },
              {
                q: "What happens to your data in a breach?",
                a: "If conversations are stored in plaintext (or decryptable server-side), a breach exposes everything you have ever said. Ask whether the architecture limits breach impact.",
              },
              {
                q: "Can you actually delete your data?",
                a: "Not just remove it from the UI — actually delete it, including derived data and model contributions. Ask whether deletion is cryptographic or merely administrative.",
              },
              {
                q: "Can you export your memories?",
                a: "A full, structured export — not a PDF of conversation snippets. Your AI relationship should be portable. If it is not, you are locked in.",
              },
              {
                q: "What happens to your data if the company is acquired?",
                a: "Read the privacy policy for change-of-control language. If it says 'your data may be transferred as part of a business transaction,' your data is a business asset.",
              },
              {
                q: "Who can see your conversations?",
                a: "Employees? Contractors? Reviewers? Regulators? Ask specifically what categories of people have access to plaintext conversation data and under what circumstances.",
              },
              {
                q: "Is the privacy claim architectural or contractual?",
                a: "A contractual promise can be broken, renegotiated, or overridden by a court order. An architectural constraint — like client-side encryption — cannot. Know the difference.",
              },
            ].map(({ q, a }, i) => (
              <li key={q} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#f5f0e8" }}>
                    {q}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
                    {a}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-10 text-center mb-16 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d0c18 0%, #1a1630 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.14) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-5"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              MEOK AI LABS
            </span>
            <h2
              className="text-2xl font-black mb-3"
              style={{ color: "#ffffff" }}
            >
              Your AI. Your data. Your keys.
            </h2>
            <p
              className="text-base mb-8 mx-auto"
              style={{ color: "rgba(245,240,232,0.6)", maxWidth: 480 }}
            >
              MEOK is the only AI companion where you hold the encryption keys, can export every
              memory, and can delete everything — cryptographically and permanently — whenever you
              choose.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #a8832a)",
                color: "#0d0c18",
              }}
            >
              Meet your sovereign AI
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* ── Related posts ── */}
        <div>
          <h3 className="text-lg font-black mb-6" style={{ color: "#1a1a2e" }}>
            Related reading
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/why-meok-never-trains-on-you",
                tag: "Privacy",
                title: "Why MEOK Can Never Be Trained on Your Conversations",
                desc: "It's not a policy. It's architecture. The technical proof.",
              },
              {
                href: "/blog/sovereign-ai-uk",
                tag: "UK Law",
                title: "Sovereign AI in the UK: What the Data Protection Act Means for Your AI Companion",
                desc: "UK GDPR, the ICO, and the Children's Code — and how MEOK meets every obligation.",
              },
              {
                href: "/blog/sovereign-ai-vs-cloud-ai",
                tag: "Comparison",
                title: "Sovereign AI vs Cloud AI: What's the Difference?",
                desc: "A plain-English guide to the architectural choices that determine your privacy.",
              },
              {
                href: "/blog/the-memory-problem",
                tag: "AI Memory",
                title: "The Memory Problem: Why AI Can't Remember You Safely (Yet)",
                desc: "Why AI memory and privacy are in tension — and how MEOK resolves it.",
              },
            ].map(({ href, tag, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl p-5 border transition-all hover:border-[#c9a84c]/40"
                style={{
                  background: "#ffffff",
                  borderColor: "rgba(26,26,46,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-3"
                  style={{
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.1)",
                  }}
                >
                  {tag}
                </span>
                <p
                  className="font-bold text-sm mb-1 group-hover:text-[#c9a84c] transition-colors leading-snug"
                  style={{ color: "#1a1a2e" }}
                >
                  {title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(42,42,62,0.5)" }}>
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
