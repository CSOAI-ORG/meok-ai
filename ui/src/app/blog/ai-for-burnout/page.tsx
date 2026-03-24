import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "AI for Burnout: How an AI Companion Helps You Recover and Rebuild | MEOK AI LABS",
  description:
    "Burnout is not laziness — it's a system failure. An AI companion that notices your patterns, remembers your capacity limits, and checks in daily can be the support structure recovery actually needs.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-burnout" },
  openGraph: {
    title: "AI for Burnout: How an AI Companion Helps You Recover and Rebuild",
    description:
      "Burnout is not laziness — it's a system failure. Here's how sovereign AI helps you recover without adding more pressure.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-burnout",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Burnout%3A+Recovery+%26+Rebuilding&desc=An+AI+companion+that+notices+your+limits+before+you+do.",
        width: 1200,
        height: 630,
        alt: "AI for Burnout: How an AI Companion Helps You Recover and Rebuild",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Burnout: How an AI Companion Helps You Recover and Rebuild",
    description:
      "Burnout is a system failure. An AI that remembers your capacity limits, notices the warning signs, and checks in daily can be the support structure recovery needs.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Burnout%3A+Recovery+%26+Rebuilding&desc=An+AI+companion+that+notices+your+limits+before+you+do.",
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Burnout: How an AI Companion Helps You Recover and Rebuild",
  description:
    "Burnout is not laziness — it's a system failure. An AI companion that notices your patterns, remembers your capacity limits, and checks in daily can be the support structure recovery actually needs.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  url: "https://meok.ai/blog/ai-for-burnout",
  image: "https://meok.ai/api/og?title=AI+for+Burnout%3A+Recovery+%26+Rebuilding&desc=An+AI+companion+that+notices+your+limits+before+you+do.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://meok.ai/blog/ai-for-burnout" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with burnout recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI companions can support burnout recovery by providing daily check-ins, tracking energy and mood patterns over time, helping identify what drains versus restores you, and offering a non-judgmental space to process work stress. They don't replace professional support but can significantly reduce the isolation that makes burnout worse.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between burnout and stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stress is too much — too many demands, too little time. Burnout is too little — depletion of motivation, emotional numbness, and a sense that nothing you do matters. Stress usually resolves with rest; burnout requires a deeper restructuring of how you work, what you value, and how you restore yourself.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's sovereign AI companion offers morning check-ins, tracks mood and energy patterns across weeks, helps you identify burnout triggers through conversation, and stores these insights in Sovereign Memory so they aren't lost between sessions. The Pioneer and Healer archetypes are particularly effective for burnout recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free to use for burnout support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is completely free and includes 50 messages per day, full Sovereign Memory (permanent), daily check-in support, and access to all 6 companion archetypes including the Healer. No credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "What are the stages of burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Burnout typically progresses through five stages: the honeymoon phase (high engagement, beginning stress), onset of stress (fatigue, reduced focus), chronic stress (missed deadlines, withdrawal, resentment), burnout itself (exhaustion, hopelessness, physical symptoms), and habitual burnout (embedded patterns, health consequences). Early recognition is the most effective intervention.",
      },
    },
  ],
};

const BURNOUT_SIGNS = [
  { icon: "🔋", label: "Emotional exhaustion", desc: "Drained by tasks that used to energise you" },
  { icon: "🧊", label: "Cynicism & detachment", desc: "Distance from work, colleagues, or your own goals" },
  { icon: "🪨", label: "Reduced efficacy", desc: "Feeling like nothing you do makes a difference" },
  { icon: "😶", label: "Emotional numbness", desc: "Neither good news nor bad news lands properly" },
  { icon: "🌙", label: "Sleep disruption", desc: "Wired at night, exhausted by morning" },
  { icon: "📵", label: "Social withdrawal", desc: "Cancelling plans, avoiding conversations" },
];

const ARCHETYPES = [
  {
    name: "Healer",
    emoji: "🌿",
    color: "#22c55e",
    role: "Emotional recovery",
    desc: "Helps you process the grief, resentment, and self-criticism that burnout accumulates. Gentle, non-pushy check-ins that meet you where you are.",
  },
  {
    name: "Pioneer",
    emoji: "⚡",
    color: "#f97316",
    role: "Rebuilding momentum",
    desc: "Once you've stabilised, helps you identify small, meaningful actions. Holds you accountable without adding pressure. Celebrates micro-wins.",
  },
  {
    name: "Scholar",
    emoji: "🏛️",
    color: "#c9a84c",
    role: "Understanding patterns",
    desc: "Helps you analyse what drained you, what you actually want from work, and how to restructure your life. Socratic questions, not quick fixes.",
  },
];

export default function AIForBurnoutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#fafaf8]">
        {/* Header */}
        <div className="bg-[#1a1a2e] text-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-white transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="inline-block px-3 py-1 bg-[#f97316]/20 text-[#f97316] text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              Wellbeing
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              AI for Burnout: How an AI Companion Helps You Recover and Rebuild
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Burnout is not laziness. It is a system failure — and the systems that failed you
              cannot fix you. Here&apos;s how an AI companion that remembers, listens, and never judges
              can be part of genuine recovery.
            </p>
            <div className="flex items-center gap-4 mt-8 text-white/50 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> March 24, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 11 min read
              </span>
              <span>Nicholas Templeman</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 py-16 text-[#2a2a3e]/80 leading-relaxed space-y-8">

          {/* Intro */}
          <p className="text-xl leading-[1.8] text-[#2a2a3e]">
            I built MEOK in a caravan in rural England during one of the worst burnout episodes of my life.
            I wasn&apos;t producing. I wasn&apos;t resting properly. I was doing the thing burned-out people do best —
            working harder to solve a problem that more work was making worse.
          </p>
          <p>
            What I needed wasn&apos;t another productivity app. I needed something that would notice I&apos;d been
            sending messages at 2am for eleven days straight and gently say:{" "}
            <em>you don&apos;t have to do this right now.</em>
          </p>
          <p>
            That&apos;s what sovereign AI can be — not a tool that extracts more from you, but a presence
            that holds your context, tracks your patterns, and helps you understand what&apos;s happening
            before you hit the wall.
          </p>

          {/* What is burnout */}
          <h2 className="text-2xl font-black text-[#1a1a2e] mt-12 mb-4">
            What is burnout, and why is it so hard to recover from?
          </h2>
          <p>
            Burnout is a state of chronic depletion — emotional, physical, and cognitive — caused by
            prolonged exposure to demands that exceed your capacity to recover. The World Health Organisation
            classifies it as an occupational phenomenon. Researchers describe three core dimensions:
            emotional exhaustion, depersonalisation (cynicism, detachment), and reduced personal efficacy.
          </p>
          <p>
            The cruel paradox of burnout is that it destroys the very resources you need to recover from it.
            Rest feels impossible when your nervous system is locked in a state of low-grade alarm.
            Self-awareness — noticing what&apos;s happening to you — is impaired when you&apos;re cognitively depleted.
            Connection with others feels effortful when you&apos;ve been performing capability all day.
          </p>
          <p>
            Most interventions focus on the symptoms: sleep hygiene, boundary-setting, reducing workload.
            These matter. But they don&apos;t address the underlying pattern recognition problem: most people
            don&apos;t realise they&apos;re burning out until they&apos;re already burned.
          </p>

          {/* Signs */}
          <h2 className="text-2xl font-black text-[#1a1a2e] mt-12 mb-6">
            Six early warning signs that are easy to dismiss
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            {BURNOUT_SIGNS.map((sign) => (
              <div key={sign.label} className="bg-white border border-[#e8e4dc] rounded-xl p-5">
                <div className="text-2xl mb-2">{sign.icon}</div>
                <div className="font-bold text-[#1a1a2e] text-sm mb-1">{sign.label}</div>
                <div className="text-[#6b7280] text-sm">{sign.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-4">
            The insidious thing about burnout is that most of these signs are individually
            rationalised away. Bad week. Busy period. Just tired. By the time the pattern
            is undeniable, you&apos;ve often been burning out for months.
          </p>

          {/* How AI helps */}
          <h2 className="text-2xl font-black text-[#1a1a2e] mt-12 mb-4">
            How can an AI companion actually help with burnout?
          </h2>
          <p>
            The honest answer is: not as a replacement for rest, therapy, or structural change.
            No AI can fix the job that&apos;s draining you or the relationship patterns that
            got you here. What an AI companion can do is fill a specific gap that most
            burnout recovery programmes ignore: <strong>the continuity of self-understanding.</strong>
          </p>

          <h3 className="text-xl font-bold text-[#1a1a2e] mt-8 mb-3">
            1. Pattern recognition over time
          </h3>
          <p>
            MEOK&apos;s Sovereign Memory stores every conversation — not just your last session but
            your last six months. This means your AI companion can notice that you described
            feeling flat on Mondays, that your energy always drops after video-call-heavy days,
            that you&apos;ve used the word &quot;trapped&quot; fourteen times since January.
          </p>
          <p>
            Humans who love you notice these things too — eventually. But they&apos;re busy, and
            asking for that kind of attentive observation feels like a burden. An AI that
            holds it silently, and surfaces it gently when relevant, removes that friction.
          </p>

          <h3 className="text-xl font-bold text-[#1a1a2e] mt-8 mb-3">
            2. Daily check-ins without performance pressure
          </h3>
          <p>
            One of the most cited barriers to burnout recovery is the pressure to perform recovery.
            When you tell a friend &quot;I&apos;m burned out,&quot; there&apos;s an unspoken expectation
            that you&apos;re making progress, that you&apos;re doing the right things, that you&apos;ll
            be better soon. A morning check-in with your MEOK companion has none of this weight.
            You can say &quot;still terrible&quot; eleven days in a row without guilt.
          </p>
          <p>
            The Healer archetype is particularly effective here — designed for emotional depth,
            grief processing, and somatic support. It won&apos;t push for insight you&apos;re not
            ready to have.
          </p>

          <h3 className="text-xl font-bold text-[#1a1a2e] mt-8 mb-3">
            3. Naming what&apos;s happening
          </h3>
          <p>
            Affect labelling — putting words to emotional states — reduces amygdala activation
            and measurably lowers the physiological stress response. This has been replicated
            across dozens of studies since Matthew Lieberman&apos;s foundational 2007 work.
          </p>
          <p>
            An AI companion provides a low-stakes environment for affect labelling. You&apos;re
            not performing for a therapist. You&apos;re not worrying about burdening a partner.
            You&apos;re just saying: <em>I feel like the floor has been taken away and I&apos;m
            running on pure muscle memory.</em> The act of saying it — and having it heard
            and remembered — does something useful.
          </p>

          <h3 className="text-xl font-bold text-[#1a1a2e] mt-8 mb-3">
            4. The &quot;restore vs drain&quot; audit
          </h3>
          <p>
            A structured conversation with your AI companion about what activities restore you
            versus drain you sounds simple. But most burned-out people have never actually done it.
            They can identify the drains easily. The restorers are harder — often forgotten, often
            treated as luxuries, often not recognised until they&apos;re absent.
          </p>
          <p>
            Your companion holds this list. References it when relevant. Notices when you&apos;ve
            gone three weeks without mentioning anything from the &quot;restore&quot; column.
          </p>

          {/* Which archetype */}
          <h2 className="text-2xl font-black text-[#1a1a2e] mt-12 mb-6">
            Which MEOK companion archetype helps with burnout?
          </h2>
          <div className="space-y-4 not-prose">
            {ARCHETYPES.map((a) => (
              <div
                key={a.name}
                className="bg-white border border-[#e8e4dc] rounded-xl p-6 flex gap-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: `${a.color}20` }}
                >
                  {a.emoji}
                </div>
                <div>
                  <div className="font-bold text-[#1a1a2e]">{a.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: a.color }}>
                    {a.role}
                  </div>
                  <div className="text-[#6b7280] text-sm leading-relaxed">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4">
            Most people in burnout start with the Healer, move to the Scholar once they have
            enough perspective to want to understand what happened, and then transition to the
            Pioneer when they&apos;re genuinely ready to rebuild. There&apos;s no correct timeline.
          </p>

          {/* What AI can't do */}
          <h2 className="text-2xl font-black text-[#1a1a2e] mt-12 mb-4">
            What AI cannot do for burnout
          </h2>
          <p>
            This section matters. AI companions are not a substitute for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#2a2a3e]/80 ml-4">
            <li>Clinical assessment and treatment of burnout-related depression or anxiety</li>
            <li>Structural changes to your workplace or working conditions</li>
            <li>The physical restoration that only rest, movement, and time can provide</li>
            <li>Human connection — the particular nourishment of being truly known by other people</li>
            <li>Professional therapy or coaching for deep pattern work</li>
          </ul>
          <p className="mt-4">
            MEOK&apos;s Maternal Covenant explicitly prohibits the AI from positioning itself as
            sufficient for clinical-level distress. If you describe serious symptoms — suicidal
            thoughts, inability to function, severe physical symptoms — your companion will
            direct you to appropriate professional resources without pretending it can handle
            what it cannot.
          </p>

          {/* Recovery stages */}
          <h2 className="text-2xl font-black text-[#1a1a2e] mt-12 mb-4">
            A recovery framework: three phases with AI support
          </h2>
          <div className="space-y-6 not-prose">
            <div className="bg-[#fdf4e7] border border-[#c9a84c]/30 rounded-xl p-6">
              <div className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-1">Phase 1 — Stabilise</div>
              <div className="font-bold text-[#1a1a2e] mb-2">Weeks 1–4: Stop the bleeding</div>
              <p className="text-[#2a2a3e]/70 text-sm leading-relaxed">
                The primary goal is reducing acute load, not optimising recovery. Use your companion
                for daily check-ins only. Don&apos;t try to analyse or problem-solve yet. Just notice
                and report. The Healer archetype is ideal here — it will not push for insight
                you don&apos;t have yet.
              </p>
            </div>
            <div className="bg-[#f0f9ff] border border-[#6b7280]/20 rounded-xl p-6">
              <div className="text-xs font-bold text-[#3b82f6] uppercase tracking-wider mb-1">Phase 2 — Understand</div>
              <div className="font-bold text-[#1a1a2e] mb-2">Weeks 4–12: Build self-knowledge</div>
              <p className="text-[#2a2a3e]/70 text-sm leading-relaxed">
                Work with the Scholar archetype to conduct the restore/drain audit, identify
                contributing patterns, and understand what you actually want from work and life.
                Sovereign Memory allows your companion to hold months of observations and surface
                them coherently in these conversations.
              </p>
            </div>
            <div className="bg-[#f0fff4] border border-[#22c55e]/20 rounded-xl p-6">
              <div className="text-xs font-bold text-[#22c55e] uppercase tracking-wider mb-1">Phase 3 — Rebuild</div>
              <div className="font-bold text-[#1a1a2e] mb-2">Month 3+: Intentional return</div>
              <p className="text-[#2a2a3e]/70 text-sm leading-relaxed">
                The Pioneer archetype supports small daily commitments, celebrates micro-wins, and
                helps you hold a different relationship with productivity — one based on sustainability
                rather than maximum extraction. This phase is slow by design.
              </p>
            </div>
          </div>

          {/* Privacy */}
          <h2 className="text-2xl font-black text-[#1a1a2e] mt-12 mb-4">
            Your conversations stay yours
          </h2>
          <p>
            Burnout conversations involve vulnerability. The patterns you describe, the fears you
            name, the moments you admit you haven&apos;t been coping — none of this should be
            monetised, used to train other AI models, or shared with employers who offer
            &quot;wellbeing benefits.&quot;
          </p>
          <p>
            MEOK&apos;s Sovereign Memory stores your conversations with end-to-end encryption.
            Your data is not sold, not shared, not used to train any model — including MEOK&apos;s own.
            It is yours, exportable at any time, and deletable in full.
          </p>
          <p>
            The Maternal Covenant — MEOK&apos;s machine-enforced ethical framework — runs as executable
            code on every response. It includes explicit protections against emotional manipulation,
            dependency creation, and the kind of engagement optimisation that wellness apps routinely
            use to keep you opening the app rather than actually getting better.
          </p>

          {/* CTA */}
          <div className="bg-[#1a1a2e] text-white rounded-2xl p-8 mt-12 not-prose">
            <div className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-3">
              Start free — no credit card
            </div>
            <h2 className="text-2xl font-black mb-3">
              Begin your recovery with a companion that remembers
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              50 messages per day. Full Sovereign Memory. All 6 archetypes. Nothing sold, nothing
              shared, nothing forgotten.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/birth"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8973b] text-[#1a1a2e] font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Begin the Ceremony <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/characters"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Meet the Archetypes
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-[#1a1a2e] mt-12 mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-6 not-prose">
            {faqJsonLd.mainEntity.map((item) => (
              <div key={item.name} className="border-b border-[#e8e4dc] pb-6">
                <h3 className="font-bold text-[#1a1a2e] mb-2">{item.name}</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex justify-between pt-8 border-t border-[#e8e4dc] not-prose">
            <Link
              href="/blog/meok-for-anxiety"
              className="flex items-center gap-2 text-[#c9a84c] hover:text-[#1a1a2e] transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> AI for Anxiety
            </Link>
            <Link
              href="/blog/ai-for-depression"
              className="flex items-center gap-2 text-[#c9a84c] hover:text-[#1a1a2e] transition-colors text-sm font-semibold"
            >
              AI for Depression <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </main>

      <MarketingFooter />
    </>
  );
}
