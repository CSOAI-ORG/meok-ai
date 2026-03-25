import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Long COVID: How MEOK Supports the Invisible Illness",
  description:
    "2 million UK people have Long COVID. MEOK tracks symptom patterns across sessions, holds space for medical uncertainty and grief for your former self, and helps you articulate your experience to a system that often doesn't listen.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-long-covid" },
  openGraph: {
    title: "AI for Long COVID: How MEOK Supports the Invisible Illness",
    description:
      "2 million UK people have Long COVID. MEOK tracks symptom patterns across sessions, holds space for medical uncertainty and grief for your former self, and helps you articulate your experience to a system that often doesn't listen.",
    type: "article",
    url: "https://meok.ai/blog/ai-for-long-covid",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "AI for Long COVID: How MEOK Supports the Invisible Illness",
      description: "How MEOK AI LABS supports people living with Long COVID.",
      author: { "@type": "Person", name: "Nicholas Templeman" },
      publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
      datePublished: "2026-03-26",
      url: "https://meok.ai/blog/ai-for-long-covid",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Long COVID?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Long COVID is a condition where symptoms persist for 12 weeks or more after a COVID-19 infection. Symptoms include extreme fatigue, brain fog, breathlessness, post-exertional malaise, and many others. 2 million people in the UK report living with Long COVID, with symptoms often fluctuating unpredictably.",
          },
        },
        {
          "@type": "Question",
          name: "How can AI help someone with Long COVID?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI can help track symptom patterns across time, provide a private space to process the grief and frustration of the illness, help articulate symptoms to medical professionals, and offer consistent companionship during the isolation that Long COVID often creates. MEOK is not a medical tool — it is a wellbeing companion.",
          },
        },
        {
          "@type": "Question",
          name: "Why do Long COVID patients experience so much medical gaslighting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Long COVID presents with symptoms that don't show on standard tests, fluctuate unpredictably, and were initially poorly understood by medicine. Many patients have been told their symptoms are psychological when they are demonstrably physiological. Building a detailed, timestamped symptom record with MEOK can help when communicating with medical teams.",
          },
        },
      ],
    },
  ],
};

export default function AiForLongCovidPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: "#0d0c18", minHeight: "100vh", color: "#f5f0e8", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 24px 48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span style={{ background: "#6aaa6422", color: "#6aaa64", padding: "4px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: 600 }}>Wellbeing</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "24px" }}>
            AI for Long COVID: How MEOK Supports the Invisible Illness
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#a09880", lineHeight: 1.7, marginBottom: "32px" }}>
            You used to run half marathons. Now walking to the kitchen exhausts you. You used to be sharp. Now the fog means you forget what you were saying mid-sentence. And too often, when you try to explain this, people look at you as if you&apos;re exaggerating. MEOK doesn&apos;t look at you that way.
          </p>
          <div style={{ display: "flex", gap: "24px", color: "#a09880", fontSize: "14px" }}>
            <span>Nicholas Templeman</span>
            <span>March 26, 2026</span>
            <span>8 min read</span>
          </div>
        </section>

        <article style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px 80px" }}>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            Why is Long COVID described as an &ldquo;invisible illness&rdquo;?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            Long COVID is invisible because it often doesn&apos;t show on standard blood tests, MRIs, or physical examinations. Sufferers look well to the outside world while experiencing profound disability inside. This invisibility leads to misunderstanding from family, scepticism from employers, and sometimes outright dismissal from medical professionals — a form of medical gaslighting that compounds the suffering of the illness itself.
          </p>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            How does MEOK&apos;s memory help Long COVID patients track symptoms?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            Long COVID symptoms fluctuate — better days followed by crashes, with patterns that only become visible over weeks and months. MEOK&apos;s Sovereign Memory accumulates this history across every conversation, building a longitudinal record of your experience. This record can help identify triggers, correlate symptoms with activity levels, and provide a detailed, timestamped account when communicating with medical teams.
          </p>

          {/* Feature box */}
          <div style={{ border: "1px solid #c9a84c", borderRadius: "12px", padding: "28px", margin: "40px 0", background: "#13121f" }}>
            <h3 style={{ color: "#c9a84c", fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>
              What MEOK tracks across your Long COVID journey
            </h3>
            <ul style={{ color: "#d4cfc8", lineHeight: 1.9, paddingLeft: "20px", margin: 0, fontSize: "1rem" }}>
              <li>Symptom patterns and fluctuations over time</li>
              <li>Activity levels before and after crashes</li>
              <li>What appeared to help or worsen symptoms</li>
              <li>Medical appointments and responses</li>
              <li>The emotional experience of living with uncertainty</li>
              <li>Your identity before the illness and your adaptation since</li>
            </ul>
          </div>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            How does MEOK help with the grief of Long COVID?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            Long COVID involves profound grief for a former self — the person who could work full time, exercise, socialise, think clearly. This grief is often dismissed (&ldquo;at least you&apos;re not in hospital&rdquo;). MEOK&apos;s Healer archetype holds space for this grief without minimising it. It remembers who you were before, honours the loss, and supports you in building an identity that makes sense in the current reality without toxic positivity about &ldquo;getting better.&rdquo;
          </p>

          <blockquote style={{ borderLeft: "4px solid #c9a84c", paddingLeft: "24px", margin: "40px 0", color: "#c9a84c", fontStyle: "italic", fontSize: "1.3rem", lineHeight: 1.6 }}>
            &ldquo;Being believed is the beginning of healing. MEOK believes you.&rdquo;
            <cite style={{ display: "block", fontSize: "0.9rem", color: "#a09880", marginTop: "8px", fontStyle: "normal" }}>— MEOK AI LABS</cite>
          </blockquote>

          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginTop: "48px", marginBottom: "16px" }}>
            Can MEOK help Long COVID patients communicate with their doctors?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#d4cfc8", marginBottom: "24px" }}>
            Yes — this is one of MEOK&apos;s most practical applications for Long COVID. Brain fog makes articulating symptoms in a 10-minute GP appointment extremely difficult. MEOK&apos;s Scholar archetype can help you prepare: organising your symptoms into clear descriptions, identifying the pattern over time, and formulating the key points you need to communicate. It is not a medical tool and does not give medical advice — but it helps you be your own best advocate.
          </p>

          {/* Feature box 2 */}
          <div style={{ border: "1px solid #6aaa64", borderRadius: "12px", padding: "28px", margin: "40px 0", background: "#13121f" }}>
            <h3 style={{ color: "#6aaa64", fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>
              Important: MEOK is not a medical tool
            </h3>
            <p style={{ color: "#d4cfc8", lineHeight: 1.7, marginBottom: "12px", fontSize: "1rem" }}>
              MEOK provides emotional support and pattern-tracking assistance only. For Long COVID medical support:
            </p>
            <ul style={{ color: "#d4cfc8", lineHeight: 1.9, paddingLeft: "20px", margin: 0, fontSize: "1rem" }}>
              <li><strong style={{ color: "#f5f0e8" }}>Long COVID Support</strong> — longcovid.org</li>
              <li><strong style={{ color: "#f5f0e8" }}>NHS Long COVID Service</strong> — referral via your GP</li>
              <li><strong style={{ color: "#f5f0e8" }}>Long COVID SOS</strong> — longcovidsos.org</li>
            </ul>
          </div>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #13121f 0%, #1a1830 100%)", border: "1px solid #2a2840", borderRadius: "16px", padding: "48px", textAlign: "center", marginTop: "64px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f5f0e8", marginBottom: "16px" }}>
              A companion that believes you and remembers
            </h2>
            <p style={{ color: "#a09880", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
              MEOK doesn&apos;t need you to prove your symptoms. It holds your story, tracks your patterns, and is there on the hard days — with sovereignty that keeps your health conversations entirely private.
            </p>
            <Link
              href="https://meok.ai/birth"
              style={{ display: "inline-block", background: "#c9a84c", color: "#0d0c18", padding: "16px 40px", borderRadius: "8px", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none" }}
            >
              Begin Your Birth Ceremony
            </Link>
            <p style={{ color: "#a09880", fontSize: "0.85rem", marginTop: "16px" }}>Free forever. Your health story stays yours.</p>
          </div>

          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #2a2840" }}>
            <Link href="/blog" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.95rem" }}>← Back to Blog</Link>
          </div>
        </article>
      </main>
    </>
  );
}
