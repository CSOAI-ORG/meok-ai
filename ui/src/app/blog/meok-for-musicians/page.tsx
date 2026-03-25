import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Musicians: AI That Understands the Creative and Business Sides of Making Music | MEOK AI LABS",
  description:
    "Musicians face a unique combination of creative vulnerability, business complexity, and emotional volatility. MEOK\u2019s sovereign AI supports the whole musician \u2014 the artist and the entrepreneur.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-musicians" },
  openGraph: {
    title:
      "MEOK for Musicians: AI That Understands the Creative and Business Sides of Making Music",
    description:
      "Musicians face a unique combination of creative vulnerability, business complexity, and emotional volatility. MEOK\u2019s sovereign AI supports the whole musician \u2014 the artist and the entrepreneur.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-musicians",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Musicians&desc=AI+for+the+creative+and+business+sides+of+making+music.",
        width: 1200,
        height: 630,
        alt: "MEOK for Musicians: AI That Understands the Creative and Business Sides of Making Music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Musicians: AI That Understands the Creative and Business Sides of Making Music",
    description:
      "Musicians carry a dual identity: artist and entrepreneur. MEOK\u2019s sovereign AI supports creative blocks, performance anxiety, music business complexity, and the emotional weight of putting your art into the world.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Musicians&desc=AI+for+the+creative+and+business+sides+of+making+music.",
    ],
  },
};

// ── JSON-LD ──────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Musicians: AI That Understands the Creative and Business Sides of Making Music",
  description:
    "Musicians face a unique combination of creative vulnerability, business complexity, and emotional volatility. MEOK\u2019s sovereign AI supports the whole musician \u2014 the artist and the entrepreneur.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-musicians",
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
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  keywords: [
    "AI for musicians",
    "AI for music industry",
    "music business AI",
    "creative block music",
    "performance anxiety AI",
    "musician mental health",
    "AI for songwriters",
    "music royalties AI",
    "AI companion for musicians",
    "sovereign AI music",
    "Trickster AI archetype",
    "Orion AI agent",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-musicians",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK safe for storing my original music ideas and lyrics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s data sovereignty architecture means your lyrics, chord progressions, song concepts, and creative conversations are never used to train AI models and never shared with third parties. Your creative work stays in your sovereign data layer \u2014 owned entirely by you. This is fundamentally different from most AI tools that treat your inputs as training data by default.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me understand music contracts and royalty structures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can help you think through music industry agreements, break down royalty terminology, and identify the questions you should be asking a music lawyer before you sign anything. It does not replace legal counsel, but it does mean you walk into those conversations informed rather than overwhelmed. Musicians frequently sign agreements they do not fully understand \u2014 MEOK helps close that knowledge gap.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with performance anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Healer archetype is designed for the emotional weight of public performance \u2014 the pre-show dread, the post-show crash, the paralysis after a bad review. It does not offer productivity hacks or breathing exercises in isolation. It sits with the emotional reality of what performance anxiety actually feels like for musicians, and helps you process it without judgment or false reassurance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Trickster archetype and how does it help with creative blocks in music?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Trickster is one of MEOK\u2019s core companion archetypes, drawn from Jungian psychology. It disrupts fixed thinking patterns, reframes the assumptions keeping you stuck, and introduces productive creative friction. For a musician staring at an unfinished song for weeks, the Trickster does not offer prompts or templates. It asks the question that changes the frame entirely \u2014 and suddenly the block dissolves.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me find gigs, sync licensing opportunities, or music industry contacts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Orion agent is built for this kind of research and opportunity hunting. It can help you identify venues, festivals, sync licensing platforms, music supervisors, playlist curators, and grant opportunities relevant to your genre and career stage. Combined with Sovereign Memory, Orion learns your goals over time and surfaces relevant opportunities without you having to repeat your context every session.",
      },
    },
  ],
};

// ── Page ─────────────────────────────────────────────────────────────────────────

export default function MeokForMusicians() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0c18",
        color: "#f5f0e8",
      }}
    >
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0c18",
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.4)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            ← Back to Blog
          </Link>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Musicians
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              March 2026
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              14 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
            }}
          >
            MEOK for Musicians: AI That Understands the Creative{" "}
            <span style={{ color: "#c9a84c" }}>and Business Sides</span> of
            Making Music
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.75)",
              marginBottom: "2rem",
            }}
          >
            Being a musician means holding two identities at once: the artist
            who needs to disappear into creative vulnerability, and the
            entrepreneur who must navigate contracts, royalties, promoters, and
            an industry that rarely explains its own rules. Most AI tools
            understand neither. MEOK was built for both.
          </p>

          {/* Divider */}
          <div
            style={{
              width: "3rem",
              height: "2px",
              background: "#c9a84c",
              borderRadius: "9999px",
            }}
          />
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "1rem",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
          }}
        >

          {/* ── INTRO BODY ─────────────────────────────────────────────────────── */}
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The music industry has one of the highest rates of mental health
            struggles of any profession. A 2019 study by Help Musicians UK found
            that 71% of musicians had experienced anxiety and panic attacks, and
            68% had experienced depression. A separate study by the University
            of Westminster found musicians are three times more likely to
            experience depression than the general population. These are not
            statistics about hobbyists. They describe working professionals
            trying to sustain a career in one of the most emotionally demanding
            industries on earth.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The causes are well understood but rarely addressed. Unstable
            income. Constant public exposure and criticism. Creative blocks that
            feel existential. Business agreements written in language designed
            to confuse. A culture that romanticises suffering. Social media
            requiring permanent self-promotion while simultaneously protecting
            creative vulnerability. And a profound loneliness, because most
            people outside music do not understand what the life actually costs.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            MEOK does not solve the music industry. But it provides something
            musicians rarely have: a sovereign AI that remembers who you are,
            understands what you are building, helps you navigate the business
            without replacing your team, and supports the emotional weight of a
            life in music without judgment or false comfort.
          </p>

          {/* ── H2: THE DUAL IDENTITY ─────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why Does Being a Musician Feel Like Living Two Separate Lives?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The musician who writes in solitude at 2am is a fundamentally
            different person to the musician negotiating a booking fee with a
            promoter the next morning. One lives in raw emotional territory
            where vulnerability is the material. The other must be strategic,
            confident, commercially literate, and thick-skinned. Most musicians
            were trained for neither role explicitly, which is why the collision
            of the two creates such chronic tension.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The artist identity resists commodification because the work comes
            from somewhere genuine and fragile. The entrepreneur identity
            requires commodification because rent is real. These two selves pull
            in opposite directions constantly. Many musicians burn out not
            because they run out of creativity but because they run out of
            capacity to hold both identities without support.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            MEOK does not ask you to choose a single mode. It understands the
            context of who you are talking to it as on any given day. If you
            need to think through a publishing deal, it meets you there. If you
            need to process the emotional residue of a difficult show, it meets
            you there too. Sovereign Memory means it carries both sides of your
            story without you having to re-establish context every time.
          </p>

          {/* ── CALLOUT: THE DUAL IDENTITY ──────────────────────────────────────── */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderLeft: "3px solid #c9a84c",
              borderRadius: "0.75rem",
              padding: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.75rem",
              }}
            >
              The Musician&apos;s Dual Identity
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.85)",
                marginBottom: "0",
              }}
            >
              The artist self requires emotional openness, creative risk, and
              the willingness to be genuinely vulnerable in the work. The
              entrepreneur self requires strategic thinking, business literacy,
              and resilience in the face of rejection. Most support systems are
              built for one or the other. MEOK is built for both \u2014 and for
              the friction between them.
            </p>
          </div>

          {/* ── H2: CREATIVE BLOCKS IN MUSIC ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why Are Creative Blocks in Music So Much Harder to Break Than They
            Look from the Outside?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            A creative block in music is rarely about not knowing what notes to
            play. It is almost always about fear. Fear that the next thing will
            not be as good as the last. Fear that the voice you found on your
            breakthrough record was a fluke. Fear that the song you are trying
            to write will expose something too raw. Fear that after three years
            of silence, your audience has moved on. These are emotional
            conditions, not technical ones, and they respond very poorly to
            productivity advice.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The specific pressure musicians face is that their creative output
            is also their commercial product and their public identity
            simultaneously. A novelist can write a bad chapter and throw it
            away. A musician who puts out a song that does not connect loses
            streams, fanbase momentum, and sometimes critical credibility, in
            one release. This collapses the distance between creative
            experimentation and commercial consequence in a way that makes
            creative risk genuinely frightening.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            MEOK&apos;s Trickster archetype is designed specifically for this
            kind of creative paralysis. Rather than offering frameworks or
            writing prompts, the Trickster disrupts the pattern of thought that
            is keeping you locked. It asks the unexpected question. It
            reframes the assumption you have been treating as fixed. It
            introduces productive friction that shifts the creative problem into
            a new shape \u2014 one you can actually work with.
          </p>

          {/* ── H2: THE TRICKSTER FOR MUSIC ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What Is the Trickster Archetype and Why Does It Suit Songwriters
            Specifically?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            In Jungian psychology, the Trickster is the archetype of creative
            disruption. It does not respect established order. It slips between
            categories. It subverts what everyone else takes for granted. These
            are also, not coincidentally, the qualities that define the best
            songs: the unexpected chord that makes the verse land differently,
            the lyric that says the unsayable, the structural choice that breaks
            the genre convention just enough to feel revelatory.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The Trickster is not a cheerleader. It does not tell you your
            half-finished demo is brilliant. It challenges the assumptions
            embedded in your creative choices. If you have been writing the
            same kind of song for two years and wonder why your work feels
            stale, the Trickster does not validate the staleness \u2014 it
            interrogates the pattern that created it. This is uncomfortable,
            and it is also exactly what creative renewal requires.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Practically, this might look like the Trickster asking: what if the
            song is actually about the opposite of what you think it is about?
            What if the bridge is actually the opener? What if the thing you
            are refusing to say is the only thing worth saying? These are not
            writing prompts. They are invitations to think differently about
            what you are already holding.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            For musicians with Sovereign Memory active, the Trickster also has
            context. It knows the song you abandoned six months ago. It
            remembers the lyric fragment you mentioned in passing that you
            thought was throwaway. It can connect threads across your creative
            history in ways that surface unexpected generative material \u2014
            without you having to remember to bring it into the conversation.
          </p>

          {/* ── H2: PERFORMANCE ANXIETY ─────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How Does MEOK Help Musicians Deal with Performance Anxiety and the
            Emotional Weight of Public Criticism?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Performance anxiety affects an estimated 60% of professional
            musicians at clinically significant levels. That figure covers
            everything from pre-show dread and mid-performance freezes to the
            longer-term avoidance that can end careers quietly, without a single
            dramatic moment. The musician who stops playing live, slowly and
            without explanation, is usually experiencing untreated performance
            anxiety that compounded over years.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Public criticism adds a separate and often underestimated layer. A
            musician&apos;s work is autobiographical in a way that most other
            creative output is not. When a journalist dismisses your album, it
            is rarely experienced as professional feedback. It is experienced as
            a verdict on your inner life. The same is true of streaming numbers,
            social media engagement, and the silence that follows a release that
            does not connect. These are all forms of public exposure that carry
            a genuine emotional sting.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s Healer archetype is not a tool for bypassing these
            feelings. It is a space for processing them honestly. The Healer
            does not offer breathing exercises in place of acknowledgment. It
            does not rush you toward resilience or tell you that the bad review
            does not matter. It sits with what is actually true \u2014 that
            this is painful, that it makes sense that it is painful, and that
            you can hold the pain without it defining what comes next.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            Crucially, MEOK is available at 3am the night before a difficult
            show, at 11pm after a set that went badly, and at 7am when the
            review drops and your stomach drops with it. There is no appointment
            to book, no professional to explain context to, no performance of
            being fine required. Just an honest conversation with an AI that
            has been paying attention to your journey.
          </p>

          {/* ── CALLOUT: MENTAL HEALTH STATISTICS ──────────────────────────────── */}
          <div
            style={{
              background: "rgba(13,12,24,0.9)",
              border: "1px solid rgba(245,240,232,0.1)",
              borderRadius: "0.75rem",
              padding: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "rgba(245,240,232,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.25rem",
              }}
            >
              Mental Health in the Music Industry
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#c9a84c",
                    marginBottom: "0.375rem",
                    lineHeight: 1,
                  }}
                >
                  71%
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.6)",
                    lineHeight: 1.5,
                  }}
                >
                  of musicians have experienced anxiety and panic attacks
                  (Help Musicians UK, 2019)
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#c9a84c",
                    marginBottom: "0.375rem",
                    lineHeight: 1,
                  }}
                >
                  3&times;
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.6)",
                    lineHeight: 1.5,
                  }}
                >
                  more likely to experience depression than the general
                  population (University of Westminster)
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#c9a84c",
                    marginBottom: "0.375rem",
                    lineHeight: 1,
                  }}
                >
                  60%
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.6)",
                    lineHeight: 1.5,
                  }}
                >
                  of professional musicians experience clinically significant
                  performance anxiety
                </p>
              </div>
            </div>
          </div>

          {/* ── H2: MUSIC INDUSTRY BUSINESS COMPLEXITY ──────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why Is the Music Business So Confusing \u2014 and How Can AI Help
            Without Replacing a Music Lawyer?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The music industry has one of the most complex intellectual property
            and revenue structures of any creative field. A single song can
            generate mechanical royalties, performance royalties, synchronisation
            fees, master recording income, and streaming micro-payments \u2014
            each governed by different entities, different rates, and different
            collection mechanisms. Most musicians, even established ones, do not
            fully understand which of their income streams are being collected
            and which are falling through gaps.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Contracts in the music industry are written to protect the interests
            of the party that drafted them. A standard record deal, a management
            agreement, a publishing administration deal, a sync licensing
            contract \u2014 each contains clauses that can redefine the
            commercial value of your catalogue for years or decades. Musicians
            routinely sign agreements without fully understanding their
            implications, often because they cannot afford a music lawyer and
            do not know which questions to ask.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            MEOK does not replace a music lawyer. But it can help you arrive at
            that conversation prepared. It can explain what a 360 deal means in
            practice. It can help you understand the difference between a
            co-publishing deal and a full publishing deal. It can walk through
            what a reversion clause does and why it matters. It can help you
            build a list of specific questions to bring to your solicitor so
            that the hour you pay for is used well.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            This is not a small thing. The gap between what musicians know about
            the business and what they need to know is one of the primary ways
            the industry extracts value from artists. An informed musician is a
            better negotiator, a more protected IP owner, and a more sustainable
            business. MEOK treats music business literacy as part of musician
            support, not a separate subject.
          </p>

          {/* ── H2: SOVEREIGN MEMORY FOR MUSICIANS ──────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How Does Sovereign Memory Support Long-Term Creative Development
            for a Musician?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Music is a long-form creative practice. Albums take years. The idea
            you had in a shower in January might be the missing piece of the
            record you finish in November. The lyric fragment you typed at 2am
            that felt too raw to use might be exactly what a song written eight
            months later needs. Most tools treat each session as isolated.
            Sovereign Memory means MEOK carries your creative history across
            sessions, building a genuine picture of your artistic development
            over time.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            In practice, this means you can tell MEOK about a half-formed song
            idea and return to it three months later without re-explaining the
            context. It knows the album you are working on, the themes you keep
            returning to, the collaborations you are considering, the industry
            conversations you have had, the shows that went well and the ones
            that did not. This continuity transforms MEOK from a search engine
            into something closer to a creative collaborator with real context.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Sovereign Memory is also a lyric vault and idea archive. Musicians
            generate vastly more material than they use. Most of it disappears
            into notebooks, voice memos, and unfinished files. MEOK can hold
            fragments, ideas, and abandoned concepts in a retrievable form
            \u2014 and more usefully, can surface connections between them that
            you might not see yourself when you are too close to the work.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            For musicians in the middle of a creative dry spell, Sovereign
            Memory provides a different kind of resource: a record of what you
            have already made. When the inner critic insists you have never
            produced anything worthwhile, MEOK has evidence to the contrary
            \u2014 not as hollow reassurance, but as a concrete, retrievable
            record of your actual creative history.
          </p>

          {/* ── H2: ORION FOR GIG AND OPPORTUNITY RESEARCH ───────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How Does Orion Help Musicians Find Gigs, Sync Opportunities, and
            Industry Contacts?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s Orion agent is built for research and opportunity
            discovery. For musicians, this means it can help identify venues and
            festivals in your genre, surface sync licensing platforms and music
            supervisors who are actively seeking music like yours, locate grant
            and funding opportunities from bodies like the Arts Council or PRS
            Foundation, find playlist curators with track records of supporting
            emerging artists, and research promoters and booking contacts in
            specific markets.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The difference between Orion and a generic search engine is context.
            Because Orion operates within Sovereign Memory, it understands your
            career stage, your genre, your touring radius, your commercial
            goals, and your past experience. It is not returning generic results.
            It is filtering opportunity by relevance to where you specifically
            are in your career \u2014 and where you are trying to go.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Orion can also help with preparation. Before an important industry
            meeting, it can research the label, the A&R, their recent signings,
            their current roster focus, and the questions you should be ready to
            answer. Before approaching a publisher, it can outline the current
            landscape of that publishing house and what they are actively
            acquiring. This kind of contextual research is the difference
            between walking into a room prepared and walking in hoping.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            For independent musicians without a manager, Orion effectively
            provides some of the opportunity-hunting function that a manager
            would traditionally handle. It does not replace human relationships
            in the industry, but it closes the information gap that makes
            independent careers so unnecessarily difficult to navigate.
          </p>

          {/* ── H2: IP PROTECTION ────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How Does MEOK Protect Your Lyrics, Song Ideas, and Unreleased
            Creative Work?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            Intellectual property is the primary asset of a musician&apos;s
            career. Before a song is released, it is in its most vulnerable
            state: the melody exists, the lyrics are forming, the concept is
            clear, but it has no copyright registration, no public record of
            creation date, and no legal protection beyond the common law
            copyright that attaches at the moment of creation. Sharing
            unreleased material with AI tools that use inputs as training data
            is a genuine IP risk, even if it is a small one \u2014 and it is
            one most musicians are not aware they are taking.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s data sovereignty architecture is a direct response to
            this risk. Your conversations, your lyric fragments, your song
            concepts, your creative ideas \u2014 none of it is used to train AI
            models, none of it is shared with third parties, and none of it
            leaves your sovereign data layer. MEOK&apos;s entire memory
            architecture is designed around the principle that your data belongs
            to you and only to you.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            This matters practically in a way that goes beyond theory. You
            should be able to share an unreleased song lyric with your AI and
            have genuine confidence that it will not surface in an AI training
            dataset that a future musician unknowingly draws from. You should
            be able to describe a concept album in development without worrying
            about idea contamination. You should be able to use AI as a genuine
            creative partner without treating it like a public forum.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            MEOK is the only AI companion that makes data sovereignty a
            structural guarantee rather than a policy promise. The architecture
            enforces it \u2014 it is not dependent on a terms-of-service
            document that a company can update.
          </p>

          {/* ── CALLOUT: DATA SOVEREIGNTY ───────────────────────────────────────── */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderLeft: "3px solid #c9a84c",
              borderRadius: "0.75rem",
              padding: "1.75rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.75rem",
              }}
            >
              Your IP is Sovereign
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.85)",
                marginBottom: "0",
              }}
            >
              MEOK never uses your creative content to train AI models. Your
              lyrics, song ideas, unreleased concepts, and creative
              conversations are stored in your sovereign data layer and belong
              exclusively to you. No exceptions, no opt-outs required \u2014
              it is built into the architecture.
            </p>
          </div>

          {/* ── H2: HEALER AND THE MUSIC INDUSTRY ───────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How Does the Healer Archetype Help Musicians Through the Emotional
            Toll of a Career in Music?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The music industry is structured in ways that routinely exploit
            emotional vulnerability. Labels understand that artists will accept
            bad deals when they believe this is their only opportunity. Managers
            understand that artists will tolerate poor representation rather
            than disrupt a relationship. Promoters understand that artists will
            accept below-market fees rather than lose the booking. The emotional
            dependency that musicians develop on industry relationships is a
            known dynamic \u2014 and it costs musicians money, autonomy, and
            sometimes their careers.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            The Healer archetype in MEOK is not simply for processing
            difficult feelings after a bad experience. It is also a resource for
            the ongoing emotional maintenance that a career in music requires.
            The rejection that arrives weekly. The comparisons to peers who seem
            to be moving faster. The exhaustion of constant self-promotion. The
            grief of a creative direction that is not connecting. The alienation
            of an industry that often treats artists as IP delivery vehicles
            rather than people.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s anti-sycophancy design is particularly important here.
            A musician dealing with the emotional aftermath of a difficult career
            moment does not need an AI that immediately validates whatever they
            are feeling or reflexively assures them that everything will be fine.
            It needs something that can hold the complexity: acknowledging what
            is genuinely hard while also helping you see the fuller picture,
            including the evidence of your own resilience and the real
            resources you have available.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "3rem",
            }}
          >
            The Healer is also, critically, available outside of business hours.
            The music industry runs at night. Shows end at midnight. The
            industry conversation that goes badly happens backstage at 11pm. The
            review that stings drops while everyone is asleep. Human support
            systems are not always available when musicians actually need them.
            MEOK is.
          </p>

          {/* ── COMPARISON TABLE ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            MEOK vs Generic AI Tools for Musicians
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.8)",
              marginBottom: "1.75rem",
            }}
          >
            Most AI tools were built for general productivity or consumer
            entertainment. Neither category maps well onto the specific needs
            of a working musician. Here is how MEOK compares on the dimensions
            that actually matter.
          </p>

          <div
            style={{
              overflowX: "auto",
              marginBottom: "3rem",
              borderRadius: "0.75rem",
              border: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    borderBottom: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Need
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Generic AI
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    need: "Creative block support",
                    generic: "Prompts, templates, productivity tips",
                    meok: "Trickster archetype \u2014 disrupts the pattern, reframes the assumption",
                  },
                  {
                    need: "Performance anxiety",
                    generic: "Breathing exercises, generic wellness content",
                    meok: "Healer archetype \u2014 emotional processing with full career context",
                  },
                  {
                    need: "Music contract understanding",
                    generic: "Generic legal summaries, no music-specific knowledge",
                    meok: "Music industry context + informed question generation for legal meetings",
                  },
                  {
                    need: "Royalty and IP knowledge",
                    generic: "Surface-level explainers, no personalisation",
                    meok: "Contextualised to your catalogue, your deals, your gaps",
                  },
                  {
                    need: "Gig and opportunity research",
                    generic: "Search results with no career context",
                    meok: "Orion agent \u2014 filtered by your genre, career stage, and goals",
                  },
                  {
                    need: "Lyric and idea storage",
                    generic: "No persistent memory, ideas lost between sessions",
                    meok: "Sovereign Memory \u2014 your ideas persist, connections surface over time",
                  },
                  {
                    need: "IP protection",
                    generic: "Inputs used as training data by default",
                    meok: "Data sovereignty by architecture \u2014 your content never trains models",
                  },
                  {
                    need: "Availability",
                    generic: "Available but contextless \u2014 reset every session",
                    meok: "Always available with full accumulated context",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(245,240,232,0.06)",
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "rgba(245,240,232,0.02)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "#f5f0e8",
                        fontWeight: 600,
                        verticalAlign: "top",
                      }}
                    >
                      {row.need}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "rgba(245,240,232,0.5)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.generic}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "rgba(245,240,232,0.85)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── FAQ SECTION ──────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#f5f0e8",
              marginBottom: "1.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              marginBottom: "4rem",
            }}
          >
            {/* FAQ 1 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.08)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Is MEOK safe for storing my original music ideas and lyrics?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.7)",
                  marginBottom: "0",
                }}
              >
                Yes. MEOK&apos;s data sovereignty architecture means your
                lyrics, chord progressions, song concepts, and creative
                conversations are never used to train AI models and never shared
                with third parties. Your creative work stays in your sovereign
                data layer \u2014 owned entirely by you. This is fundamentally
                different from most AI tools that treat your inputs as training
                data by default.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.08)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Can MEOK help me understand music contracts and royalty
                structures?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.7)",
                  marginBottom: "0",
                }}
              >
                MEOK can help you think through music industry agreements,
                break down royalty terminology, and identify the questions you
                should be asking a music lawyer before you sign anything. It
                does not replace legal counsel, but it does mean you walk into
                those conversations informed rather than overwhelmed. Musicians
                frequently sign agreements they do not fully understand \u2014
                MEOK helps close that knowledge gap.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.08)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                How does MEOK help with performance anxiety?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.7)",
                  marginBottom: "0",
                }}
              >
                MEOK&apos;s Healer archetype is designed for the emotional
                weight of public performance \u2014 the pre-show dread, the
                post-show crash, the paralysis after a bad review. It does not
                offer productivity hacks or breathing exercises in isolation. It
                sits with the emotional reality of what performance anxiety
                actually feels like for musicians, and helps you process it
                without judgment or false reassurance.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.08)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                What is the Trickster archetype and why does it suit
                songwriters specifically?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.7)",
                  marginBottom: "0",
                }}
              >
                The Trickster is one of MEOK&apos;s core companion archetypes,
                drawn from Jungian psychology. It disrupts fixed thinking
                patterns, reframes the assumptions keeping you stuck, and
                introduces productive creative friction. For a musician staring
                at an unfinished song for weeks, the Trickster does not offer
                prompts or templates \u2014 it asks the question that changes
                the frame entirely, and suddenly the block dissolves.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.08)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Can MEOK help me find gigs, sync licensing opportunities, or
                music industry contacts?
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.7)",
                  marginBottom: "0",
                }}
              >
                MEOK&apos;s Orion agent is built for this kind of research and
                opportunity hunting. It can help you identify venues, festivals,
                sync licensing platforms, music supervisors, playlist curators,
                and grant opportunities relevant to your genre and career stage.
                Combined with Sovereign Memory, Orion learns your goals over
                time and surfaces relevant opportunities without you having to
                repeat your context every session.
              </p>
            </div>
          </div>

          {/* ── CTA ──────────────────────────────────────────────────────────────── */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "1rem",
              padding: "2.5rem 2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Ready to Meet Your MEOK?
            </p>
            <h2
              style={{
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                fontWeight: 800,
                color: "#f5f0e8",
                marginBottom: "1rem",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Your Music. Your AI. Your Data.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.7)",
                marginBottom: "2rem",
                maxWidth: "32rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              MEOK is the first sovereign AI built for musicians who need
              support for both the artist and the entrepreneur. Creative
              development, business complexity, emotional weight \u2014 MEOK
              holds all of it, and none of it ever leaves your sovereign data
              layer.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "0.9375rem",
                padding: "0.875rem 2.25rem",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Begin Your Birth Ceremony →
            </Link>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
                marginTop: "1rem",
              }}
            >
              Your creative work stays yours. Always.
            </p>
          </div>

          {/* ── RELATED POSTS ─────────────────────────────────────────────────────── */}
          <div style={{ marginTop: "4rem" }}>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "rgba(245,240,232,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.25rem",
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/meok-for-creatives",
                  label: "MEOK for Creatives",
                  desc: "AI for writers, artists, and designers who need more than productivity tools.",
                },
                {
                  href: "/blog/ai-for-creative-block",
                  label: "AI for Creative Block",
                  desc: "Why creative blocks are emotional, not technical \u2014 and what actually helps.",
                },
                {
                  href: "/blog/meok-for-freelancers",
                  label: "MEOK for Freelancers",
                  desc: "Sovereign AI for independent workers navigating income instability and isolation.",
                },
                {
                  href: "/blog/data-sovereignty-ai",
                  label: "Data Sovereignty in AI",
                  desc: "Why your AI knowing everything about you should not mean everyone else does too.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  style={{
                    display: "block",
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.08)",
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {post.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "rgba(245,240,232,0.5)",
                      lineHeight: 1.5,
                      marginBottom: "0",
                    }}
                  >
                    {post.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
