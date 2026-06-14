import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Waitlist · MEOK AI Labs",
  description: "Join the MEOK waitlist for early access to the 100/100 master stack.",
  openGraph: {
    title: "MEOK Waitlist · MEOK AI Labs",
    description: "Join the MEOK waitlist for early access to the 100/100 master stack.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Waitlist</h1>
        <p className="text-xl text-slate-600 mt-6">Join the MEOK waitlist for early access to the 100/100 master stack.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>Free tier</h2>
          <p>3 calls/day per tool, 1 COAI attestation, 100 sovereign records. No card required.</p>
          <h2>Pro tier</h2>
          <p>£9/mo - unlimited calls, 100 attestations, 10K records, Pro signatures.</p>
          <h2>Family tier</h2>
          <p>£29/mo - 5 seats, multi-account, 10-year retention.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/register" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Join the waitlist</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
