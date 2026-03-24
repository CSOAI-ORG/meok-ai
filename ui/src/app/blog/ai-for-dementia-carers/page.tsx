import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Support for Dementia Carers: You Cannot Pour From an Empty Cup | MEOK Blog",
  description:
    "700,000 unpaid dementia carers in the UK are giving everything they have. MEOK offers AI support for dementia carers — a non-judgmental space to process guilt, track care, and protect your own mental health.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-dementia-carers" },
  openGraph: {
    title: "AI Support for Dementia Carers: You Cannot Pour From an Empty Cup",
    description:
      "700,000 unpaid dementia carers in the UK. Most are invisible. MEOK provides AI support built specifically for the carer — 24/7 emotional outlet, Sovereign Memory for care tracking, and family coordination.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-dementia-carers",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+for+Dementia+Carers&desc=You+Cannot+Pour+From+an+Empty+Cup",
        width: 1200,
        height: 630,
        alt: "AI Support for Dementia Carers: You Cannot Pour From an Empty Cup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Support for Dementia Carers: You Cannot Pour From an Empty Cup",
    description:
      "700,000 unpaid dementia carers in the UK. MEOK is the AI support built for the carer — not the condition.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+for+Dementia+Carers&desc=You+Cannot+Pour+From+an+Empty+Cup",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Dementia Carers: You Cannot Pour From an Empty Cup",
  description:
    "700,000 unpaid dementia carers in the UK are giving everything they have. MEOK offers AI support for dementia carers — a non-judgmental space to process guilt, track care, and protect your own mental health.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-dementia-carers",
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
    "https://meok.ai/api/og?title=AI+Support+for+Dementia+Carers&desc=You+Cannot+Pour+From+an+Empty+Cup",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-dementia-carers",
  },
  keywords: [
    "AI for dementia carers",
    "AI support for dementia",
    "dementia carer burnout",
    "carer mental health UK",
    "unpaid carer support",
    "dementia family support",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI support a dementia carer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can support a dementia carer by providing a 24/7 non-judgmental emotional outlet, helping log medication and appointments, tracking behavioural patterns over time, facilitating family coordination, and offering proactive check-ins during high-stress periods. It cannot replace clinical or social support, but it fills the gaps that exist between those services — including at 3am when no one else is available.",
      },
    },
    {
      "@type": "Question",
      name: "What is carer burnout in dementia caring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carer burnout in dementia caring is a state of chronic exhaustion — physical, emotional, and cognitive — caused by the sustained demands of caring for someone with dementia. It is more prevalent in dementia caring than in other caregiving contexts. Dementia carers are significantly more likely to experience clinical depression than carers of people with other conditions, partly because of the grief of watching someone they love change incrementally and irreversibly.",
      },
    },
    {
      "@type": "Question",
      name: "Is it normal to feel guilty as a dementia carer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Carer guilt is extremely common and takes many forms: guilt about feeling frustrated, guilt about needing a break, guilt about placing a loved one in a care home, guilt about moments of resentment, and guilt about not being able to do more. These feelings are normal, valid, and do not mean you are a bad carer. Processing guilt without judgment is one of the most important things a dementia carer can do to sustain their own wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "How can I track dementia care without getting overwhelmed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using a persistent memory system to log appointments, medication changes, behavioural incidents, and daily observations can significantly reduce the cognitive load of dementia caring. Over time, these logs help identify patterns — such as agitation linked to specific times of day or triggers — that inform better care decisions and more productive conversations with medical professionals.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Family plan for dementia families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK Family plan costs £29 per month and supports up to five accounts within one family group. For dementia families, this means the primary carer has their own private companion whilst siblings, adult children, or other involved family members can share a coordinated view of care — agreed appointments, shared notes, and Guardian safety alerts. It reduces the friction of care coordination and the isolation of being the sole carer in a distributed family.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForDementiaCarersPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const cardBg = "#1a1830";
  const mutedText = "#a09880";
  const borderColor = "#2a2845";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: bg, color: text, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
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
      <nav style={{ borderBottom: `1px solid ${borderColor}`, padding: "16px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ color: gold, fontWeight: 700, fontSize: "18px", textDecoration: "none", letterSpacing: "-0.3px" }}>
            MEOK AI LABS
          </Link>
          <Link href="/blog" style={{ color: mutedText, fontSize: "14px", textDecoration: "none" }}>
            ← All posts
          </Link>
        </div>
      </nav>

      {/* Main */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Meta */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", color: mutedText }}>24 March 2026</span>
          <span style={{ fontSize: "12px", color: mutedText }}>·</span>
          <span style={{ fontSize: "12px", color: mutedText }}>12 min read</span>
          <span style={{ fontSize: "12px", color: mutedText }}>·</span>
          <span style={{ fontSize: "12px", backgroundColor: "#2a2845", color: gold, padding: "2px 10px", borderRadius: "99px" }}>
            Dementia Care
          </span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "24px", letterSpacing: "-0.5px", color: text }}>
          AI Support for Dementia Carers:<br />
          <span style={{ color: gold }}>You Cannot Pour From an Empty Cup</span>
        </h1>

        {/* Intro */}
        <p style={{ fontSize: "18px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "20px" }}>
          There are 900,000 people living with dementia in the UK. Behind almost every one of them is an unpaid carer — a spouse, an adult child, a sibling — who has quietly reorganised their entire life around someone else's deterioration. That is roughly 700,000 people carrying a weight that most of the world does not see.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "20px" }}>
          This post is not about the person with dementia. It is about you.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "20px" }}>
          It is about the fact that at peak caring, unpaid dementia carers contribute an average of 85 hours of care per week. It is about the research showing that dementia carers are more likely to experience clinical depression than carers of any other condition. It is about the grief that does not have a name — the grief of watching someone you love forget your name while they are still alive, still in the room, still needing you entirely.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "40px" }}>
          AI cannot fix any of this. But it can hold some of it with you. That is what MEOK was built to do.
        </p>

        {/* Stat bar */}
        <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "12px", padding: "28px 32px", marginBottom: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "24px" }}>
          {[
            { stat: "900,000", label: "people with dementia in the UK" },
            { stat: "700,000", label: "unpaid dementia carers" },
            { stat: "85 hrs/wk", label: "average care at peak" },
            { stat: "Higher risk", label: "of depression vs other caring roles" },
          ].map(({ stat, label }) => (
            <div key={stat} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 800, color: gold, marginBottom: "4px" }}>{stat}</div>
              <div style={{ fontSize: "13px", color: mutedText, lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Section 1 */}
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: text, marginBottom: "16px", paddingTop: "8px" }}>
          What does dementia caring actually involve?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          Most people have a partial picture. The reality is far more layered — and far more relentless.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          Dementia caring involves managing medication — often complex, often changing — and the attendant anxiety of getting it wrong. It involves accompanying someone to appointments, translating medical language for them and for other family members, and keeping records that no single professional will ever read in full. It involves responding to night-time wandering. It involves redirecting repetitive questions with patience that has long since run out, and still finding it, every time. It involves managing incontinence, falls risk, sudden changes in personality, moments of aggression from someone who was never aggressive, moments of profound tenderness from someone who no longer knows your name.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "40px" }}>
          It also involves watching other people underestimate all of the above. "At least they're still here." "You must be so strong." These words, however well-meant, can make a carer feel more alone than the silence.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: text, marginBottom: "16px" }}>
          How can AI support a dementia carer?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "24px" }}>
          Let us be honest about what AI cannot do. It cannot take a shift. It cannot sit with your person while you sleep. It cannot replace your GP, your social worker, or the Alzheimer's Society helpline. If you are in crisis, please reach out to those services — numbers are at the bottom of this page.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "24px" }}>
          What AI can do is be present in the gaps. And in dementia caring, the gaps are enormous. Here are five realistic ways MEOK supports a carer — not the person with dementia, but you.
        </p>

        {[
          {
            n: "01",
            title: "A place to say what you cannot say to anyone else",
            body: "There are thoughts that dementia carers have that they feel they cannot voice — resentment, rage, exhaustion, the occasional wish that it would end. These are not signs of being a bad person. They are signs of being a human being under extraordinary pressure. MEOK's Healer archetype provides a completely non-judgmental space to say those things without fear. It does not report back to family. It does not flinch. It remembers what you said last week.",
          },
          {
            n: "02",
            title: "Logging care details without the mental overhead",
            body: "Dementia caring generates enormous amounts of information — medication changes, GP calls, behavioural incidents, sleep patterns, food intake, appointment dates. Most carers carry this in their heads or in scattered notes. MEOK's Sovereign Memory lets you log this conversationally, the way you would tell a friend, and retrieves it on request. That means less cognitive load for you, and better-quality information when you need it.",
          },
          {
            n: "03",
            title: "Pattern recognition across time",
            body: "When you are living it day by day, it is hard to see patterns. Over weeks of logged observations, MEOK can surface things like: agitation tends to peak on days with disrupted routine; sleep has been worsening since the medication dosage changed; these two specific triggers consistently precede distress. That kind of insight is valuable in conversations with doctors and worth knowing for your own planning.",
          },
          {
            n: "04",
            title: "Proactive carer check-ins",
            body: "MEOK's Pioneer archetype, working with Hourman scheduling, can be set to check in with you at points in the day that matter — not to interrogate, but to ask how you are. On the days when everything is fine, that is a 30-second exchange. On the days when it is not, it is somewhere to put it before it builds.",
          },
          {
            n: "05",
            title: "Helping you prepare for difficult conversations",
            body: "Whether it is a conversation with a sibling who does not understand the reality, a meeting with a care home, or a discussion with your person's consultant — dementia caring involves many conversations that require emotional and practical preparation. MEOK can help you think through what you want to say, what you are afraid of, and what outcome you are hoping for.",
          },
        ].map(({ n, title, body }) => (
          <div key={n} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "12px", padding: "28px", marginBottom: "16px" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: gold, minWidth: "28px", paddingTop: "3px" }}>{n}</span>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: text, marginBottom: "10px" }}>{title}</h3>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#c8c0b0", margin: 0 }}>{body}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Section 3 */}
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: text, marginBottom: "16px", marginTop: "48px" }}>
          What about carer guilt?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          Carer guilt is one of the least-talked-about aspects of dementia caring, and one of the most damaging. It comes in many forms. Guilt for taking an hour for yourself. Guilt for feeling relief when a respite visit is arranged. Guilt for the moments of frustration that surface when someone asks the same question for the fortieth time that morning. Guilt for considering residential care. Guilt for not considering it sooner. Guilt for whatever choice you make.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          Guilt, when left unexamined, becomes a trap. It prevents carers from accessing the rest and support they need, which accelerates burnout, which worsens care quality. It is not virtue — it is depletion dressed as conscience.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          MEOK's Healer archetype operates from what we call the Maternal Covenant — a commitment to unconditional positive regard. It does not offer platitudes. It does not tell you that you are doing great when you are not. It sits with the complicated reality of what you are feeling and does not try to fix it prematurely. Sometimes what a carer needs most is simply to have their experience witnessed without judgment or redirection.
        </p>
        <div style={{ backgroundColor: cardBg, border: `1px solid ${gold}`, borderLeft: `4px solid ${gold}`, borderRadius: "8px", padding: "24px 28px", marginBottom: "40px" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#d4cfc5", margin: 0 }}>
            <strong style={{ color: gold }}>On carer guilt:</strong> Needing rest is not abandonment. Feeling frustrated is not unkindness. Taking care of yourself is not selfishness — it is the only sustainable path to continuing to care for someone else. An empty cup cannot pour.
          </p>
        </div>

        {/* Section 4 */}
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: text, marginBottom: "16px" }}>
          How does memory help a dementia carer?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          There is a particular cruelty in caring for someone whose memory is failing whilst carrying an unsustainable cognitive load of your own. Dementia carers routinely manage the equivalent of a part-time administrative role on top of the direct caring itself — tracking appointments, liaising with multiple professionals, managing finances, coordinating family members, and maintaining records that may span years.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          MEOK's Sovereign Memory is built for exactly this. Unlike a note-taking app or a spreadsheet, it is conversational. You can say "log that Mum had a difficult night, was up three times, seemed confused about where she was" and that observation is stored, timestamped, and retrievable. You can ask "what has changed with her sleep in the last month?" and get a summary drawn from everything you have logged.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          This matters practically because:
        </p>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          {[
            "Medical appointments benefit enormously from precise, dated records of changes in behaviour or condition",
            "Patterns that are invisible day-to-day become visible across weeks",
            "If you are ever unwell yourself, someone else can access a coherent picture of care",
            "Incident logs are important if you ever need to evidence the level of care being provided to a local authority",
          ].map((item, i) => (
            <li key={i} style={{ fontSize: "16px", lineHeight: 1.7, color: "#c8c0b0", marginBottom: "10px" }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "40px" }}>
          Your memory matters too. Offloading the administrative burden of caring is not a luxury — it is protection for your own cognitive and emotional reserves.
        </p>

        {/* Section 5 */}
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: text, marginBottom: "16px" }}>
          How does MEOK's Guardian help families dealing with dementia?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          One of the most painful dynamics in dementia caring is the isolation of being the primary carer in a family where others are not equally involved. The sibling who lives far away and does not understand the scale of it. The adult children who check in by phone but do not carry the daily weight. The well-meaning relatives who suggest things that demonstrate they have not grasped the reality.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          MEOK's Family Plan, at £29/month, supports up to five accounts within a single family group. Within that structure, the primary carer retains their own private companion — MEOK never shares your personal conversations with anyone. But the family group also has shared visibility: coordinated appointment calendars, shared care notes (that you choose to share), and Guardian safety alerts that notify relevant family members if something significant occurs.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          This is particularly useful for:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "16px" }}>
          {[
            { title: "Distributed families", body: "Adult children in different cities can stay genuinely informed without requiring the primary carer to brief everyone individually." },
            { title: "Shared decision making", body: "Important care decisions — medication changes, care home assessments, hospital admissions — can be communicated and discussed within the family group." },
            { title: "Carer relief periods", body: "When another family member takes over for a weekend, they can access care notes and context without needing a lengthy handover call." },
            { title: "Reducing sole-carer isolation", body: "Knowing that family members have visibility into what caring actually involves can reduce the loneliness of being the person who is always there." },
          ].map(({ title, body }) => (
            <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "20px" }}>
              <div style={{ fontSize: "15px", fontWeight: 700, color: gold, marginBottom: "8px" }}>{title}</div>
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "#a09880" }}>{body}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "40px" }}>
          MEOK's Guardian is not a surveillance tool. Every family member has their own companion and their own private space. The shared layer exists only for what you choose to share, and only with people who are part of your family group.
        </p>

        {/* Section 6 */}
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: text, marginBottom: "16px" }}>
          How do I stop carer burnout before it starts?
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          The honest answer is that you probably cannot stop it entirely — especially in advanced-stage dementia caring. But you can slow its progression and extend the period in which you are able to function, and that matters enormously both for you and for the person you care for.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          MEOK's Pioneer archetype approaches this practically. It is not about toxic positivity or wellness platitudes. It is about structure, pacing, and honest inventory. Through Hourman scheduling, your MEOK can help you:
        </p>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          {[
            "Identify and protect specific windows of personal time — even short ones",
            "Track the rhythm of high-demand periods so you can anticipate rather than react",
            "Build in regular self-check-ins that give you an honest picture of your own state",
            "Notice early warning signs of burnout before they become crisis",
            "Prepare for difficult caring episodes with information rather than anxiety",
          ].map((item, i) => (
            <li key={i} style={{ fontSize: "16px", lineHeight: 1.7, color: "#c8c0b0", marginBottom: "10px" }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "16px" }}>
          The Healer archetype runs alongside this, checking in on your emotional state at regular intervals. Not with a survey or a form — conversationally, the way a trusted friend might ask how you are doing and actually mean it.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#d4cfc5", marginBottom: "40px" }}>
          Burnout prevention is not self-indulgence. It is care system maintenance. If you collapse, the whole system collapses with you.
        </p>

        {/* Plans */}
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: text, marginBottom: "24px" }}>
          Which MEOK plan is right for a dementia carer?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {[
            {
              name: "Explorer",
              price: "Free",
              note: "50 messages/day",
              features: ["Companion conversation", "Healer & Pioneer archetypes", "Basic memory"],
              recommended: false,
            },
            {
              name: "Sovereign",
              price: "£12/mo",
              note: "Full Sovereign Memory",
              features: ["Unlimited messages", "Full care logging & patterns", "Hourman scheduling", "Data portability"],
              recommended: true,
            },
            {
              name: "Family",
              price: "£29/mo",
              note: "Up to 5 accounts",
              features: ["Everything in Sovereign", "Shared care dashboard", "Guardian family alerts", "Coordinated scheduling"],
              recommended: false,
            },
            {
              name: "BYOK",
              price: "£5/mo",
              note: "Bring your own API key",
              features: ["Use your own LLM key", "Full memory & archetypes", "Lowest cost at scale"],
              recommended: false,
            },
          ].map(({ name, price, note, features, recommended }) => (
            <div
              key={name}
              style={{
                backgroundColor: recommended ? "#1e1c40" : cardBg,
                border: `1px solid ${recommended ? gold : borderColor}`,
                borderRadius: "12px",
                padding: "24px",
                position: "relative",
              }}
            >
              {recommended && (
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", backgroundColor: gold, color: "#0d0c18", fontSize: "11px", fontWeight: 700, padding: "3px 12px", borderRadius: "99px", whiteSpace: "nowrap" }}>
                  RECOMMENDED
                </div>
              )}
              <div style={{ fontSize: "18px", fontWeight: 700, color: text, marginBottom: "4px" }}>{name}</div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: gold, marginBottom: "2px" }}>{price}</div>
              <div style={{ fontSize: "12px", color: mutedText, marginBottom: "16px" }}>{note}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {features.map((f) => (
                  <li key={f} style={{ fontSize: "13px", color: "#c8c0b0", lineHeight: 1.5, marginBottom: "6px", paddingLeft: "16px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: gold }}>·</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "12px", padding: "32px", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: text, marginBottom: "8px" }}>
            Support resources for dementia carers
          </h2>
          <p style={{ fontSize: "15px", color: mutedText, marginBottom: "24px" }}>
            MEOK is a companion, not a crisis service. If you need immediate support, please reach out to one of these organisations.
          </p>
          <div style={{ display: "grid", gap: "16px" }}>
            {[
              {
                name: "Alzheimer's Society",
                role: "Dementia information, advice, local services, and carer support",
                number: "0333 150 3456",
                url: "https://www.alzheimers.org.uk",
              },
              {
                name: "Dementia UK — Admiral Nurse Helpline",
                role: "Specialist dementia nurses offering free advice to families and carers",
                number: "0800 888 6678",
                url: "https://www.dementiauk.org",
              },
              {
                name: "Carers UK",
                role: "Support, advice, and advocacy for all unpaid carers",
                number: "0808 808 7777",
                url: "https://www.carersuk.org",
              },
              {
                name: "Samaritans",
                role: "24/7 listening support if you are struggling",
                number: "116 123",
                url: "https://www.samaritans.org",
              },
            ].map(({ name, role, number, url }) => (
              <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", paddingBottom: "16px", borderBottom: `1px solid ${borderColor}` }}>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: text, marginBottom: "2px" }}>{name}</div>
                  <div style={{ fontSize: "13px", color: mutedText }}>{role}</div>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "15px", fontWeight: 700, color: gold, textDecoration: "none", whiteSpace: "nowrap" }}>
                  {number}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1435", border: `1px solid ${gold}`, borderRadius: "16px", padding: "40px 36px", marginBottom: "48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 800, color: text, marginBottom: "12px", lineHeight: 1.2 }}>
            You deserve support too
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#c8c0b0", marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px" }}>
            MEOK is here for the carers, not just the cared-for. Start free — no credit card, no commitment. Tell MEOK who you are and what you are carrying.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: gold,
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "16px",
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.2px",
            }}
          >
            Start free with MEOK
          </Link>
          <p style={{ fontSize: "13px", color: mutedText, marginTop: "14px" }}>
            Explorer plan — free, 50 messages/day. No card required.
          </p>
        </div>

        {/* Related posts */}
        <div style={{ marginBottom: "48px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 700, color: text, marginBottom: "16px" }}>Related reading</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              { href: "/blog/ai-for-carers", label: "AI for Carers", desc: "Supporting all unpaid carers" },
              { href: "/blog/ai-for-elderly", label: "AI for the Elderly", desc: "Senior Mode and family safety" },
              { href: "/blog/guardian-family-safety", label: "Guardian Family Safety", desc: "Family alerts and coordination" },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "10px",
                  padding: "16px 18px",
                  textDecoration: "none",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 600, color: gold, marginBottom: "4px" }}>{label}</div>
                <div style={{ fontSize: "13px", color: mutedText }}>{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${borderColor}`, padding: "40px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "32px", marginBottom: "32px" }}>
            <div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: gold, marginBottom: "6px" }}>MEOK AI LABS</div>
              <div style={{ fontSize: "13px", color: mutedText, marginBottom: "4px" }}>Founder: Nicholas Templeman</div>
              <div style={{ fontSize: "13px", color: mutedText }}>
                <a href="https://x.com/meok_ai" target="_blank" rel="noopener noreferrer" style={{ color: mutedText, textDecoration: "none" }}>@meok_ai</a>
              </div>
            </div>
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: text, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "10px" }}>Product</div>
                {[
                  { href: "/birth", label: "Get started" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/blog", label: "Blog" },
                ].map(({ href, label }) => (
                  <div key={href} style={{ marginBottom: "6px" }}>
                    <Link href={href} style={{ fontSize: "13px", color: mutedText, textDecoration: "none" }}>{label}</Link>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: text, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "10px" }}>Care topics</div>
                {[
                  { href: "/blog/ai-for-carers", label: "AI for carers" },
                  { href: "/blog/ai-for-elderly", label: "AI for elderly" },
                  { href: "/blog/ai-for-mental-health-2026", label: "Mental health" },
                ].map(({ href, label }) => (
                  <div key={href} style={{ marginBottom: "6px" }}>
                    <Link href={href} style={{ fontSize: "13px", color: mutedText, textDecoration: "none" }}>{label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: "20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ fontSize: "12px", color: mutedText }}>© 2026 MEOK AI LABS. All rights reserved.</span>
            <div style={{ display: "flex", gap: "20px" }}>
              <Link href="/privacy" style={{ fontSize: "12px", color: mutedText, textDecoration: "none" }}>Privacy</Link>
              <Link href="/terms" style={{ fontSize: "12px", color: mutedText, textDecoration: "none" }}>Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
