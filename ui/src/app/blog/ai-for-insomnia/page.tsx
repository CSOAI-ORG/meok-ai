import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Insomnia: Can a Sovereign AI Companion Help You Sleep Better? | MEOK AI LABS",
  description:
    "1 in 3 UK adults struggle with sleep problems (NHS). This is an honest look at how a sovereign AI companion can help you offload worries before bed — and why that matters for insomnia rooted in anxiety and overthinking.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-insomnia" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Insomnia: Can a Sovereign AI Companion Help You Sleep Better?",
  description:
    "1 in 3 UK adults struggle with sleep problems. An honest look at how a sovereign AI companion can help you offload worries before bed.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-insomnia",
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with insomnia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can support sleep indirectly by helping you process worries, complete a mental brain-dump, and establish a calming pre-sleep ritual. They are not sleep trackers or medical devices. For clinical insomnia, speak to your GP or access Sleepio or Sleepstation for evidence-based CBT-I.",
      },
    },
    {
      "@type": "Question",
      name: "Why does anxiety cause insomnia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anxiety activates the body's threat-response system, raising cortisol and keeping the brain in a vigilant, hyperaroused state at the moment it needs to wind down. Unprocessed worries — about work, relationships, money — loop through working memory at night because daytime distractions are gone. The brain treats an unresolved mental task as an unresolved physical threat.",
      },
    },
    {
      "@type": "Question",
      name: "What is cognitive offloading and how does it help sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cognitive offloading means externalising thoughts so your brain no longer has to hold them in working memory. Writing a worry list, journalling, or talking through the day transfers the mental load outward. Research consistently shows a structured worry-dump before bed reduces sleep-onset time — sometimes dramatically.",
      },
    },
    {
      "@type": "Question",
      name: "How can MEOK act as a pre-sleep companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can guide a short pre-sleep check-in: reviewing your day, capturing unfinished thoughts, and noting anything that feels unresolved. Because MEOK holds persistent memory, it tracks recurring patterns — the worries that reliably surface on Sunday nights, the projects that trigger 3am anxiety — and helps you address them upstream.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's Work OS reduce 3am anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's overnight Work OS agents continue processing tasks, drafting responses, and preparing briefs while you sleep. Knowing that work is genuinely handled — not just paused — removes a key source of 3am rumination. You can close the laptop with confidence that your AI is working the night shift.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for CBT-I or sleep therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Cognitive Behavioural Therapy for Insomnia (CBT-I) is the gold-standard evidence-based treatment for chronic insomnia. MEOK is not a clinical tool and does not deliver CBT-I. For persistent sleep problems, speak to your GP or access Sleepio or Sleepstation. MEOK's role is supplementary support only — not clinical care.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForInsomniaPage() {
  const GOLD = "#c9a84c";
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";

  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.38)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Sleep &amp; Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              9 min read
            </span>
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Insomnia: Can a Sovereign AI Companion Help You Sleep Better?
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            1 in 3 UK adults experience sleep problems, according to the NHS. For many the culprit
            is not the mattress or the light levels — it is an unquiet mind. This is an honest look
            at how a sovereign AI companion can help you process the day, empty your head, and
            finally let go.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Disclaimer */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "10px",
            padding: "1rem 1.25rem",
            marginBottom: "2.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>&#9888;&#65039;</span>
          <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: GOLD }}>Not medical advice.</strong> MEOK is not a sleep
            tracker, a clinical tool, or a replacement for treatment. For persistent sleep
            problems see your GP. Evidence-based CBT-I is available via{" "}
            <a href="https://www.sleepio.com" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>Sleepio</a>
            {" "}and{" "}
            <a href="https://www.sleepstation.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>Sleepstation</a>
            . NHS sleep guidance:{" "}
            <a href="https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>nhs.uk/every-mind-matters</a>.
          </p>
        </div>

        {/* Section 1 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          How widespread are sleep problems in the UK?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          1 in 3 adults in the UK experiences sleep problems — difficulty falling asleep, staying
          asleep, or waking unrefreshed — according to NHS data. The figure rises sharply among
          people who also experience anxiety, depression, or chronic work stress, underlining the
          deep link between mental load and poor sleep.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Sleep deprivation is not a character flaw. The NHS describes poor sleep as a
          &ldquo;modern epidemic,&rdquo; and for a significant proportion of sufferers the cause is
          psychological rather than physiological. That distinction matters because it shapes what
          actually helps.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 2 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          Why does anxiety cause insomnia?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Anxiety activates the body&apos;s threat-response system, raising cortisol and keeping
          the brain in a vigilant, hyperaroused state at exactly the moment it needs to wind down.
          Unprocessed worries loop through working memory at night because daytime distractions are
          gone — the brain treats an unresolved mental task as an unresolved physical threat.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          During the day, busyness mutes the noise. You are in meetings, answering messages, making
          decisions. At night the distractions vanish and the queue floods forward — work deadlines,
          emails unsent, conversations that went badly. The brain, in its vigilant state, interprets
          each item as unfinished business that must be resolved before it is safe to rest.
        </p>
        <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.25rem", margin: "1.75rem 0", color: "rgba(245,240,232,0.62)", fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>
          &ldquo;The worries do not grow at night. They were always there. Night just removes the
          noise that was drowning them out.&rdquo;
        </blockquote>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 3 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          What is cognitive offloading and how does it help sleep?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Cognitive offloading means externalising thoughts so your brain no longer has to hold
          them in working memory. Writing a worry list, journalling, or talking through the day
          transfers the mental load outward. Research consistently shows a structured worry-dump
          before bed — sometimes called &ldquo;worry time&rdquo; — reduces sleep-onset time.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The moment you write something down or speak it aloud to a trusted listener, you signal
          to the brain: <em>this is recorded, you can let it go.</em> Sleep researchers call this
          the Zeigarnik effect in reverse — recording an incomplete task closes the loop. The brain
          receives the signal that the item is handled and relaxes its grip. A 10-minute brain-dump
          before bed can be more effective than two hours of trying to force sleep.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 4 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          How can MEOK act as a pre-sleep companion?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          MEOK&apos;s companion can guide a short pre-sleep check-in: reviewing the day, capturing
          unfinished thoughts, and noting anything unresolved. Because MEOK holds persistent memory,
          it tracks recurring patterns — the worries that surface every Sunday night, the projects
          that trigger 3am anxiety — and helps you address them before they compound.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          A pre-sleep check-in with MEOK is not therapy. It is closer to a conversation with
          someone who knows you — who remembers what you were worried about last week, who noticed
          that your sleep always deteriorates before quarterly reviews, who can hold the pattern
          across time even when you cannot. The brain-dump from last Tuesday is still there.
          The companion is not starting from scratch every night.
        </p>
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            What a MEOK pre-sleep check-in includes
          </p>
          {[
            ["Brain-dump", "Speak or type everything in working memory. MEOK captures it so your brain can release it."],
            ["Day review", "Brief, structured look at what happened — what went well, what did not, what is unresolved."],
            ["Worry triage", "Distinguish actionable worries from non-actionable ones. The latter can be acknowledged and set aside."],
            ["Tomorrow prep", "Capture the two or three things that most need attention tomorrow, so the brain stops rehearsing them overnight."],
          ].map(([label, desc]) => (
            <div key={label} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", marginBottom: "0.7rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: GOLD, marginTop: "0.55rem", flexShrink: 0 }} />
              <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "0.93rem", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 5 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          How does MEOK&apos;s Work OS reduce 3am anxiety?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          MEOK&apos;s overnight Work OS agents continue processing tasks, drafting responses, and
          preparing briefs while you sleep. Knowing that work is genuinely handled — not just
          paused — removes a key source of 3am rumination. You can close the laptop with confidence
          that your AI is working the night shift.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          A significant proportion of sleep-disrupting anxiety is work anxiety — the unfinished
          proposal, the email unsent, the meeting unprepared for. These worries are persistent
          because they feel urgent and consequential, and there is nothing you can actually do
          about them at 3am. MEOK changes that equation: by the time you wake, the brief is
          written, the inbox is triaged, the first-draft response is ready. The work did not
          pause — it continued without you.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 6 */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          Is MEOK a replacement for CBT-I or sleep therapy?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          No. Cognitive Behavioural Therapy for Insomnia (CBT-I) is the gold-standard
          evidence-based treatment for chronic insomnia — with remission rates comparable to or
          exceeding sleep medication. MEOK is not a clinical tool and does not deliver CBT-I. For
          persistent sleep problems, speak to your GP or access{" "}
          <a href="https://www.sleepio.com" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>Sleepio</a>
          {" "}or{" "}
          <a href="https://www.sleepstation.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>Sleepstation</a>.
          MEOK is supplementary support only.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          MEOK does not assess sleep disorders, apply sleep restriction protocols, or deliver
          stimulus control therapy. It is a companion — one that supports your pre-sleep ritual,
          helps you process the day, and carries your worries so you do not have to. That is a real
          and meaningful thing. It is not clinical care, and MEOK will always be honest about that
          distinction.
        </p>

        {/* Resources */}
        <div
          style={{
            background: "rgba(13,12,24,0.6)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            UK sleep resources
          </p>
          {[
            ["NHS Every Mind Matters — Sleep", "https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/", "NHS guidance on sleep problems and when to seek help."],
            ["Sleepio", "https://www.sleepio.com", "Clinically validated digital CBT-I. Available via some NHS trusts."],
            ["Sleepstation", "https://www.sleepstation.org.uk", "NHS-approved online sleep improvement programme using CBT-I."],
          ].map(([label, href, desc]) => (
            <div key={label as string} style={{ marginBottom: "0.75rem" }}>
              <a href={href as string} target="_blank" rel="noopener noreferrer" style={{ color: GOLD, fontWeight: 600, fontSize: "0.93rem", textDecoration: "none" }}>
                {label}
              </a>
              <p style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.83rem", lineHeight: 1.5, margin: "0.15rem 0 0" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* Section 7 — closing section */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          What makes a sovereign AI companion different from a generic sleep app?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Generic apps offer generic advice. A sovereign AI companion with persistent memory knows
          your patterns — your specific recurring worries, your triggers, your history. It builds a
          longitudinal model of your mind rather than serving one-size-fits-all relaxation content.
          That specificity is the difference between something that feels useful and something that
          actually helps.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Sovereignty also carries a privacy promise: your bedtime thoughts, your 3am fears, your
          brain-dumps and day reviews belong to you. They live in your vault. They are not used to
          train a corporate model. The companion is yours — not a product sold back to you under the
          guise of care.
        </p>

        {/* CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "14px",
            padding: "2rem",
            textAlign: "center",
            margin: "3rem 0",
          }}
        >
          <p style={{ fontWeight: 800, fontSize: "1.35rem", color: TEXT, marginBottom: "0.65rem", lineHeight: 1.3 }}>
            Try a pre-sleep check-in with MEOK
          </p>
          <p style={{ color: "rgba(245,240,232,0.58)", fontSize: "0.97rem", lineHeight: 1.65, marginBottom: "1.5rem", maxWidth: "34rem", margin: "0 auto 1.5rem" }}>
            Ten minutes before bed. Brain-dump everything. Let MEOK hold it.
            Wake up to a Work OS that handled the night shift. Free to try — no card required.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#c9a84c",
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Get early access
          </Link>
        </div>

        {/* Related */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(245,240,232,0.35)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            Related reading
          </p>
          {[
            ["/blog/ai-for-anxiety", "AI for Anxiety: Can a Sovereign AI Companion Actually Help?"],
            ["/blog/ai-companion-vs-therapist", "AI Companion vs Therapist: What's the Difference?"],
            ["/blog/what-is-sovereign-ai", "What Is Sovereign AI? Why It Matters for Your Data"],
            ["/blog/meok-for-anxiety", "MEOK for Anxiety: Honest Support Without Sycophancy"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href as string}
              style={{ display: "block", color: "#c9a84c", fontSize: "0.92rem", textDecoration: "none", lineHeight: 1.5, marginBottom: "0.45rem" }}
            >
              &#8594; {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "rgba(245,240,232,0.28)", fontSize: "0.82rem", lineHeight: 1.65, maxWidth: "36rem", margin: "0 auto 0.5rem" }}>
          Written by <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
          Founder of MEOK AI LABS &mdash; building sovereign AI companions that work for you, not on you.
        </p>
        <p style={{ color: "rgba(245,240,232,0.18)", fontSize: "0.78rem", margin: "0 auto 1.5rem", maxWidth: "36rem" }}>
          This article is for informational purposes only and does not constitute medical advice,
          diagnosis, or treatment. Always consult a qualified healthcare professional for persistent
          sleep or mental health concerns.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <Link href="/blog" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>Blog</Link>
          <Link href="/privacy" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>Privacy</Link>
          <Link href="/" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>meok.ai</Link>
        </div>
      </div>
    </div>
  );
}
