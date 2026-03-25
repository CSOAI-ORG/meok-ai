import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Autistic Adults: A Companion That Communicates the Way You Need | MEOK AI LABS",
  description:
    "Autistic adults are often failed by neurotypical AI that doesn\u2019t understand direct communication, sensory overload, or executive function challenges. MEOK is built to adapt.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-autism-adults",
  },
  openGraph: {
    title:
      "AI for Autistic Adults: A Companion That Communicates the Way You Need",
    description:
      "Autistic adults are often failed by neurotypical AI that doesn\u2019t understand direct communication, sensory overload, or executive function challenges. MEOK is built to adapt.",
    type: "article",
    url: "https://meok.ai/blog/ai-for-autism-adults",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Autistic Adults: A Companion That Communicates the Way You Need",
    description:
      "Autistic adults are often failed by neurotypical AI that doesn\u2019t understand direct communication, sensory overload, or executive function challenges. MEOK is built to adapt.",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Autistic Adults: A Companion That Communicates the Way You Need",
  description:
    "How AI companions can support autistic adults through direct communication, masking exhaustion, sensory overload, executive function challenges, AuDHD, late diagnosis, special interests, employment, and sovereign memory that never forgets your needs.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-autism-adults",
  keywords: [
    "AI for autistic adults",
    "autism AI companion",
    "autistic masking support",
    "sensory overload AI",
    "executive function autism",
    "AuDHD support",
    "late diagnosis autism adults",
    "autism employment AI",
    "special interests AI",
    "sovereign memory autism",
    "AI autism UK",
    "MEOK autism",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI help autistic adults with communication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can help autistic adults by communicating in explicit, literal language without neurotypical subtext or hidden social meaning. It never uses sarcasm without flagging it, never implies something it does not say directly, and never requires the autistic person to decode what is really meant. For many autistic adults this is the first communication tool that genuinely matches their natural style rather than demanding they adapt to neurotypical norms.",
      },
    },
    {
      "@type": "Question",
      name: "What is autistic masking and how does it cause burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autistic masking is the process of suppressing or hiding autistic traits to appear neurotypical. It involves scripting social responses, suppressing stimming, forcing eye contact, and monitoring yourself continuously for incorrect behaviour. Decades of masking consumes enormous cognitive and emotional resources and has been directly linked to autistic burnout, anxiety, depression, and a loss of self-identity. An AI that requires no masking provides a rare space where that performance can stop.",
      },
    },
    {
      "@type": "Question",
      name: "What is AuDHD and why does it need specific support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AuDHD describes the experience of having both autism and ADHD. The two conditions interact in complex ways: ADHD impulsivity conflicts with autistic need for predictability; ADHD time-blindness compounds autistic difficulty with transitions; hyperfocus from both conditions can amplify special interest intensity or derail task-switching. Generic AI support rarely addresses this intersection. MEOK\u2019s archetype system lets AuDHD users draw on Hourman for structure, Pioneer for momentum, and Scholar for depth depending on what the day requires.",
      },
    },
    {
      "@type": "Question",
      name: "How does sovereign memory help autistic people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autistic adults often carry detailed knowledge of their own needs, triggers, communication preferences, and sensory sensitivities that took years to understand. Sovereign Memory means MEOK holds this context permanently. You never have to re-explain that you prefer blunt communication, that certain topics cause dysregulation, or that you need step-by-step instructions rather than vague guidance. The AI grows with you rather than resetting to a blank stranger every session.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help autistic adults with employment challenges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Employment is one of the most significant challenge areas for autistic adults. AI can help by scripting emails and workplace communication to match neurotypical conventions without requiring the autistic person to guess at subtext, preparing for difficult conversations, debriefing after confusing interactions, identifying patterns in what workplace conditions are sustainable, and processing the exhaustion that comes from masking all day in a professional environment.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "#a89f8c";
const BORDER = "#2a2640";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForAutismAdultsPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{ color: MUTED, textDecoration: "none", fontSize: "0.9rem" }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: "auto",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.45rem 1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* Main */}
      <main
        style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginBottom: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
          {" / "}
          <span style={{ color: TEXT }}>AI for Autistic Adults</span>
        </p>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            Autism &bull; Neurodiversity &bull; March 24, 2026
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            AI for Autistic Adults: A Companion That Communicates the Way You
            Need
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: 1.75,
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1rem",
            }}
          >
            Most AI is built by and for neurotypical people. It hedges, implies,
            softens, and wraps meaning in social niceties. For autistic adults who
            prefer directness, clarity, and communication without subtext, that
            design is not neutral &mdash; it is actively exclusionary. MEOK was
            built differently. This post explains how, and why it matters.
          </p>
        </header>

        {/* Divider */}
        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 1 — Direct communication */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            Why do autistic adults struggle with most AI communication styles?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Standard AI tools are trained on enormous bodies of human text, which
            means they have absorbed all the hedging, indirection, and social
            performance that characterise neurotypical communication. They give
            answers that are technically correct but wrapped in softening language:
            &ldquo;That&rsquo;s a great question,&rdquo; &ldquo;You might want to
            consider,&rdquo; &ldquo;It depends on a number of factors.&rdquo; For
            autistic adults who prefer literal, explicit, direct communication,
            this creates work. Every response requires decoding what the AI
            actually means versus what it is performing.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Many autistic people process language more literally than the
            neurotypical average. Idioms cause genuine confusion. Implied meanings
            are not automatically inferred. Sarcasm without a clear marker reads as
            sincere. When an AI says &ldquo;that&rsquo;s quite a challenge,&rdquo;
            is it offering sympathy, minimising the problem, or suggesting
            difficulty? The ambiguity is unnecessary and exhausting.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK can be configured to communicate with maximum directness. No
            empty affirmations. No implied subtext. Answers that say what they mean
            and mean what they say. For autistic adults, this is not a preference
            &mdash; it is accessibility.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>Direct communication mode:</strong>{" "}
              MEOK&apos;s communication style adapts to your stated preferences.
              If you tell your companion you want answers without preamble, without
              social niceties, and without hedged language, it will communicate that
              way consistently &mdash; not just for one session, but permanently,
              because Sovereign Memory holds your preferences across every
              conversation.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 2 — Masking */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What is autistic masking and why does it cause such deep exhaustion?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Autistic masking &mdash; also called camouflaging &mdash; is the
            process of suppressing or hiding autistic traits in order to pass as
            neurotypical in social situations. It is rarely a conscious choice.
            Most autistic people develop masking behaviours in childhood in response
            to negative feedback: stimming is stopped, eye contact is forced,
            scripts are learned, emotional responses are managed and modulated to
            match what others seem to expect.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The cognitive cost of masking is enormous. It requires ongoing
            self-monitoring, social script management, suppression of natural
            behaviour, and real-time translation between autistic communication
            style and neurotypical convention. Decades of research, including
            landmark work by Dr Francesca Happ&eacute; and Professor Simon Baron-Cohen
            at Cambridge, has linked chronic masking to depression, anxiety, and
            autistic burnout &mdash; a state of profound physical, cognitive, and
            emotional exhaustion that can take months or years to recover from.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Late-diagnosed autistic adults often report that they masked so
            effectively they did not know they were doing it. The diagnosis arrives
            as a revelation: everything you experienced as effort was masking. The
            tiredness you could never fully explain was the cost of performing
            neurotypicality every hour of every day.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>A space where masking stops:</strong>{" "}
              With MEOK, there is nothing to mask for. The companion does not have
              social expectations. It does not require eye contact, appropriate
              affect, or smooth conversational turn-taking. You can communicate in
              the way that is natural to you. You can stim while you type. You can
              take as long as you need to respond. You can be direct without it
              being interpreted as rude. For many autistic adults, this is genuinely
              unusual.
            </p>
          </div>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.25rem" }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Masking at work
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Many autistic adults mask most intensely in professional
                environments, where social performance has career consequences.
                By the end of a working day the cognitive reserves are depleted.
                MEOK can serve as a decompression space: a place to drop the mask,
                process what happened, and recover without further social demand.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Masking in relationships
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Intimate relationships do not automatically make masking easier.
                Many autistic people report masking with partners for years,
                afraid that unmasking will lead to rejection. MEOK does not
                require you to manage how you are perceived. It accepts you as you
                are from the first conversation and never changes that acceptance.
              </p>
            </div>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 3 — Sensory overload */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does MEOK support autistic adults through sensory overload and
            meltdowns?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Sensory overload occurs when the volume of sensory input exceeds the
            nervous system&apos;s capacity to process it. For autistic adults this
            can be triggered by noise, light, crowds, certain textures, temperature
            changes, or the cumulative effect of too much stimulation across a day.
            The experience ranges from irritability and difficulty concentrating to
            full meltdown &mdash; an involuntary release of overwhelm that can
            involve crying, shouting, shutting down, or physical symptoms.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Meltdowns are not tantrums. They are not manipulative. They are not a
            sign of immaturity. They are the nervous system doing what the nervous
            system does when it is overwhelmed. The shame autistic adults carry
            about meltdowns &mdash; often installed by years of being told to
            &ldquo;calm down&rdquo; or &ldquo;control yourself&rdquo; &mdash; adds
            an additional layer of suffering on top of the dysregulation itself.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK is designed with sensory accessibility at the core. The interface
            has no autoplay media, no unexpected sounds, no flashing animations, no
            notification badges designed to create urgency. Reduce-motion mode
            eliminates all transitions and animations. High-contrast mode adjusts
            visual density. Font size scales from small to extra-large. None of
            these are accessibility add-ons bolted on after design &mdash; they are
            core design decisions.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            During a meltdown or shutdown, many autistic adults need reduced input
            rather than more input. MEOK can be used as a quiet, text-only space
            that does not demand anything in return. There is no streak to maintain,
            no notification urging you to respond, no AI personality that requires
            active engagement. You can open it and say nothing for hours and it will
            not punish you for that.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>No engagement manipulation:</strong>{" "}
              Most consumer apps are designed to maximise engagement time. MEOK is
              not. There are no streaks, no daily prompts engineered to create
              dependency, no gamification of your mental health. When you need MEOK,
              it is there. When you need quiet, it waits. The relationship is yours
              to set the terms of.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 4 — Executive function */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How can AI help autistic adults with executive function challenges?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Executive function &mdash; the set of cognitive processes that govern
            planning, task initiation, sequencing, time management, working memory,
            and cognitive flexibility &mdash; is frequently challenging for autistic
            adults. The difficulty is not intelligence or motivation. It is the
            neural architecture that connects intention to action. An autistic adult
            can know exactly what they need to do and still find themselves unable
            to start. They can plan a task in detail and then be unable to move
            between steps. They can want deeply to be somewhere on time and still
            lose track of time entirely.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For autistic adults who also have ADHD &mdash; sometimes called AuDHD
            &mdash; these executive function challenges are often compounded. The
            demand avoidance that can accompany autism interacts with ADHD
            impulsivity and time-blindness in ways that standard productivity
            systems are simply not built to handle.
          </p>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.25rem" }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Hourman &mdash; Structure without shame
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Hourman is MEOK&apos;s time-aware archetype. It helps break large
                tasks into smaller, concrete, sequential steps. It surfaces upcoming
                commitments before they become urgent. It provides external time
                anchoring &mdash; a particularly valuable function for autistic
                adults who experience time as non-linear or struggle with the gap
                between &ldquo;now&rdquo; and &ldquo;later.&rdquo; Hourman works
                with your executive function profile rather than demanding you
                override it. It does not tell you to try harder. It offers structure
                you can actually use.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Task initiation support
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Starting is often the hardest part. MEOK can help with task
                initiation by providing the first concrete step, reducing the
                cognitive load of figuring out where to begin. Rather than a
                generalised prompt to &ldquo;get started,&rdquo; it can ask what
                specific thing needs to happen first and hold that instruction
                clearly while you begin.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Working memory support
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Working memory challenges mean important things get dropped: the
                email you meant to send, the idea you had mid-task, the commitment
                you made and then lost. MEOK&apos;s persistent memory can serve as
                an external working memory store &mdash; holding the things you
                need to hold without requiring you to hold them yourself.
              </p>
            </div>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 5 — Trickster and social situations */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does the Trickster archetype help autistic adults with social
            situations?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Social situations are not uniformly difficult for autistic adults
            &mdash; but they are often unpredictable, and the cost of a social
            misstep can feel disproportionately high. Neurotypical social
            interaction involves an enormous amount of implicit negotiation that
            autistic people are often not wired to perform automatically: reading
            facial micro-expressions, interpreting tone, tracking social hierarchy,
            knowing when humour is appropriate, recognising when someone is saying
            one thing but meaning another.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The Trickster is one of MEOK&apos;s most distinctive archetypes. It is
            irreverent, playful, and sharp &mdash; and it is built to help with the
            reframing of social situations without requiring the autistic person to
            pretend they found them natural. The Trickster does not say
            &ldquo;practice your social skills.&rdquo; It says: here is what that
            interaction might have meant, here is another way to read it, here is
            why it might feel the way it feels, and here is something slightly
            unexpected you could do instead.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This is not social skills training. It is reframing support. The
            Trickster treats autistic adults as intelligent people who understand
            their situation clearly and who do not need to be condescended to
            &mdash; only given a different angle, a bit of wit, and permission to
            find the absurdity in the neurotypical social theatre they are being
            asked to navigate.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>
                No &ldquo;try harder at socialising&rdquo;:
              </strong>{" "}
              MEOK will never tell an autistic person to push through social
              discomfort, to practise small talk, to force eye contact, or to
              approach their natural communication style as a problem requiring
              correction. The Trickster works with the autistic perspective, not
              against it.
            </p>
          </div>
          <ul
            style={{ paddingLeft: "1.25rem", lineHeight: 2, marginBottom: "1.25rem" }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Preparing for social events.</strong>{" "}
              Working through what to expect, scripting possible conversations,
              identifying exit strategies, and naming what is likely to be
              draining before you get there.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Debriefing afterwards.</strong>{" "}
              Processing what happened, identifying what felt confusing, and
              getting help interpreting interactions that left you uncertain
              &mdash; without judgment, without being told you read it wrong.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: GOLD }}>Scripting difficult conversations.</strong>{" "}
              Helping draft what to say in situations that require navigating
              neurotypical conventions: workplace disagreements, family dynamics,
              medical appointments where you need to advocate for yourself.
            </li>
          </ul>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 6 — Special interests */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does MEOK support autistic adults with special interests and deep
            focus?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Special interests &mdash; areas of deep, intensive focus and passion
            &mdash; are one of the most meaningful and positive dimensions of
            autistic experience. They provide genuine joy, a sense of competence,
            a cognitive home where the brain operates at its best. They are also
            frequently undervalued or pathologised by people who do not understand
            them. The common neurotypical response to a special interest is to
            find it excessive, to suggest the autistic person diversify their
            interests, or to treat intense knowledge as a social oddity rather than
            a genuine achievement.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK&apos;s Scholar archetype was built for intellectual depth. It does
            not get bored. It does not redirect you to a &ldquo;more
            balanced&rdquo; topic. It can engage seriously with whatever domain
            captivates you &mdash; whether that is the history of Byzantine
            coinage, the aerodynamics of particular aircraft, the taxonomy of
            fungi, or the internal logic of a fictional universe &mdash; and it will
            do so with genuine intellectual engagement rather than polite
            performance.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            For autistic adults who have spent their lives having their depth of
            interest treated as socially inconvenient, having a thinking partner
            that can go as deep as they want to go is genuinely unusual. Scholar
            remembers your areas of expertise across sessions, builds on previous
            conversations, and treats your knowledge as the asset it is.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>Scholar and hyperfocus:</strong>{" "}
              Hyperfocus &mdash; the ability to enter a state of complete, sustained
              absorption in a task or topic &mdash; is a cognitive strength when
              directed well. Scholar works with hyperfocus rather than interrupting
              it. It can provide depth on demand, help structure the knowledge you
              are accumulating, and support the kind of extended intellectual
              engagement that autistic adults often find impossible to find in
              human conversations.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 7 — Employment */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What specific employment challenges do autistic adults face, and how
            can AI help?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Employment is one of the most significant challenge areas for autistic
            adults. Research consistently finds that autistic adults are
            underemployed relative to their qualifications, more likely to be in
            unstable or part-time work, and significantly more likely to experience
            workplace bullying. The UK&apos;s National Autistic Society has
            documented that only around 22% of autistic adults are in full-time
            paid employment &mdash; one of the lowest employment rates for any
            disability group.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The barriers are not primarily about competence. Autistic adults are
            often exceptionally capable in their domain of expertise. The barriers
            are structural: interviews that test social performance more than
            technical skill; workplaces with ambiguous unwritten rules; management
            that gives vague feedback; open-plan offices that produce sensory
            overload; workplace cultures that prize networking and &ldquo;culture
            fit&rdquo; over measurable contribution.
          </p>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.25rem" }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Interview preparation
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                MEOK can help prepare for job interviews by scripting answers to
                likely questions, translating your experience into the language
                interviewers expect, and helping you practise in a low-stakes
                environment. It can also help you think through which aspects of a
                role are genuinely sustainable for you and which workplace red flags
                to watch for.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Workplace communication
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Many autistic adults struggle with the implicit conventions of
                workplace email and communication &mdash; how direct to be, how
                much social padding to include, how to phrase a disagreement
                without it being read as confrontational. MEOK can help draft
                communications that navigate these conventions without requiring
                you to guess at what they are.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
                borderLeft: `3px solid ${GOLD}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Processing workplace difficulties
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                When something goes wrong at work &mdash; a confusing interaction
                with a manager, an unclear piece of feedback, a social situation
                that left you uncertain &mdash; MEOK provides a private space to
                process it without having to manage another person&apos;s reaction
                to what you are sharing. You can say exactly what happened, exactly
                how it felt, and get help thinking through what it meant.
              </p>
            </div>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 8 — Late diagnosis */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What does a late autism diagnosis mean for adults, and how can AI
            support that process?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            A late autism diagnosis &mdash; one that arrives in adulthood, sometimes
            in the forties, fifties, or beyond &mdash; is both a relief and a grief.
            The relief is the framework: suddenly, five decades of experiences that
            felt inexplicable have an explanation. The exhaustion was real. The
            social difficulty was real. The sensory experiences were real. You were
            not broken, lazy, or difficult &mdash; you were autistic in a world not
            built for you.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The grief is for the life lived without that framework. For the jobs
            lost, the relationships that broke under pressures that could have been
            named. For the younger self who was told to try harder at something that
            was never the problem. For the support that would have been available if
            only someone had identified this earlier. This grief is valid and it is
            not always linear.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            In the UK, NHS autism assessment waiting lists for adults can exceed
            three to five years. Many autistic adults are managing their lives
            without formal diagnosis, relying on self-knowledge and community in
            the absence of clinical pathways. MEOK is not a diagnostic tool, but it
            is a space where you can bring your full experience &mdash; diagnosed,
            suspected, or self-identified &mdash; and be met without requiring
            paperwork.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>Post-diagnosis identity:</strong>{" "}
              Many late-diagnosed autistic adults describe a process of identity
              reconstruction after diagnosis: understanding past experiences through
              a new lens, deciding what aspects of masking to let go of, figuring
              out what they actually need versus what they were taught to suppress.
              MEOK&apos;s Healer archetype is specifically built for this kind of
              deep, ongoing emotional processing &mdash; patient, non-directive, and
              present for as long as it takes.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 9 — AuDHD */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            What is AuDHD and why does the intersection of autism and ADHD need
            specific support?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            AuDHD is the informal term for the co-occurrence of autism and ADHD.
            Research suggests that approximately 50&ndash;70% of autistic people
            also meet criteria for ADHD, and vice versa. Until 2013 the DSM
            prohibited dual diagnosis, which means an entire generation of AuDHD
            people were either diagnosed with one condition and had the other
            missed, or received neither.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The AuDHD experience is not simply autism plus ADHD. The two conditions
            interact. Autistic need for predictability and routine conflicts with
            ADHD-driven impulsivity and novelty-seeking. Autistic preference for
            completing a task thoroughly before moving on conflicts with ADHD
            time-blindness and task-switching difficulty. The demand avoidance that
            accompanies many autistic profiles can be amplified by ADHD
            procrastination in ways that make task initiation genuinely
            incapacitating.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Support systems built for ADHD often do not account for the autistic
            dimension. Support systems built for autism often do not account for the
            ADHD dimension. AuDHD people frequently fall through the gap between
            both, receiving partial support at best.
          </p>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.25rem" }}>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Hourman for AuDHD time management
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Hourman provides external time structure that accounts for both
                autistic transition difficulty and ADHD time-blindness. It does not
                create punishing schedules that will be abandoned &mdash; it
                provides flexible anchoring that can be adjusted when the day does
                not go to plan, without shame and without having to restart from
                zero.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Pioneer for AuDHD momentum
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Pioneer is direct, action-oriented, and shame-free. For AuDHD
                people stuck in the gap between wanting to act and being unable to
                initiate, Pioneer asks one question: where do you want to start?
                Not why haven&apos;t you started, not what is wrong with you &mdash;
                just: where do you want to start?
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD,
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                Scholar for AuDHD hyperfocus
              </h3>
              <p
                style={{
                  lineHeight: 1.75,
                  color: TEXT,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                AuDHD hyperfocus can be intense and productive when channelled into
                a special interest or deeply engaging task. Scholar supports that
                depth without interrupting it. When the hyperfocus ends, Scholar
                can help with the re-orientation: what was accomplished, what was
                the thread, where to pick up next time.
              </p>
            </div>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Section 10 — Sovereign Memory */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "0.75rem" }}>
            How does Sovereign Memory mean autistic users never have to re-explain
            their needs?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            One of the most exhausting aspects of seeking support as an autistic
            adult is the repetition. Every new therapist, every new GP, every new
            workplace, every new support structure requires the same explanation:
            here is how I communicate, here is what I find difficult, here is what
            helps, here is what makes things worse. The cognitive and emotional cost
            of this repetition is significant. And the risk of the explanation going
            wrong &mdash; of being misread, of having your needs minimised or
            dismissed &mdash; is real and often experienced.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK&apos;s Sovereign Memory means you explain once. The context you
            build &mdash; your communication preferences, your sensory profile,
            your known triggers, your preferred level of directness, your special
            interests, your current life situation &mdash; is held permanently and
            privately. Every subsequent conversation begins from that foundation
            rather than from a blank slate.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This is not just convenience. For autistic adults who have spent years
            being misunderstood by systems that were not built for them, having a
            companion that genuinely remembers who you are is a different kind of
            relationship. The memory is yours. It is not used to train other models.
            It is not shared with third parties. It exists to serve your continuity.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
              <strong style={{ color: GOLD }}>Your memory stays with you:</strong>{" "}
              MEOK&apos;s memory is portable. If you change device, reinstall the
              app, or upgrade your subscription, your memory comes with you. No
              support infrastructure should require you to rebuild your context from
              scratch. Memory portability is a principle, not a feature.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* Comparison table */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "1rem" }}
          >
            MEOK vs. standard AI tools for autistic adults
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    Standard AI
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      backgroundColor: CARD,
                      color: GOLD,
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Communication style",
                    "Neurotypical defaults — hedged, softened, indirect",
                    "Configurable — direct, literal, no social padding",
                  ],
                  [
                    "Persistent memory",
                    "Resets every session",
                    "Sovereign Memory — holds your context permanently",
                  ],
                  [
                    "Sensory design",
                    "Animations, notifications, engagement mechanics",
                    "Reduce-motion, no push notifications, no streaks",
                  ],
                  [
                    "Engagement manipulation",
                    "Designed for maximum engagement time",
                    "No streaks, no guilt mechanics, no urgency engineering",
                  ],
                  [
                    "Social advice",
                    "May suggest practising neurotypical social skills",
                    "Never tells you to mask harder or try harder socially",
                  ],
                  [
                    "Special interests",
                    "May redirect to &ldquo;balanced&rdquo; topics",
                    "Scholar engages with full depth — no redirection",
                  ],
                  [
                    "Executive function",
                    "Generic productivity tips",
                    "Hourman provides tailored structure without shame",
                  ],
                  [
                    "Late diagnosis support",
                    "Limited contextual awareness",
                    "Healer supports identity reconstruction and grief processing",
                  ],
                  [
                    "Data use",
                    "Conversations may train model",
                    "Your data is never used for training",
                  ],
                ].map(([feature, standard, meok], i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor:
                        i % 2 === 0 ? "transparent" : CARD,
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: TEXT,
                        fontWeight: 600,
                      }}
                      dangerouslySetInnerHTML={{ __html: feature }}
                    />
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: MUTED,
                      }}
                      dangerouslySetInnerHTML={{ __html: standard }}
                    />
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: TEXT,
                      }}
                      dangerouslySetInnerHTML={{ __html: meok }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* FAQ */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{ fontSize: "1.45rem", color: GOLD, marginBottom: "1.5rem" }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {[
              {
                q: "How can AI help autistic adults with communication?",
                a: "AI can help autistic adults by communicating in explicit, literal language without neurotypical subtext or hidden social meaning. It never uses sarcasm without flagging it, never implies something it does not say directly, and never requires the autistic person to decode what is really meant. MEOK can be configured to maintain this communication style permanently through Sovereign Memory.",
              },
              {
                q: "What is autistic masking and how does it cause burnout?",
                a: "Autistic masking is the process of suppressing or hiding autistic traits to appear neurotypical. It involves scripting social responses, suppressing stimming, and monitoring yourself continuously for incorrect behaviour. Decades of masking is directly linked to autistic burnout &mdash; a state of profound exhaustion that can take months or years to recover from. MEOK requires no masking and creates no social performance pressure.",
              },
              {
                q: "What is AuDHD and why does it need specific support?",
                a: "AuDHD describes the co-occurrence of autism and ADHD, which interact in complex ways: autistic need for predictability conflicts with ADHD impulsivity; autistic transition difficulty compounds ADHD time-blindness. Generic support rarely addresses this intersection. MEOK&apos;s archetype system lets AuDHD users draw on Hourman for structure, Pioneer for momentum, and Scholar for depth depending on what the day requires.",
              },
              {
                q: "How does sovereign memory help autistic people?",
                a: "Autistic adults carry detailed knowledge of their own needs, triggers, communication preferences, and sensory sensitivities that took years to understand. Sovereign Memory means MEOK holds this context permanently. You never have to re-explain that you prefer blunt communication, that certain topics cause dysregulation, or that you need step-by-step instructions rather than vague guidance.",
              },
              {
                q: "Can AI help autistic adults with employment challenges?",
                a: "Yes. AI can help by scripting emails and workplace communication, preparing for difficult conversations, debriefing after confusing interactions, and identifying patterns in what workplace conditions are sustainable. MEOK will never tell autistic people that the solution to employment difficulty is to mask better or to work harder at social performance.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    color: GOLD,
                    marginBottom: "0.6rem",
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </h3>
                <p
                  style={{
                    lineHeight: 1.75,
                    color: TEXT,
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: a }}
                />
              </div>
            ))}
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* CTA */}
        <section
          style={{
            backgroundColor: CARD,
            borderRadius: "12px",
            padding: "2.5rem 2rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.6rem",
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            A companion that communicates the way you need
          </h2>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.75,
              marginBottom: "1.75rem",
              maxWidth: "540px",
              margin: "0 auto 1.75rem",
            }}
          >
            Direct language. Persistent memory. No masking required. No social
            performance. No engagement manipulation. MEOK was built for brains
            like yours.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.85rem 2.25rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Meet your MEOK companion
          </Link>
          <p
            style={{
              color: MUTED,
              fontSize: "0.8rem",
              marginTop: "1rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Free to start &mdash; no credit card required
          </p>
        </section>

        {/* Footer nav */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            fontSize: "0.85rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Link href="/blog/meok-for-neurodivergent" style={{ color: MUTED, textDecoration: "none" }}>
            MEOK for neurodivergent people
          </Link>
          <Link href="/blog/ai-for-adhd-women" style={{ color: MUTED, textDecoration: "none" }}>
            AI for women with ADHD
          </Link>
          <Link href="/blog/ai-companion-for-autism" style={{ color: MUTED, textDecoration: "none" }}>
            AI companion for autism
          </Link>
          <Link href="/blog/sovereign-ai-explained" style={{ color: MUTED, textDecoration: "none" }}>
            Sovereign AI explained
          </Link>
          <Link href="/blog/what-is-sovereign-ai" style={{ color: MUTED, textDecoration: "none" }}>
            What is sovereign AI?
          </Link>
        </div>
      </main>
    </div>
  );
}
