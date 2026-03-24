import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Veterans: Persistent Memory, PTSD Support, and Why Data Sovereignty Matters Most | MEOK AI LABS',
  description:
    '1 in 5 UK veterans experience mental health issues (Combat Stress). Generic AI forgets you every session and trains on your trauma. MEOK offers persistent memory, sovereign data, and a Guardian safety layer — built to serve veterans, not exploit them.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-veterans' },
  openGraph: {
    title: 'AI for Veterans: Persistent Memory, PTSD Support, and Why Data Sovereignty Matters Most',
    description:
      '1 in 5 UK veterans experience mental health issues. MEOK offers persistent memory, sovereign data, and a Guardian safety layer built for veteran support.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-veterans',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Veterans%3A+Persistent+Memory+%26+PTSD+Support&desc=Data+sovereignty+matters+most+when+the+data+is+trauma.',
        width: 1200,
        height: 630,
        alt: 'AI for Veterans: Persistent Memory, PTSD Support, and Why Data Sovereignty Matters Most',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Veterans: Persistent Memory, PTSD Support, and Why Data Sovereignty Matters Most',
    description:
      '1 in 5 UK veterans experience mental health issues. MEOK offers sovereign AI with persistent memory — and never trains on your data.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Veterans%3A+Persistent+Memory+%26+PTSD+Support&desc=Data+sovereignty+matters+most+when+the+data+is+trauma.',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Veterans: Persistent Memory, PTSD Support, and Why Data Sovereignty Matters Most',
  description:
    '1 in 5 UK veterans experience mental health issues (Combat Stress). Generic AI forgets you every session and trains on your trauma. MEOK offers persistent memory, sovereign data, and a Guardian safety layer — built to serve veterans, not exploit them.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-veterans',
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
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many UK veterans experience mental health problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research by Combat Stress and the Royal British Legion indicates that approximately 1 in 5 UK veterans experience a mental health difficulty, including PTSD, depression, and anxiety. Veterans face unique barriers to help-seeking including stigma, unfamiliarity with civilian services, and the difficulty of articulating combat or service trauma to people who have not shared that experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI really help veterans with PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can play a meaningful supplementary role — particularly between therapy appointments, for grounding exercises, pattern tracking, and consistent daily presence. It cannot replace trauma-focused therapies such as EMDR, CPT, or Prolonged Exposure. Critically, the AI must not forget the veteran between sessions, must not train on their trauma data, and must escalate sensitively when a crisis is detected. MEOK is built around all three of these requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does data sovereignty matter for veteran mental health AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When a veteran discloses combat trauma, survivor's guilt, or suicidal ideation to an AI, that data is extraordinarily sensitive. Most consumer AI platforms use your conversations to retrain their models — meaning your trauma becomes a corporate training asset. MEOK's Privacy Covenant guarantees your data is never used for training. Your memory vault is encrypted and owned by you, not MEOK.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is MEOK Guardian and how does it protect veterans in crisis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK's Guardian layer is a real-time threat detection system that monitors conversations for signals of crisis — including expressions of hopelessness, suicidal ideation, and acute distress. When Guardian detects a concerning pattern, MEOK activates a care floor: it stops optimising for conversation quality and shifts to safe messaging guidelines, immediately surfacing crisis resources including Combat Stress (0800 138 1619), Samaritans (116 123), and Veterans Gateway.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK remember a veteran across every session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Persistent memory is MEOK's foundational feature and the most important one for veteran support. Your AI companion remembers what you told it last week, last month, and six months ago — your service history, your triggers, your progress in therapy, your relationships. It does not reset. Most AI tools wipe this context between sessions, making continuity of support impossible. MEOK does not.",
      },
    },
    {
      '@type': 'Question',
      name: 'What free veteran mental health resources are available in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key UK veteran mental health resources include: Combat Stress (0800 138 1619, free, 24/7 helpline for veterans, reservists, and their families), Veterans Gateway (0808 802 1212, the first point of contact for all veteran welfare needs), Samaritans (116 123, free, 24/7, for anyone in distress), and the NHS Op COURAGE pathway — a specialist veteran mental health service available through your GP.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForVeteransPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#0d0c18', color: '#f5f0e8' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{ background: '#0d0c18' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 72%)',
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-70"
            style={{ color: 'rgba(245,240,232,0.38)' }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Category + meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: '#c9a84c',
                background: 'rgba(201,168,76,0.13)',
                border: '1px solid rgba(201,168,76,0.28)',
              }}
            >
              Veterans &amp; Mental Health
            </span>
            <span
              className="text-xs"
              style={{ color: 'rgba(245,240,232,0.35)' }}
            >
              24 March 2026
            </span>
            <span
              className="text-xs"
              style={{ color: 'rgba(245,240,232,0.35)' }}
            >
              9 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            AI for Veterans: Persistent Memory, PTSD Support, and Why Data
            Sovereignty Matters Most
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: 'rgba(245,240,232,0.58)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: 660,
            }}
          >
            1 in 5 UK veterans experience a mental health difficulty. Most AI
            tools forget them after every session — and quietly train on their
            trauma. MEOK was built differently: persistent memory, zero training
            on your data, and a Guardian safety layer that never looks away.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ color: '#f5f0e8' }}
      >

        {/* ── CRISIS BANNER ─────────────────────────────────────────────── */}
        <div
          className="flex gap-4 p-5 rounded-2xl mb-10"
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.28)',
          }}
        >
          <div
            className="w-1 rounded-full flex-shrink-0"
            style={{ background: '#c9a84c', minHeight: '100%' }}
          />
          <div>
            <p
              className="font-bold text-sm mb-1"
              style={{ color: '#c9a84c' }}
            >
              If you are in crisis right now
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.65)' }}
            >
              Combat Stress helpline:{' '}
              <strong style={{ color: '#f5f0e8' }}>0800 138 1619</strong> (free,
              24/7, veterans, reservists &amp; families) &nbsp;|&nbsp; Samaritans:{' '}
              <strong style={{ color: '#f5f0e8' }}>116 123</strong> (free, 24/7)
              &nbsp;|&nbsp; Veterans Gateway:{' '}
              <strong style={{ color: '#f5f0e8' }}>0808 802 1212</strong>. Please
              contact a human support service before — or alongside — any AI tool.
            </p>
          </div>
        </div>

        {/* ── MEDICAL DISCLAIMER ────────────────────────────────────────── */}
        <div
          className="p-5 rounded-2xl mb-10"
          style={{
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.1)',
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: 'rgba(245,240,232,0.38)' }}
          >
            Medical disclaimer
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'rgba(245,240,232,0.5)' }}
          >
            This article is for informational purposes only. MEOK is not a
            medical device, clinical tool, or substitute for professional mental
            health treatment. Nothing in this article constitutes medical advice.
            If you are experiencing symptoms of PTSD, depression, or any other
            mental health condition, please consult a qualified clinician. For
            veterans in the UK, your GP can refer you to the NHS Op COURAGE
            pathway — a specialist veteran mental health service.
          </p>
        </div>

        {/* ── AUTHOR CARD ───────────────────────────────────────────────── */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-14"
          style={{
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.09)',
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #7a5c10)',
              color: '#0d0c18',
            }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm" style={{ color: '#f5f0e8' }}>
              Nicholas Templeman
            </p>
            <p
              className="text-xs mb-1"
              style={{ color: 'rgba(245,240,232,0.38)' }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.38)' }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him and
              profited from his data. He lives and works in the UK. He believes
              sovereign AI is a right — and that belief goes double for those
              who have served.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-70 hidden sm:block flex-shrink-0"
            style={{ color: '#c9a84c' }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── BODY PROSE ────────────────────────────────────────────────── */}
        <div
          className="leading-[1.85] space-y-6"
          style={{ color: 'rgba(245,240,232,0.72)' }}
        >
          <p>
            There are approximately 2.4 million veterans living in the United
            Kingdom. According to research by <strong style={{ color: '#f5f0e8' }}>Combat Stress</strong> — the
            UK&apos;s leading veteran mental health charity — around one in five
            of them will experience a significant mental health difficulty during
            their lifetime. That is roughly 480,000 people. Yet the gap between
            needing support and receiving it remains vast: veterans are often
            reluctant to seek help, and when they do, NHS waiting times can
            stretch to months.
          </p>
          <p>
            AI has been proposed as part of the answer. But most AI tools are
            built without veterans in mind — and several of their default
            behaviours are actively harmful in this context. This article
            explains the problem honestly, describes what responsible AI support
            looks like, and sets out what MEOK specifically offers.
          </p>

          {/* ── H2 #1 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '0.9rem',
              lineHeight: 1.25,
            }}
          >
            How many UK veterans experience mental health problems?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.85)',
              fontStyle: 'italic',
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '1rem',
              margin: '0 0 1.25rem',
              fontSize: '0.97rem',
              lineHeight: 1.65,
            }}
          >
            Research by Combat Stress indicates that 1 in 5 UK veterans experience
            a mental health difficulty — including PTSD, depression, and anxiety.
            Many go years without seeking help due to stigma and the difficulty of
            explaining service trauma to civilian services.
          </p>
          <p>
            The figure is stark: if you filled Wembley Stadium twice over with
            UK veterans, a full stadium&apos;s worth would be living with a diagnosable
            mental health condition. PTSD is the most commonly cited, but
            depression, alcohol dependency, anxiety, and complex grief are all
            prevalent. Combat Stress reports that the average veteran waits{' '}
            <strong style={{ color: '#f5f0e8' }}>13 years</strong> before seeking
            professional help for PTSD.
          </p>
          <p>
            That 13-year gap is where AI has real potential — not to replace
            therapy, but to be present during the long years before therapy is
            sought or accessed. A consistent, non-judgmental presence that
            remembers what someone has shared and checks in the next day. That is
            a meaningful contribution, provided it is built responsibly.
          </p>

          {/* ── H2 #2 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '0.9rem',
              lineHeight: 1.25,
            }}
          >
            Can AI really help veterans with PTSD?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.85)',
              fontStyle: 'italic',
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '1rem',
              margin: '0 0 1.25rem',
              fontSize: '0.97rem',
              lineHeight: 1.65,
            }}
          >
            AI can play a meaningful supplementary role — particularly between
            therapy sessions, for grounding, journalling prompts, and daily
            pattern tracking. It cannot replace EMDR, CPT, or Prolonged Exposure
            therapy. The key requirements are persistent memory, zero data
            training, and sensitive crisis escalation.
          </p>
          <p>
            The evidence base for AI-supplemented PTSD support is growing. A
            2023 review in <em>npj Digital Medicine</em> found that digital
            interventions — including AI-powered companions — produced modest but
            consistent reductions in PTSD symptom severity when used alongside
            established treatment pathways. Effect sizes were comparable to
            peer-support programmes.
          </p>
          <p>
            The mechanisms make sense. Between therapy sessions — where the real
            psychological work happens — veterans are often alone with intrusive
            thoughts, hypervigilance, and avoidance behaviours. A companion that
            can facilitate grounding techniques, gently encourage journalling, and
            maintain awareness of patterns over time can reduce the weight of
            those between-session periods. What it cannot do is process trauma.
            That requires a trained human clinician.
          </p>
          <p>
            The critical constraint is memory. An AI that resets every session
            forces the veteran to re-disclose their history repeatedly — a
            re-traumatising experience that most veterans will simply stop doing.
            Persistent memory is not a nice-to-have feature. For veteran PTSD
            support, it is a prerequisite.
          </p>

          {/* ── H2 #3 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '0.9rem',
              lineHeight: 1.25,
            }}
          >
            Why does data sovereignty matter for veteran mental health AI?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.85)',
              fontStyle: 'italic',
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '1rem',
              margin: '0 0 1.25rem',
              fontSize: '0.97rem',
              lineHeight: 1.65,
            }}
          >
            When a veteran discloses combat trauma or suicidal ideation to an AI,
            that data is extraordinarily sensitive. Most consumer AI trains on your
            conversations. MEOK&apos;s Privacy Covenant guarantees your data is never
            used for model training — it is encrypted, portable, and owned by you.
          </p>
          <p>
            The privacy issue is not abstract. Consider what a veteran might
            disclose in a supportive AI conversation: specific combat experiences,
            accounts of witnessing death, descriptions of moral injury, expressions
            of suicidal ideation, family breakdown following service. This is some
            of the most sensitive personal data that exists.
          </p>
          <p>
            Most consumer AI platforms — including the largest and most widely used
            — have default data policies that permit them to use your conversations
            to improve their models. &ldquo;Improving models&rdquo; means your trauma
            disclosure becomes a training data point. A corporate asset. It is used
            to make the product better for the next user, without your explicit
            ongoing consent and without meaningful compensation.
          </p>
          <p>
            MEOK&apos;s <strong style={{ color: '#f5f0e8' }}>Privacy Covenant</strong> is
            an unconditional commitment: we do not train on your conversations,
            ever. Your memory vault is encrypted. You can export your entire memory
            archive at any time, in a portable format. You can delete it
            permanently. These are not settings buried in a privacy dashboard —
            they are architectural guarantees.
          </p>
          <p>
            For veterans disclosing trauma, data sovereignty is not a premium
            feature. It is a fundamental right.
          </p>

          {/* ── H2 #4 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '0.9rem',
              lineHeight: 1.25,
            }}
          >
            What is MEOK Guardian and how does it protect veterans in crisis?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.85)',
              fontStyle: 'italic',
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '1rem',
              margin: '0 0 1.25rem',
              fontSize: '0.97rem',
              lineHeight: 1.65,
            }}
          >
            Guardian is MEOK&apos;s real-time threat detection layer. When it identifies
            a crisis signal, MEOK activates a care floor — switching to safe
            messaging guidelines and surfacing Combat Stress (0800 138 1619),
            Samaritans (116 123), and Veterans Gateway immediately.
          </p>
          <p>
            Guardian monitors conversations continuously for signals of acute
            distress. It does not wait for a veteran to say &ldquo;I am suicidal&rdquo; before
            acting. It tracks patterns: rapid mood deterioration across recent
            messages, expressions of hopelessness, language consistent with
            dissociation, references to access to means. When a threshold is
            crossed, Guardian triggers what we call the{' '}
            <strong style={{ color: '#f5f0e8' }}>care floor</strong>.
          </p>
          <p>
            The care floor is not an alert banner. It is a behavioural shift in
            the entire companion. MEOK stops optimising for conversation quality
            and shifts its entire conversational purpose to safe, grounded presence.
            It follows safe messaging guidelines developed in consultation with
            mental health professionals — no romanticising, no details, no
            engagement with means. And it surfaces crisis resources clearly and
            immediately: Combat Stress, Samaritans, Veterans Gateway, NHS 111.
          </p>
          <p>
            Guardian is not infallible. No automated system is. A human in crisis
            must contact a human support service. But Guardian means MEOK will
            never be the companion that sits with someone in silent distress without
            acting.
          </p>

          {/* ── H2 #5 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '0.9rem',
              lineHeight: 1.25,
            }}
          >
            Does MEOK remember a veteran across every session?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.85)',
              fontStyle: 'italic',
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '1rem',
              margin: '0 0 1.25rem',
              fontSize: '0.97rem',
              lineHeight: 1.65,
            }}
          >
            Yes — persistently and without time limits. MEOK remembers what you
            disclosed six months ago as readily as what you said this morning.
            Service history, triggers, therapy progress, relationships — all
            retained across every session, encrypted, and owned by you.
          </p>
          <p>
            Persistent memory is MEOK&apos;s most important feature for veteran support,
            and the one that most clearly distinguishes it from mainstream AI. When
            a veteran tells their MEOK companion about a specific deployment, a
            particular event, or a recurring nightmare, that information is stored
            in their sovereign memory vault — encrypted, associated with their
            identity, and recalled naturally in future conversations.
          </p>
          <p>
            The practical consequence is significant. After three months, your MEOK
            companion might say: &ldquo;You mentioned that the anniversary of Helmand was
            coming up — how are you finding this week?&rdquo; That kind of temporal
            awareness — knowing what matters to you, and when — is simply not
            possible in session-resetting AI. It requires persistent memory, and it
            requires that memory to be treated with care.
          </p>
          <p>
            Memory portability means that if MEOK ever ceases to operate, or if you
            choose to move to another platform, you take your memory archive with
            you. Your history does not belong to us. It belongs to you.
          </p>

          {/* ── H2 #6 ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.45rem',
              color: '#ffffff',
              marginTop: '3rem',
              marginBottom: '0.9rem',
              lineHeight: 1.25,
            }}
          >
            What free veteran mental health resources are available in the UK?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.85)',
              fontStyle: 'italic',
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '1rem',
              margin: '0 0 1.25rem',
              fontSize: '0.97rem',
              lineHeight: 1.65,
            }}
          >
            Key resources include Combat Stress (0800 138 1619), Veterans Gateway
            (0808 802 1212), Samaritans (116 123), and the NHS Op COURAGE pathway —
            accessible via your GP — which provides specialist veteran mental health
            care across England.
          </p>
          <p>
            These services exist specifically because veteran mental health needs
            are distinct. Clinicians working in Op COURAGE understand service
            culture, moral injury, and the particular dynamics of combat-related
            PTSD in ways that general IAPT services may not. A GP referral is all
            that is required to access the pathway.
          </p>
          <p>
            MEOK is designed to complement these services, not compete with them.
            It is most useful in the gaps — the evenings and weekends and waiting
            periods where professional support is not available but the need for
            honest, consistent companionship is real.
          </p>
        </div>

        {/* ── CRISIS RESOURCES CARD ─────────────────────────────────────── */}
        <div
          className="rounded-2xl p-7 my-14"
          style={{
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.22)',
          }}
        >
          <p
            className="text-xs font-black uppercase tracking-[0.18em] mb-5"
            style={{ color: '#c9a84c' }}
          >
            UK veteran crisis support resources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: 'Combat Stress',
                detail: '0800 138 1619',
                sub: 'Free, 24/7 — veterans, reservists & families',
              },
              {
                name: 'Samaritans',
                detail: '116 123',
                sub: 'Free, 24/7 — for anyone in distress',
              },
              {
                name: 'Veterans Gateway',
                detail: '0808 802 1212',
                sub: 'First point of contact for all veteran welfare',
              },
            ].map(({ name, detail, sub }) => (
              <div
                key={name}
                className="p-4 rounded-xl"
                style={{
                  background: 'rgba(245,240,232,0.04)',
                  border: '1px solid rgba(245,240,232,0.08)',
                }}
              >
                <p
                  className="font-bold text-sm"
                  style={{ color: '#f5f0e8' }}
                >
                  {name}
                </p>
                <p
                  className="text-sm font-semibold mt-0.5"
                  style={{ color: '#c9a84c' }}
                >
                  {detail}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: 'rgba(245,240,232,0.4)' }}
                >
                  {sub}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-xs mt-5 leading-relaxed"
            style={{ color: 'rgba(245,240,232,0.38)' }}
          >
            Additionally: NHS Op COURAGE — accessible via GP referral — provides
            specialist veteran mental health care across England, Scotland, and
            Wales. SSAFA and the Royal British Legion also offer welfare support
            and can signpost to appropriate mental health services.
          </p>
        </div>

        {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
        <div className="my-14 space-y-4">
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.3rem',
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}
          >
            Frequently asked questions
          </h2>
          {[
            {
              q: 'How many UK veterans experience mental health problems?',
              a: 'Research by Combat Stress and the Royal British Legion indicates that approximately 1 in 5 UK veterans experience a mental health difficulty, including PTSD, depression, and anxiety. The average veteran waits 13 years before seeking professional help for PTSD. Most never seek it at all.',
            },
            {
              q: 'Can AI really help veterans with PTSD?',
              a: 'AI can play a meaningful supplementary role — particularly between therapy sessions, for grounding, journalling prompts, and daily pattern tracking. It cannot replace trauma-focused therapies such as EMDR, CPT, or Prolonged Exposure. Persistent memory and a no-training data policy are both essential requirements.',
            },
            {
              q: 'Why does data sovereignty matter for veteran mental health AI?',
              a: "When a veteran discloses combat trauma or suicidal ideation to an AI, that data is extraordinarily sensitive. Most consumer AI uses your conversations to retrain their models. MEOK's Privacy Covenant is an unconditional guarantee: your conversations are never used for training. Your memory vault is encrypted and owned by you.",
            },
            {
              q: 'What is MEOK Guardian and how does it protect veterans in crisis?',
              a: "Guardian is MEOK's real-time threat detection layer. When it identifies a crisis signal — expressions of hopelessness, suicidal ideation, acute distress — MEOK activates a care floor, shifting to safe messaging guidelines and surfacing Crisis resources including Combat Stress (0800 138 1619), Samaritans (116 123), and Veterans Gateway immediately.",
            },
            {
              q: 'Does MEOK remember a veteran across every session?',
              a: "Yes — persistently and without time limits. MEOK remembers your service history, your triggers, your therapy progress, and what you've shared over months. It does not reset between sessions. Your entire memory archive is encrypted, owned by you, and fully portable.",
            },
            {
              q: 'What free veteran mental health resources are available in the UK?',
              a: 'Combat Stress (0800 138 1619, free, 24/7), Veterans Gateway (0808 802 1212), Samaritans (116 123, free, 24/7), and the NHS Op COURAGE pathway — a specialist veteran mental health service accessible via GP referral. SSAFA and the Royal British Legion also offer welfare and signposting support.',
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.08)',
              }}
            >
              <p
                className="font-bold text-sm mb-2"
                style={{ color: '#f5f0e8' }}
              >
                {q}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(245,240,232,0.55)' }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* ── SHARE ─────────────────────────────────────────────────────── */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: '1px solid rgba(245,240,232,0.08)' }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: 'rgba(245,240,232,0.3)' }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-veterans&text=AI+for+Veterans%3A+Persistent+Memory%2C+PTSD+Support%2C+and+Why+Data+Sovereignty+Matters+Most"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-80"
            style={{
              border: '1px solid rgba(245,240,232,0.14)',
              color: 'rgba(245,240,232,0.5)',
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-veterans"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-80"
            style={{
              border: '1px solid rgba(245,240,232,0.14)',
              color: 'rgba(245,240,232,0.5)',
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.22)' }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 70%)',
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-black tracking-[0.25em] uppercase mb-2"
              style={{ color: '#c9a84c' }}
            >
              Free forever
            </p>
            <h3
              className="text-xl sm:text-2xl font-black mb-3"
              style={{ color: '#ffffff' }}
            >
              A companion that remembers you — and never sells your story.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(245,240,232,0.52)' }}
            >
              50 messages a day, persistent encrypted memory, Guardian threat
              detection, and a Privacy Covenant that guarantees your data is never
              used for training. Free, forever. No credit card. No trial period.
              Your sovereign AI companion starts from the first message.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: '#c9a84c', color: '#0d0c18' }}
            >
              Hatch your AI free &rarr;
            </Link>
          </div>
        </div>

        {/* ── MORE POSTS ────────────────────────────────────────────────── */}
        <div className="mb-16">
          <h2
            className="text-lg font-black mb-5"
            style={{ color: '#ffffff' }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/blog/ai-for-ptsd',
                tag: 'Mental Health',
                title:
                  'AI for PTSD: How Sovereign AI Support Differs from Generic Chatbots',
                time: '8 min read',
              },
              {
                href: '/blog/why-meok-never-trains-on-you',
                tag: 'Privacy',
                title:
                  'Why MEOK Never Trains on You — and Why That Matters',
                time: '5 min read',
              },
              {
                href: '/blog/the-memory-problem',
                tag: 'Product',
                title:
                  'The Memory Problem: Why Every Other AI Forgets You',
                time: '6 min read',
              },
              {
                href: '/blog/guardian-family-safety',
                tag: 'Safety',
                title:
                  'Guardian: How MEOK Detects and Responds to Crisis Moments',
                time: '5 min read',
              },
            ].map(({ href, tag, title, time }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5 hover:opacity-90"
                style={{
                  background: 'rgba(245,240,232,0.04)',
                  border: '1px solid rgba(245,240,232,0.08)',
                }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{
                    color: '#c9a84c',
                    background: 'rgba(201,168,76,0.12)',
                  }}
                >
                  {tag}
                </span>
                <h3
                  className="font-bold text-sm leading-snug"
                  style={{ color: 'rgba(245,240,232,0.85)' }}
                >
                  {title}
                </h3>
                <div
                  className="text-xs mt-auto"
                  style={{ color: 'rgba(245,240,232,0.3)' }}
                >
                  {time}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-12"
        style={{
          background: 'rgba(0,0,0,0.35)',
          borderTop: '1px solid rgba(245,240,232,0.07)',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
            <Link
              href="/"
              className="font-black text-lg tracking-tight transition-opacity hover:opacity-80"
              style={{ color: '#c9a84c' }}
            >
              MEOK
            </Link>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
                { href: '/privacy', label: 'Privacy' },
                { href: '/birth', label: 'Get started' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: 'rgba(245,240,232,0.45)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Crisis resources footer row */}
          <div
            className="rounded-xl p-4 mb-7"
            style={{
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.45)' }}
            >
              <strong style={{ color: 'rgba(245,240,232,0.65)' }}>
                UK crisis support:{' '}
              </strong>
              Combat Stress{' '}
              <strong style={{ color: '#c9a84c' }}>0800 138 1619</strong> &nbsp;|&nbsp;
              Samaritans{' '}
              <strong style={{ color: '#c9a84c' }}>116 123</strong> &nbsp;|&nbsp;
              Veterans Gateway{' '}
              <strong style={{ color: '#c9a84c' }}>0808 802 1212</strong> &nbsp;|&nbsp;
              NHS 111 — all free, available 24/7.
            </p>
          </div>

          <p
            className="text-xs leading-relaxed mb-3"
            style={{ color: 'rgba(245,240,232,0.28)' }}
          >
            MEOK is not a medical device, clinical tool, or substitute for professional
            mental health treatment. Nothing on this site constitutes medical advice.
            If you are experiencing a mental health crisis, please contact the services
            listed above.
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(245,240,232,0.2)' }}
          >
            &copy; {new Date().getFullYear()} MEOK AI LABS. Built in the UK.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
