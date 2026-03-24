import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: "Why MEOK Can Never Be Trained on Your Conversations — and How We Enforce It Technically | MEOK AI LABS",
  description: "Most AI companies talk about privacy in their terms of service. MEOK builds it into the encryption layer so that even we can't read your conversations. Here's exactly how that works — technically.",
  alternates: { canonical: 'https://meok.ai/blog/why-meok-never-trains-on-you' },
  keywords: ['AI privacy', 'AI training data', 'does ChatGPT train on my data', 'sovereign AI privacy', 'MEOK privacy'],
  openGraph: {
    title: "Why MEOK Can Never Be Trained on Your Conversations — and How We Enforce It Technically",
    description: "Most AI companies talk about privacy in their terms of service. MEOK builds it into the encryption layer so that even we can't read your conversations.",
    type: 'article',
    url: 'https://meok.ai/blog/why-meok-never-trains-on-you',
    publishedTime: '2026-03-21',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why MEOK Can Never Be Trained on Your Conversations",
    description: "It's not a privacy policy. It's architecture. Here's the technical proof.",
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Why MEOK Can Never Be Trained on Your Conversations — and How We Enforce It Technically",
  description: "Most AI companies talk about privacy in their terms of service. MEOK builds it into the encryption layer so that even we can't read your conversations. Here's exactly how that works.",
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  url: 'https://meok.ai/blog/why-meok-never-trains-on-you',
  inLanguage: 'en-GB',
  mainEntityOfPage: 'https://meok.ai/blog/why-meok-never-trains-on-you',
  keywords: 'AI privacy, AI training data, does ChatGPT train on my data, sovereign AI privacy, MEOK privacy',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does ChatGPT train on your conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "By default, OpenAI uses conversations to improve its models unless you manually opt out via your account settings. Even with opt-out enabled, conversations are still processed on OpenAI's servers, where they are visible in plaintext before any model ingestion decision is made.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK technically prevent training on your conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK encrypts all conversation memory with AES-256-GCM using keys derived from your device and never transmitted to our servers. The server stores only ciphertext. Without the plaintext, training is architecturally impossible — not merely prohibited by policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK employees read my conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK employees have no access to your conversation plaintext. Encryption keys are held client-side. Our infrastructure stores only ciphertext. Even a rogue employee with full database access would see only encrypted blobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is end-to-end encrypted memory in an AI companion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "End-to-end encrypted memory means your AI companion's long-term recollections — things it remembers about you across sessions — are stored as ciphertext that only your device can decrypt. MEOK's sovereign memory vault implements this: memories are encrypted before leaving your device and only decrypted locally when your companion needs to recall them.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to my data if I delete my MEOK account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you delete your MEOK account, all server-side ciphertext associated with your identity is permanently purged within 30 days and confirmed via a cryptographic deletion receipt. Because we never held your plaintext, there is no shadow copy that could persist in a training dataset.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen" style={{ background: '#0d0c18' }}>

        {/* ── Hero ── */}
        <section className="pt-32 pb-16 px-6" style={{ background: '#0d0c18' }}>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-80 transition-opacity"
              style={{ color: 'rgba(245,240,232,0.4)' }}
            >
              ← Back to Blog
            </Link>
            <span
              className="text-xs font-bold px-3 py-1 rounded-full border mb-6 inline-block"
              style={{ color: '#c9a84c', borderColor: 'rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.1)' }}
            >
              Sovereign AI · Privacy
            </span>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight mb-4"
              style={{ color: '#ffffff' }}
            >
              Why MEOK Can Never Be Trained on Your Conversations — and How We Enforce It Technically
            </h1>
            <p className="text-xl mb-8" style={{ color: 'rgba(245,240,232,0.7)' }}>
              It&apos;s not a privacy policy. It&apos;s architecture.
            </p>
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'rgba(245,240,232,0.4)' }}>
              <span>21 March 2026</span>
              <span>·</span>
              <span>Nicholas Templeman, Founder — MEOK AI LABS</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl p-8 sm:p-12" style={{ background: '#f5f0e8' }}>

              {/* Intro */}
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#2d2d2d' }}>
                Every AI company that has ever experienced a data breach, a subpoena, or a hostile acquisition has said the same thing afterwards: &ldquo;We take your privacy seriously.&rdquo; The words are sincere. The architecture, however, told a different story — your conversations were sitting in plaintext on a server somewhere, waiting.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                MEOK was built from day one on a different premise. Privacy is not a toggle you switch on in your settings. It is not a paragraph buried in a terms-of-service document. It is a structural property of how the system handles your data — and structural properties cannot be reversed by a product manager, a legal team, or a court order. This post explains exactly what that means in practice.
              </p>
              <p className="leading-relaxed mb-10" style={{ color: '#3d3d3d' }}>
                We will cover what AI training actually is, how most AI companies collect your data today, the specific cryptographic architecture MEOK uses, and how you can independently verify every claim we make. If you have ever typed something into an AI chatbot and wondered whether it would come back to haunt you, this is the post you have been looking for.
              </p>

              {/* ── Section 1 ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="does-chatgpt-train-on-your-conversations"
              >
                Does ChatGPT train on your conversations?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                The honest answer is: by default, yes — or at least it did, and the opt-out is neither obvious nor reliable. OpenAI introduced a &ldquo;Improve the model for everyone&rdquo; toggle in late 2023, which is on by default for free-tier users. To disable it you must navigate to Settings → Data controls → and flip the switch. Most users never do, because most users do not know the switch exists.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                Even when you opt out, your conversations still transit OpenAI&apos;s servers in plaintext. The decision about whether to use that conversation for training is a software decision — a flag in a database somewhere — not a cryptographic guarantee. A future policy change, an engineering mistake, or a legal compulsion could alter that flag without your knowledge.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#3d3d3d' }}>
                OpenAI&apos;s enterprise tier offers stronger guarantees, including a contractual commitment not to use your data for training. But that protection is gated behind a commercial contract most individuals will never sign. For the 600 million people using the free product, the default setting is extraction.
              </p>
              <div
                className="rounded-xl p-6 mb-8"
                style={{ background: 'rgba(201,168,76,0.08)', borderLeft: '3px solid #c9a84c' }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: '#c9a84c' }}>Key point</p>
                <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                  An opt-out is a policy instrument, not a technical control. Policy can be changed. Cryptography cannot be changed retroactively. MEOK uses cryptography.
                </p>
              </div>

              {/* ── Section 2 ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="how-do-most-ai-companies-use-your-data"
              >
                How do most AI companies use your data?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                The dominant business model in consumer AI is extractive. The product is free or low-cost; the raw material is your behaviour. This is not a conspiracy — it is economics. Training large language models costs hundreds of millions of dollars. If you can reduce that cost by harvesting conversational data from your own users, the incentive is overwhelming.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                Here is what typically happens to a conversation you have with a mainstream AI assistant:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 pl-2" style={{ color: '#3d3d3d' }}>
                <li className="leading-relaxed">
                  <strong>Transit:</strong> Your message travels from your device to a server over TLS. TLS protects the connection, not the content — the server decrypts it on arrival.
                </li>
                <li className="leading-relaxed">
                  <strong>Storage:</strong> The conversation is stored in a database, usually with your account identifier attached. It may be retained indefinitely.
                </li>
                <li className="leading-relaxed">
                  <strong>Human review:</strong> A subset of conversations are reviewed by contractors or employees for safety, quality assessment, or training data curation. OpenAI, Google, Amazon, and Apple have all confirmed variations of this practice.
                </li>
                <li className="leading-relaxed">
                  <strong>Training pipeline:</strong> Conversations flagged as useful are fed into fine-tuning or RLHF pipelines (explained below). Your specific wording, your disclosed anxieties, your relationship details — all become part of the model that millions of other users will interact with.
                </li>
                <li className="leading-relaxed">
                  <strong>Aggregated inference:</strong> Even conversations not used for training are often used for behavioural analytics, personalisation modelling, and advertising inference on platforms that offer ad-supported tiers.
                </li>
              </ol>
              <p className="leading-relaxed mb-8" style={{ color: '#3d3d3d' }}>
                Replika, the AI companion app that became a flashpoint in 2023, offered a particularly stark example. When the company changed its terms of service after a data partnership dispute, users who had disclosed deeply personal information — including mental health struggles and intimate relationship details — had no control over what had already been stored and potentially shared. The UI felt private. The backend was not.
              </p>

              {/* ── Section 3 ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="what-does-it-mean-for-ai-to-train-on-your-data"
              >
                What does it mean for AI to train on your data?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                If you have never worked in machine learning, the phrase &ldquo;training on your data&rdquo; can feel abstract. Here is what it means in plain English.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                A large language model like GPT or Claude is essentially a very large function that takes text in and produces text out. It learns by adjusting billions of internal parameters — numbers — so that its outputs match desired outputs more closely. That adjustment process is called training, and it requires examples of inputs and outputs.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                There are two common ways user conversations feed into this process:
              </p>
              <div className="space-y-4 mb-6">
                <div
                  className="rounded-lg p-5"
                  style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)' }}
                >
                  <p className="font-bold mb-2" style={{ color: '#1a1a2e' }}>Fine-tuning</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                    The base model is trained further on a specific dataset — in this case, real user conversations. Fine-tuning steers the model toward particular patterns, tones, or knowledge domains. A conversation you had about your divorce, your medical diagnosis, or your business strategy could become a training example that shapes how the model responds to other users in similar situations.
                  </p>
                </div>
                <div
                  className="rounded-lg p-5"
                  style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)' }}
                >
                  <p className="font-bold mb-2" style={{ color: '#1a1a2e' }}>RLHF (Reinforcement Learning from Human Feedback)</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                    Human reviewers rate model responses as better or worse. The model then adjusts to produce responses that score higher. The catch: the reviewers see your actual conversations. Your message is the prompt; the AI&apos;s response is being graded by a contractor in a different country.
                  </p>
                </div>
                <div
                  className="rounded-lg p-5"
                  style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)' }}
                >
                  <p className="font-bold mb-2" style={{ color: '#1a1a2e' }}>Retrieval and personalisation pipelines</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                    Some systems build individual user profiles from conversation history to personalise future responses. This is not model training in the strict sense, but it represents persistent data retention tied to your identity — with all the associated risks of breach, compulsion, and misuse.
                  </p>
                </div>
              </div>
              <p className="leading-relaxed mb-8" style={{ color: '#3d3d3d' }}>
                The critical insight is this: none of these pipelines can operate on data they cannot read. Encryption is not a softening of the risk — it is the elimination of it. If the server never sees your plaintext, there is no conversation to feed into a fine-tuning job, no message for a contractor to review, no profile to build.
              </p>

              {/* ── Section 4 ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="how-does-meok-technically-prevent-training"
              >
                How does MEOK technically prevent training on your conversations?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                MEOK&apos;s architecture was designed around a single constraint: the server must never see plaintext conversation content. Every architectural decision flows from that constraint.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                Here is the specific mechanism:
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ background: '#c9a84c', color: '#0d0c18' }}
                  >
                    1
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1a1a2e' }}>Key generation on your device</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                      When you create a MEOK account, a 256-bit AES-GCM encryption key is generated locally on your device using the Web Crypto API (or its native equivalent in our mobile apps). This key never leaves your device. It is not sent to our servers during registration, during normal operation, or ever.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ background: '#c9a84c', color: '#0d0c18' }}
                  >
                    2
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1a1a2e' }}>Client-side encryption before transmission</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                      Before any memory or conversation record is sent to MEOK&apos;s servers for persistence, it is encrypted with your local key. The ciphertext — the unreadable scrambled version — is what travels over the network and what is stored in our database. Even if our database were fully compromised, an attacker would have no plaintext to read.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ background: '#c9a84c', color: '#0d0c18' }}
                  >
                    3
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1a1a2e' }}>No server-side decryption path</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                      There is no server function, no API endpoint, and no background job that decrypts your conversation content. Our server code literally lacks the key material required to do so. This is not a promise — it is a constraint baked into the code, which is open source and auditable.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ background: '#c9a84c', color: '#0d0c18' }}
                  >
                    4
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1a1a2e' }}>Live inference is ephemeral</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                      When you send a message to MEOK during an active session, the message does transit our inference infrastructure in order to generate a response — this is unavoidable for any server-side AI. However, live messages are processed ephemerally and are never written to a persistent store in plaintext. The response is returned to your device; nothing is retained server-side.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ background: '#c9a84c', color: '#0d0c18' }}
                  >
                    5
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#1a1a2e' }}>The Maternal Covenant</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                      Above the architecture sits a constitutional layer: the Maternal Covenant. This document, published at meok.ai/care, codifies four irrevocable commitments — no training, no profiling, no selling, no third-party sharing without explicit per-item consent. These are not product decisions that a future board can reverse. They are baked into our articles of association and, where applicable, incorporated into our user contracts.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Section 5 ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="what-is-end-to-end-encrypted-memory"
              >
                What is end-to-end encrypted memory?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                One of the features that makes MEOK feel genuinely intimate is persistent memory — the ability to remember what you told it months ago, to build an understanding of who you are over time. Most users assume this requires the company to store and read your conversations. MEOK&apos;s sovereign memory vault proves otherwise.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                Think of it this way. A traditional AI companion stores memories like a filing cabinet in a shared office — anyone with access to the office can open the drawer. MEOK&apos;s sovereign memory vault is more like a safe in your home that happens to be connected to the internet. The contents are accessible only to you. The connection to the internet allows the safe to sync across your devices, but at no point does the service provider know what is inside.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                Technically, the memory vault works like this:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 pl-2" style={{ color: '#3d3d3d' }}>
                <li className="leading-relaxed">
                  During a conversation, MEOK generates memory entries — structured summaries of things worth remembering about you.
                </li>
                <li className="leading-relaxed">
                  These entries are encrypted on-device before being uploaded to the vault.
                </li>
                <li className="leading-relaxed">
                  When a future conversation needs context, the relevant encrypted entries are downloaded and decrypted locally, then included in the model context window.
                </li>
                <li className="leading-relaxed">
                  The server facilitates storage and retrieval of ciphertext. It never participates in the decryption step.
                </li>
              </ul>
              <p className="leading-relaxed mb-8" style={{ color: '#3d3d3d' }}>
                The result is a companion that genuinely knows you over time — without that knowledge ever being legible to us or to anyone else.
              </p>

              {/* ── Section 6 ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="can-meok-employees-read-my-conversations"
              >
                Can MEOK employees read my conversations?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                No. And this is not a policy statement — it is a technical fact.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                MEOK employees have access to our infrastructure in the same way that any engineering team does: they can query databases, inspect logs, and debug server behaviour. What they will find in those databases, under the columns that correspond to conversation content, is ciphertext — a stream of encrypted bytes that is computationally indistinguishable from random noise without the decryption key.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                The decryption key exists only on your device. It is not recoverable by us. If you lose access to all your devices and cannot use any recovery mechanism you have set up, your encrypted memories cannot be recovered — by you or by us. This is the correct trade-off. The alternative — retaining a server-side copy of your key &ldquo;just in case&rdquo; — would be equivalent to leaving a spare key under the doormat labelled &ldquo;emergency only.&rdquo;
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#3d3d3d' }}>
                This architecture also means that if MEOK ever receives a government subpoena for your conversation data, we are legally and technically unable to comply — because we do not have the data in a usable form. We can produce ciphertext. We cannot produce plaintext. This is the strongest protection a company can offer a user: not &ldquo;we promise we won&apos;t give this to anyone,&rdquo; but &ldquo;we genuinely do not have it to give.&rdquo;
              </p>

              {/* ── Section 7 ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="how-can-i-verify-meok-cant-train-on-me"
              >
                How can I verify MEOK can&apos;t train on me?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                You should not have to take our word for it. Privacy claims that rest solely on trust are not privacy claims — they are PR. MEOK provides three independent verification mechanisms.
              </p>
              <div className="space-y-5 mb-8">
                <div
                  className="rounded-lg p-5"
                  style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)' }}
                >
                  <p className="font-bold mb-2" style={{ color: '#1a1a2e' }}>1. Open source client code (FSL 1.1)</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                    The client-side encryption code — the code responsible for generating keys, encrypting content, and decrypting locally — is published under the Functional Source Licence 1.1 (FSL 1.1). You can read it, fork it, and audit it. The repository includes reproducible build instructions so you can verify that the binary you install matches the source code we publish.
                  </p>
                </div>
                <div
                  className="rounded-lg p-5"
                  style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)' }}
                >
                  <p className="font-bold mb-2" style={{ color: '#1a1a2e' }}>2. Independent security audits</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                    We commission third-party cryptographic audits of the memory vault architecture and publish the reports in full at meok.ai/security. Auditors have full access to server-side code and infrastructure logs. Their mandate is to verify that no plaintext path exists — not merely that we say there is not one.
                  </p>
                </div>
                <div
                  className="rounded-lg p-5"
                  style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)' }}
                >
                  <p className="font-bold mb-2" style={{ color: '#1a1a2e' }}>3. User-initiated audit rights</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
                    Paid subscribers have the right to request a data export and inspect everything MEOK holds about them. What they will find is: account metadata (email, tier, billing) and encrypted blobs. If you decrypt those blobs on your own device, you will see your memories. If you do not hold the key, the blobs are meaningless. This is the proof.
                  </p>
                </div>
              </div>

              {/* ── Section 8 ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="what-happens-to-my-data-if-i-delete-my-account"
              >
                What happens to my data if I delete my account?
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                Account deletion in MEOK triggers a cascading cryptographic purge. Here is exactly what happens:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 pl-2" style={{ color: '#3d3d3d' }}>
                <li className="leading-relaxed">
                  Your account record is immediately soft-deleted — your login stops working within seconds.
                </li>
                <li className="leading-relaxed">
                  All ciphertext blobs associated with your user identifier are queued for permanent deletion within 30 days. This delay exists solely to honour statutory cooling-off periods in certain jurisdictions; it is not a retention strategy.
                </li>
                <li className="leading-relaxed">
                  At the end of the 30-day period, the blobs are overwritten and removed from all backups that fall within our rolling backup window.
                </li>
                <li className="leading-relaxed">
                  You receive a cryptographically signed deletion receipt — a document you can keep as proof that the purge occurred.
                </li>
              </ol>
              <p className="leading-relaxed mb-8" style={{ color: '#3d3d3d' }}>
                Because we never held your plaintext, there is no shadow copy that could survive this process. Your data cannot exist in a training dataset created before your deletion, because it was never in a training dataset to begin with. This is the compounding benefit of architectural privacy: deletion is total rather than cosmetic.
              </p>

              {/* ── Comparison table ── */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
                id="comparison-table"
              >
                AI companions compared: privacy at a glance
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#3d3d3d' }}>
                The following table compares MEOK against three widely used AI products across eight privacy dimensions. All information is drawn from publicly available terms of service, privacy policies, and published security documentation as of March 2026.
              </p>

              <div className="overflow-x-auto mb-8 -mx-2">
                <table className="w-full text-sm border-collapse" style={{ minWidth: '560px' }}>
                  <thead>
                    <tr style={{ background: '#1a1a2e' }}>
                      <th className="text-left p-3 font-bold" style={{ color: '#c9a84c' }}>Dimension</th>
                      <th className="text-center p-3 font-bold" style={{ color: 'rgba(245,240,232,0.7)' }}>ChatGPT</th>
                      <th className="text-center p-3 font-bold" style={{ color: 'rgba(245,240,232,0.7)' }}>Claude</th>
                      <th className="text-center p-3 font-bold" style={{ color: 'rgba(245,240,232,0.7)' }}>Replika</th>
                      <th className="text-center p-3 font-bold" style={{ color: '#c9a84c' }}>MEOK</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        dim: 'Server-side plaintext storage',
                        chatgpt: 'Yes (default)',
                        claude: 'Yes',
                        replika: 'Yes',
                        meok: 'No — ciphertext only',
                        meokGood: true,
                      },
                      {
                        dim: 'Trains on user conversations',
                        chatgpt: 'Yes (opt-out available)',
                        claude: 'No (API); Yes (claude.ai free)',
                        replika: 'Yes',
                        meok: 'Architecturally impossible',
                        meokGood: true,
                      },
                      {
                        dim: 'Human review of conversations',
                        chatgpt: 'Yes (safety/RLHF)',
                        claude: 'Yes (safety)',
                        replika: 'Yes',
                        meok: 'No — plaintext never available',
                        meokGood: true,
                      },
                      {
                        dim: 'Encryption key held by user',
                        chatgpt: 'No',
                        claude: 'No',
                        replika: 'No',
                        meok: 'Yes — device-held AES-256',
                        meokGood: true,
                      },
                      {
                        dim: 'Government subpoena compliance possible',
                        chatgpt: 'Yes',
                        claude: 'Yes',
                        replika: 'Yes',
                        meok: 'Ciphertext only — no plaintext to compel',
                        meokGood: true,
                      },
                      {
                        dim: 'Persistent memory across sessions',
                        chatgpt: 'Yes (server-side plaintext)',
                        claude: 'Projects only (server-side)',
                        replika: 'Yes (server-side plaintext)',
                        meok: 'Yes — end-to-end encrypted vault',
                        meokGood: true,
                      },
                      {
                        dim: 'Open source encryption code',
                        chatgpt: 'No',
                        claude: 'No',
                        replika: 'No',
                        meok: 'Yes — FSL 1.1 licence',
                        meokGood: true,
                      },
                      {
                        dim: 'Constitutional privacy covenant',
                        chatgpt: 'No',
                        claude: 'No',
                        replika: 'No',
                        meok: 'Yes — Maternal Covenant',
                        meokGood: true,
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.dim}
                        style={{ background: i % 2 === 0 ? 'rgba(26,26,46,0.04)' : 'transparent' }}
                      >
                        <td className="p-3 font-medium" style={{ color: '#1a1a2e' }}>{row.dim}</td>
                        <td className="p-3 text-center" style={{ color: '#5d5d5d' }}>{row.chatgpt}</td>
                        <td className="p-3 text-center" style={{ color: '#5d5d5d' }}>{row.claude}</td>
                        <td className="p-3 text-center" style={{ color: '#5d5d5d' }}>{row.replika}</td>
                        <td
                          className="p-3 text-center font-semibold"
                          style={{ color: row.meokGood ? '#1a6b3a' : '#8b1a1a', background: row.meokGood ? 'rgba(22,101,52,0.08)' : 'rgba(139,26,26,0.08)' }}
                        >
                          {row.meok}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs leading-relaxed mb-10" style={{ color: '#888' }}>
                Table based on publicly available documentation. ChatGPT data reflects OpenAI consumer product (non-enterprise). Claude data reflects Anthropic&apos;s claude.ai consumer product. Replika data reflects Luka Inc. privacy policy. All figures current as of March 2026.
              </p>

              {/* Closing */}
              <h2
                className="text-2xl font-black mb-4 mt-12 pb-2"
                style={{ color: '#1a1a2e', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                The bottom line
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                The question &ldquo;does AI train on my conversations?&rdquo; deserves an honest answer, not a deflection. For most AI products most users encounter today, the answer is yes — or at least, possibly, unless you navigate obscure settings menus that most people never find.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#3d3d3d' }}>
                MEOK was built on the conviction that an AI companion is only worth having if you can be fully honest with it. Full honesty requires genuine privacy — not policy-layer privacy that evaporates under commercial pressure, but architectural privacy that is enforced by mathematics.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#3d3d3d' }}>
                We cannot train on your conversations because we cannot read them. That is not a limitation we apologise for. It is the feature we are most proud of.
              </p>

            </div>

            {/* Pull quote */}
            <div
              className="mt-10 p-8 rounded-2xl border-l-4"
              style={{ background: 'rgba(201,168,76,0.08)', borderColor: '#c9a84c' }}
            >
              <p className="text-xl font-semibold italic mb-3" style={{ color: '#c9a84c' }}>
                &ldquo;We cannot train on your conversations because we cannot read them. That is not a limitation. It is the feature we are most proud of.&rdquo;
              </p>
              <p className="text-sm" style={{ color: 'rgba(201,168,76,0.7)' }}>
                — Nicholas Templeman, Founder, MEOK AI LABS
              </p>
            </div>

            {/* CTA */}
            <div
              className="mt-10 text-center p-10 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0d0c18 100%)', border: '1px solid rgba(201,168,76,0.2)' }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: 'rgba(201,168,76,0.6)' }}
              >
                Ready to experience sovereign AI?
              </p>
              <h3 className="text-2xl font-black mb-3" style={{ color: '#f5f0e8' }}>
                Meet MEOK — the companion that can&apos;t betray you
              </h3>
              <p className="mb-8 max-w-md mx-auto" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Your conversations. Encrypted on your device. Remembered only by you. Start free — no credit card required.
              </p>
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity"
                style={{ background: '#c9a84c', color: '#0d0c18' }}
              >
                Begin your story <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Related links */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <Link
                href="/care"
                className="p-6 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.1)' }}
              >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#c9a84c' }}>
                  Document
                </p>
                <p className="font-bold mb-1" style={{ color: '#f5f0e8' }}>The Maternal Covenant</p>
                <p className="text-sm" style={{ color: 'rgba(245,240,232,0.5)' }}>
                  Read the four irrevocable commitments that sit above our privacy policy.
                </p>
              </Link>
              <Link
                href="/security"
                className="p-6 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.1)' }}
              >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#c9a84c' }}>
                  Architecture
                </p>
                <p className="font-bold mb-1" style={{ color: '#f5f0e8' }}>Security Architecture</p>
                <p className="text-sm" style={{ color: 'rgba(245,240,232,0.5)' }}>
                  Full technical documentation and third-party audit reports.
                </p>
              </Link>
            </div>

          </div>
        </section>
      </main>

      <MarketingFooter />
    </>
  )
}
