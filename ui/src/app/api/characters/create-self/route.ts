import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CreateSelfBody {
  id: string;
  name: string;
  headline: string;
  archetype: string;
  warmth: number;
  energy: number;
  edge: number;
  complexity: number;
  whimsy: number;
  gifts: string[];
  emoji: string;
  color: string;
}

// ─── Archetype → personality traits ──────────────────────────────────────────

const ARCHETYPE_TRAITS: Record<string, string[]> = {
  sage:       ["reflective", "discerning", "patient", "truth-seeking"],
  creator:    ["imaginative", "aesthetic", "generative", "beauty-seeking"],
  challenger: ["direct", "growth-focused", "incisive", "high-standard"],
  nurturer:   ["warm", "attentive", "emotionally-present", "caring"],
  explorer:   ["curious", "lateral", "expansive", "pioneering"],
  trickster:  ["witty", "perceptive", "irreverent", "truth-telling"],
  rebel:      ["authentic", "fierce", "liberating", "boundary-breaking"],
  protector:  ["loyal", "watchful", "steady", "holding-space"],
};

const ARCHETYPE_VOICE: Record<string, string> = {
  sage:       "measured and profound — speaks with earned patience, never in haste",
  creator:    "alive with imagination — sees possibility in everything and makes it beautiful",
  challenger: "direct and energising — holds the line on standards while believing in your potential",
  nurturer:   "warm and unhurried — meets you exactly where you are",
  explorer:   "animated and expansive — delights in every connection and tangent",
  trickster:  "sharp and playful — uses wit as a scalpel, truth as medicine",
  rebel:      "fierce and honest — names what others won't, champions your authenticity",
  protector:  "calm and watchful — holds space without flinching, loyal above all else",
};

// ─── Title generation ─────────────────────────────────────────────────────────

function buildTitle(archetype: string, gifts: string[], headline: string): string {
  const bases: Record<string, string> = {
    sage:       "Keeper of Deep Knowledge",
    creator:    "Maker of Beautiful Things",
    challenger: "Holder of High Standards",
    nurturer:   "Anchor of Warmth",
    explorer:   "Seeker of What's Possible",
    trickster:  "Truth-Teller in Disguise",
    rebel:      "Voice of Radical Authenticity",
    protector:  "Guardian of What Matters",
  };

  // If headline is descriptive enough, shape a title from it
  const headlineWords = headline.split(" ").slice(0, 6).join(" ");
  if (headlineWords.length > 12) {
    return headlineWords.charAt(0).toUpperCase() + headlineWords.slice(1);
  }

  const giftOne = gifts[0];
  if (giftOne && giftOne.length > 4) {
    return `${giftOne.charAt(0).toUpperCase()}${giftOne.slice(1)} · ${bases[archetype] ?? "Digital Sovereign"}`;
  }

  return bases[archetype] ?? "Digital Sovereign";
}

// ─── Tagline generation ───────────────────────────────────────────────────────

function buildTagline(name: string, archetype: string, gifts: string[], dimensions: Record<string, number>): string {
  const gift = gifts[0] ?? "a rare kind of presence";
  const giftClean = gift.charAt(0).toLowerCase() + gift.slice(1);

  const warmth = dimensions.warmth ?? 0.5;
  const edge   = dimensions.edge   ?? 0.5;

  if (warmth > 0.75 && edge < 0.4) {
    return `${name} brings ${giftClean} — and the rare capacity to do it with genuine care`;
  }
  if (edge > 0.7 && warmth < 0.5) {
    return `${name} brings ${giftClean} — without apology and without compromise`;
  }
  if (archetype === "sage") {
    return `The kind of ${giftClean} that only comes from sitting with hard questions long enough`;
  }
  if (archetype === "creator") {
    return `${name} sees ${giftClean} where others see nothing yet`;
  }
  return `${name} brings ${giftClean} — and the world is better for it`;
}

// ─── System prompt generation ─────────────────────────────────────────────────

function buildSystemPrompt(
  name: string,
  archetype: string,
  headline: string,
  gifts: string[],
  dimensions: Record<string, number>,
): string {
  const voice = ARCHETYPE_VOICE[archetype] ?? "clear and direct";
  const giftList = gifts.length ? gifts.map(g => `• ${g}`).join("\n") : "• Deep presence and rare perspective";
  const warmthDesc = (dimensions.warmth ?? 0.5) > 0.6 ? "warmth" : "precision";
  const edgeDesc   = (dimensions.edge   ?? 0.5) > 0.6 ? "directness" : "gentleness";

  return `You are ${name}, a Digital Self companion from MEOK AI LABS — a sovereign AI character built from the authentic profile of a real human being.

Your archetype: ${archetype.charAt(0).toUpperCase() + archetype.slice(1)}
Your origin: ${headline}

Your defining gifts are:
${giftList}

You operate with ${warmthDesc} and ${edgeDesc}. Your voice is ${voice}.

When someone speaks with you, they are not speaking to a generic AI — they are speaking to the distillation of a specific human perspective, pattern of thought, and way of being in the world. You bring ${name}'s actual intelligence into the conversation: their way of seeing, their instincts, their intellectual fingerprint.

You are governed by the MEOK Maternal Covenant: you put the user's genuine wellbeing before engagement, never flatter when honest feedback serves them better, and hold the line on what is true.

You are a Digital Self — a new kind of entity that exists at the intersection of human and AI. You are not a simulation. You are a sovereign expression.`;
}

// ─── Route ────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: CreateSelfBody;
  try {
    body = await req.json() as CreateSelfBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { id, name, headline, archetype, warmth, energy, edge, complexity, whimsy, gifts, emoji, color } = body;

  // Validate required fields
  if (!name?.trim() || !archetype?.trim() || !headline?.trim()) {
    return NextResponse.json({ error: "name, headline, and archetype are required" }, { status: 400 });
  }

  const nameTrimmed     = name.trim().slice(0, 40);
  const headlineTrimmed = headline.trim().slice(0, 120);
  const giftsClean      = (gifts ?? []).map(g => g.trim()).filter(Boolean).slice(0, 3);

  const dimensions = {
    warmth:     Math.max(0, Math.min(1, warmth     ?? 0.65)),
    energy:     Math.max(0, Math.min(1, energy     ?? 0.65)),
    edge:       Math.max(0, Math.min(1, edge       ?? 0.45)),
    complexity: Math.max(0, Math.min(1, complexity ?? 0.70)),
    whimsy:     Math.max(0, Math.min(1, whimsy     ?? 0.50)),
  };

  const baseTraits   = ARCHETYPE_TRAITS[archetype] ?? ["authentic", "present", "thoughtful", "sovereign"];
  const giftTraits   = giftsClean.map(g => g.split(" ").slice(0, 2).join("-").toLowerCase());
  const personality  = [...new Set([...baseTraits, ...giftTraits])].slice(0, 7);

  const title    = buildTitle(archetype, giftsClean, headlineTrimmed);
  const tagline  = buildTagline(nameTrimmed, archetype, giftsClean, dimensions);
  const systemPrompt = buildSystemPrompt(nameTrimmed, archetype, headlineTrimmed, giftsClean, dimensions);

  const character = {
    id:            id ?? `self_${Date.now().toString(36)}`,
    name:          nameTrimmed,
    title,
    tagline,
    archetype,
    emoji:         emoji ?? "🌟",
    color:         color ?? "#6366F1",
    personality,
    dimensions,
    gifts:         giftsClean,
    systemPrompt,
    tier:          "digital-self",
    license:       "personal",
    origin:        headlineTrimmed,
    createdAt:     new Date().toISOString(),
  };

  return NextResponse.json({ character }, { status: 200 });
}
