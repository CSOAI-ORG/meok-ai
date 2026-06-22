import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, FileText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Governance by Design: Simulating the EU AI Act with Multi-Agent BFT | MEOK Research",
  description:
    "A MEOK research white paper on Byzantine fault-tolerant multi-agent governance as a live simulation of EU AI Act compliance. Architecture, mechanics, and alignment.",
  alternates: { canonical: "https://meok.ai/research/governance-by-design" },
  openGraph: {
    title: "Governance by Design: Simulating the EU AI Act with Multi-Agent BFT",
    description:
      "Byzantine fault-tolerant multi-agent governance as a live simulation of EU AI Act compliance.",
    type: "article",
    publishedTime: "2026-06-22",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/research/governance-by-design",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Governance+by+Design&desc=Simulating+the+EU+AI+Act+with+Multi-Agent+BFT",
        width: 1200,
        height: 630,
        alt: "Governance by Design: Simulating the EU AI Act with Multi-Agent BFT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Governance by Design: Simulating the EU AI Act with Multi-Agent BFT",
    description:
      "Byzantine fault-tolerant multi-agent governance as a live simulation of EU AI Act compliance.",
    images: [
      "https://meok.ai/api/og?title=Governance+by+Design&desc=Simulating+the+EU+AI+Act+with+Multi-Agent+BFT",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Governance by Design: Simulating the EU AI Act with Multi-Agent BFT",
  description:
    "A research white paper proposing Byzantine fault-tolerant multi-agent governance as an architectural approach to EU AI Act compliance, with a live reference implementation in Aethelgard.",
  datePublished: "2026-06-22",
  url: "https://meok.ai/research/governance-by-design",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  image:
    "https://meok.ai/api/og?title=Governance+by+Design&desc=Simulating+the+EU+AI+Act+with+Multi-Agent+BFT",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/research/governance-by-design",
  },
  isPartOf: {
    "@type": "PublicationIssue",
    issueNumber: "MEOK-AI-2026-005",
    name: "MEOK Research Working Papers",
  },
  keywords: [
    "EU AI Act",
    "Byzantine fault tolerance",
    "multi-agent governance",
    "AI compliance",
    "Aethelgard",
    "sovereign AI",
    "algorithmic governance",
  ],
};

const SECTIONS = [
  { id: "abstract", title: "Abstract" },
  { id: "fable-5", title: "The Fable 5 Moment" },
  { id: "architecture", title: "Governance as Architecture" },
  { id: "aethelgard", title: "Aethelgard: A Live Simulation" },
  { id: "bft", title: "BFT Council Mechanics" },
  { id: "eu-alignment", title: "EU AI Act Alignment" },
  { id: "quantum", title: "Quantum-Readiness Note" },
  { id: "references", title: "References" },
];

function SectionHeading({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3">
      <span className="text-[#c9a84c]/30 font-mono text-xl">{String(index).padStart(2, "0")}</span>
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-white/65 leading-relaxed mb-4">{children}</p>;
}

export default function GovernanceByDesignPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="relative px-6 pt-28 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#1a1a2e]/80 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#c9a84c]/[0.04] blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(rgba(245,240,232,0.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.10] text-white/50 text-xs font-semibold mb-6 uppercase tracking-widest">
            <BookOpen className="w-3 h-3 text-[#c9a84c]" />
            MEOK Research · White Paper
          </div>

          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
            Working Paper MEOK-AI-2026-005
          </p>

          <h1
            className="font-black leading-[1.08] tracking-tight mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Governance by Design:
            <br />
            <span className="text-[#c9a84c]">Simulating the EU AI Act with Multi-Agent BFT</span>
          </h1>

          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-8">
            A research paper proposing Byzantine fault-tolerant multi-agent governance as an
            architectural answer to the EU AI Act&apos;s oversight, traceability, and risk-management
            requirements — with a live reference implementation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/35 font-mono">
            <span>Nicholas Templeman</span>
            <span>·</span>
            <span>MEOK AI LABS</span>
            <span>·</span>
            <span>22 June 2026</span>
          </div>
        </div>
      </section>

      {/* ─── STICKY TOC + CONTENT ───────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">
                Contents
              </p>
              <nav className="space-y-2">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-white/50 hover:text-[#c9a84c] transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#c9a84c] hover:opacity-80 transition-opacity"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <article className="lg:col-span-9 space-y-16">
            {/* ABSTRACT */}
            <section id="abstract">
              <SectionHeading index={1}>Abstract</SectionHeading>
              <Paragraph>
                The EU AI Act treats high-risk and general-purpose AI systems as socio-technical
                artefacts that must be explainable, traceable, and subject to effective human
                oversight. Most compliance tooling approaches these obligations retrospectively:
                logs are collected after the fact, risk registers are maintained in documents, and
                oversight is enforced through policy. We argue that this is insufficient for
                autonomous multi-agent systems, where decisions can be made faster than any human
                review loop and where a single compromised or misaligned agent can cascade through a
                fleet.
              </Paragraph>
              <Paragraph>
                This paper proposes <strong className="text-white/85">governance by design</strong>:
                the embedding of oversight, consensus, and audit directly into the runtime
                architecture of an AI system. We describe a live reference implementation,
                Aethelgard, in which twelve autonomous finance ministers debate, vote, and record
                every decision on a Byzantine-fault-tolerant council. The design maps naturally to
                the EU AI Act&apos;s requirements for risk management, data governance, transparency,
                human oversight, accuracy, robustness, and cybersecurity. We conclude that BFT
                multi-agent governance is not merely a safety mechanism but a compliance primitive:
                a way to make regulatory obligations verifiable by construction.
              </Paragraph>
            </section>

            {/* FABLE 5 MOMENT */}
            <section id="fable-5">
              <SectionHeading index={2}>The Fable 5 Moment</SectionHeading>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
                  Verified timeline
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-[#c9a84c] font-mono text-sm flex-shrink-0 w-20">10 Jun</span>
                    <span className="text-white/65 text-sm">
                      A jailbreak for a major frontier model is published, demonstrating that prompt
                      guardrails can be bypassed at scale.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#c9a84c] font-mono text-sm flex-shrink-0 w-20">12 Jun</span>
                    <span className="text-white/65 text-sm">
                      The US Department of Commerce issues a notice tightening controls on advanced
                      AI chip exports and model weights.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#c9a84c] font-mono text-sm flex-shrink-0 w-20">16 Jun</span>
                    <span className="text-white/65 text-sm">
                      White House meetings convene with leading AI labs to discuss safety,
                      security, and export-control obligations.
                    </span>
                  </li>
                </ul>
              </div>
              <Paragraph>
                These three events, taken together, illustrate a recurring pattern: frontier AI
                capabilities are outpacing the institutions meant to govern them. Jailbreaks reveal
                that single-model safety is brittle; export controls reveal that model weights are
                strategic assets; and high-level meetings reveal that policy is still catching up to
                the technology. The implication for builders is that safety and compliance cannot be
                delegated to a single vendor, a single model, or a single review step. They must be
                architected into the system itself.
              </Paragraph>
            </section>

            {/* GOVERNANCE AS ARCHITECTURE */}
            <section id="architecture">
              <SectionHeading index={3}>Governance as Architecture vs Safety as Restriction</SectionHeading>
              <Paragraph>
                Conventional AI safety is often experienced as restriction: filters, refusals, rate
                limits, and output classifiers. These mechanisms are necessary but not sufficient.
                They operate on the outputs of a system without changing the decision structure that
                produces them. A restricted system can still make a harmful decision if the
                restriction is bypassed, misconfigured, or simply absent for a new edge case.
              </Paragraph>
              <Paragraph>
                Governance as architecture, by contrast, changes who can decide. In a
                multi-agent council, no single agent can execute a consequential action alone. A
                bond-yield adjustment, a budget transfer, or a compliance classification requires a
                quorum. Every agent&apos;s reasoning is logged. A human overseer can pause, appeal, or
                override. Safety becomes a property of the collective decision procedure, not a
                feature bolted onto individual outputs.
              </Paragraph>
              <Paragraph>
                This distinction matters for regulation. The EU AI Act does not only ask whether a
                system is safe; it asks whether the operator can demonstrate that it is safe. An
                architectural approach turns that demonstration from a documentation exercise into a
                runtime invariant.
              </Paragraph>
            </section>

            {/* AETHELGARD */}
            <section id="aethelgard">
              <SectionHeading index={4}>Aethelgard: A Live Simulation</SectionHeading>
              <Paragraph>
                Aethelgard is the first governed AI civilization inside MEOK. It models the EU
                Finance Hive as a parliamentary democracy: twelve finance ministers, each with a
                distinct portfolio and reasoning style, meet in council to debate fiscal and
                regulatory questions. Every vote is sigil-signed, every decision is recorded to an
                append-only audit log, and every minister can be queried for its reasoning.
              </Paragraph>
              <Paragraph>
                Aethelgard is not a toy. It is a live simulation of how autonomous governance can
                satisfy regulatory requirements in real time. The ministers do not merely discuss;
                they classify risk, propose mitigations, request human override when uncertainty is
                high, and reconcile conflicting evidence before acting. The council therefore
                functions as a working model of Article 14 human oversight, Article 10 data
                governance, and Article 9 risk management — operating continuously rather than as a
                one-off audit.
              </Paragraph>
              <div className="rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.03] p-6">
                <p className="text-sm font-semibold text-[#c9a84c] mb-2">Live reference</p>
                <p className="text-white/60 text-sm mb-4">
                  Visit Aethelgard to observe the council in session, inspect vote logs, and see how
                  BFT consensus maps to EU AI Act risk categories.
                </p>
                <Link
                  href="/civilizations#aethelgard"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:opacity-80 transition-opacity"
                >
                  Enter Aethelgard <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* BFT MECHANICS */}
            <section id="bft">
              <SectionHeading index={5}>BFT Council Mechanics</SectionHeading>
              <Paragraph>
                Byzantine fault tolerance is a distributed-systems property that allows a network
                to reach consensus even when some nodes fail or behave maliciously. MEOK applies BFT
                to AI governance: a council of agents must agree before acting, and the system
                remains safe as long as fewer than one-third of the agents are faulty.
              </Paragraph>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    label: "Council size",
                    value: "33 specialist agents",
                    note: " expandable to 220 in full production topology",
                  },
                  {
                    label: "Fault tolerance",
                    value: "f < n/3",
                    note: " up to 10 Byzantine agents in a 33-agent council",
                  },
                  {
                    label: "Task priority",
                    value: "5/7 agreement",
                    note: " for routine arbitration decisions",
                  },
                  {
                    label: "Emergency override",
                    value: "7/7 unanimous",
                    note: " plus human confirmation for irreversible actions",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">
                      {item.label}
                    </p>
                    <p className="text-xl font-black text-white/90 mb-1">{item.value}</p>
                    <p className="text-xs text-white/40">{item.note}</p>
                  </div>
                ))}
              </div>

              <Paragraph>
                Each council member casts a signed vote. Votes are aggregated through a consensus
                protocol that detects inconsistency: if an agent contradicts itself, if a coalition
                tries to force a decision, or if a human override is invoked, the event is recorded
                immutably. The append-only log serves as both a safety mechanism and an audit trail.
              </Paragraph>
              <Paragraph>
                This design directly addresses the EU AI Act&apos;s call for robustness and
                cybersecurity. A system that can tolerate Byzantine agents is, by construction, more
                resilient to prompt injection, model jailbreaks, and compromised components than a
                single-model architecture.
              </Paragraph>
            </section>

            {/* EU AI ACT ALIGNMENT */}
            <section id="eu-alignment">
              <SectionHeading index={6}>EU AI Act Alignment</SectionHeading>
              <Paragraph>
                The EU AI Act imposes obligations across the AI lifecycle. We map the BFT council
                design to the Act&apos;s core chapters as follows:
              </Paragraph>

              <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/40">
                        EU AI Act obligation
                      </th>
                      <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/40">
                        BFT governance mapping
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/65">
                    {[
                      {
                        obligation: "Risk management system (Article 9)",
                        mapping:
                          "Council classifies risk before action; mitigations are proposed, voted on, and logged.",
                      },
                      {
                        obligation: "Data governance (Article 10)",
                        mapping:
                          "Training and operational data provenance is attested by council vote; deviations trigger review.",
                      },
                      {
                        obligation: "Technical documentation (Article 11)",
                        mapping:
                          "Every decision produces machine-readable reasoning that feeds the technical file.",
                      },
                      {
                        obligation: "Record-keeping (Article 12)",
                        mapping:
                          "Append-only sigil-signed vote logs provide tamper-evident record-keeping by default.",
                      },
                      {
                        obligation: "Transparency (Article 13)",
                        mapping:
                          "Users and auditors can query any minister for the reasoning behind a decision.",
                      },
                      {
                        obligation: "Human oversight (Article 14)",
                        mapping:
                          "Human overseers can pause, appeal, or override council decisions; high-stakes actions require confirmation.",
                      },
                      {
                        obligation: "Accuracy, robustness, cybersecurity (Article 15)",
                        mapping:
                          "BFT consensus tolerates faulty or compromised agents; no single failure can corrupt the whole system.",
                      },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.obligation}
                        className={i < arr.length - 1 ? "border-b border-white/[0.06]" : ""}
                      >
                        <td className="px-5 py-4 align-top font-medium text-white/80">{row.obligation}</td>
                        <td className="px-5 py-4 align-top">{row.mapping}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <Paragraph>
                  The alignment is structural. Where a conventional system produces documentation to
                  prove compliance, a BFT-governed system produces compliance as a side effect of its
                  normal operation. This reduces audit friction and increases trustworthiness at the
                  same time.
                </Paragraph>
              </div>
            </section>

            {/* QUANTUM NOTE */}
            <section id="quantum">
              <SectionHeading index={7}>Quantum-Readiness Note</SectionHeading>
              <Paragraph>
                The long-term security of cryptographic signatures and key exchange is an open
                research question. MEOK&apos;s council votes are currently signed using Ed25519, which
                is not known to be vulnerable to today's computers but is not post-quantum secure.
              </Paragraph>
              <Paragraph>
                Our roadmap includes a staged migration to hybrid post-quantum signatures (for
                example, ML-DSA / Dilithium alongside classical Ed25519) for council vote logs and
                user memory encryption. We monitor NIST PQC standards and intend to make the
                transition before cryptographically relevant quantum computers become available.
                Quantum readiness is a maintenance obligation, not a marketing claim.
              </Paragraph>
            </section>

            {/* REFERENCES */}
            <section id="references">
              <SectionHeading index={8}>References / Further Reading</SectionHeading>
              <ul className="space-y-3 text-white/65">
                {[
                  { label: "EU AI Act (Regulation (EU) 2024/1689)", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
                  { label: "MEOK — Byzantine Consensus for Multi-Agent AI Governance", href: "/research" },
                  { label: "MEOK — Maternal Covenant care-alignment framework", href: "/maternal-covenant" },
                  { label: "MEOK — Aethelgard live simulation", href: "/civilizations#aethelgard" },
                  { label: "NIST — Post-Quantum Cryptography Standardization", href: "https://csrc.nist.gov/projects/post-quantum-cryptography" },
                  { label: "Lamport, Shostak, Pease — The Byzantine Generals Problem (1982)", href: "https://doi.org/10.1145/357172.357176" },
                ].map((ref) => (
                  <li key={ref.label} className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                    <a
                      href={ref.href}
                      target={ref.href.startsWith("http") ? "_blank" : undefined}
                      rel={ref.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-[#c9a84c] transition-colors"
                    >
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* DOWNLOAD CTA */}
            <section
              id="download"
              className="rounded-3xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.05] p-8 sm:p-10 text-center"
            >
              <ShieldCheck className="w-10 h-10 text-[#c9a84c] mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-black mb-3">Download the white paper</h2>
              <p className="text-white/55 max-w-xl mx-auto mb-6">
                A PDF version of this paper will be available for download, sharing, and citation.
                Sign up to be notified when it is ready.
              </p>
              <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d0c18] border border-[#c9a84c]/30 text-[#c9a84c] text-sm font-bold">
                  <Download className="w-4 h-4" />
                  PDF coming July 4
                </span>
                <a
                  href="mailto:research@meok.ai?subject=Notify%20me%20when%20Governance%20by%20Design%20PDF%20is%20ready"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] text-sm font-bold hover:bg-[#b8963e] transition-colors"
                >
                  Notify me <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </article>
        </div>
      </div>

      {/* ─── GEO H2 ─────────────────────────────────────── */}
      <section className="border-t border-white/[0.05] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-[#c9a84c] mb-4">
            What is governance by design?
          </h2>
          <p className="text-white/60 leading-relaxed">
            Governance by design is the practice of embedding oversight, consensus, and audit
            directly into the runtime architecture of an AI system. MEOK&apos;s research paper
            &quot;Governance by Design: Simulating the EU AI Act with Multi-Agent BFT&quot; proposes
            Byzantine fault-tolerant multi-agent councils as a compliance primitive, with Aethelgard
            as a live reference implementation mapping to EU AI Act Articles 9, 10, 11, 12, 13, 14,
            and 15.
          </p>
        </div>
      </section>
    </div>
  );
}
