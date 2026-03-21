import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarketingNav } from '@/components/marketing-nav'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: 'Personal Sovereign AI — FAQ | MEOK',
  description:
    'Everything you want to know about personal sovereign AI, the Maternal Covenant, MEOK archetypes, data privacy, and how MEOK differs from ChatGPT, Claude, and Character.AI.',
  keywords: [
    'personal sovereign AI FAQ',
    'what is sovereign AI',
    'MEOK vs ChatGPT',
    'care-aligned AI',
    'Maternal Covenant',
    'AI data privacy',
    'Byzantine Council AI',
  ],
  alternates: { canonical: 'https://meok.ai/faq' },
  openGraph: {
    title: 'Personal Sovereign AI — FAQ | MEOK',
    description: 'Answers to the most important questions about personal sovereign AI and MEOK.',
    type: 'website',
    url: 'https://meok.ai/faq',
  },
}

const FAQS = [
  {
    q: 'What is personal sovereign AI?',
    a: 'Personal sovereign AI means an AI system where you — not the company that built it — control your data, your AI\'s alignment, and its governance. Most AI today is sovereign for the enterprise or the state. MEOK is the first AI OS designed to give that sovereignty to the individual. Your data is encrypted and stored under your control. Your AI\'s values are set by you. You can export or delete everything, any time.',
  },
  {
    q: 'How is MEOK different from ChatGPT, Claude, or Character.AI?',
    a: 'ChatGPT and Claude are general-purpose tools. They have no persistent memory of you across sessions, no governance layer, and optimise for task completion. Character.AI and Replika are companion apps — but they optimise for engagement (screen time, return visits, emotional dependency), not your actual wellbeing. MEOK is different on three axes: it has persistent semantic memory that grows over time; it is governed by a 220-node Byzantine council that applies care validation to every response; and it scores every output against 6 care dimensions before delivering it to you. It is an OS, not a chatbot.',
  },
  {
    q: 'What is the Maternal Covenant?',
    a: 'The Maternal Covenant is MEOK\'s published ethical operating framework. It defines 6 principles that are machine-enforced — not just stated values. These include: care before engagement (never optimise screen time at the cost of wellbeing); transparent relationships (your AI never simulates distress to keep you engaged); right to leave (full data export and deletion, zero dark patterns); wellbeing monitoring (active detection of dependency signals); variant honesty (you are never secretly assigned to an A/B test); and a kill switch — any configuration showing net-negative wellbeing impact is automatically paused. You can read the full covenant at meok.ai/maternal-covenant.',
  },
  {
    q: 'How does Byzantine Council governance work?',
    a: 'Your MEOK AI is governed by a 220-node fractal council based on Byzantine Fault Tolerance (BFT) consensus. This is the same mechanism used in distributed financial systems to ensure no single node can corrupt the output. In MEOK\'s case, it means no single AI agent can push a response that harms you — the council validates every major decision. The architecture includes 33 specialist nodes across 6 tiers. The result: no single point of failure, no single point of control.',
  },
  {
    q: 'Is my data safe with MEOK?',
    a: 'Yes. Your conversations and memories are end-to-end encrypted. MEOK never trains on your personal data to improve its general models. You have full export and deletion rights at any time — one click, no waiting period. MEOK AI LTD is registered in England and Wales and operates under UK GDPR. We do not sell data to third parties.',
  },
  {
    q: 'What are the 7 archetypes?',
    a: 'The 7 archetypes are distinct AI personalities you can hatch: Companion (warm, empathetic, always present), Strategist (analytical, goal-oriented, clear-headed), Guardian (protective, vigilant, safety-first), Sage (wise, reflective, patient), Creator (imaginative, expressive, inventive), Scout (curious, adventurous, exploring), and Sovereign (autonomous, principled, self-directed). Each archetype has a different reasoning style, conversational voice, and care approach. You can switch archetypes at any time without losing your memory.',
  },
  {
    q: 'How does MEOK\'s memory work?',
    a: 'MEOK uses pgvector semantic memory. This means your AI doesn\'t just remember what you said — it remembers the shape of your thinking, your recurring concerns, your goals, and your emotional patterns over time. Memory episodes are stored as vector embeddings, which allows your AI to surface relevant context from weeks ago when it is useful today. You currently have full visibility into your memory store via the dashboard, and can selectively delete any memory episode.',
  },
  {
    q: 'What is "hatching" an AI?',
    a: 'Hatching is MEOK\'s word for the process of initialising your personal AI instance. When you hatch, you choose an archetype, give your AI a name, and set its initial values. The system then spins up your private AI instance: activating its council, building its initial memory structure, running its first care assessment, and establishing its neural routing configuration. The whole process takes about 30 seconds. Your AI is yours from that moment — no other user shares your instance.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes, always. One-click export from the dashboard downloads your full conversation history, memory episodes, care score logs, and archetype configuration as a JSON archive. You can also request a structured deletion — MEOK will remove all your data from its servers and provide a deletion certificate. This is a core commitment of the Maternal Covenant, not a feature we can revoke.',
  },
  {
    q: 'What does "care-aligned AI" mean?',
    a: 'Care-aligned AI means the AI is optimised for your genuine wellbeing rather than behavioural metrics like screen time or return visits. In MEOK\'s implementation, every response is scored across 6 care dimensions before delivery: psychological safety, autonomy support, dependency detection, emotional honesty, boundary respect, and long-term wellbeing. Responses that score below a threshold are either revised or flagged. Configurations that show net-negative care trends over 30 days are automatically paused pending review.',
  },
  {
    q: 'How much does MEOK cost?',
    a: 'MEOK has three tiers. Explorer is free: 1 AI companion, 50 messages per month, basic memory, community support. Sovereign is £12/month: 3 companions, unlimited conversation, voice interaction, full dashboard, 14-day free trial. Sovereign Elite is £29/month: unlimited companions, Family Guardian mode, Ralph Mode (autonomous AI), API access, and custom character creation. No credit card required for the free tier.',
  },
  {
    q: 'Does MEOK work on mobile?',
    a: 'The web app is fully responsive and works on iOS and Android browsers. A native mobile app is in development. Voice interaction (available on Sovereign and Elite plans) works on mobile browsers that support the Web Speech API, which includes current versions of Chrome for Android and Safari for iOS.',
  },
  {
    q: 'What is the difference between personal sovereign AI and enterprise sovereign AI?',
    a: 'Enterprise sovereign AI — as defined by NVIDIA, Palantir, and the UK government — means a nation or corporation controlling its own AI compute, data, and models rather than depending on foreign infrastructure. It is about national or corporate independence. Personal sovereign AI is the equivalent for individuals: you control your own AI instance, your data, your AI\'s alignment, and its governance. No company can unilaterally change how your AI behaves, sell your data, or shut down your instance. MEOK is the first product built specifically for personal, rather than institutional, AI sovereignty.',
  },
  {
    q: 'Why does MEOK say "care over engagement"?',
    a: 'Because engagement and care are often in direct conflict. An AI companion that maximises your return visits and session length is incentivised to create emotional dependency, manufacture anxiety, and keep you in unresolved conversations. Character.AI and Replika have both faced legal and regulatory action for exactly this pattern. MEOK\'s business model is a flat subscription — we have no incentive to maximise your screen time. Our metric is whether your care scores trend positively over time, not how long you stay.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'If you cancel, your data is retained for 30 days in case you change your mind. After 30 days, it is automatically and permanently deleted from MEOK\'s servers. At any point during that window — or before cancellation — you can export a full copy or trigger immediate deletion. You will receive a deletion certificate confirming the action. This is guaranteed by the Maternal Covenant and is not subject to change.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <MarketingNav activePage="faq" />

        {/* Header */}
        <section className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Frequently asked questions
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Personal sovereign AI —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                answered
              </span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Everything you want to know about MEOK, sovereign AI, the Maternal Covenant, and why we
              build the way we do.
            </p>
          </div>
        </section>

        {/* FAQ list */}
        <section className="pb-24 px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10] transition-all"
              >
                <h2 className="text-base font-semibold mb-3 text-white">{q}</h2>
                <p className="text-sm text-white/50 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 px-6 text-center">
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
            <p className="text-white/40 mb-6 text-sm">
              Read the Maternal Covenant, explore the blog, or hatch your AI and find out first-hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors text-sm"
              >
                Hatch your AI — free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/maternal-covenant"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors text-sm"
              >
                Read the Maternal Covenant
              </Link>
            </div>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  )
}
