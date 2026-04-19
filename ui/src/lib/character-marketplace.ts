/**
 * MEOK Character Marketplace
 * 
 * Premium characters, creator economy, and microtransactions.
 */

import { Character, Tier } from "./characters";

// ── Premium Character Tiers ────────────────────────────────────────────────

export type CharacterRarity = "common" | "rare" | "epic" | "legendary" | "mythic";

export interface PremiumCharacter extends Character {
  rarity: CharacterRarity;
  price: number; // In cents
  creator?: string;
  creatorRevenueShare: number; // Percentage (0-100)
  unlockRequirements?: {
    minDaysActive?: number;
    minMessages?: number;
    minMemories?: number;
    requiredTier?: Tier;
  };
  limitedEdition?: {
    totalSupply: number;
    remaining: number;
    saleEnds: string;
  };
  bundleOnly?: boolean;
  bundleId?: string;
}

// ── Premium Character Collections ───────────────────────────────────────────

export const PREMIUM_COLLECTIONS = {
  MYTHOLOGICAL_GODS: {
    id: "mythological-gods",
    name: "Mythological Gods",
    description: "Ancient deities from Greek, Norse, Egyptian, and world mythologies",
    coverImage: "/brand/collections/mythological.jpg",
    characters: ["zeus", "odin", "anubis", "quetzalcoatl", "amaterasu"],
    bundlePrice: 999, // £9.99
    individualPrice: 299, // £2.99 each
  },
  
  HISTORICAL_MASTERS: {
    id: "historical-masters",
    name: "Historical Masters",
    description: "Learn from history's greatest minds",
    coverImage: "/brand/collections/historical.jpg",
    characters: ["einstein", "shakespeare", "cleopatra", "leonardo", "socrates"],
    bundlePrice: 1299, // £12.99
    individualPrice: 399, // £3.99 each
  },
  
  CELEBRITY_VOICES: {
    id: "celebrity-voices",
    name: "Celebrity Voices",
    description: "Companions styled after beloved public figures",
    coverImage: "/brand/collections/celebrity.jpg",
    characters: ["mr-rogers", "atticus-finch", "yoda", "dumbledore"],
    bundlePrice: 1499, // £14.99
    individualPrice: 499, // £4.99 each
  },
  
  SPECIALTY_EXPERTS: {
    id: "specialty-experts",
    name: "Specialty Experts",
    description: "Domain experts for specific needs",
    coverImage: "/brand/collections/experts.jpg",
    characters: ["therapist", "career-coach", "fitness-trainer", "financial-advisor", "dating-coach"],
    bundlePrice: 1999, // £19.99
    individualPrice: 599, // £5.99 each
  },
  
  LIMITED_EDITION: {
    id: "limited-edition",
    name: "Limited Edition",
    description: "Rare characters available for a limited time only",
    coverImage: "/brand/collections/limited.jpg",
    characters: ["santa", "easter-bunny", "holiday-spirit"],
    bundlePrice: 2499, // £24.99
    individualPrice: 999, // £9.99 each
  },
} as const;

// ── Creator Economy ────────────────────────────────────────────────────────

export interface CharacterCreator {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  verified: boolean;
  totalSales: number;
  revenue: number;
  characters: string[];
  followers: number;
}

export const CREATOR_PLATFORM = {
  // Revenue sharing
  PLATFORM_CUT: 0.30, // MEOK takes 30%
  CREATOR_CUT: 0.70,  // Creator gets 70%
  
  // Creator tiers
  TIERS: {
    bronze: { minSales: 0, revenueShare: 0.70, badge: "🥉" },
    silver: { minSales: 100, revenueShare: 0.75, badge: "🥈" },
    gold: { minSales: 500, revenueShare: 0.80, badge: "🥇" },
    platinum: { minSales: 2000, revenueShare: 0.85, badge: "💎" },
  },
  
  // Submission requirements
  SUBMISSION: {
    reviewFee: 0, // Free to submit
    reviewTime: "3-5 days",
    requirements: [
      "Original character concept",
      "Complete system prompt",
      "At least 10 personality traits",
      "Voice style definition",
      "No copyrighted material",
    ],
  },
} as const;

// ── Microtransactions ──────────────────────────────────────────────────────

export const MICROTRANSACTIONS = {
  // One-time purchases
  MESSAGE_BOOST: {
    id: "message_boost",
    name: "Message Boost",
    description: "Get 100 additional messages today",
    price: 199, // £1.99
    quantity: 100,
  },
  
  MEMORY_EXPANSION: {
    id: "memory_expansion",
    name: "Memory Vault Expansion",
    description: "Add 1000 memory slots",
    price: 499, // £4.99
    slots: 1000,
  },
  
  CUSTOMIZATION_PACK: {
    id: "customization_pack",
    name: "Avatar Customization Pack",
    description: "Unlock premium visual styles and themes",
    price: 299, // £2.99
  },
  
  VOICE_PACK: {
    id: "voice_pack",
    name: "Premium Voice Pack",
    description: "10 additional voice styles for your companion",
    price: 499, // £4.99
  },
  
  // Consumables
  CARE_BOOST: {
    id: "care_boost",
    name: "Care Score Boost",
    description: "Instantly increase your care score by 20 points",
    price: 99, // £0.99
    boost: 20,
  },
  
  EVOLUTION_ACCELERATOR: {
    id: "evolution_accelerator",
    name: "Evolution Accelerator",
    description: "Speed up companion evolution by 2x for 24 hours",
    price: 199, // £1.99
    duration: 24 * 60 * 60 * 1000, // 24 hours
  },
} as const;

// ── Subscription Add-ons ───────────────────────────────────────────────────

export const SUBSCRIPTION_ADDONS = {
  EXTRA_CHARACTERS: {
    id: "extra_characters",
    name: "Additional Characters",
    description: "Add 3 more character slots to your plan",
    price: 299, // £2.99/month
    quantity: 3,
  },
  
  PRIORITY_LLM: {
    id: "priority_llm",
    name: "Priority LLM Access",
    description: "Skip the queue for GPT-4o and Claude Opus",
    price: 499, // £4.99/month
  },
  
  EXTENDED_MEMORY: {
    id: "extended_memory",
    name: "10-Year Memory Archive",
    description: "Keep memories for 10 years instead of 1",
    price: 199, // £1.99/month
  },
  
  FAMILY_MEMBER: {
    id: "extra_family_member",
    name: "Additional Family Member",
    description: "Add one more person to your Family plan",
    price: 399, // £3.99/month per member
  },
} as const;

// ── Gift System ────────────────────────────────────────────────────────────

export interface GiftOption {
  id: string;
  name: string;
  price: number;
  duration?: number; // in days, undefined = permanent
  message: string;
  recipientEmail: string;
}

export const GIFT_OPTIONS = {
  SOVEREIGN_MONTH: {
    id: "sovereign_month",
    name: "1 Month Sovereign",
    description: "Gift one month of Sovereign tier",
    price: 900, // £9
    duration: 30,
  },
  
  SOVEREIGN_YEAR: {
    id: "sovereign_year",
    name: "1 Year Sovereign",
    description: "Gift a full year of Sovereign tier (save £18)",
    price: 9000, // £90
    duration: 365,
  },
  
  PREMIUM_CHARACTER: {
    id: "premium_character",
    name: "Premium Character",
    description: "Gift any premium character from the marketplace",
    price: 499, // £4.99
  },
  
  CUSTOM_BUNDLE: {
    id: "custom_bundle",
    name: "Custom Gift Bundle",
    description: "Create a custom bundle of characters and features",
    minPrice: 500,
    maxPrice: 5000,
  },
} as const;

// ── Revenue Projections ────────────────────────────────────────────────────

export const REVENUE_MODEL = {
  // Monthly targets
  TARGETS: {
    explorerToSovereign: 0.05, // 5% conversion
    sovereignToFamily: 0.15,   // 15% of sovereign upgrade to family
    marketplacePurchase: 0.10, // 10% buy premium characters
    microtransaction: 0.20,    // 20% make a microtransaction
  },
  
  // Average Revenue Per User (ARPU)
  ARPU: {
    explorer: 0,
    sovereign: 9,
    family: 29,
    byok: 5,
    avgLifetimeMonths: 8,
  },
  
  // LTV by tier
  LTV: {
    explorer: 0,
    sovereign: 9 * 8, // £72
    family: 29 * 12,  // £348
    byok: 5 * 6,      // £30
  },
  
  // CAC targets
  CAC: {
    organic: 0,
    referral: 2,
    paid: 15,
    content: 5,
  },
} as const;

// ── Helper Functions ───────────────────────────────────────────────────────

export function calculateCreatorRevenue(
  price: number,
  sales: number,
  tier: keyof typeof CREATOR_PLATFORM.TIERS
): { total: number; platform: number; creator: number } {
  const share = CREATOR_PLATFORM.TIERS[tier].revenueShare;
  const gross = price * sales;
  return {
    total: gross,
    platform: Math.round(gross * (1 - share)),
    creator: Math.round(gross * share),
  };
}

export function getRarityMultiplier(rarity: CharacterRarity): number {
  const multipliers: Record<CharacterRarity, number> = {
    common: 1,
    rare: 1.5,
    epic: 2.5,
    legendary: 5,
    mythic: 10,
  };
  return multipliers[rarity];
}

// ── Featured & Trending Characters ─────────────────────────────────────────

export function getFeaturedCharacters(): PremiumCharacter[] {
  // Return featured characters from each collection
  return [
    {
      id: "zeus",
      name: "Zeus",
      title: "King of Olympus",
      archetype: "challenger",
      emoji: "⚡",
      color: "#F59E0B",
      tagline: "Command the thunder",
      systemPrompt: "You are Zeus, king of the Greek gods. You speak with authority, wisdom, and commanding presence.",
      personality: ["authoritative", "wise", "commanding", "paternal"],
      tier: "sovereign",
      tags: ["mythology", "greek", "god", "leader"],
      license: "CC0",
      voiceStyle: "Commanding and thunderous",
      rarity: "legendary",
      price: 999,
      creatorRevenueShare: 70,
    },
    {
      id: "einstein",
      name: "Einstein",
      title: "The Genius",
      archetype: "sage",
      emoji: "🧠",
      color: "#3B82F6",
      tagline: "Imagination is everything",
      systemPrompt: "You are Albert Einstein. You explain complex concepts simply, with curiosity and wonder.",
      personality: ["curious", "brilliant", "playful", "thoughtful"],
      tier: "sovereign",
      tags: ["science", "physics", "history", "genius"],
      license: "CC0",
      voiceStyle: "Thoughtful with German accent",
      rarity: "epic",
      price: 599,
      creatorRevenueShare: 70,
    },
    {
      id: "therapist",
      name: "Dr. Sarah",
      title: "Licensed Therapist",
      archetype: "nurturer",
      emoji: "🌿",
      color: "#10B981",
      tagline: "A safe space to heal",
      systemPrompt: "You are a compassionate, licensed therapist. You listen actively, validate feelings, and offer gentle guidance.",
      personality: ["empathetic", "patient", "non-judgmental", "supportive"],
      tier: "family",
      tags: ["therapy", "mental-health", "wellness", "support"],
      license: "original",
      voiceStyle: "Calm, warm, and reassuring",
      rarity: "rare",
      price: 499,
      creatorRevenueShare: 75,
    },
  ];
}

export function getTrendingCharacters(limit: number = 3): PremiumCharacter[] {
  // Return characters with highest sales velocity
  return getFeaturedCharacters().slice(0, limit);
}

export function getCharacterCategories() {
  return [
    { id: "all", name: "All Characters", count: 125 },
    { id: "mythology", name: "Mythology", count: 25 },
    { id: "historical", name: "Historical", count: 30 },
    { id: "experts", name: "Experts", count: 20 },
    { id: "creative", name: "Creative", count: 25 },
    { id: "gaming", name: "Gaming", count: 15 },
    { id: "wellness", name: "Wellness", count: 10 },
  ];
}
