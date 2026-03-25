'use client';

import React, { Component, type ReactNode } from 'react';

/* ─────────────────────────────────────────────
 * MEOK AI LABS — Error Boundary
 *
 * Character-themed error recovery with exponential
 * backoff retry. Shows companion avatar + empathetic
 * "I stumbled" message before falling back to a
 * simple error display after 3 attempts.
 * ───────────────────────────────────────────── */

const MAX_RETRIES = 3;
const BASE_DELAY_MS = 1000;

interface ErrorBoundaryProps {
  companionId?: string;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  retryCount: number;
  isRetrying: boolean;
}

/** Companion display names keyed by ID */
const COMPANION_NAMES: Record<string, string> = {
  kaia: 'Kaia',
  orion: 'Orion',
  ember: 'Ember',
  sage: 'Sage',
  luna: 'Luna',
};

/** Companion avatar emoji placeholders (swap for real assets later) */
const COMPANION_AVATARS: Record<string, string> = {
  kaia: '/avatars/kaia.png',
  orion: '/avatars/orion.png',
  ember: '/avatars/ember.png',
  sage: '/avatars/sage.png',
  luna: '/avatars/luna.png',
};

function getCompanionName(id?: string): string {
  if (!id) return 'Your Companion';
  return COMPANION_NAMES[id] ?? 'Your Companion';
}

function getCompanionAvatar(id?: string): string | null {
  if (!id) return null;
  return COMPANION_AVATARS[id] ?? null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    retryCount: 0,
    isRetrying: false,
  };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[MEOK ErrorBoundary]', error, info.componentStack);
  }

  handleRetry = () => {
    const { retryCount } = this.state;
    if (retryCount >= MAX_RETRIES) return;

    const delay = Math.min(BASE_DELAY_MS * Math.pow(2, retryCount), 4000);

    this.setState({ isRetrying: true });
    setTimeout(() => {
      this.setState(prev => ({
        hasError: false,
        error: null,
        retryCount: prev.retryCount + 1,
        isRetrying: false,
      }));
    }, delay);
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const { retryCount, isRetrying, error } = this.state;
    const { companionId } = this.props;
    const name = getCompanionName(companionId);
    const avatar = getCompanionAvatar(companionId);
    const exhausted = retryCount >= MAX_RETRIES;

    /* After 3 retries: simple fallback */
    if (exhausted) {
      return (
        <div style={styles.container}>
          <div style={styles.card}>
            <p style={styles.fallbackTitle}>Something went wrong</p>
            <p style={styles.fallbackDetail}>
              {error?.message ?? 'An unexpected error occurred.'}
            </p>
            <button
              style={styles.reloadButton}
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    /* Character-themed error with retry */
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          {avatar && (
            <img
              src={avatar}
              alt={name}
              style={styles.avatar}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          )}
          <p style={styles.companionName}>{name}</p>
          <p style={styles.stumbleMessage}>
            &ldquo;I stumbled for a moment&hellip; let me try again.&rdquo;
          </p>
          <button
            style={{
              ...styles.retryButton,
              opacity: isRetrying ? 0.6 : 1,
              cursor: isRetrying ? 'wait' : 'pointer',
            }}
            onClick={this.handleRetry}
            disabled={isRetrying}
          >
            {isRetrying ? 'Recovering...' : `Retry (${MAX_RETRIES - retryCount} left)`}
          </button>
          {retryCount > 0 && (
            <p style={styles.hint}>Attempt {retryCount} of {MAX_RETRIES}</p>
          )}
        </div>
      </div>
    );
  }
}

/* ── Inline styles (dark MEOK theme + gold accent) ── */

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 240,
    padding: 24,
  },
  card: {
    background: '#1a1a2e',
    border: '1px solid #2a2a4a',
    borderRadius: 16,
    padding: 32,
    maxWidth: 400,
    textAlign: 'center',
    color: '#e0e0e0',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    objectFit: 'cover' as const,
    marginBottom: 12,
    border: '2px solid #d4a843',
  },
  companionName: {
    fontSize: 18,
    fontWeight: 600,
    color: '#d4a843',
    margin: '0 0 8px',
  },
  stumbleMessage: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#b0b0c8',
    margin: '0 0 20px',
    lineHeight: 1.5,
  },
  retryButton: {
    background: 'linear-gradient(135deg, #d4a843 0%, #b8892e 100%)',
    color: '#1a1a2e',
    border: 'none',
    borderRadius: 8,
    padding: '10px 24px',
    fontSize: 14,
    fontWeight: 600,
    transition: 'opacity 0.2s',
  },
  hint: {
    fontSize: 12,
    color: '#888',
    marginTop: 12,
    marginBottom: 0,
  },
  fallbackTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#e0e0e0',
    margin: '0 0 8px',
  },
  fallbackDetail: {
    fontSize: 13,
    color: '#888',
    margin: '0 0 20px',
    wordBreak: 'break-word',
  },
  reloadButton: {
    background: '#2a2a4a',
    color: '#d4a843',
    border: '1px solid #d4a843',
    borderRadius: 8,
    padding: '10px 24px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default ErrorBoundary;
