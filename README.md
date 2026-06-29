# Virginia Food — TM Tracker

Internal Trade Marketing Activity Tracker for Virginia Food, Inc.

## Quick Start

**Option 1 — Open Locally (No setup needed)**
1. Open `index.html` in any modern browser (Chrome recommended)
2. Log in with your credentials

**Option 2 — Deploy to Netlify (Free hosting)**
1. Go to https://app.netlify.com/drop
2. Drag the entire `vf-tm-tracker/` folder into the browser
3. Get a live URL instantly (e.g. `vf-tracker.netlify.app`)

**Option 3 — Firebase Hosting**
See `DEPLOY.md` for full Firebase setup instructions.

## Demo Credentials

| Role       | Email                                   | Password |
|------------|-----------------------------------------|----------|
| Manager    | msdalumpines@virginiafood.com.ph        | 900591   |
| Supervisor | brmselim@virginiafood.com.ph            | 901439   |
| KAS        | kas@virginiafood.com.ph                 | kas2024  |
| TMS        | vfitrademarketingozamiz@gmail.com       | 904361   |

## File Structure

```
vf-tm-tracker/
├── index.html        ← Main application (self-contained)
├── manifest.json     ← PWA manifest (phone install support)
├── README.md         ← This file
└── css/ js/          ← Reserved for future modular split
```

## Notes

- All data is stored in-memory per session (or in Claude.ai artifact storage if deployed there)
- For persistent shared data across devices, integrate Firebase Firestore
- The app is mobile-responsive and works on Android/iOS browsers

---
Virginia Food, Inc. — Internal Use Only
