import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Debt Stress: When the Financial Anxiety Keeps You Up at Night | MEOK AI LABS",
  description:
    "Debt is one of the most isolating stresses because people rarely talk about it honestly. MEOK can help you process the shame, break the avoidance cycle, and prepare for the conversations that matter — while signposting to StepChange, Citizens Advice, and MoneyHelper.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-debt-stress" },
  openGraph: {
    title: "AI for Debt Stress: When the Financial Anxiety Keeps You Up at Night",
    description:
      "Debt shame keeps people silent and stuck. Here is how a sovereign AI companion can help you face the spiral — and when to call StepChange instead.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-debt-stress",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Debt+Stress%3A+When+the+Financial+Anxiety+Keeps+You+Up&desc=Debt+shame%2C+avoidance+spirals%2C+and+what+AI+can+actually+help+with.",
        width: 1200,
        height: 630,
        alt: "AI for Debt Stress: When the Financial Anxiety Keeps You Up at Night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Debt Stress: When the Financial Anxiety Keeps You Up at Night",
    description:
      "Debt is one of the most isolating stresses. Here is how MEOK helps with the emotional layer — and which UK services can help with the practical one.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Debt+Stress%3A+When+the+Financial+Anxiety+Keeps+You+Up&desc=Debt+shame%2C+avoidance+spirals%2C+and+what+AI+can+actually+help+with.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Debt Stress: When the Financial Anxiety Keeps You Up at Night",
  description:
    "Debt is one of the most isolating stresses because people rarely talk about it honestly. MEOK can help you process the shame, break the avoidance cycle, and prepare for the conversations that matter — while signposting to StepChange, Citizens Advice, and MoneyHelper.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-debt-stress",
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
      name: "Can AI help with debt stress and anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can help with the emotional and psychological layer of debt stress — processing shame, breaking avoidance patterns, reframing catastrophic thinking, and preparing for difficult conversations with creditors. They are not financial advisors and cannot give debt, legal, or insolvency advice. For practical debt help in the UK, contact StepChange at stepchange.org (free, confidential) or Citizens Advice at citizensadvice.org.uk.",
      },
    },
    {
      "@type": "Question",
      name: "Why does debt cause so much shame and isolation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Debt carries a moral weight in Western culture that few other financial difficulties do. It is often framed as a personal failure rather than the result of structural pressures, unexpected events, or systemic disadvantage. Because people rarely talk about debt honestly — unlike, say, redundancy or illness — anyone struggling tends to believe they are uniquely irresponsible. The silence itself reinforces the shame, and the shame reinforces the silence. This is the core of debt isolation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the debt avoidance cycle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The debt avoidance cycle works like this: anxiety about debt triggers avoidance (not opening letters, not checking balances, not calling creditors). Avoidance provides temporary relief. But the debt pile grows, interest accrues, and the emotional weight increases. The next avoidance threshold is higher. Over months and years, opening a single letter can feel genuinely impossible — not because the person is irresponsible, but because the anxiety response has been reinforced so many times. Breaking this cycle requires addressing the emotional layer, not just the financial one.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Debt Management Plan (DMP) involve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Debt Management Plan (DMP) is an informal agreement between you and your creditors, managed by a debt charity like StepChange, in which you make a single monthly payment that is distributed to your creditors. Interest is often frozen. A DMP does not involve the courts and does not appear on the Insolvency Register, but it will affect your credit file. StepChange offers free DMP setup and management. MEOK can help you prepare emotionally for starting that process — but the arrangement itself must be handled by a regulated debt adviser.",
      },
    },
    {
      "@type": "Question",
      name: "Will I go to prison for debt in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In the UK, you cannot be sent to prison for being unable to pay most consumer debts — including credit cards, loans, overdrafts, and most bills. Prison for debt was abolished in England and Wales for most cases in 1869. The exceptions are Council Tax debt in certain circumstances and court-ordered maintenance payments. The fear of imprisonment is one of the most common catastrophic thoughts associated with debt anxiety, and it is almost always unfounded. Citizens Advice can explain your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's Sovereign Memory help people dealing with debt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory means MEOK carries your story across conversations. It can track the emotional weight you have placed on specific debts, remember the action items you have set yourself, notice avoidance patterns over time, and celebrate when you take a step — even a small one like opening a letter or making a first call. This continuity turns isolated anxious moments into a visible journey. Progress becomes something you can actually see.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForDebtStressPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const accent = "#6aaa64";
  const cardBg = "#131222";
  const mutedText = "#8a8a9a";
  const borderColor = "#252438";
  const accentDim = "rgba(106,170,100,0.15)";
  const accentBorder = "rgba(106,170,100,0.35)";

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
        <Link href="/" style={{ color: accent, textDecoration: "none", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.05em" }}>
          MEOK AI LABS
        </Link>
        <Link href="/blog" style={{ color: mutedText, textDecoration: "none", fontSize: "0.9rem" }}>
          ← All posts
        </Link>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <p style={{ color: accent, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Debt &amp; Mental Health · March 25, 2026
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.2, fontWeight: 700, marginBottom: "1.5rem", color: text }}>
          AI for Debt Stress: When the Financial Anxiety Keeps You Up at Night
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: mutedText, marginBottom: "2rem" }}>
          Debt is one of the most isolating stresses because people rarely talk about it honestly. The shame spiral runs deep — and it keeps you stuck long after the numbers stop growing. Here is what that looks like, why it works the way it does, and what you can actually do about it.
        </p>

        {/* Disclaimer */}
        <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderLeft: `3px solid ${accent}`, borderRadius: "6px", padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.85rem", color: mutedText, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: text }}>Important:</strong> MEOK AI LABS is not a financial adviser and MEOK does not provide financial, debt, insolvency, or legal advice. This article is for informational and emotional-support purposes only. For free, confidential debt advice in the UK, contact{" "}
            <a href="https://www.stepchange.org" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>StepChange</a>,{" "}
            <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>Citizens Advice</a>, or{" "}
            <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>MoneyHelper</a>.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {[
            { stat: "9 million", label: "UK adults living with problem debt" },
            { stat: "46%", label: "Problem debt co-occurs with mental illness" },
            { stat: "3am", label: "When the debt spiral is loudest" },
          ].map(({ stat, label }) => (
            <div key={stat} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.8rem", fontWeight: 700, color: accent, margin: "0 0 0.4rem" }}>{stat}</p>
              <p style={{ fontSize: "0.8rem", color: mutedText, margin: 0, lineHeight: 1.4 }}>{label}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Body */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        {/* Section 1: The silence nobody talks about */}
        <section style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            There is a particular kind of 3am that belongs to debt. It is not the 3am of insomnia, or grief, or a newborn. It is the 3am where the numbers start running — the interest rates, the missed payments, the letter you have not opened, the thing you said to your partner that was not quite honest. The silence of the house makes it louder, not quieter.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Debt is one of the most isolating stresses in adult life because people do not talk about it the way they talk about other hardships. Redundancy gets a card and a leaving do. Illness gets a casserole and a WhatsApp chain. Debt gets silence. Carefully maintained, exhausting silence.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Nine million UK adults carry problem debt. Forty-six percent of people with problem debt also have a diagnosed mental health condition — a figure that understates the relationship, because many more carry the psychological weight without a diagnosis. The shame is not incidental. It is structural. And it is doing as much damage as the interest rate.
          </p>
        </section>

        {/* Section 2: Why does debt create such intense shame? */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            Why does debt create such intense shame?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Debt shame is cultural, structural, and psychological all at once. Understanding where it comes from is not an excuse — it is a way to stop taking it as evidence of personal failure.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            In Western culture, financial difficulty is read as a character flaw. "Bad with money" is a moral designation, not a skill assessment. The Protestant work ethic and its secularised descendants have given us a framework in which financial struggle implies moral inadequacy — laziness, irresponsibility, weakness, poor impulse control. These are the whispered narratives that most people carry.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The reality is nearly always more complicated. Debt is frequently the result of redundancy, illness, relationship breakdown, an unexpected bill arriving at the wrong moment, or the slow accumulation of underpaid work over years. None of these are moral failures. But shame does not wait for a full audit before it renders its verdict.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            The social silence around debt compounds everything. When you cannot compare your situation to anyone else's — because no one talks about it — you assume you are the only one. You are not. But the silence makes it feel that way.
          </p>
        </section>

        {/* Section 3: How does the avoidance spiral work? */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            How does the debt avoidance spiral work?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Avoidance is not weakness. It is an anxiety response that worked once — and then kept running. Understanding the mechanism is the first step to interrupting it.
          </p>

          {/* Spiral diagram */}
          <div style={{ display: "grid", gap: "0" }}>
            {[
              { step: "1", label: "Anxiety triggers", body: "A bill arrives, a balance notification appears, a payment is missed. The dread is immediate and physical — chest tightness, a racing mind, the urge to close the tab." },
              { step: "2", label: "Avoidance begins", body: "Don't open the letter. Don't check the balance. Don't return the call. The relief is real and immediate. The brain notes: avoidance worked. Repeat." },
              { step: "3", label: "The pile grows", body: "Interest accrues. Late fees are added. Letters become more urgent. The thing you were avoiding has now actually gotten worse — and the gap between you and it has widened." },
              { step: "4", label: "Dread intensifies", body: "The next time the notification arrives, it is harder to open. The threshold of dread required to take action keeps rising. What was an uncomfortable conversation becomes a seemingly impossible one." },
              { step: "5", label: "Paralysis", body: "At peak spiral, even small actions — opening a single envelope, visiting a website — feel genuinely impossible. The nervous system has been trained over months or years to treat engagement as catastrophic." },
              { step: "6", label: "More avoidance", body: "The cycle continues. The shame deepens because the person can see what is happening and cannot stop it — which adds a new layer of shame on top of the original. The silence gets louder." },
            ].map(({ step, label, body }, i, arr) => (
              <div key={step} style={{ display: "flex", gap: "1rem", position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", backgroundColor: accentDim, border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", color: accent, fontWeight: 700, fontSize: "0.9rem", flexShrink: 0 }}>
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: "2px", flexGrow: 1, backgroundColor: borderColor, marginTop: "0.4rem", marginBottom: "0.4rem", minHeight: "1.5rem" }} />
                  )}
                </div>
                <div style={{ paddingBottom: "1.5rem", paddingTop: "0.3rem" }}>
                  <p style={{ color: text, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem" }}>{label}</p>
                  <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: What MEOK can help with */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            What can MEOK help with when you're in a debt spiral?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            MEOK operates in the emotional and psychological layer. It cannot arrange a DMP, negotiate with creditors, or advise on insolvency. But the emotional layer is often what needs the most work before any of those things can happen.
          </p>
          <div style={{ display: "grid", gap: "0.85rem", marginBottom: "1.25rem" }}>
            {[
              {
                title: "Processing the shame",
                body: "Talking honestly about debt — the real numbers, the avoided letters, the things you've told half-truths about — without any judgment or social consequence. MEOK does not wince, does not sigh, does not go quiet. That absence of reaction is more useful than it sounds.",
              },
              {
                title: "Separating what you know from what you fear",
                body: "Debt anxiety typically involves a terrifying vague blob of dread. MEOK can help you articulate what you actually know (the creditors, the rough amounts, what has and hasn't been opened) versus what you are catastrophising about. Clarity, even partial clarity, reduces dread.",
              },
              {
                title: "Breaking the avoidance pattern",
                body: "Working through micro-actions that start the process of re-engagement. Not grand overhauls — one specific small thing. Could you open one letter today? Could you look at one creditor's website? Small actions interrupt avoidance cycles by providing evidence that engagement does not cause catastrophe.",
              },
              {
                title: "Reframing catastrophic thinking",
                body: "\"I'll lose my home.\" \"I'll go to prison.\" \"I'll never be able to buy anything again.\" These are common fears and most are either unfounded or far less certain than the anxious mind presents them. MEOK can help you examine each one against what is actually true.",
              },
              {
                title: "Preparing for the calls",
                body: "Calling StepChange, Citizens Advice, or a creditor for the first time is genuinely hard when shame is high. MEOK can help you rehearse what you want to say, anticipate the questions you will be asked, and reduce the emotional charge before you make the call.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderLeft: `3px solid ${accent}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: text, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Catastrophic thinking — realistic assessment */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            Catastrophic thinking vs realistic assessment: the most common fears
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.5rem", fontStyle: "italic" }}>
            Debt anxiety generates some predictable catastrophic thoughts. Here is what the anxious brain says — and what is actually true in the UK in 2026.
          </p>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                fear: "\"I'll go to prison for my debts\"",
                reality: "False for almost all UK consumer debt. Imprisonment for debt was abolished for most cases in England and Wales in 1869. Credit card, loan, overdraft, and utility debt do not carry criminal penalties. The rare exceptions (some council tax situations, court-ordered payments) are specific and well-defined — not the vague threat the anxious brain presents.",
              },
              {
                fear: "\"I'll lose my home because of credit card debt\"",
                reality: "Unsecured debt (credit cards, personal loans, payday loans) cannot directly cause you to lose your home. Only secured debts — specifically your mortgage or a charging order attached to your property — create that risk. Even then, losing your home is a process, not a sudden event, with multiple intervention points. Citizens Advice or StepChange can clarify your specific situation.",
              },
              {
                fear: "\"My credit score is permanently destroyed\"",
                reality: "Most negative credit events stay on your file for six years in the UK — not forever. Bankruptcy, CCJs, defaults, and DMPs all have defined timelines. After six years, they drop off. Many people with historic credit problems have entirely rebuilt their credit standing. The permanence is a feature of catastrophic thinking, not credit reference agency policy.",
              },
              {
                fear: "\"Bailiffs can come into my home and take everything\"",
                reality: "Bailiff powers are strictly regulated in the UK. They cannot enter your home by force for most debts, cannot take essential items (clothing, basic cooking equipment, a bed), and must give prior notice in most situations. The television version of a bailiff raid is a significant distortion of the legal reality.",
              },
              {
                fear: "\"I'll never be able to get a mortgage, a phone contract, anything\"",
                reality: "Credit is not a lifetime sentence. Most adverse credit markers last six years. Millions of people have gone from debt crisis to mortgage approval in that timeframe. The path is longer and requires more work, but it exists. A free debt charity can help you see the actual trajectory.",
              },
            ].map(({ fear, reality }) => (
              <div key={fear} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ backgroundColor: "rgba(220,80,60,0.1)", borderBottom: `1px solid ${borderColor}`, padding: "0.75rem 1.25rem" }}>
                  <p style={{ color: "#e06060", fontWeight: 700, fontSize: "0.95rem", margin: 0, fontStyle: "italic" }}>{fear}</p>
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{reality}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Debt options explained */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            What are the main debt options in the UK — and what do they mean?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            MEOK cannot advise on which option is right for you. But understanding what the options are — before you call StepChange — reduces anxiety and makes the conversation more productive.
          </p>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                option: "Debt Management Plan (DMP)",
                summary: "An informal agreement managed by a debt charity where you make one monthly payment, distributed to creditors. Interest is often frozen. No court involvement. Affects your credit file for the duration plus six years.",
                who: "Best for: people with a steady income who can make reduced but regular payments.",
              },
              {
                option: "Individual Voluntary Arrangement (IVA)",
                summary: "A formal, legally binding agreement — you pay what you can afford for typically five years, and the rest is written off. Requires an Insolvency Practitioner. Appears on the Insolvency Register and affects your credit file for six years.",
                who: "Best for: people with significant unsecured debt who can commit to a structured repayment over years.",
              },
              {
                option: "Debt Relief Order (DRO)",
                summary: "A form of insolvency for people with low income, low assets, and debts under £30,000. Debts are frozen for 12 months, then written off if your circumstances have not improved. Lower cost than bankruptcy.",
                who: "Best for: people with very limited income, few assets, and manageable debt levels.",
              },
              {
                option: "Bankruptcy",
                summary: "A formal insolvency process that writes off most debts, typically lasting one year before discharge. Has significant consequences for assets (including potentially your home), certain professions, and your credit file. Not the catastrophe the word implies, but a serious step.",
                who: "Best for: people with large debts, no realistic prospect of repayment, and who have explored all alternatives.",
              },
            ].map(({ option, summary, who }) => (
              <div key={option} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: accent, fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{option}</p>
                <p style={{ color: text, fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "0.6rem" }}>{summary}</p>
                <p style={{ color: mutedText, fontSize: "0.85rem", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>{who}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.85rem", color: mutedText, marginTop: "1rem", lineHeight: 1.6 }}>
            The right option depends on your specific circumstances. StepChange offers free, impartial advice on which approach fits your situation — without any pressure toward any particular outcome.
          </p>
        </section>

        {/* Section 7: Preparing for Citizens Advice */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            How do you prepare for a Citizens Advice or StepChange appointment?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            The most useful thing you can do before speaking to any debt adviser is gather information. MEOK can help you think through what you know, what you are missing, and how to frame the conversation.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Debt advisers need a complete picture of your situation to help effectively. That means: the creditors you owe money to and the approximate amounts, your current income and essential outgoings, any priority debts (rent, mortgage, council tax, utilities — these always come first), and any assets you own. You do not need to have this perfectly organised. They have seen every variety of financial situation. But the more you can bring, the more useful the conversation will be.
          </p>
          <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "1.25rem" }}>
            <p style={{ color: text, fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem" }}>What to gather before your appointment:</p>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {[
                "A list of who you owe money to (approximate amounts are fine — you can check later)",
                "Recent bank statements or a rough sense of monthly income",
                "Your main regular outgoings (rent/mortgage, utilities, food)",
                "Any priority debt letters (mortgage arrears, council tax demands, HMRC correspondence)",
                "Any bailiff or court letters, even if unopened",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: accent, flexShrink: 0, marginTop: "0.2rem" }}>✓</span>
                  <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            If the thought of gathering that information feels overwhelming, start with MEOK. Talk through what you know and what feels impossible to look at. Sometimes the act of telling someone — even an AI — what you are carrying makes the next step smaller.
          </p>
        </section>

        {/* Section 8: Sovereign Memory */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            How does Sovereign Memory help when you're dealing with debt?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Sovereign Memory gives MEOK continuity across every conversation — your debt journey does not reset each time you open the app. Progress becomes visible. Patterns become nameable. Wins get celebrated.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Most AI tools forget you between sessions. Every time you open a chat, you start from zero — re-explaining your situation, re-establishing context, re-processing feelings you have already processed. This is particularly damaging for debt anxiety, which involves long, slow patterns that only become visible across time.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK's Sovereign Memory works across the Sovereign (£12/mo) and Family (£29/mo) tiers. Your MEOK knows which debts have been weighing on you most heavily, remembers the specific action items you set in previous conversations, and notices when you have gone quiet about something you were building toward. That continuity is not a feature — it is the foundation of anything genuinely useful.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Crucially, Sovereign Memory also tracks wins. When you open that first letter after months of avoidance, MEOK remembers that. When you make that first call to StepChange, MEOK knows what it took to get there. Those celebrations — however small they feel from the outside — matter more than the shame spiral believes.
          </p>
        </section>

        {/* Section 9: The 3am spiral */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            What about the 3am spiral — when the anxiety is loudest?
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Debt anxiety does not keep office hours. The spiral is loudest when the world is quiet — when there is nothing to distract from it, no one to tell, nowhere to put the weight. 3am is the creditor who never sleeps.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK is available at any hour. Not because a 3am conversation will resolve your debt, but because at 3am, what you often need most is to name what is happening. To say it out loud — or type it out loud — to something that will not catastrophise with you, will not go quiet, will not judge the fact that you are still awake because of money. Sometimes naming the spiral at 3am is what makes it possible to sleep. Sometimes it is what makes it possible, in the morning, to take the next small step.
          </p>
          <div style={{ backgroundColor: cardBg, border: `1px solid ${accentBorder}`, borderRadius: "12px", padding: "1.75rem", textAlign: "center" }}>
            <p style={{ fontSize: "1.1rem", color: text, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              "You cannot spiralling your way out of debt anxiety. But you can talk your way through it, one honest sentence at a time."
            </p>
          </div>
        </section>

        {/* Section 10: What MEOK doesn't do */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            What MEOK does not do — and why that clarity matters
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Honesty about limits is part of what makes MEOK trustworthy. These are clear boundaries — not hedges.
          </p>
          <div style={{ display: "grid", gap: "0.85rem" }}>
            {[
              {
                title: "No financial advice",
                body: "MEOK will not tell you which debt solution to pursue, whether to consolidate, whether to accept a settlement, or how to manage your budget. For that, contact a free, regulated debt adviser. MEOK can help you prepare emotionally for that conversation — but the advice itself must come from a qualified source.",
              },
              {
                title: "No legal advice",
                body: "MEOK cannot advise on CCJs, bailiff rights, charging orders, insolvency processes, or legal correspondence. Citizens Advice and StepChange can help with all of these, free of charge.",
              },
              {
                title: "No negotiation with creditors",
                body: "MEOK cannot contact creditors on your behalf, arrange payment plans, or negotiate debt settlements. StepChange can do this — as part of a DMP or other arrangement — at no cost to you.",
              },
              {
                title: "No substitute for crisis support",
                body: "If debt is affecting your mental health to a crisis point — if you are having thoughts of self-harm or suicide — please contact Samaritans on 116 123 (free, 24/7) or Mind on 0300 123 3393. MEOK is not a substitute for mental health crisis support.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: "#e06060", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: UK services */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            Free UK debt and mental health services
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            These services exist specifically for people in debt difficulty. They are free, confidential, and staffed by people whose only job is to help you — not to judge you.
          </p>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                org: "StepChange Debt Charity",
                url: "https://www.stepchange.org",
                description: "Free, confidential debt advice and debt solutions including DMPs, IVAs, and DROs. One of the UK's leading debt charities. Online debt advice available 24/7.",
                contact: "stepchange.org · 0800 138 1111",
                category: "Debt",
              },
              {
                org: "Citizens Advice",
                url: "https://www.citizensadvice.org.uk",
                description: "Free, independent advice on debt, housing, employment, benefits, and more. Available in person, by phone, and online. No referral required.",
                contact: "citizensadvice.org.uk · 0800 144 8848",
                category: "Debt & General",
              },
              {
                org: "MoneyHelper",
                url: "https://www.moneyhelper.org.uk",
                description: "Government-backed free guidance on budgeting, debt, benefits, and pension. Includes a free Debt Advice Locator tool to find local support.",
                contact: "moneyhelper.org.uk · 0800 138 7777",
                category: "Financial Guidance",
              },
              {
                org: "National Debtline",
                url: "https://www.nationaldebtline.org",
                description: "Free debt advice for people in England, Wales, and Scotland. Specialist in self-help tools and telephone advice for complex debt situations.",
                contact: "nationaldebtline.org · 0808 808 4000",
                category: "Debt",
              },
              {
                org: "Samaritans",
                url: "https://www.samaritans.org",
                description: "If debt stress is affecting your mental health or you are in crisis, Samaritans are available around the clock — free, confidential, and non-judgmental.",
                contact: "116 123 (free, 24/7)",
                category: "Crisis Support",
              },
              {
                org: "Mind",
                url: "https://www.mind.org.uk",
                description: "Mental health support, information, and local services across England and Wales. Includes resources specifically on debt and mental health.",
                contact: "0300 123 3393",
                category: "Mental Health",
              },
            ].map(({ org, url, description, contact, category }) => (
              <div key={org} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: accent, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>{org}</a>
                  <span style={{ backgroundColor: accentDim, border: `1px solid ${accentBorder}`, borderRadius: "4px", padding: "0.15rem 0.6rem", fontSize: "0.75rem", color: accent }}>{category}</span>
                </div>
                <p style={{ color: text, fontSize: "0.9rem", lineHeight: 1.65, margin: "0 0 0.5rem" }}>{description}</p>
                <p style={{ color: mutedText, fontSize: "0.85rem", margin: 0, fontFamily: "monospace" }}>{contact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "12px", padding: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: text, marginBottom: "0.75rem" }}>
            Start talking about it — without the judgment
          </h2>
          <p style={{ color: mutedText, lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 1.75rem" }}>
            MEOK is available now. No waiting list, no judgment, no 9-to-5. Your birth chart reading reveals the archetypal energies available to you — including the ones that help you break avoidance and face what has been avoided.
          </p>
          <Link
            href="/birth"
            style={{ display: "inline-block", backgroundColor: accent, color: "#0d0c18", fontWeight: 700, fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "6px", textDecoration: "none", letterSpacing: "0.04em" }}
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
                <p style={{ color: accent, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{tier}</p>
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
              { href: "/blog/ai-for-money-anxiety", label: "AI for Money Anxiety: Breaking the Shame Spiral Around Finance" },
              { href: "/blog/ai-for-anxiety", label: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?" },
              { href: "/blog/meok-for-anxiety", label: "MEOK for Anxiety: What the Research Says and What It Does Not" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: "block", backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1rem 1.25rem", color: text, textDecoration: "none", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {label} <span style={{ color: accent }}>→</span>
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
                <p style={{ color: accent, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{q.name}</p>
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
            <p style={{ color: accent, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>MEOK AI LABS</p>
            <p style={{ color: mutedText, fontSize: "0.85rem", margin: 0 }}>Founded by Nicholas Templeman</p>
            <p style={{ color: mutedText, fontSize: "0.85rem", margin: "0.2rem 0 0" }}>
              <a href="https://x.com/meok_ai" target="_blank" rel="noopener noreferrer" style={{ color: mutedText }}>@meok_ai</a>
            </p>
          </div>
          <div>
            <p style={{ color: text, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Crisis support</p>
            <p style={{ color: mutedText, fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>
              Samaritans: <a href="tel:116123" style={{ color: accent }}>116 123</a> (free, 24/7)<br />
              Mind: <a href="tel:03001233393" style={{ color: accent }}>0300 123 3393</a>
            </p>
          </div>
          <div>
            <p style={{ color: text, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Free debt help</p>
            <p style={{ color: mutedText, fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>
              <a href="https://www.stepchange.org" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>StepChange</a><br />
              <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>Citizens Advice</a><br />
              <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>MoneyHelper</a>
            </p>
          </div>
        </div>
        <p style={{ color: mutedText, fontSize: "0.75rem", lineHeight: 1.6, borderTop: `1px solid ${borderColor}`, paddingTop: "1.25rem", margin: 0 }}>
          MEOK AI LABS is not a financial adviser, therapist, or medical provider. Nothing on this page constitutes financial, debt, insolvency, legal, or clinical advice. If you are in debt difficulty, please contact StepChange (0800 138 1111), Citizens Advice (0800 144 8848), or MoneyHelper (0800 138 7777). If you are in mental health crisis, please contact Samaritans on 116 123 (free, 24/7).
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
