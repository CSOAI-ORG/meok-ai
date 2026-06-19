import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Live Demo · MEOK AI Labs",
  description: "See MEOK in action. Try a companion, run a compliance scan, generate a white paper, file a patent draft.",
  openGraph: {
    title: "MEOK Live Demo · MEOK AI Labs",
    description: "See MEOK in action. Try a companion, run a compliance scan, generate a white paper, file a patent draft.",
    type: "website",
  },
};

const WEBAPP_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MEOK Live Demo",
  description:
    "Interactive demo of the MEOK AI platform: talk to a companion, run a 42-point EU AI Act compliance scan in 30 seconds, and generate a 5,000-word white paper from a research brief.",
  url: "https://meok.ai/demo",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  publisher: { "@type": "Organization", name: "MEOK AI Labs" },
  featureList: [
    "Companion demo — talk to the Scholar; it remembers, queries, and reasons",
    "Compliance demo — 42-point EU AI Act scan in 30 seconds, free",
    "White paper demo — generate a 5,000-word white paper from a research brief",
  ],
  offers: {
    "@type": "Offer",
    name: "White paper generation",
    price: "0.10",
    priceCurrency: "USD",
    url: "https://meok.ai/demo",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_JSONLD) }} />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Live Demo</h1>
        <p className="text-xl text-slate-600 mt-6">See MEOK in action. Try a companion, run a compliance scan, generate a white paper, file a patent draft.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>Companion demo</h2>
          <p>Talk to the Scholar. Watch it remember, query, reason.</p>
          <h2>Compliance demo</h2>
          <p>Run a quick EU AI Act scan on your AI system. 42-point audit, 30 seconds, free.</p>
          <h2>White paper demo</h2>
          <p>Generate a 5,000-word white paper from a research brief. $0.10 per call.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/dashboard" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">See the demo</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
