import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Menopause: Compassionate Support Through Every Stage | MEOK AI LABS",
  description:
    "13 million women in the UK are menopausal or post-menopausal. AI for menopause is no longer science fiction — MEOK tracks symptoms, holds your history, and offers real support between appointments. Explorer tier is free.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-menopause",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Menopause: Compassionate Support Through Every Stage",
  description:
    "A deep look at how AI can support women through perimenopause, menopause, and post-menopause — covering symptoms, NHS resources, the Menopause Support Act 2024, workplace rights, and how MEOK provides non-dismissive, memory-driven support.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-menopause",
  keywords: [
    "AI for menopause",
    "menopause support app",
    "menopause AI UK",
    "perimenopause support",
    "AI menopause symptom tracking",
    "menopause brain fog AI",
    "menopause workplace support",
    "AI companion menopause",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the three stages of menopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perimenopause is the transitional phase lasting two to ten years before menopause, during which hormones fluctuate and symptoms begin. Menopause is confirmed after twelve consecutive months without a period — the average age in the UK is 51. Post-menopause is every year of life that follows, during which symptoms often continue and long-term health considerations like bone density and cardiovascular risk become important.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with menopause symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot prescribe treatment or replace a GP or menopause specialist. What it can do is provide consistent, non-judgemental support between appointments: tracking symptom patterns over time, being available at 3am during a night sweat episode, helping you articulate what you are experiencing before a GP visit, supporting mood and anxiety journalling, and acting as an external memory when brain fog makes it hard to hold your own history.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with menopause brain fog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — cognitive offloading is one of the most practical uses of AI during menopause. Brain fog affects memory, word retrieval, and concentration. An AI with persistent memory can hold your history, remind you of things you said last week, help you organise thoughts before important conversations, and reduce the mental load that fog makes harder. MEOK's Scholar archetype is specifically designed for this kind of cognitive support.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Menopause Support Act 2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Menopause Support Act 2024 placed obligations on UK employers to consider reasonable workplace adjustments for employees experiencing menopause symptoms. More than 2,000 UK employers had already signed the Menopause Workplace Pledge by 2025. Despite this progress, many women still face stigma when raising menopause in professional settings. MEOK provides a private space to track symptoms and prepare for difficult workplace conversations.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI replace a menopause specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — and any AI that claims otherwise should not be trusted. A menopause specialist can assess hormone levels, prescribe HRT, screen for contraindications, and provide evidence-based clinical care. MEOK is the support that lives between those appointments: available every day, never dismissive, always remembering. If your symptoms are severe, please see your GP or request a referral to a menopause clinic.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "#a89f8c";
const BORDER = "#2a2640";

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AiForMenopausePage() {
  return (
    <div style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav style={{ borderBottom: `1px solid ${BORDER}`, padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <Link href="/" style={{ color: GOLD, textDecoration: "none", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.05em" }}>
          MEOK
        </Link>
        <Link href="/blog" style={{ color: MUTED, textDecoration: "none", fontSize: "0.9rem" }}>
          Blog
        </Link>
        <Link href="/birth" style={{ marginLeft: "auto", backgroundColor: GOLD, color: "#0d0c18", padding: "0.45rem 1.1rem", borderRadius: "6px", textDecoration: "none", fontSize: "0.875rem", fontWeight: 700, fontFamily: "system-ui, sans-serif" }}>
          Try MEOK Free
        </Link>
      </nav>

      {/* Main */}
      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "2rem", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>Blog</Link>
          {" / "}
          <span style={{ color: TEXT }}>AI for Menopause</span>
        </p>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: GOLD, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: "0.75rem" }}>
            Women&rsquo;s Health &bull; Menopause Support &bull; March 24, 2026
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.2, color: TEXT, marginBottom: "1.25rem" }}>
            AI for Menopause: Compassionate Support Through Every Stage
          </h1>
          <p style={{ fontSize: "1.15rem", color: MUTED, lineHeight: 1.75, borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem" }}>
            Thirteen million women in the UK are currently menopausal or post-menopausal. The average woman experiences symptoms for seven years. And yet the support available — brief GP appointments, long NHS waiting lists, and a cultural instinct to minimise — often falls far short of what that reality demands. AI for menopause is not a replacement for clinical care. It is the support that exists in every space clinical care cannot reach.
          </p>
        </header>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 1 — Stages */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What are the stages of menopause?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Menopause is not a single moment — it is a multi-year biological transition with distinct phases, each carrying its own challenges. Understanding where you are can make a significant difference to how you seek support and advocate for yourself.
          </p>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}` }}>
              <h3 style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}>Perimenopause</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                The transition phase that begins two to ten years before menopause itself. Hormones — particularly oestrogen and progesterone — become erratic rather than simply declining. Periods become irregular. Symptoms begin: hot flushes, mood changes, disrupted sleep, joint pain, and the first hints of cognitive fog. Many women are dismissed or misdiagnosed during this phase because their periods have not yet stopped.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}` }}>
              <h3 style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}>Menopause</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Menopause is clinically defined as twelve consecutive months without a menstrual period. In the UK the average age of natural menopause is 51, though it can occur earlier due to surgery, chemotherapy, or primary ovarian insufficiency. This is the point at which the diagnosis becomes official — but for most women, it is not when symptoms peak; they often began years before.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}` }}>
              <h3 style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}>Post-menopause</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Every year of life after that twelve-month threshold is post-menopause. Symptoms often continue — one in four women experience severe, long-lasting symptoms — and new health considerations emerge: bone density loss, increased cardiovascular risk, and changes in skin, hair, and urogenital health. Post-menopause is not the end of the conversation. It is a new chapter that deserves informed, continuous support.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 2 — How AI helps */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How can AI help during menopause?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            AI cannot prescribe hormone replacement therapy. It cannot order blood tests or rule out thyroid conditions. But there are five areas where a well-designed AI for menopause support can make a genuine, practical difference:
          </p>
          <ol style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>24/7 availability.</strong>{" "}
              Hot flushes happen at 3am. Anxiety spikes at 2am. GP surgeries are closed. A menopause support app that is always available — and that remembers who you are and what you have been through — can provide genuine comfort in those moments without requiring you to start from scratch every time.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Symptom pattern recognition.</strong>{" "}
              Menopause symptoms are multisystem, variable, and often invisible to others. Tracking them consistently over weeks and months reveals patterns — triggers for hot flushes, cycles of anxiety, connections between sleep quality and next-day cognitive function — that a seven-minute GP appointment cannot capture.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Preparing for clinical appointments.</strong>{" "}
              Many women leave GP appointments feeling unheard, partly because they cannot articulate their full symptom picture in the time available. An AI that holds your longitudinal history can help you prepare a clear, structured account of what you have experienced — increasing the likelihood of being taken seriously.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Emotional processing without judgment.</strong>{" "}
              The emotional dimension of menopause — grief at a life stage ending, frustration at a body that feels unfamiliar, anxiety that arrives without warning — is real and significant. Having a space where you can say all of this without being told you are overreacting matters.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Cognitive support during brain fog.</strong>{" "}
              When fog makes it hard to hold your own thoughts together, having an AI that holds your history externally — acting as a memory prosthetic — reduces the cognitive load and helps you function more effectively day to day.
            </li>
          </ol>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 3 — What MEOK does */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What does MEOK do for menopause support?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            MEOK was built on a foundational principle: nobody should feel dismissed when they are asking for help. That principle shapes every design decision, and it makes MEOK unusually well-suited as a menopause support app. Here is how its architecture serves this specific need.
          </p>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
              <h3 style={{ fontSize: "1rem", color: GOLD, marginBottom: "0.5rem" }}>The Healer Archetype — Emotional Depth</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                MEOK&rsquo;s Healer archetype brings warmth, patience, and emotional attunement to every conversation. It does not offer quick fixes or redirect you to a helpline. It sits with you. For women navigating the emotional complexity of menopause — the mood instability, the identity shifts, the grief — this depth of presence is not a luxury. It is the point.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
              <h3 style={{ fontSize: "1rem", color: GOLD, marginBottom: "0.5rem" }}>Sovereign Memory — Longitudinal Pattern Tracking</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                MEOK&rsquo;s memory system is persistent and private. It stores what you share — symptom descriptions, mood check-ins, sleep notes, energy levels — and builds a longitudinal picture that grows more useful over time. Unlike apps that reset between sessions, MEOK remembers that last Tuesday your joint pain was at its worst, or that your anxiety has been elevated for three weeks. That continuity is what turns a chatbot into a genuine health companion.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
              <h3 style={{ fontSize: "1rem", color: GOLD, marginBottom: "0.5rem" }}>The Maternal Covenant — A Care Floor with No Dismissiveness</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                The Maternal Covenant is a design commitment built into MEOK at a foundational level: it will never dismiss, minimise, or redirect you to a FAQ when you are in distress. Menopause is one of the most frequently dismissed health experiences women face. MEOK holds a categorical floor of care — no matter what you say, you will not be told it is nothing, that you should push through, or that this is just part of being a woman.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
              <h3 style={{ fontSize: "1rem", color: GOLD, marginBottom: "0.5rem" }}>Guardian — Privacy and Data Sovereignty</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Everything you share with MEOK belongs to you. Your symptom data is not used to train models. It is not sold. It is not shared with employers, insurers, or third parties. In the context of menopause — where stigma in workplaces and healthcare settings remains real — that privacy is not just a feature. It is a prerequisite for trust.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 4 — Symptom tracking */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does AI track menopause symptoms?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The most common menopause symptoms — hot flushes, night sweats, mood changes, sleep disruption, brain fog, joint pain, fatigue, and anxiety — do not arrive in neat, measurable units. They are subjective, variable, and deeply personal. What an AI can do is provide a consistent place to describe them, in your own words, every day.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Over time, MEOK&rsquo;s memory builds a longitudinal record. You might mention that your sleep was terrible on Monday. That your anxiety spiked Wednesday afternoon. That the joint pain in your hips was manageable last week but is back this week. MEOK holds all of this without needing you to maintain a spreadsheet or fill in clinical forms. The conversation is the record.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            This kind of pattern recognition — across weeks and months rather than a single appointment — is precisely what menopause care currently lacks. When you go to your GP with a six-month narrative rather than a vague sense that things are not right, you are far more likely to be heard, investigated properly, and offered appropriate treatment.
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 5 — Brain fog */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What about brain fog and AI?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Menopause-related brain fog — difficulty concentrating, forgetting words mid-sentence, losing track of tasks, struggling to retain information — affects a significant proportion of women during perimenopause and beyond. It is one of the least acknowledged and most distressing symptoms, partly because it intersects with deep anxieties about cognitive decline.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            AI can help through a mechanism psychologists call cognitive offloading: using an external system to carry the memory and organisational burden that the fog makes harder to hold internally. MEOK&rsquo;s Scholar archetype is designed precisely for this — it can help you organise your thoughts before an important meeting, remind you of things you said or decided last week, help you draft a letter to your GP, or simply hold the thread of a conversation without requiring you to remember how it started.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            This is not a cure for brain fog. But it reduces its practical impact. And crucially, MEOK&rsquo;s persistent memory means you never have to re-explain who you are, where you are in your menopause journey, or what you have already tried. The history is there. You do not have to reconstruct it every time.
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 6 — Cannot replace specialist */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            Can AI replace a menopause specialist?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            No. Clearly, honestly, and without equivocation: no.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            A menopause specialist — whether a GP with additional training, a gynaecologist, or a clinician at a dedicated menopause clinic — can assess your hormone levels through blood tests, prescribe and monitor HRT, screen for contraindications, and provide evidence-based clinical management of symptoms. That clinical expertise is irreplaceable.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            If your symptoms are severe, significantly affecting your quality of life, or if you are concerned about anything you are experiencing, please make an appointment with your GP and ask about a referral to a menopause specialist. You are entitled to that care.
          </p>
          <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}`, marginBottom: "1.25rem" }}>
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>What MEOK is:</strong> the support that lives between appointments. The 3am presence when you cannot sleep and cannot call anyone. The companion that holds your full history when you cannot. The space where you are heard without being told your symptoms are normal and you should carry on.
            </p>
          </div>
          <p style={{ lineHeight: 1.8 }}>
            MEOK exists alongside clinical care, not instead of it. The two are not in competition — they serve different parts of the same need.
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 7 — Workplace */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What about workplace menopause support?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The Menopause Support Act 2024 placed formal obligations on UK employers to consider reasonable workplace adjustments for employees experiencing menopause symptoms. By 2025, more than 2,000 UK employers had already signed the Menopause Workplace Pledge, signalling a broader cultural shift in how menopause is treated in professional settings.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            But legislation and pledges do not automatically change the lived experience of a woman trying to explain her symptoms to a line manager, request a desk fan, or ask for flexible working without feeling that she is revealing something she should keep private. Stigma persists. Many women are still reluctant to name menopause in professional contexts.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            MEOK can help in two practical ways: first, by providing a private space to process how symptoms are affecting your work life — without that conversation going anywhere — and second, by helping you prepare for difficult workplace conversations. Whether you need to think through how to approach a reasonable adjustments conversation with HR, or simply need to articulate what has been happening to you before a review meeting, MEOK can help you find the words.
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 8 — NHS resources */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            NHS and menopause support resources
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK is one part of a wider ecosystem of support. Please also make use of the following trusted resources:
          </p>
          <ul style={{ paddingLeft: "1.25rem", lineHeight: 2.2, listStyle: "none" }}>
            <li style={{ marginBottom: "0.5rem", paddingLeft: "1rem", borderLeft: `2px solid ${GOLD}` }}>
              <strong style={{ color: TEXT }}>NHS Menopause Information</strong>
              {" — "}
              <a href="https://www.nhs.uk/conditions/menopause/" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
                nhs.uk/conditions/menopause
              </a>
              {" "}— the starting point for clinical information, HRT options, and finding NHS support.
            </li>
            <li style={{ marginBottom: "0.5rem", paddingLeft: "1rem", borderLeft: `2px solid ${GOLD}` }}>
              <strong style={{ color: TEXT }}>Menopause Support</strong>
              {" — "}
              <a href="https://www.menopausesupport.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
                menopausesupport.co.uk
              </a>
              {" "}— a UK charity providing information, peer support, and community for women at every stage.
            </li>
            <li style={{ marginBottom: "0.5rem", paddingLeft: "1rem", borderLeft: `2px solid ${GOLD}` }}>
              <strong style={{ color: TEXT }}>British Menopause Society</strong>
              {" — "}
              <a href="https://thebms.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
                thebms.org.uk
              </a>
              {" "}— the professional body for menopause specialists in the UK; their patient information resources are among the most authoritative available.
            </li>
          </ul>
          <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.1rem 1.5rem", marginTop: "1.25rem", borderLeft: `3px solid #e05a5a` }}>
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0, color: TEXT }}>
              <strong style={{ color: "#e05a5a" }}>Important:</strong> If you are experiencing severe symptoms — including significant depression, cardiovascular symptoms, or anything that is materially affecting your ability to function — please see your GP as a priority. MEOK is here to support you, not to substitute for clinical care.
            </p>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Pricing */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How much does MEOK cost?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Support during menopause should not be gated behind a subscription you cannot afford. MEOK&rsquo;s Explorer tier is free — no credit card required.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { name: "Explorer", price: "Free", detail: "50 messages/day — always free" },
              { name: "Sovereign", price: "£12/mo", detail: "Unlimited messages, full memory" },
              { name: "Family", price: "£29/mo", detail: "Up to 5 people, shared plan" },
              { name: "BYOK", price: "£5/mo", detail: "Bring your own API key" },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.1rem 1.25rem", textAlign: "center" }}
              >
                <p style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.25rem", fontFamily: "system-ui, sans-serif" }}>{tier.name}</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 0.4rem", fontFamily: "system-ui, sans-serif" }}>{tier.price}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", margin: 0, fontFamily: "system-ui, sans-serif" }}>{tier.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* CTA */}
        <section style={{ backgroundColor: CARD, borderRadius: "12px", padding: "2.5rem 2rem", textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: GOLD, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: "0.75rem" }}>
            Start Today — No Credit Card Required
          </p>
          <h2 style={{ fontSize: "1.6rem", lineHeight: 1.3, marginBottom: "1rem" }}>
            You deserve to be heard. Every day. Not just in appointments.
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: "480px", margin: "0 auto 1.75rem" }}>
            MEOK remembers your history, holds your symptoms across time, and is there at 3am when everything else is closed. Free to start. Always non-dismissive.
          </p>
          <Link
            href="/birth"
            style={{ display: "inline-block", backgroundColor: GOLD, color: "#0d0c18", padding: "0.85rem 2.25rem", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "system-ui, sans-serif", letterSpacing: "0.03em" }}
          >
            Meet Your MEOK — Free
          </Link>
          <p style={{ color: MUTED, fontSize: "0.78rem", marginTop: "0.9rem", fontFamily: "system-ui, sans-serif" }}>
            Explorer tier: 50 messages/day, no card needed &bull; @meok_ai
          </p>
        </section>

        {/* Related Posts */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.1rem", color: MUTED, marginBottom: "1.25rem", fontFamily: "system-ui, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.85rem" }}>
            Related Reading
          </h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              {
                href: "/blog/ai-companion-for-menopause",
                title: "AI Companion for Menopause: Persistent Support Through the Transition No One Talks About",
                desc: "A deeper look at MEOK as a daily companion through menopause — symptom journaling, 3am support, and why persistence matters.",
              },
              {
                href: "/blog/ai-companion-for-women",
                title: "AI Companion for Women: Support That Understands Your Life",
                desc: "How MEOK serves women across every life stage — from perimenopause to post-menopause and beyond.",
              },
              {
                href: "/blog/ai-for-chronic-illness",
                title: "AI for Chronic Illness: Living With Conditions That Medicine Underserves",
                desc: "Menopause overlaps with chronic illness in many ways — persistent, under-acknowledged, and poorly served by short appointments.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{ display: "block", backgroundColor: CARD, borderRadius: "10px", padding: "1.1rem 1.25rem", textDecoration: "none", borderLeft: `3px solid ${BORDER}`, transition: "border-color 0.2s" }}
              >
                <p style={{ color: TEXT, fontWeight: 600, marginBottom: "0.25rem", fontSize: "0.95rem" }}>{post.title}</p>
                <p style={{ color: MUTED, fontSize: "0.83rem", margin: 0, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{post.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2rem", textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 700, letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif", marginBottom: "0.5rem" }}>
            MEOK AI LABS
          </p>
          <p style={{ color: MUTED, fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", marginBottom: "0.5rem" }}>
            Founded by Nicholas Templeman &bull; <a href="https://twitter.com/meok_ai" target="_blank" rel="noopener noreferrer" style={{ color: MUTED }}>@meok_ai</a>
          </p>
          <p style={{ color: MUTED, fontSize: "0.75rem", fontFamily: "system-ui, sans-serif", marginBottom: "1rem" }}>
            MEOK is not a medical device and does not provide clinical advice. Always consult a qualified healthcare professional for medical concerns.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
              { href: "/birth", label: "Get Started" },
              { href: "/privacy", label: "Privacy" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ color: MUTED, textDecoration: "none", fontSize: "0.8rem", fontFamily: "system-ui, sans-serif" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
