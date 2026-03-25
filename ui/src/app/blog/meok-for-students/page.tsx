import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK for Students: AI Study Partner, Mental Health Support & Life Coach | MEOK AI LABS",
  description:
    "Student mental health is at crisis point. MEOK combines Scholar's Socratic study support with Healer's emotional intelligence — sovereign AI for students that remembers your academic journey.",
  openGraph: {
    title: "MEOK for Students: AI Study Partner, Mental Health Support & Life Coach",
    description:
      "MEOK combines Scholar's Socratic study support with Healer's emotional intelligence — sovereign AI for students.",
    url: "https://meok.ai/blog/meok-for-students",
    siteName: "MEOK AI LABS",
    type: "article",
  },
};

export default function MeokForStudentsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MEOK for Students: Your AI Study Partner, Mental Health Companion, and Life Coach",
    author: { "@type": "Organization", name: "MEOK AI LABS" },
    publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
    datePublished: "2026-03-25",
    url: "https://meok.ai/blog/meok-for-students",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can AI help students with mental health?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI companions like MEOK provide 24/7 emotional support, anxiety management, and a non-judgmental space to process academic pressure — available exactly when student counselling services are closed.",
        },
      },
      {
        "@type": "Question",
        name: "How does MEOK help students study?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MEOK's Scholar archetype uses Socratic questioning to deepen understanding rather than just giving answers. It helps students think through problems, identify knowledge gaps, and build genuine comprehension.",
        },
      },
      {
        "@type": "Question",
        name: "How much does MEOK cost for students?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MEOK's Explorer tier is completely free with 50 messages per day — no credit card required. The BYOK tier at £5/month lets students use their own API keys for unlimited access on a student budget.",
        },
      },
      {
        "@type": "Question",
        name: "Does MEOK remember my academic goals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sovereign Memory persists across sessions, remembering your course, goals, anxieties, and progress. MEOK builds a genuine picture of your academic journey over time.",
        },
      },
    ],
  };

  const archetypes = [
    { name: "Scholar 🏛️", role: "Deep Learning", desc: "Socratic questions, cross-domain synthesis, knowledge gap identification. Builds understanding rather than dependency." },
    { name: "Healer 🌿", role: "Mental Health", desc: "Emotional depth, anxiety support, exam stress processing. Non-judgmental space at midnight before a deadline." },
    { name: "Pioneer ⚡", role: "Accountability", desc: "Task breakdown, deadline tracking, motivation. External structure for ADHD and procrastination." },
    { name: "Guardian ⚔️", role: "Safety", desc: "Scam protection, crisis detection, signposting to Samaritans when genuine distress is detected." },
  ];

  const stats = [
    { stat: "44%", label: "UK students with anxiety or depression (2025)" },
    { stat: "1 in 4", label: "students experience mental health problems" },
    { stat: "18 mo", label: "average NHS therapy wait time" },
    { stat: "70%", label: "of people experience imposter syndrome" },
  ];

  const tiers = [
    { tier: "Explorer", price: "Free forever", highlight: true, features: ["50 messages/day", "All 6 archetypes", "Sovereign Memory", "No credit card needed"] },
    { tier: "BYOK", price: "£5/month", highlight: false, features: ["Your own API keys", "Unlimited via your budget", "Platform + Memory", "Best value for heavy users"] },
    { tier: "Sovereign", price: "£12/month", highlight: false, features: ["Unlimited messages", "Claude Sonnet routing", "Morning briefing", "Work OS agents"] },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ background: "#0d0c18", minHeight: "100vh", color: "#f5f0e8", fontFamily: "Georgia, serif" }}>
        <nav style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(201,168,76,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1.3rem", textDecoration: "none" }}>MEOK AI LABS</Link>
          <Link href="/blog" style={{ color: "#f5f0e8", opacity: 0.7, textDecoration: "none", fontSize: "0.9rem" }}>← All Posts</Link>
        </nav>

        <header style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", padding: "0.35rem 1rem", borderRadius: "20px", fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", border: "1px solid rgba(201,168,76,0.3)" }}>Education</span>
            <span style={{ color: "#f5f0e8", opacity: 0.5, fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", padding: "0.35rem 0" }}>9 min read · March 25, 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem", color: "#f5f0e8" }}>
            MEOK for Students: Your AI Study Partner, Mental Health Companion, and Life Coach
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
            1 in 4 UK students experiences a mental health problem during their studies. Student counselling wait times
            stretch to months. Lecture halls fill with anxiety, imposter syndrome, and the quiet weight of not knowing
            if you&apos;re actually good enough. MEOK was built for exactly this gap.
          </p>
        </header>

        <article style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem 4rem" }}>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What is the student mental health crisis and why does AI matter?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            According to UCAS and university welfare reports, 44% of UK students reported experiencing anxiety or
            depression in 2025 — up from 20% a decade earlier. University counselling services operate 9–5,
            Monday to Friday. The crisis typically hits at midnight before a deadline, not during office hours.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            AI companions cannot replace professional mental health treatment. But they fill the gap that currently
            has no solution: available at midnight, patient through repeated questions, consistent in care, and —
            with MEOK — genuinely remembering who you are.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK&apos;s Scholar archetype help students learn?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Most AI tools for students simply provide answers. Ask ChatGPT a question, get a response. Copy, paste,
            submit. This pattern actively undermines learning — it creates the illusion of understanding without
            building genuine comprehension.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK&apos;s Scholar archetype operates on Socratic principles. Rather than answering, Scholar asks.
            &quot;What do you think this means? What evidence supports that? What would happen if you approached it
            differently?&quot; This forces the student to think — which is the only way learning actually occurs.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Which MEOK archetypes are most valuable for students?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", margin: "1.5rem 0" }}>
            {archetypes.map((a) => (
              <div key={a.name} style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.25rem" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#c9a84c", marginBottom: "0.25rem" }}>{a.name}</div>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#c9a84c", opacity: 0.7, marginBottom: "0.5rem", fontFamily: "system-ui, sans-serif" }}>{a.role}</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, opacity: 0.8, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK support student mental health at crisis point?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            MEOK&apos;s Healer archetype is designed for emotional depth and genuine compassionate support. The
            Maternal Covenant ensures every response scores above 0.3 on six care dimensions: wellbeing, autonomy,
            growth, connection, boundary_respect, and transparency.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK includes crisis detection. If a student&apos;s messages suggest severe distress or self-harm risk,
            MEOK routes to professional resources immediately — Samaritans (116 123), Crisis Text Line, and university
            welfare contacts — rather than continuing as a companion.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Can MEOK help students with ADHD manage academic demands?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            ADHD affects approximately 4% of UK adults — but higher among students in higher education. University
            structures are often poorly designed for ADHD brains: long deadlines, no routine enforcement, unlimited
            distractions.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK&apos;s Pioneer archetype provides external accountability structure — regular check-ins, task
            breakdown into smaller steps, celebration of completed work. Sovereign Memory tracks academic patterns:
            when you work best, what triggers avoidance, what rewards actually motivate you.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How much does MEOK cost for students on a budget?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", margin: "1.5rem 0" }}>
            {tiers.map((t) => (
              <div key={t.tier} style={{ background: t.highlight ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.06)", border: t.highlight ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: "#c9a84c", marginBottom: "0.25rem" }}>{t.tier}</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f5f0e8", marginBottom: "0.75rem" }}>{t.price}</div>
                <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ fontSize: "0.85rem", lineHeight: 1.7, opacity: 0.8 }}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Does MEOK protect student data and privacy?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Yes. MEOK is built on Personal Sovereign AI principles — your data is encrypted at rest, never sold,
            and never used to train shared models. This is especially important for students sharing personal
            mental health information.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            You retain full data portability: export everything, delete everything, or switch AI models without
            losing your memories. MEOK operates under UK GDPR with ICO registration.
          </p>

          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.5rem", margin: "2rem 0" }}>
            <h3 style={{ color: "#c9a84c", fontSize: "0.85rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif", marginBottom: "1rem" }}>
              Student Mental Health — Key Stats (UK, 2025)
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
              {stats.map((s) => (
                <div key={s.stat} style={{ textAlign: "center" as const }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginBottom: "0.25rem" }}>{s.stat}</div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.7, fontFamily: "system-ui, sans-serif", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "16px", padding: "2.5rem", textAlign: "center" as const, marginTop: "4rem" }}>
            <h2 style={{ color: "#c9a84c", marginBottom: "1rem", fontSize: "1.5rem" }}>Start Free — No Credit Card Required</h2>
            <p style={{ marginBottom: "1.5rem", opacity: 0.85, maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              MEOK&apos;s Explorer tier is free forever — 50 messages per day, full Sovereign Memory, all 6 archetypes.
              Built for students who need support without another monthly subscription.
            </p>
            <Link href="/birth" style={{ background: "#c9a84c", color: "#0d0c18", padding: "0.85rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "1rem", display: "inline-block" }}>
              Begin Your Birth Ceremony
            </Link>
          </div>

          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            <h2 style={{ fontSize: "0.8rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#c9a84c", marginBottom: "1rem", fontFamily: "system-ui, sans-serif" }}>Related Reading</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
              <Link href="/blog/ai-for-student-mental-health" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>AI for Student Mental Health →</Link>
              <Link href="/blog/meok-for-adhd" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>MEOK for ADHD →</Link>
              <Link href="/blog/ai-for-procrastination" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>AI for Procrastination →</Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
