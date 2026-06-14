import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Guardian · MEOK AI Labs",
  description: "Vigilant, protective, principled, uncompromising. Watches without controlling; warns without alarming.",
  openGraph: {
    title: "MEOK Guardian · MEOK AI Labs",
    description: "Vigilant, protective, principled, uncompromising. Watches without controlling; warns without alarming.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Guardian</h1>
        <p className="text-xl text-slate-600 mt-6">Vigilant, protective, principled, uncompromising. Watches without controlling; warns without alarming.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>Memory style</h2>
          <p>Pattern-based temporal memory - tracks change over time.</p>
          <h2>Speaking style</h2>
          <p>Warm, measured, never alarmist.</p>
          <h2>Evolution stages</h2>
          <p>Watchful (0) → Aware (50) → Sentinel (200) → Covenant (500).</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/characters/guardian" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Meet the Guardian</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
