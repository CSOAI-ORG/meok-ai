/**
 * MEOK AI LABS — Cross-Device Character Sync Types
 * 
 * Shared types for character state synchronization
 * Can be used in both client and server contexts
 */

export interface DeviceInfo {
  deviceId: string;
  deviceType: 'browser' | 'desktop' | 'mobile' | 'voice';
  lastSeen: string;
  characterStates: Record<string, DeviceCharacterState>;
}

export interface DeviceCharacterState {
  characterId: string;
  mood: string;
  conversationContext: string[];
  lastMessage?: string;
  activeSince?: string;
}

export interface CharacterSyncEvent {
  type: 'state_update' | 'character_selected' | 'mood_change' | 'conversation_update';
  characterId: string;
  deviceId: string;
  timestamp: string;
  data: Record<string, unknown>;
}

export interface CharacterState {
  characterId: string;
  mood: 'neutral' | 'happy' | 'sad' | 'excited' | 'calm' | 'curious' | 'worried' | 'loving';
  context: string[];
  lastMessage?: string;
  activeSince?: string;
  deviceId?: string;
}

export interface SyncResponse {
  success: boolean;
  state?: CharacterState;
  error?: string;
}
