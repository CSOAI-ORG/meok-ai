import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, ShieldCheck, FileCheck2, BookOpen, Briefcase, GraduationCap, Building2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CSOAI Certification Ladder — Practitioner → Engineer → Lead Auditor | CouncilOf.AI",
  description:
    "Earn a signed, verifier-checkable CSOAI certification in AI compliance, governance, and audit. Practitioner £99, Engineer £299, Lead Auditor £999, Fellowship £4,950. All certs include a public verify URL at councilof.ai/verify.",
  alternates: { canonical: "https://meok.ai/council/certifications" },
  openGraph: {
    title: "CSOAI Certification Ladder — Practitioner → Engineer → Lead Auditor",
    description:
      "Signed, auditor-verifiable AI compliance certifications from the CSOAI standards body. £99-£4,950. Public verify URL included.",
    type: "website",
    url: "https://meok.ai/council/certifications",
  },
};

const CERTS = [
  {
    icon: <GraduationCap className="h-6 w-6 text-emerald-400" />,
    code: "CSOAI-P",
    title: "CSOAI Practitioner",
    price: "£99",
    blurb: "Demonstrate you understand EU AI Act, NIS2, DORA, and CRA at a working level. 60-question proctored exam + 1 case-study write-up. Signed cert + public verify URL.",
    bullets: [
      "60-question proctored exam (online, 90 min)",
      "1 case-study write-up (1,000 words)",
      "Public verify URL at councilof.ai/verify/<id>",
      "LinkedIn-shareable digital badge",
      "Annual renewal (free)",
    ],
    audience: "Compliance officers, junior engineers, AI policy researchers",
    stripeLink: "https://buy.stripe.com/4gMfZja8seUWbEx1Uc8k915",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    code: "CSOAI-E",
    title: "CSOAI Engineer",
    price: "£299",
    blurb: "Prove you can build, deploy, and verify AI compliance pipelines. Practical: build a MEOK MCP server, sign attestations, pass the BFT Council review. Signed cert + verify URL.",
    bullets: [
      "Build + submit a working MEOK MCP server (any of the 271 in catalogue)",
      "Sign 50 attestations with the MEOK attestation API",
      "Pass the 33-agent Byzantine Council review (f < n/3)",
      "Public verify URL at councilof.ai/verify/<id>",
      "LinkedIn-shareable digital badge",
      "Annual renewal (free)",
    ],
    audience: "AI engineers, DevSecOps, compliance engineers, MLOps",
    stripeLink: "https://buy.stripe.com/4gMfZja8seUWbEx1Uc8k915",
    highlight: true,
  },
  {
    icon: <FileCheck2 className="h-6 w-6 text-emerald-400" />,
    code: "CSOAI-LA",
    title: "CSOAI Lead Auditor",
    price: "£999",
    blurb: "Authorise to lead third-party AI compliance audits. 3-day in-person intensive + supervised field audit + 2-day written exam. Signed cert + verifier URL + Council roster listing.",
    bullets: [
      "3-day in-person intensive (London / NYC / Singapore, quarterly)",
      "Supervised field audit (1 client, 2 days)",
      "2-day written exam (8h total)",
      "Public verify URL + Council roster listing (councilof.ai/auditors)",
      "Use of CSOAI-LA post-nominals",
      "Listed in the MEOK marketplace as a verified auditor",
      "Annual renewal (free, with 20h CPD requirement)",
    ],
    audience: "Senior consultants, Big-4 GRC partners, in-house AI ethics leads",
    stripeLink: "https://buy.stripe.com/eVq6oJ3K49AC0ZTaqI8k91m",
  },
  {
    icon: <Award className="h-6 w-6 text-emerald-400" />,
    code: "CSOAI-F",
    title: "CSOAI Fellow",
    price: "£4,950",
    blurb: "By invitation only. Vote on CSOAI standards, peer-review certification exam content, and represent the standards body at international forums. Lifetime appointment.",
    bullets: [
      "Lifetime appointment (no annual renewal)",
      "Vote on CSOAI standards (1 of 12 voting seats)",
      "Peer-review certification exam content",
      "Represent CSOAI at EU / UN / OECD forums",
      "Use of CSOAI-F post-nominals",
      "Personal page on councilof.ai/fellows",
      "Annual honorarium (£2,000/year, for active fellows)",
    ],
    audience: "By invitation only — current CSOAI-LA + 5 years AI compliance experience",
    stripeLink: null,
  },
];

export default function CertificationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
          CSOAI Standards Body · CouncilOf.AI
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          The CSOAI Certification Ladder
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Four levels. Each one signed, verifier-checkable, and stamped with a public verify
          URL at <Link href="https://councilof.ai/verify" className="text-emerald-300 underline">councilof.ai/verify</Link>.
          Backed by the MEOK attestation API (294 PyPI packages, official MCP Registry) and the
          33-agent Byzantine Council.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#practitioner"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Start at Practitioner £99
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://councilof.ai"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-white hover:border-slate-500"
          >
            ← councilof.ai
          </Link>
        </div>
      </header>

      <section className="mb-12 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-6">
        <h2 className="text-xl font-semibold text-white">Why CSOAI certs (not Vanta / Drata / Credo)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-emerald-300">What you get</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /> Signed cert with public verify URL</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /> 4 levels (Practitioner → Fellow)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /> Annual renewal free (Fellow = lifetime)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /> Listed in the Council roster (auditors / fellows)</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-300">What you don&apos;t get (the truth)</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>• No &ldquo;EU AI Act certified&rdquo; label — TÜV disclaims such certs</li>
              <li>• No NRDC, no IOE, no ISO accreditation</li>
              <li>• No &ldquo;guarantee&rdquo; your client will pass an audit</li>
              <li>• No protection from a regulator taking action</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          CSOAI is a self/independent attestation body. Our certs are <strong>audit-ready evidence</strong>,
          not accreditation. The verify URL lets an auditor, regulator, or buyer confirm
          you hold the cert — nothing more, nothing less.
        </p>
      </section>

      <section className="mb-12 space-y-6">
        {CERTS.map((c) => (
          <CertCard key={c.code} cert={c} />
        ))}
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-white">How signing + verify works</h2>
        <ol className="mt-2 space-y-2 text-slate-300">
          <li className="flex gap-3">
            <span className="text-emerald-400 font-semibold">1.</span>
            You complete the exam + work product.
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-semibold">2.</span>
            The Byzantine Council (33 specialist agents) reviews your submission under BFT consensus (f &lt; n/3).
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-semibold">3.</span>
            On consensus, the cert is signed with the MEOK attestation API (HMAC-SHA256, Ed25519 upgrade Q3 2026).
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-semibold">4.</span>
            Your cert + verify URL are published at <code className="text-emerald-300">councilof.ai/verify/&lt;id&gt;</code>.
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-semibold">5.</span>
            Anyone — auditor, regulator, client — POSTs the cert to the public <code className="text-emerald-300">/verify</code> endpoint and gets back valid / invalid in &lt; 200ms.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-white">FAQ</h2>
        <Faq q="Is CSOAI accredited?">
          No — and we say so openly. CSOAI is a self/independent standards body. Our certs
          are audit-ready evidence, not NRDC/IOE/ISO accreditation. The verify URL gives
          an auditor, regulator, or buyer a way to confirm you hold the cert. We never
          claim more than that.
        </Faq>
        <Faq q="Why isn&apos;t there a CSOAI &ldquo;certified&rdquo; logo?">
          Because &ldquo;certified&rdquo; implies third-party accreditation we don&apos;t have.
          We issue a signed cert. Your LinkedIn, your CV, your client deck. The verify URL
          is the proof. We don&apos;t sell logo rights.
        </Faq>
        <Faq q="What if I fail the exam?">
          Practitioner + Engineer = retake once free within 90 days. Lead Auditor = supervised
          re-attempt at the next quarterly intensive. Fellow = no fail, by invitation.
        </Faq>
        <Faq q="Is CSOAI recognised by the EU AI Act?">
          The EU AI Act does not require certification — it requires conformity assessment by
          a notified body. CSOAI helps you prepare for that assessment; we are not a
          notified body. Use a TÜV / DEKRA / BSI for the formal conformity step.
        </Faq>
      </section>

      <footer className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 text-center text-sm text-slate-400">
        <Building2 className="mr-2 inline h-4 w-4 text-emerald-400" />
        MEOK AI Labs · CSOAI LTD (UK CH 16939677) · CouncilOf.AI · nicholas@csoai.org
      </footer>
    </main>
  );
}

function CertCard({ cert }: { cert: typeof CERTS[number] }) {
  return (
    <div
      id={cert.code.toLowerCase().split("-")[1]}
      className={
        cert.highlight
          ? "rounded-lg border-2 border-emerald-500 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10"
          : "rounded-lg border border-slate-800 bg-slate-900/40 p-6"
      }
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {cert.icon}
          <div>
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-sm text-emerald-300">{cert.code}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">{cert.price}</div>
          {cert.stripeLink && (
            <Link
              href={cert.stripeLink}
              className="mt-2 inline-flex items-center gap-1 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Start <ArrowRight className="h-3 w-3" />
            </Link>
          )}
          {!cert.stripeLink && (
            <span className="mt-2 inline-block text-xs text-slate-400">By invitation</span>
          )}
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-300">{cert.blurb}</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-slate-300">
        {cert.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            {b}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-slate-400">
        <strong className="text-slate-300">For:</strong> {cert.audience}
      </p>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="rounded-md border border-slate-800 bg-slate-900/40 p-4 mb-3">
      <summary className="cursor-pointer text-base font-semibold text-white">{q}</summary>
      <p className="mt-2 text-sm text-slate-300">{children}</p>
    </details>
  );
}
