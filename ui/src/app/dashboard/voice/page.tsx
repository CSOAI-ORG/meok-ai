'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Mic, Play, Volume2, ChevronDown, ChevronUp, Check, HelpCircle, Bell } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Types & Constants
// ─────────────────────────────────────────────────────────────────────────────

const DEEP = '#0d0c18'
const SURFACE = '#13121f'
const BORDER = 'rgba(255,255,255,0.07)'
const GOLD = '#c9a84c'

interface CharacterVoice {
  id: string
  name: string
  archetype: string
  emoji: string
  voiceStyle: string
  preferredVoiceName: string
  pitch: number
  samplePhrase: string
}

const CHARACTERS: CharacterVoice[] = [
  {
    id: 'aria',
    name: 'Aria',
    archetype: 'Empathic Healer',
    emoji: '🌸',
    voiceStyle: 'Warm and empathic',
    preferredVoiceName: 'Samantha',
    pitch: 1.1,
    samplePhrase: "I'm here with you. Whatever you're feeling right now is completely valid.",
  },
  {
    id: 'sage',
    name: 'Sage',
    archetype: 'Ancient Wisdom',
    emoji: '🦉',
    voiceStyle: 'Measured and wise',
    preferredVoiceName: 'Fred',
    pitch: 0.9,
    samplePhrase: 'Every question you ask is a doorway to deeper understanding.',
  },
  {
    id: 'marcus',
    name: 'Marcus',
    archetype: 'Protective Guardian',
    emoji: '🛡️',
    voiceStyle: 'Deep and protective',
    preferredVoiceName: 'Alex',
    pitch: 0.8,
    samplePhrase: "I've got your back. Let's work through this together.",
  },
  {
    id: 'luna',
    name: 'Luna',
    archetype: 'Dream Weaver',
    emoji: '🌙',
    voiceStyle: 'Soft and dreamy',
    preferredVoiceName: 'Samantha',
    pitch: 1.2,
    samplePhrase: 'Close your eyes and imagine a world where anything is possible.',
  },
  {
    id: 'gabriel',
    name: 'Gabriel',
    archetype: 'Balanced Mentor',
    emoji: '⚖️',
    voiceStyle: 'Clear and balanced',
    preferredVoiceName: 'Daniel',
    pitch: 1.0,
    samplePhrase: 'The path forward becomes clear when we look at both sides with calm intention.',
  },
  {
    id: 'shanti',
    name: 'Shanti',
    archetype: 'Spiritual Guide',
    emoji: '🪷',
    voiceStyle: 'Gentle and grounding',
    preferredVoiceName: 'Moira',
    pitch: 1.1,
    samplePhrase: 'Breathe with me. Feel the ground beneath you. You are held.',
  },
  {
    id: 'scout',
    name: 'Scout',
    archetype: 'Energetic Explorer',
    emoji: '⚡',
    voiceStyle: 'Bright and energetic',
    preferredVoiceName: 'Karen',
    pitch: 1.3,
    samplePhrase: "Let's go! There's a whole world out there waiting for us to discover it!",
  },
]

interface VoiceSettings {
  selectedCharacterId: string
  speed: number
  pitch: number
  volume: number
  useForNotifications: boolean
}

const DEFAULT_SETTINGS: VoiceSettings = {
  selectedCharacterId: 'aria',
  speed: 1.0,
  pitch: 1.1,
  volume: 0.8,
  useForNotifications: false,
}

const STORAGE_KEY = 'meok_voice_settings'

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function findVoice(voices: SpeechSynthesisVoice[], preferredName: string): SpeechSynthesisVoice | null {
  // Exact match first
  const exact = voices.find(v => v.name === preferredName)
  if (exact) return exact

  // Partial match
  const partial = voices.find(v => v.name.toLowerCase().includes(preferredName.toLowerCase()))
  if (partial) return partial

  // Fallback: first English voice
  return voices.find(v => v.lang.startsWith('en')) || voices[0] || null
}

// ─────────────────────────────────────────────────────────────────────────────
// Slider Component
// ─────────────────────────────────────────────────────────────────────────────

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
}

function SettingSlider({ label, value, min, max, step, display, onChange }: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/70">{label}</span>
        <span className="text-sm font-mono" style={{ color: GOLD }}>{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${GOLD} 0%, ${GOLD} ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-white/30">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function VoicePage() {
  const [settings, setSettings] = useState<VoiceSettings>(DEFAULT_SETTINGS)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [testPhrase, setTestPhrase] = useState('')
  const [speaking, setSpeaking] = useState<string | null>(null) // characterId or 'test'
  const [showHelp, setShowHelp] = useState(false)
  const [showVoiceList, setShowVoiceList] = useState(false)
  const [savedIndicator, setSavedIndicator] = useState(false)
  const synthRef = useRef<SpeechSynthesis | null>(null)

  // Load settings from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    synthRef.current = window.speechSynthesis

    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(saved) })
      }
    } catch {
      // ignore
    }

    // Load voices
    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices()
      if (available.length > 0) setVoices(available)
    }

    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  // Persist settings to localStorage whenever they change
  const updateSettings = useCallback((patch: Partial<VoiceSettings>) => {
    setSettings(prev => {
      const next = { ...prev, ...patch }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
    setSavedIndicator(true)
    setTimeout(() => setSavedIndicator(false), 1500)
  }, [])

  const speak = useCallback(
    (text: string, character: CharacterVoice, id: string) => {
      if (!synthRef.current) return
      synthRef.current.cancel()

      const utter = new SpeechSynthesisUtterance(text)
      const voice = findVoice(voices, character.preferredVoiceName)
      if (voice) utter.voice = voice
      utter.pitch = character.pitch * settings.pitch
      utter.rate = settings.speed
      utter.volume = settings.volume

      setSpeaking(id)
      utter.onend = () => setSpeaking(null)
      utter.onerror = () => setSpeaking(null)
      synthRef.current.speak(utter)
    },
    [voices, settings.pitch, settings.speed, settings.volume]
  )

  const selectedCharacter = CHARACTERS.find(c => c.id === settings.selectedCharacterId) || CHARACTERS[0]

  const handleTestSpeak = () => {
    const phrase = testPhrase.trim() || selectedCharacter.samplePhrase
    speak(phrase, selectedCharacter, 'test')
  }

  return (
    <div className="min-h-screen" style={{ background: DEEP, color: 'white' }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 border-b"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Mic className="w-6 h-6" style={{ color: GOLD }} />
              Character Voice
            </h1>
            <p className="text-sm text-white/50 mt-0.5">Hear your AI companion speak</p>
          </div>
          {savedIndicator && (
            <div className="flex items-center gap-1.5 text-sm" style={{ color: GOLD }}>
              <Check className="w-4 h-4" />
              Saved
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Character Voice Cards */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-white/80">Choose a Voice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CHARACTERS.map(character => {
              const isSelected = settings.selectedCharacterId === character.id
              const isSpeaking = speaking === character.id
              return (
                <div
                  key={character.id}
                  onClick={() => updateSettings({ selectedCharacterId: character.id, pitch: character.pitch })}
                  className="rounded-xl p-4 cursor-pointer transition-all border relative"
                  style={{
                    background: isSelected ? 'rgba(201,168,76,0.08)' : SURFACE,
                    borderColor: isSelected ? GOLD : BORDER,
                    boxShadow: isSelected ? `0 0 0 1px ${GOLD}33` : 'none',
                  }}
                >
                  {isSelected && (
                    <div
                      className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: GOLD }}
                    >
                      <Check className="w-3 h-3 text-black" />
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{character.emoji}</span>
                    <div>
                      <div className="font-semibold text-sm">{character.name}</div>
                      <div className="text-xs text-white/40">{character.archetype}</div>
                    </div>
                  </div>

                  <p className="text-xs text-white/60 mb-3 leading-relaxed">{character.voiceStyle}</p>

                  <button type="button"
                    onClick={e => {
                      e.stopPropagation()
                      speak(character.samplePhrase, character, character.id)
                    }}
                    disabled={isSpeaking}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all"
                    style={{
                      borderColor: isSpeaking ? GOLD : BORDER,
                      color: isSpeaking ? GOLD : 'rgba(255,255,255,0.5)',
                      background: isSpeaking ? 'rgba(201,168,76,0.1)' : 'transparent',
                    }}
                  >
                    <Play className="w-3 h-3" />
                    {isSpeaking ? 'Speaking...' : 'Preview'}
                  </button>
                </div>
              )
            })}
          </div>
        </section>

        {/* Voice Customization */}
        <section
          className="rounded-xl border p-6 space-y-5"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <h2 className="text-lg font-semibold text-white/80 flex items-center gap-2">
            <Volume2 className="w-5 h-5" style={{ color: GOLD }} />
            Voice Customization
          </h2>

          <SettingSlider
            label="Speed"
            value={settings.speed}
            min={0.5}
            max={2.0}
            step={0.05}
            display={`${settings.speed.toFixed(2)}x`}
            onChange={v => updateSettings({ speed: v })}
          />
          <SettingSlider
            label="Pitch"
            value={settings.pitch}
            min={0.5}
            max={2.0}
            step={0.05}
            display={`${settings.pitch.toFixed(2)}x`}
            onChange={v => updateSettings({ pitch: v })}
          />
          <SettingSlider
            label="Volume"
            value={settings.volume}
            min={0}
            max={1}
            step={0.05}
            display={`${Math.round(settings.volume * 100)}%`}
            onChange={v => updateSettings({ volume: v })}
          />
        </section>

        {/* Test Phrase */}
        <section
          className="rounded-xl border p-6"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <h2 className="text-lg font-semibold text-white/80 mb-4">Test Phrase</h2>
          <div className="flex gap-3">
            <input
              type="text"
              value={testPhrase}
              onChange={e => setTestPhrase(e.target.value)}
              placeholder={`"${selectedCharacter.samplePhrase.slice(0, 50)}..."`}
              className="flex-1 rounded-lg px-4 py-2.5 text-sm border outline-none focus:ring-1 bg-transparent text-white placeholder-white/30 transition-all"
              style={{ borderColor: BORDER }}
              onKeyDown={e => e.key === 'Enter' && handleTestSpeak()}
            />
            <button type="button"
              onClick={handleTestSpeak}
              disabled={speaking === 'test'}
              className="px-5 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center gap-2"
              style={{
                background: speaking === 'test' ? 'rgba(201,168,76,0.3)' : GOLD,
                color: speaking === 'test' ? GOLD : '#0d0c18',
                cursor: speaking === 'test' ? 'not-allowed' : 'pointer',
              }}
            >
              <Mic className="w-4 h-4" />
              {speaking === 'test' ? 'Speaking...' : 'Speak'}
            </button>
          </div>
          <p className="text-xs text-white/30 mt-2">
            Leave blank to use {selectedCharacter.name}'s sample phrase. Press Enter to speak.
          </p>
        </section>

        {/* Available System Voices */}
        <section
          className="rounded-xl border"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <button type="button"
            onClick={() => setShowVoiceList(v => !v)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <div>
              <h2 className="text-lg font-semibold text-white/80">Available System Voices</h2>
              <p className="text-xs text-white/40 mt-0.5">{voices.length} voices detected on this device</p>
            </div>
            {showVoiceList ? (
              <ChevronUp className="w-5 h-5 text-white/40" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white/40" />
            )}
          </button>

          {showVoiceList && (
            <div className="border-t px-5 pb-5 pt-3 space-y-1.5 max-h-64 overflow-y-auto" style={{ borderColor: BORDER }}>
              {voices.length === 0 ? (
                <p className="text-sm text-white/40 py-4 text-center">
                  No voices loaded yet. Try refreshing the page.
                </p>
              ) : (
                voices.map((voice, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1.5 px-3 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    <span className="text-sm text-white/70">{voice.name}</span>
                    <span className="text-xs text-white/30">{voice.lang}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </section>

        {/* Use for Notifications Toggle */}
        <section
          className="rounded-xl border p-5 flex items-center justify-between"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5" style={{ color: GOLD }} />
            <div>
              <div className="font-medium text-sm">Use for notifications</div>
              <div className="text-xs text-white/40 mt-0.5">
                {selectedCharacter.name} will speak your app notifications
              </div>
            </div>
          </div>
          <button type="button"
            onClick={() => updateSettings({ useForNotifications: !settings.useForNotifications })}
            className="relative w-12 h-6 rounded-full transition-colors flex-shrink-0"
            style={{
              background: settings.useForNotifications ? GOLD : 'rgba(255,255,255,0.1)',
            }}
          >
            <span
              className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
              style={{
                transform: settings.useForNotifications ? 'translateX(24px)' : 'translateX(0)',
              }}
            />
          </button>
        </section>

        {/* Voice Not Working Help */}
        <section className="rounded-xl border" style={{ borderColor: BORDER }}>
          <button type="button"
            onClick={() => setShowHelp(h => !h)}
            className="w-full flex items-center gap-2 p-5 text-left"
          >
            <HelpCircle className="w-5 h-5 text-white/40" />
            <span className="text-sm font-medium text-white/60">Voice not working?</span>
            {showHelp ? (
              <ChevronUp className="w-4 h-4 text-white/30 ml-auto" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white/30 ml-auto" />
            )}
          </button>

          {showHelp && (
            <div
              className="border-t px-5 pb-5 pt-3 space-y-3 text-sm text-white/50 leading-relaxed"
              style={{ borderColor: BORDER }}
            >
              <p>
                <span className="text-white/80 font-medium">Browser TTS limitations</span> — voice
                synthesis uses your browser's built-in Web Speech API and requires no external service.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-white/70">No voices listed?</strong> Refresh the page. Some
                  browsers load voices asynchronously and may take a moment.
                </li>
                <li>
                  <strong className="text-white/70">Wrong voice?</strong> Named voices like "Samantha"
                  are macOS-specific. On other platforms, a similar voice will be chosen automatically.
                </li>
                <li>
                  <strong className="text-white/70">Silent output?</strong> Check your device volume
                  and make sure your browser isn't muted. Some browsers block autoplay audio.
                </li>
                <li>
                  <strong className="text-white/70">Chrome on Android?</strong> Voice support is
                  limited. Firefox or Safari tend to work better for TTS.
                </li>
                <li>
                  <strong className="text-white/70">Firefox?</strong> Ensure "Text-to-Speech" is
                  enabled in browser settings under Accessibility.
                </li>
              </ul>
              <p className="text-white/30 text-xs pt-1">
                This feature uses <code className="text-white/50">window.speechSynthesis</code> — a
                standard browser API. No audio data is sent to any server.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
