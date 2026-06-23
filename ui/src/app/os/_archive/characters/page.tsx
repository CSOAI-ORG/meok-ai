/**
 * MEOK AI LABS — Character Database & Sync Page
 * 
 * /os/characters - Unified character management
 * Shows all characters, their activity, and allows interaction.
 */

"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  Brain, MessageSquare, Activity, Cpu, Sparkles, Eye, 
  Heart, Zap, Moon, Search, Filter, Grid, List,
  ChevronRight, RefreshCw, Settings, Users, Wifi, WifiOff, Globe, Monitor, ArrowRight
} from "lucide-react";
import { CharacterSandbox, CharacterCouncilView, SyncStatusPanel } from "@/components/character-sandbox";
import { FlyEyeLearning, FlyEyeDashboard } from "@/components/fly-eye-learning";
import { fullCharacterSync, type CharacterWithActivity } from "@/lib/character-sync";
import { getAllCharacters } from "@/lib/characters";
import { Surface, FeatureCard, IconOrb, GlowText } from "@/components/design-system";
import Link from "next/link";

type ViewMode = 'grid' | 'council' | 'flyeye';
type FilterMode = 'all' | 'active' | 'idle' | 'dreaming';

export default function CharacterDatabasePage() {
  const [characters, setCharacters] = useState<CharacterWithActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastSync, setLastSync] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'offline'>('synced');
  const [activeChar, setActiveChar] = useState<string | null>(null);
  const [connectedDevices, setConnectedDevices] = useState<string[]>(['browser']);

  const syncCharacters = useCallback(async () => {
    setLoading(true);
    setSyncStatus('syncing');
    try {
      const [syncState, syncData] = await Promise.all([
        fullCharacterSync(),
        fetch('/api/character/sync?active=true').then(r => r.json()).catch(() => ({ activeCharacter: null })),
      ]);
      setCharacters(syncState.characters);
      setLastSync(syncState.lastSync);
      setActiveChar(syncData.activeCharacter);
      setSyncStatus('synced');
    } catch (e) {
      setCharacters(getAllCharacters().map(c => ({ ...c, activity: undefined })));
      setSyncStatus('offline');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    syncCharacters();
    const interval = setInterval(syncCharacters, 30000);
    return () => clearInterval(interval);
  }, [syncCharacters]);

  // Filter characters
  const filteredCharacters = characters.filter(char => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!char.name.toLowerCase().includes(query) && 
          !char.archetype.toLowerCase().includes(query) &&
          !char.title?.toLowerCase().includes(query)) {
        return false;
      }
    }
    
    // Activity filter
    if (filterMode === 'active' && char.activity?.status === 'idle') return false;
    if (filterMode === 'idle' && char.activity?.status !== 'idle') return false;
    if (filterMode === 'dreaming' && char.activity?.status !== 'dreaming') return false;
    
    return true;
  });

  const activeCount = characters.filter(c => c.activity?.status !== 'idle').length;

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#c9a84c]/[0.05] blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-900/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <IconOrb icon={Users} variant="gold" size="lg" className="mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            <GlowText variant="gold">Character Database</GlowText>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Every sovereign archetype, live status, and memory sync — in one unified view.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            title="Live Sync"
            description="Characters stay in sync across every device you own — browser, desktop, and mobile."
            icon={Wifi}
            iconVariant="teal"
            glow="teal"
          />
          <FeatureCard
            title="Council View"
            description="See how your characters vote together in the 220-node governance council."
            icon={Brain}
            iconVariant="purple"
            glow="purple"
          />
          <FeatureCard
            title="Fly Eye Mode"
            description="A 4-quadrant ambient interface for monitoring your entire character ecosystem."
            icon={Eye}
            iconVariant="gold"
            glow="gold"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-10 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Real-time activity tracking across all characters",
              "Grid, Council, and Fly Eye view modes",
              "Cross-device memory synchronization",
              "One-click chat or details for any character",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main App UI */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Brain className="w-7 h-7 text-[#c9a84c]" />
                Character Database
                <span className={`px-2 py-0.5 text-xs rounded-full flex items-center gap-1 ${
                  syncStatus === 'synced' ? 'bg-green-500/20 text-green-400' :
                  syncStatus === 'syncing' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {syncStatus === 'synced' ? <Wifi className="w-3 h-3" /> :
                   syncStatus === 'syncing' ? <RefreshCw className="w-3 h-3 animate-spin" /> :
                   <WifiOff className="w-3 h-3" />}
                  {syncStatus === 'synced' ? 'Live' : syncStatus === 'syncing' ? 'Syncing' : 'Offline'}
                </span>
              </h2>
              <p className="text-gray-400 mt-1">
                {characters.length} characters • {activeCount} active • {connectedDevices.length} devices synced
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button type="button"
                onClick={syncCharacters}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Sync
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#c9a84c] text-[#0d0c18] rounded-lg font-medium hover:opacity-90">
                <Users className="w-4 h-4" />
                Add Character
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search characters..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#13121f] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a84c]/50"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#13121f] rounded-xl border border-white/10">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterMode}
                onChange={(e) => setFilterMode(e.target.value as FilterMode)}
                className="bg-transparent text-sm text-white focus:outline-none"
              >
                <option value="all">All States</option>
                <option value="active">Active Only</option>
                <option value="idle">Idle Only</option>
                <option value="dreaming">Dreaming</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 p-1 bg-[#13121f] rounded-xl border border-white/10">
              <button type="button"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-[#c9a84c]/20 text-[#c9a84c]' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button type="button"
                onClick={() => setViewMode('council')}
                className={`p-2 rounded-lg ${viewMode === 'council' ? 'bg-[#c9a84c]/20 text-[#c9a84c]' : 'text-gray-400 hover:text-white'}`}
              >
                <Users className="w-4 h-4" />
              </button>
              <button type="button"
                onClick={() => setViewMode('flyeye')}
                className={`p-2 rounded-lg ${viewMode === 'flyeye' ? 'bg-[#c9a84c]/20 text-[#c9a84c]' : 'text-gray-400 hover:text-white'}`}
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Last Sync & Devices */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              {lastSync && (
                <p className="text-xs text-gray-500">
                  Last synced: {new Date(lastSync).toLocaleTimeString()}
                </p>
              )}
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-green-500" />
                <span className="text-xs text-gray-400">Browser</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-3 h-3 text-green-500" />
                <span className="text-xs text-gray-400">Desktop</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
            </div>
            {activeChar && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#c9a84c]/10 rounded-lg border border-[#c9a84c]/20">
                <span className="text-xs text-[#c9a84c] font-medium">Active:</span>
                <span className="text-sm text-white">{characters.find(c => c.id === activeChar)?.name || activeChar}</span>
              </div>
            )}
          </div>

          {/* Content */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex items-center gap-3 text-gray-400">
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Loading character database...</span>
              </div>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredCharacters.map(char => (
                <div 
                  key={char.id}
                  className={`bg-[#13121f] border rounded-xl overflow-hidden hover:border-[#c9a84c]/30 transition-all cursor-pointer ${selectedCharacter === char.id ? 'border-[#c9a84c]' : 'border-white/10'}`}
                  onClick={() => setSelectedCharacter(selectedCharacter === char.id ? null : char.id)}
                >
                  {/* Character Header */}
                  <div className="flex items-center gap-3 p-4 border-b border-white/5">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${char.color}20` }}
                    >
                      {char.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white truncate">{char.name}</h3>
                      <p className="text-xs text-gray-400 capitalize">{char.archetype}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${selectedCharacter === char.id ? 'rotate-90' : ''}`} />
                  </div>

                  {/* Activity */}
                  <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className={`w-4 h-4 ${char.activity?.status === 'idle' ? 'text-gray-500' : 'text-green-400'}`} />
                        <span className="text-sm text-gray-400 capitalize">{char.activity?.status || 'idle'}</span>
                      </div>
                      {char.activity?.currentTask && (
                        <span className="text-xs text-gray-500 truncate max-w-[150px]">{char.activity.currentTask}</span>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedCharacter === char.id && (
                    <div className="px-4 pb-4 space-y-3">
                      {char.title && (
                        <p className="text-sm text-gray-300">{char.title}</p>
                      )}
                      {char.tagline && (
                        <p className="text-xs text-gray-500 line-clamp-2">{char.tagline}</p>
                      )}
                      <div className="flex flex-wrap gap-1">
                        {char.personality?.slice(0, 4).map((trait: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded">
                            {trait}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 px-3 py-1.5 text-xs font-medium bg-[#c9a84c]/20 text-[#c9a84c] rounded-lg hover:bg-[#c9a84c]/30">
                          Chat
                        </button>
                        <button className="flex-1 px-3 py-1.5 text-xs font-medium bg-white/10 text-gray-300 rounded-lg hover:bg-white/20">
                          Details
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : viewMode === 'council' ? (
            <CharacterCouncilView />
          ) : (
            <FlyEyeDashboard />
          )}

          {/* Empty State */}
          {filteredCharacters.length === 0 && (
            <div className="text-center py-20">
              <Brain className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-400 mb-2">No characters found</h3>
              <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to meet your characters?</h2>
          <p className="text-white/50 mb-6">Hatch your sovereign AI companion and build your character council.</p>
          <Link
            href="/os"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] font-bold hover:bg-[#b8963e] transition-all"
          >
            Enter OS Mode <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
