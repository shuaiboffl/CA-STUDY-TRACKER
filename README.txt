AETHEL STUDY PLANNER · VERCEL DEPLOYMENT

This is a premium-style CA Foundation planner for a small pilot. It contains a mobile sign-in screen, first-use setup, timetable preferences, syllabus tracker, plan phases, and the interactive tick calendar.

DEPLOY
1. Put the contents of this folder at the root of your GitHub repository. Keep index.html, app.js, calendar.html, manifest.webmanifest, sw.js, icon files, and api/session.js in their shown locations.
2. Import the repository into Vercel. Choose Framework Preset: Other. Leave Build Command blank and use the repository root.
3. Add these Vercel Environment Variables for Production: SESSION_SECRET and ACCESS_CODES. Redeploy after setting them.

SESSION_SECRET: set a private random string at least 32 characters long. Never commit it to GitHub.

ACCESS_CODES: a JSON array of records. Each record has a lowercase SHA-256 hash and the student's display name, for example: [{"hash":"LOWERCASE_SHA256_HASH_HERE","name":"Aarav"}]. Create a unique random code of 8+ characters for each paid student; do not make it from their name, date of birth, or phone number. Hash the raw code locally with PowerShell:
$code = Read-Host 'Private code to hash'
$bytes = [Text.Encoding]::UTF8.GetBytes($code)
[Convert]::ToHexString([Security.Cryptography.SHA256]::HashData($bytes)).ToLower()
Store only the resulting hash and display name in Vercel's ACCESS_CODES JSON. Give the raw code privately to that student. Never place raw codes in website files, screenshots, or GitHub. Remove the matching hash from ACCESS_CODES and redeploy to revoke access.

A successful sign-in is remembered for five years in an HttpOnly, signed cookie on that browser/device. This starter version does not enforce one-device-only or one-time redemption, and does not synchronize progress between devices. The chapter statuses and tick marks are saved locally in the student's browser.

SECURITY SCOPE
Access-code validation happens in a Vercel serverless function, not in public JavaScript. The planner shell and syllabus topic labels are still static/public files; this is appropriate for a planner utility, not for hiding confidential paid course material. If you later sell protected lessons, add a database, rate limiting, redemption tracking, and authenticated server-side data endpoints before publishing them.

SYLLABUS BASIS
Chapter names are organized from ICAI Board of Studies Foundation pages marked applicable from May 2026 onward. These are the current paper structures for the January 2027 preparation plan; verify ICAI's newest corrigenda, RTP and exam notices for each attempt. ICAI retains the rights to its study materials; this planner links to official pages and does not reproduce lesson content.


BRAND ICONS AND ADD TO HOME SCREEN
The supplied Aethel monogram is used for the website header, browser favicon, Android/PWA app icon, and Apple touch icon. Upload the updated files and keep them together at the Vercel project root, including manifest.webmanifest, sw.js, icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, and favicon-32.png. Redeploy the site. On Android, open the HTTPS site in Chrome, sign in, open the browser menu, and choose Install app or Add to Home screen. On iPhone, open the HTTPS site in Safari, sign in, tap Share, then Add to Home Screen.
