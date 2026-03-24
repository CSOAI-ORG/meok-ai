"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  FileText,
  MessageCircle,
  DollarSign,
  Brain,
  Eye,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const FEATURES = [
  {
    icon: FileText,
    title: "Contract & Document Shield",
    tagline: "Before you sign anything, MEOK reads it. In plain language. No legalese.",
    bullets: [
      "Analyses contracts, tenancy agreements, employment terms, financial products",
      "Flags manipulation tactics, unfair terms, and pressure clauses",
      "Summarises in plain English with specific recommendations",
      "Highlights what they want you to miss",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Manipulation Detection",
    tagline: "Knows when someone is trying to take advantage of you.",
    bullets: [
      "Reads emails, messages, and documents for manipulation patterns",
      "Flags urgency pressure, artificial scarcity, guilt tactics, gaslighting patterns",
      "Uses the same partnership detection neural network from Sovereign Temple",
      "Scores interactions so you can see what's normal — and what isn't",
    ],
  },
  {
    icon: Brain,
    title: "Memory of Promises",
    tagline: "Records what people promise you. Never gaslit again.",
    bullets: [
      "Tracks commitments others make to you, with dates and context",
      "Reminds you when deadlines pass without resolution",
      "Creates a verifiable record of agreements — in your words",
      "Quietly surfaces patterns: who keeps their word, who doesn't",
    ],
  },
  {
    icon: MessageCircle,
    title: "Social Navigation Scripts",
    tagline: "Helps you say no. Drafts responses when you're overwhelmed.",
    bullets: [
      "Help drafting difficult replies without losing your meaning",
      "Scripts for declining requests without guilt",
      "Gentle coaching for confrontational or high-stakes conversations",
      "For the moments when you can't find the words — MEOK finds them with you",
    ],
  },
  {
    icon: DollarSign,
    title: "Financial Guardian",
    tagline: "Tracks what you're owed. Flags when someone's overcharging.",
    bullets: [
      "Tracks invoices, payments, and refunds owed to you",
      "Flags unusual charges or commitments that don't match what was agreed",
      "Keeps a running ledger of financial promises — not just transactions",
      "Alerts you before you've forgotten what was agreed",
    ],
  },
  {
    icon: Eye,
    title: "Relationship Pattern Detection",
    tagline: "Notices patterns you might miss over time.",
    bullets: [
      "When someone consistently asks for help at your most vulnerable moments",
      "When promises are repeatedly broken across months, not just once",
      "When a person's behaviour changes after you've made a commitment",
      "Quiet, longitudinal awareness — not paranoia, just clarity",
    ],
  },
];

const SCENARIOS = [
  {
    icon: FileText,
    situation: "Your landlord sends a tenancy renewal.",
    story:
      "Five new clauses buried in legal language. MEOK reads the whole thing before you do — highlights the clause letting them enter your home without notice at any time, explains what it means in plain English, and suggests three specific phrases to negotiate it out. You wouldn't have caught it. Neither would most people.",
  },
  {
    icon: AlertTriangle,
    situation: "Someone you met online offers a business partnership.",
    story:
      "They're enthusiastic. Charming. It moves quickly. MEOK analyses three months of your messages, flags seven manipulation patterns — urgency pressure, artificial scarcity, gradual isolation from your advisors — and surfaces a quiet summary: \"This pattern is consistent with high-pressure sales tactics. You don't need to decide today.\" You slow down. You're glad you did.",
  },
  {
    icon: Shield,
    situation: "Your employer sends a new contract.",
    story:
      "It looks almost the same as your old one. MEOK diffs it against the previous version and surfaces one change: the clause that removes your right to claim overtime retrospectively. You'd have signed it. It had already been there two weeks before you noticed.",
  },
  {
    icon: Brain,
    situation: "A family member asks for money.",
    story:
      "On the exact day you mentioned you'd been paid. MEOK doesn't say anything alarming. It quietly notes: \"This is the third time this has happened in the week after you mentioned a positive financial event.\" It doesn't tell you what to do. It just makes sure you see the pattern.",
  },
];

const PERSONAL_DOES = [
  "Reads documents before you do — and flags what matters",
  "Detects manipulation patterns in messages and interactions",
  "Remembers what people promised you, with dates",
  "Helps you draft responses when you're overwhelmed",
  "Tracks financial commitments and what you're owed",
  "Notices patterns across weeks and months",
];

const PERSONAL_NEVER = [
  "Share your data with third parties or employers",
  "Use your information to train AI models",
  "Activate without your explicit consent",
  "Diagnose or pathologise you",
  "Alert anyone else about your interactions",
  "Override your judgement — only inform it",
];

const FAQS = [
  {
    q: "Is this surveillance of me?",
    a: "No — this is surveillance FOR you. You control everything. MEOK reads what you share with it, on your terms. It doesn't monitor your device, read your messages without permission, or report anything to anyone. You're the only person who sees your data. It works for you, not around you.",
  },
  {
    q: "What if I'm wrong about someone? I don't want MEOK to make me paranoid.",
    a: "MEOK doesn't tell you what to think or who to trust. It surfaces patterns and names them — clearly, without drama. Whether you act on that information is entirely your decision. The goal is clarity, not suspicion. Many people find that seeing patterns named makes them feel less confused, not more anxious.",
  },
  {
    q: "Does MEOK read my private messages automatically?",
    a: "Only if you ask it to. You can paste messages, upload documents, or share threads — and MEOK will analyse them. It doesn't integrate with your messaging apps unless you explicitly set that up. You're always in control of what it sees.",
  },
  {
    q: "What data do you store, and for how long?",
    a: "Your documents, messages, and interaction records are stored in your encrypted personal vault. You can view, export, or delete everything at any time. We never sell your data, share it with insurers or employers, or use it for advertising. The promise records and pattern data you build up are yours — permanently.",
  },
  {
    q: "Is this just for autistic people?",
    a: "Not at all. It's built with neurodivergent people's needs in mind — because those needs are often ignored, and the consequences of missing manipulation can be severe. But anyone who's ever signed something they shouldn't have, felt confused by someone's behaviour, or struggled to say no can use this. The features are useful for everyone. They're essential for some.",
  },
  {
    q: "What if I'm in an abusive situation?",
    a: "MEOK can help you see patterns, document what's happening, and draft messages — but it's not a crisis service. If you're in immediate danger, please contact emergency services or a domestic abuse helpline. MEOK can be a tool for building evidence and clarity over time — but your safety comes first.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.q}
          className="rounded-2xl border overflow-hidden transition-all"
          style={{
            background: open === i ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.03)",
            borderColor: open === i ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)",
          }}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-white/90 text-sm sm:text-base leading-snug">{faq.q}</span>
            <span className="flex-shrink-0 text-[#c9a84c]">
              {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <div className="h-px bg-white/[0.06] mb-4" />
              <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function GuardianPersonalPage() {
  return (
    <div
      className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[700px] h-[600px] top-[-10%] left-[-10%]" />
          <div
            className="blob-gold w-[500px] h-[400px] bottom-[10%] right-[-5%]"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
          Guardian Personal · Protection for you
        </div>

        <div className="relative mb-10 float-slow">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <Shield size={44} color="#c9a84c" strokeWidth={1.5} />
          </div>
          <div className="absolute -inset-3 rounded-3xl border border-[#c9a84c]/15 animate-pulse" />
        </div>

        <h1
          className="text-[3rem] sm:text-6xl lg:text-7xl font-black text-center leading-[1.02] tracking-tight max-w-4xl mb-6 text-white relative"
          style={{ fontWeight: 900 }}
        >
          The AI that protects{" "}
          <span className="text-gradient-gold">you.</span>
          <br />
          Not just your family.
        </h1>

        <p className="relative text-lg sm:text-xl text-white/60 text-center max-w-2xl leading-relaxed mb-4">
          For the people who miss social cues and get manipulated. Who struggle with contracts and
          fine print. Who&apos;ve been taken advantage of and never want it to happen again.
        </p>
        <p className="relative text-base text-white/45 text-center max-w-xl leading-relaxed mb-10">
          MEOK Guardian Personal is the AI that reads what they want you to miss, remembers what
          they promised you, and notices what you can&apos;t always see in the moment.
        </p>

        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.45)] text-base"
          >
            Protect yourself free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/guardian"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white/60 hover:text-white transition-colors text-sm"
          >
            Guardian for families →
          </Link>
        </div>
        <p className="relative mt-5 text-xs text-white/25 font-mono">
          Free to start · No credit card · Your data never leaves your vault
        </p>
      </section>

      {/* ─── MANIFESTO ────────────────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: "#100a00" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[600px] h-[500px] top-0 right-[-10%]" style={{ opacity: 0.5 }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: "rgba(201,168,76,0.12)",
              color: "#c9a84c",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            Nobody in AI is building this. We are.
          </div>

          <h2
            className="text-3xl sm:text-4xl font-black leading-tight mb-8"
            style={{ color: "#fbbf24", fontWeight: 900 }}
          >
            There are a thousand apps to protect your family.
            <br />
            <span className="text-white">There are almost none to protect you.</span>
          </h2>

          <div className="space-y-5 text-white/65 text-base leading-relaxed">
            <p>
              Most protection technology is built for families — parents watching children, adult
              children watching parents. It assumes you are the one doing the watching.
            </p>
            <p>
              But what about the person who was handed a contract they didn&apos;t understand and
              signed it because they felt pressured? The person who missed the social cues that
              something was wrong until it was too late? The person who&apos;s been told, repeatedly,
              that they&apos;re &quot;too sensitive&quot; or &quot;reading too much into things&quot; — and
              started to believe it?
            </p>
            <p>
              Autistic people. People with ADHD. People with anxiety. People who process social
              information differently. People who&apos;ve been defrauded, manipulated, or gaslit and
              are still putting themselves back together. People who are smart, capable, and
              accomplished — and still get taken advantage of because some people are very, very
              good at it.
            </p>
            <p
              className="text-white/85 font-semibold border-l-2 pl-5"
              style={{ borderColor: "#c9a84c" }}
            >
              MEOK Guardian Personal was built for those people. It was built because the person who
              founded this company is one of them — and it would have changed things.
            </p>
            <p>
              You deserve the same protection that better-resourced people get from expensive
              lawyers and financial advisors. You deserve to know when someone is manipulating you.
              You deserve to never be gaslit about what was promised.
            </p>
            <p className="text-[#c9a84c] font-bold">
              This is that. Finally.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              Six layers of protection
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Everything they had.
              <br />
              <span className="text-gradient-gold">Now you have it too.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Expensive lawyers read contracts for their clients. Financial advisors track promises
              for wealthy clients. MEOK does all of it — for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="premium-card rounded-2xl p-7 hover:border-[#c9a84c]/30 transition-all"
                  style={{ borderLeft: "3px solid rgba(201,168,76,0.35)" }}
                >
                  <div className="icon-gold w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-black text-white text-base mb-1 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[#c9a84c] text-xs font-semibold mb-4 leading-snug italic">
                    &ldquo;{feature.tagline}&rdquo;
                  </p>
                  <ul className="space-y-2">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-white/55 leading-relaxed">
                        <CheckCircle
                          size={13}
                          className="text-[#c9a84c] flex-shrink-0 mt-0.5"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SCENARIOS ────────────────────────────────────── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "#0a0820" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[600px] h-[500px] top-[-10%] right-[-5%]" style={{ opacity: 0.6 }} />
          <div
            className="blob-gold w-[400px] h-[400px] bottom-[10%] left-[-5%]"
            style={{ animationDelay: "4s", opacity: 0.4 }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Real scenarios
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              What it actually catches.
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              These aren&apos;t hypotheticals. These are the kinds of things that happen to people
              every day — and that MEOK would have caught.
            </p>
          </div>

          <div className="space-y-5">
            {SCENARIOS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.situation}
                  className="premium-card p-7 rounded-2xl"
                  style={{ borderLeft: "3px solid rgba(201,168,76,0.4)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-gold w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-black text-[#c9a84c] text-xs uppercase tracking-widest mb-2 font-mono">
                        {s.situation}
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed">{s.story}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ──────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: "#1a1a2e60" }}
            >
              Who this is for
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#1a1a2e]">
              If any of these sound like you,{" "}
              <span style={{ color: "#c9a84c" }}>this is yours.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                label: "Autistic & neurodivergent people",
                detail:
                  "Social manipulation often works precisely because autistic people are honest and expect others to be too. MEOK reads subtext, flags tactics, and gives you a second opinion on interactions — without judgement.",
                color: "#c9a84c",
                border: "#c9a84c30",
              },
              {
                label: "People with anxiety",
                detail:
                  "Anxiety can make it hard to trust your own read on a situation. MEOK gives you an objective pattern — something to look at that isn't your own swirling thoughts. Is this person actually behaving strangely, or is it me? Now you can check.",
                color: "#c9a84c",
                border: "#c9a84c30",
              },
              {
                label: "Anyone who's been defrauded",
                detail:
                  "Once it's happened, it changes how you see the world. MEOK is the layer of protection you wish you'd had — and now you do. Quiet, steady, always reading for the patterns that came before.",
                color: "#c9a84c",
                border: "#c9a84c30",
              },
              {
                label: "People who struggle with documents",
                detail:
                  "Dense legal language is deliberately hard to read. It protects the person who wrote it, not you. MEOK levels that playing field — every time, for every document, in plain English.",
                color: "#c9a84c",
                border: "#c9a84c30",
              },
              {
                label: "People who've been gaslit",
                detail:
                  "When you've been told often enough that you're imagining things, you stop trusting your own memory. MEOK's promise records are a ledger that doesn't forget, doesn't doubt itself, and can't be rewritten.",
                color: "#c9a84c",
                border: "#c9a84c30",
              },
              {
                label: "Anyone who wants a second opinion",
                detail:
                  "You don't have to have a diagnosis or a history of trauma. If you've ever looked at a message and thought \"is this normal?\" — MEOK is the second opinion you can ask at 11pm without bothering anyone.",
                color: "#c9a84c",
                border: "#c9a84c30",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-2xl p-7 border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                style={{ borderColor: p.border }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                <h3 className="font-black text-sm leading-snug text-[#1a1a2e]">{p.label}</h3>
                <p className="text-sm text-[#4a4a3a] leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOES / NEVER DOES ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#c9a84c]/70 tracking-widest uppercase mb-3">
              The honest version
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white leading-tight"
              style={{ fontWeight: 900 }}
            >
              It works for you.
              <br />
              <span className="text-gradient-gold">Never against you.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="p-7 rounded-2xl bg-green-500/[0.05] border border-green-500/15">
              <h3 className="text-xs font-black text-green-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <Eye size={14} /> What Guardian Personal does
              </h3>
              <div className="space-y-3">
                {PERSONAL_DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-red-500/[0.05] border border-red-500/15">
              <h3 className="text-xs font-black text-red-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <XCircle size={14} /> What Guardian Personal never does
              </h3>
              <div className="space-y-3">
                {PERSONAL_NEVER.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="p-5 rounded-2xl border text-sm text-white/60 leading-relaxed text-center"
            style={{
              background: "rgba(201,168,76,0.06)",
              borderColor: "rgba(201,168,76,0.2)",
            }}
          >
            <span className="text-[#c9a84c] font-bold">You are the only person who sees your data. </span>
            Guardian Personal is built for your protection alone. Not your employer&apos;s, not your
            family&apos;s, not ours. Yours.
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#c9a84c]/70 tracking-widest uppercase mb-3">
              Hard questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Questions worth asking.
            </h2>
            <p className="text-white/45 text-sm max-w-md mx-auto">
              We&apos;d rather you asked them of us than found out later.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── EMPOWERMENT CALLOUT ─────────────────────────── */}
      <section className="py-16 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
          >
            Nobody is coming to save you.
            <br />
            <span style={{ color: "#c9a84c" }}>But you can save yourself.</span>
          </h3>
          <p className="text-white/65 leading-relaxed max-w-2xl mx-auto mb-8">
            MEOK was built because the systems that should protect you often don&apos;t. Your
            employer&apos;s contract. Your landlord&apos;s lease. The business partner who knows more than
            you. You deserve an AI that reads the small print, remembers what was promised, and
            stands in your corner.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-sm hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            Start protecting yourself
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="blob-gold w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: 0.65 }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.35)",
            }}
          >
            <Shield size={32} color="#c9a84c" strokeWidth={1.5} />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white"
            style={{ fontWeight: 900 }}
          >
            You deserve to feel safe
            <br />
            <span className="text-gradient-gold">in your own life.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Not paranoid. Not naive. Protected — with the kind of intelligence that reads what
            others miss and remembers what others forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-sm hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
            >
              Protect yourself free
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/guardian"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-sm"
            >
              Guardian for families
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/20 font-mono">
            Free to start · No credit card · Consent-first · Your data, always
          </p>
        </div>
      </section>

    </div>
  );
}
