AETHEL STUDY PLANNER — LOCAL BROWSER VERSION

This version runs without account sign-in, cloud storage, or enrollment codes. Your planner is saved in the browser's local storage on the current device only.

REPLACE THESE FILES
- index.html
- app.js
- sw.js
- README.md

REMOVE THE OLD SERVER FUNCTION
Delete api/session.js from the repository. The local version does not request /api/session or use the server function.

PUBLISH
1. Replace the files above in the root of your GitHub repository and commit them to main.
2. Delete api/session.js from the api folder and commit that deletion.
3. Wait for Vercel's Production deployment to say Ready.
4. Fully close the installed planner app. Open the site in Chrome and refresh it once, then reopen the installed app. If it still displays the old version, remove the app shortcut and install it again after refreshing the site.

VERCEL SETTINGS
After confirming that no other function in this project uses them, remove the old Supabase and access-code variables from Vercel: SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, SUPABASE_ANON_KEY, SUPABASE_SECRET_KEY, SUPABASE_SERVICE_ROLE_KEY, and ACCESS_CODES. Redeploy after changing environment variables.

DATA
The site code does not delete data already stored in the Supabase project. That data will no longer appear in the website. Existing planner settings already saved in this browser remain there; data that exists only in the cloud will not be copied into this browser automatically. Do not clear browser/site storage if you want to keep local planner progress.
