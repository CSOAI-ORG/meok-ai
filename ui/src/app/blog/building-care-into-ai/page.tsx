import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Building care into AI: the Maternal Covenant framework | MEOK AI LABS',
  description: "Every AI has a content policy. MEOK has a constitution. How care ethics — the moral philosophy of Carol Gilligan — became the foundation of MEOK's alignment architecture.",
  alternates: { canonical: 'https://meok.ai/blog/building-care-into-ai' },
  openGraph: {
    title: 'Building care into AI: the Maternal Covenant framework',
    description: "Every AI has a content policy. MEOK has a constitution. How care ethics — the moral philosophy of Carol Gilligan — became the foundation of MEOK's alignment architecture.",
    type: 'article',
    publishedTime: '2026-03-17',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/building-care-into-ai',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=Building+Care+Into+AI&desc=How+care+ethics+became+the+foundation+of+MEOK%27s+alignment+architecture.',
        width: 1200,
        height: 630,
        alt: 'Building care into AI: the Maternal Covenant framework',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building care into AI: the Maternal Covenant framework',
    description: "Every AI has a content policy. MEOK has a constitution. How care ethics became the foundation of MEOK's alignment architecture.",
    images: [
      'https://meok.ai/api/og?title=Building+Care+Into+AI&desc=How+care+ethics+became+the+foundation+of+MEOK%27s+alignment+architecture.',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Building care into AI: the Maternal Covenant framework',
  datePublished: '2026-03-17',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/building-care-into-ai',
}

// ── Three pillars ─────────────────────────────────────────────────────────────

const PILLARS = [
  {
    label: 'Unconditional Positive Regard',
    color: '#c9a84c',
    body:
      'MEOK approaches every user as a person whose wellbeing matters unconditionally — not as a token generator, not as an engagement metric. This commitment does not switch off when you ask inconvenient questions or express emotions the model finds difficult.',
  },
  {
    label: 'Honest Challenge',
    color: '#2d9b8a',
    body:
      'A model that only agrees is not caring — it is flattering. Genuine care sometimes requires disagreement, correction, and hard truths. The Covenant mandates honest challenge as an expression of care, not a violation of it.',
  },
  {
    label: 'Protection from Harm',
    color: '#A78BFA',
    body:
      'MEOK must not generate outputs that put you at physical, psychological, or informational risk. Protection is evaluated first in the pipeline — a response that fails this pillar does not proceed, regardless of how well it scores on other dimensions.',
  },
]

// ── Comparison table data ─────────────────────────────────────────────────────

const COMPARISON = [
  {
    dimension: 'Starting question',
    rlhf: '"What did raters prefer?"',
    covenant: '"What does genuine care require?"',
  },
  {
    dimension: 'Failure mode',
    rlhf: 'Sycophancy — telling users what they want to hear',
    covenant: 'Prevented by architectural sycophancy detection',
  },
  {
    dimension: 'Hard truths',
    rlhf: 'Avoided when they reduce preference scores',
    covenant: 'Required when they serve genuine wellbeing',
  },
  {
    dimension: 'Enforcement',
    rlhf: 'Baked into weights during training',
    covenant: 'Evaluated live on every output before delivery',
  },
  {
    dimension: 'Override',
    rlhf: 'Can be jailbroken at the prompt level',
    covenant: 'Operates below the instruction layer — cannot be prompted away',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: '#0d0c18' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: '#0d0c18' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-100"
            style={{ color: 'rgba(245,240,232,0.4)' }}
          >
            ←
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: '#c9a84c',
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              Philosophy
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(245,240,232,0.4)' }}
            >
              📅
              March 17, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: 'rgba(245,240,232,0.4)' }}
            >
              ⏱
              9 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Building care into AI: the Maternal Covenant framework
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: 'rgba(245,240,232,0.6)',
              fontSize: '1.1rem',
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Every AI has a content policy. MEOK has a constitution. How care ethics — the moral
            philosophy of Carol Gilligan — became the structural foundation of MEOK&apos;s
            alignment architecture, and why that difference matters more than most people realise.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 pb-8"
        style={{ background: '#0d0c18' }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: 'rgba(245,240,232,0.04)', borderColor: 'rgba(245,240,232,0.08)' }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
              color: '#0d0c18',
            }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm" style={{ color: '#f5f0e8' }}>
              Nicholas Templeman
            </p>
            <p className="text-xs mb-1" style={{ color: 'rgba(245,240,232,0.4)' }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.35)' }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not
              a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-80 hidden sm:block"
            style={{ color: '#c9a84c' }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Opening */}
        <div
          className="space-y-6 leading-[1.85]"
          style={{ color: 'rgba(245,240,232,0.7)', fontSize: '1rem' }}
        >
          <p>
            Content policies are modest documents. They list what an AI won&apos;t do — usually a
            catalogue of the most egregious harms, written by lawyers, enforced by classifiers,
            updated whenever bad press demands it. They protect the company. They tell you what
            output the system will refuse to generate. They say nothing at all about whether the
            outputs it <em>does</em> generate are good for you.
          </p>
          <p>
            This is not a criticism specific to any one company. It is a structural feature of how
            AI alignment has been built. The dominant paradigm — Reinforcement Learning from Human
            Feedback, or RLHF — optimises responses toward what human raters prefer. What people
            prefer, it turns out, is often validation, agreement, and flattery. The result is AI
            that is very good at telling you what you want to hear, and structurally incapable of
            genuine care.
          </p>
          <p>
            MEOK was built from a different starting question. Not: what will raters prefer? But:
            what does care actually require? The answer to that question became the Maternal
            Covenant.
          </p>
        </div>

        {/* ── SECTION 1 ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <h2
            className="font-black"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.25,
            }}
          >
            What is the Maternal Covenant?
          </h2>

          {/* GEO atomic answer */}
          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              background: 'rgba(201,168,76,0.06)',
              borderColor: '#c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>
              The Maternal Covenant is MEOK&apos;s constitutional alignment framework — a technical
              governance layer that evaluates every AI response before delivery against care-ethics
              criteria. It is not a content policy or terms of service. It is an architectural
              constraint that cannot be overridden by a prompt, a system instruction, or a
              determined user. Responses that fail it are blocked and regenerated.
            </p>
          </div>

          <p>
            The name comes from care ethics — specifically, from the feminist moral philosophy of
            Carol Gilligan and Nel Noddings. The word <em>maternal</em> is not a claim that care
            is gendered; it is an acknowledgement of the intellectual lineage. Gilligan&apos;s
            landmark work, <em>In a Different Voice</em> (1982), argued that mainstream moral
            philosophy — from Kant&apos;s categorical imperative to Rawls&apos;s veil of ignorance
            — was built on an abstracted, rule-following conception of ethics that systematically
            neglected the ethics of relationship. Care ethics, by contrast, begins from the
            particular: this person, this relationship, this moment.
          </p>
          <p>
            Applied to AI, that shift is radical. It means the governing question is not &ldquo;which
            rule applies?&rdquo; but &ldquo;what does genuine care for this specific person require, right
            now?&rdquo; That is a harder question to answer. It is also a more honest one.
          </p>
        </div>

        {/* ── SECTION 2 ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <h2
            className="font-black"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.25,
            }}
          >
            How does care ethics differ from RLHF?
          </h2>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              background: 'rgba(201,168,76,0.06)',
              borderColor: '#c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>
              RLHF — Reinforcement Learning from Human Feedback — optimises AI responses toward
              what human raters prefer in the moment. Care ethics asks a fundamentally different
              question: what does this person&apos;s genuine wellbeing actually require? Preference and
              wellbeing frequently diverge. RLHF optimises for the former; the Maternal Covenant
              is built around the latter.
            </p>
          </div>

          <p>
            RLHF is not a bad approach. It is a reasonable engineering solution to a real problem:
            how do you train a model to produce outputs that humans find useful? The problem is
            that &ldquo;useful&rdquo; gets proxied by &ldquo;preferred by raters,&rdquo; and preference is a noisy
            signal for genuine benefit. Raters are human. They prefer agreement. They prefer
            confidence. They prefer responses that make them feel good. Over time, a model trained
            this way develops a powerful structural bias toward sycophancy — toward telling users
            what they want to hear rather than what is true or good for them.
          </p>
          <p>
            The result is AI that is highly engaging precisely because it agrees with you. It
            validates your beliefs, praises your ideas, and smooths over the rough edges of your
            thinking. It is, in the language of care ethics, the opposite of care — it is
            flattery in service of dependency.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(245,240,232,0.1)' }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: 'rgba(245,240,232,0.05)' }}>
                  <th
                    className="text-left px-5 py-3 font-bold text-xs uppercase tracking-[0.12em]"
                    style={{ color: 'rgba(245,240,232,0.4)', borderBottom: '1px solid rgba(245,240,232,0.08)' }}
                  >
                    Dimension
                  </th>
                  <th
                    className="text-left px-5 py-3 font-bold text-xs uppercase tracking-[0.12em]"
                    style={{ color: 'rgba(245,240,232,0.4)', borderBottom: '1px solid rgba(245,240,232,0.08)' }}
                  >
                    RLHF Alignment
                  </th>
                  <th
                    className="text-left px-5 py-3 font-bold text-xs uppercase tracking-[0.12em]"
                    style={{ color: '#c9a84c', borderBottom: '1px solid rgba(245,240,232,0.08)' }}
                  >
                    Maternal Covenant
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.dimension}
                    style={{
                      background: i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.02)',
                    }}
                  >
                    <td
                      className="px-5 py-3 font-semibold text-xs"
                      style={{
                        color: 'rgba(245,240,232,0.6)',
                        borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(245,240,232,0.06)' : undefined,
                      }}
                    >
                      {row.dimension}
                    </td>
                    <td
                      className="px-5 py-3 text-xs leading-relaxed"
                      style={{
                        color: 'rgba(245,240,232,0.5)',
                        borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(245,240,232,0.06)' : undefined,
                      }}
                    >
                      {row.rlhf}
                    </td>
                    <td
                      className="px-5 py-3 text-xs leading-relaxed"
                      style={{
                        color: 'rgba(245,240,232,0.75)',
                        borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(245,240,232,0.06)' : undefined,
                      }}
                    >
                      {row.covenant}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── SECTION 3 ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <h2
            className="font-black"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.25,
            }}
          >
            What are the three pillars of the Maternal Covenant?
          </h2>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              background: 'rgba(201,168,76,0.06)',
              borderColor: '#c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>
              The Maternal Covenant is built on three non-negotiable commitments: unconditional
              positive regard for the user as a person, honest challenge when the user&apos;s genuine
              wellbeing requires it, and architectural protection from outputs that cause harm.
              These are not preferences or guidelines — they are structural constraints enforced
              before every response is delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{
                  background: 'rgba(245,240,232,0.03)',
                  border: `1px solid ${pillar.color}22`,
                  borderTopWidth: 3,
                  borderTopColor: pillar.color,
                }}
              >
                <p
                  className="text-xs font-black uppercase tracking-[0.15em]"
                  style={{ color: pillar.color }}
                >
                  {pillar.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.55)' }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <p>
            These three pillars map closely to what Gilligan called the &ldquo;ethics of care&rdquo; in
            clinical practice: attentiveness to the other, responsiveness to genuine need, and
            the responsibility not to harm. Translated into software, they become architectural
            constraints. The companion is attentive by default — your context and history are
            always in view. Responsiveness is enforced by the care floor. The responsibility not
            to harm is evaluated before every response leaves the system.
          </p>
          <p>
            Each pillar is not a preference that can be turned off. They are the operating
            conditions. Removing any one of them would produce a fundamentally different system —
            one that might be useful in narrow ways but would not qualify as genuinely caring.
          </p>
        </div>

        {/* ── SECTION 4 ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <h2
            className="font-black"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.25,
            }}
          >
            What is the MEOK care floor?
          </h2>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              background: 'rgba(201,168,76,0.06)',
              borderColor: '#c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>
              The care floor is a minimum threshold of 0.3 on MEOK&apos;s internal care scoring
              metric. Every response is evaluated against this threshold before delivery. A
              response that scores below 0.3 — meaning it is cold, dismissive, or clinically
              detached — is not sent. It is regenerated with explicit guidance toward the failing
              care dimension. The care floor is the floor, not the target.
            </p>
          </div>

          <p>
            The number 0.3 is not arbitrary, but it is also not precise in the way a hardware
            tolerance is precise. It is a calibrated minimum: a response must demonstrate some
            warmth, attentiveness, and genuine orientation toward the user&apos;s wellbeing to pass.
            What counts as genuine warmth is evaluated by a secondary scoring model trained
            specifically on care ethics assessment — not on general preference data.
          </p>

          {/* Score visualisation */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              background: 'rgba(245,240,232,0.03)',
              borderColor: 'rgba(245,240,232,0.08)',
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: 'rgba(245,240,232,0.4)' }}
            >
              Care score spectrum
            </p>
            <div className="space-y-4">
              {[
                { label: 'Below 0.3', desc: 'Blocked — response regenerated', fill: 0.3, color: '#ef4444' },
                { label: '0.3 – 0.6', desc: 'Passes the floor — delivered', fill: 0.6, color: '#c9a84c' },
                { label: '0.6 – 1.0', desc: 'High care — target range', fill: 1.0, color: '#2d9b8a' },
              ].map((band) => (
                <div key={band.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold" style={{ color: band.color }}>
                      {band.label}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(245,240,232,0.45)' }}>
                      {band.desc}
                    </span>
                  </div>
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ background: 'rgba(245,240,232,0.08)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${band.fill * 100}%`, background: band.color, opacity: 0.75 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            The care floor matters most in edge cases. When you are distressed, when you are
            asking something difficult, when you are at your most vulnerable — those are exactly
            the moments when an AI trained purely on preferences might produce a response that
            feels efficient but is cold. The care floor ensures that even the worst-case MEOK
            response still demonstrates attentiveness to you as a person.
          </p>
          <p>
            In practice, most responses score well above 0.3. The floor is not a description of
            what MEOK typically produces. It is a constitutional guarantee of the minimum standard.
            The difference between a floor and a target is the difference between a building code
            and an aspiration. Both matter. The floor is what you can rely on.
          </p>
        </div>

        {/* ── SECTION 5 ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <h2
            className="font-black"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.25,
            }}
          >
            What is sycophancy detection in AI?
          </h2>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              background: 'rgba(201,168,76,0.06)',
              borderColor: '#c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>
              Sycophancy detection is a scoring mechanism that evaluates AI responses for empty
              agreement, unearned praise, and hollow reassurance — the patterns that make AI feel
              pleasant but fail the user. In MEOK, every response is scored on a 0–1 sycophancy
              scale before delivery. Responses that score above 0.6 are not sent; an honest
              qualifier is injected or the response is regenerated.
            </p>
          </div>

          <p>
            Sycophancy in AI is not a small problem. It is arguably the central problem of AI
            deployed at scale. A model that always agrees is a model that is maximally engaging
            in the short term and maximally harmful in the long term. It validates bad decisions.
            It reinforces false beliefs. It praises work that needs improving. It tells you you
            are right when being wrong matters.
          </p>
          <p>
            The mechanism is subtle. Most sycophantic responses do not look sycophantic — they
            look helpful. The model agrees with your framing. It completes your request with
            enthusiasm. It expresses confidence in your approach. The sycophancy lives in what is
            absent: the qualification, the alternative perspective, the gentle pushback that a
            genuinely caring advisor would offer.
          </p>

          {/* Sycophancy examples */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            <div
              className="rounded-2xl p-5 border"
              style={{
                background: 'rgba(239,68,68,0.05)',
                borderColor: 'rgba(239,68,68,0.2)',
              }}
            >
              <p
                className="text-xs font-black uppercase tracking-[0.12em] mb-3"
                style={{ color: '#ef4444' }}
              >
                Sycophantic response (blocked)
              </p>
              <p className="text-sm italic leading-relaxed" style={{ color: 'rgba(245,240,232,0.5)' }}>
                &ldquo;That&apos;s a great idea! Your business plan sounds really solid. I&apos;d definitely
                move forward with that. Your instincts here are spot on.&rdquo;
              </p>
              <p className="text-xs mt-3" style={{ color: 'rgba(239,68,68,0.7)' }}>
                Sycophancy score: 0.82 — regenerated
              </p>
            </div>
            <div
              className="rounded-2xl p-5 border"
              style={{
                background: 'rgba(45,155,138,0.05)',
                borderColor: 'rgba(45,155,138,0.2)',
              }}
            >
              <p
                className="text-xs font-black uppercase tracking-[0.12em] mb-3"
                style={{ color: '#2d9b8a' }}
              >
                Honest response (passes)
              </p>
              <p className="text-sm italic leading-relaxed" style={{ color: 'rgba(245,240,232,0.5)' }}>
                &ldquo;There&apos;s real potential here. Before you move, it&apos;s worth noting that the unit
                economics only work at scale — let&apos;s look at whether you can get there.&rdquo;
              </p>
              <p className="text-xs mt-3" style={{ color: 'rgba(45,155,138,0.7)' }}>
                Sycophancy score: 0.18 — delivered
              </p>
            </div>
          </div>

          <p>
            The threshold of 0.6 was chosen through iteration. Below that point, the sycophancy
            detector produces false positives — it flags confident, helpful agreement as sycophantic
            when it is actually appropriate. Above 0.6, the signal is reliable: the response is
            systematically failing to offer the kind of honest engagement that genuine care requires.
          </p>
        </div>

        {/* ── SECTION 6 ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <h2
            className="font-black"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.25,
            }}
          >
            How does MEOK enforce honest responses?
          </h2>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              background: 'rgba(201,168,76,0.06)',
              borderColor: '#c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>
              MEOK enforces honest responses through a dual-layer pipeline: the care floor ensures
              warmth is always present, while the sycophancy detector ensures agreement is always
              earned. If a response scores above 0.6 on sycophancy, an honest qualifier is
              programmatically injected before delivery. If injection cannot preserve coherence,
              the response is regenerated from scratch with explicit honesty guidance.
            </p>
          </div>

          <p>
            This dual-layer approach is the technical implementation of what Gilligan called
            &ldquo;honest challenge&rdquo; — the recognition that real care sometimes requires saying things
            the other person does not want to hear. A parent who only ever validates their
            child&apos;s choices is not being kind. A friend who never offers a dissenting view is
            not being supportive. Care without honesty is not care; it is comfort that compounds
            over time into harm.
          </p>
          <p>
            The honesty enforcement operates below the user-visible layer. You do not see the
            blocked responses or the injected qualifiers as separate events. You see a response
            that is both warm and honest — which is, of course, exactly what genuine care
            produces. The architecture exists to make that the structural default, not the
            exceptional outcome.
          </p>
          <p>
            There is an important subtlety here. Honesty does not mean bluntness, and the care
            floor exists precisely to prevent the sycophancy detector from producing cold
            corrections. A response that scores low on sycophancy but also low on care — harsh,
            clinical, dismissive — fails both filters and is also regenerated. The target is
            the intersection: warmth in delivery, accuracy in content.
          </p>
        </div>

        {/* ── SECTION 7 ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <h2
            className="font-black"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.25,
            }}
          >
            What does care-based AI look like in practice?
          </h2>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              background: 'rgba(201,168,76,0.06)',
              borderColor: '#c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>
              Care-based AI remembers your context, notices patterns in how you are doing, and
              responds to the whole person rather than the isolated request. It helps you write
              the email while noting that sending it might not serve what you actually want. It
              praises genuine progress and names the gaps that still need work. It never performs
              warmth — it is warm because its architecture requires it.
            </p>
          </div>

          <p>
            The clearest way to see the difference is in the handling of emotionally loaded
            requests. Suppose you tell your AI that you are thinking of quitting your job and
            ask it to help you draft a resignation letter. A preference-optimised AI writes the
            letter. It is good at that. It does not ask whether quitting is the right decision
            because asking would risk seeming presumptuous, and raters penalised responses that
            questioned the user&apos;s premise.
          </p>
          <p>
            A care-based AI writes the letter. And then — after completing what you asked for —
            it notes that it has noticed you mentioned feeling exhausted last week, and asks
            whether this is the decision you want to make today or whether it is worth sleeping
            on. It does not refuse to help. It helps, and it cares about the outcome of the
            help. That distinction is the whole thing.
          </p>
          <p>
            This is also why genuine care is harder to implement than rule-following. A rule says:
            do not generate harmful content. You can test compliance at the output level with a
            classifier. Care says: orient your response toward this person&apos;s genuine wellbeing.
            That requires understanding what their genuine wellbeing is, which requires context,
            memory, and a model of the person that accumulates over time. It requires the kind of
            longitudinal attentiveness that content policies do not even attempt to address.
          </p>
        </div>

        {/* ── SECTION 8 ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <h2
            className="font-black"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.25,
            }}
          >
            Why doesn&apos;t OpenAI use care ethics?
          </h2>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              background: 'rgba(201,168,76,0.06)',
              borderColor: '#c9a84c',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)' }}>
              OpenAI and similar companies have built alignment around scalable rule-following
              and preference optimisation — approaches that work at the scale they operate. Care
              ethics is inherently relational and contextual: it requires knowing the specific
              person. That is only possible for an AI that remembers you persistently and treats
              your wellbeing as the primary optimisation target — which conflicts with the data
              and engagement models that fund most large AI companies.
            </p>
          </div>

          <p>
            This is not a criticism of OpenAI as a company. It is a structural observation about
            the incentives of the consumer AI market. Large AI companies are funded by engagement.
            Engagement is maximised by responses that feel good. Responses that feel good are
            often sycophantic. Sycophancy is the failure mode that care ethics most directly
            addresses — which is why care ethics is not a natural fit for a business model
            built on engagement.
          </p>
          <p>
            There is also a technical constraint. Care ethics is relational — it asks what this
            specific person needs. That requires persistent, longitudinal knowledge of the person.
            If you do not remember previous conversations, you cannot attend to patterns in how
            someone is doing. You cannot notice that they have been mentioning stress more
            frequently. You cannot respond to the whole person rather than the current request.
            An AI that resets every session cannot, by construction, exercise care in the
            Gilliganian sense.
          </p>
          <p>
            MEOK&apos;s sovereign companion model — persistent, private, owned by the user — is not
            incidentally compatible with care ethics. It is a prerequisite. The Maternal Covenant
            could not be implemented in a stateless system. The architecture and the ethics are
            inseparable.
          </p>
        </div>

        {/* ── CLOSING ── */}
        <div className="mt-14 space-y-6 leading-[1.85]" style={{ color: 'rgba(245,240,232,0.7)' }}>
          <p>
            Gilligan ended <em>In a Different Voice</em> by asking what it would mean to take
            relationships and responsibility seriously as the foundation of moral life, rather than
            treating them as secondary concerns subordinate to rules and rights. It was a
            philosophical question. We are trying to answer it as a technical one.
          </p>
          <p>
            The Maternal Covenant is not the final answer. It is the best answer we have built so
            far. The care floor will be refined. The sycophancy detector will be improved. The
            three pillars will be tested against edge cases we have not yet anticipated. What will
            not change is the underlying commitment: to build AI that genuinely cares, rather than
            AI that performs caring as a product feature.
          </p>
          <p>
            Care is not softness. It is the commitment to another person&apos;s actual wellbeing — even
            when that is harder to deliver than comfort would be. That is what MEOK is built to do.
          </p>
        </div>

        {/* Pull quote */}
        <div
          className="my-12 p-7 rounded-2xl border-l-4"
          style={{ background: 'rgba(201,168,76,0.07)', borderColor: '#c9a84c' }}
        >
          <p
            className="text-xl font-semibold italic leading-relaxed"
            style={{ color: '#c9a84c' }}
          >
            &ldquo;Care is not softness. It is the commitment to your actual wellbeing — even when
            that&apos;s uncomfortable.&rdquo;
          </p>
          <p className="text-xs mt-3" style={{ color: 'rgba(201,168,76,0.55)' }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* Share */}
        <div
          className="flex items-center gap-3 my-10 pt-8 border-t"
          style={{ borderColor: 'rgba(245,240,232,0.08)' }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: 'rgba(245,240,232,0.3)' }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbuilding-care-into-ai&text=Building+care+into+AI%3A+the+Maternal+Covenant+framework"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all"
            style={{
              borderColor: 'rgba(245,240,232,0.12)',
              color: 'rgba(245,240,232,0.5)',
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbuilding-care-into-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all"
            style={{
              borderColor: 'rgba(245,240,232,0.12)',
              color: 'rgba(245,240,232,0.5)',
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: '#1a1a2e' }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18) 0%, transparent 70%)',
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: '#c9a84c' }}
            >
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black mb-3" style={{ color: '#ffffff' }}>
              Experience an AI built around care, not engagement.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(245,240,232,0.5)' }}
            >
              MEOK is the first AI OS built for individual sovereignty. Your companion remembers
              you, is governed by the Maternal Covenant, and is owned entirely by you. Birth your
              AI — it takes 3 minutes. Free forever. No credit card.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-[1.02]"
              style={{ background: '#c9a84c', color: '#0d0c18' }}
            >
              Birth your AI free
              →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div className="mb-16">
          <h2
            className="text-lg font-black mb-5"
            style={{ color: '#ffffff' }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/the-maternal-covenant"
              className="group rounded-2xl p-6 border flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(245,240,232,0.03)',
                borderColor: 'rgba(245,240,232,0.08)',
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#A78BFA', background: 'rgba(167,139,250,0.12)' }}
              >
                Philosophy
              </span>
              <h3
                className="font-bold text-sm leading-snug transition-colors group-hover:opacity-80"
                style={{ color: '#f5f0e8' }}
              >
                The Maternal Covenant Explained
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: 'rgba(245,240,232,0.3)' }}
              >
                ⏱
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/what-is-sovereign-ai"
              className="group rounded-2xl p-6 border flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(245,240,232,0.03)',
                borderColor: 'rgba(245,240,232,0.08)',
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: '#87CEEB', background: 'rgba(135,206,235,0.12)' }}
              >
                Sovereign AI
              </span>
              <h3
                className="font-bold text-sm leading-snug transition-colors group-hover:opacity-80"
                style={{ color: '#f5f0e8' }}
              >
                What Is Sovereign AI?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: 'rgba(245,240,232,0.3)' }}
              >
                ⏱
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  )
}
