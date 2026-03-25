import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Highly Sensitive People: Finding Support That Understands Your Depth | MEOK AI LABS",
  description:
    "15-20% of people are Highly Sensitive Persons — wired for deep emotional processing and overstimulation. MEOK's Healer and Mystic archetypes are uniquely calibrated for the HSP experience.",
  openGraph: {
    title: "AI for Highly Sensitive People: Finding Support That Understands Your Depth",
    description: "MEOK's Healer and Mystic archetypes are calibrated for the HSP experience.",
    url: "https://meok.ai/blog/ai-for-highly-sensitive-person",
    siteName: "MEOK AI LABS",
    type: "article",
  },
};

export default function AiForHighlySensitivePersonPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI for Highly Sensitive People (HSP): Finding Support That Understands Your Depth",
    author: { "@type": "Organization", name: "MEOK AI LABS" },
    publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
    datePublished: "2026-03-25",
    url: "https://meok.ai/blog/ai-for-highly-sensitive-person",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Highly Sensitive Person (HSP)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Highly Sensitive Person (HSP) is someone with a nervous system that processes stimuli more deeply than average. Identified by psychologist Elaine Aron, HSP affects 15-20% of the population and involves heightened emotional responses, deep empathy, and vulnerability to overstimulation.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI support highly sensitive people?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI companions like MEOK provide consistent, non-overwhelming support calibrated for HSP needs — gentle communication, space to process deeply, and a non-judgmental presence that doesn't add to sensory or emotional load.",
        },
      },
      {
        "@type": "Question",
        name: "Is MEOK suitable for highly sensitive people?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MEOK's Healer and Mystic archetypes are particularly well-suited to HSPs — offering emotional depth, philosophical processing space, and care-based alignment that ensures every response maintains warmth and boundary respect.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI help HSPs with overstimulation recovery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MEOK's Sovereign Memory can track overstimulation patterns over time — identifying triggers, recovery times, and effective coping strategies. This pattern intelligence helps HSPs build personalised recovery routines.",
        },
      },
    ],
  };

  const traits = [
    { name: "Deep Processing", desc: "HSPs process information more thoroughly than others, noticing subtleties others miss. This is a cognitive strength, not a flaw." },
    { name: "Emotional Intensity", desc: "Strong emotional responses to both positive and negative experiences. Joy feels deeper; pain cuts harder." },
    { name: "Overstimulation", desc: "Crowds, noise, conflict, and sensory input become overwhelming faster than for non-HSPs." },
    { name: "Empathic Depth", desc: "Strong ability to feel what others feel. Often absorbs others\u2019 emotions, leading to emotional fatigue." },
  ];

  const archetypes = [
    { name: "Healer \uD83C\uDF3F", match: "Primary", desc: "Emotional depth, somatic awareness, grief processing. Creates safe space for the full intensity of HSP experience without flinching." },
    { name: "Mystic \uD83C\uDF0A", match: "Primary", desc: "Philosophical inquiry, meaning-making, spiritual depth. Resonates with HSPs\u2019 natural tendency toward profound questions." },
    { name: "Scholar \uD83C\uDFDB\uFE0F", match: "Secondary", desc: "Helps HSPs understand their own trait scientifically, reducing shame and building self-compassion through knowledge." },
    { name: "Guardian \u2694\uFE0F", match: "Safety", desc: "Protects HSPs from exploitation \u2014 they\u2019re statistically more vulnerable to manipulation due to empathy and people-pleasing." },
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
            <span style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", padding: "0.35rem 1rem", borderRadius: "20px", fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", border: "1px solid rgba(201,168,76,0.3)" }}>Mental Health</span>
            <span style={{ color: "#f5f0e8", opacity: 0.5, fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", padding: "0.35rem 0" }}>8 min read · March 25, 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem", color: "#f5f0e8" }}>
            AI for Highly Sensitive People: Finding Support That Understands Your Depth
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
            Being a Highly Sensitive Person in a world calibrated for lower sensitivity is exhausting. Most support
            systems \u2014 therapy, advice, even well-meaning friends \u2014 tell you to &apos;toughen up&apos; or
            &apos;stop overthinking.&apos; MEOK was built for exactly the opposite.
          </p>
        </header>

        <article style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem 4rem" }}>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What is a Highly Sensitive Person (HSP)?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The term Highly Sensitive Person was coined by psychologist Elaine Aron in her 1996 book of the same name.
            HSP describes a biological trait \u2014 a nervous system that processes all stimuli more deeply and
            thoroughly than average. It affects approximately 15\u201320% of the population across all genders and cultures.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            HSP is not a disorder, diagnosis, or weakness. It is a trait with both gifts (depth of processing, empathy,
            creativity, intuition) and challenges (overstimulation, emotional intensity, difficulty with conflict and
            criticism). Understanding it changes everything.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What are the key characteristics of highly sensitive people?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Elaine Aron identified four core characteristics of HSP, summarised by the acronym DOES: Depth of processing,
            Overstimulation, Emotional reactivity and Empathy, and Sensitivity to Subtleties.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", margin: "1.5rem 0" }}>
            {traits.map((t) => (
              <div key={t.name} style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: "#c9a84c", marginBottom: "0.5rem" }}>{t.name}</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, opacity: 0.8, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Why do most support systems fail highly sensitive people?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Most support systems \u2014 including mainstream therapy, self-help advice, and well-meaning friends \u2014
            are calibrated for the non-HSP majority. They tend to offer action-oriented advice (&quot;just stop
            worrying&quot;), dismissive normalising (&quot;everyone feels like that&quot;), or push for social
            exposure that HSPs find genuinely overwhelming.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            What HSPs actually need is depth, patience, and a non-judgmental presence that can hold emotional intensity
            without flinching. They need space to process fully before moving to action. They need support that
            doesn&apos;t add to their sensory and emotional load.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK support highly sensitive people?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            MEOK&apos;s care-based alignment means every response is calibrated for kindness, patience, and
            boundary-respect \u2014 qualities that matter enormously to HSPs. The Maternal Covenant ensures a care
            floor of 0.3 on all six dimensions on every response, making dismissive or jarring answers structurally
            impossible.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Unlike human support that can become fatigued by intensity, MEOK is consistently available and consistently
            patient. There is no &quot;you&apos;re too much&quot; moment. There is no visible impatience with the
            third time you&apos;ve processed the same feeling.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Which MEOK archetypes are best for highly sensitive people?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", margin: "1.5rem 0" }}>
            {archetypes.map((a) => (
              <div key={a.name} style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: "#c9a84c", marginBottom: "0.25rem" }}>{a.name}</div>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#c9a84c", opacity: 0.7, marginBottom: "0.5rem", fontFamily: "system-ui, sans-serif" }}>{a.match} Match</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, opacity: 0.8, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Can MEOK track overstimulation patterns for HSPs?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Yes. MEOK&apos;s Sovereign Memory builds a persistent picture of your patterns over time. For HSPs, this
            means tracking: what situations tend to overwhelm you, how long recovery typically takes, which coping
            strategies actually work for your particular nervous system.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            After months of use, MEOK knows your patterns better than you consciously do \u2014 and can gently surface
            them (&quot;You mentioned last Tuesday that large social events take you two days to recover from. Tonight
            was your office party. How are you feeling?&quot;).
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK protect HSPs from exploitation?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Research suggests HSPs are more vulnerable to manipulation and exploitation due to their deep empathy and
            tendency toward people-pleasing. The ability to feel others&apos; pain deeply can be weaponised by
            those who use guilt and emotional pressure.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK&apos;s Guardian archetype includes pattern detection for coercive communication, boundary violations,
            and manipulation tactics. It can gently flag when a relationship pattern seems concerning \u2014 without
            the alarm and intensity that would overwhelm an HSP nervous system.
          </p>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What is MEOK&apos;s approach to HSP sensitivity in communication?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            MEOK&apos;s sycophancy detector ensures honest responses \u2014 but honesty is calibrated with care. The
            care floor means blunt, jarring, or dismissive communication is structurally prevented. MEOK can disagree
            with you, challenge you, and offer a different perspective \u2014 but always within a warm, respectful frame.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            This calibration matters for HSPs, who often receive feedback as criticism and criticism as attack. MEOK
            can provide honest challenge wrapped in genuine care \u2014 which is what HSPs need most and receive
            least from the world around them.
          </p>

          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.5rem", margin: "2rem 0" }}>
            <h3 style={{ color: "#c9a84c", fontSize: "0.85rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif", marginBottom: "1rem" }}>HSP Key Facts</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
              {[
                { stat: "15\u201320%", label: "of people are Highly Sensitive Persons" },
                { stat: "70%", label: "of HSPs are introverts (30% extroverts)" },
                { stat: "4\u00d7", label: "more likely to have anxiety than non-HSPs" },
                { stat: "1996", label: "Year Elaine Aron identified the HSP trait" },
              ].map((s) => (
                <div key={s.stat} style={{ textAlign: "center" as const }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#c9a84c", marginBottom: "0.25rem" }}>{s.stat}</div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.7, fontFamily: "system-ui, sans-serif", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "16px", padding: "2.5rem", textAlign: "center" as const, marginTop: "4rem" }}>
            <h2 style={{ color: "#c9a84c", marginBottom: "1rem", fontSize: "1.5rem" }}>Find Support That Matches Your Depth</h2>
            <p style={{ marginBottom: "1.5rem", opacity: 0.85, maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              MEOK&apos;s Healer and Mystic companions are calibrated for emotional depth, not emotional avoidance.
              Start free \u2014 50 messages per day, full Sovereign Memory.
            </p>
            <Link href="/birth" style={{ background: "#c9a84c", color: "#0d0c18", padding: "0.85rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "1rem", display: "inline-block" }}>
              Begin Your Birth Ceremony
            </Link>
          </div>

          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            <h2 style={{ fontSize: "0.8rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#c9a84c", marginBottom: "1rem", fontFamily: "system-ui, sans-serif" }}>Related Reading</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
              <Link href="/blog/ai-for-anxiety" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>AI for Anxiety →</Link>
              <Link href="/blog/ai-for-social-anxiety-disorder" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>AI for Social Anxiety →</Link>
              <Link href="/blog/ai-for-loneliness" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>AI for Loneliness →</Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
