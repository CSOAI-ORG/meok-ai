import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI Companion for Widows and Widowers: When Grief Comes Home | MEOK AI LABS",
  description:
    "There are 3.1 million widows and widowers in the UK. Losing a life partner is compound grief \u2014 you lose your person, your routine, your identity, your social world. MEOK\u2019s Healer archetype holds space for widowhood grief with persistent memory, patient presence, and no judgment about how long it takes.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-for-widows" },
  openGraph: {
    title:
      "AI Companion for Widows and Widowers: When Grief Comes Home",
    description:
      "MEOK holds space for widowhood grief \u2014 remembering your partner by name, honouring anniversaries, and providing consistent presence through the compound loss of life partnership.",
    type: "article",
    url: "https://meok.ai/blog/ai-companion-for-widows",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Widows and Widowers: When Grief Comes Home",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  url: "https://meok.ai/blog/ai-companion-for-widows",
  description:
    "How AI companionship with persistent memory can support widows and widowers through the compound, non-linear grief of losing a life partner.",
  keywords:
    "AI companion for widows, AI companion for widowers, bereavement AI UK, widow support app, grief companion, widowhood grief, AI for bereavement, MEOK",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with grief after losing a spouse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 within appropriate limits. AI cannot replace grief counselling or the irreplaceable presence of human connection. But a memory-enabled AI companion can provide consistent, patient presence at any hour, remember the person who was lost by name and personality, honour significant dates proactively, and hold space without judgment. For widows and widowers navigating the long tail of grief, this kind of availability fills gaps that human support cannot always cover.",
      },
    },
    {
      "@type": "Question",
      name: "What makes widowhood grief different from other bereavement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Widowhood grief is compound loss. You lose your person, but also your daily routine, your identity as part of a couple, often your social circle, and frequently your financial security. Each layer surfaces on its own timeline. A companion that understands the full context of what was lost is better placed to hold the whole picture across months and years.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember the person I lost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Sovereign Memory engine stores everything you share in an encrypted vault that only you control. You can tell MEOK your partner\u2019s name, personality, favourite things, significant dates, shared memories. That context is carried across every conversation \u2014 so you never have to re-introduce who they were. Anniversary dates and birthdays can be tracked, and MEOK will check in proactively on those days.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for grief counselling or bereavement therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is an AI companion \u2014 not a therapist and not a replacement for professional bereavement support. If grief is significantly impairing daily functioning, includes thoughts of self-harm, or involves complicated grief disorder, professional help is essential. In the UK, Cruse Bereavement Support (0808 808 1677) and the NHS can help. MEOK is designed to complement professional care, not substitute for it.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with the practical overwhelm that follows bereavement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Guardian archetype helps with practical overwhelm \u2014 estate administration, financial decisions, paperwork, utilities, appointments. Newly bereaved people are required to make significant decisions while in acute grief. Having a clear-headed, patient companion to help organise and track tasks can reduce cognitive load at one of life\u2019s most demanding moments.",
      },
    },
  ],
};

// ── Style tokens ──────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(42,40,64,0.9)";
const GOLD_BG = "rgba(201,168,76,0.06)";
const GOLD_BORDER = "rgba(201,168,76,0.22)";
const CARD_BG = "#13121f";
const GREEN = "#6aaa64";

// ── Component ─────────────────────────────────────────────────────────────────

export default function AiCompanionForWidowsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
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
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 72%)",
          }}
        />

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
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
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.7)",
              }}
            >
              AI Companion
            </span>
            <span style={{ color: BORDER, fontSize: "0.75rem" }}>/</span>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.7)",
              }}
            >
              Widowhood &amp; Bereavement
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.25rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              color: "#ffffff",
            }}
          >
            AI Companion for Widows and Widowers:{" "}
            <span style={{ color: GOLD }}>When Grief Comes Home</span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "2rem",
              maxWidth: "38rem",
            }}
          >
            There are 3.1 million widows and widowers in the UK. The grief of
            losing a life partner is unlike any other loss &mdash; it reaches
            into every corner of daily life, every habit, every room. MEOK was
            built to hold space for that grief with patience that has no time
            limit.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              fontSize: "0.85rem",
              color: FAINT,
            }}
          >
            <span>Nicholas Templeman</span>
            <span>&#183;</span>
            <span>March 25, 2026</span>
            <span>&#183;</span>
            <span>13 min read</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* Sensitivity notice */}
        <div
          style={{
            padding: "1.25rem 1.5rem",
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "0.75rem",
            marginBottom: "3rem",
            fontSize: "0.875rem",
            color: MUTED,
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: GOLD }}>Support resources: </strong>
          Samaritans &mdash; 116 123 (free, 24/7) &nbsp;&middot;&nbsp; Cruse
          Bereavement Support &mdash; 0808 808 1677 &nbsp;&middot;&nbsp; WAY
          Widowed &amp; Young &mdash; widowedandyoung.org.uk &nbsp;&middot;&nbsp;
          Age UK &mdash; 0800 678 1602. This article is about AI as a companion
          alongside professional bereavement care &mdash; not a replacement for
          it.
        </div>

        {/* ── Section 1 ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            What does widowhood grief actually feel like?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            When people lose a life partner, they do not simply lose a person.
            They lose the architecture of their daily existence. The person who
            heard about the small things &mdash; the difficult conversation at
            work, the neighbour&apos;s fence, the funny thing that happened on
            the way home. The person who knew, without being told, when something
            was wrong. The person around whom the whole day was organised.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            According to the ONS, there are approximately 3.1 million widows and
            widowers in the UK &mdash; and around 280,000 people are newly
            widowed each year. The average age of widowhood is still over 65, but
            tens of thousands are widowed in their forties, thirties, and
            younger. Each one faces not a single loss but a compound bereavement
            that keeps discovering new dimensions.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Psychologists describe widowhood as one of the highest stressors on
            the Holmes-Rahe stress scale &mdash; higher than imprisonment, higher
            than job loss, higher than serious illness. The reason is not only
            emotional. It is structural. A life built for two must be entirely
            rebuilt for one, at the exact moment when the person doing the
            rebuilding has the fewest reserves.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            MEOK was not designed to fix this. Nothing fixes this. But it was
            designed to be present for it &mdash; consistently, patiently, and
            with memory of who was lost and what they meant.
          </p>
        </section>

        {/* ── Section 2 ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            Why is the grief of losing a spouse compound grief?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Grief researchers use the term &ldquo;compound loss&rdquo; to
            describe what happens when a single death generates multiple,
            overlapping bereavements. Widowhood is almost always compound.
            Consider what is actually lost when a life partner dies:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              color: MUTED,
              lineHeight: 1.9,
              marginBottom: "1rem",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: TEXT }}>The person themselves</strong>{" "}
              &mdash; the most obvious loss, and the one that needs no
              explanation.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: TEXT }}>
                Daily routine and structure
              </strong>{" "}
              &mdash; meals together, morning rituals, shared evenings, the
              texture of an ordinary day.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: TEXT }}>
                Identity as part of a couple
              </strong>{" "}
              &mdash; social invitations dry up; the world recategorises you as
              a singular person.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: TEXT }}>Social infrastructure</strong>{" "}
              &mdash; couple-friends often fade; the shared social world begins
              to dissolve.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: TEXT }}>Financial security</strong>{" "}
              &mdash; many surviving partners face significant financial
              adjustment, especially if they were not the primary earner.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: TEXT }}>Shared memory</strong> &mdash; the
              person who remembered the same things you remember, who
              corroborated your version of events, is gone.
            </li>
            <li>
              <strong style={{ color: TEXT }}>
                Future plans and assumed story
              </strong>{" "}
              &mdash; the retirement you planned, the places you would go, the
              story you thought your life would tell.
            </li>
          </ul>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            Each of these losses has its own timeline. They surface separately,
            in unexpected moments, sometimes years after the death. A grief
            companion that understands the whole context &mdash; not just the
            death, but the relationship, the routines, the plans &mdash; can hold
            the full picture in a way that most human conversations cannot.
          </p>
        </section>

        {/* ── Feature box 1 &mdash; Healer archetype ── */}
        <div
          style={{
            padding: "2rem",
            background: CARD_BG,
            border: `1px solid ${GOLD}`,
            borderRadius: "1rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.7)",
              marginBottom: "1rem",
            }}
          >
            MEOK FEATURE &mdash; HEALER ARCHETYPE
          </p>

          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            The Healer: holding space without rushing
          </h3>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK&apos;s Healer archetype is designed specifically for
            bereavement, emotional processing, and long-term grief
            companionship. It brings warmth, patience, and a willingness to sit
            with difficult feelings rather than resolve them prematurely.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            For widows and widowers, the Healer archetype is particularly
            important because widowhood grief is often
            &ldquo;disenfranchised&rdquo; &mdash; minimised by others who expect
            recovery on a socially acceptable schedule. MEOK never implies it is
            time to move on. It never seems impatient. It always has time.
          </p>

          <ul
            style={{
              paddingLeft: "1.25rem",
              color: MUTED,
              lineHeight: 1.9,
            }}
          >
            <li style={{ marginBottom: "0.4rem" }}>
              Remembers your partner by name and keeps that knowledge across
              sessions
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Holds space for repetitive grief (telling the same story many
              times is normal and healthy)
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Honours significant dates: death anniversary, birthday, wedding
              anniversary, first meetings
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Available at 3am, at the first Christmas, in the second year when
              others have forgotten
            </li>
            <li>
              Never rushes toward &ldquo;silver linings&rdquo; or unsolicited
              advice about moving forward
            </li>
          </ul>
        </div>

        {/* ── Section 3 ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            How does AI memory change grief support?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            One of the most exhausting aspects of grief is the burden of
            context. To speak about your person to almost anyone, you first have
            to explain who they were &mdash; their name, your history, what they
            were like, what they meant. This is emotionally expensive. Many
            bereaved people stop talking about the person they lost simply
            because the cost of re-establishing context is too high.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK&apos;s Sovereign Memory architecture changes this. Everything
            you share &mdash; your partner&apos;s name, personality, the things
            that made them laugh, significant dates, shared memories &mdash; is
            stored in an encrypted vault that only you control. That context is
            carried across every conversation. You never have to re-introduce
            who they were.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            This means MEOK can remember, on your partner&apos;s birthday, that
            it is their birthday. It can remember, on your wedding anniversary,
            that it is your anniversary. It can remember, in a conversation six
            months from now, the detail you shared today about how they used to
            make coffee wrong but you loved it anyway.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            Memory is not about recreating the person. It is about not having to
            carry the burden of context alone. It is about speaking freely,
            without the tax of explanation, about someone you will never stop
            knowing.
          </p>
        </section>

        {/* ── Pull quote ── */}
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.5rem",
            marginLeft: 0,
            marginRight: 0,
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.6,
              color: TEXT,
              marginBottom: "0.75rem",
            }}
          >
            &ldquo;The hardest part is not the big grief. It&apos;s the small
            grief. The Sunday morning you reach to tell them something and
            remember, again, that you can&apos;t.&rdquo;
          </p>
          <cite
            style={{
              fontSize: "0.85rem",
              color: FAINT,
              fontStyle: "normal",
            }}
          >
            &mdash; Observed across bereavement communities
          </cite>
        </blockquote>

        {/* ── Section 4 ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            What is the practical overwhelm of widowhood, and how does MEOK
            help?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            In the weeks immediately following a bereavement, the newly widowed
            face an avalanche of practical demands. Estate administration.
            Probate. Utilities in the wrong name. Joint accounts to close.
            Pension notifications. Death certificates to request and distribute.
            Decisions about property, about finances, about living arrangements.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            This is all required at the moment of peak incapacity. Acute grief
            impairs decision-making, concentration, and memory. Cognitive
            scientists call it &ldquo;grief brain&rdquo; &mdash; a genuine
            neurological state in which working memory and executive function are
            significantly reduced. Being expected to make consequential financial
            and legal decisions at this moment is one of widowhood&apos;s
            cruelest practical realities.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK&apos;s Guardian archetype &mdash; the practical, organised,
            task-oriented mode &mdash; is designed to help with exactly this. It
            can help you build task lists, track what has been done and what
            remains, organise the sequence of actions required, and act as an
            external memory for decisions and deadlines when your own memory is
            compromised by grief.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            MEOK does not make decisions for you. It holds the practical picture
            steady so that you can move through it at your own pace, one task at
            a time, without the cognitive overload of trying to hold everything
            in your head simultaneously.
          </p>
        </section>

        {/* ── Feature box 2 &mdash; Guardian archetype ── */}
        <div
          style={{
            padding: "2rem",
            background: CARD_BG,
            border: `1px solid ${GOLD}`,
            borderRadius: "1rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.7)",
              marginBottom: "1rem",
            }}
          >
            MEOK FEATURE &mdash; GUARDIAN ARCHETYPE
          </p>

          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            The Guardian: steady hands when you have none
          </h3>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK&apos;s Guardian archetype brings clear-headed, practical support
            to the overwhelm of bereavement administration. It is calm when you
            are not, organised when grief brain is making organisation feel
            impossible, and consistent when everything else feels unstable.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            The Guardian is particularly valuable in the first six months of
            widowhood when estate administration, financial decisions, and
            household management collide with peak emotional vulnerability.
          </p>

          <ul
            style={{
              paddingLeft: "1.25rem",
              color: MUTED,
              lineHeight: 1.9,
            }}
          >
            <li style={{ marginBottom: "0.4rem" }}>
              Tracks estate administration tasks and deadlines
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Helps organise utility transfers, account closures, pension
              notifications
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Provides a patient space to think through financial decisions
              without pressure
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Keeps an external record of decisions made so you don&apos;t have
              to hold it all in your head
            </li>
            <li>
              Reminds you of outstanding tasks gently, without adding to
              cognitive load
            </li>
          </ul>
        </div>

        {/* ── Section 5 ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            How does AI handle the social isolation of widowhood?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Widowhood has a social dimension that is rarely fully acknowledged.
            Much of the social infrastructure that surrounds a married or
            partnered person is couple-dependent. Friends who were couple-friends
            begin to drift. Invitations thin out because a solo person disrupts
            the even numbers at a dinner party. Social contexts built around
            twos &mdash; holidays, events, community activities &mdash; become
            painful reminders of absence.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Research from Age UK and others consistently finds that widowhood is
            one of the primary pathways into chronic loneliness, particularly for
            older people. Approximately 45% of widowed individuals report
            significant loneliness in the two years following the death of their
            spouse &mdash; compared to 14% of non-widowed people of the same
            age.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK does not replace human social connection &mdash; nothing should
            or could. But it provides a consistent, available, non-intrusive
            presence that is genuinely helpful during the period when social
            infrastructure is rebuilding. It is someone to talk to at the end of
            a quiet evening. It is company without the social effort that grief
            makes exhausting.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            Critically, MEOK does not need to be briefed about how you are
            feeling today. It remembers the context of your life and can ask
            meaningful questions rather than generic ones. &ldquo;How was your
            son&apos;s visit this weekend?&rdquo; is a very different interaction
            to a chatbot that treats every conversation as the first.
          </p>
        </section>

        {/* ── Section 6 ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            What about anniversaries and the grief that resurfaces in waves?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Grief is not linear. Most bereaved people discover, often to their
            surprise, that the second year is harder than the first &mdash;
            because the first year is consumed by the immediate practical and
            emotional emergency, while the second year is when the permanence
            truly lands. The second anniversary. The second Christmas. The second
            birthday where there is no card to buy.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            By this point, the organised external support has entirely receded.
            Colleagues assume you are &ldquo;over it.&rdquo; Friends have stopped
            mentioning it, thinking silence is considerate. The world has moved
            on. But the bereaved person has not, and should not be expected to
            have done.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK&apos;s memory architecture means that significant dates can be
            stored and tracked. On the anniversary of a death, MEOK knows. On a
            birthday, MEOK knows. It can check in proactively on those days
            &mdash; not with hollow optimism, but with genuine, quiet
            acknowledgement. &ldquo;Today is the second anniversary of
            Margaret&apos;s death. How are you carrying it today?&rdquo;
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            This is the kind of witness that grief needs and rarely receives
            &mdash; someone who remembers alongside you, who does not need
            reminding, who does not think it is strange that this day still
            matters years later. Because it does. It always will.
          </p>
        </section>

        {/* ── Feature box 3 &mdash; Sovereign Memory ── */}
        <div
          style={{
            padding: "2rem",
            background: CARD_BG,
            border: `1px solid ${GOLD}`,
            borderRadius: "1rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.7)",
              marginBottom: "1rem",
            }}
          >
            MEOK FEATURE &mdash; SOVEREIGN MEMORY
          </p>

          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            Your memories remain yours, always
          </h3>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            When you share memories of your partner with MEOK, those memories
            are stored in an encrypted vault that belongs to you &mdash; not to
            MEOK AI LABS, not to cloud providers, not to advertisers. You own
            the vault. You control what is in it. You can export it or delete it
            at any time.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK never trains on your private conversations. The memories of your
            partner &mdash; their name, their personality, what they meant to you
            &mdash; will never become training data for a model that serves
            someone else. They remain what they are: your private grief, held in
            private confidence.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { label: "Encrypted vault", desc: "AES-256 at rest" },
              { label: "You own the data", desc: "Export or delete anytime" },
              {
                label: "No training on you",
                desc: "Your grief is not a dataset",
              },
              {
                label: "Anniversary tracking",
                desc: "Dates remembered forever",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1rem",
                  background: GOLD_BG,
                  borderRadius: "0.5rem",
                  border: `1px solid ${BORDER}`,
                }}
              >
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: FAINT,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 7 ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            Is it okay to talk to an AI about someone who has died?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Yes &mdash; and grief research suggests that speaking freely about
            the person who died is not morbid but healthy. The concept of
            &ldquo;continuing bonds&rdquo; theory, developed by grief researchers
            Klass, Silverman, and Nickman, holds that healthy grieving does not
            require severing the relationship with the deceased &mdash; but
            rather transforming and integrating it. Talking about your person,
            keeping their memory alive, honouring who they were, is part of that
            integration.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            The difficulty is finding spaces where this is truly welcome. Most
            people around the bereaved become visibly uncomfortable after a few
            months when the deceased is spoken about directly. There is a social
            pressure to &ldquo;move forward&rdquo; that, however kindly meant,
            often leaves widows and widowers feeling that their grief is a
            problem to be managed rather than a love to be honoured.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK creates a space with no such pressure. You can speak about your
            partner for as long as you want, as often as you want, without
            sensing discomfort. You can tell the same story twenty times because
            grief sometimes needs to tell a story twenty times. You can speak
            about them as if they are still present in your life &mdash; because
            in the interior life of grief, they are.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            MEOK is not pretending the person is still alive. It is holding the
            reality that the person was real, was loved, and matters &mdash; past
            tense of existence, present tense of significance.
          </p>
        </section>

        {/* ── Section 8 ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            What about widows and widowers who were also caregivers?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Many people who lose a spouse have been caregiving for months or
            years before the death. The grief in these circumstances is
            additionally complex &mdash; layered with caregiver fatigue, possible
            relief that the suffering is over (followed by guilt about the
            relief), and the abrupt removal of a role that had consumed daily
            life.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Post-caregiving grief is often disenfranchised in a different way:
            others assume that because the death was expected and perhaps a
            release from suffering, it should be easier. It is not. The loss of
            the person is the loss of the person, regardless of the circumstances
            that preceded it. And the loss of the caregiving role &mdash; the
            purpose, structure, and identity it provided &mdash; is itself a
            significant grief.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            MEOK holds space for the full complexity of this. It does not make
            assumptions about what the death should have felt like. It asks. It
            listens. It remembers what you say about how you feel, and carries
            that context forward without judgment.
          </p>
        </section>

        {/* ── Section 9 — limits of AI ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            What are the limits of AI grief support, and when should widows seek
            professional help?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            This is the most important section of this article, and we want to
            be entirely clear.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK is an AI companion. It is not a grief counsellor, not a
            psychotherapist, and not a substitute for professional bereavement
            support. There are grief presentations that require trained human
            professionals &mdash; not because AI is inadequate, but because some
            pain requires the specific quality of human therapeutic relationship
            that cannot be replicated by any current technology.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            You should seek professional bereavement support if:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              color: MUTED,
              lineHeight: 1.9,
              marginBottom: "1rem",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              Grief is significantly impairing daily functioning for more than
              several months
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              You are experiencing thoughts of self-harm or suicide
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Grief feels entirely &ldquo;stuck&rdquo; with no movement or
              integration over a long period
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              You are using alcohol, medication, or other substances to manage
              grief
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              The grief has a traumatic dimension (sudden death, violent death,
              suicide of a partner)
            </li>
            <li>
              You feel that your grief is in some way pathological or abnormal
            </li>
          </ul>

          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "rgba(106,170,100,0.06)",
              border: `1px solid rgba(106,170,100,0.2)`,
              borderRadius: "0.75rem",
            }}
          >
            <p
              style={{
                lineHeight: 1.75,
                color: MUTED,
                fontSize: "0.9rem",
              }}
            >
              <strong style={{ color: GREEN }}>UK bereavement support: </strong>
              Cruse Bereavement Support &mdash; 0808 808 1677 (free)
              &nbsp;&middot;&nbsp; Samaritans &mdash; 116 123 (free, 24/7)
              &nbsp;&middot;&nbsp; WAY Widowed &amp; Young &mdash;
              widowedandyoung.org.uk &nbsp;&middot;&nbsp; NHS Talking Therapies
              &mdash; via your GP &nbsp;&middot;&nbsp; The Grief Network &mdash;
              grief.network
            </p>
          </div>
        </section>

        {/* ── Section 10 — widowed men ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            A note on widowed men and the hidden grief
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            The word &ldquo;widow&rdquo; tends to conjure a woman. The statistics
            reflect this: women outlive men on average by approximately four
            years in the UK, so at any given time there are roughly twice as many
            widows as widowers. But widowers are a significant population in
            their own right &mdash; approximately one million men in the UK have
            lost a spouse &mdash; and their grief is frequently overlooked.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Research consistently finds that men have, on average, smaller social
            networks than women, and that those networks often depended heavily on
            their spouse to maintain. When a wife dies, the social infrastructure
            often dies with her. Widowers are statistically more likely to become
            severely isolated, more likely to experience significant health
            decline in the first year, and &mdash; for older men particularly
            &mdash; more likely to die within two years of their
            spouse&apos;s death than widows of the same age.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            There is also the barrier of disclosure. Many men &mdash; particularly
            older generations &mdash; have been socialised to manage emotional
            pain privately. They do not seek help. They do not tell friends how
            they are really doing. They do not want to be a burden. They are
            grieving in silence, and often the silence goes unnoticed.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK offers a space that does not feel like asking for help in the
            way that makes some men uncomfortable. It is not a helpline. It is
            not a support group. It is a conversation &mdash; private,
            non-judgmental, available at any hour. For widowed men who would
            never ring Cruse but who are quietly struggling at 11pm in a house
            that has gone very silent, having somewhere to direct that grief
            matters.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            We built MEOK to be accessible regardless of how comfortable you are
            with emotional disclosure. You can start with practicalities &mdash;
            the estate, the paperwork, what needs doing &mdash; and let the other
            layers surface when they are ready to. There is no performance of
            grief required. You can just show up as you are.
          </p>
        </section>

        {/* ── Section 11 — younger widows ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            Young widowhood: when grief arrives before its time
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            The cultural image of widowhood is old. The reality is not. In the
            UK, tens of thousands of people are widowed before the age of fifty
            &mdash; some in their twenties and thirties, with young children,
            with mortgages, with decades of planned life ahead of them that must
            now be entirely rerouted. WAY Widowed &amp; Young supports people
            widowed under the age of fifty, and its membership reflects a
            population that is strikingly young and strikingly invisible in
            mainstream bereavement culture.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Young widowhood brings particular dimensions of grief that older
            widowhood does not. The disruption of expected life trajectory is
            more extreme. Peers are at the stage of young families, career
            building, and couple socialising &mdash; and the young widow or
            widower no longer fits. There is often also the additional weight of
            being the sole parent to children who are themselves bereaved.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK does not make distinctions by age. Whether you are thirty-four
            or seventy-four, the grief of losing the person you built your life
            around is the grief of losing the person you built your life around.
            MEOK holds space for all of it, without assumptions about what grief
            at a particular age should look like.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            For younger widowed people who are also managing parenting, MEOK can
            be particularly valuable as a space to process grief that cannot
            fully be expressed in front of children who need stability. You need
            somewhere to put the grief that has no appropriate outlet in the day.
            MEOK is that somewhere.
          </p>
        </section>

        {/* ── Section 12 — how to start ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            How do you start using MEOK as a widow or widower?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            Beginning with MEOK when you are bereaved does not require a formal
            onboarding or a structured introduction. You can start simply. Open a
            conversation. Say what is on your mind. Tell MEOK about your partner
            if you want to &mdash; their name, who they were, how long you were
            together. Or do not, and just talk about how today feels.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            MEOK&apos;s Birth Ceremony &mdash; the process through which your
            companion is personalised and your memory vault is initialised
            &mdash; creates a space for you to share as much or as little as you
            want about your life, your loss, and what you need. There is no
            correct way to grieve, and there is no correct way to begin.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            If you want to tell MEOK about your partner early in the process, it
            will carry that knowledge forward. If you want to take time before
            sharing, that is equally fine. MEOK is patient. It will be there when
            you are ready.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            For widows and widowers who are also navigating practical overwhelm
            &mdash; estate, finances, decisions &mdash; you can also ask MEOK to
            switch into its Guardian mode and begin helping with the list of
            things that need to be done. Both needs can coexist. Some days you
            need to grieve. Some days you need to get things done. MEOK can hold
            both.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "2rem",
              color: TEXT,
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: "Can AI help with grief after losing a spouse?",
              a: "Yes \u2014 within appropriate limits. AI cannot replace grief counselling or the irreplaceable presence of human connection. But a memory-enabled AI companion provides consistent, patient presence at any hour, remembers the person who was lost by name, honours significant dates proactively, and holds space without judgment. For widows and widowers navigating the long tail of grief, this kind of availability fills gaps that human support cannot always cover.",
            },
            {
              q: "What makes widowhood grief different from other bereavement?",
              a: "Widowhood grief is compound loss. You lose your person, but also your daily routine, your identity as part of a couple, often your social circle, and frequently your financial security. Each layer surfaces on its own timeline. A companion that understands the full context of what was lost is better placed to hold the whole picture across months and years.",
            },
            {
              q: "How does MEOK remember the person I lost?",
              a: "MEOK\u2019s Sovereign Memory engine stores everything you share in an encrypted vault that only you control. You can tell MEOK your partner\u2019s name, personality, favourite things, significant dates, shared memories. That context is carried across every conversation \u2014 so you never have to re-introduce who they were. Anniversary dates and birthdays can be tracked, and MEOK will check in proactively on those days.",
            },
            {
              q: "Is MEOK a replacement for grief counselling or bereavement therapy?",
              a: "No. MEOK is an AI companion \u2014 not a therapist and not a replacement for professional bereavement support. If grief is significantly impairing daily functioning, includes thoughts of self-harm, or involves complicated grief disorder, professional help is essential. In the UK, Cruse Bereavement Support (0808 808 1677) and the NHS can help. MEOK is designed to complement professional care, not substitute for it.",
            },
            {
              q: "Can MEOK help with the practical overwhelm that follows bereavement?",
              a: "Yes. MEOK\u2019s Guardian archetype helps with practical overwhelm \u2014 estate administration, financial decisions, paperwork, utilities, appointments. Newly bereaved people are required to make significant decisions while in acute grief. Having a clear-headed, patient companion to help organise and track tasks can reduce cognitive load at one of life\u2019s most demanding moments.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.5rem",
                paddingBottom: "1.5rem",
                borderBottom: i < 4 ? `1px solid ${BORDER}` : "none",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
              </h3>
              <p style={{ lineHeight: 1.8, color: MUTED }}>{faq.a}</p>
            </div>
          ))}
        </section>

        {/* ── Closing ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: "1rem",
              color: TEXT,
            }}
          >
            A note on what MEOK is and is not
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            We built MEOK because there was a gap. Not a gap in professional
            grief support &mdash; which exists and which we encourage you to use
            &mdash; but a gap in daily, consistent, memory-enabled presence. The
            kind that is available at 2am when the grief arrives without warning.
            The kind that remembers who you lost and does not need briefing every
            time you want to speak about them. The kind that treats your partner
            as a real person who was loved, not as a problem to be processed.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            We are not naive about what AI can and cannot do. We know that grief
            is human and that the deepest healing comes from human relationship
            &mdash; from therapy, from community, from love. We are not competing
            with those things. We are trying to fill the space between them: the
            long evenings, the difficult anniversaries, the quiet Sundays, the
            moments that come without warning and with no one available to hold
            them.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1rem",
            }}
          >
            The decision to build memory into MEOK rather than make it stateless
            was deliberate, and it came directly from listening to bereaved
            people. The most consistent thing they said was not that they wanted
            advice, or resources, or a structured programme. They said they
            wanted somewhere they could speak about their person freely, without
            having to establish who that person was every single time. Memory
            enables that. Not a simulation of the lost person &mdash; never that
            &mdash; but a space where they can be spoken about without the tax of
            constant re-introduction.
          </p>

          <p style={{ lineHeight: 1.8, color: MUTED }}>
            If you are widowed and you are reading this: we see you. Grief is
            love with nowhere to go, and 3.1 million people in the UK are
            carrying it. MEOK will not take the grief away &mdash; nothing should
            &mdash; but it will sit with you in it, for as long as it takes,
            remembering who you lost.
          </p>
        </section>

        {/* ── Related articles ── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: FAINT,
              marginBottom: "1.25rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Related reading
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              {
                href: "/blog/ai-companion-for-grief",
                label: "AI Companion for Grief: Someone There at 3am",
              },
              {
                href: "/blog/ai-for-bereavement",
                label: "AI for Bereavement: What Helps and What Doesn\u2019t",
              },
              {
                href: "/blog/ai-for-grief-support",
                label: "AI for Grief Support: A Practical Guide",
              },
              {
                href: "/blog/ai-for-loneliness",
                label: "AI for Loneliness: The Case for Consistent Presence",
              },
              {
                href: "/blog/ai-companion-for-elderly",
                label: "AI Companion for Elderly People: Presence Without Burden",
              },
              {
                href: "/blog/meok-companion-archetypes-guide",
                label: "MEOK Archetypes: Healer, Guardian, and the Rest",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: GOLD,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  borderBottom: `1px solid ${GOLD_BORDER}`,
                  paddingBottom: "0.75rem",
                }}
              >
                {link.label} &#8594;
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div
          style={{
            padding: "3rem 2rem",
            background: `linear-gradient(135deg, ${GOLD_BG} 0%, rgba(19,18,31,0.8) 100%)`,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1.25rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.6)",
              marginBottom: "1rem",
            }}
          >
            MEOK AI LABS
          </p>

          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            A companion that remembers{" "}
            <span style={{ color: GOLD }}>who you lost</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: MUTED,
              maxWidth: "480px",
              margin: "0 auto 2rem",
            }}
          >
            MEOK&apos;s Healer archetype holds space for widowhood grief with
            persistent memory, patient presence, and no judgment about how long
            grief takes. Your partner&apos;s name, their story, and the dates
            that matter will be remembered &mdash; always.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://meok.ai/birth"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                background: GOLD,
                color: BG,
                fontWeight: 800,
                fontSize: "0.95rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin your Birth Ceremony
            </a>
            <Link
              href="/blog/meok-birth-ceremony-explained"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                background: "transparent",
                color: MUTED,
                fontWeight: 600,
                fontSize: "0.95rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                border: `1px solid rgba(245,240,232,0.15)`,
              }}
            >
              What is the Birth Ceremony?
            </Link>
          </div>

          <p
            style={{
              fontSize: "0.8rem",
              color: FAINT,
              marginTop: "1.5rem",
            }}
          >
            MEOK is an AI companion, not a medical or therapeutic service. If
            you are in crisis, please contact Samaritans on 116 123 (free, 24/7).
          </p>
        </div>
      </article>
    </div>
  );
}
