import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Programme — MEOK.AI",
  description:
    "Join the MEOK partner programme. Channel resellers, implementation partners, and co-marketing partners. Earn 20-30% recurring revenue on sovereign AI compliance.",
  alternates: { canonical: "https://meok.ai/partner" },
};

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";

const TRACKS = [
  {
    title: "Channel reseller",
    blurb: "Resell MEOK to your existing client base. 20% recurring revenue on every deal, paid monthly.",
    perks: ["20% recurring", "Co-branded collateral", "Dedicated partner manager", "Quarterly business review"],
  },
  {
    title: "Implementation partner",
    blurb: "Deploy MEOK Sovereign for clients. £5k-£25k implementation fees + 30% recurring on year 1.",
    perks: ["30% year 1", "Free certifications", "Joint go-to-market", "Featured in partner directory"],
  },
  {
    title: "Co-marketing partner",
    blurb: "Joint webinars, case studies, content. Cross-promote to complementary audiences.",
    perks: ["Shared audience", "Joint content", "Conference booth swap", "Co-branded PR"],
  },
];

export default function PartnerPage() {
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
            Partner Programme
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Build with MEOK. Earn with MEOK.
          </h1>
          <p className="text-white/60 text-lg">
            Three partnership tracks. Recurring revenue. Real co-marketing. The
            EU AI Act deadline is creating massive pull — help us meet it.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {TRACKS.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03] flex flex-col"
            >
              <h2 className="text-lg font-bold mb-2" style={{ color: GOLD }}>{t.title}</h2>
              <p className="text-white/60 text-sm mb-4 flex-1">{t.blurb}</p>
              <ul className="space-y-1.5 text-sm text-white/70 mb-6">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span style={{ color: GOLD }}>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?intent=partner&track=${encodeURIComponent(t.title.toLowerCase().replace(/\s+/g, '-'))}`}
                className="block text-center px-4 py-2.5 rounded-xl border border-white/20 hover:border-white/40 text-sm font-bold transition-colors"
              >
                Apply for {t.title} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/50 text-sm mb-3">Already a partner?</p>
          <Link
            href="https://councilof.ai"
            className="text-white/80 hover:text-white underline underline-offset-4"
          >
            Sign in to the partner portal →
          </Link>
        </div>
      </section>
    </div>
  );
}
