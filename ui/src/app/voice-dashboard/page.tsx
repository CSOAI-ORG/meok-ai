'use client';

import { useState, useEffect } from 'react';

interface VoiceProfile {
  id: string;
  characterId: string;
  voiceName: string;
  provider: string;
  settings: {
    stability: number;
    similarity: number;
    style: number;
    speed: number;
  };
}

interface Provider {
  name: string;
  description: string;
  models: string[];
  features: string[];
}

export default function VoiceDashboard() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [voices, setVoices] = useState<VoiceProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState<string>('elevenlabs');
  const [textToSpeak, setTextToSpeak] = useState('Hello! I am your AI companion. How can I help you today?');
  const [speaking, setSpeaking] = useState(false);
  const [characterId, setCharacterId] = useState('companion-1');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [providersRes, voicesRes] = await Promise.all([
        fetch('/api/voice/orchestration?action=providers'),
        fetch('/api/voice/orchestration?action=voices'),
      ]);
      
      const providersData = await providersRes.json();
      const voicesData = await voicesRes.json();
      
      setProviders(Object.values(providersData.providers || {}));
      setVoices(voicesData.voices || []);
    } catch (error) {
      console.error('Failed to load voice data:', error);
    } finally {
      setLoading(false);
    }
  }

  const speak = async () => {
    if (!textToSpeak.trim()) return;
    setSpeaking(true);
    
    try {
      const res = await fetch('/api/voice/orchestration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'speak',
          characterId,
          text: textToSpeak,
        }),
      });
      
      const data = await res.json();
      console.log('Speech synthesized:', data);
    } catch (error) {
      console.error('Speech failed:', error);
    } finally {
      setSpeaking(false);
    }
  };

  const testVoice = async (voiceId: string) => {
    setSpeaking(true);
    try {
      const res = await fetch('/api/voice/orchestration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'speak',
          characterId,
          text: 'This is a test of my voice. How does it sound?',
        }),
      });
      const data = await res.json();
      console.log('Voice test:', data);
    } finally {
      setSpeaking(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🎤</div>
          <div className="text-xl">Loading Voice Dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Voice Command Center</h1>
          <p className="text-gray-400">Multi-Provider Voice Synthesis • Character Voice Profiles • Cloning</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Main Panel */}
          <div className="col-span-2 space-y-6">
            {/* Provider Selection */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Voice Providers</h2>
              <div className="grid grid-cols-3 gap-4">
                {providers.map(provider => (
                  <button type="button"
                    key={provider.name}
                    onClick={() => setSelectedProvider(provider.name.toLowerCase())}
                    className={`p-4 rounded-lg text-left transition ${
                      selectedProvider === provider.name.toLowerCase()
                        ? 'bg-blue-600 border-2 border-blue-400'
                        : 'bg-gray-800 hover:bg-gray-700 border-2 border-transparent'
                    }`}
                  >
                    <div className="font-semibold">{provider.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{provider.description}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {provider.features.slice(0, 2).map(f => (
                        <span key={f} className="text-xs bg-gray-900 px-2 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Input */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Speak</h2>
              <div className="mb-4">
                <label className="text-sm text-gray-400 mb-2 block">Character</label>
                <select
                  value={characterId}
                  onChange={(e) => setCharacterId(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 w-full"
                >
                  <option value="companion-1">Nova (Mentor)</option>
                  <option value="companion-2">Atlas (Guardian)</option>
                  <option value="companion-3">Luna (Companion)</option>
                </select>
              </div>
              <textarea
                value={textToSpeak}
                onChange={(e) => setTextToSpeak(e.target.value)}
                placeholder="Enter text to speak..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 h-32 text-white placeholder-gray-500 resize-none"
              />
              <button type="button"
                onClick={speak}
                disabled={speaking || !textToSpeak.trim()}
                className="mt-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                {speaking ? (
                  <>
                    <span className="animate-pulse">🔊</span> Speaking...
                  </>
                ) : (
                  <>
                    <span>🎤</span> Speak
                  </>
                )}
              </button>
            </div>

            {/* Voice Settings */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Voice Settings</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Stability</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="50"
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500 mt-1">Voice consistency</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Similarity</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="75"
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500 mt-1">Voice clone strength</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Style</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="50"
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500 mt-1">Expressive range</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Speed</label>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    defaultValue="100"
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500 mt-1">Speech rate</div>
                </div>
              </div>
            </div>

            {/* Voice Cloning */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Voice Cloning</h2>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">🎙️</div>
                <div className="text-gray-400 mb-4">Drop audio file or click to upload</div>
                <div className="text-xs text-gray-500">Supports MP3, WAV, FLAC • Max 30 seconds</div>
              </div>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
                Clone Voice
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Voice Profiles */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Character Voices</h2>
              <div className="space-y-3">
                {[
                  { name: 'Nova', voice: 'Rachel', provider: 'ElevenLabs', status: 'active' },
                  { name: 'Atlas', voice: 'Adam', provider: 'ElevenLabs', status: 'active' },
                  { name: 'Luna', voice: 'Sarah', provider: 'ElevenLabs', status: 'active' },
                ].map((v, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{v.name}</div>
                        <div className="text-xs text-gray-400">{v.voice} • {v.provider}</div>
                      </div>
                      <button type="button"
                        onClick={() => testVoice(v.voice)}
                        disabled={speaking}
                        className="text-sm text-blue-400 hover:text-blue-300"
                      >
                        Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-left text-sm flex items-center gap-2">
                  <span>📝</span> Transcription
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-left text-sm flex items-center gap-2">
                  <span>🎵</span> Voice Effects
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-left text-sm flex items-center gap-2">
                  <span>🔄</span> Voice Conversion
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-left text-sm flex items-center gap-2">
                  <span>📊</span> Audio Analysis
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Voice Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{providers.length}</div>
                  <div className="text-xs text-gray-400">Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{voices.length || 3}</div>
                  <div className="text-xs text-gray-400">Profiles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24kHz</div>
                  <div className="text-xs text-gray-400">Sample Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">MP3</div>
                  <div className="text-xs text-gray-400">Format</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
