import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reseller Programme — MEOK.AI",
  description:
    "Resell MEOK sovereign AI compliance. 20% recurring revenue, white-label option, dedicated partner manager. Apply to become a MEOK reseller.",
  alternates: { canonical: "https://meok.ai/reseller" },
};

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";

const TIERS = [
  {
    name: "Authorised",
    blurb: "Up to 10 active clients.",
    revenue: "20%",
    perks: ["Standard collateral", "Monthly newsletter", "Self-serve deal registration"],
  },
  {
    name: "Preferred",
    blurb: "10-50 active clients.",
    revenue: "25%",
    perks: ["Co-branded collateral", "Quarterly business review", "Dedicated partner manager"],
  },
  {
    name: "Elite",
    blurb: "50+ active clients or £100k+ ARR.",
    revenue: "30%",
    perks: ["White-label option", "Joint go-to-market fund", "Direct line to product team"],
  },
];

export default function ResellerPage() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: DEEP }}>
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Reseller Programme
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Resell sovereign AI compliance
          </h1>
          <p className="text-white/60 text-lg">
            The EU AI Act hits 2 August 2026. Every SaaS company in the EU
            needs a compliance story. Bring MEOK to your clients — earn
            recurring revenue on every deal.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03]"
            >
              <h2 className="text-lg font-bold mb-1" style={{ color: GOLD }}>{t.name}</h2>
              <p className="text-2xl font-black text-white mb-1">{t.revenue}</p>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-4">recurring revenue</p>
              <p className="text-white/60 text-sm mb-4">{t.blurb}</p>
              <ul className="space-y-1.5 text-sm text-white/70">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span style={{ color: GOLD }}>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Link
            href="/contact?intent=reseller"
            className="inline-block px-8 py-4 rounded-xl font-bold text-black"
            style={{ backgroundColor: GOLD }}
          >
            Apply to become a reseller
          </Link>
        </div>
      </section>
    </div>
  );
}
