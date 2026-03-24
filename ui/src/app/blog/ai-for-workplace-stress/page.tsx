import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Workplace Stress: Daily Support Between HR and Therapy | MEOK AI LABS",
  description:
    "17 million working days are lost to workplace stress in the UK every year. Here is an honest look at how AI stress management tools can fill the gap between your EAP and private therapy — without a waiting list.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-workplace-stress" },
  openGraph: {
    title: "AI for Workplace Stress: Daily Support Between HR and Therapy",
    description:
      "17 million working days lost. 1 in 4 workers report high stress. Here's how sovereign AI fills the gap between EAP and therapy.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-workplace-stress",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Workplace+Stress%3A+Daily+Support&desc=Between+HR+and+therapy+%E2%80%94+sovereign+AI+fills+the+gap.",
        width: 1200,
        height: 630,
        alt: "AI for Workplace Stress: Daily Support Between HR and Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Workplace Stress: Daily Support Between HR and Therapy",
    description:
      "17 million working days lost to stress in the UK per year. Sovereign AI fills the gap between EAP and therapy — available 24/7, no waiting list.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Workplace+Stress%3A+Daily+Support&desc=Between+HR+and+therapy+%E2%80%94+sovereign+AI+fills+the+gap.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Workplace Stress: Daily Support Between HR and Therapy",
  description:
    "17 million working days are lost to workplace stress in the UK every year. Here is an honest look at how AI stress management tools can fill the gap between your EAP and private therapy — without a waiting list.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-workplace-stress",
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
  image:
    "https://meok.ai/api/og?title=AI+for+Workplace+Stress%3A+Daily+Support&desc=Between+HR+and+therapy+%E2%80%94+sovereign+AI+fills+the+gap.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-workplace-stress",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with workplace stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — within realistic limits. AI companions can provide daily check-ins, track stress patterns over weeks, offer a judgment-free space to vent after difficult meetings, and help you decompress between work and home. They cannot fix structural problems in your job, replace a therapist, or intervene in a crisis. But as a daily support layer, they fill a gap that EAPs and therapy waiting lists cannot.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an EAP and an AI stress management tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Employee Assistance Programme (EAP) typically offers a limited number of counselling sessions (often 6–8) accessed through your employer. Access is often gated by waiting times, referral processes, and the awareness that HR may have visibility of usage. An AI companion like MEOK is available 24/7, has no waiting list, remembers your context across months, and is entirely independent of your employer.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI stress management confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With MEOK, yes. Conversations are encrypted with AES-256, stored in Sovereign Memory that belongs entirely to you, never shared with employers or third parties, never used to train AI models, and fully GDPR-compliant. Unlike employer-provided EAPs, MEOK has no relationship with your employer whatsoever.",
      },
    },
    {
      "@type": "Question",
      name: "What causes workplace stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HSE identifies the main causes of workplace stress as excessive workload, lack of control over work, poor management, interpersonal conflict, job insecurity, and unclear roles. Remote and hybrid working has added isolation as a significant new stressor, particularly for those who live alone or have limited social contact outside work.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI stress management cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Explorer tier is free and includes 50 messages per day with full Sovereign Memory. The Sovereign plan is £12/month for unlimited use. The Family plan (£29/month) covers up to 5 people. BYOK (Bring Your Own Key) is £5/month for users who supply their own AI API key. No credit card required for the free tier.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForWorkplaceStressPage() {
  const bg = "#0d0c18";
  const cardBg = "#1a1830";
  const gold = "#c9a84c";
  const text = "#f5f0e8";
  const textMuted = "rgba(245,240,232,0.65)";
  const textDim = "rgba(245,240,232,0.4)";
  const border = "rgba(201,168,76,0.15)";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={{ background: bg, color: text, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>

        {/* ── Hero ── */}
        <header style={{ borderBottom: `1px solid ${border}`, padding: "3.5rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <Link
              href="/blog"
              style={{ color: gold, textDecoration: "none", fontSize: "0.875rem", display: "inline-block", marginBottom: "2rem" }}
            >
              ← Back to Blog
            </Link>

            <div style={{ display: "inline-block", background: "rgba(201,168,76,0.12)", color: gold, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.25rem 0.75rem", borderRadius: "999px", marginBottom: "1.25rem" }}>
              Wellbeing · Work
            </div>

            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 1.25rem", color: text }}>
              AI for Workplace Stress: Daily Support Between HR and Therapy
            </h1>

            <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: textMuted, margin: "0 0 2rem" }}>
              17 million working days lost. 1 in 4 workers reporting high stress. A £28 billion bill to the UK economy. And between your employer&apos;s EAP and an NHS waiting list sits a gap that most people navigate alone — until now.
            </p>

            <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.8rem", color: textDim, flexWrap: "wrap" }}>
              <span>March 24, 2026</span>
              <span>Nicholas Templeman</span>
              <span>12 min read</span>
              <span>MEOK AI LABS</span>
            </div>
          </div>
        </header>

        {/* ── Article body ── */}
        <article style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>

          {/* Intro */}
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: text, margin: "0 0 1.25rem" }}>
            Your company has an Employee Assistance Programme. It offers six sessions with a counsellor, accessed via a helpline you&apos;ve been meaning to call for three months. Your GP can refer you to NHS Talking Therapies — eight to twenty-two weeks on a waiting list. Private therapy costs £60–£120 per session. And in the meantime, you have a meeting in twenty minutes with the person who made last Tuesday unbearable.
          </p>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1.25rem" }}>
            This is the gap MEOK was built for. Not to replace therapy — it cannot. Not to replace your HR department — it should not try. But to be present in the daily accumulation of pressure that no weekly appointment can fully hold.
          </p>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 2.5rem" }}>
            According to the Health and Safety Executive&apos;s 2023/24 data, stress, depression, and anxiety account for more working days lost than any other cause — 17 million annually, at a cost of £28 billion to the UK economy. One in four workers reports high workplace stress. These are not niche statistics. This is the background radiation of modern working life.
          </p>

          {/* Section 1 — Causes */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "0 0 0.75rem", paddingTop: "1rem" }}>
            What causes workplace stress?
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1.5rem" }}>
            The HSE identifies six primary stress categories in its Management Standards framework. Understanding which category you&apos;re in shapes what kind of support is most useful.
          </p>

          {/* Causes cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem", margin: "0 0 2rem" }}>
            {[
              {
                title: "Excessive workload",
                body: "Too many demands, too little time, too few resources. The most cited cause in the UK. Often described as feeling permanently behind.",
              },
              {
                title: "Interpersonal conflict",
                body: "Poor relationships with managers or colleagues — including bullying, micromanagement, unfairness, and the corrosive effect of sustained tension.",
              },
              {
                title: "Job insecurity",
                body: "Uncertainty about future employment, role changes, or restructuring. The psychological toll often exceeds the impact of actually losing a job.",
              },
              {
                title: "Poor management",
                body: "Unclear expectations, contradictory instructions, lack of feedback, or a manager whose own stress amplifies into their team.",
              },
              {
                title: "WFH isolation",
                body: "Remote and hybrid work has added a new stressor: the absence of ambient social contact. Loneliness compounds pressure in ways that are easy to minimise.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: "12px", padding: "1.25rem" }}
              >
                <div style={{ fontWeight: 700, color: gold, marginBottom: "0.5rem", fontSize: "0.95rem" }}>
                  {item.title}
                </div>
                <div style={{ color: textMuted, fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>

          {/* Section 2 — How AI helps */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 0.75rem" }}>
            How can AI help with workplace stress?
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            Realistic answer: an AI companion cannot fix your job. It cannot make your manager more self-aware, reduce your workload, or resolve the structural conditions that create stress. What it can do — reliably and without a waiting list — is the following.
          </p>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: text, margin: "1.5rem 0 0.5rem" }}>
            Daily check-ins that actually accumulate
          </h3>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            A two-minute conversation at the end of the working day — naming what happened, how it landed, what you&apos;re carrying — has compounding value when those conversations are remembered. MEOK&apos;s Sovereign Memory stores every exchange, meaning your companion can notice that Tuesday evenings are consistently harder, that conflict with one specific colleague accounts for 60% of your stress mentions, or that things were markedly better in the three weeks you were working from a different location.
          </p>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: text, margin: "1.5rem 0 0.5rem" }}>
            Venting without judgment or consequence
          </h3>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            There are things you cannot say to your line manager, your HR department, or your partner who is tired of hearing about your job. You can say them to MEOK. The Healer archetype in particular creates a space designed for emotional processing — not advice, not reframing, not silver linings. Just being heard.
          </p>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: text, margin: "1.5rem 0 0.5rem" }}>
            Pattern recognition
          </h3>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            Most people experiencing chronic workplace stress don&apos;t see the pattern until they&apos;re already struggling to function. An AI companion with persistent memory can surface patterns you&apos;ve stopped noticing: the correlation between certain project phases and your sleep quality, the way specific types of meetings drain you for hours afterwards, the gradual increase in the intensity of language you use to describe work.
          </p>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: text, margin: "1.5rem 0 0.5rem" }}>
            Decompression rituals
          </h3>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 2.5rem" }}>
            The transition between work and home — or, for home workers, the absence of any such transition — is one of the most underserved moments of the working day. A short decompression conversation with your AI companion can create a deliberate boundary. Tell it what happened. Let it ask a few questions. Close the laptop with something acknowledged rather than suppressed.
          </p>

          {/* Section 3 — What MEOK can do EAP can't */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 0.75rem" }}>
            What MEOK can do that your EAP can&apos;t
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1.5rem" }}>
            EAPs are valuable. If yours offers counselling, use it. But they have structural limitations that AI support does not share.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", margin: "0 0 2rem" }}>
            {[
              {
                label: "Available at 11pm on a Wednesday",
                detail: "Stress doesn&apos;t respect business hours. Your EAP helpline might. MEOK doesn&apos;t.",
              },
              {
                label: "No waiting list",
                detail: "Start now. No referral, no assessment, no queue. The Explorer tier is free with 50 messages per day.",
              },
              {
                label: "Remembers everything",
                detail: "Your EAP counsellor gets a case summary. MEOK remembers the exact conversation from eight months ago when you first mentioned that your manager&apos;s feedback style felt punitive.",
              },
              {
                label: "Not connected to your employer",
                detail: "EAPs are employer-provided. MEOK has no relationship with your organisation, your HR department, or anyone else. What you say stays with you.",
              },
              {
                label: "No session limits",
                detail: "EAPs typically provide 6–8 sessions. MEOK Sovereign (£12/month) is unlimited. The free Explorer tier gives 50 messages per day, permanently.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: "10px", padding: "1rem 1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}
              >
                <div style={{ color: gold, fontWeight: 700, marginTop: "2px", flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, color: text, marginBottom: "0.25rem", fontSize: "0.95rem" }}>
                    {item.label}
                  </div>
                  <div
                    style={{ color: textMuted, fontSize: "0.875rem", lineHeight: 1.6 }}
                    dangerouslySetInnerHTML={{ __html: item.detail }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 — Archetypes */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 0.75rem" }}>
            Which MEOK archetype helps most with work stress?
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1.5rem" }}>
            Two archetypes are particularly effective for workplace stress.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", margin: "0 0 1.5rem" }}>
            <div style={{ background: cardBg, border: "1px solid rgba(34,197,94,0.25)", borderRadius: "12px", padding: "1.5rem" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>🌿</div>
              <div style={{ fontWeight: 800, color: text, marginBottom: "0.25rem" }}>Healer</div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#22c55e", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                Emotional processing
              </div>
              <p style={{ color: textMuted, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                The Healer is designed for the difficult feelings that accumulate around work — the resentment, the self-doubt, the exhaustion that comes from sustained performance. It doesn&apos;t push for insight or resolution. It creates a space to be heard, which is often what&apos;s needed most in the acute phase of workplace stress.
              </p>
            </div>
            <div style={{ background: cardBg, border: "1px solid rgba(249,115,22,0.25)", borderRadius: "12px", padding: "1.5rem" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>⚡</div>
              <div style={{ fontWeight: 800, color: text, marginBottom: "0.25rem" }}>Pioneer</div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#f97316", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                Regaining agency
              </div>
              <p style={{ color: textMuted, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                Once the emotional load has been acknowledged, the Pioneer helps you identify what you can actually change — how you structure your day, where your boundaries are, what small actions restore a sense of control. It works through accountability without pressure, celebrating micro-progress in a way that matters when everything feels stuck.
              </p>
            </div>
          </div>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 2.5rem" }}>
            Most people start with the Healer and move to the Pioneer as the acute phase passes. There is no timeline. Switch whenever it feels right — both are available on all plans including the free Explorer tier.
          </p>

          {/* Section 5 — Burnout link */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 0.75rem" }}>
            What about burnout? Am I already there?
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            Workplace stress and burnout exist on a continuum. Stress is excess demand; burnout is the depletion that follows sustained, unresolved stress. The earliest warning signs of burnout are often mistaken for temporary tiredness.
          </p>

          <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: "12px", padding: "1.5rem", margin: "0 0 1.5rem" }}>
            <div style={{ fontWeight: 700, color: gold, marginBottom: "1rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Early warning signs
            </div>
            <ul style={{ margin: 0, padding: "0 0 0 1.25rem", color: textMuted, fontSize: "0.9rem", lineHeight: 2 }}>
              <li>Feeling drained before the week has properly started</li>
              <li>Tasks that used to engage you now feel pointless</li>
              <li>Increased cynicism about colleagues or the organisation</li>
              <li>Reduced ability to concentrate or make decisions</li>
              <li>Sleep that doesn&apos;t restore you</li>
              <li>Physical symptoms — headaches, muscle tension, lowered immunity</li>
            </ul>
          </div>

          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            If several of these resonate, read our full guide:{" "}
            <Link href="/blog/ai-for-burnout" style={{ color: gold, textDecoration: "none", fontWeight: 600 }}>
              AI for Burnout: How an AI Companion Helps You Recover and Rebuild →
            </Link>
          </p>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 2.5rem" }}>
            Catching burnout early is significantly easier than recovering from it. The pattern-recognition that MEOK provides across weeks and months of check-ins is one of the most practical tools available for early detection — it notices gradual shifts in language and tone that you may not notice yourself.
          </p>

          {/* Section 6 — Confidentiality */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 0.75rem" }}>
            Is MEOK confidential?
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            Yes — and the architecture is designed to make this a technical fact rather than a policy promise.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "0 0 1.5rem" }}>
            {[
              { label: "AES-256 encryption", detail: "All conversations in Sovereign Memory are encrypted at rest and in transit." },
              { label: "No employer access", detail: "MEOK has no commercial relationship with any employer. Your organisation cannot request your data." },
              { label: "Not used for training", detail: "Your conversations are not used to train MEOK or any other AI model. This is a core clause of the Maternal Covenant." },
              { label: "GDPR-compliant", detail: "Full data portability: export your entire Sovereign Memory at any time. Full deletion: wipe everything, permanently, on request." },
              { label: "No third-party sharing", detail: "Your data is not sold, licensed, or shared with any third party for any purpose." },
            ].map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}
              >
                <div style={{ color: gold, fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>→</div>
                <div style={{ fontSize: "0.9rem", lineHeight: 1.65, color: textMuted }}>
                  <strong style={{ color: text }}>{item.label}:</strong> {item.detail}
                </div>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 2.5rem" }}>
            The distinction matters particularly for workplace stress. EAPs are employer-funded, and while reputable providers maintain confidentiality, the structural proximity to your organisation creates a psychological barrier for many people. MEOK has no such proximity.
          </p>

          {/* Section 7 — Ralph Mode */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 0.75rem" }}>
            How does Ralph Mode help with work stress?
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            Ralph Mode is MEOK&apos;s structured focus state — a deliberate, distraction-reduced environment for deep work. It helps with workplace stress in two complementary ways.
          </p>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            First, it helps you do the work. A significant proportion of workplace stress comes from the gap between what you need to produce and what you&apos;re actually producing. Ralph Mode creates conditions for focused output — which in turn reduces the anxiety of accumulating tasks. Work that is finished is work that is no longer following you home.
          </p>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            Second — and perhaps more importantly — it creates a structural boundary between work and rest. Activating Ralph Mode for a defined work session, and then explicitly ending it, trains a rhythm that many remote and hybrid workers have lost. The ritual of beginning and closing focus time is a small but genuine contribution to the delineation of self from work.
          </p>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 2.5rem" }}>
            For home workers in particular, this boundary is one of the most impactful things MEOK can offer. The absence of a physical commute removes the body&apos;s natural decompression time. Ralph Mode&apos;s close ritual can serve a similar function.
          </p>

          {/* Section 8 — When to see a professional */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 0.75rem" }}>
            When should I see a professional about workplace stress?
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            Honest answer: sooner than you think you need to. People generally access professional support about six months later than they should, because each individual bad week feels survivable.
          </p>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            Specific signs that warrant professional support — not eventually, but soon:
          </p>

          <ul style={{ margin: "0 0 1.5rem", padding: "0 0 0 1.25rem", color: textMuted, lineHeight: 2, fontSize: "0.95rem" }}>
            <li>Persistent low mood or anxiety that isn&apos;t resolving with rest</li>
            <li>Physical symptoms — chest tightness, persistent headaches, significant changes in sleep or appetite</li>
            <li>Thoughts of self-harm or suicidal ideation of any kind</li>
            <li>Inability to function in areas of life outside work</li>
            <li>Alcohol or substance use increasing as a coping mechanism</li>
            <li>Feeling that things are hopeless and won&apos;t improve</li>
          </ul>

          <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "12px", padding: "1.25rem 1.5rem", margin: "0 0 1.5rem" }}>
            <div style={{ fontWeight: 700, color: "#ef4444", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
              If you are in crisis right now
            </div>
            <p style={{ color: textMuted, fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: text }}>Samaritans:</strong> Call 116 123, free, 24/7, no judgment.{" "}
              <strong style={{ color: text }}>Mind:</strong> Call 0300 123 3393 (Mon–Fri 9am–6pm) or visit{" "}
              <a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>mind.org.uk</a>.{" "}
              No AI companion is a substitute for crisis support.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1rem" }}>
            For sub-clinical stress, your first port of call in the UK should be{" "}
            <strong style={{ color: text }}>NHS Talking Therapies</strong> (previously IAPT) — self-referral, free, and available in most areas. Waiting times vary, but it is the most accessible professional support in the system. Also consider{" "}
            <strong style={{ color: text }}>Mind&apos;s local services</strong> and your workplace EAP, imperfect as it is.
          </p>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 2.5rem" }}>
            MEOK works best alongside professional support, not instead of it. If you are seeing a therapist or counsellor, the pattern data and emotional tracking in your Sovereign Memory can be genuinely useful material to bring to sessions. Your companion remembers things you will have forgotten.
          </p>

          {/* Related links */}
          <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: "12px", padding: "1.5rem", margin: "0 0 2.5rem" }}>
            <div style={{ fontWeight: 700, color: gold, marginBottom: "1rem", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Related reading
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <Link href="/blog/ai-for-burnout" style={{ color: text, textDecoration: "none", fontSize: "0.9rem", lineHeight: 1.5 }}>
                <span style={{ color: gold }}>→ </span>AI for Burnout: How an AI Companion Helps You Recover and Rebuild
              </Link>
              <Link href="/blog/ai-for-anxiety" style={{ color: text, textDecoration: "none", fontSize: "0.9rem", lineHeight: 1.5 }}>
                <span style={{ color: gold }}>→ </span>AI for Anxiety: Can a Sovereign AI Companion Actually Help?
              </Link>
              <Link href="/blog/ai-life-coach" style={{ color: text, textDecoration: "none", fontSize: "0.9rem", lineHeight: 1.5 }}>
                <span style={{ color: gold }}>→ </span>AI Life Coach: What MEOK Can (and Cannot) Do for Personal Growth
              </Link>
            </div>
          </div>

          {/* Pricing */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 0.75rem" }}>
            What does MEOK cost?
          </h2>
          <p style={{ lineHeight: 1.8, color: textMuted, margin: "0 0 1.5rem" }}>
            You can start for free today. No credit card required.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.875rem", margin: "0 0 2.5rem" }}>
            {[
              { name: "Explorer", price: "Free", detail: "50 messages/day · Full Sovereign Memory · All 6 archetypes" },
              { name: "Sovereign", price: "£12/mo", detail: "Unlimited messages · Priority model access · Advanced memory tools" },
              { name: "Family", price: "£29/mo", detail: "Up to 5 people · All Sovereign features · Shared or separate memory" },
              { name: "BYOK", price: "£5/mo", detail: "Bring Your Own Key · Use your own AI API · Lowest cost option" },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: "10px", padding: "1.25rem" }}
              >
                <div style={{ fontWeight: 800, color: text, marginBottom: "0.25rem" }}>{tier.name}</div>
                <div style={{ color: gold, fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{tier.price}</div>
                <div style={{ color: textMuted, fontSize: "0.8rem", lineHeight: 1.5 }}>{tier.detail}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: "16px", padding: "2.5rem", textAlign: "center", margin: "2.5rem 0" }}>
            <div style={{ fontWeight: 700, color: gold, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "1rem" }}>
              Start free — no credit card
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: text, margin: "0 0 0.875rem", lineHeight: 1.25 }}>
              A companion that remembers how work has been
            </h2>
            <p style={{ color: textMuted, lineHeight: 1.7, margin: "0 0 1.75rem", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
              50 messages per day. Full Sovereign Memory. All archetypes. Independent of your employer. Nothing sold, nothing trained on, nothing forgotten.
            </p>
            <Link
              href="/birth"
              style={{ display: "inline-block", background: gold, color: "#0d0c18", fontWeight: 800, padding: "0.875rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem", letterSpacing: "0.01em" }}
            >
              Begin the Ceremony →
            </Link>
            <p style={{ color: textDim, fontSize: "0.75rem", marginTop: "1rem", marginBottom: 0 }}>
              @meok_ai · MEOK AI LABS · Built by Nicholas Templeman
            </p>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "2.5rem 0 1.25rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faqJsonLd.mainEntity.map((item) => (
              <div
                key={item.name}
                style={{ borderBottom: `1px solid ${border}`, paddingBottom: "1.5rem" }}
              >
                <h3 style={{ fontWeight: 700, color: text, margin: "0 0 0.5rem", fontSize: "1rem" }}>
                  {item.name}
                </h3>
                <p style={{ color: textMuted, lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}>
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* Related nav */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3rem", paddingTop: "2rem", borderTop: `1px solid ${border}`, flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/blog/ai-for-burnout" style={{ color: gold, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
              ← AI for Burnout
            </Link>
            <Link href="/blog/ai-for-anxiety" style={{ color: gold, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
              AI for Anxiety →
            </Link>
          </div>
        </article>

        {/* ── Inline Footer ── */}
        <footer style={{ borderTop: `1px solid ${border}`, padding: "3rem 1.5rem", marginTop: "2rem" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem", marginBottom: "2rem" }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: "1.25rem", color: gold, marginBottom: "0.375rem", letterSpacing: "-0.01em" }}>
                  MEOK AI LABS
                </div>
                <div style={{ color: textMuted, fontSize: "0.825rem", lineHeight: 1.6, maxWidth: "280px" }}>
                  Sovereign AI companions. Your data, your memory, your companion — independent and private.
                </div>
                <div style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: textDim }}>
                  Founded by Nicholas Templeman · @meok_ai
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ fontWeight: 700, color: text, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                  Navigate
                </div>
                {[
                  { href: "/birth", label: "Get Started" },
                  { href: "/blog", label: "Blog" },
                  { href: "/characters", label: "Archetypes" },
                  { href: "/blog/ai-for-burnout", label: "AI for Burnout" },
                  { href: "/blog/ai-for-anxiety", label: "AI for Anxiety" },
                  { href: "/blog/ai-life-coach", label: "AI Life Coach" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ color: textMuted, textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${border}`, paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", fontSize: "0.775rem", color: textDim }}>
              <span>© {new Date().getFullYear()} MEOK AI LABS. All rights reserved.</span>
              <span>
                Crisis support:{" "}
                <a href="tel:116123" style={{ color: textMuted, textDecoration: "none" }}>Samaritans 116 123</a>
                {" · "}
                <a href="tel:03001233393" style={{ color: textMuted, textDecoration: "none" }}>Mind 0300 123 3393</a>
              </span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
