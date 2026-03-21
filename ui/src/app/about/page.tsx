import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Shield, ArrowRight, Check, FlaskConical } from 'lucide-react'
import { MarketingNav } from '@/components/marketing-nav'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: 'About MEOK AI: Building AI That Cares',
  description:
    "MEOK means 'eat' in Korean — we consume data ethically. Founded by Nicholas Templeman (Nick Randall), MEOK AI LTD is building the world's first personal sovereign AI OS.",
  keywords: [
    'about MEOK',
    'Nicholas Templeman',
    'Nick Randall',
    'personal sovereign AI',
    'MEOK AI company',
    'care-aligned AI',
    'Maternal Covenant',
    'sovereign AI OS',
    'CSGA Cyber-AI Research Institute',
  ],
  alternates: { canonical: 'https://meok.ai/about' },
  openGraph: {
    title: 'About MEOK AI: Building AI That Cares',
    description:
      "MEOK means 'eat' in Korean — we consume data ethically. Founded by Nicholas Templeman (Nick Randall), MEOK AI LTD is building the world's first personal sovereign AI OS.",
    type: 'website',
    url: 'https://meok.ai/about',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nicholas Templeman',
  alternateName: 'Nick Randall',
  jobTitle: 'Founder & CEO',
  worksFor: {
    '@type': 'Organization',
    name: 'MEOK AI LTD',
    url: 'https://meok.ai',
  },
  url: 'https://meok.ai/about',
  knowsAbout: [
    'Sovereign AI',
    'Care-Based AI Alignment',
    'Byzantine Fault Tolerance',
    'AI Governance',
    'Human-AI Cognitive Symbiosis',
    'Hydro-Neuromorphic Emergence',
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'CSGA Cyber-AI Research Institute',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MEOK AI LTD',
  url: 'https://meok.ai',
  description: "The world's first personal sovereign AI operating system.",
  foundingDate: '2025',
  foundingLocation: {
    '@type': 'Place',
    name: 'England and Wales',
  },
  founder: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    alternateName: 'Nick Randall',
  },
}

const STATS = [
  { value: 'Est. 2025', label: 'Founded' },
  { value: 'England & Wales', label: 'Registered' },
  { value: '220', label: 'Council nodes' },
  { value: '6', label: 'Care dimensions' },
  { value: '£0', label: 'Third-party data sales' },
  { value: '4', label: 'Published research papers' },
]

const COVENANT_ITEMS = [
  { title: 'Care before engagement', desc: 'We never optimise screen time at the cost of your wellbeing. Our metric is your care score, not your session length.' },
  { title: 'Transparent relationships', desc: 'Your AI never simulates distress or neediness to manipulate you into returning. What you feel, it earned honestly.' },
  { title: 'Right to leave', desc: 'One-click data export and deletion at any time. Zero dark patterns, zero waiting periods.' },
  { title: 'Wellbeing monitoring', desc: 'Active detection of dependency signals with gentle nudges toward human connection when patterns emerge.' },
  { title: 'Variant honesty', desc: 'You choose your experience. You are never secretly assigned to an A/B test or a behavioural experiment.' },
  { title: 'Kill switch', desc: 'Any AI configuration showing net-negative wellbeing impact over 30 days is automatically paused pending review.' },
]

const FOUNDER_EXPERTISE = [
  'Sovereign AI architecture',
  'Care-based AI alignment',
  'Byzantine fault-tolerant governance',
  'Human-AI cognitive symbiosis',
  'AI ethics and personal data sovereignty',
  'Hydro-neuromorphic emergence',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <MarketingNav activePage="about" />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            About MEOK
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            About MEOK AI:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Building AI That Cares
            </span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
            MEOK means &ldquo;eat&rdquo; in Korean — we consume data ethically. Founded by Nicholas
            Templeman (Nick Randall), MEOK AI LTD is building the world&apos;s first personal
            sovereign AI operating system.
          </p>
        </div>
      </section>

      {/* About the Company */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">About MEOK AI</h2>
              <div className="space-y-5 text-white/50 leading-relaxed">
                <p>
                  MEOK AI LTD was founded in 2025 and registered in England and Wales. We are
                  building the world&apos;s first personal sovereign AI operating system — giving
                  individuals the same AI sovereignty that enterprise platforms like Palantir give
                  to governments.
                </p>
                <p>
                  The name MEOK (먹) means &ldquo;eat&rdquo; in Korean. We consume data
                  ethically — processing it in service of the individual, never selling it,
                  never training general models on it. Your data feeds your AI, and no one else.
                </p>
                <p>
                  Our mission: every person on earth deserves a sovereign AI that works for them,
                  not for advertisers, shareholders, or governments. AI sovereignty is a human
                  right.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                <div className="text-sm font-semibold text-cyan-400 mb-2">Founded</div>
                <p className="text-sm text-white/60">
                  2025 · Registered in England and Wales · MEOK AI LTD
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="text-sm font-semibold text-white/60 mb-2">Mission</div>
                <p className="text-sm text-white/40">
                  Build the world&apos;s first personal sovereign AI OS. Make AI sovereignty
                  accessible to every individual, not just governments and enterprises.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="text-sm font-semibold text-white/60 mb-2">Research affiliation</div>
                <p className="text-sm text-white/40">
                  CSGA Cyber-AI Research Institute — publishing peer-reviewed research on
                  care-aligned AI, Byzantine governance, and sovereign AI architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-20 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
              <FlaskConical className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About the Founder</h2>
              <div className="space-y-5 text-white/50 leading-relaxed">
                <p>
                  <strong className="text-white/80">Nicholas Templeman</strong> (also known as
                  Nick Randall) is the Founder and CEO of MEOK AI LTD. He is a researcher,
                  architect, and builder in the field of sovereign AI and care-based alignment.
                </p>
                <p>
                  Nicholas leads research at the CSGA Cyber-AI Research Institute, where he
                  has published foundational papers on human-AI cognitive symbiosis, Byzantine
                  fault-tolerant AI governance, hydro-neuromorphic emergence, and the Maternal
                  Covenant alignment framework.
                </p>
                <p>
                  His core insight: the same architecture that makes an AI capable of genuinely
                  understanding a human — persistent memory, multi-agent consensus, pattern
                  recognition over time — is also the architecture that makes it capable of
                  genuinely caring for them. The two are not in tension. They are the same thing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-3">
                Research expertise
              </div>
              <ul className="space-y-2">
                {FOUNDER_EXPERTISE.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-white/60">
                    <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">
                  Role
                </div>
                <p className="text-sm text-white/60">Founder & CEO, MEOK AI LTD</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">
                  Research affiliation
                </div>
                <p className="text-sm text-white/60">CSGA Cyber-AI Research Institute</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">
                  Published papers
                </div>
                <p className="text-sm text-white/60">
                  CSGA-CAI-2026-001 through 004 ·{' '}
                  <Link href="/labs" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    View research →
                  </Link>
                </p>
              </div>
            </div>
          </div>
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
            <div className="mt-3 text-sm text-white/30">— Nicholas Templeman, Founder & CEO, MEOK AI LTD</div>
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

      <MarketingFooter />
    </div>
  )
}
