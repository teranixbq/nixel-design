# Nixel

A vector-pixel design system and living workspace framework for autonomous AI teams and product workflows.

Most agent dashboards either dump raw JSON into table grids or borrow retro 8-bit game aesthetics that look out of place in production software. Nixel pairs contemporary Scandinavian web typography and card layouts with a fast 60 FPS pixel canvas. Workers move between desks and break amenities based on actual job status.

## Live Demo

- GitHub Pages: https://teranixbq.github.io/nixel-design/
- Local preview: Open `index.html` in any browser or run `npx serve .`

## Highlights

- **Dynamic role schema:** Workspaces scale to any number of team members. Desks, room titles, and coordinates render from a plain JSON configuration.
- **Physical break routines:** When idle, workers stand up, walk across the floor, and use communal spots (water cooler with rising bubbles, tufted sofa, espresso bar, whiteboard).
- **Workstation screen OS:** Clicking any worker's desk computer opens an interactive modal with activity logs, task checklists, and upcoming schedules.
- **Cozy Scandinavian floorplan:** Parquet oak flooring, tufted terracotta lounge sofa, potted monsteras, arc floor lamp, and wooden coat rack.
- **Dual mode:** Clean warm cream (`#FBF9F5`) and obsidian dark mode (`#18191A`). The central canvas keeps an illuminated studio floor in both modes.

## Quick Start

Run it locally with no build tools required:

```bash
git clone https://github.com/teranixbq/nixel-design.git
cd nixel-design
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Skill Installation

To install Nixel as a reusable skill in your AI agent environment:

### Method 1: Git Clone
Clone the repository directly into your agent's skills directory:
```bash
git clone https://github.com/teranixbq/nixel-design.git path/to/your/skills/nixel
```

### Method 2: Copy Folder
Copy the `skill/` folder into your project workspace:
```bash
mkdir -p skills/nixel
cp -r skill/* skills/nixel/
```

Your AI agent reads `SKILL.md` for layout and coordinate generation, and uses `templates/` to scaffold files.

## Project Structure

```text
nixel-design/
├── index.html                  # Main living office interface
├── css/
│   └── nixel-office.css        # Layout, typography, and dark theme
├── js/
│   ├── nixel-office-assets.js  # Sofa, plants, fixtures, and domain props
│   ├── nixel-office-canvas.js  # Canvas engine, walk cycles, and hover detection
│   └── nixel-office-app.js     # Role cards, domain presets, and screen OS
├── skill/
│   ├── SKILL.md                # AI agent instructions
│   ├── README.md               # Skill installation guide
│   └── templates/              # Scaffold files
├── DESIGN.md                   # Formal design token specification
└── tokens.json                 # W3C DTCG format tokens
```

## License

MIT. Built by Hanief F.B.A (@teranixbq).
