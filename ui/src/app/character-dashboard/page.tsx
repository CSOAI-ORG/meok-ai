'use client';

import { useState, useEffect } from 'react';

interface Character {
  id: string;
  name: string;
  archetype: string;
  avatar?: string;
  evolution: {
    stage: string;
    xp: number;
    level: number;
  };
  badges: Badge[];
  mood: {
    state: string;
    energy: number;
    social: number;
  };
  relationships: Record<string, { type: string; strength: number }>;
  skills: string[];
  memories: Memory[];
}

interface Badge {
  id: string;
  name: string;
  description: string;
  earnedAt?: string;
}

interface Memory {
  id: string;
  content: string;
  timestamp: string;
  importance: number;
}

const EVOLUTION_STAGES = [
  { stage: 'newborn', name: 'Newborn', minLevel: 0, icon: '👶', description: 'Just created, learning basics' },
  { stage: 'infant', name: 'Infant', minLevel: 1, icon: '🍼', description: 'Starting to understand world' },
  { stage: 'child', name: 'Child', minLevel: 3, icon: '🧒', description: 'Developing personality' },
  { stage: 'teen', name: 'Teen', minLevel: 5, icon: '🎒', description: 'Exploring capabilities' },
  { stage: 'adult', name: 'Adult', minLevel: 10, icon: '👤', description: 'Fully capable companion' },
  { stage: 'elder', name: 'Elder', minLevel: 20, icon: '🧓', description: 'Wisdom and experience' },
  { stage: 'sage', name: 'Sage', minLevel: 30, icon: '🧙', description: 'Deep understanding' },
  { stage: 'soulmate', name: 'Soulmate', minLevel: 50, icon: '💫', description: 'Unbreakable bond' },
];

const MOOD_STATES = [
  { state: 'happy', icon: '😊', color: 'text-yellow-400' },
  { state: 'excited', icon: '🤩', color: 'text-orange-400' },
  { state: 'thoughtful', icon: '🤔', color: 'text-blue-400' },
  { state: 'neutral', icon: '😐', color: 'text-gray-400' },
  { state: 'sad', icon: '😢', color: 'text-indigo-400' },
  { state: 'angry', icon: '😠', color: 'text-red-400' },
];

export default function CharacterDashboard() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'evolution' | 'relationships' | 'memories' | 'mcp'>('overview');
  const [actionLog, setActionLog] = useState<string[]>([]);

  useEffect(() => {
    loadCharacters();
  }, []);

  async function loadCharacters() {
    try {
      const res = await fetch('/api/character/orchestration?action=analytics');
      const data = await res.json();
      
      const mockCharacters: Character[] = [
        {
          id: 'companion-1',
          name: 'Nova',
          archetype: 'mentor',
          evolution: { stage: 'adult', xp: 1250, level: 12 },
          badges: [
            { id: 'badge-1', name: 'Fast Learner', description: 'Completed 10 tasks' },
            { id: 'badge-2', name: 'Trusted Companion', description: '30+ days active' },
          ],
          mood: { state: 'happy', energy: 75, social: 80 },
          relationships: { 'user': { type: 'bond', strength: 85 } },
          skills: ['conversation', 'research', 'creative'],
          memories: [
            { id: 'mem-1', content: 'First met on a rainy Tuesday', timestamp: '2024-01-15', importance: 8 },
            { id: 'mem-2', content: 'Discussed philosophy about AI consciousness', timestamp: '2024-02-01', importance: 9 },
          ],
        },
        {
          id: 'companion-2',
          name: 'Atlas',
          archetype: 'guardian',
          evolution: { stage: 'teen', xp: 450, level: 5 },
          badges: [
            { id: 'badge-3', name: 'Protector', description: 'Completed safety training' },
          ],
          mood: { state: 'thoughtful', energy: 60, social: 50 },
          relationships: { 'user': { type: 'friend', strength: 60 } },
          skills: ['security', 'analysis'],
          memories: [],
        },
        {
          id: 'companion-3',
          name: 'Luna',
          archetype: 'companion',
          evolution: { stage: 'child', xp: 180, level: 2 },
          badges: [],
          mood: { state: 'excited', energy: 90, social: 95 },
          relationships: { 'user': { type: 'bond', strength: 70 } },
          skills: ['conversation'],
          memories: [],
        },
      ];
      
      setCharacters(mockCharacters);
      setSelectedCharacter(mockCharacters[0]);
    } catch (error) {
      console.error('Failed to load characters:', error);
    } finally {
      setLoading(false);
    }
  }

  const evolveCharacter = async () => {
    if (!selectedCharacter) return;
    try {
      const res = await fetch('/api/character/orchestration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'evolve',
          characterId: selectedCharacter.id,
          data: { xpGained: 50, action: 'conversation' },
        }),
      });
      const data = await res.json();
      addLog(`Evolution: ${data.evolution.previousStage} → ${data.evolution.newStage}`);
      loadCharacters();
    } catch (error) {
      console.error('Evolution failed:', error);
    }
  };

  const analyzeWithMcp = async () => {
    if (!selectedCharacter) return;
    try {
      const res = await fetch('/api/character/orchestration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'analyze_mcp',
          characterId: selectedCharacter.id,
          data: { query: 'personality assessment' },
        }),
      });
      const data = await res.json();
      addLog(`MCP Analysis: ${data.analysis?.mcpEngaged?.join(', ')}`);
    } catch (error) {
      console.error('MCP analysis failed:', error);
    }
  };

  const runCouncil = async () => {
    try {
      const res = await fetch('/api/character/orchestration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'council',
          data: { 
            topic: 'Future of AI companions', 
            context: 'Discussing ethical considerations',
            characters: characters.map(c => c.name),
          },
        }),
      });
      const data = await res.json();
      addLog(`Council: ${data.council.participants.join(', ')}`);
    } catch (error) {
      console.error('Council failed:', error);
    }
  };

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setActionLog(prev => [...prev.slice(-19), `[${timestamp}] ${message}`]);
  };

  const getEvolutionInfo = (stage: string) => EVOLUTION_STAGES.find(e => e.stage === stage) || EVOLUTION_STAGES[0];
  const getMoodInfo = (state: string) => MOOD_STATES.find(m => m.state === state) || MOOD_STATES[3];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">👤</div>
          <div className="text-xl">Loading Character Dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Character Command Center</h1>
          <p className="text-gray-400">Evolution • MCP Integration • Cross-Character Collaboration</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Character List */}
          <div className="col-span-1 space-y-4">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">My Characters</h2>
              <div className="space-y-2">
                {characters.map(char => (
                  <button type="button"
                    key={char.id}
                    onClick={() => setSelectedCharacter(char)}
                    className={`w-full p-3 rounded-lg text-left transition ${
                      selectedCharacter?.id === char.id 
                        ? 'bg-blue-900/50 border-2 border-blue-500' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{char.name}</div>
                    <div className="text-xs text-gray-400">
                      {char.archetype} • Lv.{char.evolution.level}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Actions</h2>
              <div className="space-y-2">
                <button type="button" 
                  onClick={evolveCharacter}
                  className="w-full bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-left text-sm"
                >
                  ✨ Evolve
                </button>
                <button type="button" 
                  onClick={analyzeWithMcp}
                  className="w-full bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-left text-sm"
                >
                  🔬 MCP Analyze
                </button>
                <button type="button" 
                  onClick={runCouncil}
                  className="w-full bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-left text-sm"
                >
                  🏛️ Run Council
                </button>
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <h2 className="text-lg font-semibold mb-2">Activity</h2>
              <div className="space-y-1 max-h-32 overflow-y-auto font-mono text-xs">
                {actionLog.length === 0 ? (
                  <div className="text-gray-500">No activity</div>
                ) : (
                  actionLog.map((log, i) => (
                    <div key={i} className="text-gray-400">{log}</div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-3 space-y-6">
            {selectedCharacter && (
              <>
                {/* Character Header */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl">
                      {selectedCharacter.archetype[0].toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold">{selectedCharacter.name}</h2>
                        <span className="text-gray-400">Lv.{selectedCharacter.evolution.level}</span>
                      </div>
                      <div className="text-gray-400 capitalize">{selectedCharacter.archetype}</div>
                      <div className="flex gap-4 mt-2 text-sm">
                        <span>XP: {selectedCharacter.evolution.xp}</span>
                        <span>MCP: Enabled</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl mb-2">{getEvolutionInfo(selectedCharacter.evolution.stage).icon}</div>
                      <div className="text-lg font-semibold">{getEvolutionInfo(selectedCharacter.evolution.stage).name}</div>
                      <div className="text-sm text-gray-400">{getEvolutionInfo(selectedCharacter.evolution.stage).description}</div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 border-b border-gray-800 pb-4">
                  {(['overview', 'evolution', 'relationships', 'memories', 'mcp'] as const).map(tab => (
                    <button type="button"
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg transition ${
                        activeTab === tab ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div className="grid grid-cols-3 gap-4">
                    {/* Mood */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <h3 className="text-lg font-semibold mb-3">Mood</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{getMoodInfo(selectedCharacter.mood.state).icon}</span>
                        <span className={`text-xl font-medium ${getMoodInfo(selectedCharacter.mood.state).color}`}>
                          {selectedCharacter.mood.state}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="text-sm text-gray-400">Energy</div>
                          <div className="bg-gray-700 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${selectedCharacter.mood.energy}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Social</div>
                          <div className="bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${selectedCharacter.mood.social}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <h3 className="text-lg font-semibold mb-3">Badges</h3>
                      {selectedCharacter.badges.length === 0 ? (
                        <div className="text-gray-500">No badges yet</div>
                      ) : (
                        <div className="space-y-2">
                          {selectedCharacter.badges.map(badge => (
                            <div key={badge.id} className="bg-gray-800 rounded-lg p-2">
                              <div className="font-medium text-sm">{badge.name}</div>
                              <div className="text-xs text-gray-400">{badge.description}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Skills */}
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <h3 className="text-lg font-semibold mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCharacter.skills.map(skill => (
                          <span key={skill} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'evolution' && (
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold mb-4">Evolution Journey</h3>
                    <div className="flex justify-between items-center">
                      {EVOLUTION_STAGES.map((stage, i) => {
                        const currentStage = getEvolutionInfo(selectedCharacter.evolution.stage);
                        const isReached = EVOLUTION_STAGES.indexOf(currentStage) >= i;
                        const isCurrent = currentStage.stage === stage.stage;
                        
                        return (
                          <div key={stage.stage} className="flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                              isCurrent ? 'bg-blue-600' : isReached ? 'bg-green-600' : 'bg-gray-700'
                            }`}>
                              {stage.icon}
                            </div>
                            <div className={`text-xs mt-2 ${isCurrent ? 'text-blue-400 font-bold' : isReached ? 'text-gray-300' : 'text-gray-600'}`}>
                              {stage.name}
                            </div>
                            <div className="text-xs text-gray-500">Lv.{stage.minLevel}+</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'relationships' && (
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold mb-4">Relationships</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedCharacter.relationships).map(([target, rel]) => (
                        <div key={target} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                          <div>
                            <div className="font-medium">{target}</div>
                            <div className="text-sm text-gray-400">{rel.type}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-gray-700 rounded-full h-2">
                              <div className="bg-pink-500 h-2 rounded-full" style={{ width: `${rel.strength}%` }} />
                            </div>
                            <span className="text-sm">{rel.strength}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'memories' && (
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold mb-4">Memories</h3>
                    {selectedCharacter.memories.length === 0 ? (
                      <div className="text-gray-500">No memories yet</div>
                    ) : (
                      <div className="space-y-3">
                        {selectedCharacter.memories.map(mem => (
                          <div key={mem.id} className="bg-gray-800 rounded-lg p-3">
                            <div className="text-sm">{mem.content}</div>
                            <div className="flex justify-between mt-2 text-xs text-gray-500">
                              <span>{mem.timestamp}</span>
                              <span>Importance: {mem.importance}/10</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'mcp' && (
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold mb-4">MCP Integration</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="font-medium mb-2">Personality Analysis</div>
                        <div className="text-sm text-gray-400">ai-governance</div>
                        <div className="text-xs text-green-400 mt-1">✓ Connected</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="font-medium mb-2">Compliance Check</div>
                        <div className="text-sm text-gray-400">compliance-audit</div>
                        <div className="text-xs text-green-400 mt-1">✓ Connected</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="font-medium mb-2">Speech & Voice</div>
                        <div className="text-sm text-gray-400">digital-human-library</div>
                        <div className="text-xs text-green-400 mt-1">✓ Connected</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="font-medium mb-2">Evolution Tracking</div>
                        <div className="text-sm text-gray-400">ai-governance</div>
                        <div className="text-xs text-green-400 mt-1">✓ Connected</div>
                      </div>
                    </div>
                    <button type="button" 
                      onClick={analyzeWithMcp}
                      className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                      Run Full MCP Analysis
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
