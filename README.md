# Bonfire

Installable web app (PWA). No build step: plain HTML, CSS and JavaScript.

## Put it online with GitHub Pages
1. On github.com click **New repository**, name it `bonfire`, keep it Public, create it.
2. Click **uploading an existing file**, drag in everything from this folder (index.html, sw.js, manifest.webmanifest, qrcode.js, icon.svg, the icons folder), then **Commit changes**.
3. Go to **Settings > Pages**. Under Branch choose `main` and `/ (root)`, then Save.
4. After about a minute your app is at `https://YOUR-USERNAME.github.io/bonfire/`.

## Install on a phone
- Android (Chrome): open the link, tap the menu, then **Install app**.
- iPhone (Safari): open the link, tap Share, then **Add to Home Screen**.

## Real accounts and chat
See FIREBASE_SETUP.md. Until `firebase-config.js` is filled in, the app runs in demo mode with sample friends and nothing is shared between phones.

## Rebuilding the backend file
`npm install` then `npm run build` regenerates `backend.bundle.js` from `src/backend.js`.
