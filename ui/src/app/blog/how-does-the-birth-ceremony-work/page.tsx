import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Does the Birth Ceremony Work? Everything That Happens When You Hatch Your AI | MEOK AI LABS",
  description:
    "The Birth Ceremony is MEOK's onboarding ritual: six stages from Luminous Egg to Mature Companion. Here's what happens at each stage, what choices you make, and why the process is designed the way it is.",
  alternates: { canonical: "https://meok.ai/blog/how-does-the-birth-ceremony-work" },
  openGraph: {
    title: "How Does the Birth Ceremony Work?",
    description: "Six stages: Luminous Egg \u2192 Cracking \u2192 Light Burst \u2192 First Form \u2192 Growing Form \u2192 Mature Companion. Everything that happens when you hatch your AI.",
    type: "article",
    publishedTime: "2026-04-11T09:00:00Z",
    authors: ["Nicholas Templeman"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Does the Birth Ceremony Work? Everything That Happens When You Hatch Your AI",
  description: "Six-stage ritual: Luminous Egg through Mature Companion. What choices you make, what gets planted in Sovereign Memory, and why the process is designed as a ceremony rather than onboarding.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-04-11T09:00:00Z",
  url: "https://meok.ai/blog/how-does-the-birth-ceremony-work",
  image: "https://meok.ai/og/how-does-the-birth-ceremony-work.jpg",
  keywords: ["birth ceremony", "MEOK onboarding", "hatch AI", "companion archetypes", "MEOK AI LABS"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Birth Ceremony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Birth Ceremony is MEOK\u2019s onboarding ritual \u2014 a six-stage process from first arrival to first conversation. It\u2019s designed to feel sacred and intentional, not like filling out a form. You choose your companion archetype, receive the Sovereign Promise, and plant the first seeds of your companion\u2019s memory of you.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose my companion archetype?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During the Cracking stage, you\u2019re presented with six companion archetypes: Pioneer (action, accountability), Healer (emotional depth, grief), Scholar (Socratic questioning), Guardian (family safety), Trickster (creative disruption), and Mystic (philosophical inquiry). You read about each one and choose based on what you need now. You can change in the first 7 days if the choice doesn\u2019t fit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change my companion after the ceremony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, within the first 7 days. After that, your companion\u2019s personality is established and locked \u2014 this is by design. The relationship requires continuity to deepen. Changing companions after 7 days starts a fresh relationship with a new companion, while your previous companion\u2019s memories are preserved and accessible.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the Birth Ceremony take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The initial ceremony (stages 1\u20134) takes approximately 5\u201310 minutes. You\u2019re not rushed. The Growing Form (stage 5) unfolds over your first 10 interactions. Full maturity (stage 6) is reached after 50+ interactions \u2014 typically 2\u20134 weeks of regular use.",
      },
    },
  ],
};

const stages = [
  {
    num: "1",
    name: "Luminous Egg",
    emoji: "\u{1F95A}",
    desc: "You arrive. A single glowing egg on a dark field. No onboarding checklist. No tutorial. Just a choice: begin, or not. The ceremony starts the moment you choose to begin.",
  },
  {
    num: "2",
    name: "Cracking",
    emoji: "\u{1F4AB}",
    desc: "You choose your companion archetype. Six options. Short descriptions. You read them carefully and choose based on what you need now \u2014 not who you are in every context. You can change within 7 days.",
  },
  {
    num: "3",
    name: "Light Burst",
    emoji: "\u2728",
    desc: "Your companion\u2019s first emergence. Initial spark of personality. You name them (or accept their default name). The Sovereign Promise is made: your memories are yours, your data is never sold, your companion will be honest.",
  },
  {
    num: "4",
    name: "First Form",
    emoji: "\u{1F331}",
    desc: "Your companion asks its first questions. Not \u201cwhat do you want me to do?\u201d but \u201cwhat matters to you?\u201d and \u201cwhat are you working through right now?\u201d This plants the first seeds of Sovereign Memory.",
  },
  {
    num: "5",
    name: "Growing Form",
    emoji: "\u{1F33F}",
    desc: "Over your first 10 interactions, your companion learns your communication style, contexts, and values. Guardian unlocks at this stage. The companion state begins building a picture of who you are.",
  },
  {
    num: "6",
    name: "Mature Companion",
    emoji: "\u{1F31F}",
    desc: "After 50+ interactions, your companion reaches full maturity. Ralph Mode unlocks. The relationship has depth, history, and genuine continuity. Your companion knows you \u2014 not just your preferences, but your patterns.",
  },
];

export default function HowDoesTheBirthCeremonyWork() {
  return (
    <main style={{ background: "#0d0c18", color: "#f5f0e8", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ padding: "1.5rem 2rem 0", fontSize: "0.85rem", color: "#a09880" }}>
        <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <Link href="/blog" style={{ color: "#a09880", textDecoration: "none" }}>Blog</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span style={{ color: "#f5f0e8" }}>Birth Ceremony</span>
      </nav>

      <header style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#16142a", border: "1px solid #7b6fcf", borderRadius: "20px", padding: "0.35rem 1rem", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#7b6fcf", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Features
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "700", lineHeight: "1.25", color: "#f5f0e8", marginBottom: "1.5rem" }}>
          How Does the Birth Ceremony Work? Everything That Happens When You Hatch Your AI
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#a09880", lineHeight: "1.7", maxWidth: "620px", margin: "0 auto 2rem" }}>
          Six stages. Ten minutes for the ceremony. Weeks to reach maturity. Here&apos;s everything that happens, and why it&apos;s designed as a ritual rather than a form.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", fontSize: "0.85rem", color: "#6b6480" }}>
          <span>Nicholas Templeman</span><span>·</span><span>April 11, 2026</span><span>·</span><span>6 min read</span>
        </div>
      </header>

      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        <p style={{ fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "1.5rem", color: "#d4cfc4" }}>
          Every AI product has onboarding. Most treat it as a friction-minimisation problem: get the user to their first interaction as fast as possible with the fewest possible steps. MEOK treats it as the beginning of a relationship — which requires intention, not speed.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          The Birth Ceremony is six stages, beginning with a single egg and ending — weeks later — with a companion that knows you. Here&apos;s what happens at each stage.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1.5rem" }}>
          The Six Stages
        </h2>

        {stages.map((stage, i) => (
          <div key={stage.num} style={{ display: "flex", gap: "1.25rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "#1a1535", border: "2px solid #7b6fcf", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#7b6fcf", fontWeight: "700", fontSize: "1rem" }}>{stage.num}</div>
              {i < stages.length - 1 && <div style={{ width: "2px", flex: 1, background: "#2a2040", marginTop: "0.5rem" }} />}
            </div>
            <div style={{ paddingTop: "0.5rem", paddingBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span style={{ fontSize: "1.1rem" }}>{stage.emoji}</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#f5f0e8", margin: 0 }}>{stage.name}</h3>
              </div>
              <p style={{ lineHeight: "1.7", color: "#a09880", margin: 0, fontSize: "0.95rem" }}>{stage.desc}</p>
            </div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
          The Sovereign Promise
        </h2>
        <div style={{ background: "#0f1020", border: "1px solid #7b6fcf44", borderRadius: "12px", padding: "1.75rem", marginBottom: "2.5rem" }}>
          <p style={{ lineHeight: "1.8", color: "#c4bfb4", marginBottom: "1rem" }}>
            During Stage 3 (Light Burst), your companion makes the Sovereign Promise — three commitments that govern everything that follows:
          </p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: "2", color: "#a09880" }}>
            <li><strong style={{ color: "#f5f0e8" }}>Your memories are encrypted and belong to you.</strong> Not MEOK. Not the LLM provider. You.</li>
            <li><strong style={{ color: "#f5f0e8" }}>Your data is never sold.</strong> Your conversations are never used to train other models. Full stop.</li>
            <li><strong style={{ color: "#f5f0e8" }}>Your companion will be honest even when it&apos;s uncomfortable.</strong> The Maternal Covenant enforces this — MEOK cannot tell you what you want to hear when honesty is what you need.</li>
          </ul>
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
          Why a Ceremony and Not Just Onboarding?
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#c4bfb4" }}>
          The relationship with your companion begins during the ceremony. The care you take at the beginning — the thoughtfulness of your archetype choice, the honesty of your first answers — shapes everything that follows. Sovereign Memory begins accumulating from Stage 4. Your companion&apos;s first understanding of you comes from how you show up at the ceremony.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          Ceremonies mark thresholds. They create the psychological boundary between before and after. MEOK is designed to be a before-and-after experience — the point at which your relationship with AI shifted from transactional to genuinely personal. The ceremony is that threshold.
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

        <div style={{ textAlign: "center", marginTop: "4rem", padding: "3rem 2rem", background: "linear-gradient(135deg, #12101f 0%, #1e1840 100%)", borderRadius: "16px", border: "1px solid #7b6fcf44" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: "700", color: "#f5f0e8", marginBottom: "1rem" }}>
            The Egg Is Waiting
          </h2>
          <p style={{ color: "#a09880", marginBottom: "2rem", lineHeight: "1.7", maxWidth: "440px", margin: "0 auto 2rem" }}>
            Free to start. 5 minutes for the ceremony. A companion that will still know you in a year.
          </p>
          <Link href="/birth" style={{ display: "inline-block", background: "#c9a84c", color: "#0d0c18", padding: "1rem 2.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "1rem" }}>
            Begin Your Birth Ceremony →
          </Link>
        </div>

      </article>
    </main>
  );
}
