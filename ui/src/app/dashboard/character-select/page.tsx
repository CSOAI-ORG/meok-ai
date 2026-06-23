"use client";

import { useState, useMemo } from "react";
import { CHARACTERS, CHARACTER_CATEGORIES, type Character } from "@/data/characters";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";

/* ─── CHARACTER PERSONALITY TRAITS (0-1 scale) ─────────────────────────── */

function getCharacterPersonality(character: Character) {
  const categoryTraits: Record<string, Record<string, number>> = {
    wisdom: { depth: 0.9, curiosity: 0.8, analysis: 0.9, empathy: 0.4 },
    protection: { vigilance: 0.9, care: 0.8, directness: 0.7, warmth: 0.6 },
    healing: { empathy: 0.95, warmth: 0.9, patience: 0.85, presence: 0.9 },
    creativity: { imagination: 0.95, playfulness: 0.9, lateral: 0.9, spontaneity: 0.85 },
    spirituality: { depth: 0.9, reflection: 0.95, openness: 0.85, patience: 0.8 },
    ambition: { directness: 0.9, momentum: 0.95, focus: 0.85, drive: 0.9 },
  };

  return categoryTraits[character.category] || {};
}

function getRadarData(character: Character) {
  const traits = getCharacterPersonality(character);
  return Object.entries(traits).map(([key, value]) => ({
    axis: key.charAt(0).toUpperCase() + key.slice(1),
    value,
  }));
}

/* ─── CHARACTER CARD ─────────────────────────────────────────────────────── */

interface CharacterCardProps {
  character: Character;
  isSelected: boolean;
  onSelect: (character: Character) => void;
  onCompare: (character: Character) => void;
}

function CharacterCard({ character, isSelected, onSelect, onCompare }: CharacterCardProps) {
  const [showRadar, setShowRadar] = useState(false);
  const radarData = getRadarData(character);
  const category = CHARACTER_CATEGORIES[character.category];

  return (
    <div
      className={`relative rounded-lg border transition-all cursor-pointer group ${
        isSelected ? "border-white/40 bg-white/5" : "border-white/10 bg-white/2 hover:border-white/20 hover:bg-white/4"
      }`}
    >
      <div className="p-4">
        {/* Header: Emoji + Name + Tier */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{character.emoji}</span>
            <div>
              <h3 className="font-semibold text-white">{character.name}</h3>
              <p className="text-xs text-white/40">{character.archetype}</p>
            </div>
          </div>
          <Badge variant="outline" className="text-[10px] whitespace-nowrap">
            {character.tier}
          </Badge>
        </div>

        {/* Tagline */}
        <p className="text-sm text-white/70 italic mb-3">"{character.tagline}"</p>

        {/* Description */}
        <p className="text-xs text-white/50 mb-4 line-clamp-2">{character.description}</p>

        {/* Category badge */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: category.color }}
          />
          <span className="text-xs text-white/40">{category.label}</span>
        </div>

        {/* Personality Radar (collapsible) */}
        {showRadar && (
          <div className="mb-4 pb-4 border-t border-white/10">
            <div className="mt-4 mb-2">
              <p className="text-xs font-medium text-white/60 mb-2">Personality Profile</p>
              <ResponsiveContainer width="100%" height={180}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis dataKey="axis" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
                  <PolarRadiusAxis domain={[0, 1]} tick={false} axisLine={false} />
                  <Radar
                    dataKey="value"
                    stroke={character.color}
                    fill={character.color}
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Superpowers preview */}
        <div className="mb-4">
          <p className="text-xs font-medium text-white/60 mb-2">Superpowers</p>
          <div className="space-y-1">
            {character.superpowers.slice(0, 3).map((power, i) => (
              <p key={i} className="text-xs text-white/40">
                • {power}
              </p>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-xs h-8"
            onClick={() => setShowRadar(!showRadar)}
          >
            {showRadar ? "Hide" : "View"} Radar
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-xs h-8"
            onClick={() => onCompare(character)}
          >
            Compare
          </Button>
          <Button
            size="sm"
            className="flex-1 text-xs h-8 font-medium"
            onClick={() => onSelect(character)}
            style={{ backgroundColor: character.color + "CC" }}
          >
            {isSelected ? "Selected" : "Choose"}
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── MEET [CHARACTER] PREVIEW ─────────────────────────────────────────── */

interface PreviewProps {
  character: Character;
  onClose: () => void;
}

function MeetCharacterPreview({ character, onClose }: PreviewProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="max-w-2xl w-full rounded-lg bg-[#0d0c18] border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="border-b border-white/10 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{character.emoji}</span>
            <div>
              <h2 className="text-xl font-semibold text-white">{character.name}</h2>
              <p className="text-sm text-white/40">{character.tagline}</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="text-white/40 hover:text-white/60">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Full description */}
          <div>
            <p className="text-sm text-white/70">{character.longDescription}</p>
          </div>

          {/* Best for / Not for */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-white/60 mb-2">Best For</p>
              <ul className="space-y-1">
                {character.bestFor.slice(0, 3).map((item, i) => (
                  <li key={i} className="text-xs text-white/40">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-white/60 mb-2">Care Approach</p>
              <p className="text-xs text-white/40">{character.careApproach}</p>
            </div>
          </div>

          {/* Example conversations */}
          <div>
            <p className="text-xs font-medium text-white/60 mb-3">Sample Conversation</p>
            <div className="space-y-3 bg-white/2 rounded p-4 border border-white/5">
              {character.exampleConversations.slice(0, 1).map((conv, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-xs font-medium text-white/40 flex-shrink-0 w-12">You:</span>
                    <p className="text-xs text-white/50 italic">"{conv.user}"</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium text-white/60 flex-shrink-0 w-12">{character.name}:</span>
                    <p className="text-xs text-white/60">"{conv.companion}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Evolution stages */}
          <div>
            <p className="text-xs font-medium text-white/60 mb-2">Evolution Path</p>
            <div className="space-y-2">
              {character.evolutionStages.map((stage, i) => (
                <div key={i} className="text-xs">
                  <p className="font-medium text-white/60">
                    Stage {stage.stage}: {stage.name} {stage.unlockedAt > 0 ? `(${stage.unlockedAt}+ conversations)` : "(Starting)"}
                  </p>
                  <p className="text-white/40">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Close
          </Button>
          <Button className="flex-1" style={{ backgroundColor: character.color + "CC" }}>
            Choose {character.name}
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── CHARACTER COMPARISON ──────────────────────────────────────────────── */

interface ComparisonProps {
  characters: Character[];
  onClose: () => void;
}

function CharacterComparison({ characters, onClose }: ComparisonProps) {
  if (characters.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg bg-[#0d0c18] border border-white/10">
        {/* Header */}
        <div className="sticky top-0 border-b border-white/10 p-6 flex items-center justify-between bg-[#0d0c18]">
          <h2 className="text-xl font-semibold text-white">Compare Characters</h2>
          <button type="button" onClick={onClose} className="text-white/40 hover:text-white/60">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Comparison table */}
          <div className="space-y-6">
            {/* Personality Radars Side-by-side */}
            <div>
              <p className="text-sm font-medium text-white/60 mb-4">Personality Profiles</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {characters.map(char => (
                  <div key={char.id} className="border border-white/10 rounded p-4 bg-white/2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{char.emoji}</span>
                      <h4 className="font-semibold text-white text-sm">{char.name}</h4>
                    </div>
                    <ResponsiveContainer width="100%" height={150}>
                      <RadarChart data={getRadarData(char)}>
                        <PolarGrid stroke="rgba(255,255,255,0.08)" />
                        <PolarAngleAxis dataKey="axis" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 8 }} />
                        <PolarRadiusAxis domain={[0, 1]} tick={false} axisLine={false} />
                        <Radar
                          dataKey="value"
                          stroke={char.color}
                          fill={char.color}
                          fillOpacity={0.15}
                          strokeWidth={2}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                ))}
              </div>
            </div>

            {/* Traits comparison */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-medium text-white/60 mb-4">Key Traits</p>
              <div className="space-y-3">
                {["Best For", "Care Approach", "Tone", "Memory Style"].map(attr => (
                  <div key={attr} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <p className="text-xs font-medium text-white/40 col-span-1 md:col-span-3">{attr}</p>
                    {characters.map(char => {
                      let value = "";
                      if (attr === "Best For") value = char.bestFor.slice(0, 2).join(", ");
                      if (attr === "Care Approach") value = char.careApproach;
                      if (attr === "Tone") value = char.tone;
                      if (attr === "Memory Style") value = char.memoryStyle;
                      return (
                        <div key={char.id} className="text-xs text-white/50">
                          <span className="font-medium text-white/60">{char.name}:</span> {value}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t border-white/10 p-4 bg-[#0d0c18] flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── RECOMMENDATION SYSTEM ─────────────────────────────────────────────── */

function getRecommendations(userProfile?: { interests?: string[] }): Character[] {
  // Simple recommendation: prioritize free tier, then by popularity
  // In production, this would analyze user profile data
  const free = CHARACTERS.filter(c => c.tier === "free");
  const recommended = [free[0], free[1], free[2]]; // Scholar, Guardian, Healer
  return recommended.filter(Boolean);
}

/* ─── MAIN PAGE ────────────────────────────────────────────────────────── */

export default function CharacterSelectPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [previewCharacter, setPreviewCharacter] = useState<Character | null>(null);
  const [compareCharacters, setCompareCharacters] = useState<Character[]>([]);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterTier, setFilterTier] = useState<string | null>(null);

  const filteredCharacters = useMemo(() => {
    return CHARACTERS.filter(c => {
      if (filterCategory && c.category !== filterCategory) return false;
      if (filterTier && c.tier !== filterTier) return false;
      return true;
    });
  }, [filterCategory, filterTier]);

  const recommendations = getRecommendations();

  const handleCompare = (character: Character) => {
    setCompareCharacters(prev =>
      prev.find(c => c.id === character.id) ? prev.filter(c => c.id !== character.id) : [...prev, character]
    );
  };

  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Choose Your Companion</h1>
          <p className="text-white/60">
            Each archetype brings unique strengths. Explore personalities, preview conversations, and find your perfect match.
          </p>
        </div>

        {/* Recommendations */}
        <div className="mb-8 p-6 rounded-lg bg-white/3 border border-white/10">
          <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            ✨ Recommended for You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recommendations.map(char => (
              <button type="button"
                key={char.id}
                onClick={() => setSelectedCharacter(char)}
                className="text-left p-4 rounded bg-white/2 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{char.emoji}</span>
                  <span className="font-semibold text-white text-sm">{char.name}</span>
                </div>
                <p className="text-xs text-white/40 italic">"{char.tagline}"</p>
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="text-xs font-medium text-white/60 mt-2">Filter by:</div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(CHARACTER_CATEGORIES).map(([key, cat]) => (
              <button type="button"
                key={key}
                onClick={() => setFilterCategory(filterCategory === key ? null : key)}
                className={`text-xs px-3 py-1.5 rounded transition-all ${
                  filterCategory === key
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
          <select
            value={filterTier || ""}
            onChange={e => setFilterTier(e.target.value || null)}
            className="text-xs px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white/60 focus:outline-none"
          >
            <option value="">All Tiers</option>
            <option value="free">Free</option>
            <option value="pro">Pro</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredCharacters.map(char => (
            <CharacterCard
              key={char.id}
              character={char}
              isSelected={selectedCharacter?.id === char.id}
              onSelect={setSelectedCharacter}
              onCompare={handleCompare}
            />
          ))}
        </div>

        {/* Selected Character Display */}
        {selectedCharacter && (
          <div className="fixed bottom-6 right-6 p-4 rounded-lg bg-[#1a1a2e] border-2 border-white/20 max-w-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedCharacter.emoji}</span>
                <div>
                  <p className="font-semibold text-white">{selectedCharacter.name}</p>
                  <p className="text-xs text-white/40">Selected</p>
                </div>
              </div>
              <button type="button"
                onClick={() => setSelectedCharacter(null)}
                className="text-white/40 hover:text-white/60"
              >
                <X size={16} />
              </button>
            </div>
            <Button className="w-full mb-2" onClick={() => setPreviewCharacter(selectedCharacter)}>
              Meet {selectedCharacter.name}
            </Button>
            <Button className="w-full" style={{ backgroundColor: selectedCharacter.color + "CC" }}>
              Confirm Choice
            </Button>
          </div>
        )}

        {/* Comparison Badge */}
        {compareCharacters.length > 0 && (
          <button type="button"
            onClick={() => setCompareCharacters([])}
            className="fixed bottom-6 left-6 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-all"
          >
            Comparing {compareCharacters.length} character{compareCharacters.length > 1 ? "s" : ""} (click to compare)
          </button>
        )}
      </div>

      {/* Modals */}
      {previewCharacter && <MeetCharacterPreview character={previewCharacter} onClose={() => setPreviewCharacter(null)} />}
      {compareCharacters.length > 0 && (
        <CharacterComparison characters={compareCharacters} onClose={() => setCompareCharacters([])} />
      )}
    </div>
  );
}
