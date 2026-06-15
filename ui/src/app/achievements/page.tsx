import type { Metadata } from "next";
import Leaderboard from "./Leaderboard";

export const metadata: Metadata = {
  title: "Achievements · MEOK Sovereign OS",
  description: "Care-aligned achievement system. Earn trust through verified /verify calls, MCP deployments, and care-mission completions.",
  alternates: { canonical: "https://meok.ai/achievements" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const BADGES = [
  { id: "first-verify", name: "First /verify", desc: "Ran your first /verify call", tier: "bronze", icon: "✓" },
  { id: "100-verifies", name: "100 /verify calls", desc: "Crossed 100 signed attestations", tier: "silver", icon: "💯" },
  { id: "1000-verifies", name: "1K /verify calls", desc: "1,000 attestations under your belt", tier: "gold", icon: "🏆" },
  { id: "first-mcp", name: "First MCP deployed", desc: "Deployed your first MEOK MCP", tier: "bronze", icon: "🚀" },
  { id: "fleet-builder", name: "Fleet builder", desc: "Deployed 10+ MCPs in production", tier: "silver", icon: "🏗️" },
  { id: "fleet-architect", name: "Fleet architect", desc: "50+ MCPs in production", tier: "gold", icon: "🏛️" },
  { id: "eu-ai-act-hero", name: "EU AI Act hero", desc: "Shipped the Article 50 two-layer kit", tier: "gold", icon: "🇪🇺" },
  { id: "watchdog-cert", name: "Watchdog certified", desc: "Earned the CSOAI Watchdog Cert", tier: "platinum", icon: "📜" },
  { id: "sovereign-care", name: "Sovereign care", desc: "Resolved 10 care-home escalations", tier: "silver", icon: "🫂" },
  { id: "maternal-covenant", name: "Maternal covenant", desc: "Helped 100 vulnerable users", tier: "gold", icon: "💝" },
  { id: "council-member", name: "Council member", desc: "Voted on 5+ Council proposals", tier: "silver", icon: "🏛️" },
  { id: "bft-voter", name: "BFT voter", desc: "1+ verified BFT consensus reached", tier: "gold", icon: "🔐" },
  { id: "open-source", name: "Open source contributor", desc: "Merged a PR into CSOAI-ORG", tier: "silver", icon: "🌱" },
  { id: "sovereign-olm", name: "Sovereign OLM", desc: "Ran a sovereign OLM inference", tier: "bronze", icon: "🧠" },
  { id: "dome-explorer", name: "Dome explorer", desc: "Inspected all 8 layers", tier: "silver", icon: "🛕" },
  { id: "audit-trail", name: "Audit trail", desc: "Generated 1,000 signed audit events", tier: "gold", icon: "📋" },
];

const TIER_COLORS: Record<string, string> = {
  bronze: "#CD7F32",
  silver: "#C0C0C0",
  gold: GOLD,
  platinum: "#E5E4E2",
};

const MISSIONS = [
  {
    id: "starter-pack",
    name: "Starter pack",
    desc: "Run your first /verify call + deploy your first MCP",
    reward: "200 XP + 'First /verify' + 'First MCP deployed' badges",
    difficulty: "easy",
  },
  {
    id: "compliance-architect",
    name: "Compliance architect",
    desc: "Wire EU AI Act + DORA + NIS2 MCPs into your CI/CD",
    reward: "500 XP + 'Fleet builder' badge",
    difficulty: "medium",
  },
  {
    id: "watchdog-prep",
    name: "Watchdog cert prep",
    desc: "Run the CSOAI Watchdog scorecard, fix all gaps, request cert",
    reward: "1000 XP + 'Watchdog certified' badge + 10% off cert fee",
    difficulty: "hard",
  },
  {
    id: "care-home-pilot",
    name: "Care-home pilot",
    desc: "Deploy MEOK Compliance in a real care home (10+ residents)",
    reward: "2000 XP + 'Sovereign care' + 'Maternal covenant' badges + case study",
    difficulty: "hard",
  },
  {
    id: "council-vote",
    name: "Council vote",
    desc: "Cast your first BFT vote on a Council proposal",
    reward: "100 XP + 'BFT voter' badge",
    difficulty: "easy",
  },
];

const FAQ = [
  { q: "How is my trust score calculated?", a: "Your trust score grows from SOV3 substrate events: every signed attestation adds 1 point, every regulator pull adds 50 points, and every care-mission completion adds 100 points. Tiers run Bronze (0–100), Silver (100–500), Gold (500–2,000), and Platinum (2,000+)." },
  { q: "How do I earn badges?", a: "Badges are awarded for verified safe-AI actions — running /verify calls, deploying MCPs, completing care missions, voting on Council proposals, and earning the CSOAI Watchdog Cert. They range from bronze to platinum tier and are earned automatically as you hit each milestone." },
  { q: "What are missions?", a: "Missions are guided objectives that grow the sovereignty stack, from the easy Starter pack (first /verify + first MCP) to hard missions like the Care-home pilot. Each mission awards XP, badges, and rewards such as case studies or a discount on the Watchdog cert fee." },
  { q: "How does the leaderboard work?", a: "The leaderboard is opt-in and shows the top 100 care-aligned contributors. It rewards contribution over competition — care-mission completions count 5x more than raw /verify count. You can view it at csoai.org/leaderboard." },
];

const WEBPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Achievements · MEOK Sovereign OS",
  description: "Care-aligned achievement system. Earn trust through verified /verify calls, MCP deployments, and care-mission completions.",
  url: "https://meok.ai/achievements",
  publisher: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Achievements", item: "https://meok.ai/achievements" },
  ],
};

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function AchievementsPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ marginBottom: 40, textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>MEOK Gamification</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "16px 0" }}>Achievements · Trust · Missions</h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto" }}>
            Care-aligned gamification. Earn badges for verified safe-AI actions, run missions that grow the sovereignty stack, and climb the trust ladder.
          </p>
        </header>

        <Leaderboard />

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Trust Ladder</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, marginBottom: 20, maxWidth: 720 }}>
            Your trust score grows with every safe action. Score is computed from SOV3 substrate events — every signed attestation adds 1pt, every regulator pull adds 50pt, every care-mission completion adds 100pt.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
            {[
              { tier: "Bronze", range: "0–100", color: "#CD7F32", desc: "Just started" },
              { tier: "Silver", range: "100–500", color: "#C0C0C0", desc: "Active contributor" },
              { tier: "Gold", range: "500–2,000", color: GOLD, desc: "Trusted operator" },
              { tier: "Platinum", range: "2,000+", color: "#E5E4E2", desc: "Council-grade" },
            ].map((t) => (
              <div key={t.tier} style={{ background: "white", borderRadius: 10, padding: 16, border: `1px solid ${NAVY}1a`, textAlign: "center" }}>
                <p style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: t.color, margin: 0 }}>{t.tier}</p>
                <p style={{ fontSize: 18, fontWeight: 900, margin: "4px 0" }}>{t.range}</p>
                <p style={{ fontSize: 12, color: `${NAVY}88`, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Badges</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {BADGES.map((b) => (
              <div key={b.id} style={{ background: "white", borderRadius: 10, padding: 16, border: `2px solid ${TIER_COLORS[b.tier]}`, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 32, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", background: `${TIER_COLORS[b.tier]}22`, borderRadius: 8, flexShrink: 0 }}>
                  {b.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 900, margin: 0, color: TIER_COLORS[b.tier] }}>{b.name}</p>
                  <p style={{ fontSize: 12, color: `${NAVY}88`, margin: "4px 0 0" }}>{b.desc}</p>
                  <p style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: TIER_COLORS[b.tier], margin: "4px 0 0" }}>{b.tier}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Missions</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {MISSIONS.map((m) => (
              <div key={m.id} style={{ background: "white", borderRadius: 10, padding: 20, border: `1px solid ${NAVY}1a` }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 900, margin: 0 }}>{m.name}</h3>
                  <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: m.difficulty === "easy" ? "#65A30D" : m.difficulty === "medium" ? GOLD : "#DC2626", marginLeft: "auto" }}>{m.difficulty}</span>
                </div>
                <p style={{ fontSize: 14, color: `${NAVY}cc`, margin: "0 0 12px" }}>{m.desc}</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: GOLD, margin: 0 }}>🎁 {m.reward}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12, maxWidth: 900 }}>
            {FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ background: NAVY, color: "white", borderRadius: 14, padding: 40, textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>Leaderboard</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 24, maxWidth: 720, margin: "0 auto 24px" }}>
            Opt-in community leaderboard. Top 100 care-aligned contributors. The leaderboard rewards <strong>contribution</strong> over competition — care-mission completions count 5x more than raw /verify count.
          </p>
          <a
            href="https://csoai.org/leaderboard"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 28px", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 15 }}
          >
            View leaderboard →
          </a>
        </section>
      </div>
    </main>
  );
}
