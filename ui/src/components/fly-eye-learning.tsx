"use client";

import { useState, useEffect, useCallback } from "react";
import { Eye, Brain, BookOpen, Lightbulb, TrendingUp, Target, Zap, Sparkles } from "lucide-react";
import { recordCharacterObservation, queryCharacterMemory, triggerCharacterDream, type FlyEyeObservation } from "@/lib/character-sync";

interface FlyEyeProps {
  characterId: string;
  characterName: string;
}

interface LearningInsight {
  id: string;
  type: 'observation' | 'pattern' | 'breakthrough' | 'memory';
  content: string;
  timestamp: string;
  importance: number;
}

export function FlyEyeLearning({ characterId, characterName }: FlyEyeProps) {
  const [insights, setInsights] = useState<LearningInsight[]>([]);
  const [isLearning, setIsLearning] = useState(false);
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState<string[]>([]);
  const [querying, setQuerying] = useState(false);

  // Fetch recent learning insights
  const fetchInsights = useCallback(async () => {
    // In production, this would call Sov3 MCP
    // For now, show mock data
    setInsights([
      { id: '1', type: 'pattern', content: 'User prefers concise responses in morning', timestamp: new Date().toISOString(), importance: 0.75 },
      { id: '2', type: 'observation', content: 'Detected emotional concern about work-life balance', timestamp: new Date().toISOString(), importance: 0.9 },
      { id: '3', type: 'memory', content: 'Recalled birthday conversation from 3 days ago', timestamp: new Date().toISOString(), importance: 0.6 },
      { id: '4', type: 'breakthrough', content: 'Discovered user responds well to poetic metaphors', timestamp: new Date().toISOString(), importance: 0.85 },
    ]);
  }, []);

  useEffect(() => {
    fetchInsights();
    const interval = setInterval(fetchInsights, 30000);
    return () => clearInterval(interval);
  }, [fetchInsights]);

  // Record a new observation
  const recordObservation = async (content: string, type: FlyEyeObservation['source']) => {
    setIsLearning(true);
    const observation: FlyEyeObservation = {
      timestamp: new Date().toISOString(),
      source: type,
      content,
      importance: 0.7,
    };
    await recordCharacterObservation(characterId, observation);
    setIsLearning(false);
    fetchInsights();
  };

  // Query character memory
  const handleQuery = async () => {
    if (!query.trim()) return;
    setQuerying(true);
    const results = await queryCharacterMemory(characterId, query, 5);
    setQueryResults(results);
    setQuerying(false);
  };

  // Trigger dream/consolidation
  const handleDream = async () => {
    await triggerCharacterDream(characterId);
  };

  const getInsightIcon = (type: LearningInsight['type']) => {
    switch (type) {
      case 'observation': return Eye;
      case 'pattern': return TrendingUp;
      case 'breakthrough': return Lightbulb;
      case 'memory': return BookOpen;
      default: return Brain;
    }
  };

  const getInsightColor = (type: LearningInsight['type']) => {
    switch (type) {
      case 'observation': return 'text-blue-400 bg-blue-500/20';
      case 'pattern': return 'text-purple-400 bg-purple-500/20';
      case 'breakthrough': return 'text-[#c9a84c] bg-[#c9a84c]/20';
      case 'memory': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="bg-[#13121f] border border-white/10 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Eye className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              Fly-Eye Learning
              <Sparkles className="w-4 h-4 text-[#c9a84c]" />
            </h3>
            <p className="text-xs text-gray-400">{characterName}'s observation system</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDream}
            className="px-3 py-1.5 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 flex items-center gap-1"
          >
            <Brain className="w-3 h-3" />
            Dream
          </button>
        </div>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-4 gap-2 px-4 py-3 border-b border-white/5">
        <div className="text-center">
          <p className="text-lg font-bold text-white">{insights.length}</p>
          <p className="text-xs text-gray-500">Insights</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-purple-400">12</p>
          <p className="text-xs text-gray-500">Patterns</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-blue-400">847</p>
          <p className="text-xs text-gray-500">Memories</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-green-400">94%</p>
          <p className="text-xs text-gray-500">Retention</p>
        </div>
      </div>

      {/* Query Memory */}
      <div className="px-4 py-3 border-b border-white/5">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleQuery()}
            placeholder="Ask about past conversations..."
            className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
          />
          <button
            onClick={handleQuery}
            disabled={querying}
            className="px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 text-sm font-medium disabled:opacity-50"
          >
            {querying ? '...' : 'Query'}
          </button>
        </div>
        {queryResults.length > 0 && (
          <div className="mt-2 space-y-1">
            {queryResults.map((result, i) => (
              <p key={i} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">{result}</p>
            ))}
          </div>
        )}
      </div>

      {/* Recent Insights */}
      <div className="px-4 py-3 max-h-64 overflow-y-auto">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Recent Learning</p>
        <div className="space-y-2">
          {insights.map(insight => {
            const Icon = getInsightIcon(insight.type);
            const colorClass = getInsightColor(insight.type);
            return (
              <div key={insight.id} className="flex items-start gap-3 p-2 rounded-lg bg-white/5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${colorClass}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-300 line-clamp-2">{insight.content}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500 capitalize">{insight.type}</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{Math.round(insight.importance * 100)}% importance</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning Status */}
      <div className="px-4 py-2 bg-black/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isLearning ? 'bg-purple-500 animate-pulse' : 'bg-green-500'}`} />
          <span className="text-xs text-gray-500">{isLearning ? 'Processing observation...' : 'Observing'}</span>
        </div>
        <div className="flex items-center gap-1">
          <Target className="w-3 h-3 text-gray-500" />
          <span className="text-xs text-gray-500">Auto-learning enabled</span>
        </div>
      </div>
    </div>
  );
}

// Fly-Eye Dashboard for all characters
export function FlyEyeDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FlyEyeLearning characterId="aria" characterName="Aria" />
      <FlyEyeLearning characterId="sage" characterName="Sage" />
      <FlyEyeLearning characterId="marcus" characterName="Marcus" />
      <FlyEyeLearning characterId="luna" characterName="Luna" />
    </div>
  );
}

export default FlyEyeLearning;