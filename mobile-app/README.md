# MEOK Mobile (Capacitor)

This directory contains a Capacitor wrapper that turns the MEOK Next.js PWA into a native iOS/Android app.

## Prerequisites

- Node.js 18+
- Xcode (for iOS)
- Android Studio (for Android)

## Build the Next.js app

The Capacitor wrapper points at the static export of the Next.js app.

```bash
cd ../ui
npx next build -c next.config.mobile.ts
```

The mobile config (`next.config.mobile.ts`) enables:

- `output: 'export'` — static HTML export required by Capacitor
- `distDir: 'dist'` — output directory mapped to Capacitor's `webDir`
- `images.unoptimized: true` — required for static export

This produces a fully static build at `../ui/dist/`.

## Sync Capacitor

After the Next.js build completes, sync the web assets into the native platforms:

```bash
cd mobile-app
npx cap sync
```

This copies `../ui/dist` into `ios/App/App/public` and `android/app/src/main/assets/public`.

## Open native IDEs

### iOS

```bash
npx cap open ios
```

Then build and run from Xcode.

### Android

```bash
npx cap open android
```

Then build and run from Android Studio.

## Icons & Splash Screens

Place your source assets in `mobile-app/resources/`:

```
resources/
  icon.png       # 1024×1024 app icon
  splash.png     # 2732×2732 splash screen
```

Generate all platform-specific sizes with `@capacitor/assets`:

```bash
npm install -g @capacitor/assets
cd mobile-app
npx capacitor-assets generate
```

This will populate:

- `ios/App/App/Assets.xcassets/`
- `android/app/src/main/res/`

After generating assets, run `npx cap sync` again to ensure everything is up to date.
