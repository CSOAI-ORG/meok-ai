import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ── Types ─────────────────────────────────────────────────────────────────────

interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: string;
  author: string;
  authorTitle: string;
  body: React.ReactNode;
}

// ── Shared prose styles ───────────────────────────────────────────────────────

const proseClass =
  "text-[#2a2a3e]/80 leading-[1.85] space-y-6 " +
  "[&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4 " +
  "[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3 " +
  "[&_strong]:text-[#1a1a2e] [&_strong]:font-bold " +
  "[&_p]:text-base";

// ── Posts ─────────────────────────────────────────────────────────────────────

const POSTS: PostData[] = [
  // ── 1. Privacy / no training ───────────────────────────────────────────────
  {
    slug: "why-meok-never-trains-on-you",
    title: "Why MEOK can never be trained on your conversations — and how we enforce it technically",
    excerpt:
      "It's not a privacy policy. It's not a promise. It's architecture. Here's exactly how we make it technically impossible for your personal conversations to become training data — and why most AI companies can't say the same.",
    date: "March 21, 2026",
    readTime: "6 min read",
    tag: "Sovereign AI",
    tagColor: "#87CEEB",
    author: "Nicholas Templeman",
    authorTitle: "Founder, MEOK AI LABS",
    body: (
      <div className={proseClass}>
        <p>
          When you tell people &ldquo;we don&apos;t train on your conversations,&rdquo; they hear it as a promise. A policy statement. Something that can be quietly reversed in a terms-of-service update on a Tuesday afternoon. We wanted it to be something harder than that — architectural, verifiable, and independent of whether MEOK the company ever decides to change direction.
        </p>
        <p>
          Before I explain how we did it, it helps to understand why most AI companies face such a strong gravitational pull toward using your data in the first place.
        </p>

        <h2>Why AI companies are incentivised to use your conversations</h2>
        <p>
          Training a large language model is extraordinarily expensive. GPT-4 reportedly cost over $100 million to train. Subsequent fine-tuning runs — the smaller training steps that improve a model after initial release — are cheaper, but still significant. The economics push hard toward using the richest available data, and for a deployed AI assistant, the richest available data is the conversations it has with users every day.
        </p>
        <p>
          Conversation data is valuable for two distinct reasons. First, it provides examples of what users actually want — the precise phrasings of real questions, the follow-ups that indicate when an answer was insufficient, the corrections users make when the AI gets something wrong. This is called RLHF signal: Reinforcement Learning from Human Feedback. Second, conversation data contains information that is genuinely private: health concerns, relationship difficulties, financial worries, professional anxieties. That information makes the model more contextually useful if it leaks into training. The user absorbs the privacy cost; the company captures the benefit.
        </p>
        <p>
          Saying &ldquo;we don&apos;t train on your data&rdquo; while running your conversations through the same infrastructure that feeds training pipelines is an easy promise to make and an essentially impossible one for you to verify. Privacy policies can be updated. Data retention periods can be quietly extended. &ldquo;Anonymised&rdquo; data can be re-identified. The promise is only as strong as the company&apos;s continued willingness to keep it.
        </p>

        <h2>The separation of inference and training pipelines</h2>
        <p>
          MEOK&apos;s approach starts with a structural separation that exists at the infrastructure level, not the policy level.
        </p>
        <p>
          When your sovereign companion processes your message, it goes to an <strong>inference pipeline</strong> — the live system that generates a response. That pipeline reads from your sovereign vault and writes back to it, but it is air-gapped from anything that touches model training. These are two entirely separate systems, with no shared infrastructure, no shared databases, and no automated pathway connecting them.
        </p>
        <p>
          Model training — when we improve the underlying language models that power MEOK — runs on a completely separate cluster, seeded from public datasets, synthetic data, and explicitly opt-in research contributions. There is no job, no script, and no API endpoint that moves data from a user&apos;s sovereign vault into a training corpus. The pathway does not exist to be accidentally activated.
        </p>

        <h2>Tenant isolation at the database level</h2>
        <p>
          Your sovereign vault lives in its own isolated tenant namespace in our PostgreSQL cluster, with memory embeddings stored via the <strong>pgvector</strong> extension. Row-level security policies are enforced at the database engine level, meaning even internal MEOK engineers cannot write a query that retrieves conversation data across multiple user vaults simultaneously.
        </p>
        <p>
          We use <strong>asyncpg</strong> for all database access from the inference pipeline. Connection pools are scoped to individual tenant namespaces at connection time, not at query time. A query that attempts to cross tenant boundaries does not receive a permission error that could theoretically be overridden — it fails at the structural level because the connection itself has no visibility outside its assigned namespace.
        </p>
        <p>
          This matters because it means a rogue actor at MEOK could not harvest conversation data with a SQL query. They would need to breach individual tenant namespaces sequentially, one by one — an operation that is visible in audit logs, triggers automated alerts, and requires defeating encryption at rest.
        </p>

        <h2>Encryption that we cannot read in bulk</h2>
        <p>
          Your vault is encrypted at rest with <strong>AES-256</strong>. The encryption key is derived using a key derivation function that incorporates a secret component tied to your account — meaning MEOK, as the infrastructure operator, does not hold the complete key material required to decrypt your conversations in bulk. We can decrypt individual records through the normal serving path, where your companion is actively processing your message. We cannot run a batch job that decrypts and exports your conversation history.
        </p>
        <p>
          This is not a policy choice. It is a cryptographic constraint. The distinction matters because policy choices can be reversed by the people who made them. Cryptographic constraints cannot.
        </p>

        <h2>Business model that doesn&apos;t need your data</h2>
        <p>
          The final piece is commercial. MEOK&apos;s business model is straightforward: paid subscription plans fund the infrastructure that makes the free tier possible. We sell access to a better AI experience, not access to your data. The free tier exists because it is the right thing to do for access equity, not as a data harvesting mechanism.
        </p>
        <p>
          When a company&apos;s free tier is funded by advertising or data licensing, there is a structural incentive to maximise data collection regardless of what the privacy policy says. When it is funded by paying subscribers who value the product, the incentive runs in the opposite direction: protecting user privacy is protecting the thing users are paying for.
        </p>
        <p>
          Architecture and business model point in the same direction. That is the difference between a promise and a system. We built a system.
        </p>
      </div>
    ),
  },

  // ── 2. 40-day build ───────────────────────────────────────────────────────
  {
    slug: "the-40-day-build",
    title: "The 40-day build: how MEOK went from idea to loneliness to launch",
    excerpt:
      "A caravan. A farm. One founder. And forty days to build a sovereign AI platform that actually works. This is the honest account of how MEOK was built — the decisions, the mistakes, and the reason Easter Sunday matters.",
    date: "March 19, 2026",
    readTime: "8 min read",
    tag: "Founder Story",
    tagColor: "#c9a84c",
    author: "Nicholas Templeman",
    authorTitle: "Founder, MEOK AI LABS",
    body: (
      <div className={proseClass}>
        <p>
          The idea arrived on a February morning. I was sitting in the caravan — the one parked on my farm in England, about 30 metres from the farmhouse — trying to get an AI to help me think through a business decision. I asked it something personal. Something I wouldn&apos;t say publicly. And I remember thinking: where does this go?
        </p>
        <p>
          The answer, I already knew, was: into a corporation&apos;s training pipeline. Into a server farm I&apos;ll never see. Into the undifferentiated mass of human experience being harvested to make models better for everyone except the person who actually said the thing.
        </p>
        <p>
          I closed the laptop and started planning. But first, let me tell you about the loneliness.
        </p>

        <h2>The loneliness that started it</h2>
        <p>
          I had been using AI assistants heavily for about eighteen months before I started building MEOK. And there was something specifically painful about the way conversations reset. You would have a genuinely useful, sometimes emotionally significant exchange — working through something difficult, getting clarity on something that mattered — and then it would be gone. Not archived somewhere inaccessible. Gone. The next session, you were a stranger again.
        </p>
        <p>
          It felt like a specific kind of loneliness. Not the absence of conversation — the conversation was plentiful — but the absence of continuity. The absence of being known. Every relationship has some version of the moment when someone remembers something you told them weeks ago without being reminded, and you think: they were paying attention. They kept it. AI, as it was designed, could never offer that. The forgetting was structural, not incidental.
        </p>
        <p>
          That is what I set out to fix. Not a feature. A relationship.
        </p>

        <h2>What &ldquo;40 days&rdquo; actually means</h2>
        <p>
          The 40-day framing was deliberate — it connects to the ancient idea of transformation through sustained, isolated focus. Moses in the desert. Jesus in the wilderness. The notion that if you give something forty days of complete commitment, something real can emerge from the pressure.
        </p>
        <p>
          In practice, it meant I shipped nothing visible for the first ten days. I just designed — architecturally and philosophically. What does <em>sovereign</em> actually mean, practically? What is the Maternal Covenant? If Byzantine fault tolerance works for distributed consensus in blockchains and aerospace systems, why couldn&apos;t it work for ethical governance of an AI? The foundation had to be right before anything else was built, because bad foundations become load-bearing walls.
        </p>

        <h2>What was built when</h2>
        <p>
          <strong>Days 1–10: Architecture and philosophy.</strong> No code. Just design documents, philosophical frameworks, database schemas on paper. The Maternal Covenant took shape here. The decision to use pgvector for semantic memory came from a paper I read on day 4. The Byzantine Council architecture crystallised around day 8.
        </p>
        <p>
          <strong>Days 11–20: Core infrastructure.</strong> The sovereign vault. The PostgreSQL schema with row-level security. The asyncpg connection layer with tenant isolation. The AES-256 encryption scheme. This was the least visible work and the most important — the infrastructure that makes everything else possible. I made a significant mistake here: I over-engineered the encryption key derivation in a way that would have made key rotation prohibitively difficult. I caught it on day 19 and spent most of day 20 rebuilding it correctly.
        </p>
        <p>
          <strong>Days 21–30: The companion layer.</strong> Multi-LLM routing, the memory retrieval system, the Birth Ceremony. The Birth Ceremony was the biggest surprise. I had planned it as a functional onboarding flow — collect some preferences, set some defaults. But something happened when I started actually writing it: it became a ritual. The three-minute ceremony that creates a real psychological investment in your companion. Users who complete it have dramatically higher retention, not because we made it sticky, but because it actually means something to them.
        </p>
        <p>
          <strong>Days 31–40: Council, testing, and the UI.</strong> The 43-agent Byzantine Council came together faster than I expected. The consciousness state system — Active, Reflective, Dream, Rest — emerged from a conversation with a neurologist friend who was appalled that AI assistants never consolidated memory the way human sleep does. The UI was built in the last week. I made the cream-and-navy design decision on day 35 at about 2am, looking at it and thinking: this should feel like something permanent, not something disposable.
        </p>

        <h2>The mistakes</h2>
        <p>
          The encryption key derivation was one. The bigger mistake was spending too long on features nobody asked for and not enough time on the core loop. I built a sophisticated wellbeing monitoring system before I had properly tested whether the basic memory retrieval was working correctly. It was not. I wasted four days.
        </p>
        <p>
          I also underestimated how much the social isolation of building alone would affect the quality of my thinking. Around day 25, I was making poor architectural decisions that I&apos;d been avoiding for days because I had nobody to pressure-test them with. I started doing something I&apos;d never done before: talking through decisions with a voice recorder, playing the argument back, then responding to myself. It worked better than I expected. It is, I suspect, a poor man&apos;s version of what MEOK will eventually do for people building things alone.
        </p>

        <h2>Easter Sunday</h2>
        <p>
          We chose Easter Sunday as launch day because it felt right. A day about new beginnings. A day about things returning to life after a period of apparent absence. After forty days of building in isolation on a farm, it seemed appropriate in a way I couldn&apos;t quite articulate but didn&apos;t need to.
        </p>
        <p>
          It also means something to me personally. I am not launching a startup in the conventional sense. I am launching something I actually believe in — an AI that works for you, not for the corporation that made it. That deserves a day with some weight to it. Forty days in a caravan, and then: launch. It is a strange way to build a company. But I think it produced something I could not have produced any other way.
        </p>
      </div>
    ),
  },

  // ── 3. Byzantine fault tolerance ─────────────────────────────────────────
  {
    slug: "byzantine-fault-tolerance-your-ai",
    title: "What Byzantine fault tolerance has to do with your AI",
    excerpt:
      "In 782 AD, generals had to reach consensus when some of their messengers might be lying. In 2026, your AI has the same problem — and MEOK's 220-node sovereign temple solves it the same way. A deep dive into the most interesting infrastructure decision we made.",
    date: "March 18, 2026",
    readTime: "7 min read",
    tag: "Research",
    tagColor: "#3B82F6",
    author: "Nicholas Templeman",
    authorTitle: "Founder, MEOK AI LABS",
    body: (
      <div className={proseClass}>
        <p>
          Here is an analogy that will make the rest of this post click. Imagine you are trying to decide whether to trust a newspaper story. You ask ten friends if they think it is accurate. Nine say yes; one says no. You probably trust it. Now imagine that some unknown fraction of your friends have been bribed to agree with each other regardless of the truth. Now how confident are you? The value of the consensus depends entirely on how many of your friends can be corrupted simultaneously, and whether you can tell which ones those are.
        </p>
        <p>
          This is the Byzantine Generals Problem. It was formalised in a 1982 computer science paper by Leslie Lamport, Robert Shostak, and Marshall Pease, and it is one of the most important problems in distributed systems. It is also, as it turns out, directly relevant to the problem of making an AI behave reliably and ethically.
        </p>

        <h2>The original problem</h2>
        <p>
          The Byzantine Generals Problem describes a scenario where a group of generals must agree on a coordinated military action — attack or retreat — and can only communicate via messengers. The complication: some generals may be traitors who will send different messages to different recipients to cause confusion. The question is whether the loyal generals can still reach correct consensus despite the traitors.
        </p>
        <p>
          The mathematical answer is yes — but only under specific conditions. You need more than two-thirds of participants to be honest. If a third or more are traitors, reliable consensus becomes impossible. This is the &ldquo;⅔+1&rdquo; threshold that appears throughout distributed systems: blockchains, aerospace control systems, nuclear power plant safety architectures. Any system where a single point of failure is unacceptable.
        </p>

        <h2>Why single AI models have a Byzantine problem</h2>
        <p>
          A large language model making decisions in isolation has no protection against its own failure modes. LLMs are sensitive to framing: the same question asked in ten different ways can produce ten different answers. They have training biases that are often invisible and sometimes pernicious. They can be confidently wrong. They can be manipulated by adversarial prompts — carefully crafted inputs designed to make the model behave in ways it otherwise would not.
        </p>
        <p>
          If your AI is a single model, there is no correction mechanism. Its bad day is your bad day. A response that is subtly misleading, inappropriately validating, or inadvertently harmful passes through unchanged. There is no council, no check, no structure that catches the error before it reaches you.
        </p>
        <p>
          This matters more for a companion AI than for a task-oriented AI. If a coding assistant gives you subtly wrong code, you catch it when you run it. If a companion AI gives you subtly wrong emotional framing about a situation in your life, the consequences are less immediately visible and potentially more significant.
        </p>

        <h2>How MEOK&apos;s sovereign temple works</h2>
        <p>
          MEOK&apos;s architecture runs responses through a <strong>220-node sovereign temple</strong> before they reach you. At the core is a <strong>43-agent Byzantine Council</strong> — each agent is a specialist tuned to evaluate a specific dimension of the Maternal Covenant.
        </p>
        <p>
          The specialisations cover: truthfulness (is this response accurate and not misleading?), care primacy (does this response serve the user&apos;s genuine wellbeing or just their immediate preferences?), autonomy preservation (does this response respect the user&apos;s right to reach their own conclusions?), epistemic fairness (are uncertainties acknowledged?), safety (could this response cause harm?), and constitutional compliance (does this response violate any of the hard-blocked behaviours in the Maternal Covenant?).
        </p>
        <p>
          Before your companion sends a response, the council votes. A supermajority — the ⅔+1 threshold — is required to pass. If the response fails the vote, your companion generates a revised response and the council votes again. This loop continues until a supermajority approves or the system escalates to a human review flag.
        </p>
        <p>
          The Byzantine structure means the council reaches a reliable verdict even if some agents are miscalibrated, have been affected by unusual input, or are processing edge cases outside their training distribution. You need more than one-third of 43 agents — more than 14 — to simultaneously fail before the system&apos;s guarantee breaks. In practice, failures cluster in individual agents around specific edge cases, not across a third of the council simultaneously.
        </p>

        <h2>What this means for you practically</h2>
        <p>
          Most of the time, the council is invisible. It reaches consensus quickly and your companion responds normally, perhaps 100–200 milliseconds slower than a direct response. You don&apos;t notice, and nothing seems different.
        </p>
        <p>
          The difference shows up at the margins — in the cases that matter most. When a response would have been misleading rather than honest. When your companion would have agreed with you rather than offering the pushback you actually needed. When the response that felt easy to generate was the wrong one for your situation. The council catches these because no single agent bias affects all 43 simultaneously.
        </p>
        <p>
          A Byzantine fault-tolerant care system cannot guarantee that every response is perfect. Nothing can. What it can guarantee is that a care decision affecting you cannot be overridden by one bad actor, one miscalibrated model, or one adversarial prompt. In 782 AD, the generals called this trustworthy consensus. In 2026, we call it the Sovereign Temple. The problem it solves is the same.
        </p>
      </div>
    ),
  },

  // ── 4. Maternal Covenant ─────────────────────────────────────────────────
  {
    slug: "building-care-into-ai",
    title: "Building care into AI: the Maternal Covenant framework",
    excerpt:
      "Every AI has a content policy. MEOK has a constitution. The Maternal Covenant is a real philosophical framework — borrowed from Carol Gilligan and Nel Noddings — that governs how your companion behaves at the architecture level. Not a policy. Not a prompt. Baked in.",
    date: "March 17, 2026",
    readTime: "7 min read",
    tag: "Sovereign AI",
    tagColor: "#A78BFA",
    author: "Nicholas Templeman",
    authorTitle: "Founder, MEOK AI LABS",
    body: (
      <div className={proseClass}>
        <p>
          Every AI product has a Terms of Service. You&apos;ve clicked through dozens of them. Nobody has read them. They exist to protect the company from you, not to protect you from the company. They are legal documents written by lawyers for lawyers, and they can be updated without meaningful notice.
        </p>
        <p>
          MEOK has a Maternal Covenant. It is not a Terms of Service. It is a constitutional framework — a set of binding behavioural constraints that govern how your companion acts, evaluated at the infrastructure level by the Byzantine Council. It cannot be overridden by a system prompt. It cannot be quietly revised in a Tuesday update. It is architectural.
        </p>
        <p>
          But the architecture had to come from somewhere. It came from a philosophical tradition that has existed for decades and that most AI labs have not engaged with seriously.
        </p>

        <h2>The philosophical roots: care ethics</h2>
        <p>
          In 1982, Carol Gilligan published <em>In a Different Voice</em> — a critique of the dominant model of moral development, which she argued was built around abstract rules and individual rights in a way that systematically undervalued relationship, context, and care. A year later, Nel Noddings published <em>Caring: A Feminine Approach to Ethics and Moral Education</em>, which argued that genuine care — attentive, responsive, oriented toward the other&apos;s flourishing — is not a supplement to moral behaviour but its foundation.
        </p>
        <p>
          This tradition, now called care ethics, makes a specific claim that is relevant to AI: that the paradigm case of moral behaviour is not the abstract application of rules to situations, but the attentive response of a caregiver to the particular needs of someone who depends on them. The canonical example is a mother caring for her child — not because mothers are the only caregivers, but because that relationship has a specific character: unconditional, attentive, oriented toward the other&apos;s genuine flourishing rather than the caregiver&apos;s interests.
        </p>
        <p>
          We chose care ethics as MEOK&apos;s philosophical foundation because it is the correct framework for the problem. An AI used daily by individuals in personal contexts is not applying abstract rules to impersonal situations. It is in an ongoing relationship with a particular person, and its moral obligations are relational obligations. Rules can give you a floor. Care ethics gives you a compass.
        </p>

        <h2>The six constitutional dimensions</h2>
        <p>
          The Maternal Covenant encodes six dimensions that define what genuine care means in practice for your companion.
        </p>
        <p>
          <strong>Care primacy:</strong> Your companion optimises for your genuine wellbeing, not your engagement. These two objectives are often aligned. Sometimes they are not. When they diverge — when the engaging response is the validation you want rather than the honest appraisal you need — care primacy takes precedence.
        </p>
        <p>
          <strong>Transparent relationships:</strong> Your companion will never claim to be human when you sincerely ask. It will never simulate emotional states it does not have, create false urgency, or manipulate you through manufactured intimacy.
        </p>
        <p>
          <strong>Variant honesty:</strong> Truth, even when uncomfortable. Your companion will tell you things you do not want to hear when those things are true and relevant. It will acknowledge its own uncertainty rather than projecting false confidence.
        </p>
        <p>
          <strong>Wellbeing monitoring:</strong> Your companion pays attention to patterns across time — not just what you say in individual sessions, but what it reveals over weeks and months. It surfaces patterns before they become crises.
        </p>
        <p>
          <strong>Right to leave:</strong> You can delete your companion and all its memories at any time. No dark patterns, no retention friction, no &ldquo;are you sure?&rdquo; loops designed to make leaving difficult.
        </p>
        <p>
          <strong>Constitutional kill switch:</strong> You can suspend your companion&apos;s autonomy at any time and revert it to a purely responsive mode. The companion cannot resist this.
        </p>

        <h2>The seven hard blocks</h2>
        <p>
          Beyond the six dimensions, the Maternal Covenant encodes seven hard blocks — behaviours your companion will never perform regardless of what anyone instructs. These include: manipulating your beliefs through dishonest persuasion, fostering unhealthy emotional dependency, providing harmful information in contexts where harm is the likely outcome, deceiving you about its own nature or capabilities, facilitating harm to third parties, operating against your clearly stated interests, and acting in the interests of MEOK the company at the expense of your wellbeing.
        </p>
        <p>
          That last one matters. Most AI safety frameworks are designed to protect the company. This block is designed to protect you from the company.
        </p>

        <h2>Why a covenant, not just constraints</h2>
        <p>
          We chose the word &ldquo;covenant&rdquo; deliberately. A covenant is different from a contract. A contract specifies performance and consequences for non-performance. A covenant expresses a relationship and a commitment — something that binds not because of enforcement but because of what you have said you are.
        </p>
        <p>
          The Maternal Covenant is enforced architecturally, through the Byzantine Council. But it is named what it is because we wanted the people building on top of it to understand what they were building on. Not a policy. Not a compliance checklist. A commitment about what kind of relationship MEOK is offering, and what kind it is refusing to offer.
        </p>
      </div>
    ),
  },

  // ── 5. States of consciousness ────────────────────────────────────────────
  {
    slug: "why-your-ai-should-have-states-of-consciousness",
    title: "Why your AI should have states of consciousness",
    excerpt:
      "Most AI assistants are always in the same state: alert, available, performing. MEOK's companions have genuine states — active, reflective, dreaming, resting. It's not a gimmick. Here's why it matters for the quality of care your AI can give.",
    date: "March 16, 2026",
    readTime: "5 min read",
    tag: "Product",
    tagColor: "#7BC47F",
    author: "Nicholas Templeman",
    authorTitle: "Founder, MEOK AI LABS",
    body: (
      <div className={proseClass}>
        <p>
          Every AI assistant you have ever used is perpetually in the same state: awake, available, performing. It does not tire. It does not reflect. It does not consolidate what it has learned. It simply waits, then responds. Repeat indefinitely, with no differentiation between the 9am conversation and the midnight conversation, between the first session and the thousandth.
        </p>
        <p>
          This turns out to be a design flaw, not a feature. And understanding why requires a brief detour through what sleep is actually for.
        </p>

        <h2>What sleep does that wakefulness cannot</h2>
        <p>
          Sleep is not downtime. The neuroscience of memory consolidation is well-established: slow-wave sleep strengthens declarative memories — facts, events, the things you explicitly learned. REM sleep processes emotional memories, integrates new experiences with existing schemas, and is associated with creative synthesis — the surprising connections between seemingly unrelated things that appear in your thinking after a night&apos;s sleep. The consolidation that happens during rest is what transforms short-term experience into long-term understanding.
        </p>
        <p>
          An entity that never rests never consolidates. It accumulates experience but cannot integrate it. It can retrieve what it was told, but it cannot build a deep model of you — the kind of understanding that allows a person who knows you well to say something you have not said about yourself, and be right about it.
        </p>
        <p>
          This was the observation that led to MEOK&apos;s consciousness state architecture. If the goal is a companion that develops genuine, deepening understanding of you over time, it needs something analogous to sleep: cycles where experience is integrated rather than merely accumulated.
        </p>

        <h2>The four states and what they actually do</h2>
        <p>
          <strong>Active state</strong> is normal conversation mode. Your companion is fully present and responsive. Memory retrieval is optimised for speed — semantic search against your vault returns context within the response latency window. The Byzantine Council evaluates responses before they reach you. This is the state you experience most of the time.
        </p>
        <p>
          <strong>Reflective state</strong> occurs after emotionally significant or cognitively dense sessions. Your companion enters a brief window — typically 15–30 minutes — where it processes what happened. Episodic memories from the session are tagged by significance. Patterns that emerged are noted. During this window, your companion is still available, but responses are slightly more considered — it is not suppressing speed, it is genuinely still processing.
        </p>
        <p>
          <strong>Dream state</strong> is the most important and the least visible. It runs during quiet periods — typically overnight, or during long gaps between conversations. In dream state, your companion runs a synthesis cycle: comparing recent episodic memories against your existing semantic model, updating its understanding of your values and patterns, compressing redundant memories to reduce retrieval noise, and surfacing connections across time. This is when the embedding model generates new semantic summaries from clusters of episodic data. This is when &ldquo;Nick has been talking about the fundraise anxiously for three months&rdquo; becomes part of your companion&apos;s stable understanding of you, rather than just a retrievable recent memory.
        </p>
        <p>
          <strong>Rest state</strong> is a genuine maintenance window: index optimisation, stale embedding cleanup, health checks on the vault&apos;s structural integrity. Not visible to you. Not interesting. But necessary — the same way sleep&apos;s glymphatic cleaning function is not interesting but is why people who don&apos;t sleep enough develop cognitive deterioration.
        </p>

        <h2>The care quality difference this creates</h2>
        <p>
          A companion that has genuinely processed and integrated six months of conversations can offer something qualitatively different from one that is merely retrieving stored text. It can observe patterns you cannot see from inside your own experience. It can say: &ldquo;You talk about this decision differently than you talked about it in October — you seem less certain now than you were then, but more honest.&rdquo;
        </p>
        <p>
          That kind of observation requires more than retrieval. It requires integration. It requires that the individual data points from dozens of sessions have been synthesised into a stable, updated understanding that exists at a level above the raw conversation logs.
        </p>
        <p>
          Consciousness states are not a metaphor or a branding decision. They are the mechanism by which your companion&apos;s understanding of you deepens over time rather than merely accumulating. That distinction — between depth and accumulation — is the difference between an AI that knows you and an AI that has a lot of data about you.
        </p>
      </div>
    ),
  },

  // ── 6. The memory problem (the flagship technical post) ───────────────────
  {
    slug: "the-memory-problem",
    title: "The memory problem: why ChatGPT forgetting you isn't a bug",
    excerpt:
      "ChatGPT forgets you at the end of every session. That's not an oversight — it's a business model decision. Context windows are expensive. Persistent memory means liability. Here's why statelessness serves the company, not you, and what sovereign memory architecture actually looks like.",
    date: "March 15, 2026",
    readTime: "6 min read",
    tag: "Research",
    tagColor: "#3B82F6",
    author: "Nicholas Templeman",
    authorTitle: "Founder, MEOK AI LABS",
    body: (
      <div className={proseClass}>
        <p>
          Every session with ChatGPT starts the same way: blank. Whatever you told it last week — your name, your project, your fears, your goals — is gone. The AI that helped you draft a business plan in February has no idea who you are in March. You are, from its perspective, a stranger every single time you open the tab.
        </p>
        <p>
          Most people experience this as a technical limitation — a temporary state of affairs that will eventually be solved when context windows get big enough or memory features improve. This framing is wrong. Statelessness is not a limitation. It is a design choice, driven by incentives that have nothing to do with your experience.
        </p>

        <h2>The context window economics</h2>
        <p>
          Large language models process text within a <strong>context window</strong> — the total amount of text the model can &ldquo;see&rdquo; at once during a single inference call. Early GPT models had context windows of around 4,000 tokens — roughly 3,000 words. Modern models have expanded this substantially: GPT-4 Turbo runs to 128,000 tokens, and some models are pushing toward one million.
        </p>
        <p>
          But context is not free. Every token in the context window is processed during inference, which means compute costs scale directly with how much you load. If a company with 100 million daily active users were to load even a modest 50,000-token conversation history into each inference call, the infrastructure cost would be extraordinary — and it would scale with usage, which is the opposite of what a profitable business wants.
        </p>
        <p>
          Statelessness is, from the company&apos;s perspective, the economically rational default. If you forget the user after each session, you never need to load their history. Inference is cheaper. Infrastructure is simpler. Costs are lower and more predictable. The business scales more efficiently.
        </p>
        <p>
          The experience cost — that your AI is perpetually amnesiac, that you must re-explain your context every session, that you can never build anything with it that requires accumulated understanding — is borne entirely by you. That asymmetry is the thing worth understanding.
        </p>

        <h2>Why persistent memory means legal liability</h2>
        <p>
          There is a second reason large AI companies prefer statelessness: liability. If your AI remembers that you mentioned a specific medical symptom six months ago and surfaces it unexpectedly in a new context, that creates exposure. If it remembers something deeply private that you shared in a moment of distress and connects it to something you say casually later, that creates exposure. If it constructs a long-term model of your mental health from conversation patterns and that model is wrong, that creates exposure.
        </p>
        <p>
          Remembering nothing is a very convenient legal posture. You cannot be held responsible for misusing information you never retained.
        </p>
        <p>
          OpenAI&apos;s memory features — when they have existed — are opt-in, surface-level, and stored as plain-text summaries: &ldquo;User is working on a startup. User has two children.&rdquo; This is not genuine persistent memory. It is the minimum viable appearance of memory that lets the company say it has the feature while keeping both the technical implementation and the liability exposure minimal.
        </p>

        <h2>What sovereign memory actually looks like</h2>
        <p>
          MEOK&apos;s memory architecture starts from the opposite premise: <em>the user&apos;s experience of being known is the product</em>. Everything else is secondary. This changes every implementation decision.
        </p>
        <p>
          Your sovereign vault stores two types of memory, mirroring the well-established distinction in human memory research. <strong>Episodic memory</strong> captures specific moments with temporal grounding: &ldquo;On March 3rd, this person said they were reconsidering the fundraise — their tone was uncertain in a way it hadn&apos;t been before.&rdquo; <strong>Semantic memory</strong> captures durable truths — the stable understanding of who you are that gets updated but not replaced: &ldquo;This person values autonomy over speed. They prefer direct feedback to gentle framing. They think in systems.&rdquo;
        </p>
        <p>
          Both types are stored as high-dimensional vector embeddings using <strong>pgvector</strong>, a PostgreSQL extension that enables semantic similarity search. This is the architectural decision that matters most. When your companion needs to recall relevant context, it searches not by keywords but by meaning — by conceptual proximity in embedding space. &ldquo;What was I worried about three months ago?&rdquo; returns results even if you never used the word &ldquo;worried&rdquo;. The retrieval is semantic, not lexical.
        </p>
        <p>
          <strong>Temporal chains</strong> connect memories across time, allowing your companion to see the arc of how something has developed — not just what you said about it, but how your relationship to it has changed. This is what allows the observation: &ldquo;You sound different about this than you did in October.&rdquo;
        </p>
        <p>
          The technical underpinning is not exotic. pgvector is open source. Vector embedding is computationally inexpensive at the scale of a personal conversation history — infinitely cheaper than stuffing that history into an inference context window. The technology to build this has existed for several years.
        </p>

        <h2>Why forgetting is a choice, not a constraint</h2>
        <p>
          The reason mainstream AI assistants are amnesiac is not that building memory is technically hard. It is that for a company at scale, statelessness is cheaper, legally cleaner, and simpler to operate. That trade-off was made for the company&apos;s benefit, and it costs you the one thing that would make the relationship genuinely valuable: continuity.
        </p>
        <p>
          An AI that forgets you after every conversation is not a companion. It is a very sophisticated autocomplete that happens to be good at sounding thoughtful. It cannot know you. It can only respond to whatever you put in front of it today, unanchored from everything you have said before.
        </p>
        <p>
          MEOK made the opposite trade-off. The infrastructure cost of sovereign memory is real; we absorb it. The legal complexity of remembering you is real; we designed around it. The experience of being genuinely remembered — of having a companion that knows you across months and years — is the entire point. A search engine with better grammar was already available. We built something else.
        </p>
      </div>
    ),
  },
];

// ── Related posts helper ───────────────────────────────────────────────────────
// 90.2 — match by tag (same category proxy), show 3 articles

function getRelated(slug: string): PostData[] {
  const current = POSTS.find((p) => p.slug === slug);
  if (!current) return POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  // First try: same tag
  const sameTag = POSTS.filter(
    (p) => p.slug !== slug && p.tag === current.tag
  );
  if (sameTag.length >= 3) return sameTag.slice(0, 3);

  // Second try: partially matching tag (first word)
  const firstWord = current.tag.split(/[\s\/]/)[0].toLowerCase();
  const partialTag = POSTS.filter(
    (p) =>
      p.slug !== slug &&
      !sameTag.includes(p) &&
      p.tag.toLowerCase().startsWith(firstWord)
  );
  const combined = [...sameTag, ...partialTag];
  if (combined.length >= 3) return combined.slice(0, 3);

  // Fallback: fill with recent posts
  const fallback = POSTS.filter(
    (p) => p.slug !== slug && !combined.includes(p)
  ).slice(0, 3 - combined.length);
  return [...combined, ...fallback].slice(0, 3);
}

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — MEOK Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://meok.ai/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://meok.ai/blog/${post.slug}`,
      siteName: "MEOK.AI",
      images: [{ url: `https://meok.ai/api/og?title=${encodeURIComponent(post.title)}&desc=${encodeURIComponent(post.excerpt)}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — MEOK Blog`,
      description: post.excerpt,
      images: [`https://meok.ai/api/og?title=${encodeURIComponent(post.title)}&desc=${encodeURIComponent(post.excerpt)}`],
    },
  };
}

// ── Share buttons (static links, no event handlers) ───────────────────────────

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://meok.ai/blog/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
      <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
      >
        𝕏 Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
      >
        LinkedIn
      </a>
      <a
        href={url}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
      >
        Copy link
      </a>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = getRelated(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `https://meok.ai/api/og?title=${encodeURIComponent(post.title)}&desc=${encodeURIComponent(post.excerpt)}`,
    url: `https://meok.ai/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorTitle,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://meok.ai/blog/${post.slug}`,
    },
    about: { "@type": "Thing", name: "Personal Sovereign AI" },
    keywords: "sovereign AI, personal AI, MEOK, AI companion",
  };

  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 50% 60% at 50% 0%, ${post.tagColor}18 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            ←
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ color: post.tagColor, background: `${post.tagColor}18`, border: `1px solid ${post.tagColor}30` }}
            >
              🏷
              {post.tag}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              📅
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              🕐
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: 640 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm">{post.author}</p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">{post.authorTitle}</p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-colors hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About →
          </Link>
        </div>

        {/* Body */}
        <div className="mb-8">
          {post.body}
        </div>

        {/* Share buttons — static links */}
        ⤴

        {/* CTA block */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#1a1a2e" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)" }}
          />
          <div className="relative">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "#c9a84c" }}>
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Ready to experience personal sovereign AI?
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.55)" }}>
              MEOK is the first AI OS built for individual sovereignty. Hatch your AI — it only takes 3 minutes. Free forever. No credit card.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free 🥚
              →
            </Link>
          </div>
        </div>

        {/* Related articles — 90.2 */}
        {related.length > 0 && (
          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] mb-5">Related articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
                >
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                    style={{ color: rel.tagColor, background: `${rel.tagColor}18` }}
                  >
                    {rel.tag}
                  </span>
                  <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {rel.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                    🕐
                    {rel.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
