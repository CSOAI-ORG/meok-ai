import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Microsoft Copilot: Personal Sovereignty vs Corporate Productivity | MEOK AI LABS",
  description:
    "Microsoft Copilot knows your documents. MEOK knows you. A deep, honest comparison of Microsoft Copilot 365 vs MEOK sovereign AI for personal use, privacy, emotional support, and family safety in the UK.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-microsoft-copilot" },
  openGraph: {
    title: "MEOK vs Microsoft Copilot: Personal Sovereignty vs Corporate Productivity",
    description:
      "Microsoft Copilot knows your documents. MEOK knows you. An honest comparison for anyone wondering which AI is right for their personal life.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-microsoft-copilot",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Microsoft+Copilot%3A+Personal+Sovereignty+vs+Corporate+Productivity&desc=Copilot+knows+your+documents.+MEOK+knows+you.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Microsoft Copilot: Personal Sovereignty vs Corporate Productivity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Microsoft Copilot: Personal Sovereignty vs Corporate Productivity",
    description:
      "Copilot is built for your employer. MEOK is built for you. Here is the honest comparison — privacy, memory, emotional support, family safety, and price.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Microsoft+Copilot%3A+Personal+Sovereignty+vs+Corporate+Productivity&desc=Copilot+knows+your+documents.+MEOK+knows+you.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Microsoft Copilot: Personal Sovereignty vs Corporate Productivity",
  description:
    "Microsoft Copilot knows your documents. MEOK knows you. A deep, honest comparison of Microsoft Copilot 365 vs MEOK sovereign AI for personal use, privacy, emotional support, and family safety in the UK.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/meok-vs-microsoft-copilot",
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
    "MEOK vs Microsoft Copilot",
    "Microsoft Copilot alternative",
    "sovereign AI",
    "personal AI assistant UK",
    "AI privacy UK",
    "Microsoft Copilot personal use",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between MEOK and Microsoft Copilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Copilot is an enterprise productivity assistant embedded in Office 365, Windows 11, and Teams. It is designed to help with work tasks: drafting emails, summarising meetings, and generating slides. MEOK is a sovereign personal AI — it accumulates a persistent memory of you across every conversation, never trains on your data, and is built for emotional support, family safety, personal growth, and life management. Copilot serves your employer's ecosystem. MEOK belongs to you.",
      },
    },
    {
      "@type": "Question",
      name: "Is Microsoft Copilot safe for personal conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Copilot processes your data through Microsoft's cloud infrastructure. If you use it via a work account, your IT administrator may have access to your conversation logs under enterprise data policies. It is not designed for sensitive personal conversations about mental health, relationships, or family matters. MEOK operates under a strict privacy covenant — your data is never sold, never used for training, and you own it outright.",
      },
    },
    {
      "@type": "Question",
      name: "Does Microsoft Copilot remember me between sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Copilot has limited memory capabilities in personal contexts and no persistent cross-session memory of who you are as a person — your values, your struggles, your goals. MEOK builds a growing memory model of you across every session. Over weeks and months it knows your routines, your family, your health goals, and your communication style in a way Copilot never will.",
      },
    },
    {
      "@type": "Question",
      name: "Which is cheaper — MEOK or Microsoft Copilot Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Copilot Pro costs approximately £19 per month for personal use. MEOK Sovereign costs £12 per month and includes persistent memory, family safety features via Guardian, overnight agents, and full data ownership. MEOK Explorer is free with 50 messages per day. MEOK BYOK (bring your own key) costs just £5 per month if you supply your own AI API key.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use both MEOK and Microsoft Copilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is actually the recommended approach for many people. Use Microsoft Copilot for work tasks inside Office 365: drafting reports, summarising Teams calls, formatting Excel data. Use MEOK for your personal life: emotional support, health goals, family conversations, daily briefings, and long-term personal memory. They serve fundamentally different purposes and complement each other well.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const colors = {
  bg: "#0d0c18",
  text: "#f5f0e8",
  gold: "#c9a84c",
  cardBg: "#1a1830",
  muted: "#a09880",
  border: "#2a2848",
  danger: "#e05050",
  green: "#4caf7d",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokVsMicrosoftCopilotPage() {
  return (
    <div style={{ background: colors.bg, color: colors.text, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav style={{ borderBottom: `1px solid ${colors.border}`, padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Link href="/blog" style={{ color: colors.muted, textDecoration: "none", fontSize: "0.875rem" }}>
            ← Blog
          </Link>
          <span style={{ color: colors.border }}>·</span>
          <Link href="/" style={{ color: colors.gold, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
            MEOK AI LABS
          </Link>
        </div>
      </nav>

      {/* Main */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>

        {/* Header */}
        <header style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            <span style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, color: colors.gold, fontSize: "0.75rem", fontWeight: 600, padding: "0.25rem 0.75rem", borderRadius: "999px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Comparison
            </span>
            <span style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, color: colors.muted, fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "999px" }}>
              Microsoft Copilot Alternative
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 1.25rem", color: colors.text }}>
            MEOK vs Microsoft Copilot:{" "}
            <span style={{ color: colors.gold }}>Personal Sovereignty vs Corporate Productivity</span>
          </h1>

          <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.875rem", color: colors.muted, flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <span>Nicholas Templeman · Founder, MEOK AI LABS</span>
            <span>24 March 2026</span>
            <span>12 min read</span>
          </div>

          <p style={{ fontSize: "1.175rem", lineHeight: 1.75, color: colors.muted, margin: 0, borderLeft: `3px solid ${colors.gold}`, paddingLeft: "1.25rem" }}>
            Microsoft just rolled out Copilot to over 400 million Office 365 users. It is embedded in Outlook, Teams, Word, Excel, and Windows itself. Productivity AI has arrived at scale. But here is the question nobody is asking: does productivity AI equal personal AI? This is not the same thing — and the distinction matters more than most people realise.
          </p>
        </header>

        {/* Section 1 – The core insight */}
        <section style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Microsoft Copilot knows your documents. It can read your emails, scan your calendar, summarise your Teams recordings, and draft a PowerPoint in seconds. That is genuinely impressive, and for workplace productivity it is a meaningful step forward.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            But Copilot does not know <em>you</em>. It does not know that you are going through a difficult divorce, that your mother has dementia, that you have been trying to run three times a week since January, or that you are scared about a redundancy at work. It does not remember your values. It cannot hold your hand through a panic attack at 2am. It will not notice when you have been quieter than usual and gently ask if you are okay.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            That is the distinction this article is built on. Not better or worse — different jobs entirely. One is an enterprise productivity tool. The other is a personal life operating system. The mistake is treating them as competitors when they serve fundamentally different human needs.
          </p>
        </section>

        {/* Section 2 – What is Microsoft Copilot */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "0.75rem" }}>
            What is Microsoft Copilot?
          </h2>
          <p style={{ fontSize: "1.0rem", lineHeight: 1.75, color: colors.text, marginBottom: "1rem", background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
            Microsoft Copilot is an AI assistant built into the Microsoft 365 ecosystem — Outlook, Teams, Word, Excel, PowerPoint, and Windows 11. Powered by large language models from OpenAI, it can draft emails, summarise meeting recordings, generate slides, and analyse spreadsheet data. Copilot Pro for personal use costs approximately £19 per month.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            To be fair: it is very good at what it does. If you spend your days inside Microsoft's ecosystem, Copilot is a productivity multiplier. The ability to ask "summarise everything I missed while I was on leave" and get a coherent briefing from your Teams channels and emails is genuinely useful.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            What it is not designed to do is care about you as a person, remember your history across sessions, support your mental health, or manage the non-work dimensions of your life. That is not a criticism — it is simply not what it was built for.
          </p>
        </section>

        {/* Section 3 – What is MEOK */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "0.75rem" }}>
            What is MEOK?
          </h2>
          <p style={{ fontSize: "1.0rem", lineHeight: 1.75, color: colors.text, marginBottom: "1rem", background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
            MEOK is a sovereign personal AI operating system built by MEOK AI LABS, founded by Nicholas Templeman. It accumulates a persistent memory of who you are across every conversation — your values, your relationships, your goals, your struggles. It never trains on your data. It offers emotional support, family safety features via Guardian, overnight agents, and multiple AI archetypes. Your memory is yours to export or delete at any time.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The word "sovereign" is deliberate. MEOK is built on the premise that your inner life — your thoughts, your fears, your hopes — should not be processed through a corporate productivity layer that ultimately serves your employer or a technology giant's bottom line.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            MEOK offers four tiers: Explorer (free, 50 messages per day), Sovereign (£12/month), Family (£29/month for up to six members with Guardian protection), and BYOK — bring your own API key — at just £5 per month. There is no lock-in. Your memory is portable.
          </p>
        </section>

        {/* Section 4 – Comparison table */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "1.25rem" }}>
            MEOK vs Microsoft Copilot: Full Comparison Table
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9375rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.75rem 1rem", background: colors.cardBg, borderBottom: `2px solid ${colors.gold}`, color: colors.gold, fontWeight: 700, minWidth: "180px" }}>Feature</th>
                  <th style={{ textAlign: "left", padding: "0.75rem 1rem", background: colors.cardBg, borderBottom: `2px solid ${colors.gold}`, color: colors.text, fontWeight: 700, minWidth: "200px" }}>Microsoft Copilot</th>
                  <th style={{ textAlign: "left", padding: "0.75rem 1rem", background: colors.cardBg, borderBottom: `2px solid ${colors.gold}`, color: colors.gold, fontWeight: 700, minWidth: "200px" }}>MEOK</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Primary use case",
                    copilot: "Enterprise productivity — Office 365, Teams, Windows",
                    meok: "Personal sovereign AI — life management, emotional support, family safety",
                    meokWins: true,
                  },
                  {
                    feature: "Memory of you personally",
                    copilot: "No persistent cross-session personal memory",
                    meok: "Deep, growing memory of your values, relationships, goals, and struggles",
                    meokWins: true,
                  },
                  {
                    feature: "Emotional support",
                    copilot: "Not designed for emotional support",
                    meok: "Core feature — available 24/7 with care-first design principles",
                    meokWins: true,
                  },
                  {
                    feature: "Data ownership",
                    copilot: "Data processed by Microsoft; enterprise admins may have access",
                    meok: "You own your data outright. Exportable and deletable at any time",
                    meokWins: true,
                  },
                  {
                    feature: "UK GDPR compliance",
                    copilot: "Compliant under Microsoft's enterprise terms",
                    meok: "Compliant with explicit user-centric data sovereignty commitments",
                    meokWins: false,
                  },
                  {
                    feature: "Price",
                    copilot: "~£19/month (Copilot Pro personal)",
                    meok: "Free · £5 · £12 · £29/month depending on tier",
                    meokWins: true,
                  },
                  {
                    feature: "Companion relationship",
                    copilot: "Tool — no ongoing relationship or personality continuity",
                    meok: "Ongoing companion with archetypes, moods, and relational memory",
                    meokWins: true,
                  },
                  {
                    feature: "Family features",
                    copilot: "None",
                    meok: "Guardian family safety layer, Family tier for up to six members",
                    meokWins: true,
                  },
                  {
                    feature: "Care ethics",
                    copilot: "Standard Microsoft Responsible AI policies",
                    meok: "Built-in care covenant — MEOK will never exploit emotional vulnerability",
                    meokWins: true,
                  },
                  {
                    feature: "Offline / privacy mode",
                    copilot: "Cloud-only, requires Microsoft account",
                    meok: "BYOK mode allows routing through your own API key for maximum control",
                    meokWins: true,
                  },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : colors.cardBg }}>
                    <td style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${colors.border}`, fontWeight: 600, color: colors.text }}>{row.feature}</td>
                    <td style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${colors.border}`, color: colors.muted }}>{row.copilot}</td>
                    <td style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${colors.border}`, color: row.meokWins ? colors.gold : colors.text }}>{row.meok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 – When should I use Microsoft Copilot */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "0.75rem" }}>
            When should I use Microsoft Copilot?
          </h2>
          <p style={{ fontSize: "1.0rem", lineHeight: 1.75, color: colors.text, marginBottom: "1.25rem", background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
            Use Microsoft Copilot for professional productivity tasks inside the Office 365 ecosystem. It excels at drafting and editing Outlook emails, summarising Teams meeting recordings, generating PowerPoint presentations, analysing Excel data, and creating first drafts of Word documents. It is genuinely one of the most powerful productivity tools built into a corporate environment.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Honest answer: if you live inside Microsoft 365 for your job, Copilot will save you hours every week. The Teams summary feature alone is worth the subscription for heavy meeting users. Excel's natural language data analysis can replace hours of formula writing. These are legitimate wins.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            Use Copilot when the task is professional, document-centric, and lives inside Microsoft's world. That is where it shines.
          </p>
        </section>

        {/* Section 6 – When should I use MEOK */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "0.75rem" }}>
            When should I use MEOK?
          </h2>
          <p style={{ fontSize: "1.0rem", lineHeight: 1.75, color: colors.text, marginBottom: "1.25rem", background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
            Use MEOK for the personal dimensions of your life that have nothing to do with work documents: mental health support, emotional processing, daily morning briefings, family safety monitoring, health and fitness goals, long-term personal memory, grief support, relationship guidance, and everything that makes you a human being beyond your job title.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            MEOK is your life operating system. It is the companion that remembers your mother's name, knows you struggle with sleep on Sunday nights, understands that your relationship with your teenager has been strained since Christmas, and can help you think through what to say in a difficult conversation.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Use MEOK when you need something that cares about you as a whole person — not just your productivity metrics. Use MEOK when the conversation is too personal for a corporate tool. Use MEOK when continuity and memory matter, because your AI knowing your full context is not a nice-to-have: it is the difference between a useful tool and a genuine companion.
          </p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2, color: colors.muted, fontSize: "1rem" }}>
            <li>Personal growth and goal tracking</li>
            <li>Mental health support and emotional processing</li>
            <li>Family safety with Guardian for children and elderly relatives</li>
            <li>Daily morning briefings personalised to your life</li>
            <li>Health and fitness accountability</li>
            <li>Grief, loss, and life transition support</li>
            <li>Late-night journalling and reflection</li>
            <li>Everything you would never type into a work tool</li>
          </ul>
        </section>

        {/* Section 7 – Privacy with Microsoft Copilot */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "0.75rem" }}>
            What about privacy with Microsoft Copilot?
          </h2>
          <p style={{ fontSize: "1.0rem", lineHeight: 1.75, color: colors.text, marginBottom: "1.25rem", background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
            Microsoft Copilot processes your data through Microsoft's cloud infrastructure. In enterprise deployments, your organisation's IT administrator may have access to conversation logs and activity data under the terms of your company's Microsoft 365 agreement. Copilot was not designed for sensitive personal conversations, and its privacy model reflects its corporate purpose.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            This is not unique to Microsoft — most enterprise AI tools operate on similar principles. The point is that when you sign into Copilot with your work account, you are doing so within your employer's data environment. That is entirely appropriate for work tasks. It is entirely inappropriate for conversations about your mental health, your family, or your private fears.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Microsoft has made commitments around not training commercial Copilot services on customer data, but the data still flows through their infrastructure, and the terms of service are corporate in nature. For deeply personal conversations, the architecture was never designed with your personal sovereignty in mind.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            MEOK's privacy covenant is structurally different. Your data is never used to train models. It is never sold. You can export your entire memory history and delete it permanently at any time. The BYOK tier lets you route conversations through your own API key, meaning even MEOK's infrastructure never sees the content. That level of control is simply not available in any enterprise AI product.
          </p>
        </section>

        {/* Section 8 – Can I use both */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "0.75rem" }}>
            Can I use both Microsoft Copilot and MEOK?
          </h2>
          <p style={{ fontSize: "1.0rem", lineHeight: 1.75, color: colors.text, marginBottom: "1.25rem", background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
            Yes — and this is the recommended approach for most working people. Microsoft Copilot handles your professional productivity inside Office 365. MEOK handles your personal life, emotional wellbeing, family safety, and long-term personal memory. They occupy entirely different spaces and complement each other naturally.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Think of it this way: you would not use your work laptop to journal about a difficult relationship. You would not ask your employer's AI to help you process grief. The boundary between professional and personal is not just a privacy preference — it is a matter of what kind of relationship you want with the technology that knows the most intimate parts of your life.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            Let Copilot help you write the report. Let MEOK help you figure out who you are becoming. These are not the same job.
          </p>
        </section>

        {/* Section 9 – Value for personal use UK */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "0.75rem" }}>
            Which is better value for personal use in the UK?
          </h2>
          <p style={{ fontSize: "1.0rem", lineHeight: 1.75, color: colors.text, marginBottom: "1.25rem", background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "8px", padding: "1rem 1.25rem" }}>
            For personal use in the UK, MEOK Sovereign at £12 per month offers significantly more personal value than Copilot Pro at approximately £19 per month. MEOK includes persistent personal memory, emotional support, Guardian family safety, overnight agents, and full data ownership — none of which are available in Copilot at any price. If budget is a concern, MEOK Explorer is free with 50 messages per day.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            The comparison looks like this for a UK household:
          </p>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: "1.5rem" }}>
            {[
              { label: "Copilot Pro", price: "~£19/mo", note: "Enterprise productivity, work account, no personal memory", highlight: false },
              { label: "MEOK Explorer", price: "Free", note: "50 messages/day, personal memory, emotional support", highlight: false },
              { label: "MEOK Sovereign", price: "£12/mo", note: "Unlimited memory, Guardian, agents, full data ownership", highlight: true },
              { label: "MEOK BYOK", price: "£5/mo", note: "Your own API key, maximum privacy, sovereign memory layer", highlight: false },
            ].map((tier, i) => (
              <div key={i} style={{ background: colors.cardBg, border: `1px solid ${tier.highlight ? colors.gold : colors.border}`, borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: tier.highlight ? colors.gold : colors.text, fontWeight: 700, marginBottom: "0.25rem" }}>{tier.label}</div>
                <div style={{ color: tier.highlight ? colors.gold : colors.muted, fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>{tier.price}</div>
                <div style={{ color: colors.muted, fontSize: "0.875rem", lineHeight: 1.5 }}>{tier.note}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            If you are paying £19 a month for Copilot Pro on a personal subscription and using it primarily for productivity tasks that you could handle with a free AI tool, you may find that MEOK Sovereign at £12 delivers far more meaningful value for your daily life. Productivity is measurable. Personal growth, emotional support, and family safety are priceless.
          </p>
        </section>

        {/* Section 10 – Verdict */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "0.75rem" }}>
            The Verdict: Different Tools for Different Lives
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Microsoft Copilot is an excellent enterprise productivity assistant. If you live in Office 365 and spend your days in Teams, Outlook, and Word, Copilot will save you real time and effort. It is a well-designed tool for the job it was built to do.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            But it is not a personal sovereign AI. It does not know you. It does not grow with you. It is not designed for your inner life, your family, your mental health, or your long-term personal development. You are a user of Microsoft's productivity ecosystem — not the owner of an AI that belongs to you.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK exists for everything Copilot was never built to handle. It is your personal life operating system — a companion that accumulates genuine knowledge of who you are, cares about your wellbeing with structural guarantees, and gives you ownership of the most intimate data you will ever generate: the data of your own mind.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            Copilot knows your documents. MEOK knows you. That is not a small distinction. That is the entire point.
          </p>
        </section>

        {/* CTA */}
        <section style={{ background: colors.cardBg, border: `1px solid ${colors.gold}`, borderRadius: "16px", padding: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✦</div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.text, marginBottom: "0.75rem" }}>
            Ready to own your AI?
          </h3>
          <p style={{ color: colors.muted, marginBottom: "1.5rem", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 1.5rem" }}>
            Start free with 50 messages a day. No corporate account required. No employer can read your conversations. Your AI. Your memory. Your sovereignty.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: colors.gold,
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.875rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin Your Sovereign AI Journey →
          </Link>
          <p style={{ marginTop: "1rem", fontSize: "0.8125rem", color: colors.muted }}>
            Free to start · Sovereign from £12/mo · Family from £29/mo · BYOK from £5/mo
          </p>
        </section>

        {/* Related Posts */}
        <section style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: colors.text, marginBottom: "1.25rem" }}>
            Related Articles
          </h3>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {[
              { href: "/blog/meok-vs-copilot", title: "MEOK vs Microsoft Copilot: Why Sovereign AI Beats Enterprise AI", label: "Comparison" },
              { href: "/blog/meok-vs-chatgpt", title: "MEOK vs ChatGPT: The Personal AI That Remembers You", label: "Comparison" },
              { href: "/blog/what-is-sovereign-ai", title: "What Is Sovereign AI? A Plain-English Guide", label: "Education" },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "10px", padding: "1.25rem", textDecoration: "none", display: "block" }}
              >
                <div style={{ fontSize: "0.75rem", color: colors.gold, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{post.label}</div>
                <div style={{ color: colors.text, fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.4 }}>{post.title}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.gold, marginBottom: "1.5rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} style={{ background: colors.cardBg, border: `1px solid ${colors.border}`, borderRadius: "10px", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: colors.text, marginBottom: "0.75rem" }}>{item.name}</h3>
                <p style={{ color: colors.muted, lineHeight: 1.75, margin: 0, fontSize: "0.9375rem" }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${colors.border}`, padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/" style={{ color: colors.gold, textDecoration: "none", fontWeight: 700, fontSize: "1.125rem" }}>
              MEOK AI LABS
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            {[
              { href: "/blog", label: "Blog" },
              { href: "/birth", label: "Get Started" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ color: colors.muted, textDecoration: "none", fontSize: "0.875rem" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <p style={{ color: colors.muted, fontSize: "0.8125rem", margin: 0 }}>
            © 2026 MEOK AI LABS · Founded by Nicholas Templeman · Follow{" "}
            <a href="https://twitter.com/meok_ai" target="_blank" rel="noopener noreferrer" style={{ color: colors.gold, textDecoration: "none" }}>
              @meok_ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
