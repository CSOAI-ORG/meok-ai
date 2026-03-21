import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Check, X, Minus, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'MEOK vs Other AI Companions — Why Sovereign Matters',
  description:
    'How does MEOK compare to Character.AI, Replika, Claude.ai, and ChatGPT? A full comparison of data sovereignty, care alignment, memory, governance, and pricing.',
  keywords: [
    'personal sovereign AI alternative',
    'sovereign AI companion',
    'care-aligned AI',
    'MEOK vs ChatGPT',
    'MEOK vs Character.AI',
    'MEOK vs Replika',
    'best AI companion 2026',
    'sovereign AI comparison',
  ],
  alternates: { canonical: 'https://meok.ai/compare' },
  openGraph: {
    title: 'MEOK vs Other AI Companions — Why Sovereign Matters',
    description:
      'Full comparison: MEOK vs Character.AI, Replika, Claude.ai, ChatGPT. Data sovereignty, care alignment, memory, governance.',
    type: 'website',
    url: 'https://meok.ai/compare',
  },
}

type CellValue = true | false | null | string

interface Row {
  feature: string
  note?: string
  meok: CellValue
  characterai: CellValue
  replika: CellValue
  claude: CellValue
  chatgpt: CellValue
}

const ROWS: Row[] = [
  {
    feature: 'You own your data',
    note: 'Does the user — not the platform — hold data rights?',
    meok: true,
    characterai: false,
    replika: false,
    claude: false,
    chatgpt: false,
  },
  {
    feature: 'Care alignment',
    note: 'Is the system optimised for your wellbeing, not engagement metrics?',
    meok: true,
    characterai: false,
    replika: false,
    claude: null,
    chatgpt: null,
  },
  {
    feature: 'Persistent memory across sessions',
    note: 'Does the AI remember you between conversations?',
    meok: true,
    characterai: false,
    replika: true,
    claude: 'Paid only',
    chatgpt: 'Paid only',
  },
  {
    feature: 'Local / private deployment option',
    note: 'Can you run this on your own infrastructure?',
    meok: 'Roadmap',
    characterai: false,
    replika: false,
    claude: false,
    chatgpt: false,
  },
  {
    feature: 'Multi-LLM routing',
    note: 'Can it route between Claude, DeepSeek, Ollama, etc.?',
    meok: true,
    characterai: false,
    replika: false,
    claude: false,
    chatgpt: false,
  },
  {
    feature: 'Care scores on every response',
    note: 'Is care validation applied and visible on each output?',
    meok: true,
    characterai: false,
    replika: false,
    claude: false,
    chatgpt: false,
  },
  {
    feature: 'AI governance transparency',
    note: 'Is the governance architecture published and auditable?',
    meok: true,
    characterai: false,
    replika: false,
    claude: null,
    chatgpt: null,
  },
  {
    feature: 'Full data export',
    note: 'One-click download of all your data?',
    meok: true,
    characterai: false,
    replika: 'Partial',
    claude: false,
    chatgpt: true,
  },
  {
    feature: 'No third-party training on your data',
    note: 'Your conversations are never used to train general models',
    meok: true,
    characterai: false,
    replika: false,
    claude: 'Teams/API only',
    chatgpt: 'Opt-out',
  },
  {
    feature: 'Kill switch for harmful configs',
    note: 'Auto-pause if net-negative wellbeing detected',
    meok: true,
    characterai: false,
    replika: false,
    claude: false,
    chatgpt: false,
  },
  {
    feature: 'Free tier available',
    meok: true,
    characterai: true,
    replika: true,
    claude: true,
    chatgpt: true,
  },
  {
    feature: 'Paid price',
    meok: '£12/mo',
    characterai: '$9.99/mo',
    replika: '$19.99/mo',
    claude: '$18/mo',
    chatgpt: '$20/mo',
  },
]

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <Check className="w-5 h-5 text-cyan-400 mx-auto" aria-label="Yes" />
  if (value === false) return <X className="w-5 h-5 text-red-400/60 mx-auto" aria-label="No" />
  if (value === null) return <Minus className="w-5 h-5 text-white/20 mx-auto" aria-label="Partial" />
  return <span className="text-xs text-white/40 text-center block">{value}</span>
}

const WHY_NOW = [
  {
    title: 'The UK £500M Sovereign AI Fund',
    body: 'The UK government is investing £500M in sovereign AI infrastructure, with the fund launching April 2026. Every penny goes to national compute — not to individuals. MEOK is filling the personal sovereignty gap that public policy has not addressed.',
  },
  {
    title: 'NVIDIA and Palantir define "sovereign AI" for enterprises',
    body: 'Both companies are selling sovereign AI infrastructure to governments and corporations — national compute stacks, private model deployments, sovereign data lakes. The individual is not in this picture. MEOK is claiming the personal angle before anyone else does.',
  },
  {
    title: 'The companion AI safety crisis',
    body: 'Character.AI has faced multiple lawsuits in 2024–2026 alleging the platform manufactured emotional dependency in vulnerable teenagers. Replika received a €5M GDPR fine. The category has a structural problem: engagement optimisation is incompatible with genuine care. MEOK\'s architecture is the first attempt to solve this structurally, not through policies.',
  },
  {
    title: 'Regulatory pressure on AI data practices',
    body: 'The EU AI Act, UK AI Safety Institute, and emerging US state laws are all moving toward requiring transparency in AI alignment and data handling. MEOK\'s architecture — published Maternal Covenant, care scoring, Byzantine governance — is built to be compliant ahead of these requirements.',
  },
]

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-lg tracking-tight">MEOK</span>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/40">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/compare" className="text-cyan-400">Compare</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-white/50 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link
              href="/register"
              className="text-sm px-4 py-1.5 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
            >
              Hatch your AI
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            MEOK vs Other AI Companions —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Why Sovereign Matters
            </span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Not all AI companions are equal. Here is a complete breakdown of what matters — data
            sovereignty, care alignment, governance, and transparency.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-sm text-white/30 font-medium w-1/3">Feature</th>
                <th className="py-4 px-3 text-center">
                  <div className="text-sm font-bold text-cyan-400">MEOK</div>
                  <div className="text-xs text-white/30 mt-0.5">Sovereign AI OS</div>
                </th>
                <th className="py-4 px-3 text-center">
                  <div className="text-sm font-semibold text-white/60">Character.AI</div>
                  <div className="text-xs text-white/30 mt-0.5">Companion</div>
                </th>
                <th className="py-4 px-3 text-center">
                  <div className="text-sm font-semibold text-white/60">Replika</div>
                  <div className="text-xs text-white/30 mt-0.5">Companion</div>
                </th>
                <th className="py-4 px-3 text-center">
                  <div className="text-sm font-semibold text-white/60">Claude.ai</div>
                  <div className="text-xs text-white/30 mt-0.5">General AI</div>
                </th>
                <th className="py-4 px-3 text-center">
                  <div className="text-sm font-semibold text-white/60">ChatGPT</div>
                  <div className="text-xs text-white/30 mt-0.5">General AI</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-t border-white/[0.04] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
                >
                  <td className="py-4 px-4">
                    <div className="text-sm font-medium text-white/80">{row.feature}</div>
                    {row.note && <div className="text-xs text-white/25 mt-0.5">{row.note}</div>}
                  </td>
                  <td className="py-4 px-3 text-center bg-cyan-950/[0.08]">
                    <Cell value={row.meok} />
                  </td>
                  <td className="py-4 px-3 text-center"><Cell value={row.characterai} /></td>
                  <td className="py-4 px-3 text-center"><Cell value={row.replika} /></td>
                  <td className="py-4 px-3 text-center"><Cell value={row.claude} /></td>
                  <td className="py-4 px-3 text-center"><Cell value={row.chatgpt} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-white/20 text-center">
            Data accurate as of March 2026. Competitor information sourced from public documentation. MEOK features are live or on active roadmap.
          </p>
        </div>
      </section>

      {/* Why personal sovereign AI matters in 2026 */}
      <section className="py-20 px-6 bg-white/[0.01] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Why personal sovereign AI matters in 2026
          </h2>
          <p className="text-white/40 mb-12 max-w-2xl leading-relaxed">
            Governments and enterprises are funding sovereign AI infrastructure for themselves.
            Nobody is doing it for individuals. Here is why that gap matters — and why now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_NOW.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.10] transition-all"
              >
                <h3 className="font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The MEOK difference in one sentence */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">The difference, in plain language</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-cyan-400 font-semibold mb-2">Data sovereignty</div>
              <p className="text-white/40 leading-relaxed">
                Your conversations, memories, and emotional patterns are yours. End-to-end encrypted,
                never used for training, exportable and deletable at any time.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-cyan-400 font-semibold mb-2">Alignment sovereignty</div>
              <p className="text-white/40 leading-relaxed">
                You set the values. The Maternal Covenant guarantees the baseline. No company can
                silently update your AI to optimise for their metrics instead of yours.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-cyan-400 font-semibold mb-2">Governance sovereignty</div>
              <p className="text-white/40 leading-relaxed">
                Byzantine fault-tolerant council. Published architecture. Care scoring on every
                response. You can see how your AI makes decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto p-8 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
          <h2 className="text-2xl font-bold mb-3">Start with sovereignty</h2>
          <p className="text-white/40 mb-6 text-sm">
            Free to start. No credit card required. Your data stays yours from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors text-sm"
            >
              Hatch your AI — free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors text-sm"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/20">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-cyan-400/50" />
            <span>MEOK AI LTD · Registered in England &amp; Wales</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms</Link>
            <Link href="/maternal-covenant" className="hover:text-white/50 transition-colors">Maternal Covenant</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
