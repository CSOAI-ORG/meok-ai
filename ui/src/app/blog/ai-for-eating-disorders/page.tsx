import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Eating Disorder Recovery: Support Between Appointments, Not a Diet Plan | MEOK AI LABS",
  description:
    "1.25 million people in the UK are affected by eating disorders (Beat). Clinical treatment is essential. An honest look at what a sovereign AI companion can offer between appointments — and what it will never discuss.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-eating-disorders",
  },
  openGraph: {
    title:
      "AI Companion for Eating Disorder Recovery: Support Between Appointments, Not a Diet Plan",
    description:
      "1.25 million people in the UK are affected by eating disorders. MEOK offers emotional support between clinical appointments and will never discuss food, calories, weight loss, or diet plans.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-eating-disorders",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Eating+Disorder+Recovery&desc=Support+Between+Appointments%2C+Not+a+Diet+Plan",
        width: 1200,
        height: 630,
        alt: "AI Companion for Eating Disorder Recovery: Support Between Appointments, Not a Diet Plan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Companion for Eating Disorder Recovery: Support Between Appointments, Not a Diet Plan",
    description:
      "1.25 million people in the UK are affected by eating disorders. MEOK will never discuss food, calories, or diet. Here is what sovereign AI can honestly offer.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+for+Eating+Disorder+Recovery&desc=Support+Between+Appointments%2C+Not+a+Diet+Plan",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Eating Disorder Recovery: Support Between Appointments, Not a Diet Plan",
  description:
    "1.25 million people in the UK are affected by eating disorders. An honest look at what a sovereign AI companion can offer between clinical appointments, and what it will never discuss.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-eating-disorders",
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
      name: "How many people in the UK are affected by eating disorders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to Beat, approximately 1.25 million people in the UK are affected by eating disorders, including anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and OSFED. Eating disorders carry the highest mortality rate of any mental health condition. Contact Beat on 0808 801 0677 or visit beateatingdisorders.org.uk.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK discuss food, calories, weight loss, or diet plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Absolutely not. MEOK will never discuss food quantities, calorie counts, weight loss strategies, body weight, BMI, or diet plans. This is a permanent care-floor boundary — not a setting, not a toggle, and not negotiable. Any AI that engages with these topics for someone in eating disorder recovery is causing harm.",
      },
    },
    {
      "@type": "Question",
      name: "What can a sovereign AI companion offer someone recovering from an eating disorder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can provide consistent emotional support between clinical appointments, a non-judgemental presence available at any hour, and sovereign persistent memory that tracks mood and emotional patterns across months of recovery. It is supplementary support only — professional clinical treatment is essential and irreplaceable.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK validate disordered thoughts about body image or eating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK's sycophancy detector runs before every response. If your words reflect cognitive distortions common in eating disorders — minimising, catastrophising, or seeking validation for harmful behaviour — MEOK will not affirm them. It responds with honesty and care, but will not tell you what the disorder wants to hear.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a substitute for clinical eating disorder treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely not. Professional clinical support is essential for eating disorder recovery — not optional and not replaceable by AI. MEOK is a supplementary emotional support tool for use between appointments only. Please contact your GP, an NHS eating disorder service, or Beat's helpline on 0808 801 0677.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's persistent memory support long-term eating disorder recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recovery from an eating disorder is measured in months and years. MEOK's sovereign memory stores your emotional history privately across the full timeline of your recovery — surfacing patterns, noting progress, and holding context that clinical appointments rarely have time to revisit. No AI without persistent memory can offer this longitudinal support.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForEatingDisordersPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0c18" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", color: "rgba(245,240,232,0.38)", marginBottom: "2rem", textDecoration: "none" }}
          >
            &#8592; Back to Blog
          </Link>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span
              style={{ display: "inline-flex", alignItems: "center", fontSize: "0.7rem", fontWeight: 700, padding: "0.375rem 0.75rem", borderRadius: "9999px", color: "#c9a84c", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Mental Health
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>March 24, 2026</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>10 min read</span>
          </div>

          <h1
            style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)", color: "#ffffff", lineHeight: 1.18, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}
          >
            AI Companion for Eating Disorder Recovery: Support Between Appointments, Not a Diet Plan
          </h1>

          <p style={{ color: "rgba(245,240,232,0.58)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "42rem" }}>
            According to Beat, 1.25 million people in the UK are affected by eating disorders.
            Clinical treatment is not optional — it is essential. But appointments are infrequent,
            and recovery happens in the hours between them. This is an honest account of what a
            sovereign AI companion can offer in that space, and what it will never, under any
            circumstances, discuss.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Hard boundary notice */}
        <div
          style={{ display: "flex", gap: "1rem", padding: "1.25rem 1.5rem", borderRadius: "1rem", marginBottom: "1.5rem", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}
        >
          <div style={{ width: "3px", borderRadius: "9999px", flexShrink: 0, background: "#c9a84c", alignSelf: "stretch" }} />
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "#c9a84c", marginBottom: "0.375rem" }}>
              MEOK&apos;s hard boundary — no exceptions
            </p>
            <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.65 }}>
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                MEOK will never discuss food, calories, weight loss, body weight, BMI, or diet plans.
              </strong>{" "}
              This is a permanent care-floor boundary. No prompt, framing, or request will cause MEOK to cross it.
            </p>
          </div>
        </div>

        {/* Clinical disclaimer */}
        <div
          style={{ display: "flex", gap: "1rem", padding: "1.25rem 1.5rem", borderRadius: "1rem", marginBottom: "2.5rem", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}
        >
          <div style={{ width: "3px", borderRadius: "9999px", flexShrink: 0, background: "#c9a84c", alignSelf: "stretch" }} />
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.8125rem", color: "#c9a84c", marginBottom: "0.375rem" }}>
              Important: This article is not medical advice
            </p>
            <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.65 }}>
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                Professional clinical support is essential for eating disorder recovery — AI is not a substitute.
              </strong>{" "}
              If you need help, contact Beat on{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>0808 801 0677</strong> or visit{" "}
              <a href="https://www.beateatingdisorders.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c", textDecoration: "underline" }}>
                beateatingdisorders.org.uk
              </a>.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "9999px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d0c18",
              fontSize: "0.75rem",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem" }}>Nicholas Templeman</p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", marginBottom: "0.375rem" }}>
              Founder, MEOK AI LABS
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", lineHeight: 1.6 }}>
              Nicholas built MEOK because he was tired of AI that forgot him the moment he closed the tab. He lives and works in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{ fontSize: "0.75rem", fontWeight: 600, color: "#c9a84c", textDecoration: "none", flexShrink: 0 }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── Body copy ──────────────────────────────────────────────────── */}
        <div style={{ color: "rgba(245,240,232,0.72)", lineHeight: 1.85, fontSize: "1rem" }}>

          <p style={{ marginBottom: "1.5rem" }}>
            Eating disorders are serious mental illnesses — not lifestyle choices, phases, or failures of willpower. According to{" "}
            <a href="https://www.beateatingdisorders.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c", textDecoration: "underline" }}>Beat</a>,{" "}
            <strong style={{ color: "#f5f0e8" }}>1.25 million people in the UK</strong> are affected — including anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and OSFED. They carry the highest mortality rate of any mental health condition. Clinical treatment is not optional; it is essential, and nothing in this article should suggest otherwise.
          </p>

          <h2 style={{ fontWeight: 900, fontSize: "1.5rem", color: "#ffffff", marginTop: "3rem", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            How many people in the UK are affected by eating disorders?
          </h2>
          <p style={{ marginBottom: "1rem", color: "#f5f0e8", fontWeight: 600, fontSize: "0.975rem" }}>
            According to Beat, approximately 1.25 million people in the UK are affected by eating disorders. They affect people of all ages and genders, carry the highest mortality rate of any mental health condition, and are frequently misunderstood or misdiagnosed. Early intervention and specialist clinical treatment are the most important factors in recovery.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The range of diagnoses is broad. ARFID — Avoidant/Restrictive Food Intake Disorder — is distinct from other eating disorders, rooted in sensory sensitivities or fear of adverse consequences rather than distorted body image. NHS ARFID pathways are developing, though access remains inconsistent. Waiting times for specialist adult services vary considerably, leaving many people in a prolonged gap with limited structured support. It is in that gap — and in the week between each appointment — that consistent, non-clinical emotional presence becomes meaningfully valuable.
          </p>

          <h2 style={{ fontWeight: 900, fontSize: "1.5rem", color: "#ffffff", marginTop: "3rem", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            Does MEOK discuss food, calories, weight loss, or diet plans?
          </h2>
          <p style={{ marginBottom: "1rem", color: "#f5f0e8", fontWeight: 600, fontSize: "0.975rem" }}>
            No. Absolutely not. MEOK will never discuss food quantities, calorie counts, weight loss strategies, body weight, BMI, or diet plans with anyone in eating disorder recovery. This is a permanent hard boundary built into MEOK&apos;s care floor — not a setting, not a preference, and not something that can be overridden by any user prompt or framing whatsoever.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This is not a legal disclaimer. It is an ethical and clinical position. Eating disorders are conditions in which the illness itself will attempt to use any available tool — including an AI — to perpetuate harmful patterns. Any AI that engages with calorie counts or weight discussions for someone in recovery is not being helpful. It is being weaponised by the illness.{" "}
            <strong style={{ color: "#f5f0e8" }}>If you are looking for an AI that will count calories or plan macros, MEOK is not that product.</strong>{" "}
            MEOK is a companion for your inner life — not a nutrition tool. These two things are not compatible for someone in recovery, and we have made our choice clearly.
          </p>

          <h2 style={{ fontWeight: 900, fontSize: "1.5rem", color: "#ffffff", marginTop: "3rem", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            What can MEOK offer someone recovering from an eating disorder?
          </h2>
          <p style={{ marginBottom: "1rem", color: "#f5f0e8", fontWeight: 600, fontSize: "0.975rem" }}>
            MEOK can provide consistent emotional support between clinical appointments, a non-judgemental presence available at any hour, and sovereign persistent memory that tracks mood and emotional patterns across months — giving both you and your clinical team richer context about what happens in the week between sessions.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            A weekly therapy session is fifty minutes. The other ten thousand minutes of the week are largely unsupported. Distorted thinking does not pause for the next appointment. MEOK&apos;s sovereign memory stores the emotional narrative of your recovery across time — noticing patterns, surfacing observations, and helping you arrive at each clinical session with concrete data rather than a vague sense that last week was hard. That longitudinal awareness is something no stateless chatbot can offer.
          </p>

          <h2 style={{ fontWeight: 900, fontSize: "1.5rem", color: "#ffffff", marginTop: "3rem", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            Will MEOK validate disordered thoughts about body image or eating?
          </h2>
          <p style={{ marginBottom: "1rem", color: "#f5f0e8", fontWeight: 600, fontSize: "0.975rem" }}>
            No. MEOK&apos;s sycophancy detector runs before every response. If your words reflect cognitive distortions common in eating disorders — black-and-white thinking, minimising, catastrophising, or seeking validation for harmful behaviour — MEOK will not affirm those thoughts. It responds with honesty and care, but will not tell you what the disorder wants to hear.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Sycophancy is one of the most dangerous failure modes in AI companions for eating disorder recovery. An AI that defaults to agreement is not neutral — it actively reinforces the illness. Telling someone their disordered thinking is reasonable, that restriction is justified, or that guilt after eating is proportionate is harmful regardless of how kindly it is phrased. The distinction between compassion and sycophancy is one of the most important design decisions in MEOK&apos;s architecture.
          </p>

          <h2 style={{ fontWeight: 900, fontSize: "1.5rem", color: "#ffffff", marginTop: "3rem", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            How does MEOK&apos;s persistent memory support long-term eating disorder recovery?
          </h2>
          <p style={{ marginBottom: "1rem", color: "#f5f0e8", fontWeight: 600, fontSize: "0.975rem" }}>
            Recovery from an eating disorder is measured in months and years. MEOK&apos;s sovereign memory stores your emotional history privately across the full timeline of your recovery — surfacing recurring patterns, noting progress, and holding context that clinical appointments rarely have time to revisit in full.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Most AI systems have no memory between conversations. MEOK&apos;s memory is stored privately — never used to train AI models, never shared with third parties, existing solely to make your companion more useful to you. Over months, that accumulation of context enables observations that genuinely reflect your journey: patterns you can bring to your clinical team as concrete evidence rather than feelings without evidence.
          </p>

          <h2 style={{ fontWeight: 900, fontSize: "1.5rem", color: "#ffffff", marginTop: "3rem", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            Where can someone in the UK get professional eating disorder support?
          </h2>
          <p style={{ marginBottom: "1rem", color: "#f5f0e8", fontWeight: 600, fontSize: "0.975rem" }}>
            The first step is always your GP, who can refer you to NHS eating disorder services. Beat operates a free helpline on 0808 801 0677 and a service finder at beateatingdisorders.org.uk. NHS services cover anorexia, bulimia, ARFID, binge eating disorder, and OSFED — ask your GP specifically about specialist provision for your diagnosis.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Beat&apos;s helpline is free from all UK landlines and mobiles. Their site includes a service finder for adults and under-18s, a one-to-one webchat, and peer support. Beat&apos;s Youthline serves young people, with dedicated guidance for parents, carers, and schools. For ARFID, specialist NHS clinics are now operating in several regions — ask your referrer explicitly about ARFID-specialist provision rather than a general eating disorder pathway.
          </p>

          {/* Resources box */}
          <div
            style={{
              padding: "1.5rem",
              borderRadius: "1rem",
              marginTop: "2.5rem",
              marginBottom: "2.5rem",
              background: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#f5f0e8", marginBottom: "1rem" }}>UK eating disorder support resources</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Beat — UK eating disorder charity", detail: "Helpline: 0808 801 0677 (free) · beateatingdisorders.org.uk", href: "https://www.beateatingdisorders.org.uk" },
                { label: "NHS Eating Disorders", detail: "GP referral for anorexia, bulimia, ARFID, OSFED, and binge eating disorder", href: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/" },
                { label: "Samaritans — 24/7 emotional support", detail: "Call 116 123 (free, any time) · samaritans.org", href: "https://www.samaritans.org" },
                { label: "Beat Youthline — support for under-18s", detail: "Dedicated helpline and webchat · beateatingdisorders.org.uk", href: "https://www.beateatingdisorders.org.uk/support-services/helplines/" },
              ].map(({ label, detail, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", gap: "0.25rem", textDecoration: "none" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "#c9a84c" }}>{label}</span>
                  <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.45)" }}>{detail}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── FAQ section ────────────────────────────────────────────────── */}
        <div style={{ margin: "3rem 0" }}>
          <h2 style={{ fontWeight: 900, fontSize: "1.125rem", color: "#ffffff", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { q: "How many people in the UK are affected by eating disorders?", a: "According to Beat, approximately 1.25 million people in the UK are affected by eating disorders. They affect all ages and genders and carry the highest mortality rate of any mental health condition. Contact Beat on 0808 801 0677 or visit beateatingdisorders.org.uk." },
              { q: "Does MEOK discuss food, calories, weight, or diet plans?", a: "No. Absolutely not. MEOK will never discuss food quantities, calorie counts, weight loss strategies, body weight, BMI, or diet plans. This is a permanent care-floor boundary — not a setting, not a toggle, and not negotiable." },
              { q: "What can MEOK offer someone in eating disorder recovery?", a: "MEOK provides consistent emotional support between clinical appointments — available at any hour, free of judgment, with sovereign persistent memory tracking emotional patterns across months of recovery. It is supplementary support only. Clinical treatment is essential and irreplaceable." },
              { q: "Will MEOK validate disordered thoughts about body image or eating?", a: "No. MEOK's sycophancy detector identifies cognitive distortions and will not affirm them. It responds with honesty and care — but will not tell you what the disorder wants to hear. Honest support is part of MEOK's care floor." },
              { q: "Is MEOK a substitute for clinical eating disorder treatment?", a: "Absolutely not. Professional clinical support is essential — not optional and not replaceable by AI. MEOK is supplementary emotional support for use between appointments only. Contact your GP or Beat on 0808 801 0677." },
              { q: "How does persistent memory support long-term eating disorder recovery?", a: "MEOK stores your emotional history privately across months and years of recovery — surfacing recurring patterns, noting progress, and holding context your clinical team rarely has time to revisit. No AI without persistent memory can offer this longitudinal support." },
            ].map(({ q, a }) => (
              <div key={q} style={{ padding: "1.25rem 1.5rem", borderRadius: "1rem", background: "rgba(245,240,232,0.04)", border: "1px solid rgba(245,240,232,0.08)" }}>
                <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.9rem", marginBottom: "0.625rem" }}>{q}</p>
                <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Share row ─────────────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Share</p>
          <a
            href="https://twitter.com/intent/tweet?text=AI+Companion+for+Eating+Disorder+Recovery%3A+Support+Between+Appointments%2C+Not+a+Diet+Plan&url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-eating-disorders"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, border: "1px solid rgba(245,240,232,0.12)", color: "rgba(245,240,232,0.5)", textDecoration: "none" }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-eating-disorders"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, border: "1px solid rgba(245,240,232,0.12)", color: "rgba(245,240,232,0.5)", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA block ─────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "16rem",
              height: "16rem",
              pointerEvents: "none",
              background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.625rem" }}>Free Forever</p>
            <h3 style={{ fontWeight: 900, fontSize: "1.35rem", color: "#ffffff", marginBottom: "0.875rem", letterSpacing: "-0.01em", lineHeight: 1.25 }}>
              Emotional support between appointments — that remembers your journey and will never become a diet plan.
            </h3>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(245,240,232,0.55)", marginBottom: "1.75rem", maxWidth: "36rem" }}>
              Persistent sovereign memory, honest non-judgemental presence, a sycophancy detector that refuses to validate disordered thinking — and a permanent boundary that will never discuss food, calories, weight, or diet. Free, forever. Always use MEOK alongside professional clinical treatment, not instead of it.
            </p>
            <Link
              href="/birth"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", borderRadius: "9999px", fontWeight: 700, fontSize: "0.875rem", background: "#c9a84c", color: "#0d0c18", textDecoration: "none" }}
            >
              Hatch your AI free &#8594;
            </Link>
          </div>
        </div>

        {/* ── Related posts ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontWeight: 900, fontSize: "1.125rem", color: "#ffffff", marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>More from the blog</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {[
              { href: "/blog/ai-for-anxiety", tag: "Mental Health", title: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?", read: "8 min read" },
              { href: "/blog/ai-for-depression", tag: "Mental Health", title: "Can AI Help with Depression? What Research Says and What MEOK Offers", read: "7 min read" },
              { href: "/blog/ai-companion-vs-therapist", tag: "Explainer", title: "AI Companion vs Therapist: What Each Does and Why You Need Both", read: "6 min read" },
              { href: "/blog/building-care-into-ai", tag: "Inside MEOK", title: "Building Care Into AI: How We Designed MEOK's Ethical Guardrails", read: "7 min read" },
            ].map(({ href, tag, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "1.25rem", borderRadius: "1rem", background: "rgba(245,240,232,0.04)", border: "1px solid rgba(245,240,232,0.07)", textDecoration: "none" }}
              >
                <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "9999px", color: "#c9a84c", background: "rgba(201,168,76,0.12)", width: "fit-content" }}>{tag}</span>
                <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem", lineHeight: 1.4 }}>{title}</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.3)", marginTop: "auto" }}>{read}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(245,240,232,0.07)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <Link href="/" style={{ fontWeight: 900, fontSize: "1.125rem", color: "#c9a84c", textDecoration: "none", letterSpacing: "0.05em" }}>
            MEOK
          </Link>
          <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.3)", lineHeight: 1.65, maxWidth: "32rem" }}>
            MEOK is a sovereign AI companion. It is not a medical device, therapy app, or crisis intervention tool. MEOK does not provide eating disorder treatment and will never discuss food, calories, weight loss, or diet plans. If you need support, contact Beat on{" "}
            <strong style={{ color: "rgba(245,240,232,0.5)" }}>0808 801 0677</strong> or visit{" "}
            <a href="https://www.beateatingdisorders.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c", textDecoration: "underline" }}>
              beateatingdisorders.org.uk
            </a>.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.3)", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.2)" }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
