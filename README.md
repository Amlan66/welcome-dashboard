# Welcome Dashboard

A React + Vite app that reproduces the attached landing page layout.

- Sidebar with navigation, dropdowns, and an Upgrade to Pro prompt
- Top bar with location and profile button
- KPI cards row (15% height)
- Greeting section with action cards (30% height)
- Contact area chart and searchable contacts table (40% height)

## Folder structure

```
frontend/welcome-dashboard/
  ├─ index.html
  ├─ package.json
  ├─ vite.config.ts
  ├─ public/
  │   └─ data_set.txt
  └─ src/
      ├─ main.jsx
      ├─ App.jsx
      ├─ styles.css
      └─ components/
          ├─ Sidebar.jsx
          ├─ Topbar.jsx
          ├─ StatsRow.jsx
          ├─ GreetingActions.jsx
          ├─ ChartPanel.jsx
          └─ ContactsTable.jsx
```

## Setup (no terminal knowledge required)

1. Ensure Node.js is installed. If not, download and install from the official website.
2. Open a code editor (e.g., VS Code) and open the `frontend/welcome-dashboard` folder.
3. In your editor’s integrated terminal or a separate terminal window, run these in order:
   - Install dependencies: `npm install`
   - Start the dev server: `npm run dev`
4. Open the shown local URL (usually `http://localhost:5173`) in your browser.

### Building for production

- Create a production build: `npm run build`
- Preview the build locally: `npm run preview`

## Data source

The contacts table fetches `public/data_set.txt`. You can replace that file with your own JSON array of objects with keys: `first_name`, `email`, `company`, and `created_at`.

## Notes

- Icons are provided via `react-icons` and approximate the look in the screenshot.
- The layout uses CSS Grid and flex with responsive behavior for small screens.

### Troubleshooting

- If you see an error like `TypeError: crypto.getRandomValues is not a function` when starting the dev server, it usually means your Node.js version is too old for the current Vite version. Fix:
  1) Install the latest LTS version of Node.js from the official website.
  2) Close and reopen PowerShell/terminal.
  3) Run `npm install` again and then `npm run dev`.

