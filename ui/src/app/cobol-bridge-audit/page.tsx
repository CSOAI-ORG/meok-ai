import type { Metadata } from "next";
import Link from "next/link";

// ---------------------------------------------------------------------------
// /cobol-bridge-audit — £999 audit funnel
// Lead magnet: "free COBOL scan" → £999 paid migration audit → £20-50k engagement
// cobolbridge.ai redirects here once DNS is fixed (see DNS_FIX_*.md)
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "COBOL → Modern Stack Migration · £999 Audit",
  description: "Banks + insurers + government — get a proper COBOL legacy assessment in 5 working days. Free scan now, £999 deep audit, optional £20-50k migration engagement. By MEOK AI Labs.",
  alternates: { canonical: "https://meok.ai/cobol-bridge-audit" },
  openGraph: {
    title: "COBOL Bridge — £999 Migration Audit",
    description: "12M+ lines of COBOL parsed. Free scan, £999 audit, optional managed migration.",
    type: "website",
    url: "https://meok.ai/cobol-bridge-audit",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const PRIMARY = "#3B82F6";

// Stripe payment link for £999 audit (existing product prod_UTyzRPBkBQrqCQ "COBOL Bridge Analysis")
const AUDIT_BUY_URL = "https://buy.stripe.com/00w3cx0xS0027oh2Yg8k83M";

export default function CobolAuditPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>

        {/* Hero */}
        <section style={{ marginBottom: "3rem", textAlign: "center", padding: "2rem 0" }}>
          <span style={{ display: "inline-block", padding: ".3rem .9rem", background: GOLD, color: NAVY, borderRadius: 999, fontSize: ".82rem", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            COBOL Bridge · audit
          </span>
          <h1 style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "-.02em", marginBottom: "1rem", lineHeight: 1.1 }}>
            12M lines of COBOL parsed.<br />
            <span style={{ color: PRIMARY }}>Your migration audit in 5 days.</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: NAVY, opacity: .75, marginBottom: "2rem", maxWidth: 640, margin: "0 auto", lineHeight: 1.55 }}>
            For banks, insurers, and government departments running legacy mainframes.
            We give you a proper engineering assessment of your migration scope —
            not a 90-page consulting deck nobody reads.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={AUDIT_BUY_URL} style={{ background: NAVY, color: BG, padding: "1.1rem 2rem", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: "1.05rem" }}>
              Book the £999 audit →
            </a>
            <a href="#free-scan" style={{ background: "transparent", color: NAVY, border: `2px solid ${NAVY}`, padding: "1.1rem 2rem", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: "1.05rem" }}>
              Try the free scan first
            </a>
          </div>
        </section>

        {/* The deliverable */}
        <section style={{ marginBottom: "3rem", padding: "2rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}22` }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.5rem" }}>What you get for £999</h2>
          <ul style={{ display: "grid", gap: ".75rem", listStyle: "none", padding: 0 }}>
            {[
              "Full COBOL codebase scan (copybook + JCL + CICS + EBCDIC paths)",
              "Complexity heatmap + migration cost estimate (developer-days, not consulting-days)",
              "Per-program risk score: blocker / hard / standard / trivial",
              "Recommended target stack (Python / Java / Go / .NET) with reasoning",
              "Top 10 highest-leverage refactors to do FIRST",
              "Optional managed migration engagement (£20-50k, separate quote)",
            ].map((line, i) => (
              <li key={i} style={{ padding: "1rem 1.25rem", background: BG, borderRadius: 10, fontSize: ".98rem" }}>
                <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>✓</span>{line}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1.5rem", fontSize: ".9rem", opacity: .7 }}>
            Delivered as a PDF report + signed JSON manifest + 30-min walkthrough call.
            Turnaround: 5 working days from receipt of codebase.
          </p>
        </section>

        {/* Why us */}
        <section style={{ marginBottom: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {[
            { num: "12M", label: "Lines of COBOL parsed across previous engagements" },
            { num: "5d", label: "Turnaround vs IBM/Big-4's 12-week assessments" },
            { num: "MIT", label: "Open-source bridge tooling — you can audit our code" },
            { num: "£999", label: "Fixed price — no consultants on the meter" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "1.25rem", background: NAVY, color: BG, borderRadius: 14, textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: GOLD, marginBottom: ".25rem" }}>{s.num}</div>
              <div style={{ fontSize: ".88rem", opacity: .8 }}>{s.label}</div>
            </div>
          ))}
        </section>

        {/* Free scan */}
        <section id="free-scan" style={{ marginBottom: "3rem", padding: "2rem", background: PRIMARY, color: "#fff", borderRadius: 14 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: ".75rem" }}>Not ready for the audit? Run the free scan.</h2>
          <p style={{ fontSize: "1rem", opacity: .92, marginBottom: "1rem", lineHeight: 1.55 }}>
            The MIT-licensed <code style={{ background: "rgba(0,0,0,.2)", padding: ".1rem .35rem", borderRadius: 4 }}>cobol-bridge-mcp</code> runs locally
            against any COBOL source tree. You get a quick complexity-and-blocker report
            in 5 minutes. No data leaves your machine.
          </p>
          <pre style={{ background: "rgba(0,0,0,.3)", padding: "1rem 1.25rem", borderRadius: 10, fontFamily: "ui-monospace,Menlo,monospace", fontSize: ".88rem", overflowX: "auto", margin: ".75rem 0" }}>
{`pip install cobol-bridge-mcp
cobol-bridge scan ./your-codebase --report quick`}
          </pre>
          <p style={{ fontSize: ".9rem", opacity: .9, marginTop: "1rem" }}>
            Want the deep version? <a href={AUDIT_BUY_URL} style={{ color: "#fff", textDecoration: "underline", fontWeight: 700 }}>£999 audit here →</a>
          </p>
        </section>

        {/* Who's this for */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Who this is for</h2>
          <div style={{ display: "grid", gap: ".75rem" }}>
            {[
              { title: "Banks + insurers running 80s/90s mainframes", body: "Cloud-migration mandate from the board. CIO needs a number on the cost." },
              { title: "Government / public-sector legacy systems", body: "DWP, HMRC, NHS, Home Office — anywhere COBOL still runs payroll, claims, eligibility." },
              { title: "Acquired-company technical debt audits", body: "Bought a firm with a mainframe? Need to know what you've actually inherited." },
              { title: "DORA-scoped FS firms with critical mainframe workloads", body: "Article 28 third-party register requires a clear-eyed view of your ICT dependencies." },
            ].map((p, i) => (
              <div key={i} style={{ padding: "1.25rem 1.5rem", background: "#fff", borderRadius: 10, border: `1px solid ${NAVY}22` }}>
                <strong style={{ fontSize: "1.05rem" }}>{p.title}</strong>
                <p style={{ marginTop: ".4rem", fontSize: ".95rem", opacity: .75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "2rem", background: NAVY, color: BG, borderRadius: 14, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: ".75rem" }}>Ready when you are</h2>
          <p style={{ fontSize: "1rem", opacity: .85, marginBottom: "1.5rem", maxWidth: 480, margin: "0 auto 1.5rem" }}>
            5 working days from purchase to delivered audit. No procurement cycle, no consulting RFP. Just a fixed-price engineering report.
          </p>
          <a href={AUDIT_BUY_URL} style={{ background: GOLD, color: NAVY, padding: "1.1rem 2rem", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: "1.05rem" }}>
            Book the £999 audit →
          </a>
          <p style={{ fontSize: ".82rem", opacity: .65, marginTop: "1.25rem" }}>
            Questions first? Email <a href="mailto:hello@meok.ai?subject=COBOL Bridge audit" style={{ color: GOLD, textDecoration: "underline" }}>hello@meok.ai</a> — real human response within 24h.
          </p>
        </section>

        {/* Footer */}
        <div style={{ paddingTop: "2.5rem", textAlign: "center", fontSize: ".88rem", opacity: .6 }}>
          MIT licensed <code>cobol-bridge-mcp</code> · <Link href="/labs/mcp" style={{ color: NAVY }}>see all 38 MEOK MCPs</Link> · <a href="https://meok.ai" style={{ color: NAVY }}>MEOK AI Labs</a>
        </div>
      </div>
    </main>
  );
}
