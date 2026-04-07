"use client";

import { useState, useEffect, useCallback } from "react";
import { Brain, MessageSquare, Eye, Moon, Zap, Heart, Sparkles, Cpu, Activity, RefreshCw, Wifi, WifiOff, Smartphone, Monitor, Globe } from "lucide-react";
import { type CharacterWithActivity, getCharacterSandboxState } from "@/lib/character-sync";
import { getCharacter } from "@/lib/characters";

async function fetchActiveCharacter() {
  try {
    const res = await fetch('/api/character/sync?active=true');
    const data = await res.json();
    return data.activeCharacter;
  } catch { return null; }
}

async function setActiveCharacterServer(characterId: string) {
  try {
    await fetch('/api/character/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'set_active', characterId }),
    });
  } catch { /* ignore */ }
}

interface CharacterSandboxProps {
  characterId: string;
  characterName: string;
  compact?: boolean;
  showSyncStatus?: boolean;
}

const STATUS_ICONS: Record<string, any> = {
  idle: Activity,
  thinking: Brain,
  responding: MessageSquare,
  learning: Eye,
  dreaming: Moon,
  active: Activity,
};

const STATUS_COLORS: Record<string, string> = {
  idle: "text-gray-400",
  thinking: "text-cyan-400",
  responding: "text-green-400",
  learning: "text-purple-400",
  dreaming: "text-indigo-400",
  active: "text-yellow-400",
};

const STATUS_LABELS: Record<string, string> = {
  idle: "Resting",
  thinking: "Processing",
  responding: "Responding",
  learning: "Learning",
  dreaming: "Dreaming",
  active: "Active",
};

export function CharacterSandbox({ 
  characterId, 
  characterName, 
  compact = false,
  showSyncStatus = true 
}: CharacterSandboxProps) {
  const [state, setState] = useState<{
    visualState: 'idle' | 'active' | 'thinking' | 'dreaming' | 'learning';
    displayText: string;
    recentActions: string[];
    memoryPreview: string[];
    avatarExpression: string;
    environment?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'offline'>('synced');
  const [connectedDevices, setConnectedDevices] = useState<string[]>([]);

  const fetchState = useCallback(async () => {
    try {
      setSyncStatus('syncing');
      const [result, activeChar] = await Promise.all([
        getCharacterSandboxState(characterId),
        fetchActiveCharacter(),
      ]);
      
      setState(result);
      setIsActive(activeChar === characterId);
      setError(null);
      setSyncStatus('synced');
    } catch (e) {
      setError("Character offline");
      setSyncStatus('offline');
    } finally {
      setLoading(false);
    }
  }, [characterId]);

  const handleSelect = async () => {
    await setActiveCharacterServer(characterId);
    setIsActive(true);
  };

  if (loading) {
    return (
      <div className="bg-[#13121f] border border-white/10 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-sm text-gray-400">Connecting to {characterName}...</span>
        </div>
      </div>
    );
  }

  const visualState = state?.visualState || 'idle';
  const StatusIcon = STATUS_ICONS[visualState] || Activity;
  const statusColor = STATUS_COLORS[visualState] || "text-gray-400";
  const statusLabel = STATUS_LABELS[visualState] || visualState;

  if (compact) {
    return (
      <button 
        onClick={handleSelect}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border transition-all text-left ${
          isActive 
            ? 'bg-[#c9a84c]/10 border-[#c9a84c]/30' 
            : 'bg-[#13121f] border-white/10 hover:border-white/20'
        }`}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-500/20`}>
          <StatusIcon className={`w-4 h-4 ${statusColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">{characterName}</p>
          <p className="text-xs text-gray-400">{statusLabel}</p>
        </div>
        <div className="flex items-center gap-1">
          {showSyncStatus && (
            syncStatus === 'synced' ? (
              <Wifi className="w-3 h-3 text-green-500" />
            ) : syncStatus === 'syncing' ? (
              <RefreshCw className="w-3 h-3 text-yellow-500 animate-spin" />
            ) : (
              <WifiOff className="w-3 h-3 text-red-500" />
            )
          )}
          <div className={`w-2 h-2 rounded-full ${visualState === 'idle' ? 'bg-gray-500' : 'bg-green-500 animate-pulse'}`} />
        </div>
      </button>
    );
  }

  return (
    <div className="bg-[#13121f] border border-white/10 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <button 
            onClick={handleSelect}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive 
                ? 'bg-[#c9a84c] text-black' 
                : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
            }`}
          >
            <StatusIcon className={`w-5 h-5 ${isActive ? '' : statusColor}`} />
          </button>
          <div>
            <h3 className="text-base font-bold text-white">{characterName}</h3>
            <p className="text-xs text-gray-400 capitalize">{state?.avatarExpression || statusLabel}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {showSyncStatus && (
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-gray-500/10">
              {syncStatus === 'synced' ? (
                <Wifi className="w-3 h-3 text-green-500" />
              ) : syncStatus === 'syncing' ? (
                <RefreshCw className="w-3 h-3 text-yellow-500 animate-spin" />
              ) : (
                <WifiOff className="w-3 h-3 text-red-500" />
              )}
              <span className="text-xs text-gray-500 capitalize">{syncStatus}</span>
            </div>
          )}
          <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 ${statusColor}`}>
            {statusLabel}
          </div>
        </div>
      </div>

      <div className="px-4 py-3 border-b border-white/5">
        <p className="text-sm text-gray-300 italic">
          "{state?.displayText || 'Waiting for interaction...'}"
        </p>
      </div>

      {state?.environment && (
        <div className="px-4 py-2 bg-purple-500/10 border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span className="text-xs text-purple-300">{state.environment}</span>
          </div>
        </div>
      )}

      {state?.recentActions && state.recentActions.length > 0 && (
        <div className="px-4 py-3 border-b border-white/5">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Recent Activity</p>
          <div className="space-y-1">
            {state.recentActions.slice(0, 3).map((action: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                <Zap className="w-3 h-3 text-[#c9a84c]" />
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {state?.memoryPreview && state.memoryPreview.length > 0 && (
        <div className="px-4 py-3">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            <Brain className="w-3 h-3 inline mr-1" />
            Memory
          </p>
          <div className="space-y-1">
            {state.memoryPreview.slice(0, 2).map((mem: string, i: number) => (
              <p key={i} className="text-xs text-gray-400 line-clamp-1">{mem}</p>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-4 py-2 bg-black/20">
        <div className="flex items-center gap-2">
          <Heart className="w-3 h-3 text-red-400" />
          <span className="text-xs text-gray-500">Care Score: {state ? '0.85' : '--'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu className="w-3 h-3 text-gray-500" />
          <span className="text-xs text-gray-500">Stage 3</span>
        </div>
      </div>
    </div>
  );
}

export function CharacterCouncilView({ showSyncStatus = true }: { showSyncStatus?: boolean }) {
  const characters = [
    { id: 'aria', name: 'Aria', archetype: 'nurturer' },
    { id: 'marcus', name: 'Marcus', archetype: 'protector' },
    { id: 'luna', name: 'Luna', archetype: 'dreamer' },
    { id: 'sage', name: 'Sage', archetype: 'sage' },
    { id: 'sol', name: 'Sol', archetype: 'explorer' },
    { id: 'echo', name: 'Echo', archetype: 'creator' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {characters.map(char => (
        <CharacterSandbox 
          key={char.id} 
          characterId={char.id} 
          characterName={char.name}
          showSyncStatus={showSyncStatus}
        />
      ))}
    </div>
  );
}

export function ActiveCharacterWidget() {
  const [activeChar, setActiveChar] = useState<string | null>(null);
  const [character, setCharacter] = useState<ReturnType<typeof getCharacter> | null>(null);

  useEffect(() => {
    const fetchActive = async () => {
      const charId = await fetchActiveCharacter();
      setActiveChar(charId);
      if (charId) {
        setCharacter(getCharacter(charId));
      }
    };
    fetchActive();
    const interval = setInterval(fetchActive, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!activeChar || !character) {
    return (
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <Activity className="w-4 h-4" />
        <span>No character active</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 px-3 py-2 bg-[#c9a84c]/10 rounded-lg border border-[#c9a84c]/20">
      <span className="text-xl">{character.emoji}</span>
      <div>
        <p className="text-sm font-bold text-white">{character.name}</p>
        <p className="text-xs text-gray-400 capitalize">{character.archetype}</p>
      </div>
      <div className="ml-auto flex items-center gap-1">
        <Globe className="w-3 h-3 text-green-500" />
        <span className="text-xs text-green-500">Synced</span>
      </div>
    </div>
  );
}

export function SyncStatusPanel() {
  const [devices, setDevices] = useState<string[]>(['browser', 'desktop']);

  return (
    <div className="bg-[#13121f] border border-white/10 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <RefreshCw className="w-4 h-4 text-[#c9a84c]" />
        <span className="text-sm font-medium text-white">Sync Status</span>
      </div>
      <div className="flex items-center gap-3">
        {devices.map(device => (
          <div key={device} className="flex items-center gap-2">
            {device === 'browser' ? (
              <Globe className="w-4 h-4 text-green-500" />
            ) : device === 'desktop' ? (
              <Monitor className="w-4 h-4 text-green-500" />
            ) : (
              <Smartphone className="w-4 h-4 text-green-500" />
            )}
            <span className="text-xs text-gray-400 capitalize">{device}</span>
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">All devices in sync</p>
    </div>
  );
}

export default CharacterSandbox;