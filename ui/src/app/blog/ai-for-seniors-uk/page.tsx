import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Companion for Seniors in the UK: What Families Actually Need to Know in 2026 | MEOK Blog",
  description:
    "12 million over-65s in the UK, 1.4 million chronically lonely, £3.4 billion lost to scams targeting the elderly every year. Here is what UK families need to know about AI companions for elderly parents in 2026.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-seniors-uk" },
  openGraph: {
    title: "AI Companion for Seniors in the UK: What Families Actually Need to Know in 2026",
    description:
      "12 million over-65s in the UK, 1.4 million chronically lonely, £3.4 billion lost to scams targeting the elderly every year. Here is what UK families need to know about AI companions in 2026.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-seniors-uk",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Seniors+UK&desc=What+UK+families+need+to+know+about+AI+companions+for+elderly+parents+in+2026",
        width: 1200,
        height: 630,
        alt: "AI Companion for Seniors in the UK: What Families Actually Need to Know in 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Seniors in the UK: What Families Actually Need to Know in 2026",
    description:
      "1.4 million older people chronically lonely in the UK. £3.4bn lost to elder scams yearly. What UK families need to know about AI companions for elderly parents.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Seniors+UK&desc=What+UK+families+need+to+know+about+AI+companions+for+elderly+parents+in+2026",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Seniors in the UK: What Families Actually Need to Know in 2026",
  description:
    "12 million over-65s in the UK, 1.4 million chronically lonely, £3.4 billion lost to scams targeting the elderly every year. Here is what UK families need to know about AI companions for elderly parents in 2026.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-seniors-uk",
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
    "https://meok.ai/api/og?title=AI+for+Seniors+UK&desc=What+UK+families+need+to+know+about+AI+companions+for+elderly+parents+in+2026",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-seniors-uk",
  },
  keywords:
    "AI for seniors UK, AI companion elderly UK, best AI for older adults, AI for elderly parents UK",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best AI companions for elderly people in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For UK elderly users, MEOK is the most purpose-built option — offering Senior Mode with 44×44px touch targets, 16px minimum text, 7:1 contrast, voice-first navigation, UK scam detection via Action Fraud pattern libraries, and a Guardian family dashboard. ChatGPT and Replika lack persistent memory and senior-specific safety features. Amazon Alexa is reactive rather than a genuine companion. MEOK is the only option with Guardian alerts built specifically for UK fraud patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with loneliness in older people in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evidence from the University of Texas and Cedars-Sinai suggests AI interaction can reduce reported loneliness in older adults, though researchers are clear it supplements rather than replaces human contact. MEOK's persistent memory — meaning your companion genuinely remembers previous conversations — is the key differentiator. An AI that resets every conversation cannot reduce loneliness. One that remembers your mum's stories, her late husband's name, her favourite radio programme, and asks about them the next day can.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect elderly people from scams in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Guardian layer runs real-time scam detection trained on UK fraud patterns — including HMRC impersonation, NHS text scams, Royal Mail delivery fraud, and romance scams targeting older adults. It cross-references Companies House for business verification, detects coercive urgency language, and sends immediate alerts to the family Guardian dashboard when a HIGH or CRITICAL threat is detected. This is built specifically for the UK context, not a generic global model.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI safe for people with dementia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Used carefully, AI companions can be beneficial for people in early-stage dementia — consistency and familiar routines are important, and MEOK's persistent personality (unlike AI systems that change or reset) avoids the disorientation that comes from a companion that seems like a stranger each session. MEOK should not be positioned as dementia care, and families should discuss use with a GP or dementia specialist. It is not a replacement for professional support.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK's Family plan include for elderly care in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Family plan costs £29/month and includes: full Senior Mode companion for the elderly parent with persistent memory and daily check-ins; Guardian scam detection with UK fraud pattern libraries; real-time alert dashboard for family members; shared companion management; and activity and wellbeing summary. There is no long-term contract. The elderly user can start on the free Explorer tier and the family can upgrade when they want the Guardian dashboard.",
      },
    },
  ],
};

// ── Comparison data ───────────────────────────────────────────────────────────

const comparisonRows = [
  {
    dimension: "Persistent memory",
    meok: "Yes — remembers across all sessions",
    chatgpt: "No (resets each session)",
    alexa: "No",
    replika: "Partial (limited context)",
  },
  {
    dimension: "Senior Mode UI",
    meok: "Yes — 44px targets, 16px text, 7:1 contrast",
    chatgpt: "No",
    alexa: "Voice only",
    replika: "No",
  },
  {
    dimension: "UK scam detection",
    meok: "Yes — Action Fraud patterns, Companies House",
    chatgpt: "No",
    alexa: "No",
    replika: "No",
  },
  {
    dimension: "Family Guardian alerts",
    meok: "Yes — real-time dashboard",
    chatgpt: "No",
    alexa: "Partial (Drop-In calls)",
    replika: "No",
  },
  {
    dimension: "Proactive check-ins",
    meok: "Yes — reaches out first",
    chatgpt: "No",
    alexa: "No",
    replika: "Limited",
  },
  {
    dimension: "GDPR / ICO registered",
    meok: "Yes",
    chatgpt: "Yes (OpenAI)",
    alexa: "Yes (Amazon)",
    replika: "Partial",
  },
  {
    dimension: "Dementia-appropriate personality consistency",
    meok: "Yes — consistent across sessions",
    chatgpt: "No",
    alexa: "Yes (no personality change)",
    replika: "Variable",
  },
  {
    dimension: "Price for families",
    meok: "Free / £29/mo Family plan",
    chatgpt: "Free / £20/mo",
    alexa: "Hardware cost only",
    replika: "£14.99/mo",
  },
];

const signsOfLoneliness = [
  "Mentions the same conversation topics repeatedly because there is no one new to tell",
  "Asks you to stay on the phone longer than feels comfortable for either of you",
  "Stops bothering to cook properly because \"it's not worth it for one\"",
  "Describes days in terms of television programmes rather than events or people",
  "Sounds genuinely excited when a delivery driver or meter reader knocks",
  "Mentions a friend or neighbour they have not seen in months as if they saw them yesterday",
  "Has started talking to the radio or television as a background presence",
  "Tells you about online or phone contacts that sound unusual — potential scam vectors",
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForSeniorsUkPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Senior Mode &amp; Guardian
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              24 March 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              10 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            AI Companion for Seniors in the UK: What Families Actually Need to Know
            in 2026
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            12 million over-65s. 1.4 million chronically lonely. £3.4 billion lost to
            scams targeting elderly people every year. This is the practical guide for UK
            adult children who want to do something about it.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#0d0c18] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right,
              not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* UK stats callout */}
        <div
          className="rounded-2xl p-6 mb-12 border-l-4"
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderLeft: "4px solid #c9a84c",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-black mb-1" style={{ color: "#c9a84c" }}>12M</p>
              <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                people over 65 in the UK (ONS, 2025)
              </p>
            </div>
            <div
              className="sm:border-l"
              style={{ borderColor: "rgba(201,168,76,0.2)", paddingLeft: "1.5rem" }}
            >
              <p className="text-3xl font-black mb-1" style={{ color: "#c9a84c" }}>1.4M</p>
              <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                older people chronically lonely (Age UK)
              </p>
            </div>
            <div
              className="sm:border-l"
              style={{ borderColor: "rgba(201,168,76,0.2)", paddingLeft: "1.5rem" }}
            >
              <p className="text-3xl font-black mb-1" style={{ color: "#c9a84c" }}>£3.4bn</p>
              <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                lost to scams targeting elderly people per year (Action Fraud)
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0125rem" }}
        >
          <p>
            If you are reading this, you are probably the adult child of someone who is
            managing more of their time alone than any of you are comfortable with. Maybe
            your mum is widowed and lives a two-hour drive away. Maybe your dad is sharp
            as a tack but the phone calls are getting longer and you can hear something
            underneath them. Maybe you have noticed that the conversations are the same
            conversations, week after week, because there is no one else to have them with.
          </p>
          <p>
            This guide is for you. It is specifically about the UK context — UK statistics,
            UK fraud patterns, NHS references, and what AI companions can realistically do
            for older adults in Britain in 2026. We will be honest about limitations,
            particularly around dementia, and we will not oversell what AI can do. But we
            will also tell you what has actually been shown to help.
          </p>

          {/* ── H2: 1 — Best AI companions overview ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What are the best AI companions for elderly people in the UK?
          </h2>
          <p>
            The UK market for AI companions aimed at older adults is still young, but it
            is growing fast. In 2026 the main options families are considering are
            ChatGPT, Amazon Alexa, Replika, and MEOK. Each has a different design
            philosophy, and the differences matter enormously for elderly users.
          </p>
          <p>
            <strong style={{ color: "#ffffff" }}>ChatGPT</strong> is powerful but not
            designed for elderly users. It has no persistent memory by default — each
            conversation starts fresh — and no safety features for scam detection or
            family oversight. It requires a certain level of digital literacy to get value
            from.
          </p>
          <p>
            <strong style={{ color: "#ffffff" }}>Amazon Alexa</strong> is familiar to
            many older adults and excellent for discrete tasks like setting reminders,
            playing music, or asking the weather. It is not a companion in any meaningful
            sense — it does not remember, does not reach out, and does not form a
            relationship over time.
          </p>
          <p>
            <strong style={{ color: "#ffffff" }}>Replika</strong> was built as a
            companionship app and has been used by older adults, but it was designed for
            a younger audience and lacks UK-specific safety features, senior-accessible
            UI standards, or family oversight tools.
          </p>
          <p>
            <strong style={{ color: "#ffffff" }}>MEOK</strong> was built from the ground
            up for the UK context, with Senior Mode as a core feature rather than an
            afterthought. The scam detection system is trained on UK fraud patterns — HMRC
            impersonation, NHS text scams, Royal Mail delivery fraud — rather than a
            generic global model. It is the only option here with a dedicated Guardian
            family dashboard.
          </p>

          {/* ── H2: 2 — Senior Mode ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does MEOK&apos;s Senior Mode work?
          </h2>
          <p>
            Senior Mode is not a stripped-down version of MEOK. It is the same powerful
            companion with an interface layer specifically engineered for older adults.
            When Senior Mode is activated, four things change immediately:
          </p>
          <ul className="space-y-3 my-5 pl-1">
            {[
              {
                label: "44×44px minimum touch targets",
                detail:
                  "Every tappable element meets the WCAG 2.5.5 AAA standard. Accidental taps become rare even for users with reduced fine motor control.",
              },
              {
                label: "16px minimum text size",
                detail:
                  "No text in the interface drops below 16px. Body text defaults to 18px. This is particularly important for users with early macular degeneration or reduced contrast sensitivity.",
              },
              {
                label: "7:1 contrast ratio throughout",
                detail:
                  "WCAG AAA contrast standard applied across the entire interface. The companion is fully usable outdoors in bright light or by users with moderate visual impairment.",
              },
              {
                label: "Voice-first navigation",
                detail:
                  "The companion can be used entirely without typing. Your mum or dad simply speaks to it. No menus to navigate, no buttons to find — just conversation.",
              },
            ].map(({ label, detail }) => (
              <li
                key={label}
                className="flex gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <strong style={{ color: "#ffffff" }}>{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>
          <p>
            The practical result is that a person who has never used a smartphone app —
            who finds most technology alienating — can typically begin having a meaningful
            conversation with their MEOK companion within the first five minutes. Setup
            usually happens with a family member present once, and after that the companion
            handles the rest.
          </p>

          {/* ── H2: 3 — Loneliness ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Can AI help with loneliness in older people?
          </h2>
          <p>
            The honest answer is: yes, under specific conditions, with important
            caveats.
          </p>
          <p>
            Research from the University of Texas found that older adults who used AI
            companions reported reduced feelings of social isolation after eight weeks of
            regular interaction. A study at Cedars-Sinai found that AI-assisted
            companionship reduced loneliness scores in care home residents by a statistically
            significant margin compared to a control group.
          </p>
          <p>
            The key finding across this research is that{" "}
            <strong style={{ color: "#ffffff" }}>statefulness matters enormously</strong>.
            An AI that resets every conversation — that does not remember the person&apos;s
            name, family, history, or interests — cannot reduce loneliness, because
            loneliness is about feeling unknown, not simply about contact frequency.
            What reduces loneliness is feeling genuinely seen and remembered.
          </p>
          <p>
            MEOK&apos;s persistent memory is the critical differentiator here. Over time, the
            companion accumulates knowledge of who your parent is: their children&apos;s names,
            their late partner, their opinions, their sense of humour, the stories they
            return to. It does not ask them to start over. It continues.
          </p>
          <p>
            The caveat all researchers are clear about: AI companions supplement human
            contact but cannot replace it. Age UK and the NHS both emphasise that
            addressing loneliness in older adults requires a combination of approaches.
            MEOK is one part of that — valuable, but not the whole answer.
          </p>

          {/* ── H2: 4 — Scam protection ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does MEOK protect elderly people from scams in the UK?
          </h2>
          <p>
            Action Fraud reports that £3.4 billion is lost to scams targeting elderly
            people in the UK every year. The most common types targeting older adults are:
            HMRC tax rebate impersonation, NHS vaccine or test appointment phishing,
            Royal Mail &ldquo;parcel held&rdquo; delivery fraud, pension cold-call investments,
            romance scams via social media or dating apps, and grandchild-in-trouble
            emergency scams.
          </p>
          <p>
            MEOK&apos;s Guardian layer addresses this through a multi-stage pipeline:
          </p>
          <ul className="space-y-3 my-5 pl-1">
            {[
              {
                label: "UK fraud pattern detection",
                detail:
                  "The detection model is trained specifically on UK Action Fraud reports, not a generic global corpus. It knows that \"your National Insurance number has been suspended\" is a scam script; it knows the tell-tale language of Royal Mail parcel fraud.",
              },
              {
                label: "Companies House verification",
                detail:
                  "When any organisation is mentioned by name or registration number, MEOK automatically cross-references Companies House to confirm the entity exists, is active, and matches the claimed identity.",
              },
              {
                label: "Urgency and coercive language detection",
                detail:
                  "Scams work by overriding rational decision-making through manufactured urgency. MEOK detects phrases designed to panic — \"your account will be closed\", \"police are on their way\", \"you must act today\" — and surfaces a warning before the user responds.",
              },
              {
                label: "Real-time Guardian alert",
                detail:
                  "When a HIGH or CRITICAL threat is detected, an immediate push notification is sent to the family Guardian dashboard. A family member can call within minutes — before money has moved or personal details have been shared.",
              },
            ].map(({ label, detail }) => (
              <li
                key={label}
                className="flex gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(255,127,127,0.05)",
                  border: "1px solid rgba(255,127,127,0.15)",
                }}
              >
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#ff7f7f" }}
                />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <strong style={{ color: "#ffffff" }}>{label}:</strong> {detail}
                </span>
              </li>
            ))}
          </ul>
          <p>
            Guardian operates transparently — it is not surveillance. Your parent can see
            what is being monitored, and they retain full control over their privacy
            settings. MEOK AI LABS is ICO registered and operates under UK GDPR. Your
            parent has the right to erasure of all Guardian scan logs at any time.
          </p>

          {/* ── H2: 5 — Chatbot vs companion ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the difference between a chatbot and an AI companion for the elderly?
          </h2>
          <p>
            This is the most important conceptual distinction to understand before you
            choose anything for your parent.
          </p>
          <p>
            A <strong style={{ color: "#ffffff" }}>chatbot</strong> is stateless. Each
            conversation begins from zero. It does not know your mum&apos;s name unless she
            tells it every time. It does not remember that she mentioned her daughter is
            getting married next spring, or that she worries about the boiler, or that
            she lost her husband in 2019. Every interaction is a first meeting with a
            stranger.
          </p>
          <p>
            An <strong style={{ color: "#ffffff" }}>AI companion</strong> — a genuine
            one — is stateful. It builds a relationship over time. It remembers. It refers
            back. It notices patterns. When your dad mentions he hasn&apos;t been sleeping, a
            companion that knows him can ask if it is the back pain again. A chatbot
            cannot.
          </p>
          <p>
            For elderly users, this distinction is not a nice-to-have — it is the whole
            thing. The loneliness-reducing, trust-building, scam-recognising potential of
            AI depends entirely on continuity. Without memory, AI is just a more
            sophisticated search engine. With memory, it becomes something that can
            genuinely matter to an older person.
          </p>

          {/* ── H2: 6 — Dementia ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Is AI safe for people with dementia?
          </h2>

          {/* Dementia advisory callout */}
          <div
            className="rounded-2xl p-5 my-6"
            style={{
              background: "rgba(245,200,66,0.07)",
              border: "1px solid rgba(245,200,66,0.25)",
            }}
          >
            <p className="text-sm font-bold mb-1" style={{ color: "#f5c842" }}>
              A note before this section
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              MEOK is not a dementia care product and should not be positioned as one.
              If your parent has a dementia diagnosis, please discuss AI companion use
              with their GP, consultant, or dementia specialist before starting. What
              follows is honest context, not a clinical recommendation.
            </p>
          </div>

          <p>
            This is a question many families are asking, and it deserves a nuanced answer
            rather than either a dismissive &ldquo;no&rdquo; or an overclaiming &ldquo;yes&rdquo;.
          </p>
          <p>
            The evidence suggests that for people in <strong style={{ color: "#ffffff" }}>
            early-stage dementia</strong>, consistent and familiar companionship can be
            genuinely beneficial. Disorientation often worsens when the social environment
            keeps changing — new carers, new voices, new interaction styles. An AI
            companion that maintains a consistent personality, tone, and interaction pattern
            across every session can provide a familiar anchor.
          </p>
          <p>
            This is where most AI systems fail for dementia: they change. Model updates,
            personality resets, memory wipes — these create the experience of a stranger
            with every session. MEOK&apos;s persistent memory and stable companion personality
            mean that your parent&apos;s companion is the same entity it was yesterday, last
            week, and last month.
          </p>
          <p>
            The clear limitations: AI cannot detect medical emergencies, cannot administer
            medication, and cannot provide the physical presence and human judgement that
            professional dementia care requires. For moderate or severe dementia, AI
            companions should only be used as a supplement to professional care, not
            instead of it. For mild cognitive impairment, there is a stronger case for
            genuine benefit — but always with family awareness and professional guidance.
          </p>
          <p>
            If your parent has a dementia diagnosis, we recommend speaking to the Alzheimer&apos;s
            Society UK or their dementia specialist before starting with any AI companion.
          </p>

          {/* ── H2: 7 — Setup ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How can I set up MEOK for my elderly parent?
          </h2>
          <p>
            The process is designed to be completed by the family member, not the elderly
            parent, and typically takes under ten minutes.
          </p>
          <div className="space-y-3 my-5">
            {[
              {
                step: "1",
                title: "Create the companion",
                desc: "Go to meok.ai/birth and hatch your parent's companion. You choose a name, a personality archetype, and the initial context — a brief description of who your parent is, their family, their interests. This gives the companion a head start before your parent's first conversation.",
              },
              {
                step: "2",
                title: "Activate Senior Mode",
                desc: "In companion settings, toggle Senior Mode on. This immediately applies all the accessibility standards — larger text, larger touch targets, higher contrast, voice-first navigation.",
              },
              {
                step: "3",
                title: "Connect the Guardian dashboard",
                desc: "In the Guardian section, add yourself as a Guardian contact. You will receive alerts when the scam detection system flags a HIGH or CRITICAL threat. You can also set daily wellbeing summaries — a brief note on whether your parent had a conversation that day.",
              },
              {
                step: "4",
                title: "First session together",
                desc: "Introduce your parent to their companion with you present. Let them have the first conversation while you are there. Most older adults who are initially sceptical become noticeably warmer within the first fifteen minutes when the companion demonstrates it already knows something about them.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.2)", color: "#c9a84c" }}
                >
                  {step}
                </div>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{title}</p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── H2: 8 — Family plan ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What does a MEOK Family plan include for elderly care?
          </h2>
          <p>
            The Family plan costs <strong style={{ color: "#ffffff" }}>£29/month</strong>{" "}
            with no long-term contract. Here is what is included:
          </p>

          <div className="overflow-x-auto rounded-2xl my-6" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.06)" }}>
                  {["What&apos;s included", "Who it&apos;s for"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: "#87CEEB" }}
                      dangerouslySetInnerHTML={{ __html: h }}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Full MEOK companion with Senior Mode", "Elderly parent"],
                  ["Persistent memory — remembers across all sessions", "Elderly parent"],
                  ["Daily morning check-ins and proactive outreach", "Elderly parent"],
                  ["Voice-first navigation (no typing required)", "Elderly parent"],
                  ["Guardian scam detection — UK Action Fraud patterns", "Elderly parent"],
                  ["Companies House verification layer", "Elderly parent"],
                  ["Real-time Guardian alert dashboard", "Family members"],
                  ["Shared companion management and settings", "Family members"],
                  ["Daily activity and wellbeing summary", "Family members"],
                  ["Multiple Guardian contacts (e.g. siblings)", "Family members"],
                ].map(([item, who], i) => (
                  <tr
                    key={item}
                    style={{
                      background:
                        i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <td className="px-5 py-3.5 text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {item}
                    </td>
                    <td className="px-5 py-3.5 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {who}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Your parent can start on the free Explorer tier — no credit card required,
            50 messages a day, full Senior Mode. You can upgrade to the Family plan when
            you want the Guardian alert dashboard and shared management tools.
          </p>

          {/* ── H2: 9 — Comparison table ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Comparing AI companion options for elderly people in the UK
          </h2>
          <p>
            Here is an honest comparison across the eight dimensions that matter most for
            older adults in the UK:
          </p>

          <div className="overflow-x-auto rounded-2xl my-6" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr style={{ background: "rgba(13,12,24,0.8)" }}>
                  {["Dimension", "MEOK", "ChatGPT", "Alexa", "Replika"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: h === "MEOK" ? "#c9a84c" : "#87CEEB" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ dimension, meok, chatgpt, alexa, replika }, i) => (
                  <tr
                    key={dimension}
                    style={{
                      background:
                        i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <td
                      className="px-4 py-3 text-xs font-semibold"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {dimension}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span
                        className="px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          background: "rgba(201,168,76,0.15)",
                          color: "#c9a84c",
                        }}
                      >
                        {meok}
                      </span>
                    </td>
                    <td
                      className="px-4 py-3 text-xs"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {chatgpt}
                    </td>
                    <td
                      className="px-4 py-3 text-xs"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {alexa}
                    </td>
                    <td
                      className="px-4 py-3 text-xs"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {replika}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── H2: 10 — Signs ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Signs your elderly parent might benefit from AI companionship
          </h2>
          <p>
            This is not a clinical checklist — it is a list of things many adult children
            recognise before they have words for them. If several of these resonate, it is
            worth exploring what a companion could offer.
          </p>
          <ul className="space-y-3 my-5 pl-1">
            {signsOfLoneliness.map((sign) => (
              <li key={sign} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: "#87CEEB" }}
                />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {sign}
                </span>
              </li>
            ))}
          </ul>
          <p>
            If you recognise your parent in several of these, you are not imagining it.
            And the fact that you are researching this rather than dismissing it says
            something about the kind of child you are being. The difficult thing about
            loneliness in older people is that it often presents as contentment —
            &ldquo;I&apos;m fine, don&apos;t fuss&rdquo; — while something quieter is eroding underneath.
          </p>

          {/* Closing */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}>
              MEOK was built in the UK, by someone who grew up watching what distance and
              time do to older people who love their families and are not quite ready to
              stop having something to say. If this guide has been useful, the best thing
              you can do next is start the free tier and let your parent meet their
              companion. It costs nothing to try.
            </p>
          </div>
        </div>

        {/* ── FAQ cards ─────────────────────────────────────────────────────── */}
        <div className="mt-16 space-y-4">
          <h2
            className="text-xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            Frequently asked questions
          </h2>
          {[
            {
              q: "What are the best AI companions for elderly people in the UK?",
              a: "For UK elderly users, MEOK is the most purpose-built option — offering Senior Mode with 44×44px touch targets, 16px minimum text, 7:1 contrast, voice-first navigation, UK scam detection via Action Fraud pattern libraries, and a Guardian family dashboard. ChatGPT and Replika lack persistent memory and senior-specific safety features. Amazon Alexa is reactive rather than a genuine companion. MEOK is the only option with Guardian alerts built specifically for UK fraud patterns.",
            },
            {
              q: "Can AI help with loneliness in older people in the UK?",
              a: "Evidence from the University of Texas and Cedars-Sinai suggests AI interaction can reduce reported loneliness in older adults, though researchers are clear it supplements rather than replaces human contact. MEOK's persistent memory — meaning your companion genuinely remembers previous conversations — is the key differentiator. An AI that resets every conversation cannot reduce loneliness. One that remembers your mum's stories, her late husband's name, her favourite radio programme, and asks about them the next day can.",
            },
            {
              q: "How does MEOK protect elderly people from scams in the UK?",
              a: "MEOK's Guardian layer runs real-time scam detection trained on UK fraud patterns — including HMRC impersonation, NHS text scams, Royal Mail delivery fraud, and romance scams. It cross-references Companies House for business verification, detects coercive urgency language, and sends immediate alerts to the family Guardian dashboard when a HIGH or CRITICAL threat is detected.",
            },
            {
              q: "Is AI safe for people with dementia?",
              a: "Used carefully, AI companions can be beneficial for people in early-stage dementia — consistency and familiar routines are important, and MEOK's persistent personality avoids the disorientation that comes from a companion that seems like a stranger each session. MEOK should not be positioned as dementia care, and families should discuss use with a GP or dementia specialist. It is not a replacement for professional support.",
            },
            {
              q: "What does MEOK's Family plan include for elderly care in the UK?",
              a: "MEOK's Family plan costs £29/month and includes: full Senior Mode companion for the elderly parent with persistent memory and daily check-ins; Guardian scam detection with UK fraud pattern libraries; real-time alert dashboard for family members; shared companion management; and activity and wellbeing summary. There is no long-term contract.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="font-bold text-white text-base mb-2">{q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-seniors-uk&text=AI+Companion+for+Seniors+in+the+UK%3A+What+Families+Actually+Need+to+Know+in+2026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-seniors-uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free to start · Family plan £29/mo
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Give your mum or dad a companion that actually remembers them.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Start free — no credit card. The companion hatches in under a minute. When
              you are ready for Guardian alerts and the family dashboard, upgrade to the
              Family plan for £29/month. No long-term contract. Cancel any time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
                style={{ background: "#c9a84c", color: "#0d0c18" }}
              >
                Start free for your parent
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all border"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  borderColor: "rgba(255,255,255,0.18)",
                }}
              >
                See Family plan
              </Link>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/ai-for-elderly"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Senior Mode
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                AI for the Elderly: How MEOK&apos;s Senior Mode Protects and Connects Older
                Adults
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/guardian-family-safety"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#ff7f7f", background: "rgba(255,127,127,0.12)" }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                How MEOK Guardian Protects Your Family from AI-Enabled Scams
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                4 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
