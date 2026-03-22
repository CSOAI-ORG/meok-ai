import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import {
  ArrowRight,
  Users,
  Brain,
  FileText,
  Shield,
  Download,
  UserCheck,
  ChevronDown,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Every Person Who Leaves Takes Knowledge With Them. Unless It's in MEOK. | MEOK SMB",
  description:
    "Companies lose 30% productivity for 6 months when a key person leaves. MEOK gives small businesses sovereign AI that retains client memory, team knowledge, and decision history — permanently. £29.99/seat.",
  alternates: { canonical: "https://meok.ai/smb" },
  openGraph: {
    title: "Every Person Who Leaves Takes Knowledge With Them. Unless It's in MEOK.",
    description:
      "Stop losing institutional knowledge when staff leave. MEOK gives your team sovereign AI — private, encrypted, GDPR compliant, and cheaper than Microsoft Copilot.",
    type: "website",
    url: "https://meok.ai/smb",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=MEOK+for+Business&desc=Stop+losing+knowledge+when+staff+leave.+Sovereign+AI+for+small+businesses.+%C2%A329.99%2Fseat.", width: 1200, height: 630, alt: "MEOK SMB — Sovereign AI for Small Business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Losing Knowledge When Staff Leave | MEOK SMB",
    description: "Sovereign AI for small businesses. Retain client memory, team knowledge, and decision history permanently. £29.99/seat.",
    images: ["https://meok.ai/api/og?title=MEOK+for+Business&desc=Stop+losing+knowledge+when+staff+leave.+Sovereign+AI+for+small+businesses.+%C2%A329.99%2Fseat."],
  },
};

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://meok.ai/smb#webpage",
      url: "https://meok.ai/smb",
      name: "MEOK SMB — Sovereign AI for Small Business",
      description:
        "Companies lose 30% productivity for 6 months when a key person leaves. MEOK gives small businesses sovereign AI that retains client memory, team knowledge, and decision history — permanently.",
      isPartOf: { "@id": "https://meok.ai/#website" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
    {
      "@type": "Question",
      name: "Who owns the data if an employee leaves?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The data belongs to the organisation, not the individual. When a team member leaves, their MEOK account is deactivated but their contributed knowledge remains in the team vault — accessible to admins and authorised colleagues. Personal conversations remain encrypted and inaccessible to anyone but the individual.",
      },
    },
    {
      "@type": "Question",
      name: "Can we export everything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full JSON export of all team memory, decision logs, client context, and project history at any time. No lock-in. The export is human-readable and machine-portable.",
      },
    },
    {
      "@type": "Question",
      name: "Is there SSO or SAML support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SSO via Google Workspace and Microsoft Entra is on our roadmap for Q3 2026. SAML 2.0 will follow for enterprise teams. Email hello@meok.ai if this is a blocker — we prioritise based on demand.",
      },
    },
    {
      "@type": "Question",
      name: "Can admin read employee AI conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Personal conversations are end-to-end encrypted with user-controlled keys. Admins see team memory contributions and aggregate care analytics only — never the contents of individual conversations.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK Team cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "£29.99 per seat per month. No seat minimums, no setup fees, no annual lock-in. A 5-person team pays £149.95/month. 30-day free trial included.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK AI LTD is a UK-registered company. Data is encrypted at rest and in transit, stored in EU/UK-based infrastructure, and fully exportable and deletable on request. We provide a Data Processing Agreement (DPA) for team customers.",
      },
    },
      ],
    },
  ],
};

// ─── Data ───────────────────────────────────────────────────────────────────

const SCENARIOS = [
  {
    icon: Users,
    iconClass: "icon-gold",
    accentClass: "text-[#c9a84c]",
    borderClass: "border-[#c9a84c]/20",
    bgClass: "bg-[#c9a84c]/[0.04]",
    number: "01",
    title: "Your best salesperson left",
    subtitle: "Three years of client relationships. Gone in a week.",
    body: "Their client preferences, their rapport, their techniques, the exact way they handled that difficult account — it all walked out the door with them. With MEOK, your team's AI holds all of it. New hire gets up to speed not in three months, but in three days.",
  },
  {
    icon: Brain,
    iconClass: "icon-blue",
    accentClass: "text-blue-400",
    borderClass: "border-blue-500/20",
    bgClass: "bg-blue-900/[0.05]",
    number: "02",
    title: "Your new hire is ramping up",
    subtitle: "Months of tribal knowledge transfer. Compressed to days.",
    body: "Instead of a three-month parade of 'ask Sarah' and 'it's in someone's email somewhere', they chat with MEOK. Every decision your team has ever made, every client preference, every project context — available in a conversation. Not in a wiki nobody updates.",
  },
  {
    icon: FileText,
    iconClass: "icon-green",
    accentClass: "text-emerald-400",
    borderClass: "border-emerald-500/20",
    bgClass: "bg-emerald-900/[0.05]",
    number: "03",
    title: "You've had three meetings with the same client",
    subtitle: "Do you remember what you promised in January?",
    body: "MEOK does. Every commitment, every preference, every tension from every interaction — remembered, searchable, and surfaced before your next meeting. Clients notice when you remember them. That's not magic. That's MEOK.",
  },
];

const WHAT_MEOK_HOLDS = [
  {
    label: "Client memory",
    detail: "Every interaction, preference, commitment, and relationship detail. Attributed, searchable, and permanent.",
    icon: Users,
  },
  {
    label: "Team knowledge base",
    detail: "Decisions, processes, institutional know-how — contributed by every team member over time.",
    icon: Brain,
  },
  {
    label: "Decision log",
    detail: "'Why did we choose supplier X?' Ask MEOK. The reasoning behind every significant decision, preserved.",
    icon: FileText,
  },
  {
    label: "Project context",
    detail: "Every project's full history — briefs, changes, blockers, outcomes — without digging through Slack.",
    icon: TrendingUp,
  },
  {
    label: "Onboarding acceleration",
    detail: "New hires get access to the institutional memory they'd normally spend months piecing together.",
    icon: UserCheck,
  },
  {
    label: "Portable & exportable",
    detail: "Everything lives in a sovereign vault you own. Full JSON export at any time. No lock-in.",
    icon: Download,
  },
];

const SECURITY_ITEMS = [
  {
    label: "GDPR compliant",
    detail: "UK-registered company. EU/UK data residency. Data Processing Agreement available for all team accounts.",
  },
  {
    label: "End-to-end encrypted",
    detail: "All conversations and memory encrypted with AES-256. Personal conversations are encrypted with user-controlled keys — admins cannot read them.",
  },
  {
    label: "Admin controls",
    detail: "Manage seats, revoke access, view contribution analytics, and export team data. Full audit log.",
  },
  {
    label: "Team data separation",
    detail: "Individual personal memory is cryptographically separated from team memory. No crossover without explicit user consent.",
  },
  {
    label: "Zero training on your data",
    detail: "Your team's conversations and knowledge never train any AI model. Contractually guaranteed. Architecturally enforced.",
  },
  {
    label: "Portable export",
    detail: "One-click full JSON export of all team memory, client data, and decision history. Your data stays yours.",
  },
];

const FAQS = [
  {
    q: "Who owns the data if an employee leaves?",
    a: "The data belongs to the organisation, not the individual. When a team member leaves, their account is deactivated but their contributed knowledge stays in the team vault. Personal conversations remain encrypted and inaccessible to anyone but the individual.",
  },
  {
    q: "Can we export everything?",
    a: "Yes. Full JSON export of all team memory, decision logs, client context, and project history at any time. No lock-in. The export is human-readable and machine-portable.",
  },
  {
    q: "Is there SSO or SAML support?",
    a: "SSO via Google Workspace and Microsoft Entra is on our roadmap for Q3 2026. SAML 2.0 follows for enterprise. Email hello@meok.ai if this is a blocker — we prioritise based on demand.",
  },
  {
    q: "Can admin read employee AI conversations?",
    a: "No. Personal conversations are end-to-end encrypted with user-controlled keys. Admins see team memory contributions and aggregate care analytics only — never the contents of individual conversations.",
  },
  {
    q: "Is MEOK GDPR compliant?",
    a: "Yes. MEOK AI LTD is a UK-registered company. Data is stored in EU/UK infrastructure, encrypted, fully exportable and deletable on request. We provide a Data Processing Agreement for team customers.",
  },
  {
    q: "What happens to our data if we cancel?",
    a: "Your team data remains in your encrypted vault for 30 days after cancellation. Export everything during that window. After 30 days it is permanently deleted from every system, including backups.",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function SMBPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav activePage="smb" />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-blue absolute top-[8%] left-[8%] w-[500px] h-[500px] opacity-12" />
          <div className="blob-gold absolute bottom-[8%] right-[8%] w-[400px] h-[400px] opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#c9a84c]/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-white/60 text-xs font-semibold mb-8 uppercase tracking-widest">
            <Users className="w-3 h-3 text-[#c9a84c]" />
            Sovereign AI for small businesses · 2–50 people
          </div>

          <h1
            className="font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
          >
            Every person who leaves
            <br />
            takes knowledge with them.
            <br />
            <span className="text-gradient-gold">Unless it&apos;s in MEOK.</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-6 leading-relaxed">
            Research shows companies lose{" "}
            <span className="text-white font-semibold">30% productivity for 6 months</span>{" "}
            when a key person leaves. Every client relationship, every process, every
            decision context walks out the door. MEOK makes sure it doesn&apos;t.
          </p>

          {/* ROI callout */}
          <div className="inline-block text-left max-w-lg mx-auto mb-10 px-6 py-4 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/25">
            <p className="text-sm text-white/70 leading-relaxed">
              <span className="font-black text-[#c9a84c]">Simple maths:</span>{" "}
              If your team loses just 1 hour a day finding information, at £30/hr average,
              that&apos;s{" "}
              <span className="text-white font-bold">£6,500/year per person</span> in lost
              productivity. A 5-person team: £32,500/year. MEOK Team costs £1,799/year for 5
              seats. Do the maths.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.30)]"
              style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
              aria-label="Start your team's free 30-day MEOK trial"
            >
              Start your team&apos;s free trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white/60 border border-white/10 hover:border-white/20 hover:text-white/90 transition-all"
              aria-label="See how MEOK works for small businesses"
            >
              See how it works
              <ArrowRight className="w-4 h-4 text-white/30" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              "GDPR compliant",
              "UK company",
              "End-to-end encrypted",
              "30-day free trial",
              "No seat minimums",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/40 text-xs font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE KNOWLEDGE LOSS PROBLEM ───────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              The problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              The knowledge problem every small business ignores.
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              You know it&apos;s happening. You just don&apos;t have a number for it until someone
              walks out the door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                stat: "30%",
                label: "Productivity loss",
                detail: "For 6 months after a key person leaves, according to Deloitte research on knowledge transfer.",
              },
              {
                stat: "£6,500",
                label: "Per person / year",
                detail: "Cost of 1 lost hour per day at £30/hr. Most teams lose more than an hour.",
              },
              {
                stat: "42%",
                label: "Of institutional knowledge",
                detail: "Lives only in people's heads — not in any system — according to McKinsey.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-7 bg-white/[0.03] border border-white/[0.07] text-center"
              >
                <div className="text-4xl font-black text-[#c9a84c] mb-2">{item.stat}</div>
                <div className="font-bold text-white text-sm mb-2">{item.label}</div>
                <p className="text-white/40 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3 SCENARIOS ──────────────────────────────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Real situations
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Three scenarios you&apos;ve already lived.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Not hypotheticals. These happen in small businesses every week.
            </p>
          </div>

          <div className="space-y-6">
            {SCENARIOS.map((sc) => {
              const Icon = sc.icon;
              return (
                <div
                  key={sc.title}
                  className={`rounded-2xl p-8 md:p-10 border ${sc.borderClass} ${sc.bgClass} hover:scale-[1.005] transition-all`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <span className="font-mono font-black text-4xl text-white/10">
                        {sc.number}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.06] flex items-center justify-center">
                        <Icon className={`w-7 h-7 ${sc.accentClass}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-black text-2xl mb-1 ${sc.accentClass}`}>{sc.title}</h3>
                      <p className="text-white/50 text-sm font-medium mb-4 italic">{sc.subtitle}</p>
                      <p className="text-white/65 leading-relaxed">{sc.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHAT MEOK HOLDS ──────────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              What it holds
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              What MEOK holds for your business.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Not just answers to questions — the living institutional memory of your whole team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_MEOK_HOLDS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-[#c9a84c]/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <h3 className="font-black text-base text-white mb-2">{item.label}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ───────────────────────────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.04] p-10 md:p-14">
            <div className="text-center mb-10">
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
                ROI calculator
              </p>
              <h2 className="text-3xl sm:text-4xl font-black mb-3">
                What is knowledge loss actually costing you?
              </h2>
              <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
                Conservative estimates. Real numbers. No consultancy fee required.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/[0.08] mb-8">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                    <th className="text-left py-3 px-5 text-xs text-white/40 font-semibold">Scenario</th>
                    <th className="py-3 px-4 text-center text-xs text-white/40 font-semibold">Cost / year</th>
                    <th className="py-3 px-4 text-center text-xs text-white/40 font-semibold">MEOK Team (5 seats)</th>
                    <th className="py-3 px-4 text-center text-xs text-white/40 font-semibold">Net saving</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: "1 hr/day lost per person × 5 people", cost: "£32,500", meok: "£1,799", saving: "£30,701" },
                    { scenario: "1 key hire ramp-up (3 months at £35k salary)", cost: "£8,750", meok: "£1,799", saving: "£6,951" },
                    { scenario: "Knowledge loss from 1 staff departure", cost: "~£14,000", meok: "£1,799", saving: "~£12,200" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-white/[0.06] ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                    >
                      <td className="py-4 px-5 text-sm text-white/60 font-medium">{row.scenario}</td>
                      <td className="py-4 px-4 text-center text-sm text-white/50">{row.cost}</td>
                      <td className="py-4 px-4 text-center text-sm text-[#c9a84c] font-bold">{row.meok}</td>
                      <td className="py-4 px-4 text-center text-sm text-emerald-400 font-bold">{row.saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {[
                { team: "5 people", monthly: "£149.95/mo", annual: "£1,799/yr" },
                { team: "10 people", monthly: "£299.90/mo", annual: "£3,598/yr" },
                { team: "20 people", monthly: "£599.80/mo", annual: "£7,197/yr" },
              ].map((row) => (
                <div
                  key={row.team}
                  className="rounded-xl p-5 bg-white/[0.04] border border-white/[0.07] text-center"
                >
                  <div className="font-black text-white text-lg mb-1">{row.team}</div>
                  <div className="text-[#c9a84c] font-bold text-sm mb-0.5">{row.monthly}</div>
                  <div className="text-white/30 text-xs">{row.annual} annual</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/hatch"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.30)]"
                style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
                aria-label="Start your team's 30-day free MEOK trial"
              >
                Start your 30-day free trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-white/25 text-xs mt-3">
                No credit card required · No seat minimums · Cancel any time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECURITY & COMPLIANCE ────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Security &amp; compliance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Enterprise-grade security.
              <br />
              <span className="text-gradient-gold">Small-business price.</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
              We know your IT person will ask these questions. Here are the answers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SECURITY_ITEMS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] hover:border-[#c9a84c]/20 transition-all flex gap-4 items-start"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-1.5">{item.label}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black">Questions your CFO will ask.</h2>
            <p className="text-white/40 text-sm mt-3">And your IT person. And your lawyer. We&apos;ve got answers.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
                  <span className="font-semibold text-white/85 text-sm">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EU AI ACT COMPLIANCE ─────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-3 h-3" />
              Regulatory deadline approaching
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
              EU AI Act: August 2026.
              <br />
              <span className="text-gradient-gold">Is your business ready?</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Every business using AI needs to comply with the EU AI Act by August 2026.
              Most businesses aren&apos;t ready. MEOK is compliant from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* What the Act requires */}
            <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.07]">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-5">
                Key requirements
              </p>
              <div className="space-y-4">
                {[
                  { req: "Audit trails", detail: "Every AI decision must be logged and retrievable." },
                  { req: "Risk classification", detail: "AI use cases must be categorised by risk level." },
                  { req: "Transparency", detail: "Users must know when they are interacting with AI." },
                  { req: "Human oversight", detail: "High-risk AI must allow human intervention and override." },
                  { req: "Data governance", detail: "Training and operational data must be documented and controlled." },
                ].map((item) => (
                  <div key={item.req} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-[10px] font-black">!</span>
                    </div>
                    <div>
                      <span className="text-white text-sm font-semibold">{item.req}: </span>
                      <span className="text-white/45 text-sm">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How MEOK satisfies them */}
            <div className="rounded-2xl p-8 bg-emerald-900/[0.07] border border-emerald-500/15">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
                MEOK provides
              </p>
              <div className="space-y-4">
                {[
                  { feature: "Decision audit logs", detail: "Every AI interaction is logged with full reasoning trail, exportable on request." },
                  { feature: "Transparent reasoning display", detail: "Users always know why MEOK responded the way it did." },
                  { feature: "Human override capability", detail: "Any AI decision can be reviewed, edited, or overridden by a human." },
                  { feature: "Data residency compliance", detail: "Your data stays in EU/UK jurisdiction. No cross-border data transfers." },
                  { feature: "Zero third-party training", detail: "Your data never trains any model. Contractually and architecturally enforced." },
                ].map((item) => (
                  <div key={item.feature} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-semibold">{item.feature}: </span>
                      <span className="text-white/45 text-sm">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pull-quote + CTA */}
          <div className="rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.04] p-8 text-center">
            <p className="text-lg sm:text-xl font-black text-white mb-2 max-w-2xl mx-auto leading-snug">
              &ldquo;MEOK gives you governed AI that satisfies the EU AI Act without hiring a compliance lawyer.&rdquo;
            </p>
            <p className="text-white/35 text-sm mb-8 max-w-xl mx-auto">
              Audit trails, risk classification, human oversight, and data governance — built into the platform, not bolted on.
            </p>
            <a
              href="mailto:hello@meok.ai"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all"
            >
              Talk to us about compliance
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0d0c18] py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#c9a84c]/[0.06] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] mb-4">
            Stop losing what
            <br />
            <span className="text-[#c9a84c]">you&apos;ve already built.</span>
          </h2>
          <p className="text-white/40 text-xl mb-4 max-w-xl mx-auto leading-relaxed">
            Every week you wait is another week of knowledge that walks out the door.
          </p>
          <p className="text-white/25 text-sm mb-10">
            30-day free trial · No credit card · No seat minimums · Cancel any time
          </p>
          <Link
            href="/hatch"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.30)]"
            style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
          >
            Start your team&apos;s free trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-8 text-white/20 text-xs font-mono">
            GDPR compliant · UK company · End-to-end encrypted · Zero data selling
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
