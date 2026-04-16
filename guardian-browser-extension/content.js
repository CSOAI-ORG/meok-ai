(function () {
  'use strict';

  const MEOK_BASE_URL = 'https://csoai.org';
  const SCAN_ENDPOINT = `${MEOK_BASE_URL}/api/guardian/scan-message`;
  const SCAN_DEBOUNCE_MS = 30_000;
  const MAX_TEXT_LENGTH = 2000;

  const TRUSTED_DOMAINS = [
    'csoai.org',
    'www.google.com',
    'google.com',
    'www.github.com',
    'github.com',
    'accounts.google.com',
    'docs.google.com',
    'drive.google.com',
    'mail.google.com',
    'www.youtube.com',
    'youtube.com',
    'www.microsoft.com',
    'microsoft.com',
    'apple.com',
    'www.apple.com',
    'amazon.com',
    'www.amazon.com',
    'linkedin.com',
    'www.linkedin.com',
    'twitter.com',
    'x.com',
    'facebook.com',
    'www.facebook.com'
  ];

  const hostname = location.hostname.toLowerCase();
  if (TRUSTED_DOMAINS.some(d => hostname === d || hostname.endsWith('.' + d))) {
    return;
  }

  const storageKey = `meok_guardian_scan_${hostname}`;

  function getVisibleText() {
    const bodyText = document.body?.innerText || document.body?.textContent || '';
    return bodyText.replace(/\s+/g, ' ').trim().slice(0, MAX_TEXT_LENGTH);
  }

  function shouldScan() {
    const lastScan = sessionStorage.getItem(storageKey);
    if (!lastScan) return true;
    return Date.now() - parseInt(lastScan, 10) > SCAN_DEBOUNCE_MS;
  }

  function injectBanner(result) {
    if (document.getElementById('meok-guardian-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'meok-guardian-banner';
    banner.innerHTML = `
      <div class="meok-guardian-inner">
        <div class="meok-guardian-content">
          <strong>⚠️ MEOK Guardian Warning</strong>
          <span class="meok-guardian-severity">${result.severity.toUpperCase()}</span>
          <span class="meok-guardian-category">${result.category || 'Threat detected'}</span>
          <span class="meok-guardian-explanation">${result.explanation || 'This page contains potentially dangerous content.'}</span>
        </div>
        <div class="meok-guardian-actions">
          <a href="${MEOK_BASE_URL}/dashboard" target="_blank" rel="noopener noreferrer">View in Dashboard</a>
          <button id="meok-guardian-dismiss">Dismiss</button>
        </div>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      #meok-guardian-banner {
        all: initial;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2147483647;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background: #0f1115;
        border-bottom: 2px solid #f0b90b;
        color: #e5e7eb;
        padding: 12px 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      }
      #meok-guardian-banner .meok-guardian-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        max-width: 1200px;
        margin: 0 auto;
      }
      #meok-guardian-banner .meok-guardian-content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
      }
      #meok-guardian-banner strong {
        color: #f0b90b;
        font-size: 15px;
      }
      #meok-guardian-banner .meok-guardian-severity {
        background: #dc2626;
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        padding: 2px 8px;
        border-radius: 999px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      #meok-guardian-banner .meok-guardian-category {
        font-size: 13px;
        color: #f59e0b;
        font-weight: 600;
      }
      #meok-guardian-banner .meok-guardian-explanation {
        font-size: 13px;
        color: #9ca3af;
        max-width: 500px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      #meok-guardian-banner .meok-guardian-actions {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
      }
      #meok-guardian-banner a {
        color: #f0b90b;
        font-size: 13px;
        text-decoration: underline;
        cursor: pointer;
      }
      #meok-guardian-banner a:hover {
        color: #fcd34d;
      }
      #meok-guardian-banner button {
        background: transparent;
        border: 1px solid #f0b90b;
        color: #f0b90b;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 13px;
        cursor: pointer;
      }
      #meok-guardian-banner button:hover {
        background: rgba(240, 185, 11, 0.1);
      }
    `;

    document.documentElement.appendChild(style);
    document.documentElement.appendChild(banner);

    document.getElementById('meok-guardian-dismiss').addEventListener('click', () => {
      banner.remove();
      style.remove();
    });
  }

  async function runScan() {
    try {
      const { enabled } = await chrome.storage.local.get('enabled');
      if (enabled === false) return;
    } catch (e) {
      // If storage is unreachable, continue anyway
    }

    if (!shouldScan()) return;
    sessionStorage.setItem(storageKey, String(Date.now()));

    const text = getVisibleText();
    if (!text || text.length < 30) return;

    try {
      const response = await fetch(SCAN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, source: 'browser-extension' })
      });

      if (!response.ok) return;

      const result = await response.json();

      await chrome.storage.local.set({
        lastScan: {
          url: location.href,
          hostname,
          timestamp: Date.now(),
          flagged: result.flagged || false,
          severity: result.severity || 'none',
          category: result.category || '',
          explanation: result.explanation || ''
        }
      });

      if (result.flagged === true && (result.severity === 'high' || result.severity === 'critical')) {
        injectBanner(result);
        chrome.runtime.sendMessage({ type: 'FLAGGED_TAB', severity: result.severity });
      } else {
        chrome.runtime.sendMessage({ type: 'CLEAR_FLAG' });
      }
    } catch (err) {
      // Silently fail to avoid breaking user experience
      console.error('[MEOK Guardian] Scan failed:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runScan);
  } else {
    runScan();
  }
})();
