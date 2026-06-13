import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise — MEOK.AI",
  description:
    "Sovereign AI OS for your entire organisation. Dedicated infrastructure, SSO, audit logs, custom DPA, on-premise deployment. EU AI Act + DORA + NIS2 compliance as a service.",
  alternates: { canonical: "https://meok.ai/enterprise" },
};

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";

const FEATURES = [
  { title: "Dedicated infrastructure", body: "Single-tenant isolation. Your data never leaves your region." },
  { title: "SSO + SCIM", body: "Okta, Azure AD, Google Workspace. Role-based access + audit logs." },
  { title: "Custom DPA + SLA", body: "99.95% uptime, 4-hour P1 response, 24×7 on-call rota." },
  { title: "On-premise / air-gapped", body: "Deploy into your own VPC, your own data centre, or fully air-gapped." },
  { title: "EU AI Act + DORA + NIS2", body: "Signed attestations, per-article evidence, audit-ready by 2 Aug 2026." },
  { title: "White-label option", body: "Custom branding, custom verify domain, embed in your portal." },
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: DEEP }}>
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            For organisations of 50+
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Sovereign AI for the whole company
          </h1>
          <p className="text-white/60 text-lg mb-10">
            Dedicated infrastructure, signed compliance evidence, on-premise
            deployment. Built for regulated industries — finance, healthcare,
            government, defence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U"
              className="px-8 py-4 rounded-xl font-bold text-black transition-colors"
              style={{ backgroundColor: GOLD }}
            >
              Buy Enterprise — £1,499/mo
            </a>
            <Link
              href="/contact?intent=enterprise"
              className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              Book a 30-min compliance review
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">What's included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03]"
              >
                <h3 className="text-base font-bold mb-2" style={{ color: GOLD }}>
                  {f.title}
                </h3>
                <p className="text-white/60 text-sm">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/[0.08] p-8 bg-white/[0.03] text-center">
          <p className="text-white/50 text-sm mb-3">EU AI Act Article 50 hits 2 August 2026</p>
          <h2 className="text-3xl font-black mb-4">53 days to compliance</h2>
          <p className="text-white/60 mb-6">
            Get signed, verifiable attestations for every AI system in your
            stack. Auditor-accepted, regulator-grade evidence — not a dashboard.
          </p>
          <Link
            href="/article-50-kit"
            className="inline-block px-6 py-3 rounded-xl font-bold text-black"
            style={{ backgroundColor: GOLD }}
          >
            See the Article 50 Kit →
          </Link>
        </div>
      </section>
    </div>
  );
}
