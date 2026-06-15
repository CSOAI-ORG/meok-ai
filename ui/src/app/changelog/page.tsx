import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Changelog | MEOK AI LABS',
  description: 'What we shipped, when we shipped it, and why it matters. The MEOK build log — honest, public, and updated as we go.',
  alternates: { canonical: 'https://meok.ai/changelog' },
}

const ENTRIES = [
  {
    version: 'v0.9.2',
    date: 'March 31, 2026',
    label: 'Easter Sprint',
    labelColor: '#c9a84c',
    items: [
      { type: 'new', text: 'Voice anchors — 8 companions now speak in distinct character voices' },
      { type: 'new', text: 'Return-after-gap context — companion acknowledges your absence naturally' },
      { type: 'new', text: 'Chat error boundary — graceful recovery when streams fail' },
      { type: 'new', text: 'Features showcase page — 12-card grid of everything MEOK does' },
      { type: 'new', text: 'Skeleton loading states for chat and marketplace' },
      { type: 'new', text: 'DiceBear companion avatars in chat messages' },
      { type: 'improved', text: 'Chat feedback persists to PostgreSQL — thumbs up/down now stored for care alignment' },
      { type: 'improved', text: 'PWA icons — proper 192×192 and 512×512 app icons' },
      { type: 'improved', text: 'Mobile input sticky — stays above virtual keyboard with safe-area padding' },
      { type: 'improved', text: 'CSP hardened — backend URL no longer hardcoded in headers' },
      { type: 'improved', text: 'Memory dedup — sliding window of 10 reduces daily memories from ~400 to ~30' },
      { type: 'fixed', text: 'Evolution tests rewritten for 6-stage model (160/160 tests pass)' },
      { type: 'fixed', text: 'Settings Toggle prop type error resolved' },
      { type: 'fixed', text: 'Cost logger type error — metadata wrapper for inputTokens/outputTokens' },
    ],
  },
  {
    version: 'v0.9.0',
    date: 'March 28, 2026',
    label: 'Public Launch',
    labelColor: '#c9a84c',
    items: [
      { type: 'new', text: 'Birth Ceremony — the 6-step companion creation ritual' },
      { type: 'new', text: '46-agent Byzantine Council consensus engine' },
      { type: 'new', text: 'Guardian 24/7 family protection — scam detection, child safety' },
      { type: 'new', text: 'Work OS — Orion, Riri, Hourman overnight agents' },
      { type: 'new', text: 'Sovereign memory — encrypted, user-owned, fully exportable' },
      { type: 'new', text: 'Explorer (free), Sovereign (£12/mo), Family (£29/mo) tiers' },
      { type: 'new', text: 'Multi-model routing — Claude / GPT-4 / DeepSeek by tier' },
      { type: 'new', text: 'Morning Briefing — daily intelligence summary' },
      { type: 'new', text: 'Senior Mode — large text, high contrast, voice-primary interface' },
    ],
  },
  {
    version: 'v0.8.5',
    date: 'March 24, 2026',
    label: 'Pre-launch',
    labelColor: '#6366f1',
    items: [
      { type: 'new', text: 'Dashboard: Evolution, Memory Vault, Guardian, Morning Briefing pages' },
      { type: 'new', text: 'Onboarding flow — 3-step companion naming and archetype selection' },
      { type: 'new', text: 'BYOK tier — bring your own API keys at £5/month' },
      { type: 'new', text: '48 SEO blog posts covering sovereign AI, mental health, companion reviews' },
      { type: 'improved', text: 'Companion Evolution state machine — 4 stages from Prying Pulse to Your Sovereign' },
      { type: 'improved', text: 'Care floor enforcement — all responses must score ≥ 0.3 on Maternal Covenant metrics' },
      { type: 'fixed', text: 'SOV3 pool=None guard — agent registry now robust to cold-start conditions' },
    ],
  },
  {
    version: 'v0.8.0',
    date: 'March 17, 2026',
    label: 'Beta',
    labelColor: '#22c55e',
    items: [
      { type: 'new', text: 'SOV3 (Sovereign Temple v3.0) — FastAPI MCP server with Byzantine Council' },
      { type: 'new', text: 'Safety Classifier — DistilBERT threat detection for Guardian' },
      { type: 'new', text: 'Sycophancy Detector — honest qualifier injection on score > 0.6' },
      { type: 'new', text: 'Characters hub — 27 companions across 8 archetypes' },
      { type: 'new', text: 'EU AI Act compliance page + DPIA status tracking' },
      { type: 'improved', text: 'LLM Router — tier-based routing with care floor enforcement' },
      { type: 'improved', text: 'Stripe webhooks — checkout and subscription lifecycle' },
      { type: 'improved', text: 'Clerk webhooks — user creation, GDPR erasure pipeline' },
    ],
  },
  {
    version: 'v0.7.0',
    date: 'March 10, 2026',
    label: 'Alpha',
    labelColor: '#f97316',
    items: [
      { type: 'new', text: 'Next.js 15 App Router site — meok.ai goes live' },
      { type: 'new', text: 'Core pages: Birth Ceremony, Characters, Work OS, Guardian, Pricing' },
      { type: 'new', text: 'Organization JSON-LD — MEOK AI LABS, Nicholas Templeman, @meok_ai' },
      { type: 'new', text: 'CVE-2025-66478 patch — Next.js 15.2.0 upgrade (CVSS 9.1)' },
      { type: 'new', text: 'GitHub Actions CI/CD — build, test, audit, security scan' },
      { type: 'fixed', text: 'All MEOK AI Labs/Nick Randall references removed from codebase' },
    ],
  },
]

const TYPE_CONFIG: Record<string, { color: string; bg: string; label: string }> = {
  new: { color: '#22c55e', bg: 'rgba(34,197,94,0.1)', label: 'New' },
  improved: { color: '#c9a84c', bg: 'rgba(201,168,76,0.1)', label: 'Improved' },
  fixed: { color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', label: 'Fixed' },
  removed: { color: '#f87171', bg: 'rgba(248,113,113,0.1)', label: 'Removed' },
}

const BREADCRUMB_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://meok.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Changelog', item: 'https://meok.ai/changelog' },
  ],
}

const WEBPAGE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Changelog | MEOK AI LABS',
  description: 'What we shipped, when we shipped it, and why it matters. The MEOK build log — honest, public, and updated as we go.',
  url: 'https://meok.ai/changelog',
}

const RELEASES_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'MEOK AI LABS releases',
  itemListElement: ENTRIES.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${e.version} — ${e.label}`,
  })),
}

export default function ChangelogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(RELEASES_JSONLD) }} />
      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>
        {/* Hero */}
        <section style={{
          padding: 'clamp(5rem, 12vw, 7rem) 1.5rem 3rem',
          background: 'linear-gradient(180deg, rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1rem' }}>
              MEOK AI LABS
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', color: '#ffffff' }}>
              Changelog
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.55)', maxWidth: '500px' }}>
              What we shipped, when we shipped it, and why it matters.
              Built in public, from a caravan on a farm in England.
            </p>
          </div>
        </section>

        {/* Entries */}
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
          {ENTRIES.map((entry, ei) => (
            <div key={entry.version} style={{ marginBottom: '3.5rem', position: 'relative' }}>
              {/* Timeline line */}
              {ei < ENTRIES.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '2.5rem',
                  bottom: '-3.5rem',
                  width: '1px',
                  background: 'rgba(245,240,232,0.07)',
                }} />
              )}

              {/* Version header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem', paddingLeft: '0' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: entry.labelColor,
                  flexShrink: 0,
                  boxShadow: `0 0 8px ${entry.labelColor}66`,
                }} />
                <span style={{ fontWeight: 800, fontSize: '1.125rem', color: '#f5f0e8' }}>{entry.version}</span>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  background: entry.labelColor + '18',
                  color: entry.labelColor,
                  border: `1px solid ${entry.labelColor}44`,
                }}>
                  {entry.label}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)', marginLeft: 'auto' }}>{entry.date}</span>
              </div>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.375rem' }}>
                {entry.items.map((item, ii) => {
                  const cfg = TYPE_CONFIG[item.type] ?? TYPE_CONFIG.new
                  return (
                    <div key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '0.25rem',
                        background: cfg.bg,
                        color: cfg.color,
                        flexShrink: 0,
                        marginTop: '0.15rem',
                        minWidth: '4.5rem',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        {cfg.label}
                      </span>
                      <span style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(245,240,232,0.75)' }}>{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Coming next */}
          <div style={{
            padding: '2rem',
            background: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '1rem',
          }}>
            <p style={{ fontWeight: 700, color: '#c9a84c', marginBottom: '0.75rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Coming next — April 2026
            </p>
            <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', lineHeight: 2, margin: '0 0 1.25rem' }}>
              <li>MCP Tool Layer — Gmail, Google Calendar, Notion integrations</li>
              <li>PixiJS companion animation widget (companion alive on the web)</li>
              <li>GDPR DPIA completion → Guardian child safety activation</li>
              <li>Discord community launch + contributor onboarding</li>
              <li>Byzantine Council paper (MEOK-AI-2026-001) arXiv submission</li>
            </ul>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/roadmap" style={{ color: '#c9a84c', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 600 }}>
                View full roadmap →
              </Link>
              <Link href="/open-source" style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.875rem', textDecoration: 'none' }}>
                Open source →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
