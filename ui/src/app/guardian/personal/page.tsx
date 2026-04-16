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
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

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
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border overflow-hidden transition-all ${
              isOpen
                ? "bg-[#2d9b8a]/[0.06] border-[#2d9b8a]/30"
                : "bg-white/[0.03] border-white/[0.08]"
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-bold text-white/90 text-sm sm:text-base leading-snug">{faq.q}</span>
              <span className="flex-shrink-0 text-[#2d9b8a]">
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <div className="h-px bg-white/[0.06] mb-4" />
                <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function GuardianPersonalPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-gold absolute top-[-10%] left-[-10%] h-[600px] w-[700px] opacity-20" />
          <div className="blob-gold absolute bottom-[10%] right-[-5%] h-[400px] w-[500px] opacity-15" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-[#2d9b8a]/30 bg-[#2d9b8a]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2d9b8a]">
          Guardian Personal · Protection for you
        </div>

        <div className="relative mb-10 float-slow">
          <IconOrb icon={Shield} variant="teal" size="lg" pulse />
        </div>

        <h1 className="relative mb-6 max-w-4xl text-center text-[3rem] font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          The AI that protects{" "}
          <GlowText variant="teal" as="span">you.</GlowText>
          <br />
          Not just your family.
        </h1>

        <p className="relative mb-4 max-w-2xl text-center text-lg leading-relaxed text-white/60 sm:text-xl">
          For the people who miss social cues and get manipulated. Who struggle with contracts and
          fine print. Who&apos;ve been taken advantage of and never want it to happen again.
        </p>
        <p className="relative mb-10 max-w-xl text-center text-base leading-relaxed text-white/45">
          MEOK Guardian Personal is the AI that reads what they want you to miss, remembers what
          they promised you, and notices what you can&apos;t always see in the moment.
        </p>

        <div className="relative flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-4 text-base font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
          >
            Protect yourself free
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/guardian"
            className="group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white/60 transition-colors hover:text-white"
          >
            Guardian for families →
          </Link>
        </div>
        <p className="relative mt-5 text-xs font-mono text-white/25">
          Free to start · No credit card · Your data never leaves your vault
        </p>
      </section>

      {/* ─── MANIFESTO ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d0c18] px-6 py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-gold absolute top-0 right-[-10%] h-[500px] w-[600px] opacity-20" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
            Nobody in AI is building this. We are.
          </div>

          <h2 className="mb-8 text-3xl font-black leading-tight text-white sm:text-4xl">
            There are a thousand apps to protect your family.
            <br />
            <GlowText variant="teal" as="span">There are almost none to protect you.</GlowText>
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-white/65">
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
            <p className="border-l-2 border-[#c9a84c] pl-5 font-semibold text-white/85">
              MEOK Guardian Personal was built for those people. It was built because the person who
              founded this company is one of them — and it would have changed things.
            </p>
            <p>
              You deserve the same protection that better-resourced people get from expensive
              lawyers and financial advisors. You deserve to know when someone is manipulating you.
              You deserve to never be gaslit about what was promised.
            </p>
            <p className="font-bold text-[#c9a84c]">
              This is that. Finally.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/60">
              Six layers of protection
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Everything they had.
              <br />
              <GlowText variant="teal" as="span">Now you have it too.</GlowText>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
              Expensive lawyers read contracts for their clients. Financial advisors track promises
              for wealthy clients. MEOK does all of it — for you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={
                  <>
                    <p className="mb-4 text-xs font-semibold italic leading-snug text-[#2d9b8a]">
                      &ldquo;{feature.tagline}&rdquo;
                    </p>
                    <ul className="space-y-2">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-white/55">
                          <CheckCircle size={13} className="mt-0.5 flex-shrink-0 text-[#2d9b8a]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                }
                icon={feature.icon}
                iconVariant="teal"
                glow="teal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCENARIOS ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d0c18] px-6 py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-gold absolute top-[-10%] right-[-5%] h-[500px] w-[600px] opacity-20" />
          <div className="blob-gold absolute bottom-[10%] left-[-5%] h-[400px] w-[400px] opacity-15" style={{ animationDelay: "4s" }} />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
              Real scenarios
            </div>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              What it actually catches.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
              These aren&apos;t hypotheticals. These are the kinds of things that happen to people
              every day — and that MEOK would have caught.
            </p>
          </div>

          <div className="space-y-5">
            {SCENARIOS.map((s) => (
              <FeatureCard
                key={s.situation}
                title={s.situation}
                description={s.story}
                icon={s.icon}
                iconVariant="teal"
                glow="teal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ──────────────────────────────── */}
      <section className="bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/60">
              Who this is for
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              If any of these sound like you,{" "}
              <GlowText variant="teal" as="span">this is yours.</GlowText>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Autistic & neurodivergent people",
                detail:
                  "Social manipulation often works precisely because autistic people are honest and expect others to be too. MEOK reads subtext, flags tactics, and gives you a second opinion on interactions — without judgement.",
              },
              {
                label: "People with anxiety",
                detail:
                  "Anxiety can make it hard to trust your own read on a situation. MEOK gives you an objective pattern — something to look at that isn't your own swirling thoughts. Is this person actually behaving strangely, or is it me? Now you can check.",
              },
              {
                label: "Anyone who's been defrauded",
                detail:
                  "Once it's happened, it changes how you see the world. MEOK is the layer of protection you wish you'd had — and now you do. Quiet, steady, always reading for the patterns that came before.",
              },
              {
                label: "People who struggle with documents",
                detail:
                  "Dense legal language is deliberately hard to read. It protects the person who wrote it, not you. MEOK levels that playing field — every time, for every document, in plain English.",
              },
              {
                label: "People who've been gaslit",
                detail:
                  "When you've been told often enough that you're imagining things, you stop trusting your own memory. MEOK's promise records are a ledger that doesn't forget, doesn't doubt itself, and can't be rewritten.",
              },
              {
                label: "Anyone who wants a second opinion",
                detail:
                  "You don't have to have a diagnosis or a history of trauma. If you've ever looked at a message and thought \"is this normal?\" — MEOK is the second opinion you can ask at 11pm without bothering anyone.",
              },
            ].map((p) => (
              <Surface
                key={p.label}
                variant="elevated"
                glow="teal"
                className="flex flex-col gap-4 p-7"
              >
                <div className="h-2 w-2 rounded-full bg-[#2d9b8a]" />
                <h3 className="text-sm font-black leading-snug text-white">{p.label}</h3>
                <p className="text-sm leading-relaxed text-white/60">{p.detail}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOES / NEVER DOES ────────────────────────────── */}
      <section className="bg-[#13121f] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              The honest version
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              It works for you.
              <br />
              <GlowText variant="teal" as="span">Never against you.</GlowText>
            </h2>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Surface variant="elevated" className="border-green-500/15 bg-green-500/[0.05] p-7">
              <h3 className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-400">
                <Eye size={14} /> What Guardian Personal does
              </h3>
              <div className="space-y-3">
                {PERSONAL_DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Surface>

            <Surface variant="elevated" className="border-red-500/15 bg-red-500/[0.05] p-7">
              <h3 className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-400">
                <XCircle size={14} /> What Guardian Personal never does
              </h3>
              <div className="space-y-3">
                {PERSONAL_NEVER.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <XCircle size={14} className="mt-0.5 flex-shrink-0 text-red-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Surface>
          </div>

          <Surface
            variant="glass"
            glow="teal"
            className="p-5 text-center text-sm leading-relaxed text-white/60"
          >
            <span className="font-bold text-[#2d9b8a]">You are the only person who sees your data. </span>
            Guardian Personal is built for your protection alone. Not your employer&apos;s, not your
            family&apos;s, not ours. Yours.
          </Surface>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              Hard questions
            </p>
            <h2 className="mb-3 text-3xl font-black text-white sm:text-4xl">
              Questions worth asking.
            </h2>
            <p className="mx-auto max-w-md text-sm text-white/45">
              We&apos;d rather you asked them of us than found out later.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── EMPOWERMENT CALLOUT ─────────────────────────── */}
      <section className="bg-[#0d0c18] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-5 font-black leading-tight text-white" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}>
            Nobody is coming to save you.
            <br />
            <GlowText variant="teal" as="span">But you can save yourself.</GlowText>
          </h3>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-white/65">
            MEOK was built because the systems that should protect you often don&apos;t. Your
            employer&apos;s contract. Your landlord&apos;s lease. The business partner who knows more than
            you. You deserve an AI that reads the small print, remembers what was promised, and
            stands in your corner.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-7 py-3.5 text-sm font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
          >
            Start protecting yourself
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d0c18] px-6 py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-gold absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-20" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <IconOrb icon={Shield} variant="teal" size="lg" pulse />
          </div>
          <h2 className="mb-4 text-4xl font-black leading-[0.95] text-white sm:text-5xl">
            You deserve to feel safe
            <br />
            <GlowText variant="teal" as="span">in your own life.</GlowText>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/40">
            Not paranoid. Not naive. Protected — with the kind of intelligence that reads what
            others miss and remembers what others forget.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-4 text-sm font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
            >
              Protect yourself free
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/guardian"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Guardian for families
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <p className="mt-6 text-xs font-mono text-white/20">
            Free to start · No credit card · Consent-first · Your data, always
          </p>
        </div>
      </section>

    </div>
  );
}
