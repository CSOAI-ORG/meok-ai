import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Sovereign AI in the UK: What the Data Protection Act Means for Your AI Companion | MEOK Blog",
  description:
    "UK GDPR, the ICO, the Children's Code, and the Data Protection Act 2018 set strict rules for AI. Most AI companions don't comply. MEOK was built in England to meet every one of them.",
  alternates: { canonical: "https://meok.ai/blog/sovereign-ai-uk" },
  openGraph: {
    title: "Sovereign AI in the UK: What the Data Protection Act Means for Your AI Companion",
    description:
      "UK GDPR, the ICO, the Children's Code, and the Data Protection Act 2018 set strict rules for AI. Most AI companions don't comply. MEOK was built in England to meet every one of them.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/sovereign-ai-uk",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Sovereign+AI+in+the+UK&desc=What+the+Data+Protection+Act+means+for+your+AI+companion.",
        width: 1200,
        height: 630,
        alt: "Sovereign AI in the UK: What the Data Protection Act Means for Your AI Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI in the UK: What the Data Protection Act Means for Your AI Companion",
    description:
      "UK GDPR, the ICO, and the Children's Code set strict rules for AI companions. Most don't comply. MEOK was built in England to meet every one of them.",
    images: [
      "https://meok.ai/api/og?title=Sovereign+AI+in+the+UK&desc=What+the+Data+Protection+Act+means+for+your+AI+companion.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Sovereign AI in the UK: What the Data Protection Act Means for Your AI Companion",
  description:
    "UK GDPR, the ICO, the Children's Code, and the Data Protection Act 2018 set strict rules for AI. Most AI companions don't comply. MEOK was built in England to meet every one of them.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/sovereign-ai-uk",
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
    "sovereign AI UK",
    "AI data protection UK",
    "GDPR AI",
    "UK AI privacy",
    "AI rights UK",
    "ICO registration AI",
    "Children's Code AI",
    "UK GDPR AI companion",
    "Data Protection Act 2018",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does UK GDPR apply to AI companions like ChatGPT or Replika?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any AI service that processes the personal data of UK residents must comply with the UK GDPR and the Data Protection Act 2018, regardless of where the company is headquartered. This includes identifying a lawful basis for processing, respecting data subject rights, and — for services likely to be used by children — complying with the Children's Code (Age Appropriate Design Code).",
      },
    },
    {
      "@type": "Question",
      name: "What is the right to erasure and does it apply to AI conversation data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under UK GDPR Article 17, you have the right to request that a data controller delete your personal data. This applies to AI conversation logs, memory extracts, and any other identifiable data an AI service holds about you. Controllers must action erasure requests without undue delay and within one calendar month.",
      },
    },
    {
      "@type": "Question",
      name: "Does the ICO need to know about AI services that process UK residents' data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If an organisation processes personal data in the UK (or about UK residents) and is not exempt, it must register with the Information Commissioner's Office (ICO) and pay the data protection fee. Most commercial AI services that store conversation history are obligated to register. MEOK AI LABS is ICO registered.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Children's Code and how does it affect AI companion apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UK Age Appropriate Design Code (Children's Code) requires that online services likely to be accessed by children apply the highest privacy settings by default, collect only the minimum necessary data, and do not use design features that could harm children's wellbeing. AI companion apps accessible to under-18s must comply, which has significant implications for how they handle memory, data sharing, and profiling.",
      },
    },
    {
      "@type": "Question",
      name: "Can US AI companies legally store UK users' conversations under UK law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They can — but only if they satisfy the requirements for international data transfers under UK GDPR, establish a clear lawful basis for processing, and honour UK data subject rights including access, erasure, and portability. Many large US AI providers use legitimate transfer mechanisms, but their lawful basis for processing highly personal companion conversations is often unclear, and their compliance with the Children's Code is patchy.",
      },
    },
  ],
};

// ── Compliance table data ─────────────────────────────────────────────────────

type ComplianceLevel = "yes" | "no" | "partial";

interface ComplianceRow {
  dimension: string;
  chatgpt: ComplianceLevel;
  gemini: ComplianceLevel;
  replika: ComplianceLevel;
  meok: ComplianceLevel;
  note?: string;
}

const complianceData: ComplianceRow[] = [
  {
    dimension: "ICO Registered",
    chatgpt: "partial",
    gemini: "partial",
    replika: "no",
    meok: "yes",
    note: "OpenAI and Google operate under separate EU/UK transfer mechanisms; Replika is US-only registered.",
  },
  {
    dimension: "UK GDPR Lawful Basis (Companion Data)",
    chatgpt: "partial",
    gemini: "partial",
    replika: "partial",
    meok: "yes",
    note: "Legitimate interest is commonly claimed but contested for deeply personal companion conversations.",
  },
  {
    dimension: "Children's Code Compliance",
    chatgpt: "no",
    gemini: "no",
    replika: "no",
    meok: "yes",
    note: "ChatGPT and Replika have faced criticism from the ICO for inadequate child protections.",
  },
  {
    dimension: "Right to Erasure (Cryptographic)",
    chatgpt: "partial",
    gemini: "partial",
    replika: "partial",
    meok: "yes",
    note: "MEOK uses cryptographic key deletion to make data provably irrecoverable on erasure.",
  },
  {
    dimension: "Data Portability (Full Export)",
    chatgpt: "partial",
    gemini: "partial",
    replika: "no",
    meok: "yes",
    note: "MEOK provides a full structured JSON export endpoint including all memories and conversations.",
  },
  {
    dimension: "No Training on User Data (Default)",
    chatgpt: "no",
    gemini: "no",
    replika: "no",
    meok: "yes",
    note: "MEOK never trains on user conversations. ChatGPT and Gemini train by default unless opted out.",
  },
  {
    dimension: "UK Data Residency Option",
    chatgpt: "no",
    gemini: "no",
    replika: "no",
    meok: "yes",
    note: "MEOK is building UK-region hosting. Desktop OS (Summer 2026) will be fully local.",
  },
  {
    dimension: "Designated Data Protection Officer",
    chatgpt: "yes",
    gemini: "yes",
    replika: "no",
    meok: "yes",
    note: "Replika has no publicly listed DPO contact for UK users.",
  },
];

function ComplianceIcon({ level }: { level: ComplianceLevel }) {
  if (level === "yes")
    return <CheckCircle className="w-5 h-5 mx-auto" style={{ color: "#4caf92" }} />;
  if (level === "no")
    return <XCircle className="w-5 h-5 mx-auto" style={{ color: "#e05c7a" }} />;
  return <AlertCircle className="w-5 h-5 mx-auto" style={{ color: "#c9a84c" }} />;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SovereignAIUK() {
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
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              UK Privacy
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "rgba(245,240,232,0.5)",
                background: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.1)",
              }}
            >
              Legal
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
              10 min read
            </span>
          </div>

          {/* Title */}
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
            Sovereign AI in the UK: What the Data Protection Act Means for Your AI Companion
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            The UK has some of the strongest data protection laws in the world. Most AI companions
            don&apos;t comply properly. MEOK was built in England, for UK law — from the ground up.
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
              Nicholas founded MEOK AI LABS in England. He built MEOK because he believed UK citizens
              deserved an AI companion designed around their legal rights — not around a Silicon Valley
              data model. He is not a solicitor; this article is for informational purposes only.
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
          <p>
            The United Kingdom retains some of the most stringent data protection legislation on the
            planet. The <strong>Data Protection Act 2018</strong> enshrines the UK GDPR into domestic
            law, the <strong>Information Commissioner&apos;s Office</strong> actively enforces it, and the
            <strong> Age Appropriate Design Code</strong> — the Children&apos;s Code — sets a global standard
            for how digital services must treat minors. These are not aspirational guidelines; they
            carry real financial penalties and, in some cases, criminal liability.
          </p>
          <p>
            Most AI companions — ChatGPT, Gemini, Replika, and others — were designed primarily for
            American markets under American legal assumptions. When they arrived in the UK, they brought
            their data architectures with them: default training on user conversations, unclear lawful
            bases, and erasure processes that are neither cryptographic nor prompt. UK users deserve
            better. MEOK was built here, from the start, to meet every obligation that UK law imposes.
          </p>

          <h2>What does UK GDPR say about AI and personal data?</h2>
          <p>
            The UK General Data Protection Regulation — retained post-Brexit as a matter of domestic
            law and amended by the Data Protection Act 2018 — governs how personal data is collected,
            processed, stored, and transferred. For AI companions, several principles are directly
            relevant.
          </p>
          <p>
            <strong>Lawful basis for processing.</strong> Every time an AI service processes personal
            data, it must point to one of the six lawful bases set out in UK GDPR Article 6: consent,
            contract, legal obligation, vital interests, public task, or legitimate interests. For a
            conversational AI companion that stores deeply personal disclosures — mental health,
            relationships, daily life — &ldquo;legitimate interests&rdquo; is a contested basis. Consent, freely
            given and specific, is the cleanest option, but it must be real consent, not a buried
            checkbox in a 40-page privacy policy.
          </p>
          <p>
            <strong>Data minimisation.</strong> Article 5(1)(c) requires that personal data be
            &ldquo;adequate, relevant and limited to what is necessary&rdquo; for the purpose. An AI companion
            that retains years of conversation transcripts in identifiable form, used to improve
            corporate models, struggles to satisfy this principle.
          </p>
          <p>
            <strong>Purpose limitation.</strong> Data collected for one purpose — delivering a personal
            companion experience — cannot then be repurposed for model training without a new lawful
            basis and, in most cases, fresh consent.
          </p>
          <p>
            <strong>Right to erasure.</strong> UK GDPR Article 17 gives individuals the right to have
            their personal data deleted. For AI services, this means not just removing the display of
            a conversation, but actually deleting the underlying data — including any derived memories,
            embeddings, or model fine-tuning inputs derived from it.
          </p>

          <h2>Can US AI companies legally store your conversations under UK law?</h2>
          <p>
            Yes — but the conditions are demanding. Under UK GDPR Chapter V, personal data can only
            be transferred to countries outside the UK if adequate protections are in place.
            The UK has issued adequacy decisions for a limited number of countries, and for others,
            companies must rely on mechanisms such as <strong>International Data Transfer Agreements
            (IDTAs)</strong> or binding corporate rules. The United States is not an adequacy country;
            US companies must use IDTAs or the UK Extension to the EU–US Data Privacy Framework.
          </p>
          <p>
            The transfer mechanism is only the first hurdle. The company must still satisfy all
            substantive UK GDPR obligations: lawful basis, data minimisation, purpose limitation,
            security, and rights fulfilment. Several major AI providers have relied on vague
            &ldquo;legitimate interests&rdquo; assessments for processing highly sensitive companion
            conversations — an approach the ICO has signalled it will scrutinise closely as AI
            companion use grows. Honest assessment: many US AI companies operate in a grey zone of
            technical legal compliance while falling short of the spirit of UK data law.
          </p>

          <h2>What is the right to erasure and does your AI obey it?</h2>
          <p>
            The right to erasure — sometimes called the &ldquo;right to be forgotten&rdquo; — requires a data
            controller to delete your personal data without undue delay when you request it, unless
            one of a limited number of exceptions applies. For AI companions, this means:
          </p>
          <ul>
            <li>Conversation history must be deleted, not merely hidden from the interface.</li>
            <li>Any semantic memories, embeddings, or summaries derived from those conversations must be deleted.</li>
            <li>If your data was used in model fine-tuning, the controller must explain how they intend to address this — machine unlearning is an active research area with no universal solution.</li>
            <li>The deletion must be actioned within one calendar month, with an extension possible for complex requests.</li>
          </ul>
          <p>
            MEOK handles erasure through <strong>cryptographic key deletion</strong>. All stored
            memories and conversations are encrypted with a per-user AES-GCM-256 key. When you
            request deletion, the encryption key is destroyed first, making the underlying data
            mathematically irrecoverable before the physical deletion sweep completes. This is
            the gold standard for provable erasure — and it is what UK GDPR demands.
          </p>

          <h2>What is the ICO and why does it matter for AI companions?</h2>
          <p>
            The <strong>Information Commissioner&apos;s Office</strong> is the UK&apos;s independent regulator
            for data protection and privacy. It is empowered to investigate complaints, audit
            organisations, issue enforcement notices, and levy fines of up to £17.5 million or
            4% of global annual turnover — whichever is higher — for serious infringements.
          </p>
          <p>
            Any organisation that processes personal data in the UK and is not exempt must register
            with the ICO and pay the annual data protection fee. For commercial AI services that
            store conversation history, this is not optional. The ICO has already investigated
            several AI companies — most notably issuing a warning to Replika&apos;s operator Luka, Inc.
            in 2023 regarding the processing of children&apos;s data — and has publicly stated that AI
            is a regulatory priority.
          </p>
          <p>
            <strong>MEOK AI LABS is ICO registered.</strong> Registration is publicly verifiable on
            the ICO register. This is not a marketing claim; it is a legal obligation we take
            seriously.
          </p>

          <h2>How is MEOK AI LABS compliant with UK data law?</h2>
          <p>
            MEOK was designed from the ground up to operate within the UK legal framework.
            Compliance is not a bolt-on; it is an architectural constraint.
          </p>
          <p>
            <strong>ICO registration.</strong> MEOK AI LABS is a registered data controller with the
            Information Commissioner&apos;s Office.
          </p>
          <p>
            <strong>Lawful basis.</strong> MEOK processes companion data under a clear contractual
            basis — it is necessary to deliver the service you have requested. We do not rely on
            opaque legitimate interests assessments for the core processing of your conversations.
          </p>
          <p>
            <strong>Privacy by design.</strong> UK GDPR Article 25 requires that data protection
            be considered from the earliest stages of product design. MEOK&apos;s encrypted vault
            architecture, per-user key management, and row-level database security were all
            specified at the design stage, not added to an existing system after the fact.
          </p>
          <p>
            <strong>No default training.</strong> MEOK never trains on your conversations. This is
            not a setting buried in account preferences — it is the architectural default and the
            contractual commitment in our terms of service.
          </p>
          <p>
            <strong>UK data residency.</strong> MEOK is actively building UK-region hosting options.
            The forthcoming Desktop OS (Summer 2026) will process all data entirely on your own
            hardware — making international transfer law irrelevant because no transfer occurs.
          </p>

          <h2>What is the Children&apos;s Code and does it apply to AI?</h2>
          <p>
            The <strong>Age Appropriate Design Code</strong> — known as the Children&apos;s Code — came
            into force in September 2021. It is a statutory code of practice issued under the
            Data Protection Act 2018, and it applies to any online service &ldquo;likely to be accessed
            by children&rdquo; in the UK. A service need not be explicitly targeted at children to be
            in scope; if it is likely that under-18s will use it, the Code applies.
          </p>
          <p>
            For AI companion services, the implications are significant:
          </p>
          <ul>
            <li><strong>Privacy settings must be high by default</strong> — no dark patterns nudging children towards sharing more data.</li>
            <li><strong>Data minimisation</strong> — only collect data strictly necessary for the service a child is using.</li>
            <li><strong>No profiling</strong> — unless you can demonstrate a compelling reason and appropriate safeguards.</li>
            <li><strong>Geolocation off by default</strong> for users under 18.</li>
            <li><strong>Nudge techniques are prohibited</strong> — you cannot use design tricks to encourage children to share more personal data or extend their usage time.</li>
            <li><strong>Best interests of the child</strong> must be a primary consideration in all design decisions.</li>
          </ul>
          <p>
            Several AI companion services — including Replika, which actively markets itself as an
            emotional companion — have faced regulatory pressure under the Children&apos;s Code. MEOK
            applies Children&apos;s Code standards to all users under 18 by default, with enhanced
            protections in Guardian mode for children whose accounts are linked to a parent or carer.
          </p>

          <h2>What rights do you have over your AI&apos;s data about you?</h2>
          <p>
            Under the UK GDPR and Data Protection Act 2018, you hold a comprehensive set of rights
            over personal data that any organisation — including an AI service — holds about you:
          </p>
          <ul>
            <li>
              <strong>Right of access (SAR).</strong> You can request a copy of all personal data
              held about you — a Subject Access Request. The controller must respond within one
              calendar month.
            </li>
            <li>
              <strong>Right to rectification.</strong> You can require inaccurate personal data
              to be corrected or incomplete data to be completed.
            </li>
            <li>
              <strong>Right to erasure.</strong> You can request deletion of your personal data,
              subject to limited exceptions (legal obligations, freedom of expression, etc.).
            </li>
            <li>
              <strong>Right to restriction.</strong> You can ask for processing to be suspended —
              for example, while a correction request is being considered.
            </li>
            <li>
              <strong>Right to data portability.</strong> Where processing is based on consent or
              contract and carried out by automated means, you can receive your data in a structured,
              commonly used, machine-readable format, and transmit it to another controller.
            </li>
            <li>
              <strong>Right to object.</strong> You can object to processing based on legitimate
              interests, including any profiling based on those grounds.
            </li>
            <li>
              <strong>Rights related to automated decision-making.</strong> You have the right not
              to be subject to decisions based solely on automated processing that produce legal or
              similarly significant effects.
            </li>
          </ul>
          <p>
            These are not theoretical rights. Failure to respond to a Subject Access Request within
            the statutory timescale is an enforceable breach — and the ICO takes them seriously.
          </p>

          <h2>How does MEOK handle data subject requests?</h2>
          <p>
            MEOK provides self-service tooling for all UK GDPR rights, accessible directly from
            your account dashboard:
          </p>
          <p>
            <strong>Data export (portability).</strong> A single-click export endpoint generates a
            complete structured JSON archive of your entire MEOK vault — every conversation,
            every memory, every preference. The file is yours to take to any platform. No request
            to customer support required; no waiting.
          </p>
          <p>
            <strong>Full deletion (right to erasure).</strong> Selecting account deletion initiates
            the cryptographic erasure flow described above. The per-user encryption key is destroyed
            immediately; the physical data sweep completes within 24 hours; and you receive a
            deletion confirmation. The entire process is completed within the one-month statutory
            window — typically within 24 hours.
          </p>
          <p>
            <strong>Subject Access Requests.</strong> Formal SARs can be submitted via
            privacy@meok.ai. MEOK will acknowledge within 72 hours and fulfil within one calendar
            month. For straightforward requests, the self-service export tool satisfies the
            obligation immediately.
          </p>
          <p>
            <strong>Corrections and restrictions.</strong> Both can be actioned via the account
            settings panel or by contacting our data protection contact. We aim to confirm
            completion within five working days.
          </p>
        </div>

        {/* Compliance table */}
        <div className="my-12">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-2">
            UK compliance comparison: MEOK vs ChatGPT, Gemini, Replika
          </h2>
          <p className="text-sm text-[#2a2a3e]/60 mb-6">
            Based on publicly available privacy policies, ICO register records, and regulatory
            findings as at March 2026. Partial indicates incomplete, unclear, or opt-out-only
            compliance.
          </p>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: "#0d0c18" }}>
                  <th className="text-left text-xs font-bold text-white/60 uppercase tracking-wider py-3 px-4 rounded-tl-xl">
                    Compliance Dimension
                  </th>
                  <th className="text-center text-xs font-bold text-white/60 uppercase tracking-wider py-3 px-3">
                    ChatGPT
                  </th>
                  <th className="text-center text-xs font-bold text-white/60 uppercase tracking-wider py-3 px-3">
                    Gemini
                  </th>
                  <th className="text-center text-xs font-bold text-white/60 uppercase tracking-wider py-3 px-3">
                    Replika
                  </th>
                  <th
                    className="text-center text-xs font-bold uppercase tracking-wider py-3 px-3 rounded-tr-xl"
                    style={{ color: "#c9a84c" }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {complianceData.map((row, i) => (
                  <tr
                    key={row.dimension}
                    className="border-b border-[#1a1a2e]/[0.06]"
                    style={{ background: i % 2 === 0 ? "#ffffff" : "rgba(26,26,46,0.02)" }}
                  >
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-[#1a1a2e]">{row.dimension}</span>
                      {row.note && (
                        <p className="text-xs text-[#1a1a2e]/40 mt-0.5 leading-snug">
                          {row.note}
                        </p>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <ComplianceIcon level={row.chatgpt} />
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <ComplianceIcon level={row.gemini} />
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <ComplianceIcon level={row.replika} />
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <ComplianceIcon level={row.meok} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-5 mt-4 text-xs text-[#1a1a2e]/50">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" style={{ color: "#4caf92" }} />
              Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" style={{ color: "#c9a84c" }} />
              Partial / opt-out only
            </span>
            <span className="flex items-center gap-1.5">
              <XCircle className="w-4 h-4" style={{ color: "#e05c7a" }} />
              Non-compliant / unclear
            </span>
          </div>
        </div>

        {/* Closing body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            UK data protection law was not written with Silicon Valley business models in mind. It
            was written to protect people — specifically, to ensure that intimately personal data
            cannot be harvested, profiled, and monetised without meaningful consent. An AI companion,
            by definition, processes some of the most personal data that exists: your thoughts, your
            anxieties, your relationships, your daily rhythms. The UK law is clear that this data
            demands the highest standard of care.
          </p>
          <p>
            MEOK AI LABS was founded in England precisely because Nicholas Templeman believed that a
            UK company should build a UK-law-native AI companion — not adapt an American product to
            UK law as an afterthought. Sovereign AI and UK data rights are the same argument from
            different directions: your data belongs to you, the law agrees, and the technology
            should enforce it.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsovereign-ai-uk&text=Sovereign+AI+in+the+UK%3A+What+the+Data+Protection+Act+means+for+your+AI+companion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsovereign-ai-uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#1a1a2e" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Built in England &middot; ICO Registered &middot; Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Your AI companion should obey UK law by default.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK is the only AI OS built from the ground up for UK data rights. ICO registered.
              UK GDPR compliant. Cryptographic erasure. No training on your conversations. Your
              data is genuinely yours — protected by law and by architecture.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your sovereign AI free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/sovereign-ai-vs-cloud-ai"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Sovereign AI vs Cloud AI: Who Really Controls Your Data?
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/why-meok-never-trains-on-you"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#4caf92", background: "rgba(76,175,146,0.12)" }}
              >
                Privacy
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Why MEOK Never Trains on You
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
