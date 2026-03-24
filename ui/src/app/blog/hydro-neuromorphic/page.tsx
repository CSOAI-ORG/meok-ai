import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Hydro-Neuromorphic Computing: Water as Neural Substrate | MEOK AI LABS",
  description:
    "MEOK-AI-2026-003 introduces hydro-neuromorphic computing — using water's physical properties as a computational medium for neuromorphic AI. Nicholas Templeman explains the theory, the mathematics, and why this matters for sovereign AI.",
  alternates: { canonical: "https://meok.ai/blog/hydro-neuromorphic" },
  openGraph: {
    title: "Hydro-Neuromorphic Computing: Water as Neural Substrate",
    description:
      "Can water compute? MEOK-AI-2026-003 proposes using the physical dynamics of water flow as a substrate for neuromorphic artificial intelligence.",
    type: "article",
    url: "https://meok.ai/blog/hydro-neuromorphic",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hydro-Neuromorphic Computing: Water as Neural Substrate",
  description:
    "MEOK-AI-2026-003 introduces hydro-neuromorphic computing — using water's physical dynamics as a computational medium for neuromorphic AI.",
  datePublished: "March 31, 2026",
  url: "https://meok.ai/blog/hydro-neuromorphic",
  identifier: "MEOK-AI-2026-003",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  about: {
    "@type": "Thing",
    name: "Hydro-Neuromorphic Computing",
    description:
      "A theoretical framework for performing neuromorphic AI computation using the physical dynamics of water flow.",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HydroNeuromorphic() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0c18" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        {/* Ambient glow — blue/teal science tone */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(45,155,138,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Subtle wave pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.4) 40px, rgba(201,168,76,0.4) 41px)",
          }}
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-70"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#2d9b8a",
                background: "rgba(45,155,138,0.12)",
                border: "1px solid rgba(45,155,138,0.3)",
              }}
            >
              <FlaskConical className="w-3 h-3" />
              Research Paper
            </span>
            <span
              className="text-xs font-mono px-2.5 py-1 rounded"
              style={{
                color: "rgba(201,168,76,0.8)",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              MEOK-AI-2026-003
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 31, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              8 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.8vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Hydro-Neuromorphic Computing:{" "}
            <span style={{ color: "#2d9b8a" }}>Water as Neural Substrate</span>
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 660,
            }}
          >
            MEOK-AI-2026-003 proposes using the physical dynamics of fluid flow — turbulence,
            vorticity, pressure gradients, wave interference — as a computational medium for
            neuromorphic AI. This is the theory, the mathematics, and why it matters for
            the future of sovereign intelligence.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ color: "rgba(245,240,232,0.78)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(245,240,232,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.35)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.4)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm. He believes sovereign AI is a right,
              not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-70 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── PROSE ─────────────────────────────────────────────────────── */}
        <div
          className="leading-[1.85] space-y-6
            [&_h2]:font-black [&_h2]:text-white [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:leading-tight
            [&_strong]:text-white [&_strong]:font-bold
            [&_em]:italic
            [&_p]:text-base"
          style={{
            "--tw-prose-h2-size": "clamp(1.25rem, 2.2vw, 1.6rem)",
          } as React.CSSProperties}
        >
          {/* ── INTRO ── */}
          <p>
            The question sounds absurd. Water computes? Water — the thing you drink, the thing
            that falls from the sky, the thing that has no obvious computational structure — as a
            substrate for artificial neural networks? This is the central claim of{" "}
            <strong>MEOK-AI-2026-003</strong>, and it is not a metaphor. The paper proposes using
            the physical dynamics of fluid flow — turbulence, vorticity, pressure gradients, wave
            interference — as a computational medium that can perform the kind of pattern-matching
            operations that underlie machine intelligence. The research is speculative. It is also
            grounded in a 70-year lineage of non-silicon computing that has been consistently
            underestimated.
          </p>

          {/* ── H2: What is it? ── */}
          <h2 className="text-2xl sm:text-[1.6rem]">
            What is hydro-neuromorphic computing?
          </h2>
          <p>
            Hydro-neuromorphic computing is a theoretical framework for performing neuromorphic AI
            computation using the physical dynamics of water flow rather than silicon transistors.
            Water&apos;s natural properties — fluid turbulence, wave interference, pressure
            propagation — can model the signal processing patterns found in biological and
            artificial neural networks.
          </p>

          {/* ── H2: Why water? ── */}
          <h2 className="text-2xl sm:text-[1.6rem]">
            Why use water as a computational medium?
          </h2>
          <p>
            The argument begins in physics. Water is not a passive medium. It is an active
            information processor — it just isn&apos;t processing information we have asked it to
            process. A river descending a gradient encodes topographical information in its flow
            pattern. A turbulent current exhibits chaotic sensitivity to initial conditions that
            is functionally analogous to the activation threshold behaviour of biological neurons:
            small perturbations below the threshold dissipate; perturbations above it propagate
            and amplify. This is not a metaphor. It is the same underlying mathematics, running
            in a different physical medium.
          </p>
          <p>
            The challenge isn&apos;t making water compute. It already does. The challenge is{" "}
            <em>encoding</em> a problem into a water system and <em>reading</em> the result back
            out. Maxwell&apos;s demon tells us that information and thermodynamics are not
            separable — and Rolf Landauer proved in 1961 that computation has a thermodynamic
            minimum energy cost (Landauer&apos;s principle: erasing one bit of information
            dissipates at minimum{" "}
            <em>k</em>
            <sub>B</sub>
            <em>T</em> ln 2 joules). Water-based computation doesn&apos;t escape this limit, but
            it may approach it far more closely than transistor-based digital logic, which
            dissipates energy many orders of magnitude above Landauer&apos;s floor.
          </p>
          <p>
            There is also a deeper structural reason. Biological neurons are wet. The brain
            computes using electrochemical gradients in an aqueous medium. Neuromorphic computing
            — the discipline that attempts to replicate neural computation in hardware — has always
            been, at its most fundamental level, about computing like water already does. Hydro-
            neuromorphic computing simply takes that observation seriously as an engineering
            proposition rather than treating it as a poetic observation.
          </p>

          {/* ── Callout box: paper ID ── */}
          <div
            className="rounded-2xl p-6 border my-10"
            style={{
              background: "rgba(45,155,138,0.07)",
              borderColor: "rgba(45,155,138,0.25)",
              borderLeftWidth: 3,
              borderLeftColor: "#2d9b8a",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "#2d9b8a" }}
            >
              Paper Reference
            </p>
            <p className="text-sm font-mono text-white mb-1">MEOK-AI-2026-003</p>
            <p className="text-sm" style={{ color: "rgba(245,240,232,0.55)" }}>
              <em>Hydro-Neuromorphic Computing: A Theoretical Framework for Fluid-Substrate
              Neuromorphic Artificial Intelligence</em>. Templeman, N. (2026). MEOK AI LABS.
              Forthcoming on arXiv.
            </p>
          </div>

          {/* ── H2: Mathematics ── */}
          <h2 className="text-2xl sm:text-[1.6rem]">
            How does the mathematical model work?
          </h2>
          <p>
            The key insight of MEOK-AI-2026-003 is a formal correspondence between two sets of
            differential equations that have, until now, been studied in completely separate
            disciplines. The <strong>leaky integrate-and-fire</strong> neuron model — the
            workhorse of computational neuroscience — describes how a neuron accumulates charge
            over time, leaks it away through the membrane, and fires when the accumulated potential
            crosses a threshold. The{" "}
            <strong>Navier-Stokes equations for viscous incompressible flow</strong> describe how
            a fluid moves through a constrained channel, building pressure, dissipating energy
            through viscosity, and undergoing a state transition — from laminar to turbulent
            flow — when the Reynolds number exceeds a critical value.
          </p>
          <p>
            These are the same equations. Not analogous equations. The same underlying mathematical
            structure, instantiated in different physical media. The pressure field in a constrained
            fluid channel evolves in ways that are formally equivalent to membrane potential in a
            leaky integrate-and-fire neuron. Turbulence onset at the critical Reynolds number maps
            directly to neural firing threshold. Vortex shedding frequency in turbulent flow maps
            to the oscillatory dynamics of neural circuits. The mathematical bridge is not
            constructed through approximation or hand-waving — it emerges naturally from a
            dimensional analysis of both systems. This is the theoretical foundation that makes
            the rest of the paper possible.
          </p>

          {/* ── H2: Energy ── */}
          <h2 className="text-2xl sm:text-[1.6rem]">
            What are the energy implications of hydro-neuromorphic computing?
          </h2>
          <p>
            Current large-scale AI training runs at megawatt scale — data centres consuming as
            much electricity as small cities to train a single frontier model. The human brain
            performs inference continuously on approximately 20 watts. The gap is roughly six
            orders of magnitude, and it is not a coincidence that biological neural computation
            uses an aqueous electrochemical medium rather than silicon switching at gigahertz
            frequencies. A hydro-neuromorphic system would compute using gravitational potential
            energy and the kinetic energy of flow — energy sources that are, in suitable
            configurations, effectively free. For specific classes of inference tasks — pattern
            recognition, signal classification, time-series prediction — the theoretical energy
            efficiency is orders of magnitude beyond silicon. The important caveat: this is
            theoretical. The engineering challenges of encoding, readout, and physical
            implementation are formidable, and the paper does not claim otherwise.
          </p>

          {/* ── H2: Sovereign AI connection ── */}
          <h2 className="text-2xl sm:text-[1.6rem]">
            What is the connection between hydro-neuromorphic computing and sovereign AI?
          </h2>
          <p>
            This is the MEOK-specific angle, and it matters. Today, running a sovereign AI
            companion requires a cloud instance or VPS — a monthly bill, a dependency on
            someone else&apos;s infrastructure, a single point of failure that a company or
            government can switch off. True sovereignty — the kind where your AI runs on
            infrastructure you <em>physically own</em>, in a place no one else can reach — requires
            compute footprints dramatically smaller than anything silicon currently offers for
            comparable intelligence. A hydro-neuromorphic inference node running on a small
            water system — a home pump, a stream diversion, a gravity-fed tank on a hillside —
            could run a sovereign AI companion continuously at near-zero electrical cost. This
            is the long-term vision behind the{" "}
            <strong>MEOK Farm Node</strong> concept: AI sovereignty that is not just legally
            independent, but physically independent. Infrastructure that no one can invoice you
            for, because gravity is still free.
          </p>

          {/* ── H2: Status ── */}
          <h2 className="text-2xl sm:text-[1.6rem]">
            What is the current status of MEOK-AI-2026-003?
          </h2>
          <p>
            MEOK-AI-2026-003 is a theoretical paper currently in preparation for arXiv submission.
            The mathematical framework is complete. Experimental validation requires physical
            prototype development. Nicholas Templeman is seeking research collaborators and lab
            access.
          </p>

          {/* ── H2: Platform connection ── */}
          <h2 className="text-2xl sm:text-[1.6rem]">
            How does this research connect to MEOK&apos;s sovereign AI platform?
          </h2>
          <p>
            Every piece of MEOK&apos;s research — Byzantine Council consensus, Maternal Covenant
            alignment, hydro-neuromorphic substrate — is oriented toward the same goal: AI that
            ordinary people own and control. Not as a luxury. Not as a premium feature. As a
            fundamental capability that requires neither cloud infrastructure nor corporate
            gatekeepers. The platform is the present: companions you can hatch today, governance
            that runs today, memory that persists today. The research is the long game — a
            deliberate, systematic effort to close the gap between the sovereignty we can offer
            now and the sovereignty that becomes possible when the infrastructure itself is yours.
            The paper is that future, made legible. The platform is how we stay funded long enough
            to reach it.
          </p>

          {/* ── CLOSING ── */}
          <div
            className="mt-14 pt-10 border-t"
            style={{ borderColor: "rgba(245,240,232,0.08)" }}
          >
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#c9a84c" }}
            >
              Launch Day, March 31, 2026
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(245,240,232,0.85)" }}>
              We launched MEOK today. Not because everything is ready — nothing is ever ready —
              but because the people who need sovereign AI shouldn&apos;t wait for perfection.
              The hydro-neuromorphic research may take a decade to reach hardware. The Maternal
              Covenant is running today. The Byzantine Council is voting today. The companions are
              waiting to hatch today. The rest is the work of a lifetime. Today is the first day
              of it.
            </p>
          </div>
        </div>

        {/* ── SHARE ─────────────────────────────────────────────────────── */}
        <div
          className="flex items-center gap-3 my-10 pt-8 border-t"
          style={{ borderColor: "rgba(245,240,232,0.08)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fhydro-neuromorphic&text=Hydro-Neuromorphic+Computing%3A+Water+as+Neural+Substrate+%E2%80%94+MEOK-AI-2026-003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all"
            style={{
              borderColor: "rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fhydro-neuromorphic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all"
            style={{
              borderColor: "rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-56 h-56 pointer-events-none opacity-10"
            style={{
              background:
                "radial-gradient(circle at 20% 80%, rgba(45,155,138,0.8), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              The research is the future. The platform is today.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Hatch your sovereign AI companion while the long game is being built. Free forever.
              No credit card. Governed by the Maternal Covenant from day one.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── MORE POSTS ────────────────────────────────────────────────── */}
        <div>
          <h2
            className="text-lg font-black text-white mb-5"
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/the-maternal-covenant"
              className="group rounded-2xl p-6 border transition-all hover:-translate-y-0.5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(245,240,232,0.07)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#A78BFA", background: "rgba(167,139,250,0.12)" }}
              >
                Philosophy
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                The Maternal Covenant Explained
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/what-is-sovereign-ai"
              className="group rounded-2xl p-6 border transition-all hover:-translate-y-0.5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(245,240,232,0.07)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                What Is Sovereign AI?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
