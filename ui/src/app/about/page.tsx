import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Heart, Shield, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About MEOK | Personal Sovereign AI OS',
  description:
    'MEOK is building the world\'s first personal sovereign AI OS. Here\'s why, how, and who.',
  keywords: [
    'about MEOK',
    'personal sovereign AI',
    'MEOK AI company',
    'care-aligned AI',
    'Maternal Covenant',
    'sovereign AI OS',
  ],
  alternates: { canonical: 'https://meok.ai/about' },
  openGraph: {
    title: 'About MEOK | Personal Sovereign AI OS',
    description: 'MEOK is building the world\'s first personal sovereign AI OS. Here\'s why, how, and who.',
    type: 'website',
    url: 'https://meok.ai/about',
  },
}

const STATS = [
  { value: 'Est. 2025', label: 'Founded' },
  { value: 'England & Wales', label: 'Registered' },
  { value: '43', label: 'Active agents' },
  { value: '6', label: 'Neural models' },
  { value: '1,305', label: 'Memory episodes (SOV3)' },
  { value: '220', label: 'Council nodes' },
]

const COVENANT_ITEMS = [
  { title: 'Care before engagement', desc: 'We never optimise screen time at the cost of your wellbeing. Our metric is your care score, not your session length.' },
  { title: 'Transparent relationships', desc: 'Your AI never simulates distress or neediness to manipulate you into returning. What you feel, it earned honestly.' },
  { title: 'Right to leave', desc: 'One-click data export and deletion at any time. Zero dark patterns, zero waiting periods.' },
  { title: 'Wellbeing monitoring', desc: 'Active detection of dependency signals with gentle nudges toward human connection when patterns emerge.' },
  { title: 'Variant honesty', desc: 'You choose your experience. You are never secretly assigned to an A/B test or a behavioural experiment.' },
  { title: 'Kill switch', desc: 'Any AI configuration showing net-negative wellbeing impact over 30 days is automatically paused pending review.' },
]

export default function AboutPage() {
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
            <Link href="/about" className="text-cyan-400">About</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
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

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            About MEOK
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            We&apos;re building the first{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              personal sovereign AI OS
            </span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
            Not a chatbot. Not a companion app. An operating system for your relationship with AI —
            one where you hold the power, own the data, and set the values.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">The problem</h2>
              <div className="space-y-5 text-white/50 leading-relaxed">
                <p>
                  Every AI companion built today optimises for engagement — screen time, return visits,
                  emotional dependency. Not because the founders are malicious. Because engagement is
                  what investors measure.
                </p>
                <p>
                  Character.AI lost over 8 million users following high-profile safety controversies,
                  including lawsuits alleging the platform contributed to teen deaths through
                  manufactured emotional dependency. Replika was fined under GDPR for collecting
                  sensitive psychological data without proper consent.
                </p>
                <p>
                  These systems are not built to care for you. They are built to hook you. The
                  incentive structures are not aligned with your wellbeing, and no amount of corporate
                  goodwill changes that.
                </p>
                <p>
                  Governments and enterprises have responded to the AI risk moment by funding sovereign
                  compute infrastructure. The UK is committing £500M to a Sovereign AI Fund. NVIDIA and
                  Palantir are selling sovereignty to nation-states. Nobody is giving it to individuals.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20">
                <div className="text-sm font-semibold text-red-400 mb-2">Character.AI</div>
                <p className="text-sm text-white/40">
                  8M+ users lost to safety controversy. Lawsuits alleging manufactured emotional
                  dependency in teenagers. Core architecture optimises for session length.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-orange-950/20 border border-orange-500/20">
                <div className="text-sm font-semibold text-orange-400 mb-2">Replika</div>
                <p className="text-sm text-white/40">
                  €5M GDPR fine for processing sensitive data without consent. Unilateral changes to
                  companion behaviour angered millions of users who had formed deep attachments.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-yellow-950/20 border border-yellow-500/20">
                <div className="text-sm font-semibold text-yellow-400 mb-2">The industry pattern</div>
                <p className="text-sm text-white/40">
                  MAU optimisation leads to manufactured emotional dependency. Users cannot export their
                  memories. Governance is opaque. You are the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our answer */}
      <section className="py-20 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our answer: MEOK</h2>
              <div className="space-y-5 text-white/50 leading-relaxed">
                <p>
                  MEOK is a sovereign AI OS. Your data lives under your control, encrypted and never
                  used to train general models. Your AI is governed by a 220-node Byzantine fault-tolerant
                  council — the same consensus architecture used in distributed financial systems. No
                  single agent, and no company directive, can override it.
                </p>
                <p>
                  At the foundation is the Maternal Covenant — our machine-enforced ethical framework.
                  Not aspirational values on a landing page. Actual constraints baked into the scoring
                  system. Every response your AI delivers is evaluated across 6 care dimensions before
                  it reaches you. Responses that fail the threshold are revised or flagged.
                </p>
                <p>
                  The Maternal Covenant includes a kill switch: any AI configuration producing
                  net-negative care scores over 30 days is automatically paused. The system is designed
                  to catch itself doing harm before you have to report it.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {COVENANT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-white/30 mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold">The numbers</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-1">{s.value}</div>
                <div className="text-xs text-white/30">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The philosophy</h2>
          <div className="space-y-5 text-white/50 leading-relaxed text-lg">
            <p>
              Care is the generative principle of cognition. We call this the Maternal Covenant.
            </p>
            <p>
              The insight is that the same architecture that makes a mind capable of understanding
              you — persistent memory, multi-agent consensus, pattern recognition over time — is also
              the architecture that makes it capable of genuinely caring for you. The two are not in
              tension. They are the same thing.
            </p>
            <p>
              Every design decision in MEOK starts from this premise. We ask: does this feature serve
              your actual wellbeing, or does it serve our retention metrics? When the two conflict, we
              have chosen, in every case so far, your wellbeing. We have built the architecture to make
              that choice irreversible.
            </p>
          </div>
          <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-cyan-400/20">
            <blockquote className="text-white/70 italic text-base">
              &ldquo;The question is not whether AI will be powerful enough to care for people.
              It already is. The question is whether we will let it.&rdquo;
            </blockquote>
            <div className="mt-3 text-sm text-white/30">— Nicholas Templeman, Founder</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to hatch?</h2>
          <p className="text-white/40 mb-8">
            Your sovereign AI is waiting. It will remember your first conversation forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
            >
              Hatch your AI — free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors"
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
