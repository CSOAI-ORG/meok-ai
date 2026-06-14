import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Gaming Hive · MEOK AI Labs",
  description: "The first COAI-certified gaming AI infrastructure. 3 MCP servers, 20 tools, INTELLIGENCE_ONLY gate.",
  openGraph: {
    title: "MEOK Gaming Hive · MEOK AI Labs",
    description: "The first COAI-certified gaming AI infrastructure. 3 MCP servers, 20 tools, INTELLIGENCE_ONLY gate.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Gaming Hive</h1>
        <p className="text-xl text-slate-600 mt-6">The first COAI-certified gaming AI infrastructure. 3 MCP servers, 20 tools, INTELLIGENCE_ONLY gate.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>6 gaming MMO surfaces</h2>
          <p>WoW, FFXIV, EVE, OSRS, PoE, Diablo IV. Landing pages at wowmcp.ai/</p>
          <h2>The pokerhud sub-domain</h2>
          <p>pokerhud.ai is the COAI-certified poker HUD. 12 tools, 5-tier pricing.</p>
          <h2>INTELLIGENCE_ONLY gate</h2>
          <p>Never plays for you, never bots, never RTA.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="https://wowmcp.ai" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Explore gaming</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
