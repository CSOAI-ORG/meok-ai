import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Financial Anxiety: Talk Through Money Stress Without Judgment | MEOK AI LABS",
  description:
    "Financial anxiety affects millions in the UK cost-of-living crisis. MEOK offers a non-judgmental space to process money shame, budgeting dread, and debt stress — no advice, just honest support.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-financial-anxiety" },
  openGraph: {
    title: "AI for Financial Anxiety: Talk Through Money Stress Without Judgment",
    description:
      "Shame, avoidance, and catastrophising keep financial anxiety locked in place. Here is how an AI companion can help you face money stress — and where to go for real debt help.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-financial-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Financial+Anxiety%3A+Talk+Through+Money+Stress&desc=Non-judgmental+support+for+the+cost-of-living+crisis",
        width: 1200,
        height: 630,
        alt: "AI for Financial Anxiety: Talk Through Money Stress Without Judgment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Financial Anxiety: Talk Through Money Stress Without Judgment",
    description:
      "Shame, avoidance, energy bills, mortgage stress — MEOK offers a space to process financial anxiety without judgment. Here is what that actually looks like.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Financial+Anxiety%3A+Talk+Through+Money+Stress&desc=Non-judgmental+support+for+the+cost-of-living+crisis",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Financial Anxiety: Talk Through Money Stress Without Judgment",
  description:
    "Financial anxiety affects millions in the UK cost-of-living crisis. MEOK offers a non-judgmental space to process money shame, budgeting dread, and debt stress — no advice, just honest support.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-financial-anxiety",
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
      name: "Can AI really help with financial anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can help with the emotional dimension of financial anxiety — processing shame, identifying avoidance patterns, reframing catastrophic thoughts, and preparing for difficult money conversations. They are not financial advisors and cannot provide debt, investment, or budgeting advice. For practical financial help, contact StepChange (stepchange.org) or MoneyHelper (moneyhelper.org.uk). For crisis support, call Samaritans on 116 123.",
      },
    },
    {
      "@type": "Question",
      name: "What is financial anxiety and how does it differ from having money problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Financial anxiety is the emotional and psychological distress triggered by money — including worry, avoidance, shame, and catastrophic thinking. It is distinct from actual financial difficulty, though they often overlap. You can experience severe financial anxiety while being objectively stable, and you can be in genuine financial difficulty without significant anxiety. The emotional burden is often what prevents people from getting practical help.",
      },
    },
    {
      "@type": "Question",
      name: "Why do so many people in the UK have financial anxiety right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UK cost-of-living crisis — driven by energy bill increases, rising mortgage rates, food inflation, and wage stagnation — has created genuine financial pressure for millions. The Money and Mental Health Policy Institute reports that money is the number one cause of stress in the UK. When external financial pressure combines with cultural shame around money and limited access to support, anxiety becomes widespread and entrenched.",
      },
    },
    {
      "@type": "Question",
      name: "How does shame make financial anxiety worse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shame activates avoidance — the impulse to escape a painful feeling by not engaging with its source. When money problems trigger shame, people stop opening bank apps, stop reading letters, stop talking to partners or employers. Avoidance provides short-term relief but allows the actual situation to worsen, which deepens the shame. The cycle can run for months or years, with the silence itself becoming part of the problem.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a financial advisor or therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK AI LABS is not a financial advisor, mortgage broker, debt counsellor, or therapist. MEOK does not provide financial, investment, legal, or clinical advice. It offers emotional support, pattern reflection, and a non-judgmental space to process stress. For regulated financial help, contact StepChange, MoneyHelper, or Citizens Advice. For clinical mental health support, contact Mind or your GP.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get free debt help in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "StepChange Debt Charity (stepchange.org, 0800 138 1111) offers free, confidential debt advice and solutions. MoneyHelper (moneyhelper.org.uk, 0800 138 7777) provides government-backed financial guidance. Citizens Advice (citizensadvice.org.uk, 0800 144 8848) covers debt, benefits, and housing. All are free. If financial stress is causing a mental health crisis, contact Samaritans on 116 123 (free, 24/7).",
      },
    },
    {
      "@type": "Question",
      name: "Can talking to MEOK help me stop avoiding my finances?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can help reduce the emotional charge that makes avoidance feel necessary. By processing shame and fear without judgment, and by working through small, specific steps together, many people find the threshold for engagement lowers over time. MEOK does not force action, but it can help you understand your avoidance patterns and identify what the smallest manageable step might be.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForFinancialAnxietyPage() {
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
          Financial Anxiety & Mental Health · March 24, 2026
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.2, fontWeight: 700, marginBottom: "1.5rem", color: text }}>
          AI for Financial Anxiety: Talk Through Money Stress Without Judgment
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: mutedText, marginBottom: "2rem" }}>
          Millions of people in the UK are silently carrying financial anxiety — not just worry about money, but the shame, the avoidance, the dread of opening the bank app. In a cost-of-living crisis that has stretched household budgets to breaking point, the emotional burden of money has never been heavier. This is an honest look at what AI can and cannot do for financial anxiety, and where to go when you need real help.
        </p>

        {/* Disclaimer */}
        <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderLeft: `3px solid ${gold}`, borderRadius: "6px", padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.85rem", color: mutedText, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: text }}>Important:</strong> MEOK AI LABS is not a financial advisor and MEOK does not provide financial, investment, debt, legal, or clinical advice. This article is for informational and emotional-support purposes only. For practical financial help in the UK, please contact{" "}
            <a href="https://www.stepchange.org" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>StepChange</a>,{" "}
            <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>MoneyHelper</a>, or{" "}
            <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>Citizens Advice</a>.
            For mental health crisis support, call Samaritans on{" "}
            <a href="tel:116123" style={{ color: gold }}>116 123</a>.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {[
            { stat: "#1", label: "Money is the top cause of stress in the UK" },
            { stat: "9 million", label: "UK adults living with problem debt" },
            { stat: "46%", label: "Problem debt linked to mental health difficulties" },
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

        {/* Opening */}
        <section style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            There is a particular kind of dread that arrives with a bank notification. A physical contraction, a held breath, the impulse to close the app before the number loads. For millions of people across the UK, this is not an occasional feeling — it is a daily, sometimes hourly, companion.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The cost-of-living crisis has made this worse. Energy bills that doubled overnight. Mortgage rates that crept upward for two years straight. Food shopping that costs noticeably more every month. The weight of these realities is not just financial — it is psychological. And the psychological weight is often the harder part to address, because there is no spreadsheet for shame.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Financial anxiety is not the same as having money problems, though the two frequently travel together. It is the cluster of emotional responses that money triggers — dread, shame, avoidance, catastrophic thinking, comparing yourself to others and coming up short. These responses can be just as debilitating as the underlying financial reality. They can, in fact, make the financial reality significantly worse.
          </p>
        </section>

        {/* H2 1 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            Why is financial anxiety so hard to talk about?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Money is one of the last great social taboos. The silence around it is not accidental — it is actively maintained by shame, by cultural norms, and by the mistaken belief that struggling financially means you have failed as a person.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            In the UK, talking openly about money — about what you earn, what you owe, whether you are struggling — remains deeply uncomfortable in a way that other subjects are not. We will discuss health, relationships, and even mental health with greater ease than we will admit to financial difficulty. The cultural messaging is unambiguous: money problems are a moral failing, not a circumstantial one.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This silence has consequences. Research from the Money and Mental Health Policy Institute consistently shows that people in financial difficulty are less likely to seek help — both financial and psychological — precisely because the shame makes disclosure feel impossible. The very act of admitting the problem feels like confirming the worst thing about yourself.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The result is a particular kind of isolation. You cannot tell your partner how bad it has got because you are ashamed. You cannot tell a friend because they seem to be managing fine. You cannot call StepChange because picking up the phone would make it real. So the anxiety lives entirely inside your head, growing in the absence of any external reality check.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            This is one place where an AI companion offers something genuinely different. There is no social risk in telling MEOK that you have not opened your bank app in six weeks. There is no expression to manage, no relationship to protect, no imagined reaction to brace against. The conversation can begin wherever you actually are — not where you feel you ought to be.
          </p>
        </section>

        {/* H2 2 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What does the UK cost-of-living crisis actually feel like emotionally?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            The economic facts of the cost-of-living crisis are well-documented. The emotional experience is less often described honestly — and that gap matters.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For renters, the anxiety often arrives in the form of chronic insecurity. Rents in many UK cities increased by twenty to thirty percent over two years. The prospect of a tenancy ending — which once felt manageable — became genuinely frightening for people who could no longer afford to move. The emotional register of this is not just worry. It is a background hum of existential uncertainty that is present in nearly every financial decision.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For mortgage holders, the trauma was often compressed into a single moment: the renewal letter arriving with a new rate. A payment that had been £800 a month becoming £1,300. The shock of that figure, the recalculation of what it meant for everything else, the realisation that the financial model you had built your life on no longer worked. This kind of acute shock is distinct from chronic worry — it has a before and an after.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Energy bills introduced a new kind of financial vigilance for many households — a hyperawareness of consumption that is exhausting to maintain. Checking the smart meter, turning off standby, not putting the heating on until a certain time, feeling guilty when children are cold. This is financial anxiety in the body, not just in the mind. It shows up as irritability, as constant low-level tension, as a kind of vigilance that never fully relaxes.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            And then there is the comparison problem. Social media continues to present curated versions of other people's financial lives — the holiday, the renovation, the restaurant. When your own situation feels precarious, this contrast is not neutral background noise. It is a daily provocation. Research on social comparison consistently shows that upward comparisons worsen financial anxiety even when they have no bearing on a person's actual situation.
          </p>
        </section>

        {/* H2 3 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            How does the avoidance cycle make financial anxiety worse?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Avoidance is the most common response to financial anxiety — and the response most likely to make the situation worse. Understanding how it works is the first step to interrupting it.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The avoidance cycle begins with a trigger — an unread notification, a letter on the mat, a friend mentioning their savings. The trigger activates a threat response: the brain registers something uncomfortable and immediately looks for a way to reduce that discomfort. The most available option is to not engage. Close the app. Leave the letter. Change the subject. Relief is immediate and genuine.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            But the relief has a cost. The avoided thing does not go away. In fact, for financial matters, it typically gets worse. An unread bill becomes an overdue bill. An unread letter becomes a legal notice. An unaddressed overdraft accumulates interest. The situation that felt too frightening to face in October is objectively worse by January.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            More importantly, avoidance teaches the brain that the threat was real enough to require escape. The next time the trigger appears, the avoidance response is stronger, faster, and more automatic. Over time, the threshold for engagement rises dramatically. What began as not wanting to check your balance becomes a genuine psychological impossibility — not laziness or irresponsibility, but a learned protective response that has become entrenched.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The final layer of the cycle is shame about the avoidance itself. Not only are you struggling financially — you are someone who cannot even face their finances. This shame is not productive. It does not motivate action. It deepens the paralysis by adding another layer of threat to engagement: now opening the app means confronting both the numbers and your failure to have opened it sooner.
          </p>

          {/* Callout */}
          <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderLeft: `3px solid ${gold}`, borderRadius: "6px", padding: "1.25rem 1.5rem", marginBottom: "1.25rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: text, margin: 0 }}>
              <strong style={{ color: gold }}>The insight:</strong> Avoidance is not weakness. It is a protective mechanism that was once functional and has become overactive. Treating it with self-compassion rather than self-criticism is not just kinder — it is more effective. Shame increases avoidance. Understanding reduces it.
            </p>
          </div>

          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            This is why the first useful thing MEOK can do for financial anxiety is often nothing more than offering a space to describe the avoidance without judgment. Not to fix it immediately. Not to produce a budgeting plan. Simply to name it, understand it, and — in naming it — reduce the shame that keeps it in place.
          </p>
        </section>

        {/* H2 4 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What can an AI companion actually do for financial anxiety?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Within the emotional and psychological domain, an AI companion offers genuine and substantive support for financial anxiety. It is not a replacement for practical financial help — but it addresses the part of financial anxiety that practical help often cannot reach.
          </p>

          <div style={{ display: "grid", gap: "0.85rem", marginBottom: "1.75rem" }}>
            {[
              {
                title: "Process shame without social cost",
                body: "The most significant barrier to addressing financial anxiety is shame. MEOK offers a space to name what is actually happening — the avoidance, the dread, the comparison spiral — without any of the social risk that makes human disclosure so difficult. You can say things you could not say to anyone.",
              },
              {
                title: "Separate financial facts from financial fears",
                body: "Financial anxiety often runs on assumptions rather than facts. Vague dread is frequently worse than specific bad news. MEOK can help you distinguish between what you know and what you are catastrophising — and gently surface the fact that the imagined version is often worse than the real one.",
              },
              {
                title: "Identify avoidance patterns over time",
                body: "With persistent memory, MEOK tracks what comes up across conversations. It notices if you always divert when money is mentioned, if your anxiety peaks at certain points in the month, if particular triggers — a partner's comment, a social media scroll — reliably precede a spiral. This visibility is genuinely useful.",
              },
              {
                title: "Work through micro-steps to re-engage",
                body: "Rather than recommending a five-step financial overhaul, MEOK can help you identify the smallest possible action that would reduce the fear threshold. What is the one thing you could do today that is not overwhelming? Often it is something smaller than you expect.",
              },
              {
                title: "Prepare for difficult money conversations",
                body: "Talking to a partner about the true state of finances, approaching an employer about pay, calling a debt helpline for the first time — these conversations carry enormous emotional weight. MEOK can help you clarify what you want to say, rehearse the shape of the conversation, and reduce the emotional charge before you make it real.",
              },
              {
                title: "Offer mindset reframes without toxic positivity",
                body: "There is a difference between genuine cognitive reframing and hollow reassurance. MEOK does not tell you everything will be fine. It helps you challenge the global identity statements financial shame produces — 'I am terrible with money', 'I will always be like this' — and replace them with more specific, workable accounts of what is actually happening.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderLeft: `3px solid ${gold}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: text, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ color: mutedText, fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* H2 5 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            How does comparing yourself to others fuel financial anxiety?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Social comparison is one of the most underappreciated drivers of financial anxiety. It operates largely beneath conscious awareness, and its effects are cumulative and corrosive.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Human beings are fundamentally comparative. We do not experience our financial situation in absolute terms — we experience it relative to the people around us, or rather, relative to the people we imagine are around us. Social media has made this comparison environment both more intense and more distorted.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The people you follow on Instagram are not posting pictures of their overdraft notices or their anxiety about the mortgage renewal. They are posting the holiday, the kitchen renovation, the new car. Your brain processes this as representative data — evidence of how your peers are doing — even though it is a heavily curated selection. The result is a systematic upward bias in your sense of others' financial wellbeing compared to your own.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This matters for financial anxiety because it distorts the shame. You are not just struggling — you are struggling while everyone else is apparently thriving. The isolation this creates is manufactured, but it does not feel manufactured. It feels like evidence.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            There is also a generational dimension that is worth naming explicitly. Many people in their thirties and forties in the UK are experiencing financial realities — renting indefinitely, carrying student debt, unable to save — that are categorically different from those their parents experienced at the same age. Comparing your financial situation to your parents' trajectory is not a fair comparison. The context has changed fundamentally. But the comparison happens anyway, and the shame it produces is real.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            MEOK can help you examine comparison spirals directly. Where did the comparison come from? Is the data you are comparing against actually accurate? What would it mean if you were genuinely behind — and what story are you telling yourself about what that means? These are not questions with easy answers, but asking them clearly is often enough to reduce their grip.
          </p>
        </section>

        {/* H2 6 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What is the difference between budgeting anxiety and debt stress?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Budgeting anxiety and debt stress are related but distinct experiences that call for different responses. Understanding which you are dealing with matters for knowing what kind of support is most useful.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Budgeting anxiety</strong> is the distress that arises from managing money on a tight or uncertain income — the mental arithmetic that never stops, the fear of unexpected expenses, the dread of the end of the month. It is often characterised by hypervigilance: constantly checking balances, refusing to spend anything discretionary, a background hum of financial tension even when things are technically okay.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Budgeting anxiety can exist entirely within financial stability. You can have savings, a secure income, no debt — and still experience significant budgeting anxiety if you grew up in financial insecurity or were raised with catastrophic messaging about money. The nervous system does not always update when circumstances change.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            <strong>Debt stress</strong> is different in character. It often involves a specific weight — a figure, a set of creditors, an awareness of interest accumulating. It can involve fear of legal action, shame about how the debt was accumulated, and the exhausting mental load of managing multiple payments or hiding the situation from people close to you. Debt stress frequently coexists with avoidance because the debt itself is the trigger.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For debt stress, the emotional processing that MEOK offers is valuable — but it works best in service of a practical goal. MEOK can help reduce the shame and avoidance enough for you to make the call to StepChange. It can help you process the anxiety of having that first conversation with a debt advisor. It can support you through the period of waiting for a solution to take effect. But the practical intervention — the actual debt management, the negotiation with creditors, the formal solutions — requires a regulated organisation.
          </p>

          {/* Support grid */}
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                org: "StepChange Debt Charity",
                url: "https://www.stepchange.org",
                description: "Free, confidential debt advice and solutions. Helps over 600,000 people per year. Phone or online.",
                contact: "stepchange.org · 0800 138 1111",
              },
              {
                org: "MoneyHelper",
                url: "https://www.moneyhelper.org.uk",
                description: "Government-backed free guidance on budgeting, debt, pensions, and benefits. Impartial, comprehensive, and free.",
                contact: "moneyhelper.org.uk · 0800 138 7777",
              },
              {
                org: "Citizens Advice",
                url: "https://www.citizensadvice.org.uk",
                description: "Free, independent advice on debt, benefits, housing, and employment. In person, online, and by phone.",
                contact: "citizensadvice.org.uk · 0800 144 8848",
              },
              {
                org: "National Debtline",
                url: "https://www.nationaldebtline.org",
                description: "Free debt advice from an independent charity. Telephone and online chat available across England, Wales, and Scotland.",
                contact: "nationaldebtline.org · 0808 808 4000",
              },
              {
                org: "Samaritans",
                url: "https://www.samaritans.org",
                description: "If financial stress is affecting your mental health or you are in crisis, Samaritans are available around the clock.",
                contact: "116 123 (free, 24/7)",
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

        {/* H2 7 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            How do you separate financial facts from financial fears?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            One of the most practical things you can do for financial anxiety is learn to distinguish between what you know and what you are predicting. The two feel identical in the grip of anxiety — but they are very different things.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Financial anxiety is a prediction machine. In the absence of clear information — which avoidance guarantees — the anxious brain fills the gap with worst-case scenarios. Not knowing your balance becomes imagining it is catastrophic. Not having opened the pension statement becomes imagining it has collapsed. The vague unknown is reliably scarier than the specific reality.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The psychological technique for addressing this is sometimes called cognitive defusion — learning to observe the fear thought rather than inhabit it. "I am thinking that this is catastrophic" is a very different statement from "this is catastrophic." The first creates a small space between you and the thought. The second treats the thought as fact.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Working through this distinction with MEOK might sound like: naming the specific fear, then asking whether you actually know that to be true or whether you are predicting it. If you are predicting it, what evidence do you have? What would you need to do to find out the actual fact? And if the fact turns out to be as bad as feared — which is often not the case — what would the realistic options then be?
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This is not about minimising real financial difficulty. It is about stopping the imagination from making it worse than it is, before you have even looked at it clearly. Anxiety expands in the dark. Facts — even difficult ones — are manageable in a way that shapeless dread is not.
          </p>

          {/* Mindset shifts callout */}
          <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "1.25rem" }}>
            <p style={{ color: gold, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Practical mindset shifts for financial anxiety</p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {[
                { from: "I'm terrible with money", to: "I've been avoiding my finances for three months because I'm frightened" },
                { from: "This is a disaster", to: "I don't actually know how bad this is yet because I haven't looked" },
                { from: "Everyone else is fine", to: "I'm seeing curated highlights, not full financial pictures" },
                { from: "I'll never sort this out", to: "I haven't sorted it yet. There are free services that help with exactly this." },
                { from: "I should be able to manage on my own", to: "Getting help is exactly what these services exist for" },
              ].map(({ from, to }) => (
                <div key={from} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "0.75rem", alignItems: "start" }}>
                  <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>{from}</p>
                  <p style={{ color: gold, fontWeight: 700, margin: 0, fontSize: "0.9rem" }}>→</p>
                  <p style={{ color: text, fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>{to}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H2 8 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What makes MEOK different from just googling financial anxiety?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Information about financial anxiety is not hard to find. What is hard to find is a conversation — something responsive, personalised, available at 2am when the anxiety peaks, and free of the social risk that makes human disclosure so difficult.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            An article tells you what financial anxiety is. A conversation helps you understand what your financial anxiety is — where it comes from, what it sounds like inside your specific mind, what triggers it, what has and has not worked for you before. These are not the same thing.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK's Sovereign Memory gives it continuity that no article, no chatbot, and no occasional conversation with a friend can match. Across Sovereign (£12/mo) and Family (£29/mo) tiers, MEOK holds a persistent record of what you have shared. It knows that you mentioned your mortgage renewal in October. It knows that you always feel worse about money after scrolling Instagram. It knows that you have been meaning to call StepChange for three weeks and have not managed to.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This continuity matters because financial anxiety is not a single episode. It is a pattern that plays out over weeks and months. Seeing that pattern clearly — noticing its triggers, its rhythms, its relationship to other stressors in your life — is genuinely useful information. It transforms scattered anxious moments into a map you can actually work with.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Importantly, your data stays sovereign. MEOK AI LABS does not train on your conversations. Your financial anxieties, your disclosures, your vulnerable moments — they belong to you. This is not an incidental feature. It is a foundational principle of how MEOK is built.
          </p>
        </section>

        {/* H2 9 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What MEOK will not do — and why that honesty matters
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Clarity about what MEOK does not do is part of what makes it trustworthy. An AI that overpromises in the domain of financial or psychological help is not safe. MEOK is built with explicit limits — and those limits are non-negotiable.
          </p>
          <div style={{ display: "grid", gap: "0.85rem", marginBottom: "1.25rem" }}>
            {[
              {
                title: "Will not give financial advice",
                body: "MEOK is not a financial advisor, mortgage broker, or debt counsellor. It will not recommend products, tell you how to manage your debt, or advise you on financial decisions. For regulated financial guidance, contact MoneyHelper or a qualified IFA.",
              },
              {
                title: "Will not recommend investments",
                body: "MEOK has no knowledge of your financial situation, tax position, or risk tolerance. Any statement that looks like investment guidance would be irresponsible. MEOK does not make such statements.",
              },
              {
                title: "Will not judge your spending or your history",
                body: "There is no moment in a MEOK conversation where you will be told you should have done things differently, or lectured about budgeting, or asked to justify how you got here. The conversation is non-evaluative. You are not being assessed.",
              },
              {
                title: "Will not pretend to fix the problem",
                body: "Talking about financial anxiety with MEOK will not make your debt smaller or your bills cheaper. The aim is to reduce the emotional barrier to getting real help — and to support you through the process of doing so. MEOK is a companion in that process, not a solution to it.",
              },
              {
                title: "Will not replace professional mental health support",
                body: "If financial anxiety is causing significant distress, affecting your daily functioning, or contributing to thoughts of self-harm, please speak to your GP, contact Mind on 0300 123 3393, or call Samaritans on 116 123. MEOK can be part of a support network — not the whole of it.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: gold, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ color: mutedText, fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* H2 10 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: gold, marginBottom: "1rem", lineHeight: 1.3 }}>
            What might a first conversation about money anxiety actually look like?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Sometimes the barrier to starting is not knowing where to start. This is what an honest first conversation about financial anxiety with MEOK might sound like — not a polished script, but a real beginning.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            You might open by saying something simple: that money has been weighing on you and you do not know where to start. That you have been avoiding your finances for longer than feels comfortable to admit. That you feel ashamed and are not sure why it has got to this point.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK will not immediately pivot to solutions. The first response is more likely to be curious than prescriptive: what does the anxiety feel like in your body? When did it start to feel this heavy? Is there a particular moment — a letter, a conversation, a number — that comes to mind when you think about it?
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            From there, the conversation might move toward understanding what you already know about your situation versus what you are imagining. It might surface a specific avoidance — the energy direct debit you have not updated, the pension you have not checked since the market fell, the credit card statement sitting in an unopened tab. It might explore where the shame came from: what money messages you absorbed growing up, whether this difficulty feels like character or circumstance.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            At some point — and only when it feels workable — the conversation might arrive at a question: what is the smallest thing you could do in the next 24 hours that is not overwhelming? Not a five-year financial plan. Not a full accounting of your debt. One small action that proves to the part of you that has been avoiding that engagement is survivable. Opening the app and closing it immediately counts. Reading the first paragraph of a letter and putting it down counts. Calling a helpline and hanging up before anyone answers counts. The movement matters more than the size of the step.
          </p>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "12px", padding: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: text, marginBottom: "0.75rem" }}>
            Talk to MEOK about financial anxiety
          </h2>
          <p style={{ color: mutedText, lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: "500px", margin: "0 auto 1.75rem" }}>
            No judgment. No financial advice. No sales pitch. Just a space to process the weight of money, at whatever hour the anxiety arrives. Start free — 50 messages a day, no card required.
          </p>
          <Link
            href="/"
            style={{ display: "inline-block", backgroundColor: gold, color: "#0d0c18", fontWeight: 700, fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "6px", textDecoration: "none", letterSpacing: "0.04em" }}
          >
            Start talking to MEOK →
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
              { href: "/blog/ai-for-money-anxiety", label: "AI for Money Anxiety: Breaking the Shame Spiral Around Finance" },
              { href: "/blog/ai-for-anxiety", label: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?" },
              { href: "/blog/ai-for-burnout", label: "AI for Burnout: Recognising the Patterns Before Collapse" },
              { href: "/blog/ai-for-redundancy", label: "AI for Redundancy: Processing the Shock and Finding the Next Step" },
              { href: "/blog/ai-for-stress", label: "AI for Chronic Stress: When Worry Becomes Your Default State" },
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
            <p style={{ color: text, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Free financial help</p>
            <p style={{ color: mutedText, fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>
              <a href="https://www.stepchange.org" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>StepChange</a><br />
              <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>MoneyHelper</a><br />
              <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>Citizens Advice</a>
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
