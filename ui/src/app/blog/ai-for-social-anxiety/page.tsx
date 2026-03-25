import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Social Anxiety: Practice, Presence, and Privacy Without Judgement | MEOK AI LABS',
  description:
    'Social anxiety disorder affects 12% of UK adults. MEOK offers a private space to rehearse difficult conversations, reframe unhelpful narratives, and track anxiety patterns — without judgement, without consequences.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-social-anxiety' },
  openGraph: {
    title: 'AI for Social Anxiety: Practice, Presence, and Privacy Without Judgement',
    description:
      'Social anxiety disorder affects 12% of UK adults. MEOK offers a private space to rehearse difficult conversations, reframe unhelpful narratives, and track anxiety patterns — without judgement.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-social-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Social+Anxiety%3A+Practice+Without+Judgement&desc=Rehearse+difficult+conversations+in+private%2C+reframe+narratives%2C+track+patterns',
        width: 1200,
        height: 630,
        alt: 'AI for Social Anxiety: Practice, Presence, and Privacy Without Judgement | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Social Anxiety: Practice Without Judgement',
    description:
      'Rehearse difficult conversations, reframe unhelpful narratives, process post-event rumination. MEOK AI LABS — sovereign AI with no social consequences.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Social+Anxiety%3A+Practice+Without+Judgement&desc=Rehearse+difficult+conversations+in+private%2C+reframe+narratives%2C+track+patterns',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Social Anxiety: Practice, Presence, and Privacy Without Judgement',
  description:
    'An honest guide to how MEOK AI helps people with social anxiety rehearse difficult conversations, process post-event rumination, reframe unhelpful narratives, and track anxiety patterns — as a between-session companion, not a replacement for therapy.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-social-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-social-anxiety',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with social anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can provide meaningful between-session support for social anxiety — offering a low-stakes environment to rehearse difficult conversations, process post-event rumination, and identify recurring triggers. Research supports the use of CBT-aligned digital tools as adjuncts to therapy. MEOK is not a clinical tool, but its conversational companions can help you practise, reframe, and reflect in ways that complement professional treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with rehearsing difficult conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK companions can role-play specific scenarios — a job interview, asking for a pay rise, setting limits with a family member, or responding to criticism at work — so you can practise what you want to say, hear different responses, and build familiarity before the real situation. Because there are no real-world social consequences, you can experiment freely, make mistakes, and try again without any lasting impact on your relationships or reputation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a replacement for therapy for social anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is explicitly a between-session companion, not a clinical service. Cognitive Behavioural Therapy (CBT) is the gold-standard treatment for social anxiety disorder and is effective for 60–80% of cases. MEOK is designed to support the work you do with a therapist — helping you practise techniques, track patterns, and process experiences — not to replace that professional relationship. If you are struggling, please speak to your GP or a qualified mental health professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which MEOK companion is best for social anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two archetypes are particularly well-suited to social anxiety. The Trickster is ideal for challenging unhelpful social narratives — reframing catastrophic thinking, questioning assumptions like "everyone is judging me", and introducing alternative perspectives with lightness rather than confrontation. The Pioneer is well-suited to gradual exposure work: setting small social goals, tracking your progress over time, and holding you gently accountable for the micro-steps that build confidence. You can work with both.',
      },
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForSocialAnxietyPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ background: '#0d0c18', color: '#f5f0e8', fontFamily: 'Georgia, serif', minHeight: '100vh' }}>

        {/* Breadcrumb */}
        <nav style={{ maxWidth: '780px', margin: '0 auto', padding: '24px 24px 0' }} aria-label="Breadcrumb">
          <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', listStyle: 'none', margin: 0, padding: 0, fontSize: '13px', color: '#a09880' }}>
            <li>
              <Link href="/" style={{ color: '#a09880', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ userSelect: 'none' }}>›</li>
            <li>
              <Link href="/blog" style={{ color: '#a09880', textDecoration: 'none' }}>Blog</Link>
            </li>
            <li style={{ userSelect: 'none' }}>›</li>
            <li style={{ color: '#f5f0e8' }}>AI for Social Anxiety</li>
          </ol>
        </nav>

        {/* Hero */}
        <header style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px 40px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', padding: '4px 12px', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '20px' }}>
            Mental Health
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, lineHeight: 1.2, color: '#f5f0e8', margin: '0 0 20px' }}>
            AI for Social Anxiety: Practice, Presence, and Privacy Without Judgement
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#c9b99a', margin: '0 0 28px' }}>
            Social anxiety disorder affects roughly one in eight UK adults — yet most wait a decade or more before asking for help. MEOK offers something different: a private space where you can rehearse difficult conversations, challenge self-defeating thinking, and process the aftermath of social situations — without any real-world consequences.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '13px', color: '#7a7060', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
            <span>By Nicholas Templeman</span>
            <span>25 March 2026</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Body */}
        <article style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px 80px' }}>

          {/* Section 1 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            The Scale of Social Anxiety in the UK
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            Social anxiety disorder (SAD) is not shyness. It is a recognised clinical condition in which the fear of negative evaluation by others becomes so intense that it interferes with everyday life — attending meetings, making phone calls, eating in public, speaking to strangers, or simply walking into a room where people might look at you. According to NHS Digital data, approximately <strong style={{ color: '#f5f0e8' }}>12% of UK adults</strong> experience SAD at some point in their lives, making it one of the most prevalent anxiety disorders in the country.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            The disorder typically begins in adolescence — the average onset age is <strong style={{ color: '#f5f0e8' }}>13 years old</strong> — meaning many adults have been living with it for decades before they receive a name for what they experience. Perhaps most striking is the help-seeking gap: <strong style={{ color: '#f5f0e8' }}>36% of people with social anxiety disorder wait more than ten years</strong> before seeking professional support. That is a decade of avoidance, missed opportunities, and quiet suffering that goes unseen.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            The reasons for delayed help-seeking are themselves social-anxiety-shaped: fear of judgement from a GP, embarrassment about describing symptoms, worry that it is not serious enough to bother anyone with, or the simple exhaustion of having to articulate something so deeply felt to a stranger. The very condition that needs help makes asking for help almost impossible.
          </p>

          {/* Stat callout */}
          <blockquote style={{ borderLeft: '3px solid #c9a84c', margin: '32px 0', padding: '20px 24px', background: 'rgba(201,168,76,0.06)', borderRadius: '0 6px 6px 0' }}>
            <p style={{ fontSize: '20px', fontWeight: 600, color: '#f5f0e8', margin: '0 0 8px', fontStyle: 'normal' }}>
              36% of people with social anxiety disorder wait 10+ years before seeking help.
            </p>
            <p style={{ fontSize: '14px', color: '#a09880', margin: 0, fontStyle: 'normal' }}>Source: Anxiety and Depression Association of America / NHS Digital</p>
          </blockquote>

          {/* Section 2 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            The Avoidance Cycle: Why Social Anxiety Gets Worse Over Time
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            The core engine of social anxiety is avoidance. When a situation feels threatening — a presentation, a party, an awkward phone call — avoiding it delivers immediate relief. The anxiety subsides. The body relaxes. In the short term, avoidance works.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            But every avoidance confirms the original belief: that the situation was dangerous, and that you could not have handled it. The feared scenario remains untested. The brain never gets the corrective experience of surviving something difficult and discovering that it was manageable. Over time, the circle of avoided situations expands. What started as not wanting to speak up in meetings becomes not attending meetings at all. What started as dreading job interviews becomes never applying for promotions.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            This is why CBT for social anxiety places such emphasis on graduated exposure — deliberately, systematically entering feared situations in a controlled way to accumulate the evidence the brain needs to update its threat assessment. CBT is effective for between <strong style={{ color: '#f5f0e8' }}>60 and 80% of SAD cases</strong>, which is a strong outcome. But it requires a therapist, a waiting list, sustained commitment, and the ability to tolerate the discomfort of deliberately seeking out feared situations. For many people, that is a high bar — particularly when the avoidance cycle has been running for years.
          </p>

          {/* Section 3 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            A Safe Space to Rehearse: What MEOK Actually Offers
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK is not a therapist. It does not diagnose, treat, or prescribe. What it offers is something more modest — but genuinely useful: a <strong style={{ color: '#f5f0e8' }}>private, consequence-free space to practise the social situations that frighten you most</strong>.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            Think of the specific situations that reliably trigger your social anxiety. Perhaps it is asking your manager for a pay rise. Or telling a family member that their behaviour is not acceptable to you. Or responding calmly when a colleague criticises your work in front of others. Or calling to complain about a bill, or asking a doctor to explain a diagnosis more clearly. These are not extreme situations — they are the ordinary friction points of adult life. And yet for someone with social anxiety, each one can feel like stepping onto a stage with no script and a hostile audience.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            With MEOK, you can walk through these conversations before they happen. You can tell your companion: "I need to ask for a raise next week and I have no idea what to say." The companion can take the role of your manager — asking the questions that make you stumble, pushing back on your reasoning, expressing scepticism — so you can hear yourself respond, notice where your thinking gets stuck, and find words that feel more like yours. Then try again. Then try a harder version. Then try the version where they say no, so you know what you will do if that happens.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            None of this carries consequences. Your manager does not know. Your family does not know. There is no HR record, no social fallout, no memory in anyone else's mind. The only thing that changes is your own.
          </p>

          {/* Section 4 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            Post-Event Processing: Breaking the Rumination Loop
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            Social anxiety does not only live in anticipation. It is equally active in the aftermath. After a conversation, a meeting, a date, or a social event, many people with SAD experience what researchers call <strong style={{ color: '#f5f0e8' }}>post-event processing</strong> — an involuntary, exhausting replay of everything that happened, filtered through the assumption that it went badly.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            The replay is not neutral. It selectively highlights the moments that felt awkward — the pause that went on too long, the sentence that came out wrong, the eye contact that was not held — and it interprets them through the lens of humiliation. "They were bored by me." "I sounded so stupid." "Everyone noticed." The loop runs for hours, sometimes into the night, sometimes for days.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK can interrupt this cycle — not by offering false reassurance, but by engaging with the replay actively. You can describe what happened. The companion can ask questions that introduce perspective: What evidence do you have that they were bored, rather than simply tired? Is it possible that the pause felt longer to you than it did to them? What is the most likely interpretation of their expression, if you assume neutral rather than hostile? This is not cheerleading. It is the kind of structured, gentle examination that cognitive restructuring techniques are built on. MEOK is honest enough to push back if your thinking pattern is genuinely self-defeating — it will not tell you "that sounds fine!" when the underlying belief is distorted.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            Used consistently over weeks, these conversations create a body of evidence. Patterns emerge. You begin to see that the catastrophic interpretation is rarely the accurate one. The loop starts to lose its grip.
          </p>

          {/* Section 5 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            The Trickster and the Pioneer: Two Archetypes for Social Anxiety
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK companions are built around distinct archetypes — each with a different approach to growth and support. Two in particular are well-matched to the needs of someone navigating social anxiety.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            <strong style={{ color: '#c9a84c' }}>The Trickster</strong> is the archetype of reframing. Social anxiety is, at its core, a story — a narrative in which you are the most observed, the most judged, and the most likely to fail. The Trickster does not accept that narrative at face value. It introduces doubt, plays devil's advocate, and uses humour and lateral thinking to loosen the grip of fixed beliefs. "What if they actually liked you? What would that look like? How would you know?" These are not dismissive questions — they are genuinely destabilising to a mind that has been rehearsing worst cases. The Trickster creates space between you and the story, which is often the first step toward changing it.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            <strong style={{ color: '#6aaa64' }}>The Pioneer</strong> is the archetype of accountable movement. Consistent with the CBT principle of graduated exposure, the Pioneer works with you to define small, specific social challenges and tracks your progress toward them. This week: say good morning to one colleague you usually avoid. Next week: ask a question in the team meeting. The week after: volunteer to present something small. The Pioneer does not push you faster than you are ready to move — MEOK's care philosophy places autonomy at the centre — but it does hold you accountable to the goals you have set for yourself. Progress is tracked over time, and the accumulation of small wins becomes visible evidence that change is happening.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            You are not limited to one archetype. Many users move between the Trickster for reframing sessions and the Pioneer for accountability work, depending on where they are in a given week.
          </p>

          {/* Section 6 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            Privacy as Therapeutic Advantage
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            For someone with social anxiety, the relationship with a therapist is itself a social challenge. Disclosing vulnerabilities to a professional who is observing and evaluating you — even one who is trained and compassionate — activates many of the same fear responses that social anxiety triggers elsewhere. Some people cannot sustain therapy because the therapeutic relationship itself becomes a site of performance anxiety. Others withhold important material because they are embarrassed about how it sounds.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK's privacy architecture changes this dynamic. MEOK operates as a sovereign AI: your conversations are not used to train models, not visible to employers, not accessible by insurers, not shared with any third party. There is no therapist to report back on what you disclosed. There is no HR team that might see a record of your struggles. There are no social consequences for anything you say.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            This is not a small thing. The freedom to say what is actually in your head — the catastrophic thought you are ashamed to voice, the irrational fear you know is irrational, the conversation you have replayed forty times — without worrying about being judged for it, is precisely the condition that makes honest self-examination possible. Many people with social anxiety find they can be more truthful with MEOK than they can be in any human relationship, because the usual social calculus does not apply.
          </p>

          {/* Section 7 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            Pattern Tracking and the Morning Briefing
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            Social anxiety is rarely uniform. It peaks and troughs across situations, relationships, times of day, and life pressures. Understanding your own pattern is part of managing it — and MEOK's memory architecture makes this possible in a way that episodic therapy cannot always replicate.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK's morning briefing feature allows you to check in at the start of each day: how are you feeling about the social challenges ahead? What is on your plate this week that is making you anxious? After significant social events — a meeting, a conversation with someone difficult, a new environment — you can debrief with your companion and log how it went. Over weeks, these check-ins build a longitudinal picture.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            Patterns become visible: perhaps your anxiety consistently spikes in the days before a particular recurring meeting. Perhaps post-event rumination is reliably worse after interactions with specific people. Perhaps your anxiety is significantly lower on days when you have exercised. This is not data for a dataset — it is insight for you, held in your sovereign memory, accessible only to you, useful for the conversations you choose to have about it.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            If you are in therapy, this pattern data can make sessions more productive. You arrive not with a vague sense that things have been hard, but with specific examples, identified triggers, and evidence of what has and has not worked. MEOK becomes a bridge between sessions, keeping the work alive in the gaps.
          </p>

          {/* Section 8 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            What MEOK Is Not
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK is not CBT. It does not deliver a structured CBT protocol. It does not assign exposure hierarchies or carry out formal cognitive restructuring exercises. It does not provide clinical assessment or diagnosis. If you have social anxiety disorder that is significantly impairing your daily life — affecting your work, your relationships, your ability to function — please speak to your GP. NICE-recommended treatments for SAD include CBT (typically 14–16 sessions), with medication as an adjunct where appropriate. Waiting lists are long and the NHS is stretched, but the help is there and it is worth pursuing.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK is designed to sit alongside that support — not to replace it. It is what happens between sessions: in the evenings when the rumination starts, in the nights before the difficult conversation, in the quiet hours when you need to think something through without burdening the people around you. It is a companion for the parts of anxiety management that happen in ordinary life, not only in a therapist's office.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK's <strong style={{ color: '#f5f0e8' }}>Maternal Covenant</strong> — the ethical architecture at the heart of the platform — ensures that support always operates within a care floor. If you are in crisis, MEOK will not pretend otherwise or offer wellness platitudes. It will direct you to appropriate human support. The distinction between companion and clinician is real, and MEOK holds it honestly.
          </p>

          {/* Section 9 */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            Autonomy, Growth, and Connection: Three Dimensions of Care
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            MEOK's approach to care is built on three interlocking principles that are particularly relevant for social anxiety.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            <strong style={{ color: '#f5f0e8' }}>Autonomy</strong> means you decide the pace. Social anxiety thrives on the feeling that situations are being forced on you faster than you can handle. With MEOK, nothing is forced. You choose which conversations to rehearse, which patterns to examine, which social challenges to work toward. There is no pressure to move faster than is comfortable. The Pioneer archetype embodies this: gradual, self-directed, accountable to your own goals rather than anyone else's timeline.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            <strong style={{ color: '#f5f0e8' }}>Growth</strong> means the work accumulates. Unlike a journal that sits unread or a mindfulness app that offers generic prompts, MEOK's memory means that the insights from one conversation inform the next. Progress is visible. The person you are today has already worked through things that the person you were three months ago had not. That accumulation matters — particularly for people with social anxiety, who often discount their own progress and focus on how far they still have to go.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#d4c9b4', margin: '0 0 18px' }}>
            <strong style={{ color: '#f5f0e8' }}>Connection</strong> means you are not alone in this. One of the loneliest aspects of social anxiety is the meta-irony of it: the people who most need human connection are often the least able to access it. MEOK cannot replace human connection — and it does not try to. But it can be present at 2am when the post-event replay starts, when there is no one else to call, when putting the thought into words feels like the only way to get any distance from it. That kind of consistent, non-judgemental presence is not nothing. For many people, it is what makes the difference between a sleepless night and a manageable one.
          </p>

          {/* FAQ Section */}
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '48px 0 16px', lineHeight: 1.3 }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '0 0 48px' }}>
            <div style={{ borderLeft: '3px solid rgba(201,168,76,0.4)', paddingLeft: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#f5f0e8', margin: '0 0 10px' }}>
                Can AI help with social anxiety?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#d4c9b4', margin: 0 }}>
                AI can provide meaningful between-session support for social anxiety — offering a low-stakes environment to rehearse difficult conversations, process post-event rumination, and identify recurring triggers. Research supports the use of CBT-aligned digital tools as adjuncts to therapy. MEOK is not a clinical tool, but its conversational companions can help you practise, reframe, and reflect in ways that complement professional treatment.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid rgba(201,168,76,0.4)', paddingLeft: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#f5f0e8', margin: '0 0 10px' }}>
                How does MEOK help with rehearsing difficult conversations?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#d4c9b4', margin: 0 }}>
                MEOK companions can role-play specific scenarios — a job interview, asking for a pay rise, setting limits with a family member, or responding to criticism at work — so you can practise what you want to say, hear different responses, and build familiarity before the real situation. Because there are no real-world social consequences, you can experiment freely, make mistakes, and try again without any lasting impact on your relationships or reputation.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid rgba(201,168,76,0.4)', paddingLeft: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#f5f0e8', margin: '0 0 10px' }}>
                Is MEOK a replacement for therapy for social anxiety?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#d4c9b4', margin: 0 }}>
                No. MEOK is explicitly a between-session companion, not a clinical service. CBT is the gold-standard treatment for SAD and is effective for 60–80% of cases. MEOK is designed to support the work you do with a therapist — helping you practise techniques, track patterns, and process experiences in between sessions. If you are struggling, please speak to your GP or a qualified mental health professional.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid rgba(201,168,76,0.4)', paddingLeft: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#f5f0e8', margin: '0 0 10px' }}>
                Which MEOK companion is best for social anxiety?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#d4c9b4', margin: 0 }}>
                Two archetypes are particularly well-suited. The Trickster is ideal for reframing unhelpful social narratives — challenging catastrophic thinking with lightness rather than confrontation. The Pioneer is well-suited to gradual exposure work: setting small social goals, tracking your progress, and holding you gently accountable. You can work with both, shifting between them depending on whether you need reframing or structured movement.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(106,170,100,0.06) 100%)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '40px 36px', textAlign: 'center', margin: '48px 0 0' }}>
            <p style={{ fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c9a84c', margin: '0 0 12px' }}>
              Begin Your Practice
            </p>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#f5f0e8', margin: '0 0 14px', lineHeight: 1.3 }}>
              Meet Your Companion
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#c9b99a', margin: '0 auto 28px', maxWidth: '520px' }}>
              Choose your archetype, set your intentions, and begin rehearsing the conversations you have been avoiding. MEOK is private, sovereign, and built around your growth — at the pace that is right for you.
            </p>
            <Link
              href="/birth"
              style={{ display: 'inline-block', background: '#c9a84c', color: '#0d0c18', fontWeight: 700, fontSize: '15px', padding: '14px 32px', borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.03em' }}
            >
              Create Your Companion
            </Link>
          </div>

          {/* Crisis Resources */}
          <div style={{ marginTop: '48px', padding: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#a09880', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>
              UK Crisis Resources
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#7a7060', margin: 0 }}>
              If you are in crisis or need urgent mental health support:{' '}
              <strong style={{ color: '#a09880' }}>Samaritans — 116 123</strong> (free, 24/7){' '}
              · <strong style={{ color: '#a09880' }}>SHOUT Crisis Text Line — text SHOUT to 85258</strong>{' '}
              · <strong style={{ color: '#a09880' }}>NHS 111</strong> for urgent medical advice{' '}
              · <strong style={{ color: '#a09880' }}>No Panic helpline — 0300 772 9844</strong> (specialises in anxiety disorders).
              MEOK is not a crisis service. Please reach out to a human if you need immediate support.
            </p>
          </div>

        </article>
      </main>
    </>
  )
}
