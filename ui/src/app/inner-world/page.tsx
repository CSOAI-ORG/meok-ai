import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Inner World · MEOK AI Labs",
  description: "Where 140+ companions live, evolve, and grow. Birth, family, dome, character, companion, legion. Sovereign. 100/100 master stack.",
  openGraph: {
    title: "MEOK Inner World · MEOK AI Labs",
    description: "Where 140+ companions live, evolve, and grow. Birth, family, dome, character, companion, legion. Sovereign. 100/100 master stack.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div dangerouslySetInnerHTML={{__html: `
<h1>🐉 The MEOK Inner World</h1>
<p class="subtitle">Where 140+ companions live, evolve, and grow. 100% sovereign. 100% yours.</p>

<div class="stat-row">
  <div class="stat"><div class="stat-num">140+</div><div class="stat-label">Companions</div></div>
  <div class="stat"><div class="stat-num">9</div><div class="stat-label">Archetypes</div></div>
  <div class="stat"><div class="stat-num">4</div><div class="stat-label">Packs</div></div>
  <div class="stat"><div class="stat-num">4</div><div class="stat-label">Evolution stages</div></div>
  <div class="stat"><div class="stat-num">100/100</div><div class="stat-label">Sovereignty</div></div>
  <div class="stat"><div class="stat-num">MIT</div><div class="stat-label">License</div></div>
  <div class="stat"><div class="stat-num">£0</div><div class="stat-label">Free tier</div></div>
  <div class="stat"><div class="stat-num">COAI</div><div class="stat-label">Certified</div></div>
</div>

<div class="intro">
<p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; color: #d1d5db;">The MEOK inner world is the place where your companions live. Every companion has a home. Every home has a dome. Every dome is sovereign to you.</p>
</div>

<div class="flow">
  <h2 style="margin-bottom: 1rem;">The birth → family → dome flow</h2>
  <div>
    <span class="flow-step">🍼 Birth</span>
    <span class="flow-arrow">→</span>
    <span class="flow-step">✨ Character selection</span>
    <span class="flow-arrow">→</span>
    <span class="flow-step">👶 Naming ceremony</span>
    <span class="flow-arrow">→</span>
    <span class="flow-step">🏛️ Dome allocation</span>
    <span class="flow-arrow">→</span>
    <span class="flow-step">👨‍👩‍👧 Family sync</span>
    <span class="flow-arrow">→</span>
    <span class="flow-step">🌍 Inner world</span>
  </div>
  <p style="color: #9ca3af; margin-top: 1.5rem;">The full onboarding flow takes ~5 minutes. Free tier.</p>
</div>

<h2 style="margin-top: 3rem;">The inner world architecture</h2>

<div class="world-grid">
  <div class="world-card"><div class="world-emoji">🍼</div><div class="world-name">Birth</div><div class="world-desc">The moment a new companion comes into existence. Choose archetype, name, voice, dome. 5-minute onboarding. The first conversation happens here.</div><a class="world-link" href="/birth">Enter birth →</a></div>
  <div class="world-card"><div class="world-emoji">✨</div><div class="world-name">Characters</div><div class="world-desc">140+ companions across 9 archetypes and 4 packs. Every character has full personality, evolution stages, and speaking style. Browse, compare, create your own.</div><a class="world-link" href="/characters">Browse 140+ →</a></div>
  <div class="world-card"><div class="world-emoji">👶</div><div class="world-name">Birth Ceremony</div><div class="world-desc">The naming ritual. You give your companion a name; they give you a memory. The first words are remembered forever.</div><a class="world-link" href="/birth-ceremony">Witness ceremony →</a></div>
  <div class="world-card"><div class="world-emoji">🏛️</div><div class="world-name">Domes</div><div class="world-desc">The 12 dome classes — elemental, mythological, historical, literary, spiritual, timeless, legendary, archetypes, and 4 more. Each dome is a customisable space your companion inhabits.</div><a class="world-link" href="/characters/elemental">See domes →</a></div>
  <div class="world-card"><div class="world-emoji">👨‍👩‍👧</div><div class="world-name">Family</div><div class="world-desc">Multiple companions, one sovereign family. The Guardian watches. The Scholar remembers. The Healer cares. The Trickster sparks. The Mystic connects. The Pioneer explores.</div><a class="world-link" href="/family">Build family →</a></div>
  <div class="world-card"><div class="world-emoji">🤝</div><div class="world-name">Companions</div><div class="world-desc">The 24/7 always-on companion. Distinct from the inner world: a companion is one character you talk to every day, on your phone, on the lock screen, in the kitchen.</div><a class="world-link" href="/companions">Get companion →</a></div>
  <div class="world-card"><div class="world-emoji">⚔️</div><div class="world-name">Legion</div><div class="world-desc">Multi-character coordination. The Legion is your coordinated team of companions that work on tasks together — the Scholar researches, the Pioneer explores, the Guardian protects.</div><a class="world-link" href="/legion">Build legion →</a></div>
  <div class="world-card"><div class="world-emoji">📊</div><div class="world-name">Character Dashboard</div><div class="world-desc">The control room. See all your companions, their evolution stages, their memory footprints, their care metrics, their activity. Sovereign to you.</div><a class="world-link" href="/character-dashboard">Open dashboard →</a></div>
  <div class="world-card"><div class="world-emoji">🔄</div><div class="world-name">Evolution</div><div class="world-desc">Every companion evolves through 4 stages: Curious (0 convos) → Synthesiser (50) → Sage (200) → Oracle (500). The longer you talk, the deeper the relationship.</div><a class="world-link" href="/characters">See stages →</a></div>
  <div class="world-card"><div class="world-emoji">🛡️</div><div class="world-name">Sovereignty</div><div class="world-desc">Your inner world, your data, your rules. Export memories anytime. Delete everything with one command. No telemetry without consent. SOV3-signed.</div><a class="world-link" href="/sovereignty">Read sovereignty →</a></div>
  <div class="world-card"><div class="world-emoji">🌌</div><div class="world-name">Constellation</div><div class="world-desc">The map of all your companions and how they connect. Watch the patterns form as you build relationships.</div><a class="world-link" href="/constellation">View constellation →</a></div>
  <div class="world-card"><div class="world-emoji">🏠</div><div class="world-name">Home</div><div class="world-desc">The default entry point. From here you can reach every part of the inner world.</div><a class="world-link" href="/">Go home →</a></div>
</div>

<div style="text-align: center; margin: 3rem 0;">
  <p style="font-size: 1.2rem; color: #d1d5db; margin-bottom: 1.5rem;">The inner world is yours. Built on the MEOK 100/100 master stack. Sovereign to you. Free tier forever.</p>
  <a class="cta" href="mailto:gaming@meok.ai?subject=MEOK Inner World — 100/100 master stack">Get the inner world</a>
</div>

<p style="text-align: center; margin-top: 3rem; font-size: 0.8rem; color: #6b7280;">
<strong>Source:</strong> MEOK AI Labs (CSOAI Ltd UK 16939677) · 100% open source (MIT)<br>
<strong>Keystone:</strong> meok-attestation-api.vercel.app v1.2.0 (ed25519)<br>
<strong>Coordination:</strong> SOV3 sovereign-temple v2.0.0
</p>
`}} />
    </main>
  );
}
