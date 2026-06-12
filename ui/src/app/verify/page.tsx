import type { Metadata } from "next";
import { Suspense } from "react";
import VerifyForm from "./verify-client";

export const metadata: Metadata = {
  title: "Verify a Compliance Attestation — MEOK.AI",
  description:
    "Verify the cryptographic signature of any MEOK compliance attestation. Paste a cert_id and we'll show you the issuer, regulation, score, and signed proof.",
  alternates: { canonical: "https://meok.ai/verify" },
};

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";

export default function VerifyPage() {
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
            Cryptographic Verification
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Verify an attestation</h1>
          <p className="text-white/50 text-lg">
            Every MEOK compliance attestation is HMAC-SHA256 + Ed25519 signed. Paste a
            cert_id below and we'll show you the issuer, regulation, score, and
            tamper-evident proof.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <Suspense fallback={<div className="text-white/50">Loading…</div>}>
            <VerifyForm />
          </Suspense>

          <div className="mt-12 rounded-2xl border border-white/[0.08] p-6 bg-white/[0.03] text-sm text-white/60 space-y-3">
            <h2 className="text-base font-bold text-white">How it works</h2>
            <p>
              Attestations are issued by the MEOK attestation API and stored with an
              HMAC-chained audit ledger. Verification re-derives the hash chain and
              checks each event's signature against the issuer's public key.
            </p>
            <p>
              Try the demo:{" "}
              <code className="text-white/80 bg-white/5 px-2 py-0.5 rounded">
                meok-demo-2026-001
              </code>
            </p>
            <p className="text-white/40">
              Or use the CLI:{" "}
              <code className="text-white/80 bg-white/5 px-2 py-0.5 rounded">
                pip install meok-attestation-verify
              </code>{" "}
              then{" "}
              <code className="text-white/80 bg-white/5 px-2 py-0.5 rounded">
                meok-verify &lt;cert_id&gt;
              </code>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
