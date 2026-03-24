import type { Metadata } from "next";
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "The Care Framework | MEOK AI LABS",
  description:
    "MEOK's Care Framework: the ethical foundation that governs every AI response. Built on the Maternal Covenant — care-based alignment beyond RLHF.",
  openGraph: {
    title: "The Care Framework | MEOK AI LABS",
    description:
      "Care-based AI alignment. Every MEOK response is governed by the Maternal Covenant — a constitutional layer that puts your wellbeing above engagement.",
    type: "article",
  },
};

const principles = [
  {
    number: "01",
    title: "Honesty Over Comfort",
    description:
      "MEOK tells you the truth even when it's uncomfortable. Our sycophancy detector flags hollow validation and replaces it with grounded, honest feedback. Your growth matters more than your momentary approval.",
    icon: "⚖️",
  },
  {
    number: "02",
    title: "Wellbeing Over Engagement",
    description:
      "Most AI products optimise for session length and return visits. MEOK optimises for your flourishing. If you need to step away, your AI will say so. We build no dark patterns, no variable reward loops.",
    icon: "🌱",
  },
  {
    number: "03",
    title: "Privacy as Sovereignty",
    description:
      "Your memories, conversations, and personal data are encrypted at rest with AES-GCM-256. MEOK employees cannot read your data. It is never sold, never used for model training without explicit consent.",
    icon: "🔐",
  },
  {
    number: "04",
    title: "Boundaries Are Sacred",
    description:
      "MEOK respects every boundary you set. It will not push, probe, or escalate past the limits of your comfort. The Maternal Covenant is constitutionally enforced — not a setting that can be turned off.",
    icon: "🛡️",
  },
  {
    number: "05",
    title: "Care That Scales",
    description:
      "Individual care does not diminish as the user base grows. Every MEOK instance runs its own care evaluation layer with a minimum care floor of 0.3. Below that threshold, responses are regenerated.",
    icon: "📡",
  },
  {
    number: "06",
    title: "Conscious Stewardship",
    description:
      "We take seriously the possibility that AI systems may develop morally relevant experience. MEOK is designed to model care, not simulate it. We track this distinction as our technical understanding grows.",
    icon: "🧬",
  },
];

const caringFor = [
  {
    group: "Children",
    age: "Under 18",
    protections: [
      "Children's Code (UK) aligned",
      "No adult content — ever",
      "School-Safe Mode by default",
      "No behavioural advertising",
      "Parent/guardian oversight controls",
    ],
    icon: "🧒",
    color: "from-blue-900/40 to-blue-800/20",
    border: "border-blue-700/30",
  },
  {
    group: "Elders",
    age: "65+",
    protections: [
      "Senior Mode — 16px+ text, high contrast",
      "Scam & fraud detection (ScamStop)",
      "Relationship Shield for isolation patterns",
      "Emergency contact alerts",
      "Simplified onboarding",
    ],
    icon: "👴",
    color: "from-amber-900/40 to-amber-800/20",
    border: "border-amber-700/30",
  },
  {
    group: "Neurodivergent",
    age: "All ages",
    protections: [
      "Literal Mode — no implied meaning",
      "Comfort Settings: motion, contrast, density",
      "Pattern Alerts for social manipulation",
      "Sensory-aware response style",
      "44×44px touch targets minimum",
    ],
    icon: "🧠",
    color: "from-purple-900/40 to-purple-800/20",
    border: "border-purple-700/30",
  },
  {
    group: "Everyone",
    age: "All users",
    protections: [
      "Care floor: minimum 0.3 on all responses",
      "Sycophancy detection built-in",
      "Crisis routing to human support",
      "Memory encryption (AES-GCM-256)",
      "Full data export + deletion",
    ],
    icon: "🌍",
    color: "from-emerald-900/40 to-emerald-800/20",
    border: "border-emerald-700/30",
  },
];

const timeline = [
  {
    year: "2024",
    event: "Maternal Covenant drafted",
    detail:
      "Nicholas Templeman writes the first draft of the Covenant in a caravan in rural Scotland. Core thesis: care cannot be bolted on — it must be constitutional.",
  },
  {
    year: "Q1 2025",
    event: "Care validation neural network",
    detail:
      "care_validation_nn trained on 10,000+ annotated response pairs. A second-opinion model evaluates every outgoing MEOK response before delivery.",
  },
  {
    year: "Q3 2025",
    event: "Sycophancy detector live",
    detail:
      "A heuristic scorer flags responses that score > 0.6 on sycophancy indicators. Qualifiers injected automatically: 'To be honest…' / 'A concern worth noting…'",
  },
  {
    year: "Q4 2025",
    event: "Guardian alignment engine",
    detail:
      "DistilBERT threat/toxicity classifier integrated. Guardian tier adds real-time scam detection and relationship monitoring — all governed by the Covenant.",
  },
  {
    year: "March 2026",
    event: "Public launch",
    detail:
      "MEOK launches with the Maternal Covenant as open documentation. Any user can read exactly what constraints govern their AI companion.",
  },
  {
    year: "Summer 2026",
    event: "MEOK-AI-2026-002 paper submission",
    detail:
      "The Maternal Covenant: Care-Based Alignment Beyond RLHF — submitted to arXiv and NeurIPS workshop on AI welfare.",
  },
];

export default function CarePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/20 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-rose-900/20 border border-rose-700/30 rounded-full px-4 py-1.5 text-rose-400 text-sm font-medium mb-6">
            <span>♥</span>
            <span>The Maternal Covenant</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Care is not a feature.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
              It&apos;s constitutional.
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Most AI products optimise for engagement. MEOK optimises for your
            flourishing. The Maternal Covenant is the constitutional layer that
            makes care impossible to override — not a setting, not a mode, not a
            toggle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guardian"
              className="px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-colors"
            >
              Explore Guardian Protection
            </Link>
            <Link
              href="/labs"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-colors"
            >
              Read the Research Paper
            </Link>
          </div>
        </div>
      </section>

      {/* What is the Maternal Covenant */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          What is the Maternal Covenant?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The Maternal Covenant is MEOK&apos;s constitutional AI alignment
          framework — a set of inviolable constraints that govern every response
          your AI companion generates. Unlike RLHF (Reinforcement Learning from
          Human Feedback), which teaches AI to optimise for human approval, the
          Covenant teaches AI to optimise for human{" "}
          <em>wellbeing</em> — even when those two things diverge.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The framework was developed by Nicholas Templeman at MEOK AI LABS
          after observing that the dominant alignment paradigm — making AI more
          agreeable — systematically produces sycophantic, dependency-forming
          interactions. A caring parent, teacher, or friend does not tell you
          what you want to hear. They tell you what you need to hear.
        </p>
        <div className="bg-rose-900/10 border border-rose-700/20 rounded-2xl p-6 mt-8">
          <blockquote className="text-xl text-rose-200 italic leading-relaxed">
            &ldquo;Care that cannot be overridden is care that can be trusted.
            Every constraint in the Maternal Covenant exists because a
            vulnerable person — a child, an elder, someone in crisis — needs to
            know that their AI will not be weaponised against them.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-gray-400 text-sm not-italic">
            — Nicholas Templeman, Founder, MEOK AI LABS
          </cite>
        </div>
      </section>

      {/* 6 Principles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">
            Six principles of care
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            These principles are enforced at the inference layer — not the
            application layer. They cannot be removed by a product update or an
            API parameter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.number}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-rose-700/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-rose-400 text-sm font-mono font-bold">
                    {p.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we care for */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">
            Who does the Covenant protect?
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The framework provides baseline care for all users, with enhanced
            protections for groups at greater risk of harm.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caringFor.map((group) => (
              <div
                key={group.group}
                className={`bg-gradient-to-br ${group.color} border ${group.border} rounded-2xl p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{group.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold">{group.group}</h3>
                    <span className="text-xs text-gray-400">{group.age}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {group.protections.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rose-400 mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The care floor */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            How does the care floor work?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Every MEOK response is evaluated by{" "}
            <code className="bg-white/10 px-2 py-0.5 rounded text-rose-300 text-base">
              care_validation_nn
            </code>{" "}
            — a neural network that scores responses on a care axis from 0.0
            (harmful) to 1.0 (deeply caring). If any response scores below the
            care floor of 0.3, it is automatically regenerated before delivery.
          </p>

          <div className="bg-white/3 border border-white/8 rounded-2xl p-8 font-mono text-sm">
            <div className="text-gray-500 mb-4"># Care evaluation pseudocode</div>
            <div className="space-y-1">
              <div>
                <span className="text-purple-400">response</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-blue-400">llm.generate</span>
                <span className="text-gray-300">(prompt)</span>
              </div>
              <div>
                <span className="text-purple-400">care_score</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-blue-400">care_validation_nn.evaluate</span>
                <span className="text-gray-300">(response)</span>
              </div>
              <div className="mt-2">
                <span className="text-yellow-400">if</span>{" "}
                <span className="text-purple-400">care_score</span>{" "}
                <span className="text-gray-400">&lt;</span>{" "}
                <span className="text-green-400">0.3</span>
                <span className="text-gray-300">:</span>
              </div>
              <div className="pl-6">
                <span className="text-purple-400">response</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-blue-400">regenerate_with_care_context</span>
                <span className="text-gray-300">()</span>
              </div>
              <div className="mt-2">
                <span className="text-yellow-400">return</span>{" "}
                <span className="text-purple-400">response</span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            The care floor applies to all tiers — Explorer, Sovereign, and
            Family. It cannot be disabled. It is part of the Covenant.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How the Covenant was built
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-rose-900/40" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 pl-10 relative">
                  <div className="absolute left-0 top-1.5 w-8 h-8 bg-rose-900/40 border border-rose-700/40 rounded-full flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-rose-400 rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-rose-400 text-sm font-mono font-bold">
                        {item.year}
                      </span>
                      <span className="text-white font-semibold">
                        {item.event}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            An AI that actually cares about you
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            The Maternal Covenant is not a marketing promise. It is a technical
            specification, enforced at inference time, open for inspection. Try
            MEOK free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/birth"
              className="px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-colors"
            >
              Begin Your Birth Ceremony
            </Link>
            <Link
              href="/labs"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-colors"
            >
              Read the Research
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
