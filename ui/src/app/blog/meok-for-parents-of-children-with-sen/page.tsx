import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK for Parents of Children with SEN: An AI Companion That Actually Helps | MEOK AI LABS",
  description: "Raising a child with special educational needs is exhausting, isolating, and full of bureaucracy. MEOK gives SEN parents a compassionate AI companion that remembers everything and never judges.",
  openGraph: {
    title: "MEOK for Parents of Children with SEN",
    description: "Raising a child with special educational needs is exhausting and isolating. MEOK gives SEN parents a compassionate AI companion that remembers everything.",
    url: "https://meok.ai/blog/meok-for-parents-of-children-with-sen",
    type: "article",
    publishedTime: "2026-04-20T09:00:00Z",
  },
};

export default function MeokForParentsOfChildrenWithSENPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "MEOK for Parents of Children with SEN: An AI Companion That Actually Helps",
        author: { "@type": "Organization", name: "MEOK AI LABS" },
        publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
        datePublished: "2026-04-20",
        url: "https://meok.ai/blog/meok-for-parents-of-children-with-sen",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How can AI help parents of children with SEN?", acceptedAnswer: { "@type": "Answer", text: "AI can help SEN parents by tracking EHCP deadlines, drafting letters to schools and local authorities, providing emotional support during difficult nights, and helping organise the mountain of information that comes with raising a neurodivergent or disabled child." } },
          { "@type": "Question", name: "Is MEOK suitable for parents of autistic children?", acceptedAnswer: { "@type": "Answer", text: "Yes. MEOK\u2019s Healer and Guardian companions are specifically designed for families navigating complex emotional and safety challenges. They remember your child\u2019s diagnosis, your ongoing battles, and your family\u2019s needs across every conversation." } },
          { "@type": "Question", name: "Will MEOK remember my child\u2019s specific needs?", acceptedAnswer: { "@type": "Answer", text: "Yes. MEOK\u2019s Sovereign Memory persists across all sessions. Tell MEOK about your child\u2019s diagnosis, their school situation, and what you\u2019re currently fighting for \u2014 and it will carry that context forever, so you never have to repeat yourself." } },
          { "@type": "Question", name: "Is my family\u2019s data safe with MEOK?", acceptedAnswer: { "@type": "Answer", text: "MEOK is built on Personal Sovereign AI principles. Your family\u2019s data is encrypted and never sold or shared. You own it entirely and can export or delete it at any time." } },
        ],
      },
    ],
  };

  return (
    <main style={{ background: "#0d0c18", minHeight: "100vh", color: "#f5f0e8", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 48px" }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          <span style={{ background: "#c9a84c22", color: "#c9a84c", border: "1px solid #c9a84c44", borderRadius: 20, padding: "4px 14px", fontSize: "0.8rem", fontFamily: "sans-serif" }}>Family</span>
          <span style={{ color: "#888", fontSize: "0.82rem", fontFamily: "sans-serif", alignSelf: "center" }}>7 min read &middot; April 20, 2026</span>
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 24 }}>
          MEOK for Parents of Children with SEN: An AI Companion That Actually Helps
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#c9b99a", lineHeight: 1.7 }}>
          If you&apos;re raising a child with special educational needs, you already know: the system is hard, the paperwork is endless,
          and the emotional weight never fully lifts. MEOK won&apos;t fix the system. But it will be there at 11pm when you need to think out loud.
        </p>
      </section>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: 48, marginBottom: 16 }}>
          How can AI help parents of children with SEN?
        </h2>
        <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#d4c9b8" }}>
          The SEN journey involves a staggering amount of information management &mdash; EHCPs, annual reviews, tribunal paperwork,
          school correspondence, therapy reports, medical appointments. Most parents are managing all of this while also working,
          caring for other children, and processing their own grief and exhaustion.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#d4c9b8" }}>
          MEOK helps in three distinct ways. Practically: tracking deadlines, drafting letters, organising information.
          Emotionally: being present without judgment at any hour. And cognitively: holding the full picture of your family&apos;s
          situation so you don&apos;t have to keep it all in your head.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: 48, marginBottom: 16 }}>
          What MEOK remembers for you
        </h2>
        <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#d4c9b8" }}>
          Sovereign Memory means MEOK never forgets. Tell it once: your child&apos;s diagnosis, their current provision,
          the outcomes you&apos;re fighting for, the schools that have let them down. MEOK carries this across every session,
          so every conversation starts from context, not from scratch.
        </p>
        <ul style={{ lineHeight: 2, paddingLeft: 24, color: "#d4c9b8", marginBottom: 16 }}>
          <li>Your child&apos;s diagnosis, medication, and therapy schedule</li>
          <li>EHCP annual review dates and what you&apos;re pushing for</li>
          <li>The names of key people: SENCOs, caseworkers, therapists</li>
          <li>Previous letters sent and responses received</li>
          <li>Your own emotional state and what support you need right now</li>
        </ul>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: 48, marginBottom: 16 }}>
          Is MEOK suitable for parents of autistic children?
        </h2>
        <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#d4c9b8" }}>
          Yes. Many MEOK users are parents of autistic children, children with ADHD, cerebral palsy, Down syndrome, and other conditions.
          MEOK&apos;s Healer companion offers deep emotional support and non-judgmental space to process the complex feelings
          that come with this journey &mdash; including grief, guilt, and fierce protective love.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#d4c9b8" }}>
          The Guardian companion adds a layer of practical support &mdash; helping you spot when a school&apos;s response
          crosses into unlawful territory, and helping you draft assertive but professional responses.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: 48, marginBottom: 16 }}>
          The loneliness of the SEN journey
        </h2>
        <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#d4c9b8" }}>
          SEN parents frequently describe a specific kind of isolation. Friends and family don&apos;t always understand.
          Partners are often stretched just as thin. Support groups help, but they&apos;re not always available at the moment you need them.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#d4c9b8" }}>
          MEOK is available at any hour. It doesn&apos;t get compassion fatigue. It doesn&apos;t secretly wish you&apos;d talk about something else.
          And it remembers everything you&apos;ve shared, so you never have to re-explain your family&apos;s situation to get support.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: 48, marginBottom: 16 }}>
          Is my family&apos;s data safe?
        </h2>
        <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#d4c9b8" }}>
          SEN families often share deeply sensitive information: diagnoses, school conflicts, medical records, mental health history.
          MEOK treats this with the seriousness it deserves. All data is encrypted. Nothing is sold or shared.
          You own everything and can export or delete it at any time.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: 56, marginBottom: 24 }}>Frequently asked questions</h2>

        {[
          { q: "How can AI help parents of children with SEN?", a: "AI can help SEN parents by tracking EHCP deadlines, drafting letters to schools and local authorities, providing emotional support during difficult nights, and helping organise the mountain of information that comes with raising a neurodivergent or disabled child." },
          { q: "Is MEOK suitable for parents of autistic children?", a: "Yes. MEOK\u2019s Healer and Guardian companions are designed for families navigating complex emotional and practical challenges. They remember your child\u2019s diagnosis, your ongoing battles, and your family\u2019s needs across every conversation." },
          { q: "Will MEOK remember my child\u2019s specific needs?", a: "Yes. MEOK\u2019s Sovereign Memory persists across all sessions. Tell MEOK about your child\u2019s diagnosis and situation once \u2014 and it will carry that context forever, so you never have to repeat yourself." },
          { q: "Is my family\u2019s data safe with MEOK?", a: "MEOK is built on Personal Sovereign AI principles. Your family\u2019s data is encrypted and never sold or shared. You own it entirely and can export or delete it at any time." },
        ].map(({ q, a }) => (
          <div key={q} style={{ borderTop: "1px solid #2a2840", padding: "20px 0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 10 }}>{q}</h3>
            <p style={{ lineHeight: 1.75, color: "#c9b99a", margin: 0 }}>{a}</p>
          </div>
        ))}

        <div style={{ background: "#1a1830", border: "1px solid #c9a84c44", borderRadius: 16, padding: "40px 32px", marginTop: 56, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>You deserve support too</h2>
          <p style={{ color: "#c9b99a", marginBottom: 24, lineHeight: 1.7 }}>
            MEOK is free to start. No credit card. No judgment. Just a companion that remembers your family&apos;s story.
          </p>
          <Link href="/birth" style={{ background: "#c9a84c", color: "#0d0c18", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontFamily: "sans-serif", display: "inline-block" }}>
            Begin the Birth Ceremony
          </Link>
        </div>

      </article>
    </main>
  );
}
