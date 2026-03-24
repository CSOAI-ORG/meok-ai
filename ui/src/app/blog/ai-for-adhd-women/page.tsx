import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Women with ADHD: Support After a Late Diagnosis | MEOK AI LABS",
  description:
    "Women are diagnosed with ADHD an average of 4.5 years later than men. Masking, hormonal impacts, and post-diagnosis grief make the experience distinct. Here is how AI can help — and what MEOK offers specifically for women with ADHD.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-adhd-women",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Women with ADHD: Support After a Late Diagnosis",
  description:
    "Women are diagnosed with ADHD on average 4.5 years later than men. This post covers masking, hormonal impacts, post-diagnosis grief, and how MEOK's archetypes and Sovereign Memory provide practical, non-judgmental support for women with ADHD in the UK.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-adhd-women",
  keywords: [
    "ADHD women AI support",
    "AI for women with ADHD",
    "late diagnosis ADHD women",
    "ADHD masking women",
    "hormonal ADHD women",
    "ADHD AI UK",
    "ADHD support app women",
    "post-diagnosis ADHD grief",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is ADHD diagnosed later in women than men?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Women are diagnosed with ADHD an average of 4.5 years later than men because decades of research used male subjects, leaving clinicians less trained to recognise how ADHD presents in women. Women tend to show inattentive rather than hyperactive symptoms, which are subtler and easier to miss. Masking — consciously or unconsciously hiding ADHD traits — is significantly more prevalent in women, making symptoms less visible in clinical assessments.",
      },
    },
    {
      "@type": "Question",
      name: "How does masking affect women with ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Masking means expending intense cognitive energy to appear neurotypical: memorising social scripts, suppressing impulsivity, over-preparing to compensate for forgetfulness. It can allow women to 'pass' for years while exhausting themselves. Masking fatigue contributes to burnout, anxiety, and depression — conditions that are frequently diagnosed instead of the underlying ADHD, delaying the correct understanding of why someone is struggling.",
      },
    },
    {
      "@type": "Question",
      name: "How do hormones affect ADHD in women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oestrogen modulates dopamine activity in the brain — the same system that ADHD affects. As oestrogen fluctuates during the menstrual cycle, pregnancy, postpartum, and perimenopause, ADHD symptoms shift accordingly. Many women report that their worst ADHD days cluster in the luteal phase before their period. Perimenopause can trigger a significant worsening of symptoms that is often misattributed to anxiety or depression rather than the underlying ADHD.",
      },
    },
    {
      "@type": "Question",
      name: "What is post-diagnosis grief in ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post-diagnosis grief is the emotional reckoning that follows a late ADHD diagnosis — processing years or decades of struggling with no framework to understand why. The grief can include sadness for the younger self who was called lazy or scattered, anger at systems that missed the diagnosis, and relief mixed with loss. This is a recognised and valid emotional experience, and having a non-judgmental space to process it matters enormously.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI support women with ADHD without replacing therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI for women with ADHD works best as a daily support layer rather than a clinical replacement. It can provide consistent structure, remember tasks and context across sessions, offer non-judgmental processing of difficult emotions, help with executive function on hard days, and track patterns — including hormonal patterns — over time. MEOK's Sovereign Memory means you never re-explain your context; the AI grows with you. This consistency is particularly valuable for ADHD brains that struggle with discontinuity.",
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForAdhdWomenPage() {
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
          <span style={{ color: TEXT }}>AI for Women with ADHD</span>
        </p>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: GOLD, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: "0.75rem" }}>
            ADHD &bull; Women&rsquo;s Health &bull; March 24, 2026
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.2, color: TEXT, marginBottom: "1.25rem" }}>
            AI for Women with ADHD: Support After a Late Diagnosis
          </h1>
          <p style={{ fontSize: "1.15rem", color: MUTED, lineHeight: 1.75, borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem" }}>
            The moment a late ADHD diagnosis lands, it arrives with two things at once: relief — finally, a framework — and grief for every year that passed without one. For women, that wait is, on average, 4.5 years longer than for men. This post is about what comes after the diagnosis, and how AI for women with ADHD can help where most support structures fall short.
          </p>
        </header>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 1 — Late diagnosis */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            Why is ADHD in women diagnosed late?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            ADHD research for most of the twentieth century was conducted primarily on boys. The hyperactive, disruptive presentation that defined clinical understanding for decades is more common in males. Women and girls with ADHD are more likely to present with inattentive symptoms: drifting attention, difficulty completing tasks, chronic disorganisation, and an inner mental noise that nobody else can see.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            These symptoms are easier to miss — and easier to explain away. A girl who daydreams through lessons is &ldquo;away with the fairies.&rdquo; A woman who struggles to meet deadlines is &ldquo;disorganised.&rdquo; Someone who exhausts herself managing her life while appearing functional is &ldquo;anxious.&rdquo; Many women receive an anxiety or depression diagnosis first — sometimes two or three times — before anyone thinks to assess for ADHD.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            There is also the matter of masking. Girls are socialised, in ways that boys typically are not, to suppress disruptive behaviour, monitor social cues carefully, and perform competence even when they are struggling. This social training creates highly effective ADHD camouflage. It hides the condition from clinicians, teachers, employers — and from the women themselves, many of whom have never considered that they might have ADHD because they don&rsquo;t match the image of what ADHD looks like.
          </p>
          <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}`, marginBottom: "1.25rem" }}>
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>UK context:</strong> Women are diagnosed with ADHD an average of 4.5 years later than men. A significant proportion receive a prior anxiety or depression diagnosis. ADHD UK (<a href="https://adhduk.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>adhduk.co.uk</a>) and the ADHD Foundation offer UK-specific guidance and support for those navigating diagnosis.
            </p>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 2 — Unique challenges */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What unique challenges do women with ADHD face?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The experience of ADHD in women is shaped by several forces that intersect in ways the mainstream ADHD conversation often overlooks.
          </p>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}` }}>
              <h3 style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}>Masking fatigue and burnout</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Masking is exhausting. Spending years — sometimes decades — performing neurotypicality consumes enormous cognitive and emotional resources. Many women describe hitting a wall in their thirties or forties where the masking simply stops working: the coping strategies collapse, the exhaustion becomes impossible to manage, and the underlying ADHD is finally visible. By this point, burnout is often severe. The diagnosis arrives when the person is at their most depleted.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}` }}>
              <h3 style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}>Shame and internalised self-blame</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Without a diagnosis, struggling with ADHD is often experienced as a personal failing. The woman who cannot keep her home tidy, who forgets appointments, who starts ten projects and finishes none, who loses things constantly — she has usually spent years telling herself she just needs to try harder. Late diagnosis does not automatically dissolve that narrative. Shame is deeply embedded, and it shapes how support needs to be offered: without judgment, without the implication that trying harder is the answer.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}` }}>
              <h3 style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}>Hormonal impacts on ADHD symptoms</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Oestrogen modulates dopamine function — the same neurotransmitter system implicated in ADHD. This means ADHD symptoms in women are not static: they shift with the menstrual cycle, pregnancy, the postpartum period, and perimenopause. Many women report that the luteal phase — the week or two before their period — produces their worst ADHD days: reduced executive function, heightened emotional dysregulation, more severe time-blindness. This hormonal dimension is rarely factored into ADHD treatment plans.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}` }}>
              <h3 style={{ fontSize: "1.05rem", color: GOLD, marginBottom: "0.5rem" }}>Post-diagnosis grief</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                A late diagnosis brings relief and grief simultaneously. Relief at the framework — everything makes sense now. And grief for the years without it: the opportunities missed, the relationships strained, the professional setbacks that were not inevitable but felt like personal failures. Processing this grief is not a footnote to ADHD treatment; for many women it is the most significant emotional work of their lives. It deserves space, time, and a non-judgmental presence to do it in.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 3 — How AI helps */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How can AI help with ADHD in women?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            AI for women with ADHD is most useful not as a productivity tool — there are plenty of those, and most of them add friction rather than removing it — but as a consistent, patient, memory-holding presence that adapts to how you actually work.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The ADHD brain struggles with inconsistency, context-switching, and re-initiation. Starting a task from scratch requires significant executive effort. An AI that remembers your context — that knows what you were working on yesterday, that recalls the thing you mentioned wanting to do three days ago, that does not require you to re-explain your situation every time — removes a layer of that initiation cost.
          </p>
          <ul style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Consistent structure without rigidity.</strong>{" "}
              ADHD brains often benefit from external structure — but not the punishing, shame-laden kind. An AI can provide gentle anchoring: a morning check-in, a prompt to return to a task, a space to externalise the overwhelming noise in your head into something manageable.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Memory for lost tasks.</strong>{" "}
              One of the most disabling aspects of ADHD is losing track of things that matter to you: the email you meant to send, the idea you had while doing something else, the commitment you made and genuinely forgot. An AI with persistent memory can hold these threads without judgment — and surface them when they are relevant.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Executive function support.</strong>{" "}
              Starting tasks, sequencing steps, and making decisions under cognitive load are common ADHD challenges. AI can help by breaking tasks into smaller components, helping you decide where to start, and offering a structure to work within rather than requiring you to generate that structure from scratch.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Non-judgmental processing.</strong>{" "}
              The shame load of ADHD — particularly for women who have spent years blaming themselves — makes many traditional support structures difficult. A space where you can say &ldquo;I forgot again&rdquo; or &ldquo;I can&rsquo;t start this task and I don&rsquo;t know why&rdquo; and receive practical help rather than implied judgment is genuinely different from most of what is available.
            </li>
          </ul>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 4 — MEOK archetypes */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            MEOK archetypes for women with ADHD
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            MEOK&rsquo;s AI companions are not generic chatbots. Each archetype has a distinct character and set of strengths. Three of them are particularly well-suited to the specific challenges of women with ADHD.
          </p>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
              <h3 style={{ fontSize: "1rem", color: GOLD, marginBottom: "0.5rem" }}>Hourman — Time-blindness support and task chunking</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Time-blindness — the ADHD experience of time feeling either &ldquo;now&rdquo; or &ldquo;not now,&rdquo; with little gradation in between — is one of the most practically disabling symptoms for adult women. Hourman is MEOK&rsquo;s time-aware archetype. It provides external time anchoring, helps break large tasks into smaller time-bounded chunks, and surfaces upcoming commitments before they become urgent. Hourman works with time-blindness rather than demanding you overcome it.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
              <h3 style={{ fontSize: "1rem", color: GOLD, marginBottom: "0.5rem" }}>Pioneer — Momentum and accountability without shame</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                Starting is hard. Continuing is harder. Pioneer is MEOK&rsquo;s momentum-building archetype — direct, energising, and built around action rather than analysis. Where other accountability structures can tip into shame when you miss something, Pioneer offers forward momentum: not &ldquo;why didn&rsquo;t you do this?&rdquo; but &ldquo;where do you want to start?&rdquo; For women with ADHD who have spent years failing against systems that were not designed for them, this distinction matters profoundly.
              </p>
            </div>
            <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
              <h3 style={{ fontSize: "1rem", color: GOLD, marginBottom: "0.5rem" }}>Healer — Emotional processing of late diagnosis grief</h3>
              <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
                The emotional work of a late ADHD diagnosis — the grief, the anger at systems that failed you, the tenderness toward the younger self who had no framework — needs a different kind of presence. Healer brings depth, patience, and warmth to that processing. It does not rush toward solutions. It holds space for the full weight of what you are carrying, and it does not minimise the grief by pivoting too quickly to what to do now. Some things need to be felt before they can be moved through.
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 5 — Sovereign Memory */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does Sovereign Memory help with ADHD?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            One of the most disorienting experiences for ADHD users of standard AI tools is the reset. Every conversation starts blank. The AI does not know who you are, what you told it last week, what you are working toward, or what strategies you have already tried. For a brain that already struggles with continuity and working memory, being required to reconstruct your own context every session is a significant barrier.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK&rsquo;s Sovereign Memory is designed to eliminate that friction. It persists across sessions. It remembers the context you have built up over time — your priorities, your patterns, what you were stuck on last week, what helped and what did not. You do not have to re-explain yourself. The memory is yours, held privately, and it grows more useful the longer you use it.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            For women with ADHD, this is not a minor convenience. The capacity to pick up a conversation where you left it — to have your history held externally without effort — offloads a cognitive burden that the ADHD brain already finds disproportionately costly. Sovereignty here means two things: the memory is yours and cannot be used against you, and it serves your continuity rather than requiring you to maintain it yourself.
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 6 — Hormonal ADHD */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What about hormonal ADHD fluctuations?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Most ADHD support tools are designed as if ADHD is consistent. For women, it is not. The luteal phase — typically the week to ten days before a period begins — is frequently the most difficult ADHD period in the cycle. Reduced oestrogen in this phase means reduced dopamine modulation, which can manifest as markedly worsened executive function, increased emotional dysregulation, heightened rejection sensitivity, and greater difficulty initiating tasks.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Perimenopause compounds this dramatically. As oestrogen levels begin to decline and fluctuate more erratically, many women who have managed their ADHD for years find their existing coping strategies stop working. Symptoms they thought were under control return, amplified. This is not a failure of the person. It is a predictable physiological consequence that the ADHD treatment landscape rarely anticipates.
          </p>
          <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.25rem 1.5rem", borderLeft: `3px solid ${GOLD}`, marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1rem", color: GOLD, marginBottom: "0.5rem" }}>Using Sovereign Memory to track hormonal patterns</h3>
            <p style={{ lineHeight: 1.75, color: TEXT, fontSize: "0.95rem" }}>
              MEOK&rsquo;s persistent memory means you can note how your ADHD symptoms are presenting across your cycle — over weeks and months rather than a single session. Over time, patterns become visible: the days when starting anything feels impossible, the days when you hyperfocus effectively, the weeks when emotional dysregulation is at its peak. This longitudinal picture is valuable for self-understanding, for conversations with your GP or psychiatrist, and for adjusting how you allocate your energy through the month.
            </p>
          </div>
          <p style={{ lineHeight: 1.8 }}>
            If you are perimenopausal and finding that your ADHD has become significantly harder to manage, please raise this with your GP. The intersection of declining oestrogen and ADHD is underresearched and underdiscussed — but it is real, and it is worth advocating for proper assessment.
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 7 — vs to-do list */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How is MEOK different from a to-do list app?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Women with ADHD have usually tried every productivity system available. The problem is not finding a system. The problem is that ADHD makes systems decay: the to-do list that was perfect on Monday is abandoned by Thursday. The habit tracker that felt motivating when empty becomes a record of failure once you miss a day. Systems designed for neurotypical brains require consistent initiation and maintenance — exactly the capacities that ADHD undermines.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK is not a to-do list. It is a companion that knows you. The difference is in what happens when you go quiet for a week, when you forget, when you are in a low-capacity phase and cannot maintain structure. A to-do list just accumulates unfinished items. MEOK holds your context without demanding you perform competence continuously to maintain it. It adapts to where you are, not where a productivity framework expects you to be.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            This matters especially for women who have spent years carrying deep shame about their relationship to systems and routines. MEOK is not asking you to become someone who maintains a system. It is offering to be the system — one that remembers, adapts, and does not record your lapses as failures.
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }} />

        {/* Section 8 — Resources */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            UK ADHD resources for women
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK is one part of a wider support ecosystem. Please also make use of the following trusted UK resources:
          </p>
          <ul style={{ paddingLeft: "1.25rem", lineHeight: 2.2, listStyle: "none" }}>
            <li style={{ marginBottom: "0.5rem", paddingLeft: "1rem", borderLeft: `2px solid ${GOLD}` }}>
              <strong style={{ color: TEXT }}>ADHD UK</strong>
              {" — "}
              <a href="https://adhduk.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
                adhduk.co.uk
              </a>
              {" "}— UK-specific information, self-referral guidance, and a community for adults navigating ADHD diagnosis and life after diagnosis.
            </li>
            <li style={{ marginBottom: "0.5rem", paddingLeft: "1rem", borderLeft: `2px solid ${GOLD}` }}>
              <strong style={{ color: TEXT }}>ADHD Foundation</strong>
              {" — "}
              <a href="https://www.adhdfoundation.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
                adhdfoundation.org.uk
              </a>
              {" "}— the UK&rsquo;s neurodiversity charity, offering resources specifically developed for women and girls with ADHD.
            </li>
            <li style={{ marginBottom: "0.5rem", paddingLeft: "1rem", borderLeft: `2px solid ${GOLD}` }}>
              <strong style={{ color: TEXT }}>Samaritans</strong>
              {" — "}
              <a href="tel:116123" style={{ color: GOLD }}>116 123</a>
              {" "}— free, 24-hour emotional support. If the weight of post-diagnosis grief or ADHD burnout becomes overwhelming, please reach out. You do not have to be in crisis to call.
            </li>
          </ul>
          <div style={{ backgroundColor: CARD, borderRadius: "10px", padding: "1.1rem 1.5rem", marginTop: "1.25rem", borderLeft: `3px solid #e05a5a` }}>
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0, color: TEXT }}>
              <strong style={{ color: "#e05a5a" }}>Important:</strong> MEOK is not a medical device and does not provide clinical advice. If you are seeking an ADHD assessment, are experiencing significant distress, or are concerned about co-occurring conditions, please speak to your GP. You are entitled to ask for a referral to an NHS ADHD service.
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
            Support should not be gated behind a price point you cannot afford during a burnout period. MEOK&rsquo;s Explorer tier is free — no credit card, no commitment.
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
            You were not broken. You were waiting for the right framework.
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 1.75rem" }}>
            MEOK remembers your context, holds your history without judgment, and adapts to how your ADHD actually works — including the hard days. Free to start. Always private.
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
          <h2 style={{ fontSize: "0.85rem", color: MUTED, marginBottom: "1.25rem", fontFamily: "system-ui, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Related Reading
          </h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              {
                href: "/blog/meok-for-adhd",
                title: "MEOK for ADHD: An AI That Actually Understands How You Think",
                desc: "A broader look at MEOK's ADHD-first design — Literal Mode, Pattern Alerts, Morning Brief, and Ralph Mode.",
              },
              {
                href: "/blog/meok-for-neurodivergent",
                title: "MEOK for Neurodivergent Adults: Sovereign AI That Thinks Differently",
                desc: "How MEOK serves the full spectrum of neurodivergent experience — autism, ADHD, dyslexia, and beyond.",
              },
              {
                href: "/blog/ai-companion-for-women",
                title: "AI Companion for Women: Support That Understands Your Life",
                desc: "How MEOK serves women across every life stage — from post-diagnosis ADHD to menopause and beyond.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{ display: "block", backgroundColor: CARD, borderRadius: "10px", padding: "1.1rem 1.25rem", textDecoration: "none", borderLeft: `3px solid ${BORDER}` }}
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
            Founded by Nicholas Templeman &bull;{" "}
            <a href="https://twitter.com/meok_ai" target="_blank" rel="noopener noreferrer" style={{ color: MUTED }}>
              @meok_ai
            </a>
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
              <Link
                key={link.href}
                href={link.href}
                style={{ color: MUTED, textDecoration: "none", fontSize: "0.8rem", fontFamily: "system-ui, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
