chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ enabled: true });
  chrome.action.setBadgeBackgroundColor({ color: '#ef4444' });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'FLAGGED_TAB') {
    if (sender.tab?.id) {
      chrome.action.setBadgeText({ text: '!', tabId: sender.tab.id });
      chrome.action.setBadgeBackgroundColor({ color: '#ef4444', tabId: sender.tab.id });
    }
  } else if (message.type === 'CLEAR_FLAG') {
    if (sender.tab?.id) {
      chrome.action.setBadgeText({ text: '', tabId: sender.tab.id });
    }
  }
});

chrome.notifications.onClicked.addListener((notificationId) => {
  if (notificationId.startsWith('meok-guardian-')) {
    chrome.tabs.create({ url: 'https://csoai.org/dashboard' });
    chrome.notifications.clear(notificationId);
  }
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  try {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    if (!tab?.url) return;
    const hostname = new URL(tab.url).hostname;
    const { lastScan } = await chrome.storage.local.get('lastScan');
    if (lastScan && lastScan.hostname === hostname && lastScan.flagged) {
      chrome.action.setBadgeText({ text: '!', tabId: activeInfo.tabId });
      chrome.action.setBadgeBackgroundColor({ color: '#ef4444', tabId: activeInfo.tabId });
    } else {
      chrome.action.setBadgeText({ text: '', tabId: activeInfo.tabId });
    }
  } catch (e) {
    // Ignore errors for restricted URLs
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    chrome.action.setBadgeText({ text: '', tabId });
  }
});
