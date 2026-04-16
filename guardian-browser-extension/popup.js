document.addEventListener('DOMContentLoaded', async () => {
  const toggle = document.getElementById('enable-toggle');
  const statusIndicator = document.getElementById('status-indicator');
  const statusLabel = document.getElementById('status-label');
  const resultCard = document.getElementById('result-card');

  const { enabled = true } = await chrome.storage.local.get('enabled');
  toggle.checked = enabled;
  updateStatusUI(enabled);

  toggle.addEventListener('change', async () => {
    const isEnabled = toggle.checked;
    await chrome.storage.local.set({ enabled: isEnabled });
    updateStatusUI(isEnabled);
  });

  function updateStatusUI(isEnabled) {
    if (isEnabled) {
      statusIndicator.classList.remove('inactive');
      statusLabel.textContent = 'Active';
    } else {
      statusIndicator.classList.add('inactive');
      statusLabel.textContent = 'Disabled';
    }
  }

  const { lastScan } = await chrome.storage.local.get('lastScan');
  renderResult(lastScan);

  function renderResult(scan) {
    if (!scan) {
      resultCard.innerHTML = '<p class="empty">No scan results yet.</p>';
      return;
    }

    const isFlagged = scan.flagged === true;
    const severityClass = (scan.severity || 'none').toLowerCase();
    const timeAgo = formatTimeAgo(scan.timestamp);

    resultCard.innerHTML = `
      <div class="result-row">
        <span class="result-label">Status</span>
        <span class="result-value ${isFlagged ? 'flagged' : 'safe'}">${isFlagged ? 'Flagged' : 'Safe'}</span>
      </div>
      ${isFlagged ? `
      <div class="result-row">
        <span class="result-label">Severity</span>
        <span class="severity-badge ${severityClass}">${scan.severity}</span>
      </div>
      <div class="result-row">
        <span class="result-label">Category</span>
        <span class="result-value">${escapeHtml(scan.category || '—')}</span>
      </div>
      ` : ''}
      <div class="result-row">
        <span class="result-label">Scanned</span>
        <span class="result-value">${timeAgo}</span>
      </div>
      <div class="result-host">${escapeHtml(scan.hostname || '')}</div>
    `;
  }

  function formatTimeAgo(ts) {
    if (!ts) return '—';
    const diff = Date.now() - ts;
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
});
