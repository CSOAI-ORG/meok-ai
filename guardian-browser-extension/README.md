# MEOK Guardian — Chrome Extension

A minimal Manifest V3 browser extension that scans web pages for scam and phishing patterns using the MEOK Guardian API.

## Features

- **Automatic page scanning** on every HTTP/HTTPS site
- **Threat banner injection** for high/critical severity results
- **Popup toggle** to enable or disable scanning
- **Badge alerts** when the current tab is flagged
- **Rate limiting** (one scan per domain per 30 seconds)
- **Trusted-domain allowlist** to reduce noise

## File Structure

```
guardian-browser-extension/
├── manifest.json      # Manifest V3 configuration
├── background.js      # Service worker (badge + notifications)
├── content.js         # Content script (text extraction + API scan + banner)
├── popup.html         # Popup UI markup
├── popup.css          # Popup styles (dark theme)
├── popup.js           # Popup logic
├── icons/             # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md          # This file
```

## How to Load the Unpacked Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked**.
4. Select the `guardian-browser-extension/` directory.
5. The extension will appear in your toolbar. Pin it for easy access.

## How to Configure the MEOK Base URL

By default, the extension points to `https://csoai.org`. To change this:

1. Open `content.js` and update:
   ```js
   const MEOK_BASE_URL = 'https://your-meok-instance.com';
   ```
2. Open `popup.html` and update the dashboard link:
   ```html
   <a href="https://your-meok-instance.com/dashboard" ...>Open Dashboard →</a>
   ```
3. Open `background.js` and update the dashboard URL in `chrome.notifications.onClicked` and other references.
4. Open `manifest.json` and update the `host_permissions` entry:
   ```json
   "https://your-meok-instance.com/*"
   ```
5. Go to `chrome://extensions/`, find MEOK Guardian, and click the **reload** icon.

## Permissions Used

| Permission | Purpose |
|------------|---------|
| `activeTab` | Read the current tab’s content and update its badge |
| `storage` | Persist user toggle state and last scan result |
| `scripting` | Inject banners into pages |
| `notifications` | Notify users of high-severity threats |

## Testing

1. **Load the extension** following the steps above.
2. **Visit an untrusted site** (e.g., a local test page with suspicious text).
3. **Open the popup** — you should see the last scan result and the active/inactive indicator.
4. **Trigger a high/critical mock response** (via a local proxy or by temporarily editing `content.js` to simulate `flagged: true` and `severity: 'high'`).
5. **Observe the banner** injected at the top of the page and the red badge on the extension icon.
6. **Toggle scanning off** in the popup, reload the page, and confirm no scan occurs.

## Notes

- The content script sends only the first ~2000 characters of visible text to avoid overloading the API.
- Scans are debounced per domain per tab session using `sessionStorage`.
- Trusted domains (Google, GitHub, etc.) are skipped automatically.
