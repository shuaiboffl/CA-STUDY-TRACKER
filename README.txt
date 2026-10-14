AETHEL STUDY PLANNER · VERCEL DEPLOYMENT

This is a premium-style CA Foundation planner for a small pilot. It contains a mobile sign-in screen, first-use setup, timetable preferences, syllabus tracker, plan phases, and the interactive tick calendar.

DEPLOY
1. Put the contents of this folder at the root of your GitHub repository. Keep index.html, app.js, practice-bank.js, calendar.html, manifest.webmanifest, sw.js, icon files, and api/session.js in their shown locations.
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
Chapter names follow the CA Foundation course study material structure and link to official ICAI Board of Studies pages. Before studying, check the edition, attempt-specific RTP, MTP, corrigenda and exam notices currently prescribed by ICAI for your attempt. ICAI retains the rights to its study materials; this planner links to official pages and does not reproduce lesson content.


BRAND ICONS AND ADD TO HOME SCREEN
The supplied Aethel monogram is used for the website header, browser favicon, Android/PWA app icon, and Apple touch icon. Upload the updated files and keep them together at the Vercel project root, including manifest.webmanifest, sw.js, icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, and favicon-32.png. Redeploy the site. On Android, open the HTTPS site in Chrome, sign in, open the browser menu, and choose Install app or Add to Home screen. On iPhone, open the HTTPS site in Safari, sign in, tap Share, then Add to Home Screen.

PLANNER FEATURES
The first-use setup lets a student select an exam attempt, targets for study leave/campus/Sunday, campus hours and days, wellbeing, and a faith/prayer routine with self-entered local times. The calendar and Today checklist use the same per-date task IDs and local completion store. A date can be changed to Campus, Study leave, Self-study, Sunday/Recovery or Auto. The January 2027 Foundation dates are loaded from ICAI’s announcement: 3, 5, 7 and 9 January; paper labels follow paper order and students should confirm details on the admit card. Later attempt dates are explicitly marked pending until ICAI publishes them; month-end is only a planning horizon. The planner provides original Aethel practice questions and links to official ICAI BoS resources. Student setup, ticks, answers and progress are local to each browser/device and do not sync between devices.


Planner update: profile setup now asks separately for home-to-campus and campus-to-home commute minutes. The campus timetable calculates departure and arrival independently. The Today view adds a daily ICAI-material portion checklist that syncs with chapter statuses in the syllabus tracker and with matching calendar ticks. Study Strategy includes a date-by-date 16-day syllabus completion map ending the day before the first scheduled paper. For attempts without published ICAI dates, that map is labelled provisional. Confirm subject/date details against the official admit card and current ICAI BoS material.


FEATURE UPDATE · PERSONAL STUDY SUPPORT
The planner now includes a faculty/self-doubt log with subject, date, topic, notes and a Doubt cleared control. Study-block ticks unlock at the scheduled start and close 30 minutes after the block ends; the same rule applies in Today and the tick calendar. Today’s syllabus portions can be marked complete or left open, and unfinished portions stay visible in a separate list. Study-hour progress counts only completed study blocks and shows the last seven days. Personal work is labelled simply as Personal work. New users can request an access code using the WhatsApp button on the login screen.

PRACTICE BANK
There are 100 original MCQs mapped to Foundation syllabus chapters plus 10 descriptive prompts for Accounting and Business Laws. “Today’s focus” filters the question set to the assigned chapter portions and keeps topics in syllabus order. These are original practice items, not official ICAI questions. The BoS resources open the official model-paper, RTP, MTP and previous-paper listings; students should check attempt applicability on ICAI.


FACULTY COVERAGE CHECKLIST
The Syllabus Tracker includes a separate Faculty completed portions checklist with independent ticks and per-paper counts. Its ticks are saved in the current browser/device and do not change the student's chapter status or daily study progress.
