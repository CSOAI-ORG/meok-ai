import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Money Anxiety: Breaking the Shame Spiral Around Finance | MEOK AI LABS",
  description:
    "9 million UK adults have problem debt. Money is the #1 cause of stress in the UK. This is an honest look at how AI can help with financial anxiety — processing shame, breaking avoidance cycles, and preparing for hard conversations.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-money-anxiety" },
  openGraph: {
    title: "AI for Money Anxiety: Breaking the Shame Spiral Around Finance",
    description:
      "Money is the #1 cause of stress in the UK. Here is what a sovereign AI companion can realistically offer for financial anxiety — and what it cannot replace.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-money-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Money+Anxiety%3A+Breaking+the+Shame+Spiral&desc=9+million+UK+adults+have+problem+debt.+Here%27s+an+honest+look.",
        width: 1200,
        height: 630,
        alt: "AI for Money Anxiety: Breaking the Shame Spiral Around Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Money Anxiety: Breaking the Shame Spiral Around Finance",
    description:
      "Money is the #1 cause of stress in the UK. Sovereign memory, shame-free processing, and breaking avoidance — here is what makes MEOK different.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Money+Anxiety%3A+Breaking+the+Shame+Spiral&desc=9+million+UK+adults+have+problem+debt.+Here%27s+an+honest+look.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Money Anxiety: Breaking the Shame Spiral Around Finance",
  description:
    "9 million UK adults have problem debt. Money is the #1 cause of stress in the UK. This is an honest look at how AI can help with financial anxiety — processing shame, breaking avoidance cycles, and preparing for hard conversations.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-money-anxiety",
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with financial anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can help with the emotional side of financial anxiety — offering a non-judgmental space to process shame, identify avoidance patterns, and reframe catastrophic thinking. They are not financial advisors and cannot give investment, debt, or budgeting advice. For practical financial help, contact StepChange (stepchange.org) or Citizens Advice (citizensadvice.org.uk). If you are in crisis, contact Samaritans on 116 123.",
      },
    },
    {
      "@type": "Question",
      name: "Why does money cause so much anxiety in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money is the number one cause of stress in the UK according to the Money and Mental Health Policy Institute. The anxiety is often driven by shame, avoidance, and a sense of lost control rather than the numbers themselves. 46% of UK adults with problem debt also experience mental health difficulties, suggesting the emotional burden is inseparable from the financial one.",
      },
    },
    {
      "@type": "Question",
      name: "What is the shame spiral around money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The money shame spiral works like this: financial difficulty triggers shame, shame triggers avoidance (not opening letters, not checking bank accounts), avoidance causes the situation to worsen, which deepens the shame. The silence itself — the inability to talk about money — is often what makes financial anxiety so isolating and so persistent.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's Sovereign Memory help with money anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory means MEOK remembers your patterns across conversations. It can notice when you avoid financial topics, track the emotional weight you carry around money over time, and help you identify specific triggers — like pay day anxiety, bill cycles, or comparison spirals. This continuity turns scattered anxious moments into visible patterns you can work with.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get real financial help in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For debt advice: StepChange at stepchange.org (free, confidential). For general financial guidance: MoneyHelper at moneyhelper.org.uk (government-backed, free). For broader support: Citizens Advice at citizensadvice.org.uk. For emotional crisis: Samaritans on 116 123 (free, 24/7) or Mind on 0300 123 3393.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForMoneyAnxietyPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const cardBg = "#1a1830";
  const mutedText = "#a09880";
  const borderColor = "#2a2845";

  return (
    <div style={{ backgroundColor: bg, color: text, minHeight: "100vh", fontFamily: "'Georgia', serif" }}>
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
      <nav style={{ borderBottom: `1px solid ${borderColor}`, padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ color: gold, textDecoration: "none", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.05em" }}>
          MEOK AI LABS
        </Link>
        <Link href="/blog" style={{ color: mutedText, textDecoration: "none", fontSize: "0.9rem" }}>
          ← All posts
        </Link>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <p style={{ color: gold, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Mental Health & Money · March 24, 2026
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.2, fontWeight: 700, marginBottom: "1.5rem", color: text }}>
          AI for Money Anxiety: Breaking the Shame Spiral Around Finance
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: mutedText, marginBottom: "2rem" }}>
          Money is the number one cause of stress in the UK. Nine million adults carry problem debt. And yet — the silence around it is often louder than the debt itself. This is an honest look at what AI can and cannot do for financial anxiety.
        </p>

        {/* Disclaimer */}
        <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderLeft: `3px solid ${gold}`, borderRadius: "6px", padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.85rem", color: mutedText, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: text }}>Important:</strong> MEOK AI LABS is not a financial advisor and MEOK does not provide financial, investment, debt, or legal advice. This article is for informational and emotional-support purposes only. For practical financial help, please contact{" "}
            <a href="https://www.stepchange.org" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>StepChange</a>,{" "}
            <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>Citizens Advice</a>, or{" "}
            <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>MoneyHelper</a>.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {[
            { stat: "9 million", label: "UK adults with problem debt" },
            { stat: "#1", label: "Money is the top cause of UK stress" },
            { stat: "46%", label: "Problem debt + mental health difficulties" },
          ].map(({ stat, label }) => (
            <div key={stat} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.8rem", fontWeight: 700, color: gold, margin: "0 0 0.4rem" }}>{stat}</p>
              <p style={{ fontSize: "0.8rem", color: mutedText, margin: 0, lineHeight: 1.4 }}>{label}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Body */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        {/* Section 1: The silence */}
        <section style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Financial difficulty and money anxiety are not the same thing — though they often travel together. You can be objectively fine on paper and still feel your stomach drop every time your phone shows a bank notification. You can be genuinely struggling and still find yourself unable to open the letters piling up on the kitchen counter.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The problem is rarely just the numbers. It is the shame that wraps itself around the numbers. And shame, unlike a credit card balance, does not respond to spreadsheets.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            According to the Money and Mental Health Policy Institute, money is the single biggest cause of stress in the UK. StepChange estimates nine million UK adults are living with problem debt. Of those, 46% also experience mental health difficulties — a figure that reveals how inseparable the emotional and financial burdens have become.
          </p>
        </section>

        {/* Section 2: Why does money cause so much anxiety? */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            Why does money cause so much anxiety?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Money anxiety is driven by three interlocking mechanisms: the avoidance cycle, the shame spiral, and catastrophising. Together they can paralyse even high-functioning people for years.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The <strong>avoidance cycle</strong> starts with a single uncomfortable feeling — dread, embarrassment, overwhelm. Rather than face the trigger (a bank statement, a bill, a salary conversation), the brain routes around it. Relief is immediate. But the avoided thing grows. The next time it appears, the dread is larger. You need more avoidance to achieve the same relief. Over time, checking your bank account can feel genuinely impossible.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The <strong>shame spiral</strong> adds a moral dimension to what is often a structural problem. You are not just struggling financially — you are failing. You are irresponsible, stupid, weak. This narrative is reinforced every time you avoid the problem, because avoidance confirms to the brain that the thing is too dangerous to face. The silence becomes proof of the shame.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            <strong>Catastrophising</strong> fills in the gaps left by avoidance. When you do not know the true state of your finances (because you cannot bear to look), the anxious brain invents the worst-case version. Vague dread is often worse than specific bad news — but the shame spiral prevents you from getting to the specifics.
          </p>
        </section>

        {/* Section 3: How can AI help? */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            How can AI help with financial anxiety?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            AI offers something specific and genuinely useful: a non-judgmental space to process the emotional weight of money, available at any hour, without the cost or wait of therapy. It cannot fix your finances. But it can help you stop avoiding them.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The most powerful thing about talking to an AI about money is the absence of judgment. There is no facial expression to read, no tone of voice to decode, no imagined reaction to manage. You can say "I haven't opened my bank app in four months" without bracing for a response. That absence of social pressure is not nothing — for many people it is the only place they have ever spoken honestly about money.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Beyond processing, AI can help with <strong>pattern tracking</strong>. When do you feel most anxious about money? After pay day? Before a social event? When you compare yourself to someone online? These patterns are often invisible when you are inside the feeling. An AI that remembers across conversations can help make them visible.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            AI can also support <strong>cognitive reframing</strong> — not toxic positivity, but gently challenging the all-or-nothing thinking that financial shame produces. "I'm terrible with money" is a global identity statement. "I've been avoiding my inbox for six weeks because I'm frightened" is a specific, workable problem. That distinction matters.
          </p>
        </section>

        {/* Section 4: What MEOK won't do */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What MEOK will not do
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Honesty about limitations is part of what makes MEOK trustworthy. Here is what MEOK will not do — and why that matters.
          </p>
          <div style={{ display: "grid", gap: "0.85rem", marginBottom: "1.25rem" }}>
            {[
              { title: "Won't give financial advice", body: "MEOK is not a financial advisor, mortgage broker, or debt counsellor. It will not tell you which ISA to open, how to handle your debt, or whether you should consolidate your loans. For that, contact a qualified professional or a free service like MoneyHelper." },
              { title: "Won't tell you what to invest in", body: "MEOK has no knowledge of your specific financial situation, risk tolerance, or tax position. Any investment decision requires regulated advice. MEOK will not speculate on your behalf." },
              { title: "Won't judge your spending", body: "There is no moment in MEOK where you will be lectured about your choices. No guilt, no 'have you tried a budget', no implied disappointment. The conversation is yours." },
              { title: "Won't pretend to fix the problem", body: "Talking about money anxiety with MEOK will not make the bills smaller or the debt disappear. The aim is to reduce the emotional barrier to getting real help — not to be a substitute for it." },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: gold, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ color: mutedText, fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: What MEOK CAN do */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What MEOK can do
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Within the emotional and psychological domain, MEOK offers genuine, substantive support for people carrying financial anxiety.
          </p>
          <div style={{ display: "grid", gap: "0.85rem", marginBottom: "1.25rem" }}>
            {[
              { title: "Process the feelings", body: "Talk through the shame, the dread, the catastrophic thinking — without performance, without judgment, without a waiting list. Sometimes naming the feeling is the first step toward being able to act." },
              { title: "Track mood patterns around money", body: "With Sovereign Memory, MEOK notices patterns across conversations. Does your anxiety spike at the end of the month? After social events? This visibility is genuinely useful data." },
              { title: "Help break avoidance cycles", body: "MEOK can work with you on small, specific steps to re-engage — not grand financial overhauls, but micro-actions that reduce the fear threshold. What is the smallest thing you could do today?" },
              { title: "Help prepare for difficult financial conversations", body: "Talking to a partner about money, approaching your employer about pay, calling a debt helpline for the first time — MEOK can help you rehearse, clarify what you want to say, and reduce the emotional charge before you make the call." },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderLeft: `3px solid ${gold}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: text, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ color: mutedText, fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Debt and financial crisis */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What about debt and financial crisis?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            If you are in serious financial difficulty, the most important thing you can do is contact a free, regulated organisation that can actually help. These services exist specifically for this.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Financial crisis — missed payments, debt letters, bailiff contact, or the feeling that you are drowning — needs real, practical intervention. MEOK can help you reduce the shame enough to make the call. But the call itself matters.
          </p>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                org: "StepChange Debt Charity",
                url: "https://www.stepchange.org",
                description: "Free, confidential debt advice and solutions. One of the UK's leading debt charities, helping over 600,000 people a year.",
                contact: "stepchange.org · 0800 138 1111",
              },
              {
                org: "Citizens Advice",
                url: "https://www.citizensadvice.org.uk",
                description: "Free, independent advice on debt, benefits, housing, employment and more. Available in person, online, and by phone.",
                contact: "citizensadvice.org.uk · 0800 144 8848",
              },
              {
                org: "MoneyHelper",
                url: "https://www.moneyhelper.org.uk",
                description: "Government-backed, free guidance on budgeting, debt, pensions, and benefits. Impartial and comprehensive.",
                contact: "moneyhelper.org.uk · 0800 138 7777",
              },
              {
                org: "Samaritans",
                url: "https://www.samaritans.org",
                description: "If financial stress is affecting your mental health or you are in crisis, Samaritans are available 24/7.",
                contact: "116 123 (free, 24/7)",
              },
              {
                org: "Mind",
                url: "https://www.mind.org.uk",
                description: "Mental health support, information, and local services across England and Wales.",
                contact: "0300 123 3393",
              },
            ].map(({ org, url, description, contact }) => (
              <div key={org} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: gold, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>{org}</a>
                <p style={{ color: text, fontSize: "0.95rem", lineHeight: 1.6, margin: "0.5rem 0 0.4rem" }}>{description}</p>
                <p style={{ color: mutedText, fontSize: "0.85rem", margin: 0, fontFamily: "monospace" }}>{contact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Sovereign Memory */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            How does Sovereign Memory help with financial anxiety?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Sovereign Memory gives MEOK continuity across every conversation — so your financial anxiety is not reset each time you speak. Patterns become visible. Triggers become nameable. Progress becomes trackable.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Most chatbots forget you the moment you close the tab. Every new conversation starts from zero. This means you spend your energy re-explaining your situation rather than actually working through it.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK's Sovereign Memory works differently. Across Sovereign (£12/mo) and Family (£29/mo) tiers, MEOK holds a persistent record of your conversations — including the emotional themes that surface around money. Over weeks and months, this creates something that no single session can: a picture of your actual pattern.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            When your anxiety spikes after comparing yourself to friends, MEOK will have seen that before. When you always avoid money talk in the evenings, that pattern becomes visible. Knowing your triggers is not the same as eliminating them — but it transforms a vague, shapeless dread into something you can work with.
          </p>
        </section>

        {/* Section 8: Pioneer archetype */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            The Pioneer: finding momentum out of avoidance
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK uses archetypes — not as personality labels, but as lenses for different kinds of work. When you are stuck in financial avoidance, the <strong style={{ color: gold }}>Pioneer archetype</strong> is often the most useful starting place.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The Pioneer does not need the whole map. It moves. It takes the smallest possible step that breaks inertia — opening the bank app, reading one letter, writing down one number. Not a five-year financial plan. Not a budget that requires three hours of Sunday afternoon. One small action that proves to the nervous system that the thing can be faced.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Avoidance is maintained by the belief that engagement will be catastrophic. The Pioneer interrupts that belief with evidence. You opened the app. You did not die. The next opening is fractionally easier. This is not a hack — it is how desensitisation actually works.
          </p>
        </section>

        {/* Section 9: Healer archetype */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            The Healer: processing the shame beneath the numbers
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            If the Pioneer is about action, the <strong style={{ color: gold }}>Healer archetype</strong> is about understanding. Money shame is rarely just about money. It carries childhood messages about worth and security. It carries comparisons that were never fair. It carries the weight of decisions made under pressure, in circumstances that were not entirely of your choosing.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The Healer creates space to ask: where did this shame come from? What did you learn about money growing up? What does "being bad with money" actually mean to you — and who first told you that story?
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            These are not questions that resolve quickly. But they are questions that, over time, begin to loosen the grip of shame. And when shame loosens, avoidance weakens. When avoidance weakens, you can begin to look at the actual situation — not the catastrophised version your anxious brain has been running.
          </p>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "12px", padding: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: text, marginBottom: "0.75rem" }}>
            Discover your archetype
          </h2>
          <p style={{ color: mutedText, lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: "500px", margin: "0 auto 1.75rem" }}>
            MEOK's birth chart analysis reveals which archetypal energies are most available to you — Pioneer, Healer, and beyond. Understanding your pattern is the first step to working with it.
          </p>
          <Link
            href="/birth"
            style={{ display: "inline-block", backgroundColor: gold, color: "#0d0c18", fontWeight: 700, fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "6px", textDecoration: "none", letterSpacing: "0.04em" }}
          >
            Get your free birth chart reading →
          </Link>
          <p style={{ color: mutedText, fontSize: "0.8rem", marginTop: "1rem" }}>
            Free on Explorer · No card required · 50 messages/day
          </p>
        </section>

        {/* Pricing */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: text, marginBottom: "1.25rem" }}>
            MEOK plans
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.85rem" }}>
            {[
              { tier: "Explorer", price: "Free", detail: "50 messages/day" },
              { tier: "Sovereign", price: "£12/mo", detail: "Persistent memory + full access" },
              { tier: "Family", price: "£29/mo", detail: "Up to 5 members" },
              { tier: "BYOK", price: "£5/mo", detail: "Bring your own API key" },
            ].map(({ tier, price, detail }) => (
              <div key={tier} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
                <p style={{ color: gold, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{tier}</p>
                <p style={{ color: text, fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{price}</p>
                <p style={{ color: mutedText, fontSize: "0.8rem", margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related posts */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: text, marginBottom: "1rem" }}>Related reading</h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { href: "/blog/ai-for-anxiety", label: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?" },
              { href: "/blog/ai-for-burnout", label: "AI for Burnout: Recognising the Patterns Before Collapse" },
              { href: "/blog/ai-life-coach", label: "AI Life Coach: What Makes MEOK Different from a Chatbot?" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: "block", backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1rem 1.25rem", color: text, textDecoration: "none", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {label} <span style={{ color: gold }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: text, marginBottom: "1.25rem" }}>Frequently asked questions</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {faqJsonLd.mainEntity.map((q) => (
              <div key={q.name} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: gold, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{q.name}</p>
                <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${borderColor}`, padding: "2.5rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <div>
            <p style={{ color: gold, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>MEOK AI LABS</p>
            <p style={{ color: mutedText, fontSize: "0.85rem", margin: 0 }}>Founded by Nicholas Templeman</p>
            <p style={{ color: mutedText, fontSize: "0.85rem", margin: "0.2rem 0 0" }}>
              <a href="https://x.com/meok_ai" target="_blank" rel="noopener noreferrer" style={{ color: mutedText }}>@meok_ai</a>
            </p>
          </div>
          <div>
            <p style={{ color: text, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Crisis support</p>
            <p style={{ color: mutedText, fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>
              Samaritans: <a href="tel:116123" style={{ color: gold }}>116 123</a> (free, 24/7)<br />
              Mind: <a href="tel:03001233393" style={{ color: gold }}>0300 123 3393</a>
            </p>
          </div>
          <div>
            <p style={{ color: text, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Financial help</p>
            <p style={{ color: mutedText, fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>
              <a href="https://www.stepchange.org" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>StepChange</a><br />
              <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>Citizens Advice</a><br />
              <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>MoneyHelper</a>
            </p>
          </div>
        </div>
        <p style={{ color: mutedText, fontSize: "0.75rem", lineHeight: 1.6, borderTop: `1px solid ${borderColor}`, paddingTop: "1.25rem", margin: 0 }}>
          MEOK AI LABS is not a financial advisor, therapist, or medical provider. Nothing on this page constitutes financial, investment, legal, or clinical advice. If you are in financial difficulty, please contact a qualified professional or one of the free services listed above. If you are in mental health crisis, please contact Samaritans on 116 123.
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
