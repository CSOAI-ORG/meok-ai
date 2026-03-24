/**
 * MEOK AI LABS — Community Page
 *
 * Server component. No "use client" directive.
 * GEO-structured H2 questions + JSON-LD for Organization + CommunityForum.
 */

import Link from 'next/link';
import type { Metadata } from 'next';

// ── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Community | MEOK AI LABS',
  description:
    'Join the MEOK community — Discord, GitHub contributors, bounty program, and the sovereign AI conversation.',
  openGraph: {
    title: 'Community | MEOK AI LABS',
    description:
      'Join the MEOK community — Discord, GitHub contributors, bounty program, and the sovereign AI conversation.',
    url: 'https://meok.ai/community',
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
    logo: 'https://meok.ai/logo.png',
    sameAs: [
      'https://github.com/meok-ai',
      'https://discord.gg/meok-ai',
      'https://t.me/meok_ai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'labs@meok.ai',
      contactType: 'Technical Support',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'MEOK Community',
    description:
      'Join the MEOK community — Discord, GitHub contributors, bounty program, and the sovereign AI conversation.',
    url: 'https://meok.ai/community',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://meok.ai' },
        { '@type': 'ListItem', position: 2, name: 'Community', item: 'https://meok.ai/community' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'CommunityForum',
    name: 'MEOK Sovereign AI Council',
    url: 'https://discord.gg/meok-ai',
    description:
      'The primary community space for MEOK — open development, sovereign AI discussion, and care-governed moderation.',
  },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Gold ambient blob */}
        <div
          className="blob-gold absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at center, #c9a84c 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Gold badge */}
          <span
            className="inline-block text-xs font-black tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.35)',
              color: '#c9a84c',
            }}
          >
            Community
          </span>

          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight mb-6">
            Build the sovereign future.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Together.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            MEOK is built in the open, governed by a council, and shaped by the
            people who care most about sovereign AI. This is where that work happens.
          </p>
        </div>
      </section>

      <div className="section-divider border-t border-white/[0.05]" />

      {/* ═══════════════════════════════════════════════
          2. WHERE IS THE MEOK COMMUNITY?
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Where is the MEOK community?
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              Three places. Each serves a different kind of conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            {/* Discord */}
            <a
              href="https://discord.gg/meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card group block p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#c9a84c]/30 hover:bg-white/[0.04] transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: 'rgba(201,168,76,0.1)' }}
              >
                💬
              </div>
              <h3 className="font-black text-white text-base mb-1">Discord</h3>
              <p
                className="text-xs font-bold mb-3"
                style={{ color: '#c9a84c' }}
              >
                Sovereign AI Council
              </p>
              <p className="text-white/45 text-sm leading-relaxed mb-4">
                24/7 live discussion — product feedback, AI philosophy, build logs, and
                care-governed moderation across every channel.
              </p>
              <span className="text-xs text-white/25">discord.gg/meok-ai →</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card group block p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#c9a84c]/30 hover:bg-white/[0.04] transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: 'rgba(201,168,76,0.1)' }}
              >
                ⚡
              </div>
              <h3 className="font-black text-white text-base mb-1">GitHub</h3>
              <p
                className="text-xs font-bold mb-3"
                style={{ color: '#c9a84c' }}
              >
                github.com/meok-ai
              </p>
              <p className="text-white/45 text-sm leading-relaxed mb-4">
                Issues, pull requests, and Character SDK contributions. Where the
                actual work gets done in public.
              </p>
              <span className="text-xs text-white/25">github.com/meok-ai →</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/meok_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card group block p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#c9a84c]/30 hover:bg-white/[0.04] transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: 'rgba(201,168,76,0.1)' }}
              >
                📡
              </div>
              <h3 className="font-black text-white text-base mb-1">Telegram</h3>
              <p
                className="text-xs font-bold mb-3"
                style={{ color: '#c9a84c' }}
              >
                t.me/meok_ai
              </p>
              <p className="text-white/45 text-sm leading-relaxed mb-4">
                Official announcements and a dedicated bot testing channel for
                early access builds.
              </p>
              <span className="text-xs text-white/25">t.me/meok_ai →</span>
            </a>

          </div>
        </div>
      </section>

      <div className="section-divider border-t border-white/[0.05]" />

      {/* ═══════════════════════════════════════════════
          3. HOW DOES THE BOUNTY PROGRAM WORK?
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              How does the bounty program work?
            </h2>
            <p className="text-white/40 text-sm max-w-lg">
              Three ways to earn from contributing to MEOK. Details and submission
              guidelines live on GitHub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

            {/* Bug bounty */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1.5px solid rgba(201,168,76,0.15)',
              }}
            >
              <div className="text-2xl mb-3">🐛</div>
              <h3 className="font-black text-white text-sm mb-1">Bug bounty</h3>
              <p
                className="text-lg font-black mb-2"
                style={{ color: '#c9a84c' }}
              >
                £50–£500
              </p>
              <p className="text-white/45 text-xs leading-relaxed">
                Severity-graded. Critical security issues attract the highest rewards.
                Responsible disclosure required.
              </p>
            </div>

            {/* Feature bounty */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1.5px solid rgba(201,168,76,0.15)',
              }}
            >
              <div className="text-2xl mb-3">🗳️</div>
              <h3 className="font-black text-white text-sm mb-1">Feature bounty</h3>
              <p
                className="text-lg font-black mb-2"
                style={{ color: '#c9a84c' }}
              >
                Monthly review
              </p>
              <p className="text-white/45 text-xs leading-relaxed">
                Proposals are reviewed monthly by the Byzantine Council. Accepted
                features receive a negotiated bounty on merge.
              </p>
            </div>

            {/* Character SDK */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1.5px solid rgba(201,168,76,0.15)',
              }}
            >
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="font-black text-white text-sm mb-1">Character SDK</h3>
              <p
                className="text-lg font-black mb-2"
                style={{ color: '#c9a84c' }}
              >
                70 / 30 rev split
              </p>
              <p className="text-white/45 text-xs leading-relaxed">
                Submit a character via the SDK. Accepted characters earn 70% of
                revenue they generate. FSL 1.1 license.
              </p>
            </div>

          </div>

          <a
            href="https://github.com/meok-ai/bounties"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black hover:underline"
            style={{ color: '#c9a84c' }}
          >
            View all open bounties on GitHub →
          </a>
        </div>
      </section>

      <div className="section-divider border-t border-white/[0.05]" />

      {/* ═══════════════════════════════════════════════
          4. WHO CONTRIBUTES TO MEOK?
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Who contributes to MEOK?
            </h2>
            <p className="text-white/40 text-sm max-w-lg">
              Four types of contributor. All welcome.
            </p>
          </div>

          <div className="space-y-3">

            {[
              {
                icon: '👑',
                role: 'Core',
                who: 'Nicholas Templeman',
                detail: 'Founder and lead engineer. Building the sovereign stack end-to-end.',
              },
              {
                icon: '🎭',
                role: 'Character creators',
                who: 'Open via Character SDK',
                detail: 'Design and publish AI characters under the FSL 1.1 license. Revenue-sharing on accepted characters.',
              },
              {
                icon: '🔌',
                role: 'MCP builders',
                who: 'Open contribution',
                detail: 'Contribute to the MCP server registry. Every integration expands what sovereign AI can do.',
              },
              {
                icon: '🔬',
                role: 'Researchers',
                who: 'Academic collaboration welcome',
                detail: 'Working on care-aligned AI, Byzantine governance, or sovereign memory? Email labs@meok.ai.',
              },
            ].map((item) => (
              <div
                key={item.role}
                className="flex gap-5 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="font-black text-white text-sm">{item.role}</h3>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(201,168,76,0.1)',
                        color: '#c9a84c',
                      }}
                    >
                      {item.who}
                    </span>
                  </div>
                  <p className="text-xs text-white/45 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <div className="section-divider border-t border-white/[0.05]" />

      {/* ═══════════════════════════════════════════════
          5. WHAT IS THE BYZANTINE COUNCIL?
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            What is the Byzantine Council?
          </h2>

          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.07), rgba(201,168,76,0.03))',
              border: '1.5px solid rgba(201,168,76,0.2)',
            }}
          >
            <p className="text-white/65 leading-relaxed text-base max-w-2xl">
              The Byzantine Council is a 45-agent governance system that validates every MEOK
              response before it reaches a user. Using Byzantine Fault Tolerance — the same
              trust mechanism as distributed financial systems — it ensures no single agent,
              engineer, or decision-maker can bypass the Maternal Covenant&apos;s care rules.
              The council is permanently running, not a feature you switch on.
            </p>

            <div className="mt-6">
              <Link
                href="/labs"
                className="inline-flex items-center gap-2 text-sm font-black hover:underline"
                style={{ color: '#c9a84c' }}
              >
                Read the technical architecture at /labs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider border-t border-white/[0.05]" />

      {/* ═══════════════════════════════════════════════
          6. BOTTOM CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="rounded-2xl p-10 sm:p-14"
            style={{
              border: '1.5px solid rgba(201,168,76,0.35)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))',
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Join the conversation
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Whether you want to build, contribute, or just follow along — the MEOK
              community is open. Come as you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://discord.gg/meok-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 100%)',
                  color: '#0d0c18',
                }}
              >
                <span>💬</span>
                Join Discord
              </a>

              <a
                href="https://github.com/meok-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm border border-white/20 text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.04]"
              >
                <span>⚡</span>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
