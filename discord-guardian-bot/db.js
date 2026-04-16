const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const STATS_FILE = path.join(DATA_DIR, 'stats.json');

function loadStats() {
  try {
    if (fs.existsSync(STATS_FILE)) {
      const raw = fs.readFileSync(STATS_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('[DB] Failed to load stats:', err.message);
  }
  return {};
}

function saveStats(stats) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
  } catch (err) {
    console.error('[DB] Failed to save stats:', err.message);
  }
}

function getGuildStats(stats, guildId) {
  if (!stats[guildId]) {
    stats[guildId] = { messagesScanned: 0, alertsSent: 0, lastReset: Date.now() };
  }
  return stats[guildId];
}

module.exports = { loadStats, saveStats, getGuildStats };
