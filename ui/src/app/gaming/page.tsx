import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK Gaming Hive · 6 MMO Surfaces + Sovereign AI Safety",
  description: "The first COAI-certified gaming AI infrastructure. 6 MMO surfaces (WoW, FFXIV, EVE, OSRS, PoE, Diablo IV), 3 MCP servers, 20 tools, INTELLIGENCE_ONLY gate. Predator-stop, child-safety, care-membrane.",
  alternates: { canonical: "https://meok.ai/gaming" },
  openGraph: {
    title: "MEOK Gaming Hive · 6 MMO Surfaces + Sovereign AI Safety",
    description: "COAI-certified gaming AI for WoW, FFXIV, EVE, OSRS, PoE, Diablo IV. INTELLIGENCE_ONLY gate. Predator-stop, child-safety.",
    type: "website",
    url: "https://meok.ai/gaming",
  },
};

const SURFACES = [
  {
    name: "WoW MCP",
    url: "https://wowmcp.ai",
    desc: "10 tools for raid strategy, character analysis, auction house intelligence, M+ routing. COAI-certified, SOV3-attested.",
    icon: "⚔️",
    color: "#F4A261",
  },
  {
    name: "FFXIV MCP",
    url: "/gaming/platforms",
    desc: "8 tools for Savage/Patch progression, market board, party finder optimization, glamour scoring.",
    icon: "🗡️",
    color: "#8DA9C4",
  },
  {
    name: "EVE Online MCP",
    url: "/gaming/strategy",
    desc: "12 tools for industry chain planning, market arbitrage, fleet doctrine, sov defense. Sovereign-grade analysis.",
    icon: "🚀",
    color: "#264653",
  },
  {
    name: "OSRS MCP",
    url: "/gaming/post-game",
    desc: "6 tools for XP tracking, GP/hr, quest guidance, slayer task optimization.",
    icon: "⚒️",
    color: "#E76F51",
  },
  {
    name: "PoE MCP",
    url: "/gaming/live-copilot",
    desc: "9 tools for build planner, trade API integration, atlas strategy, boss mechanics.",
    icon: "💀",
    color: "#1D3557",
  },
  {
    name: "Diablo IV MCP",
    url: "/gaming/companion",
    desc: "7 tools for paragon optimization, glyph ranking, helltide tracker, world boss alerts.",
    icon: "🔥",
    color: "#9D0208",
  },
];

const PRINCIPLES = [
  {
    name: "INTELLIGENCE_ONLY",
    desc: "Never plays for you, never bots, never RTA. The AI gives you better decisions — you take the actions.",
    color: "#7C3AED",
  },
  {
    name: "Predator-stop",
    desc: "Active detection + reporting of grooming, doxxing, gold-selling, and account theft patterns. Care-membrane enforced.",
    color: "#DC2626",
  },
  {
    name: "Child-safety",
    desc: "Age-gate at sign-up. Under-16s get a locked-down companion mode (no adult content, no stranger chat).",
    color: "#0F766E",
  },
  {
    name: "Care-membrane",
    desc: "If a player shows signs of distress (rage quitting, suicidal chat, harassment), the AI nudges + offers helplines.",
    color: "#EA580C",
  },
];

export default function GamingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0F172A", color: "white", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ marginBottom: 40, textAlign: "center" }}>
          <p style={{ color: "#c9a84c", fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>MEOK Gaming Hive · COAI-Certified</p>
          <h1 style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, margin: "16px 0", background: "linear-gradient(135deg, #c9a84c 0%, #7C3AED 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            6 MMO surfaces. INTELLIGENCE_ONLY. Care-membrane enforced.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto" }}>
            The first COAI-certified gaming AI infrastructure. 3 MCP servers, 20 tools, six MMO surface integrations. The AI gives you better decisions — never bots, never plays for you, never real-time automation.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>The 6 surfaces</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {SURFACES.map((s) => (
              <article key={s.name} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 14, padding: 24, border: `1px solid ${s.color}44`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: s.color }} />
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{s.icon}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: s.color, margin: 0 }}>{s.name}</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>{s.desc}</p>
                <a
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", fontSize: 12, fontWeight: 900, color: s.color, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em" }}
                >
                  Explore {s.name} →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>The 4 principles</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {PRINCIPLES.map((p) => (
              <div key={p.name} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 20, border: `1px solid ${p.color}44` }}>
                <h3 style={{ fontSize: 16, fontWeight: 900, color: p.color, margin: "0 0 8px" }}>{p.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Other gaming safety surfaces</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <Link href="/gaming/predator-stop" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 20, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "white", display: "block" }}>
              <h3 style={{ fontSize: 16, fontWeight: 900, color: "#DC2626", margin: "0 0 8px" }}>Predator-stop</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", margin: 0 }}>Active detection of grooming, doxxing, gold-selling, account theft. Care-membrane enforced.</p>
            </Link>
            <Link href="/gaming/companion" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 20, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "white", display: "block" }}>
              <h3 style={{ fontSize: 16, fontWeight: 900, color: "#0F766E", margin: "0 0 8px" }}>AI companion</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", margin: 0 }}>Care-membrane aware game companion. Notices when you're tilted, reminds you to take breaks.</p>
            </Link>
            <Link href="/gaming/strategy" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 20, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "white", display: "block" }}>
              <h3 style={{ fontSize: 16, fontWeight: 900, color: "#7C3AED", margin: "0 0 8px" }}>Strategy</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", margin: 0 }}>Doctrine, progression, market analysis. Sovereign AI for serious players.</p>
            </Link>
            <Link href="/gaming/live-copilot" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 20, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "white", display: "block" }}>
              <h3 style={{ fontSize: 16, fontWeight: 900, color: "#0891B2", margin: "0 0 8px" }}>Live co-pilot</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", margin: 0 }}>Real-time stats overlay. INTELLIGENCE_ONLY — no automation, just better visibility.</p>
            </Link>
            <Link href="/gaming/post-game" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 20, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "white", display: "block" }}>
              <h3 style={{ fontSize: 16, fontWeight: 900, color: "#65A30D", margin: "0 0 8px" }}>Post-game analytics</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", margin: 0 }}>Deep session analysis. What worked, what didn't, where to focus next session.</p>
            </Link>
            <Link href="/gaming/platforms" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 20, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "white", display: "block" }}>
              <h3 style={{ fontSize: 16, fontWeight: 900, color: "#F4A261", margin: "0 0 8px" }}>All platforms</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", margin: 0 }}>Coverage across PC, console, mobile. Cross-platform progression.</p>
            </Link>
          </div>
        </section>

        <section style={{ background: "rgba(201, 168, 76, 0.1)", borderRadius: 14, padding: 40, textAlign: "center", border: "1px solid rgba(201, 168, 76, 0.3)" }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>5-tier pricing for serious players</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 24, maxWidth: 720, margin: "0 auto 24px" }}>
            Free tier includes the live co-pilot + post-game analytics. Pro adds the strategy layer. Elite adds the sovereign OLM. Whale adds the custom care-membrane training.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, maxWidth: 800, margin: "0 auto" }}>
            {[
              { tier: "Free", price: "£0", desc: "Co-pilot + post-game" },
              { tier: "Pro", price: "£9/mo", desc: "Strategy layer" },
              { tier: "Elite", price: "£29/mo", desc: "Sovereign OLM" },
              { tier: "Whale", price: "£99/mo", desc: "Custom care training" },
              { tier: "Council", price: "£999", desc: "BFT voter seat" },
            ].map((t) => (
              <div key={t.tier} style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 900, color: "#c9a84c", margin: 0 }}>{t.tier}</p>
                <p style={{ fontSize: 20, fontWeight: 900, margin: "4px 0" }}>{t.price}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="/pricing"
            style={{ display: "inline-block", marginTop: 24, background: "#c9a84c", color: "#0F172A", padding: "14px 28px", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 15 }}
          >
            View full pricing →
          </a>
        </section>
      </div>
    </main>
  );
}
