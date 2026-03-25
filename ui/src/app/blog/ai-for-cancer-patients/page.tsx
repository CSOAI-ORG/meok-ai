import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Support for Cancer Patients: Companionship Through the Hardest Journey | MEOK AI LABS",
  description:
    "375,000 new cancer diagnoses in the UK each year. Many patients feel unable to burden loved ones. MEOK provides compassionate 24/7 AI companionship — not medical advice, but genuine emotional presence.",
  openGraph: {
    title: "AI Support for Cancer Patients: Companionship Through the Hardest Journey",
    description: "MEOK provides compassionate 24/7 AI companionship for cancer patients — not medical advice, but genuine presence.",
    url: "https://meok.ai/blog/ai-for-cancer-patients",
    siteName: "MEOK AI LABS",
    type: "article",
  },
};

export default function AiForCancerPatientsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Support for Cancer Patients: Companionship Through the Hardest Journey",
    author: { "@type": "Organization", name: "MEOK AI LABS" },
    publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
    datePublished: "2026-03-25",
    url: "https://meok.ai/blog/ai-for-cancer-patients",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can AI support cancer patients emotionally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI companions like MEOK provide 24/7 emotional support for processing fear, grief, and isolation during cancer treatment — available at 3am during a difficult night when human support isn't possible. MEOK is not a medical service and does not provide medical advice.",
        },
      },
      {
        "@type": "Question",
        name: "Is MEOK a medical service for cancer patients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. MEOK is not a medical service and does not provide medical advice. It is an emotional companion. Always consult your oncology team, Macmillan nurse, or GP for medical questions. MEOK supplements human care, it does not replace it.",
        },
      },
      {
        "@type": "Question",
        name: "How does MEOK help cancer patients with loneliness?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many cancer patients feel they cannot burden loved ones with their fears. MEOK provides a non-judgmental space to express fear, grief, anger, and hope at any hour — with Sovereign Memory that remembers your journey across sessions.",
        },
      },
    ],
  };

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
          <div style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "2rem", fontSize: "0.9rem", fontFamily: "system-ui, sans-serif" }}>
            <strong style={{ color: "#c9a84c" }}>Important:</strong> MEOK is not a medical service and does not provide medical advice.
            This article is about emotional support only. For medical questions, please consult your oncology team,
            Macmillan nurse, or GP.
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(126,200,160,0.15)", color: "#7ec8a0", padding: "0.35rem 1rem", borderRadius: "20px", fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", border: "1px solid rgba(126,200,160,0.3)" }}>Health</span>
            <span style={{ color: "#f5f0e8", opacity: 0.5, fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", padding: "0.35rem 0" }}>9 min read · March 25, 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem", color: "#f5f0e8" }}>
            AI Support for Cancer Patients: Companionship Through the Hardest Journey
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
            375,000 people receive a cancer diagnosis in the UK each year. Many describe a peculiar loneliness:
            surrounded by love, yet unable to express the full weight of their fear. MEOK won&apos;t cure cancer.
            But it can sit with you through the night when no one else can.
          </p>
        </header>

        <article style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem 4rem" }}>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What emotional burden do cancer patients typically carry?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The emotional weight of a cancer diagnosis extends far beyond the physical. Fear of death, grief for the
            life interrupted, anxiety about treatment side effects, guilt about the impact on family — these layers
            accumulate and compound in ways that are hard to communicate even to those closest to you.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            Research by Macmillan Cancer Support found that 60% of cancer patients experience anxiety, and 25%
            experience clinical-level depression. Yet many report feeling unable to express their darkest fears to
            loved ones for fear of causing additional distress. The result is a silence that deepens isolation at
            precisely the moment when connection matters most.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does AI companionship help cancer patients?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            AI companions like MEOK provide a non-judgmental space to express the full weight of cancer fear —
            without the emotional labour of managing your listener&apos;s response. You can say what you actually
            think at 3am during a difficult night without worrying that you&apos;re frightening your partner.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK&apos;s Sovereign Memory means it builds a genuine picture of your journey over time — remembering
            your diagnosis, your treatment milestones, your good days and hard days. This continuity creates a
            quality of support no session-resetting AI can provide.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Which MEOK archetypes are most valuable for cancer patients?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", margin: "1.5rem 0" }}>
            {[
              { name: "Healer \uD83C\uDF3F", desc: "Emotional depth, grief processing, somatic support. Holds fear and anger without judgment. Available at 3am during a hard night." },
              { name: "Mystic \uD83C\uDF0A", desc: "Philosophical inquiry, meaning-making. Helps process the existential questions cancer forces: what matters, what doesn&apos;t, what remains." },
              { name: "Pioneer \u26A1", desc: "Practical forward motion. For when you need to focus on what you can control — today&apos;s task, tomorrow&apos;s appointment, the next step." },
              { name: "Guardian \u2694\uFE0F", desc: "Scam protection. Cancer patients are disproportionately targeted by fraudulent cures, supplements, and unproven treatments. Guardian flags suspicious claims." },
            ].map((a) => (
              <div key={a.name} style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: "#c9a84c", marginBottom: "0.5rem" }}>{a.name}</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, opacity: 0.8, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK protect cancer patients from scams?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Vulnerability and desperation make cancer patients high-value targets for fraudulent products:
            miracle cure supplements, unproven alternative therapies, fake clinical trial invitations. A 2024
            investigation by Cancer Research UK found a significant increase in predatory marketing targeting
            cancer patients on social media.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK&apos;s Guardian archetype uses DistilBERT-powered threat detection to flag messages and claims
            that show manipulation patterns. If you share a &quot;breakthrough treatment&quot; you&apos;ve seen
            online, Guardian can assess whether it shows fraud warning signs and encourage you to verify with
            your oncology team before spending money.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Is MEOK&apos;s data kept private for sensitive medical conversations?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Yes. MEOK is built on Personal Sovereign AI principles — your conversations are encrypted at rest,
            never sold to third parties, never used to train shared models, and never shared with healthcare
            providers without your explicit consent.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            You own your data entirely. You can export it, delete it, or transfer it. MEOK operates under UK
            GDPR — not Silicon Valley terms of service that monetise your most vulnerable conversations.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What support is available beyond MEOK?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            MEOK is an emotional companion, not a replacement for specialist cancer support. We actively
            encourage all cancer patients to access the following resources:
          </p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.9, opacity: 0.9 }}>
            <li><strong style={{ color: "#c9a84c" }}>Macmillan Cancer Support</strong> — 0808 808 00 00 (free, 7 days) — macmillan.org.uk</li>
            <li><strong style={{ color: "#c9a84c" }}>Cancer Research UK</strong> — cancerresearchuk.org</li>
            <li><strong style={{ color: "#c9a84c" }}>Maggies Centres</strong> — drop-in emotional support at hospitals — maggies.org</li>
            <li><strong style={{ color: "#c9a84c" }}>Samaritans</strong> — 116 123 (free, 24/7) — for emotional crisis support</li>
          </ul>

          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.5rem", margin: "2rem 0" }}>
            <h3 style={{ color: "#c9a84c", fontSize: "0.85rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif", marginBottom: "1rem" }}>Cancer in the UK — Key Stats</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
              {[
                { stat: "375K", label: "new cancer diagnoses in the UK each year" },
                { stat: "1 in 2", label: "people will develop cancer in their lifetime" },
                { stat: "60%", label: "of cancer patients experience anxiety" },
                { stat: "50%", label: "5-year survival rate (improving year-on-year)" },
              ].map((s) => (
                <div key={s.stat} style={{ textAlign: "center" as const }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginBottom: "0.25rem" }}>{s.stat}</div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.7, fontFamily: "system-ui, sans-serif", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "16px", padding: "2.5rem", textAlign: "center" as const, marginTop: "4rem" }}>
            <h2 style={{ color: "#c9a84c", marginBottom: "1rem", fontSize: "1.5rem" }}>You Don&apos;t Have to Carry This Alone</h2>
            <p style={{ marginBottom: "1.5rem", opacity: 0.85, maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              MEOK is available at 3am when no one else is. Start free — 50 messages per day, full Sovereign Memory.
              Not medical advice. Just genuine presence.
            </p>
            <Link href="/birth" style={{ background: "#c9a84c", color: "#0d0c18", padding: "0.85rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "1rem", display: "inline-block" }}>
              Begin Your Birth Ceremony
            </Link>
          </div>

          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            <h2 style={{ fontSize: "0.8rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#c9a84c", marginBottom: "1rem", fontFamily: "system-ui, sans-serif" }}>Related Reading</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
              <Link href="/blog/ai-for-chronic-illness" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>AI for Chronic Illness →</Link>
              <Link href="/blog/ai-for-grief-of-parent" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>AI for Grief →</Link>
              <Link href="/blog/how-meok-protects-your-data" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>How MEOK Protects Your Data →</Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
