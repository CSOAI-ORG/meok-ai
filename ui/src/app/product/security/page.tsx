import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Server, Database, Eye, FileCheck, Users, Globe, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Compliance | MEOK.AI",
  description: "Enterprise-grade security, encryption, compliance certifications, and data protection. ISO 27001, UK GDPR, SOC 2 ready.",
  alternates: { canonical: "https://meok.ai/product/security" },
};

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "AES-256-GCM Encryption",
    desc: "Military-grade encryption for all data at rest and in transit. Every byte of your memory vault is encrypted with keys unique to your account.",
  },
  {
    icon: Database,
    title: "Isolated Tenant Architecture",
    desc: "Your vault lives in its own isolated namespace. Row-level security enforced at the database engine level — even MEOK engineers cannot query across vaults.",
  },
  {
    icon: Eye,
    title: "Zero-Trust Access Model",
    desc: "No backdoor access. No internal admin overrides. All access logged, audited, and cryptographically verified.",
  },
  {
    icon: FileCheck,
    title: "Cryptographic Deletion",
    desc: "When you delete your account, we destroy the encryption key — making all your data permanently and verifiably unrecoverable.",
  },
  {
    icon: Server,
    title: "UK-Based Infrastructure",
    desc: "All data stored in UK data centres. Fully compliant with UK GDPR, Data Protection Act 2018, and ICO requirements.",
  },
  {
    icon: Users,
    title: "Consent-First Design",
    desc: "No data collection without informed consent. No third-party training without explicit opt-in. Every data handling claim is verifiable.",
  },
];

const COMPLIANCE_CERTIFICATIONS = [
  { name: "UK GDPR", status: "Compliant", icon: "🇬🇧" },
  { name: "ICO Registered", status: "Verified", icon: "✓" },
  { name: "SOC 2 Type II", status: "In Progress", icon: "🔄" },
  { name: "ISO 27001", status: "In Progress", icon: "🔄" },
  { name: "COPPA", status: "Compliant", icon: "🛡️" },
  { name: "Children's Code", status: "Compliant", icon: "👶" },
];

const SECURITY_MEASURES = [
  "End-to-end encryption (AES-256-GCM)",
  "Unique encryption key per user account",
  "Row-level security at database engine",
  "Complete audit trail for all data access",
  "Automated vulnerability scanning",
  "Annual third-party penetration testing",
  "Incident response plan (NIST framework)",
  "Staff security training & vetting",
  "UK data centre residency",
  "24/7 infrastructure monitoring",
];

const SECURITY_FAQ = [
  {
    q: "How is my data encrypted?",
    a: "All data is encrypted with AES-256-GCM both at rest and in transit. Every account gets a unique encryption key, so your memory vault is cryptographically isolated from every other vault on the platform.",
  },
  {
    q: "Can MEOK engineers read my vault?",
    a: "No. Your vault lives in its own isolated namespace with row-level security enforced at the database engine level. There are no backdoor access paths and no internal admin overrides — even MEOK engineers cannot query across vaults.",
  },
  {
    q: "What happens to my data if I delete my account?",
    a: "We perform cryptographic deletion: when you delete your account we destroy the encryption key, which makes all of your data permanently and verifiably unrecoverable.",
  },
  {
    q: "Where is my data stored and which regulations apply?",
    a: "All data is stored in UK data centres and is fully compliant with UK GDPR, the Data Protection Act 2018, and ICO requirements. MEOK is ICO registered, COPPA and Children's Code compliant, with SOC 2 Type II and ISO 27001 in progress.",
  },
];

const WEBPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Security & Compliance | MEOK.AI",
  description:
    "Enterprise-grade security, encryption, compliance certifications, and data protection. ISO 27001, UK GDPR, SOC 2 ready.",
  url: "https://meok.ai/product/security",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Security & Compliance", item: "https://meok.ai/product/security" },
  ],
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SECURITY_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="blob-green" style={{ width: 600, height: 500, top: -150, left: "50%", transform: "translateX(-50%)", opacity: 0.15 }} />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Security & Compliance
          </div>
          <h1 className="font-black text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}>
            Your data is <span className="text-gradient-green">yours</span>. Architecturally.
          </h1>
          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Security isn&apos;t a feature — it&apos;s the foundation. Every claim is verifiable. Every protection is enforced at the engine level.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/hatch" className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-green-500 hover:bg-green-400 transition-all text-sm">
              Start secure — hatch your AI
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/privacy" className="text-sm text-[#f5f0e8]/50 hover:text-green-400 transition-colors font-medium">
              Read our privacy policy →
            </Link>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-green-500/60 block mb-4">
              Built secure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Six architectural guarantees.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="premium-card p-7 border-green-500/10 hover:border-green-500/30 transition-all">
                <div className="icon-green w-11 h-11 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Compliance status
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Certifications & registrations.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {COMPLIANCE_CERTIFICATIONS.map(({ name, status, icon }) => (
              <div key={name} className="premium-card p-5 flex items-center gap-4">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="font-bold text-white text-sm">{name}</div>
                  <div className={`text-xs ${status === "Compliant" ? "text-green-400" : "text-[#f5f0e8]/40"}`}>{status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">What we do to keep you safe.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SECURITY_MEASURES.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-[#f5f0e8]/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-green-500/60 block mb-4">
              Frequently asked
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Security questions, answered.</h2>
          </div>
          <div className="flex flex-col gap-4">
            {SECURITY_FAQ.map((f) => (
              <details key={f.q} className="premium-card p-6 border-green-500/10">
                <summary className="font-bold text-white text-base cursor-pointer">{f.q}</summary>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0d0c18] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="font-black text-white text-2xl sm:text-3xl mb-4">Ready to go secure?</h2>
          <p className="text-[#f5f0e8]/50 mb-10">Start free. Your vault is encrypted from day one.</p>
          <Link href="/hatch" className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-green-500 hover:bg-green-400 transition-all text-base">
            Hatch your secure AI — free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}