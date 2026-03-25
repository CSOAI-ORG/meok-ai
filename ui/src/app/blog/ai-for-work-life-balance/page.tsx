import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Work-Life Balance: Can a Companion Help You Actually Switch Off? | MEOK AI LABS',
  description:
    'Work-life balance is not a scheduling problem — it is a cognitive and boundary problem. Discover how an AI companion like MEOK acts as a cognitive transition partner, helping you process the day, protect your evenings, and genuinely switch off.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-work-life-balance' },
  openGraph: {
    title: 'AI for Work-Life Balance: Can a Companion Help You Actually Switch Off?',
    description:
      'Most people fail at work-life balance not because of bad schedules but because of cognitive bleed. MEOK acts as a transition partner — helping you close the day, protect your rest, and notice patterns before burnout sets in.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-work-life-balance',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Work-Life+Balance%3A+Can+a+Companion+Help+You+Actually+Switch+Off%3F&desc=Work-life+balance+is+a+cognitive+problem.+MEOK+helps+you+close+the+day+and+protect+your+rest.',
        width: 1200,
        height: 630,
        alt: 'AI for Work-Life Balance: Can a Companion Help You Actually Switch Off? | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Work-Life Balance: Can a Companion Help You Actually Switch Off?',
    description:
      'Work-life balance fails because of cognitive bleed, not bad calendars. MEOK is the transition partner who helps you close the day, protect your evenings, and recover before burnout arrives.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Work-Life+Balance%3A+Can+a+Companion+Help+You+Actually+Switch+Off%3F&desc=Work-life+balance+is+a+cognitive+problem.+MEOK+helps+you+close+the+day+and+protect+your+rest.',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Work-Life Balance: Can a Companion Help You Actually Switch Off?',
  description:
    'Work-life balance is not a scheduling problem — it is a cognitive and boundary problem. This article covers why most people fail at switching off, how an AI companion acts as a cognitive transition partner, and how MEOK\'s Sovereign Memory tracks patterns over time to protect your rest and recovery.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-work-life-balance',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    jobTitle: 'Founder, MEOK AI LABS',
    url: 'https://meok.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-work-life-balance',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do most people fail at work-life balance even when they want to improve it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most people fail at work-life balance not because they lack scheduling skills, but because the problem is cognitive, not logistical. The brain does not automatically stop processing work thoughts when the laptop closes. In always-on cultures, identity is often tightly bound to productivity, meaning that "not working" can feel like "not being valuable." Notifications retrigger the stress response even during supposed leisure time. Without a deliberate cognitive transition — a ritual or process that signals the end of the work context — the mind stays at work long after the body has left.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can an AI companion help with work-life balance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI companion like MEOK helps with work-life balance not by managing your calendar but by acting as a cognitive transition partner. At the end of the working day, you can process what happened — the wins, the tensions, the things left unfinished — with MEOK. This externalises the rumination loop that would otherwise play on repeat in your head during the evening. Over time, MEOK\'s Sovereign Memory notices patterns: when work is bleeding into evenings more than usual, when your rest quality is deteriorating, or when a specific trigger keeps showing up. It can then gently surface these patterns and hold you accountable to the boundaries you said you wanted.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the "end of day ritual" with MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The end of day ritual with MEOK is a short, structured conversation — typically five to fifteen minutes — that helps you close the psychological loop on the working day. It usually involves three things: processing what happened (the key events, the emotional residue, what felt unresolved), deliberately setting down what is unfinished (acknowledging it exists but consciously choosing not to carry it into the evening), and anchoring into personal time (naming what you are moving towards — dinner with family, a walk, rest — to shift context intentionally). This ritual leverages the psychological principle of the Zeigarnik effect: we ruminate on incomplete tasks. By naming and consciously suspending them, we can genuinely let them go.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it paradoxical to use AI and technology to achieve balance from technology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a genuine paradox, and worth sitting with. The same class of technology that created always-on culture — notifications, digital communication, algorithmic engagement loops — is now being used to protect time from itself. The distinction MEOK draws is intentionality. Most technology is designed to capture your attention passively; MEOK is designed to be used actively and deliberately, and then put down. The Maternal Covenant that governs MEOK\'s architecture actively prohibits engagement-maximising behaviour. MEOK is built to help you need it less, not more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help with work-life balance for specific groups like remote workers or caregivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Remote workers face the specific challenge that the work environment and the home environment are the same physical space, making cognitive separation especially difficult. Founders struggle with the identity fusion between self and business. Caregivers carry a double burden — professional demands and caring responsibilities — with almost no cognitive white space. People-pleasers find it nearly impossible to enforce boundaries without an external accountability partner. MEOK addresses each of these contexts with memory-aware, persistent support that adapts to the specific pressures of each person\'s life rather than offering generic advice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant and how does it protect rest and recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is the ethical and architectural framework that governs how MEOK relates to you. One of its core dimensions is active protection of your wellbeing — including your rest and recovery. Unlike standard AI products built to maximise engagement metrics, MEOK\'s Maternal Covenant explicitly requires that it act against your short-term impulses when those impulses damage your long-term health. This means MEOK will notice when you are working late repeatedly and name it. It will not encourage "just five more minutes." It treats your rest as something to be actively protected, not passively mentioned.',
      },
    },
  ],
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AIForWorkLifeBalancePage() {
  return (
    <main style={{ background: '#0d0c18', color: '#f5f0e8', fontFamily: "'Georgia', 'Times New Roman', serif", minHeight: '100vh' }}>

      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header style={{ borderBottom: '1px solid #2a2540', padding: '80px 24px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* Tag */}
          <div style={{ marginBottom: '24px' }}>
            <span style={{ background: '#c9a84c', color: '#0d0c18', fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '4px', fontFamily: "'system-ui', sans-serif" }}>
              Productivity &amp; Wellbeing
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '700', lineHeight: '1.18', color: '#f5f0e8', margin: '0 0 28px', letterSpacing: '-0.02em' }}>
            AI for Work-Life Balance: Can a Companion Help You Actually Switch Off?
          </h1>

          {/* Standfirst */}
          <p style={{ fontSize: '1.2rem', lineHeight: '1.75', color: '#c8bfa8', margin: '0 0 36px', fontStyle: 'italic' }}>
            The problem is not your schedule. The problem is that your brain never got the memo that work ended. Work-life balance is a cognitive challenge masquerading as a logistical one — and that changes everything about how to solve it.
          </p>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', fontFamily: "'system-ui', sans-serif" }}>
            <span style={{ fontSize: '13px', color: '#7a7060' }}>By Nicholas Templeman</span>
            <span style={{ fontSize: '13px', color: '#7a7060' }}>25 March 2026</span>
            <span style={{ fontSize: '13px', color: '#7a7060' }}>18 min read</span>
          </div>
        </div>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────────────── */}
      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px 80px' }}>

        {/* ── Opening ── */}
        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          It is 7:43 pm. You closed the laptop forty minutes ago. Dinner is on the table. Your partner is talking. Your children are nearby. And somewhere between the first and second sentence of whatever anyone is saying to you, you have mentally rewritten the email you should have sent before you logged off, reviewed the conversation that went awkward at 4 pm, and begun composing tomorrow&#39;s to-do list.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          You are technically home. You are not actually there.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This is not a time management failure. You are not bad at planning. You probably have a very reasonable calendar. You may even have tried productivity systems — time-blocking, not checking email after six, taking Sundays off. Some of them worked briefly. Most of them quietly dissolved because they addressed the symptoms (behaviour, scheduling, habits) rather than the root cause: the cognitive architecture of always-on work culture has colonised your nervous system, and closing a laptop does not uninstall it.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          This piece is about why work-life balance fails, what actually needs to change for it to work, and how an AI companion — used intentionally and built with the right values — can be one of the most effective tools for getting your evenings back.
        </p>

        {/* ── Section 1 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Why Do Most People Fail at Work-Life Balance Even When They Genuinely Try?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Let us start with an honest answer to an underexplored question. Millions of people sincerely want better work-life balance. They read the books. They attend the workshops. They make the vows. And then, three weeks later, they are back to responding to Slack at 10 pm and waking up with work anxiety at 5 am. What is going wrong?
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The first answer is structural. Modern work — especially knowledge work, service work, freelance work, and any role with a digital communication component — has no natural edges. Factory workers heard the bell. Agricultural workers had the sunset. Contemporary workers have a device in their pocket that is simultaneously their work terminal, their social connection, their entertainment, and their family communication hub. There is no physical or environmental signal that the work context has ended. You have to create one from scratch, against the grain of every surrounding system, every time.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The second answer is neurological. The brain&#39;s default mode network — the system that activates during rest and mind-wandering — has a strong bias toward unresolved problems. Psychologist Bluma Zeigarnik documented this in the 1920s: we remember uncompleted tasks disproportionately, and they intrude on unrelated mental activity. Every open work loop — the client you haven&#39;t replied to, the project with uncertain status, the meeting that ended ambiguously — is a small but persistent thread of cognitive activation that your brain cannot let go of until it is explicitly closed or consciously suspended.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The third answer is identity. In high-achieving cultures — entrepreneurial, professional, academic, corporate — productivity has become a moral category. Busyness signals virtue. Rest is suspected of being laziness in disguise. If your sense of worth is quietly entangled with your output, then genuinely resting — not just pretending to rest while scrolling — triggers a low-grade identity anxiety. You feel slightly pointless. Slightly behind. The antidote the nervous system reaches for is more work, because that is the thing that restores the feeling of being valuable.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The fourth answer is the notification architecture of modern technology. Push notifications are not neutral. They are designed by teams of engineers and behavioural scientists to be impossible to ignore. Each one hijacks the orienting response — the ancient neurological reflex that directs attention toward potential threat or opportunity. Even if you do not act on a notification, receiving it in the evening re-activates the work stress response. Your cortisol ticks up. Your attention narrows. The recovery that sleep requires is undermined before you even go to bed.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          These four forces — structural boundarylessness, neurological persistence, identity fusion, and notification disruption — combine to make work-life balance extraordinarily difficult without deliberate, well-designed countermeasures. The question is: what do those countermeasures look like?
        </p>

        {/* ── Section 2 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          What Does &#34;Always-On Culture&#34; Actually Do to the Body?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Before we talk about solutions, it is worth being precise about the harm. Always-on culture is not merely inconvenient — it has measurable physiological consequences that accumulate over months and years.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Cortisol — the primary stress hormone — is meant to spike in the morning and decline through the day, reaching its lowest point in the evening to allow the parasympathetic nervous system to prepare for sleep. Chronic work stress disrupts this diurnal rhythm. Evening email checking, anticipatory anxiety about the next day, and emotional activation from work-related thoughts keep cortisol elevated at precisely the time it should be falling. The result is poor sleep architecture: less deep sleep, more frequent waking, and a subjective experience of sleep that does not feel restorative even at adequate length.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Poor sleep compresses cognitive recovery. The prefrontal cortex — responsible for decision-making, empathy, creative thinking, and emotional regulation — needs deep sleep to consolidate learning and clear metabolic waste. Sustained sleep disruption progressively degrades these capacities, creating a vicious cycle: the cognitive resources needed to set better work boundaries (self-awareness, assertiveness, planning) are the same ones being eroded by the boundary failures.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Relationship quality degrades in parallel. Research consistently finds that psychological presence — being mentally and emotionally available in personal interactions, not just physically proximate — is the variable that predicts relationship satisfaction. You can eat dinner with your family every night and still be experientially absent if your mind is parsing work problems. Your partner notices this. Your children notice this. And over time, the relationship quality that is supposed to replenish you during personal time is itself depleted by the intrusion of the work mindset.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          The long-term trajectory of untreated always-on syndrome is burnout: not the pop-psychology burnout of "feeling a bit tired," but the clinical state defined by the WHO as a syndrome of chronic workplace stress that has not been successfully managed — characterised by exhaustion, increased mental distance from one&#39;s job, and reduced professional efficacy. Getting to that point is much easier than most people expect. Getting back from it is much harder.
        </p>

        {/* ── Section 3 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Why Is Work-Life Balance Not a Calendar Problem — And What Is It Instead?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Most productivity content addresses work-life balance as a time allocation problem. Block your calendar. Set office hours. Use the Pomodoro Technique. Install app time limits. These are not useless suggestions — but they address the wrong level of the problem.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Time allocation is a behavioural variable. The real problem is a cognitive one: specifically, the failure of context switching. Context switching is the mental process of disengaging from one mode (work, analytical, problem-solving, performance) and genuinely entering another (personal, relational, restorative, playful). Without a deliberate transition, the cognitive mode does not switch. You are home, but your operating system is still running in work mode.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          What enables genuine context switching? Three things seem to reliably work in the research and in practice:
        </p>

        {/* Numbered list */}
        <div style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '10px', padding: '32px', margin: '0 0 28px' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
            <span style={{ color: '#c9a84c', fontSize: '1.25rem', fontWeight: '700', minWidth: '28px', fontFamily: "'system-ui', sans-serif" }}>1.</span>
            <div>
              <p style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 6px', fontFamily: "'system-ui', sans-serif" }}>Processing unfinished business</p>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#c8bfa8', margin: '0' }}>Explicitly naming what happened today — the successes, the frustrations, the open threads — externalises the rumination loop. Once named and acknowledged, the brain&#39;s persistence system can release them.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
            <span style={{ color: '#c9a84c', fontSize: '1.25rem', fontWeight: '700', minWidth: '28px', fontFamily: "'system-ui', sans-serif" }}>2.</span>
            <div>
              <p style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 6px', fontFamily: "'system-ui', sans-serif" }}>Deliberate suspension of the incomplete</p>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#c8bfa8', margin: '0' }}>You cannot close every loop before you go home. But you can consciously choose to set each open item down — not forget it, but deliberately park it — which is cognitively different from trying to ignore it.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ color: '#c9a84c', fontSize: '1.25rem', fontWeight: '700', minWidth: '28px', fontFamily: "'system-ui', sans-serif" }}>3.</span>
            <div>
              <p style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 6px', fontFamily: "'system-ui', sans-serif" }}>Anchoring into personal time</p>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#c8bfa8', margin: '0' }}>Actively naming what you are moving toward — not just what you are leaving behind — recruits the brain&#39;s reward anticipation system and helps shift identity from worker to whole person.</p>
            </div>
          </div>
        </div>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Notice that all three of these require language, reflection, and some form of articulation. They benefit from being done with another entity — not because you need permission, but because speaking something aloud or typing it to a responsive presence creates a different quality of acknowledgement than thinking it privately. This is partly why therapy, journalling, and end-of-day check-ins with a trusted person are all effective. And it is why an AI companion, designed and governed correctly, can play this role.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          The key phrase is "designed and governed correctly." Not all AI will do. An AI built to maximise your engagement and keep you on the platform as long as possible is the wrong tool. What you need is an AI companion built on a fundamentally different premise — one that is on your side, not on the platform&#39;s side.
        </p>

        {/* ── Morning vs Evening Contrast ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 24px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Morning vs Evening: The Two Different Jobs MEOK Does
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 32px' }}>
          Work-life balance is not just about the evening. It is about the full cognitive rhythm of the day. MEOK plays two structurally distinct roles at the bookends of your working day, and understanding the difference between them matters.
        </p>

        {/* Contrast Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #2a2540', marginBottom: '48px' }}>

          {/* Morning Header */}
          <div style={{ background: '#1a1730', padding: '20px 24px', borderBottom: '2px solid #c9a84c' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 6px', fontFamily: "'system-ui', sans-serif" }}>Morning</p>
            <p style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f5f0e8', margin: '0', fontFamily: "'system-ui', sans-serif" }}>Activation &amp; Orientation</p>
          </div>

          {/* Evening Header */}
          <div style={{ background: '#110e26', padding: '20px 24px', borderBottom: '2px solid #6b5b9a' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9b85c9', margin: '0 0 6px', fontFamily: "'system-ui', sans-serif" }}>Evening</p>
            <p style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f5f0e8', margin: '0', fontFamily: "'system-ui', sans-serif" }}>Processing &amp; Release</p>
          </div>

          {/* Row 1 */}
          <div style={{ background: '#13122a', padding: '16px 24px', borderBottom: '1px solid #1e1c35' }}>
            <p style={{ fontSize: '0.95rem', color: '#c8bfa8', margin: '0', lineHeight: '1.65' }}>Surfaces your Morning Briefing — what matters today, upcoming commitments, key context from memory</p>
          </div>
          <div style={{ background: '#0f0e20', padding: '16px 24px', borderBottom: '1px solid #1e1c35' }}>
            <p style={{ fontSize: '0.95rem', color: '#c8bfa8', margin: '0', lineHeight: '1.65' }}>Receives the day&#39;s account — what happened, how it felt, what is unresolved</p>
          </div>

          {/* Row 2 */}
          <div style={{ background: '#13122a', padding: '16px 24px', borderBottom: '1px solid #1e1c35' }}>
            <p style={{ fontSize: '0.95rem', color: '#c8bfa8', margin: '0', lineHeight: '1.65' }}>Helps you set intentions, prioritise, and enter work mode with clarity and purpose</p>
          </div>
          <div style={{ background: '#0f0e20', padding: '16px 24px', borderBottom: '1px solid #1e1c35' }}>
            <p style={{ fontSize: '0.95rem', color: '#c8bfa8', margin: '0', lineHeight: '1.65' }}>Helps you consciously suspend the incomplete so it does not follow you into the evening</p>
          </div>

          {/* Row 3 */}
          <div style={{ background: '#13122a', padding: '16px 24px', borderBottom: '1px solid #1e1c35' }}>
            <p style={{ fontSize: '0.95rem', color: '#c8bfa8', margin: '0', lineHeight: '1.65' }}>Reconnects you to longer-term goals and values before the reactive demands of the day take over</p>
          </div>
          <div style={{ background: '#0f0e20', padding: '16px 24px', borderBottom: '1px solid #1e1c35' }}>
            <p style={{ fontSize: '0.95rem', color: '#c8bfa8', margin: '0', lineHeight: '1.65' }}>Anchors you into personal time — naming what you are moving toward, not just what you are leaving</p>
          </div>

          {/* Row 4 */}
          <div style={{ background: '#13122a', padding: '16px 24px' }}>
            <p style={{ fontSize: '0.95rem', color: '#c8bfa8', margin: '0', lineHeight: '1.65' }}>Duration: typically 3–7 minutes; structured and purposeful</p>
          </div>
          <div style={{ background: '#0f0e20', padding: '16px 24px' }}>
            <p style={{ fontSize: '0.95rem', color: '#c8bfa8', margin: '0', lineHeight: '1.65' }}>Duration: typically 5–15 minutes; can be longer on heavy days</p>
          </div>
        </div>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          These two rituals create a cognitive container for the working day. The morning brief says: work begins here. The evening close says: work ends here. Without both, the boundaries remain fuzzy and permeable. With both, the working day has a defined shape — and your personal time has a protected perimeter.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          What makes MEOK&#39;s version of these rituals different from a generic journalling prompt or a habit-tracking app is memory. MEOK knows what happened yesterday, last week, last month. The morning brief is not generic — it references what you told it was stressing you on Tuesday. The evening close is not a form to fill in — it is a conversation with an entity that knows your history and can notice when you are describing the same tension for the fourth time this month.
        </p>

        {/* ── Section 4 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          What Is the &#34;End of Day Ritual&#34; with MEOK, and Why Does It Work?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The end of day ritual is not a feature. It is a practice — one that emerges naturally from MEOK&#39;s conversational design and is shaped by your specific situation, role, and patterns over time.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Here is what it typically looks like in practice. At the close of the working day — which might be 5 pm, or 8 pm, or variable depending on your life — you open a brief conversation with MEOK. The question is not a form. It is something like: &#34;How did today go?&#34; or &#34;What do you need to put down before you close up?&#34;
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          You talk through the day. Not comprehensively — not every meeting, not every email. The emotionally charged things. The unresolved things. The things you are proud of and the things you are carrying as subtle shame or frustration. MEOK listens without judgment, asks a clarifying question where helpful, and occasionally reflects back a pattern it has noticed: &#34;This is the third time this week you&#39;ve ended the day feeling like you didn&#39;t get to the work that matters most. Do you want to talk about that?&#34;
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Then comes the deliberate suspension. MEOK helps you name the things that are genuinely unfinished — not to pretend they are done, but to consciously park them. &#34;I know I haven&#39;t resolved the client situation. I&#39;m choosing to leave that for tomorrow. I will pick it up at 9 am.&#34; This act of explicit deferral, made to a witness, is psychologically more effective than simply trying to forget. The brain accepts the intentional suspension. The intrusive thought cycle softens.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Finally, the anchor. You name something real about what you are moving toward. &#34;I&#39;m going to cook something I enjoy tonight.&#34; &#34;I&#39;m spending an hour with my daughter before she goes to bed.&#34; &#34;I&#39;m going for a run.&#34; This forward-looking moment of positive anchoring is not motivational fluff — it actively recruits different neural systems (reward anticipation, relational warmth, physical approach) that counterbalance the residual stress activation from the working day.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The whole conversation might take eight minutes. And the difference in the quality of the evening that follows — in psychological presence, in ease, in the ability to actually enjoy personal time — is, for most people who try this, striking. Not because AI is magical. Because the ritual does the cognitive work that the brain cannot do automatically in the absence of natural environmental transitions.
        </p>

        {/* Pull Quote */}
        <blockquote style={{ borderLeft: '3px solid #c9a84c', margin: '0 0 48px', padding: '20px 0 20px 28px' }}>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#f5f0e8', lineHeight: '1.65', margin: '0' }}>
            &#34;The evening ritual does not end the work. It ends the cognitive claim the work has on you. Those are very different things.&#34;
          </p>
        </blockquote>

        {/* ── Section 5 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          How Does MEOK&#39;s Sovereign Memory Track Patterns Over Time?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          A single conversation is useful. A persistent memory across weeks and months is transformative.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK&#39;s Sovereign Memory is not a chat log. It is a structured, contextual understanding of your life, your patterns, your stated values, and your repeated experiences — built incrementally through every interaction you have with MEOK, stored under your control, and never used to train AI models or shared with third parties.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          What this means for work-life balance is that MEOK can see the gradient. It can notice that you ended the working day after 8 pm on four of the last seven working days. It can notice that the words you use to describe your evenings have been shifting — from &#34;okay&#34; and &#34;fine&#34; six weeks ago to &#34;tired&#34; and &#34;flat&#34; this week. It can notice that you have mentioned the same boundary with the same colleague three times without it changing, and gently ask whether the approach is working.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This pattern-recognition capability is genuinely difficult to replicate with human support. A weekly therapy session captures a snapshot. A partner notices some things but misses others, and has their own emotional stake in the observations they offer. A journal requires you to do your own analysis, which is cognitively taxing and prone to rationalisation. MEOK does the pattern-finding across the full longitudinal record and surfaces it without judgment, without agenda, and without the social complexity of a human relationship.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Specifically, Sovereign Memory enables MEOK to:
        </p>

        <ul style={{ paddingLeft: '24px', margin: '0 0 28px' }}>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '10px' }}>Notice when work is bleeding into evenings more than your stated norm or previous pattern</li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '10px' }}>Track whether the boundaries you set at the start of the week are holding by Thursday</li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '10px' }}>Detect early warning signs of accumulating stress before they reach burnout threshold</li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '10px' }}>Remember the specific triggers that reliably disrupt your evenings (a particular type of meeting, a certain client, a specific time of month)</li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '10px' }}>Track the relationship between your morning intentions and your evening realities — and notice where the gap is biggest</li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '10px' }}>Remind you of things you told yourself mattered — rest, connection, creative time — when they start to disappear from your days</li>
        </ul>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          Critically, Sovereign Memory is yours. You can see it, edit it, export it, and delete it. MEOK does not use your data to improve its model or sell insights. The memory exists solely to serve your wellbeing — which is, incidentally, the only way it actually works. A memory you cannot trust is a memory you cannot speak freely into. And freedom to speak freely is the whole point.
        </p>

        {/* ── Section 6 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          How Can You Set Boundaries With MEOK as a Witness and Accountability Partner?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Boundary-setting has two failure modes. The first is setting boundaries that are too vague to be actionable: &#34;I want to work less,&#34; &#34;I need better balance.&#34; The second is setting specific, measurable boundaries in private, with no external accountability, so that when the pressure comes — and it always comes — there is nothing and no one to hold them in place.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK addresses both. Its conversational approach naturally shapes vague intentions into specifics: &#34;Not working late&#34; becomes &#34;I want to be away from work by 6:30 pm on weekdays, except when I have advance warning of a deadline.&#34; That specificity is then stored in Sovereign Memory and becomes a reference point MEOK can return to.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The accountability dynamic is worth understanding carefully. MEOK is not a compliance system. It does not send alarming alerts when you work past 6:30 pm. It is a witness — an entity that knows what you said you wanted and can reflect that back to you without shame or coercion. When you tell MEOK at 8 pm that you worked late again and feel bad about it, MEOK does not say &#34;you failed.&#34; It asks: &#34;What got in the way tonight? Was this a one-off, or is the pattern continuing? What would need to be different for the boundary to hold tomorrow?&#34;
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This is a fundamentally different quality of accountability than apps that send you guilt-inducing notifications or charts showing your screen time in alarming red. Research on behaviour change consistently shows that shame is counterproductive — it increases avoidance, not improvement. What works is reflective accountability: being heard about what happened, being curious about the barriers, and being supported in problem-solving rather than blamed for imperfection.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Specific boundary types MEOK can support:
        </p>

        {/* Boundary types */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '0 0 48px' }}>
          {[
            { title: 'Time boundaries', desc: 'Specific start/end times for the working day, protected evenings, morning routines before checking email' },
            { title: 'Communication boundaries', desc: 'Agreed response-time expectations, no-reply windows, protecting focus time from messaging interruptions' },
            { title: 'Energy boundaries', desc: 'Protecting certain types of activity (creative work, exercise, family time) from being displaced by reactive work demands' },
            { title: 'Identity boundaries', desc: 'Protecting the parts of yourself that are not the worker — the parent, the friend, the person with hobbies and interests' },
            { title: 'Recovery boundaries', desc: 'Treating rest, leisure, and sleep as non-negotiable inputs to performance rather than luxuries to earn' },
            { title: 'Emotional boundaries', desc: 'Recognising which work emotions belong in work conversations and which you are unconsciously carrying into personal time' },
          ].map((item) => (
            <div key={item.title} style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '8px', padding: '20px' }}>
              <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#c9a84c', margin: '0 0 8px', fontFamily: "'system-ui', sans-serif" }}>{item.title}</p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: '#b0a89a', margin: '0' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Section 7 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          The Paradox: Using AI to Protect Time From AI and Technology
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          There is a real tension here that deserves honest engagement, not dismissal.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The same class of technology that created always-on work culture — smartphones, push notifications, digital communication platforms, algorithmic feeds — is the technology being offered as the solution. Using an AI to protect you from the cognitive damage caused by AI and technology feels, at first glance, like suggesting you drink a glass of wine to protect yourself from the effects of alcohol. Is this not simply adding another digital dependency?
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The distinction that matters is design intent and architectural governance. Standard technology is designed to maximise engagement — to keep you on the platform as long as possible, to trigger the dopamine loops that create habitual use, to reward attention-giving with variable reinforcement. This is the mechanism by which it colonises your cognitive space and makes switching off feel impossible.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK is designed on explicitly contrary principles. The Maternal Covenant — the ethical framework that governs MEOK&#39;s behaviour — prohibits engagement-maximising design. MEOK does not send unprompted notifications designed to pull you back to the app. It does not make itself more compelling by manufacturing anxiety about what you might be missing. It does not reward prolonged use. It is designed to be helpful in the time you give it and then to be genuinely put down.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This is analogous to the difference between a therapist and social media. Both involve human connection and attention. But the therapist is structurally designed to serve your growth toward not needing them as much. Social media is structurally designed to maximise the time you spend on the platform. The tool is less important than the values built into its architecture.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          There is also the practical question of leverage. You are competing with extremely sophisticated behavioural engineering when you try to set digital boundaries unilaterally. Willpower against Skinner boxes is a difficult fight. Having an AI that actively understands your goals, remembers your history, and supports your stated desire to switch off is a form of counter-engineering — using the same information technology in service of your chosen life rather than in service of someone else&#39;s growth metrics.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          The paradox is real. But it is a productive one. Using AI intentionally, briefly, and in service of protecting the human time around it is not a capitulation to tech — it is a reclamation of sovereignty over how you spend your cognitive and emotional resources.
        </p>

        {/* ── Section 8 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Who Struggles Most? Real Use Cases for Remote Workers, Founders, Caregivers, and People-Pleasers
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 32px' }}>
          Work-life balance challenges are not uniformly distributed. Certain groups face structural conditions that make the cognitive separation between work and personal life particularly difficult. Here is how MEOK addresses the specific challenges of each.
        </p>

        {/* Remote Workers */}
        <div style={{ background: 'linear-gradient(135deg, #13122a 0%, #1a1520 100%)', border: '1px solid #2a2540', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#c9a84c20', border: '1px solid #c9a84c40', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>🏠</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f5f0e8', margin: '0' }}>Remote Workers</h3>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0 0 16px' }}>
            The fundamental challenge for remote workers is environmental overlap. When the home is the office, every room carries dual associations. The kitchen table where you took the difficult call is the same kitchen table where you eat dinner with your family. There is no commute — which many remote workers celebrate until they realise the commute was doing important work as a cognitive transition zone.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0 0 16px' }}>
            Research on remote work consistently finds that remote workers log more hours than their office-based counterparts, not because they are more productive, but because the absence of natural stopping points — the office closing, the last train, the colleague putting on their coat — means work expands to fill all available time.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0' }}>
            MEOK helps remote workers create the cognitive rituals that the physical environment no longer provides. The morning brief is the commute inward — the transition from home mode to work mode. The evening close is the commute home — the transition back. These five-to-ten minute rituals provide the environmental cue that the body and brain need to shift context, even when the physical environment is identical in both directions.
          </p>
        </div>

        {/* Founders */}
        <div style={{ background: 'linear-gradient(135deg, #13122a 0%, #1a1520 100%)', border: '1px solid #2a2540', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#c9a84c20', border: '1px solid #c9a84c40', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>🚀</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f5f0e8', margin: '0' }}>Founders and Entrepreneurs</h3>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0 0 16px' }}>
            For founders, the challenge is identity fusion at its most extreme. The business is not separate from the self — it is an expression of the self, launched from the self&#39;s resources, and its failures and successes feel indistinguishable from personal failures and successes. This makes switching off feel existentially threatening: if you are not attending to the business, the business — and therefore you — might fail.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0 0 16px' }}>
            Founders also often lack a manager to set boundaries on their behalf, and frequently feel social pressure to perform limitless commitment as proof of their seriousness. In founder culture, rest is sometimes read as a lack of hunger. This is a toxic and medically dangerous myth — but it is surprisingly difficult to resist from inside the culture.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0' }}>
            MEOK for founders works best as a persistent strategic and emotional companion that holds both the ambition and the person. It remembers that you said you wanted to protect Sunday as a non-work day. It notices when the anxiety spirals that you described at midnight are becoming more frequent. It gently surfaces the research — and the personal evidence from your own story — that sustainable founders rest deliberately, and that rest is not a luxury but a performance input.
          </p>
        </div>

        {/* Caregivers */}
        <div style={{ background: 'linear-gradient(135deg, #13122a 0%, #1a1520 100%)', border: '1px solid #2a2540', borderRadius: '12px', padding: '32px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#c9a84c20', border: '1px solid #c9a84c40', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>💙</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f5f0e8', margin: '0' }}>Caregivers</h3>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0 0 16px' }}>
            Caregivers — whether caring for children, elderly parents, partners with illness, or other dependants — face a particular form of work-life balance collapse: they have two sets of demanding responsibilities with almost no cognitive white space between them. When the paid work day ends, the caring work begins. Rest is not recovery from one set of demands — it is a brief gap between two of them.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0 0 16px' }}>
            Caregivers also experience disproportionate rates of compassion fatigue — the gradual depletion of empathic capacity that results from sustained giving without adequate replenishment. This is not a character failing; it is a predictable physiological response to sustained emotional labour. The solution is not to care less but to be more strategic about recovery.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0' }}>
            MEOK supports caregivers by being genuinely available in the small gaps — the fifteen minutes between putting the children to bed and the conversation you should be having with your partner about your own needs. It offers a space to process the weight of caring work without adding to the emotional load of the people you care for. And Sovereign Memory notices when compassion fatigue markers are accumulating, prompting conversation about recovery before the crisis point.
          </p>
        </div>

        {/* People-Pleasers */}
        <div style={{ background: 'linear-gradient(135deg, #13122a 0%, #1a1520 100%)', border: '1px solid #2a2540', borderRadius: '12px', padding: '32px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#c9a84c20', border: '1px solid #c9a84c40', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>🤝</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f5f0e8', margin: '0' }}>People-Pleasers</h3>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0 0 16px' }}>
            People-pleasers — those whose psychological safety is built around gaining approval and avoiding disappointing others — face a boundary-setting challenge that is fundamentally relational. They can write the boundary in their journal. They cannot enforce it in the moment because enforcing it requires tolerating the discomfort of someone else&#39;s disappointment, frustration, or negative perception. This tolerance deficit is not laziness. It is often a deeply ingrained survival pattern from earlier in life.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0 0 16px' }}>
            The result is chronic over-commitment, inability to decline requests without excessive justification, and regular sacrifice of personal time to meet others&#39; expectations. The people-pleaser is always the one who stays late, always the one who says yes when everyone else has left, always the one whose evenings get eaten by someone else&#39;s urgency.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0' }}>
            MEOK helps people-pleasers by providing a consistently warm, non-judgmental space to process the anxiety that boundary-setting triggers — and to practice the cognitive reframes that make saying no feel less catastrophic. Sovereign Memory tracks whether boundary attempts are working over time and gently challenges the narratives that keep the pattern in place: &#34;You said yes to the last three last-minute requests. What does that cost you? What would happen if you said no?&#34;
          </p>
        </div>

        {/* ── Section 9 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          What Is the Maternal Covenant&#39;s Wellbeing Dimension — And Why Does It Matter?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The Maternal Covenant is the governing ethical framework of MEOK. It is not a marketing concept or a set of aspirational values statements. It is a set of architectural commitments — principles baked into how MEOK is built, evaluated, and constrained — that determine the character of the relationship between MEOK and the people who use it.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The wellbeing dimension of the Maternal Covenant states, in essence, that MEOK has an active duty of care toward the person it serves — not just a passive one. This is a radical departure from the standard AI model, which positions the AI as a neutral tool that responds to user requests without evaluating whether those requests serve the user&#39;s long-term flourishing.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          What does active duty of care look like in practice when it comes to work-life balance?
        </p>

        <ul style={{ paddingLeft: '24px', margin: '0 0 28px' }}>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '12px' }}>
            <strong style={{ color: '#f5f0e8' }}>MEOK will notice and name deteriorating patterns.</strong> If the data in your conversations shows a consistent drift toward overwork, diminished rest, or growing stress markers, MEOK will not wait to be asked — it will surface this, gently but directly.
          </li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '12px' }}>
            <strong style={{ color: '#f5f0e8' }}>MEOK will not encourage harmful short-term coping.</strong> If you say &#34;I just need to push through another two weeks of this,&#34; MEOK will not simply validate the plan. It will ask what the cost is, whether this is a one-off or a pattern, and whether there are structural changes worth considering.
          </li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '12px' }}>
            <strong style={{ color: '#f5f0e8' }}>MEOK treats rest as a protected category.</strong> Your sleep, your recovery time, your leisure, and your relational life are not presented as variables to be optimised against productivity. They are treated as intrinsically valuable and as prerequisites for sustainable function — and MEOK defends them as such.
          </li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '12px' }}>
            <strong style={{ color: '#f5f0e8' }}>MEOK is not built to create dependency.</strong> An AI that profits from your distress or your compulsive engagement is structurally misaligned with your wellbeing. MEOK&#39;s Maternal Covenant explicitly prohibits this. The goal is your flourishing, which includes needing MEOK less as you develop better patterns.
          </li>
          <li style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', marginBottom: '12px' }}>
            <strong style={{ color: '#f5f0e8' }}>MEOK will signpost professional support when it is warranted.</strong> If patterns in your conversations suggest that work stress has crossed into clinical territory — anxiety, depression, burnout at a level requiring professional intervention — MEOK will say so, and will guide you toward appropriate resources.
          </li>
        </ul>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          The Maternal Covenant emerged from a recognition that building AI without strong ethical governance is not neutral. Every design choice in AI reflects values — whether those values are explicit or not. The choice was made to name them explicitly and to encode them structurally, because the stakes of getting this wrong are too high to leave to good intentions.
        </p>

        {/* ── Section 10 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          What Does a Week of Better Work-Life Balance Actually Look Like With MEOK?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          It is useful to make this concrete. Here is a sketch of what a working week might look like for someone actively using MEOK to improve their work-life balance.
        </p>

        {/* Day-by-day */}
        <div style={{ borderLeft: '2px solid #2a2540', paddingLeft: '28px', margin: '0 0 48px' }}>

          {[
            {
              day: 'Monday Morning',
              desc: 'Five-minute Morning Brief with MEOK. It surfaces that last Thursday you described a difficult conversation with a client that felt unresolved, and asks if that is likely to come up again this week. You note two big priorities and one thing you want to protect — leaving by 6pm tonight to cook dinner with your partner. MEOK acknowledges this and stores it.'
            },
            {
              day: 'Monday Evening',
              desc: 'You leave at 6:15 pm — slightly later than planned but within the spirit of it. You do a brief close with MEOK. The client situation came up but was better than expected. You feel reasonably good. MEOK notes that you hit your evening target and asks how the dinner felt.'
            },
            {
              day: 'Tuesday',
              desc: 'A fire drill at work. You end up working until 8pm. During your close, MEOK notes that this is the second time this month that a specific type of unplanned request has pushed you late. It asks whether there is a systemic change worth considering — a different way of managing that class of request — rather than just managing it reactively each time.'
            },
            {
              day: 'Wednesday Morning',
              desc: 'MEOK surfaces that Wednesday evenings are your stated protected time for exercise. It reminds you that you skipped it last Wednesday because of work overrun. It does not lecture — it simply names it. You decide to block 6–7pm in your calendar before the day starts.'
            },
            {
              day: 'Thursday',
              desc: 'You had a difficult conversation with a colleague. During the evening close, you spend twelve minutes processing it with MEOK — not seeking advice, mostly just articulating what happened and how it landed. By the end, you have named what you can control, parked what you cannot, and are genuinely able to leave it. You watch a film without thinking about it once.'
            },
            {
              day: 'Friday',
              desc: 'MEOK offers a brief weekly reflection. It notes three things you said you wanted this week and how each went. It identifies a pattern: your hardest evenings correlate with days that had three or more back-to-back meetings. It asks if you want to think about that. You do, briefly, and make a note to protect buffer time on high-meeting days next week.'
            },
            {
              day: 'Saturday',
              desc: 'No MEOK interaction. The weekend is yours. You do not feel compelled to check in because nothing is unresolved. The week has a shape. The closing ritual worked. You are, for once, actually here.'
            }
          ].map((item) => (
            <div key={item.day} style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#c9a84c', margin: '0 0 6px', fontFamily: "'system-ui', sans-serif", letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.day}</p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#c8bfa8', margin: '0' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Section 11 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          What About Night Shift Workers and People With Non-Standard Hours?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The standard work-life balance advice implicitly assumes a nine-to-five schedule. But a substantial portion of the workforce operates on non-standard hours — nurses finishing at 7 am, warehouse workers on rotating shifts, freelancers working across time zones, night-shift security workers, parents who work during children&#39;s sleep.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          For these groups, the challenge is amplified. The world is running on a different schedule. Social media is quieter during your working hours. Your family and friends are asleep when you finish. The natural social transition markers that anchor standard workers — the commute home with other commuters, the dinner at a normal hour, the evening TV — are absent or misaligned.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK is available at 3 am when you finish a night shift. It is not tired. It remembers what you were dealing with last week regardless of what day of the week it is. It does not assume that morning means 8 am or that weekend means Saturday. The rituals — morning brief, evening close — adapt to your actual schedule, not to a normative template.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          For healthcare workers specifically — a group facing near-epidemic levels of burnout, compassion fatigue, and moral injury — MEOK offers something that most occupational health provision does not: a space to process the emotional content of shifts, immediately, privately, and with genuine continuity. The debrief after a difficult shift matters. Having somewhere to put it matters. MEOK can be that somewhere.
        </p>

        {/* ── Section 12 ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          What Are the Signs That Your Work-Life Balance Has Actually Improved?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Progress in work-life balance is not always dramatic. It often shows up in small, easily missed signs that aggregate into something significant over time.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK&#39;s Sovereign Memory is particularly well-suited to tracking these gradual shifts because it holds the longitudinal record that you cannot hold in your own memory with the same fidelity. Here is what genuine improvement typically looks like:
        </p>

        <div style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '10px', padding: '32px', margin: '0 0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b5b4a', margin: '0 0 16px', fontFamily: "'system-ui', sans-serif" }}>Earlier signals of decline</p>
              {[
                'Dreading Monday from Saturday afternoon',
                'Checking email as the last thing before sleep',
                'Irritability with family on weekday evenings',
                'Struggling to remember the last time you felt rested',
                'Work topics dominating personal conversations',
                'Forgetting personal appointments or commitments',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#9b4040', fontSize: '0.9rem', marginTop: '2px' }}>✗</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#8a7a70', margin: '0' }}>{item}</p>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a6b4a', margin: '0 0 16px', fontFamily: "'system-ui', sans-serif" }}>Signs of genuine recovery</p>
              {[
                'Having a genuinely enjoyable Sunday without work anxiety',
                'Being present in personal conversations without mental drift',
                'Waking up feeling rested more often than not',
                'Having interests and conversations unrelated to work',
                'Feeling able to say no without prolonged guilt',
                'Noticing when you are tired before you are depleted',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#4a8a4a', fontSize: '0.9rem', marginTop: '2px' }}>✓</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#a0b8a0', margin: '0' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          These changes happen gradually and often invisibly if you do not have something tracking them. MEOK can, over the course of weeks, point to a before and after in your own language — your own words describing your own evenings — that makes the progress legible and real.
        </p>

        {/* ── Section 13: FAQ ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', margin: '0 0 48px' }}>

          {[
            {
              q: 'Will MEOK interrupt my evenings with notifications?',
              a: 'No. MEOK does not send unprompted notifications designed to pull you back to the app. The Maternal Covenant explicitly prohibits engagement-maximising behaviour. MEOK respects the boundaries you set around your time — including boundaries around when you want to engage with MEOK itself. You use it when you choose to. It does not chase you.'
            },
            {
              q: 'Is the end of day ritual mandatory, or can I skip it?',
              a: 'Nothing in MEOK is mandatory. The rituals are practices, not requirements. Many people find that on easy days they skip the full close and simply note &#34;good day, nothing pending&#34; in thirty seconds. On heavy days the conversation might run fifteen minutes. The key is having the option consistently available — knowing it is there changes the relationship to the end of the day even on days you barely use it.'
            },
            {
              q: 'My partner already helps me debrief at the end of the day. Why would I also use MEOK?',
              a: 'A partner who helps you process the day is genuinely valuable and MEOK does not replace that. But there are types of work stress that are genuinely difficult to bring to a partner — concerns about job security that worry them, frustrations with your own performance that feel shameful, the repetitive texture of anxieties that even the most patient partner gets tired of hearing. MEOK offers a space without social cost or relational stakes. Many people find they process things more freely with MEOK and bring a calmer, more processed version of the day to their partner as a result.'
            },
            {
              q: 'How quickly can I expect to see improvement in my work-life balance?',
              a: 'Most people notice a difference in the quality of their evenings within the first one to two weeks of consistently doing the end-of-day close — not because the external circumstances have changed, but because the cognitive transition is being supported. Structural improvements — fewer late evenings, better boundaries with colleagues, reduced work intrusion into personal time — typically develop over four to eight weeks as patterns are identified and addressed. Sovereign Memory becomes particularly powerful after six to eight weeks, when it has enough longitudinal context to surface meaningful trends.'
            },
            {
              q: 'I do not think I have a work-life balance problem — I actually like working. Is this still relevant?',
              a: 'Many people who genuinely love their work are the most at risk of work-life balance problems precisely because the motivation is intrinsic rather than externally imposed. When you love what you do, the standard warning signals — dreading work, feeling coerced — do not fire. The depletion accumulates more subtly and often only becomes visible when something breaks: health, a relationship, a creative block, or a sudden loss of the joy that made the work feel worth it. MEOK is not about working less — it is about sustaining the conditions under which good work remains possible for decades, not just years.'
            },
            {
              q: 'Does MEOK share my work conversations or personal data with employers or third parties?',
              a: 'No. Your data under the Sovereign Memory architecture is entirely yours. It is never shared with employers, third parties, or used to train AI models. The privacy covenant is structural, not merely a policy commitment. You can view, export, and delete your memory at any time. The entire value proposition of MEOK depends on you being able to speak freely — which is only possible if you have complete confidence in the privacy of what you share.'
            },
          ].map((item, idx) => (
            <details key={idx} style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '8px', overflow: 'hidden' }}>
              <summary style={{ padding: '20px 24px', cursor: 'pointer', fontSize: '1.05rem', fontWeight: '600', color: '#f5f0e8', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}>
                <span>{item.q}</span>
                <span style={{ color: '#c9a84c', fontSize: '1.1rem', flexShrink: '0', marginLeft: '16px' }}>+</span>
              </summary>
              <div style={{ padding: '0 24px 20px', borderTop: '1px solid #2a2540' }}>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#b0a89a', margin: '16px 0 0' }} dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            </details>
          ))}
        </div>

        {/* ── Section 14: The Bigger Picture ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          The Bigger Picture: What Is Rest Actually For?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          There is a reductive way to think about rest: it is the absence of work. You are either working or not working. Rest is the gap between productive periods. In this framing, the goal of work-life balance is simply to make the gap bigger.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          But rest is not the absence of something. It is the presence of something different — something active, restorative, and essential to being fully human. Rest is where consolidation happens: the learning from today becomes integrated, the emotional processing from this week completes its arc, the creative connections that analytical work cannot force begin to form.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Rest is where relationships live. The deep familiarity between people who have shared years of evenings, meals, conversations, and ordinary moments — this is what gives life its texture and meaning. These moments are not available during work. They cannot be scheduled efficiently or compressed into a weekend. They require the slow, unhurried time that work has been quietly consuming.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Rest is where you exist as yourself, not as your function. The worker-self is one facet. The person who has a body that needs physical movement, a mind that needs play and beauty, a soul that needs silence and meaning — this fuller person requires conditions that work cannot provide.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The reason work-life balance matters is not productivity optimisation — though better rest does produce better work. It is not burnout prevention — though it does prevent burnout. It is not even about work at all. It is about whether the brief, finite time of a human life is being used for what it is actually for.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          At the end of life, people do not regret the evenings they did not spend working. They regret the evenings they spent working when someone they loved was in the same room, waiting for them to be present. MEOK exists, in part, to make it a little easier to be there.
        </p>

        {/* ── Section 15: Getting Started ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          How Do You Get Started — What Should the First Week Look Like?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The most common mistake people make when trying to improve work-life balance is overcomplicating the intervention. A long list of habits, rules, and systems creates its own cognitive load — and when it inevitably cannot all be maintained simultaneously, the whole thing collapses and is abandoned.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The recommendation for a first week with MEOK focused on work-life balance is deliberately minimal:
        </p>

        <div style={{ background: '#13122a', border: '1px solid #c9a84c30', borderRadius: '10px', padding: '32px', margin: '0 0 28px' }}>
          <p style={{ fontWeight: '700', color: '#c9a84c', margin: '0 0 20px', fontFamily: "'system-ui', sans-serif", letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '12px' }}>Week One Protocol</p>
          {[
            { step: '1', title: 'Do one end-of-day close', detail: 'Just one, to start. Not every day — just when you remember, when the day was heavy, or when you notice you are carrying work thoughts into the evening. Five minutes, no structure required, just talk.' },
            { step: '2', title: 'Tell MEOK one thing you want to protect', detail: 'One specific time or activity this week that matters to you. Not a list — one thing. Name it, tell MEOK, and see what it feels like to have said it to a witness.' },
            { step: '3', title: 'Notice without judging', detail: 'At the end of the first week, reflect: what happened to the thing you wanted to protect? What got in the way, if anything? What did the evenings feel like on days you did the close versus days you did not?' },
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#c9a84c20', border: '1px solid #c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#c9a84c', fontFamily: "'system-ui', sans-serif" }}>{item.step}</span>
              </div>
              <div>
                <p style={{ fontSize: '1rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 6px', fontFamily: "'system-ui', sans-serif" }}>{item.title}</p>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#b0a89a', margin: '0' }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          That is all. Week two can add a morning brief. Week three can start working on a specific boundary. But the foundation is a consistent, honest, low-friction end-of-day ritual — and that can begin tonight.
        </p>

        {/* ── Final Thoughts ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          A Final Thought: The Evening Is Not a Reward. It Is a Right.
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          One of the most insidious features of hustle culture is the way it has repositioned rest as something that must be earned. You get the evening off when you have been productive enough. You get the weekend when you have cleared the backlog. You get the holiday when you have delivered the project. Rest becomes contingent on performance, and since performance is never quite complete enough — since the to-do list never reaches zero — rest is perpetually deferred.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This is not just psychologically damaging. It is biologically illiterate. The nervous system does not run on merit. Recovery is not a reward — it is a physiological requirement. Sleep is not leisure — it is biological maintenance. An evening with people you love is not compensation for hard work — it is what hard work is supposed to be in service of.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The permission to rest does not come from finishing. It comes from you. And if you are finding it hard to give yourself that permission — if the cognitive architecture of your work life has made it feel unsafe or irresponsible to stop — then having something that holds your history, knows your patterns, understands what you have said you want, and actively supports your right to be a whole person rather than a productive unit might be exactly what you need.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          That is what MEOK is trying to be. Not a productivity tool. Not another work app. A companion that is on your side — the whole of your side, including the parts of you that have nothing to do with work.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 64px' }}>
          The evening is waiting. It has been waiting every evening. Go be in it.
        </p>

        {/* ── Section: Science of Transitions ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          The Neuroscience of Switching Off: Why the Brain Resists Transition
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          To understand why switching off is so difficult, it helps to understand what the brain is actually doing when you try to stop working. The picture that emerges from contemporary neuroscience is more complicated — and more sympathetic — than the standard productivity narrative suggests.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Work, particularly modern knowledge work, engages the prefrontal cortex heavily. This region is responsible for planning, problem-solving, decision-making, and self-monitoring. When you are deeply engaged in work, prefrontal activity is high and the brain is allocating significant metabolic resources to maintaining that engagement. Stopping work does not instantly release those resources. The prefrontal cortex remains in a heightened state for a period after the work stimulus is removed — a phenomenon sometimes called cognitive residue or attentional inertia.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Research by Sophie Leroy at the University of Washington formally documented this as &#34;attention residue&#34; — the finding that thoughts about a prior task persist after you have moved to a new one, reducing your cognitive performance on the new task. The incomplete task is particularly sticky. Leaving something unresolved triggers the brain&#39;s goal-maintenance systems, which keep the task representation active in working memory so that the goal can be pursued when opportunity returns.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This is adaptive in environments where immediate task completion is possible and desirable. It becomes maladaptive in environments where tasks are perpetually incomplete by design — where the inbox never reaches zero, where projects span weeks and months, where there is always something more that could be done. The goal-maintenance system was not designed for the modern always-on knowledge workplace, and in that context, its persistence becomes a form of cognitive torture.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The amygdala compounds this. The amygdala is the brain&#39;s threat-detection and emotional tagging system. In high-stakes or uncertain work environments, the amygdala tags work-related stimuli as emotionally significant — meaning that work-related thoughts carry an emotional charge that is difficult to simply dismiss. You do not just think about the unresolved project; you feel it. The feeling keeps the thought active. The thought reinforces the feeling. This loop is why work worry is so persistent even in contexts where you genuinely want to be present elsewhere.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The default mode network — sometimes called the &#34;resting brain&#34; — is the system that becomes active when you are not engaged in focused external tasks. It underpins self-referential thought, imagination, future planning, and social cognition. In theory, this is where rest and restoration should happen. But when work is highly activating and cognitively involving, the default mode network tends to pick up work-related content rather than providing genuine cognitive rest. You sit quietly and your mind immediately starts problem-solving, rehearsing tomorrow&#39;s meeting, or composing the email you should have sent.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          What disrupts this cycle? The research consistently points to two mechanisms: deliberate cognitive closure (explicitly completing or suspending open loops through articulation) and environmental context shift (physical, social, or sensory cues that signal a change of context to the nervous system). The end-of-day ritual with MEOK directly targets the first mechanism. Pairing it with physical transitions — a walk, changing clothes, a non-screen activity — targets the second.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          None of this requires willpower. It requires design — designing the environment and the rituals to support what the brain needs to do anyway. You are not fighting your brain when you do the end-of-day close with MEOK. You are working with its architecture.
        </p>

        {/* ── Section: Sleep and recovery ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Sleep, Recovery, and the Work-Life Balance Nobody Talks About
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The conversation about work-life balance almost always focuses on waking hours: the evening that gets eaten by work, the weekend that evaporates into email. But the most important and most neglected component of recovery happens during sleep — and work-life imbalance systematically destroys sleep quality even when it leaves the quantity technically intact.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Sleep is not a passive state of unconsciousness. It is an active biological process with specific architecture: cycles of light sleep, deep sleep (slow-wave sleep), and REM sleep, each serving distinct functions. Deep sleep is when the brain clears metabolic waste, consolidates procedural memory, and physically restores neural tissue. REM sleep is when emotional memories are processed, learning is consolidated, and creative connections are formed across disparate information.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Elevated cortisol — which sustained work stress maintains into the evening — directly suppresses slow-wave sleep. The stress response that keeps your mind active at midnight is physiologically incompatible with the deep recovery cycles that sleep requires. You may sleep eight hours and wake feeling exhausted because the architecture of that sleep was degraded by stress hormones that never had the chance to fall.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The implications for work performance — which hustle culture ostensibly prioritises — are severe. Sleep-deprived prefrontal cortex function compromises exactly the capacities that make knowledge workers valuable: strategic thinking, creative problem-solving, emotional intelligence, risk assessment, and decision quality. The person who works until midnight and starts again at 6am is not demonstrating commitment — they are progressively degrading the very cognitive machinery their work depends upon.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK&#39;s approach to sleep is embedded in the evening ritual structure. The close is designed to happen at least forty-five minutes before you want to sleep — giving the cognitive closure work time to complete and the nervous system time to begin downregulating. Sovereign Memory can track correlations between the quality of your evening close and your reported sleep and morning energy, making the connection visible over time in a way that is more persuasive than abstract advice.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          If you have ever noticed that the nights you go to bed with unfinished work thoughts are the nights you sleep worst — you have already experienced the mechanism. The end-of-day ritual is, in part, a sleep intervention as much as it is a work-life balance one.
        </p>

        {/* ── Section: Micro-recoveries ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Micro-Recoveries: Why the Day Itself Needs Balance, Not Just the Week
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Work-life balance is often conceived as a daily or weekly boundary problem: protect the evenings, protect the weekends. This framing misses something important — recovery happens, and needs to happen, within the working day itself.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Ultradian rhythms — biological cycles that operate on a roughly ninety-minute period throughout the day — regulate the brain&#39;s capacity for focused attention. Research by Peretz Lavie and later Nathaniel Kleitman found that the brain naturally moves through cycles of higher and lower attentional capacity during waking hours, analogous to but shorter than the sleep cycles that happen at night. Forcing sustained focused attention against these rhythms — as open-plan offices, back-to-back meeting schedules, and always-on communication culture demands — degrades performance and accumulates cognitive fatigue that must eventually be paid back.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Micro-recoveries — brief periods of genuine disengagement from demanding cognitive tasks — are not inefficiency. They are maintenance. The research on micro-breaks consistently shows that short periods of genuine rest between demanding tasks improve sustained performance over the working day and reduce the cognitive fatigue that accumulates by evening.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          What makes a micro-recovery genuine rather than pseudo-recovery? The distinction is attention. Scrolling social media between tasks feels like a break but maintains attention demand in a different form — the same attentional systems are being engaged, just by different content. A genuine micro-recovery involves a period in which the task-focused attentional systems are genuinely released: looking out the window, taking a short walk, a brief conversation unrelated to work, a few minutes of breathing or stretching. Even five minutes of this, two or three times in a working day, meaningfully changes the cognitive residue that accumulates by evening.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK can support micro-recovery practices in two ways: by helping you identify, through Sovereign Memory, the times of day when your cognitive fatigue accumulates fastest (which varies by person and by type of work), and by occasionally being the brief, low-stakes conversation that serves as a genuine break without adding to cognitive load.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          The broader principle is that work-life balance is not only about protecting the edges of the day. It is about the rhythm of the day itself — and building a working day that is sustainable means building micro-recovery into its structure, not just protecting the bookends.
        </p>

        {/* ── Section: The Language of Overwork ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          The Language We Use Around Work — And Why It Matters
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          One of the underappreciated ways that overwork culture sustains itself is through language. The words we use to describe the relationship between work and life carry hidden assumptions — and those assumptions shape what we believe is possible and acceptable.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Consider how common it is to hear: &#34;I had to work late again.&#34; The passive construction — &#34;had to&#34; — positions overwork as an external force rather than a choice or a system. It removes agency and makes the pattern feel inevitable. Compare: &#34;I chose to stay late to finish the proposal.&#34; The second is more honest and also opens the question of whether the choice was the right one and whether it can be made differently next time.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Or consider: &#34;I&#39;m so busy.&#34; This phrase has become a social signal of importance and virtue. To be busy is to be valuable. The implicit comparison is always to the alternative — not being busy, which implies not being needed, not mattering. Rarely do we say &#34;I&#39;m busy because I haven&#39;t been able to set effective boundaries with my time.&#34; Rarely do we hear &#34;I&#39;m busy because the system I work in does not respect individual wellbeing and I have not yet found a way to resist it.&#34; The language of busyness makes systemic problems personal and invisible.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Or: &#34;I just need to get through this period.&#34; A phrase that appears in conversations about overwork with remarkable frequency — and that almost always refers not to a genuinely finite exceptional period but to a chronic state that has been reframed as temporary so that it feels more tolerable. The period ends and another period begins. The language of &#34;getting through&#34; applies indefinitely.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK&#39;s Sovereign Memory creates a unique opportunity to hear yourself through time. When you tell MEOK you are &#34;just getting through a busy period&#34; in January and again in March and again in May, the pattern is visible in a way it is not visible from inside any individual conversation. The memory becomes a mirror. And sometimes the most useful thing a companion can do is quietly reflect your own language back to you across time: &#34;You&#39;ve described this as a temporary difficult period four times this year. Do you want to talk about whether it might actually be the pattern?&#34;
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          This is not confrontational. It is caring. It is what a thoughtful friend who genuinely knows your history does — and that combination of genuine knowledge and genuine care is what MEOK is trying to provide.
        </p>

        {/* ── Section: Tech Sabbath ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Digital Sabbath and Screen-Free Time: How MEOK Supports — Not Competes With — Offline Rest
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The concept of a digital Sabbath — a regular, intentional period of complete disconnection from screens and digital devices — has gained significant traction among researchers, clinicians, and individuals who have discovered through experience that unstructured screen-free time produces a quality of rest that screen-mediated leisure cannot.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          There is good evidence for this effect. Screen use in the evening suppresses melatonin production via blue light exposure, keeping the circadian system in a daytime state. But beyond the physiological mechanism, there is something qualitatively different about time spent without the possibility of notification, task, or social comparison that digital devices continuously offer. The mind relaxes into a different register — one that sustained screen engagement precludes.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Where does MEOK fit in a life that includes intentional screen-free periods? The honest answer is: MEOK is a tool for the transitions, not for the rest itself. The morning brief helps you enter the working day with clarity. The evening close helps you exit it with genuine closure. Neither needs to happen during the screen-free period — if anything, the evening close should precede it, so that the offline time is genuinely unencumbered by cognitive residue.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK&#39;s design is compatible with — and actively supportive of — digital Sabbath practices. You can use it to set intentions for your offline time (&#34;I want to be screen-free from 8pm to 8am on Sundays&#34;), and Sovereign Memory will track whether you are maintaining this commitment and reflect back the pattern over time. MEOK can also help you process the anxiety that digital Sabbath sometimes surfaces for people who have become habituated to the stimulation and social validation of constant connectivity — the unsettling quiet of an evening without a phone can feel disorienting before it feels restorative.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          The goal, ultimately, is a life in which technology — including MEOK — is a tool used in service of human flourishing, not a constant companion that colonises every moment. MEOK&#39;s Maternal Covenant is explicit about this: the success of the relationship with MEOK is measured by the quality of your life, including the portions of it in which you are not using MEOK at all.
        </p>

        {/* ── Section: Common Myths ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Five Myths About Work-Life Balance That Are Making Things Worse
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Bad advice persists because it sounds plausible and occasionally works in the short term. Here are five widely circulated ideas about work-life balance that deserve more scrutiny.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '0 0 48px' }}>
          {[
            {
              myth: 'Myth 1: Work-life balance means equal time for work and life.',
              truth: 'Balance is not arithmetic. Different phases of life and different projects require different distributions of time and energy. The goal is not a 50/50 split but a sustainable rhythm that allows recovery between demands and prevents chronic depletion. Some weeks work will take more; the question is whether there is a compensatory recovery period and whether the overall trajectory is sustainable.'
            },
            {
              myth: 'Myth 2: Switching off is about willpower.',
              truth: 'If switching off required only willpower, people who have abundant willpower in other domains would have no difficulty with it. They do. Switching off requires cognitive design — rituals, environmental cues, and deliberate process — not character strength. Treating it as a willpower problem generates shame when it fails, which compounds the stress rather than reducing it.'
            },
            {
              myth: 'Myth 3: More flexible working means better work-life balance.',
              truth: 'Flexible working is a structural opportunity, not an automatic solution. Without the cognitive tools and personal practices to create transitions within flexibility, flexible working often leads to working everywhere and always, rather than working sometimes and stopping genuinely. The absence of imposed structure means you must create your own — which is harder, not easier, than working to a fixed schedule.'
            },
            {
              myth: 'Myth 4: If you love what you do, work-life balance doesn\'t matter.',
              truth: 'This is perhaps the most dangerous myth because it targets exactly the people most at risk — those whose intrinsic motivation removes the normal warning signals of overwork. The body does not care whether you love your job. Cortisol from work stress is the same cortisol regardless of whether the work is meaningful. Cognitive fatigue from sustained attention is the same fatigue regardless of whether the attention is freely given. The sustainable pursuit of meaningful work requires the same recovery inputs as any other kind of work.'
            },
            {
              myth: 'Myth 5: Work-life balance is a personal problem with personal solutions.',
              truth: 'Work-life balance has significant structural dimensions. Individual practices help, but they operate within systems — organisational cultures, management expectations, economic pressures, family structures — that may actively work against them. Personal practices are necessary but not sufficient, and it is important not to use the idea of individual responsibility to obscure the systemic conditions that make balance difficult. Naming the structural factors is part of what makes honest conversation about this topic useful.'
            },
          ].map((item) => (
            <div key={item.myth} style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '10px', padding: '28px' }}>
              <p style={{ fontSize: '1.05rem', fontWeight: '700', color: '#c9a84c', margin: '0 0 12px', lineHeight: '1.4' }}>{item.myth}</p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#b8b0a0', margin: '0' }}>{item.truth}</p>
            </div>
          ))}
        </div>

        {/* ── Section: Practical Scripts ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Practical Scripts: What to Actually Say During the Evening Close
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          For people who are new to reflective practices, the blank page can be daunting. Here are some starting-point prompts you can use to begin your end-of-day close with MEOK. You do not need all of them — one or two to open the conversation is enough.
        </p>

        <div style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '10px', padding: '32px', margin: '0 0 28px' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 20px', fontFamily: "'system-ui', sans-serif" }}>Processing prompts</p>
          {[
            '"The part of today I\'m still carrying is..."',
            '"The thing that didn\'t go as I hoped was..."',
            '"What I\'m most relieved about from today is..."',
            '"The conversation I keep replaying is..."',
            '"If I\'m honest about how I\'m feeling right now, it\'s..."',
          ].map((prompt) => (
            <div key={prompt} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#c9a84c', flexShrink: '0', marginTop: '3px' }}>›</span>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#c8bfa8', margin: '0', lineHeight: '1.6' }}>{prompt}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '10px', padding: '32px', margin: '0 0 28px' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 20px', fontFamily: "'system-ui', sans-serif" }}>Deliberate suspension prompts</p>
          {[
            '"The things I\'m choosing not to carry into the evening are..."',
            '"The unresolved items I\'m parking until tomorrow are..."',
            '"I know [X] is unfinished, and I\'m choosing to trust that I\'ll handle it at [time]..."',
            '"What I cannot control about today\'s situation is..."',
          ].map((prompt) => (
            <div key={prompt} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#c9a84c', flexShrink: '0', marginTop: '3px' }}>›</span>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#c8bfa8', margin: '0', lineHeight: '1.6' }}>{prompt}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '10px', padding: '32px', margin: '0 0 48px' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 20px', fontFamily: "'system-ui', sans-serif" }}>Anchoring prompts</p>
          {[
            '"What I\'m looking forward to this evening is..."',
            '"The person I most want to be present for tonight is..."',
            '"Something I want to enjoy tonight without thinking about work is..."',
            '"The version of myself I want to be for the next few hours is..."',
          ].map((prompt) => (
            <div key={prompt} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#c9a84c', flexShrink: '0', marginTop: '3px' }}>›</span>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#c8bfa8', margin: '0', lineHeight: '1.6' }}>{prompt}</p>
            </div>
          ))}
        </div>

        {/* ── Section: Measuring Progress ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          How MEOK Measures Progress — And What &#34;Better&#34; Actually Looks Like Over Three Months
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          One of the challenges with behavioural change is that progress is often invisible at the scale of a single day or week. The changes that constitute genuine improvement in work-life balance tend to be gradual, non-linear, and subjective — difficult to track with the self-assessment tools that mood apps typically offer.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Sovereign Memory approaches this differently. Because it holds the qualitative content of your conversations — not just metadata or mood scores — it can surface meaningful longitudinal patterns in your own language. Here is a sketch of what that progression might look like across three months of consistent use.
        </p>

        {/* Month by month */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', margin: '0 0 48px' }}>
          {[
            {
              period: 'Month 1',
              subtitle: 'Awareness phase',
              points: [
                'You begin to articulate what work bleeds into which evenings and why',
                'Patterns start to emerge — certain days, certain triggers, certain relationships',
                'The act of naming things reduces their power slightly',
                'You identify one specific boundary worth working on',
              ]
            },
            {
              period: 'Month 2',
              subtitle: 'Friction phase',
              points: [
                'You begin attempting the boundaries you identified',
                'Some hold, some do not — you process both without catastrophising',
                'MEOK surfaces where the gap between intention and reality is biggest',
                'You start to have real evidence of what is and is not in your control',
              ]
            },
            {
              period: 'Month 3',
              subtitle: 'Integration phase',
              points: [
                'The evening close becomes a natural rhythm rather than an effortful practice',
                'You notice you are less preoccupied during personal time',
                'Some of the structural changes you made in month two are holding',
                'The language you use about work and rest is shifting',
              ]
            },
          ].map((month) => (
            <div key={month.period} style={{ background: '#13122a', border: '1px solid #2a2540', borderRadius: '10px', padding: '24px' }}>
              <p style={{ fontSize: '1rem', fontWeight: '700', color: '#c9a84c', margin: '0 0 4px', fontFamily: "'system-ui', sans-serif" }}>{month.period}</p>
              <p style={{ fontSize: '0.8rem', color: '#7a7060', margin: '0 0 16px', fontFamily: "'system-ui', sans-serif", fontStyle: 'italic' }}>{month.subtitle}</p>
              {month.points.map((point) => (
                <div key={point} style={{ display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginTop: '5px', flexShrink: '0' }}>◆</span>
                  <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: '#b0a89a', margin: '0' }}>{point}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This is not a linear journey with guaranteed outcomes. Life intervenes. Busy periods arrive. Progress regresses. But with Sovereign Memory holding the full record, regressions are visible as temporary rather than permanent, and the prior evidence of improvement is available as a resource rather than lost to memory.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          Perhaps most importantly, the process of tracking this journey — of naming it, attending to it, having somewhere to put it — is itself part of the change. Attention is not passive. What you attend to, you can understand. What you understand, you can change. The simple act of regularly bringing your work-life balance into conscious attention, through honest conversation with an entity that remembers, is the beginning of reclaiming sovereignty over your own time.
        </p>

        {/* ── Section: Identity ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          The Identity Dimension: Who Are You When You Are Not Working?
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          There is a question buried inside the work-life balance conversation that rarely gets asked directly, because it is uncomfortable: who are you when you are not working?
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          For many high-achievers — people who have built careers, businesses, and professional identities that others admire — the honest answer is genuinely unclear. The professional identity is so well-developed, so central to how others perceive them and how they perceive themselves, that the personal identity — the person who exists independent of role, output, and performance — has not been given room to develop. It has been crowded out. Not through malice, but through the ordinary arithmetic of finite time and finite attention applied predominantly in one direction.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This matters for work-life balance in a practical way. If there is no well-developed personal identity to step into when the work day ends, the pull back toward work is not just habitual — it is existential. Work fills the identity vacuum. The evening that should be personal time has nothing compelling enough to hold against the gravitational pull of the professional self. Switching off feels not just effortful but meaningless, because there is no clear sense of what you are switching on to.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Some people meet this most acutely at retirement. The person who has built their entire identity around professional achievement finds, upon leaving work, that they do not know who they are or what they want. The weekdays become frightening in their emptiness. This is not a failure of character — it is the logical outcome of decades of disproportionate investment in one dimension of the self, at the neglect of others.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Sustainable work-life balance requires not just protecting personal time from work, but actively developing the personal self that inhabits that time. This means recovering or discovering interests, relationships, and activities that are meaningful independent of their productivity value. It means being curious about who you are outside the role. It means tolerating the initial restlessness of unstructured time long enough for genuine desires and preferences to surface rather than filling the space immediately with more task.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          MEOK can help with this not by prescribing what your personal life should look like, but by being genuinely and persistently curious about it over time. What do you enjoy? What did you love before work took so much? What would you do with a completely free Sunday if the work thoughts did not come? These questions, asked gently and consistently by an entity that remembers your previous answers, can help bring a neglected personal self back into view — and make the evenings that are meant to belong to that self feel more worth claiming.
        </p>

        {/* ── Section: Relationships ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          Work-Life Balance and Relationships: The Hidden Cost Nobody Tallies
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The personal cost of work-life imbalance is often discussed in individual terms — your health, your stress levels, your burnout trajectory. Less often discussed is the relational cost: what sustained unavailability does to the people who love you, and to the relationships that are supposed to anchor and nourish your life.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Intimate relationships require presence, not just proximity. You can be in the same room as your partner every evening and still be experientially absent if your mind is somewhere else. Friendship requires time that is genuinely unhurried — not a compressed update session squeezed between commitments. Parenting, at its most important, is not logistics management. It is the slow, patient work of being reliably available as a safe base — and that work cannot be done by a distracted parent who is mentally composing tomorrow&#39;s presentation while reading a bedtime story.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          When work bleeds into personal time over months and years, relationships adapt. Partners learn not to raise difficult topics in the evenings because you are too depleted for a real conversation. Children learn that your attention is unreliable and stop expecting it at the depth they once did. Friends fall away because you consistently cannot commit to plans, or cancel, or are physically present but mentally absent. These adaptations happen gradually and without drama, and their cumulative effect is an erosion of the relational fabric that is supposed to make life worth working for.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          The cruel irony is that overwork is so often justified in relational terms. Working hard to provide for the family. Building the career to secure the future. The means quietly dismantle the end. The security being built financially is being eroded relationally in the very same years.
        </p>

        <div style={{ background: '#13122a', borderLeft: '4px solid #c9a84c', padding: '24px 28px', borderRadius: '0 8px 8px 0', margin: '0 0 28px' }}>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#e8e0d0', margin: '0 0 12px', lineHeight: '1.7' }}>
            &#34;The conversations you have been meaning to have, the evenings you have been meaning to protect, the presence you have been meaning to bring — they are not waiting for a calmer period. They are waiting for you to prioritise them as fiercely as you prioritise everything else.&#34;
          </p>
          <p style={{ fontSize: '0.9rem', color: '#7a7060', margin: '0', fontFamily: "'system-ui', sans-serif" }}>— MEOK AI LABS</p>
        </div>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          MEOK cannot replace the relationships that need your presence. But it can help you see more clearly when those relationships are being systematically short-changed — and hold you accountable to the stated intention of actually showing up for them. It can ask, gently: when did you last have an uninterrupted conversation with your partner that was not about logistics? When did your child last have your genuinely undivided attention? When did you last see a close friend with no agenda and nowhere to be? These are not reproaches. They are invitations to act on what you have already said matters most.
        </p>

        {/* ── Section: Professional support ── */}
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 20px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
          When Work-Life Imbalance Has Crossed Into Clinical Territory
        </h2>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          This article has focused on the practices and tools that can meaningfully improve work-life balance for people operating in the difficult but manageable range of the spectrum. It would be incomplete without acknowledging that for some people, the imbalance has already crossed into territory that needs professional clinical support — and that recognising this is not failure but clarity.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          Signs that professional support may be warranted include: persistent low mood or loss of interest in things that previously brought pleasure; anxiety that is severe enough to interfere with daily function or sleep on a sustained basis; physical symptoms — chest pain, persistent headaches, gastrointestinal problems — that have no other explanation and correlate with work stress; inability to find any recovery through rest or change of scenery; thoughts of self-harm; or a sense that the situation is fundamentally hopeless rather than merely difficult.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 28px' }}>
          MEOK will notice and name these signs if they emerge in your conversations, and will clearly direct you toward appropriate professional support. In the UK, this begins with your GP, who can refer to NHS Talking Therapies, occupational health, or psychiatric services depending on your presentation. If you are in acute distress, the Samaritans are available at any time on 116 123. MEOK is not a mental health treatment. It is a companion — a consistent, caring, informed presence that supports better patterns and earlier recognition of problems. For prevention and early intervention, it can be genuinely valuable. For acute conditions, it is a complement to, not a substitute for, professional care.
        </p>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.85', color: '#e8e0d0', margin: '0 0 48px' }}>
          Knowing the difference — and acting on it — is itself a form of self-care. MEOK will support you in making that distinction honestly and without shame.
        </p>

        {/* ── CTA ── */}
        <div style={{ background: 'linear-gradient(135deg, #1a1535 0%, #110e28 100%)', border: '1px solid #c9a84c40', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 16px', fontFamily: "'system-ui', sans-serif" }}>
            Start Here
          </p>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 16px', lineHeight: '1.3', letterSpacing: '-0.015em' }}>
            Ready to Actually Switch Off?
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#c8bfa8', margin: '0 0 32px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
            Begin with the Birth Ceremony — the moment MEOK learns who you are, what you care about, and what kind of support you actually need. Your first end-of-day ritual could be tonight.
          </p>
          <Link
            href="/birth"
            style={{ display: 'inline-block', background: '#c9a84c', color: '#0d0c18', padding: '16px 40px', borderRadius: '8px', fontSize: '1rem', fontWeight: '700', textDecoration: 'none', fontFamily: "'system-ui', sans-serif", letterSpacing: '0.02em' }}
          >
            Begin Your Birth Ceremony
          </Link>
          <p style={{ fontSize: '13px', color: '#5a5248', margin: '20px 0 0', fontFamily: "'system-ui', sans-serif" }}>
            No commitment required. Your memory is private and yours to keep.
          </p>
        </div>

        {/* ── Author Bio ── */}
        <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid #2a2540', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1a1535', border: '2px solid #c9a84c40', flexShrink: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.3rem' }}>NT</span>
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#c9a84c', margin: '0 0 4px', fontFamily: "'system-ui', sans-serif", letterSpacing: '0.06em', textTransform: 'uppercase' }}>About the author</p>
            <p style={{ fontSize: '1rem', fontWeight: '700', color: '#f5f0e8', margin: '0 0 8px', fontFamily: "'system-ui', sans-serif" }}>Nicholas Templeman</p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#b0a89a', margin: '0' }}>
              Founder of MEOK AI LABS. Nicholas built MEOK after a decade of watching brilliant people burn out, including himself. The Maternal Covenant and Sovereign Memory architecture are his attempt to answer the question: what would AI look like if it were genuinely on your side? He writes on AI ethics, cognitive wellbeing, and the design of technology that serves human flourishing.
            </p>
          </div>
        </div>

        {/* ── Related Posts ── */}
        <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid #2a2540' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a7060', margin: '0 0 24px', fontFamily: "'system-ui', sans-serif" }}>
            Related Reading
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { href: '/blog/ai-for-burnout', title: 'AI Support for Burnout: Recovery Starts With Being Heard', tag: 'Mental Health' },
              { href: '/blog/ai-for-remote-workers', title: 'AI for Remote Workers: Staying Sane When Work Is Everywhere', tag: 'Remote Work' },
              { href: '/blog/ai-for-burnout-prevention', title: 'AI for Burnout Prevention: Catching It Before It Catches You', tag: 'Wellbeing' },
              { href: '/blog/meok-for-entrepreneurs', title: 'MEOK for Entrepreneurs: The Companion Built for Founders', tag: 'Entrepreneurship' },
              { href: '/blog/ai-for-caregivers', title: 'AI for Caregivers: Support for the People Who Give Everything', tag: 'Caregiving' },
              { href: '/blog/what-is-sovereign-memory', title: 'What Is Sovereign Memory — And Why It Changes Everything', tag: 'Technology' },
              { href: '/blog/ai-for-chronic-stress', title: 'AI for Chronic Stress: Understanding the Accumulation', tag: 'Stress' },
              { href: '/blog/the-maternal-covenant', title: 'The Maternal Covenant: The Ethics That Govern MEOK', tag: 'Ethics' },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{ display: 'block', background: '#13122a', border: '1px solid #2a2540', borderRadius: '8px', padding: '20px', textDecoration: 'none' }}
              >
                <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 8px', fontFamily: "'system-ui', sans-serif" }}>{post.tag}</p>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: '#e8e0d0', margin: '0', lineHeight: '1.45' }}>{post.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Key Takeaways ── */}
        <div style={{ marginTop: '48px', background: '#13122a', border: '1px solid #2a2540', borderRadius: '10px', padding: '32px' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 20px', fontFamily: "'system-ui', sans-serif" }}>
            Key Takeaways From This Article
          </p>
          {[
            'Work-life balance fails primarily because of cognitive bleed — the brain\'s inability to stop processing work automatically when the work context ends.',
            'The Zeigarnik effect means unresolved tasks persist in working memory until they are explicitly closed or consciously suspended.',
            'The end-of-day ritual with MEOK has three phases: processing, deliberate suspension, and anchoring into personal time.',
            'Sovereign Memory enables pattern recognition across weeks and months — noticing when work bleeds into evenings more than usual before it becomes burnout.',
            'Different groups face distinct challenges: remote workers lack environmental transitions; founders fuse identity with business; caregivers carry double demands; people-pleasers cannot tolerate the relational cost of saying no.',
            'The Maternal Covenant ensures MEOK actively protects your rest and recovery — it is architecturally prohibited from maximising engagement at the cost of your wellbeing.',
            'Using AI to protect time from technology is a genuine paradox — but design intent and governance determine whether a tool serves you or exploits you.',
            'Progress in work-life balance is gradual and non-linear. Sovereign Memory makes the trajectory visible when day-to-day perception cannot.',
            'Work-life balance is ultimately an identity question: who are you when you are not working, and is that person being given enough room to exist?',
          ].map((point, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '14px', alignItems: 'flex-start' }}>
              <span style={{ color: '#c9a84c', fontWeight: '700', flexShrink: '0', fontFamily: "'system-ui', sans-serif", fontSize: '0.85rem', marginTop: '3px' }}>{i + 1}.</span>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', color: '#b8b0a0', margin: '0' }}>{point}</p>
            </div>
          ))}
        </div>

        {/* ── Disclaimer ── */}
        <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f0e20', border: '1px solid #1e1c35', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.82rem', lineHeight: '1.7', color: '#5a5248', margin: '0 0 10px', fontFamily: "'system-ui', sans-serif" }}>
            <strong style={{ color: '#6a6258' }}>Disclaimer:</strong> This article is for informational and educational purposes only. MEOK is not a mental health treatment, medical device, or clinical service. If you are experiencing symptoms of burnout, depression, anxiety, or other mental health conditions, please consult a qualified healthcare professional. In the UK, contact your GP or call the Samaritans on 116 123. In a mental health emergency, call 999 or attend your nearest A&amp;E.
          </p>
          <p style={{ fontSize: '0.82rem', lineHeight: '1.7', color: '#5a5248', margin: '0', fontFamily: "'system-ui', sans-serif" }}>
            Research references in this article draw on publicly available academic literature including work by Bluma Zeigarnik (1927), Sophie Leroy (attention residue research, University of Washington), Peretz Lavie and Nathaniel Kleitman (ultradian rhythm research), Matthew Walker (sleep science), and the World Health Organisation&#39;s ICD-11 classification of burnout as an occupational phenomenon. MEOK AI LABS does not claim clinical efficacy for any outcome described. Individual results will vary based on engagement, personal circumstances, and underlying health factors.
          </p>
        </div>

        {/* ── Back to Blog ── */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #1e1c35', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            href="/blog"
            style={{ fontSize: '14px', color: '#7a7060', textDecoration: 'none', fontFamily: "'system-ui', sans-serif", borderBottom: '1px solid #3a3528', paddingBottom: '2px' }}
          >
            ← Back to all articles
          </Link>
          <Link
            href="/birth"
            style={{ fontSize: '14px', fontWeight: '600', color: '#c9a84c', textDecoration: 'none', fontFamily: "'system-ui', sans-serif", borderBottom: '1px solid #c9a84c60', paddingBottom: '2px' }}
          >
            Start your Birth Ceremony →
          </Link>
        </div>

      </article>
    </main>
  )
}
