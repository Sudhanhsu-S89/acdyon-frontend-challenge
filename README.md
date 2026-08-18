# FlowPilot — Premium Home Page

A static home page for **FlowPilot**, a fictional workflow automation product for teams. Built as Part 2 of the Acdyon Technologies Frontend Challenge.

## Product Concept

FlowPilot is a workflow automation tool that lets teams define, run, and track repeatable processes (deployment pipelines, onboarding flows, reporting) in one place — replacing scattered scripts, spreadsheets, and manual handoffs.

## Technologies

- **HTML** — semantic structure
- **CSS** — custom properties, Flexbox, Grid, media queries
- **Vanilla JavaScript** — DOM manipulation only
- **Google Fonts** — Inter typeface

No frameworks, libraries, or build tools.

## File Structure

```
├── index.html      Main page
├── styles.css      All styles
├── script.js       Interactions
├── README.md       This file
└── DECISIONS.md    Design and technical decisions
```

## Running Locally

Open `index.html` in any modern browser. No server or build step required.

Alternatively, use a local server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

## Deploying

**GitHub Pages:** Push to a GitHub repo → Settings → Pages → Deploy from main branch.

**Netlify:** Drag the project folder into [app.netlify.com/drop](https://app.netlify.com/drop).

**Vercel:** `npx vercel --prod` from the project directory.

## Key Features

- Responsive design (390px – 1440px)
- Coded product mockup with interactive workflow runner
- One micro-interaction: sequential workflow execution
- No external dependencies beyond Google Fonts
- Konami code Easter egg (↑↑↓↓←→←→BA)
