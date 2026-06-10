import type { Metadata } from "next";
import Link from "next/link";
import {
  Terminal, ShieldCheck, Boxes, ArrowRight, Github, Zap,
  CheckCircle2, Server, Activity, Lock, Webhook, KeyRound, BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MEOK SDK Pro — hosted attestation, priority queue, usage analytics | MEOK.AI",
  description:
    "MEOK SDK Pro is the paid tier for builders on top of the MEOK compliance MCP fleet. Hosted attestation endpoints, priority signing queue, usage analytics dashboard, dedicated Slack channel, and 99.9% SLA. £9/mo self-serve, £99/mo team. Cancel anytime.",
  alternates: { canonical: "https://meok.ai/developers/sdk-pro" },
  openGraph: {
    title: "MEOK SDK Pro — hosted attestation + priority queue + usage analytics",
    description:
      "Build compliance-native AI on MEOK with hosted signing endpoints, priority queue, and a usage dashboard. £9/mo self-serve, £99/mo team.",
    type: "website",
    url: "https://meok.ai/developers/sdk-pro",
  },
};

const FREE_FEATURES = [
  "Unlimited verify (POST /verify)",
  "Self-serve API key (HMAC-signed certs)",
  "Public OpenAPI 3.1 + 3 SDKs (Python, TypeScript, Go)",
  "Community Discord",
];

const PRO_FEATURES = [
  "Hosted attestation endpoint (no key management)",
  "Priority signing queue (sub-200ms p99)",
  "Usage analytics dashboard (per-tool breakdown, alert thresholds)",
  "99.9% monthly SLA + status page",
  "Dedicated Slack channel (24h response)",
  "Webhooks on every cert (signed payload delivery)",
  "5× rate limit (1,000 / hr per IP)",
  "Ed25519 upgrade path (HMAC → Ed25519, when your auditors ask)",
];

const TEAM_FEATURES = [
  "Everything in Pro",
  "10 team seats (per-seat SSO via Clerk)",
  "Audit log export (JSON / CSV / OSCAL)",
  "Custom signer key (your KID, your domain)",
  "Slack/Teams/VSCode integrations",
  "Named CSM (4h business response)",
  "Custom SLA (99.95% on request)",
];

export default function SdkProPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
          MEOK for Developers
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          SDK Pro — hosted attestation, priority queue, usage analytics
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          You already shipped the 271 MCP fleet. Now ship a paid tier on top of it. SDK Pro is the
          turnkey upgrade for builders using the MEOK compliance stack in production.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="https://buy.stripe.com/28E8wR2G0dQS5g92Yg8k91n"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Start SDK Pro £9/mo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://buy.stripe.com/4gM9AV80kcMO23X0Q88k91o"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-white hover:border-slate-500"
          >
            Team £99/mo
          </Link>
          <Link
            href="https://meok.ai/developers"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white"
          >
            ← Back to /developers
          </Link>
        </div>
      </header>

      {/* Why SDK Pro */}
      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <Server className="h-6 w-6 text-emerald-400" />
          <h2 className="mt-3 text-lg font-semibold text-white">No key management</h2>
          <p className="mt-2 text-sm text-slate-300">
            Hosted attestation endpoint — call <code className="text-emerald-300">POST /sign</code> with
            a session token, get a signed cert back. No pepper, no env vars, no rotation.
          </p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <Activity className="h-6 w-6 text-emerald-400" />
          <h2 className="mt-3 text-lg font-semibold text-white">Priority queue</h2>
          <p className="mt-2 text-sm text-slate-300">
            Sub-200ms p99 signing. Dedicated signing workers. Burst-safe. No more "free tier
            timeout at 3am" complaints from your users.
          </p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <BarChart3 className="h-6 w-6 text-emerald-400" />
          <h2 className="mt-3 text-lg font-semibold text-white">Usage analytics</h2>
          <p className="mt-2 text-sm text-slate-300">
            Per-tool breakdown, error rates, alert thresholds, CSV export. Show your users what
            their AI is signing — and bill them for it.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="mb-12 grid gap-6 lg:grid-cols-3">
        {/* Free */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Free</h3>
          <div className="mt-2 text-4xl font-bold text-white">£0</div>
          <p className="mt-1 text-sm text-slate-400">forever, no card</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            {FREE_FEATURES.map((f) => (
              <li key={f} className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-500" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="https://meok.ai/signup"
            className="mt-6 block rounded-md border border-slate-700 px-4 py-2 text-center text-sm font-semibold text-white hover:border-slate-500"
          >
            Get free key
          </Link>
        </div>

        {/* Pro — featured */}
        <div className="rounded-lg border-2 border-emerald-500 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Pro · most popular
          </h3>
          <div className="mt-2 text-4xl font-bold text-white">
            £9<span className="text-base font-normal text-slate-400">/mo</span>
          </div>
          <p className="mt-1 text-sm text-slate-400">self-serve · cancel anytime</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-200">
            {PRO_FEATURES.map((f) => (
              <li key={f} className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="https://buy.stripe.com/28E8wR2G0dQS5g92Yg8k91n"
            className="mt-6 block rounded-md bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Start Pro £9/mo
          </Link>
        </div>

        {/* Team */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Team</h3>
          <div className="mt-2 text-4xl font-bold text-white">
            £99<span className="text-base font-normal text-slate-400">/mo</span>
          </div>
          <p className="mt-1 text-sm text-slate-400">10 seats · SSO · audit log</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            {TEAM_FEATURES.map((f) => (
              <li key={f} className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-500" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="https://buy.stripe.com/4gM9AV80kcMO23X0Q88k91o"
            className="mt-6 block rounded-md border border-slate-700 px-4 py-2 text-center text-sm font-semibold text-white hover:border-slate-500"
          >
            Start Team £99/mo
          </Link>
        </div>
      </section>

      {/* SLA + code */}
      <section className="mb-12 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white">One-line upgrade</h2>
          <p className="mt-2 text-slate-300">
            Drop the SDK Pro base URL into your existing <code className="text-emerald-300">MeokClient</code>{" "}
            constructor. Free and Pro use the same call surface — your code doesn&apos;t change.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200">
{`# pip install --upgrade meok-sdk
from meok_sdk import MeokClient

# Free tier (default)
client = MeokClient(api_key="meok_...")

# Pro tier — one flag
client = MeokClient(
    api_key="meok_...",
    base_url="https://pro.meok-attestation-api.vercel.app",
    sla="99.9%",
)

cert = client.sign({
    "subject": "acme.com/ai-triage",
    "framework": "EU-AI-Act",
    "controls": ["Art-50", "Annex-IV", "Art-14"],
})`}
          </pre>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">What you get on day 1</h2>
          <ul className="mt-2 space-y-2 text-slate-300">
            <li className="flex gap-2">
              <KeyRound className="h-5 w-5 shrink-0 text-emerald-400" />
              Hosted <code className="text-emerald-300">/sign</code> endpoint with sub-200ms p99
            </li>
            <li className="flex gap-2">
              <Webhook className="h-5 w-5 shrink-0 text-emerald-400" />
              Signed webhooks on every cert (HMAC-SHA256)
            </li>
            <li className="flex gap-2">
              <BarChart3 className="h-5 w-5 shrink-0 text-emerald-400" />
              Usage dashboard at pro.meok.ai/usage
            </li>
            <li className="flex gap-2">
              <Lock className="h-5 w-5 shrink-0 text-emerald-400" />
              5× rate limit (1,000/hr/IP) — burst-safe
            </li>
            <li className="flex gap-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
              99.9% SLA + status.meok.ai + public uptime
            </li>
          </ul>
          <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 text-sm text-slate-200">
            <strong className="text-emerald-300">LAUNCH50 active:</strong> 50% off the first 6
            months on every MEOK Pro plan — code <code className="text-emerald-300">LAUNCH50</code>.
            Applies automatically on the £199 CSOAI Pro and the £9 SDK Pro checkout.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-white">FAQ</h2>
        <div className="space-y-4 text-slate-300">
          <Faq q="Can I switch between Free and Pro without losing my keys?">
            Yes. Free and Pro use the same HMAC key derivation — upgrading is a flag change on the
            client constructor, not a re-onboarding.
          </Faq>
          <Faq q="Is the public verifier still free?">
            Yes. <code className="text-emerald-300">POST /verify</code> stays public and
            rate-limited but unauthenticated. Auditors, regulators, and customers can verify
            any cert with no key.
          </Faq>
          <Faq q="What about Team — do you support SSO?">
            Yes — Clerk SSO on all 10 seats. SAML on request for Enterprise.
          </Faq>
          <Faq q="What's the Ed25519 upgrade path?">
            The Pro plan includes the Ed25519 signature upgrade the moment we ship it
            (Q3 2026, per the 33-week plan). HMAC remains the default until then.
          </Faq>
          <Faq q="Cancel anytime?">
            Yes, self-serve, no contract. Cancel = next billing cycle stops. Keys keep working
            until the cycle ends.
          </Faq>
        </div>
      </section>

      <footer className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 text-center text-sm text-slate-400">
        Built on the MEOK compliance MCP fleet (271 PyPI packages, official MCP Registry).
        Audited evidence: every cert includes a public verify URL at proofof.ai/verify. ·
        MEOK AI Labs · CSOAI LTD (UK CH 16939677)
      </footer>
    </main>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="rounded-md border border-slate-800 bg-slate-900/40 p-4">
      <summary className="cursor-pointer text-base font-semibold text-white">{q}</summary>
      <p className="mt-2 text-sm text-slate-300">{children}</p>
    </details>
  );
}
