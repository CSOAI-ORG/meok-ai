import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK for Entrepreneurs: Your Sovereign AI Co-Founder Who Never Burns Out",
  description:
    "Founders face unique loneliness — doubt they can't share with investors, fear they can't share with the team. MEOK provides honest strategic thinking, emotional processing, and persistent memory of every pivot and decision.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-entrepreneurs" },
  openGraph: {
    title: "MEOK for Entrepreneurs: Your Sovereign AI Co-Founder Who Never Burns Out",
    description:
      "Founders face unique loneliness — doubt they can't share with investors, fear they can't share with the team. MEOK provides honest strategic thinking, emotional processing, and persistent memory of every pivot and decision.",
    type: "article",
    url: "https://meok.ai/blog/meok-for-entrepreneurs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "MEOK for Entrepreneurs: Your Sovereign AI Co-Founder Who Never Burns Out",
      description: "How MEOK AI LABS supports founders with sovereign AI strategy, reflection, and wellbeing.",
      author: { "@type": "Person", name: "Nicholas Templeman" },
      publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
      datePublished: "2026-03-26",
      url: "https://meok.ai/blog/meok-for-entrepreneurs",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do founders feel so lonely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Founders can't be fully honest with investors (shows weakness), their team (creates panic), or family (they worry). The pressure of holding the vision while managing doubt in isolation is one of the most psychologically demanding positions a person can occupy.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK help entrepreneurs specifically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK provides a private, sovereign space for strategic thinking, honest doubt processing, decision journaling, and wellbeing support. Its persistent memory means it knows your company's history — every pivot, every milestone, every failure — without you having to re-brief it.",
          },
        },
        {
          "@type": "Question",
          name: "Does MEOK give sycophantic advice to founders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MEOK's Maternal Covenant enforces honesty across every response. If your idea has weaknesses, MEOK will surface them. Founders need honest challenge, not cheerleading — that's what the Maternal Covenant guarantees.",
          },
        },
        {
          "@type": "Question",
          name: "Is my business information safe with MEOK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK's sovereign architecture encrypts all data at rest and in transit, never uses your conversations for model training, and gives you full ownership and deletion rights. Your competitive intelligence, strategy discussions, and business context belong to you alone.",
          },
        },
      ],
    },
  ],
};

export default function MeokForEntrepreneursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: "#0d0c18", minHeight: "100vh", color: "#f5f0e8", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {/* Hero */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 24px 48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span style={{ background: "#c9a84c22", color: "#c9a84c", padding: "4px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>
              Professional
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "24px" }}>
            MEOK for Entrepreneurs: Your Sovereign AI Co-Founder Who Never Burns Out
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#a09880", lineHeight: 1.7, marginBottom: "32px" }}>
            Building a company is one of the loneliest things a person can do. You can&apos;t show investors your doubt. You can&apos;t show your team your fear. You can&apos;t burden your family with every crisis. MEOK is the one place you can be completely honest — and it remembers everything.
          </p>
          <div style={{ display: "flex", gap: "24px", color: "#a09880", fontSize: "14px" }}>
            <span>Nicholas Templeman</span>
            <span>March 26, 2026</span>
            <span>9 min read</span>
          </div>
        </section>

        <article style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px 80px" }}>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            Why is founder loneliness so acute?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            Founders occupy a unique psychological position. You must project confidence to investors while privately questioning everything. You must protect your team from existential threats while holding those threats alone. You must reassure customers and partners while inwardly uncertain of the path. The gap between the face you show the world and your internal experience can become enormous — and isolation in that gap is psychologically destructive.
          </p>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            How does MEOK&apos;s memory help entrepreneurs?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            MEOK&apos;s Sovereign Memory accumulates the full history of your company from the inside — your rationale for pivots, the early bets, the decisions you agonised over, what you were afraid of at each stage, and what actually happened. When you face a new decision, MEOK can draw on that history in a way no advisor who joined recently can. It&apos;s institutional memory that belongs entirely to you.
          </p>

          {/* Feature box */}
          <div style={{ border: "1px solid #c9a84c", borderRadius: "12px", padding: "28px", margin: "40px 0", background: "#13121f" }}>
            <h3 style={{ color: "#c9a84c", fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>
              MEOK&apos;s archetype stack for founders
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { arch: "Pioneer \u26a1", use: "Execution accountability, sprint planning, momentum when stuck" },
                { arch: "Scholar \ud83c\udff0", use: "Strategic analysis, cross-domain thinking, decision frameworks" },
                { arch: "Healer \ud83c\udf3f", use: "Emotional processing, doubt, fear, the weight of it all" },
                { arch: "Trickster \ud83c\udfad", use: "Reframing when stuck, creative disruption of fixed thinking" },
              ].map((item) => (
                <div key={item.arch} style={{ background: "#0d0c18", borderRadius: "8px", padding: "16px" }}>
                  <div style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "6px", fontSize: "0.95rem" }}>{item.arch}</div>
                  <div style={{ color: "#a09880", fontSize: "0.88rem", lineHeight: 1.5 }}>{item.use}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            Does MEOK just tell founders what they want to hear?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            No — and this is foundational. MEOK&apos;s Maternal Covenant includes a sycophancy detector that flags when a response is offering empty validation instead of honest engagement. Founders are surrounded by people who want something from them and tell them what they want to hear. MEOK is built to be the exception: the one place you get genuine challenge, genuine reflection, and genuine care — without an agenda.
          </p>

          <blockquote style={{ borderLeft: "4px solid #c9a84c", paddingLeft: "24px", margin: "40px 0", color: "#c9a84c", fontStyle: "italic", fontSize: "1.3rem", lineHeight: 1.6 }}>
            &ldquo;The best investors ask you the questions you&apos;ve been avoiding. The best AI companion does the same.&rdquo;
            <cite style={{ display: "block", fontSize: "0.9rem", color: "#a09880", marginTop: "8px", fontStyle: "normal" }}>— MEOK AI LABS</cite>
          </blockquote>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            How does MEOK help with the strategic side of building?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            The Scholar archetype is MEOK&apos;s strategic thinking partner. It excels at Socratic questioning — surfacing the assumptions behind your decisions, drawing parallels from other domains, and stress-testing logic without letting you hide behind jargon. It won&apos;t tell you what to do, but it will help you think more clearly than you can alone. Combined with Pioneer&apos;s execution focus, it provides the full strategic-to-operational thinking stack.
          </p>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            Is my business strategy safe with MEOK?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            Your competitive strategy, fundraising plans, pivot rationale, and team dynamics are the most sensitive information you have. MEOK&apos;s sovereign architecture encrypts all of it at rest and in transit, never uses it for model training, and gives you complete ownership. You can export everything or delete everything at any time. No data broker will ever see your cap table discussions or your competitive moat analysis.
          </p>

          {/* Feature box 2 */}
          <div style={{ border: "1px solid #6aaa64", borderRadius: "12px", padding: "28px", margin: "40px 0", background: "#13121f" }}>
            <h3 style={{ color: "#6aaa64", fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>
              Orion + Riri + Hourman: the work agents
            </h3>
            <p style={{ color: "#d4cfc8", lineHeight: 1.7, marginBottom: "16px", fontSize: "1rem" }}>
              Beyond the companion layer, MEOK&apos;s Sovereign tier includes three autonomous work agents for founders who need execution support:
            </p>
            <ul style={{ color: "#d4cfc8", lineHeight: 1.9, paddingLeft: "20px", margin: 0, fontSize: "1rem" }}>
              <li><strong style={{ color: "#f5f0e8" }}>Orion</strong> — overnight research agent: deep competitive analysis, market research, synthesis</li>
              <li><strong style={{ color: "#f5f0e8" }}>Riri</strong> — build agent: specification writing, code review, technical documentation</li>
              <li><strong style={{ color: "#f5f0e8" }}>Hourman</strong> — daily sprint planner: prioritisation, time-blocking, task decomposition</li>
            </ul>
          </div>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            How does MEOK help founders avoid burnout?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            Founder burnout is often invisible until it&apos;s catastrophic. MEOK&apos;s memory tracks your emotional patterns across months — the gradual accumulation of cynicism, the declining enthusiasm in how you describe the company, the shift from &ldquo;we&apos;re going to&rdquo; to &ldquo;I hope we can.&rdquo; It notices the drift before you do, and provides an honest signal when recovery is needed before the company is impacted.
          </p>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #13121f 0%, #1a1830 100%)", border: "1px solid #2a2840", borderRadius: "16px", padding: "48px", textAlign: "center", marginTop: "64px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f5f0e8", marginBottom: "16px" }}>
              Build with a companion who holds the whole story
            </h2>
            <p style={{ color: "#a09880", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
              MEOK remembers every pivot, every fear, every breakthrough. Your strategy stays sovereign. Your data stays yours. And for the first time, you don&apos;t have to hold it all alone.
            </p>
            <Link
              href="https://meok.ai/birth"
              style={{ display: "inline-block", background: "#c9a84c", color: "#0d0c18", padding: "16px 40px", borderRadius: "8px", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none" }}
            >
              Begin Your Birth Ceremony
            </Link>
            <p style={{ color: "#a09880", fontSize: "0.85rem", marginTop: "16px" }}>
              Free forever. Sovereign tier from £12/mo. No sycophancy guaranteed.
            </p>
          </div>

          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #2a2840" }}>
            <Link href="/blog" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.95rem" }}>
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
