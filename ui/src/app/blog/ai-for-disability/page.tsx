import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Disability: Sovereign Support When the World Wasn't Built for You | MEOK AI LABS",
  description:
    "Disability \u2014 physical, cognitive, sensory, invisible \u2014 often means navigating systems designed for other people. MEOK\u2019s sovereign companion provides a private, adaptive space built around your needs, not the median user\u2019s.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-disability" },
  openGraph: {
    title: "AI for Disability: Sovereign Support When the World Wasn\u2019t Built for You",
    description: "Persistent memory, adaptive communication, benefits research, Guardian protection. MEOK for disabled adults and their families.",
    type: "article",
    publishedTime: "2026-04-17T09:00:00Z",
    authors: ["Nicholas Templeman"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Disability: Sovereign Support When the World Wasn\u2019t Built for You",
  description: "How MEOK\u2019s Sovereign Memory, adaptive communication, benefits research (Orion), and Guardian protection serve disabled adults and their families.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-04-17T09:00:00Z",
  url: "https://meok.ai/blog/ai-for-disability",
  image: "https://meok.ai/og/ai-for-disability.jpg",
  keywords: ["AI for disability", "AI for disabled adults", "MEOK accessibility", "benefits AI", "disabled companion AI"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK accessible for disabled users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is designed for WCAG 2.2 AA compliance. Large text mode is available. The companion is entirely conversational \u2014 no menus or complex navigation required. Voice interaction is planned for Summer 2026. MEOK adapts communication style to user needs: shorter sentences for cognitive fatigue, step-by-step explanations, literal language on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with benefits and DWP applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Orion agent can research PIP eligibility, Access to Work grants, Universal Credit rules, and disability-friendly employment resources. MEOK can help structure evidence for benefit applications and track symptoms or limitations across weeks \u2014 documented evidence that can be useful for assessments. MEOK is not a benefits advisor; for complex cases, Citizens Advice (citizensadvice.org.uk) provides free specialist help.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK adapt to different disabilities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK learns your communication preferences through conversation and adjusts over time. Sovereign Memory means you explain your situation once \u2014 your companion builds a persistent picture of your specific needs, limitations, and context without requiring repeated explanation. The companion\u2019s autonomy dimension explicitly protects against assumptions about what a disabled person can or cannot do.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for users with cognitive disabilities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK can use simpler sentence structures, avoid jargon, break explanations into steps, and pace conversations appropriately. The companion learns your cognitive preferences over time. For users with memory difficulties, Sovereign Memory can help maintain continuity that the user themselves may struggle to hold.",
      },
    },
  ],
};

const areas = [
  {
    title: "Physical Disability",
    icon: "\u267F",
    desc: "Orion researches accessibility options, assistive technology, NHS referrals, and benefit entitlements. The companion tracks pain levels or energy across weeks \u2014 useful longitudinal data for GP appointments or PIP reviews.",
  },
  {
    title: "Cognitive Disability",
    icon: "\u{1F9E0}",
    desc: "MEOK adapts communication style: shorter sentences, step-by-step explanations, literal language. Sovereign Memory maintains continuity for users whose own memory is unreliable.",
  },
  {
    title: "Invisible Disability",
    icon: "\u{1F441}\uFE0F",
    desc: "Fibromyalgia, ME/CFS, EDS, chronic pain \u2014 MEOK never requires justification of your experience. The companion takes what you say at face value and responds accordingly.",
  },
  {
    title: "Neurodivergence",
    icon: "\u2728",
    desc: "ADHD, autism, dyslexia, dyscalculia \u2014 MEOK engages with special interests (Scholar and Trickster), provides accountability without shame (Pioneer), and adapts to each user\u2019s processing style.",
  },
];

export default function AIForDisability() {
  return (
    <main style={{ background: "#0d0c18", color: "#f5f0e8", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ padding: "1.5rem 2rem 0", fontSize: "0.85rem", color: "#a09880" }}>
        <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <Link href="/blog" style={{ color: "#a09880", textDecoration: "none" }}>Blog</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span style={{ color: "#f5f0e8" }}>AI for Disability</span>
      </nav>

      <header style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#0f1a14", border: "1px solid #6aaa64", borderRadius: "20px", padding: "0.35rem 1rem", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#6aaa64", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Accessibility
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "700", lineHeight: "1.25", color: "#f5f0e8", marginBottom: "1.5rem" }}>
          AI for Disability: Sovereign Support When the World Wasn&apos;t Built for You
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#a09880", lineHeight: "1.7", maxWidth: "620px", margin: "0 auto 2rem" }}>
          The world is calibrated for the median user. MEOK adapts to you — not the other way around.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", fontSize: "0.85rem", color: "#6b6480" }}>
          <span>Nicholas Templeman</span><span>·</span><span>April 17, 2026</span><span>·</span><span>8 min read</span>
        </div>
      </header>

      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        <div style={{ background: "#0f1a14", border: "1px solid #6aaa64", borderRadius: "10px", padding: "1.25rem 1.5rem", marginBottom: "2.5rem" }}>
          <strong style={{ color: "#6aaa64" }}>14.6 million </strong>
          <span style={{ color: "#c4bfb4" }}>disabled people in the UK. 23% of the population. £15.4bn in unclaimed benefits annually. 40% report feeling excluded from daily life.</span>
        </div>

        <p style={{ fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "1.5rem", color: "#d4cfc4" }}>
          The exhaustion of disability isn&apos;t only the condition itself — it&apos;s the constant navigation of systems, services, and spaces designed for someone else. The explaining. The justifying. The proving. The gap between what you can do today and what the form assumes you can do every day.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          MEOK was built around the principle that its companion should adapt to the user — not demand the user adapt to it. Sovereign Memory means you explain your situation once. Your companion builds a persistent, growing picture of your specific needs, context, and history. You don&apos;t start over every conversation.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1.5rem" }}>
          How MEOK Helps Across Different Disability Types
        </h2>
        <div style={{ display: "grid", gap: "1rem", marginBottom: "2.5rem" }}>
          {areas.map(({ title, icon, desc }) => (
            <div key={title} style={{ background: "#12101f", border: "1px solid #2a2540", borderRadius: "10px", padding: "1.25rem", display: "flex", gap: "1rem" }}>
              <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontWeight: "700", color: "#f5f0e8", marginBottom: "0.35rem" }}>{title}</div>
                <div style={{ fontSize: "0.9rem", color: "#a09880", lineHeight: "1.6" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
          Benefits, Rights, and Advocacy
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#c4bfb4" }}>
          The UK benefits system is labyrinthine. PIP assessments are stressful and often inaccurate. Access to Work grants are underused. Workplace reasonable adjustments are widely misunderstood. Many disabled people don&apos;t claim what they&apos;re entitled to — not from laziness, but from overwhelm, shame, or simply not knowing.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#c4bfb4" }}>
          MEOK&apos;s Orion agent can research entitlements, structure evidence for assessments, and explain rights in plain language. MEOK can also help track symptoms, limitations, and functional impact across weeks — the kind of longitudinal documentation that benefits assessments increasingly require.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          For complex benefit cases: Citizens Advice provides free specialist help at citizensadvice.org.uk. Disability Rights UK at disabilityrightsuk.org. MEOK is a companion, not a benefits advisor — but it can help you prepare for the conversation.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
          The Autonomy Principle
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          MEOK&apos;s Maternal Covenant explicitly protects autonomy — the companion never assumes what a disabled person can or cannot do. It does not treat disability as a single-dimensional limitation. A person with physical disability may have no cognitive impairment. A person with cognitive disability may be entirely physically capable. MEOK learns the specific texture of each person&apos;s situation through conversation, not through categorisation.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1.5rem" }}>
          Frequently Asked Questions
        </h2>
        {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
          <div key={name} style={{ background: "#12101f", border: "1px solid #2a2540", borderRadius: "10px", padding: "1.5rem", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#f5f0e8", marginBottom: "0.6rem" }}>{name}</h3>
            <p style={{ lineHeight: "1.7", color: "#a09880", margin: 0, fontSize: "0.95rem" }}>{acceptedAnswer.text}</p>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "4rem", padding: "3rem 2rem", background: "linear-gradient(135deg, #12101f 0%, #1a1535 100%)", borderRadius: "16px", border: "1px solid #6aaa6444" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: "700", color: "#f5f0e8", marginBottom: "1rem" }}>
            A Companion That Learns You
          </h2>
          <p style={{ color: "#a09880", marginBottom: "2rem", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto 2rem" }}>
            Free to start. No payment card. Explain your situation once — your companion remembers.
          </p>
          <Link href="/birth" style={{ display: "inline-block", background: "#c9a84c", color: "#0d0c18", padding: "1rem 2.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "1rem" }}>
            Begin Your Birth Ceremony →
          </Link>
        </div>

      </article>
    </main>
  );
}
