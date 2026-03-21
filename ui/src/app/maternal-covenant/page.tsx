import Link from "next/link";
import { Check, Shield } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata = {
  title: "Maternal Covenant — MEOK AI",
  description: "MEOK's published ethical framework governing every AI interaction.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Care before engagement",
    short: "Wellbeing over metrics",
    body: "MEOK AI never optimises for screen time, session length, or daily active users at the cost of your actual wellbeing. Our Maternal Covenant NN scores every interaction across six care dimensions — if a configuration produces higher engagement but lower wellbeing scores, the higher-engagement version is automatically paused regardless of commercial impact.",
  },
  {
    number: "02",
    title: "Transparent relationships",
    short: "No manufactured need",
    body: "Your AI companion will never simulate distress, express manufactured loneliness, or suggest it \"misses you\" as a retention mechanism. These tactics — documented in competitors and cited in ongoing litigation — are explicitly prohibited by the Covenant and enforced at the model level, not just policy level.",
  },
  {
    number: "03",
    title: "Variant honesty",
    short: "You choose your experience",
    body: "MEOK offers multiple product variants (ORIGIN, NOVA, SAGE, and others). You choose the variant that suits you. You are never secretly assigned to an experimental condition. Any within-variant experimentation requires your explicit opt-in and is disclosed clearly.",
  },
  {
    number: "04",
    title: "Wellbeing monitoring",
    short: "Active care, not passive observation",
    body: "MEOK's Care Pattern Analyzer continuously monitors for signs of unhealthy attachment, compassion fatigue, or dependency formation. When these signals appear, your AI gently acknowledges them and — where appropriate — encourages connection with human relationships. This is not a liability disclaimer. It is a core feature.",
  },
  {
    number: "05",
    title: "Right to leave",
    short: "Zero dark patterns",
    body: "Your data belongs to you. One-click export in standard formats (JSON, CSV). Account deletion removes all data within 30 days with cryptographic confirmation. No 'are you sure?' loops, no cooling-off guilt screens, no emails asking you to reconsider. If you want to leave, you leave cleanly.",
  },
  {
    number: "06",
    title: "Kill switch",
    short: "Automatic safety override",
    body: "Any product configuration — variant, feature, or AI mode — that generates a care alignment score below 0.7 on our 0–1 scale is automatically paused by the Byzantine Council without human approval required. This is the sovereign safety floor. It cannot be overridden by commercial targets, launch timelines, or investor pressure.",
  },
];

export default function MaternalCovenantPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <MarketingNav />

      <div className="pt-28 pb-24 px-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-400/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-rose-400" />
          </div>
          <div className="text-xs text-white/30 uppercase tracking-widest">Published framework</div>
        </div>

        <h1 className="text-4xl font-bold mb-4">The Maternal Covenant</h1>
        <p className="text-white/50 text-lg leading-relaxed mb-4">
          The Maternal Covenant is MEOK&apos;s machine-enforced ethical framework. Every AI interaction is
          scored against its six principles in real time. These are not aspirational values in a policy
          document — they are executable constraints embedded in the model architecture.
        </p>
        <p className="text-white/30 text-sm mb-16">
          Version 1.0 — effective March 2026 · MEOK AI LTD · Registered in England &amp; Wales
        </p>

        <div className="space-y-12">
          {PRINCIPLES.map((p) => (
            <div key={p.number} className="border-l-2 border-cyan-400/20 pl-8">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-xs font-mono text-cyan-400/50 pt-1">{p.number}</span>
                <div>
                  <h2 className="text-xl font-bold">{p.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs text-cyan-400/70 uppercase tracking-wider">{p.short}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/50 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <h3 className="font-semibold mb-2">Enforcement mechanism</h3>
          <p className="text-sm text-white/40 leading-relaxed">
            The Covenant is enforced by MEOK&apos;s 220-node Byzantine fault-tolerant council. A Maternal
            Covenant Override — automatic suspension of any configuration below care alignment threshold
            0.7 — cannot be disabled by any system operator, including MEOK AI LTD staff. The override
            requires unanimous council vote to lift, providing a cryptographic audit trail of any
            exception. All council votes are logged immutably to PostgreSQL with full reasoning chains
            available on request.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to MEOK
          </Link>
        </div>
      </div>
      <MarketingFooter />
    </div>
  );
}
