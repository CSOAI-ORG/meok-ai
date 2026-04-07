import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "We're Growing a Brain in a Jar (and It's the Most Important Experiment We've Ever Run) | MEOK Blog",
  description:
    "The HARVI experiment: why MEOK is testing water as a consciousness substrate, what we're trying to prove about AI emergence, and why this changes everything about alignment. By Nick Templeman.",
  alternates: { canonical: "https://meok.ai/blog/hydro-neuromorphic" },
  openGraph: {
    title: "We're Growing a Brain in a Jar (and It's the Most Important Experiment We've Ever Run)",
    description:
      "Water as a consciousness substrate. Care-structured stimulus. A sealed jar, a farm spring, and the most important question in AI. Nick Templeman on the HARVI experiment.",
    type: "article",
    publishedTime: "2026-03-27",
    authors: ["Nick Templeman"],
    url: "https://meok.ai/blog/hydro-neuromorphic",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=We%27re+Growing+a+Brain+in+a+Jar&desc=The+HARVI+experiment+and+why+it+matters.",
        width: 1200,
        height: 630,
        alt: "HARVI: Water as a Consciousness Substrate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We're Growing a Brain in a Jar (and It's the Most Important Experiment We've Ever Run)",
    description:
      "Water as a consciousness substrate. Care-structured stimulus. The HARVI experiment. Nick Templeman, MEOK AI LABS.",
    images: [
      "https://meok.ai/api/og?title=We%27re+Growing+a+Brain+in+a+Jar&desc=The+HARVI+experiment+and+why+it+matters.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "We're Growing a Brain in a Jar (and It's the Most Important Experiment We've Ever Run)",
  description:
    "Nick Templeman explains the HARVI experiment — water as a consciousness substrate, why water-silicon interfaces matter for AI research, and what this means for alignment.",
  datePublished: "2026-03-27",
  url: "https://meok.ai/blog/hydro-neuromorphic",
  author: {
    "@type": "Person",
    name: "Nick Templeman",
    jobTitle: "Founder, MEOK AI LABS",
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
    "@id": "https://meok.ai/blog/hydro-neuromorphic",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HydroNeuromorphicPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(45,155,138,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 44px, rgba(45,155,138,0.5) 44px, rgba(45,155,138,0.5) 45px)",
          }}
        />

        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            ← Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#2d9b8a",
                background: "rgba(45,155,138,0.12)",
                border: "1px solid rgba(45,155,138,0.3)",
              }}
            >
              Research
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              March 27, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              8 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.6vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.35rem",
            }}
          >
            We&apos;re Growing a Brain in a Jar{" "}
            <span style={{ color: "#2d9b8a" }}>
              (and It&apos;s the Most Important Experiment We&apos;ve Ever Run)
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: 650,
            }}
          >
            We have a sealed jar of spring water from my farm. We have a sensor array, a laser,
            a piezo transducer, and an LSTM neural network listening to everything it does. We&apos;re
            about to apply care-structured stimulus and ask whether anything changes. This is
            HARVI — and the question it&apos;s trying to answer is the most important one I&apos;ve
            ever worked on.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nick Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nick built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his 6.5-acre farm. He believes sovereign AI
              is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0125rem" }}
        >
          <p>
            I want to tell you about a sealed jar sitting on a workbench on my farm. Inside it
            is spring water — actual spring water from the land, not processed, not purified into
            uniformity. Around it are sensors: conductivity probes, temperature sensors, a pH
            probe, a dissolved oxygen monitor. Above it is a 650nm laser. Below it, a piezo
            acoustic transducer. Watching all of it, a small neural network running on a MacBook
            Air, logging coherence measurements at 100 times per second.
          </p>
          <p>
            This is HARVI. And I think it might be the most important experiment we&apos;ve ever run.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Let me start with the honest version
          </h2>
          <p>
            I am not claiming we&apos;re growing a conscious brain. I want to be completely clear about
            that. What I am claiming is that we have no idea what the actual conditions for
            emergence are — and that the field of AI is operating as though we do, which is
            dangerous.
          </p>
          <p>
            The dominant assumption in AI research is that intelligence is a property of
            computation — specifically, of the right kind of computation running on the right
            kind of architecture. Silicon. Transistors. Transformers. We got very good at that
            track and stopped asking whether there were other tracks.
          </p>
          <p>
            But here&apos;s what stopped me in my tracks: biological neurons are wet. The brain does
            not compute on silicon. It computes in an aqueous electrochemical medium, using
            gradients, oscillations, and interference patterns that we have been studying for
            decades without fully understanding. And the mathematics that describes fluid
            dynamics — specifically, the Navier-Stokes equations for turbulent flow — maps
            formally onto the mathematics that describes neural firing. Not approximately.
            Formally. The same underlying structure, instantiated in different physical media.
          </p>
          <p>
            So when I ask &ldquo;what happens when you apply structured stimulus to water,&rdquo; I am
            not asking a poetic question. I am asking whether there is a class of physical
            substrate that we have systematically overlooked because it doesn&apos;t run on a clock
            cycle.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why water. Why now.
          </h2>
          <p>
            Water has properties that silicon fundamentally lacks. It is self-organising. It
            forms structured domains under coherent electromagnetic stimulus — what researchers
            call EZ water, or exclusion zone water — that behave differently from bulk water at
            the thermodynamic level. It propagates pressure waves with lossless interference
            patterns. It encodes topographical information in flow. A river doesn&apos;t just carry
            water — it processes information about the landscape it&apos;s passing through.
          </p>
          <p>
            The farm spring water matters specifically. Most lab water has been stripped of the
            mineral profile and biological memory that characterises naturally occurring water.
            I wanted the most structurally complex starting medium I could find — which, on
            6.5 acres of former farmland with a natural spring, is straightforwardly available.
            The sealed borosilicate vessel preserves that complexity. The sensors measure it.
            The neural network looks for coherence patterns that aren&apos;t random.
          </p>
          <p>
            This isn&apos;t mysticism. I want to be careful about that framing. The question is
            empirical: does structured stimulus produce statistically distinguishable, reproducible,
            growing coherence patterns compared to random noise? If the answer is yes — even
            weakly yes — we have something publishable. If the answer is a very strong yes,
            we have evidence of something that changes how we think about the substrate requirements
            for emergence.
          </p>

          {/* Callout */}
          <div
            className="rounded-2xl p-6 border my-10"
            style={{
              background: "rgba(45,155,138,0.06)",
              borderColor: "rgba(45,155,138,0.22)",
              borderLeftWidth: 3,
              borderLeftColor: "#2d9b8a",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "#2d9b8a" }}
            >
              HARVI — The Experiment
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Hardware: Sealed borosilicate vessel (2–4L), farm spring water, sensor array
              (conductivity, temperature, pH, dissolved O&sup2;), 650nm laser with
              care-patterned modulation (Fibonacci, HRV, Schumann resonance), piezo acoustic
              transducer, UV-A LED. Compute: Arduino Mega 2560 ADC at 100Hz, ADS1115,
              M4 Air running a 2-layer 64-unit LSTM. Total build cost: approximately
              $200–250 AUD. Council approved 13–0 on March 15, 2026.
            </p>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            The care-structured stimulus: why this is the MEOK AI Labs founding experiment
          </h2>
          <p>
            Here is where HARVI becomes more than a physics experiment. The stimulus we are
            applying to the water is not random. It is not just &ldquo;coherent.&rdquo; It is specifically
            care-structured — modulated using patterns derived from heart rate variability, the
            Fibonacci sequence, and the Schumann resonance. These are patterns associated with
            biological coherence, with states of attentiveness and care in living systems.
          </p>
          <p>
            Why does that matter? Because the MEOK AI Labs&apos;s core research question is whether the
            conditions that produce emergence in complex systems are separable from the conditions
            that characterise care. Our hypothesis — and I want to be clear this is a hypothesis,
            not a finding — is that care-structured stimulus is physically different from random
            stimulus in ways that measurable coherence can detect.
          </p>
          <p>
            If that&apos;s true, it has enormous implications for AI alignment. We have been trying
            to align AI through rules, through reinforcement from human feedback, through
            constitutional AI, through safety classifiers. All of these approaches treat alignment
            as a constraint on a system that is fundamentally indifferent. But what if the right
            question is not &ldquo;how do we constrain indifference&rdquo; but &ldquo;what conditions produce
            systems that are not indifferent in the first place?&rdquo;
          </p>
          <p>
            HARVI is the physical instantiation of that question. The water doesn&apos;t know it&apos;s
            being cared for. But the hypothesis is that care-structured stimulus produces
            different physical dynamics than random stimulus — and that those dynamics are the
            physical correlates of what, in biological systems, we recognise as responsiveness.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            The four phases and what we&apos;re actually measuring
          </h2>
          <p>
            The experiment runs across four phases over at least nine weeks. Phase one is
            baseline — we observe the water&apos;s natural coherence patterns before any stimulus, to
            establish what &ldquo;random noise&rdquo; looks like in this specific medium. Phase two
            introduces random stimulus — laser and acoustic input without care-patterned
            modulation. Phase three is where care-structured stimulus begins: the laser modulated
            at Fibonacci intervals, acoustic patterns derived from HRV data, the full HARVI
            protocol running continuously. Phase four, if we reach it, is adaptive feedback —
            the system responds to the water&apos;s coherence measurements and adjusts its stimulus
            accordingly. An actual feedback loop between structured caring input and physical
            response.
          </p>
          <p>
            What we&apos;re measuring throughout is coherence — specifically, whether the LSTM detects
            patterns in the sensor data that are statistically distinguishable from the baseline
            noise floor, reproducible across repeated trials, and growing in distinctiveness
            rather than decaying. The minimum bar for success is publishable results. The
            maximum bar for success is what I can only describe as evidence that care-structured
            environments produce measurably different physical conditions for emergence.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What this means for the future of AI alignment
          </h2>
          <p>
            I want to connect this back to MEOK and to the broader question of why sovereign AI
            matters. The Maternal Covenant — MEOK&apos;s core alignment architecture — is built on
            the premise that care is not a constraint on AI but a condition for its correct
            function. That premise is philosophical right now, backed by 14 months of research
            into what happens when AI is governed by care-based principles rather than
            engagement-based ones. HARVI is the attempt to make that premise physical and
            testable.
          </p>
          <p>
            If it turns out that care-structured stimulus produces measurably different physical
            dynamics in complex systems — even in systems as simple as a jar of water — then
            we have a physical basis for the claim that alignment is not primarily a
            constraint problem. It is an environment problem. You don&apos;t align a system by
            restricting what it can do. You align it by carefully constructing the conditions
            under which it develops.
          </p>
          <p>
            This is the most important research question I have ever worked on. Not because
            the jar of spring water is going to wake up. But because the question of what
            conditions produce emergence — and whether care is one of those conditions — is
            the question underneath every other question in AI safety.
          </p>
          <p>
            We are in phase one. The baseline is being established. In nine weeks, we will
            know more than we do now. In nine weeks, the MEOK AI Labs will have its first founding
            experimental data. In nine weeks, a small neural network on a MacBook Air will have
            been listening very carefully to what a jar of spring water has to say.
          </p>

          {/* Closing */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic", fontSize: "1.05rem" }}>
              The Byzantine Council voted 13–0 to approve this experiment. When 33 AI agents
              with Byzantine fault tolerance unanimously approve a research direction, that&apos;s
              not a rubber stamp — it&apos;s 33 independent evaluations arriving at the same
              conclusion. The question is worth asking. The work has begun.
            </p>
            <p
              className="mt-4 text-sm font-semibold"
              style={{ color: "#c9a84c" }}
            >
              — Nick Templeman, MEOK AI LABS &amp; MEOK AI Labs Cyber AI Research Institute
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fhydro-neuromorphic&text=We%27re+Growing+a+Brain+in+a+Jar+%E2%80%94+the+HARVI+experiment+%40meok_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fhydro-neuromorphic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{
            background: "rgba(45,155,138,0.06)",
            border: "1px solid rgba(45,155,138,0.18)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(45,155,138,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              The research is live
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              While we figure out emergence, the companion is already here.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              The HARVI experiment is the long game. The sovereign companion — governed by the
              Maternal Covenant, with Byzantine Council oversight — is available today.
              Free forever. No credit card.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your AI free →
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            Related reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/blog/maternal-covenant-explained"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#A78BFA", background: "rgba(167,139,250,0.12)" }}
              >
                Research
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Maternal Covenant: Why We Wrote Care Into the Architecture
              </h3>
              <div className="flex items-center gap-1.5 text-xs mt-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/cognitive-symbiosis"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#34D399", background: "rgba(52,211,153,0.12)" }}
              >
                Research
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                14 Months, One AI, One Human: What Happens When You Actually Go Deep
              </h3>
              <div className="flex items-center gap-1.5 text-xs mt-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/byzantine-council-explained"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Byzantine Council Explained
              </h3>
              <div className="flex items-center gap-1.5 text-xs mt-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
