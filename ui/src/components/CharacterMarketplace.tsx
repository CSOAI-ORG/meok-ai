"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Sparkles, Crown, Star, Lock, Check, Gift } from "lucide-react";
import { PREMIUM_COLLECTIONS, CharacterRarity } from "@/lib/character-marketplace";
import { Tooltip } from "@/components/Tooltip";

interface CharacterMarketplaceProps {
  userTier: "explorer" | "sovereign" | "family";
  ownedCharacters: string[];
}

const rarityStyles: Record<CharacterRarity, { bg: string; border: string; text: string; icon: React.ReactNode }> = {
  common: { bg: "bg-white/5", border: "border-white/10", text: "text-white/60", icon: null },
  rare: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: <Star className="w-3 h-3" /> },
  epic: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", icon: <Sparkles className="w-3 h-3" /> },
  legendary: { bg: "bg-[#c9a84c]/10", border: "border-[#c9a84c]/30", text: "text-[#c9a84c]", icon: <Crown className="w-3 h-3" /> },
  mythic: { bg: "bg-gradient-to-r from-purple-500/20 to-[#c9a84c]/20", border: "border-[#c9a84c]/50", text: "text-[#c9a84c]", icon: <Crown className="w-4 h-4" /> },
};

export function CharacterMarketplace({ userTier, ownedCharacters }: CharacterMarketplaceProps) {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#c9a84c]" />
            Character Marketplace
          </h2>
          <p className="text-sm text-white/50 mt-1">
            Unlock premium companions with unique personalities
          </p>
        </div>
        <Link
          href="/marketplace"
          className="text-sm text-[#c9a84c] hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.values(PREMIUM_COLLECTIONS).map((collection) => (
          <div
            key={collection.id}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#c9a84c]/30 transition-all cursor-pointer"
            onClick={() => setSelectedCollection(collection.id)}
          >
            {/* Cover Image */}
            <div className="relative h-32 bg-gradient-to-br from-[#c9a84c]/20 to-purple-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl opacity-50">🎭</span>
              </div>
              {(collection as any).limited && (
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold">
                  LIMITED
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-white group-hover:text-[#c9a84c] transition-colors">
                {collection.name}
              </h3>
              <p className="text-sm text-white/50 mt-1 line-clamp-2">
                {collection.description}
              </p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-[#c9a84c]">
                    £{(collection.bundlePrice / 100).toFixed(2)}
                  </span>
                  <span className="text-xs text-white/40 line-through">
                    £{((collection.individualPrice * collection.characters.length) / 100).toFixed(2)}
                  </span>
                </div>
                <span className="text-xs text-white/40">
                  {collection.characters.length} characters
                </span>
              </div>

              {/* Savings badge */}
              <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                <Gift className="w-3 h-3" />
                Save {Math.round((1 - collection.bundlePrice / (collection.individualPrice * collection.characters.length)) * 100)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Free Characters Note */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center">
            <Check className="w-5 h-5 text-[#c9a84c]" />
          </div>
          <div>
            <p className="font-medium text-white">All base characters included</p>
            <p className="text-sm text-white/50">
              Explorer tier includes 50+ characters
            </p>
          </div>
        </div>
        <span className="text-sm text-white/40">Free</span>
      </div>

      {/* Creator Program CTA */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-[#c9a84c]/10 border border-[#c9a84c]/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-white">Create & Sell Characters</h3>
            <p className="text-sm text-white/50 mt-1">
              Earn 70% revenue share on every sale. Join our creator program.
            </p>
          </div>
          <Link
            href="/creators"
            className="px-4 py-2 rounded-lg bg-[#c9a84c] text-[#0d0c18] font-semibold text-sm hover:bg-[#d4b85c] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

// Individual character card
interface CharacterCardProps {
  id: string;
  name: string;
  title: string;
  emoji: string;
  rarity: CharacterRarity;
  price: number;
  isOwned: boolean;
  creator?: string;
  limited?: boolean;
}

export function CharacterCard({
  id,
  name,
  title,
  emoji,
  rarity,
  price,
  isOwned,
  creator,
  limited,
}: CharacterCardProps) {
  const style = rarityStyles[rarity];

  if (isOwned) {
    return (
      <div className={`rounded-xl border p-4 ${style.bg} ${style.border} opacity-75`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{emoji}</span>
            <div>
              <p className="font-medium text-white">{name}</p>
              <p className="text-xs text-white/50">{title}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-400 text-sm">
            <Check className="w-4 h-4" />
            Owned
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border p-4 ${style.bg} ${style.border} hover:scale-[1.02] transition-transform cursor-pointer group`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{emoji}</span>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-medium text-white group-hover:text-[#c9a84c] transition-colors">
                {name}
              </p>
              {style.icon && <span className={style.text}>{style.icon}</span>}
            </div>
            <p className="text-xs text-white/50">{title}</p>
            {creator && (
              <p className="text-xs text-white/30 mt-0.5">by {creator}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-[#c9a84c]">£{(price / 100).toFixed(2)}</p>
          {limited && (
            <span className="text-xs text-red-400">Limited</span>
          )}
        </div>
      </div>
    </div>
  );
}
