AETHEL STUDY PLANNER · VERCEL + SUPABASE SETUP

This CA Foundation planner uses Supabase email/password authentication and cloud-saved planner state. Students can use a Gmail address with a separate planner password. The website never asks for their Gmail password.

DEPLOY THE WEBSITE
1. Put the contents of this folder at the root of your GitHub repository. Keep api/session.js inside the api folder. Keep all icons, index.html, app.js, practice-bank.js, calendar.html, manifest.webmanifest and sw.js at the repository root.
2. Import the repository into Vercel. Choose Framework Preset: Other and leave Build Command blank.
3. Set up the Supabase project described below, add the four Vercel Environment Variables, then redeploy.

CREATE THE SUPABASE DATABASE
1. Create a Supabase project.
2. Open SQL Editor, paste the contents of supabase-setup.sql, and run it once.
3. In Authentication > Providers, keep Email enabled and require email confirmation.
4. In Authentication URL Configuration, add your Vercel site URL to Site URL and Redirect URLs. Include both the production domain and any preview domain you will test.
5. Configure a custom SMTP email sender before inviting a full campus batch. Supabase's default email sender has a very low test limit; students need confirmation and password reset emails.

VERCEL ENVIRONMENT VARIABLES
Add these for Production, Preview and Development as appropriate, then redeploy:

SUPABASE_URL: The Project URL from Supabase Project Settings > API.
SUPABASE_PUBLISHABLE_KEY: The publishable key from Supabase Project Settings > API. This is returned to the browser and is safe only because the SQL enables Row Level Security.
SUPABASE_SECRET_KEY: The secret key from Supabase Project Settings > API. Keep this only in Vercel server-side Environment Variables. Never put it in app.js, index.html, GitHub, screenshots or a student's browser. The API also accepts the legacy SUPABASE_ANON_KEY and SUPABASE_SERVICE_ROLE_KEY names if your project only shows those.
ACCESS_CODES: A JSON array of paid-student enrolment records, for example: [{"hash":"LOWERCASE_SHA256_HASH_HERE","name":"Aarav"}]. Store only code hashes and display names here.

Create a random, unique enrolment code of at least 16 characters for each paid student. Do not base it on their name, birthday or phone number. Hash the raw code locally in PowerShell:
$code = Read-Host 'Private enrolment code to hash'
$bytes = [Text.Encoding]::UTF8.GetBytes($code)
[Convert]::ToHexString([Security.Cryptography.SHA256]::HashData($bytes)).ToLower()
Add the resulting lowercase hash and student's display name to ACCESS_CODES. Send the raw code privately to that student. Each enrolment code can activate one email account only. To replace an account/code, contact the planner owner and issue a new code; do not share or reuse the old one.

HOW STUDENT SIGN-IN WORKS
1. A student creates an account with their email address and a planner password, then verifies their email.
2. They sign in and enter the private enrolment code you gave them. Vercel validates the code and creates their paid-access record in Supabase.
3. Their timetable preferences, syllabus tracker, faculty-coverage ticks, daily calendar ticks, practice answers and doubt log sync to their Supabase account. They can sign in from another device to recover that data.
4. If an older planner is still saved in that browser, the app asks whether to copy it into the new account. Make sure it belongs to the student before confirming.
5. Password recovery is handled by email. Students reset their planner password; they never provide their Gmail password to the site.

DATA AND SECURITY
The browser uses the Supabase publishable/anon key. Row Level Security policies in supabase-setup.sql restrict every planner row to its enrolled owner. The Supabase secret key is used only by api/session.js for activating paid access; never expose it in frontend files. Do not disable Row Level Security. Sign-in and cloud syncing require an internet connection. Check for “Synced to your account” before switching devices or clearing browser data; unsynced changes remain only on the current device.

The app's static shell and syllabus labels are public files. This setup protects each student's planner data, but it is not intended for hosting confidential paid lessons. If you later store protected course content, add server-side access controls and review the security setup before publishing it.

PLANNER FEATURES
Students select an exam attempt, daily study targets, campus/commute schedule, wellbeing and a custom faith/prayer routine. The calendar and Today checklist share timed study ticks. The syllabus tracker includes ICAI BoS links, daily portions, faculty coverage ticks and independent chapter progress. The planner includes original Aethel practice questions, official BoS resource links, a doubt log and a 16-day final syllabus sweep. January 2027 exam dates are loaded from ICAI's published schedule; later attempts are marked pending until ICAI publishes exact dates. Students should confirm details against their admit card and applicable ICAI material.

ICAI MATERIALS
Chapter names follow the CA Foundation study material structure. ICAI owns its study materials; the planner links to official pages and does not reproduce those lessons. Students should check current attempt-specific study material, RTPs, MTPs, corrigenda and notices.

BRAND ICONS AND ADD TO HOME SCREEN
Keep manifest.webmanifest, sw.js, icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png and favicon-32.png at the Vercel project root. On Android, open the HTTPS site in Chrome and choose Install app or Add to Home screen. On iPhone, open the HTTPS site in Safari, tap Share, then Add to Home Screen.

FOOTER LINKS
Built by Shuaib: https://www.instagram.com/shuaiboffl
Powered by Aethel Collective: https://www.instagram.com/aethel.collective_