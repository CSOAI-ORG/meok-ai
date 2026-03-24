import { PROBLEMS, getProblemBySlug } from '@/data/problems';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Users, Zap, CheckCircle2, AlertTriangle } from 'lucide-react';
import { MarketingFooter } from '@/components/marketing-footer';

// ── Static params ──────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return PROBLEMS.map((p) => ({ slug: p.slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const problem = getProblemBySlug(slug);
  if (!problem) return {};
  return {
    title: `Problem ${problem.number}: ${problem.title} — Solved by MEOK`,
    description: problem.fullProblem.slice(0, 160),
    alternates: { canonical: `https://meok.ai/problems/${slug}` },
    openGraph: {
      title: `Problem ${problem.number}: ${problem.title} — Solved by MEOK`,
      description: problem.headline,
      type: 'article',
      url: `https://meok.ai/problems/${slug}`,
    },
  };
}

// ── Emoji map ──────────────────────────────────────────────────────────────────

const SLUG_EMOJI: Record<string, string> = {
  'ai-amnesia': '🧠',
  'data-ownership': '🔑',
  'data-privacy': '🔒',
  'ai-personality': '🫥',
  'family-safety': '🛡️',
  'model-lock-in': '⛓️',
  'scattered-tools': '🌐',
  'family-intelligence': '👨‍👩‍👧',
  'gaming-fragmentation': '🎮',
  'ai-ethics': '⚖️',
  'no-ai-os': '🌍',
};

// ── Related features for each problem ─────────────────────────────────────────

const RELATED: Record<string, { label: string; href: string }[]> = {
  'ai-amnesia': [
    { label: 'Memory OS', href: '/memory' },
    { label: 'Sovereign Data', href: '/sovereign' },
  ],
  'data-ownership': [
    { label: 'Maternal Covenant', href: '/maternal-covenant' },
    { label: 'Personal OS', href: '/personal' },
  ],
  'data-privacy': [
    { label: 'Maternal Covenant', href: '/maternal-covenant' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  'ai-personality': [
    { label: 'Characters', href: '/characters' },
    { label: 'Hatch', href: '/hatch' },
  ],
  'family-safety': [
    { label: 'Guardian', href: '/guardian' },
    { label: 'Family OS', href: '/family' },
  ],
  'model-lock-in': [
    { label: 'Any LLM', href: '/os/any-llm' },
    { label: 'Compare', href: '/compare' },
  ],
  'scattered-tools': [
    { label: 'Connect', href: '/connect' },
    { label: 'Work OS', href: '/work' },
  ],
  'family-intelligence': [
    { label: 'Character Council', href: '/council' },
    { label: 'Family OS', href: '/family' },
  ],
  'gaming-fragmentation': [
    { label: 'Gaming OS', href: '/gaming' },
    { label: 'Connect', href: '/connect' },
  ],
  'ai-ethics': [
    { label: 'Maternal Covenant', href: '/maternal-covenant' },
    { label: 'Research', href: '/research' },
  ],
  'no-ai-os': [
    { label: 'Full OS', href: '/os' },
    { label: 'Product', href: '/product' },
  ],
};

// ── JSON-LD builder ────────────────────────────────────────────────────────────

function buildJsonLd(problem: NonNullable<ReturnType<typeof getProblemBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Problem ${problem.number}: ${problem.title}`,
    description: problem.headline,
    articleBody: `${problem.fullProblem} ${problem.meokSolution}`,
    author: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
    publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://meok.ai/problems/${problem.slug}` },
  };
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function ProblemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const problem = getProblemBySlug(slug);
  if (!problem) notFound();

  const currentIndex = PROBLEMS.findIndex((p) => p.slug === slug);
  const prevProblem = currentIndex > 0 ? PROBLEMS[currentIndex - 1] : null;
  const nextProblem = currentIndex < PROBLEMS.length - 1 ? PROBLEMS[currentIndex + 1] : null;
  const related = RELATED[slug] ?? [];
  const emoji = SLUG_EMOJI[slug] ?? '●';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(problem)) }}
      />

      <div className="min-h-screen bg-[#0d0c18] text-white">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
          {/* Background blobs */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 30%, ${problem.color}18 0%, transparent 65%)`,
            }}
            aria-hidden
          />
          <div className="blob-gold absolute top-24 left-1/4 w-72 h-72 pointer-events-none" style={{ opacity: 0.3 }} aria-hidden />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/problems"
              className="inline-flex items-center gap-1.5 text-white/40 text-sm hover:text-white/70 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All 11 Problems
            </Link>

            {/* Number badge */}
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border"
                style={{
                  background: `${problem.color}15`,
                  color: problem.color,
                  borderColor: `${problem.color}35`,
                }}
              >
                Problem {problem.number} of 11
              </span>
            </div>

            {/* Emoji + title */}
            <div className="text-6xl mb-4 float-slow inline-block">{emoji}</div>
            <h1
              className="font-black text-white leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)' }}
            >
              {problem.title}
            </h1>
            <p
              className="text-xl max-w-2xl mx-auto leading-relaxed italic"
              style={{ color: `${problem.color}cc` }}
            >
              &ldquo;{problem.headline}&rdquo;
            </p>
          </div>
        </section>

        {/* ── Problem vs Solution ───────────────────────────────────────────── */}
        <section className="pb-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

            {/* The Problem */}
            <div className="glass-card rounded-3xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-red-500/10 border border-red-500/20">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-red-400 text-xs font-bold tracking-widest uppercase">The Problem</p>
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-8">{problem.fullProblem}</p>

              {/* Who feels it */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-white/30" />
                  <p className="text-white/30 text-xs uppercase tracking-widest">Who feels this most</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {problem.whoFeelsThis.map((who) => (
                    <span
                      key={who}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        borderColor: 'rgba(255,255,255,0.10)',
                        color: 'rgba(255,255,255,0.55)',
                      }}
                    >
                      {who}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div
              className="rounded-3xl p-8 sm:p-10"
              style={{
                background: `linear-gradient(135deg, ${problem.color}12, ${problem.color}06)`,
                border: `1px solid ${problem.color}28`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center border"
                  style={{
                    background: `${problem.color}20`,
                    borderColor: `${problem.color}35`,
                  }}
                >
                  <CheckCircle2 className="w-5 h-5" style={{ color: problem.color }} />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color: problem.color }}>
                  The MEOK Solution
                </p>
              </div>
              <p className="text-white/85 text-base leading-relaxed mb-8">{problem.meokSolution}</p>

              {/* Solution feature badge */}
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4" style={{ color: problem.color }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: `${problem.color}cc` }}>
                  Feature: {problem.solutionFeature}
                </span>
              </div>

              <Link
                href={problem.productLink}
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: problem.color, color: '#1a1a2e' }}
              >
                Explore {problem.productName} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Related features ──────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="pb-20 px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-5">Related features</p>
              <div className="flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:border-[#c9a84c]/40 hover:text-[#c9a84c]"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderColor: 'rgba(255,255,255,0.10)',
                      color: 'rgba(255,255,255,0.60)',
                    }}
                  >
                    {r.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
                <Link
                  href="/problems"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:border-white/20"
                  style={{
                    borderColor: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.30)',
                  }}
                >
                  See all 11 problems
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── Prev / Next navigation ────────────────────────────────────────── */}
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto border-t border-white/[0.06] pt-10 flex justify-between items-center gap-4">
            {prevProblem ? (
              <Link
                href={`/problems/${prevProblem.slug}`}
                className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm max-w-xs"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span>
                  <span className="block text-[10px] uppercase tracking-widest text-white/25 mb-0.5">Previous</span>
                  {prevProblem.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            <Link
              href="/problems"
              className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest hover:text-[#e8c87a] transition-colors shrink-0"
            >
              All 11
            </Link>

            {nextProblem ? (
              <Link
                href={`/problems/${nextProblem.slug}`}
                className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm text-right max-w-xs"
              >
                <span>
                  <span className="block text-[10px] uppercase tracking-widest text-white/25 mb-0.5">Next</span>
                  {nextProblem.title}
                </span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section
          className="relative py-28 px-6 text-center overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #0d0c18 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${problem.color}14 0%, transparent 60%)`,
            }}
            aria-hidden
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-black text-white text-3xl sm:text-4xl mb-4 tracking-tight">
              Ready to solve all 11?
            </h2>
            <p className="text-white/45 mb-8 leading-relaxed">
              MEOK OS. Free forever. No credit card.{' '}
              <span className="text-[#c9a84c]">Launches Easter Sunday, April 5 2026.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/hatch"
                className="inline-flex items-center justify-center gap-2 font-black rounded-full px-10 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: '#c9a84c', color: '#1a1a2e' }}
              >
                Hatch your AI free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-10 py-4 text-base border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
              >
                Join the waitlist
              </Link>
            </div>
            <p className="text-white/20 text-xs mt-6">
              Free forever · No credit card · Sovereign by design
            </p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
