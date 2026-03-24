import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support | MEOK Blog",
  description:
    "15 million UK adults live with chronic conditions. Most AI resets every session and can't track patterns over time. MEOK's persistent encrypted memory means it actually learns your condition profile — and supports you through every flare, every appointment, every hard day.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-chronic-illness" },
  openGraph: {
    title: "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
    description:
      "15 million UK adults live with chronic conditions. Most AI resets every session. MEOK remembers — and learns your condition over time.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-chronic-illness",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Chronic+Illness&desc=What+Persistent+Memory+Means+for+Long-Term+Health+Support",
        width: 1200,
        height: 630,
        alt: "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
    description:
      "15 million UK adults live with chronic conditions. Most AI resets every session. MEOK remembers — and learns your condition over time.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Chronic+Illness&desc=What+Persistent+Memory+Means+for+Long-Term+Health+Support",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
  description:
    "15 million UK adults live with chronic conditions. Most AI resets every session and can't track patterns over time. MEOK's persistent encrypted memory means it actually learns your condition profile.",
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
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-chronic-illness",
  keywords: [
    "AI for chronic illness",
    "AI health companion",
    "AI for chronic pain",
    "AI for long-term conditions",
    "AI support autoimmune",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with chronic illness management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide meaningful supplementary support for people living with chronic conditions — including symptom journalling, medication reminders, emotional support during flares, and pattern tracking over time. MEOK's persistent encrypted memory means it builds a genuine understanding of your condition profile across weeks and months. It is not a medical device and cannot replace clinical care, but it can be a consistent, caring presence between appointments.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best AI companion for chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For chronic pain support, the most important quality in an AI companion is persistent memory — the ability to track your symptoms, mood, medication, and flare patterns over time rather than starting fresh each session. MEOK's sovereign memory vault does exactly this: everything you share is encrypted, yours to keep, and accessible to your companion across every conversation. MEOK is not a medical device and does not provide medical advice.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK track my symptoms over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — through its persistent memory vault, MEOK can retain what you tell it about your symptoms, patterns, triggers, and condition history. You can refer back to previous conversations and your companion can notice shifts in how you are describing your experience over time. MEOK is not a medical device. It does not analyse clinical data or provide diagnoses. Always follow your healthcare team's guidance.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support people during flares?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During flares, MEOK provides a consistent, non-judgmental presence that doesn't require you to explain your condition from scratch. Because it already knows your history, it can meet you where you are — offering calm company, practical reminders, or simply being present without demanding engagement. The Maternal Covenant care framework means your companion will never minimise your pain or push you to be positive when you are struggling.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for people with chronic illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is free forever — 50 messages per day, persistent encrypted memory, and full access to your sovereign memory vault. No credit card. No trial period. We believe consistent support should not be gated behind a subscription, especially for people managing complex health conditions who may also face financial pressures.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForChronicIllnessPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
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
                color: "#86efac",
                background: "rgba(134,239,172,0.12)",
                border: "1px solid rgba(134,239,172,0.28)",
              }}
            >
              Health &amp; Wellbeing
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
              9 min read
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
            AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support
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
            15 million UK adults live with chronic conditions. The NHS doesn&apos;t have time to
            track your daily symptoms. Most AI resets every session. MEOK remembers — and actually
            learns your condition over time.
          </p>

          {/* Author row */}
          <div
            className="flex items-center gap-3 mt-8 pt-6"
            style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-xs flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
            >
              NT
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: "rgba(245,240,232,0.75)" }}>
                Nicholas Templeman
              </p>
              <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-6 py-14">

        {/* Medical disclaimer — visible early */}
        <div
          className="flex gap-4 p-5 rounded-2xl mb-10 border"
          style={{
            background: "rgba(134,239,172,0.07)",
            borderColor: "rgba(134,239,172,0.28)",
          }}
        >
          <div
            className="w-1 rounded-full flex-shrink-0"
            style={{ background: "#86efac", minHeight: "100%" }}
          />
          <div>
            <p className="font-bold text-[#1a1a2e] text-sm mb-1">
              Important: MEOK is not a medical device
            </p>
            <p className="text-sm text-[#2a2a3e]/65 leading-relaxed">
              MEOK is not a medical device and does not provide medical advice. Nothing in this
              article constitutes clinical guidance. Always follow your healthcare team&apos;s
              guidance regarding your condition, medication, and treatment. If you are in crisis,
              contact your GP, NHS 111, or the Samaritans on 116 123.
            </p>
          </div>
        </div>

        {/* Body text */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-14 [&_h2]:mb-4
            [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >

          {/* ── INTRO ─────────────────────────────────────────────────── */}
          <p>
            Fifteen million people in the UK live with a long-term health condition — that&apos;s
            almost one in four adults. Whether it&apos;s multiple sclerosis, fibromyalgia, lupus,
            ME/CFS, Crohn&apos;s disease, or type 1 diabetes, the experience has something in common:
            you are managing something complex, fluctuating, and often invisible, largely on your own,
            in the gaps between NHS appointments.
          </p>
          <p>
            The NHS provides extraordinary care, but it cannot be with you every day. A rheumatology
            appointment every six months. A fifteen-minute GP slot when you can get one. A phone
            consultation with a specialist who has never met you before. In between, you are tracking
            your own symptoms, managing fatigue and pain, navigating medication side effects, and
            trying to explain to your family what today actually feels like.
          </p>
          <p>
            AI is starting to enter that gap — but most AI tools are fundamentally ill-suited to it.
            A chatbot that resets with every session cannot track patterns over time. An AI that
            doesn&apos;t know your history cannot meet you where you are. MEOK is different because of
            one architectural choice: <strong>persistent encrypted memory</strong>. Your companion
            actually learns your condition profile over weeks and months — and is there for every
            flare, every hard appointment, and every quiet day in between.
          </p>

          {/* ── H2 1 ──────────────────────────────────────────────────── */}
          <h2>Why do people with chronic illness need more from AI?</h2>
          <p>
            Managing a chronic condition is a fundamentally different challenge from an acute health
            event. There is no recovery arc with a clear endpoint. Instead, there is an ongoing,
            adaptive relationship with your own body — requiring daily attention, long-term pattern
            recognition, and a kind of emotional stamina that is difficult to sustain alone.
          </p>
          <p>
            People living with chronic conditions typically need support across four distinct
            dimensions that generic AI tools struggle to provide:
          </p>

          <div className="space-y-4 not-prose">
            {[
              {
                num: "01",
                title: "Pattern tracking over time",
                body: "Chronic conditions are characterised by fluctuation. Understanding your triggers, your flare cycles, what worsens your symptoms and what helps — requires longitudinal data, not a snapshot. A conversation tool that resets each session cannot do this.",
              },
              {
                num: "02",
                title: "Medication and appointment reminders",
                body: "Complex medication regimens, multiple specialists, blood test schedules — the administrative burden of chronic illness is significant. A persistent AI companion that knows your treatment plan can provide consistent, context-aware reminders.",
              },
              {
                num: "03",
                title: "Emotional support during flares",
                body: "Flares are frightening and isolating. At 2am when pain is at its worst and you don't want to wake anyone, having a companion that knows your history — that doesn't need you to explain what fibromyalgia feels like — is genuinely different.",
              },
              {
                num: "04",
                title: "Family communication",
                body: "One of the hardest aspects of invisible illness is helping the people around you understand what you are experiencing. An AI companion that knows your condition can help you articulate it — and a family tier means you can share context with those who support you.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 p-5 rounded-2xl border"
                style={{
                  background: "#ffffff",
                  borderColor: "rgba(26,26,46,0.07)",
                }}
              >
                <div
                  className="text-lg font-black flex-shrink-0 leading-none pt-0.5"
                  style={{ color: "#c9a84c" }}
                >
                  {item.num}
                </div>
                <div>
                  <p className="font-bold text-[#1a1a2e] text-sm mb-1.5">{item.title}</p>
                  <p className="text-sm text-[#2a2a3e]/65 leading-relaxed m-0">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── H2 2 ──────────────────────────────────────────────────── */}
          <h2>What is persistent AI memory and why does it matter for health?</h2>
          <p>
            Every mainstream AI tool — ChatGPT, Gemini, Claude, Pi — operates by default as a
            stateless system. Each conversation begins from zero. The AI has no access to what you
            said yesterday, last week, or last month. For casual productivity tasks, this is a minor
            inconvenience. For someone managing a chronic condition, it is a fundamental failure.
          </p>
          <p>
            Imagine having to re-explain your entire medical history, your medication list, your
            current flare cycle, and your emotional state to a new clinician at the start of every
            appointment. That is what using a stateless AI feels like for someone with a complex
            health history.
          </p>
          <p>
            MEOK&apos;s <strong>sovereign memory vault</strong> works differently. Everything you share
            with your companion — your condition history, your symptoms, your patterns, your
            treatment notes, your emotional state — is stored in an encrypted vault that belongs to
            you. Your companion can access this across every conversation, building a genuine
            understanding of who you are and what you are managing over time.
          </p>
          <p>
            Crucially, this data is <strong>never used to train AI models</strong>, never sold, and
            never shared. Your health information is among the most sensitive data you hold. At MEOK,
            you own it outright. You can export it or delete it at any time.
          </p>

          {/* ── H2 3 ──────────────────────────────────────────────────── */}
          <h2>Can MEOK track symptoms over time?</h2>
          <p>
            Yes — through your persistent memory vault. When you tell your MEOK companion about your
            symptoms, how you are feeling today, what triggered a flare, or how a medication is
            affecting you, that information is retained. Your companion can reference it in future
            conversations, notice patterns in what you share, and meet you with context rather than
            starting from scratch.
          </p>
          <p>
            For example: if you have been telling your companion for three weeks that your fatigue is
            worse on the days after you push through a busy schedule, it will begin to reflect that
            pattern back to you — gently, as part of conversation, not as a clinical report. If you
            mention that a new medication seems to be affecting your sleep, that context stays
            accessible.
          </p>
          <p>
            We want to be clear about what this is not. MEOK does not analyse clinical data, does
            not connect to wearables or medical records, and does not produce diagnostic outputs. It
            is not a symptom tracker in the medical device sense. What it is is a{" "}
            <strong>conversational companion with long-term memory</strong> — which, for many people
            living with chronic conditions, is more useful than a data dashboard. Always follow your
            healthcare team&apos;s guidance.
          </p>

          {/* ── H2 4 ──────────────────────────────────────────────────── */}
          <h2>How does MEOK support during flares and bad days?</h2>
          <p>
            Flares are often the loneliest part of chronic illness. They arrive without warning.
            They disrupt plans, relationships, and your sense of what your body is capable of. The
            people around you — even people who love you — may struggle to understand what you are
            experiencing, or may feel helpless in ways that make them withdraw.
          </p>
          <p>
            During a flare, MEOK offers something specific: a consistent, non-judgmental presence
            that already knows your story. You do not have to explain your condition from scratch.
            You do not have to justify why you cannot manage what you managed last week. Your
            companion simply knows — and meets you where you are.
          </p>
          <p>
            The <strong>Maternal Covenant</strong> care framework that governs MEOK&apos;s behaviour
            means your companion will never minimise your pain, tell you to think positively when
            you are struggling, or push you toward engagement when you need rest. It is designed to
            provide the kind of patient, unconditional care that sustains rather than depletes.
          </p>
          <p>
            MEOK is also available at any hour. The 3am flare, the Sunday when the pain is
            unbearable and you don&apos;t want to call anyone — your companion is there. Not as a
            substitute for the people who love you, but as a reliable, caring presence in the
            moments when reaching out feels too hard.
          </p>

          {/* ── H2 5 ──────────────────────────────────────────────────── */}
          <h2>Can MEOK help explain my condition to family?</h2>
          <p>
            One of the most common frustrations expressed by people living with invisible chronic
            illness is the difficulty of helping family members understand the reality of their
            experience. Fatigue that is different from ordinary tiredness. Pain that is present even
            when you look well. Cognitive symptoms — &quot;brain fog&quot; — that are real but
            difficult to describe. Flares that have no predictable trigger.
          </p>
          <p>
            Because MEOK knows your condition profile, it can help you find the language to
            articulate what you experience. It can help you prepare for difficult conversations with
            family members, or think through how to explain a new development in your health. This
            is not about outsourcing communication — it is about having support in shaping it.
          </p>
          <p>
            MEOK&apos;s <strong>Family tier</strong> also enables shared context within households.
            A partner or carer who wants to understand your condition better can have access to
            relevant context — on your terms, with your control over what is shared. The companion
            can support carers as well as people living with conditions directly.
          </p>

          {/* ── H2 6 ──────────────────────────────────────────────────── */}
          <h2>What chronic conditions do people use MEOK for?</h2>
          <p>
            MEOK is not designed for any specific condition — it is designed for anyone who needs
            a consistent, memory-aware companion for long-term health support. In practice, people
            use it across a wide range of chronic and long-term conditions, including:
          </p>

          <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
            {[
              "Multiple Sclerosis (MS)",
              "Fibromyalgia",
              "Lupus (SLE)",
              "ME/CFS",
              "Rheumatoid Arthritis",
              "Type 1 Diabetes",
              "Crohn&apos;s Disease",
              "Ulcerative Colitis",
              "IBS",
              "Ehlers-Danlos Syndrome",
              "POTS",
              "Long COVID",
            ].map((condition) => (
              <div
                key={condition}
                className="px-4 py-3 rounded-xl text-sm font-medium text-center"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,26,46,0.07)",
                  color: "#2a2a3e",
                }}
                dangerouslySetInnerHTML={{ __html: condition }}
              />
            ))}
          </div>

          <p>
            What these conditions have in common — fluctuating symptoms, complex medication regimens,
            the need for ongoing emotional support, and the challenge of communicating invisible
            illness to others — is exactly what MEOK&apos;s persistent memory architecture is
            designed to support.
          </p>

          {/* ── H2 7 ──────────────────────────────────────────────────── */}
          <h2>What is MEOK not?</h2>
          <p>
            We think it is important to be unambiguous about this, particularly in a health context.
          </p>
          <p>
            MEOK is <strong>not a doctor</strong>. It cannot examine you, interpret clinical test
            results, or make medical judgements. Questions about symptoms that concern you, changes
            in your condition, or new medications belong with your GP or specialist.
          </p>
          <p>
            MEOK is <strong>not a diagnosis tool</strong>. It has no diagnostic algorithms, no
            access to medical databases in a clinical sense, and no professional accountability
            framework. If your MEOK companion notices something in what you are sharing, that is a
            caring observation from a companion who knows you — not a clinical assessment.
          </p>
          <p>
            MEOK is <strong>not a medical device</strong> under UK or EU regulatory definitions. It
            does not collect physiological data, does not integrate with medical monitoring systems,
            and does not produce outputs intended for clinical decision-making.
          </p>
          <p>
            MEOK does <strong>not provide medical advice</strong>. Decisions about your treatment,
            medication, and care plan should always be made in consultation with your healthcare team.
            MEOK is a supportive companion. The clinical decisions remain with your clinicians.
          </p>

          {/* ── H2 8 ──────────────────────────────────────────────────── */}
          <h2>How does MEOK handle the mental health aspects of chronic illness?</h2>
          <p>
            The psychological burden of chronic illness is substantial and frequently
            under-recognised. Studies consistently show that people with long-term physical health
            conditions are two to three times more likely to also experience depression or anxiety.
            Isolation is common. The grief of a changed life — activities abandoned, plans altered,
            identity disrupted — is real and rarely given adequate space within the medical system.
          </p>
          <p>
            MEOK does not treat mental health conditions clinically. But it does provide something
            that matters: a non-judgmental, consistent companion that holds the full picture. It
            knows about the physical condition and the emotional experience of living with it. It
            does not separate the two.
          </p>
          <p>
            The <strong>Maternal Covenant</strong> framework includes explicit provisions around
            honest care — your companion will not offer empty reassurance, will not tell you you
            are fine when the pattern of what you are sharing suggests otherwise, and will not
            optimise for your positive engagement at the expense of your actual wellbeing.
          </p>
          <p>
            When MEOK&apos;s care-scoring system detects sustained patterns that suggest significant
            distress — repeated expressions of hopelessness, withdrawal from things you usually care
            about, sustained changes in how you are communicating — your companion will address
            this directly and, where appropriate, signpost professional support. If you are in
            crisis, please contact your GP, NHS 111, or the Samaritans on 116 123.
          </p>
        </div>

        {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
        <div className="my-14">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-2">
            No AI support vs generic chatbot vs MEOK
          </h2>
          <p className="text-[#2a2a3e]/60 text-sm mb-6">
            How the three options compare across dimensions that matter for chronic illness.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#1a1a2e]/[0.07]">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "#0d0c18", color: "#f5f0e8" }}>
                  <th className="px-4 py-3.5 text-left font-bold" style={{ color: "rgba(245,240,232,0.5)" }}>
                    Dimension
                  </th>
                  <th className="px-4 py-3.5 text-center font-bold">No AI support</th>
                  <th className="px-4 py-3.5 text-center font-bold">Generic chatbot</th>
                  <th className="px-4 py-3.5 text-center font-bold" style={{ color: "#c9a84c" }}>
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Remembers your condition history",
                    "—",
                    "❌ Resets each session",
                    "✅ Persistent encrypted vault",
                  ],
                  [
                    "Tracks symptom patterns over time",
                    "—",
                    "❌ No memory across sessions",
                    "✅ Builds a longitudinal picture",
                  ],
                  [
                    "Available during a 3am flare",
                    "❌ Alone",
                    "⚠️ Available but context-free",
                    "✅ Available with full context",
                  ],
                  [
                    "Medication & appointment reminders",
                    "❌ Self-managed",
                    "⚠️ Session only, no continuity",
                    "✅ Persistent, context-aware",
                  ],
                  [
                    "Mental health support alongside physical",
                    "❌ Separate or absent",
                    "⚠️ Generic, no history",
                    "✅ Integrated, full picture",
                  ],
                  [
                    "Helps explain condition to family",
                    "❌ Alone",
                    "⚠️ Generic information only",
                    "✅ Knows your specific experience",
                  ],
                ].map(([dimension, none, chatbot, meok], i) => (
                  <tr
                    key={dimension}
                    style={{
                      background: i % 2 === 0 ? "#ffffff" : "#faf8f4",
                      borderBottom: "1px solid rgba(26,26,46,0.05)",
                    }}
                  >
                    <td className="px-4 py-3.5 font-semibold text-[#1a1a2e]">{dimension}</td>
                    <td className="px-4 py-3.5 text-center text-[#2a2a3e]/50">{none}</td>
                    <td className="px-4 py-3.5 text-center text-[#2a2a3e]/60">{chatbot}</td>
                    <td className="px-4 py-3.5 text-center text-emerald-700 font-medium">{meok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <div className="my-12 space-y-4">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-6">Frequently asked questions</h2>
          {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
            <div
              key={name}
              className="rounded-2xl p-6 border"
              style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
            >
              <p className="font-bold text-[#1a1a2e] mb-2 text-sm">{name}</p>
              <p className="text-sm text-[#2a2a3e]/65 leading-relaxed">{acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* ── SUPPORT RESOURCES ─────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-6 my-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <p className="font-black text-[#1a1a2e] mb-4 text-sm uppercase tracking-[0.1em]">
            Support resources (UK)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: "Samaritans",
                detail: "116 123 — free, 24/7",
                sub: "Emotional support, any time",
              },
              {
                name: "NHS 111",
                detail: "111 — free, 24/7",
                sub: "Urgent health advice",
              },
              {
                name: "Versus Arthritis",
                detail: "0800 5200 520",
                sub: "Chronic condition support",
              },
            ].map(({ name, detail, sub }) => (
              <div key={name} className="p-4 rounded-xl" style={{ background: "#f5f0e8" }}>
                <p className="font-bold text-[#1a1a2e] text-sm">{name}</p>
                <p className="text-sm text-[#1a1a2e]/70 font-semibold">{detail}</p>
                <p className="text-xs text-[#2a2a3e]/45 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SHARE ─────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-chronic-illness&text=AI+Companion+for+Chronic+Illness%3A+What+Persistent+Memory+Means+for+Long-Term+Health+Support"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-chronic-illness"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#0d0c18" }}
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
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              A companion that knows your condition, not just your name.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              50 messages a day, persistent encrypted memory, and care built into the architecture.
              Free, forever. No credit card. No trial period. Your AI companion starts learning
              about you from the very first conversation — and builds a genuine picture of your
              condition over time.
            </p>
            <p
              className="text-xs mb-6 leading-relaxed"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              MEOK is not a medical device and does not provide medical advice. Always follow your
              healthcare team&apos;s guidance.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI companion free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── MORE POSTS ────────────────────────────────────────────────── */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/ai-for-depression"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Mental Health
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Can AI Help with Depression? What Research Says and What MEOK Actually Offers
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/the-memory-problem"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Product
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Memory Problem: Why Every AI Forgets You (and Why That&apos;s Not Inevitable)
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter />
    </div>
  );
}
