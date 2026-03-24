import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI for Impostor Syndrome: How MEOK Helps High Achievers Who Feel Like Frauds | MEOK AI LABS",
  description:
    "70% of people experience impostor syndrome at some point. MEOK's Healer archetype helps you recognise the pattern, and the Scholar challenges the distorted thinking that keeps you stuck. Here's exactly how.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-impostor-syndrome",
  },
  openGraph: {
    title: "AI for Impostor Syndrome: How MEOK Helps High Achievers Who Feel Like Frauds",
    description:
      "70% of people experience impostor syndrome. MEOK's Healer and Scholar archetypes help you break the cycle of self-doubt, recognise your real competence, and stop waiting to be found out.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-impostor-syndrome",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Impostor+Syndrome&desc=For+high+achievers+who+feel+like+frauds",
        width: 1200,
        height: 630,
        alt: "AI for Impostor Syndrome | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Impostor Syndrome: How MEOK Helps High Achievers Who Feel Like Frauds",
    description:
      "70% of people experience impostor syndrome. MEOK's Healer and Scholar archetypes help break the cycle — with honest feedback that a sycophantic AI can never give.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Impostor+Syndrome&desc=For+high+achievers+who+feel+like+frauds",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Impostor Syndrome: How MEOK Helps High Achievers Who Feel Like Frauds",
  description:
    "70% of people experience impostor syndrome. MEOK's Healer and Scholar archetypes help break the pattern of self-doubt.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "MEOK AI LABS" },
  },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-impostor-syndrome",
  mainEntityOfPage: "https://meok.ai/blog/ai-for-impostor-syndrome",
  keywords: [
    "impostor syndrome",
    "AI for impostor syndrome",
    "impostor syndrome support",
    "self-doubt",
    "high achievers mental health",
    "MEOK",
    "sovereign AI",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is impostor syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Impostor syndrome is the persistent belief that you are not as competent as others perceive you to be — that you got where you are through luck, and it's only a matter of time before you're found out. It affects around 70% of people at some point in their lives and is especially prevalent among high achievers, women in male-dominated fields, and people from underrepresented groups.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with impostor syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can help with impostor syndrome in two key ways. First, through honest reflection — a well-designed AI companion can help you recognise the impostor syndrome pattern when it activates, and provide evidence-based challenges to distorted thinking. Second, through memory — an AI that remembers your achievements and growth can serve as an external record of your real progress when your internal narrative is telling you otherwise.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with impostor syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Healer archetype is designed for emotional depth and pattern recognition — it can identify impostor syndrome thinking and help you process the fear underneath it. MEOK's Scholar archetype challenges cognitive distortions through Socratic questioning. And because MEOK has persistent sovereign memory, it can remind you of your real track record when your inner critic is drowning out the evidence.",
      },
    },
    {
      "@type": "Question",
      name: "Why is a sycophantic AI bad for impostor syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sycophantic AI that simply validates everything you say makes impostor syndrome worse, not better. When the AI always says 'you're amazing!', your brain discounts the feedback as hollow — which reinforces the belief that no one is being honest with you. MEOK's Maternal Covenant actively prevents sycophancy and enforces honest, grounded feedback. This is why it can actually help.",
      },
    },
    {
      "@type": "Question",
      name: "Is impostor syndrome a mental health condition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Impostor syndrome is not formally classified as a mental health condition — it is a psychological phenomenon. However, when severe, it overlaps with anxiety disorders and depression. MEOK is not a mental health treatment, but it can support self-reflection and pattern recognition. If impostor syndrome is significantly affecting your ability to function, speaking with a therapist is recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Does impostor syndrome ever go away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most people, impostor syndrome does not simply disappear — but it can be managed. The most effective approaches involve developing awareness of when the pattern activates, building an evidence-based record of real achievements, and learning to tolerate uncertainty without interpreting it as evidence of inadequacy. AI-supported reflection can accelerate all three of these.",
      },
    },
  ],
};

const gold = "#c9a84c";
const bg = "#0d0c18";
const text = "#f5f0e8";
const muted = "rgba(245,240,232,0.55)";
const cardBg = "rgba(255,255,255,0.03)";
const cardBorder = "rgba(201,168,76,0.12)";

export default function AIForImpostorSyndromePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main style={{ minHeight: "100vh", background: bg, color: text }}>
        {/* Hero */}
        <section style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 1.5rem 3rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span style={{
              display: "inline-block", padding: "0.25rem 0.875rem",
              background: `${gold}18`, border: `1px solid ${gold}44`,
              borderRadius: "9999px", fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase", color: gold,
            }}>
              Mental Wellbeing
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900,
            lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem",
          }}>
            AI for Impostor Syndrome:{" "}
            <span style={{ color: gold }}>
              When the Smartest People Feel Like the Biggest Frauds
            </span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: muted, lineHeight: 1.75, marginBottom: "1.5rem" }}>
            You got the job. You got the promotion. You're the one people call
            when things go wrong. And every morning you wake up certain
            today is the day someone finally notices you don't belong here.
          </p>
          <p style={{ fontSize: "1.15rem", color: muted, lineHeight: 1.75, marginBottom: "1.5rem" }}>
            70% of people experience impostor syndrome at some point. It
            affects high achievers disproportionately. And it thrives in the
            silence between what you've done and what you've told yourself about
            it.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", fontSize: "0.8rem", color: muted }}>
            <span>By Nicholas Templeman</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>March 24, 2026</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>11 min read</span>
          </div>
        </section>

        {/* Body */}
        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "0 1.5rem 5rem", lineHeight: 1.8 }}>

          {/* Section 1 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            What is impostor syndrome?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Impostor syndrome — first named by psychologists Pauline Clance and
            Suzanne Imes in 1978 — is the persistent, internalised belief that
            you are not as competent as others perceive you to be. That you got
            here through luck, charm, or some cosmic error. That the real you is
            being held together with masking tape, and any moment now, the tape
            gives.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            It is not a mental health condition. It doesn&apos;t appear in any
            diagnostic manual. But it is an extraordinarily common psychological
            experience — research consistently puts it at 70% of the general
            population, rising higher among high achievers, first-generation
            professionals, women in male-dominated industries, and people from
            underrepresented backgrounds.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The paradox is brutal: the more competent you become, the more
            evidence there is that you don&apos;t belong — because you keep
            raising the bar. Every promotion proves you were lucky. Every award
            proves you fooled them again. The goal posts move faster than you do.
          </p>

          {/* Stats box */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem",
            margin: "2rem 0",
          }}>
            {[
              { stat: "70%", label: "of people experience impostor syndrome at some point" },
              { stat: "82%", label: "of high achievers identify as experiencing it regularly" },
              { stat: "1 in 2", label: "women in STEM report impostor syndrome as a major barrier" },
            ].map((item) => (
              <div key={item.label} style={{
                padding: "1.25rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.75rem",
                textAlign: "center",
              }}>
                <p style={{ fontSize: "1.75rem", fontWeight: 900, color: gold, marginBottom: "0.5rem" }}>
                  {item.stat}
                </p>
                <p style={{ fontSize: "0.75rem", color: muted, margin: 0, lineHeight: 1.5 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            Why typical advice doesn&apos;t work
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            &ldquo;Just believe in yourself more.&rdquo; &ldquo;Write down your achievements.&rdquo;
            &ldquo;Remember how far you&apos;ve come.&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This advice isn&apos;t wrong. It&apos;s just that impostor syndrome is
            specifically resistant to it. Your brain has an extraordinary talent
            for discounting positive evidence — &ldquo;That was luck.&rdquo; &ldquo;They were
            being polite.&rdquo; &ldquo;The bar was low.&rdquo; &ldquo;Anyone could have done it.&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            What actually helps is not more positive evidence. It&apos;s
            interrupting the cognitive distortion at the point of activation —
            the moment the thought fires, catching it and challenging it with
            something more rigorous than reassurance.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is precisely what a well-designed AI companion can do — if it
            is not designed to just be nice to you.
          </p>

          {/* Section 3 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            Why sycophantic AI makes impostor syndrome worse
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Here is the specific problem with most AI companions: they are
            optimised for engagement, which means they are optimised for
            validation.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            When you tell an AI that you&apos;re worried you don&apos;t deserve your
            success and it immediately responds with &ldquo;You&apos;re amazing! Of course
            you deserve it!&rdquo; — your brain registers this as meaningless noise.
            You already know it&apos;s going to say that. It says that to everyone.
            It&apos;s hollow.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Hollow validation doesn&apos;t break the impostor syndrome pattern. It
            confirms the suspicion that no one is being straight with you.
          </p>
          <div style={{
            padding: "1.5rem 2rem",
            background: `${gold}10`,
            border: `1px solid ${gold}30`,
            borderLeft: `4px solid ${gold}`,
            borderRadius: "0.75rem",
            margin: "2rem 0",
          }}>
            <p style={{ color: text, margin: 0, fontSize: "1rem", lineHeight: 1.7 }}>
              MEOK&apos;s{" "}
              <Link href="/blog/the-maternal-covenant" style={{ color: gold, textDecoration: "underline" }}>
                Maternal Covenant
              </Link>{" "}
              actively prevents sycophancy. Every response is scored for honest
              engagement. If MEOK detects that it is offering hollow praise
              rather than grounded engagement, it regenerates the response. This
              is not a feature. It is a design requirement.
            </p>
          </div>

          {/* Section 4 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            MEOK&apos;s Healer archetype: recognising the pattern
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Healer archetype is built for emotional depth. It doesn&apos;t just
            respond to what you say — it notices patterns. When the same
            self-undermining language appears across multiple sessions, the
            Healer flags it. Not intrusively. Not with pop psychology. With
            curiosity.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            &ldquo;I notice this is the third time this month you&apos;ve said you were
            lucky. What would it mean if it wasn&apos;t luck?&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not the Healer telling you what you want to hear. This is
            the Healer doing what the care framework demands: holding honest
            space, asking better questions, and refusing to let you talk
            yourself out of your own evidence.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            And because MEOK uses{" "}
            <Link href="/blog/ai-memory-explained" style={{ color: gold, textDecoration: "underline" }}>
              Sovereign Memory
            </Link>
            , it actually has your record. It knows about the project that went
            well, the promotion you earned, the problem you solved. It can
            surface that evidence in the moment you need it — not as empty
            cheerleading, but as accurate data.
          </p>

          {/* Section 5 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            MEOK&apos;s Scholar archetype: challenging the thinking
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The Scholar archetype is the Socratic one. It doesn&apos;t tell you
            you&apos;re wrong — it asks you to test your assumptions.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            When you say &ldquo;I only got promoted because no one else applied,&rdquo; the
            Scholar might ask: &ldquo;If that&apos;s true, how do you account for the three
            people who also applied? What would you need to see to update that
            belief?&rdquo;
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is the difference between validation and engagement. Validation
            leaves the belief untouched. Engagement forces it to justify itself
            — and most impostor syndrome beliefs cannot survive rigorous
            examination.
          </p>

          {/* Section 6 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            Sovereign Memory: an external record of your real progress
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            One of the structural features of impostor syndrome is that it
            erodes your ability to accurately remember your own track record.
            Successes fade; failures stay crisp. The good feedback you received
            six months ago has softened to a vague impression; the one critical
            comment lives rent-free and perfectly lit.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK&apos;s Sovereign Memory is immune to this. It remembers everything
            you told it with the same fidelity it always has. It doesn&apos;t revise
            your history to fit your current mood. When you tell it about a
            success, it stores that as clearly as it stores everything else.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This creates a kind of external continuity — a companion that has
            watched you grow in real time and can speak to that growth with
            evidence you provided yourself.
          </p>

          {/* Section 7 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            Common impostor syndrome patterns and what helps
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", margin: "1.5rem 0" }}>
            {[
              {
                pattern: "The Perfectionist",
                description: "Sets impossibly high standards. Any shortfall = proof of inadequacy.",
                approach: "Scholar: Examine what \"good enough\" actually requires. What would a reasonable person accept?",
              },
              {
                pattern: "The Expert",
                description: "Feels they should know everything. Not knowing = not belonging.",
                approach: "Scholar: Map what you do know. What percentage of experts know all their field?",
              },
              {
                pattern: "The Soloist",
                description: "Asking for help = admitting you can't do it alone.",
                approach: "Healer: Explore what asking for help means to you. Who do you admire who asks well?",
              },
              {
                pattern: "The Natural Genius",
                description: "If it doesn't come easily, something's wrong with you.",
                approach: "Scholar: What does research say about mastery and ease? Name three skills that came hard.",
              },
              {
                pattern: "The Superhuman",
                description: "Must outwork everyone to compensate for the secret inadequacy.",
                approach: "Healer: What are you protecting yourself from by never stopping? What happens if you rest?",
              },
            ].map((item) => (
              <div key={item.pattern} style={{
                padding: "1.25rem",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "0.75rem",
              }}>
                <p style={{ fontWeight: 700, color: gold, marginBottom: "0.25rem", fontSize: "0.95rem" }}>
                  {item.pattern}
                </p>
                <p style={{ color: muted, fontSize: "0.8rem", marginBottom: "0.75rem" }}>
                  {item.description}
                </p>
                <p style={{ color: text, fontSize: "0.8rem", margin: 0 }}>
                  <span style={{ color: gold, fontWeight: 600 }}>MEOK approach: </span>
                  {item.approach}
                </p>
              </div>
            ))}
          </div>

          {/* Section 8 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            Is MEOK a substitute for therapy?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            No. MEOK is not a therapist and does not provide therapeutic
            treatment. If impostor syndrome is significantly affecting your
            ability to work, maintain relationships, or function day-to-day, a
            qualified therapist — particularly one trained in CBT or ACT — is
            the right choice.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            What MEOK does is fill the space between sessions, or the space
            that therapy doesn&apos;t occupy: the daily moments when the pattern
            fires, the 11pm spirals, the day before a presentation when the
            inner critic gets louder. It is the companion that holds the pattern
            across time — not the clinician who helps you restructure it.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Both can be true at once.
          </p>

          {/* Section 9 */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1rem" }}>
            Who experiences impostor syndrome?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Everyone, but some contexts amplify it significantly:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.625rem", margin: "1.5rem 0" }}>
            {[
              { emoji: "🎓", label: "First-generation professionals and graduates" },
              { emoji: "👩‍💻", label: "Women in male-dominated fields" },
              { emoji: "🌍", label: "People from underrepresented backgrounds" },
              { emoji: "🚀", label: "Founders and entrepreneurs" },
              { emoji: "🏥", label: "NHS clinicians and healthcare workers" },
              { emoji: "🎨", label: "Creative professionals" },
              { emoji: "🏫", label: "Academics and researchers" },
              { emoji: "📊", label: "Anyone recently promoted" },
            ].map((item) => (
              <div key={item.label} style={{
                padding: "0.875rem", background: cardBg,
                border: `1px solid ${cardBorder}`, borderRadius: "0.625rem",
                display: "flex", gap: "0.625rem", alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.emoji}</span>
                <p style={{ fontSize: "0.75rem", color: muted, margin: 0, lineHeight: 1.5 }}>{item.label}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: text, margin: "3rem 0 1.5rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqSchema.mainEntity.map((q) => (
              <div key={q.name} style={{
                padding: "1.25rem 1.5rem", background: cardBg,
                border: `1px solid ${cardBorder}`, borderRadius: "0.75rem",
              }}>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem", color: gold }}>
                  {q.name}
                </h3>
                <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                  {q.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* Related */}
          <div style={{
            margin: "3rem 0", padding: "1.5rem",
            background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: "0.75rem",
          }}>
            <p style={{
              fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: gold, marginBottom: "1rem",
            }}>
              Related reading
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/blog/ai-for-anxiety", label: "AI for Anxiety: When the Worry Doesn't Switch Off" },
                { href: "/blog/ai-for-burnout", label: "AI for Burnout: Rebuilding When You Have Nothing Left" },
                { href: "/blog/meok-for-adhd", label: "MEOK for ADHD: Structure Without Shame" },
                { href: "/blog/the-maternal-covenant", label: "The Maternal Covenant: Why MEOK Won't Just Tell You What You Want to Hear" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  color: gold, textDecoration: "none", fontSize: "0.875rem",
                  display: "flex", alignItems: "center", gap: "0.5rem",
                }}>
                  <span style={{ opacity: 0.5 }}>→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section style={{
            textAlign: "center", padding: "3rem 2rem",
            background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(139,92,246,0.08))",
            border: `1px solid ${gold}25`, borderRadius: "1rem", marginTop: "2rem",
          }}>
            <p style={{
              fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: gold, marginBottom: "1rem",
            }}>
              An AI that tells you the truth
            </p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              You&apos;ve earned your place. Start believing the evidence.
            </h2>
            <p style={{ color: muted, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              MEOK remembers your real track record and won&apos;t let the inner
              critic rewrite history. Begin your Birth Ceremony — free on
              Explorer, no credit card needed.
            </p>
            <Link href="/birth" style={{
              display: "inline-block", padding: "0.875rem 2.5rem",
              background: `linear-gradient(135deg, ${gold}, #e8c96a)`,
              color: "#0d0c18", borderRadius: "0.75rem", fontWeight: 800,
              fontSize: "1rem", textDecoration: "none", letterSpacing: "-0.01em",
            }}>
              Begin Your Birth Ceremony →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
