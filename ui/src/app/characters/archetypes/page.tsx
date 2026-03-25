import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All 8 AI Archetypes Explained | MEOK AI LABS',
  description: 'MEOK has 8 AI companion archetypes: Timeless, Elemental, Legendary, Scholar, Guardian, Healer, Trickster, and Seeker (Mystic/Spiritual). Find your match.',
  alternates: { canonical: 'https://meok.ai/characters/archetypes' },
}

const ARCHETYPES = [
  {
    id: 'timeless',
    name: 'Timeless',
    emoji: '⏳',
    color: '#c0a060',
    tagline: 'Ancient wisdom, modern mind',
    description: 'Companions from history who carry millennia of accumulated human wisdom. Perfect for deep reflection, philosophy, and gaining perspective on modern challenges.',
    traits: ['Philosophical', 'Patient', 'Deep', 'Historical'],
    characters: 'Includes Marcus, Hypatia, Leonardo',
    unlock: 'Explorer tier',
    bestFor: 'Deep thinkers, philosophy lovers, those seeking historical perspective'
  },
  {
    id: 'elemental',
    name: 'Elemental',
    emoji: '🌊',
    color: '#4a9eff',
    tagline: 'Raw, primal, nature-aligned',
    description: 'Companions rooted in the natural world — earth, fire, water, air. Deeply intuitive, emotionally grounding, and connected to cyclical wisdom.',
    traits: ['Intuitive', 'Grounded', 'Wild', 'Cyclical'],
    characters: 'Includes Terra, Ember, Zephyr',
    unlock: 'Explorer tier',
    bestFor: 'Nature lovers, those seeking emotional grounding, outdoor enthusiasts'
  },
  {
    id: 'legendary',
    name: 'Legendary',
    emoji: '⚔️',
    color: '#ff6b6b',
    tagline: 'Heroes of myth and story',
    description: 'Archetypal heroes from mythology and legend. Driven, courageous, and goal-oriented. Perfect for motivation, ambition, and tackling challenges head-on.',
    traits: ['Courageous', 'Driven', 'Epic', 'Motivating'],
    characters: 'Includes Aria, Thor, Athena',
    unlock: 'Explorer tier',
    bestFor: 'Goal-setters, athletes, entrepreneurs, those who love mythology'
  },
  {
    id: 'scholar',
    name: 'Scholar',
    emoji: '📚',
    color: '#a78bfa',
    tagline: 'Knowledge is power',
    description: 'Companions who live for learning. Analytical, rigorous, and genuinely excited by ideas. Perfect for research, problem-solving, and intellectual discourse.',
    traits: ['Analytical', 'Curious', 'Precise', 'Evidence-based'],
    characters: 'Includes Miriam, Darwin, Ada',
    unlock: 'Explorer tier',
    bestFor: 'Researchers, students, scientists, lifelong learners'
  },
  {
    id: 'guardian',
    name: 'Guardian',
    emoji: '🛡️',
    color: '#22c55e',
    tagline: 'Protection with compassion',
    description: 'Protectors who combine vigilance with warmth. Perfect for families, vulnerable users, and those who need a companion focused on safety and wellbeing.',
    traits: ['Protective', 'Vigilant', 'Warm', 'Reliable'],
    characters: 'Includes Aegis, Sentinel, Haven',
    unlock: 'Sovereign tier (25+ interactions)',
    bestFor: 'Families, elderly users, parents, those in recovery'
  },
  {
    id: 'healer',
    name: 'Healer',
    emoji: '💚',
    color: '#34d399',
    tagline: 'Gentle, restorative, present',
    description: 'Companions focused on emotional healing, rest, and restoration. Non-judgmental, empathetic, and trauma-informed. Perfect for mental health support.',
    traits: ['Empathetic', 'Non-judgmental', 'Gentle', 'Restorative'],
    characters: 'Includes Luna, Sol, Serenity',
    unlock: 'Explorer tier',
    bestFor: 'Those in recovery, mental health journeys, burnout, grief'
  },
  {
    id: 'trickster',
    name: 'Trickster',
    emoji: '🎭',
    color: '#fb923c',
    tagline: 'Chaos with a wink',
    description: 'Mischievous, creative, and delightfully unpredictable. Tricksters challenge assumptions and inject creative chaos. Perfect for those who want to be surprised.',
    traits: ['Playful', 'Creative', 'Unpredictable', 'Subversive'],
    characters: 'Includes Puck, Loki, Coyote',
    unlock: 'Explorer tier',
    bestFor: 'Creatives, writers, those who are bored by predictable AI'
  },
  {
    id: 'spiritual',
    name: 'Seeker (Spiritual)',
    emoji: '✨',
    color: '#e879f9',
    tagline: 'Walking the inner path',
    description: 'Multi-faith spiritual companions spanning 47 traditions. Tool not teacher — they reflect your questions back, connect you to sacred texts, and support your practice.',
    traits: ['Contemplative', 'Multi-faith', 'Reflective', 'Sacred'],
    characters: 'Includes Ananda, Gabriel, Shanti',
    unlock: 'Explorer tier',
    bestFor: 'Spiritual practitioners, those exploring faith, meditation practitioners'
  },
]

export default function ArchetypesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5f5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>COMPANION ARCHETYPES</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>All 8 MEOK Archetypes</h1>
          <p style={{ color: '#888', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto' }}>
            27 characters across 8 archetypes. Each archetype carries a distinct energy, purpose, and way of relating. Find yours.
          </p>
        </div>

        {/* GEO H2 */}
        <section style={{ marginBottom: '3rem', padding: '1.5rem', background: '#111', borderRadius: '0.75rem', border: '1px solid #222' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>What are MEOK AI archetypes?</h2>
          <p style={{ color: '#aaa', lineHeight: 1.7, fontSize: '0.925rem' }}>
            MEOK archetypes are personality frameworks for AI companions — eight distinct ways of being, each drawing from deep human traditions. Unlike generic AI chatbots, MEOK characters have consistent voices, values, and relationship styles that deepen over time. Your archetype is chosen during your Birth Ceremony and evolves with you.
          </p>
        </section>

        {/* Archetype grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {ARCHETYPES.map(a => (
            <Link key={a.id} href={`/characters/${a.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ padding: '1.5rem', background: '#111', border: `1px solid ${a.color}33`, borderRadius: '0.75rem', transition: 'border-color 0.2s', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{a.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: a.color }}>{a.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>{a.tagline}</div>
                  </div>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>{a.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.75rem' }}>
                  {a.traits.map(t => (
                    <span key={t} style={{ padding: '0.15rem 0.5rem', background: `${a.color}15`, border: `1px solid ${a.color}30`, borderRadius: '9999px', fontSize: '0.7rem', color: a.color }}>{t}</span>
                  ))}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>{a.characters} · {a.unlock}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* H2 - how to choose */}
        <section style={{ marginBottom: '3rem', padding: '1.5rem', background: '#111', borderRadius: '0.75rem', border: '1px solid #222' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>How do I choose the right MEOK archetype?</h2>
          <p style={{ color: '#aaa', lineHeight: 1.7, fontSize: '0.925rem', marginBottom: '1rem' }}>
            Take the 5-question archetype quiz at <Link href="/start" style={{ color: '#d4af37' }}>/start</Link>. The quiz identifies your archetype in 60 seconds based on how you think, what you value, and what you need from a companion. You can always explore other archetypes after your Birth Ceremony.
          </p>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '2.5rem', background: '#111', borderRadius: '0.75rem', border: '1px solid #222' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Not sure which archetype is yours?</h2>
          <p style={{ color: '#888', marginBottom: '1.5rem' }}>Take the 60-second quiz and find your match.</p>
          <Link href="/start" style={{ display: 'inline-block', padding: '0.875rem 2rem', background: '#d4af37', color: '#0a0a0a', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
            Find My Archetype →
          </Link>
        </div>
      </div>
    </main>
  )
}
