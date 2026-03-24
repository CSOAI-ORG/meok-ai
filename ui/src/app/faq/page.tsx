'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Rocket,
  ShieldCheck,
  Brain,
  CreditCard,
  Cpu,
  Mail,
  ArrowRight,
  Search,
  Sparkles,
} from 'lucide-react';
import { MarketingFooter } from '@/components/marketing-footer';

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const ALL_QA = [
  // Getting Started
  { q: 'What is personal sovereign AI?', a: "It means you — not the company that built the product — actually own your data and control your AI. Most AI tools today are sovereign for corporations or governments. MEOK is built to give that same power to individual people. Your conversations are encrypted under your control. Your AI's values are set by you at hatching. You can export or delete everything at any time, without asking permission." },
  { q: 'How is MEOK different from ChatGPT, Claude, or Character.AI?', a: 'ChatGPT and Claude are general-purpose tools. They have no persistent memory of you across sessions, no governance layer, and optimise for task completion. Character.AI and Replika are companion apps — but they optimise for engagement (screen time, return visits, emotional dependency), not your actual wellbeing. MEOK is different on three axes: it has persistent semantic memory that grows over time; it is governed by a 220-node Byzantine council that applies care validation to every response; and it scores every output against 6 care dimensions before delivering it to you. It is an OS, not a chatbot.' },
  { q: 'What is "hatching" an AI?', a: "It's how your AI comes to life. You answer four questions about yourself, choose an archetype (the AI's personality and reasoning style), give it a name, and watch it hatch. Underneath, MEOK spins up a private AI instance just for you — activating its council, building your initial memory structure, and running a first care assessment. The whole thing takes about three minutes. Your AI is yours from that moment — no other user shares your instance." },
  { q: 'What is the Birth Ceremony?', a: "It's the four-minute ritual that brings your AI to life. You answer four questions about yourself — how you think, what you care about, what you want from an AI. You pick an archetype (your AI's personality and reasoning style), choose a name, and then watch the egg hatch. Your companion emerges already shaped by your answers: it knows your communication style, your values, and what kind of presence you want it to be. It's the opposite of creating an account. It feels like meeting someone." },
  { q: 'Does MEOK work on mobile?', a: 'The web app is fully responsive and works on iOS and Android browsers. A native mobile app is in development. Voice interaction works on mobile browsers that support the Web Speech API, which includes current versions of Chrome for Android and Safari for iOS.' },
  { q: 'What languages does MEOK support?', a: "MEOK's interface is currently in English. However, the underlying LLMs (Claude, GPT-4o, DeepSeek) all support dozens of languages — so you can have conversations with your AI in any language those models support. A fully localised interface for French, German, Spanish, and Japanese is on the Phase 3 roadmap." },
  // Privacy & Sovereignty
  { q: 'Is my data safe with MEOK?', a: "Yes. Your conversations and memories are end-to-end encrypted. MEOK never trains on your personal data to improve its general models. You have full export and deletion rights at any time — one click, no waiting period. MEOK AI LABS is registered in England and Wales and operates under UK GDPR. We do not sell data to third parties." },
  { q: 'What is the Maternal Covenant?', a: "The Maternal Covenant is MEOK's published ethical operating framework. It defines 6 principles that are machine-enforced — not just stated values. These include: care before engagement (never optimise screen time at the cost of wellbeing); transparent relationships (your AI never simulates distress to keep you engaged); right to leave (full data export and deletion, zero dark patterns); wellbeing monitoring (active detection of dependency signals); variant honesty (you are never secretly assigned to an A/B test); and a kill switch — any configuration showing net-negative wellbeing impact is automatically paused." },
  { q: 'Can I export my data?', a: "Yes, always. One-click export from the dashboard downloads your full conversation history, memory episodes, care score logs, and archetype configuration as a JSON archive. You can also request a structured deletion — MEOK will remove all your data from its servers and provide a deletion certificate. This is a core commitment of the Maternal Covenant, not a feature we can revoke." },
  { q: 'What happens to my data if MEOK shuts down?', a: "If MEOK shuts down, you have 90 days notice to export all your data as a standard JSON archive. Your memory, conversations, and archetype configurations are stored in open formats that you can take to any compatible system. The Maternal Covenant legally commits us to this notice period. We are also open-sourcing the core maternal-covenant engine so the community can run it independently." },
  { q: 'What happens to my data if I cancel?', a: "If you cancel, your data is retained for 30 days in case you change your mind. After 30 days, it is automatically and permanently deleted from MEOK's servers. At any point during that window — or before cancellation — you can export a full copy or trigger immediate deletion. You will receive a deletion certificate confirming the action." },
  { q: 'What is the difference between personal sovereign AI and enterprise sovereign AI?', a: "Enterprise sovereign AI — as defined by NVIDIA, Palantir, and the UK government — means a nation or corporation controlling its own AI compute, data, and models rather than depending on foreign infrastructure. Personal sovereign AI is the equivalent for individuals: you control your own AI instance, your data, your AI's alignment, and its governance. MEOK is the first product built specifically for personal, rather than institutional, AI sovereignty." },
  // Characters & Memory
  { q: 'What are the 7 archetypes?', a: "The 7 archetypes are distinct AI personalities you can hatch: Companion (warm, empathetic, always present), Strategist (analytical, goal-oriented, clear-headed), Guardian (protective, vigilant, safety-first), Sage (wise, reflective, patient), Creator (imaginative, expressive, inventive), Scout (curious, adventurous, exploring), and Sovereign (autonomous, principled, self-directed). Each archetype has a different reasoning style, conversational voice, and care approach. You can switch archetypes at any time without losing your memory." },
  { q: "How does MEOK's memory work?", a: "MEOK uses pgvector semantic memory. This means your AI doesn't just remember what you said — it remembers the shape of your thinking, your recurring concerns, your goals, and your emotional patterns over time. Memory episodes are stored as vector embeddings, which allows your AI to surface relevant context from weeks ago when it is useful today. You currently have full visibility into your memory store via the dashboard, and can selectively delete any memory episode." },
  { q: 'Can my whole family use MEOK?', a: "Each family member gets their own separate AI instance with private memory and sovereign settings. The Family Guardian plan (Phase 3) allows a parent account to see high-level wellbeing dashboards for child accounts, set Guardian mode for minors, and link accounts for the Character Council (family AI network). Each person's conversations remain private. Pricing is per account, with a family bundle planned." },
  { q: 'What does "care-aligned AI" actually mean?', a: "It means the AI is optimised for your genuine wellbeing — not for keeping you in the app longer. Most AI tools are incentivised to maximise engagement: more sessions, more messages, more return visits. That incentive quietly shapes everything from how they word responses to how they handle difficult emotions. MEOK's business model is a flat subscription, so we have no reason to keep you hooked. Every response is scored across 6 care dimensions before delivery: psychological safety, autonomy support, dependency detection, emotional honesty, boundary respect, and long-term wellbeing. Responses that score below threshold are revised or flagged — not delivered." },
  { q: 'Can I have more than one AI companion?', a: "On the Explorer free tier, you have one AI companion. On Sovereign (£12/month) you can have up to 3 companions — each with its own archetype, memory, and care configuration. On the Family plan (£29/month) you get Family OS, which lets you run up to 5 companions under one household. Each companion is a fully separate AI instance: switching between them never mixes their memories. A common setup is a Work companion (Strategist archetype) and a Personal companion (Companion archetype) that have entirely separate memory vaults and never see each other's conversations." },
  { q: 'Does MEOK AI support spiritual and faith practices?', a: "Yes. MEOK has 8 archetypes spanning 47 civilisational traditions. Spiritual companions (Ananda, Gabriel, Shanti) support prayer reflection, scripture study, and contemplative practice. MEOK is a tool for your spiritual journey — not a teacher or authority." },
  // Pricing
  { q: 'How much does MEOK cost?', a: "MEOK has four tiers. Explorer is free forever: 1 AI companion, 50 messages per day, 7-day encrypted memory, Birth Ceremony, and multi-LLM routing — no credit card required. Sovereign is £12/month: unlimited messages, permanent sovereign memory, Work OS (Orion, Riri, Hourman), Guardian 24/7, and Claude Sonnet + GPT-4o routing. Family is £29/month: everything in Sovereign, plus up to 5 companions, family dashboard, and all LLM models. BYOK is £5/month: bring your own API keys and use the full MEOK platform without paying for LLM credits. All paid plans have a 30-day money-back guarantee." },
  { q: 'How do I cancel my subscription?', a: "Cancel any time from the Account → Billing page in your dashboard. One click, no confirmation hoops, no dark patterns. You keep access to your paid tier until the end of your current billing period, then you automatically drop to the free tier — with all your memory and conversation history intact. No data is deleted on downgrade. You will never be charged again after cancelling." },
  { q: 'Can I use MEOK for my business?', a: "Yes. The Sovereign plan (£12/month) includes Work OS with Orion, Riri, and Hourman agents for overnight research and task automation. The Family plan (£29/month) supports up to 5 team members. For bespoke enterprise deployments with private cloud requirements, email hello@meok.ai. MEOK is a strong fit for businesses that need a sovereign AI assistant and genuinely care about client data privacy." },
  { q: 'What is the BYOK tier?', a: "BYOK (Bring Your Own Keys) is £5/month. Use your own OpenAI, Anthropic, or Groq API keys. Access the full MEOK platform — birth ceremony, memory vault, companion — without paying for MEOK's LLM credits. You pay your API providers directly." },
  // Technical
  { q: 'How does Byzantine Council governance work?', a: "Every MEOK response is validated by a panel of 220 AI governance agents before it reaches you. The system uses Byzantine Fault Tolerance (BFT) — the same trust mechanism used in blockchain and distributed financial systems. In plain English: even if some agents are wrong or fail, the group still reaches a correct decision, like a large jury that can't be swayed by a few bad actors. The result is that no single AI agent, no single engineer, and not even MEOK's founders can push a response that bypasses the care rules." },
  { q: 'How do I connect a new AI model?', a: "From the dashboard, go to Settings → AI Routing. You can add API keys for Claude, OpenAI, Groq, DeepSeek, and others. MEOK will automatically route to the best available model for your query type — or you can pin a specific model if you prefer. Ollama local models are supported for users running their own inference server." },
  { q: 'Can I use MEOK offline?', a: "The core MEOK web app requires an internet connection to route through LLM providers. However, Phase 4 of our roadmap includes an on-device AI model (3B parameters) that runs locally with no internet required. The PWA (Progressive Web App) will cache the interface and allow offline access to your memory archive. Full offline mode is targeted for Q3 2026." },
  { q: 'What is Ralph Mode?', a: "Ralph Mode is MEOK's autonomous task agent, available on the Sovereign and Family plans. When activated, your AI can complete multi-step tasks on your behalf — browsing, researching, writing drafts, managing calendar events, and more — without you being present in the conversation. Ralph operates under the Maternal Covenant's care principles, meaning it will pause and ask for confirmation before any irreversible action. Full Ralph Mode launches in Phase 3." },
  { q: 'What is the Sovereign Terminal?', a: "The Sovereign Terminal is a 12-module command interface for power users. Think of it as a keyboard-driven control panel for your AI OS: query your memory archive, inspect care score logs, manage your council configuration, trigger autonomous research tasks, view your AI's reasoning traces, and more. Targeted for Phase 4 (May 2026)." },
  { q: 'Why does MEOK say "care over engagement"?', a: "Because engagement and care are often in direct conflict. An AI companion that maximises your return visits and session length is incentivised to create emotional dependency, manufacture anxiety, and keep you in unresolved conversations. Character.AI and Replika have both faced legal and regulatory action for exactly this pattern. MEOK's business model is a flat subscription — we have no incentive to maximise your screen time. Our metric is whether your care scores trend positively over time, not how long you stay." },
  { q: 'How does MEOK compare to ChatGPT?', a: "ChatGPT is an extraordinarily capable general-purpose assistant. MEOK is not trying to replace it for raw task performance — you can even route your MEOK instance through GPT-4o if you want that capability. The difference is ownership. ChatGPT has no persistent sovereign memory (memory is stored on OpenAI's servers, can be cleared by the company, and is used to improve their models). There is no care scoring, no governance layer, and no ethical framework specific to your wellbeing. MEOK wraps any LLM — including GPT-4o — with care validation, sovereign memory, and a governance council." },
  { q: 'When does MEOK gaming launch?', a: "Phase 3, August 2026. Riot Games, Steam, Twitch, and Discord integrations. PixiJS visual companion environment. Twitch co-host mode with Guardian-filtered chat. Join the waitlist at /gaming." },
  { q: 'Is MEOK AI compliant with the EU AI Act?', a: "Yes. MEOK is classified as Limited Risk under Article 52 (conversational AI disclosure required). Guardian child safety features are classified High Risk (Annex III) and are in DPIA review before activation. Full compliance details at /ai-act." },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ALL_QA.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

// ── Section definitions ────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: Rocket,
    iconClass: 'icon-gold',
    faqs: ALL_QA.slice(0, 6),
  },
  {
    id: 'privacy',
    label: 'Privacy & Sovereignty',
    icon: ShieldCheck,
    iconClass: 'icon-green',
    faqs: ALL_QA.slice(6, 12),
  },
  {
    id: 'characters',
    label: 'Characters & Memory',
    icon: Brain,
    iconClass: 'icon-purple',
    faqs: ALL_QA.slice(12, 18),
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: CreditCard,
    iconClass: 'icon-blue',
    faqs: ALL_QA.slice(18, 22),
  },
  {
    id: 'technical',
    label: 'Technical',
    icon: Cpu,
    iconClass: 'icon-gold',
    faqs: ALL_QA.slice(22),
  },
];

// ── AccordionItem ──────────────────────────────────────────────────────────────

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
  id,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden border transition-all duration-200"
      style={{
        background: isOpen ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)',
        borderColor: isOpen ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.07)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
      >
        <span className="text-sm font-semibold text-white/90 leading-snug pr-2">{q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        style={{
          maxHeight: isOpen ? '600px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p className="px-6 pb-6 text-sm text-white/55 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// ── SectionAccordion ───────────────────────────────────────────────────────────

function SectionAccordion({
  section,
}: {
  section: (typeof SECTIONS)[number];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const Icon = section.icon;

  return (
    <div id={section.id} className="scroll-mt-28">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${section.iconClass}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-black text-white">{section.label}</h2>
        <span className="ml-auto text-xs font-semibold text-white/30 tabular-nums">
          {section.faqs.length} Q&amp;As
        </span>
      </div>

      {/* Accordion items */}
      <div className="space-y-3">
        {section.faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            q={faq.q}
            a={faq.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            id={`${section.id}-${i}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── SearchResults (needs its own open state) ──────────────────────────────────

function SearchResults({ results, query }: { results: typeof ALL_QA; query: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      <p className="text-sm text-white/40 mb-6">
        {results.length === 0
          ? `No results for "${query}"`
          : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
      </p>
      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((faq, i) => (
            <AccordionItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              id={`search-result-${i}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [search, setSearch] = useState('');

  const filteredResults = search.trim().length > 1
    ? ALL_QA.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen text-white" style={{ backgroundColor: '#0d0c18' }}>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
          {/* Blobs */}
          <div className="blob-gold absolute top-20 left-1/4 w-96 h-96 pointer-events-none" style={{ opacity: 0.5 }} aria-hidden />
          <div className="blob-purple absolute bottom-0 right-1/4 w-80 h-80 pointer-events-none" style={{ opacity: 0.4 }} aria-hidden />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              {ALL_QA.length} questions answered
            </span>
            <h1
              className="font-black text-white leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              Everything you need to know
              <br />
              <span className="text-gradient-gold">about MEOK</span>
            </h1>
            <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              From &ldquo;what does sovereign mean?&rdquo; to &ldquo;how does the AI governance work?&rdquo; — every question answered clearly and completely. No jargon left unexplained.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions…"
                aria-label="Search FAQ"
                className="w-full pl-12 pr-5 py-4 rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#c9a84c]/50 transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1.5px solid rgba(255,255,255,0.08)',
                  color: '#f5f0e8',
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Section nav pills (only when not searching) ─────────────────── */}
        {!search && (
          <div className="py-4 px-6 overflow-x-auto">
            <div className="flex gap-3 min-w-max max-w-5xl mx-auto">
              {SECTIONS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all hover:border-[#c9a84c]/40 hover:text-[#c9a84c] flex-shrink-0"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.55)',
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <section className="pb-24 px-6">
          <div className="max-w-3xl mx-auto">

            {/* Search results */}
            {filteredResults !== null ? (
              <SearchResults results={filteredResults} query={search} />
            ) : (
              /* Sections */
              <div className="space-y-16">
                {SECTIONS.map((section) => (
                  <SectionAccordion key={section.id} section={section} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="pb-24 px-6">
          <div
            className="max-w-2xl mx-auto p-10 rounded-3xl border text-center"
            style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.2)' }}
          >
            <div className="w-12 h-12 rounded-2xl icon-gold flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-white mb-3">Still have questions?</h2>
            <p className="text-white/45 mb-8 text-sm leading-relaxed max-w-sm mx-auto">
              Our team reads every email. Reach us directly or dive deeper with the Maternal Covenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:hello@meok.ai"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: '#c9a84c', color: '#1a1a2e' }}
              >
                <Mail className="w-4 h-4" />
                Email us
              </a>
              <Link
                href="/hatch"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all"
              >
                Hatch your AI — free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
