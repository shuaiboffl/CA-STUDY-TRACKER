Aethel Study Planner — Notes & Daily Quote Intro Update

This update adds:
- A “Notes & to-do” section between Doubt Log and Practice Exam.
- Saved custom notes with edit and delete actions.
- A persistent to-do list with completion checkboxes.
- A compact welcome quote on each planner launch. It fades away after seven seconds and can be dismissed immediately.
- A service worker cache version update so browsers fetch the new planner files.

Install:
1. In the root of your GitHub repository, replace index.html, app.js, and sw.js with the versions in this folder.
2. Commit the changes and wait for the Vercel deployment to finish.
3. Reopen the planner or refresh it once to load the new version.

Notes and to-do items are stored in the current browser on the current device, consistent with the planner’s local-only storage setup.
