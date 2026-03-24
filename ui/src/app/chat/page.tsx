import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat | MEOK AI LABS',
  description: 'Your sovereign AI companion — coming soon.',
}

const EXAMPLE_MESSAGES = [
  { role: 'user', content: "What should I focus on this week?" },
  { role: 'assistant', content: "Based on what you told me last Tuesday — you're mid-sprint on the API rewrite, and you have that investor call on Thursday. I'd clear the decks on the auth layer first. Want me to pull up your notes from that session?" },
  { role: 'user', content: "Yes, and remind me what I decided about the pricing model" },
  { role: 'assistant', content: "You landed on three tiers: Explorer at free forever, Sovereign at £12/month, and Family at £29. Your rationale was that the 'family' framing would resonate with your audience more than 'team'. You were still debating whether to offer an annual discount." },
]

export default async function ChatPage() {
  const { userId } = await auth()
  if (!userId) redirect('/login')

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
      {/* Nav */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#f5f5f5', textDecoration: 'none' }}>
          MEOK<span style={{ color: '#c9a84c' }}>.AI</span>
        </Link>
        <Link href="/dashboard" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          ← Dashboard
        </Link>
      </nav>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
        {/* Coming soon badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '999px', padding: '0.375rem 1rem', marginBottom: '2rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: '#c9a84c', textTransform: 'uppercase' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c9a84c', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Coming Soon — Early Access
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '1rem', lineHeight: 1.1 }}>
          Your Sovereign AI.<br />
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>It remembers everything.</span>
        </h1>
        <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', maxWidth: '520px', lineHeight: 1.65, marginBottom: '3rem' }}>
          Unlike ChatGPT, MEOK builds a persistent model of you — your goals, decisions, projects, and context. The conversation picks up where you left off.
        </p>

        {/* CTA — no companion yet */}
        <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '1rem', padding: '1.75rem 2rem', maxWidth: '460px', width: '100%', textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🥚</div>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: '#f5f5f5' }}>Hatch your companion first</h2>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            You need a companion before you can start chatting. The birth process takes 2 minutes and sets the tone for everything MEOK learns about you.
          </p>
          <Link
            href="/birth"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg, #c9a84c, #a8872f)', color: '#0a0a0a', fontWeight: 700, fontSize: '0.9375rem', borderRadius: '0.625rem', padding: '0.75rem 1.75rem', textDecoration: 'none', letterSpacing: '-0.01em' }}
          >
            Start Your Companion →
          </Link>
        </div>

        {/* Chat preview */}
        <div style={{ maxWidth: '680px', width: '100%' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem', textAlign: 'center' }}>
            Preview — what chat will look like
          </p>

          <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', overflow: 'hidden' }}>
            {/* Chat header */}
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#0d0d0d' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #a8872f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>🥚</div>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: 0 }}>Your Sovereign</p>
                <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>Memory active · claude-sonnet</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.2)' }}>Online</span>
              </div>
            </div>

            {/* Messages */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.7 }}>
              {EXAMPLE_MESSAGES.map((msg, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.role === 'assistant' && (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #a8872f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', flexShrink: 0, marginTop: '2px' }}>🥚</div>
                  )}
                  <div style={{
                    maxWidth: '72%',
                    ...(msg.role === 'user' ? {
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '1rem',
                      borderTopRightRadius: '4px',
                      padding: '0.6rem 0.875rem',
                      fontSize: '0.8125rem',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1.55,
                    } : {
                      fontSize: '0.8125rem',
                      color: 'rgba(255,255,255,0.75)',
                      lineHeight: 1.65,
                    })
                  }}>
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', flexShrink: 0, marginTop: '2px', color: 'rgba(255,255,255,0.5)' }}>N</div>
                  )}
                </div>
              ))}
            </div>

            {/* Fake input */}
            <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0d0d0d' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.875rem', padding: '0.6rem 0.875rem' }}>
                <p style={{ flex: 1, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.2)', margin: 0 }}>Ask anything…</p>
                <div style={{ width: '28px', height: '28px', borderRadius: '0.5rem', background: 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(90deg)' }}>
                    <line x1="12" y1="19" x2="12" y2="5"/>
                    <polyline points="5 12 12 5 19 12"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Feature callouts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginTop: '1.5rem' }}>
            {[
              { icon: '🧠', label: 'Persistent memory', desc: 'Recalls decisions, goals, and context across sessions' },
              { icon: '📁', label: 'Knows your work', desc: 'Connected to your files, calendar, and email' },
              { icon: '🔒', label: 'Sovereign data', desc: 'Your conversations are never sold or used for training' },
            ].map(f => (
              <div key={f.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', padding: '1rem' }}>
                <div style={{ fontSize: '1.25rem', marginBottom: '0.375rem' }}>{f.icon}</div>
                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', margin: '0 0 0.25rem' }}>{f.label}</p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>


      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
