import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Sub-Processors · MEOK AI Labs",
  description: "MEOK uses a minimal set of sub-processors, each listed with its data flow and COAI compliance status.",
  openGraph: {
    title: "MEOK Sub-Processors · MEOK AI Labs",
    description: "MEOK uses a minimal set of sub-processors, each listed with its data flow and COAI compliance status.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Sub-Processors</h1>
        <p className="text-xl text-slate-600 mt-6">MEOK uses a minimal set of sub-processors, each listed with its data flow and COAI compliance status.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>Clerk</h2>
          <p>Authentication. EU residency. Data: email + user ID.</p>
          <h2>Stripe</h2>
          <p>Payments. EU residency. Data: card token. Retention: 7 years.</p>
          <h2>Vercel</h2>
          <p>Hosting. EU + US regions. Retention: logs 30 days.</p>
          <h2>Anthropic, OpenAI</h2>
          <p>Optional. Retention: 0.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/privacy" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Full sub-processor list</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
