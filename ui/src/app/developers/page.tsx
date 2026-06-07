import type { Metadata } from "next";
import Link from "next/link";
import { Terminal, ShieldCheck, Boxes, ArrowRight, Github, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "MEOK for Developers — Compliance-Native AI in Any Language | MEOK.AI",
  description:
    "Build compliance-native AI on MEOK. Sign and verify HMAC-signed compliance attestations with official SDKs for Python, TypeScript and Go, a stdlib CLI, and a public verifier — backed by the MEOK compliance MCP fleet.",
  alternates: { canonical: "https://meok.ai/developers" },
  openGraph: {
    title: "MEOK for Developers — compliance-native AI in any language",
    description:
      "Official SDKs (Python · TypeScript · Go) + CLI over the live MEOK Attestation API. Sign + verify signed compliance certs; public verifier, no key needed.",
    type: "website",
    url: "https://meok.ai/developers",
  },
};

// Real, verified code — taken from the live SDK READMEs (the API answered health() at v1.2.0).
const PY = `pip install meok-sdk

from meok_sdk import MeokClient

cert = {  # came from any MEOK MCP tool result
    "cert_id": "...",
    "signature_sha256_hmac": "...",
    "payload": {...},
}
result = MeokClient.verify_public(cert)
print(result.valid, result.message)`;

const TS = `npm install @meok/sdk

import { MeokClient } from "@meok/sdk";

const cert = { cert_id: "...", signature_sha256_hmac: "...", payload: {} };
const result = await MeokClient.verifyPublic(cert);
console.log(result.valid, result.message);`;

const GO = `go get github.com/CSOAI-ORG/meok-go

import meok "github.com/CSOAI-ORG/meok-go"

ctx := context.Background()
cert := meok.Cert{CertID: "...", /* signature + payload */}
res, _ := meok.VerifyPublic(ctx, cert)
fmt.Println(res.Valid, res.Message)`;

const CLI = `# stdlib-only, no key needed
meok verify <cert_id>     # verify a signed attestation (live)
meok mcp list             # browse the compliance MCP catalogue
meok mcp search bias      # search it`;

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MEOK SDK",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Python, Node.js, Go",
  url: "https://meok.ai/developers",
  description:
    "Official SDKs for the MEOK Attestation API — sign and verify HMAC-signed compliance attestations across the MEOK governance ecosystem. Available for Python, TypeScript and Go, plus a stdlib CLI.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  softwareHelp: "https://meok.ai/developers",
  author: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I verify a MEOK compliance attestation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install a MEOK SDK (Python: pip install meok-sdk; TypeScript: npm install @meok/sdk; Go: go get github.com/CSOAI-ORG/meok-go) and call verify_public(cert) — or use the CLI: meok verify <cert_id>. The verifier is public and rate-limited; no API key is needed, so any auditor, regulator or customer can verify a compliance chain.",
      },
    },
    {
      "@type": "Question",
      name: "What languages does the MEOK SDK support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three official SDKs with a consistent API surface: Python (meok-sdk on PyPI), TypeScript/JavaScript (@meok/sdk on npm), and Go (github.com/CSOAI-ORG/meok-go), plus a zero-dependency CLI. All target the same live MEOK Attestation API.",
      },
    },
    {
      "@type": "Question",
      name: "What is a MEOK compliance attestation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An HMAC-signed certificate produced by MEOK's compliance MCP servers (EU AI Act, DORA, NIS2, CRA, bias detection, watermarking and more). It proves a compliance check ran and what it concluded — verifiable by anyone via the public verifier, so a claim of 'compliant' is something a third party can independently check.",
      },
    },
  ],
};

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="blob-gold absolute top-16 left-1/4 w-96 h-96 pointer-events-none opacity-40" aria-hidden />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <Terminal className="w-3.5 h-3.5" />
            Developers
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            Compliance-native AI,
            <br />
            <span className="text-[#c9a84c]">in any language.</span>
          </h1>
          <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-8">
            Sign and verify HMAC-signed compliance attestations over the live MEOK Attestation API.
            Official SDKs for Python, TypeScript and Go, a stdlib CLI, and a public verifier — no key needed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://pypi.org/project/meok-sdk/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] font-semibold hover:bg-[#d8b85c] transition-colors"
            >
              <Zap className="w-4 h-4" /> pip install meok-sdk
            </a>
            <a
              href="https://github.com/CSOAI-ORG"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/80 font-semibold hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* QUICKSTART — 3 languages, real code */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Verify a compliance cert in 30 seconds</h2>
          <p className="text-white/45 text-sm text-center mb-8">
            The verifier is public and rate-limited — any auditor, regulator or customer can check a compliance chain.
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              { lang: "Python", pkg: "meok-sdk · PyPI", code: PY },
              { lang: "TypeScript", pkg: "@meok/sdk · npm", code: TS },
              { lang: "Go", pkg: "CSOAI-ORG/meok-go", code: GO },
            ].map((b) => (
              <div key={b.lang} className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
                  <span className="font-semibold text-sm">{b.lang}</span>
                  <span className="text-[11px] text-white/40 font-mono">{b.pkg}</span>
                </div>
                <pre className="p-4 text-[12.5px] leading-relaxed text-white/80 overflow-x-auto">
                  <code>{b.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
            <Terminal className="w-4 h-4 text-[#c9a84c]" />
            <span className="font-semibold text-sm">MEOK CLI</span>
            <span className="text-[11px] text-white/40 font-mono ml-auto">zero dependencies</span>
          </div>
          <pre className="p-4 text-[12.5px] leading-relaxed text-white/80 overflow-x-auto">
            <code>{CLI}</code>
          </pre>
        </div>
      </section>

      {/* WHAT YOU BUILD ON */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "The Attestation API",
              body: "Sign and verify HMAC-signed compliance certs. Public verifier, no key. Live and versioned.",
            },
            {
              icon: <Boxes className="w-5 h-5" />,
              title: "The compliance MCP fleet",
              body: "EU AI Act, DORA, NIS2, CRA, bias detection, watermarking — the servers that produce the certs your SDK verifies.",
            },
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: "The LAW crosswalk",
              body: "Which rules apply to any agent — or robot — anywhere, mapped to the CSOAI charter. Now covers physical-safety law too.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#c9a84c]/12 border border-[#c9a84c]/25 text-[#c9a84c] mb-3">
                {c.icon}
              </div>
              <h3 className="font-semibold mb-1.5">{c.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* A2A / ACP — discoverable on the agentic web */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#c9a84c]/25 bg-[#c9a84c]/[0.05] p-6">
          <h2 className="text-xl font-bold mb-2">Discoverable on A2A + ACP, not just MCP</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            The whole MEOK compliance fleet is published as <strong>A2A Agent Cards</strong> (Google /
            Linux Foundation) and <strong>ACP descriptors</strong> (IBM BeeAI) — so agents can find and
            call it across the agentic web, not only in MCP directories. One canonical registry, every agent.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="/.well-known/agents.json" className="inline-flex items-center gap-1.5 text-[#c9a84c] font-semibold hover:underline">A2A registry →</a>
            <a href="/.well-known/agents-acp.json" className="inline-flex items-center gap-1.5 text-[#c9a84c] font-semibold hover:underline">ACP registry →</a>
            <a href="/.well-known/agent-card.json" className="inline-flex items-center gap-1.5 text-[#c9a84c] font-semibold hover:underline">MEOK agent card →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-white/55 mb-4">MEOK for developers is one node in a connected ecosystem.</p>
          <Link href="/constellation" className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:underline">
            See the whole constellation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
