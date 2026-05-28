import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act for AI Startups (2026): What's Binding, What's Delayed, What Costs Money",
  description:
    "Pre-Series-C AI startup EU AI Act guide: SME penalty cap discount, Article 4 literacy, Article 50 watermarking, Annex III scoping. Pre-built signed evidence pack from £149/mo.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-for-ai-startups" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "Do EU AI Act fines really kill startups?", a: "Article 99(6) gives SMEs (incl. start-ups) a discount: the fine is the LOWER of (cap or % turnover) rather than the higher. Net effect for a startup with €1M turnover: max fine for prohibited practices (Art. 5) is €70K not €35M. For Article 50 / 26 / 16 violations: €30K not €15M. So no, the regulation isn't designed to kill startups — but Article 5 prohibitions (manipulation, exploitation, etc.) still apply fully. Best-case: ship compliant + use evidence as enterprise sales accelerator. Worst-case: ignore + get sanctioned + lose enterprise deals." },
  { q: "What's the cheapest viable compliance posture?", a: "Free path: 90-sec scorecard at /scorecard → identifies which articles bind you. Article 4 literacy programme — write a 2-page training memo, log staff completion, done. Article 5 prohibition self-check — confirm no manipulation/social-scoring/etc. If non-Annex-III + non-GPAI: that's most of your obligations met. Total time: 4 hours. Cost: £0." },
  { q: "When does paid compliance kit actually pay back?", a: "Three triggers: (1) you start landing EU enterprise deals (procurement RFPs ask for signed evidence) — buy the £4,950 audit-prep bundle once, reuse for every deal; (2) you ship generative AI outputs (need Article 50 watermarking by 2 Aug 2026) — £99 starter kit; (3) you fall in Annex III (HR tech, EdTech, fintech credit-scoring, etc.) — bias detection £299/mo + transparency logs £399/mo are operational requirements." },
  { q: "What about open-weight model providers?", a: "Recital 102 of the EU AI Act reduces obligations for providers of open-weight foundation models — you publish weights, you have lighter Article 53 disclosure burden. Downstream deployers pick up most obligations. Practical: ship a model card with training-data summary, copyright policy, ban-list (Art. 5 things you didn't filter) — and you're mostly done as the open-weight provider." },
  { q: "What's the lowest-cost MEOK ladder?", a: "(1) FREE: scorecard + fine-calculator + UK-CSR check + 31+ MIT MCPs on PyPI; (2) £149/mo Pro: enhanced rate limits + signed remote attestations + private MCPs; (3) £99 ONE-TIME: Article 50 watermark starter kit; (4) £299/mo: bias detection (only if Annex III); (5) £4,950 ONE-TIME: 14-day audit-prep bundle (only when you start landing enterprise deals). Most pre-Series-C startups can run on FREE + £149/mo for first year." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function AIStartupPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>AI Startup vertical · 28 April 2026</div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>EU AI Act for AI Startups</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>SME discount + lean compliance ladder. Free → £149/mo → £4,950.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Pre-Series-C AI startup, mostly bootstrapped, EU customers in pipeline. EU AI Act feels like an existential threat. It's not — Article 99(6) gives SMEs a fine cap discount + most of your obligations are 4 hours of writing. We built this stack because we're you.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { title: "Free Readiness Scorecard", price: "£0", href: "/scorecard", desc: "90 sec, signed cert. Tells you which articles bind you. Most startups: 3-4 articles total." },
            { title: "Article 50 Watermark Kit", price: "£99 once", href: "/article-50-kit", desc: "If you ship generative outputs. C2PA manifest + watermark template + signed cert." },
            { title: "Pro tier MCPs", price: "£149/mo", href: "/pricing", desc: "Enhanced limits + private MCPs + remote signed attestations. For founders shipping in agent stacks." },
            { title: "Audit-Prep (when EU deals land)", price: "£4,950 once", href: "/audit-prep-bundle", desc: "Buy when you have first €100K+ EU enterprise deal that wants signed evidence in RFP." },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", marginBottom: 6 }}>{c.price}</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>The 4-hour startup compliance MVP</h2>
        <ol style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>Run /scorecard (5 min).</strong> Tells you which articles bind. Save the signed cert as evidence.</li>
          <li><strong>Write 2-page Article 4 literacy memo (1 hr).</strong> What AI you use, who uses it, what training they had. Log it.</li>
          <li><strong>Article 5 prohibition self-check (30 min).</strong> Read /eu-ai-act/article-5, document why your AI doesn't fall in any of the 8 prohibited categories.</li>
          <li><strong>Annex III scoping note (1 hr).</strong> Read /eu-ai-act/article-9 (or whichever applies). For most B2B SaaS: not Annex III. Document why.</li>
          <li><strong>If you ship generative outputs:</strong> buy /article-50-kit (£99), integrate C2PA manifest + watermarker. Plan for 2 Aug 2026 deadline.</li>
          <li><strong>If you're a foundation model provider:</strong> read /eu-ai-act/article-13 + GPAI articles 51-55. Publish model card + training-data summary + copyright policy.</li>
          <li><strong>Total time: 4 hours. Total cost: £0 - £99.</strong></li>
        </ol>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Founders → free 30-min office hours</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>I'm Nicholas Templeman, solo UK founder of MEOK AI Labs. Pre-Series-C AI founders get a free 30 min on EU AI Act scoping — no sales pitch, just answers.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@meok.ai?subject=Founder%20office%20hours%20EU%20AI%20Act" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book office hours →</a>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free scorecard first →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong></p>
      </div>
    </main>
  );
}
